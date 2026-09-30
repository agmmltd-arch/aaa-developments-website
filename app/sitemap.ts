import type { MetadataRoute } from 'next';
import { guides } from '@/lib/guides';
import { services, siteUrl, towns } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '',
    '/about',
    '/services',
    '/areas',
    '/blog',
    '/contact',
    '/emergency',
    '/privacy',
    '/terms',
    ...services.map((service) => `/services/${service.slug}`),
    ...towns.map((town) => `/areas/${town.toLowerCase()}`),
    ...guides.map((guide) => `/blog/${guide.slug}`),
  ];

  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.startsWith('/services/') ? 0.8 : 0.6,
  }));
}
