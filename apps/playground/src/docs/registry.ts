import type { ComponentType } from "react";
import { ButtonSection, IconButtonSection } from "./sections/actions";
import { AvatarSection, CardSection, TableSection } from "./sections/data-display";
import { AlertSection, BadgeSection, SkeletonSection, SpinnerSection, ToastSection } from "./sections/feedback";
import {
  CheckboxSection,
  FormFieldSection,
  InputSection,
  MultiSelectSection,
  RadioSection,
  SelectSection,
  SwitchSection,
  TextareaSection
} from "./sections/forms";
import { BoxSection, ContainerSection, FlexSection, GridSection, StackSection } from "./sections/layout";
import { DialogSection, DrawerSection, PopoverSection, TooltipSection } from "./sections/overlays";
import { AccordionSection, MenuSection, TabsSection } from "./sections/navigation";
import { HeadingSection, TextSection } from "./sections/typography";
import { COMPONENTS, getComponentById } from "../config/components";

export type ComponentDocEntry = ComponentType;

export const COMPONENT_DOC_REGISTRY: Record<string, ComponentDocEntry> = {
  box: BoxSection,
  container: ContainerSection,
  flex: FlexSection,
  grid: GridSection,
  stack: StackSection,
  heading: HeadingSection,
  text: TextSection,
  button: ButtonSection,
  "icon-button": IconButtonSection,
  "form-field": FormFieldSection,
  input: InputSection,
  textarea: TextareaSection,
  select: SelectSection,
  "multi-select": MultiSelectSection,
  checkbox: CheckboxSection,
  switch: SwitchSection,
  radio: RadioSection,
  alert: AlertSection,
  badge: BadgeSection,
  spinner: SpinnerSection,
  skeleton: SkeletonSection,
  toast: ToastSection,
  dialog: DialogSection,
  drawer: DrawerSection,
  popover: PopoverSection,
  tooltip: TooltipSection,
  avatar: AvatarSection,
  card: CardSection,
  table: TableSection,
  tabs: TabsSection,
  accordion: AccordionSection,
  menu: MenuSection
};

export const ORDERED_COMPONENT_IDS = COMPONENTS.map((c) => c.id).filter((id) => id in COMPONENT_DOC_REGISTRY);

export function getComponentDoc(id: string): ComponentDocEntry | undefined {
  return COMPONENT_DOC_REGISTRY[id];
}

export function getAdjacentComponents(id: string): {
  next: { id: string; label: string } | null;
  prev: { id: string; label: string } | null;
} {
  const index = ORDERED_COMPONENT_IDS.indexOf(id);
  const prevId = index > 0 ? ORDERED_COMPONENT_IDS[index - 1] : null;
  const nextId = index >= 0 && index < ORDERED_COMPONENT_IDS.length - 1 ? ORDERED_COMPONENT_IDS[index + 1] : null;

  return {
    prev: prevId ? { id: prevId, label: getComponentById(prevId)?.label ?? prevId } : null,
    next: nextId ? { id: nextId, label: getComponentById(nextId)?.label ?? nextId } : null
  };
}
