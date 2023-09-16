module.exports = {
  plugins: ['prettier', 'react', 'react-hooks', 'unused-imports', '@typescript-eslint'],
  extends: ['next', 'next/core-web-vitals', 'turbo', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        semi: false,
        endOfLine: 'auto',
      },
    ],
    'new-cap': 'warn',
    'max-len': [
      'warn',
      {
        code: 120,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreTemplateLiterals: true,
      },
    ],
    curly: ['error', 'multi-line'],
    'no-undef': 'error',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-nested-ternary': 'off',
    camelcase: 'off',
    'react/prop-types': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/prefer-stateless-function': 'error',
    'react/destructuring-assignment': 'warn',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-no-script-url': [
      'warn',
      [
        {
          name: 'Link',
          props: ['href'],
        },
      ],
    ],
    'sort-imports': [
      'warn',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['all', 'multiple', 'single', 'none'],
      },
    ],
  },
  globals: {
    Promise: true,
    process: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    linkComponents: [
      'Hyperlink',
      {
        name: 'Link',
        linkAttribute: 'href',
      },
    ],
  },
}
