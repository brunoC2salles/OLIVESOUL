'use client'

import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  value: number | string
  suffix?: string
  prefix?: string
  duration?: number
  isNumber?: boolean
}

export function CountUp({
  value,
  suffix = '',
  prefix = '',
  duration = 2000,
  isNumber = true
}: CountUpProps) {
  const [displayValue, setDisplayValue] = useState<number | string>(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    if (!isNumber || typeof value === 'string') {
      setDisplayValue(value)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const startTime = Date.now()
          const targetValue = value

          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)

            // Ease-out cubic
            const easeOutCubic = 1 - Math.pow(1 - progress, 3)

            let currentValue = targetValue * easeOutCubic

            // Format based on suffix
            if (suffix === 'bi') {
              currentValue = parseFloat(currentValue.toFixed(1))
            } else {
              currentValue = Math.floor(currentValue)
            }

            setDisplayValue(currentValue)

            if (progress < 1) {
              animationRef.current = requestAnimationFrame(animate)
            }
          }

          animationRef.current = requestAnimationFrame(animate)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      observer.disconnect()
    }
  }, [value, suffix, duration, isNumber])

  return (
    <div ref={containerRef}>
      {prefix}
      {displayValue}
      {suffix}
    </div>
  )
}
