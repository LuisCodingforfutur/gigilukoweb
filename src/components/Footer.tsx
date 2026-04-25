import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => (
  <footer className="py-10 px-6 border-t border-white/5 text-center bg-[#05000a]">
    <div className="flex justify-center gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-600">
      <Link to="/impressum" className="hover:text-white">Impressum</Link>
      <Link to="/datenschutz" className="hover:text-white">Datenschutz</Link>
      <Link to="/agb" className="hover:text-white">AGB</Link>
    </div>
  </footer>
);
