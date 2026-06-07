import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, Badge, Stack, Text, Timeline } from "@zed-ui/react";

const meta: Meta<typeof Timeline.Root> = {
  title: "Data display/Timeline",
  component: Timeline.Root,
  args: {
    color: "neutral",
    size: "md",
    variant: "solid"
  }
};

export default meta;
type Story = StoryObj<typeof Timeline.Root>;

export const Default: Story = {
  render: (args) => (
    <Timeline.Root {...args} style={{ maxWidth: "25rem" }}>
      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator>🚚</Timeline.Indicator>
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title>Product Shipped</Timeline.Title>
          <Timeline.Description>13th May 2021</Timeline.Description>
          <Text size="sm">
            We shipped your product via <strong>FedEx</strong> and it should arrive within 3-5
            business days.
          </Text>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator>✓</Timeline.Indicator>
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title>Order Confirmed</Timeline.Title>
          <Timeline.Description>18th May 2021</Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator>📦</Timeline.Indicator>
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title>Order Delivered</Timeline.Title>
          <Timeline.Description>20th May 2021, 10:30am</Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline.Root>
  )
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="8">
      {(["sm", "md", "lg", "xl"] as const).map((size) => (
        <Timeline.Root key={size} size={size} style={{ maxWidth: "28rem" }}>
          <Timeline.Item>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator>
                <Avatar name="Sage" size="sm" />
              </Timeline.Indicator>
            </Timeline.Connector>
            <Timeline.Content>
              <Timeline.Title>
                <strong>sage</strong> created a new project
              </Timeline.Title>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator>✓</Timeline.Indicator>
            </Timeline.Connector>
            <Timeline.Content>
              <Timeline.Title>
                <strong>sage</strong> changed status from <Badge size="sm">In progress</Badge> to{" "}
                <Badge color="success" size="sm">
                  Completed
                </Badge>
              </Timeline.Title>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline.Root>
      ))}
    </Stack>
  )
};

export const Variants: Story = {
  render: () => (
    <Stack gap="8">
      {(["solid", "subtle", "outline", "plain"] as const).map((variant) => (
        <Timeline.Root key={variant} variant={variant} style={{ maxWidth: "28rem" }}>
          <Timeline.Item>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator>
                <Avatar name="Sage" size="sm" />
              </Timeline.Indicator>
            </Timeline.Connector>
            <Timeline.Content>
              <Timeline.Title>
                <strong>sage</strong> created a new project
              </Timeline.Title>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator>✓</Timeline.Indicator>
            </Timeline.Connector>
            <Timeline.Content>
              <Timeline.Title>
                <strong>sage</strong> changed status from In progress to Completed
              </Timeline.Title>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline.Root>
      ))}
    </Stack>
  )
};

export const ContentBefore: Story = {
  render: () => (
    <Stack gap="8">
      {(["sm", "md", "lg"] as const).map((size) => (
        <Timeline.Root key={size} size={size} style={{ maxWidth: "36rem" }}>
          <Timeline.Item>
            <Timeline.Content style={{ flex: "0 0 auto", width: "auto" }}>
              <Timeline.Title style={{ whiteSpace: "nowrap" }}>Nov 1994</Timeline.Title>
            </Timeline.Content>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator>1</Timeline.Indicator>
            </Timeline.Connector>
            <Timeline.Content>
              <Timeline.Title>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Timeline.Title>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Content style={{ flex: "0 0 auto", width: "auto" }}>
              <Timeline.Title style={{ whiteSpace: "nowrap" }}>Nov 2010</Timeline.Title>
            </Timeline.Content>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator>2</Timeline.Indicator>
            </Timeline.Connector>
            <Timeline.Content>
              <Timeline.Title>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Timeline.Title>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline.Root>
      ))}
    </Stack>
  )
};

export const AlternatingContent: Story = {
  render: () => (
    <Timeline.Root size="sm" variant="outline" style={{ maxWidth: "32rem" }}>
      <Timeline.Item>
        <Timeline.Content style={{ flex: 1 }} />
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator />
        </Timeline.Connector>
        <Timeline.Content style={{ flex: 1 }}>
          <Timeline.Title>Placed Order</Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Content style={{ alignItems: "flex-end", flex: 1 }}>
          <Timeline.Title>Prepared Order</Timeline.Title>
        </Timeline.Content>
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator />
        </Timeline.Connector>
        <Timeline.Content style={{ flex: 1 }} />
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Content style={{ flex: 1 }} />
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator />
        </Timeline.Connector>
        <Timeline.Content style={{ flex: 1 }}>
          <Timeline.Title>Order Delivered</Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline.Root>
  )
};

export const Composition: Story = {
  render: () => (
    <Timeline.Root size="lg" variant="subtle" style={{ maxWidth: "28rem" }}>
      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator>✎</Timeline.Indicator>
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title>
            <Avatar fallback="LM" size="xs" />
            <strong>Lucas Moras</strong> has changed <strong>3 labels</strong> on Jan 1, 2024
          </Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator>✕</Timeline.Indicator>
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title>
            <Avatar fallback="JS" size="xs" />
            <strong>Jenna Smith</strong> removed <strong>Ena</strong> on Jan 12, 2024
          </Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator>✕</Timeline.Indicator>
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title>
            <Avatar fallback="EC" size="xs" />
            <strong>Erica</strong> commented on Jan 12, 2024
          </Timeline.Title>
          <Timeline.Description>
            Lorem ipsum. Quisque faucibus. In id. Tempus leo. Pulvinar vivamus.
          </Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline.Root>
  )
};
