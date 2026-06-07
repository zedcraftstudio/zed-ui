import { useState } from "react";
import { Badge, Button, Flex, HStack, Input, Stack, Switch, Text } from "@zed-ui/react";
import { Link } from "react-router-dom";
import { CodeBlock } from "../components/CodeBlock";
import { ROUTES } from "../config/routes";
import { CHANGELOG_URL, GITHUB_REPO, STORYBOOK_URL, VERSION_LABEL } from "../config/site";

const INSTALL_CMD = "pnpm add @zed-ui/react @zed-ui/themes";

const FRAMEWORKS = [
  {
    name: "Vite",
    description: "Fast local dev with HMR — the same stack as this site.",
    to: ROUTES.docsInstallation
  },
  {
    name: "Next.js",
    description: "App Router friendly. Wrap your root layout with ThemeProvider.",
    to: ROUTES.docsInstallation
  },
  {
    name: "Storybook",
    description: "Document components with live stories and theme toggles.",
    to: ROUTES.docsInstallation
  }
] as const;

const FEATURES = [
  {
    title: "Tokens",
    description:
      "Semantic design tokens map to CSS variables at runtime — customize once, theme everywhere.",
    code: `createTheme({ colorScheme: "dark", density: "compact" })`
  },
  {
    title: "Compound APIs",
    description:
      "Predictable component anatomy with Root, Trigger, Content parts — like Dialog and Tabs.",
    code: `<Tabs.Root defaultValue="one">\n  <Tabs.List>...</Tabs.List>\n</Tabs.Root>`
  },
  {
    title: "Accessibility",
    description: "Keyboard navigation, focus management, and ARIA patterns via Base UI primitives.",
    code: `<Dialog.Root>\n  <DialogContent title="Confirm" />\n</Dialog.Root>`
  }
] as const;

function buildFooterColumns() {
  const productLinks = [
    { label: "Components", to: ROUTES.docsComponents },
    { label: "Installation", to: ROUTES.docsInstallation },
    ...(STORYBOOK_URL ? [{ label: "Storybook", href: STORYBOOK_URL }] : [])
  ];

  return [
    { title: "Product", links: productLinks },
    {
      title: "Resources",
      links: [
        { label: "GitHub", href: GITHUB_REPO },
        { label: "Changelog", href: CHANGELOG_URL }
      ]
    },
    {
      title: "Community",
      links: [{ label: "Contribute", href: GITHUB_REPO }]
    }
  ] as const;
}

