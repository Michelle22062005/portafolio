import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center max-w-4xl mx-auto px-6 py-12 text-center">
      {/* HERO */}
      <section className="hero">
        <p className="hero-label">Software Development · Medellín, Colombia</p>
        <h1 className="hero-name">
          Danna <em>Michelle</em>
          <br />
          Oyola Apache
        </h1>
        <p className="text-sm tracking-widest text-neutral-400 uppercase text-center mt-2">
          Developer Full stack · Web &amp; Databases
        </p>
        <div className="hero-tags">
          <span className="tag">Python</span>
          <span className="tag">HTML &amp; CSS</span>
          <span className="tag">JavaScript</span>
          <span className="tag">MySQL</span>
          <span className="tag">MongoDB</span>
          <span className="tag">Git / GitHub</span>
        </div>
      </section>

      <div className="divider"></div>

      {/* PORTFOLIO */}
      <section className="portfolio" id="portfolio">
        <p className="section-label">Portfolio</p>
        <h2 className="section-title text-white">Selected work</h2>
        <div className="flex gap-3 overflow-x-auto">
          <Link
            href="/python"
             className="flex flex-col  p-6 rounded-xl border border-purple-500/20 bg-neutral-900/50  backdrop-blur-sm transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
          >
            <span className="text-xs tracking-widest text-purple-400 uppercase font-semibold block mb-1">
              Module 01
            </span>
            <h3 className="text-2xl font-serif text-neutral-200 mb-3">
              Python
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Exercises, data structures, OOP and file management projects.
            </p>
            <div className="card-arrow">→</div>
          </Link>

          <Link
            href="/html-css"
            className="relative flex flex-col p-6 rounded-xl border border-purple-500/20 bg-neutral-900/50 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
          >
            <span className="text-xs tracking-widest text-purple-400 uppercase font-semibold block mb-1">
              Module 02
            </span>
            <h3 className="text-2xl font-serif text-neutral-200 mb-3">
              HTML &amp; CSS
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Layouts, semantic markup, responsive design and group projects.
            </p>
            <div className="card-arrow">→</div>
          </Link>

          <Link
            href="/javascript"
            className="relative flex flex-col p-6 rounded-xl border border-purple-500/20 bg-neutral-900/50  backdrop-blur-sm transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
          >
            <span className="text-xs tracking-widest text-purple-400 uppercase font-semibold block mb-1">
              Module 03
            </span>
            <h3 className="text-2xl font-serif text-neutral-200 mb-3">
              JavaScript
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              DOM manipulation, async flows, collaborative task managers.
            </p>
            <div className="card-arrow">→</div>
          </Link>

          <Link
            href="/database"
            className="relative flex flex-col p-6 rounded-xl border border-purple-500/20 bg-neutral-900/50 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
          >
            <span className="text-xs tracking-widest text-purple-400 uppercase font-semibold block mb-1">
              Module 04
            </span>
            <h3 className="text-2xl font-serif text-neutral-200 mb-3">
              Databases
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              SQL queries, hybrid architecture, MySQL &amp; MongoDB.
            </p>
            <div className="card-arrow">→</div>
          </Link>
          <Link
            href="/typescript"
            className="relative flex flex-col p-6 rounded-xl border border-purple-500/20 bg-neutral-900/50  backdrop-blur-sm transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
          >
            <span className="text-xs tracking-widest text-purple-400 uppercase font-semibold block mb-1">
              Module 05
            </span>
            <h3 className="text-2xl font-serif text-neutral-200 mb-3">
              TypeScript
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Type-safe JavaScript development with strong typing.
            </p>
            <div className="card-arrow">→</div>
          </Link>
        </div>
      </section>

      {/*PROJECT REALES*/}
      <section>
        <h3  className="section-title text-white">Project reales</h3>
      <section className="flex gap-4">
        <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/80 transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] w-[300px]">
        <div className="relative aspect-video w-full bg-neutral-950 p-4 flex items-center justify-center border-b border-neutral-800">
          <img
            src="/img/trux.png"
            alt="Preview"
            className="rounded-lg shadow-2xl object-cover w-full h-full"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-neutral-100 mb-2">
            Trux
          </h3>
          <p className="text-sm text-neutral-400 mb-4 line-clamp-3">
            Sistema de gestión logística desarrollado con Next.js, React, Prisma y PostgreSQL para administrar envíos, conductores y operaciones de transporte.
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
              View Live App ↗
            </a>
            <a
              href="https://github.com/Michelle22062005/trux"
              className="text-neutral-400 hover:text-neutral-200 transition-colors inline-flex items-center gap-1"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
      
      </section>
      </section>
      
      {/* SKILLS */}
      <section className="skills">
        <p className="section-label">Skills</p>
        <div className="skills-list">
          <div className="skill-item">
            <span className="skill-dot"></span> Python
          </div>
          <div className="skill-item">
            <span className="skill-dot"></span> HTML
          </div>
          <div className="skill-item">
            <span className="skill-dot"></span> CSS
          </div>
          <div className="skill-item">
            <span className="skill-dot"></span> JavaScript
          </div>
          <div className="skill-item">
            <span className="skill-dot"></span> MySQL
          </div>
          <div className="skill-item">
            <span className="skill-dot"></span> MongoDB
          </div>
          <div className="skill-item">
            <span className="skill-dot "></span> Git / GitHub
          </div>
          <div className="skill-item">
            <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-neutral-900 border border-neutral-800 text-neutral-300 transition-all hover:border-purple-500/50 hover:text-purple-300 cursor-pointer">
              TypeScript
            </span>
          </div>
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
            <a href="#" rel="noopener noreferrer" className="footer-link">
              LinkedIn
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
}
