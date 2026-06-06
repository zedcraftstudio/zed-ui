export function StatePreview({ value }: { value: unknown }) {
  return <pre className="docs-state">{JSON.stringify(value, null, 2)}</pre>;
}

export const ROLE_OPTIONS = [
  { label: "Designer", value: "designer" },
  { label: "Engineer", value: "engineer" },
  { label: "Product", value: "product" }
];

export const PLAN_OPTIONS = [
  { label: "Starter", value: "starter" },
  { label: "Pro", value: "pro" },
  { label: "Enterprise", value: "enterprise" }
];

export const SKILL_OPTIONS = [
  { label: "React", value: "react" },
  { label: "TypeScript", value: "typescript" },
  { label: "Design tokens", value: "tokens" },
  { label: "Accessibility", value: "a11y" },
  { label: "Base UI", value: "base-ui" }
];
