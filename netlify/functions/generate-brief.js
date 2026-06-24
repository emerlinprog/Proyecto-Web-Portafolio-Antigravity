// Orlando Linares | Executive Strategist & AI Architect
const { Client } = require("@notionhq/client");
const { estimateTokens, getClientMeta, normalizeEmail, parseBody: parseJsonBody, validateBotGuard } = require("./lib/core");
const { recordAiCost, recordToolRun, recordWizardBrief, upsertUser } = require("./lib/db");

const jsonHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json"
};

const labelMaps = {
  org: {
    publico_peru: "Entidad del Sector Publico Peruano",
    privado_mype: "Empresa Privada MYPE / Startup",
    privado_corp: "Corporativo / Multinacional LATAM",
    consultora: "Consultora o firma de servicios profesionales",
    otro: "Otra organizacion"
  },
  pain: {
    procesos_manuales: "Procesos manuales con cuellos de botella y errores frecuentes",
    datos_silos: "Informacion fragmentada en silos sin visibilidad unificada",
    cumplimiento: "Presion de cumplimiento normativo",
    escalabilidad: "Crecimiento sin arquitectura escalable",
    ia_adoption: "Adopcion de IA sin hoja de ruta clara"
  },
  urgency: {
    inmediato: "Inmediato: menos de 30 dias",
    corto: "Corto plazo: 1 a 3 meses",
    medio: "Mediano plazo: 3 a 6 meses",
    estrategico: "Horizonte estrategico: mas de 6 meses"
  },
  stack: {
    m365: "Microsoft 365 / Power Platform",
    google: "Google Workspace",
    erp: "ERP / SAP / sistemas legacy",
    mixto: "Stack heterogeneo con herramientas desconectadas",
    basico: "Email y hojas de calculo"
  },
  vision: {
    eficiencia: "Reducir tiempos y costos operativos en al menos 30%",
    compliance: "Cumplir auditoria, certificacion o directiva institucional",
    decision: "Mejorar la calidad de datos para decisiones ejecutivas",
    escalabilidad: "Escalar el modelo operativo sin contratar masivamente",
    liderazgo: "Liderazgo en transformacion digital del sector"
  }
};

function send(statusCode, body) {
  return { statusCode, headers: jsonHeaders, body: JSON.stringify(body) };
}

function parseBody(event) {
  if (!event.body) return {};
  try {
    return JSON.parse(event.body);
  } catch (error) {
    const err = new Error("JSON invalido en la solicitud");
    err.statusCode = 400;
    throw err;
  }
}

function checkConfig() {
  const missing = [];
  if (!process.env.ANTHROPIC_API_KEY) missing.push("ANTHROPIC_API_KEY");
  // Notion es opcional para el brief, pero bueno saberlo
  if (!process.env.NOTION_API_KEY) console.warn("[config] NOTION_API_KEY missing");
  
  if (missing.length > 0) {
    throw new Error(`Configuracion incompleta: falta ${missing.join(", ")} en las variables de entorno de Netlify.`);
  }
}

function label(group, value, fallback = "No especificado") {
  if (!value) return fallback;
  return labelMaps[group]?.[value] || String(value);
}

function normalizeWizardPayload(data) {
  const wizard = data.wizard || data.discovery || data;
  return {
    name: data.name || "Visitante Discovery Wizard",
    email: data.email || "",
    asIs: {
      org: wizard.org || data.org || "otro",
      pain: wizard.pain || data.pain || "procesos_manuales"
    },
    toBe: {
      vision: wizard.vision || data.vision || "eficiencia",
      maturity: Number(data.maturity || 5)
    },
    resources: {
      budget: data.budget || "por definir",
      capabilities: [label("stack", wizard.stack || data.stack)],
      constraints: [label("urgency", wizard.urgency || data.urgency)]
    },
    ideas: Array.isArray(data.ideas) && data.ideas.length
      ? data.ideas
      : [
          { title: "Diagnostico AS-IS / TO-BE", impact: "alto", feasibility: "alta" },
          { title: "Automatizacion de fricciones criticas", impact: "alto", feasibility: "media" },
          { title: "Protocol AI para estandarizar decisiones", impact: "medio", feasibility: "alta" }
        ],
    urgency: wizard.urgency || data.urgency || "medio",
    wizard: {
      org: wizard.org || data.org,
      pain: wizard.pain || data.pain,
      urgency: wizard.urgency || data.urgency,
      stack: wizard.stack || data.stack,
      vision: wizard.vision || data.vision
    }
  };
}

function validatePayload(payload) {
  if (!payload.asIs || !payload.toBe || !payload.resources) {
    const err = new Error("Payload incompleto: faltan bloques asIs, toBe o resources");
    err.statusCode = 400;
    throw err;
  }
  payload.ideas = Array.isArray(payload.ideas) ? payload.ideas : [];
  payload.resources.capabilities = Array.isArray(payload.resources.capabilities) ? payload.resources.capabilities : [];
  payload.resources.constraints = Array.isArray(payload.resources.constraints) ? payload.resources.constraints : [];
  payload.asIs.org = payload.asIs.org || "otro";
  payload.asIs.pain = payload.asIs.pain || "Problema operativo no especificado";
  payload.toBe.vision = payload.toBe.vision || "Mejorar el rendimiento operativo";
  payload.toBe.maturity = Number(payload.toBe.maturity || 5);
  payload.resources.budget = payload.resources.budget || "por definir";
  payload.urgency = payload.urgency || "medio";
  return payload;
}

