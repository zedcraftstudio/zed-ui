export type ComponentCategory =
  | "Layout"
  | "Typography"
  | "Actions"
  | "Forms"
  | "Feedback"
  | "Overlays"
  | "Data display"
  | "Navigation";

export type ComponentStatus = "ready" | "basic";

export type ComponentEntry = {
  category: ComponentCategory;
  description: string;
  id: string;
  label: string;
  status: ComponentStatus;
};

export const COMPONENTS: ComponentEntry[] = [
  // Layout
  { id: "box", label: "Box", category: "Layout", description: "Low-level layout primitive with system props.", status: "ready" },
  { id: "container", label: "Container", category: "Layout", description: "Centered max-width wrapper for page content.", status: "ready" },
  { id: "flex", label: "Flex", category: "Layout", description: "Flexbox layout with gap, align, and justify.", status: "ready" },
  { id: "grid", label: "Grid", category: "Layout", description: "CSS grid layout for responsive columns.", status: "ready" },
  { id: "stack", label: "Stack", category: "Layout", description: "Used to layout its children in a vertical or horizontal stack.", status: "ready" },
  // Typography
  { id: "heading", label: "Heading", category: "Typography", description: "Semantic headings with size and weight tokens.", status: "ready" },
  { id: "text", label: "Text", category: "Typography", description: "Body copy with size, weight, and color variants.", status: "ready" },
  // Actions
  { id: "button", label: "Button", category: "Actions", description: "Trigger actions with variants, sizes, and loading.", status: "ready" },
  { id: "icon-button", label: "IconButton", category: "Actions", description: "Icon-only button for compact toolbars.", status: "ready" },
  // Forms
  { id: "form-field", label: "FormField", category: "Forms", description: "Label, hint, and error wrapper for inputs.", status: "ready" },
  { id: "input", label: "Input", category: "Forms", description: "Single-line text input.", status: "ready" },
  { id: "textarea", label: "Textarea", category: "Forms", description: "Multi-line text input.", status: "ready" },
  { id: "select", label: "Select", category: "Forms", description: "Single-select dropdown powered by Base UI.", status: "ready" },
  { id: "multi-select", label: "MultiSelect", category: "Forms", description: "Multi-select dropdown with tags.", status: "ready" },
  { id: "checkbox", label: "Checkbox", category: "Forms", description: "Boolean toggle with label.", status: "ready" },
  { id: "switch", label: "Switch", category: "Forms", description: "On/off control for settings.", status: "ready" },
  { id: "radio", label: "Radio", category: "Forms", description: "Exclusive choice within a group.", status: "ready" },
  // Feedback
  { id: "alert", label: "Alert", category: "Feedback", description: "Inline status message with title and description.", status: "ready" },
  { id: "badge", label: "Badge", category: "Feedback", description: "Compact label for status or counts.", status: "ready" },
  { id: "spinner", label: "Spinner", category: "Feedback", description: "Loading indicator.", status: "ready" },
  { id: "skeleton", label: "Skeleton", category: "Feedback", description: "Placeholder while content loads.", status: "ready" },
  { id: "toast", label: "Toast", category: "Feedback", description: "Transient notifications via useToast.", status: "ready" },
  // Overlays
  { id: "dialog", label: "Dialog", category: "Overlays", description: "Modal dialog with focus trap.", status: "ready" },
  { id: "drawer", label: "Drawer", category: "Overlays", description: "Side panel overlay.", status: "ready" },
  { id: "popover", label: "Popover", category: "Overlays", description: "Anchored floating panel.", status: "ready" },
  { id: "tooltip", label: "Tooltip", category: "Overlays", description: "Hover or focus hint.", status: "ready" },
  // Data display
  { id: "avatar", label: "Avatar", category: "Data display", description: "User or entity avatar with fallback.", status: "ready" },
  { id: "card", label: "Card", category: "Data display", description: "Grouped content with header and footer.", status: "ready" },
  { id: "table", label: "Table", category: "Data display", description: "Tabular data display.", status: "ready" },
  // Navigation
  { id: "tabs", label: "Tabs", category: "Navigation", description: "Organize related panels.", status: "ready" },
  { id: "accordion", label: "Accordion", category: "Navigation", description: "Expandable sections for grouped content.", status: "ready" },
  { id: "menu", label: "Menu", category: "Navigation", description: "Dropdown menu with keyboard navigation.", status: "ready" }
];

export const COMPONENT_IDS = new Set(COMPONENTS.map((c) => c.id));

export function getComponentById(id: string): ComponentEntry | undefined {
  return COMPONENTS.find((c) => c.id === id);
}

export const CATEGORY_ORDER: ComponentCategory[] = [
  "Layout",
  "Typography",
  "Actions",
  "Forms",
  "Feedback",
  "Overlays",
  "Data display",
  "Navigation"
];
