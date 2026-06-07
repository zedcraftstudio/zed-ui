import { Badge, Button, Text } from "@zed-ui/react";
import { Link } from "react-router-dom";
import { CodeBlock } from "../components/CodeBlock";
import { DocsPageShell } from "../components/DocsPageShell";
import { InstallCommandBar } from "../components/InstallCommandBar";
import { InstallFrameworkIcon } from "../components/InstallFrameworkIcons";
import { ROUTES } from "../config/routes";
import { GITHUB_REPO, STORYBOOK_URL } from "../config/site";

const STYLES_CODE = `import "@zed-ui/react/styles.css";`;

const PROVIDER_CODE = `import { ThemeProvider, createTheme } from "@zed-ui/react";

export function App({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={createTheme({ colorScheme: "light", density: "comfortable" })}>
      {children}
    </ThemeProvider>
  );
}`;

const USAGE_CODE = `import { Button, HStack } from "@zed-ui/react";

const Demo = () => {
  return (
    <HStack gap="3">
      <Button color="primary">Get started</Button>
      <Button variant="outline">Learn more</Button>
    </HStack>
  );
}`;

const TREE_SHAKE_CODE = `import { Button } from "@zed-ui/react/button";`;

const FRAMEWORKS = [
  {
    id: "vite" as const,
    title: "Vite",
    description: "Use Zed UI with Vite — the same setup as this playground."
  },
  {
    id: "nextjs" as const,
    title: "Next.js",
    description: "Easily add Zed UI with the Next.js App Router."
  },
  {
    id: "storybook" as const,
    title: "Storybook",
    description: "Document components with live stories and theme toggles."
  }
] as const;

const TOKEN_FEATURES = [
  { label: "Zero runtime CSS-in-JS", detail: "Styles ship as plain CSS variables" },
  { label: "Semantic tokens", detail: "colorScheme, density, and palette slots" },
  { label: "One provider", detail: "ThemeProvider wires every primitive" }
] as const;

const PAGE_COPY = `Installation — Zed UI
Install @zed-ui/react and @zed-ui/themes, import styles, wrap with ThemeProvider, then compose components.`;

const TOC = [
  { id: "supported-frameworks", label: "Supported frameworks", depth: 0 as const },
  { id: "css-variables", label: "CSS variables", depth: 0 as const },
  { id: "installation", label: "Installation", depth: 0 as const },
  { id: "install-packages", label: "Install packages", depth: 1 as const },
  { id: "import-styles", label: "Import styles", depth: 1 as const },
  { id: "setup-provider", label: "Setup provider", depth: 1 as const },
  { id: "tree-shaking", label: "Tree shaking", depth: 1 as const },
  { id: "enjoy", label: "Enjoy!", depth: 1 as const },
  { id: "learn", label: "Learn", depth: 0 as const },
  { id: "contribute", label: "Contribute", depth: 0 as const }
];

