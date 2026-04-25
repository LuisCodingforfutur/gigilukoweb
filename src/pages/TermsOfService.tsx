import React from "react";
import LegalPage from "../components/LegalPage";

const TermsOfService: React.FC = () => {
    return (
        <LegalPage title="Terms of Service" lastUpdated="April 2026">
            <section>
                <h2>1. Provider and Scope</h2>
                <p>These Terms of Service govern the use of the mobile application <strong>GIGILUKO</strong> (the "App") provided by:</p>
                <p className="contact-block"><strong>GIGILUKO Technologies UG (haftungsbeschränkt) i.Gr.</strong><br />Sirnauerstraße 1<br />73779 Deizisau<br />Germany<br />Email: <a href="mailto:support@gigiluko.com">support@gigiluko.com</a></p>
            </section>
            <section>
                <h2>2. Service Description</h2>
                <p>GIGILUKO is a platform for discovering nightlife venues (bars, clubs, lounges).</p>
            </section>
        </LegalPage>
    );
};
export default TermsOfService;
