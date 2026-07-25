// Bundles the extension into dist/extension.js. `vscode` is provided by the host and
// must stay external; everything else (vscode-languageclient) is bundled so the
// packaged .vsix needs no node_modules.
import { build } from 'esbuild'

const production = process.argv.includes('--production')

await build({
  entryPoints: ['src/extension.ts'],
  bundle: true,
  outfile: 'dist/extension.js',
  external: ['vscode'],
  format: 'cjs',
  platform: 'node',
  target: 'node20',
  sourcemap: !production,
  minify: production,
  logLevel: 'info',
})
