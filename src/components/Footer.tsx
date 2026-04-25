import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => (
  <footer className="py-20 px-6 border-t border-white/5 text-center bg-[#05000a] relative z-20">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-8">
        <Link to="/impressum" className="hover:text-purple-400 transition-colors">Impressum</Link>
        <Link to="/datenschutz" className="hover:text-purple-400 transition-colors">Datenschutz (DE)</Link>
        <Link to="/privacy-policy" className="hover:text-purple-400 transition-colors">Privacy Policy (ENG)</Link>
        <Link to="/agb" className="hover:text-purple-400 transition-colors">AGB / TOS</Link>
      </div>
      <p className="text-[9px] text-gray-700 uppercase tracking-widest">
        © 2026 GIGILUKO Technologies. All rights reserved. Confidential.
      </p>
    </div>
  </footer>
);
export default Footer;
