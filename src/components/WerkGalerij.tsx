import Image from "next/image";
import type { WerkFoto } from "@/data/werk";

interface WerkGalerijProps {
  fotos: WerkFoto[];
}

const spanClasses: Record<string, string> = {
  square: "",
  wide: "col-span-2",
  tall: "row-span-2",
  big: "col-span-2 row-span-2",
};

export function WerkGalerij({ fotos }: WerkGalerijProps) {
  return (
    <div className="grid grid-flow-dense grid-cols-2 gap-3 auto-rows-[140px] sm:grid-cols-3 sm:auto-rows-[160px] lg:grid-cols-4 lg:auto-rows-[180px]">
      {fotos.map((foto) => (
        <figure
          key={foto.id}
          className={`group relative overflow-hidden rounded border border-mist-deep bg-mist ${spanClasses[foto.span ?? "square"]}`}
        >
          <Image
            src={foto.src}
            alt={foto.alt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-dark/85 to-transparent px-3 pt-6 pb-2.5 text-[12.5px] leading-snug text-white">
            {foto.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
