import type { Meta, StoryObj } from "@storybook/react";
import { Box, Heading, Stack, Text } from "@zed-ui/react";

const meta: Meta<typeof Box> = {
  title: "Layout/Box",
  component: Box
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  render: () => (
    <Box p="4" radius="md" bg="muted">
      <Text>This is the Box</Text>
    </Box>
  )
};

export const Shorthand: Story = {
  render: () => (
    <Box p="4" bg="surface" radius="md" shadow="sm">
      <Text>This is the Box</Text>
    </Box>
  )
};

export const Border: Story = {
  render: () => (
    <Box borderColor="default" borderWidth="1" color="secondary" p="4" radius="md">
      Somewhat disabled box
    </Box>
  )
};

export const AsSection: Story = {
  render: () => (
    <Box as="section" p="4" radius="md" bg="muted">
      <Text>This is a Box rendered as a section</Text>
    </Box>
  )
};

export const Shadow: Story = {
  render: () => (
    <Box p="6" radius="lg" bg="surface" shadow="md">
      <Heading level={4}>Box with shadow</Heading>
      <Stack gap="2" mt="2">
        <Text color="secondary" size="sm">
          Use the shadow prop for elevation.
        </Text>
      </Stack>
    </Box>
  )
};

export const HoverSurface: Story = {
  render: () => (
    <Box className="zui-box--hover-surface" p="4" radius="md" bg="surface" shadow="sm">
      <Text>Hover this box</Text>
    </Box>
  )
};
