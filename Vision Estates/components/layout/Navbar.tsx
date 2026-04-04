'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export function Navbar() {
  const t = useTranslations()
  const tNav = useTranslations('nav')
  const tContact = useTranslations('contact')
  const pathname = usePathname()
  const locale = pathname.split('/')[1]
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentLocale, setCurrentLocale] = useState(locale)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: tNav('properties'), href: `/${currentLocale}/#properties` },
    { label: tNav('portobelo'), href: `/${currentLocale}/porto-belo` },
    { label: tNav('invest'), href: `/${currentLocale}/#invest` },
    { label: tNav('contact'), href: `/${currentLocale}/#contact` }
  ]

  const locales = ['PT', 'EN', 'ES']
  const localeMap: Record<string, string> = { 'PT': 'pt', 'EN': 'en', 'ES': 'es' }

  const handleLocaleChange = (locale: string) => {
    const localeCode = localeMap[locale]
    setCurrentLocale(localeCode)
    const newPath = pathname.replace(/\/(pt|en|es)/, `/${localeCode}`)
    window.location.href = newPath
  }

  return (
    <>
      {/* Desktop + Mobile Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-sm border-b border-stone-200'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${currentLocale}`}
            className="flex flex-col gap-1"
            aria-label="Vision Estates - Página inicial"
          >
            <h1 className="font-display text-lg font-light tracking-[0.25em] text-navy-900">
              {t('brand')}
            </h1>
            <p className="font-mono text-[10px] text-gold-500">
              {t('location')}
            </p>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-[13px] font-normal text-navy-800 hover:text-gold-400 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}

            {/* Language Selector */}
            <div className="flex items-center gap-2">
              {locales.map((loc, index) => (
                <div key={loc}>
                  <button
                    onClick={() => handleLocaleChange(loc)}
                    aria-label={`Selecionar ${loc === 'PT' ? 'português' : loc === 'EN' ? 'inglês' : 'espanhol'}`}
                    className={`text-[12px] font-body font-normal transition-colors duration-200 ${
                      currentLocale === localeMap[loc]
                        ? 'text-gold-400'
                        : 'text-gold-300 hover:text-gold-400'
                    }`}
                  >
                    {loc}
                  </button>
                  {index < locales.length - 1 && (
                    <span className="text-gold-300 mx-2">|</span>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href={`https://wa.me/5547900000000?text=${encodeURIComponent(tContact('whatsapp_message'))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-navy-900 text-navy-900 font-body text-[13px] font-normal hover:bg-navy-900 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {tNav('contact')}
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-navy-900"
            aria-label="Menu de navegação"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-0 left-0 right-0 bottom-0 z-30 bg-navy-900 pt-20 px-6"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white font-body text-lg font-normal hover:text-gold-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-6 border-t border-gold-300 flex gap-3">
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => {
                    handleLocaleChange(loc)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`px-3 py-1 text-sm font-body transition-colors ${
                    currentLocale === localeMap[loc]
                      ? 'bg-gold-400 text-navy-900'
                      : 'border border-gold-300 text-gold-300'
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>

            <motion.a
              href={`https://wa.me/5547900000000?text=${encodeURIComponent(tContact('whatsapp_message'))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-3 bg-gold-400 text-navy-900 font-body text-center font-normal"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {tNav('contact')}
            </motion.a>
          </div>
        </motion.div>
      )}
    </>
  )
}
