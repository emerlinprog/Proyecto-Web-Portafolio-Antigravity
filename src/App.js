import React from 'react';
import {
    BarChart3,
    BrainCircuit,
    Briefcase,
    GraduationCap,
    Layers,
    Linkedin,
    Mail,
    ShieldCheck,
    TrendingUp,
    Cpu
} from 'lucide-react';

const BentoCard = ({ title, children, className = '', icon: Icon }) => (
    <div className={`bg-[#161616] border border-white/10 rounded-3xl p-6 transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)] group ${className}`}>
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider">{title}</h3>
            {Icon && <Icon className="text-blue-500 w-5 h-5 group-hover:scale-110 transition-transform" />}
        </div>
        {children}
    </div>
);

function App() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-8 lg:p-12">
            <main className="max-w-7xl mx-auto">
                {/* Header/Hero Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-4">
                    <div className="md:col-span-3 lg:col-span-4 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 flex flex-col justify-end min-h-[400px]">
                        <span className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 w-fit">
                            Tercio Superior
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Orlando Linares</h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-2xl">
                            Administrador y Project Manager Internacional especializado en Estrategia de IA y Gestión Pública.
                        </p>
                    </div>

                    <BentoCard title="Educación" icon={GraduationCap} className="md:col-span-1 lg:col-span-2">
                        <div className="space-y-4">
                            <div>
                                <p className="font-bold text-lg">Florida Global University</p>
                                <p className="text-gray-400 text-sm">International Project Manager</p>
                            </div>
                            <div className="pt-2">
                                <p className="font-bold text-lg">Universidad Nacional de Ingeniería (UNI)</p>
                                <p className="text-gray-400 text-sm">Especialista en Six Sigma</p>
                            </div>
                        </div>
                    </BentoCard>
                </div>

                {/* Core Expertise Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <BentoCard title="IA en el Estado" icon={BrainCircuit} className="lg:col-span-2">
                        <div className="flex items-center gap-4 mb-4">
                            <Cpu className="w-12 h-12 text-blue-500" />
                            <div>
                                <p className="text-lg font-semibold">Transformación Digital</p>
                                <p className="text-gray-400 text-sm">Consultoría para la PCM en implementación de IA.</p>
                            </div>
                        </div>
                        <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-[95%]"></div>
                        </div>
                    </BentoCard>

                    <BentoCard title="Business Analytics" icon={BarChart3}>
                        <p className="text-3xl font-bold mb-2">R Suite</p>
                        <p className="text-gray-400">Análisis predictivo y visualización de datos complejos.</p>
                    </BentoCard>

                    <BentoCard title="Gestión Pública" icon={ShieldCheck}>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-sm">SIAF</span>
                            <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-sm">SIGA</span>
                        </div>
                        <p className="mt-4 text-gray-400 text-sm">Experto en sistemas administrativos del estado.</p>
                    </BentoCard>

                    <BentoCard title="Metodología" icon={Layers}>
                        <h4 className="font-bold text-xl mb-1">Six Sigma</h4>
                        <p className="text-gray-400 text-sm">Optimización de procesos y calidad operativa certificada por la UNI.</p>
                    </BentoCard>

                    <div className="md:col-span-2 lg:col-span-2 bg-[#161616] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-blue-500/50 transition-all">
                        <div>
                            <TrendingUp className="text-blue-500 w-10 h-10 mb-4" />
                            <h3 className="text-2xl font-bold mb-4">Visión Estratégica</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Combinando la rigurosidad administrativa con el poder de la Inteligencia Artificial para transformar organizaciones públicas y privadas.
                            </p>
                        </div>
                        <div className="flex gap-4 mt-8">
                            <button className="flex-1 bg-white text-black font-bold py-3 rounded-2xl hover:bg-blue-500 hover:text-white transition-colors flex items-center justify-center gap-2">
                                <Mail className="w-5 h-5" /> Contacto
                            </button>
                            <button className="p-3 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                                <Linkedin className="w-6 h-6 text-blue-400" />
                            </button>
                        </div>
                    </div>

                    <BentoCard title="Impacto" className="lg:col-span-1">
                        <div className="text-center py-6">
                            <p className="text-5xl font-extrabold text-blue-500">100%</p>
                            <p className="text-sm text-gray-400 mt-2 uppercase">Eficiencia en Gestión</p>
                        </div>
                    </BentoCard>
                </div>

                <footer className="mt-12 text-center text-gray-600 text-sm">
                    <p>© 2026 Orlando Linares Consulting. Todos los derechos reservados.</p>
                </footer>
            </main>
        </div>
    );
}

export default App;
