import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it } from "vitest";
import { renderWithProvider } from "../../test/render";
import { Radio, RadioGroup } from "./Radio";

expect.extend(toHaveNoViolations);

describe("Radio", () => {
  it("renders radio group", () => {
    const { getByRole } = renderWithProvider(
      <RadioGroup aria-label="Plan">
        <Radio value="free" label="Free" />
        <Radio value="pro" label="Pro" />
      </RadioGroup>
    );

    expect(getByRole("radiogroup", { name: "Plan" })).toBeTruthy();
    expect(getByRole("radio", { name: "Free" })).toBeTruthy();
  });

  it("renders description-only radios with variants", () => {
    const { container, getByText } = renderWithProvider(
      <RadioGroup orientation="horizontal">
        <Radio
          color="danger"
          description="Basic tier"
          invalid
          size="sm"
          value="free"
          variant="solid"
        />
      </RadioGroup>
    );
    expect(getByText("Basic tier")).toBeTruthy();
    expect(container.querySelector("[data-orientation='horizontal']")).toBeTruthy();
    expect(container.querySelector("[data-invalid='true']")).toBeTruthy();
  });

  it("has no axe violations", async () => {
    const { container } = renderWithProvider(
      <RadioGroup aria-label="Plan">
        <Radio value="free" label="Free" />
        <Radio value="pro" label="Pro" />
      </RadioGroup>
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
