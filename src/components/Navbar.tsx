import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-8 md:px-12 backdrop-blur-md bg-[#05000a]/50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="group">
          <span className="text-xl md:text-2xl font-black italic tracking-tighter uppercase text-purple-600 group-hover:text-purple-400 transition-colors">
            GIGILUKO
          </span>
        </Link>
        
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
          <Link to="/users" className="hover:text-white transition-colors">Für Nutzer</Link>
          <Link to="/venues" className="hover:text-white transition-colors">Für Venues</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
