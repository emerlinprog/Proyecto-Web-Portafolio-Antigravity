



PRODUCT REQUIREMENTS DOCUMENT

orlandolinares.com


Rediseño Estratégico de Web Personal



v1.0  ·  Abril 2026  ·  Orlando Linares Jauregui


Objetivo
Portafolio ejecutivo de credibilidad
Estado
En planificación
Versión actual
Netlify - Brutalist Dark
Prioridad
Alta






1. Resumen Ejecutivo

Este PRD documenta los requerimientos completos para el rediseño estratégico de orlandolinares.com - web personal de Orlando Linares Jauregui, Business Analyst y consultor de procesos con 7 años de trayectoria en el sector público peruano y proyectos en México.



La web actual tiene una estética visual sólida (diseño brutalist dark con acento cyan) pero presenta gaps críticos en coherencia narrativa, conversión y credibilidad: el posicionamiento no está alineado al CV real, el formulario de contacto no envía datos, y las herramientas propias (Clarificador Estratégico, Monster Prompts) están desconectadas de la narrativa del sitio.



El objetivo del rediseño es transformar la web en un portafolio ejecutivo de credibilidad que siga la lógica: Quién soy  Qué demuestro  Dónde lo apliqué  Herramientas que construí  Hablemos.




1.1 Problema Central

La web declara pero no demuestra. Dice 'Executive Strategist' y 'Metodología de Clase Mundial' sin evidencia en la misma página. El visitante no puede verificar las capacidades porque faltan los casos de estudio reales, las métricas de impacto y la narrativa que conecte la experiencia con las herramientas construidas.




1.2 Solución Propuesta

Rediseño de contenido y arquitectura de la web existente sin cambiar el stack tecnológico (HTML/CSS/JS en Netlify). Las mejoras se dividen en tres categorías:


Correcciones técnicas urgentes - formulario de contacto, links rotos


Rediseño de posicionamiento - nuevo headline, métricas reales, título correcto


Secciones nuevas - Casos de Estudio, Formación detallada






2. Contexto y Diagnóstico


2.1 Perfil del Propietario


Nombre
Orlando Emerson Linares Jauregui


Posicionamiento actual web
Executive Strategist - AI Architect &amp; Business Consultant


Posicionamiento propuesto
Consultor en Transformación Operativa y Automatización de Procesos


Experiencia total
7+ años en sector público peruano (PRONIED, FONDEPES, COFOPRI, ESSALUD)


Cobertura geográfica
Perú + México (LATAM incipiente)


Educación
Bachiller en Administración - Universidad Continental


Formación reciente
12+ diplomados (2023-2025) · MIT Professional Education · Florida Global University


Stack tecnológico
Power BI · SharePoint · Power Automate · SQL Server · Bizagi · M365


Herramientas propias
Clarificador Estratégico (5 fases + IA) · Monster Prompts (GPT) · Arrendia · LexIA




2.2 Diagnóstico de la Web Actual


Sección
Fortaleza
Problema
Hero - headline
Diseño visual fuerte, impactante
Título 'Executive Strategist' no respaldado por CV
Hero - CTAs
Dos opciones visibles
Igual peso visual, parálisis de decisión
Ecosistemas
4 áreas bien definidas
Sin resultados concretos, sin micro-CTAs - dead ends
Metodología
Frameworks correctos y relevantes
Sin casos de aplicación real que los respalden
AI Lab
Diferenciador genuino
Clarificador desaprovechado, Arrendia y LexIA ausentes
Contacto
Formulario estructurado
No envía datos - e.preventDefault() sin backend
Email visible
-
Gmail personal en sitio ejecutivo - rompe credibilidad
Casos de éxito
-
Sección inexistente - la más crítica para conversión
Formación
Logos en footer
Sin detalle de certificaciones, años ni habilidades
CSS
Estética coherente en prod.
Dos sistemas CSS en conflicto (index.html vs style.css)




2.3 Gap de Posicionamiento

El gap entre el posicionamiento actual y la experiencia real genera riesgo de desconfianza. La siguiente tabla muestra la diferencia:


