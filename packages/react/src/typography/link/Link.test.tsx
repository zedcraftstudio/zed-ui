import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it } from "vitest";
import { renderWithProvider } from "../../test/render";
import { Link } from "./Link";

expect.extend(toHaveNoViolations);

describe("Link", () => {
  it("renders an anchor", () => {
    const { getByRole } = renderWithProvider(<Link href="/docs">Docs</Link>);
    expect(getByRole("link", { name: "Docs" }).getAttribute("href")).toBe("/docs");
  });

  it("applies external link defaults", () => {
    const { getByRole } = renderWithProvider(
      <Link external href="https://example.com">
        External
      </Link>
    );
    const link = getByRole("link", { name: "External" });
    expect(link.getAttribute("target")).toBe("_blank");
    expect(link.getAttribute("rel")).toBe("noopener noreferrer");
  });

  it("supports custom external rel and target", () => {
    const { getByRole } = renderWithProvider(
      <Link external href="https://example.com" rel="nofollow" target="_self">
        Custom
      </Link>
    );
    const link = getByRole("link", { name: "Custom" });
    expect(link.getAttribute("target")).toBe("_self");
    expect(link.getAttribute("rel")).toBe("nofollow");
  });

  it("applies underline and color data attributes", () => {
    const { getByRole } = renderWithProvider(
      <Link color="danger" href="/warn" underline="always">
        Warn
      </Link>
    );
    const link = getByRole("link", { name: "Warn" });
    expect(link.getAttribute("data-underline")).toBe("always");
    expect(link.getAttribute("data-color")).toBe("danger");
  });

  it("has no axe violations", async () => {
    const { container } = renderWithProvider(<Link href="/docs">Docs</Link>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
