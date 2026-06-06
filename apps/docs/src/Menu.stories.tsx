import type { Meta, StoryObj } from "@storybook/react";
import { Button, Menu } from "@zed-ui/react";

const meta: Meta<typeof Menu.Root> = {
  title: "Navigation/Menu",
  component: Menu.Root,
  args: {
    size: "md"
  }
};

export default meta;
type Story = StoryObj<typeof Menu.Root>;

export const Default: Story = {
  render: (args) => (
    <Menu.Root {...args}>
      <Menu.Trigger render={<Button variant="outline">Actions</Button>} />
      <Menu.Portal>
        <Menu.Positioner>
          <Menu.Popup>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>Duplicate</Menu.Item>
            <Menu.Separator />
            <Menu.Item>Delete</Menu.Item>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  )
};

export const Grouped: Story = {
  render: () => (
    <Menu.Root>
      <Menu.Trigger render={<Button size="sm">Open menu</Button>} />
      <Menu.Portal>
        <Menu.Positioner>
          <Menu.Popup>
            <Menu.Group>
              <Menu.GroupLabel>Account</Menu.GroupLabel>
              <Menu.Item>Profile</Menu.Item>
              <Menu.Item>Billing</Menu.Item>
            </Menu.Group>
            <Menu.Separator />
            <Menu.Item>Sign out</Menu.Item>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  )
};
