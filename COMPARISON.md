# Why Zed UI?

Zed UI is a typed React design system for teams that want **styled, accessible components** with a **light styling runtime** — without adopting a full CSS-in-JS stack or maintaining copy-paste headless primitives.

This document is intentionally honest: what is a real advantage, what is parity with other libraries, and what is still a gap.

## Summary

| Category            | What it means for Zed UI                                       |
| ------------------- | -------------------------------------------------------------- |
| **Differentiators** | Meaningful architectural choices that change how you build     |
| **Parity**          | Good patterns shared with MUI, Radix, Mantine ecosystems, etc. |
| **Trade-offs**      | Real costs you accept by choosing Zed UI                       |
| **Gaps**            | Areas where Zed UI is behind today (`0.0.x`)                   |

---

## Differentiators

These are the reasons to pick Zed UI over alternatives — not universal wins, but deliberate design choices.

### 1. Styled components on top of Base UI

Zed UI occupies a specific niche:

| Approach                | Examples                          | Trade-off                                                       |
| ----------------------- | --------------------------------- | --------------------------------------------------------------- |
| **Fully styled kits**   | MUI, Ant Design, Mantine          | Fast to ship; often heavier runtime or stronger visual opinions |
| **Headless primitives** | Radix, React Aria, Base UI alone  | Maximum control; you own tokens, layout, and CSS                |
| **Zed UI**              | Base UI behavior + Zed tokens/CSS | Less DIY than headless; less runtime than Emotion-based kits    |

