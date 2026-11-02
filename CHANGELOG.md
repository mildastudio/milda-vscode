# Changelog

## 0.3.0

- The bundled language server speaks surface 0.10. Padding can be stated on one axis or one edge:
  `inset.inline`, `inset.block`, `inset.inline-start`, `inset.inline-end`, `inset.block-start` and
  `inset.block-end`, beside the bare `inset`. Edges are logical, and the physical words
  (`inset.left`) are read with a warning that names the logical one.
- Surface 0.9 is in too: what a part is, said where it is named - `part Button: container {` - and
  `locked` gone from the language (the archetype decides which parts are required).
- Completion offers the new inset names after a facet position, with the facet's description.

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
