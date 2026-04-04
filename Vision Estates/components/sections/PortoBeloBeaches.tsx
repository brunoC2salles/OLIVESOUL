'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'

interface Beach {
  name: string
  description: string
}

const beaches: Beach[] = [
  { name: 'Perequê', description: 'A mais próxima, com estrutura completa de serviços e gastronomia premium' },
  { name: 'Gravatá', description: 'Cove protegida, ideal para famílias, com águas cristalinas' },
  { name: 'Bombinhas', description: 'Destino ecoturístico com trilhas costeiras e vida marinha preservada' },
  { name: 'Sepultura', description: 'Praia selvagem com formações rochosas únicas no litoral catarinense' },
  { name: 'Mariscal', description: 'Extensa faixa de areia dourada, perfeita para surfe e sunsets' },
  { name: 'Brava', description: 'Ondas poderosas e vibrante cenário de rochedos vulcânicos' },
  { name: 'Ponta do Coral', description: 'Piscinas naturais e banco de corais a poucos metros' },
  { name: 'Embaú', description: 'Rio desaguando na praia, cenário paradisíaco entre serras e oceano' },
  { name: 'Galheta', description: 'Praia nudista preservada, com mata nativa e acesso por trilha exclusiva' },
  { name: 'Penha', description: 'Frente à Fortaleza de Santa Cruz, história e natureza integradas' }
]

export function PortoBeloBeaches() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  return (
    <section className="w-full bg-off-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionLabel>10 Praias · 15km de Costa</SectionLabel>
          <h2 className="font-display font-light text-4xl md:text-5xl text-navy-900 mt-4">
            A diversidade de cenários litorâneos.
          </h2>
        </motion.div>

        {/* Beaches List */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {beaches.map((beach, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-2 pb-6 border-b border-stone-300"
              variants={itemVariants}
            >
              <h3 className="font-display font-semibold text-2xl md:text-3xl text-navy-900">
                {beach.name}
              </h3>
              <p className="font-body font-normal text-base text-stone-600 leading-relaxed">
                {beach.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
