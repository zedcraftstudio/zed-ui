import type { PropRow } from "./types";
import {
  boxProps,
  ALERT_STATUS,
  ALERT_VARIANT,
  BADGE_VARIANT,
  CHECKBOX_CARD_VARIANT,
  CHECKBOX_VARIANT,
  INPUT_VARIANT,
  POLYMORPHIC_PROPS,
  SKELETON_VARIANT,
  ZED_COLOR,
  ZED_SIZE,
  ZED_VARIANT
} from "./shared";

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
    {
      name: "centered",
      default: "true",
      type: "boolean | undefined",
      description: "Deprecated alias for centerContent."
    }
  ]),

  flex: boxProps([
    { name: "direction", default: '"row"', type: 'CSSProperties["flexDirection"] | undefined' },
    { name: "align", default: "—", type: 'CSSProperties["alignItems"] | undefined' },
    { name: "justify", default: "—", type: 'CSSProperties["justifyContent"] | undefined' },
    { name: "wrap", default: "—", type: 'CSSProperties["flexWrap"] | undefined' },
    { name: "basis", default: "—", type: 'CSSProperties["flexBasis"] | undefined' },
    { name: "grow", default: "—", type: 'CSSProperties["flexGrow"] | undefined' },
    { name: "shrink", default: "—", type: 'CSSProperties["flexShrink"] | undefined' },
    {
      name: "inline",
      default: "false",
      type: "boolean | undefined",
      description: "Render as inline-flex."
    }
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
    {
      name: "inline",
      default: "false",
      type: "boolean | undefined",
      description: "Render as inline-grid."
    },
    {
      name: "GridItem.colSpan",
      default: "—",
      type: "number | undefined",
      description: "Span columns on GridItem."
    },
    {
      name: "GridItem.rowSpan",
      default: "—",
      type: "number | undefined",
      description: "Span rows on GridItem."
    }
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
    {
      name: "level",
      default: "2",
      type: "1 | 2 | 3 | 4 | 5 | 6 | undefined",
      description: "Semantic heading level (h1–h6)."
    },
    {
      name: "weight",
      default: '"semibold"',
      type: '"regular" | "medium" | "semibold" | "bold" | undefined',
      description: "Font weight of the heading."
    }
  ]),

  text: boxProps([
    {
      name: "size",
      default: '"md"',
      type: '"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | undefined'
    },
    {
      name: "weight",
      default: '"regular"',
      type: '"regular" | "medium" | "semibold" | "bold" | undefined',
      description: "Font weight of the text."
    },
    { name: "align", default: "—", type: 'CSSProperties["textAlign"] | undefined' },
    {
      name: "truncate",
      default: "false",
      type: "boolean | undefined",
      description: "Truncate text after a single line."
    },
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
    {
      name: "radius",
      default: '"md"',
      type: '"none" | "xs" | "sm" | "md" | "lg" | "xl" | "full" | undefined'
    },
    { name: "icon", default: "—", type: "ReactNode | undefined" },
    { name: "loading", default: "false", type: "boolean | undefined" },
    { name: "aria-label", default: "—", type: "string" }
  ]),

  "form-field": boxProps([
    { name: "label", default: "—", type: "ReactNode | undefined" },
    { name: "description", default: "—", type: "ReactNode | undefined" },
    {
      name: "error",
      default: "—",
      type: "ReactNode | undefined",
      description: "Shows error text and applies invalid styling to the child control."
    },
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
    {
      name: "radius",
      default: "—",
      type: `"none" | "xs" | "sm" | "md" | "lg" | "xl" | "full" | undefined`
    },
    {
      name: "avatar",
      default: "—",
      type: `{ src?: string; fallback?: string; alt?: string } | undefined`
    },
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
    {
      name: "variant",
      default: '"surface"',
      type: `${ALERT_VARIANT} | "default" | "success" | "warning" | "danger" | undefined`
    },
    { name: "size", default: '"md"', type: `${ZED_SIZE} | undefined` },
    { name: "duration", default: "4000", type: "number | undefined" },
    { name: "icon", default: "—", type: "ReactNode | undefined" },
    { name: "startElement", default: "—", type: "ReactNode | undefined" },
    { name: "endElement", default: "—", type: "ReactNode | undefined" }
  ],

  dialog: [
    {
      name: "open",
      default: "false",
      type: "boolean | undefined",
      description: "Controlled open state on Dialog.Root."
    },
    {
      name: "defaultOpen",
      default: "false",
      type: "boolean | undefined",
      description: "Initial open state when uncontrolled."
    },
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
    {
      name: "open",
      default: "false",
      type: "boolean | undefined",
      description: "Controlled open state on Drawer.Root."
    },
    {
      name: "defaultOpen",
      default: "false",
      type: "boolean | undefined",
      description: "Initial open state when uncontrolled."
    },
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
    {
      name: "open",
      default: "false",
      type: "boolean | undefined",
      description: "Controlled open state on Popover.Root."
    },
    {
      name: "defaultOpen",
      default: "false",
      type: "boolean | undefined",
      description: "Initial open state when uncontrolled."
    },
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
    {
      name: "name",
      default: "—",
      type: "string | undefined",
      description: "Full name used to derive initials."
    },
    {
      name: "fallback",
      default: "—",
      type: "ReactNode | undefined",
      description: "Explicit fallback content or initials."
    },
    { name: "src", default: "—", type: "string | undefined", description: "Image URL." },
    {
      name: "srcSet",
      default: "—",
      type: "string | undefined",
      description: "Responsive image srcset."
    },
    { name: "alt", default: "—", type: "string | undefined", description: "Image alt text." },
    { name: "size", default: '"md"', type: `${ZED_SIZE} | undefined` },
    { name: "variant", default: '"subtle"', type: '"subtle" | "solid" | "outline" | undefined' },
    { name: "color", default: '"primary"', type: `${ZED_COLOR} | undefined` },
    { name: "shape", default: '"full"', type: '"full" | "rounded" | "square" | undefined' },
    {
      name: "ring",
      default: "false",
      type: "boolean | undefined",
      description: "Show an outline ring around the avatar."
    },
    {
      name: "icon",
      default: "—",
      type: "ReactNode | undefined",
      description: "Custom icon when no name, fallback, or image is provided."
    },
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
    {
      name: "variant",
      default: '"outline"',
      type: '"elevated" | "outline" | "subtle" | "ghost" | "filled" | "solid" | "unstyled" | undefined'
    },
    { name: "size", default: '"md"', type: '"xs" | "sm" | "md" | "lg" | "xl" | undefined' },
    {
      name: "orientation",
      default: '"vertical"',
      type: '"vertical" | "horizontal" | undefined',
      description: "Layout direction for image or split content."
    },
    {
      name: "header",
      default: "—",
      type: "ReactNode | undefined",
      description: "Shortcut prop on the closed Card helper."
    },
    {
      name: "footer",
      default: "—",
      type: "ReactNode | undefined",
      description: "Shortcut prop on the closed Card helper."
    },
    { name: "children", default: "—", type: "ReactNode", description: "Main card body content." }
  ],

  table: boxProps([
    { name: "variant", default: '"line"', type: '"line" | "outline" | "subtle" | undefined' },
    { name: "size", default: '"md"', type: '"sm" | "md" | "lg" | undefined' },
    {
      name: "striped",
      default: "false",
      type: "boolean | undefined",
      description: "Zebra-striping on body rows."
    },
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
    {
      name: "variant",
      default: '"line"',
      type: '"line" | "subtle" | "enclosed" | "outline" | "plain" | undefined'
    },
    { name: "size", default: '"md"', type: '"sm" | "md" | "lg" | undefined' },
    { name: "color", default: '"primary"', type: `${ZED_COLOR} | undefined` },
    {
      name: "fitted",
      default: "false",
      type: "boolean | undefined",
      description: "Stretch triggers to fill the list width."
    },
    { name: "justify", default: '"start"', type: '"start" | "center" | "end" | undefined' },
    {
      name: "activationMode",
      default: '"automatic"',
      type: '"automatic" | "manual" | undefined',
      description: "Automatic selects tabs on arrow-key focus; manual requires Enter or Space."
    },
    {
      name: "value",
      default: "—",
      type: "string | undefined",
      description: "Controlled selected tab value."
    },
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
    {
      name: "multiple",
      default: "false",
      type: "boolean | undefined",
      description: "Allow multiple panels open."
    },
    {
      name: "value",
      default: "—",
      type: "string[] | undefined",
      description: "Controlled open item values."
    },
    { name: "defaultValue", default: "—", type: "string[] | undefined" },
    { name: "disabled", default: "false", type: "boolean | undefined" },
    { name: "orientation", default: '"vertical"', type: '"horizontal" | "vertical" | undefined' }
  ],

  menu: [
    { name: "size", default: '"md"', type: `${ZED_SIZE} | undefined` },
    {
      name: "open",
      default: "—",
      type: "boolean | undefined",
      description: "Controlled open state."
    },
    { name: "defaultOpen", default: "false", type: "boolean | undefined" },
    { name: "onOpenChange", default: "—", type: "(open: boolean) => void | undefined" },
    { name: "Menu.Item.disabled", default: "false", type: "boolean | undefined" }
  ],

  paper: boxProps([
    {
      name: "variant",
      default: '"elevated"',
      type: '"elevated" | "filled" | "outline" | "subtle" | undefined',
      description: "Surface style. Theme default via components.Paper.variant."
    },
    {
      name: "size",
      default: '"md"',
      type: `${ZED_SIZE} | undefined`,
      description: "Padding scale. Theme default via components.Paper.size."
    },
    {
      name: "radius",
      default: '"md"',
      type: '"none" | "xs" | "sm" | "md" | "lg" | "xl" | "full" | undefined'
    }
  ]),

  "app-shell": boxProps([
    {
      name: "header",
      default: "—",
      type: "ReactNode | undefined",
      description: "TopBar or custom header in the main column."
    },
    {
      name: "sidebar",
      default: "—",
      type: "ReactNode | undefined",
      description: "Sidebar navigation panel in the leading column."
    },
    {
      name: "footer",
      default: "—",
      type: "ReactNode | undefined",
      description: "Footer region below main content."
    },
    {
      name: "sidebarWidth",
      default: '"16rem"',
      type: "string | undefined",
      description: "Sets --zui-sidebar-width inherited by Sidebar."
    },
    {
      name: "height",
      default: '"screen"',
      type: '"screen" | "auto" | undefined',
      description: "screen fills the viewport; auto fits embedded docs and previews."
    },
    {
      name: "mainPadding",
      default: "true",
      type: "boolean | undefined",
      description: "Apply default padding to the main content region."
    },
    {
      name: "children",
      default: "—",
      type: "ReactNode",
      description: "Main content rendered in the center column."
    }
  ]),

  topbar: boxProps([
    {
      name: "brand",
      default: "—",
      type: "ReactNode | undefined",
      description: "Logo or product name beside the title."
    },
    {
      name: "title",
      default: "—",
      type: "ReactNode | undefined",
      description: "Primary page or section title."
    },
    {
      name: "actions",
      default: "—",
      type: "ReactNode | undefined",
      description: "Trailing action buttons or controls."
    },
    {
      name: "children",
      default: "—",
      type: "ReactNode | undefined",
      description: "Center content slot between title and actions."
    },
    {
      name: "size",
      default: '"md"',
      type: `${ZED_SIZE} | undefined`,
      description: "Bar height and horizontal padding."
    },
    {
      name: "sticky",
      default: "false",
      type: "boolean | undefined",
      description: "Stick to the top of the scroll container."
    },
    {
      name: "border",
      default: "true",
      type: "boolean | undefined",
      description: "Bottom border separating the bar from content."
    }
  ]),

  sidebar: boxProps([
    {
      name: "collapsed",
      default: "false",
      type: "boolean | undefined",
      description: "Icon-only layout; hides labels and section headings."
    },
    {
      name: "width",
      default: "—",
      type: "string | undefined",
      description: "Override --zui-sidebar-width on this instance."
    },
    {
      name: "Sidebar.Header",
      default: "—",
      type: "ReactNode",
      description: "Brand or product title at the top of the panel."
    },
    {
      name: "Sidebar.Item.active",
      default: "false",
      type: "boolean | undefined",
      description: "Highlights the current route."
    },
    {
      name: "Sidebar.Item.href",
      default: "—",
      type: "string | undefined",
      description: "Renders a link when set; button otherwise."
    },
    {
      name: "Sidebar.Item.icon",
      default: "—",
      type: "ReactNode | undefined",
      description: "Leading icon shown in collapsed mode."
    },
    {
      name: "Sidebar.Section.label",
      default: "—",
      type: "ReactNode | undefined",
      description: "Uppercase group label above a nav block."
    }
  ]),

  breadcrumbs: [
    {
      name: "items",
      default: "—",
      type: "BreadcrumbItem[] | undefined",
      description: "Declarative trail: { label, href?, current? }[]."
    },
    {
      name: "separator",
      default: '"/"',
      type: "ReactNode | undefined",
      description: "Rendered between each crumb."
    },
    {
      name: "children",
      default: "—",
      type: "ReactNode | undefined",
      description: "Compound API: Breadcrumbs.List + Breadcrumbs.Item."
    },
    {
      name: "Breadcrumbs.Item.current",
      default: "false",
      type: "boolean | undefined",
      description: 'Marks the current page (aria-current="page").'
    },
    {
      name: "Breadcrumbs.Item.href",
      default: "—",
      type: "string | undefined",
      description: "Link target for non-current crumbs."
    }
  ],

  pagination: [
    {
      name: "page",
      default: "—",
      type: "number",
      description: "Current page (1-based). Controlled."
    },
    { name: "count", default: "—", type: "number", description: "Total number of pages." },
    {
      name: "onPageChange",
      default: "—",
      type: "(page: number) => void | undefined",
      description: "Called when the user selects a page."
    },
    {
      name: "size",
      default: '"md"',
      type: `${ZED_SIZE} | undefined`,
      description: "Button scale. Theme default via components.Pagination.size."
    },
    {
      name: "disabled",
      default: "false",
      type: "boolean | undefined",
      description: "Disables all page controls."
    },
    {
      name: "siblingCount",
      default: "1",
      type: "number | undefined",
      description: "Pages shown on each side of the current page."
    },
    {
      name: "showEdges",
      default: "true",
      type: "boolean | undefined",
      description: "Always show first and last page buttons when ellipsis is used."
    }
  ],

  stepper: [
    {
      name: "activeStep",
      default: "0",
      type: "number | undefined",
      description: "Zero-based index of the active step."
    },
    {
      name: "orientation",
      default: '"horizontal"',
      type: '"horizontal" | "vertical" | undefined',
      description:
        "Horizontal for desktop flows; vertical for narrow layouts with expandable content."
    },
    {
      name: "alternativeLabel",
      default: "false",
      type: "boolean | undefined",
      description: "Places step labels below the icon in horizontal mode."
    },
    {
      name: "nonLinear",
      default: "false",
      type: "boolean | undefined",
      description: "Allows navigating to any step. Pair with StepButton for clickable labels."
    },
    {
      name: "size",
      default: '"md"',
      type: `${ZED_SIZE} | undefined`,
      description: "Icon and text scale. Theme default via components.Stepper.size."
    },
    {
      name: "aria-label",
      default: '"Progress"',
      type: "string | undefined",
      description: "Accessible label for the stepper navigation landmark."
    },
    { name: "children", default: "—", type: "ReactNode", description: "Stepper.Step elements." },
    {
      name: "Step.completed",
      default: "—",
      type: "boolean | undefined",
      description: "Overrides completion state. Set false to keep an optional step incomplete."
    },
    {
      name: "Step.disabled",
      default: "—",
      type: "boolean | undefined",
      description: "Disables a step."
    },
    {
      name: "Step.expanded",
      default: "—",
      type: "boolean | undefined",
      description: "Controls vertical StepContent visibility."
    },
    {
      name: "StepLabel.children",
      default: "—",
      type: "ReactNode",
      description: "Primary step title."
    },
    {
      name: "StepLabel.optional",
      default: "—",
      type: "ReactNode | undefined",
      description: "Optional badge text shown below the title."
    },
    {
      name: "StepLabel.description",
      default: "—",
      type: "ReactNode | undefined",
      description: "Secondary text below the title."
    },
    {
      name: "StepLabel.error",
      default: "false",
      type: "boolean | undefined",
      description: "Marks the step with error styling."
    },
    {
      name: "StepLabel.icon",
      default: "—",
      type: "ReactNode | undefined",
      description: "Custom icon content inside the step indicator."
    },
    {
      name: "StepButton.onClick",
      default: "—",
      type: "(() => void) | undefined",
      description: "Makes the step label clickable in non-linear flows."
    },
    {
      name: "StepContent.children",
      default: "—",
      type: "ReactNode",
      description: "Expandable body shown for the active vertical step."
    }
  ],

  combobox: [
    {
      name: "options",
      default: "[]",
      type: "ComboboxOption[]",
      description: "{ value, label, disabled? } options to filter and select."
    },
    {
      name: "value",
      default: "—",
      type: "string | undefined",
      description: "Controlled selected value."
    },
    {
      name: "defaultValue",
      default: "—",
      type: "string | undefined",
      description: "Initial value when uncontrolled."
    },
    {
      name: "onValueChange",
      default: "—",
      type: "(value: string) => void | undefined",
      description: "Called when the selection changes."
    },
    {
      name: "placeholder",
      default: '"Search…"',
      type: "string | undefined",
      description: "Input placeholder text."
    },
    {
      name: "disabled",
      default: "—",
      type: "boolean | undefined",
      description: "Disables the combobox input and trigger."
    },
    {
      name: "size",
      default: '"md"',
      type: `${ZED_SIZE} | undefined`,
      description: "Input scale. Theme default via components.Combobox.size."
    },
    {
      name: "invalid",
      default: "false",
      type: "boolean | undefined",
      description: "Applies error styling; pairs with FormField error."
    },
    {
      name: "emptyMessage",
      default: '"No results found."',
      type: "string | undefined",
      description: "Shown when the filter matches no options."
    }
  ],

  calendar: [
    {
      name: "value",
      default: "null",
      type: "Date | null | undefined",
      description: "Selected date. Controlled."
    },
    {
      name: "onValueChange",
      default: "—",
      type: "(value: Date | null) => void | undefined",
      description: "Called when a day is selected."
    },
    {
      name: "month",
      default: "—",
      type: "Date | undefined",
      description: "Visible month. Controlled."
    },
    {
      name: "onMonthChange",
      default: "—",
      type: "(month: Date) => void | undefined",
      description: "Called when prev/next month is used."
    },
    {
      name: "min",
      default: "—",
      type: "Date | undefined",
      description: "Earliest selectable date (inclusive)."
    },
    {
      name: "max",
      default: "—",
      type: "Date | undefined",
      description: "Latest selectable date (inclusive)."
    },
    {
      name: "disabled",
      default: "false",
      type: "boolean | undefined",
      description: "Disables all day buttons."
    }
  ],

  "date-picker": [
    {
      name: "value",
      default: "null",
      type: "Date | null | undefined",
      description: "Selected date. Controlled."
    },
    {
      name: "onValueChange",
      default: "—",
      type: "(value: Date | null) => void | undefined",
      description: "Called when a date is picked or cleared."
    },
    {
      name: "placeholder",
      default: '"Select date"',
      type: "string | undefined",
      description: "Trigger label when no date is selected."
    },
    {
      name: "size",
      default: '"md"',
      type: `${ZED_SIZE} | undefined`,
      description: "Trigger scale. Theme default via components.DatePicker.size."
    },
    {
      name: "disabled",
      default: "false",
      type: "boolean | undefined",
      description: "Disables the trigger button."
    },
    {
      name: "invalid",
      default: "false",
      type: "boolean | undefined",
      description: "Applies error styling; pairs with FormField error."
    },
    {
      name: "min",
      default: "—",
      type: "Date | undefined",
      description: "Earliest selectable date passed to Calendar."
    },
    {
      name: "max",
      default: "—",
      type: "Date | undefined",
      description: "Latest selectable date passed to Calendar."
    },
    {
      name: "id",
      default: "—",
      type: "string | undefined",
      description: "Trigger id; auto-linked when inside FormField."
    },
    {
      name: "name",
      default: "—",
      type: "string | undefined",
      description: "Hidden input name for native submit."
    },
    {
      name: "required",
      default: "—",
      type: "boolean | undefined",
      description: "Marks the control as required for assistive tech."
    }
  ],

  timeline: [
    {
      name: "size",
      default: '"md"',
      type: `${ZED_SIZE} | undefined`,
      description:
        "Indicator and text scale (sm, md, lg, xl). Theme default via components.Timeline.size."
    },
    {
      name: "variant",
      default: '"solid"',
      type: '"solid" | "subtle" | "outline" | "plain" | undefined',
      description: "Indicator visual style. Theme default via components.Timeline.variant."
    },
    {
      name: "color",
      default: '"neutral"',
      type: `${ZED_COLOR} | undefined`,
      description: "Semantic color for indicators. Theme default via components.Timeline.color."
    },
    {
      name: "showLastSeparator",
      default: "false",
      type: "boolean | undefined",
      description: "When false, hides the separator on the last item."
    },
    {
      name: "unstyled",
      default: "false",
      type: "boolean | undefined",
      description: "Removes recipe styles from timeline slots."
    },
    { name: "children", default: "—", type: "ReactNode", description: "Timeline.Item elements." }
  ],

  "data-table": boxProps([
    { name: "data", default: "—", type: "T[]", description: "Row data array." },
    {
      name: "columns",
      default: "—",
      type: "DataTableColumn<T>[]",
      description: "Column definitions with header, accessor, and optional sort."
    },
    {
      name: "variant",
      default: '"line"',
      type: '"line" | "outline" | "subtle" | undefined',
      description: "Inherited from Table. Theme default via components.Table.variant."
    },
    {
      name: "size",
      default: '"md"',
      type: '"sm" | "md" | "lg" | undefined',
      description: "Inherited from Table. Theme default via components.Table.size."
    },
    {
      name: "striped",
      default: "false",
      type: "boolean | undefined",
      description: "Zebra-striping on body rows."
    },
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
    },
    {
      name: "enableGlobalFilter",
      default: "false",
      type: "boolean | undefined",
      description: "Renders a search input in the toolbar."
    },
    {
      name: "filterPlaceholder",
      default: '"Filter rows…"',
      type: "string | undefined",
      description: "Placeholder for the global filter input."
    },
    {
      name: "globalFilter",
      default: "—",
      type: "string | undefined",
      description: "Controlled global filter string."
    },
    {
      name: "onGlobalFilterChange",
      default: "—",
      type: "(value: string) => void | undefined",
      description: "Called when the global filter changes."
    },
    {
      name: "initialSorting",
      default: "—",
      type: "DataTableSortingState | undefined",
      description: "Initial sort column and direction."
    },
    {
      name: "getRowId",
      default: "—",
      type: "(row: T, index: number) => string | undefined",
      description: "Stable row key for React list rendering."
    },
    {
      name: "toolbar",
      default: "—",
      type: "ReactNode | undefined",
      description: "Custom content rendered above the table beside the filter."
    }
  ]),

  "command-palette": [
    { name: "open", default: "false", type: "boolean", description: "Controlled open state." },
    {
      name: "onOpenChange",
      default: "—",
      type: "(open: boolean) => void",
      description: "Called when the palette opens or closes."
    },
    {
      name: "items",
      default: "—",
      type: "CommandPaletteItem[]",
      description: "Searchable commands with id, label, group, keywords, onSelect."
    },
    {
      name: "placeholder",
      default: '"Search commands…"',
      type: "string | undefined",
      description: "Search input placeholder."
    },
    {
      name: "emptyMessage",
      default: '"No commands found."',
      type: "string | undefined",
      description: "Shown when the query matches no items."
    },
    {
      name: "CommandPaletteItem.group",
      default: '"Commands"',
      type: "string | undefined",
      description: "Section heading for grouped results."
    },
    {
      name: "CommandPaletteItem.keywords",
      default: "—",
      type: "string[] | undefined",
      description: "Extra terms matched by the search filter."
    },
    {
      name: "CommandPaletteItem.disabled",
      default: "false",
      type: "boolean | undefined",
      description: "Non-selectable item."
    },
    {
      name: "CommandPaletteItem.onSelect",
      default: "—",
      type: "() => void | undefined",
      description: "Called when the item is chosen."
    }
  ],

  divider: [
    { name: "orientation", default: '"horizontal"', type: '"horizontal" | "vertical" | undefined' },
    {
      name: "label",
      default: "—",
      type: "string | undefined",
      description: "Centered label between two rules."
    }
  ],

  link: boxProps([
    { name: "color", default: '"primary"', type: `${ZED_COLOR} | undefined` },
    {
      name: "external",
      default: "false",
      type: "boolean | undefined",
      description: 'Opens in a new tab with rel="noopener noreferrer".'
    },
    { name: "underline", default: '"hover"', type: '"always" | "hover" | "none" | undefined' },
    { name: "href", default: "—", type: "string | undefined" }
  ]),

  slider: [
    {
      name: "value",
      default: "—",
      type: "number | number[] | undefined",
      description: "Controlled thumb position."
    },
    { name: "defaultValue", default: "—", type: "number | number[] | undefined" },
    {
      name: "onValueChange",
      default: "—",
      type: "(value: number | number[], eventDetails: object) => void | undefined"
    },
    { name: "min", default: "0", type: "number | undefined" },
    { name: "max", default: "100", type: "number | undefined" },
    { name: "step", default: "1", type: "number | undefined" },
    { name: "size", default: '"md"', type: `${ZED_SIZE} | undefined` },
    { name: "color", default: '"primary"', type: `${ZED_COLOR} | undefined` },
    { name: "disabled", default: "—", type: "boolean | undefined" },
    {
      name: "label",
      default: "—",
      type: "ReactNode | undefined",
      description: "Accessible label above the track."
    },
    {
      name: "showValue",
      default: "false",
      type: "boolean | undefined",
      description: "Show the current value beside the label."
    }
  ],

  progress: [
    {
      name: "value",
      default: "—",
      type: "number | null | undefined",
      description: "Current progress value."
    },
    { name: "min", default: "0", type: "number | undefined" },
    { name: "max", default: "100", type: "number | undefined" },
    { name: "size", default: '"md"', type: `${ZED_SIZE} | undefined` },
    { name: "color", default: '"primary"', type: `${ZED_COLOR} | undefined` },
    {
      name: "label",
      default: "—",
      type: "ReactNode | undefined",
      description: "Accessible label above the bar."
    },
    {
      name: "showValue",
      default: "false",
      type: "boolean | undefined",
      description: "Show formatted value beside the label."
    }
  ],

  "alert-dialog": [
    {
      name: "open",
      default: "false",
      type: "boolean | undefined",
      description: "Controlled open state on AlertDialog.Root."
    },
    { name: "defaultOpen", default: "false", type: "boolean | undefined" },
    {
      name: "onOpenChange",
      default: "—",
      type: "(open: boolean, eventDetails?) => void | undefined"
    },
    {
      name: "AlertDialog.Content.title",
      default: "—",
      type: "ReactNode | undefined",
      description: "Confirmation heading."
    },
    {
      name: "AlertDialog.Content.description",
      default: "—",
      type: "ReactNode | undefined",
      description: "Supporting text for the action."
    },
    {
      name: "AlertDialog.Content.confirmLabel",
      default: '"Confirm"',
      type: "ReactNode | undefined",
      description: "Destructive confirm button label."
    },
    {
      name: "AlertDialog.Content.cancelLabel",
      default: '"Cancel"',
      type: "ReactNode | undefined",
      description: "Dismiss button label."
    },
    {
      name: "AlertDialog.Content.onConfirm",
      default: "—",
      type: "() => void | undefined",
      description: "Called when the confirm button is pressed."
    }
  ],

  "native-select": [
    { name: "options", default: "[]", type: "SelectOption[]", description: "Native option list." },
    {
      name: "placeholder",
      default: "—",
      type: "string | undefined",
      description: "Disabled placeholder option."
    },
    { name: "size", default: '"md"', type: `${ZED_SIZE} | undefined` },
    { name: "invalid", default: "false", type: "boolean | undefined" },
    { name: "disabled", default: "—", type: "boolean | undefined" },
    { name: "value", default: "—", type: "string | undefined" },
    { name: "defaultValue", default: "—", type: "string | undefined" },
    { name: "onChange", default: "—", type: "ChangeEventHandler<HTMLSelectElement> | undefined" }
  ]
};

export function getComponentProps(componentId: string): PropRow[] {
  return COMPONENT_PROPS[componentId] ?? [];
}
