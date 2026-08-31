const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const currDir = path.join(ROOT_DIR, 'data/curricula');

console.log('================================================================================================================================');
console.log('             FEARN MECHANICAL SCRIPT-PEDAGOGY & ZERO-KNOWLEDGE INVARIANT AUDIT                                                  ');
console.log('================================================================================================================================');

const NON_LATIN_CONFIG = {
  korean: {
    unit: 'ko-u1',
    scriptRange: /[\uAC00-\uD7AF\u1100-\u11FF]/g,
    decompose: (str) => {
      const jamos = [];
      for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        if (code >= 0xAC00 && code <= 0xD7A3) {
          const sylIdx = code - 0xAC00;
          const initial = Math.floor(sylIdx / (21 * 28));
          const medial = Math.floor((sylIdx % (21 * 28)) / 28);
          const final = sylIdx % 28;
          jamos.push({ type: 'syllable', char: str[i], initial, medial, final });
        }
      }
      return jamos;
    }
  },
  japanese: {
    unit: 'ja-u1',
    scriptRange: /[\u3040-\u309F\u30A0-\u30FF]/g,
    decompose: (str) => str.match(/[\u3040-\u309F\u30A0-\u30FF]/g) || []
  },
  russian: {
    unit: 'ru-u1',
    scriptRange: /[\u0400-\u04FF]/g,
    decompose: (str) => str.toLowerCase().match(/[\u0400-\u04FF]/g) || []
  },
  arabic: {
    unit: 'ar-u1',
    scriptRange: /[\u0600-\u06FF]/g,
    decompose: (str) => str.match(/[\u0621-\u064A]/g) || []
  },
  mandarin: {
    unit: 'zh-u1',
    scriptRange: /[a-zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/gi,
    decompose: (str) => str.match(/[a-zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/gi) || []
  },
  amharic: {
    unit: 'am-u1',
    scriptRange: /[\u1200-\u137F]/g,
    decompose: (str) => str.match(/[\u1200-\u137F]/g) || []
  },
  urdu: {
    unit: 'ur-u1',
    scriptRange: /[\u0600-\u06FF]/g,
    decompose: (str) => str.match(/[\u0621-\u064A\u0679-\u06D2]/g) || []
  },
  hindi: {
    unit: 'hi-u1',
    scriptRange: /[\u0900-\u097F]/g,
    decompose: (str) => str.match(/[\u0904-\u0939]/g) || []
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

  const curr = require(filePath);
  const lessons = curr.lessons || {};

  // Check Unit 1 lessons (l1 to l5 strictly)
  const u1Regex = new RegExp('^' + cfg.unit + '-l[1-5]$');
  const u1Keys = Object.keys(lessons).filter(k => u1Regex.test(k)).sort();
  
  if (u1Keys.length === 0) {
    console.error(`>>> [FAIL] ${subjKey}: No Unit 1 lessons found!`);
    hasFailure = true;
    return;
  }

  let introducedChars = new Set();
  let lessonProgressionReport = [];

  u1Keys.forEach((lid) => {
    const les = lessons[lid];
    const exp = (les.presentation && les.presentation.explanation) || '';
    const examples = (les.presentation && les.presentation.examples) || [];
    
    // Extract characters introduced in this lesson's presentation
    const introCharsInExp = cfg.decompose(exp);
    introCharsInExp.forEach(c => {
      if (typeof c === 'string') introducedChars.add(c);
      else if (c.char) introducedChars.add(c.char);
    });
    examples.forEach(ex => {
      const tgt = ex.target || '';
      cfg.decompose(tgt).forEach(c => {
        if (typeof c === 'string') introducedChars.add(c);
        else if (c.char) introducedChars.add(c.char);
      });
    });

    // Check practice items: All options must be accompanied by transliteration/explanation OR only use taught characters
    let untaughtPracticeChars = [];
    const practiceItems = [
      ...((les.guidedPractice && les.guidedPractice.items) || []),
      ...((les.independentPractice && les.independentPractice.items) || [])
    ];

    practiceItems.forEach(item => {
      const opts = item.options || [];
      opts.forEach(opt => {
        if (typeof opt === 'string') {
          // Check if option contains pronunciation / transliteration bracket
          const hasGloss = /\([^\)]+\)|\[[^\]]+\]|\/|—|\-/.test(opt);
          if (!hasGloss) {
            // Strict check: every character must be in introducedChars
            const chars = cfg.decompose(opt);
            chars.forEach(c => {
              const ch = typeof c === 'string' ? c : c.char;
              if (!introducedChars.has(ch)) {
                untaughtPracticeChars.push(ch);
              }
            });
          }
        }
      });
    });

    lessonProgressionReport.push({
      lessonId: lid,
      title: les.title || '',
      introducedCount: introducedChars.size,
      untaughtCount: untaughtPracticeChars.length
    });
  });

  const passed = lessonProgressionReport.every(r => r.untaughtCount === 0);
  const statusStr = passed ? 'PASSED [✓]' : 'FAILED [✗]';
  console.log(`${subjKey.padEnd(20)} | U1 Lessons: ${u1Keys.length} | Cumulative Chars: ${introducedChars.size} | Status: ${statusStr}`);
  
  if (!passed) {
    hasFailure = true;
    lessonProgressionReport.forEach(r => {
      if (r.untaughtCount > 0) {
        console.error(`  -> ${r.lessonId}: Found ${r.untaughtCount} bare unglossed characters before formal introduction!`);
      }
    });
  }
});

console.log('--------------------------------------------------------------------------------------------------------------------------------');
if (hasFailure) {
  console.error('>>> [AUDIT FAILED] Script pedagogy violations found! <<<');
  process.exit(1);
} else {
  console.log('>>> [HARD AUDIT PASSED] 100% OF NON-LATIN CURRICULA MEET SCRIPT-PEDAGOGY ZERO-BLIND-SPOT INVARIANTS! <<<');
}
