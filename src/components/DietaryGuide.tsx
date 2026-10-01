import { SectionHeading } from './Sections';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function DietaryGuide() {
  return (
    <section
      id="dietary-guide"
      className="section guest-section"
      aria-labelledby="dietary-guide-title"
    >
      <div className="container">
        <div id="dietary-guide-title">
          <SectionHeading eyebrow="Find food that fits" title="A little help choosing." />
          <div className="guest-cards">
            <article className="guest-card">
              <h3>Explore vegetarian.</h3>
              <p>
                Use the vegetarian filter above to narrow the menu, then choose a category or search
                for an ingredient.
              </p>
            </article>
            <article className="guest-card">
              <h3>Look a little closer.</h3>
              <p>
                Each dish page includes ingredients, dietary labels, and a heat level to help you
                explore the menu.
              </p>
            </article>
            <article className="guest-card">
              <h3>Ask about allergies.</h3>
              <p>
                Menu labels are illustrative and do not guarantee allergen safety. For a real
                restaurant visit, confirm ingredients and preparation with the team.
              </p>
              <Link href="/contact" className="text-link">
                Explore the contact form <ArrowUpRight size={18} />
              </Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
