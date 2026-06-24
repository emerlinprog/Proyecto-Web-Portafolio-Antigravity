import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { ServicesGrid } from "./components/ServicesGrid";
import { SkillsSection } from "./components/SkillsSection";
import { FinalCTA } from "./components/FinalCTA";
import { TrustBar } from "./components/TrustBar";
import { ScrollReveal } from "./components/ScrollReveal";

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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-black text-sm">OL</span>
                </div>
                <span className="text-lg font-black tracking-tight text-foreground uppercase tracking-widest">Business Architecture Agency</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-sm leading-relaxed mb-8 font-medium">
                Especializados en orquestación agéntica y rediseño de procesos institucionales bajo estándares internacionales. Transformando la complejidad en eficiencia operativa.
              </p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/orlandolinares/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-sm">share</span>
                </a>
                <a href="mailto:orlando@orlandolinares.com" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-sm">mail</span>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-[10px] font-black text-foreground uppercase tracking-[0.2em] mb-6">Navegación</h4>
              <ul className="space-y-4">
                <li><a href="index.html" className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium">Inicio</a></li>
                <li><a href="servicios.html" className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium">Servicios</a></li>
                <li><a href="ia_aplicada.html" className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium">IA Aplicada</a></li>
                <li><a href="mvp_studio.html" className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium">MVP Studio</a></li>
                <li><a href="casos_de_uso.html" className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium">Casos</a></li>
                <li><a href="ai_lab.html" className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium">AI Lab</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[10px] font-black text-foreground uppercase tracking-[0.2em] mb-6">Legal & Soporte</h4>
              <ul className="space-y-4">
                <li><a href="privacy.html" className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium">Privacidad</a></li>
                <li><a href="discovery-wizard.html" className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium">Diagnóstico Estratégico</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest relative">
              &copy; 2026 — Business Architecture Agency. All rights reserved.
              <a href="consola_canvas.html" className="absolute -bottom-2 left-0 w-2 h-2 opacity-5 hover:opacity-100 transition-opacity bg-primary rounded-full" aria-label="Console Access"></a>
            </p>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              Lima, Perú & Global Operations
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
