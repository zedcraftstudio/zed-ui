import {
  cloneElement,
  forwardRef,
  isValidElement,
  type HTMLAttributes,
  type ReactElement,
  type Ref
} from "react";
import { mergeRefs } from "@zed-ui/utils";

export type SlotProps = HTMLAttributes<HTMLElement> & {
  children?: ReactElement;
};

export const Slot = forwardRef<HTMLElement, SlotProps>(function Slot(props, forwardedRef) {
  const { children, ...slotProps } = props;

  if (!isValidElement(children)) {
    return null;
  }

  const child = children as ReactElement<Record<string, unknown>>;
  const childRef = (child as { ref?: Ref<HTMLElement> }).ref;
  const childProps = child.props as Record<string, unknown>;

  return cloneElement(child, {
    ...slotProps,
    ...childProps,
    ref: mergeRefs(forwardedRef, childRef),
    style: { ...(slotProps.style as object), ...(childProps.style as object | undefined) },
    className: [slotProps.className, childProps.className].filter(Boolean).join(" ")
  });
});

Slot.displayName = "Slot";

export function composeRefs<T>(...refs: Array<Ref<T> | undefined>) {
  return mergeRefs(...refs);
}
