const { getClientMeta, normalizeEmail, parseBody, send, validateBotGuard } = require("./lib/core");
const { upsertUser } = require("./lib/db");

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return send(200, {});
  if (event.httpMethod !== "POST") return send(405, { success: false, error: "Metodo no permitido" });

  try {
    const body = parseBody(event);
    validateBotGuard(body, { requireEmail: true });

    const email = normalizeEmail(body.email);
    const user = await upsertUser({
      email,
      name: body.name || "",
      metadata: {
        source: body.source || "protocol-ai",
        client: getClientMeta(event)
      }
    });

    return send(200, {
      success: true,
      user: {
        id: user?.id || null,
        email,
        status: user?.status || "free"
      },
      dbAvailable: Boolean(user?.dbAvailable)
    });
  } catch (error) {
    return send(error.statusCode || 500, {
      success: false,
      error: error.statusCode ? error.message : "No se pudo identificar el usuario"
    });
  }
};
