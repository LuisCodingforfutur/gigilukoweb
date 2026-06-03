import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "./Layout";

interface Props { isDark: boolean; toggleTheme: () => void; }

const Navbar: React.FC<Props> = ({ isDark, toggleTheme }) => {
  const { lang, setLang } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 pt-20 pb-8 md:pt-24 md:px-12 pointer-events-none">
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
        
        <div className="flex items-center gap-2 md:gap-4 pointer-events-auto">
          <a 
            href="https://www.instagram.com/gigilukoo/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-gray-500 dark:text-purple-400 hover:text-[#EC4899] dark:hover:text-[#EC4899] hover:border-[#EC4899]/30 hover:scale-110 transition-all"
            aria-label="Instagram"
          >
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          <button 
            onClick={() => setLang(lang === "de" ? "en" : "de")}
            className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-[10px] font-black uppercase tracking-widest text-gray-500 dark:text-purple-400 hover:scale-110 transition-all"
          >
            {lang === "de" ? "EN" : "DE"}
          </button>

          <button 
            onClick={toggleTheme} 
            className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-gray-500 dark:text-purple-400 hover:scale-110 transition-all"
          >
            <span className="text-sm md:text-base">{isDark ? "☀️" : "🌙"}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
