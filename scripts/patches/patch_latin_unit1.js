const fs = require('fs');
const path = require('path');

// Helper to update and format curriculum file
function updateCurriculum(subj, updater) {
  const filePath = path.resolve(__dirname, `../../data/curricula/${subj}.js`);
  const curr = require(filePath);
  updater(curr);
  
  const output = `// ${curr.name || subj} curriculum\n(function(global){\n  'use strict';\n  var UNITS = ${JSON.stringify(curr.units, null, 4)};\n  var LESSONS = ${JSON.stringify(curr.lessons, null, 4)};\n  var CURRICULUM = { id: '${subj}', name: '${curr.name || subj}', units: UNITS, lessons: LESSONS };\n  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};\n  global.FEARN_CURRICULA['${subj}'] = CURRICULUM;\n  if (typeof module !== 'undefined' && module.exports) module.exports = CURRICULUM;\n})(typeof window !== 'undefined' ? window : global);\n`;
  
  fs.writeFileSync(filePath, output, 'utf8');
  console.log(`Updated ${subj} Unit 1!`);
}

// 1. TURKISH (turkish.js)
updateCurriculum('turkish', (curr) => {
  curr.lessons['tr-u1-l1'] = {
    id: 'tr-u1-l1',
    subject: 'turkish',
    unit: 1,
    lessonNumber: 1,
    title: 'Türk Alfabesi, Özel Harfler ve İki Yönlü Ses Uyumları (The 29-Letter Turkish Alphabet & Special Characters)',
    level: 'A1',
    objective: 'Master the 29-letter Turkish Latin alphabet, the 6 unique Turkish characters (Ç, Ğ, I/ı, İ/i, Ö, Ş, Ü), absence of Q/W/X, and 2-fold Vowel Harmony (A-E rules).',
    presentation: {
      explanation: 'Türkçeye hoş geldiniz! Welcome to Turkish (Türkçe)! Turkish uses a strictly phonetic **29-letter Latin alphabet** created during Atatürk\'s reforms in 1928. In Turkish, every letter corresponds to exactly one sound—what you see is always what you pronounce!\n\n### 1. The 6 Special Turkish Letters\n- **Ç ç** [tʃ] — Like "ch" in "chair" (e.g. **çay** = tea, **çok** = very)\n- **Ğ ğ** (Yumuşak G / Soft G) — **Never appears at the beginning of a word!** It is silent and elongates the preceding vowel (e.g. **dağ** = [da:] mountain, **sağ ol** = thank you)\n- **I ı (Undotted I)** [ɯ] — Close back unrounded vowel (like the "a" in "sofa" or "i" in "cousin" — e.g. **kapı** = door, **ılık** = warm)\n- **İ i (Dotted I)** [i] — Close front vowel (like "ee" in "see" — e.g. **iyi** = good, **İstanbul**)\n- **Ö ö** [ø] — Like German "ö" or French "eu" (e.g. **göz** = eye, **ördek** = duck)\n- **Ş ş** [ʃ] — Like "sh" in "shoe" (e.g. **akşam** = evening, **şeker** = sugar)\n- **Ü ü** [y] — Like German "ü" or French "u" (e.g. **gün** = day, **güzel** = beautiful)\n\n*(Note: The letters Q, W, and X do not exist in the official Turkish alphabet!)*\n\n### 2. İki Yönlü Büyük Ünlü Uyumu (2-Fold Major Vowel Harmony: A / E)\nTurkish is an **agglutinative language** where suffixes attach to roots based on vowel harmony:\n- **Kalın Ünlüler (Back Vowels: A, I, O, U)** &rarr; take suffix with **-A** (e.g. Plural **-lar**: *araba &rarr; arabalar* / cars, *kapı &rarr; kapılar* / doors)\n- **İnce Ünlüler (Front Vowels: E, İ, Ö, Ü)** &rarr; take suffix with **-E** (e.g. Plural **-ler**: *ev &rarr; evler* / houses, *gün &rarr; günler* / days)',
      examples: [
        { target: 'çay', reading: 'chay', translation: 'tea (ç [ch] + a + y)' },
        { target: 'gün', reading: 'gyun', translation: 'day (g + ü [front rounded] + n)' },
        { target: 'kapı', reading: 'kah-puh', translation: 'door (k + a + p + ı [undotted])' },
        { target: 'dağ', reading: 'dah', translation: 'mountain (d + a + ğ [lengthens a])' }
      ],
      mnemonics: [
        'Dot rule: capital I has no dot (I &rarr; ı), while dotted İ keeps its dot in uppercase too (İ &rarr; i)! Yumuşak G (ğ) is the soft silent hero that stretches vowels.'
      ],
      culturalNotes: [
        'Turkish tea (çay) served in tulip-shaped glasses (ince belli bardak) is the national symbol of hospitality, consumed at any time of day from Istanbul to Anatolia.'
      ]
    },
    guidedPractice: {
      items: [
        {
          prompt: 'Which Turkish letter is silent and functions to lengthen the preceding vowel sound (as in «dağ» / mountain)?',
          options: [
            'Ğ ğ (Yumuşak G / Soft G)',
            'Ç ç',
            'Ş ş',
            'I ı'
          ],
          answerIndex: 0,
          explanation: '«Ğ ğ» (Yumuşak G) never makes a hard consonant sound; it lengthens the preceding vowel.'
        },
        {
          prompt: 'According to 2-fold Vowel Harmony, what is the correct plural form of «ev» (house - front vowel E)?',
          options: [
            'evler (takes -ler for front vowels)',
            'evlar',
            'evlor',
            'evlur'
          ],
          answerIndex: 0,
          explanation: 'Front vowels (e, i, ö, ü) take the plural suffix «-ler» (*evler*).'
        }
      ]
    },
    independentPractice: {
      items: [
        {
          prompt: 'What sound does the undotted Turkish vowel «I ı» make in words like «kapı» (door)?',
          options: [
            'Close back unrounded vowel [ɯ] (like "uh/ih" in cousin)',
            'Like "ee" in see',
            'Like "oo" in moon',
            'Silent'
          ],
          answerIndex: 0,
          explanation: 'Undotted «ı» represents the back vowel [ɯ].'
        },
        {
          prompt: 'Which of the following letters is NOT part of the official 29-letter Turkish alphabet?',
          options: [
            'W (Q, W, X do not exist in Turkish)',
            'Ç',
            'Ğ',
            'Ş'
          ],
          answerIndex: 0,
          explanation: 'The letters Q, W, and X do not exist in the official Turkish alphabet.'
        }
      ]
    },
    checkpointTest: {
      items: [
        {
          type: 'multiple-choice',
          prompt: 'What does the Turkish word «çay» mean in English?',
          options: [
            'tea',
            'coffee',
            'water',
            'door'
          ],
          answerIndex: 0,
          explanation: '«çay» means "tea".'
        },
        {
          type: 'typed-recall',
          prompt: 'Type the Turkish word for "tea" (c-a-y with cedilla):',
          acceptedAnswers: [
            'çay',
            'cay'
          ],
          explanation: '«çay» = tea.'
        }
      ]
    }
  };
});

