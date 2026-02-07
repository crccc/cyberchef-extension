# Installation Guide for CyberChef Chrome Extension

## Prerequisites
- Google Chrome browser (version 114 or later for Side Panel API support)
- Basic knowledge of Chrome extension installation

## Installation Steps

### 1. Get the Extension Files
- Clone this repository or download the ZIP file
- Extract to a local directory if downloaded as ZIP

### 2. Enable Developer Mode in Chrome
1. Open Google Chrome
2. Navigate to `chrome://extensions/`
3. Toggle "Developer mode" switch in the top right corner

### 3. Load the Extension
1. Click the "Load unpacked" button
2. Navigate to the `cyberchef-extension` directory
3. Click "Select Folder"

### 4. Verify Installation
- You should see "CyberChef Extension" in your extensions list
- The extension icon should appear in your Chrome toolbar

## First Use

### Opening the Side Panel
1. Click the extension icon in the Chrome toolbar
2. The side panel will open on the right side of your browser

### Using Manual Input Mode
1. Open the side panel
2. Ensure "Manual Paste" is selected
3. Type or paste text into the input field
4. Select a recipe from the dropdown
5. Click "🍳 Cook"
6. View the result in the output field

### Using Right-Click Selection Mode
1. Navigate to any webpage
2. Select any text on the page
3. Right-click on the selected text
4. Choose "Cyber Cook" from the context menu
5. The side panel will open with the selected text in the input field
6. Select a recipe from the dropdown
7. Click "🍳 Cook"
8. View the result in the output field

## Testing the Extension

A test page (`test.html`) is included with sample text for testing different operations:
1. Open `test.html` in Chrome
2. Follow the instructions on the page
3. Test different recipes with the provided sample text

## Troubleshooting

### Extension icon not appearing
- Make sure you're using Chrome version 114 or later
- Refresh the extensions page (`chrome://extensions/`)
- Try reloading the extension

### Side panel not opening
- Check if Side Panel API is supported in your Chrome version
- Some Chrome versions may require enabling experimental features

### Context menu not showing
- Refresh the page after installing the extension
- Make sure you have text selected when right-clicking

### Operations not working
- Check the browser console for any JavaScript errors
- Make sure your input is valid for the selected operation
- Try a different recipe to isolate the issue

## Supported Chrome Versions
- Chrome 114+ (Side Panel API requirement)
- Works best on latest stable Chrome release

## Privacy & Permissions

This extension requires the following permissions:
- `sidePanel`: To display the side panel interface
- `contextMenus`: To add the "Cyber Cook" option to the right-click menu
- `activeTab`: To access selected text from web pages
- `scripting`: To interact with page content

All processing is done locally in your browser. No data is sent to external servers.
