import type { Meta, StoryObj } from "@storybook/react";
import { FormField, Input, Stack } from "@zed-ui/react";

const meta: Meta<typeof FormField> = {
  title: "Forms/FormField",
  component: FormField
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  render: () => (
    <FormField label="Email" required>
      <Input type="email" placeholder="you@example.com" />
    </FormField>
  )
};

export const WithDescription: Story = {
  render: () => (
    <FormField label="Username" description="Must be unique.">
      <Input placeholder="jane" />
    </FormField>
  )
};

export const WithError: Story = {
  render: () => (
    <Stack gap="4" style={{ maxWidth: "20rem" }}>
      <FormField label="Email" error="Enter a valid email.">
        <Input type="email" placeholder="you@example.com" />
      </FormField>
    </Stack>
  )
};
