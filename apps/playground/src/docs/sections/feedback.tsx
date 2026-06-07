import { useState, type CSSProperties } from "react";
import {
  Alert,
  Avatar,
  Badge,
  BadgeAnchor,
  Button,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Progress,
  Spinner,
  Stack,
  Text,
  useToast
} from "@zed-ui/react";
import { ComponentDoc } from "../../components/ComponentDoc";
import { DocExample } from "../../components/DocExample";

function ToastExamples() {
  const { toast } = useToast();

  return (
    <Stack direction="row" gap="2" wrap="wrap">
      <Button
        size="sm"
        onClick={() =>
          toast({ title: "Saved", description: "Changes applied.", status: "success" })
        }
      >
        Success
      </Button>
      <Button
        size="sm"
        variant="soft"
        color="warning"
        onClick={() =>
          toast({ title: "Heads up", description: "Review required.", status: "warning" })
        }
      >
        Warning
      </Button>
      <Button
        size="sm"
        variant="soft"
        color="danger"
        onClick={() =>
          toast({ title: "Error", description: "Something went wrong.", status: "error" })
        }
      >
        Error
      </Button>
      <Button
        size="sm"
        variant="outline"
        onClick={() =>
          toast({ title: "Note", description: "For your information.", status: "info" })
        }
      >
        Info
      </Button>
    </Stack>
  );
}

