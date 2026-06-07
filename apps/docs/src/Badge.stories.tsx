import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Avatar, Badge, BadgeAnchor, IconButton, Stack } from "@zed-ui/react";

const meta: Meta<typeof Badge> = {
  title: "Feedback/Badge",
  component: Badge,
  args: {
    children: "Badge",
    color: "primary",
    variant: "soft"
  }
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <Stack direction="row" gap="2" wrap="wrap">
      <Badge color="primary" variant="solid">
        Solid
      </Badge>
      <Badge color="primary" variant="soft">
        Soft
      </Badge>
      <Badge color="primary" variant="outline">
        Outline
      </Badge>
      <Badge color="primary" variant="ghost">
        Ghost
      </Badge>
    </Stack>
  )
};

export const Colors: Story = {
  render: () => (
    <Stack direction="row" gap="2" wrap="wrap">
      <Badge color="primary">Primary</Badge>
      <Badge color="neutral">Neutral</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="danger">Danger</Badge>
      <Badge color="info">Info</Badge>
    </Stack>
  )
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" gap="2" align="center" wrap="wrap">
      <Badge size="xs">XS</Badge>
      <Badge size="sm">SM</Badge>
      <Badge size="md">MD</Badge>
      <Badge size="lg">LG</Badge>
    </Stack>
  )
};

export const Counter: Story = {
  render: () => (
    <Stack direction="row" gap="2" wrap="wrap">
      <Badge aria-label="3 unread messages" color="danger" variant="solid">
        3
      </Badge>
      <Badge aria-label="120 unread messages" color="danger" max={99} variant="solid">
        120
      </Badge>
      <Badge aria-label="99 plus unread messages" color="primary" variant="solid">
        99+
      </Badge>
    </Stack>
  )
};

export const StatusDot: Story = {
  render: () => (
    <Stack direction="row" gap="2" wrap="wrap">
      <Badge color="success" statusDot variant="soft">
        Live
      </Badge>
      <Badge color="warning" statusDot variant="outline">
        Pending
      </Badge>
      <Badge color="neutral" statusDot variant="ghost">
        Offline
      </Badge>
    </Stack>
  )
};

export const Dot: Story = {
  render: () => (
    <Stack direction="row" gap="3" align="center">
      <Badge color="success" variant="dot">
        Online
      </Badge>
      <Badge color="warning" variant="dot">
        Away
      </Badge>
      <Badge color="neutral" variant="dot">
        Offline
      </Badge>
    </Stack>
  )
};

export const Rounded: Story = {
  render: () => (
    <Stack direction="row" gap="2" align="center" wrap="wrap">
      <Badge color="primary">Pill</Badge>
      <Badge color="primary" pill={false}>
        Rounded
      </Badge>
      <Badge color="primary" radius="sm">
        SM radius
      </Badge>
      <Badge color="primary" radius="none">
        Square
      </Badge>
    </Stack>
  )
};

export const WithAvatar: Story = {
  render: () => (
    <Stack direction="row" gap="3" align="center" wrap="wrap">
      <Badge avatar={{ fallback: "ZK" }} color="neutral" variant="soft">
        Zed Kit
      </Badge>
      <Badge avatar={{ fallback: "AB" }} color="primary" variant="outline">
        Assigned
      </Badge>
    </Stack>
  )
};

export const Removable: Story = {
  render: function RemovableStory() {
    const [tags, setTags] = useState(["Design", "React", "TypeScript"]);

    return (
      <Stack direction="row" gap="2" wrap="wrap">
        {tags.map((tag) => (
          <Badge
            key={tag}
            aria-label={`${tag} tag`}
            color="primary"
            onClose={() => setTags((current) => current.filter((item) => item !== tag))}
          >
            {tag}
          </Badge>
        ))}
      </Stack>
    );
  }
};

function BellIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M4.5 13.5h9M7.5 3a3 3 0 0 1 3 0v1.8c1.8.5 3 2.1 3 4.2v2H4.5v-2c0-2.1 1.2-3.7 3-4.2V3Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const Anchor: Story = {
  render: () => (
    <Stack direction="row" gap="6" align="center" wrap="wrap">
      <BadgeAnchor content={5}>
        <IconButton aria-label="Notifications">
          <BellIcon />
        </IconButton>
      </BadgeAnchor>
      <BadgeAnchor color="success" dot size="sm">
        <Avatar fallback="ZK" size="md" />
      </BadgeAnchor>
      <BadgeAnchor color="danger" content={0} showZero>
        <Avatar fallback="AB" size="md" />
      </BadgeAnchor>
    </Stack>
  )
};
