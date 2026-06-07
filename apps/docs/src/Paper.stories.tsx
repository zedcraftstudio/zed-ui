import type { Meta, StoryObj } from "@storybook/react";
import { Paper, Stack, Text } from "@zed-ui/react";

const meta: Meta<typeof Paper> = {
  title: "Layout/Paper",
  component: Paper,
  args: {
    radius: "md",
    size: "md",
    variant: "elevated"
  }
};

export default meta;
type Story = StoryObj<typeof Paper>;

export const Default: Story = {
  render: (args) => (
    <Paper {...args} style={{ maxWidth: "20rem" }}>
      <Text>Surface for grouping related content.</Text>
    </Paper>
  )
};

export const Variants: Story = {
  render: () => (
    <Stack gap="4">
      {(["elevated", "filled", "outline", "subtle"] as const).map((variant) => (
        <Paper key={variant} variant={variant}>
          <Text size="sm">{variant}</Text>
        </Paper>
      ))}
    </Stack>
  )
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="4" style={{ maxWidth: "20rem" }}>
      {(["sm", "md", "lg"] as const).map((size) => (
        <Paper key={size} size={size} variant="outline">
          <Text size="sm">size={size}</Text>
        </Paper>
      ))}
    </Stack>
  )
};
