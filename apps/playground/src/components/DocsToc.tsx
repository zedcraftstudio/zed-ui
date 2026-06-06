import type { TocItem } from "../docs/toc";
import { githubEditUrl } from "../config/site";

export type DocsTocProps = {
  editSourcePath?: string | undefined;
  items: TocItem[];
};

export function DocsToc({ editSourcePath, items }: DocsTocProps) {
  if (items.length <= 1) return null;

  return (
    <aside className="docs-toc" aria-label="On this page">
      <p className="docs-toc__title">On this page</p>
      <ul className="docs-toc__list">
        {items.map((item) => (
          <li key={item.id} className={item.depth === 1 ? "docs-toc__item--child" : undefined}>
            <a className="docs-toc__link" href={`#${item.id}`}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <ul className="docs-toc__footer-links">
        {editSourcePath ? (
          <li>
            <a
              className="docs-toc__footer-link"
              href={githubEditUrl(editSourcePath)}
              target="_blank"
              rel="noreferrer"
            >
              Edit page on GitHub ↗
            </a>
          </li>
        ) : null}
        <li>
          <a
            className="docs-toc__footer-link"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Scroll to top ↑
          </a>
        </li>
      </ul>
    </aside>
  );
}
