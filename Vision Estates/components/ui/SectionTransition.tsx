'use client'

type ColorKey = 'navy' | 'white' | 'offwhite' | 'gold' | 'navy-800'

const colorMap: Record<ColorKey, string> = {
  navy: '#0A1628',
  'navy-800': '#0D1F3C',
  white: '#FFFFFF',
  offwhite: '#F8F6F1',
  gold: '#F5EDD0'
}

interface SectionTransitionProps {
  from: ColorKey
  to: ColorKey
  variant?: 'curve' | 'diagonal' | 'wave'
}

export function SectionTransition({
  from,
  to,
  variant = 'curve'
}: SectionTransitionProps) {
  const fromColor = colorMap[from]
  const toColor = colorMap[to]

  if (variant === 'curve') {
    return (
      <svg
        className="w-full h-24 md:h-32 block"
        preserveAspectRatio="none"
        viewBox="0 0 1200 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="curve-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={fromColor} />
            <stop offset="100%" stopColor={toColor} />
          </linearGradient>
        </defs>
        <path
          d="M 0,30 Q 300,80 600,60 T 1200,30 L 1200,100 L 0,100 Z"
          fill="url(#curve-gradient)"
        />
      </svg>
    )
  }

  if (variant === 'diagonal') {
    return (
      <svg
        className="w-full h-20 md:h-24 block"
        preserveAspectRatio="none"
        viewBox="0 0 1200 80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="diagonal-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={fromColor} />
            <stop offset="100%" stopColor={toColor} />
          </linearGradient>
        </defs>
        <polygon
          points="0,0 1200,40 1200,80 0,80"
          fill="url(#diagonal-gradient)"
        />
      </svg>
    )
  }

  if (variant === 'wave') {
    return (
      <svg
        className="w-full h-32 md:h-40 block"
        preserveAspectRatio="none"
        viewBox="0 0 1200 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={fromColor} />
            <stop offset="100%" stopColor={toColor} />
          </linearGradient>
        </defs>
        <path
          d="M 0,30 Q 100,10 200,30 T 400,30 T 600,30 T 800,30 T 1000,30 T 1200,30 L 1200,100 L 0,100 Z"
          fill="url(#wave-gradient)"
        />
      </svg>
    )
  }

  return null
}
