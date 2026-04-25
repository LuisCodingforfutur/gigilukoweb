import React from "react";

const Terms: React.FC = () => (
  <div className="pt-48 pb-32 px-6 max-w-4xl mx-auto transition-colors duration-500">
    <h1 className="text-4xl md:text-6xl font-black mb-8 italic uppercase text-purple-600">AGB</h1>
    <div className="space-y-6 text-gray-600 dark:text-gray-300 font-light leading-relaxed">
      <h2 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">§ 1 Geltungsbereich</h2>
      <p>Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, die zwischen GIGILUKO und dem Nutzer geschlossen werden.</p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">§ 2 Leistungsumfang</h2>
      <p>GIGILUKO bietet eine digitale Plattform zur Optimierung und Verwaltung von Events, Einlasskontrollen und zugehörigen Zahlungsabwicklungen.</p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">§ 3 Haftung</h2>
      <p>GIGILUKO haftet nur für Vorsatz und grobe Fahrlässigkeit. Für leichte Fahrlässigkeit wird nur bei Verletzung wesentlicher Vertragspflichten gehaftet.</p>
    </div>
  </div>
);
export default Terms;
