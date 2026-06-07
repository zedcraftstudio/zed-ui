import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DatePicker } from "@zed-ui/react";

const meta: Meta<typeof DatePicker> = {
  title: "Forms/DatePicker",
  component: DatePicker
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: function DatePickerStory() {
    const [value, setValue] = useState<Date | null>(null);
    return <DatePicker value={value} onValueChange={setValue} />;
  }
};

export const Sizes: Story = {
  render: function SizesStory() {
    const [value, setValue] = useState<Date | null>(null);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: "16rem" }}>
        <DatePicker size="sm" value={value} onValueChange={setValue} />
        <DatePicker size="md" value={value} onValueChange={setValue} />
        <DatePicker size="lg" value={value} onValueChange={setValue} />
      </div>
    );
  }
};

export const Disabled: Story = {
  args: { disabled: true, placeholder: "Unavailable" }
};

export const Invalid: Story = {
  args: { invalid: true, placeholder: "Required" }
};

export const MinMax: Story = {
  render: function MinMaxStory() {
    const [value, setValue] = useState<Date | null>(null);
    return (
      <div style={{ maxWidth: "16rem" }}>
        <DatePicker
          max={new Date(2026, 11, 31)}
          min={new Date(2026, 0, 1)}
          value={value}
          onValueChange={setValue}
        />
      </div>
    );
  }
};
