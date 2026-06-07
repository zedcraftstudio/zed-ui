import { Button, IconButton, Stack, PlusIcon } from "@zed-ui/react";
import { ComponentDoc } from "../../components/ComponentDoc";
import { DocExample } from "../../components/DocExample";

function ChevronRightIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M6 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ButtonSection() {
  return (
    <ComponentDoc
      id="button"
      title="Button"
      description="Used to trigger an action or event."
      usage={{
        description: "Buttons support variants, colors, sizes, icons, and a loading state.",
        importCode: `import { Button } from "@zed-ui/react"`,
        usageCode: `<Button onClick={() => console.log("clicked")}>
  Click me
</Button>`,
        preview: <Button onClick={() => {}}>Click me</Button>
      }}
    >
      <DocExample
        title="Variants"
        description="solid, soft, outline, ghost, and link styles."
        code={`<Button variant="solid">Solid</Button>
<Button variant="outline">Outline</Button>`}
      >
        <Stack direction="row" gap="2" wrap="wrap">
          <Button variant="solid">Solid</Button>
          <Button variant="soft">Soft</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </Stack>
      </DocExample>

      <DocExample
        title="Colors"
        code={`<Button color="primary">Primary</Button>
<Button color="danger">Danger</Button>`}
      >
        <Stack direction="row" gap="2" wrap="wrap">
          <Button color="primary">Primary</Button>
          <Button color="neutral" variant="soft">
            Gray
          </Button>
          <Button color="success">Green</Button>
          <Button color="warning">Orange</Button>
          <Button color="danger">Red</Button>
        </Stack>
      </DocExample>

      <DocExample
        title="Sizes"
        description="xs, sm, md, lg, and xl scale height, font size, and padding."
        code={`<Button size="xs">XS</Button>
<Button size="sm">SM</Button>
<Button size="md">MD</Button>
<Button size="lg">LG</Button>
<Button size="xl">XL</Button>`}
      >
        <Stack direction="row" gap="3" align="center" wrap="wrap">
          <Button size="xs">XS</Button>
          <Button size="sm">SM</Button>
          <Button size="md">MD</Button>
          <Button size="lg">LG</Button>
          <Button size="xl">XL</Button>
        </Stack>
      </DocExample>

      <DocExample
        title="With icons"
        description="Use startIcon and endIcon together. Order is start → label → end."
        code={`import { Button, PlusIcon } from "@zed-ui/react"

<Button startIcon={<PlusIcon size={16} />}>Add item</Button>
<Button endIcon={<ChevronRightIcon size={16} />}>Continue</Button>
<Button
  startIcon={<PlusIcon size={16} />}
  endIcon={<ChevronRightIcon size={16} />}
>
  Add and continue
</Button>`}
      >
        <Stack direction="row" gap="3" wrap="wrap" align="center">
          <Button startIcon={<PlusIcon size={16} />}>Add item</Button>
          <Button variant="outline" endIcon={<ChevronRightIcon size={16} />}>
            Continue
          </Button>
          <Button
            variant="soft"
            startIcon={<PlusIcon size={16} />}
            endIcon={<ChevronRightIcon size={16} />}
          >
            Add and continue
          </Button>
        </Stack>
      </DocExample>

      <DocExample
        title="Loading"
        description="Disables the button and shows a spinner in place of startIcon."
        code={`<Button loading>Saving…</Button>`}
      >
        <Button loading>Saving…</Button>
      </DocExample>
    </ComponentDoc>
  );
}

