# ne ascii

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Platform](https://img.shields.io/badge/platform-Windows-lightgrey)

A modern minimalist desktop application for converting images to ASCII art using Braille characters.

## Features

- Convert PNG, JPG, and WEBP images to ASCII art
- Braille character-based rendering for detailed output
- Export ASCII art as PNG image
- Copy ASCII text to clipboard
- Pure monochrome minimalist interface
- Frameless window with custom controls
- Resizable window (minimum 680x700, default 1000x900)
- Fast local processing - no external API calls

## Download

Get the latest release from the [Releases](https://github.com/HeliTeam/Ne-ascii/releases) page.

**Requirements:** Windows 10/11 x64

## Installation

1. Download `ne-ascii-v1.0.0-win-x64.zip`
2. Extract the archive to your preferred location
3. Run `ne ascii.exe`

No installation required - fully portable.

## Tech Stack

- **Frontend:** React 18, Tailwind CSS
- **Desktop:** Electron 28
- **Build:** Vite 5
- **Export:** html2canvas

## Development

Clone the repository:
```bash
git clone https://github.com/HeliTeam/Ne-ascii.git
cd Ne-ascii
```

Install dependencies:
```bash
npm install
```

Run in development mode:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

The built executable will be in the `dist/win-unpacked` folder.

## Project Structure

```
src/
  main/
    main.js              - Electron main process
    preload.js           - IPC context bridge
  renderer/
    App.jsx              - Main application component
    components/
      TitleBar.jsx       - Custom window controls
      ShinyText.jsx      - Animated text component
      LoadingScreen.jsx  - Initial loading screen
      ProgressBar.jsx    - Conversion progress indicator
      AsciiPreview.jsx   - ASCII art preview display
    utils/
      asciiConverter.js  - Image to ASCII conversion logic
    index.css            - Global styles and animations
    index.jsx            - React entry point
```

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Author

Created by [Klieer](https://github.com/klieer1337)

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the [issues page](https://github.com/HeliTeam/Ne-ascii/issues) if you want to contribute.

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/HeliTeam/Ne-ascii/issues).

## ⭐ Show your support

Give a ⭐️ if this project helped you!

