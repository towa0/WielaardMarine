import Image from "next/image";
import type { WerkFoto } from "@/data/werk";

interface WerkGalerijProps {
  fotos: WerkFoto[];
}

// Never more than two photos per row, at their own aspect ratio, so nothing
// gets cropped. Landscape photos take the full width.
export function WerkGalerij({ fotos }: WerkGalerijProps) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-y-12">
      {fotos.map((foto) => {
        const landscape = foto.width > foto.height;
        return (
          <figure key={foto.id} className={landscape ? "sm:col-span-2" : ""}>
            <Image
              src={foto.src}
              alt={foto.alt}
              width={foto.width}
              height={foto.height}
              sizes={
                landscape
                  ? "(min-width: 1180px) 1116px, 100vw"
                  : "(min-width: 1180px) 546px, (min-width: 640px) 50vw, 100vw"
              }
              className="h-auto w-full rounded"
            />
            <figcaption className="mt-3 text-sm leading-snug text-ink-muted">
              {foto.caption}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
