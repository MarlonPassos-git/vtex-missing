# Jest VTEX IO

This package offers a set of utilities designed to streamline the testing process for your VTEX IO apps.

## Installation

```sh
yarn add --dev @vtex-miss/jest-vtex-io
```

## Motivation

As someone working daily with VTEX IO projects, maintaining reliability is crucial. Even though the nature of VTEX IO may require using some outdated dependencies, it's essential to keep your project as stable as possible. 

We were unable to update everyone due to platform limitations, but what was possible, we updated

This package aims to facilitate testing config in VTEX IO project

## Why not use the vtex-test-tools library?

The vtex-test-tools library hasn't seen any updates since 2021. Depending on your VTEX IO project's configuration, installing the latest version might break it. Even if you opt for an older version of the library, the tool's main dependency (Jest v25) is outdated, limiting the use of features from Jest versions 27, which are compatible with VTEX IO.

Additionally, vtex-test-tools imposes restrictions on extending the configurations they export.

## Features

### Jest Configuration

Simplify your Jest configuration with easy-to-use presets.

Extend your Jest configuration adding the following to your `jest.config.js|ts|mjs|cjs` file:

### React

```js
import config from "@vtex-miss/jest-vtex-io/preset/react";

export default {
  ...config,
};
```

### Node

```js
import config from "@vtex-miss/jest-vtex-io/preset/node";

export default {
  ...config,
};
```

With these presets, you can avoid the tedious process of manually configuring your Jest setup. Keep your focus on writing tests and building reliable VTEX IO apps.