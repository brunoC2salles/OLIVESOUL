import { Metadata } from 'next'
import { PortoBeloHero } from '@/components/sections/PortoBeloHero'
import { PortoBeloMetrics } from '@/components/sections/PortoBeloMetrics'
import { PortoBeloProjects } from '@/components/sections/PortoBeloProjects'
import { PortoBeloLocation } from '@/components/sections/PortoBeloLocation'
import { PortoBeloBeaches } from '@/components/sections/PortoBeloBeaches'
import { PortoBeloInvestment } from '@/components/sections/PortoBeloInvestment'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Porto Belo SC | Conheça a região | Vision Estates',
    description: 'Descubra Porto Belo, a cidade litorânea que mais cresce no Brasil. 10 praias, R$3,8bi em desenvolvimento e oportunidades de investimento premium.',
    openGraph: {
      title: 'Porto Belo SC | Vision Estates',
      description: 'Descubra Porto Belo, a cidade litorânea que mais cresce no Brasil.',
      type: 'website',
    },
    alternates: {
      languages: {
        'pt': '/pt/porto-belo',
        'en': '/en/porto-belo',
        'es': '/es/porto-belo',
      },
    },
  }
}

export default async function PortoBeloPage({
  params,
}: Props) {
  const { locale } = await params

  return (
    <main className="w-full overflow-hidden">
      <PortoBeloHero />
      <PortoBeloMetrics />
      <PortoBeloProjects />
      <PortoBeloLocation />
      <PortoBeloBeaches />
      <PortoBeloInvestment locale={locale} />
    </main>
  )
}
