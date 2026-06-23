import React, { Suspense, useState } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const SplineLoader = ({ fadeOut }: { fadeOut: boolean }) => (
  <div className={`absolute inset-0 flex items-center justify-center bg-[#0a0a0c] z-[5] transition-opacity duration-1000 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
    <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-4 p-8 opacity-20 pointer-events-none">
      <div className="h-full border border-primary/10 rounded-3xl bg-primary/5 animate-pulse" />
      <div className="h-full border border-primary/10 rounded-3xl bg-primary/5 animate-pulse hidden md:block" style={{ animationDelay: '0.2s' }} />
      <div className="h-full border border-primary/10 rounded-3xl bg-primary/5 animate-pulse hidden md:block" style={{ animationDelay: '0.4s' }} />
      <div className="h-full border border-primary/10 rounded-3xl bg-primary/5 animate-pulse" style={{ animationDelay: '0.6s' }} />
    </div>
    <div className="relative flex flex-col items-center">
      <div className="relative w-32 h-32 mb-8">
        <div className="absolute inset-0 border border-primary/20 rounded-full scale-125 animate-[ping_3s_infinite]" />
        <div className="absolute inset-0 border border-primary/10 rounded-full scale-150" />
        <div className="absolute inset-0 border-t-2 border-primary rounded-full animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_15px_#96cbff]" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-3">
          <span className="w-8 h-[1px] bg-primary/30" />
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.6em]">System Initializing</span>
          <span className="w-8 h-[1px] bg-primary/30" />
        </div>
        <p className="text-[8px] text-white/30 uppercase tracking-[0.4em] animate-pulse">Loading 3D Workspace Engine</p>
      </div>
    </div>
  </div>
);

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="relative min-h-screen flex items-end bg-hero-bg overflow-hidden">
      {/* Zero-Flash Spline Loader */}
      <SplineLoader fadeOut={isLoaded} />

      {/* Spline 3D Background */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Suspense fallback={null}>
          <Spline 
            scene="https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode"
            className="w-full h-full"
            onLoad={() => setIsLoaded(true)}
          />
        </Suspense>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 pointer-events-none w-full max-w-7xl mx-auto px-6 md:px-16 pb-16 md:pb-24 pt-32 h-full flex flex-col justify-end">
        <div className="flex flex-col max-w-3xl">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[9px] font-black uppercase tracking-[0.3em] text-primary mb-6 w-fit opacity-0 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Precision in Business Architecture
          </div>

          {/* Heading */}
          <h1 
            className="text-[clamp(2rem,8vw,5rem)] font-black leading-[0.95] tracking-[-0.06em] text-foreground mb-4 md:mb-6 uppercase opacity-0 animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            Arquitectura de negocios, <br />
            <span className="text-primary">procesos e IA aplicada</span> <br />
            para escalar.
          </h1>

          {/* Description */}
          <p 
            className="text-muted-foreground text-[clamp(0.875rem,2vw,1.125rem)] font-medium leading-relaxed max-w-2xl mb-8 md:mb-12 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            Transformamos organizaciones caóticas en sistemas precisos y automatizados. Dejamos atrás las soluciones temporales para construir cimientos escalables.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 font-black opacity-0 animate-fade-up"
            style={{ animationDelay: "0.65s" }}
          >
            <a 
              href="discovery-wizard.html"
              className="pointer-events-auto bg-primary text-primary-foreground px-8 py-4 md:px-10 md:py-5 text-[10px] uppercase tracking-widest rounded-xl cursor-pointer hover:brightness-110 shadow-2xl shadow-primary/20 transition-all active:scale-[0.97] text-center"
            >
              Diagnóstico Agéntico estratégico
            </a>
            <a 
              href="servicios.html#metodologia"
              className="pointer-events-auto border border-white/10 bg-white/5 backdrop-blur-md text-foreground px-8 py-4 md:px-10 md:py-5 text-[10px] uppercase tracking-widest rounded-xl cursor-pointer hover:bg-white/10 transition-all flex items-center justify-center gap-2 active:scale-[0.97]"
            >
              <div className="inline-flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border border-current flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[3px] border-t-transparent border-l-[5px] border-l-current border-b-[3px] border-b-transparent ml-0.5" />
                </div>
                Ver Metodología
              </div>
            </a>
          </div>

          {/* Stats Line */}
          <div 
            className="flex gap-8 mt-12 md:mt-16 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.85s" }}
          >
            <div>
              <div className="text-primary text-xl md:text-2xl font-black tracking-tighter">2-4</div>
              <div className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold">Semanas</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <div className="text-foreground text-xl md:text-2xl font-black tracking-tighter">100%</div>
              <div className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold">Enfoque en Datos</div>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <div className="hidden sm:block">
              <div className="text-foreground text-xl md:text-2xl font-black tracking-tighter">+15</div>
              <div className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold">Organizaciones</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
