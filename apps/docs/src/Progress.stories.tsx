import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "@zed-ui/react";

const meta: Meta<typeof Progress> = {
  title: "Feedback/Progress",
  component: Progress
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = { args: { label: "Upload", showValue: true, value: 60 } };
