// Orlando Linares | Business Architecture Agency
// Design Thinking Suite — 6-Agent Pipeline (ECBA Enhanced)
// Flujo: Clarificador → Empatía → ECBA BA → Estratega → Crítico → Sintetizador
// Proveedor: JARVIS → Claude Haiku → Fallback local

const jsonHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json"
};

function send(statusCode, body) {
  return { statusCode, headers: jsonHeaders, body: JSON.stringify(body) };
}

function parseBody(event) {
  if (!event.body) return {};
  try { return JSON.parse(event.body); }
  catch { const e = new Error("JSON inválido"); e.statusCode = 400; throw e; }
}

// ── Context builder (DT-enhanced) ──────────────────────────────────────────
function buildContext(name, extras) {
  const lines = [
    `PROYECTO: ${name} [${extras.productType || 'No especificado'}]`,
    ``,
    `── EMPATIZAR ──`,
    `USUARIO OBJETIVO: ${extras.userTarget || extras.beachheadDesc || 'No especificado'}`,
    `DOLOR CRÍTICO: ${extras.painDesc || 'No especificado'}`,
    `WORKAROUND ACTUAL: ${extras.workaround || 'No especificado'}`,
    ``,
    `── DEFINIR ──`,
    `HMW STATEMENT: ${extras.hmwStatement || 'No especificado'}`,
    `STAKEHOLDERS: ${extras.stakeholders || 'No especificados'}`,
    `CAUSA RAÍZ: ${extras.rootCause || 'No especificada'}`,
    ``,
    `── IDEAR ──`,
    `SOLUCIÓN PROPUESTA: ${extras.solutionDesc || 'No especificada'}`,
    `MODELO DE NEGOCIO: ${extras.revenueModel || 'No especificado'}`,
    `CORE FEATURE MVP: ${extras.coreFeature || 'No especificada'}`,
    ``,
    `── PROTOTIPAR / EVALUAR ──`,
    `ESTADO DE VALIDACIÓN: ${extras.validationState || 'No especificado'}`,
    `HIPÓTESIS PRINCIPAL: ${extras.hypothesis || 'No especificada'}`,
    `KPI OBJETIVO: ${extras.kpiTarget || 'No especificado'}`,
    `MAYOR RIESGO: ${extras.mainDoubt || 'No especificado'}`,
    ``,
    `── CALIBRAR (scoring) ──`,
    `INTENSIDAD DEL DOLOR: ${extras.painScore || '7'}/10`,
    `CONFIANZA EN USUARIO: ${extras.userConfidence || 'Media'}`,
    `TAMAÑO DE MERCADO: ${extras.marketSize || 'Mediano'}`,
    `NIVEL DE COMPETENCIA: ${extras.competitionLevel || 'Moderada'}`,
    `MADUREZ TECNOLÓGICA: ${extras.techMaturity || 'Por definir'}`,
  ];
  return lines.join('\n').trim();
}

// ── JARVIS agent map ────────────────────────────────────────────────────────
const JARVIS_AGENT_MAP = {
  clarifier:   'operativo',
  empathy:     'financiero',
  ba_analyst:  'operativo',
  strategist:  'growth',
  critic:      'operativo',
  synthesizer: 'growth',
  gap_analyst: 'operativo',
  lean_canvas: 'growth',
};

