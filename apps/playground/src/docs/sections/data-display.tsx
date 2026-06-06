import { useMemo, useState, type ComponentProps, type ReactNode } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarRoot,
  Badge,
  BadgeAnchor,
  Button,
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImage,
  CardRoot,
  CardTitle,
  Checkbox,
  Flex,
  FormField,
  getAvatarColorFromName,
  Input,
  Stack,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableColumn,
  TableColumnGroup,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  TableScrollArea,
  Text
} from "@zed-ui/react";
import { ComponentDoc } from "../../components/ComponentDoc";
import { DocExample } from "../../components/DocExample";

const AVATAR_COLORS = ["primary", "neutral", "success", "warning", "danger", "info"] as const;

const PRODUCTS = [
  { product: "Laptop", category: "Electronics", price: "999.99" },
  { product: "Coffee Maker", category: "Home Appliances", price: "49.99" },
  { product: "Desk Chair", category: "Furniture", price: "150" },
  { product: "Smartphone", category: "Electronics", price: "799.99" },
  { product: "Headphones", category: "Accessories", price: "199.99" }
] as const;

const PRODUCT_TABLE_ROWS = `    <TableRow>
      <TableCell>Laptop</TableCell>
      <TableCell>Electronics</TableCell>
      <TableCell>999.99</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Coffee Maker</TableCell>
      <TableCell>Home Appliances</TableCell>
      <TableCell>49.99</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Desk Chair</TableCell>
      <TableCell>Furniture</TableCell>
      <TableCell>150</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Smartphone</TableCell>
      <TableCell>Electronics</TableCell>
      <TableCell>799.99</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Headphones</TableCell>
      <TableCell>Accessories</TableCell>
      <TableCell>199.99</TableCell>
    </TableRow>`;

const PRODUCT_TABLE_BODY = `<TableHeader>
  <TableRow>
    <TableHead>Product</TableHead>
    <TableHead>Category</TableHead>
    <TableHead>Price</TableHead>
  </TableRow>
</TableHeader>
<TableBody>
${PRODUCT_TABLE_ROWS}
</TableBody>`;

function productTableCode(props?: { size?: string; striped?: boolean; variant?: string }) {
  const tableProps = [
    props?.variant ? `variant="${props.variant}"` : null,
    props?.size ? `size="${props.size}"` : null,
    props?.striped ? "striped" : null
  ]
    .filter(Boolean)
    .join(" ");

  return `<Table${tableProps ? ` ${tableProps}` : ""}>
  ${PRODUCT_TABLE_BODY}
</Table>`;
}

const TABLE_VARIANTS_CODE = (["line", "outline", "subtle"] as const)
  .map((variant) => productTableCode({ variant }))
  .join("\n\n");

const TABLE_SIZES_CODE = (["sm", "md", "lg"] as const)
  .map((size) => productTableCode({ size }))
  .join("\n\n");

