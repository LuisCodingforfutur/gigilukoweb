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
            await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
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
        <div className="bg-[#0c001c] text-white min-h-screen font-sans selection:bg-purple-500/30 overflow-x-hidden">
            {/* NOISE OVERLAY */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            {/* HERO */}
            <section className="relative pt-48 pb-32 px-4 flex flex-col items-center justify-center text-center">
                <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1400px] h-[800px] bg-purple-600/10 blur-[180px] rounded-full -z-10" />
                
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-10 border border-purple-500/30 bg-purple-500/10 backdrop-blur-xl rounded-full animate-fade-in">
                    <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-[0_0_10px_#a855f7]"></span>
                    <span className="text-[10px] font-black tracking-[0.3em] text-purple-300 uppercase">Stuttgart 2026</span>
                </div>

                <h1 className="text-7xl md:text-[160px] font-black mb-8 tracking-[0.05em] leading-[0.75] bg-gradient-to-b from-white via-white to-white/20 bg-clip-text text-transparent uppercase italic">
                    GIGI<br/>LUKO
                </h1>
                
                <p className="text-lg md:text-2xl text-purple-200/50 max-w-xl font-light leading-relaxed mb-12 tracking-wide">
                    Digitalizing the scene. <br />
                    <span className="text-white font-medium italic">The Operating System for Nightlife.</span>
                </p>
            </section>

            {/* 3 STEPS - CLEANER LOOK */}
            <section className="py-24 px-4 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                {[
                    { s: "01", t: "Entdecken", d: "FOMO Radar zeigt dir live, wo Stuttgart heute Nacht brennt." },
                    { s: "02", t: "Checken", d: "Echtzeit-Daten zu Crowd, Musik und Einlass direkt aufs Phone." },
                    { s: "03", t: "Erleben", d: "Nahtloser Vibe ohne Reibung. Das neue Level der Clubkultur." }
                ].map((step, i) => (
                    <div key={i} className="relative p-10 bg-white/[0.02] border border-white/5 rounded-[40px] transition-all duration-700 hover:bg-white/[0.05] hover:border-purple-500/30 group">
                        <div className="text-xs font-black text-purple-600 mb-8 tracking-[0.5em]">{step.s}</div>
                        <h3 className="text-2xl font-bold mb-4 italic tracking-tight">{step.t}</h3>
                        <p className="text-gray-500 leading-relaxed font-medium">{step.d}</p>
                    </div>
                ))}
            </section>

            {/* BENTO GRID - REFINED */}
            <section className="py-12 px-4 max-w-6xl mx-auto grid md:grid-cols-12 gap-6">
                <div className="md:col-span-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-16 rounded-[50px] relative overflow-hidden group hover:border-purple-500/20 transition-all duration-700">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/10 blur-[100px] group-hover:bg-purple-600/20 transition-all"></div>
                    <h2 className="text-5xl font-black mb-8 italic bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent uppercase tracking-tighter">FOMO Radar</h2>
                    <p className="text-gray-400 text-xl leading-relaxed max-w-md mb-10 font-light">
                        Kein Rätselraten mehr. Erlebe die Stadt durch Live-Daten und den exklusiven Community Feed.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {["Real-Time", "Live Vibe", "Spotlight"].map(t => (
                            <span key={t} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{t}</span>
                        ))}
                    </div>
                </div>
                <div className="md:col-span-4 bg-[#1a0033] border border-purple-500/20 p-12 rounded-[50px] flex flex-col justify-center items-center text-center group transition-all duration-700 hover:bg-purple-900/20">
                    <div className="w-20 h-20 bg-purple-500/10 rounded-full flex items-center justify-center mb-6 border border-purple-500/20 group-hover:scale-110 transition-transform">
                        <span className="text-3xl font-bold">✨</span>
                    </div>
                    <h3 className="text-2xl font-black italic uppercase tracking-tighter">The App</h3>
                    <p className="text-purple-400/60 mt-2 text-[10px] uppercase tracking-[0.3em] font-bold">Nutzer-Interface</p>
                </div>
            </section>

            {/* VENUE SECTION */}
            <section className="py-6 px-4 max-w-6xl mx-auto grid md:grid-cols-12 gap-6">
                <div className="md:col-span-4 bg-white/[0.02] border border-white/5 p-12 rounded-[50px] flex flex-col justify-center items-center text-center hover:border-pink-500/20 transition-all">
                    <h3 className="text-2xl font-black italic uppercase tracking-tighter">For Venues</h3>
                    <p className="text-gray-600 mt-2 text-[10px] uppercase tracking-[0.3em] font-bold underline decoration-pink-500">Professional OS</p>
                </div>
                <div className="md:col-span-8 bg-gradient-to-tr from-[#1a0033] to-[#0c001c] border border-purple-500/20 p-16 rounded-[50px] relative overflow-hidden group">
                    <h3 className="text-4xl font-black mb-8 text-white italic uppercase tracking-tighter">Push-Up <span className="text-pink-500">Marketing</span></h3>
                    <p className="text-gray-400 text-xl leading-relaxed mb-10 font-light">
                        Direkte Kommunikation mit deiner Crowd. Door-Management und Analytics in Echtzeit.
                    </p>
                    <div className="flex gap-4">
                        <div className="px-6 py-3 bg-white/5 rounded-2xl border border-white/10 text-[10px] font-black uppercase tracking-widest text-gray-500">Analytics</div>
                        <div className="px-6 py-3 bg-white/5 rounded-2xl border border-white/10 text-[10px] font-black uppercase tracking-widest text-gray-500">Door Control</div>
                    </div>
                </div>
            </section>

            {/* STUTTGART SHOWSTOPPER */}
            <section className="py-56 text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-pink-600/10 blur-[140px] -z-10" />
                <h2 className="text-8xl md:text-[200px] font-black tracking-[-0.05em] uppercase italic bg-gradient-to-b from-purple-400 to-transparent bg-clip-text text-transparent opacity-50">
                    Stuttgart
                </h2>
                <div className="mt-[-60px] md:mt-[-100px]">
                    <p className="text-white text-lg md:text-2xl font-black uppercase tracking-[1em] ml-[1em]">Early 2026</p>
                </div>
            </section>

            {/* FINAL WAITLIST */}
            <section id="waitlist" className="pb-60 px-4">
                <div className="max-w-xl mx-auto relative">
                    <div className="absolute inset-0 bg-purple-600/20 blur-[100px] -z-10"></div>
                    <div className="bg-[#0c001c]/80 backdrop-blur-3xl p-16 rounded-[60px] border border-white/10 text-center shadow-2xl">
                        <h2 className="text-4xl font-black mb-4 uppercase italic tracking-tight">Get Early Access</h2>
                        <p className="text-gray-500 mb-12 font-medium">Be the first to digitalize your night.</p>
                        <form onSubmit={handleWaitlist} className="flex flex-col gap-6">
                            <input 
                                type="email" 
                                placeholder="E-Mail Adresse" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 px-10 py-6 rounded-3xl focus:outline-none focus:border-purple-500/50 transition-all text-white text-center text-lg font-bold placeholder:text-gray-700"
                            />
                            <button 
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full bg-white text-[#0c001c] py-6 rounded-3xl font-black text-lg shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:scale-[1.03] active:scale-[0.98] transition-all uppercase tracking-[0.2em]"
                            >
                                {status === "loading" ? "Processing..." : "Join Now"}
                            </button>
                        </form>
                        {status === "success" && <p className="text-purple-400 font-black mt-8 animate-bounce uppercase tracking-widest text-sm">Welcome to GIGILUKO.</p>}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
