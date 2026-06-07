import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "@zed-ui/react";

const meta: Meta<typeof Link> = {
  title: "Typography/Link",
  component: Link
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = { args: { children: "Documentation", href: "#" } };
export const External: Story = {
  args: { children: "GitHub", href: "https://github.com", external: true }
};
