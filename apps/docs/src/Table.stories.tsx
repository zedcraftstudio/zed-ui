import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Checkbox,
  Flex,
  Stack,
  TableBody,
  TableCaption,
  TableCell,
  TableColumn,
  TableColumnGroup,
  TableFooter,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
  TableScrollArea
} from "@zed-ui/react";
import { useState } from "react";

const PRODUCTS = [
  { product: "Laptop", category: "Electronics", price: "999.99" },
  { product: "Coffee Maker", category: "Home Appliances", price: "49.99" },
  { product: "Desk Chair", category: "Furniture", price: "150" },
  { product: "Smartphone", category: "Electronics", price: "799.99" },
  { product: "Headphones", category: "Accessories", price: "199.99" }
] as const;

function ProductTable(props: React.ComponentProps<typeof TableRoot>) {
  return (
    <TableRoot {...props}>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {PRODUCTS.map((row) => (
          <TableRow key={row.product}>
            <TableCell>{row.product}</TableCell>
            <TableCell>{row.category}</TableCell>
            <TableCell>{row.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableRoot>
  );
}

const meta: Meta<typeof TableRoot> = {
  title: "Data Display/Table",
  component: TableRoot,
  args: {
    size: "md",
    variant: "line"
  }
};

export default meta;
type Story = StoryObj<typeof TableRoot>;

export const Default: Story = {
  render: (args) => <ProductTable {...args} />
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="6">
      {(["sm", "md", "lg"] as const).map((size) => (
        <ProductTable key={size} size={size} />
      ))}
    </Stack>
  )
};

export const Variants: Story = {
  render: () => (
    <Stack gap="6">
      <ProductTable variant="line" />
      <ProductTable variant="outline" />
      <ProductTable variant="subtle" />
    </Stack>
  )
};

export const Striped: Story = {
  render: () => <ProductTable striped />
};

export const Caption: Story = {
  render: () => (
    <TableRoot>
      <TableCaption>Product inventory and pricing information</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {PRODUCTS.map((row) => (
          <TableRow key={row.product}>
            <TableCell>{row.product}</TableCell>
            <TableCell>{row.category}</TableCell>
            <TableCell>{row.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableRoot>
  )
};

export const Interactive: Story = {
  render: () => <ProductTable interactive />
};

export const WithFooter: Story = {
  render: () => (
    <TableRoot variant="outline">
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {PRODUCTS.map((row) => (
          <TableRow key={row.product}>
            <TableCell>{row.product}</TableCell>
            <TableCell>{row.category}</TableCell>
            <TableCell>{row.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell>2199.96</TableCell>
        </TableRow>
      </TableFooter>
    </TableRoot>
  )
};

export const StickyHeader: Story = {
  render: () => (
    <TableScrollArea
      aria-label="Scrollable product table"
      style={{ maxHeight: "12rem" }}
      tabIndex={0}
    >
      <TableRoot stickyHeader>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...PRODUCTS, ...PRODUCTS].map((row, index) => (
            <TableRow key={`${row.product}-${index}`}>
              <TableCell>{row.product}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableRoot>
    </TableScrollArea>
  )
};

export const Selection: Story = {
  render: function SelectionStory() {
    const [selected, setSelected] = useState<string[]>([]);
    const allSelected = selected.length === PRODUCTS.length;
    const someSelected = selected.length > 0 && !allSelected;

    return (
      <TableRoot interactive variant="outline">
        <TableHeader>
          <TableRow>
            <TableHead aria-label="Select rows">
              <Checkbox
                aria-label="Select all rows"
                checked={allSelected}
                indeterminate={someSelected}
                onCheckedChange={(checked) =>
                  setSelected(checked ? PRODUCTS.map((row) => row.product) : [])
                }
              />
            </TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {PRODUCTS.map((row) => (
            <TableRow key={row.product}>
              <TableCell>
                <Checkbox
                  aria-label={`Select ${row.product}`}
                  checked={selected.includes(row.product)}
                  onCheckedChange={(checked) =>
                    setSelected((current) =>
                      checked
                        ? [...current, row.product]
                        : current.filter((item) => item !== row.product)
                    )
                  }
                />
              </TableCell>
              <TableCell>{row.product}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>${row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableRoot>
    );
  }
};

export const ColumnGroup: Story = {
  render: () => (
    <TableRoot variant="outline">
      <TableColumnGroup>
        <TableColumn htmlWidth="40%" />
        <TableColumn htmlWidth="35%" />
        <TableColumn htmlWidth="25%" />
      </TableColumnGroup>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {PRODUCTS.map((row) => (
          <TableRow key={row.product}>
            <TableCell>{row.product}</TableCell>
            <TableCell>{row.category}</TableCell>
            <TableCell>{row.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableRoot>
  )
};

export const Pagination: Story = {
  render: function PaginationStory() {
    const [page, setPage] = useState(1);
    const pageSize = 3;
    const pageCount = Math.ceil(PRODUCTS.length / pageSize);
    const rows = PRODUCTS.slice((page - 1) * pageSize, page * pageSize);

    return (
      <Stack gap="4">
        <TableRoot variant="outline">
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.product}>
                <TableCell>{row.product}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableRoot>
        <Flex gap="2" justify="center">
          {Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => (
            <Button
              key={pageNumber}
              onClick={() => setPage(pageNumber)}
              size="sm"
              variant={pageNumber === page ? "solid" : "outline"}
            >
              {pageNumber}
            </Button>
          ))}
        </Flex>
      </Stack>
    );
  }
};
