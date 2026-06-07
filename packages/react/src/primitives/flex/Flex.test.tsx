import { describe, expect, it } from "vitest";
import { renderWithProvider } from "../../test/render";
import { Flex, FlexParts, Spacer } from "./Flex";

describe("Flex", () => {
  it("renders a flex layout", () => {
    const { getByText } = renderWithProvider(
      <Flex gap="2">
        <span>One</span>
        <span>Two</span>
      </Flex>
    );
    expect(getByText("One")).toBeTruthy();
    expect(getByText("Two")).toBeTruthy();
  });

  it("exposes compound namespace", () => {
    expect(FlexParts.Root).toBe(Flex);
  });

  it("renders spacer between items", () => {
    const { container } = renderWithProvider(
      <Flex>
        <span>Left</span>
        <Spacer />
        <span>Right</span>
      </Flex>
    );
    expect(container.querySelector(".zui-spacer")).toBeTruthy();
  });

  it("applies align and justify via style", () => {
    const { container } = renderWithProvider(
      <Flex align="center" justify="space-between">
        <span>Item</span>
      </Flex>
    );
    const flex = container.querySelector(".zui-flex") as HTMLElement;
    expect(flex.style.alignItems).toBe("center");
    expect(flex.style.justifyContent).toBe("space-between");
  });
});
