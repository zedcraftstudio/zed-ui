import { forwardRef, type ElementType, type Ref } from "react";
import { useComponentDefaults } from "@zed-ui/themes";
import type { PolymorphicComponent, PolymorphicProps } from "@zed-ui/system";
import { cx, dataAttr } from "@zed-ui/utils";
import type { TableCaptionSide, TableSize, TableVariant } from "../../shared/types";
import { Box, type BoxOwnProps } from "../../primitives/box/Box";

export type { TableCaptionSide, TableSize, TableVariant };

export type TableRootOwnProps = BoxOwnProps & {
  interactive?: boolean;
  showColumnBorder?: boolean;
  size?: TableSize;
  stickyHeader?: boolean;
  striped?: boolean;
  variant?: TableVariant;
};

function TableRootBase(props: PolymorphicProps<ElementType, TableRootOwnProps>, ref: Ref<unknown>) {
  const defaults = useComponentDefaults("Table");
  const {
    as,
    className,
    interactive = false,
    showColumnBorder = false,
    size: sizeProp,
    stickyHeader = false,
    striped = false,
    variant: variantProp,
    ...rest
  } = props;
  const size = (sizeProp ?? (defaults?.size as TableSize | undefined) ?? "md") as TableSize;
  const variant = (variantProp ??
    (defaults?.variant as TableVariant | undefined) ??
    "line") as TableVariant;

  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      as={as ?? "table"}
      className={cx("zui-table", className)}
      data-interactive={dataAttr(interactive)}
      data-show-column-border={dataAttr(showColumnBorder)}
      data-size={size}
      data-sticky-header={dataAttr(stickyHeader)}
      data-striped={dataAttr(striped)}
      data-variant={variant}
      {...rest}
    />
  );
}

export const TableRoot = forwardRef(TableRootBase) as PolymorphicComponent<
  "table",
  TableRootOwnProps
>;

/** @deprecated Use `TableRoot` */
export type TableOwnProps = TableRootOwnProps;

function TableBase(props: PolymorphicProps<ElementType, TableRootOwnProps>, ref: Ref<unknown>) {
  return <TableRoot ref={ref} {...props} />;
}

/** Root table element. Wrap with `TableScrollArea` when horizontal scrolling is needed. */
export const Table = forwardRef(TableBase) as PolymorphicComponent<"table", TableRootOwnProps>;

export type TableScrollAreaOwnProps = BoxOwnProps;

function TableScrollAreaBase(
  props: PolymorphicProps<ElementType, TableScrollAreaOwnProps>,
  ref: Ref<unknown>
) {
  const { className, ...rest } = props;
  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      className={cx("zui-table-scroll-area", className)}
      {...rest}
    />
  );
}

export const TableScrollArea = forwardRef(TableScrollAreaBase) as PolymorphicComponent<
  "div",
  TableScrollAreaOwnProps
>;

export type TableHeaderOwnProps = BoxOwnProps;

function TableHeaderBase(
  props: PolymorphicProps<ElementType, TableHeaderOwnProps>,
  ref: Ref<unknown>
) {
  const { as, className, ...rest } = props;
  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      as={as ?? "thead"}
      className={cx("zui-table__head", className)}
      {...rest}
    />
  );
}

export const TableHeader = forwardRef(TableHeaderBase) as PolymorphicComponent<
  "thead",
  TableHeaderOwnProps
>;

export type TableBodyOwnProps = BoxOwnProps;

function TableBodyBase(props: PolymorphicProps<ElementType, TableBodyOwnProps>, ref: Ref<unknown>) {
  const { as, className, ...rest } = props;
  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      as={as ?? "tbody"}
      className={cx("zui-table__body", className)}
      {...rest}
    />
  );
}

export const TableBody = forwardRef(TableBodyBase) as PolymorphicComponent<
  "tbody",
  TableBodyOwnProps
>;

export type TableFooterOwnProps = BoxOwnProps;

function TableFooterBase(
  props: PolymorphicProps<ElementType, TableFooterOwnProps>,
  ref: Ref<unknown>
) {
  const { as, className, ...rest } = props;
  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      as={as ?? "tfoot"}
      className={cx("zui-table__foot", className)}
      {...rest}
    />
  );
}

