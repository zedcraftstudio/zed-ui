import { cx } from "@zed-ui/react";
import { useState } from "react";
import { CodeBlock } from "./CodeBlock";

export type PackageManager = {
  command: string;
  id: string;
  label: string;
};

export const DEFAULT_PACKAGE_MANAGERS: PackageManager[] = [
  { id: "npm", label: "npm", command: "npm install @zed-ui/react @zed-ui/themes" },
  { id: "pnpm", label: "pnpm", command: "pnpm add @zed-ui/react @zed-ui/themes" },
  { id: "yarn", label: "yarn", command: "yarn add @zed-ui/react @zed-ui/themes" },
  { id: "bun", label: "bun", command: "bun add @zed-ui/react @zed-ui/themes" }
];

export type InstallCommandBarProps = {
  className?: string;
  command?: string;
  packageManagers?: PackageManager[];
};

export function InstallCommandBar({
  className,
  command,
  packageManagers = DEFAULT_PACKAGE_MANAGERS
}: InstallCommandBarProps) {
  const managers = command
    ? [{ id: "default", label: "Install", command }]
    : packageManagers;
  const [selectedId, setSelectedId] = useState(managers[0]?.id ?? "npm");

  const activeManager = managers.find((manager) => manager.id === selectedId) ?? managers[0];

  return (
    <div className={cx("install-command-bar", className)}>
      {managers.length > 1 ? (
        <div className="install-command-bar__tabs" role="tablist" aria-label="Package manager">
          {managers.map((manager) => (
            <button
              key={manager.id}
              type="button"
              role="tab"
              aria-selected={selectedId === manager.id}
              className={cx(
                "install-command-bar__tab",
                selectedId === manager.id && "install-command-bar__tab--active"
              )}
              onClick={() => setSelectedId(manager.id)}
            >
              {manager.label}
            </button>
          ))}
        </div>
      ) : null}

      <CodeBlock
        code={activeManager?.command ?? ""}
        language="bash"
        variant="dark"
      />
    </div>
  );
}
