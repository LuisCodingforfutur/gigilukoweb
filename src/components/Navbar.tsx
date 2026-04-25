import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-8 md:px-12 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="pointer-events-auto group flex items-center gap-2"
        >
          <span className="text-xl md:text-2xl font-black italic tracking-tighter uppercase bg-gradient-to-r from-white via-white to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-500">
            GIGILUKO
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
