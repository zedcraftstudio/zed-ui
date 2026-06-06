import type { Meta, StoryObj } from "@storybook/react";
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImage,
  CardRoot,
  CardTitle,
  Flex,
  Stack,
  Text
} from "@zed-ui/react";

const meta: Meta<typeof CardRoot> = {
  title: "Data Display/Card",
  component: CardRoot,
  args: {
    size: "md",
    variant: "outline"
  }
};

export default meta;
type Story = StoryObj<typeof CardRoot>;

export const Default: Story = {
  render: (args) => (
    <CardRoot {...args} style={{ maxWidth: "24rem" }}>
      <CardHeader>
        <CardTitle>Nue Camp</CardTitle>
        <CardDescription>Design retreat in the mountains</CardDescription>
      </CardHeader>
      <CardBody>
        <Text color="secondary" size="sm">
          This is the card body. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </CardBody>
      <CardFooter>
        <Flex gap="2">
          <Button size="sm" variant="outline">
            View
          </Button>
          <Button size="sm">Join</Button>
        </Flex>
      </CardFooter>
    </CardRoot>
  )
};

export const Variants: Story = {
  render: () => (
    <Stack gap="4">
      {(
        ["elevated", "outline", "subtle", "ghost", "filled", "solid", "unstyled"] as const
      ).map((variant) => (
        <Card key={variant} size="sm" variant={variant}>
          <CardTitle>{variant}</CardTitle>
          <CardDescription>Card body for the {variant} variant.</CardDescription>
        </Card>
      ))}
    </Stack>
  )
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="4">
      {(["sm", "md", "lg"] as const).map((size) => (
        <Card key={size} size={size} variant="outline">
          <CardTitle>Card — {size}</CardTitle>
          <Text color="secondary" size="sm">
            This is the card body.
          </Text>
        </Card>
      ))}
    </Stack>
  )
};

export const WithImage: Story = {
  render: () => (
    <CardRoot style={{ maxWidth: "22rem" }} variant="elevated">
      <CardImage
        alt="Green couch"
        src="https://placehold.co/800x450/e2e8f0/475569?text=Living+room+Sofa"
      />
      <CardBody>
        <CardTitle>Living room Sofa</CardTitle>
        <CardDescription>Perfect for modern tropical spaces.</CardDescription>
      </CardBody>
    </CardRoot>
  )
};

export const Horizontal: Story = {
  render: () => (
    <CardRoot orientation="horizontal" style={{ maxWidth: "40rem" }} variant="outline">
      <CardImage
        alt="Caffe latte"
        src="https://placehold.co/640x480/e2e8f0/475569?text=Caffe+Latte"
      />
      <CardBody>
        <CardTitle>The perfect latte</CardTitle>
        <CardDescription>
          Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.
        </CardDescription>
        <Badge color="warning" size="sm" variant="soft">
          Hot
        </Badge>
      </CardBody>
    </CardRoot>
  )
};

export const WithAvatar: Story = {
  render: () => (
    <CardRoot style={{ maxWidth: "24rem" }} variant="outline">
      <CardHeader>
        <Flex align="center" gap="3">
          <Avatar fallback="NF" />
          <Stack gap="0">
            <CardTitle>Nate Foss</CardTitle>
            <Text color="secondary" size="sm">
              @natefoss
            </Text>
          </Stack>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text size="sm">Nate Foss has requested to join your team.</Text>
      </CardBody>
      <CardFooter>
        <Flex gap="2" justify="end" width="100%">
          <Button size="sm" variant="outline">
            Decline
          </Button>
          <Button size="sm">Approve</Button>
        </Flex>
      </CardFooter>
    </CardRoot>
  )
};
