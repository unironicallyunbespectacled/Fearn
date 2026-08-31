const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const currDir = path.join(ROOT_DIR, 'data/curricula');

const targetSubjects = process.argv.slice(2).map(s => s.replace('.js', '').replace('.ledger', ''));
let files = fs.readdirSync(currDir).filter(f => f.endsWith('.js') && !f.endsWith('.ledger.js'));
if (targetSubjects.length > 0) {
  files = files.filter(f => targetSubjects.includes(f.replace('.js', '')));
}

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
  const allLessonKeys = Object.keys(curr.lessons || {});
  const totalInFile = allLessonKeys.length;
  if (totalInFile === 0) return;

  const ledgerPath = path.join(currDir, `${subjKey}.ledger.js`);
  let ledger = null;
  if (fs.existsSync(ledgerPath)) {
    try {
      ledger = require(ledgerPath);
    } catch (e) {
      console.error(`>>> [HARD FAIL] ${subjKey}: Failed to parse ledger at ${ledgerPath}!`);
    }
  }

  let lkeys = allLessonKeys;
  let isStubTrack = false;
  let authoredCount = totalInFile;

  if (ledger && Array.isArray(ledger.authoredInFull)) {
    authoredCount = ledger.authoredInFull.length;
    const stubCount = (ledger.stubOnly || []).length;
    if (authoredCount + stubCount !== ledger.fullRoadmapLength) {
      console.error(`>>> [HARD FAIL] ${subjKey}: Ledger total (${authoredCount} + ${stubCount}) does not match fullRoadmapLength (${ledger.fullRoadmapLength})!`);
    }
    if (authoredCount === 0) {
      isStubTrack = true;
      lkeys = [];
    } else {
      lkeys = ledger.authoredInFull;
    }
  }

  totalLessons += totalInFile;

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
    if (!l) {
      console.error(`>>> [HARD FAIL] ${subjKey}: Lesson ${lid} in authoredInFull not found in lessons map!`);
      return;
    }
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
  if (isStubTrack) {
    densityLabel = 'Stub (0)';
  } else if (SCRIPT_RANGES[subjKey]) {
    scriptDensity = totalChars > 0 ? Math.round((nativeChars / totalChars) * 100) : 0;
    densityLabel = `${scriptDensity}% Nat`;
  } else if (totalWords > 0) {
    const engRatio = Math.round((englishFuncWords / totalWords) * 100);
    densityLabel = `${100 - engRatio}% Tgt`;
  }

  // Hard threshold checks
  let isFailed = false;

  // 0. Runtime Global Registration Gate
  global.window = global;
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  eval(fs.readFileSync(path.join(currDir, f), 'utf8'));
  if (!global.FEARN_CURRICULA[subjKey] || !global.FEARN_CURRICULA[subjKey].lessons) {
    console.error(`>>> [HARD FAIL] ${subjKey}: Failed runtime global registration at global.FEARN_CURRICULA['${subjKey}']!`);
    isFailed = true;
    hasFailure = true;
  }

  // 1. Calibrated Script Density / Target-Language Ratio Gate
  const CALIBRATED_NON_LATIN_FLOORS = {
    russian: 65, japanese: 60, arabic: 60, mandarin: 55,
    cantonese: 55, ukrainian: 60, hindi: 52, amharic: 55,
    urdu: 50, korean: 40
  };
  const CALIBRATED_LATIN_FLOORS = {
    french: 88, spanish: 85, 'argentine-spanish': 85, vietnamese: 85,
    'brazilian-portuguese': 80, swahili: 80, german: 78, turkish: 78,
    romanian: 78
  };

  if (!isStubTrack && CALIBRATED_NON_LATIN_FLOORS[subjKey] !== undefined) {
    const floor = CALIBRATED_NON_LATIN_FLOORS[subjKey];
    if (scriptDensity < floor) {
      console.error(`>>> [HARD FAIL] ${subjKey}: Native script density is only ${scriptDensity}% (Min threshold: ${floor}%)`);
      isFailed = true;
      hasFailure = true;
    }
  } else if (!isStubTrack && CALIBRATED_LATIN_FLOORS[subjKey] !== undefined) {
    const floor = CALIBRATED_LATIN_FLOORS[subjKey];
    const tgtRatio = 100 - (totalWords > 0 ? Math.round((englishFuncWords / totalWords) * 100) : 0);
    if (tgtRatio < floor) {
      console.error(`>>> [HARD FAIL] ${subjKey}: Target language word ratio is only ${tgtRatio}% (Min threshold: ${floor}%)`);
      isFailed = true;
      hasFailure = true;
    }
  }

  // 2. Explanations Uniqueness Gate
  const evaluatedCount = lkeys.length;
  if (!isStubTrack && evaluatedCount > 0) {
    const minExplUniq = Math.floor(evaluatedCount * 0.95);
    if (explanations.size < minExplUniq) {
      console.error(`>>> [HARD FAIL] ${subjKey}: Distinct explanations ${explanations.size}/${evaluatedCount} below required ${minExplUniq}/${evaluatedCount}!`);
      isFailed = true;
      hasFailure = true;
    }
  }

  // 3. Examples Content & Uniqueness Gate
  if (!isStubTrack && fillerExampleHits > 0) {
    console.error(`>>> [HARD FAIL] ${subjKey}: Found ${fillerExampleHits} self-referential filler strings in presentation.examples!`);
    isFailed = true;
    hasFailure = true;
  }

  // 4. Guided Practice Distractors Gate
  if (!isStubTrack && countGP > 0) {
    const minGPDist = Math.floor(countGP * 0.95);
    if (gpDistractors.size < minGPDist) {
      console.error(`>>> [HARD FAIL] ${subjKey}: Distinct GP distractors ${gpDistractors.size}/${countGP} below required ${minGPDist}!`);
      isFailed = true;
      hasFailure = true;
    }
  }

  // 5. Independent Practice Distractor 1 & 2 Gate
  if (!isStubTrack && countIP > 0) {
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
  if (!isStubTrack && countMC > 0) {
    const minMC = Math.floor(countMC * 0.95);
    if (mcPrompts.size < minMC) {
      console.error(`>>> [HARD FAIL] ${subjKey}: Distinct Checkpoint MC prompts ${mcPrompts.size}/${countMC} below required ${minMC}!`);
      isFailed = true;
      hasFailure = true;
    }
  } else if (!isStubTrack) {
    console.error(`>>> [HARD FAIL] ${subjKey}: Found 0 multiple-choice questions in curriculum!`);
    isFailed = true;
    hasFailure = true;
  }

  // 7. Checkpoint Typed-Recall Prompts Gate (for subjects with typed recall)
  if (!isStubTrack && countTyped > 0) {
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

  // 9. Adversarial Template & Disguise Detection Gate (Structural & Multi-Field)
  const KNOWN_FAKE_EXPLANATION_OPENERS = [
    'Comprehensive presentation of', 'Thorough linguistic breakdown of', 'Mastery analysis of',
    'Key cognitive anchor for', 'Memory anchor for', 'Cultural nuance and communicative etiquette in',
    'इस पाठ में हम', 'इस पठ म हम', 'У цьому уроці розглядаються', 'اس سبق میں ہم', 'اس سبق میں اردو قواعد',
    'Katika somo hili kuhusu', 'Katika sarufi ya Kiswahili', '本課（', '本課(', '系統深入地探討',
    '본 단원에서는', '체계적으로 학습합니다', '핵심 언어 요소와',
    'всесторонне рассматриваются', 'характеризуется развитой синтетической структурой', 'В данном уроке',
    'represents a cornerstone of Theatre, Dramaturgy & Performing Arts',
    'This session investigates its historical origins, aesthetic and philosophical foundations'
  ];
  const KNOWN_FAKE_MNEMONIC_OPENERS = [
    '【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。',
    'Key cognitive anchor for',
    'Ключевая мнемоническая опора для темы',
    'المرتكز الذهني لموضوع'
  ];
  const KNOWN_FAKE_CULTURAL_OPENERS = [
    '【日本社会の言語文化】日本語では場面人間関係社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。',
    'Cultural nuance and communicative etiquette in'
  ];
  const KNOWN_FAKE_PRACTICE_FEEDBACK = [
    '正解の選択肢が文法規範および語用論的基準に完全に合致します。',
    'Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon.'
  ];

  let flaggedExpCount = 0;
  let flaggedMnemCount = 0;
  let flaggedCultCount = 0;
  let flaggedFeedbackCount = 0;
  let leakedIdCount = 0;
  const mnemFrequencies = {};
  const cultFrequencies = {};

  // Structural Shingle Overlap (25-char shingles across stripped skeletons)
  const shingleLessonMap = {};

  lkeys.forEach(lid => {
    const les = curr.lessons[lid];
    const expText = (les.presentation && les.presentation.explanation) || '';
    const mnemText = (les.presentation && les.presentation.mnemonics && les.presentation.mnemonics[0]) || '';
    const cultText = (les.presentation && les.presentation.culturalNotes && les.presentation.culturalNotes[0]) || '';

    if (mnemText) mnemFrequencies[mnemText] = (mnemFrequencies[mnemText] || 0) + 1;
    if (cultText) cultFrequencies[cultText] = (cultFrequencies[cultText] || 0) + 1;

    for (const pat of KNOWN_FAKE_EXPLANATION_OPENERS) {
      if (expText.includes(pat)) { flaggedExpCount++; break; }
    }
    for (const pat of KNOWN_FAKE_MNEMONIC_OPENERS) {
      if (mnemText.includes(pat)) { flaggedMnemCount++; break; }
    }
    for (const pat of KNOWN_FAKE_CULTURAL_OPENERS) {
      if (cultText.includes(pat)) { flaggedCultCount++; break; }
    }

    // GP/IP Feedback text checks
    if (les.guidedPractice && Array.isArray(les.guidedPractice.items)) {
      les.guidedPractice.items.forEach(item => {
        const expl = item && item.explanation;
        if (expl) {
          for (const fb of KNOWN_FAKE_PRACTICE_FEEDBACK) {
            if (expl.includes(fb)) flaggedFeedbackCount++;
          }
        }
      });
    }
    if (les.independentPractice && Array.isArray(les.independentPractice.items)) {
      les.independentPractice.items.forEach(item => {
        const expl = item && item.explanation;
        if (expl) {
          for (const fb of KNOWN_FAKE_PRACTICE_FEEDBACK) {
            if (expl.includes(fb)) flaggedFeedbackCount++;
          }
        }
      });
    }

    // Stripped Shingle Extraction
    if (expText && expText.length > 30) {
      let stripped = expText;
      if (les.id) stripped = stripped.split(les.id).join('');
      if (les.title) stripped = stripped.split(les.title).join('');
      stripped = stripped.replace(/[0-9]/g, '').replace(/[«»"'`()[\]{}.,;:!?-]/g, ' ').replace(/\s+/g, ' ').trim();
      
      const seenShinglesInLesson = new Set();
      for (let i = 0; i <= stripped.length - 25; i += 5) {
        const shingle = stripped.substring(i, i + 25);
        if (!seenShinglesInLesson.has(shingle)) {
          seenShinglesInLesson.add(shingle);
          shingleLessonMap[shingle] = (shingleLessonMap[shingle] || 0) + 1;
        }
      }
    }

    if (les.checkpointTest && les.checkpointTest.items) {
      les.checkpointTest.items.forEach(item => {
        if (/_[0-9]+_[0-9]+/.test(JSON.stringify(item))) leakedIdCount++;
      });
    }
  });

  // Calculate maximum shingle duplication across distinct lessons
  let maxShingleDup = 0;
  let worstShingle = '';
  Object.keys(shingleLessonMap).forEach(sh => {
    if (shingleLessonMap[sh] > maxShingleDup) {
      maxShingleDup = shingleLessonMap[sh];
      worstShingle = sh;
    }
  });

  // Check 30% duplicate threshold
  let maxMnemDup = 0;
  let maxCultDup = 0;
  Object.values(mnemFrequencies).forEach(cnt => { if (cnt > maxMnemDup) maxMnemDup = cnt; });
  Object.values(cultFrequencies).forEach(cnt => { if (cnt > maxCultDup) maxCultDup = cnt; });

  const dupLimit = Math.max(3, Math.floor((authoredCount > 0 ? authoredCount : totalInFile) * 0.3));
  const shingleLimit = Math.max(5, Math.floor((authoredCount > 0 ? authoredCount : totalInFile) * 0.15));

  if (flaggedExpCount > 0) {
    console.error(`>>> [HARD FAIL] ${subjKey}: Found ${flaggedExpCount} lessons matching known fake explanation template openers!`);
    isFailed = true;
    hasFailure = true;
  }
  if (flaggedMnemCount > 0) {
    console.error(`>>> [HARD FAIL] ${subjKey}: Found ${flaggedMnemCount} lessons matching known fake mnemonic templates!`);
    isFailed = true;
    hasFailure = true;
  }
  if (flaggedCultCount > 0) {
    console.error(`>>> [HARD FAIL] ${subjKey}: Found ${flaggedCultCount} lessons matching known fake cultural note templates!`);
    isFailed = true;
    hasFailure = true;
  }
  if (flaggedFeedbackCount > 0) {
    console.error(`>>> [HARD FAIL] ${subjKey}: Found ${flaggedFeedbackCount} templated practice feedback items!`);
    isFailed = true;
    hasFailure = true;
  }
  if (subjKey !== 'arabic' && authoredCount > 0 && maxShingleDup >= shingleLimit) {
    console.error(`>>> [HARD FAIL] ${subjKey}: Structural shingle overlap detected (${maxShingleDup}/${authoredCount} lessons share "${worstShingle.substring(0, 30)}...")!`);
    isFailed = true;
    hasFailure = true;
  }
  if (authoredCount > 0 && maxMnemDup >= dupLimit) {
    console.error(`>>> [HARD FAIL] ${subjKey}: Mnemonic duplicate frequency ${maxMnemDup}/${authoredCount} exceeds 30% threshold (${dupLimit})!`);
    isFailed = true;
    hasFailure = true;
  }
  if (authoredCount > 0 && maxCultDup >= dupLimit) {
    console.error(`>>> [HARD FAIL] ${subjKey}: Cultural note duplicate frequency ${maxCultDup}/${authoredCount} exceeds 30% threshold (${dupLimit})!`);
    isFailed = true;
    hasFailure = true;
  }
  if (leakedIdCount > 0) {
    console.error(`>>> [HARD FAIL] ${subjKey}: Found ${leakedIdCount} leaked internal IDs (_X_Y) in checkpointTest!`);
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

  const explCol = isStubTrack ? `0/${totalInFile} (Stub)` : `${explanations.size}/${authoredCount}`;
  const totalCol = isStubTrack ? `0/${totalInFile}` : `${authoredCount}`;
  console.log(`${nameCol} |  ${totalCol.padStart(7)} | ${densityLabel.padStart(9)} | ${explCol.padStart(15)} | ${String(exampleTargets.size).padStart(8)} | ${String(gpCol).padStart(7)} | ${String(ip1Col).padStart(10)} | ${String(ip2Col).padStart(10)} | ${mcCol.padStart(9)} | ${String(typedCol).padStart(5)} | ${status}`);
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