export function InstallationPage() {
  return (
    <DocsPageShell
      className="docs-install-page"
      copyText={PAGE_COPY}
      description="How to install and set up Zed UI in your project."
      editSourcePath="apps/playground/src/pages/InstallationPage.tsx"
      title="Installation"
      toc={TOC}
      variant="guide"
    >
      <section className="docs-install-section" id="supported-frameworks">
        <header className="docs-install-section__header">
          <h2 className="docs-install-section__title">Supported frameworks</h2>
          <Text color="secondary" className="docs-install-section__lede">
            Zed UI works across common React setups. Each uses the same install, styles, and
            provider steps below.
          </Text>
        </header>

        <ul className="docs-install-frameworks">
          {FRAMEWORKS.map((framework) => (
            <li key={framework.id} id={framework.id}>
              <a
                className={`docs-install-framework docs-install-framework--${framework.id === "nextjs" ? "next" : framework.id}`}
                href="#installation"
              >
                <span className="docs-install-framework__icon" aria-hidden>
                  <InstallFrameworkIcon
                    className="docs-install-framework__glyph"
                    id={framework.id}
                  />
                </span>
                <div className="docs-install-framework__body">
                  <Text weight="semibold">{framework.title}</Text>
                  <Text size="sm" color="secondary">
                    {framework.description}
                  </Text>
                  <span className="docs-install-framework__cta">View setup →</span>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className="docs-install-requirements" role="note">
          <Text size="sm" weight="medium">
            Requirements
          </Text>
          <div className="docs-install-requirements__chips">
            <Badge color="primary" variant="soft">
              React 18.2+ or 19+
            </Badge>
            <Badge color="neutral" variant="soft">
              Node.js 20.x+
            </Badge>
          </div>
        </div>
      </section>

      <section className="docs-install-section" id="css-variables">
        <header className="docs-install-section__header">
          <h2 className="docs-install-section__title">CSS variables</h2>
        </header>

        <div className="docs-install-highlight">
          <Text color="secondary" className="docs-install-highlight__lede">
            Zed UI maps design tokens to CSS custom properties at runtime through{" "}
            <code>ThemeProvider</code> — no Emotion, styled-components, or other CSS-in-JS runtime.
            Customize <code>colorScheme</code>, <code>density</code>, and semantic colors once;
            every component reads from the same variable surface.
          </Text>

          <ul className="docs-install-features">
            {TOKEN_FEATURES.map((feature) => (
              <li key={feature.label} className="docs-install-feature">
                <span className="docs-install-feature__dot" aria-hidden />
                <div className="docs-install-feature__copy">
                  <Text size="sm" weight="semibold">
                    {feature.label}
                  </Text>
                  <Text size="xs" color="secondary">
                    {feature.detail}
                  </Text>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="docs-install-section" id="installation">
        <header className="docs-install-section__header">
          <h2 className="docs-install-section__title">Installation</h2>
          <Text color="secondary" className="docs-install-section__lede">
            To manually set up Zed UI in your project, follow the steps below.
          </Text>
        </header>

        <ol className="docs-install-steps">
          <li className="docs-install-step" id="install-packages">
            <div className="docs-install-step__marker">
              <span className="docs-install-step__number" aria-hidden>
                1
              </span>
            </div>
            <div className="docs-install-step__content">
              <h3 className="docs-install-step__title">Install @zed-ui/react</h3>
              <Text color="secondary" size="sm" className="docs-install-step__lede">
                Add Zed UI and its themes package. <code>react</code> and <code>react-dom</code> are
                peer dependencies — install them first if they are not already in your project.
              </Text>
              <InstallCommandBar />
            </div>
          </li>

          <li className="docs-install-step" id="import-styles">
            <div className="docs-install-step__marker">
              <span className="docs-install-step__number" aria-hidden>
                2
              </span>
            </div>
            <div className="docs-install-step__content">
              <h3 className="docs-install-step__title">Import styles</h3>
              <Text color="secondary" size="sm" className="docs-install-step__lede">
                Import the global stylesheet once at your app entry (<code>main.tsx</code>,{" "}
                <code>layout.tsx</code>, or <code>_app.tsx</code>).
              </Text>
              <CodeBlock code={STYLES_CODE} />
            </div>
          </li>

          <li className="docs-install-step" id="setup-provider">
            <div className="docs-install-step__marker">
              <span className="docs-install-step__number" aria-hidden>
                3
              </span>
            </div>
            <div className="docs-install-step__content">
              <h3 className="docs-install-step__title">Setup provider</h3>
              <Text color="secondary" size="sm" className="docs-install-step__lede">
                Wrap your application with <code>ThemeProvider</code> at the root. It injects design
                tokens as CSS variables via <code>createTheme()</code>.
              </Text>
              <CodeBlock code={PROVIDER_CODE} />
            </div>
          </li>

          <li className="docs-install-step" id="tree-shaking">
            <div className="docs-install-step__marker">
              <span className="docs-install-step__number" aria-hidden>
                4
              </span>
            </div>
            <div className="docs-install-step__content">
              <h3 className="docs-install-step__title">Tree shaking</h3>
              <Text color="secondary" size="sm" className="docs-install-step__lede">
                Import individual components from subpaths when you want the smallest possible
                bundle:
              </Text>
              <CodeBlock code={TREE_SHAKE_CODE} />
            </div>
          </li>

          <li className="docs-install-step docs-install-step--last" id="enjoy">
            <div className="docs-install-step__marker">
              <span className="docs-install-step__number" aria-hidden>
                5
              </span>
            </div>
            <div className="docs-install-step__content docs-install-step__content--accent">
              <h3 className="docs-install-step__title">Enjoy!</h3>
              <Text color="secondary" size="sm" className="docs-install-step__lede">
                With packages installed, styles imported, and your app wrapped in{" "}
                <code>ThemeProvider</code>, you can compose components from the barrel export.
              </Text>
              <CodeBlock code={USAGE_CODE} />
            </div>
          </li>
        </ol>
      </section>

      <section className="docs-install-section docs-install-section--resources" id="learn">
        <div className="docs-install-resources">
          <article className="docs-install-resource" id="learn-card">
            <span
              className="docs-install-resource__icon docs-install-resource__icon--learn"
              aria-hidden
            >
              <svg viewBox="0 0 24 24" fill="none" className="docs-install-resource__glyph">
                <path
                  d="M4 6.5A2.5 2.5 0 016.5 4H14l6 6v9.5A2.5 2.5 0 0117.5 22h-11A2.5 2.5 0 014 19.5v-13z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path d="M14 4v5a1 1 0 001 1h5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
            <div className="docs-install-resource__body">
              <h2 className="docs-install-resource__title">Learn</h2>
              <Text size="sm" color="secondary">
                Browse the component gallery and Storybook to see every primitive with live
                examples, props tables, and accessibility notes.
              </Text>
              <div className="docs-install-resource__actions">
                <Button as={Link} size="sm" to={ROUTES.docsComponents} variant="outline">
                  Browse components
                </Button>
                {STORYBOOK_URL ? (
                  <Button
                    as="a"
                    href={STORYBOOK_URL}
                    rel="noreferrer"
                    size="sm"
                    target="_blank"
                    variant="ghost"
                  >
                    Open Storybook
                  </Button>
                ) : null}
              </div>
            </div>
          </article>

          <article className="docs-install-resource" id="contribute">
            <span
              className="docs-install-resource__icon docs-install-resource__icon--contribute"
              aria-hidden
            >
              <svg viewBox="0 0 24 24" fill="none" className="docs-install-resource__glyph">
                <path
                  d="M12 3c-3.5 3-5.5 5.5-5.5 9a5.5 5.5 0 1011 0c0-3.5-2-6-5.5-9z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M12 14v4M10 20h4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <div className="docs-install-resource__body">
              <h2 className="docs-install-resource__title">Contribute</h2>
              <Text size="sm" color="secondary">
                Whether you&apos;re new to Zed UI or already shipping with it, the best way to get
                involved is on GitHub — report issues, suggest improvements, or open a pull request.
              </Text>
              <div className="docs-install-resource__actions">
                <Button
                  as="a"
                  href={GITHUB_REPO}
                  rel="noreferrer"
                  size="sm"
                  target="_blank"
                  variant="outline"
                >
                  Contribute on GitHub
                </Button>
              </div>
            </div>
          </article>
        </div>
      </section>

      <nav className="docs-pager">
        <span />
        <Link className="docs-pager__link docs-pager__link--next" to={ROUTES.docsStyling}>
          <span className="docs-pager__label">Next</span>
          <span className="docs-pager__title">Styling</span>
        </Link>
      </nav>
    </DocsPageShell>
  );
}
