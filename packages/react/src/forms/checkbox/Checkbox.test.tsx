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

  it("has no axe violations", async () => {
    const { container } = renderWithProvider(<Checkbox label="Accept terms" />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
