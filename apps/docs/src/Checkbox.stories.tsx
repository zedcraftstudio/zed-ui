import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox, CheckboxCard, Stack } from "@zed-ui/react";

const meta: Meta<typeof Checkbox> = {
  title: "Forms/Checkbox",
  component: Checkbox,
  args: {
    label: "Accept terms and conditions"
  }
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Checked: Story = {
  args: { defaultChecked: true }
};

export const Variants: Story = {
  render: () => (
    <Stack gap="3">
      <Checkbox defaultChecked variant="solid" label="Solid" />
      <Checkbox defaultChecked variant="outline" label="Outline" />
      <Checkbox defaultChecked variant="soft" label="Soft" />
    </Stack>
  )
};

export const Colors: Story = {
  render: () => (
    <Stack gap="3">
      <Checkbox defaultChecked color="primary" label="Primary" />
      <Checkbox defaultChecked color="success" label="Success" />
      <Checkbox defaultChecked color="danger" label="Danger" />
    </Stack>
  )
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="3">
      <Checkbox defaultChecked size="sm" label="Small" />
      <Checkbox defaultChecked size="md" label="Medium" />
      <Checkbox defaultChecked size="lg" label="Large" />
    </Stack>
  )
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        checked={checked}
        label="Subscribe to newsletter"
        onCheckedChange={(value) => setChecked(Boolean(value))}
      />
    );
  }
};

export const Indeterminate: Story = {
  render: () => (
    <Checkbox checked={false} indeterminate label="Select all" />
  )
};

export const WithDescription: Story = {
  args: {
    description: "By clicking this, you agree to our Terms and Privacy Policy."
  }
};

export const Invalid: Story = {
  args: { invalid: true, label: "Required field" }
};

export const Disabled: Story = {
  args: { defaultChecked: true, disabled: true, label: "Disabled" }
};

export const CheckboxCardDefault: Story = {
  render: () => (
    <CheckboxCard
      defaultChecked
      description="Component-based UI library with a large ecosystem."
      label="React"
    />
  )
};

export const CheckboxCardVariants: Story = {
  render: () => (
    <Stack gap="3" style={{ maxWidth: "20rem" }}>
      <CheckboxCard defaultChecked description="Border highlight" label="Outline" variant="outline" />
      <CheckboxCard defaultChecked description="Soft background" label="Subtle" variant="subtle" />
      <CheckboxCard defaultChecked description="Filled card" label="Solid" variant="solid" />
    </Stack>
  )
};

export const CheckboxCardGroup: Story = {
  render: function CheckboxCardGroupStory() {
    const [frameworks, setFrameworks] = useState<string[]>(["react"]);
    const options = [
      {
        value: "react",
        label: "React",
        description: "Component-based UI library with a large ecosystem."
      },
      {
        value: "vue",
        label: "Vue",
        description: "Progressive framework for building user interfaces."
      },
      {
        value: "svelte",
        label: "Svelte",
        description: "Compile-time approach with less runtime overhead."
      }
    ];

    return (
      <Stack gap="3" style={{ maxWidth: "20rem" }}>
        {options.map((option) => (
          <CheckboxCard
            key={option.value}
            checked={frameworks.includes(option.value)}
            description={option.description}
            label={option.label}
            onCheckedChange={(next) =>
              setFrameworks((current) =>
                next
                  ? [...current, option.value]
                  : current.filter((value) => value !== option.value)
              )
            }
          />
        ))}
      </Stack>
    );
  }
};
