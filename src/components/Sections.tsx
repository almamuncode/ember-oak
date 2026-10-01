import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Flame, Leaf, UtensilsCrossed, Heart, Star } from 'lucide-react';
import { FoodImage } from './FoodImage';
import { ReserveButton } from './ExperienceProvider';
import { menuItems } from '@/data/menu';
import { images } from '@/data/images';
import { gallery, testimonials } from '@/data/restaurant';
export function SectionHeading({
  eyebrow,
  title,
  text,
  href,
  linkText = 'Explore more',
}: {
  eyebrow: string;
  title: string;
  text?: string;
  href?: string;
  linkText?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">
          <span /> {eyebrow}
        </span>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
      {href && (
        <Link className="text-link" href={href}>
          {linkText}
          <ArrowUpRight size={18} />
        </Link>
      )}
    </div>
  );
}
export function StorySection() {
  return (
    <section className="section story-section">
      <div className="container story-grid">
        <div className="story-photo">
          <FoodImage
            src={images.chef}
            alt="Chef carefully finishing a dish in the restaurant kitchen"
            sizes="(max-width: 800px) 100vw, 50vw"
          />
          <div className="story-stamp">
            <Flame size={30} />
            <span>
              GOOD FOOD.
              <br />
              REAL FIRE.
            </span>
            <small>EST. 2014 · AUSTIN, TX</small>
          </div>
        </div>
        <div className="story-copy">
          <span className="eyebrow">
            <span /> A little about us
          </span>
          <h2>
            Fire, craft
            <br />& good food.
          </h2>
          <p>
            Some of the best things in life happen around a table. A great meal. A long
            conversation. One more round with your favorite people.
          </p>
          <p>
            That’s what we built Ember & Oak for. Honest ingredients, a wood-fired grill, and a
            kitchen that puts its heart into every plate. Nothing overcomplicated. Just food worth
            coming back for.
          </p>
          <div className="story-stats">
            <div>
              <strong>10+</strong>
              <span>Years of craft</span>
            </div>
            <div>
              <strong>{menuItems.length}</strong>
              <span>Menu favorites</span>
            </div>
            <div>
              <Leaf size={30} />
              <span>Local at heart</span>
            </div>
          </div>
          <Link href="/about" className="text-link">
            Discover Our Story <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
export function Values() {
  return (
    <section className="values-section">
      <div className="container values-grid">
        {[
          {
            Icon: Leaf,
            title: 'Fresh comes first.',
            text: 'Good food starts with honest, thoughtfully sourced ingredients.',
          },
          {
            Icon: Flame,
            title: 'A little fire. A lot of flavor.',
            text: 'Real oak, open flames, and the patience to get it just right.',
          },
          {
            Icon: UtensilsCrossed,
            title: 'Made for your moment.',
            text: 'Every plate made to order. Every detail made to matter.',
          },
          {
            Icon: Heart,
            title: 'Your neighborhood table.',
            text: 'Familiar faces, warm welcomes, and a seat for everyone.',
          },
        ].map(({ Icon, title, text }) => (
          <div className="value" key={title}>
            <Icon size={27} strokeWidth={1.3} />
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export function GallerySection({ full = false }: { full?: boolean }) {
  return (
    <section className={full ? 'section gallery-page' : 'section'}>
      <div className="container">
        {!full && (
          <SectionHeading
            eyebrow="A taste of the atmosphere"
            title="More than a meal."
            href="/gallery"
            linkText="Step Inside"
          />
        )}
        <div className={`gallery-grid ${full ? 'full-gallery' : ''}`}>
          {gallery.slice(0, full ? 8 : 4).map((item, index) => (
            <figure key={item.label} className={`gallery-image gallery-${index}`}>
              <FoodImage
                src={item.image}
                alt={item.label}
                sizes="(max-width: 600px) 90vw, (max-width: 900px) 50vw, 33vw"
              />
              <figcaption>
                <span className="eyebrow small">{item.category}</span>
                <h3>{item.label}</h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Testimonials() {
  return (
    <section className="section reviews-section">
      <div className="container">
        <SectionHeading eyebrow="Good food. Great company." title="Word around the table." />
        <div className="reviews-grid">
          {testimonials.map((review) => (
            <figure className="review" key={review.name}>
              <div className="stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} size={14} fill="currentColor" />
                ))}
              </div>
              <blockquote>“{review.quote}”</blockquote>
              <figcaption>
                <span className="review-avatar">{review.name[0]}</span>
                <span>
                  <strong>{review.name}</strong>
                  <small>{review.detail}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="micro reviews-disclosure">
          Illustrative guest stories for our fictional restaurant.
        </p>
      </div>
    </section>
  );
}
export function ReservationCTA() {
  return (
    <section className="reservation-section">
      <div className="reservation-grain" />
      <div className="container reservation-inner">
        <div>
          <span className="eyebrow">Pull up a chair</span>
          <h2>A table is waiting.</h2>
          <p>
            For the big celebrations. For the just-because evenings.
            <br />
            Make yourself at home at Ember & Oak.
          </p>
        </div>
        <ReserveButton>
          Reserve a Table <ArrowUpRight size={18} />
        </ReserveButton>
        <Flame className="reservation-flame" strokeWidth={0.6} />
      </div>
    </section>
  );
}
