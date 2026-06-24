const crypto = require("crypto");

const jsonHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Content-Type": "application/json"
};

function send(statusCode, body = {}) {
  return { statusCode, headers: jsonHeaders, body: JSON.stringify(body) };
}

function normalizeEmail(email) {
  if (!email || typeof email !== "string") return null;
  const trimmed = email.trim().toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) ? trimmed : null;
}

function normalizeInput(value, maxLength = 5000) {
  if (value === undefined || value === null) return "";
  return String(value).replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function parseBody(event) {
  if (!event.body) return {};
  try {
    return JSON.parse(event.body);
  } catch {
    const error = new Error("JSON invalido");
    error.statusCode = 400;
    throw error;
  }
}

function hashValue(value) {
  const salt = process.env.SECURITY_HASH_SALT || "local-dev-salt";
  return crypto
    .createHash("sha256")
    .update(`${salt}:${value || "unknown"}`)
    .digest("hex");
}

function getClientMeta(event) {
  const headers = event.headers || {};
  const forwarded = headers["x-forwarded-for"] || headers["X-Forwarded-For"] || "";
  const ip = String(forwarded).split(",")[0].trim() || headers["client-ip"] || "unknown";
  const userAgent = headers["user-agent"] || headers["User-Agent"] || "unknown";

  return {
    ipHash: hashValue(ip),
    userAgentHash: hashValue(userAgent),
    country: headers["x-country"] || headers["X-Country"] || null,
    referer: headers.referer || headers.Referrer || null
  };
}

function estimateTokens(value) {
  const text = String(value || "");
  return Math.max(1, Math.ceil(text.length / 4));
}

function validateBotGuard(body = {}, options = {}) {
  const { requireEmail = false } = options;

  if (requireEmail && !normalizeEmail(body.email)) {
    const error = new Error("Ingresa un email valido");
    error.statusCode = 400;
    throw error;
  }

  if (body.website || body.company_url) {
    const error = new Error("Solicitud rechazada");
    error.statusCode = 400;
    throw error;
  }

  const minElapsed = Number(process.env.BOT_MIN_ELAPSED_MS || 0);
  const elapsed = Number(body.elapsedMs || body.formElapsedMs || 0);
  if (minElapsed > 0 && elapsed > 0 && elapsed < minElapsed) {
    const error = new Error("Solicitud enviada demasiado rapido");
    error.statusCode = 400;
    throw error;
  }
}

module.exports = {
  estimateTokens,
  getClientMeta,
  normalizeEmail,
  normalizeInput,
  parseBody,
  send,
  validateBotGuard
};
