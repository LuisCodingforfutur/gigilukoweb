import React from "react";
import LegalPage from "../components/LegalPage";

const Impressum: React.FC = () => {
    return (
        <LegalPage title="Impressum" lastUpdated="April 2026">
            <section>
                <h2>Angaben gemäß § 5 TMG</h2>
                <p className="contact-block"><strong>GIGILUKO Technologies UG (haftungsbeschränkt) i.Gr.</strong><br />Sirnauerstraße 1<br />73779 Deizisau<br />Deutschland</p>
            </section>
            <section>
                <h2>Vertreten durch die Geschäftsführer</h2>
                <ul>
                    <li>Luis Gianluca Giuliano (einzelvertretungsberechtigt)</li>
                    <li>Lukas Konstantin Haimayer (einzelvertretungsberechtigt)</li>
                </ul>
            </section>
            <section>
                <h2>Kontakt</h2>
                <p className="contact-block">E-Mail: <a href="mailto:support@gigiluko.com">support@gigiluko.com</a><br />Website: <a href="https://www.gigiluko.com">www.gigiluko.com</a></p>
            </section>
        </LegalPage>
    );
};
export default Impressum;
