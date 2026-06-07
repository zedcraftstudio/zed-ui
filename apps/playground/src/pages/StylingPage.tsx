import { Text } from "@zed-ui/react";
import { Link } from "react-router-dom";
import { CodeBlock } from "../components/CodeBlock";
import { DocsPageShell } from "../components/DocsPageShell";
import { ROUTES } from "../config/routes";

const STYLES_CODE = `import "@zed-ui/react/styles.css";`;

const STYLE_PROPS_CODE = `import { Box, Stack } from "@zed-ui/react";

<Stack gap="4" p="6" bg="surface" radius="lg" shadow="md">
  <Box p="4" bg="muted" radius="md">
    Layout primitives accept token-based style props.
  </Box>
</Stack>`;

const CSS_VARS_CODE = `.my-panel {
  background: var(--zui-colors-bg-surface);
  color: var(--zui-colors-text-primary);
  padding: var(--zui-space-4);
  border-radius: var(--zui-radii-lg);
}`;

const PAGE_COPY = `Styling — Zed UI
Import global styles once, compose with style props on primitives, or use CSS variables directly.`;

const TOC = [
  { id: "global-styles", label: "Global styles", depth: 0 as const },
  { id: "style-props", label: "Style props", depth: 0 as const },
  { id: "css-variables", label: "CSS variables", depth: 0 as const }
];

export function StylingPage() {
  return (
    <DocsPageShell
      copyText={PAGE_COPY}
      description="How Zed UI applies styles with CSS variables, global CSS, and token-based props."
      editSourcePath="apps/playground/src/pages/StylingPage.tsx"
      title="Styling"
      toc={TOC}
      variant="guide"
    >
      <section className="docs-prose-section" id="global-styles">
        <h2 className="docs-prose-section__title">Global styles</h2>
        <Text color="secondary" className="docs-prose-section__lede">
          Import the component stylesheet once at your app entry. It ships BEM-style class names
          wired to design tokens — no runtime CSS-in-JS.
        </Text>
        <CodeBlock code={STYLES_CODE} />
      </section>

      <section className="docs-prose-section" id="style-props">
        <h2 className="docs-prose-section__title">Style props</h2>
        <Text color="secondary" className="docs-prose-section__lede">
          Primitives such as <code>Box</code>, <code>Stack</code>, and <code>Flex</code> accept
          shorthand props (<code>gap</code>, <code>p</code>, <code>bg</code>, <code>radius</code>,
          etc.) that map to CSS variables at render time.
        </Text>
        <CodeBlock code={STYLE_PROPS_CODE} />
      </section>

      <section className="docs-prose-section" id="css-variables">
        <h2 className="docs-prose-section__title">CSS variables</h2>
        <Text color="secondary" className="docs-prose-section__lede">
          When you need custom markup outside the component library, reference the same token
          variables that power Zed UI. They are set on the theme root by <code>ThemeProvider</code>.
        </Text>
        <CodeBlock code={CSS_VARS_CODE} language="css" />
      </section>

      <nav className="docs-pager">
        <Link className="docs-pager__link" to={ROUTES.docsInstallation}>
          <span className="docs-pager__label">Previous</span>
          <span className="docs-pager__title">Installation</span>
        </Link>
        <Link className="docs-pager__link docs-pager__link--next" to={ROUTES.docsTheming}>
          <span className="docs-pager__label">Next</span>
          <span className="docs-pager__title">Theming</span>
        </Link>
      </nav>
    </DocsPageShell>
  );
}
