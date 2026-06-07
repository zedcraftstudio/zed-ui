import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Button,
  Sidebar,
  SidebarHeader,
  SidebarItem,
  SidebarNav,
  SidebarSection,
  Stack
} from "@zed-ui/react";

const meta: Meta<typeof Sidebar> = {
  title: "Layout/Sidebar",
  component: Sidebar
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: () => (
    <Sidebar style={{ minHeight: "14rem" }}>
      <SidebarHeader>Zed UI</SidebarHeader>
      <SidebarNav>
        <SidebarItem active href="#">
          Dashboard
        </SidebarItem>
        <SidebarItem href="#">Projects</SidebarItem>
        <SidebarItem href="#">Settings</SidebarItem>
      </SidebarNav>
    </Sidebar>
  )
};

export const WithSections: Story = {
  render: () => (
    <Sidebar style={{ minHeight: "16rem" }}>
      <SidebarHeader>Zed UI</SidebarHeader>
      <SidebarNav>
        <SidebarItem active href="#">
          Dashboard
        </SidebarItem>
      </SidebarNav>
      <SidebarSection label="Workspace">
        <SidebarNav>
          <SidebarItem href="#">Team</SidebarItem>
          <SidebarItem href="#">Billing</SidebarItem>
        </SidebarNav>
      </SidebarSection>
    </Sidebar>
  )
};

function ControlledCollapsedStory() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Stack gap="3">
      <Sidebar collapsed={collapsed} style={{ minHeight: "14rem" }}>
        <SidebarHeader>Z</SidebarHeader>
        <SidebarNav>
          <SidebarItem active href="#" icon="◎">
            Dashboard
          </SidebarItem>
          <SidebarItem href="#" icon="◇">
            Projects
          </SidebarItem>
        </SidebarNav>
      </Sidebar>
      <Button size="sm" variant="outline" onClick={() => setCollapsed((value) => !value)}>
        Toggle collapsed
      </Button>
    </Stack>
  );
}

export const Collapsed: Story = {
  render: () => <ControlledCollapsedStory />
};
