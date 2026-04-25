import React from "react";

const Imprint: React.FC = () => (
  <div className="pt-48 pb-32 px-6 max-w-4xl mx-auto transition-colors duration-500">
    <h1 className="text-4xl md:text-6xl font-black mb-8 italic uppercase text-purple-600">Impressum</h1>
    <div className="space-y-6 text-gray-600 dark:text-gray-300 font-light leading-relaxed">
      <h2 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">Angaben gemäß § 5 TMG</h2>
      <p>GIGILUKO<br/>Musterstraße 1<br/>12345 Musterstadt</p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">Kontakt</h2>
      <p>Telefon: +49 (0) 123 44 55 66<br/>E-Mail: info@gigiluko.com</p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">Vertreten durch</h2>
      <p>Die Geschäftsführung</p>
    </div>
  </div>
);
export default Imprint;
