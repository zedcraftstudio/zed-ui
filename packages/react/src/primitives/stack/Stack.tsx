import {
  Children,
  Fragment,
  forwardRef,
  isValidElement,
  type CSSProperties,
  type ElementType,
  type ReactNode,
  type Ref
} from "react";
import type { PolymorphicComponent, PolymorphicProps } from "@zed-ui/system";
import { cx } from "@zed-ui/utils";
import { Box, type BoxOwnProps } from "../box/Box";

export type StackOwnProps = BoxOwnProps & {
  direction?: CSSProperties["flexDirection"];
  separator?: ReactNode;
  wrap?: CSSProperties["flexWrap"];
};

function StackBase(props: PolymorphicProps<ElementType, StackOwnProps>, ref: Ref<unknown>) {
  const {
    children,
    className,
    direction = "column",
    display,
    separator,
    style,
    wrap,
    ...rest
  } = props;

  const content =
    separator == null
      ? children
      : Children.toArray(children).map((child, index) => {
          if (!isValidElement(child) && child == null) {
            return null;
          }

          return (
            <Fragment key={isValidElement(child) ? (child.key ?? index) : index}>
              {index > 0 ? separator : null}
              {child}
            </Fragment>
          );
        });

  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      className={cx("zui-stack", className)}
      display={display ?? "flex"}
      style={{ flexDirection: direction, flexWrap: wrap, ...style }}
      {...rest}
    >
      {content}
    </Box>
  );
}

export const Stack = forwardRef(StackBase) as PolymorphicComponent<"div", StackOwnProps>;

export type HStackOwnProps = Omit<StackOwnProps, "direction">;
export type VStackOwnProps = Omit<StackOwnProps, "direction">;

function HStackBase(props: PolymorphicProps<ElementType, HStackOwnProps>, ref: Ref<unknown>) {
  return <Stack ref={ref} direction="row" {...props} />;
}

function VStackBase(props: PolymorphicProps<ElementType, VStackOwnProps>, ref: Ref<unknown>) {
  return <Stack ref={ref} direction="column" {...props} />;
}

export const HStack = forwardRef(HStackBase) as PolymorphicComponent<"div", HStackOwnProps>;
export const VStack = forwardRef(VStackBase) as PolymorphicComponent<"div", VStackOwnProps>;

export const StackParts = {
  HStack,
  Root: Stack,
  VStack
};
