import { describe, expect, it } from "vitest";
import { renderWithProvider } from "../../test/render";
import { Skeleton } from "./Skeleton";

import { SkeletonCircle, SkeletonText } from "./Skeleton";

describe("Skeleton", () => {
  it("renders with loading semantics", () => {
    const { getByLabelText } = renderWithProvider(<Skeleton aria-label="Loading content" />);
    expect(getByLabelText("Loading content")).toBeTruthy();
  });

  it("renders circle skeleton with size", () => {
    const { container } = renderWithProvider(<SkeletonCircle size="lg" />);
    expect(container.querySelector('.zui-skeleton-circle[data-size="lg"]')).toBeTruthy();
  });

  it("renders text skeleton lines", () => {
    const { container } = renderWithProvider(<SkeletonText noOfLines={4} />);
    expect(container.querySelectorAll(".zui-skeleton").length).toBe(4);
  });

  it("uses none variant when animated is false", () => {
    const { container } = renderWithProvider(<Skeleton animated={false} />);
    expect(container.querySelector('.zui-skeleton[data-variant="none"]')).toBeTruthy();
  });
});
