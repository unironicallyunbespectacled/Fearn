const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../../data/curricula/japanese.js');
const curr = require(filePath);

curr.lessons['ja-u1-l1'] = {
  id: 'ja-u1-l1',
  subject: 'japanese',
  unit: 1,
  lessonNumber: 1,
  title: '日本語の文字体系と平仮名：母音（あいうえお）とカ行（かきくけこ） (Hiragana Vowels & K-Row)',
  level: 'A1',
  objective: 'Understand the three Japanese scripts (Hiragana, Katakana, Kanji) and master reading and writing the 5 core vowels (あ, い, う, え, お) and K-row consonants (か, き, く, け, こ).',
  presentation: {
    explanation: 'Welcome to Japanese! Japanese uses three distinct scripts working together harmoniously:\n1. **Hiragana (ひらがな)**: 46 phonetic characters used for native Japanese words and grammatical endings.\n2. **Katakana (カタカナ)**: 46 phonetic characters used for foreign loanwords and onomatopoeia.\n3. **Kanji (漢字)**: Chinese logograms representing conceptual meaning.\n\nEvery kana character represents a full mora/syllable. Let us begin with the foundation of all Japanese pronunciation: the **5 basic vowels** and the **K-row**.\n\n### 1. The 5 Core Vowels (あ行 - A-Row)\n- **あ** [a] — pronounced "ah" (as in "father")\n- **い** [i] — pronounced "ee" (as in "meet")\n- **う** [u] — pronounced "oo" (unrounded lips, as in "soup")\n- **え** [e] — pronounced "eh" (as in "pet")\n- **お** [o] — pronounced "oh" (as in "origami")\n\n### 2. The K-Row Consonants (カ行 - Ka-Row)\nFormed by combining the voiceless velar stop [k] with the 5 vowels:\n- **か** [ka] — "k" + "a"\n- **き** [ki] — "k" + "i"\n- **く** [ku] — "k" + "u"\n- **け** [ke] — "k" + "e"\n- **こ** [ko] — "k" + "o"\n\n### 3. First Authentic Japanese Words (Built Strictly from These 10 Kana)\n- **あい** (*ai*) → **love** (あ + い)\n- **うえ** (*ue*) → **up / above** (う + え)\n- **あき** (*aki*) → **autumn / fall** (あ + き)\n- **かお** (*kao*) → **face** (か + お)\n- **えき** (*eki*) → **train station** (え + き)\n- **こえ** (*koe*) → **voice** (こ + え)\n- **きく** (*kiku*) → **chrysanthemum / to listen** (き + く)\n- **いけ** (*ike*) → **pond** (い + け)',
    examples: [
      { target: 'あい', reading: 'ai', translation: 'love (あ [a] + い [i])' },
      { target: 'うえ', reading: 'ue', translation: 'up / above (う [u] + え [e])' },
      { target: 'えき', reading: 'eki', translation: 'train station (え [e] + き [ki])' },
      { target: 'かお', reading: 'kao', translation: 'face (か [ka] + お [o])' }
    ],
    mnemonics: [
      'あ looks like an Apple with a cross. い looks like two parallel needles. う looks like someone hunched over in pain. え looks like an Energetic ninja running. お looks like a golf ball On the tee!'
    ],
    culturalNotes: [
      'Hiragana evolved during the Heian period (794-1185) from cursive calligraphy of Chinese characters (Man\'yogana) and was historically championed by court women authors who wrote masterpieces like The Tale of Genji.'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'Which Hiragana character corresponds to the vowel sound [i] (as in "meet")?',
        options: [
          'い (i)',
          'あ (a)',
          'う (u)',
          'え (e)'
        ],
        answerIndex: 0,
        explanation: '「い」 represents the vowel sound [i]. 「あ」 is [a], 「う」 is [u], and 「え」 is [e].'
      },
      {
        prompt: 'Select the Hiragana word meaning "train station" composed of 「え」 [e] and 「き」 [ki]:',
        options: [
          'えき (eki - train station)',
          'あき (aki - autumn)',
          'かお (kao - face)',
          'あい (ai - love)'
        ],
        answerIndex: 0,
        explanation: '「え」 [e] + 「き」 [ki] = 「えき」 (*eki*), which means train station.'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'Which Hiragana character from the K-row is pronounced [ko]?',
        options: [
          'こ (ko)',
          'か (ka)',
          'き (ki)',
          'く (ku)'
        ],
        answerIndex: 0,
        explanation: '「こ」 is the K-row character pronounced [ko].'
      },
      {
        prompt: 'Identify the Hiragana word meaning "face" combining 「か」 [ka] and 「お」 [o]:',
        options: [
          'かお (kao - face)',
          'こえ (koe - voice)',
          'うえ (ue - above)',
          'いけ (ike - pond)'
        ],
        answerIndex: 0,
        explanation: '「か」 [ka] + 「お」 [o] forms 「かお」 (*kao*), meaning face.'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'Which of the following Hiragana words means "love" (formed from vowels 「あ」 and 「い」)?',
        options: [
          'あい (ai - love)',
          'うえ (ue - up)',
          'あき (aki - autumn)',
          'えき (eki - station)'
        ],
        answerIndex: 0,
        explanation: '「あ」 [a] + 「い」 [i] = 「あい」 (*ai* - love).'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the 2-character Hiragana word for "train station" (e-ki):',
        acceptedAnswers: [
          'えき'
        ],
        explanation: '「え」 + 「き」 = 「えき」 (*eki*).'
      }
    ]
  }
};

