"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/diensten", label: "Diensten" },
  { href: "/vloot", label: "Verhuur" },
  { href: "/over-ons", label: "Over Ons" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 24);
      setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-navy/90 backdrop-blur-md shadow-md shadow-navy/10 border-b border-white/10"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="group" onClick={() => setOpen(false)}>
          <Image
            src="/images/wielaard_marine_icon_transparent_hero.png"
            alt="WielaardMarine"
            width={160}
            height={44}
            className={[
              "w-auto rounded group-hover:opacity-90 transition-all duration-300",
              scrolled ? "h-9" : "h-11",
            ].join(" ")}
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
                  "px-4 py-2 rounded text-sm font-medium transition-colors duration-300",
                  scrolled
                    ? active
                      ? "text-azure-light bg-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                    : active
                      ? "text-azure bg-navy/5"
                      : "text-navy/70 hover:text-navy hover:bg-navy/5",
                ].join(" ")}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={[
              "ml-2 px-4 py-2 font-semibold text-sm rounded transition-colors duration-300",
              scrolled
                ? "bg-white text-navy hover:bg-mist"
                : "bg-navy text-white hover:bg-navy-light",
            ].join(" ")}
          >
            Offerte aanvragen
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={[
            "md:hidden p-1 transition-colors duration-300",
            scrolled
              ? "text-white/70 hover:text-white"
              : "text-navy/70 hover:text-navy",
          ].join(" ")}
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
        <div className="md:hidden border-t border-white/10 bg-navy">
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
                      ? "text-azure-light bg-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/5",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 px-3 py-2.5 bg-white text-navy font-semibold text-sm rounded text-center hover:bg-mist transition-colors"
            >
              Offerte aanvragen
            </Link>
          </nav>
        </div>
      )}

      {/* Scroll progress accent */}
      <div className="h-0.5 w-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-azure via-azure-light to-white/80 transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  );
}
