const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../../data/curricula/urdu.js');
const curr = require(filePath);

curr.lessons['ur-u1-l1'] = {
  id: 'ur-u1-l1',
  subject: 'urdu',
  unit: 1,
  lessonNumber: 1,
  title: 'نستعلیق رسم الخط، غیر مربوط حروف اور بنیادی اعراب (Nastaliq Non-Connecting Letters & Diacritics)',
  level: 'A1',
  objective: 'Master Right-to-Left Nastaliq script mechanics, the 9 non-connecting letters (ا, د, ڈ, ذ, ر, ڑ, ز, ژ, و), the 4 short vowel diacritics (Zabar, Zer, Pesh, Jazm), and read first authentic Urdu words.',
  presentation: {
    explanation: 'اردو زبان میں خوش آمدید! Welcome to Urdu (اردو)! Urdu is written from **Right to Left (RTL)** in the elegant, flowing **Nastaliq (نستعلیق)** script using an expanded Perso-Arabic alphabet of 38 letters.\n\n### 1. غیر مربوط حروف (The 9 Non-Connecting Letters)\nThese 9 letters connect to preceding letters on their right, but **never connect to letters following them on their left**:\n- **ا (Alif)** — [aa] long vowel / carrier\n- **د (Daal)** — [d] dental stop (as in "door")\n- **ڈ (Daal retroflex)** — [ḍ] retroflex stop (curl tongue tip back against roof of mouth)\n- **ذ (Zaal)** — [z] voiced sibilant\n- **ر (Raa)** — [r] rolled trill\n- **ڑ (Raa retroflex)** — [ṛ] retroflex flap (unique South Asian sound)\n- **ز (Zay)** — [z] voiced sibilant\n- **ژ (Zhay)** — [zh] as in "measure"\n- **و (Waaw)** — [w / oo / o] labial glide / long vowel\n\n### 2. بنیادی اعراب (Short Vowel Diacritics)\n- **زَبَر (Zabar َ)**: Slanted stroke ABOVE the letter for short **[a]** (e.g. دَر = dar / door).\n- **زِیر (Zer ِ)**: Slanted stroke BELOW the letter for short **[i]** (e.g. دِل = dil / heart, دِن = din / day).\n- **پیش (Pesh ُ)**: Small loop ABOVE the letter for short **[u]** (e.g. دُم = dum / tail).\n- **جَزم / سُکون (Jazm / Sukoon ْ)**: Zero vowel mark indicating a pure consonant stop.\n\n### 3. پہلے مستند الفاظ (First Authentic Words)\n- **دِل** (*dil*) → **heart** (دِ + ل)\n- **دِن** (*din*) → **day** (دِ + ن)\n- **دَرد** (*dard*) → **pain / ache** (دَ + ر + د)\n- **رَاز** (*raaz*) → **secret** (رَ + ا + ز)\n- **دَور** (*daur*) → **era / period / cycle** (دَ + و + ر)\n- **دَوا** (*dawa*) → **medicine** (دَ + و + ا)',
    examples: [
      { target: 'دِل', reading: 'dil', translation: 'heart (دِ [di] + ل [l])' },
      { target: 'دِن', reading: 'din', translation: 'day (دِ [di] + ن [n])' },
      { target: 'دَرد', reading: 'dard', translation: 'pain (دَ [da] + ر [r] + د [d])' },
      { target: 'رَاز', reading: 'raaz', translation: 'secret (رَ [ra] + ا [aa] + ز [z])' }
    ],
    mnemonics: [
      'Alif (ا), the Daal family (د, ڈ, ذ), the Raa family (ر, ڑ, ز, ژ), and Waaw (و) are independent letters that never link to the left!'
    ],
    culturalNotes: [
      'Nastaliq calligraphy is considered the bride of Islamic calligraphy (عروس الخطوط), celebrated across South Asian poetry, ghazals, and literature for its sweeping diagonal grace.'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'Which Urdu short vowel diacritic is written BELOW the letter and produces the short [i] sound (as in «دِل» / heart)?',
        options: [
          'زِیر (Zer - stroke below letter for [i])',
          'زَبَر (Zabar - stroke above letter for [a])',
          'پیش (Pesh - loop above letter for [u])',
          'جَزم (Jazm - zero vowel)'
        ],
        answerIndex: 0,
        explanation: '«زِیر» (*Zer*) is placed under the consonant to produce the short [i] vowel.'
      },
      {
        prompt: 'Read the Urdu word «دِل» and select its English meaning:',
        options: [
          'dil (heart)',
          'din (day)',
          'dard (pain)',
          'raaz (secret)'
        ],
        answerIndex: 0,
        explanation: '«دِ» [di] + «ل» [l] spells «دِل» (*dil* - heart).'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'Which of the following characters is the unique South Asian retroflex letter «ڈ» (ḍ)?',
        options: [
          'ڈ (Daal with small toay - retroflex [ḍ])',
          'د (Plain dental Daal)',
          'ذ (Zaal with dot)',
          'ر (Raa)'
        ],
        answerIndex: 0,
        explanation: '«ڈ» is the retroflex Daal marked with a small cursive «ط» (toay) above.'
      },
      {
        prompt: 'Select the Urdu word meaning "pain / ache" spelled «دَرد»:',
        options: [
          'دَرد (dard - pain)',
          'دِل (dil - heart)',
          'دِن (din - day)',
          'رَاز (raaz - secret)'
        ],
        answerIndex: 0,
        explanation: '«دَ» [da] + «ر» [r] + «د» [d] spells «دَرد» (*dard* - pain).'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'What does the Urdu word «دِن» (*din*) mean in English?',
        options: [
          'day',
          'heart',
          'secret',
          'medicine'
        ],
        answerIndex: 0,
        explanation: '«دِن» (*din*) means "day".'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the 2-letter Urdu word for "heart" (d-i-l):',
        acceptedAnswers: [
          'دل',
          'دِل'
        ],
        explanation: '«د» + «ل» = «دل» (*dil*).'
      }
    ]
  }
};

