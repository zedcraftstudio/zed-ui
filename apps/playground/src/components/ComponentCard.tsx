import { Text } from "@zed-ui/react";
import { Link } from "react-router-dom";
import type { ComponentEntry } from "../config/components";
import { docsComponentPath } from "../config/routes";

export type ComponentCardProps = {
  component: ComponentEntry;
  preview?: React.ReactNode;
};

export function ComponentCard({ component, preview }: ComponentCardProps) {
  return (
    <Link to={docsComponentPath(component.id)} className="docs-component-card">
      <div className="docs-component-card__preview">
        {preview ? (
          <div className="docs-component-card__preview-inner">{preview}</div>
        ) : (
          <span className="docs-component-card__placeholder" aria-hidden>
            {component.label.charAt(0)}
          </span>
        )}
      </div>
      <div className="docs-component-card__body">
        <Text weight="semibold" className="docs-component-card__title">
          {component.label}
        </Text>
        <Text size="sm" color="secondary" className="docs-component-card__description">
          {component.description}
        </Text>
      </div>
    </Link>
  );
}
