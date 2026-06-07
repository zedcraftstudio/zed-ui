import { describe, expect, it } from "vitest";
import { renderWithProvider } from "../../test/render";
import { Container } from "./Container";

describe("Container", () => {
  it("renders children", () => {
    const { getByText } = renderWithProvider(<Container>Page</Container>);
    expect(getByText("Page")).toBeTruthy();
  });
});
