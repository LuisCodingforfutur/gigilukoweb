import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={isDark ? "dark" : "light"}>
      {/* Das hier repariert das Scrollen: Kein overflow-hidden mehr, das die Seite abwürgt! */}
      <div className="min-h-screen flex flex-col bg-white dark:bg-[#05000a] text-black dark:text-white transition-colors duration-500">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <main className="flex-grow w-full flex flex-col">{children}</main>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
