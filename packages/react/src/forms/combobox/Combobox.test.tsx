import { axe, toHaveNoViolations } from "jest-axe";
import { fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithProvider } from "../../test/render";
import { FormField } from "../form-field/FormField";
import { Combobox } from "./Combobox";

expect.extend(toHaveNoViolations);

const OPTIONS = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" }
];

describe("Combobox", () => {
  it("renders a combobox input", () => {
    const { getByRole } = renderWithProvider(
      <Combobox defaultValue="apple" options={OPTIONS} placeholder="Choose fruit" />
    );

    expect(getByRole("combobox")).toBeTruthy();
  });

  it("shows the selected option label in the input", () => {
    const { getByRole } = renderWithProvider(
      <Combobox defaultValue="banana" options={OPTIONS} placeholder="Choose fruit" />
    );

    expect((getByRole("combobox") as HTMLInputElement).value).toContain("Banana");
  });

  it("filters options while typing", () => {
    const { getByRole } = renderWithProvider(
      <Combobox options={OPTIONS} placeholder="Choose fruit" />
    );
    const input = getByRole("combobox") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "ban" } });
    expect(input.value).toBe("ban");
  });

  it("renders invalid disabled combobox with custom size", () => {
    const { container, getByRole } = renderWithProvider(
      <Combobox aria-label="Fruit" disabled invalid options={OPTIONS} size="sm" />
    );
    expect(getByRole("combobox").hasAttribute("disabled")).toBe(true);
    expect(container.querySelector("[data-invalid='true']")).toBeTruthy();
  });

  it("has no axe violations when labeled", async () => {
    const { container } = renderWithProvider(
      <FormField label="Fruit">
        <Combobox options={OPTIONS} placeholder="Choose fruit" />
      </FormField>
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
