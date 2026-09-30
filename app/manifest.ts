import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AAA Developments',
    short_name: 'AAA Developments',
    description:
      'Roofing, plastering and rendering across Padiham and East Lancashire.',
    start_url: '/',
    display: 'standalone',
    background_color: '#091a2d',
    theme_color: '#091a2d',
    icons: [{ src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}
