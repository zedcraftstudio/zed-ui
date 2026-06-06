import { Text } from "@zed-ui/react";
import { Link } from "react-router-dom";
import { CodeBlock } from "../components/CodeBlock";
import { DocsPageShell } from "../components/DocsPageShell";
import { ROUTES } from "../config/routes";

const PROVIDER_CODE = `import { ThemeProvider, createTheme } from "@zed-ui/react";

const theme = createTheme({
  colorScheme: "dark",
  density: "comfortable"
});

export function App({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}`;

const OVERRIDE_CODE = `const theme = createTheme({
  colorScheme: "light",
  colors: {
    primary: {
      solid: "#2563eb",
      hover: "#1d4ed8",
      soft: "#dbeafe",
      text: "#1e40af"
    }
  }
});`;

const THEMES_CSS_CODE = `import "@zed-ui/themes/styles.css";`;

const PAGE_COPY = `Theming — Zed UI
Wrap your app with ThemeProvider and customize tokens with createTheme.`;

const TOC = [
  { id: "provider", label: "ThemeProvider", depth: 0 as const },
  { id: "create-theme", label: "createTheme", depth: 0 as const },
  { id: "color-scheme", label: "Color scheme", depth: 0 as const },
  { id: "density", label: "Density", depth: 0 as const }
];

export function ThemingPage() {
  return (
    <DocsPageShell
      copyText={PAGE_COPY}
      description="Configure light and dark modes, density, and semantic tokens with ThemeProvider."
      editSourcePath="apps/playground/src/pages/ThemingPage.tsx"
      title="Theming"
      toc={TOC}
      variant="guide"
    >
      <section className="docs-prose-section" id="provider">
        <h2 className="docs-prose-section__title">ThemeProvider</h2>
        <Text color="secondary" className="docs-prose-section__lede">
          Place <code>ThemeProvider</code> at the root of your app. It injects CSS variables from your
          theme and sets <code>data-zui-color-scheme</code> and <code>data-zui-density</code> on the
          theme root.
        </Text>
        <CodeBlock code={PROVIDER_CODE} />
      </section>

      <section className="docs-prose-section" id="create-theme">
        <h2 className="docs-prose-section__title">createTheme</h2>
        <Text color="secondary" className="docs-prose-section__lede">
          Pass partial token overrides to <code>createTheme()</code> to brand your product while
          keeping component APIs unchanged.
        </Text>
        <CodeBlock code={OVERRIDE_CODE} />
        <Text size="sm" color="muted" className="docs-prose-section__note">
          When using <code>@zed-ui/themes</code> directly, you can also import{" "}
          <code>@zed-ui/themes/styles.css</code> for base theme styles:
        </Text>
        <CodeBlock code={THEMES_CSS_CODE} />
      </section>

      <section className="docs-prose-section" id="color-scheme">
        <h2 className="docs-prose-section__title">Color scheme</h2>
        <Text color="secondary" className="docs-prose-section__lede">
          Set <code>colorScheme: &quot;light&quot;</code> or <code>&quot;dark&quot;</code> to pick
          the default token palette. Toggle at runtime by passing a new theme object to{" "}
          <code>ThemeProvider</code>.
        </Text>
      </section>

      <section className="docs-prose-section" id="density">
        <h2 className="docs-prose-section__title">Density</h2>
        <Text color="secondary" className="docs-prose-section__lede">
          Choose <code>compact</code>, <code>comfortable</code>, or <code>spacious</code> to scale
          spacing tokens globally — useful for data-dense dashboards or marketing layouts.
        </Text>
      </section>

      <nav className="docs-pager">
        <Link className="docs-pager__link" to={ROUTES.docsStyling}>
          <span className="docs-pager__label">Previous</span>
          <span className="docs-pager__title">Styling</span>
        </Link>
        <Link className="docs-pager__link docs-pager__link--next" to={ROUTES.docsComponents}>
          <span className="docs-pager__label">Next</span>
          <span className="docs-pager__title">Components</span>
        </Link>
      </nav>
    </DocsPageShell>
  );
}
