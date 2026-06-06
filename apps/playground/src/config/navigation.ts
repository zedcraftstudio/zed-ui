import { CATEGORY_ORDER, COMPONENTS, type ComponentCategory } from "./components";
import { docsComponentPath, ROUTES } from "./routes";

export type DocsNavItem = {
  end?: boolean;
  href: string;
  id: string;
  label: string;
};

export type DocsNavGroup = {
  items: DocsNavItem[];
  title: string;
};

export const GUIDE_NAV: DocsNavGroup[] = [
  {
    title: "Get Started",
    items: [{ href: ROUTES.docsInstallation, id: "installation", label: "Installation", end: true }]
  }
];

/** @deprecated Use GUIDE_NAV */
export const GET_STARTED_NAV = GUIDE_NAV;

/** @deprecated Use GUIDE_NAV */
export const STYLING_NAV = GUIDE_NAV;

/** @deprecated Use GUIDE_NAV */
export const THEMING_NAV = GUIDE_NAV;

function itemsForCategory(category: ComponentCategory): DocsNavItem[] {
  return COMPONENTS.filter((c) => c.category === category).map((c) => ({
    href: docsComponentPath(c.id),
    id: c.id,
    label: c.label
  }));
}

export const COMPONENTS_NAV: DocsNavGroup[] = [
  {
    title: "Overview",
    items: [{ href: ROUTES.docsComponents, id: "components", label: "Components", end: true }]
  },
  ...CATEGORY_ORDER.map((category) => ({
    title: category,
    items: itemsForCategory(category)
  }))
];

/** @deprecated Use GET_STARTED_NAV or COMPONENTS_NAV based on docs section */
export const DOCS_NAV = COMPONENTS_NAV;

export const FIRST_COMPONENT_ID = COMPONENTS[0]?.id ?? "box";

export function getDocsNavForPath(pathname: string): DocsNavGroup[] {
  if (isGuideSection(pathname)) {
    return GUIDE_NAV;
  }
  return COMPONENTS_NAV;
}

export function isGuideSection(pathname: string): boolean {
  return (
    pathname.startsWith(ROUTES.docsGetStarted) ||
    pathname.startsWith(ROUTES.docsStyling) ||
    pathname.startsWith(ROUTES.docsTheming)
  );
}

export function getDocsSection(
  pathname: string
): "get-started" | "styling" | "theming" | "components" {
  if (pathname.startsWith(ROUTES.docsGetStarted)) {
    return "get-started";
  }
  if (pathname.startsWith(ROUTES.docsStyling)) {
    return "styling";
  }
  if (pathname.startsWith(ROUTES.docsTheming)) {
    return "theming";
  }
  return "components";
}
