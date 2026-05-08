import React from "react";
import LegalPage from "../components/LegalPage";

const CommunityGuidelines: React.FC = () => {
    return (
        <LegalPage title="Community Guidelines" lastUpdated="8 May 2026">
            <section>
                <p>GIGILUKO is a place to discover and share nightlife experiences. To keep this community safe, welcoming, and useful for everyone, all users must follow these guidelines.</p>
            </section>

            <section>
                <h2>1. What We Stand For</h2>
                <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Authenticity:</strong> Real venues, real moments, real people.</li>
                    <li><strong>Respect:</strong> Everyone in the community deserves to feel safe.</li>
                    <li><strong>Privacy:</strong> Don't share what isn't yours to share.</li>
                    <li><strong>Fun:</strong> This is about discovering nightlife, not arguing online.</li>
                </ul>
            </section>

            <section>
                <h2>2. What's Not Allowed</h2>

                <h3>2.1 Harassment and Hate</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Personal attacks, bullying, or threats against any user</li>
                    <li>Hate speech based on race, ethnicity, religion, gender, sexual orientation, disability, or any protected characteristic</li>
                    <li>Targeted harassment campaigns</li>
                </ul>

                <h3>2.2 Sexual Content</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Nudity, sexually explicit content, or sexual solicitation</li>
                    <li>Sexually suggestive content involving minors (zero tolerance, immediate ban + reporting to authorities)</li>
                </ul>

                <h3>2.3 Violence and Dangerous Content</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Graphic violence, gore, or content glorifying violence</li>
                    <li>Content promoting self-harm, suicide, or eating disorders</li>
                    <li>Threats of violence against persons or property</li>
                </ul>

                <h3>2.4 Illegal Activity</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Drug sales or solicitation</li>
                    <li>Illegal weapon sales</li>
                    <li>Stolen goods, fraud, or scams</li>
                    <li>Any content that violates German or EU law</li>
                </ul>

                <h3>2.5 Privacy Violations</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Sharing someone's personal information without their consent (doxxing)</li>
                    <li>Posting photos of identifiable people without their consent</li>
                    <li>Sharing private conversations or messages</li>
                </ul>

                <h3>2.6 Impersonation and Spam</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Pretending to be someone you're not</li>
                    <li>Operating multiple accounts to manipulate the platform</li>
                    <li>Mass-posting promotional content</li>
                    <li>Bots or automated activity</li>
                </ul>

                <h3>2.7 Intellectual Property</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Posting copyrighted content (music, art, brand assets) without permission</li>
                    <li>Plagiarism</li>
                </ul>
            </section>

            <section>
                <h2>3. What We Encourage</h2>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Genuine reviews and recommendations of venues you've been to</li>
                    <li>Photos that capture the actual vibe of a place</li>
                    <li>Helpful tips for fellow nightlife explorers</li>
                    <li>Coordinating meetups with friends</li>
                    <li>Constructive criticism</li>
                </ul>
            </section>

            <section>
                <h2>4. How to Report</h2>
                <p>If you see content that violates these guidelines:</p>
                <ol className="list-decimal pl-6 space-y-1">
                    <li>Tap the <strong>three-dot menu</strong> on any post or profile</li>
                    <li>Select <strong>Report</strong></li>
                    <li>Choose the reason and submit</li>
                </ol>
                <p>Reports are reviewed within <strong>24 hours</strong>. We take action including content removal, warnings, suspensions, or permanent bans.</p>
                <p>For urgent reports: <a href="mailto:support@gigiluko.com">support@gigiluko.com</a></p>
            </section>

            <section>
                <h2>5. Blocking Users</h2>
                <p>If someone is bothering you, you can block them via their profile. They won't be able to see your posts or contact you. Blocking is invisible — they won't be notified.</p>
            </section>

            <section>
                <h2>6. Consequences</h2>
                <p>Violations may result in:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Content removal</strong> — for minor violations or accidental missteps</li>
                    <li><strong>Warning</strong> — for first-time violations of moderate severity</li>
                    <li><strong>Temporary suspension (1-30 days)</strong> — for repeated or moderate violations</li>
                    <li><strong>Permanent ban</strong> — for severe violations (sexual content involving minors, threats of violence, doxxing, hate speech)</li>
                    <li><strong>Law enforcement reports</strong> — for content involving illegal activity</li>
                </ul>
            </section>

            <section>
                <h2>7. Appeals</h2>
                <p>If you believe a moderation decision was wrong, email <a href="mailto:support@gigiluko.com">support@gigiluko.com</a> with:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Your username</li>
                    <li>The content/account in question</li>
                    <li>Why you believe the decision was incorrect</li>
                </ul>
                <p>We respond within <strong>5 business days</strong>.</p>
            </section>

            <section>
                <h2>8. Updates</h2>
                <p>These guidelines may be updated as our community grows. Continued use of GIGILUKO after updates constitutes acceptance.</p>
            </section>

            <section>
                <h2>9. Contact</h2>
                <p><strong>GIGILUKO Technologies UG (haftungsbeschränkt) i.Gr.</strong><br/>Sirnauerstraße 1<br/>73779 Deizisau<br/>Germany<br/>Email: <a href="mailto:support@gigiluko.com">support@gigiluko.com</a></p>
                <p>See also: <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a></p>
            </section>
        </LegalPage>
    );
};
export default CommunityGuidelines;
