import React from "react";
import LegalPage from "../components/LegalPage";

const PrivacyPolicy: React.FC = () => {
    return (
        <LegalPage title="Privacy Policy" lastUpdated="April 2026">
            <section>
                <h2>1. Controller</h2>
                <p>The controller responsible for data processing under the EU General Data Protection Regulation (GDPR) is:</p>
                <p><strong>GIGILUKO Technologies UG (haftungsbeschränkt) i.Gr.</strong><br/>Sirnauerstraße 1<br/>73779 Deizisau<br/>Germany<br/>Email: <a href="mailto:support@gigiluko.com">support@gigiluko.com</a><br/>Managing Directors: Luis Gianluca Giuliano, Lukas Konstantin Haimayer</p>
            </section>
            <section>
                <h2>2. General Information on Data Processing</h2>
                <h3>2.1 Scope of Data Processing</h3>
                <p>We process personal data of our users only insofar as this is necessary to provide a functional application and our content and services. Processing of personal data occurs regularly only with the user's consent, except where prior consent cannot be obtained for factual reasons and processing is permitted by law.</p>
                <h3>2.2 Legal Basis</h3>
                <ul>
                    <li>Art. 6(1)(a) GDPR (consent) — for registration and profile creation</li>
                    <li>Art. 6(1)(b) GDPR (contract performance) — to provide app functions</li>
                    <li>Art. 6(1)(f) GDPR (legitimate interests) — to ensure technical functionality</li>
                </ul>
                <h3>2.3 Data Retention</h3>
                <p>Personal data will be deleted or blocked as soon as the purpose of storage no longer applies. Storage may continue if mandated by European or national legislators in Union regulations, laws, or other provisions to which the controller is subject.</p>
            </section>
            <section>
                <h2>3. Data We Collect</h2>
                <h3>3.1 Account Registration</h3>
                <p>When you register, we collect:</p>
                <ul>
                    <li><strong>Email address</strong> — for authentication and communication</li>
                    <li><strong>Password</strong> (stored encrypted via Firebase Authentication)</li>
                    <li><strong>Username</strong> — publicly visible, searchable by other users</li>
                    <li><strong>Registration date</strong></li>
                </ul>
                <p><strong>Legal basis:</strong> Art. 6(1)(b) GDPR (contract performance)</p>
                <h3>3.2 Profile Data (Optional)</h3>
                <p>You may optionally provide:</p>
                <ul>
                    <li>Biography / profile description</li>
                    <li>Privacy setting (public or private)</li>
                    <li>Avatar color</li>
                </ul>
                <p><strong>Legal basis:</strong> Art. 6(1)(a) GDPR (consent)</p>
                <h3>3.3 In-App Usage Data</h3>
                <ul>
                    <li><strong>Friends list</strong> — which users are connected to you as friends</li>
                    <li><strong>Friend requests</strong> — sent and received</li>
                    <li><strong>Check-ins</strong> (future feature) — venues where you "checked in"</li>
                </ul>
                <p><strong>Legal basis:</strong> Art. 6(1)(b) GDPR (contract performance)</p>
                <h3>3.4 Automatically Collected Technical Data</h3>
                <p>When using the app, the following data is transmitted to our service providers:</p>
                <ul>
                    <li>IP address (temporary, for connection establishment)</li>
                    <li>Device type and operating system</li>
                    <li>App version</li>
                    <li>Time of access</li>
                </ul>
                <p><strong>Legal basis:</strong> Art. 6(1)(f) GDPR (legitimate interests in technical functionality)</p>
            </section>
            <section>
                <h2>4. Third-Party Services and Data Processing</h2>
                <h3>4.1 Firebase (Google Ireland Limited)</h3>
                <p>We use Firebase services provided by Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Ireland) as our technical infrastructure:</p>
                <ul>
                    <li><strong>Firebase Authentication</strong> — for secure sign-in and account management</li>
                    <li><strong>Cloud Firestore</strong> — to store your profile and usage data</li>
                </ul>
                <p>Data processing is carried out on the basis of a data processing agreement under Art. 28 GDPR and EU Standard Contractual Clauses. Firebase servers may be located inside and outside the EU.<br/>More information on Google's privacy practices: <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">https://firebase.google.com/support/privacy</a></p>
                <p><strong>Legal basis:</strong> Art. 6(1)(b) GDPR, Art. 28 GDPR</p>
                <h3>4.2 Map Service CartoDB / Fastly</h3>
                <p>To display the venue map, we use map tiles from CartoDB, delivered via the Fastly content delivery network. Your IP address is transmitted to CartoDB/Fastly whenever the map is loaded.<br/>More information: <a href="https://carto.com/privacy/" target="_blank" rel="noopener noreferrer">https://carto.com/privacy/</a> | <a href="https://www.fastly.com/privacy/" target="_blank" rel="noopener noreferrer">https://www.fastly.com/privacy/</a></p>
                <p><strong>Legal basis:</strong> Art. 6(1)(f) GDPR (legitimate interests in map functionality)</p>
                <h3>4.3 Apple App Store (Apple Inc.)</h3>
                <p>Our app is distributed via the Apple App Store. Apple receives installation and usage statistics. We ourselves only receive this data in aggregated and anonymized form.<br/>Apple's privacy policy: <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">https://www.apple.com/legal/privacy/</a></p>
            </section>
            <section>
                <h2>5. Your Rights as a Data Subject</h2>
                <p>You have the following rights:</p>
                <h3>5.1 Right of Access (Art. 15 GDPR)</h3>
                <p>You may request information about the personal data we process about you.</p>
                <h3>5.2 Right to Rectification (Art. 16 GDPR)</h3>
                <p>You may request correction of inaccurate or completion of incomplete data.</p>
                <h3>5.3 Right to Erasure (Art. 17 GDPR)</h3>
                <p>You may request deletion of your personal data. You can delete your account entirely at any time within the app: <strong>Profile → Delete Account → Confirm with password</strong>. Deletion includes: Your Firebase Authentication account, Your profile in Firestore, Your friends list, All friend requests you have sent or received.</p>
                <h3>5.4 Right to Restriction of Processing (Art. 18 GDPR)</h3>
                <p>You may request restriction of processing of your data.</p>
                <h3>5.5 Right to Data Portability (Art. 20 GDPR)</h3>
                <p>You have the right to receive your data in a structured, commonly used format. Write to support@gigiluko.com.</p>
                <h3>5.6 Right to Object (Art. 21 GDPR)</h3>
                <p>You have the right to object to the processing of your data.</p>
                <h3>5.7 Right to Lodge a Complaint (Art. 77 GDPR)</h3>
                <p>You have the right to lodge a complaint with a data protection supervisory authority. The competent authority for us is: <strong>The State Commissioner for Data Protection and Freedom of Information Baden-Württemberg</strong>, Lautenschlagerstraße 20, 70173 Stuttgart, Germany. Website: <a href="https://www.baden-wuerttemberg.datenschutz.de/" target="_blank" rel="noopener noreferrer">https://www.baden-wuerttemberg.datenschutz.de/</a></p>
                <h3>5.8 Withdrawal of Consent</h3>
                <p>You may withdraw any consent given at any time with effect for the future. The lawfulness of processing carried out until withdrawal remains unaffected.</p>
            </section>
            <section>
                <h2>6. Data Security</h2>
                <p>We implement technical and organizational security measures to protect your data against accidental or intentional manipulation, loss, destruction, or unauthorized access. These include in particular: Encrypted data transmission (HTTPS/TLS), Secure password storage via Firebase Authentication, Database-level access controls (Firestore Security Rules), Regular review and updating of our security measures.</p>
            </section>
            <section>
                <h2>7. Changes to This Privacy Policy</h2>
                <p>We reserve the right to update this Privacy Policy to reflect changes in legal requirements or our services. The current Privacy Policy is always available at <a href="https://www.gigiluko.com/privacy" target="_blank" rel="noopener noreferrer">https://www.gigiluko.com/privacy</a>.</p>
            </section>
            <section>
                <h2>8. Contact</h2>
                <p>For any privacy-related questions, please contact: <strong>Email:</strong> <a href="mailto:support@gigiluko.com">support@gigiluko.com</a></p>
            </section>
        </LegalPage>
    );
};
export default PrivacyPolicy;
