import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { diensten, getDienst } from "@/data/diensten";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return diensten.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dienst = getDienst(slug);
  if (!dienst) return {};

  return pageMetadata({
    title: dienst.metaTitle,
    description: dienst.metaDescription,
    path: `/diensten/${dienst.slug}`,
  });
}

export default async function DienstPage({ params }: Props) {
  const { slug } = await params;
  const dienst = getDienst(slug);
  if (!dienst) notFound();

  const overige = diensten.filter((d) => d.slug !== dienst.slug);

  return (
    <>
      <JsonLd data={serviceJsonLd(dienst)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Behandelingen", path: "/diensten" },
          { name: dienst.title, path: `/diensten/${dienst.slug}` },
        ])}
      />
      <Header variant="solid" active="Polijsten" />

      <section className="bg-white pt-10 pb-9 sm:pt-14 sm:pb-14">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-8">
          <nav
            aria-label="Kruimelpad"
            className="mb-8 flex flex-wrap items-center gap-2 font-mono text-xs text-ink-muted"
          >
            <Link href="/" className="text-ink-muted no-underline hover:text-navy">
              Home
            </Link>
            <span>/</span>
            <Link href="/diensten" className="text-ink-muted no-underline hover:text-navy">
              Behandelingen
            </Link>
            <span>/</span>
            <span className="text-navy">{dienst.title}</span>
          </nav>
          <h1 className="font-heading mb-5 max-w-[24ch] text-[30px] leading-[1.08] font-semibold tracking-tight text-navy text-balance sm:text-[50px]">
            {dienst.h1}
          </h1>
          <p className="max-w-[56ch] text-base leading-relaxed text-ink-muted text-pretty sm:text-lg">
            {dienst.homeSummary} Handmatig uitgevoerd door Julian Wielaard, aan
            de Binnenmaas in de Hoeksche Waard.
          </p>
        </div>
      </section>

      <section className="bg-white pb-14 sm:pb-24">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-8 px-4 sm:px-8 lg:grid-cols-2 lg:gap-14">
          <div>
            {dienst.intro.map((p) => (
              <p
                key={p}
                className="mb-4 max-w-[56ch] text-[16.5px] leading-relaxed text-ink-muted text-pretty last:mb-0"
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
                <p className="text-[14.5px] leading-relaxed text-ink">{dienst.forWhom}</p>
              </div>
              <div>
                <p className="mb-1.5 font-mono text-[10.5px] tracking-[0.16em] text-azure uppercase">
                  Resultaat
                </p>
                <p className="text-[14.5px] leading-relaxed text-ink">{dienst.result}</p>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-mist-deep pt-4">
                <span className="text-[14.5px] font-semibold text-navy">Prijs op aanvraag</span>
                <Link
                  href="/contact"
                  className="rounded-sm bg-navy px-5 py-2.5 text-sm font-semibold text-white no-underline hover:bg-navy-light hover:text-white"
                >
                  Offerte aanvragen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-mist-deep bg-mist py-14 sm:py-24">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 px-4 sm:px-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="font-heading mb-6 text-[24px] leading-tight font-semibold tracking-tight text-navy sm:text-[32px]">
              Wanneer past dit bij uw boot?
            </h2>
            <ul className="flex flex-col gap-3.5">
              {dienst.signs.map((sign) => (
                <li key={sign} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-azure" />
                  <span className="text-[15.5px] leading-relaxed text-ink-muted">{sign}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-heading mb-6 text-[24px] leading-tight font-semibold tracking-tight text-navy sm:text-[32px]">
              Zo pakken wij het aan
            </h2>
            <ol className="flex flex-col gap-5">
              {dienst.steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="font-mono text-[11px] tracking-[0.14em] text-azure">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading mb-1 text-[17px] font-semibold text-navy">
                      {step.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-ink-muted">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {dienst.slug === "glansrestauratie" && (
        <section className="bg-white pt-14 sm:pt-24">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-8">
            <h2 className="font-heading mb-6 text-[24px] leading-tight font-semibold tracking-tight text-navy sm:text-[32px]">
              Een glansrestauratie, voor en na
            </h2>
            <BeforeAfterSlider
              before={{ src: "/images/boat_washed_before.JPG", alt: "Doffe zwarte romp op de trailer, voor de glansrestauratie" }}
              after={{ src: "/images/boat_washed_after.jpg", alt: "Dezelfde zwarte romp in hoogglans, na de glansrestauratie" }}
              className="aspect-video"
            />
          </div>
        </section>
      )}

      <section className="bg-white py-14 sm:py-24">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-10 px-4 sm:px-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="font-heading mb-6 text-[24px] leading-tight font-semibold tracking-tight text-navy sm:text-[32px]">
              Veelgestelde vragen
            </h2>
            <div className="flex flex-col gap-6">
              {dienst.faqs.map((faq) => (
                <div key={faq.q}>
                  <h3 className="font-heading mb-1.5 text-[17px] font-semibold text-navy">
                    {faq.q}
                  </h3>
                  <p className="max-w-[56ch] text-[15px] leading-relaxed text-ink-muted">{faq.a}</p>
                </div>
              ))}
            </div>
            <Link
              href="/werk"
              className="mt-7 inline-block text-[15px] font-semibold text-azure no-underline hover:text-azure-dark"
            >
              Bekijk voor-en-na foto&apos;s van ons werk
            </Link>
          </div>
          {dienst.image && (
            <Image
              src={dienst.image.src}
              alt={dienst.image.alt}
              width={1200}
              height={900}
              sizes="(min-width: 1024px) 546px, 100vw"
              className="aspect-[4/3] w-full rounded object-cover"
            />
          )}
        </div>
      </section>

      <section className="border-t border-mist-deep bg-mist py-14 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-8">
          <h2 className="font-heading mb-6 text-[22px] leading-tight font-semibold tracking-tight text-navy sm:text-[28px]">
            Andere behandelingen
          </h2>
          <div className="grid grid-cols-1 gap-px border border-mist-deep bg-mist-deep sm:grid-cols-3">
            {overige.map((d) => (
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

      <section className="bg-navy py-14 sm:py-22">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-7 px-4 sm:px-8">
          <div className="min-w-0">
            <h2 className="font-heading mb-3 max-w-[30ch] text-[24px] leading-tight font-semibold tracking-tight text-white text-balance sm:text-4xl">
              Niet zeker of dit is wat uw boot nodig heeft?
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
