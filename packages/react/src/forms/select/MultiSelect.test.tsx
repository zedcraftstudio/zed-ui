import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it } from "vitest";
import { renderWithProvider } from "../../test/render";
import { FormField } from "../form-field/FormField";
import { MultiSelect } from "./Select";

expect.extend(toHaveNoViolations);

const options = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" }
];

describe("MultiSelect", () => {
  it("renders combobox trigger", () => {
    const { getByRole } = renderWithProvider(
      <MultiSelect options={options} placeholder="Pick fruits" />
    );
    expect(getByRole("combobox")).toBeTruthy();
  });

  it("has no axe violations when labeled", async () => {
    const { container } = renderWithProvider(
      <FormField label="Fruits">
        <MultiSelect options={options} placeholder="Pick fruits" />
      </FormField>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
