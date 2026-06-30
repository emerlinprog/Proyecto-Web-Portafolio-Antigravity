import React from "react";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="cv-auto py-32 px-6 md:px-16 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="relative p-12 md:p-24 rounded-[3rem] glass-card overflow-hidden text-center">
          {/* Subtle Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground mb-8 uppercase leading-[0.9]">
              Deja de operar en <br />
              <span className="text-primary">modo supervivencia.</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
              Construyamos la arquitectura tecnológica que tu negocio necesita para el próximo nivel de crecimiento.
            </p>
            <a 
              href="discovery-wizard.html"
              className="bg-primary text-primary-foreground px-10 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 mx-auto hover:brightness-110 transition-all shadow-2xl shadow-primary/20 active:scale-[0.97] w-fit"
            >
              Iniciar Diagnóstico Estratégico
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