export const TableFooter = forwardRef(TableFooterBase) as PolymorphicComponent<
  "tfoot",
  TableFooterOwnProps
>;

export type TableRowOwnProps = BoxOwnProps;

function TableRowBase(props: PolymorphicProps<ElementType, TableRowOwnProps>, ref: Ref<unknown>) {
  const { as, className, ...rest } = props;
  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      as={as ?? "tr"}
      className={cx("zui-table__row", className)}
      {...rest}
    />
  );
}

export const TableRow = forwardRef(TableRowBase) as PolymorphicComponent<"tr", TableRowOwnProps>;

export type TableHeadOwnProps = BoxOwnProps & {
  sticky?: boolean;
};

function TableHeadBase(props: PolymorphicProps<ElementType, TableHeadOwnProps>, ref: Ref<unknown>) {
  const { as, className, sticky = false, ...rest } = props;
  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      as={as ?? "th"}
      className={cx("zui-table__cell", "zui-table__cell--head", className)}
      data-sticky={sticky ? "true" : undefined}
      scope="col"
      {...rest}
    />
  );
}

export const TableHead = forwardRef(TableHeadBase) as PolymorphicComponent<"th", TableHeadOwnProps>;

/** Alias for `TableHead` (column header cell). */
export const TableColumnHeader = TableHead;

export type TableCellOwnProps = BoxOwnProps & {
  sticky?: boolean;
};

function TableCellBase(props: PolymorphicProps<ElementType, TableCellOwnProps>, ref: Ref<unknown>) {
  const { as, className, sticky = false, ...rest } = props;
  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      as={as ?? "td"}
      className={cx("zui-table__cell", className)}
      data-sticky={sticky ? "true" : undefined}
      {...rest}
    />
  );
}

export const TableCell = forwardRef(TableCellBase) as PolymorphicComponent<"td", TableCellOwnProps>;

export type TableCaptionOwnProps = BoxOwnProps & {
  side?: TableCaptionSide;
};

function TableCaptionBase(
  props: PolymorphicProps<ElementType, TableCaptionOwnProps>,
  ref: Ref<unknown>
) {
  const { as, className, side = "bottom", ...rest } = props;
  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      as={as ?? "caption"}
      className={cx("zui-table__caption", className)}
      data-side={side}
      {...rest}
    />
  );
}

export const TableCaption = forwardRef(TableCaptionBase) as PolymorphicComponent<
  "caption",
  TableCaptionOwnProps
>;

export type TableColumnGroupOwnProps = BoxOwnProps;

function TableColumnGroupBase(
  props: PolymorphicProps<ElementType, TableColumnGroupOwnProps>,
  ref: Ref<unknown>
) {
  const { as, className, ...rest } = props;
  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      as={as ?? "colgroup"}
      className={cx("zui-table__column-group", className)}
      {...rest}
    />
  );
}

export const TableColumnGroup = forwardRef(TableColumnGroupBase) as PolymorphicComponent<
  "colgroup",
  TableColumnGroupOwnProps
>;

export type TableColumnOwnProps = BoxOwnProps & {
  htmlWidth?: number | string;
};

function TableColumnBase(
  props: PolymorphicProps<ElementType, TableColumnOwnProps>,
  ref: Ref<unknown>
) {
  const { as, className, htmlWidth, style, ...rest } = props;
  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      as={as ?? "col"}
      className={cx("zui-table__column", className)}
      style={{ ...style, width: htmlWidth }}
      {...rest}
    />
  );
}

export const TableColumn = forwardRef(TableColumnBase) as PolymorphicComponent<
  "col",
  TableColumnOwnProps
>;

/** @deprecated Use `TableHead` */
export const TableHeaderCell = TableHead;

export const TableParts = {
  Body: TableBody,
  Caption: TableCaption,
  Cell: TableCell,
  Column: TableColumn,
  ColumnGroup: TableColumnGroup,
  ColumnHeader: TableColumnHeader,
  Footer: TableFooter,
  Head: TableHead,
  Header: TableHeader,
  Root: TableRoot,
  Row: TableRow,
  ScrollArea: TableScrollArea
};
