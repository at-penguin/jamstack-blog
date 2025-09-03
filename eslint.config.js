import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import eslintPluginAstro from "eslint-plugin-astro"

export default [
    // Global ignores
    {
        ignores: [".astro/**", "dist/**", "node_modules/**", "*.d.ts", ".astro/", "**/*.d.ts", "**/*.astro"],
    },

    // JavaScript/TypeScript files
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
        ...js.configs.recommended,
        languageOptions: {
            globals: globals.browser,
        },
    },

    // TypeScript configuration
    ...tseslint.configs.recommended,

    // TypeScript specific overrides
    {
        files: ["**/*.ts", "**/*.tsx"],
        rules: {
            // Allow any type in type definition files and auto-generated files
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-empty-object-type": "off",
            "@typescript-eslint/triple-slash-reference": "off",
        },
    },

    // Astro specific overrides
    ...eslintPluginAstro.configs.recommended,
    {
        files: ["**/*.astro"],
        rules: {
            "astro/no-set-html-directive": "error",
        },
    },
]
