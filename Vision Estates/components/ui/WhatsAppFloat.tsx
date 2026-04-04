'use client'

import { motion } from 'framer-motion'

export function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/5547900000000?text=Olá, tenho interesse em imóveis em Porto Belo"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-gold-400 text-navy-900 rounded-full shadow-lg hover:shadow-xl"
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.05 }}
    >
      {/* WhatsApp Icon */}
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.718.738 5.33 2.14 7.59l-2.275 8.324a.996.996 0 001.239 1.242l8.05-2.611a9.857 9.857 0 004.594 1.17h.005C19.588 21.875 25 16.379 25 9.774c0-5.383-4.379-9.774-9.777-9.774" />
      </svg>

      <span className="font-body font-medium text-sm whitespace-nowrap">
        Fale Conosco
      </span>
    </motion.a>
  )
}
