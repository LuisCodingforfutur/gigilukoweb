import React from "react";
import LegalPage from "../components/LegalPage";

const PrivacyPolicyDE: React.FC = () => {
    return (
        <LegalPage title="Datenschutzerklärung" lastUpdated="April 2026">
            <section>
                <h2>1. Verantwortlicher</h2>
                <p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
                <p><strong>GIGILUKO Technologies UG (haftungsbeschränkt) i.Gr.</strong><br/>Sirnauerstraße 1<br/>73779 Deizisau<br/>Deutschland<br/>E-Mail: <a href="mailto:support@gigiluko.com">support@gigiluko.com</a><br/>Geschäftsführer: Luis Gianluca Giuliano, Lukas Konstantin Haimayer</p>
            </section>
            <section>
                <h2>2. Allgemeines zur Datenverarbeitung</h2>
                <h3>2.1 Umfang der Verarbeitung personenbezogener Daten</h3>
                <p>Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen App und unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten unserer Nutzer erfolgt regelmäßig nur nach Einwilligung des Nutzers oder in den Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.</p>
                <h3>2.2 Rechtsgrundlage für die Verarbeitung personenbezogener Daten</h3>
                <ul>
                    <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) — bei Registrierung und Erstellung eines Profils</li>
                    <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) — zur Bereitstellung der App-Funktionen</li>
                    <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen) — zur Sicherstellung der technischen Funktionsfähigkeit</li>
                </ul>
                <h3>2.3 Datenlöschung und Speicherdauer</h3>
                <p>Die personenbezogenen Daten der betroffenen Person werden gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt. Eine Speicherung kann darüber hinaus erfolgen, wenn dies durch den europäischen oder nationalen Gesetzgeber in unionsrechtlichen Verordnungen, Gesetzen oder sonstigen Vorschriften, denen der Verantwortliche unterliegt, vorgesehen wurde.</p>
            </section>
            <section>
                <h2>3. Welche Daten wir erheben</h2>
                <h3>3.1 Registrierung und Nutzerkonto</h3>
                <p>Bei der Registrierung erheben wir folgende Daten:</p>
                <ul>
                    <li><strong>E-Mail-Adresse</strong> — zur Authentifizierung und Kontaktaufnahme</li>
                    <li><strong>Passwort</strong> (verschlüsselt gespeichert durch Firebase Authentication)</li>
                    <li><strong>Nutzername</strong> — öffentlich sichtbar, für andere Nutzer auffindbar</li>
                    <li><strong>Registrierungsdatum</strong></li>
                </ul>
                <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)</p>
                <h3>3.2 Profildaten (freiwillig)</h3>
                <p>Optional können Sie folgende Informationen in Ihrem Profil angeben:</p>
                <ul>
                    <li>Biografie / Profilbeschreibung</li>
                    <li>Privatsphäre-Einstellung (öffentlich oder privat)</li>
                    <li>Avatar-Farbe</li>
                </ul>
                <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</p>
                <h3>3.3 Nutzungsdaten innerhalb der App</h3>
                <ul>
                    <li><strong>Freundesliste</strong> — welche Nutzer mit Ihnen befreundet sind</li>
                    <li><strong>Freundschaftsanfragen</strong> — gesendete und empfangene Anfragen</li>
                    <li><strong>Check-ins</strong> (zukünftige Funktion) — an welchen Veranstaltungsorten Sie "eingecheckt" haben</li>
                </ul>
                <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)</p>
                <h3>3.4 Automatisch erhobene technische Daten</h3>
                <p>Bei der Nutzung der App werden automatisch folgende Daten an unsere Dienstleister übermittelt:</p>
                <ul>
                    <li>IP-Adresse (nur temporär, zur Verbindungsherstellung)</li>
                    <li>Gerätetyp und Betriebssystem</li>
                    <li>App-Version</li>
                    <li>Zeitpunkt des Zugriffs</li>
                </ul>
                <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen an technischer Funktionsfähigkeit)</p>
            </section>
            <section>
                <h2>4. Drittanbieter und Datenverarbeitung</h2>
                <h3>4.1 Firebase (Google Ireland Limited)</h3>
                <p>Wir nutzen Firebase-Dienste der Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irland) als technische Infrastruktur:</p>
                <ul>
                    <li><strong>Firebase Authentication</strong> — für sichere Anmeldung und Kontoverwaltung</li>
                    <li><strong>Cloud Firestore</strong> — zur Speicherung Ihrer Profil- und Nutzungsdaten</li>
                </ul>
                <p>Die Datenverarbeitung erfolgt auf Grundlage eines Auftragsverarbeitungsvertrags gemäß Art. 28 DSGVO sowie der EU-Standardvertragsklauseln. Firebase-Server können sich innerhalb und außerhalb der EU befinden.<br/>Weitere Informationen zum Datenschutz bei Google finden Sie unter: <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">https://firebase.google.com/support/privacy</a></p>
                <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO, Art. 28 DSGVO</p>
                <h3>4.2 Kartendienst CartoDB / Fastly</h3>
                <p>Zur Darstellung der Venue-Karte nutzen wir Kartenkacheln von CartoDB, ausgeliefert über das Content-Delivery-Network Fastly. Bei jedem Kartenaufruf wird Ihre IP-Adresse an CartoDB/Fastly übermittelt.<br/>Weitere Informationen: <a href="https://carto.com/privacy/" target="_blank" rel="noopener noreferrer">https://carto.com/privacy/</a> | <a href="https://www.fastly.com/privacy/" target="_blank" rel="noopener noreferrer">https://www.fastly.com/privacy/</a></p>
                <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen an Kartenfunktionalität)</p>
                <h3>4.3 Apple App Store (Apple Inc.)</h3>
                <p>Die Distribution unserer App erfolgt über den Apple App Store. Apple erhält hierbei Installations- und Nutzungsstatistiken. Wir selbst erhalten diese Daten nur aggregiert und anonymisiert.<br/>Datenschutzerklärung von Apple: <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">https://www.apple.com/legal/privacy/</a></p>
            </section>
            <section>
                <h2>5. Ihre Rechte als betroffene Person</h2>
                <p>Sie haben folgende Rechte:</p>
                <h3>5.1 Auskunftsrecht (Art. 15 DSGVO)</h3>
                <p>Sie können Auskunft über die von uns verarbeiteten personenbezogenen Daten verlangen.</p>
                <h3>5.2 Recht auf Berichtigung (Art. 16 DSGVO)</h3>
                <p>Sie können die Berichtigung unrichtiger oder die Vervollständigung unvollständiger Daten verlangen.</p>
                <h3>5.3 Recht auf Löschung (Art. 17 DSGVO)</h3>
                <p>Sie können die Löschung Ihrer personenbezogenen Daten verlangen. In der App können Sie Ihr Konto selbst jederzeit vollständig löschen: <strong>Profil → Delete Account → Passwort bestätigen</strong>. Die Löschung umfasst: Ihren Firebase Authentication-Account, Ihr Profil in Firestore, Ihre Freundesliste, Alle von Ihnen gesendeten und empfangenen Freundschaftsanfragen.</p>
                <h3>5.4 Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</h3>
                <p>Sie können die Einschränkung der Verarbeitung Ihrer Daten verlangen.</p>
                <h3>5.5 Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</h3>
                <p>Sie haben das Recht, Ihre Daten in einem strukturierten, gängigen Format zu erhalten. Schreiben Sie hierzu an support@gigiluko.com.</p>
                <h3>5.6 Widerspruchsrecht (Art. 21 DSGVO)</h3>
                <p>Sie haben das Recht, der Verarbeitung Ihrer Daten zu widersprechen.</p>
                <h3>5.7 Beschwerderecht bei der Aufsichtsbehörde (Art. 77 DSGVO)</h3>
                <p>Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren. Zuständige Aufsichtsbehörde für uns ist: <strong>Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg</strong>, Lautenschlagerstraße 20, 70173 Stuttgart. Website: <a href="https://www.baden-wuerttemberg.datenschutz.de/" target="_blank" rel="noopener noreferrer">https://www.baden-wuerttemberg.datenschutz.de/</a></p>
                <h3>5.8 Widerruf der Einwilligung</h3>
                <p>Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt davon unberührt.</p>
            </section>
            <section>
                <h2>6. Datensicherheit</h2>
                <p>Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder unberechtigten Zugriff zu schützen. Hierzu gehören insbesondere: Verschlüsselte Datenübertragung (HTTPS/TLS), Sichere Passwortspeicherung durch Firebase Authentication, Zugriffskontrollen auf Datenbankebene (Firestore Security Rules), Regelmäßige Überprüfung und Aktualisierung unserer Sicherheitsmaßnahmen.</p>
            </section>
            <section>
                <h2>7. Änderungen dieser Datenschutzerklärung</h2>
                <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte Rechtslagen oder bei Änderungen unserer Dienste anzupassen. Die aktuelle Datenschutzerklärung ist stets unter <a href="https://www.gigiluko.com/privacy" target="_blank" rel="noopener noreferrer">https://www.gigiluko.com/privacy</a> abrufbar.</p>
            </section>
            <section>
                <h2>8. Kontakt</h2>
                <p>Bei Fragen zum Datenschutz wenden Sie sich bitte an: <strong>E-Mail:</strong> <a href="mailto:support@gigiluko.com">support@gigiluko.com</a></p>
            </section>
        </LegalPage>
    );
};
export default PrivacyPolicyDE;
