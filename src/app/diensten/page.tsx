import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { diensten } from "@/data/diensten";

export const metadata: Metadata = {
  title: "Behandelingen — polijsten en coating",
  description:
    "Vier behandelingen die los of gecombineerd worden ingezet. Welke past hangt af van de staat van de toplaag — dat beoordelen wij, niet een prijslijst.",
  alternates: { canonical: "/diensten" },
};

export default function DienstenPage() {
  return (
    <>
      <Header variant="solid" active="Polijsten" />

      <section className="bg-white pt-14 pb-9 sm:pt-22 sm:pb-14">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-8">
          <p className="mb-4 font-mono text-[11px] tracking-[0.2em] text-azure uppercase">
            Behandelingen
          </p>
          <h1 className="font-heading mb-5 max-w-[22ch] text-[32px] leading-[1.06] font-semibold tracking-tight text-navy text-balance sm:text-[58px]">
            Wat uw boot nodig heeft, en wat niet
          </h1>
          <p className="max-w-[56ch] text-base leading-relaxed text-ink-muted text-pretty sm:text-lg">
            Vier behandelingen die los of gecombineerd worden ingezet. Welke
            past hangt af van de staat van de toplaag — dat beoordelen wij,
            niet een prijslijst.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {diensten.map((d) => (
              <a
                key={d.slug}
                href={`#${d.slug}`}
                className="rounded-full border border-mist-deep px-4 py-2 text-[13.5px] text-ink-muted no-underline hover:border-azure hover:text-azure"
              >
                {d.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-14 sm:pb-28">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-8">
          <div className="flex flex-col gap-px border-y border-mist-deep bg-mist-deep">
            {diensten.map((d) => (
              <div key={d.slug} id={d.slug} className="scroll-mt-20 bg-white py-8 sm:py-14">
                <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-2 lg:gap-14">
                  <div>
                    <div className="mb-4 flex items-baseline gap-3.5">
                      <span className="font-mono text-[11px] tracking-[0.16em] text-azure">
                        {d.order}
                      </span>
                      <h2 className="font-heading text-[24px] leading-tight font-semibold tracking-tight text-navy sm:text-[34px]">
                        {d.title}
                      </h2>
                    </div>
                    {d.intro.map((p, i) => (
                      <p
                        key={i}
                        className="mb-3.5 max-w-[52ch] text-base leading-relaxed text-ink-muted text-pretty last:mb-0"
                      >
                        {p}
                      </p>
                    ))}
                  </div>

                  <div className="rounded border border-mist-deep bg-mist p-6 sm:p-7">
                    <div className="flex flex-col gap-4.5">
                      <div>
                        <p className="mb-1.5 font-mono text-[10.5px] tracking-[0.16em] text-azure uppercase">
                          Voor welke boot
                        </p>
                        <p className="text-[14.5px] leading-relaxed text-ink">
                          {d.forWhom}
                        </p>
                      </div>
                      <div>
                        <p className="mb-1.5 font-mono text-[10.5px] tracking-[0.16em] text-azure uppercase">
                          Resultaat
                        </p>
                        <p className="text-[14.5px] leading-relaxed text-ink">
                          {d.result}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-mist-deep pt-4">
                        <span className="text-[14.5px] font-semibold text-navy">
                          Prijs op aanvraag
                        </span>
                        <Link
                          href="/contact"
                          className="rounded-sm bg-navy px-5 py-2.5 text-sm font-semibold text-white no-underline hover:bg-navy-light"
                        >
                          Offerte aanvragen
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-mist-deep bg-mist py-14 sm:py-24">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-8">
          <div className="mb-8 max-w-[52ch] sm:mb-11">
            <p className="mb-4 font-mono text-[11px] tracking-[0.18em] text-azure uppercase">
              Zie het verschil
            </p>
            <h2 className="font-heading text-[26px] leading-tight font-semibold tracking-tight text-navy text-balance sm:text-4xl">
              Een glansrestauratie, voor en na
            </h2>
          </div>
          <BeforeAfterSlider
            before={{ src: "/images/boat_washed_before.JPG", alt: "Voor de behandeling" }}
            after={{ src: "/images/boat_washed_after.jpg", alt: "Na de behandeling" }}
            className="aspect-video"
          />
        </div>
      </section>

      <section className="bg-navy py-14 sm:py-22">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-7 px-4 sm:px-8">
          <div className="min-w-0">
            <h2 className="font-heading mb-3 max-w-[30ch] text-[24px] leading-tight font-semibold tracking-tight text-white text-balance sm:text-4xl">
              Niet zeker welke behandeling u nodig heeft?
            </h2>
            <p className="max-w-[46ch] text-base leading-relaxed text-white/72">
              Stuur een paar foto&apos;s van de romp. Wij zeggen wat er nodig
              is — en net zo goed wat niet.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-sm bg-white px-7 py-3.5 text-sm font-semibold text-navy no-underline hover:bg-mist"
          >
            Offerte aanvragen
          </Link>
        </div>
      </section>
    </>
  );
}
