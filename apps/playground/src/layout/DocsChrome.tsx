import { Button, Stack } from "@zed-ui/react";
import type { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { ColorSchemeToggle } from "../components/ColorSchemeToggle";
import { SiteLogo } from "../components/SiteLogo";
import { StorybookLink } from "../components/StorybookLink";
import { ROUTES } from "../config/routes";
import { GITHUB_REPO, VERSION_LABEL } from "../config/site";

export type DocsChromeProps = {
  children: ReactNode;
  onSchemeChange: (scheme: "light" | "dark") => void;
  scheme: "light" | "dark";
};

export function DocsChrome({ children, onSchemeChange, scheme }: DocsChromeProps) {
  return (
    <div className="docs-chrome" data-scheme={scheme}>
      <div className="site-banner site-banner--docs">
        <div className="site-banner__inner">
          <span>Build faster with Zed UI — now in beta.</span>
          <Link to={ROUTES.docsInstallation}>Install the library →</Link>
        </div>
      </div>

      <header className="docs-chrome__header">
        <div className="docs-chrome__header-inner">
          <SiteLogo className="docs-chrome__logo" imageClassName="brand-logo brand-logo--compact" />

          <Stack direction="row" gap="2" align="center" className="docs-chrome__actions">
            <nav className="docs-chrome__nav" aria-label="Primary">
              <NavLink
                className="docs-chrome__link docs-chrome__link--active"
                to={ROUTES.docsInstallation}
              >
                Docs
              </NavLink>
              <StorybookLink className="docs-chrome__link">Storybook</StorybookLink>
            </nav>
            <span className="docs-chrome__nav-divider" aria-hidden />
            <span className="docs-chrome__version">{VERSION_LABEL}</span>
            <Button
              as="a"
              href={GITHUB_REPO}
              rel="noreferrer"
              size="sm"
              target="_blank"
              variant="ghost"
            >
              GitHub
            </Button>
            <ColorSchemeToggle scheme={scheme} onSchemeChange={onSchemeChange} />
          </Stack>
        </div>
      </header>

      {children}
    </div>
  );
}
