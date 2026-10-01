import type { MetadataRoute } from 'next';
import { menuItems } from '@/data/menu';
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  return [
    ...['', '/menu', '/about', '/gallery', '/contact'],
    ...menuItems.map((item) => `/menu/${item.slug}`),
  ].map((path) => ({
    url: `${origin}${path}`,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : path === '/menu' ? 0.9 : 0.6,
  }));
}