// 2. GERMAN (german.js)
updateCurriculum('german', (curr) => {
  curr.lessons['de-u1-l1'] = {
    id: 'de-u1-l1',
    subject: 'german',
    unit: 1,
    lessonNumber: 1,
    title: 'Das deutsche Alphabet, Umlaute (Ä, Ö, Ü), Eszett (ß) und Nomen-Großschreibung (German Alphabet, Umlauts & Orthography)',
    level: 'A1',
    objective: 'Master the 26 German alphabet letters plus 3 Umlauts (Ä, Ö, Ü), the Eszett (ß), consonant clusters (ch, sch, sp, st), diphthongs (ei vs ie), and the universal Capitalization of Nouns rule.',
    presentation: {
      explanation: 'Willkommen zum Deutschlernen! Welcome to German (Deutsch)! German pronunciation is remarkably logical and rule-governed. Once you learn the core orthographic rules, you can pronounce any German word flawlessly.\n\n### 1. Die 3 Umlaute & Das Eszett\n- **Ä ä** [ɛ / e:] — Rounded open "e" (like "bed" or "air" — e.g. **Mädchen** = girl, **Äpfel** = apples)\n- **Ö ö** [ø / œ] — Shape lips for "O", say "E" (e.g. **schön** = beautiful, **Öl** = oil)\n- **Ü ü** [y / ʏ] — Shape lips for "U" (whistle), say "EE" (e.g. **über** = over/about, **fünf** = five)\n- **ß (Eszett / Scharfes S)** [s] — Sharp voiceless "s" sound used after long vowels and diphthongs (e.g. **Straße** = street, **groß** = big/tall, **heißen** = to be called)\n\n### 2. Critical Consonant Clusters & Letter Combinations\n- **ch**: \n  - *ich-Laut* [ç] (soft hiss after e, i, ä, ö, ü — e.g. **ich** = I, **nicht** = not)\n  - *ach-Laut* [x] (throat rasp after a, o, u, au — e.g. **Buch** = book, **Nacht** = night)\n- **sch** [ʃ] — English "sh" (e.g. **Schule** = school, **schreiben** = to write)\n- **sp / st** at start of word &rarr; pronounced **[ʃp] / [ʃt]** (e.g. **Sport** = "shport", **Stadt** = "shtadt")\n- **w** [v] — English "v" (e.g. **Wasser** = water), **v** [f] — English "f" (e.g. **Vater** = father, **vier** = four)\n- **z** [ts] — like "ts" in "cats" (e.g. **Zeit** = time, **Zimmer** = room)\n\n### 3. Key Diphthongs & The Noun Rule\n- **ei** [ai] — "eye" (e.g. **mein** = my) vs **ie** [i:] — "ee" (e.g. **hier** = here, **sie** = she/they)\n- **eu / äu** [ɔy] — "oy" (e.g. **neu** = new, **Häuser** = houses)\n- **CRITICAL GERMAN RULE**: **EVERY NOUN IN GERMAN IS ALWAYS CAPITALIZED** (e.g. *der Tag*, *die Nacht*, *das Haus*, *das Wasser*)!',
      examples: [
        { target: 'schön', reading: 'shø:n', translation: 'beautiful / nice (sch [sh] + ö [umlaut] + n)' },
        { target: 'Straße', reading: 'SHTRAH-suh', translation: 'street (st [sht] + a + ß [sharp s] + e)' },
        { target: 'Wasser', reading: 'VAH-ser', translation: 'water (w [v] + a + ss + er)' },
        { target: 'Zeit', reading: 'tsyt', translation: 'time (z [ts] + ei [eye] + t)' }
      ],
      mnemonics: [
        'Diphthongs: "When E and I go walking, the LAST one does the talking!" (EI = Eye, IE = Eeee)! And ALWAYS capitalize every Noun in German!'
      ],
      culturalNotes: [
        'German noun capitalization dates back to Baroque printing traditions in the 16th-17th centuries, distinguishing substantive concepts clearly on the printed page.'
      ]
    },
    guidedPractice: {
      items: [
        {
          prompt: 'What unique grammatical orthography rule applies to ALL German nouns in writing?',
          options: [
            'Every single noun is always capitalized (e.g. das Haus, der Tag)',
            'Nouns are written in italics',
            'Nouns never end in vowels',
            'Nouns cannot be pluralized'
          ],
          answerIndex: 0,
          explanation: 'In German, all nouns are capitalized regardless of their position in the sentence.'
        },
        {
          prompt: 'How is the diphthong «ei» pronounced in German words like «mein» (my) and «Zeit» (time)?',
          options: [
            'Like English "eye" [ai]',
            'Like English "ee" [i:]',
            'Like English "ay"',
            'Like English "oo"'
          ],
          answerIndex: 0,
          explanation: 'The diphthong «ei» is pronounced like "eye" [ai].'
        }
      ]
    },
    independentPractice: {
      items: [
        {
          prompt: 'How is the initial consonant cluster «st» pronounced in German words like «Stadt» (city) and «Straße» (street)?',
          options: [
            'As "sht" [ʃt]',
            'As plain English "st"',
            'As "sk"',
            'Silent'
          ],
          answerIndex: 0,
          explanation: 'Initial «sp» and «st» are pronounced with an initial "sh" sound ([ʃp] and [ʃt]).'
        },
        {
          prompt: 'What sound does the German Eszett «ß» represent in words like «Straße» and «groß»?',
          options: [
            'A sharp voiceless [s] sound after long vowels or diphthongs',
            'A "b" sound',
            'A "z" sound',
            'A glottal stop'
          ],
          answerIndex: 0,
          explanation: 'The Eszett (ß) represents a sharp voiceless [s] following long vowels or diphthongs.'
        }
      ]
    },
    checkpointTest: {
      items: [
        {
          type: 'multiple-choice',
          prompt: 'What does the German word «Wasser» mean in English?',
          options: [
            'water',
            'street',
            'time',
            'house'
          ],
          answerIndex: 0,
          explanation: '«Wasser» means "water".'
        },
        {
          type: 'typed-recall',
          prompt: 'Type the German word for "street" (S-t-r-a-s-s-e with Eszett):',
          acceptedAnswers: [
            'Straße',
            'Strasse'
          ],
          explanation: '«Straße» = street.'
        }
      ]
    }
  };
});

