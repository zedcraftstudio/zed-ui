import { useIsomorphicLayoutEffect } from "@zed-ui/hooks";
import {
  createContext,
  useContext,
  useMemo,
  useRef,
  type CSSProperties,
  type ReactNode
} from "react";
import { devWarn } from "@zed-ui/utils";
import { createTheme } from "./createTheme";
import { getComponentDefaults } from "./defaults";
import { themeToCssVars } from "./cssVars";
import type { ZedComponentDefaults, ZedTheme } from "./tokens";

const ThemeContext = createContext<ZedTheme>(createTheme());

export type ThemeProviderProps = {
  children: ReactNode;
  /** When true (default), syncs CSS variables to documentElement so portaled overlays inherit tokens. */
  portalSync?: boolean;
  theme?: ZedTheme;
};

function applyCssVars(target: HTMLElement, cssVars: Record<string, string>) {
  for (const [name, value] of Object.entries(cssVars)) {
    target.style.setProperty(name, value);
  }
}

function clearCssVars(target: HTMLElement, cssVars: Record<string, string>) {
  for (const name of Object.keys(cssVars)) {
    target.style.removeProperty(name);
  }
}

function themeVarsToCssBlock(cssVars: Record<string, string>): string {
  const declarations = Object.entries(cssVars)
    .map(([name, value]) => `${name}: ${value};`)
    .join(" ");

  return `.zui-theme { ${declarations} }`;
}

export function ThemeProvider({
  children,
  portalSync = true,
  theme = createTheme()
}: ThemeProviderProps) {
  const themeRef = useRef<HTMLDivElement>(null);
  const cssVars = useMemo(() => themeToCssVars(theme), [theme]);
  const ssrStyle = useMemo(() => themeVarsToCssBlock(cssVars), [cssVars]);

  useIsomorphicLayoutEffect(() => {
    const wrapper = themeRef.current;
    if (!wrapper) {
      return;
    }

    applyCssVars(wrapper, cssVars);

    const root = portalSync ? document.documentElement : null;
    if (root) {
      root.classList.add("zui-theme-root");
      root.setAttribute("data-zui-color-scheme", theme.colorScheme);
      root.setAttribute("data-zui-density", theme.density);
      applyCssVars(root, cssVars);
    }

    return () => {
      clearCssVars(wrapper, cssVars);
      if (root) {
        clearCssVars(root, cssVars);
        root.classList.remove("zui-theme-root");
        root.removeAttribute("data-zui-color-scheme");
        root.removeAttribute("data-zui-density");
      }
    };
  }, [cssVars, portalSync, theme.colorScheme, theme.density]);

  return (
    <ThemeContext.Provider value={theme}>
      <style data-zui-theme-ssr dangerouslySetInnerHTML={{ __html: ssrStyle }} />
      <div
        ref={themeRef}
        className="zui-theme"
        data-zui-color-scheme={theme.colorScheme}
        data-zui-density={theme.density}
        style={cssVars as CSSProperties}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

/** @deprecated Use `ThemeProvider` */
export function ZedProvider(props: ThemeProviderProps) {
  devWarn("ZedProvider is deprecated. Use ThemeProvider instead.");
  return <ThemeProvider {...props} />;
}

/** @deprecated Use `ThemeProviderProps` */
export type ZedProviderProps = ThemeProviderProps;

export function useZedTheme(): ZedTheme {
  return useContext(ThemeContext);
}

/** @deprecated Use `useZedTheme` */
export function useTheme(): ZedTheme {
  devWarn("useTheme is deprecated. Use useZedTheme instead.");
  return useZedTheme();
}

export function useComponentDefaults<TName extends keyof ZedComponentDefaults>(
  component: TName
): ZedComponentDefaults[TName] | undefined {
  const theme = useZedTheme();
  return getComponentDefaults(theme, component);
}
