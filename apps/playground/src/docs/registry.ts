import type { ComponentType } from "react";
import { ButtonSection, IconButtonSection } from "./sections/actions";
import {
  AvatarSection,
  CardSection,
  DataTableSection,
  TableSection,
  TimelineSection
} from "./sections/data-display";
import {
  AlertSection,
  BadgeSection,
  ProgressSection,
  SkeletonSection,
  SpinnerSection,
  ToastSection
} from "./sections/feedback";
import {
  CalendarSection,
  CheckboxSection,
  ComboboxSection,
  DatePickerSection,
  FormFieldSection,
  InputSection,
  MultiSelectSection,
  NativeSelectSection,
  RadioSection,
  SelectSection,
  SliderSection,
  SwitchSection,
  TextareaSection
} from "./sections/forms";
import {
  AppShellSection,
  BoxSection,
  ContainerSection,
  DividerSection,
  FlexSection,
  GridSection,
  PaperSection,
  SidebarSection,
  StackSection,
  TopBarSection
} from "./sections/layout";
import {
  AlertDialogSection,
  CommandPaletteSection,
  DialogSection,
  DrawerSection,
  PopoverSection,
  TooltipSection
} from "./sections/overlays";
import {
  AccordionSection,
  BreadcrumbsSection,
  MenuSection,
  PaginationSection,
  StepperSection,
  TabsSection
} from "./sections/navigation";
import { HeadingSection, LinkSection, TextSection } from "./sections/typography";
import { COMPONENTS, getComponentById } from "../config/components";

export type ComponentDocEntry = ComponentType;

export const COMPONENT_DOC_REGISTRY: Record<string, ComponentDocEntry> = {
  box: BoxSection,
  container: ContainerSection,
  divider: DividerSection,
  paper: PaperSection,
  "app-shell": AppShellSection,
  topbar: TopBarSection,
  sidebar: SidebarSection,
  flex: FlexSection,
  grid: GridSection,
  stack: StackSection,
  heading: HeadingSection,
  link: LinkSection,
  text: TextSection,
  button: ButtonSection,
  "icon-button": IconButtonSection,
  "form-field": FormFieldSection,
  input: InputSection,
  textarea: TextareaSection,
  select: SelectSection,
  combobox: ComboboxSection,
  calendar: CalendarSection,
  "date-picker": DatePickerSection,
  "multi-select": MultiSelectSection,
  "native-select": NativeSelectSection,
  checkbox: CheckboxSection,
  slider: SliderSection,
  switch: SwitchSection,
  radio: RadioSection,
  alert: AlertSection,
  badge: BadgeSection,
  progress: ProgressSection,
  spinner: SpinnerSection,
  skeleton: SkeletonSection,
  toast: ToastSection,
  dialog: DialogSection,
  "alert-dialog": AlertDialogSection,
  drawer: DrawerSection,
  popover: PopoverSection,
  tooltip: TooltipSection,
  "command-palette": CommandPaletteSection,
  avatar: AvatarSection,
  card: CardSection,
  table: TableSection,
  "data-table": DataTableSection,
  timeline: TimelineSection,
  tabs: TabsSection,
  accordion: AccordionSection,
  menu: MenuSection,
  breadcrumbs: BreadcrumbsSection,
  pagination: PaginationSection,
  stepper: StepperSection
};

export const ORDERED_COMPONENT_IDS = COMPONENTS.map((c) => c.id).filter(
  (id) => id in COMPONENT_DOC_REGISTRY
);

export function getComponentDoc(id: string): ComponentDocEntry | undefined {
  return COMPONENT_DOC_REGISTRY[id];
}

export function getAdjacentComponents(id: string): {
  next: { id: string; label: string } | null;
  prev: { id: string; label: string } | null;
} {
  const index = ORDERED_COMPONENT_IDS.indexOf(id);
  const prevId = index > 0 ? ORDERED_COMPONENT_IDS[index - 1] : null;
  const nextId =
    index >= 0 && index < ORDERED_COMPONENT_IDS.length - 1
      ? ORDERED_COMPONENT_IDS[index + 1]
      : null;

  return {
    prev: prevId ? { id: prevId, label: getComponentById(prevId)?.label ?? prevId } : null,
    next: nextId ? { id: nextId, label: getComponentById(nextId)?.label ?? nextId } : null
  };
}
