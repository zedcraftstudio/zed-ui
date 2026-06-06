import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Spacer,
  Stack,
  Text,
  VStack
} from "@zed-ui/react";
import { ComponentDoc } from "../../components/ComponentDoc";
import { DocExample } from "../../components/DocExample";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, tortor in lacinia eleifend, dui nisl tristique nunc.";

export function BoxSection() {
  return (
    <ComponentDoc
      id="box"
      title="Box"
      description="The most abstract styling component on top of which other layout and UI components are built. Use token-based system props for spacing, color, radius, and shadows."
      usage={{
        importCode: `import { Box } from "@zed-ui/react"`,
        usageCode: `<Box p="4" radius="md" bg="muted">
  This is the Box
</Box>`,
        preview: (
          <Box p="4" radius="md" bg="muted">
            <Text>This is the Box</Text>
          </Box>
        )
      }}
    >
      <DocExample
        title="Shorthand"
        description="Use shorthand props like bg instead of backgroundColor, p instead of padding, and gap for spacing."
        code={`<Box p="4" bg="surface" radius="md" shadow="sm">
  <Text>This is the Box</Text>
</Box>`}
      >
        <Box p="4" bg="surface" radius="md" shadow="sm">
          <Text>This is the Box</Text>
        </Box>
      </DocExample>

      <DocExample
        title="Hover styles"
        description="Use className for pseudo-state styling when you need hover or focus treatments."
        code={`<Box className="zui-box--hover-surface" p="4" radius="md" bg="surface" shadow="sm">
  <Text>Hover this box</Text>
</Box>`}
      >
        <Box className="zui-box--hover-surface" p="4" radius="md" bg="surface" shadow="sm">
          <Text>Hover this box</Text>
        </Box>
      </DocExample>

      <DocExample
        title="Border"
        description="Combine borderWidth and borderColor to apply a solid border."
        code={`<Box borderColor="default" borderWidth="1" color="secondary" p="4" radius="md">
  Somewhat disabled box
</Box>`}
      >
        <Box borderColor="default" borderWidth="1" color="secondary" p="4" radius="md">
          Somewhat disabled box
        </Box>
      </DocExample>

      <DocExample
        title="As prop"
        description="Render a different semantic element with the as prop."
        code={`<Box as="section" p="4" radius="md" bg="muted">
  <Text>This is a Box rendered as a section</Text>
</Box>`}
      >
        <Box as="section" p="4" radius="md" bg="muted">
          <Text>This is a Box rendered as a section</Text>
        </Box>
      </DocExample>

      <DocExample
        title="Shadow"
        code={`<Box p="6" radius="lg" bg="surface" shadow="md">
  <Text>Box with shadow</Text>
</Box>`}
      >
        <Box p="6" radius="lg" bg="surface" shadow="md">
          <Text>Box with shadow</Text>
        </Box>
      </DocExample>

      <DocExample
        title="Composition"
        description="Compose richer layouts with Box, Flex, Stack, and Text."
        code={`<Box maxWidth="22rem" overflow="hidden" radius="lg" shadow="md">
  <Box
    as="img"
    alt="Property"
    height="12rem"
    src="https://placehold.co/640x480/e2e8f0/475569?text=Modern+Home"
    width="100%"
  />
  <Stack gap="3" p="4">
    <Flex align="center" gap="2">
      <Badge color="success" size="sm" variant="soft">
        Superhost
      </Badge>
      <Text color="secondary" size="sm">
        4.5 (34)
      </Text>
    </Flex>
    <Heading level={4}>Modern home in city center</Heading>
    <Text color="secondary" size="sm">
      Historic Los Angeles property with pool and skyline views.
    </Text>
    <Flex align="center" justify="space-between">
      <Text weight="semibold">$435 • 3 beds</Text>
      <Button size="sm" variant="outline">
        View
      </Button>
    </Flex>
  </Stack>
</Box>`}
      >
        <Box radius="lg" shadow="md" style={{ maxWidth: "22rem", overflow: "hidden" }}>
          <Box
            as="img"
            alt="Rear view of modern home with pool"
            height="12rem"
            src="https://placehold.co/640x480/e2e8f0/475569?text=Modern+Home"
            style={{ display: "block", objectFit: "cover" }}
            width="100%"
          />
          <Stack gap="3" p="4">
            <Flex align="center" gap="2">
              <Badge color="success" size="sm" variant="soft">
                Superhost
              </Badge>
              <Text color="secondary" size="sm">
                4.5 (34)
              </Text>
            </Flex>
            <Heading level={4}>Modern home in city center</Heading>
            <Text color="secondary" size="sm">
              Historic Los Angeles property with pool and skyline views.
            </Text>
            <Flex align="center" justify="space-between" width="100%">
              <Text weight="semibold">$435 • 3 beds</Text>
              <Button size="sm" variant="outline">
                View
              </Button>
            </Flex>
          </Stack>
        </Box>
      </DocExample>
    </ComponentDoc>
  );
}

