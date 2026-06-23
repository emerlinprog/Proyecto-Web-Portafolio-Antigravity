import React, { useState } from "react";

const navLinks = [
  { name: "Inicio", href: "index.html", active: true },
  { name: "Servicios", href: "servicios.html" },
  { name: "AI Lab", href: "ai_lab.html" },
  { name: "MVP Studio", href: "mvp_studio.html" },
  { name: "Casos", href: "casos_de_uso.html" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav id="main-nav" className="bg-background/80 backdrop-blur-md border-b border-white/5 w-full fixed top-0 z-[100]">
        <div className="flex justify-between items-center w-full px-6 py-5 max-w-7xl mx-auto">
          <a href="index.html" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-primary font-black text-sm tracking-tighter">OL</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black tracking-tight text-foreground uppercase tracking-widest">Orlando Linares</span>
              <span className="text-[8px] font-bold text-primary uppercase tracking-[0.3em] opacity-80">Business Architecture</span>
            </div>
          </a>
          
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
                  link.active 
                  ? "text-primary font-black border-b-2 border-primary pb-1" 
                  : "text-muted-foreground font-bold hover:text-primary"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="discovery-wizard.html" 
              className="bg-primary text-primary-foreground font-black px-5 py-2.5 rounded-xl hover:brightness-110 transition-all text-[10px] uppercase tracking-widest hidden sm:flex items-center gap-2 shadow-lg shadow-primary/20"
            >
              Diagnóstico Estratégico
              <span className="material-symbols-outlined text-xs">bolt</span>
            </a>
            <a
              href="consola_canvas.html"
              className="hidden sm:flex w-10 h-10 rounded-xl bg-white/5 border border-white/10 items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all group relative"
              title="Consola Canvas"
              aria-label="Abrir Consola Canvas"
            >
              <span className="material-symbols-outlined text-xl">admin_panel_settings</span>
              <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            </a>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-foreground p-2 rounded-xl bg-white/5 border border-white/10 active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[90] bg-background/95 backdrop-blur-xl lg:hidden transition-all duration-500 flex flex-col items-center justify-center p-6 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      >
        <button 
          onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
          className="absolute top-6 right-6 text-foreground p-2 rounded-xl bg-white/5 border border-white/10 active:scale-95 transition-transform"
          aria-label="Cerrar menú"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="flex flex-col items-center justify-center w-full gap-8" onClick={e => e.stopPropagation()}>
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-2xl font-black uppercase tracking-[0.2em] transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setIsOpen(false)}
            >
              <span className={link.active ? 'text-primary' : 'text-foreground'}>{link.name}</span>
            </a>
          ))}
          <a 
            href="discovery-wizard.html" 
            className={`mt-8 bg-primary text-primary-foreground font-black px-10 py-5 rounded-2xl text-xs uppercase tracking-[0.2em] shadow-xl shadow-primary/20 ${isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'} transition-all duration-500 delay-500`}
            onClick={() => setIsOpen(false)}
          >
            Solicitar Diagnóstico
          </a>
          <a
            href="consola_canvas.html"
            className={`text-sm font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-primary ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} transition-all duration-500 delay-700`}
            onClick={() => setIsOpen(false)}
          >
            Consola Canvas
          </a>
        </div>
      </div>
    </>
  );
}
