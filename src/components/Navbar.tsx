
export default function NavbarHome (){
     return(
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
     )
}