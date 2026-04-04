'use client'

import { motion } from 'framer-motion'

interface PropertySpecsProps {
  specs: Record<string, string>
}

export function PropertySpecs({ specs }: PropertySpecsProps) {
  const specItems = Object.entries(specs)

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
    >
      {specItems.map(([label, value], index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="flex flex-col gap-3 pb-6 border-b border-stone-200"
        >
          <p className="font-body font-normal text-xs uppercase tracking-wider text-stone-500">
            {label}
          </p>
          <p className="font-body font-medium text-lg md:text-xl text-navy-900">
            {value}
          </p>
        </motion.div>
      ))}
    </motion.div>
  )
}
