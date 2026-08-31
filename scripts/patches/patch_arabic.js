const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../../data/curricula/arabic.js');
const curr = require(filePath);

curr.lessons['ar-u1-l1'] = {
  id: 'ar-u1-l1',
  subject: 'arabic',
  unit: 1,
  lessonNumber: 1,
  title: 'الأبجدية العربية والحروف غير المتصلة والحركات القصيرة (Non-Connecting Letters & Short Vowels)',
  level: 'A1',
  objective: 'Master the Right-to-Left Arabic writing direction, the 6 non-connecting letters (ا, د, ذ, ر, ز, و), the 4 short vowel marks (Fatḥah, Kasrah, Ḍammah, Sukūn), and read first authentic Arabic words.',
  presentation: {
    explanation: 'Welcome to Arabic (العربية)! Arabic is written from **Right to Left (RTL)** in an elegant cursive script containing 28 letters. In Arabic, letters connect to each other within words, except for 6 special letters called **Non-Connecting Letters**.\n\n### 1. The 6 Non-Connecting Letters (الحروف غير المتصلة)\nThese 6 letters connect to preceding letters on their right, but **never connect to any letter following them on their left** (causing a small gap):\n- **ا** (Alif) — [aa] long vowel / glottal carrier (straight vertical stroke)\n- **د** (Daal) — [d] voiced dental stop (as in "door")\n- **ذ** (Dhaal) — [dh] voiced dental fricative (as in "this" / "father")\n- **ر** (Raa) — [r] rolled alveolar tap (as in Spanish "pero")\n- **ز** (Zaay) — [z] voiced sibilant (as in "zebra")\n- **و** (Waaw) — [w / uu] labial glide / long "oo"\n\n### 2. The 4 Short Vowel Diacritics (الحركات)\nIn Arabic, short vowels are marked by small diacritics placed above or below consonants:\n- **الفَتْحَة (Fatḥah)**: A small diagonal stroke ABOVE the letter ( َ ) producing short **[a]** (e.g. دَ = da).\n- **الكَسْرَة (Kasrah)**: A small diagonal stroke BELOW the letter ( ِ ) producing short **[i]** (e.g. دِ = di).\n- **الضَّمَّة (Ḍammah)**: A small miniature Waaw ABOVE the letter ( ُ ) producing short **[u]** (e.g. دُ = du).\n- **السُّكُون (Sukūn)**: A small circle ABOVE the letter ( ْ ) indicating **zero vowel / pure consonant stop** (e.g. دْ = d).\n\n### 3. First Authentic Words (Built Exclusively from These 6 Letters)\n- **دَار** (*daar*) → **house / home / abode** (دَ + ا + ر)\n- **دَوْر** (*dawr*) → **role / turn** (دَ + وْ + ر)\n- **رُزّ** (*ruzz*) → **rice** (رُ + ز)\n- **وَرْد** (*ward*) → **roses / blossoms** (وَ + رْ + د)\n- **زَارَ** (*zaara*) → **he visited** (زَ + ا + رَ)',
    examples: [
      { target: 'دَار', reading: 'daar', translation: 'house / home (د [d] + ا [aa] + ر [r])' },
      { target: 'وَرْد', reading: 'ward', translation: 'roses (و [w] + ر [r] + د [d])' },
      { target: 'رُزّ', reading: 'ruzz', translation: 'rice (ر [r] + ز [z])' },
      { target: 'دَوْر', reading: 'dawr', translation: 'role / turn (د [d] + و [w] + ر [r])' }
    ],
    mnemonics: [
      'The 6 non-connectors are "friendly to the right, but hold up a hand to the left": Alif (ا), Daal (د), Dhaal (ذ), Raa (ر), Zaay (ز), Waaw (و)!'
    ],
    culturalNotes: [
      'Arabic calligraphy (الخط العربي) is one of the highest artistic achievements in world culture, developing styles such as Naskh, Thuluth, Ruq\'ah, Diwani, and Kufic over fourteen centuries.'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'Which Arabic short vowel diacritic is written as a slanted stroke UNDER the consonant and produces the short [i] sound?',
        options: [
          'الكَسْرَة (Al-Kasrah - stroke below letter for [i])',
          'الفَتْحَة (Al-Fatḥah - stroke above letter for [a])',
          'الضَّمَّة (Al-Ḍammah - loop above letter for [u])',
          'السُّكُون (As-Sukūn - circle for zero vowel)'
        ],
        answerIndex: 0,
        explanation: 'Al-Kasrah (الكَسْرَة) is placed below the letter to represent the short [i] vowel.'
      },
      {
        prompt: 'Read the Arabic word «دَار» composed of non-connecting letters and select its meaning:',
        options: [
          'daar (house / home / abode)',
          'ward (roses)',
          'ruzz (rice)',
          'dawr (role)'
        ],
        answerIndex: 0,
        explanation: '«دَ» [da] + «ا» [aa] + «ر» [r] forms «دَار» (*daar*), meaning house or home.'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'Which of the following letters belongs to the group of 6 Non-Connecting Arabic letters?',
        options: [
          'ر (Raa - non-connecting)',
          'ب (Baa - connecting)',
          'م (Meem - connecting)',
          'س (Seen - connecting)'
        ],
        answerIndex: 0,
        explanation: '«ر» (Raa) is one of the 6 non-connecting letters that never joins to letters on its left.'
      },
      {
        prompt: 'Select the Arabic word meaning "roses / blossoms" spelled «وَرْد»:',
        options: [
          'وَرْد (ward - roses / flowers)',
          'دَار (daar - house)',
          'رُزّ (ruzz - rice)',
          'دَوْر (dawr - turn)'
        ],
        answerIndex: 0,
        explanation: '«وَ» [wa] + «رْ» [r] + «د» [d] spells «وَرْد» (*ward* - roses).'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'What sound does the circular diacritic «السُّكُون» (As-Sukūn) indicate when placed above a letter?',
        options: [
          'Zero vowel / a pure consonant stop without a following vowel',
          'A long [aa] vowel',
          'A doubled consonant sound',
          'A nasal sound'
        ],
        answerIndex: 0,
        explanation: 'As-Sukūn indicates the absence of a vowel on that consonant.'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the 3-letter Arabic word for "house / home" (d-a-r):',
        acceptedAnswers: [
          'دار',
          'دَار'
        ],
        explanation: '«د» + «ا» + «ر» = «دار» (*daar*).'
      }
    ]
  }
};

