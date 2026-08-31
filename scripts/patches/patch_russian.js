const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../../data/curricula/russian.js');
const curr = require(filePath);

curr.lessons['ru-u1-l1'] = {
  id: 'ru-u1-l1',
  subject: 'russian',
  unit: 1,
  lessonNumber: 1,
  title: 'キリル文字の基礎：真の友と偽の友 (Cyrillic True & False Friends)',
  level: 'A1',
  objective: 'Master the 11 foundational Cyrillic letters: 5 "True Friends" (А, К, М, О, Т) and 6 "False Friends" (В, Е, Н, Р, С, Х), reading authentic Russian words immediately.',
  presentation: {
    explanation: 'Welcome to Russian (Русский язык)! Russian is written in the **Cyrillic alphabet (кириллица)**, created in the 9th century by Saints Cyril and Methodius and their disciples based on the Greek uncial script. It contains 33 letters.\n\nRather than memorizing 33 letters at once, we group them logically. Today we master the first 11 letters:\n\n### 1. "True Friends" (Look & Sound Like Latin Letters)\n- **А а** [a] — pronounced "ah" (as in "father")\n- **К к** [k] — pronounced "k" (as in "kite")\n- **М м** [m] — pronounced "m" (as in "mother")\n- **О о** [o] — pronounced "oh" (as in "open" when stressed)\n- **Т т** [t] — pronounced "t" (as in "top")\n\n### 2. "False Friends" (Look Like Latin, But Sound Completely Different!)\n- **В в** [v] — Looks like English "B", but pronounced **[v]** (as in "vine")\n- **Е е** [ye] — Looks like English "E", but pronounced **[ye]** (as in "yes")\n- **Н н** [n] — Looks like English "H", but pronounced **[n]** (as in "no")\n- **Р р** [r] — Looks like English "P", but pronounced as a rolled **[r]** (as in Spanish "pero")\n- **С с** [s] — Looks like English "C", but always pronounced **[s]** (as in "sun")\n- **Х х** [kh / x] — Looks like English "X", but pronounced as a guttural **[kh]** (as in "Bach" / Scottish "loch")\n\n### 3. First Authentic Russian Words (Read Using ONLY These 11 Letters)\n- **КОТ** (*kot*) → **cat (male)** (К + О + Т)\n- **ТОМ** (*tom*) → **volume / book tome** (Т + О + М)\n- **ТАМ** (*tam*) → **there** (Т + А + М)\n- **ВОДА** (*voda*) → **water** (В + О + Д... -> В + О + [voda])\n- **НОС** (*nos*) → **nose** (Н + О + С)\n- **РОТ** (*rot*) → **mouth** (Р + О + Т)\n- **МОСКВА** (*Moskva*) → **Moscow** (М + О + С + К + В + А)\n- **СОК** (*sok*) → **juice** (С + О + К)\n- **РЕКА** (*reka*) → **river** (Р + Е + К + А)\n- **ОХОТА** (*okhota*) → **hunt / desire** (О + Х + О + Т + А)',
    examples: [
      { target: 'КОТ', reading: 'kot', translation: 'cat (К [k] + О [o] + Т [t])' },
      { target: 'НОС', reading: 'nos', translation: 'nose (Н [n] + О [o] + С [s])' },
      { target: 'МОСКВА', reading: 'Moskva', translation: 'Moscow (М + О + С + К + В + А)' },
      { target: 'РЕКА', reading: 'reka', translation: 'river (Р [r] + Е [ye] + К + А)' }
    ],
    mnemonics: [
      'In Cyrillic: B sounds like V (Vase), H sounds like N (Net), P sounds like R (Roll), C sounds like S (Sun), X sounds like Kh (Bach)!'
    ],
    culturalNotes: [
      'Cyrillic literacy spread across Slavic lands through Old Church Slavonic manuscripts, becoming the official script for over 250 million speakers today.'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'How is the Cyrillic letter «Н» (False Friend) pronounced in Russian words like «НОС» (nos)?',
        options: [
          'Like the English letter [n] in "no"',
          'Like the English letter [h] in "hat"',
          'Like the English letter [m] in "man"',
          'Like the English letter [p] in "pet"'
        ],
        answerIndex: 0,
        explanation: 'Cyrillic «Н» represents the alveolar nasal consonant [n].'
      },
      {
        prompt: 'Read the Cyrillic word «КОТ» and select its correct English meaning and pronunciation:',
        options: [
          'kot (cat)',
          'tom (book)',
          'nos (nose)',
          'sok (juice)'
        ],
        answerIndex: 0,
        explanation: '«К» [k] + «О» [o] + «Т» [t] spells «КОТ» (*kot*), meaning cat.'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'Which Cyrillic letter looks like the Latin "P" but is pronounced as a rolled [r] sound?',
        options: [
          'Р (pronounced [r])',
          'В (pronounced [v])',
          'Н (pronounced [n])',
          'С (pronounced [s])'
        ],
        answerIndex: 0,
        explanation: 'Cyrillic «Р» corresponds to the rolled [r] sound.'
      },
      {
        prompt: 'Identify the Russian capital city name spelled «МОСКВА»:',
        options: [
          'Moskva (Moscow)',
          'Minsk',
          'Kazan',
          'Samara'
        ],
        answerIndex: 0,
        explanation: '«М-О-С-К-В-А» spells «МОСКВА» (*Moskva* - Moscow).'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'What does the Cyrillic word «НОС» mean in English?',
        options: [
          'nose',
          'cat',
          'mouth',
          'juice'
        ],
        answerIndex: 0,
        explanation: '«Н» [n] + «О» [o] + «С» [s] = «НОС» (*nos* - nose).'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the 3-letter Cyrillic Russian word for "cat" (k-o-t):',
        acceptedAnswers: [
          'кот',
          'КОТ'
        ],
        explanation: '«к» + «о» + «т» = «кот» (*kot*).'
      }
    ]
  }
};

