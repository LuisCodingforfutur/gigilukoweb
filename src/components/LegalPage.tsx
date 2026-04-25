import React from "react";

interface LegalPageProps {
    title: string;
    lastUpdated: string;
    children: React.ReactNode;
}

const LegalPage: React.FC<LegalPageProps> = ({ title, lastUpdated, children }) => {
    return (
        <div className="bg-black text-gray-200 min-h-screen">
            <div className="bg-gradient-to-b from-purple-950/40 via-purple-900/20 to-transparent border-b border-purple-900/30">
                <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 mt-24">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                        {title}
                    </h1>
                    <p className="text-gray-400 text-sm">
                        Last updated: {lastUpdated}
                    </p>
                </div>
            </div>
            <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
                <article className="legal-prose">
                    {children}
                </article>
            </div>
        </div>
    );
};
export default LegalPage;
