"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Polijsten", href: "/diensten" },
  { label: "Werk", href: "/werk" },
  { label: "Verhuur", href: "/vloot" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Contact", href: "/contact" },
];

// Always visible this close to the top of the page.
const REVEAL_ZONE = 96;
// Ignore scroll jitter smaller than this, so the bar doesn't flicker.
const SCROLL_THRESHOLD = 6;

interface HeaderProps {
  variant?: "solid" | "transparent";
  active?: string;
}

export function Header({ variant = "solid", active = "" }: HeaderProps) {
  const onDark = variant === "transparent";
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };
    // The mobile menu doesn't exist at desktop widths, so don't leave it open.
    const desktop = window.matchMedia("(min-width: 48rem)");
    const onBreakpoint = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      document.documentElement.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [menuOpen]);

  useEffect(() => {
    let lastY = Math.max(0, window.scrollY);
    let frame = 0;

    const update = () => {
      frame = 0;
      // Clamped: iOS overscroll reports negative values.
      const y = Math.max(0, window.scrollY);
      setScrolled(y > 8);

      if (y <= REVEAL_ZONE) {
        setHidden(false);
        lastY = y;
        return;
      }

      const delta = y - lastY;
      if (Math.abs(delta) < SCROLL_THRESHOLD) return;
      setHidden(delta > 0);
      lastY = y;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header
      className={[
        "top-0 z-40 w-full transition-[translate,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-within:translate-y-0 motion-reduce:transition-none",
        hidden ? "-translate-y-full" : "translate-y-0",
        scrolled && !hidden ? "shadow-[0_10px_30px_-14px_rgba(11,41,71,0.55)]" : "",
        onDark
          ? "fixed left-0 border-b border-white/10 bg-navy-dark/90 backdrop-blur-md"
          : "sticky border-b border-mist-deep bg-white/95 backdrop-blur-sm",
      ].join(" ")}
    >
      <div className="mx-auto flex min-h-[68px] max-w-[1180px] items-center justify-between gap-4 px-4 py-2 sm:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          {onDark ? (
            <Image
              src="/images/wielaard_marine_icon_on_dark.png"
              alt="Wielaard Marine"
              width={400}
              height={188}
              className="h-9 w-auto"
              priority
            />
          ) : (
            <Image
              src="/images/wielaard_marine_icon_transparent_hero.png"
              alt="Wielaard Marine"
              width={40}
              height={40}
              className="h-10 w-auto"
              priority
            />
          )}
        </Link>

        <nav aria-label="Hoofdmenu" className="hidden items-center justify-end gap-0.5 md:flex">
          {navItems.map((item) => {
            const isActive = item.label === active;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "border-b-2 px-3 py-2 text-sm font-medium tracking-[0.01em] no-underline transition-colors",
                  onDark
                    ? isActive
                      ? "border-white text-white hover:text-white"
                      : "border-transparent text-white/85 hover:text-white"
                    : isActive
                      ? "border-azure text-navy"
                      : "border-transparent text-ink-muted hover:text-navy",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={[
              "ml-2.5 whitespace-nowrap rounded-sm px-5 py-2.5 text-sm font-semibold tracking-[0.01em] no-underline transition-opacity hover:opacity-90",
              onDark ? "bg-white text-navy hover:text-navy" : "bg-navy text-white hover:text-white",
            ].join(" ")}
          >
            Offerte aanvragen
          </Link>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobiel-menu"
          aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
          onClick={() => setMenuOpen((open) => !open)}
          className={[
            "-mr-2 flex h-11 w-11 items-center justify-center rounded-sm md:hidden",
            onDark ? "text-white" : "text-navy",
          ].join(" ")}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <>
          {/* Absolute, not fixed: the header's backdrop-blur and translate make it the containing block for fixed children. */}
          <div
            aria-hidden="true"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-x-0 top-full h-dvh bg-navy-dark/40 md:hidden"
          />
          <nav
            id="mobiel-menu"
            aria-label="Hoofdmenu"
            className={[
              "absolute inset-x-0 top-full max-h-[calc(100dvh-69px)] overflow-y-auto border-b px-4 pb-5 pt-2 shadow-[0_10px_30px_-14px_rgba(11,41,71,0.55)] sm:px-8 md:hidden",
              onDark ? "border-white/10 bg-navy-dark" : "border-mist-deep bg-white",
            ].join(" ")}
          >
            {navItems.map((item) => {
              const isActive = item.label === active;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={[
                    "block border-b py-3.5 text-base font-medium no-underline",
                    onDark
                      ? ["border-white/10", isActive ? "text-white hover:text-white" : "text-white/85 hover:text-white"].join(" ")
                      : ["border-mist-deep", isActive ? "text-azure" : "text-navy hover:text-azure"].join(" "),
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className={[
                "mt-4 block rounded-sm px-5 py-3 text-center text-sm font-semibold tracking-[0.01em] no-underline",
                onDark ? "bg-white text-navy hover:text-navy" : "bg-navy text-white hover:text-white",
              ].join(" ")}
            >
              Offerte aanvragen
            </Link>
          </nav>
        </>
      )}
    </header>
  );
}
