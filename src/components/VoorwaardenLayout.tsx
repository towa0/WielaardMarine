import Link from "next/link";
import { Header } from "@/components/Header";

interface Props {
  title: string;
  updated?: string;
  otherHref: string;
  otherLabel: string;
  children: React.ReactNode;
}

export function VoorwaardenLayout({
  title,
  updated,
  otherHref,
  otherLabel,
  children,
}: Props) {
  return (
    <>
      <Header variant="solid" active="" />

      <section className="bg-white pt-12 pb-14 sm:pt-20 sm:pb-28">
        <div className="mx-auto max-w-[820px] px-4 sm:px-8">
          <p className="mb-4 font-mono text-[11px] tracking-[0.2em] text-azure uppercase">
            Juridisch
          </p>
          <h1 className="font-heading mb-4 text-[30px] leading-[1.08] font-semibold tracking-tight text-navy sm:text-5xl">
            {title}
          </h1>
          {updated && (
            <p className="mb-10 text-sm text-ink-muted">
              Laatst bijgewerkt: {updated}
            </p>
          )}

          {children}

          <div className="mt-13 flex flex-wrap items-center justify-between gap-5 border-t border-mist-deep pt-6.5">
            <p className="text-[14.5px] leading-relaxed text-ink-muted">
              Vragen over deze voorwaarden? Neem contact op.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href={otherHref} className="text-azure no-underline">
                {otherLabel}
              </Link>
              <Link href="/privacyverklaring" className="text-azure no-underline">
                Privacyverklaring
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function SkeletonArticles({ titles }: { titles: string[] }) {
  return (
    <div className="flex flex-col gap-8.5">
      {titles.map((s, i) => (
        <div key={s}>
          <h2 className="font-heading mb-3 text-xl leading-tight font-semibold text-navy">
            {i + 1}. {s}
          </h2>
          <div className="mb-2.5 h-2.5 rounded-sm bg-mist" />
          <div className="mb-2.5 h-2.5 w-[85%] rounded-sm bg-mist" />
          <div className="h-2.5 w-[58%] rounded-sm bg-mist" />
        </div>
      ))}
    </div>
  );
}

export function Article({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-heading mb-3 text-xl leading-tight font-semibold text-navy">
        {title}
      </h2>
      <div className="flex flex-col gap-3 text-[15px] leading-relaxed text-ink-muted">
        {children}
      </div>
    </div>
  );
}
