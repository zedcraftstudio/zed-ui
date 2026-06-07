import { expect, test } from "@playwright/test";

const stories = [
  { id: "actions-button--solid", name: "button-solid" },
  { id: "actions-iconbutton--solid", name: "icon-button-solid" },
  { id: "forms-input--outline", name: "input-outline" },
  { id: "forms-checkbox--default", name: "checkbox-default" },
  { id: "forms-switch--default", name: "switch-default" },
  { id: "forms-select--default", name: "select-default" },
  { id: "forms-textarea--default", name: "textarea-default" },
  { id: "navigation-tabs--default", name: "tabs-default" },
  { id: "navigation-accordion--default", name: "accordion-default" },
  { id: "navigation-menu--default", name: "menu-default" },
  { id: "navigation-pagination--default", name: "pagination-default" },
  { id: "overlays-dialog--default", name: "dialog-default" },
  { id: "overlays-popover--default", name: "popover-default" },
  { id: "overlays-tooltip--default", name: "tooltip-default" },
  { id: "feedback-alert--default", name: "alert-default" },
  { id: "feedback-badge--default", name: "badge-default" },
  { id: "data-display-card--default", name: "card-default" },
  { id: "data-display-avatar--default", name: "avatar-default" },
  { id: "layout-stack--default", name: "stack-default" },
  { id: "layout-paper--default", name: "paper-default" }
] as const;

test.describe("Storybook visual regression", () => {
  for (const story of stories) {
    test(`${story.name} matches snapshot`, async ({ page }) => {
      await page.goto(`iframe.html?id=${story.id}&viewMode=story`);
      await page.waitForFunction(
        () => (document.querySelector("#storybook-root")?.childElementCount ?? 0) > 0
      );
      await page.waitForLoadState("networkidle");
      await expect(page.locator("#storybook-root")).toHaveScreenshot(`${story.name}.png`, {
        maxDiffPixelRatio: 0.02
      });
    });
  }
});
