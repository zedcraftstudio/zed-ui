import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Button,
  Drawer,
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerPopup,
  DrawerPortal,
  DrawerTitle,
  DrawerViewport,
  Flex,
  Text
} from "@zed-ui/react";

const meta: Meta<typeof Drawer.Root> = {
  title: "Overlays/Drawer",
  component: Drawer.Root
};

export default meta;
type Story = StoryObj<typeof Drawer.Root>;

export const Default: Story = {
  render: () => (
    <Drawer.Root>
      <Drawer.Trigger render={<Button variant="outline">Open drawer</Button>} />
      <DrawerContent side="right" title="Settings">
        <Text color="secondary" size="sm">
          Filters and settings live here.
        </Text>
      </DrawerContent>
    </Drawer.Root>
  )
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button size="sm" onClick={() => setOpen(true)}>
          Open drawer
        </Button>
        <Drawer.Root open={open} onOpenChange={setOpen}>
          <DrawerContent side="right" title="Controlled drawer">
            <Drawer.Close render={<Button size="sm" variant="outline">Close</Button>} />
          </DrawerContent>
        </Drawer.Root>
      </>
    );
  }
};

export const Placement: Story = {
  render: () => (
    <Flex gap="2" wrap="wrap">
      {(["left", "right", "top", "bottom"] as const).map((side) => (
        <Drawer.Root key={side}>
          <Drawer.Trigger render={<Button size="sm" variant="outline">{side}</Button>} />
          <DrawerContent side={side} title={`${side} drawer`}>
            <Text color="secondary" size="sm">
              side=&quot;{side}&quot;
            </Text>
          </DrawerContent>
        </Drawer.Root>
      ))}
    </Flex>
  )
};

export const WithFooter: Story = {
  render: () => (
    <Drawer.Root>
      <Drawer.Trigger render={<Button variant="outline">Open drawer</Button>} />
      <DrawerPortal>
        <DrawerBackdrop className="zui-drawer__backdrop" />
        <DrawerViewport className="zui-drawer__viewport" data-side="right">
          <DrawerPopup className="zui-drawer__popup" data-side="right">
            <DrawerTitle className="zui-drawer__title">Confirm changes</DrawerTitle>
            <div className="zui-drawer__body">
              <Text color="secondary" size="sm">
                Save your updates or discard them.
              </Text>
            </div>
            <footer className="zui-drawer__footer">
              <Flex gap="2" justify="flex-end" wrap="wrap">
                <DrawerClose render={<Button variant="outline">Cancel</Button>} />
                <DrawerClose render={<Button>Save</Button>} />
              </Flex>
            </footer>
            <DrawerClose aria-label="Close drawer" className="zui-drawer__close" />
          </DrawerPopup>
        </DrawerViewport>
      </DrawerPortal>
    </Drawer.Root>
  )
};
