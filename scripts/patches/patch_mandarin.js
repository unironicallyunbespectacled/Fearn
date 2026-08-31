const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../../data/curricula/mandarin.js');
const curr = require(filePath);

curr.lessons['zh-u1-l1'] = {
  id: 'zh-u1-l1',
  subject: 'mandarin',
  unit: 1,
  lessonNumber: 1,
  title: '汉语拼音系统概论：单韵母与第一组声母 (Pinyin Simple Finals & First Initials)',
  level: 'A1',
  objective: 'Master the Standard Mandarin phonetic spelling system (Hanyu Pinyin), the 6 simple finals (a, o, e, i, u, ü), and the first 8 initials (b, p, m, f, d, t, n, l) with aspiration contrasts.',
  presentation: {
    explanation: 'Welcome to Mandarin Chinese (普通话)! Standard Chinese is phonetically transcribed in the Latin alphabet using **Hanyu Pinyin (汉语拼音)**. Each Chinese syllable consists of three components: an **Initial consonant (声母)**, a **Final vowel (韵母)**, and a **Tone pitch (声调)**.\n\n### 1. The 6 Simple Finals (单韵母)\n- **a** [a] — Open mouth wide: "ah" (as in "father")\n- **o** [o] — Round lips into an O-shape: "aw/oh"\n- **e** [ɤ] — Unrounded back vowel: smile slightly and produce "uh" from the throat\n- **i** [i] — Spread lips wide: "ee" (as in "see")\n- **u** [u] — Pucker lips into a small circle: "oo" (as in "moon")\n- **ü** [y] — **Special German/French sound**: Hold your tongue in the "i" [ee] position while rounding your lips into a tight "u" circle (as in German "über")\n\n### 2. The First 8 Initials (声母: b, p, m, f, d, t, n, l)\nIn Chinese, the critical contrast between consonants is **Aspiration (送气 vs 不送气)**, NOT vocal cord voicing:\n- **b** [p] — **Unaspirated**: like "p" in "spin" (no puff of air)\n- **p** [pʰ] — **Aspirated**: strong explosive puff of air (hold a tissue in front of lips, it should fly!)\n- **m** [m] — Bilabial nasal: "m" as in "mother"\n- **f** [f] — Labiodental fricative: "f" as in "father"\n- **d** [t] — **Unaspirated**: like "t" in "stop" (no puff of air)\n- **t** [tʰ] — **Aspirated**: strong puff of air as in "top"\n- **n** [n] — Alveolar nasal: "n" as in "no"\n- **l** [l] — Lateral approximant: "l" as in "love"\n\n### 3. Syllable Spelling Examples\n- **ba** (八 bā - eight) vs **pa** (爬 pá - climb)\n- **da** (大 dà - big) vs **ta** (他 tā - he/him)\n- **ma** (妈 mā - mother) vs **fa** (发 fā - send/emit)\n- **nǚ** (女 nǚ - female) vs **lù** (路 lù - road)',
    examples: [
      { target: 'bā (八)', reading: 'bā', translation: 'eight (b + a, first tone)' },
      { target: 'pā (趴)', reading: 'pā', translation: 'lie flat (aspirated p + a)' },
      { target: 'dà (大)', reading: 'dà', translation: 'big / large (d + a, fourth tone)' },
      { target: 'tā (他)', reading: 'tā', translation: 'he / him (aspirated t + a)' }
    ],
    mnemonics: [
      'Remember: "b" and "d" in Pinyin are voiceless and unaspirated (like "sp" in spin and "st" in stop). "p" and "t" are explosive with air!'
    ],
    culturalNotes: [
      'Hanyu Pinyin was officially developed in China by linguist Zhou Youguang and promulgated in 1958. It is now the universal international ISO standard for transcribing Chinese phonetics.'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'In Mandarin Pinyin, what is the crucial articulatory difference between initial «b» and initial «p»?',
        options: [
          'Aspiration: «b» is unaspirated (no puff of air), while «p» is strongly aspirated (strong puff of air)',
          '«b» is voiced like English "b", while «p» is silent',
          '«b» is pronounced with teeth, while «p» is nasal',
          'There is no difference'
        ],
        answerIndex: 0,
        explanation: 'Mandarin contrasts unaspirated [p] (written b) with aspirated [pʰ] (written p).'
      },
      {
        prompt: 'How is the simple final «ü» correctly pronounced in Mandarin phonetics?',
        options: [
          'Keep your tongue in the "i" [ee] position while rounding lips into a tight circle [y]',
          'Open your mouth wide like "ah"',
          'Pronounce it identically to "u"',
          'Pronounce it like English "w"'
        ],
        answerIndex: 0,
        explanation: '«ü» is a close front rounded vowel, articulated with the tongue high and front like [i] and lips rounded like [u].'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'Which of the following Pinyin initials is a labiodental fricative (upper teeth touching lower lip)?',
        options: [
          'f (labiodental fricative)',
          'b (bilabial stop)',
          'd (alveolar stop)',
          'm (bilabial nasal)'
        ],
        answerIndex: 0,
        explanation: '«f» is produced by contacting the upper teeth with the lower lip.'
      },
      {
        prompt: 'When the initial «d» combines with final «a» in fourth tone to spell «dà» (大), what does the word mean?',
        options: [
          'dà (big / large)',
          'tā (he / him)',
          'mā (mother)',
          'bā (eight)'
        ],
        answerIndex: 0,
        explanation: '«dà» (大) means big or large.'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'Which pair of initials represents the alveolar stops (unaspirated vs aspirated)?',
        options: [
          'd [t] and t [tʰ]',
          'b [p] and p [pʰ]',
          'm [m] and f [f]',
          'n [n] and l [l]'
        ],
        answerIndex: 0,
        explanation: '«d» and «t» are alveolar stops.'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the Pinyin spelling for the Chinese word for "big" (d-a, 4th tone mark or dà):',
        acceptedAnswers: [
          'da',
          'dà',
          'da4'
        ],
        explanation: '«dà» (大) = big.'
      }
    ]
  }
};

