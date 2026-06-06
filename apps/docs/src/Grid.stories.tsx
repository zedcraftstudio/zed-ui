import type { Meta, StoryObj } from "@storybook/react";
import { Box, Grid, GridItem, Text } from "@zed-ui/react";

const meta: Meta<typeof Grid> = {
  title: "Layout/Grid",
  component: Grid
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  render: () => (
    <Grid columns="repeat(2, minmax(0, 1fr))" gap="3">
      <Box p="4" bg="muted" radius="md">
        <Text size="sm">A</Text>
      </Box>
      <Box p="4" bg="muted" radius="md">
        <Text size="sm">B</Text>
      </Box>
    </Grid>
  )
};

export const ColSpan: Story = {
  render: () => (
    <Grid columns="repeat(4, minmax(0, 1fr))" gap="2">
      <GridItem colSpan={2} p="3" bg="muted" radius="sm">
        <Text size="sm">colSpan=2</Text>
      </GridItem>
      <GridItem p="3" bg="muted" radius="sm">
        <Text size="sm">2</Text>
      </GridItem>
      <GridItem p="3" bg="muted" radius="sm">
        <Text size="sm">3</Text>
      </GridItem>
      <GridItem colSpan={4} p="3" bg="muted" radius="sm">
        <Text size="sm">colSpan=4</Text>
      </GridItem>
    </Grid>
  )
};

export const RowSpan: Story = {
  render: () => (
    <Grid columns="repeat(4, minmax(0, 1fr))" gap="2" rows="repeat(2, minmax(4rem, auto))">
      <GridItem colSpan={2} p="3" bg="muted" radius="sm">
        <Text size="sm">colSpan=2</Text>
      </GridItem>
      <GridItem p="3" bg="muted" radius="sm">
        <Text size="sm">2</Text>
      </GridItem>
      <GridItem p="3" bg="muted" radius="sm">
        <Text size="sm">3</Text>
      </GridItem>
      <GridItem colSpan={2} p="3" bg="muted" radius="sm">
        <Text size="sm">colSpan=2</Text>
      </GridItem>
      <GridItem colSpan={2} rowSpan={2} p="3" bg="surface" radius="sm" shadow="sm">
        <Text size="sm">rowSpan=2</Text>
      </GridItem>
    </Grid>
  )
};
