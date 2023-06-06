module.exports = {
  root: true,
  extends: [
    "@porscheofficial/eslint-config-porschedigital-react",
    "plugin:@next/next/core-web-vitals",
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  rules: {
    // See https://github.com/vercel/next.js/blob/canary/packages/eslint-config-next/index.js
    "react/react-in-jsx-scope": "off",
    "arrow-body-style": "off",
    "@typescript-eslint/no-magic-numbers": "off",
  },
  overrides: [
    {
      files: ["next.config.js"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
    {
      files: [
        "src/mdx-components.tsx",
        "src/app/**/page.tsx",
        "src/app/**/layout.tsx",
      ],
      rules: {
        "import/no-default-export": "off",
        "import/prefer-default-export": "error",
        "no-underscore-dangle": "off",
        "@typescript-eslint/no-unsafe-assignment": "warn",
      },
    },
  ],
};
