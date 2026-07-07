import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getFeaturedBoats } from "@/data/boats";
import { BoatCard } from "@/components/BoatCard";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { galleryImages } from "@/data/gallery";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const values = [
  {
    title: "Veiligheid eerst",
    text: "Elke boot vertrekt na een grondige technische check. Alle huurders krijgen een persoonlijke introductie.",
  },
  {
    title: "Persoonlijke service",
    text: "Geen callcenter. U belt of mailt ons en krijgt direct iemand die uw boot kent en uw naam weet.",
  },
  {
    title: "Liefde voor het water",
    text: "De Binnenmaas is ons thuis. Wij kennen de wateren, de winden en de mooiste ankerplaatsen.",
  },
  {
    title: "Respect voor de natuur",
    text: "Wij werken bewust met schone motoren en milieuvriendelijke onderhoudsproducten.",
  },
];

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
        <path d="M10 30 Q24 22, 38 30" />
        <path d="M12 34 Q24 27, 36 34" />
        <path d="M24 6l2.2 5.4L32 13l-5.8 1.6L24 20l-2.2-5.4L16 13l5.8-1.6z" />
      </svg>
    ),
    title: "Polijsten & Bootverzorging",
    description:
      "Wij verwijderen oxidatie, krassen en doffe vlekken uit lak en gelcoat. Het resultaat: een diepglanzende boot die weer beschermd is tegen weer en verkleuring.",
    href: "/diensten#polijsten",
    cta: "Bekijk polijstwerk",
    accent: "amber" as const,
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
        <path d="M8 36 Q24 20, 40 36" />
        <path d="M4 40h40" />
        <path d="M18 36V24l6-8 6 8v12" />
        <path d="M24 16V8" />
        <path d="M20 10h8" />
      </svg>
    ),
    title: "Bootverhuur",
    description:
      "Ook een leuk extraatje: dag- en weekverhuur van onze sloepen en motorboten. Voor wie na de polijstbeurt gelijk het water op wil.",
    href: "/vloot",
    cta: "Bekijk vloot",
    accent: "azure" as const,
  },
];

