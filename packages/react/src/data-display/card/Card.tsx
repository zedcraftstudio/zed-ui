import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
  type Ref
} from "react";
import { useComponentDefaults } from "@zed-ui/themes";
import type { PolymorphicComponent, PolymorphicProps } from "@zed-ui/system";
import { cx } from "@zed-ui/utils";
import type { CardOrientation, CardSize, CardVariant } from "../../shared/types";
import { Box, type BoxOwnProps } from "../../primitives/box/Box";

export type { CardOrientation, CardSize, CardVariant };

export type CardRootOwnProps = BoxOwnProps & {
  orientation?: CardOrientation;
  size?: CardSize;
  variant?: CardVariant;
};

function CardRootBase(props: PolymorphicProps<ElementType, CardRootOwnProps>, ref: Ref<unknown>) {
  const defaults = useComponentDefaults("Card");
  const {
    as,
    className,
    orientation = "vertical",
    size: sizeProp,
    variant: variantProp,
    ...rest
  } = props;
  const size = (sizeProp ?? (defaults?.size as CardSize | undefined) ?? "md") as CardSize;
  const variant = (variantProp ??
    (defaults?.variant as CardVariant | undefined) ??
    "outline") as CardVariant;

  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      as={as ?? "article"}
      className={cx("zui-card", className)}
      data-orientation={orientation}
      data-size={size}
      data-variant={variant}
      {...rest}
    />
  );
}

export const CardRoot = forwardRef(CardRootBase) as PolymorphicComponent<
  "article",
  CardRootOwnProps
>;

export type CardOwnProps = CardRootOwnProps & {
  footer?: ReactNode;
  header?: ReactNode;
};

function CardBase(props: PolymorphicProps<ElementType, CardOwnProps>, ref: Ref<unknown>) {
  const { children, footer, header, ...rootProps } = props;

  return (
    <CardRoot ref={ref} {...rootProps}>
      {header ? <CardHeader>{header}</CardHeader> : null}
      <CardBody>{children}</CardBody>
      {footer ? <CardFooter>{footer}</CardFooter> : null}
    </CardRoot>
  );
}

export const Card = forwardRef(CardBase) as PolymorphicComponent<"article", CardOwnProps>;

export type CardHeaderOwnProps = BoxOwnProps;

function CardHeaderBase(
  props: PolymorphicProps<ElementType, CardHeaderOwnProps>,
  ref: Ref<unknown>
) {
  const { className, ...rest } = props;
  return (
    <Box ref={ref as Ref<HTMLElement>} className={cx("zui-card__header", className)} {...rest} />
  );
}

export const CardHeader = forwardRef(CardHeaderBase) as PolymorphicComponent<
  "div",
  CardHeaderOwnProps
>;

export type CardBodyOwnProps = BoxOwnProps;

function CardBodyBase(props: PolymorphicProps<ElementType, CardBodyOwnProps>, ref: Ref<unknown>) {
  const { className, ...rest } = props;
  return (
    <Box ref={ref as Ref<HTMLElement>} className={cx("zui-card__body", className)} {...rest} />
  );
}

export const CardBody = forwardRef(CardBodyBase) as PolymorphicComponent<"div", CardBodyOwnProps>;

export type CardFooterOwnProps = BoxOwnProps;

function CardFooterBase(
  props: PolymorphicProps<ElementType, CardFooterOwnProps>,
  ref: Ref<unknown>
) {
  const { className, ...rest } = props;
  return (
    <Box ref={ref as Ref<HTMLElement>} className={cx("zui-card__footer", className)} {...rest} />
  );
}

export const CardFooter = forwardRef(CardFooterBase) as PolymorphicComponent<
  "div",
  CardFooterOwnProps
>;

export type CardTitleOwnProps = BoxOwnProps;

function CardTitleBase(props: PolymorphicProps<ElementType, CardTitleOwnProps>, ref: Ref<unknown>) {
  const { as, className, ...rest } = props;
  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      as={as ?? "h3"}
      className={cx("zui-card__title", className)}
      {...rest}
    />
  );
}

export const CardTitle = forwardRef(CardTitleBase) as PolymorphicComponent<"h3", CardTitleOwnProps>;

export type CardDescriptionOwnProps = BoxOwnProps;

function CardDescriptionBase(
  props: PolymorphicProps<ElementType, CardDescriptionOwnProps>,
  ref: Ref<unknown>
) {
  const { as, className, ...rest } = props;
  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      as={as ?? "p"}
      className={cx("zui-card__description", className)}
      {...rest}
    />
  );
}

export const CardDescription = forwardRef(CardDescriptionBase) as PolymorphicComponent<
  "p",
  CardDescriptionOwnProps
>;

export type CardImageProps = ComponentPropsWithoutRef<"img">;

export const CardImage = forwardRef<HTMLImageElement, CardImageProps>(function CardImage(
  { alt = "", className, ...rest },
  ref
) {
  return <img ref={ref} alt={alt} className={cx("zui-card__image", className)} {...rest} />;
});

CardImage.displayName = "CardImage";

export const CardParts = {
  Body: CardBody,
  Description: CardDescription,
  Footer: CardFooter,
  Header: CardHeader,
  Image: CardImage,
  Root: CardRoot,
  Title: CardTitle
};
