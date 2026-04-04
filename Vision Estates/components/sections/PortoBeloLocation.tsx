'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { AirplaneIcon, BeachIcon, GolfIcon, CityIcon, ShipIcon, WaveIcon, SignpostIcon } from '@/components/ui/LocationIcon'

const locationIcons = [
  {
    icon: <AirplaneIcon />,
    title: 'Aeroporto FLN',
    distance: '60km',
    detail: '~45 minutos'
  },
  {
    icon: <BeachIcon />,
    title: 'Praia Perequê',
    distance: '5min',
    detail: 'A pé'
  },
  {
    icon: <GolfIcon />,
    title: 'Campo de Golf',
    distance: '8km',
    detail: '10 minutos'
  },
  {
    icon: <ShipIcon />,
    title: 'Terminal de Cruzeiros',
    distance: 'Centro',
    detail: 'Integrado'
  },
  {
    icon: <CityIcon />,
    title: 'Balneário Camboriú',
    distance: '15km',
    detail: '18 minutos'
  },
  {
    icon: <CityIcon />,
    title: 'Florianópolis',
    distance: '70km',
    detail: '50 minutos'
  },
  {
    icon: <SignpostIcon />,
    title: 'BR-101',
    distance: '5min',
    detail: 'Acesso rodoviário'
  },
  {
    icon: <WaveIcon />,
    title: '10 Praias',
    distance: '15km',
    detail: 'De costa'
  }
]

export function PortoBeloLocation() {
  return (
    <section className="w-full bg-navy-800 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionLabel className="text-gold-300">Localização Estratégica</SectionLabel>
          <h2 className="font-display font-light text-4xl md:text-5xl text-white mt-4">
            No coração da Costa Esmeralda.
          </h2>
        </motion.div>

        {/* Location Icons Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {locationIcons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.08
              }}
            >
              <div className="text-white text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gold-400/10 mx-auto mb-4">
                  <div className="text-gold-400">{item.icon}</div>
                </div>
                <h3 className="font-body font-medium text-sm text-white mb-2">
                  {item.title}
                </h3>
                <p className="font-display font-semibold text-xl text-gold-300 mb-1">
                  {item.distance}
                </p>
                <p className="font-body font-normal text-xs text-stone-300">
                  {item.detail}
                </p>
              </div>
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
