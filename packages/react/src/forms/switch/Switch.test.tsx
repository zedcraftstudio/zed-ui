import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it } from "vitest";
import { renderWithProvider } from "../../test/render";
import { Switch } from "./Switch";

expect.extend(toHaveNoViolations);

describe("Switch", () => {
  it("renders with label", () => {
    const { getByRole } = renderWithProvider(<Switch label="Notifications" />);
    expect(getByRole("switch", { name: "Notifications" })).toBeTruthy();
  });

  it("renders description without label", () => {
    const { getByText } = renderWithProvider(<Switch description="Alerts only" />);
    expect(getByText("Alerts only")).toBeTruthy();
  });

  it("renders description and track or thumb labels", () => {
    const { container, getByText } = renderWithProvider(
      <Switch
        checked
        color="success"
        description="Receive alerts"
        invalid
        label="Alerts"
        size="sm"
        thumbLabel={{ off: "0", on: "1" }}
        trackLabel={{ off: "Off", on: "On" }}
        variant="raised"
      />
    );
    expect(getByText("Alerts")).toBeTruthy();
    expect(getByText("Receive alerts")).toBeTruthy();
    expect(container.querySelector("[data-has-track-label='true']")).toBeTruthy();
    expect(container.querySelector("[data-invalid='true']")).toBeTruthy();
  });

  it("has no axe violations", async () => {
    const { container } = renderWithProvider(<Switch label="Notifications" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
