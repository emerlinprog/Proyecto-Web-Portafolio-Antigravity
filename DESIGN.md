---
name: Orlando Linares — Business Architecture
description: Industrial-dark landing/portafolio donde el orden visual ES el argumento de venta.
colors:
  primary: "#96cbff"
  secondary: "#9bcbfa"
  tertiary: "#cebdff"
  foreground: "#e7e0ef"
  muted-foreground: "#948da5"
  background: "#0a0a0c"
  surface: "#0e0e10"
  surface-container: "#17171a"
  surface-container-high: "#1e1e22"
  border: "#2a2a30"
typography:
  display:
    fontFamily: "Geist, sans-serif"
    fontSize: "clamp(2rem, 8vw, 5rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.06em"
  headline:
    fontFamily: "Geist, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 3rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Geist, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Geist, sans-serif"
    fontSize: "clamp(0.875rem, 2vw, 1.125rem)"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Geist, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 900
    lineHeight: 1.4
    letterSpacing: "0.3em"
rounded:
  sm: "1.0rem"
  md: "1.25rem"
  lg: "1.5rem"
  xl: "2.5rem"
spacing:
  sm: "0.8rem"
  md: "1rem"
  lg: "1.563rem"
  xl: "2.441rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.background}"
    rounded: "{rounded.md}"
    padding: "1.25rem 2.5rem"
    typography: "{typography.label}"
  button-ghost:
    backgroundColor: "#ffffff0d"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    padding: "1.25rem 2.5rem"
    typography: "{typography.label}"
  card-glass:
    backgroundColor: "#0a0a0c99"
    textColor: "{colors.foreground}"
    rounded: "{rounded.xl}"
    padding: "2.5rem"
---

# Design System: Orlando Linares — Business Architecture

## 1. Overview

**Creative North Star: "The Operations Blueprint"**

El sitio es la prueba de lo que vende. Si el argumento es arquitectura de negocios, procesos e IA con rigor, la propia interfaz debe leerse como un plano técnico: tintado, oscuro, disciplinado, con rejilla visible y tipografía dimensional. No es un dashboard funcional ni una landing de plantilla; es un blueprint habitable que transmite competencia antes de leer una sola palabra. Hereda la visión declarada del proyecto: industrial-dark, terminal-native, señalética industrial y rejilla suiza rigurosa como voz de diseño.

La densidad es ejecutiva pero respirada: titulares enormes en negro condensado, etiquetas mono diminutas tipo wayfinding ISO, y un único acento azul eléctrico que marca la ruta del ojo. La textura ambiental (rejilla blueprint + grano sutil + viñeta) da profundidad sin sombras genéricas. El movimiento es de momentum físico, nunca decorativo.

Este sistema rechaza explícitamente tres cosas: el **SaaS genérico de plantilla** (tarjetas idénticas repetidas, hero-metric cliché, gradientes morados), la **consultora corporativa aburrida** (navy stock, sin personalidad) y el **cripto/neón futurista** (saturación gaming sobre negro). El craft con propósito es bienvenido; la decoración vacía está prohibida.

**Key Characteristics:**
- Industrial-dark sobre neutros tintados hacia el azul (jamás `#000`/`#fff` puros).
- Tipografía Geist black condensada como voz dominante; labels mono en mayúsculas tracking ancho.
- Un solo acento (azul eléctrico) de alta señal; el lavanda es secundario y escaso.
- Rejilla suiza visible y composiciones asimétricas; ritmo deliberado, no repetición.
- Motion ease-out exponencial, sin rebote; respeta `prefers-reduced-motion`.

## 2. Colors

Neutros profundos tintados hacia el azul-violeta, gobernados por un acento azul eléctrico de aparición disciplinada.

### Primary
- **Azul Eléctrico de Señal** (`#96cbff` / `hsl(210 100% 79%)`): el acento que carga toda la marca. CTAs primarios (con texto = `background` oscuro), enlaces activos, badges, glows de hover, índices y reglas de énfasis. Es la ruta del ojo a través del plano.

### Secondary
- **Azul Cielo Atenuado** (`#9bcbfa` / `hsl(210 90% 79%)`): eco de apoyo del primario para estados y matices; casi intercambiable, úsese solo cuando el primario necesite una variante más suave.