function buildJarvisMessage(role, ctx, upstream) {
  const prompts = {
    clarifier: `Eres el Clarificador de Contexto para "${ctx.name}". Toma la información del proyecto y genera un brief profesional de 3-4 oraciones que defina el problema, el usuario y la oportunidad de valor. Responde en español, sin markdown.\n\nContexto:\n${ctx.full}`,

    empathy: `Eres el Investigador de Empatía para "${ctx.name}". Con base en el brief, construye un Mapa de Empatía estructurado con estas secciones: PIENSA Y SIENTE, VE, OYE, DICE Y HACE, DOLOR CENTRAL, JOBS-TO-BE-DONE, OPORTUNIDAD PARA EL MVP. Sé específico y accionable. Responde en español.\n\nBRIEF: ${upstream.clarifier}`,

    ba_analyst: `Eres un Analista de Negocios certificado ECBA (BABOK v3) para "${ctx.name}". Con base en el brief y el mapa de empatía, genera:\n\nSTAKEHOLDER MAP: Lista 3-4 stakeholders con formato: Rol | Interés (Alto/Medio/Bajo) | Influencia (Alta/Media/Baja)\n\nHMW STATEMENT REFINADO: Formula el reto usando "¿Cómo podríamos [acción] para [usuario] de modo que [resultado medible]?"\n\nREQUERIMIENTOS DE NEGOCIO (Top 3):\nRF-01: [Requerimiento funcional clave]\nRF-02: [Requerimiento funcional]\nRF-03: [Requerimiento funcional]\n\nBUSINESS CASE: Una oración que justifique la inversión en ROI o reducción de riesgo.\n\nBRIEF: ${upstream.clarifier}\nEMPATÍA: ${upstream.empathy}`,

    strategist: `Eres el Estratega e Ideador para "${ctx.name}". Aplica la técnica SCAMPER para generar la propuesta de valor diferenciada y el modelo de monetización más adecuado. Responde en 3-4 oraciones directas en español.\n\nBRIEF: ${upstream.clarifier}\nECBA BA: ${upstream.ba_analyst}`,

    critic: `Eres el Crítico Estratégico para "${ctx.name}". Genera una Malla Receptora con estas 4 secciones: INTERESANTE (qué llama la atención), CRÍTICO (qué podría fallar), PREGUNTAS (qué no está claro), IDEAS NUEVAS (qué podría mejorar el concepto). Sé directo y específico. Responde en español.\n\nBRIEF: ${upstream.clarifier}\nESTRATEGA: ${upstream.strategist}`,

    synthesizer: `Eres el Sintetizador Ejecutivo para "${ctx.name}". Con base en todos los análisis previos, genera: 1) ROADMAP 4 SEMANAS (semana 1-2: qué construir, semana 3-4: qué medir), 2) KPI DE VALIDACIÓN: el número que prueba si el MVP funciona, 3) PRÓXIMA ACCIÓN: la única cosa a ejecutar esta semana. Responde en español, formato estructurado.\n\nBRIEF: ${upstream.clarifier}\nECBA BA: ${upstream.ba_analyst}\nESTRATEGA: ${upstream.strategist}\nCRÍTICO: ${upstream.critic}`,

    gap_analyst: `Eres un Analista de Brechas para "${ctx.name}". Genera un GAP Analysis con mínimo 4 áreas. Usa EXACTAMENTE este formato para cada área:\n\nÁREA: [nombre]\nACTUAL: [estado actual]\nDESEADO: [estado objetivo]\nGAP: [brecha a resolver]\nPRIORIDAD: Alta|Media|Baja\n---\n\nContexto:\n${ctx.full}\n\nResponde solo con el formato indicado, sin texto adicional.`,

    lean_canvas: `Eres un consultor de Lean Canvas para "${ctx.name}". Genera el canvas completo usando EXACTAMENTE este formato (cada campo en una línea):\n\nPROBLEMA: [principales 3 problemas del cliente]\nSOLUCIÓN: [3 funciones clave de la solución]\nUVP: [propuesta de valor única en una frase]\nVENTAJA_INJUSTA: [qué no puede ser fácilmente copiado]\nSEGMENTOS: [clientes objetivo principales]\nMETRICAS: [3 métricas clave de éxito]\nCANALES: [canales de adquisición y distribución]\nCOSTOS: [principales costos del modelo]\nINGRESOS: [modelo de generación de ingresos]\n\nContexto:\n${ctx.full}\n\nResponde solo con el formato indicado.`,
  };
  return prompts[role];
}

