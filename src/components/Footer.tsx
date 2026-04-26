import Link from 'next/link'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy border-t border-cream/10 mt-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <svg
                viewBox="-125 -125 250 250"
                className="w-9 h-9 text-bronze"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
              >
                <circle cx="0" cy="0" r="110" />
                <path d="M-70 30 Q -35 10, 0 30 T 70 30" />
                <line x1="0" y1="-90" x2="0" y2="-10" />
                <circle cx="0" cy="-100" r="10" fill="#b46a3a" stroke="none" />
                <line x1="-50" y1="-40" x2="50" y2="-40" />
              </svg>
              <span className="font-serif text-cream text-lg">
                Wielaard<span className="text-bronze">Marine</span>
              </span>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed max-w-sm">
              Bootverhuur en onderhoud aan de Binnenmaas in de Hoeksche Waard.
              Al jaren dé plek voor een onvergetelijk dagje varen.
            </p>
            <p className="mt-4 text-bronze/60 text-xs font-mono uppercase tracking-widest">
              Binnenmaas · Hoeksche Waard
            </p>
          </div>

          {/* Navigatie */}
          <div>
            <h3 className="text-bronze text-xs font-mono uppercase tracking-widest mb-4">
              Navigatie
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/',         label: 'Home' },
                { href: '/vloot',    label: 'Vloot' },
                { href: '/diensten', label: 'Diensten' },
                { href: '/over-ons', label: 'Over Ons' },
                { href: '/contact',  label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/60 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-bronze text-xs font-mono uppercase tracking-widest mb-4">
              Contact
            </h3>
            <address className="not-italic text-sm text-cream/60 space-y-2">
              {/* Update these details */}
              <p>Havenweg 1<br />3281 XX Numansdorp</p>
              <p>
                <a href="tel:+31612345678" className="hover:text-cream transition-colors">
                  +31 6 12 34 56 78
                </a>
              </p>
              <p>
                <a href="mailto:info@wielaardmarine.nl" className="hover:text-cream transition-colors">
                  info@wielaardmarine.nl
                </a>
              </p>
              <p className="text-cream/30 text-xs pt-1">
                Ma–Za: 08:00 – 18:00
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-cream/30">
          <p>© {year} WielaardMarine. Alle rechten voorbehouden.</p>
          <span>KvK: 12345678</span>
        </div>
      </div>
    </footer>
  )
}
