import { describe, expect, it } from "vitest";
import { Divider } from "../../layout/divider/Divider";
import { renderWithProvider } from "../../test/render";
import { HStack, Stack, VStack } from "./Stack";

describe("Stack", () => {
  it("renders stacked children", () => {
    const { getByText } = renderWithProvider(
      <Stack gap="2">
        <span>Top</span>
        <span>Bottom</span>
      </Stack>
    );
    expect(getByText("Top")).toBeTruthy();
    expect(getByText("Bottom")).toBeTruthy();
  });

  it("skips null children when separating", () => {
    const { container } = renderWithProvider(
      <Stack separator={<Divider />}>
        <span>One</span>
        {null}
        <span>Two</span>
      </Stack>
    );
    expect(container.querySelectorAll(".zui-divider").length).toBe(1);
  });

  it("renders separators between items", () => {
    const { container } = renderWithProvider(
      <Stack separator={<Divider />}>
        <span>One</span>
        <span>Two</span>
        <span>Three</span>
      </Stack>
    );
    expect(container.querySelectorAll(".zui-divider").length).toBe(2);
  });

  it("renders HStack in row direction", () => {
    const { container } = renderWithProvider(
      <HStack gap="2">
        <span>Left</span>
        <span>Right</span>
      </HStack>
    );
    const stack = container.querySelector(".zui-stack") as HTMLElement;
    expect(stack.style.flexDirection).toBe("row");
  });

  it("renders VStack in column direction", () => {
    const { container } = renderWithProvider(
      <VStack gap="2">
        <span>Up</span>
        <span>Down</span>
      </VStack>
    );
    const stack = container.querySelector(".zui-stack") as HTMLElement;
    expect(stack.style.flexDirection).toBe("column");
  });
});
