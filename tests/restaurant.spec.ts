import { test, expect } from '@playwright/test';

test('search, category and dietary filters compose and recover from empty results', async ({
  page,
}) => {
  await page.goto('/menu');
  await expect(page.locator('.menu-card')).toHaveCount(75);
  await page.getByRole('button', { name: 'Burgers', exact: true }).click();
  await expect(page.locator('.menu-card')).toHaveCount(6);
  await page.getByRole('searchbox').fill('smoke');
  await expect(page.locator('.menu-card')).toHaveCount(1);
  await expect(page.locator('.menu-card')).toContainText('Smokehouse BBQ Burger');
  await page.getByRole('button', { name: 'Vegetarian friendly' }).click();
  await expect(page.getByText('No dishes found.')).toBeVisible();
  await page.getByRole('button', { name: 'Clear Filters' }).click();
  await expect(page.locator('.menu-card')).toHaveCount(75);
  await page.getByRole('button', { name: 'Vegetarian friendly' }).click();
  const cards = page.locator('.menu-card');
  expect(await cards.count()).toBeGreaterThan(10);
  for (const card of await cards.all())
    await expect(card.locator('.tags')).toContainText(/Vegetarian|Vegan/);
});

test('cart updates totals, persists, removes items and finishes a demo checkout', async ({
  page,
}) => {
  await page.goto('/menu/ember-classic');
  await page.getByRole('button', { name: 'Increase quantity', exact: true }).click();
  await page.getByRole('button', { name: /Add to Order/ }).click();
  const dialog = page.getByRole('dialog');
  await expect(dialog.locator('.cart-total')).toContainText('$32.00');
  await dialog.getByRole('button', { name: 'Increase Ember Classic' }).click();
  await expect(dialog.locator('.cart-total')).toContainText('$48.00');
  await page.keyboard.press('Escape');
  await expect(dialog).not.toBeVisible();
  await page.reload();
  await page.getByRole('button', { name: 'Open cart, 3 items' }).click();
  await expect(dialog.locator('.cart-total')).toContainText('$48.00');
  await dialog.getByRole('button', { name: 'Decrease Ember Classic' }).click();
  await expect(dialog.locator('.cart-total')).toContainText('$32.00');
  await dialog.getByRole('button', { name: 'Remove Ember Classic' }).click();
  await expect(dialog.getByText('Your next favorite is waiting.')).toBeVisible();
  await page.keyboard.press('Escape');
  await page.getByRole('button', { name: /Add to Order/ }).click();
  await dialog.getByRole('button', { name: 'Demo Checkout' }).click();
  await expect(dialog.getByText(/No order was placed/)).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Open cart, 0 items' })).toBeVisible();
});

test('reservation validation, focus containment, success and focus restoration', async ({
  page,
}) => {
  await page.goto('/');
  const trigger = page.locator('.nav-reserve');
  await trigger.click();
  const dialog = page.getByRole('dialog');
  await dialog.getByRole('button', { name: 'Request Reservation' }).click();
  await expect(dialog).toBeVisible();
  await expect(dialog.getByLabel('Name', { exact: true })).toBeFocused();
  await dialog.getByLabel('Name', { exact: true }).fill('Taylor Guest');
  await dialog.getByLabel('Email', { exact: true }).fill('taylor@example.com');
  await dialog.getByLabel('Phone', { exact: true }).fill('5125550123');
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 2);
  const date = `${tomorrow.getFullYear()}-${String(tomorrow.getMonth() + 1).padStart(2, '0')}-${String(tomorrow.getDate()).padStart(2, '0')}`;
  await dialog.getByLabel('Date', { exact: true }).fill(date);
  await dialog.getByRole('combobox', { name: 'Time', exact: true }).selectOption('18:00');
  await dialog.getByRole('button', { name: 'Request Reservation' }).click();
  await expect(dialog.getByText(/No table has been booked/)).toBeVisible();
  for (let i = 0; i < 8; i++) {
    await page.keyboard.press('Tab');
    expect(await dialog.evaluate((el) => el.contains(document.activeElement))).toBe(true);
  }
  await page.keyboard.press('Escape');
  await expect(trigger).toBeFocused();
});