curr.lessons['ja-u1-l2'] = {
  id: 'ja-u1-l2',
  subject: 'japanese',
  unit: 1,
  lessonNumber: 2,
  title: '平仮名の習得２：サ行（さしすせそ）とタ行（たちつてと） (Hiragana S-Row & T-Row)',
  level: 'A1',
  objective: 'Master reading and writing the S-row (さ, し, す, せ, そ) and T-row (た, ち, つ, て, と), noting special phonetic realizations (し = shi, ち = chi, つ = tsu).',
  presentation: {
    explanation: 'Building on the vowels and K-row, we now introduce the **S-row (サ行)** and **T-row (タ行)**.\n\n### 1. The S-Row (サ行 - Sa-Row)\n- **さ** [sa] — "s" + "a"\n- **し** [shi] — **Special phonetic rule**: Palatalized to \"shee\" (never \"see\")\n- **す** [su] — "s" + "u" (quiet, slightly unrounded \"soo\")\n- **せ** [se] — "s" + "e"\n- **そ** [so] — "s" + "o"\n\n### 2. The T-Row (タ行 - Ta-Row)\n- **た** [ta] — "t" + "a"\n- **ち** [chi] — **Special phonetic rule**: Affricate \"chee\" (never \"tee\")\n- **つ** [tsu] — **Special phonetic rule**: Alveolar affricate \"tsoo\" (like \"ts\" in \"cats\")\n- **て** [te] — "t" + "e"\n- **と** [to] — "t" + "o"\n\n### 3. New Vocabulary (Exclusively Using Taught Kana)\n- **すし** (*sushi*) → **sushi** (す + し)\n- **あさ** (*asa*) → **morning** (あ + さ)\n- **うそ** (*uso*) → **lie / untruth** (う + そ)\n- **たこ** (*tako*) → **octopus** (た + こ)\n- **くつ** (*kutsu*) → **shoes** (く + つ)\n- **せかい** (*sekai*) → **world** (せ + か + い)\n- **て** (*te*) → **hand** (て)\n- **つき** (*tsuki*) → **moon** (つ + き)\n- **した** (*shita*) → **under / below** (し + た)\n- **とけい** (*tokei*) → **clock / watch** (と + け + い)',
    examples: [
      { target: 'すし', reading: 'sushi', translation: 'sushi (す [su] + し [shi])' },
      { target: 'あさ', reading: 'asa', translation: 'morning (あ [a] + さ [sa])' },
      { target: 'つき', reading: 'tsuki', translation: 'moon (つ [tsu] + き [ki])' },
      { target: 'せかい', reading: 'sekai', translation: 'world (せ [se] + か [ka] + い [i])' }
    ],
    mnemonics: [
      'し looks like a fish hook dipping into the sea (shi). ち looks like a cheerleader waving pom-poms (chi). つ looks like the curling wave of a Tsunami (tsu).'
    ],
    culturalNotes: [
      'Japanese mora timing is strictly isometric: each kana character takes the exact same duration of time to pronounce, giving Japanese its characteristic rhythmic, melodic cadence.'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'Which of the following Hiragana characters represents the sound [shi]?',
        options: [
          'し (shi)',
          'さ (sa)',
          'す (su)',
          'せ (se)'
        ],
        answerIndex: 0,
        explanation: '「し」 is pronounced [shi]. In Japanese phonology, [s] + [i] naturally palatalizes to [shi].'
      },
      {
        prompt: 'Identify the world-famous culinary word meaning "sushi" spelled with 「す」 and 「し」:',
        options: [
          'すし (sushi)',
          'たこ (tako - octopus)',
          'くつ (kutsu - shoes)',
          'あさ (asa - morning)'
        ],
        answerIndex: 0,
        explanation: '「す」 [su] + 「し」 [shi] forms 「すし」 (*sushi*).'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'Which character represents the affricate sound [tsu] (as in "tsunami")?',
        options: [
          'つ (tsu)',
          'た (ta)',
          'ち (chi)',
          'て (te)'
        ],
        answerIndex: 0,
        explanation: '「つ」 is pronounced [tsu].'
      },
      {
        prompt: 'Select the Hiragana word meaning "moon" combining 「つ」 [tsu] and 「き」 [ki]:',
        options: [
          'つき (tsuki - moon)',
          'すき (suki - liked)',
          'たこ (tako - octopus)',
          'うそ (uso - lie)'
        ],
        answerIndex: 0,
        explanation: '「つ」 [tsu] + 「き」 [ki] = 「つき」 (*tsuki* - moon).'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'Which Hiragana word means "shoes" formed from 「く」 [ku] and 「つ」 [tsu]?',
        options: [
          'くつ (kutsu - shoes)',
          'あさ (asa - morning)',
          'せかい (sekai - world)',
          'すし (sushi)'
        ],
        answerIndex: 0,
        explanation: '「く」 [ku] + 「つ」 [tsu] = 「くつ」 (*kutsu* - shoes).'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the 2-character Hiragana word for "sushi" (su-shi):',
        acceptedAnswers: [
          'すし'
        ],
        explanation: '「す」 + 「し」 = 「すし」 (*sushi*).'
      }
    ]
  }
};

