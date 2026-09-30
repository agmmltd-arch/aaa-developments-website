import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: {
    default: 'AAA Developments | Roofing, Plastering & Rendering in Padiham',
    template: '%s | AAA Developments',
  },
  description:
    'Speak to Kelvin at AAA Developments for roofing, plastering, rendering and jetwashing in Padiham, Burnley, Accrington, Blackburn, Nelson and Colne.',
  icons: { icon: '/favicon.svg' },
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