export function AlertSection() {
  const [open, setOpen] = useState(true);

  return (
    <ComponentDoc
      id="alert"
      title="Alert"
      description="Used to communicate a state that affects a system, feature, or page. Built with status icons, variants, and optional action slots."
      usage={{
        importCode: `import { Alert } from "@zed-ui/react"`,
        usageCode: `<Alert
  status="info"
  title="Information"
  description="Helpful context for the user."
/>`,
        preview: (
          <Alert description="Helpful context for the user." status="info" title="Information" />
        )
      }}
    >
      <DocExample
        title="Description"
        code={`<Alert
  status="error"
  title="Invalid Fields"
  description="Your form has some errors. Please fix them and try again."
/>`}
      >
        <Alert
          description="Your form has some errors. Please fix them and try again."
          status="error"
          title="Invalid Fields"
        />
      </DocExample>

      <DocExample
        title="Status"
        description="Status affects the default color palette and icon."
        code={`<Alert status="error" title="There was an error processing your request" />
<Alert status="success" title="Zed UI is going live soon. Get ready!" />
<Alert status="warning" title="Your account is about to expire, upgrade now" />
<Alert status="info" title="Data uploaded to the server." />
<Alert status="neutral" title="Maintenance scheduled tonight." />`}
      >
        <Stack gap="3">
          <Alert status="error" title="There was an error processing your request" />
          <Alert status="success" title="Zed UI is going live soon. Get ready!" />
          <Alert status="warning" title="Your account is about to expire, upgrade now" />
          <Alert status="info" title="Data uploaded to the server." />
          <Alert status="neutral" title="Maintenance scheduled tonight." />
        </Stack>
      </DocExample>

      <DocExample
        title="Variants"
        description="subtle, surface, outline, and solid visual styles."
        code={`<Alert status="info" variant="subtle" title="Data uploaded to the server." />
<Alert status="info" variant="surface" title="Data uploaded to the server." />
<Alert status="info" variant="outline" title="Data uploaded to the server." />
<Alert status="info" variant="solid" title="Data uploaded to the server." />`}
      >
        <Stack gap="3">
          <Alert status="info" title="Data uploaded to the server." variant="subtle" />
          <Alert status="info" title="Data uploaded to the server." variant="surface" />
          <Alert status="info" title="Data uploaded to the server." variant="outline" />
          <Alert status="info" title="Data uploaded to the server." variant="solid" />
        </Stack>
      </DocExample>

      <DocExample
        title="Sizes"
        code={`<Alert size="sm" status="info" title="Small alert" />
<Alert size="md" status="info" title="Medium alert" />
<Alert size="lg" status="info" title="Large alert" />
<Alert size="xl" status="info" title="Extra large alert" />`}
      >
        <Stack gap="3">
          <Alert size="sm" status="info" title="Small alert" />
          <Alert size="md" status="info" title="Medium alert" />
          <Alert size="lg" status="info" title="Large alert" />
          <Alert size="xl" status="info" title="Extra large alert" />
        </Stack>
      </DocExample>

      <DocExample
        title="Compact"
        description="Dense layout for toolbars, tables, and inline banners. Works with any visual variant."
        code={`<Alert compact status="info" title="New version available" />
<Alert compact status="warning" title="Storage almost full" description="Upgrade to add more space." />
<Alert compact status="error" title="Failed to save" variant="outline" />`}
      >
        <Stack gap="2">
          <Alert compact status="info" title="New version available" />
          <Alert
            compact
            description="Upgrade to add more space."
            status="warning"
            title="Storage almost full"
          />
          <Alert compact status="error" title="Failed to save" variant="outline" />
        </Stack>
      </DocExample>

      <DocExample
        title="With close button"
        code={`<Alert
  status="success"
  title="Success!"
  description="Your application has been received. We will respond within 48 hours."
  endElement={<Button size="sm" variant="ghost">Close</Button>}
/>`}
      >
        <Alert
          description="Your application has been received. We will respond within 48 hours."
          endElement={
            <Button size="sm" variant="ghost">
              Close
            </Button>
          }
          status="success"
          title="Success!"
        />
      </DocExample>

      <DocExample
        title="With spinner"
        code={`<Alert
  status="info"
  title="We are loading something"
  startElement={<Spinner size="sm" />}
/>`}
      >
        <Alert
          startElement={<Spinner size="sm" />}
          status="info"
          title="We are loading something"
        />
      </DocExample>

      <DocExample
        title="Color palette override"
        code={`<Alert
  status="info"
  color="primary"
  title="This is an info alert but shown as primary"
/>`}
      >
        <Alert color="primary" status="info" title="This is an info alert but shown as primary" />
      </DocExample>

      <DocExample
        title="Inline"
        description="Place title and description on one row."
        code={`<Alert
  inline
  status="warning"
  title="Heads up"
  description="Additional details inline with the title."
/>`}
      >
        <Alert
          description="Additional details inline with the title."
          inline
          status="warning"
          title="Heads up"
        />
      </DocExample>

      <DocExample
        title="Dismissible"
        code={`<Alert
  status="info"
  title="Tip"
  description="Dismiss or toggle color mode in the top bar."
  endElement={<Button size="sm" variant="ghost" onClick={dismiss}>Dismiss</Button>}
/>`}
      >
        {open ? (
          <Alert
            description="Dismiss or toggle color mode in the top bar."
            endElement={
              <Button size="sm" variant="ghost" onClick={() => setOpen(false)}>
                Dismiss
              </Button>
            }
            status="info"
            title="Tip"
          />
        ) : (
          <Button size="sm" variant="outline" onClick={() => setOpen(true)}>
            Show alert
          </Button>
        )}
      </DocExample>
    </ComponentDoc>
  );
}

function RemovableBadgeExample() {
  const [tags, setTags] = useState(["Design", "React", "TypeScript"]);

  return (
    <Stack direction="row" gap="2" wrap="wrap">
      {tags.map((tag) => (
        <Badge
          key={tag}
          color="primary"
          onClose={() => setTags((current) => current.filter((item) => item !== tag))}
        >
          {tag}
        </Badge>
      ))}
    </Stack>
  );
}

