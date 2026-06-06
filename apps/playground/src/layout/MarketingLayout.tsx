import { Button, cx, Stack } from "@zed-ui/react";
import type { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { ColorSchemeToggle } from "../components/ColorSchemeToggle";
import { SiteLogo } from "../components/SiteLogo";
import { StorybookLink } from "../components/StorybookLink";
import { ROUTES } from "../config/routes";
import { GITHUB_REPO, VERSION_LABEL } from "../config/site";

export type MarketingLayoutProps = {
  children: ReactNode;
  onSchemeChange: (scheme: "light" | "dark") => void;
  scheme: "light" | "dark";
};

export function MarketingLayout({ children, onSchemeChange, scheme }: MarketingLayoutProps) {
  return (
    <div className="site" data-scheme={scheme}>
      <div className="site-banner">
        <div className="site-banner__inner">
          <span>Build faster with Zed UI — now in beta.</span>
          <Link to={ROUTES.docsInstallation}>Install the library →</Link>
        </div>
      </div>

      <header className="site-nav">
        <div className="site-nav__inner">
          <SiteLogo className="site-logo" />

          <Stack direction="row" gap="2" align="center" className="site-nav__actions">
            <nav className="site-nav__links" aria-label="Primary">
              <NavLink
                className={({ isActive }) =>
                  cx("site-nav__link", isActive && "site-nav__link--active")
                }
                to={ROUTES.docsInstallation}
              >
                Docs
              </NavLink>
              <StorybookLink className="site-nav__link">Storybook</StorybookLink>
            </nav>
            <span className="site-nav__divider" aria-hidden />
            <span className="site-nav__version">{VERSION_LABEL}</span>
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

      <main className="site-main">{children}</main>
    </div>
  );
}
