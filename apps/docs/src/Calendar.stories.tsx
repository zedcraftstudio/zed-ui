import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Calendar } from "@zed-ui/react";

const meta: Meta<typeof Calendar> = {
  title: "Forms/Calendar",
  component: Calendar
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: function CalendarStory() {
    const [value, setValue] = useState<Date | null>(new Date());
    return <Calendar value={value} onValueChange={setValue} />;
  }
};

export const MinMax: Story = {
  render: function MinMaxStory() {
    const [value, setValue] = useState<Date | null>(new Date(2026, 5, 7));
    return (
      <Calendar
        max={new Date(2026, 5, 30)}
        min={new Date(2026, 5, 1)}
        value={value}
        onValueChange={setValue}
      />
    );
  }
};

export const Disabled: Story = {
  render: function DisabledStory() {
    const [value, setValue] = useState<Date | null>(new Date());
    return <Calendar disabled value={value} onValueChange={setValue} />;
  }
};