curr.lessons['ru-u1-l2'] = {
  id: 'ru-u1-l2',
  subject: 'russian',
  unit: 1,
  lessonNumber: 2,
  title: '新しい子音とアカーニエの規則 (New Consonants & Akan\'ye Vowel Reduction)',
  level: 'A1',
  objective: 'Master new Cyrillic consonants (Б, Г, Д, Ж, З, Л, П, Ф) and the foundational phonetic law of Akan\'ye (unstressed "o" reducing to [a]).',
  presentation: {
    explanation: 'Now we introduce 8 new Cyrillic consonants and the fundamental Russian pronunciation rule: **Akan\'ye (Аканье)**.\n\n### 1. New Cyrillic Consonants\n- **Б б** [b] — "b" as in "book" (distinct from В [v])\n- **Г г** [g] — "g" as in "go"\n- **Д д** [d] — "d" as in "door"\n- **Ж ж** [zh / ʒ] — voiced sibilant like "s" in "measure" or "treasure"\n- **З з** [z] — "z" as in "zebra" (looks like the digit 3)\n- **Л л** [l] — "l" as in "lamp"\n- **П п** [p] — "p" as in "park" (derived from Greek Pi π)\n- **Ф ф** [f] — "f" as in "photo" (derived from Greek Phi φ)\n\n### 2. The Golden Rule of Russian Phonetics: Akan\'ye (Аканье)\nIn Russian, word stress (ударение) is dynamic and powerful. When the vowel letter **«О» is unstressed**, it reduces phonetically to a short **[a]** sound:\n- **хорошо́** (good/well) → written with 3 \'O\'s, but pronounced **[харашо́ / kharashó]** because only the final syllable is stressed!\n- **молоко́** (milk) → pronounced **[малако́ / malakó]**\n- **спаси́бо** (thank you) → pronounced **[спаси́ба / spasíba]**\n\n### 3. New Authentic Vocabulary\n- **ДА** (*da*) → **yes** (Д + А)\n- **ДОМ** (*dom*) → **house / home** (Д + О + М)\n- **ГДЕ** (*gde*) → **where** (Г + Д + Е)\n- **БРАТ** (*brat*) → **brother** (Б + Р + А + Т)\n- **ПАРК** (*park*) → **park** (П + А + Р + К)\n- **ФОТО** (*foto*) → **photo** (Ф + О + Т + О)\n- **ЖУК** (*zhuk*) → **beetle / bug** (Ж + У + К)\n- **ЛУНА** (*luna*) → **moon** (Л + У + Н + А)',
    examples: [
      { target: 'ДА', reading: 'da', translation: 'yes (Д [d] + А [a])' },
      { target: 'ДОМ', reading: 'dom', translation: 'house / home (Д [d] + О [o] + М [m])' },
      { target: 'ГДЕ', reading: 'gde', translation: 'where (Г [g] + Д [d] + Е [ye])' },
      { target: 'БРАТ', reading: 'brat', translation: 'brother (Б [b] + Р [r] + А + Т)' }
    ],
    mnemonics: [
      'Д looks like a Dollhouse with little legs. Ж looks like a Bug/Beetle (zhuk) with legs spreading out. П looks like Goalposts (p). З looks like the number 3 (z)!'
    ],
    culturalNotes: [
      'Russian intonation and stress completely change word meanings: for example, «за́мок» (stress on first syllable) means castle, whereas «замо́к» (stress on last syllable) means lock!'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'According to the rule of Akan\'ye (Аканье), how is the unstressed letter «о» pronounced in Russian words?',
        options: [
          'It reduces to a short [a] sound',
          'It is pronounced as a long [oo] sound',
          'It becomes completely silent',
          'It turns into [e]'
        ],
        answerIndex: 0,
        explanation: 'In standard literary Russian, unstressed «о» reduces to an [a] sound (Akan\'ye).'
      },
      {
        prompt: 'Select the 3-letter Cyrillic word meaning "house / home" spelled with «Д», «О», «М»:',
        options: [
          'ДОМ (dom - house/home)',
          'ДА (da - yes)',
          'ГДЕ (gde - where)',
          'КОТ (kot - cat)'
        ],
        answerIndex: 0,
        explanation: '«Д» [d] + «О» [o] + «М» [m] = «ДОМ» (*dom* - house/home).'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'Which Cyrillic consonant looks like a beetle with six legs and makes the voiced sound [zh] (as in "measure")?',
        options: [
          'Ж (pronounced [zh])',
          'Д (pronounced [d])',
          'Б (pronounced [b])',
          'Г (pronounced [g])'
        ],
        answerIndex: 0,
        explanation: '«Ж» represents the voiced post-alveolar fricative [zh].'
      },
      {
        prompt: 'Identify the Cyrillic word meaning "where" spelled with «Г», «Д», and «Е»:',
        options: [
          'ГДЕ (gde - where)',
          'БРАТ (brat - brother)',
          'ПАРК (park - park)',
          'ДОМ (dom - house)'
        ],
        answerIndex: 0,
        explanation: '«Г» [g] + «Д» [d] + «Е» [ye] = «ГДЕ» (*gde* - where).'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'Which Cyrillic word means "brother" in Russian?',
        options: [
          'БРАТ (brat - brother)',
          'ДОМ (dom - house)',
          'КОТ (kot - cat)',
          'ПАРК (park - park)'
        ],
        answerIndex: 0,
        explanation: '«БРАТ» (*brat*) means brother.'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the 3-letter Cyrillic Russian word for "house / home" (d-o-m):',
        acceptedAnswers: [
          'дом',
          'ДОМ'
        ],
        explanation: '«д» + «о» + «м» = «дом» (*dom*).'
      }
    ]
  }
};

