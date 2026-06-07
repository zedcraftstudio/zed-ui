import type { Meta, StoryObj } from "@storybook/react";
import { FormField, MultiSelect, Stack } from "@zed-ui/react";

const OPTIONS = [
  { label: "Design", value: "design" },
  { label: "Engineering", value: "engineering" },
  { label: "Product", value: "product" },
  { label: "Marketing", value: "marketing" }
];

const meta: Meta<typeof MultiSelect> = {
  title: "Forms/MultiSelect",
  component: MultiSelect,
  args: {
    options: OPTIONS,
    placeholder: "Choose teams"
  }
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

export const Default: Story = {
  render: (args) => (
    <FormField label="Teams" style={{ maxWidth: "16rem" }}>
      <MultiSelect {...args} />
    </FormField>
  )
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="3" style={{ maxWidth: "16rem" }}>
      <FormField label="Small">
        <MultiSelect options={OPTIONS} placeholder="Small" size="sm" />
      </FormField>
      <FormField label="Medium">
        <MultiSelect options={OPTIONS} placeholder="Medium" size="md" />
      </FormField>
      <FormField label="Large">
        <MultiSelect options={OPTIONS} placeholder="Large" size="lg" />
      </FormField>
    </Stack>
  )
};
