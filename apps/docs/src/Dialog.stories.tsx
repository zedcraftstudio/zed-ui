import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button, Dialog, DialogContent, Flex, Text } from "@zed-ui/react";

const meta: Meta<typeof Dialog.Root> = {
  title: "Overlays/Dialog",
  component: Dialog.Root
};

export default meta;
type Story = StoryObj<typeof Dialog.Root>;

export const Default: Story = {
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger render={<Button variant="outline">Open dialog</Button>} />
      <DialogContent description="Proceed with this action?" title="Confirm">
        <Text color="secondary" size="sm">
          Review details before continuing.
        </Text>
      </DialogContent>
    </Dialog.Root>
  )
};

export const Sizes: Story = {
  render: () => (
    <Flex gap="2" wrap="wrap">
      {(["sm", "md", "lg"] as const).map((size) => (
        <Dialog.Root key={size}>
          <Dialog.Trigger
            render={
              <Button size="sm" variant="outline">
                {size}
              </Button>
            }
          />
          <DialogContent size={size} title={`${size} dialog`}>
            <Text color="secondary" size="sm">
              size=&quot;{size}&quot;
            </Text>
          </DialogContent>
        </Dialog.Root>
      ))}
    </Flex>
  )
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button size="sm" onClick={() => setOpen(true)}>
          Open
        </Button>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <DialogContent title="Controlled dialog">
            <Dialog.Close
              render={
                <Button size="sm" variant="outline">
                  Close
                </Button>
              }
            />
          </DialogContent>
        </Dialog.Root>
      </>
    );
  }
};

export const WithFooter: Story = {
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger render={<Button variant="outline">Open dialog</Button>} />
      <DialogContent
        description="Review the checklist before production."
        footer={
          <Flex gap="2" justify="flex-end" wrap="wrap">
            <Dialog.Close render={<Button variant="outline">Cancel</Button>} />
            <Dialog.Close render={<Button>Deploy</Button>} />
          </Flex>
        }
        title="Confirm deployment"
      >
        <Text color="secondary" size="sm">
          Modal with footer actions.
        </Text>
      </DialogContent>
    </Dialog.Root>
  )
};
