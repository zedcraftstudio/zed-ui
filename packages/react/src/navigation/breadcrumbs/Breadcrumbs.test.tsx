import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it } from "vitest";
import { BreadcrumbsItem, BreadcrumbsRoot } from "./Breadcrumbs";
import { renderWithProvider } from "../../test/render";

expect.extend(toHaveNoViolations);

describe("Breadcrumbs", () => {
  it("renders items API", () => {
    const { getByText } = renderWithProvider(
      <BreadcrumbsRoot items={[{ href: "/", label: "Home" }, { label: "Components" }]} />
    );

    expect(getByText("Home")).toBeTruthy();
    expect(getByText("Components")).toBeTruthy();
  });

  it("renders compound children with separators as list items", () => {
    const { container } = renderWithProvider(
      <BreadcrumbsRoot>
        <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
        <BreadcrumbsItem current>Docs</BreadcrumbsItem>
      </BreadcrumbsRoot>
    );

    expect(container.querySelectorAll(".zui-breadcrumbs__list > li")).toHaveLength(3);
    expect(container.querySelector(".zui-breadcrumbs__separator-item")).toBeTruthy();
  });

  it("has no axe violations", async () => {
    const { container } = renderWithProvider(
      <BreadcrumbsRoot items={[{ href: "/", label: "Home" }, { label: "Docs" }]} />
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
