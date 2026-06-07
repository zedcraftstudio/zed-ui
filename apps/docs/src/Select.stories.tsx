import type { Meta, StoryObj } from "@storybook/react";
import { FormField, Select, Stack } from "@zed-ui/react";

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

export const Default: Story = {
  render: (args) => (
    <FormField label="Team" style={{ maxWidth: "16rem" }}>
      <Select {...args} />
    </FormField>
  )
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="3" style={{ maxWidth: "16rem" }}>
      <FormField label="Small">
        <Select options={OPTIONS} placeholder="Small" size="sm" />
      </FormField>
      <FormField label="Medium">
        <Select options={OPTIONS} placeholder="Medium" size="md" />
      </FormField>
      <FormField label="Large">
        <Select options={OPTIONS} placeholder="Large" size="lg" />
      </FormField>
    </Stack>
  )
};

export const Invalid: Story = {
  render: (args) => (
    <FormField error="Required" label="Team" required style={{ maxWidth: "16rem" }}>
      <Select {...args} />
    </FormField>
  ),
  args: {
    invalid: true,
    placeholder: "Required field"
  }
};