export function BadgeSection() {
  return (
    <ComponentDoc
      id="badge"
      title="Badge"
      description="Compact labels for status, categories, and counts. Supports variants, semantic colors, counters, status dots, removable tags, avatars, sizes, roundedness, and overlay anchors."
      usage={{
        importCode: `import { Badge, BadgeAnchor } from "@zed-ui/react"`,
        usageCode: `<Badge color="primary" variant="soft">New</Badge>`,
        preview: <Badge color="primary">New</Badge>
      }}
    >
      <DocExample
        title="Variants"
        description="solid, soft, outline, ghost, and dot styles."
        code={`<Badge color="primary" variant="solid">Solid</Badge>
<Badge color="primary" variant="soft">Soft</Badge>
<Badge color="primary" variant="outline">Outline</Badge>
<Badge color="primary" variant="ghost">Ghost</Badge>
<Badge aria-label="Online" color="success" variant="dot" />`}
      >
        <Stack direction="row" gap="2" wrap="wrap" align="center">
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
          <Badge aria-label="Online" color="success" variant="dot" />
        </Stack>
      </DocExample>

      <DocExample
        title="Colors"
        code={`<Badge color="primary">Primary</Badge>
<Badge color="neutral">Neutral</Badge>
<Badge color="success">Success</Badge>
<Badge color="warning">Warning</Badge>
<Badge color="danger">Danger</Badge>
<Badge color="info">Info</Badge>`}
      >
        <Stack direction="row" gap="2" wrap="wrap">
          <Badge color="primary">Primary</Badge>
          <Badge color="neutral">Neutral</Badge>
          <Badge color="success">Success</Badge>
          <Badge color="warning">Warning</Badge>
          <Badge color="danger">Danger</Badge>
          <Badge color="info">Info</Badge>
        </Stack>
      </DocExample>

      <DocExample
        title="Sizes"
        code={`<Badge size="xs">XS</Badge>
<Badge size="sm">SM</Badge>
<Badge size="md">MD</Badge>
<Badge size="lg">LG</Badge>`}
      >
        <Stack direction="row" gap="2" align="center" wrap="wrap">
          <Badge size="xs">XS</Badge>
          <Badge size="sm">SM</Badge>
          <Badge size="md">MD</Badge>
          <Badge size="lg">LG</Badge>
        </Stack>
      </DocExample>

      <DocExample
        title="Roundedness"
        description="Default pill shape, rounded corners, or explicit radius tokens."
        code={`<Badge color="primary">Pill</Badge>
<Badge color="primary" pill={false}>Rounded</Badge>
<Badge color="primary" radius="sm">Small radius</Badge>
<Badge color="primary" radius="none">Square</Badge>`}
      >
        <Stack direction="row" gap="2" wrap="wrap" align="center">
          <Badge color="primary">Pill</Badge>
          <Badge color="primary" pill={false}>
            Rounded
          </Badge>
          <Badge color="primary" radius="sm">
            Small radius
          </Badge>
          <Badge color="primary" radius="none">
            Square
          </Badge>
        </Stack>
      </DocExample>

      <DocExample
        title="With close icon"
        code={`<Badge color="primary" onClose={() => remove("Design")}>Design</Badge>
<Badge color="primary" onClose={() => remove("React")}>React</Badge>
<Badge color="primary" onClose={() => remove("TypeScript")}>TypeScript</Badge>`}
      >
        <RemovableBadgeExample />
      </DocExample>

      <DocExample
        title="With avatar"
        code={`<Badge avatar={{ fallback: "ZK" }} color="neutral" size="sm" variant="soft">Zed Kit</Badge>
<Badge avatar={{ fallback: "AB" }} color="primary" size="sm" variant="outline">Assigned</Badge>`}
      >
        <Stack direction="row" gap="4" align="center" wrap="wrap">
          <Badge avatar={{ fallback: "ZK" }} color="neutral" size="sm" variant="soft">
            Zed Kit
          </Badge>
          <Badge avatar={{ fallback: "AB" }} color="primary" size="sm" variant="outline">
            Assigned
          </Badge>
        </Stack>
      </DocExample>

      <DocExample
        title="Overlay anchor"
        code={`<BadgeAnchor color="danger" content={3} size="sm">
  <Avatar fallback="ZK" size="md" />
</BadgeAnchor>
<BadgeAnchor color="success" dot size="sm">
  <Avatar fallback="AB" size="md" />
</BadgeAnchor>`}
      >
        <Stack direction="row" gap="4" align="center" wrap="wrap">
          <BadgeAnchor color="danger" content={3} size="sm">
            <Avatar fallback="ZK" size="md" />
          </BadgeAnchor>
          <BadgeAnchor color="success" dot size="sm">
            <Avatar fallback="AB" size="md" />
          </BadgeAnchor>
        </Stack>
      </DocExample>

      <DocExample
        title="Counter & status dot"
        code={`<Badge color="danger" variant="solid">3</Badge>
<Badge color="danger" max={99} variant="solid">120</Badge>
<Badge color="success" statusDot variant="soft">Live</Badge>`}
      >
        <Stack direction="row" gap="2" wrap="wrap" align="center">
          <Badge color="danger" variant="solid">
            3
          </Badge>
          <Badge color="danger" max={99} variant="solid">
            120
          </Badge>
          <Badge color="success" statusDot variant="soft">
            Live
          </Badge>
        </Stack>
      </DocExample>
    </ComponentDoc>
  );
}

