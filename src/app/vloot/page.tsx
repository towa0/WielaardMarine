import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { boats, type BoatType } from '@/data/boats'
import { BoatCard } from '@/components/BoatCard'
import { company } from '@/data/company'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Sloep of boot huren op de Binnenmaas',
  description:
    'Huur een sloep of consoleboot op de Binnenmaas in de Hoeksche Waard. Per halve of hele dag, sloepen zonder vaarbewijs en honden welkom.',
  path: '/vloot',
})

const boatTypes: BoatType[] = ['Sloep', 'Motorboot', 'Kajuitboot', 'Zeilboot', 'RIB']

export default function VlootPage() {
  const available = boats.filter((b) => b.available)
  const unavailable = boats.filter((b) => !b.available)

  const byType = (type: BoatType) => available.filter((b) => b.type === type)
  const typesPresent = boatTypes.filter((t) => byType(t).length > 0)

  return (
    <>
      <Header variant="solid" active="Verhuur" />

      <section className="bg-white pt-12 pb-8 sm:pt-19 sm:pb-12">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-8">
          <p className="mb-4 font-mono text-[11px] tracking-[0.2em] text-ink-muted uppercase">
            Ook mogelijk naast polijsten
          </p>
          <h1 className="font-heading mb-4.5 max-w-[22ch] text-[28px] leading-[1.08] font-semibold tracking-tight text-navy text-balance sm:text-[44px]">
            Sloep of boot huren op de Binnenmaas
          </h1>
          <p className="max-w-[56ch] text-base leading-relaxed text-ink-muted text-pretty">
            Naast bootverzorging bieden wij ook onze boten te huur aan. Kies
            de boot die bij uw plannen past — twijfelt u? Bel ons, wij helpen
            u graag de juiste keuze maken.
          </p>
        </div>
      </section>

      <section className="bg-white pb-12 sm:pb-22">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-8">
          <div className="mb-9 grid grid-cols-2 gap-px border border-mist-deep bg-mist-deep sm:mb-14 sm:grid-cols-4">
            {[
              { label: 'Boten beschikbaar', value: available.length.toString() },
              { label: 'Geen vaarbewijs', value: 'Sloepen' },
              { label: 'Verhuur vanaf', value: '½ dag' },
              { label: 'Honden', value: 'Welkom' },
            ].map((item) => (
              <div key={item.label} className="bg-mist p-5">
                <p className="font-heading mb-1 text-[22px] font-semibold text-navy">{item.value}</p>
                <p className="font-mono text-[10.5px] tracking-[0.13em] text-ink-muted uppercase">{item.label}</p>
              </div>
            ))}
          </div>

          {typesPresent.map((type) => (
            <section key={type} className="mb-9 sm:mb-13">
              <div className="mb-5 flex items-center gap-4">
                <h2 className="font-heading text-[19px] font-semibold text-navy">{type}en</h2>
                <div className="h-px flex-1 bg-mist-deep" />
                <span className="font-mono text-[11px] text-ink-muted">
                  {byType(type).length} boot{byType(type).length !== 1 ? 'en' : ''}
                </span>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {byType(type).map((boat) => (
                  <BoatCard key={boat.slug} boat={boat} />
                ))}
              </div>
            </section>
          ))}

          {unavailable.length > 0 && (
            <section className="mt-10 border-t border-mist-deep pt-9 sm:mt-14 sm:pt-13">
              <h2 className="font-heading mb-5 text-[17px] font-semibold text-ink-muted">
                Momenteel niet beschikbaar
              </h2>
              <div className="grid grid-cols-1 gap-5 opacity-50 sm:grid-cols-2 lg:grid-cols-3">
                {unavailable.map((boat) => (
                  <BoatCard key={boat.slug} boat={boat} />
                ))}
              </div>
            </section>
          )}

          <section className="mt-10 max-w-[64ch] sm:mt-14">
            <h2 className="font-heading mb-4 text-[22px] leading-tight font-semibold text-navy sm:text-[28px]">
              Zo werkt boot huren bij Wielaard Marine
            </h2>
            <p className="mb-3.5 text-base leading-relaxed text-ink-muted text-pretty">
              Wij verhuren sloepen en een consoleboot op de Binnenmaas, in de
              Hoeksche Waard. U huurt per halve of hele dag. Voor onze sloepen
              heeft u geen vaarbewijs nodig, en honden zijn welkom aan boord.
            </p>
            <p className="mb-3.5 text-base leading-relaxed text-ink-muted text-pretty">
              Welke boot past, hangt vooral af van het aantal personen:{' '}
              {available.map((boat, index) => (
                <span key={boat.slug}>
                  {index > 0 && (index === available.length - 1 ? ' en ' : ', ')}
                  <Link href={`/vloot/${boat.slug}`} className="font-medium">
                    {boat.name}
                  </Link>{' '}
                  biedt plek aan maximaal {boat.capacity} personen
                </span>
              ))}
              .
            </p>
            <p className="text-base leading-relaxed text-ink-muted text-pretty">
              Reserveren doet u via het{' '}
              <Link href="/contact" className="font-medium">contactformulier</Link>{' '}
              of telefonisch. Voor de verhuur gelden onze{' '}
              <Link href="/huurvoorwaarden" className="font-medium">huurvoorwaarden</Link>.
              Heeft uw eigen boot onderhoud nodig? Bekijk dan onze{' '}
              <Link href="/diensten" className="font-medium">polijstbehandelingen</Link>.
            </p>
          </section>

          <div className="mt-9 flex flex-col flex-wrap items-center justify-between gap-5 rounded border border-mist-deep bg-mist p-6 sm:mt-13 sm:flex-row sm:p-8">
            <div className="min-w-0 text-center sm:text-left">
              <h3 className="font-heading mb-1.5 text-lg font-semibold text-navy">
                Vragen of specifieke wensen?
              </h3>
              <p className="text-[14.5px] text-ink-muted">
                Wij denken graag mee over de beste optie voor uw groep.
              </p>
            </div>
            <a
              href={`tel:${company.phone}`}
              className="shrink-0 rounded-sm bg-navy px-6 py-3.5 text-sm font-semibold text-white no-underline hover:bg-navy-light"
            >
              Bel ons
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
