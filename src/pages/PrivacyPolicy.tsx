import React from "react";
import LegalPage from "../components/LegalPage";

const PrivacyPolicy: React.FC = () => {
    return (
        <LegalPage title="Privacy Policy" lastUpdated="May 2026">
            <section>
                <h2>1. Controller</h2>
                <p>The controller responsible for data processing under the EU General Data Protection Regulation (GDPR) is:</p>
                <p><strong>GIGILUKO Technologies UG (haftungsbeschränkt) i.Gr.</strong><br/>Sirnauerstraße 1<br/>73779 Deizisau<br/>Germany<br/>Email: <a href="mailto:support@gigiluko.com">support@gigiluko.com</a><br/>Managing Directors: Luis Gianluca Giuliano, Lukas Konstantin Haimayer</p>
            </section>
            
            <section>
                <h2>2. General Information on Data Processing</h2>
                <p>We process personal data of our users only insofar as this is necessary to provide a functional application and our content and services. Processing of personal data occurs regularly only with the user's consent, except where prior consent cannot be obtained for factual reasons and processing is permitted by law.</p>
                <p>Personal data will be deleted or blocked as soon as the purpose of storage no longer applies. Storage may continue if mandated by European or national legislators.</p>
            </section>
            
            <section>
                <h2>3. Data We Collect and Use</h2>
                
                <h3>3.1 Website Hosting and Server Log Files</h3>
                <p>Our website is hosted by external service providers (e.g., Vercel Inc.). Whenever you visit our website, the provider automatically collects and stores information in so-called server log files, which your browser automatically transmits. This includes: IP address, browser type and version, operating system, referrer URL, and time of the server request. This data is not merged with other data sources. The legal basis for this is Art. 6(1)(f) GDPR (legitimate interest in the technically error-free presentation and optimization of our website).</p>

                <h3>3.2 Cookies and Local Storage</h3>
                <p>Our website and app use technologies such as cookies and Local Storage to make our offering more user-friendly, effective, and secure. For example, we use your browser's Local Storage to save your decision regarding our cookie banner. The processing of strictly necessary data is based on our legitimate interest (Art. 6(1)(f) GDPR) and complies with the applicable telecommunications laws regarding the protection of privacy.</p>

                <h3>3.3 Waitlist and Contact Forms</h3>
                <p>If you enter your email address into our waitlist or contact us via email, your details will be stored for the purpose of processing the inquiry and for any follow-up questions. For the waitlist, your data will exclusively be used to inform you about the launch and updates of GIGILUKO. The legal basis for this processing is your consent (Art. 6(1)(a) GDPR) and pre-contractual steps (Art. 6(1)(b) GDPR).</p>

                <h3>3.4 Account Registration & In-App Usage</h3>
                <p>When you register in the app, we collect your email address, an encrypted password, your username, and your registration date (Art. 6(1)(b) GDPR). Additional voluntary profile data (such as a biography) is based on your consent (Art. 6(1)(a) GDPR). App functionality like friend lists, friend requests, and check-ins are processed to fulfill our contractual service obligations.</p>
            </section>
            
            <section>
                <h2>4. Third-Party Services and Data Processing</h2>
                <h3>4.1 Firebase (Google Ireland Limited)</h3>
                <p>We use Firebase services (Google Ireland Limited) for secure sign-in (Authentication) and database hosting (Cloud Firestore). Data processing is carried out based on a data processing agreement under Art. 28 GDPR.</p>
                
                <h3>4.2 Map Service CartoDB / Fastly</h3>
                <p>To display venue maps, we use CartoDB, delivered via the Fastly content delivery network. Your IP address is transmitted when loading the map based on our legitimate interest in providing location features (Art. 6(1)(f) GDPR).</p>
            </section>
            
            <section>
                <h2>5. Your Rights as a Data Subject</h2>
                <p>You have the right to request information about your stored data (Art. 15 GDPR), request correction (Art. 16 GDPR), request deletion (Art. 17 GDPR), request restriction of processing (Art. 18 GDPR), and data portability (Art. 20 GDPR). You also have the right to withdraw any consent given at any time with effect for the future (Art. 7(3) GDPR).</p>
                
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20 my-6">
                    <h3 className="text-xl font-bold uppercase mb-2">Right to Object (Art. 21 GDPR)</h3>
                    <p className="font-bold">IF DATA PROCESSING IS BASED ON ART. 6(1)(E) OR (F) GDPR, YOU HAVE THE RIGHT TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA AT ANY TIME FOR REASONS ARISING FROM YOUR PARTICULAR SITUATION. IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR PERSONAL DATA UNLESS WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING WHICH OVERRIDE YOUR INTERESTS, RIGHTS, AND FREEDOMS.</p>
                </div>

                <p>You also have the right to lodge a complaint with a supervisory authority (Art. 77 GDPR). Our competent authority is the State Commissioner for Data Protection Baden-Württemberg.</p>
            </section>
            
            <section>
                <h2>6. Data Security and SSL/TLS Encryption</h2>
                <p>For security reasons and to protect the transmission of confidential content, our site uses SSL or TLS encryption. You can recognize an encrypted connection by the fact that the address line of the browser changes from "http://" to "https://" and by the lock symbol in your browser line.</p>
                <p>Please note that data transmission over the Internet (e.g., when communicating by e-mail) may have fundamental security vulnerabilities. A complete protection of data against access by third parties cannot be technically guaranteed.</p>
            </section>
            
            <section>
                <h2>7. Contact</h2>
                <p>For any privacy-related questions or to exercise your rights, please contact us at: <strong>support@gigiluko.com</strong></p>
            </section>
        </LegalPage>
    );
};
export default PrivacyPolicy;
