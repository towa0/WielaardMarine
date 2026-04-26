import type { Metadata } from 'next'
import Link from 'next/link'
import { ImagePlaceholder } from '@/components/ImagePlaceholder'

export const metadata: Metadata = {
  title: 'Over Ons',
  description:
    'Leer WielaardMarine kennen — een familiebedrijf aan de Binnenmaas met passie voor het water en jarenlange ervaring in bootverhuur en onderhoud.',
  alternates: { canonical: '/over-ons' },
}

const milestones = [
  { year: '2008', text: 'WielaardMarine opgericht aan de Binnenmaas' },
  { year: '2012', text: 'Uitbreiding vloot naar 4 boten, start onderhoudsdienst' },
  { year: '2016', text: 'Opening overdekte stallingfaciliteit' },
  { year: '2020', text: 'Renovatie steiger en vernieuwing vloot' },
  { year: '2024', text: 'Meer dan 1.000 tevreden vaardagen per jaar' },
]

const values = [
  {
    title: 'Veiligheid eerst',
    text: 'Elke boot vertrekt na een grondige technische check. Alle huurders krijgen een persoonlijke introductie.',
  },
  {
    title: 'Persoonlijke service',
    text: 'Geen callcenter. U belt of mailt ons en krijgt direct iemand die uw boot kent en uw naam weet.',
  },
  {
    title: 'Liefde voor het water',
    text: 'De Binnenmaas is ons thuis. Wij kennen de wateren, de winden en de mooiste ankerplaatsen.',
  },
  {
    title: 'Respect voor de natuur',
    text: 'Wij werken bewust met schone motoren en milieuvriendelijke onderhoudsproducten.',
  },
]

export default function OverOnsPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-bronze text-xs font-mono uppercase tracking-widest mb-3">Wie wij zijn</p>
          <h1 className="font-serif text-navy text-4xl sm:text-5xl mb-5">Over WielaardMarine</h1>
          <p className="text-ink-muted max-w-xl mx-auto leading-relaxed">
            Een familiebedrijf met een diepe passie voor het water en de rust van de Hoeksche Waard.
          </p>
        </div>

        {/* Story + team photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mb-24 items-center">
          <div className="space-y-5 text-ink-muted leading-relaxed">
            <p>
              WielaardMarine is in 2008 opgericht door de familie Wielaard met een eenvoudige gedachte:
              iedereen verdient een dag op het water. Vanuit onze steiger aan de Binnenmaas verhuren
              wij boten aan gezinnen, vrienden en bedrijven die even willen ontsnappen aan de dagelijkse drukte.
            </p>
            <p>
              Door de jaren heen is onze vloot gegroeid en hebben wij een volledige onderhoudsdienst opgebouwd.
              Klanten die hun eigen boot bij ons in stalling geven, kunnen rekenen op professionele service
              van begin- tot eind vaarseizoen.
            </p>
            <p>
              Wij zijn geen anoniem verhuurbedrijf. Als u bij ons aanmeert, kent u de naam van degene
              die u helpt — en wij kennen de jouwe.
            </p>
          </div>

          <div>
            {/* Uncomment and replace with real team photo:
            <Image
              src="/images/team.jpg"
              alt="Het team van WielaardMarine"
              width={700}
              height={500}
              className="w-full rounded-lg object-cover"
            />
            */}
            <ImagePlaceholder label="Team WielaardMarine" aspectRatio="video" className="rounded-lg overflow-hidden" />
            <p className="text-center text-ink-muted/40 text-xs mt-2 font-mono">foto team volgt</p>
          </div>
        </div>

        {/* Values */}
        <section className="mb-24">
          <div className="text-center mb-10">
            <p className="text-bronze text-xs font-mono uppercase tracking-widest mb-3">Onze waarden</p>
            <h2 className="font-serif text-navy text-3xl">Waar wij voor staan</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-sand border border-navy/10 rounded-lg p-7">
                <div className="w-8 h-px bg-bronze mb-4" />
                <h3 className="font-serif text-navy text-lg mb-2">{v.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-24">
          <div className="text-center mb-10">
            <p className="text-bronze text-xs font-mono uppercase tracking-widest mb-3">Geschiedenis</p>
            <h2 className="font-serif text-navy text-3xl">Onze mijlpalen</h2>
          </div>
          <div className="relative pl-6 border-l border-bronze/30 space-y-8 max-w-lg mx-auto">
            {milestones.map((m) => (
              <div key={m.year} className="relative">
                <div className="absolute -left-[1.6rem] top-1 w-3 h-3 rounded-full bg-bronze" />
                <p className="text-bronze text-xs font-mono uppercase tracking-widest mb-1">{m.year}</p>
                <p className="text-ink-muted text-sm">{m.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Location */}
        <section>
          <div className="text-center mb-10">
            <p className="text-bronze text-xs font-mono uppercase tracking-widest mb-3">Locatie</p>
            <h2 className="font-serif text-navy text-3xl">Waar u ons vindt</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="bg-sand border border-navy/10 rounded-lg p-7 space-y-4 text-sm text-ink-muted">
              <div>
                <p className="text-bronze text-xs font-mono uppercase tracking-widest mb-2">Adres</p>
                {/* Update this */}
                <p>Havenweg 1<br />3281 XX Numansdorp<br />Hoeksche Waard</p>
              </div>
              <div>
                <p className="text-bronze text-xs font-mono uppercase tracking-widest mb-2">Openingstijden vaarseizoen</p>
                <p>Maandag t/m zaterdag: 08:00 – 18:00<br />Zondag: 09:00 – 16:00</p>
              </div>
              <div>
                <p className="text-bronze text-xs font-mono uppercase tracking-widest mb-2">Buiten seizoen</p>
                <p>Op afspraak</p>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-bronze text-sm hover:text-bronze-dark transition-colors"
                >
                  Neem contact op
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              {/* Replace with Google Maps embed:
              <iframe
                src="https://www.google.com/maps/embed?pb=..."
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              />
              */}
              <ImagePlaceholder label="Kaart — Binnenmaas, Numansdorp" aspectRatio="video" className="rounded-lg overflow-hidden" />
              <p className="text-center text-ink-muted/40 text-xs mt-2 font-mono">kaart volgt</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