Web Actual Dice
Realidad del CV
'Executive Strategist'
Consultor de procesos en RRHH, PRONIED
'Arquitecto de Negocios + Estrategia de IA'
BA con diplomados recientes en IA aplicada
'Metodología de Clase Mundial'
BABOK/BPMN/PMBOK aplicados en proyectos reales
MIT como respaldo de IA
Curso de 8h - MIT Professional Education / Santander
Sin casos visibles
PRONIED + MADIMSA - casos sólidos y verificables






3. Objetivos del Producto


3.1 Objetivo Principal

Transformar orlandolinares.com en un portafolio ejecutivo de credibilidad que demuestre - no solo declare - las capacidades de Orlando Linares, generando confianza en clientes potenciales del sector público peruano y empresas operativas en LATAM.




3.2 Objetivos Específicos


Alinear el posicionamiento web con la experiencia real del CV, eliminando el gap de credibilidad.


Incorporar los dos casos de estudio reales (PRONIED y MADIMSA) como evidencia central del portafolio.


Jerarquizar los CTAs para guiar al visitante desde el descubrimiento hasta el contacto sin confusión.


Conectar narrativamente las herramientas propias (Clarificador, Monster Prompts) con la experiencia profesional.


Resolver los bugs técnicos críticos: formulario de contacto y email corporativo.


Crear la sección de Formación y Certificaciones como evidencia de actualización constante.




3.3 Métricas de Éxito


Métrica
Criterio de éxito
Sprint objetivo
Formulario funcional
0% de leads perdidos por bug
Sprint 1
Email corporativo
100% emails a dominio propio
Sprint 1
Casos de estudio publicados
2 casos completos visibles
Sprint 2
Posicionamiento alineado
Título coherente con CV
Sprint 1
Clarificador conectado
CTA visible desde hero y nav
Sprint 2
Sección formación
12+ certs documentadas
Sprint 3






4. Audiencia Objetivo


4.1 Perfiles de Visitante




Perfil A - Funcionario / Jefe de área, sector público peruano
Atributo
Detalle
Cargo típico
Jefe de unidad, coordinador, director de área en institución pública
Necesidad
Consultor externo que entienda la burocracia peruana y pueda mejorar procesos sin chocar con normas
Criterio de decisión
Experiencia verificable en instituciones similares (PRONIED, FONDEPES)
Punto de dolor
No puede contratar a alguien que no conozca el SGSI, SIGESPER, los plazos normativos
CTA más efectivo
Ver casos de PRONIED - agendar consulta




Perfil B - Dueño / Gerente de PYME operativa (Perú o LATAM)
Atributo
Detalle
Cargo típico
Gerente general, dueño de empresa con 10-50 personas en operación
Necesidad
Ordenar la empresa: roles, procesos, control - sin implementar algo demasiado complejo
Criterio de decisión
Alguien que haya hecho esto antes en una empresa similar
Punto de dolor
Desorden operativo, dependencia de personas clave, procesos no documentados
CTA más efectivo
Ver caso MADIMSA - iniciar Clarificador Estratégico




Perfil C - Reclutador / Headhunter buscando BA o consultor
Atributo
Detalle
Necesidad
Verificar experiencia real, stack técnico, certificaciones y casos anteriores
Lo que busca
CV coherente con web, resultados medibles, formación actualizada
CTA más efectivo
LinkedIn - descarga CV






5. Casos de Estudio (Contenido Central)

Esta es la sección más importante del rediseño. Sin casos reales visibles, la web no puede generar confianza. Los dos casos siguientes deben ser la evidencia central del portafolio.




5.1 Caso PRONIED - Sector Público Peruano


PRONIED - Unidad de Recursos Humanos
Consultor / Analista de Procesos y Automatización  ·  Jul 2023 - Abr 2026  ·  Sector Público · Lima, Perú
PROBLEMA

Procesos de RRHH (legajos, certificaciones, fiscalización posterior) sin trazabilidad, documentación manual, alta dependencia de personas. Sin cumplimiento SGSI ni ISO 27001. Sistemas SIGESPER e INTEGRIX descoordinados.

SOLUCIÓN

Diagnóstico AS-IS completo · Automatización con M365 (SharePoint + Power Automate) · Dashboards Power BI para alta dirección · Portal URH Digital alineado a ISO 27001 · Integración de requerimientos con OTI, ESDI · Propuesta de firma digital y procesos 100% digitales.
RESULTADOS

