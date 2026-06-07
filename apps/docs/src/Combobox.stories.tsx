import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Combobox } from "@zed-ui/react";

const OPTIONS = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
  { label: "Angular", value: "angular", disabled: true }
];

const meta: Meta<typeof Combobox> = {
  title: "Forms/Combobox",
  component: Combobox,
  args: { options: OPTIONS, placeholder: "Search frameworks…" }
};

export default meta;
type Story = StoryObj<typeof Combobox>;

export const Default: Story = { args: { defaultValue: "react" } };

export const Controlled: Story = {
  render: function ControlledStory() {
    const [value, setValue] = useState("react");
    return (
      <Combobox
        options={OPTIONS}
        placeholder="Search frameworks…"
        value={value}
        onValueChange={(next) => setValue(next ?? "")}
      />
    );
  }
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: "20rem" }}>
      <Combobox options={OPTIONS} placeholder="Small" size="sm" />
      <Combobox defaultValue="react" options={OPTIONS} placeholder="Medium" size="md" />
      <Combobox options={OPTIONS} placeholder="Large" size="lg" />
    </div>
  )
};

export const Invalid: Story = {
  args: { invalid: true, placeholder: "Choose framework" }
};
