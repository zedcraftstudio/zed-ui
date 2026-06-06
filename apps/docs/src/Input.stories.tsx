import type { Meta, StoryObj } from "@storybook/react";
import { Input, Stack } from "@zed-ui/react";
import { AtIcon, SearchIcon } from "./shared/icons";

const meta: Meta<typeof Input> = {
  title: "Forms/Input",
  component: Input,
  args: {
    placeholder: "Type here…"
  }
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Outline: Story = { args: { variant: "outline" } };
export const Filled: Story = { args: { variant: "filled" } };
export const Flushed: Story = { args: { variant: "flushed" } };
export const Unstyled: Story = { args: { variant: "unstyled" } };
export const Invalid: Story = { args: { invalid: true, placeholder: "Required field" } };

export const Variants: Story = {
  render: () => (
    <Stack gap="3" style={{ maxWidth: "20rem" }}>
      <Input variant="outline" placeholder="Outline" />
      <Input variant="filled" placeholder="Filled" />
      <Input variant="flushed" placeholder="Flushed" />
      <Input variant="unstyled" placeholder="Unstyled" />
    </Stack>
  )
};

export const WithIcons: Story = {
  render: () => (
    <Stack gap="3" style={{ maxWidth: "20rem" }}>
      <Input startIcon={<SearchIcon size={16} />} placeholder="Search…" />
      <Input startIcon={<AtIcon size={16} />} placeholder="you@example.com" />
      <Input endIcon={<SearchIcon size={16} />} placeholder="Filter…" />
    </Stack>
  )
};
