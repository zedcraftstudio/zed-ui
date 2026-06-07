import { describe, expect, it } from "vitest";
import { renderWithProvider } from "../../test/render";
import { Box } from "./Box";

describe("Box", () => {
  it("renders children", () => {
    const { getByText } = renderWithProvider(<Box>Content</Box>);
    expect(getByText("Content")).toBeTruthy();
  });

  it("merges props with asChild", () => {
    const { getByRole } = renderWithProvider(
      <Box asChild className="custom">
        <button type="button">Action</button>
      </Box>
    );
    const button = getByRole("button", { name: "Action" });
    expect(button.className).toContain("zui-box");
    expect(button.className).toContain("custom");
  });
});
