import type { Meta, StoryObj } from "@storybook/react";
import { Box, Flex, Spacer, Stack, Text } from "@zed-ui/react";

const meta: Meta<typeof Flex> = {
  title: "Layout/Flex",
  component: Flex
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  render: () => (
    <Flex gap="3">
      <Box p="3" bg="muted" radius="sm">
        <Text size="sm">One</Text>
      </Box>
      <Box p="3" bg="muted" radius="sm">
        <Text size="sm">Two</Text>
      </Box>
    </Flex>
  )
};

export const Direction: Story = {
  render: () => (
    <Stack gap="4">
      <Flex direction="row" gap="2">
        {[1, 2, 3].map((item) => (
          <Box key={item} p="3" bg="muted" radius="sm">
            <Text size="sm">{item}</Text>
          </Box>
        ))}
      </Flex>
      <Flex direction="column" gap="2" style={{ maxWidth: "12rem" }}>
        {[1, 2, 3].map((item) => (
          <Box key={item} p="3" bg="muted" radius="sm">
            <Text size="sm">{item}</Text>
          </Box>
        ))}
      </Flex>
    </Stack>
  )
};

export const Justify: Story = {
  render: () => (
    <Stack gap="3">
      {(["flex-start", "center", "flex-end", "space-between"] as const).map((justify) => (
        <Flex key={justify} justify={justify} gap="2" p="3" bg="surface" radius="md">
          <Box p="2" bg="muted" radius="sm">
            <Text size="sm">{justify}</Text>
          </Box>
          <Box p="2" bg="muted" radius="sm">
            <Text size="sm">B</Text>
          </Box>
        </Flex>
      ))}
    </Stack>
  )
};

export const SpacerExample: Story = {
  name: "Spacer",
  render: () => (
    <Flex align="center" gap="3" width="100%">
      <Box p="3" bg="muted" radius="sm">
        <Text size="sm">Box 1</Text>
      </Box>
      <Spacer />
      <Box p="3" bg="muted" radius="sm">
        <Text size="sm">Box 2</Text>
      </Box>
    </Flex>
  )
};

export const Wrap: Story = {
  render: () => (
    <Flex gap="2" wrap="wrap" style={{ maxWidth: "16rem" }}>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Box key={item} p="3" bg="muted" radius="sm">
          <Text size="sm">{item}</Text>
        </Box>
      ))}
    </Flex>
  )
};
