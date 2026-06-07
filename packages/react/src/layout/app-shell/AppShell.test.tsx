import { describe, expect, it } from "vitest";
import { AppShell } from "./AppShell";
import { Sidebar, SidebarItem, SidebarNav } from "./Sidebar";
import { TopBar } from "./TopBar";
import { renderWithProvider } from "../../test/render";

describe("AppShell", () => {
  it("renders header, sidebar, main, and footer slots", () => {
    const { getByText } = renderWithProvider(
      <AppShell
        footer={<div>Footer</div>}
        header={<TopBar title="Header" />}
        height="auto"
        sidebar={
          <Sidebar>
            <SidebarNav>
              <SidebarItem active>Home</SidebarItem>
            </SidebarNav>
          </Sidebar>
        }
      >
        Main
      </AppShell>
    );

    expect(getByText("Header")).toBeTruthy();
    expect(getByText("Home")).toBeTruthy();
    expect(getByText("Main")).toBeTruthy();
    expect(getByText("Footer")).toBeTruthy();
  });

  it("renders without optional chrome", () => {
    const { getByText, queryByText } = renderWithProvider(<AppShell>Only main</AppShell>);
    expect(getByText("Only main")).toBeTruthy();
    expect(queryByText("Footer")).toBeNull();
  });

  it("does not nest duplicate header or aside elements", () => {
    const { container } = renderWithProvider(
      <AppShell
        header={<TopBar title="Header" />}
        height="auto"
        sidebar={
          <Sidebar>
            <SidebarNav>
              <SidebarItem>Nav</SidebarItem>
            </SidebarNav>
          </Sidebar>
        }
      >
        Main
      </AppShell>
    );

    expect(container.querySelectorAll("header")).toHaveLength(1);
    expect(container.querySelectorAll("nav")).toHaveLength(1);
  });
});
