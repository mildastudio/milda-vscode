# Changelog

## 0.2.0

- The bundled language server speaks surface 0.8: the `part X: kind locked {` header (0055), usage
  rules in two layers (0052), the full layout model - `layers`, `weight(n)`, `ratio(w:h)`, per-axis
  `min`/`max`, `position overlay`/`pinned`/`bleed` with logical edges (0056) - and the icon library
  travelling inside the `.milda` file.
- Highlighting, completion and hover follow the same vocabulary, so every new word is known to the
  editor on the day it is known to the compiler.

## 0.1.0

- Initial release: `.milda` language registration, TextMate syntax highlighting (in
  parity with the language server), file icon, and the bundled `@mildastudio/milda-lsp`
  language server for diagnostics, completion, hover, go-to-definition, outline and
  folding.
