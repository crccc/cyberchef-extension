# CyberChef Chrome Extension

A Chrome extension that provides a side panel interface for using CyberChef-like operations on text content.

## Features

- **Side Panel Interface**: Opens a convenient side panel for text processing
- **Multiple Recipes**: Support for common encoding/decoding operations:
  - Base64 Encode/Decode
  - URL Encode/Decode
  - Hex Encode/Decode
  - ROT13
  - Reverse
  - Case Conversion (Upper/Lower)
  - Hash Functions (MD5, SHA1, SHA256)

- **Two Input Modes**:
  1. **Manual Paste**: Copy and paste text directly into the input field
  2. **Right-click Selection**: Select text on any webpage, right-click, and choose "Cyber Cook" to automatically copy it to the input field

## Installation

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked"
5. Select the `cyberchef-extension` directory

## Usage

1. Click the extension icon in the Chrome toolbar to open the side panel
2. Select a recipe from the dropdown menu
3. Choose your input mode:
   - **Manual Paste**: Type or paste text into the input field
   - **Right-click Selection**: Select text on a webpage, right-click, and choose "Cyber Cook"
4. Click the "🍳 Cook" button to process the input
5. View the output in the output field at the bottom

### Keyboard Shortcuts

- Press `Ctrl+Enter` in the input field to quickly trigger the Cook operation

## Supported Operations

- **Base64 Encode**: Encode text to Base64
- **Base64 Decode**: Decode Base64 to text
- **URL Encode**: Encode text for URLs
- **URL Decode**: Decode URL-encoded text
- **Hex Encode**: Convert text to hexadecimal
- **Hex Decode**: Convert hexadecimal to text
- **ROT13**: Apply ROT13 cipher
- **Reverse**: Reverse the text
- **To Upper Case**: Convert text to uppercase
- **To Lower Case**: Convert text to lowercase
- **MD5 Hash**: Generate MD5 hash
- **SHA1 Hash**: Generate SHA1 hash
- **SHA256 Hash**: Generate SHA256 hash

## License

ISC License