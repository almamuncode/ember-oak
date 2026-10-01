import { SectionHeading } from './Sections';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function PrivateDining() {
  return (
    <section
      id="private-dining"
      className="section guest-section"
      aria-labelledby="private-dining-title"
    >
      <div className="container">
        <div id="private-dining-title">
          <SectionHeading
            eyebrow="Bring your people"
            title="Make room for a celebration."
            text="A birthday dinner, a team evening, or simply a reason to gather."
          />
          <div className="guest-cards">
            {[
              {
                title: 'Milestone moments',
                text: 'Start with your occasion, preferred date, and guest count.',
              },
              {
                title: 'Around one table',
                text: 'Share the dishes your group enjoys and any dietary considerations.',
              },
              {
                title: 'A thoughtful plan',
                text: 'Explore a gathering with our demo contact form. Event requests are illustrative and do not create a booking.',
              },
            ].map((item) => (
              <article className="guest-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <Link href="/contact#group-planning" className="text-link">
            Plan a gathering <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
