const { FlatCompat } = require('@eslint/eslintrc');
const compat = new FlatCompat();

module.exports = [
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  ...compat.config({
    root: true,
    overrides: [
      {
        files: ['*.ts'],
        parserOptions: {
          project: ['tsconfig.json'],
          createDefaultProgram: true,
        },
        extends: ['plugin:@angular-eslint/recommended'],
        rules: {},
      },
      {
        files: ['*.html'],
        extends: ['plugin:@angular-eslint/template/recommended'],
        rules: {},
      },
    ],
  }),
];
