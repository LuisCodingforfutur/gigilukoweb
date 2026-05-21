import React, { useState, createContext, useContext, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CookieBanner from "./CookieBanner";
import Lenis from "lenis";

// Sprach-Kontext erstellen
type Language = "en" | "de";
const LanguageContext = createContext<{ lang: Language; setLang: (l: Language) => void }>({ lang: "de", setLang: () => {} });
export const useLanguage = () => useContext(LanguageContext);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState<Language>("de");

  const toggleTheme = () => setIsDark(!isDark);

  // === HIGH-END MOTION: Lenis Smooth Scroll Setup ===
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-like smooth curve
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  // ===================================================

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className={isDark ? "dark" : "light"}>
        <div className="min-h-screen flex flex-col bg-white dark:bg-[#05000a] text-black dark:text-white transition-colors duration-500 overflow-x-hidden">
          <Navbar isDark={isDark} toggleTheme={toggleTheme} />
          
          <main className="flex-grow w-full flex flex-col">
            {children}
          </main>
          
          <Footer />
          
          {/* Das neue Cookie Banner */}
          <CookieBanner />
        </div>
      </div>
    </LanguageContext.Provider>
  );
};

export default Layout;
