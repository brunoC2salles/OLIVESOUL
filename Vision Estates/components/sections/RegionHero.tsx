'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function RegionHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 500], [0, 100])

  const bulletPoints = [
    {
      title: 'Hard Rock Café',
      detail: 'Sobre o pier',
      icon: '🎸'
    },
    {
      title: 'Alargamento da Praia',
      detail: '+R$80 milhões',
      icon: '🏖'
    },
    {
      title: 'Marina e Mirante',
      detail: 'Estrutura de classe A',
      icon: '⛵'
    },
    {
      title: 'Primeiro Hospital',
      detail: 'Porto Belo (Thozen)',
      icon: '🏥'
    }
  ]

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-navy-800 overflow-hidden"
      style={{ height: '80vh' }}
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY }}
      >
        <Image
          src="/images/porto-belo/aerial.svg"
          alt="Porto Belo Aerial View"
          fill
          className="object-cover"
          quality={100}
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-800 via-transparent to-navy-800" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6">
        <motion.div
          className="text-center max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section Label */}
          <div className="mb-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/70">
              Porto Belo · SC
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-display font-light text-5xl md:text-6xl text-white mb-8 leading-tight">
            A cidade que está<br />
            sendo construída agora.
          </h2>

          {/* Subtitle */}
          <p className="font-body font-normal text-lg text-stone-200 max-w-2xl mx-auto mb-12 leading-relaxed">
            Porto Belo está em um momento único de desenvolvimento. Com investimentos estimados em R$ 3,8 bilhões e projetos que redefinem o padrão de qualidade no Brasil, a cidade cresce com infraestrutura, segurança e oportunidades de valorização.
          </p>

          {/* Bullet Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {bulletPoints.map((bullet, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <svg
                  className="w-4 h-4 text-gold-400 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <div className="text-left">
                  <h4 className="font-body font-medium text-base text-white mb-1">
                    {bullet.title}
                  </h4>
                  <p className="font-body font-normal text-sm text-stone-300">
                    {bullet.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Link
              href="/porto-belo"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/50 text-white font-body font-medium text-base hover:border-gold-400 hover:text-gold-400 transition-all duration-300"
            >
              <span>Explorar a região</span>
              <span>→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
