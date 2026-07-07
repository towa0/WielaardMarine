import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Over Ons",
  description:
    "Leer WielaardMarine kennen — opgericht door Julian Wielaard vanuit een passie voor het water en bootverzorging. Polijsten en bootverhuur aan de Binnenmaas.",
  alternates: { canonical: "/over-ons" },
};

const milestones = [
  {
    year: "2023",
    text: "Van hobby naar bedrijf — WielaardMarine officieel gestart",
  },
  {
    year: "2024",
    text: "Groeiende klantengroep: buren, vrienden en familie aan boord",
  },
  { year: "2025", text: "Start bootverhuur op de Binnenmaas" },
  {
    year: "2026",
    text: "Uitbreiding vloot en verder groeien in bootverzorging",
  },
];

const values = [
  {
    title: "Veiligheid eerst",
    text: "Elke boot vertrekt na een grondige technische check. Alle huurders krijgen een persoonlijke introductie.",
  },
  {
    title: "Persoonlijke service",
    text: "Geen callcenter. U belt of mailt ons en krijgt direct iemand die uw boot kent en uw naam weet.",
  },
  {
    title: "Liefde voor het water",
    text: "De Binnenmaas is ons thuis. Wij kennen de wateren, de winden en de mooiste ankerplaatsen.",
  },
  {
    title: "Respect voor de natuur",
    text: "Wij werken bewust met schone motoren en milieuvriendelijke onderhoudsproducten.",
  },
];

export default function OverOnsPage() {
  return (
    <div className="bg-mist min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-azure text-xs font-mono uppercase tracking-widest mb-3">
            Wie wij zijn
          </p>
          <h1 className="font-heading text-navy text-4xl sm:text-5xl mb-5">
            Over WielaardMarine
          </h1>
          <p className="text-ink-muted max-w-xl mx-auto leading-relaxed">
            Opgericht door Julian Wielaard vanuit een persoonlijke passie voor
            het water en de wens om boten er weer op hun best uit te laten zien.
          </p>
        </div>

        {/* Story + team photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mb-24 items-center">
          <div className="space-y-5 text-ink-muted leading-relaxed">
            <p>
              Mijn naam is Julian Wielaard en van jongs af aan ben ik al veel op
              het water te vinden. De passie voor boten zat er daarom al vroeg
              in. Toch viel mij één ding altijd op: na een paar jaar verloren
              veel boten hun glans en begonnen ze er dof en verweerd uit te
              zien. Daarom besloot ik mijn eigen boot te polijsten.
            </p>
            <p>
              Het resultaat bleef niet onopgemerkt. Al snel mocht ik ook de
              boten van buren, vrienden en familie verzorgen. Wat begon als
              hobby is in drie jaar tijd uitgegroeid tot WielaardMarine.
            </p>
            <p>
              Bij WielaardMarine staan kwaliteit, perfectie en tevreden klanten
              centraal. Ik neem graag de tijd om iedere boot weer in topconditie
              te brengen. Polijsten zorgt niet alleen voor een mooie
              uitstraling, maar helpt ook om de lak en gelcoat te beschermen
              tegen weersinvloeden, vuil en verkleuring — zodat uw boot langer
              in goede staat blijft en beter zijn waarde behoudt.
            </p>
            <p>
              Als leuke extra biedt WielaardMarine ook bootverhuur aan op de
              Binnenmaas. Zo kunt u na de polijstbeurt gelijk genieten van een
              heerlijke ontspannen dag op het water in de Hoeksche Waard.
            </p>
          </div>

          <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/about-wielaardmarine.JPG"
              alt="Julian Wielaard — WielaardMarine"
              fill
              className="object-cover object-center"
              style={{ imageOrientation: "from-image" } as React.CSSProperties}
            />
          </div>
        </div>

        {/* Values */}
        {/*<section className="mb-24">
          <div className="text-center mb-10">
            <p className="text-azure text-xs font-mono uppercase tracking-widest mb-3">
              Onze waarden
            </p>
            <h2 className="font-heading text-navy text-3xl">
              Waar wij voor staan
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white border border-navy/10 rounded-lg p-7"
              >
                <div className="w-8 h-px bg-azure mb-4" />
                <h3 className="font-heading text-navy text-lg mb-2">{v.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </section>*/}

        {/* Timeline */}
        <section className="mb-24">
          <div className="text-center mb-10">
            <p className="text-azure text-xs font-mono uppercase tracking-widest mb-3">
              Geschiedenis
            </p>
            <h2 className="font-heading text-navy text-3xl">Onze mijlpalen</h2>
          </div>
          <div className="relative pl-6 border-l border-azure/30 space-y-8 max-w-lg mx-auto">
            {milestones.map((m) => (
              <div key={m.year} className="relative">
                <div className="absolute -left-[1.6rem] top-1 w-3 h-3 rounded-full bg-azure" />
                <p className="text-azure text-xs font-mono uppercase tracking-widest mb-1">
                  {m.year}
                </p>
                <p className="text-ink-muted text-sm">{m.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Location */}
        <section>
          <div className="text-center mb-10">
            <p className="text-azure text-xs font-mono uppercase tracking-widest mb-3">
              Locatie
            </p>
            <h2 className="font-heading text-navy text-3xl">Waar u ons vindt</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="bg-white border border-navy/10 rounded-lg p-7 space-y-4 text-sm text-ink-muted">
              <div>
                <p className="text-azure text-xs font-mono uppercase tracking-widest mb-2">
                  Adres
                </p>
                {/* Update this */}
                <p>
                  Havenweg 1<br />
                  3281 XX Numansdorp
                  <br />
                  Hoeksche Waard
                </p>
              </div>
              <div>
                <p className="text-azure text-xs font-mono uppercase tracking-widest mb-2">
                  Openingstijden vaarseizoen
                </p>
                <p>
                  Maandag t/m zaterdag: 08:00 – 18:00
                  <br />
                  Zondag: 09:00 – 16:00
                </p>
              </div>
              <div>
                <p className="text-azure text-xs font-mono uppercase tracking-widest mb-2">
                  Buiten seizoen
                </p>
                <p>Op afspraak</p>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-azure text-sm hover:text-azure-dark transition-colors"
                >
                  Neem contact op
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              {/* Replace with Google Maps embed:
              <iframe
                src="https://www.google.com/maps/embed?pb=..."
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              />
              */}
              <ImagePlaceholder
                label="Kaart — Binnenmaas, Numansdorp"
                aspectRatio="video"
                className="rounded-lg overflow-hidden"
              />
              <p className="text-center text-ink-muted/40 text-xs mt-2 font-mono">
                kaart volgt
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
