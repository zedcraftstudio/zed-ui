export const ROUTES = {
  home: "/",
  docs: "/docs",
  docsGetStarted: "/docs/get-started",
  docsInstallation: "/docs/get-started/installation",
  docsStyling: "/docs/styling",
  docsTheming: "/docs/theming",
  docsComponents: "/docs/components",
  docsComponent: "/docs/components/:componentId"
} as const;

export function docsComponentPath(id: string): string {
  return `/docs/components/${id}`;
}

/** @deprecated Use docsComponentPath */
export function docsComponentHref(id: string): string {
  return docsComponentPath(id);
}