curr.lessons['ar-u1-l2'] = {
  id: 'ar-u1-l2',
  subject: 'arabic',
  unit: 1,
  lessonNumber: 2,
  title: 'حروف الباء والتاء والثاء والنون والياء ومواضع الاتصال (Connecting Letters: Baa, Taa, Thaa, Noon, Yaa)',
  level: 'A1',
  objective: 'Master the base boat/cup letters distinguished by dots (ب, ت, ث, ن, ي), their positional forms (Initial, Medial, Final), and construct essential vocabulary.',
  presentation: {
    explanation: 'Now we master the most common connecting letter family in Arabic: letters sharing the **horizontal shallow boat/cup shape**, distinguished strictly by the number and position of their dots.\n\n### 1. The Dot-Differentiated Letter Family\n- **ب (Baa)** — 1 dot **BELOW** (بـ ـبـ ـب) → [b] as in "book"\n- **ت (Taa)** — 2 dots **ABOVE** (تـ ـتـ ـت) → [t] as in "tea"\n- **ث (Thaa)** — 3 dots **ABOVE** (ثـ ـثـ ـث) → [th] as in "think" / "three"\n- **ن (Noon)** — 1 dot **ABOVE** in a deeper rounded bowl (نـ ـنـ ـن) → [n] as in "noon"\n- **ي (Yaa)** — 2 dots **BELOW** (يـ ـيـ ـي) → [y / ee] glide or long vowel "see"\n\n### 2. The 3 Positional Forms\nWhen connecting, letters adapt their shape based on position:\n1. **Initial (بداية)**: Letter opens to the left to connect to the next letter (e.g. بـَـاب).\n2. **Medial (وسط)**: Connects from the right and extends to the left (e.g. كـِـتـَـاب).\n3. **Final (نهاية)**: Connects from the right and completes with its full traditional tail (e.g. بـَـيـْـت).\n\n### 3. Essential Arabic Vocabulary\n- **بَاب** (*baab*) → **door** (ب + ا + ب)\n- **بَيْت** (*bayt*) → **house / home** (ب + ي + ت)\n- **بِنْت** (*bint*) → **girl / daughter** (ب + ن + ت)\n- **تِين** (*teen*) → **fig** (ت + ي + ن)\n- **نُور** (*noor*) → **light** (ن + و + ر)\n- **أَنْتَ** (*anta*) → **you (singular masculine)**\n- **أَنْتِ** (*anti*) → **you (singular feminine)**\n- **أَنَا** (*ana*) → **I (pronoun)**',
    examples: [
      { target: 'بَاب', reading: 'baab', translation: 'door (بـ [b] + ا [aa] + ب [b])' },
      { target: 'بَيْت', reading: 'bayt', translation: 'house (بـ [b] + ـيـ [y] + ـت [t])' },
      { target: 'بِنْت', reading: 'bint', translation: 'girl / daughter (بـ [b] + ـنـ [n] + ـت [t])' },
      { target: 'نُور', reading: 'noor', translation: 'light (نـ [n] + و [oo] + ر [r])' }
    ],
    mnemonics: [
      'Baa has 1 dot Below (B for Bottom). Taa has 2 dots on Top. Thaa has Three dots on Top. Noon has 1 dot in its Nest. Yaa has 2 dots underneath (Yo-yo strings)!'
    ],
    culturalNotes: [
      'In Arabic, the word «بَيْت» (*bayt*) means both physical house and poetic verse/couplet, showing how deeply poetry is woven into Arabic culture as the "architecture of thought".'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'Which letter in the boat family has 1 dot placed BELOW the base shape and is pronounced [b]?',
        options: [
          'ب (Baa - 1 dot below)',
          'ت (Taa - 2 dots above)',
          'ث (Thaa - 3 dots above)',
          'ن (Noon - 1 dot above)'
        ],
        answerIndex: 0,
        explanation: '«ب» (Baa) has a single dot below the body and represents the voiced bilabial stop [b].'
      },
      {
        prompt: 'Select the Arabic word meaning "door" formed by initial Baa, Alif, and final Baa:',
        options: [
          'بَاب (baab - door)',
          'بَيْت (bayt - house)',
          'بِنْت (bint - girl)',
          'تِين (teen - fig)'
        ],
        answerIndex: 0,
        explanation: '«بـ» + «ا» + «ب» spells «بَاب» (*baab* - door).'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'Identify the Arabic word meaning "house / home" spelled with Baa, Yaa, and final Taa:',
        options: [
          'بَيْت (bayt - house)',
          'بِنْت (bint - daughter)',
          'نُور (noor - light)',
          'دَار (daar - abode)'
        ],
        answerIndex: 0,
        explanation: '«بـَ» [ba] + «يْـ» [y] + «ـت» [t] = «بَيْت» (*bayt* - house).'
      },
      {
        prompt: 'Which Arabic pronoun represents "you" when speaking to a male (masculine singular)?',
        options: [
          'أَنْتَ (anta - you masc.)',
          'أَنْتِ (anti - you fem.)',
          'أَنَا (ana - I)',
          'هُوَ (huwa - he)'
        ],
        answerIndex: 0,
        explanation: '«أَنْتَ» (*anta*) is the second-person singular masculine pronoun.'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'What does the Arabic word «نُور» (*noor*) mean in English?',
        options: [
          'light',
          'door',
          'house',
          'fig'
        ],
        answerIndex: 0,
        explanation: '«نُور» (*noor*) means "light".'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the 3-letter Arabic word for "door" (b-a-b):',
        acceptedAnswers: [
          'باب',
          'بَاب'
        ],
        explanation: '«ب» + «ا» + «ب» = «باب» (*baab*).'
      }
    ]
  }
};