Trazabilidad documental completa · +200 solicitudes atendidas en plazo normativo · Base para procesos completamente digitales · Alineamiento SGSI e ISO 27001 · Mejora en coordinación interáreas · Dashboards usados por alta dirección.

MÉTRICAS

200+ solicitudes · 3 años de continuidad · ISO 27001 · M365 Stack · URH Digital




5.2 Caso MADIMSA / OFINSA - México


Grupo MADIMSA / OFINSA
Consultor de Diseño Organizacional y Procesos  ·  2025  ·  Sector Privado · México (LATAM)
PROBLEMA

Empresa en crecimiento sin estructura formal. Roles difusos, procesos reactivos, sin trazabilidad operativa. Alta dependencia de personas clave. Riesgo operativo en compras, producción, tesorería y proyectos.

SOLUCIÓN

Diagnóstico AS-IS completo · Diseño organizacional (estratégico/táctico/operativo) · MOF aprobado por Dirección · Manual de Procesos con fichas por área · POEs para 5 áreas críticas · Modelo de control Maker-Checker-Approver · Implementación de repositorio Google Drive.
RESULTADOS

Claridad organizacional total · Reducción de reprocesos · Mejora en coordinación interáreas · Mayor control en compras, producción y proyectos · Base estructural para ERP e ISO · Operación escalable sin dependencia de personas.

MÉTRICAS

MOF aprobado · 5 áreas POEs · Modelo MCA · LATAM · Escalable a ERP/ISO






6. Arquitectura de Secciones Propuesta

La web debe seguir una narrativa encadenada donde cada sección responde a una pregunta progresiva en la mente del visitante:


Sección
Pregunta que responde
01. Hero
¿Quién es y qué resuelve?
02. Casos de Estudio (NUEVO)
¿Dónde lo ha aplicado con resultados reales?
03. Servicios (renombrar Ecosistemas)
¿Qué servicios concretos ofrece?
04. Metodología
¿Con qué marcos trabaja?
05. Formación (NUEVO/EXPANDIR)
¿Qué respaldo académico tiene?
06. AI Lab
¿Qué construyó por cuenta propia?
07. Contacto (FIX TÉCNICO)
¿Cómo contactarlo?




6.1 Hero - Rediseño


Headline propuesto


&quot;Transformo procesos complejos en sistemas operativos claros, automatizados y sostenibles.&quot;




Subtítulo propuesto


&quot;Business Analyst y consultor de procesos con 7 años en el sector público peruano y proyectos en México. Especializado en diagnóstico AS-IS, automatización con M365 e IA aplicada, y diseño de estructuras organizacionales que escalan.&quot;




Métricas del hero



7+

Años sector público

2

Países (Perú · México)

200+

Solicitudes gestionadas

12+

Diplomados recientes




Jerarquía de CTAs del hero
Nivel CTA
Acción
Nivel 1 - Primario (cyan filled)
Clarificador Estratégico - Gratuito
Nivel 2 - Secundario (outline)
Agendar Consultoría
Nivel 3 - Ghost links
Ver casos de estudio  ·  Explorar AI Lab




6.2 Sección Casos de Estudio (nueva)


Posición: después del hero, antes de Servicios


Formato: 2 cards de caso completo - problema / solución / resultado / métricas


Sub-CTA por caso: 'Consultar un proyecto similar '


Narrativa introductoria: 'No solo conozco los marcos teóricos - los apliqué en estas instituciones.'




6.3 Servicios (renombrar desde Ecosistemas)

Cada card de servicio debe incluir: descripción actualizada + 1 resultado concreto + certificación que lo respalda + micro-CTA contextual.


Servicio
Micro-CTA contextual
Arquitectura de Procesos
'Diagnosticar mis procesos ' (abre Clarificador)
Automatización M365
'Ver cómo aplico automatización ' (link a caso PRONIED)
Data Intelligence
'Consultar este servicio ' (formulario pre-llenado)
Diseño Organizacional
'Ver caso MADIMSA ' (link a caso de estudio)




6.4 Formación y Certificaciones (expandir)


Diseño: grid visual de tarjetas con institución, año y habilidad específica


Contenido: UNI · FGU · MIT · PCM · ENPP (12 diplomados) · WE Educación Ejecutiva


Agregar: año, horas o créditos, habilidad concreta que aportó


Posición: después de Metodología, antes de AI Lab




6.5 AI Lab - Nueva Narrativa

