import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it } from "vitest";
import { FormField } from "./FormField";
import { Input } from "../input/Input";
import { renderWithProvider } from "../../test/render";

expect.extend(toHaveNoViolations);

describe("FormField", () => {
  it("associates label with control id", () => {
    const { getByLabelText } = renderWithProvider(
      <FormField label="Email">
        <Input placeholder="you@example.com" />
      </FormField>
    );

    const input = getByLabelText("Email") as HTMLInputElement;
    expect(input.tagName).toBe("INPUT");
    expect(input.id).toBeTruthy();
  });

  it("links description and error via aria-describedby", () => {
    const { getByLabelText, getByText } = renderWithProvider(
      <FormField
        description="We never share your email."
        error="Invalid email"
        label="Email"
        required
      >
        <Input />
      </FormField>
    );

    const input = getByLabelText(/Email/) as HTMLInputElement;
    const description = getByText("We never share your email.");
    const error = getByText("Invalid email");

    expect(input.getAttribute("aria-describedby")).toContain(description.id);
    expect(input.getAttribute("aria-describedby")).toContain(error.id);
    expect(input.getAttribute("aria-required")).toBe("true");
    expect(input.required).toBe(true);
    expect(input.getAttribute("aria-invalid")).toBe("true");
  });

  it("wires icons input inside FormField", () => {
    const { getByLabelText } = renderWithProvider(
      <FormField label="Search">
        <Input startIcon={<span aria-hidden>@</span>} />
      </FormField>
    );

    const input = getByLabelText("Search") as HTMLInputElement;
    expect(input.tagName).toBe("INPUT");
    expect(input.id).toBeTruthy();
  });

  it("has no axe violations", async () => {
    const { container } = renderWithProvider(
      <FormField description="Helper text" label="Name" required>
        <Input />
      </FormField>
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
