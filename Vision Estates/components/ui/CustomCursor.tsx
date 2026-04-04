'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface CursorState {
  x: number
  y: number
  isHoveringLink: boolean
  isHoveringImage: boolean
}

export function CustomCursor() {
  const [isMobile, setIsMobile] = useState(true)
  const [cursor, setCursor] = useState<CursorState>({
    x: 0,
    y: 0,
    isHoveringLink: false,
    isHoveringImage: false
  })
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check if mobile
    setIsMobile(window.innerWidth < 768)

    const handleMouseMove = (e: MouseEvent) => {
      setCursor((prev) => ({
        ...prev,
        x: e.clientX,
        y: e.clientY
      }))
    }

    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement
      const isLink = target.tagName === 'A' || target.closest('a') !== null
      const isImage = target.tagName === 'IMG' || target.closest('[data-cursor-image]') !== null
      const isButton =
        target.tagName === 'BUTTON' || target.closest('button') !== null

      setCursor((prev) => ({
        ...prev,
        isHoveringLink: isLink || isButton,
        isHoveringImage: isImage
      }))
    }

    const handleMouseOut = () => {
      setCursor((prev) => ({
        ...prev,
        isHoveringLink: false,
        isHoveringImage: false
      }))
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  if (isMobile) return null

  return (
    <motion.div
      ref={cursorRef}
      className="pointer-events-none fixed z-[9999] flex items-center justify-center"
      animate={{
        x: cursor.x - 20,
        y: cursor.y - 20,
        width: cursor.isHoveringLink || cursor.isHoveringImage ? 60 : 40,
        height: cursor.isHoveringLink || cursor.isHoveringImage ? 60 : 40
      }}
      transition={{
        type: 'spring',
        damping: 25,
        stiffness: 300,
        mass: 0.5
      }}
    >
      <div
        className={`absolute inset-0 rounded-full border border-gold-400 transition-all duration-200 ${
          cursor.isHoveringLink ? 'bg-gold-400/10' : 'bg-transparent'
        }`}
      />
      {cursor.isHoveringImage && (
        <span className="text-xs font-bold text-navy-900">VER</span>
      )}
    </motion.div>
  )
}
