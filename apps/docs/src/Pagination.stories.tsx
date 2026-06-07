import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Pagination } from "@zed-ui/react";

const meta: Meta<typeof Pagination> = {
  title: "Navigation/Pagination",
  component: Pagination,
  args: {
    count: 10,
    page: 1,
    size: "md"
  }
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: function DefaultStory(args) {
    const [page, setPage] = useState(args.page);
    return <Pagination {...args} page={page} onPageChange={setPage} />;
  }
};

export const ManyPages: Story = {
  render: function ManyPagesStory() {
    const [page, setPage] = useState(12);
    return <Pagination count={50} page={page} onPageChange={setPage} />;
  }
};

export const Sizes: Story = {
  render: function SizesStory() {
    const [page, setPage] = useState(2);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Pagination
          aria-label="Small pagination"
          count={5}
          page={page}
          size="sm"
          onPageChange={setPage}
        />
        <Pagination
          aria-label="Medium pagination"
          count={5}
          page={page}
          size="md"
          onPageChange={setPage}
        />
        <Pagination
          aria-label="Large pagination"
          count={5}
          page={page}
          size="lg"
          onPageChange={setPage}
        />
      </div>
    );
  }
};

export const Disabled: Story = {
  render: () => <Pagination count={10} disabled page={3} onPageChange={() => undefined} />
};
