import type { Metadata } from 'next';
import { DM_Sans, Cormorant_Garamond } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ExperienceProvider } from '@/components/ExperienceProvider';
import './globals.css';
const sans = DM_Sans({ subsets: ['latin'], variable: '--font-body' });
const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
});
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: { default: 'Ember & Oak | Modern Grill & Kitchen', template: '%s | Ember & Oak' },
  description:
    'Discover Ember & Oak, a fictional Austin modern American grill. Explore oak-fired steaks, signature burgers, wood-fired pizza and thoughtfully crafted drinks.',
  openGraph: {
    title: 'Ember & Oak | Fire. Flavor. Crafted.',
    description: 'A modern American kitchen with a little smoke and a whole lot of soul.',
    type: 'website',
    images: [
      { url: '/images/steak.jpg', width: 1600, height: 1067, alt: 'Ember & Oak signature steak' },
    ],
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ExperienceProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </ExperienceProvider>
      </body>
    </html>
  );
}
