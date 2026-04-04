'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { GrainOverlay } from '@/components/ui/GrainOverlay'

const partners = [
  {
    name: 'Vokkan Empreendimentos',
    url: 'https://vokkan.com.br',
    label: 'Ver empreendimentos'
  },
  {
    name: 'PH Empreendimentos',
    url: '#',
    label: 'Ver empreendimentos'
  },
  {
    name: 'Thozen Construtora',
    url: 'https://thozen.com.br',
    label: 'Ver empreendimentos'
  },
  {
    name: 'A.S. Ramos Empreendimentos',
    url: '#',
    label: 'Ver empreendimentos'
  }
]

export function Footer() {
  const t = useTranslations()

  const navLinks = [
    { label: t('nav.properties'), href: '#properties' },
    { label: 'Porto Belo', href: '/porto-belo' },
    { label: t('nav.invest'), href: '#invest' },
    { label: t('nav.contact'), href: '#contact' }
  ]

  return (
    <footer className="bg-navy-900 text-white relative overflow-hidden">
      <GrainOverlay />
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1: Logo & Tagline */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-lg font-light tracking-[0.25em]">
              VISION ESTATES
            </h3>
            <p className="text-gold-400 font-body text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
            <p className="text-stone-400 font-body text-xs leading-relaxed">
              Av. Governador Celso Ramos<br />
              Porto Belo · Santa Catarina<br />
              Brasil
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-gold-500">
              Navegação
            </h4>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white font-body text-sm hover:text-gold-400 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Column 3: Partners */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-gold-500">
              Parceiros
            </h4>
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar site de ${partner.name}`}
                className="flex flex-col gap-1 hover:opacity-80 transition-opacity duration-200"
              >
                <span className="text-gold-400 font-body text-sm font-normal">
                  {partner.name}
                </span>
                <span className="text-stone-400 font-body text-xs">
                  {partner.label}
                </span>
              </a>
            ))}
          </div>

          {/* Column 4: Contact & Social */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-gold-500">
                Contato
              </h4>
              <a
                href="https://wa.me/5547900000000?text=Olá, tenho interesse em imóveis em Porto Belo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fale conosco no WhatsApp"
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <svg
                  className="w-6 h-6 text-gold-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.718.738 5.33 2.14 7.59l-2.275 8.324a.996.996 0 001.239 1.242l8.05-2.611a9.857 9.857 0 004.594 1.17h.005C19.588 21.875 25 16.379 25 9.774c0-5.383-4.379-9.774-9.777-9.774" />
                </svg>
                <span className="font-body text-sm text-white">
                  +55 47 9 XXXX-XXXX
                </span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex flex-col gap-2">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-gold-500">
                Redes
              </h4>
              <div className="flex gap-4">
                {/* Instagram */}
                <a
                  href="https://instagram.com/visionestatesportobelo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Siga-nos no Instagram"
                  className="hover:text-gold-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/company/vision-estates"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Siga-nos no LinkedIn"
                  className="hover:text-gold-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <GoldDivider />

        <div className="text-center">
          <p className="text-stone-400 font-body text-xs">
            © 2025 Vision Estates. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}
