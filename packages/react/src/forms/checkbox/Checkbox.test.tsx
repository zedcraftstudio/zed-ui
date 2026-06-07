import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it } from "vitest";
import { Checkbox } from "./Checkbox";
import { renderWithProvider } from "../../test/render";

expect.extend(toHaveNoViolations);

describe("Checkbox", () => {
  it("renders a checkbox", () => {
    const { getByRole } = renderWithProvider(
      <Checkbox defaultChecked label="Accept terms" />
    );

    expect(getByRole("checkbox", { name: "Accept terms" })).toBeTruthy();
  });

  it("renders description without label", () => {
    const { getByText } = renderWithProvider(<Checkbox description="Required field" />);
    expect(getByText("Required field")).toBeTruthy();
  });

  it("renders description and indeterminate state", () => {
    const { container, getByText } = renderWithProvider(
      <Checkbox
        color="danger"
        description="Required"
        indeterminate
        invalid
        label="Terms"
        size="lg"
        variant="outline"
      />
    );
    expect(getByText("Terms")).toBeTruthy();
    expect(getByText("Required")).toBeTruthy();
    expect(container.querySelector("[data-invalid='true']")).toBeTruthy();
    expect(container.querySelector("[data-size='lg']")).toBeTruthy();
  });

  it("has no axe violations", async () => {
    const { container } = renderWithProvider(<Checkbox label="Accept terms" />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
