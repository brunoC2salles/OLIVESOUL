import { MetadataRoute } from 'next'

const BASE_URL = 'https://visionestates.com'
const LOCALES = ['pt', 'en', 'es']
const PRODUCTS = ['dubai-mall', 'electra-towers', 'viva-park', 'lagom-pereque']

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Home pages for all locales
  const homePages = LOCALES.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  }))

  // Product pages for all locales and all products
  const productPages = LOCALES.flatMap((locale) =>
    PRODUCTS.map((slug) => ({
      url: `${BASE_URL}/${locale}/imoveis/${slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    }))
  )

  // Porto Belo region page for all locales
  const regionPages = LOCALES.map((locale) => ({
    url: `${BASE_URL}/${locale}/porto-belo`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...homePages, ...productPages, ...regionPages]
}
