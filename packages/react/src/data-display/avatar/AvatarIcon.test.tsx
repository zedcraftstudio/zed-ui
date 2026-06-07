import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { AvatarIcon } from "./AvatarIcon";

describe("AvatarIcon", () => {
  it("renders an aria-hidden svg", () => {
    const { container } = render(<AvatarIcon data-testid="icon" />);
    const svg = container.querySelector("svg");
    expect(svg?.getAttribute("aria-hidden")).toBe("true");
  });
});