curr.lessons['zh-u1-l2'] = {
  id: 'zh-u1-l2',
  subject: 'mandarin',
  unit: 1,
  lessonNumber: 2,
  title: '普通话四声调值与五度标记法 (The 4 Tones & Neutral Tone)',
  level: 'A1',
  objective: 'Master the 4 lexical tones of Standard Mandarin (55 high-level, 35 rising, 214 dipping, 51 falling) and the light neutral tone.',
  presentation: {
    explanation: 'Mandarin Chinese is a **tonal language**. The exact same syllable pronounced with different pitch contours has completely different meanings!\n\n### 1. The 4 Mandarin Tones (四声)\nWe visualize tones using the 5-point pitch scale (1 lowest, 5 highest):\n- **1st Tone (第一声 / 阴平 - High Level 55)**: **ā** (e.g. **mā 妈** = mother) — High, steady, sustained pitch like a singing note "laaa".\n- **2nd Tone (第二声 / 阳平 - High Rising 35)**: **á** (e.g. **má 麻** = hemp) — Starts mid and rises sharply to high, like asking "What?!".\n- **3rd Tone (第三声 / 上声 - Low Dipping 214)**: **ǎ** (e.g. **mǎ 马** = horse) — Drops down to low pitch and rises slightly.\n- **4th Tone (第四声 / 去声 - High Falling 51)**: **à** (e.g. **mà 骂** = to scold) — Starts at top pitch (5) and drops sharply and decisively to bottom (1), like a firm command "Stop!".\n\n### 2. The Neutral Tone (轻声 - 5th Tone)\n- A short, light, unstressed syllable with no tone mark (e.g. **ma 吗** = question particle, **bàba 爸爸** = father, **māma 妈妈** = mother).\n\n### 3. Classic Tone Minimal Quadruplet\n- **mā (妈)** → Mother\n- **má (麻)** → Hemp\n- **mǎ (马)** → Horse\n- **mà (骂)** → Scold\n- **ma (吗)** → Question marker',
    examples: [
      { target: 'mā (妈)', reading: 'mā', translation: 'mother (1st tone, high flat 55)' },
      { target: 'má (麻)', reading: 'má', translation: 'hemp (2nd tone, rising 35)' },
      { target: 'mǎ (马)', reading: 'mǎ', translation: 'horse (3rd tone, dipping 214)' },
      { target: 'mà (骂)', reading: 'mà', translation: 'to scold (4th tone, falling 51)' }
    ],
    mnemonics: [
      '1st tone = High flat robot voice. 2nd tone = Questioning "Huh?". 3rd tone = Thoughtful "Well...". 4th tone = Decisive "No!"'
    ],
    culturalNotes: [
      'Tonal accuracy is essential for clear communication in Chinese. In poetry and classical opera, tonal balance (平仄 - Ping Ze) governs poetic meter and musical aesthetics.'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'Which tone in Standard Mandarin starts high at pitch level 5 and drops sharply to level 1 (51 falling contour)?',
        options: [
          'Fourth Tone (第四声 / 去声 - High Falling 51)',
          'First Tone (High Level 55)',
          'Second Tone (Rising 35)',
          'Third Tone (Dipping 214)'
        ],
        answerIndex: 0,
        explanation: 'The 4th tone is a sharp, decisive falling pitch from 5 down to 1.'
      },
      {
        prompt: 'In the classic syllable «ma», which tone corresponds to the meaning "mother" (妈)?',
        options: [
          'First tone (mā - 妈)',
          'Second tone (má - 麻)',
          'Third tone (mǎ - 马)',
          'Fourth tone (mà - 骂)'
        ],
        answerIndex: 0,
        explanation: '«mā» in the 1st high level tone means "mother".'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'Which tone rises smoothly from mid-pitch (3) to high pitch (5), like an inquisitive English "Really?"',
        options: [
          'Second Tone (第二声 / 阳平 - High Rising 35)',
          'First Tone (55)',
          'Fourth Tone (51)',
          'Neutral Tone'
        ],
        answerIndex: 0,
        explanation: 'The 2nd tone is a rising pitch contour (35).'
      },
      {
        prompt: 'What characterizes the Neutral Tone (轻声) in Mandarin Chinese words like «bàba» (爸爸)?',
        options: [
          'It is pronounced light, short, and unstressed with no tone mark',
          'It is always the loudest syllable',
          'It is pronounced identical to 1st tone',
          'It cannot be spoken'
        ],
        answerIndex: 0,
        explanation: 'The neutral tone is pronounced softly, shortly, and without stress.'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'Which tone mark represents the 3rd dipping tone (214) in Pinyin?',
        options: [
          'Carat / check mark: ǎ (e.g. mǎ)',
          'Macron flat line: ā',
          'Acute rising: á',
          'Grave falling: à'
        ],
        answerIndex: 0,
        explanation: 'The 3rd tone is written with a dipping mark (ˇ), as in «mǎ».'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the Pinyin spelling for "horse" (m-a, 3rd tone mark or mǎ):',
        acceptedAnswers: [
          'ma',
          'mǎ',
          'ma3'
        ],
        explanation: '«mǎ» (马) = horse.'
      }
    ]
  }
};

