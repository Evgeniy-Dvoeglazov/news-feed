import prettierConfig from 'eslint-config-prettier/flat';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import { config, configs } from 'typescript-eslint';
import js from '@eslint/js';
import vitestPlugin from '@vitest/eslint-plugin';

const eslintConfig = config(
  {
    name: 'global-ignores',
    ignores: [
      '**/*.snap',
      '**/dist/',
      '**/.yalc/',
      '**/build/',
      '**/temp/',
      '**/.temp/',
      '**/.tmp/',
      '**/.yarn/',
      '**/coverage/',
    ],
  },
  {
    name: `${js.meta.name}/recommended`,
    ...js.configs.recommended,
  },
  configs.strictTypeChecked,
  configs.stylisticTypeChecked,
  vitestPlugin.configs.recommended,
  {
    name: 'eslint-plugin-react/jsx-runtime',
    ...reactPlugin.configs.flat['jsx-runtime'],
  },
  reactHooksPlugin.configs['recommended-latest'],
  {
    name: 'main',
    linterOptions: {
      reportUnusedDisableDirectives: 2,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      vitest: {
        typecheck: true,
      },
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'no-undef': [0],
      'no-console': 'warn',
      '@typescript-eslint/consistent-type-imports': [
        2,
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
          disallowTypeAnnotations: true,
        },
      ],
      'no-restricted-imports': [
        2,
        {
          paths: [
            {
              name: 'react-redux',
              importNames: ['useSelector', 'useStore', 'useDispatch'],
              message: 'Please use pre-typed versions from `src/app/hooks.ts` instead.',
            },
          ],
        },
      ],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', 'lodash', '^\\w', '^@?\\w'],
            ['./services/^(types).', './utils/^(types).', './utils', './actions'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['./constants/.'],
            ['./definitions/.', './types'],
            ['^.+\\.svg', '^.+\\.png$', '^.+\\.jpg', '^.+\\.s?css$'],
          ],
        },
      ],
    },
  },

  prettierConfig,
);

export default eslintConfig;
