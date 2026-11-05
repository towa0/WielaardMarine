import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { company } from "@/data/company";
import { diensten } from "@/data/diensten";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Over ons — bootverzorging aan de Binnenmaas",
  description:
    "Wielaard Marine is Julian Wielaard. Wat begon met de eigen boot polijsten is uitgegroeid tot bootverzorging voor de hele Hoeksche Waard.",
  path: "/over-ons",
});

const milestones = [
  {
    year: "2023",
    text: "Van hobby naar bedrijf — Wielaard Marine officieel gestart",
  },
  {
    year: "2024",
    text: "Groeiende klantengroep: buren, vrienden en familie aan boord",
  },
  { year: "2025", text: "Start bootverhuur op de Binnenmaas" },
  {
    year: "2026",
    text: "Verder groeien in bootverzorging, en uitbreiding van de vloot",
  },
];

export default function OverOnsPage() {
  return (
    <>
      <Header variant="solid" active="Over ons" />

      <section className="bg-white pt-14 pb-10 sm:pt-22 sm:pb-16">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-8">
          <p className="mb-4 font-mono text-[11px] tracking-[0.2em] text-azure uppercase">
            Over ons
          </p>
          <h1 className="font-heading mb-5 max-w-[24ch] text-[32px] leading-[1.06] font-semibold tracking-tight text-navy text-balance sm:text-[58px]">
            Over Wielaard Marine: één paar handen, drie jaar bootverzorging
          </h1>
          <p className="max-w-[56ch] text-base leading-relaxed text-ink-muted text-pretty sm:text-lg">
            {/* Wielaard Marine is Julian Wielaard. Wat begon met de eigen boot
            polijsten is uitgegroeid tot bootverzorging voor de hele Hoeksche
            Waard. */}
          </p>
        </div>
      </section>

      <section className="bg-white pb-14 sm:pb-28">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-4.5 px-4 sm:px-8">
          <p className="max-w-[62ch] text-[16.5px] leading-relaxed text-ink-muted text-pretty">
            Mijn naam is Julian Wielaard en van jongs af aan ben ik al veel op
            het water te vinden. De passie voor boten zat er daarom al vroeg in.
            Toch viel mij één ding altijd op: na een paar jaar verloren veel
            boten hun glans en begonnen ze er dof en verweerd uit te zien.
            Daarom besloot ik mijn eigen boot te polijsten.
          </p>
          <p className="max-w-[62ch] text-[16.5px] leading-relaxed text-ink-muted text-pretty">
            Het resultaat bleef niet onopgemerkt. Al snel mocht ik ook de boten
            van buren, vrienden en familie verzorgen. Wat begon als hobby is in
            drie jaar tijd uitgegroeid tot Wielaard Marine.
          </p>
          <p className="max-w-[62ch] text-[16.5px] leading-relaxed text-ink-muted text-pretty">
            Polijsten zorgt niet alleen voor een mooie uitstraling, maar helpt
            ook om lak en gelcoat te beschermen tegen weersinvloeden, vuil en
            verkleuring — zodat uw boot langer in goede staat blijft en beter
            zijn waarde behoudt. Ik neem daar graag de tijd voor.
          </p>
          {/* <p className="max-w-[62ch] text-[16.5px] leading-relaxed text-ink-muted text-pretty">
            Als leuke extra verhuren wij ook boten op de Binnenmaas. Zo kunt u
            na de polijstbeurt gelijk het water op.
          </p> */}
        </div>
      </section>

      <section className="border-y border-mist-deep bg-mist py-14 sm:py-24">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-8">
          <div className="mb-8 max-w-[52ch] sm:mb-11">
            <p className="mb-4 font-mono text-[11px] tracking-[0.18em] text-azure uppercase">
              Mijlpalen
            </p>
            <h2 className="font-heading text-[26px] leading-tight font-semibold tracking-tight text-navy text-balance sm:text-4xl">
              Van hobby naar bedrijf
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {milestones.map((m) => (
              <div key={m.year} className="border-t-2 border-navy pt-4.5">
                <p className="font-heading mb-2.5 text-[22px] font-semibold text-azure">
                  {m.year}
                </p>
                <p className="text-[15px] leading-relaxed text-ink-muted">
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pt-14 sm:pt-24">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-8">
          <div className="mb-8 max-w-[56ch] sm:mb-11">
            <p className="mb-4 font-mono text-[11px] tracking-[0.18em] text-azure uppercase">
              Wat ik doe
            </p>
            <h2 className="mb-4 font-heading text-[26px] leading-tight font-semibold tracking-tight text-navy text-balance sm:text-4xl">
              Bootverzorging en polijstwerk
            </h2>
            <p className="text-base leading-relaxed text-ink-muted text-pretty">
              Elke behandeling doe ik handmatig en stem ik af op de staat van de
              boot. Dat betekent ook dat ik zeg wanneer iets niet nodig is.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px border border-mist-deep bg-mist-deep sm:grid-cols-2">
            {diensten.map((d) => (
              <Link
                key={d.slug}
                href={`/diensten/${d.slug}`}
                className="flex flex-col gap-2 bg-white p-6 no-underline hover:bg-mist"
              >
                <span className="font-heading text-[18px] font-semibold text-navy">{d.title}</span>
                <span className="text-[14.5px] leading-relaxed text-ink-muted">{d.homeSummary}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-24">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-8">
          <div className="mb-8 max-w-[52ch] sm:mb-11">
            <p className="mb-4 font-mono text-[11px] tracking-[0.18em] text-azure uppercase">
              Werkgebied
            </p>
            <h2 className="font-heading text-[26px] leading-tight font-semibold tracking-tight text-navy text-balance sm:text-4xl">
              Actief aan de Binnenmaas
            </h2>
          </div>

          <div className="max-w-[560px]">
            <div className="flex flex-col gap-5.5 rounded border border-mist-deep p-6 sm:p-8">
              <div>
                <p className="mb-2 font-mono text-[10.5px] tracking-[0.16em] text-azure uppercase">
                  Werkgebied
                </p>
                <p className="text-[15.5px] leading-relaxed text-ink">
                  {company.region}
                </p>
              </div>
              <div>
                <p className="mb-2 font-mono text-[10.5px] tracking-[0.16em] text-azure uppercase">
                  Openingstijden
                </p>
                <p className="text-[15.5px] leading-relaxed text-ink">
                  {company.openingHours}
                </p>
              </div>
              <div>
                <p className="mb-2 font-mono text-[10.5px] tracking-[0.16em] text-azure uppercase">
                  Telefoon
                </p>
                <a
                  href={`tel:${company.phone}`}
                  className="text-[15.5px] font-semibold text-navy no-underline"
                >
                  {company.phoneDisplay}
                </a>
              </div>
              <div className="pt-1.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[15px] font-semibold text-azure no-underline hover:text-azure-dark"
                >
                  Offerte aanvragen
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
