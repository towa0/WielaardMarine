import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getFeaturedBoats } from "@/data/boats";
import { BoatCard } from "@/components/BoatCard";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const services = [
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 36 Q24 20, 40 36" />
        <path d="M4 40h40" />
        <path d="M18 36V24l6-8 6 8v12" />
        <path d="M24 16V8" />
        <path d="M20 10h8" />
      </svg>
    ),
    title: "Bootverhuur",
    description:
      "Dag- en weekverhuur van onze gevarieerde vloot. Van compacte sloepen tot ruime motorjachten — voor elk gezelschap de juiste boot.",
    href: "/vloot",
    cta: "Bekijk vloot",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="24" cy="24" r="10" />
        <path d="M24 6v4M24 38v4M6 24h4M38 24h4" />
        <path d="M11.5 11.5l2.8 2.8M33.7 33.7l2.8 2.8M11.5 36.5l2.8-2.8M33.7 14.3l2.8-2.8" />
        <circle cx="24" cy="24" r="4" fill="#c8682a" stroke="none" />
      </svg>
    ),
    title: "Onderhoud & Reparatie",
    description:
      "Jaarlijks onderhoud, winterklaar maken, motorservice en reparaties. Wij zorgen dat uw boot altijd betrouwbaar op het water ligt.",
    href: "/diensten",
    cta: "Meer over onderhoud",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="28" width="40" height="14" rx="2" />
        <path d="M4 28 L12 14 L36 14 L44 28" />
        <path d="M12 14V28M24 14V28M36 14V28" />
      </svg>
    ),
    title: "Winterstalling",
    description:
      "Overdekte en buitenstalling voor uw eigen boot. Veilig opbergen in de wintermaanden, met eventuele onderhoudsbeurten ter plaatse.",
    href: "/diensten",
    cta: "Stalling & tarieven",
  },
];

