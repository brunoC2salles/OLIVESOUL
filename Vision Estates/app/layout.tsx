import type { Metadata } from 'next'
import { cormorant, jost, dmMono } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vision Estates | Imóveis de Luxo em Porto Belo, SC',
  description: 'Curadoria exclusiva dos melhores imóveis de alto padrão em Porto Belo — a cidade litorânea que mais cresce no Brasil.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt"
      className={`${cormorant.variable} ${jost.variable} ${dmMono.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  )
}
