import React from "react";

const problems = [
  {
    title: "Caos Operativo",
    description: "Dependencia excesiva de comunicación no estructurada (WhatsApp/Email) para decisiones críticas y flujos de trabajo.",
    consequence: "Pérdida de datos e ineficiencia.",
    icon: "warning",
  },
  {
    title: "Silos de Información",
    description: "Hojas de cálculo fragmentadas y sistemas desconectados que requieren conciliación manual constante.",
    consequence: "Decisiones basadas en datos obsoletos.",
    icon: "grid_view",
  },
  {
    title: "Cuellos de Botella",
    description: "Procesos que dependen de individuos clave, limitando la capacidad de la empresa para manejar más volumen.",
    consequence: "Imposibilidad de escalar sin colapsar.",
    icon: "speed",
  }
];

export function ProblemSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-16 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground mb-8 leading-[0.9] max-w-4xl">
            ¿Tu organización todavía opera con <br />
            <span className="text-primary">WhatsApp, Excel y procesos manuales?</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
            El crecimiento exponencial requiere infraestructura tecnológica sólida, no más parches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {problems.map((problem) => (
            <div 
              key={problem.title}
              className="glass-card p-10 rounded-[2.5rem] flex flex-col hover:bg-white/[0.04] transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-10 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-3xl">{problem.icon}</span>
              </div>
              <h3 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tight">
                {problem.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-10 flex-grow font-medium">
                {problem.description}
              </p>
              <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em] pt-8 border-t border-white/5 flex items-center gap-2">
                <span className="text-muted-foreground/40 material-symbols-outlined text-xs">subdirectory_arrow_right</span> 
                Consecuencia: {problem.consequence}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
