import type { Meta, StoryObj } from "@storybook/react";
import {
  Avatar,
  AvatarGroup,
  BadgeAnchor,
  Flex,
  getAvatarColorFromName,
  Stack,
  Text
} from "@zed-ui/react";

const meta: Meta<typeof Avatar> = {
  title: "Data Display/Avatar",
  component: Avatar,
  args: {
    name: "Segun Adebayo",
    size: "md"
  }
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <Flex align="center" gap="3">
      <Avatar fallback="SA" size="xs" />
      <Avatar fallback="SA" size="sm" />
      <Avatar fallback="SA" size="md" />
      <Avatar fallback="SA" size="lg" />
      <Avatar fallback="SA" size="xl" />
    </Flex>
  )
};

export const Variants: Story = {
  render: () => (
    <Flex align="center" gap="3">
      <Avatar fallback="SA" variant="subtle" />
      <Avatar fallback="SA" variant="solid" />
      <Avatar fallback="SA" variant="outline" />
    </Flex>
  )
};

export const Shapes: Story = {
  render: () => (
    <Flex align="center" gap="3">
      <Avatar fallback="JS" shape="rounded" />
      <Avatar fallback="SA" shape="full" />
      <Avatar fallback="RU" shape="square" />
    </Flex>
  )
};

export const Fallback: Story = {
  render: () => (
    <Flex align="center" gap="3">
      <Avatar />
      <Avatar fallback="SU" />
      <Avatar name="Segun Adebayo" src="https://invalid.example/avatar.png" />
    </Flex>
  )
};

export const Group: Story = {
  render: () => (
    <AvatarGroup max={3}>
      <Avatar fallback="US" />
      <Avatar fallback="BA" />
      <Avatar fallback="UC" />
      <Avatar fallback="ZK" />
      <Avatar fallback="AB" />
    </AvatarGroup>
  )
};

export const Persona: Story = {
  render: () => (
    <Flex align="center" gap="3">
      <Avatar color={getAvatarColorFromName("Melissa Jones")} name="Melissa Jones" />
      <Stack gap="0">
        <Text weight="semibold">Melissa Jones</Text>
        <Text color="secondary" size="sm">
          melissa.jones@example.com
        </Text>
      </Stack>
    </Flex>
  )
};

export const WithBadge: Story = {
  render: () => (
    <BadgeAnchor content="" dot placement="bottom-end">
      <Avatar fallback="DA" size="lg" />
    </BadgeAnchor>
  )
};
