import type { ReactNode } from "react";

type IconProps = {
  className?: string | undefined;
};

export function ViteIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2L3 5.5v6.5c0 5.25 3.75 10.15 9 11.5 5.25-1.35 9-6.25 9-11.5V5.5L12 2z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M12 4.5l6.5 2.4v4.6c0 4.1-2.9 7.95-6.5 9.05C8.4 19.45 5.5 15.6 5.5 11.5V6.9L12 4.5z"
        fill="currentColor"
      />
      <path d="M10.5 9.5l1.5 3 1.5-3 1.5 5.5H9l1.5-5.5z" fill="var(--zui-colors-bg-canvas)" />
    </svg>
  );
}

export function NextIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-.5 14.5V8.7l4.8 7.8H11.5zm-1 0V8.7l-4.8 7.8h4.8z" />
    </svg>
  );
}

export function StorybookIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6 4h12a2 2 0 012 2v14l-8-3-8 3V6a2 2 0 012-2zm2 4v8.2l4-1.5 4 1.5V8H8zm2 2h4v1.5h-4V10zm0 2.5h4V14h-4v-1.5z" />
    </svg>
  );
}

const ICONS = {
  vite: ViteIcon,
  nextjs: NextIcon,
  storybook: StorybookIcon
} as const;

export type FrameworkId = keyof typeof ICONS;

export function InstallFrameworkIcon({
  id,
  className
}: {
  className?: string;
  id: FrameworkId;
}): ReactNode {
  const Icon = ICONS[id];
  return <Icon className={className} />;
}
