import React from "react";

const Privacy: React.FC = () => (
  <div className="pt-48 pb-32 px-6 max-w-4xl mx-auto transition-colors duration-500">
    <h1 className="text-4xl md:text-6xl font-black mb-8 italic uppercase text-purple-600">Privacy Policy</h1>
    <div className="space-y-6 text-gray-600 dark:text-gray-300 font-light leading-relaxed">
      <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">1. Introduction</h2>
      <p>Welcome to GIGILUKO. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">2. The Data We Collect About You</h2>
      <p>Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows: Identity Data, Contact Data, Technical Data, and Usage Data.</p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">3. How We Use Your Personal Data</h2>
      <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: Where we need to perform the contract we are about to enter into or have entered into with you; Where it is necessary for our legitimate interests; Where we need to comply with a legal obligation.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">4. Data Security</h2>
      <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>
    </div>
  </div>
);
export default Privacy;
