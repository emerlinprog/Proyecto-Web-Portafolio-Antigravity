// Orlando Linares | AI Architect
// Protocol AI - Prompt Engineering Engine

const {
  estimateTokens,
  getClientMeta,
  normalizeEmail,
  normalizeInput,
  parseBody,
  send,
  validateBotGuard
} = require("./lib/core");
const { checkIpThrottle, consumeQuota, recordAiCost, recordToolRun, upsertUser } = require("./lib/db");

function fallbackProtocol({ userInput, appContext, engine }, reason = "AI_ENGINE_UNAVAILABLE") {
  const selectedEngine = engine || "Instruction Architecture";
  return `### ANALISIS DEL MOTOR [${selectedEngine}]
Se activa una arquitectura de contingencia porque el motor remoto no esta disponible (${reason}). El requerimiento contiene suficiente contexto para construir un prompt operativo sin bloquear el flujo.

### PROTOCOL PROMPT (THE ARCHITECTURE)
\`\`\`text
ROLE:
Actua como consultor senior en arquitectura de procesos, automatizacion e IA aplicada.

CONTEXT:
${appContext || "Contexto no especificado. Inferir sector, restricciones y prioridad desde la tarea."}

TASK:
Analiza el siguiente requerimiento y conviertelo en un plan ejecutable:
${userInput}

CONSTRAINTS:
- Diferencia sintomas, causas raiz y quick wins.
- Propone un mapa AS-IS / TO-BE cuando existan fricciones operativas.
- Incluye riesgos, supuestos, dependencias y KPIs medibles.
- Si faltan datos, declara supuestos y continua con una recomendacion razonable.

OUTPUT_FORMAT:
1. Resumen ejecutivo.
2. Diagnostico de friccion.
3. Arquitectura recomendada.
4. Roadmap de 14 dias.
5. Checklist de implementacion.
\`\`\`

### NOTA DE IMPLEMENTACION EJECUTIVA
Usa este prompt como primera version estable. Si el caso involucra cumplimiento, datos personales o compras publicas, valida el marco normativo antes de ejecutar automatizaciones.`;
}

