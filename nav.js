// nav.js — Componente compartido de navegación y footer premium
// Las listas de páginas/legales viven en site-nav.js (fuente única).
import { PAGES, LEGAL_LINKS } from './site-nav.js';

(function () {
  const pathAliases = {
    '/index': '/',
    '/servicios.html': '/servicios',
    '/casos_de_uso.html': '/casos',
    '/orlando-linares.html': '/orlando-linares',
    '/enfoque.html': '/enfoque',
    '/articulos.html': '/articulos',
    '/articulo-identificar-procesos-ia.html': '/articulos/identificar-procesos-adecuados-para-ia',
  };
  const rawPath = location.pathname === '/' ? '/' : location.pathname.replace(/\/$/, '');
  const currentPage = pathAliases[rawPath] || rawPath.replace(/\.html$/, '');

  const pages = PAGES;
  const isActivePage = (href) => currentPage === href || (href !== '/' && currentPage.startsWith(`${href}/`));

  const navLinks = pages.map(p => {
    const active = isActivePage(p.href);
    return active
      ? `<a class="inline-flex min-h-11 items-center text-primary font-black border-b-2 border-primary pt-0.5 text-[10px] uppercase tracking-[0.2em]" href="${p.href}">${p.label}</a>`
      : `<a class="inline-flex min-h-11 items-center text-on-surface-variant hover:text-primary transition-all duration-300 text-[10px] font-bold uppercase tracking-[0.2em]" href="${p.href}">${p.label}</a>`;
  }).join('\n');

  const navHTML = `
<nav id="main-nav" class="bg-background/80 backdrop-blur-md border-b border-outline-variant/30 w-full sticky top-0 z-[100]">
  <div class="flex justify-between items-center w-full px-6 xl:px-8 py-3.5 max-w-[1360px] mx-auto">
    <a href="/" class="flex items-center gap-3 group">
      <div class="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
        <span class="text-primary font-black text-sm tracking-tighter">OL</span>
      </div>
      <div class="flex flex-col">
        <span class="text-sm font-black tracking-tight text-on-surface uppercase tracking-widest">Orlando Linares</span>
        <span class="text-[8px] font-bold text-primary uppercase tracking-[0.3em] opacity-80">Procesos e IA aplicada</span>
      </div>
    </a>
    <div class="hidden lg:flex items-center gap-8">
      ${navLinks}
    </div>
    <div class="flex items-center gap-4">
      <a href="/discovery-wizard" class="bg-primary text-background font-black px-5 min-h-11 rounded-xl hover:opacity-90 transition-all text-[10px] uppercase tracking-widest hidden sm:flex items-center gap-2 shadow-lg shadow-primary/20">
        Diagnóstico
        <span class="material-symbols-outlined text-xs">bolt</span>
      </a>
      <button id="mobile-menu-btn" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobile-menu" class="lg:hidden min-w-11 min-h-11 text-on-surface p-2 rounded-xl bg-surface-container-high border border-outline-variant/30">
        <span class="material-symbols-outlined">menu</span>
      </button>
    </div>
  </div>
  <!-- Menú móvil -->
  <div id="mobile-menu" class="hidden lg:hidden bg-surface-container-low border-t border-outline-variant/30 px-6 pb-8 relative">
    <button id="mobile-menu-close" aria-label="Cerrar menú" class="absolute top-4 right-6 text-on-surface p-2 rounded-xl bg-surface-container-high border border-outline-variant/30">
      <span class="material-symbols-outlined">close</span>
    </button>
    <div class="flex flex-col gap-4 pt-16">
      ${pages.map(p => `<a href="${p.href}" class="${isActivePage(p.href) ? 'text-primary font-black' : 'text-on-surface-variant'} py-2 text-[10px] uppercase tracking-[0.2em]">${p.label}</a>`).join('\n      ')}
      <a href="/discovery-wizard" class="bg-primary text-background font-black px-6 py-4 rounded-xl text-center text-[10px] uppercase tracking-widest mt-4 shadow-xl shadow-primary/20">
        Iniciar diagnóstico
      </a>
    </div>
  </div>
</nav>`;

  const footerHTML = `
<footer class="bg-surface-container-lowest border-t border-outline-variant/20 pt-20 pb-10 relative overflow-hidden">
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-primary/5 blur-[100px] -z-10"></div>
  
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      <div class="md:col-span-2">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
            <span class="text-primary font-black text-sm">OL</span>
          </div>
          <span class="text-lg font-black tracking-tight text-on-surface uppercase tracking-widest">Orlando Linares</span>
        </div>
        <p class="text-sm text-on-surface-variant max-w-sm leading-relaxed mb-8">
          Consultoría en arquitectura de procesos e IA aplicada para convertir trabajo administrativo complejo en sistemas claros, trazables y sostenibles.
        </p>
        <div class="flex gap-4">
          <a href="https://www.linkedin.com/in/orlando-linares/" target="_blank" rel="noreferrer" aria-label="LinkedIn de Orlando Linares" class="w-10 h-10 rounded-xl bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
            <span class="material-symbols-outlined text-sm">share</span>
          </a>
          <a href="mailto:orlando@orlandolinares.com" aria-label="Enviar correo a Orlando Linares" class="w-10 h-10 rounded-xl bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
            <span class="material-symbols-outlined text-sm">mail</span>
          </a>
        </div>
      </div>
      
      <div>
        <h4 class="text-[10px] font-black text-on-surface uppercase tracking-[0.2em] mb-6">Navegación</h4>
        <ul class="space-y-4">
          ${pages.map(p => `<li><a href="${p.href}" class="text-xs text-on-surface-variant hover:text-primary transition-colors">${p.label}</a></li>`).join('\n          ')}
        </ul>
      </div>
      
      <div>
        <h4 class="text-[10px] font-black text-on-surface uppercase tracking-[0.2em] mb-6">Legal & Soporte</h4>
        <ul class="space-y-4">
          ${LEGAL_LINKS.map(l => `<li><a href="${l.href}" class="text-xs text-on-surface-variant hover:text-primary transition-colors">${l.label}</a></li>`).join('\n          ')}
        </ul>
      </div>
    </div>
    
    <div class="pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-6">
      <p class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest relative">
        &copy; 2026 — Orlando Linares. Todos los derechos reservados.
      </p>
      <p class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
        <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
        Arquitectura de procesos e IA aplicada
      </p>
    </div>
  </div>
</footer>`;

  // Inyectar nav
  const existingNav = document.querySelector('#main-nav');
  if (!existingNav) {
    document.body.insertAdjacentHTML('afterbegin', navHTML);
  } else {
    existingNav.outerHTML = navHTML;
  }

  // Inyectar footer
  const existingFooter = document.querySelector('footer');
  if (!existingFooter) {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  } else {
    existingFooter.outerHTML = footerHTML;
  }

  // Re-inicializar eventos para el nav recién inyectado
  const btn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.onclick = () => {
      menu.classList.remove('hidden');
      btn.setAttribute('aria-expanded', 'true');
    };
  }
  if (closeBtn && menu) {
    closeBtn.onclick = () => {
      menu.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
    };
  }
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu && !menu.classList.contains('hidden')) {
      menu.classList.add('hidden');
      btn?.setAttribute('aria-expanded', 'false');
      btn?.focus();
    }
  });
  // Cerrar al clickear fuera
  document.addEventListener('click', (e) => {
    if (menu && !menu.classList.contains('hidden') && !menu.contains(e.target) && btn && !btn.contains(e.target)) {
      menu.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();
