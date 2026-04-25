import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-8 md:px-12 pointer-events-none">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <Link to="/" className="group pointer-events-auto">
        <div className="bg-white p-1 rounded-xl shadow-[0_0_15px_rgba(168,85,247,0.4)]">
          <img src="/logo.jpg" alt="GIGILUKO" className="h-8 md:h-10 w-auto rounded-lg" />
        </div>
      </Link>
      <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 pointer-events-auto bg-[#05000a]/70 backdrop-blur-md px-6 py-3 rounded-full border border-white/5">
        <Link to="/users" className="hover:text-white transition-colors">Für Nutzer</Link>
        <Link to="/venues" className="hover:text-white transition-colors">Für Venues</Link>
      </div>
    </div>
  </nav>
);
export default Navbar;
