import React from "react";
import LegalPage from "../components/LegalPage";

const PrivacyPolicyDE: React.FC = () => {
    return (
        <LegalPage title="Datenschutzerklärung" lastUpdated="6. Mai 2026">
            <section>
                <h2>1. Verantwortlicher</h2>
                <p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
                <p><strong>GIGILUKO Technologies UG (haftungsbeschränkt) i.Gr.</strong><br/>Sirnauerstraße 1<br/>73779 Deizisau<br/>Deutschland<br/>E-Mail: <a href="mailto:support@gigiluko.com">support@gigiluko.com</a><br/>Geschäftsführer: Luis Gianluca Giuliano, Lukas Konstantin Haimayer</p>
            </section>
            
            <section>
                <h2>2. Allgemeines zur Datenverarbeitung</h2>
                <p>Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Plattform, App sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung erfolgt primär auf Basis von Vertragserfüllungen, berechtigten Interessen oder Ihrer ausdrücklichen Einwilligung.</p>
                <p>Die Daten werden gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt, sofern keine gesetzlichen Aufbewahrungsfristen dem entgegenstehen.</p>
            </section>
            
            <section>
                <h2>3. Datenerfassung auf unserer Website und in der App</h2>
                
                <h3>3.1 Hosting und Server-Log-Dateien</h3>
                <p>Unsere Website wird bei externen Dienstleistern (z. B. Vercel Inc.) gehostet. Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind unter anderem: IP-Adresse, Browsertyp und -version, verwendetes Betriebssystem, Referrer URL und Uhrzeit der Serveranfrage. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technisch fehlerfreien Darstellung und Optimierung der Website).</p>

                <h3>3.2 Cookies und Local Storage</h3>
                <p>Zur Bereitstellung unserer Website nutzen wir teilweise Cookies sowie vergleichbare Speichertechnologien (wie den Local Storage Ihres Browsers). Diese dienen dazu, unsere Plattform nutzerfreundlicher und sicherer zu gestalten (z.B. zur Speicherung Ihrer Zustimmung im Cookie-Banner). Die Speicherung zwingend erforderlicher Daten erfolgt auf Basis von § 25 Abs. 2 TDDDG i.V.m. Art. 6 Abs. 1 lit. f DSGVO.</p>

                <h3>3.3 Waitlist- und Kontaktformular</h3>
                <p>Wenn Sie sich mit Ihrer E-Mail-Adresse in unsere Waitlist eintragen oder uns per E-Mail kontaktieren, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für den Versand von Updates zum Launch von GIGILUKO bei uns gespeichert. Diese Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sowie zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).</p>

                <h3>3.4 Registrierung und App-Nutzung</h3>
                <p>Bei der Erstellung eines Accounts erfassen wir zwingend notwendige Daten (E-Mail, verschlüsseltes Passwort, Nutzername) zur Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO). Optionale Profildaten verarbeiten wir auf Basis Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). App-Funktionen wie Freundeslisten und Check-ins dienen der Bereitstellung der Kernfunktionen unserer Plattform.</p>

                <h3>3.5 Push-Benachrichtigungen (Firebase Cloud Messaging)</h3>
                <p>Mit Ihrer ausdrücklichen Einwilligung senden wir Ihnen Push-Benachrichtigungen, um Sie über Chat-Nachrichten, Freundschaftsanfragen und Venue-Updates zu informieren. Hierzu verarbeiten wir ein gerätespezifisches Token (FCM-Token), das von Apple (APNs) oder Google (FCM) bereitgestellt wird. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie jederzeit über die Benachrichtigungseinstellungen Ihres Geräts widerrufen können. Ohne dieses Token können wir keine Push-Benachrichtigungen zustellen; die Kernfunktionalität der App bleibt davon unberührt.</p>

                <h3>3.6 Standortdaten</h3>
                <p>Die Discover-Funktion zeigt Venues in Ihrer Umgebung auf einer interaktiven Karte. Mit Ihrer ausdrücklichen Einwilligung greifen wir auf den GPS-Standort Ihres Geräts zu, während die App in Benutzung ist, um Ihre Position relativ zu Venues anzuzeigen. Ihre präzise Position wird ausschließlich lokal auf Ihrem Gerät verarbeitet und niemals an unsere Server übermittelt oder dort gespeichert. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können den Standortzugriff jederzeit über die Datenschutzeinstellungen Ihres Geräts widerrufen. Ohne Standortzugriff funktioniert die Karte weiterhin, kann aber nicht auf Ihre Position zentriert werden.</p>

                <h3>3.7 Kamera- und Fotozugriff</h3>
                <p>Beim Hochladen eines Profilbilds oder beim Erstellen eines Posts fordern wir Zugriff auf die Kamera oder Fotomediathek Ihres Geräts an. Ausgewählte Bilder werden in Firebase Storage (Google Ireland Limited) hochgeladen und Ihrem Account zugeordnet. Rechtsgrundlage ist die Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO) sowie Ihre Einwilligung für die Systemberechtigung (Art. 6 Abs. 1 lit. a DSGVO). Hochgeladene Bilder können Sie jederzeit über die App löschen.</p>

                <h3>3.8 Bluetooth und Venue-Check-Ins</h3>
                <p>Die Check-In-Funktion nutzt Bluetooth Low Energy (BLE) Beacons, die in Partner-Venues platziert sind, um Ihre physische Anwesenheit zu erkennen und automatische Check-Ins zu ermöglichen. Mit Ihrer ausdrücklichen Einwilligung verarbeiten wir Beacon-Näherungssignale, um Check-In-Ereignisse mit Ihrem Account zu verknüpfen. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und die Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO). Sie können den Bluetooth-Zugriff jederzeit über die Datenschutzeinstellungen Ihres Geräts widerrufen; manuelle Check-Ins bleiben auch ohne Bluetooth verfügbar.</p>
            </section>
            
            <section>
                <h2>4. Drittanbieter und Tools</h2>
                <h3>4.1 Firebase (Google Ireland Limited)</h3>
                <p>Wir nutzen die folgenden Firebase-Dienste (Google Ireland Limited):</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Firebase Authentication: sichere Anmeldung und Account-Verwaltung</li>
                    <li>Cloud Firestore: Speicherung von Nutzerprofilen, Posts, Freundschaftsbeziehungen und Venue-Daten</li>
                    <li>Firebase Realtime Database: Echtzeit-Chatnachrichten zwischen Nutzern und mit Venues</li>
                    <li>Firebase Cloud Storage: Speicherung von Profilbildern und Post-Bildern</li>
                    <li>Firebase Cloud Messaging (FCM): Zustellung von Push-Benachrichtigungen (siehe § 3.5)</li>
                    <li>Cloud Functions for Firebase: serverseitige Verarbeitung von Freundschaftsanfragen-Annahmen, Push-Versand und transaktionaler E-Mails (z.B. Passwort-Reset)</li>
                </ul>
                <p>Die Verarbeitung erfolgt auf Basis eines Auftragsverarbeitungsvertrages (AVV) gemäß Art. 28 DSGVO. Einige Verarbeitungen können auf Google-Servern innerhalb der Europäischen Union stattfinden. Rechtsgrundlagen sind die Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO) und unser berechtigtes Interesse an der Bereitstellung funktionsfähiger, sicherer Dienste (Art. 6 Abs. 1 lit. f DSGVO).</p>
                
                <h3>4.2 Kartendienst CartoDB / Fastly</h3>
                <p>Für die Darstellung unserer interaktiven Venue-Karten binden wir Kartenmaterial von CartoDB über das Content-Delivery-Network Fastly ein. Hierbei wird aus technischen Gründen Ihre IP-Adresse übertragen. Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p>

                <h3>4.3 Transaktionaler E-Mail-Versand (Resend)</h3>
                <p>Für Passwort-Reset-E-Mails, E-Mail-Verifizierungen und andere transaktionale Kommunikation nutzen wir Resend (Resend, Inc., USA) als E-Mail-Zustelldienst. Ihre E-Mail-Adresse wird ausschließlich zum Zweck der E-Mail-Zustellung an Resend übermittelt. Rechtsgrundlage ist die Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO). Für Datenübertragungen in die USA stützen wir uns auf das EU-US Data Privacy Framework oder geeignete Standardvertragsklauseln gemäß Art. 46 DSGVO.</p>
            </section>
            
            <section>
                <h2>5. Ihre Rechte als betroffene Person</h2>
                <p>Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten (Art. 15 DSGVO), deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung. Weiterhin haben Sie ein Recht auf Berichtigung (Art. 16 DSGVO), Sperrung oder Löschung dieser Daten (Art. 17 DSGVO), auf Einschränkung der Verarbeitung (Art. 18 DSGVO) und auf Datenübertragbarkeit (Art. 20 DSGVO).</p>
                <p>Eine erteilte Einwilligung können Sie jederzeit formlos per E-Mail widerrufen (Art. 7 Abs. 3 DSGVO).</p>

                <div className="bg-white/10 p-6 rounded-2xl border border-white/20 my-6">
                    <h3 className="text-xl font-bold uppercase mb-2">Widerspruchsrecht (Art. 21 DSGVO)</h3>
                    <p className="font-bold">WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN ÜBERWIEGEN.</p>
                </div>

                <p>Ihnen steht des Weiteren ein Beschwerderecht bei der zuständigen Aufsichtsbehörde (Landesbeauftragter für den Datenschutz Baden-Württemberg) zu (Art. 77 DSGVO).</p>
            </section>
            
            <section>
                <h2>6. Datensicherheit und SSL-/TLS-Verschlüsselung</h2>
                <p>Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte (wie zum Beispiel Anfragen über Formulare) nutzt unsere Website eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
                <p>Bitte beachten Sie, dass die Datenübertragung im Internet (etwa bei der Kommunikation per E-Mail) grundsätzliche Sicherheitsrisiken bergen kann. Ein absoluter Schutz der Daten vor dem unbefugten Zugriff durch Dritte lässt sich technisch nicht vollständig garantieren.</p>
            </section>
            
            <section>
                <h2>7. Kontakt bei Datenschutzfragen</h2>
                <p>Für die Ausübung Ihrer Rechte sowie für alle weiteren Fragen zum Thema Datenschutz stehen wir Ihnen unter folgender Adresse zur Verfügung: <strong>support@gigiluko.com</strong></p>
            </section>
        </LegalPage>
    );
};
export default PrivacyPolicyDE;
