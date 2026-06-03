import React from "react";
import LegalPage from "../components/LegalPage";

const DigitalServicesAct: React.FC = () => {
    return (
        <LegalPage title="Digital Services Act (DSA)" lastUpdated="May 2026">
            <section>
                <h2>1. Single Point of Contact (Art. 11 & 12 DSA)</h2>
                <p>In accordance with Articles 11 and 12 of the EU Digital Services Act (DSA), GIGILUKO Technologies UG has designated the following single point of contact for communications with Member States' authorities, the European Commission, the European Board for Digital Services, and our users:</p>
                <p><strong>Email:</strong> <a href="mailto:legal@gigiluko.com">legal@gigiluko.com</a></p>
                <p>Communications can be conducted in <strong>German</strong> and <strong>English</strong>.</p>
            </section>
            
            <section>
                <h2>2. Content Moderation & Reporting</h2>
                <p>GIGILUKO acts as a platform connecting users and venues in the nightlife sector. We are committed to maintaining a safe environment. Users can report illegal content or content that violates our Terms of Service directly within the app using the "Report" function on any post or venue profile, or by emailing our legal team directly.</p>
            </section>
            
            <section>
                <h2>3. Transparency & Monthly Active Users</h2>
                <p>Under Article 24(2) of the DSA, online platforms are required to publish information on the average monthly active recipients of the service in the EU. Currently, GIGILUKO is in the pre-launch phase (Waitlist). Upon official launch, we will monitor and publish our active user metrics in compliance with DSA thresholds.</p>
            </section>
        </LegalPage>
    );
};

export default DigitalServicesAct;