export function SpinnerSection() {
  return (
    <ComponentDoc
      id="spinner"
      title="Spinner"
      description="Used to indicate a loading state."
      usage={{
        importCode: `import { Spinner } from "@zed-ui/react"`,
        usageCode: `<Spinner size="md" />`,
        preview: <Spinner size="md" />
      }}
    >
      <DocExample
        title="Sizes"
        code={`<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />`}
      >
        <Stack direction="row" gap="4" align="center">
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </Stack>
      </DocExample>
    </ComponentDoc>
  );
}

export function ProgressSection() {
  return (
    <ComponentDoc
      id="progress"
      title="Progress"
      description="Shows task completion progress."
      usage={{
        importCode: `import { Progress } from "@zed-ui/react"`,
        usageCode: `<Progress label="Upload" showValue value={60} />`,
        preview: <Progress label="Upload" showValue value={60} />
      }}
    />
  );
}

export function SkeletonSection() {
  return (
    <ComponentDoc
      id="skeleton"
      title="Skeleton"
      description="Used to render a placeholder while content is loading."
      usage={{
        importCode: `import { Skeleton, SkeletonCircle, SkeletonText } from "@zed-ui/react"`,
        usageCode: `<Stack gap="6" maxWidth="xs">
  <Stack direction="row" gap="3" width="full">
    <SkeletonCircle size="md" />
    <SkeletonText noOfLines={2} />
  </Stack>
  <Skeleton height="200px" />
</Stack>`,
        preview: (
          <Stack gap="6" style={{ maxWidth: "20rem" }}>
            <Stack direction="row" gap="3" width="full">
              <SkeletonCircle size="md" />
              <SkeletonText noOfLines={2} />
            </Stack>
            <Skeleton height="8rem" width="100%" />
          </Stack>
        )
      }}
    >
      <DocExample
        title="Feed"
        description="Combine circle, text, and block skeletons for list or card loading states."
        code={`<Stack gap="6" maxWidth="xs">
  <Stack direction="row" gap="3" width="full">
    <SkeletonCircle size="md" />
    <SkeletonText noOfLines={2} />
  </Stack>
  <Skeleton height="200px" />
</Stack>`}
      >
        <Stack gap="6" style={{ maxWidth: "20rem" }}>
          <Stack direction="row" gap="3" width="full">
            <SkeletonCircle size="md" />
            <SkeletonText noOfLines={2} />
          </Stack>
          <Skeleton height="8rem" width="100%" />
        </Stack>
      </DocExample>

      <DocExample
        title="Text"
        description="SkeletonText renders multiple lines with a shorter last line."
        code={`<SkeletonText noOfLines={4} />`}
      >
        <SkeletonText noOfLines={4} />
      </DocExample>

      <DocExample
        title="With children"
        description="Wrap real content and toggle loading to cross-fade from skeleton to content."
        code={`const [loading, setLoading] = useState(true)

<Skeleton loading={loading}>
  <Text>Zed UI is cool</Text>
</Skeleton>
<Button size="sm" onClick={() => setLoading((value) => !value)}>
  Toggle
</Button>`}
      >
        <SkeletonContentExample />
      </DocExample>

      <DocExample
        title="Variants"
        code={`<Skeleton height="1rem" variant="pulse" width="12rem" />
<Skeleton height="1rem" variant="shine" width="12rem" />`}
      >
        <Stack gap="3" style={{ maxWidth: "20rem" }}>
          <Skeleton height="1rem" variant="pulse" width="12rem" />
          <Skeleton height="1rem" variant="shine" width="12rem" />
        </Stack>
      </DocExample>

      <DocExample
        title="Start and end color"
        description="Customize shine colors with CSS variables on the skeleton element."
        code={`<Skeleton
  height="1rem"
  style={{
    "--zui-skeleton-start-color": "#e2e8f0",
    "--zui-skeleton-end-color": "#cbd5e1"
  }}
  variant="shine"
  width="12rem"
/>`}
      >
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
      </DocExample>
    </ComponentDoc>
  );
}

