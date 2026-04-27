import React from "react";

const Users: React.FC = () => {
    return (
        <div className="space-y-24">
            {/* HAUPTBLOCK: Reparierte Farben für Light & Dark Mode */}
            <div className="bg-gray-50 dark:bg-black/50 backdrop-blur-sm border border-black/5 dark:border-white/10 p-12 md:p-20 rounded-[50px] text-left transition-colors duration-500">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-grow">
                        <h2 className="text-3xl md:text-5xl font-black mb-6 text-black dark:text-white uppercase italic">Digitalizing your Nightlife Experience.</h2>
                        <p className="text-lg text-gray-700 dark:text-gray-400 font-light mb-12 max-w-2xl">GIGILUKO helps you discover the best venues, manage your entries, and connect with your friends – all in one powerful app.</p>
                        
                        <div className="flex flex-col sm:flex-row gap-6 mb-12">
                            <button className="bg-purple-600 text-white dark:bg-white dark:text-black px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:opacity-90 transition-all text-sm">Download App</button>
                            <button className="bg-white/10 text-black dark:text-white border border-black/10 dark:border-white/10 px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-black/5 dark:hover:bg-white/5 transition-all text-sm">Learn More</button>
                        </div>
                    </div>
                    {/* Placeholder for App Screenshot */}
                    <div className="w-full md:w-[300px] h-[600px] bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-3xl flex items-center justify-center text-gray-400 flex-shrink-0 shadow-inner">
                        App Screenshot
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="bg-white dark:bg-white/5 p-8 rounded-3xl border border-black/5 dark:border-white/10 transition-colors duration-500">
                    <div className="w-16 h-16 rounded-2xl bg-purple-600/10 dark:bg-purple-600/20 text-purple-600 flex items-center justify-center text-3xl mb-6">🔍</div>
                    <h4 className="text-xl font-bold mb-3 text-black dark:text-white">Discover Venues</h4>
                    <p className="text-gray-600 dark:text-gray-400 font-light text-sm">Find bars, clubs, and lounges near you. Check lineups, entry fees, and real-time updates.</p>
                </div>
                <div className="bg-white dark:bg-white/5 p-8 rounded-3xl border border-black/5 dark:border-white/10 transition-colors duration-500">
                    <div className="w-16 h-16 rounded-2xl bg-purple-600/10 dark:bg-purple-600/20 text-purple-600 flex items-center justify-center text-3xl mb-6">🎟️</div>
                    <h4 className="text-xl font-bold mb-3 text-black dark:text-white">Easy Entries</h4>
                    <p className="text-gray-600 dark:text-gray-400 font-light text-sm">Skip the line with digital tickets and guestlist access. Your profile is your entry card.</p>
                </div>
                <div className="bg-white dark:bg-white/5 p-8 rounded-3xl border border-black/5 dark:border-white/10 transition-colors duration-500">
                    <div className="w-16 h-16 rounded-2xl bg-purple-600/10 dark:bg-purple-600/20 text-purple-600 flex items-center justify-center text-3xl mb-6">🥂</div>
                    <h4 className="text-xl font-bold mb-3 text-black dark:text-white">Connect & Share</h4>
                    <p className="text-gray-600 dark:text-gray-400 font-light text-sm">See where your friends are going, share plans, and make every night an event.</p>
                </div>
            </div>
        </div>
    );
};

export default Users;
