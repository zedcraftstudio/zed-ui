import { useMemo, useState, type ReactNode } from "react";

export type DataTableSortDirection = "asc" | "desc";

export type DataTableSortingState = {
  direction: DataTableSortDirection;
  id: string;
} | null;

export type DataTableColumn<T> = {
  accessor?: keyof T | ((row: T) => unknown);
  cell?: (row: T) => ReactNode;
  header: ReactNode;
  id: string;
  sortable?: boolean;
  sortingFn?: (left: T, right: T) => number;
};

export type UseDataTableOptions<T> = {
  columns: DataTableColumn<T>[];
  data: T[];
  globalFilter?: string;
  initialSorting?: DataTableSortingState;
};

function getColumnValue<T>(row: T, column: DataTableColumn<T>): unknown {
  if (column.accessor) {
    return typeof column.accessor === "function" ? column.accessor(row) : row[column.accessor];
  }
  return undefined;
}

function defaultSortingFn<T>(left: T, right: T, column: DataTableColumn<T>): number {
  const leftValue = getColumnValue(left, column);
  const rightValue = getColumnValue(right, column);

  if (leftValue == null && rightValue == null) return 0;
  if (leftValue == null) return 1;
  if (rightValue == null) return -1;

  if (typeof leftValue === "number" && typeof rightValue === "number") {
    return leftValue - rightValue;
  }

  return String(leftValue).localeCompare(String(rightValue), undefined, { numeric: true });
}

export function useDataTable<T>({
  columns,
  data,
  globalFilter: controlledGlobalFilter,
  initialSorting = null
}: UseDataTableOptions<T>) {
  const [sorting, setSorting] = useState<DataTableSortingState>(initialSorting);
  const [uncontrolledGlobalFilter, setGlobalFilter] = useState("");
  const globalFilter = controlledGlobalFilter ?? uncontrolledGlobalFilter;

  const rows = useMemo(() => {
    let nextRows = [...data];
    const query = globalFilter.trim().toLowerCase();

    if (query) {
      nextRows = nextRows.filter((row) =>
        columns.some((column) => {
          const value = getColumnValue(row, column);
          return value != null && String(value).toLowerCase().includes(query);
        })
      );
    }

    if (sorting) {
      const column = columns.find((item) => item.id === sorting.id);
      if (column) {
        const compare =
          column.sortingFn ?? ((left, right) => defaultSortingFn(left, right, column));
        nextRows.sort(compare);
        if (sorting.direction === "desc") {
          nextRows.reverse();
        }
      }
    }

    return nextRows;
  }, [columns, data, globalFilter, sorting]);

  function toggleSorting(columnId: string) {
    setSorting((current) => {
      if (!current || current.id !== columnId) {
        return { direction: "asc", id: columnId };
      }
      if (current.direction === "asc") {
        return { direction: "desc", id: columnId };
      }
      return null;
    });
  }

  return {
    globalFilter,
    rows,
    setGlobalFilter,
    setSorting,
    sorting,
    toggleSorting
  };
}
