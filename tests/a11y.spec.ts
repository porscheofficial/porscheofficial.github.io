import { test, expect, Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { BASE_URL as BASE_URL_CONFIG } from "../src/config";

const BASE_URL = `https://${BASE_URL_CONFIG}`;

const runA11yScan = async (page: Page, path: string): Promise<void> => {
  await page.goto(path);

  // The Carousel does not have a role attribute, so we need to wait for it to be visible
  await page.waitForLoadState("networkidle");

  // Run the accessibility scan
  const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag21a", "best-practice", "wcag2aa", "wcag21aa"])
    .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
};

test.describe("Should not find any automatically detectable accessiblity issues", () => {
  test(`all pages`, async ({ page }) => {
    const request = page.waitForEvent("response");
    await page.goto(`${BASE_URL ?? ""}/sitemap.xml`);
    const response = await request;
    const body = await response.text();
    const urls = body?.match(/<loc>(.*?)<\/loc>/g)?.map((val) => {
      return val.replace(/<\/?loc>/g, "");
    });

    // eslint-disable-next-line no-restricted-syntax
    for await (const name of urls ?? []) {
      // eslint-disable-next-line no-console
      console.log(name);
      await runA11yScan(page, name);
    }
  });

  // You can also do it with test.describe() or with multiple tests as long the test name is unique.
});
