import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it } from "vitest";
import { Slider } from "./Slider";
import { renderWithProvider } from "../../test/render";

expect.extend(toHaveNoViolations);

describe("Slider", () => {
  it("renders with label", () => {
    const { getByText } = renderWithProvider(<Slider defaultValue={40} label="Volume" />);
    expect(getByText("Volume")).toBeTruthy();
  });

  it("renders thumb inside the track", () => {
    const { container } = renderWithProvider(<Slider defaultValue={40} label="Volume" />);
    const track = container.querySelector(".zui-slider__track");
    expect(track?.querySelector(".zui-slider__thumb")).toBeTruthy();
    expect(track?.querySelector(".zui-slider__indicator")).toBeTruthy();
  });

  it("renders value header without label", () => {
    const { container } = renderWithProvider(
      <Slider color="success" defaultValue={10} disabled showValue size="sm" />
    );
    expect(container.querySelector(".zui-slider__value")).toBeTruthy();
    expect(container.querySelector("[data-disabled='']")).toBeTruthy();
  });

  it("has no axe violations", async () => {
    const { container } = renderWithProvider(<Slider defaultValue={25} label="Volume" showValue />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
