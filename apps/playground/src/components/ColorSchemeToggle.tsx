import { IconButton } from "@zed-ui/react";

export type ColorSchemeToggleProps = {
  onSchemeChange: (scheme: "light" | "dark") => void;
  scheme: "light" | "dark";
};

function SunIcon() {
  return (
    <svg
      aria-hidden
      fill="none"
      height="18"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="18"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      aria-hidden
      fill="none"
      height="18"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="18"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function ColorSchemeToggle({ onSchemeChange, scheme }: ColorSchemeToggleProps) {
  const nextScheme = scheme === "light" ? "dark" : "light";

  return (
    <IconButton
      aria-label={scheme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className="color-scheme-toggle"
      icon={scheme === "light" ? <MoonIcon /> : <SunIcon />}
      size="sm"
      title={scheme === "light" ? "Dark mode" : "Light mode"}
      variant="ghost"
      onClick={() => onSchemeChange(nextScheme)}
    />
  );
}
