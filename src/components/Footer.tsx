import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => (
  <footer className="w-full py-8 border-t border-black/5 dark:border-white/5 mt-auto transition-colors duration-500 bg-white dark:bg-[#05000a]">
    <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-gray-500 dark:text-gray-400 text-xs tracking-widest uppercase">
        &copy; {new Date().getFullYear()} GIGILUKO. All rights reserved.
      </div>
      
      <div className="flex flex-wrap justify-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
        <Link to="/imprint" className="hover:text-purple-600 dark:hover:text-white transition-colors">Impressum</Link>
        <Link to="/privacy" className="hover:text-purple-600 dark:hover:text-white transition-colors">Datenschutz</Link>
        <Link to="/terms" className="hover:text-purple-600 dark:hover:text-white transition-colors">AGB</Link>
      </div>
    </div>
  </footer>
);
export default Footer;
