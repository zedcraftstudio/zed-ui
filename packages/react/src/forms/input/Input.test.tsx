import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it } from "vitest";
import { FormField } from "../form-field/FormField";
import { Input } from "./Input";
import { renderWithProvider } from "../../test/render";

expect.extend(toHaveNoViolations);

describe("Input", () => {
  it("has no axe violations inside FormField", async () => {
    const { container } = renderWithProvider(
      <FormField description="Your display name" label="Name" required>
        <Input placeholder="Jane Doe" />
      </FormField>
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
