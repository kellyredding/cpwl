# Copy Path With Lines (CPWL)

A collection of editor plugins that copy file paths with line number references to your clipboard - perfect for sharing code locations with teammates or documenting code references.

## Overview

When working on code, you often need to share specific file locations with others - whether in pull requests, documentation, issues, or chat. These plugins make it easy to copy a file path along with the line numbers you have selected, formatted as:

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

## Use Cases

- **Code Reviews**: Share exact line references in PR comments
- **Documentation**: Reference specific code locations in docs
- **Issue Tracking**: Point to the exact location of bugs
- **Team Communication**: Share code locations in Slack/Teams
- **Personal Notes**: Keep track of important code sections

## Features

- 📍 **Precise References**: Copy exact line numbers or ranges
- ⚡ **Fast Access**: Single keyboard shortcut
- 🔧 **Customizable**: Change keybindings to your preference
- 📋 **Clipboard Ready**: Instantly pasteable anywhere
- 💬 **Feedback**: Visual confirmation of what was copied

## Contributing

Feel free to fork and customize either plugin for your needs. These are simple utility plugins designed for personal use but can be extended as needed.

## License

MIT License - see individual plugin directories for details

## Author

Created by Kelly Redding