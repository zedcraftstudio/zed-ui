import { Link } from "react-router-dom";
import { Text } from "@zed-ui/react";
import { COMPONENTS } from "../config/components";
import { ROUTES } from "../config/routes";
import { ComponentCard } from "../components/ComponentCard";
import { DocsPageShell } from "../components/DocsPageShell";

const OVERVIEW_COPY = COMPONENTS.map((c) => `${c.label}: ${c.description}`).join("\n");

export function ComponentsOverviewPage() {
  return (
    <DocsPageShell
      copyText={OVERVIEW_COPY}
      description="Accessible, modern and easy to style UI components."
      editSourcePath="apps/playground/src/pages/ComponentsOverviewPage.tsx"
      title="Components"
    >
      <Text color="secondary" className="docs-overview-page__intro">
        Here&apos;s a list of all the components available in the library.
      </Text>

      <div className="docs-component-grid">
        {COMPONENTS.map((component) => (
          <ComponentCard key={component.id} component={component} />
        ))}
      </div>

      <nav className="docs-pager">
        <Link className="docs-pager__link" to={ROUTES.docsTheming}>
          <span className="docs-pager__label">Previous</span>
          <span className="docs-pager__title">Theming</span>
        </Link>
        <span />
      </nav>
    </DocsPageShell>
  );
}
