export function RealEstateAgentSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Vision Estates',
    url: 'https://visionestates.com',
    logo: 'https://visionestates.com/logo.png',
    image: 'https://visionestates.com/og-image.jpg',
    description: 'Curadoria exclusiva dos melhores imóveis de alto padrão em Porto Belo — a cidade litorânea que mais cresce no Brasil.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Porto Belo',
      addressLocality: 'Porto Belo',
      addressRegion: 'SC',
      postalCode: '',
      addressCountry: 'BR',
    },
    telephone: '+5547900000000',
    email: 'contato@visionestates.com',
    priceRange: '$$$$',
    knowsLanguage: ['pt-BR', 'en', 'es'],
    areaServed: {
      '@type': 'City',
      name: 'Porto Belo',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
