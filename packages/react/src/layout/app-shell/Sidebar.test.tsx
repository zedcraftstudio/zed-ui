import { fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { renderWithProvider } from "../../test/render";
import {
  Sidebar,
  SidebarDivider,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarNav,
  SidebarSection
} from "./Sidebar";

describe("Sidebar", () => {
  it("marks the active item", () => {
    const { getByRole } = renderWithProvider(
      <Sidebar>
        <SidebarNav>
          <SidebarItem active href="/dashboard">
            Dashboard
          </SidebarItem>
        </SidebarNav>
      </Sidebar>
    );

    const link = getByRole("link", { name: "Dashboard" });
    expect(link.getAttribute("data-active")).toBe("");
    expect(link.getAttribute("aria-current")).toBe("page");
  });

  it("sets collapsed width state", () => {
    const { container } = renderWithProvider(
      <Sidebar collapsed>
        <SidebarNav>
          <SidebarItem>Home</SidebarItem>
        </SidebarNav>
      </Sidebar>
    );

    expect(container.querySelector(".zui-sidebar")?.getAttribute("data-collapsed")).toBe("");
  });

  it("renders button item with icon and handles click", () => {
    const onClick = vi.fn();
    const { getByRole } = renderWithProvider(
      <Sidebar>
        <SidebarNav>
          <SidebarItem icon={<span data-testid="icon" />} onClick={onClick}>
            Settings
          </SidebarItem>
        </SidebarNav>
      </Sidebar>
    );
    fireEvent.click(getByRole("button", { name: "Settings" }));
    expect(onClick).toHaveBeenCalled();
  });

  it("renders disabled item as button even with href", () => {
    const { getByRole } = renderWithProvider(
      <Sidebar>
        <SidebarNav>
          <SidebarItem disabled href="/locked">
            Locked
          </SidebarItem>
        </SidebarNav>
      </Sidebar>
    );
    expect(getByRole("button", { name: "Locked" }).hasAttribute("disabled")).toBe(true);
  });

  it("renders header, section, footer, and divider", () => {
    const { getByText, container } = renderWithProvider(
      <Sidebar width="16rem">
        <SidebarHeader>Brand</SidebarHeader>
        <SidebarSection label="Main">
          <SidebarNav>
            <SidebarItem>Home</SidebarItem>
          </SidebarNav>
        </SidebarSection>
        <SidebarDivider />
        <SidebarFooter>Footer</SidebarFooter>
      </Sidebar>
    );
    expect(getByText("Brand")).toBeTruthy();
    expect(getByText("Main")).toBeTruthy();
    expect(getByText("Footer")).toBeTruthy();
    expect(container.querySelector(".zui-sidebar__divider")).toBeTruthy();
  });
});
