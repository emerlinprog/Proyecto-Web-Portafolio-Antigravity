import React from "react";
import { motion } from "framer-motion";

const tools = [
  "Python", "SAP ERP", "Power BI", "AWS", "Framer", "Notion", "BPMN 2.0", "BABOK"
];

export function TrustBar() {
  return (
    <div className="py-12 border-y border-white/5 bg-background/50 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/50 whitespace-nowrap">
            Stack Tecnológico & Estándares:
          </span>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 grayscale opacity-40">
            {tools.map((tool) => (
              <span 
                key={tool} 
                className="text-sm font-black tracking-tighter text-foreground hover:opacity-100 hover:grayscale-0 transition-all cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