La sección debe incluir una frase de conexión narrativa que cambia completamente el significado:




&quot;Construí estas herramientas porque las necesité. El Clarificador nació de los diagnósticos en PRONIED. Monster Prompts nació de enseñar a equipos administrativos sin experiencia técnica a usar IA. Cada herramienta resuelve un problema real que encontré en el camino.&quot;




Jerarquía de cards en AI Lab


Clarificador Estratégico - card principal (CTA primario cyan: 'Iniciar diagnóstico gratuito')


Monster Prompts - card secundaria (CTA outline: 'Acceder · Pro disponible')


Arrendia - card terciaria (badge: 'En desarrollo' · CTA: 'Unirse a waitlist')


LexIA - card terciaria (badge: 'En desarrollo' · CTA: 'Unirse a waitlist')






7. Requerimientos Técnicos


7.1 Stack Tecnológico Actual


Componente
Detalle
Framework
HTML/CSS/JS puro - sin framework
Deploy
Netlify
CSS
Tailwind CSS via CDN · Estilos inline en &lt;style&gt;
Fuentes
Roboto Condensed · Libre Baskerville (Google Fonts)
Iconos
Google Material Symbols
JS
Vanilla JS - sin dependencias externas
Dominio
orlandolinares.com
Segundo dominio
arrendia.lat




7.2 Bugs Críticos a Resolver


#
Acción
Impacto
Esfuerzo
Sprint
01
Formulario contacto no envía datos
Crítico
10 min
Sprint 1
02
Email Gmail en sitio ejecutivo
Crítico
30 min
Sprint 1
03
'Ver Casos de Éxito' apunta a Metodología
Alto
5 min
Sprint 1
04
Clarificador sin link desde el hero
Alto
15 min
Sprint 1
05
AI Lab ausente del nav
Medio
10 min
Sprint 1
06
Conflicto CSS (index.html vs style.css)
Medio
2h
Sprint 2




7.3 Solución para el Formulario de Contacto

Usar Netlify Forms - la solución más simple dado que el sitio ya está en Netlify. Solo requiere agregar el atributo netlify al form y un input hidden con el nombre del formulario. Costo: $0.



&lt;form id=&quot;contactForm&quot; netlify name=&quot;contacto-orlando&quot;&gt;

  &lt;input type=&quot;hidden&quot; name=&quot;form-name&quot; value=&quot;contacto-orlando&quot; /&gt;




7.4 Solución para Email Corporativo
Dominio
Solución
orlandolinares.com
Zoho Mail gratuito (1 buzón, 5GB) - enviar y recibir desde orlando@orlandolinares.com
arrendia.lat
ImprovMX gratuito - reenvío a Gmail. Sin riesgo de romper Resend (email transaccional)
Migración futura
Migadu ($4/mes) - ilimitado en dominios y buzones, ideal cuando crezca el ecosistema






8. Plan de Implementación

El rediseño se divide en 3 sprints de 1-2 semanas cada uno, organizados por impacto inmediato vs. esfuerzo de construcción de contenido.




8.1 Sprint 1 - Fixes Urgentes y Posicionamiento (Semana 1)

Objetivo: eliminar los errores que dañan la credibilidad hoy mismo. Sin tocar el diseño visual.


