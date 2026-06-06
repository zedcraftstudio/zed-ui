import { useState, type ReactNode } from "react";
import { Text } from "@zed-ui/react";
import { CodeBlock } from "./CodeBlock";

export type DocExampleProps = {
  anchorId?: string;
  children: ReactNode;
  className?: string;
  code: string;
  description?: string;
  footer?: ReactNode;
  title?: string;
};

type Tab = "preview" | "code";

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function DocExample({
  anchorId,
  children,
  className,
  code,
  description,
  footer,
  title
}: DocExampleProps) {
  const [tab, setTab] = useState<Tab>("preview");
  const sectionId = anchorId ?? (title ? slugify(title) : undefined);

  return (
    <article
      id={sectionId}
      className={className ? `docs-example-block ${className}` : "docs-example-block"}
    >
      {title ? <h3 className="docs-example-block__title">{title}</h3> : null}
      {description ? (
        <Text size="sm" color="secondary" className="docs-example-block__description">
          {description}
        </Text>
      ) : null}

      <div className="docs-example">
        <div className="docs-example__toolbar">
          <div className="docs-example__tabs" role="tablist" aria-label="Example view">
            <button
              type="button"
              role="tab"
              aria-selected={tab === "preview"}
              className={tab === "preview" ? "docs-example__tab docs-example__tab--active" : "docs-example__tab"}
              onClick={() => setTab("preview")}
            >
              Preview
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === "code"}
              className={tab === "code" ? "docs-example__tab docs-example__tab--active" : "docs-example__tab"}
              onClick={() => setTab("code")}
            >
              Code
            </button>
          </div>
        </div>

        {tab === "preview" ? (
          <div className="docs-example__preview" role="tabpanel">
            {children}
          </div>
        ) : (
          <div className="docs-example__code" role="tabpanel">
            <CodeBlock code={code} variant="dark" />
          </div>
        )}

        {footer && tab === "preview" ? <div className="docs-example__footer">{footer}</div> : null}
      </div>
    </article>
  );
}
