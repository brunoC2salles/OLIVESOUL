'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { SectionLabel } from '@/components/ui/SectionLabel'

interface BulletPoint {
  icon: string
  text: string
}

const bulletPoints: BulletPoint[] = [
  {
    icon: '✓',
    text: 'Gestão completa da locação por temporada'
  },
  {
    icon: '✓',
    text: 'Relatórios de rentabilidade em tempo real'
  },
  {
    icon: '✓',
    text: 'Manutenção e atendimento ao hóspede'
  }
]

export function Hospitality() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  return (
    <section className="w-full bg-gold-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col gap-8"
          >
            {/* Label and Heading */}
            <motion.div variants={itemVariants}>
              <SectionLabel className="text-navy-700">
                Investimento em Hospitalidade
              </SectionLabel>
              <h2 className="font-display font-normal text-4xl md:text-5xl text-navy-900 mt-4">
                Seu imóvel trabalhando por você.
              </h2>
            </motion.div>

            {/* Paragraph */}
            <motion.p
              variants={itemVariants}
              className="font-body font-normal text-base md:text-lg text-navy-700 leading-relaxed"
            >
              Além de adquirir, você pode operar. Oferecemos gestão completa de ativos imobiliários com fins turísticos — maximizando a rentabilidade do seu patrimônio durante os períodos em que não está usando.
            </motion.p>

            {/* Bullet Points */}
            <motion.div variants={containerVariants} className="flex flex-col gap-4">
              {bulletPoints.map((bullet, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center mt-1">
                    <span className="text-gold-500 font-bold text-sm">✓</span>
                  </div>
                  <p className="font-body font-normal text-base text-navy-700 pt-0.5">
                    {bullet.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-4">
              <Link
                href="#contact"
                className="inline-flex items-center px-8 py-4 border-2 border-navy-900 text-navy-900 font-body font-medium text-base hover:bg-navy-900 hover:text-gold-100 transition-all duration-300"
              >
                Quero saber mais
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative h-96 md:h-[500px]"
            style={{ transform: 'rotate(-2deg)' }}
          >
            <div className="absolute inset-0 border-2 border-gold-400 rounded-lg overflow-hidden bg-navy-100/20">
              <Image
                src="/images/porto-belo/aerial.svg"
                alt="Hospedaria Porto Belo"
                fill
                className="object-cover"
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
