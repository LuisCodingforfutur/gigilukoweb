import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Home: React.FC = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleWaitlist = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !email.includes("@")) return;
        setStatus("loading");
        try {
            await addDoc(collection(db, "waitlist"), {
                email,
                timestamp: serverTimestamp(),
            });
            setStatus("success");
            setEmail("");
        } catch (error) {
            console.error("Error: ", error);
            setStatus("error");
        }
    };

    const userFeatures = [
        "FOMO Radar – Sieh live, wo der Vibe am besten ist",
        "Live Updates – Crowd-Dichte & Musikrichtung in Echtzeit",
        "Community Feed – Erlebe die Nacht durch die Augen anderer",
        "Spotlight – Entdecke exklusive Events in deiner Nähe"
    ];

    const venueFeatures = [
        "Push-Up Direct Marketing – Erreiche Gäste sofort",
        "Live Insights – Analysiere deine Crowd in Echtzeit",
        "Door Management – Effizienter Einlass ohne Stau",
        "Data Analytics – Verstehe deine Zielgruppe besser"
    ];

    return (
        <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-20 px-4 flex flex-col items-center text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-600/20 blur-[120px] rounded-full -z-10" />
                <h1 className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tighter bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent animate-gradient-x uppercase">
                    GIGILUKO
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
                    The Operating System for Nightlife. <br />
                    Digitalizing the scene.
                </p>
            </section>

            {/* 2. 3 SCHRITTE ZUR PERFEKTEN NACHT */}
            <section className="py-20 px-4 max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 italic">In 3 Schritten zur perfekten Nacht</h2>
                <div className="grid md:grid-cols-3 gap-12">
                    {[
                        { s: "01", t: "Entdecken", d: "Nutze den FOMO Radar, um den perfekten Spot für deinen Vibe zu finden." },
                        { s: "02", t: "Checken", d: "Erhalte Live-Updates zu Einlasszeiten und Crowd-Dichte." },
                        { s: "03", t: "Erleben", d: "Genieße die Nacht mit nahtlosem Zugang und exklusiven Insights." }
                    ].map((step, i) => (
                        <div key={i} className="relative p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl group hover:border-purple-500/50 transition-all">
                            <span className="text-6xl font-black text-white/5 absolute top-4 right-8 group-hover:text-purple-500/10 transition-colors">{step.s}</span>
                            <h3 className="text-2xl font-bold mb-4 text-purple-400">{step.t}</h3>
                            <p className="text-gray-400">{step.d}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. FÜR NUTZER & FOMO RADAR */}
            <section className="py-20 px-4 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Für Nutzer</h2>
                        <ul className="space-y-4">
                            {userFeatures.map((f, i) => (
                                <li key={i} className="flex items-center gap-3 text-lg text-gray-300">
                                    <span className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_8px_#a855f7]" />
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[40px] shadow-2xl">
                        <div className="w-12 h-12 bg-purple-600 rounded-2xl mb-6 flex items-center justify-center animate-pulse">
                            <div className="w-4 h-4 bg-white rounded-full" />
                        </div>
                        <h3 className="text-3xl font-bold mb-4 text-white">FOMO Radar</h3>
                        <p className="text-gray-400 text-lg">Kein Rätselraten mehr. Unser Radar zeigt dir in Echtzeit, wo die Energie am höchsten ist. Live-Daten von Gästen und Venues kombiniert in einem Dashboard.</p>
                    </div>
                </div>
            </section>

            {/* 4. FÜR VENUES & DIRECT MARKETING */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[40px]">
                        <h3 className="text-3xl font-bold mb-4 text-pink-500 italic">Push-Up Direct Marketing</h3>
                        <p className="text-gray-400 text-lg">Erreiche deine Zielgruppe genau dann, wenn sie bereit für den Ausgang ist. Sende exklusive Angebote und Updates direkt auf die Smartphones deiner Gäste.</p>
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">For Venues</h2>
                        <ul className="space-y-4">
                            {venueFeatures.map((f, i) => (
                                <li key={i} className="flex items-center gap-3 text-lg text-gray-300">
                                    <span className="w-2 h-2 bg-pink-500 rounded-full shadow-[0_0_8px_#ec4899]" />
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 5. STUTTGART LAUNCH */}
            <section className="py-32 text-center relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 blur-[140px] -z-10" />
                <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">Starting in <span className="text-purple-400">Stuttgart</span></h2>
                <p className="text-gray-500 uppercase tracking-[0.6em] text-sm font-black">Coming Early 2026</p>
            </section>

            {/* 6. MAILING LISTE (ENDE DER SEITE) */}
            <section className="py-24 px-4 bg-white/5 border-t border-white/10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Bereit für das nächste Level?</h2>
                    <form onSubmit={handleWaitlist} className="space-y-4">
                        <div className="relative">
                            <input 
                                type="email" 
                                placeholder="Deine E-Mail Adresse" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-black border border-white/20 px-8 py-5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all text-white"
                            />
                            <button 
                                type="submit"
                                disabled={status === "loading"}
                                className="mt-4 w-full bg-gradient-to-r from-purple-600 to-pink-600 py-5 rounded-2xl font-black text-white shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 uppercase tracking-widest"
                            >
                                {status === "loading" ? "Wird gesendet..." : "Join the Waitlist"}
                            </button>
                        </div>
                        {status === "success" && <p className="text-green-400 font-bold mt-4 animate-bounce">🔥 Du bist auf der Liste für 2026!</p>}
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Home;