### Tertiary
- **Lavanda Cognitivo** (`#cebdff` / `hsl(255 100% 87%)`): reservado para acentuar dominios de IA/cognición en páginas internas (iconos, bordes sutiles). Escaso por diseño; nunca compite con el azul.

### Neutral
- **Texto Primario** (`#e7e0ef` / `hsl(270 20% 91%)`): titulares y copy principal sobre fondo oscuro.
- **Texto Atenuado** (`#948da5` / `hsl(255 10% 60%)`): descripciones, metadatos, estados inactivos.
- **Fondo Profundo** (`#0a0a0c` / `hsl(240 10% 4%)`): lienzo base tintado.
- **Superficies** (`#0e0e10` → `#1e1e22`): escala tonal `surface` / `surface-container` / `surface-container-high` para capas y glass-cards.
- **Borde / Divisor** (`#2a2a30` / `hsl(240 6% 18%)`): líneas de rejilla y separadores; en glass se usa azul al 8% (`rgba(150,203,255,0.08)`).

### Named Rules
**The One Blue Rule.** El azul eléctrico es el único acento de marca. Aparece en ≤10% de cualquier pantalla; su rareza es lo que lo hace leerse como señal, no como ruido. El lavanda no es un segundo acento de igual rango: es un matiz de dominio, escaso.

**The Tinted-Neutral Rule.** Prohibido `#000000` y `#ffffff` puros. Todo neutro está tintado hacia el azul-violeta (chroma mínimo) para dar profundidad y cohesión.

## 3. Typography

**Display / Body Font:** Geist (con `sans-serif` de fallback)
**Label / Mono Font:** Geist Mono / `font-mono` del sistema para índices y etiquetas técnicas
**Iconos:** Material Symbols Outlined

**Character:** Una sola familia geométrica-neutral llevada al extremo del contraste de peso: black (900) condensado para titulares con tracking negativo agresivo, medium (500) aireado para cuerpo. La voz nace del contraste de escala y peso, no de mezclar familias.

### Hierarchy
- **Display** (900, `clamp(2rem, 8vw, 5rem)`, lh 0.9, tracking `-0.06em`, MAYÚSCULAS): hero y cierres de sección. Una idea por pliegue.
- **Headline** (900, `clamp(1.75rem, 4vw, 3rem)`, lh 1, MAYÚSCULAS): títulos de sección.
- **Title** (900, 1.5rem, lh 1.1): títulos de tarjeta/fila.
- **Body** (500, `clamp(0.875rem, 2vw, 1.125rem)`, lh 1.6): copy; máx. 65–75ch de ancho de línea.
- **Label** (900, 0.625rem, tracking `0.3em`, MAYÚSCULAS): eyebrows, tags, metadatos tipo wayfinding ISO.

### Named Rules
**The Wayfinding Label Rule.** Las etiquetas pequeñas van en mayúsculas con tracking ≥0.2em, como señalética industrial. Reservadas a labels cortos: jamás cuerpo en mayúsculas.

**The Light-on-Dark Rule.** Texto claro sobre oscuro lee más ligero; añade 0.05–0.1 a la altura de línea del cuerpo para que respire.

## 4. Elevation

Sistema mayormente plano que construye profundidad con **capas tonales + glow + textura ambiental**, no con sombras de caja genéricas. Las superficies se distinguen por escalones tonales (`surface-container`) y por el blur de cristal, no por drop-shadows duras.

### Shadow Vocabulary
- **Glass ambient** (`box-shadow: 0 8px 32px 0 rgba(0,0,0,0.37)`): sombra difusa única bajo glass-cards; ancla la tarjeta sin endurecer el borde.
- **Accent glow** (`shadow-primary/20`, p.ej. `0 0 15px #96cbff` en estados activos): halo azul para CTAs y puntos vivos. La luz, no la sombra, marca la jerarquía.

### Standard Motion (durations + easings)
- **Ease Premium (Out)** `cubic-bezier(0.16, 1, 0.3, 1)`: spell primario de entrada/reveal. **Sin overshoot.**
- **Ease Out Quint** `cubic-bezier(0.22, 1, 0.36, 1)`: motion utilitario rápido.
- **Ease In-Out Premium** `cubic-bezier(0.65, 0, 0.35, 1)`: loops y motion ambiental continuo.
- **Durations**: Fast `0.15s` (interacciones) · Base `0.3s` (transiciones UI) · Slow `0.6s` (reveals orquestados).

