import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it } from "vitest";
import { renderWithProvider } from "../../test/render";
import { FormField } from "../form-field/FormField";
import { Select } from "./Select";

expect.extend(toHaveNoViolations);

const options = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" }
];

describe("Select", () => {
  it("renders combobox trigger", () => {
    const { getByRole } = renderWithProvider(
      <Select options={options} placeholder="Pick a fruit" />
    );

    expect(getByRole("combobox")).toBeTruthy();
  });

  it("opens listbox and shows options", async () => {
    const { findByText, getByRole } = renderWithProvider(
      <FormField label="Fruit">
        <Select options={options} placeholder="Pick a fruit" />
      </FormField>
    );
    getByRole("combobox", { name: "Fruit" }).click();
    expect(await findByText("Apple")).toBeTruthy();
    expect(await findByText("Banana")).toBeTruthy();
  });

  it("renders invalid disabled select with value", () => {
    const { container, getByRole } = renderWithProvider(
      <Select defaultValue="apple" disabled invalid options={options} size="sm" />
    );
    expect(getByRole("combobox").hasAttribute("disabled")).toBe(true);
    expect(container.querySelector("[data-invalid='true']")).toBeTruthy();
  });

  it("has no axe violations when labeled", async () => {
    const { container } = renderWithProvider(
      <FormField label="Fruit">
        <Select options={options} placeholder="Pick a fruit" />
      </FormField>
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
