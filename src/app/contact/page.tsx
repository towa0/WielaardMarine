'use client'

// NOTE: This form currently shows a thank-you message on submit but sends nothing.
// Options to wire it up:
//   A) Formspree (easiest): change onSubmit to a real fetch to https://formspree.io/f/YOUR_ID
//   B) Netlify Forms: add data-netlify="true" to <form>, remove e.preventDefault()
//   C) Custom API route: POST to /api/contact (add src/app/api/contact/route.ts)

import { useState } from 'react'

const faqs = [
  {
    q: 'Heb ik een vaarbewijs nodig?',
    a: 'Voor onze sloepen tot en met 15 pk is geen vaarbewijs vereist. Voor grotere boten is een CWO II of hoger nodig.',
  },
  {
    q: 'Kan ik een schipper inhuren?',
    a: 'Ja, op aanvraag stellen wij een gecertificeerde schipper beschikbaar. Vraag hiernaar bij uw reservering.',
  },
  {
    q: 'Zijn honden welkom?',
    a: 'Ja! Honden zijn welkom op onze sloepen. Vermeld dit even bij uw reservering.',
  },
  {
    q: 'Wat als ik te laat terugkom?',
    a: 'Overuren worden in rekening gebracht (€25/uur). Neem direct contact op als u denkt de boot niet op tijd terug te kunnen brengen.',
  },
  {
    q: 'Wat is inbegrepen in de huurprijs?',
    a: 'Veiligheidspakket (reddingsvesten, lichten, anker), brandstof voor het eerste uur, grondige uitleg en telefonische support.',
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    // Replace this with your actual submit logic (see note above)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">

        {/* Page header */}
        <div className="mb-14 text-center">
          <p className="text-bronze text-xs font-mono uppercase tracking-widest mb-3">Kom in contact</p>
          <h1 className="font-serif text-navy text-4xl sm:text-5xl mb-5">Contact</h1>
          <p className="text-ink-muted max-w-lg mx-auto leading-relaxed">
            Reserveer een boot, vraag een offerte aan of stel ons gewoon een vraag. Wij reageren binnen één werkdag.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* ── Contact form ── */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-sand border border-navy/10 rounded-lg p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-bronze/10 flex items-center justify-center mx-auto mb-5">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 text-bronze" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="font-serif text-navy text-2xl mb-3">Bedankt!</h2>
                <p className="text-ink-muted text-sm">
                  Uw bericht is ontvangen. Wij nemen zo snel mogelijk contact met u op.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-bronze mb-2">
                      Naam *
                    </label>
                    <input
                      id="name" name="name" type="text" required
                      className="w-full bg-sand border border-navy/20 rounded px-4 py-3 text-navy text-sm placeholder:text-ink-muted/40 focus:outline-none focus:border-bronze transition-colors"
                      placeholder="Jan Jansen"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-bronze mb-2">
                      E-mail *
                    </label>
                    <input
                      id="email" name="email" type="email" required
                      className="w-full bg-sand border border-navy/20 rounded px-4 py-3 text-navy text-sm placeholder:text-ink-muted/40 focus:outline-none focus:border-bronze transition-colors"
                      placeholder="jan@voorbeeld.nl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-widest text-bronze mb-2">
                      Telefoon
                    </label>
                    <input
                      id="phone" name="phone" type="tel"
                      className="w-full bg-sand border border-navy/20 rounded px-4 py-3 text-navy text-sm placeholder:text-ink-muted/40 focus:outline-none focus:border-bronze transition-colors"
                      placeholder="+31 6 00 00 00 00"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-widest text-bronze mb-2">
                      Onderwerp
                    </label>
                    <select
                      id="subject" name="subject"
                      className="w-full bg-sand border border-navy/20 rounded px-4 py-3 text-navy text-sm focus:outline-none focus:border-bronze transition-colors"
                    >
                      <option value="verhuur">Bootverhuur</option>
                      <option value="onderhoud">Onderhoud / reparatie</option>
                      <option value="stalling">Winterstalling</option>
                      <option value="overig">Overig</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="date" className="block text-xs font-mono uppercase tracking-widest text-bronze mb-2">
                    Gewenste datum
                  </label>
                  <input
                    id="date" name="date" type="date"
                    className="w-full bg-sand border border-navy/20 rounded px-4 py-3 text-navy text-sm focus:outline-none focus:border-bronze transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-bronze mb-2">
                    Bericht *
                  </label>
                  <textarea
                    id="message" name="message" required rows={5}
                    className="w-full bg-sand border border-navy/20 rounded px-4 py-3 text-navy text-sm placeholder:text-ink-muted/40 focus:outline-none focus:border-bronze transition-colors resize-none"
                    placeholder="Vertel ons waarmee wij u kunnen helpen…"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-bronze text-navy font-semibold rounded hover:bg-bronze-light disabled:opacity-60 transition-colors text-sm"
                >
                  {loading ? 'Bezig met verzenden…' : 'Verstuur bericht'}
                </button>

                <p className="text-ink-muted/50 text-xs text-center">
                  * Verplichte velden. Wij delen uw gegevens niet met derden.
                </p>
              </form>
            )}
          </div>

          {/* ── Sidebar ── */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-navy rounded-lg p-7">
              <h2 className="text-bronze text-xs font-mono uppercase tracking-widest mb-5">Direct contact</h2>
              <div className="space-y-5 text-sm">
                <div>
                  <p className="text-cream/40 text-xs uppercase tracking-wider mb-1">Telefoon</p>
                  <a href="tel:+31612345678" className="text-cream hover:text-bronze transition-colors text-base font-medium">
                    +31 6 12 34 56 78
                  </a>
                </div>
                <div>
                  <p className="text-cream/40 text-xs uppercase tracking-wider mb-1">E-mail</p>
                  <a href="mailto:info@wielaardmarine.nl" className="text-cream hover:text-bronze transition-colors">
                    info@wielaardmarine.nl
                  </a>
                </div>
                <div>
                  <p className="text-cream/40 text-xs uppercase tracking-wider mb-1">Adres</p>
                  {/* Update this */}
                  <address className="not-italic text-cream/70 leading-relaxed">
                    Havenweg 1<br />
                    3281 XX Numansdorp<br />
                    Hoeksche Waard
                  </address>
                </div>
                <div>
                  <p className="text-cream/40 text-xs uppercase tracking-wider mb-1">Openingstijden</p>
                  <p className="text-cream/70">Ma – Za: 08:00 – 18:00<br />Zo: 09:00 – 16:00</p>
                </div>
              </div>
            </div>

            <div className="bg-sand border border-navy/10 rounded-lg p-7">
              <h2 className="text-bronze text-xs font-mono uppercase tracking-widest mb-3">Vlug reserveren?</h2>
              <p className="text-ink-muted text-sm mb-4">
                Bel ons direct — wij controleren de beschikbaarheid meteen voor u.
              </p>
              <a
                href="tel:+31612345678"
                className="block w-full py-3 bg-bronze text-navy font-semibold text-center rounded hover:bg-bronze-light transition-colors text-sm"
              >
                Bel nu
              </a>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section className="mt-24">
          <div className="text-center mb-10">
            <p className="text-bronze text-xs font-mono uppercase tracking-widest mb-3">Veelgestelde vragen</p>
            <h2 className="font-serif text-navy text-3xl">FAQ</h2>
          </div>
          <div className="max-w-3xl mx-auto divide-y divide-navy/10">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-5">
                <h3 className="text-navy font-medium mb-2 text-sm">{faq.q}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
