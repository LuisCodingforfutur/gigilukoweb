import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Users from "./Users";
import Venues from "./Venues";
import { useLanguage } from "../components/Layout";

const Home: React.FC = () => {
    const { lang } = useLanguage();
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    
    const t = {
        de: { slogan: "Digitalisierung für jeden Beat, jeden Einlass, jeden Vibe.", join: "Werde Teil der Bewegung", btn: "Jetzt beitreten", success: "Erfolgreich!" },
        en: { slogan: "Digitalizing every beat, every entry, every vibe.", join: "Join the Movement", btn: "Join Now", success: "Success!" }
    }[lang];

    const handleWaitlist = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.includes("@")) return;
        setStatus("loading");
        try {
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
            
            <div className="mb-10 inline-block">
                <img src="/logo-white.jpg" alt="Logo" className="w-24 h-24 rounded-[28px] object-cover dark:hidden" />
                <img src="/logo-black.jpg" alt="Logo" className="w-24 h-24 rounded-[28px] object-cover hidden dark:block" />
            </div>

            {/* Hier ist die Änderung: GIGILUKO in einer Zeile ohne <br/> */}
            <h1 className="text-5xl md:text-9xl lg:text-[140px] font-black mb-8 leading-tight text-purple-600 uppercase italic tracking-tighter">
                GIGILUKO
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-500 dark:text-gray-400 max-w-2xl font-light mb-24">
                {t.slogan}
            </p>

            <div className="w-full max-w-7xl mx-auto my-16">
                <Users />
            </div>
            <div className="w-full max-w-7xl mx-auto my-32">
                <Venues />
            </div>

            <div className="w-full flex justify-center my-16">
                <form onSubmit={handleWaitlist} className="max-w-md w-full bg-gray-50 dark:bg-white/5 p-12 rounded-[50px] border border-black/5 dark:border-white/10 backdrop-blur-sm shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">{t.join}</h2>
                    <input 
                        type="email" 
                        placeholder="E-Mail" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-8 py-4 rounded-2xl mb-4 text-center outline-none focus:border-purple-500 transition-all text-black dark:text-white" 
                    />
                    <button type="submit" className="w-full bg-purple-600 text-white dark:bg-white dark:text-black py-4 rounded-2xl font-black uppercase tracking-widest hover:opacity-90 transition-all">
                        {status === "loading" ? "..." : status === "success" ? t.success : t.btn}
                    </button>
                </form>
            </div>
        </div>
    );
};
export default Home;
