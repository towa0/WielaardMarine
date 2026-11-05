"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { company } from "@/data/company";
import { diensten } from "@/data/diensten";

// Contact form uses Formspree (free tier — up to 50 submissions/month).
const FORMSPREE_FORM_ID = "mojowkwz";

const faqs = [
  {
    q: "Wat kost het polijsten van mijn boot?",
    a: "Dat hangt af van lengte, staat van de gelcoat en welke behandeling nodig is. Daarom werken wij met een offerte in plaats van een prijslijst — u weet vooraf precies waar u aan toe bent.",
  },
  {
    q: "Hoe lang ligt mijn boot stil?",
    a: "Per behandeling verschillend; u hoort het in de offerte.",
  },
  {
    q: "Komt u naar de boot toe?",
    a: "Dat overleggen we per aanvraag — bel of mail om te bespreken wat mogelijk is.",
  },
  {
    q: "Is polijsten schadelijk voor de gelcoat?",
    a: "Polijsten neemt altijd een fractie van de toplaag mee — daarom bepaalt de staat van de gelcoat hoe agressief er gewerkt wordt. Waar een lichte gang genoeg is, doen wij niet meer.",
  },
  {
    q: "Verhuurt u ook boten?",
    a: "Ja, als extraatje naast het polijstwerk. Sloepen en een consoleboot op de Binnenmaas.",
    link: { href: "/vloot", label: "bekijk de vloot" },
  },
];

const inputClass =
  "w-full box-border rounded-sm border border-mist-deep bg-white px-4 py-3.5 text-[15px] text-ink focus:border-azure focus:outline-none";
const labelClass =
  "font-mono text-[10.5px] tracking-[0.16em] text-azure uppercase";

