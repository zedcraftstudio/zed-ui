import { forwardRef, type ElementType, type ReactNode, type Ref } from "react";
import { useComponentDefaults } from "@zed-ui/themes";
import type { PolymorphicComponent, PolymorphicProps } from "@zed-ui/system";
import { cx, dataAttr } from "@zed-ui/utils";
import type { SkeletonVariant, ZedSize } from "../../shared/types";
import { Box, type BoxOwnProps } from "../../primitives/box/Box";
import { Stack, type StackOwnProps } from "../../primitives/stack/Stack";

export type SkeletonOwnProps = BoxOwnProps & {
  animated?: boolean;
  children?: ReactNode;
  loading?: boolean;
  variant?: SkeletonVariant;
};

function resolveSkeletonVariant(
  variant: SkeletonVariant | undefined,
  animated: boolean | undefined,
  defaultVariant: SkeletonVariant
): SkeletonVariant {
  if (animated === false) {
    return "none";
  }

  return variant ?? defaultVariant;
}

function SkeletonBase(props: PolymorphicProps<ElementType, SkeletonOwnProps>, ref: Ref<unknown>) {
  const defaults = useComponentDefaults("Skeleton");
  const { animated, children, className, loading = true, variant: variantProp, ...rest } = props;

  const variant = resolveSkeletonVariant(
    variantProp,
    animated,
    (defaults?.variant as SkeletonVariant | undefined) ?? "pulse"
  );
  const hasChildren = children != null;

  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      aria-hidden={hasChildren ? undefined : loading || undefined}
      className={cx("zui-skeleton", className)}
      data-has-children={dataAttr(hasChildren)}
      data-loading={loading ? "true" : "false"}
      data-variant={variant}
      {...rest}
    >
      {children}
    </Box>
  );
}

export const Skeleton = forwardRef(SkeletonBase) as PolymorphicComponent<"div", SkeletonOwnProps>;

export type SkeletonCircleOwnProps = SkeletonOwnProps & {
  size?: ZedSize;
};

function SkeletonCircleBase(
  props: PolymorphicProps<ElementType, SkeletonCircleOwnProps>,
  ref: Ref<unknown>
) {
  const { className, size = "md", ...rest } = props;

  return (
    <Skeleton
      ref={ref}
      className={cx("zui-skeleton-circle", className)}
      data-size={size}
      {...rest}
    />
  );
}

export const SkeletonCircle = forwardRef(SkeletonCircleBase) as PolymorphicComponent<
  "div",
  SkeletonCircleOwnProps
>;

export type SkeletonTextOwnProps = Omit<SkeletonOwnProps, "children"> & {
  noOfLines?: number;
  rootProps?: StackOwnProps;
};

function SkeletonTextBase(
  props: PolymorphicProps<ElementType, SkeletonTextOwnProps>,
  ref: Ref<unknown>
) {
  const { className, gap = "2", loading = true, noOfLines = 3, rootProps, ...rest } = props;

  const lineCount = loading ? noOfLines : 1;

  return (
    <Stack
      ref={ref}
      className={cx("zui-skeleton-text", className)}
      gap={gap}
      width="100%"
      {...rootProps}
    >
      {Array.from({ length: lineCount }, (_, index) => (
        <Skeleton
          key={index}
          height="0.75rem"
          loading={loading}
          width={loading && index === noOfLines - 1 && noOfLines > 1 ? "80%" : "100%"}
          {...rest}
        />
      ))}
    </Stack>
  );
}

export const SkeletonText = forwardRef(SkeletonTextBase) as PolymorphicComponent<
  "div",
  SkeletonTextOwnProps
>;
