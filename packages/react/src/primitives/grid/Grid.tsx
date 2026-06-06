import { forwardRef, type CSSProperties, type ElementType, type Ref } from "react";
import type { PolymorphicComponent, PolymorphicProps } from "@zed-ui/system";
import { cx } from "@zed-ui/utils";
import { Box, type BoxOwnProps } from "../box/Box";

export type GridOwnProps = BoxOwnProps & {
  align?: CSSProperties["alignItems"];
  areas?: CSSProperties["gridTemplateAreas"];
  autoColumns?: CSSProperties["gridAutoColumns"];
  autoRows?: CSSProperties["gridAutoRows"];
  columns?: CSSProperties["gridTemplateColumns"];
  flow?: CSSProperties["gridAutoFlow"];
  inline?: boolean;
  justify?: CSSProperties["justifyContent"];
  rows?: CSSProperties["gridTemplateRows"];
};

function GridBase(props: PolymorphicProps<ElementType, GridOwnProps>, ref: Ref<unknown>) {
  const {
    align,
    areas,
    autoColumns,
    autoRows,
    className,
    columns,
    display,
    flow,
    inline = false,
    justify,
    rows,
    style,
    ...rest
  } = props;

  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      align={align}
      className={cx("zui-grid", inline && "zui-grid--inline", className)}
      display={display ?? (inline ? "inline-grid" : "grid")}
      justify={justify}
      style={{
        gridAutoColumns: autoColumns,
        gridAutoFlow: flow,
        gridAutoRows: autoRows,
        gridTemplateAreas: areas,
        gridTemplateColumns: columns,
        gridTemplateRows: rows,
        ...style
      }}
      {...rest}
    />
  );
}

export const Grid = forwardRef(GridBase) as PolymorphicComponent<"div", GridOwnProps>;

export type GridItemOwnProps = BoxOwnProps & {
  area?: CSSProperties["gridArea"];
  colEnd?: CSSProperties["gridColumnEnd"];
  colSpan?: number;
  colStart?: CSSProperties["gridColumnStart"];
  rowEnd?: CSSProperties["gridRowEnd"];
  rowSpan?: number;
  rowStart?: CSSProperties["gridRowStart"];
};

function GridItemBase(props: PolymorphicProps<ElementType, GridItemOwnProps>, ref: Ref<unknown>) {
  const { area, className, colEnd, colSpan, colStart, rowEnd, rowSpan, rowStart, style, ...rest } = props;

  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      className={cx("zui-grid-item", className)}
      style={{
        gridArea: area,
        gridColumn: colSpan ? `span ${colSpan} / span ${colSpan}` : undefined,
        gridColumnEnd: colEnd,
        gridColumnStart: colStart,
        gridRow: rowSpan ? `span ${rowSpan} / span ${rowSpan}` : undefined,
        gridRowEnd: rowEnd,
        gridRowStart: rowStart,
        ...style
      }}
      {...rest}
    />
  );
}

export const GridItem = forwardRef(GridItemBase) as PolymorphicComponent<"div", GridItemOwnProps>;

export const GridParts = {
  Item: GridItem,
  Root: Grid
};
