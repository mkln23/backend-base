const { defineConfig } = require('eslint/config');

const tsParser = require('@typescript-eslint/parser');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const globals = require('globals');
const js = require('@eslint/js');

const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

module.exports = defineConfig([
    {
        languageOptions: {
            parser: tsParser,

            globals: {
                ...globals.node,
            },

            sourceType: 'module',

            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: __dirname,
            },
        },

        plugins: {
            '@typescript-eslint': typescriptEslint,
        },

        extends: compat.extends(
            'eslint:recommended',
            'plugin:@typescript-eslint/recommended',
            'plugin:prettier/recommended',
        ),

        rules: {
            'prettier/prettier': 'error',
            '@typescript-eslint/no-unused-vars': ['error'],
        },
    },
]);
