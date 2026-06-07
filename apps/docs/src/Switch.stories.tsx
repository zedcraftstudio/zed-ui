import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Stack, Switch, SwitchCheckIcon, SwitchCloseIcon } from "@zed-ui/react";

const meta: Meta<typeof Switch> = {
  title: "Forms/Switch",
  component: Switch,
  args: {
    label: "Activate notifications"
  }
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {};

export const Checked: Story = {
  args: { defaultChecked: true }
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="3">
      <Switch defaultChecked size="sm" label="Small" />
      <Switch defaultChecked size="md" label="Medium" />
      <Switch defaultChecked size="lg" label="Large" />
    </Stack>
  )
};

export const Variants: Story = {
  render: () => (
    <Stack direction="row" gap="4" align="center">
      <Switch defaultChecked variant="solid" label="Solid" />
      <Switch defaultChecked variant="raised" label="Raised" />
    </Stack>
  )
};

export const Colors: Story = {
  render: () => (
    <Stack gap="3">
      <Switch defaultChecked color="primary" label="Primary" />
      <Switch defaultChecked color="success" label="Success" />
      <Switch defaultChecked color="danger" label="Danger" />
    </Stack>
  )
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const [checked, setChecked] = useState(false);
    return (
      <Switch checked={checked} label="Email notifications" onCheckedChange={setChecked} />
    );
  }
};

export const TrackIndicator: Story = {
  render: function TrackIndicatorStory() {
    const [checked, setChecked] = useState(false);
    return (
      <Switch
        checked={checked}
        label="Switch me"
        onCheckedChange={setChecked}
        trackLabel={{ on: "On", off: "Off" }}
      />
    );
  }
};

export const ThumbIndicator: Story = {
  render: function ThumbIndicatorStory() {
    const [checked, setChecked] = useState(true);
    return (
      <Switch
        checked={checked}
        label="Switch me"
        onCheckedChange={setChecked}
        thumbLabel={{
          on: <SwitchCheckIcon />,
          off: <SwitchCloseIcon />
        }}
      />
    );
  }
};

export const WithDescription: Story = {
  args: {
    defaultChecked: true,
    description: "Receive product updates and release notes.",
    label: "Email notifications"
  }
};

export const Disabled: Story = {
  args: { defaultChecked: true, disabled: true, label: "Activate notifications" }
};

export const Invalid: Story = {
  args: { invalid: true, label: "Required setting" }
};
