import React from "react";

const problems = [
  {
    id: "01",
    title: "Caos Operativo",
    description: "Dependencia excesiva de comunicación no estructurada (WhatsApp/Email) para decisiones críticas y flujos de trabajo.",
    consequence: "Pérdida de datos e ineficiencia.",
  },
  {
    id: "02",
    title: "Silos de Información",
    description: "Hojas de cálculo fragmentadas y sistemas desconectados que requieren conciliación manual constante.",
    consequence: "Decisiones basadas en datos obsoletos.",
  },
  {
    id: "03",
    title: "Cuellos de Botella",
    description: "Procesos que dependen de individuos clave, limitando la capacidad de la empresa para manejar más volumen.",
    consequence: "Imposibilidad de escalar sin colapsar.",
  }
];

export function ProblemSection() {
  return (
    <section className="cv-auto py-16 md:py-24 px-6 md:px-16 bg-background relative">
      <div className="max-w-7xl mx-auto">
        {/* Heading: asimétrico, ocupa columnas izquierdas; eyebrow tipo informe */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 mb-16 md:mb-24">
          <div className="md:col-span-8">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6 block">
              Diagnóstico · Síntomas operativos
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground leading-[0.9]">
              ¿Tu organización todavía opera con <br className="hidden md:block" />
              <span className="text-primary">WhatsApp, Excel y procesos manuales?</span>
            </h2>
          </div>
          <p className="md:col-span-4 self-end text-muted-foreground text-base md:text-lg font-medium leading-relaxed">
            El crecimiento exponencial requiere infraestructura tecnológica sólida, no más parches.
          </p>
        </div>

        {/* Lista-diagnóstico enumerada: filas con divisores completos, no tarjetas */}
        <div className="border-t border-white/10">
          {problems.map((problem) => (
            <div
              key={problem.id}
              className="group grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-3 py-8 md:py-10 border-b border-white/10 transition-colors duration-500 hover:bg-white/[0.02]"
            >
              {/* Índice + título */}
              <div className="md:col-span-5 flex items-baseline gap-5">
                <span className="font-mono text-sm text-primary/50 tabular-nums tracking-tight pt-1 group-hover:text-primary transition-colors">
                  {problem.id}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-foreground uppercase tracking-tight leading-none">
                  {problem.title}
                </h3>
              </div>

              {/* Descripción */}
              <p className="md:col-span-4 text-sm text-muted-foreground leading-relaxed font-medium">
                {problem.description}
              </p>

              {/* Consecuencia, alineada a la derecha como "salida" del diagnóstico */}
              <div className="md:col-span-3 md:text-right text-[10px] font-black text-primary uppercase tracking-[0.2em] leading-relaxed self-center">
                <span className="block text-muted-foreground/40 mb-1">Consecuencia</span>
                {problem.consequence}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
