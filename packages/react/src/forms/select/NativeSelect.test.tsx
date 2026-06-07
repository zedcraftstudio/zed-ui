import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it, vi } from "vitest";
import { renderWithProvider } from "../../test/render";
import { FormField } from "../form-field/FormField";
import { NativeSelect } from "./NativeSelect";

expect.extend(toHaveNoViolations);

vi.mock("@zed-ui/utils", async () => {
  const actual = await vi.importActual<typeof import("@zed-ui/utils")>("@zed-ui/utils");
  return { ...actual, devWarn: vi.fn() };
});

const options = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" }
];

describe("NativeSelect", () => {
  it("renders native select with options", () => {
    const { getByRole } = renderWithProvider(
      <FormField label="Fruit">
        <NativeSelect options={options} />
      </FormField>
    );
    expect(getByRole("combobox", { name: "Fruit" })).toBeTruthy();
  });

  it("renders placeholder and disabled options", () => {
    const { getByRole } = renderWithProvider(
      <NativeSelect
        invalid
        options={[{ disabled: true, label: "Grape", value: "grape" }, ...options]}
        placeholder="Choose fruit"
        size="lg"
      />
    );
    const select = getByRole("combobox") as HTMLSelectElement;
    expect(select.querySelector("option[disabled]")?.textContent).toBe("Choose fruit");
    expect(select.getAttribute("data-invalid")).toBe("true");
  });

  it("has no axe violations when labeled", async () => {
    const { container } = renderWithProvider(
      <FormField label="Fruit">
        <NativeSelect options={options} />
      </FormField>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
