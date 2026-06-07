import type { Meta, StoryObj } from "@storybook/react";
import { Button, Stack, ToastProvider, useToast } from "@zed-ui/react";

function ToastDemo() {
  const { toast } = useToast();

  return (
    <Stack direction="row" gap="2" wrap="wrap">
      <Button
        size="sm"
        onClick={() =>
          toast({ title: "Saved", description: "Changes applied.", status: "success" })
        }
      >
        Success
      </Button>
      <Button
        size="sm"
        variant="soft"
        color="warning"
        onClick={() =>
          toast({ title: "Heads up", description: "Review required.", status: "warning" })
        }
      >
        Warning
      </Button>
      <Button
        size="sm"
        variant="soft"
        color="danger"
        onClick={() =>
          toast({ title: "Error", description: "Something went wrong.", status: "error" })
        }
      >
        Error
      </Button>
    </Stack>
  );
}

const meta: Meta = {
  title: "Feedback/Toast",
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    )
  ]
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => <ToastDemo />
};
