"use client";

import { useState } from "react";
import Image from "next/image";
import type { WerkPaar } from "@/data/werk";

type Side = "voor" | "na";

// Each photo is rendered wider than its resting panel, so growing a panel
// reveals more of the photo instead of rescaling it.
const sizes = "(min-width: 1180px) 800px, 72vw";

export function VoorNaPaar({ paar, index }: { paar: WerkPaar; index: number }) {
  const [focused, setFocused] = useState<Side | null>(null);

  const panel = (side: Side) => {
    const photo = side === "voor" ? paar.before : paar.after;
    const isFocused = focused === side;
    const isDimmed = focused !== null && !isFocused;

    return (
      <button
        type="button"
        aria-pressed={isFocused}
        onPointerEnter={(e) => e.pointerType === "mouse" && setFocused(side)}
        onFocus={() => setFocused(side)}
        onClick={() => setFocused(side)}
        style={{ flexGrow: isFocused ? 2.6 : 1 }}
        className="group relative min-w-0 basis-0 cursor-pointer overflow-hidden transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
      >
        <span className="absolute inset-y-0 left-1/2 block w-[72cqw] -translate-x-1/2">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes={sizes}
            style={{ objectPosition: photo.position ?? "center" }}
            className={[
              "object-cover transition-[filter,scale] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
              isDimmed ? "brightness-[0.55]" : "",
              isFocused ? "scale-[1.02]" : "",
            ].join(" ")}
          />
        </span>
        <span
          className={[
            "absolute bottom-3 rounded-sm px-2.5 py-1 font-mono text-[10.5px] tracking-widest text-white uppercase sm:bottom-5 sm:px-3 sm:text-[11.5px]",
            side === "voor" ? "left-3 bg-navy-dark/85 sm:left-5" : "right-3 bg-azure sm:right-5",
          ].join(" ")}
        >
          {side === "voor" ? "Voor" : "Na"}
        </span>
      </button>
    );
  };

  return (
    <figure>
      <figcaption className="mb-4 sm:mb-5">
        <span className="flex items-baseline gap-3 sm:gap-4">
          <span className="font-mono text-[11px] tracking-[0.2em] text-white/75">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-heading text-[20px] leading-tight font-semibold text-white sm:text-2xl">
            {paar.title}
          </span>
        </span>
        <span className="mt-2 block max-w-[62ch] text-[15px] leading-relaxed text-white/80">
          {paar.description}
        </span>
      </figcaption>
      <div
        onPointerLeave={(e) => e.pointerType === "mouse" && setFocused(null)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setFocused(null);
        }}
        className="@container flex h-[420px] gap-0.5 overflow-hidden rounded bg-white/10 sm:h-[560px] lg:h-[640px]"
      >
        {panel("voor")}
        {panel("na")}
      </div>
    </figure>
  );
}
