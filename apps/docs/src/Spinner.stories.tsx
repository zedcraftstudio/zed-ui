import type { Meta, StoryObj } from "@storybook/react";
import { Spinner, Stack } from "@zed-ui/react";

const meta: Meta<typeof Spinner> = {
  title: "Feedback/Spinner",
  component: Spinner,
  args: {
    "aria-label": "Loading"
  }
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" align="center" gap="4">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </Stack>
  )
};
