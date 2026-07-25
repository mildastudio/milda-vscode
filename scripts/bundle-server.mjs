// Copies the Milda language server bundle into ./server so the extension can launch
// it at runtime. Prefers the installed @mildastudio/milda-lsp (standalone repo /
// production), falling back to the monorepo workspace build.
import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..')

const candidates = [
  join(root, 'node_modules', '@mildastudio', 'milda-lsp', 'dist', 'index.cjs'),
  join(root, '..', 'milda-lsp', 'dist', 'index.cjs'), // monorepo workspace sibling
]

const src = candidates.find((p) => existsSync(p))
if (!src) {
  console.error(
    'milda-lsp server bundle not found. Run `npm install` (standalone) or ' +
      '`npm run build -w @mildastudio/milda-lsp` (monorepo) first.\nLooked in:\n  ' +
      candidates.join('\n  '),
  )
  process.exit(1)
}

const outDir = join(root, 'server')
mkdirSync(outDir, { recursive: true })
copyFileSync(src, join(outDir, 'milda-lsp.cjs'))
console.log(`bundled server ← ${src}`)
