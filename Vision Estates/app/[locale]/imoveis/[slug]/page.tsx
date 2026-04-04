import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { properties } from '@/lib/properties'
import { ProductSchema } from '@/components/schema/ProductSchema'
import { ImageCarousel } from '@/components/property/ImageCarousel'
import { PropertySpecs } from '@/components/property/PropertySpecs'
import { PropertyFeatures } from '@/components/property/PropertyFeatures'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { LocationIcon } from '@/components/ui/LocationIcon'
import { ProductCard } from '@/components/property/ProductCard'
import {
  AirplaneIcon,
  BeachIcon,
  GolfIcon,
  ShipIcon,
  CityIcon,
  SignpostIcon,
  ShoppingIcon,
  WaveIcon
} from '@/components/ui/LocationIcon'

interface Props {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
    locale: 'pt'
  }))
}

export const generateMetadata = async ({ params }: Props) => {
  const { slug, locale } = await params
  const property = properties.find((p) => p.slug === slug)
  if (!property) return {}

  return {
    title: `${property.name} | Vision Estates`,
    description: property.diferencial,
    alternates: {
      languages: {
        'pt': `/pt/imoveis/${slug}`,
        'en': `/en/imoveis/${slug}`,
        'es': `/es/imoveis/${slug}`,
      },
    },
    openGraph: {
      title: property.name,
      description: property.diferencial,
      images: [
        {
          url: property.image,
          width: 1200,
          height: 630,
          alt: property.name
        }
      ]
    }
  }
}

const locationData = [
  { icon: <AirplaneIcon />, title: 'Aeroporto FLN', distance: '60 km', detail: '~45 min' },
  { icon: <BeachIcon />, title: 'Praia Perequê', distance: '5 min', detail: 'a pé' },
  { icon: <GolfIcon />, title: 'Campo de Golf', distance: '8 km', detail: '10 min' },
  { icon: <ShipIcon />, title: 'Terminal Cruzeiros', distance: 'Centro', detail: 'integrado' },
  { icon: <CityIcon />, title: 'Balneário Camboriú', distance: '15 km', detail: '18 min' },
  { icon: <SignpostIcon />, title: 'Florianópolis', distance: '70 km', detail: '50 min' },
  { icon: <ShoppingIcon />, title: 'Hard Rock Café', distance: 'Em breve', detail: 'sobre o pier' },
  { icon: <WaveIcon />, title: '10 praias', distance: '15 km', detail: 'de costa' }
]

const featuresBySlug: Record<string, Array<{ icon: React.ReactNode; title: string; description: string }>> = {
  'dubai-mall': [
    {
      icon: <svg className="w-6 h-6 text-navy-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>,
      title: 'Shopping Integrado',
      description: 'Dubai Mall com 2 andares, boulevard e comércios exclusivos'
    },
    {
      icon: <svg className="w-6 h-6 text-navy-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>,
      title: 'Arquitetura Dubai',
      description: 'Inspirado na arquitetura de luxo com acabamentos premium'
    },
    {
      icon: <svg className="w-6 h-6 text-navy-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>,
      title: '6 Torres',
      description: 'Diversas tipologias no mesmo complexo residencial'
    }
  ],
  'electra-towers': [
    {
      icon: <svg className="w-6 h-6 text-navy-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>,
      title: 'IA Integrada',
      description: '1º empreendimento do Brasil com IA integrada'
    },
    {
      icon: <svg className="w-6 h-6 text-navy-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>,
      title: 'Serviços 24h',
      description: 'Mercado, cafeteria e robô delivery automatizado'
    },
    {
      icon: <svg className="w-6 h-6 text-navy-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>,
      title: 'Sacadas Gourmet',
      description: 'Sacada com churrasqueira e 2 vagas de garagem'
    }
  ],
  'viva-park': [
    {
      icon: <svg className="w-6 h-6 text-navy-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>,
      title: 'LEED Platinum',
      description: '1º bairro parque com certificação LEED'
    },
    {
      icon: <svg className="w-6 h-6 text-navy-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>,
      title: 'Jaime Lerner',
      description: 'Projeto do arquiteto renomado com 1,4 mi m²'
    },
    {
      icon: <svg className="w-6 h-6 text-navy-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>,
      title: 'Colégio',
      description: 'Colégio Bom Jesus integrado ao bairro'
    }
  ],
  'lagom-pereque': [
    {
      icon: <svg className="w-6 h-6 text-navy-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>,
      title: 'Parque Natural',
      description: 'Dentro da Lagoa do Perequê com preservação'
    },
    {
      icon: <svg className="w-6 h-6 text-navy-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>,
      title: 'Beach Point',
      description: 'Acesso direto à Lagoa e praia privativa'
    },
    {
      icon: <svg className="w-6 h-6 text-navy-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>,
      title: 'Filosofia Lagom',
      description: '75% de áreas de lazer e bem-estar'
    }
  ]
}