// ── JARVIS call ─────────────────────────────────────────────────────────────
async function callJarvis(jarvisUrl, agentId, message, sessionId) {
  const res = await fetch(`${jarvisUrl}/api/orchestrate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ agentId, message, sessionId, transcript: [] }),
  });
  if (!res.ok) {
    const txt = await res.text();
    const e = new Error(`JARVIS error (${res.status})`);
    e.detail = txt.slice(0, 400);
    throw e;
  }
  const data = await res.json();
  return data?.answer || '';
}

// ── Claude call ─────────────────────────────────────────────────────────────
async function callClaude(apiKey, systemPrompt, userPrompt, opts = {}) {
  const { maxTokens = 350, temperature = 0.3 } = opts;
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: process.env.ANTHROPIC_MODEL || 'claude-haiku-4-5-20251001',
      max_tokens: maxTokens,
      temperature,
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }],
    }),
  });
  if (!res.ok) {
    const txt = await res.text();
    const e = new Error(`Claude API error (${res.status})`);
    e.detail = txt.slice(0, 400);
    throw e;
  }
  const data = await res.json();
  return data?.content?.find(c => c.type === 'text')?.text || '';
}

// ── Fallback responses (local, no API needed) ───────────────────────────────
function fallbackAgents(name, extras) {
  const user = extras.userTarget || extras.beachheadDesc || 'el usuario objetivo';
  const pain = extras.painDesc || 'la fricción operativa identificada';
  const model = extras.revenueModel || 'SaaS';
  const core = extras.coreFeature || 'la funcionalidad core';
  const kpi = extras.kpiTarget || 'tasa de activación en 7 días';

  return {
    clarifier: `BRIEF: "${name}" es una solución ${extras.productType || 'digital'} que ataca una fricción crítica experimentada por ${user}. El problema central es "${pain.slice(0, 120)}". El objetivo es validar la hipótesis de necesidad con un MVP de bajo coste antes de escalar la inversión tecnológica.`,

    empathy: `MAPA DE EMPATÍA — ${user}:\n\nPIENSA Y SIENTE: Frustración por la ineficiencia actual. Preocupación por el tiempo perdido y el costo de los errores. Desea soluciones que simplemente funcionen sin fricción.\n\nVE: Equipos usando workarounds manuales. Competidores con soluciones parciales. Tendencia del mercado hacia automatización.\n\nOYE: "Necesitamos algo más confiable." "No podemos seguir así." Recomendaciones de colegas sobre herramientas similares.\n\nDICE Y HACE: Comparte el problema con su equipo. Prueba soluciones parciales. Actualmente usa: ${extras.workaround || 'procesos manuales'}.\n\nDOLOR CENTRAL: ${pain.slice(0, 100)}.\n\nJOBS-TO-BE-DONE: Completar su trabajo con confianza, sin depender de procesos manuales propensos a error.\n\nOPORTUNIDAD: Construir la solución mínima que elimine el punto de mayor fricción y genere confianza inmediata.`,

    ba_analyst: `STAKEHOLDER MAP:\n— Usuario Final | Interés: Alto | Influencia: Alta\n— Decisor / Comprador | Interés: Alto | Influencia: Alta\n— Equipo de Soporte Interno | Interés: Medio | Influencia: Media\n— Reguladores / Compliance | Interés: Bajo | Influencia: Alta\n\nHMW STATEMENT REFINADO:\n¿Cómo podríamos ayudar a ${user} a resolver "${(extras.hmwStatement || pain).slice(0, 80)}" de modo que reduzcan tiempo operativo en al menos un 40% en el primer trimestre?\n\nREQUERIMIENTOS DE NEGOCIO:\nRF-01: El sistema debe ejecutar ${core} en menos de 3 interacciones del usuario.\nRF-02: Los datos deben estar disponibles en tiempo real para todos los stakeholders con acceso autorizado.\nRF-03: La solución debe integrarse con las herramientas actuales del usuario sin requerir cambio de stack.\n\nBUSINESS CASE:\nLa inversión en "${name}" se justifica por la reducción del costo operativo actual (estimado en ≥20% de tiempo productivo perdido) y el riesgo de escalar sin validación técnica probada.`,

    strategist: `PROPUESTA DE VALOR: "${name}" elimina el punto de mayor fricción de ${user} mediante ${core}. Aplicando SCAMPER — Sustituir el proceso manual por automatización, Combinar datos dispersos en una sola vista, Eliminar pasos redundantes — la ventaja diferencial es velocidad de adopción con fricción mínima. Modelo recomendado: ${model} con onboarding autoguiado para reducir el CAC.`,

    critic: `MALLA RECEPTORA DE INFORMACIÓN:\n\nINTERESSANTE: La oportunidad de mercado es real; el workaround actual (${extras.workaround || 'proceso manual'}) confirma demanda latente no cubierta.\n\nCRÍTICO: Riesgo #1 — retención en mes 3 por debajo del 20% si no hay habituación temprana. Riesgo #2 — dependencia de un solo canal de adquisición sin validación de CAC sostenible.\n\nPREGUNTAS: ¿Los stakeholders tienen presupuesto aprobado? ¿El ciclo de venta es B2B (largo) o B2C (corto)? ¿Cómo se mide el éxito del usuario hoy?\n\nIDEAS NUEVAS: Considerar un modelo "land and expand" iniciando con el core feature ${core} y añadiendo módulos por demanda.`,

    synthesizer: `ROADMAP 4 SEMANAS:\nSemana 1-2: Construir el ${core} funcional con 5 usuarios beta. Validar la hipótesis: "${extras.hypothesis || 'el usuario pagará si resuelves el problema core'}". Landing page + pre-registro activo.\nSemana 3-4: Medir ${kpi}. Realizar 10 entrevistas de validación post-uso. Pivotar o perseverar basado en datos reales.\n\nKPI DE VALIDACIÓN: ${kpi} — si supera el umbral definido, la hipótesis se confirma.\n\nPRÓXIMA ACCIÓN ESTA SEMANA: Contactar a los primeros 5 usuarios objetivo del segmento "${user}" para una sesión de co-creación de 30 minutos. Sin pitch, solo escucha activa.`,

    gap_analyst: `ÁREA: Proceso Principal\nACTUAL: ${extras.workaround || 'Proceso 100% manual sin sistematizar'}\nDESEADO: ${core} automatizado y accesible para ${user}\nGAP: Construir la funcionalidad core que reemplace el workaround actual\nPRIORIDAD: Alta\n---\nÁREA: Visibilidad de Datos\nACTUAL: Sin reportes ni métricas consolidadas disponibles en tiempo real\nDESEADO: Dashboard con KPIs críticos accesible por todos los stakeholders\nGAP: Implementar capa de datos con visualización en tiempo real\nPRIORIDAD: Alta\n---\nÁREA: Adopción de Usuarios\nACTUAL: ${extras.validationState || 'Producto no probado con usuarios reales'}\nDESEADO: Onboarding en menos de 10 minutos con retención a 30 días mayor al 40%\nGAP: Diseñar flujo de onboarding guiado con validación de hipótesis de retención\nPRIORIDAD: Media\n---\nÁREA: Modelo de Monetización\nACTUAL: Sin ingresos validados ni precio de mercado comprobado\nDESEADO: ${model} validado con primeros 10 clientes pagadores\nGAP: Realizar experimento de precio con landing page + propuesta de valor clara\nPRIORIDAD: Alta\n---\nÁREA: Stack Tecnológico\nACTUAL: ${extras.techMaturity || 'Por definir — sin arquitectura definida'}\nDESEADO: MVP funcional entregado en 4 semanas con stack escalable\nGAP: Definir arquitectura mínima, elegir herramientas y asignar responsables técnicos\nPRIORIDAD: Media`,

    lean_canvas: `PROBLEMA: Los ${user} enfrentan "${pain.slice(0,100)}". El workaround actual (${extras.workaround || 'proceso manual'}) genera pérdida de tiempo y errores costosos.\nSOLUCIÓN: ${core}. Automatización del flujo principal. Dashboard centralizado para visibilidad inmediata.\nUVP: La solución más simple y directa para que ${user} resuelva ${pain.slice(0,60)} en menos de 3 pasos.\nVENTAJA_INJUSTA: Conocimiento profundo del problema + velocidad de ejecución con ${extras.techMaturity || 'stack ligero'}. Difícil de replicar por players grandes que no entienden el nicho.\nSEGMENTOS: ${user}. Segmento beachhead: los que ya sufren el problema y están buscando solución activamente.\nMETRICAS: ${kpi}. Tasa de activación a 7 días. Churn mensual menor al 5%.\nCANALES: Referidos del segmento objetivo. LinkedIn B2B o comunidades del sector. Contenido educativo sobre el problema.\nCOSTOS: Desarrollo MVP. Infraestructura cloud. Soporte y onboarding inicial. Marketing de contenido.\nINGRESOS: ${model}. Escala con el número de usuarios o uso. Expansión modular a funciones premium.`,
  };
}