curr.lessons['ru-u1-l3'] = {
  id: 'ru-u1-l3',
  subject: 'russian',
  unit: 1,
  lessonNumber: 3,
  title: '母音・軟音記号と語末の無声化 (Vowels, Soft Sign & Devoicing)',
  level: 'A1',
  objective: 'Master remaining vowels (И, Й, Ы, Э, Ю, Я), the soft sign (Ь), hard sign (Ъ), and the phonetic rule of final voiced consonant devoicing.',
  presentation: {
    explanation: 'Now we complete the Russian vowel set, introduce the soft sign, and learn the rule of **final consonant devoicing**.\n\n### 1. The Remaining Cyrillic Vowels\n- **И и** [i] — "ee" as in "meet" (softens preceding consonant)\n- **Й й** [y / j] — Short I (semivowel, as in "boy" or "toy")\n- **Ы ы** [hard y / ɨ] — Unique Russian vowel: pull tongue back while smiling, say "ee" with a deep throat resonance\n- **Э э** [e] — Pure "eh" without "y" glide (as in "echo")\n- **Ю ю** [yu] — "yu" as in "universe"\n- **Я я** [ya] — "ya" as in "yard"\n\n### 2. The Soft Sign (Мягкий знак - Ь)\n- **Ь** makes no sound of its own. It tells you to **soften (palatalize)** the preceding consonant by pressing the flat middle of your tongue against the roof of your mouth:\n  - **МАТ** (*mat*) = floor mat (hard T) vs **МАТЬ** (*mat\'*) = mother (soft T\'!)\n  - **ДЕНЬ** (*den\'*) = day (soft N\')\n\n### 3. Final Consonant Devoicing (Оглушение звонких)\nAt the end of a Russian word, all voiced consonants automatically lose their voice and turn into their voiceless twin:\n- **Б → П**, **В → Ф**, **Г → К**, **Д → Т**, **Ж → Ш**, **З → С**\n- Examples: **ГОРОД** (city) is pronounced **[го́рат / górat]**; **КЛУБ** (club) is pronounced **[клуп / klup]**; **ДРУГ** (friend) is pronounced **[друк / druk]**.\n\n### 4. Essential Words & Pronouns\n- **Я** (*ya*) → **I**\n- **ТЫ** (*ty*) → **you (informal)**\n- **ОН** (*on*) → **he**\n- **ОНА** (*ona*) → **she**\n- **МЫ** (*my*) → **we**\n- **ВЫ** (*vy*) → **you (formal / plural)**\n- **ОНИ** (*oni*) → **they**\n- **ДЕНЬ** (*den\'*) → **day**\n- **ДРУГ** (*drug*) → **friend**',
    examples: [
      { target: 'Я', reading: 'ya', translation: 'I (first-person singular pronoun)' },
      { target: 'ДЕНЬ', reading: 'den\'', translation: 'day (Д + Е + Н + Ь [soft n\'])' },
      { target: 'ДРУГ', reading: 'drug [druk]', translation: 'friend (ends with devoiced [k] sound)' },
      { target: 'ГОРОД', reading: 'gorod [gorat]', translation: 'city (ends with devoiced [t] sound)' }
    ],
    mnemonics: [
      'Я looks like a backwards \'R\' and means \'I\' (me!). И looks like backwards \'N\' and sounds like \'ee\'. Ь softens the letter before it like a cushion.'
    ],
    culturalNotes: [
      'Russian uses distinct polite \'Вы\' (Vy) for strangers, elders, and professionals, and intimate \'ты\' (ty) for close family, friends, and children.'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'In Russian final consonant devoicing, how is the final letter «д» pronounced in the word «ГОРОД» (city)?',
        options: [
          'It devoices into the voiceless sound [t] ([го́рат])',
          'It remains a heavy voiced [d]',
          'It becomes completely silent',
          'It turns into [z]'
        ],
        answerIndex: 0,
        explanation: 'At the end of a word, voiced «д» devoices into [t].'
      },
      {
        prompt: 'Which 1-letter Cyrillic word means "I" (first-person pronoun)?',
        options: [
          'Я (ya - I)',
          'ОН (on - he)',
          'МЫ (my - we)',
          'ТЫ (ty - you)'
        ],
        answerIndex: 0,
        explanation: '«Я» (*ya*) is the first-person singular pronoun "I".'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'What role does the soft sign «Ь» (мягкий знак) perform when attached to a consonant?',
        options: [
          'It palatalizes (softens) the pronunciation of the preceding consonant',
          'It adds an extra vowel sound',
          'It capitalizes the word',
          'It makes the preceding letter silent'
        ],
        answerIndex: 0,
        explanation: '«Ь» has no sound of its own; it softens (palatalizes) the consonant before it.'
      },
      {
        prompt: 'Identify the Cyrillic word meaning "day" with a soft final «нь»:',
        options: [
          'ДЕНЬ (den\' - day)',
          'ДОМ (dom - house)',
          'ДРУГ (drug - friend)',
          'ДА (da - yes)'
        ],
        answerIndex: 0,
        explanation: '«ДЕНЬ» (*den\'*) means day.'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'Which pronoun means "we" in Russian?',
        options: [
          'МЫ (my - we)',
          'ВЫ (vy - you formal/plural)',
          'ОНИ (oni - they)',
          'ОН (on - he)'
        ],
        answerIndex: 0,
        explanation: '«МЫ» (*my*) means "we".'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the 1-letter Cyrillic Russian pronoun for "I" (ya):',
        acceptedAnswers: [
          'я',
          'Я'
        ],
        explanation: '«я» (*ya*) = I.'
      }
    ]
  }
};

