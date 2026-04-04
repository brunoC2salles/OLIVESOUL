'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldDivider } from '@/components/ui/GoldDivider'

interface ProjectCard {
  title: string
  description: string
  icon: React.ReactNode
}

const projects: ProjectCard[] = [
  {
    title: 'Revitalização da orla de Perequê',
    description: 'Transformação completa da faixa de areia e infraestrutura costeira, criando um espaço público de classe mundial.',
    icon: (
      <svg className="w-8 h-8 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
      </svg>
    )
  },
  {
    title: 'Hard Rock Café sobre o pier',
    description: 'Emblema internacional sobre estrutura histórica, integrando gastronomia premium com vista panorâmica do Atlântico.',
    icon: (
      <svg className="w-8 h-8 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11 9H9V2H7v7H5V2H3v7c0 2.55 1.92 4.63 4.39 4.94V22h2.42v-8.06C11.4 13.63 13 11.57 13 9V2h-2v7zm7-6h-1V1h-2v2h-1v2h1v2h2V3h1V2z" />
      </svg>
    )
  },
  {
    title: 'Construção de molhes Perequê e Perequezinho',
    description: 'Infraestrutura de proteção costeira que reduz erosão, melhora balneabilidade e viabiliza atividades aquáticas.',
    icon: (
      <svg className="w-8 h-8 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z" />
      </svg>
    )
  },
  {
    title: 'Alargamento da faixa de areia',
    description: 'Expansão da praia para aumento de capacidade de público e melhor aproveitamento paisagístico e comercial.',
    icon: (
      <svg className="w-8 h-8 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2zm0 8h-2v2h2z" />
      </svg>
    )
  },
  {
    title: 'Marina e Mirante',
    description: 'Ancoradouro de classe internacional com 200+ berços, complementado por mirante panorâmico de 360º.',
    icon: (
      <svg className="w-8 h-8 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
      </svg>
    )
  },
  {
    title: 'Plano Mil — R$22mi em infraestrutura',
    description: 'Programa municipal de modernização de ruas, sistemas de drenagem, iluminação pública e mobiliário urbano.',
    icon: (
      <svg className="w-8 h-8 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2zm0 8h-2v2h2z" />
      </svg>
    )
  }
]

function ProjectCard({ project, index }: { project: ProjectCard; index: number }) {
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
      className="flex flex-col gap-4 p-8 bg-white border border-stone-200 hover:border-gold-400 transition-colors duration-300"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center">
        {project.icon}
      </div>

      {/* Title */}
      <h3 className="font-body font-medium text-lg text-navy-900">
        {project.title}
      </h3>

      {/* Description */}
      <p className="font-body font-normal text-sm text-stone-600 leading-relaxed">
        {project.description}
      </p>
    </motion.div>
  )
}

export function PortoBeloProjects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  }

  return (
    <section className="w-full bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionLabel>Masterplan Porto Belo 2025</SectionLabel>
          <h2 className="font-display font-light text-4xl md:text-5xl text-navy-900 mt-4">
            Uma cidade que se planeja.
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
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
