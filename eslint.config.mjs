import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

// /** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    {
        plugins: {
            prettier: prettierPlugin
        }
    },
    {
        rules: {
            ...eslintConfigPrettier.rules,
            'prefer-const': 'error',
            'prettier/prettier': [
                'error',
                {
                    semi: false,
                    singleQuote: true,
                    tabWidth: 4,
                    useTabs: false,
                    trailingComma: 'none',
                    bracketSpacing: true,
                    jsxBracketSameLine: false,
                    arrowParens: 'avoid',
                    endOfLine: 'auto'
                }
            ]
        }
    },
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    {
        ignores: ['node_modules', 'dist']
    },
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.browser,
                ...globals.es2022
            }
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended
]