### Named Rules
**The Glow-Not-Shadow Rule.** La dimensión se sugiere con glows azules de bajo opacity y capas tonales, no con sombras grises pesadas. Si parece app de 2014, la sombra es demasiado dura.

**The No-Overshoot Rule.** Las curvas de entrada son ease-out exponencial. Prohibido el rebote/elástico (control points >1). Y nunca animar `filter: blur` en scroll: satura GPU.

## 5. Components

### Buttons
- **Shape:** esquinas redondeadas medias (`1.25rem`, `rounded-xl`/`rounded-2xl`).
- **Primary:** fondo azul `#96cbff`, texto = `background` oscuro, padding `1.25rem 2.5rem`, label en mayúsculas tracking ancho. Hover: `brightness-110` + `shadow-primary/20`; active: `scale(0.97)`.
- **Ghost / Secondary:** `bg-white/5` con borde `white/10` y `backdrop-blur`; texto claro. Hover: `bg-white/10`.

### Chips / Tags
- **Style:** `bg-white/[0.03]`, borde `white/5`, texto atenuado, radio `xl`, label diminuto.
- **State:** hover eleva a `bg-primary/10` + borde `primary/30` + texto claro.

### Cards / Containers
- **Corner Style:** generoso (`2.5rem`, `rounded-[2.5rem]`).
- **Background:** glass — `rgba(10,10,12,0.6)` con `backdrop-filter: blur(20px) saturate(180%)`.
- **Border:** 1px azul al 8% (`rgba(150,203,255,0.08)`).
- **Shadow:** ver Elevation (Glass ambient).
- **Internal Padding:** `2.5rem` (escala xl).
- **Regla:** usar tarjetas solo cuando el contenido es distinto y accionable; alternar con listas/divisores para romper monotonía. Nunca anidar tarjetas.

### Navigation
- **Style:** barra fija superior, `bg-background/80` + `backdrop-blur-md`, borde inferior `white/5`.
- **Typography:** labels en mayúsculas, tracking `0.2em`, 10px.
- **States:** activo = azul con borde inferior 2px azul; hover = de atenuado a azul. Móvil: overlay full-screen con stagger.

### Signature: Lista-Diagnóstico
Filas enumeradas (índice mono + título black + descripción + consecuencia) separadas por **divisores horizontales completos**, en rejilla 12-col asimétrica. Es la alternativa anti-monotonía al grid de tarjetas y refuerza la narrativa de "diagnóstico".

## 6. Do's and Don'ts

### Do:
- **Do** mantener el azul eléctrico `#96cbff` como único acento de marca, en ≤10% de la pantalla (The One Blue Rule).
- **Do** tintar todos los neutros hacia el azul-violeta; profundidad con capas tonales y glows, no con sombras duras.
- **Do** llevar el contraste de peso de Geist al extremo (900 condensado vs 500 aireado) y usar labels mono en mayúsculas tipo señalética.
- **Do** variar el layout entre secciones (bento, lista-diagnóstico, asimetría); cada pantalla de scroll debe verse distinta.
- **Do** animar solo `opacity`/`transform` con ease-out exponencial `cubic-bezier(0.16, 1, 0.3, 1)` y respetar `prefers-reduced-motion`.

### Don't:
- **Don't** volver a declarar el acento como *lime/neón verde*: fue un error histórico ya corregido. El acento es azul `#96cbff`.
- **Don't** caer en **SaaS genérico de plantilla**: tarjetas idénticas repetidas (icono + título + texto ×N), hero-metric cliché ni gradientes morados decorativos.
- **Don't** derivar a **consultora corporativa aburrida** (navy stock sin personalidad) ni a **cripto/neón futurista** (saturación gaming sobre negro).
- **Don't** usar `#000`/`#fff` puros, gradient-text (`background-clip:text`), ni side-stripes (`border-left/right` >1px como acento).
- **Don't** animar `filter: blur` en scroll ni usar curvas con overshoot/rebote; satura GPU y contradice el sistema de motion.
