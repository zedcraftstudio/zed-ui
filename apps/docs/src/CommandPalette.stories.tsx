import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button, CommandPalette } from "@zed-ui/react";

const meta: Meta<typeof CommandPalette> = {
  title: "Overlays/CommandPalette",
  component: CommandPalette
};

export default meta;
type Story = StoryObj<typeof CommandPalette>;

const BASE_ITEMS = [
  { group: "File", id: "new", label: "New file" },
  { group: "File", id: "save", label: "Save file" },
  { group: "View", id: "theme", label: "Toggle theme" }
];

export const Default: Story = {
  render: function CommandPaletteStory() {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button size="sm" onClick={() => setOpen(true)}>
          Open palette
        </Button>
        <CommandPalette items={BASE_ITEMS} open={open} onOpenChange={setOpen} />
      </>
    );
  }
};

export const WithActions: Story = {
  render: function WithActionsStory() {
    const [open, setOpen] = useState(true);
    const [last, setLast] = useState("none");
    const items = BASE_ITEMS.map((item) => ({
      ...item,
      onSelect: () => {
        setLast(item.id);
        setOpen(false);
      }
    }));

    return (
      <>
        <Button size="sm" onClick={() => setOpen(true)}>
          Open palette
        </Button>
        <p style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>Last action: {last}</p>
        <CommandPalette items={items} open={open} onOpenChange={setOpen} />
      </>
    );
  }
};

export const Keywords: Story = {
  render: function KeywordsStory() {
    const [open, setOpen] = useState(true);
    return (
      <CommandPalette
        items={[
          { group: "View", id: "theme", keywords: ["dark", "light", "mode"], label: "Toggle theme" }
        ]}
        open={open}
        onOpenChange={setOpen}
        placeholder="Try typing dark…"
      />
    );
  }
};

export const EmptyState: Story = {
  render: function EmptyStateStory() {
    const [open, setOpen] = useState(true);
    return (
      <CommandPalette
        emptyMessage="No matching commands."
        items={[]}
        open={open}
        onOpenChange={setOpen}
      />
    );
  }
};
