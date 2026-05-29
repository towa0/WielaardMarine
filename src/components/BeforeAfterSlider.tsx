"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";

interface Props {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  className?: string;
}

export function BeforeAfterSlider({ before, after, className = "" }: Props) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const calcPos = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    setPos(Math.max(2, Math.min(((clientX - left) / width) * 100, 98)));
  }, []);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    calcPos(e.clientX);

    const onMove = (e: MouseEvent) => calcPos(e.clientX);
    const onUp = () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  }, [calcPos]);

  // Touch: must be non-passive to call preventDefault and block page scroll
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onTouchStart = (e: TouchEvent) => calcPos(e.touches[0].clientX);
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      calcPos(e.touches[0].clientX);
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
    };
  }, [calcPos]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden select-none cursor-col-resize ${className}`}
      onMouseDown={onMouseDown}
    >
      {/* Before */}
      <Image src={before.src} alt={before.alt} fill className="object-cover" />

      {/* After — clipped to left portion */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={after.src} alt={after.alt} fill className="object-cover" />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10 pointer-events-none"
        style={{ left: `${pos}%` }}
      />

      {/* Drag handle */}
      <div
        className="absolute top-1/2 z-10 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-2xl flex items-center justify-center pointer-events-none"
        style={{ left: `${pos}%` }}
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#0a1f3d" strokeWidth="2.5" strokeLinecap="round">
          <path d="M9 18l-6-6 6-6M15 6l6 6-6 6" />
        </svg>
      </div>

      {/* Labels */}
      <span className="absolute bottom-3 left-3 z-10 bg-[#0a1f3d]/75 text-[#e9dfc9] text-xs font-mono uppercase tracking-widest px-2.5 py-1 rounded pointer-events-none">
        Voor
      </span>
      <span className="absolute bottom-3 right-3 z-10 bg-[#c8682a]/90 text-[#0a1f3d] text-xs font-mono uppercase tracking-widest px-2.5 py-1 rounded pointer-events-none">
        Na
      </span>
    </div>
  );
}
