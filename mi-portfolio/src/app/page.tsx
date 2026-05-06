import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center max-w-4xl mx-auto px-6 py-12 text-center">
      {/* HERO */}
      <section className="hero">
        <p className="hero-label">Software Development · Medellín, Colombia</p>
        <h1 className="hero-name">
          Danna <em>Michelle</em><br />Oyola Apache
        </h1>
        <p className="hero-sub">Student Developer · Web &amp; Databases</p>
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
        <h2 className="section-title">Selected work</h2>
        <div className="portfolio-grid">

          <Link href="/python" className="portfolio-card">
            <div className="card-module">Module 01</div>
            <div className="card-title">Python</div>
            <div className="card-desc">Exercises, data structures, OOP and file management projects.</div>
            <div className="card-arrow">→</div>
          </Link>

          <Link href="/html-css" className="portfolio-card">
            <div className="card-module">Module 02</div>
            <div className="card-title">HTML &amp; CSS</div>
            <div className="card-desc">Layouts, semantic markup, responsive design and group projects.</div>
            <div className="card-arrow">→</div>
          </Link>

          <Link href="/javascript" className="portfolio-card">
            <div className="card-module">Module 03</div>
            <div className="card-title">JavaScript</div>
            <div className="card-desc">DOM manipulation, async flows, collaborative task managers.</div>
            <div className="card-arrow">→</div>
          </Link>

          <Link href="/database" className="portfolio-card">
            <div className="card-module">Module 04</div>
            <div className="card-title">Databases</div>
            <div className="card-desc">SQL queries, hybrid architecture, MySQL &amp; MongoDB.</div>
            <div className="card-arrow">→</div>
          </Link>
          <Link href="/typescript" className="portfolio-card">
            <div className="card-module">Module 05</div>
            <div className="card-title">TypeScript</div>
            <div className="card-desc">Type-safe JavaScript development with strong typing.</div>
            <div className="card-arrow">→</div>
          </Link>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills">
        <p className="section-label">Skills</p>
        <div className="skills-list">
          <div className="skill-item"><span className="skill-dot"></span> Python</div>
          <div className="skill-item"><span className="skill-dot"></span> HTML</div>
          <div className="skill-item"><span className="skill-dot"></span> CSS</div>
          <div className="skill-item"><span className="skill-dot"></span> JavaScript</div>
          <div className="skill-item"><span className="skill-dot"></span> MySQL</div>
          <div className="skill-item"><span className="skill-dot"></span> MongoDB</div>
          <div className="skill-item"><span className="skill-dot"></span> Git / GitHub</div>
        </div>
      </section>
      <section>
        <footer className="site-footer" id="contact">
          <div className="footer-left">
            <p className="footer-name">Danna Michelle Oyola Apache</p>
            <a href="mailto:danna2206mi@gmail.com" className="footer-email">danna2206mi@gmail.com</a>
          </div>
          <div className="footer-links">
            <a href="https://github.com/Michelle22062005" rel="noopener noreferrer" target="_blank" className="footer-link">GitHub</a>
            <a href="mailto:danna2206mi@gmail.com" rel="noopener noreferrer" className="footer-link">Email</a>
            <a href="#" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          </div>
        </footer>
      </section>
    </div>
  );
}
