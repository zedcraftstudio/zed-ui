import { fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DataTable } from "./DataTable";
import { renderWithProvider } from "../../test/render";

type Row = { name: string; price: number };

const DATA: Row[] = [
  { name: "Laptop", price: 999 },
  { name: "Chair", price: 150 }
];

const COLUMNS = [
  { accessor: "name" as const, header: "Name", id: "name", sortable: true },
  { accessor: "price" as const, header: "Price", id: "price", sortable: true }
];

describe("DataTable", () => {
  it("renders rows from data", () => {
    const { getByText } = renderWithProvider(<DataTable columns={COLUMNS} data={DATA} />);

    expect(getByText("Laptop")).toBeTruthy();
    expect(getByText("Chair")).toBeTruthy();
  });

  it("renders sortable column headers", () => {
    const { getAllByRole } = renderWithProvider(<DataTable columns={COLUMNS} data={DATA} />);

    expect(getAllByRole("button").length).toBeGreaterThan(0);
  });

  it("sorts rows when header clicked", () => {
    const { getAllByRole, getByRole } = renderWithProvider(
      <DataTable columns={COLUMNS} data={DATA} />
    );
    fireEvent.click(getByRole("button", { name: /Price/ }));
    const rows = getAllByRole("row");
    expect(rows[1]?.textContent).toContain("Chair");
  });

  it("filters rows with global filter", () => {
    const { getByPlaceholderText, queryByText } = renderWithProvider(
      <DataTable columns={COLUMNS} data={DATA} enableGlobalFilter />
    );
    fireEvent.change(getByPlaceholderText("Filter rows…"), { target: { value: "Laptop" } });
    expect(queryByText("Chair")).toBeNull();
  });

  it("toggles descending sort on repeated header clicks", () => {
    const { getByRole, getAllByRole } = renderWithProvider(
      <DataTable columns={COLUMNS} data={DATA} />
    );
    fireEvent.click(getByRole("button", { name: /Price/ }));
    fireEvent.click(getByRole("button", { name: /Price/ }));
    const rows = getAllByRole("row");
    expect(rows[1]?.textContent).toContain("Laptop");
  });
});
