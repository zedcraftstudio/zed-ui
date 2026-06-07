import { describe, expect, it } from "vitest";
import { Button } from "../../actions/button/Button";
import { renderWithProvider } from "../../test/render";
import { TopBar, TopBarActions, TopBarBrand, TopBarTitle } from "./TopBar";

describe("TopBar", () => {
  it("renders title and brand", () => {
    const { getByText } = renderWithProvider(<TopBar brand="Zed UI" title="Dashboard" />);
    expect(getByText("Zed UI")).toBeTruthy();
    expect(getByText("Dashboard")).toBeTruthy();
  });

  it("renders actions slot", () => {
    const { getByRole } = renderWithProvider(
      <TopBar actions={<Button size="sm">Create</Button>} title="Projects" />
    );
    expect(getByRole("button", { name: "Create" })).toBeTruthy();
  });

  it("renders children in content area", () => {
    const { getByText } = renderWithProvider(<TopBar title="App">Search bar</TopBar>);
    expect(getByText("Search bar")).toBeTruthy();
  });

  it("renders compound parts", () => {
    const { getByText, getByRole } = renderWithProvider(
      <TopBar>
        <TopBarBrand>Brand</TopBarBrand>
        <TopBarTitle>Title</TopBarTitle>
        <TopBarActions>
          <Button>Go</Button>
        </TopBarActions>
      </TopBar>
    );
    expect(getByText("Brand")).toBeTruthy();
    expect(getByRole("heading", { name: "Title" })).toBeTruthy();
    expect(getByRole("button", { name: "Go" })).toBeTruthy();
  });

  it("applies sticky and border data attributes", () => {
    const { container } = renderWithProvider(<TopBar border={false} sticky title="Sticky" />);
    const bar = container.querySelector(".zui-topbar");
    expect(bar?.getAttribute("data-sticky")).toBe("");
    expect(bar?.hasAttribute("data-border")).toBe(false);
  });
});