curr.lessons['ar-u1-l3'] = {
  id: 'ar-u1-l3',
  subject: 'arabic',
  unit: 1,
  lessonNumber: 3,
  title: 'حروف الجيم والسين والميم واللام وتكوين المفردات (Jim, Seen, Meem, Laam & Vocabulary)',
  level: 'A1',
  objective: 'Master connecting letters (ج, ح, خ), sibilants (س, ش), labial Meem (م), lateral Laam (ل), and velar Kaaf (ك).',
  presentation: {
    explanation: 'Now we expand into the loop and curved families of the Arabic alphabet.\n\n### 1. The Jim-Group (ج, ح, خ)\n- **ج (Jeem)** — [j] voiced affricate with 1 dot below (جـ ـجـ ـج)\n- **ح (Haa)** — [ḥ] voiceless pharyngeal fricative (warm deep "h" from throat, no dots) (حـ ـحـ ـح)\n- **خ (Khaa)** — [kh] voiceless velar/uvular fricative (guttural "kh", 1 dot above) (خـ ـخـ ـخ)\n\n### 2. The Seen & Sheen Group (س, ش)\n- **س (Seen)** — [s] 3 sharp teeth (سـ ـسـ ـس)\n- **ش (Sheen)** — [sh] 3 teeth with 3 dots above (شـ ـشـ ـش)\n\n### 3. Flowing Consonants: Meem (م), Laam (ل), Kaaf (ك)\n- **م (Meem)** — [m] small circle/loop with descending tail (مـ ـمـ ـم)\n- **ل (Laam)** — [l] tall vertical hook (لـ ـلـ ـل)\n- **ك (Kaaf)** — [k] open arm with small kaf-mark (كـ ـكـ ـك)\n\n### 4. Rich Real Vocabulary\n- **سَلَام** (*salaam*) → **peace** (س + ل + ا + م)\n- **كِتَاب** (*kitaab*) → **book** (ك + ت + ا + ب)\n- **مَسْجِد** (*masjid*) → **mosque** (م + س + ج + د)\n- **شَمْس** (*shams*) → **sun** (ش + م + س)\n- **مَاء** (*maa\'*) → **water** (م + ا + ء)\n- **قَلَم** (*qalam*) → **pen** (ق + ل + م)',
    examples: [
      { target: 'سَلَام', reading: 'salaam', translation: 'peace (سـ [s] + ـلـ [l] + ا [aa] + م [m])' },
      { target: 'كِتَاب', reading: 'kitaab', translation: 'book (كـ [k] + ـتـ [t] + ا [aa] + ب [b])' },
      { target: 'مَسْجِد', reading: 'masjid', translation: 'mosque (مـ [m] + ـسـ [s] + ـجـ [j] + ـد [d])' },
      { target: 'شَمْس', reading: 'shams', translation: 'sun (شـ [sh] + ـمـ [m] + ـس [s])' }
    ],
    mnemonics: [
      'Jeem carries a Gem in its belly (dot below). Khaa has a crumb on its head (dot above). Haa has no dots at all. Seen has 3 teeth for Smiling!'
    ],
    culturalNotes: [
      '«سَلَام» (*salaam* - peace) is the foundational root (S-L-M) of both Islam and the universal Arab greeting, embodying the cultural value of harmony and safety.'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'Which Arabic word means "peace" and is formed from Seen, Laam, Alif, and Meem?',
        options: [
          'سَلَام (salaam - peace)',
          'كِتَاب (kitaab - book)',
          'مَسْجِد (masjid - mosque)',
          'شَمْس (shams - sun)'
        ],
        answerIndex: 0,
        explanation: '«سـَ» + «ـلا» + «م» spells «سَلَام» (*salaam* - peace).'
      },
      {
        prompt: 'Which letter in the Jim group produces the deep warm pharyngeal "h" sound without any dots?',
        options: [
          'ح (Haa - pharyngeal [ḥ], no dots)',
          'ج (Jeem - dot below)',
          'خ (Khaa - dot above)',
          'هـ (Soft Haa)'
        ],
        answerIndex: 0,
        explanation: '«ح» (Haa) is the dotless pharyngeal voiceless fricative.'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'Select the Arabic word meaning "book" spelled «كِتَاب»:',
        options: [
          'كِتَاب (kitaab - book)',
          'سَلَام (salaam - peace)',
          'قَلَم (qalam - pen)',
          'بَاب (baab - door)'
        ],
        answerIndex: 0,
        explanation: '«كِتَاب» (*kitaab*) means "book".'
      },
      {
        prompt: 'Identify the word for "sun" combining Sheen, Meem, and Seen:',
        options: [
          'شَمْس (shams - sun)',
          'نُور (noor - light)',
          'مَاء (maa\' - water)',
          'وَرْد (ward - flowers)'
        ],
        answerIndex: 0,
        explanation: '«شـَ» + «ـمْـ» + «ـس» = «شَمْس» (*shams* - sun).'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'What does the Arabic word «كِتَاب» mean in English?',
        options: [
          'book',
          'pen',
          'door',
          'mosque'
        ],
        answerIndex: 0,
        explanation: '«كِتَاب» (*kitaab*) means "book".'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the 4-letter Arabic word for "peace" (s-l-a-m):',
        acceptedAnswers: [
          'سلام',
          'سَلَام'
        ],
        explanation: '«س» + «ل» + «ا» + «م» = «سلام» (*salaam*).'
      }
    ]
  }
};

