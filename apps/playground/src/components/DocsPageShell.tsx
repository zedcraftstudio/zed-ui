import type { ReactNode } from "react";
import { Button, Text, cx } from "@zed-ui/react";
import { useState } from "react";
import { DocsToc } from "./DocsToc";
import type { TocItem } from "../docs/toc";

export type DocsPageShellProps = {
  children: ReactNode;
  className?: string;
  copyText?: string;
  description: string;
  editSourcePath?: string;
  showHeader?: boolean;
  title: string;
  toc?: TocItem[];
  variant?: "default" | "guide";
};

export function DocsPageShell({
  children,
  className,
  copyText,
  description,
  editSourcePath,
  showHeader = true,
  title,
  toc = [],
  variant = "default"
}: DocsPageShellProps) {
  const [copied, setCopied] = useState(false);

  const onCopyPage = async () => {
    if (!copyText) return;
    await navigator.clipboard.writeText(copyText);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cx(
        "docs-page-layout",
        variant === "guide" && "docs-page-layout--guide",
        className
      )}
    >
      <article className={cx("docs-page-article", variant === "guide" && "docs-page-article--guide")}>
        {showHeader ? (
          <header
            className={cx(
              "docs-page-header-row",
              variant === "guide" && "docs-page-header-row--guide"
            )}
          >
            <div className="docs-page-header-row__copy">
              <h1 className="docs-page-header-row__title">{title}</h1>
              <Text color="secondary" className="docs-page-header-row__description">
                {description}
              </Text>
            </div>
            {copyText ? (
              <Button size="sm" variant="outline" onClick={onCopyPage}>
                {copied ? "Copied" : "Copy page"}
              </Button>
            ) : null}
          </header>
        ) : null}
        <div className="docs-page-body">{children}</div>
      </article>
      {toc.length > 0 ? <DocsToc editSourcePath={editSourcePath} items={toc} /> : null}
    </div>
  );
}
