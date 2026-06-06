import { cx } from "@zed-ui/react";
import type { ReactNode } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { getDocsNavForPath } from "../config/navigation";
import { DocsChrome } from "./DocsChrome";
import { DocsSubNav } from "./DocsSubNav";

export type DocsLayoutProps = {
  onSchemeChange: (scheme: "light" | "dark") => void;
  scheme: "light" | "dark";
};

export type DocsLayoutSidebarProps = {
  children?: ReactNode;
  className?: string;
};

export function DocsLayoutSidebar({ children, className }: DocsLayoutSidebarProps) {
  const { pathname } = useLocation();
  const navGroups = getDocsNavForPath(pathname);

  return (
    <aside
      className={cx("docs-sidebar docs-sidebar--zui", className)}
      aria-label="Documentation"
    >
      <nav className="docs-sidebar__nav">
        {navGroups.map((group) => (
          <div key={group.title} className="docs-nav-group">
            <p className="docs-nav-group__title">{group.title}</p>
            <ul className="docs-nav-group__list">
              {group.items.map((item) => (
                <li key={item.href}>
                  <NavLink
                    className={({ isActive }) =>
                      cx("docs-nav-link", isActive && "docs-nav-link--active")
                    }
                    to={item.href}
                    {...(item.end ? { end: true } : {})}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
      {children}
    </aside>
  );
}

export function DocsLayout({ onSchemeChange, scheme }: DocsLayoutProps) {
  return (
    <DocsChrome scheme={scheme} onSchemeChange={onSchemeChange}>
      <div className="docs-body docs-body--guide">
        <DocsLayoutSidebar className="docs-sidebar--guide" />
        <main className="docs-main docs-main--guide">
          <DocsSubNav />
          <div className="docs-content docs-content--guide">
            <Outlet />
          </div>
        </main>
      </div>
    </DocsChrome>
  );
}
