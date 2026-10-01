import { GroupPlanning } from '@/components/GroupPlanning';
import { FAQSection } from '@/components/FAQSection';
import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Flame } from 'lucide-react';
import { Hours } from '@/components/Footer';
import { ReserveButton } from '@/components/ExperienceProvider';
import { ContactForm } from '@/components/ContactForm';
export const metadata: Metadata = {
  title: 'Contact & Hours',
  description:
    'Find opening hours, explore our fictional Austin location, or try the Ember & Oak demo reservation form. Your next favorite table is waiting.',
};
export default function Contact() {
  return (
    <>
      <header className="page-header container">
        <span className="eyebrow">
          <span /> Come on over
        </span>
        <h1>
          Good company
          <br />
          starts <em>here.</em>
        </h1>
        <p>
          Planning a night out, a special gathering, or just saying hello? We’d love to hear from
          you.
        </p>
      </header>
      <section className="container contact-grid">
        <div className="contact-info">
          <h2>Find your way to us.</h2>
          <div className="contact-item">
            <MapPin />
            <div>
              <h3>In the heart of Austin</h3>
              <p>
                123 Market Street
                <br />
                Austin, TX 78701
              </p>
            </div>
          </div>
          <div className="contact-item">
            <Phone />
            <div>
              <h3>Give us a ring</h3>
              <a href="tel:+15125550187">(512) 555-0187</a>
            </div>
          </div>
          <div className="contact-item">
            <Mail />
            <div>
              <h3>Drop us a line</h3>
              <a href="mailto:hello@emberandoak.com">hello@emberandoak.com</a>
            </div>
          </div>
          <div className="contact-hours">
            <h3>There’s always a good time.</h3>
            <Hours />
          </div>
          <ReserveButton />
        </div>
        <div className="contact-form">
          <span className="eyebrow">Let’s talk</span>
          <h2>A note to our table.</h2>
          <ContactForm />
        </div>
      </section>
      <section
        className="container map-section"
        aria-label="Illustrative map of the fictional restaurant location"
      >
        <div className="map-art">
          <div className="map-river" />
          <span className="map-road road-one">MARKET STREET</span>
          <span className="map-road road-two">CONGRESS AVENUE</span>
          <span className="map-neighborhood">DOWNTOWN AUSTIN</span>
          <div className="map-marker">
            <Flame size={28} />
            <strong>EMBER & OAK</strong>
            <span>123 Market Street</span>
          </div>
          <span className="map-caption">Illustrative map · Fictional restaurant location</span>
        </div>
        <div className="map-note">
          <MapPin size={19} />
          <p>
            A little corner of Austin. A warm welcome inside.
            <br />
            <span className="muted">
              Our address is fictional and part of this portfolio experience.
            </span>
          </p>
        </div>
      </section>
      <GroupPlanning />
      <FAQSection />
    </>
  );
}