test('contact form completes clearly as a demo', async ({ page }) => {
  await page.goto('/contact');
  await page.getByLabel('Name', { exact: true }).fill('Taylor Guest');
  await page.getByLabel('Email', { exact: true }).fill('taylor@example.com');
  await page.getByLabel('Subject').selectOption('General inquiry');
  await page.getByLabel('Your message').fill('Can you accommodate a small birthday dinner?');
  await page.getByRole('button', { name: 'Send Message' }).click();
  await expect(page.getByText('Thanks for stopping by.')).toBeVisible();
});

for (const width of [375, 430, 768, 1024, 1440]) {
  test(`routes and layout at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    for (const route of ['/', '/menu', '/menu/ember-classic', '/about', '/gallery', '/contact']) {
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
      await expect(page.locator('main h1')).toBeVisible();
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
      ).toBe(true);
      if (width === 375 && route === '/') {
        await page.getByRole('button', { name: 'Open navigation' }).click();
        await expect(page.getByRole('dialog')).toBeVisible();
        await page
          .getByRole('navigation', { name: 'Mobile navigation' })
          .getByRole('link', { name: 'Menu', exact: true })
          .click();
        await expect(page).toHaveURL(/\/menu$/);
      }
    }
    expect(errors).toEqual([]);
  });
}

test('invalid dishes return 404 and dish metadata is unique', async ({ page }) => {
  const response = await page.goto('/menu/not-a-dish');
  expect(response?.status()).toBe(404);
  await expect(page.getByText('This table’s a little empty.')).toBeVisible();
  await page.goto('/menu/oak-fired-ribeye');
  await expect(page).toHaveTitle('Oak-Fired Ribeye | Ember & Oak');
});

test('all dish routes and local photographs are available', async ({ page, request }) => {
  await page.goto('/menu');
  const routes = await page
    .locator('.menu-card')
    .evaluateAll((links) => links.map((link) => link.getAttribute('href')!));
  for (const route of routes) {
    const response = await request.get(route);
    expect(response.status(), route).toBe(200);
  }
  const sources = await request.get('/images/sources.json');
  const names = Object.keys(await sources.json());
  for (const name of names) {
    const response = await request.get(`/images/${name}.jpg`);
    expect(response.status(), name).toBe(200);
    expect(response.headers()['content-type']).toContain('image/');
  }
});

test('capture the finished desktop and mobile homepage', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  for (const img of await page.locator('main img').all()) {
    await img.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        img.evaluate(
          (el) => (el as HTMLImageElement).complete && (el as HTMLImageElement).naturalWidth > 0,
        ),
      )
      .toBe(true);
  }
  await page.evaluate(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
  });
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
  await page.screenshot({ path: 'test-results/home-desktop.png', fullPage: true });
  await page.setViewportSize({ width: 375, height: 850 });
  await page.goto('/');
  await page.screenshot({ path: 'test-results/home-mobile.png', fullPage: true });
  await page.goto('/menu');
  await page.getByRole('button', { name: 'Steaks', exact: true }).click();
  await page.screenshot({ path: 'test-results/menu-mobile.png', fullPage: true });
});

test('mobile reservation and cart dialogs fit the viewport', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');
  await page.locator('.hero-secondary').click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  const box = await dialog.boundingBox();
  expect(box!.width).toBeLessThanOrEqual(375);
  expect(box!.height).toBeLessThanOrEqual(667);
  await dialog.getByRole('button', { name: 'Request Reservation' }).scrollIntoViewIfNeeded();
  await expect(dialog.getByRole('button', { name: 'Request Reservation' })).toBeInViewport();
  await page.keyboard.press('Escape');
  await page.getByRole('button', { name: 'Open cart, 0 items' }).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  expect((await page.getByRole('dialog').boundingBox())!.width).toBeLessThanOrEqual(375);
});

test('broken photography and malformed saved carts fail gracefully', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('ember-cart', '{broken-json'));
  await page.route('**/_next/image?*', (route) => {
    if (decodeURIComponent(route.request().url()).includes('/images/burger.jpg'))
      return route.abort();
    return route.continue();
  });
  await page.goto('/menu/ember-classic');
  await expect(page.locator('.detail-photo img')).toHaveAttribute('src', '/images/fallback.svg');
  await expect(page.getByRole('button', { name: 'Open cart, 0 items' })).toBeVisible();
});
