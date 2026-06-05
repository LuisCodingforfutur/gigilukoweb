import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "./Layout";

interface Props { isDark: boolean; toggleTheme: () => void; }

const navContent = {
  de: { venues: "Für Venues", ambassador: "Ambassador", support: "Support" },
  en: { venues: "For Venues", ambassador: "Ambassador", support: "Support" },
};

const Navbar: React.FC<Props> = ({ isDark, toggleTheme }) => {
  const { lang, setLang } = useLanguage();
  const t = navContent[lang];
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goToVenues = () => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => document.getElementById("venues")?.scrollIntoView({ behavior: "smooth" }), 120);
    } else {
      document.getElementById("venues")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const linkClass = "text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-[#EC4899] dark:hover:text-[#EC4899] transition-colors";
  const iconClass = "w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:scale-110 transition-all";

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 pt-20 pb-8 md:pt-24 md:px-12 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="group pointer-events-auto" onClick={() => setMenuOpen(false)}>
          <div className="transition-all duration-500 hover:scale-105">
            <img src={isDark ? "/logo-black.jpg" : "/logo-white.jpg"} alt="GIGILUKO" className="h-8 md:h-10 w-auto rounded-lg" />
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8 pointer-events-auto">
          <button onClick={goToVenues} className={linkClass}>{t.venues}</button>
          <Link to="/ambassador" className={linkClass}>{t.ambassador}</Link>
          <Link to="/support" className={linkClass}>{t.support}</Link>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2 md:gap-4 pointer-events-auto">
          <a href="https://www.instagram.com/gigilukoo/" target="_blank" rel="noopener noreferrer" className={`${iconClass} text-gray-500 dark:text-purple-400 hover:text-[#EC4899] dark:hover:text-[#EC4899] hover:border-[#EC4899]/30`} aria-label="Instagram">
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          <button onClick={() => setLang(lang === "de" ? "en" : "de")} className={`${iconClass} text-[10px] font-black uppercase tracking-widest text-gray-500 dark:text-purple-400`}>
            {lang === "de" ? "EN" : "DE"}
          </button>

          <button onClick={toggleTheme} className={`${iconClass} text-gray-500 dark:text-purple-400`}>
            <span className="text-sm md:text-base">{isDark ? "☀️" : "🌙"}</span>
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)} className={`${iconClass} md:hidden text-gray-700 dark:text-white`} aria-label="Menu">
            <span className="text-lg leading-none">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden pointer-events-auto mt-4 max-w-7xl mx-auto">
          <div className="bg-white/90 dark:bg-[#0a0014]/95 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl p-3 flex flex-col gap-1 shadow-2xl">
            <button onClick={goToVenues} className="text-left px-4 py-3 rounded-xl font-semibold text-gray-800 dark:text-gray-100 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">{t.venues}</button>
            <Link to="/ambassador" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-xl font-semibold text-gray-800 dark:text-gray-100 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">{t.ambassador}</Link>
            <Link to="/support" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-xl font-semibold text-gray-800 dark:text-gray-100 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">{t.support}</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
