import React from "react";
import LegalPage from "../components/LegalPage";

const Impressum: React.FC = () => {
    return (
        <LegalPage title="Impressum" lastUpdated="April 2026">
            <section>
                <h2>Angaben gemäß § 5 TMG</h2>
                <p><strong>GIGILUKO Technologies UG (haftungsbeschränkt) i.Gr.</strong><br/>Sirnauerstraße 1<br/>73779 Deizisau<br/>Deutschland</p>
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
                <p>E-Mail: <a href="mailto:support@gigiluko.com">support@gigiluko.com</a><br/>Website: <a href="https://www.gigiluko.com">https://www.gigiluko.com</a></p>
            </section>
            <section>
                <h2>Rechtsform und Status</h2>
                <p>Die Gesellschaft befindet sich derzeit in Gründung (i.Gr.). Die Eintragung im Handelsregister ist in Vorbereitung.</p>
            </section>
            <section>
                <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
                <p>Luis Gianluca Giuliano<br/>Sirnauerstraße 1<br/>73779 Deizisau<br/>Deutschland</p>
            </section>
            <section>
                <h2>EU-Streitschlichtung</h2>
                <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a></p>
                <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
            </section>
            <section>
                <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
                <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            </section>
            <section>
                <h2>Haftung für Inhalte</h2>
                <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
            </section>
            <section>
                <h2>Haftung für Links</h2>
                <p>Unser Angebot enthält gegebenenfalls Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
            </section>
            <section>
                <h2>Urheberrecht</h2>
                <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
            </section>
        </LegalPage>
    );
};
export default Impressum;
