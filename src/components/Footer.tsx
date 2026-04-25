import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full py-8 text-center text-gray-500 dark:text-gray-400 text-xs tracking-widest uppercase border-t border-black/5 dark:border-white/5 mt-auto transition-colors duration-500">
    &copy; {new Date().getFullYear()} GIGILUKO. All rights reserved.
  </footer>
);
export default Footer;
