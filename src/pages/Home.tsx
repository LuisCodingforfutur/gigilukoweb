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
        <div className="relative min-h-screen font-sans selection:bg-purple-500/30 overflow-x-hidden bg-[#05000a] text-white">
            {/* THE MISTY BACKGROUND LAYER */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />
                <div className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-purple-600/15 blur-[160px] rounded-full opacity-60" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-purple-800/10 blur-[140px] rounded-full opacity-50" />
            </div>

            {/* CONTENT LAYER */}
            <div className="relative z-10">
                {/* HERO SECTION */}
                <section className="pt-48 pb-32 px-4 flex flex-col items-center justify-center text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-12 border border-white/10 bg-white/5 backdrop-blur-md rounded-full">
                        <span className="text-[10px] font-black tracking-[0.4em] text-gray-400 uppercase">Stuttgart 2026</span>
                    </div>

                    <h1 className="text-6xl md:text-[140px] font-black mb-8 tracking-[-0.02em] leading-[0.85] text-white uppercase italic">
                        GIGI<br/>LUKO
                    </h1>
                    
                    <p className="text-lg md:text-2xl text-gray-400 max-w-2xl font-light mb-12">
                        Digitalizing every beat, every entry, every vibe. <br />
                        <span className="text-gray-500 font-medium italic text-base md:text-lg">The Operating System for Nightlife.</span>
                    </p>
                </section>

                {/* BENTO GRID */}
                <div className="max-w-6xl mx-auto px-4 space-y-6 pb-40">
                    <div className="grid md:grid-cols-12 gap-6 text-left">
                        <div className="md:col-span-8 bg-white/5 border border-white/10 p-12 rounded-[50px] backdrop-blur-sm">
                            <h2 className="text-4xl font-black mb-6 italic text-white uppercase tracking-tighter">FOMO Radar</h2>
                            <p className="text-gray-500 text-lg leading-relaxed max-w-md mb-8 italic">
                                Live Insights zur Crowd. Sieh die Nacht durch den Community Feed.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Live", "Community", "Vibe"].map(t => (
                                    <span key={t} className="px-4 py-2 bg-white/5 rounded-2xl text-[9px] font-black text-gray-400 uppercase tracking-widest">{t}</span>
                                ))}
                            </div>
                        </div>
                        <div className="md:col-span-4 bg-purple-600/10 border border-purple-500/20 p-12 rounded-[50px] flex flex-col justify-center items-center text-center backdrop-blur-sm">
                            <h3 className="text-2xl font-black italic uppercase tracking-tighter text-purple-500">The App</h3>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-12 gap-6 text-left">
                        <div className="md:col-span-4 bg-white/5 border border-white/10 p-12 rounded-[50px] flex flex-col justify-center items-center text-center backdrop-blur-sm text-gray-600 uppercase font-black italic">
                            For Venues
                        </div>
                        <div className="md:col-span-8 bg-white/5 border border-white/10 p-12 rounded-[50px] backdrop-blur-sm">
                            <h3 className="text-3xl font-black mb-6 text-white italic uppercase tracking-tighter text-pink-500/80">Push-Up Marketing</h3>
                            <p className="text-gray-500 text-lg leading-relaxed italic">
                                Direkte Kommunikation. Door-Management. Real-time Analytics.
                            </p>
                        </div>
                    </div>

                    {/* WAITLIST */}
                    <div className="max-w-xl mx-auto pt-20">
                        <div className="bg-white/5 p-16 rounded-[60px] border border-white/10 text-center backdrop-blur-md">
                            <h2 className="text-4xl font-black mb-4 uppercase italic text-white">Join Waitlist</h2>
                            <p className="text-gray-500 mb-12">Early Access 2026.</p>
                            <form onSubmit={handleWaitlist} className="flex flex-col gap-4">
                                <input 
                                    type="email" 
                                    placeholder="E-Mail" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 px-8 py-5 rounded-3xl focus:outline-none focus:border-purple-500/50 text-white text-center font-bold"
                                />
                                <button type="submit" className="w-full bg-white text-black py-5 rounded-3xl font-black text-lg uppercase tracking-widest hover:bg-gray-200 transition-all">
                                    {status === "loading" ? "..." : "Join Now"}
                                </button>
                            </form>
                            {status === "success" && <p className="text-purple-400 font-black mt-8 uppercase text-sm">Welcome to the Club.</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