// 3. BRAZILIAN PORTUGUESE (brazilian-portuguese.js)
updateCurriculum('brazilian-portuguese', (curr) => {
  curr.lessons['pt-u1-l1'] = {
    id: 'pt-u1-l1',
    subject: 'brazilian-portuguese',
    unit: 1,
    lessonNumber: 1,
    title: 'O Alfabeto Português, Til Nasal (ã/õ), Cedilha (ç) e Fonética Brasileira (Portuguese Alphabet & Brazilian Phonology)',
    level: 'A1',
    objective: 'Master the Portuguese alphabet, nasal vowels with tilde (ã, õ), cedilla (ç), acute/circumflex accents, and core Brazilian phonology (d/t palatalization, vocalic -l, initial R-).',
    presentation: {
      explanation: 'Bem-vindo ao Português do Brasil! Welcome to Brazilian Portuguese (Português Brasileiro)! Brazilian Portuguese is celebrated for its musical, open vowel cadence and distinctive phonetic rules.\n\n### 1. Nasal Vowels with Tilde (Til: ~) & Cedilla (Cedilha: ç)\n- **ã** [ɐ̃] & **õ** [õ] — Air is expelled simultaneously through the mouth and nose (like French *bon* or English "huh"): \n  - **pão** (*pah-oon*) = bread\n  - **mão** (*mah-oon*) = hand\n  - **manhã** (*mahn-yahn*) = morning\n  - **não** (*nah-oon*) = no / not\n- **ç (Cedilha)** [s] — Always softens the "C" to [s] before a, o, u (e.g. **você** = you, **coração** = heart, **abraço** = hug)\n\n### 2. Brazilian Phonological Signatures\n1. **Palatalization of D and T**:\n   - **D before i / unstressed e** &rarr; pronounced as **"DJ" [dʒ]** (e.g. **dia** = *"JEE-ah"* / day, **cidade** = *"see-DAH-jee"* / city, **de** = *"jee"* / of)\n   - **T before i / unstressed e** &rarr; pronounced as **"TCH" [tʃ]** (e.g. **noite** = *"NOY-chee"* / night, **tio** = *"TCHEE-oo"* / uncle)\n2. **Vocalization of Final -L**:\n   - An \'L\' at the end of a syllable or word is pronounced as a **"W" [w]** (e.g. **Brasil** = *"Brah-ZEE-oo"*, **sol** = *"saw-oo"* / sun, **futebol** = *"foo-chee-BAW-oo"*)\n3. **The Guttural Initial R- / -RR-**:\n   - An \'R\' at the start of a word or double \'-RR-\' is pronounced as a warm breathy English **"H" [h / x]** (e.g. **Rio** = *"HEE-oo"*, **rua** = *"HOO-ah"* / street, **carro** = *"KAH-hoo"* / car)\n   - A single \'-r-\' between vowels is a tapped "R" [ɾ] (e.g. **caro** = *"KAH-roo"* / expensive)',
      examples: [
        { target: 'pão', reading: 'pah-oon', translation: 'bread (p + ã [nasal] + o)' },
        { target: 'dia', reading: 'JEE-ah', translation: 'day (d before i = [dʒ] + a)' },
        { target: 'noite', reading: 'NOY-chee', translation: 'night (n + oi + t before e = [tʃ])' },
        { target: 'Brasil', reading: 'Brah-ZEE-oo', translation: 'Brazil (final l = [w])' }
      ],
      mnemonics: [
        'In Brazil: "D" is for DJ (dia = Jee-ah), "T" is for TCH (noite = Noy-chee), and final "L" flows into W (Brasil = Brah-zee-oo)!'
      ],
      culturalNotes: [
        'Brazilian Portuguese pronunciation diverges beautifully from European Portuguese through vowel opening and rhythmic musicality, influenced by Indigenous Tupi and Afro-Brazilian languages.'
      ]
    },
    guidedPractice: {
      items: [
        {
          prompt: 'In Brazilian Portuguese, how is the letter «D» pronounced when followed by the vowel «i» (as in «dia» / day)?',
          options: [
            'As an English "DJ" affricate [dʒ] ("JEE-ah")',
            'As a hard dental "D"',
            'As a "th" sound',
            'Silent'
          ],
          answerIndex: 0,
          explanation: 'In standard Brazilian Portuguese, «d» palatalizes to [dʒ] before «i» or unstressed «e».'
        },
        {
          prompt: 'What sound does the final letter «-L» make at the end of words in Brazilian Portuguese (as in «Brasil»)?',
          options: [
            'A vocalic "W" [w] sound ("Brah-ZEE-oo")',
            'A hard English "L"',
            'A rolled R',
            'Silent'
          ],
          answerIndex: 0,
          explanation: 'Final «-l» vocalizes to [w] in Brazilian Portuguese.'
        }
      ]
    },
    independentPractice: {
      items: [
        {
          prompt: 'How is an initial «R-» at the start of a word (like «Rio» or «rua») pronounced in Brazilian Portuguese?',
          options: [
            'As a breathy/guttural English "H" [h] ("HEE-oo", "HOO-ah")',
            'As a rolled Spanish "RR"',
            'As an English "R"',
            'Silent'
          ],
          answerIndex: 0,
          explanation: 'Initial «r-» is pronounced as a voiceless glottal/velar fricative [h/x].'
        },
        {
          prompt: 'What does the tilde diacritic (~) indicate in words like «pão» (bread) and «não» (no)?',
          options: [
            'Nasalization of the vowel sound through mouth and nose',
            'A silent vowel',
            'A long vowel',
            'A high pitch tone'
          ],
          answerIndex: 0,
          explanation: 'The tilde (til) marks nasal vowel articulation.'
        }
      ]
    },
    checkpointTest: {
      items: [
        {
          type: 'multiple-choice',
          prompt: 'What does the Portuguese word «pão» mean in English?',
          options: [
            'bread',
            'water',
            'sun',
            'day'
          ],
          answerIndex: 0,
          explanation: '«pão» means "bread".'
        },
        {
          type: 'typed-recall',
          prompt: 'Type the Portuguese word for "bread" (p-a-o with tilde):',
          acceptedAnswers: [
            'pão',
            'pao'
          ],
          explanation: '«pão» = bread.'
        }
      ]
    }
  };
});