curr.lessons['zh-u1-l3'] = {
  id: 'zh-u1-l3',
  subject: 'mandarin',
  unit: 1,
  lessonNumber: 3,
  title: '核心音变规律：三声变调与「一」「不」的音变 (Tone Sandhi: 3rd Tone, Yī & Bù)',
  level: 'A1',
  objective: 'Master Mandarin Tone Sandhi (音变), specifically 3rd + 3rd tone combinations and the automatic tonal shifts of 「不」 (Bù) and 「一」 (Yī).',
  presentation: {
    explanation: 'When syllables are spoken together in fluent Mandarin speech, certain tones automatically adjust their pitch for ease of articulation. This is called **Tone Sandhi (变调)**.\n\n### 1. The 3rd + 3rd Tone Rule\nWhen two 3rd tones occur consecutively, the **first 3rd tone changes to a 2nd tone** (35) in pronunciation (though its Pinyin spelling remains written as 3rd tone):\n- **nǐ (你 3rd) + hǎo (好 3rd) → pronounced [ní hǎo] (你好 Hello!)**\n- **kě (可 3rd) + yǐ (以 3rd) → pronounced [kéyǐ] (可以 can / okay)**\n- **shǒu (手 3rd) + biǎo (表 3rd) → pronounced [shóubiǎo] (手表 wristwatch)**\n\n### 2. The Tone Sandhi of 「不」 (Bù - No / Not)\n- Normally **4th tone**: **bù** (e.g. 不吃 bù chī - don\'t eat, 不想 bù xiǎng - don\'t want).\n- **Rule**: When followed by another **4th tone**, 「不」 changes to **2nd tone (bú)**:\n  - **bù + shì (是 4th) → bú shì (不是 is not)**\n  - **bù + duì (对 4th) → bú duì (不对 incorrect)**\n  - **bù + qù (去 4th) → bú qù (不去 not going)**\n\n### 3. The Tone Sandhi of 「一」 (Yī - One)\n- In isolation or counting: **1st tone (yī)** (e.g. 一二三 yī, èr, sān).\n- Before a **4th tone**: changes to **2nd tone (yí)** (e.g. **yí yàng 一样** = same, **yí dìng 一定** = definitely).\n- Before a **1st, 2nd, or 3rd tone**: changes to **4th tone (yì)** (e.g. **yì tiān 一天** = one day, **yì nián 一年** = one year, **yì qǐ 一起** = together).',
    examples: [
      { target: 'nǐ hǎo (你好) -> [ní hǎo]', reading: 'nǐ hǎo', translation: 'Hello (3rd+3rd tone sandhi pronounced 2nd+3rd)' },
      { target: 'bú shì (不是)', reading: 'bú shì', translation: 'is not (不 changes to 2nd tone before 4th tone)' },
      { target: 'yí yàng (一样)', reading: 'yí yàng', translation: 'the same (一 changes to 2nd tone before 4th tone)' },
      { target: 'yì tiān (一天)', reading: 'yì tiān', translation: 'one day (一 changes to 4th tone before 1st tone)' }
    ],
    mnemonics: [
      'Two 3rd tones in a row? The first one rises up into a 2nd tone! "Bù" meets a 4th tone? It bounces up to "bú"!'
    ],
    culturalNotes: [
      'Tone sandhi happens instinctively in native Mandarin speech for rhythmic flow. In modern Pinyin publications, dictionary tone marks are often preserved while spoken output conforms to sandhi.'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'In the universal greeting «nǐ hǎo» (你好), how is the first syllable «nǐ» (3rd tone) actually pronounced in speech?',
        options: [
          'As a 2nd rising tone [ní] (due to 3rd+3rd tone sandhi)',
          'As a 1st high flat tone [nī]',
          'As a 4th falling tone [nì]',
          'As a neutral tone [ni]'
        ],
        answerIndex: 0,
        explanation: 'When two 3rd tones are adjacent, the first converts to a 2nd rising tone [ní hǎo].'
      },
      {
        prompt: 'When the negation word «不» (bù, 4th tone) is followed by a 4th tone syllable like «shì» (是), what tone does «不» change to?',
        options: [
          'Second tone (bú shì - 不是)',
          'First tone (bū shì)',
          'Third tone (bǔ shì)',
          'It stays 4th tone'
        ],
        answerIndex: 0,
        explanation: '«不» changes to 2nd tone (bú) before any 4th tone syllable.'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'How is the numeral «一» (yī) pronounced when combined with the 4th tone word «yàng» (样) in «一样» (the same)?',
        options: [
          'yí yàng (changes to 2nd tone yí)',
          'yī yàng (stays 1st tone)',
          'yì yàng (changes to 4th tone)',
          'yi yàng (neutral tone)'
        ],
        answerIndex: 0,
        explanation: '«一» changes to 2nd tone «yí» before a 4th tone.'
      },
      {
        prompt: 'Select the phrase that correctly demonstrates 3rd+3rd tone sandhi:',
        options: [
          'kěyǐ (可以 can/okay -> pronounced [kéyǐ])',
          'dà rén (adult)',
          'bàba (father)',
          'bù chī (don\'t eat)'
        ],
        answerIndex: 0,
        explanation: '«kěyǐ» consists of two 3rd tones (kě + yǐ), pronounced [kéyǐ].'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'Which rule explains why «不是» is pronounced [bú shì] rather than [bù shì]?',
        options: [
          'The tone sandhi rule of 「不」 changing to 2nd tone before 4th tone',
          'The 3rd tone sandhi rule',
          'The neutral tone rule',
          'The retroflex rule'
        ],
        answerIndex: 0,
        explanation: '«不» automatically changes to 2nd tone before 4th tone.'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the Pinyin greeting for "Hello" (n-i-h-a-o or nǐ hǎo):',
        acceptedAnswers: [
          'ni hao',
          'nihao',
          'nǐ hǎo',
          'nǐhǎo'
        ],
        explanation: '«nǐ hǎo» (你好) = Hello.'
      }
    ]
  }
};

