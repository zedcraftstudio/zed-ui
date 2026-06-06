import { useState } from "react";
import {
  Avatar,
  Button,
  Checkbox,
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogPopup,
  DialogPortal,
  DialogTitle,
  DialogViewport,
  Drawer,
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerPopup,
  DrawerPortal,
  DrawerTitle,
  DrawerViewport,
  Flex,
  Popover,
  PopoverArrow,
  PopoverClose,
  PopoverDescription,
  PopoverPanel,
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverTitle,
  PopoverViewport,
  Stack,
  Switch,
  Text,
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipPopup,
  TooltipPortal,
  TooltipPositioner,
  TooltipProvider
} from "@zed-ui/react";
import { ComponentDoc } from "../../components/ComponentDoc";
import { DocExample } from "../../components/DocExample";

function BasicDialogPreview() {
  return (
    <Dialog.Root>
      <Dialog.Trigger render={<Button variant="outline">Open dialog</Button>} />
      <DialogContent description="Proceed with this action?" title="Confirm">
        <Text color="secondary" size="sm">
          Review details before continuing.
        </Text>
      </DialogContent>
    </Dialog.Root>
  );
}

export function DialogSection() {
  return (
    <ComponentDoc
      id="dialog"
      title="Dialog"
      description="Used to display a dialog prompt. Built on Base UI with compound parts (Root, Trigger, Portal, Backdrop, Viewport, Popup) and an optional DialogContent helper."
      usage={{
        importCode: `import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogPopup,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  DialogViewport,
} from "@zed-ui/react"`,
        usageCode: `<Dialog.Root>
  <Dialog.Trigger render={<Button>Open</Button>} />
  <Dialog.Portal>
    <Dialog.Backdrop className="zui-dialog__backdrop" />
    <Dialog.Viewport className="zui-dialog__viewport">
      <Dialog.Popup className="zui-dialog__popup">
        <Dialog.Close className="zui-dialog__close" aria-label="Close dialog" />
        <header className="zui-dialog__header">
          <Dialog.Title className="zui-dialog__title">Title</Dialog.Title>
          <Dialog.Description className="zui-dialog__description">
            Description
          </Dialog.Description>
        </header>
        <div className="zui-dialog__body">{children}</div>
        <footer className="zui-dialog__footer">{footer}</footer>
      </Dialog.Popup>
    </Dialog.Viewport>
  </Dialog.Portal>
</Dialog.Root>`,
        preview: <BasicDialogPreview />
      }}
    >
      <DocExample
        title="DialogContent"
        description="Shortcut that wires Portal, Backdrop, Viewport, Popup, header, body, and optional footer."
        code={`<Dialog.Root>
  <Dialog.Trigger render={<Button>Open</Button>} />
  <DialogContent title="Confirm" description="Proceed with this action?">
    {children}
  </DialogContent>
</Dialog.Root>`}
      >
        <BasicDialogPreview />
      </DocExample>

      <DocExample
        title="Sizes"
        description="Use the size prop on DialogContent to change the dialog width."
        code={`<DialogContent size="sm" title="Small dialog" />
<DialogContent size="md" title="Medium dialog" />
<DialogContent size="lg" title="Large dialog" />`}
      >
        <Stack direction="row" gap="2" wrap="wrap">
          <DialogSizeExample size="sm" />
          <DialogSizeExample size="md" />
          <DialogSizeExample size="lg" />
        </Stack>
      </DocExample>

      <DocExample
        title="With footer"
        description="Pass actions to the footer slot for confirmations and forms."
        code={`<DialogContent
  title="Confirm deployment"
  description="Review the checklist before production."
  footer={
    <Flex gap="2" justify="flex-end" wrap="wrap">
      <Dialog.Close render={<Button variant="outline">Cancel</Button>} />
      <Dialog.Close render={<Button>Deploy</Button>} />
    </Flex>
  }
>
  {children}
</DialogContent>`}
      >
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
              Modal with header, body, and footer actions.
            </Text>
          </DialogContent>
        </Dialog.Root>
      </DocExample>

      <DocExample
        title="Controlled"
        description="Use open and onOpenChange on Dialog.Root to control visibility."
        code={`const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>Open</Button>
<Dialog.Root open={open} onOpenChange={setOpen}>
  <DialogContent title="Controlled dialog" description="Close with the button or overlay.">
    <Dialog.Close render={<Button variant="outline">Close</Button>} />
  </DialogContent>
</Dialog.Root>`}
      >
        <ControlledDialogExample />
      </DocExample>

      <DocExample
        title="Composition"
        description="Assemble the dialog manually when DialogContent is too opinionated."
        code={`<Dialog.Root>
  <Dialog.Trigger render={<Button variant="outline">Open</Button>} />
  <Dialog.Portal>
    <Dialog.Backdrop className="zui-dialog__backdrop" />
    <Dialog.Viewport className="zui-dialog__viewport">
      <Dialog.Popup className="zui-dialog__popup zui-dialog__popup--md">
        <header className="zui-dialog__header">
          <div className="zui-dialog__header-main">
            <Dialog.Title className="zui-dialog__title">Edit profile</Dialog.Title>
            <Dialog.Description className="zui-dialog__description">
              Make changes to your profile here.
            </Dialog.Description>
          </div>
          <Dialog.Close aria-label="Close dialog" className="zui-dialog__close">
            <span aria-hidden className="zui-dialog__close-icon">×</span>
          </Dialog.Close>
        </header>
        <div className="zui-dialog__body">{children}</div>
      </Dialog.Popup>
    </Dialog.Viewport>
  </Dialog.Portal>
</Dialog.Root>`}
      >
        <ComposedDialogExample />
      </DocExample>

      <DocExample
        title="Nested dialogs"
        description="Nest Dialog.Root inside another dialog body. Base UI tracks nested open state for stacking."
        code={`<DialogContent title="Outer dialog">
  <Dialog.Root>
    <Dialog.Trigger render={<Button size="sm">Open nested</Button>} />
    <DialogContent title="Nested dialog" description="Stacked above the parent dialog.">
      <Text size="sm">Nested content</Text>
    </DialogContent>
  </Dialog.Root>
</DialogContent>`}
      >
        <NestedDialogExample />
      </DocExample>

      <DocExample
        title="Without header"
        description="Omit title and description to render a floating close control."
        code={`<DialogContent>
  <Text size="sm">Minimal dialog surface.</Text>
</DialogContent>`}
      >
        <Dialog.Root>
          <Dialog.Trigger render={<Button variant="outline">Open dialog</Button>} />
          <DialogContent>
            <Text color="secondary" size="sm">
              Minimal dialog surface with a floating close button.
            </Text>
          </DialogContent>
        </Dialog.Root>
      </DocExample>
    </ComponentDoc>
  );
}

