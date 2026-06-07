import type { Meta, StoryObj } from "@storybook/react";
import { Button, DataTable } from "@zed-ui/react";

const DATA = [
  { category: "Electronics", price: 999, product: "Laptop" },
  { category: "Furniture", price: 150, product: "Desk Chair" },
  { category: "Accessories", price: 199, product: "Headphones" }
];

const COLUMNS = [
  { accessor: "product" as const, header: "Product", id: "product", sortable: true },
  { accessor: "category" as const, header: "Category", id: "category", sortable: true },
  { accessor: "price" as const, header: "Price", id: "price", sortable: true }
];

const meta: Meta<typeof DataTable> = {
  title: "Data Display/DataTable",
  component: DataTable
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const Default: Story = {
  render: () => <DataTable columns={COLUMNS} data={DATA} enableGlobalFilter variant="outline" />
};

export const Sorting: Story = {
  render: () => <DataTable columns={COLUMNS} data={DATA} variant="outline" />
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <DataTable columns={COLUMNS} data={DATA} variant="line" />
      <DataTable columns={COLUMNS} data={DATA} variant="outline" />
      <DataTable columns={COLUMNS} data={DATA} variant="subtle" />
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <DataTable columns={COLUMNS} data={DATA} size="sm" />
      <DataTable columns={COLUMNS} data={DATA} size="md" />
      <DataTable columns={COLUMNS} data={DATA} size="lg" />
    </div>
  )
};

export const Toolbar: Story = {
  render: () => (
    <DataTable
      columns={COLUMNS}
      data={DATA}
      enableGlobalFilter
      toolbar={<Button size="sm">Export</Button>}
      variant="outline"
    />
  )
};
