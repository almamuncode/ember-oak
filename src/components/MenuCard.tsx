import Link from 'next/link';
import { ArrowUpRight, Flame } from 'lucide-react';
import type { MenuItem } from '@/types/menu';
import { money } from '@/data/menu';
import { FoodImage } from './FoodImage';
export function MenuCard({ item }: { item: MenuItem }) {
  return (
    <Link className="menu-card group" href={`/menu/${item.slug}`}>
      <div className="card-photo">
        <FoodImage src={item.image} alt={item.name} />
        {(item.popular || item.featured) && (
          <span className="photo-badge">{item.popular ? 'House favorite' : 'Chef’s pick'}</span>
        )}
        <span className="card-arrow">
          <ArrowUpRight size={18} />
        </span>
      </div>
      <div className="card-body">
        <span className="eyebrow small">{item.category}</span>
        <div className="card-title">
          <h3>{item.name}</h3>
          <span className="price">{money(item.price)}</span>
        </div>
        <p>{item.description}</p>
        <div className="tags">
          {item.spicyLevel > 0 && (
            <span>
              <Flame size={12} /> {item.spicyLevel > 1 ? 'Spicy' : 'Mild heat'}
            </span>
          )}
          {item.dietaryTags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
