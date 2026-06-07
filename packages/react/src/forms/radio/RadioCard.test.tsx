import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it } from "vitest";
import { renderWithProvider } from "../../test/render";
import { RadioGroup } from "./Radio";
import { RadioCard } from "./RadioCard";

expect.extend(toHaveNoViolations);

describe("RadioCard", () => {
  it("renders label", () => {
    const { getByText } = renderWithProvider(
      <RadioGroup defaultValue="standard">
        <RadioCard label="Standard plan" value="standard" />
      </RadioGroup>
    );
    expect(getByText("Standard plan")).toBeTruthy();
  });

  it("renders description and hidden indicator variant", () => {
    const { container, getByText } = renderWithProvider(
      <RadioGroup>
        <RadioCard
          color="warning"
          description="Best value"
          invalid
          showIndicator={false}
          value="pro"
          variant="subtle"
        />
      </RadioGroup>
    );
    expect(getByText("Best value")).toBeTruthy();
    expect(container.querySelector(".zui-radio-card__hidden-control")).toBeTruthy();
  });

  it("has no axe violations inside radio group", async () => {
    const { container } = renderWithProvider(
      <RadioGroup defaultValue="standard">
        <RadioCard label="Standard plan" value="standard" />
      </RadioGroup>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
