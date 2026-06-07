import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button, Popover, PopoverPanel, Stack, Text } from "@zed-ui/react";

const meta: Meta<typeof Popover.Root> = {
  title: "Overlays/Popover",
  component: Popover.Root
};

export default meta;
type Story = StoryObj<typeof Popover.Root>;

export const Default: Story = {
  render: () => (
    <Popover.Root>
      <Popover.Trigger render={<Button variant="outline">Click me</Button>} />
      <PopoverPanel description="Helpful context anchored to the trigger." title="Popover title">
        <Text color="secondary" size="sm">
          Popover body content goes here.
        </Text>
      </PopoverPanel>
    </Popover.Root>
  )
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const [open, setOpen] = useState(false);

    return (
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger render={<Button size="sm">Click me</Button>} />
        <PopoverPanel title="Controlled popover">
          <Popover.Close
            render={
              <Button size="sm" variant="outline">
                Close
              </Button>
            }
          />
        </PopoverPanel>
      </Popover.Root>
    );
  }
};

export const Placement: Story = {
  render: () => (
    <Stack direction="row" gap="2" wrap="wrap">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Popover.Root key={side}>
          <Popover.Trigger
            render={
              <Button size="sm" variant="outline">
                {side}
              </Button>
            }
          />
          <PopoverPanel side={side} title={`${side} popover`}>
            <Text color="secondary" size="sm">
              side=&quot;{side}&quot;
            </Text>
          </PopoverPanel>
        </Popover.Root>
      ))}
    </Stack>
  )
};

export const WithArrow: Story = {
  render: () => (
    <Popover.Root>
      <Popover.Trigger render={<Button variant="outline">Click me</Button>} />
      <PopoverPanel showArrow title="Popover with arrow">
        <Text color="secondary" size="sm">
          Arrow points toward the trigger.
        </Text>
      </PopoverPanel>
    </Popover.Root>
  )
};

export const WithFooter: Story = {
  render: () => (
    <Popover.Root>
      <Popover.Trigger render={<Button variant="outline">Click me</Button>} />
      <PopoverPanel
        footer={
          <>
            <Popover.Close
              render={
                <Button size="sm" variant="outline">
                  Cancel
                </Button>
              }
            />
            <Popover.Close render={<Button size="sm">Save</Button>} />
          </>
        }
        title="Edit settings"
      >
        <Text color="secondary" size="sm">
          Update preferences and save your changes.
        </Text>
      </PopoverPanel>
    </Popover.Root>
  )
};
