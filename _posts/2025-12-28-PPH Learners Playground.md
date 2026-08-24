# PPH Learners Playground

A lightweight, offline-first web-based code editor for Prime Programmers Hub learners. Write, debug, and preview HTML, CSS, and JavaScript instantly—no internet required.

## Features

- **Three Editors in One**: Separate tabs for HTML, CSS, and JavaScript
- **Live Preview**: See your code run instantly in the preview pane
- **Syntax Highlighting**: Smart coloring with Prism.js (HTML, CSS, JS)
- **Line Numbers**: Synchronized gutter that stays aligned with your code
- **Offline Ready**: No CDNs or external dependencies
- **Dark/Light Theme**: Automatically follows your system theme with manual toggle
- **Export**: Download your work as a standalone HTML file
- **Keyboard Shortcuts**: `Ctrl/Cmd + Enter` to run, `Tab` for indentation

## 🛠️ Quick Start

1. **Open**: Double-click `index.html` in your browser
2. **Code**: Switch between HTML, CSS, and JS tabs
3. **Run**: Click the **▶ Run** button or press `Ctrl/Cmd + Enter`
4. **Theme**: Click **🌓** to toggle between System, Dark, and Light themes
5. **Save**: Click **⬇ Download** to export your code as `index.html`

## Project Structure

```
PPH-Learners-Playground/
├── index.html      # Main UI
├── style.css       # Layout & theming
├── script.js       # Editor logic & features
├── prism.css       # Syntax highlighting styles
└── prism.js        # PrismJS engine
```

## Theme System

| Mode | Description |
|------|-------------|
| **System** | Follows your device theme |
| **Dark** | Dark background, light text |
| **Light** | Light background, dark text |

Your theme preference is saved automatically.

## How It Works

The editor uses a layered approach:
- **Top layer**: Transparent textarea for typing
- **Bottom layer**: Highlighted code from Prism.js
- **Sync engine**: Keeps scroll and line numbers perfectly aligned

## Credits

Developed for **Prime Programmers Hub (PPH)** learners.  
Maintained by **Agunechemba Ekene**.
