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
        <div className="bg-[#05000a] text-white min-h-screen font-sans selection:bg-purple-500/30 overflow-x-hidden">
            {/* BACKGROUND MISTY CLOUD */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[10%] left-[-10%] w-[800px] h-[800px] bg-purple-900/20 blur-[150px] rounded-full" />
                <div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full" />
            </div>

            {/* HERO SECTION */}
            <section className="relative pt-48 pb-32 px-4 flex flex-col items-center justify-center text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-12 border border-white/5 bg-white/5 backdrop-blur-md rounded-full">
                    <span className="text-[10px] font-black tracking-[0.4em] text-gray-400 uppercase">Stuttgart 2026</span>
                </div>

                <h1 className="text-7xl md:text-[180px] font-black mb-8 tracking-[-0.02em] leading-[0.8] text-white/90 uppercase italic">
                    GIGI<br/>LUKO
                </h1>
                
                <p className="text-lg md:text-2xl text-gray-400 max-w-xl font-light mb-12">
                    Digitalizing the scene. <br />
                    <span className="text-gray-500 font-medium italic">The Operating System for Nightlife.</span>
                </p>
            </section>

            {/* BENTO GRID SECTIONS */}
            <section className="py-12 px-4 max-w-6xl mx-auto grid md:grid-cols-12 gap-6">
                <div className="md:col-span-8 bg-white/[0.03] border border-white/5 p-12 rounded-[50px] group transition-all duration-700">
                    <h2 className="text-4xl font-black mb-6 italic text-white uppercase tracking-tighter">FOMO Radar</h2>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-md mb-8">
                        Kein Rätselraten mehr. Erlebe die Stadt durch Live-Daten und den exklusiven Community Feed.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {["Real-Time", "Live Vibe", "Community"].map(t => (
                            <span key={t} className="px-4 py-2 bg-white/5 rounded-2xl text-[9px] font-black text-gray-400 uppercase tracking-widest">{t}</span>
                        ))}
                    </div>
                </div>
                <div className="md:col-span-4 bg-purple-600/5 border border-purple-500/10 p-12 rounded-[50px] flex flex-col justify-center items-center text-center">
                    <h3 className="text-2xl font-black italic uppercase tracking-tighter text-purple-400">The App</h3>
                </div>
            </section>

            <section className="py-6 px-4 max-w-6xl mx-auto grid md:grid-cols-12 gap-6">
                <div className="md:col-span-4 bg-white/[0.03] border border-white/5 p-12 rounded-[50px] flex flex-col justify-center items-center text-center">
                    <h3 className="text-2xl font-black italic uppercase tracking-tighter text-gray-500">For Venues</h3>
                </div>
                <div className="md:col-span-8 bg-white/[0.03] border border-white/5 p-12 rounded-[50px]">
                    <h3 className="text-3xl font-black mb-6 text-white italic uppercase tracking-tighter">Push-Up Marketing</h3>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        Direkte Kommunikation mit deiner Crowd. Door-Management und Analytics in Echtzeit.
                    </p>
                </div>
            </section>

            {/* WAITLIST SECTION */}
            <section id="waitlist" className="py-40 px-4">
                <div className="max-w-xl mx-auto">
                    <div className="bg-white/[0.03] p-16 rounded-[60px] border border-white/5 text-center">
                        <h2 className="text-4xl font-black mb-4 uppercase italic tracking-tight text-white">Join Waitlist</h2>
                        <p className="text-gray-500 mb-12">Be the first to digitalize your night.</p>
                        <form onSubmit={handleWaitlist} className="flex flex-col gap-4">
                            <input 
                                type="email" 
                                placeholder="E-Mail" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 px-8 py-5 rounded-3xl focus:outline-none focus:border-purple-500/50 transition-all text-white text-center font-bold"
                            />
                            <button 
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full bg-white text-black py-5 rounded-3xl font-black text-lg hover:bg-gray-200 transition-all uppercase tracking-widest"
                            >
                                {status === "loading" ? "..." : "Join Now"}
                            </button>
                        </form>
                        {status === "success" && <p className="text-purple-400 font-black mt-8 uppercase tracking-widest text-sm">Welcome.</p>}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
