import Link from 'next/link';
import { Flame, ArrowUpRight } from 'lucide-react';
export function Hours() {
  return (
    <dl className="hours">
      <div>
        <dt>Monday – Thursday</dt>
        <dd>11 am – 10 pm</dd>
      </div>
      <div>
        <dt>Friday – Saturday</dt>
        <dd>11 am – 11 pm</dd>
      </div>
      <div>
        <dt>Sunday</dt>
        <dd>12 pm – 9 pm</dd>
      </div>
    </dl>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="logo">
            <Flame size={24} />
            <span>
              EMBER <span className="logo-amp">&</span> OAK<small>FIRE. FLAVOR. CRAFTED.</small>
            </span>
          </Link>
          <p>
            Gather around good food.
            <br />
            Stay for the feeling.
          </p>
          <span className="eyebrow small">Rooted in Austin. Fueled by fire.</span>
          <div className="social-links">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram (sample social link)"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r=".75" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook (sample social link)"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M14 22v-9h3l.5-4H14V7c0-1.2.4-2 2-2h2V1.5C17 1.2 16 1 15 1c-3 0-5 2-5 5v3H7v4h3v9z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h3>Explore</h3>
          <Link href="/menu">
            Our Menu <ArrowUpRight size={12} />
          </Link>
          <Link href="/about">Our Story</Link>
          <Link href="/gallery">The Gallery</Link>
          <Link href="/contact">Find Us</Link>
          <Link href="/#private-dining">Private Dining</Link>
          <Link href="/#plan-your-visit">Plan Your Visit</Link>
          <Link href="/contact#faq">Frequently Asked Questions</Link>
        </div>
        <div>
          <h3>Come on over</h3>
          <p>
            123 Market Street
            <br />
            Austin, TX 78701
          </p>
          <a href="tel:+15125550187">(512) 555-0187</a>
          <a href="mailto:hello@emberandoak.com">hello@emberandoak.com</a>
        </div>
        <div>
          <h3>At your table</h3>
          <Hours />
          <Link href="/menu" className="footer-menu-link">
            Burgers · Steaks · Pizza · Drinks
          </Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Ember & Oak. All rights reserved.</span>
        <span>
          A fictional restaurant. A real passion for craft.{' '}
          <span className="portfolio-label">Portfolio project.</span>
        </span>
      </div>
    </footer>
  );
}
