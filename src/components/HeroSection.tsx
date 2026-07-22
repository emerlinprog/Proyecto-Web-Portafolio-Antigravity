import React, { Suspense, useState, useEffect } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const SplineLoader = ({ fadeOut }: { fadeOut: boolean }) => (
  <div className={`absolute inset-0 flex items-center justify-center bg-[#0a0a0c] z-[5] pointer-events-none transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
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
  const [load3D, setLoad3D] = useState(false);

  // El hero 3D Spline (~4MB) solo se carga en desktop, en idle (tras el
  // render crítico) y nunca en conexiones lentas o con ahorro de datos.
  // En móvil/conexión pobre se usa solo el fondo CSS ligero.
  useEffect(() => {
    const conn = (navigator as any).connection;
    if (conn && (conn.saveData || /(^|-)2g/.test(conn.effectiveType || ""))) return;

    const mq = window.matchMedia("(min-width: 768px)");
    let idleId: any;
    const ric: any = (window as any).requestIdleCallback || ((cb: () => void) => setTimeout(cb, 1200));
    const cic: any = (window as any).cancelIdleCallback || clearTimeout;
    const schedule = () => { if (mq.matches) idleId = ric(() => setLoad3D(true)); };
    schedule();
    const onChange = () => { if (mq.matches) schedule(); };
    mq.addEventListener("change", onChange);
    return () => {
      mq.removeEventListener("change", onChange);
      if (idleId) cic(idleId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-end bg-hero-bg overflow-hidden">
      {/* Fondo base (único en móvil): gradiente ligero, sin descarga 3D */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(150,203,255,0.12),transparent_60%)]" />

      {load3D && (
        <>
          {/* Zero-Flash Spline Loader */}
          <SplineLoader fadeOut={isLoaded} />

          {/* Spline 3D Background — pointer-events-none para no capturar el scroll */}
          <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <Suspense fallback={null}>
              <Spline
                scene="https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode"
                className="w-full h-full pointer-events-none"
                onLoad={() => setIsLoaded(true)}
              />
            </Suspense>
          </div>
        </>
      )}

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
            Procesos · Evidencia · IA aplicada
          </div>

          {/* Heading */}
          <h1 
            className="text-[clamp(2rem,8vw,5rem)] font-black leading-[0.95] tracking-[-0.06em] text-foreground mb-4 md:mb-6 uppercase opacity-0 animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            Procesos claros, <br />
            <span className="text-primary">trazables y asistidos</span> <br />
            por IA.
          </h1>

          {/* Description */}
          <p 
            className="text-muted-foreground text-[clamp(0.875rem,2vw,1.125rem)] font-medium leading-relaxed max-w-2xl mb-8 md:mb-12 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            Soy Orlando Linares, consultor en arquitectura de procesos e IA aplicada. Ayudo a organizaciones públicas y PYMES a transformar trabajo administrativo complejo en sistemas sostenibles.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 font-black opacity-0 animate-fade-up"
            style={{ animationDelay: "0.65s" }}
          >
            <a 
              href="/discovery-wizard"
              className="pointer-events-auto bg-primary text-primary-foreground px-8 py-4 md:px-10 md:py-5 text-[10px] uppercase tracking-widest rounded-xl cursor-pointer hover:brightness-110 shadow-2xl shadow-primary/20 transition-all active:scale-[0.97] text-center"
            >
              Iniciar diagnóstico
            </a>
            <a 
              href="/enfoque"
              className="pointer-events-auto border border-white/10 bg-white/5 backdrop-blur-md text-foreground px-8 py-4 md:px-10 md:py-5 text-[10px] uppercase tracking-widest rounded-xl cursor-pointer hover:bg-white/10 transition-all flex items-center justify-center gap-2 active:scale-[0.97]"
            >
              <div className="inline-flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border border-current flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[3px] border-t-transparent border-l-[5px] border-l-current border-b-[3px] border-b-transparent ml-0.5" />
                </div>
                Conocer mi enfoque
              </div>
            </a>
          </div>

          {/* Principles Line */}
          <div 
            className="flex gap-8 mt-12 md:mt-16 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.85s" }}
          >
            <div>
              <div className="text-primary text-sm md:text-base font-black tracking-tight">PROCESO</div>
              <div className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold">Antes que herramienta</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <div className="text-foreground text-sm md:text-base font-black tracking-tight">EVIDENCIA</div>
              <div className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold">Trazabilidad visible</div>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <div className="hidden sm:block">
              <div className="text-foreground text-sm md:text-base font-black tracking-tight">ADOPCIÓN</div>
              <div className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold">Cambio sostenible</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
