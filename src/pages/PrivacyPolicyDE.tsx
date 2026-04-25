import React from "react";
import LegalPage from "../components/LegalPage";

const PrivacyPolicyDE: React.FC = () => {
    return (
        <LegalPage title="Datenschutzerklärung" lastUpdated="April 2026">
            <section>
                <h2>1. Verantwortlicher</h2>
                <p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
                <p className="contact-block"><strong>GIGILUKO Technologies UG (haftungsbeschränkt) i.Gr.</strong><br />Sirnauerstraße 1<br />73779 Deizisau<br />Deutschland<br /><br />E-Mail: <a href="mailto:support@gigiluko.com">support@gigiluko.com</a><br /><br />Geschäftsführer: Luis Gianluca Giuliano, Lukas Konstantin Haimayer</p>
            </section>
            <section>
                <h2>2. Allgemeines zur Datenverarbeitung</h2>
                <h3>2.1 Umfang der Verarbeitung</h3>
                <p>Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen App und unserer Inhalte und Leistungen erforderlich ist.</p>
                <h3>2.2 Rechtsgrundlage</h3>
                <ul>
                    <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
                    <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)</li>
                    <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen)</li>
                </ul>
            </section>
        </LegalPage>
    );
};
export default PrivacyPolicyDE;
