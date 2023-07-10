import { test, expect, Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const BASE_URL = "https://opensource.porsche.com";

const runA11yScan = async (page: Page, path: string): Promise<void> => {
  await page.goto(`${BASE_URL}${path}`);

  // The Carousel does not have a role attribute, so we need to wait for it to be visible
  await page.waitForLoadState("networkidle");

  // Run the accessibility scan
  const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag21a", "best-practice", "wcag2aa", "wcag21aa"])
    .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
};

test.describe("Should not find any automatically detectable accessiblity issues", () => {
  test("on Homepage", async ({ page }) => {
    await runA11yScan(page, "/");
  });
  test("on Contributing", async ({ page }) => {
    await runA11yScan(page, "/docs/contributing");
  });
  test("on Creating", async ({ page }) => {
    await runA11yScan(page, "/docs/creating");
  });
  test("on Cla", async ({ page }) => {
    await runA11yScan(page, "/docs/cla");
  });
});