// 4. VIETNAMESE (vietnamese.js)
updateCurriculum('vietnamese', (curr) => {
  curr.lessons['vi-u1-l1'] = {
    id: 'vi-u1-l1',
    subject: 'vietnamese',
    unit: 1,
    lessonNumber: 1,
    title: 'Chữ Quốc Ngữ: 29 Chữ Cái, 6 Thanh Điệu và Nguyên Âm Đôi (Quốc Ngữ Alphabet, 6 Tones & Vowels)',
    level: 'A1',
    objective: 'Master the Latin-based Chữ Quốc Ngữ alphabet (29 letters), the 12 modified vowels (ă, â, ê, ô, ơ, ư), and the 6 lexical tones of Vietnamese (ngang, huyền, sắc, hỏi, ngã, nặng).',
    presentation: {
      explanation: 'Chào mừng bạn đến với tiếng Việt! Welcome to Vietnamese (tiếng Việt)! Vietnamese is written in **Chữ Quốc Ngữ**, a Latin script created in the 17th century by Alexandre de Rhodes using Portuguese and Romance orthography adapted with diacritics.\n\n### 1. The 12 Vowels (Nguyên Âm)\n- **a** [a:] (long "ah") vs **ă** [a] (short snappy "ah")\n- **â** [ɤ] (short "uh" as in "sun")\n- **e** [ɛ] (open "eh" as in "bed") vs **ê** [e] (closed "ay" as in "café")\n- **i / y** [i] (bright "ee" as in "see")\n- **o** [ɔ] (open "aw" as in "law") vs **ô** [o] (closed "oh" as in "boat")\n- **ơ** [ɤ:] (long unrounded "uh/er" as in "her")\n- **u** [u] (rounded "oo" as in "moon") vs **ư** [ɨ] (unrounded "oo" — smile and say "oo")\n\n### 2. Sáu Thanh Điệu (The 6 Lexical Tones)\nVietnamese is a tonal language where the same syllable spoken with different pitch contours has totally distinct meanings:\n1. **Thanh Ngang (Level / Mid Flat)** — No mark: **ma** = ghost / phantom\n2. **Thanh Huyền (Falling / Low Smooth)** — Grave (`): **mà** = but / which\n3. **Thanh Sắc (Rising / High Sharp)** — Acute (´): **má** = mother / cheek\n4. **Thanh Hỏi (Dipping-Rising / Question)** — Hook ( ̉ ): **mả** = tomb / grave\n5. **Thanh Ngã (High Glottal Broken)** — Tilde (~): **mã** = horse / code\n6. **Thanh Nặng (Low Glottal Drop / Heavy)** — Dot below (.): **mạ** = rice seedling\n\n### 3. Key Initial Consonants\n- **Đ đ** [ɗ] — True hard implosive "D" (e.g. **đi** = to go, **đẹp** = beautiful)\n- **D d** — Pronounced as [z] in North (Hanoi) / [j] in South (Saigon) (e.g. **da** = skin)\n- **Ph ph** [f] (e.g. **phở** = noodle soup)\n- **Nh nh** [ɲ] (e.g. **nhà** = house)\n- **Ng / Ngh** [ŋ] (e.g. **ngon** = delicious, **người** = person)',
      examples: [
        { target: 'phở', reading: 'fuh', translation: 'noodle soup (ph [f] + ơ [unrounded] + hỏi tone)' },
        { target: 'nhà', reading: 'nyah', translation: 'house / home (nh [palatal] + a + huyền falling tone)' },
        { target: 'ngon', reading: 'ngawn', translation: 'delicious (ng [velar] + o + n)' },
        { target: 'chào', reading: 'chaow', translation: 'hello / greetings (ch + a + o + huyền tone)' }
      ],
      mnemonics: [
        'Tone marks match their sound pitch: Huyền drops down (`), Sắc shoots up (´), Hỏi dips like a question mark ( ̉ ), Ngã breaks with a wave (~), Nặng drops heavy like an anchor (.)!'
      ],
      culturalNotes: [
        'Phở (noodle soup) is Vietnam\'s culinary gift to the world, reflecting the delicate aromatic harmony of star anise, cinnamon, charred ginger, and simmered broth.'
      ]
    },
    guidedPractice: {
      items: [
        {
          prompt: 'Which Vietnamese tone is marked by a dot underneath the vowel and drops sharply with a glottal stop (as in «mạ»)?',
          options: [
            'Thanh Nặng (Heavy drop / low glottal stop with dot below)',
            'Thanh Sắc (Rising tone with acute mark)',
            'Thanh Huyền (Falling tone with grave mark)',
            'Thanh Ngang (Flat tone)'
          ],
          answerIndex: 0,
          explanation: '«Thanh Nặng» is written with a dot underneath the vowel.'
        },
        {
          prompt: 'What is the phonetic difference between «Đ đ» and «D d» in the Vietnamese alphabet?',
          options: [
            '«Đ đ» is a hard implosive [d] (as in "đi"), while «D d» is pronounced [z] (North) or [y] (South)',
            'They are pronounced identically',
            '«Đ đ» is silent',
            '«D d» is an "R" sound'
          ],
          answerIndex: 0,
          explanation: '«Đ» is the hard implosive stop [ɗ], whereas «D» represents [z] or [j].'
        }
      ]
    },
    independentPractice: {
      items: [
        {
          prompt: 'Select the Vietnamese word meaning "noodle soup" spelled «phở»:',
          options: [
            'phở (noodle soup)',
            'nhà (house)',
            'ngon (delicious)',
            'chào (hello)'
          ],
          answerIndex: 0,
          explanation: '«phở» is the iconic Vietnamese national dish.'
        },
        {
          prompt: 'Which vowel letter represents the unrounded back vowel [ɨ] (smile and say "oo") in Vietnamese?',
          options: [
            'ư (unrounded [ɨ] with hook)',
            'u (rounded [u])',
            'o (open [ɔ])',
            'a (open [a])'
          ],
          answerIndex: 0,
          explanation: '«ư» represents the close central/back unrounded vowel [ɨ].'
        }
      ]
    },
    checkpointTest: {
      items: [
        {
          type: 'multiple-choice',
          prompt: 'What does the Vietnamese greeting «chào» mean in English?',
          options: [
            'hello / greetings',
            'delicious',
            'house',
            'soup'
          ],
          answerIndex: 0,
          explanation: '«chào» means "hello / greetings".'
        },
        {
          type: 'typed-recall',
          prompt: 'Type the Vietnamese word for "hello" (c-h-a-o with falling tone):',
          acceptedAnswers: [
            'chào',
            'chao'
          ],
          explanation: '«chào» = hello.'
        }
      ]
    }
  };
});

console.log('Finished updating Turkish, German, Portuguese, Vietnamese!');
