import React from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    id: "01",
    title: "Análisis de procesos",
    icon: "strategy",
    description: "Comprensión del trabajo actual y diseño de una operación futura verificable.",
    skills: ["Alcance", "AS-IS", "TO-BE", "Actores", "Reglas", "Controles"],
    color: "from-primary/20 to-transparent"
  },
  {
    id: "02",
    title: "Análisis de negocio",
    icon: "code_blocks",
    description: "Conversión de necesidades operativas en decisiones y entregables accionables.",
    skills: ["Necesidades", "Requisitos", "Prioridades", "Criterios de aceptación", "Hoja de ruta"],
    color: "from-blue-500/20 to-transparent"
  },
  {
    id: "03",
    title: "IA aplicada",
    icon: "account_tree",
    description: "Evaluación de casos de uso con evidencia, límites y responsabilidad explícita.",
    skills: ["Casos de uso", "Evidencia", "Trazabilidad", "Control humano", "Adopción", "Mantenimiento"],
    color: "from-purple-500/20 to-transparent"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4
    }
  }
};

export function SkillsSection() {
  return (
    <section className="cv-auto py-40 px-6 relative overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col mb-24 items-center text-center"
        >
          <motion.span 
            variants={itemVariants}
            className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6 block"
          >
            Método profesional
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black tracking-tighter text-foreground uppercase leading-none"
          >
            Capacidades <br className="md:hidden" />
            <span className="text-muted-foreground/30">de trabajo.</span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-primary mt-8 rounded-full"
          />
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {skillGroups.map((group) => (
            <motion.div 
              key={group.title} 
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-b from-white/10 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative glass-card p-10 rounded-[2.5rem] h-full flex flex-col hover:bg-white/[0.04] transition-all duration-500 overflow-hidden">
                {/* ID Accent */}
                <div className="absolute top-8 right-10 text-[40px] font-black text-white/[0.03] select-none group-hover:text-primary/5 transition-colors">
                  {group.id}
                </div>

                {/* Card Glow */}
                <div className={`absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br ${group.color} blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:border-primary/40 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)]">
                    <span className="material-symbols-outlined text-primary text-3xl group-hover:animate-pulse">{group.icon}</span>
                  </div>
                  
                  <h4 className="text-2xl font-black text-foreground uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">
                    {group.title}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground font-medium mb-10 leading-relaxed max-w-[240px]">
                    {group.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {group.skills.map((skill, idx) => (
                      <motion.span 
                        key={skill}
                        variants={tagVariants}
                        custom={idx}
                        className="px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-[10px] font-bold text-muted-foreground hover:text-foreground hover:bg-primary/10 hover:border-primary/30 transition-all cursor-default relative overflow-hidden"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Scanning Effect line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-full group-hover:animate-scan" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
