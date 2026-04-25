import React from "react";
import { Link } from "react-router-dom";

interface Props { isDark: boolean; toggleTheme: () => void; }

const Navbar: React.FC<Props> = ({ isDark, toggleTheme }) => (
  <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-8 md:px-12 pointer-events-auto">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <Link to="/" className="group pointer-events-auto">
        <div className="p-1 rounded-xl transition-all duration-500 bg-transparent dark:bg-white/5 border border-black/5 dark:border-white/10">
          <img 
            src={isDark ? "/logo-white.jpg" : "/logo-black.png"} 
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
        <div className="flex gap-6 text-[10px] font-black uppercase tracking-[0.2em] bg-white/80 dark:bg-[#05000a]/70 backdrop-blur-md px-6 py-3 rounded-full border border-black/5 dark:border-white/10 text-gray-400">
          <Link to="/users" className="hover:text-purple-600 dark:hover:text-white transition-colors">Users</Link>
          <Link to="/venues" className="hover:text-purple-600 dark:hover:text-white transition-colors">Venues</Link>
        </div>
      </div>
    </div>
  </nav>
);
export default Navbar;
