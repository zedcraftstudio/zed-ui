import { render, type RenderOptions, type RenderResult } from "@testing-library/react";
import type { ReactElement } from "react";
import { ThemeProvider } from "@zed-ui/themes";

export function renderWithProvider(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
): RenderResult {
  return render(ui, {
    ...options,
    wrapper: ({ children }) => <ThemeProvider>{children}</ThemeProvider>
  });
}
