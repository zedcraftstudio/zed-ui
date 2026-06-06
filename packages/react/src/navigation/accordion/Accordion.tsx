import { Accordion as BaseAccordion } from "@base-ui/react/accordion";
import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { useComponentDefaults } from "@zed-ui/themes";
import { cx } from "@zed-ui/utils";
import type { ZedSize } from "../../shared/types";

export type AccordionVariant = "outline" | "plain";
export type AccordionSize = ZedSize;

export type AccordionRootOwnProps = Omit<
  ComponentPropsWithoutRef<typeof BaseAccordion.Root>,
  "className"
> & {
  className?: string;
  size?: AccordionSize;
  variant?: AccordionVariant;
};

export function AccordionRoot({
  className,
  size: sizeProp,
  variant: variantProp,
  ...rest
}: AccordionRootOwnProps) {
  const defaults = useComponentDefaults("Accordion");
  const size = (sizeProp ?? (defaults?.size as AccordionSize | undefined) ?? "md") as AccordionSize;
  const variant = (variantProp ??
    (defaults?.variant as AccordionVariant | undefined) ??
    "outline") as AccordionVariant;

  return (
    <BaseAccordion.Root
      className={cx("zui-accordion", className)}
      data-size={size}
      data-variant={variant}
      {...rest}
    />
  );
}

export type AccordionItemOwnProps = Omit<
  ComponentPropsWithoutRef<typeof BaseAccordion.Item>,
  "className"
> & {
  className?: string;
};

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemOwnProps>(
  function AccordionItem({ className, ...rest }, ref) {
    return (
      <BaseAccordion.Item ref={ref} className={cx("zui-accordion__item", className)} {...rest} />
    );
  }
);

AccordionItem.displayName = "AccordionItem";

export type AccordionHeaderOwnProps = Omit<
  ComponentPropsWithoutRef<typeof BaseAccordion.Header>,
  "className"
> & {
  className?: string;
};

export const AccordionHeader = forwardRef<HTMLHeadingElement, AccordionHeaderOwnProps>(
  function AccordionHeader({ className, ...rest }, ref) {
    return (
      <BaseAccordion.Header ref={ref} className={cx("zui-accordion__header", className)} {...rest} />
    );
  }
);

AccordionHeader.displayName = "AccordionHeader";

function AccordionChevronIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
      className="zui-accordion__icon"
    >
      <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export type AccordionTriggerOwnProps = Omit<
  ComponentPropsWithoutRef<typeof BaseAccordion.Trigger>,
  "className" | "children"
> & {
  children: ReactNode;
  className?: string;
};

export const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerOwnProps>(
  function AccordionTrigger({ children, className, ...rest }, ref) {
    return (
      <BaseAccordion.Trigger ref={ref} className={cx("zui-accordion__trigger", className)} {...rest}>
        <span className="zui-accordion__trigger-label">{children}</span>
        <AccordionChevronIcon />
      </BaseAccordion.Trigger>
    );
  }
);

AccordionTrigger.displayName = "AccordionTrigger";

export type AccordionPanelOwnProps = Omit<
  ComponentPropsWithoutRef<typeof BaseAccordion.Panel>,
  "className"
> & {
  className?: string;
};

export const AccordionPanel = forwardRef<HTMLDivElement, AccordionPanelOwnProps>(
  function AccordionPanel({ className, ...rest }, ref) {
    return (
      <BaseAccordion.Panel ref={ref} className={cx("zui-accordion__panel", className)} {...rest} />
    );
  }
);

AccordionPanel.displayName = "AccordionPanel";

export const AccordionParts = {
  Header: AccordionHeader,
  Item: AccordionItem,
  Panel: AccordionPanel,
  Root: AccordionRoot,
  Trigger: AccordionTrigger
};

export const Accordion = AccordionParts;

export type AccordionRootProps = AccordionRootOwnProps;
export type AccordionItemProps = AccordionItemOwnProps;
export type AccordionHeaderProps = AccordionHeaderOwnProps;
export type AccordionTriggerProps = AccordionTriggerOwnProps;
export type AccordionPanelProps = AccordionPanelOwnProps;
