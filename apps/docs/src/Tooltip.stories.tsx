import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Avatar,
  Button,
  Checkbox,
  Stack,
  Switch,
  Text,
  Tooltip,
  TooltipContent,
  TooltipProvider
} from "@zed-ui/react";

const meta: Meta<typeof Tooltip.Root> = {
  title: "Overlays/Tooltip",
  component: Tooltip.Root,
  decorators: [
    (Story) => (
      <TooltipProvider delay={200}>
        <Story />
      </TooltipProvider>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Tooltip.Root>;

export const Default: Story = {
  render: () => (
    <Tooltip.Root>
      <Tooltip.Trigger render={<Button variant="ghost">Hover me</Button>} />
      <TooltipContent>Helpful hint</TooltipContent>
    </Tooltip.Root>
  )
};

export const WithArrow: Story = {
  render: () => (
    <Tooltip.Root>
      <Tooltip.Trigger render={<Button variant="ghost">Hover me</Button>} />
      <TooltipContent showArrow>Tooltip with arrow</TooltipContent>
    </Tooltip.Root>
  )
};

export const Placement: Story = {
  render: () => (
    <Stack direction="row" gap="2" wrap="wrap">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Tooltip.Root key={side}>
          <Tooltip.Trigger
            render={
              <Button size="sm" variant="outline">
                {side}
              </Button>
            }
          />
          <TooltipContent side={side}>{`${side} tooltip`}</TooltipContent>
        </Tooltip.Root>
      ))}
    </Stack>
  )
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const [open, setOpen] = useState(false);

    return (
      <Tooltip.Root open={open} onOpenChange={setOpen}>
        <Tooltip.Trigger render={<Button size="sm">Show tooltip</Button>} />
        <TooltipContent>Controlled tooltip</TooltipContent>
      </Tooltip.Root>
    );
  }
};

export const CustomBackground: Story = {
  render: () => (
    <Tooltip.Root>
      <Tooltip.Trigger render={<Button variant="ghost">Hover me</Button>} />
      <TooltipContent className="zui-tooltip__popup--brand" showArrow>
        Custom background
      </TooltipContent>
    </Tooltip.Root>
  )
};

export const WithAvatar: Story = {
  render: () => (
    <Tooltip.Root>
      <Tooltip.Trigger render={<Avatar fallback="SA" size="sm" />} />
      <TooltipContent>User profile</TooltipContent>
    </Tooltip.Root>
  )
};

export const WithCheckbox: Story = {
  render: () => (
    <Tooltip.Root>
      <Tooltip.Trigger render={<Checkbox label="Welcome" />} />
      <TooltipContent>Accept the terms to continue</TooltipContent>
    </Tooltip.Root>
  )
};

export const WithSwitch: Story = {
  render: () => (
    <Tooltip.Root>
      <Tooltip.Trigger render={<Switch label="Toggle" />} />
      <TooltipContent>Enable notifications</TooltipContent>
    </Tooltip.Root>
  )
};

export const Interactive: Story = {
  render: () => (
    <Tooltip.Root disableHoverablePopup={false}>
      <Tooltip.Trigger render={<Button variant="ghost">Hover me</Button>} />
      <TooltipContent>
        Hover this content or{" "}
        <Text as="span" color="primary">
          click the link
        </Text>
      </TooltipContent>
    </Tooltip.Root>
  )
};
