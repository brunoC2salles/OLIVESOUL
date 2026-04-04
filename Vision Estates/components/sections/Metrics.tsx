'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldDivider } from '@/components/ui/GoldDivider'

interface MetricData {
  value: number | string
  unit?: string
  label: string
  isNumber: boolean
}

const metrics: MetricData[] = [
  {
    value: 3.8,
    unit: 'bi',
    label: 'VGV em Porto Belo · 2025',
    isNumber: true
  },
  {
    value: 250,
    unit: '%',
    label: 'Valorização de terrenos',
    isNumber: true
  },
  {
    value: 10,
    unit: '',
    label: 'Praias em 15km de costa',
    isNumber: true
  },
  {
    value: '#1',
    unit: '',
    label: 'Cidade litorânea que mais cresce',
    isNumber: false
  }
]

function MetricItem({ metric, index }: { metric: MetricData; index: number }) {
  const [displayValue, setDisplayValue] = useState<number | string>(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (metric.isNumber && typeof metric.value === 'number') {
            // Animate number
            let currentValue = 0
            const targetValue = metric.value
            const duration = 2000 // 2 seconds
            const startTime = Date.now()

            const animate = () => {
              const elapsed = Date.now() - startTime
              const progress = Math.min(elapsed / duration, 1)

              // Easing function
              const easeOutQuad = 1 - (1 - progress) * (1 - progress)

              if (metric.unit === 'bi') {
                currentValue = parseFloat((targetValue * easeOutQuad).toFixed(1))
              } else if (metric.unit === '%') {
                currentValue = Math.floor(targetValue * easeOutQuad)
              } else {
                currentValue = Math.floor(targetValue * easeOutQuad)
              }

              setDisplayValue(currentValue)

              if (progress < 1) {
                animationRef.current = requestAnimationFrame(animate)
              }
            }

            animationRef.current = requestAnimationFrame(animate)
          } else {
            setDisplayValue(metric.value)
          }

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
  }, [metric])

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1
      }
    }
  }

  return (
    <motion.div
      ref={containerRef}
      className="flex flex-col items-center gap-4"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Number with Unit */}
      <div className="flex items-baseline gap-2">
        <h3 className="font-display font-semibold text-5xl md:text-6xl text-navy-900">
          {metric.isNumber ? (
            <>
              {metric.unit === '%' && '+'}
              {displayValue}
            </>
          ) : (
            displayValue
          )}
        </h3>
        {metric.unit && (
          <span className="font-display font-light text-3xl md:text-4xl text-gold-400">
            {metric.unit}
          </span>
        )}
      </div>

      {/* Label */}
      <p className="font-body font-normal text-xs md:text-sm text-stone-600 uppercase tracking-widest text-center px-4">
        {metric.label}
      </p>
    </motion.div>
  )
}

export function Metrics() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  return (
    <section className="w-full bg-off-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionLabel>Por que Porto Belo</SectionLabel>
          <h2 className="font-display font-normal text-3xl md:text-4xl text-navy-900 mt-4">
            Números que contam a história
          </h2>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {metrics.map((metric, index) => (
            <div key={index} className="relative">
              <MetricItem metric={metric} index={index} />

              {/* Vertical Divider (Desktop Only) */}
              {index < metrics.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 h-24 w-px bg-gradient-to-b from-gold-400/0 via-gold-400/30 to-gold-400/0" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Gold Divider */}
        <div className="mt-20">
          <GoldDivider />
        </div>
      </div>
    </section>
  )
}
