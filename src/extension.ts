// ─── Milda for VS Code — extension entry ──────────────────────────────────────
// Registers the .milda language (highlighting + config come from the manifest's
// TextMate grammar and language-configuration.json) and starts the Milda language
// server for diagnostics, completion, hover, go-to-definition, outline and folding.
//
// The server (@mildastudio/milda-lsp) is bundled into ./server and launched as a
// Node module by VS Code's own runtime (TransportKind.stdio, no --flag needed — the
// server wires stdio explicitly), so the user needs nothing else installed.

import { existsSync } from 'node:fs'
import * as path from 'node:path'
import { workspace, type ExtensionContext, window } from 'vscode'
import { LanguageClient, type LanguageClientOptions, type ServerOptions, TransportKind } from 'vscode-languageclient/node'

let client: LanguageClient | undefined

function resolveServerModule(context: ExtensionContext): string | undefined {
  // An explicit override wins (pin a specific server build).
  const override = workspace.getConfiguration('milda').get<string>('server.path')?.trim()
  if (override) {
    if (existsSync(override)) return override
    window.showWarningMessage(`Milda: configured server path does not exist, using the bundled server: ${override}`)
  }
  // Otherwise the version bundled with the extension.
  const bundled = context.asAbsolutePath(path.join('server', 'milda-lsp.cjs'))
  return existsSync(bundled) ? bundled : undefined
}

export function activate(context: ExtensionContext): void {
  const serverModule = resolveServerModule(context)
  if (!serverModule) {
    window.showErrorMessage('Milda: language server not found. Highlighting works, but IntelliSense is unavailable.')
    return
  }

  // VS Code's runtime runs the module (ELECTRON_RUN_AS_NODE); no external Node needed.
  const serverOptions: ServerOptions = {
    run: { module: serverModule, transport: TransportKind.stdio },
    debug: { module: serverModule, transport: TransportKind.stdio },
  }

  const clientOptions: LanguageClientOptions = {
    documentSelector: [{ scheme: 'file', language: 'milda' }],
    synchronize: {
      // The server reads sibling .milda files for cross-file analysis.
      fileEvents: workspace.createFileSystemWatcher('**/*.milda'),
    },
  }

  client = new LanguageClient('milda', 'Milda Language Server', serverOptions, clientOptions)
  client.start()
}

export function deactivate(): Thenable<void> | undefined {
  return client?.stop()
}