#
Acción
Impacto
Esfuerzo
Sprint
1.1
Fix formulario - Netlify Forms (2 líneas de código)
Crítico
10 min
Día 1
1.2
Cambiar email Gmail  email corporativo Zoho
Crítico
30 min
Día 1
1.3
Cambiar título 'Executive Strategist'
Alto
5 min
Día 1
1.4
Corregir CTA 'Ver Casos de Éxito' (apunta a #marcos)
Alto
5 min
Día 1
1.5
Reescribir headline y subtitle del hero
Alto
1h
Día 2
1.6
Agregar 4 métricas reales al hero
Alto
30 min
Día 2
1.7
Agregar AI Lab al nav con estilo cyan
Medio
15 min
Día 2




8.2 Sprint 2 - Contenido Central (Semana 2)

Objetivo: construir la evidencia de credibilidad que falta. Esta es la semana de mayor impacto.


#
Acción
Impacto
Esfuerzo
Sprint
2.1
Construir sección Casos de Estudio (PRONIED + MADIMSA)
Crítico
4h
Día 8
2.2
Agregar micro-CTAs a cada card de Servicios/Ecosistemas
Alto
1h
Día 9
2.3
Rediseñar AI Lab: jerarquía de herramientas + narrativa
Alto
3h
Día 9
2.4
Conectar Clarificador desde hero y nav
Alto
30 min
Día 10
2.5
Agregar Calendly o alternativa al contacto
Medio
1h
Día 10
2.6
Añadir WhatsApp directo en sección contacto
Medio
20 min
Día 10




8.3 Sprint 3 - Credibilidad Académica y SEO (Semana 3)

Objetivo: consolidar la credibilidad con formación detallada y comenzar posicionamiento orgánico.


#
Acción
Impacto
Esfuerzo
Sprint
3.1
Construir sección Formación/Certificaciones visual
Medio
3h
Día 15
3.2
Agregar 1 resultado concreto por ecosistema/servicio
Alto
2h
Día 15
3.3
Resolver conflicto CSS (unificar sistemas)
Medio
2h
Día 16
3.4
SEO básico: meta tags, OG tags, keywords en español
Medio
2h
Día 16
3.5
Configurar email corporativo (Zoho + ImprovMX)
Técnico
1h
Día 17
3.6
Primera entrada de blog / contenido SEO
Estratégico
3h
Día 18






9. Posicionamiento y Propuesta de Valor


9.1 Posicionamiento Aprobado




Consultor en Transformación Operativa y Automatización de Procesos

Sector público peruano + empresas operativas en crecimiento (LATAM)




9.2 Propuesta de Valor Diferenciada
Diferenciador
Evidencia
Diferenciador 1
7 años dentro del sector público peruano - conoce SGSI, normas, sistemas (SIGESPER, INTEGRIX, SGD), plazos y burocracia real
Diferenciador 2
Cobertura LATAM incipiente - Perú + México demuestran capacidad de trabajo remoto e internacional
Diferenciador 3
Constructor de herramientas propias con IA - Clarificador y Monster Prompts como evidencia de capacidad técnica aplicada
Diferenciador 4
Formación intensiva 2023-2025 - 12+ diplomados en BPMN, BA, Data Analytics, IA, Gestión Pública, PMBOK en un período corto




9.3 Título del Sitio Propuesto

Reemplazar 'Executive Strategist' por una de estas opciones, ordenadas de más específico a más aspiracional:




Business Analyst &amp; Process Consultant (más técnico, verificable)


Consultor en Transformación Operativa | BA &amp; Automatización (más descriptivo)


Consultor en Procesos y Automatización - Sector Público &amp; PYMES (más nicho)






10. Herramientas Propias - AI Lab


10.1 Clarificador Estratégico
Atributo
Detalle
Descripción
Herramienta de diagnóstico en 5 fases que ayuda a identificar el problema real de una organización y genera una hoja de ruta personalizada con IA
Fases
01 Fricción actual  02 Escenario deseado  03 Inventario de recursos  04 Apuesta inteligente (matriz impacto/facilidad)  05 Hoja de ruta con IA
Valor para el usuario
Diagnóstico gratuito, estructurado, con plan de acción concreto generado por IA
Valor para Orlando
Lead magnet - al final el usuario entrega nombre y email. Orlando recibe reporte pre-calificado con el contexto del cliente antes de la primera llamada
Estado
Disponible - página independiente enlazada desde el sitio
Mejora propuesta
Agregar en el reporte final una propuesta de servicio pre-llenada con los datos del usuario
CTA en web
Hero (primario) + AI Lab (card principal) + nav




10.2 Monster Prompts
Atributo
Detalle
Descripción
GPT personalizado para generación de prompts profesionales con ingeniería de pensamiento crítico para usuarios administrativos sin experiencia en IA
Audiencia objetivo
Personal administrativo del sector público y empresas - que no conoce prompting avanzado
Modelo de negocio propuesto
Freemium: 3 prompts gratuitos  suscripción Pro para acceso ilimitado
Limitación plataforma
OpenAI no permite cobrar acceso directo a un GPT - necesita web app independiente con Stripe para monetizar
Estado actual
GPT disponible - monetización pendiente de implementar
Stack sugerido
Next.js + Stripe + Claude API o OpenAI API  landing independiente
CTA en web
AI Lab (card secundaria)




10.3 Arrendia y LexIA
Herramienta
Detalle
Arrendia
Plataforma PropTech para el mercado inmobiliario/legal. En desarrollo. CTA: waitlist.
LexIA
Herramienta LegalTech con IA. En desarrollo. CTA: waitlist.
Presentación web
Cards secundarias con badge 'En desarrollo' - generan expectativa y muestran pipeline activo
Valor narrativo
Demuestran que Orlando es builder, no solo consultor - perfil diferenciado






11. Infraestructura y Email


11.1 Email Corporativo - Plan Inmediato
Dominio
Configuración
orlandolinares.com
Zoho Mail gratuito · 1 buzón · 5GB · Enviar y recibir · Dirección: orlando@orlandolinares.com
arrendia.lat
ImprovMX gratuito · Reenvío a Gmail · hola@arrendia.lat  Gmail actual
Configuración DNS
Agregar MX records de Zoho en Netlify para .com / MX records ImprovMX en Vercel para .lat
Riesgo arrendia.lat
Resend usa MX en Vercel - verificar si conflicto antes de agregar ImprovMX




11.2 Email Corporativo - Plan a Mediano Plazo
Atributo
Detalle
Proveedor
Migadu ($4/mes fijo)
Ventaja
Ilimitado en dominios y buzones - orlandolinares.com + arrendia.lat + LexIA + futuros
Cuándo migrar
Cuando Arrendia o LexIA necesiten múltiples buzones (soporte, noreply, info)
Incluye
Enviar + recibir + SMTP + IMAP + múltiples alias




11.3 Netlify Forms - Configuración

Agregar los siguientes atributos al form de contacto en index.html:


data-netlify='true' o atributo netlify en el tag &lt;form&gt;


input hidden: name='form-name' value='contacto-orlando'


Actualizar el JS para mostrar mensaje de éxito real (eliminar setTimeout simulado)


Configurar notificación por email en Netlify Dashboard  Forms  Notifications






12. Riesgos y Mitigación


Riesgo
Nivel
Mitigación
Formulario no funcional causa pérdida de leads
Crítico
Fix inmediato Sprint 1 - Netlify Forms
Gap posicionamiento genera desconfianza en clientes
Alto
Cambiar título y agregar casos antes de cualquier campaña de difusión
Conflicto CSS puede romper estilos al actualizar
Medio
Documentar sistema activo y desactivar style.css en Sprint 3
Arrendia.lat - MX records en conflicto con Resend
Medio
Verificar configuración DNS antes de agregar ImprovMX
Monster Prompts sin monetización real
Medio
Definir si construir web app independiente o mantener como lead gen gratuito
Contenido de casos sin métricas exactas
Bajo
Usar rangos o estimaciones ('hasta 40% reducción') si no hay datos precisos






13. Checklist de Implementación




Sprint 1 - Hacer esta semana


[ ] Conectar formulario con Netlify Forms


[ ] Cambiar email a orlando@orlandolinares.com (Zoho Mail)


[ ] Cambiar título 'Executive Strategist' en header y meta


[ ] Corregir CTA 'Ver Casos de Éxito'  apuntar a sección correcta


[ ] Reescribir headline y subtitle del hero


[ ] Agregar 4 métricas reales al hero


[ ] Agregar AI Lab al nav (estilo cyan ya definido)




Sprint 2 - Semana 2


[ ] Construir HTML sección Casos de Estudio (PRONIED + MADIMSA)


[ ] Agregar micro-CTAs a las 4 cards de Servicios


[ ] Rediseñar AI Lab con jerarquía: Clarificador &gt; Monster Prompts &gt; En desarrollo


[ ] Enlazar Clarificador desde hero (CTA primario) y nav


[ ] Agregar Calendly o link directo en sección contacto


[ ] Agregar WhatsApp directo como segundo canal de contacto




Sprint 3 - Semana 3


[ ] Construir sección Formación/Certificaciones


[ ] Agregar resultado concreto a cada servicio/ecosistema


[ ] Resolver conflicto CSS (desactivar style.css o unificar)


[ ] Configurar meta tags y OG para SEO básico


[ ] Configurar ImprovMX para arrendia.lat


[ ] Publicar primera entrada de contenido/blog




PRD · orlandolinares.com  ·  v1.0  ·  Abril 2026  ·  Generado con asistencia de Claude (Anthropic)



