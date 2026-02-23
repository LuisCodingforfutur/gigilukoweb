import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white border-t border-purple-900/30">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                            GIGILUKO
                        </h3>
                        <p className="text-gray-400 text-sm">
                            The Operating System for Nightlife. We digitalize
                            the Nightlife worldwide.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white">
                            Product
                        </h4>
                        <ul className="text-gray-400 space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-purple-400 transition"
                                >
                                    Features
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-purple-400 transition"
                                >
                                    How It Works
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-purple-400 transition"
                                >
                                    For Venues
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-purple-400 transition"
                                >
                                    Waitlist
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white">
                            Company
                        </h4>
                        <ul className="text-gray-400 space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-purple-400 transition"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-purple-400 transition"
                                >
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-purple-400 transition"
                                >
                                    Press Kit
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-purple-400 transition"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white">
                            Legal
                        </h4>
                        <ul className="text-gray-400 space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-purple-400 transition"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-purple-400 transition"
                                >
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-purple-400 transition"
                                >
                                    DSGVO
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-purple-400 transition"
                                >
                                    Impressum
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-purple-900/30 pt-8">
                    <div className="text-center text-gray-400">
                        <p>
                            © {new Date().getFullYear()} GIGILUKO. All rights
                            reserved. Made with 🔥 for the Nightlife.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
