import AboutMe from "../components/AboutMe";
import LearningPath from "../components/LearningPath";
import NavbarHome from "../components/Navbar";
import RealProject from "../components/RealProjects";

export default function Home() {
  return (
    <div className="home-page flex min-h-screen flex-col gap-20 text-slate-200 sm:gap-24">

      {/* NAVBAR */}
      <NavbarHome/>

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
      <AboutMe/>

      {/* REAL PROJECTS */}
      <RealProject/>

      {/* LEARNING ROADMAP */}
      <LearningPath/>

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