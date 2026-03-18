const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

// Get only top-level HTML files (not blog posts which already have the link)
const files = fs.readdirSync(publicDir)
  .filter(f => f.endsWith('.html'))
  .map(f => path.join(publicDir, f));

let navCount = 0;
let footerCount = 0;

for (const filePath of files) {
  let html = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Add Blog to nav after FAQs (only if not already present)
  if (html.indexOf('href="/blog"') === -1 && html.indexOf('<a href="/faqs" class="nav__link">FAQs</a>') !== -1) {
    html = html.replace(
      '<a href="/faqs" class="nav__link">FAQs</a>',
      '<a href="/faqs" class="nav__link">FAQs</a>\n        <a href="/blog" class="nav__link">Blog</a>'
    );
    navCount++;
    changed = true;
  }

  // Add Blog to footer Company links after Service Areas
  if (html.indexOf('<a href="/blog">Blog</a>') === -1 && html.indexOf('<li><a href="/service-areas">Service Areas</a></li>') !== -1) {
    html = html.replace(
      '<li><a href="/service-areas">Service Areas</a></li>',
      '<li><a href="/service-areas">Service Areas</a></li>\n            <li><a href="/blog">Blog</a></li>'
    );
    footerCount++;
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, html);
  }
}

console.log('Nav updated: ' + navCount + ' files');
console.log('Footer updated: ' + footerCount + ' files');
