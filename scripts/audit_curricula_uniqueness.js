const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const currDir = path.join(ROOT_DIR, 'data/curricula');

const files = fs.readdirSync(currDir).filter(f => f.endsWith('.js') && !f.endsWith('.ledger.js'));

console.log('================================================================================================================================');
console.log('             FEARN OMNISCIENT ADVERSARIAL QUALITY GATE & ZERO-BLIND-SPOT AUDIT                                                  ');
console.log('================================================================================================================================');
console.log('Subject                 | Total | Density | Expl Uniq | Exs Uniq | GP Dist | IP Dist #1 | IP Dist #2 |    MC Q   | Typed | Status');
console.log('--------------------------------------------------------------------------------------------------------------------------------');

let totalLessons = 0;
let hasFailure = false;

const SCRIPT_RANGES = {
  amharic: /[\u1200-\u137F]/g,
  arabic: /[\u0600-\u06FF]/g,
  cantonese: /[\u4E00-\u9FFF]/g,
  hindi: /[\u0900-\u097F]/g,
  japanese: /[\u3040-\u30FF\u4E00-\u9FFF]/g,
  korean: /[\uAC00-\uD7AF\u1100-\u11FF]/g,
  mandarin: /[\u4E00-\u9FFF]/g,
  russian: /[\u0400-\u04FF]/g,
  ukrainian: /[\u0400-\u04FF]/g,
  urdu: /[\u0600-\u06FF]/g
};

const ENGLISH_FUNCTION_WORDS = /\b(the|is|are|in|of|to|and|with|learners|lesson|rather|treating|vocabulary|isolation|structural|dependencies|meticulous|interferences)\b/gi;
const FORBIDDEN_META_LABELS = /^(Option\s+[A-Z]:|Syntax\s+[0-9]:|Analysis\s+[0-9]:|Evaluation\s+[A-Z]:|Pragmatic communicative nuance)/i;
const PRAGMATIC_NUANCE_REGEX = /Pragmatic communicative nuance/i;
const FORBIDDEN_EXAMPLE_FILLER = /\b(Unit\s+[0-9]|Lesson\s+[0-9]|illustrates?\s+the\s+rule|demonstrates?\s+the\s+rule)\b/i;

