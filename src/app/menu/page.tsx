import { DietaryGuide } from '@/components/DietaryGuide';
import type { Metadata } from 'next';
import { MenuBrowser } from '@/components/MenuBrowser';
import { ReservationCTA } from '@/components/Sections';
export const metadata: Metadata = {
  title: { absolute: 'Ember & Oak Menu | Burgers, Steaks, Pizza & More' },
  description:
    'Browse 75 thoughtfully crafted dishes. Discover signature burgers, oak-fired steaks, wood-fired pizzas, seafood, fresh salads and zero-proof drinks.',
};
export default function MenuPage() {
  return (
    <>
      <header className="page-header container">
        <span className="eyebrow">
          <span /> From our kitchen, with love
        </span>
        <h1>
          Made with fire.
          <br />
          Served with <em>passion.</em>
        </h1>
        <p>A little comfort. A little adventure. Find exactly what you’re craving.</p>
      </header>
      <section className="container full-menu" aria-label="Our menu">
        <MenuBrowser />
      </section>
      <DietaryGuide />
      <ReservationCTA />
    </>
  );
}
