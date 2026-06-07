import type { Meta, StoryObj } from "@storybook/react";
import { Divider, Flex, Stack, Text } from "@zed-ui/react";

const meta: Meta<typeof Divider> = {
  title: "Layout/Divider",
  component: Divider
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  render: () => (
    <Stack gap="4" style={{ maxWidth: "20rem" }}>
      <Text size="sm">Section one</Text>
      <Divider />
      <Text size="sm">Section two</Text>
    </Stack>
  )
};

export const WithLabel: Story = {
  render: () => (
    <Stack gap="4" style={{ maxWidth: "20rem" }}>
      <Text size="sm">Content above</Text>
      <Divider label="or" />
      <Text size="sm">Content below</Text>
    </Stack>
  )
};

export const Vertical: Story = {
  render: () => (
    <Flex align="center" gap="4" style={{ height: "3rem" }}>
      <Text size="sm">Left</Text>
      <Divider orientation="vertical" />
      <Text size="sm">Right</Text>
    </Flex>
  )
};
