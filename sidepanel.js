// Side panel JavaScript with CyberChef-compatible API
// Using crypto-js library for cryptographic operations (loaded from crypto-js.js)

// CyberChef-compatible operations using standard libraries and crypto-js
const CyberChefOperations = {
  base64encode: (input) => btoa(input),
  
  base64decode: (input) => {
    try {
      return atob(input);
    } catch (e) {
      return 'Error: Invalid Base64 input';
    }
  },
  
  urlEncode: (input) => encodeURIComponent(input),
  
  urlDecode: (input) => {
    try {
      return decodeURIComponent(input);
    } catch (e) {
      return 'Error: Invalid URL encoded input';
    }
  },
  
  hexEncode: (input) => {
    return Array.from(input)
      .map(c => c.charCodeAt(0).toString(16).padStart(2, '0'))
      .join('');
  },
  
  hexDecode: (input) => {
    try {
      const hex = input.replace(/\s/g, '');
      let result = '';
      for (let i = 0; i < hex.length; i += 2) {
        result += String.fromCharCode(parseInt(hex.substring(i, i + 2), 16));
      }
      return result;
    } catch (e) {
      return 'Error: Invalid hex input';
    }
  },
  
  rot13: (input) => {
    return input.replace(/[a-zA-Z]/g, (c) => {
      const code = c.charCodeAt(0);
      const base = code >= 97 ? 97 : 65;
      return String.fromCharCode(((code - base + 13) % 26) + base);
    });
  },
  
  reverse: (input) => input.split('').reverse().join(''),
  
  toUpperCase: (input) => input.toUpperCase(),
  
  toLowerCase: (input) => input.toLowerCase(),
  
  // Using crypto-js for hash operations (CyberChef-compatible)
  md5: async (input) => {
    return CryptoJS.MD5(input).toString();
  },
  
  sha1: async (input) => {
    return CryptoJS.SHA1(input).toString();
  },
  
  sha256: async (input) => {
    return CryptoJS.SHA256(input).toString();
  }
};

// DOM elements
const recipeSelect = document.getElementById('recipe');
const inputTextarea = document.getElementById('input');
const outputTextarea = document.getElementById('output');
const cookBtn = document.getElementById('cookBtn');
const inputModeRadios = document.querySelectorAll('input[name="inputMode"]');

// Listen for messages from background script (context menu selection)
if (typeof chrome !== 'undefined' && chrome.runtime) {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'SELECTED_TEXT') {
      inputTextarea.value = message.text;
      // Automatically set to context menu mode
      document.querySelector('input[name="inputMode"][value="contextMenu"]').checked = true;
    }
  });
}

// Cook button click handler
cookBtn.addEventListener('click', async () => {
  const recipe = recipeSelect.value;
  const input = inputTextarea.value;
  
  if (!input.trim()) {
    outputTextarea.value = 'Error: Please provide input';
    return;
  }
  
  try {
    const operation = CyberChefOperations[recipe];
    if (!operation) {
      outputTextarea.value = 'Error: Operation not found';
      return;
    }
    
    // Show processing indicator
    outputTextarea.value = 'Processing...';
    cookBtn.disabled = true;
    
    // Execute operation
    const result = await operation(input);
    outputTextarea.value = result;
  } catch (error) {
    outputTextarea.value = `Error: ${error.message}`;
  } finally {
    cookBtn.disabled = false;
  }
});

// Allow Enter key in input to trigger cook
inputTextarea.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'Enter') {
    cookBtn.click();
  }
});

// Update placeholder based on input mode
inputModeRadios.forEach(radio => {
  radio.addEventListener('change', (e) => {
    if (e.target.value === 'manual') {
      inputTextarea.placeholder = 'Enter or paste your text here';
    } else {
      inputTextarea.placeholder = 'Right-click selected text and choose "Cyber Cook" to auto-fill';
    }
  });
});
