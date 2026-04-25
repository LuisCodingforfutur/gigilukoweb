import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-gray-500 text-sm">
          © 2026 GIGILUKO. All rights reserved.
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <Link to="/impressum" className="text-gray-400 hover:text-purple-400 transition-colors">Impressum</Link>
          <Link to="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy (EN)</Link>
          <Link to="/privacy-de" className="text-gray-400 hover:text-purple-400 transition-colors">Datenschutz (DE)</Link>
          <Link to="/terms" className="text-gray-400 hover:text-purple-400 transition-colors">Terms (EN)</Link>
          <Link to="/terms-de" className="text-gray-400 hover:text-purple-400 transition-colors">AGB (DE)</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
