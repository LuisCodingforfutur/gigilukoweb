import React from "react";
import LegalPage from "../components/LegalPage";

const PrivacyPolicyDE: React.FC = () => {
    return (
        <LegalPage title="Datenschutzerklärung" lastUpdated="April 2026">
            <section>
                <h2>1. Verantwortlicher</h2>
                <p>
                    Verantwortlicher im Sinne der Datenschutz-Grundverordnung
                    (DSGVO) ist:
                </p>
                <p className="contact-block">
                    <strong>GIGILUKO Technologies UG (haftungsbeschränkt) i.Gr.</strong>
                    <br />
                    Sirnauerstraße 1
                    <br />
                    73779 Deizisau
                    <br />
                    Deutschland
                    <br />
                    <br />
                    E-Mail:{" "}
                    <a href="mailto:support@gigiluko.com">support@gigiluko.com</a>
                    <br />
                    <br />
                    Geschäftsführer: Luis Gianluca Giuliano, Lukas Konstantin
                    Haimayer
                </p>
            </section>

            <section>
                <h2>2. Allgemeines zur Datenverarbeitung</h2>

                <h3>2.1 Umfang der Verarbeitung personenbezogener Daten</h3>
                <p>
                    Wir verarbeiten personenbezogene Daten unserer Nutzer
                    grundsätzlich nur, soweit dies zur Bereitstellung einer
                    funktionsfähigen App und unserer Inhalte und Leistungen
                    erforderlich ist. Die Verarbeitung personenbezogener Daten
                    unserer Nutzer erfolgt regelmäßig nur nach Einwilligung des
                    Nutzers oder in den Fällen, in denen eine vorherige
                    Einholung einer Einwilligung aus tatsächlichen Gründen nicht
                    möglich ist und die Verarbeitung der Daten durch gesetzliche
                    Vorschriften gestattet ist.
                </p>

                <h3>2.2 Rechtsgrundlage für die Verarbeitung</h3>
                <ul>
                    <li>
                        Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) — bei
                        Registrierung und Erstellung eines Profils
                    </li>
                    <li>
                        Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) — zur
                        Bereitstellung der App-Funktionen
                    </li>
                    <li>
                        Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen) —
                        zur Sicherstellung der technischen Funktionsfähigkeit
                    </li>
                </ul>

                <h3>2.3 Datenlöschung und Speicherdauer</h3>
                <p>
                    Die personenbezogenen Daten der betroffenen Person werden
                    gelöscht oder gesperrt, sobald der Zweck der Speicherung
                    entfällt. Eine Speicherung kann darüber hinaus erfolgen,
                    wenn dies durch den europäischen oder nationalen
                    Gesetzgeber in unionsrechtlichen Verordnungen, Gesetzen oder
                    sonstigen Vorschriften vorgesehen wurde.
                </p>
            </section>

            <section>
                <h2>3. Welche Daten wir erheben</h2>

                <h3>3.1 Registrierung und Nutzerkonto</h3>
                <p>Bei der Registrierung erheben wir folgende Daten:</p>
                <ul>
                    <li>
                        <strong>E-Mail-Adresse</strong> — zur Authentifizierung
                        und Kontaktaufnahme
                    </li>
                    <li>
                        <strong>Passwort</strong> (verschlüsselt gespeichert
                        durch Firebase Authentication)
                    </li>
                    <li>
                        <strong>Nutzername</strong> — öffentlich sichtbar, für
                        andere Nutzer auffindbar
                    </li>
                    <li>
                        <strong>Registrierungsdatum</strong>
                    </li>
                </ul>
                <p>
                    <em>
                        Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO
                        (Vertragserfüllung)
                    </em>
                </p>

                <h3>3.2 Profildaten (freiwillig)</h3>
                <p>Optional können Sie folgende Informationen angeben:</p>
                <ul>
                    <li>Biografie / Profilbeschreibung</li>
                    <li>Privatsphäre-Einstellung (öffentlich oder privat)</li>
                    <li>Avatar-Farbe</li>
                </ul>
                <p>
                    <em>
                        Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO
                        (Einwilligung)
                    </em>
                </p>

                <h3>3.3 Nutzungsdaten innerhalb der App</h3>
                <ul>
                    <li>
                        <strong>Freundesliste</strong> — welche Nutzer mit Ihnen
                        befreundet sind
                    </li>
                    <li>
                        <strong>Freundschaftsanfragen</strong> — gesendete und
                        empfangene Anfragen
                    </li>
                    <li>
                        <strong>Check-ins</strong> (zukünftige Funktion) — an
                        welchen Veranstaltungsorten Sie "eingecheckt" haben
                    </li>
                </ul>
                <p>
                    <em>
                        Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO
                        (Vertragserfüllung)
                    </em>
                </p>

                <h3>3.4 Automatisch erhobene technische Daten</h3>
                <p>
                    Bei der Nutzung der App werden automatisch folgende Daten an
                    unsere Dienstleister übermittelt:
                </p>
                <ul>
                    <li>IP-Adresse (temporär, zur Verbindungsherstellung)</li>
                    <li>Gerätetyp und Betriebssystem</li>
                    <li>App-Version</li>
                    <li>Zeitpunkt des Zugriffs</li>
                </ul>
            </section>

            <section>
                <h2>4. Drittanbieter und Datenverarbeitung</h2>

                <h3>4.1 Firebase (Google Ireland Limited)</h3>
                <p>
                    Wir nutzen Firebase-Dienste der Google Ireland Limited
                    (Gordon House, Barrow Street, Dublin 4, Irland) als
                    technische Infrastruktur:
                </p>
                <ul>
                    <li>
                        <strong>Firebase Authentication</strong> — für sichere
                        Anmeldung und Kontoverwaltung
                    </li>
                    <li>
                        <strong>Cloud Firestore</strong> — zur Speicherung Ihrer
                        Profil- und Nutzungsdaten
                    </li>
                </ul>
                <p>
                    Die Datenverarbeitung erfolgt auf Grundlage eines
                    Auftragsverarbeitungsvertrags gemäß Art. 28 DSGVO sowie der
                    EU-Standardvertragsklauseln. Firebase-Server können sich
                    innerhalb und außerhalb der EU befinden.
                </p>
                <p>
                    Weitere Informationen:{" "}
                    <a
                        href="https://firebase.google.com/support/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        firebase.google.com/support/privacy
                    </a>
                </p>

                <h3>4.2 Kartendienst CartoDB / Fastly</h3>
                <p>
                    Zur Darstellung der Venue-Karte nutzen wir Kartenkacheln von
                    CartoDB, ausgeliefert über das Content-Delivery-Network
                    Fastly. Bei jedem Kartenaufruf wird Ihre IP-Adresse an
                    CartoDB/Fastly übermittelt.
                </p>

                <h3>4.3 Apple App Store (Apple Inc.)</h3>
                <p>
                    Die Distribution unserer App erfolgt über den Apple App
                    Store. Apple erhält hierbei Installations- und
                    Nutzungsstatistiken. Wir selbst erhalten diese Daten nur
                    aggregiert und anonymisiert.
                </p>
            </section>

            <section>
                <h2>5. Ihre Rechte als betroffene Person</h2>

                <h3>5.1 Auskunftsrecht (Art. 15 DSGVO)</h3>
                <p>
                    Sie können Auskunft über die von uns verarbeiteten
                    personenbezogenen Daten verlangen.
                </p>

                <h3>5.2 Recht auf Berichtigung (Art. 16 DSGVO)</h3>
                <p>
                    Sie können die Berichtigung unrichtiger oder die
                    Vervollständigung unvollständiger Daten verlangen.
                </p>

                <h3>5.3 Recht auf Löschung (Art. 17 DSGVO)</h3>
                <p>
                    Sie können die Löschung Ihrer personenbezogenen Daten
                    verlangen. In der App können Sie Ihr Konto selbst jederzeit
                    vollständig löschen:
                </p>
                <p className="highlight-box">
                    <strong>
                        Profil → Delete Account → Passwort bestätigen
                    </strong>
                </p>
                <p>Die Löschung umfasst:</p>
                <ul>
                    <li>Ihren Firebase Authentication-Account</li>
                    <li>Ihr Profil in Firestore</li>
                    <li>Ihre Freundesliste</li>
                    <li>
                        Alle von Ihnen gesendeten und empfangenen
                        Freundschaftsanfragen
                    </li>
                </ul>

                <h3>5.4 Recht auf Einschränkung (Art. 18 DSGVO)</h3>
                <p>
                    Sie können die Einschränkung der Verarbeitung Ihrer Daten
                    verlangen.
                </p>

                <h3>5.5 Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</h3>
                <p>
                    Sie haben das Recht, Ihre Daten in einem strukturierten,
                    gängigen Format zu erhalten. Schreiben Sie hierzu an{" "}
                    <a href="mailto:support@gigiluko.com">
                        support@gigiluko.com
                    </a>
                    .
                </p>

                <h3>5.6 Widerspruchsrecht (Art. 21 DSGVO)</h3>
                <p>
                    Sie haben das Recht, der Verarbeitung Ihrer Daten zu
                    widersprechen.
                </p>

                <h3>5.7 Beschwerderecht (Art. 77 DSGVO)</h3>
                <p>
                    Sie haben das Recht, sich bei einer Datenschutz-
                    Aufsichtsbehörde zu beschweren. Zuständige Aufsichtsbehörde
                    für uns ist:
                </p>
                <p className="contact-block">
                    <strong>
                        Der Landesbeauftragte für den Datenschutz und die
                        Informationsfreiheit Baden-Württemberg
                    </strong>
                    <br />
                    Lautenschlagerstraße 20
                    <br />
                    70173 Stuttgart
                    <br />
                    <br />
                    Website:{" "}
                    <a
                        href="https://www.baden-wuerttemberg.datenschutz.de/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        baden-wuerttemberg.datenschutz.de
                    </a>
                </p>

                <h3>5.8 Widerruf der Einwilligung</h3>
                <p>
                    Eine erteilte Einwilligung können Sie jederzeit mit Wirkung
                    für die Zukunft widerrufen. Die Rechtmäßigkeit der bis zum
                    Widerruf erfolgten Verarbeitung bleibt davon unberührt.
                </p>
            </section>

            <section>
                <h2>6. Datensicherheit</h2>
                <p>
                    Wir setzen technische und organisatorische
                    Sicherheitsmaßnahmen ein, um Ihre Daten gegen zufällige oder
                    vorsätzliche Manipulationen, Verlust, Zerstörung oder
                    unberechtigten Zugriff zu schützen. Hierzu gehören
                    insbesondere:
                </p>
                <ul>
                    <li>Verschlüsselte Datenübertragung (HTTPS/TLS)</li>
                    <li>
                        Sichere Passwortspeicherung durch Firebase
                        Authentication
                    </li>
                    <li>
                        Zugriffskontrollen auf Datenbankebene (Firestore
                        Security Rules)
                    </li>
                    <li>
                        Regelmäßige Überprüfung und Aktualisierung unserer
                        Sicherheitsmaßnahmen
                    </li>
                </ul>
            </section>

            <section>
                <h2>7. Änderungen dieser Datenschutzerklärung</h2>
                <p>
                    Wir behalten uns vor, diese Datenschutzerklärung
                    anzupassen. Die aktuelle Version ist stets unter{" "}
                    <a href="https://www.gigiluko.com/privacy-de">
                        gigiluko.com/privacy-de
                    </a>{" "}
                    abrufbar.
                </p>
            </section>

            <section>
                <h2>8. Kontakt</h2>
                <p>Bei Fragen zum Datenschutz wenden Sie sich bitte an:</p>
                <p className="contact-block">
                    <strong>E-Mail:</strong>{" "}
                    <a href="mailto:support@gigiluko.com">
                        support@gigiluko.com
                    </a>
                </p>
            </section>
        </LegalPage>
    );
};

export default PrivacyPolicyDE;
