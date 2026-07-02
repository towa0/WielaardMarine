import type { Metadata } from 'next'
import { boats, type BoatType } from '@/data/boats'
import { BoatCard } from '@/components/BoatCard'

export const metadata: Metadata = {
  title: 'Vloot',
  description:
    'Bekijk onze volledige vloot: sloepen, motorjachten en kajuitboten te huur op de Binnenmaas in de Hoeksche Waard. Dag- en weekverhuur, honden welkom.',
  alternates: { canonical: '/vloot' },
}

const boatTypes: BoatType[] = ['Sloep', 'Motorboot', 'Kajuitboot', 'Zeilboot', 'RIB']

export default function VlootPage() {
  const available   = boats.filter((b) => b.available)
  const unavailable = boats.filter((b) => !b.available)

  const byType = (type: BoatType) => available.filter((b) => b.type === type)
  const typesPresent = boatTypes.filter((t) => byType(t).length > 0)

  return (
    <div className="bg-mist min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">

        {/* Page header */}
        <div className="mb-14 text-center">
          <p className="text-azure text-xs font-mono uppercase tracking-widest mb-3">Beschikbare boten</p>
          <h1 className="font-heading text-navy text-4xl sm:text-5xl mb-5">Onze vloot</h1>
          <p className="text-ink-muted max-w-xl mx-auto leading-relaxed">
            Kies de boot die bij uw plannen past. Twijfelt u? Bel ons — wij helpen u graag de juiste keuze maken.
          </p>
        </div>

        {/* Quick info strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {[
            { label: 'Boten beschikbaar', value: available.length.toString() },
            { label: 'Geen vaarbewijs', value: 'Sloepen' },
            { label: 'Verhuur vanaf', value: '½ dag' },
            { label: 'Honden', value: 'Welkom' },
          ].map((item) => (
            <div key={item.label} className="bg-white border border-navy/10 rounded-lg p-5 text-center">
              <p className="font-heading text-azure text-2xl mb-1">{item.value}</p>
              <p className="text-ink-muted text-xs font-mono uppercase tracking-wider">{item.label}</p>
            </div>
          ))}
        </div>

        {/* All boats — grouped by type */}
        {typesPresent.map((type) => (
          <section key={type} className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="font-heading text-navy text-2xl">{type}en</h2>
              <div className="flex-1 h-px bg-navy/10" />
              <span className="text-ink-muted text-xs font-mono">{byType(type).length} boot{byType(type).length !== 1 ? 'en' : ''}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {byType(type).map((boat) => (
                <BoatCard key={boat.slug} boat={boat} />
              ))}
            </div>
          </section>
        ))}

        {/* Unavailable boats */}
        {unavailable.length > 0 && (
          <section className="mt-16 pt-10 border-t border-navy/10">
            <h2 className="font-heading text-ink-muted text-xl mb-6">Momenteel niet beschikbaar</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 opacity-50">
              {unavailable.map((boat) => (
                <BoatCard key={boat.slug} boat={boat} />
              ))}
            </div>
          </section>
        )}

        {/* Contact strip */}
        <div className="mt-16 bg-navy border border-white/10 rounded-lg p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-white text-xl mb-1">Vragen of specifieke wensen?</h3>
            <p className="text-white/60 text-sm">Wij denken graag mee over de beste optie voor uw groep.</p>
          </div>
          <a
            href="tel:+31612345678"
            className="shrink-0 px-6 py-3 bg-white text-navy font-semibold rounded hover:bg-mist transition-colors text-sm"
          >
            Bel ons
          </a>
        </div>
      </div>
    </div>
  )
}
