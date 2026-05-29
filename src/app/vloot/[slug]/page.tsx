import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { boats, getBoat } from '@/data/boats'
import { ImagePlaceholder } from '@/components/ImagePlaceholder'

export function generateStaticParams() {
  return boats.map((b) => ({ slug: b.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const boat = getBoat(slug)
  if (!boat) return {}

  return {
    title: boat.name,
    description: boat.shortDescription,
    alternates: { canonical: `/vloot/${slug}` },
    openGraph: {
      title: `${boat.name} | WielaardMarine`,
      description: boat.shortDescription,
    },
  }
}

export default async function BoatDetailPage({ params }: Props) {
  const { slug } = await params
  const boat = getBoat(slug)
  if (!boat) notFound()

  const paragraphs = boat.description.split('\n\n').filter(Boolean)

  const specs: [string, string][] = [
    ['Type', boat.type],
    ['Lengte', boat.length],
    ['Max. personen', `${boat.capacity}`],
    ...(boat.engine ? [['Motor', boat.engine] as [string, string]] : []),
    ...(boat.year ? [['Bouwjaar', `${boat.year}`] as [string, string]] : []),
  ]

  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">

        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-xs text-ink-muted font-mono">
          <Link href="/" className="hover:text-navy transition-colors">Home</Link>
          <span>/</span>
          <Link href="/vloot" className="hover:text-navy transition-colors">Vloot</Link>
          <span>/</span>
          <span className="text-navy">{boat.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ── LEFT: Images ── */}
          <div>
            {boat.coverImage ? (
              <Image
                src={boat.coverImage}
                alt={`${boat.name} — hoofdfoto`}
                width={900}
                height={600}
                priority
                className="w-full rounded-lg object-cover"
              />
            ) : boat.images.length > 0 ? (
              <Image
                src={`/images/boats/${boat.slug}/${boat.images[0]}`}
                alt={`${boat.name} — hoofdfoto`}
                width={900}
                height={600}
                priority
                className="w-full rounded-lg object-cover"
              />
            ) : (
              <ImagePlaceholder label={boat.name} aspectRatio="video" className="rounded-lg overflow-hidden" />
            )}

            {boat.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2 mt-2">
                {boat.images.slice(1, 5).map((img, i) => (
                  <div key={img}>
                    {/* Uncomment:
                    <Image
                      src={`/images/boats/${boat.slug}/${img}`}
                      alt={`${boat.name} foto ${i + 2}`}
                      width={200}
                      height={150}
                      className="w-full h-20 object-cover rounded"
                    />
                    */}
                    <ImagePlaceholder label={`${i + 2}`} aspectRatio="square" className="rounded overflow-hidden" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ── RIGHT: Info ── */}
          <div className="lg:sticky lg:top-24">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-bronze text-xs font-mono uppercase tracking-wider border border-bronze/50 rounded px-2 py-0.5">
                {boat.type}
              </span>
              {!boat.available && (
                <span className="text-ink-muted text-xs font-mono uppercase tracking-wider border border-navy/20 rounded px-2 py-0.5">
                  Niet beschikbaar
                </span>
              )}
            </div>

            <h1 className="font-serif text-navy text-4xl sm:text-5xl mb-4">{boat.name}</h1>
            <p className="text-ink-muted leading-relaxed mb-8">{boat.shortDescription}</p>

            {/* Pricing */}
            <div className="bg-sand border border-navy/10 rounded-lg p-6 mb-8">
              <h2 className="text-bronze text-xs font-mono uppercase tracking-widest mb-4">Tarieven</h2>
              <dl className="space-y-2 text-sm divide-y divide-navy/8">
                {boat.pricePerHalfDay && (
                  <div className="flex justify-between items-center py-2">
                    <dt className="text-ink-muted">Halve dag</dt>
                    <dd className="text-navy font-semibold">€ {boat.pricePerHalfDay}</dd>
                  </div>
                )}
                <div className="flex justify-between items-center py-2">
                  <dt className="text-ink-muted">Hele dag</dt>
                  <dd className="text-navy font-semibold text-lg">€ {boat.pricePerDay}</dd>
                </div>
                {boat.pricePerWeek && (
                  <div className="flex justify-between items-center py-2">
                    <dt className="text-ink-muted">Week</dt>
                    <dd className="text-navy font-semibold">€ {boat.pricePerWeek}</dd>
                  </div>
                )}
                {boat.deposit && (
                  <div className="flex justify-between items-center pt-3 border-t border-navy/10 mt-1">
                    <dt className="text-ink-muted/60 text-xs">Borg</dt>
                    <dd className="text-ink-muted/60 text-xs">€ {boat.deposit}</dd>
                  </div>
                )}
              </dl>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href={`/contact?boot=${boat.slug}`}
                className="flex-1 py-3.5 bg-bronze text-navy font-semibold text-center rounded hover:bg-bronze-light transition-colors"
              >
                Reserveer {boat.name}
              </Link>
              <a
                href="tel:+31612345678"
                className="flex-1 py-3.5 border border-navy/30 text-navy text-center rounded hover:border-navy hover:bg-navy/5 transition-colors text-sm"
              >
                Bel voor vragen
              </a>
            </div>

            {/* Specs */}
            <div className="mb-8">
              <h2 className="text-bronze text-xs font-mono uppercase tracking-widest mb-4">Specificaties</h2>
              <dl className="divide-y divide-navy/10">
                {specs.map(([label, value]) => (
                  <div key={label} className="flex justify-between py-2.5 text-sm">
                    <dt className="text-ink-muted">{label}</dt>
                    <dd className="text-navy font-medium">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Features */}
            {boat.features.length > 0 && (
              <div>
                <h2 className="text-bronze text-xs font-mono uppercase tracking-widest mb-4">Inbegrepen</h2>
                <ul className="space-y-2">
                  {boat.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-ink-muted">
                      <svg viewBox="0 0 20 20" className="w-4 h-4 text-bronze shrink-0 mt-0.5" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* ── Full description ── */}
        <div className="mt-16 max-w-3xl">
          <h2 className="font-serif text-navy text-2xl mb-6">Over {boat.name}</h2>
          <div className="space-y-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-ink-muted leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-navy/10">
          <Link
            href="/vloot"
            className="inline-flex items-center gap-2 text-bronze hover:text-bronze-dark transition-colors text-sm"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Terug naar vloot
          </Link>
        </div>
      </div>
    </div>
  )
}
