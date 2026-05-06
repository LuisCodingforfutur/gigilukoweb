import React from "react";
import LegalPage from "../components/LegalPage";

const PrivacyPolicy: React.FC = () => {
    return (
        <LegalPage title="Privacy Policy" lastUpdated="6 May 2026">
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

                <h3>3.5 Push Notifications (Firebase Cloud Messaging)</h3>
                <p>With your explicit permission, we send push notifications to inform you about chat messages, friend requests, and venue updates. For this purpose, we process a device-specific token (FCM token) provided by Apple (APNs) or Google (FCM). The legal basis is your consent (Art. 6(1)(a) GDPR), which you can withdraw at any time via your device's notification settings. Without this token, we cannot deliver push notifications, but core app functionality remains unaffected.</p>

                <h3>3.6 Location Data</h3>
                <p>The Discover feature displays nearby venues on an interactive map. With your explicit permission, we access your device's GPS location while the app is in use to show your position relative to venues. Your precise location is processed only locally on your device and is never transmitted to our servers or stored. The legal basis is your consent (Art. 6(1)(a) GDPR). You can revoke location access at any time via your device's privacy settings. Without location access, the map functions but cannot center on your position.</p>

                <h3>3.7 Camera and Photo Library</h3>
                <p>When you upload a profile picture or create a post, we request access to your device's camera or photo library. Selected images are uploaded to Firebase Storage (Google Ireland Limited) and associated with your account. The legal basis is the performance of a contract (Art. 6(1)(b) GDPR) and your consent for the system permission (Art. 6(1)(a) GDPR). You may delete uploaded images at any time via the app.</p>

                <h3>3.8 Bluetooth and Venue Check-Ins</h3>
                <p>The check-in feature uses Bluetooth Low Energy (BLE) beacons placed in partner venues to detect your physical presence and enable automatic check-ins. With your explicit permission, we process beacon proximity signals to record check-in events linked to your account. The legal basis is your consent (Art. 6(1)(a) GDPR) and the performance of a contract (Art. 6(1)(b) GDPR). You can revoke Bluetooth access at any time via your device's privacy settings; manual check-ins remain available without Bluetooth.</p>
            </section>
            
            <section>
                <h2>4. Third-Party Services and Data Processing</h2>
                <h3>4.1 Firebase (Google Ireland Limited)</h3>
                <p>We use the following Firebase services (Google Ireland Limited):</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Firebase Authentication: secure sign-in and account management</li>
                    <li>Cloud Firestore: storage of user profiles, posts, friend relationships, and venue data</li>
                    <li>Firebase Realtime Database: real-time chat messages between users and with venues</li>
                    <li>Firebase Cloud Storage: storage of profile pictures and post images</li>
                    <li>Firebase Cloud Messaging (FCM): delivery of push notifications (see § 3.5)</li>
                    <li>Cloud Functions for Firebase: server-side processing of friend request acceptance, push notification dispatch, and transactional emails (e.g., password reset)</li>
                </ul>
                <p>Data processing is carried out based on a data processing agreement under Art. 28 GDPR. Some processing may take place on Google servers within the European Union. The legal bases are the performance of a contract (Art. 6(1)(b) GDPR) and our legitimate interest in providing functional, secure services (Art. 6(1)(f) GDPR).</p>
                
                <h3>4.2 Map Service CartoDB / Fastly</h3>
                <p>To display venue maps, we use CartoDB, delivered via the Fastly content delivery network. Your IP address is transmitted when loading the map based on our legitimate interest in providing location features (Art. 6(1)(f) GDPR).</p>

                <h3>4.3 Transactional Email Service (Resend)</h3>
                <p>For password reset emails, email verification, and other transactional communications, we use Resend (Resend, Inc., USA) as our email-delivery service. Your email address is transmitted to Resend solely for the purpose of delivering the email. The legal basis is the performance of a contract (Art. 6(1)(b) GDPR). For transfers to the USA, we rely on the EU-US Data Privacy Framework or appropriate Standard Contractual Clauses under Art. 46 GDPR.</p>
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
