import js from "@eslint/js";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

const jsxA11yRecommended = jsxA11y.flatConfigs.recommended;
const jsxA11yWarnRules = Object.fromEntries(
  Object.keys(jsxA11yRecommended.rules).map((rule) => [rule, "warn"])
);

export default tseslint.config(
  { ignores: ["**/dist/**", "**/node_modules/**", "**/storybook-static/**"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      "jsx-a11y": jsxA11y,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...jsxA11yWarnRules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }]
    }
  },
  {
    files: ["packages/react/src/**/*.{ts,tsx}"],
    rules: {
      ...jsxA11yRecommended.rules,
      "jsx-a11y/anchor-is-valid": "warn"
    }
  }
);
