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

    return (
        <div className="bg-[#0c001c] text-white min-h-screen font-sans selection:bg-purple-500/30">
            {/* HERO SECTION */}
            <section className="relative pt-40 pb-32 px-4 flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-purple-600/20 blur-[180px] rounded-full -z-10" />
                
                <div className="inline-block px-4 py-1.5 mb-8 border border-purple-500/20 bg-purple-500/5 backdrop-blur-md rounded-full text-xs font-bold tracking-[0.2em] text-purple-400 uppercase animate-fade-in">
                    Coming to Stuttgart 2026
                </div>

                <h1 className="text-6xl md:text-[130px] font-black mb-8 tracking-tighter leading-[0.8] bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent uppercase animate-gradient-x">
                    GIGILUKO
                </h1>
                
                <p className="text-lg md:text-2xl text-gray-400 max-w-2xl font-medium leading-relaxed mb-12">
                    The Operating System for Nightlife. <br />
                    <span className="text-purple-200/60 font-light">Digitalizing the scene, one beat at a time.</span>
                </p>
            </section>

            {/* 3 STEPS */}
            <section className="py-24 px-4 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { s: "01", t: "Entdecken", d: "FOMO Radar zeigt dir live, wo Stuttgart heute Nacht brennt." },
                        { s: "02", t: "Checken", d: "Echtzeit-Daten zu Crowd, Musik und Einlass direkt aufs Phone." },
                        { s: "03", t: "Erleben", d: "Nahtloser Vibe ohne Reibung. Das neue Level der Clubkultur." }
                    ].map((step, i) => (
                        <div key={i} className="group relative p-10 bg-white/5 border border-white/5 rounded-[32px] transition-all duration-500 hover:border-purple-500/40 hover:bg-white/[0.08]">
                            <div className="text-sm font-black text-purple-500 mb-6 tracking-widest">{step.s}</div>
                            <h3 className="text-2xl font-bold mb-4">{step.t}</h3>
                            <p className="text-gray-400 leading-relaxed">{step.d}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* BENTO GRID - USER & RADAR */}
            <section className="py-12 px-4 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-12 gap-6">
                    <div className="md:col-span-8 bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-12 rounded-[40px] min-h-[400px] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-3xl group-hover:bg-purple-600/20 transition-all" />
                        <h2 className="text-4xl font-bold mb-6 italic bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">FOMO Radar</h2>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-md mb-8">
                            Kein Rätselraten mehr. Sieh live die Crowd-Dichte und den Musik-Vibe deiner Stadt.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {["Live Updates", "Community Feed", "Spotlight", "Real-time"].map((t) => (
                                <span key={t} className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs font-bold text-purple-300 uppercase tracking-tighter">{t}</span>
                            ))}
                        </div>
                    </div>
                    <div className="md:col-span-4 bg-purple-600/10 border border-purple-500/20 p-12 rounded-[40px] flex flex-col justify-center text-center">
                        <div className="text-4xl mb-4">✨</div>
                        <h3 className="text-2xl font-bold">Für Nutzer</h3>
                        <p className="text-purple-300/60 mt-2 text-sm uppercase tracking-widest font-bold">The App</p>
                    </div>
                </div>
            </section>

            {/* BENTO GRID - VENUES & MARKETING */}
            <section className="py-6 px-4 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-12 gap-6">
                    <div className="md:col-span-4 bg-white/5 border border-white/10 p-12 rounded-[40px] flex flex-col justify-center text-center">
                        <div className="text-4xl mb-4">🏛️</div>
                        <h3 className="text-2xl font-bold italic">For Venues</h3>
                    </div>
                    <div className="md:col-span-8 bg-gradient-to-tr from-[#1a0033] to-[#0c001c] border border-purple-500/30 p-12 rounded-[40px] relative overflow-hidden group">
                        <h3 className="text-3xl font-bold mb-6 text-pink-500 italic">Push-Up Marketing</h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Sende exklusive Insights und Angebote direkt an die Zielgruppe. Door-Management und Analytics in einem Dashboard.
                        </p>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">📊</div>
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">📱</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* STUTTGART CALLOUT */}
            <section className="py-40 text-center relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-pink-600/10 blur-[120px] -z-10" />
                <h2 className="text-6xl md:text-[100px] font-black tracking-tighter uppercase italic bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Stuttgart
                </h2>
                <p className="text-purple-400 uppercase tracking-[0.8em] text-xs font-black mt-4">Launching Early 2026</p>
            </section>

            {/* MAILING LIST */}
            <section className="pb-40 px-4">
                <div className="max-w-2xl mx-auto bg-gradient-to-b from-purple-500/20 to-transparent p-[1px] rounded-[40px]">
                    <div className="bg-[#0c001c] p-16 rounded-[39px] text-center shadow-2xl">
                        <h2 className="text-3xl font-bold mb-4">Get Early Access</h2>
                        <p className="text-gray-400 mb-10">Join the exclusive waitlist for the launch in 2026.</p>
                        <form onSubmit={handleWaitlist} className="flex flex-col gap-4">
                            <input 
                                type="email" 
                                placeholder="Your Email" 
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
                        {status === "success" && <p className="text-purple-400 font-bold mt-6">Willkommen im Club 2026.</p>}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
