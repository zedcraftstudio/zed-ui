import type { ReactNode } from "react";
import { STORYBOOK_URL } from "../config/site";

export type StorybookLinkProps = {
  children: ReactNode;
  className?: string;
};

export function StorybookLink({ children, className }: StorybookLinkProps) {
  if (!STORYBOOK_URL) return null;

  return (
    <a className={className} href={STORYBOOK_URL} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