// ── Main handler ────────────────────────────────────────────────────────────
exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers: jsonHeaders, body: '' };
  if (event.httpMethod !== 'POST') return send(405, { success: false, error: 'Método no permitido' });

  try {
    const {
      projectName,
      productType   = '',
      beachheadDesc = '',
      painDesc      = '',
      workaround    = '',
      hmwStatement  = '',
      stakeholders  = '',
      rootCause     = '',
      solutionDesc  = '',
      revenueModel  = '',
      coreFeature   = '',
      validationState = '',
      hypothesis    = '',
      kpiTarget     = '',
      mainDoubt     = '',
      painScore     = '7',
      userConfidence= '',
      marketSize    = '',
      competitionLevel = '',
      techMaturity  = '',
    } = parseBody(event);

    if (!projectName || String(projectName).trim().length < 2) {
      return send(400, { success: false, error: 'Se requiere el nombre del proyecto' });
    }

    const name = String(projectName).trim().slice(0, 200);
    const extras = {
      productType:    String(productType    || '').slice(0, 100),
      userTarget:     String(beachheadDesc  || '').slice(0, 500),
      beachheadDesc:  String(beachheadDesc  || '').slice(0, 500),
      painDesc:       String(painDesc       || '').slice(0, 600),
      workaround:     String(workaround     || '').slice(0, 400),
      hmwStatement:   String(hmwStatement   || '').slice(0, 500),
      stakeholders:   String(stakeholders   || '').slice(0, 400),
      rootCause:      String(rootCause      || '').slice(0, 100),
      solutionDesc:   String(solutionDesc   || '').slice(0, 600),
      revenueModel:   String(revenueModel   || '').slice(0, 100),
      coreFeature:    String(coreFeature    || '').slice(0, 400),
      validationState:String(validationState|| '').slice(0, 100),
      hypothesis:     String(hypothesis     || '').slice(0, 500),
      kpiTarget:      String(kpiTarget      || '').slice(0, 300),
      mainDoubt:      String(mainDoubt      || '').slice(0, 500),
      painScore:      String(painScore      || '7').slice(0, 5),
      userConfidence: String(userConfidence || '').slice(0, 100),
      marketSize:     String(marketSize     || '').slice(0, 100),
      competitionLevel:String(competitionLevel||'').slice(0, 100),
      techMaturity:   String(techMaturity   || '').slice(0, 100),
    };

    const fullContext = buildContext(name, extras);
    const sessionId   = `dt-suite-${name.toLowerCase().replace(/[^a-z0-9]/g, '-').slice(0, 30)}-${Date.now()}`;

    // ── JARVIS path ──────────────────────────────────────────────────────────
    const jarvisUrl = (process.env.JARVIS_URL || '').replace(/\/$/, '');
    if (jarvisUrl) {
      const ctx = { name, full: fullContext };
      const upstream = {};
      const agents   = {};
      let jarvisFallback = false;
      const roles = ['clarifier', 'empathy', 'ba_analyst', 'strategist', 'critic', 'synthesizer', 'gap_analyst', 'lean_canvas'];

      for (const role of roles) {
        try {
          upstream[role] = await callJarvis(
            jarvisUrl,
            JARVIS_AGENT_MAP[role],
            buildJarvisMessage(role, ctx, upstream),
            sessionId
          );
          agents[role] = upstream[role];
        } catch (err) {
          console.error(`JARVIS ${role} error:`, err.detail || err.message);
          jarvisFallback = true;
          agents[role] = upstream[role] = fallbackAgents(name, extras)[role];
        }
      }

      return send(200, { success: true, fallback: jarvisFallback, source: 'jarvis', sessionId, agents });
    }

    // ── Claude path ──────────────────────────────────────────────────────────
    if (!process.env.ANTHROPIC_API_KEY) {
      return send(200, {
        success: true, fallback: true, source: 'fallback', sessionId,
        agents: fallbackAgents(name, extras),
      });
    }

    const apiKey  = process.env.ANTHROPIC_API_KEY;
    const agents  = {};
    let fallback  = false;

    // ─ Fase 0: Clarificador (sequential — base del pipeline) ────────────────
    try {
      agents.clarifier = await callClaude(
        apiKey,
        'Eres un Clarificador de Contexto de Negocio. Toma la información del proyecto y genera un brief profesional de 3-4 oraciones que defina el problema, el usuario objetivo y la oportunidad de valor. Responde en español, sin markdown.',
        `Contexto del proyecto:\n${fullContext}\n\nGenera el brief clarificado.`,
        { maxTokens: 300, temperature: 0.3 }
      );
    } catch (err) {
      console.error('Clarifier error:', err.detail || err.message);
      fallback = true;
      agents.clarifier = fallbackAgents(name, extras).clarifier;
    }

    // ─ Fase 1: Investigador de Empatía (sequential) ──────────────────────────
    try {
      agents.empathy = await callClaude(
        apiKey,
        'Eres un Investigador de Empatía especializado en Design Thinking. Construye un Mapa de Empatía estructurado usando las secciones: PIENSA Y SIENTE, VE, OYE, DICE Y HACE, DOLOR CENTRAL, JOBS-TO-BE-DONE, OPORTUNIDAD PARA EL MVP. Basa tu análisis en el contexto del proyecto. Responde en español, formato estructurado, sin markdown complejo.',
        `BRIEF DEL PROYECTO:\n${agents.clarifier}\n\nContexto adicional:\nUSUARIO: ${extras.userTarget || extras.beachheadDesc}\nDOLOR: ${extras.painDesc}\nWORKAROUND ACTUAL: ${extras.workaround}\n\nGenera el Mapa de Empatía.`,
        { maxTokens: 450, temperature: 0.4 }
      );
    } catch (err) {
      console.error('Empathy error:', err.detail || err.message);
      fallback = true;
      agents.empathy = fallbackAgents(name, extras).empathy;
    }

    // ─ Fase 2: ECBA Business Analyst (sequential) ────────────────────────────
    try {
      agents.ba_analyst = await callClaude(
        apiKey,
        'Eres un Analista de Negocios certificado ECBA (Entry Certificate in Business Analysis) con dominio del BABOK v3. Generas análisis estructurados con: Stakeholder Map, HMW Statement refinado, Requerimientos de Negocio funcionales y Business Case. Responde en español, formato estructurado claro.',
        `BRIEF: ${agents.clarifier}\n\nMAPA DE EMPATÍA: ${agents.empathy}\n\nHMW DRAFT DEL USUARIO: ${extras.hmwStatement || 'No proporcionado'}\nSTAKEHOLDERS MENCIONADOS: ${extras.stakeholders || 'No especificados'}\nCAUSA RAÍZ: ${extras.rootCause}\n\nGenera:\n1. STAKEHOLDER MAP (3-4 stakeholders con Rol | Interés | Influencia)\n2. HMW STATEMENT REFINADO (formato: ¿Cómo podríamos [acción] para [usuario] de modo que [resultado medible]?)\n3. REQUERIMIENTOS DE NEGOCIO TOP 3 (RF-01, RF-02, RF-03)\n4. BUSINESS CASE (1 oración con ROI o reducción de riesgo cuantificable)`,
        { maxTokens: 500, temperature: 0.25 }
      );
    } catch (err) {
      console.error('BA Analyst error:', err.detail || err.message);
      fallback = true;
      agents.ba_analyst = fallbackAgents(name, extras).ba_analyst;
    }

    // ─ Fase 3: Estratega + Crítico (parallel) ────────────────────────────────
    const [strategistResult, criticResult] = await Promise.all([
      callClaude(
        apiKey,
        'Eres un Estratega de Negocios e Ideador. Aplica la técnica SCAMPER para diseñar la propuesta de valor diferenciada y recomienda el modelo de monetización más adecuado. 3-4 oraciones directas. Responde en español, sin markdown.',
        `BRIEF: ${agents.clarifier}\nECBA BA: ${agents.ba_analyst}\nSOLUCIÓN PROPUESTA: ${extras.solutionDesc}\nMODELO: ${extras.revenueModel}\nCORE FEATURE: ${extras.coreFeature}\n\nDiseña la propuesta de valor aplicando SCAMPER.`,
        { maxTokens: 300, temperature: 0.4 }
      ).catch(err => {
        console.error('Strategist error:', err.detail || err.message);
        fallback = true;
        return fallbackAgents(name, extras).strategist;
      }),
      callClaude(
        apiKey,
        'Eres un Crítico Estratégico especializado en Design Thinking. Genera una Malla Receptora de Información con exactamente 4 secciones: INTERESANTE, CRÍTICO, PREGUNTAS, IDEAS NUEVAS. Sé específico y accionable. Responde en español, formato estructurado.',
        `BRIEF: ${agents.clarifier}\nRIESGO DECLARADO: ${extras.mainDoubt}\nESTADO: ${extras.validationState}\nHIPÓTESIS: ${extras.hypothesis}\n\nGenera la Malla Receptora de riesgos y oportunidades.`,
        { maxTokens: 400, temperature: 0.2 }
      ).catch(err => {
        console.error('Critic error:', err.detail || err.message);
        fallback = true;
        return fallbackAgents(name, extras).critic;
      }),
    ]);

    agents.strategist = strategistResult;
    agents.critic     = criticResult;

    // ─ Fase 4: Sintetizador + GAP Analyst + Lean Canvas (parallel) ──────────
    const fb = fallbackAgents(name, extras);
    const [synthResult, gapResult, canvasResult] = await Promise.all([
      callClaude(
        apiKey,
        'Eres un Sintetizador Ejecutivo de Design Thinking. Genera: 1) ROADMAP 4 SEMANAS (semana 1-2 y 3-4 con acciones concretas), 2) KPI DE VALIDACIÓN (el número que prueba si el MVP funciona), 3) PRÓXIMA ACCIÓN (la única cosa a ejecutar esta semana). Formato estructurado en español.',
        `BRIEF: ${agents.clarifier}\nECBA BA: ${agents.ba_analyst}\nESTRATEGA: ${agents.strategist}\nCRÍTICO: ${agents.critic}\n\nKPI OBJETIVO: ${extras.kpiTarget}\nHIPÓTESIS: ${extras.hypothesis}\nESTADO: ${extras.validationState}\nCALIBRACIÓN: Dolor ${extras.painScore}/10 · ${extras.userConfidence} · ${extras.marketSize}\n\nConsolida el roadmap y la próxima acción.`,
        { maxTokens: 500, temperature: 0.2 }
      ).catch(err => { console.error('Synthesizer:', err.message); fallback = true; return fb.synthesizer; }),

      callClaude(
        apiKey,
        'Eres un Analista de Brechas (GAP Analysis). Genera el análisis usando EXACTAMENTE este formato para cada área:\n\nÁREA: [nombre]\nACTUAL: [estado actual en 1 oración]\nDESEADO: [estado objetivo en 1 oración]\nGAP: [qué hay que resolver]\nPRIORIDAD: Alta|Media|Baja\n---\n\nGenera mínimo 4 áreas. Responde SOLO con el formato. Sin texto adicional.',
        `Contexto del proyecto:\n${fullContext}\n\nBRIEF: ${agents.clarifier}\nECBA BA: ${agents.ba_analyst}`,
        { maxTokens: 600, temperature: 0.15 }
      ).catch(err => { console.error('GAP Analyst:', err.message); fallback = true; return fb.gap_analyst; }),

      callClaude(
        apiKey,
        'Eres un consultor de Lean Canvas. Genera el canvas usando EXACTAMENTE este formato (un campo por línea):\n\nPROBLEMA: ...\nSOLUCIÓN: ...\nUVP: ...\nVENTAJA_INJUSTA: ...\nSEGMENTOS: ...\nMETRICAS: ...\nCANALES: ...\nCOSTOS: ...\nINGRESOS: ...\n\nResponde SOLO con el formato indicado. Sin títulos ni texto adicional.',
        `Contexto del proyecto:\n${fullContext}\n\nBRIEF: ${agents.clarifier}\nESTRATEGA: ${agents.strategist}`,
        { maxTokens: 500, temperature: 0.2 }
      ).catch(err => { console.error('Lean Canvas:', err.message); fallback = true; return fb.lean_canvas; }),
    ]);

    agents.synthesizer = synthResult;
    agents.gap_analyst  = gapResult;
    agents.lean_canvas  = canvasResult;

    return send(200, { success: true, fallback, source: 'claude', sessionId, agents });

  } catch (err) {
    console.error('suite-agents error:', err);
    return send(err.statusCode || 500, {
      success: false,
      error: err.statusCode ? err.message : 'No se pudo ejecutar el análisis Design Thinking',
    });
  }
};
