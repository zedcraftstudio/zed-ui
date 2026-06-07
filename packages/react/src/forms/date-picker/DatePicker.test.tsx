import { waitFor } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it, vi } from "vitest";
import { renderWithProvider } from "../../test/render";
import { FormField } from "../form-field/FormField";
import { DatePicker } from "./DatePicker";

expect.extend(toHaveNoViolations);

describe("DatePicker", () => {
  it("renders a trigger button", () => {
    const { getByRole } = renderWithProvider(<DatePicker placeholder="Pick a date" />);
    expect(getByRole("button", { name: /pick a date/i })).toBeTruthy();
  });

  it("sets data-invalid when invalid", () => {
    const { getByRole } = renderWithProvider(<DatePicker invalid placeholder="Date" />);
    expect(getByRole("button").getAttribute("data-invalid")).toBe("true");
  });

  it("does not render a blocking backdrop when open", () => {
    const { getByRole } = renderWithProvider(<DatePicker placeholder="Pick a date" />);
    getByRole("button", { name: /pick a date/i }).click();
    expect(document.querySelector(".zui-popover__backdrop")).toBeNull();
  });

  it("displays formatted value", () => {
    const { getByRole } = renderWithProvider(<DatePicker value={new Date(2026, 5, 15)} />);
    expect(getByRole("button").textContent).toContain("6/15/2026");
  });

  it("selects a date and calls onValueChange", async () => {
    const onValueChange = vi.fn();
    const { getByRole } = renderWithProvider(
      <DatePicker placeholder="Pick a date" onValueChange={onValueChange} />
    );
    getByRole("button", { name: /pick a date/i }).click();
    await waitFor(() => {
      expect(document.querySelector(".zui-calendar")).toBeTruthy();
    });
    const day = document.querySelector(
      ".zui-calendar__day:not([disabled])"
    ) as HTMLButtonElement | null;
    day?.click();
    expect(onValueChange).toHaveBeenCalled();
  });

  it("has no axe violations when labeled", async () => {
    const { container } = renderWithProvider(
      <FormField label="Start date">
        <DatePicker placeholder="Pick a date" />
      </FormField>
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
