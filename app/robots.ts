import type { MetadataRoute } from 'next';
import { siteIsLive, siteUrl } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: siteIsLive
      ? { userAgent: '*', allow: '/' }
      : { userAgent: '*', disallow: '/' },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
