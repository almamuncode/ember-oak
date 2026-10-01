export interface MenuItem {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  featured: boolean;
  popular: boolean;
  spicyLevel: 0 | 1 | 2 | 3;
  dietaryTags: string[];
  ingredients: string[];
}
