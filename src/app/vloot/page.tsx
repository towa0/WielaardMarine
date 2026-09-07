import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { boats, type BoatType } from '@/data/boats'
import { BoatCard } from '@/components/BoatCard'
import { company } from '@/data/company'

export const metadata: Metadata = {
  title: 'Vloot te huur — sloepen op de Binnenmaas',
  description:
    'Naast bootverzorging en polijsten bieden wij ook boten te huur aan: sloepen, motorjachten en kajuitboten op de Binnenmaas in de Hoeksche Waard. Dag- en weekverhuur, honden welkom.',
  alternates: { canonical: '/vloot' },
}

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
            Onze vloot te huur
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