curr.lessons['ur-u1-l2'] = {
  id: 'ur-u1-l2',
  subject: 'urdu',
  unit: 1,
  lessonNumber: 2,
  title: 'حروفِ تہجی کا بے خاندان اور پیوندی اشکال (Connecting Letters: Bay Family, Noon & Ye)',
  level: 'A1',
  objective: 'Master the dot-differentiated Bay family (ب, پ, ت, ٹ, ث), Noon (ن/ن٘), Choti Ye (ی), Bari Ye (ے), and their Initial, Medial, and Final connecting shapes in Nastaliq.',
  presentation: {
    explanation: 'Now we master the most important connecting consonant family in Urdu: the **Bay group (بے خاندان)** and Ye.\n\n### 1. The Bay Family (ب, پ, ت, ٹ, ث)\n- **ب (Bay)** — 1 dot **BELOW** → [b] as in "book"\n- **پ (Pay)** — 3 dots **BELOW** → [p] as in "pen" (unique Persian addition)\n- **ت (Tay)** — 2 dots **ABOVE** → [t] dental stop\n- **ٹ (Tay retroflex)** — Small **ط** ABOVE → [ṭ] retroflex stop\n- **ث (Say)** — 3 dots **ABOVE** → [s] sibilant\n\n### 2. Noon & The Two Ye Letters (ن, ی, ے)\n- **ن (Noon)** — 1 dot inside bowl → [n]\n- **ن٘ (Noon Ghunna)** — Dotless Noon at word end → nasal vowel sound (like French "bon")\n- **ی (Choti Ye)** — [ee / y] long vowel (as in "see")\n- **ے (Bari Ye)** — [ay / e] long vowel (as in "say" — strictly at the end of words in Urdu!)\n\n### 3. Essential Urdu Words\n- **بَات** (*baat*) → **word / conversation / matter** (ب + ا + ت)\n- **پَانِی** (*paani*) → **water** (پ + ا + ن + ی)\n- **نَام** (*naam*) → **name** (ن + ا + م)\n- **رَات** (*raat*) → **night** (ر + ا + ت)\n- **بَیٹَا** (*beta*) → **son** (ب + ی + ٹ + ا)\n- **بَیٹِی** (*beti*) → **daughter** (ب + ی + ٹ + ی)\n- **چَائے** (*chaay*) → **tea** (چ + ا + ے)',
    examples: [
      { target: 'بَات', reading: 'baat', translation: 'word / conversation (بـ [b] + ا [aa] + ت [t])' },
      { target: 'پَانِی', reading: 'paani', translation: 'water (پـ [p] + ا [aa] + نـ [n] + ی [ee])' },
      { target: 'نَام', reading: 'naam', translation: 'name (نـ [n] + ا [aa] + م [m])' },
      { target: 'رَات', reading: 'raat', translation: 'night (ر [r] + ا [aa] + ت [t])' }
    ],
    mnemonics: [
      'Bay has 1 dot Below. Pay has 3 dots Below. Tay has 2 dots on Top. Retroflex Ṭay has a little hat (ط)! Bari Ye (ے) swoops to the left at the end of words.'
    ],
    culturalNotes: [
      'Bari Ye (ے) is a distinctive signature of Urdu orthography that does not exist in standard Arabic, marking grammatical oblique cases and the [ay] vowel sound.'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'Which letter in the Bay family has 3 dots placed BELOW the boat shape and represents the sound [p]?',
        options: [
          'پ (Pay - 3 dots below for [p])',
          'ب (Bay - 1 dot below)',
          'ت (Tay - 2 dots above)',
          'ٹ (Tay retroflex)'
        ],
        answerIndex: 0,
        explanation: '«پ» (Pay) has 3 dots underneath and represents the bilabial stop [p].'
      },
      {
        prompt: 'Read the Urdu word «پَانِی» and select its English meaning:',
        options: [
          'paani (water)',
          'baat (word/matter)',
          'naam (name)',
          'raat (night)'
        ],
        answerIndex: 0,
        explanation: '«پـ» + «ا» + «نـ» + «ی» spells «پَانِی» (*paani* - water).'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'What unique Urdu letter is used strictly at the end of words to produce the [ay] vowel sound (as in «چَائے» / tea)?',
        options: [
          'ے (Bari Ye - final [ay] vowel)',
          'ی (Choti Ye - [ee])',
          'ن (Noon)',
          'ا (Alif)'
        ],
        answerIndex: 0,
        explanation: '«ے» (Bari Ye) is exclusively used at word endings for the [ay] sound.'
      },
      {
        prompt: 'Select the Urdu word meaning "name" spelled «نَام»:',
        options: [
          'نَام (naam - name)',
          'بَات (baat - talk)',
          'رَات (raat - night)',
          'دِل (dil - heart)'
        ],
        answerIndex: 0,
        explanation: '«نـَ» [na] + «ا» [aa] + «م» [m] spells «نَام» (*naam* - name).'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'What does the Urdu word «رَات» (*raat*) mean in English?',
        options: [
          'night',
          'day',
          'water',
          'name'
        ],
        answerIndex: 0,
        explanation: '«رَات» (*raat*) means "night".'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the 4-letter Urdu word for "water" (p-a-n-i):',
        acceptedAnswers: [
          'پانی',
          'پَانِی'
        ],
        explanation: '«پ» + «ا» + «ن» + «ی» = «پانی» (*paani*).'
      }
    ]
  }
};

