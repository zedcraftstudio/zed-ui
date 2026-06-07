import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it } from "vitest";
import { renderWithProvider } from "../../test/render";
import { Textarea } from "./Textarea";

expect.extend(toHaveNoViolations);

describe("Textarea", () => {
  it("renders textarea", () => {
    const { getByRole } = renderWithProvider(
      <Textarea aria-label="Notes" placeholder="Write notes" />
    );
    expect(getByRole("textbox", { name: "Notes" })).toBeTruthy();
  });

  it("wraps textarea with start and end icons", () => {
    const { container } = renderWithProvider(
      <Textarea aria-label="Notes" endIcon="→" rows={4} size="lg" startIcon="←" />
    );
    expect(container.querySelector(".zui-textarea-group")).toBeTruthy();
    expect(container.querySelector(".zui-textarea__start-icon")).toBeTruthy();
    expect(container.querySelector(".zui-textarea__end-icon")).toBeTruthy();
  });

  it("applies invalid state and resize style", () => {
    const { getByRole } = renderWithProvider(
      <Textarea aria-label="Notes" invalid resize="none" />
    );
    const textarea = getByRole("textbox", { name: "Notes" }) as HTMLTextAreaElement;
    expect(textarea.getAttribute("data-invalid")).toBe("true");
    expect(textarea.style.resize).toBe("none");
  });

  it("has no axe violations", async () => {
    const { container } = renderWithProvider(
      <Textarea aria-label="Notes" placeholder="Write notes" />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
