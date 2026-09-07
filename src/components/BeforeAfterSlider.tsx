"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  className?: string;
}

export function BeforeAfterSlider({ before, after, className = "" }: Props) {
  const [pos, setPos] = useState(50);

  return (
    <div
      className={`relative w-full overflow-hidden rounded border border-mist-deep bg-mist select-none ${className}`}
    >
      <Image src={after.src} alt={after.alt} fill className="object-cover" />

      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image src={before.src} alt={before.alt} fill className="object-cover" />
      </div>

      <div
        className="pointer-events-none absolute top-0 bottom-0 z-[3] w-0.5 bg-white"
        style={{ left: `${pos}%`, transform: "translateX(-1px)" }}
      />

      <div
        className="pointer-events-none absolute top-1/2 z-[4] flex h-[46px] w-[46px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-navy/10 bg-white"
        style={{ left: `${pos}%` }}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-[18px] w-[18px]"
          fill="none"
          stroke="#123c69"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l-6-6 6-6M15 6l6 6-6 6" />
        </svg>
      </div>

      <span className="pointer-events-none absolute bottom-3.5 left-3.5 z-[3] rounded-sm bg-navy-dark/80 px-2.5 py-1 font-mono text-[10.5px] tracking-widest text-white uppercase">
        Voor
      </span>
      <span className="pointer-events-none absolute right-3.5 bottom-3.5 z-[3] rounded-sm bg-azure/90 px-2.5 py-1 font-mono text-[10.5px] tracking-widest text-white uppercase">
        Na
      </span>

      <input
        type="range"
        min={2}
        max={98}
        step={0.1}
        value={pos}
        onChange={(e) => setPos(parseFloat(e.target.value))}
        aria-label="Sleep om voor en na te vergelijken"
        className="absolute inset-0 z-[5] m-0 h-full w-full cursor-col-resize appearance-none opacity-0"
      />
    </div>
  );
}
