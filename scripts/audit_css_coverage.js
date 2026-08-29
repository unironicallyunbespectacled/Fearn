const fs = require('fs');
const path = require('path');

const cssTheme = fs.readFileSync('./theme.css', 'utf8');
const cssComponents = fs.readFileSync('./components.css', 'utf8');
const fullCss = cssTheme + '\n' + cssComponents;

const defined = new Set();
const re = /\.([a-zA-Z0-9_-]+)/g;
let m;
while ((m = re.exec(fullCss)) !== null) {
  defined.add(m[1]);
}

const filesToCheck = [
  './app.html',
  './index.html',
  './ui-components.js',
  './engine.js'
];

const unstyled = new Set();

filesToCheck.forEach(file => {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  const classMatches = content.match(/class(?:Name)?\s*=\s*["'`]([^"'`]+)["'`]/g) || [];
  classMatches.forEach(cm => {
    const raw = cm.replace(/^class(?:Name)?\s*=\s*["'`]/, '').replace(/["'`]$/, '');
    raw.split(/\s+/).forEach(c => {
      if (c && !c.includes('${') && !c.includes('<%') && !defined.has(c)) {
        unstyled.add(c);
      }
    });
  });
});

console.log('Total defined CSS class selectors:', defined.size);
console.log('Total unstyled classes found:', unstyled.size);
if (unstyled.size > 0) {
  console.log('Unstyled classes:', Array.from(unstyled).sort());
} else {
  console.log('[CSS AUDIT PASSED] 100% of referenced classes have matching CSS selectors!');
}
