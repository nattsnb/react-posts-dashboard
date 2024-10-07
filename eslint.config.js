import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import react from "@vitejs/plugin-react";
import js from "@eslint/js";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  js.configs.recommended.rules,
  react.configs.recommended.rules,
  react.configs["jsx-runtime"].rules,
  reactHooks.configs.recommended.rules,
  {
    plugins: {
      "react-hooks": reactHooks,
    },
  },
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "react-hooks/exhaustive-deps": "error",
      "react/react-in-jsx-scope": 0,
      "react/prop-types": 0,
    },
  },
];
