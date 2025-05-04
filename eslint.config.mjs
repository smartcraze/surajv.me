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
      // Disable only the problematic rules for now
      "react/no-unescaped-entities": "off", // This is for unescaped quotes in JSX
      "@typescript-eslint/no-unused-vars": "off", // For unused variables (e.g. 'index' defined but not used)
      "@typescript-eslint/no-explicit-any": "off", // For usage of 'any' type
      "prefer-const": "off", // For variables that aren't reassigned (e.g. 'mouseX' and 'mouseY')
      "no-var": "off", // For usage of 'var'
      "no-console": "off", // To allow console logs if needed
      "react/prop-types": "off", // Disable prop-types check (if you're using TypeScript)
      "react/jsx-no-undef": "off", // For undefined JSX elements
      "react/jsx-uses-vars": "off", // Disable variable usage warning for JSX
      "react/react-in-jsx-scope": "off", // To suppress React scope warnings in JSX
    },
  },
];

export default eslintConfig;
