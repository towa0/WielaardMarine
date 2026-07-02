import Link from "next/link";
import Image from "next/image";
import type { Boat } from "@/data/boats";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface BoatCardProps {
  boat: Boat;
}

export function BoatCard({ boat }: BoatCardProps) {
  return (
    <Link
      href={`/vloot/${boat.slug}`}
      className="group block bg-white border border-navy/10 rounded-lg overflow-hidden hover:border-azure/60 hover:shadow-md hover:shadow-navy/10 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        {boat.coverImage ? (
          <Image
            src={boat.coverImage}
            alt={boat.name}
            width={800}
            height={450}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : boat.images.length > 0 ? (
          <Image
            src={`/images/boats/${boat.slug}/${boat.images[0]}`}
            alt={boat.name}
            width={800}
            height={450}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <ImagePlaceholder label={boat.name} />
        )}

        {!boat.available && (
          <div className="absolute top-3 right-3 bg-navy/80 text-white text-xs font-mono uppercase tracking-wider px-2 py-1 rounded">
            Niet beschikbaar
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-heading text-navy text-xl group-hover:text-azure transition-colors">
            {boat.name}
          </h3>
          <span className="shrink-0 text-azure text-xs font-mono uppercase tracking-wider border border-azure/40 rounded px-2 py-0.5 mt-1">
            {boat.type}
          </span>
        </div>

        <p className="text-ink-muted text-sm leading-relaxed mb-4 line-clamp-2">
          {boat.shortDescription}
        </p>

        <div className="flex items-center justify-between text-sm border-t border-navy/10 pt-3">
          <div className="flex gap-4 text-ink-muted">
            <span title="Lengte">⟷ {boat.length}</span>
            <span title="Max personen">👥 {boat.capacity} pers.</span>
          </div>
          <div className="text-right">
            <span className="text-navy font-semibold">€{boat.pricePerDay}</span>
            <span className="text-ink-muted text-xs"> /dag</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
