import { SectionHeading } from './Sections';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Hours } from './Footer';
import { ReserveButton } from './ExperienceProvider';

export function VisitSection() {
  return (
    <section
      id="plan-your-visit"
      className="section guest-section"
      aria-labelledby="plan-your-visit-title"
    >
      <div className="container">
        <div id="plan-your-visit-title">
          <SectionHeading
            eyebrow="Your next evening out"
            title="Plan your visit."
            text="Find a time for good food and good company."
          />
          <div className="guest-split">
            <div>
              <h3>At your table</h3>
              <Hours />
              <ReserveButton />
            </div>
            <div className="guest-card">
              <h3>Rooted in Austin.</h3>
              <p>
                123 Market Street
                <br />
                Austin, TX 78701
              </p>
              <p>
                Our restaurant and address are fictional. Explore the contact page for the
                illustrative map and demo forms.
              </p>
              <Link href="/contact" className="text-link">
                Location &amp; contact <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
