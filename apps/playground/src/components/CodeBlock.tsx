import { useState } from "react";
import { cx } from "@zed-ui/react";

export type CodeBlockProps = {
  code: string;
  language?: string;
  showCopy?: boolean;
  variant?: "dark" | "light";
};

export function CodeBlock({
  code,
  language = "tsx",
  showCopy = true,
  variant = "dark"
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cx("docs-code", variant === "dark" && "docs-code--dark")} data-language={language}>
      {showCopy ? (
        <button type="button" className="docs-code__copy" onClick={onCopy} aria-label="Copy code">
          {copied ? "Copied" : "Copy"}
        </button>
      ) : null}
      <pre className="docs-code__pre">
        <code>{code}</code>
      </pre>
    </div>
  );
}
