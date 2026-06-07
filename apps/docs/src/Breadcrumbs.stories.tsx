import type { Meta, StoryObj } from "@storybook/react";
import { BreadcrumbsItem, BreadcrumbsRoot, BreadcrumbsSeparator } from "@zed-ui/react";

const meta: Meta<typeof BreadcrumbsRoot> = {
  title: "Navigation/Breadcrumbs",
  component: BreadcrumbsRoot
};

export default meta;
type Story = StoryObj<typeof BreadcrumbsRoot>;

export const Default: Story = {
  args: {
    items: [
      { href: "/", label: "Home" },
      { href: "/docs", label: "Docs" },
      { label: "Breadcrumbs" }
    ]
  }
};

export const LongPath: Story = {
  args: {
    items: [
      { href: "/", label: "Home" },
      { href: "/products", label: "Products" },
      { href: "/products/widgets", label: "Widgets" },
      { label: "Settings" }
    ]
  }
};

export const CompoundParts: Story = {
  render: () => (
    <BreadcrumbsRoot>
      <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
      <BreadcrumbsSeparator />
      <BreadcrumbsItem href="/docs">Docs</BreadcrumbsItem>
      <BreadcrumbsSeparator />
      <BreadcrumbsItem current>Current</BreadcrumbsItem>
    </BreadcrumbsRoot>
  )
};

export const CustomSeparator: Story = {
  args: {
    items: [
      { href: "/", label: "Home" },
      { label: "Docs" }
    ],
    separator: "›"
  }
};
