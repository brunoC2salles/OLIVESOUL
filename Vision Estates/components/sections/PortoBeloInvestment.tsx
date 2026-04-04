'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldDivider } from '@/components/ui/GoldDivider'

interface PortoBeloInvestmentProps {
  locale: string
}

const investmentReasons = [
  {
    title: 'Masterplan 2025',
    description: 'Investimento de R$200 milhões em infraestrutura urbana, revitalização costeira e equipamentos públicos de classe mundial.'
  },
  {
    title: 'Posicionamento Estratégico',
    description: 'Apenas 60km de Florianópolis e 15km de Balneário Camboriú. BR-101 próxima. Aeroporto e terminal de cruzeiros acessíveis.'
  },
  {
    title: 'Valorização Histórica',
    description: 'Terrenos crescem +250% desde 2020. Imóveis prontos superam média de +85% ao ano. Demanda por habitação premium em expansão constante.'
  }
]

export function PortoBeloInvestment({ locale }: PortoBeloInvestmentProps) {
  return (
    <section className="w-full bg-navy-900 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionLabel className="text-white/60">Por que investir agora</SectionLabel>
          <h2 className="font-display font-light text-5xl md:text-6xl text-white mt-4 mb-6 leading-tight">
            A confluência perfeita de fatores.
          </h2>
          <p className="font-body font-normal text-lg text-stone-300 max-w-3xl mx-auto leading-relaxed">
            Desenvolvimento planejado, infraestrutura em curso, localização privilegiada e histórico comprovado de valorização convergem para criar oportunidades únicas no mercado imobiliário brasileiro.
          </p>
        </motion.div>

        <div className="mb-20">
          <GoldDivider />
        </div>

        {/* Investment Reasons Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {investmentReasons.map((reason, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-6 bg-navy-800 border border-gold-400/20 rounded-lg p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.15
              }}
            >
              <h3 className="font-display font-semibold text-2xl text-white">
                {reason.title}
              </h3>
              <p className="font-body font-normal text-base text-stone-300 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mb-20">
          <GoldDivider />
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <p className="font-body font-normal text-lg text-white mb-8 max-w-2xl mx-auto">
            Pronto para explorar as oportunidades em Porto Belo?
          </p>
          <Link
            href={`/${locale}/imoveis`}
            className="inline-flex items-center justify-center px-10 py-4 bg-gold-400 text-navy-900 font-body font-medium text-base hover:bg-gold-300 transition-all duration-300"
          >
            Ver os imóveis disponíveis
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
