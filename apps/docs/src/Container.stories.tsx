import type { Meta, StoryObj } from "@storybook/react";
import { Box, Container, Stack, Text } from "@zed-ui/react";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, tortor in lacinia eleifend, dui nisl tristique nunc.";

const meta: Meta<typeof Container> = {
  title: "Layout/Container",
  component: Container
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  render: () => (
    <Container size="md">
      <Box p="4" bg="muted" radius="md">
        <Text size="sm">{LOREM}</Text>
      </Box>
    </Container>
  )
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="4">
      {(["sm", "md", "lg", "xl", "2xl"] as const).map((size) => (
        <Container key={size} size={size}>
          <Box p="4" bg="muted" radius="md">
            <Text size="sm">
              <Text as="span" weight="semibold">
                {size}
              </Text>{" "}
              — {LOREM}
            </Text>
          </Box>
        </Container>
      ))}
    </Stack>
  )
};

export const Fluid: Story = {
  render: () => (
    <Container fluid>
      <Box p="4" bg="muted" radius="md">
        <Text size="sm">{LOREM}</Text>
      </Box>
    </Container>
  )
};