Interactive widgets (Dialog, Drawer, Menu, Select, Tabs, Accordion, Popover, Tooltip) use **[Base UI](https://base-ui.com/)** for focus management, keyboard models, and APG-aligned behavior. Zed UI adds semantic tokens, compound APIs, and stable `zui-` CSS.

**Choose this if:** you want accessible overlays and forms without wiring Radix/shadcn blocks or maintaining Tailwind recipes.

**Not automatic wins:** Base UI has a smaller ecosystem than Radix today. MUI and others have years of production hardening Zed UI does not yet match.

### 2. Static CSS + CSS variables (no CSS-in-JS engine)

Zed UI ships **prebuilt component CSS** and applies themes through **CSS custom properties** — no Emotion, styled-components, or similar runtime in the dependency tree.

```tsx
import { ThemeProvider, createTheme } from "@zed-ui/react";
import "@zed-ui/react/styles.css";
```

`ThemeProvider` maps your theme to `--zui-*` variables on the document root and a scoped wrapper.

**Advantage vs MUI:** smaller styling runtime, straightforward SSR, easy overrides in DevTools or global CSS.

**Trade-off:** less convenient than MUI `sx` or dynamic theme callbacks for one-off responsive/layout logic. Style props on layout primitives still resolve to **inline styles at render time** (they reference CSS variables, but the object is built in JavaScript each render).

### 3. CSS-variable-first token system

`@zed-ui/themes` provides semantic scales for colors, spacing, radii, typography, motion, z-index, breakpoints, and density — all flowing into `--zui-*` variables.

```tsx
const theme = createTheme({
  colorScheme: "dark",
  density: "compact",
  colors: {
    primary: { solid: "#2563eb", hover: "#1d4ed8", soft: "#dbeafe", text: "#1e40af" }
  },
  components: {
    Button: { variant: "solid", size: "md", color: "primary" },
    Input: { variant: "outline", size: "md" }
  }
});
```

Light/dark schemes and `comfortable` / `compact` density are first-class.

**Choose this if:** your team prefers token-driven theming over learning a CSS-in-JS theme API.

### 4. Neutral, brand-agnostic design language

Unlike Material Design (MUI) or Ant Design’s enterprise/admin aesthetic, Zed UI’s defaults aim to be visually neutral — easier to reshape for product-specific branding.

This is a product taste choice, not a technical superiority.

---

## Parity (good, but not unique)

These are solid features Zed UI shares with mature libraries. They are **reasons the API feels modern**, not reasons to switch from MUI alone.

### Polymorphic `as` and `asChild`

```tsx
<Button as="a" href="/docs">Documentation</Button>
<Box asChild><Link to="/home">Home</Link></Box>
```

Radix popularized `asChild`; other modern kits support `as`. Zed UI implements both with typed inference via `@zed-ui/system`. **Parity**, with MUI being the main library where this is weaker.

### Style props on layout primitives

`Box`, `Stack`, `Flex`, and similar primitives accept token-aware props (`m`, `p`, `gap`, `bg`, `radius`, `shadow`, …). This is the same productivity model as several modern kits — **not a Zed-exclusive advantage**.

### Theme-level component defaults

Setting global defaults for `Button`, `Input`, `Tabs`, etc. via `createTheme({ components: { … } })` is well-supported. MUI (`theme.components.defaultProps`) and Mantine offer similar ideas. Zed UI does this cleanly; it is **not a differentiator**.

### Accessibility targets

Zed UI aims for [WAI-ARIA APG](https://www.w3.org/WAI/ARIA/apg/) patterns, documents keyboard behavior in [ACCESSIBILITY.md](./ACCESSIBILITY.md), and runs Vitest + jest-axe smoke tests, Storybook a11y, and Playwright e2e.

MUI, Radix, React Aria, and Mantine also invest heavily in accessibility. **Do not claim a11y leadership** — claim a11y as a design goal with growing coverage. See [Gaps](#gaps) below.

### Published npm package with semver

Unlike shadcn’s copy-paste model, Zed UI installs from npm with Changesets versioning. That is a **workflow preference**, not a quality guarantee.

---

## Trade-offs

What you give up or accept by choosing Zed UI today.

| Trade-off                      | Detail                                                                                                       |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| **Smaller catalog**            | ~35 components vs hundreds across MUI, Ant Design, Mantine                                                   |
| **Early stability**            | `0.0.x` — breaking API changes are still expected                                                            |
| **Less ecosystem**             | Fewer Stack Overflow answers, plugins, and hiring familiarity than MUI                                       |
| **No `sx`-style escape hatch** | Dynamic styling is `className`, `style`, CSS variables, or style props — not a full CSS-in-JS query language |
| **Base UI dependency**         | You inherit Base UI’s release cadence and primitive coverage, not Radix’s larger primitive catalog           |
| **Inline style props cost**    | Layout style props are cheap (token `var()` references) but still computed in JS per render                  |

---

## Gaps

Known limitations today — see the table below and [ACCESSIBILITY.md](./ACCESSIBILITY.md).

| Gap                   | Status                                         | Impact                                                                                                     |
| --------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Component breadth** | ~47 components                                 | No full Data Grid (pinning/virtualization), Charts, form adapters, etc.                                    |
| **`@zed-ui/icons`**   | Stub (`PlusIcon` only)                         | Bring your own icon library for now                                                                        |
| **`@zed-ui/hooks`**   | Published, underused in components             | Hooks exist but are not yet the primary behavior layer                                                     |
| **Subpath imports**   | 4 paths only: `button`, `box`, `stack`, `text` | Barrel import is the norm for most components today                                                        |
| **Test coverage**     | Growing, not exhaustive                        | jest-axe checks are smoke-level, not full APG conformance                                                  |
| **Storybook + Vite**  | Storybook 8 on Vite 8 (above official target)  | Works today; may need upgrade later                                                                        |
| **Modular packages**  | `system`, `utils`, `hooks`, etc.               | Mostly a **maintainer** benefit; apps typically install `@zed-ui/react` and pull dependencies transitively |

### Subpath imports (current reality)

Tree-shaking via subpaths is **partially implemented**, not library-wide:

```tsx
// Supported today
import { Button } from "@zed-ui/react/button";
import { Stack } from "@zed-ui/react/stack";

// Everything else — use the barrel for now
import { Dialog, Select } from "@zed-ui/react";
```

Expanding subpath exports across all components is a planned packaging improvement, not a current advantage.

---

## Comparison tables

### Architecture

|                             | Zed UI                | MUI            | Radix + shadcn  | Ant Design | Mantine     |
| --------------------------- | --------------------- | -------------- | --------------- | ---------- | ----------- |
| **Styled out of the box**   | Yes                   | Yes            | No (you style)  | Yes        | Yes         |
| **Headless behavior layer** | Base UI               | Custom         | Radix           | Custom     | Custom      |
| **CSS-in-JS runtime**       | No                    | Yes (Emotion)  | No              | Uncommon   | CSS modules |
| **CSS-variable theming**    | Yes                   | Partial        | DIY             | Limited    | Yes         |
| **Polymorphic `as`**        | Yes                   | Limited        | Via Slot        | Limited    | Yes         |
| **Style props**             | Yes (inline + tokens) | `sx` (runtime) | No              | Limited    | Yes         |
| **Subpath imports**         | 4 components          | Many           | N/A             | Partial    | Partial     |
| **Component count**         | ~47                   | Very large     | Primitives only | Very large | Large       |
| **Maturity**                | Early (`0.0.x`)       | Stable         | Large ecosystem | Stable     | Stable      |

### vs Material UI

| Zed UI                      | MUI                                     |
| --------------------------- | --------------------------------------- |
| No Emotion runtime          | Huge component catalog (incl. MUI X)    |
| Neutral default look        | Material Design opinion                 |
| Base UI for complex widgets | Custom, battle-tested behavior stack    |
| CSS variables for theming   | `sx` + theme callbacks                  |
| Early stage                 | Mature ecosystem and hiring familiarity |

### vs Radix + shadcn/ui

| Zed UI                    | Radix + shadcn                        |
| ------------------------- | ------------------------------------- |
| Pre-styled, npm install   | You own every class (max flexibility) |
| Unified `ThemeProvider`   | Tailwind + per-component CSS          |
| Semver package upgrades   | Template/codegen workflow             |
| Smaller primitive surface | Radix covers more primitives          |

### vs Ant Design

| Zed UI                          | Ant Design                                  |
| ------------------------------- | ------------------------------------------- |
| Composable, neutral design      | Enterprise widgets (Table, Upload, Form, …) |
| React 18/19, ESM-first          | Mature i18n and locale packs                |
| Lighter admin-dashboard opinion | Long track record in internal tools         |

### vs Mantine

| Zed UI                                  | Mantine                                     |
| --------------------------------------- | ------------------------------------------- |
| Simpler consumer setup (one CSS import) | Rich hooks, dates, spotlight, notifications |
| Base UI behavior layer                  | Custom behavior + large feature set         |
| Smaller scope (easier to fork/audit)    | More 1.0-stable components                  |

---

## Roadmap (not current advantages)

These are **planned** add-ons. Do not count them as reasons to adopt Zed UI today.

| Planned                             | Tier      | Notes                                   |
| ----------------------------------- | --------- | --------------------------------------- |
| Full `@zed-ui/icons` set            | —         | Today: `PlusIcon` only                  |
| Hooks wired into components         | —         | `@zed-ui/hooks` published but underused |
| Subpath exports for all components  | Packaging | Today: 4 paths                          |
| DataTable pinning / virtualization  | Tier 3    | Basic sort + filter shipped             |
| Form library adapters (RHF, Formik) | Tier 3    | —                                       |
| Theme builder / token inspector     | Tier 3    | —                                       |
| Codemods + CLI                      | Tier 3    | —                                       |

---

## When to choose Zed UI

**Good fit**

- You want styled components without Emotion/runtime CSS-in-JS
- You like CSS-variable theming and token-level control
- You prefer npm semver over shadcn copy-paste maintenance
- You are building a product UI (not a heavy enterprise admin suite) and can accept `0.0.x` churn
- You want to influence a young design system early (MIT, monorepo-friendly)

**Consider alternatives**

- **MUI / Ant Design / Mantine** — you need breadth now (Data Grid, dates, charts, enterprise forms)
- **Radix + shadcn** — you want full styling ownership and the largest headless ecosystem
- **Hiring/ecosystem** — your team already standardizes on another library

---

## Learn more

- [Documentation](https://zed-ui.zedcraftstudio.com)
- [Main README](./README.md)
- [Accessibility guide](./ACCESSIBILITY.md)
