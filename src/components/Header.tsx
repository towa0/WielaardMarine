"use client";

import { useEffect, useState } from "react";
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

        <nav className="flex flex-wrap items-center justify-end gap-0.5">
          {navItems.map((item) => {
            const isActive = item.label === active;
            return (
              <Link
                key={item.href}
                href={item.href}
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
      </div>
    </header>
  );
}