curr.lessons['ur-u1-l3'] = {
  id: 'ur-u1-l3',
  subject: 'urdu',
  unit: 1,
  lessonNumber: 3,
  title: 'جیم خاندان، سِین، شِین اور دو چشمی ھ والے مرکب حروف (Jim Group & Aspirated Consonants)',
  level: 'A1',
  objective: 'Master the Jim group (ج, چ, ح, خ), sibilants (س, ش), labials (م, ل, ک, گ), and the unique aspirated compound consonants formed with Do-Chashmi He (دو چشمی ھ).',
  presentation: {
    explanation: 'Now we introduce the Jim family, the velar stops, and the essential South Asian sound feature: **Aspiration with Do-Chashmi He (دو چشمی ھ)**.\n\n### 1. The Jim Group (ج, چ, ح, خ)\n- **ج (Jim)** — [j] with 1 dot inside (as in "jump")\n- **چ (Chay)** — [ch] with 3 dots inside (as in "chair")\n- **ح (Bari He)** — [h] dotless unvoiced throat h\n- **خ (Khay)** — [kh] with 1 dot above (guttural "Bach")\n\n### 2. Velar Stops: Kaaf (ک) and Gaaf (گ)\n- **ک (Kaaf)** — [k] as in "kite"\n- **گ (Gaaf)** — [g] with double upper arm as in "go"\n\n### 3. مخلوط حروف (Aspirated Consonants with دو چشمی ھ)\nIn Urdu, consonants combine with **دو چشمی ھ** (two-eyed He) to create distinct **aspirated consonants** with a heavy breath of air:\n- **بھ** [bh] (e.g. **بھَائِی** *bhai* = brother)\n- **پھ** [ph] (e.g. **پھُول** *phool* = flower)\n- **تھ** [th] (e.g. **تھوڑا** *thoda* = a little)\n- **ٹھ** [ṭh] (e.g. **ٹھیک** *theek* = fine / okay)\n- **جھ** [jh] / **چھ** [chh] (e.g. **اَچّھا** *achha* = good)\n- **دھ** [dh] / **ڈھ** [ḍh]\n- **کھ** [kh] (e.g. **کھَانَا** *khana* = food / to eat)\n- **گھ** [gh] (e.g. **گَھر** *ghar* = house / home)',
    examples: [
      { target: 'گَھر', reading: 'ghar', translation: 'home / house (گھ [gh] + ر [r])' },
      { target: 'پھُول', reading: 'phool', translation: 'flower (پھ [ph] + و [oo] + ل [l])' },
      { target: 'چَائے', reading: 'chaay', translation: 'tea (چ [ch] + ا [aa] + ے [ay])' },
      { target: 'اَچّھا', reading: 'achha', translation: 'good / well (ا + چ් + چھ + ا)' }
    ],
    mnemonics: [
      'Do-Chashmi He (ھ) has two eyes looking at you, giving the consonant a big breath of air (Ghar = home, Phool = flower, Chai = tea)!'
    ],
    culturalNotes: [
      'Drinking Chai (چائے) is an integral hospitality ritual in Pakistani and Indian Urdu culture, shared during conversation (گپ شپ - gap-shap) with guests and family.'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'Which aspirated letter combination represents the heavy aspirated [gh] sound in the word «گَھر» (home)?',
        options: [
          'گھ (Gaaf + Do-chashmi He -> [gh])',
          'کھ (Kaaf + Do-chashmi He -> [kh])',
          'بھ (Bay + Do-chashmi He -> [bh])',
          'پھ (Pay + Do-chashmi He -> [ph])'
        ],
        answerIndex: 0,
        explanation: '«گھ» represents the voiced aspirated velar stop [gh] in «گَھر» (*ghar* - home).'
      },
      {
        prompt: 'Select the Urdu word meaning "flower" spelled with aspirated «پھ»:',
        options: [
          'پھُول (phool - flower)',
          'گَھر (ghar - house)',
          'چَائے (chaay - tea)',
          'پَانِی (paani - water)'
        ],
        answerIndex: 0,
        explanation: '«پھُول» (*phool*) means "flower".'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'Identify the beloved South Asian beverage word spelled «چَائے»:',
        options: [
          'chaay (tea)',
          'paani (water)',
          'doodh (milk)',
          'roti (bread)'
        ],
        answerIndex: 0,
        explanation: '«چـ» [ch] + «ا» [aa] + «ے» [ay] = «چَائے» (*chaay* - tea).'
      },
      {
        prompt: 'Which letter in the Jim family has 3 dots inside and makes the [ch] sound (as in "chair")?',
        options: [
          'چ (Chay - 3 dots inside)',
          'ج (Jim - 1 dot inside)',
          'ح (Bari He - no dots)',
          'خ (Khay - 1 dot above)'
        ],
        answerIndex: 0,
        explanation: '«چ» (Chay) contains 3 dots and represents [ch].'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'What does the Urdu word «گَھر» (*ghar*) mean in English?',
        options: [
          'home / house',
          'flower',
          'tea',
          'word'
        ],
        answerIndex: 0,
        explanation: '«گَھر» (*ghar*) means "home / house".'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the Urdu word for "tea" (c-h-a-y):',
        acceptedAnswers: [
          'چائے',
          'چاہے'
        ],
        explanation: '«چ» + «ا» + «ے» = «چائے» (*chaay*).'
      }
    ]
  }
};

