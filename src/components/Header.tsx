"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/vloot", label: "Vloot" },
  { href: "/diensten", label: "Diensten" },
  { href: "/over-ons", label: "Over Ons" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-navy border-b border-cream/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="group" onClick={() => setOpen(false)}>
          <Image
            src="/images/wielaard_marine_icon_transparent_hero.png"
            alt="WielaardMarine"
            width={160}
            height={44}
            className="h-11 w-auto rounded group-hover:opacity-90 transition-opacity duration-300"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "px-4 py-2 rounded text-sm font-medium transition-colors",
                  active
                    ? "text-bronze bg-cream/10"
                    : "text-cream/70 hover:text-cream hover:bg-cream/5",
                ].join(" ")}
              >
                {link.label}
              </Link>
            );
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
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-cream/10 bg-navy">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={[
                    "px-3 py-2.5 rounded text-sm font-medium transition-colors",
                    active
                      ? "text-bronze bg-cream/10"
                      : "text-cream/70 hover:text-cream hover:bg-cream/5",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              );
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
  );
}