files.forEach(f => {
  const subjKey = f.replace('.js', '');
  const curr = require(path.join(currDir, f));
  const lkeys = Object.keys(curr.lessons || {});
  const total = lkeys.length;
  if (total === 0) return;
  totalLessons += total;

  let totalChars = 0;
  let nativeChars = 0;
  let englishFuncWords = 0;
  let totalWords = 0;
  let metaLabelHits = 0;
  let fillerExampleHits = 0;
  
  let countGP = 0;
  let countIP = 0;
  let countMC = 0;
  let countTyped = 0;

  const explanations = new Set();
  const exampleTargets = new Set();
  const gpDistractors = new Set();
  const ipDist1 = new Set();
  const ipDist2 = new Set();
  const mcPrompts = new Set();
  const typedPrompts = new Set();

  lkeys.forEach(lid => {
    const l = curr.lessons[lid];
    const exp = (l.presentation && l.presentation.explanation) || '';
    totalChars += exp.length;
    if (exp) explanations.add(exp);

    // Density calculations
    if (SCRIPT_RANGES[subjKey]) {
      const matches = exp.match(SCRIPT_RANGES[subjKey]) || [];
      nativeChars += matches.length;
    } else {
      const words = exp.toLowerCase().match(/[a-zà-ÿ]+/g) || [];
      totalWords += words.length;
      const engMatches = exp.match(ENGLISH_FUNCTION_WORDS) || [];
      englishFuncWords += engMatches.length;
    }

    // Examples Check
    if (l.presentation && Array.isArray(l.presentation.examples)) {
      l.presentation.examples.forEach(ex => {
        if (ex && ex.target) {
          exampleTargets.add(ex.target);
          if (FORBIDDEN_EXAMPLE_FILLER.test(ex.target)) {
            fillerExampleHits++;
          }
        }
      });
    }

    // Guided Practice Check
    if (l.guidedPractice && Array.isArray(l.guidedPractice.items) && l.guidedPractice.items[0]) {
      countGP++;
      const gp = l.guidedPractice.items[0];
      if (Array.isArray(gp.options)) {
        gp.options.forEach((opt, idx) => {
          if (typeof opt === 'string') {
            if (idx !== gp.answerIndex) gpDistractors.add(opt);
            if (FORBIDDEN_META_LABELS.test(opt) || PRAGMATIC_NUANCE_REGEX.test(opt)) metaLabelHits++;
          }
        });
      }
    }

    // Independent Practice Check (Distractor 1 and 2)
    if (l.independentPractice && Array.isArray(l.independentPractice.items) && l.independentPractice.items[0]) {
      countIP++;
      const ip = l.independentPractice.items[0];
      if (Array.isArray(ip.options)) {
        const wrongOpts = ip.options.filter((_, idx) => idx !== ip.answerIndex);
        if (wrongOpts[0]) ipDist1.add(wrongOpts[0]);
        if (wrongOpts[1]) ipDist2.add(wrongOpts[1]);
        ip.options.forEach(opt => {
          if (typeof opt === 'string') {
            if (FORBIDDEN_META_LABELS.test(opt) || PRAGMATIC_NUANCE_REGEX.test(opt)) metaLabelHits++;
          }
        });
      }
    }

    // Checkpoint Test Check (MC and Typed)
    if (l.checkpointTest && Array.isArray(l.checkpointTest.items)) {
      l.checkpointTest.items.forEach(item => {
        if (item.type === 'typed-recall' || Array.isArray(item.acceptedAnswers)) {
          countTyped++;
          if (item.prompt) typedPrompts.add(item.prompt);
        } else if (item.type === 'multiple-choice' || Array.isArray(item.options)) {
          countMC++;
          if (item.prompt) mcPrompts.add(item.prompt);
          if (Array.isArray(item.options)) {
            item.options.forEach(opt => {
              if (typeof opt === 'string') {
                if (FORBIDDEN_META_LABELS.test(opt) || PRAGMATIC_NUANCE_REGEX.test(opt)) metaLabelHits++;
              }
            });
          }
        }
      });
    }
  });

  // Calculate script density %
  let scriptDensity = 100;
  let densityLabel = 'N/A';
  if (SCRIPT_RANGES[subjKey]) {
    scriptDensity = totalChars > 0 ? Math.round((nativeChars / totalChars) * 100) : 0;
    densityLabel = `${scriptDensity}% Nat`;
  } else if (totalWords > 0) {
    const engRatio = Math.round((englishFuncWords / totalWords) * 100);
    densityLabel = `${100 - engRatio}% Tgt`;
  }

  // Hard threshold checks
  let isFailed = false;

  // 1. Script Density Check (< 10% native script is a hard failure for non-Latin languages)
  if (SCRIPT_RANGES[subjKey] && scriptDensity < 10) {
    console.error(`>>> [HARD FAIL] ${subjKey}: Native script density is only ${scriptDensity}% (Min threshold: 10%)`);
    isFailed = true;
    hasFailure = true;
  }

  // 2. Explanations Uniqueness Gate
  const minExplUniq = Math.floor(total * 0.95);
  if (explanations.size < minExplUniq) {
    console.error(`>>> [HARD FAIL] ${subjKey}: Distinct explanations ${explanations.size}/${total} below required ${minExplUniq}/${total}!`);
    isFailed = true;
    hasFailure = true;
  }

  // 3. Examples Content & Uniqueness Gate
  if (fillerExampleHits > 0) {
    console.error(`>>> [HARD FAIL] ${subjKey}: Found ${fillerExampleHits} self-referential filler strings in presentation.examples!`);
    isFailed = true;
    hasFailure = true;
  }

  // 4. Guided Practice Distractors Gate
  if (countGP > 0) {
    const minGPDist = Math.floor(countGP * 0.95);
    if (gpDistractors.size < minGPDist) {
      console.error(`>>> [HARD FAIL] ${subjKey}: Distinct GP distractors ${gpDistractors.size}/${countGP} below required ${minGPDist}!`);
      isFailed = true;
      hasFailure = true;
    }
  }

  // 5. Independent Practice Distractor 1 & 2 Gate
  if (countIP > 0) {
    const minIPDist = Math.floor(countIP * 0.95);
    if (ipDist1.size < minIPDist) {
      console.error(`>>> [HARD FAIL] ${subjKey}: Distinct IP Distractor #1 ${ipDist1.size}/${countIP} below required ${minIPDist}!`);
      isFailed = true;
      hasFailure = true;
    }
    if (ipDist2.size < minIPDist) {
      console.error(`>>> [HARD FAIL] ${subjKey}: Distinct IP Distractor #2 ${ipDist2.size}/${countIP} below required ${minIPDist}!`);
      isFailed = true;
      hasFailure = true;
    }
  }

  // 6. Checkpoint MC Prompts Gate (Required >= 95% for ALL subjects)
  if (countMC > 0) {
    const minMC = Math.floor(countMC * 0.95);
    if (mcPrompts.size < minMC) {
      console.error(`>>> [HARD FAIL] ${subjKey}: Distinct Checkpoint MC prompts ${mcPrompts.size}/${countMC} below required ${minMC}!`);
      isFailed = true;
      hasFailure = true;
    }
  } else {
    console.error(`>>> [HARD FAIL] ${subjKey}: Found 0 multiple-choice questions in curriculum!`);
    isFailed = true;
    hasFailure = true;
  }

  // 7. Checkpoint Typed-Recall Prompts Gate (for subjects with typed recall)
  if (countTyped > 0) {
    const minTyped = Math.floor(countTyped * 0.95);
    if (typedPrompts.size < minTyped) {
      console.error(`>>> [HARD FAIL] ${subjKey}: Distinct Typed-Recall prompts ${typedPrompts.size}/${countTyped} below required ${minTyped}!`);
      isFailed = true;
      hasFailure = true;
    }
  }

  // 8. Meta-Label Gate
  if (metaLabelHits > 0) {
    console.error(`>>> [HARD FAIL] ${subjKey}: Found ${metaLabelHits} forbidden English meta-labels in options!`);
    isFailed = true;
    hasFailure = true;
  }

  const status = isFailed ? 'FAILED [X]' : 'PASSED [✓]';
  const nameCol = subjKey.padEnd(23);
  const gpCol = countGP > 0 ? `${gpDistractors.size}/${countGP}` : 'N/A';
  const ip1Col = countIP > 0 ? `${ipDist1.size}/${countIP}` : 'N/A';
  const ip2Col = countIP > 0 ? `${ipDist2.size}/${countIP}` : 'N/A';
  const mcCol = `${mcPrompts.size}/${countMC}`;
  const typedCol = countTyped > 0 ? `${typedPrompts.size}/${countTyped}` : '-';

  console.log(`${nameCol} |  ${String(total).padStart(4)} | ${densityLabel.padStart(7)} | ${String(explanations.size + '/' + total).padStart(9)} | ${String(exampleTargets.size).padStart(8)} | ${String(gpCol).padStart(7)} | ${String(ip1Col).padStart(10)} | ${String(ip2Col).padStart(10)} | ${mcCol.padStart(9)} | ${String(typedCol).padStart(5)} | ${status}`);
});

console.log('================================================================================================================================');
console.log(`GRAND TOTAL LESSONS VERIFIED: ${totalLessons} / 3740`);
console.log('================================================================================================================================');

if (hasFailure) {
  console.error('\n>>> [HARD AUDIT FAILURE] REPOSITORY FAILED QUALITY GATE CONSTRAINTS! <<<\n');
  process.exit(1);
} else {
  console.log('\n>>> [HARD AUDIT PASSED] 100% OF SUBJECTS MEET OMNISCIENT ZERO-BLIND-SPOT QUALITY GATES! <<<\n');
  process.exit(0);
}
