# Copy Path With Lines (CPWL)

A collection of editor plugins that copy file paths with line number references to your clipboard; perfect for referencing code locations with AI agents.

## Overview

When working on code, you often need to reference specific file locations. These plugins make it easy to copy a file path along with the line numbers you have selected, formatted as:

- Single line: `/full/path/to/file.rb:42`
- Multiple lines: `/full/path/to/file.rb:23-47`

## Available Plugins

### [VSCode Extension](vscode/copy-path-with-lines/)

Full-featured VSCode/Cursor extension with:
- TypeScript implementation
- Customizable keybindings
- Command palette integration
- VSIX package for easy installation

[→ VSCode Installation & Usage](vscode/copy-path-with-lines/README.md)

### [Sublime Text Plugin](sublime/)

Lightweight Sublime Text plugin with:
- Python implementation
- Multiple selection support
- Simple drop-in installation
- Status bar notifications

[→ Sublime Text Installation & Usage](sublime/README.md)

## Quick Start

Both plugins use the same default keyboard shortcut:
- **Mac**: `Cmd+Shift+Alt+C`
- **Windows/Linux**: `Ctrl+Shift+Alt+C`

## Contributing

Feel free to fork and customize either plugin for your needs. These are simple utility plugins designed for personal use.

## License

MIT License - see individual plugin directories for details
