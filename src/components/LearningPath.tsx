import Link from "next/link";


export default function LearningPath (){

    return(
        <section id="skills" className="min-w-0 space-y-6 border-t border-slate-800/60 pt-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2
            aria-label="Ruta de Aprendizaje"
            className="text-lg font-bold uppercase tracking-wider text-white"
          >
            𝑹𝒖𝒕𝒂 𝒅𝒆 𝑨𝒑𝒓𝒆𝒏𝒅𝒊𝒛𝒂𝒋𝒆
          </h2>
          <span className="text-xs text-slate-500">Desliza para explorar →</span>
        </div>

        <div
          className="learning-track"
          aria-label="Módulos de aprendizaje. Desliza horizontalmente para verlos todos."
        >
          {[
            {
              mod: "Módulo 01",
              title: "Python",
              fancyTitle: "𝑷𝒚𝒕𝒉𝒐𝒏",
              desc: "Estructuras de datos, POO, lógica algorítmica y proyectos de gestión de archivos.",
              href: "/python",
            },
            {
              mod: "Módulo 02",
              title: "HTML & CSS",
              fancyTitle: "𝑯𝑻𝑴𝑳 & 𝑪𝑺𝑺",
              desc: "Maquetación semántica, diseño adaptable (Responsive Design) y UI interactiva.",
              href: "/html-css",
            },
            {
              mod: "Módulo 03",
              title: "JavaScript",
              fancyTitle: "𝑱𝒂𝒗𝒂𝑺𝒄𝒓𝒊𝒑𝒕",
              desc: "Manipulación del DOM, asincronía (Promises/Async-Await) y aplicaciones web dinámicas.",
              href: "/javascript",
            },
            {
              mod: "Módulo 04",
              title: "Bases de datos",
              fancyTitle: "𝑩𝒂𝒔𝒆𝒔 𝒅𝒆 𝒅𝒂𝒕𝒐𝒔",
              desc: "Diseño relacional (SQL/PostgreSQL/MySQL), modelos NoSQL (MongoDB) y optimización.",
              href: "/database",
            },
            {
              mod: "Módulo 05",
              title: "TypeScript",
              fancyTitle: "𝑻𝒚𝒑𝒆𝑺𝒄𝒓𝒊𝒑𝒕",
              desc: "Desarrollo con tipado estático, interfaces, genéricos y patrones de arquitectura limpia.",
              href: "/typescript",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="learning-card group flex flex-col justify-between rounded-xl border border-purple-500/20 bg-slate-900/40 p-5 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:bg-slate-900/80 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase font-semibold block mb-1">
                  {item.mod}
                </span>
                <h3
                  aria-label={item.title}
                  className="mb-2 text-xl font-bold text-slate-100 transition-colors group-hover:text-purple-300"
                >
                  {item.fancyTitle}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="text-purple-400 font-mono text-sm pt-4 flex justify-end group-hover:translate-x-1 transition-transform">
                →
              </div>
            </Link>
          ))}
        </div>
      </section>
    )
}