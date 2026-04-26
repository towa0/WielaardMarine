'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/vloot',    label: 'Vloot' },
  { href: '/diensten', label: 'Diensten' },
  { href: '/over-ons', label: 'Over Ons' },
  { href: '/contact',  label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-navy border-b border-cream/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo — boat-in-circle matching original thumbnail */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          onClick={() => setOpen(false)}
        >
          <svg
            viewBox="-125 -125 250 250"
            className="w-9 h-9 text-bronze group-hover:scale-110 transition-transform duration-300"
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
          <span className="font-serif text-cream text-lg tracking-wide leading-none">
            Wielaard<span className="text-bronze">Marine</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + '/')
            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  'px-4 py-2 rounded text-sm font-medium transition-colors',
                  active
                    ? 'text-bronze bg-cream/10'
                    : 'text-cream/70 hover:text-cream hover:bg-cream/5',
                ].join(' ')}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className="ml-2 px-4 py-2 bg-bronze text-navy font-semibold text-sm rounded hover:bg-bronze-light transition-colors"
          >
            Reserveer
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-cream/70 hover:text-cream p-1"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu openen"
        >
          {open ? (
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-cream/10 bg-navy">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + '/')
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={[
                    'px-3 py-2.5 rounded text-sm font-medium transition-colors',
                    active
                      ? 'text-bronze bg-cream/10'
                      : 'text-cream/70 hover:text-cream hover:bg-cream/5',
                  ].join(' ')}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 px-3 py-2.5 bg-bronze text-navy font-semibold text-sm rounded text-center hover:bg-bronze-light transition-colors"
            >
              Reserveer
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
