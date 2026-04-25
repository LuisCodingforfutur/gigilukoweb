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
        <div className="relative pt-48 pb-32 px-4 flex flex-col items-center justify-center text-center transition-colors duration-500">
            <div className="fixed inset-0 pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-purple-600/10 dark:bg-purple-600/15 blur-[160px] rounded-full opacity-60" />
            </div>
            
            <div className="bg-transparent dark:bg-white p-2 rounded-[35px] shadow-none dark:shadow-[0_0_50px_rgba(168,85,247,0.3)] mb-10 inline-block border border-black/10 dark:border-none">
                <img src="/logo-black.jpg" alt="GIGILUKO Icon" className="w-24 h-24 rounded-[28px] object-cover dark:hidden" />
                <img src="/logo-white.jpg" alt="GIGILUKO Icon" className="w-24 h-24 rounded-[28px] object-cover hidden dark:block" />
            </div>

            <h1 className="text-6xl md:text-[140px] font-black mb-8 leading-[0.85] text-purple-600 uppercase italic">
                GIGI<br/>LUKO
            </h1>
            <p className="text-lg md:text-2xl text-gray-500 dark:text-gray-400 max-w-2xl font-light mb-12">
                Digitalizing every beat, every entry, every vibe.
            </p>

            <form onSubmit={handleWaitlist} className="max-w-md w-full bg-gray-50 dark:bg-white/5 p-12 rounded-[50px] border border-black/5 dark:border-white/10 backdrop-blur-sm shadow-xl dark:shadow-none">
                <input 
                    type="email" 
                    placeholder="E-Mail" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-8 py-4 rounded-2xl mb-4 text-black dark:text-white text-center outline-none focus:border-purple-500 transition-all" 
                />
                <button type="submit" className="w-full bg-purple-600 text-white dark:bg-white dark:text-black py-4 rounded-2xl font-black uppercase tracking-widest hover:opacity-90 transition-all">
                    {status === "loading" ? "..." : "Join Now"}
                </button>
            </form>
        </div>
    );
};
export default Home;