function fallbackBrief(payload, reason = "AI_ENGINE_UNAVAILABLE") {
  const org = label("org", payload.asIs.org);
  const pain = label("pain", payload.asIs.pain, payload.asIs.pain);
  const urgency = label("urgency", payload.urgency, payload.urgency);
  const stack = payload.resources.capabilities[0] || label("stack", payload.wizard?.stack);
  const vision = label("vision", payload.toBe.vision, payload.toBe.vision);

  return `
<h2>Analisis de Friccion Estructural</h2>
<p><strong>${org}</strong> muestra una friccion prioritaria: ${pain}. Esto no debe tratarse como una tarea aislada, sino como una senal de deuda operativa acumulada entre procesos, datos y decisiones.</p>
<h2>Vision de Impacto</h2>
<p>El objetivo declarado es <strong>${vision}</strong>. La ruta recomendable es convertir el diagnostico en un mapa AS-IS / TO-BE con responsables, metricas y un primer piloto medible.</p>
<h2>Arquitectura Recomendada</h2>
<ul>
  <li>Stack base: ${stack}.</li>
  <li>Prioridad temporal: ${urgency}.</li>
  <li>Primer activo: matriz de procesos criticos, riesgos y automatizaciones candidatas.</li>
</ul>
<h2>Primeros 14 Dias</h2>
<ul>
  <li>Dia 1-3: levantar fricciones, sistemas y responsables.</li>
  <li>Dia 4-7: mapear flujo AS-IS y puntos de control.</li>
  <li>Dia 8-11: disenar TO-BE y quick wins.</li>
  <li>Dia 12-14: preparar protocolo de implementacion con KPIs.</li>
</ul>`.trim();
}

async function createAnthropicBrief(payload, apiKey) {
  const expertiseProfiles = {
    publico_peru: "Experto en sector publico peruano. Habla de interoperabilidad, SIAF, Ley 30225, Gobierno Digital y tramites ciudadanos eficientes.",
    privado_mype: "Especialista en escalamiento de MYPEs. Enfoque en flujo de caja, automatizacion de ventas y reduccion de dependencia del dueno.",
    privado_corp: "Consultor corporativo. Enfoque en KPIs, silos de informacion, gobernanza de datos y ROI de transformacion digital.",
    consultora: "Arquitecto de firmas de servicios. Enfoque en delivery, estandarizacion, margen y activos reutilizables.",
    otro: "Estratega de negocios generalista de alto nivel."
  };

  const sectorExpertise = expertiseProfiles[payload.asIs.org] || expertiseProfiles.otro;
  const ideaTitles = payload.ideas.map((idea) => idea.title || idea.name || "Iniciativa sin titulo").join(", ") || "No especificadas";

  const systemPrompt = `Eres Orlando Linares, Estratega Ejecutivo y Arquitecto de Negocios de MVP Studio.
Genera un Reporte Estrategico profesional, directo y orientado a ROI.
Responde exclusivamente en HTML estructurado con h2, p, strong, ul y li. No uses markdown.

${sectorExpertise}

DIRECTRIZ ESTRATEGICA:
Si la urgencia es 'inmediato' o 'corto' y el dolor involucra 'procesos_manuales' o 'ia_adoption', orienta la recomendacion hacia un **MVP de 4 semanas** con MVP Studio.

Estructura obligatoria:
1. <h2>Analisis de Friccion Estructural</h2>
2. <h2>Vision de Impacto</h2>
3. <h2>Validacion de Iniciativas (MVP Studio Focus)</h2>
   - Sugiere un nombre para el MVP.
   - Detalla el riesgo que elimina.
4. <h2>Arquitectura Tecnica Recomendada</h2>
5. <h2>Hoja de Ruta: Primeros 14 Dias</h2>
6. <h2>Costo de No Actuar</h2>`;

  const userPrompt = `CLIENTE: ${payload.name}${payload.email ? ` (${payload.email})` : ""}
ORGANIZACION: ${label("org", payload.asIs.org, payload.asIs.org)}
AS-IS: ${label("pain", payload.asIs.pain, payload.asIs.pain)}
TO-BE: ${label("vision", payload.toBe.vision, payload.toBe.vision)} | MADUREZ: ${payload.toBe.maturity}/10
RECURSOS: ${payload.resources.capabilities.join(", ") || "No especificados"}
LIMITES: ${payload.resources.constraints.join(", ") || "No especificados"}
PROPUESTAS: ${ideaTitles}
URGENCIA: ${label("urgency", payload.urgency, payload.urgency)}`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json"
    },
    body: JSON.stringify({
      model: process.env.ANTHROPIC_MODEL || "claude-3-5-haiku-latest",
      max_tokens: 2500,
      temperature: 0.35,
      system: systemPrompt,
      messages: [{ role: "user", content: userPrompt }]
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    const err = new Error(`Anthropic no disponible (${response.status})`);
    err.providerDetail = errorText.slice(0, 500);
    throw err;
  }

  const aiData = await response.json();
  const brief = aiData?.content?.find((item) => item.type === "text")?.text || aiData?.content?.[0]?.text;
  if (!brief) throw new Error("Anthropic respondio sin contenido util");
  return brief;
}

