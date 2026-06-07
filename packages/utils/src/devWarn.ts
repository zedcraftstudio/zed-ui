export function devWarn(message: string): void {
  const nodeEnv = (
    globalThis as typeof globalThis & { process?: { env?: { NODE_ENV?: string } } }
  ).process?.env?.NODE_ENV;

  if (nodeEnv === "production") {
    return;
  }

  console.warn(`[zed-ui] ${message}`);
}
