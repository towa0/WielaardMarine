import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { WerkGalerij } from "@/components/WerkGalerij";
import { werkVoorNa, werkFotos } from "@/data/werk";

export const metadata: Metadata = {
  title: "Ons werk — voor en na het polijsten",
  description:
    "Resultaat van ons polijstwerk, en Julian aan het werk — handmatig, geen wasstraat.",
  alternates: { canonical: "/werk" },
};

export default function WerkPage() {
  return (
    <>
      <Header variant="solid" active="Werk" />

      <section className="bg-white pt-14 pb-9 sm:pt-22 sm:pb-14">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-8">
          <p className="mb-4 font-mono text-[11px] tracking-[0.2em] text-azure uppercase">
            Ons werk
          </p>
          <h1 className="font-heading mb-5 max-w-[20ch] text-[32px] leading-[1.06] font-semibold tracking-tight text-navy text-balance sm:text-[58px]">
            Resultaat, en het werk erachter
          </h1>
          <p className="max-w-[56ch] text-base leading-relaxed text-ink-muted text-pretty sm:text-lg">
            Hoogglans eindresultaat, en Julian aan het werk — machine in de
            hand, afplakwerk vooraf. Van één boot hebben we een echt voor-en-na
            paar.
          </p>
        </div>
      </section>

      <section className="bg-white pb-14 sm:pb-28">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-8">
          {/* <div className="mb-14 sm:mb-20">
            <p className="mb-2 font-mono text-[11px] tracking-[0.18em] text-azure uppercase">
              Eén behandeling van dichtbij
            </p>
            <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="font-heading text-[22px] leading-tight font-semibold text-navy sm:text-3xl">
                {werkVoorNa.title}
              </h2>
              <Link
                href={`/diensten#${werkVoorNa.dienstSlug}`}
                className="text-[13.5px] font-semibold whitespace-nowrap text-azure no-underline hover:text-azure-dark"
              >
                {werkVoorNa.subtitle} →
              </Link>
            </div>
            <BeforeAfterSlider
              before={{
                src: werkVoorNa.before,
                alt: `${werkVoorNa.title} — voor`,
              }}
              after={{ src: werkVoorNa.after, alt: `${werkVoorNa.title} — na` }}
              className="aspect-video max-w-[820px]"
            />
          </div> */}

          <WerkGalerij fotos={werkFotos} />
        </div>
      </section>

      <section className="bg-navy py-14 sm:py-22">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-7 px-4 sm:px-8">
          <div className="min-w-0">
            <h2 className="font-heading mb-3 max-w-[26ch] text-[24px] leading-tight font-semibold tracking-tight text-white text-balance sm:text-4xl">
              Uw boot als volgende foto?
            </h2>
            <p className="max-w-[46ch] text-base leading-relaxed text-white/72">
              Stuur een foto van de romp zoals hij nu is. Dan weet u wat er
              mogelijk is.
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
