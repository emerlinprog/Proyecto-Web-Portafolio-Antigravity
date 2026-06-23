const { getClientMeta, normalizeEmail, parseBody, send, validateBotGuard } = require("./lib/core");
const { recordWaitlist, upsertUser } = require("./lib/db");

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return send(200, {});
  if (event.httpMethod !== "POST") return send(405, { success: false, error: "Metodo no permitido" });

  try {
    const body = parseBody(event);
    validateBotGuard(body, { requireEmail: true });

    const email = normalizeEmail(body.email);
    const user = await upsertUser({
      email,
      metadata: {
        source: body.source || "protocol-ai-waitlist",
        product: body.product || "protocol-ai-pro"
      }
    });

    await recordWaitlist({
      email,
      userId: user?.id || null,
      product: body.product || "protocol-ai-pro",
      source: body.source || "protocol-ai",
      metadata: {
        reason: body.reason || "pro-access",
        client: getClientMeta(event)
      }
    });

    return send(200, { success: true, status: "waitlist" });
  } catch (error) {
    return send(error.statusCode || 500, {
      success: false,
      error: error.statusCode ? error.message : "No se pudo registrar la waitlist"
    });
  }
};
