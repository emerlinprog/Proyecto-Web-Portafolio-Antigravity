let cachedDb = null;
let dbDisabled = false;

function hasDatabaseEnv() {
  return Boolean(process.env.NETLIFY_DB_URL || process.env.DATABASE_URL);
}

function getDb() {
  if (dbDisabled || !hasDatabaseEnv()) return null;
  if (cachedDb) return cachedDb;

  try {
    const { getDatabase } = require("@netlify/database");
    cachedDb = getDatabase({ connectionString: process.env.NETLIFY_DB_URL || process.env.DATABASE_URL });
    return cachedDb;
  } catch (error) {
    dbDisabled = true;
    console.warn("[db] Netlify Database unavailable:", error.message);
    return null;
  }
}

async function query(sql, params = []) {
  const db = getDb();
  if (!db?.pool) return { rows: [], dbAvailable: false };
  try {
    const result = await db.pool.query(sql, params);
    return { ...result, dbAvailable: true };
  } catch (error) {
    console.warn("[db] Query skipped:", error.message);
    return { rows: [], dbAvailable: false };
  }
}

function toJson(value) {
  return JSON.stringify(value || {});
}

function summarize(value, max = 500) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, max);
}

function periodKey(period) {
  const now = new Date();
  if (period === "month") return `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, "0")}`;
  return now.toISOString().slice(0, 10);
}

async function upsertUser({ email, name = "", metadata = {} }) {
  if (!email) return null;

  const result = await query(
    `INSERT INTO users (email, name, metadata, updated_at)
     VALUES ($1, $2, $3::jsonb, now())
     ON CONFLICT (email)
     DO UPDATE SET
       name = COALESCE(NULLIF(EXCLUDED.name, ''), users.name),
       metadata = users.metadata || EXCLUDED.metadata,
       updated_at = now()
     RETURNING id, email, name, status, metadata`,
    [email, name, toJson(metadata)]
  );

  return result.rows[0] || { id: null, email, name, status: "free", metadata, dbAvailable: false };
}

async function checkIpThrottle({ tool, ipHash, maxPerHour = 10 }) {
  if (!ipHash) return { allowed: true, used: 0, limit: maxPerHour, dbAvailable: false };

  const result = await query(
    `SELECT count(*)::int AS used
     FROM tool_runs
     WHERE tool = $1 AND ip_hash = $2 AND created_at > now() - interval '1 hour'`,
    [tool, ipHash]
  );

  const used = result.rows[0]?.used || 0;
  return { allowed: !result.dbAvailable || used < maxPerHour, used, limit: maxPerHour, dbAvailable: result.dbAvailable };
}

async function consumeSingleQuota({ userId, tool, period, limitCount }) {
  const key = periodKey(period);
  const result = await query(
    `INSERT INTO usage_quotas (user_id, tool, period, period_key, limit_count, used_count, updated_at)
     VALUES ($1, $2, $3, $4, $5, 1, now())
     ON CONFLICT (user_id, tool, period, period_key)
     DO UPDATE SET
       limit_count = EXCLUDED.limit_count,
       used_count = usage_quotas.used_count + 1,
       updated_at = now()
     RETURNING used_count, limit_count`,
    [userId, tool, period, key, limitCount]
  );

  const row = result.rows[0];
  if (!row) return { allowed: true, used: 0, limit: limitCount, period, key, dbAvailable: false };
  return {
    allowed: row.used_count <= row.limit_count,
    used: row.used_count,
    limit: row.limit_count,
    period,
    key,
    dbAvailable: true
  };
}

async function consumeQuota({ userId, tool, dailyLimit = 1, monthlyLimit = 3 }) {
  if (!userId) {
    return {
      allowed: true,
      dbAvailable: false,
      daily: { used: 0, limit: dailyLimit },
      monthly: { used: 0, limit: monthlyLimit }
    };
  }

  const daily = await consumeSingleQuota({ userId, tool, period: "day", limitCount: dailyLimit });
  const monthly = await consumeSingleQuota({ userId, tool, period: "month", limitCount: monthlyLimit });
  return { allowed: daily.allowed && monthly.allowed, dbAvailable: daily.dbAvailable || monthly.dbAvailable, daily, monthly };
}

