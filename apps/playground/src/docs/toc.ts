import { Children, isValidElement, type ReactNode } from "react";
import { DocExample } from "../components/DocExample";

export type TocItem = {
  depth: 0 | 1;
  id: string;
  label: string;
};

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function buildComponentToc(examples: ReactNode | undefined, hasProps = false): TocItem[] {
  const items: TocItem[] = [{ id: "usage", label: "Usage", depth: 0 }];

  if (examples) {
    items.push({ id: "examples", label: "Examples", depth: 0 });

    Children.forEach(examples, (child) => {
      if (!isValidElement(child) || child.type !== DocExample) return;
      const props = child.props as { anchorId?: string; title?: string };
      if (!props.title) return;
      const id = props.anchorId ?? slugify(props.title);
      items.push({ id, label: props.title, depth: 1 });
    });
  }

  if (hasProps) {
    items.push({ id: "props", label: "Props", depth: 0 });
  }

  return items;
}