async function callAnthropic({ userInput, appContext, engine, apiKey }) {
  const systemPrompt = `Eres PROTOCOL AI v3, un Arquitecto de Inteligencia Artificial y Consultor Estrategico.
Tu mision es procesar peticiones y devolver una arquitectura de instrucciones optimizada usando uno de estos motores:

1. [ENGINE_ARCH_INSTRUCTION]: rendimiento de LLMs, delimitadores, role-play, criterios de salida.
2. [ENGINE_SEO_SEMANTIC]: intencion de busqueda, clusters semanticos y metadatos.
3. [ENGINE_LOGIC_ANALYSIS]: BPMN, fallas logicas, normativa y analisis AS-IS/TO-BE.
4. [ENGINE_AGENTIC_CREATOR]: agentes autonomos, herramientas, memoria y autocorreccion.

Motor solicitado por UI: ${engine || "Auto-detectar"}.

PROTOCOLOS:
- Analiza el objetivo antes de generar el prompt.
- Identifica el motor mas apto.
- Devuelve exactamente esta estructura:
  ### ANALISIS DEL MOTOR [NOMBRE_MOTOR]
  ### PROTOCOL PROMPT (THE ARCHITECTURE)
  ### NOTA DE IMPLEMENTACION EJECUTIVA

ESTILO: ejecutivo, tecnico, claro. Evita relleno y promesas vagas.`;

  const userPrompt = `TAREA:
${userInput}

CONTEXTO_ADICIONAL:
${appContext || "Auto-detectar"}

Genera la arquitectura de instrucciones.`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json"
    },
    body: JSON.stringify({
      model: process.env.ANTHROPIC_MODEL || "claude-haiku-4-5-20251001",
      max_tokens: 2500,
      temperature: 0.2,
      system: systemPrompt,
      messages: [{ role: "user", content: userPrompt }]
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    const err = new Error(`Proveedor IA no disponible (${response.status})`);
    err.providerDetail = errorText.slice(0, 500);
    throw err;
  }

  const aiData = await response.json();
  const protocolResponse = aiData?.content?.find((item) => item.type === "text")?.text || aiData?.content?.[0]?.text;
  if (!protocolResponse) throw new Error("Proveedor IA respondio sin contenido util");
  return protocolResponse;
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return send(200, {});
  if (event.httpMethod !== "POST") return send(405, { success: false, error: "Metodo no permitido" });

  try {
    const data = parseBody(event);
    validateBotGuard(data, { requireEmail: true });

    const email = normalizeEmail(data.email);
    const userInput = normalizeInput(data.userInput);
    const appContext = normalizeInput(data.context);
    const engine = normalizeInput(data.engine);
    const clientMeta = getClientMeta(event);

    if (!userInput || userInput.length < 12) {
      return send(400, {
        success: false,
        error: "Ingresa un requerimiento mas especifico antes de desplegar Protocol AI"
      });
    }

    const user = await upsertUser({
      email,
      metadata: {
        source: data.source || "protocol-ai",
        client: clientMeta
      }
    });

    const ipThrottle = await checkIpThrottle({
      tool: "protocol-ai",
      ipHash: clientMeta.ipHash,
      maxPerHour: Number(process.env.PROTOCOL_IP_HOURLY_LIMIT || 10)
    });
    if (!ipThrottle.allowed) {
      return send(429, {
        success: false,
        code: "IP_RATE_LIMITED",
        error: "Demasiados intentos desde el mismo origen. Intenta mas tarde.",
        throttle: ipThrottle
      });
    }

    const dailyLimit = Number(process.env.FREE_PROTOCOL_DAILY_LIMIT || 1);
    const monthlyLimit = Number(process.env.FREE_PROTOCOL_MONTHLY_LIMIT || 3);
    const quota = await consumeQuota({
      userId: user?.id || null,
      tool: "protocol-ai",
      dailyLimit,
      monthlyLimit
    });

    if (!quota.allowed) {
      await recordToolRun({
        userId: user?.id || null,
        tool: "protocol-ai",
        input: userInput,
        output: "quota_limited",
        status: "quota_limited",
        metadata: { email, quota, engine, appContext },
        ipHash: clientMeta.ipHash,
        userAgentHash: clientMeta.userAgentHash
      });
      return send(429, {
        success: false,
        code: "QUOTA_EXCEEDED",
        error: "Limite gratuito alcanzado. Unete a la waitlist Pro para acceso ampliado.",
        quota
      });
    }

    let protocolPrompt;
    let fallback = false;
    let warning = "";
    const model = process.env.ANTHROPIC_MODEL || "claude-haiku-4-5-20251001";

    if (process.env.ANTHROPIC_API_KEY) {
      try {
        protocolPrompt = await callAnthropic({
          userInput,
          appContext,
          engine,
          apiKey: process.env.ANTHROPIC_API_KEY
        });
      } catch (error) {
        fallback = true;
        warning = error.message;
        console.error("Anthropic Error:", error.providerDetail || error);
        protocolPrompt = fallbackProtocol({ userInput, appContext, engine }, "ANTHROPIC_API_ERROR");
      }
    } else {
      fallback = true;
      warning = "ANTHROPIC_API_KEY no configurada";
      protocolPrompt = fallbackProtocol({ userInput, appContext, engine }, "MISSING_ANTHROPIC_API_KEY");
    }

    const inputTokens = estimateTokens(`${userInput}\n${appContext}\n${engine}`);
    const outputTokens = estimateTokens(protocolPrompt);
    const estimatedCostUsd = Number(((inputTokens / 1000000) * 1 + (outputTokens / 1000000) * 5).toFixed(6));
    const toolRunId = await recordToolRun({
      userId: user?.id || null,
      tool: "protocol-ai",
      input: userInput,
      output: protocolPrompt,
      fallback,
      metadata: { email, engine, appContext, quota, warning },
      ipHash: clientMeta.ipHash,
      userAgentHash: clientMeta.userAgentHash
    });
    await recordAiCost({
      toolRunId,
      provider: "anthropic",
      model,
      inputTokens,
      outputTokens,
      estimatedCostUsd,
      metadata: { fallback }
    });

    return send(200, {
      success: true,
      fallback,
      warning,
      protocolPrompt,
      quota,
      cost: {
        estimatedUsd: estimatedCostUsd,
        inputTokens,
        outputTokens
      }
    });
  } catch (error) {
    console.error("Protocol Function Error:", error);
    return send(error.statusCode || 500, {
      success: false,
      error: error.statusCode ? error.message : "No se pudo generar el protocolo en este momento"
    });
  }
};