export default function HomePage() {
  const featured = getFeaturedBoats();

  return (
    <>
      {/* ── HERO — light, airy, minimal ── */}
      <section className="relative min-h-[92vh] bg-white flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Soft floating gradient blobs */}
        <div
          className="absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-azure/10 blur-3xl animate-float-slow pointer-events-none"
          aria-hidden
        />
        <div
          className="absolute -bottom-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-amber/10 blur-3xl animate-float-slow pointer-events-none"
          style={{ animationDelay: "-3s" }}
          aria-hidden
        />

        {/* Sonar ripple rings, radiating from behind the headline */}
        <div
          className="absolute top-[42%] left-1/2 w-px h-px pointer-events-none"
          aria-hidden
        >
          <span className="animate-ripple ripple-delay-1 w-[20rem] h-[20rem] sm:w-[26rem] sm:h-[26rem]" />
          <span className="animate-ripple ripple-delay-2 w-[20rem] h-[20rem] sm:w-[26rem] sm:h-[26rem]" />
          <span className="animate-ripple ripple-delay-3 w-[20rem] h-[20rem] sm:w-[26rem] sm:h-[26rem]" />
        </div>

        {/* Rising bubbles */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          {[
            { left: "12%", size: 8, dur: "7s", delay: "0s", warm: false },
            { left: "22%", size: 5, dur: "9s", delay: "1.2s", warm: true },
            { left: "78%", size: 10, dur: "8s", delay: "0.6s", warm: false },
            { left: "88%", size: 6, dur: "6.5s", delay: "2.4s", warm: true },
            { left: "50%", size: 6, dur: "10s", delay: "3.5s", warm: false },
            { left: "65%", size: 4, dur: "7.5s", delay: "1.8s", warm: true },
          ].map((b, i) => (
            <span
              key={i}
              className={[
                "animate-bubble absolute bottom-16 rounded-full border",
                b.warm
                  ? "bg-amber/25 border-amber/40"
                  : "bg-azure/30 border-azure/40",
              ].join(" ")}
              style={{
                left: b.left,
                width: b.size,
                height: b.size,
                animationDuration: b.dur,
                animationDelay: b.delay,
              }}
            />
          ))}
        </div>

        {/* Filled, undulating wave — bottom of hero */}
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-56 sm:h-72 lg:h-80 pointer-events-none"
          aria-hidden
        >
          <defs>
            <linearGradient id="heroWaveBack" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0b2947" stopOpacity="0.20" />
              <stop offset="100%" stopColor="#0b2947" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="heroWaveMid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#155fae" stopOpacity="0.26" />
              <stop offset="100%" stopColor="#155fae" stopOpacity="0.07" />
            </linearGradient>
            <linearGradient id="heroWaveFront" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1e79d8" stopOpacity="0.40" />
              <stop offset="100%" stopColor="#123c69" stopOpacity="0.18" />
            </linearGradient>
          </defs>

          {/* Back layer — slow, wide swells */}
          <path fill="url(#heroWaveBack)">
            <animate
              attributeName="d"
              dur="14s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;0.5;1"
              keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
              values={[
                "M0,190 C240,250 480,130 720,170 C960,210 1200,110 1440,160 L1440,320 L0,320 Z",
                "M0,150 C240,100 480,230 720,180 C960,130 1200,240 1440,190 L1440,320 L0,320 Z",
                "M0,190 C240,250 480,130 720,170 C960,210 1200,110 1440,160 L1440,320 L0,320 Z",
              ].join(";")}
            />
          </path>

          {/* Mid layer */}
          <path fill="url(#heroWaveMid)">
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;0.5;1"
              keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
              values={[
                "M0,230 C240,190 480,270 720,225 C960,180 1200,265 1440,220 L1440,320 L0,320 Z",
                "M0,205 C240,255 480,175 720,235 C960,285 1200,190 1440,245 L1440,320 L0,320 Z",
                "M0,230 C240,190 480,270 720,225 C960,180 1200,265 1440,220 L1440,320 L0,320 Z",
              ].join(";")}
            />
          </path>

          {/* Front layer — boldest, closest to shore */}
          <path fill="url(#heroWaveFront)">
            <animate
              attributeName="d"
              dur="7s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;0.5;1"
              keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
              values={[
                "M0,265 C240,220 480,300 720,260 C960,220 1200,300 1440,260 L1440,320 L0,320 Z",
                "M0,285 C240,330 480,250 720,290 C960,330 1200,245 1440,285 L1440,320 L0,320 Z",
                "M0,265 C240,220 480,300 720,260 C960,220 1200,300 1440,260 L1440,320 L0,320 Z",
              ].join(";")}
            />
          </path>

          {/* Crest highlight on the front wave, for a bit of shine */}
          <path
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.4"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <animate
              attributeName="d"
              dur="7s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;0.5;1"
              keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
              values={[
                "M0,265 C240,220 480,300 720,260 C960,220 1200,300 1440,260",
                "M0,285 C240,330 480,250 720,290 C960,330 1200,245 1440,285",
                "M0,265 C240,220 480,300 720,260 C960,220 1200,300 1440,260",
              ].join(";")}
            />
          </path>
        </svg>

        {/* Drifting sailboat, bobbing slowly across the horizon */}
        <svg
          viewBox="0 0 64 48"
          className="absolute left-0 w-16 sm:w-20 lg:w-24 bottom-36 sm:bottom-44 lg:bottom-52 animate-drift-boat pointer-events-none drop-shadow-md"
          aria-hidden
        >
          <path d="M8 34 Q32 42 56 34 L50 34 L14 34 Z" fill="#123c69" />
          <line
            x1="32"
            y1="32"
            x2="32"
            y2="8"
            stroke="#123c69"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path d="M32 10 L48 32 L32 32 Z" fill="#f2a134" />
        </svg>

        {/* Twinkling sunlight glints on the water */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          {[
            { left: "14%", bottom: "16%", delay: "0s", warm: true },
            { left: "26%", bottom: "24%", delay: "0.9s", warm: false },
            { left: "40%", bottom: "12%", delay: "1.7s", warm: true },
            { left: "58%", bottom: "20%", delay: "0.4s", warm: false },
            { left: "68%", bottom: "10%", delay: "2.3s", warm: true },
            { left: "80%", bottom: "22%", delay: "1.2s", warm: false },
            { left: "88%", bottom: "14%", delay: "1.9s", warm: true },
          ].map((s, i) => (
            <span
              key={i}
              className={[
                "animate-twinkle rotate-45 absolute w-2.5 h-2.5 rounded-[3px]",
                s.warm
                  ? "bg-amber-light shadow-[0_0_10px_2px_rgba(242,161,52,0.7)]"
                  : "bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]",
              ].join(" ")}
              style={{
                left: s.left,
                bottom: s.bottom,
                animationDelay: s.delay,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <span className="animate-pop-in pop-delay-1 inline-flex items-center gap-2 px-4 py-1.5 text-azure text-xs font-mono uppercase tracking-[0.25em] mb-8">
            Maaslaantje · Maasdam
          </span>

          <h1 className="animate-pop-in pop-delay-2 font-heading text-navy text-5xl sm:text-6xl lg:text-7xl tracking-wide leading-none mb-5">
            Wielaard Marine
          </h1>

          <p className="animate-pop-in pop-delay-2 font-heading text-azure text-lg sm:text-xl tracking-[0.02em] mb-2">
            Polijsten &amp; Bootverzorging
          </p>
          <div className="animate-grow-line pop-delay-2 w-10 h-0.5 bg-azure/40 rounded-full mb-6" />

          <p className="animate-pop-in pop-delay-3 text-ink-muted text-base sm:text-lg max-w-lg leading-relaxed mb-10">
            Wij laten uw boot weer glanzen als nieuw — en wie zelf het water op
            wil, huurt bij ons ook een sloep of motorboot. Verzorgd aan de
            Maaslaantje in Maasdam.
          </p>

          <div className="animate-pop-in pop-delay-4 flex flex-col sm:flex-row gap-4">
            <Link
              href="/diensten#polijsten"
              className="px-8 py-3.5 bg-navy text-white font-semibold rounded hover:bg-navy-light transition-colors"
            >
              Bekijk ons polijstwerk
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 border border-navy/20 text-navy rounded hover:border-navy hover:bg-navy/5 transition-colors"
            >
              Offerte aanvragen
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-pop-in pop-delay-4 absolute bottom-8 left-1/2 -translate-x-1/2 text-navy/25 animate-bounce">
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

      {/* ── SERVICES — dark navy band for contrast ── */}
      <section className="py-20 px-4 bg-navy">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-azure-light text-xs font-mono uppercase tracking-widest mb-3">
              Wat wij doen
            </p>
            <h2 className="font-heading text-white text-3xl sm:text-4xl mb-4">
              Onze diensten
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-navy-light border border-white/10 rounded-lg p-7 flex flex-col hover:-translate-y-1 hover:border-white/20 transition-all duration-300"
              >
                <div
                  className={[
                    "w-16 h-16 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110",
                    service.accent === "amber"
                      ? "bg-amber/15 text-amber-light"
                      : "bg-azure/15 text-azure-light",
                  ].join(" ")}
                >
                  {service.icon}
                </div>
                <h3 className="font-heading text-white text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed flex-1 mb-6">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className={[
                    "self-start text-sm font-medium hover:text-white transition-colors inline-flex items-center gap-1.5",
                    service.accent === "amber"
                      ? "text-amber-light"
                      : "text-azure-light",
                  ].join(" ")}
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

      {/* ── PORTFOLIO GALLERY — mist bg ── */}
      <section className="py-20 px-4 bg-mist">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-azure text-xs font-mono uppercase tracking-widest mb-3">
              Ons werk
            </p>
            <h2 className="font-heading text-navy text-3xl sm:text-4xl mb-4">
              Voorbeelden van ons polijstwerk
            </h2>
            <p className="text-ink-muted max-w-lg mx-auto">
              Een greep uit eerdere behandelingen — van lichte opfrisbeurt tot
              volledige glansrestauratie.
            </p>
          </div>

          <PortfolioGallery images={galleryImages.slice(0, 9)} />

          {/* Zodra er genoeg foto's zijn uncomment dit voor echte preview*/}
          {/*<div className="text-center mt-10">
            <Link
              href="/diensten#polijsten"
              className="inline-flex items-center gap-2 text-azure hover:text-azure-dark transition-colors text-sm font-medium"
            >
              Bekijk meer voorbeelden
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
          </div>*/}
        </div>
      </section>

      {/* ── WHY US — white bg ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          {/*<div className="relative aspect-video rounded-xl overflow-hidden shadow-lg mb-16">
            <Image
              src="/images/poloshed_boat1.jpg"
              alt="Gepolijst motorjacht — eindresultaat"
              fill
              className="object-cover object-center"
            />
          </div>*/}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-azure text-xs font-mono uppercase tracking-widest mb-3">
                Waarom WielaardMarine
              </p>
              <h2 className="font-heading text-navy text-3xl sm:text-4xl mb-6">
                Uw boot in topconditie,
                <br />
                verzorgd met precisie
              </h2>
              <p className="text-ink-muted leading-relaxed mb-6">
                WielaardMarine is opgericht door Julian Wielaard vanuit een
                echte passie voor het water. Van polijsten en bootverzorging tot
                heerlijk varen, kwaliteit en tevreden klanten staan bij ons
                centraal.
              </p>
              <ul className="space-y-3 text-sm">
                {[
                  "Handmatig polijstwerk, oog voor detail",
                  "Op maat: van opfrisbeurt tot volledige restauratie",
                  "Bescherming tegen weer, vuil en verkleuring",
                  "Ook onze boten jaarlijks onderhouden en APK gekeurd",
                  "Persoonlijk advies, geen callcenter",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-ink-muted"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      className="w-5 h-5 text-azure shrink-0 mt-0.5"
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
                className="inline-flex items-center gap-2 mt-8 text-azure hover:text-azure-dark transition-colors text-sm font-medium"
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

      {/* ── FEATURED BOATS — extra dienst, mist bg ── */}
      <section className="py-20 px-4 bg-mist">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-azure text-xs font-mono uppercase tracking-widest mb-3">
              Ook mogelijk
            </p>
            <h2 className="font-heading text-navy text-3xl sm:text-4xl mb-4">
              Zin om zelf te varen? Huur een boot
            </h2>
            <p className="text-ink-muted max-w-lg mx-auto">
              Naast polijsten bieden wij ook dag- en weekverhuur — van compacte
              dagsloep tot ruim motorjacht.
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
              className="inline-flex items-center gap-2 text-azure hover:text-azure-dark transition-colors text-sm font-medium"
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

      <section className="my-24 px-4">
        <div className="text-center mb-10">
          <p className="text-azure text-xs font-mono uppercase tracking-widest mb-3">
            Onze waarden
          </p>
          <h2 className="font-heading text-navy text-3xl">
            Waar wij voor staan
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-white border border-navy/10 rounded-lg p-7"
            >
              <div className="w-8 h-px bg-azure mb-4" />
              <h3 className="font-heading text-navy text-lg mb-2">{v.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER — azure ── */}
      <section className="py-16 px-4 bg-azure">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-white text-3xl sm:text-4xl mb-4">
            Klaar voor een stralende boot?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Vraag vandaag nog een offerte aan voor polijsten — of reserveer
            gelijk een boot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-navy text-white font-semibold rounded hover:bg-navy-dark transition-colors"
            >
              Offerte aanvragen
            </Link>
            <a
              href="tel:++31645345868"
              className="px-8 py-3.5 border-2 border-white text-white font-semibold rounded hover:bg-white/10 transition-colors"
            >
              +31 6 45345868
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
