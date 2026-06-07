import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "@zed-ui/react";

const meta: Meta<typeof Slider> = {
  title: "Forms/Slider",
  component: Slider
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = { args: { defaultValue: 40, label: "Volume", showValue: true } };
