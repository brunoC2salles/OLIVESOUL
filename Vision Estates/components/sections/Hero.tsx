'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { GrainOverlay } from '@/components/ui/GrainOverlay'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
}

const lineReveal = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
  }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
}

const floatAnimation = {
  animate: {
    y: [0, -6, 0],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
  }
}

export function Hero() {
  const t = useTranslations()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  return (
    <section className="relative w-full h-screen md:h-[100svh] overflow-hidden bg-navy-900">
      {/* Background Image with Overlay */}
      <Image
        src="/images/porto-belo/hero.svg"
        alt="Porto Belo"
        fill
        className="object-cover"
        priority
        quality={100}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/30 via-navy-900/50 to-navy-900/70" />
      <GrainOverlay />

      {/* Main Content Grid */}
      <div className="relative h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full items-center">
            {/* Left Content - 55% width */}
            <motion.div
              className="md:col-span-7 flex flex-col gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Section Label */}
              <motion.div variants={fadeUp}>
                <SectionLabel>
                  Porto Belo · Santa Catarina · SC
                </SectionLabel>
              </motion.div>

              {/* Main Headline */}
              <motion.div variants={lineReveal} className="overflow-hidden">
                <h1 className="font-display font-light text-white leading-[0.95] text-3xl md:text-7xl">
                  Onde o Atlântico<br />
                  encontra o futuro.
                </h1>
              </motion.div>

              {/* Subheadline */}
              <motion.p
                variants={fadeUp}
                className="font-body font-normal text-stone-200 text-base md:text-lg max-w-md leading-relaxed"
              >
                {t('hero.subheadline')}
              </motion.p>

              {/* Gold Divider - 120px */}
              <motion.div variants={fadeUp} className="w-[120px]">
                <div className="h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent w-full" />
              </motion.div>

              {/* CTAs */}
              <motion.div
                variants={fadeUp}
                className="flex gap-4 flex-wrap"
              >
                {/* Primary CTA */}
                <Link
                  href="#properties"
                  aria-label="Explorar propriedades"
                  className="px-8 py-4 bg-gold-400 text-navy-900 font-body font-medium text-sm md:text-base hover:bg-gold-300 transition-all duration-300 inline-block"
                >
                  {t('hero.cta_primary')}
                </Link>

                {/* Secondary CTA */}
                <Link
                  href="/porto-belo"
                  aria-label="Descobrir a região"
                  className="px-8 py-4 border border-white/40 text-white font-body font-medium text-sm md:text-base hover:border-gold-400 hover:text-gold-400 transition-all duration-300 inline-block"
                >
                  {t('hero.cta_secondary')}
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side - Floating Cards (Desktop Only) */}
            <div className="hidden md:flex md:col-span-5 relative h-full items-center justify-center">
              <div className="relative w-full h-96">
                {/* Card 1 - VGV */}
                <motion.div
                  className="absolute top-0 right-0 w-64 p-6 rounded-lg bg-navy-800/80 backdrop-blur-md border border-gold-400/20"
                  initial={{ opacity: 0, x: 40, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  variants={floatAnimation}
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display font-light text-3xl text-gold-400">
                      R$ 3,8 bi
                    </h3>
                    <p className="font-mono text-xs text-stone-400 uppercase tracking-wider">
                      VGV Porto Belo 2025
                    </p>
                  </div>
                </motion.div>

                {/* Card 2 - Appreciation */}
                <motion.div
                  className="absolute top-48 right-32 w-64 p-6 rounded-lg bg-navy-800/80 backdrop-blur-md border border-gold-400/20"
                  initial={{ opacity: 0, x: 40, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  variants={floatAnimation}
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display font-light text-3xl text-gold-400">
                      +250%
                    </h3>
                    <p className="font-mono text-xs text-stone-400 uppercase tracking-wider">
                      Valorização média
                    </p>
                  </div>
                </motion.div>

                {/* Card 3 - Rank */}
                <motion.div
                  className="absolute bottom-12 right-0 w-64 p-6 rounded-lg bg-navy-800/80 backdrop-blur-md border border-gold-400/20"
                  initial={{ opacity: 0, x: 40, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  variants={floatAnimation}
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display font-light text-3xl text-gold-400">
                      #1
                    </h3>
                    <p className="font-mono text-xs text-stone-400 uppercase tracking-wider">
                      Cidade litorânea BR
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
      >
        <span className="text-stone-400 font-mono text-xs uppercase tracking-widest transform -rotate-90 origin-center translate-y-6">
          Scroll
        </span>
        <motion.div
          className="h-12 w-px bg-gradient-to-b from-stone-400 to-transparent"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
