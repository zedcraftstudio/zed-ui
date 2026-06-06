import type { PropRow } from "./types";
import { boxProps, ALERT_STATUS, ALERT_VARIANT, BADGE_VARIANT, CHECKBOX_CARD_VARIANT, CHECKBOX_VARIANT, INPUT_VARIANT, POLYMORPHIC_PROPS, SKELETON_VARIANT, ZED_COLOR, ZED_SIZE, ZED_VARIANT } from "./shared";

export const COMPONENT_PROPS: Record<string, PropRow[]> = {
  box: boxProps([
    { name: "className", default: "—", type: "string | undefined" },
    { name: "style", default: "—", type: "CSSProperties | undefined" }
  ]),

  container: boxProps([
    { name: "size", default: '"xl"', type: `${ZED_SIZE} | "2xl" | "full" | undefined` },
    {
      name: "centerContent",
      default: "true",
      type: "boolean | undefined",
      description: "Center the container with auto horizontal margins."
    },
    {
      name: "fluid",
      default: "false",
      type: "boolean | undefined",
      description: "Remove the max-width constraint and stretch to the parent."
    },
    { name: "centered", default: "true", type: "boolean | undefined", description: "Deprecated alias for centerContent." }
  ]),

  flex: boxProps([
    { name: "direction", default: '"row"', type: 'CSSProperties["flexDirection"] | undefined' },
    { name: "align", default: "—", type: 'CSSProperties["alignItems"] | undefined' },
    { name: "justify", default: "—", type: 'CSSProperties["justifyContent"] | undefined' },
    { name: "wrap", default: "—", type: 'CSSProperties["flexWrap"] | undefined' },
    { name: "basis", default: "—", type: 'CSSProperties["flexBasis"] | undefined' },
    { name: "grow", default: "—", type: 'CSSProperties["flexGrow"] | undefined' },
    { name: "shrink", default: "—", type: 'CSSProperties["flexShrink"] | undefined' },
    { name: "inline", default: "false", type: "boolean | undefined", description: "Render as inline-flex." }
  ]),

  grid: boxProps([
    { name: "columns", default: "—", type: 'CSSProperties["gridTemplateColumns"] | undefined' },
    { name: "rows", default: "—", type: 'CSSProperties["gridTemplateRows"] | undefined' },
    { name: "areas", default: "—", type: 'CSSProperties["gridTemplateAreas"] | undefined' },
    { name: "align", default: "—", type: 'CSSProperties["alignItems"] | undefined' },
    { name: "justify", default: "—", type: 'CSSProperties["justifyContent"] | undefined' },
    { name: "flow", default: "—", type: 'CSSProperties["gridAutoFlow"] | undefined' },
    { name: "autoRows", default: "—", type: 'CSSProperties["gridAutoRows"] | undefined' },
    { name: "autoColumns", default: "—", type: 'CSSProperties["gridAutoColumns"] | undefined' },
    { name: "inline", default: "false", type: "boolean | undefined", description: "Render as inline-grid." },
    { name: "GridItem.colSpan", default: "—", type: "number | undefined", description: "Span columns on GridItem." },
    { name: "GridItem.rowSpan", default: "—", type: "number | undefined", description: "Span rows on GridItem." }
  ]),

  stack: boxProps([
    { name: "direction", default: '"column"', type: 'CSSProperties["flexDirection"] | undefined' },
    { name: "wrap", default: "—", type: 'CSSProperties["flexWrap"] | undefined' },
    {
      name: "separator",
      default: "—",
      type: "ReactNode | undefined",
      description: "Element rendered between each child."
    }
  ]),

  heading: boxProps([
    {
      name: "size",
      default: '"xl"',
      type: '"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | undefined',
      description: "Visual scale of the heading. Defaults from level when omitted."
    },
    { name: "level", default: "2", type: "1 | 2 | 3 | 4 | 5 | 6 | undefined", description: "Semantic heading level (h1–h6)." },
    {
      name: "weight",
      default: '"semibold"',
      type: '"regular" | "medium" | "semibold" | "bold" | undefined',
      description: "Font weight of the heading."
    }
  ]),

  text: boxProps([
    { name: "size", default: '"md"', type: '"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | undefined' },
    {
      name: "weight",
      default: '"regular"',
      type: '"regular" | "medium" | "semibold" | "bold" | undefined',
      description: "Font weight of the text."
    },
    { name: "align", default: "—", type: 'CSSProperties["textAlign"] | undefined' },
    { name: "truncate", default: "false", type: "boolean | undefined", description: "Truncate text after a single line." },
    {
      name: "lineClamp",
      default: "—",
      type: "number | undefined",
      description: "Clamp text after the given number of lines."
    }
  ]),

  button: boxProps([
    { name: "variant", default: '"solid"', type: `${ZED_VARIANT} | undefined` },
    { name: "color", default: '"primary"', type: `${ZED_COLOR} | undefined` },
    { name: "size", default: '"md"', type: `${ZED_SIZE} | undefined` },
    { name: "loading", default: "false", type: "boolean | undefined" },
    { name: "fullWidth", default: "false", type: "boolean | undefined" },
    { name: "startIcon", default: "—", type: "ReactNode | undefined" },
    { name: "endIcon", default: "—", type: "ReactNode | undefined" },
    { name: "disabled", default: "—", type: "boolean | undefined" }
  ]),

  "icon-button": boxProps([
    { name: "variant", default: '"ghost"', type: `${ZED_VARIANT} | undefined` },
    { name: "color", default: '"primary"', type: `${ZED_COLOR} | undefined` },
    { name: "size", default: '"md"', type: `${ZED_SIZE} | undefined` },
    { name: "radius", default: '"md"', type: '"none" | "xs" | "sm" | "md" | "lg" | "xl" | "full" | undefined' },
    { name: "icon", default: "—", type: "ReactNode | undefined" },
    { name: "loading", default: "false", type: "boolean | undefined" },
    { name: "aria-label", default: "—", type: "string" }
  ]),

  "form-field": boxProps([
    { name: "label", default: "—", type: "ReactNode | undefined" },
    { name: "description", default: "—", type: "ReactNode | undefined" },
    { name: "error", default: "—", type: "ReactNode | undefined", description: "Shows error text and applies invalid styling to the child control." },
    { name: "required", default: "false", type: "boolean | undefined" },
    { name: "htmlFor", default: "—", type: "string | undefined" },
    { name: "children", default: "—", type: "ReactNode" }
  ]),

  input: boxProps([
    { name: "variant", default: '"outline"', type: `${INPUT_VARIANT} | undefined` },
    { name: "size", default: '"md"', type: `${ZED_SIZE} | undefined` },
    { name: "startIcon", default: "—", type: "ReactNode | undefined" },
    { name: "endIcon", default: "—", type: "ReactNode | undefined" },
    { name: "invalid", default: "false", type: "boolean | undefined" },
    { name: "disabled", default: "—", type: "boolean | undefined" },
    { name: "placeholder", default: "—", type: "string | undefined" }
  ]),

  textarea: boxProps([
    { name: "size", default: '"md"', type: `${ZED_SIZE} | undefined` },
    { name: "startIcon", default: "—", type: "ReactNode | undefined" },
    { name: "endIcon", default: "—", type: "ReactNode | undefined" },
    { name: "invalid", default: "false", type: "boolean | undefined" },
    { name: "rows", default: "—", type: "number | undefined" }
  ]),

  select: [
    ...POLYMORPHIC_PROPS,
    { name: "options", default: "—", type: "SelectOption[]" },
    { name: "value", default: "—", type: "string | undefined" },
    { name: "defaultValue", default: "—", type: "string | undefined" },
    { name: "onValueChange", default: "—", type: "(value: string) => void | undefined" },
    { name: "placeholder", default: "—", type: "string | undefined" },
    { name: "disabled", default: "—", type: "boolean | undefined" },
    { name: "size", default: '"md"', type: `${ZED_SIZE} | undefined` }
  ],

  "multi-select": [
    ...POLYMORPHIC_PROPS,
    { name: "options", default: "—", type: "SelectOption[]" },
    { name: "value", default: "—", type: "string[] | undefined" },
    { name: "defaultValue", default: "—", type: "string[] | undefined" },
    { name: "onValueChange", default: "—", type: "(value: string[]) => void | undefined" },
    { name: "placeholder", default: "—", type: "string | undefined" },
    { name: "disabled", default: "—", type: "boolean | undefined" }
  ],

  checkbox: [
    { name: "checked", default: "—", type: "boolean | undefined" },
    { name: "defaultChecked", default: "—", type: "boolean | undefined" },
    { name: "onCheckedChange", default: "—", type: "(checked: boolean) => void | undefined" },
    { name: "indeterminate", default: "false", type: "boolean | undefined" },
    { name: "variant", default: '"solid"', type: `${CHECKBOX_VARIANT} | undefined` },
    { name: "color", default: '"primary"', type: `${ZED_COLOR} | undefined` },
    { name: "size", default: '"md"', type: `${ZED_SIZE} | undefined` },
    { name: "invalid", default: "false", type: "boolean | undefined" },
    { name: "disabled", default: "—", type: "boolean | undefined" },
    { name: "readOnly", default: "—", type: "boolean | undefined" },
    { name: "label", default: "—", type: "ReactNode | undefined" },
    { name: "description", default: "—", type: "ReactNode | undefined" }
  ],

  "checkbox-card": [
    { name: "checked", default: "—", type: "boolean | undefined" },
    { name: "defaultChecked", default: "—", type: "boolean | undefined" },
    { name: "onCheckedChange", default: "—", type: "(checked: boolean) => void | undefined" },
    { name: "variant", default: '"outline"', type: `${CHECKBOX_CARD_VARIANT} | undefined` },
    { name: "color", default: '"primary"', type: `${ZED_COLOR} | undefined` },
    { name: "size", default: '"md"', type: `${ZED_SIZE} | undefined` },
    { name: "showIndicator", default: "true", type: "boolean | undefined" },
    { name: "invalid", default: "false", type: "boolean | undefined" },
    { name: "disabled", default: "—", type: "boolean | undefined" },
    { name: "label", default: "—", type: "ReactNode | undefined" },
    { name: "description", default: "—", type: "ReactNode | undefined" }
  ],

  switch: [
    { name: "checked", default: "—", type: "boolean | undefined" },
    { name: "defaultChecked", default: "—", type: "boolean | undefined" },
    { name: "onCheckedChange", default: "—", type: "(checked: boolean) => void | undefined" },
    { name: "variant", default: '"solid"', type: '"solid" | "raised" | undefined' },
    { name: "color", default: '"primary"', type: "ZedColor | undefined" },
    { name: "size", default: '"md"', type: "ZedSize | undefined" },
    { name: "invalid", default: "false", type: "boolean | undefined" },
    { name: "disabled", default: "—", type: "boolean | undefined" },
    { name: "label", default: "—", type: "ReactNode | undefined" },
    { name: "description", default: "—", type: "ReactNode | undefined" },
    { name: "trackLabel", default: "—", type: "{ on: ReactNode; off: ReactNode } | undefined" },
    { name: "thumbLabel", default: "—", type: "{ on: ReactNode; off: ReactNode } | undefined" }
  ],

  radio: [
    { name: "value", default: "—", type: "string | undefined" },
    { name: "variant", default: '"outline"', type: `${CHECKBOX_VARIANT} | undefined` },
    { name: "color", default: '"primary"', type: `${ZED_COLOR} | undefined` },
    { name: "size", default: '"md"', type: `${ZED_SIZE} | undefined` },
    { name: "invalid", default: "false", type: "boolean | undefined" },
    { name: "disabled", default: "—", type: "boolean | undefined" },
    { name: "label", default: "—", type: "ReactNode | undefined" },
    { name: "description", default: "—", type: "ReactNode | undefined" }
  ],

  "radio-group": [
    { name: "value", default: "—", type: "string | undefined" },
    { name: "defaultValue", default: "—", type: "string | undefined" },
    { name: "onValueChange", default: "—", type: "(value: string) => void | undefined" },
    { name: "disabled", default: "—", type: "boolean | undefined" },
    { name: "orientation", default: '"vertical"', type: '"horizontal" | "vertical" | undefined' }
  ],

  "radio-card": [
    { name: "value", default: "—", type: "string" },
    { name: "variant", default: '"outline"', type: `${CHECKBOX_CARD_VARIANT} | undefined` },
    { name: "color", default: '"primary"', type: `${ZED_COLOR} | undefined` },
    { name: "size", default: '"md"', type: `${ZED_SIZE} | undefined` },
    { name: "showIndicator", default: "true", type: "boolean | undefined" },
    { name: "invalid", default: "false", type: "boolean | undefined" },
    { name: "disabled", default: "—", type: "boolean | undefined" },
    { name: "label", default: "—", type: "ReactNode | undefined" },
    { name: "description", default: "—", type: "ReactNode | undefined" }
  ],

  alert: boxProps([
    { name: "status", default: '"info"', type: `${ALERT_STATUS} | undefined` },
    { name: "variant", default: '"subtle"', type: `${ALERT_VARIANT} | undefined` },
    { name: "size", default: '"md"', type: `${ZED_SIZE} | undefined` },
    { name: "color", default: "—", type: `${ZED_COLOR} | undefined` },
    { name: "inline", default: "false", type: "boolean | undefined" },
    { name: "compact", default: "false", type: "boolean | undefined" },
    { name: "title", default: "—", type: "ReactNode | undefined" },
    { name: "description", default: "—", type: "ReactNode | undefined" },
    { name: "icon", default: "—", type: "ReactNode | undefined" },
    { name: "startElement", default: "—", type: "ReactNode | undefined" },
    { name: "endElement", default: "—", type: "ReactNode | undefined" },
    { name: "children", default: "—", type: "ReactNode | undefined" }
  ]),

  badge: boxProps([
    { name: "variant", default: '"soft"', type: `${BADGE_VARIANT} | undefined` },
    { name: "color", default: '"neutral"', type: `${ZED_COLOR} | "info" | undefined` },
    { name: "size", default: '"sm"', type: `${ZED_SIZE} | undefined` },
    { name: "pill", default: "true", type: "boolean | undefined" },
    { name: "radius", default: "—", type: `"none" | "xs" | "sm" | "md" | "lg" | "xl" | "full" | undefined` },
    { name: "avatar", default: "—", type: `{ src?: string; fallback?: string; alt?: string } | undefined` },
    { name: "statusDot", default: "false", type: "boolean | undefined" },
    { name: "max", default: "—", type: "number | undefined" },
    { name: "startIcon", default: "—", type: "ReactNode | undefined" },
    { name: "endIcon", default: "—", type: "ReactNode | undefined" },
    { name: "onClose", default: "—", type: "MouseEventHandler | undefined" },
    { name: "children", default: "—", type: "ReactNode | undefined" }
  ]),

  spinner: boxProps([
    { name: "size", default: '"md"', type: `${ZED_SIZE} | undefined` },
    { name: "label", default: '"Loading"', type: "string | undefined" }
  ]),

  skeleton: boxProps([
    { name: "loading", default: "true", type: "boolean | undefined" },
    { name: "variant", default: '"pulse"', type: `${SKELETON_VARIANT} | undefined` },
    { name: "children", default: "—", type: "ReactNode | undefined" }
  ]),

  "skeleton-circle": boxProps([
    { name: "loading", default: "true", type: "boolean | undefined" },
    { name: "variant", default: '"pulse"', type: `${SKELETON_VARIANT} | undefined` },
    { name: "size", default: '"md"', type: `${ZED_SIZE} | undefined` }
  ]),

  "skeleton-text": boxProps([
    { name: "loading", default: "true", type: "boolean | undefined" },
    { name: "variant", default: '"pulse"', type: `${SKELETON_VARIANT} | undefined` },
    { name: "noOfLines", default: "3", type: "number | undefined" },
    { name: "gap", default: '"2"', type: `SpaceToken | undefined` },
    { name: "rootProps", default: "—", type: "StackOwnProps | undefined" }
  ]),

  toast: [
    { name: "title", default: "—", type: "ReactNode" },
    { name: "description", default: "—", type: "ReactNode | undefined" },
    { name: "status", default: '"info"', type: `${ALERT_STATUS} | undefined` },
    { name: "variant", default: '"surface"', type: `${ALERT_VARIANT} | "default" | "success" | "warning" | "danger" | undefined` },
    { name: "size", default: '"md"', type: `${ZED_SIZE} | undefined` },
    { name: "duration", default: "4000", type: "number | undefined" },
    { name: "icon", default: "—", type: "ReactNode | undefined" },
    { name: "startElement", default: "—", type: "ReactNode | undefined" },
    { name: "endElement", default: "—", type: "ReactNode | undefined" }
  ],

  dialog: [
    { name: "open", default: "false", type: "boolean | undefined", description: "Controlled open state on Dialog.Root." },
    { name: "defaultOpen", default: "false", type: "boolean | undefined", description: "Initial open state when uncontrolled." },
    {
      name: "onOpenChange",
      default: "—",
      type: "(open: boolean, eventDetails?) => void | undefined",
      description: "Called when the dialog opens or closes."
    },
    {
      name: "modal",
      default: "true",
      type: 'boolean | "trap-focus" | undefined',
      description: "Modal focus trap and scroll lock behavior."
    },
    {
      name: "disablePointerDismissal",
      default: "false",
      type: "boolean | undefined",
      description: "When true, outside clicks do not close the dialog."
    },
    {
      name: "DialogContent.title",
      default: "—",
      type: "ReactNode | undefined",
      description: "Heading shown in the dialog header."
    },
    {
      name: "DialogContent.description",
      default: "—",
      type: "ReactNode | undefined",
      description: "Optional supporting text below the title."
    },
    {
      name: "DialogContent.size",
      default: '"md"',
      type: '"sm" | "md" | "lg" | undefined',
      description: "Popup width token passed to DialogContent."
    },
    {
      name: "DialogContent.footer",
      default: "—",
      type: "ReactNode | undefined",
      description: "Action row rendered in a separated footer."
    },
    {
      name: "DialogContent.children",
      default: "—",
      type: "ReactNode | undefined",
      description: "Main dialog body content."
    }
  ],

  drawer: [
    { name: "open", default: "false", type: "boolean | undefined", description: "Controlled open state on Drawer.Root." },
    { name: "defaultOpen", default: "false", type: "boolean | undefined", description: "Initial open state when uncontrolled." },
    {
      name: "onOpenChange",
      default: "—",
      type: "(open: boolean, eventDetails?) => void | undefined",
      description: "Called when the drawer opens or closes."
    },
    {
      name: "modal",
      default: "true",
      type: 'boolean | "trap-focus" | undefined',
      description: "Modal focus trap and scroll lock behavior."
    },
    {
      name: "disablePointerDismissal",
      default: "false",
      type: "boolean | undefined",
      description: "When true, outside clicks do not close the drawer."
    },
    {
      name: "DrawerContent.title",
      default: "—",
      type: "ReactNode | undefined",
      description: "Heading shown at the top of the drawer."
    },
    {
      name: "DrawerContent.side",
      default: '"right"',
      type: '"left" | "right" | "top" | "bottom" | undefined',
      description: "Edge the drawer slides in from (ZUI placement: start/end/top/bottom)."
    },
    {
      name: "DrawerContent.children",
      default: "—",
      type: "ReactNode | undefined",
      description: "Main drawer body content."
    }
  ],

  popover: [
    { name: "open", default: "false", type: "boolean | undefined", description: "Controlled open state on Popover.Root." },
    { name: "defaultOpen", default: "false", type: "boolean | undefined", description: "Initial open state when uncontrolled." },
    {
      name: "onOpenChange",
      default: "—",
      type: "(open: boolean, eventDetails?) => void | undefined",
      description: "Called when the popover opens or closes."
    },
    {
      name: "modal",
      default: "false",
      type: "boolean | undefined",
      description: "When true, traps focus and blocks outside interaction."
    },
    {
      name: "PopoverPanel.title",
      default: "—",
      type: "ReactNode | undefined",
      description: "Heading shown in the popover header."
    },
    {
      name: "PopoverPanel.description",
      default: "—",
      type: "ReactNode | undefined",
      description: "Supporting text below the title."
    },
    {
      name: "PopoverPanel.side",
      default: "—",
      type: '"top" | "right" | "bottom" | "left" | undefined',
      description: "Placement passed to Popover.Positioner."
    },
    {
      name: "PopoverPanel.align",
      default: "—",
      type: '"start" | "center" | "end" | undefined',
      description: "Alignment passed to Popover.Positioner."
    },
    {
      name: "PopoverPanel.sideOffset",
      default: "8",
      type: "number | undefined",
      description: "Distance between the trigger and popover content."
    },
    {
      name: "PopoverPanel.showArrow",
      default: "false",
      type: "boolean | undefined",
      description: "Render Popover.Arrow inside the popup."
    },
    {
      name: "PopoverPanel.footer",
      default: "—",
      type: "ReactNode | undefined",
      description: "Action row rendered below the body."
    },
    {
      name: "PopoverPanel.children",
      default: "—",
      type: "ReactNode | undefined",
      description: "Main popover body content."
    }
  ],

  tooltip: [
    {
      name: "TooltipProvider.delay",
      default: "600",
      type: "number | undefined",
      description: "Shared open delay for tooltips in milliseconds."
    },
    {
      name: "TooltipProvider.closeDelay",
      default: "0",
      type: "number | undefined",
      description: "Shared close delay for tooltips in milliseconds."
    },
    {
      name: "Tooltip.Root.open",
      default: "false",
      type: "boolean | undefined",
      description: "Controlled open state."
    },
    {
      name: "Tooltip.Root.onOpenChange",
      default: "—",
      type: "(open: boolean) => void | undefined",
      description: "Called when the tooltip opens or closes."
    },
    {
      name: "Tooltip.Root.disabled",
      default: "false",
      type: "boolean | undefined",
      description: "Prevents the tooltip from opening."
    },
    {
      name: "Tooltip.Root.disableHoverablePopup",
      default: "false",
      type: "boolean | undefined",
      description: "When true, the tooltip closes when the pointer leaves the trigger."
    },
    {
      name: "TooltipContent.showArrow",
      default: "true",
      type: "boolean | undefined",
      description: "Render Tooltip.Arrow inside the popup."
    },
    {
      name: "TooltipContent.side",
      default: '"top"',
      type: '"top" | "right" | "bottom" | "left" | undefined',
      description: "Placement relative to the trigger."
    },
    {
      name: "TooltipContent.sideOffset",
      default: "11",
      type: "number | undefined",
      description: "Distance between the trigger and tooltip."
    },
    {
      name: "TooltipContent.align",
      default: '"center"',
      type: '"start" | "center" | "end" | undefined',
      description: "Alignment along the placement axis."
    },
    {
      name: "TooltipContent.children",
      default: "—",
      type: "ReactNode",
      description: "Tooltip label or rich content."
    }
  ],

  avatar: [
    { name: "name", default: "—", type: "string | undefined", description: "Full name used to derive initials." },
    { name: "fallback", default: "—", type: "ReactNode | undefined", description: "Explicit fallback content or initials." },
    { name: "src", default: "—", type: "string | undefined", description: "Image URL." },
    { name: "srcSet", default: "—", type: "string | undefined", description: "Responsive image srcset." },
    { name: "alt", default: "—", type: "string | undefined", description: "Image alt text." },
    { name: "size", default: '"md"', type: `${ZED_SIZE} | undefined` },
    { name: "variant", default: '"subtle"', type: '"subtle" | "solid" | "outline" | undefined' },
    { name: "color", default: '"primary"', type: `${ZED_COLOR} | undefined` },
    { name: "shape", default: '"full"', type: '"full" | "rounded" | "square" | undefined' },
    { name: "ring", default: "false", type: "boolean | undefined", description: "Show an outline ring around the avatar." },
    { name: "icon", default: "—", type: "ReactNode | undefined", description: "Custom icon when no name, fallback, or image is provided." },
    {
      name: "AvatarGroup.max",
      default: "—",
      type: "number | undefined",
      description: "Maximum visible avatars before rendering a +N overflow avatar."
    },
    {
      name: "AvatarGroup.stacking",
      default: '"last-on-top"',
      type: '"first-on-top" | "last-on-top" | undefined',
      description: "Stacking order for overlapping avatars."
    }
  ],

  card: [
    { name: "variant", default: '"outline"', type: '"elevated" | "outline" | "subtle" | "ghost" | "filled" | "solid" | "unstyled" | undefined' },
    { name: "size", default: '"md"', type: '"xs" | "sm" | "md" | "lg" | "xl" | undefined' },
    {
      name: "orientation",
      default: '"vertical"',
      type: '"vertical" | "horizontal" | undefined',
      description: "Layout direction for image or split content."
    },
    { name: "header", default: "—", type: "ReactNode | undefined", description: "Shortcut prop on the closed Card helper." },
    { name: "footer", default: "—", type: "ReactNode | undefined", description: "Shortcut prop on the closed Card helper." },
    { name: "children", default: "—", type: "ReactNode", description: "Main card body content." }
  ],

  table: boxProps([
    { name: "variant", default: '"line"', type: '"line" | "outline" | "subtle" | undefined' },
    { name: "size", default: '"md"', type: '"sm" | "md" | "lg" | undefined' },
    { name: "striped", default: "false", type: "boolean | undefined", description: "Zebra-striping on body rows." },
    {
      name: "interactive",
      default: "false",
      type: "boolean | undefined",
      description: "Highlight rows on hover."
    },
    {
      name: "stickyHeader",
      default: "false",
      type: "boolean | undefined",
      description: "Keep the header row visible while scrolling."
    },
    {
      name: "showColumnBorder",
      default: "false",
      type: "boolean | undefined",
      description: "Vertical borders between columns."
    }
  ]),

  tabs: [
    { name: "variant", default: '"line"', type: '"line" | "subtle" | "enclosed" | "outline" | "plain" | undefined' },
    { name: "size", default: '"md"', type: '"sm" | "md" | "lg" | undefined' },
    { name: "color", default: '"primary"', type: `${ZED_COLOR} | undefined` },
    { name: "fitted", default: "false", type: "boolean | undefined", description: "Stretch triggers to fill the list width." },
    { name: "justify", default: '"start"', type: '"start" | "center" | "end" | undefined' },
    {
      name: "activationMode",
      default: '"automatic"',
      type: '"automatic" | "manual" | undefined',
      description: "Automatic selects tabs on arrow-key focus; manual requires Enter or Space."
    },
    { name: "value", default: "—", type: "string | undefined", description: "Controlled selected tab value." },
    { name: "defaultValue", default: "—", type: "string | undefined" },
    {
      name: "onValueChange",
      default: "—",
      type: "(value: string, eventDetails: object) => void | undefined"
    },
    {
      name: "orientation",
      default: '"horizontal"',
      type: '"horizontal" | "vertical" | undefined',
      description: "Affects keyboard navigation and layout."
    },
    {
      name: "lazyMount",
      default: "false",
      type: "boolean | undefined",
      description: "Tabs.Content prop. Render panel content only after first activation."
    },
    {
      name: "unmountOnExit",
      default: "true",
      type: "boolean | undefined",
      description: "Tabs.Content prop. Remove inactive panels from the DOM."
    }
  ],

  accordion: [
    { name: "variant", default: '"outline"', type: '"outline" | "plain" | undefined' },
    { name: "size", default: '"md"', type: `${ZED_SIZE} | undefined` },
    { name: "multiple", default: "false", type: "boolean | undefined", description: "Allow multiple panels open." },
    { name: "value", default: "—", type: "string[] | undefined", description: "Controlled open item values." },
    { name: "defaultValue", default: "—", type: "string[] | undefined" },
    { name: "disabled", default: "false", type: "boolean | undefined" },
    { name: "orientation", default: '"vertical"', type: '"horizontal" | "vertical" | undefined' }
  ],

  menu: [
    { name: "size", default: '"md"', type: `${ZED_SIZE} | undefined` },
    { name: "open", default: "—", type: "boolean | undefined", description: "Controlled open state." },
    { name: "defaultOpen", default: "false", type: "boolean | undefined" },
    { name: "onOpenChange", default: "—", type: "(open: boolean) => void | undefined" },
    { name: "Menu.Item.disabled", default: "false", type: "boolean | undefined" }
  ]
};

export function getComponentProps(componentId: string): PropRow[] {
  return COMPONENT_PROPS[componentId] ?? [];
}
