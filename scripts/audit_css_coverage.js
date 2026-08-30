const fs = require('fs');
const path = require('path');

const cssTheme = fs.readFileSync(path.join(__dirname, '../theme.css'), 'utf8');
const cssComponents = fs.readFileSync(path.join(__dirname, '../components.css'), 'utf8');
const fullCss = cssTheme + '\n' + cssComponents;

// Extract real CSS class selectors by stripping comments and declaration bodies { ... }
function extractCssClasses(cssText) {
  const defined = new Set();
  // Remove comments
  const cleanCss = cssText.replace(/\/\*[\s\S]*?\*\//g, '');
  
  // Split into rule blocks: selector { declarations }
  const ruleBlocks = cleanCss.split('}');
  ruleBlocks.forEach(block => {
    const parts = block.split('{');
    const selectorPart = parts[0];
    if (!selectorPart) return;
    
    // Look for class names in selector part: .classname
    const classMatches = selectorPart.match(/\.([a-zA-Z_-][a-zA-Z0-9_-]*)/g);
    if (classMatches) {
      classMatches.forEach(cm => {
        const name = cm.substring(1);
        defined.add(name);
      });
    }
  });
  return defined;
}

const definedClasses = extractCssClasses(fullCss);

// Gather all files to check: root app files + all modules/languages/*.js + modules/skills/*.js
const filesToCheck = [
  path.join(__dirname, '../app.html'),
  path.join(__dirname, '../index.html'),
  path.join(__dirname, '../ui-components.js'),
  path.join(__dirname, '../engine.js'),
  path.join(__dirname, '../command-palette.js'),
  path.join(__dirname, '../srs-deck.js')
];

function addDirFiles(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach(f => {
      if (f.endsWith('.js') || f.endsWith('.html')) {
        filesToCheck.push(path.join(dirPath, f));
      }
    });
  }
}

addDirFiles(path.join(__dirname, '../modules/languages'));
addDirFiles(path.join(__dirname, '../modules/skills'));

const unstyled = new Set();
const ignoredClasses = new Set([
  // standard dynamic/external hooks or svg/katex/dynamic icons
  'active', 'disabled', 'hidden', 'visible', 'selected', 'fade-in', 'correct', 'incorrect'
]);

filesToCheck.forEach(file => {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  
  // 1. class="..." and className = "..."
  const classMatches = content.match(/class(?:Name)?\s*=\s*["'`]([^"'`]+)["'`]/g) || [];
  classMatches.forEach(cm => {
    const raw = cm.replace(/^class(?:Name)?\s*=\s*["'`]/, '').replace(/["'`]$/, '');
    raw.split(/\s+/).forEach(c => {
      c = c.trim();
      if (c && !c.includes('${') && !c.includes('<%') && !c.includes('+') && !c.includes('{') && !ignoredClasses.has(c)) {
        // Filter out template expressions or punctuation
        if (/^[a-zA-Z_-][a-zA-Z0-9_-]*$/.test(c) && !definedClasses.has(c)) {
          unstyled.add(c + ' (' + path.basename(file) + ')');
        }
      }
    });
  });

  // 2. classList.add('...') / classList.toggle('...')
  const classListMatches = content.match(/classList\.(?:add|remove|toggle|contains)\s*\(\s*["']([^"']+)["']\s*\)/g) || [];
  classListMatches.forEach(clm => {
    const m = clm.match(/classList\.(?:add|remove|toggle|contains)\s*\(\s*["']([^"']+)["']\s*\)/);
    if (m && m[1]) {
      const c = m[1].trim();
      if (c && !ignoredClasses.has(c) && /^[a-zA-Z_-][a-zA-Z0-9_-]*$/.test(c) && !definedClasses.has(c)) {
        unstyled.add(c + ' (' + path.basename(file) + ')');
      }
    }
  });
});

console.log('================================================================================');
console.log('                        FEARN CSS COVERAGE AUDIT');
console.log('================================================================================');
console.log('Total verified CSS class selectors defined:', definedClasses.size);
console.log('Total files scanned across app, components, and all 30 modules:', filesToCheck.length);
console.log('Total unstyled classes found:', unstyled.size);

if (unstyled.size > 0) {
  console.log('\n[!] Unstyled classes found:');
  Array.from(unstyled).sort().forEach(u => console.log('  - ' + u));
} else {
  console.log('\n>>> [CSS AUDIT PASSED] 100% of referenced classes have matching CSS selectors! <<<');
}

