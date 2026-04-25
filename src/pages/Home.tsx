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
        <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-purple-500/30">
            {/* HERO SECTION - MASSIVE TYPOGRAPHY */}
            <section className="relative pt-40 pb-32 px-4 flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-600/20 blur-[160px] rounded-full -z-10" />
                
                <div className="inline-block px-4 py-1.5 mb-8 border border-white/10 bg-white/5 backdrop-blur-md rounded-full text-xs font-bold tracking-[0.2em] text-purple-400 uppercase animate-fade-in">
                    Coming to Stuttgart 2026
                </div>

                <h1 className="text-6xl md:text-[120px] font-black mb-8 tracking-tighter leading-[0.85] bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent uppercase animate-gradient-x">
                    GIGILUKO
                </h1>
                
                <p className="text-lg md:text-2xl text-gray-400 max-w-2xl font-medium leading-relaxed mb-12">
                    The Nightlife Operating System. <br />
                    <span className="text-white/80">Digitalizing every beat, every entry, every vibe.</span>
                </p>
            </section>

            {/* 3 STEPS - VISUAL JOURNEY */}
            <section className="py-24 px-4 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { s: "01", t: "Entdecken", d: "FOMO Radar zeigt dir live, wo Stuttgart heute Nacht brennt.", glow: "group-hover:shadow-purple-500/20" },
                        { s: "02", t: "Checken", d: "Echtzeit-Daten zu Crowd, Musik und Einlass direkt aufs Phone.", glow: "group-hover:shadow-pink-500/20" },
                        { s: "03", t: "Erleben", d: "Nahtloser Vibe ohne Reibung. Das neue Level der Clubkultur.", glow: "group-hover:shadow-blue-500/20" }
                    ].map((step, i) => (
                        <div key={i} className={`group relative p-10 bg-gradient-to-b from-white/[0.08] to-transparent border border-white/10 rounded-[32px] transition-all duration-500 hover:scale-[1.02] hover:border-white/20 ${step.glow} hover:shadow-2xl`}>
                            <div className="text-sm font-black text-purple-500 mb-6 tracking-widest">{step.s}</div>
                            <h3 className="text-2xl font-bold mb-4">{step.t}</h3>
                            <p className="text-gray-400 leading-relaxed font-medium">{step.d}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* BENTO FEATURE SECTION - USER & RADAR */}
            <section className="py-24 px-4 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-12 gap-6">
                    <div className="md:col-span-7 bg-white/5 border border-white/10 p-12 rounded-[40px] flex flex-col justify-end min-h-[400px] group hover:bg-white/[0.07] transition-all">
                        <div className="mb-auto">
                            <div className="w-12 h-1 bg-purple-500 mb-6" />
                            <h2 className="text-4xl font-bold mb-6 italic">FOMO Radar</h2>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                                Live-Insights zur Crowd-Dichte und Musikrichtung. Sieh die Nacht durch die Augen anderer mit dem Community Feed.
                            </p>
                        </div>
                        <ul className="mt-8 grid grid-cols-2 gap-4 text-sm font-bold text-gray-300">
                            <li className="flex items-center gap-2"> <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> Live Updates</li>
                            <li className="flex items-center gap-2"> <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> Community Feed</li>
                            <li className="flex items-center gap-2"> <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> Spotlight Events</li>
                            <li className="flex items-center gap-2"> <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> Crowd Sensing</li>
                        </ul>
                    </div>
                    <div className="md:col-span-5 bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-white/10 p-12 rounded-[40px] flex flex-col justify-center items-center text-center">
                        <div className="text-5xl mb-6">🚀</div>
                        <h3 className="text-2xl font-bold mb-2">Für Nutzer</h3>
                        <p className="text-gray-400">Das ultimative Tool für deine Nacht.</p>
                    </div>
                </div>
            </section>

            {/* BENTO FEATURE SECTION - VENUES & MARKETING */}
            <section className="py-24 px-4 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-12 gap-6">
                    <div className="md:col-span-5 bg-white/5 border border-white/10 p-12 rounded-[40px] flex flex-col justify-center items-center text-center group hover:border-pink-500/30 transition-all">
                        <div className="text-5xl mb-6">📊</div>
                        <h3 className="text-2xl font-bold mb-2">For Venues</h3>
                        <p className="text-gray-400">Effizienz trifft Nachtkultur.</p>
                    </div>
                    <div className="md:col-span-7 bg-[#0a0a0a] border border-white/10 p-12 rounded-[40px] relative overflow-hidden group hover:border-white/20 transition-all">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-600/10 blur-3xl" />
                        <h3 className="text-3xl font-bold mb-6 text-pink-500 italic">Push-Up Marketing</h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Erreiche deine Gäste direkt auf dem Sperrbildschirm. Daten-Analyse und Door-Management für Profis.
                        </p>
                        <div className="space-y-3">
                            {["Real-time Analytics", "Door Management", "Direct Marketing", "Guest Insights"].map((item, idx) => (
                                <div key={idx} className="inline-block mr-3 px-4 py-2 bg-white/5 rounded-xl border border-white/5 text-xs font-bold uppercase tracking-wider text-gray-400">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* STUTTGART CALLOUT */}
            <section className="py-40 text-center relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-[120px] -z-10" />
                <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase italic">Stuttgart</h2>
                <p className="text-gray-500 uppercase tracking-[0.8em] text-xs font-black">Launching Early 2026</p>
            </section>

            {/* MAILING LIST - THE "INVITATION" */}
            <section className="pb-40 px-4">
                <div className="max-w-xl mx-auto bg-gradient-to-b from-white/10 to-transparent p-[1px] rounded-[32px]">
                    <div className="bg-[#080808] p-12 rounded-[31px] text-center">
                        <h2 className="text-3xl font-bold mb-4">Get Early Access</h2>
                        <p className="text-gray-500 mb-10 font-medium">Join the exclusive waitlist for 2026.</p>
                        <form onSubmit={handleWaitlist} className="space-y-4">
                            <input 
                                type="email" 
                                placeholder="Your Email Address" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 px-6 py-5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all text-white text-center font-bold"
                            />
                            <button 
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full bg-white text-black py-5 rounded-2xl font-black shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:bg-gray-200 transition-all uppercase tracking-widest text-sm"
                            >
                                {status === "loading" ? "Processing..." : "Join Now"}
                            </button>
                            {status === "success" && <p className="text-green-400 font-bold mt-4 animate-pulse text-sm">Welcome to GIGILUKO 2026.</p>}
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
