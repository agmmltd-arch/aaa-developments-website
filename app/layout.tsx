import type { Metadata } from 'next';
import './globals.css';
import './polish.css';
import {
  bark,
  email,
  google,
  mybuilder,
  phone,
  siteIsLive,
  siteUrl,
  towns,
} from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'AAA Developments | Roofing, Plastering & Rendering in Padiham',
    template: '%s | AAA Developments',
  },
  description:
    'Speak to Kelvin at AAA Developments for roofing, plastering, rendering and jetwashing in Padiham, Burnley, Accrington, Blackburn, Nelson and Colne.',
  icons: { icon: '/favicon.svg' },
  alternates: { canonical: './' },
  robots: {
    index: siteIsLive,
    follow: siteIsLive,
    googleBot: { index: siteIsLive, follow: siteIsLive },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'AAA Developments',
    title: 'AAA Developments | Roofing, Plastering & Rendering',
    description:
      'Roofing, plastering and rendering across Padiham and East Lancashire.',
    images: [
      {
        url: '/images/35-roof-hips-and-chimneys.png',
        width: 1200,
        height: 1200,
        alt: 'Completed tiled roof by AAA Developments',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AAA Developments',
    description:
      'Roofing, plastering and rendering across Padiham and East Lancashire.',
    images: ['/images/35-roof-hips-and-chimneys.png'],
  },
  category: 'Home improvement',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': `${siteUrl}/#business`,
    name: 'AAA Developments',
    url: siteUrl,
    telephone: phone,
    email,
    image: `${siteUrl}/images/35-roof-hips-and-chimneys.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '54 Ingham Street',
      addressLocality: 'Padiham',
      postalCode: 'BB12 8DR',
      addressCountry: 'GB',
    },
    areaServed: towns.map((name) => ({ '@type': 'City', name })),
    serviceType: [
      'Roof repairs',
      'New roofs',
      'Flat roofing',
      'Plastering',
      'Rendering',
      'Guttering',
      'Jetwashing',
    ],
    sameAs: [google, mybuilder, bark],
  };

  return (
    <html lang="en-GB">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
      </body>
    </html>
  );
}
