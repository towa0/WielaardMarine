import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Polijsten", href: "/diensten" },
  { label: "Werk", href: "/werk" },
  { label: "Verhuur", href: "/vloot" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Contact", href: "/contact" },
];

interface HeaderProps {
  variant?: "solid" | "transparent";
  active?: string;
}

export function Header({ variant = "solid", active = "" }: HeaderProps) {
  const onDark = variant === "transparent";

  return (
    <header
      className={[
        "relative z-40 w-full",
        onDark
          ? "bg-transparent border-b border-white/15"
          : "bg-white/95 backdrop-blur-sm border-b border-mist-deep",
      ].join(" ")}
    >
      <div className="mx-auto flex h-[68px] max-w-[1180px] items-center justify-between gap-4 px-4 sm:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <Image
            src="/images/wielaard_marine_icon_transparent_hero.png"
            alt="Wielaard Marine"
            width={40}
            height={40}
            className="h-10 w-auto"
            priority
          />
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
                      ? "border-white text-white"
                      : "border-transparent text-white/70 hover:text-white"
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
              onDark ? "bg-white text-navy" : "bg-navy text-white",
            ].join(" ")}
          >
            Offerte aanvragen
          </Link>
        </nav>
      </div>
    </header>
  );
}
