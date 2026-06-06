import type { ReactNode } from "react";
import type { AlertStatus } from "../../shared/types";

type IconProps = {
  size?: number;
};

function IconBase({ size = 20, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function AlertInfoIcon({ size = 20 }: IconProps) {
  return (
    <IconBase size={size}>
      <circle cx="10" cy="10" r="7.25" />
      <path d="M10 9.25V14" />
      <circle cx="10" cy="6.75" r="0.75" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

export function AlertSuccessIcon({ size = 20 }: IconProps) {
  return (
    <IconBase size={size}>
      <path d="m6.5 10.25 2.25 2.25 5-5" />
      <circle cx="10" cy="10" r="7.25" />
    </IconBase>
  );
}

export function AlertWarningIcon({ size = 20 }: IconProps) {
  return (
    <IconBase size={size}>
      <path d="M10 4.5 16.25 15H3.75L10 4.5Z" />
      <path d="M10 9v2.75" />
      <circle cx="10" cy="13.75" r="0.75" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

export function AlertErrorIcon({ size = 20 }: IconProps) {
  return (
    <IconBase size={size}>
      <circle cx="10" cy="10" r="7.25" />
      <path d="m7.25 7.25 5.5 5.5M12.75 7.25l-5.5 5.5" />
    </IconBase>
  );
}

export function AlertNeutralIcon({ size = 20 }: IconProps) {
  return (
    <IconBase size={size}>
      <circle cx="10" cy="10" r="7.25" />
      <path d="M7 10h6" />
    </IconBase>
  );
}

export function getAlertStatusIcon(status: AlertStatus, size?: number) {
  switch (status) {
    case "success":
      return <AlertSuccessIcon size={size} />;
    case "warning":
      return <AlertWarningIcon size={size} />;
    case "error":
      return <AlertErrorIcon size={size} />;
    case "neutral":
      return <AlertNeutralIcon size={size} />;
    default:
      return <AlertInfoIcon size={size} />;
  }
}
