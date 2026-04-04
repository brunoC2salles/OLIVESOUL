'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { GrainOverlay } from '@/components/ui/GrainOverlay'

interface InvestmentCard {
  badge: string
  title: string
  fromPrice: string
  toPrice: string
  roi: string
  additional?: string
  percentage: number
}

const investments: InvestmentCard[] = [
  {
    badge: 'PH Empreendimentos',
    title: 'Salou Residence',
    fromPrice: 'R$ 323k',
    toPrice: 'R$ 950k',
    roi: '+85,76% em 6 anos',
    percentage: 85
  },
  {
    badge: 'Thozen',
    title: 'Jardins de Versalhes',
    fromPrice: 'R$ 575k',
    toPrice: 'R$ 1,12M',
    roi: 'ROI 202,6%',
    additional: 'Desembolso R$270k',
    percentage: 100
  },
  {
    badge: 'Thozen',
    title: 'Mirador de Alicante',
    fromPrice: 'R$ 1,25M',
    toPrice: 'R$ 2,32M',
    roi: '+85,6%',
    additional: 'Média 36,2% ao ano',
    percentage: 86
  }
]

interface ProgressBarProps {
  percentage: number
}

function ProgressBar({ percentage }: ProgressBarProps) {
  const [displayPercentage, setDisplayPercentage] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const startTime = Date.now()
          const duration = 1500

          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easeOutQuad = 1 - (1 - progress) * (1 - progress)

            setDisplayPercentage(Math.floor(percentage * easeOutQuad))

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [percentage])

  return (
    <div ref={containerRef} className="flex flex-col gap-2">
      <div className="w-full h-2 bg-navy-700/50 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-gold-500 to-gold-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${displayPercentage}%` }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
      <p className="font-mono text-xs text-gold-400 font-medium">
        {displayPercentage}% valorização
      </p>
    </div>
  )
}

interface InvestmentCardComponentProps {
  card: InvestmentCard
  index: number
}

function InvestmentCardComponent({ card, index }: InvestmentCardComponentProps) {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.15
      }
    }
  }

  return (
    <motion.div
      className="flex-1 min-w-0 bg-navy-800 border border-gold-400/20 rounded-lg p-7 flex flex-col gap-6"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Badge */}
      <div className="inline-flex">
        <span className="bg-gold-400/10 border border-gold-400/30 text-gold-400 px-3 py-1 font-mono text-xs uppercase tracking-wider rounded-full w-fit">
          {card.badge}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display font-semibold text-xl text-white">
        {card.title}
      </h3>

      {/* Price Range */}
      <div className="flex items-baseline gap-3">
        <span className="font-display font-semibold text-2xl text-gold-400">
          {card.fromPrice}
        </span>
        <span className="text-stone-400 font-body text-sm">→</span>
        <span className="font-display font-semibold text-2xl text-white">
          {card.toPrice}
        </span>
      </div>

      {/* ROI Info */}
      <div className="flex flex-col gap-2">
        <p className="font-body font-medium text-base text-white">
          {card.roi}
        </p>
        {card.additional && (
          <p className="font-body font-normal text-sm text-stone-300">
            {card.additional}
          </p>
        )}
      </div>

      {/* Progress Bar */}
      <ProgressBar percentage={card.percentage} />
    </motion.div>
  )
}

export function Investment() {
  return (
    <section className="w-full bg-navy-900 py-32 relative overflow-hidden">
      <GrainOverlay />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* BLOCO 1 — Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">
            Tese de Investimento
          </span>
          <h2 className="font-display font-light text-5xl md:text-6xl text-white mt-4 mb-6 leading-tight">
            Histórico que fala por si.
          </h2>
          <p className="font-body font-normal text-lg text-stone-300 max-w-3xl mx-auto leading-relaxed">
            Porto Belo registra valorização consistente há mais de uma década. Os empreendimentos da nossa curadoria acompanham — e superam — essa curva.
          </p>
        </motion.div>

        <div className="mb-20">
          <GoldDivider />
        </div>

        {/* BLOCO 2 — Cards de Valorização */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {investments.map((investment, index) => (
            <InvestmentCardComponent
              key={index}
              card={investment}
              index={index}
            />
          ))}
        </motion.div>

        <div className="mb-20">
          <GoldDivider />
        </div>

        {/* BLOCO 3 — CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <p className="font-body font-normal text-lg text-white mb-6 max-w-2xl mx-auto">
            Quer receber uma análise personalizada do seu perfil de investidor?
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-gold-400 text-navy-900 font-body font-medium text-base hover:bg-gold-300 transition-all duration-300"
          >
            Agendar Sessão Estratégica
          </Link>
          <p className="font-body font-normal text-xs text-stone-400 mt-4">
            Sem compromisso. 100% consultivo.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