curr.lessons['ja-u1-l3'] = {
  id: 'ja-u1-l3',
  subject: 'japanese',
  unit: 1,
  lessonNumber: 3,
  title: '平仮名の習得３：ナ行（なにぬねの）とハ行（はひふへほ） (Hiragana N-Row & H-Row)',
  level: 'A1',
  objective: 'Master reading and writing the N-row (な, に, ぬ, ね, の) and H-row (は, ひ, ふ, へ, ほ), including the bilabial [fu] and the grammatical topic particle pronunciation of は as [wa].',
  presentation: {
    explanation: 'Now we introduce the **N-row (ナ行)** and **H-row (ハ行)**.\n\n### 1. The N-Row (ナ行 - Na-Row)\n- **な** [na] — "n" + "a"\n- **に** [ni] — "n" + "i"\n- **ぬ** [nu] — "n" + "u" (loop at the tail)\n- **ね** [ne] — "n" + "e" (loop at the bottom right)\n- **の** [no] — "n" + "o" (single spiral stroke)\n\n### 2. The H-Row (ハ行 - Ha-Row)\n- **は** [ha] — "h" + "a" (**Note**: When used as a topic particle in grammar, は is pronounced [wa])\n- **ひ** [hi] — "h" + "i"\n- **ふ** [fu] — **Special phonetic rule**: Bilabial fricative (softly blow air between lips without teeth touching)\n- **へ** [he] — "h" + "e" (**Note**: When used as direction particle, へ is pronounced [e])\n- **ほ** [ho] — "h" + "o" (top line does not pierce through, unlike ま)\n\n### 3. Essential Vocabulary (Taught Kana Only)\n- **いぬ** (*inu*) → **dog** (い + ぬ)\n- **ねこ** (*neko*) → **cat** (ね + こ)\n- **はな** (*hana*) → **flower / nose** (は + な)\n- **ひと** (*hito*) → **person / human** (ひ + と)\n- **ふね** (*fune*) → **boat / ship** (ふ + ね)\n- **ほし** (*hoshi*) → **star** (ほ + し)\n- **なつ** (*natsu*) → **summer** (な + つ)\n- **にく** (*niku*) → **meat** (に + く)\n- **はし** (*hashi*) → **bridge / chopsticks** (は + し)',
    examples: [
      { target: 'いぬ', reading: 'inu', translation: 'dog (い [i] + ぬ [nu])' },
      { target: 'ねこ', reading: 'neko', translation: 'cat (ね [ne] + こ [ko])' },
      { target: 'はな', reading: 'hana', translation: 'flower (は [ha] + な [na])' },
      { target: 'ひと', reading: 'hito', translation: 'person (ひ [hi] + と [to])' }
    ],
    mnemonics: [
      'いぬ is dog (pointing to its nose - nu). ねこ is cat (with curled tail - ne). の is a single clean swirl, like a "NO smoking" sign circle!'
    ],
    culturalNotes: [
      'Cats (ねこ) and dogs (いぬ) hold special places in Japanese culture, from historic folklore and art to modern cat cafés and famous faithful dogs like Hachiko.'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'Which Hiragana word means "cat" combining 「ね」 [ne] and 「こ」 [ko]?',
        options: [
          'ねこ (neko - cat)',
          'いぬ (inu - dog)',
          'はな (hana - flower)',
          'ひと (hito - person)'
        ],
        answerIndex: 0,
        explanation: '「ね」 [ne] + 「こ」 [ko] forms 「ねこ」 (*neko* - cat).'
      },
      {
        prompt: 'Which character represents the bilabial fricative sound [fu] in the H-row?',
        options: [
          'ふ (fu)',
          'は (ha)',
          'ひ (hi)',
          'ほ (ho)'
        ],
        answerIndex: 0,
        explanation: '「ふ」 is the H-row character pronounced [fu], made by gently blowing air through unrounded lips.'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'Select the Hiragana word meaning "dog" spelled with 「い」 and 「ぬ」:',
        options: [
          'いぬ (inu - dog)',
          'ねこ (neko - cat)',
          'ふね (fune - boat)',
          'ほし (hoshi - star)'
        ],
        answerIndex: 0,
        explanation: '「い」 [i] + 「ぬ」 [nu] = 「いぬ」 (*inu* - dog).'
      },
      {
        prompt: 'Which word means "flower" or "nose" formed from 「は」 [ha] and 「な」 [na]?',
        options: [
          'はな (hana - flower/nose)',
          'なつ (natsu - summer)',
          'ひと (hito - person)',
          'にく (niku - meat)'
        ],
        answerIndex: 0,
        explanation: '「は」 [ha] + 「な」 [na] = 「はな」 (*hana*).'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'Which Hiragana character is drawn as a single graceful circular spiral stroke and represents the sound [no]?',
        options: [
          'の (no)',
          'ぬ (nu)',
          'ね (ne)',
          'な (na)'
        ],
        answerIndex: 0,
        explanation: '「の」 is written in a single continuous spiral stroke representing [no].'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the 2-character Hiragana word for "cat" (ne-ko):',
        acceptedAnswers: [
          'ねこ'
        ],
        explanation: '「ね」 + 「こ」 = 「ねこ」 (*neko*).'
      }
    ]
  }
};

