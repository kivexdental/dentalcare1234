import { chromium } from 'playwright';

async function capture() {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // 1. Hero
  await page.screenshot({ path: 'test_frame_001_hero.png' });
  console.log('1. Captured hero');

  // Let's get total scroll height of the page
  const totalScroll = await page.evaluate(() => {
    return document.documentElement.scrollHeight - window.innerHeight;
  });
  console.log('Total scroll distance:', totalScroll);

  // Pinned distance is around 1100% of 900px = 9900px
  // Services is at ~30% of pinned distance = 3000px
  await page.evaluate(() => window.scrollTo({ top: 3200, behavior: 'instant' }));
  await page.waitForTimeout(700);
  await page.screenshot({ path: 'test_frame_056_services.png' });
  console.log('2. Captured services');

  // About is at ~56% of pinned distance = 5600px
  await page.evaluate(() => window.scrollTo({ top: 5800, behavior: 'instant' }));
  await page.waitForTimeout(700);
  await page.screenshot({ path: 'test_frame_080_about.png' });
  console.log('3. Captured about');

  // Reviews is at ~78% of pinned distance = 7800px
  await page.evaluate(() => window.scrollTo({ top: 8000, behavior: 'instant' }));
  await page.waitForTimeout(700);
  await page.screenshot({ path: 'test_frame_109_reviews.png' });
  console.log('4. Captured reviews');

  // Safety is at ~96% of pinned distance = 9600px
  await page.evaluate(() => window.scrollTo({ top: 9800, behavior: 'instant' }));
  await page.waitForTimeout(700);
  await page.screenshot({ path: 'test_frame_150_safety.png' });
  console.log('5. Captured safety');

  // Post pin: CTA Banner & Slider
  await page.evaluate(() => window.scrollTo({ top: 11000, behavior: 'instant' }));
  await page.waitForTimeout(700);
  await page.screenshot({ path: 'test_post_cta.png' });
  console.log('6. Captured CTA');

  await browser.close();
}

capture().catch(console.error);
