import Link from 'next/link';
import { Flame } from 'lucide-react';
export default function NotFound() {
  return (
    <section className="container not-found">
      <Flame size={40} />
      <span className="eyebrow">404 · Off the menu</span>
      <h1>This table’s a little empty.</h1>
      <p>We couldn’t find that page, but there’s plenty of good food waiting.</p>
      <Link href="/menu" className="button">
        Explore Our Menu
      </Link>
    </section>
  );
}
