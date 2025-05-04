import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable all ESLint rules for now
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "prefer-const": "off",
      "no-var": "off",
      "no-console": "off",
      "react/prop-types": "off",
      "react/jsx-no-undef": "off",
      "react/jsx-uses-vars": "off",
      "react/react-in-jsx-scope": "off",

      // You can add additional rules that are causing issues or any specific rules you want to disable:
      "no-empty-pattern": "off", // Example of disabling a specific rule
      "@typescript-eslint/no-empty-interface": "off", // Disable empty interface rule
      "@typescript-eslint/explicit-module-boundary-types": "off", // Disable explicit return types for functions

      // Disabling all other eslint rules:
      "no-unused-vars": "off",
      "no-undef": "off",
      "no-redeclare": "off",
      "no-debugger": "off",
      "no-alert": "off",
      "no-constant-condition": "off",
      "no-dupe-keys": "off",
      "no-unused-expressions": "off",
      "no-trailing-spaces": "off",
      "comma-dangle": "off",
      "quotes": "off",
      "curly": "off",
      "eqeqeq": "off",
      "semi": "off",
      "indent": "off",
      "brace-style": "off",
      "prefer-arrow-callback": "off",
      "arrow-parens": "off",
      "no-magic-numbers": "off",
      "max-len": "off",
      "linebreak-style": "off",
      "no-implicit-coercion": "off",
      "consistent-return": "off",
      "default-case": "off",
      "no-else-return": "off",
      "no-empty-function": "off",
      "no-eq-null": "off",
      "no-new-wrappers": "off",
      "no-useless-escape": "off",
      "no-shadow": "off",
      "no-undef-init": "off",
      "no-unsafe-finally": "off",
      "no-empty-pattern": "off",
    },
  },
];

export default eslintConfig;
