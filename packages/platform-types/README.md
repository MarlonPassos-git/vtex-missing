# Motivation

In our daily development tasks with the VTEX IO platform, we often encounter specific object structures. When implementing solutions on the front-end or backend, it's common to revisit documentation or repositories just to understand the structure of something.

With this repository, the idea is to streamline this process by providing comprehensive typings for commonly used structures. This enables TypeScript to automatically verify the correctness of these structures, speeding up development by ensuring consistency and precision in implementations.

# Usage

In your code, import the type you want to use:

```ts
import { StorefrontFunctionComponent } from '@vtex/platform-types'

// ...

```

## Available types 

- [StorefrontFunctionComponent](./src/StorefrontFunctionComponent.d.ts) - A React component that can be used in the VTEX IO apps.
- [MasterDataV2Schema](./src/MasterDataV2Schema.d.ts) - A schema used to create MasterData V2 entities. 
