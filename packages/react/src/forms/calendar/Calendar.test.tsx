import { fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Calendar } from "./Calendar";
import { renderWithProvider } from "../../test/render";

describe("Calendar", () => {
  it("renders weekday labels", () => {
    const { getByText } = renderWithProvider(<Calendar value={new Date(2026, 5, 7)} />);

    expect(getByText("Mo")).toBeTruthy();
    expect(getByText("Fr")).toBeTruthy();
  });

  it("disables day buttons when disabled", () => {
    const { container } = renderWithProvider(
      <Calendar disabled month={new Date(2026, 5, 1)} value={null} />
    );
    const buttons = container.querySelectorAll(".zui-calendar__day");
    expect(buttons.length).toBeGreaterThan(0);
    buttons.forEach((button) => {
      expect((button as HTMLButtonElement).disabled).toBe(true);
    });
  });

  it("respects min and max bounds", () => {
    const { getByLabelText } = renderWithProvider(
      <Calendar
        max={new Date(2026, 5, 10)}
        min={new Date(2026, 5, 5)}
        month={new Date(2026, 5, 1)}
        value={null}
      />
    );
    expect(getByLabelText("6/4/2026").hasAttribute("disabled")).toBe(true);
    expect(getByLabelText("6/11/2026").hasAttribute("disabled")).toBe(true);
  });

  it("calls onValueChange when a day is clicked", () => {
    const onValueChange = vi.fn();
    const { getByLabelText } = renderWithProvider(
      <Calendar month={new Date(2026, 5, 1)} value={null} onValueChange={onValueChange} />
    );

    getByLabelText("6/15/2026").click();
    expect(onValueChange).toHaveBeenCalled();
  });

  it("updates uncontrolled month on navigation", () => {
    const onMonthChange = vi.fn();
    const { getByRole } = renderWithProvider(
      <Calendar value={new Date(2026, 5, 7)} onMonthChange={onMonthChange} />
    );

    fireEvent.click(getByRole("button", { name: "Go to the Next Month" }));
    expect(onMonthChange).toHaveBeenCalled();
  });
});
