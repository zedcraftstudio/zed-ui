import { describe, expect, it } from "vitest";
import { renderWithProvider } from "../../test/render";
import { Paper } from "./Paper";

describe("Paper", () => {
  it("renders children", () => {
    const { getByText } = renderWithProvider(<Paper>Surface</Paper>);
    expect(getByText("Surface")).toBeTruthy();
  });
});
