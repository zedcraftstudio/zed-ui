import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useDataTable } from "./useDataTable";

type Row = { name: string; price: number | null; score?: number };

const columns = [
  { accessor: "name" as const, header: "Name", id: "name", sortable: true },
  { accessor: (row: Row) => row.price, header: "Price", id: "price", sortable: true },
  { accessor: "score" as const, header: "Score", id: "score" },
  { cell: (row: Row) => row.name, header: "Cell", id: "cell" }
];

const data: Row[] = [
  { name: "B", price: 20 },
  { name: "A", price: null },
  { name: "C", price: 10, score: 5 }
];

describe("useDataTable", () => {
  it("filters rows with uncontrolled global filter", () => {
    const { result } = renderHook(() => useDataTable({ columns, data }));

    act(() => result.current.setGlobalFilter("B"));

    expect(result.current.rows).toHaveLength(1);
    expect(result.current.rows[0]?.name).toBe("B");
  });

  it("uses controlled global filter", () => {
    const { result } = renderHook(() => useDataTable({ columns, data, globalFilter: "A" }));

    expect(result.current.rows).toHaveLength(1);
    expect(result.current.rows[0]?.name).toBe("A");
  });

  it("toggles sorting asc, desc, and clears", () => {
    const { result } = renderHook(() => useDataTable({ columns, data }));

    act(() => result.current.toggleSorting("name"));
    expect(result.current.sorting).toEqual({ direction: "asc", id: "name" });
    expect(result.current.rows[0]?.name).toBe("A");

    act(() => result.current.toggleSorting("name"));
    expect(result.current.sorting).toEqual({ direction: "desc", id: "name" });
    expect(result.current.rows[0]?.name).toBe("C");

    act(() => result.current.toggleSorting("name"));
    expect(result.current.sorting).toBeNull();
  });

  it("sorts numeric values and handles nulls", () => {
    const { result } = renderHook(() =>
      useDataTable({ columns, data, initialSorting: { direction: "asc", id: "price" } })
    );

    expect(result.current.rows.map((row) => row.name)).toEqual(["C", "B", "A"]);
  });

  it("uses custom sortingFn when provided", () => {
    const customColumns = [
      {
        accessor: "name" as const,
        header: "Name",
        id: "name",
        sortable: true,
        sortingFn: (left: Row, right: Row) => right.name.localeCompare(left.name)
      }
    ];

    const { result } = renderHook(() =>
      useDataTable({
        columns: customColumns,
        data,
        initialSorting: { direction: "asc", id: "name" }
      })
    );

    expect(result.current.rows[0]?.name).toBe("C");
  });
});