export function ContainerSection() {
  return (
    <ComponentDoc
      id="container"
      title="Container"
      description="Used to constrain content width to the current breakpoint while keeping it fluid."
      usage={{
        importCode: `import { Container, Text } from "@zed-ui/react"`,
        usageCode: `<Container>
  <Text>{content}</Text>
</Container>`,
        preview: (
          <Container size="md">
            <Box p="4" bg="muted" radius="md">
              <Text size="sm">{LOREM}</Text>
            </Box>
          </Container>
        )
      }}
    >
      <DocExample
        title="Sizes"
        description="Use the size prop to change the max width of the container."
        code={`<Container size="sm">
  <Text size="sm">{content}</Text>
</Container>

<Container size="md">
  <Text size="sm">{content}</Text>
</Container>

<Container size="lg">
  <Text size="sm">{content}</Text>
</Container>

<Container size="xl">
  <Text size="sm">{content}</Text>
</Container>

<Container size="2xl">
  <Text size="sm">{content}</Text>
</Container>`}
      >
        <Stack gap="4">
          {(["sm", "md", "lg", "xl", "2xl"] as const).map((size) => (
            <Container key={size} size={size}>
              <Box p="4" bg="muted" radius="md">
                <Text size="sm">
                  <Text as="span" weight="semibold">
                    {size}
                  </Text>{" "}
                  — {LOREM}
                </Text>
              </Box>
            </Container>
          ))}
        </Stack>
      </DocExample>

      <DocExample
        title="Fluid"
        description="Use fluid to stretch the container to the full width of its parent."
        code={`<Container fluid>
  <Box p="4" bg="muted" radius="md">
    <Text size="sm">{content}</Text>
  </Box>
</Container>`}
      >
        <Container fluid>
          <Box p="4" bg="muted" radius="md">
            <Text size="sm">{LOREM}</Text>
          </Box>
        </Container>
      </DocExample>
    </ComponentDoc>
  );
}

export function FlexSection() {
  return (
    <ComponentDoc
      id="flex"
      title="Flex"
      description="Used to manage flex layouts with alignment, direction, wrapping, and spacing props."
      usage={{
        importCode: `import { Flex, Spacer } from "@zed-ui/react"`,
        usageCode: `<Flex gap="3" align="center">
  <Box p="3" bg="muted" radius="sm">One</Box>
  <Box p="3" bg="muted" radius="sm">Two</Box>
</Flex>`,
        preview: (
          <Flex gap="3">
            <Box p="3" bg="muted" radius="sm">
              <Text size="sm">One</Text>
            </Box>
            <Box p="3" bg="muted" radius="sm">
              <Text size="sm">Two</Text>
            </Box>
          </Flex>
        )
      }}
    >
      <DocExample
        title="Direction"
        code={`<Flex direction="row" gap="2">
  <Box p="3" bg="muted" radius="sm">1</Box>
  <Box p="3" bg="muted" radius="sm">2</Box>
</Flex>

<Flex direction="column" gap="2">
  <Box p="3" bg="muted" radius="sm">1</Box>
  <Box p="3" bg="muted" radius="sm">2</Box>
</Flex>`}
      >
        <Stack gap="4">
          <Flex direction="row" gap="2">
            {[1, 2, 3].map((item) => (
              <Box key={item} p="3" bg="muted" radius="sm">
                <Text size="sm">{item}</Text>
              </Box>
            ))}
          </Flex>
          <Flex direction="column" gap="2" style={{ maxWidth: "12rem" }}>
            {[1, 2, 3].map((item) => (
              <Box key={item} p="3" bg="muted" radius="sm">
                <Text size="sm">{item}</Text>
              </Box>
            ))}
          </Flex>
        </Stack>
      </DocExample>

      <DocExample
        title="Align"
        code={`<Flex align="center" gap="2" height="6rem">
  <Box p="3" bg="muted" radius="sm">center</Box>
</Flex>`}
      >
        <Flex align="center" gap="2" height="6rem" p="3" bg="surface" radius="md">
          <Box p="3" bg="muted" radius="sm">
            <Text size="sm">center</Text>
          </Box>
        </Flex>
      </DocExample>

      <DocExample
        title="Justify"
        code={`<Flex justify="flex-start" gap="2">{items}</Flex>
<Flex justify="center" gap="2">{items}</Flex>
<Flex justify="flex-end" gap="2">{items}</Flex>
<Flex justify="space-between" gap="2">{items}</Flex>`}
      >
        <Stack gap="3">
          {(["flex-start", "center", "flex-end", "space-between"] as const).map((justify) => (
            <Flex key={justify} justify={justify} gap="2" p="3" bg="surface" radius="md">
              <Box p="2" bg="muted" radius="sm">
                <Text size="sm">{justify}</Text>
              </Box>
              <Box p="2" bg="muted" radius="sm">
                <Text size="sm">B</Text>
              </Box>
            </Flex>
          ))}
        </Stack>
      </DocExample>

      <DocExample
        title="Wrap"
        code={`<Flex gap="2" wrap="wrap">
  <Box p="3" bg="muted" radius="sm">1</Box>
  <Box p="3" bg="muted" radius="sm">2</Box>
  <Box p="3" bg="muted" radius="sm">3</Box>
  <Box p="3" bg="muted" radius="sm">4</Box>
</Flex>`}
      >
        <Flex gap="2" wrap="wrap" style={{ maxWidth: "16rem" }}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Box key={item} p="3" bg="muted" radius="sm">
              <Text size="sm">{item}</Text>
            </Box>
          ))}
        </Flex>
      </DocExample>

      <DocExample
        title="Spacer"
        description="Spacer expands to fill available space between flex items."
        code={`<Flex align="center" gap="3" width="100%">
  <Box p="3" bg="muted" radius="sm">Box 1</Box>
  <Spacer />
  <Box p="3" bg="muted" radius="sm">Box 2</Box>
</Flex>`}
      >
        <Flex align="center" gap="3" width="100%">
          <Box p="3" bg="muted" radius="sm">
            <Text size="sm">Box 1</Text>
          </Box>
          <Spacer />
          <Box p="3" bg="muted" radius="sm">
            <Text size="sm">Box 2</Text>
          </Box>
        </Flex>
      </DocExample>
    </ComponentDoc>
  );
}