curr.lessons['ru-u1-l4'] = {
  id: 'ru-u1-l4',
  subject: 'russian',
  unit: 1,
  lessonNumber: 4,
  title: 'シー・チー・シャー・シシャーと必須の挨拶 (Sibilants & Core Everyday Greetings)',
  level: 'A1',
  objective: 'Master Cyrillic sibilants (Ц, Ч, Ш, Щ) and essential everyday spoken greetings (Здравствуйте, Привет, Спасибо, Пожалуйста, До свидания).',
  presentation: {
    explanation: 'Now we complete the Russian alphabet with the 4 sibilant consonants and master core spoken greetings.\n\n### 1. The 4 Sibilants (Шипящие и свистящие)\n- **Ц ц** [ts] — "ts" as in "cats" (always hard in Russian)\n- **Ч ч** [ch] — "ch" as in "chair" (always soft in Russian)\n- **Ш ш** [sh] — hard "sh" (pull tongue back, as in "shut")\n- **Щ щ** [shch / ɕː] — soft, long "shch" (smile with tongue forward, as in "fresh cheese")\n\n### 2. Core Everyday Russian Greetings\n- **Здра́вствуйте!** (*Zdravstvuyte*) → **Hello (polite / formal)** (lit. "be healthy!"; the first \'в\' is silent: [здра́ствуйте])\n- **Приве́т!** (*Privet*) → **Hi / Hello (informal, to friends)**\n- **Спаси́бо!** (*Spasibo [spasíba]*) → **Thank you!** (lit. "God save you!")\n- **Пожа́луйста!** (*Pozhaluysta*) → **Please / You\'re welcome / Here you go**\n- **До свида́ния!** (*Do svidaniya*) → **Goodbye!** (lit. "until seeing each other")\n- **Пока́!** (*Poka*) → **Bye! (informal)**\n- **Доброе утро!** (*Dobroye utro*) → **Good morning**\n- **Добрый день!** (*Dobry den\'*) → **Good afternoon / Good day**\n- **Добрый вечер!** (*Dobry vecher*) → **Good evening**',
    examples: [
      { target: 'Здравствуйте!', reading: 'Zdravstvuyte', translation: 'Hello (formal / polite greeting)' },
      { target: 'Привет!', reading: 'Privet', translation: 'Hi (friendly informal greeting)' },
      { target: 'Спасибо!', reading: 'Spasibo [spasíba]', translation: 'Thank you!' },
      { target: 'До свидания!', reading: 'Do svidaniya', translation: 'Goodbye!' }
    ],
    mnemonics: [
      'Здравствуйте comes from \'здоровье\' (health) — you are wishing health to your conversation partner! Спасибо is shortened from \'Спаси Бог\' (May God save you!).'
    ],
    culturalNotes: [
      'In Russian culture, a firm handshake with direct eye contact is standard between men when greeting, while a warm smile without excessive small talk is valued as authentic sincerity.'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'Which Russian greeting is the standard respectful formal expression for "Hello" when addressing a teacher, elder, or client?',
        options: [
          'Здравствуйте! (Zdravstvuyte - Hello formal)',
          'Привет! (Privet - Hi informal)',
          'Пока! (Poka - Bye informal)',
          'Спасибо! (Spasibo - Thank you)'
        ],
        answerIndex: 0,
        explanation: '«Здравствуйте!» (*Zdravstvuyte*) is the universal respectful formal greeting.'
      },
      {
        prompt: 'Which Cyrillic letter represents the "ts" sound (as in "cats")?',
        options: [
          'Ц (pronounced [ts])',
          'Ч (pronounced [ch])',
          'Ш (pronounced [sh])',
          'Щ (pronounced [shch])'
        ],
        answerIndex: 0,
        explanation: '«Ц» represents the alveolar affricate [ts].'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'Select the standard Russian word for expressing gratitude ("Thank you!"):',
        options: [
          'Спасибо! (Spasibo - Thank you!)',
          'Пожалуйста! (Pozhaluysta - Please / You\'re welcome)',
          'До свидания! (Do svidaniya - Goodbye!)',
          'Привет! (Privet - Hi!)'
        ],
        answerIndex: 0,
        explanation: '«Спасибо!» (*Spasibo*) means "Thank you!".'
      },
      {
        prompt: 'Which phrase is the standard formal way to say "Goodbye" in Russian?',
        options: [
          'До свидания! (Do svidaniya - Goodbye!)',
          'Пока! (Poka - Bye informal)',
          'Привет! (Privet - Hi!)',
          'Здравствуйте! (Zdravstvuyte - Hello!)'
        ],
        answerIndex: 0,
        explanation: '«До свидания!» (*Do svidaniya*) means "Goodbye!".'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'Which casual word is used among close friends for "Hi / Hello"?',
        options: [
          'Привет! (Privet - Hi!)',
          'Здравствуйте! (Zdravstvuyte - Hello formal)',
          'До свидания! (Do svidaniya - Goodbye)',
          'Спасибо! (Spasibo - Thank you)'
        ],
        answerIndex: 0,
        explanation: '«Привет!» (*Privet*) is the friendly informal greeting.'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the Cyrillic Russian word for "Thank you" (s-p-a-s-i-b-o):',
        acceptedAnswers: [
          'спасибо',
          'Спасибо',
          'СПАСИБО'
        ],
        explanation: '«спасибо» (*spasibo*) = Thank you.'
      }
    ]
  }
};

