const fs = require('fs');
const path = require('path');

const replacements = [
  { regex: /bg-\[\#0a0a0a\]/g, replacement: 'bg-white' },
  { regex: /bg-\[\#050505\]/g, replacement: 'bg-gray-50' },
  { regex: /bg-\[\#111\]/g, replacement: 'bg-white' },
  { regex: /bg-\[\#111111\]/g, replacement: 'bg-white' },
  { regex: /bg-\[\#030303\]/g, replacement: 'bg-gray-50' },
  { regex: /bg-\[\#010101\]/g, replacement: 'bg-gray-100' },
  { regex: /bg-\[\#0f0f0f\]/g, replacement: 'bg-gray-50' },
  { regex: /bg-\[\#000000\]/g, replacement: 'bg-white' },
  { regex: /bg-\[\#000\]/g, replacement: 'bg-white' },
  { regex: /from-black/g, replacement: 'from-white' },
  { regex: /via-black/g, replacement: 'via-white' },
  { regex: /to-black/g, replacement: 'to-white' }
];

function processDirectory(directory) {
  fs.readdirSync(directory).forEach(file => {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      replacements.forEach(({ regex, replacement }) => {
        content = content.replace(regex, replacement);
      });
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated hex colors in ${fullPath}`);
      }
    }
  });
}

processDirectory('/Users/CTS11336/Apps/hexon-revamp/src');
console.log('Done replacing dark hex colors.');
