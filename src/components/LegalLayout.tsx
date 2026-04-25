import React from "react";

const LegalLayout: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  return (
    <div className="pt-40 pb-20 px-6 max-w-4xl mx-auto text-gray-300 leading-relaxed">
      <h1 className="text-4xl font-black text-white mb-12 uppercase italic">{title}</h1>
      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
};

export default LegalLayout;