export function LandingPage() {
  const footerColumns = buildFooterColumns();
  const [copied, setCopied] = useState(false);

  const onCopyInstall = async () => {
    await navigator.clipboard.writeText(INSTALL_CMD);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="site-landing">
      <section className="site-hero">
        <div className="site-hero__mesh" aria-hidden />
        <div className="site-hero__layout">
          <Stack gap="6" className="site-hero__content">
            <Flex align="center" gap="2" wrap="wrap">
              <Badge color="primary" variant="soft">
                {VERSION_LABEL}
              </Badge>
              <Badge color="neutral" variant="outline">
                Beta
              </Badge>
            </Flex>

            <Stack gap="4">
              <h1 className="site-hero__title">
                Build accessible products with <span className="site-hero__accent">Zed UI</span>
              </h1>
              <Text size="lg" color="secondary" className="site-hero__lede">
                A typed React design system with CSS-variable theming, compound components, and
                APG-aligned behavior — without runtime CSS-in-JS.
              </Text>
            </Stack>

            <Flex gap="3" wrap="wrap" align="center">
              <Button as={Link} size="lg" to={ROUTES.docsInstallation}>
                Get started
              </Button>
              <Button as={Link} size="lg" to={ROUTES.docsComponents} variant="outline">
                Browse components
              </Button>
            </Flex>

            <div className="site-install site-install--interactive">
              <div className="site-install__shell">
                <code className="site-install__code">{INSTALL_CMD}</code>
                <span className="site-install__divider" aria-hidden />
                <button
                  type="button"
                  className="site-install__copy"
                  aria-label={copied ? "Copied install command" : "Copy install command"}
                  onClick={onCopyInstall}
                >
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
            </div>
          </Stack>

          <div className="site-hero__demo" aria-label="Component preview">
            <div className="site-demo-card">
              <div className="site-demo-card__header">
                <Text size="sm" weight="semibold">
                  Settings
                </Text>
                <Badge color="success" variant="soft">
                  Live
                </Badge>
              </div>
              <Stack gap="4" className="site-demo-card__body">
                <Stack gap="2">
                  <Text size="sm" weight="medium">
                    Workspace name
                  </Text>
                  <Input defaultValue="Acme Inc." size="sm" />
                </Stack>
                <Flex align="center" justify="space-between" gap="3">
                  <Stack gap="0">
                    <Text size="sm" weight="medium">
                      Email notifications
                    </Text>
                    <Text size="xs" color="secondary">
                      Product updates and alerts
                    </Text>
                  </Stack>
                  <Switch defaultChecked size="sm" />
                </Flex>
                <HStack gap="2">
                  <Button size="sm">Save changes</Button>
                  <Button size="sm" variant="ghost">
                    Cancel
                  </Button>
                </HStack>
              </Stack>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section site-section--muted">
        <div className="site-section__inner">
          <Stack gap="3" className="site-section__header site-section__header--center">
            <Text size="sm" weight="semibold" color="primary" className="site-eyebrow">
              Framework guide
            </Text>
            <h2 className="site-section__title">Works with your stack</h2>
            <Text color="secondary" className="site-section__lede">
              Drop Zed UI into Vite, Next.js, or Storybook with the same provider and styles setup.
            </Text>
          </Stack>

          <div className="site-framework-grid">
            {FRAMEWORKS.map((framework) => (
              <Link key={framework.name} className="site-framework-card" to={framework.to}>
                <Text weight="semibold">{framework.name}</Text>
                <Text size="sm" color="secondary">
                  {framework.description}
                </Text>
                <span className="site-framework-card__link">Read guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-section__inner site-section__inner--split">
          <Stack gap="4" className="site-section__header">
            <Text size="sm" weight="semibold" color="primary" className="site-eyebrow">
              Quick start
            </Text>
            <h2 className="site-section__title">Install in minutes</h2>
            <Text color="secondary" className="site-section__lede">
              Import styles, wrap with ThemeProvider, and compose components from a single package.
            </Text>
            <Button as={Link} size="sm" to={ROUTES.docsInstallation} variant="outline">
              Full installation guide
            </Button>
          </Stack>
          <div className="site-quickstart-code">
            <CodeBlock
              code={`import { Button, ThemeProvider, createTheme } from "@zed-ui/react";
import "@zed-ui/react/styles.css";

export function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <Button color="primary">Ship it</Button>
    </ThemeProvider>
  );
}`}
              variant="light"
            />
          </div>
        </div>
      </section>

      <section className="site-stats">
        <div className="site-stats__inner site-stats__inner--wide">
          <div className="site-stat">
            <span className="site-stat__value">34+</span>
            <span className="site-stat__label">components</span>
          </div>
          <div className="site-stat">
            <span className="site-stat__value">Zero-runtime</span>
            <span className="site-stat__label">CSS variables</span>
          </div>
          <div className="site-stat">
            <span className="site-stat__value">Base UI</span>
            <span className="site-stat__label">headless layer</span>
          </div>
          <div className="site-stat">
            <span className="site-stat__value">TypeScript</span>
            <span className="site-stat__label">first APIs</span>
          </div>
        </div>
      </section>

      <section className="site-section site-section--muted">
        <div className="site-section__inner">
          <Stack gap="3" className="site-section__header">
            <Text size="sm" weight="semibold" color="primary" className="site-eyebrow">
              Design system
            </Text>
            <h2 className="site-section__title">Everything you need to ship polished UI</h2>
            <Text color="secondary" className="site-section__lede">
              Spend less time on one-off styling and more time on product quality.
            </Text>
          </Stack>

          <div className="site-feature-grid">
            {FEATURES.map((feature) => (
              <article key={feature.title} className="site-feature-card">
                <Text weight="semibold" className="site-feature-card__title">
                  {feature.title}
                </Text>
                <Text size="sm" color="secondary">
                  {feature.description}
                </Text>
                <pre className="site-feature-card__code">
                  <code>{feature.code}</code>
                </pre>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-cta">
        <div className="site-cta__inner">
          <Stack gap="4" align="center">
            <h2 className="site-cta__title">Ready to build?</h2>
            <Text color="secondary" className="site-cta__lede">
              Follow the installation guide, then explore every component with live examples.
            </Text>
            <HStack gap="3">
              <Button as={Link} size="lg" to={ROUTES.docsInstallation}>
                Install Zed UI
              </Button>
              <Button as={Link} size="lg" to={ROUTES.docsComponents} variant="outline">
                View components
              </Button>
            </HStack>
          </Stack>
        </div>
      </section>

      <section className="site-footer-grid">
        <div className="site-footer-grid__inner">
          {footerColumns.map((column) => (
            <div key={column.title} className="site-footer-grid__column">
              <Text size="sm" weight="semibold" className="site-footer-grid__title">
                {column.title}
              </Text>
              <ul className="site-footer-grid__list">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {"to" in link ? (
                      <Link to={link.to}>{link.label}</Link>
                    ) : (
                      <a href={link.href} rel="noreferrer" target="_blank">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="site-footer-grid__bottom">
          <Text size="sm" color="muted">
            © {new Date().getFullYear()} Zed UI. MIT License.
          </Text>
        </div>
      </section>
    </div>
  );
}
