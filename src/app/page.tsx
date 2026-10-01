import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ArrowDown, Flame, MapPin, Star } from 'lucide-react';
import { FoodImage } from '@/components/FoodImage';
import { MenuCard } from '@/components/MenuCard';
import { MenuBrowser } from '@/components/MenuBrowser';
import { ReserveButton } from '@/components/ExperienceProvider';
import { OpeningStatus } from '@/components/OpeningStatus';
import {
  SectionHeading,
  StorySection,
  Values,
  GallerySection,
  Testimonials,
  ReservationCTA,
} from '@/components/Sections';
import { images } from '@/data/images';
import { featuredItems } from '@/data/menu';
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-image">
          <FoodImage
            src={images.steak}
            alt="Beautifully seared steak with fresh herbs, straight from the oak-fired grill"
            sizes="100vw"
            priority
          />
        </div>
        <div className="hero-shade" />
        <div className="container hero-content">
          <span className="eyebrow">
            <span /> Welcome to Ember & Oak
          </span>
          <h1>
            Where fire
            <br />
            meets <em>flavor.</em>
          </h1>
          <p>
            Honest ingredients. Open flames. Unforgettable food.
            <br className="desktop-break" /> A modern American kitchen with a little smoke
            <br className="desktop-break" /> and a whole lot of soul.
          </p>
          <div className="hero-buttons">
            <Link href="/menu" className="button">
              Explore Our Menu <ArrowUpRight size={18} />
            </Link>
            <ReserveButton className="button hero-secondary">
              Reserve a Table <ArrowRight size={17} />
            </ReserveButton>
          </div>
          <OpeningStatus />
        </div>
        <div className="hero-side-note">WOOD-FIRED. SOUL-FED. AUSTIN, TEXAS.</div>
        <div className="container hero-bottom">
          <span>
            <MapPin size={14} /> Rooted in Austin, Texas
          </span>
          <a href="#favorites">
            A taste of what’s to come <ArrowDown size={15} />
          </a>
          <span className="hero-rating">
            <Star size={13} fill="currentColor" /> Crafted with care, served with heart
          </span>
        </div>
      </section>
      <div className="brand-strip">
        <div>
          <span>FIRE. FLAVOR. CRAFTED.</span>
          <Flame size={16} />
          <span>GOOD FOOD. GOOD COMPANY.</span>
          <Flame size={16} />
          <span>YOUR NEW FAVORITE TABLE.</span>
          <Flame size={16} />
          <span>FIRE. FLAVOR. CRAFTED.</span>
        </div>
      </div>
      <section id="favorites" className="section">
        <div className="container">
          <SectionHeading
            eyebrow="The dishes you come back for"
            title="Signature favorites."
            text="A few house legends. All fired up and ready for you."
            href="/menu"
            linkText="Discover the Menu"
          />
          <div className="menu-grid featured-grid">
            {featuredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
      <StorySection />
      <section className="section menu-preview">
        <div className="container">
          <SectionHeading
            eyebrow="Find your next favorite"
            title="Good food. Your way."
            text="From the first bite to the last sip, there’s something here for you."
          />
          <MenuBrowser preview />
        </div>
      </section>
      <section className="container promo">
        <div className="promo-image">
          <FoodImage
            src={images.burger}
            alt="A smoky double cheeseburger with crisp lettuce and toasted brioche"
            sizes="(max-width: 700px) 100vw, 60vw"
          />
        </div>
        <div className="promo-shade" />
        <div className="promo-content">
          <span className="eyebrow">Make a weekend of it</span>
          <h2>
            The smoked
            <br />
            BBQ feast.
          </h2>
          <p>
            Big flavor. Better together.
            <br />
            Burger + wings + loaded fries + a drink.
          </p>
          <div className="promo-price">
            $24<span>.99</span>
            <small>FRIDAY – SUNDAY</small>
          </div>
          <Link href="/menu/smoked-bbq-feast" className="button">
            Meet Your Weekend <ArrowUpRight size={17} />
          </Link>
        </div>
        <span className="promo-stamp">
          THE WEEKEND
          <br />
          <strong>DONE RIGHT.</strong>
        </span>
      </section>
      <Values />
      <GallerySection />
      <Testimonials />
      <ReservationCTA />
    </>
  );
}
