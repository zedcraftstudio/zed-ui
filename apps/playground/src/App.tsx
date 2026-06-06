import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastProvider, TooltipProvider, ThemeProvider } from "@zed-ui/react";
import { ROUTES } from "./config/routes";
import { DocsLayout } from "./layout/DocsLayout";
import { MarketingLayout } from "./layout/MarketingLayout";
import { ComponentDocPage } from "./pages/ComponentDocPage";
import { ComponentsOverviewPage } from "./pages/ComponentsOverviewPage";
import { InstallationPage } from "./pages/InstallationPage";
import { LandingPage } from "./pages/LandingPage";
import { StylingPage } from "./pages/StylingPage";
import { ThemingPage } from "./pages/ThemingPage";
import { createZuiTheme } from "./theme/zuiTheme";

export function App() {
  const [scheme, setScheme] = useState<"light" | "dark">("light");
  const theme = createZuiTheme(scheme);

  const routerBasename =
    import.meta.env.BASE_URL !== "/" ? import.meta.env.BASE_URL.replace(/\/$/, "") : undefined;

  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <TooltipProvider delay={200}>
          <BrowserRouter {...(routerBasename ? { basename: routerBasename } : {})}>
            <Routes>
              <Route
                path={ROUTES.home}
                element={
                  <MarketingLayout scheme={scheme} onSchemeChange={setScheme}>
                    <LandingPage />
                  </MarketingLayout>
                }
              />
              <Route
                path={ROUTES.docs}
                element={<DocsLayout scheme={scheme} onSchemeChange={setScheme} />}
              >
                <Route index element={<Navigate to={ROUTES.docsInstallation} replace />} />
                <Route path="get-started/installation" element={<InstallationPage />} />
                <Route path="styling" element={<StylingPage />} />
                <Route path="theming" element={<ThemingPage />} />
                <Route path="components" element={<ComponentsOverviewPage />} />
                <Route path="components/:componentId" element={<ComponentDocPage />} />
              </Route>
              <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}
