import { describe, expect, it } from "vitest";
import { renderWithProvider } from "../../test/render";
import { BadgeAnchor } from "./BadgeAnchor";

describe("BadgeAnchor", () => {
  it("renders count badge", () => {
    const { getByText } = renderWithProvider(
      <BadgeAnchor content={3}>
        <span>Inbox</span>
      </BadgeAnchor>
    );
    expect(getByText("Inbox")).toBeTruthy();
    expect(getByText("3")).toBeTruthy();
  });

  it("renders dot badge", () => {
    const { container } = renderWithProvider(
      <BadgeAnchor content={1} dot>
        <span>Alerts</span>
      </BadgeAnchor>
    );
    expect(container.querySelector(".zui-badge-anchor[data-dot]")).toBeTruthy();
  });

  it("hides zero count by default", () => {
    const { queryByText } = renderWithProvider(
      <BadgeAnchor content={0}>
        <span>Empty</span>
      </BadgeAnchor>
    );
    expect(queryByText("0")).toBeNull();
  });

  it("shows zero when showZero is set", () => {
    const { getByText } = renderWithProvider(
      <BadgeAnchor content={0} showZero>
        <span>Empty</span>
      </BadgeAnchor>
    );
    expect(getByText("0")).toBeTruthy();
  });
});
