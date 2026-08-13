import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: "Privacyverklaring van WielaardMarine.",
  alternates: { canonical: "/privacyverklaring" },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="font-heading text-navy text-xl sm:text-2xl pt-4">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function PrivacyverklaringPage() {
  return (
    <div className="bg-mist min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-azure text-xs font-mono uppercase tracking-widest mb-3">
            Juridisch
          </p>
          <h1 className="font-heading text-navy text-4xl sm:text-5xl mb-5">
            Privacyverklaring
          </h1>
          <p className="text-ink-muted text-sm">
            Laatst bijgewerkt: 13 augustus 2026
          </p>
        </div>

        <div className="space-y-8 text-ink-muted leading-relaxed text-sm">
          <p>
            WielaardMarine hecht veel waarde aan de bescherming van uw
            persoonsgegevens. In deze privacyverklaring leggen wij uit welke
            gegevens wij verzamelen, waarom wij dat doen en welke rechten u
            heeft. Wij houden ons daarbij aan de Algemene Verordening
            Gegevensbescherming (AVG).
          </p>

          <Section title="1. Wie zijn wij?">
            <p>
              WielaardMarine is verantwoordelijk voor de verwerking van uw
              persoonsgegevens zoals beschreven in deze verklaring.
            </p>
            <dl className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-x-4 gap-y-2 border-l-2 border-azure/30 pl-4">
              <dt className="text-navy font-medium">Bedrijfsnaam</dt>
              <dd>WielaardMarine</dd>
              <dt className="text-navy font-medium">Eigenaar</dt>
              <dd>Julian Wielaard</dd>
              <dt className="text-navy font-medium">Adres</dt>
              <dd>Maaslaantje, Maasdam</dd>
              <dt className="text-navy font-medium">E-mail</dt>
              <dd>
                <a
                  href="mailto:info@wielaardmarine.nl"
                  className="text-azure hover:underline"
                >
                  Julian5875wielaard@gmail.com
                </a>
              </dd>
              <dt className="text-navy font-medium">Telefoon</dt>
              <dd>
                <a
                  href="tel:+31645345868"
                  className="text-azure hover:underline"
                >
                  +31 6 45345868
                </a>
              </dd>
              <dt className="text-navy font-medium">KvK-nummer</dt>
              <dd>--</dd>
              <dt className="text-navy font-medium">BTW-nummer</dt>
              <dd>--</dd>
            </dl>
          </Section>

          <Section title="2. Welke gegevens verwerken wij?">
            <p>Wij verwerken alleen gegevens die u zelf aan ons verstrekt.</p>

            <h3 className="font-heading text-navy text-base pt-2">
              Bij een offerteaanvraag of contactverzoek
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Naam</li>
              <li>E-mailadres</li>
              <li>Telefoonnummer</li>
              <li>
                Gegevens over uw boot (type, lengte, gewenste behandeling)
              </li>
              <li>De inhoud van uw bericht</li>
            </ul>

            <h3 className="font-heading text-navy text-base pt-2">
              Bij het huren van een boot
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Naam, adres en woonplaats</li>
              <li>E-mailadres en telefoonnummer</li>
              <li>Geboortedatum (ter controle van de minimumleeftijd)</li>
              <li>
                Identiteitsbewijsgegevens ter verificatie — wij noteren
                uitsluitend het documentnummer en de geldigheidsduur. Wij maken
                géén kopie of scan van uw identiteitsbewijs en noteren uw BSN
                niet.
              </li>
              <li>Betaal- en factuurgegevens</li>
              <li>Gegevens over de huurperiode en de gehuurde boot</li>
            </ul>

            <h3 className="font-heading text-navy text-base pt-2">
              Automatisch verzamelde gegevens
            </h3>
            <p>
              Onze website wordt gehost bij een externe hostingpartij. Deze
              partij legt in serverlogbestanden standaard technische gegevens
              vast, zoals uw IP-adres, het tijdstip van uw bezoek, het
              opgevraagde bestand en uw browsertype. Deze logs worden
              uitsluitend gebruikt voor de beveiliging en technische werking van
              de website.
            </p>
          </Section>

          <Section title="3. Waarom verwerken wij deze gegevens?">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-navy/20">
                    <th className="font-heading text-navy font-normal py-2 pr-4">
                      Doel
                    </th>
                    <th className="font-heading text-navy font-normal py-2">
                      Grondslag
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-navy/10">
                    <td className="py-2 pr-4 align-top">
                      Beantwoorden van uw vraag of contactverzoek
                    </td>
                    <td className="py-2 align-top">
                      Gerechtvaardigd belang / uw verzoek
                    </td>
                  </tr>
                  <tr className="border-b border-navy/10">
                    <td className="py-2 pr-4 align-top">
                      Opstellen en versturen van een offerte
                    </td>
                    <td className="py-2 align-top">
                      Uitvoering van (pre)contractuele maatregelen
                    </td>
                  </tr>
                  <tr className="border-b border-navy/10">
                    <td className="py-2 pr-4 align-top">
                      Uitvoeren van een huurovereenkomst of onderhoudsopdracht
                    </td>
                    <td className="py-2 align-top">
                      Uitvoering van de overeenkomst
                    </td>
                  </tr>
                  <tr className="border-b border-navy/10">
                    <td className="py-2 pr-4 align-top">
                      Facturatie en administratie
                    </td>
                    <td className="py-2 align-top">
                      Wettelijke verplichting (fiscale bewaarplicht)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 align-top">
                      Beveiliging en goede werking van de website
                    </td>
                    <td className="py-2 align-top">Gerechtvaardigd belang</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Wij gebruiken uw gegevens{" "}
              <strong className="text-navy font-medium">niet</strong> voor
              geautomatiseerde besluitvorming of profilering, en verkopen uw
              gegevens nooit aan derden.
            </p>
          </Section>

          <Section title="4. Cookies">
            <p>
              Onze website plaatst{" "}
              <strong className="text-navy font-medium">
                geen tracking-, analytische of marketingcookies
              </strong>
              . Wij gebruiken geen Google Analytics, geen advertentiepixels en
              geen social media trackers. Daarom vragen wij u ook niet om
              cookietoestemming.
            </p>
            <p>
              Uitsluitend strikt noodzakelijke, technische cookies kunnen worden
              geplaatst om de website correct te laten functioneren. Voor deze
              cookies is op grond van de wet geen toestemming vereist.
            </p>
            <p>
              Wanneer wij in de toekomst wél cookies gaan plaatsen die uw
              surfgedrag volgen, vragen wij daarvoor eerst uw uitdrukkelijke
              toestemming via een cookiemelding en passen wij deze verklaring
              aan.
            </p>
          </Section>

          <Section title="5. Delen met derden">
            <p>
              Wij delen uw gegevens alleen wanneer dat noodzakelijk is voor onze
              dienstverlening of wanneer wij daartoe wettelijk verplicht zijn.
              Het gaat om de volgende categorieën ontvangers:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong className="text-navy font-medium">
                  Onze hostingprovider
                </strong>
                , voor het beschikbaar stellen van de website
              </li>
              <li>
                <strong className="text-navy font-medium">
                  Onze e-mailprovider
                </strong>
                , voor het ontvangen en beantwoorden van uw berichten
              </li>
              <li>
                <strong className="text-navy font-medium">
                  Onze boekhouder en de Belastingdienst
                </strong>
                , voor de financiële administratie
              </li>
              <li>
                <strong className="text-navy font-medium">
                  Onze verzekeraar
                </strong>
                , uitsluitend in geval van schade tijdens een huurperiode
              </li>
            </ul>
            <p>
              Met partijen die namens ons gegevens verwerken sluiten wij waar
              nodig een verwerkersovereenkomst. Wij verstrekken uw gegevens niet
              aan partijen buiten de Europese Economische Ruimte, tenzij dit
              noodzakelijk is en met passende waarborgen is omkleed.
            </p>
          </Section>

          <Section title="6. Hoe lang bewaren wij uw gegevens?">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong className="text-navy font-medium">
                  Contactverzoeken en offertes die niet tot een opdracht leiden:
                </strong>{" "}
                maximaal 12 maanden
              </li>
              <li>
                <strong className="text-navy font-medium">
                  Gegevens rondom een uitgevoerde opdracht of huurperiode:
                </strong>{" "}
                2 jaar na afronding
              </li>
              <li>
                <strong className="text-navy font-medium">
                  Facturen en administratie:
                </strong>{" "}
                7 jaar (wettelijke fiscale bewaarplicht)
              </li>
              <li>
                <strong className="text-navy font-medium">
                  Serverlogbestanden:
                </strong>{" "}
                maximaal 6 maanden
              </li>
            </ul>
          </Section>

          <Section title="7. Beveiliging">
            <p>
              Wij nemen passende technische en organisatorische maatregelen om
              uw gegevens te beschermen tegen verlies of onrechtmatig gebruik.
              Onze website maakt gebruik van een beveiligde HTTPS-verbinding,
              toegang tot gegevens is beperkt tot personen die deze nodig
              hebben, en accounts zijn beveiligd met sterke wachtwoorden en
              tweefactorauthenticatie.
            </p>
            <p>
              Heeft u de indruk dat uw gegevens niet goed beveiligd zijn of zijn
              er aanwijzingen van misbruik? Neem dan direct contact met ons op.
            </p>
          </Section>

          <Section title="8. Uw rechten">
            <p>U heeft het recht om:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong className="text-navy font-medium">Inzage</strong> te
                vragen in de gegevens die wij van u verwerken
              </li>
              <li>
                Onjuiste gegevens te laten{" "}
                <strong className="text-navy font-medium">corrigeren</strong>
              </li>
              <li>
                Uw gegevens te laten{" "}
                <strong className="text-navy font-medium">verwijderen</strong>,
                voor zover wij niet wettelijk verplicht zijn deze te bewaren
              </li>
              <li>
                De verwerking te laten{" "}
                <strong className="text-navy font-medium">beperken</strong>
              </li>
              <li>
                <strong className="text-navy font-medium">Bezwaar</strong> te
                maken tegen de verwerking
              </li>
              <li>
                Uw gegevens in een gangbaar formaat te ontvangen (
                <strong className="text-navy font-medium">
                  dataportabiliteit
                </strong>
                )
              </li>
              <li>
                Een eerder gegeven{" "}
                <strong className="text-navy font-medium">toestemming</strong>{" "}
                in te trekken
              </li>
            </ul>
            <p>
              U kunt een verzoek indienen via{" "}
              <a
                href="mailto:Julian5875wielaard@gmail.com"
                className="text-azure hover:underline"
              >
                Julian5875wielaard@gmail.com
              </a>
              . Wij reageren binnen vier weken. Ter controle kunnen wij u vragen
              zich te identificeren.
            </p>
          </Section>

          <Section title="9. Klachten">
            <p>
              Bent u niet tevreden over hoe wij met uw gegevens omgaan? Neem dan
              eerst contact met ons op — wij lossen het graag samen op. U heeft
              daarnaast altijd het recht een klacht in te dienen bij de
              Autoriteit Persoonsgegevens via{" "}
              <a
                href="https://autoriteitpersoonsgegevens.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-azure hover:underline"
              >
                autoriteitpersoonsgegevens.nl
              </a>
              .
            </p>
          </Section>

          <Section title="10. Wijzigingen">
            <p>
              Wij kunnen deze privacyverklaring aanpassen wanneer onze
              dienstverlening of de wetgeving daartoe aanleiding geeft. De
              actuele versie vindt u altijd op deze pagina, met de datum van de
              laatste wijziging bovenaan.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}
