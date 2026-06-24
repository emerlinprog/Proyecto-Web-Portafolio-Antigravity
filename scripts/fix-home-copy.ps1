$path = Join-Path $PSScriptRoot "..\\index.html"
$path = [System.IO.Path]::GetFullPath($path)
$text = [System.IO.File]::ReadAllText($path, [System.Text.UTF8Encoding]::new($false))

$heroPattern = '(?s)\s*<!-- Hero Content Wrapper -->.*?</div>\s*</div>\s*<!-- Visual Area / Technical Portrait -->'
$heroReplacement = @'

                    <!-- Hero Content Wrapper -->
                    <div class="grid xl:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.72fr)] gap-10 xl:gap-14 items-end mb-14">
                        <div class="min-w-0">
                            <!-- Hero H1 - balanced scale -->
                            <h1 class="text-hero reveal active uppercase char-reveal">
                                Transformo procesos <br>
                                <span class="text-[var(--accent-protocol)]">COMPLEJOS</span> en <br>
                                <span class="text-white/35">SISTEMAS.</span>
                            </h1>
                        </div>
                        
                        <div class="pb-3 xl:pb-6">
                            <div class="border-l-2 border-[var(--accent-protocol)] pl-6 md:pl-8 xl:pl-10 max-w-[28rem]">
                                <p class="body-lg italic leading-relaxed text-white/80">
                                    Business Analyst y consultor de procesos con 7 años en el sector público peruano y proyectos en México. Especializado en diagnóstico AS-IS, automatización con M365 e IA aplicada.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Metrics Grid (PRD 6.1) -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16 border-y border-white/5 py-12 stagger-reveal">
                        <div class="flex flex-col gap-2">
                            <span class="text-4xl font-black text-[var(--accent-protocol)] tracking-tighter">7+</span>
                            <span class="text-metadata opacity-40">AÑOS_SECTOR_PÚBLICO</span>
                        </div>
                        <div class="flex flex-col gap-2">
                            <span class="text-4xl font-black text-white tracking-tighter">2</span>
                            <span class="text-metadata opacity-40">PAÍSES (PE_MX)</span>
                        </div>
                        <div class="flex flex-col gap-2">
                            <span class="text-4xl font-black text-white tracking-tighter">200+</span>
                            <span class="text-metadata opacity-40">SOLICITUDES_GEST</span>
                        </div>
                        <div class="flex flex-col gap-2">
                            <span class="text-4xl font-black text-white tracking-tighter">12+</span>
                            <span class="text-metadata opacity-40">DIPLOMADOS_RECIENTES</span>
                        </div>
                    </div>

                    <!-- Tags -->
                    <div class="flex flex-wrap gap-3 mb-10 font-mono text-[9px] tracking-[0.3em] font-black text-[var(--accent-protocol)]">
                        <span class="border border-[var(--accent-protocol)]/30 px-3 py-1 uppercase">Transformación_Operativa</span>
                        <span class="border border-[var(--accent-protocol)]/30 px-3 py-1 uppercase">Automatización_Procesos</span>
                        <span class="border border-[var(--accent-protocol)]/30 px-3 py-1 uppercase">AI_Business_Analyst</span>
                    </div>

                    <!-- CTAs -->
                    <div class="flex flex-wrap gap-6 items-center">
                        <a href="discovery-wizard.html"
                           class="cta-standard cta-primary group relative px-10 py-6 overflow-hidden">
                            <span>INICIAR_DIAGNOSTICO</span>
                            <div class="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        </a>
                        <a href="#contacto"
                           class="cta-standard cta-secondary group px-10 py-6">
                            AGENDAR_CONSULTA
                        </a>
                    </div>

                    <div class="hero-card-grid mt-14 grid gap-4 reveal">
                        <a href="#servicios" class="group border border-white/10 bg-white/[0.02] p-4 transition-all duration-500 hover:border-[var(--accent-protocol)]/50 hover:bg-white/[0.04]">
                            <div class="mb-3 flex items-center justify-between">
                                <span class="text-metadata !tracking-[0.25em] !opacity-50">01</span>
                                <span class="material-symbols-outlined text-base text-white/20 group-hover:text-[var(--accent-protocol)] transition-colors">arrow_outward</span>
                            </div>
                            <div class="font-heading text-sm font-black uppercase tracking-[0.2em] text-white">Servicios</div>
                            <p class="mt-2 text-sm leading-relaxed text-white/45">Qué resuelvo, dónde intervengo y cómo genero eficiencia.</p>
                        </a>
                        <a href="#proyectos" class="group border border-white/10 bg-white/[0.02] p-4 transition-all duration-500 hover:border-[var(--accent-protocol)]/50 hover:bg-white/[0.04]">
                            <div class="mb-3 flex items-center justify-between">
                                <span class="text-metadata !tracking-[0.25em] !opacity-50">02</span>
                                <span class="material-symbols-outlined text-base text-white/20 group-hover:text-[var(--accent-protocol)] transition-colors">arrow_outward</span>
                            </div>
                            <div class="font-heading text-sm font-black uppercase tracking-[0.2em] text-white">Casos</div>
                            <p class="mt-2 text-sm leading-relaxed text-white/45">Evidencia concreta de impacto operativo en entornos reales.</p>
                        </a>
                        <a href="#metodologia" class="group border border-white/10 bg-white/[0.02] p-4 transition-all duration-500 hover:border-[var(--accent-protocol)]/50 hover:bg-white/[0.04]">
                            <div class="mb-3 flex items-center justify-between">
                                <span class="text-metadata !tracking-[0.25em] !opacity-50">03</span>
                                <span class="material-symbols-outlined text-base text-white/20 group-hover:text-[var(--accent-protocol)] transition-colors">arrow_outward</span>
                            </div>
                            <div class="font-heading text-sm font-black uppercase tracking-[0.2em] text-white">Método</div>
                            <p class="mt-2 text-sm leading-relaxed text-white/45">Frameworks, disciplina de ejecución y estándares que sostienen el trabajo.</p>
                        </a>
                        <a href="#ailab" class="group border border-white/10 bg-white/[0.02] p-4 transition-all duration-500 hover:border-[var(--accent-protocol)]/50 hover:bg-white/[0.04]">
                            <div class="mb-3 flex items-center justify-between">
                                <span class="text-metadata !tracking-[0.25em] !opacity-50">04</span>
                                <span class="material-symbols-outlined text-base text-white/20 group-hover:text-[var(--accent-protocol)] transition-colors">arrow_outward</span>
                            </div>
                            <div class="font-heading text-sm font-black uppercase tracking-[0.2em] text-white">AI Lab</div>
                            <p class="mt-2 text-sm leading-relaxed text-white/45">La capa de innovación aplicada para automatización y decisión asistida.</p>
                        </a>
                        <a href="#credenciales" class="group border border-white/10 bg-white/[0.02] p-4 transition-all duration-500 hover:border-[var(--accent-protocol)]/50 hover:bg-white/[0.04]">
                            <div class="mb-3 flex items-center justify-between">
                                <span class="text-metadata !tracking-[0.25em] !opacity-50">05</span>
                                <span class="material-symbols-outlined text-base text-white/20 group-hover:text-[var(--accent-protocol)] transition-colors">arrow_outward</span>
                            </div>
                            <div class="font-heading text-sm font-black uppercase tracking-[0.2em] text-white">Credenciales</div>
                            <p class="mt-2 text-sm leading-relaxed text-white/45">Respaldo académico y técnico para proyectos sensibles y complejos.</p>
                        </a>
                    </div>

                </div>

                <!-- Visual Area / Technical Portrait -->
'@

$text = [regex]::Replace($text, $heroPattern, $heroReplacement)

$text = $text.Replace('PROJECT_ARCHIVE', 'PROYECTOS')
$text = $text.Replace('AI_LOGIC', 'AI_LAB')

if ($text.Contains([char]0x00C3) -or $text.Contains([char]0x00C2)) {
    $bytes = [System.Text.Encoding]::GetEncoding(1252).GetBytes($text)
    $text = [System.Text.Encoding]::UTF8.GetString($bytes)
}

[System.IO.File]::WriteAllText($path, $text, [System.Text.UTF8Encoding]::new($false))
