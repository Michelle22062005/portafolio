import Image from "next/image";

export default function RealProject (){
     
    return(
        <section id="projects" className="space-y-6 pt-4 border-t border-slate-800/60">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider">Proyectos Reales</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* TRUX PROJECT CARD */}
          <div className="group rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] flex flex-col justify-between overflow-hidden">
            <div>
              <div className="relative aspect-video w-full border-b border-slate-800 bg-slate-950 overflow-hidden">
                <Image
                  src="/img/trux.png"
                  alt="Vista previa de Trux"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-lg object-cover p-3 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">Trux</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-800/60">Logística</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Sistema de gestión logística desarrollado para administrar envíos, conductores y operaciones de transporte en tiempo real.
                </p>

                <div className="flex flex-wrap gap-1.5">
                  <span className="rounded-md bg-cyan-950/40 px-2 py-0.5 text-xs font-mono text-cyan-400 border border-cyan-500/20">
                    React
                  </span>
                  <span className="rounded-md bg-emerald-950/40 px-2 py-0.5 text-xs font-mono text-emerald-400 border border-emerald-500/20">
                    Next.js
                  </span>
                  <span className="rounded-md bg-indigo-950/40 px-2 py-0.5 text-xs font-mono text-indigo-400 border border-indigo-500/20">
                    PostgreSQL
                  </span>
                  <span className="rounded-md bg-purple-950/40 px-2 py-0.5 text-xs font-mono text-purple-400 border border-purple-500/20">
                    Prisma
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-800/60 pt-4 mt-2 text-xs font-mono">
              <a
                href="https://trux-snowy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors font-semibold"
              >
                Ver aplicación ↗
              </a>
              <a
                href="https://github.com/Michelle22062005/trux"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-200 transition-colors"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </section>
    )
}