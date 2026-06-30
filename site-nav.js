// site-nav.js — Fuente única de navegación y footer.
// Consumido por nav.js (páginas estáticas) y por los componentes React (home).
// Editar el menú/footer SOLO aquí para evitar que las listas se desincronicen.

export const PAGES = [
  { href: 'index.html',        label: 'Inicio' },
  { href: 'servicios.html',    label: 'Servicios' },
  { href: 'mvp_studio.html',   label: 'MVP Studio' },
  { href: 'casos_de_uso.html', label: 'Casos' },
  { href: 'ai_lab.html',       label: 'AI Lab' },
];

export const LEGAL_LINKS = [
  { href: 'privacy.html',          label: 'Privacidad' },
  { href: 'discovery-wizard.html', label: 'Diagnóstico Estratégico' },
];
