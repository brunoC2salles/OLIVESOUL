'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'

interface ProductCardProps {
  name: string
  developer: string
  status: string
  slug: string
  imageUrl: string
  minPrice: string
  bedrooms?: number
  area?: string
  tag: string
}

export function ProductCard({
  name,
  developer,
  status,
  slug,
  imageUrl,
  minPrice,
  bedrooms,
  area,
  tag
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.02 }}
      className="flex-shrink-0 md:flex-shrink bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300"
      style={{ width: '100%', maxWidth: '320px', height: '440px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={`/imoveis/${slug}`}
        aria-label={`Ver detalhes de ${name}`}
        className="h-full flex flex-col relative"
      >
        {/* Image Container - 60% height */}
        <motion.div
          className="relative w-full overflow-hidden"
          style={{ height: '60%' }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 320px"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/20 to-transparent" />

          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <div className="bg-navy-800/80 backdrop-blur-sm px-3 py-1.5 rounded text-gold-400 font-body font-medium text-xs uppercase">
              {status}
            </div>
          </div>
        </motion.div>

        {/* Content Container - 40% height */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          {/* Tag */}
          <div className="mb-2">
            <SectionLabel>{tag}</SectionLabel>
          </div>

          {/* Title */}
          <h3 className="font-display font-semibold text-xl text-navy-900 line-clamp-2 mb-1">
            {name}
          </h3>

          {/* Developer */}
          <p className="font-body font-normal text-sm text-stone-600 mb-4">
            {developer}
          </p>

          {/* Specs Line */}
          <div className="flex items-center gap-4 text-sm text-navy-700 font-body font-normal mb-4">
            {area && (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4m-4 0l5 5m0 0V4m0 0h4" />
                </svg>
                {area}
              </span>
            )}
            {bedrooms && (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 0l-7-4m0 0v10a1 1 0 001 1h12a1 1 0 001-1V5" />
                </svg>
                {bedrooms} suítes
              </span>
            )}
          </div>

          {/* Divider */}
          <div className="w-[60px] h-px bg-gradient-to-r from-gold-400 to-transparent mb-4" />

          {/* CTA */}
          <motion.div
            className="flex items-center gap-2 text-navy-900 font-body font-medium text-sm hover:text-gold-500 transition-colors relative"
            whileHover={{ x: 6 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              animate={{ opacity: isHovered ? 0 : 1, width: isHovered ? 0 : 'auto' }}
              transition={{ duration: 0.3 }}
            >
              Ver empreendimento
            </motion.span>
            <motion.span
              animate={{ opacity: isHovered ? 1 : 0, width: isHovered ? 'auto' : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute"
            >
              {name}
            </motion.span>
            <span>→</span>
          </motion.div>

          {/* Bottom Hover Line */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-gold-400"
            animate={{
              width: isHovered ? '100%' : '0%'
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </Link>
    </motion.div>
  )
}
