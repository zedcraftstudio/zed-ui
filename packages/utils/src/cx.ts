type ClassValue = string | false | null | undefined;

export function cx(...values: Array<ClassValue | ((...args: never[]) => ClassValue)>): string {
  return values
    .map((value) => (typeof value === "function" ? undefined : value))
    .filter(Boolean)
    .join(" ");
}
