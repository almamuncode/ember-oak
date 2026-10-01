'use client';
import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal, X, ArrowRight, UtensilsCrossed } from 'lucide-react';
import Link from 'next/link';
import { categories, menuItems } from '@/data/menu';
import { MenuCard } from './MenuCard';
export function MenuBrowser({ preview = false }: { preview?: boolean }) {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [vegetarian, setVegetarian] = useState(false);
  const filtered = useMemo(
    () =>
      menuItems.filter(
        (item) =>
          (category === 'All' || item.category === category) &&
          (!vegetarian ||
            item.dietaryTags.some((tag) => tag === 'Vegetarian' || tag === 'Vegan')) &&
          `${item.name} ${item.description} ${item.ingredients.join(' ')}`
            .toLowerCase()
            .includes(query.toLowerCase().trim()),
      ),
    [category, query, vegetarian],
  );
  const previewIds = [
    'ember-classic',
    'oak-fired-ribeye',
    'wood-fired-margherita',
    'truffle-mushroom-pasta',
    'fire-roasted-wings',
    'grilled-atlantic-salmon',
    'harvest-salad',
    'chocolate-lava-cake',
  ];
  const visible =
    preview && category === 'All'
      ? previewIds.flatMap((id) => filtered.filter((item) => item.id === id))
      : preview
        ? filtered.slice(0, 8)
        : filtered;
  function clear() {
    setCategory('All');
    setQuery('');
    setVegetarian(false);
  }
  return (
    <div className="menu-browser">
      {!preview && (
        <div className="search-row">
          <label className="search-field">
            <Search size={19} />
            <span className="sr-only">Search dishes</span>
            <input
              type="search"
              placeholder="Search dishes..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            {query && (
              <button aria-label="Clear search" onClick={() => setQuery('')}>
                <X size={17} />
              </button>
            )}
          </label>
          <button
            className={`filter-button ${vegetarian ? 'selected' : ''}`}
            aria-pressed={vegetarian}
            onClick={() => setVegetarian(!vegetarian)}
          >
            <SlidersHorizontal size={17} /> Vegetarian friendly
          </button>
        </div>
      )}
      <div className="category-tabs" aria-label="Menu categories">
        {categories.map((item) => (
          <button
            key={item}
            aria-pressed={category === item}
            className={category === item ? 'active' : ''}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      {!preview && (
        <div className="results-label" aria-live="polite">
          <span>
            {filtered.length} dishes{' '}
            <span className="muted">
              • {category === 'All' ? 'Something for every craving' : category}
            </span>
          </span>
          <span className="muted">Made fresh. Always.</span>
        </div>
      )}
      <div className="menu-grid">
        {visible.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
      {visible.length === 0 && (
        <div className="empty-state">
          <UtensilsCrossed size={32} />
          <h3>No dishes found.</h3>
          <p>Try another search or discover a different category.</p>
          <button className="button" onClick={clear}>
            Clear Filters
          </button>
        </div>
      )}
      {preview && (
        <div className="center-action">
          <Link className="button outline" href="/menu">
            View Full Menu <ArrowRight size={17} />
          </Link>
          <p className="micro">{menuItems.length} dishes. Endless reasons to come back.</p>
        </div>
      )}
      {!preview && (
        <p className="menu-note">
          Please let your server know about any allergies. Our kitchen handles shared allergens;
          dietary labels are a guide, not an allergen guarantee. Prices are in USD.
        </p>
      )}
    </div>
  );
}