function DialogSizeExample({ size }: { size: "sm" | "md" | "lg" }) {
  const label = size === "sm" ? "Small" : size === "lg" ? "Large" : "Medium";

  return (
    <Dialog.Root>
      <Dialog.Trigger render={<Button size="sm" variant="outline">{`Open (${size})`}</Button>} />
      <DialogContent
        description={`This dialog uses size="${size}".`}
        size={size}
        title={`${label} dialog`}
      >
        <Text color="secondary" size="sm">
          Dialog width adapts to the selected size token.
        </Text>
      </DialogContent>
    </Dialog.Root>
  );
}

function ControlledDialogExample() {
  const [open, setOpen] = useState(false);

  return (
    <Stack align="start" gap="3">
      <Button size="sm" onClick={() => setOpen(true)}>
        Open
      </Button>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <DialogContent description="Close with the button, escape key, or backdrop." title="Controlled dialog">
          <Dialog.Close render={<Button size="sm" variant="outline">Close</Button>} />
        </DialogContent>
      </Dialog.Root>
    </Stack>
  );
}

function ComposedDialogExample() {
  return (
    <Dialog.Root>
      <Dialog.Trigger render={<Button variant="outline">Open composed dialog</Button>} />
      <DialogPortal>
        <DialogBackdrop className="zui-dialog__backdrop" />
        <DialogViewport className="zui-dialog__viewport">
          <DialogPopup className="zui-dialog__popup zui-dialog__popup--md">
            <header className="zui-dialog__header">
              <div className="zui-dialog__header-main">
                <DialogTitle className="zui-dialog__title">Edit profile</DialogTitle>
                <DialogDescription className="zui-dialog__description">
                  Make changes to your profile here.
                </DialogDescription>
              </div>
              <DialogClose aria-label="Close dialog" className="zui-dialog__close">
                <span aria-hidden className="zui-dialog__close-icon">
                  ×
                </span>
              </DialogClose>
            </header>
            <div className="zui-dialog__body">
              <Text color="secondary" size="sm">
                Composed with individual Dialog parts instead of DialogContent.
              </Text>
            </div>
          </DialogPopup>
        </DialogViewport>
      </DialogPortal>
    </Dialog.Root>
  );
}

function NestedDialogExample() {
  return (
    <Dialog.Root>
      <Dialog.Trigger render={<Button variant="outline">Open outer dialog</Button>} />
      <DialogContent title="Outer dialog">
        <Stack align="start" gap="3">
          <Text color="secondary" size="sm">
            Open another dialog on top of this one.
          </Text>
          <Dialog.Root>
            <Dialog.Trigger render={<Button size="sm">Open nested</Button>} />
            <DialogContent description="Stacked above the parent dialog." title="Nested dialog">
              <Text color="secondary" size="sm">
                Nested dialog content.
              </Text>
            </DialogContent>
          </Dialog.Root>
        </Stack>
      </DialogContent>
    </Dialog.Root>
  );
}

