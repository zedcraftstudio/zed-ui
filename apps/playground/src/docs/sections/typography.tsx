import { Button, Flex, Heading, Link, Stack, Text } from "@zed-ui/react";
import { ComponentDoc } from "../../components/ComponentDoc";
import { DocExample } from "../../components/DocExample";

const HEADING_SIZES = ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] as const;

const HEADING_SIZES_CODE = HEADING_SIZES.map(
  (size) => `<Heading size="${size}">Heading (${size})</Heading>`
).join("\n");

const HEADING_WEIGHTS_CODE = `<Heading weight="regular">Normal</Heading>
<Heading weight="medium">Medium</Heading>
<Heading weight="semibold">Semibold</Heading>
<Heading weight="bold">Bold</Heading>`;

export function HeadingSection() {
  return (
    <ComponentDoc
      id="heading"
      title="Heading"
      description="Used to render semantic HTML heading elements with token-based sizes and weights."
      usage={{
        importCode: `import { Heading } from "@zed-ui/react"`,
        usageCode: `<Heading>The quick brown fox jumps over the lazy dog</Heading>`,
        preview: (
          <Heading size="2xl">The quick brown fox jumps over the lazy dog</Heading>
        )
      }}
    >
      <DocExample title="Sizes" code={HEADING_SIZES_CODE}>
        <Stack gap="3">
          {HEADING_SIZES.map((size) => (
            <Heading key={size} size={size}>
              Heading ({size})
            </Heading>
          ))}
        </Stack>
      </DocExample>

      <DocExample
        title="Highlight"
        description="Compose Heading with inline emphasis using mark or Text spans."
        code={`<Heading size="2xl">
  Create accessible React apps with <mark>speed</mark>
</Heading>
<Text color="secondary" size="sm">
  Zed UI is a simple, modular and accessible component library that gives you the
  building blocks you need.
</Text>`}
      >
        <Stack gap="2">
          <Heading size="2xl">
            Create accessible React apps with <mark>speed</mark>
          </Heading>
          <Text color="secondary" size="sm">
            Zed UI is a simple, modular and accessible component library that gives you the
            building blocks you need.
          </Text>
        </Stack>
      </DocExample>

      <DocExample
        title="As another element"
        description="Use level or as to control the rendered heading element."
        code={`<Heading as="h1" level={1} size="3xl">
  Level 1
</Heading>
<Heading level={2} size="2xl">
  Level 2
</Heading>
<Heading level={3} size="xl">
  Level 3
</Heading>`}
      >
        <Stack gap="2">
          <Heading as="h1" level={1} size="3xl">
            Level 1
          </Heading>
          <Heading level={2} size="2xl">
            Level 2
          </Heading>
          <Heading level={3} size="xl">
            Level 3
          </Heading>
        </Stack>
      </DocExample>

      <DocExample title="Weights" code={HEADING_WEIGHTS_CODE}>
        <Stack gap="2">
          <Heading weight="regular">Normal</Heading>
          <Heading weight="medium">Medium</Heading>
          <Heading weight="semibold">Semibold</Heading>
          <Heading weight="bold">Bold</Heading>
        </Stack>
      </DocExample>

      <DocExample
        title="Composition"
        code={`<Stack gap="3">
  <Heading size="2xl">Modern payments for Stores</Heading>
  <Text color="secondary">
    PayMe helps startups get paid by anyone, anywhere in the world
  </Text>
  <Flex>
    <Button size="sm">Create account</Button>
  </Flex>
</Stack>`}
      >
        <Stack gap="3" style={{ maxWidth: "28rem" }}>
          <Heading size="2xl">Modern payments for Stores</Heading>
          <Text color="secondary">
            PayMe helps startups get paid by anyone, anywhere in the world
          </Text>
          <Flex>
            <Button size="sm">Create account</Button>
          </Flex>
        </Stack>
      </DocExample>
    </ComponentDoc>
  );
}

const TEXT_SIZES = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] as const;

const TEXT_SIZES_CODE = TEXT_SIZES.map((size) => `<Text size="${size}">ZUI</Text>`).join("\n");

const TEXT_WEIGHTS_CODE = `<Text weight="regular">Sphinx of black quartz, judge my vow.</Text>
<Text weight="medium">Sphinx of black quartz, judge my vow.</Text>
<Text weight="semibold">Sphinx of black quartz, judge my vow.</Text>
<Text weight="bold">Sphinx of black quartz, judge my vow.</Text>`;

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export function TextSection() {
  return (
    <ComponentDoc
      id="text"
      title="Text"
      description="Used to render text and paragraphs within an interface."
      usage={{
        importCode: `import { Text } from "@zed-ui/react"`,
        usageCode: `<Text>Sphinx of black quartz, judge my vow.</Text>`,
        preview: <Text>Sphinx of black quartz, judge my vow.</Text>
      }}
    >
      <DocExample title="Sizes" code={TEXT_SIZES_CODE}>
        <Stack gap="1">
          {TEXT_SIZES.map((size) => (
            <Text key={size} size={size}>
              ZUI
            </Text>
          ))}
        </Stack>
      </DocExample>

      <DocExample title="Weights" code={TEXT_WEIGHTS_CODE}>
        <Stack gap="2">
          <Text weight="regular">Sphinx of black quartz, judge my vow.</Text>
          <Text weight="medium">Sphinx of black quartz, judge my vow.</Text>
          <Text weight="semibold">Sphinx of black quartz, judge my vow.</Text>
          <Text weight="bold">Sphinx of black quartz, judge my vow.</Text>
        </Stack>
      </DocExample>

      <DocExample
        title="Truncation"
        code={`<Text truncate style={{ maxWidth: "16rem" }}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</Text>`}
      >
        <Text truncate style={{ maxWidth: "16rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </DocExample>

      <DocExample
        title="Line clamp"
        code={`<Text lineClamp={2} style={{ maxWidth: "20rem" }}>
  ${LOREM}
</Text>`}
      >
        <Text lineClamp={2} style={{ maxWidth: "20rem" }}>
          {LOREM}
        </Text>
      </DocExample>

      <DocExample
        title="Colors"
        code={`<Text color="primary">Primary text</Text>
<Text color="secondary">Secondary text</Text>
<Text color="muted">Muted text</Text>`}
      >
        <Stack gap="1">
          <Text color="primary">Primary text</Text>
          <Text color="secondary">Secondary text</Text>
          <Text color="muted">Muted text</Text>
        </Stack>
      </DocExample>
    </ComponentDoc>
  );
}

export function LinkSection() {
  return (
    <ComponentDoc
      id="link"
      title="Link"
      description="Styled anchor for inline navigation."
      usage={{
        importCode: `import { Link } from "@zed-ui/react"`,
        usageCode: `<Link href="/docs">Documentation</Link>`,
        preview: <Link href="#link">Documentation</Link>
      }}
    >
      <DocExample title="External" code={`<Link external href="https://github.com/zedcraftstudio/zed-ui">GitHub</Link>`}>
        <Link external href="https://github.com/zedcraftstudio/zed-ui">
          GitHub
        </Link>
      </DocExample>
    </ComponentDoc>
  );
}
