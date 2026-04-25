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
            await fetch('/api/send', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
            await addDoc(collection(db, "waitlist"), { email, timestamp: serverTimestamp() });
            setStatus("success");
            setEmail("");
        } catch (error) { setStatus("error"); }
    };

    return (
        <div className="relative pt-48 pb-32 px-4 flex flex-col items-center justify-center text-center">
            <div className="fixed inset-0 pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-purple-600/15 blur-[160px] rounded-full opacity-60" />
            </div>
            
            {/* Grafik Logo Badge */}
            <img 
                src="/logo.jpg" 
                alt="GIGILUKO Icon" 
                className="w-24 h-24 mb-8 rounded-3xl shadow-[0_0_30px_rgba(147,51,234,0.3)] border border-purple-500/20"
            />

            <h1 className="text-6xl md:text-[140px] font-black mb-8 leading-[0.85] text-purple-600 uppercase italic">
                GIGI<br/>LUKO
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-400 max-w-2xl font-light mb-12">
                Digitalizing every beat, every entry, every vibe.
            </p>

            <form onSubmit={handleWaitlist} className="max-w-md w-full bg-white/5 p-12 rounded-[50px] border border-white/10 backdrop-blur-sm">
                <input 
                    type="email" 
                    placeholder="E-Mail" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="w-full bg-white/5 border border-white/10 px-8 py-4 rounded-2xl mb-4 text-white text-center focus:border-purple-500/50 outline-none" 
                />
                <button type="submit" className="w-full bg-white text-black py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-purple-100 transition-all">
                    {status === "loading" ? "..." : "Join Now"}
                </button>
                {status === "success" && <p className="text-purple-400 mt-4 text-sm font-bold uppercase animate-pulse">Welcome to the Club.</p>}
            </form>
        </div>
    );
};

export default Home;