curr.lessons['ur-u1-l4'] = {
  id: 'ur-u1-l4',
  subject: 'urdu',
  unit: 1,
  lessonNumber: 4,
  title: 'اسلامی و تہذیبی آداب اور خیریت دریافت کرنا (Greetings & Inquiring Wellbeing)',
  level: 'A1',
  objective: 'Master traditional greetings (Assalamu Alaikum, Walaikum Assalam, Aadaab), time-of-day greetings (Subh bakhair, Shab bakhair), and asking wellbeing (Aap kaise/kaisi hain?).',
  presentation: {
    explanation: 'Now you combine your Nastaliq literacy into authentic Urdu social greeting and etiquette exchanges.\n\n### 1. The Core Greetings\n- **اَلسَّلَامُ عَلَیْکُم** (*Assalāmu \'Alaikum*) → **Peace be upon you** (Universal dignified greeting)\n- **وَعَلَیْکُمُ السَّلَام** (*Wa \'Alaikumu s-Salām*) → **And upon you be peace** (Authentic response)\n- **آدَاب / آدَابِ عَرْض ہَے** (*Aadāb / Aadāb \'arz hai*) → **Greetings / Respectful regards** (Classic literary secular greeting with slight hand gesture to forehead)\n\n### 2. Time-of-Day Greetings\n- **صُبْح بَخَیْر** (*Subḥ bakhair*) → **Good morning!** (lit. "morning with goodness")\n- **شَب بَخَیْر** (*Shab bakhair*) → **Good night!**\n\n### 3. Inquiring Wellbeing: "How are you?"\n- **To a male**: **آپ کَیسے ہَیں؟** (*Aap kaise hain?*)\n- **To a female**: **آپ کَیسی ہَیں؟** (*Aap kaisi hain?*)\n- **Informal / Friendly**: **تُم کَیسے ہو؟** (*Tum kaise ho?*)\n\n### 4. Authentic Responses\n- **مَیں ٹھِیک ہُوں، شُکْرِیَہ** (*Main theek hoon, shukriya*) → **I am fine, thank you**\n- **اَلْحَمْدُ لِلّٰہ، مَیں بَہُت اَچّھا ہُوں** (*Alḥamdulillāh, main bahut achha hoon*) → **Praise God, I am very well**',
    examples: [
      { target: 'اَلسَّلَامُ عَلَیْکُم! آپ کَیسے ہَیں؟', reading: 'Assalamu Alaikum! Aap kaise hain?', translation: 'Peace be upon you! How are you? (to a man)' },
      { target: 'وَعَلَیْکُمُ السَّلَام! مَیں ٹھِیک ہُوں، شُکْرِیَہ۔', reading: 'Walaikum Assalam! Main theek hoon, shukriya.', translation: 'And upon you be peace! I am fine, thank you.' },
      { target: 'صُبْح بَخَیْر!', reading: 'Subh bakhair!', translation: 'Good morning!' },
      { target: 'آدَابِ عَرْض ہَے۔', reading: 'Aadaab arz hai.', translation: 'Respectful greetings / regards.' }
    ],
    mnemonics: [
      'Kaise = male (Aap kaise hain?). Kaisi = female (Aap kaisi hain?). Theek hoon = I am fine (All is good)!'
    ],
    culturalNotes: [
      'Urdu is renowned as the language of refined manners (تہذیب و نزاکت - Tehzeeb o Nazakat). The respectful pronoun «آپ» (*Aap*) is always preferred over «تُم» (*Tum*) when speaking to elders, guests, or new acquaintances.'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'What is the correct authentic response when someone greets you with «اَلسَّلَامُ عَلَیْکُم» (Assalamu Alaikum)?',
        options: [
          'وَعَلَیْکُمُ السَّلَام (Walaikum Assalam - And upon you be peace)',
          'شَب بَخَیْر (Good night)',
          'شُکْرِیَہ (Thank you)',
          'مَاف کِیجِیے (Excuse me)'
        ],
        answerIndex: 0,
        explanation: '«وَعَلَیْکُمُ السَّلَام» (*Walaikum Assalam*) is the standard reciprocal response.'
      },
      {
        prompt: 'How do you politely ask a woman "How are you?" in respectful Urdu?',
        options: [
          'آپ کَیسی ہَیں؟ (Aap kaisi hain? - to female)',
          'آپ کَیسے ہَیں؟ (Aap kaise hain? - to male)',
          'تُم کَون ہو؟',
          'شَب بَخَیْر'
        ],
        answerIndex: 0,
        explanation: '«آپ کَیسی ہَیں؟» (*Aap kaisi hain?*) uses the feminine agreement «کیسی» (*kaisi*).'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'Select the Urdu phrase meaning "Good morning!" (lit. "morning with goodness"):',
        options: [
          'صُبْح بَخَیْر (Subh bakhair - Good morning)',
          'شَب بَخَیْر (Shab bakhair - Good night)',
          'آدَاب (Greetings)',
          'اللہ حافظ (Goodbye)'
        ],
        answerIndex: 0,
        explanation: '«صُبْح بَخَیْر» (*Subh bakhair*) means "Good morning".'
      },
      {
        prompt: 'What does the standard response «مَیں ٹھِیک ہُوں، شُکْرِیَہ» communicate?',
        options: [
          'I am fine, thank you',
          'My name is Ahmad',
          'Goodbye and peace',
          'Where is home?'
        ],
        answerIndex: 0,
        explanation: '«مَیں ٹھِیک ہُوں، شُکْرِیَہ» (*Main theek hoon, shukriya*) means "I am fine, thank you".'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'Which elegant secular greeting is traditionally accompanied by raising the right hand gracefully to the forehead?',
        options: [
          'آدَاب (Aadaab - Respectful regards)',
          'صُبْح بَخَیْر',
          'شُکْرِیَہ',
          'پَانِی'
        ],
        answerIndex: 0,
        explanation: '«آدَاب» (*Aadaab*) is the classic refined cultural greeting.'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the Urdu phrase for "Good morning" (S-u-b-h-b-a-k-h-a-i-r):',
        acceptedAnswers: [
          'صبح بخیر',
          'صُبْح بَخَیْر'
        ],
        explanation: '«صُبْح بَخَیْر» (*subh bakhair*) = Good morning.'
      }
    ]
  }
};