export function DrawerSection() {
  return (
    <ComponentDoc
      id="drawer"
      title="Drawer"
      description="Used to render content that slides in from the edge of the screen. Built on Base UI with compound parts (Root, Trigger, Portal, Backdrop, Viewport, Popup) and an optional DrawerContent helper."
      usage={{
        importCode: `import {
  Button,
  Drawer,
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerPopup,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
  DrawerViewport,
} from "@zed-ui/react"`,
        usageCode: `<Drawer.Root>
  <Drawer.Trigger render={<Button>Open</Button>} />
  <Drawer.Portal>
    <Drawer.Backdrop className="zui-drawer__backdrop" />
    <Drawer.Viewport className="zui-drawer__viewport" data-side="right">
      <Drawer.Popup className="zui-drawer__popup" data-side="right">
        <header className="zui-drawer__header">
          <Drawer.Title className="zui-drawer__title">Title</Drawer.Title>
          <Drawer.Description className="zui-drawer__description">
            Description
          </Drawer.Description>
        </header>
        <div className="zui-drawer__body">{children}</div>
        <footer className="zui-drawer__footer">{footer}</footer>
        <Drawer.Close className="zui-drawer__close" aria-label="Close drawer" />
      </Drawer.Popup>
    </Drawer.Viewport>
  </Drawer.Portal>
</Drawer.Root>`,
        preview: <BasicDrawerPreview />
      }}
    >
      <DocExample
        title="DrawerContent"
        description="Shortcut that wires Portal, Backdrop, Viewport, Popup, title, and body."
        code={`<Drawer.Root>
  <Drawer.Trigger render={<Button>Open</Button>} />
  <DrawerContent side="right" title="Settings">
    {children}
  </DrawerContent>
</Drawer.Root>`}
      >
        <BasicDrawerPreview />
      </DocExample>

      <DocExample
        title="Controlled"
        description="Use open and onOpenChange on Drawer.Root to control visibility."
        code={`const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>Open drawer</Button>
<Drawer.Root open={open} onOpenChange={setOpen}>
  <DrawerContent side="right" title="Controlled drawer">
    <Drawer.Close render={<Button variant="outline">Close</Button>} />
  </DrawerContent>
</Drawer.Root>`}
      >
        <ControlledDrawerExample />
      </DocExample>

      <DocExample
        title="Placement"
        description="Use the side prop on DrawerContent (or data-side on Viewport and Popup) to change placement."
        code={`<DrawerContent side="left" title="Left drawer" />
<DrawerContent side="right" title="Right drawer" />
<DrawerContent side="top" title="Top drawer" />
<DrawerContent side="bottom" title="Bottom drawer" />`}
      >
        <Stack direction="row" gap="2" wrap="wrap">
          <DrawerPlacementExample side="left" />
          <DrawerPlacementExample side="right" />
          <DrawerPlacementExample side="top" />
          <DrawerPlacementExample side="bottom" />
        </Stack>
      </DocExample>

      <DocExample
        title="With footer"
        description="Compose actions in the footer when using manual parts, or place actions in the body with DrawerContent."
        code={`<Drawer.Portal>
  <Drawer.Backdrop className="zui-drawer__backdrop" />
  <Drawer.Viewport className="zui-drawer__viewport" data-side="right">
    <Drawer.Popup className="zui-drawer__popup" data-side="right">
      <Drawer.Title className="zui-drawer__title">Confirm</Drawer.Title>
      <div className="zui-drawer__body">{children}</div>
      <footer className="zui-drawer__footer">
        <Drawer.Close render={<Button variant="outline">Cancel</Button>} />
        <Drawer.Close render={<Button>Save</Button>} />
      </footer>
      <Drawer.Close className="zui-drawer__close" aria-label="Close drawer" />
    </Drawer.Popup>
  </Drawer.Viewport>
</Drawer.Portal>`}
      >
        <DrawerWithFooterExample />
      </DocExample>

      <DocExample
        title="Composition"
        description="Assemble the drawer manually when DrawerContent is too opinionated."
        code={`<Drawer.Root>
  <Drawer.Trigger render={<Button variant="outline">Open</Button>} />
  <DrawerPortal>
    <DrawerBackdrop className="zui-drawer__backdrop" />
    <DrawerViewport className="zui-drawer__viewport" data-side="right">
      <DrawerPopup className="zui-drawer__popup" data-side="right">
        <DrawerTitle className="zui-drawer__title">Edit profile</DrawerTitle>
        <DrawerDescription className="zui-drawer__description">
          Make changes to your profile here.
        </DrawerDescription>
        <div className="zui-drawer__body">{children}</div>
        <DrawerClose className="zui-drawer__close" aria-label="Close drawer" />
      </DrawerPopup>
    </DrawerViewport>
  </DrawerPortal>
</Drawer.Root>`}
      >
        <ComposedDrawerExample />
      </DocExample>

      <DocExample
        title="Without title"
        description="Omit title to render a minimal drawer surface."
        code={`<DrawerContent side="right">
  <Text size="sm">Minimal drawer content.</Text>
</DrawerContent>`}
      >
        <Drawer.Root>
          <Drawer.Trigger render={<Button variant="outline">Open drawer</Button>} />
          <DrawerContent side="right">
            <Text color="secondary" size="sm">
              Minimal drawer content without a title.
            </Text>
          </DrawerContent>
        </Drawer.Root>
      </DocExample>
    </ComponentDoc>
  );
}

