import globals from "globals";
import eslintJs from "@eslint/js";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser, // para variáveis globais do navegador
        ...globals.es2021, // para variáveis do ES2021
        ...globals.jest, // para variáveis do Jest
      },
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": tsEslintPlugin,
      react: pluginReact,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...eslintJs.configs.recommended.rules,
      ...tsEslintPlugin.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },

  eslintConfigPrettier,
];
