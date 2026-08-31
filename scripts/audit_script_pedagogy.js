const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const currDir = path.join(ROOT_DIR, 'data/curricula');

console.log('================================================================================================================================');
console.log('             FEARN AUTHENTIC SCRIPT-PEDAGOGY & FULL-COURSE QUALITY AUDIT                                                        ');
console.log('================================================================================================================================');
console.log('Language             | Total Lessons | U1 Script Chars | U1 Unglossed Chars | Corrupted Options | Status');
console.log('--------------------------------------------------------------------------------------------------------------------------------');

const NON_LATIN_CONFIG = {
  korean: {
    unit: 'ko-u1',
    scriptRange: /[\uAC00-\uD7AF\u1100-\u11FF]/g,
    decompose: (str) => (str.match(/[\uAC00-\uD7AF\u1100-\u11FF]/g) || [])
  },
  japanese: {
    unit: 'ja-u1',
    scriptRange: /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/g,
    decompose: (str) => (str.match(/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/g) || [])
  },
  russian: {
    unit: 'ru-u1',
    scriptRange: /[\u0400-\u04FF]/g,
    decompose: (str) => (str.match(/[\u0400-\u04FF]/g) || [])
  },
  ukrainian: {
    unit: 'uk-u1',
    scriptRange: /[\u0400-\u04FF]/g,
    decompose: (str) => (str.match(/[\u0400-\u04FF]/g) || [])
  },
  arabic: {
    unit: 'ar-u1',
    scriptRange: /[\u0600-\u06FF]/g,
    decompose: (str) => (str.match(/[\u0621-\u064A]/g) || [])
  },
  urdu: {
    unit: 'ur-u1',
    scriptRange: /[\u0600-\u06FF]/g,
    decompose: (str) => (str.match(/[\u0621-\u064A\u0679-\u06D2]/g) || [])
  },
  mandarin: {
    unit: 'zh-u1',
    scriptRange: /[\u4E00-\u9FFF]/g,
    decompose: (str) => (str.match(/[\u4E00-\u9FFF]/g) || [])
  },
  cantonese: {
    unit: 'yue-u1',
    scriptRange: /[\u4E00-\u9FFF]/g,
    decompose: (str) => (str.match(/[\u4E00-\u9FFF]/g) || [])
  },
  amharic: {
    unit: 'am-u1',
    scriptRange: /[\u1200-\u137F]/g,
    decompose: (str) => (str.match(/[\u1200-\u137F]/g) || [])
  },
  hindi: {
    unit: 'hi-u1',
    scriptRange: /[\u0900-\u097F]/g,
    decompose: (str) => (str.match(/[\u0904-\u0939]/g) || [])
  }
};

let hasFailure = false;

Object.keys(NON_LATIN_CONFIG).forEach(subjKey => {
  const cfg = NON_LATIN_CONFIG[subjKey];
  const filePath = path.join(currDir, `${subjKey}.js`);
  if (!fs.existsSync(filePath)) {
    console.error(`>>> [FAIL] File missing: ${filePath}`);
    hasFailure = true;
    return;
  }

  delete require.cache[require.resolve(filePath)];
  const curr = require(filePath);
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

  // 2. Audit Unit 1 options: Every option with target script must have Romanization/translation
  let u1UnglossedCount = 0;
  u1Keys.forEach(lid => {
    const les = lessons[lid];
    function checkU1Items(items) {
      if (!Array.isArray(items)) return;
      items.forEach(item => {
        if (Array.isArray(item.options)) {
          item.options.forEach(opt => {
            if (typeof opt === 'string' && cfg.scriptRange.test(opt)) {
              const hasGloss = /\([a-zA-Z0-9\s—–,.'"/]+\)/.test(opt) || /[a-zA-Z]{3,}/.test(opt);
              if (!hasGloss) {
                u1UnglossedCount++;
              }
            }
          });
        }
      });
    }
    if (les.guidedPractice) checkU1Items(les.guidedPractice.items);
    if (les.independentPractice) checkU1Items(les.independentPractice.items);
    if (les.checkpointTest) checkU1Items(les.checkpointTest.items);
  });

  // 3. Course-wide syntax & glitch check
  let corruptedCount = 0;
  allLkeys.forEach(lid => {
    const les = lessons[lid];
    function checkSyntax(items) {
      if (!Array.isArray(items)) return;
      items.forEach(item => {
        if (Array.isArray(item.options)) {
          item.options.forEach(opt => {
            if (typeof opt === 'string') {
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

  const isOk = u1UnglossedCount === 0 && corruptedCount === 0 && introducedChars.size > 0;
  if (!isOk) hasFailure = true;

  console.log(
    `${subjKey.padEnd(20)} | ` +
    `${String(allLkeys.length).padStart(13)} | ` +
    `${String(introducedChars.size).padStart(15)} | ` +
    `${String(u1UnglossedCount).padStart(18)} | ` +
    `${String(corruptedCount).padStart(17)} | ` +
    (isOk ? 'PASSED [✓]' : 'FAILED [✗]')
  );
});

console.log('--------------------------------------------------------------------------------------------------------------------------------');
if (hasFailure) {
  console.error('>>> [AUDIT FAILED] Script pedagogy or corrupted option defects found! <<<');
  process.exit(1);
} else {
  console.log('>>> [AUDIT PASSED] 100% OF ALL 10 NON-LATIN CURRICULA MEET AUTHENTIC SCRIPT-PEDAGOGY & SYNTAX PURITY! <<<');
}
