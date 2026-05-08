import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white border-t border-purple-900/30">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                    <div>
                        <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">GIGILUKO</h3>
                        <p className="text-gray-400 text-sm">The Operating System for Nightlife. We digitalize the Nightlife worldwide.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white">Product</h4>
                        <ul className="text-gray-400 space-y-2">
                            <li><a href="#" className="hover:text-purple-400 transition">Features</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition">For Venues</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white">Company</h4>
                        <ul className="text-gray-400 space-y-2">
                            <li><a href="mailto:support@gigiluko.com" className="hover:text-purple-400 transition">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white">Legal</h4>
                        <ul className="text-gray-400 space-y-2">
                            <li><Link to="/privacy" className="hover:text-purple-400 transition">Privacy Policy</Link></li>
                            <li><Link to="/privacy-de" className="hover:text-purple-400 transition">Datenschutz (DE)</Link></li>
                            <li><Link to="/terms" className="hover:text-purple-400 transition">Terms of Service</Link></li>
                            <li><Link to="/terms-de" className="hover:text-purple-400 transition">Nutzungsbedingungen (DE)</Link></li>
                            <li><Link to="/community-guidelines" className="hover:text-purple-400 transition">Community Guidelines</Link></li>
                            <li><Link to="/community-guidelines-de" className="hover:text-purple-400 transition">Community Guidelines (DE)</Link></li>
                            <li><Link to="/impressum" className="hover:text-purple-400 transition">Impressum</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-purple-900/30 pt-8 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} GIGILUKO. All rights reserved. Made with 🔥 for the Nightlife.</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
