export function GrainOverlay() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-1"
      style={{ opacity: 0.03 }}
      preserveAspectRatio="none"
    >
      <defs>
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="4"
            result="noise"
          />
          <feColorMatrix in="noise" type="saturate" values="0" />
        </filter>
      </defs>
      <rect width="100%" height="100%" fill="#000000" filter="url(#noise)" />
    </svg>
  )
}
