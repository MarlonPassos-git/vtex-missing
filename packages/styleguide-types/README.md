# Motivation

In my day to day work with VTEX IO I use the lib `vtex.styleguide` a lot and i like to use Typescript, but the lib doesn't have all types defined. The oficial lib looks like than stoped to be maintained, so i decided to create this lib to help me and maybe help you too.

# Usage

Access you react directory and install the lib:

```sh
yarn add @vtex-miss/styleguide-types
```

How this lib is only types, you need to guarantee that the lib `vtex.styleguide@6.x` is in your `manifest.json` in your VTEX IO APP.

```json
{
  "dependencies": {
    // ...
    "vtex.styleguide": "6.x"
  }
}
```
