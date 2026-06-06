/** Resolve a public-folder asset for the current Vite base (local `/` or GitHub Pages `/repo/`). */
export function assetUrl(path: string): string {
  const normalized = path.replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${normalized}`;
}