function BasicDrawerPreview() {
  return (
    <Drawer.Root>
      <Drawer.Trigger render={<Button variant="outline">Open drawer</Button>} />
      <DrawerContent side="right" title="Settings">
        <Text color="secondary" size="sm">
          Filters and settings live here.
        </Text>
      </DrawerContent>
    </Drawer.Root>
  );
}

function ControlledDrawerExample() {
  const [open, setOpen] = useState(false);

  return (
    <Stack align="start" gap="3">
      <Button size="sm" onClick={() => setOpen(true)}>
        Open drawer
      </Button>
      <Drawer.Root open={open} onOpenChange={setOpen}>
        <DrawerContent side="right" title="Controlled drawer">
          <Stack align="start" gap="3">
            <Text color="secondary" size="sm">
              Close with the button, escape key, or backdrop.
            </Text>
            <Drawer.Close render={<Button size="sm" variant="outline">Close</Button>} />
          </Stack>
        </DrawerContent>
      </Drawer.Root>
    </Stack>
  );
}

function DrawerPlacementExample({ side }: { side: "bottom" | "left" | "right" | "top" }) {
  const label = side.charAt(0).toUpperCase() + side.slice(1);

  return (
    <Drawer.Root>
      <Drawer.Trigger render={<Button size="sm" variant="outline">{`Open (${side})`}</Button>} />
      <DrawerContent side={side} title={`${label} drawer`}>
        <Text color="secondary" size="sm">
          This drawer slides in from the {side}.
        </Text>
      </DrawerContent>
    </Drawer.Root>
  );
}

function DrawerWithFooterExample() {
  return (
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
  );
}

function ComposedDrawerExample() {
  return (
    <Drawer.Root>
      <Drawer.Trigger render={<Button variant="outline">Open composed drawer</Button>} />
      <DrawerPortal>
        <DrawerBackdrop className="zui-drawer__backdrop" />
        <DrawerViewport className="zui-drawer__viewport" data-side="right">
          <DrawerPopup className="zui-drawer__popup" data-side="right">
            <DrawerTitle className="zui-drawer__title">Edit profile</DrawerTitle>
            <DrawerDescription className="zui-drawer__description">
              Make changes to your profile here.
            </DrawerDescription>
            <div className="zui-drawer__body">
              <Text color="secondary" size="sm">
                Composed with individual Drawer parts instead of DrawerContent.
              </Text>
            </div>
            <DrawerClose aria-label="Close drawer" className="zui-drawer__close" />
          </DrawerPopup>
        </DrawerViewport>
      </DrawerPortal>
    </Drawer.Root>
  );
}

