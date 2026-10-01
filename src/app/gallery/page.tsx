import { GalleryGuide } from '@/components/GalleryGuide';
import type { Metadata } from 'next';
import { GallerySection, ReservationCTA } from '@/components/Sections';
export const metadata: Metadata = {
  title: 'The Gallery',
  description:
    'A look around the Ember & Oak table: food from the fire, carefully crafted drinks, and a warm neighborhood atmosphere.',
};
export default function Gallery() {
  return (
    <>
      <header className="page-header container">
        <span className="eyebrow">
          <span /> A glimpse inside
        </span>
        <h1>
          Food. Fire.
          <br />
          <em>Feeling.</em>
        </h1>
        <p>The details that make a meal a memory. Take a look around.</p>
      </header>
      <GallerySection full />
      <GalleryGuide />
      <ReservationCTA />
    </>
  );
}
