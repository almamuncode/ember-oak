import { KitchenCraft } from '@/components/KitchenCraft';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { FoodImage } from '@/components/FoodImage';
import { StorySection, Values, GallerySection, ReservationCTA } from '@/components/Sections';
import { images } from '@/data/images';
export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'Meet the spirit behind Ember & Oak: a neighborhood kitchen inspired by open-fire cooking, thoughtful ingredients and the simple joy of sharing a meal.',
};
export default function About() {
  return (
    <>
      <header className="page-header container">
        <span className="eyebrow">
          <span /> Our story
        </span>
        <h1>
          Built around fire.
          <br />
          Made for <em>connection.</em>
        </h1>
        <p>
          A neighborhood kitchen. An open flame. And a belief that a good meal can make any day a
          little better.
        </p>
      </header>
      <div className="container about-panorama">
        <FoodImage
          src={images.interior}
          alt="Warm and welcoming restaurant interior with timber tables and ambient lighting"
          sizes="100vw"
          priority
        />
        <span>COME AS YOU ARE. STAY A LITTLE LONGER.</span>
      </div>
      <StorySection />
      <section className="container philosophy">
        <span className="eyebrow">The things that matter</span>
        <h2>
          No shortcuts.
          <br />
          Just a love for the craft.
        </h2>
        <div>
          <p>
            Our story began in 2014 with a small grill, a handful of recipes, and an idea: make a
            place where a Tuesday dinner feels as welcome as a milestone celebration.
          </p>
          <p>
            Today, that same spirit lives in every corner of our kitchen. We build our fire each
            morning, make our sauces in small batches, and give our ingredients room to speak. It’s
            a simple philosophy, but one we never tire of.
          </p>
          <Link href="/menu" className="text-link">
            See what’s cooking <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <Values />
      <section className="section">
        <div className="container chef-grid">
          <div className="chef-copy">
            <span className="eyebrow">The hands behind the heat</span>
            <h2>
              A little instinct.
              <br />A lot of heart.
            </h2>
            <p>
              For our fictional founding chef, Daniel Hayes, the best cooking has always started
              with curiosity. A childhood spent around backyard grills became a lifelong love of
              smoke, seasonality, and the perfect sear.
            </p>
            <blockquote>
              “Let the ingredients lead. Give the fire time. And always make enough for one more.”
            </blockquote>
            <span className="chef-signature">Daniel Hayes</span>
            <small>FOUNDER & EXECUTIVE CHEF</small>
          </div>
          <div className="chef-photo">
            <FoodImage
              src={images.chef}
              alt="Chef plating freshly prepared food"
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
      <section className="container sourcing">
        <span className="eyebrow">Close to home</span>
        <h2>
          Good roots.
          <br />
          Better ingredients.
        </h2>
        <p>
          Our approach to sourcing is simple: choose produce in its season, buy with care, and build
          relationships with the people behind the ingredients. Our fictional menu celebrates Texas
          hospitality and the kind of honest cooking that feels at home anywhere.
        </p>
      </section>
      <KitchenCraft />
      <GallerySection />
      <ReservationCTA />
    </>
  );
}
