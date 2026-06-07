import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it } from "vitest";
import { Progress } from "./Progress";
import { renderWithProvider } from "../../test/render";

expect.extend(toHaveNoViolations);

describe("Progress", () => {
  it("renders with value", () => {
    const { getByRole } = renderWithProvider(<Progress label="Upload" value={60} />);
    expect(getByRole("progressbar")).toBeTruthy();
  });

  it("renders value-only header", () => {
    const { container } = renderWithProvider(
      <Progress color="success" showValue size="lg" value={25} />
    );
    expect(container.querySelector(".zui-progress__value")).toBeTruthy();
    expect(container.querySelector(".zui-progress__label")).toBeNull();
  });

  it("has no axe violations", async () => {
    const { container } = renderWithProvider(<Progress label="Upload" showValue value={60} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
