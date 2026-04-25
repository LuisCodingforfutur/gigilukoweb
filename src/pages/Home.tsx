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
            // 1. Mail senden über die Vercel API
            await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            // 2. In Firebase speichern
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

    return (
        <div className="bg-[#0c001c] text-white min-h-screen font-sans selection:bg-purple-500/30">
            {/* HERO SECTION */}
            <section className="relative pt-40 pb-32 px-4 flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-purple-600/20 blur-[180px] rounded-full -z-10" />
                <div className="inline-block px-4 py-1.5 mb-8 border border-purple-500/20 bg-purple-500/5 backdrop-blur-md rounded-full text-xs font-bold tracking-[0.2em] text-purple-400 uppercase">
                    Coming to Stuttgart 2026
                </div>
                <h1 className="text-6xl md:text-[130px] font-black mb-8 tracking-tighter leading-[0.8] bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent uppercase animate-gradient-x">
                    GIGILUKO
                </h1>
                <p className="text-lg md:text-2xl text-gray-400 max-w-2xl font-medium leading-relaxed mb-12 italic">
                    The Operating System for Nightlife.
                </p>
            </section>

            {/* 3 STEPS */}
            <section className="py-20 px-4 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                {[
                    { s: "01", t: "Entdecken", d: "FOMO Radar zeigt dir live, wo Stuttgart heute Nacht brennt." },
                    { s: "02", t: "Checken", d: "Echtzeit-Daten zu Crowd, Musik und Einlass direkt aufs Phone." },
                    { s: "03", t: "Erleben", d: "Nahtloser Vibe ohne Reibung. Das neue Level der Clubkultur." }
                ].map((step, i) => (
                    <div key={i} className="p-10 bg-white/5 border border-white/5 rounded-[32px] hover:border-purple-500/40 transition-all">
                        <div className="text-sm font-black text-purple-500 mb-6 tracking-widest">{step.s}</div>
                        <h3 className="text-2xl font-bold mb-4">{step.t}</h3>
                        <p className="text-gray-400 leading-relaxed">{step.d}</p>
                    </div>
                ))}
            </section>

            {/* FEATURES BENTO */}
            <section className="py-12 px-4 max-w-6xl mx-auto grid md:grid-cols-12 gap-6 text-left">
                <div className="md:col-span-8 bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-12 rounded-[40px]">
                    <h2 className="text-4xl font-bold mb-6 italic bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">FOMO Radar</h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">Live Crowd-Dichte & Musik-Vibe. Sieh die Nacht durch den Community Feed.</p>
                    <div className="flex flex-wrap gap-2">
                        {["Live Updates", "Community Feed", "Spotlight"].map(t => (
                            <span key={t} className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-[10px] font-bold text-purple-300 uppercase tracking-widest">{t}</span>
                        ))}
                    </div>
                </div>
                <div className="md:col-span-4 bg-[#1a0033] border border-purple-500/20 p-12 rounded-[40px] flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-2">Für Venues</h3>
                    <p className="text-gray-400 text-sm">Push-Up Marketing & Door Management.</p>
                </div>
            </section>

            {/* STUTTGART */}
            <section className="py-40 text-center relative">
                <h2 className="text-6xl md:text-[100px] font-black tracking-tighter uppercase italic bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Stuttgart
                </h2>
                <p className="text-purple-400 uppercase tracking-[0.8em] text-xs font-black mt-4 animate-pulse">Launching Early 2026</p>
            </section>

            {/* MAILING LIST SECTION */}
            <section id="waitlist" className="pb-40 px-4">
                <div className="max-w-2xl mx-auto bg-gradient-to-b from-purple-500/20 to-transparent p-[1px] rounded-[40px]">
                    <div className="bg-[#0c001c] p-16 rounded-[39px] text-center">
                        <h2 className="text-3xl font-bold mb-4">Get Early Access</h2>
                        <p className="text-gray-400 mb-10">Join the exclusive waitlist for 2026.</p>
                        <form onSubmit={handleWaitlist} className="flex flex-col gap-4">
                            <input 
                                type="email" 
                                placeholder="Your Email Address" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 px-8 py-5 rounded-2xl focus:outline-none focus:border-purple-500/50 transition-all text-white text-center font-bold"
                            />
                            <button 
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-5 rounded-2xl font-black text-white shadow-[0_10px_40px_rgba(168,85,247,0.3)] hover:scale-[1.02] transition-all uppercase tracking-[0.2em]"
                            >
                                {status === "loading" ? "..." : "Join the Waitlist"}
                            </button>
                        </form>
                        {status === "success" && <p className="text-purple-400 font-bold mt-6 animate-bounce">Welcome to the Club 2026. Check your Mail!</p>}
                        {status === "error" && <p className="text-red-400 mt-4 text-sm">Fehler beim Senden. Versuchs nochmal!</p>}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
