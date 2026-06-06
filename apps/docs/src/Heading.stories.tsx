import type { Meta, StoryObj } from "@storybook/react";
import { Button, Flex, Heading, Stack, Text } from "@zed-ui/react";

const meta: Meta<typeof Heading> = {
  title: "Typography/Heading",
  component: Heading,
  args: {
    size: "xl",
    weight: "semibold"
  }
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  render: (args) => (
    <Heading {...args}>The quick brown fox jumps over the lazy dog</Heading>
  )
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="3">
      {(["sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] as const).map((size) => (
        <Heading key={size} size={size}>
          Heading ({size})
        </Heading>
      ))}
    </Stack>
  )
};

export const Weights: Story = {
  render: () => (
    <Stack gap="2">
      <Heading weight="regular">Normal</Heading>
      <Heading weight="medium">Medium</Heading>
      <Heading weight="semibold">Semibold</Heading>
      <Heading weight="bold">Bold</Heading>
    </Stack>
  )
};

export const Levels: Story = {
  render: () => (
    <Stack gap="2">
      <Heading level={1} size="3xl">
        Level 1
      </Heading>
      <Heading level={2} size="2xl">
        Level 2
      </Heading>
      <Heading level={3} size="xl">
        Level 3
      </Heading>
    </Stack>
  )
};

export const Highlight: Story = {
  render: () => (
    <Stack gap="2" style={{ maxWidth: "36rem" }}>
      <Heading size="2xl">
        Create accessible React apps with <mark>speed</mark>
      </Heading>
      <Text color="secondary" size="sm">
        Zed UI is a simple, modular and accessible component library that gives you the
        building blocks you need.
      </Text>
    </Stack>
  )
};

export const Composition: Story = {
  render: () => (
    <Stack gap="3" style={{ maxWidth: "28rem" }}>
      <Heading size="2xl">Modern payments for Stores</Heading>
      <Text color="secondary">
        PayMe helps startups get paid by anyone, anywhere in the world
      </Text>
      <Flex>
        <Button size="sm">Create account</Button>
      </Flex>
    </Stack>
  )
};