curr.lessons['ar-u1-l4'] = {
  id: 'ar-u1-l4',
  subject: 'arabic',
  unit: 1,
  lessonNumber: 4,
  title: 'الشدة والتنوين والتاء المربوطة ولام التعريف (Shaddah, Tanween, Ta Marbutah & Definite Article)',
  level: 'A1',
  objective: 'Master the gemination mark Shaddah (ّ), the nunation markers Tanween (ً ٍ ٌ), the feminine suffix Ta Marbutah (ة), and the definite article (ال) with Sun and Moon letter assimilation.',
  presentation: {
    explanation: 'Now we complete Arabic orthography with four crucial writing rules.\n\n### 1. Ash-Shaddah (الشَّدَّة - ّ)\nA small "w"-shaped sign placed above a consonant to indicate **gemination (doubling / holding the consonant twice as long)** without writing the letter twice:\n- **رُزّ** (*ruzz* - rice)\n- **مُعَلِّم** (*mu\'allim* - teacher)\n- **شُكْرًا** (*shukran* - thank you)\n\n### 2. At-Tanween (التَّنْوِين - Nunation)\nDoubling the short vowel at the end of an indefinite noun adds an [n] sound:\n- **Tanween Fatḥ (ً)**: pronounced **[-an]** (e.g. **شُكْرًا** = *shukran*, **عَفْوًا** = *afwan*, **مَرْحَبًا** = *marhaban*)\n- **Tanween Ḍamm (ٌ)**: pronounced **[-un]** (e.g. **كِتَابٌ** = *kitaabun*)\n- **Tanween Kasr (ٍ)**: pronounced **[-in]** (e.g. **بَيْتٍ** = *baytin*)\n\n### 3. At-Taa Al-Marbutah (التَّاء المَرْبُوطَة - ة / ـة)\nA "tied-up Taa" that appears strictly at the end of words to mark **feminine gender**:\n- When pausing (end of sentence), pronounced as a soft **[-ah]** (e.g. مَدِينَة = *madeenah* / city).\n- When connecting in speech, pronounced as **[-at]** (e.g. مَدِينَةُ القَاهِرَة = *madeenat al-Qaahirah*).\n\n### 4. The Definite Article «ال» (Al-) & Sun/Moon Letters\n- **Moon Letters (القَمَرِيَّة)**: The "l" of Al- is clearly pronounced (e.g. **القَمَر** = *al-qamar* / the moon, **الكِتَاب** = *al-kitaab* / the book).\n- **Sun Letters (الشَّمْسِيَّة)**: The "l" assimilates into the following consonant with a Shaddah (e.g. **الشَّمْس** = *ash-shams* / the sun, **السَّلَام** = *as-salaam* / the peace).',
    examples: [
      { target: 'شُكْرًا', reading: 'shukran', translation: 'thank you (ends with Tanween Fatḥ [-an])' },
      { target: 'مَرْحَبًا', reading: 'marhaban', translation: 'hello / welcome (ends with Tanween Fatḥ [-an])' },
      { target: 'الشَّمْس', reading: 'ash-shams', translation: 'the sun (Sun letter assimilation with Shaddah)' },
      { target: 'الكِتَاب', reading: 'al-kitaab', translation: 'the book (Moon letter with clear Laam)' }
    ],
    mnemonics: [
      'Shaddah (ّ) doubles the consonant power! Tanween (ً) adds a cheerful "N" to words like Shukran (شُكْرًا) and Marhaban (مَرْحَبًا)!'
    ],
    culturalNotes: [
      'Arabic grammar preserves pristine Classical phonology through these diacritics, which are fully vocalized in the Quran, classical poetry, and primary language curricula.'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'What is the phonetic function of the Shaddah (ّ) diacritic when placed above an Arabic letter?',
        options: [
          'It indicates that the consonant is doubled/geminated and held longer',
          'It makes the letter silent',
          'It turns the consonant into a vowel',
          'It indicates a question'
        ],
        answerIndex: 0,
        explanation: 'Ash-Shaddah indicates gemination (consonant doubling).'
      },
      {
        prompt: 'Which diacritic at the end of «شُكْرًا» produces the final [-an] sound in "Shukran"?',
        options: [
          'التَّنْوِين (At-Tanween - Nunation marker ً for [-an])',
          'السُّكُون (As-Sukūn)',
          'الشَّدَّة (Ash-Shaddah)',
          'الكَسْرَة (Al-Kasrah)'
        ],
        answerIndex: 0,
        explanation: 'Tanween Fatḥ (ً) adds the adverbial [-an] suffix in «شُكْرًا» (*shukran*).'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'In the word «الشَّمْس» (the sun), why is the "L" sound assimilated to pronounce [ash-shams]?',
        options: [
          'Because Sheen (ش) is a Sun Letter (حرف شمسي) that assimilates the Laam',
          'Because Sheen is a vowel',
          'Because the word is feminine',
          'Because of a typo'
        ],
        answerIndex: 0,
        explanation: 'Sun letters assimilate the "L" of the definite article «ال» into a doubled consonant with Shaddah.'
      },
      {
        prompt: 'What does the letter Ta Marbutah (ة) at the end of a word signify in Arabic grammar?',
        options: [
          'Feminine grammatical gender marker',
          'Plural marker',
          'Past tense verb marker',
          'Preposition'
        ],
        answerIndex: 0,
        explanation: 'Ta Marbutah (ة) is the primary marker of feminine grammatical gender in nouns and adjectives.'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'Which phrase correctly illustrates a Moon Letter where the "L" of «ال» is explicitly pronounced?',
        options: [
          'الكِتَاب (Al-Kitaab - The book)',
          'الشَّمْس (Ash-Shams - The sun)',
          'السَّلَام (As-Salaam - The peace)',
          'النُّور (An-Noor - The light)'
        ],
        answerIndex: 0,
        explanation: 'Kaaf (ك) is a Moon letter, so «الكِتَاب» is pronounced clearly as [al-kitaab].'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the Arabic word for "Thank you" (sh-k-r-a-n):',
        acceptedAnswers: [
          'شكرا',
          'شُكْرًا'
        ],
        explanation: '«ش» + «ك» + «ر» + «ا» = «شكرا» (*shukran*).'
      }
    ]
  }
};

