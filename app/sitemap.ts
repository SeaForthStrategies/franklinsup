import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://franklinforsupervisor.com'
  
  // Static routes
  const routes = [
    '',
    '/about',
    '/contact',
    '/district-5',
    '/issues',
    '/endorsements',
    '/news',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
