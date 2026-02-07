// Background service worker for CyberChef extension

// Open side panel when extension icon is clicked
chrome.action.onClicked.addListener((tab) => {
  chrome.sidePanel.open({ windowId: tab.windowId });
});

// Create context menu item
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'cyberCook',
    title: 'Cyber Cook',
    contexts: ['selection']
  });
});

// Handle context menu click
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'cyberCook') {
    // Send selected text to side panel
    chrome.runtime.sendMessage({
      type: 'SELECTED_TEXT',
      text: info.selectionText
    });
    
    // Open side panel
    chrome.sidePanel.open({ windowId: tab.windowId });
  }
});