curr.lessons['ar-u1-l5'] = {
  id: 'ar-u1-l5',
  subject: 'arabic',
  unit: 1,
  lessonNumber: 5,
  title: 'التحيات الإسلامية والعربية والتعريف بالنفس (Islamic & Arab Greetings & Self-Introductions)',
  level: 'A1',
  objective: 'Master standard Islamic and cultural greetings (As-salamu \'alaykum, Marhaban, Ahlan wa sahlan), introductions (Ana..., Ma ismuka?), gratitude (Shukran, \'Afwan), and farewells (Ma\'a as-salaama).',
  presentation: {
    explanation: 'Now you bring together complete Arabic literacy into authentic spoken greeting and self-introduction dialogues.\n\n### 1. The Universal Islamic & Cultural Greeting\n- **السَّلَامُ عَلَيْكُمْ** (*As-salāmu \'alaykum*) → **Peace be upon you** (universal dignified greeting)\n- **وَعَلَيْكُمُ السَّلَامُ** (*Wa \'alaykumu s-salām*) → **And upon you be peace** (standard response)\n\n### 2. Everyday Welcoming & Courtesy Expressions\n- **مَرْحَبًا!** (*Marḥaban!*) → **Hello! / Welcome!**\n- **أَهْلًا وَسَهْلًا!** (*Ahlan wa sahlan!*) → **Welcome!** (lit. "You have arrived among family and ease")\n- **شُكْرًا!** (*Shukran!*) → **Thank you!** / **شُكْرًا جَزِيلًا!** (*Shukran jazeelan!* - Thank you very much!)\n- **عَفْوًا!** (*\'Afwan!*) → **You are welcome! / Excuse me!**\n- **كَيْفَ حَالُكَ؟** (*Kayfa ḥāluka?*) → **How are you? (to male)** / **كَيْفَ حَالُكِ؟** (*Kayfa ḥāluki?* - to female)\n- **أَنَا بِخَيْرٍ، الحَمْدُ لِلّٰهِ** (*Anā bikhayrin, al-ḥamdu lillāh*) → **I am fine, praise be to God**\n\n### 3. Self-Introductions\n- **أَنَا اسْمِي [الاسم]** (*Anā ismī [Name]*) → **My name is [Name]** (lit. "I, my name is...")\n- **مَا اسْمُكَ؟** (*Ma ismuka?* - to male) / **مَا اسْمُكِ؟** (*Ma ismuki?* - to female) → **What is your name?**\n- **تَشَرَّفْنَا!** (*Tasharrafnā!*) → **Honored to meet you! / Pleased to meet you!**\n\n### 4. Parting & Farewells\n- **مَعَ السَّلَامَةِ** (*Ma\'a s-salāmah*) → **Goodbye** (lit. "with safety")\n- **إِلَى اللِّقَاءِ** (*Ilā l-liqā\'*) → **Until we meet again / Farewell**',
    examples: [
      { target: 'السَّلَامُ عَلَيْكُمْ', reading: "As-salamu 'alaykum", translation: 'Peace be upon you (standard greeting)' },
      { target: 'وَعَلَيْكُمُ السَّلَامُ', reading: "Wa 'alaykum as-salaam", translation: 'And upon you be peace (standard reply)' },
      { target: 'شُكْرًا جَزِيلًا', reading: 'Shukran jazeelan', translation: 'Thank you very much' },
      { target: 'مَعَ السَّلَامَةِ', reading: "Ma'a as-salaama", translation: 'Goodbye (with safety)' }
    ],
    mnemonics: [
      'Ahlan wa sahlan means "You are family (Ahl) and your path is easy (Sahl)". Ma\'a as-salaama means "Go with peace and safety"!'
    ],
    culturalNotes: [
      'Hospitality (الضِّيَافَة - ad-diyaafah) is of supreme importance across the Arab world. Welcoming guests with warm greeting formulas and Arabic coffee/tea is a revered tradition.'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'What is the correct traditional response when someone greets you with «السَّلَامُ عَلَيْكُمْ» (As-salamu \'alaykum)?',
        options: [
          'وَعَلَيْكُمُ السَّلَامُ (Wa \'alaykum as-salaam - And upon you be peace)',
          'شُكْرًا جَزِيلًا (Thank you very much)',
          'إِلَى اللِّقَاءِ (Until next time)',
          'مَا اسْمُكَ؟ (What is your name?)'
        ],
        answerIndex: 0,
        explanation: 'The standard reciprocal response is «وَعَلَيْكُمُ السَّلَامُ» (*Wa \'alaykum as-salaam*).'
      },
      {
        prompt: 'Which Arabic phrase means "Welcome!" (lit. "You have come to family and ease")?',
        options: [
          'أَهْلًا وَسَهْلًا (Ahlan wa sahlan - Welcome!)',
          'مَعَ السَّلَامَة (Ma\'a as-salaama - Goodbye)',
          'عَفْوًا (You are welcome)',
          'كَيْفَ حَالُكَ؟ (How are you?)'
        ],
        answerIndex: 0,
        explanation: '«أَهْلًا وَسَهْلًا» (*Ahlan wa sahlan*) is the authentic welcoming expression.'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'How do you politely say "Goodbye" (lit. "With safety") in Arabic?',
        options: [
          'مَعَ السَّلَامَة (Ma\'a as-salaama - Goodbye / With safety)',
          'مَرْحَبًا (Marhaban - Hello)',
          'شُكْرًا (Shukran - Thank you)',
          'تَشَرَّفْنَا (Honored to meet you)'
        ],
        answerIndex: 0,
        explanation: '«مَعَ السَّلَامَة» (*Ma\'a as-salaama*) is the universal polite farewell.'
      },
      {
        prompt: 'Select the phrase used to say "I am fine, praise be to God" in response to "How are you?":',
        options: [
          'أَنَا بِخَيْرٍ، الحَمْدُ لِلّٰهِ (Ana bikhayrin, al-hamdu lillah)',
          'أَنَا اسْمِي أَحْمَد (My name is Ahmad)',
          'مَا اسْمُكَ؟ (What is your name?)',
          'إِلَى اللِّقَاءِ (Goodbye)'
        ],
        answerIndex: 0,
        explanation: '«أَنَا بِخَيْرٍ، الحَمْدُ لِلّٰهِ» (*Ana bikhayrin, al-hamdu lillah*) is the standard authentic response.'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'Which phrase means "Honored to meet you / Pleased to meet you" upon an introduction?',
        options: [
          'تَشَرَّفْنَا (Tasharrafna - Honored to meet you)',
          'مَعَ السَّلَامَة (Ma\'a as-salaama - Goodbye)',
          'عَفْوًا (\'Afwan - You\'re welcome)',
          'شُكْرًا (Shukran - Thank you)'
        ],
        answerIndex: 0,
        explanation: '«تَشَرَّفْنَا» (*Tasharrafna*) expresses polite pleasure upon being introduced.'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the Arabic word for "Hello / Welcome" with Tanween (m-r-h-b-a):',
        acceptedAnswers: [
          'مرحبا',
          'مَرْحَبًا'
        ],
        explanation: '«م» + «ر» + «ح» + «ب» + «ا» = «مرحبا» (*marhaban*).'
      }
    ]
  }
};

const output = '// Arabic curriculum\n(function(global){\n  \'use strict\';\n  var UNITS = ' + JSON.stringify(curr.units, null, 4) + ';\n  var LESSONS = ' + JSON.stringify(curr.lessons, null, 4) + ';\n  var CURRICULUM = { id: \'arabic\', name: \'Arabic\', units: UNITS, lessons: LESSONS };\n  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};\n  global.FEARN_CURRICULA[\'arabic\'] = CURRICULUM;\n  if (typeof module !== \'undefined\' && module.exports) module.exports = CURRICULUM;\n})(typeof window !== \'undefined\' ? window : global);\n';

fs.writeFileSync(filePath, output, 'utf8');
console.log('Successfully patched Arabic curriculum Unit 1!');
