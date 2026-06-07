import type { Meta, StoryObj } from "@storybook/react";
import { Button, Text, TopBar } from "@zed-ui/react";

const meta: Meta<typeof TopBar> = {
  title: "Layout/TopBar",
  component: TopBar
};

export default meta;
type Story = StoryObj<typeof TopBar>;

export const Default: Story = {
  render: () => <TopBar brand="Zed UI" title="Dashboard" />
};

export const WithActions: Story = {
  render: () => (
    <TopBar actions={<Button size="sm">Create</Button>} title="Projects" />
  )
};

export const Small: Story = {
  render: () => <TopBar size="sm" title="Small top bar" />
};

export const Medium: Story = {
  render: () => <TopBar size="md" title="Medium top bar" />
};

export const Large: Story = {
  render: () => <TopBar size="lg" title="Large top bar" />
};

export const WithContent: Story = {
  render: () => (
    <TopBar actions={<Button size="sm">Save</Button>} title="Settings">
      <Text color="secondary" size="sm">
        Profile / Security
      </Text>
    </TopBar>
  )
};
