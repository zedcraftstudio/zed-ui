import { fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { renderWithProvider } from "../../test/render";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders label text", () => {
    const { getByText } = renderWithProvider(<Badge>New</Badge>);
    expect(getByText("New")).toBeTruthy();
  });

  it("caps numeric content with max", () => {
    const { getByText } = renderWithProvider(<Badge max={99}>{120}</Badge>);
    expect(getByText("99+")).toBeTruthy();
  });

  it("renders dot variant", () => {
    const { container } = renderWithProvider(<Badge variant="dot">Live</Badge>);
    expect(container.querySelector('.zui-badge[data-variant="dot"]')).toBeTruthy();
  });

  it("renders avatar and close button", () => {
    const onClose = vi.fn();
    const { getByRole, container } = renderWithProvider(
      <Badge
        avatar={{ fallback: "ZK", src: "/a.png" }}
        onClose={onClose}
        startIcon={<span>★</span>}
      >
        New
      </Badge>
    );
    expect(container.querySelector(".zui-badge__avatar")).toBeTruthy();
    fireEvent.click(getByRole("button", { name: "Remove badge" }));
    expect(onClose).toHaveBeenCalled();
  });

  it("renders status dot", () => {
    const { container } = renderWithProvider(<Badge statusDot>New</Badge>);
    expect(container.querySelector(".zui-badge__status-dot")).toBeTruthy();
  });
});
