import { defineConfig } from 'tsup'

export default defineConfig({
  entryPoints: [
    "src/index.ts",
    "src/catalog-api/*.ts",
  ],
  format: ["cjs", "esm"],
  dts: true,
  external: ["react"]
})