export function IconButtonSection() {
  return (
    <ComponentDoc
      id="icon-button"
      title="IconButton"
      description="Used for icon-only actions in toolbars and compact UI."
      usage={{
        description:
          "Always provide aria-label. IconButton supports variants, colors, sizes, shape, and a loading state.",
        importCode: `import { IconButton, PlusIcon } from "@zed-ui/react"`,
        usageCode: `<IconButton
  aria-label="Add item"
  icon={<PlusIcon size={16} />}
  onClick={() => {}}
/>`,
        preview: (
          <IconButton
            aria-label="Add item"
            variant="soft"
            icon={<PlusIcon size={16} />}
            onClick={() => {}}
          />
        )
      }}
    >
      <DocExample
        title="Variants"
        description="solid, soft, outline, and ghost styles."
        code={`<IconButton aria-label="Add" variant="solid" icon={<PlusIcon size={16} />} />
<IconButton aria-label="Add" variant="outline" icon={<PlusIcon size={16} />} />`}
      >
        <Stack direction="row" gap="2" wrap="wrap">
          <IconButton aria-label="Add" variant="solid" icon={<PlusIcon size={16} />} />
          <IconButton aria-label="Add" variant="soft" icon={<PlusIcon size={16} />} />
          <IconButton aria-label="Add" variant="outline" icon={<PlusIcon size={16} />} />
          <IconButton aria-label="Add" variant="ghost" icon={<PlusIcon size={16} />} />
        </Stack>
      </DocExample>

      <DocExample
        title="Colors"
        code={`<IconButton aria-label="Add" color="primary" icon={<PlusIcon size={16} />} />
<IconButton aria-label="Add" color="danger" icon={<PlusIcon size={16} />} />`}
      >
        <Stack direction="row" gap="2" wrap="wrap">
          <IconButton aria-label="Add" color="primary" icon={<PlusIcon size={16} />} />
          <IconButton
            aria-label="Add"
            color="neutral"
            variant="soft"
            icon={<PlusIcon size={16} />}
          />
          <IconButton aria-label="Add" color="success" icon={<PlusIcon size={16} />} />
          <IconButton aria-label="Add" color="warning" icon={<PlusIcon size={16} />} />
          <IconButton aria-label="Add" color="danger" icon={<PlusIcon size={16} />} />
        </Stack>
      </DocExample>

      <DocExample
        title="Sizes"
        description="xs, sm, md, lg, and xl scale the square button."
        code={`<IconButton aria-label="Add" size="xs" icon={<PlusIcon size={14} />} />
<IconButton aria-label="Add" size="sm" icon={<PlusIcon size={14} />} />
<IconButton aria-label="Add" size="md" icon={<PlusIcon size={16} />} />
<IconButton aria-label="Add" size="lg" icon={<PlusIcon size={18} />} />
<IconButton aria-label="Add" size="xl" icon={<PlusIcon size={20} />} />`}
      >
        <Stack direction="row" gap="3" align="center" wrap="wrap">
          <IconButton aria-label="Add" size="xs" icon={<PlusIcon size={14} />} />
          <IconButton aria-label="Add" size="sm" icon={<PlusIcon size={14} />} />
          <IconButton aria-label="Add" size="md" icon={<PlusIcon size={16} />} />
          <IconButton aria-label="Add" size="lg" icon={<PlusIcon size={18} />} />
          <IconButton aria-label="Add" size="xl" icon={<PlusIcon size={20} />} />
        </Stack>
      </DocExample>

      <DocExample
        title="Shape"
        description="Use radius for corner roundness. Default is md; full makes a circular icon button."
        code={`<IconButton aria-label="Add" radius="sm" icon={<PlusIcon size={16} />} />
<IconButton aria-label="Add" radius="md" icon={<PlusIcon size={16} />} />
<IconButton aria-label="Add" radius="lg" icon={<PlusIcon size={16} />} />
<IconButton aria-label="Add" radius="full" icon={<PlusIcon size={16} />} />`}
      >
        <Stack direction="row" gap="3" align="center" wrap="wrap">
          <IconButton aria-label="Add" variant="soft" radius="sm" icon={<PlusIcon size={16} />} />
          <IconButton aria-label="Add" variant="soft" radius="md" icon={<PlusIcon size={16} />} />
          <IconButton aria-label="Add" variant="soft" radius="lg" icon={<PlusIcon size={16} />} />
          <IconButton aria-label="Add" variant="soft" radius="full" icon={<PlusIcon size={16} />} />
        </Stack>
      </DocExample>

      <DocExample
        title="Loading"
        description="Disables the button and replaces the icon with a spinner."
        code={`<IconButton aria-label="Saving" loading icon={<PlusIcon size={16} />} />`}
      >
        <IconButton aria-label="Saving" loading icon={<PlusIcon size={16} />} />
      </DocExample>
    </ComponentDoc>
  );
}
