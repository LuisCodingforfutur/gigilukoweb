import React from "react";
import LegalPage from "../components/LegalPage";

const CommunityGuidelinesDE: React.FC = () => {
    return (
        <LegalPage title="Community Guidelines" lastUpdated="8. Mai 2026">
            <section>
                <p>GIGILUKO ist ein Ort, um Nightlife-Erfahrungen zu entdecken und zu teilen. Damit diese Community sicher, einladend und nützlich für alle bleibt, müssen alle Nutzer:innen diese Guidelines befolgen.</p>
            </section>

            <section>
                <h2>1. Worauf wir Wert legen</h2>
                <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Authentizität:</strong> Echte Venues, echte Momente, echte Menschen.</li>
                    <li><strong>Respekt:</strong> Jede:r in der Community verdient es, sich sicher zu fühlen.</li>
                    <li><strong>Privatsphäre:</strong> Teile nichts, was nicht dir gehört.</li>
                    <li><strong>Spaß:</strong> Hier geht es um Nightlife-Discovery, nicht um Online-Streit.</li>
                </ul>
            </section>

            <section>
                <h2>2. Was nicht erlaubt ist</h2>

                <h3>2.1 Belästigung und Hass</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Persönliche Angriffe, Mobbing oder Drohungen gegen andere Nutzer</li>
                    <li>Hassrede aufgrund von Rasse, Ethnie, Religion, Geschlecht, sexueller Orientierung, Behinderung oder anderen geschützten Merkmalen</li>
                    <li>Gezielte Belästigungskampagnen</li>
                </ul>

                <h3>2.2 Sexuelle Inhalte</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Nacktheit, sexuell explizite Inhalte oder sexuelle Anfragen</li>
                    <li>Sexuell suggestive Inhalte, die Minderjährige involvieren (Null-Toleranz, sofortige Sperrung + Meldung an Behörden)</li>
                </ul>

                <h3>2.3 Gewalt und gefährliche Inhalte</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Grafische Gewalt, blutige Bilder oder Verherrlichung von Gewalt</li>
                    <li>Inhalte, die Selbstverletzung, Suizid oder Essstörungen fördern</li>
                    <li>Gewaltandrohungen gegen Personen oder Eigentum</li>
                </ul>

                <h3>2.4 Illegale Aktivitäten</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Drogenverkauf oder -anfragen</li>
                    <li>Illegale Waffenverkäufe</li>
                    <li>Diebesgut, Betrug oder Scams</li>
                    <li>Alle Inhalte, die deutsches oder EU-Recht verletzen</li>
                </ul>

                <h3>2.5 Verletzung der Privatsphäre</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Teilen persönlicher Informationen anderer ohne deren Einwilligung (Doxxing)</li>
                    <li>Posten von Fotos identifizierbarer Personen ohne deren Einwilligung</li>
                    <li>Teilen privater Konversationen oder Nachrichten</li>
                </ul>

                <h3>2.6 Identitätsdiebstahl und Spam</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Sich als jemand anders ausgeben</li>
                    <li>Mehrfach-Accounts zur Plattform-Manipulation</li>
                    <li>Massen-Posten von Werbe-Inhalten</li>
                    <li>Bots oder automatisierte Aktivität</li>
                </ul>

                <h3>2.7 Geistiges Eigentum</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Posten urheberrechtlich geschützter Inhalte ohne Erlaubnis</li>
                    <li>Plagiate</li>
                </ul>
            </section>

            <section>
                <h2>3. Was wir fördern</h2>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Authentische Reviews und Empfehlungen zu besuchten Venues</li>
                    <li>Fotos, die den echten Vibe eines Ortes einfangen</li>
                    <li>Hilfreiche Tipps für andere Nightlife-Entdecker</li>
                    <li>Treffen mit Freunden koordinieren</li>
                    <li>Konstruktive Kritik</li>
                </ul>
            </section>

            <section>
                <h2>4. Wie man meldet</h2>
                <p>Wenn du Inhalte siehst, die diese Guidelines verletzen:</p>
                <ol className="list-decimal pl-6 space-y-1">
                    <li>Tippe auf das <strong>Drei-Punkte-Menü</strong> auf einem Post oder Profil</li>
                    <li>Wähle <strong>Melden</strong></li>
                    <li>Wähle den Grund und sende ab</li>
                </ol>
                <p>Meldungen werden innerhalb von <strong>24 Stunden</strong> geprüft. Wir nehmen Maßnahmen wie Inhalt-Entfernung, Verwarnungen, Sperrungen oder permanente Bans.</p>
                <p>Bei dringenden Meldungen: <a href="mailto:support@gigiluko.com">support@gigiluko.com</a></p>
            </section>

            <section>
                <h2>5. Nutzer blockieren</h2>
                <p>Wenn jemand dich stört, kannst du ihn/sie über das Profil blockieren. Sie können dann deine Posts nicht mehr sehen oder dich kontaktieren. Blockieren ist unsichtbar — sie werden nicht benachrichtigt.</p>
            </section>

            <section>
                <h2>6. Konsequenzen</h2>
                <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Inhalt-Entfernung</strong> — bei kleinen oder versehentlichen Verstößen</li>
                    <li><strong>Verwarnung</strong> — bei erstmaligen Verstößen mittlerer Schwere</li>
                    <li><strong>Vorübergehende Sperrung (1-30 Tage)</strong> — bei wiederholten oder mittelschweren Verstößen</li>
                    <li><strong>Permanenter Bann</strong> — bei schweren Verstößen (sexuelle Inhalte mit Minderjährigen, Gewaltandrohungen, Doxxing, Hassrede)</li>
                    <li><strong>Strafanzeige</strong> — bei Inhalten mit illegaler Aktivität</li>
                </ul>
            </section>

            <section>
                <h2>7. Einsprüche</h2>
                <p>Wenn du glaubst, eine Moderations-Entscheidung war falsch, schreibe an <a href="mailto:support@gigiluko.com">support@gigiluko.com</a> mit:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Deinem Username</li>
                    <li>Dem betroffenen Inhalt / Account</li>
                    <li>Warum du die Entscheidung für falsch hältst</li>
                </ul>
                <p>Wir antworten innerhalb von <strong>5 Werktagen</strong>.</p>
            </section>

            <section>
                <h2>8. Updates</h2>
                <p>Diese Guidelines können bei Wachstum der Community aktualisiert werden. Die fortgesetzte Nutzung von GIGILUKO nach Updates gilt als Zustimmung.</p>
            </section>

            <section>
                <h2>9. Kontakt</h2>
                <p><strong>GIGILUKO Technologies UG (haftungsbeschränkt) i.Gr.</strong><br/>Sirnauerstraße 1<br/>73779 Deizisau<br/>Deutschland<br/>E-Mail: <a href="mailto:support@gigiluko.com">support@gigiluko.com</a></p>
                <p>Siehe auch: <a href="/terms-de">Nutzungsbedingungen</a> | <a href="/privacy-de">Datenschutzerklärung</a></p>
            </section>
        </LegalPage>
    );
};
export default CommunityGuidelinesDE;
