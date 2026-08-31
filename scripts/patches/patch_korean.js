const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../../data/curricula/korean.js');
const curr = require(filePath);

curr.lessons['ko-u1-l1'] = {
  id: 'ko-u1-l1',
  subject: 'korean',
  unit: 1,
  lessonNumber: 1,
  title: '한글 창제 원리와 기본 자모 (Hangul Vowels & First Consonants)',
  level: 'A1',
  objective: 'Master the 6 fundamental vowels (ㅏ, ㅓ, ㅗ, ㅜ, ㅡ, ㅣ), 10 basic consonants (ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅅ, ㅇ, ㅈ, ㅎ), and construct/read 2-character syllable blocks.',
  presentation: {
    explanation: 'Welcome to Korean! The Korean writing system is called **Hangul (한글)**. It was scientifically created in 1443 by King Sejong the Great to replace complex Chinese characters with an accessible, phonetic alphabet so that all people could read and write.\n\n### 1. The 6 Basic Vowels (모음)\nHangul vowels were designed using three philosophical elements: Heaven/Sun (·), Earth (ㅡ), and Human (ㅣ).\n- **ㅏ** [a] — pronounced like "ah" in "father"\n- **ㅓ** [eo / ʌ] — pronounced like "uh" in "cup" or "sun"\n- **ㅗ** [o] — pronounced like "oh" in "go" (lips rounded)\n- **ㅜ** [u] — pronounced like "oo" in "moon"\n- **ㅡ** [eu / ɯ] — unrounded "oo" (smile with teeth closed, say "oo")\n- **ㅣ** [i] — pronounced like "ee" in "see"\n\n### 2. The 10 Basic Consonants (자음)\nHangul consonants mimic the physical shape of the mouth, tongue, and throat when producing the sound:\n- **ㄱ** [g/k] — Velar stop (tongue root blocks throat): sounds like "g" initially, softer "k" at word end.\n- **ㄴ** [n] — Alveolar nasal (tongue tip touches upper teeth ridge): "n" as in "nose".\n- **ㄷ** [d/t] — Alveolar stop: "d" initially, "t" finally.\n- **ㄹ** [r/l] — Alveolar flap: light "r/l" flap between vowels.\n- **ㅁ** [m] — Bilabial nasal (square shape of closed lips): "m" as in "mouth".\n- **ㅂ** [b/p] — Bilabial stop: "b" initially, "p" finally.\n- **ㅅ** [s] — Dental sibilant (shape of tooth): "s" as in "sun".\n- **ㅇ** [silent initial / ng final] — Circle: completely silent when placed at the start of a syllable; pronounced "ng" at the end.\n- **ㅈ** [j/ch] — Affricate: "j" as in "jump".\n- **ㅎ** [h] — Glottal fricative (shape of throat with hat): "h" as in "hat".\n\n### 3. Syllable Block Assembly (초성 + 중성)\nHangul letters are assembled into compact square syllable blocks consisting of at least one Initial Consonant + one Medial Vowel:\n- **Vertical Vowels (ㅏ, ㅓ, ㅣ)** sit to the RIGHT of the consonant: **가** (ga), **나** (na), **다** (da), **마** (ma), **바** (ba), **사** (sa), **아** (a), **자** (ja), **하** (ha).\n- **Horizontal Vowels (ㅗ, ㅜ, ㅡ)** sit UNDER the consonant: **고** (go), **노** (no), **도** (do), **모** (mo), **보** (bo), **소** (so), **오** (o), **조** (jo), **호** (ho), **구** (gu), **두** (du), **무** (mu), **부** (bu), **수** (su), **우** (u).\n\n### 4. First Real Words (Built Exclusively from Taught Letters)\n- **나무** [namu] = ㄴ(n) + ㅏ(a) + ㅁ(m) + ㅜ(u) → **tree**\n- **바다** [bada] = ㅂ(b) + ㅏ(a) + ㄷ(d) + ㅏ(a) → **sea / ocean**\n- **가구** [gagu] = ㄱ(g) + ㅏ(a) + ㄱ(g) + ㅜ(u) → **furniture**\n- **오이** [oi] = ㅇ(silent) + ㅗ(o) + ㅇ(silent) + ㅣ(i) → **cucumber**\n- **아이** [ai] = ㅇ(silent) + ㅏ(a) + ㅇ(silent) + ㅣ(i) → **child / kid**\n- **모자** [moja] = ㅁ(m) + ㅗ(o) + ㅈ(j) + ㅏ(a) → **hat / cap**\n- **다리** [dari] = ㄷ(d) + ㅏ(a) + ㄹ(r) + ㅣ(i) → **leg / bridge**\n- **사자** [saja] = ㅅ(s) + ㅏ(a) + ㅈ(j) + ㅏ(a) → **lion**',
    examples: [
      { target: '나무', reading: 'namu', translation: 'tree (ㄴ+ㅏ = 나, ㅁ+ㅜ = 무)' },
      { target: '바다', reading: 'bada', translation: 'sea (ㅂ+ㅏ = 바, ㄷ+ㅏ = 다)' },
      { target: '오이', reading: 'oi', translation: 'cucumber (ㅇ+ㅗ = 오, ㅇ+ㅣ = 이)' },
      { target: '모자', reading: 'moja', translation: 'hat (ㅁ+ㅗ = 모, ㅈ+ㅏ = 자)' }
    ],
    mnemonics: [
      'Vertical vowels (ㅏ, ㅓ, ㅣ) stand tall to the RIGHT of consonants. Horizontal vowels (ㅗ, ㅜ, ㅡ) lie flat UNDERNEATH consonants. When a syllable starts with a vowel sound, ㅇ acts as a silent placeholder!'
    ],
    culturalNotes: [
      'King Sejong created Hangul in 1443 with the scholarly hall Jiphyeonjeon (Hall of Worthies). Korea celebrates Hangul Day on October 9th as a national holiday honoring this scientific script.'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'Which Hangul syllable is formed by combining the initial consonant \'ㄴ\' [n] with the vertical vowel \'ㅏ\' [a]?',
        options: [
          '나 (na) [ㄴ + ㅏ]',
          '노 (no) [ㄴ + ㅗ]',
          '니 (ni) [ㄴ + ㅣ]'
        ],
        answerIndex: 0,
        explanation: 'The consonant \'ㄴ\' [n] placed next to the vertical vowel \'ㅏ\' [a] forms the syllable block \'나\' [na]. \'노\' is n+o, and \'니\' is n+i.'
      },
      {
        prompt: 'Identify the Hangul word meaning "tree" assembled from \'ㄴ + ㅏ\' and \'ㅁ + ㅜ\':',
        options: [
          '나무 (namu - tree)',
          '바다 (bada - sea)',
          '가구 (gagu - furniture)'
        ],
        answerIndex: 0,
        explanation: '\'ㄴ[n] + ㅏ[a] = 나\' and \'ㅁ[m] + ㅜ[u] = 무\', forming \'나무\' [namu] (tree). \'바다\' is sea and \'가구\' is furniture.'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'When a Korean syllable begins with a vowel sound like \'오\' [o] or \'이\' [i], which silent initial consonant letter must occupy the top/left position?',
        options: [
          'ㅇ (Silent initial consonant placeholder)',
          'ㄱ (Velar stop consonant)',
          'ㅁ (Bilabial nasal consonant)'
        ],
        answerIndex: 0,
        explanation: 'The circular consonant \'ㅇ\' is silent when used in the initial position (초성), serving as a necessary graphic placeholder for vowels like in \'오이\' [oi] (cucumber).'
      },
      {
        prompt: 'Select the Hangul word meaning "hat/cap" composed of \'ㅁ + ㅗ\' [mo] and \'ㅈ + ㅏ\' [ja]:',
        options: [
          '모자 (moja - hat)',
          '사자 (saja - lion)',
          '아이 (ai - child)'
        ],
        answerIndex: 0,
        explanation: '\'ㅁ + ㅗ = 모\' [mo] and \'ㅈ + ㅏ = 자\' [ja] combine to form \'모자\' [moja] (hat/cap).'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'Which basic Hangul consonant shape represents the tongue root blocking the throat (Velar stop)?',
        options: [
          'ㄱ (Velar stop [g/k])',
          'ㄴ (Alveolar nasal [n])',
          'ㅁ (Bilabial nasal [m])'
        ],
        answerIndex: 0,
        explanation: '\'ㄱ\' was drawn to depict the physical shape of the tongue root retracting to block the pharynx/throat.'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the Korean Hangul word for "sea/ocean" (formed from ㅂ+ㅏ and ㄷ+ㅏ):',
        acceptedAnswers: [
          '바다'
        ],
        explanation: '\'ㅂ + ㅏ = 바\' [ba], \'ㄷ + ㅏ = 다\' [da] → \'바다\' [bada] (sea).'
      }
    ]
  }
};

