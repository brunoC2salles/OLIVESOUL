import { Metadata } from 'next'
import { RealEstateAgentSchema } from '@/components/schema/RealEstateAgentSchema'
import { Hero } from '@/components/sections/Hero'
import { Metrics } from '@/components/sections/Metrics'
import { Products } from '@/components/sections/Products'
import { RegionHero } from '@/components/sections/RegionHero'
import { RegionIcons } from '@/components/sections/RegionIcons'
import { Investment } from '@/components/sections/Investment'
import { Hospitality } from '@/components/sections/Hospitality'
import { Partners } from '@/components/sections/Partners'
import { Contact } from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Vision Estates | Imóveis de Luxo em Porto Belo, SC',
  description: 'Curadoria exclusiva dos melhores imóveis de alto padrão em Porto Belo — a cidade litorânea que mais cresce no Brasil.',
  alternates: {
    languages: {
      'pt': '/pt',
      'en': '/en',
      'es': '/es',
    },
  },
}

export default function Home() {
  return (
    <>
      <RealEstateAgentSchema />
      <main>
        <Hero />
        <Metrics />
        <Products />
        <RegionHero />
        <RegionIcons />
        <Investment />
        <Hospitality />
        <Partners />
        <Contact />
      </main>
    </>
  )
}
