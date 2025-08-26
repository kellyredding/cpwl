# Copy Path With Lines

A simple VSCode extension that copies the current file path with line number references to your clipboard.

## Features

- Copy file paths with line number references
- Single line selection: `/full/path/to/file.rb:12`
- Multi-line selection: `/full/path/to/file.rb:23-47`
- Works in VSCode and VSCode-based IDEs (Cursor, etc.)
- Customizable keyboard shortcut

## Installation

### Install from VSIX Package

1. Download the `copy-path-with-lines-0.0.1.vsix` file
2. Open VSCode or Cursor
3. Open Command Palette (`Cmd+Shift+P` on Mac, `Ctrl+Shift+P` on Windows/Linux)
4. Type "Extensions: Install from VSIX..."
5. Navigate to the `.vsix` file and select it

Or install via command line:
```bash
code --install-extension copy-path-with-lines-0.0.1.vsix
```

## Usage

### Keyboard Shortcut
- **Mac**: `Cmd+Shift+Alt+C`
- **Windows/Linux**: `Ctrl+Shift+Alt+C`

### Command Palette
1. Open Command Palette (`Cmd+Shift+P` or `Ctrl+Shift+P`)
2. Type "Copy Path With Lines"
3. Press Enter

### Customizing the Keyboard Shortcut

To change the keyboard shortcut after installation:
1. Open Command Palette
2. Type "Preferences: Open Keyboard Shortcuts"
3. Search for "Copy Path With Lines"
4. Click the pencil icon next to the command
5. Press your desired key combination
6. Press Enter to save

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm

### Setup and Build

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd copy-path-with-lines
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Compile TypeScript:
   ```bash
   npm run compile
   ```

### Making Changes

1. Edit the source code in `src/extension.ts`
2. To change the default keybinding, edit `package.json`:
   ```json
   "keybindings": [
     {
       "command": "copy-path-with-lines.copyPathWithLines",
       "key": "ctrl+shift+alt+c",
       "mac": "cmd+shift+alt+c",  // Change this for Mac
       "when": "editorTextFocus"
     }
   ]
   ```

3. Recompile after changes:
   ```bash
   npm run compile
   ```

### Packaging

To create a new VSIX package after making changes:

1. Install the VSCode Extension manager (one-time setup):
   ```bash
   npm install -g @vscode/vsce
   ```

2. Package the extension:
   ```bash
   vsce package
   ```

This will create a new `.vsix` file in the project directory that can be installed locally.

### Watch Mode (for development)

To automatically recompile on file changes:
```bash
npm run watch
```

## Project Structure

```
copy-path-with-lines/
├── src/
│   └── extension.ts       # Main extension code
├── out/                   # Compiled JavaScript (generated)
├── package.json           # Extension manifest
├── tsconfig.json          # TypeScript configuration
├── .vscodeignore          # Files to exclude from package
└── README.md              # This file
```

## License

MIT License - see [LICENSE](LICENSE) file for details

## Contributing

Feel free to fork this project and customize it for your needs. This is a simple utility extension designed for personal use.

## Issues

If you encounter any problems, please check that:
1. You have an active text editor open
2. You have text selected (or cursor positioned)
3. The extension is properly installed and enabled