curr.lessons['ko-u1-l2'] = {
  id: 'ko-u1-l2',
  subject: 'korean',
  unit: 1,
  lessonNumber: 2,
  title: '복합 모음·격음·경음과 7대 대표 받침 (Complex Vowels, Batchim & Syllable Closure)',
  level: 'A1',
  objective: 'Master compound vowels (ㅐ, ㅔ, ㅘ, ㅝ), aspirated consonants (ㅋ, ㅌ, ㅍ, ㅊ), tense consonants (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ), and the 7 representative Batchim final consonant neutralizations ([ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅇ]).',
  presentation: {
    explanation: 'Now that you know the 10 basic consonants and 6 core vowels, we expand Hangul with compound vowels, strong/tense consonants, and the crucial final consonant system: **Batchim (받침)**.\n\n### 1. Compound Vowels (복합 모음)\n- **ㅐ** [ae] — pronounced \"eh\" (like \"cat\" / \"bed\"): ㅏ + ㅣ = ㅐ (e.g. 배 = bae / boat, pear)\n- **ㅔ** [e] — pronounced \"eh\" (like \"bed\"): ㅓ + ㅣ = ㅔ (e.g. 네 = ne / yes)\n- **ㅘ** [wa] — ㅗ + ㅏ (e.g. 와 = wa / wow, come)\n- **ㅝ** [wo] — ㅜ + ㅓ (e.g. 뭐 = mwo / what)\n- **ㅟ** [wi] — ㅜ + ㅣ (e.g. 귀 = gwi / ear)\n- **ㅢ** [ui / yi] — ㅡ + ㅣ (e.g. 의사 = uisa / doctor)\n\n### 2. Aspirated & Tense Consonants (격음과 경음)\n- **Aspirated (strong puff of air)**: **ㅋ** [kʰ], **ㅌ** [tʰ], **ㅍ** [pʰ], **ㅊ** [chʰ] (e.g. 커피 = keopi / coffee, 코 = ko / nose, 차 = cha / tea).\n- **Tense/Glottalized (tight vocal cords)**: **ㄲ** [kk], **ㄸ** [tt], **ㅃ** [pp], **ㅆ** [ss], **ㅉ** [jj] (e.g. 빵 = ppang / bread, 꽃 = kkot / flower, 딸기 = ttalgi / strawberry).\n\n### 3. The 7 Representative Batchim Sounds (받침 중화)\nBatchim refers to the final consonant placed at the BOTTOM of a syllable block (e.g. 밥 = ㅂ+ㅏ+ㅂ, 강 = ㄱ+ㅏ+ㅇ). Regardless of which consonant appears in the final position, when spoken alone, they neutralize into exactly **7 representative sounds**:\n1. **[ㄱ]** — written as ㄱ, ㅋ, ㄲ (e.g. **책** [chaek] = book, **부엌** [bueok] = kitchen, **밖** [bak] = outside)\n2. **[ㄴ]** — written as ㄴ (e.g. **문** [mun] = door, **손** [son] = hand)\n3. **[ㄷ]** — written as ㄷ, ㅌ, ㅅ, ㅆ, ㅈ, ㅊ, ㅎ (e.g. **옷** [ot] = clothes, **꽃** [kkot] = flower, **끝** [kkeut] = end, **낮** [nat] = daytime)\n4. **[ㄹ]** — written as ㄹ (e.g. **달** [dal] = moon, **물** [mul] = water, **발** [bal] = foot)\n5. **[ㅁ]** — written as ㅁ (e.g. **밤** [bam] = night/chestnut, **봄** [bom] = spring)\n6. **[ㅂ]** — written as ㅂ, ㅍ (e.g. **밥** [bap] = cooked rice/meal, **집** [jip] = house, **잎** [ip] = leaf)\n7. **[ㅇ]** — written as ㅇ (pronounced \"ng\"): (e.g. **강** [gang] = river, **방** [bang] = room)',
    examples: [
      { target: '밥', reading: 'bap', translation: 'cooked rice / meal (Batchim [ㅂ])' },
      { target: '책', reading: 'chaek', translation: 'book (Compound vowel ㅐ + Batchim [ㄱ])' },
      { target: '옷', reading: 'ot', translation: 'clothes (Batchim ㅅ neutralizes to [ㄷ])' },
      { target: '꽃', reading: 'kkot', translation: 'flower (Tense ㄲ + Batchim ㅊ neutralizes to [ㄷ])' },
      { target: '물', reading: 'mul', translation: 'water (ㅁ + ㅜ + ㄹ [ㄹ])' }
    ],
    mnemonics: [
      'Remember the 7 Batchim rule: "가느다란 물방울" (ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅇ). Even though clothes (옷) ends in \'ㅅ\' and flower (꽃) ends in \'ㅊ\', both are pronounced with final stop [ㄷ]!'
    ],
    culturalNotes: [
      'In Korean culture, "밥" (Bap - cooked rice/meal) represents nourishment and hospitality. Asking "밥 먹었어요?" (Have you eaten?) is a common, warm daily greeting.'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'In the word \'옷\' (clothes), the final consonant is written as \'ㅅ\'. When pronounced in isolation, which of the 7 representative Batchim sounds does it neutralize to?',
        options: [
          '[ㄷ] (as in [옫 / ot])',
          '[ㅂ] (as in [옵 / op])',
          '[ㄱ] (as in [옥 / ok])'
        ],
        answerIndex: 0,
        explanation: 'The consonants \'ㅅ, ㅆ, ㅈ, ㅊ, ㄷ, ㅌ, ㅎ\' all neutralize to the representative unreleased stop sound [ㄷ] when in the final Batchim position. Thus \'옷\' is pronounced [ot / 옫].'
      },
      {
        prompt: 'Which Hangul word means "cooked rice / meal" featuring the initial \'ㅂ\', vowel \'ㅏ\', and final Batchim \'ㅂ\'?',
        options: [
          '밥 (bap - cooked rice / meal)',
          '방 (bang - room)',
          '발 (bal - foot)'
        ],
        answerIndex: 0,
        explanation: '\'ㅂ + ㅏ + ㅂ = 밥\' [bap] (cooked rice/meal). \'방\' ends with nasal [ㅇ] (room) and \'발\' ends with [ㄹ] (foot).'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'Identify the word meaning "river" formed by initial \'ㄱ\' [g], vowel \'ㅏ\' [a], and final nasal Batchim \'ㅇ\' [ng]:',
        options: [
          '강 (gang - river)',
          '간 (gan - liver / interval)',
          '갈 (gal - reed / go)'
        ],
        answerIndex: 0,
        explanation: '\'ㄱ + ㅏ + ㅇ = 강\' [gang] (river). \'간\' ends with [n] and \'갈\' ends with [l].'
      },
      {
        prompt: 'Which of the following words contains the compound vowel \'ㅐ\' [ae] and final Batchim \'ㄱ\' [k] meaning "book"?',
        options: [
          '책 (chaek - book)',
          '차 (cha - tea / car)',
          '친구 (chingu - friend)'
        ],
        answerIndex: 0,
        explanation: '\'ㅊ + ㅐ + ㄱ = 책\' [chaek] (book).'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'Which pair of words both neutralize to the representative Batchim sound [ㄷ] at the end of the syllable?',
        options: [
          '옷 (ot - clothes) and 꽃 (kkot - flower)',
          '밥 (bap - rice) and 강 (gang - river)',
          '책 (chaek - book) and 달 (dal - moon)'
        ],
        answerIndex: 0,
        explanation: 'Both \'옷\' (ending in ㅅ) and \'꽃\' (ending in ㅊ) neutralize to [ㄷ] in isolation.'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the 1-syllable Korean Hangul word for "cooked rice / meal" (ㅂ+ㅏ+ㅂ):',
        acceptedAnswers: [
          '밥'
        ],
        explanation: '\'ㅂ + ㅏ + ㅂ = 밥\' [bap] (cooked rice / meal).'
      }
    ]
  }
};

const output = '// Korean curriculum\n(function(global){\n  \'use strict\';\n  var UNITS = ' + JSON.stringify(curr.units, null, 4) + ';\n  var LESSONS = ' + JSON.stringify(curr.lessons, null, 4) + ';\n  var FEARN_KOREAN_CURRICULUM = {\n    id: \'korean\',\n    units: UNITS,\n    lessons: LESSONS\n  };\n  if (typeof module !== \'undefined\' && module.exports) {\n    module.exports = FEARN_KOREAN_CURRICULUM;\n  }\n  global.FEARN_KOREAN_CURRICULUM = FEARN_KOREAN_CURRICULUM;\n})(typeof window !== \'undefined\' ? window : globalThis);\n';

fs.writeFileSync(filePath, output, 'utf8');
console.log('Successfully patched Korean curriculum!');
