module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:compat/recommended',
  ],
  ignorePatterns: ['dist', 'build', '.eslintrc.cjs', '.react-router'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.scripts.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh'],
  rules: {
    '@typescript-eslint/no-deprecated': 'warn',
    'react-refresh/only-export-components': [
      'warn',
      {
        allowConstantExport: true,
        allowExportNames: [
          'meta',
          'links',
          'headers',
          'loader',
          'clientLoader',
          'action',
          'clientAction',
          'ErrorBoundary',
          'HydrateFallback',
          'Layout',
          'handle',
          'shouldRevalidate',
        ],
      },
    ],
  },
};
