"use client";

// Contact form uses Formspree (free tier — up to 50 submissions/month).
// To activate: sign up at https://formspree.io, create a form, and replace
// FORMSPREE_FORM_ID below with your form ID (the part after /f/ in the endpoint).
const FORMSPREE_FORM_ID = "mojowkwz";

import { useState } from "react";

const faqs = [
  {
    q: "Heb ik een vaarbewijs nodig?",
    a: "Voor onze sloepen tot en met 15 pk is geen vaarbewijs vereist. Voor grotere boten is een CWO II of hoger nodig.",
  },
  {
    q: "Kan ik een schipper inhuren?",
    a: "Ja, op aanvraag stellen wij een gecertificeerde schipper beschikbaar. Vraag hiernaar bij uw reservering.",
  },
  {
    q: "Zijn honden welkom?",
    a: "Ja! Honden zijn welkom op onze sloepen. Vermeld dit even bij uw reservering.",
  },
  {
    q: "Wat als ik te laat terugkom?",
    a: "Overuren worden in rekening gebracht (€25/uur). Neem direct contact op als u denkt de boot niet op tijd terug te kunnen brengen.",
  },
  {
    q: "Wat is inbegrepen in de huurprijs?",
    a: "Veiligheidspakket (reddingsvesten, lichten, anker), brandstof voor het eerste uur, grondige uitleg en telefonische support.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Er is iets misgegaan. Probeer het opnieuw of bel ons direct.");
      }
    } catch {
      alert("Er is iets misgegaan. Probeer het opnieuw of bel ons direct.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-mist min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        {/* Page header */}
        <div className="mb-14 text-center">
          <p className="text-azure text-xs font-mono uppercase tracking-widest mb-3">
            Kom in contact
          </p>
          <h1 className="font-heading text-navy text-4xl sm:text-5xl mb-5">
            Contact
          </h1>
          <p className="text-ink-muted max-w-lg mx-auto leading-relaxed">
            Vraag een offerte aan voor polijsten, reserveer een boot, of stel
            ons gewoon een vraag. Wij reageren binnen één werkdag.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* ── Contact form ── */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white border border-navy/10 rounded-lg p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-azure/10 flex items-center justify-center mx-auto mb-5">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-7 h-7 text-azure"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h2 className="font-heading text-navy text-2xl mb-3">Bedankt!</h2>
                <p className="text-ink-muted text-sm">
                  Uw bericht is ontvangen. Wij nemen zo snel mogelijk contact
                  met u op.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-widest text-azure mb-2"
                    >
                      Naam *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full bg-white border border-navy/20 rounded px-4 py-3 text-navy text-sm placeholder:text-ink-muted/40 focus:outline-none focus:border-azure transition-colors"
                      placeholder="Jan Jansen"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-widest text-azure mb-2"
                    >
                      E-mail *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full bg-white border border-navy/20 rounded px-4 py-3 text-navy text-sm placeholder:text-ink-muted/40 focus:outline-none focus:border-azure transition-colors"
                      placeholder="jan@voorbeeld.nl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-mono uppercase tracking-widest text-azure mb-2"
                    >
                      Telefoon
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full bg-white border border-navy/20 rounded px-4 py-3 text-navy text-sm placeholder:text-ink-muted/40 focus:outline-none focus:border-azure transition-colors"
                      placeholder="+31 6 00 00 00 00"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-mono uppercase tracking-widest text-azure mb-2"
                    >
                      Onderwerp
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full bg-white border border-navy/20 rounded px-4 py-3 text-navy text-sm focus:outline-none focus:border-azure transition-colors"
                    >
                      <option value="polijsten">
                        Polijsten & bootverzorging
                      </option>
                      <option value="verhuur">Bootverhuur</option>
                      <option value="overig">Overig</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="block text-xs font-mono uppercase tracking-widest text-azure mb-2"
                  >
                    Gewenste datum
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    className="w-full bg-white border border-navy/20 rounded px-4 py-3 text-navy text-sm focus:outline-none focus:border-azure transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-widest text-azure mb-2"
                  >
                    Bericht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-white border border-navy/20 rounded px-4 py-3 text-navy text-sm placeholder:text-ink-muted/40 focus:outline-none focus:border-azure transition-colors resize-none"
                    placeholder="Vertel ons waarmee wij u kunnen helpen…"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-navy text-white font-semibold rounded hover:bg-navy-light disabled:opacity-60 transition-colors text-sm"
                >
                  {loading ? "Bezig met verzenden…" : "Verstuur bericht"}
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
              <h2 className="text-azure text-xs font-mono uppercase tracking-widest mb-5">
                Direct contact
              </h2>
              <div className="space-y-5 text-sm">
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                    Telefoon
                  </p>
                  <a
                    href="tel:+31645345868"
                    className="text-white hover:text-azure-light transition-colors text-base font-medium"
                  >
                    06 4534 5868
                  </a>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                    E-mail
                  </p>
                  <a
                    href="mailto:Julian5875wielaard@gmail.com"
                    className="text-white hover:text-azure-light transition-colors"
                  >
                    Julian5875wielaard@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                    Adres
                  </p>
                  {/* Update this */}
                  <address className="not-italic text-white/70 leading-relaxed">
                    Maaslaantje 9<br />
                    3299 AM Maasdam
                    <br />
                    {/*Hoeksche Waard*/}
                  </address>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                    Openingstijden
                  </p>
                  <p className="text-white/70">
                    Ma – Za: 08:00 – 18:00
                    <br />
                    Zo: 09:00 – 16:00
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-navy/10 rounded-lg p-7">
              <h2 className="text-azure text-xs font-mono uppercase tracking-widest mb-3">
                Vlug reserveren?
              </h2>
              <p className="text-ink-muted text-sm mb-4">
                Bel ons direct — wij controleren de beschikbaarheid meteen voor
                u.
              </p>
              <a
                href="tel:+31645345868"
                className="block w-full py-3 bg-navy text-white font-semibold text-center rounded hover:bg-navy-light transition-colors text-sm"
              >
                Bel nu
              </a>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section className="mt-24">
          <div className="text-center mb-10">
            <p className="text-azure text-xs font-mono uppercase tracking-widest mb-3">
              Veelgestelde vragen
            </p>
            <h2 className="font-heading text-navy text-3xl">FAQ</h2>
          </div>
          <div className="max-w-3xl mx-auto divide-y divide-navy/10">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-5">
                <h3 className="text-navy font-medium mb-2 text-sm">{faq.q}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
