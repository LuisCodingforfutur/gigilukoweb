import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "./Layout";

interface Props { isDark: boolean; toggleTheme: () => void; }

const Navbar: React.FC<Props> = ({ isDark, toggleTheme }) => {
  const { lang, setLang } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-8 md:px-12 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="group pointer-events-auto">
          <div className="transition-all duration-500 hover:scale-105">
            <img 
              src={isDark ? "/logo-black.jpg" : "/logo-white.jpg"} 
              alt="GIGILUKO" 
              className="h-8 md:h-10 w-auto rounded-lg" 
            />
          </div>
        </Link>
        
        <div className="flex items-center gap-4 pointer-events-auto">
          {/* Sprach-Umschalter */}
          <button 
            onClick={() => setLang(lang === "de" ? "en" : "de")}
            className="px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-[10px] font-black uppercase tracking-widest text-gray-500 dark:text-purple-400 hover:scale-110 transition-all"
          >
            {lang === "de" ? "EN" : "DE"}
          </button>

          <button 
            onClick={toggleTheme} 
            className="p-3 rounded-full bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-gray-500 dark:text-purple-400 hover:scale-110 transition-all"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