export default async function PropertyPage({ params }: Props) {
  const { slug, locale } = await params
  const property = properties.find((p) => p.slug === slug)

  if (!property) {
    notFound()
  }

  const generalImages = [property.image, '/images/porto-belo/aerial.svg', '/images/porto-belo/aerial.svg']
  const privateImages = ['/images/porto-belo/aerial.svg', '/images/porto-belo/aerial.svg']

  const specs: Record<string, string> = {
    Torres: property.torres ? `${property.torres}` : 'N/A',
    Andares: property.andares ? `${property.andares}` : 'N/A',
    Unidades: property.unidades ? `${property.unidades}` : 'N/A',
    Tipologias: property.tipologias,
    Lazer: property.lazer,
    Endereço: property.endereço
  }

  const features = featuresBySlug[property.slug] || []
  const otherProperties = properties.filter((p) => p.slug !== property.slug).slice(0, 3)

  return (
    <>
      <ProductSchema
        name={property.name}
        description={property.diferencial}
        image={property.image}
        url={`https://visionestates.com/${locale}/imoveis/${slug}`}
        address={property.endereço}
        investmentMin={property.investimento_min}
        construtora={property.construtora}
        status={property.status}
      />
      <main className="w-full">
      <section className="relative w-full bg-navy-900 overflow-hidden" style={{ height: '100vh' }}>
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover"
          quality={100}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/40 to-navy-900/70" />

        <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="mb-6 flex gap-3 justify-center flex-wrap">
              <span className="bg-gold-400/20 border border-gold-400/50 text-gold-400 px-4 py-2 font-mono text-xs uppercase tracking-wider rounded-full">
                {property.status}
              </span>
              <span className="bg-gold-400/20 border border-gold-400/50 text-gold-400 px-4 py-2 font-mono text-xs uppercase tracking-wider rounded-full">
                {property.construtora}
              </span>
            </div>

            <h1 className="font-display font-light text-5xl md:text-7xl text-white mb-6 leading-tight">
              {property.name}
            </h1>

            <p className="font-body font-normal text-lg text-stone-200 mb-8">
              {property.diferencial}
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="#contact"
                className="px-8 py-4 bg-gold-400 text-navy-900 font-body font-medium hover:bg-gold-300 transition-all duration-300"
              >
                Tenho interesse
              </Link>
              <a
                href={`https://wa.me/5547900000000?text=Tenho interesse no ${property.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-white/50 text-white font-body font-medium hover:border-gold-400 hover:text-gold-400 transition-all duration-300"
              >
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <SectionLabel>O Empreendimento</SectionLabel>
            <h2 className="font-display font-normal text-4xl md:text-5xl text-navy-900 mt-4">
              Galeria do Projeto
            </h2>
          </motion.div>

          <ImageCarousel images={generalImages} title={property.name} />
        </div>
      </section>

      <section className="w-full bg-off-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <SectionLabel>Especificações</SectionLabel>
            <h2 className="font-display font-normal text-4xl md:text-5xl text-navy-900 mt-4">
              Dados Técnicos
            </h2>
          </motion.div>

          <PropertySpecs specs={specs} />

          <div className="mt-16">
            <GoldDivider />
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <SectionLabel>Espaços Privativos</SectionLabel>
            <h2 className="font-display font-normal text-4xl md:text-5xl text-navy-900 mt-4">
              Interiores e Acabamentos
            </h2>
          </motion.div>

          <ImageCarousel images={privateImages} title={`${property.name} - Interiores`} />
        </div>
      </section>

      {features.length > 0 && (
        <section className="w-full bg-off-white py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-16"
            >
              <SectionLabel>Diferenciais</SectionLabel>
              <h2 className="font-display font-normal text-4xl md:text-5xl text-navy-900 mt-4">
                O que nos Diferencia
              </h2>
            </motion.div>

            <PropertyFeatures features={features} />

            <div className="mt-16">
              <GoldDivider />
            </div>
          </div>
        </section>
      )}

      <section className="w-full bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <SectionLabel>Localização</SectionLabel>
            <h2 className="font-display font-normal text-4xl md:text-5xl text-navy-900 mt-4">
              Distâncias Estratégicas
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
          >
            {locationData.map((loc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <LocationIcon
                  icon={loc.icon}
                  title={loc.title}
                  distance={loc.distance}
                  detail={loc.detail}
                />
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-off-white p-8 rounded-lg"
            >
              <p className="font-body font-normal text-base text-navy-900 mb-3">
                <span className="font-medium">Endereço:</span> {property.endereço}
              </p>
              <p className="font-body font-normal text-base text-navy-900">
                <span className="font-medium">Distância da praia:</span> {property.distancia_praia}
              </p>
            </motion.div>
          </div>

          <div className="mt-16">
            <GoldDivider />
          </div>
        </div>
      </section>

      <section className="w-full bg-navy-900 py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display font-light text-5xl md:text-6xl text-white mb-8 leading-tight">
              Pronto para investir?
            </h2>

            <p className="font-body font-normal text-lg text-stone-200 mb-12">
              Somos especialistas em ajudar investidores a encontrar os melhores ativos em Porto Belo.
            </p>

            <div className="flex gap-6 justify-center flex-wrap">
              <a
                href={`https://wa.me/5547900000000?text=Tenho interesse em mais informações sobre ${property.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-gold-400 text-navy-900 font-body font-medium hover:bg-gold-300 transition-all duration-300"
              >
                WhatsApp
              </a>
              <Link
                href="/#contact"
                className="px-10 py-4 border border-white/50 text-white font-body font-medium hover:border-gold-400 hover:text-gold-400 transition-all duration-300"
              >
                Formulário de Contato
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <h2 className="font-display font-normal text-4xl md:text-5xl text-navy-900">
              Você também pode gostar
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
          >
            {otherProperties.map((prop, index) => (
              <motion.div
                key={prop.slug}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.12
                }}
              >
                <ProductCard
                  slug={prop.slug}
                  name={prop.name}
                  developer={prop.construtora}
                  status={prop.status}
                  imageUrl={prop.image}
                  minPrice={prop.investimento_min}
                  bedrooms={prop.torres?.toString() || 'N/A'}
                  area={prop.lazer}
                  tag="Produto"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
    </>
  )
}
