import { describe, expect, it } from "vitest";
import { renderWithProvider } from "../../test/render";
import { Text } from "./Text";

describe("Text", () => {
  it("renders body text", () => {
    const { getByText } = renderWithProvider(<Text>Paragraph</Text>);
    expect(getByText("Paragraph")).toBeTruthy();
  });

  it("applies truncate and line clamp styles", () => {
    const { container, rerender } = renderWithProvider(<Text truncate>Clipped</Text>);
    expect(container.querySelector(".zui-text--truncate")).toBeTruthy();

    rerender(
      <Text align="center" lineClamp={2} size="lg" weight="bold">
        Clamped
      </Text>
    );
    const text = container.querySelector(".zui-text") as HTMLElement;
    expect(text.classList.contains("zui-text--line-clamp")).toBe(true);
    expect(text.getAttribute("data-line-clamp")).toBe("2");
    expect(text.style.display).toBe("-webkit-box");
    expect(text.getAttribute("data-weight")).toBe("bold");
  });
});
