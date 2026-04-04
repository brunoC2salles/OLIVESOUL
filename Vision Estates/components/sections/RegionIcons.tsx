'use client'

import { motion } from 'framer-motion'
import { LocationIcon, AirplaneIcon, BeachIcon, GolfIcon, ShipIcon, CityIcon, SignpostIcon, HospitalIcon, ShoppingIcon, WaveIcon } from '@/components/ui/LocationIcon'
import { SectionLabel } from '@/components/ui/SectionLabel'

const locationData = [
  {
    icon: <AirplaneIcon />,
    title: 'Aeroporto FLN',
    distance: '60 km',
    detail: '~45 min'
  },
  {
    icon: <BeachIcon />,
    title: 'Praia Perequê',
    distance: '5 min',
    detail: 'a pé'
  },
  {
    icon: <GolfIcon />,
    title: 'Campo de Golf',
    distance: '8 km',
    detail: '10 min'
  },
  {
    icon: <ShipIcon />,
    title: 'Terminal Cruzeiros',
    distance: 'Centro',
    detail: 'integrado'
  },
  {
    icon: <CityIcon />,
    title: 'Balneário Camboriú',
    distance: '15 km',
    detail: '18 min'
  },
  {
    icon: <SignpostIcon />,
    title: 'Florianópolis',
    distance: '70 km',
    detail: '50 min'
  },
  {
    icon: <ShoppingIcon />,
    title: 'Hard Rock Café',
    distance: 'Em breve',
    detail: 'sobre o pier'
  },
  {
    icon: <SignpostIcon />,
    title: 'Acesso BR-101',
    distance: '5 min',
    detail: 'rodovia'
  },
  {
    icon: <WaveIcon />,
    title: '10 praias',
    distance: '15 km',
    detail: 'de costa'
  }
]

const beaches = ['Perequê', 'Porto Belo', 'Baixio', 'Araçá', 'Caixa d\'Aço', 'Estaleiro', 'Jet', 'Araújo', 'Vieiras', 'Ilha de Porto Belo']

export function RegionIcons() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  }

  return (
    <section className="w-full bg-off-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionLabel>Localização Privilegiada</SectionLabel>
          <h2 className="font-display font-normal text-4xl md:text-5xl text-navy-900 mt-4">
            Tudo ao seu alcance.
          </h2>
        </motion.div>

        {/* Location Icons Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {locationData.map((location, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }
              }}
            >
              <LocationIcon
                icon={location.icon}
                title={location.title}
                distance={location.distance}
                detail={location.detail}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Beach Marquee */}
        <motion.div
          className="overflow-hidden bg-white/50 backdrop-blur-sm rounded-lg py-8 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="relative">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white/50 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white/50 to-transparent z-10" />

            {/* Marquee Content */}
            <motion.div
              className="flex gap-8 whitespace-nowrap"
              animate={{ x: [0, -2000] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear'
              }}
            >
              {/* First iteration */}
              {beaches.map((beach, index) => (
                <span
                  key={`1-${index}`}
                  className="font-display font-normal text-2xl text-stone-400 flex-shrink-0"
                >
                  {beach}
                  {index < beaches.length - 1 && <span className="ml-8">·</span>}
                </span>
              ))}

              {/* Second iteration for seamless loop */}
              {beaches.map((beach, index) => (
                <span
                  key={`2-${index}`}
                  className="font-display font-normal text-2xl text-stone-400 flex-shrink-0"
                >
                  {beach}
                  {index < beaches.length - 1 && <span className="ml-8">·</span>}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Info Text */}
        <motion.p
          className="text-center font-body font-normal text-stone-600 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          10 praias em 15km de costa · Infraestrutura completa · Desenvolvimento contínuo
        </motion.p>
      </div>
    </section>
  )
}
