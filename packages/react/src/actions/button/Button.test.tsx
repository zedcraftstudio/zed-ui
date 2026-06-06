import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ThemeProvider } from "@zed-ui/themes";
import { Button } from "./Button";

describe("Button", () => {
  it("renders a typed button by default", () => {
    render(
      <ThemeProvider>
        <Button>Save</Button>
      </ThemeProvider>
    );
    expect(screen.getByRole("button", { name: "Save" }).getAttribute("type")).toBe("button");
  });

  it("supports polymorphic anchors", () => {
    render(
      <ThemeProvider>
        <Button as="a" href="/docs" variant="ghost">
          Docs
        </Button>
      </ThemeProvider>
    );
    expect(screen.getByRole("link", { name: "Docs" }).getAttribute("href")).toBe("/docs");
  });

  it("applies data attributes for styling hooks", () => {
    render(
      <ThemeProvider>
        <Button color="danger" size="lg" variant="outline">
          Delete
        </Button>
      </ThemeProvider>
    );
    const button = screen.getByRole("button", { name: "Delete" });
    expect(button.getAttribute("data-variant")).toBe("outline");
    expect(button.getAttribute("data-size")).toBe("lg");
    expect(button.getAttribute("data-color")).toBe("danger");
  });

  it("supports asChild via Slot", () => {
    render(
      <ThemeProvider>
        <Button asChild variant="link">
          <a href="/home">Home</a>
        </Button>
      </ThemeProvider>
    );
    const link = screen.getByRole("link", { name: "Home" });
    expect(link.getAttribute("href")).toBe("/home");
    expect(link.getAttribute("data-variant")).toBe("link");
  });
});
