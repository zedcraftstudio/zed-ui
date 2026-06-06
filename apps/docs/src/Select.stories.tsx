import type { Meta, StoryObj } from "@storybook/react";
import { Select, Stack } from "@zed-ui/react";

const OPTIONS = [
  { label: "Design", value: "design" },
  { label: "Engineering", value: "engineering" },
  { label: "Product", value: "product" }
];

const meta: Meta<typeof Select> = {
  title: "Forms/Select",
  component: Select,
  args: {
    options: OPTIONS,
    placeholder: "Choose team"
  }
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <Stack gap="3" style={{ maxWidth: "16rem" }}>
      <Select options={OPTIONS} placeholder="Small" size="sm" />
      <Select options={OPTIONS} placeholder="Medium" size="md" />
      <Select options={OPTIONS} placeholder="Large" size="lg" />
    </Stack>
  )
};

export const Invalid: Story = {
  args: {
    invalid: true,
    placeholder: "Required field"
  }
};