function SkeletonContentExample() {
  const [loading, setLoading] = useState(true);

  return (
    <Stack gap="3" align="start">
      <Skeleton loading={loading} width="fit-content">
        <Text>Zed UI is cool</Text>
      </Skeleton>
      <Button size="sm" onClick={() => setLoading((value) => !value)}>
        Toggle
      </Button>
    </Stack>
  );
}

export function ToastSection() {
  return (
    <ComponentDoc
      id="toast"
      title="Toast"
      description="Used to display brief feedback after an action. Wrap your app with ToastProvider and call useToast()."
      usage={{
        importCode: `import { ToastProvider, useToast } from "@zed-ui/react"`,
        usageCode: `const { toast } = useToast()
toast({ title: "Saved", description: "Changes applied.", status: "success" })`,
        preview: <ToastExamples />
      }}
    >
      <DocExample
        title="Statuses"
        description="Toasts share Alert statuses, icons, and surface styling."
        code={`toast({ title: "Saved", description: "Changes applied.", status: "success" })
toast({ title: "Heads up", description: "Review required.", status: "warning" })
toast({ title: "Error", description: "Something went wrong.", status: "error" })
toast({ title: "Note", description: "For your information.", status: "info" })`}
      >
        <ToastExamples />
      </DocExample>

      <DocExample
        title="Visual variants"
        code={`toast({ title: "Subtle", status: "info", variant: "subtle" })
toast({ title: "Surface", status: "info", variant: "surface" })
toast({ title: "Outline", status: "info", variant: "outline" })
toast({ title: "Solid", status: "info", variant: "solid" })`}
      >
        <ToastVariantExamples />
      </DocExample>
    </ComponentDoc>
  );
}

function ToastVariantExamples() {
  const { toast } = useToast();

  return (
    <Stack direction="row" gap="2" wrap="wrap">
      <Button
        size="sm"
        variant="outline"
        onClick={() => toast({ title: "Subtle", status: "info", variant: "subtle" })}
      >
        Subtle
      </Button>
      <Button
        size="sm"
        variant="outline"
        onClick={() => toast({ title: "Surface", status: "info", variant: "surface" })}
      >
        Surface
      </Button>
      <Button
        size="sm"
        variant="outline"
        onClick={() => toast({ title: "Outline", status: "info", variant: "outline" })}
      >
        Outline
      </Button>
      <Button
        size="sm"
        variant="outline"
        onClick={() => toast({ title: "Solid", status: "info", variant: "solid" })}
      >
        Solid
      </Button>
    </Stack>
  );
}
