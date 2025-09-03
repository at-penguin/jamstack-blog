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
            // Enforce strict typing - no any allowed
            "@typescript-eslint/no-explicit-any": "error",
            "@typescript-eslint/no-empty-object-type": "off",
            "@typescript-eslint/triple-slash-reference": "off",
        },
    },

    // Type definition files - allow any for compatibility
    {
        files: ["**/*.d.ts"],
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
        },
    },

    // Astro specific overrides
    ...eslintPluginAstro.configs.recommended,
]
