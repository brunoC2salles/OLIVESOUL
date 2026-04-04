interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className = 'text-gold-500' }: SectionLabelProps) {
  return (
    <span className={`font-mono text-xs uppercase tracking-[0.2em] ${className}`}>
      {children}
    </span>
  )
}