export function PopoverSection() {
  return (
    <ComponentDoc
      id="popover"
      title="Popover"
      description="Used to show detailed information inside a pop-up anchored to a trigger. Built on Base UI with compound parts and an optional PopoverPanel helper."
      usage={{
        importCode: `import {
  Button,
  Popover,
  PopoverArrow,
  PopoverClose,
  PopoverDescription,
  PopoverPanel,
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverTitle,
  PopoverTrigger,
  PopoverViewport,
} from "@zed-ui/react"`,
        usageCode: `<Popover.Root>
  <Popover.Trigger render={<Button>Click me</Button>} />
  <Popover.Portal>
    <Popover.Positioner className="zui-popover__positioner">
      <Popover.Popup className="zui-popover__popup">
        <Popover.Arrow className="zui-popover__arrow" />
        <Popover.Title className="zui-popover__title">Title</Popover.Title>
        <Popover.Description className="zui-popover__description">
          Description
        </Popover.Description>
        <Popover.Viewport className="zui-popover__viewport">{children}</Popover.Viewport>
        <Popover.Close render={<Button size="sm">Close</Button>} />
      </Popover.Popup>
    </Popover.Positioner>
  </Popover.Portal>
</Popover.Root>`,
        preview: <BasicPopoverPreview />
      }}
    >
      <DocExample
        title="PopoverPanel"
        description="Shortcut that wires Portal, Positioner, Popup, optional header, body, and footer."
        code={`<Popover.Root>
  <Popover.Trigger render={<Button>Click me</Button>} />
  <PopoverPanel
    description="Helpful context anchored to the trigger."
    title="Popover title"
  >
    {children}
  </PopoverPanel>
</Popover.Root>`}
      >
        <BasicPopoverPreview />
      </DocExample>

      <DocExample
        title="Controlled"
        description="Use open and onOpenChange on Popover.Root to control visibility."
        code={`const [open, setOpen] = useState(false)

<Popover.Root open={open} onOpenChange={setOpen}>
  <Popover.Trigger render={<Button size="sm">Click me</Button>} />
  <PopoverPanel title="Controlled popover">
    <Popover.Close render={<Button size="sm" variant="outline">Close</Button>} />
  </PopoverPanel>
</Popover.Root>`}
      >
        <ControlledPopoverExample />
      </DocExample>

      <DocExample
        title="Placement"
        description="Use the side prop on PopoverPanel or Popover.Positioner to change placement."
        code={`<PopoverPanel side="top" title="Top popover">{children}</PopoverPanel>
<PopoverPanel side="right" title="Right popover">{children}</PopoverPanel>
<PopoverPanel side="bottom" title="Bottom popover">{children}</PopoverPanel>
<PopoverPanel side="left" title="Left popover">{children}</PopoverPanel>`}
      >
        <Stack direction="row" gap="2" wrap="wrap">
          <PopoverPlacementExample side="top" />
          <PopoverPlacementExample side="right" />
          <PopoverPlacementExample side="bottom" />
          <PopoverPlacementExample side="left" />
        </Stack>
      </DocExample>

      <DocExample
        title="Offset"
        description="Adjust distance from the trigger with sideOffset on PopoverPanel or Popover.Positioner."
        code={`<PopoverPanel sideOffset={24} title="Custom offset">
  This popover sits farther from its trigger.
</PopoverPanel>`}
      >
        <Popover.Root>
          <Popover.Trigger render={<Button variant="outline">Open</Button>} />
          <PopoverPanel
            description="This popover has extra spacing from its trigger."
            sideOffset={24}
            title="Custom offset"
          >
            <Text color="secondary" size="sm">
              sideOffset={24}
            </Text>
          </PopoverPanel>
        </Popover.Root>
      </DocExample>

      <DocExample
        title="With arrow"
        description="Enable the arrow shortcut on PopoverPanel or render Popover.Arrow in a composed popover."
        code={`<PopoverPanel showArrow title="Popover with arrow">
  {children}
</PopoverPanel>`}
      >
        <Popover.Root>
          <Popover.Trigger render={<Button variant="outline">Click me</Button>} />
          <PopoverPanel
            description="The arrow points toward the trigger."
            showArrow
            title="Popover with arrow"
          >
            <Text color="secondary" size="sm">
              Arrow enabled with showArrow.
            </Text>
          </PopoverPanel>
        </Popover.Root>
      </DocExample>

      <DocExample
        title="With footer"
        code={`<PopoverPanel
  footer={
    <>
      <Popover.Close render={<Button size="sm" variant="outline">Cancel</Button>} />
      <Popover.Close render={<Button size="sm">Save</Button>} />
    </>
  }
  title="Edit settings"
>
  {children}
</PopoverPanel>`}
      >
        <PopoverWithFooterExample />
      </DocExample>

      <DocExample
        title="Composition"
        description="Assemble the popover manually when PopoverPanel is too opinionated."
        code={`<Popover.Root>
  <Popover.Trigger render={<Button variant="outline">Click me</Button>} />
  <PopoverPortal>
    <PopoverPositioner className="zui-popover__positioner" side="bottom">
      <PopoverPopup className="zui-popover__popup">
        <PopoverArrow className="zui-popover__arrow" />
        <PopoverTitle className="zui-popover__title">Composed popover</PopoverTitle>
        <PopoverDescription className="zui-popover__description">
          Built from individual parts.
        </PopoverDescription>
        <PopoverViewport className="zui-popover__viewport">{children}</PopoverViewport>
        <PopoverClose render={<Button size="sm">Close</Button>} />
      </PopoverPopup>
    </PopoverPositioner>
  </PopoverPortal>
</Popover.Root>`}
      >
        <ComposedPopoverExample />
      </DocExample>
    </ComponentDoc>
  );
}

