import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import Image from "next/image";
import { VoorNaPaar } from "@/components/VoorNaPaar";
import { WerkGalerij } from "@/components/WerkGalerij";
import { werkParen, werkTapeTest, werkAanHetWerk, werkFotos } from "@/data/werk";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Boot polijsten voor en na: foto's",
  description:
    "Voor-en-na foto's van boten die wij polijstten: doffe gelcoat terug naar hoogglans. Bekijk het resultaat en het handwerk erachter, in de Hoeksche Waard.",
  path: "/werk",
});

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
            Boot polijsten: voor en na, en het werk erachter
          </h1>
          <p className="max-w-[56ch] text-base leading-relaxed text-ink-muted text-pretty sm:text-lg">
            Dezelfde boot voor en na de behandeling, en Julian aan het werk —
            machine in de hand, afplakwerk vooraf.
          </p>
          <p className="mt-4 max-w-[56ch] text-base leading-relaxed text-ink-muted text-pretty sm:text-lg">
            Op deze foto&apos;s ziet u wat polijsten doet met gelcoat die dof
            is geworden door zon, weer en aanslag. Sterk geoxideerde rompen
            krijgen een{" "}
            <Link href="/diensten/glansrestauratie" className="font-medium">
              glansrestauratie
            </Link>
            , gevolgd door{" "}
            <Link href="/diensten/coating-bescherming" className="font-medium">
              coating en bescherming
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-navy-dark py-12 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-8">
          <div className="flex flex-col gap-12 sm:gap-20">
            {werkParen.map((paar, index) => (
              <VoorNaPaar key={paar.id} paar={paar} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-28">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-8">
          <h2 className="font-heading mb-6 text-[22px] leading-tight font-semibold text-navy sm:mb-8 sm:text-3xl">
            Aan het werk
          </h2>
          <p className="mb-6 max-w-[62ch] text-base leading-relaxed text-ink-muted text-pretty sm:mb-8">
            Polijsten is handwerk: vanaf de ladder, de steiger of op het dek,
            aan boten op de kant en in de loods. Randen en beslag worden vooraf
            afgeplakt, zodat alleen de gelcoat wordt behandeld.
          </p>
          <div className="mb-14 sm:mb-24">
            <WerkGalerij fotos={werkAanHetWerk} />
          </div>

          <div className="mb-14 grid grid-cols-1 items-center gap-6 sm:mb-24 sm:grid-cols-2 sm:gap-12">
            <div className="relative aspect-[3/4] overflow-hidden rounded border border-mist-deep bg-mist">
              <Image
                src={werkTapeTest.src}
                alt={werkTapeTest.alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading mb-3 text-[22px] leading-tight font-semibold text-navy sm:text-3xl">
                {werkTapeTest.title}
              </h2>
              <p className="max-w-[40ch] text-base leading-relaxed text-ink-muted">
                {werkTapeTest.caption}
              </p>
            </div>
          </div>

          <h2 className="font-heading mb-6 text-[22px] leading-tight font-semibold text-navy sm:mb-8 sm:text-3xl">
            Meer resultaat
          </h2>
          <p className="mb-6 max-w-[62ch] text-base leading-relaxed text-ink-muted text-pretty sm:mb-8">
            Sloepen en motorjachten, zwarte en witte rompen. Welke behandeling
            nodig is hangt af van de staat van de toplaag — dat is bij elke
            boot anders.{" "}
            <Link href="/diensten" className="font-medium">
              Bekijk alle behandelingen
            </Link>
            .
          </p>
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
