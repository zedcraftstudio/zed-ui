import {
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  type CSSProperties,
  type ReactNode
} from "react";
import { createTheme } from "./createTheme";
import { getComponentDefaults } from "./defaults";
import { themeToCssVars } from "./cssVars";
import type { ZedComponentDefaults, ZedTheme } from "./tokens";

const ThemeContext = createContext<ZedTheme>(createTheme());

export type ThemeProviderProps = {
  children: ReactNode;
  theme?: ZedTheme;
};

export function ThemeProvider({ children, theme = createTheme() }: ThemeProviderProps) {
  const cssVars = useMemo(() => themeToCssVars(theme), [theme]);

  useLayoutEffect(() => {
    const root = document.documentElement;
    root.classList.add("zui-theme-root");
    root.setAttribute("data-zui-color-scheme", theme.colorScheme);
    root.setAttribute("data-zui-density", theme.density);

    for (const [name, value] of Object.entries(cssVars)) {
      root.style.setProperty(name, value);
    }

    return () => {
      for (const name of Object.keys(cssVars)) {
        root.style.removeProperty(name);
      }
      root.classList.remove("zui-theme-root");
      root.removeAttribute("data-zui-color-scheme");
      root.removeAttribute("data-zui-density");
    };
  }, [cssVars, theme.colorScheme, theme.density]);

  return (
    <ThemeContext.Provider value={theme}>
      <div
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
export const ZedProvider = ThemeProvider;

/** @deprecated Use `ThemeProviderProps` */
export type ZedProviderProps = ThemeProviderProps;

export function useZedTheme(): ZedTheme {
  return useContext(ThemeContext);
}

/** @deprecated Use `useZedTheme` */
export const useTheme = useZedTheme;

export function useComponentDefaults<TName extends keyof ZedComponentDefaults>(
  component: TName
): ZedComponentDefaults[TName] | undefined {
  const theme = useZedTheme();
  return getComponentDefaults(theme, component);
}
