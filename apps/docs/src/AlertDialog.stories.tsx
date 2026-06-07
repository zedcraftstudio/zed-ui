import type { Meta, StoryObj } from "@storybook/react";
import {
  AlertDialogContent,
  AlertDialogRoot,
  AlertDialogTrigger,
  Button,
  Text
} from "@zed-ui/react";

const meta: Meta<typeof AlertDialogRoot> = {
  title: "Overlays/AlertDialog",
  component: AlertDialogRoot
};

export default meta;
type Story = StoryObj<typeof AlertDialogRoot>;

export const Default: Story = {
  render: () => (
    <AlertDialogRoot>
      <AlertDialogTrigger render={<Button color="danger">Delete project</Button>} />
      <AlertDialogContent
        cancelLabel="Keep"
        confirmLabel="Delete"
        description="This action cannot be undone."
        title="Delete project?"
      >
        <Text color="secondary" size="sm">
          All files and settings will be permanently removed.
        </Text>
      </AlertDialogContent>
    </AlertDialogRoot>
  )
};

export const ConfirmOnly: Story = {
  render: () => (
    <AlertDialogRoot>
      <AlertDialogTrigger render={<Button variant="outline">Sign out</Button>} />
      <AlertDialogContent
        confirmLabel="Sign out"
        description="You will need to sign in again to continue."
        title="Sign out of Zed UI?"
      />
    </AlertDialogRoot>
  )
};
