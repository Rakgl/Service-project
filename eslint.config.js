export default {
  ignores: ['dist'],
  languageOptions: {
    ecmaVersion: 2020,
    parserOptions: {
      ecmaVersion: 'latest',
      ecmaFeatures: { jsx: true },
      sourceType: 'module',
    },
  },
  settings: { react: { version: '18.3' } },
  rules: {
  },
};