export function GridSection() {
  return (
    <ComponentDoc
      id="grid"
      title="Grid"
      description="Used to manage grid layouts with template columns, rows, and spanning items."
      usage={{
        importCode: `import { Grid, GridItem } from "@zed-ui/react"`,
        usageCode: `<Grid columns="repeat(2, minmax(0, 1fr))" gap="3">
  <Box p="4" bg="muted" radius="md">A</Box>
  <Box p="4" bg="muted" radius="md">B</Box>
</Grid>`,
        preview: (
          <Grid columns="repeat(2, minmax(0, 1fr))" gap="3">
            <Box p="4" radius="md" bg="muted">
              <Text size="sm">A</Text>
            </Box>
            <Box p="4" radius="md" bg="muted">
              <Text size="sm">B</Text>
            </Box>
          </Grid>
        )
      }}
    >
      <DocExample
        title="Col span"
        description="Pass colSpan to GridItem to span across columns."
        code={`<Grid columns="repeat(4, minmax(0, 1fr))" gap="2">
  <GridItem colSpan={2} p="3" bg="muted" radius="sm">
    colSpan=2
  </GridItem>
  <GridItem p="3" bg="muted" radius="sm">
    2
  </GridItem>
  <GridItem p="3" bg="muted" radius="sm">
    3
  </GridItem>
  <GridItem colSpan={4} p="3" bg="muted" radius="sm">
    colSpan=4
  </GridItem>
</Grid>`}
      >
        <Grid columns="repeat(4, minmax(0, 1fr))" gap="2">
          <GridItem colSpan={2} p="3" bg="muted" radius="sm">
            <Text size="sm">colSpan=2</Text>
          </GridItem>
          <GridItem p="3" bg="muted" radius="sm">
            <Text size="sm">2</Text>
          </GridItem>
          <GridItem p="3" bg="muted" radius="sm">
            <Text size="sm">3</Text>
          </GridItem>
          <GridItem colSpan={4} p="3" bg="muted" radius="sm">
            <Text size="sm">colSpan=4</Text>
          </GridItem>
        </Grid>
      </DocExample>

      <DocExample
        title="Spanning columns and rows"
        code={`<Grid columns="repeat(4, minmax(0, 1fr))" gap="2" rows="repeat(2, minmax(4rem, auto))">
  <GridItem colSpan={2} p="3" bg="muted" radius="sm">
    colSpan=2
  </GridItem>
  <GridItem p="3" bg="muted" radius="sm">
    2
  </GridItem>
  <GridItem p="3" bg="muted" radius="sm">
    3
  </GridItem>
  <GridItem colSpan={2} p="3" bg="muted" radius="sm">
    colSpan=2
  </GridItem>
  <GridItem colSpan={2} rowSpan={2} p="3" bg="surface" radius="sm">
    rowSpan=2
  </GridItem>
</Grid>`}
      >
        <Grid columns="repeat(4, minmax(0, 1fr))" gap="2" rows="repeat(2, minmax(4rem, auto))">
          <GridItem colSpan={2} p="3" bg="muted" radius="sm">
            <Text size="sm">colSpan=2</Text>
          </GridItem>
          <GridItem p="3" bg="muted" radius="sm">
            <Text size="sm">2</Text>
          </GridItem>
          <GridItem p="3" bg="muted" radius="sm">
            <Text size="sm">3</Text>
          </GridItem>
          <GridItem colSpan={2} p="3" bg="muted" radius="sm">
            <Text size="sm">colSpan=2</Text>
          </GridItem>
          <GridItem colSpan={2} rowSpan={2} p="3" bg="surface" radius="sm" shadow="sm">
            <Text size="sm">rowSpan=2</Text>
          </GridItem>
        </Grid>
      </DocExample>

      <DocExample
        title="Three columns"
        code={`<Grid columns="repeat(3, minmax(0, 1fr))" gap="2">
  <Box p="3" bg="muted" radius="sm">A</Box>
  <Box p="3" bg="muted" radius="sm">B</Box>
  <Box p="3" bg="muted" radius="sm">C</Box>
</Grid>`}
      >
        <Grid columns="repeat(3, minmax(0, 1fr))" gap="2">
          {["A", "B", "C"].map((label) => (
            <Box key={label} p="3" bg="muted" radius="sm">
              <Text size="sm">{label}</Text>
            </Box>
          ))}
        </Grid>
      </DocExample>
    </ComponentDoc>
  );
}

