import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { diensten } from "@/data/diensten";
import { company } from "@/data/company";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Boot polijsten in de Hoeksche Waard",
  description:
    "Handmatig polijstwerk en bootverzorging aan de Binnenmaas. Wij halen oxidatie en doffe plekken uit lak en gelcoat, en beschermen wat eronder zit.",
  path: "/",
});

const resultaten = [
  "Oxidatie, krassen en doffe vlekken verdwijnen uit lak en gelcoat",
  "Een beschermlaag tegen weer, vuil en verkleuring",
  "Elke behandeling handmatig, afgestemd op de staat van de boot",
  "Een boot die zijn waarde beter behoudt",
];

const stappen = [
  {
    n: "STAP 01",
    title: "Aanvraag",
    text: "U stuurt lengte, type en een paar foto's. Daaruit blijkt vaak al wat er nodig is.",
  },
  {
    n: "STAP 02",
    title: "Beoordeling",
    text: "Wij kijken naar de staat van de toplaag en zeggen welke behandeling past — en welke niet nodig is.",
  },
  {
    n: "STAP 03",
    title: "Behandeling",
    text: "Handmatig, laag voor laag. Doorlooptijd hoort u vooraf.",
  },
  {
    n: "STAP 04",
    title: "Oplevering",
    text: "U loopt de boot met ons langs. Wij vertellen wat u kunt doen om het zo te houden.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <Header variant="transparent" active="Polijsten" />
      <section className="relative min-h-[520px] h-[78svh] overflow-hidden bg-navy-dark">
        <Image
          src="/images/poloshed_boat1.jpg"
          alt="Gepolijste romp aan de Binnenmaas"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 z-[1] bg-navy/50" />
        <div
          className="absolute inset-0 z-[2]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(11,41,71,.72) 0%, rgba(11,41,71,0) 26%, rgba(11,41,71,0) 42%, rgba(11,41,71,.78) 100%)",
          }}
        />
        <div className="relative z-[3] flex h-full flex-col">
          <div className="flex flex-1 items-end">
            <div className="mx-auto w-full max-w-[1180px] px-4 pb-11 sm:px-8 sm:pb-16">
              <p className="mb-4 font-mono text-[11px] tracking-[0.2em] text-white/80 uppercase">
                Uw boot terug in nieuwstaat
              </p>
              <h1 className="font-heading mb-5 max-w-[19ch] text-[34px] leading-[1.04] font-semibold tracking-tight text-white text-balance sm:text-6xl">
                Boot polijsten in de Hoeksche Waard
              </h1>
              <p className="mb-8 max-w-[46ch] text-base leading-relaxed text-white/90 text-pretty sm:text-lg">
                Handmatig polijstwerk en bootverzorging aan de Binnenmaas. Wij
                halen oxidatie en doffe plekken uit lak en gelcoat, en
                beschermen wat eronder zit.
              </p>
              <div className="mb-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-sm bg-white px-7 py-3.5 text-sm font-semibold text-navy no-underline hover:bg-mist"
                >
                  Offerte aanvragen
                </Link>
                <Link
                  href="/werk"
                  className="rounded-sm border border-white/50 px-7 py-3.5 text-sm font-semibold text-white no-underline hover:bg-white/10"
                >
                  Bekijk ons werk
                </Link>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.13em] text-white/85 uppercase">
                <span>{company.region}</span>
                <span>Handmatig werk</span>
                <span>Persoonlijk advies</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEEM / RESULTAAT ── */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-10 px-4 sm:gap-16 sm:px-8 md:grid-cols-2">
          <div>
            <p className="mb-4 font-mono text-[11px] tracking-[0.18em] text-azure uppercase">
              Het probleem
            </p>
            <h2 className="font-heading mb-5 text-[26px] leading-tight font-semibold tracking-tight text-navy text-balance sm:text-4xl">
              Na een paar seizoenen wordt gelcoat dof
            </h2>
            <p className="mb-3.5 max-w-[48ch] text-base leading-relaxed text-ink-muted text-pretty">
              Zon, zoutlucht en aanslag vreten aan de toplaag. Wat begint als
              een matte waas wordt oxidatie, en oxidatie die je laat zitten
              gaat door tot in de gelcoat zelf.
            </p>
            <p className="max-w-[48ch] text-base leading-relaxed text-ink-muted text-pretty">
              Op dat punt is poetsen niet genoeg meer. Dan moet er laag voor
              laag gewerkt worden — en daarna beschermd, anders staat u
              volgend seizoen weer op hetzelfde punt.
            </p>
          </div>
          <div>
            <p className="mb-4 font-mono text-[11px] tracking-[0.18em] text-azure uppercase">
              Het resultaat
            </p>
            <h2 className="font-heading mb-5 text-[26px] leading-tight font-semibold tracking-tight text-navy text-balance sm:text-4xl">
              Diepe glans die blijft staan
            </h2>
            <div className="flex flex-col gap-3.5">
              {resultaten.map((r) => (
                <div key={r} className="flex items-start gap-3">
                  <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-azure" />
                  <p className="text-[15.5px] leading-relaxed text-ink-muted">
                    {r}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VOOR EN NA ── */}
      <section className="border-y border-mist-deep bg-mist py-16 sm:py-24">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-8">
          <div className="mb-8 max-w-[52ch] sm:mb-12">
            <p className="mb-4 font-mono text-[11px] tracking-[0.18em] text-azure uppercase">
              Zie het verschil
            </p>
            <h2 className="font-heading mb-4 text-[26px] leading-tight font-semibold tracking-tight text-navy text-balance sm:text-[42px]">
              Dezelfde romp, één behandeling ertussen
            </h2>
            <p className="text-base leading-relaxed text-ink-muted">
              Sleep de balk. Geen bewerkte foto&apos;s, geen andere hoek —
              hetzelfde beeld voor en na.
            </p>
          </div>

          <BeforeAfterSlider
            before={{ src: "/images/boat_washed_before.JPG", alt: "Voor de behandeling" }}
            after={{ src: "/images/boat_washed_after.jpg", alt: "Na de behandeling" }}
            className="aspect-video"
          />

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="font-mono text-[11px] tracking-[0.14em] text-ink-muted uppercase">
              Kajuitboot · volledige glansrestauratie
            </p>
            <Link
              href="/werk"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-azure no-underline hover:text-azure-dark"
            >
              Alle voor-en-na&apos;s bekijken
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── BEHANDELINGEN ── */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-8">
          <div className="mb-9 max-w-[52ch] sm:mb-13">
            <p className="mb-4 font-mono text-[11px] tracking-[0.18em] text-azure uppercase">
              Behandelingen
            </p>
            <h2 className="font-heading text-[26px] leading-tight font-semibold tracking-tight text-navy text-balance sm:text-[42px]">
              Vijf behandelingen, één vakman
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px border border-mist-deep bg-mist-deep sm:grid-cols-2 lg:grid-cols-3">
            {diensten.map((d) => (
              <Link
                key={d.slug}
                href={`/diensten/${d.slug}`}
                className="flex min-h-[190px] flex-col gap-3 bg-white p-7 no-underline hover:bg-mist"
              >
                <span className="font-mono text-[11px] tracking-[0.14em] text-azure">
                  {d.order}
                </span>
                <h3 className="font-heading text-[19px] leading-tight font-semibold text-navy">
                  {d.title}
                </h3>
                <p className="flex-1 text-[14.5px] leading-relaxed text-ink-muted">
                  {d.homeSummary}
                </p>
                <span className="text-[13px] font-semibold text-azure">
                  Prijs op aanvraag
                </span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="flex min-h-[190px] flex-col gap-3 bg-mist p-7 no-underline hover:bg-[#eaf2fa]"
            >
              <span className="font-mono text-[11px] tracking-[0.14em] text-azure">—</span>
              <h3 className="font-heading text-[19px] leading-tight font-semibold text-navy">
                Weet u het niet zeker?
              </h3>
              <p className="flex-1 text-[14.5px] leading-relaxed text-ink-muted">
                Stuur een paar foto&apos;s van de romp. Wij zeggen wat er
                nodig is — en wat niet.
              </p>
              <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-azure">
                Offerte aanvragen
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>

          <div className="mt-7">
            <Link
              href="/diensten"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-azure no-underline hover:text-azure-dark"
            >
              Alle behandelingen in detail
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── ZO WERKT HET ── */}
      <section className="border-y border-mist-deep bg-mist py-16 sm:py-24">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-8">
          <div className="mb-9 max-w-[52ch] sm:mb-13">
            <p className="mb-4 font-mono text-[11px] tracking-[0.18em] text-azure uppercase">
              Zo werkt het
            </p>
            <h2 className="font-heading text-[26px] leading-tight font-semibold tracking-tight text-navy text-balance sm:text-[42px]">
              Van aanvraag tot glans in vier stappen
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stappen.map((s) => (
              <div key={s.n} className="border-t-2 border-navy pt-5">
                <span className="font-heading mb-3 block text-[13px] font-semibold tracking-[0.14em] text-azure">
                  {s.n}
                </span>
                <h3 className="font-heading mb-2.5 text-[18px] font-semibold text-navy">
                  {s.title}
                </h3>
                <p className="text-[14.5px] leading-relaxed text-ink-muted">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WIE HET DOET ── */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-4 sm:gap-16 sm:px-8 md:grid-cols-2">
          <div>
            <p className="mb-4 font-mono text-[11px] tracking-[0.18em] text-azure uppercase">
              Wie het doet
            </p>
            <h2 className="font-heading mb-5 text-[26px] leading-tight font-semibold tracking-tight text-navy text-balance sm:text-4xl">
              Julian Wielaard, en niemand anders
            </h2>
            <p className="mb-3.5 max-w-[48ch] text-base leading-relaxed text-ink-muted text-pretty">
              Wat begon met de eigen boot polijsten werd het werk van buren,
              vrienden en familie — en in drie jaar Wielaard Marine. Elke
              boot gaat door dezelfde handen.
            </p>
            <p className="mb-6 max-w-[48ch] text-base leading-relaxed text-ink-muted text-pretty">
              Geen callcenter, geen wisselende ploeg. U spreekt de man die uw
              boot behandelt, voor en na.
            </p>
            <Link
              href="/over-ons"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-azure no-underline hover:text-azure-dark"
            >
              Meer over Julian
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded border border-mist-deep">
            <Image
              src="/images/boat_steeringwheel.JPG"
              alt="Aan boord op de Binnenmaas"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── OFFERTE CTA ── */}
      <section className="bg-navy py-14 sm:py-24">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-8">
          <div className="max-w-[60ch]">
            <h2 className="font-heading mb-4 text-[28px] leading-tight font-semibold tracking-tight text-white text-balance sm:text-5xl">
              Vraag een offerte aan
            </h2>
            <p className="mb-8 max-w-[48ch] text-base leading-relaxed text-white/72 sm:text-lg">
              Stuur lengte, type en een paar foto&apos;s van de romp. U hoort
              binnen één werkdag wat er nodig is en wat het kost.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="rounded-sm bg-white px-7 py-3.5 text-sm font-semibold text-navy no-underline hover:bg-mist"
              >
                Offerte aanvragen
              </Link>
              <a
                href={`tel:${company.phone}`}
                className="rounded-sm border border-white/40 px-7 py-3.5 text-sm font-semibold text-white no-underline hover:bg-white/10"
              >
                {company.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── VERHUUR STRIP ── */}
      <section className="border-y border-mist-deep bg-mist">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-5 px-4 py-8 sm:px-8 sm:py-10">
          <div className="min-w-0">
            <p className="mb-2 font-mono text-[11px] tracking-[0.18em] text-azure uppercase">
              Ook mogelijk
            </p>
            <p className="max-w-[56ch] text-base leading-relaxed font-medium text-navy">
              Zelf het water op? Wij verhuren daarnaast sloepen en een
              consoleboot op de Binnenmaas — sloepen zonder vaarbewijs.
            </p>
          </div>
          <Link
            href="/vloot"
            className="inline-flex shrink-0 items-center gap-2 text-[15px] font-semibold text-azure no-underline hover:text-azure-dark"
          >
            Bekijk de vloot
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
