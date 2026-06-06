# Releasing Zed UI to npm

This monorepo publishes the `@zed-ui/*` packages with [Changesets](https://github.com/changesets/changesets). CI uses **npm Trusted Publishing** (OIDC + provenance) instead of long-lived tokens when possible.

## Packages

These packages are published together (same version):

| Package | Description |
|---------|-------------|
| `@zed-ui/react` | Main component library (install this + themes) |
| `@zed-ui/themes` | Design tokens and `createTheme` |
| `@zed-ui/system` | Style system primitives |
| `@zed-ui/hooks` | React hooks |
| `@zed-ui/utils` | Shared utilities |
| `@zed-ui/icons` | Icons |

`@zed-ui/playground` and `@zed-ui/docs` are private and never published.

## One-time setup

### 1. npm account and scope

1. Create an account at [npmjs.com](https://www.npmjs.com/signup).
2. Create the **`@zed-ui`** organization (or user scope) on npm.
3. Enable **2FA** on your npm account (required for publishing).

### 2. Trusted Publishing (recommended)

For each published package (or once at the org level if your npm plan supports it):

1. Open the package on npm → **Settings** → **Trusted Publisher**.
2. Add **GitHub Actions**:
   - **Organization / user:** `zed-ui`
   - **Repository:** `zedkit-ui`
   - **Workflow filename:** `release.yml`
   - **Environment:** _(leave empty unless you use a GitHub Environment)_

Trusted Publishing lets `.github/workflows/release.yml` publish without storing `NPM_TOKEN` in GitHub secrets. Published tarballs include **provenance** when CI runs on GitHub.

### 3. Legacy token (optional fallback)

If Trusted Publishing is not configured yet, create an npm **Automation** or **Publish** token and add it as the GitHub secret `NPM_TOKEN`. Uncomment `NODE_AUTH_TOKEN` in `release.yml`.

Prefer Trusted Publishing and rotate/remove legacy tokens once CI publishes successfully.

## Peer dependencies

`react` and `react-dom` are **peerDependencies** on `@zed-ui/react` and `@zed-ui/themes`. They are **not** bundled:

- `tsup` marks `react`, `react-dom`, and `react/jsx-runtime` as `external`.
- Consumers must install peers themselves:

```bash
npm install @zed-ui/react @zed-ui/themes react react-dom
```

## Verify before publishing

### Build

```bash
pnpm install
pnpm build
```

### Pack dry-run (all publishable packages)

```bash
pnpm pack:dry-run
```

Confirm the tarball only contains `dist/`, `package.json`, and metadata — no `src/`, no bundled `react`.

### Pack and install locally

```bash
cd packages/react
pnpm build
npm pack
# creates zed-ui-react-0.0.1.tgz

cd /path/to/test-app
npm install /path/to/zedkit-ui/packages/react/zed-ui-react-0.0.1.tgz
npm install @zed-ui/themes react react-dom
```

Or use `pnpm link` / `yalc` for iterative testing in a consumer app.

## Manual publish (local machine)

**Do not use `--provenance` locally.** Provenance only works in GitHub Actions (Trusted Publishing). Local publishes with `--provenance` or `publishConfig.provenance` fail with:

`Automatic provenance generation not supported for provider: null`

**Publish all packages** (not just `@zed-ui/react`). The library depends on `@zed-ui/themes`, `@zed-ui/hooks`, etc. `pnpm publish` resolves `workspace:*` to real semver ranges; plain `npm publish` from one folder does not.

```bash
npm login
pnpm publish:local
```

This builds and publishes every `@zed-ui/*` package in dependency order with `--access public`.

To publish a single package for testing only:

```bash
cd packages/react
pnpm build
npm publish --access public
# no --provenance
```

Scoped public packages require `--access public` (set in each package’s `publishConfig`).

## Automated release (normal flow)

### 1. Add a changeset

```bash
pnpm changeset
```

Choose affected packages and bump type (patch / minor / major). Commit the generated file under `.changeset/`.

### 2. Merge to `main`

The **Release** workflow (`release.yml`) will either:

- Open a **Version Packages** PR that bumps versions and changelogs, or
- Publish to npm when that PR is merged (if versions changed).

### 3. After publish

- Tag and changelog are handled by Changesets.
- Verify on npm: `https://www.npmjs.com/package/@zed-ui/react`
- Check provenance badge on the npm package page (Trusted Publishing + CI).

## Consumer install

```bash
npm install @zed-ui/react @zed-ui/themes
```

```tsx
import { ThemeProvider, createTheme, Button } from "@zed-ui/react";
import "@zed-ui/react/styles.css";
```

## Security checklist

- [ ] npm 2FA enabled
- [ ] Trusted Publisher configured for `release.yml`
- [ ] No long-lived `NPM_TOKEN` in CI (or rotated after switching to OIDC)
- [ ] `pnpm pack:dry-run` passes in CI
- [ ] Peers not bundled (`react` / `react-dom` stay external)
