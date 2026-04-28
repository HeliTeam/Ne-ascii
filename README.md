# ne ascii

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

Modern minimalist Windows desktop application for converting images to ASCII art using Braille characters.

## ✨ Features

- 🖼️ Convert PNG, JPG, and WEBP images to ASCII art
- ⠂ Uses Braille block character for artistic rendering
- 💾 Download ASCII art as PNG
- 📋 Copy ASCII art to clipboard
- 🎨 Monochrome minimalist design
- 🪟 Frameless window with custom title bar
- 📏 Resizable window (min 680x700, default 1000x900)

## 🚀 Download

Download the latest release from [Releases](https://github.com/HeliTeam/Ne-ascii/releases)

## 🛠️ Tech Stack

- React 18
- Electron 28
- Tailwind CSS
- Vite
- html2canvas

## 💻 Development

Install dependencies:
```bash
npm install
```

Run in development mode:
```bash
npm run dev
```

Build for Windows:
```bash
npm run build
```

The built .exe installer will be in the `dist` folder.

## 📁 Project Structure

```
src/
  main/
    main.js              - Electron main process
    preload.js           - Context bridge
  renderer/
    App.jsx              - Main component
    components/          - React components
      TitleBar.jsx       - Custom window controls
      ShinyText.jsx      - Animated text effect
      LoadingScreen.jsx  - Initial loading screen
      ProgressBar.jsx    - Conversion progress
      AsciiPreview.jsx   - ASCII art display
    utils/
      asciiConverter.js  - Image to ASCII logic
    index.css            - Tailwind + custom styles
    index.jsx            - React entry point
```

## 📝 License

MIT License - feel free to use this project!

## 👤 Author

Created by [Klieer](https://github.com/klieer1337) ♥

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/HeliTeam/Ne-ascii/issues).

## ⭐ Show your support

Give a ⭐️ if this project helped you!

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/HeliTeam/Ne-ascii/issues).

## ⭐ Show your support

Give a ⭐️ if this project helped you!

