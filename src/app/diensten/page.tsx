import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "WielaardMarine biedt bootverhuur, jaarlijks onderhoud, winterstalling en motorreparatie voor boten aan de Binnenmaas in de Hoeksche Waard.",
  alternates: { canonical: "/diensten" },
};

const services = [
  {
    id: "verhuur",
    label: "Bootverhuur",
    title: "Dag- en weekverhuur",
    description: `Huur een van onze boten voor een halve dag, een hele dag of een hele week. Onze vloot bestaat uit open sloepen, motorjachten en kajuitboten — geschikt voor gezinnen, groepen en koppels.

Sloepen tot en met 15 pk mogen zonder vaarbewijs worden gevaren. Voor grotere boten is een CWO-vaarbewijs vereist. Geen vaarbewijs maar wel zin om te varen? Wij regelen desgewenst een schipper.

Alle boten worden schoongemaakt afgeleverd, zijn voorzien van een volledig veiligheidspakket en worden grondig aan u uitgelegd voor vertrek.`,
    highlights: [
      "Halfdag, dagverhuur en weekverhuur",
      "Sloepen zonder vaarbewijs",
      "Schipper beschikbaar op aanvraag",
      "Veiligheidspakket standaard inbegrepen",
      "Grondige introductie bij elke verhuur",
      "Honden welkom",
    ],
    pricing: [
      { label: "Sloep — halve dag", from: "€ 90" },
      { label: "Sloep — hele dag", from: "€ 145" },
      { label: "Sloep — week", from: "€ 720" },
      { label: "Motorjacht — dag", from: "€ 295" },
    ],
    cta: "Bekijk onze vloot",
    ctaHref: "/vloot",
  },
  {
    id: "onderhoud",
    label: "Onderhoud & Reparatie",
    title: "Uw boot in topconditie",
    description: `Een goed onderhouden boot is een veilige boot. WielaardMarine verzorgt het volledige jaarlijkse onderhoud van uw pleziervaartuig: van motorservice en rompbehandeling tot elektrische systemen en zeilen.

Wij werken met merken als Yamaha, Mercury, Suzuki en Honda, en hebben jarenlange ervaring met zowel buitenboordmotoren als inboardmotoren.

Brengt u uw boot bij ons in stalling? Dan combineren wij de onderhoudswerkzaamheden efficiënt met uw stallingperiode, zodat uw boot klaar is als het vaarseizoen begint.`,
    highlights: [
      "Jaarlijks onderhoud en APK-keuring",
      "Motor- en brandstofservice",
      "Romp- en antifoulingbehandeling",
      "Elektrische systemen",
      "Mechanische reparaties",
      "Winterklaar maken",
    ],
    pricing: [
      { label: "Winterklaar maken", from: "op aanvraag" },
      { label: "Jaarservice motor", from: "op aanvraag" },
      { label: "Rompbehandeling", from: "op aanvraag" },
    ],
    cta: "Neem contact op",
    ctaHref: "/contact",
  },
  {
    id: "stalling",
    label: "Winterstalling",
    title: "Veilig en droog de winter door",
    description: `Wanneer het vaarseizoen voorbij is, kunt u uw boot bij ons in stalling geven. Wij bieden zowel overdekte stallingplaatsen als buitenstallingplaatsen op ons terrein aan de Binnenmaas.

Uw boot wordt bij ontvangst geïnspecteerd en geregistreerd. Eventuele schade wordt vastgelegd. Winteronderhoud — zoals romp- en motorbehandeling — voeren wij desgewenst ter plaatse uit.

Ons terrein is omheind, verlicht en beveiligd.`,
    highlights: [
      "Overdekte en buitenstalling",
      "Beveiligd, omheind terrein",
      "Inspectie bij inname en uitname",
      "Onderhoud combineren met stalling",
      "Kraanservice voor te water laten",
    ],
    pricing: [
      { label: "Buitenstalling (per meter, per maand)", from: "€ 12" },
      { label: "Overdekte stalling (per meter, per maand)", from: "€ 22" },
    ],
    cta: "Informeer naar stallingplaatsen",
    ctaHref: "/contact",
  },
];

