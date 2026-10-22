import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full max-w-5xl flex-col gap-20 px-4 py-8 text-slate-200 sm:gap-24 sm:px-6">

      {/* NAVBAR */}
      <nav className="flex w-full flex-col items-start gap-4 border-b border-slate-800/80 pb-4 font-mono text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-slate-100 font-bold tracking-wider">DANNA MICHELLE</span>
          <span className="text-slate-500 hidden sm:inline">| Full Stack & ICT Tech</span>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] sm:gap-6 sm:text-xs">
          <a href="#about" className="hover:text-purple-400 transition-colors">
            /sobre-mi
          </a>
          <a href="#projects" className="hover:text-purple-400 transition-colors">
            /proyectos
          </a>
          <a href="#skills" className="hover:text-purple-400 transition-colors">
            /habilidades
          </a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">
            /contacto
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="space-y-6 pt-4 text-left max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/50 text-purple-300 text-xs font-mono">
          <span>📍 Medellín, Colombia</span>
          <span>•</span>
          <span className="text-emerald-400">Disponible para proyectos</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
          Danna Michelle{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-indigo-500">
            Oyola Apache
          </span>
        </h1>

        <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-normal">
          Desarrolladora Full Stack &amp; Tecnóloga en Infraestructura TIC. Especializada en aplicaciones web dinámicas, servicios backend y arquitectura de bases de datos.
        </p>

        {/* TECH BADGES */}
        <div className="flex flex-wrap gap-2 pt-2">
          {[
            "Python",
            "JavaScript",
            "TypeScript",
            "HTML & CSS",
            "React",
            "Next.js",
            "React Native",
            "MySQL",
            "MongoDB",
            "Git / GitHub"
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-md bg-slate-900/90 border border-slate-800 text-xs font-mono text-purple-300 hover:border-purple-500/40 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </header>

      {/* ABOUT ME SECTION */}
      <section id="about" className="space-y-4 pt-4 border-t border-slate-800/60">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider">Sobre mí</h2>
        </div>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          Soy una desarrolladora Full Stack con sólida base técnica en Infraestructura TIC, enfocada en construir aplicaciones eficientes y escalables. Cuento con experiencia práctica desarrollando sistemas logísticos con gestión en tiempo real y aplicaciones web interactivas utilizando Next.js, TypeScript, PostgreSQL y servicios en la nube. Además, mi experiencia en soporte técnico corporativo me permite comprender a fondo la estabilidad de sistemas y la resolución de problemas técnicos.
        </p>
      </section>

      {/* REAL PROJECTS */}
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

      {/* LEARNING ROADMAP */}
      <section id="skills" className="min-w-0 space-y-6 border-t border-slate-800/60 pt-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-serif text-xl italic font-medium text-white sm:text-2xl">
            Ruta de Aprendizaje
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
              desc: "Estructuras de datos, POO, lógica algorítmica y proyectos de gestión de archivos.",
              href: "/python",
            },
            {
              mod: "Módulo 02",
              title: "HTML & CSS",
              desc: "Maquetación semántica, diseño adaptable (Responsive Design) y UI interactiva.",
              href: "/html-css",
            },
            {
              mod: "Módulo 03",
              title: "JavaScript",
              desc: "Manipulación del DOM, asincronía (Promises/Async-Await) y aplicaciones web dinámicas.",
              href: "/javascript",
            },
            {
              mod: "Módulo 04",
              title: "Bases de datos",
              desc: "Diseño relacional (SQL/PostgreSQL/MySQL), modelos NoSQL (MongoDB) y optimización.",
              href: "/database",
            },
            {
              mod: "Módulo 05",
              title: "TypeScript",
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
                <h3 className="mb-2 font-serif text-2xl italic font-medium text-slate-100 transition-colors group-hover:text-purple-300">
                  {item.title}
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

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs font-mono text-slate-400">
        <div>
          <p className="text-slate-200 font-bold text-sm">Danna Michelle Oyola Apache</p>
          <a href="mailto:danna2206mi@gmail.com" className="hover:text-purple-400 transition-colors">
            danna2206mi@gmail.com
          </a>
        </div>
        <div className="flex gap-6">
          <a
            href="https://github.com/Michelle22062005"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/danna-michelle-oyola/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            LinkedIn ↗
          </a>
        </div>
      </footer>

    </div>
  );
}