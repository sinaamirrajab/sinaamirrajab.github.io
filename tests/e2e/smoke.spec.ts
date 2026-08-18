import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = [
  "/",
  "/research/",
  "/projects/",
  "/writing/",
  "/notes/",
  "/about/",
  "/cv/",
  "/search/",
];

for (const route of routes) {
  test(`${route} loads`, async ({ page }) => {
    await page.goto(route);
    await expect(page.locator("main")).toBeVisible();
  });
}

test("home page has no obvious accessibility violations", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test("reduced motion hero shows the final statement", async ({ browser }) => {
  const context = await browser.newContext({
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  await page.goto("/");
  await expect(
    page.getByText("I develop trustworthy AI for medical imaging.").first(),
  ).toBeVisible();
  await context.close();
});
