import React from "react";
import LegalPage from "../components/LegalPage";

const PrivacyPolicy: React.FC = () => {
    return (
        <LegalPage title="Privacy Policy" lastUpdated="April 2026">
            <section>
                <h2>1. Controller</h2>
                <p>The controller responsible for data processing under the EU General Data Protection Regulation (GDPR) is:</p>
                <p className="contact-block"><strong>GIGILUKO Technologies UG (haftungsbeschränkt) i.Gr.</strong><br />Sirnauerstraße 1<br />73779 Deizisau<br />Germany<br /><br />Email: <a href="mailto:support@gigiluko.com">support@gigiluko.com</a><br /><br />Managing Directors: Luis Gianluca Giuliano, Lukas Konstantin Haimayer</p>
            </section>
            <section>
                <h2>2. General Information on Data Processing</h2>
                <h3>2.1 Scope of Data Processing</h3>
                <p>We process personal data of our users only insofar as this is necessary to provide a functional application and our content and services.</p>
                <h3>2.2 Legal Basis</h3>
                <ul>
                    <li>Art. 6(1)(a) GDPR (consent) — for registration and profile creation</li>
                    <li>Art. 6(1)(b) GDPR (contract performance) — to provide app functions</li>
                    <li>Art. 6(1)(f) GDPR (legitimate interests) — to ensure technical functionality</li>
                </ul>
            </section>
        </LegalPage>
    );
};
export default PrivacyPolicy;
