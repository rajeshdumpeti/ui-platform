// fix-build.js
import fs from 'fs';
import path from 'path';

const buildDir = './storybook-static';

// Read the actual content from iframe.html
const iframeContent = fs.readFileSync(path.join(buildDir, 'iframe.html'), 'utf8');

// Overwrite index.html with the actual content
fs.writeFileSync(path.join(buildDir, 'index.html'), iframeContent);

console.log('Fixed index.html for GitHub Pages deployment');