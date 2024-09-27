import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";


export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      "react-hooks": reactHooks,
    }
  },
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "react-hooks/exhaustive-deps": "error"
    }
  },
];