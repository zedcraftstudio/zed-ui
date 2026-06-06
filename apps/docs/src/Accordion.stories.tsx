import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, Text } from "@zed-ui/react";

const meta: Meta<typeof Accordion.Root> = {
  title: "Navigation/Accordion",
  component: Accordion.Root,
  args: {
    size: "md",
    variant: "outline"
  }
};

export default meta;
type Story = StoryObj<typeof Accordion.Root>;

export const Default: Story = {
  render: (args) => (
    <Accordion.Root defaultValue={["item-1"]} {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Header>
          <Accordion.Trigger>What is Zed UI?</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>
          <Text color="secondary">A typed React design system built on Base UI.</Text>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Header>
          <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>
          <Text color="secondary">Keyboard and screen reader support follow APG patterns.</Text>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion.Root>
  )
};

export const Multiple: Story = {
  render: () => (
    <Accordion.Root defaultValue={["a", "b"]} multiple variant="plain">
      <Accordion.Item value="a">
        <Accordion.Header>
          <Accordion.Trigger>Section A</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>
          <Text color="secondary">Panel A</Text>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="b">
        <Accordion.Header>
          <Accordion.Trigger>Section B</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>
          <Text color="secondary">Panel B</Text>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion.Root>
  )
};
