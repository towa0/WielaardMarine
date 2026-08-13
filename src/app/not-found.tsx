import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-mist min-h-screen flex items-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-24 text-center">
        <p className="text-azure text-xs font-mono uppercase tracking-widest mb-3">
          404
        </p>
        <h1 className="font-heading text-navy text-4xl sm:text-5xl mb-5">
          Pagina niet gevonden
        </h1>
        <p className="text-ink-muted max-w-md mx-auto leading-relaxed mb-8">
          De pagina die u zoekt bestaat niet of is verplaatst.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy text-white font-semibold text-sm rounded hover:bg-navy-light transition-colors"
        >
          Terug naar home
        </Link>
      </div>
    </div>
  );
}
