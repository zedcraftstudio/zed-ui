import { useRef, useState, type ComponentProps, type CSSProperties } from "react";
import { Box, Accordion, Button, Menu, Stack, TabsContent, TabsIndicator, TabsList, TabsRoot, TabsTrigger, Text } from "@zed-ui/react";
import { ComponentDoc } from "../../components/ComponentDoc";
import { DocExample } from "../../components/DocExample";

const MEMBERS_TABS_CONTENT = `  <Tabs.Content value="members">Manage your team members</Tabs.Content>
  <Tabs.Content value="projects">Manage your projects</Tabs.Content>
  <Tabs.Content value="settings">Manage your tasks for freelancers</Tabs.Content>`;

function membersTabsCode(options?: { indicator?: boolean; size?: string; variant?: string }) {
  const rootProps = [
    'defaultValue="members"',
    options?.variant ? `variant="${options.variant}"` : null,
    options?.size ? `size="${options.size}"` : null
  ]
    .filter(Boolean)
    .join(" ");
  const indicator = options?.indicator ? "\n    <Tabs.Indicator />" : "";

  return `<Tabs.Root ${rootProps}>
  <Tabs.List>
    <Tabs.Trigger value="members">Members</Tabs.Trigger>
    <Tabs.Trigger value="projects">Projects</Tabs.Trigger>
    <Tabs.Trigger value="settings">Settings</Tabs.Trigger>${indicator}
  </Tabs.List>
${MEMBERS_TABS_CONTENT}
</Tabs.Root>`;
}

const TABS_VARIANTS_CODE = (["line", "subtle", "enclosed", "outline", "plain"] as const)
  .map((variant) => membersTabsCode({ indicator: variant === "line", variant }))
  .join("\n\n");

const TABS_SIZES_CODE = (["sm", "md", "lg"] as const)
  .map((size) => membersTabsCode({ size }))
  .join("\n\n");

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

export function TabsSection() {
  const [value, setValue] = useState("first");

  return (
    <ComponentDoc
      id="tabs"
      title="Tabs"
      description="Used to display content in a tabbed interface. Built on Base UI with ZUI variants, sizes, and compound parts."
      usage={{
        importCode: `import { Tabs, Text } from "@zed-ui/react"`,
        usageCode: `<Tabs.Root defaultValue="members">
  <Tabs.List>
    <Tabs.Trigger value="members">Members</Tabs.Trigger>
    <Tabs.Trigger value="projects">Projects</Tabs.Trigger>
    <Tabs.Indicator />
  </Tabs.List>
  <Tabs.Content value="members">Manage your team members</Tabs.Content>
  <Tabs.Content value="projects">Manage your projects</Tabs.Content>
</Tabs.Root>`,
        preview: <MembersTabs showIndicator />
      }}
    >
      <DocExample title="Variants" code={TABS_VARIANTS_CODE}>
        <Stack gap="8">
          {(["line", "subtle", "enclosed", "outline", "plain"] as const).map((variant) => (
            <MembersTabs key={variant} showIndicator={variant === "line"} variant={variant} />
          ))}
        </Stack>
      </DocExample>

      <DocExample title="Sizes" code={TABS_SIZES_CODE}>
        <Stack gap="6">
          {(["sm", "md", "lg"] as const).map((size) => (
            <MembersTabs key={size} size={size} />
          ))}
        </Stack>
      </DocExample>

      <DocExample
        title="Indicator"
        code={`<Tabs.List>
  <Tabs.Trigger value="members">Members</Tabs.Trigger>
  <Tabs.Indicator />
</Tabs.List>`}
      >
        <MembersTabs showIndicator />
      </DocExample>

      <DocExample
        title="Custom indicator"
        description="Style the indicator with CSS variables such as --zui-tabs-indicator-bg and --zui-tabs-indicator-shadow."
        code={`<Tabs.Root style={{ "--zui-tabs-indicator-bg": "var(--zui-colors-success-solid)" }} />`}
      >
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
      </DocExample>

      <DocExample title="Fitted" code={`<Tabs.Root fitted>...</Tabs.Root>`}>
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
      </DocExample>

      <DocExample
        title="Controlled"
        code={`const [value, setValue] = useState("first");

<Tabs.Root value={value} onValueChange={setValue}>...</Tabs.Root>`}
      >
        <Stack gap="3">
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
          <Text color="secondary" size="sm">
            Selected: {value}
          </Text>
        </Stack>
      </DocExample>

      <DocExample title="Disabled tab" code={`<Tabs.Trigger disabled value="settings">Settings</Tabs.Trigger>`}>
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
      </DocExample>

      <DocExample
        title="Manual activation"
        description="Arrow keys move focus without changing tabs until Enter or Space is pressed."
        code={`<Tabs.Root activationMode="manual">...</Tabs.Root>`}
      >
        <MembersTabs activationMode="manual" />
      </DocExample>

      <DocExample
        title="Lazy mounted"
        description="Use lazyMount on content panels to defer rendering until a tab is first selected."
        code={`<Tabs.Content lazyMount value="two">...</Tabs.Content>`}
      >
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
      </DocExample>

      <DocExample title="Vertical" code={`<Tabs.Root orientation="vertical">...</Tabs.Root>`}>
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
      </DocExample>

      <DocExample
        title="Documentation panels"
        code={`<Tabs.Root defaultValue="overview">
  <Tabs.List>...</Tabs.List>
  <Tabs.Content value="overview">...</Tabs.Content>
</Tabs.Root>`}
      >
        <TabsRoot defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tokens">Tokens</TabsTrigger>
            <TabsTrigger value="a11y">Accessibility</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Box pt="4">
              <Text color="secondary">Build products with speed and consistent UX.</Text>
            </Box>
          </TabsContent>
          <TabsContent value="tokens">
            <Box pt="4">
              <Text color="secondary">Semantic tokens map to CSS variables at runtime.</Text>
            </Box>
          </TabsContent>
          <TabsContent value="a11y">
            <Box pt="4">
              <Text color="secondary">Focus management and ARIA built into overlays.</Text>
            </Box>
          </TabsContent>
        </TabsRoot>
      </DocExample>
    </ComponentDoc>
  );
}

