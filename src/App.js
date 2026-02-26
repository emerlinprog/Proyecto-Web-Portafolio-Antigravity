import React, { useEffect } from 'react';
import {
    Compass,
    ShieldCheck,
    LayoutDashboard,
    Cpu,
    BarChart3,
    Workflow
} from 'lucide-react';

function App() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-node');
                }
            });
        }, { threshold: 0.15 });

        const revealElements = document.querySelectorAll('.bento-card-elite, section, footer');
        revealElements.forEach(el => observer.observe(el));

        return () => {
            revealElements.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <div className="selection:bg-accent selection:text-dark">
            <div className="mesh-bg"></div>

            {/* MAIN GRID CONTAINER */}
            <main className="relative z-10 w-full overflow-hidden">

                {/* HERO: CREATIVE COMPOSITION */}
                <section className="min-h-screen flex flex-col justify-center relative">
                    <div className="glass-layer -top-40 -left-40 bg-accent animate-float-soft"></div>

                    <div className="z-20">
                        <p className="p-small mb-12 opacity-0 animate-[reveal-up_1.2s_ease-out_forwards]">
                            Arquitecto de Negocios Élite
                        </p>
                        <h1 className="h-hero mb-20 opacity-0 animate-[reveal-up_1.2s_0.2s_ease-out_forwards]">
                            Orlando<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/10">Linares</span>
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 z-20 items-end">
                        <div className="lg:col-span-8 overflow-hidden">
                            <p className="p-main opacity-0 animate-[reveal-up_1.2s_0.4s_ease-out_forwards]">
                                Potenciando el valor corporativo mediante la orquestación táctica de <br />
                                <span className="text-white font-semibold italic underline decoration-accent/30 underline-offset-8">Inteligencia Artificial</span> y procesos de alto rendimiento.
                            </p>
                        </div>
                        <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-6 opacity-0 animate-[reveal-up_1.2s_0.6s_ease-out_forwards]">
                            <div className="text-[10px] font-black text-slate-600 uppercase tracking-[0.6em] border-r-2 border-accent pr-4 lg:text-right">
                                MIT Accredited <br /> Florida Global Univ <br /> UNI Excellence
                            </div>
                        </div>
                    </div>

                    {/* DECORATIVE SCROLL INDICATOR */}
                    <div className="absolute bottom-12 left-8 md:left-20 lg:left-32 animate-bounce opacity-20 hidden md:block">
                        <div className="w-[1px] h-20 bg-gradient-to-t from-accent to-transparent"></div>
                    </div>
                </section>

                {/* SOBRE MÍ: BALANCED PROPORTIONS */}
                <section className="relative">
                    <div className="glass-layer top-0 right-0 bg-accent animate-pulse-glow"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-start relative z-10">
                        <div className="lg:col-span-5 flex flex-col gap-8">
                            <span className="p-small">Trayectoria Ejecutiva</span>
                            <h2 className="h-section text-white lowercase">Estrategia. <br /> <span className="text-accent underline decoration-accent/10">Rigor</span>. Escala.</h2>
                        </div>
                        <div className="lg:col-span-7 flex flex-col gap-12 pt-12">
                            <p className="p-main text-slate-300">
                                Como líder en arquitectura organizacional, mi visión se fundamenta en la unión del rigor administrativo global y el potencial de las tecnologías exponenciales.
                            </p>
                            <p className="p-main">
                                Diseño ecosistemas de negocio donde la <span className="text-white font-medium">IA Generativa</span> no es un añadido, sino la base de una eficiencia operativa autónoma y escalable.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-8 py-12 border-y border-white/5">
                                <div className="group">
                                    <Compass className="w-10 h-10 text-accent mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" />
                                    <h4 className="text-xs font-black text-white uppercase tracking-widest mb-2">Visión Estratégica</h4>
                                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Arquitectura de Valor</p>
                                </div>
                                <div className="group">
                                    <ShieldCheck className="w-10 h-10 text-white opacity-40 mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500" />
                                    <h4 className="text-xs font-black text-white uppercase tracking-widest mb-2">Compromiso Ético</h4>
                                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Integridad SERVIR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AUTHORITY: CREATIVE BENTO */}
                <section>
                    <span className="p-small mb-12 block">Dominios de Autoridad</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12">
                        {/* CARD 01 */}
                        <div className="bento-card-elite group">
                            <div className="flex flex-col h-full gap-20">
                                <div className="flex justify-between items-start">
                                    <div className="p-6 bg-accent/5 rounded-3xl group-hover:bg-accent group-hover:text-dark transition-all duration-700">
                                        <LayoutDashboard className="w-8 h-8" />
                                    </div>
                                    <span className="text-[9px] font-black text-slate-700 uppercase tracking-[0.6em]">PMO Master</span>
                                </div>
                                <div>
                                    <h3 className="text-3xl lg:text-4xl font-extrabold text-white uppercase mb-6 tracking-tight">Management</h3>
                                    <p className="p-main text-base lg:text-lg mb-0 text-slate-400">Dirección estratégica bajo <strong>PMBOK 7ª</strong>. Control avanzado de recursos y viabilidad económica sistémica.</p>
                                </div>
                            </div>
                        </div>
                        {/* CARD 02 */}
                        <div className="bento-card-elite group lg:mt-12">
                            <div className="flex flex-col h-full gap-20">
                                <div className="flex justify-between items-start">
                                    <div className="p-6 bg-white/5 rounded-3xl group-hover:bg-white group-hover:text-dark transition-all duration-700">
                                        <Cpu className="w-8 h-8" />
                                    </div>
                                    <span className="text-[9px] font-black text-slate-700 uppercase tracking-[0.6em]">MIT Digital</span>
                                </div>
                                <div>
                                    <h3 className="text-3xl lg:text-4xl font-extrabold text-white uppercase mb-6 tracking-tight">Ecosistemas IA</h3>
                                    <p className="p-main text-base lg:text-lg mb-0 text-slate-400">Implementación de arquitecturas de agentes y flujos inteligentes para la escala organizacional autónoma.</p>
                                </div>
                            </div>
                        </div>
                        {/* CARD 03 */}
                        <div className="bento-card-elite group -mt-0 lg:-mt-12">
                            <div className="flex flex-col h-full gap-20">
                                <div className="flex justify-between items-start">
                                    <div className="p-6 bg-accent/5 rounded-3xl group-hover:bg-accent group-hover:text-dark transition-all duration-700">
                                        <BarChart3 className="w-8 h-8" />
                                    </div>
                                    <span className="text-[9px] font-black text-slate-700 uppercase tracking-[0.6em]">Analytics</span>
                                </div>
                                <div>
                                    <h3 className="text-3xl lg:text-4xl font-extrabold text-white uppercase mb-6 tracking-tight">Data Strategy</h3>
                                    <p className="p-main text-base lg:text-lg mb-0 text-slate-400">Decisiones basadas en evidencia mediante Power BI, Lenguaje DAX y modelamiento estadístico en R.</p>
                                </div>
                            </div>
                        </div>
                        {/* CARD 04 */}
                        <div className="bento-card-elite group">
                            <div className="flex flex-col h-full gap-20">
                                <div className="flex justify-between items-start">
                                    <div className="p-6 bg-white/5 rounded-3xl group-hover:bg-white group-hover:text-dark transition-all duration-700">
                                        <Workflow className="w-8 h-8" />
                                    </div>
                                    <span className="text-[9px] font-black text-slate-700 uppercase tracking-[0.6em]">BABOK V3</span>
                                </div>
                                <div>
                                    <h3 className="text-3xl lg:text-4xl font-extrabold text-white uppercase mb-6 tracking-tight">Business Arch</h3>
                                    <p className="p-main text-base lg:text-lg mb-0 text-slate-400">Diseño táctico de procesos corporativos y modelamiento BPMN bajo estándares internacionales.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SKILLS: MASONRY GRID LAYOUT */}
                <section>
                    <span className="p-small mb-12 block">Competencias & Stack</span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-24 lg:gap-20 mt-16 px-4">
                        <div className="relative group">
                            <h4 className="text-sm font-black text-white uppercase tracking-[0.5em] mb-12 flex items-center gap-4">
                                <span className="w-12 h-[1px] bg-accent"></span> Management
                            </h4>
                            <div className="flex flex-wrap gap-4">
                                <span className="chip-elite">PMBOK 7ª</span>
                                <span className="chip-elite">Scrum Agile</span>
                                <span className="chip-elite">MS Project</span>
                                <span className="chip-elite">SIAF - SIGA</span>
                                <span className="chip-elite">Logística RP</span>
                                <span className="chip-elite">SEACE 3.0</span>
                            </div>
                        </div>
                        <div className="relative group">
                            <h4 className="text-sm font-black text-white uppercase tracking-[0.5em] mb-12 flex items-center gap-4">
                                <span className="w-12 h-[1px] bg-white opacity-20"></span> Technology
                            </h4>
                            <div className="flex flex-wrap gap-4">
                                <span className="chip-elite">Python IA</span>
                                <span className="chip-elite">R-Studio</span>
                                <span className="chip-elite">Power BI Elite</span>
                                <span className="chip-elite">Prompt Eng</span>
                                <span className="chip-elite">SAP ERP</span>
                                <span className="chip-elite">Agentic IA</span>
                            </div>
                        </div>
                        <div className="relative group">
                            <h4 className="text-sm font-black text-white uppercase tracking-[0.5em] mb-12 flex items-center gap-4">
                                <span className="w-12 h-[1px] bg-accent"></span> Frameworks
                            </h4>
                            <div className="flex flex-wrap gap-4">
                                <span className="chip-elite">BABOK V3</span>
                                <span className="chip-elite">Bizagi BPMN</span>
                                <span className="chip-elite">Lean Sigma</span>
                                <span className="chip-elite">Gestión Pública</span>
                                <span className="chip-elite">Integridad</span>
                                <span className="chip-elite">Auditoría</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FOOTER: CREATIVE CLOSURE */}
                <footer className="pt-40 md:pt-60 overflow-hidden relative">
                    <div className="mesh-bg opacity-10 scale-150 -rotate-12"></div>
                    <div className="max-w-[1700px] mx-auto px-8 md:px-20 lg:px-32 flex flex-col items-center text-center gap-24 pb-40">
                        <div className="relative">
                            <span className="p-small block mb-12">Next Step</span>
                            <h2 className="h-hero mb-20">
                                Let's<br />
                                <span className="text-accent underline decoration-accent/10">Build</span>
                            </h2>
                            <p className="p-main max-w-2xl mx-auto italic mb-16">Estrategia operativa para la era inteligente.</p>
                            <button
                                onClick={() => window.location.href = 'mailto:contact@orlando.com'}
                                className="group relative px-20 lg:px-32 py-10 lg:py-14 bg-white text-dark rounded-full font-black text-sm lg:text-base uppercase tracking-[0.4em] overflow-hidden hover:scale-105 transition-all shadow-2xl"
                            >
                                <span className="relative z-10">Contactar Consultoría</span>
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-accent/20"></div>
                            </button>
                        </div>

                        <div className="w-full pt-32 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 text-[10px] font-black text-slate-800 uppercase tracking-[0.6em]">
                            <div className="flex items-center gap-8">
                                <p>Orlando Linares © 2026</p>
                                <div className="w-1 h-1 bg-slate-900 rounded-full"></div>
                                <p>Business Architect Elite</p>
                            </div>
                            <div className="flex gap-12">
                                <button
                                    onClick={() => window.open('https://linkedin.com', '_blank')}
                                    className="hover:text-accent transition-colors uppercase"
                                >
                                    LinkedIn
                                </button>
                                <span className="text-white/5 uppercase">BUILD V.11.0 CREATIVE</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}

export default App;
