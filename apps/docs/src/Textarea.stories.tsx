import type { Meta, StoryObj } from "@storybook/react";
import { Stack, Textarea } from "@zed-ui/react";
import { AtIcon, MessageIcon } from "./shared/icons";

const meta: Meta<typeof Textarea> = {
  title: "Forms/Textarea",
  component: Textarea,
  args: {
    placeholder: "Notes…",
    rows: 3
  }
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};
export const Invalid: Story = { args: { invalid: true, placeholder: "Required field" } };

export const WithIcons: Story = {
  render: () => (
    <Stack gap="3" style={{ maxWidth: "20rem" }}>
      <Textarea startIcon={<MessageIcon size={16} />} placeholder="Leave a comment…" rows={3} />
      <Textarea endIcon={<AtIcon size={16} />} placeholder="Mention someone…" rows={3} />
    </Stack>
  )
};
