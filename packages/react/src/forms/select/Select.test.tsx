import { describe, expect, it } from "vitest";
import { Select } from "./Select";
import { renderWithProvider } from "../../test/render";

const OPTIONS = [
  { label: "Design", value: "design" },
  { label: "Engineering", value: "engineering" }
];

describe("Select", () => {
  it("renders a combobox trigger", () => {
    const { getByRole } = renderWithProvider(
      <Select defaultValue="design" options={OPTIONS} placeholder="Choose team" />
    );

    expect(getByRole("combobox")).toBeTruthy();
  });

  it("shows the selected option label", () => {
    const { getByRole } = renderWithProvider(
      <Select defaultValue="design" options={OPTIONS} placeholder="Choose team" />
    );

    expect(getByRole("combobox").textContent).toContain("Design");
  });
});