const STACK_SEPARATOR = `<Box aria-hidden className="zui-stack__separator" data-orientation="vertical" />`;

export function StackSection() {
  return (
    <ComponentDoc
      id="stack"
      title="Stack"
      description="Used to layout its children in a vertical or horizontal stack."
      usage={{
        importCode: `import { HStack, Stack, VStack } from "@zed-ui/react"`,
        usageCode: `<Stack gap="2">
  <Text>First</Text>
  <Text>Second</Text>
</Stack>`,
        preview: (
          <Stack gap="2">
            <Text>First</Text>
            <Text>Second</Text>
            <Text>Third</Text>
          </Stack>
        )
      }}
    >
      <DocExample
        title="Horizontal"
        code={`<Stack direction="row" gap="3" align="center">
  <Text>One</Text>
  <Text>Two</Text>
  <Text>Three</Text>
</Stack>`}
      >
        <Stack direction="row" gap="3" align="center">
          <Text>One</Text>
          <Text>Two</Text>
          <Text>Three</Text>
        </Stack>
      </DocExample>

      <DocExample
        title="HStack"
        code={`<HStack gap="3">
  <Box p="3" bg="muted" radius="sm">One</Box>
  <Box p="3" bg="muted" radius="sm">Two</Box>
</HStack>`}
      >
        <HStack gap="3">
          <Box p="3" bg="muted" radius="sm">
            <Text size="sm">One</Text>
          </Box>
          <Box p="3" bg="muted" radius="sm">
            <Text size="sm">Two</Text>
          </Box>
        </HStack>
      </DocExample>

      <DocExample
        title="VStack"
        code={`<VStack gap="2" align="stretch">
  <Box p="3" bg="muted" radius="sm">One</Box>
  <Box p="3" bg="muted" radius="sm">Two</Box>
</VStack>`}
      >
        <VStack align="stretch" gap="2" style={{ maxWidth: "12rem" }}>
          <Box p="3" bg="muted" radius="sm">
            <Text size="sm">One</Text>
          </Box>
          <Box p="3" bg="muted" radius="sm">
            <Text size="sm">Two</Text>
          </Box>
        </VStack>
      </DocExample>

      <DocExample
        title="Separator"
        code={`<Stack
  direction="row"
  gap="4"
  separator={${STACK_SEPARATOR}}
>
  <Text>One</Text>
  <Text>Two</Text>
  <Text>Three</Text>
</Stack>`}
      >
        <Stack
          direction="row"
          gap="4"
          separator={
            <Box aria-hidden className="zui-stack__separator" data-orientation="vertical" />
          }
        >
          <Text>One</Text>
          <Text>Two</Text>
          <Text>Three</Text>
        </Stack>
      </DocExample>

      <DocExample
        title="Larger gap"
        code={`<Stack gap="6">
  <Text>Spacious</Text>
  <Text>layout</Text>
</Stack>`}
      >
        <Stack gap="6">
          <Text>Spacious</Text>
          <Text>layout</Text>
        </Stack>
      </DocExample>
    </ComponentDoc>
  );
}
