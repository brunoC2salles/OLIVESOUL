'use client'

import { ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { ScrollProgress } from '@/components/ui/ScrollProgress'

interface LocaleLayoutProps {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params

  return (
    <NextIntlClientProvider locale={locale}>
      <LocaleLayoutContent>{children}</LocaleLayoutContent>
    </NextIntlClientProvider>
  )
}

function LocaleLayoutContent({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-navy-900 focus:text-white focus:px-4 focus:py-2"
      >
        Pular para conteúdo principal
      </a>

      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <main id="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="pt-20"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <WhatsAppFloat />
      <Footer />
    </>
  )
}
