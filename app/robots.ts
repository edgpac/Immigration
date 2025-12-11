import { MetadataRoute } from 'next'

// ✅ NEW FILE: Dynamic robots.txt for better SEO
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.loscabosimmigration.com'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/_next/',
        '/admin/',
        '/*.json$',
        '/private/',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
