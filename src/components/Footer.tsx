import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy border-t border-white/10 mt-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/images/wielaard_marine_logo.png"
                alt="WielaardMarine"
                width={160}
                height={44}
                className="h-11 w-auto rounded"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Bootverzorging en bootverhuur aan de Maaslaantje in de Maasdam.
              Opgericht door Julian Wielaard vanuit een passie voor het water.
            </p>
            <p className="mt-4 text-azure-light/70 text-xs font-mono uppercase tracking-widest">
              Maaslaantje · Maasdam
            </p>
          </div>

          {/* Navigatie */}
          <div>
            <h3 className="text-azure-light text-xs font-mono uppercase tracking-widest mb-4">
              Navigatie
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/vloot", label: "Vloot" },
                { href: "/diensten", label: "Diensten" },
                { href: "/over-ons", label: "Over Ons" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-azure-light text-xs font-mono uppercase tracking-widest mb-4">
              Contact
            </h3>
            <address className="not-italic text-sm text-white/60 space-y-2">
              {/* Update these details */}
              {/*<p>
                Havenweg 1<br />
                3281 XX Numansdorp
              </p>*/}
              <p>
                <a
                  href="tel:+31612345678"
                  className="hover:text-white transition-colors"
                >
                  +31 6 45345868
                </a>
              </p>
              <p>
                <a
                  href="mailto:Julian5875wielaard@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  Julian5875wielaard@gmail.com
                </a>
              </p>
              <p className="text-white/30 text-xs pt-1">Ma–Za: 08:00 – 18:00</p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/30">
          <p>© {year} WielaardMarine. Alle rechten voorbehouden.</p>
          {/*<span>KvK: 12345678</span>*/}
        </div>
      </div>
    </footer>
  );
}
