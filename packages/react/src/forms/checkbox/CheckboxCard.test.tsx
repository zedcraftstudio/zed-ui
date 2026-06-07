import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it } from "vitest";
import { renderWithProvider } from "../../test/render";
import { CheckboxCard } from "./CheckboxCard";

expect.extend(toHaveNoViolations);

describe("CheckboxCard", () => {
  it("renders label and description", () => {
    const { getByText } = renderWithProvider(
      <CheckboxCard description="Details" label="Accept terms" />
    );
    expect(getByText("Accept terms")).toBeTruthy();
    expect(getByText("Details")).toBeTruthy();
  });

  it("supports variants without indicator", () => {
    const { container } = renderWithProvider(
      <CheckboxCard
        checked
        color="success"
        indeterminate
        invalid
        showIndicator={false}
        size="lg"
        variant="solid"
      />
    );
    expect(container.querySelector(".zui-checkbox-card[data-variant='solid']")).toBeTruthy();
    expect(container.querySelector(".zui-checkbox__control")).toBeNull();
  });

  it("has no axe violations", async () => {
    const { container } = renderWithProvider(
      <CheckboxCard description="Details" label="Accept terms" />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
