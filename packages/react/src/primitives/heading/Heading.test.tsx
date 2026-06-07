import { describe, expect, it } from "vitest";
import { renderWithProvider } from "../../test/render";
import { Heading } from "./Heading";

describe("Heading", () => {
  it("renders a heading", () => {
    const { getByRole } = renderWithProvider(<Heading>Title</Heading>);
    expect(getByRole("heading", { name: "Title" })).toBeTruthy();
  });
});
