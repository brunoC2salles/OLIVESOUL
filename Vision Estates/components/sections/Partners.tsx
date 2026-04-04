'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { SectionLabel } from '@/components/ui/SectionLabel'

interface Partner {
  name: string
  tagline: string
  url: string
}

const partners: Partner[] = [
  {
    name: 'Vokkan',
    tagline: 'Incorporação de excelência',
    url: 'https://vokkan.com.br'
  },
  {
    name: 'PH Empreendimentos',
    tagline: 'Projetos de grande impacto',
    url: 'https://phempreendimentos.com.br'
  },
  {
    name: 'Thozen',
    tagline: 'Inovação e qualidade',
    url: 'https://thozen.com.br'
  },
  {
    name: 'A.S. Ramos',
    tagline: 'Construtora de confiança',
    url: '#'
  }
]

export function Partners() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionLabel>Parceiros</SectionLabel>
          <h3 className="font-display font-normal text-4xl md:text-5xl text-navy-900 mt-4">
            Construtoras que assinam os projetos
          </h3>
          <p className="font-body font-normal text-sm md:text-base text-stone-600 mt-6 max-w-2xl mx-auto">
            Selecionamos apenas incorporadoras com histórico comprovado de entrega e valorização.
          </p>
        </motion.div>

        {/* Partner Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group border border-stone-200 hover:border-gold-400 rounded-lg p-7 flex flex-col justify-between gap-6 transition-all duration-300 bg-white/50"
            >
              {/* Logo Placeholder */}
              <div className="h-20 flex items-center justify-center bg-stone-50/50 rounded border border-stone-100/50">
                <h4 className="font-display font-semibold text-gold-500 text-xl text-center leading-tight px-4">
                  {partner.name}
                </h4>
              </div>

              {/* Partner Name and Tagline */}
              <div className="flex flex-col gap-2">
                <h5 className="font-body font-medium text-base text-navy-900">
                  {partner.name}
                </h5>
                <p className="font-body font-normal text-sm text-stone-600">
                  {partner.tagline}
                </p>
              </div>

              {/* CTA Link */}
              <Link
                href={partner.url}
                target={partner.url !== '#' ? '_blank' : undefined}
                rel={partner.url !== '#' ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 font-body font-medium text-sm text-gold-600 hover:text-gold-500 transition-colors duration-300 group-hover:gap-3"
              >
                Ver empreendimentos
                <span className="text-lg leading-none">→</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
