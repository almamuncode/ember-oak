# Ember & Oak Restaurant Website

A complete restaurant portfolio project demonstrating a production-style frontend with Next.js and TypeScript. Ember & Oak is a fictional modern American grill in Austin, with an editorial dark design, warm typography, and an extensive digital menu.

## Features

- Complete homepage, restaurant story, editorial gallery, and contact page
- 75 typed menu items across 17 categories
- Search by dish, description, or ingredients; category and vegetarian filters work together
- Individual statically generated dish pages with metadata, ingredients, dietary labels, heat levels, and related dishes
- Demo cart with quantity controls, removal, subtotal, localStorage persistence, and explicit demo checkout
- Native accessible reservation dialog with required-field validation, date and opening-hours-aware time selection, Escape dismissal, focus containment, and focus restoration
- Contact form with validation and a clear demo success state
- Responsive mobile navigation, horizontal mobile category selector, loading skeletons, empty search state, and custom 404
- Local sample photography through Next/Image, with a branded image fallback
- Per-page metadata, OpenGraph images, sitemap, robots, and custom favicon
- Reduced-motion support, visible keyboard focus, semantic landmarks, and labeled controls

## Tech stack

Next.js 16 App Router · React 19 · TypeScript · Tailwind CSS 4 · Lucide React · Google Fonts through `next/font` · Playwright · ESLint · Prettier.

Server components render the pages. Client components are limited to interactive controls, form/dialog state, cart persistence, and image fallbacks. Tailwind provides the utility layer; the editorial design system lives in `src/app/globals.css` with shared colors, type, spacing, and responsive rules.

## Installation

Requires Node.js 20.9 or later and npm.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. Google Fonts are downloaded at build time and served locally by Next.js afterward. The initial build needs access to Google's font servers.

## Build and checks

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

Browser tests:

```bash
npx playwright install chromium
npm run build
npm test
```

Playwright starts the production server automatically, or reuses an existing local server outside CI. The tests cover composed menu filters, cart totals and persistence, reservation and contact submissions, keyboard dialogs, HTTP 404 behavior, metadata, and six major page layouts at 375, 430, 768, 1024, and 1440 pixels.

```bash
npm run format
npm run format:check
```

## Routes

| Route          | Content                                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------------------------- |
| `/`            | Hero, signature dishes, story, interactive menu preview, special, values, gallery, reviews, reservation CTA |
| `/menu`        | Full searchable and filterable menu                                                                         |
| `/menu/[slug]` | Dish details, quantity, add to demo order, related dishes                                                   |
| `/about`       | Brand story, philosophy, chef, sourcing, interior gallery                                                   |
| `/gallery`     | Eight editorial food and restaurant photographs                                                             |
| `/contact`     | Address, hours, contact form, reservation CTA, illustrative map                                             |
| `/sitemap.xml` | Main pages and all menu detail URLs                                                                         |
| `/robots.txt`  | Crawl configuration                                                                                         |

## Menu filtering and search

`src/data/menu.ts` is the source of truth. Each item has a stable ID/slug, name, description, price, category, image, ingredients, dietary labels, spice level, and featured/popular flags. Category, search, and vegetarian filters apply together. “Clear Filters” resets all three. The homepage shows a curated range of eight dishes, then up to eight matching dishes when a category is selected.

No calories are invented; add a verified nutrition field when real data is available. Dietary labels are illustrative, not allergen guarantees.

## Responsive design

Layouts adapt from two-column mobile dish cards to four-column desktop grids. Category controls scroll horizontally on phones. The menu and reservation dialogs fit the viewport and scroll internally. Navigation collapses to an accessible dialog. Motion is disabled when the visitor requests reduced motion.

## Project structure

```text
src/
  app/                  Pages, metadata, global styling, loading and error routes
    menu/[slug]/        Static dish details and dynamic metadata
    about/ contact/ gallery/
  components/           Shared layout, menu, sections, forms, dialogs and cart
  data/                 Menu, photography mappings, gallery and testimonials
  types/                Menu item interface
public/images/          Local sample photos, branded fallback and source URLs
scripts/                Photography refresh utility
 tests/                 Playwright browser regression checks
```

## Photography

Sample photographs are stored locally to avoid runtime dependence on an image host. Original Unsplash image URLs are recorded in `public/images/sources.json`. Some dishes share representative category photography; this is sample content, not a photographic inventory of 75 exact recipes. Replace it with client-owned dish photography before a real restaurant launch.

To replace images:

1. Add files such as `public/images/menu/ember-classic-burger.jpg`.
2. Update `src/data/images.ts`, or override `image` for a specific item in `src/data/menu.ts`.
3. Keep descriptive alt text; Next/Image supplies responsive sizes and optimized formats.
4. Preserve `public/images/fallback.svg` as the graceful failure state.

`python3 scripts/download-images.py` refreshes the sample image set from the recorded source URLs. It is optional and requires internet access. Remote Unsplash images are also supported by `next.config.ts`.

## Demo boundaries and deployment

The restaurant, address, chef story, reviews, and menu are fictional. Reservation and contact forms validate locally; no personal data is transmitted or stored. Checkout does not place an order or take payment. Only cart IDs and quantities are saved in localStorage. Social links point to the platform homepages until real restaurant accounts are supplied. The map is deliberately illustrative.

Set `NEXT_PUBLIC_SITE_URL` to your deployed origin before building so OpenGraph and sitemap URLs point to your site. Deploy to a host supporting the Next.js Node runtime and image optimization. No database or secret credentials are needed.

## Future improvements

- Connect reservation and contact forms to server-side validation, email delivery, rate limiting, and a real booking service.
- Add verified dish photography, nutrition, allergen information, and client-owned social accounts.
- Connect ordering to an inventory-aware backend and payment provider.
- Move content to a CMS if staff need editing access.
- Add a real map and restaurant structured data once an actual business and location are supplied.

The current forms and cart are fully working demo interactions; integration boundaries are isolated in the form submit handlers and cart provider.