curr.lessons['ur-u1-l5'] = {
  id: 'ur-u1-l5',
  subject: 'urdu',
  unit: 1,
  lessonNumber: 5,
  title: 'تعارف، شکریہ، معذرت اور رخصت (Self-Introductions, Politeness & Farewells)',
  level: 'A1',
  objective: 'Master self-introductions (Mera naam... hai, Aap ka naam kya hai?), expressions of gratitude (Shukriya), apologies (Maaf kijiye), and farewells (Allah Hafiz, Khuda Hafiz).',
  presentation: {
    explanation: 'In this capstone lesson of Unit 1, we master self-introductions, polite requests, and formal Urdu farewell expressions.\n\n### 1. تعارف (Stating & Asking Names)\n- **مِیرا نَام [نَام] ہَے** (*Mera naam [Name] hai*) → **My name is [Name]**\n  - e.g. **مِیرا نَام طَارِق ہَے۔** (*Mera naam Tariq hai.*)\n  - e.g. **مِیرا نَام زَیْنَب ہَے۔** (*Mera naam Zainab hai.*)\n- **آپ کا نَام کِیا ہَے؟** (*Aap ka naam kya hai?*) → **What is your name? (polite / formal)**\n- **آپ سے مِل کَر بَہُت خُوشِی ہُوئِی!** (*Aap se mil kar bahut khushi hui!*) → **Very pleased to meet you!**\n\n### 2. شائستگی اور شکر گزاری (Gratitude & Apologies)\n- **شُکْرِیَہ!** (*Shukriya!*) → **Thank you!**\n- **بَہُت بَہُت شُکْرِیَہ!** (*Bahut bahut shukriya!*) → **Thank you very much!**\n- **کَوئی بَات نَہِیں** (*Koi baat nahin*) → **You are welcome / Mention not / No problem**\n- **مَاف کِیجِیے** (*Maaf kijiye*) → **Excuse me / I am sorry / Pardon me**\n- **بَرائے مِہْرْبَانِی** (*Bara-e-meherbani*) → **Please (formal)**\n\n### 3. رخصت اور الوداع (Farewells)\n- **اَللہ حَافِظ** (*Allah Hafiz*) → **Goodbye** (lit. "May God be your Protector")\n- **خُدا حَافِظ** (*Khuda Hafiz*) → **Goodbye** (Traditional Persian-Urdu farewell)\n- **پھِر مِلیں گے** (*Phir milenge*) → **See you again / Until next time**',
    examples: [
      { target: 'مِیرا نَام طَارِق ہَے۔', reading: 'Mera naam Tariq hai.', translation: 'My name is Tariq.' },
      { target: 'آپ کا نَام کِیا ہَے؟', reading: 'Aap ka naam kya hai?', translation: 'What is your name? (polite / formal)' },
      { target: 'آپ سے مِل کَر خُوشِی ہُوئِی۔', reading: 'Aap se mil kar khushi hui.', translation: 'Pleased to meet you.' },
      { target: 'اَللہ حَافِظ! پھِر مِلیں گے۔', reading: 'Allah Hafiz! Phir milenge.', translation: 'Goodbye! See you again.' }
    ],
    mnemonics: [
      'Mera naam = My name. Aap ka naam = Your name. Allah Hafiz = God protects you (Goodbye)!'
    ],
    culturalNotes: [
      'Saying «آپ سے مل کر خوشی ہوئی» (*Aap se mil kar khushi hui*) conveys sincere warmth and delight upon making a new acquaintance in Urdu-speaking society.'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'How do you introduce yourself and state "My name is Tariq" in Urdu?',
        options: [
          'مِیرا نَام طَارِق ہَے (Mera naam Tariq hai)',
          'آپ کا نَام طَارِق ہَے',
          'مَیں طَارِق جا رہا ہوں',
          'طَارِق گَھر ہَے'
        ],
        answerIndex: 0,
        explanation: '«مِیرا نَام [نَام] ہَے» (*Mera naam [name] hai*) is the standard construction for stating your name.'
      },
      {
        prompt: 'Which universal farewell expression means "Goodbye" (lit. "May God protect you")?',
        options: [
          'اَللہ حَافِظ (Allah Hafiz - Goodbye)',
          'شُکْرِیَہ (Thank you)',
          'صُبْح بَخَیْر (Good morning)',
          'مَاف کِیجِیے (Excuse me)'
        ],
        answerIndex: 0,
        explanation: '«اَللہ حَافِظ» (*Allah Hafiz*) is the universal polite Urdu farewell.'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'What is the polite phrase meaning "Pleased to meet you" in Urdu?',
        options: [
          'آپ سے مِل کَر خُوشِی ہُوئِی (Aap se mil kar khushi hui)',
          'کَوئی بَات نَہِیں (No problem)',
          'پھِر مِلیں گے (See you again)',
          'مَاف کِیجِیے (Pardon me)'
        ],
        answerIndex: 0,
        explanation: '«آپ سے مِل کَر خُوشِی ہُوئِی» (*Aap se mil kar khushi hui*) means "Pleased to meet you".'
      },
      {
        prompt: 'When someone thanks you with «شُکْرِیَہ» (Shukriya), what is the polite Urdu response meaning "You are welcome / No problem"?',
        options: [
          'کَوئی بَات نَہِیں (Koi baat nahin - You\'re welcome / No problem)',
          'اَللہ حَافِظ (Goodbye)',
          'مِیرا نَام ہَے',
          'شَب بَخَیْر'
        ],
        answerIndex: 0,
        explanation: '«کَوئی بَات نَہِیں» (*Koi baat nahin*) is the standard graceful response.'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'How do you ask someone their name respectfully in formal Urdu?',
        options: [
          'آپ کا نَام کِیا ہَے؟ (Aap ka naam kya hai?)',
          'تُم کَون ہو؟',
          'گَھر کَہاں ہَے؟',
          'کَیسے ہو؟'
        ],
        answerIndex: 0,
        explanation: '«آپ کا نَام کِیا ہَے؟» (*Aap ka naam kya hai?*) is the respectful polite question.'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the Urdu phrase for "Goodbye / Allah Hafiz" (A-l-l-a-h-H-a-f-i-z):',
        acceptedAnswers: [
          'اللہ حافظ',
          'اَللہ حَافِظ'
        ],
        explanation: '«اللہ حافظ» (*Allah Hafiz*) = Goodbye.'
      }
    ]
  }
};

const output = '// Urdu curriculum\n(function(global){\n  \'use strict\';\n  var UNITS = ' + JSON.stringify(curr.units, null, 4) + ';\n  var LESSONS = ' + JSON.stringify(curr.lessons, null, 4) + ';\n  var CURRICULUM = { id: \'urdu\', name: \'Urdu\', units: UNITS, lessons: LESSONS };\n  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};\n  global.FEARN_CURRICULA[\'urdu\'] = CURRICULUM;\n  if (typeof module !== \'undefined\' && module.exports) module.exports = CURRICULUM;\n})(typeof window !== \'undefined\' ? window : global);\n';

fs.writeFileSync(filePath, output, 'utf8');
console.log('Successfully patched Urdu curriculum Unit 1!');