curr.lessons['zh-u1-l4'] = {
  id: 'zh-u1-l4',
  subject: 'mandarin',
  unit: 1,
  lessonNumber: 4,
  title: '基础日常问候与敬称：你好、您好与交际礼节 (Daily Greetings & Honorifics)',
  level: 'A1',
  objective: 'Master everyday spoken greetings (Nǐ hǎo, Nín hǎo, Nǐmen hǎo, Lǎoshī hǎo), time-of-day greetings (Zǎoshang hǎo), and interpersonal honorific etiquette.',
  presentation: {
    explanation: 'Now we apply our phonetics and tones to standard Chinese greetings in everyday life and academic/professional settings.\n\n### 1. The Core Greetings\n- **你好 (nǐ hǎo)** → **Hello!** (The universal everyday greeting among peers and equals)\n- **您好 (nín hǎo)** → **Hello (respectful / honorific)** (Used for teachers, elders, superiors, and esteemed clients; 「您」 adds the heart radical 心 to 你)\n- **你们好 (nǐmen hǎo)** → **Hello everyone! / Hello you all!** (Plural)\n- **大家好 (dàjiā hǎo)** → **Hello everybody!**\n\n### 2. Role-Based Greetings\nIn Chinese culture, greeting someone by their title or profession is a mark of high respect:\n- **老师好 (lǎoshī hǎo)** → **Hello, Teacher!**\n- **王老师好 (Wáng lǎoshī hǎo)** → **Hello, Teacher Wang!**\n- **李经理好 (Lǐ jīnglǐ hǎo)** → **Hello, Manager Li!**\n\n### 3. Time-of-Day Greetings\n- **早上好 (zǎoshang hǎo)** / **早 (zǎo)** → **Good morning!**\n- **下午好 (xiàwǔ hǎo)** → **Good afternoon!**\n- **晚上好 (wǎnshang hǎo)** → **Good evening!**\n- **晚安 (wǎn\'ān)** → **Good night!**',
    examples: [
      { target: '你好！', reading: 'Nǐ hǎo!', translation: 'Hello! (standard greeting)' },
      { target: '您好，王老师！', reading: 'Nín hǎo, Wáng lǎoshī!', translation: 'Hello, Teacher Wang! (respectful honorific)' },
      { target: '大家早上好！', reading: 'Dàjiā zǎoshang hǎo!', translation: 'Good morning, everyone!' },
      { target: '晚安！', reading: "Wǎn'ān!", translation: 'Good night!' }
    ],
    mnemonics: [
      '「您」 (nín) is 「你」 (nǐ) with 「心」 (xīn - heart) below it — putting the person in your heart with respect!'
    ],
    culturalNotes: [
      'In China, addressing elders and teachers directly by their given name without title is considered impolite. Using Title + Hǎo (e.g. 老师好) establishes immediate warmth and respect.'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'Which greeting is the respectful honorific form of "Hello" used when addressing a teacher, elder, or client in China?',
        options: [
          '您好 (nín hǎo - respectful Hello)',
          '你好 (nǐ hǎo - standard Hello)',
          '晚安 (wǎn\'ān - Good night)',
          '再见 (zàijiàn - Goodbye)'
        ],
        answerIndex: 0,
        explanation: '«您好» (*nín hǎo*) uses the honorific pronoun «您» to express respect.'
      },
      {
        prompt: 'How do students respectfully greet their teacher at the start of class in Chinese?',
        options: [
          '老师好！ (Lǎoshī hǎo! - Hello Teacher!)',
          '你早！',
          '拜拜！',
          '对不起！'
        ],
        answerIndex: 0,
        explanation: '«老师好！» (*Lǎoshī hǎo!*) is the standard respectful student-to-teacher greeting.'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'Select the Chinese greeting meaning "Good morning!":',
        options: [
          '早上好 (zǎoshang hǎo - Good morning)',
          '晚上好 (wǎnshang hǎo - Good evening)',
          '下午好 (xiàwǔ hǎo - Good afternoon)',
          '晚安 (wǎn\'ān - Good night)'
        ],
        answerIndex: 0,
        explanation: '«早上好» (*zǎoshang hǎo*) means "Good morning!".'
      },
      {
        prompt: 'When addressing a group of friends or classmates together, which greeting means "Hello everyone! / Hello you all!"?',
        options: [
          '你们好 / 大家好 (nǐmen hǎo / dàjiā hǎo)',
          '您好 (nín hǎo)',
          '早 (zǎo)',
          '再见 (zàijiàn)'
        ],
        answerIndex: 0,
        explanation: '«你们好» and «大家好» are used for greeting multiple people.'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'What does the phrase «晚上好» mean in English?',
        options: [
          'Good evening',
          'Good morning',
          'Good afternoon',
          'Goodbye'
        ],
        answerIndex: 0,
        explanation: '«晚上好» (*wǎnshang hǎo*) means "Good evening".'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the Pinyin for "Good morning" (z-a-o-s-h-a-n-g-h-a-o or zǎoshang hǎo):',
        acceptedAnswers: [
          'zaoshang hao',
          'zaoshanghao',
          'zǎoshang hǎo',
          'zǎoshanghǎo'
        ],
        explanation: '«zǎoshang hǎo» (早上好) = Good morning.'
      }
    ]
  }
};

