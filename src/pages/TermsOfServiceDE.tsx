import React from "react";
import LegalPage from "../components/LegalPage";

const TermsOfServiceDE: React.FC = () => {
    return (
        <LegalPage title="Nutzungsbedingungen" lastUpdated="April 2026">
            <section>
                <h2>1. Anbieter und Geltungsbereich</h2>
                <p>Diese Nutzungsbedingungen regeln die Nutzung der mobilen Anwendung <strong>GIGILUKO</strong> (nachfolgend "App") der:</p>
                <p className="contact-block"><strong>GIGILUKO Technologies UG (haftungsbeschränkt) i.Gr.</strong><br />Sirnauerstraße 1<br />73779 Deizisau<br />Deutschland<br />E-Mail: <a href="mailto:support@gigiluko.com">support@gigiluko.com</a></p>
            </section>
            <section>
                <h2>2. Beschreibung des Dienstes</h2>
                <p>GIGILUKO ist eine Plattform zur Entdeckung von Nachtleben-Locations.</p>
            </section>
        </LegalPage>
    );
};
export default TermsOfServiceDE;