function BasicPopoverPreview() {
  return (
    <Popover.Root>
      <Popover.Trigger render={<Button variant="outline">Click me</Button>} />
      <PopoverPanel
        description="Helpful context anchored to the trigger."
        title="Popover title"
      >
        <Text color="secondary" size="sm">
          Popover body content goes here.
        </Text>
      </PopoverPanel>
    </Popover.Root>
  );
}

function ControlledPopoverExample() {
  const [open, setOpen] = useState(false);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger render={<Button size="sm">Click me</Button>} />
      <PopoverPanel title="Controlled popover">
        <Stack align="start" gap="3">
          <Text color="secondary" size="sm">
            Close with the button or by clicking outside.
          </Text>
          <Popover.Close render={<Button size="sm" variant="outline">Close</Button>} />
        </Stack>
      </PopoverPanel>
    </Popover.Root>
  );
}

function PopoverPlacementExample({ side }: { side: "bottom" | "left" | "right" | "top" }) {
  const label = side.charAt(0).toUpperCase() + side.slice(1);

  return (
    <Popover.Root>
      <Popover.Trigger render={<Button size="sm" variant="outline">{side}</Button>} />
      <PopoverPanel description={`Placed on the ${side}.`} side={side} title={`${label} popover`}>
        <Text color="secondary" size="sm">
          side=&quot;{side}&quot;
        </Text>
      </PopoverPanel>
    </Popover.Root>
  );
}

