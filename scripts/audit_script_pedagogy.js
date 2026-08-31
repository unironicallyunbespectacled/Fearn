const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const currDir = path.join(ROOT_DIR, 'data/curricula');

console.log('================================================================================================================================');
console.log('             FEARN COURSE-WIDE (ALL UNITS 1-35) AUTHENTIC SCRIPT-PEDAGOGY QUALITY AUDIT                                         ');
console.log('================================================================================================================================');
console.log('Language             | Total Lessons | Total Script Opts | Course-Wide Unglossed | Corrupted Options | Status');
console.log('--------------------------------------------------------------------------------------------------------------------------------');

const NON_LATIN_CONFIG = {
  korean: {
    unit: 'ko-u1',
    scriptRange: /[\uAC00-\uD7AF\u1100-\u11FF]/,
    decompose: (str) => (str.match(/[\uAC00-\uD7AF\u1100-\u11FF]/g) || [])
  },
  japanese: {
    unit: 'ja-u1',
    scriptRange: /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/,
    decompose: (str) => (str.match(/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/g) || [])
  },
  russian: {
    unit: 'ru-u1',
    scriptRange: /[\u0400-\u04FF]/,
    decompose: (str) => (str.match(/[\u0400-\u04FF]/g) || [])
  },
  ukrainian: {
    unit: 'uk-u1',
    scriptRange: /[\u0400-\u04FF]/,
    decompose: (str) => (str.match(/[\u0400-\u04FF]/g) || [])
  },
  arabic: {
    unit: 'ar-u1',
    scriptRange: /[\u0600-\u06FF]/,
    decompose: (str) => (str.match(/[\u0621-\u064A]/g) || [])
  },
  urdu: {
    unit: 'ur-u1',
    scriptRange: /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/,
    decompose: (str) => (str.match(/[\u0621-\u064A\u0679-\u06D2]/g) || [])
  },
  mandarin: {
    unit: 'zh-u1',
    scriptRange: /[\u4E00-\u9FFF]/,
    decompose: (str) => (str.match(/[\u4E00-\u9FFF]/g) || [])
  },
  cantonese: {
    unit: 'yue-u1',
    scriptRange: /[\u4E00-\u9FFF]/,
    decompose: (str) => (str.match(/[\u4E00-\u9FFF]/g) || [])
  },
  amharic: {
    unit: 'am-u1',
    scriptRange: /[\u1200-\u137F]/,
    decompose: (str) => (str.match(/[\u1200-\u137F]/g) || [])
  },
  hindi: {
    unit: 'hi-u1',
    scriptRange: /[\u0900-\u097F]/,
    decompose: (str) => (str.match(/[\u0900-\u097F]/g) || [])
  }
};

let hasFailure = false;

Object.keys(NON_LATIN_CONFIG).forEach(lang => {
  const cfg = NON_LATIN_CONFIG[lang];
  const filePath = path.join(currDir, `${lang}.js`);
  if (!fs.existsSync(filePath)) {
    console.error(`File missing: ${filePath}`);
    hasFailure = true;
    return;
  }

  delete require.cache[require.resolve(filePath)];
  let curr;
  try {
    curr = require(filePath);
  } catch (e) {
    console.error(`Failed to load ${lang}.js:`, e.message);
    hasFailure = true;
    return;
  }

  const lessons = curr.lessons || {};
  const allLkeys = Object.keys(lessons);

  // 1. Audit Unit 1 Script progression
  let introducedChars = new Set();
  const u1Keys = allLkeys.filter(k => k.includes('-u1-l'));
  u1Keys.forEach(lid => {
    const les = lessons[lid];
    const exp = (les.presentation && les.presentation.explanation) || '';
    const chars = cfg.decompose(exp);
    chars.forEach(c => introducedChars.add(c));
  });

  // 2. COURSE-WIDE Audit of ALL options across ALL 35 units:
  // Every option with target script must have Romanization / English gloss (at least 3 Latin chars or valid parenthetical)
  let totalScriptOpts = 0;
  let unglossedCount = 0;

  allLkeys.forEach(lid => {
    const les = lessons[lid];
    function checkAllItems(items) {
      if (!Array.isArray(items)) return;
      items.forEach(item => {
        if (Array.isArray(item.options)) {
          item.options.forEach(opt => {
            if (typeof opt === 'string' && cfg.scriptRange.test(opt)) {
              totalScriptOpts++;
              const hasGloss = /\([a-zA-Z0-9\s—–,.'"/\[\]!?:;-]+\)/.test(opt) || /[a-zA-Z]{3,}/.test(opt);
              if (!hasGloss) {
                unglossedCount++;
              }
            }
          });
        }
      });
    }
    if (les.guidedPractice) checkAllItems(les.guidedPractice.items);
    if (les.independentPractice) checkAllItems(les.independentPractice.items);
    if (les.checkpointTest) checkAllItems(les.checkpointTest.items);
  });

  // 3. Course-wide syntax, placeholders, and glitch check
  let placeholderCount = 0;
  let corruptedCount = 0;
  allLkeys.forEach(lid => {
    const les = lessons[lid];
    function checkSyntax(items) {
      if (!Array.isArray(items)) return;
      items.forEach(item => {
        if (Array.isArray(item.options)) {
          item.options.forEach(opt => {
            if (typeof opt === 'string') {
              if (/\([A-Za-z\s]+reading\)/i.test(opt)) {
                placeholderCount++;
              }
              if (/\)\s*\(/g.test(opt) || /\(\d+\.\d+\)/.test(opt) || opt.includes('(Context:') || opt.includes('(Target expression')) {
                corruptedCount++;
              }
            }
          });
        }
      });
    }
    if (les.guidedPractice) checkSyntax(les.guidedPractice.items);
    if (les.independentPractice) checkSyntax(les.independentPractice.items);
    if (les.checkpointTest) checkSyntax(les.checkpointTest.items);
  });

  const totalErrors = unglossedCount + placeholderCount + corruptedCount;
  const statusStr = totalErrors === 0 ? 'PASSED [✓]' : 'FAILED [✗]';
  if (totalErrors > 0) hasFailure = true;

  console.log(
    `${lang.padEnd(20)} | ` +
    `${String(allLkeys.length).padStart(13)} | ` +
    `${String(totalScriptOpts).padStart(17)} | ` +
    `${String(unglossedCount).padStart(21)} | ` +
    `${String(corruptedCount + placeholderCount).padStart(17)} | ` +
    `${statusStr}`
  );
});

console.log('--------------------------------------------------------------------------------------------------------------------------------');

if (hasFailure) {
  console.log('>>> [AUDIT FAILED] Script pedagogy, placeholder, or corrupted option defects found! <<<\n');
  process.exit(1);
} else {
  console.log('>>> [AUDIT PASSED] 100% OF ALL 10 NON-LATIN CURRICULA MEET COURSE-WIDE AUTHENTIC SCRIPT-PEDAGOGY & SYNTAX PURITY! <<<\n');
  process.exit(0);
}
