import React from "react";
import { useLanguage } from "../components/Layout";

const Venues: React.FC = () => {
    const { lang } = useLanguage();
    
    const content = {
        de: {
            title: "Optimiere deinen Location-Betrieb.",
            desc: "GIGILUKO bietet das ultimative Betriebssystem für Bars, Clubs und Nightlife-Events. Maximiere deinen Umsatz und binde Kunden langfristig.",
            btn1: "Für Locations",
            btn2: "Demo anfordern",
            f1_t: "Umsatzwachstum",
            f1_d: "Nutze dynamische Preise, Vorverkauf und Analysen, um deinen Profit zu steigern.",
            f2_t: "Effizienter Einlass",
            f2_d: "Beschleunige den Einlass mit digitalen Tickets und Echtzeit-Statistiken am Eingang.",
            f3_t: "Direct Marketing",
            f3_d: "Aktiviere Gäste in Echtzeit mit gezielten Push-Benachrichtigungen und Kampagnen.",
            f4_t: "Live Analytics",
            f4_d: "Verstehe Besucherströme basierend auf anonymisierten Echtzeit-Daten für bessere Planung."
        },
        en: {
            title: "Optimize your Venue Operations.",
            desc: "GIGILUKO provides the ultimate operating system for bars, clubs, and nightlife events. Maximize revenue and build lasting customer loyalty.",
            btn1: "Get for Venue",
            btn2: "Demo Request",
            f1_t: "Revenue Growth",
            f1_d: "Implement dynamic pricing, pre-sales, and analyze customer spending to boost profits.",
            f2_t: "Streamlined Entries",
            f2_d: "Accelerate door operations with digital tickets and real-time entry statistics.",
            f3_t: "Direct Marketing",
            f3_d: "Activate guests in real-time with targeted push notifications and campaigns.",
            f4_t: "Live Analytics",
            f4_d: "Understand visitor flows based on anonymized real-time data for better planning."
        }
    };

    const t = content[lang];

    return (
        <div className="space-y-24">
            <div className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 p-12 md:p-20 rounded-[50px] text-left transition-colors duration-500 shadow-xl dark:shadow-none">
                <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                    <div className="flex-grow">
                        <h2 className="text-3xl md:text-5xl font-black mb-6 text-black dark:text-white uppercase italic">{t.title}</h2>
                        <p className="text-lg text-gray-700 dark:text-gray-400 font-light mb-12 max-w-2xl">{t.desc}</p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <button className="bg-purple-600 text-white dark:bg-white dark:text-black px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-sm">{t.btn1}</button>
                            <button className="bg-gray-100 dark:bg-white/10 text-black dark:text-white border border-black/10 dark:border-white/10 px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-sm">{t.btn2}</button>
                        </div>
                    </div>
                    <img src="/Venue.jpeg" alt="GIGILUKO Dashboard" className="w-full md:w-[450px] h-auto object-cover rounded-[30px] shadow-2xl border border-black/10 dark:border-white/10 flex-shrink-0" />
                </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
                {[ 
                    {i:"📊", t:t.f1_t, d:t.f1_d}, 
                    {i:"⚡", t:t.f2_t, d:t.f2_d},
                    {i:"🎯", t:t.f3_t, d:t.f3_d},
                    {i:"📈", t:t.f4_t, d:t.f4_d}
                ].map((f, i) => (
                    <div key={i} className="flex gap-6 items-start bg-gray-50 dark:bg-white/5 p-8 rounded-3xl border border-black/5 dark:border-white/10 transition-colors duration-500 hover:scale-[1.02]">
                        <div className="text-4xl">{f.i}</div>
                        <div>
                            <h4 className="text-xl font-bold mb-2 text-black dark:text-white">{f.t}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 font-light">{f.d}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Venues;
