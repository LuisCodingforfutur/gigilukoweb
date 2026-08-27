import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "./Layout";
import { APP_STORE_URL } from "../config/app";

const footerContent = {
  de: {
    tagline: "Das Betriebssystem fürs Nachtleben. Wir digitalisieren das Nachtleben – weltweit.",
    product: "Produkt",
    download: "iOS App laden",
    venues: "Für Venues",
    ambassador: "Ambassador Program",
    pricing: "Preise",
    support: "Support",
    company: "Unternehmen",
    contact: "Kontakt",
    legal: "Rechtliches",
    privacy: "Datenschutz",
    terms: "Nutzungsbedingungen",
    guidelines: "Community Guidelines",
    impressum: "Impressum",
    dsa: "Digital Services Act (DSA)",
    rights: "Alle Rechte vorbehalten. Made with 🔥 for the Nightlife.",
  },
  en: {
    tagline: "The Operating System for Nightlife. We digitalize nightlife – worldwide.",
    product: "Product",
    download: "Get the iOS App",
    venues: "For Venues",
    ambassador: "Ambassador Program",
    pricing: "Pricing",
    support: "Support",
    company: "Company",
    contact: "Contact",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    guidelines: "Community Guidelines",
    impressum: "Imprint",
    dsa: "Digital Services Act (DSA)",
    rights: "All rights reserved. Made with 🔥 for the Nightlife.",
  },
};

const Footer: React.FC = () => {
  const { lang } = useLanguage();
  const t = footerContent[lang];
  const navigate = useNavigate();
  const location = useLocation();

  const legalLinks =
    lang === "de"
      ? [
          { to: "/privacy-de", label: t.privacy },
          { to: "/terms-de", label: t.terms },
          { to: "/community-guidelines-de", label: t.guidelines },
          { to: "/impressum", label: t.impressum },
          { to: "/dsa", label: t.dsa },
        ]
      : [
          { to: "/privacy", label: t.privacy },
          { to: "/terms", label: t.terms },
          { to: "/community-guidelines", label: t.guidelines },
          { to: "/impressum", label: t.impressum },
          { to: "/dsa", label: t.dsa },
        ];

  const goToVenues = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => document.getElementById("venues")?.scrollIntoView({ behavior: "smooth" }), 120);
    } else {
      document.getElementById("venues")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const linkClass = "hover:text-purple-600 dark:hover:text-purple-400 transition-colors";

  return (
    <footer className="bg-white dark:bg-[#05000a] text-black dark:text-white border-t border-gray-200 dark:border-purple-900/30 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">GIGILUKO</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">{t.tagline}</p>
            <a
              href="https://www.instagram.com/gigilukoo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-gray-500 dark:text-purple-400 hover:text-[#EC4899] dark:hover:text-[#EC4899] hover:border-[#EC4899]/30 hover:scale-110 transition-all"
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t.product}</h4>
            <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
              <li><a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>{t.download}</a></li>
              <li><button onClick={goToVenues} className={linkClass}>{t.venues}</button></li>
              <li><Link to="/pricing" className={linkClass}>{t.pricing}</Link></li>
              <li><Link to="/ambassador" className={linkClass}>{t.ambassador}</Link></li>
              <li><Link to="/support" className={linkClass}>{t.support}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t.company}</h4>
            <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
              <li><a href="mailto:support@gigiluko.com" className={linkClass}>{t.contact}</a></li>
            </ul>
          </div>

          {/* Legal (sprachbewusst) */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t.legal}</h4>
            <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
              {legalLinks.map((l) => (
                <li key={l.to}><Link to={l.to} className={linkClass}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-200 dark:border-purple-900/30 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} GIGILUKO. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
