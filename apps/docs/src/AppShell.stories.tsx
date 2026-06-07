import type { Meta, StoryObj } from "@storybook/react";
import {
  AppShell,
  Button,
  Sidebar,
  SidebarHeader,
  SidebarItem,
  SidebarNav,
  Stack,
  Text,
  TopBar
} from "@zed-ui/react";

const meta: Meta<typeof AppShell> = {
  title: "Layout/AppShell",
  component: AppShell
};

export default meta;
type Story = StoryObj<typeof AppShell>;

function DemoSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>Zed UI</SidebarHeader>
      <SidebarNav>
        <SidebarItem active href="#">
          Dashboard
        </SidebarItem>
        <SidebarItem href="#">Projects</SidebarItem>
        <SidebarItem href="#">Settings</SidebarItem>
      </SidebarNav>
    </Sidebar>
  );
}

export const Default: Story = {
  render: () => (
    <AppShell
      height="auto"
      header={<TopBar actions={<Button size="sm">New</Button>} title="Dashboard" />}
      sidebar={<DemoSidebar />}
      style={{ minHeight: "20rem" }}
    >
      <Stack gap="2">
        <Text>Main content area.</Text>
        <Text color="secondary" size="sm">
          Compose AppShell with TopBar and Sidebar for app chrome.
        </Text>
      </Stack>
    </AppShell>
  )
};

export const WithFooter: Story = {
  render: () => (
    <AppShell
      footer={
        <Text color="secondary" size="sm">
          © Zed UI
        </Text>
      }
      header={<TopBar title="Dashboard" />}
      height="auto"
      sidebar={<DemoSidebar />}
      style={{ minHeight: "18rem" }}
    >
      <Text>Content with footer slot.</Text>
    </AppShell>
  )
};

export const CustomSidebarWidth: Story = {
  render: () => (
    <AppShell
      header={<TopBar title="Narrow nav" />}
      height="auto"
      sidebar={
        <Sidebar>
          <SidebarNav>
            <SidebarItem active href="#">
              Home
            </SidebarItem>
          </SidebarNav>
        </Sidebar>
      }
      sidebarWidth="10rem"
      style={{ minHeight: "14rem" }}
    >
      <Text>Wider main column.</Text>
    </AppShell>
  )
};