async function recordToolRun({
  userId = null,
  tool,
  source = "web",
  input = "",
  output = "",
  fallback = false,
  status = "success",
  metadata = {},
  ipHash = null,
  userAgentHash = null
}) {
  const result = await query(
    `INSERT INTO tool_runs
      (user_id, tool, source, input_summary, output_summary, fallback, status, metadata, ip_hash, user_agent_hash)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8::jsonb, $9, $10)
     RETURNING id`,
    [userId, tool, source, summarize(input), summarize(output), Boolean(fallback), status, toJson(metadata), ipHash, userAgentHash]
  );

  return result.rows[0]?.id || null;
}

async function recordAiCost({
  toolRunId = null,
  provider,
  model,
  inputTokens = 0,
  outputTokens = 0,
  estimatedCostUsd = 0,
  metadata = {}
}) {
  const result = await query(
    `INSERT INTO ai_cost_events
      (tool_run_id, provider, model, input_tokens, output_tokens, estimated_cost_usd, metadata)
     VALUES ($1, $2, $3, $4, $5, $6, $7::jsonb)
     RETURNING id`,
    [toolRunId, provider, model, inputTokens, outputTokens, estimatedCostUsd, toJson(metadata)]
  );

  return result.rows[0]?.id || null;
}

async function recordWaitlist({ email, userId = null, product = "protocol-ai-pro", source = "protocol-ai", metadata = {} }) {
  const result = await query(
    `INSERT INTO waitlist_entries (user_id, email, product, source, metadata)
     VALUES ($1, $2, $3, $4, $5::jsonb)
     ON CONFLICT (email, product)
     DO UPDATE SET metadata = waitlist_entries.metadata || EXCLUDED.metadata
     RETURNING id`,
    [userId, email, product, source, toJson(metadata)]
  );

  return result.rows[0]?.id || null;
}

async function recordWizardBrief(data) {
  const result = await query(
    `INSERT INTO wizard_briefs
      (user_id, email, source, status, org, pain, urgency, stack, vision, brief, fallback, metadata)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12::jsonb)
     RETURNING id`,
    [
      data.userId || null,
      data.email || null,
      data.source || "discovery-wizard",
      data.status || "lead",
      data.org || null,
      data.pain || null,
      data.urgency || null,
      data.stack || null,
      data.vision || null,
      data.brief || "",
      Boolean(data.fallback),
      toJson(data.metadata)
    ]
  );

  return result.rows[0]?.id || null;
}

async function recordValidationSession(data) {
  const result = await query(
    `INSERT INTO validation_sessions
      (user_id, proyecto, score, fase, tam, sam, som, score_dolor, score_beachhead,
       score_fundador, score_canal, hip_validadas, hip_totales, brief, estado, sync_status, metadata)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17::jsonb)
     RETURNING id`,
    [
      data.userId || null,
      data.proyecto || "Sin nombre",
      Number(data.score || 0),
      data.fase || "Idea Temprana",
      Number(data.tam || 0),
      Number(data.sam || 0),
      Number(data.som || 0),
      Number(data.scoreDolor || 0),
      Number(data.scoreBeachhead || 0),
      Number(data.scoreFundador || 0),
      Number(data.scoreCanal || 0),
      Number(data.hipValidadas || 0),
      Number(data.hipTotales || 0),
      data.brief || "",
      data.estado || "En Progreso",
      data.syncStatus || "pending",
      toJson(data.metadata)
    ]
  );

  return result.rows[0]?.id || null;
}

module.exports = {
  checkIpThrottle,
  consumeQuota,
  recordAiCost,
  recordToolRun,
  recordValidationSession,
  recordWaitlist,
  recordWizardBrief,
  upsertUser
};