curr.lessons['ja-u1-l4'] = {
  id: 'ja-u1-l4',
  subject: 'japanese',
  unit: 1,
  lessonNumber: 4,
  title: '平仮名の習得４：マ行・ヤ行・ラ行・ワ行・ん (Complete 46 Hiragana Syllabary)',
  level: 'A1',
  objective: 'Complete all 46 basic Hiragana characters by mastering M-row (まみむめも), Y-row (やゆよ), R-row (らりるれろ), W-row (わを), and the nasal coda ん (n).',
  presentation: {
    explanation: 'Congratulations! In this lesson you complete all **46 fundamental Hiragana characters**.\n\n### 1. The M-Row (マ行 - Ma-Row)\n- **ま** [ma], **み** [mi], **む** [mu], **め** [me], **も** [mo]\n\n### 2. The Y-Row (ヤ行 - Ya-Row — 3 Kana)\n- **や** [ya], **ゆ** [yu], **よ** [yo]\n\n### 3. The R-Row (ラ行 - Ra-Row)\n- **ら** [ra], **り** [ri], **る** [ru], **れ** [re], **ろ** [ro]\n- **Sound cue**: The Japanese \"r\" is an alveolar tap (like the \"tt\" in American English \"butter\"), flicking the tongue tip against the roof of the mouth.\n\n### 4. The W-Row (ワ行) & Nasal Coda ん\n- **わ** [wa] — "w" + "a"\n- **を** [wo / o] — Used strictly as the grammatical direct object particle.\n- **ん** [n] — The only independent consonant in Japanese; a nasal mora coda that never begins a word.\n\n### 5. Essential Japanese Vocabulary (Full Hiragana Literacy)\n- **やま** (*yama*) → **mountain** (や + ま)\n- **ゆめ** (*yume*) → **dream** (ゆ + め)\n- **さくら** (*sakura*) → **cherry blossom** (さ + く + ら)\n- **くるま** (*kuruma*) → **car / vehicle** (く + る + ま)\n- **ほん** (*hon*) → **book** (ほ + ん)\n- **わたし** (*watashi*) → **I / me** (わ + た + し)\n- **みず** (*mizu*) → **water** (み + ず)\n- **もり** (*mori*) → **forest** (も + り)\n- **そら** (*sora*) → **sky** (そ + ら)\n- **よる** (*yoru*) → **night** (よ + る)',
    examples: [
      { target: 'さくら', reading: 'sakura', translation: 'cherry blossom (さ + く + ら)' },
      { target: 'やま', reading: 'yama', translation: 'mountain (や + ま)' },
      { target: 'わたし', reading: 'watashi', translation: 'I / me (わ + た + し)' },
      { target: 'ほん', reading: 'hon', translation: 'book (ほ + ん)' }
    ],
    mnemonics: [
      'や looks like a Yak with horns. ゆ looks like a swimming fish. よ looks like a Yo-yo hanging from a finger. わ looks like a graceful swan (wa).'
    ],
    culturalNotes: [
      'Sakura (さくら - cherry blossoms) blooming in spring represents the ephemeral beauty of life (mono no aware) and marks the start of the Japanese school and fiscal year in April.'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'Which Hiragana word means "cherry blossom" spelled with 「さ」, 「く」, and 「ら」?',
        options: [
          'さくら (sakura - cherry blossom)',
          'くるま (kuruma - car)',
          'わたし (watashi - I/me)',
          'やま (yama - mountain)'
        ],
        answerIndex: 0,
        explanation: '「さ」 [sa] + 「く」 [ku] + 「ら」 [ra] = 「さくら」 (*sakura*).'
      },
      {
        prompt: 'What is the unique property of the Hiragana character 「ん」 [n]?',
        options: [
          'It is the only independent consonant mora and never starts a native word',
          'It is pronounced as a vowel',
          'It is only used in Katakana',
          'It is pronounced identical to "a"'
        ],
        answerIndex: 0,
        explanation: '「ん」 [n] is a distinct nasal mora that closes syllables and never appears at the start of native Japanese words.'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'Identify the word for "mountain" formed by combining 「や」 [ya] and 「ま」 [ma]:',
        options: [
          'やま (yama - mountain)',
          'ゆめ (yume - dream)',
          'そら (sora - sky)',
          'もり (mori - forest)'
        ],
        answerIndex: 0,
        explanation: '「や」 [ya] + 「ま」 [ma] = 「やま」 (*yama* - mountain).'
      },
      {
        prompt: 'Select the Hiragana word meaning "I / me" spelled with 「わ」, 「た」, and 「し」:',
        options: [
          'わたし (watashi - I/me)',
          'あなた (anata - you)',
          'くるま (kuruma - car)',
          'ほん (hon - book)'
        ],
        answerIndex: 0,
        explanation: '「わ」 [wa] + 「た」 [ta] + 「し」 [shi] = 「わたし」 (*watashi* - I / me).'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'Which Hiragana word means "book" formed from 「ほ」 [ho] and 「ん」 [n]?',
        options: [
          'ほん (hon - book)',
          'はな (hana - flower)',
          'ひと (hito - person)',
          'ふね (fune - boat)'
        ],
        answerIndex: 0,
        explanation: '「ほ」 [ho] + 「ん」 [n] = 「ほん」 (*hon* - book).'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the 3-character Hiragana word for "cherry blossom" (sa-ku-ra):',
        acceptedAnswers: [
          'さくら'
        ],
        explanation: '「さ」 + 「く」 + 「ら」 = 「さくら」 (*sakura*).'
      }
    ]
  }
};

