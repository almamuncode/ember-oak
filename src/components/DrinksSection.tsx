import { SectionHeading } from './Sections';

export function DrinksSection() {
  return (
    <section
      id="zero-proof-drinks"
      className="section guest-section"
      aria-labelledby="zero-proof-drinks-title"
    >
      <div className="container">
        <div id="zero-proof-drinks-title">
          <SectionHeading
            eyebrow="Something worth sipping"
            title="Good spirits. Zero proof."
            text="Make a little room for a refreshing side of the menu."
            href="/menu"
            linkText="Explore food & drinks"
          />
          <div className="guest-cards">
            <article className="guest-card">
              <h3>Bright &amp; refreshing.</h3>
              <p>Explore fruit-forward drinks alongside your favorite smoky dishes.</p>
            </article>
            <article className="guest-card">
              <h3>A slower moment.</h3>
              <p>Browse the drinks categories for a sip to enjoy while the conversation unfolds.</p>
            </article>
            <article className="guest-card">
              <h3>Finish on a sweet note.</h3>
              <p>Take a look at desserts and drinks together to round out your demo order.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
