import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={isDark ? "dark" : "light"}>
      <div className="min-h-screen flex flex-col transition-colors duration-500 bg-white dark:bg-[#05000a] text-black dark:text-white">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