curr.lessons['ja-u1-l5'] = {
  id: 'ja-u1-l5',
  subject: 'japanese',
  unit: 1,
  lessonNumber: 5,
  title: '濁音・半濁音・拗音・促音と基本の挨拶 (Voiced Kana, Combinations & Core Greetings)',
  level: 'A1',
  objective: 'Master Dakuten voicing marks (がざだば), Handakuten (ぱ), Yoon contracted sounds (きゃ, しゃ, ちょ), Sokuon double consonants (っ), and daily polite greetings (Konnichiwa, Arigatou gozaimasu).',
  presentation: {
    explanation: 'Now we master the phonetic modifications that complete spoken Japanese, along with standard polite daily greetings.\n\n### 1. Dakuten (濁音 - Tenten ゛) & Handakuten (半濁音 - Maru ゜)\n- **が ぎ ぐ げ ご** [ga, gi, gu, ge, go] — Voicing the K-row to G-row.\n- **ざ じ ず ぜ ぞ** [za, ji, zu, ze, zo] — Voicing the S-row to Z-row (じ is [ji]).\n- **だ ぢ づ で ど** [da, ji, zu, de, do] — Voicing the T-row to D-row.\n- **ば び ぶ べ ぼ** [ba, bi, bu, be, bo] — Voicing the H-row to B-row.\n- **ぱ ぴ ぷ ぺ ぽ** [pa, pi, pu, pe, po] — Handakuten circles create the P-row.\n\n### 2. Yoon (拗音 - Contracted Combos) & Sokuon (促音 - Small っ)\n- **Yoon**: Combining a [i]-vowel kana with small ゃ (ya), ゅ (yu), ょ (yo): **きゃ** (kya), **しゃ** (sha), **ちゃ** (cha), **にゃ** (nya), **ひゃ** (hya), **りょ** (ryo), **きょう** (kyou - today), **おちゃ** (ocha - green tea).\n- **Sokuon (Small っ)**: Creates a glottal stop / doubled consonant hold: **がっこう** (*gakkou* - school), **きっぷ** (*kippu* - ticket).\n\n### 3. Essential Daily Japanese Greetings (In Authentic Hiragana)\n- **こんにちは** (*Konnichiwa*) → **Hello / Good afternoon** (Note: final は is pronounced [wa])\n- **おはようございます** (*Ohayou gozaimasu*) → **Good morning (polite)**\n- **ありがとうございます** (*Arigatou gozaimasu*) → **Thank you very much (polite)**\n- **すみません** (*Sumimasen*) → **Excuse me / I am sorry / Thank you**\n- **さようなら** (*Sayounara*) → **Goodbye**\n- **はじめまして** (*Hajimemashite*) → **Nice to meet you (first time)**',
    examples: [
      { target: 'こんにちは', reading: 'Konnichiwa', translation: 'Hello / Good afternoon (everyday polite greeting)' },
      { target: 'おはようございます', reading: 'Ohayou gozaimasu', translation: 'Good morning (respectful/polite)' },
      { target: 'ありがとうございます', reading: 'Arigatou gozaimasu', translation: 'Thank you very much (polite gratitude)' },
      { target: 'すみません', reading: 'Sumimasen', translation: 'Excuse me / I am sorry (multi-purpose courtesy)' }
    ],
    mnemonics: [
      'Tenten (゛) adds vocal cord vibration turning K->G, S->Z, T->D, H->B. Maru (゜) turns H->P! Small っ acts as a 1-beat pause before the next consonant.'
    ],
    culturalNotes: [
      'Bowing (お辞儀 - ojigi) accompanies greetings in Japan. A slight 15-degree nod is used for casual greetings, while a 30-degree bow expresses deep respect and gratitude.'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'Which standard polite greeting means "Good morning" in Japanese?',
        options: [
          'おはようございます (Ohayou gozaimasu - Good morning)',
          'こんにちは (Konnichiwa - Hello/Good afternoon)',
          'さようなら (Sayounara - Goodbye)',
          'すみません (Sumimasen - Excuse me)'
        ],
        answerIndex: 0,
        explanation: '「おはようございます」 (*Ohayou gozaimasu*) is the standard polite morning greeting.'
      },
      {
        prompt: 'What sound transformation occurs when Dakuten (゛) is added to the H-row (はひふへほ)?',
        options: [
          'It becomes the voiced B-row (ばびぶべぼ)',
          'It becomes the P-row (ぱぴぷぺぽ)',
          'It becomes the G-row (がぎぐげご)',
          'It becomes the Z-row (ざじずぜぞ)'
        ],
        answerIndex: 0,
        explanation: 'Adding Dakuten (゛) to the H-row creates the voiced [b] sounds: ば, び, ぶ, べ, ぼ.'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'Select the versatile Japanese phrase meaning "Excuse me" or "I am sorry":',
        options: [
          'すみません (Sumimasen - Excuse me / Sorry)',
          'ありがとうございます (Arigatou gozaimasu - Thank you)',
          'はじめまして (Hajimemashite - Nice to meet you)',
          'こんにちは (Konnichiwa - Hello)'
        ],
        answerIndex: 0,
        explanation: '「すみません」 (*Sumimasen*) is used to get attention (excuse me), apologize (sorry), or show appreciation.'
      },
      {
        prompt: 'In the greeting 「こんにちは」 (Konnichiwa), how is the final character 「は」 pronounced?',
        options: [
          '[wa] (Pronounced "wa" as an archaic topic marker)',
          '[ha] (Always pronounced "ha")',
          '[he] (Pronounced "he")',
          '[ho] (Pronounced "ho")'
        ],
        answerIndex: 0,
        explanation: 'In 「こんにちは」 and 「こんばんは」, the final 「は」 is historical topic particle and is pronounced [wa].'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'Which phrase is the standard polite expression for "Thank you very much"?',
        options: [
          'ありがとうございます (Arigatou gozaimasu - Thank you very much)',
          'おはようございます (Ohayou gozaimasu - Good morning)',
          'さようなら (Sayounara - Goodbye)',
          'はじめまして (Hajimemashite - Nice to meet you)'
        ],
        answerIndex: 0,
        explanation: '「ありがとうございます」 (*Arigatou gozaimasu*) expresses polite gratitude.'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the 5-character Hiragana greeting for "Hello / Good afternoon" (ko-n-ni-chi-wa):',
        acceptedAnswers: [
          'こんにちは'
        ],
        explanation: '「こ」 + 「ん」 + 「に」 + 「ち」 + 「は」 = 「こんにちは」 (*Konnichiwa*).'
      }
    ]
  }
};

const output = 'const FEARN_JAPANESE_CURRICULUM = ' + JSON.stringify(curr, null, 2) + ';\n\nif (typeof module !== "undefined" && module.exports) {\n  module.exports = FEARN_JAPANESE_CURRICULUM;\n}\nif (typeof window !== "undefined") {\n  window.FEARN_CURRICULA = window.FEARN_CURRICULA || {};\n  window.FEARN_CURRICULA[\'japanese\'] = FEARN_JAPANESE_CURRICULUM;\n}\n';

fs.writeFileSync(filePath, output, 'utf8');
console.log('Successfully patched Japanese curriculum Unit 1!');
