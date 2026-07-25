# Milda for VS Code

Language support for the [Milda](https://milda.studio) design-system DSL (`.milda`) —
in VS Code and any editor that installs from [Open VSX](https://open-vsx.org) (Cursor,
Windsurf, VSCodium, …).

## Features

- **Syntax highlighting** — a TextMate grammar kept in lock-step with the language
  server's classifier, so colours appear instantly on open.
- **Diagnostics** — syntactic and cross-file semantic errors as you type.
- **IntelliSense** — completion, hover documentation, and go-to-definition.
- **Navigation** — document outline (breadcrumbs / symbols) and code folding.
- **File recognition + icon** for `.milda`.

The language-server features are powered by [`@mildastudio/milda-lsp`](https://github.com/mildastudio/milda-lsp),
which ships **inside** the extension and runs on VS Code's built-in runtime — nothing
else to install.

## Settings

| Setting | Description |
| --- | --- |
| `milda.server.path` | Absolute path to a `milda-lsp` build to launch instead of the bundled one. Empty = bundled. |
| `milda.trace.server` | `off` \| `messages` \| `verbose` — trace client/server traffic. |

## Highlighter ↔ server parity

The TextMate grammar's keyword / type / colour-function vocabulary is generated from
the same source of truth as the language server (and the JetBrains plugin's lexer), so
the three highlighters can't drift. See the
[`milda-lsp`](https://github.com/mildastudio/milda-lsp) repo.

## License

MIT © Péter Viola