export default function DienstenPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        {/* Page header */}
        <div className="mb-16 text-center">
          <p className="text-bronze text-xs font-mono uppercase tracking-widest mb-3">
            Wat wij bieden
          </p>
          <h1 className="font-serif text-navy text-4xl sm:text-5xl mb-5">
            Onze diensten
          </h1>
          <p className="text-ink-muted max-w-xl mx-auto leading-relaxed">
            Van recreatieve verhuur tot professioneel onderhoud — WielaardMarine
            is uw partner aan de Binnenmaas.
          </p>
        </div>

        {/* Before / After showcase */}
        <section className="mb-20">
          <div className="text-center mb-8">
            <p className="text-bronze text-xs font-mono uppercase tracking-widest mb-2">
              Polijsten & bootverzorging
            </p>
            <h2 className="font-serif text-navy text-3xl mb-2">
              Zie het resultaat
            </h2>
            <p className="text-ink-muted text-sm">
              Sleep de schuifbalk om het verschil te zien
            </p>
          </div>

          {/* Full-width slider */}
          <BeforeAfterSlider
            before={{
              src: "/images/boat_washed_after.jpg",
              alt: "Boot na polijsten",
            }}
            after={{
              src: "/images/boat_washed_before.JPG",
              alt: "Boot voor polijsten",
            }}
            className="aspect-[16/9] rounded-xl shadow-xl mb-8"
          />

          {/* Polished result — image left, text right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/poloshed_boat1.jpg"
                alt="Gepolijst motorjacht — eindresultaat"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="bg-sand border border-navy/10 rounded-lg p-6">
              <p className="text-xs text-bronze font-mono uppercase tracking-widest mb-3">
                Eindresultaat
              </p>
              <p className="text-ink-muted text-sm leading-relaxed">
                Polijsten verwijdert oxidatie, krassen en doffe vlekken uit de
                lak en gelcoat. Het resultaat: een diepglanzende afwerking die
                de boot niet alleen mooier maakt, maar ook beter beschermt tegen
                verwering en verkleuring.
              </p>
            </div>
          </div>
        </section>

        {/* Quick nav anchors */}
        <div className="flex flex-wrap gap-2 mb-16 justify-center">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="px-5 py-2 border border-navy/20 text-ink-muted text-sm rounded-full hover:border-bronze hover:text-bronze transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>

        {/* Service sections */}
        <div className="space-y-24">
          {services.map((s, idx) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                {/* Text */}
                <div>
                  <p className="text-bronze text-xs font-mono uppercase tracking-widest mb-2">
                    {s.label}
                  </p>
                  <h2 className="font-serif text-navy text-3xl mb-5">
                    {s.title}
                  </h2>
                  <div className="space-y-4">
                    {s.description.split("\n\n").map((p, i) => (
                      <p
                        key={i}
                        className="text-ink-muted leading-relaxed text-sm"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                  <Link
                    href={s.ctaHref}
                    className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 bg-bronze text-navy font-semibold text-sm rounded hover:bg-bronze-light transition-colors"
                  >
                    {s.cta}
                  </Link>
                </div>

                {/* Highlights + pricing */}
                <div className="space-y-5">
                  <div className="bg-sand border border-navy/10 rounded-lg p-6">
                    <h3 className="text-bronze text-xs font-mono uppercase tracking-widest mb-4">
                      Inbegrepen
                    </h3>
                    <ul className="space-y-2.5">
                      {s.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-3 text-sm text-ink-muted"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="w-4 h-4 text-bronze shrink-0 mt-0.5"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-navy rounded-lg p-6">
                    <h3 className="text-bronze text-xs font-mono uppercase tracking-widest mb-4">
                      Indicatieve tarieven
                    </h3>
                    <dl className="divide-y divide-cream/10">
                      {s.pricing.map(({ label, from }) => (
                        <div
                          key={label}
                          className="flex justify-between py-2.5 text-sm"
                        >
                          <dt className="text-cream/70">{label}</dt>
                          <dd className="text-cream font-medium">
                            v.a. {from}
                          </dd>
                        </div>
                      ))}
                    </dl>
                    <p className="text-cream/30 text-xs mt-4">
                      Exacte prijzen op aanvraag. Neem contact op voor een
                      offerte op maat.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 bg-navy rounded-lg p-10 text-center">
          <h2 className="font-serif text-cream text-2xl mb-3">
            Vragen of een offerte aanvragen?
          </h2>
          <p className="text-cream/60 mb-6 text-sm max-w-md mx-auto">
            Wij stellen graag een aanbod op maat samen voor uw verhuur,
            onderhoud of stalling.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-bronze text-navy font-semibold rounded hover:bg-bronze-light transition-colors"
          >
            Neem contact op
          </Link>
        </div>
      </div>
    </div>
  );
}
