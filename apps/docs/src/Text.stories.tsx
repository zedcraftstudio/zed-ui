import type { Meta, StoryObj } from "@storybook/react";
import { Stack, Text } from "@zed-ui/react";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const meta: Meta<typeof Text> = {
  title: "Typography/Text",
  component: Text,
  args: {
    size: "md",
    weight: "regular"
  }
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  render: (args) => <Text {...args}>Sphinx of black quartz, judge my vow.</Text>
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="1">
      {(["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] as const).map((size) => (
        <Text key={size} size={size}>
          ZUI
        </Text>
      ))}
    </Stack>
  )
};

export const Weights: Story = {
  render: () => (
    <Stack gap="2">
      <Text weight="regular">Sphinx of black quartz, judge my vow.</Text>
      <Text weight="medium">Sphinx of black quartz, judge my vow.</Text>
      <Text weight="semibold">Sphinx of black quartz, judge my vow.</Text>
      <Text weight="bold">Sphinx of black quartz, judge my vow.</Text>
    </Stack>
  )
};

export const Truncate: Story = {
  render: () => (
    <Text truncate style={{ maxWidth: "16rem" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Text>
  )
};

export const LineClamp: Story = {
  render: () => (
    <Text lineClamp={2} style={{ maxWidth: "20rem" }}>
      {LOREM}
    </Text>
  )
};

export const Colors: Story = {
  render: () => (
    <Stack gap="1">
      <Text color="primary">Primary text</Text>
      <Text color="secondary">Secondary text</Text>
      <Text color="muted">Muted text</Text>
    </Stack>
  )
};
