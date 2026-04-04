interface ProductSchemaProps {
  name: string
  description: string
  image: string
  url: string
  address: string
  investmentMin: string
  construtora: string
  status: string
}

export function ProductSchema({
  name,
  description,
  image,
  url,
  address,
  investmentMin,
  construtora,
  status,
}: ProductSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: name,
    description: description,
    url: url,
    image: image,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address,
      addressLocality: 'Porto Belo',
      addressRegion: 'SC',
      postalCode: '',
      addressCountry: 'BR',
    },
    agent: {
      '@type': 'RealEstateAgent',
      name: 'Vision Estates',
      url: 'https://visionestates.com',
    },
    availability: status,
    priceRange: investmentMin,
    developer: {
      '@type': 'Organization',
      name: construtora,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
