import React from "react";
import { Link } from "react-router-dom";

interface Props { isDark: boolean; toggleTheme: () => void; }

const Navbar: React.FC<Props> = ({ isDark, toggleTheme }) => (
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
      
      <div className="flex items-center gap-6 pointer-events-auto">
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
export default Navbar;