function PopoverWithFooterExample() {
  return (
    <Popover.Root>
      <Popover.Trigger render={<Button variant="outline">Click me</Button>} />
      <PopoverPanel
        footer={
          <>
            <Popover.Close render={<Button size="sm" variant="outline">Cancel</Button>} />
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
  );
}

function ComposedPopoverExample() {
  return (
    <Popover.Root>
      <Popover.Trigger render={<Button variant="outline">Click me</Button>} />
      <PopoverPortal>
        <PopoverPositioner className="zui-popover__positioner" side="bottom">
          <PopoverPopup className="zui-popover__popup">
            <PopoverArrow className="zui-popover__arrow" />
            <PopoverTitle className="zui-popover__title">Composed popover</PopoverTitle>
            <PopoverDescription className="zui-popover__description">
              Built from individual parts instead of PopoverPanel.
            </PopoverDescription>
            <PopoverViewport className="zui-popover__viewport">
              <Text color="secondary" size="sm">
                Manual Portal → Positioner → Popup assembly.
              </Text>
            </PopoverViewport>
            <PopoverClose render={<Button size="sm">Close</Button>} />
          </PopoverPopup>
        </PopoverPositioner>
      </PopoverPortal>
    </Popover.Root>
  );
}

export function TooltipSection() {
  return (
    <ComponentDoc
      id="tooltip"
      title="Tooltip"
      description="Used to display additional information when a user hovers over or focuses an element. Built on Base UI with compound parts and an optional TooltipContent helper."
      usage={{
        importCode: `import { Button, Tooltip, TooltipContent, TooltipProvider } from "@zed-ui/react"`,
        usageCode: `<TooltipProvider delay={400} closeDelay={150}>
  <Tooltip.Root>
    <Tooltip.Trigger render={<Button variant="ghost">Hover me</Button>} />
    <TooltipContent>Helpful hint</TooltipContent>
  </Tooltip.Root>
</TooltipProvider>`,
        preview: <BasicTooltipPreview />
      }}
    >
      <DocExample
        title="TooltipContent"
        description="Shortcut that wires Portal, Positioner, Popup, optional arrow, and body content."
        code={`<Tooltip.Root>
  <Tooltip.Trigger render={<Button variant="ghost">Hover me</Button>} />
  <TooltipContent>Helpful hint</TooltipContent>
</Tooltip.Root>`}
      >
        <BasicTooltipPreview />
      </DocExample>

      <DocExample
        title="Arrow"
        description="Pass showArrow to TooltipContent or render Tooltip.Arrow in a composed tooltip."
        code={`<TooltipContent showArrow>Tooltip with arrow</TooltipContent>`}
      >
        <Tooltip.Root>
          <Tooltip.Trigger render={<Button variant="ghost">Hover me</Button>} />
          <TooltipContent showArrow>Tooltip with arrow</TooltipContent>
        </Tooltip.Root>
      </DocExample>

      <DocExample
        title="Placement"
        description="Use the side prop on TooltipContent or Tooltip.Positioner to change placement."
        code={`<TooltipContent side="top">Top tooltip</TooltipContent>
<TooltipContent side="right">Right tooltip</TooltipContent>
<TooltipContent side="bottom">Bottom tooltip</TooltipContent>
<TooltipContent side="left">Left tooltip</TooltipContent>`}
      >
        <Stack direction="row" gap="2" wrap="wrap">
          <TooltipPlacementExample side="top" />
          <TooltipPlacementExample side="right" />
          <TooltipPlacementExample side="bottom" />
          <TooltipPlacementExample side="left" />
        </Stack>
      </DocExample>

      <DocExample
        title="Offset"
        description="Adjust distance from the trigger with sideOffset on TooltipContent or Tooltip.Positioner."
        code={`<TooltipContent sideOffset={24}>Extra spacing from the trigger</TooltipContent>`}
      >
        <Tooltip.Root>
          <Tooltip.Trigger render={<Button variant="ghost">Hover me</Button>} />
          <TooltipContent sideOffset={24}>Extra spacing from the trigger</TooltipContent>
        </Tooltip.Root>
      </DocExample>

      <DocExample
        title="Delay"
        description="Set delay and closeDelay on TooltipProvider, or per-trigger on Tooltip.Trigger."
        code={`<TooltipProvider delay={500} closeDelay={100}>
  <Tooltip.Root>
    <Tooltip.Trigger render={<Button variant="ghost">Hover me</Button>} />
    <TooltipContent>Delay (open: 500ms, close: 100ms)</TooltipContent>
  </Tooltip.Root>
</TooltipProvider>`}
      >
        <TooltipDelayExample />
      </DocExample>

      <DocExample
        title="Custom background"
        description="Override tooltip colors with --zui-tooltip-bg, --zui-tooltip-fg, and --zui-tooltip-border on the popup."
        code={`<TooltipContent className="zui-tooltip__popup--brand">
  Custom background
</TooltipContent>`}
      >
        <Tooltip.Root>
          <Tooltip.Trigger render={<Button variant="ghost">Hover me</Button>} />
          <TooltipContent className="zui-tooltip__popup--brand" showArrow>
            Custom background
          </TooltipContent>
        </Tooltip.Root>
      </DocExample>

      <DocExample
        title="Controlled"
        description="Use open and onOpenChange on Tooltip.Root to control visibility."
        code={`const [open, setOpen] = useState(false)

<Tooltip.Root open={open} onOpenChange={setOpen}>
  <Tooltip.Trigger render={<Button size="sm">Show tooltip</Button>} />
  <TooltipContent>Controlled tooltip</TooltipContent>
</Tooltip.Root>`}
      >
        <ControlledTooltipExample />
      </DocExample>

      <DocExample
        title="Handle"
        description="Use Tooltip.createHandle() to connect detached triggers and control the tooltip imperatively."
        code={`const tooltipHandle = Tooltip.createHandle()

<Tooltip.Trigger id="tooltip-target" handle={tooltipHandle} render={<Button>Target</Button>} />
<Button onClick={() => tooltipHandle.isOpen ? tooltipHandle.close() : tooltipHandle.open("tooltip-target")}>
  Toggle
</Button>
<Tooltip.Root handle={tooltipHandle}>
  <TooltipContent>This is the tooltip content</TooltipContent>
</Tooltip.Root>`}
      >
        <TooltipHandleExample />
      </DocExample>

      <DocExample
        title="Interactive"
        description="By default, tooltips stay open while hovering their content. Set disableHoverablePopup on Tooltip.Root to close immediately when leaving the trigger."
        code={`<Tooltip.Root disableHoverablePopup={false}>
  <Tooltip.Trigger render={<Button variant="ghost">Hover me</Button>} />
  <TooltipContent>
    Hover this content or{" "}
    <Text as="span" color="primary">
      click the link
    </Text>
  </TooltipContent>
</Tooltip.Root>`}
      >
        <TooltipInteractiveExample />
      </DocExample>

      <DocExample
        title="Disabled"
        description="Set disabled on Tooltip.Root to prevent the tooltip from opening."
        code={`<Tooltip.Root disabled>
  <Tooltip.Trigger render={<Button variant="ghost">Hover me</Button>} />
  <TooltipContent>Not shown</TooltipContent>
</Tooltip.Root>`}
      >
        <Tooltip.Root disabled>
          <Tooltip.Trigger render={<Button variant="ghost">Hover me</Button>} />
          <TooltipContent>Not shown</TooltipContent>
        </Tooltip.Root>
      </DocExample>

      <DocExample
        title="With Avatar"
        description="Wrap any focusable element with Tooltip.Trigger."
        code={`<Tooltip.Root>
  <Tooltip.Trigger render={<Avatar fallback="SA" size="sm" />} />
  <TooltipContent>User profile</TooltipContent>
</Tooltip.Root>`}
      >
        <Tooltip.Root>
          <Tooltip.Trigger render={<Avatar fallback="SA" size="sm" />} />
          <TooltipContent>User profile</TooltipContent>
        </Tooltip.Root>
      </DocExample>

      <DocExample
        title="With Checkbox"
        code={`<Tooltip.Root>
  <Tooltip.Trigger render={<Checkbox label="Welcome" />} />
  <TooltipContent>Accept the terms to continue</TooltipContent>
</Tooltip.Root>`}
      >
        <Tooltip.Root>
          <Tooltip.Trigger render={<Checkbox label="Welcome" />} />
          <TooltipContent>Accept the terms to continue</TooltipContent>
        </Tooltip.Root>
      </DocExample>

      <DocExample
        title="With Switch"
        code={`<Tooltip.Root>
  <Tooltip.Trigger render={<Switch label="Toggle" />} />
  <TooltipContent>Enable notifications</TooltipContent>
</Tooltip.Root>`}
      >
        <Tooltip.Root>
          <Tooltip.Trigger render={<Switch label="Toggle" />} />
          <TooltipContent>Enable notifications</TooltipContent>
        </Tooltip.Root>
      </DocExample>

      <DocExample
        title="Composition"
        description="Assemble the tooltip manually when TooltipContent is too opinionated. Add Tooltip.Viewport only when animating content between multiple triggers."
        code={`<Tooltip.Root>
  <Tooltip.Trigger render={<Button variant="ghost">Hover me</Button>} />
  <TooltipPortal>
    <TooltipPositioner className="zui-tooltip__positioner" side="bottom" sideOffset={11}>
      <TooltipPopup className="zui-tooltip__popup">
        <TooltipArrow className="zui-tooltip__arrow" />
        Composed tooltip
      </TooltipPopup>
    </TooltipPositioner>
  </TooltipPortal>
</Tooltip.Root>`}
      >
        <ComposedTooltipExample />
      </DocExample>
    </ComponentDoc>
  );
}

function BasicTooltipPreview() {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger render={<Button variant="ghost">Hover me</Button>} />
      <TooltipContent>Helpful hint</TooltipContent>
    </Tooltip.Root>
  );
}

