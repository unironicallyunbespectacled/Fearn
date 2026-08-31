const fs = require('fs');
const path = require('path');

const swPath = path.join(__dirname, '../sw.js');
const swContent = fs.readFileSync(swPath, 'utf8');

// Extract ASSETS_TO_CACHE
const match = swContent.match(/const ASSETS_TO_CACHE = \[([\s\S]*?)\];/);
if (!match) throw new Error('Could not find ASSETS_TO_CACHE in sw.js');

const assetLines = match[1]
  .split('\n')
  .map(l => l.trim())
  .filter(l => l.startsWith("'./") || l.startsWith("'./'"))
  .map(l => l.replace(/^'\.\//, '').replace(/'[,]?$/, ''));

console.log(`Checking ${assetLines.length} assets listed in sw.js...`);
let missing = 0;
assetLines.forEach(rel => {
  if (rel === '' || rel === "'") return; // root
  const abs = path.join(__dirname, '..', rel);
  if (!fs.existsSync(abs)) {
    console.error(`MISSING ASSET: ${rel} -> ${abs}`);
    missing++;
  }
});

if (missing === 0) {
  console.log(`[✓] All ${assetLines.length} cache assets exist on disk!`);
} else {
  console.error(`[X] Found ${missing} missing assets in sw.js!`);
}

// Check manifest.json
const manifestPath = path.join(__dirname, '../manifest.json');
try {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  console.log('[✓] manifest.json is valid JSON.');
  if (manifest.icons) {
    manifest.icons.forEach(icon => {
      const iconPath = path.join(__dirname, '..', icon.src.replace(/^\//, ''));
      if (fs.existsSync(iconPath)) {
        console.log(`  [✓] Icon exists: ${icon.src}`);
      } else {
        console.warn(`  [!] Icon missing: ${icon.src} -> ${iconPath}`);
      }
    });
  }
} catch (e) {
  console.error('[X] manifest.json parsing failed:', e.message);
}
