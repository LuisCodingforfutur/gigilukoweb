import React from "react";
import LegalPage from "../components/LegalPage";

const TermsOfService: React.FC = () => {
    return (
        <LegalPage title="Terms of Service" lastUpdated="May 2026">
            <section>
                <h2>1. Provider and Scope</h2>
                <p>These Terms of Service govern the use of the mobile application <strong>GIGILUKO</strong> (the "App") provided by:</p>
                <p><strong>GIGILUKO Technologies UG (haftungsbeschränkt) i.Gr.</strong><br/>Sirnauerstraße 1<br/>73779 Deizisau<br/>Germany<br/>Email: <a href="mailto:support@gigiluko.com">support@gigiluko.com</a></p>
                <p>By creating an account, you accept these Terms of Service.</p>
            </section>
            <section>
                <h2>2. Service Description</h2>
                <p>GIGILUKO is a platform for discovering nightlife venues (bars, clubs, lounges). The App allows you to:</p>
                <ul>
                    <li>Search and view venues on a map</li>
                    <li>Create a personal profile</li>
                    <li>Add friends and send friend requests</li>
                    <li>Additional features are added progressively</li>
                </ul>
                <p>The App is under active development. Features may change or be removed without prior notice.</p>
            </section>
            <section>
                <h2>3. Registration and User Account</h2>
                <h3>3.1 Requirements</h3>
                <ul>
                    <li>You must be at least <strong>16 years old</strong>. Minors aged 16 to 18 require parental consent.</li>
                    <li>You may create only one account per person.</li>
                    <li>All registration information must be truthful.</li>
                </ul>
                <h3>3.2 Credentials</h3>
                <p>You are responsible for keeping your password confidential and for the security of your account. If you suspect unauthorized access, please notify us immediately at <a href="mailto:support@gigiluko.com">support@gigiluko.com</a>.</p>
                <h3>3.3 Account Deletion</h3>
                <p>You may delete your account at any time: <strong>Profile → Delete Account</strong>. Deletion is irreversible and includes all data you have created.</p>
            </section>
            <section>
                <h2>4. Rules of Conduct</h2>
                <p>When using the App, you agree NOT to:</p>
                <ul>
                    <li>Engage in <strong>unlawful behavior</strong> of any kind</li>
                    <li><strong>Harass, hate-speech, or discriminate</strong> against other users</li>
                    <li><strong>Distribute spam, scams, or malware</strong></li>
                    <li>Use <strong>false identities</strong> or impersonate others</li>
                    <li><strong>Exploit technical vulnerabilities</strong> or tamper with the App</li>
                    <li>Engage in <strong>automated scraping</strong> or unauthorized data collection</li>
                    <li><strong>Infringe on third-party rights</strong> (especially copyright, trademarks)</li>
                    <li><strong>Use the App if you are under 16 years old</strong></li>
                </ul>
                <p>Violations may result in suspension or deletion of your account.</p>
                <h3>4.1 Zero Tolerance for Objectionable Content</h3>
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20 my-6">
                    <p className="font-bold uppercase mb-2">GIGILUKO MAINTAINS ZERO TOLERANCE FOR OBJECTIONABLE CONTENT, HARASSMENT, OR ABUSIVE BEHAVIOR.</p>
                </div>
                <p>Reports are reviewed within <strong>24 hours</strong> via the in-app report function. We may immediately remove content, warn or suspend users, terminate accounts, and report severe violations to law enforcement. See also our <a href="/community-guidelines">Community Guidelines</a>.</p>
            </section>
            <section>
                <h2>5. User Content</h2>
                <h3>5.1 Your Content</h3>
                <p>You retain ownership of all content you post in the App (profile pictures, bio, posts). By publishing content, you grant us a non-exclusive, worldwide, royalty-free license to display, distribute, and process this content as necessary to operate the service.</p>
                <h3>5.2 Responsibility</h3>
                <p>You are solely responsible for the content you post. You warrant that your content does not infringe on any third-party rights.</p>
                <h3>5.3 Reporting Infringements</h3>
                <p>If you believe content in the App infringes your rights, please contact <a href="mailto:support@gigiluko.com">support@gigiluko.com</a>. We review every report and remove infringing content promptly.</p>
            </section>
            <section>
                <h2>6. Venue Information</h2>
                <p>All venue information displayed in the App (hours, addresses, ratings) is provided without warranty. We assume no liability for the timeliness, completeness, or accuracy of this information. Please verify important details directly with the venue.</p>
            </section>
            <section>
                <h2>7. Availability</h2>
                <p>We strive for high availability of the App but cannot guarantee uninterrupted service. Maintenance, technical issues, or force majeure may cause temporary outages.</p>
            </section>
            <section>
                <h2>8. Liability</h2>
                <h3>8.1 Limitation of Liability</h3>
                <p>We are liable without limitation for damages arising from injury to life, body, or health, as well as for intent and gross negligence.</p>
                <p>For slight negligence, we are liable only for breach of material contractual obligations. In such cases, liability is limited to foreseeable damages typical for the contract.</p>
                <p>For other damages caused by slight negligence, we are not liable.</p>
                <h3>8.2 Third-Party Content</h3>
                <p>We assume no responsibility for content posted by other users. We do not pre-screen such content but promptly remove reported unlawful content.</p>
            </section>
            <section>
                <h2>9. Changes to These Terms</h2>
                <p>We may modify these Terms if:</p>
                <ul>
                    <li>Legal changes require it</li>
                    <li>Court rulings oblige us to</li>
                    <li>New App features necessitate it</li>
                </ul>
                <p>Changes will be communicated to you at least 4 weeks before taking effect via email or in-app notification. If you do not object within this period, the amended terms are deemed accepted.</p>
            </section>
            <section>
                <h2>10. Final Provisions</h2>
                <h3>10.1 Governing Law</h3>
                <p>German law applies, excluding the UN Convention on Contracts for the International Sale of Goods. Mandatory consumer protection laws of your country of residence remain unaffected.</p>
                <h3>10.2 Jurisdiction</h3>
                <p>Place of jurisdiction for disputes with merchants is Stuttgart, Germany.</p>
                <h3>10.3 Severability</h3>
                <p>If individual provisions of these Terms are invalid, this does not affect the validity of the remaining provisions.</p>
            </section>
            <section>
                <h2>11. Apple App Store Terms</h2>
                <p>If you accessed the App via the Apple App Store, you acknowledge:</p>
                <ul>
                    <li>These Terms are between you and GIGILUKO, not Apple. Apple is not responsible for the App or its content.</li>
                    <li>Apple has no obligation to provide maintenance or support for the App.</li>
                    <li>In case of failure to conform to applicable warranty, you may notify Apple, who will refund the purchase price (if any). Apple has no other warranty obligation.</li>
                    <li>Apple is a third-party beneficiary of these Terms and has the right to enforce them against you.</li>
                </ul>
            </section>
            <section>
                <h2>12. Contact</h2>
                <p>For questions about these Terms, please contact:</p>
                <p><strong>Email:</strong> <a href="mailto:support@gigiluko.com">support@gigiluko.com</a></p>
            </section>
        </LegalPage>
    );
};
export default TermsOfService;
