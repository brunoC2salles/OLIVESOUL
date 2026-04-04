'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { properties } from '@/lib/properties'
import { ProductCard } from '@/components/property/ProductCard'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function Products() {
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

  return (
    <section id="properties" className="w-full bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionLabel>Ativos Selecionados</SectionLabel>
          <h2 className="font-display font-light text-4xl md:text-5xl text-navy-900 mt-4 mb-6">
            Quatro empreendimentos. Uma visão.
          </h2>
          <p className="font-body font-normal text-lg text-stone-600 max-w-lg leading-relaxed">
            Curadoria dos projetos mais promissores de Porto Belo — selecionados pela visão e pelo histórico de valorização.
          </p>
        </motion.div>

        {/* Products Grid / Carousel */}
        <motion.div
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-4 md:overflow-visible mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {properties.map((property, index) => (
            <motion.div
              key={property.slug}
              className="snap-center"
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: index * 0.12
                  }
                }
              }}
            >
              <ProductCard
                name={property.name}
                developer={property.construtora}
                status={property.status}
                slug={property.slug}
                imageUrl={property.image}
                minPrice={property.investimento_min}
                tag={property.name}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          <Link
            href="#contact"
            className="px-8 py-4 border-2 border-navy-900 text-navy-900 font-body font-medium text-base hover:bg-navy-900 hover:text-white transition-all duration-300"
          >
            Conhecer todos os produtos
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
