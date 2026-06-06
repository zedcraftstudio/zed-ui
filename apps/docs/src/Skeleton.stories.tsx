import type { Meta, StoryObj } from "@storybook/react";
import { useState, type CSSProperties } from "react";
import {
  Button,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Text
} from "@zed-ui/react";

const meta: Meta<typeof Skeleton> = {
  title: "Feedback/Skeleton",
  component: Skeleton,
  args: {
    height: "1rem",
    width: "12rem",
    variant: "pulse"
  }
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {};

export const Feed: Story = {
  render: () => (
    <Stack gap="6" style={{ maxWidth: "20rem" }}>
      <Stack direction="row" gap="3" width="full">
        <SkeletonCircle size="md" />
        <SkeletonText noOfLines={2} />
      </Stack>
      <Skeleton height="8rem" width="100%" />
    </Stack>
  )
};

export const TextLines: Story = {
  render: () => <SkeletonText noOfLines={4} />
};

export const Variants: Story = {
  render: () => (
    <Stack gap="3" style={{ maxWidth: "20rem" }}>
      <Skeleton height="1rem" variant="pulse" width="12rem" />
      <Skeleton height="1rem" variant="shine" width="12rem" />
      <Skeleton height="1rem" variant="none" width="12rem" />
    </Stack>
  )
};

export const WithChildren: Story = {
  render: function WithChildrenStory() {
    const [loading, setLoading] = useState(true);

    return (
      <Stack gap="3" align="start">
        <Skeleton loading={loading} width="fit-content">
          <Text>Content loaded</Text>
        </Skeleton>
        <Button size="sm" onClick={() => setLoading((value) => !value)}>
          Toggle
        </Button>
      </Stack>
    );
  }
};

export const CustomColors: Story = {
  render: () => (
    <Skeleton
      height="1rem"
      style={
        {
          "--zui-skeleton-start-color": "#e2e8f0",
          "--zui-skeleton-end-color": "#cbd5e1"
        } as CSSProperties
      }
      variant="shine"
      width="12rem"
    />
  )
};
