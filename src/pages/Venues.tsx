import React from "react";

const Venues: React.FC = () => {
    return (
        <div className="space-y-24">
            {/* HAUPTBLOCK: Reparierte Farben für Light & Dark Mode */}
            <div className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 p-12 md:p-20 rounded-[50px] text-left transition-colors duration-500 shadow-xl dark:shadow-none">
                <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                    <div className="flex-grow">
                        <h2 className="text-3xl md:text-5xl font-black mb-6 text-black dark:text-white uppercase italic">Optimize your Venue Operations.</h2>
                        <p className="text-lg text-gray-700 dark:text-gray-400 font-light mb-12 max-w-2xl">GIGILUKO provides the ultimate operating system for bars, clubs, and nightlife events. Maximize revenue, streamline entries, and build lasting customer loyalty.</p>
                        
                        <div className="flex flex-col sm:flex-row gap-6 mb-12">
                            <button className="bg-purple-600 text-white dark:bg-white dark:text-black px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:opacity-90 transition-all text-sm">Get for Venue</button>
                            <button className="bg-gray-100 dark:bg-white/10 text-black dark:text-white border border-black/10 dark:border-white/10 px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-black/5 dark:hover:bg-white/5 transition-all text-sm">Demo Request</button>
                        </div>
                    </div>
                    {/* Placeholder for Dashboard Screenshot */}
                    <div className="w-full md:w-[450px] h-[350px] bg-gray-50 dark:bg-black/20 border border-black/5 dark:border-white/10 rounded-3xl flex items-center justify-center text-gray-400 flex-shrink-0 shadow-inner">
                        Dashboard Screenshot
                    </div>
                </div>
            </div>

            {/* Venues Features */}
            <div className="w-full text-left">
                <h3 className="text-2xl font-bold mb-10 text-black dark:text-white">Why Venues Choose GIGILUKO</h3>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="flex gap-6 items-start bg-gray-50 dark:bg-white/5 p-8 rounded-3xl border border-black/5 dark:border-white/10 transition-colors duration-500">
                        <div className="text-4xl text-purple-600">📊</div>
                        <div>
                            <h4 className="text-xl font-bold mb-2 text-black dark:text-white">Revenue Growth</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 font-light">Implement dynamic pricing, pre-sales, and analyze customer spending to boost your profits.</p>
                        </div>
                    </div>
                    <div className="flex gap-6 items-start bg-gray-50 dark:bg-white/5 p-8 rounded-3xl border border-black/5 dark:border-white/10 transition-colors duration-500">
                        <div className="text-4xl text-purple-600">⚡</div>
                        <div>
                            <h4 className="text-xl font-bold mb-2 text-black dark:text-white">Streamlined Entries</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 font-light">Accelerate door operations with digital tickets, instant guestlist verification, and real-time statistics.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Venues;
