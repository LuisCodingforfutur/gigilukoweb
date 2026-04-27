import React from "react";
import { useLanguage } from "../components/Layout";

const Users: React.FC = () => {
    const { lang } = useLanguage();
    
    const content = {
        de: {
            title: "Digitalisiere dein Nightlife-Erlebnis.",
            desc: "GIGILUKO hilft dir, die besten Locations zu entdecken, deinen Einlass zu verwalten und dich mit Freunden zu vernetzen – alles in einer App.",
            btn1: "App Herunterladen",
            btn2: "Mehr Erfahren",
            f1_t: "Locations entdecken",
            f1_d: "Finde Bars, Clubs und Lounges. Checke Line-ups, Preise und Updates in Echtzeit.",
            f2_t: "Einfacher Einlass",
            f2_d: "Kein Anstehen mehr mit digitalen Tickets. Dein Profil ist deine Eintrittskarte.",
            f3_t: "Vernetzen & Teilen",
            f3_d: "Sieh, wo deine Freunde sind, teile Pläne und mache jede Nacht zum Event."
        },
        en: {
            title: "Digitalizing your Nightlife Experience.",
            desc: "GIGILUKO helps you discover the best venues, manage your entries, and connect with your friends – all in one powerful app.",
            btn1: "Download App",
            btn2: "Learn More",
            f1_t: "Discover Venues",
            f1_d: "Find bars, clubs, and lounges. Check lineups, entry fees, and real-time updates.",
            f2_t: "Easy Entries",
            f2_d: "Skip the line with digital tickets. Your profile is your entry card.",
            f3_t: "Connect & Share",
            f3_d: "See where your friends are going, share plans, and make every night an event."
        }
    };

    const t = content[lang];

    return (
        <div className="space-y-24">
            <div className="bg-gray-50 dark:bg-black/50 backdrop-blur-sm border border-black/5 dark:border-white/10 p-12 md:p-20 rounded-[50px] text-left transition-colors duration-500">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-grow">
                        <h2 className="text-3xl md:text-5xl font-black mb-6 text-black dark:text-white uppercase italic">{t.title}</h2>
                        <p className="text-lg text-gray-700 dark:text-gray-400 font-light mb-12 max-w-2xl">{t.desc}</p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <button className="bg-purple-600 text-white dark:bg-white dark:text-black px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-sm">{t.btn1}</button>
                            <button className="bg-white/10 text-black dark:text-white border border-black/10 dark:border-white/10 px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-sm">{t.btn2}</button>
                        </div>
                    </div>
                    <div className="w-full md:w-[300px] h-[550px] bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-3xl flex items-center justify-center text-gray-400 shadow-inner">Screenshot</div>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {[ {i:"🔍", t:t.f1_t, d:t.f1_d}, {i:"🎟️", t:t.f2_t, d:t.f2_d}, {i:"🥂", t:t.f3_t, d:t.f3_d} ].map((f, i) => (
                    <div key={i} className="bg-white dark:bg-white/5 p-8 rounded-3xl border border-black/5 dark:border-white/10">
                        <div className="text-3xl mb-6">{f.i}</div>
                        <h4 className="text-xl font-bold mb-3 text-black dark:text-white">{f.t}</h4>
                        <p className="text-gray-600 dark:text-gray-400 font-light text-sm">{f.d}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Users;