export function ContactPageClient() {
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
    <>
      <Header variant="solid" active="Contact" />

      <section className="bg-white pt-14 pb-9 sm:pt-22 sm:pb-12">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-8">
          <p className="mb-4 font-mono text-[11px] tracking-[0.2em] text-azure uppercase">
            Offerte aanvragen
          </p>
          <h1 className="font-heading mb-5 max-w-[22ch] text-[32px] leading-[1.06] font-semibold tracking-tight text-navy text-balance sm:text-[58px]">
            Offerte voor uw boot aanvragen: vertel ons over de boot
          </h1>
          <p className="max-w-[54ch] text-base leading-relaxed text-ink-muted text-pretty sm:text-lg">
            Met lengte, type en een paar foto&apos;s van de romp kunnen wij
            meestal direct zeggen wat er nodig is. U hoort binnen één werkdag
            van ons.
          </p>
        </div>
      </section>

      <section className="bg-white pb-14 sm:pb-28">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-10 px-4 sm:gap-14 sm:px-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded border border-mist-deep bg-mist p-10 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-azure/10">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7 text-azure"
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
                <h2 className="font-heading mb-3 text-2xl font-semibold text-navy">
                  Bedankt!
                </h2>
                <p className="text-sm text-ink-muted">
                  Uw bericht is ontvangen. Wij nemen zo snel mogelijk contact
                  met u op.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5.5">
                <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-3">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="naam" className={labelClass}>
                      Naam *
                    </label>
                    <input
                      id="naam"
                      name="naam"
                      type="text"
                      required
                      placeholder="Jan Jansen"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className={labelClass}>
                      E-mail *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jan@voorbeeld.nl"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="tel" className={labelClass}>
                      Telefoon
                    </label>
                    <input
                      id="tel"
                      name="tel"
                      type="tel"
                      placeholder="06 12 34 56 78"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="border-t border-mist-deep pt-5.5">
                  <p className="mb-4.5 font-mono text-[10.5px] tracking-[0.16em] text-ink-muted uppercase">
                    De boot
                  </p>
                  <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-3">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="type" className={labelClass}>
                        Type boot *
                      </label>
                      <select
                        id="type"
                        name="type"
                        required
                        className={inputClass}
                      >
                        <option>Sloep</option>
                        <option>Motorboot</option>
                        <option>Kajuitboot</option>
                        <option>Motorjacht</option>
                        <option>Zeilboot</option>
                        <option>Anders</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="lengte" className={labelClass}>
                        Lengte *
                      </label>
                      <select
                        id="lengte"
                        name="lengte"
                        required
                        className={inputClass}
                      >
                        <option>tot 5 meter</option>
                        <option>5 – 7 meter</option>
                        <option>7 – 9 meter</option>
                        <option>9 – 12 meter</option>
                        <option>langer dan 12 meter</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="ligplaats" className={labelClass}>
                        Ligplaats
                      </label>
                      <input
                        id="ligplaats"
                        name="ligplaats"
                        type="text"
                        placeholder="Haven of plaats"
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-mist-deep pt-5.5">
                  <p className="mb-4.5 font-mono text-[10.5px] tracking-[0.16em] text-ink-muted uppercase">
                    Gewenste behandeling — meerdere mogelijk
                  </p>
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {diensten.map((d) => (
                      <label
                        key={d.slug}
                        className="flex cursor-pointer items-center gap-2.5 rounded-sm border border-mist-deep px-4 py-3.5 text-[14.5px] text-ink hover:border-azure"
                      >
                        <input
                          type="checkbox"
                          name="behandeling"
                          value={d.title}
                          className="h-[17px] w-[17px] accent-azure"
                        />
                        {d.title}
                      </label>
                    ))}
                    <label className="flex cursor-pointer items-center gap-2.5 rounded-sm border border-mist-deep px-4 py-3.5 text-[14.5px] text-ink-muted hover:border-azure">
                      <input
                        type="checkbox"
                        name="behandeling"
                        value="Weet ik nog niet"
                        className="h-[17px] w-[17px] accent-azure"
                      />
                      Weet ik nog niet
                    </label>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="bericht" className={labelClass}>
                    Toelichting
                  </label>
                  <textarea
                    id="bericht"
                    name="bericht"
                    rows={5}
                    placeholder="Wat valt u op aan de romp? Sinds wanneer? Wanneer zou u het gedaan willen hebben?"
                    className={`${inputClass} resize-y leading-relaxed`}
                  />
                </div>

                <div className="flex flex-col gap-2 rounded-sm border border-dashed border-azure/45 bg-mist p-4.5">
                  <p className="font-mono text-[11px] tracking-[0.13em] text-azure uppercase">
                    Foto&apos;s van de romp
                  </p>
                  <p className="text-sm leading-relaxed text-ink-muted">
                    Twee of drie foto&apos;s zeggen meer dan een formulier.
                    Stuur ze na het versturen door naar het mailadres in de
                    bevestiging, of via WhatsApp.
                  </p>
                </div>

                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    name="toestemming"
                    className="mt-0.5 h-[18px] w-[18px] shrink-0 accent-azure"
                  />
                  <span className="text-sm leading-relaxed text-ink-muted">
                    Ik geef Wielaard Marine toestemming om mijn gegevens te
                    gebruiken om deze aanvraag te behandelen. Zie de{" "}
                    <Link href="/privacyverklaring" className="text-azure">
                      privacyverklaring
                    </Link>
                    . *
                  </span>
                </label>

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="rounded-sm bg-navy px-8 py-4 text-[15px] font-semibold text-white hover:bg-navy-light disabled:opacity-60"
                  >
                    {loading ? "Bezig met verzenden…" : "Aanvraag versturen"}
                  </button>
                  <p className="mt-3.5 text-[13px] leading-relaxed text-ink-muted">
                    * Verplicht. Wij delen uw gegevens niet met derden en
                    plaatsen geen trackingcookies.
                  </p>
                </div>
              </form>
            )}
          </div>

          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="rounded bg-navy p-6 sm:p-7">
              <h2 className="mb-5.5 font-mono text-[10.5px] font-medium tracking-[0.16em] text-white/75 uppercase">
                Direct contact
              </h2>
              <div className="flex flex-col gap-5">
                <div>
                  <p className="mb-1.5 text-[11px] tracking-[0.1em] text-white/75 uppercase">
                    Telefoon &amp; WhatsApp
                  </p>
                  <a
                    href={`tel:${company.phone}`}
                    className="text-lg font-semibold text-white no-underline hover:text-white/80"
                  >
                    {company.phoneDisplay}
                  </a>
                </div>
                <div>
                  <p className="mb-1.5 text-[11px] tracking-[0.1em] text-white/75 uppercase">
                    E-mail
                  </p>
                  <a
                    href={`mailto:${company.email}`}
                    className="text-[14.5px] break-all text-white/80 no-underline hover:text-white"
                  >
                    {company.email}
                  </a>
                </div>
                <div>
                  <p className="mb-1.5 text-[11px] tracking-[0.1em] text-white/75 uppercase">
                    Werkgebied
                  </p>
                  <p className="text-[14.5px] leading-relaxed text-white/80">
                    {company.region}
                  </p>
                </div>
                <div>
                  <p className="mb-1.5 text-[11px] tracking-[0.1em] text-white/75 uppercase">
                    Openingstijden
                  </p>
                  <p className="text-[14.5px] text-white/80">
                    {company.openingHours}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded border border-mist-deep bg-mist p-6 sm:p-7">
              <h2 className="mb-3 font-mono text-[10.5px] font-medium tracking-[0.16em] text-azure uppercase">
                Liever even bellen?
              </h2>
              <p className="mb-4.5 text-[14.5px] leading-relaxed text-ink-muted">
                Dat gaat vaak sneller dan een formulier. U spreekt Julian zelf.
              </p>
              <a
                href={`tel:${company.phone}`}
                className="block rounded-sm bg-navy py-3.5 text-center text-[14.5px] font-semibold text-white no-underline hover:bg-navy-light"
              >
                Bel direct
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-mist-deep bg-mist py-14 sm:py-24">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-8">
          <div className="mb-8 max-w-[52ch] sm:mb-11">
            <p className="mb-4 font-mono text-[11px] tracking-[0.18em] text-azure uppercase">
              Veelgestelde vragen
            </p>
            <h2 className="font-heading text-[26px] leading-tight font-semibold tracking-tight text-navy text-balance sm:text-4xl">
              Voordat u aanvraagt
            </h2>
          </div>
          <div className="flex max-w-[780px] flex-col">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="border-t border-mist-deep py-5.5 last:border-b"
              >
                <h3 className="font-heading mb-2 text-[17px] leading-snug font-semibold text-navy">
                  {f.q}
                </h3>
                <p className="text-[15px] leading-relaxed text-ink-muted">
                  {f.a}
                  {f.link && (
                    <>
                      {" — "}
                      <Link href={f.link.href} className="text-azure">
                        {f.link.label}
                      </Link>
                      .
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
