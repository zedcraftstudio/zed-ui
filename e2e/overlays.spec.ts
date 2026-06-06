import { expect, test } from "@playwright/test";

test.describe("Overlay interactions", () => {
  test("dialog documentation renders trigger", async ({ page }) => {
    await page.goto("/docs/components/dialog");
    await expect(page.getByRole("heading", { level: 1, name: "Dialog" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Open dialog" }).first()).toBeVisible();
  });

  test("select documentation renders combobox", async ({ page }) => {
    await page.goto("/docs/components/select");
    await expect(page.getByRole("heading", { level: 1, name: "Select" })).toBeVisible();
    await expect(page.getByRole("combobox").first()).toBeVisible();
  });
});
