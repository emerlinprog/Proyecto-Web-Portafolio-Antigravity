import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { ServicesGrid } from "./components/ServicesGrid";
import { SkillsSection } from "./components/SkillsSection";
import { FinalCTA } from "./components/FinalCTA";
import { TrustBar } from "./components/TrustBar";
import { ScrollReveal } from "./components/ScrollReveal";
import { PAGES, PRODUCTS, LEGAL_LINKS } from "../site-nav.js";

function App() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        
        <ScrollReveal delay={0.1}>
          <ProblemSection />
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <ServicesGrid />
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <SkillsSection />
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <FinalCTA />
        </ScrollReveal>
      </main>
      <footer className="bg-surface-container-lowest border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-primary/5 blur-[100px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-black text-sm">OL</span>
                </div>
                <span className="text-lg font-black tracking-tight text-foreground uppercase tracking-widest">Orlando Linares</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-sm leading-relaxed mb-8 font-medium">
                Consultoría en arquitectura de procesos e IA aplicada para convertir trabajo administrativo complejo en sistemas claros, trazables y sostenibles.
              </p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/orlando-linares/" target="_blank" rel="noreferrer" aria-label="LinkedIn de Orlando Linares" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-sm">share</span>
                </a>
                <a href="mailto:orlando@orlandolinares.com" aria-label="Enviar correo a Orlando Linares" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-sm">mail</span>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-[10px] font-black text-foreground uppercase tracking-[0.2em] mb-6">Navegación</h4>
              <ul className="space-y-4">
                {PAGES.map((p) => (
                  <li key={p.href}><a href={p.href} className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium">{p.label}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-[10px] font-black text-foreground uppercase tracking-[0.2em] mb-6">Desarrollos</h4>
              <ul className="space-y-4">
                {PRODUCTS.map((p) => (
                  <li key={p.href}><a href={p.href} className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium">{p.label}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black text-foreground uppercase tracking-[0.2em] mb-6">Legal & Soporte</h4>
              <ul className="space-y-4">
                {LEGAL_LINKS.map((l) => (
                  <li key={l.href}><a href={l.href} className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium">{l.label}</a></li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest relative">
              &copy; 2026 — Orlando Linares. Todos los derechos reservados.
            </p>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              Arquitectura de procesos e IA aplicada
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
