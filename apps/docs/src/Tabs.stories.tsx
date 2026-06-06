import type { Meta, StoryObj } from "@storybook/react";
import {
  Box,
  Stack,
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsRoot,
  TabsTrigger,
  Text
} from "@zed-ui/react";
import { useRef, useState, type ComponentProps, type CSSProperties } from "react";

function MembersTabs({
  showIndicator = false,
  ...props
}: ComponentProps<typeof TabsRoot> & { showIndicator?: boolean }) {
  return (
    <TabsRoot defaultValue="members" {...props}>
      <TabsList>
        <TabsTrigger value="members">Members</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
        {showIndicator ? <TabsIndicator /> : null}
      </TabsList>
      <TabsContent value="members">
        <Box pt="4">
          <Text color="secondary">Manage your team members</Text>
        </Box>
      </TabsContent>
      <TabsContent value="projects">
        <Box pt="4">
          <Text color="secondary">Manage your projects</Text>
        </Box>
      </TabsContent>
      <TabsContent value="settings">
        <Box pt="4">
          <Text color="secondary">Manage your tasks for freelancers</Text>
        </Box>
      </TabsContent>
    </TabsRoot>
  );
}

const meta: Meta<typeof TabsRoot> = {
  title: "Navigation/Tabs",
  component: TabsRoot,
  args: {
    size: "md",
    variant: "line"
  }
};

export default meta;
type Story = StoryObj<typeof TabsRoot>;

export const Default: Story = {
  render: (args) => <MembersTabs {...args} showIndicator />
};

export const Variants: Story = {
  render: () => (
    <Stack gap="8">
      {(["line", "subtle", "enclosed", "outline", "plain"] as const).map((variant) => (
        <MembersTabs key={variant} showIndicator={variant === "line"} variant={variant} />
      ))}
    </Stack>
  )
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="6">
      {(["sm", "md", "lg"] as const).map((size) => (
        <MembersTabs key={size} size={size} />
      ))}
    </Stack>
  )
};

export const Fitted: Story = {
  render: () => (
    <TabsRoot defaultValue="one" fitted variant="enclosed">
      <TabsList>
        <TabsTrigger value="one">Tab 1</TabsTrigger>
        <TabsTrigger value="two">Tab 2</TabsTrigger>
        <TabsTrigger value="three">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="one">
        <Box pt="4">
          <Text color="secondary">Tab 1 content</Text>
        </Box>
      </TabsContent>
      <TabsContent value="two">
        <Box pt="4">
          <Text color="secondary">Tab 2 content</Text>
        </Box>
      </TabsContent>
      <TabsContent value="three">
        <Box pt="4">
          <Text color="secondary">Tab 3 content</Text>
        </Box>
      </TabsContent>
    </TabsRoot>
  )
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const [value, setValue] = useState("first");

    return (
      <TabsRoot onValueChange={setValue} value={value}>
        <TabsList>
          <TabsTrigger value="first">First tab</TabsTrigger>
          <TabsTrigger value="second">Second tab</TabsTrigger>
        </TabsList>
        <TabsContent value="first">
          <Box pt="4">
            <Text color="secondary">First panel</Text>
          </Box>
        </TabsContent>
        <TabsContent value="second">
          <Box pt="4">
            <Text color="secondary">Second panel</Text>
          </Box>
        </TabsContent>
      </TabsRoot>
    );
  }
};

export const DisabledTab: Story = {
  render: () => (
    <TabsRoot defaultValue="members">
      <TabsList>
        <TabsTrigger value="members">Members</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger disabled value="settings">
          Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent value="members">
        <Box pt="4">
          <Text color="secondary">Manage your team members</Text>
        </Box>
      </TabsContent>
      <TabsContent value="projects">
        <Box pt="4">
          <Text color="secondary">Manage your projects</Text>
        </Box>
      </TabsContent>
    </TabsRoot>
  )
};

export const Vertical: Story = {
  render: () => (
    <TabsRoot defaultValue="members" orientation="vertical" style={{ maxWidth: "36rem" }}>
      <TabsList>
        <TabsTrigger value="members">Members</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
        <TabsIndicator />
      </TabsList>
      <TabsContent value="members">
        <Text color="secondary">Manage your team members and their roles here.</Text>
      </TabsContent>
      <TabsContent value="projects">
        <Text color="secondary">Manage your projects and their status here.</Text>
      </TabsContent>
      <TabsContent value="settings">
        <Text color="secondary">Manage your tasks and their progress here.</Text>
      </TabsContent>
    </TabsRoot>
  )
};

export const CustomIndicator: Story = {
  render: () => (
    <TabsRoot
      defaultValue="members"
      style={
        {
          "--zui-tabs-indicator-bg": "var(--zui-colors-success-solid)",
          "--zui-tabs-indicator-shadow": "var(--zui-shadows-sm)"
        } as CSSProperties
      }
    >
      <TabsList>
        <TabsTrigger value="members">Members</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
        <TabsIndicator />
      </TabsList>
      <TabsContent value="members">
        <Box pt="4">
          <Text color="secondary">Manage your team members</Text>
        </Box>
      </TabsContent>
      <TabsContent value="projects">
        <Box pt="4">
          <Text color="secondary">Manage your projects</Text>
        </Box>
      </TabsContent>
      <TabsContent value="settings">
        <Box pt="4">
          <Text color="secondary">Manage your settings</Text>
        </Box>
      </TabsContent>
    </TabsRoot>
  )
};

export const LazyMount: Story = {
  render: function LazyMountStory() {
    function LazyMountPanel({ label }: { label: string }) {
      const renders = useRef(0);
      renders.current += 1;

      return (
        <Box pt="4">
          <Text color="secondary">
            {label}: Content {renders.current}
          </Text>
        </Box>
      );
    }

    return (
      <TabsRoot defaultValue="one">
        <TabsList>
          <TabsTrigger value="one">Tab 1</TabsTrigger>
          <TabsTrigger value="two">Tab 2</TabsTrigger>
          <TabsTrigger value="three">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="one">
          <LazyMountPanel label="Tab 1" />
        </TabsContent>
        <TabsContent lazyMount value="two">
          <LazyMountPanel label="Tab 2" />
        </TabsContent>
        <TabsContent lazyMount value="three">
          <LazyMountPanel label="Tab 3" />
        </TabsContent>
      </TabsRoot>
    );
  }
};

export const CompoundNamespace: Story = {
  render: () => (
    <Tabs.Root defaultValue="members">
      <Tabs.List>
        <Tabs.Trigger value="members">Members</Tabs.Trigger>
        <Tabs.Trigger value="projects">Projects</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="members">
        <Box pt="4">
          <Text color="secondary">Using the Tabs namespace export.</Text>
        </Box>
      </Tabs.Content>
      <Tabs.Content value="projects">
        <Box pt="4">
          <Text color="secondary">Projects panel.</Text>
        </Box>
      </Tabs.Content>
    </Tabs.Root>
  )
};
