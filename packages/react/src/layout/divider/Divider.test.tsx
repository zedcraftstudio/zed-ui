import { describe, expect, it } from "vitest";
import { renderWithProvider } from "../../test/render";
import { Divider } from "./Divider";

describe("Divider", () => {
  it("renders a separator", () => {
    const { getByRole } = renderWithProvider(<Divider />);
    expect(getByRole("separator")).toBeTruthy();
  });

  it("renders labeled divider text", () => {
    const { getByText } = renderWithProvider(<Divider label="or" />);
    expect(getByText("or")).toBeTruthy();
  });
});
