import type { Meta, StoryObj } from "@storybook/react";
import { IconButton, PlusIcon, Stack } from "@zed-ui/react";

const meta: Meta<typeof IconButton> = {
  title: "Actions/IconButton",
  component: IconButton,
  args: {
    "aria-label": "Add item",
    icon: <PlusIcon size={16} />
  }
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Solid: Story = { args: { variant: "solid" } };
export const Soft: Story = { args: { variant: "soft" } };
export const Outline: Story = { args: { variant: "outline" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const Loading: Story = { args: { loading: true } };

export const Colors: Story = {
  render: () => (
    <Stack direction="row" gap="2" wrap="wrap">
      <IconButton aria-label="Add" color="primary" icon={<PlusIcon size={16} />} />
      <IconButton aria-label="Add" color="neutral" variant="soft" icon={<PlusIcon size={16} />} />
      <IconButton aria-label="Add" color="success" icon={<PlusIcon size={16} />} />
      <IconButton aria-label="Add" color="warning" icon={<PlusIcon size={16} />} />
      <IconButton aria-label="Add" color="danger" icon={<PlusIcon size={16} />} />
    </Stack>
  )
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" gap="3" align="center" wrap="wrap">
      <IconButton aria-label="Add" size="xs" icon={<PlusIcon size={14} />} />
      <IconButton aria-label="Add" size="sm" icon={<PlusIcon size={14} />} />
      <IconButton aria-label="Add" size="md" icon={<PlusIcon size={16} />} />
      <IconButton aria-label="Add" size="lg" icon={<PlusIcon size={18} />} />
      <IconButton aria-label="Add" size="xl" icon={<PlusIcon size={20} />} />
    </Stack>
  )
};

export const Shape: Story = {
  render: () => (
    <Stack direction="row" gap="3" align="center" wrap="wrap">
      <IconButton aria-label="Add" variant="soft" radius="sm" icon={<PlusIcon size={16} />} />
      <IconButton aria-label="Add" variant="soft" radius="md" icon={<PlusIcon size={16} />} />
      <IconButton aria-label="Add" variant="soft" radius="lg" icon={<PlusIcon size={16} />} />
      <IconButton aria-label="Add" variant="soft" radius="full" icon={<PlusIcon size={16} />} />
    </Stack>
  )
};
