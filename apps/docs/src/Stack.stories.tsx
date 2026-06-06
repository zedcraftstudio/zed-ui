import type { Meta, StoryObj } from "@storybook/react";
import { Box, HStack, Stack, Text, VStack } from "@zed-ui/react";

const meta: Meta<typeof Stack> = {
  title: "Layout/Stack",
  component: Stack
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  render: () => (
    <Stack gap="2">
      <Text>First</Text>
      <Text>Second</Text>
      <Text>Third</Text>
    </Stack>
  )
};

export const Horizontal: Story = {
  render: () => (
    <Stack direction="row" gap="3" align="center">
      <Text>One</Text>
      <Text>Two</Text>
      <Text>Three</Text>
    </Stack>
  )
};

export const HStackExample: Story = {
  name: "HStack",
  render: () => (
    <HStack gap="3">
      <Box p="3" bg="muted" radius="sm">
        <Text size="sm">One</Text>
      </Box>
      <Box p="3" bg="muted" radius="sm">
        <Text size="sm">Two</Text>
      </Box>
    </HStack>
  )
};

export const VStackExample: Story = {
  name: "VStack",
  render: () => (
    <VStack align="stretch" gap="2" style={{ maxWidth: "12rem" }}>
      <Box p="3" bg="muted" radius="sm">
        <Text size="sm">One</Text>
      </Box>
      <Box p="3" bg="muted" radius="sm">
        <Text size="sm">Two</Text>
      </Box>
    </VStack>
  )
};

export const Separator: Story = {
  render: () => (
    <Stack
      direction="row"
      gap="4"
      separator={<Box aria-hidden className="zui-stack__separator" data-orientation="vertical" />}
    >
      <Text>One</Text>
      <Text>Two</Text>
      <Text>Three</Text>
    </Stack>
  )
};
