// site-nav.js — Fuente única de navegación y footer.
// Consumido por nav.js (páginas estáticas) y por los componentes React (home).
// Editar el menú/footer SOLO aquí para evitar que las listas se desincronicen.

export const PAGES = [
  { href: '/',                label: 'Inicio' },
  { href: '/orlando-linares', label: 'Sobre mí' },
  { href: '/enfoque',         label: 'Enfoque' },
  { href: '/articulos',       label: 'Artículos' },
  { href: '/servicios',       label: 'Servicios' },
  { href: '/casos',           label: 'Casos' },
];

export const LEGAL_LINKS = [
  { href: '/privacy',          label: 'Privacidad' },
  { href: '/discovery-wizard', label: 'Diagnóstico Estratégico' },
];
