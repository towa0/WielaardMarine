import Image from "next/image";
import type { GalleryImage } from "@/data/gallery";

interface PortfolioGalleryProps {
  images: GalleryImage[];
  className?: string;
}

const spanClasses: Record<string, string> = {
  square: "",
  wide: "col-span-2",
  tall: "row-span-2",
  big: "col-span-2 row-span-2",
};

export function PortfolioGallery({
  images,
  className = "",
}: PortfolioGalleryProps) {
  return (
    <div
      className={`grid grid-flow-dense grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[130px] sm:auto-rows-[150px] lg:auto-rows-[170px] gap-3 ${className}`}
    >
      {images.map((img) => (
        <div
          key={img.id}
          className={`relative rounded-lg overflow-hidden border border-navy/10 bg-mist ${spanClasses[img.span ?? "square"]}`}
        >
          {img.src ? (
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <svg
                viewBox="-125 -125 250 250"
                className="w-10 h-10 opacity-25"
                fill="none"
                stroke="#1e79d8"
                strokeWidth="5"
                strokeLinecap="round"
              >
                <circle cx="0" cy="0" r="110" />
                <path d="M-70 30 Q -35 10, 0 30 T 70 30" />
                <line x1="0" y1="-90" x2="0" y2="-10" />
                <circle cx="0" cy="-100" r="8" fill="#1e79d8" stroke="none" />
                <line x1="-50" y1="-40" x2="50" y2="-40" />
              </svg>
              <span className="mt-2 text-ink/30 text-[10px] font-mono uppercase tracking-widest text-center px-2 leading-tight">
                {img.alt}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
