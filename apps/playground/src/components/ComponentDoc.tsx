import { useState } from "react";
import { Button, Text } from "@zed-ui/react";
import type { ReactNode } from "react";
import { getComponentProps } from "../docs/props";
import { buildComponentToc } from "../docs/toc";
import { CodeBlock } from "./CodeBlock";
import { DocExample } from "./DocExample";
import { getComponentEditPath } from "../config/site";
import { DocsToc } from "./DocsToc";
import { PropsTable } from "./PropsTable";

export type ComponentDocUsage = {
  description?: string;
  importCode: string;
  preview: ReactNode;
  usageCode: string;
};

export type ComponentDocProps = {
  children?: ReactNode;
  description: string;
  id: string;
  title: string;
  usage: ComponentDocUsage;
};

export function ComponentDoc({ children, description, id, title, usage }: ComponentDocProps) {
  const propRows = getComponentProps(id);
  const toc = buildComponentToc(children, propRows.length > 0);
  const [copied, setCopied] = useState(false);

  const pageSource = [usage.importCode, "", usage.usageCode].join("\n");

  const onCopyPage = async () => {
    await navigator.clipboard.writeText(pageSource);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="docs-page-layout">
      <article className="docs-page-article">
        <header className="docs-page-header-row">
          <div>
            <h1 className="docs-page-header-row__title">{title}</h1>
            <Text color="secondary" className="docs-page-header-row__description">
              {description}
            </Text>
          </div>
          <Button size="sm" variant="outline" onClick={onCopyPage}>
            {copied ? "Copied" : "Copy page"}
          </Button>
        </header>

        <DocExample code={usage.usageCode} className="docs-page-hero-example">
          {usage.preview}
        </DocExample>

        <section id="usage" className="docs-block docs-block--anchored">
          <h2 className="docs-block__title">Usage</h2>
          {usage.description ? (
            <Text color="secondary" className="docs-block__lede">
              {usage.description}
            </Text>
          ) : null}
          <CodeBlock code={usage.importCode} variant="dark" />
          <CodeBlock code={usage.usageCode} variant="dark" />
        </section>

        {children ? (
          <section id="examples" className="docs-block docs-block--anchored">
            <h2 className="docs-block__title">Examples</h2>
            <div className="docs-examples">{children}</div>
          </section>
        ) : null}

        {propRows.length > 0 ? (
          <section id="props" className="docs-block docs-block--anchored">
            <h2 className="docs-block__title">Props</h2>
            <PropsTable rows={propRows} />
          </section>
        ) : null}
      </article>

      <DocsToc editSourcePath={getComponentEditPath(id)} items={toc} />
    </div>
  );
}