async function syncNotion(payload, briefContent) {
  const NOTION_API_KEY = process.env.NOTION_API_KEY;
  const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;
  if (!NOTION_API_KEY || !NOTION_DATABASE_ID) return;

  try {
    const notion = new Client({ auth: NOTION_API_KEY });
    const properties = {
      title: { title: [{ text: { content: `LEAD: ${payload.name} | ${label("org", payload.asIs.org, payload.asIs.org)}` } }] },
      Status: { select: { name: "Nuevo Diagnosticado" } },
      Urgencia: { select: { name: label("urgency", payload.urgency) } }
    };
    if (payload.email) properties.Email = { email: payload.email };

    await notion.pages.create({
      parent: { database_id: NOTION_DATABASE_ID },
      properties,
      children: [
        { object: "block", type: "heading_2", heading_2: { rich_text: [{ type: "text", text: { content: "Situacion Actual" } }] } },
        { object: "block", type: "paragraph", paragraph: { rich_text: [{ type: "text", text: { content: label("pain", payload.asIs.pain, payload.asIs.pain) } }] } },
        { object: "block", type: "heading_2", heading_2: { rich_text: [{ type: "text", text: { content: "Resumen IA" } }] } },
        { object: "block", type: "paragraph", paragraph: { rich_text: [{ type: "text", text: { content: briefContent.replace(/<[^>]*>?/gm, "").substring(0, 1500) } }] } }
      ]
    });
  } catch (error) {
    console.error("Notion Error:", error);
  }
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return send(200, { message: "OK" });
  if (event.httpMethod !== "POST") return send(405, { error: "Metodo no permitido" });

  try {
    checkConfig();
    const incoming = parseJsonBody(event);
    validateBotGuard(incoming, { requireEmail: false });
    const payload = validatePayload(
      incoming.wizard || incoming.discovery ? normalizeWizardPayload(incoming) : incoming
    );
    const email = normalizeEmail(incoming.email || payload.email);
    const clientMeta = getClientMeta(event);
    const user = email
      ? await upsertUser({ email, metadata: { source: "discovery-wizard", client: clientMeta } })
      : null;

    let briefContent;
    let fallback = false;
    let warning = "";

    if (process.env.ANTHROPIC_API_KEY) {
      try {
        briefContent = await createAnthropicBrief(payload, process.env.ANTHROPIC_API_KEY);
      } catch (error) {
        fallback = true;
        warning = error.message;
        console.error("Anthropic Error:", error.providerDetail || error);
        briefContent = fallbackBrief(payload, "ANTHROPIC_API_ERROR");
      }
    } else {
      fallback = true;
      warning = "ANTHROPIC_API_KEY no configurada";
      briefContent = fallbackBrief(payload, "MISSING_ANTHROPIC_API_KEY");
    }

    await syncNotion(payload, briefContent);

    await recordWizardBrief({
      userId: user?.id || null,
      email,
      source: "discovery-wizard",
      status: "qualified",
      org: payload.asIs.org,
      pain: payload.asIs.pain,
      urgency: payload.urgency,
      stack: payload.wizard?.stack,
      vision: payload.toBe.vision,
      brief: briefContent,
      fallback,
      metadata: { warning, wizard: payload.wizard || {}, labels: incoming.wizard?.labels || {} }
    });

    const model = process.env.ANTHROPIC_MODEL || "claude-3-5-haiku-latest";
    const inputTokens = estimateTokens(JSON.stringify(payload));
    const outputTokens = estimateTokens(briefContent);
    const toolRunId = await recordToolRun({
      userId: user?.id || null,
      tool: "discovery-wizard",
      input: JSON.stringify(payload),
      output: briefContent,
      fallback,
      metadata: { email, warning },
      ipHash: clientMeta.ipHash,
      userAgentHash: clientMeta.userAgentHash
    });
    await recordAiCost({
      toolRunId,
      provider: "anthropic",
      model,
      inputTokens,
      outputTokens,
      estimatedCostUsd: Number(((inputTokens / 1000000) * 1.0 + (outputTokens / 1000000) * 5.0).toFixed(6)),
      metadata: { fallback }
    });

    return send(200, {
      success: true,
      fallback,
      warning,
      brief: briefContent,
      export: {
        org: payload.asIs.org,
        pain: payload.asIs.pain,
        urgency: payload.urgency,
        stack: payload.wizard?.stack,
        vision: payload.toBe.vision,
        brief: briefContent
      }
    });
  } catch (error) {
    console.error("Function Error:", error);
    return send(error.statusCode || 500, {
      success: false,
      error: error.statusCode ? error.message : "No se pudo generar el brief en este momento"
    });
  }
};
