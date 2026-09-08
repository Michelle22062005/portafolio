import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center max-w-4xl mx-auto px-6 py-12 text-center">
      {/* HERO */}
      <section className="hero">
        <p className="hero-label">
          Desarrollo de software · Medellín, Colombia
        </p>
        <h1 className="hero-name">
          Danna <em>Michelle</em>
          <br />
          Oyola Apache
        </h1>
        <p className="text-sm tracking-widest text-neutral-400 uppercase text-center mt-2">
          Desarrolladora Full Stack · Web y bases de datos
        </p>
        <div className="hero-tags">
          <span className="tag">Python</span>
          <span className="tag">HTML &amp; CSS</span>
          <span className="tag">JavaScript</span>
          <span className="tag">TypeScript</span>
          <span className="tag">React</span>
          <span className="tag">Next.js</span>
          <span className="tag">React Native</span>
          <span className="tag">MySQL</span>
          <span className="tag">MongoDB</span>
          <span className="tag">Git / GitHub</span>
        </div>
      </section>

      <div className="divider"></div>

      <section className="about">
        <p className="section-title">Sobre mí</p>
        <p className="about-text">
          Soy una desarrolladora Full Stack con formación en Infraestructura TIC, especializada en construir aplicaciones web completas con HTML, CSS, TypeScript, React y Next.js en el frontend, y Node.js con PostgreSQL en el backend. He desarrollado proyectos reales en RIWI: una plataforma logística con autenticación y CRUD, y una app gamificada para competencias entre programadores. Con experiencia adicional en soporte técnico y entornos corporativos. Busco oportunidades en desarrollo web donde pueda aportar y seguir creciendo.
        </p>
      </section>

      {/* PROYECTOS REALES */}
      <section>
        <h3 className="section-title text-white">Proyectos reales</h3>
        <section className="flex gap-4">
          <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/80 transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] w-[300px]">
            <div className="relative aspect-video w-full bg-neutral-950 p-4 flex items-center justify-center border-b border-neutral-800">
              <img
                src="/img/trux.png"
                alt="Vista previa de Trux"
                className="rounded-lg shadow-2xl object-cover w-full h-full"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-neutral-100 mb-2">Trux</h3>
              <p className="text-sm text-neutral-400 mb-4 line-clamp-3">
                Sistema de gestión logística desarrollado con Next.js, React,
                Prisma y PostgreSQL para administrar envíos, conductores y
                operaciones de transporte.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1 rounded-md bg-cyan-950/50 px-2 py-1 text-xs font-medium text-cyan-400 border border-cyan-500/20">
                  React
                </span>
                <span className="inline-flex items-center gap-1 rounded-md bg-green-950/50 px-2 py-1 text-xs font-medium text-green-400 border border-green-500/20">
                  Next.js
                </span>
              </div>

              <div className="flex items-center justify-between border-t border-neutral-800 pt-4 text-sm font-medium">
                <a
                  href="https://trux-snowy.vercel.app/"
                  className="text-neutral-300 hover:text-purple-400 transition-colors inline-flex items-center gap-1"
                >
                  Ver aplicación ↗
                </a>
                <a
                  href="https://github.com/Michelle22062005/trux"
                  className="text-neutral-400 hover:text-neutral-200 transition-colors inline-flex items-center gap-1"
                >
                  Repositorio de GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* PORTFOLIO */}
      <section className="portfolio" id="portfolio">
        <h2 className="section-title text-white">Ruta de aprendizaje</h2>
        <div className="portfolio-cards">
          <Link
            href="/python"
            className="portfolio-card rounded-xl border border-purple-500/20 bg-neutral-900/50 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
          >
            <span className="text-xs tracking-widest text-purple-400 uppercase font-semibold block mb-1">
              Módulo 01
            </span>
            <h3 className="text-2xl font-serif text-neutral-200 mb-3">
              Python
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Ejercicios, estructuras de datos, programación orientada a objetos
              y proyectos de gestión de archivos.
            </p>
            <div className="card-arrow">→</div>
          </Link>

          <Link
            href="/html-css"
            className="portfolio-card rounded-xl border border-purple-500/20 bg-neutral-900/50 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
          >
            <span className="text-xs tracking-widest text-purple-400 uppercase font-semibold block mb-1">
              Módulo 02
            </span>
            <h3 className="text-2xl font-serif text-neutral-200 mb-3">
              HTML &amp; CSS
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Maquetación, marcado semántico, diseño adaptable y proyectos
              grupales.
            </p>
            <div className="card-arrow">→</div>
          </Link>

          <Link
            href="/javascript"
            className="portfolio-card rounded-xl border border-purple-500/20 bg-neutral-900/50 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
          >
            <span className="text-xs tracking-widest text-purple-400 uppercase font-semibold block mb-1">
              Módulo 03
            </span>
            <h3 className="text-2xl font-serif text-neutral-200 mb-3">
              JavaScript
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Manipulación del DOM, flujos asíncronos y gestores de tareas
              colaborativos.
            </p>
            <div className="card-arrow">→</div>
          </Link>

          <Link
            href="/database"
            className="portfolio-card rounded-xl border border-purple-500/20 bg-neutral-900/50 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
          >
            <span className="text-xs tracking-widest text-purple-400 uppercase font-semibold block mb-1">
              Módulo 04
            </span>
            <h3 className="text-2xl font-serif text-neutral-200 mb-3">
              Bases de datos
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Consultas SQL, arquitectura híbrida, MySQL y MongoDB.
            </p>
            <div className="card-arrow">→</div>
          </Link>
          <Link
            href="/typescript"
            className="portfolio-card rounded-xl border border-purple-500/20 bg-neutral-900/50 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
          >
            <span className="text-xs tracking-widest text-purple-400 uppercase font-semibold block mb-1">
              Módulo 05
            </span>
            <h3 className="text-2xl font-serif text-neutral-200 mb-3">
              TypeScript
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Desarrollo de JavaScript con tipado seguro y comprobación de
              tipos.
            </p>
            <div className="card-arrow">→</div>
          </Link>
        </div>
      </section>

      <section>
        <footer className="site-footer" id="contact">
          <div className="footer-left">
            <p className="footer-name">Danna Michelle Oyola Apache</p>
            <a href="mailto:danna2206mi@gmail.com" className="footer-email">
              danna2206mi@gmail.com
            </a>
          </div>
          <div className="footer-links">
            <a
              href="https://github.com/Michelle22062005"
              rel="noopener noreferrer"
              target="_blank"
              className="footer-link"
            >
              GitHub
            </a>
            <a
              href="mailto:danna2206mi@gmail.com"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Email
            </a>
            <a href="https://www.linkedin.com/in/danna-michelle-oyola/" rel="noopener noreferrer" className="footer-link">
              LinkedIn
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
}
