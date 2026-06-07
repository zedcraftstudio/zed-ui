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

### 2. CI publish credentials (pick one)

#### Option A — Automation token (simplest)

CI uses `NODE_AUTH_TOKEN` from the GitHub secret **`NPM_TOKEN`**.

**Important:** the token must be type **Automation**, not **Publish**. Publish tokens trigger **`EOTP`** (one-time password) in CI, which cannot be satisfied from GitHub Actions.

1. [npmjs.com](https://www.npmjs.com) → avatar → **Access Tokens** → **Generate New Token**.
2. Choose **Granular Access Token** → set **Token type** to **Automation** (bypasses 2FA for CI).
   - Or use a classic **Automation** token (legacy UI).
3. Grant **Read and write** on packages: all `@zed-ui/*` (or the `@zed-ui` scope).
4. GitHub → **zedcraftstudio/zed-ui** → **Settings** → **Secrets and variables** → **Actions** → create or replace **`NPM_TOKEN`** with the new token.
5. Revoke any old **Publish** token you were using for CI.

#### Option B — Trusted Publishing only (no `NPM_TOKEN`)

If every `@zed-ui/*` package has Trusted Publishing configured, CI can publish via OIDC without a long-lived token:

1. For each package on npm → **Settings** → **Trusted Publisher** → **GitHub Actions**:
   - **Organization / user:** `zedcraftstudio`
   - **Repository:** `zed-ui`
   - **Workflow filename:** `release.yml`
   - **Environment:** _(empty)_
2. Repeat for `react`, `themes`, `system`, `utils`, `hooks`, `icons` (or configure at the `@zed-ui` org level if available).
3. Remove the `NPM_TOKEN` secret from GitHub (or leave it unused).

Published tarballs still get **provenance** when the Release workflow runs on GitHub.

## Peer dependencies

`react` and `react-dom` are **peerDependencies** on `@zed-ui/react` and `@zed-ui/themes`. They are **not** bundled:

- `tsup` marks `react`, `react-dom`, and `react/jsx-runtime` as `external`.
- Consumers must install peers themselves:

```bash
npm install @zed-ui/react @zed-ui/themes react react-dom
```

`react-day-picker` is an **optional** peer on `@zed-ui/react` (required when using `Calendar` or `DatePicker`):

```bash
npm install react-day-picker
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

- Version bumps and package changelogs are handled by Changesets.
- A **single GitHub Release** is created automatically (tag `v0.0.x`, combined notes from all `@zed-ui/*` changelogs).
- Releases: https://github.com/zedcraftstudio/zed-ui/releases
- Verify on npm: `https://www.npmjs.com/package/@zed-ui/react`
- Check provenance badge on the npm package page (Trusted Publishing + CI).

### 4. Backfill a GitHub Release (one-time / manual)

If a version was published to npm before GitHub Releases were enabled:

1. Open **Actions → Release → Run workflow** (runs the `backfill-github-release` job)
2. Enter the version (e.g. `0.0.2`)
3. The workflow creates tag `v0.0.2` and a release with aggregated changelog notes

Preview notes locally:

```bash
node scripts/github-release-notes.mjs 0.0.2
cat release-notes.md
```

## Consumer install

```bash
npm install @zed-ui/react @zed-ui/themes
```

```tsx
import { ThemeProvider, createTheme, Button } from "@zed-ui/react";
import "@zed-ui/react/styles.css";
```

## Troubleshooting publish failures

| Error | Cause | Fix |
|-------|--------|-----|
| `EOTP` / “requires a one-time password” | `NPM_TOKEN` is a **Publish** token (2FA required) | Replace with an **Automation** token, or use Trusted Publishing only (see §2) |
| `E404` on `PUT @zed-ui/…` | CI has no npm publish credentials | Add `NPM_TOKEN` (Automation) or configure Trusted Publishing |
| `Cannot find module '@zed-ui/system'` during publish | `prepublishOnly` rebuild in isolation | Use root `pnpm build` only (`release:ci` already does this) |
| Partial publish (some packages at new version, others not) | Transient CI failure | Re-run **Release** workflow after fixing auth; versions already on npm are skipped |

## Security checklist

- [ ] npm 2FA enabled
- [ ] `NPM_TOKEN` is an **Automation** token (not Publish), or Trusted Publishing is configured on all packages
- [ ] Trusted Publisher configured for `release.yml` on all `@zed-ui/*` packages (recommended)
- [ ] `pnpm pack:dry-run` passes in CI
- [ ] Peers not bundled (`react` / `react-dom` stay external)
