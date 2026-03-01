module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', 'build', '.eslintrc.cjs', '.react-router'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
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
