import type { ReactNode } from "react";

export type DocsCalloutProps = {
  children: ReactNode;
  label?: string;
  variant?: "tip";
};

export function DocsCallout({ children, label = "AI Tip", variant = "tip" }: DocsCalloutProps) {
  return (
    <aside className={`docs-callout docs-callout--${variant}`} role="note">
      <span className="docs-callout__badge">{label}</span>
      <span className="docs-callout__text">{children}</span>
    </aside>
  );
}