curr.lessons['ru-u1-l5'] = {
  id: 'ru-u1-l5',
  subject: 'russian',
  unit: 1,
  lessonNumber: 5,
  title: '自己紹介と「Меня зовут...」の表現 (Self-Introductions & Dialogue Mechanics)',
  level: 'A1',
  objective: 'Master introducing yourself using «Меня зовут...», asking names («Как вас зовут? / Как тебя зовут?»), expressing polite pleasure («Очень приятно!»), and synthesizing Unit 1 literacy.',
  presentation: {
    explanation: 'Now you combine your complete Cyrillic literacy to introduce yourself and engage in authentic Russian dialogue.\n\n### 1. Stating Your Name: «Меня зовут...»\nIn Russian, to state your name you use the construction:\n- **Меня́ зову́т [Имя]** (*Menya zovut [Name]*) → lit. "They call me [Name]" / "My name is [Name]"\n  - **Меня зовут Иван.** (*Menya zovut Ivan.*) → My name is Ivan.\n  - **Меня зовут Анна.** (*Menya zovut Anna.*) → My name is Anna.\n\n### 2. Asking Someone\'s Name\n- **Formal / Polite (to elders, professionals, strangers)**:\n  - **Как вас зову́т?** (*Kak vas zovut?*) → What is your name? (lit. "How do they call you?")\n- **Informal / Friendly (to peers, children)**:\n  - **Как тебя́ зову́т?** (*Kak tebya zovut?*) → What is your name?\n\n### 3. Polite Response: «Очень приятно!»\n- **О́чень прия́тно!** (*Ochen\' priyatno!*) → **Pleased to meet you! / Very nice!**\n- **Взаи́мно!** (*Vzaimno!*) → **Likewise! / The feeling is mutual!**\n\n### 4. Sample Complete Dialogue\n- **А:** Здравствуйте! Меня зовут Дмитрий. А как вас зовут?\n- **Б:** Здравствуйте! Меня зовут Елена. Очень приятно!\n- **А:** Очень приятно, Елена!',
    examples: [
      { target: 'Меня зовут Иван.', reading: 'Menya zovut Ivan.', translation: 'My name is Ivan.' },
      { target: 'Как вас зовут?', reading: 'Kak vas zovut?', translation: 'What is your name? (polite / formal)' },
      { target: 'Как тебя зовут?', reading: 'Kak tebya zovut?', translation: 'What is your name? (informal / friendly)' },
      { target: 'Очень приятно!', reading: 'Ochen\' priyatno!', translation: 'Pleased to meet you!' }
    ],
    mnemonics: [
      'Меня зовут literally means "Me they call". Vas = You (formal), Tebya = You (informal). Ochen\' priyatno = Very pleasant!'
    ],
    culturalNotes: [
      'Russian full names consist of three parts: First Name (Имя), Patronymic (Отчество - derived from father\'s name, e.g. Ivanovich / Ivanovna), and Surname (Фамилия). In formal settings, using First Name + Patronymic shows maximum respect.'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'Which construction is used in Russian to say "My name is..."?',
        options: [
          'Меня зовут... (Menya zovut...)',
          'Я зовут...',
          'Мой имя есть...',
          'Меня есть...'
        ],
        answerIndex: 0,
        explanation: '«Меня зовут...» (*Menya zovut...*) is the standard authentic construction.'
      },
      {
        prompt: 'How do you politely ask a stranger or professor their name in formal Russian?',
        options: [
          'Как вас зовут? (Kak vas zovut? - formal)',
          'Как тебя зовут? (informal)',
          'Кто ты?',
          'Где дом?'
        ],
        answerIndex: 0,
        explanation: '«Как вас зовут?» (*Kak vas zovut?*) uses the polite plural/formal pronoun form «вас».'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'Select the polite phrase meaning "Pleased to meet you!" upon an introduction:',
        options: [
          'Очень приятно! (Ochen\' priyatno!)',
          'До свидания! (Do svidaniya!)',
          'Спасибо! (Spasibo!)',
          'Пожалуйста! (Pozhaluysta!)'
        ],
        answerIndex: 0,
        explanation: '«Очень приятно!» (*Ochen\' priyatno!*) means "Pleased to meet you!".'
      },
      {
        prompt: 'If someone introduces themselves with «Меня зовут Анна», what does this sentence communicate?',
        options: [
          'My name is Anna',
          'Anna is there',
          'I am going to Anna',
          'Where is Anna?'
        ],
        answerIndex: 0,
        explanation: '«Меня зовут Анна» means "My name is Anna".'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'What is the correct formal response when introduced to a new colleague who says «Очень приятно!»?',
        options: [
          'Очень приятно! / Взаимно! (Pleased to meet you! / Likewise!)',
          'Пока!',
          'Где кот?',
          'Нет, спасибо!'
        ],
        answerIndex: 0,
        explanation: 'Responding with «Очень приятно!» or «Взаимно!» is the correct etiquette.'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the Cyrillic Russian phrase for "Pleased to meet you" (O-c-h-e-n-p-r-i-y-a-t-n-o):',
        acceptedAnswers: [
          'Очень приятно',
          'Очень приятно!',
          'очень приятно',
          'очень приятно!'
        ],
        explanation: '«Очень приятно!» (*Ochen\' priyatno!*) = Pleased to meet you.'
      }
    ]
  }
};

const output = '// Russian curriculum\n(function(global){\n  \'use strict\';\n  var UNITS = ' + JSON.stringify(curr.units, null, 4) + ';\n  var LESSONS = ' + JSON.stringify(curr.lessons, null, 4) + ';\n  var CURRICULUM = { id: \'russian\', name: \'Russian\', units: UNITS, lessons: LESSONS };\n  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};\n  global.FEARN_CURRICULA[\'russian\'] = CURRICULUM;\n  if (typeof module !== \'undefined\' && module.exports) module.exports = CURRICULUM;\n})(typeof window !== \'undefined\' ? window : global);\n';

fs.writeFileSync(filePath, output, 'utf8');
console.log('Successfully patched Russian curriculum Unit 1!');
