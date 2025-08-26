# Copy Path With Lines - Sublime Text Plugin

A simple Sublime Text plugin that copies the current file path with line number references to your clipboard.

## Features

- Copy file paths with line number references
- Single line selection: `/full/path/to/file.py:12`
- Multi-line selection: `/full/path/to/file.py:23-47`
- Supports multiple selections (comma-separated)
- Shows status message with copied content

## Installation

1. Open Sublime Text
2. Go to `Preferences` → `Browse Packages...` to open your Packages directory
3. Copy `copy_path_with_lines.py` into the `User` folder
4. The plugin is ready to use (no restart needed)

## Usage

### Setting Up a Keyboard Shortcut

1. Go to `Preferences` → `Key Bindings`
2. Add this to your user key bindings (right side):
   ```json
   {
     "keys": ["super+shift+alt+c"],  // Mac: Cmd+Shift+Alt+C
     "command": "copy_path_with_lines"
   }
   ```
   
   For Windows/Linux, use `"ctrl+shift+alt+c"` instead of `"super+shift+alt+c"`

### Using Command Palette

You may want to add the command to your Command Palette. Add this to your `Default.sublime-commands` file in the plugin directory:

```json
[
  {
    "caption": "Copy Path With Lines",
    "command": "copy_path_with_lines"
  }
]
```

1. Open Command Palette (`Cmd+Shift+P` on Mac, `Ctrl+Shift+P` on Windows/Linux)
2. Type "Copy Path With Lines"
3. Press Enter


## How It Works

The plugin:
1. Gets the current file's fully qualified path
2. Determines the line numbers of your selection(s)
3. Formats the output as `path:line` or `path:start-end`
4. Copies to clipboard and shows a status message

### Multiple Selections

If you have multiple selections in the same file, they'll be copied as:
```
/path/to/file.py:12, /path/to/file.py:25-30, /path/to/file.py:45
```

## Customization

The plugin uses fully qualified paths by default. There's commented code in the source that shows how to use relative paths instead if you prefer. Simply uncomment lines 18-25 in `copy_path_with_lines.py` and comment out line 15.

## Project Structure

```
CopyPathWithLines/
├── copy_path_with_lines.py    # Main plugin code
├── README.md                  # This file
└── LICENSE                    # MIT License
```

## Requirements

- Sublime Text 3 or 4
- No additional packages required (uses only Sublime's built-in API)

## License

MIT License - see [LICENSE](LICENSE) file for details

## Contributing

Feel free to fork and customize this plugin for your needs. This is a simple utility plugin designed for personal use.

## Troubleshooting

If the plugin doesn't work:
1. Check that the file is saved (unsaved files have no path)
2. Verify the plugin is in the correct Packages directory
3. Try restarting Sublime Text
4. Check the Sublime Text console for errors (`View` → `Show Console`)
