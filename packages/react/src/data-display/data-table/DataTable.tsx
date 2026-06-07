import { forwardRef, type ReactNode } from "react";
import { cx } from "@zed-ui/utils";
import { Input } from "../../forms/input/Input";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
  TableScrollArea,
  type TableRootOwnProps
} from "../table/Table";
import {
  useDataTable,
  type DataTableColumn,
  type DataTableSortingState,
  type UseDataTableOptions
} from "./useDataTable";

export type { DataTableColumn, DataTableSortingState };

export type DataTableOwnProps<T> = Omit<TableRootOwnProps, "children"> & {
  columns: DataTableColumn<T>[];
  data: T[];
  enableGlobalFilter?: boolean;
  filterPlaceholder?: string;
  getRowId?: (row: T, index: number) => string;
  globalFilter?: string;
  initialSorting?: DataTableSortingState;
  onGlobalFilterChange?: (value: string) => void;
  toolbar?: ReactNode;
};

function SortIndicator({ direction }: { direction: "asc" | "desc" | null }) {
  if (!direction) {
    return (
      <span aria-hidden className="zui-data-table__sort-icon zui-data-table__sort-icon--idle">
        ↕
      </span>
    );
  }

  return (
    <span aria-hidden className="zui-data-table__sort-icon">
      {direction === "asc" ? "↑" : "↓"}
    </span>
  );
}

function DataTableInner<T>(
  {
    className,
    columns,
    data,
    enableGlobalFilter = false,
    filterPlaceholder = "Filter rows…",
    getRowId,
    globalFilter: controlledGlobalFilter,
    initialSorting,
    onGlobalFilterChange,
    size,
    toolbar,
    variant,
    ...tableProps
  }: DataTableOwnProps<T>,
  ref: React.Ref<HTMLTableElement>
) {
  const { globalFilter, rows, setGlobalFilter, sorting, toggleSorting } = useDataTable({
    columns,
    data,
    globalFilter: controlledGlobalFilter,
    initialSorting
  });

  const showToolbar = Boolean(toolbar || enableGlobalFilter);

  return (
    <div className={cx("zui-data-table", className)}>
      {showToolbar ? (
        <div className="zui-data-table__toolbar">
          {enableGlobalFilter ? (
            <Input
              className="zui-data-table__filter"
              placeholder={filterPlaceholder}
              size={size === "lg" ? "md" : (size ?? "md")}
              value={globalFilter}
              onChange={(event) => {
                const value = event.currentTarget.value;
                onGlobalFilterChange?.(value);
                if (controlledGlobalFilter === undefined) {
                  setGlobalFilter(value);
                }
              }}
            />
          ) : null}
          {toolbar}
        </div>
      ) : null}

      <TableScrollArea>
        <TableRoot ref={ref} size={size} variant={variant} {...tableProps}>
          <TableHeader>
            <TableRow>
              {columns.map((column) => {
                const isSorted = sorting?.id === column.id;
                const sortDirection = isSorted ? sorting.direction : null;

                if (!column.sortable) {
                  return <TableHead key={column.id}>{column.header}</TableHead>;
                }

                return (
                  <TableHead
                    key={column.id}
                    aria-sort={
                      isSorted ? (sortDirection === "asc" ? "ascending" : "descending") : "none"
                    }
                  >
                    <button
                      className="zui-data-table__sort-button"
                      type="button"
                      onClick={() => toggleSorting(column.id)}
                    >
                      <span>{column.header}</span>
                      <SortIndicator direction={sortDirection} />
                    </button>
                  </TableHead>
                );
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={getRowId?.(row, index) ?? index}>
                {columns.map((column) => (
                  <TableCell key={column.id}>
                    {column.cell ? column.cell(row) : String(getColumnValue(row, column) ?? "")}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </TableRoot>
      </TableScrollArea>
    </div>
  );
}

function getColumnValue<T>(row: T, column: DataTableColumn<T>): unknown {
  if (!column.accessor) return undefined;
  return typeof column.accessor === "function" ? column.accessor(row) : row[column.accessor];
}

export const DataTable = forwardRef(DataTableInner) as <T>(
  props: DataTableOwnProps<T> & { ref?: React.Ref<HTMLTableElement> }
) => React.ReactElement;

(DataTable as { displayName?: string }).displayName = "DataTable";

export { useDataTable, type UseDataTableOptions };
