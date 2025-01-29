<div align="center">
  <a target="_blank" rel="noopener noreferrer" href="https://opensource.porsche.com">
    <img src="https://github.com/porscheofficial/porscheofficial.github.io/blob/dd4b80e2eb5bab6c8fd9478220050e9ce6a0217f/src/app/opengraph-image.jpg" alt="" width="600" />
  </a>
  
# Porsche Open Source Platform

![GitHub](https://img.shields.io/github/license/porscheofficial/porscheofficial.github.io)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/porscheofficial/porscheofficial.github.io/oso-repolinter.yml?label=OSO%20Repolinter)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/porscheofficial/porscheofficial.github.io/e2e-tests.yml?label=End-to-end%20Testing)
![GitHub deployments](https://img.shields.io/github/deployments/porscheofficial/porscheofficial.github.io/github-pages?label=GitHub%20Pages%20Deployment)

_The Porsche Open Source Platform (POSP) is a static website generated with [Next.js 13](https://nextjs.org/) and the [Porsche Design System](https://designsystem.porsche.com/v3/).
The POSP is a one-stop shop for all open-source activities of Porsche AG and subsidiaries, featuring selected projects and providing documentation on our FOSS best practices._

</div>

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

The Porsche Open Source Platform is openly developed in the wild and contributions (both internal and external) are highly appreciated.
See [CONTRIBUTING.md](./CONTRIBUTING.md) on how to get started.

If you have feedback or want to propose a new feature, please [open an issue](https://github.com/porscheofficial/porscheofficial.github.io/issues),
which will then be monitored/prioritized in our open [GitHub Project board](https://github.com/orgs/porscheofficial/projects/2).

## 🙌 Acknowledgements

This project is a joint initiative of [Porsche AG](https://www.porsche.com) and [Porsche Digital](https://www.porsche.digital/).

## ✒️ License

Copyright © 2025 Dr. Ing. h.c. F. Porsche AG

Dr. Ing. h.c. F. Porsche AG publishes the Porsche Open Source Platform software and accompanied documentation (if any) subject to the terms of the [MIT license](./LICENSE.md). All rights not explicitly granted to you under the MIT license remain the sole and exclusive property of Dr. Ing. h.c. F. Porsche AG.

Apart from the software and documentation described above, the texts, images, graphics, animations, video and audio files as well as all other contents on this website are subject to the legal provisions of copyright law and, where applicable, other intellectual property rights. The aforementioned proprietary content of this website may not be duplicated, distributed, reproduced, made publicly accessible or otherwise used without the prior consent of the right holder.
