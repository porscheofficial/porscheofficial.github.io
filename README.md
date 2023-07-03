# Porsche Open Source Platform

The Porsche Open Source Platform (POSP) is a static website generated with [Next.js 13](https://nextjs.org/) and the [Porsche Design System](https://designsystem.porsche.com/v3/).
The POSP is a one-stop shop for all open-source activities of Porsche AG and subsidiaries, featuring selected projects and providing documentation on our FOSS best practices.

## 🛠️ Run Locally

Clone the project

```bash
  git clone https://github.com/porscheofficial/porscheofficial.github.io.git
```

Go to the project directory

```bash
  cd porscheofficial.github.io
```

Install all dependencies

```bash
  yarn install
```

Start the development server

```bash
  yarn dev
```

## 🔍 Testing, Linting and Prettifying

We're using the [opinionated ESLint config](https://github.com/porscheofficial/eslint-config-porschedigital) provided by [Porsche Digital](https://www.porsche.digital/). To check your local changes, simply call

```bash
yarn test:ci
```

### Check A11y

To ensure the accessibility of the website, we're using dedicated ESLint rules,
as well as automated accessibility checks with [axe-core](https://github.com/dequelabs/axe-core).

ESLint runs automatically after each commit via GitHub Action. Locally it can be called via

```bash
yarn test:ci
```

To run axe-core on the deployed website, we're using a dedicated GitHub Action.
To run them from local, simply call

```bash
yarn playwright:run
```

### Check Lighthouse Performance Score

We have a dedicated GitHub Action to check the Lighthouse Performance Score of the deployed website.
Simply call the respective GitHub Action to run the checks.

## 🏁 Building for Deployment

To locally simulate a production build, simply call

```bash
yarn build
```

To run a production build locally, simply call

```bash
yarn start
```

## ✨ Contributing

Thanks for your interest in contributing to our Porsche Open Source Platform!

See [CONTRIBUTING.md](./CONTRIBUTING.md) on how to get started.

## 🙌 Acknowledgements

This project is a joint initiative of [Porsche AG](https://www.porsche.com) and [Porsche Digital](https://www.porsche.digital/).

## ✒️ License

This project is licensed under the Apache 2.0 license. See [LICENSE.md](./LICENSE.md) for more details.
