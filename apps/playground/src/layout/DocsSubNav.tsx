import { cx } from "@zed-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import { getDocsSection } from "../config/navigation";
import { ROUTES } from "../config/routes";

const TABS = [
  { label: "Components", section: "components" as const, to: ROUTES.docsComponents },
  { label: "Styling", section: "styling" as const, to: ROUTES.docsStyling },
  { label: "Theming", section: "theming" as const, to: ROUTES.docsTheming }
];

export function DocsSubNav() {
  const { pathname } = useLocation();
  const section = getDocsSection(pathname);

  return (
    <nav className="docs-subnav" aria-label="Documentation sections">
      {TABS.map((tab) => (
        <NavLink
          key={tab.to}
          className={({ isActive }) =>
            cx(
              "docs-subnav__tab",
              (isActive || section === tab.section) && "docs-subnav__tab--active"
            )
          }
          end={tab.section !== "components"}
          to={tab.to}
        >
          {tab.label}
        </NavLink>
      ))}
    </nav>
  );
}
