import { defineConfig } from 'tsdown'

export default defineConfig({
    target: 'es2020',
    format: ['cjs', 'esm'],
    sourcemap: true,
    clean: true,
    dts: true,

    entry: ['src/index.ts'],
    unbundle: true,
    // .js/.cjs and .d.ts/.d.cts as before tsdown 0.15, not .mjs/.d.mts: the paths in
    // package.json "exports" stay the same for consumers
    fixedExtension: false,
})
