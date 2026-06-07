import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it } from "vitest";
import { PlusIcon } from "@zed-ui/icons";
import { renderWithProvider } from "../../test/render";
import { IconButton } from "./IconButton";

expect.extend(toHaveNoViolations);

describe("IconButton", () => {
  it("renders with accessible name", () => {
    const { getByRole } = renderWithProvider(
      <IconButton aria-label="Add item">
        <PlusIcon />
      </IconButton>
    );
    expect(getByRole("button", { name: "Add item" })).toBeTruthy();
  });

  it("shows spinner when loading and supports icon prop", () => {
    const { container, getByRole } = renderWithProvider(
      <IconButton aria-label="Saving" icon={<PlusIcon />} loading variant="solid" />
    );
    const button = getByRole("button", { name: "Saving" });
    expect(button.getAttribute("aria-busy")).toBe("true");
    expect(button.hasAttribute("disabled")).toBe(true);
    expect(container.querySelector(".zui-spinner")).toBeTruthy();
  });

  it("has no axe violations", async () => {
    const { container } = renderWithProvider(
      <IconButton aria-label="Add item">
        <PlusIcon />
      </IconButton>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
