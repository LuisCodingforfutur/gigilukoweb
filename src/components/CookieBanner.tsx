import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "./Layout";

const CookieBanner: React.FC = () => {
    const { lang } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Prüfen, ob der User schon zugestimmt hat
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = (type: "all" | "essential") => {
        localStorage.setItem("cookieConsent", type);
        setIsVisible(false);
        // Hier könnten später Analytics/Pixel aktiviert werden, wenn "all" gewählt wird
    };

    if (!isVisible) return null;

    const t = {
        de: {
            title: "Wir nutzen Cookies 🍪",
            text: "Wir verwenden Cookies, um dein Erlebnis auf GIGILUKO zu verbessern und unsere Website zu optimieren. Mehr Infos in unserer ",
            linkText: "Datenschutzerklärung",
            link: "/privacy-de",
            acceptAll: "Alle akzeptieren",
            essential: "Nur Notwendige"
        },
        en: {
            title: "We use cookies 🍪",
            text: "We use cookies to improve your experience on GIGILUKO and optimize our website. Learn more in our ",
            linkText: "Privacy Policy",
            link: "/privacy",
            acceptAll: "Accept All",
            essential: "Essential Only"
        }
    }[lang];

    return (
        <div className="fixed bottom-0 left-0 w-full z-[999] p-4 md:p-6 pointer-events-none">
            <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-[#0a0510] border border-black/10 dark:border-white/10 p-6 md:p-8 rounded-[30px] shadow-2xl pointer-events-auto flex flex-col md:flex-row items-center justify-between gap-6 transition-colors duration-500 backdrop-blur-md">
                <div className="text-left flex-grow">
                    <h3 className="text-lg font-bold text-black dark:text-white mb-2">{t.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
                        {t.text} 
                        <Link to={t.link} className="text-purple-600 hover:underline font-bold">
                            {t.linkText}
                        </Link>.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                    <button 
                        onClick={() => handleAccept("essential")} 
                        className="px-6 py-3 rounded-2xl border border-black/10 dark:border-white/10 text-black dark:text-white text-[10px] md:text-xs font-black uppercase tracking-widest hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                    >
                        {t.essential}
                    </button>
                    <button 
                        onClick={() => handleAccept("all")} 
                        className="px-6 py-3 rounded-2xl bg-purple-600 text-white dark:bg-white dark:text-black text-[10px] md:text-xs font-black uppercase tracking-widest hover:opacity-90 transition-all shadow-lg"
                    >
                        {t.acceptAll}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
