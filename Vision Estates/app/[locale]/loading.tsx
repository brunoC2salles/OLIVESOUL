'use client'

import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <motion.div
      className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[99999]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="font-display font-light text-4xl md:text-5xl text-navy-900 mb-8 tracking-wide">
          VISION ESTATES
        </h1>

        <motion.div
          className="h-1 bg-gold-400 mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}
        />
      </motion.div>
    </motion.div>
  )
}
