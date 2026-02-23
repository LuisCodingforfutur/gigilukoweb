import React, { useState } from "react";
import { Zap, Users, MapPin, Bell, Heart, Radio } from "lucide-react";
import { STRINGS } from "../utils/strings";

const iconMap: { [key: string]: React.ReactNode } = {
    Zap: <Zap className="w-12 h-12 text-purple-400 mb-4" />,
    Heart: <Heart className="w-12 h-12 text-pink-400 mb-4" />,
    MapPin: <MapPin className="w-12 h-12 text-purple-400 mb-4" />,
    Users: <Users className="w-12 h-12 text-pink-400 mb-4" />,
    Radio: <Radio className="w-12 h-12 text-purple-400 mb-4" />,
    Bell: <Bell className="w-12 h-12 text-pink-400 mb-4" />,
};

const Home: React.FC = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleWaitlistSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="w-full bg-black text-white">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-black via-purple-900 to-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                        {STRINGS.hero.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        {STRINGS.hero.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-bold text-white hover:shadow-lg hover:shadow-purple-500/50 transition">
                            {STRINGS.hero.downloadApp}
                        </button>
                        <button className="px-8 py-3 border-2 border-purple-500 rounded-lg font-bold text-white hover:bg-purple-500/10 transition">
                            {STRINGS.hero.learnMore}
                        </button>
                    </div>
                </div>
            </section>

            {/* So einfach geht's - How it Works */}
            <section className="py-20 px-4 bg-gray-950">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
                        {STRINGS.howItWorks.title}
                    </h2>
                    <p className="text-center text-gray-400 mb-16 text-lg">
                        {STRINGS.howItWorks.subtitle}
                    </p>

                    <div className="grid md:grid-cols-3 gap-12">
                        {STRINGS.howItWorks.steps.map((step, idx) => (
                            <div key={idx} className="text-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                                    {step.number}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Warum GIGILUKO - Features */}
            <section className="py-20 px-4 bg-black">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
                        {STRINGS.features.title}
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {STRINGS.features.items.map((feature, idx) => (
                            <div
                                key={idx}
                                className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition"
                            >
                                {iconMap[feature.icon]}
                                <h3 className="text-2xl font-bold mb-3 text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Für Alle Gemacht - For Everyone */}
            <section className="py-20 px-4 bg-gray-950">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
                        {STRINGS.forEveryone.title}
                    </h2>
                    <p className="text-center text-gray-400 mb-16 text-lg">
                        {STRINGS.forEveryone.subtitle}
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        {/* For Guests */}
                        <div className="p-10 bg-gradient-to-br from-purple-900/30 to-black border border-purple-500/30 rounded-xl">
                            <h3 className="text-2xl font-bold mb-6 text-purple-300">
                                {STRINGS.forEveryone.guests.title}
                            </h3>
                            <ul className="space-y-3 text-gray-300">
                                {STRINGS.forEveryone.guests.features.map(
                                    (feature, idx) => (
                                        <li key={idx}>✓ {feature}</li>
                                    ),
                                )}
                            </ul>
                        </div>

                        {/* For Venues */}
                        <div className="p-10 bg-gradient-to-br from-pink-900/30 to-black border border-pink-500/30 rounded-xl">
                            <h3 className="text-2xl font-bold mb-6 text-pink-300">
                                {STRINGS.forEveryone.venues.title}
                            </h3>
                            <ul className="space-y-3 text-gray-300">
                                {STRINGS.forEveryone.venues.features.map(
                                    (feature, idx) => (
                                        <li key={idx}>✓ {feature}</li>
                                    ),
                                )}
                            </ul>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        {STRINGS.forEveryone.stats.map((stat, idx) => (
                            <div key={idx}>
                                <p
                                    className={`text-4xl font-bold mb-2 ${
                                        idx % 2 === 0
                                            ? "text-purple-400"
                                            : "text-pink-400"
                                    }`}
                                >
                                    {stat.value}
                                </p>
                                <p className="text-gray-400">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - Be Part Of The Revolution */}
            <section className="py-20 px-4 bg-gradient-to-br from-black via-purple-900 to-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        {STRINGS.cta.title}
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        {STRINGS.cta.description}
                    </p>

                    <form
                        onSubmit={handleWaitlistSubmit}
                        className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6"
                    >
                        <input
                            type="email"
                            placeholder={STRINGS.cta.emailPlaceholder}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-purple-500/30 focus:outline-none focus:border-purple-500 transition"
                        />
                        <button
                            type="submit"
                            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-bold text-white hover:shadow-lg hover:shadow-purple-500/50 transition"
                        >
                            {STRINGS.cta.submitButton}
                        </button>
                    </form>

                    {submitted && (
                        <p className="text-green-400 font-semibold">
                            {STRINGS.cta.successMessage}
                        </p>
                    )}

                    <p className="text-gray-400 text-sm">
                        {STRINGS.cta.cities}
                        <br />
                        <span className="text-gray-500">
                            {STRINGS.cta.moreComingSoon}
                        </span>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;
