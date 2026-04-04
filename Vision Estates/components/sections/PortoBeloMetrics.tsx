'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldDivider } from '@/components/ui/GoldDivider'

const portoBelloMetrics = [
  {
    value: 3.8,
    unit: 'bi',
    label: 'VGV em Porto Belo',
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
    label: 'Praias em 15km',
    isNumber: true
  },
  {
    value: 15,
    unit: 'km',
    label: 'De costa preservada',
    isNumber: true
  },
  {
    value: 200,
    unit: 'mi',
    label: 'Em obras públicas',
    isNumber: true
  }
]

export function PortoBeloMetrics() {
  return (
    <section className="w-full bg-off-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionLabel>Em Números</SectionLabel>
          <h2 className="font-display font-normal text-3xl md:text-4xl text-navy-900 mt-4">
            Crescimento que impressiona
          </h2>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {portoBelloMetrics.map((metric, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.1
              }}
            >
              <div className="flex items-baseline gap-2">
                <h3 className="font-display font-semibold text-5xl text-navy-900">
                  {metric.unit === '%' && '+'}
                  {metric.value}
                </h3>
                {metric.unit && (
                  <span className="font-display font-light text-3xl text-gold-400">
                    {metric.unit}
                  </span>
                )}
              </div>
              <p className="font-body font-normal text-xs text-stone-600 uppercase tracking-widest text-center px-2">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20">
          <GoldDivider />
        </div>
      </div>
    </section>
  )
}
