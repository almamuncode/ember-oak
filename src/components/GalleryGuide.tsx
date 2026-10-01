import { SectionHeading } from './Sections';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function GalleryGuide() {
  return (
    <section
      id="behind-the-gallery"
      className="section guest-section"
      aria-labelledby="behind-the-gallery-title"
    >
      <div className="container">
        <div id="behind-the-gallery-title">
          <SectionHeading eyebrow="Look a little closer" title="Every detail tells a story." />
          <div className="guest-cards">
            <article className="guest-card">
              <h3>From the kitchen.</h3>
              <p>Seared edges, fresh herbs, and comfort food inspired by the open fire.</p>
            </article>
            <article className="guest-card">
              <h3>Around the table.</h3>
              <p>
                Warm timber and soft lighting set the mood for our fictional neighborhood
                restaurant.
              </p>
            </article>
            <article className="guest-card">
              <h3>Behind the scenes.</h3>
              <p>
                Sample photography illustrates the atmosphere. Dish images are representative rather
                than photographs of every exact recipe.
              </p>
              <Link href="/about" className="text-link">
                Meet the story <ArrowUpRight size={18} />
              </Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
