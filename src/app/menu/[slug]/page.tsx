import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Flame, Leaf } from 'lucide-react';
import { menuItems, money } from '@/data/menu';
import { FoodImage } from '@/components/FoodImage';
import { AddToOrder } from '@/components/AddToOrder';
import { MenuCard } from '@/components/MenuCard';
import { SectionHeading } from '@/components/Sections';
export const dynamicParams = false;

export function generateStaticParams() {
  return menuItems.map((item) => ({ slug: item.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = menuItems.find((item) => item.slug === slug);
  return item
    ? {
        title: item.name,
        description: item.description,
        openGraph: {
          title: `${item.name} | Ember & Oak`,
          description: item.description,
          images: [item.image],
        },
      }
    : { title: 'Dish not found' };
}
export default async function DishPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = menuItems.find((item) => item.slug === slug);
  if (!item) notFound();
  const related = menuItems
    .filter((other) => other.category === item.category && other.id !== item.id)
    .slice(0, 4);
  return (
    <div className="container detail-page">
      <Link href="/menu" className="text-link back-link">
        <ArrowLeft size={16} /> Back to the Menu
      </Link>
      <div className="detail-grid">
        <div className="detail-photo">
          <FoodImage
            src={item.image}
            alt={item.name}
            sizes="(max-width: 800px) 100vw, 50vw"
            priority
          />
          {item.featured && <span className="photo-badge">Chef’s pick</span>}
        </div>
        <div className="detail-copy">
          <span className="eyebrow">{item.category}</span>
          <h1>{item.name}</h1>
          <span className="detail-price">{money(item.price)}</span>
          <p className="detail-description">{item.description}</p>
          <div className="tags detail-tags">
            {item.popular && <span>House favorite</span>}
            {item.dietaryTags.map((tag) => (
              <span key={tag}>
                <Leaf size={14} />
                {tag}
              </span>
            ))}
            {item.spicyLevel > 0 && (
              <span>
                <Flame size={14} />
                {['', 'Mild heat', 'Medium heat', 'Extra hot'][item.spicyLevel]}
              </span>
            )}
          </div>
          <div className="ingredients">
            <h2>What makes it good</h2>
            <p>{item.ingredients.join(' · ')}</p>
          </div>
          <AddToOrder id={item.id} price={item.price} />
          <p className="allergy-note">
            Made fresh in a shared kitchen. Please tell your server about any allergies or dietary
            requirements.
          </p>
        </div>
      </div>
      <section className="section">
        <SectionHeading eyebrow="Keep a good thing going" title="You may also like." />
        <div className="menu-grid">
          {related.map((other) => (
            <MenuCard item={other} key={other.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
