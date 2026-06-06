import type { Meta, StoryObj } from "@storybook/react";
import { Button, PlusIcon, Stack } from "@zed-ui/react";
import { ChevronRightIcon } from "./shared/icons";

const meta: Meta<typeof Button> = {
  title: "Actions/Button",
  component: Button,
  args: {
    children: "Button"
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Solid: Story = { args: { variant: "solid" } };
export const Soft: Story = { args: { variant: "soft" } };
export const Outline: Story = { args: { variant: "outline" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const Link: Story = { args: { variant: "link" } };
export const Loading: Story = { args: { loading: true } };

export const Colors: Story = {
  render: () => (
    <Stack direction="row" gap="3" wrap="wrap">
      <Button color="primary">Primary</Button>
      <Button color="neutral">Neutral</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
      <Button color="info">Info</Button>
    </Stack>
  )
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" gap="3" align="center" wrap="wrap">
      <Button size="xs">XS</Button>
      <Button size="sm">SM</Button>
      <Button size="md">MD</Button>
      <Button size="lg">LG</Button>
      <Button size="xl">XL</Button>
    </Stack>
  )
};

export const WithIcons: Story = {
  render: () => (
    <Stack direction="row" gap="3" wrap="wrap" align="center">
      <Button startIcon={<PlusIcon size={16} />}>Add item</Button>
      <Button variant="outline" endIcon={<ChevronRightIcon size={16} />}>
        Continue
      </Button>
      <Button
        variant="soft"
        startIcon={<PlusIcon size={16} />}
        endIcon={<ChevronRightIcon size={16} />}
      >
        Add and continue
      </Button>
    </Stack>
  )
};
