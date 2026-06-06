import { expect, test } from "@playwright/test";

test.describe("Playground docs", () => {
  test("loads tabs documentation", async ({ page }) => {
    await page.goto("/docs/components/tabs");
    await expect(page.getByRole("heading", { level: 1, name: "Tabs" })).toBeVisible();
    await expect(page.getByRole("tab", { name: "Members" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Edit page on GitHub ↗" })).toHaveAttribute(
      "href",
      /github\.com\/zedcraftstudio\/zed-ui\/edit\/main\/apps\/playground\/src\/docs\/sections\/navigation\.tsx/
    );
  });

  test("installation page renders setup steps", async ({ page }) => {
    await page.goto("/docs/get-started/installation");
    await expect(page.getByRole("heading", { level: 1, name: "Installation" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Supported frameworks" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Install @zed-ui/react" })).toBeVisible();
    await expect(page.getByRole("tablist", { name: "Package manager" })).toBeVisible();
    await expect(page.getByRole("link", { name: "View setup →" }).first()).toHaveAttribute(
      "href",
      "#installation"
    );
    await expect(page.getByRole("link", { name: "Edit page on GitHub ↗" })).toHaveAttribute(
      "href",
      /github\.com\/zedcraftstudio\/zed-ui\/edit\/main\/apps\/playground\/src\/pages\/InstallationPage\.tsx/
    );
  });

  test("installation page copy button copies page text", async ({ page }) => {
    await page.goto("/docs/get-started/installation");
    await page.context().grantPermissions(["clipboard-read", "clipboard-write"]);

    await page.getByRole("button", { name: "Copy page" }).click();
    await expect(page.getByRole("button", { name: "Copied" })).toBeVisible();

    const clipboard = await page.evaluate(() => navigator.clipboard.readText());
    expect(clipboard).toContain("Installation — Zed UI");
    expect(clipboard).toContain("ThemeProvider");
  });

  test("installation toc links scroll to sections", async ({ page }) => {
    await page.goto("/docs/get-started/installation");
    const toc = page.getByRole("complementary", { name: "On this page" });
    await expect(toc.getByRole("link", { name: "Enjoy!" })).toHaveAttribute("href", "#enjoy");
    await toc.getByRole("link", { name: "CSS variables" }).click();
    await expect(page.locator("#css-variables")).toBeInViewport();
  });

  test("accordion section expands with keyboard", async ({ page }) => {
    await page.goto("/docs/components/accordion");
    await expect(page.getByRole("heading", { level: 1, name: "Accordion" })).toBeVisible();

    const trigger = page.getByRole("button", { name: "What is Zed UI?" }).first();
    await trigger.focus();
    await page.keyboard.press("Enter");
    await expect(page.getByText("typed React design system").first()).toBeVisible();
  });

  test("menu trigger is keyboard reachable", async ({ page }) => {
    await page.goto("/docs/components/menu");
    await expect(page.getByRole("heading", { level: 1, name: "Menu" })).toBeVisible();

    const trigger = page.getByRole("button", { name: "Actions" }).first();
    await trigger.focus();
    await expect(trigger).toBeFocused();
  });
});
