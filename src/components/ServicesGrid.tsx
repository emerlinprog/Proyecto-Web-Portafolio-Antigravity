import React from "react";
import { MoveRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Diagnóstico de procesos",
    subtitle: "Comprender antes de intervenir",
    description: "Delimito el proceso actual, sus actores, evidencias y fricciones para decidir qué problema conviene resolver primero.",
    icon: "manage_search",
    color: "primary",
    href: "/discovery-wizard",
    tag: "Diagnóstico"
  },
  {
    id: "02",
    title: "Arquitectura de procesos",
    subtitle: "AS-IS y TO-BE",
    description: "Documento cómo funciona el trabajo y diseño una operación futura con roles, reglas, controles y excepciones explícitas.",
    icon: "account_tree",
    color: "white",
    href: "/servicios#procesos",
    tag: "Procesos"
  },
  {
    id: "03",
    title: "Trazabilidad y evidencia",
    subtitle: "Gestión documental",
    description: "Organizo documentos, datos, versiones y fuentes para que las observaciones y decisiones puedan verificarse.",
    icon: "fact_check",
    color: "primary",
    href: "/servicios#evidencia",
    tag: "Evidencia"
  },
  {
    id: "04",
    title: "IA aplicada",
    subtitle: "Evaluación responsable",
    description: "Evalúo dónde la IA puede aportar valor, qué límites requiere y qué decisiones deben conservar control humano.",
    icon: "psychology",
    color: "white",
    href: "/servicios#ia",
    tag: "IA aplicada"
  }
];

export function ServicesGrid() {
  return (
    <section id="services" className="cv-auto py-32 px-6 md:px-16 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-20">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4">Áreas de trabajo</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground uppercase leading-[0.9]">
            Intervenciones <br />
            <span className="text-muted-foreground/40">con propósito.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {services.map((service, index) => (
            <a 
              key={service.id}
              href={service.href}
              className={`group relative flex flex-col justify-between p-10 min-h-[420px] glass-card rounded-[2.5rem] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 overflow-hidden ${
                index === 0 ? "md:col-span-8" : 
                index === 1 ? "md:col-span-4" :
                index === 2 ? "md:col-span-5" :
                "md:col-span-7"
              }`}
            >
              {/* Hover Glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className={`p-5 rounded-2xl ${service.color === "primary" ? "bg-primary/10 text-primary" : "bg-white/5 text-foreground"} group-hover:scale-110 transition-transform duration-500`}>
                    <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                  </div>
                  <span className="text-[9px] font-black text-muted-foreground/40 uppercase tracking-[0.3em]">{service.tag}</span>
                </div>

                <div className="mb-8">
                  <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">{service.subtitle}</div>
                  <h3 className="text-3xl font-black text-foreground uppercase tracking-tight leading-tight">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed font-medium max-w-md">
                  {service.description}
                </p>
              </div>

              <div className="relative z-10 mt-8 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
                Explorar área
                <MoveRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