curr.lessons['zh-u1-l5'] = {
  id: 'zh-u1-l5',
  subject: 'mandarin',
  unit: 1,
  lessonNumber: 5,
  title: '致谢、道歉、礼貌应答与道别 (Gratitude, Apologies & Farewell Etiquette)',
  level: 'A1',
  objective: 'Master expressions of gratitude (Xièxie, Bú kèqi), apologies (Duìbuqǐ, Méi guānxi), requests (Qǐng), and farewells (Zàijiàn, Míngtiān jiàn).',
  presentation: {
    explanation: 'In this capstone lesson of Unit 1, you master the essential politeness formulas that navigate social interactions smoothly in Chinese culture.\n\n### 1. Expressing Gratitude (致谢) & Responding\n- **谢谢！ (xièxie!)** → **Thank you!**\n- **非常感谢！ (fēicháng gǎnxiè!)** → **Thank you very much!**\n- **多谢！ (duō xiè!)** → **Many thanks!**\n- **Responses (You\'re welcome)**:\n  - **不客气 (bú kèqi)** → **You are welcome!** (lit. "Don\'t be formal / polite")\n  - **不用谢 (bú yòng xiè)** → **No need to thank me!**\n\n### 2. Apologies (道歉) & Responding\n- **对不起 (duìbuqǐ)** → **I am sorry / Excuse me**\n- **抱歉 (bàoqiàn)** → **Sorry / My apologies (formal)**\n- **不好意思 (bù hǎoyìsi)** → **Excuse me / Sorry to bother you (gentle/casual)**\n- **Responses (No problem)**:\n  - **没关系 (méi guānxi)** → **It doesn\'t matter / That\'s fine / No problem**\n  - **没事 (méi shì)** → **It\'s nothing / No worries**\n\n### 3. Polite Requests: 请 (qǐng)\n- **请进 (qǐng jìn)** → Please come in\n- **请坐 (qǐng zuò)** → Please sit down\n- **请问 (qǐng wèn)** → May I ask / Excuse me (before asking a question)\n\n### 4. Farewells (道别)\n- **再见 (zàijiàn)** → **Goodbye** (lit. "Again see")\n- **明天见 (míngtiān jiàn)** → **See you tomorrow**\n- **一会儿见 (yíhuìr jiàn)** → **See you in a bit**\n- **慢走 (màn zǒu)** → **Take care / Walk slowly (said by host to departing guests)**',
    examples: [
      { target: '谢谢你！— 不客气！', reading: 'Xièxie nǐ! — Bú kèqi!', translation: 'Thank you! — You are welcome!' },
      { target: '对不起！— 没关系！', reading: 'Duìbuqǐ! — Méi guānxi!', translation: "I'm sorry! — It doesn't matter / That's fine!" },
      { target: '请问，洗手间在哪里？', reading: 'Qǐngwèn, xǐshǒujiān zài nǎlǐ?', translation: 'Excuse me, where is the restroom?' },
      { target: '明天见！— 再见！', reading: 'Míngtiān jiàn! — Zàijiàn!', translation: 'See you tomorrow! — Goodbye!' }
    ],
    mnemonics: [
      '再见 literally means "Again (再) See (见)"! 不客气 means "Don\'t (不) act like a Guest (客) with formal Manners (气)"!'
    ],
    culturalNotes: [
      'Saying «慢走» (*màn zǒu* - walk slowly) is a traditional Chinese host farewell wishing safety and showing reluctance to part with the guest.'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'When someone thanks you with «谢谢» (xièxie), what is the standard polite response meaning "You are welcome!"?',
        options: [
          '不客气 / 不用谢 (Bú kèqi / Bú yòng xiè - You\'re welcome)',
          '对不起 (Duìbuqǐ - I\'m sorry)',
          '再见 (Zàijiàn - Goodbye)',
          '早上好 (Zǎoshang hǎo - Good morning)'
        ],
        answerIndex: 0,
        explanation: '«不客气» (*bú kèqi*) is the universal polite response to "thank you".'
      },
      {
        prompt: 'What is the correct forgiving response when someone apologizes to you with «对不起» (duìbuqǐ)?',
        options: [
          '没关系 / 没事 (Méi guānxi / Méi shì - It doesn\'t matter / No problem)',
          '不客气 (You\'re welcome)',
          '谢谢 (Thank you)',
          '你好 (Hello)'
        ],
        answerIndex: 0,
        explanation: '«没关系» (*méi guānxi*) means "It doesn\'t matter / No problem".'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'Select the polite phrase used to preface a question ("May I ask... / Excuse me..."):',
        options: [
          '请问 (qǐngwèn - May I ask...)',
          '对不起 (duìbuqǐ - I\'m sorry)',
          '再见 (zàijiàn - Goodbye)',
          '慢走 (màn zǒu - Walk slowly)'
        ],
        answerIndex: 0,
        explanation: '«请问» (*qǐngwèn*) literally means "Please ask" and is used before asking for directions or information.'
      },
      {
        prompt: 'Which phrase means "See you tomorrow!" in Chinese?',
        options: [
          '明天见 (míngtiān jiàn - See you tomorrow)',
          '再见 (zàijiàn - Goodbye)',
          '一会儿见 (yíhuìr jiàn - See you in a bit)',
          '谢谢 (xièxie - Thank you)'
        ],
        answerIndex: 0,
        explanation: '«明天见» (*míngtiān jiàn*) means "See you tomorrow".'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'What does the Chinese farewell «再见» (*zàijiàn*) literally mean?',
        options: [
          'See you again (Again-See)',
          'Good morning',
          'Thank you',
          'Go with peace'
        ],
        answerIndex: 0,
        explanation: '«再见» is composed of 再 (again) + 见 (see).'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the Pinyin for "Thank you" (x-i-e-x-i-e or xièxie):',
        acceptedAnswers: [
          'xiexie',
          'xièxie',
          'xie xie',
          'xiè xie'
        ],
        explanation: '«xièxie» (谢谢) = Thank you.'
      }
    ]
  }
};

const output = '// Mandarin curriculum\n(function(global){\n  \'use strict\';\n  var UNITS = ' + JSON.stringify(curr.units, null, 4) + ';\n  var LESSONS = ' + JSON.stringify(curr.lessons, null, 4) + ';\n  var CURRICULUM = { id: \'mandarin\', name: \'Mandarin\', units: UNITS, lessons: LESSONS };\n  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};\n  global.FEARN_CURRICULA[\'mandarin\'] = CURRICULUM;\n  if (typeof module !== \'undefined\' && module.exports) module.exports = CURRICULUM;\n})(typeof window !== \'undefined\' ? window : global);\n';

fs.writeFileSync(filePath, output, 'utf8');
console.log('Successfully patched Mandarin curriculum Unit 1!');
