import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";

const navLinks = [
  { href: "/diensten", label: "Polijsten" },
  { href: "/werk", label: "Werk" },
  { href: "/vloot", label: "Verhuur" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1180px] px-4 pt-14 pb-8 sm:px-8 sm:pt-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 lg:gap-14">
          <div className="min-w-0 lg:col-span-2">
            <Image
              src="/images/wielaard_marine_icon_transparent_hero.png"
              alt="Wielaard Marine"
              width={44}
              height={44}
              className="mb-5 h-11 w-auto"
            />
            <p className="mb-4 max-w-[38ch] text-[14.5px] leading-relaxed text-white/62">
              Bootverzorging en polijstwerk aan de Binnenmaas. Opgericht door
              Julian Wielaard vanuit een passie voor het water.
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-azure-light/75">
              {company.address.street} · {company.address.city}
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-azure-light">
              Navigatie
            </h3>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-[14.5px] text-white/62 no-underline hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-azure-light">
              Contact
            </h3>
            <div className="flex flex-col gap-2.5 text-[14.5px]">
              <a
                href={`tel:${company.phone}`}
                className="font-medium text-white no-underline hover:text-azure-light"
              >
                {company.phoneDisplay}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="break-all text-white/62 no-underline hover:text-white"
              >
                {company.email}
              </a>
              <p className="mt-1.5 leading-relaxed text-white/50">
                {company.address.street}
                <br />
                {company.address.postalCode} {company.address.city}
              </p>
              <p className="mt-1.5 text-white/50">{company.openingHours}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/12 pt-6 sm:mt-14">
          <div className="flex flex-wrap items-center gap-2 font-mono text-[11.5px] text-white/45">
            <span>© {year} Wielaard Marine</span>
            <span className="text-white/20">·</span>
            <span>KvK {company.kvk}</span>
            <span>BTW {company.btw}</span>
          </div>
          <div className="flex flex-wrap gap-4 text-[12.5px]">
            <Link
              href="/algemene-voorwaarden"
              className="text-white/45 no-underline hover:text-white"
            >
              Algemene voorwaarden
            </Link>
            <Link
              href="/huurvoorwaarden"
              className="text-white/45 no-underline hover:text-white"
            >
              Huurvoorwaarden
            </Link>
            <Link
              href="/privacyverklaring"
              className="text-white/45 no-underline hover:text-white"
            >
              Privacyverklaring
            </Link>
            <a
              href="https://rainvalley.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/45 no-underline hover:text-white"
            >
              Website door Rainvalley
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
