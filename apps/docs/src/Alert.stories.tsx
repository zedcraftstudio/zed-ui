import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Alert, Button, Spinner, Stack } from "@zed-ui/react";

const meta: Meta<typeof Alert> = {
  title: "Feedback/Alert",
  component: Alert,
  args: {
    description: "Helpful context for the user.",
    status: "info",
    title: "Information"
  }
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {};

export const TitleOnly: Story = {
  args: {
    description: undefined,
    title: "This is the alert title"
  }
};

export const Statuses: Story = {
  render: () => (
    <Stack gap="3">
      <Alert status="error" title="There was an error processing your request" />
      <Alert status="success" title="Changes saved successfully." />
      <Alert status="warning" title="Your session is about to expire." />
      <Alert status="info" title="Data uploaded to the server." />
      <Alert status="neutral" title="Maintenance scheduled tonight." />
    </Stack>
  )
};

export const Variants: Story = {
  render: () => (
    <Stack gap="3">
      <Alert status="info" title="Data uploaded to the server." variant="subtle" />
      <Alert status="info" title="Data uploaded to the server." variant="surface" />
      <Alert status="info" title="Data uploaded to the server." variant="outline" />
      <Alert status="info" title="Data uploaded to the server." variant="solid" />
    </Stack>
  )
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="3">
      <Alert size="sm" status="info" title="Small alert" />
      <Alert size="md" status="info" title="Medium alert" />
      <Alert size="lg" status="info" title="Large alert" />
    </Stack>
  )
};

export const WithCloseButton: Story = {
  render: () => (
    <Alert
      description="Your application has been received."
      endElement={
        <Button size="sm" variant="ghost">
          Close
        </Button>
      }
      status="success"
      title="Success!"
    />
  )
};

export const WithSpinner: Story = {
  render: () => (
    <Alert startElement={<Spinner size="sm" />} status="info" title="We are loading something" />
  )
};

export const ColorOverride: Story = {
  args: {
    color: "primary",
    status: "info",
    title: "This is an info alert but shown as primary"
  }
};

export const Dismissible: Story = {
  render: function DismissibleStory() {
    const [open, setOpen] = useState(true);
    if (!open) {
      return (
        <Button size="sm" variant="outline" onClick={() => setOpen(true)}>
          Show alert
        </Button>
      );
    }
    return (
      <Alert
        description="Dismiss to hide this message."
        endElement={
          <Button size="sm" variant="ghost" onClick={() => setOpen(false)}>
            Dismiss
          </Button>
        }
        status="info"
        title="Tip"
      />
    );
  }
};

export const Inline: Story = {
  args: {
    description: "Additional details inline with the title.",
    inline: true,
    title: "Heads up"
  }
};

export const Compact: Story = {
  render: () => (
    <Stack gap="3">
      <Alert compact status="info" title="New version available" />
      <Alert
        compact
        status="warning"
        title="Storage almost full"
        description="Upgrade to add more space."
      />
      <Alert compact status="error" title="Failed to save" variant="outline" />
      <Alert
        compact
        endElement={
          <Button size="xs" variant="ghost">
            Dismiss
          </Button>
        }
        status="success"
        title="Copied to clipboard"
        variant="subtle"
      />
    </Stack>
  )
};