function ControlledTooltipExample() {
  const [open, setOpen] = useState(false);

  return (
    <Tooltip.Root open={open} onOpenChange={setOpen}>
      <Tooltip.Trigger render={<Button size="sm">Show tooltip</Button>} />
      <TooltipContent>Controlled tooltip</TooltipContent>
    </Tooltip.Root>
  );
}

function TooltipPlacementExample({ side }: { side: "bottom" | "left" | "right" | "top" }) {
  const label = side.charAt(0).toUpperCase() + side.slice(1);

  return (
    <Tooltip.Root>
      <Tooltip.Trigger render={<Button size="sm" variant="outline">{side}</Button>} />
      <TooltipContent side={side}>{`${label} tooltip`}</TooltipContent>
    </Tooltip.Root>
  );
}

function TooltipDelayExample() {
  return (
    <TooltipProvider closeDelay={100} delay={500}>
      <Tooltip.Root>
        <Tooltip.Trigger render={<Button variant="ghost">Hover me</Button>} />
        <TooltipContent>Delay (open: 500ms, close: 100ms)</TooltipContent>
      </Tooltip.Root>
    </TooltipProvider>
  );
}

const tooltipHandle = Tooltip.createHandle();

function TooltipHandleExample() {
  return (
    <Stack align="start" gap="3">
      <Stack direction="row" gap="2">
        <Tooltip.Trigger
          handle={tooltipHandle}
          id="tooltip-target"
          render={<Button variant="outline">Target</Button>}
        />
        <Button
          size="sm"
          variant="outline"
          onClick={() =>
            tooltipHandle.isOpen ? tooltipHandle.close() : tooltipHandle.open("tooltip-target")
          }
        >
          Toggle
        </Button>
      </Stack>
      <Tooltip.Root handle={tooltipHandle}>
        <TooltipContent>This is the tooltip content</TooltipContent>
      </Tooltip.Root>
    </Stack>
  );
}

function TooltipInteractiveExample() {
  return (
    <Tooltip.Root disableHoverablePopup={false}>
      <Tooltip.Trigger render={<Button variant="ghost">Hover me</Button>} />
      <TooltipContent>
        Hover this content or{" "}
        <Text as="span" color="primary">
          click the link
        </Text>
      </TooltipContent>
    </Tooltip.Root>
  );
}

function ComposedTooltipExample() {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger render={<Button variant="ghost">Hover me</Button>} />
      <TooltipPortal>
        <TooltipPositioner className="zui-tooltip__positioner" side="bottom" sideOffset={11}>
          <TooltipPopup className="zui-tooltip__popup">
            <TooltipArrow className="zui-tooltip__arrow" />
            Composed tooltip
          </TooltipPopup>
        </TooltipPositioner>
      </TooltipPortal>
    </Tooltip.Root>
  );
}
