import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { STRINGS } from "../utils/strings";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-black text-white shadow-lg sticky top-0 z-50 border-b border-purple-900/30">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link
                        to="/"
                        className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:opacity-80 transition flex-shrink-0"
                    >
                        GIGILUKO
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-8  flex-1 mx-8">
                        <a
                            href="#features"
                            className="hover:text-purple-400 transition whitespace-nowrap"
                        >
                            {STRINGS.nav.features}
                        </a>
                        <a
                            href="#how-it-works"
                            className="hover:text-purple-400 transition whitespace-nowrap"
                        >
                            {STRINGS.nav.howItWorks}
                        </a>
                        <a
                            href="#for-venues"
                            className="hover:text-purple-400 transition whitespace-nowrap"
                        >
                            {STRINGS.nav.forVenues}
                        </a>
                    </nav>

                    <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition flex-shrink-0">
                        {STRINGS.nav.joinWaitlist}
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex-shrink-0"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-purple-900/30 pt-4">
                        <a
                            href="#features"
                            className="hover:text-purple-400 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            {STRINGS.nav.features}
                        </a>
                        <a
                            href="#how-it-works"
                            className="hover:text-purple-400 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            {STRINGS.nav.howItWorks}
                        </a>
                        <a
                            href="#for-venues"
                            className="hover:text-purple-400 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            {STRINGS.nav.forVenues}
                        </a>
                        <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold w-full">
                            {STRINGS.nav.joinWaitlist}
                        </button>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
