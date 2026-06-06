import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Radio, RadioCard, RadioGroup, Stack } from "@zed-ui/react";

const meta: Meta<typeof Radio> = {
  title: "Forms/Radio",
  component: Radio,
  decorators: [
    (Story) => (
      <RadioGroup defaultValue="option-a">
        <Story />
      </RadioGroup>
    )
  ],
  args: {
    label: "Option A",
    value: "option-a"
  }
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {};

export const Checked: Story = {
  decorators: [
    (Story) => (
      <RadioGroup defaultValue="checked">
        <Story />
      </RadioGroup>
    )
  ],
  args: { label: "Selected option", value: "checked" }
};

export const Variants: Story = {
  render: () => (
    <Stack gap="3">
      <RadioGroup defaultValue="solid">
        <Radio value="solid" variant="solid" label="Solid" />
      </RadioGroup>
      <RadioGroup defaultValue="outline">
        <Radio value="outline" variant="outline" label="Outline" />
      </RadioGroup>
      <RadioGroup defaultValue="soft">
        <Radio value="soft" variant="soft" label="Soft" />
      </RadioGroup>
    </Stack>
  ),
  decorators: []
};

export const Colors: Story = {
  render: () => (
    <RadioGroup defaultValue="primary">
      <Stack gap="3">
        <Radio value="primary" color="primary" label="Primary" />
        <Radio value="success" color="success" label="Success" />
        <Radio value="danger" color="danger" label="Danger" />
      </Stack>
    </RadioGroup>
  ),
  decorators: []
};

export const Sizes: Story = {
  render: () => (
    <RadioGroup defaultValue="md">
      <Stack gap="3">
        <Radio value="sm" size="sm" label="Small" />
        <Radio value="md" size="md" label="Medium" />
        <Radio value="lg" size="lg" label="Large" />
      </Stack>
    </RadioGroup>
  ),
  decorators: []
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const [value, setValue] = useState("starter");
    return (
      <RadioGroup value={value} onValueChange={(v) => setValue(v as string)}>
        <Stack gap="3">
          <Radio value="starter" label="Starter" />
          <Radio value="pro" label="Pro" />
          <Radio value="enterprise" label="Enterprise" />
        </Stack>
      </RadioGroup>
    );
  },
  decorators: []
};

export const WithDescription: Story = {
  args: {
    description: "Best for teams getting started.",
    label: "Starter plan",
    value: "starter"
  }
};

export const Disabled: Story = {
  args: { disabled: true, label: "Disabled option", value: "disabled" }
};

export const Invalid: Story = {
  args: { invalid: true, label: "Required selection", value: "invalid" }
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="starter" orientation="horizontal">
      <Radio value="starter" label="Starter" />
      <Radio value="pro" label="Pro" />
      <Radio value="enterprise" label="Enterprise" />
    </RadioGroup>
  ),
  decorators: []
};

export const RadioCardDefault: Story = {
  render: () => (
    <RadioGroup defaultValue="react">
      <RadioCard
        description="Component-based UI library with a large ecosystem."
        label="React"
        value="react"
      />
    </RadioGroup>
  ),
  decorators: []
};

export const RadioCardVariants: Story = {
  render: () => (
    <RadioGroup defaultValue="outline">
      <Stack gap="3" style={{ maxWidth: "20rem" }}>
        <RadioCard
          description="Border highlight"
          label="Outline"
          value="outline"
          variant="outline"
        />
        <RadioCard description="Soft background" label="Subtle" value="subtle" variant="subtle" />
        <RadioCard description="Filled card" label="Solid" value="solid" variant="solid" />
      </Stack>
    </RadioGroup>
  ),
  decorators: []
};

export const RadioCardGroup: Story = {
  render: function RadioCardGroupStory() {
    const [plan, setPlan] = useState("pro");
    const options = [
      {
        value: "starter",
        label: "Starter",
        description: "For individuals and small teams getting started."
      },
      {
        value: "pro",
        label: "Pro",
        description: "For growing teams that need more capacity."
      },
      {
        value: "enterprise",
        label: "Enterprise",
        description: "For organizations with advanced requirements."
      }
    ];

    return (
      <RadioGroup value={plan} onValueChange={(v) => setPlan(v as string)}>
        <Stack gap="3" style={{ maxWidth: "20rem" }}>
          {options.map((option) => (
            <RadioCard
              key={option.value}
              description={option.description}
              label={option.label}
              value={option.value}
            />
          ))}
        </Stack>
      </RadioGroup>
    );
  },
  decorators: []
};
