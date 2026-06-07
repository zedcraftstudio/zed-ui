import type { ComponentPropsWithoutRef, ElementType, ReactElement, ReactNode, Ref } from "react";

export type PropsOf<TElement extends ElementType> = ComponentPropsWithoutRef<TElement>;

export type PolymorphicRef = unknown;

export type PolymorphicProps<TElement extends ElementType, TOwnProps = object> = TOwnProps &
  Omit<PropsOf<TElement>, keyof TOwnProps | "as" | "color"> & {
    as?: TElement;
    asChild?: boolean;
    children?: ReactNode;
  };

export type PolymorphicComponent<TDefaultElement extends ElementType, TOwnProps = object> = <
  TElement extends ElementType = TDefaultElement
>(
  props: PolymorphicProps<TElement, TOwnProps> & {
    ref?: Ref<unknown>;
  }
) => ReactElement | null;
