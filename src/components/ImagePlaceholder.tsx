interface ImagePlaceholderProps {
  label?: string
  aspectRatio?: 'video' | 'square' | 'wide'
  className?: string
}

export function ImagePlaceholder({
  label,
  aspectRatio = 'video',
  className = '',
}: ImagePlaceholderProps) {
  const paddingMap = {
    video: 'pb-[56.25%]',
    square: 'pb-[100%]',
    wide: 'pb-[40%]',
  }

  return (
    <div className={`relative w-full ${paddingMap[aspectRatio]} ${className}`}>
      <div className="absolute inset-0 bg-mist flex flex-col items-center justify-center border border-navy/10">
        {/* Boat-in-circle — matching the original WielaardMarine logo */}
        <svg
          viewBox="-125 -125 250 250"
          className="w-16 h-16 opacity-25"
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

        {label && (
          <span className="mt-3 text-ink/40 text-xs font-mono uppercase tracking-widest text-center px-4">
            {label}
          </span>
        )}
        <span className="mt-1 text-ink/25 text-xs">foto volgt</span>
      </div>
    </div>
  )
}