export default function HomePage() {
  const featured = getFeaturedBoats();

  return (
    <>
      {/* ── HERO — dark navy, matches original thumbnail style ── */}
      <section className="relative min-h-[92vh] bg-navy flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Animated wave lines */}
        <svg
          viewBox="0 0 1200 800"
          className="absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          aria-hidden
        >
          {/* Wave 1 — slowest, most visible */}
          <path
            d="M0 480 Q 200 460, 400 482 T 800 478 T 1200 480"
            stroke="#e9dfc9"
            strokeOpacity="0.18"
            strokeWidth="2"
          >
            <animate
              attributeName="d"
              dur="7s"
              begin="0s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;0.5;1"
              keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
              values={[
                "M0 480 Q 200 460, 400 482 T 800 478 T 1200 480",
                "M0 480 Q 200 500, 400 478 T 800 483 T 1200 480",
                "M0 480 Q 200 460, 400 482 T 800 478 T 1200 480",
              ].join(";")}
            />
          </path>

          {/* Wave 2 — medium speed, offset phase */}
          <path
            d="M0 520 Q 200 500, 400 522 T 800 518 T 1200 520"
            stroke="#e9dfc9"
            strokeOpacity="0.13"
            strokeWidth="2"
          >
            <animate
              attributeName="d"
              dur="9s"
              begin="-3s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;0.5;1"
              keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
              values={[
                "M0 520 Q 200 540, 400 518 T 800 523 T 1200 520",
                "M0 520 Q 200 500, 400 522 T 800 518 T 1200 520",
                "M0 520 Q 200 540, 400 518 T 800 523 T 1200 520",
              ].join(";")}
            />
          </path>

          {/* Wave 3 — fastest, faintest */}
          <path
            d="M0 560 Q 200 540, 400 562 T 800 558 T 1200 560"
            stroke="#e9dfc9"
            strokeOpacity="0.08"
            strokeWidth="2"
          >
            <animate
              attributeName="d"
              dur="6s"
              begin="-1.5s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;0.5;1"
              keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
              values={[
                "M0 560 Q 200 540, 400 562 T 800 558 T 1200 560",
                "M0 560 Q 200 580, 400 558 T 800 563 T 1200 560",
                "M0 560 Q 200 540, 400 562 T 800 558 T 1200 560",
              ].join(";")}
            />
          </path>
        </svg>

        <div className="relative z-10 flex flex-col items-center">
          {/* <Image
            src="/images/wielaard_marine_icon_transparent_hero.png"
            alt="WielaardMarine"
            width={176}
            height={176}
            className="w-36 h-36 sm:w-44 sm:h-44 mb-8 rounded-full"
            priority
          /> */}

          <h1 className="font-serif text-cream text-5xl sm:text-6xl lg:text-7xl tracking-wide leading-none mb-5">
            Wielaard Marine
          </h1>

          {/* Location sub-line — monospace bronze, wide letter-spacing, original style */}
          <p className="font-mono text-bronze text-sm sm:text-base uppercase tracking-[0.4em] mb-10">
            Binnenmaas · Hoeksche Waard
          </p>

          <p className="text-cream/70 text-base sm:text-lg max-w-lg leading-relaxed mb-10">
            Bootverzorging en bootverhuur aan de Binnenmaas. Ontdek de rust van
            de Hoeksche Waard op het water.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/vloot"
              className="px-8 py-3.5 bg-bronze text-navy font-semibold rounded hover:bg-bronze-light transition-colors"
            >
              Bekijk onze vloot
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 border border-cream/30 text-cream rounded hover:border-cream hover:bg-cream/5 transition-colors"
            >
              Neem contact op
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/30 animate-bounce">
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── FEATURED BOATS — cream bg ── */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-bronze text-xs font-mono uppercase tracking-widest mb-3">
              Onze vloot
            </p>
            <h2 className="font-serif text-navy text-3xl sm:text-4xl mb-4">
              Kies uw boot
            </h2>
            <p className="text-ink-muted max-w-lg mx-auto">
              Van compacte dagsloep tot ruim motorjacht — elk gezelschap vindt
              bij ons de juiste boot.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((boat) => (
              <BoatCard key={boat.slug} boat={boat} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/vloot"
              className="inline-flex items-center gap-2 text-bronze hover:text-bronze-dark transition-colors text-sm font-medium"
            >
              Bekijk alle boten
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES — dark navy band for contrast ── */}
      <section className="py-20 px-4 bg-navy">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-bronze text-xs font-mono uppercase tracking-widest mb-3">
              Wat wij doen
            </p>
            <h2 className="font-serif text-cream text-3xl sm:text-4xl mb-4">
              Onze diensten
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-navy-light border border-cream/10 rounded-lg p-7 flex flex-col"
              >
                <div className="text-bronze mb-5">{service.icon}</div>
                <h3 className="font-serif text-cream text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed flex-1 mb-6">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="self-start text-bronze text-sm font-medium hover:text-bronze-light transition-colors inline-flex items-center gap-1.5"
                >
                  {service.cta}
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US — cream bg ── */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-bronze text-xs font-mono uppercase tracking-widest mb-3">
                Waarom WielaardMarine
              </p>
              <h2 className="font-serif text-navy text-3xl sm:text-4xl mb-6">
                Varen zonder zorgen,
                <br />
                genieten met vertrouwen
              </h2>
              <p className="text-ink-muted leading-relaxed mb-6">
                WielaardMarine is opgericht door Julian Wielaard vanuit een
                echte passie voor het water. Van bootverzorging en polijsten tot
                heerlijk varen op de Binnenmaas — kwaliteit en tevreden klanten
                staan bij ons centraal.
              </p>
              <ul className="space-y-3 text-sm">
                {[
                  "Boten jaarlijks onderhouden en APK gekeurd",
                  "Grondige introductie voor elke huurder",
                  "Geen vaarbewijs nodig voor onze sloepen",
                  "Veiligheidspakket standaard aan boord",
                  "Telefonische hulp tijdens uw vaartocht",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-ink-muted"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      className="w-5 h-5 text-bronze shrink-0 mt-0.5"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/over-ons"
                className="inline-flex items-center gap-2 mt-8 text-bronze hover:text-bronze-dark transition-colors text-sm font-medium"
              >
                Meer over ons
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="hidden lg:block relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/boat_steeringwheel.JPG"
                alt="Stuurwiel op de Binnenmaas"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-navy/20" aria-hidden />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER — bronze ── */}
      <section className="py-16 px-4 bg-bronze">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-navy text-3xl sm:text-4xl mb-4">
            Klaar om te varen?
          </h2>
          <p className="text-navy/70 mb-8 text-lg">
            Reserveer vandaag nog uw boot — wij plannen graag samen met u.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-navy text-cream font-semibold rounded hover:bg-navy-light transition-colors"
            >
              Maak een reservering
            </Link>
            <a
              href="tel:+31612345678"
              className="px-8 py-3.5 border-2 border-navy text-navy font-semibold rounded hover:bg-navy/10 transition-colors"
            >
              +31 6 12 34 56 78
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
