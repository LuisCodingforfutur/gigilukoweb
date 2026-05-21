import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className="bg-white dark:bg-[#05000a] text-black dark:text-white border-t border-gray-200 dark:border-purple-900/30 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                    <div>
                        <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">GIGILUKO</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-500">The Operating System for Nightlife. We digitalize the Nightlife worldwide.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-black dark:text-white transition-colors duration-500">Product</h4>
                        <ul className="text-gray-600 dark:text-gray-400 space-y-2 transition-colors duration-500">
                            <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">For Venues</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-black dark:text-white transition-colors duration-500">Company</h4>
                        <ul className="text-gray-600 dark:text-gray-400 space-y-2 transition-colors duration-500">
                            <li><a href="mailto:support@gigiluko.com" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-black dark:text-white transition-colors duration-500">Legal</h4>
                        <ul className="text-gray-600 dark:text-gray-400 space-y-2 transition-colors duration-500">
                            <li><Link to="/privacy" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/privacy-de" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Datenschutz (DE)</Link></li>
                            <li><Link to="/terms" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Terms of Service</Link></li>
                            <li><Link to="/terms-de" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Nutzungsbedingungen (DE)</Link></li>
                            <li><Link to="/community-guidelines" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Community Guidelines</Link></li>
                            <li><Link to="/community-guidelines-de" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Community Guidelines (DE)</Link></li>
                            <li><Link to="/impressum" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Impressum</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-200 dark:border-purple-900/30 pt-8 text-center text-gray-600 dark:text-gray-400 transition-colors duration-500">
                    <p>© {new Date().getFullYear()} GIGILUKO. All rights reserved. Made with 🔥 for the Nightlife.</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
