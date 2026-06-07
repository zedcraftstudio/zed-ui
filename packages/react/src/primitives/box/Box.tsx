import {
  forwardRef,
  isValidElement,
  type CSSProperties,
  type ElementType,
  type ReactElement,
  type Ref
} from "react";
import {
  Slot,
  splitSystemProps,
  systemPropsToStyle,
  type PolymorphicComponent,
  type PolymorphicProps,
  type SystemStyleProps
} from "@zed-ui/system";
import { cx } from "@zed-ui/utils";

export type BoxOwnProps = SystemStyleProps & {
  className?: string;
  style?: CSSProperties;
};

function BoxBase(props: PolymorphicProps<ElementType, BoxOwnProps>, ref: Ref<HTMLElement>) {
  const { as, asChild, children, className, style, ...rest } = props;
  const Component = as ?? "div";
  const [systemProps, elementProps] = splitSystemProps(rest);

  const mergedStyle = { ...systemPropsToStyle(systemProps), ...style };
  const mergedClass = cx("zui-box", className);

  if (asChild && isValidElement(children)) {
    return (
      <Slot ref={ref} className={mergedClass} style={mergedStyle} {...elementProps}>
        {children as ReactElement}
      </Slot>
    );
  }

  return (
    <Component ref={ref} className={mergedClass} style={mergedStyle} {...elementProps}>
      {children}
    </Component>
  );
}

export const Box = forwardRef(BoxBase) as PolymorphicComponent<"div", BoxOwnProps>;

(Box as { displayName?: string }).displayName = "Box";