const ACCORDION_USAGE = `<Accordion.Root defaultValue={["item-1"]}>
  <Accordion.Item value="item-1">
    <Accordion.Header>
      <Accordion.Trigger>What is Zed UI?</Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Panel>
      Zed UI is a typed React design system built on Base UI and CSS variables.
    </Accordion.Panel>
  </Accordion.Item>
  <Accordion.Item value="item-2">
    <Accordion.Header>
      <Accordion.Trigger>How do I install it?</Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Panel>Install with npm install @zed-ui/react@beta</Accordion.Panel>
  </Accordion.Item>
</Accordion.Root>`;

export function AccordionSection() {
  return (
    <ComponentDoc
      id="accordion"
      title="Accordion"
      description="Expandable sections for grouped content. Built on Base UI with keyboard support per the APG accordion pattern."
      usage={{
        importCode: `import { Accordion } from "@zed-ui/react"`,
        usageCode: ACCORDION_USAGE,
        preview: (
          <Accordion.Root defaultValue={["item-1"]}>
            <Accordion.Item value="item-1">
              <Accordion.Header>
                <Accordion.Trigger>What is Zed UI?</Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Panel>
                <Text color="secondary">Zed UI is a typed React design system built on Base UI and CSS variables.</Text>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="item-2">
              <Accordion.Header>
                <Accordion.Trigger>How do I install it?</Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Panel>
                <Text color="secondary">Install with npm install @zed-ui/react@beta</Text>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion.Root>
        )
      }}
    >
      <DocExample title="Variants" code={`<Accordion.Root variant="plain">...</Accordion.Root>`}>
        <Stack gap="6">
          <Accordion.Root defaultValue={["a"]} variant="outline">
            <Accordion.Item value="a">
              <Accordion.Header>
                <Accordion.Trigger>Outline variant</Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Panel>
                <Text color="secondary">Bordered accordion items.</Text>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion.Root>
          <Accordion.Root defaultValue={["a"]} variant="plain">
            <Accordion.Item value="a">
              <Accordion.Header>
                <Accordion.Trigger>Plain variant</Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Panel>
                <Text color="secondary">Minimal dividers between items.</Text>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion.Root>
        </Stack>
      </DocExample>
    </ComponentDoc>
  );
}

export function MenuSection() {
  return (
    <ComponentDoc
      id="menu"
      title="Menu"
      description="Dropdown menu with roving focus and typeahead. Built on Base UI Menu."
      usage={{
        importCode: `import { Button, Menu } from "@zed-ui/react"`,
        usageCode: `<Menu.Root>
  <Menu.Trigger render={<Button variant="outline">Actions</Button>} />
  <Menu.Portal>
    <Menu.Positioner>
      <Menu.Popup>
        <Menu.Item onClick={() => {}}>Edit</Menu.Item>
        <Menu.Item onClick={() => {}}>Duplicate</Menu.Item>
        <Menu.Separator />
        <Menu.Item onClick={() => {}}>Delete</Menu.Item>
      </Menu.Popup>
    </Menu.Positioner>
  </Menu.Portal>
</Menu.Root>`,
        preview: (
          <Menu.Root>
            <Menu.Trigger render={<Button variant="outline">Actions</Button>} />
            <Menu.Portal>
              <Menu.Positioner>
                <Menu.Popup>
                  <Menu.Item>Edit</Menu.Item>
                  <Menu.Item>Duplicate</Menu.Item>
                  <Menu.Separator />
                  <Menu.Item>Delete</Menu.Item>
                </Menu.Popup>
              </Menu.Positioner>
            </Menu.Portal>
          </Menu.Root>
        )
      }}
    >
      <DocExample
        title="Grouped items"
        code={`<Menu.Group>
  <Menu.GroupLabel>Account</Menu.GroupLabel>
  <Menu.Item>Profile</Menu.Item>
</Menu.Group>`}
      >
        <Menu.Root>
          <Menu.Trigger render={<Button size="sm">Open menu</Button>} />
          <Menu.Portal>
            <Menu.Positioner>
              <Menu.Popup>
                <Menu.Group>
                  <Menu.GroupLabel>Account</Menu.GroupLabel>
                  <Menu.Item>Profile</Menu.Item>
                  <Menu.Item>Billing</Menu.Item>
                </Menu.Group>
                <Menu.Separator />
                <Menu.Item>Sign out</Menu.Item>
              </Menu.Popup>
            </Menu.Positioner>
          </Menu.Portal>
        </Menu.Root>
      </DocExample>
    </ComponentDoc>
  );
}
