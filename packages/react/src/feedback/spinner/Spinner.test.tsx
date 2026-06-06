import { describe, expect, it } from "vitest";
import { Spinner } from "./Spinner";
import { renderWithProvider } from "../../test/render";

describe("Spinner", () => {
  it("exposes status semantics without aria-hidden", () => {
    const { getByRole } = renderWithProvider(<Spinner />);
    const status = getByRole("status");

    expect(status.getAttribute("aria-hidden")).toBeNull();
    expect(status.getAttribute("aria-label")).toBe("Loading");
  });

  it("supports a custom aria-label", () => {
    const { getByRole } = renderWithProvider(<Spinner aria-label="Saving changes" />);

    expect(getByRole("status", { name: "Saving changes" })).toBeTruthy();
  });
});