function ProductTable({
  caption,
  captionSide,
  footer,
  stickyFirstColumn,
  ...tableProps
}: ComponentProps<typeof Table> & {
  caption?: string;
  captionSide?: "bottom" | "top";
  footer?: ReactNode;
  stickyFirstColumn?: boolean;
}) {
  return (
    <Table {...tableProps}>
      {caption ? (
        captionSide ? (
          <TableCaption side={captionSide}>{caption}</TableCaption>
        ) : (
          <TableCaption>{caption}</TableCaption>
        )
      ) : null}
      <TableHeader>
        <TableRow>
          <TableHead {...(stickyFirstColumn ? { sticky: true } : {})}>Product</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {PRODUCTS.map((row) => (
          <TableRow key={row.product}>
            <TableCell {...(stickyFirstColumn ? { sticky: true } : {})}>{row.product}</TableCell>
            <TableCell>{row.category}</TableCell>
            <TableCell>{row.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {footer}
    </Table>
  );
}

export function AvatarSection() {
  return (
    <ComponentDoc
      id="avatar"
      title="Avatar"
      description="Used to represent a user profile picture or initials. Built on Base UI with a closed Avatar helper and optional compound parts."
      usage={{
        importCode: `import { Avatar, AvatarGroup } from "@zed-ui/react"`,
        usageCode: `<Avatar name="Segun Adebayo" size="md" src="/avatar.png" />`,
        preview: <Avatar name="Segun Adebayo" size="md" />
      }}
    >
      <DocExample
        title="Closed component"
        description="Pass name, src, fallback, or icon to the Avatar helper. Image loading and error fallback are handled automatically."
        code={`<Avatar name="Segun Adebayo" size="md" />
<Avatar fallback="SA" size="md" />
<Avatar size="md" />`}
      >
        <Flex align="center" gap="3">
          <Avatar name="Segun Adebayo" size="md" />
          <Avatar fallback="SA" size="md" />
          <Avatar size="md" />
        </Flex>
      </DocExample>

      <DocExample
        title="Sizes"
        description="Use the size prop to change the avatar dimensions."
        code={`<Avatar fallback="SA" size="xs" />
<Avatar fallback="SA" size="sm" />
<Avatar fallback="SA" size="md" />
<Avatar fallback="SA" size="lg" />
<Avatar fallback="SA" size="xl" />`}
      >
        <Flex align="center" gap="3" wrap="wrap">
          <Avatar fallback="SA" size="xs" />
          <Avatar fallback="SA" size="sm" />
          <Avatar fallback="SA" size="md" />
          <Avatar fallback="SA" size="lg" />
          <Avatar fallback="SA" size="xl" />
        </Flex>
      </DocExample>

      <DocExample
        title="Variants"
        code={`<Avatar fallback="SA" variant="subtle" />
<Avatar fallback="SA" variant="solid" />
<Avatar fallback="SA" variant="outline" />`}
      >
        <Flex align="center" gap="3">
          <Avatar fallback="SA" variant="subtle" />
          <Avatar fallback="SA" variant="solid" />
          <Avatar fallback="SA" variant="outline" />
        </Flex>
      </DocExample>

      <DocExample
        title="Shape"
        description="Use shape to switch between full, rounded, and square avatars."
        code={`<Avatar fallback="JS" shape="rounded" />
<Avatar fallback="SA" shape="full" />
<Avatar fallback="RU" shape="square" />`}
      >
        <Flex align="center" gap="3">
          <Avatar fallback="JS" shape="rounded" />
          <Avatar fallback="SA" shape="full" />
          <Avatar fallback="RU" shape="square" />
        </Flex>
      </DocExample>

      <DocExample
        title="Colors"
        code={`<Avatar color="primary" fallback="SA" />
<Avatar color="success" fallback="SA" />
<Avatar color="danger" fallback="SA" />`}
      >
        <Flex align="center" gap="2" wrap="wrap">
          {AVATAR_COLORS.map((color) => (
            <Avatar color={color} fallback="SA" key={color} />
          ))}
        </Flex>
      </DocExample>

      <DocExample
        title="Fallback"
        description="When no name or fallback is provided, Avatar renders a generic icon. Failed images fall back automatically."
        code={`<Avatar size="md" />
<Avatar fallback="SU" size="md" />
<Avatar name="Segun Adebayo" size="md" src="https://invalid.example/avatar.png" />`}
      >
        <Flex align="center" gap="3">
          <Avatar size="md" />
          <Avatar fallback="SU" size="md" />
          <Avatar name="Segun Adebayo" size="md" src="https://invalid.example/avatar.png" />
        </Flex>
      </DocExample>

      <DocExample
        title="Random color"
        description="Derive a stable palette color from a name with getAvatarColorFromName."
        code={`import { Avatar, getAvatarColorFromName } from "@zed-ui/react"

<Avatar color={getAvatarColorFromName("Sarah Nguyen")} name="Sarah Nguyen" />
<Avatar color={getAvatarColorFromName("Ben Lee")} name="Ben Lee" />`}
      >
        <Flex align="center" gap="3">
          <Avatar color={getAvatarColorFromName("Sarah Nguyen")} name="Sarah Nguyen" />
          <Avatar color={getAvatarColorFromName("Ben Lee")} name="Ben Lee" />
          <Avatar color={getAvatarColorFromName("Jordan Lee")} name="Jordan Lee" />
        </Flex>
      </DocExample>

      <DocExample
        title="Ring"
        code={`<Avatar fallback="R" ring />`}
      >
        <Flex align="center" gap="3">
          <Avatar color="primary" fallback="R" ring />
          <Avatar color="success" fallback="R" ring variant="solid" />
          <Avatar color="warning" fallback="R" ring variant="outline" />
        </Flex>
      </DocExample>

      <DocExample
        title="Group"
        description="Use AvatarGroup to overlap multiple avatars and optionally cap the visible count."
        code={`<AvatarGroup max={3}>
  <Avatar fallback="US" />
  <Avatar fallback="BA" />
  <Avatar fallback="UC" />
  <Avatar fallback="ZK" />
  <Avatar fallback="AB" />
</AvatarGroup>`}
      >
        <AvatarGroup max={3}>
          <Avatar fallback="US" />
          <Avatar fallback="BA" />
          <Avatar fallback="UC" />
          <Avatar fallback="ZK" />
          <Avatar fallback="AB" />
        </AvatarGroup>
      </DocExample>

      <DocExample
        title="Stacking"
        code={`<AvatarGroup stacking="first-on-top">...</AvatarGroup>
<AvatarGroup stacking="last-on-top">...</AvatarGroup>`}
      >
        <Flex align="center" gap="4" wrap="wrap">
          <AvatarGroup stacking="first-on-top">
            <Avatar color="primary" fallback="1" />
            <Avatar color="success" fallback="2" />
            <Avatar color="warning" fallback="3" />
          </AvatarGroup>
          <AvatarGroup stacking="last-on-top">
            <Avatar color="primary" fallback="1" />
            <Avatar color="success" fallback="2" />
            <Avatar color="warning" fallback="3" />
          </AvatarGroup>
        </Flex>
      </DocExample>

      <DocExample
        title="Persona"
        description="Pair an avatar with text for profile summaries."
        code={`<Flex align="center" gap="3">
  <Avatar name="John Mason" />
  <Stack gap="0">
    <Text weight="semibold">John Mason</Text>
    <Text color="secondary" size="sm">john.mason@example.com</Text>
  </Stack>
</Flex>`}
      >
        <Stack gap="4">
          <Flex align="center" gap="3">
            <Avatar name="John Mason" />
            <Stack gap="0">
              <Text weight="semibold">John Mason</Text>
              <Text color="secondary" size="sm">
                john.mason@example.com
              </Text>
            </Stack>
          </Flex>
          <Flex align="center" gap="3">
            <Avatar
              color={getAvatarColorFromName("Melissa Jones")}
              name="Melissa Jones"
            />
            <Stack gap="0">
              <Text weight="semibold">Melissa Jones</Text>
              <Text color="secondary" size="sm">
                melissa.jones@example.com
              </Text>
            </Stack>
          </Flex>
        </Stack>
      </DocExample>

      <DocExample
        title="Badge"
        description="Combine Avatar with BadgeAnchor to show status on the corner."
        code={`<BadgeAnchor content="" dot placement="bottom-end">
  <Avatar fallback="DA" />
</BadgeAnchor>`}
      >
        <BadgeAnchor content="" dot placement="bottom-end">
          <Avatar fallback="DA" size="lg" />
        </BadgeAnchor>
      </DocExample>

      <DocExample
        title="Composition"
        description="Use AvatarRoot, AvatarImage, and AvatarFallback when you need full control."
        code={`<AvatarRoot className="zui-avatar" data-size="md" data-variant="subtle">
  <AvatarImage alt="Segun Adebayo" src="/avatar.png" />
  <AvatarFallback>SA</AvatarFallback>
</AvatarRoot>`}
      >
        <AvatarRoot className="zui-avatar" data-color="primary" data-size="md" data-variant="subtle">
          <AvatarFallback>SA</AvatarFallback>
        </AvatarRoot>
      </DocExample>
    </ComponentDoc>
  );
}

export function CardSection() {
  const cardActions = (
    <Flex gap="2" wrap="wrap">
      <Button size="sm" variant="outline">
        View
      </Button>
      <Button size="sm">Join</Button>
    </Flex>
  );

  const profileCard = (variant: "elevated" | "outline" | "subtle") => (
    <CardRoot size="md" style={{ maxWidth: "24rem" }} variant={variant}>
      <CardHeader>
        <div className="zui-card__persona">
          <Avatar fallback="NC" size="lg" />
          <div className="zui-card__persona-meta">
            <CardTitle>Nue Camp</CardTitle>
            <CardDescription>Design retreat in the mountains</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <Text color="secondary" size="sm">
          This is the card body. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </CardBody>
      <CardFooter>{cardActions}</CardFooter>
    </CardRoot>
  );

  return (
    <ComponentDoc
      id="card"
      title="Card"
      description="Used to display content related to a single subject. Supports all visual variants, sizes, horizontal layouts, and compound parts."
      usage={{
        importCode: `import {
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImage,
  CardRoot,
  CardTitle,
} from "@zed-ui/react"`,
        usageCode: `<CardRoot variant="outline" size="md">
  <CardHeader>
    <CardTitle>Nue Camp</CardTitle>
    <CardDescription>Design retreat in the mountains</CardDescription>
  </CardHeader>
  <CardBody>{children}</CardBody>
  <CardFooter>{actions}</CardFooter>
</CardRoot>`,
        preview: profileCard("outline")
      }}
    >
      <DocExample
        title="Closed helper"
        description="The Card helper still accepts header and footer props for quick layouts."
        code={`<Card
  footer={<Button size="sm">Action</Button>}
  header={<Text weight="semibold">Title</Text>}
  variant="elevated"
>
  {children}
</Card>`}
      >
        <Card
          footer={
            <Button size="sm" variant="soft">
              Learn more
            </Button>
          }
          header={<Text weight="semibold">Design system</Text>}
          variant="elevated"
        >
          <Text color="secondary" size="sm">
            Compose layouts with Box, Flex, and Stack.
          </Text>
        </Card>
      </DocExample>

      <DocExample
        title="Variants"
        description="All supported card variants: elevated, outline, subtle, ghost, filled, solid, and unstyled."
        code={`<Card variant="elevated">{children}</Card>
<Card variant="outline">{children}</Card>
<Card variant="subtle">{children}</Card>
<Card variant="ghost">{children}</Card>
<Card variant="filled">{children}</Card>
<Card variant="solid">{children}</Card>
<Card variant="unstyled">{children}</Card>`}
      >
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
      </DocExample>

      <DocExample
        title="Within form"
        description="Group related fields inside a card container."
        code={`<CardRoot as="form" size="md" variant="outline">
  <CardHeader>
    <CardTitle>Sign up</CardTitle>
    <CardDescription>Fill in the form below to create an account</CardDescription>
  </CardHeader>
  <CardBody>
    <Stack gap="4">{fields}</Stack>
  </CardBody>
  <CardFooter>{actions}</CardFooter>
</CardRoot>`}
      >
        <CardRoot size="md" style={{ maxWidth: "28rem" }} variant="outline">
          <CardHeader>
            <CardTitle>Sign up</CardTitle>
            <CardDescription>Fill in the form below to create an account</CardDescription>
          </CardHeader>
          <CardBody>
            <Stack gap="4">
              <FormField label="First name">
                <Input placeholder="First name" />
              </FormField>
              <FormField label="Last name">
                <Input placeholder="Last name" />
              </FormField>
            </Stack>
          </CardBody>
          <CardFooter>
            <Flex gap="2" justify="end" width="100%">
              <Button size="sm" variant="outline">
                Cancel
              </Button>
              <Button size="sm">Sign in</Button>
            </Flex>
          </CardFooter>
        </CardRoot>
      </DocExample>

      <DocExample
        title="Sizes"
        code={`<Card size="sm">{children}</Card>
<Card size="md">{children}</Card>
<Card size="lg">{children}</Card>`}
      >
        <Stack gap="4">
          {(["sm", "md", "lg"] as const).map((size) => (
            <Card key={size} size={size} variant="outline">
              <CardTitle>Card — {size}</CardTitle>
              <Text color="secondary" size="sm">
                This is the card body. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </Card>
          ))}
        </Stack>
      </DocExample>

      <DocExample
        title="With image"
        code={`<CardRoot variant="elevated">
  <CardImage alt="Green couch" src="https://placehold.co/800x450?text=Sofa" />
  <CardBody>
    <CardTitle>Living room Sofa</CardTitle>
    <CardDescription>Perfect for modern tropical spaces.</CardDescription>
  </CardBody>
  <CardFooter>{actions}</CardFooter>
</CardRoot>`}
      >
        <CardRoot style={{ maxWidth: "22rem" }} variant="elevated">
          <CardImage
            alt="Green double couch with wooden legs"
            src="https://placehold.co/800x450/e2e8f0/475569?text=Living+room+Sofa"
          />
          <CardBody>
            <CardTitle>Living room Sofa</CardTitle>
            <CardDescription>
              This sofa is perfect for modern tropical spaces and baroque inspired rooms.
            </CardDescription>
            <div className="zui-card__price-row">
              <span className="zui-card__price">$450</span>
              <Flex gap="2">
                <Button size="sm" variant="outline">
                  Add to cart
                </Button>
                <Button size="sm">Buy now</Button>
              </Flex>
            </div>
          </CardBody>
        </CardRoot>
      </DocExample>

      <DocExample
        title="Horizontal"
        code={`<CardRoot orientation="horizontal" variant="outline">
  <CardImage alt="Caffe latte" src="https://placehold.co/640x480?text=Latte" />
  <CardBody>{children}</CardBody>
</CardRoot>`}
      >
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
            <Flex gap="2" wrap="wrap">
              <Badge color="warning" size="sm" variant="soft">
                Hot
              </Badge>
              <Badge color="neutral" size="sm" variant="soft">
                Caffeine
              </Badge>
            </Flex>
            <Button size="sm">Buy latte</Button>
          </CardBody>
        </CardRoot>
      </DocExample>

      <DocExample
        title="With avatar"
        code={`<CardRoot variant="outline">
  <CardHeader>
    <div className="zui-card__persona">
      <Avatar fallback="NF" />
      <div className="zui-card__persona-meta">
        <CardTitle>Nate Foss</CardTitle>
        <span className="zui-card__persona-handle">@natefoss</span>
      </div>
    </div>
  </CardHeader>
  <CardBody>{children}</CardBody>
  <CardFooter>{actions}</CardFooter>
</CardRoot>`}
      >
        <CardRoot style={{ maxWidth: "24rem" }} variant="outline">
          <CardHeader>
            <div className="zui-card__persona">
              <Avatar fallback="NF" />
              <div className="zui-card__persona-meta">
                <CardTitle>Nate Foss</CardTitle>
                <span className="zui-card__persona-handle">@natefoss</span>
              </div>
            </div>
          </CardHeader>
          <CardBody>
            <Text size="sm">
              <Text as="span" weight="semibold">
                Nate Foss
              </Text>{" "}
              has requested to join your team. You can approve or decline their request.
            </Text>
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
      </DocExample>

      <DocExample
        title="Profile layout"
        description="Profile card with avatar, description, and actions."
        code={`<CardRoot variant="elevated">
  <CardHeader>...</CardHeader>
  <CardBody>...</CardBody>
  <CardFooter>...</CardFooter>
</CardRoot>`}
      >
        <Flex gap="4" wrap="wrap">
          {profileCard("elevated")}
          {profileCard("subtle")}
        </Flex>
      </DocExample>
    </ComponentDoc>
  );
}

export function TableSection() {
  const rows = useMemo(
    () => [
      { id: "1", name: "Button", status: "Ready" },
      { id: "2", name: "Dialog", status: "Ready" },
      { id: "3", name: "Select", status: "Ready" }
    ],
    []
  );
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<string[]>([]);
  const pageSize = 3;
  const pagedProducts = PRODUCTS.slice((page - 1) * pageSize, page * pageSize);
  const pageCount = Math.ceil(PRODUCTS.length / pageSize);
  const allSelected = selected.length === PRODUCTS.length;
  const someSelected = selected.length > 0 && !allSelected;

  return (
    <ComponentDoc
      id="table"
      title="Table"
      description="Used to display data in a tabular format. Compose header, body, footer, caption, and scroll area parts on the root table element."
      usage={{
        importCode: `import {
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell
} from "@zed-ui/react"`,
        usageCode: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Product</TableHead>
      <TableHead>Price</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Laptop</TableCell>
      <TableCell>999.99</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
        preview: <ProductTable />
      }}
    >
      <DocExample title="Sizes" code={TABLE_SIZES_CODE}>
        <Stack gap="6">
          {(["sm", "md", "lg"] as const).map((size) => (
            <ProductTable key={size} size={size} />
          ))}
        </Stack>
      </DocExample>

      <DocExample title="Variants" code={TABLE_VARIANTS_CODE}>
        <Stack gap="6">
          <ProductTable variant="line" />
          <ProductTable variant="outline" />
          <ProductTable variant="subtle" />
        </Stack>
      </DocExample>

      <DocExample title="Striped" code={productTableCode({ striped: true })}>
        <ProductTable striped />
      </DocExample>

      <DocExample
        title="Caption"
        code={`<Table>
  <TableCaption>Product inventory and pricing information</TableCaption>
  ...
</Table>`}
      >
        <ProductTable caption="Product inventory and pricing information" />
      </DocExample>

      <DocExample
        title="Caption top"
        code={`<TableCaption side="top">Product inventory and pricing information</TableCaption>`}
      >
        <ProductTable caption="Product inventory and pricing information" captionSide="top" />
      </DocExample>

      <DocExample title="Column border" code={`<Table showColumnBorder>...</Table>`}>
        <ProductTable showColumnBorder />
      </DocExample>

      <DocExample
        title="Overflow"
        description="Wrap the table in TableScrollArea for horizontal scrolling."
        code={`<TableScrollArea maxWidth="20rem">
  <Table>...</Table>
</TableScrollArea>`}
      >
        <TableScrollArea style={{ maxWidth: "20rem" }}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>SKU</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {PRODUCTS.map((row) => (
                <TableRow key={row.product}>
                  <TableCell>{row.product}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>12</TableCell>
                  <TableCell>SKU-{row.product.slice(0, 3).toUpperCase()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableScrollArea>
      </DocExample>

      <DocExample title="Sticky header" code={`<Table stickyHeader>...</Table>`}>
        <TableScrollArea style={{ maxHeight: "12rem" }}>
          <Table stickyHeader>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[...PRODUCTS, ...PRODUCTS].map((row, index) => (
                <TableRow key={`${row.product}-${index}`}>
                  <TableCell>{row.product}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableScrollArea>
      </DocExample>

      <DocExample
        title="Sticky column"
        description="Set sticky on column header and body cells for the first column."
        code={`<TableHead sticky>Product</TableHead>
<TableCell sticky>{product}</TableCell>`}
      >
        <TableScrollArea style={{ maxWidth: "24rem" }}>
          <ProductTable stickyFirstColumn />
        </TableScrollArea>
      </DocExample>

      <DocExample title="Highlight on hover" code={`<Table interactive>...</Table>`}>
        <ProductTable interactive />
      </DocExample>

      <DocExample
        title="Footer"
        code={`<TableFooter>
  <TableRow>
    <TableCell colSpan={2}>Total</TableCell>
    <TableCell>2199.96</TableCell>
  </TableRow>
</TableFooter>`}
      >
        <ProductTable
          footer={
            <TableFooter>
              <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell>2199.96</TableCell>
              </TableRow>
            </TableFooter>
          }
          variant="outline"
        />
      </DocExample>

      <DocExample
        title="Column group"
        code={`<TableColumnGroup>
  <TableColumn htmlWidth="40%" />
  <TableColumn htmlWidth="35%" />
  <TableColumn htmlWidth="25%" />
</TableColumnGroup>`}
      >
        <Table variant="outline">
          <TableColumnGroup>
            <TableColumn htmlWidth="40%" />
            <TableColumn htmlWidth="35%" />
            <TableColumn htmlWidth="25%" />
          </TableColumnGroup>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {PRODUCTS.map((row) => (
              <TableRow key={row.product}>
                <TableCell>{row.product}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DocExample>

      <DocExample
        title="Pagination"
        description="Compose a table with pagination controls."
        code={`const page = 1;
const rows = products.slice((page - 1) * pageSize, page * pageSize);`}
      >
        <Stack gap="4">
          <Table variant="outline">
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pagedProducts.map((row) => (
                <TableRow key={row.product}>
                  <TableCell>{row.product}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Flex gap="2" justify="center">
            {Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => (
              <Button
                key={pageNumber}
                onClick={() => setPage(pageNumber)}
                size="sm"
                variant={pageNumber === page ? "solid" : "outline"}
              >
                {pageNumber}
              </Button>
            ))}
          </Flex>
        </Stack>
      </DocExample>

      <DocExample title="Selection" code={`const [selected, setSelected] = useState<string[]>([]);`}>
        <Table interactive variant="outline">
          <TableHeader>
            <TableRow>
              <TableHead>
                <Checkbox
                  aria-label="Select all rows"
                  checked={allSelected}
                  indeterminate={someSelected}
                  onCheckedChange={(checked) =>
                    setSelected(checked ? PRODUCTS.map((row) => row.product) : [])
                  }
                />
              </TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {PRODUCTS.map((row) => (
              <TableRow key={row.product}>
                <TableCell>
                  <Checkbox
                    aria-label={`Select ${row.product}`}
                    checked={selected.includes(row.product)}
                    onCheckedChange={(checked) =>
                      setSelected((current) =>
                        checked
                          ? [...current, row.product]
                          : current.filter((item) => item !== row.product)
                      )
                    }
                  />
                </TableCell>
                <TableCell>{row.product}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>${row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DocExample>

      <DocExample
        title="Component list"
        code={`<Table>
  <TableBody>
    {rows.map((row) => (
      <TableRow key={row.id}>...</TableRow>
    ))}
  </TableBody>
</Table>`}
      >
        <Table variant="outline">
          <TableHeader>
            <TableRow>
              <TableHead>Component</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>
                  <Badge color="success" size="sm">
                    {row.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DocExample>
    </ComponentDoc>
  );
}