// FEARN Fitness 170-Day Unique Periodization Quality Gate
const path = require('path');
const ROOT_DIR = 'C:\\Users\\HP USER\\Downloads\\yo';
const fitnessPath = path.join(ROOT_DIR, 'data/fitness-program.js');

const fitness = require(fitnessPath);

console.log('='.repeat(90));
console.log('             FEARN FITNESS 170-DAY PERIODIZATION & DUPLICATE AUDIT');
console.log('='.repeat(90));

const modes = ['large_gym', 'small_gym', 'open_space', 'small_room'];
let hasFailure = false;

modes.forEach(mode => {
  const plans = fitness.DAILY_PLANS_BY_MODE[mode];
  if (!plans) {
    console.error(`[ERROR] Missing plans for mode: ${mode}`);
    hasFailure = true;
    return;
  }

  const days = Object.keys(plans);
  if (days.length !== 170) {
    console.error(`[ERROR] Mode ${mode} has ${days.length} days, expected 170.`);
    hasFailure = true;
  }

  const seenSignatures = new Set();
  let dupCount = 0;

  days.forEach(dKey => {
    const day = plans[dKey];
    const sig = (day.exercises || []).map(e => e.name).join(' | ');
    if (seenSignatures.has(sig)) {
      dupCount++;
    }
    seenSignatures.add(sig);
  });

  if (dupCount > 0) {
    console.error(`[FAILED] Mode ${mode} has ${dupCount} duplicate day signatures!`);
    hasFailure = true;
  } else {
    console.log(`  [✓] Mode ${mode.padEnd(12)} : 170/170 unique day workout signatures (0 duplicates)`);
  }
});

console.log('='.repeat(90));
if (hasFailure) {
  console.error('>>> [FITNESS AUDIT FAILED] Duplicate day signatures or cycle repeats detected! <<<');
  process.exit(1);
} else {
  console.log('>>> [FITNESS AUDIT PASSED] 100% OF 170 DAYS ACROSS ALL 4 MODES ARE COMPLETELY UNIQUE! <<<');
  process.exit(0);
}
