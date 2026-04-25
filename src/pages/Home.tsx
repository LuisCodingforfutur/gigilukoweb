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
        <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 flex flex-col items-center text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-600/20 blur-[120px] rounded-full -z-10" />
                
                <h1 className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tighter bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                    GIGILUKO
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
                    The Operating System for Nightlife. <br />
                    Digitalizing the scene.
                </p>

                {/* Waitlist Form */}
                <form onSubmit={handleWaitlist} className="w-full max-w-md space-y-4">
                    <div className="relative group">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all text-white placeholder:text-gray-500"
                        />
                        <button 
                            type="submit"
                            disabled={status === "loading"}
                            className="mt-4 w-full bg-gradient-to-r from-purple-600 to-pink-600 py-4 rounded-2xl font-bold text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                        >
                            {status === "loading" ? "Joining..." : "Join the Waitlist"}
                        </button>
                    </div>
                    {status === "success" && <p className="text-green-400 font-medium">🔥 Du bist auf der Liste für 2026!</p>}
                </form>
            </section>

            {/* Feature Sections */}
            <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-8">
                {/* FOMO Radar */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-2">
                    <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">FOMO Radar</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Checke in Echtzeit, wo der Vibe am besten ist. Live-Insights zur Crowd-Dichte und Musikrichtung direkt aus den Clubs.
                    </p>
                </div>

                {/* For Venues */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl hover:border-pink-500/40 transition-all duration-500 hover:-translate-y-2">
                    <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">For Venues</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Das professionelle OS für Club-Betreiber. Door-Management, Daten-Analyse und digitale Effizienz für die Nachtkultur.
                    </p>
                </div>
            </section>

            {/* Stuttgart Launch */}
            <section className="py-32 text-center relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-600/10 blur-[120px] -z-10" />
                <h2 className="text-4xl md:text-6xl font-bold mb-6">Starting in <span className="text-purple-400">Stuttgart</span></h2>
                <p className="text-gray-500 uppercase tracking-[0.5em] text-sm font-bold">Coming Early 2026</p>
            </section>
        </div>
    );
};

export default Home;
