// Suite Validacion - save session in Netlify Database, then sync Airtable when configured.

const { normalizeEmail, parseBody } = require("./lib/core");
const { recordValidationSession, upsertUser } = require("./lib/db");

const BASE_ID  = "app3lrUyWzMta9w0j";
const TABLE_ID = "tblOzjv5lXs2JBaXW";

const FIELDS = {
  proyecto:          "fldIZLAl5KymqFSXL",
  score:             "flddIP5hwKZLc3lqN",
  fase:              "fldbtVUXFX0ktDS0z",
  fecha:             "fldamLHXbZIwpDZDR",
  tam:               "fldmGt4zWUnUZj3aI",
  sam:               "fldmx6J047cySY0hh",
  som:               "fldpZRfMmTn8TGcNx",
  scoreDolor:        "fldud2ovz0AMeo9Zd",
  scoreBeachhead:    "fld72tOJWLDRAXQ9P",
  scoreFundador:     "fldFBZiHwtp8UhH7b",
  scoreCanal:        "flduuCAD8WWfEPHEM",
  hipValidadas:      "fld2HeRO94al2vrH3",
  hipTotales:        "fldi2YAP4MSMh1Uoz",
  brief:             "fldacojfJMie7pFOS",
  estado:            "fld07ORLup3Vobwm8",
};

const jsonHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json"
};

function response(statusCode, body) {
  return { statusCode, headers: jsonHeaders, body: JSON.stringify(body) };
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return { statusCode: 204, headers: jsonHeaders, body: "" };
  if (event.httpMethod !== "POST") return response(405, { error: "Method not allowed" });

  // ── Netlify Identity auth check ──
  const identityUser = event.clientContext?.user;
  if (!identityUser) return response(401, { error: "No autorizado." });

  let body;
  try {
    body = parseBody(event);
  } catch {
    return response(400, { error: "JSON invalido" });
  }

  const {
    proyecto = "Sin nombre",
    email = "",
    score = 0,
    fase = "Idea Temprana",
    tam = 0, sam = 0, som = 0,
    scoreDolor = 0, scoreBeachhead = 0, scoreFundador = 0, scoreCanal = 0,
    hipValidadas = 0, hipTotales = 0,
    brief = "",
    estado = "En Progreso",
  } = body;

  const apiKey = process.env.AIRTABLE_API_KEY;
  const normalizedEmail = normalizeEmail(email);
  const dbUser = normalizedEmail
    ? await upsertUser({ email: normalizedEmail, metadata: { source: "suite-validacion" } })
    : null;

  let dbSessionId = null;
  try {
    dbSessionId = await recordValidationSession({
      userId: dbUser?.id || null,
      proyecto,
      score,
      fase,
      tam,
      sam,
      som,
      scoreDolor,
      scoreBeachhead,
      scoreFundador,
      scoreCanal,
      hipValidadas,
      hipTotales,
      brief,
      estado,
      syncStatus: apiKey ? "pending_airtable" : "db_only",
      metadata: { email: normalizedEmail || null }
    });
  } catch (error) {
    console.error("Netlify Database save-session error:", error);
  }

  if (!apiKey) {
    if (dbSessionId) return response(200, { success: true, dbSessionId, airtableWarning: "AIRTABLE_API_KEY no configurada" });
    return response(500, { error: "AIRTABLE_API_KEY no configurada" });
  }

  const record = {
    fields: {
      [FIELDS.proyecto]:       proyecto,
      [FIELDS.score]:          score,
      [FIELDS.fase]:           fase,
      [FIELDS.fecha]:          new Date().toISOString(),
      [FIELDS.tam]:            tam,
      [FIELDS.sam]:            sam,
      [FIELDS.som]:            som,
      [FIELDS.scoreDolor]:     scoreDolor,
      [FIELDS.scoreBeachhead]: scoreBeachhead,
      [FIELDS.scoreFundador]:  scoreFundador,
      [FIELDS.scoreCanal]:     scoreCanal,
      [FIELDS.hipValidadas]:   hipValidadas,
      [FIELDS.hipTotales]:     hipTotales,
      [FIELDS.brief]:          brief,
      [FIELDS.estado]:         estado,
    }
  };

  try {
    const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ records: [record] }),
    });

    const data = await res.json();
    if (!res.ok) {
      if (dbSessionId) return response(200, { success: true, dbSessionId, airtableWarning: data.error || "Error Airtable" });
      return response(res.status, { error: data.error || "Error Airtable" });
    }

    return response(200, { success: true, id: data.records?.[0]?.id, dbSessionId });
  } catch (err) {
    if (dbSessionId) return response(200, { success: true, dbSessionId, airtableWarning: err.message });
    return response(500, { error: err.message });
  }
};
