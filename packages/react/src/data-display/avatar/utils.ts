import type { ZedColor } from "../../shared/types";

const AVATAR_COLORS: ZedColor[] = ["primary", "neutral", "success", "warning", "danger", "info"];

export function getAvatarInitials(value?: string) {
  if (!value?.trim()) {
    return "?";
  }

  const parts = value.trim().split(/\s+/);

  if (parts.length >= 2) {
    return `${parts[0]?.[0] ?? ""}${parts[1]?.[0] ?? ""}`.toUpperCase();
  }

  return value.slice(0, 2).toUpperCase();
}

export function getAvatarColorFromName(name: string): ZedColor {
  let hash = 0;

  for (let index = 0; index < name.length; index += 1) {
    hash = name.charCodeAt(index) + ((hash << 5) - hash);
  }

  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length] ?? "primary";
}
