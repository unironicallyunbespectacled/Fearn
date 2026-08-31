// FEARN Curriculum Data — Turkish
(function (global) {
  'use strict';
  var UNITS = [
    {
        "id": "u1",
        "name": "Unit 1",
        "goal": "By the end of this unit, learners can greet people appropriately and introduce themselves with basic personal details. Grammar/vocabulary focus: Vowel harmony introduction, agglutination concept, self-introduction with -im suffix.",
        "level": "A1",
        "lessonIds": [
            "tr-u1-l1",
            "tr-u1-l2",
            "tr-u1-l3",
            "tr-u1-l4",
            "tr-u1-l5"
        ]
    },
    {
        "id": "u2",
        "name": "Unit 2",
        "goal": "By the end of this unit, learners can state numbers, tell time, and talk about dates and days of the week. Grammar/vocabulary focus: Numbers, time, days/months.",
        "level": "A1",
        "lessonIds": [
            "tr-u2-l1",
            "tr-u2-l2",
            "tr-u2-l3",
            "tr-u2-l4",
            "tr-u2-l5"
        ]
    },
    {
        "id": "u3",
        "name": "Unit 3",
        "goal": "By the end of this unit, learners can describe their immediate family and other people using simple sentences. Grammar/vocabulary focus: Family vocabulary, possessive suffixes.",
        "level": "A1",
        "lessonIds": [
            "tr-u3-l1",
            "tr-u3-l2",
            "tr-u3-l3",
            "tr-u3-l4",
            "tr-u3-l5"
        ]
    },
    {
        "id": "u4",
        "name": "Unit 4",
        "goal": "By the end of this unit, learners can form basic present-tense sentences describing states and actions. Grammar/vocabulary focus: Present tense (-iyor), case system introduction (nominative/accusative).",
        "level": "A1",
        "lessonIds": [
            "tr-u4-l1",
            "tr-u4-l2",
            "tr-u4-l3",
            "tr-u4-l4",
            "tr-u4-l5"
        ]
    },
    {
        "id": "u5",
        "name": "Unit 5",
        "goal": "By the end of this unit, learners can describe a typical daily routine using common action verbs. Grammar/vocabulary focus: Daily routine, locative/dative cases, SOV word order.",
        "level": "A1",
        "lessonIds": [
            "tr-u5-l1",
            "tr-u5-l2",
            "tr-u5-l3",
            "tr-u5-l4",
            "tr-u5-l5"
        ]
    },
    {
        "id": "u6",
        "name": "Unit 6",
        "goal": "By the end of this unit, learners can order food and drink and talk about likes and dislikes at a basic level. Grammar/vocabulary focus: Food vocabulary, ordering, istemek (want) construction.",
        "level": "A1",
        "lessonIds": [
            "tr-u6-l1",
            "tr-u6-l2",
            "tr-u6-l3",
            "tr-u6-l4",
            "tr-u6-l5"
        ]
    },
    {
        "id": "u7",
        "name": "Unit 7",
        "goal": "By the end of this unit, learners can narrate simple completed past events. Grammar/vocabulary focus: Past tense (-di), narration.",
        "level": "A2",
        "lessonIds": [
            "tr-u7-l1",
            "tr-u7-l2",
            "tr-u7-l3",
            "tr-u7-l4",
            "tr-u7-l5"
        ]
    },
    {
        "id": "u8",
        "name": "Unit 8",
        "goal": "By the end of this unit, learners can shop for goods, discuss prices, and compare items. Grammar/vocabulary focus: Shopping, ablative case, comparatives with daha...den.",
        "level": "A2",
        "lessonIds": [
            "tr-u8-l1",
            "tr-u8-l2",
            "tr-u8-l3",
            "tr-u8-l4",
            "tr-u8-l5"
        ]
    },
    {
        "id": "u9",
        "name": "Unit 9",
        "goal": "By the end of this unit, learners can ask for and give directions and describe how to get somewhere. Grammar/vocabulary focus: Directions, postpositions, case governance.",
        "level": "A2",
        "lessonIds": [
            "tr-u9-l1",
            "tr-u9-l2",
            "tr-u9-l3",
            "tr-u9-l4",
            "tr-u9-l5"
        ]
    },
    {
        "id": "u10",
        "name": "Unit 10",
        "goal": "By the end of this unit, learners can describe their home and daily surroundings in more detail. Grammar/vocabulary focus: Describing home, existential var/yok.",
        "level": "A2",
        "lessonIds": [
            "tr-u10-l1",
            "tr-u10-l2",
            "tr-u10-l3",
            "tr-u10-l4",
            "tr-u10-l5"
        ]
    },
    {
        "id": "u11",
        "name": "Unit 11",
        "goal": "By the end of this unit, learners can talk about health, body parts, and give simple medical descriptions. Grammar/vocabulary focus: Body vocabulary, -mesi gerekiyor obligation, ağrımak (to hurt) construction.",
        "level": "A2",
        "lessonIds": [
            "tr-u11-l1",
            "tr-u11-l2",
            "tr-u11-l3",
            "tr-u11-l4",
            "tr-u11-l5"
        ]
    },
    {
        "id": "u12",
        "name": "Unit 12",
        "goal": "By the end of this unit, learners can discuss future plans and describe the weather. Grammar/vocabulary focus: Future tense (-ecek), weather vocabulary.",
        "level": "A2",
        "lessonIds": [
            "tr-u12-l1",
            "tr-u12-l2",
            "tr-u12-l3",
            "tr-u12-l4",
            "tr-u12-l5"
        ]
    },
    {
        "id": "u13",
        "name": "Unit 13",
        "goal": "By the end of this unit, learners can talk about their job or studies and ongoing actions. Grammar/vocabulary focus: Present-continuous nuance, work/study vocabulary, bilmek vs. tanımak.",
        "level": "B1",
        "lessonIds": [
            "tr-u13-l1",
            "tr-u13-l2",
            "tr-u13-l3",
            "tr-u13-l4",
            "tr-u13-l5"
        ]
    },
    {
        "id": "u14",
        "name": "Unit 14",
        "goal": "By the end of this unit, learners can express opinions and preferences with simple justification. Grammar/vocabulary focus: Opinion expressions (bence, düşünüyorum ki), comparative structures.",
        "level": "B1",
        "lessonIds": [
            "tr-u14-l1",
            "tr-u14-l2",
            "tr-u14-l3",
            "tr-u14-l4",
            "tr-u14-l5"
        ]
    },
    {
        "id": "u15",
        "name": "Unit 15",
        "goal": "By the end of this unit, learners can plan a trip and describe past travel experiences. Grammar/vocabulary focus: Travel vocabulary, -mış evidential past, experiences.",
        "level": "B1",
        "lessonIds": [
            "tr-u15-l1",
            "tr-u15-l2",
            "tr-u15-l3",
            "tr-u15-l4",
            "tr-u15-l5"
        ]
    },
    {
        "id": "u16",
        "name": "Unit 16",
        "goal": "By the end of this unit, learners can discuss hypothetical situations and simple conditions. Grammar/vocabulary focus: Conditional -se, hypotheticals.",
        "level": "B1",
        "lessonIds": [
            "tr-u16-l1",
            "tr-u16-l2",
            "tr-u16-l3",
            "tr-u16-l4",
            "tr-u16-l5"
        ]
    },
    {
        "id": "u17",
        "name": "Unit 17",
        "goal": "By the end of this unit, learners can understand and discuss media content and report what others said. Grammar/vocabulary focus: Passive voice (-il/-in), media vocabulary, reported speech via evidential -mış.",
        "level": "B1",
        "lessonIds": [
            "tr-u17-l1",
            "tr-u17-l2",
            "tr-u17-l3",
            "tr-u17-l4",
            "tr-u17-l5"
        ]
    },
    {
        "id": "u18",
        "name": "Unit 18",
        "goal": "By the end of this unit, learners can talk about relationships and emotions in more nuanced ways. Grammar/vocabulary focus: Relationships vocabulary, imperative and optative mood.",
        "level": "B1",
        "lessonIds": [
            "tr-u18-l1",
            "tr-u18-l2",
            "tr-u18-l3",
            "tr-u18-l4",
            "tr-u18-l5"
        ]
    },
    {
        "id": "u19",
        "name": "Unit 19",
        "goal": "By the end of this unit, learners can debate abstract topics and support opinions with reasons. Grammar/vocabulary focus: Necessity/doubt constructions, debate connectors.",
        "level": "B2",
        "lessonIds": [
            "tr-u19-l1",
            "tr-u19-l2",
            "tr-u19-l3",
            "tr-u19-l4",
            "tr-u19-l5"
        ]
    },
    {
        "id": "u20",
        "name": "Unit 20",
        "goal": "By the end of this unit, learners can adjust tone and vocabulary between formal and informal contexts. Grammar/vocabulary focus: Formal siz vs. informal sen register.",
        "level": "B2",
        "lessonIds": [
            "tr-u20-l1",
            "tr-u20-l2",
            "tr-u20-l3",
            "tr-u20-l4",
            "tr-u20-l5"
        ]
    },
    {
        "id": "u21",
        "name": "Unit 21",
        "goal": "By the end of this unit, learners can report what someone else said and narrate complex event sequences. Grammar/vocabulary focus: Reported speech, indirect questions.",
        "level": "B2",
        "lessonIds": [
            "tr-u21-l1",
            "tr-u21-l2",
            "tr-u21-l3",
            "tr-u21-l4",
            "tr-u21-l5"
        ]
    },
    {
        "id": "u22",
        "name": "Unit 22",
        "goal": "By the end of this unit, learners can discuss more complex hypothetical and counterfactual situations. Grammar/vocabulary focus: Advanced conditionals, counterfactuals (-seydi).",
        "level": "B2",
        "lessonIds": [
            "tr-u22-l1",
            "tr-u22-l2",
            "tr-u22-l3",
            "tr-u22-l4",
            "tr-u22-l5"
        ]
    },
    {
        "id": "u23",
        "name": "Unit 23",
        "goal": "By the end of this unit, learners can discuss environmental and social issues with supporting detail. Grammar/vocabulary focus: Passive voice for social commentary, environment vocabulary.",
        "level": "B2",
        "lessonIds": [
            "tr-u23-l1",
            "tr-u23-l2",
            "tr-u23-l3",
            "tr-u23-l4",
            "tr-u23-l5"
        ]
    },
    {
        "id": "u24",
        "name": "Unit 24",
        "goal": "By the end of this unit, learners can use common idiomatic expressions naturally in conversation. Grammar/vocabulary focus: Idiomatic expressions.",
        "level": "B2",
        "lessonIds": [
            "tr-u24-l1",
            "tr-u24-l2",
            "tr-u24-l3",
            "tr-u24-l4",
            "tr-u24-l5"
        ]
    },
    {
        "id": "u25",
        "name": "Unit 25",
        "goal": "By the end of this unit, learners can construct nuanced arguments with supporting and opposing viewpoints. Grammar/vocabulary focus: Advanced connectors (bununla birlikte, dolayısıyla).",
        "level": "C1",
        "lessonIds": [
            "tr-u25-l1",
            "tr-u25-l2",
            "tr-u25-l3",
            "tr-u25-l4",
            "tr-u25-l5"
        ]
    },
    {
        "id": "u26",
        "name": "Unit 26",
        "goal": "By the end of this unit, learners can use professional and academic language appropriately in writing and speech. Grammar/vocabulary focus: Professional/academic register.",
        "level": "C1",
        "lessonIds": [
            "tr-u26-l1",
            "tr-u26-l2",
            "tr-u26-l3",
            "tr-u26-l4",
            "tr-u26-l5"
        ]
    },
    {
        "id": "u27",
        "name": "Unit 27",
        "goal": "By the end of this unit, learners can analyze literary and cultural texts and discuss their meaning. Grammar/vocabulary focus: Literary analysis (Orhan Pamuk and classical poetry excerpts).",
        "level": "C1",
        "lessonIds": [
            "tr-u27-l1",
            "tr-u27-l2",
            "tr-u27-l3",
            "tr-u27-l4",
            "tr-u27-l5"
        ]
    },
    {
        "id": "u28",
        "name": "Unit 28",
        "goal": "By the end of this unit, learners can use a wide range of idioms and proverbs accurately. Grammar/vocabulary focus: Advanced idioms and atasözleri.",
        "level": "C1",
        "lessonIds": [
            "tr-u28-l1",
            "tr-u28-l2",
            "tr-u28-l3",
            "tr-u28-l4",
            "tr-u28-l5"
        ]
    },
    {
        "id": "u29",
        "name": "Unit 29",
        "goal": "By the end of this unit, learners can use discourse markers to structure extended, natural-sounding speech. Grammar/vocabulary focus: Discourse markers (yani, işte, hani).",
        "level": "C1",
        "lessonIds": [
            "tr-u29-l1",
            "tr-u29-l2",
            "tr-u29-l3",
            "tr-u29-l4",
            "tr-u29-l5"
        ]
    },
    {
        "id": "u30",
        "name": "Unit 30",
        "goal": "By the end of this unit, learners can understand native-speed humor, wordplay, and slang. Grammar/vocabulary focus: Native slang, humor.",
        "level": "C2",
        "lessonIds": [
            "tr-u30-l1",
            "tr-u30-l2",
            "tr-u30-l3",
            "tr-u30-l4",
            "tr-u30-l5"
        ]
    },
    {
        "id": "u31",
        "name": "Unit 31",
        "goal": "By the end of this unit, learners can understand and use specialized legal, medical, and technical vocabulary. Grammar/vocabulary focus: Legal, medical, and technical vocabulary.",
        "level": "C2",
        "lessonIds": [
            "tr-u31-l1",
            "tr-u31-l2",
            "tr-u31-l3",
            "tr-u31-l4",
            "tr-u31-l5"
        ]
    },
    {
        "id": "u32",
        "name": "Unit 32",
        "goal": "By the end of this unit, learners can construct persuasive, rhetorically effective arguments. Grammar/vocabulary focus: Rhetorical persuasion structures.",
        "level": "C2",
        "lessonIds": [
            "tr-u32-l1",
            "tr-u32-l2",
            "tr-u32-l3",
            "tr-u32-l4",
            "tr-u32-l5"
        ]
    },
    {
        "id": "u33",
        "name": "Unit 33",
        "goal": "By the end of this unit, learners can recognize and adapt to dialectal and sociolinguistic variation. Grammar/vocabulary focus: Dialect and sociolect variation.",
        "level": "C2",
        "lessonIds": [
            "tr-u33-l1",
            "tr-u33-l2",
            "tr-u33-l3",
            "tr-u33-l4",
            "tr-u33-l5"
        ]
    },
    {
        "id": "u34",
        "name": "Unit 34",
        "goal": "By the end of this unit, learners can synthesize all prior skills to communicate with near-native fluency across contexts. Grammar/vocabulary focus: Capstone: mixed-register fluency synthesis project.",
        "level": "C2",
        "lessonIds": [
            "tr-u34-l1",
            "tr-u34-l2",
            "tr-u34-l3",
            "tr-u34-l4",
            "tr-u34-l5"
        ]
    }
];
  var LESSONS = {
  "tr-u1-l1": {
    "id": "tr-u1-l1",
    "subject": "turkish",
    "unit": 1,
    "lessonNumber": 1,
    "title": "Türk Alfabesi, Özel Harfler ve İki Yönlü Ses Uyumları (The 29-Letter Turkish Alphabet & Special Characters)",
    "level": "A1",
    "objective": "Master the 29-letter Turkish Latin alphabet, the 6 unique Turkish characters (Ç, Ğ, I/ı, İ/i, Ö, Ş, Ü), absence of Q/W/X, and 2-fold Vowel Harmony (A-E rules).",
    "presentation": {
      "explanation": "Türkçeye hoş geldiniz! Welcome to Turkish (Türkçe)! Turkish uses a strictly phonetic **29-letter Latin alphabet** created during Atatürk's reforms in 1928. In Turkish, every letter corresponds to exactly one sound—what you see is always what you pronounce!\n\n### 1. The 6 Special Turkish Letters\n- **Ç ç** [tʃ] — Like \"ch\" in \"chair\" (e.g. **çay** = tea, **çok** = very)\n- **Ğ ğ** (Yumuşak G / Soft G) — **Never appears at the beginning of a word!** It is silent and elongates the preceding vowel (e.g. **dağ** = [da:] mountain, **sağ ol** = thank you)\n- **I ı (Undotted I)** [ɯ] — Close back unrounded vowel (like the \"a\" in \"sofa\" or \"i\" in \"cousin\" — e.g. **kapı** = door, **ılık** = warm)\n- **İ i (Dotted I)** [i] — Close front vowel (like \"ee\" in \"see\" — e.g. **iyi** = good, **İstanbul**)\n- **Ö ö** [ø] — Like German \"ö\" or French \"eu\" (e.g. **göz** = eye, **ördek** = duck)\n- **Ş ş** [ʃ] — Like \"sh\" in \"shoe\" (e.g. **akşam** = evening, **şeker** = sugar)\n- **Ü ü** [y] — Like German \"ü\" or French \"u\" (e.g. **gün** = day, **güzel** = beautiful)\n\n*(Note: The letters Q, W, and X do not exist in the official Turkish alphabet!)*\n\n### 2. İki Yönlü Büyük Ünlü Uyumu (2-Fold Major Vowel Harmony: A / E)\nTurkish is an **agglutinative language** where suffixes attach to roots based on vowel harmony:\n- **Kalın Ünlüler (Back Vowels: A, I, O, U)** &rarr; take suffix with **-A** (e.g. Plural **-lar**: *araba &rarr; arabalar* / cars, *kapı &rarr; kapılar* / doors)\n- **İnce Ünlüler (Front Vowels: E, İ, Ö, Ü)** &rarr; take suffix with **-E** (e.g. Plural **-ler**: *ev &rarr; evler* / houses, *gün &rarr; günler* / days)",
      "examples": [
        {
          "target": "çay",
          "reading": "chay",
          "translation": "tea (ç [ch] + a + y)"
        },
        {
          "target": "gün",
          "reading": "gyun",
          "translation": "day (g + ü [front rounded] + n)"
        },
        {
          "target": "kapı",
          "reading": "kah-puh",
          "translation": "door (k + a + p + ı [undotted])"
        },
        {
          "target": "dağ",
          "reading": "dah",
          "translation": "mountain (d + a + ğ [lengthens a])"
        }
      ],
      "mnemonics": [
        "Dot rule: capital I has no dot (I &rarr; ı), while dotted İ keeps its dot in uppercase too (İ &rarr; i)! Yumuşak G (ğ) is the soft silent hero that stretches vowels."
      ],
      "culturalNotes": [
        "Turkish tea (çay) served in tulip-shaped glasses (ince belli bardak) is the national symbol of hospitality, consumed at any time of day from Istanbul to Anatolia."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Turkish letter is silent and functions to lengthen the preceding vowel sound (as in «dağ» / mountain)?",
          "options": [
            "Ğ ğ",
            "Ç ç",
            "Ş ş",
            "I ı"
          ],
          "answerIndex": 0,
          "explanation": "«Ğ ğ» (Yumuşak G) never makes a hard consonant sound; it lengthens the preceding vowel."
        },
        {
          "prompt": "According to 2-fold Vowel Harmony, what is the correct plural form of «ev» (house - front vowel E)?",
          "options": [
            "evler",
            "evlar",
            "evlor",
            "evlur"
          ],
          "answerIndex": 0,
          "explanation": "Front vowels (e, i, ö, ü) take the plural suffix «-ler» (*evler*)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What sound does the undotted Turkish vowel «I ı» make in words like «kapı» (door)?",
          "options": [
            "Close back unrounded vowel [ɯ]",
            "Like \"ee\" in see",
            "Like \"oo\" in moon",
            "Silent"
          ],
          "answerIndex": 0,
          "explanation": "Undotted «ı» represents the back vowel [ɯ]."
        },
        {
          "prompt": "Which of the following letters is NOT part of the official 29-letter Turkish alphabet?",
          "options": [
            "W",
            "Ç",
            "Ğ",
            "Ş"
          ],
          "answerIndex": 0,
          "explanation": "The letters Q, W, and X do not exist in the official Turkish alphabet."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "What does the Turkish word «çay» mean in English?",
          "options": [
            "tea",
            "coffee",
            "water",
            "door"
          ],
          "answerIndex": 0,
          "explanation": "«çay» means \"tea\"."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the Turkish word for \"tea\" (c-a-y with cedilla):",
          "acceptedAnswers": [
            "çay",
            "cay"
          ],
          "explanation": "«çay» = tea."
        }
      ]
    }
  },
  "tr-u1-l2": {
    "id": "tr-u1-l2",
    "unit": "tr-u1",
    "level": "A1",
    "objective": "Ask Nasılsın?/Nasılsınız?, answer İyiyim, and master the 4-way vowel harmony phonetic engine (-ım/-im/-um/-üm) and silent 'ğ' in değil.",
    "prerequisites": [
      "tr-u1-l1"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "tr-u1-l1"
      ]
    },
    "presentation": {
      "explanation": "Nasılsın? (how are you, informal) breaks apart into *nasıl* (how) + *-sın* (you-are, informal suffix) — already agglutination in action. The formal version stacks on an extra politeness suffix: *Nasılsınız?* = *nasıl* + *-sınız*.\n\nAnswer with **İyiyim** (I'm good) = *iyi* (good) + *-yim* (I-am suffix) — and here's 4-way vowel harmony doing real work:\n\n### 🔤 The 4-Way Vowel Harmony Engine (Dörtlü Ünlü Uyumu):\nSuffixes containing high vowels (*ı, i, u, ü*) must match the last vowel of the stem:\n1. If last vowel is **a / ı** → suffix uses **ı** (e.g. *nasıl* [naˈsɯɫ] → *nasılsın* [naˈsɯɫsɯn]).\n2. If last vowel is **e / i** → suffix uses **i** (e.g. *iyi* [iˈji] → *iyiyim* [iˈji.jim]).\n3. If last vowel is **o / u** → suffix uses **u** (e.g. *yorgun* [joɾˈɡun] → *yorgunum* [joɾɡuˈnum] 'I am tired').\n4. If last vowel is **ö / ü** → suffix uses **ü** (e.g. *üzgün* [yzˈɟyn] → *üzgünüm* [yzɟyˈnym] 'I am sorry/sad').\n\n### 🗣️ Silent 'ğ' in *değil*:\nIn *Fena değilim* ('I'm not bad'), notice the word **değil** ('not'). Remember that **ğ is completely silent** — *değil* is pronounced **[deːˈjil]** or **[diːl]**, never with a hard 'g'!",
      "examples": [
        {
          "target": "Ayşe: Merhaba! Nasılsın?",
          "reading": "[meɾhaˈba! naˈsɯɫsɯn?]",
          "translation": "Ayşe: Hi! How are you? (nasıl has back vowels a/ı → takes dotless -sın [sɯn])"
        },
        {
          "target": "Mehmet: İyiyim, teşekkürler. Sen nasılsın?",
          "reading": "[iˈji.jim, teʃeccyɾˈleɾ. sen naˈsɯɫsɯn?]",
          "translation": "Mehmet: I'm good, thanks. How are you? (iyi has front vowel i → takes dotted -yim [jim])"
        },
        {
          "target": "Nasılsınız?",
          "reading": "[naˈsɯɫsɯnɯz?]",
          "translation": "How are you? (formal/plural — stack -ız with dotless ı)"
        },
        {
          "target": "Fena değilim.",
          "reading": "[feˈna deːjiˈlim]",
          "translation": "I'm not bad. (değil features silent ğ lengthening the vowel: [deːjil])"
        }
      ],
      "mnemonics": [
        "4-Way Harmony Compass: a/ı → ı; e/i → i; o/u → u; ö/ü → ü. The suffix mimics the tongue position and lip rounding of the root vowel perfectly!",
        "İyiyim is two Lego pieces: iyi (good) + yim (I-am). Buffer 'y' prevents two vowels from colliding (*iyi-im → iyiyim*).",
        "-sın (informal you-are) vs. -sınız (formal you-are): politeness is just stacking an extra suffix block."
      ],
      "culturalNotes": [
        "Teşekkürler (thanks) vs Teşekkür ederim (thank you very much): Teşekkürler is universally heard on the street for quick everyday thanks, while teşekkür ederim adds a touch of personal warmth and formality."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Nasılsın? breaks down into which two pieces?",
          "options": [
            "nasıl (how) + sın",
            "na (what) + sılsın",
            "It cannot be broken down",
            "nasıls (unit) + ın"
          ],
          "answerIndex": 0,
          "explanation": "This is the exact agglutination breakdown given in the explanation."
        },
        {
          "prompt": "İyiyim breaks down into which two pieces?",
          "options": [
            "iyi (good) + yim",
            "iyi (good) + im",
            "It's a single unbreakable root",
            "iy (very) + iyim"
          ],
          "answerIndex": 0,
          "explanation": "iyi + yim, matching vowel harmony with iyi's front vowel."
        },
        {
          "prompt": "Why does İyiyim use -yim rather than -yım?",
          "options": [
            "Because iyi's last vowel (i) is a front vowel, and the suffix harmonizes to match it",
            "It's a random spelling exception",
            "Both spellings are always interchangeable",
            "-yım is only used in questions"
          ],
          "answerIndex": 0,
          "explanation": "This is vowel harmony in action, as explained."
        },
        {
          "prompt": "Nasılsınız? is used when speaking:",
          "options": [
            "Formally, to a stranger or elder",
            "Only to children",
            "Only in writing",
            "Only when angry"
          ],
          "answerIndex": 0,
          "explanation": "The -sınız ending marks the formal register."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'I'm good, thanks. How are you?' (informal)",
          "options": [
            "İyiyim, teşekkürler. Sen nasılsınız?",
            "İyisin, teşekkürler. Ben nasılım?",
            "Nasılsın, teşekkürler iyiyim?",
            "İyiyim, teşekkürler. Sen nasılsın?"
          ],
          "answerIndex": 3,
          "explanation": "İyiyim (I'm good) + Sen nasılsın? (informal 'how are you') matches register consistently."
        },
        {
          "prompt": "What's the relationship between -sın and -sınız?",
          "options": [
            "-sınız is -sın plus an extra politeness suffix, making it the formal version",
            "-sın is only used in questions, -sınız only in statements",
            "-sınız is the plural of a noun",
            "They're unrelated words"
          ],
          "answerIndex": 0,
          "explanation": "This is the exact 'extra suffix = extra politeness' pattern from the lesson."
        },
        {
          "prompt": "If a Turkish word ends in a back vowel (a, ı, o, u) instead of a front vowel, what would you expect the 'I am' suffix to look like, based on vowel harmony?",
          "options": [
            "Still exactly -yim, no matter what",
            "The suffix would disappear entirely",
            "It would become a completely different suffix with a different meaning",
            "-ım, -um, or -üm depending on the exact vowel — never -yim"
          ],
          "answerIndex": 3,
          "explanation": "Vowel harmony predicts a back-vowel-matching form, not the front-vowel -yim."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Nasılsın? breaks down into:",
          "options": [
            "na + sılsın",
            "nasıls + ın",
            "It's unbreakable",
            "nasıl (how) + sın"
          ],
          "answerIndex": 3,
          "explanation": "Agglutination breakdown.",
          "type": "multiple-choice"
        },
        {
          "prompt": "İyiyim breaks down into:",
          "options": [
            "It's unbreakable",
            "iy + iyim",
            "iyi (good) + yim",
            "iyi (good) + im"
          ],
          "answerIndex": 2,
          "explanation": "iyi + yim.",
          "type": "multiple-choice"
        },
        {
          "prompt": "İyiyim uses -yim (not -yım) because:",
          "options": [
            "iyi has no vowels",
            "iyi's last vowel is a front vowel, matched by vowel harmony",
            "It's random",
            "-yım is grammatically incorrect everywhere"
          ],
          "answerIndex": 1,
          "explanation": "Vowel harmony rule.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Nasılsınız? is the:",
          "options": [
            "Formal version of 'how are you'",
            "Negative version",
            "Informal version",
            "Past tense version"
          ],
          "answerIndex": 0,
          "explanation": "-sınız marks formality.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Fena değilim means:",
          "options": [
            "I'm very good",
            "I don't know",
            "I'm very bad",
            "I'm not bad"
          ],
          "answerIndex": 3,
          "explanation": "değil = not, previewed in this lesson.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What's the relationship between -sın and -sınız?",
          "options": [
            "They're unrelated",
            "They mean opposite things",
            "-sınız is -sın plus an extra politeness suffix",
            "-sın is formal, -sınız is informal"
          ],
          "answerIndex": 2,
          "explanation": "Politeness-via-extra-suffix pattern.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1, Lesson 2: Foundational & Structural Mastery (Ayşe: Merhaba! Nasılsın?)"
  },
  "tr-u1-l3": {
    "id": "tr-u1-l3",
    "unit": "tr-u1",
    "level": "A1",
    "objective": "Introduce yourself with Adım (my name is) and Ben ...'yim (I am ...), including the apostrophe convention before suffixes on proper nouns.",
    "prerequisites": [
      "tr-u1-l1",
      "tr-u1-l2"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "tr-u1-l1",
        "tr-u1-l2"
      ]
    },
    "presentation": {
      "explanation": "Ad means \"name.\" Attach the harmonized \"my\" suffix and you get Adım (ad + ım, \"my name\" — ım rather than im here, because ad's vowel a is a back vowel). Adım Ayşe means \"My name [is] Ayşe\" with no verb \"to be\" needed at all — two things placed side by side already state \"X is Y,\" a zero-copula pattern shared with several other languages. You can also introduce yourself by attaching the personal \"I am\" suffix directly onto your own name: Ben Ayşe'yim (\"I am Ayşe\"). Notice the apostrophe — Turkish always inserts one between a proper noun and any suffix attached to it, purely as a spelling convention that keeps the name visually intact; say it aloud and the apostrophe vanishes completely. To ask someone else's name: Adın ne? (literally \"your name what?\" — again, no verb needed). One more small but memorable fact: Turkish has a single third-person pronoun, o, covering \"he,\" \"she,\" AND \"it\" — no grammatical gender distinction at all.",
      "examples": [
        {
          "target": "Ayşe: Adım Ayşe. Adın ne?",
          "reading": "Ayşe: Adım Ayşe. Adın ne?",
          "translation": "Ayşe: My name is Ayşe. What's your name?"
        },
        {
          "target": "Mehmet: Ben Mehmet'im. Memnun oldum.",
          "reading": "Mehmet: Ben Mehmet'im. Memnun oldum.",
          "translation": "Mehmet: I'm Mehmet. Nice to meet you. (literally \"I became pleased\")"
        },
        {
          "target": "Ben Ayşe'yim, o Mehmet.",
          "reading": "Ben Ayşe'yim, o Mehmet.",
          "translation": "I am Ayşe, he/she is Mehmet. (o = he/she/it — no gender distinction)"
        },
        {
          "target": "Adın ne?",
          "reading": "Adın ne?",
          "translation": "What's your name?"
        }
      ],
      "mnemonics": [
        "Adım looks like English 'my step' to the eye, but here it's ad (name) + ım (my) — the topic of the sentence (names) tells you which adım is meant.",
        "The apostrophe before a suffix on a name (Ayşe'yim, Mehmet'im) is purely cosmetic — it keeps the proper noun visually separate from the grammar glued onto it. Say it aloud and the apostrophe disappears; it's a writing-only signal."
      ],
      "culturalNotes": [
        "o covering 'he,' 'she,' and 'it' with zero gender marking means Turkish speakers learning English often need real practice choosing 'he' vs. 'she' — it isn't a grammatical distinction their own language forces them to track."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Adım Ayşe. means:",
          "options": [
            "Your name is Ayşe.",
            "Her name is Ayşe.",
            "I am from Ayşe.",
            "My name is Ayşe."
          ],
          "answerIndex": 3,
          "explanation": "Adım = ad (name) + ım (my)."
        },
        {
          "prompt": "Why does adım use -ım rather than -im?",
          "options": [
            "It's a random exception",
            "-im is only used in questions",
            "adım always means 'my step,' never 'my name'",
            "ad's vowel a is a back vowel, and vowel harmony matches the suffix to it"
          ],
          "answerIndex": 3,
          "explanation": "Vowel harmony rule from Lesson 1."
        },
        {
          "prompt": "What is the apostrophe in Ayşe'yim for?",
          "options": [
            "A required pause when speaking",
            "A question mark substitute",
            "It marks the plural",
            "A spelling convention marking a suffix attached to a proper noun — silent when spoken"
          ],
          "answerIndex": 3,
          "explanation": "Turkish inserts apostrophes before suffixes on proper nouns as a writing-only convention."
        },
        {
          "prompt": "What does o mean in Turkish?",
          "options": [
            "Only 'he'",
            "Only 'she'",
            "Only 'it,' never a person",
            "He, she, or it — Turkish has no grammatical gender distinction here"
          ],
          "answerIndex": 3,
          "explanation": "o is a single, gender-neutral third-person pronoun."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'I'm Mehmet. Nice to meet you.'",
          "options": [
            "Ben Mehmet'im. Memnun oldum.",
            "Ben Mehmetim. Memnun oldum.",
            "Adım Mehmet'im. Memnun.",
            "Mehmet ben'im. Oldum memnun."
          ],
          "answerIndex": 0,
          "explanation": "The apostrophe is required before the suffix on the proper noun Mehmet."
        },
        {
          "prompt": "Why is 'Adım Ayşe' a complete, correct sentence with no verb 'to be'?",
          "options": [
            "It's actually incomplete and grammatically wrong",
            "Turkish allows two things placed side by side to state 'X is Y' with no copula verb required",
            "adım secretly contains a hidden verb",
            "It only works as a question"
          ],
          "answerIndex": 1,
          "explanation": "This is the zero-copula pattern explained in the lesson."
        },
        {
          "prompt": "Why might a Turkish speaker learning English need real practice choosing between 'he' and 'she'?",
          "options": [
            "Because Turkish has three genders instead of two",
            "Because Turkish's single pronoun o covers 'he,' 'she,' and 'it' with no gender distinction to draw on",
            "Because Turkish never uses pronouns",
            "There's no real difficulty here"
          ],
          "answerIndex": 1,
          "explanation": "This is the cultural/linguistic note from the lesson."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Adım Ayşe. means:",
          "options": [
            "I am from Ayşe.",
            "Your name is Ayşe.",
            "My name is Ayşe.",
            "Her name is Ayşe."
          ],
          "answerIndex": 2,
          "explanation": "ad + ım = my name.",
          "type": "multiple-choice"
        },
        {
          "prompt": "adım uses -ım (not -im) because:",
          "options": [
            "It's a random exception",
            "ad's vowel is a back vowel, matched by harmony",
            "There is no rule",
            "-im only appears in questions"
          ],
          "answerIndex": 1,
          "explanation": "Vowel harmony.",
          "type": "multiple-choice"
        },
        {
          "prompt": "The apostrophe in Ayşe'yim marks:",
          "options": [
            "A suffix attached to a proper noun — silent in speech",
            "A required spoken pause",
            "A question",
            "A plural ending"
          ],
          "answerIndex": 0,
          "explanation": "Spelling convention, silent aloud.",
          "type": "multiple-choice"
        },
        {
          "prompt": "o means:",
          "options": [
            "'We'",
            "Only 'he'",
            "Only 'she'",
            "He, she, or it"
          ],
          "answerIndex": 3,
          "explanation": "Single gender-neutral third-person pronoun.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Adın ne? means:",
          "options": [
            "Where are you from?",
            "How are you?",
            "What's your name?",
            "Goodbye"
          ],
          "answerIndex": 2,
          "explanation": "Literally 'your name what.'",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why does Adım Ayşe need no verb 'to be'?",
          "options": [
            "It's ungrammatical without one",
            "Turkish allows nominal 'X is Y' sentences with no copula verb",
            "ım secretly means 'is'",
            "It only works with names"
          ],
          "answerIndex": 1,
          "explanation": "Zero-copula pattern.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1, Lesson 3: Foundational & Structural Mastery (Ayşe: Adım Ayşe. Adın ne?)"
  },
  "tr-u1-l4": {
    "id": "tr-u1-l4",
    "unit": "tr-u1",
    "level": "A1",
    "objective": "State where you're from using Nerelisin?/Nerelisiniz? and the -li/-lı origin suffix stacked with the 'I am' suffix.",
    "prerequisites": [
      "tr-u1-l1",
      "tr-u1-l2",
      "tr-u1-l3"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "tr-u1-l3"
      ]
    },
    "presentation": {
      "explanation": "Nereli (nere + li, \"of where\") + sin (you-are) builds Nerelisin? — \"Where are you from,\" literally \"where-related are-you\" (informal). The -li/-lı suffix itself (\"from/of,\" attaching to place names) follows vowel harmony just like everything else: Ankara (back vowels) → Ankaralı; İstanbul (ends in the back vowel u) → İstanbullu, where the doubled l is a spelling/pronunciation quirk after that particular syllable shape, not a new rule to worry about yet. Stack the \"I am\" suffix on top and one word does the job of a whole English sentence: Ankaralıyım = Ankara + lı + yım = \"I am from Ankara.\" For ethnicity/nationality as a plain noun, Türk (a Turkish person) takes the \"I am\" suffix directly: Türk + üm → Türküm (\"I am Turkish\") — üm because Türk's last vowel ü is a front rounded vowel, its own harmony family.",
      "examples": [
        {
          "target": "Mehmet: Nerelisin?",
          "reading": "Mehmet: Nerelisin?",
          "translation": "Mehmet: Where are you from? (informal)"
        },
        {
          "target": "Ayşe: Ankaralıyım. Sen nerelisin?",
          "reading": "Ayşe: Ankaralıyım. Sen nerelisin?",
          "translation": "Ayşe: I'm from Ankara. Where are you from?"
        },
        {
          "target": "Mehmet: İstanbulluyum. Türküm.",
          "reading": "Mehmet: İstanbulluyum. Türküm.",
          "translation": "Mehmet: I'm from Istanbul. I'm Turkish."
        },
        {
          "target": "Nerelisiniz?",
          "reading": "Nerelisiniz?",
          "translation": "Where are you from? (formal)"
        }
      ],
      "mnemonics": [
        "-li/-lı is Turkish's 'from/of' suffix, and it rides the same vowel-harmony rule as everything else: Ankara (a) → -lı, İstanbul (u) → -lu (doubled to -llu after that syllable). Same job, different vowel clothing.",
        "Ankaralıyım stacks three Lego pieces: Ankara (place) + lı (from) + yım (I am). Read agglutinated words in meaning-order even though the letters run left to right: 'I am' + 'from' + 'Ankara.'"
      ],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Nerelisin? breaks down into:",
          "options": [
            "nere (where) + li (of) + sin",
            "nereli + s + in",
            "It's a single unbreakable root",
            "ner + elisin"
          ],
          "answerIndex": 0,
          "explanation": "Three stacked pieces, agglutination in action."
        },
        {
          "prompt": "Ankaralıyım breaks down into:",
          "options": [
            "Ankara + lı (from) + yım",
            "An + karalıyım",
            "It's unbreakable",
            "Ankara + lı + im"
          ],
          "answerIndex": 0,
          "explanation": "Place + origin suffix + I-am suffix, all agglutinated."
        },
        {
          "prompt": "Why does the 'from' suffix appear as -lı on Ankara but -lu on İstanbul?",
          "options": [
            "Vowel harmony matches the suffix to each place name's last vowel",
            "-lı only works with short place names",
            "It's a random spelling choice",
            "İstanbul is a special exception with no rule"
          ],
          "answerIndex": 0,
          "explanation": "Both forms follow the same vowel-harmony rule, just matching different vowels."
        },
        {
          "prompt": "Türküm means:",
          "options": [
            "I am Turkish",
            "He is Turkish",
            "I am from Turkey",
            "You are Turkish"
          ],
          "answerIndex": 0,
          "explanation": "Türk (Turkish person) + üm (I am) = I am Turkish."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'I'm from Istanbul. I'm Turkish.'",
          "options": [
            "İstanbulluyum. Türküm.",
            "İstanbullıyım. Türkim.",
            "Ben İstanbul'um. Türk.",
            "İstanbul benim. Türk oldum."
          ],
          "answerIndex": 0,
          "explanation": "İstanbul + lu (from, back-vowel harmony) + yum (I am), and Türk + üm."
        },
        {
          "prompt": "Why does İstanbul take -lu (doubled to -llu) rather than -lı?",
          "options": [
            "Vowel harmony matches the suffix to İstanbul's own last vowel, unlike Ankara's -lı",
            "İstanbul never takes any origin suffix",
            "-lu is reserved for formal speech only",
            "It's completely unrelated to vowel harmony"
          ],
          "answerIndex": 0,
          "explanation": "Different place names trigger different harmony-matched suffix vowels."
        },
        {
          "prompt": "What three pieces of meaning does the single word Ankaralıyım pack together?",
          "options": [
            "The place (Ankara), the origin marker (from), and the speaker",
            "Only the place name, nothing else",
            "Two unrelated separate words glued by accident",
            "A greeting, a name, and a question"
          ],
          "answerIndex": 0,
          "explanation": "This is the agglutination breakdown explained in the lesson."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Nerelisin? means:",
          "options": [
            "How are you?",
            "Where are you from?",
            "What's your name?",
            "Goodbye"
          ],
          "answerIndex": 1,
          "explanation": "nere + li + sin.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ankaralıyım means:",
          "options": [
            "I am from Ankara",
            "You are from Ankara",
            "I am Ankara",
            "This is Ankara"
          ],
          "answerIndex": 0,
          "explanation": "Ankara + lı (from) + yım (I am).",
          "type": "multiple-choice"
        },
        {
          "prompt": "İstanbul takes which origin suffix, and why?",
          "options": [
            "-lük, a completely different suffix",
            "-lı, exactly like Ankara, no exceptions",
            "No suffix is possible for İstanbul",
            "-lu (doubled to -llu), matched by vowel harmony to İstanbul's own last vowel"
          ],
          "answerIndex": 3,
          "explanation": "Vowel harmony rule.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türküm means:",
          "options": [
            "I am from a city called Türk",
            "You are Turkish",
            "I am Turkish",
            "This is Turkey"
          ],
          "answerIndex": 2,
          "explanation": "Türk + üm = I am Turkish.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Nerelisiniz? is used:",
          "options": [
            "Only to children",
            "Formally, to a stranger or elder",
            "Only in writing",
            "Only in the past tense"
          ],
          "answerIndex": 1,
          "explanation": "-siniz marks the formal register, same pattern as Lesson 2's -sınız.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What does the -li/-lı suffix mean when attached to a place name?",
          "options": [
            "From/of that place",
            "Not from that place",
            "The plural of that place",
            "In that place, temporarily"
          ],
          "answerIndex": 0,
          "explanation": "-li/-lı marks origin, 'from/of.'",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1, Lesson 4: Foundational & Structural Mastery (Mehmet: Nerelisin?)"
  },
  "tr-u1-l5": {
    "id": "tr-u1-l5",
    "unit": "tr-u1",
    "level": "A1",
    "objective": "Produce a full connected self-introduction combining greetings, Nasılsın?, name exchange, and origin/nationality, stacking suffixes correctly with vowel harmony throughout.",
    "prerequisites": [
      "tr-u1-l1",
      "tr-u1-l2",
      "tr-u1-l3",
      "tr-u1-l4"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "tr-u1-l1",
        "tr-u1-l2",
        "tr-u1-l3",
        "tr-u1-l4"
      ]
    },
    "presentation": {
      "explanation": "This capstone lets Ayşe and Mehmet meet in full, combining every piece of Unit 1: greetings from Lesson 1, Nasılsın?/İyiyim from Lesson 2, Adım/Ben...'yim from Lesson 3, and Nerelisin?/origin-plus-nationality from Lesson 4 — all built on the same two engines introduced in Lesson 1, vowel harmony and agglutination. Full dialogue: Ayşe: Merhaba! Nasılsın? Mehmet: İyiyim, teşekkürler. Sen nasılsın? Ayşe: İyiyim. Adım Ayşe. Adın ne? Mehmet: Ben Mehmet'im. Memnun oldum. Nerelisin? Ayşe: Ankaralıyım. Türküm. Sen nerelisin? Mehmet: İstanbulluyum. Ben de Türküm.",
      "examples": [
        {
          "target": "Ayşe: Merhaba! Nasılsın? Mehmet: İyiyim, teşekkürler. Sen nasılsın?",
          "reading": "Ayşe: Merhaba! Nasılsın? Mehmet: İyiyim, teşekkürler. Sen nasılsın?",
          "translation": "Ayşe: Hi! How are you? Mehmet: I'm good, thanks. How are you?"
        },
        {
          "target": "Ayşe: İyiyim. Adım Ayşe. Adın ne?",
          "reading": "Ayşe: İyiyim. Adım Ayşe. Adın ne?",
          "translation": "Ayşe: I'm good. My name is Ayşe. What's your name?"
        },
        {
          "target": "Mehmet: Ben Mehmet'im. Memnun oldum. Nerelisin?",
          "reading": "Mehmet: Ben Mehmet'im. Memnun oldum. Nerelisin?",
          "translation": "Mehmet: I'm Mehmet. Nice to meet you. Where are you from?"
        },
        {
          "target": "Ayşe: Ankaralıyım. Türküm. Mehmet: İstanbulluyum. Ben de Türküm.",
          "reading": "Ayşe: Ankaralıyım. Türküm. Mehmet: İstanbulluyum. Ben de Türküm.",
          "translation": "Ayşe: I'm from Ankara. I'm Turkish. Mehmet: I'm from Istanbul. I'm Turkish too. (de = also/too)"
        }
      ],
      "mnemonics": [
        "Four Unit 1 tools, one conversation: greetings (Lesson 1), Nasılsın?/İyiyim (Lesson 2), Adım/Ben...'yim (Lesson 3), Nerelisin?/place+lı+yım (Lesson 4) — every single personal ending harmonizing its vowel to the word it's glued onto."
      ],
      "culturalNotes": [
        "Ben de Türküm ('I'm Turkish too') shows de/da (also/too) as a separate little word rather than a suffix — not every piece of Turkish grammar agglutinates; small connector words like de/da stay independent, so it's worth noticing which patterns fuse and which don't."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Merhaba! Nasılsın? Mehmet: ___",
          "options": [
            "İyiyim, teşekkürler. Sen nasılsın?",
            "Adım Mehmet.",
            "Nerelisin?",
            "Türküm."
          ],
          "answerIndex": 0,
          "explanation": "The natural reply to Nasılsın?, from Lesson 2."
        },
        {
          "prompt": "Adın ne? Mehmet: Ben ___.",
          "options": [
            "Mehmet'im",
            "Mehmetsin",
            "Mehmetsiniz",
            "Mehmetler"
          ],
          "answerIndex": 0,
          "explanation": "Ben Mehmet'im, from Lesson 3, with the apostrophe before the suffix."
        },
        {
          "prompt": "Nerelisin? Ayşe: ___.",
          "options": [
            "Ankarasın",
            "Ankaralıyım",
            "Ankara'da",
            "Ankaralar"
          ],
          "answerIndex": 1,
          "explanation": "Ankaralıyım, from Lesson 4."
        },
        {
          "prompt": "What four Unit 1 elements does this capstone combine?",
          "options": [
            "Greetings, Nasılsın?/İyiyim, name exchange, and origin/nationality — all built on vowel harmony and agglutination",
            "Only nationality vocabulary",
            "Only greetings",
            "Only questions"
          ],
          "answerIndex": 0,
          "explanation": "This is the explicit combination stated in the lesson explanation."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'I'm from Istanbul. I'm Turkish too.'",
          "options": [
            "İstanbulluyum. Ben de Türküm.",
            "Ben İstanbul. Türk de ben.",
            "İstanbul'um. De Türküm.",
            "İstanbullıyım. Ben Türküm de."
          ],
          "answerIndex": 0,
          "explanation": "İstanbulluyum (from Lesson 4) + Ben de Türküm, with de as a separate word meaning 'also.'"
        },
        {
          "prompt": "Why does de in Ben de Türküm stay as a separate word instead of being glued on as a suffix?",
          "options": [
            "Not every piece of Turkish grammar agglutinates — small connector words like de/da remain independent words",
            "de is not real Turkish",
            "Agglutination is optional and rarely used",
            "It's actually a typo and should be attached"
          ],
          "answerIndex": 0,
          "explanation": "This is the cultural/grammar note explained in the lesson."
        },
        {
          "prompt": "Based on the dialogue, what do Ayşe and Mehmet have in common regarding origin and nationality?",
          "options": [
            "They're from the same city but different countries",
            "They never discuss where they're from",
            "They're from different Turkish cities (Ankara and Istanbul) but share the same nationality, Turkish",
            "Neither of them is Turkish"
          ],
          "answerIndex": 2,
          "explanation": "Ayşe is from Ankara, Mehmet from Istanbul, both Türk."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Merhaba! Nasılsın? Mehmet: ___",
          "options": [
            "İyiyim, teşekkürler. Sen nasılsın?",
            "Nerelisin?",
            "Türküm.",
            "Adım Mehmet."
          ],
          "answerIndex": 0,
          "explanation": "Natural reply to Nasılsın?",
          "type": "multiple-choice"
        },
        {
          "prompt": "Adın ne? Mehmet: Ben ___.",
          "options": [
            "Mehmetsin",
            "Mehmetsiniz",
            "Mehmetler",
            "Mehmet'im"
          ],
          "answerIndex": 3,
          "explanation": "Ben Mehmet'im, with apostrophe before the suffix.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Nerelisin? Ayşe: ___.",
          "options": [
            "Ankarasın",
            "Ankara'da",
            "Ankaralıyım",
            "Ankaralar"
          ],
          "answerIndex": 2,
          "explanation": "Ankaralıyım stacks place + origin + I-am.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Mehmet says: İstanbulluyum. ___. (I'm Turkish too)",
          "options": [
            "Ben Türk de",
            "Ben de Türküm",
            "Türk ben de",
            "De Türküm ben"
          ],
          "answerIndex": 1,
          "explanation": "de is a separate word meaning 'also/too,' placed before the verb-suffixed word.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Memnun oldum means:",
          "options": [
            "Nice to meet you",
            "How are you",
            "I am from here",
            "Goodbye"
          ],
          "answerIndex": 0,
          "explanation": "A set phrase for 'nice to meet you.'",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the overall skill this capstone dialogue is testing?",
          "options": [
            "Isolated vocabulary recall only",
            "Only reading numbers",
            "Only asking questions",
            "Producing a full connected self-introduction combining greetings, well-wishing, name exchange, and origin/nationality with correct vowel harmony and agglutination"
          ],
          "answerIndex": 3,
          "explanation": "This is the explicit goal stated in the lesson explanation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1, Lesson 5: Foundational & Structural Mastery (Ayşe: Merhaba! Nasılsın? Mehme)"
  },
  "tr-u2-l1": {
    "id": "tr-u2-l1",
    "unit": "Numbers, Time & Dates",
    "level": "A1",
    "objective": "Can count from 0 to 20 in Turkish, apply the regular tens+unit teen structure (on bir, on iki), understand the complete absence of grammatical gender in Turkish numerals, and apply the singular noun rule after numbers.",
    "prerequisites": [
      "tr-u1-l5"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "tr-u1-l1",
        "tr-u1-l2"
      ]
    },
    "presentation": {
      "explanation": "Counting in Turkish is exceptionally regular, logical, and has zero grammatical gender.\n\nDigits 0–10:\n0 = sıfır\n1 = bir\n2 = iki\n3 = üç (front rounded vowel)\n4 = dört (front rounded vowel)\n5 = beş\n6 = altı (undotted 'ı')\n7 = yedi\n8 = sekiz\n9 = dokuz\n10 = on\n\nNumbers 11–20 (Regular 'On' compounding):\nUnlike English (-teen) or Romance languages, Turkish forms 11–19 by simply stating **on + digit** with no irregular sound changes:\n11 = on bir\n12 = on iki\n13 = on üç\n14 = on dört\n15 = on beş\n16 = on altı\n17 = on yedi\n18 = on sekiz\n19 = on dokuz\n20 = yirmi\n\n**CRITICAL RULE: Singular Noun After Numbers:**\nIn Turkish, when a noun is preceded by a number, it **NEVER takes the plural suffix (-ler/-lar)**:\n- *iki çay* (two teas — NOT 'iki çaylar'❌)\n- *üç öğrenci* (three students — NOT 'üç öğrenciler'❌)\n- *beş dakika* (five minutes).",
      "examples": [
        "İki çay ve bir su, lütfen. (Two teas and one water, please — notice 'çay' is singular).",
        "On beş dakikam var. (I have fifteen minutes).",
        "Kaç yaşındasın? — On sekiz yaşındayım. (How old are you? — I am eighteen years old).",
        "Sınıfta on iki öğrenci var. (There are twelve students in the classroom)."
      ],
      "mnemonics": [
        "The Singular Rule: In Turkish, the number already tells you it's plural, so the noun stays singular (iki çay, NOT iki çaylar).",
        "Teens are 100% predictable: ON + digit (on bir = 11, on beş = 15)."
      ],
      "culturalNotes": [
        "In Turkey, ordering tea in a çayhane or café is as simple as saying 'İki çay, lütfen' (Two teas, please). Turkish tea is always served in traditional tulip-shaped glasses (*ince belli bardak*)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you correctly say 'Two coffees, please' in Turkish?",
          "options": [
            "İki kahveler, lütfen.",
            "İki kahveye, lütfen.",
            "İki kahvede, lütfen.",
            "İki kahve, lütfen."
          ],
          "answerIndex": 3,
          "explanation": "Nouns after numbers remain strictly singular in Turkish: 'İki kahve, lütfen'."
        },
        {
          "prompt": "How do you say 14 in Turkish?",
          "options": [
            "dörton",
            "on dörd",
            "on dört",
            "dört on"
          ],
          "answerIndex": 2,
          "explanation": "14 is 'on dört' (10 + 4)."
        },
        {
          "prompt": "Is there grammatical gender in Turkish numerals (like masculine/feminine forms of 1 and 2)?",
          "options": [
            "Only in formal writing",
            "No, Turkish has zero grammatical gender anywhere in the language",
            "Only for living beings",
            "Yes, bir and iki change gender"
          ],
          "answerIndex": 1,
          "explanation": "Turkish has no grammatical gender whatsoever."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'I have three sisters/brothers (siblings).' (kardeş = sibling)",
          "options": [
            "Üç kardeşlerim var.",
            "Üç kardeş varım.",
            "Üç kardeşe var.",
            "Üç kardeşim var."
          ],
          "answerIndex": 3,
          "explanation": "'Üç kardeşim var' (kardeş stays singular before possessive suffix -im)."
        },
        {
          "prompt": "Which of these phrases violates Turkish grammar?",
          "options": [
            "Bir su",
            "On iki öğrenci",
            "Beş kitaplar",
            "Beş kitap"
          ],
          "answerIndex": 2,
          "explanation": "'Beş kitaplar' is incorrect; it must be 'Beş kitap'."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "İki ___ ve bir ___ lütfen. (çay / simit)",
          "options": [
            "çaylar / simitler",
            "çayı / simiti",
            "çayda / simitte",
            "çay / simit"
          ],
          "answerIndex": 3,
          "explanation": "Nouns after numbers remain in their base singular form: 'İki çay ve bir simit'.",
          "type": "multiple-choice"
        },
        {
          "prompt": "17 sayısı Türkçe nasıl yazılır?",
          "options": [
            "on sekiz",
            "on altı",
            "on yedi",
            "yedi on"
          ],
          "answerIndex": 2,
          "explanation": "17 is 'on yedi'.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Hesaplayın: yedi (7) + altı (6) = ?",
          "options": [
            "on dört",
            "on üç",
            "on beş",
            "on iki"
          ],
          "answerIndex": 1,
          "explanation": "7 + 6 = 13 (on üç).",
          "type": "multiple-choice"
        },
        {
          "prompt": "20 sayısı Türkçede:",
          "options": [
            "yirmi",
            "on iki",
            "on on",
            "otuz"
          ],
          "answerIndex": 0,
          "explanation": "20 is 'yirmi'.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Aşağıdakilerden hangisi Türkçe dilbilgisine UYGUNDUR?",
          "options": [
            "Dörtler arkadaş",
            "Dört arkadaşlar",
            "Dört arkadaştan",
            "Dört arkadaş"
          ],
          "answerIndex": 3,
          "explanation": "'Dört arkadaş' is correct (singular noun after number).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 2, Lesson 1: Foundational & Structural Mastery"
  },
  "tr-u2-l2": {
    "id": "tr-u2-l2",
    "unit": "Numbers, Time & Dates",
    "level": "A1",
    "objective": "Can count from 21 to 100+ in Turkish, combine tens and units seamlessly, and ask/state prices in Turkish Lira and Kuruş using 'Ne kadar?' and 'Kaç lira?'.",
    "prerequisites": [
      "tr-u2-l1"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "tr-u2-l1"
      ]
    },
    "presentation": {
      "explanation": "From 20 to 100+, Turkish numbers are completely transparent: **Ten + Unit** (with no connecting words needed!).\n\nThe Tens:\n20 = yirmi\n30 = otuz\n40 = kırk\n50 = elli\n60 = altmış\n70 = yetmiş\n80 = seksen\n90 = doksan\n100 = yüz\n1,000 = bin\n\nCompound Numbers:\n21 = yirmi bir\n35 = otuz beş\n48 = kırk sekiz\n72 = yetmiş iki\n99 = doksan dokuz\n105 = yüz beş\n\nAsking and Stating Prices:\n- *Ne kadar?* (How much?)\n- *Kaç lira?* (How many lira? / How much?)\n- *Bu ne kadar?* (How much is this?)\n- *Elli lira.* (50 lira.)\n- *Yetmiş beş lira elli kuruş.* (75 lira 50 kuruş — colloquially *yetmiş beş buçuk lira*).",
      "examples": [
        "Bu kitap ne kadar? — Kırk beş lira. (How much is this book? — 45 lira).",
        "Hesap kaç lira tuttu? — Yüz yirmi lira. (How much did the bill come to? — 120 lira).",
        "Altmış iki kişi geldi. (Sixty-two people came).",
        "Bir simit ve bir ayran yetmiş beş lira. (One simit and one ayran is 75 lira)."
      ],
      "mnemonics": [
        "Zero connectors needed: 35 is simply 'otuz beş' (thirty five).",
        "'Ne kadar?' = How much? ('Ne' = what, 'kadar' = amount/extent)."
      ],
      "culturalNotes": [
        "Turkey's currency is the Turkish Lira (Türk Lirası, sign ₺). 1 lira = 100 kuruş (kr).",
        "Contactless card payment ('temassız') is ubiquitous in Turkish shops; cashiers ask 'Temassız var mı?' or 'Kartla mı, nakit mi?' (By card or cash?)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you say 87 in Turkish?",
          "options": [
            "seksen yedi",
            "yetmiş sekiz",
            "seksen ve yedi",
            "doksan yedi"
          ],
          "answerIndex": 0,
          "explanation": "80 (seksen) + 7 (yedi) = 'seksen yedi' (no connector word)."
        },
        {
          "prompt": "How do you say 100 in Turkish?",
          "options": [
            "yüz",
            "bin",
            "yirmi",
            "on on"
          ],
          "answerIndex": 0,
          "explanation": "100 is 'yüz'."
        },
        {
          "prompt": "How do you ask 'How much is this?' in Turkish?",
          "options": [
            "Bu ne kadar?",
            "Bu kim?",
            "Saat kaç?",
            "Bu nerede?"
          ],
          "answerIndex": 0,
          "explanation": "'Bu ne kadar?' or 'Kaç lira?' asks for the price."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'The meal costs 65 lira.'",
          "options": [
            "Yemek yetmiş beş lira.",
            "Yemek elli altı lira.",
            "Yemek altı beş lira.",
            "Yemek altmış beş lira."
          ],
          "answerIndex": 3,
          "explanation": "65 is 'altmış beş' (altmış beş lira)."
        },
        {
          "prompt": "Select the correct combination for 42:",
          "options": [
            "elli iki",
            "otuz iki",
            "kırk ve iki",
            "kırk iki"
          ],
          "answerIndex": 3,
          "explanation": "40 (kırk) + 2 (iki) = 'kırk iki'."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "54 sayısı nasıl okunur?",
          "options": [
            "otuz dört",
            "altmış dört",
            "elli dört",
            "kırk beş"
          ],
          "answerIndex": 2,
          "explanation": "54 is 'elli dört'.",
          "type": "multiple-choice"
        },
        {
          "prompt": "'Bu kahve kaç lira?' — '___ lira.' (35)",
          "options": [
            "kırk beş",
            "otuz beş",
            "elli üç",
            "yirmi beş"
          ],
          "answerIndex": 1,
          "explanation": "35 is 'otuz beş'.",
          "type": "multiple-choice"
        },
        {
          "prompt": "100 sayısı Türkçede:",
          "options": [
            "yüz",
            "onluk",
            "bin",
            "milyon"
          ],
          "answerIndex": 0,
          "explanation": "100 is 'yüz'.",
          "type": "multiple-choice"
        },
        {
          "prompt": "'Kartla mı, nakit mi?' sorusu ne anlama gelir?",
          "options": [
            "Hot or cold?",
            "Large or small?",
            "Here or to go?",
            "By card or cash?"
          ],
          "answerIndex": 3,
          "explanation": "Standard payment question in Turkish commerce.",
          "type": "multiple-choice"
        },
        {
          "prompt": "78 sayısı Türkçe yazılışı:",
          "options": [
            "seksen yedi",
            "doksan sekiz",
            "yetmiş sekiz",
            "altmış sekiz"
          ],
          "answerIndex": 2,
          "explanation": "78 is 'yetmiş sekiz'.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 2, Lesson 2: Foundational & Structural Mastery"
  },
  "tr-u2-l3": {
    "id": "tr-u2-l3",
    "unit": "Numbers, Time & Dates",
    "level": "A1",
    "objective": "Can ask and state the time in Turkish using 'Saat kaç?' (What time is it?) vs. 'Saat kaçta?' (At what time?), differentiate between 'buçuk' (half-past) and 'yarım' (half), and use time-of-day markers (sabah, öğle, akşam, gece).",
    "prerequisites": [
      "tr-u2-l2"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "tr-u2-l1",
        "tr-u2-l2"
      ]
    },
    "presentation": {
      "explanation": "Telling time in Turkish requires distinguishing between 'What time is it?' (Saat kaç?) and 'At what time?' (Saat kaçta?):\n\nAsking the Time:\n- *Saat kaç?* (What time is it?)\n- *Saat kaçta?* (At what time? — with locative suffix -ta/-te)\n\nAnswering Exact & Half Hours:\n- 1:00 -> *Saat bir.* (It is 1:00.)\n- 2:00 -> *Saat iki.* (It is 2:00.)\n- 2:30 -> *Saat iki buçuk.* (It is 2:30 — 'buçuk' is used for half past with numbers!)\n- 12:30 -> *Saat on iki buçuk.* OR *Saat yarım.* (12:30 can colloquially be called 'yarım' = half past twelve / half).\n\n**The 'Buçuk' vs. 'Yarım' Distinction:**\n- **buçuk**: used AFTER a number to mean 'and a half' (*iki buçuk* = 2:30, *üç buçuk lira* = 3.5 lira).\n- **yarım**: used as a standalone noun/adjective for 'half' (*yarım saat* = half an hour, *yarım ekmek* = half a loaf of bread).\n\nTime of Day Qualifiers:\n- *sabah* (morning: 6 AM – 11 AM) -> *sabah saat sekiz* (8:00 AM)\n- *öğlen* (noon / midday: 12 PM – 2 PM) -> *öğlen saat bir* (1:00 PM)\n- *öğleden sonra* (afternoon: 2 PM – 6 PM) -> *öğleden sonra dört* (4:00 PM)\n- *akşam* (evening: 6 PM – 10 PM) -> *akşam saat sekiz* (8:00 PM)\n- *gece* (night: 10 PM – 5 AM) -> *gece saat on iki* (12:00 AM midnight).",
      "examples": [
        "Saat kaç? — Saat dört buçuk. (What time is it? — It is 4:30).",
        "Film saat kaçta başlıyor? — Akşam saat sekizde. (What time does the movie start? — At 8:00 in the evening — notice locative -de).",
        "Yarım saat sonra buluşalım. (Let's meet in half an hour — notice 'yarım saat').",
        "Uçak gece saat ikide kalkıyor. (The plane departs at 2:00 at night)."
      ],
      "mnemonics": [
        "Buçuk follows a number: 'iki buçuk' (2:30). Yarım stands before a noun: 'yarım saat' (half an hour).",
        "'Saat kaç?' (What time is it?) vs 'Saat kaçta?' (At what time? — locative -ta/-te)."
      ],
      "culturalNotes": [
        "Turkey does not observe daylight saving time and remains on UTC+3 year-round.",
        "In formal announcements (flights, trains, TV listings), 24-hour time is used: 'ondört otuz' (14:30)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you say 3:30 in Turkish?",
          "options": [
            "Saat üç yarım.",
            "Saat buçuk üç.",
            "Saat üç buçukta.",
            "Saat üç buçuk."
          ],
          "answerIndex": 3,
          "explanation": "Half past after a number uses 'buçuk': 'Saat üç buçuk'."
        },
        {
          "prompt": "How do you say 'half an hour' (duration)?",
          "options": [
            "buçuk saat",
            "bir saat yarım",
            "saat buçuk",
            "yarım saat"
          ],
          "answerIndex": 3,
          "explanation": "Half as a standalone quantity before a noun uses 'yarım': 'yarım saat'."
        },
        {
          "prompt": "What is the difference between 'Saat kaç?' and 'Saat kaçta?'?",
          "options": [
            "'Saat kaçta?' is only used in the morning",
            "They are exact synonyms",
            "'Saat kaç?' is for hours, 'Saat kaçta?' is for minutes",
            "'Saat kaç?' asks current time; 'Saat kaçta?' asks at what time an event happens"
          ],
          "answerIndex": 3,
          "explanation": "'Saat kaçta?' carries the locative suffix (-ta) meaning 'at what time'."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'The meeting is at 10:00 AM.'",
          "options": [
            "Toplantı sabah saat onda.",
            "Toplantı sabah saat on.",
            "Toplantı akşam saat onda.",
            "Toplantı gece saat onda."
          ],
          "answerIndex": 0,
          "explanation": "sabah saat onda (at 10 in the morning — 'on' + locative 'da')."
        },
        {
          "prompt": "Which time word corresponds to evening (6 PM – 10 PM)?",
          "options": [
            "akşam",
            "sabah",
            "öğlen",
            "gece"
          ],
          "answerIndex": 0,
          "explanation": "'akşam' means evening."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Saat kaç? (2:30)",
          "options": [
            "Saat ikide buçuk.",
            "Saat iki buçuk.",
            "Saat iki yarım.",
            "Saat yarım iki."
          ],
          "answerIndex": 1,
          "explanation": "2:30 is 'Saat iki buçuk'.",
          "type": "multiple-choice"
        },
        {
          "prompt": "'Film saat kaçta başlıyor?' sorusuna cevap:",
          "options": [
            "Saat sekizde.",
            "Saat sekiz.",
            "Saat sekizi.",
            "Sekiz saat."
          ],
          "answerIndex": 0,
          "explanation": "Asking with 'kaçta' requires the locative answer: 'Saat sekizde' (at 8:00).",
          "type": "multiple-choice"
        },
        {
          "prompt": "'Yarım ekmek' ne demektir?",
          "options": [
            "Fresh bread",
            "Two loaves of bread",
            "Sliced bread",
            "Half a loaf of bread"
          ],
          "answerIndex": 3,
          "explanation": "'yarım ekmek' means half a loaf of bread.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Saat 20:00 (akşam 8) nasıl ifade edilir?",
          "options": [
            "gece saat sekiz",
            "sabah saat sekiz",
            "akşam saat sekiz",
            "öğlen saat sekiz"
          ],
          "answerIndex": 2,
          "explanation": "8:00 PM is 'akşam saat sekiz'.",
          "type": "multiple-choice"
        },
        {
          "prompt": "'Saat kaç?' sorusu neyi öğrenmek için sorulur?",
          "options": [
            "Fiyatı",
            "Şu anki saati",
            "Tarihi",
            "Kişinin adını"
          ],
          "answerIndex": 1,
          "explanation": "Asks for the current time.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 2, Lesson 3: Foundational & Structural Mastery"
  },
  "tr-u2-l4": {
    "id": "tr-u2-l4",
    "unit": "Numbers, Time & Dates",
    "level": "A1",
    "objective": "Can state all days of the week and months of the year in Turkish, explain the Persian and Arabic origins of weekday names, and use the locative case for dates and days (Pazartesi günü, Mayıs'ta, 15 Temmuz'da).",
    "prerequisites": [
      "tr-u2-l3"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "tr-u2-l2",
        "tr-u2-l3"
      ]
    },
    "presentation": {
      "explanation": "Days of the week in Turkish reflect a blend of native Turkic words and historical Persian/Arabic loans:\n\nDays of the Week:\n- *Pazartesi* (Monday — literally 'Pazar ertesi' = after Sunday)\n- *Salı* (Tuesday — from Arabic third day, Thalatha)\n- *Çarşamba* (Wednesday — from Persian 'chahar-shamba' = 4th day)\n- *Perşembe* (Thursday — from Persian 'panj-shamba' = 5th day)\n- *Cuma* (Friday — from Arabic gathering day)\n- *Cumartesi* (Saturday — literally 'Cuma ertesi' = after Friday)\n- *Pazar* (Sunday — literally market/bazaar day)\n- *hafta sonu* (weekend) / *hafta içi* (weekdays)\n\nMonths of the Year:\nOcak (Jan), Şubat (Feb), Mart (Mar), Nisan (Apr), Mayıs (May), Haziran (Jun), Temmuz (Jul), Ağustos (Aug), Eylül (Sep), Ekim (Oct), Kasım (Nov), Aralık (Dec).\n\n**Dates and Prepositions (Locative Case -de/-da / -te/-ta):**\n- To say 'on Monday': **Pazartesi** OR **Pazartesi günü** (on Monday day).\n- With months: **Mayıs'ta** (in May — apostrophe used after proper noun months before case suffixes!).\n- Full Date Format: **15 Ağustos 2026** (on beş ağustos iki bin yirmi altı).\n\nRelative Time Words:\n- *dün* (yesterday)\n- *bugün* (today)\n- *yarın* (tomorrow)\n- *bu hafta* (this week) / *gelecek hafta* (next week).",
      "examples": [
        "Pazartesi ve Perşembe günleri Türkçe dersimiz var. (On Mondays and Thursdays we have Turkish class).",
        "Hafta sonu ne yapıyorsun? (What are you doing on the weekend?).",
        "Doğum günüm yirmi üç Temmuz'da. (My birthday is on July 23rd — notice apostrophe before locative 'da').",
        "Bugün Cuma, yarın Cumartesi! (Today is Friday, tomorrow is Saturday!)."
      ],
      "mnemonics": [
        "Pazartesi = Pazar-ertesi (after Sunday). Cumartesi = Cuma-ertesi (after Friday).",
        "Apostrophe rule: Proper nouns like months take an apostrophe before case suffixes: 'Mayıs'ta', 'Ekim'de'."
      ],
      "culturalNotes": [
        "October 29th (*29 Ekim — Cumhuriyet Bayramı*) is Republic Day, celebrating the founding of the Republic of Turkey in 1923 by Mustafa Kemal Atatürk.",
        "In Turkey, the working week runs from Monday to Friday, with Saturday and Sunday as the official weekend."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What day of the week comes after Friday (Cuma)?",
          "options": [
            "Cumartesi",
            "Pazartesi",
            "Perşembe",
            "Pazar"
          ],
          "answerIndex": 0,
          "explanation": "The day after Friday is Saturday: 'Cumartesi' (Cuma-ertesi)."
        },
        {
          "prompt": "How do you say 'in May' with correct locative case and apostrophe in Turkish?",
          "options": [
            "Mayıs'ta",
            "Mayısta",
            "Mayıs içi",
            "Mayıs'de"
          ],
          "answerIndex": 0,
          "explanation": "Mayıs ends with back vowel and voiceless consonant 's', taking voiceless back locative: 'Mayıs'ta'."
        },
        {
          "prompt": "What does 'hafta sonu' mean?",
          "options": [
            "Weekend",
            "Last week",
            "Weekday",
            "Next week"
          ],
          "answerIndex": 0,
          "explanation": "'hafta' (week) + 'sonu' (its end) = weekend."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Tomorrow is Sunday, we don't work.'",
          "options": [
            "Yarın Pazar, çalışmıyoruz.",
            "Bugün Pazar, çalışmıyoruz.",
            "Yarın Pazartesi, çalışmıyoruz.",
            "Dün Pazar, çalışmıyoruz."
          ],
          "answerIndex": 0,
          "explanation": "'Yarın' = tomorrow, 'Pazar' = Sunday."
        },
        {
          "prompt": "Select the correct sequence of days from Tuesday to Thursday:",
          "options": [
            "Salı, Çarşamba, Perşembe",
            "Pazartesi, Salı, Çarşamba",
            "Perşembe, Cuma, Cumartesi",
            "Çarşamba, Perşembe, Cuma"
          ],
          "answerIndex": 0,
          "explanation": "Tuesday (Salı), Wednesday (Çarşamba), Thursday (Perşembe)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Bugün Perşembe. Yarın hangi gündür?",
          "options": [
            "Cuma",
            "Cumartesi",
            "Çarşamba",
            "Salı"
          ],
          "answerIndex": 0,
          "explanation": "The day after Thursday is Friday (Cuma).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Pazar gününden sonraki gün hangisidir?",
          "options": [
            "Cuma",
            "Salı",
            "Cumartesi",
            "Pazartesi"
          ],
          "answerIndex": 3,
          "explanation": "The day after Sunday (Pazar) is Monday (Pazartesi).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Boşluğu doldurun: 'Tatil ___ başlıyor.' (Temmuz)",
          "options": [
            "Temmuz'te",
            "Temmuz'de",
            "Temmuz'da",
            "Temmuz içi"
          ],
          "answerIndex": 2,
          "explanation": "Temmuz takes the locative suffix: 'Temmuz'da'.",
          "type": "multiple-choice"
        },
        {
          "prompt": "'Hafta sonu' ne demektir?",
          "options": [
            "Weekday",
            "Weekend",
            "Month",
            "Year"
          ],
          "answerIndex": 1,
          "explanation": "Hafta sonu is the weekend.",
          "type": "multiple-choice"
        },
        {
          "prompt": "29 Ekim Türkiye'de hangi bayram olarak kutlanır?",
          "options": [
            "Cumhuriyet Bayramı",
            "Gençlik Bayramı",
            "Zafer Bayramı",
            "Yılbaşı"
          ],
          "answerIndex": 0,
          "explanation": "October 29th is Republic Day (Cumhuriyet Bayramı).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 2, Lesson 4: Foundational & Structural Mastery"
  },
  "tr-u2-l5": {
    "id": "tr-u2-l5",
    "unit": "Numbers, Time & Dates",
    "level": "A1",
    "objective": "Can participate in a multi-turn Turkish dialogue scheduling a meetup, confirming dates, times, café prices, and phone numbers in a natural conversational register.",
    "prerequisites": [
      "tr-u2-l4"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "tr-u2-l1",
        "tr-u2-l2",
        "tr-u2-l3",
        "tr-u2-l4"
      ]
    },
    "presentation": {
      "explanation": "This capstone lesson brings together all knowledge from Units 1 and 2: greetings, numbers 0–100, price expressions (lira), telling time (saat kaçta/buçuk), days of the week (Cuma/Cumartesi), and phone number dictation.\n\nScenario: Can (Turkish) and Deniz (foreign exchange student in Istanbul) arrange to meet for Turkish coffee in Kadıköy on the Asian side:\n\n- Can: *Selam Deniz! Nasılsın? Bu Cuma akşamı müsait misin?*\n- Deniz: *Selam Can! İyiyim, teşekkürler. Evet, Cuma akşamı müsaitim! Saat kaçta buluşuyoruz?*\n- Can: *Kadıköy'de saat yedi buçukta buluşalım. Orada bir Türk kahvesi yaklaşık kırk beş lira.*\n- Deniz: *Harika! Buluşma yerini netleştirmek için bana WhatsApp numaranı verir misin?*\n- Can: *Tabii ki! Numaram: sıfır-beş-yüz-otuz-iki, kırk beş, altmış yedi. Kahveler benden!*\n- Deniz: *Anlaştık! Cuma günü saat yedi buçukta görüşürüz!*\n- Can: *Tamamdır! Görüşmek üzere!*",
      "examples": [
        "Bu Cuma akşamı müsait misin? (Are you available / free this Friday evening?).",
        "Bir Türk kahvesi kırk beş lira. (A Turkish coffee is 45 lira).",
        "Anlaştık! (Agreed! / It's a deal! — standard Turkish confirmation phrase).",
        "Saat yedi buçukta buluşalım. (Let's meet at 7:30 — 'buluşalım' = let's meet)."
      ],
      "mnemonics": [
        "'Anlaştık!' (We agreed / Deal!) and 'Tamamdır!' (All good / Settled!) are the standard Turkish plan-confirmation words.",
        "Remember the formula: Day (Cuma günü) + Time (saat yedi buçukta) + Price (45 lira) + Confirmation (Anlaştık!)."
      ],
      "culturalNotes": [
        "In Turkey, 'Kahveler benden' (The coffees are on me / my treat) is a hallmark of Turkish hospitality.",
        "Turkish mobile numbers begin with 05 (e.g. 0532, 0544) and are dictated as a 3-digit operator code followed by 2-digit pairs."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How does Can dictate his phone number (0532-45-67) naturally in Turkish?",
          "options": [
            "sıfır-beş-yüz-otuz-iki, kırk beş, altmış yedi",
            "sıfır beş üç iki dört beş altı yedi",
            "beş yüz otuz iki, dört yüz elli altı",
            "sıfır elli üç iki kırk beş"
          ],
          "answerIndex": 0,
          "explanation": "Standard phone dictation groups the 3-digit prefix and 2-digit pairs: sıfır-beş-yüz-otuz-iki, kırk beş, altmış yedi."
        },
        {
          "prompt": "What does 'Anlaştık!' mean when making plans?",
          "options": [
            "Agreed! / It's a deal! / We have an agreement!",
            "I disagree",
            "Maybe next week",
            "I will be late"
          ],
          "answerIndex": 0,
          "explanation": "'Anlaştık!' confirms mutual agreement."
        },
        {
          "prompt": "How do you say: 'The coffee is on Friday at 7:30 PM and costs 45 lira'?",
          "options": [
            "Kahve Cuma akşamı saat yedi buçukta ve kırk beş lira.",
            "Kahve Cumartesi sabah saat yedi ve kırk beş lira.",
            "Kahve Cuma saat yedide buçuk ve elli dört lira.",
            "Kahve Pazar saat yedi buçukta ve kırk beş lira."
          ],
          "answerIndex": 0,
          "explanation": "Cuma akşamı (Friday evening) + saat yedi buçukta (at 7:30) + kırk beş lira (45 lira)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Are you free on Tuesday at 4:30 PM?'",
          "options": [
            "Salı günü saat dört buçukta müsait misin?",
            "Salı günü saat dörtte yarım müsait misin?",
            "Çarşamba günü saat dört buçukta müsait misin?",
            "Pazartesi günü saat dörtte müsait misin?"
          ],
          "answerIndex": 0,
          "explanation": "Salı günü (Tuesday) + saat dört buçukta (at 4:30) + müsait misin (are you free?)."
        },
        {
          "prompt": "What does the generous Turkish expression 'Kahveler benden' mean?",
          "options": [
            "The coffees are on me / My treat!",
            "Make coffee for me",
            "Where is the coffee?",
            "I don't like coffee"
          ],
          "answerIndex": 0,
          "explanation": "'Kahveler benden' means I will pay for the coffees."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Boşluğu doldurun: 'Bu ___ akşamı müsait misin?' (Friday)",
          "options": [
            "Cumartesi",
            "Perşembe",
            "Pazar",
            "Cuma"
          ],
          "answerIndex": 3,
          "explanation": "Friday is 'Cuma'.",
          "type": "multiple-choice"
        },
        {
          "prompt": "'Bir Türk kahvesi 45 lira.' Cümlesinde 45 nasıl okunur?",
          "options": [
            "elli dört",
            "otuz beş",
            "kırk beş",
            "altmış beş"
          ],
          "answerIndex": 2,
          "explanation": "45 is 'kırk beş'.",
          "type": "multiple-choice"
        },
        {
          "prompt": "'Cuma günü saat yedi buçukta görüşürüz!' — Doğal onay cevabı:",
          "options": [
            "Hayır, gelmiyorum.",
            "Anlaştık! Görüşmek üzere!",
            "Bilmiyorum.",
            "Özür dilerim."
          ],
          "answerIndex": 1,
          "explanation": "'Anlaştık! Görüşmek üzere!' is the natural confirmation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "0532 45 67 numarası Türkçe nasıl okunur?",
          "options": [
            "sıfır beş yüz otuz iki, kırk beş, altmış yedi",
            "beş yüz otuz iki kırk beş altmış yedi",
            "sıfır elli üç iki kırk beş",
            "sıfır beş üç iki dört beş altı yedi"
          ],
          "answerIndex": 0,
          "explanation": "Standard phone number grouping.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Bu entegrasyon dersinin temel amacı nedir?",
          "options": [
            "Sadece alfabeyi tekrar etmek",
            "Sadece 1'den 10'a kadar saymak",
            "Sadece yemek siparişi vermek",
            "Selamlaşma, günler, saatler, sayılar ve fiyatları birleştirerek randevu planlayabilmek"
          ],
          "answerIndex": 3,
          "explanation": "Capstone synthesizes greetings, days, times, numbers, prices, and conversational scheduling.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 2, Lesson 5: Foundational & Structural Mastery"
  },
  "tr-u3-l1": {
    "id": "tr-u3-l1",
    "unit": "Family & People",
    "level": "A1",
    "objective": "Identify immediate family members in Turkish (baba, anne, ebeveynler, erkek kardeş, kız kardeş, kardeşler, abi/ağabey, abla, oğul, kız, çocuk/çocuklar) and recognize sibling hierarchy terms (abi, abla).",
    "prerequisites": [
      "tr-u2-l5"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "tr-u1-l1",
        "tr-u2-l1"
      ]
    },
    "presentation": {
      "explanation": "In Turkish, family vocabulary is completely gender-neutral in grammar (no grammatical gender!), but culture provides **distinct hierarchical titles for older siblings**.\n\n1. **Immediate Family Members (Çekirdek Aile):**\n- **baba** [BAH-bah] — Father / Dad\n- **anne** [AHN-neh] — Mother / Mom\n- **ebeveynler** [eh-beh-VAYN-ler] / **anne ve baba** — Parents\n- **kardeş** [kahr-DESH] — Sibling (younger sibling)\n- **erkek kardeş** [er-KEK kahr-DESH] — Younger brother\n- **kız kardeş** [KUZ kahr-DESH] — Younger sister\n- **kardeşler** — Siblings\n- **ağabey** [ah-BEY] / informal: **abi** [ah-BEE] — Older brother (mandatory respectful title!)\n- **abla** [AHB-lah] — Older sister (mandatory respectful title!)\n- **oğul** [oh-OOL] — Son (Plural: *oğullar* / with possessive: *oğlum* — vowel drop!)\n- **kız** [KUZ] — Daughter / Girl (Plural: *kızlar*)\n- **çocuk** [cho-JOOK] — Child (Plural: **çocuklar** [cho-jook-LAHR] — Children).\n\n2. **The Sibling Hierarchy Culture (Abi / Abla):**\n- In Turkish culture, younger siblings almost **never call older brothers or sisters by their bare first names**. Instead, they append **Abi** or **Abla** (e.g. *Mehmet Abi*, *Zeynep Abla*), showing deference and affection.\n\n3. **Root Vowel Drop (Ünlü Düşmesi):**\n- When adding a vowel-starting suffix to two-syllable body or family words like **oğul** (son), the second root vowel drops: *oğul + um* -> **oğlum** [oh-LOOM] ('my son' — NOT oğulum❌!).",
      "examples": [
        "Bu benim babam ve bu benim annem. Onlar benim ailem.",
        "Kardeşin var mı? — Evet, bir abim ve bir kız kardeşim var.",
        "Mehmet Abi üniversitede okuyor.",
        "Bizim iki çocuğumuz var: bir oğlumuz ve bir kızımız."
      ],
      "mnemonics": [
        "Abi = Older Brother (A-Big brother). Abla = Older Sister.",
        "Kardeş comes from 'karındaş' (sharing the same womb/belly 'karın')."
      ],
      "culturalNotes": [
        "In Turkish society, calling close friends or helpful strangers in markets 'Abi' (brother) or 'Abla' (sister) is a ubiquitous sign of warmth, respect, and communal kinship."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What respectful title must a Turkish speaker use when addressing their older brother?",
          "options": [
            "Abla",
            "Kardeş",
            "Dede",
            "Abi / Ağabey [ah-BEE]"
          ],
          "answerIndex": 3,
          "explanation": "'Abi' (or formal ağabey) is the respectful term for an older brother."
        },
        {
          "prompt": "What respectful title is used for an older sister?",
          "options": [
            "Kız",
            "Teyze",
            "Abla [AHB-lah]",
            "Anne"
          ],
          "answerIndex": 2,
          "explanation": "'Abla' is the respectful term for an older sister."
        },
        {
          "prompt": "What happens to 'oğul' (son) when adding the 1st person possessive suffix '-um' (my)?",
          "options": [
            "It becomes 'oğullarım'",
            "The internal 'u' drops: 'oğlum' [oh-LOOM]",
            "It stays 'oğul'",
            "It becomes 'oğulum'"
          ],
          "answerIndex": 1,
          "explanation": "Famous Turkish vowel drop (ünlü düşmesi): oğul + um = oğlum."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'I have two children: a son and a daughter.'",
          "options": [
            "İki çocuk var: bir oğul ve bir kız.",
            "Ben iki çocuk.",
            "İki çocuğum yok.",
            "İki çocuğum var: bir oğlum ve bir kızım."
          ],
          "answerIndex": 3,
          "explanation": "İki çocuğum var: bir oğlum ve bir kızım."
        },
        {
          "prompt": "What is the Turkish word for 'parents'?",
          "options": [
            "dedeler",
            "çocuklar",
            "ebeveynler",
            "kardeşler"
          ],
          "answerIndex": 2,
          "explanation": "ebeveynler = parents."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Türkçede 'büyük erkek kardeş'e ne denir?",
          "options": [
            "Abla",
            "Kardeş",
            "Abi",
            "Amca"
          ],
          "answerIndex": 2,
          "explanation": "Abi / Ağabey = older brother.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçede 'büyük kız kardeş'e ne denir?",
          "options": [
            "Teyze",
            "Abla",
            "Kardeş",
            "Abi"
          ],
          "answerIndex": 1,
          "explanation": "Abla = older sister.",
          "type": "multiple-choice"
        },
        {
          "prompt": "'Kardeş' kelimesinin etimolojik kökeni nedir?",
          "options": [
            "Aynı karından (karındaş) doğanlar anlamından gelir",
            "Arapçadan geçmiştir",
            "Arkadaş kelimesinden türemiştir",
            "Farsçadan geçmiştir"
          ],
          "answerIndex": 0,
          "explanation": "karındaş (sharing the same womb).",
          "type": "multiple-choice"
        },
        {
          "prompt": "'Çocuklar parkta oynuyor' cümlesinde 'çocuklar' ne demektir?",
          "options": [
            "The brothers",
            "The parents",
            "The sisters",
            "The children"
          ],
          "answerIndex": 3,
          "explanation": "çocuklar = the children.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Neden sokakta veya pazarda esnafa 'Mehmet Abi' veya 'Ayşe Abla' denir?",
          "options": [
            "Resmi bir zorunluluk olduğu için",
            "Sadece şaka amaçlı",
            "Türk kültüründe sıcaklık, samimiyet ve saygı göstermek için",
            "Akraba oldukları için"
          ],
          "answerIndex": 2,
          "explanation": "Cultural warmth and familial respect in daily interactions.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 1: Foundational & Structural Mastery"
  },
  "tr-u3-l2": {
    "id": "tr-u3-l2",
    "unit": "Family & People",
    "level": "A1",
    "objective": "Master Turkish agglutinative possessive suffixes across 4-Way Vowel Harmony (-m/-im/-ım/-üm/-um, -n/-in/-ın/-ün/-un, -si/-sı/-sü/-su or -i/-ı/-ü/-u, -miz/-mız/-müz/-muz, -niz/-nız/-nüz/-nuz, -leri/-ları) and combine them with optional possessive pronouns (benim, senin, onun, bizim, sizin, onların).",
    "prerequisites": [
      "tr-u3-l1"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "tr-u3-l1",
        "tr-u1-l2"
      ]
    },
    "presentation": {
      "explanation": "In Turkish, possession is expressed by **Agglutinative Suffixes attached to the noun** governed by the **4-Way Vowel Harmony (4'lü Ünlü Uyumu: I / İ / U / Ü)**.\n\n1. **The 4-Way Vowel Harmony Engine:**\n- If last vowel is **A / I** -> suffix vowel is **I** (e.g. *baba-m, ad-ım*)\n- If last vowel is **E / İ** -> suffix vowel is **İ** (e.g. *anne-m, ev-im*)\n- If last vowel is **O / U** -> suffix vowel is **U** (e.g. *oğl-um, okul-um*)\n- If last vowel is **Ö / Ü** -> suffix vowel is **Ü** (e.g. *göz-üm, köy-üm*)\n\n2. **The Possessive Suffix Chart:**\n- **(Benim) ...-m / -im/-ım/-üm/-um** -> **My**\n  * *baba-m* (my dad), *anne-m* (my mom), *ev-im* (my house), *adım* (my name)\n- **(Senin) ...-n / -in/-ın/-ün/-un** -> **Your (informal)**\n  * *baba-n* (your dad), *anne-n* (your mom), *ev-in* (your house)\n- **(Onun) ...-si/-sı/-sü/-su (after vowel) OR -i/-ı/-ü/-u (after consonant)** -> **His / Her / Its**\n  * *baba-sı* (his/her dad), *anne-si* (his/her mom), *ev-i* (his/her house), *kardeş-i* (his/her sibling)\n- **(Bizim) ...-miz/-mız/-müz/-muz** -> **Our**\n  * *baba-mız* (our dad), *anne-miz* (our mom), *ev-imiz* (our house)\n- **(Sizin) ...-niz/-nız/-nüz/-nuz** -> **Your (formal/plural)**\n  * *baba-nız*, *anne-niz*, *ev-iniz*\n- **(Onların) ...-leri / -ları** -> **Their**\n  * *ev-leri* (their house/houses), *baba-ları* (their dad/dads).\n\n3. **Pronouns are Optional!**\nBecause the suffix on the noun already clearly marks the person, saying *'benim babam'* is emphatic; simply saying **'babam'** is 100% complete!",
      "examples": [
        "Babam (My father) mühendis, annem (my mother) öğretmen.",
        "Senin adın ne? — Benim adım Emre.",
        "Onun evi (His house) Kadıköy'de.",
        "Bizim ailemiz (Our family) çok büyük."
      ],
      "mnemonics": [
        "Vowel stem adds bare -m/-n/-si (baba-m, baba-n, baba-sı).",
        "Consonant stem adds full vowel harmony -im/-in/-i (ev-im, ev-in, ev-i).",
        "4-Way Harmony: A/I->I, E/İ->İ, O/U->U, Ö/Ü->Ü."
      ],
      "culturalNotes": [
        "When greeting elders, Turks often say 'Annem' (My mother) or 'Babacığım' (My dear father) with the possessive attached as a term of supreme affection."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you say 'my mother' in Turkish (anne = mother)?",
          "options": [
            "annem [AHN-nem]",
            "annemi",
            "anneben",
            "annemim"
          ],
          "answerIndex": 0,
          "explanation": "anne ends in a vowel, so it adds bare '-m' -> annem."
        },
        {
          "prompt": "How do you say 'his/her mother' (anne + 3rd person suffix)?",
          "options": [
            "annesi [ahn-neh-SEE]",
            "annei",
            "annem",
            "anneni"
          ],
          "answerIndex": 0,
          "explanation": "Vowel stems take the buffer consonant 's': anne + si = annesi."
        },
        {
          "prompt": "How do you say 'my house' (ev = house, consonant stem)?",
          "options": [
            "evim [eh-VEEM]",
            "evm",
            "evum",
            "evüm"
          ],
          "answerIndex": 0,
          "explanation": "ev + im (E/İ takes İ) = evim."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Our father is very kind.'",
          "options": [
            "Babam çok kibar.",
            "Babanız çok kibar.",
            "Babaları çok kibar.",
            "Babamız çok kibar."
          ],
          "answerIndex": 3,
          "explanation": "baba + mız = babamız (our father)."
        },
        {
          "prompt": "What is 'senin kardeşin' in English?",
          "options": [
            "My sibling",
            "His sibling",
            "Our sibling",
            "Your sibling"
          ],
          "answerIndex": 3,
          "explanation": "senin kardeşin = your sibling."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "'Onun babası' tamlamasındaki '-sı' eki ne ekidir?",
          "options": [
            "Geçmiş zaman eki",
            "3. tekil şahıs iyelik eki",
            "Soru eki",
            "Çoğul eki"
          ],
          "answerIndex": 1,
          "explanation": "3rd person possessive suffix.",
          "type": "multiple-choice"
        },
        {
          "prompt": "'Göz' (eye) kelimesine 1. tekil iyelik eki (my) gelince ne olur?",
          "options": [
            "gözüm",
            "gözım",
            "gözum",
            "gözim"
          ],
          "answerIndex": 0,
          "explanation": "göz + üm = gözüm (4-way harmony).",
          "type": "multiple-choice"
        },
        {
          "prompt": "'Ailemiz' kelimesi ne anlama gelir?",
          "options": [
            "My family",
            "Your family",
            "Their family",
            "Our family"
          ],
          "answerIndex": 3,
          "explanation": "ailemiz = our family.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçede iyelik zamiri kullanmadan sadece 'Evim' demek yeterli midir?",
          "options": [
            "Hayır, 'benim' demek zorunludur",
            "Yanlış bir kullanımdır",
            "Evet, çünkü '-im' eki zaten cümlenin 'benim evim' olduğunu eksiksiz anlatır",
            "Sadece yazıda yeterlidir"
          ],
          "answerIndex": 2,
          "explanation": "Suffix alone is completely sufficient.",
          "type": "multiple-choice"
        },
        {
          "prompt": "'Onların çocukları' ne demektir?",
          "options": [
            "My children",
            "Their children",
            "Our children",
            "Your children"
          ],
          "answerIndex": 1,
          "explanation": "Their children.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 2: Foundational & Structural Mastery"
  },
  "tr-u3-l3": {
    "id": "tr-u3-l3",
    "unit": "Family & People",
    "level": "A1",
    "objective": "Distinguish between maternal and paternal extended family titles in Turkish (anneanne vs babaanne, amca vs dayı, hala vs teyze, dede, kuzen, yeğen, kayınpeder, kaynana).",
    "prerequisites": [
      "tr-u3-l2"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "tr-u3-l1",
        "tr-u3-l2"
      ]
    },
    "presentation": {
      "explanation": "Like Arabic and Asian linguistic traditions, Turkish makes an absolute, crystal-clear distinction between **Paternal Relatives (Father's side)** and **Maternal Relatives (Mother's side)**.\n\n1. **Grandparents (The Grandmother Distinction!):**\n- **dede** [DEH-deh] / **büyükbaba** — Grandfather (both sides)\n- **anneanne** [AHN-nah-ahn-neh] (anne + anne = mother's mother) — Maternal Grandmother!\n- **babaanne** [BAH-bah-ahn-neh] (baba + anne = father's mother) — Paternal Grandmother!\n- **torun** [to-ROON] — Grandchild (*torunlar* = grandchildren)\n\n2. **Uncles & Aunts (4 Distinct Words!):**\n- **Father's side:**\n  * **amca** [AHM-jah] — Paternal Uncle (Father's brother)\n  * **hala** [HAH-lah] — Paternal Aunt (Father's sister)\n- **Mother's side:**\n  * **dayı** [DAH-yuh] — Maternal Uncle (Mother's brother)\n  * **teyze** [tay-ZEH] — Maternal Aunt (Mother's sister)\n\n3. **Cousins, Nieces & Nephews:**\n- **kuzen** [koo-ZEN] — Cousin (general)\n- **amcamın oğlu / teyzemin kızı** (literally: 'my uncle's son / my aunt's daughter' — traditional specific compound!)\n- **yeğen** [yay-EN] — Niece / Nephew\n\n4. **In-Laws (Kayın Ailesi):**\n- **kayınpeder** [kah-yuhn-peh-DER] — Father-in-law\n- **kaynana** [kahn-NAH-nah] / **kayınvalide** — Mother-in-law\n- **enişte** [eh-NEESH-teh] — Brother-in-law / Uncle-by-marriage (aunt's husband)\n- **yenge** [YAYN-geh] — Sister-in-law / Aunt-by-marriage (uncle's wife).",
      "examples": [
        "Annemin annesi benim anneannemdir, babamın annesi ise babaannemdir.",
        "Ahmet Amcam (Father's brother) Ankara'da yaşıyor.",
        "Murat Dayım (Mother's brother) ve Ayşe Teyzem (Mother's sister) İzmir'de oturuyor.",
        "Kayınpederim ve kayınvalidem çok tatlı insanlar."
      ],
      "mnemonics": [
        "Anne-anne = Mom's mom. Baba-anne = Dad's mom.",
        "Amca = Dad's brother. Dayı = Mom's brother.",
        "Hala = Dad's sister. Teyze = Mom's sister."
      ],
      "culturalNotes": [
        "In Turkish neighborhood culture, friendly elderly women are affectionately addressed as 'Teyze' (e.g. *Fatma Teyze*) and elderly men as 'Amca' (e.g. *Ali Amca*)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What is the kinship title for your mother's brother in Turkish?",
          "options": [
            "amca",
            "dede",
            "enişte",
            "dayı [DAH-yuh]"
          ],
          "answerIndex": 3,
          "explanation": "A mother's brother is strictly 'dayı'."
        },
        {
          "prompt": "What is the title for your father's sister?",
          "options": [
            "teyze",
            "yenge",
            "anneanne",
            "hala [HAH-lah]"
          ],
          "answerIndex": 3,
          "explanation": "A father's sister is strictly 'hala'."
        },
        {
          "prompt": "How do you distinguish your maternal grandmother from your paternal grandmother?",
          "options": [
            "büyükanne for both only",
            "nene vs dede",
            "teyze vs hala",
            "anneanne (maternal grandmother) vs babaanne"
          ],
          "answerIndex": 3,
          "explanation": "anneanne = mother's mother; babaanne = father's mother."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'My maternal aunt lives in Izmir.' (maternal aunt = teyze)",
          "options": [
            "Teyzem İzmir'de yaşıyor.",
            "Halam İzmir'de yaşıyor.",
            "Amcam İzmir'de yaşıyor.",
            "Dayım İzmir'de yaşıyor."
          ],
          "answerIndex": 0,
          "explanation": "teyze + m = teyzem (my maternal aunt)."
        },
        {
          "prompt": "What does 'torun' mean?",
          "options": [
            "Grandchild",
            "Grandfather",
            "Nephew",
            "Cousin"
          ],
          "answerIndex": 0,
          "explanation": "torun = grandchild."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Babamın erkek kardeşi benim:",
          "options": [
            "amcam",
            "teyzem",
            "dayım",
            "halam"
          ],
          "answerIndex": 0,
          "explanation": "Father's brother is amca.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Annemin kız kardeşi benim:",
          "options": [
            "yengem",
            "halam",
            "anneannem",
            "teyzem"
          ],
          "answerIndex": 3,
          "explanation": "Mother's sister is teyze.",
          "type": "multiple-choice"
        },
        {
          "prompt": "'Anneanne' kelimesinin tam Türkçe anlamı nedir?",
          "options": [
            "Üvey anne",
            "Babamın annesi",
            "Annemin annesi",
            "Büyük abla"
          ],
          "answerIndex": 2,
          "explanation": "anneanne = mother's mother.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türk kültüründe komşu teyzelere neden 'Ayşe Teyze' denir?",
          "options": [
            "Kan bağı olduğu için",
            "Saygı, sevgi ve ailevi samimiyet göstergesi olarak",
            "Yabancı oldukları için",
            "Hukuki bir zorunluluk olduğu için"
          ],
          "answerIndex": 1,
          "explanation": "Familial affection and respect in Turkish community culture.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Eşin annesine Türkçe ne denir?",
          "options": [
            "kaynana",
            "kayınpeder",
            "görümce",
            "baldız"
          ],
          "answerIndex": 0,
          "explanation": "kaynana / kayınvalide = mother-in-law.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 3: Foundational & Structural Mastery"
  },
  "tr-u3-l4": {
    "id": "tr-u3-l4",
    "unit": "Family & People",
    "level": "A1",
    "objective": "Express possession and existence with 'Var / Yok' (Benim iki kardeşim var / Onun arabası yok) and construct Genitive-Possessive noun compounds (Ali'nin babası, Ayşe'nin evi).",
    "prerequisites": [
      "tr-u3-l3"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "tr-u3-l2",
        "tr-u3-l3"
      ]
    },
    "presentation": {
      "explanation": "In Turkish, stating that you HAVE or DO NOT HAVE family members or possessions relies on the **Genitive + Possessive + VAR / YOK Construction**.\n\n1. **The 'To Have' Formula: Genitive Pronoun + Noun-Possessive Suffix + VAR:**\n- **(Benim) ...-(i)m VAR** -> I have... (literally: 'My [X] exists')\n  * *Benim iki kardeşim **var**.* (I have two siblings).\n  * *Benim bir köpeğim **var**.* (I have a dog).\n- **(Senin) ...-(i)n VAR** -> You have...\n  * *Senin kardeşin **var mı?*** (Do you have a sibling?).\n- **(Onun) ...-(s)i VAR** -> He/She has...\n  * *Onun bir kızı ve bir oğlu **var**.* (He/she has a daughter and a son).\n\n2. **The 'Do Not Have' Formula: Noun-Possessive Suffix + YOK:**\n- **YOK** [YOHK] means 'does not exist / there is none':\n  * *Benim arabam **yok**.* (I do not have a car).\n  * *Onun erkek kardeşi **yok**.* (He/she does not have a brother).\n  * *Bizim vaktimiz **yok**.* (We have no time).\n\n3. **Genitive-Possessive Noun Compounds (İsim Tamlaması):**\nWhen two nouns express possession ('Ali's father' / 'The teacher's house'):\n- **Noun 1 (Possessor) takes Genitive Suffix:** **-(n)in / -(n)ın / -(n)ün / -(n)un**\n- **Noun 2 (Possessed) takes Possessive Suffix:** **-(s)i / -(s)ı / -(s)ü / -(s)u**\n  * *Ali'**nin** baba**sı*** (Ali's father)\n  * *Ayşe'**nin** anne**si*** (Ayşe's mother)\n  * *Öğretmen**in** ev**i*** (The teacher's house)\n  * *Türkiye'**nin** başkent**i*** (The capital of Turkey).",
      "examples": [
        "Benim üç ablam var, ama hiç erkek kardeşim yok.",
        "Sizin eviniz var mı? — Evet, bizim güzel bir evimiz var.",
        "Ahmet'in babası doktor, annesi ise avukat.",
        "İstanbul'un manzarası çok güzel. (The view of Istanbul)."
      ],
      "mnemonics": [
        "Var = Exists (Have). Yok = Does not exist (Don't have).",
        "Compound Formula: Noun 1-IN + Noun 2-I (Ali'NİN baba-SI)."
      ],
      "culturalNotes": [
        "In Turkish hospitality, when offering tea or food, asking 'Çay var mı?' (Is there tea?) or 'Aç mısın, bir şey var mı?' (Are you hungry, is there anything?) is fundamental."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you say 'I have two brothers' in Turkish?",
          "options": [
            "Benim iki erkek kardeşim var. [kahr-deh-SHEEM VAHR]",
            "Benim iki kardeş yok.",
            "Ben iki kardeş sahibim.",
            "Ben iki kardeş varım."
          ],
          "answerIndex": 0,
          "explanation": "Benim + noun-im + var."
        },
        {
          "prompt": "How do you say 'I do NOT have a car'?",
          "options": [
            "Benim arabam yok. [ah-rah-BAHM YOHK]",
            "Ben araba yokum.",
            "Benim araba var.",
            "Benim arabam değil."
          ],
          "answerIndex": 0,
          "explanation": "arabam + yok = I have no car."
        },
        {
          "prompt": "How is 'Ali's father' formed correctly as a Genitive-Possessive compound?",
          "options": [
            "Ali'nin babası [ah-lee-NEEN bah-bah-SUH]",
            "Ali babam",
            "Ali baba",
            "Ali'nin baba"
          ],
          "answerIndex": 0,
          "explanation": "Ali'nin (Genitive) + babası (Possessive)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Do you have siblings?'",
          "options": [
            "Kardeşin var mı?",
            "Kardeş var mı?",
            "Kardeşin yok mu?",
            "Sen kardeş misin?"
          ],
          "answerIndex": 0,
          "explanation": "Kardeşin var mı? (var + question particle mı)."
        },
        {
          "prompt": "What is 'Ayşe'nin evi' in English?",
          "options": [
            "Ayşe's house",
            "Ayşe is at home",
            "Ayşe has a house",
            "Ayşe's family"
          ],
          "answerIndex": 0,
          "explanation": "Ayşe'nin evi = Ayşe's house."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "'Benim hiç vaktim yok' cümlesi ne anlama gelir?",
          "options": [
            "My watch is broken",
            "I have plenty of time",
            "What time is it",
            "I have no time at all"
          ],
          "answerIndex": 3,
          "explanation": "I have no time at all.",
          "type": "multiple-choice"
        },
        {
          "prompt": "'Öğretmenin arabası' tamlamasında hangi ekler kullanılmıştır?",
          "options": [
            "Yönelme eki ve bulunma eki",
            "Çoğul eki ve geçmiş zaman eki",
            "İlgi eki (-in) ve 3. tekil iyelik eki",
            "Ayrılma eki"
          ],
          "answerIndex": 2,
          "explanation": "Genitive + 3rd person possessive.",
          "type": "multiple-choice"
        },
        {
          "prompt": "'Senin kedin var mı?' sorusuna olumsuz yanıt nasıl verilir?",
          "options": [
            "Hayır, benim kedim değil.",
            "Hayır, benim kedim yok.",
            "Hayır, kedi yokum.",
            "Evet, kedim var."
          ],
          "answerIndex": 1,
          "explanation": "Hayır, benim kedim yok.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçede 'sahiplik' (possession) en yaygın olarak hangi yapıyla ifade edilir?",
          "options": [
            "İyelik eki almış kelime + var / yok yapısıyla",
            "Sadece 'sahip olmak' fiiliyle",
            "Sadece işaret sıfatlarıyla",
            "Gelecek zaman kipiyle"
          ],
          "answerIndex": 0,
          "explanation": "Possessive suffix + var/yok.",
          "type": "multiple-choice"
        },
        {
          "prompt": "'İstanbul'un tarihi' tamlaması ne demektir?",
          "options": [
            "Istanbul is historical",
            "Historic Istanbul",
            "Istanbul today",
            "The history of Istanbul"
          ],
          "answerIndex": 3,
          "explanation": "The history of Istanbul.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 4: Foundational & Structural Mastery"
  },
  "tr-u3-l5": {
    "id": "tr-u3-l5",
    "unit": "Family & People",
    "level": "A1",
    "objective": "Participate in a multi-turn Turkish dialogue during a traditional Sunday family breakfast (Pazar kahvaltısı) in Istanbul: introduce extended relatives using kinship titles (abi, abla, amca, teyze), describe professions and origins with var/yok and possessives.",
    "prerequisites": [
      "tr-u3-l4"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "tr-u3-l1",
        "tr-u3-l2",
        "tr-u3-l3",
        "tr-u3-l4"
      ]
    },
    "presentation": {
      "explanation": "This capstone lesson brings together all vocabulary, possessive suffixes, kinship terms (*amca, dayı, teyze, hala, abi, abla*), and the *var/yok* construction into a lively Turkish family breakfast.\n\nScenario: Can invites his foreign friend Alex to his family's home in Moda, Kadıköy (Istanbul) for a rich Sunday breakfast (**Pazar kahvaltısı**):\n\n- Alex: *Merhaba Can! Eviniz çok güzel ve Boğaz manzarası harika! Masada ne kadar çok çeşit kahvaltılık var!*\n- Can: *Hoş geldin, Alex! Geç, otur lütfen! Baş köşeye geç. Annem taze çay demledi ve sıcak börek yaptı. Gel, seni ailemle tanıştırayım.*\n- Baba (Kemal Bey): *Hoş geldin, Alex oğlum! Tanıştığımıza memnun oldum. Çayını nasıl içersin, açık mı demli mi?*\n- Alex: *Hoş bulduk, Kemal Amca! Çok teşekkür ederim, açık lütfen.*\n- Can: *Bak Alex: bu benim ağabeyim, Mehmet Abim. O mimar. Yanındaki de onun eşi, Selin Yengem. Onların beş yaşında çok sevimli bir oğulları var, yeğenim Emre.*\n- Alex: *Ne tatlı bir çocuk! Peki balkondaki o güler yüzlü yaşlı çift kim?*\n- Can: *Onlar benim anneannem Fatma Hanım ve dedem Ali Bey. Annemin ailesi aslen Trabzonlu. Anneannem seksen iki yaşında ama her sabah yürüyüş yapar!*\n- Anneanne Fatma Hanım: *Alex evladım, taze peynir ve Rize balından ye, afiyet olsun!*\n- Alex: *Çok teşekkür ederim! Ne kadar misafirperver, sıcak ve güzel bir aileniz var!*",
      "examples": [
        "Hoş geldin! — Hoş bulduk! (Standard Turkish hospitality exchange).",
        "Bu benim Mehmet Abim ve Selin Yengem. (Sibling & in-law titles).",
        "Onların sevimli bir oğulları var. (Possessive + var).",
        "Ne kadar misafirperver bir aileniz var! (Warm hospitality praise)."
      ],
      "mnemonics": [
        "Hospitality sequence: Hoş geldin (Welcome) -> Hoş bulduk (Glad to be here) -> Çay ikramı (Tea offer) -> Afiyet olsun (Bon appetit).",
        "Addressing elders: Kemal Amca (Uncle Kemal), Fatma Anneanne / Fatma Teyze."
      ],
      "culturalNotes": [
        "The Turkish breakfast (*Türk kahvaltısı*) is a legendary social feast featuring multiple cheeses (*beyaz peynir, kaşar*), olives, honey and clotted cream (*bal-kaymak*), tomatoes, cucumbers, eggs with spicy sausage (*sucuklu yumurta*), *börek*, and endless glasses of freshly brewed Turkish black tea (*demli çay*)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How does Alex respectfully reply to Can's father's welcome ('Hoş geldin')?",
          "options": [
            "Hoş bulduk, Kemal Amca! [HOHSH bool-dook]",
            "Güle güle!",
            "Rica ederim!",
            "Tünaydın!"
          ],
          "answerIndex": 0,
          "explanation": "'Hoş bulduk' is the mandatory cultural response to 'Hoş geldin'."
        },
        {
          "prompt": "How does Can introduce his older brother Mehmet?",
          "options": [
            "Bu benim ağabeyim, Mehmet Abim. [ah-BEE-yeem / meh-MET ah-BEEM]",
            "Bu çocuk Mehmet.",
            "Bu benim küçük kardeşim Mehmet.",
            "Mehmet benim oğlum."
          ],
          "answerIndex": 0,
          "explanation": "Respectful older brother title: Mehmet Abim."
        },
        {
          "prompt": "What does 'Afiyet olsun' mean at the breakfast table?",
          "options": [
            "Enjoy your meal / Bon appétit",
            "Good morning",
            "Cheers",
            "Thank you"
          ],
          "answerIndex": 0,
          "explanation": "'Afiyet olsun' = Bon appétit / Enjoy your meal."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'They have a five-year-old son.' (beş yaşında = 5 years old)",
          "options": [
            "Onlar beş yaş oğul.",
            "Onların beş yaşında bir oğulları var.",
            "Onların oğul var beş.",
            "Onların beş yaşında oğul yok."
          ],
          "answerIndex": 1,
          "explanation": "Onların beş yaşında bir oğulları var."
        },
        {
          "prompt": "What traditional Turkish meal brings the family together in the dialogue?",
          "options": [
            "Pazar kahvaltısı",
            "Hızlı atıştırmalık",
            "Öğle çorbası",
            "Akşam yemeği"
          ],
          "answerIndex": 0,
          "explanation": "Pazar kahvaltısı = Sunday breakfast."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "'Hoş geldin' diyen bir ev sahibine ne yanıt verilir?",
          "options": [
            "Güle güle!",
            "İyi geceler!",
            "Hoş bulduk!",
            "Geçmiş olsun!"
          ],
          "answerIndex": 2,
          "explanation": "Hoş bulduk.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Alex'in Can'ın babasına 'Kemal Amca' demesi neyi gösterir?",
          "options": [
            "Gerçek amcası olduğunu",
            "Türk kültüründeki aile dostu büyüklere saygı ve samimiyet hitabını",
            "İsmini unuttuğunu",
            "Onunla alay ettiğini"
          ],
          "answerIndex": 1,
          "explanation": "Respectful familial address for elder family friends.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Bu 3. Ünitede öğrenilen temel Türkçe dilbilgisi kuralları nelerdir?",
          "options": [
            "Aile terimleri, 4'lü ünlü uyumuna göre iyelik ekleri (-m/-n/-si), anneanne/babaanne ayrımı ve var/yok ile sahiplik",
            "Sadece sıfat tamlamaları",
            "Sadece alfabe",
            "Sadece geçmiş zaman fiil çekimleri"
          ],
          "answerIndex": 0,
          "explanation": "Unit 3 master objective synthesis.",
          "type": "multiple-choice"
        },
        {
          "prompt": "'Misafirperver' kelimesi ne anlama gelir?",
          "options": [
            "Selfish",
            "Angry",
            "Foreigner",
            "Hospitable / Welcoming to guests"
          ],
          "answerIndex": 3,
          "explanation": "misafirperver = hospitable.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Diyalogda anneanne nereli olarak tanıtılmaktadır?",
          "options": [
            "İzmirli",
            "Ankaralı",
            "Trabzonlu",
            "Antalyalı"
          ],
          "answerIndex": 2,
          "explanation": "Trabzonlu.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 5: Foundational & Structural Mastery"
  },
  "tr-u4-l1": {
    "id": "tr-u4-l1",
    "unit": "tr-u4",
    "level": "A1",
    "objective": "Form affirmative present continuous tense (Şimdiki Zaman) verbs using the suffix '-iyor' with 4-way vowel harmony across all personal pronouns.",
    "presentation": {
      "explanation": "The Turkish Present Continuous Tense (*Şimdiki Zaman*) describes both actions happening right now and general habitual actions (equivalent to both 'I am doing' and 'I do' in English).\n\nFormula: [Verb Root + (Vowel Harmony /ı/i/u/ü/) + yor + Personal Suffix]\n\n1. If verb stem ends in a consonant, insert high vowel by 4-way vowel harmony (A/I -> ı, E/İ -> i, O/U -> u, Ö/Ü -> ü):\n   - yaz- (write) -> yaz + ıyor -> yazıyor\n   - gel- (come) -> gel + iyor -> geliyor\n   - koş- (run) -> koş + uyor -> koşuyor\n   - yüz- (swim) -> yüz + üyor -> yüzüyor\n2. If verb stem ends in a vowel (-a/-e), the vowel drops and harmonizes with the preceding vowel:\n   - oyna- (play) -> oynuyor\n   - bekle- (wait) -> bekliyor\n3. Personal endings attached after '-yor' (always harmonize with 'o' -> -um, -sun, -, -uz, -sunuz, -lar):\n   - Ben (I): -um (geliyorum, yazıyorum)\n   - Sen (you): -sun (geliyorsun, yazıyorsun)\n   - O (he/she/it): (no suffix) (geliyor, yazıyor)\n   - Biz (we): -uz (geliyoruz, yazıyoruz)\n   - Siz (you formal/pl): -sunuz (geliyorsunuz, yazıyorsunuz)\n   - Onlar (they): -lar (geliyorlar, yazıyorlar)",
      "examples": [
        {
          "target": "Ben Türkçe öğreniyorum.",
          "reading": "ben tewrk-cheh uh-reh-nee-yoh-room",
          "translation": "I am learning Turkish."
        },
        {
          "target": "Sen her gün kitap okuyorsun.",
          "reading": "sen hehr gewn kee-tahp oh-koo-yohr-soon",
          "translation": "You read books every day."
        },
        {
          "target": "Biz İstanbul'da yaşıyoruz.",
          "reading": "beez ees-tahn-bool-dah yah-shah-yoh-rooz",
          "translation": "We live in Istanbul."
        },
        {
          "target": "Onlar ofiste çalışıyorlar.",
          "reading": "ohn-lahr oh-fees-teh chah-luh-shuh-yohr-lahr",
          "translation": "They are working in the office."
        }
      ],
      "mnemonics": [
        "-iyor is always stressed on the syllable right before 'yor' (e.g. ge-Lİ-yor, ya-ZI-yor).",
        "The personal suffixes after '-yor' NEVER change their vowel because 'o' in '-yor' is fixed (always -um, -sun, -uz, -sunuz, -lar)."
      ],
      "culturalNotes": [
        "In spoken Turkish, dropping subject pronouns (*Ben*, *Sen*, *Biz*) is standard because the verb's personal ending already uniquely identifies the subject (e.g. 'Çay içiyorum' instead of 'Ben çay içiyorum')."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What is the correct present continuous form of 'gelmek' (to come) for 'Ben' (I)?",
          "options": [
            "geliyorsun",
            "geliyor",
            "geliyoruz",
            "geliyorum"
          ],
          "answerIndex": 3,
          "explanation": "gel- + -iyor + -um = geliyorum."
        },
        {
          "prompt": "How does the verb 'okumak' (to read) conjugate for 'Biz' (We)?",
          "options": [
            "okuyorum",
            "okuyor",
            "okuyoruz",
            "okuyorsun"
          ],
          "answerIndex": 2,
          "explanation": "oku- + -yor + -uz = okuyoruz."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'They are drinking Turkish tea.'",
          "options": [
            "Onlar Türk çayı içiyorsun.",
            "Onlar Türk çayı içiyorum.",
            "Onlar Türk çayı içiyoruz.",
            "Onlar Türk çayı içiyorlar."
          ],
          "answerIndex": 3,
          "explanation": "içiyorlar = they are drinking, Türk çayı = Turkish tea."
        },
        {
          "prompt": "Translate: 'Where are you living?' (formal/plural 'Siz')",
          "options": [
            "Nerede yaşıyoruz?",
            "Nerede yaşıyorum?",
            "Nerede yaşıyorsunuz?",
            "Nerede yaşıyorsun?"
          ],
          "answerIndex": 2,
          "explanation": "yaşıyorsunuz is the 2nd person plural/formal form."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Why are the personal endings after '-yor' always -um, -sun, -uz, -sunuz?",
          "options": [
            "Because Turkish verbs do not have vowel harmony.",
            "Because the vowel 'o' in the '-yor' suffix is unchangeable, fixing vowel harmony to back-rounded 'u'.",
            "Because 'yor' is an Arabic loan suffix.",
            "Because only past tense has variable endings."
          ],
          "answerIndex": 1,
          "explanation": "The fixed 'o' in '-yor' requires following suffixes to follow 'o' -> 'u' harmony.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Conjugate 'çalışmak' (to work) for 'O' (he/she):",
          "options": [
            "çalışıyor",
            "çalışıyorsun",
            "çalışıyoruz",
            "çalışıyorum"
          ],
          "answerIndex": 0,
          "explanation": "3rd person singular has zero personal suffix: çalışıyor.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate into Turkish: 'I am writing a letter.'",
          "options": [
            "Mektup içiyorum.",
            "Mektup geliyorum.",
            "Mektup okuyorum.",
            "Mektup yazıyorum."
          ],
          "answerIndex": 3,
          "explanation": "yazıyorum = I am writing, mektup = letter.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Biz her sabah parkta koşuyoruz.'",
          "options": [
            "We eat in the park every morning.",
            "We work in the park every morning.",
            "We run in the park every morning.",
            "We sleep in the park every morning."
          ],
          "answerIndex": 2,
          "explanation": "koşuyoruz = we run, her sabah = every morning.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 4, Lesson 1: Foundational & Structural Mastery (Ben Türkçe öğreniyorum.)"
  },
  "tr-u4-l2": {
    "id": "tr-u4-l2",
    "unit": "tr-u4",
    "level": "A1",
    "objective": "Form negative present continuous verbs using the negative infix '-m-' with 4-way vowel harmony ('-mıyor / -miyor / -muyor / -müyor').",
    "presentation": {
      "explanation": "To make a Turkish verb negative in the present continuous tense, insert the negative suffix '-m-' directly after the verb root and before '-yor'. The 4-way vowel harmony determines the vowel between '-m-' and '-yor':\n- a/ı -> -mıyor (yapmıyor - doesn't do/make, anlamıyor - doesn't understand)\n- e/i -> -miyor (gelmiyor - isn't coming, bilmiyor - doesn't know, istemiyor - doesn't want)\n- o/u -> -muyor (konuşmuyor - isn't speaking, okumuyor - isn't reading)\n- ö/ü -> -müyor (görmüyor - doesn't see, gülmüyor - isn't laughing)\n\nPersonal endings attach as usual: -mıyorum, -mıyorsun, -mıyor, -mıyoruz, -mıyorsunuz, -mıyorlar.",
      "examples": [
        {
          "target": "Ben et yemiyorum.",
          "reading": "ben eht yeh-mee-yoh-room",
          "translation": "I don't eat meat (I am vegetarian)."
        },
        {
          "target": "Ahmet Türkçe bilmiyor.",
          "reading": "ah-met tewrk-cheh beel-mee-yohr",
          "translation": "Ahmet doesn't know Turkish."
        },
        {
          "target": "Biz bugün okula gitmiyoruz.",
          "reading": "beez boo-gewn oh-koo-lah geet-mee-yoh-rooz",
          "translation": "We are not going to school today."
        },
        {
          "target": "Onlar yalan söylemiyorlar.",
          "reading": "ohn-lahr yah-lahn soy-leh-mee-yohr-lahr",
          "translation": "They do not tell lies."
        }
      ],
      "mnemonics": [
        "In negative present verbs, the STRESS shifts to the syllable immediately BEFORE the negative '-m-' (e.g. BİL-mi-yor, AN-la-mı-yor). Listen for the punchy stress!"
      ],
      "culturalNotes": [
        "'Bilmiyorum' (I don't know) and 'Anlamıyorum' (I don't understand) are two of the most helpful everyday survival expressions for foreigners in Turkey."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you say 'I don't understand' in Turkish?",
          "options": [
            "Anlamıyorum.",
            "Anlıyorum.",
            "Anlamadı.",
            "Anlamazsın."
          ],
          "answerIndex": 0,
          "explanation": "anla- + -m- + -ıyor + -um = Anlamıyorum."
        },
        {
          "prompt": "What is the negative present form of 'gelmek' for 'O' (he/she)?",
          "options": [
            "gelmiyor",
            "geliyor",
            "gelmiyorsun",
            "gelmiyorum"
          ],
          "answerIndex": 0,
          "explanation": "gel- + -mi- + -yor = gelmiyor."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'We do not smoke cigarettes.'",
          "options": [
            "Sigara içiyoruz.",
            "Sigara içmiyorsun.",
            "Sigara içmiyorlar.",
            "Sigara içmiyoruz."
          ],
          "answerIndex": 3,
          "explanation": "içmiyoruz = we do not smoke/drink."
        },
        {
          "prompt": "Translate: 'He is not working today.'",
          "options": [
            "Bugün çalışıyor.",
            "Bugün çalışmıyorum.",
            "Bugün çalışmıyorsunuz.",
            "Bugün çalışmıyor."
          ],
          "answerIndex": 3,
          "explanation": "çalışmıyor = he is not working."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Where does stress fall in a negative present tense Turkish verb?",
          "options": [
            "On the syllable directly preceding the negative marker '-m-' (e.g. İÇ-mi-yor).",
            "Always on the '-yor' suffix.",
            "On the first letter of the sentence.",
            "On the final personal suffix."
          ],
          "answerIndex": 0,
          "explanation": "Negative verbs shift stress to the pre-negative syllable.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate into Turkish: 'I don't know.'",
          "options": [
            "Biliyorum.",
            "Görmüyorum.",
            "İstemiyorum.",
            "Bilmiyorum."
          ],
          "answerIndex": 3,
          "explanation": "Bilmiyorum = I don't know.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Choose the correct negative form for 'Biz konuşmak' (We do not speak):",
          "options": [
            "Konuşmuyorsunuz.",
            "Konuşmuyorum.",
            "Konuşmuyoruz.",
            "Konuşuyoruz."
          ],
          "answerIndex": 2,
          "explanation": "konuş- + -mu- + -yor + -uz = Konuşmuyoruz.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Sen beni dinlemiyorsun.'",
          "options": [
            "We are not talking.",
            "You are not listening to me.",
            "You are listening to me.",
            "I am not listening to you."
          ],
          "answerIndex": 1,
          "explanation": "dinlemiyorsun = you are not listening.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 4, Lesson 2: Foundational & Structural Mastery (Ben et yemiyorum.)"
  },
  "tr-u4-l3": {
    "id": "tr-u4-l3",
    "unit": "tr-u4",
    "level": "A1",
    "objective": "Distinguish and apply the Definite Accusative case suffix '-(y)ı / -(y)i / -(y)u / -(y)ü' for specific direct objects.",
    "presentation": {
      "explanation": "In Turkish, direct objects follow a crucial grammatical distinction:\n1. Indefinite / General Objects take NO suffix (Bare Nominative):\n   - Ben kitap okuyorum. (I read a book / I am book-reading in general).\n   - Çay içiyorum. (I am drinking tea).\n2. Definite / Specific Objects take the ACCUSATIVE case suffix '-(y)ı / -(y)i / -(y)u / -(y)ü':\n   - If the object refers to a specific, known item ('the book', 'this car', a proper noun, or something with a possessive suffix):\n   - a/ı -> -ı (kitap -> kitabı [p->b mutation], kapı -> kapıyı)\n   - e/i -> -i (ev -> evi, gazete -> gazeteyi)\n   - o/u -> -u (telefon -> telefonu, kutu -> kutuyu)\n   - ö/ü -> -ü (gözlük -> gözlüğü [k->ğ mutation], süt -> sütü)\n\nBuffer letter 'y' is used if the noun ends in a vowel (arabayı, kahveyi, suyu [irregular: su -> suyu]).",
      "examples": [
        {
          "target": "Ben bu kitabı çok beğeniyorum.",
          "reading": "ben boo kee-tah-buh chohk beh-eh-nee-yoh-room",
          "translation": "I really like this book (specific book -> kitabı)."
        },
        {
          "target": "Ali kapıyı açıyor.",
          "reading": "ah-lee kah-puh-yuh ah-chuh-yohr",
          "translation": "Ali is opening the door (specific door -> kapıyı)."
        },
        {
          "target": "Lütfen kahveyi getirin.",
          "reading": "lewt-fen kahh-veh-yee geh-tee-reen",
          "translation": "Please bring the coffee (kahve + yi)."
        },
        {
          "target": "Seni çok iyi anlıyorum.",
          "reading": "seh-nee chohk ee-yee ahn-luh-yoh-room",
          "translation": "I understand you very well (sen -> seni)."
        }
      ],
      "mnemonics": [
        "Definite = 'THE' pointer. If you can point at it ('this specific one'), attach the accusative -ı/-i/-u/-ü!",
        "Consonant voicing rules apply: p->b (kitap->kitabı), k->ğ (müzik->müziği), t->d (yoğurt->yoğurdu)."
      ],
      "culturalNotes": [
        "When ordering at a restaurant, you say 'Bir çay istiyorum' (bare noun = I want a tea). But when asking for the specific bill, you say 'Hesabı alabilir miyim?' (hesap + ı = the bill)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What is the accusative form of 'araba' (car) in 'I am washing the car'?",
          "options": [
            "araba",
            "arabada",
            "arabaya",
            "arabayı"
          ],
          "answerIndex": 3,
          "explanation": "araba ends in vowel 'a' -> buffer 'y' + 'ı' = arabayı."
        },
        {
          "prompt": "Translate: 'I am reading a book' (general/indefinite) vs 'I am reading the book' (specific):",
          "options": [
            "Kitabı okuyorum (general) / Kitap okuyorum",
            "Kitapta okuyorum / Kitaptan okuyorum",
            "Kitaba okuyorum / Kitapla okuyorum",
            "Kitap okuyorum (general) / Kitabı okuyorum"
          ],
          "answerIndex": 3,
          "explanation": "Bare noun = general; accusative (-ı) = definite specific."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What happens to the letter 'k' in 'müzik' when adding the accusative suffix?",
          "options": [
            "It softens to 'ğ': müziği",
            "It becomes 'g': müzigi",
            "It disappears: müzi",
            "It stays 'k': müziki"
          ],
          "answerIndex": 0,
          "explanation": "Intervocalic 'k' softens to 'ğ' (müziği)."
        },
        {
          "prompt": "Translate: 'Ahmet is drinking the water.'",
          "options": [
            "Ahmet suyu içiyor.",
            "Ahmet su içiyor.",
            "Ahmet suda içiyor.",
            "Ahmet suyla içiyor."
          ],
          "answerIndex": 0,
          "explanation": "suyu = the water (specific)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "When is the Turkish Accusative case suffix '-(y)ı/-(y)i/-(y)u/-(y)ü' required?",
          "options": [
            "Only when the subject is first person.",
            "Whenever any noun appears in a sentence.",
            "Only with plural nouns.",
            "When the direct object is definite, specific, a proper noun, or marked by demonstratives ('this/that')."
          ],
          "answerIndex": 3,
          "explanation": "The accusative marks definite, specific direct objects.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Choose the correct accusative form for 'ev' (house):",
          "options": [
            "eve",
            "evden",
            "evi",
            "evde"
          ],
          "answerIndex": 2,
          "explanation": "ev + -i = evi.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Babanı tanıyorum.'",
          "options": [
            "Your father knows me.",
            "I know your father.",
            "Your father is at home.",
            "I am looking for your father."
          ],
          "answerIndex": 1,
          "explanation": "baban (your father) + -ı (accusative) = babanı, tanıyorum = I know.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Can you bring the bill?' (hesap)",
          "options": [
            "Hesabı getirir misiniz?",
            "Hesapta getirir misiniz?",
            "Hesaptan getirir misiniz?",
            "Hesaba getirir misiniz?"
          ],
          "answerIndex": 0,
          "explanation": "hesap + -ı -> hesabı (the bill).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 4, Lesson 3: Foundational & Structural Mastery (Ben bu kitabı çok beğeniyorum.)"
  },
  "tr-u4-l4": {
    "id": "tr-u4-l4",
    "unit": "tr-u4",
    "level": "A1",
    "objective": "Form present questions using the question particle 'mu' and question words (Ne, Nerede, Ne zaman, Neden, Kim).",
    "presentation": {
      "explanation": "1. Yes/No Questions in Present Continuous:\n   The question particle 'mu' is written as a separate word and carries the personal endings. Because '-yor' always ends in 'o', the question particle is ALWAYS 'mu':\n   - Ben: -yor muyum? (Geliyor muyum? - Am I coming?)\n   - Sen: -yor musun? (Geliyor musun? - Are you coming? Türkçe biliyor musun?)\n   - O: -yor mu? (Geliyor mu? - Is he coming?)\n   - Biz: -yor muyuz? (Geliyor muyuz? - Are we coming?)\n   - Siz: -yor musunuz? (Geliyor musunuz? - Are you coming?)\n   - Onlar: -yorlar mı? (Geliyorlar mı? - Are they coming?)\n\n2. Information Questions (Wh- words):\n   Wh-words are typically placed immediately before the verb:\n   - Ne? (What?): Ne yapıyorsun? (What are you doing?)\n   - Nerede? (Where?): Nerede oturuyorsun? (Where do you reside/live?)\n   - Ne zaman? (When?): Ne zaman geliyorsun? (When are you coming?)\n   - Neden / Niçin? (Why?): Neden çalışmıyorsun? (Why aren't you working?)\n   - Kim? (Who?): Kimi arıyorsun? (Whom are you looking for/calling?)",
      "examples": [
        {
          "target": "Sen Türkçe konuşuyor musun?",
          "reading": "sen tewrk-cheh koh-noo-shoo-yohr moo-soon?",
          "translation": "Do you speak Turkish?"
        },
        {
          "target": "Şimdi ne yapıyorsun? — Kahve içiyorum.",
          "reading": "sheem-dee neh yah-puh-yohr-soon? — kahh-veh ee-chee-yoh-room",
          "translation": "What are you doing now? — I am drinking coffee."
        },
        {
          "target": "Bu akşam konsere geliyor musunuz?",
          "reading": "boo ahk-shahm kohn-seh-reh geh-lee-yohr moo-soo-nooz?",
          "translation": "Are you coming to the concert tonight?"
        },
        {
          "target": "Nerede çalışıyorsunuz?",
          "reading": "neh-reh-deh chah-luh-shuh-yohr-soo-nooz?",
          "translation": "Where do you work?"
        }
      ],
      "mnemonics": [
        "'mu' is ALWAYS written separately with a space before it (e.g. 'okuyor musun?', NEVER 'okuyormusun?').",
        "Ne yapıyorsun = sounds like 'Nay yah-puh-yohr-sun' (very common in casual speech as 'N'apıyorsun?')."
      ],
      "culturalNotes": [
        "'N'apıyorsun?' or 'Ne yapıyorsun?' (What are you doing / what's up?) is the universal casual greeting among friends throughout Turkey."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you write 'Are you listening?' correctly in Turkish?",
          "options": [
            "Dinliyor musun?",
            "Dinliyor misin?",
            "Dinliyor mu?",
            "Dinliyormusun?"
          ],
          "answerIndex": 0,
          "explanation": "'mu' is written separately and takes -sun: Dinliyor musun?"
        },
        {
          "prompt": "Which question word means 'What are you doing?'",
          "options": [
            "Ne yapıyorsun?",
            "Kim yapıyorsun?",
            "Nasıl yapıyorsun?",
            "Nerede yapıyorsun?"
          ],
          "answerIndex": 0,
          "explanation": "Ne yapıyorsun? = What are you doing?"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Are they working today?'",
          "options": [
            "Bugün çalışıyorlar mı?",
            "Bugün çalışıyor musun?",
            "Bugün çalışıyor musunuz?",
            "Bugün çalışıyor muyuz?"
          ],
          "answerIndex": 0,
          "explanation": "çalışıyorlar mı? is the 3rd person plural question form."
        },
        {
          "prompt": "Translate: 'Where are you going?' (informal 'Sen')",
          "options": [
            "Nereye gidiyorsun?",
            "Nerede gidiyorsun?",
            "Ne zaman gidiyorsun?",
            "Ne gidiyorsun?"
          ],
          "answerIndex": 0,
          "explanation": "Nereye = Where to, gidiyorsun = are you going."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "How is the question particle 'mu' spelled in Turkish sentences?",
          "options": [
            "Only written at the beginning of the sentence.",
            "Always attached directly to the verb stem without a space.",
            "Always written as a separate word before personal suffixes (e.g. 'biliyor musun?').",
            "As a hyphenated suffix."
          ],
          "answerIndex": 2,
          "explanation": "The question particle is always written as an independent word.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Kahve istiyor musunuz?'",
          "options": [
            "Are you drinking coffee?",
            "Do you (formal/pl) want coffee?",
            "Where is the coffee?",
            "Who made the coffee?"
          ],
          "answerIndex": 1,
          "explanation": "istiyor musunuz? = do you want?",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate into Turkish: 'What is Emre reading?'",
          "options": [
            "Emre ne okuyor?",
            "Emre nerede okuyor?",
            "Emre ne zaman okuyor?",
            "Emre nasıl okuyor?"
          ],
          "answerIndex": 0,
          "explanation": "Emre ne okuyor?",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which sentence correctly asks 'Are we meeting at the café?'",
          "options": [
            "Kafede buluşur musun?",
            "Kafede buluşuyoruz mu?",
            "Kafede buluşuyormuyuz?",
            "Kafede buluşuyor muyuz?"
          ],
          "answerIndex": 3,
          "explanation": "buluşuyor muyuz? (separate 'muyuz').",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 4, Lesson 4: Foundational & Structural Mastery (Sen Türkçe konuşuyor musun?)"
  },
  "tr-u4-l5": {
    "id": "tr-u4-l5",
    "unit": "tr-u4",
    "level": "A1",
    "objective": "Synthesize present tense affirmative, negative, accusative objects, and question forms into a rich, multi-turn Istanbul daily life dialogue.",
    "presentation": {
      "explanation": "In this capstone lesson of Unit 4, we integrate all four core grammar components:\n1. Affirmative present continuous (-iyor + personal endings).\n2. Negative present continuous (-muyor / -miyor / -mıyor / -müyor).\n3. Definite accusative case (-(y)ı/-(y)i/-(y)u/-(y)ü).\n4. Questions with -iyor mu- and Wh- question words (Ne, Nerede, Ne zaman).\n\nIstanbul Daily Life Dialogue (Kadıköy Ferry & Moda Waterfront):\n- Can: Selam Elif! N'apıyorsun? Neredesin şimdi? (Hi Elif! What's up? Where are you now?)\n- Elif: Selam Can! Ben Kadıköy vapurundayım, Boğaz'ı seyrediyorum ve sıcak çay içiyorum. Sen ne yapıyorsun? (Hi Can! I am on the Kadikoy ferry, watching the Bosphorus and drinking hot tea. What are you doing?)\n- Can: Ben Moda'da bir kafede oturuyorum, yeni bir roman okuyorum. Bugün çalışmıyor musun? (I am sitting in a café in Moda, reading a new novel. Aren't you working today?)\n- Elif: Hayır, bugün izinliyim, çalışmıyorum! Vapurdan iniyorum, Moda'ya geliyorum. Beraber yemek yiyelim mi? (No, I am off today, I am not working! I am getting off the ferry and coming to Moda. Shall we eat together?)\n- Can: Harika fikir! Ben hesabı ödüyorum ve deniz kenarına yürüyorum. Görüşürüz! (Great idea! I am paying the bill and walking to the seaside. See you!)",
      "examples": [
        {
          "target": "Vapurdan denizi ve martıları seyrediyoruz.",
          "reading": "vah-poor-dahn deh-nee-zee veh mahr-tuh-lah-ruh sey-reh-dee-yoh-rooz",
          "translation": "From the ferry we are watching the sea and the seagulls."
        },
        {
          "target": "Her sabah taze simit ve peynir yiyorum.",
          "reading": "hehr sah-bah tah-zeh see-meet veh pey-neer yeh-yee-yoh-room",
          "translation": "Every morning I eat fresh simit and cheese."
        },
        {
          "target": "Türkçe gramerini çok iyi anlıyorum.",
          "reading": "tewrk-cheh grah-meh-ree-nee chohk ee-yee ahn-luh-yoh-room",
          "translation": "I understand Turkish grammar very well."
        },
        {
          "target": "Akşam arkadaşlarla Kadıköy'de buluşuyoruz.",
          "reading": "ahk-shahm ahr-kah-dahsh-lahr-lah kah-duh-koy-deh boo-loo-shoo-yoh-rooz",
          "translation": "In the evening we are meeting with friends in Kadıköy."
        }
      ],
      "mnemonics": [
        "Martı = seagull (throwing simit to seagulls from Istanbul ferries is an iconic tradition).",
        "Görüşürüz = see you soon ('we will see each other')."
      ],
      "culturalNotes": [
        "Taking the municipal passenger ferry (*Şehir Hatları vapuru*) across the Bosphorus while drinking çay in a tulip glass (*ince belli bardak*) and feeding simit to hovering seagulls is the quintessential Istanbul ritual."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In the dialogue, what is Elif doing on the Kadıköy ferry?",
          "options": [
            "Boğaz'ı seyrediyor ve çay içiyor",
            "Uykuda ve müzik dinlemiyor",
            "Ofiste rapor yazıyor",
            "Araba sürüyor"
          ],
          "answerIndex": 0,
          "explanation": "Elif states: 'Boğaz'ı seyrediyorum ve sıcak çay içiyorum.'"
        },
        {
          "prompt": "Why isn't Elif working today in the dialogue?",
          "options": [
            "Bugün izinli",
            "Hasta",
            "İşini kaybetti",
            "Tembel"
          ],
          "answerIndex": 0,
          "explanation": "'Bugün izinliyim, çalışmıyorum!' = I have the day off."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'I am paying the bill.'",
          "options": [
            "Hesapta ödüyorum.",
            "Hesabı ödüyorum.",
            "Hesaptan ödüyorum.",
            "Hesap ödüyorum."
          ],
          "answerIndex": 1,
          "explanation": "hesabı = the bill (definite accusative)."
        },
        {
          "prompt": "Translate: 'Are you listening to Turkish music?' (informal)",
          "options": [
            "Türk müziği dinliyor musun?",
            "Türk müziği dinliyor muyuz?",
            "Türk müziği dinliyorlar mı?",
            "Türk müziği dinliyor musunuz?"
          ],
          "answerIndex": 0,
          "explanation": "Türk müziği dinliyor musun?"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Which sentence combines affirmative present continuous with a definite accusative direct object?",
          "options": [
            "Elif Boğaz seyrediyor.",
            "Elif Boğaz'ı seyrediyor.",
            "Elif Boğaz'da seyrediyor.",
            "Elif Boğaz'dan seyrediyor."
          ],
          "answerIndex": 1,
          "explanation": "Boğaz'ı = the Bosphorus (definite direct object with apostrophe for proper noun).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which sentence correctly demonstrates the negative present continuous?",
          "options": [
            "Bugün ofiste çalışmıyorum.",
            "Bugün ofiste çalışmamaz.",
            "Bugün ofiste çalışmasam.",
            "Bugün ofiste çalışıyorum değil."
          ],
          "answerIndex": 0,
          "explanation": "çalışmıyorum = I am not working.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What does 'Görüşürüz!' mean at the end of a conversation?",
          "options": [
            "Thank you very much.",
            "Please speak slowly.",
            "Good morning.",
            "See you! / See you later!"
          ],
          "answerIndex": 3,
          "explanation": "Görüşürüz = See you!",
          "type": "multiple-choice"
        },
        {
          "prompt": "What core grammatical pillars were mastered throughout Unit 4 in Turkish?",
          "options": [
            "Past tense -di and conditional -se only",
            "Passive voice only",
            "Present continuous (-iyor), negative (-muyor/miyor), definite accusative (-(y)ı/i/u/ü), and questions with 'mu'",
            "Numbers and alphabet only"
          ],
          "answerIndex": 2,
          "explanation": "Unit 4 core grammar foundation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 4, Lesson 5: Foundational & Structural Mastery (Vapurdan denizi ve martıları s)"
  },
  "tr-u5-l1": {
    "id": "tr-u5-l1",
    "unit": "tr-u5",
    "level": "A1",
    "objective": "Tell exact clock times using 'Saat kaç?' (What time is it?) and schedule events at specific times with 'Saat kaçta?' using locative '-de/-da/-te/-ta'.",
    "presentation": {
      "explanation": "1. Asking and Telling Time:\n   - 'Saat kaç?' (What time is it?)\n     - Exact hours: Saat sekiz (8:00), Saat iki (2:00).\n     - Half hours ('buçuk'): Saat sekiz buçuk (8:30), Saat üç buçuk (3:30). (Note: 00:30 or 12:30 is 'yarım').\n     - Quarter past ('geçe' in statements / 'geçiyor' in telling current time):\n       - Saat sekizi çeyrek geçiyor (It is 8:15).\n     - Quarter to ('kala' in statements / 'var' in telling current time):\n       - Saat dokuza çeyrek var (It is 8:45 / quarter to 9).\n\n2. Saying 'AT what time' (Saat kaçta?):\n   Attach the Locative suffix **-de / -da / -te / -ta** to the hour number:\n   - Saat sekizde (at 8:00)\n   - Saat dokuzda (at 9:00)\n   - Saat üçte (at 3:00 - voiceless consonant 'ç' triggers '-te'!).\n   - Saat sekiz buçukta (at 8:30 - 'k' triggers '-ta'!).\n\n3. Times of Day:\n   - sabah (in the morning), öğlen (at noon), öğleden sonra (in the afternoon), akşam (in the evening), gece (at night).",
      "examples": [
        {
          "target": "Saat kaç? — Saat sekiz buçuk.",
          "reading": "sah-aht kahch? — sah-aht seh-keez boo-chook.",
          "translation": "What time is it? — It is 8:30."
        },
        {
          "target": "Ders saat kaçta başlıyor? — Saat dokuzda başlıyor.",
          "reading": "dehrs sah-aht kahch-tah bahsh-luh-yohr? — sah-aht doh-kooz-dah bahsh-luh-yohr.",
          "translation": "At what time does the lesson start? — It starts at 9:00."
        },
        {
          "target": "Sabahları saat yedide uyanıyorum.",
          "reading": "sah-bah-lah-ruh sah-aht yeh-dee-deh oo-yah-nuh-yoh-room.",
          "translation": "In the mornings I wake up at 7:00."
        },
        {
          "target": "Akşam saat sekizde buluşuyoruz.",
          "reading": "ahk-shahm sah-aht seh-keez-deh boo-loo-shoo-yoh-rooz.",
          "translation": "We are meeting in the evening at 8:00."
        }
      ],
      "mnemonics": [
        "Fıstıkçı Şahap consonant assimilation: numbers ending in voiceless consonants (3 -> üç, 4 -> dört, 5 -> beş) take -te/-ta instead of -de/-da! (saat üçte, saat beşte).",
        "buçuk = 'half' (think of a chunk split in half!)."
      ],
      "culturalNotes": [
        "In Turkey, the phrase 'Saat kaç?' is not just for clocks; punctuality for business is high, but social gatherings in the evening (*akşam yemeği*, *çay saati*) are flexible and relaxed."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you say 'at 3 o'clock' in Turkish?",
          "options": [
            "saat üçde",
            "saat üçda",
            "saat üçta",
            "saat üçte"
          ],
          "answerIndex": 3,
          "explanation": "üç + -te = saat üçte."
        },
        {
          "prompt": "How do you ask 'At what time?' in Turkish?",
          "options": [
            "Saat nasıl?",
            "Saat nerede?",
            "Saat kaçta?",
            "Saat kaç?"
          ],
          "answerIndex": 2,
          "explanation": "Saat kaçta? = At what time?"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'The meeting starts at 10:30.'",
          "options": [
            "Toplantı saat onda başlıyor.",
            "Toplantı saat on çeyrekte başlıyor.",
            "Toplantı saat on yarımda başlıyor.",
            "Toplantı saat on buçukta başlıyor."
          ],
          "answerIndex": 3,
          "explanation": "on buçukta = at 10:30."
        },
        {
          "prompt": "Which time period corresponds to 'öğleden sonra'?",
          "options": [
            "Early morning",
            "Midnight",
            "Evening sunset",
            "Afternoon"
          ],
          "answerIndex": 3,
          "explanation": "öğleden sonra = in the afternoon."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Which locative form correctly applies consonant assimilation to 'saat 5' (beş)?",
          "options": [
            "saat beşte",
            "saat beşta",
            "saat beşda",
            "saat beşde"
          ],
          "answerIndex": 0,
          "explanation": "beş ends in 'ş' (voiceless) and has front vowel 'e' -> -te: beşte.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Saat dokuza çeyrek var.'",
          "options": [
            "It is 9:15 (quarter past nine).",
            "It is 9:45.",
            "It is 8:15.",
            "It is 8:45 (quarter to nine)."
          ],
          "answerIndex": 3,
          "explanation": "dokuza çeyrek var = quarter to nine (8:45).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Akşamları saat kaçta uyuyorsun?'",
          "options": [
            "At what time do you leave work?",
            "At what time do you eat lunch?",
            "At what time do you sleep in the evenings?",
            "At what time do you wake up in the mornings?"
          ],
          "answerIndex": 2,
          "explanation": "uyuyorsun = do you sleep, akşamları = in the evenings.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What does 'buçuk' mean when telling time?",
          "options": [
            "Exact on the hour",
            "Half past",
            "Quarter to",
            "Quarter past"
          ],
          "answerIndex": 1,
          "explanation": "buçuk means half past the hour.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 5, Lesson 1: Foundational & Structural Mastery (Saat kaç? — Saat sekiz buçuk.)"
  },
  "tr-u5-l2": {
    "id": "tr-u5-l2",
    "unit": "tr-u5",
    "level": "A1",
    "objective": "Express morning and evening hygiene, preparation, and meal routines using core reflexive and intransitive action verbs.",
    "presentation": {
      "explanation": "Core Turkish daily routine verbs include:\n- uyanmak: to wake up (eyes opening)\n- kalkmak: to get up / get out of bed / stand up\n- yüzünü yıkamak: to wash one's face\n- dişlerini fırçalamak: to brush one's teeth\n- duş almak: to take a shower\n- giyinmek: to get dressed (reflexive verb with '-in-')\n- kahvaltı etmek / yapmak: to have breakfast ('kahvaltı' = coffee-under / meal before morning coffee)\n- evden çıkmak: to leave the house (ev + -den)\n- işe / okula gitmek: to go to work / school (iş + -e, okul + -a)\n- yatmak / uyumak: to lie down in bed / to sleep",
      "examples": [
        {
          "target": "Sabah yedide kalkıyorum, elimi yüzümü yıkıyorum.",
          "reading": "sah-bah yeh-dee-deh kahl-kuh-yoh-room, eh-lee-mee yew-zew-mew yuh-kuh-yoh-room.",
          "translation": "I get up at 7:00 in the morning and wash my hands and face."
        },
        {
          "target": "Duş alıyorum ve hemen giyiniyorum.",
          "reading": "doosh ah-luh-yoh-room veh heh-men gee-yee-nee-yoh-room.",
          "translation": "I take a shower and get dressed immediately."
        },
        {
          "target": "Ailemle beraber güzel bir kahvaltı yapıyoruz.",
          "reading": "ah-ee-lem-leh beh-rah-behr gew-zel beer kahh-vahl-tuh yah-puh-yoh-rooz.",
          "translation": "We have a nice breakfast together with my family."
        },
        {
          "target": "Gece saat on birde yatıyorum.",
          "reading": "geh-jeh sah-aht ohn beer-deh yah-tuh-yoh-room.",
          "translation": "I go to bed at 11:00 PM."
        }
      ],
      "mnemonics": [
        "Kahvaltı: literally 'kahve altı' (under coffee) — the meal eaten to line the stomach BEFORE drinking Turkish coffee!",
        "giyinmek: to dress oneself (reflexive '-in' suffix)."
      ],
      "culturalNotes": [
        "A traditional Turkish breakfast (*Türk kahvaltısı*) is an elaborate spread featuring white cheese (*beyaz peynir*), olives (*zeytin*), sliced cucumbers and tomatoes, honey and clotted cream (*bal-kaymak*), warm crusty bread, and endless freshly brewed Turkish tea in tulip glasses."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What does 'dişlerini fırçalamak' mean?",
          "options": [
            "to brush one's teeth",
            "to comb one's hair",
            "to wash one's face",
            "to take a shower"
          ],
          "answerIndex": 0,
          "explanation": "dişlerini fırçalamak = brush teeth."
        },
        {
          "prompt": "How do you say 'to get dressed' in Turkish?",
          "options": [
            "giyinmek",
            "soyunmak",
            "kalkmak",
            "uyanmak"
          ],
          "answerIndex": 0,
          "explanation": "giyinmek = to get dressed."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'I wake up at 6:30 and take a shower.'",
          "options": [
            "Altı buçukta uyuyorum ve duş almıyorum.",
            "Yedide kalkıyorum ve yemek yemiyorum.",
            "Altı buçukta uyanıyorum ve duş alıyorum.",
            "Sekizde işe gidiyorum."
          ],
          "answerIndex": 2,
          "explanation": "Altı buçukta uyanıyorum ve duş alıyorum."
        },
        {
          "prompt": "What does 'evden çıkmak' mean?",
          "options": [
            "to arrive home",
            "to clean the house",
            "to buy a house",
            "to leave the house"
          ],
          "answerIndex": 3,
          "explanation": "evden çıkmak = to leave / exit the house."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What is the cultural and linguistic origin of the Turkish word 'kahvaltı' (breakfast)?",
          "options": [
            "It means 'morning bread'.",
            "It is borrowed from French breakfast words.",
            "It refers only to tea drinking.",
            "It derives from 'kahve altı' (under/before coffee), the meal eaten before enjoying morning Turkish coffee."
          ],
          "answerIndex": 3,
          "explanation": "kahvaltı comes from 'kahve altı'.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate into Turkish: 'Every morning I wash my face and brush my teeth.'",
          "options": [
            "Her sabah televizyon izliyorum ve koşuyorum.",
            "Her sabah araba sürüyorum ve çalışıyorum.",
            "Her sabah yüzümü yıkıyorum ve dişlerimi fırçalıyorum.",
            "Her sabah yemek yiyorum ve uyuyorum."
          ],
          "answerIndex": 2,
          "explanation": "yüzümü yıkıyorum (wash face) + dişlerimi fırçalıyorum (brush teeth).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which verb means 'to lie down / go to bed'?",
          "options": [
            "koşmak",
            "yatmak",
            "çıkmak",
            "kalkmak"
          ],
          "answerIndex": 1,
          "explanation": "yatmak = to lie down / go to bed.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'İyi uykular!'",
          "options": [
            "Sleep well! / Sweet dreams!",
            "Bon appétit!",
            "Have a good workday!",
            "Good morning!"
          ],
          "answerIndex": 0,
          "explanation": "İyi uykular = Sleep well!",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 5, Lesson 2: Foundational & Structural Mastery (Sabah yedide kalkıyorum, elimi)"
  },
  "tr-u5-l3": {
    "id": "tr-u5-l3",
    "unit": "tr-u5",
    "level": "A1",
    "objective": "Apply Locative (-de/-da/-te/-ta) and Dative (-(y)e/-(y)a) case suffixes in Subject-Object-Verb (SOV) sentences describing movement and location in daily routines.",
    "presentation": {
      "explanation": "Turkish follows strict **Subject - Object / Adverbial - Verb (SOV)** word order. The conjugated verb ALWAYS comes at the very end of the sentence!\n\n1. Locative Case (-de / -da / -te / -ta = IN / AT / ON):\n   - Answers 'Nerede?' (Where at?):\n   - evde (at home), işte (at work - 'ş' triggers '-te'), ofiste (in the office), sokakta (on the street).\n   - Ben evde dinleniyorum. (I am resting at home.)\n\n2. Dative Case (-(y)e / -(y)a = TO / TOWARDS):\n   - Answers 'Nereye?' (Where to?):\n   - eve (to home), işe (to work), okula (to school), parka (to the park), markete (to the market).\n   - Buffer 'y' after vowels: sinemaya (to cinema), bankaya (to the bank).\n   - Consonant voicing: mutfak -> mutfağa (to the kitchen), sokak -> sokağa.\n   - Biz her sabah işe metroyla gidiyoruz. (We go to work by metro every morning.)",
      "examples": [
        {
          "target": "Ahmet her gün saat sekizde işe gidiyor.",
          "reading": "ah-met hehr gewn sah-aht seh-keez-deh ee-sheh gee-dee-yohr.",
          "translation": "Ahmet goes to work at eight o'clock every day."
        },
        {
          "target": "Hafta sonu evde dinleniyoruz ve film izliyoruz.",
          "reading": "hahf-tah soh-noo ev-deh deen-leh-nee-yoh-rooz veh feelm eez-lee-yoh-rooz.",
          "translation": "On the weekend we rest at home and watch movies."
        },
        {
          "target": "İşten sonra markete uğruyorum.",
          "reading": "eesh-ten soh-nrah mahr-keh-teh ooh-roo-yoh-room.",
          "translation": "After work I stop by the grocery store."
        },
        {
          "target": "Çocuklar bahçede top oynuyorlar.",
          "reading": "choh-dzhook-lahr bahhh-cheh-deh tohp oy-noo-yohr-lahr.",
          "translation": "The children are playing ball in the garden."
        }
      ],
      "mnemonics": [
        "Locative -de/-da = STATIONARY anchor (staying IN/AT a place).",
        "Dative -e/-a = ARROW pointing towards a destination (moving TO a place).",
        "SOV Golden Rule: Verb is the anchor at the very end!"
      ],
      "culturalNotes": [
        "The neighborhood market (*bakkal*) or weekly bazaar (*pazar*) is an essential stop on the commute home (*eve dönüş*), where neighbors greet the shopkeeper with 'Kolay gelsin!' (May it come easy!)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which case suffix is used for 'to work' in 'I am going to work'?",
          "options": [
            "işte",
            "işten",
            "işi",
            "işe"
          ],
          "answerIndex": 3,
          "explanation": "iş + -e = işe (to work)."
        },
        {
          "prompt": "What is the locative 'at home' form of 'ev'?",
          "options": [
            "eve",
            "evden",
            "evi",
            "evde"
          ],
          "answerIndex": 3,
          "explanation": "ev + -de = evde (at home)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'We are resting at the café.'",
          "options": [
            "Kafede dinleniyoruz.",
            "Kafeye dinleniyoruz.",
            "Kafeden dinleniyoruz.",
            "Kafeyi dinleniyoruz."
          ],
          "answerIndex": 0,
          "explanation": "kafe + -de = kafede (at the café)."
        },
        {
          "prompt": "Arrange into correct Turkish SOV order: 'gidiyorum' (Verb), 'Ben' (Subject), 'okula' (Dative Object):",
          "options": [
            "Ben okula gidiyorum.",
            "Ben gidiyorum okula.",
            "Gidiyorum okula ben.",
            "Okula gidiyorum ben."
          ],
          "answerIndex": 0,
          "explanation": "Standard Turkish order is Subject + Object/Adverbial + Verb."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What is the canonical word order in Turkish declarative sentences?",
          "options": [
            "SVO: Subject + Verb + Object",
            "OVS: Object + Verb + Subject",
            "SOV: Subject + Object/Adverbial + Verb",
            "VSO: Verb + Subject + Object"
          ],
          "answerIndex": 2,
          "explanation": "Turkish is an SOV language with sentence-final verbs.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Choose the correct sentence for 'Selin is walking to the park':",
          "options": [
            "Selin parkı yürüyor.",
            "Selin parka yürüyor.",
            "Selin parkta yürüyor.",
            "Selin parktan yürüyor."
          ],
          "answerIndex": 1,
          "explanation": "park + -a (dative destination) -> Selin parka yürüyor.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Bugün bütün gün ofiste çalışıyorum.'",
          "options": [
            "Today I am working in the office all day.",
            "Today I am not going to the office.",
            "Today I am shopping in the market.",
            "Today I am cleaning my home."
          ],
          "answerIndex": 0,
          "explanation": "bütün gün = all day, ofiste = in the office, çalışıyorum = I work.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What happens to the letter 'k' in 'mutfak' when adding the dative suffix '-a'?",
          "options": [
            "It becomes 'g': mutfaga",
            "It stays 'k': mutfaka",
            "It disappears: mutfaa",
            "It softens to 'ğ': mutfağa"
          ],
          "answerIndex": 3,
          "explanation": "Intervocalic 'k' voices to 'ğ' (mutfağa).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 5, Lesson 3: Foundational & Structural Mastery (Ahmet her gün saat sekizde işe)"
  },
  "tr-u5-l4": {
    "id": "tr-u5-l4",
    "unit": "tr-u5",
    "level": "A1",
    "objective": "Sequence routine events using ablative temporal postpositions '-den önce' (before) and '-den sonra' (after).",
    "presentation": {
      "explanation": "To connect and sequence events chronologically in Turkish, use the Ablative postposition constructions:\n1. Noun + Ablative (-den/-dan/-ten/-tan) + **önce** = BEFORE [Noun]:\n   - kahvaltıdan önce: before breakfast\n   - dersten önce: before class ('s' triggers '-ten')\n   - işten önce: before work\n   - Kahvaltıdan önce spor yapıyorum. (Before breakfast I exercise.)\n\n2. Noun + Ablative (-den/-dan/-ten/-tan) + **sonra** = AFTER [Noun]:\n   - yemekten sonra: after eating / after the meal\n   - işten sonra: after work\n   - spordan sonra: after sports\n   - İşten sonra arkadaşlarla buluşuyoruz. (After work we meet with friends.)\n\n3. Standalone Adverbs:\n   - önce (first / previously): Önce duş alıyorum... (First I shower...)\n   - sonra / daha sonra (then / afterwards): ...sonra kahvaltı yapıyorum. (...then I have breakfast.)",
      "examples": [
        {
          "target": "İşten önce bir fincan Türk kahvesi içiyorum.",
          "reading": "eesh-ten ohn-jeh beer feen-zhahn tewrk kahhh-veh-see ee-chee-yoh-room.",
          "translation": "Before work I drink a cup of Turkish coffee."
        },
        {
          "target": "Yemekten sonra Türk çayı içmek bir gelenektir.",
          "reading": "yeh-mek-ten soh-nrah tewrk chah-yuh eech-mek beer geh-leh-nek-teer.",
          "translation": "Drinking Turkish tea after a meal is a tradition."
        },
        {
          "target": "Önce ödevlerimi yapıyorum, sonra televizyon izliyorum.",
          "reading": "ohn-jeh oh-dev-leh-ree-mee yah-puh-yoh-room, soh-nrah teh-leh-veez-yohn eez-lee-yoh-room.",
          "translation": "First I do my homework, then I watch television."
        },
        {
          "target": "Spordan sonra kendimi çok enerjik hissediyorum.",
          "reading": "spohr-dahn soh-nrah ken-dee-mee chohk eh-nehr-zheek hees-seh-dee-yoh-room.",
          "translation": "After sports I feel very energetic."
        }
      ],
      "mnemonics": [
        "Ablative (-den) is mandatory with önce/sonra: You are starting 'FROM' (den) that event and looking before or after it!",
        "önce = 'ahead / before'; sonra = 'subsequent / after'."
      ],
      "culturalNotes": [
        "Serving hot tea (*çay*) immediately after lunch or dinner (*yemekten sonra*) is universal in Turkish hospitality and restaurants — it is usually served complimentary (*ikram*)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you say 'after work' in Turkish?",
          "options": [
            "işten sonra",
            "işte sonra",
            "işi sonra",
            "işe sonra"
          ],
          "answerIndex": 0,
          "explanation": "iş + -ten + sonra = işten sonra."
        },
        {
          "prompt": "How do you say 'before breakfast'?",
          "options": [
            "kahvaltıdan önce",
            "kahvaltıda önce",
            "kahvaltıyı önce",
            "kahvaltıya önce"
          ],
          "answerIndex": 0,
          "explanation": "kahvaltı + -dan + önce = kahvaltıdan önce."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'First I study, then I sleep.'",
          "options": [
            "Önce ders çalışıyorum, sonra uyuyorum.",
            "Uykudan sonra ders çalışmıyorum.",
            "Sonra ders çalışıyorum, önce uyuyorum.",
            "Dersten önce uyuyorum."
          ],
          "answerIndex": 0,
          "explanation": "Önce ... sonra ..."
        },
        {
          "prompt": "Translate: 'yemekten önce'",
          "options": [
            "before the meal / before eating",
            "after the meal",
            "without food",
            "during the meal"
          ],
          "answerIndex": 0,
          "explanation": "yemekten önce = before the meal."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Which case suffix must precede the postpositions 'önce' (before) and 'sonra' (after)?",
          "options": [
            "Dative case",
            "Ablative case",
            "Locative case",
            "Accusative case"
          ],
          "answerIndex": 1,
          "explanation": "önce and sonra govern the Ablative case.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Dersten sonra kütüphaneye gidiyoruz.'",
          "options": [
            "After class we are going to the library.",
            "Before class we are in the library.",
            "During class we read library books.",
            "We never go to the library."
          ],
          "answerIndex": 0,
          "explanation": "dersten sonra = after class, kütüphaneye = to the library.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Sabahları kahvaltıdan önce koşuyorum.'",
          "options": [
            "I never run in the morning.",
            "In the mornings I run after breakfast.",
            "In the evenings I eat breakfast.",
            "In the mornings I run before breakfast."
          ],
          "answerIndex": 3,
          "explanation": "kahvaltıdan önce = before breakfast.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Choose the correct sequencing phrase for 'First we cook, after that we eat':",
          "options": [
            "Yemekten önce yemek pişirmiyoruz.",
            "Sonra yemek pişiriyoruz, önce yiyoruz.",
            "Önce yemek pişiriyoruz, daha sonra yiyoruz.",
            "Yemekten sonra pişiriyoruz."
          ],
          "answerIndex": 2,
          "explanation": "Önce ... daha sonra ...",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 5, Lesson 4: Foundational & Structural Mastery (İşten önce bir fincan Türk kah)"
  },
  "tr-u5-l5": {
    "id": "tr-u5-l5",
    "unit": "tr-u5",
    "level": "A1",
    "objective": "Synthesize clock times, routine verbs, locative/dative case suffixes, and temporal sequencers into a rich Turkish daily life dialogue and narrative.",
    "presentation": {
      "explanation": "In this capstone lesson of Unit 5, we unite all competencies:\n1. Clock times and schedule points (saat yedide, sekiz buçukta, saat kaçta?).\n2. Routine action verbs (kalkmak, yüzünü yıkamak, duş almak, giyinmek, kahvaltı yapmak, yatmak).\n3. Spatial Locative (-de) and Dative (-e) cases in SOV structure (evde dinlenmek, işe gitmek, sahilde yürümek).\n4. Temporal postpositions (-den önce, -den sonra, önce, sonra).\n\nConversational Dialogue in Izmir (Alsancak & Kordon Promenade):\n- Emre: *Selam Zeynep! İzmir'de tipik bir günün nasıl geçiyor?* (Hi Zeynep! How does a typical day in Izmir go for you?)\n- Zeynep: *Sabah saat 07:00'de uyanıyorum. Önce elimi yüzümü yıkıyorum ve balkonda taze boyoz ile çay içiyorum. Saat 08:15'te evden çıkıyorum ve vapurla Konak'a geçiyorum.*\n- Emre: *İşin saat kaçta başlıyor ve kaçta bitiyor?*\n- Zeynep: *Mesaim saat 09:00'da başlıyor, 18:00'de bitiyor. İşten sonra genellikle Kordon'da yürüyüş yapıyorum veya arkadaşlarımla Alsancak'ta bir kafede oturuyorum. Saat 23:00'te yatıyorum.*\n- Emre: *Deniz kenarında yaşamak ve çalışmak harika bir duygu!*",
      "examples": [
        {
          "target": "Her sabah saat sekizde işe başlıyorum ve akşam altıda çıkıyorum.",
          "reading": "hehr sah-bah sah-aht seh-keez-deh ee-sheh bahsh-luh-yoh-room veh ahk-shahm ahl-tuh-dah chuh-kuh-yoh-room.",
          "translation": "Every morning I start work at 8:00 and leave at 6:00 in the evening."
        },
        {
          "target": "İşten sonra sahilde yürümek bütün yorgunluğu alıyor.",
          "reading": "eesh-ten soh-nrah sah-heel-deh yew-rew-mek bew-tewn yohr-goon-loo-oo ah-luh-yohr.",
          "translation": "Walking on the coast after work takes away all tiredness."
        },
        {
          "target": "Yatmadan önce mutlaka biraz kitap okuyorum.",
          "reading": "yaht-mah-dahn ohn-jeh moot-lah-kah bee-rahz kee-tahp oh-koo-yoh-room.",
          "translation": "Before going to bed I definitely read some book."
        },
        {
          "target": "Hafta sonları geç uyanıyoruz ve uzun bir kahvaltı yapıyoruz.",
          "reading": "hahf-tah sohn-lah-ruh gehch oo-yah-nuh-yoh-rooz veh oo-zoon beer kahh-vahl-tuh yah-puh-yoh-rooz.",
          "translation": "On weekends we wake up late and have a long breakfast."
        }
      ],
      "mnemonics": [
        "Boyoz = iconic Izmir pastry eaten hot with hard-boiled eggs for breakfast.",
        "Kordon = Izmir's famous palm-lined seaside boulevard."
      ],
      "culturalNotes": [
        "Izmir's lifestyle is famous across Turkey for its relaxed, Aegean coastal pace. Commuting via passenger ferries (*İzdeniz vapurları*) across the Gulf of Izmir while feeling the sea breeze (*İmbat rüzgarı*) is a daily joy."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In the dialogue, what does Zeynep eat for breakfast on her balcony in Izmir?",
          "options": [
            "Taze boyoz ve çay",
            "Sadece kahve",
            "Meyve suyu ve tost",
            "Çorba"
          ],
          "answerIndex": 0,
          "explanation": "Zeynep says: 'taze boyoz ile çay içiyorum.'"
        },
        {
          "prompt": "How does Zeynep commute to Konak in Izmir?",
          "options": [
            "Vapurla",
            "Arabayla",
            "Otobüsle",
            "Yürüyerek"
          ],
          "answerIndex": 0,
          "explanation": "Zeynep states: 'vapurla Konak'a geçiyorum.'"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'After work, I walk on the seaside with my friends.'",
          "options": [
            "İşte arkadaşlarımla sahilde yürüyorum.",
            "İşten sonra arkadaşlarımla sahilde yürüyorum.",
            "Evde arkadaşlarımla sahilde yürüyorum.",
            "İşten önce arkadaşlarımla sahilde yürüyorum."
          ],
          "answerIndex": 1,
          "explanation": "İşten sonra (after work) + sahilde (on coast/seaside) + yürüyorum (I walk)."
        },
        {
          "prompt": "Translate: 'Saat 23:00'te yatıyorum.'",
          "options": [
            "I go to bed at 11:00 PM.",
            "I start work at 11:00 PM.",
            "I leave home at 11:00 AM.",
            "I wake up at 11:00 AM."
          ],
          "answerIndex": 0,
          "explanation": "yatıyorum = I go to bed / lie down."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Which sentence demonstrates accurate SOV word order, time locative, and temporal postposition usage in Turkish?",
          "options": [
            "Sabah saat yedide kalkıyorum ve kahvaltıdan sonra işe gidiyorum.",
            "Sabah saat yedide gidiyorum işe kahvaltıdan sonra.",
            "Kalkıyorum saat yedide ve gidiyorum kahvaltıdan sonra.",
            "İşe saat yedide kalkıyorum sonra kahvaltıdan gidiyorum."
          ],
          "answerIndex": 0,
          "explanation": "Follows proper SOV order with verb final: kalkıyorum, işe gidiyorum.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What does 'İşten sonra ne yapıyorsun?' mean?",
          "options": [
            "Where do you work?",
            "What time do you start work?",
            "Why aren't you working?",
            "What are you doing after work?"
          ],
          "answerIndex": 3,
          "explanation": "İşten sonra = after work, ne yapıyorsun = what are you doing?",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Her akşam parkta spor yapıyorum.'",
          "options": [
            "Every morning I sleep in the park.",
            "Every weekend I work in the park.",
            "Every evening I exercise in the park.",
            "I never go to the park."
          ],
          "answerIndex": 2,
          "explanation": "her akşam = every evening, parkta = in the park (locative), spor yapıyorum = I exercise.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What core competencies were mastered across Unit 5 in Turkish?",
          "options": [
            "Past tense -miş and future tense -ecek only",
            "Telling time & schedule points with locative (-de/te), routine action verbs, spatial Locative & Dative cases in SOV syntax, and temporal postpositions",
            "Alphabet and numbers only",
            "Conditional clauses only"
          ],
          "answerIndex": 1,
          "explanation": "Comprehensive Unit 5 routine and case mastery.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 5, Lesson 5: Foundational & Structural Mastery (Her sabah saat sekizde işe baş)"
  },
  "tr-u6-l1": {
    "id": "tr-u6-l1",
    "unit": "tr-u6",
    "level": "A1",
    "objective": "Identify and classify staple Turkish food, traditional specialty dishes, and beverage vocabulary.",
    "presentation": {
      "explanation": "Turkish culinary culture (*Türk Mutfağı*) is celebrated worldwide for its rich variety of kebabs, soups, vegetable casseroles (*zeytinyağlılar*), and drinks:\n\n1. Food Staples & Traditional Dishes:\n   - ekmek (bread: taze ekmek = fresh bread, pide = pita bread, simit = sesame bread ring)\n   - peynir (cheese: beyaz peynir = feta-like white cheese, kaşar = aged yellow cheese)\n   - et (meat: dana eti = beef, kuzu eti = lamb)\n   - tavuk (chicken)\n   - balık (fish)\n   - köfte (grilled meatballs / spiced patties)\n   - kebap (kebab: Adana kebap = spicy minced kebab, Urfa kebap = mild kebab, döner = vertical rotisserie meat)\n   - pilav (buttery rice / bulgur pilaf)\n   - çorba (soup: mercimek çorbası = red lentil soup)\n   - salata (salad: çoban salatası = shepherd's salad with tomatoes, cucumbers, and onions)\n\n2. Beverages (İçecekler):\n   - su (water)\n   - çay (tea - served in tulip-shaped glasses / *ince belli bardak*)\n   - Türk kahvesi (Turkish coffee: sade = no sugar, az şekerli = little sugar, orta = medium, şekerli = sweet)\n   - ayran (cold salted yogurt drink — the national beverage accompaniment for meat/kebab!)\n   - taze portakal suyu (fresh orange juice)",
      "examples": [
        {
          "target": "Bir porsiyon köfte ve bir bardak ayran istiyorum.",
          "reading": "beer pohr-see-yohn koef-teh veh beer bahr-dahk eye-rahn ees-tee-yoh-room.",
          "translation": "I want one portion of meatballs and a glass of ayran."
        },
        {
          "target": "Sıcak bir mercimek çorbası ve taze ekmek lütfen.",
          "reading": "suh-zhahk beer mehr-zjee-mek chohr-bah-suh veh tah-zeh ek-mek lewt-fen.",
          "translation": "A hot lentil soup and fresh bread, please."
        },
        {
          "target": "Yemekten sonra orta şekerli Türk kahvesi içiyoruz.",
          "reading": "yeh-mek-ten soh-nrah ohr-tah sheh-kehr-lee tewrk kahhh-veh-see ee-chee-yoh-rooz.",
          "translation": "After the meal we drink medium-sweet Turkish coffee."
        },
        {
          "target": "Balıkçıdan taze balık alıyoruz.",
          "reading": "bah-luhk-chuh-dahn tah-zeh bah-luhk ah-luh-yoh-rooz.",
          "translation": "We buy fresh fish from the fishmonger."
        }
      ],
      "mnemonics": [
        "Ayran = cold salted yogurt drink (essential pairing with kebab!).",
        "Mercimek = lentil (mercimek çorbası is Turkey's #1 comfort soup).",
        "Orta = medium (orta kahve = medium sugar coffee)."
      ],
      "culturalNotes": [
        "Turkish coffee (*Türk kahvesi*) is brewed slowly in a long-handled copper pot (*cezve*) and served unfiltered with a dense foam (*köpük*) on top, accompanied by a small glass of water and Turkish delight (*lokum*)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What is the traditional beverage paired with kebabs and savory dishes in Turkey?",
          "options": [
            "Limonata",
            "Sıcak süt",
            "Portakal suyu",
            "Ayran"
          ],
          "answerIndex": 3,
          "explanation": "Ayran is the national savory meal beverage."
        },
        {
          "prompt": "How do you specify 'medium sugar' when ordering Turkish coffee?",
          "options": [
            "az şekerli",
            "şekerli",
            "orta",
            "sade"
          ],
          "answerIndex": 2,
          "explanation": "orta = medium sugar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'fresh bread and white cheese'",
          "options": [
            "sıcak çorba ve köfte",
            "soğuk su ve pilav",
            "balık ve salata",
            "taze ekmek ve beyaz peynir"
          ],
          "answerIndex": 3,
          "explanation": "taze ekmek = fresh bread, beyaz peynir = white cheese."
        },
        {
          "prompt": "Which Turkish soup is made of red lentils?",
          "options": [
            "tavuk çorbası",
            "balık çorbası",
            "domates çorbası",
            "mercimek çorbası"
          ],
          "answerIndex": 3,
          "explanation": "mercimek çorbası = lentil soup."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the Turkish food staples: ekmek, et, pilav, su:",
          "options": [
            "cheese, chicken, soup, tea",
            "salad, fish, meatballs, coffee",
            "yogurt, eggs, butter, milk",
            "bread, meat, rice, water"
          ],
          "answerIndex": 3,
          "explanation": "Staple food items.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What does 'sade Türk kahvesi' mean?",
          "options": [
            "Turkish coffee with extra sugar",
            "Turkish coffee with milk",
            "Black Turkish coffee with NO sugar",
            "Cold iced coffee"
          ],
          "answerIndex": 2,
          "explanation": "sade = plain / without sugar.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Bir porsiyon Adana kebap ve bir çoban salatası lütfen.'",
          "options": [
            "One cup of tea and a dessert, please.",
            "One portion of Adana kebab and a shepherd's salad, please.",
            "We don't want salad with our meat.",
            "Two fish plates with bread, please."
          ],
          "answerIndex": 1,
          "explanation": "Adana kebap + çoban salatası.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is 'köfte' in Turkish cuisine?",
          "options": [
            "Seasoned grilled meatballs / minced patties",
            "A sweet syrup pastry",
            "A vegetable casserole",
            "A type of fried fish"
          ],
          "answerIndex": 0,
          "explanation": "köfte is seasoned meatballs.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 6, Lesson 1: Foundational & Structural Mastery (Bir porsiyon köfte ve bir bard)"
  },
  "tr-u6-l2": {
    "id": "tr-u6-l2",
    "unit": "tr-u6",
    "level": "A1",
    "objective": "Order food politely in Turkish restaurants using 'Alabilir miyim?' (May I have?), request the bill ('Hesap lütfen'), and inquire about card payment.",
    "presentation": {
      "explanation": "In Turkish dining culture, ordering uses polite request frames:\n\n1. Ordering Formulas:\n   - ... alabilir miyim? (May I have... / Can I take...? — most polite & common!):\n     - Menüyü alabilir miyim? (May I have the menu?)\n     - Bir çay alabilir miyim? (May I have a tea?)\n   - ... istiyorum (I want... / I would like...):\n     - Bir porsiyon döner istiyorum, lütfen.\n   - Ne tavsiye edersiniz? (What do you recommend?)\n   - Bakar mısınız? (Excuse me! / Would you look here? — standard polite call to a server).\n\n2. Asking for the Check & Paying:\n   - Hesap, lütfen! (The bill, please!)\n   - Hesabı alabilir miyiz? (May we have the bill?)\n   - Kredi kartıyla ödeyebilir miyim? (Can I pay with credit card?)\n   - Üstü kalsın! (Keep the change!)\n   - Bahşiş (tip / gratuity).",
      "examples": [
        {
          "target": "Bakar mısınız? Menüyü alabilir miyiz, lütfen?",
          "reading": "bah-kahr muh-suh-nuhz? meh-new-yew ah-lah-bee-leer mee-yeez, lewt-fen?",
          "translation": "Excuse me! May we have the menu, please?"
        },
        {
          "target": "Ben bir mercimek çorbası ve ızgara köfte alabilir miyim?",
          "reading": "ben beer mehr-zjee-mek chohr-bah-suh veh ooz-gah-rah koef-teh ah-lah-bee-leer mee-yeem?",
          "translation": "May I have a lentil soup and grilled meatballs?"
        },
        {
          "target": "Hesabı alabilir miyiz? Kartla ödemek istiyoruz.",
          "reading": "heh-sah-buh ah-lah-bee-leer mee-yeez? kahrt-lah oh-deh-mek ees-tee-yoh-rooz.",
          "translation": "May we have the bill? We want to pay by card."
        },
        {
          "target": "Yemekler çok lezzetliydi, elinize sağlık!",
          "reading": "yeh-mek-lehr chohk lehz-zet-lee-ydee, eh-lee-nee-zeh sah-luhk!",
          "translation": "The food was very delicious, health to your hands!"
        }
      ],
      "mnemonics": [
        "Bakar mısınız? = 'Would you look?' (The universal, polite Turkish way to get a waiter's attention).",
        "Alabilir miyim? = 'Can I take / May I have?' (al- = take, -abil- = can).",
        "Üstü kalsın! = 'Let the rest remain!' (Keep the change!)."
      ],
      "culturalNotes": [
        "Calling out 'Bakar mısınız?' with a polite nod is standard in Turkish restaurants (*lokanta / restoran*). Snapping fingers or waving aggressively is considered disrespectful."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you politely get a waiter's attention in Turkey?",
          "options": [
            "Bakar mısınız?",
            "Hey sen!",
            "Buraya gel!",
            "Garson çabuk!"
          ],
          "answerIndex": 0,
          "explanation": "'Bakar mısınız?' is the standard courteous call."
        },
        {
          "prompt": "How do you ask 'May I have the menu?' in Turkish?",
          "options": [
            "Menüyü alabilir miyim?",
            "Menü nerede?",
            "Menüyü oku!",
            "Menü yok mu?"
          ],
          "answerIndex": 0,
          "explanation": "Menüyü alabilir miyim? = May I have the menu?"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Can I pay by credit card?'",
          "options": [
            "Nakit ödeyebilir miyim?",
            "Hesap ne kadar?",
            "Kredi kartıyla ödeyebilir miyim?",
            "Kartım yok."
          ],
          "answerIndex": 2,
          "explanation": "Kredi kartıyla ödeyebilir miyim? = Can I pay by credit card?"
        },
        {
          "prompt": "Translate: 'Üstü kalsın!'",
          "options": [
            "Give me my receipt!",
            "The food is bad!",
            "I want a discount!",
            "Keep the change!"
          ],
          "answerIndex": 3,
          "explanation": "Üstü kalsın = Keep the change!"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What is the polite phrase meaning 'May we have the check?' in Turkish?",
          "options": [
            "Yemek bitti!",
            "Biz gidiyoruz!",
            "Hesabı alabilir miyiz?",
            "Menüyü alabilir miyiz?"
          ],
          "answerIndex": 2,
          "explanation": "Hesabı alabilir miyiz = May we have the bill?",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Ne tavsiye edersiniz?'",
          "options": [
            "Where is the kitchen?",
            "What do you recommend?",
            "Is the restaurant open?",
            "How much is this?"
          ],
          "answerIndex": 1,
          "explanation": "Ne tavsiye edersiniz? = What do you recommend?",
          "type": "multiple-choice"
        },
        {
          "prompt": "Choose the most courteous sentence for 'I would like a Turkish tea, please':",
          "options": [
            "Bir Türk çayı alabilir miyim, lütfen?",
            "Çay istiyorum hemen!",
            "Çay nerede?",
            "Çay ver bana!"
          ],
          "answerIndex": 0,
          "explanation": "Bir Türk çayı alabilir miyim, lütfen? is the most polite phrasing.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What does the phrase 'Elinize sağlık!' express when dining in Turkey?",
          "options": [
            "A request to wash hands before eating.",
            "Asking for the bill.",
            "Saying goodbye to other customers.",
            "Deep gratitude and compliments to the cook/host: 'Health to your hands!'"
          ],
          "answerIndex": 3,
          "explanation": "Elinize sağlık compliments the person who cooked the meal.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 6, Lesson 2: Foundational & Structural Mastery (Bakar mısınız? Menüyü alabilir)"
  },
  "tr-u6-l3": {
    "id": "tr-u6-l3",
    "unit": "tr-u6",
    "level": "A1",
    "objective": "Express likes, dislikes, and culinary preferences using 'sevmek' (to like/love) and 'istemek' (to want) with direct objects and comparative clauses.",
    "presentation": {
      "explanation": "In Turkish, expressing culinary desires and fondness uses two high-frequency verbs:\n\n1. The Verb 'istemek' (to want):\n   - Takes bare nouns (indefinite) or accusative nouns (definite) in SOV order:\n   - Ben çay **istiyorum** (I want tea).\n   - Biz tatlı **istiyoruz** (We want dessert).\n   - Ne içmek **istiyorsunuz**? (What do you want to drink? — with infinitive).\n\n2. The Verb 'sevmek' (to like / love):\n   - Direct objects take the **Accusative case** (-(y)ı/-(y)i/-(y)u/-(y)ü):\n   - Türk mutfağını çok **seviyorum**. (I love Turkish cuisine.)\n   - Balık **sevmiyorum**. (I don't like fish.)\n   - Kahve **sever misin**? (Do you like coffee?)\n\n3. Expressing Comparison with Ablative '-den / -dan daha çok':\n   - Çayı kahveden **daha çok** seviyorum. (I like tea MORE than coffee).\n   - Kebap pideden **daha lezzetli**. (Kebab is more delicious than pide).",
      "examples": [
        {
          "target": "Ben zeytinyağlı yemekleri çok seviyorum.",
          "reading": "ben zey-teen-yah-luh yeh-mek-leh-ree chohk seh-vee-yoh-room.",
          "translation": "I love olive oil vegetable dishes very much."
        },
        {
          "target": "Et yemiyorum, çünkü ben vejetaryenim.",
          "reading": "eht yeh-mee-yoh-room, chew-n-kew ben veh-zheh-tahr-yen-eem.",
          "translation": "I don't eat meat, because I am a vegetarian."
        },
        {
          "target": "Türk çayını kahveden daha çok seviyorum.",
          "reading": "tewrk chah-yuh-nuh kahhh-veh-den dah-hah chohk seh-vee-yoh-room.",
          "translation": "I like Turkish tea more than coffee."
        },
        {
          "target": "Akşam yemeğinde ne yemek istiyorsunuz?",
          "reading": "ahk-shahm yeh-meh-yeen-deh neh yeh-mek ees-tee-yohr-soo-nooz?",
          "translation": "What do you want to eat for dinner?"
        }
      ],
      "mnemonics": [
        "sevmek = to love/like (Seni seviyorum = I love you; Çayı seviyorum = I like tea).",
        "daha çok = 'more' (daha = more, çok = a lot).",
        "istemek = to want (İstiyorum!)."
      ],
      "culturalNotes": [
        "*Zeytinyağlılar* (vegetables braised in olive oil with onions and tomatoes, served cold or at room temperature, such as stuffed vine leaves / *sarma* and green beans / *taze fasulye*) are a cornerstone of Aegean and Mediterranean Turkish cuisine."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you say 'I love Turkish food' in Turkish?",
          "options": [
            "Türk yemekleri çok istiyorum.",
            "Türk yemeklerinde seviyorum.",
            "Türk yemeklerinden istiyorum.",
            "Türk yemeklerini çok seviyorum."
          ],
          "answerIndex": 3,
          "explanation": "Türk yemeklerini çok seviyorum."
        },
        {
          "prompt": "How do you express 'I like tea more than coffee'?",
          "options": [
            "Çay kahveye seviyorum.",
            "Kahveyi çayda seviyorum.",
            "Çay ve kahve sevmiyorum.",
            "Çayı kahveden daha çok seviyorum."
          ],
          "answerIndex": 3,
          "explanation": "X-i Y-den daha çok sevmek = to like X more than Y."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'I don't like spicy food.'",
          "options": [
            "Acı yemek sevmiyorum.",
            "Tatlı yemek sevmiyorum.",
            "Tuzlu yemek istiyorum.",
            "Sıcak yemek seviyorum."
          ],
          "answerIndex": 0,
          "explanation": "acı yemek = spicy food, sevmiyorum = I don't like."
        },
        {
          "prompt": "Translate: 'Ne içmek istiyorsunuz?'",
          "options": [
            "What do you want to drink?",
            "What do you want to eat?",
            "Where do you want to go?",
            "How much do you want to pay?"
          ],
          "answerIndex": 0,
          "explanation": "Ne içmek istiyorsunuz? = What do you want to drink?"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What case suffix does the object of 'sevmek' (to like/love) typically take when specific?",
          "options": [
            "Ablative case",
            "Accusative case (-(y)ı / -(y)i / -(y)u / -(y)ü)",
            "Dative case",
            "Locative case"
          ],
          "answerIndex": 1,
          "explanation": "'sevmek' is a transitive verb governing the Accusative case.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Baklavayı çok seviyorum ama çok tatlı.'",
          "options": [
            "I love baklava very much, but it is very sweet.",
            "We don't eat baklava.",
            "I dislike baklava because it is spicy.",
            "Baklava is cheap and cold."
          ],
          "answerIndex": 0,
          "explanation": "Baklavayı çok seviyorum = I love baklava, ama çok tatlı = but it's very sweet.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How do you say 'I am a vegetarian' in Turkish?",
          "options": [
            "Ben garsonum.",
            "Ben açım.",
            "Ben aşçıyım.",
            "Ben vejetaryenim."
          ],
          "answerIndex": 3,
          "explanation": "Ben vejetaryenim = I am a vegetarian.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Conjugate 'istemek' for 'Biz' (We) in present continuous:",
          "options": [
            "istiyorlar",
            "istiyorum",
            "istiyoruz",
            "istiyorsun"
          ],
          "answerIndex": 2,
          "explanation": "Biz istiyoruz.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 6, Lesson 3: Foundational & Structural Mastery (Ben zeytinyağlı yemekleri çok )"
  },
  "tr-u6-l4": {
    "id": "tr-u6-l4",
    "unit": "tr-u6",
    "level": "A1",
    "objective": "Describe taste profiles, temperatures, and culinary qualities using Turkish flavor adjectives (lezzetli, nefis, sıcak, soğuk, tatlı, tuzlu, acı, ekşi).",
    "presentation": {
      "explanation": "Turkish culinary adjectives are used as predicates or modifiers before nouns:\n\nTaste & Quality Adjectives:\n- lezzetli / nefis (delicious / exquisite): Bu çorba çok lezzetli (This soup is very tasty).\n- harika / mükemmel (wonderful / excellent)\n- sıcak (hot temperature): sıcak çay\n- soğuk (cold temperature): soğuk su\n- tatlı (sweet): tatlı kurabiye / tatlı (also noun = dessert!)\n- tuzlu (salty): tuzlu ayran\n- acı (spicy / hot pungent / bitter): acı biber (hot pepper), acı sos\n- ekşi (sour): ekşi limon, ekşi yoğurt\n- taze (fresh): taze ekmek (fresh bread)\n- bayat (stale): bayat ekmek",
      "examples": [
        {
          "target": "Mercimek çorbası çok sıcak ve lezzetli.",
          "reading": "mehr-zjee-mek chohr-bah-suh chohk suh-zhahk veh lehz-zet-lee.",
          "translation": "The lentil soup is very hot and delicious."
        },
        {
          "target": "Gaziantep baklavası nefis ve çıtır çıtır!",
          "reading": "gah-zee-ahn-tep bahk-lah-vah-suh neh-fees veh chuh-tuhr chuh-tuhr!",
          "translation": "Gaziantep baklava is exquisite and super crispy!"
        },
        {
          "target": "Adana kebap acı mı? — Evet, biraz acı ama çok güzel.",
          "reading": "ah-dah-nah keh-bahp ah-dzuh muh? — eh-vet, bee-rahz ah-dzuh ah-mah chohk gew-zel.",
          "translation": "Is Adana kebab spicy? — Yes, a little spicy but very good."
        },
        {
          "target": "Lütfen soğuk bir şişe maden suyu getirin.",
          "reading": "lewt-fen soh-ook beer shee-sheh mah-den soo-yoo geh-tee-reen.",
          "translation": "Please bring a cold bottle of mineral sparkling water."
        }
      ],
      "mnemonics": [
        "Nefis = exquisite/divine (from Arabic nafs / soul-pleasing!).",
        "Acı = spicy/hot (sounds like 'ouch-ee' when you bite into a fiery chili pepper!).",
        "Çıtır çıtır = onomatopoeia for crispy/crunchy."
      ],
      "culturalNotes": [
        "Gaziantep in southeastern Turkey is a UNESCO Creative City of Gastronomy, celebrated as the world capital of pistachio baklava (*fıstıklı baklava*), made with 40 ultra-thin translucent layers of pastry."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What does 'acı' mean when describing food in Turkish?",
          "options": [
            "cold",
            "spicy / hot / pungent",
            "salty",
            "sweet"
          ],
          "answerIndex": 1,
          "explanation": "acı = spicy / hot."
        },
        {
          "prompt": "Which word means 'delicious / exquisite'?",
          "options": [
            "nefis",
            "soğuk",
            "tuzsuz",
            "bayat"
          ],
          "answerIndex": 0,
          "explanation": "nefis / lezzetli = delicious."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'The tea is hot and fresh.'",
          "options": [
            "Çay sıcak ve taze.",
            "Çay tuzlu ve ekşi.",
            "Çay soğuk ve bayat.",
            "Çay tatlı ve acı."
          ],
          "answerIndex": 0,
          "explanation": "sıcak = hot, taze = fresh."
        },
        {
          "prompt": "What is the opposite of 'taze' (fresh)?",
          "options": [
            "bayat",
            "tuzlu",
            "tatlı",
            "sıcak"
          ],
          "answerIndex": 0,
          "explanation": "bayat = stale."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the Turkish taste descriptors: tatlı, tuzlu, ekşi, acı:",
          "options": [
            "sweet, salty, sour, spicy",
            "hot, cold, dry, oily",
            "big, small, cheap, expensive",
            "fresh, stale, good, bad"
          ],
          "answerIndex": 0,
          "explanation": "Core taste descriptors.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Bu lokantanın yemekleri gerçekten çok lezzetli.'",
          "options": [
            "We don't know this restaurant.",
            "The food at this restaurant is cold and expensive.",
            "This restaurant is closed on weekends.",
            "The food at this restaurant is really very delicious."
          ],
          "answerIndex": 3,
          "explanation": "gerçekten çok lezzetli = really very delicious.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which city in Turkey is internationally famous for pistachio baklava?",
          "options": [
            "Trabzon",
            "Antalya",
            "Gaziantep",
            "Bodrum"
          ],
          "answerIndex": 2,
          "explanation": "Gaziantep is famous worldwide for its baklava.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Afiyet olsun!'",
          "options": [
            "Good morning!",
            "Bon appétit! / May it be good for your health!",
            "Thank you for the tip!",
            "See you tomorrow!"
          ],
          "answerIndex": 1,
          "explanation": "Afiyet olsun = Bon appétit / Enjoy your meal!",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 6, Lesson 4: Foundational & Structural Mastery (Mercimek çorbası çok sıcak ve )"
  },
  "tr-u6-l5": {
    "id": "tr-u6-l5",
    "unit": "tr-u6",
    "level": "A1",
    "objective": "Synthesize food vocabulary, polite ordering formulas (Alabilir miyim?), preference expressions, check requests, and cultural dining blessings in an authentic Turkish lokanta dialogue.",
    "presentation": {
      "explanation": "In this capstone lesson of Unit 6, we unite all dining competencies:\n1. Food and drink staples (mercimek çorbası, Adana kebap, çoban salatası, ayran, fıstıklı baklava, Türk kahvesi).\n2. Polite request frames (Bakar mısınız?, ...alabilir miyiz?, Menüyü alabilir miyim?).\n3. Describing tastes and preferences (Çok lezzetli, acı ama nefis, çok seviyorum).\n4. Paying and cultural blessings (Hesabı alabilir miyiz?, Kartla ödüyoruz, Üstü kalsın, Elinize sağlık!, Afiyet olsun!).\n\nConversational Dialogue in Istanbul (At a Historic Tarihi Lokanta near the Grand Bazaar):\n- Garson: *Hoş geldiniz efendim! Buyrun, menünüz. Ne arzu edersiniz?* (Welcome! Here is your menu. What would you desire?)\n- Murat: *Hoş bulduk! Başlangıç olarak iki kase süzme mercimek çorbası ve ortaya bir gavurdağı salatası alabilir miyiz?*\n- Garson: *Tabii ki. İçecek olarak ne arzu edersiniz?*\n- Selin: *İki bardak buz gibi açık ayran lütfen.*\n- Garson: *Ana yemek olarak ne hazırlayalım?*\n- Murat: *Bana bir porsiyon acılı Adana kebap, eşime ise ızgara tavuk şiş ve tereyağlı pilav lütfen.*\n- Garson: *Hemen hazırlatıyorum!*\n(After the feast / Yemekten sonra):\n- Garson: *Yemekler nasıldı efendim? Tatlı olarak taze Gaziantep baklavamız var, dener misiniz?*\n- Selin: *Her şey olağanüstü lezzetliydi! Kebap nefisti. İki porsiyon fıstıklı baklava ve iki orta Türk kahvesi alalım.*\n- Murat: *Ve hesabı alabilir miyiz? Kredi kartıyla ödeyeceğiz.*\n- Garson: *Afiyet şeker olsun! Hesabı hemen getiriyorum.*\n- Murat: *(Ödeme yapar)* *Çok teşekkür ederiz, elinize sağlık!*\n- Garson: *Biz teşekkür ederiz, yine bekleriz!*",
      "examples": [
        {
          "target": "Her şey mükemmeldi, ustanın eline sağlık!",
          "reading": "hehr shey mew-kem-mel-dee, oos-tah-nuhn eh-lee-neh sah-luhk!",
          "translation": "Everything was perfect, health to the master chef's hands!"
        },
        {
          "target": "Afiyet şeker olsun! — Çok teşekkürler!",
          "reading": "ah-fee-yet sheh-kehr ohl-soon! — chohk teh-shehk-kewr-lehr!",
          "translation": "May it bring health and sweetness! — Thank you very much!"
        },
        {
          "target": "Türk mutfağında mezeler ana yemekten önce paylaşılır.",
          "reading": "tewrk moot-fah-uhn-dah meh-zeh-lehr ah-nah yeh-mek-ten ohn-jeh pay-lah-shuh-luhr.",
          "translation": "In Turkish cuisine, appetizers (meze) are shared before the main course."
        },
        {
          "target": "Hesabı kartla ödeyebilir miyiz?",
          "reading": "heh-sah-buh kahrt-lah oh-deh-yeh-bee-leer mee-yeez?",
          "translation": "May we pay the bill with card?"
        }
      ],
      "mnemonics": [
        "Afiyet şeker olsun = poetic extension of Afiyet olsun ('May it bring health and sweet delight!').",
        "Hoş geldiniz -> Hoş bulduk (Welcome -> We find it pleasant to be here!)."
      ],
      "culturalNotes": [
        "In a traditional Turkish tradesmen's restaurant (*Esnaf Lokantası*), home-style stews and dishes are displayed in steaming trays behind a glass counter, allowing diners to point directly to what looks freshest and most tempting."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In the dialogue, what main course dishes do Murat and Selin order?",
          "options": [
            "Acılı Adana kebap ve ızgara tavuk şiş",
            "Balık ve patates",
            "Sadece makarna",
            "Pide ve çorba"
          ],
          "answerIndex": 0,
          "explanation": "Murat orders Adana kebab and Selin orders tavuk şiş."
        },
        {
          "prompt": "How does the customer compliment the restaurant staff after enjoying the meal?",
          "options": [
            "Elinize sağlık!",
            "Görüşürüz!",
            "Hesap pahalı!",
            "İstemiyorum!"
          ],
          "answerIndex": 0,
          "explanation": "'Elinize sağlık!' is the highest culinary compliment."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'May we have two medium Turkish coffees and the bill, please?'",
          "options": [
            "Kahve yok ve hesap nerede?",
            "İki orta Türk kahvesi ve hesabı alabilir miyiz, lütfen?",
            "Biz kahve içmiyoruz.",
            "İki çay ve menüyü istiyorum."
          ],
          "answerIndex": 1,
          "explanation": "İki orta Türk kahvesi ve hesabı alabilir miyiz = May we have two medium Turkish coffees and the bill?"
        },
        {
          "prompt": "Translate: 'Afiyet olsun!'",
          "options": [
            "Have a good flight!",
            "Enjoy your meal! / Bon appétit!",
            "Good night!",
            "Welcome to Istanbul!"
          ],
          "answerIndex": 1,
          "explanation": "Afiyet olsun = Enjoy your meal!"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Which sentence demonstrates accurate polite ordering, taste descriptors, and restaurant courtesy in Turkish?",
          "options": [
            "Garson gel buraya bana yemek ver çabuk.",
            "Yemek kötü ben gidiyorum.",
            "Hesap yok para vermiyorum.",
            "Bakar mısınız, bir porsiyon köfte ve ayran alabilir miyim, her şey çok lezzetliydi, elinize sağlık!"
          ],
          "answerIndex": 3,
          "explanation": "Grammatically complete, courteous Turkish restaurant ordering.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What does a customer say when responding to 'Hoş geldiniz' (Welcome)?",
          "options": [
            "Güle güle!",
            "İyi geceler!",
            "Hoş bulduk!",
            "Afiyet olsun!"
          ],
          "answerIndex": 2,
          "explanation": "Hoş bulduk is the traditional paired response to Hoş geldiniz.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Baklava çıtır çıtır ve fıstığı çok bol.'",
          "options": [
            "The baklava is stale and dry.",
            "The baklava is crispy and has plenty of pistachios.",
            "The baklava is spicy.",
            "We do not eat baklava with pistachios."
          ],
          "answerIndex": 1,
          "explanation": "çıtır çıtır = crispy, fıstığı bol = plenty of pistachios.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What core competencies were mastered across Unit 6 in Turkish?",
          "options": [
            "Food & drink staples, polite ordering with 'Alabilir miyim?', expressing preferences with 'sevmek/istemek' and comparisons, taste adjectives, and restaurant payment/tipping",
            "Passive voice only",
            "Alphabet and numbers only",
            "Optative mood conjugations only"
          ],
          "answerIndex": 0,
          "explanation": "Unit 6 comprehensive dining and hospitality synthesis.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 6, Lesson 5: Foundational & Structural Mastery (Her şey mükemmeldi, ustanın el)"
  },
  "tr-u7-l1": {
    "id": "tr-u7-l1",
    "unit": "tr-u7",
    "level": "A2",
    "objective": "Form the definite past tense (-di / -dı / -du / -dü) using 4-way vowel harmony and apply consonant assimilation (-ti / -tı / -tu / -tü) after voiceless consonants (FıSTıKÇı ŞaHaP).",
    "presentation": {
      "explanation": "Welcome to A2 Turkish! The **Görülen Geçmiş Zaman** (Definite / Witnessed Past Tense) is used to describe completed past events that you witnessed or know for certain:\n\n1. The 4-Way Vowel Harmony for Past Tense:\n   - If the last vowel of the stem is **e / i**: add **-di** (*gelmek -> gel-di*, *gitmek -> git-ti*)\n   - If the last vowel of the stem is **a / ı**: add **-dı** (*almak -> al-dı*, *bakmak -> bak-tı*)\n   - If the last vowel of the stem is **o / u**: add **-du** (*okumak -> oku-du*, *konuşmak -> konuş-tu*)\n   - If the last vowel of the stem is **ö / ü**: add **-dü** (*görmek -> gör-dü*, *dönmek -> dön-dü*)\n\n2. Consonant Assimilation: The 'FıSTıKÇı ŞaHaP' Rule:\n   - When a verb root ends in one of the 8 voiceless consonants (**f, s, t, k, ç, ş, h, p**), the initial 'd' hardens to **'t'**:\n     - *git-* (to go) -> ends in **t** -> **gitti** (he/she went, NOT *gitdi*!)\n     - *bak-* (to look) -> ends in **k** -> **baktı** (he/she looked)\n     - *iç-* (to drink) -> ends in **ç** -> **içti** (he/she drank)\n     - *konuş-* (to speak) -> ends in **ş** -> **konuştu** (he/she spoke)\n     - *yap-* (to do/make) -> ends in **p** -> **yaptı** (he/she did)",
      "examples": [
        {
          "target": "Dün akşam lezzetli bir Türk kahvesi içti.",
          "reading": "Dün akşam lezzetli bir Türk kahvesi içti.",
          "translation": "Yesterday evening he/she drank a delicious Turkish coffee."
        },
        {
          "target": "Ahmet sabah erken saatte işe gitti.",
          "reading": "Ahmet sabah erken saatte işe gitti.",
          "translation": "Ahmet went to work early in the morning."
        },
        {
          "target": "Turistler Kapadokya'da harika fotoğraflar çekti.",
          "reading": "Turistler Kapadokya'da harika fotoğraflar çekti.",
          "translation": "The tourists took wonderful photos in Cappadocia."
        }
      ],
      "mnemonics": [
        "FıSTıKÇı ŞaHaP (f, s, t, k, ç, ş, h, p) turns D into T (gitti, baktı, içti, yaptı)!",
        "4-way vowel harmony: -di, -dı, -du, -dü (geldi, aldı, okudu, gördü)."
      ],
      "culturalNotes": [
        "In Turkish linguistics, '-di' marks firsthand witness or certain knowledge, whereas '-miş' marks indirect hearsay; choosing '-di' asserts that the event is an established fact."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What is the past tense of 'yapmak' (to do/make) for 3rd person (o)?",
          "options": [
            "yapdı",
            "yaptu",
            "yapti",
            "yaptı"
          ],
          "answerIndex": 3,
          "explanation": "Yap ends in voiceless 'p', so d -> t; back vowel 'a' -> -tı."
        },
        {
          "prompt": "Which suffix attaches to 'görmek' (to see)?",
          "options": [
            "-dı",
            "-du",
            "-dü",
            "-di"
          ],
          "answerIndex": 2,
          "explanation": "görmek has 'ö', which takes -dü -> gördü."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Dün Kapadokya'da sıcak hava balonu uçtu.'",
          "options": [
            "Today we will fly in a hot air balloon.",
            "Balloons do not fly in Cappadocia.",
            "We bought a ticket for the balloon.",
            "Yesterday the hot air balloon flew in Cappadocia."
          ],
          "answerIndex": 3,
          "explanation": "uçtu = flew (uç- ends in ç -> -tu)."
        },
        {
          "prompt": "Why does 'gitmek' become 'gitti' instead of 'gitdi'?",
          "options": [
            "Because gitmek is an irregular noun.",
            "Because 'd' is never used in Turkish.",
            "It is a spelling exception.",
            "Because 't' is a voiceless consonant (FıSTıKÇı ŞaHaP), requiring the suffix initial 'd' to harden into 't'."
          ],
          "answerIndex": 3,
          "explanation": "Consonant assimilation: voiceless consonant + d -> voiceless consonant + t."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the verb roots to their correct past tense form: gel-, bak-, iç-, gül-:",
          "options": [
            "gel -> geldu | bak -> bakdi | iç -> içdı | gül -> gültü",
            "All end in -di",
            "gel -> geldi | bak -> baktı | iç -> içti | gül -> güldü",
            "All end in -ti"
          ],
          "answerIndex": 2,
          "explanation": "geldi, baktı, içti, güldü.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Otobüs durağa tam vaktinde geldi.'",
          "options": [
            "The bus left the stop early.",
            "The bus arrived at the stop right on time.",
            "We missed the bus.",
            "The bus is very slow."
          ],
          "answerIndex": 1,
          "explanation": "geldi = arrived; tam vaktinde = right on time.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which consonants belong to the 'FıSTıKÇı ŞaHaP' voiceless group?",
          "options": [
            "f, s, t, k, ç, ş, h, p",
            "a, e, ı, i, o, ö, u, ü",
            "y, v, z, r, m, n, l, k",
            "b, c, d, g, j, l, m, n"
          ],
          "answerIndex": 0,
          "explanation": "FıSTıKÇı ŞaHaP = f, s, t, k, ç, ş, h, p.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Merve dün akşam güzel bir roman _______ (okumak).'",
          "options": [
            "okuyor",
            "okutı",
            "okudü",
            "okudu"
          ],
          "answerIndex": 3,
          "explanation": "okumak (vowel u) -> okudu.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 1: Foundational & Structural Mastery (Dün akşam lezzetli bir Türk ka)"
  },
  "tr-u7-l2": {
    "id": "tr-u7-l2",
    "unit": "tr-u7",
    "level": "A2",
    "objective": "Attach personal past suffixes (-m, -n, -k, -niz/-nız, -ler/-lar) to verbs and use the past tense of 'to be' (-(y)dı / -(y)di) with nouns and adjectives.",
    "presentation": {
      "explanation": "In Turkish past tense, the personal endings attach directly to the tense suffix (-di/-ti):\n\n1. Category II Personal Suffixes (Past Tense Paradigm):\n   - **Ben** (I): **-m** -> *gittim* (I went), *aldım* (I took/bought), *gördüm* (I saw)\n   - **Sen** (You sg): **-n** -> *gittin* (you went), *aldın* (you bought), *okudun* (you read)\n   - **O** (He/She/It): **(no suffix)** -> *gitti*, *aldı*, *gördü*, *okudu*\n   - **Biz** (We): **-k** -> *gittik* (we went), *aldık* (we bought), *gördük* (we saw)\n   - **Siz** (You pl/formal): **-niz / -nız / -nuz / -nüz** -> *gittiniz*, *aldınız*, *gördünüz*\n   - **Onlar** (They): **-ler / -lar** -> *gittiler*, *aldılar*, *gördüler*, *okudular*\n\n2. The Past Tense of 'To Be' with Nouns & Adjectives (-(y)dı / -(y)di):\n   - When attached to a word ending in a vowel, a **buffer 'y'** is inserted:\n     - *mutlu* (happy) -> *mutlu-y-dum* (I was happy)\n     - *hasta* (sick) -> *hasta-y-dım* (I was sick)\n     - *evde* (at home) -> *evde-y-dik* (we were at home)\n     - *güzel* (beautiful) -> *güzel-di* (it was beautiful)\n     - *yorgun* (tired) -> *yorgun-duk* (we were tired)",
      "examples": [
        {
          "target": "Geçen hafta sonu Kapadokya'ya gittik ve çok mutlu olduk.",
          "reading": "Geçen hafta sonu Kapadokya'ya gittik ve çok mutlu olduk.",
          "translation": "Last weekend we went to Cappadocia and became very happy."
        },
        {
          "target": "Dün çok yorgundum, bu yüzden erken uyudum.",
          "reading": "Dün çok yorgundum, bu yüzden erken uyudum.",
          "translation": "Yesterday I was very tired, so I went to sleep early."
        },
        {
          "target": "Siz müzeyi gezdiniz mi?",
          "reading": "Siz müzeyi gezdiniz mi?",
          "translation": "Did you all tour the museum?"
        }
      ],
      "mnemonics": [
        "Past Personal Endings: -m (I), -n (you), -k (we), -niz (you all), -ler (they)!",
        "Vowel ending + past 'to be' = buffer 'Y' (hasta-y-dım, evde-y-dik)!"
      ],
      "culturalNotes": [
        "Turkish subject pronouns (*ben, sen, biz*) are frequently omitted because the personal ending on the verb (*gittim, gittik*) unequivocally marks the grammatical person."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you say 'We went to the market' in Turkish?",
          "options": [
            "Pazara gittik.",
            "Pazara gittiler.",
            "Pazara gittim.",
            "Pazara gittin."
          ],
          "answerIndex": 0,
          "explanation": "Biz personal suffix in past tense is -k -> gittik."
        },
        {
          "prompt": "How do you say 'I was at home yesterday' using 'evde' (at home)?",
          "options": [
            "Dün evdeydim.",
            "Dün evdedim.",
            "Dün evdeyim.",
            "Dün evde oldum."
          ],
          "answerIndex": 0,
          "explanation": "Evde ends in a vowel, so buffer 'y' is required: evdeydim."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Onlar Kapadokya'da peri bacalarını gördüler.'",
          "options": [
            "We want to see the fairy chimneys.",
            "Fairy chimneys are very tall.",
            "They saw the fairy chimneys in Cappadocia.",
            "They will visit Cappadocia tomorrow."
          ],
          "answerIndex": 2,
          "explanation": "gördüler = they saw (gör- + -dü + -ler); peri bacaları = fairy chimneys."
        },
        {
          "prompt": "Complete: 'Sen dün akşam konsere _______ (gitmek)?'",
          "options": [
            "gittim",
            "gitti",
            "gittik",
            "gittin"
          ],
          "answerIndex": 3,
          "explanation": "Sen takes the -n personal ending -> gittin."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the subjects to their conjugated past forms of 'almak' (to buy/take):",
          "options": [
            "Ben alırım, Sen alırsın, O alır",
            "Ben aldım, Sen aldın, O aldı, Biz aldık, Siz aldınız, Onlar aldılar",
            "All use -dı",
            "Ben alıyorum, Sen alıyorsun, O alıyor, Biz alıyoruz"
          ],
          "answerIndex": 1,
          "explanation": "aldım, aldın, aldı, aldık, aldınız, aldılar.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Hava çok soğuktu ama manzara harikaydı.'",
          "options": [
            "The weather was very cold, but the scenery was wonderful.",
            "We didn't like the scenery.",
            "It rained all afternoon.",
            "The weather is warm and sunny."
          ],
          "answerIndex": 0,
          "explanation": "soğuktu = was cold; harikaydı = was wonderful.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the role of the buffer letter 'y' in 'öğrenciydim' (I was a student)?",
          "options": [
            "It is a future marker.",
            "It indicates plural.",
            "It has no function.",
            "It prevents two vowels from clashing between the noun root ending in 'i' and the past copula suffix."
          ],
          "answerIndex": 3,
          "explanation": "Buffer 'y' (kaynaştırma harfi) separates adjoining vowels.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Biz dün bütün gün kütüphanede _______ (çalışmak).'",
          "options": [
            "çalıştılar",
            "çalıştınız",
            "çalıştık",
            "çalıştım"
          ],
          "answerIndex": 2,
          "explanation": "Biz çalıştık (we worked).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 2: Foundational & Structural Mastery (Geçen hafta sonu Kapadokya'ya )"
  },
  "tr-u7-l3": {
    "id": "tr-u7-l3",
    "unit": "tr-u7",
    "level": "A2",
    "objective": "Form past tense negatives with -me / -ma (-medim, -madım) and past questions with the interrogative particle (gittin mi?, ne yaptın?).",
    "presentation": {
      "explanation": "Negation and questions in Turkish past tense follow strict agglutinative order:\n\n1. Past Negation (-me / -ma + -di + Personal Suffix):\n   - Insert the negative suffix **-me** (front vowels) or **-ma** (back vowels) directly onto the verb root before the past suffix:\n     - *gitmek* -> *git-me-di-m* -> **gitmedim** (I didn't go)\n     - *yapmak* -> *yap-ma-dı-k* -> **yapmadık** (we didn't do)\n     - *görmek* -> *gör-me-di-n* -> **görmedin** (you didn't see)\n     - *almak* -> *al-ma-dı-lar* -> **almadılar** (they didn't buy)\n   - *Note*: Because the negative suffix ends in a vowel (-me/-ma), the past tense suffix is ALWAYS voiced **-di** or **-dı** (never -ti/-tı!):\n     - *baktım* (I looked) -> *bakmadım* (I didn't look)!\n\n2. Past Yes/No Questions (Verb + mı / mi / mu / mü?):\n   - Unlike present tense where person attaches to 'mi', in the past tense **personal endings stay on the verb**, followed by the interrogative particle **mi/mı/mu/mü**:\n     - *Gittin mi?* (Did you go?)\n     - *Gördünüz mü?* (Did you all see?)\n     - *Yemek yediniz mi?* (Did you all eat food?)\n     - *Beğendin mi?* (Did you like it?)\n\n3. Past Information Questions (Ne, Nerede, Ne zaman):\n   - *Dün ne yaptın?* (What did you do yesterday?)\n   - *Nereye gittiniz?* (Where did you go?)\n   - *Kimi gördün?* (Whom did you see?)",
      "examples": [
        {
          "target": "Dün akşam konsere gitmedim, evde dinlendim.",
          "reading": "Dün akşam konsere gitmedim, evde dinlendim.",
          "translation": "Yesterday evening I didn't go to the concert, I rested at home."
        },
        {
          "target": "Kapadokya'da yeraltı şehrini gezdiniz mi?",
          "reading": "Kapadokya'da yeraltı şehrini gezdiniz mi?",
          "translation": "Did you all tour the underground city in Cappadocia?"
        },
        {
          "target": "Hafta sonu nerede kaldınız?",
          "reading": "Hafta sonu nerede kaldınız?",
          "translation": "Where did you stay over the weekend?"
        }
      ],
      "mnemonics": [
        "Negative Past: Verb + -me/-ma + -di + Person (git-me-di-m)!",
        "Past Question: Complete past verb + MI / MI / MU / MÜ? (Gittin mi? Yediniz mi?)."
      ],
      "culturalNotes": [
        "In Turkish etiquette, asking 'Yemek yediniz mi?' (Did you eat food?) or 'Aç mısınız?' when hosting guests is a warm sign of Turkish hospitality (misafirperverlik)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you say 'I didn't buy the tickets' in Turkish?",
          "options": [
            "Biletleri almadın.",
            "Biletleri almadık.",
            "Biletleri almadılar.",
            "Biletleri almadım."
          ],
          "answerIndex": 3,
          "explanation": "al- + -ma (negative) + -dı (past) + -m (1st person) = almadım."
        },
        {
          "prompt": "How do you ask 'Did you see the sunset?' to one person?",
          "options": [
            "Gün batımını gördünüz mü?",
            "Gün batımını gördün mi?",
            "Gün batımını gördü mü?",
            "Gün batımını gördün mü?"
          ],
          "answerIndex": 3,
          "explanation": "Gördün (you saw) + mü (question particle harmonized with ü) = gördün mü?"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Dün hava yağmurlu değildi, çok güzeldi.'",
          "options": [
            "Yesterday the weather was not rainy, it was very beautiful.",
            "Yesterday it rained all day.",
            "Tomorrow the weather will be rainy.",
            "We dislike rainy weather."
          ],
          "answerIndex": 0,
          "explanation": "yağmurlu değildi = was not rainy (değil + -di)."
        },
        {
          "prompt": "Why does 'baktım' (I looked) become 'bakmadım' in the negative instead of 'bakmatım'?",
          "options": [
            "Because the negative suffix '-ma' ends in a vowel, so the past suffix attaches to a voiced sound and remains '-dı'.",
            "Because bakmak is irregular in negative.",
            "Because -t- is only for positive sentences.",
            "It is optional."
          ],
          "answerIndex": 0,
          "explanation": "-ma ends in a vowel (voiced), keeping the past suffix voiced as -dı."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the negative past verbs: gitmek, yapmak, bilmek, gelmek:",
          "options": [
            "gitmedim, yapmadım, bilmedim, gelmedim",
            "All use -miyorum",
            "gitmedin, yapmadın, bilmedin, gelmedin",
            "gittim, yaptım, bildim, geldim"
          ],
          "answerIndex": 0,
          "explanation": "1st-person negative past forms.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Dün akşam neden aramadın?'",
          "options": [
            "Did you call the hotel?",
            "I will call you tonight.",
            "Who called you last night?",
            "Why didn't you call last night?"
          ],
          "answerIndex": 3,
          "explanation": "neden = why; aramadın = you didn't call (ara- + -ma + -dı + -n).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Where does the personal ending go in past questions (e.g. 'Gittiniz mi?') versus present continuous questions ('Gidiyor musunuz?')?",
          "options": [
            "They are in the same position.",
            "Personal endings are always at the start.",
            "In the past tense, the personal ending attaches to the VERB (Gittiniz mi?); in the present, it attaches to the QUESTION PARTICLE (Gidiyor musunuz?).",
            "Past tense does not use question particles."
          ],
          "answerIndex": 2,
          "explanation": "Past tense holds the personal suffix on the verb: Gittiniz mi?",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Biz o filmi hiç _______ (not like).'",
          "options": [
            "beğenmedim",
            "beğenmedik",
            "beğenmediler",
            "beğenmediniz"
          ],
          "answerIndex": 1,
          "explanation": "Biz beğenmedik (we didn't like).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 3: Foundational & Structural Mastery (Dün akşam konsere gitmedim, ev)"
  },
  "tr-u7-l4": {
    "id": "tr-u7-l4",
    "unit": "tr-u7",
    "level": "A2",
    "objective": "Deploy Turkish past temporal markers (dün, evvelsi gün, geçen hafta sonu, iki gün önce) and narrative sequencing connectors (önce / ilk olarak, sonra, daha sonra, aniden / birdenbire, sonunda) to construct fluid stories.",
    "presentation": {
      "explanation": "To tell vivid, captivating stories in Turkish, we combine past temporal adverbs with sequential connectors:\n\n1. Past Time Expressions:\n   - **Dün** = Yesterday\n   - **Evvelsi gün / Dünden önceki gün** = The day before yesterday\n   - **Dün sabah / Dün akşam / Dün gece** = Yesterday morning / yesterday evening / last night\n   - **Geçen hafta / Geçen ay / Geçen yıl** = Last week / last month / last year\n   - **Geçen hafta sonu** = Last weekend\n   - **İki gün önce / Üç saat önce** = Two days ago / three hours ago (*önce* comes after the duration!)\n   - **Geçenlerde** = Recently / The other day\n\n2. Chronological Narrative Connectors:\n   - **İlk olarak / Önce** = First of all / At first\n   - **Sonra / Ondan sonra** = Then / After that\n   - **Daha sonra** = Later on\n   - **Birdenbire / Aniden** = Suddenly / All of a sudden\n   - **Sonunda / Nihayet** = In the end / Finally / At last",
      "examples": [
        {
          "target": "İki gün önce Kapadokya'ya uçakla geldik.",
          "reading": "İki gün önce Kapadokya'ya uçakla geldik.",
          "translation": "Two days ago we arrived in Cappadocia by plane."
        },
        {
          "target": "İlk olarak Göreme Açık Hava Müzesi'ni gezdik, sonra Avanos'ta çömlek yaptık.",
          "reading": "İlk olarak Göreme Açık Hava Müzesi'ni gezdik, sonra Avanos'ta çömlek yaptık.",
          "translation": "First we toured Göreme Open Air Museum, then we made pottery in Avanos."
        },
        {
          "target": "Aniden rüzgâr çıktı ve balonlar iniş yaptı.",
          "reading": "Aniden rüzgâr çıktı ve balonlar iniş yaptı.",
          "translation": "Suddenly wind picked up and the balloons landed."
        }
      ],
      "mnemonics": [
        "ÖNCE = Before / Ago (iki gün önce = 2 days ago)!",
        "SONRA = Then / Later (ondan sonra = after that)!",
        "İlk olarak -> Sonra -> Daha sonra -> Birdenbire -> Sonunda!"
      ],
      "culturalNotes": [
        "Avanos, situated on the banks of the Red River (Kızılırmak) in Cappadocia, has been the epicenter of red clay pottery craftsmanship in Anatolia since the Hittite Empire (2000 BCE)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you say 'three days ago' in Turkish?",
          "options": [
            "üç gün dün",
            "üç gün önce",
            "önce üç gün",
            "üç gün sonra"
          ],
          "answerIndex": 1,
          "explanation": "Duration + önce = ago (üç gün önce)."
        },
        {
          "prompt": "What does 'evvelsi gün' mean in Turkish?",
          "options": [
            "The day before yesterday",
            "Yesterday morning",
            "Next week",
            "Tomorrow evening"
          ],
          "answerIndex": 0,
          "explanation": "evvelsi gün = the day before yesterday."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Daha sonra geleneksel bir restoranda testi kebabı yedik.'",
          "options": [
            "Later on we ate pottery kebab (testi kebabı) at a traditional restaurant.",
            "We don't eat meat in Cappadocia.",
            "We are cooking kebab at home.",
            "The restaurant was closed for dinner."
          ],
          "answerIndex": 0,
          "explanation": "Daha sonra = later on; testi kebabı = pottery kebab."
        },
        {
          "prompt": "Which word means 'suddenly' in Turkish storytelling?",
          "options": [
            "birdenbire",
            "dün",
            "sonunda",
            "ilk olarak"
          ],
          "answerIndex": 0,
          "explanation": "birdenbire / aniden = suddenly."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Arrange the narrative connectors in chronological order from start to finish:",
          "options": [
            "Sonra -> Sonra -> Sonra -> Dün",
            "Sonunda -> İlk olarak -> Sonra -> Daha sonra",
            "Yarın -> Dün -> Bugün -> Şimdi",
            "İlk olarak (first) -> Sonra (then) -> Daha sonra (after that) -> Sonunda"
          ],
          "answerIndex": 3,
          "explanation": "İlk olarak -> Sonra -> Daha sonra -> Sonunda.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Geçen hafta sonu Kapadokya'da güneşin doğuşunu izledik.'",
          "options": [
            "We woke up late in Cappadocia.",
            "Next weekend we will watch the sunset.",
            "Last weekend we watched the sunrise in Cappadocia.",
            "The sun did not rise yesterday."
          ],
          "answerIndex": 2,
          "explanation": "Geçen hafta sonu = last weekend; güneşin doğuşu = sunrise.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How do you say 'last year' in Turkish?",
          "options": [
            "gelecek yıl",
            "geçen yıl",
            "bu yıl",
            "iki yıl sonra"
          ],
          "answerIndex": 1,
          "explanation": "geçen yıl / geçen sene = last year.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Uzun bir yürüyüşten sonra _______ zirveye ulaştık.'",
          "options": [
            "sonunda",
            "dün",
            "önce",
            "aniden"
          ],
          "answerIndex": 0,
          "explanation": "sonunda (finally) fits reaching the summit after a long walk.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 4: Foundational & Structural Mastery (İki gün önce Kapadokya'ya uçak)"
  },
  "tr-u7-l5": {
    "id": "tr-u7-l5",
    "unit": "tr-u7",
    "level": "A2",
    "objective": "Demonstrate comprehensive A2 past narration fluency by understanding and participating in a multi-turn dialogue recounting an extraordinary weekend trip to Cappadocia.",
    "presentation": {
      "explanation": "In this Master Checkpoint for Unit 7, we synthesize past tense suffixes, consonant assimilation, personal endings, negation, time connectors, and cultural storytelling in an authentic Cappadocian travel narrative:\n\n1. The Setting:\n   - **Emre** and **Zeynep** meet at a tea garden in Kadıköy, Istanbul on Monday morning. Emre asks Zeynep about her weekend trip to Cappadocia (Kapadokya).\n\n2. Authentic Cultural Dialogue:\n   - **Emre**: Merhaba Zeynep! Hafta sonun nasıl geçti? Kapadokya seyahatiniz nasıldı? (*Hi Zeynep! How was your weekend? How was your Cappadocia trip?*)\n   - **Zeynep**: Selam Emre! İnanılmazdı, gerçekten rüya gibi bir tatil oldu! Cuma akşamı Nevşehir'e uçtuk ve Göreme'de otantik bir mağara oteline yerleştik. (*Hi Emre! It was incredible, it was truly a dream-like holiday! On Friday evening we flew to Nevşehir and settled into an authentic cave hotel in Göreme.*)\n   - **Emre**: Çok güzel! Cumartesi sabahı sıcak hava balonuna bindiniz mi? (*Very nice! Did you all ride the hot air balloon on Saturday morning?*)\n   - **Zeynep**: Evet, bindik! Sabah beşte kalktık. Güneş doğarken yüzlerce renkli balonla birlikte gökyüzüne yükseldik. Peri bacalarının ve vadilerin manzarası büyüleyiciydi! (*Yes, we did! We woke up at five in the morning. As the sun rose, we soared into the sky with hundreds of colorful balloons. The view of fairy chimneys and valleys was enchanting!*)\n   - **Emre**: Harika! Sonra neler yaptınız? (*Awesome! What did you do afterward?*)\n   - **Zeynep**: Balon turundan sonra Derinkuyu Yeraltı Şehri'ni gezdik. Çok derine indik, tarihe hayran kaldık. Öğleden sonra Avanos'a gittik ve çömlek ustasından çömlek yapmayı öğrendik. Akşam ise geleneksel testi kebabı yedik. Garson testiyi masamızda kırdı! Hafta sonu çok çabuk bitti ama harika anılar biriktirdik! (*After the balloon tour we toured Derinkuyu Underground City. We descended very deep, we were amazed by the history. In the afternoon we went to Avanos and learned pottery-making from a master potter. In the evening we ate traditional pottery kebab. The waiter broke the clay pot right at our table! The weekend ended so fast, but we collected wonderful memories!*)",
      "examples": [
        {
          "target": "Kapadokya seyahatiniz nasıldı? — İnanılmazdı, rüya gibiydi!",
          "reading": "Kapadokya seyahatiniz nasıldı? — İnanılmazdı, rüya gibiydi!",
          "translation": "How was your Cappadocia trip? — It was incredible, like a dream!"
        },
        {
          "target": "Güneş doğarken sıcak hava balonuna bindik ve peri bacalarını izledik.",
          "reading": "Güneş doğarken sıcak hava balonuna bindik ve peri bacalarını izledik.",
          "translation": "As the sun rose we rode the hot air balloon and watched the fairy chimneys."
        },
        {
          "target": "Avanos'ta çömlek yaptık ve akşam testi kebabı yedik.",
          "reading": "Avanos'ta çömlek yaptık ve akşam testi kebabı yedik.",
          "translation": "We made pottery in Avanos and ate pottery kebab in the evening."
        }
      ],
      "mnemonics": [
        "PERİ BACALARI = Fairy chimneys, Cappadocia's iconic volcanic rock spires.",
        "TESTİ KEBABI = Pottery kebab cooked inside a sealed terracotta jug, cracked open at the dining table.",
        "MAĞARA OTELİ = Cave hotel carved into volcanic tuff rock."
      ],
      "culturalNotes": [
        "Testi kebabı is cooked for hours sealed with dough inside a single-use clay jug from Avanos; the waiter dramatically cracks open the neck of the flaming jug with a heavy cleaver directly in front of diners."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What famous sunrise activity did Zeynep participate in on Saturday morning?",
          "options": [
            "Riding a hot air balloon over the fairy chimneys",
            "Swimming in the sea",
            "Skiing on a mountain",
            "Shopping at the Grand Bazaar"
          ],
          "answerIndex": 0,
          "explanation": "Zeynep rode a hot air balloon at sunrise over Cappadocia."
        },
        {
          "prompt": "How is 'testi kebabı' traditionally served at the dinner table?",
          "options": [
            "The sealed clay pot (testi) is dramatically cracked open at the table by the waiter (garson testiyi masada kırdı).",
            "It is served in a cold plastic bowl.",
            "It is eaten raw.",
            "It is delivered in a cardboard box."
          ],
          "answerIndex": 0,
          "explanation": "The clay jug is broken open at the dining table."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What historic craft did Zeynep try in the town of Avanos?",
          "options": [
            "Carpet weaving",
            "Pottery-making with red clay from a master potter",
            "Shoemaking",
            "Glassblowing"
          ],
          "answerIndex": 1,
          "explanation": "Avanos is famed for traditional clay pottery craftsmanship."
        },
        {
          "prompt": "Translate: 'Harika anılar biriktirdik!'",
          "options": [
            "We lost our camera.",
            "We collected wonderful memories!",
            "We will return tomorrow.",
            "We spent a lot of money."
          ],
          "answerIndex": 1,
          "explanation": "anı biriktirmek = to collect / accumulate memories."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate the complete sentence: 'Sabah erken saatte balona bindik, öğleden sonra çömlek yaptık ve akşam testi kebabı yedik.'",
          "options": [
            "We didn't like Cappadocia or the hot air balloons.",
            "Tomorrow we will travel to Cappadocia to visit the museum and eat dinner.",
            "Early in the morning we rode the balloon, in the afternoon we made pottery, and in the evening we ate pottery kebab.",
            "The balloons were canceled because of rain."
          ],
          "answerIndex": 2,
          "explanation": "Past narration integrating definite past tense, vowel harmony, consonant assimilation, and Cappadocia itinerary.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What are 'Peri Bacaları' in Cappadocia?",
          "options": [
            "A traditional Turkish dance",
            "Fairy chimneys — unique, wind- and water-eroded volcanic rock spires that define the Cappadocian landscape",
            "A type of pastry",
            "A mountain range in Istanbul"
          ],
          "answerIndex": 1,
          "explanation": "Peri Bacaları are Cappadocia's world-famous fairy chimney rock formations.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What core grammatical and communicative competencies were mastered across Unit 7 in Turkish?",
          "options": [
            "Definite past tense (-di/-ti with 4-way harmony and FıSTıKÇı ŞaHaP assimilation), Category II personal endings (-m, -n, -k, -niz, -ler), past of 'to be' (-(y)dı), past negation (-medi/-madı) and questions, temporal adverbs, and full past travel storytelling",
            "Conditional subjunctive mood only",
            "Causative voice conjugations only",
            "Turkish alphabet phonetics only"
          ],
          "answerIndex": 0,
          "explanation": "Unit 7 complete A2 past narration, assimilation, negation, questions, and Cappadocian cultural storytelling mastery.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is 'uçtuk' (we flew) spelled with 't' instead of 'd'?",
          "options": [
            "Because flying is in the sky.",
            "Because uçmak is an irregular noun.",
            "It is a dialect variation.",
            "Because the root 'uç-' ends in 'ç', which is a voiceless consonant belonging to FıSTıKÇı ŞaHaP, hardening the suffix 'd' to 't'."
          ],
          "answerIndex": 3,
          "explanation": "Consonant assimilation rule: voiceless consonant ç + d -> ç + t.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 5: Foundational & Structural Mastery (Kapadokya seyahatiniz nasıldı?)"
  },
  "tr-u8-l1": {
    "id": "tr-u8-l1",
    "unit": "tr-u8",
    "level": "A2",
    "objective": "Identify essential Turkish clothing, footwear, and accessory terms (gömlek, tişört, pantolon, elbise, etek, ceket, kaban, kazak, ayakkabı, çanta) and apply invariable color adjectives before nouns.",
    "presentation": {
      "explanation": "Welcome to A2 Turkish Unit 8: Shopping & Money (Alışveriş ve Para)! In Turkish, adjectives—including colors—are uninflected (they do not change for gender or number) and precede the noun directly:\n\n1. Essential Apparel, Footwear & Accessories (Giyim ve Ayakkabı):\n   - **gömlek** = button-down collared shirt\n   - **tişört** = T-shirt\n   - **pantolon** = pants / trousers\n   - **kot pantolon / kot** = jeans\n   - **elbise** = dress\n   - **etek** = skirt\n   - **ceket** = jacket\n   - **kaban / palto** = winter coat\n   - **kazak** = sweater / pullover\n   - **ayakkabı** = shoes / pair of shoes\n   - **spor ayakkabı** = sneakers / trainers\n   - **çanta** = bag / handbag\n   - **güneş gözlüğü** = sunglasses\n   - **şal / eşarp** = silk shawl / headscarf\n\n2. Colors (Renkler):\n   - **siyah / kara** = black\n   - **beyaz / ak** = white\n   - **kırmızı / al** = red\n   - **mavi** = blue\n   - **yeşil** = green\n   - **sarı** = yellow\n   - **kahverengi** = brown (literally *kahve rengi* = coffee color!)\n   - **lacivert** = navy blue\n   - **gri** = grey\n\n3. Adjective Syntax:\n   - Adjectives go BEFORE the noun and never take plural suffixes:\n     - *beyaz gömlek* (white shirt)\n     - *siyah ayakkabılar* (black shoes — only the noun takes plural *-lar/-ler*!)\n     - *mavi kot pantolon* (blue jeans).",
      "examples": [
        {
          "target": "Beyaz bir gömlek ve siyah bir pantolon arıyorum.",
          "reading": "Beyaz bir gömlek ve siyah bir pantolon arıyorum.",
          "translation": "I am looking for a white shirt and black trousers."
        },
        {
          "target": "Bu kahverengi deri ceket çok şık ve kaliteli.",
          "reading": "Bu kahverengi deri ceket çok şık ve kaliteli.",
          "translation": "This brown leather jacket is very stylish and high quality."
        },
        {
          "target": "Bu mavi spor ayakkabının kırk iki numarası var mı?",
          "reading": "Bu mavi spor ayakkabının kırk iki numarası var mı?",
          "translation": "Do you have size 42 for these blue sneakers?"
        }
      ],
      "mnemonics": [
        "Turkish adjectives NEVER take plural endings: 'siyah ayakkabılar' (NOT 'siyahlar ayakkabılar')!",
        "KAHVERENGİ = Brown (Kahve = Coffee + Rengi = Color of)!",
        "GÖMLEK = Shirt; KAZAK = Sweater."
      ],
      "culturalNotes": [
        "Turkey is one of the world's leading textile and leather manufacturers, famous globally for premium Aegean cotton, Bursa silk, and handmade leather jackets."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you say 'black shoes' in Turkish?",
          "options": [
            "siyahlar ayakkabılar",
            "ayakkabılar siyah",
            "siyah ayakkabıler",
            "siyah ayakkabılar"
          ],
          "answerIndex": 3,
          "explanation": "Adjectives precede the noun without plural markings: siyah ayakkabılar."
        },
        {
          "prompt": "What does the color word 'kahverengi' literally mean in Turkish etymology?",
          "options": [
            "Tea color",
            "Wood color",
            "Earth color",
            "Coffee color"
          ],
          "answerIndex": 3,
          "explanation": "Kahverengi literally translates to 'coffee color'."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Kapalıçarşı'dan ipek bir şal ve deri bir çanta aldım.'",
          "options": [
            "I sold my silk shawl in the bazaar.",
            "I am looking for a leather coat.",
            "The Grand Bazaar has no silk shawls.",
            "I bought a silk shawl and a leather handbag from the Grand Bazaar."
          ],
          "answerIndex": 3,
          "explanation": "ipek bir şal = silk shawl; deri bir çanta = leather bag."
        },
        {
          "prompt": "What is the Turkish term for 'dress'?",
          "options": [
            "etek",
            "gömlek",
            "kaban",
            "elbise"
          ],
          "answerIndex": 3,
          "explanation": "Elbise = dress; Etek = skirt."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the garments: gömlek, etek, ceket, ayakkabı:",
          "options": [
            "gömlek: hat | etek: belt | ceket: socks | ayakkabı: bag",
            "gömlek: shirt | etek: skirt | ceket: jacket | ayakkabı: shoes",
            "All mean fabrics",
            "All mean coats"
          ],
          "answerIndex": 1,
          "explanation": "Core Turkish apparel vocabulary.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Güneş gözlüğüm nerede? — Masanın üzerinde, çantanın yanında.'",
          "options": [
            "Where are my sunglasses? — On the table, next to the bag.",
            "I lost my hat and shoes.",
            "The sunglasses are broken.",
            "How much are the sunglasses? — 50 liras."
          ],
          "answerIndex": 0,
          "explanation": "güneş gözlüğü = sunglasses; masanın üzerinde = on the table.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why do Turkish adjectives not change form when describing feminine or plural nouns?",
          "options": [
            "Because Turkish has no adjectives.",
            "Because colors are nouns.",
            "It is a modern reform rule.",
            "Turkish has no grammatical gender and adjectives in the attributive position never inflect for number or case."
          ],
          "answerIndex": 3,
          "explanation": "Turkish is completely genderless and attributive adjectives remain invariable.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Kışın sıcak bir _______ (sweater) ve kalın bir _______ (coat) giyerim.'",
          "options": [
            "tişört / etek",
            "şal / terlik",
            "kazak / kaban",
            "gözlük / çanta"
          ],
          "answerIndex": 2,
          "explanation": "kazak (sweater) + kaban (coat).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 1: Foundational & Structural Mastery (Beyaz bir gömlek ve siyah bir )"
  },
  "tr-u8-l2": {
    "id": "tr-u8-l2",
    "unit": "tr-u8",
    "level": "A2",
    "objective": "Inquire about prices using 'Ne kadar?' and 'Kaç lira?', master Turkish Lira currency terms (lira / kuruş), ask for clothing sizes (beden) and shoe sizes (numara), and request to try on garments in the fitting room (deneme kabini, denemek).",
    "presentation": {
      "explanation": "To navigate shopping interactions in Turkey, you need standard pricing formulas, currency counting, and sizing terminology:\n\n1. Inquiring About Prices:\n   - **Ne kadar?** = How much? (Universal price inquiry)\n   - **Kaç lira? / Kaç TL?** = How many liras?\n   - **Bu gömlek ne kadar?** = How much is this shirt?\n   - **İndirim var mı?** = Is there a discount?\n   - **Yüzde yirmi indirim** = 20% discount.\n\n2. Turkish Currency (Türk Lirası - TL / ₺):\n   - **Lira** (e.g. *yüz lira* = 100 TL; *elli lira* = 50 TL; *bin lira* = 1,000 TL)\n   - **Kuruş** (1 lira = 100 kuruş, e.g. *elli kuruş* = 50 kuruş)\n   - **Bozuk para / Bozukluk** = Small change / coins (*'Bozuk paranız var mı?'*)\n   - **Para üstü** = Change returned from payment.\n\n3. Sizing & Trying Clothes On:\n   - Clothing size = **beden** (*Hangi beden? / S / M / L beden / Bir beden büyük / küçük var mı?*)\n   - Shoe size = **numara** (*Ayakkabı numaranız kaç? / Kırk bir numara* — size 41)\n   - **Deneyebilir miyim?** = May I try it on? (*denemek* = to try on / test)\n   - **Deneme kabini / Soyunma kabini** = Fitting / changing cubicle (*'Deneme kabini nerede?'*)\n   - **Tam oldu! / Çok iyi oldu!** = It fits perfectly!\n   - **Dar geldi / Bol geldi** = It came out too tight / too loose.\n   - **Bunu alıyorum!** = I'll take this! (Purchase decision).",
      "examples": [
        {
          "target": "Bu kaban ne kadar? Deneme kabininde deneyebilir miyim?",
          "reading": "Bu kaban ne kadar? Deneme kabininde deneyebilir miyim?",
          "translation": "How much is this coat? May I try it on in the fitting room?"
        },
        {
          "target": "Bu pantolon bana biraz dar geldi. Bir beden büyüğü var mı?",
          "reading": "Bu pantolon bana biraz dar geldi. Bir beden büyüğü var mı?",
          "translation": "These pants feel a bit tight on me. Do you have one size larger?"
        },
        {
          "target": "Nakit mi ödeyeceksiniz, yoksa kredi kartıyla mı?",
          "reading": "Nakit mi ödeyeceksiniz, yoksa kredi kartıyla mı?",
          "translation": "Will you pay in cash, or with credit card?"
        }
      ],
      "mnemonics": [
        "NE KADAR? = How much?",
        "BEDEN = Clothing size (M beden); NUMARA = Shoe size (42 numara)!",
        "DENEME KABİNİ = Fitting room (Trying cubicle)!",
        "BUNU ALIYORUM = I'll take this!"
      ],
      "culturalNotes": [
        "Contactless credit and debit card payments (temassız ödeme) are standard across Turkey, from Istanbul boutiques to street bakeries."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you ask 'May I try this on?' in Turkish?",
          "options": [
            "Deneyebilir miyim?",
            "Bunu istemiyorum.",
            "Nerede kabin?",
            "Kaç para?"
          ],
          "answerIndex": 0,
          "explanation": "Deneyebilir miyim = May I try it on?"
        },
        {
          "prompt": "What is the Turkish term for clothing size?",
          "options": [
            "beden",
            "numara",
            "kilo",
            "kuruş"
          ],
          "answerIndex": 0,
          "explanation": "Beden = garment size; Numara = shoe size."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Bu ceket tam oldu, çok beğendim. Bunu alıyorum.'",
          "options": [
            "This jacket is too tight, I don't want it.",
            "This jacket fits perfectly, I liked it very much. I'll take this one.",
            "How much is the jacket in size medium?",
            "I want to return this jacket."
          ],
          "answerIndex": 1,
          "explanation": "tam oldu = it fit perfectly; bunu alıyorum = I'll take this."
        },
        {
          "prompt": "What does 'dar geldi' mean when trying on shoes or pants?",
          "options": [
            "It is too loose / baggy",
            "It is very comfortable",
            "It came out too tight / narrow for me",
            "It is very cheap"
          ],
          "answerIndex": 2,
          "explanation": "Dar = tight/narrow."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the shopping terms: beden, numara, deneme kabini, indirim:",
          "options": [
            "beden: clothing size | numara: shoe size | deneme kabini: fitting room | indirim: discount",
            "All mean shoes",
            "All mean days of the week",
            "beden: price | numara: color | deneme kabini: kitchen | indirim: expensive"
          ],
          "answerIndex": 0,
          "explanation": "Core retail fitting and transactional vocabulary.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Toplam sekiz yüz elli lira tuttu. Temassız kartla ödeyebilirsiniz.'",
          "options": [
            "Card payment is not accepted.",
            "The shoes cost 85 liras in cash.",
            "I need 850 coins.",
            "The total came to 850 liras. You can pay with contactless card."
          ],
          "answerIndex": 3,
          "explanation": "sekiz yüz elli lira = 850 TL; temassız kartla = with contactless card.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the distinction between 'bol geldi' and 'dar geldi'?",
          "options": [
            "'Dar geldi' means beautiful.",
            "There is no difference.",
            "'Bol geldi' means it fits too loose/baggy; 'Dar geldi' means it fits too tight/constricted.",
            "'Bol geldi' means expensive."
          ],
          "answerIndex": 2,
          "explanation": "Bol = loose/wide; Dar = tight/narrow.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Ayakkabı _______ (size) kaç? — Kırk iki.'",
          "options": [
            "paranız",
            "numaranız",
            "renginiz",
            "bedeniniz"
          ],
          "answerIndex": 1,
          "explanation": "Ayakkabı numaranız = your shoe size.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 2: Foundational & Structural Mastery (Bu kaban ne kadar? Deneme kabi)"
  },
  "tr-u8-l3": {
    "id": "tr-u8-l3",
    "unit": "tr-u8",
    "level": "A2",
    "objective": "Master Turkish demonstrative pronouns and adjectives (bu, şu, o / bunlar, şunlar, onlar) and apply case suffixes with the buffer 'n' (bunu, şunu, onu / bundan, şundan, ondan).",
    "presentation": {
      "explanation": "Turkish uses a 3-way demonstrative system based on physical and visual proximity:\n\n1. The 3 Demonstratives:\n   - **BU** = This (close to the speaker, within touching/holding distance)\n     - *bu gömlek* (this shirt), *bu ayakkabı*\n   - **ŞU** = That (nearby / in visual range of speaker and listener, pointing distance)\n     - *şu ceket* (that jacket right there), *şu çanta*\n   - **O** = That over there / It / He / She (distant, out of immediate reach)\n     - *o vitrindeki elbise* (that dress in the shop window over there)\n\n2. Plural Demonstratives:\n   - **bunlar** (these), **şunlar** (those nearby), **onlar** (those over there)\n   - *Note*: When modifying a noun, use the singular form: *bu ayakkabılar* (these shoes), *şu elbiseler* (those dresses)!\n\n3. Demonstrative Pronouns with Case Endings (Buffer **'n'** Rule!):\n   - When case suffixes attach directly to *bu, şu, o, bunlar*, the pronominal buffer consonant **'n'** MUST appear:\n     - **Accusative (Direct Object)**: **bunu** (this one), **şunu** (that one), **onu** (that one over there)\n       - *'Bunu almak istiyorum'* (I want to buy this one)\n       - *'Şunu gösterir misiniz?'* (Could you show me that one?)\n     - **Ablative (From / Than)**: **bundan** (from/than this), **şundan**, **ondan**\n     - **Dative (To)**: **buna**, **şuna**, **ona**.",
      "examples": [
        {
          "target": "Bu gömleği beğendim ama şunu denemek istiyorum.",
          "reading": "Bu gömleği beğendim ama şunu denemek istiyorum.",
          "translation": "I like this shirt, but I want to try that one on."
        },
        {
          "target": "Bunu mu alacaksınız, yoksa onu mu?",
          "reading": "Bunu mu alacaksınız, yoksa onu mu?",
          "translation": "Will you take this one, or that one?"
        },
        {
          "target": "Vitrindeki o kırmızı elbiseyi çok beğendim.",
          "reading": "Vitrindeki o kırmızı elbiseyi çok beğendim.",
          "translation": "I really liked that red dress in the shop window."
        }
      ],
      "mnemonics": [
        "BU = Here (touching); ŞU = Pointing (visible); O = Over there (distant)!",
        "Buffer 'n' before cases: bu + u -> BU-N-U (this one)! o + dan -> O-N-DAN!",
        "Before nouns, use singular: 'bu ayakkabılar' (NOT 'bunlar ayakkabılar')!"
      ],
      "culturalNotes": [
        "In Turkish bazaar shopping, pointing with 'Şunu görebilir miyim?' (May I see that one?) politely signals interest in high-shelf crafts or jewelry."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What is the correct accusative form of 'bu' (meaning 'this one' as a direct object)?",
          "options": [
            "buyu",
            "bui",
            "bular",
            "bunu"
          ],
          "answerIndex": 3,
          "explanation": "Buffer 'n' is inserted before grammatical cases: bu + n + u = bunu."
        },
        {
          "prompt": "How do you say 'these pants' as an adjective modifying the noun 'pantolon'?",
          "options": [
            "bunlar pantolon",
            "bunlar pantolonlar",
            "bunu pantolon",
            "bu pantolon"
          ],
          "answerIndex": 3,
          "explanation": "Demonstrative adjectives before nouns remain in the singular base form: bu pantolon."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Şunu denemek istiyorum, lütfen bana otuz sekiz bedenini verir misiniz?'",
          "options": [
            "I want to try that one on, could you please give me size 38?",
            "I want to buy these pants in size 40.",
            "How much is size 38?",
            "I don't like that dress."
          ],
          "answerIndex": 0,
          "explanation": "şunu = that one (acc.); denemek istiyorum = I want to try on."
        },
        {
          "prompt": "What demonstrative refers to an object far away in the window or across the street?",
          "options": [
            "o",
            "bu",
            "şu",
            "bunlar"
          ],
          "answerIndex": 0,
          "explanation": "'O' refers to distant objects."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the demonstrative pronouns with cases: bunu, şundan, ona, bunlar:",
          "options": [
            "All mean 'yesterday'",
            "bunu: that one | şundan: this one",
            "All mean 'here'",
            "bunu: this one (acc.) | şundan: from that one (abl.) | ona: to that one (dat.) | bunlar: these"
          ],
          "answerIndex": 3,
          "explanation": "Pronominal demonstrative case inflections.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Bunu alıyorum, onu bırakıyorum.'",
          "options": [
            "I want both items.",
            "Where are these items?",
            "I'll take this one, I'll leave that one (over there).",
            "I don't want either item."
          ],
          "answerIndex": 2,
          "explanation": "bunu alıyorum (I'll take this one) + onu bırakıyorum (I'll leave that one).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why does 'o' become 'ondan' and not 'odan' when adding the ablative case suffix (-dan)?",
          "options": [
            "It is a spelling exception.",
            "Because 3rd person / demonstrative stems (bu, şu, o) require the historical pronominal buffer consonant 'n' before all case suffixes.",
            "Because odan means room.",
            "Because dan is irregular."
          ],
          "answerIndex": 1,
          "explanation": "Pronominal buffer 'n' rule: o + n + dan = ondan.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Lütfen bana _______ (that one near you - acc.) uzatır mısınız?'",
          "options": [
            "şunu",
            "bunu",
            "şunlar",
            "şu"
          ],
          "answerIndex": 0,
          "explanation": "şunu = that one near you (direct object).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 3: Foundational & Structural Mastery (Bu gömleği beğendim ama şunu d)"
  },
  "tr-u8-l4": {
    "id": "tr-u8-l4",
    "unit": "tr-u8",
    "level": "A2",
    "objective": "Construct comparisons of superiority with 'daha + Adj + -den/-dan' (cheaper than), equality with 'kadar', superlatives with 'en + Adj', and master Grand Bazaar bargaining expressions (pazarlık, indirim, son fiyat, ikram).",
    "presentation": {
      "explanation": "In Turkish, forming comparisons and negotiating prices follows elegant postpositional and ablative case structures:\n\n1. Comparative of Superiority: **Noun + -den/-dan + DAHA + Adjective**:\n   - Formula: **[Benchmark + Ablative -den/-dan] + (daha) + Adjective**:\n     - *Bu ceket şu monttan **(daha) ucuz**.* (This jacket is **cheaper than** that coat.)\n     - *İpek pamuktan **daha pahalı**.* (Silk is **more expensive than** cotton.)\n     - *Kapalıçarşı AVM'den **daha tarihi**.* (The Grand Bazaar is **more historical than** the mall.)\n     - *Note*: In casual speech, 'daha' is optional if the ablative *-den* is present (*Bu mont şundan sıcak* = This coat is warmer than that one).\n\n2. Comparison of Equality: **Noun + KADAR + Adjective** (as ... as):\n   - *Bu kazak da diğeri **kadar kaliteli**.* (This sweater is **as high quality as** the other one.)\n\n3. Superlative: **EN + Adjective** (the most ...):\n   - **en ucuz** = the cheapest\n   - **en pahalı** = the most expensive\n   - **en güzel** = the most beautiful\n   - *'Bu dükkandaki en kaliteli deri ceket hangisi?'* (Which is the highest quality leather jacket in this shop?)\n\n4. Grand Bazaar Bargaining Terms (Pazarlık):\n   - **Pazarlık yapmak** = To bargain / negotiate\n   - **Çok pahalı! / Biraz indirim yapar mısınız?** = Very expensive! / Can you do a little discount?\n   - **Son fiyatınız ne olur?** = What would be your final price?\n   - **İkram** = Complimentary gift / treat (e.g. *Çay ikramımız olsun* = Let tea be our treat!).",
      "examples": [
        {
          "target": "Bu el yapımı seramik kase diğerinden daha güzel ve daha renkli.",
          "reading": "Bu el yapımı seramik kase diğerinden daha güzel ve daha renkli.",
          "translation": "This handmade ceramic bowl is more beautiful and more colorful than the other one."
        },
        {
          "target": "Bu deri mont Kapalıçarşı'daki en kaliteli ürünlerden biri.",
          "reading": "Bu deri mont Kapalıçarşı'daki en kaliteli ürünlerden biri.",
          "translation": "This leather jacket is one of the highest quality products in the Grand Bazaar."
        },
        {
          "target": "İki tane alırsam son fiyat ne kadar olur?",
          "reading": "İki tane alırsam son fiyat ne kadar olur?",
          "translation": "If I buy two pieces, what would be the final price?"
        }
      ],
      "mnemonics": [
        "Ablative -DEN + DAHA = Than / More (şundan daha ucuz)!",
        "EN = The most (en ucuz, en güzel)!",
        "SON FİYAT = Final price; İKRAM = Complimentary hospitality treat!"
      ],
      "culturalNotes": [
        "In Istanbul's Grand Bazaar (Kapalıçarşı, built in 1461 with over 4,000 shops), bargaining (pazarlık) is accompanied by the shopkeeper offering hot tulip-glass Turkish tea (çay ikramı) as a friendly gesture of hospitality."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you say 'This jacket is cheaper than that one' in Turkish?",
          "options": [
            "Bu ceket en ucuz.",
            "Bu ceket şundan daha ucuz.",
            "Bu ceket şuna ucuz.",
            "Bu ceket şu kadar ucuz."
          ],
          "answerIndex": 1,
          "explanation": "Ablative -dan + daha ucuz = cheaper than."
        },
        {
          "prompt": "What does a customer say in the Grand Bazaar when asking for the bottom-line price?",
          "options": [
            "Son fiyatınız ne olur?",
            "Saat kaç?",
            "Bunu istemiyorum.",
            "Dükkan nerede?"
          ],
          "answerIndex": 0,
          "explanation": "Son fiyat = final / best price."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Bize çay ikram ettiler ve fiyatta güzel bir indirim yaptılar.'",
          "options": [
            "They treated us to tea and gave us a nice discount on the price.",
            "We didn't buy anything in the shop.",
            "They refused to sell tea or give discounts.",
            "Tea is very expensive in the bazaar."
          ],
          "answerIndex": 0,
          "explanation": "çay ikram ettiler = treated to tea; indirim yaptılar = gave a discount."
        },
        {
          "prompt": "What is the superlative form meaning 'the highest quality' in Turkish?",
          "options": [
            "en kaliteli",
            "çok kaliteli",
            "daha kaliteli",
            "kaliteli kadar"
          ],
          "answerIndex": 0,
          "explanation": "En + adjective = superlative (the most...)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the comparative structures: bundan daha pahalı, diğeri kadar güzel, en ucuz, pazarlık:",
          "options": [
            "All mean food items",
            "All mean expensive",
            "bundan daha pahalı: more expensive than this | diğeri kadar güzel: as pretty as the other | en ucuz: the cheapest | pazarlık: bargaining",
            "All mean free"
          ],
          "answerIndex": 2,
          "explanation": "Comparative and bargaining terminology.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Kapalıçarşı dünyanın en eski ve en büyük alışveriş merkezlerinden biridir.'",
          "options": [
            "The Grand Bazaar is closed today.",
            "The Grand Bazaar is one of the world's oldest and largest shopping centers.",
            "I have never visited the Grand Bazaar.",
            "The bazaar has only a few small shops."
          ],
          "answerIndex": 1,
          "explanation": "en eski ve en büyük = the oldest and the largest.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What does 'çay ikramı' symbolize in Turkish commercial culture?",
          "options": [
            "A welcoming gesture of Turkish hospitality offered free of charge to customers while browsing or negotiating in shops",
            "A mandatory tea tax",
            "A fee for entering the store",
            "An insult to customers"
          ],
          "answerIndex": 0,
          "explanation": "Tea offering is the hallmark of Turkish commercial warmth and hospitality.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Bu deri çanta öbüründen _______ (cheaper than).'",
          "options": [
            "çok ucuz",
            "en ucuz",
            "kadar ucuz",
            "daha ucuz"
          ],
          "answerIndex": 3,
          "explanation": "öbüründen (ablative) + daha ucuz.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 4: Foundational & Structural Mastery (Bu el yapımı seramik kase diğe)"
  },
  "tr-u8-l5": {
    "id": "tr-u8-l5",
    "unit": "tr-u8",
    "level": "A2",
    "objective": "Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multi-turn dialogue purchasing handcrafted Iznik ceramic bowls, silk scarves, and leather jackets in Istanbul's Grand Bazaar (Kapalıçarşı).",
    "presentation": {
      "explanation": "In this Master Checkpoint for Unit 8, we synthesize apparel vocabulary, demonstratives with case endings (bunu/şunu), sizing, comparatives (daha kaliteli/en güzel), bargaining idioms (pazarlık, son fiyat, ikram), and payment methods in an authentic Istanbul Grand Bazaar dialogue:\n\n1. The Setting:\n   - **Murat** visits a renowned artisanal leather and handicraft shop on Kalpakçılar Caddesi inside the historic **Kapalıçarşı** (Grand Bazaar) in Istanbul. **Ahmet Usta** (master shopkeeper / esnaf) welcomes him with freshly brewed Turkish tea.\n\n2. Authentic Cultural Dialogue:\n   - **Ahmet Usta**: Hoş geldiniz efendim! Buyrun, buyrun! Önce bir sıcak tavşan kanı Türk çayımızı için. Nasıl yardımcı olabilirim? (*Welcome sir! Please come in! First drink our hot deep-red Turkish tea. How can I help you?*)\n   - **Murat**: Hoş bulduk, teşekkür ederim! Çayınız harika. Ben el yapımı hakiki bir deri ceket ve geleneksel ipek bir şal arıyorum. (*Thank you, tea is wonderful. I'm looking for a genuine handmade leather jacket and a traditional silk shawl.*)\n   - **Ahmet Usta**: Doğru adrese geldiniz! Bakınız, burada kuzu derisinden bu siyah ceketimiz var, şurada da kahverengi süet modelimiz var. İkisi de el işçiliği, birinci sınıf kalite. (*You came to the right address! Look, here we have this black lambskin jacket, and over there our brown suede model. Both are handmade, first-class quality.*)\n   - **Murat**: Siyah olan kahverengiden daha şık ve daha yumuşak görünüyor. L beden var mı? Deneyebilir miyim? (*The black one looks more stylish and softer than the brown one. Do you have size L? May I try it on?*)\n   - **Ahmet Usta**: Elbette! Buyrun L beden. Deneme kabinimiz hemen şu aynanın arkasında. (*Of course! Here is size L. Our fitting room is right behind that mirror.*)\n   - *(Murat ceketi dener ve kabinden çıkar)*\n   - **Murat**: Ceket tam oturdu, harika oldu! Bu mavi Bursa ipeği şal da çok güzel. İkisinin toplam fiyatı ne kadar? (*The jacket fits like a glove, it's wonderful! This blue Bursa silk shawl is also very pretty. How much is the total price for both?*)\n   - **Ahmet Usta**: Ceket normalde dört bin lira, ipek şal da bin lira. Toplam beş bin lira efendim. (*The jacket is normally 4,000 liras, and the silk shawl is 1,000 liras. Total 5,000 liras, sir.*)\n   - **Murat**: Ahmet Usta, fiyat biraz yüksek. İkisini birden alıyorum, güzel bir pazarlık yapalım. Son fiyatınız ne olur? (*Master Ahmet, the price is a bit high. I'm buying both together, let's make a good bargain. What would be your final price?*)\n   - **Ahmet Usta**: Madem çayımızı içtiniz ve güzel müşterisiniz, hatırınız için son fiyat: dört bin iki yüz lira olsun, helali hoş olsun! (*Since you drank our tea and are a fine customer, for your sake final price: let it be 4,200 liras, enjoy it in good health!*)\n   - **Murat**: Anlaştık! Çok teşekkürler. Kredi kartıyla temassız ödeyebilir miyim? (*Agreed! Thank you very much. May I pay contactless with credit card?*)\n   - **Ahmet Usta**: Tabii ki, pos cihazına dokundurun... Tamamdır, fişinizi çantaya koydum. Güle güle kullanın, yine bekleriz! (*Of course, tap the POS terminal... All done, I put your receipt in the bag. Use them in joy (wear in good health), we look forward to seeing you again!*)",
      "examples": [
        {
          "target": "Siyah deri ceket kahverengiden daha yumuşak ve tam oturdu.",
          "reading": "Siyah deri ceket kahverengiden daha yumuşak ve tam oturdu.",
          "translation": "The black leather jacket is softer than the brown one and fit like a glove."
        },
        {
          "target": "Güzel bir pazarlık yaptık ve dört bin iki yüz liraya anlaştık.",
          "reading": "Güzel bir pazarlık yaptık ve dört bin iki yüz liraya anlaştık.",
          "translation": "We made a good bargain and agreed on 4,200 liras."
        },
        {
          "target": "Güle güle kullanın! — Çok teşekkür ederim.",
          "reading": "Güle güle kullanın! — Çok teşekkür ederim.",
          "translation": "Use them in joy (wear in good health)! — Thank you very much."
        }
      ],
      "mnemonics": [
        "TAM OTURDU = It fit like a glove (literally 'sat' perfectly)!",
        "GÜLE GÜLE KULLANIN! = Traditional Turkish blessing for purchases ('Use it smiling / in joy!')",
        "ANLAŞTIK! = Agreed! / It's a deal!"
      ],
      "culturalNotes": [
        "The Grand Bazaar (Kapalıçarşı), established in 1461 by Sultan Mehmed II, is a vast covered labyrinth of 64 covered streets containing over 4,000 shops where artisan craft guilds have operated for centuries."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What traditional cultural blessing did Ahmet Usta say to Murat upon finalizing the purchase?",
          "options": [
            "Güle güle kullanın!",
            "Afiyet olsun!",
            "İyi yolculuklar!",
            "Geçmiş olsun!"
          ],
          "answerIndex": 0,
          "explanation": "'Güle güle kullanın!' is the universal Turkish blessing when someone buys new goods."
        },
        {
          "prompt": "What phrase did Murat use to accept the final negotiated price?",
          "options": [
            "Anlaştık!",
            "İstemiyorum.",
            "Pahalı.",
            "Nerede?"
          ],
          "answerIndex": 0,
          "explanation": "'Anlaştık!' means 'We agreed / deal!'."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What was the final negotiated total price for both the leather jacket and the silk shawl?",
          "options": [
            "1,000 TL",
            "4,200 TL",
            "5,000 TL",
            "10,000 TL"
          ],
          "answerIndex": 1,
          "explanation": "Final price was 4,200 TL (dört bin iki yüz lira)."
        },
        {
          "prompt": "Translate: 'Kredi kartını pos cihazına dokundurun.'",
          "options": [
            "Your card has no funds.",
            "Tap your credit card on the POS machine.",
            "The store does not accept cards.",
            "Insert your cash into the drawer."
          ],
          "answerIndex": 1,
          "explanation": "Contactless card tap on POS terminal."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate the complete sentence: 'Siyah deri ceket kahverengiden daha şıktı, tam oturdu ve pazarlıktan sonra dört bin iki yüz liraya kartla aldım.'",
          "options": [
            "Tomorrow I will buy a cotton T-shirt for 50 liras.",
            "The black leather jacket was more stylish than the brown one, fitted like a glove, and after bargaining I bought it for 4,200 liras with card.",
            "The black jacket was too small and the bazaar was closed.",
            "Cash was the only payment accepted in the Grand Bazaar."
          ],
          "answerIndex": 1,
          "explanation": "Synthesis of leather garments, comparatives, fit idioms (tam oturdu), bargaining, and card checkout.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is 'Kapalıçarşı' in Istanbul?",
          "options": [
            "The historic Grand Bazaar, one of the world's oldest and largest covered markets with over 4,000 shops across 64 streets",
            "A modern airport terminal",
            "A football stadium",
            "A railway station"
          ],
          "answerIndex": 0,
          "explanation": "Kapalıçarşı is Istanbul's iconic Grand Bazaar.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What core grammatical, lexical, and cultural competencies were mastered across Unit 8 in Turkish?",
          "options": [
            "Causative-passive combined voice only",
            "Ottoman divan poetry meter only",
            "Turkish vowel harmony chart only",
            "Apparel & accessories vocabulary, Turkish Lira currency, demonstratives with buffer 'n' case endings (bunu/şundan), comparatives (daha... -den), superlatives (en), fit expressions (tam oldu/oturdu), and Grand Bazaar bargaining transactions"
          ],
          "answerIndex": 3,
          "explanation": "Unit 8 comprehensive Turkish retail, demonstrative cases, comparatives, bargaining, and commercial mastery.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Where was the blue silk shawl ('ipek şal') famous for being produced in Turkey?",
          "options": [
            "Antalya",
            "Trabzon",
            "Bursa",
            "Bodrum"
          ],
          "answerIndex": 2,
          "explanation": "Bursa is historically world-renowned as the center of Turkish silk production.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 5: Foundational & Structural Mastery (Siyah deri ceket kahverengiden)"
  },
  "tr-u9-l1": {
    "id": "tr-u9-l1",
    "unit": "tr-u9",
    "level": "A2",
    "objective": "Identify essential Turkish public transit modes, maritime ferries, and railway infrastructure (metro, otobüs, tramvay, vapur, Marmaray, taksi, istasyon, durak, peron, bilet, İstanbulkart, aktarma yapmak) and apply instrumental means suffix '-(y)la / -(y)le' vs. 'yürüyerek'.",
    "presentation": {
      "explanation": "Welcome to A2 Turkish Unit 9: Directions & Transportation (Yol Tarifi ve Ulaşım)! Istanbul is the world's only transcontinental metropolis spanning Europe and Asia across the Bosphorus strait:\n\n1. Modes of Transportation (Ulaşım Araçları):\n   - **metro** = subway / metro (e.g. M2 Yenikapı-Hacıosman)\n   - **tramvay** = tram (*T1 Kabataş-Bağcılar historical tram*)\n   - **vapur / feribot** = Bosphorus passenger ferry (*Şehir Hatları vapuru: Eminönü, Kadıköy, Üsküdar*)\n   - **Marmaray** = undersea transcontinental railway tunnel under the Bosphorus connecting Europe & Asia in 4 minutes!\n   - **metrobüs** = dedicated rapid bus transit system\n   - **otobüs** = city bus (*otobüs durağı = bus stop*)\n   - **taksi / sarı taksi** = yellow taxi cab\n   - **araba** = car\n   - **bisiklet** = bicycle.\n\n2. Instrumental Means Suffix: **-(y)la / -(y)le / ile** (By / With):\n   - Follows 2-way vowel harmony (*-la* after a/ı/o/u; *-le* after e/i/ö/ü with buffer *y* after vowels):\n     - *metro + y + la* -> **metroyla** (by metro)\n     - *otobüs + le* -> **otobüsle** (by bus)\n     - *vapur + la* -> **vapurla** (by ferry)\n     - *tren + le* -> **trenle** (by train)\n     - *taksi + y + le* -> **taksiyle** (by taxi)\n   - **Crucial Walking Idiom**: Walking on foot uses **yürüyerek** (from *yürümek = to walk*) or **yayan**.\n\n3. Transit Infrastructure & Ticketing:\n   - **istasyon** = train / metro station (*metro istasyonu*)\n   - **durak** = bus/tram stop (*tramvay durağı*)\n   - **iskele** = ferry dock / pier (*Kadıköy İskelesi*)\n   - **peron** = railway platform\n   - **turnike** = turnstile barrier (*kartı turnikeye okutmak = tap card at turnstile*)\n   - **İstanbulkart** = universal contactless smart travel card for all Istanbul subways, ferries, trams, and buses\n   - **aktarma yapmak** = to transfer / change transit lines.",
      "examples": [
        {
          "target": "Kadıköy'den Eminönü'ne vapurla geçmek hem çok keyifli hem de hızlı.",
          "reading": "Kadıköy'den Eminönü'ne vapurla geçmek hem çok keyifli hem de hızlı.",
          "translation": "Crossing from Kadıköy to Eminönü by ferry is both very enjoyable and fast."
        },
        {
          "target": "Sultanahmet Camii'ne gitmek için T1 tramvayına binmeniz gerekiyor.",
          "reading": "Sultanahmet Camii'ne gitmek için T1 tramvayına binmeniz gerekiyor.",
          "translation": "To go to the Blue Mosque you need to board the T1 tram."
        },
        {
          "target": "Yenikapı istasyonunda Marmaray'dan M2 metrosuna aktarma yapabilirsiniz.",
          "reading": "Yenikapı istasyonunda Marmaray'dan M2 metrosuna aktarma yapabilirsiniz.",
          "translation": "At Yenikapı station you can transfer from Marmaray to the M2 metro."
        }
      ],
      "mnemonics": [
        "-(Y)LA / -(Y)LE for vehicles: metroyla, vapurla, otobüsle!",
        "YÜRÜYEREK = On foot / walking!",
        "İSTANBULKART = The card that rides ferries, subways, and trams across continents!",
        "AKTARMA YAPMAK = Line transfer / changing lines!"
      ],
      "culturalNotes": [
        "Taking the Bosphorus ferry (vapur) between Europe and Asia while sipping Turkish tea (*çay*) and feeding pieces of sesame simit bread to circling seagulls is one of Istanbul's most cherished daily cultural traditions."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you say 'I go by ferry' in Turkish?",
          "options": [
            "Vapurda gidiyorum.",
            "Vapura gidiyorum.",
            "Vapurdan gidiyorum.",
            "Vapurla gidiyorum."
          ],
          "answerIndex": 3,
          "explanation": "Instrumental suffix -(y)la denotes means of transit: vapurla."
        },
        {
          "prompt": "What does 'Marmaray' refer to in Istanbul's transit network?",
          "options": [
            "An airport terminal",
            "A cable car over the Golden Horn",
            "A traditional rowboat",
            "The transcontinental undersea railway tunnel running deep underneath the Bosphorus Strait connecting Europe and Asia"
          ],
          "answerIndex": 3,
          "explanation": "Marmaray is the famous undersea commuter rail tunnel beneath the Bosphorus."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'İstanbulkart'ınızı turnikeye okutun ve perona geçin.'",
          "options": [
            "Buy a ticket from the driver on the platform.",
            "The turnstile is locked for all passengers.",
            "Show your passport at the station entrance.",
            "Tap/scan your İstanbulkart at the turnstile and proceed to the platform."
          ],
          "answerIndex": 3,
          "explanation": "İstanbulkart'ı okutun = scan/tap card; turnikeye = at turnstile; perona geçin = proceed to platform."
        },
        {
          "prompt": "What does 'aktarma yapmak' mean in Turkish transit?",
          "options": [
            "To buy a ticket",
            "To exit the station",
            "To miss the train",
            "To transfer / change between transit lines"
          ],
          "answerIndex": 3,
          "explanation": "Aktarma yapmak = to make a transit transfer."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the Turkish transit terms: vapur, tramvay, aktarma yapmak, turnike:",
          "options": [
            "vapur: Bosphorus ferry | tramvay: tram/streetcar | aktarma yapmak: to transfer lines | turnike: turnstile barrier",
            "All mean bicycles",
            "All mean traffic lights",
            "vapur: car | tramvay: train | turnike: ticket"
          ],
          "answerIndex": 0,
          "explanation": "Turkish transit terms matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Yüksek hızlı tren (YHT) Ankara'ya Söğütlüçeşme istasyonundan hareket ediyor.'",
          "options": [
            "The bus to Ankara is delayed by two hours.",
            "Söğütlüçeşme station is closed for all trains.",
            "Ankara has no high-speed train stations.",
            "The high-speed train (YHT) to Ankara departs from Söğütlüçeşme station."
          ],
          "answerIndex": 3,
          "explanation": "Yüksek hızlı tren = high-speed train (YHT); hareket ediyor = departs.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why does 'metro' become 'metroyla' with a buffer 'y' when attaching the instrumental suffix?",
          "options": [
            "Because metro is feminine.",
            "Because it is an Arabic word.",
            "Because 'metro' ends in a vowel (o), requiring buffer 'y' before the vowel-initial suffix -(y)la to prevent consecutive vowel collision.",
            "It is optional spelling."
          ],
          "answerIndex": 2,
          "explanation": "Buffer 'y' bridges vowels in Turkish phonology: metro + y + la = metroyla.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Otobüs _______ (stop) bekliyoruz.'",
          "options": [
            "iskele",
            "durağında",
            "peron",
            "havalimanı"
          ],
          "answerIndex": 1,
          "explanation": "otobüs durağında = at the bus stop.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 9, Lesson 1: Foundational & Structural Mastery (Kadıköy'den Eminönü'ne vapurla)"
  },
  "tr-u9-l2": {
    "id": "tr-u9-l2",
    "unit": "tr-u9",
    "level": "A2",
    "objective": "Master Turkish spatial postpositions and possessive noun compound structures (yanında, önünde, arkasında, arasında, karşısında, yakınında, köşede) with the Locative case suffix '-de/-da'.",
    "presentation": {
      "explanation": "Spatial locations in Turkish are expressed using **Spatial Postpositional Nouns** formed via the **Possessive Compound** (İsim Tamlaması) with the **Locative case suffix (-de/-da / -nde/-nda)**:\n\n1. Spatial Postpositional Formations:\n   - **yanı** (side) -> **yanında** = next to / beside (*bankanın yanında = beside the bank*)\n   - **önü** (front) -> **önünde** = in front of (*müzenin önünde = in front of the museum*)\n   - **arkası** (back) -> **arkasında** = behind (*otelin arkasında = behind the hotel*)\n   - **arası** (between) -> **arasında** = between (*banka ile kafe arasında = between bank and café*)\n   - **karşısı** (opposite) -> **karşısında** = across from / opposite (*parkın karşısında = opposite the park*)\n   - **yakını** (near) -> **yakınında** = near to / in the vicinity of (*istasyonun yakınında*)\n   - **köşede / köşesinde** = on the corner (*sokağın köşesinde = on the corner of the street*)\n   - **üstünde / üzerinde** = on / on top of (*masanın üstünde*)\n   - **altında** = under / beneath (*köprünün altında*).\n\n2. The Buffer 'n' in Spatial Postpositions:\n   - Because spatial nouns already contain the 3rd-person possessive suffix (*-i/-ı/-si/-sı*), adding any case suffix (like Locative *-de/-da* or Dative *-e/-a*) requires the **mandatory pronominal buffer 'n'**:\n     - *ön-ü + n + de* -> **önünde** (in its front)\n     - *arka-sı + n + da* -> **arkasında** (in its back)\n     - *karşı-sı + n + da* -> **karşısında** (in its opposite).",
      "examples": [
        {
          "target": "Sultanahmet Camii, Ayasofya'nın tam karşısında yer alıyor.",
          "reading": "Sultanahmet Camii, Ayasofya'nın tam karşısında yer alıyor.",
          "translation": "The Blue Mosque is situated directly opposite the Hagia Sophia."
        },
        {
          "target": "Eczane, bankanın yanında ve tramvay durağının yakınında bulunuyor.",
          "reading": "Eczane, bankanın yanında ve tramvay durağının yakınında bulunuyor.",
          "translation": "The pharmacy is beside the bank and near the tram stop."
        },
        {
          "target": "Taksi durağı otel ile metro istasyonu arasında.",
          "reading": "Taksi durağı otel ile metro istasyonu arasında.",
          "translation": "The taxi stand is between the hotel and the metro station."
        }
      ],
      "mnemonics": [
        "YANINDA = Next to; ÖNÜNDE = In front; ARKASINDA = Behind!",
        "KARŞISINDA = Across from / Opposite!",
        "BUFFER 'N' is always placed before the locative suffix (-nde/-nda)!"
      ],
      "culturalNotes": [
        "In Istanbul's Sultanahmet historic district, the magnificent Byzantine Hagia Sophia (Ayasofya) and the Ottoman Blue Mosque (Sultanahmet Camii) stand directly facing each other across a tranquil central park and fountain."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you say 'in front of the museum' (müze) in Turkish?",
          "options": [
            "müzenin önünde",
            "müzeden önünde",
            "müze önünde",
            "müzeye önünde"
          ],
          "answerIndex": 0,
          "explanation": "Spatial compound structure: müzenin önünde."
        },
        {
          "prompt": "Which spatial postposition means 'across from / opposite'?",
          "options": [
            "karşısında",
            "arkasında",
            "arasında",
            "altında"
          ],
          "answerIndex": 0,
          "explanation": "Karşısında = across from / opposite."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Restoran tiyatronun arkasında ve parkın yakınında yer alıyor.'",
          "options": [
            "The restaurant is inside the park.",
            "The restaurant is located behind the theater and near the park.",
            "The theater is far from the park.",
            "Where is the theater restaurant?"
          ],
          "answerIndex": 1,
          "explanation": "tiyatronun arkasında = behind theater; parkın yakınında = near park."
        },
        {
          "prompt": "Why is there an 'n' between 'arkası' and 'da' in 'arkasında'?",
          "options": [
            "Because arka is masculine.",
            "Because it is plural.",
            "Because the pronominal buffer 'n' is mandatory in Turkish whenever a case suffix is attached to a 3rd-person possessive ending.",
            "It is a dialect rule."
          ],
          "answerIndex": 2,
          "explanation": "Pronominal buffer 'n' connects 3rd-person possessive suffixes to case endings."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the Turkish spatial postpositions: yanında, önünde, arkasında, arasında:",
          "options": [
            "All mean yesterday",
            "All mean inside",
            "yanında: far | önünde: under | arkasında: between",
            "yanında: next to / beside | önünde: in front of | arkasında: behind | arasında: between"
          ],
          "answerIndex": 3,
          "explanation": "Spatial postposition definitions.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Banka caddenin köşesinde, postanenin tam karşısında bulunuyor.'",
          "options": [
            "The post office has no banks nearby.",
            "The street is far from the post office.",
            "The bank is located on the corner of the street, directly across from the post office.",
            "The bank is closed on the corner of the post office."
          ],
          "answerIndex": 2,
          "explanation": "caddenin köşesinde = on corner of avenue; postanenin tam karşısında = directly opposite post office.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How is 'between the café and the bakery' constructed in Turkish?",
          "options": [
            "kafeden fırına arkasında",
            "kafe ile fırın arasında",
            "kafe fırın üstünde",
            "kafe fırında yanında"
          ],
          "answerIndex": 1,
          "explanation": "'A ile B arasında' expresses between A and B.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Kitapçı parkın _______ (next to / beside) bulunuyor.'",
          "options": [
            "yanında",
            "altında",
            "üstünde",
            "içinde"
          ],
          "answerIndex": 0,
          "explanation": "parkın yanında = beside the park.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 9, Lesson 2: Foundational & Structural Mastery (Sultanahmet Camii, Ayasofya'nı)"
  },
  "tr-u9-l3": {
    "id": "tr-u9-l3",
    "unit": "tr-u9",
    "level": "A2",
    "objective": "Give and follow directional commands in Turkish using formal and informal imperative forms (düz gidin / dosdoğru gidin, sağa/sola dönün, caddeyi geçin, birinci/ikinci sokaktan dönün, binin / inin).",
    "presentation": {
      "explanation": "Giving directions in Turkish uses polite formal (*-in / -iniz*) and informal (*-*) imperative verb forms:\n\n1. Directional Action Verbs (Yol Tarifi Vermek):\n   - **Düz gidin! / Dosdoğru gidin!** = Go straight ahead!\n   - **Sağa dönün! / Sola dönün!** = Turn right! / Turn left! (Direction requires Dative *-a/-e*: *sağ-a, sol-a*)\n   - **Caddeyi / Sokağı geçin!** = Cross the avenue / street! (Direct object requires Accusative *-i/-ı*)\n   - **İlk / İkinci sokaktan sağa dönün!** = Turn right at the 1st/2nd street! (Ablative *-den/-dan*)\n   - **Işıklardan sağa dönün!** = Turn right at the traffic lights!\n   - **Camiye kadar yürüyün!** = Walk as far as the mosque!\n   - **Meydandan geçin!** = Pass through the square!\n\n2. Key Navigation Landmarks:\n   - **trafik ışıkları / ışıklar** = traffic lights (*ışıklarda = at the lights*)\n   - **kavşak / döner kavşak** = intersection / roundabout (*kavşaktan sola dönün*)\n   - **yaya geçidi** = pedestrian crosswalk (*yaya geçidinden geçin*)\n   - **alt geçit / üst geçit** = pedestrian underpass / overpass bridge.\n\n3. Transit Actions:\n   - **otobüse / tramvaya binmek** = to get on / board transit (takes Dative *-e/-a*)\n   - **durakta / istasyonda inmek** = to get off / alight (takes Locative *-de/-da*).",
      "examples": [
        {
          "target": "İstiklal Caddesi boyunca düz gidin ve trafik ışıklarından sağa dönün.",
          "reading": "İstiklal Caddesi boyunca düz gidin ve trafik ışıklarından sağa dönün.",
          "translation": "Go straight along İstiklal Avenue and turn right at the traffic lights."
        },
        {
          "target": "Yaya geçidinden caddeyi geçin ve ikinci sokaktan sola dönün.",
          "reading": "Yaya geçidinden caddeyi geçin ve ikinci sokaktan sola dönün.",
          "translation": "Cross the avenue at the pedestrian crosswalk and turn left at the second street."
        },
        {
          "target": "T1 tramvayına binin ve üçüncü durakta, Sultanahmet'te inin.",
          "reading": "T1 tramvayına binin ve üçüncü durakta, Sultanahmet'te inin.",
          "translation": "Board the T1 tram and get off at the third stop, at Sultanahmet."
        }
      ],
      "mnemonics": [
        "DÜZ GİDİN = Go straight ahead!",
        "SAĞA (Right) / SOLA (Left) DÖNÜN (Turn)!",
        "BİNMEK takes Dative (tramvaya bin); İNMEK takes Locative (durakta in)!"
      ],
      "culturalNotes": [
        "In Turkey, asking strangers for directions is typically begun with 'Affedersiniz' (Excuse me) or 'Kolay gelsin' (May it be easy), and locals will enthusiastically walk with you several blocks to ensure you find your way."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you tell someone 'Go straight ahead and turn right at the traffic lights' in formal Turkish?",
          "options": [
            "Geri dönün ve durun.",
            "Sola dönün ve denize girin.",
            "Düz gidin ve trafik ışıklarından sağa dönün.",
            "Taksiye binin ve kaçın."
          ],
          "answerIndex": 2,
          "explanation": "Düz gidin (straight) + sağa dönün (turn right) + trafik ışıklarından (at lights)."
        },
        {
          "prompt": "What does 'caddeyi geçin' mean in Turkish?",
          "options": [
            "Clean the avenue",
            "Drive along the avenue",
            "Block the avenue",
            "Cross the avenue/street"
          ],
          "answerIndex": 3,
          "explanation": "Caddeyi geçin = cross the avenue."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'İkinci sokaktan sola dönün, müze sağ tarafınızda kalacak.'",
          "options": [
            "Turn left at the second street, the museum will be on your right side.",
            "Turn right at the first street to the museum.",
            "Do not turn at the second street.",
            "The museum is closed on the left side."
          ],
          "answerIndex": 0,
          "explanation": "ikinci sokaktan sola dönün = turn left at 2nd street; sağ tarafınızda kalacak = will remain on your right."
        },
        {
          "prompt": "Which verb means 'to board / get on' a tram or bus in Turkish?",
          "options": [
            "binmek",
            "inmek",
            "yürümek",
            "almak"
          ],
          "answerIndex": 0,
          "explanation": "Binmek = to get on / board."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the Turkish direction commands: düz gidin, sola dönün, caddeyi geçin, durakta inin:",
          "options": [
            "All are food verbs",
            "All mean stop",
            "düz gidin: go straight | sola dönün: turn left | caddeyi geçin: cross avenue | durakta inin: get off at stop",
            "All mean turn right"
          ],
          "answerIndex": 2,
          "explanation": "Directional imperatives matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Döner kavşaktan üçüncü çıkışa girin ve köprüye doğru ilerleyin.'",
          "options": [
            "The bridge has no roundabout.",
            "Enter the third exit at the roundabout and advance towards the bridge.",
            "The roundabout is closed for three hours.",
            "Turn around three times at the bridge."
          ],
          "answerIndex": 1,
          "explanation": "döner kavşaktan = from roundabout; üçüncü çıkışa girin = enter 3rd exit; köprüye doğru = towards bridge.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How do you politely ask 'How do I get to...?' in Turkish?",
          "options": [
            "...'e / ...'a nasıl gidebilirim?",
            "Siz kimsiniz?",
            "Saat kaç?",
            "Kaç para?"
          ],
          "answerIndex": 0,
          "explanation": "'... nasıl gidebilirim / gidilir?' = How can I get to...?",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Köşeden _______ (to the right) dönün.'",
          "options": [
            "düz",
            "arkaya",
            "sola",
            "sağa"
          ],
          "answerIndex": 3,
          "explanation": "sağa dönün = turn to the right.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 9, Lesson 3: Foundational & Structural Mastery (İstiklal Caddesi boyunca düz g)"
  },
  "tr-u9-l4": {
    "id": "tr-u9-l4",
    "unit": "tr-u9",
    "level": "A2",
    "objective": "Master Turkish directional case governance (Dative -e/-a for destination, Locative -de/-da for location, Ablative -den/-dan for origin/traversal) and directional postpositions (doğru, kadar, boyunca).",
    "presentation": {
      "explanation": "Motion and navigation in Turkish are governed by the dynamic interplay of **3 spatial cases** and directional postpositions:\n\n1. The 3 Core Spatial Cases:\n   - **DATIVE CASE (-e / -a) — Destination (Nereye? = Where to?)**:\n     - *merkeze gitmek* (go to the center), *meydana yürümek* (walk to the square), *otobüse binmek* (get on the bus).\n   - **LOCATIVE CASE (-de / -da / -te / -ta) — Static Location (Nerede? = Where at?)**:\n     - *istasyonda beklemek* (wait at the station), *durakta inmek* (get off at the stop).\n   - **ABLATIVE CASE (-den / -dan / -ten / -tan) — Origin & Traversal (Nereden? = Where from/through?)**:\n     - *köprüden geçmek* (cross via/across the bridge), *parkın içinden geçmek* (pass through the park), *evden çıkmak* (leave the house).\n\n2. Directional Postpositions:\n   - **-e / -a doğru** = towards / in the direction of (*denize doğru yürümek = walk towards the sea*)\n   - **-e / -a kadar** = up to / as far as (*Sultanahmet'e kadar = as far as Sultanahmet*)\n   - **boyunca** = along (*sahil boyunca yürümek = walk along the coast*)\n   - **-den / -dan önce / sonra** = before / after (*meydandan sonra = after the square*).",
      "examples": [
        {
          "target": "Galata Kulesi'nden Boğaz'a doğru yürüyüp köprüden geçtik.",
          "reading": "Galata Kulesi'nden Boğaz'a doğru yürüyüp köprüden geçtik.",
          "translation": "We walked from Galata Tower towards the Bosphorus and crossed over the bridge."
        },
        {
          "target": "Gülhane Parkı'nın içinden geçerek Topkapı Sarayı'na kadar yürüyebilirsiniz.",
          "reading": "Gülhane Parkı'nın içinden geçerek Topkapı Sarayı'na kadar yürüyebilirsiniz.",
          "translation": "You can walk through Gülhane Park all the way to Topkapi Palace."
        },
        {
          "target": "Sahil boyunca yürüyüp vapur iskelesine vardık.",
          "reading": "Sahil boyunca yürüyüp vapur iskelesine vardık.",
          "translation": "We walked along the coastline and arrived at the ferry pier."
        }
      ],
      "mnemonics": [
        "NEREYE? = DATIVE (-e/-a); NEREDE? = LOCATIVE (-de/-da); NEREDEN? = ABLATIVE (-den/-dan)!",
        "-(Y)E DOĞRU = Towards destination!",
        "-(Y)E KADAR = All the way up to!"
      ],
      "culturalNotes": [
        "Galata Bridge (Galata Köprüsü) spanning the Golden Horn connects historic Sultanahmet with trendy Karaköy/Beyoğlu, famed for lines of local fishermen casting rods over the water day and night."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which case suffix marks motion across a bridge: 'Köprü_______ (across bridge) geçtik'?",
          "options": [
            "-ye",
            "-den",
            "-i",
            "-de"
          ],
          "answerIndex": 1,
          "explanation": "Passing across/through paths governs the Ablative case: köprüden geçmek."
        },
        {
          "prompt": "Which postposition expresses moving 'towards' a destination taking the Dative case?",
          "options": [
            "doğru",
            "boyunca",
            "sonra",
            "kadar"
          ],
          "answerIndex": 0,
          "explanation": "'-e / -a doğru' means towards / heading in the direction of."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'Sahil boyunca yürüyün ve meydana kadar ilerleyin.'",
          "options": [
            "Walk along the coastline and advance as far as the square.",
            "Do not walk near the coast.",
            "Cross the sea before the square.",
            "The square has no coastline."
          ],
          "answerIndex": 0,
          "explanation": "sahil boyunca = along coast; meydana kadar = as far as square."
        },
        {
          "prompt": "What is the difference between 'parka gitmek' and 'parkta yürümek'?",
          "options": [
            "'Parka gitmek' (Dative) means going to the park as destination; 'Parkta yürümek' (Locative) means walking inside the park as static venue.",
            "The second is plural.",
            "There is no difference.",
            "The first is past tense."
          ],
          "answerIndex": 0,
          "explanation": "Dative (Destination - Nereye?) vs. Locative (Location - Nerede?)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the case suffixes and functions: -e/-a, -de/-da, -den/-dan, boyunca:",
          "options": [
            "All mean stop",
            "-e/-a: Dative (Destination to) | -de/-da: Locative (Location at) | -den/-dan: Ablative (Origin/through) | boyunca: along",
            "All are food suffixes",
            "All mean buy tickets"
          ],
          "answerIndex": 1,
          "explanation": "Spatial cases matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Translate: 'Marmaray'la Avrupa'dan Asya'ya dört dakikada geçtik.'",
          "options": [
            "We crossed from Europe to Asia in four minutes with Marmaray.",
            "Marmaray is delayed by four hours in Asia.",
            "We walked from Europe to Asia in four days.",
            "Europe has no trains to Asia."
          ],
          "answerIndex": 0,
          "explanation": "Avrupa'dan (from Europe - Ablative) + Asya'ya (to Asia - Dative) + Marmaray'la (with Marmaray).",
          "type": "multiple-choice"
        },
        {
          "prompt": "What does '-e kadar' express in Turkish spatial navigation?",
          "options": [
            "Far from the building",
            "Inside the building",
            "Behind the building",
            "The limit or terminus of a journey"
          ],
          "answerIndex": 3,
          "explanation": "'-e kadar' expresses the terminus limit: all the way up to.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Müzeye _______ (towards) yürüyün.'",
          "options": [
            "boyunca",
            "kadar",
            "doğru",
            "için"
          ],
          "answerIndex": 2,
          "explanation": "müzeye doğru = towards the museum.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 9, Lesson 4: Foundational & Structural Mastery (Galata Kulesi'nden Boğaz'a doğ)"
  },
  "tr-u9-l5": {
    "id": "tr-u9-l5",
    "unit": "tr-u9",
    "level": "A2",
    "objective": "Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multi-turn dialogue navigating Istanbul transit (Marmaray & T1 Tram) from Yenikapı, tapping İstanbulkart, and walking to Sultanahmet Square, the Blue Mosque, and the Hagia Sophia.",
    "presentation": {
      "explanation": "In this Master Checkpoint for Unit 9, we synthesize Turkish transit (İstanbulkart, tramvay, Marmaray, turnike), spatial postpositions, directional imperatives, and transcontinental Istanbul navigation:\n\n1. The Setting:\n   - **Emre** (traveler) arrives at the major interchange hub of **Yenikapı** in Istanbul. He wants to visit the world-famous **Sultanahmet Camii** (Blue Mosque) and **Ayasofya-i Kebir Cami-i Şerifi** (Hagia Sophia) on Sultanahmet Square. He asks an İBB transit officer (**Mehmet Bey**) and a local shopkeeper (**Zeynep Hanım**) on Sultanahmet Square for directions.\n\n2. Authentic Cultural Dialogue:\n   - **Emre**: Merhaba, kolay gelsin! Yenikapı'dan Sultanahmet Meydanı'na ve Ayasofya'ya en hızlı nasıl gidebilirim? (*Hello, more power to your work! How can I get fastest from Yenikapı to Sultanahmet Square and Hagia Sophia?*)\n   - **Mehmet Bey (Görevli)**: Merhaba, hoş geldiniz! Çok kolay. Buradan M2 metrosuna veya Marmaray'a binmeyin. Dışarı çıkın, Aksaray yönüne doğru üç dakika yürüyün ve **T1 Kabataş tramvayına** binin. Tramvayla dört durak gidip **Sultanahmet durağında** inin. (*Hello, welcome! Very easy. Don't take M2 or Marmaray here. Go outside, walk 3 minutes towards Aksaray, and board the T1 Kabataş tram. Ride 4 stops by tram and get off at Sultanahmet stop.*)\n   - **Emre**: Harika! İstanbulkart geçerli mi? (*Great! Is İstanbulkart valid?*)\n   - **Mehmet Bey**: Evet, kartınızı turnikeye okutmanız yeterli. İyi yolculuklar! (*Yes, just tap your card at the turnstile. Have a good trip!*)\n   - *(Emre T1 tramvayına biner, Sultanahmet durağında iner ve meydana çıkar)*\n   - **Emre (Meydanda Zeynep Hanım'a)**: Affedersiniz, iyi günler! Ayasofya ve Sultanahmet Camii tam olarak nerede bulunuyor? (*Excuse me, good day! Where exactly are Hagia Sophia and the Blue Mosque located?*)\n   - **Zeynep Hanım**: İyi günler! Harika bir yerdesiniz. Tramvay yolundan meydana doğru düz yürüyün. Sağ tarafınızda altı minareli muhteşem **Sultanahmet Camii'ni** göreceksiniz. Parkın tam karşısında ise pembe renkli kubbesiyle tarihi **Ayasofya** yer alıyor. İkisi birbirine yüz metre mesafede, parkın iki ucunda! (*Good day! You are in a wonderful spot. Walk straight from the tram tracks towards the square. On your right you will see the magnificent 6-minaret Blue Mosque. Directly opposite the park stands historic Hagia Sophia with its pink dome. Both are 100 meters apart at opposite ends of the park!*)\n   - **Emre**: Çok teşekkür ederim, çok yardımcı oldunuz! (*Thank you very much, you were very helpful!*)\n   - **Zeynep Hanım**: Rica ederim, hayırlı günler! İstanbul'un tadını çıkarın! (*You're welcome, have a blessed day! Enjoy Istanbul!*)",
      "examples": [
        {
          "target": "T1 tramvayına binip Sultanahmet durağında inin.",
          "reading": "T1 tramvayına binip Sultanahmet durağında inin.",
          "translation": "Board the T1 tram and get off at Sultanahmet stop."
        },
        {
          "target": "Sultanahmet Camii ile Ayasofya, parkın tam karşısında karşılıklı duruyor.",
          "reading": "Sultanahmet Camii ile Ayasofya, parkın tam karşısında karşılıklı duruyor.",
          "translation": "The Blue Mosque and Hagia Sophia stand directly facing each other across the park."
        },
        {
          "target": "İstanbulkart'ınızı turnikeye okutup perona geçin.",
          "reading": "İstanbulkart'ınızı turnikeye okutup perona geçin.",
          "translation": "Tap your İstanbulkart at the turnstile and proceed to the platform."
        }
      ],
      "mnemonics": [
        "SULTANAHMET CAMİİ = The world-famous Blue Mosque with 6 soaring minarets!",
        "AYASOFYA = The 1,500-year-old architectural jewel of Justinian!",
        "T1 TRAMVAYI = Istanbul's historical tram line running through Sultanahmet, Grand Bazaar, Eminönü!"
      ],
      "culturalNotes": [
        "Built in the 6th century by Emperor Justinian as the largest cathedral in the world for nearly 1,000 years, Hagia Sophia's 31-meter dome was an engineering miracle of late antiquity."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which tram line did Mehmet Bey instruct Emre to board to reach Sultanahmet?",
          "options": [
            "T1 Kabataş-Bağcılar tramvayı",
            "M2 Metrosu",
            "Marmaray",
            "T3 Kadıköy Moda tramvayı"
          ],
          "answerIndex": 0,
          "explanation": "T1 Tram is the direct rail link running through Sultanahmet."
        },
        {
          "prompt": "How many minarets distinguish the Blue Mosque (Sultanahmet Camii) on the square?",
          "options": [
            "6 minarets",
            "2 minarets",
            "1 minaret",
            "10 minarets"
          ],
          "answerIndex": 0,
          "explanation": "The Blue Mosque is world-famous for its rare six slender minarets."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Translate: 'İstanbulkart'ınızı turnikeye okutmanız yeterli.'",
          "options": [
            "Buy a new İstanbulkart from the guard.",
            "It is sufficient to tap/scan your İstanbulkart at the turnstile.",
            "The turnstile is locked for everybody.",
            "You cannot use İstanbulkart at the turnstile."
          ],
          "answerIndex": 1,
          "explanation": "okutmanız yeterli = it is sufficient to tap/scan."
        },
        {
          "prompt": "What does Zeynep Hanım mean by 'İstanbul'un tadını çıkarın'?",
          "options": [
            "Leave Istanbul immediately",
            "Enjoy / savor Istanbul!",
            "Istanbul is crowded",
            "Eat food in Istanbul"
          ],
          "answerIndex": 1,
          "explanation": "'Tadını çıkarmak' is the Turkish idiom for 'to enjoy / savor to the fullest'."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate the complete sentence: 'Yenikapı'dan T1 tramvayına bindim, Sultanahmet durağında indim ve meydandan yürüyerek Ayasofya'ya vardım.'",
          "options": [
            "I boarded the T1 tram from Yenikapı, got off at Sultanahmet stop, and walking through the square arrived at Hagia Sophia.",
            "Tomorrow I will take a taxi from Istanbul to Ankara for 500 liras.",
            "Hagia Sophia was closed and there were no trams running.",
            "I lost my İstanbulkart inside Gülhane Park."
          ],
          "answerIndex": 0,
          "explanation": "Synthesis of tram boarding (tramvayına bindim), alighting (durağında indim), walking (yürüyerek), and destination arrival (vardım).",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is 'Sultanahmet Meydanı' in Istanbul?",
          "options": [
            "A container shipping port",
            "A modern airport runway",
            "A football stadium in Beşiktaş",
            "The historic heart of Byzantine Constantinople (former Hippodrome) and Ottoman Istanbul, framed by the Blue Mosque and Hagia Sophia"
          ],
          "answerIndex": 3,
          "explanation": "Sultanahmet Square is Istanbul's iconic historic and cultural center.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What core grammatical, lexical, and navigational competencies were mastered across Unit 9 in Turkish?",
          "options": [
            "Causative-passive verb chains only",
            "Old Turkic Orkhon runic script only",
            "Public transit infrastructure (metro, tramvay, vapur, Marmaray, İstanbulkart, turnike), spatial postpositions with possessive compounds (yanında, önünde, arkasında, karşısında), directional imperatives (düz gidin, sağa/sola dönün, caddeyi geçin), 3-case motion governance (Dative, Locative, Ablative), and Istanbul transit navigation",
            "Vowel harmony tables only"
          ],
          "answerIndex": 2,
          "explanation": "Unit 9 comprehensive Turkish transit, spatial postpositions, directional imperatives, motion case governance, and transcontinental urban navigation mastery.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What warm greeting did Emre use when approaching Mehmet Bey at his transit post?",
          "options": [
            "Güle güle!",
            "Kolay gelsin!",
            "Afiyet olsun!",
            "Tebrikler!"
          ],
          "answerIndex": 1,
          "explanation": "'Kolay gelsin' is Turkey's quintessential warm greeting to anyone working.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 9, Lesson 5: Foundational & Structural Mastery (T1 tramvayına binip Sultanahme)"
  },
  "tr-u10-l1": {
    "id": "tr-u10-l1",
    "unit": "tr-u10",
    "level": "A2",
    "objective": "Identify and describe rooms of a Turkish residence and core furniture items (daire, ev, salon, mutfak, yatak odası, banyo, koridor, balkon, koltuk, masa, yatak, gardırop, buzdolabı).",
    "presentation": {
      "explanation": "In this lesson, we explore **The Turkish Home & Furniture (Türk Evi ve Mobilyalar)**:\n\n1. Rooms of the House (Evin Odaları):\n   - **daire**: apartment / flat\n   - **ev**: house / home\n   - **salon**: living room / sitting room (the large social room)\n   - **mutfak**: kitchen\n   - **yatak odası**: bedroom (literally: 'bed room')\n   - **banyo**: bathroom\n   - **tuvalet / WC**: restroom\n   - **koridor / antre**: hallway / entryway foyer\n   - **balkon**: balcony\n   - **bahçe**: garden\n\n2. Key Furniture & Appliances (Mobilyalar ve Beyaz Eşya):\n   - **koltuk**: armchair / sofa\n   - **kanepe**: couch / sofa\n   - **masa**: table\n   - **sandalye**: chair\n   - **yatak**: bed\n   - **gardırop / dolap**: wardrobe / closet\n   - **buzdolabı**: refrigerator (buz = ice + dolap = cupboard $\\rightarrow$ 'ice cupboard'!)\n   - **çamaşır makinesi**: washing machine\n   - **bulaşık makinesi**: dishwasher\n   - **fırın / ocak**: oven / stove\n   - **halı**: Turkish rug / carpet\n\n3. Turkish Home Protocol (Terlik Culture):\n   - Upon entering a Turkish home, shoes are always taken off at the door (**ayakkabıları çıkarmak**) and comfortable indoor slippers (**terlik**) are immediately provided by the host.",
      "examples": [
        {
          "target": "Yeni dairemizde üç oda, aydınlık bir mutfak ve geniş bir balkon var.",
          "reading": "yeh-NEE dah-ee-reh-MEEZ-deh OOCH oh-DAH, eye-duhn-LUHK beer moot-FAHK veh geh-NEESH beer bahl-KOHN vahr",
          "translation": "In our new apartment there are three rooms, a bright kitchen, and a spacious balcony."
        },
        {
          "target": "Salonda rahat bir koltuk ve güzel bir Türk halısı var.",
          "reading": "sah-lohn-DAH rah-HAHT beer kohl-TOOK veh gyoo-ZEHL beer TOORK hah-luh-SUH vahr",
          "translation": "In the living room there is a comfortable armchair and a beautiful Turkish rug."
        }
      ],
      "mnemonics": [
        "BUZDOLABI = Buz (ice) + dolap (cupboard) -> refrigerator!",
        "YATAK ODASI = Yatak (bed) + oda (room) -> bedroom!",
        "TERLİK = Slippers (the sacred footwear of Turkish home comfort)!"
      ],
      "culturalNotes": [
        "Turkish homes are renowned for their impeccable cleanliness and the tradition of sitting on the balcony in warm evenings drinking freshly brewed Turkish tea (**çay**) from tulip-shaped glasses (**ince belli bardak**)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Türkçede 'bedroom' nasıl denir?",
          "options": [
            "Mutfak",
            "Banyo",
            "Salon",
            "Yatak odası"
          ],
          "answerIndex": 3,
          "explanation": "Yatak odası (yatak = bed, oda = room) means bedroom."
        },
        {
          "prompt": "Buz ve dolap kelimelerinden türeyen beyaz eşya hangisidir?",
          "options": [
            "Çamaşır makinesi",
            "Bulaşık makinesi",
            "Fırın",
            "Buzdolabı"
          ],
          "answerIndex": 3,
          "explanation": "Buzdolabı (ice-cupboard) is the refrigerator."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Türkçeye çevirin: 'The table and chairs are in the kitchen.'",
          "options": [
            "Masa salonda uyuyor.",
            "Koltuk banyoda.",
            "Yatak balkonda.",
            "Masa ve sandalyeler mutfakta."
          ],
          "answerIndex": 3,
          "explanation": "Masa ve sandalyeler mutfakta."
        },
        {
          "prompt": "Bir Türk evine girerken kapıda ne yapılır?",
          "options": [
            "Ayakkabıyla içeri koşulur",
            "Kapı kilitlenir",
            "Işıklar kapatılır",
            "Ayakkabılar çıkarılır ve ev terliği giyilir"
          ],
          "answerIndex": 3,
          "explanation": "Removing shoes at the entrance and wearing slippers (terlik) is standard etiquette."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Odaları anlamlarıyla eşleştirin: salon, mutfak, banyo, yatak odası:",
          "options": [
            "salon: garden | mutfak: garage | banyo: kitchen | yatak odası: balcony",
            "All mean bedroom",
            "All mean hospital",
            "salon: living room | mutfak: kitchen | banyo: bathroom | yatak odası: bedroom"
          ],
          "answerIndex": 3,
          "explanation": "Turkish rooms vocabulary matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türk ev kültüründe 'balkon keyfi' nedir?",
          "options": [
            "Balkonda uyuma cezası",
            "Balkonu boyama işi",
            "Yaz aylarında balkonda ailece çay içip sohbet etme ve dinlenme geleneği",
            "Bir spor dalı"
          ],
          "answerIndex": 2,
          "explanation": "Balkon keyfi is the beloved tradition of relaxing on the balcony with tea.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Çevirin: 'There is a large wardrobe in the bedroom.'",
          "options": [
            "Mutfakta küçük bir araba var.",
            "Yatak odasında büyük bir gardırop (dolap) var.",
            "Salonda ağaç var.",
            "Banyoda televizyon var."
          ],
          "answerIndex": 1,
          "explanation": "Yatak odasında büyük bir gardırop var.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Cümleyi tamamlayın: «Misafirler salondaki rahat _______ oturdular.»",
          "options": [
            "koltuğa",
            "fırına",
            "çamaşır makinesine",
            "buzdolabına"
          ],
          "answerIndex": 0,
          "explanation": "Koltuğa oturdular (sat on the comfortable armchair/sofa).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 10, Lesson 1: Foundational & Structural Mastery (Yeni dairemizde üç oda, aydınl)"
  },
  "tr-u10-l2": {
    "id": "tr-u10-l2",
    "unit": "tr-u10",
    "level": "A2",
    "objective": "Describe daily household chores and routines in Turkish using common verb collocations (evi temizlemek, bulaşıkları yıkamak, süpürmek, toz almak, çöpü atmak, çamaşır yıkamak, yatağı toplamak).",
    "presentation": {
      "explanation": "In this lesson, we master **Daily Household Chores in Turkish (Ev İşleri ve Günlük Temizlik)**:\n\n1. Essential Turkish Chore Collocations:\n   - **evi temizlemek**: to clean the house\n   - **bulaşıkları yıkamak**: to wash the dishes\n   - **bulaşık makinesini doldurmak / boşaltmak**: to load/unload the dishwasher\n   - **evi süpürmek / elektrik süpürgesiyle süpürmek**: to vacuum the house (*elektrik süpürgesi* = vacuum cleaner)\n   - **yerleri silmek / paspaslamak**: to mop the floors\n   - **toz almak**: to dust furniture (literally: 'to take dust')\n   - **yatağı toplamak**: to make/tidy the bed (literally: 'to gather the bed')\n   - **çöpü atmak / dışarı çıkarmak**: to take out the trash\n   - **çamaşır yıkamak**: to wash laundry\n   - **ütü yapmak**: to iron clothes (literally: 'to do iron')\n   - **yemek pişirmek / yapmak**: to cook food\n\n2. Authentic Everyday Sentences:\n   - *Cumartesi günleri evi dip köşe temizliyoruz: yerleri siliyorum ve toz alıyorum.* (On Saturdays we deep-clean the house: I mop the floors and dust.)\n   - *Yemekten sonra ben bulaşıkları yıkarım, sen de çöpü atarsın.* (After the meal I'll wash dishes and you take out the trash.)",
      "examples": [
        {
          "target": "Her sabah uyandıktan sonra yatağımı toplarım.",
          "reading": "hehr sah-BAH oo-yahn-duhk-TAHN SOHN-rah yah-tah-uh-MUH tohp-lah-RUHM",
          "translation": "Every morning after waking up I make my bed."
        },
        {
          "target": "Akşam bulaşıkları makineye koyup çalıştırdım.",
          "reading": "ahk-SHAHM boo-lah-shuk-lah-RUH mah-kee-neh-YEH koh-YOOP chah-luhsh-tuhr-DUHM",
          "translation": "In the evening I put the dishes in the dishwasher and started it."
        }
      ],
      "mnemonics": [
        "TOZ ALMAK = Dust (toz = dust, almak = to take -> 'take away the dust')!",
        "YATAĞI TOPLAMAK = Make bed (toplamak = gather/tidy up)!",
        "DİP KÖŞE TEMİZLİK = 'Corner to bottom cleaning' -> deep clean!"
      ],
      "culturalNotes": [
        "In Turkish culture, **dip köşe temizlik** (meticulous corner-to-corner cleaning before spring, Ramadan, or family visits) is a beloved tradition reflecting house pride and immaculate hospitality."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Türkçede mobilyaların tozunu temizlemeye ne denir?",
          "options": [
            "Toz almak",
            "Toz yazmak",
            "Toz satmak",
            "Toz içmek"
          ],
          "answerIndex": 0,
          "explanation": "'Toz almak' (literally: to take dust) means to dust furniture."
        },
        {
          "prompt": "'To wash the dishes' ifadesinin Türkçesi nedir?",
          "options": [
            "Bulaşıkları yıkamak",
            "Çöpü atmak",
            "Yatağı toplamak",
            "Ütü yapmak"
          ],
          "answerIndex": 0,
          "explanation": "Bulaşıkları yıkamak = to wash the dishes."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Türkçeye çevirin: 'I need to vacuum the carpet and take out the trash.'",
          "options": [
            "Halıda uyumam lazım.",
            "Halıyı süpürmem ve çöpü atmam lazım.",
            "Yeni bir çöp almam lazım.",
            "Markete koşmam lazım."
          ],
          "answerIndex": 1,
          "explanation": "Halıyı süpürmek (vacuum carpet) + çöpü atmak (take out trash)."
        },
        {
          "prompt": "'Dip köşe temizlik' deyimi ne anlama gelir?",
          "options": [
            "Sadece kapının önünü süpürmek",
            "Hiç temizlik yapmamak",
            "Evin her köşesini kapsayan çok detaylı ve derinlemesine temizlik",
            "Evi boyamak"
          ],
          "answerIndex": 2,
          "explanation": "'Dip köşe temizlik' means a meticulous thorough deep cleaning."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Ev işlerini eşleştirin: toz almak, bulaşık yıkamak, çöp atmak, ütü yapmak:",
          "options": [
            "All mean studying",
            "All mean cooking",
            "toz almak: dust | bulaşık yıkamak: wash dishes | çöp atmak: take out trash | ütü yapmak: iron clothes",
            "toz almak: cook | bulaşık yıkamak: sleep | çöp atmak: read | ütü yapmak: drive"
          ],
          "answerIndex": 2,
          "explanation": "Turkish chore collocations matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Cümleyi tamamlayın: «Yemekten sonra kirlenen tabakları _______ makinesine dizdim.»",
          "options": [
            "dikiş",
            "bulaşık",
            "hesap",
            "çamaşır"
          ],
          "answerIndex": 1,
          "explanation": "Bulaşık makinesi (dishwasher).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Neden ev işlerini ifade edebilmek günlük Türkçe iletişimde önemlidir?",
          "options": [
            "Ev arkadaşlarıyla iş bölümü yapmak ve aile içi günlük rutinleri rahatça paylaşabilmek için",
            "Önemli değildir",
            "Yalnızca sınavlarda çıkar",
            "Sadece otelde çalışmak için"
          ],
          "answerIndex": 0,
          "explanation": "Chore collocations are essential for flatmate communication and daily family routines.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Çevirin: 'We wash laundry on weekends.'",
          "options": [
            "Hafta sonları okula gidiyoruz.",
            "Hafta sonları araba alıyoruz.",
            "Hafta sonları sokakta koşuyoruz.",
            "Hafta sonları çamaşır yıkıyoruz."
          ],
          "answerIndex": 3,
          "explanation": "Çamaşır yıkıyoruz (we wash laundry).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 10, Lesson 2: Foundational & Structural Mastery (Her sabah uyandıktan sonra yat)"
  },
  "tr-u10-l3": {
    "id": "tr-u10-l3",
    "unit": "tr-u10",
    "level": "A2",
    "objective": "Deploy existential constructions with 'Var / Yok' combined with Locative Case (-de/-da) and spatial postpositions (üstünde, altında, yanında, arkasında, önünde) to describe household arrangements.",
    "presentation": {
      "explanation": "In this lesson, we master **Existential 'Var / Yok' & Spatial Placement (Evde Var / Yok ve Konum Bildirme)** in Turkish:\n\n1. The Fundamental Existential Formula:\n   - **[Place + Locative (-de/-da/-te/-ta)] + [Noun] + VAR (There is/are)**\n     - *Odamda büyük bir yatak var.* (In my room there is a large bed.)\n     - *Mutfakta bulaşık makinesi var mı? — Evet, var.* (Is there a dishwasher in the kitchen? — Yes, there is.)\n   - **[Place + Locative] + [Noun] + YOK (There is NOT / are NO)**\n     - *Salonda televizyon yok.* (There is no television in the living room.)\n\n2. Spatial Positional Postpositions (Possessive + Locative):\n   - **üstünde**: on / on top of (*masanın üstünde* = on the table)\n   - **altında**: under / underneath (*koltuğun altında* = under the armchair)\n   - **yanında**: beside / next to (*dolabın yanında* = next to the closet)\n   - **önünde**: in front of (*pencerenin önünde* = in front of the window)\n   - **arkasında**: behind (*kapının arkasında* = behind the door)\n   - **içinde**: inside (*buzdolabının içinde* = inside the fridge)\n\n3. Possession with 'Var/Yok':\n   - In Turkish, 'to have' is expressed with *Genitive + Possessive + Var*: *Benim iki odam var.* (I have two rooms / literally: 'My two rooms exist').",
      "examples": [
        {
          "target": "Masanın üstünde taze meyveler ve çay bardakları var.",
          "reading": "mah-sah-NUHN oos-toon-DEH tah-ZEH mey-veh-LEHR veh CHY bahr-dahk-lah-RUH vahr",
          "translation": "On the table there are fresh fruits and tea glasses."
        },
        {
          "target": "Buzdolabında hiç süt yok, marketten almamız lazım.",
          "reading": "booz-doh-lah-buhn-DAH heech SOOT yohk, mahr-keht-TEHN ahl-mah-MUHZ lah-ZUHM",
          "translation": "There is no milk in the fridge, we need to buy some from the supermarket."
        }
      ],
      "mnemonics": [
        "VAR = EXISTS (There is / I have); YOK = DOES NOT EXIST (There is none / I don't have)!",
        "MASANIN ÜSTÜNDE = On top of the table (masa-nın üst-ü-nde)!",
        "KOLTUĞUN YANINDA = Next to the sofa!"
      ],
      "culturalNotes": [
        "In Turkish hospitality, asking a guest **«Çay içer misiniz? Evde taze çay var»** (Will you drink tea? There is fresh tea at home) is the universal greeting upon stepping through the door."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Türkçede 'There is a book on the table' nasıl söylenir?",
          "options": [
            "Masanın altında kitap yok.",
            "Kitap masadır.",
            "Masanın üstünde bir kitap var.",
            "Masa kitaptır."
          ],
          "answerIndex": 2,
          "explanation": "Masanın üstünde (on the table) + bir kitap var (there is a book)."
        },
        {
          "prompt": "'Buzdolabında soğuk su yok' cümlesi ne anlama gelir?",
          "options": [
            "There is hot tea on the table.",
            "The fridge is very expensive.",
            "We are drinking water.",
            "There is no cold water in the refrigerator."
          ],
          "answerIndex": 3,
          "explanation": "'Yok' indicates non-existence: there is no cold water."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Türkçeye çevirin: 'There is a soft rug under the coffee table.'",
          "options": [
            "Sehpanın altında yumuşak bir halı var.",
            "Halı masanın üstünde uçuyor.",
            "Halı banyoda duruyor.",
            "Sehpa yok."
          ],
          "answerIndex": 0,
          "explanation": "Sehpanın altında (under coffee table) + yumuşak bir halı var."
        },
        {
          "prompt": "Türkçede 'I have an apartment' yapısı 'var' ile nasıl kurulur?",
          "options": [
            "(Benim) bir dairem var.",
            "Ben daireye sahibim yalnızca.",
            "Ben daireyim.",
            "Daire bendedir."
          ],
          "answerIndex": 0,
          "explanation": "'Benim bir dairem var' is the standard Turkish possessive existence structure."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Konum bildiren sonçekimleri eşleştirin: üstünde, altında, yanında, arkasında:",
          "options": [
            "All mean inside",
            "üstünde: on/above | altında: under | yanında: beside/next to | arkasında: behind",
            "All mean outside",
            "üstünde: under | altında: on | yanında: far | arkasında: inside"
          ],
          "answerIndex": 1,
          "explanation": "Turkish spatial postpositions matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Neden Türkçede 'var/yok' cümleleri varlık ve sahiplik için en temel yapıdır?",
          "options": [
            "Çünkü Türkçede Batı dillerindeki 'to have / avoir' gibi ayrı bir sahip olma fiili yerine iyelik eki + var/yok sistemi kullanılır",
            "Kural dışıdır",
            "Çünkü başka fiil yoktur",
            "Sadece eşyalar için geçerlidir"
          ],
          "answerIndex": 0,
          "explanation": "Turkish expresses possession and existence symmetrically through the possessive + var/yok construct.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Çevirin: 'Is there internet in your apartment?'",
          "options": [
            "Daire interneti sever mi?",
            "İnternet nerede uyur?",
            "İnternet daire midir?",
            "Dairenizde internet var mı?"
          ],
          "answerIndex": 3,
          "explanation": "Dairenizde internet var mı?",
          "type": "multiple-choice"
        },
        {
          "prompt": "Cümleyi tamamlayın: «Pencerenin _______ güzel yeşil bir bahçe var.»",
          "options": [
            "içinde",
            "üstünde",
            "önünde",
            "altında"
          ],
          "answerIndex": 2,
          "explanation": "Pencerenin önünde (in front of the window).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 10, Lesson 3: Foundational & Structural Mastery (Masanın üstünde taze meyveler )"
  },
  "tr-u10-l4": {
    "id": "tr-u10-l4",
    "unit": "tr-u10",
    "level": "A2",
    "objective": "Form the past tense of existentials (vardı / yoktu) and past habits with -DI and R-aorist past to describe past living situations, childhood memories, and village homes.",
    "presentation": {
      "explanation": "In this lesson, we explore **Past Living Situations & Childhood Memories (Geçmişte Evimiz ve Çocukluk Anıları)**:\n\n1. Past of Existentials (VARDI / YOKTU):\n   - **VARDI (There was / were; I had)**:\n     - *Eskiden bahçeli büyük bir evimiz vardı.* (In the past we had a big house with a garden.)\n     - *Odamda küçük bir çalışma masası vardı.* (In my room there was a small study desk.)\n   - **YOKTU (There was NOT / were NO; I didn't have)**:\n     - *O zamanlar evimizde televizyon yoktu.* (At that time there was no television in our house.)\n\n2. The Definite Past Tense (-DI) for Childhood Routines:\n   - **yaşamak (to live)** $\\rightarrow$ *Biz köyde yaşadık.* (We lived in the village.)\n   - **büyümek (to grow up)** $\\rightarrow$ *Ben İzmir'de büyüdüm.* (I grew up in Izmir.)\n   - **oynamak (to play)** $\\rightarrow$ *Çocukken sokakta akşama kadar oynadık / oynardık.* (As kids we played in the street until evening.)\n\n3. High-Value Nostalgic Connectors:\n   - **Eskiden...** (In the old days / in the past...)\n   - **Çocukken...** (When I was a child...)\n   - **Küçükken...** (When I was little...)\n   - *Çocukken anneannem bize her pazar sıcak börek pişirirdi / pişirdi.* (When I was a kid my grandmother baked hot börek for us every Sunday.)",
      "examples": [
        {
          "target": "Eskiden köyde iki katlı ahşap bir evimiz vardı.",
          "reading": "ehs-kee-DEHN koy-DEH EE-kee kaht-LUH ahh-shahp beer eh-vee-MEEZ vahr-DUH",
          "translation": "In the past in the village we had a two-story wooden house."
        },
        {
          "target": "Küçükken mahalledeki çocuklarla sokakta saklambaç oynardık.",
          "reading": "kyoo-CHOOK-kehn mah-hahl-leh-deh-KEE choh-jook-lahr-LAH soh-kahk-TAH sahk-lahm-BAHCH oyn-yahr-DUHK",
          "translation": "When we were little, we used to play hide-and-seek on the street with neighborhood kids."
        }
      ],
      "mnemonics": [
        "VARDI = There was / I had; YOKTU = There was none / I didn't have!",
        "ÇOCUKKEN = When a child (-ken suffix attaches to nouns and verbs for 'while/when')!",
        "ESKİDEN = In the old days (eski = old)!"
      ],
      "culturalNotes": [
        "In Turkish neighborhood culture (**mahalle kültürü**), playing street games like **saklambaç** (hide-and-seek), **yakantop** (dodgeball), and sitting on doorsteps chatting are cherished universal childhood memories."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'Eskiden büyük bir evimiz vardı' cümlesi ne anlama gelir?",
          "options": [
            "We will buy a house tomorrow.",
            "In the past we had a big house.",
            "The house is small.",
            "Now we are building a house."
          ],
          "answerIndex": 1,
          "explanation": "'Vardı' expresses past existence/possession: we had."
        },
        {
          "prompt": "'Çocukken' kelimesindeki '-ken' eki ne işe yarar?",
          "options": [
            "'While / When' anlamı katar",
            "Gelecek zaman bildirir",
            "Soru sorar",
            "Çoğul yapar"
          ],
          "answerIndex": 0,
          "explanation": "-ken creates temporal adverbial clauses meaning 'when/while'."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Türkçeye çevirin: 'When I was little, I lived in Ankara.'",
          "options": [
            "Küçükken Ankara'da yaşadım (yaşıyordum).",
            "Ankara'yı hiç görmedim.",
            "Yarın Ankara'ya gideceğim.",
            "Şimdi Ankara'da oturuyorum."
          ],
          "answerIndex": 0,
          "explanation": "Küçükken (when little) + Ankara'da yaşadım (lived in Ankara)."
        },
        {
          "prompt": "'Yok' kelimesinin geçmiş zaman hali nasıldır?",
          "options": [
            "Yoktu",
            "Yokmuştu",
            "Yokdu",
            "Yokdı"
          ],
          "answerIndex": 0,
          "explanation": "Due to consonant harmony (k is voiceless), d becomes t: yoktu."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Eşleştirin: vardı, yoktu, çocukken, eskiden:",
          "options": [
            "vardı: there was/had | yoktu: there was no | çocukken: when a child | eskiden: in the past",
            "vardı: tomorrow | yoktu: today | çocukken: now | eskiden: future",
            "All mean tomorrow",
            "All mean today"
          ],
          "answerIndex": 0,
          "explanation": "Past time markers and existentials matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Neden 'yok' kelimesine geçmiş zaman eki gelirken 'yokdu' değil de 'yoktu' olur?",
          "options": [
            "Rastgele bir tercihtir",
            "Rehber kuralı olmadığı için",
            "Sadece İstanbul ağzında böyledir",
            "Fıstıkçı Şahap kuralı (ünsüz sertleşmesi/benzeşmesi) gereği sert ünsüz 'k'den sonra 'd' sesi 't'ye dönüşür"
          ],
          "answerIndex": 3,
          "explanation": "Consonant assimilation turns -di into -ti after voiceless consonants (k).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Çevirin: 'We didn't have a car in those years, we walked to school.'",
          "options": [
            "Okul çok yakındır.",
            "Arabamız çok hızlıydı.",
            "O yıllarda arabamız yoktu, okula yürüyerek giderdik (gittik).",
            "Yarın araba alacağız."
          ],
          "answerIndex": 2,
          "explanation": "Arabamız yoktu + yürüyerek giderdik.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Cümleyi tamamlayın: «Eskiden bu mahallede çok sessiz ve sakin bir hayat _______ .»",
          "options": [
            "yoktur",
            "vardı",
            "olacak",
            "olmalı"
          ],
          "answerIndex": 1,
          "explanation": "Sakin bir hayat vardı (there was a peaceful life).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 10, Lesson 4: Foundational & Structural Mastery (Eskiden köyde iki katlı ahşap )"
  },
  "tr-u10-l5": {
    "id": "tr-u10-l5",
    "unit": "tr-u10",
    "level": "A2",
    "objective": "Synthesize Turkish housing vocabulary, chore collocations, var/yok existentials, and past nostalgic storytelling to deliver a complete descriptive apartment tour and explain Turkish hospitality traditions (misafirperverlik, terlik, çay/kahve ikramı).",
    "presentation": {
      "explanation": "In this **A2 Milestone Checkpoint for Unit 10**, you integrate all vocabulary, var/yok structures, spatial postpositions, and past narrative forms to deliver **A Tour of My Turkish Apartment & Turkish Hospitality (Evim, Günlük Hayatım ve Misafirperverlik)**:\n\n1. The Grand Integration Narrative:\n   - *«Merhaba, hoş geldiniz! Lütfen içeri buyrun, kendi eviniz gibi hissedin! Ayakkabılarınızı antrede çıkarabilirsiniz, işte size rahat ev terlikleri.\n   İstanbul Kadıköy'deki 3 odalı dairemize hoş geldiniz. Salonumuz çok aydınlık ve geniştir; burada rahat bir köşe koltuk, ahşap bir sehpa ve duvar boyunca uzanan kitaplığımız var. Salondan balkona çıkılıyor; yaz akşamları balkonda oturup Marmara Denizi manzarasını izlemeyi çok seviyoruz.\n   Mutfakta buzdolabı, fırın ve bulaşık makinesi var. Masanın üstünde semaverde demlenmiş taze Türk çayı ve misafirler için fındıklı kurabiyeler hazır.\n   Eskiden, ben çocukken ailemizle birlikte Karadeniz'de yaylada ahşap bir evde yaşardık. Geniş bir bahçemiz, fındık ağaçlarımız ve tavuklarımız vardı. Bütün gün komşu çocuklarıyla sokaklarda koşardık ve akşamları sobada kestane pişirirdik. Şimdi şehirde modern bir dairede yaşıyorum ama o eski günlerin samimiyetini ve misafirperverliğini evimde yaşatmaya devam ediyorum.»*\n\n2. Key Functional Competencies Verified:\n   - Welcoming guests warmly (*Hoş geldiniz! Buyrun, terlikler burada!*).\n   - Describing room layouts and furniture positions with *var/yok* and locatives.\n   - Contrasting modern city apartment life with nostalgic Black Sea childhood memories using past forms (*yaşardık, vardı, koşardık*).",
      "examples": [
        {
          "target": "Integration Monologue: Welcoming guests to Kadıköy, offering slippers, touring rooms, offering tea, and reminiscing about a Black Sea wooden village home.",
          "reading": "A2 Milestone Monologue",
          "translation": "Complete Turkish home and lifestyle synthesis."
        },
        {
          "target": "Turkish Hospitality Welcome: 'Hoş geldiniz! Buyrun, kendi eviniz gibi hissedin!'",
          "reading": "HOHSH gehl-dee-NEE-zeh, booy-ROON kehn-DEE eh-vee-NEEZ gee-BEE hees-seh-JEEN",
          "translation": "Universal Turkish hospitable welcome."
        }
      ],
      "mnemonics": [
        "A2 UNIT 10 COMPLETE: Turkish Home, Furniture, Var/Yok, and Hospitality mastered!",
        "BUYRUN = Please come in / go ahead (the magic word of Turkish polite manners)!",
        "MİSAFİRPERVERLİK = Renowned Turkish hospitality (misafir = guest, perver = cherishing)!"
      ],
      "culturalNotes": [
        "In Turkish culture, guests are considered **Tanrı misafiri** (God's guests), and offering the best seat, endless cups of tea, Turkish coffee, and homemade sweets is an honored sacred duty of hospitality."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Entegre metinde yazar çocukluğunda nerede ve nasıl bir evde yaşıyordu?",
          "options": [
            "Karadeniz'de yaylada, geniş bahçeli ahşap bir evde",
            "Gökdelenin 20. katında",
            "Bir otelde",
            "Gemide"
          ],
          "answerIndex": 0,
          "explanation": "Metinde: 'Karadeniz'de yaylada ahşap bir evde yaşardık. Geniş bir bahçemiz... vardı'."
        },
        {
          "prompt": "Misafiri içeri davet ederken kullanılan en yaygın kibar Türkçe ifade hangisidir?",
          "options": [
            "Lütfen buyrun, hoş geldiniz!",
            "İçeri girmeyin",
            "Biletinizi gösterin",
            "Hemen gidin"
          ],
          "answerIndex": 0,
          "explanation": "'Lütfen buyrun, hoş geldiniz' is the quintessential hospitable welcome."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Türkçeye çevirin: 'Before, we had a quiet village house and we played in the garden.'",
          "options": [
            "Yarın bahçede koşacağız.",
            "Eskiden sakin bir köy evimiz vardı ve bahçede oynardık.",
            "Köyde hiç ev yoktu.",
            "Şimdi köyde ev satın alıyoruz."
          ],
          "answerIndex": 1,
          "explanation": "Eskiden sakin bir köy evimiz vardı ve bahçede oynardık."
        },
        {
          "prompt": "Türk kültüründe misafire çayın yanında ne ikram edilir?",
          "options": [
            "Hiçbir şey",
            "Kurabiye, börek, kek veya lokum",
            "Çiğ patates",
            "Sadece tuz"
          ],
          "answerIndex": 1,
          "explanation": "Tea is traditionally accompanied by homemade börek, cookies (kurabiye), or Turkish delight."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "10. Ünite boyunca hangi temel Türkçe dil becerileri kazanıldı?",
          "options": [
            "Gramer kuralları olmadan sadece sayılar",
            "Sadece okyanus balıklarının isimleri",
            "Yalnızca uzay terimleri",
            "Ev odaları ve mobilya kelimeleri (salon, mutfak, buzdolabı, koltuk, gardırop), ev işleri (toz almak, bulaşık yıkamak, süpürmek), var/yok cümleleri ve konum sonçekimleri (üstünde, altında, yanında), geçmiş zaman vardı/yoktu ve çocukluk anıları, ile Türk misafirperverliği gelenekleri"
          ],
          "answerIndex": 3,
          "explanation": "Comprehensive Turkish Unit 10 competencies certification.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ev ve komşulukla ilgili ünlü Türk atasözünü tamamlayın: «Ev alma, _______ al.»",
          "options": [
            "halı",
            "araba",
            "komşu",
            "koltuk"
          ],
          "answerIndex": 2,
          "explanation": "«Ev alma, komşu al» emphasizes the immense value of good neighbors over the physical property.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Neden 'var/yok' ve 'vardı/yoktu' yapılarında ustalaşmak A2/B1 seviyesine geçişte kilit rol oynar?",
          "options": [
            "Çünkü başka hiçbir kelime kullanılmaz",
            "Çünkü Türkçede hem mevcut mekanları tasvir etmenin hem de geçmişe ait hatıra ve sahiplikleri anlatmanın temel omurgasını oluşturur",
            "Önemsiz bir konudur",
            "Yalnızca yazılı edebiyatta bulunur"
          ],
          "answerIndex": 1,
          "explanation": "Existential structures are the backbone of spatial description and autobiographical memory in Turkish.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Cümleyi tamamlayın: «Çocukken sobada kestane _______ ve masallar dinlerdik.»",
          "options": [
            "pişirirdik",
            "koşardık",
            "yazardık",
            "içerdik"
          ],
          "answerIndex": 0,
          "explanation": "Kestane pişirirdik (we used to roast chestnuts).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 10, Lesson 5: Foundational & Structural Mastery (Integration Monologue: Welcomi)"
  },
  "tr-u11-l1": {
    "id": "tr-u11-l1",
    "unit": "tr-u11",
    "level": "A2",
    "objective": "İnsan vücudunun bölümlerini Türkçe olarak öğrenmek ve adlandırmak (Vücudun Bölümleri).",
    "presentation": {
      "explanation": "Temel vücut bölümleri sözlüğü:\n- Baş / Kafa (Head) / Yüz (Face)\n- Gözler (Eyes / Göz) / Burun (Nose) / Ağız (Mouth) / Kulaklar (Ears / Kulak)\n- Boyun / Boğaz (Neck / Throat) / Omuzlar (Shoulders) / Göğüs (Chest)\n- Kollar (Arms / Kol) / Eller (Hands / El) / Parmaklar (Fingers)\n- Karın / Mide (Belly / Stomach) / Sırt (Back)\n- Bacaklar (Legs / Bacak) / Dizler (Knees / Diz) / Ayaklar (Feet / Ayak)",
      "examples": [
        {
          "target": "Yemek yemeden önce ellerinizi sabunla güzelce yıkayın.",
          "reading": "YE-mek ye-me-DEN OEN-je el-le-ree-NEE sa-BOON-la gyoo-zel-JE yuh-KAH-yuhn",
          "translation": "Wash your hands nicely with soap before eating."
        },
        {
          "target": "Koşudan sonra bacaklarım ve dizlerim çok ağrıyor.",
          "reading": "ko-shoo-DAN son-RA ba-jak-la-RUHM ve deez-le-REEM chok ah-RUH-yor",
          "translation": "After the run my legs and knees hurt a lot."
        }
      ],
      "mnemonics": [
        "Baş, omuzlar, diz ve ayak - Turkish children's body rhyme!"
      ],
      "culturalNotes": [
        "In Turkish, \"boğaz\" means both throat (anatomical) and the Bosphorus Strait (geographical)!"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Türkçede \"stomach / belly\" anlamına gelen kelime hangisidir?",
          "options": [
            "Bacak",
            "Kol",
            "Ayak",
            "Karın / Mide"
          ],
          "answerIndex": 3,
          "explanation": "Karın / Mide means belly/stomach."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Türkçeye çevirin: \"My head hurts\"",
          "options": [
            "Yemek yiyorum",
            "Gözlerim büyük",
            "Uyumak istiyorum",
            "Başım ağrıyor"
          ],
          "answerIndex": 3,
          "explanation": "Başım ağrıyor expresses a headache."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Baş ile omuzlar arasında hangi vücut bölümü yer alır?",
          "options": [
            "Diz",
            "Ayak bileği",
            "Boyun / Boğaz",
            "Dirsek"
          ],
          "answerIndex": 2,
          "explanation": "Boyun (neck) links head to shoulders.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"Wash your hands before eating meals.\"",
          "options": [
            "Yemekten sonra uyuyun.",
            "Yemekten önce ellerinizi yıkayın.",
            "Su için.",
            "Eczaneye gidin."
          ],
          "answerIndex": 1,
          "explanation": "Yemekten önce ellerinizi yıkayın is exact.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 11, Lesson 1: Foundational & Structural Mastery (Yemek yemeden önce ellerinizi )"
  },
  "tr-u11-l2": {
    "id": "tr-u11-l2",
    "unit": "tr-u11",
    "level": "A2",
    "objective": "Ağrı ve hastalık belirtilerini \"-ım ağrıyor\" ve \"ateşim/öksürüğüm var\" kalıplarıyla ifade etmek.",
    "presentation": {
      "explanation": "Belirtiler ve Ağrı İfade Kalıpları:\n1. [İyelik Eki] + ağrıyor:\n   - Başım ağrıyor (My head hurts)\n   - Boğazım ağrıyor (My throat hurts)\n   - Karnım ağrıyor (My stomach hurts)\n   - Bacaklarım ağrıyor (My legs hurt)\n2. [Belirti] + var:\n   - Yüksek ateşim var (I have a high fever)\n   - Kuru öksürüğüm ve burun akıntım var (I have a dry cough and runny nose)\n   - Başım dönüyor / Midem bulanıyor (I feel dizzy / nauseous)\n   - Üşüttüm / Grip oldum (I caught a cold / flu)",
      "examples": [
        {
          "target": "Dünden beri otuz sekiz buçuk derece ateşim var ve boğazım çok fena ağrıyor.",
          "reading": "doon-DEN be-REE o-TOOZ se-KEEZ boo-CHOOK de-re-JE a-te-SHEEM var ve bo-ah-ZUHM chok fe-NAH ah-RUH-yor.",
          "translation": "Since yesterday I have a 38.5 fever and my throat hurts terribly."
        }
      ],
      "mnemonics": [
        "GEÇMİŞ OLSUN! = The universal Turkish wish for healing and recovery!"
      ],
      "culturalNotes": [
        "When an illness is mentioned, Turks immediately say \"Geçmiş olsun!\" (May it pass / Get well soon!) and offer hot linden tea (ıhlamur çayı) with honey and lemon."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Hasta olan birine Türkçede ne denir?",
          "options": [
            "Geçmiş olsun!",
            "İyi yolculuklar!",
            "Afiyet olsun!",
            "Tebrikler!"
          ],
          "answerIndex": 0,
          "explanation": "Geçmiş olsun means get well soon."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Türkçeye çevirin: \"I feel dizzy and have chills.\"",
          "options": [
            "Başım dönüyor ve titriyorum (üşüyorum).",
            "Çok mutluyum.",
            "Sinemaya gidiyorum.",
            "Hava çok sıcak."
          ],
          "answerIndex": 0,
          "explanation": "Başım dönüyor expresses dizziness."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Boşluğu doldurun: \"Eğer ateşin ve öksürüğün varsa, ______ olmuşsun.\"",
          "options": [
            "uykucu",
            "grip / hasta",
            "tok",
            "zengin"
          ],
          "answerIndex": 1,
          "explanation": "Fever and cough indicate illness (grip/hasta).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"His stomach hurts.\"",
          "options": [
            "Onun karnı ağrıyor.",
            "O çay içiyor.",
            "Onun arabası var.",
            "O kitap okuyor."
          ],
          "answerIndex": 0,
          "explanation": "Onun karnı ağrıyor is exact.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 11, Lesson 2: Foundational & Structural Mastery (Dünden beri otuz sekiz buçuk d)"
  },
  "tr-u11-l3": {
    "id": "tr-u11-l3",
    "unit": "tr-u11",
    "level": "A2",
    "objective": "Eczaneden ilaç satın almak ve reçete / prospektüs talimatlarını anlamak.",
    "presentation": {
      "explanation": "Eczanede:\n- Eczane (Pharmacy) / Eczacı (Pharmacist)\n- İlaç (Medicine)\n- Ağrı kesici (Painkiller) / Ateş düşürücü (Fever reducer)\n- Hap / Tablet (Pills / Tablets)\n- Öksürük şurubu (Cough syrup)\n- Reçete / e-Reçete (Prescription)\n- Prospektüs (Medication leaflet/instructions)\n- Reçetesiz (OTC) / Reçeteli (Prescription required)\n\nKullanım Talimatı:\n- \"Bu ilacı günde iki kez, yemeklerden sonra bol su ile içiniz.\"",
      "examples": [
        {
          "target": "Merhabalar, doktorun yazdığı bu e-reçetedeki antibiyotikleri alabilir miyim?",
          "reading": "mer-ha-ba-LAR, dok-to-ROON yaz-DUH-yuh boo e-re-che-te-DE-kee an-tee-bee-yo-teek-le-REE a-la-bee-LEER mee-yeem?",
          "translation": "Hello, can I get the antibiotics on this e-prescription written by the doctor?"
        }
      ],
      "mnemonics": [
        "AĞRI KESİCİ = Pain (Ağrı) + Cutter/Stopper (Kesici) = Painkiller!"
      ],
      "culturalNotes": [
        "In Turkey, pharmacies (Eczane) display a large glowing red \"E\" sign and maintain an official night duty roster (Nöbetçi Eczane) on weekends and evenings."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "\"Günde üç kez yemekten sonra\" ne anlama gelir?",
          "options": [
            "Once every three days",
            "Three pills at breakfast",
            "Three times daily after meals",
            "Before dinner only"
          ],
          "answerIndex": 2,
          "explanation": "Günde üç kez yemekten sonra means 3 times a day after meals."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Gece ve pazar günleri açık olan nöbetçi eczaneye ne ad verilir?",
          "options": [
            "Nöbetçi Eczane",
            "Süpermarket",
            "Lokanta",
            "Havalimanı"
          ],
          "answerIndex": 0,
          "explanation": "Nöbetçi Eczane is the duty/emergency pharmacy."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Türkçeye çevirin: \"Take this cough syrup before going to bed.\"",
          "options": [
            "Bu öksürük şurubunu yatmadan önce içiniz.",
            "Öğlen kahve içiniz.",
            "İlaçları yarın alınız.",
            "Sabahları ekmek yiyiniz."
          ],
          "answerIndex": 0,
          "explanation": "Bu öksürük şurubunu yatmadan önce içiniz is exact.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ağrı kesici ilaçlar ne işe yarar?",
          "options": [
            "Araba tamir etmeye yarar",
            "Yemek pişirmeye yarar",
            "Ev temizlemeye yarar",
            "Vücuttaki ağrıları dindirmeye yardımcı olur"
          ],
          "answerIndex": 3,
          "explanation": "Ağrı kesiciler relieve physical pain.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 11, Lesson 3: Foundational & Structural Mastery (Merhabalar, doktorun yazdığı b)"
  },
  "tr-u11-l4": {
    "id": "tr-u11-l4",
    "unit": "tr-u11",
    "level": "A2",
    "objective": "Sağlıklı yaşam, şifalı bitki çayları (Ihlamur/Adaçayı) ve Türk kaplıca geleneklerini konuşmak.",
    "presentation": {
      "explanation": "Türkiye'de Sağlıklı Yaşam ve Şifa Gelenekleri:\n- Şifalı bitki çayları: Ihlamur (Linden), Adaçayı (Sage), Kuşburnu (Rosehip), Nane-Limon (Mint-Lemon)\n- Düzenli açık hava yürüyüşleri (Belgrad Ormanı veya sahil şeridinde yürüyüş)\n- Doğal beslenme: zeytinyağlı taze sebzeler, yoğurt, sarımsak ve hakiki bal\n- Türk hamamı ve termal kaplıcalar (Thermal springs in Bursa, Pamukkale, Afyon)\n- Atasözü: \"Her şeyin başı sağlık!\" (Health is the foundation of everything!)",
      "examples": [
        {
          "target": "Grip olduğum zaman annem hemen ballı sıcak ıhlamur ve taze nane-limon kaynatır.",
          "reading": "greep ol-doo-OOM za-MAN an-NEM he-MEN bal-LUH suh-JAK uhh-la-MOOR ve ta-ZE na-NE lee-MON kay-na-TUHR.",
          "translation": "When I get the flu, my mother immediately boils hot linden with honey and fresh mint-lemon."
        }
      ],
      "mnemonics": [
        "HER ŞEYİN BAŞI SAĞLIK = Health is the beginning and crown of all things!"
      ],
      "culturalNotes": [
        "Nane-limon (fresh mint and whole lemon slices boiled in water with honey) is Turkey's beloved national home remedy for colds and upset stomachs."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Türk ailelerinde grip ve soğuk algınlığına karşı kaynatılan meşhur geleneksel çay hangisidir?",
          "options": [
            "Şekerli gazoz",
            "Ballı Ihlamur veya Nane-Limon çayı",
            "Buzlu su",
            "Soğuk kola"
          ],
          "answerIndex": 1,
          "explanation": "Ihlamur and Nane-Limon are Turkey's classic cold remedies."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Meşhur Türk atasözünü tamamlayın: \"Her şeyin başı ______.\"",
          "options": [
            "sağlık",
            "uyku",
            "para",
            "araba"
          ],
          "answerIndex": 0,
          "explanation": "Her şeyin başı sağlık (Health is the head of all things)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Hangisi kanıtlanmış sağlıklı bir yaşam alışkanlığıdır?",
          "options": [
            "Sadece abur cubur yemek",
            "Günde 15 saat hareketsiz oturmak",
            "Hiç su içmemek",
            "Düzenli yürüyüş, dengeli beslenme ve yeterli uyku"
          ],
          "answerIndex": 3,
          "explanation": "Regular walking, balanced diet, and sufficient sleep.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"Daily exercise strengthens the immune system.\"",
          "options": [
            "Hastane kapalıdır.",
            "Spor yapmak insanı hasta eder.",
            "Günlük egzersiz bağışıklık sistemini güçlendirir.",
            "Doktor tatile gitti."
          ],
          "answerIndex": 2,
          "explanation": "Günlük egzersiz bağışıklık sistemini güçlendirir is exact.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 11, Lesson 4: Foundational & Structural Mastery (Grip olduğum zaman annem hemen)"
  },
  "tr-u11-l5": {
    "id": "tr-u11-l5",
    "unit": "tr-u11",
    "level": "A2",
    "objective": "Aile hekimliğinde veya hastanede doktor muayenesi ve istirahat raporu sürecini canlandırmak.",
    "presentation": {
      "explanation": "Aile Sağlığı Merkezi / Hastanede Doktor Muayenesi:\n1. Kayıt ve TC Kimlik / Randevu (MHRS):\n   - \"Randevum vardı, işte kimlik kartım.\"\n2. Muayene Odasında:\n   - Doktor: \"Hoş geldiniz, neyiniz var? Şikayetiniz nedir?\"\n   - Hasta: \"Doktor Bey, iki gündür şiddetli öksürüğüm, göğüs ağrım ve 38.5 ateşim var.\"\n3. Muayene & Teşhis:\n   - Doktor: \"Muayene masasına geçin lütfen. Ağzınızı açın, ‚Aaa‘ deyin... Derin nefes alın... verin... Çok güzel.\"\n   - \"Hafif bir bronşit başlangıcı var. Antibiyotik yazıyorum ve 4 günlük istirahat raporu veriyorum. Çok geçmiş olsun!\"",
      "examples": [
        {
          "target": "Doktor: \"Derin nefes alın... nefesinizi tutun... verin. Boğazınız oldukça kızarmış.\"\nHasta: \"Çok teşekkür ederim doktor bey!\"",
          "reading": "Doktor muayenesi Türkiye",
          "translation": "Doctor: \"Breathe deeply... hold your breath... exhale. Your throat is quite red.\"\nPatient: \"Thank you very much, doctor!\""
        }
      ],
      "mnemonics": [
        "İstirahat raporu = Official medical sick leave certificate in Turkey"
      ],
      "culturalNotes": [
        "In Turkey, primary medical care is accessed through local Family Health Centers (Aile Sağlığı Merkezi) free of charge with your national identity number."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "İş yerinden hastalık nedeniyle izin almak için doktorun verdiği resmi belgeye ne denir?",
          "options": [
            "İstirahat / Sağlık Raporu",
            "Uçak bileti",
            "Kira sözleşmesi",
            "Ehliyet"
          ],
          "answerIndex": 0,
          "explanation": "İstirahat raporu is the official medical sick leave report."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Doktor stetoskopla akciğerleri dinlerken \"Derin nefes alın\" dediğinde ne yapmalısınız?",
          "options": [
            "Gözlerinizi kapatıp uyumalısınız",
            "Ağzınızdan/burnunuzdan derin bir nefes alıp vermelisiniz",
            "Su içmelisiniz",
            "Ayağa kalkıp koşmalısınız"
          ],
          "answerIndex": 1,
          "explanation": "Derin nefes alın instructs deep breathing for stethoscope exam."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Doktor muayenesinin doğru aşamalarını sıralayın:",
          "options": [
            "1. Ödeme -> 2. Uyku -> 3. Muayene",
            "1. İlaç içmek -> 2. Doktora gitmek -> 3. Hastalanmak",
            "1. Giriş kaydı ve kimlik -> 2. Şikayetlerin anlatılması -> 3. Klinik muayene -> 4. Teşhis, reçete ve rapor",
            "1. İyileşmek -> 2. Randevu -> 3. Hastane"
          ],
          "answerIndex": 2,
          "explanation": "Standard clinical consultation workflow in Turkey.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"The doctor advised me to rest at home for four days.\"",
          "options": [
            "Doktor dört gün tatile gitti.",
            "Doktor evde dört gün istirahat etmemi tavsiye etti.",
            "Hastanede dört gün çalıştım.",
            "Eczane dört gün kapalı kaldı."
          ],
          "answerIndex": 1,
          "explanation": "Doktor evde dört gün istirahat etmemi tavsiye etti is exact.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 11, Lesson 5: Foundational & Structural Mastery (Doktor: \"Derin nefes alın... n)"
  },
  "tr-u12-l1": {
    "id": "tr-u12-l1",
    "unit": "tr-u12",
    "level": "A2",
    "objective": "Meslekler, iş unvanları ve çalışma alanları ile ilgili Türkçe sözcük dağarcığı (Meslekler ve İş Hayatı).",
    "presentation": {
      "explanation": "Meslekler ve İş Kolları:\n- Yazılım Mühendisi / Geliştirici (Software Engineer / Developer)\n- Doktor / Hemşire / Eczacı (Doctor / Nurse / Pharmacist)\n- Avukat / Hukuk Müşaviri (Lawyer / Legal Counsel)\n- Öğretmen / Üniversite Öğretim Üyesi (Teacher / Professor)\n- Muhasebeci / Mali Müşavir (Accountant / Financial Advisor)\n- Proje Yöneticisi (Project Manager)\n- Satış ve Pazarlama Uzmanı (Sales & Marketing Specialist)\n\nCümle Kalıbı:\n- \"İstanbul'da / Ankara'da bir teknoloji şirketinde yazılım mühendisi olarak çalışıyorum.\"",
      "examples": [
        {
          "target": "İstanbul Maslak'ta uluslararası bir şirkette veri analisti olarak görev yapıyorum.",
          "reading": "ees-tan-BOOL mas-LAK-ta oo-loos-lar-a-ra-SUH beer sheer-ket-TE ve-REE a-na-lees-TEE o-la-RAK goe-rev ya-puh-YO-room.",
          "translation": "I work as a data analyst at an international company in Maslak, Istanbul."
        }
      ],
      "mnemonics": [
        "Maslak & Levent = Major financial & corporate tech centers in Istanbul!"
      ],
      "culturalNotes": [
        "Istanbul is the economic powerhouse of Turkey, with modern skyscrapers and fintech/e-commerce clusters in Maslak, Levent, and Ataşehir."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Türkçede \"I work as a software engineer\" nasıl söylenir?",
          "options": [
            "Ben yazılımım",
            "Bilgisayar satın aldım",
            "Ofiste uyuyorum",
            "Yazılım mühendisi olarak çalışıyorum"
          ],
          "answerIndex": 3,
          "explanation": "Yazılım mühendisi olarak çalışıyorum is exact."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Bir \"mali müşavir\" veya \"muhasebeci\" ne iş yapar?",
          "options": [
            "Otobüs şoförlüğü yapar",
            "Binaları boyar",
            "Yemek pişirir",
            "Şirketin finansal kayıtlarını, gelir-gider dengesini ve vergi süreçlerini yönetir"
          ],
          "answerIndex": 3,
          "explanation": "Accountant role."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Türkiye'nin en büyük iş ve finans merkezleri hangi şehirde toplanmıştır?",
          "options": [
            "Van Gölü",
            "İstanbul",
            "Kapadokya Vadisi",
            "Uludağ Zirvesi"
          ],
          "answerIndex": 1,
          "explanation": "Istanbul financial center.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"She works as a project manager at a multinational corporation.\"",
          "options": [
            "Çok uluslu bir şirkette proje yöneticisi olarak çalışıyor.",
            "Pazara alışverişe gitti.",
            "Ofis kapalıdır.",
            "O ilkokulda öğrencidir."
          ],
          "answerIndex": 0,
          "explanation": "Accurate business translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 12, Lesson 1: Foundational & Structural Mastery (İstanbul Maslak'ta uluslararas)"
  },
  "tr-u12-l2": {
    "id": "tr-u12-l2",
    "unit": "tr-u12",
    "level": "A2",
    "objective": "Ofis rutinleri, toplantılar, sprint planlaması ve uzaktan / hibrit çalışma düzenini anlatmak.",
    "presentation": {
      "explanation": "Ofis Günlükleri ve Görevler:\n- E-postaları kontrol etmek ve yanıtlamak (Checking & answering emails)\n- Sabah toplantısına (daily stand-up) katılmak (Attending daily stand-up)\n- Teslim tarihine (deadline) yetişmek (Meeting the deadline)\n- Mesai arkadaşlarıyla çay/kahve molası vermek (Tea/coffee break)\n- Uzaktan çalışma (remote) / Hibrit çalışma modeli (Remote/Hybrid work)",
      "examples": [
        {
          "target": "Her pazartesi sabahı saat onda haftalık hedeflerimizi planlamak için ekip toplantısı yapıyoruz.",
          "reading": "her pa-zar-te-SEE sa-ba-HUH sa-AT on-DA haf-ta-LUHK he-def-le-ree-mee-ZEE plan-la-MAK ee-CHEEN e-KEEp top-lan-tuh-SUH ya-puh-YO-rooz.",
          "translation": "Every Monday morning at 10 AM we have a team meeting to plan our weekly goals."
        }
      ],
      "mnemonics": [
        "Türk Çayı / Kahve Molası = Essential Turkish office bonding ritual!"
      ],
      "culturalNotes": [
        "In Turkish corporate offices, drinking freshly brewed Turkish tea in thin-waisted glasses (ince belli bardakta çay) throughout the day is standard workplace culture."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "\"Uzaktan çalışma\" veya \"home office\" ne anlama gelir?",
          "options": [
            "İnternet ve bilgisayar aracılığıyla ofise gitmeden evden çalışmak",
            "Gece vardiyasında çalışmak",
            "Tatile çıkıp hiç çalışmamak",
            "İşten ayrılmak"
          ],
          "answerIndex": 0,
          "explanation": "Remote work."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Türkiye'de ofislerde gün boyu ince belli bardaklarda tüketilen geleneksel içecek nedir?",
          "options": [
            "Taze demlenmiş Türk çayı",
            "Tuzlu soğuk ayran",
            "Motor yağı",
            "Sirke"
          ],
          "answerIndex": 0,
          "explanation": "Türk çayı is the classic office beverage."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "\"Teslim tarihine yetişmek\" (deadline) ne demektir?",
          "options": [
            "Verilen görevi veya projeyi belirlenen son günde ya da öncesinde başarıyla tamamlamak",
            "İşe 3 saat geç kalmak",
            "Dosyaları kaybetmek",
            "Projeyi iptal etmek"
          ],
          "answerIndex": 0,
          "explanation": "Meeting deadline on time.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"We scheduled an important video call with our partners this afternoon.\"",
          "options": [
            "Bilgisayarım yok.",
            "Müşteri köyde yaşıyor.",
            "Dün öğle yemeği yedik.",
            "Bu öğleden sonra iş ortaklarımızla önemli bir görüntülü toplantı planladık."
          ],
          "answerIndex": 3,
          "explanation": "Accurate business translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 12, Lesson 2: Foundational & Structural Mastery (Her pazartesi sabahı saat onda)"
  },
  "tr-u12-l3": {
    "id": "tr-u12-l3",
    "unit": "tr-u12",
    "level": "A2",
    "objective": "Bilişim teknolojileri terimleri, donanım, bulut depolama ve çevrim içi toplantılar.",
    "presentation": {
      "explanation": "Bilişim ve Dijital Çalışma Alanı Terimleri:\n- Dizüstü bilgisayar / Laptop / Masaüstü PC (Laptop / Desktop PC)\n- Ekran / Klavye / Fare (Mouse) / Kulaklık (Screen / Keyboard / Mouse / Headset)\n- Şifre / Parola / Kullanıcı adı (Password / Username)\n- Ekli dosya / Bulut depolama (Attachment / Cloud storage)\n- Ekran paylaşımı (Screen sharing in video calls)\n- Sessizde olmak (\"Sessizdesiniz! Lütfen mikrofonunuzu açın!\")\n- Güvenli VPN bağlantısı / İnternet kesintisi",
      "examples": [
        {
          "target": "Sessizdesiniz! Toplantıda konuşabilmeniz için lütfen mikrofonunuzu açın.",
          "reading": "ses-seez-de-SEE-neez! top-lan-tuh-DA ko-noo-sha-beel-me-NEEZ ee-CHEEN lewt-FEN meek-ro-fo-noo-NOO-zoo ah-CHUHN.",
          "translation": "You're on mute! Please unmute your microphone so you can speak in the meeting."
        }
      ],
      "mnemonics": [
        "SESSİZDESİNİZ = You're on mute in Turkish video calls!"
      ],
      "culturalNotes": [
        "Turkey has rapid digital adoption, with ubiquitous online collaboration tools (Teams, Slack, Zoom) across startup and enterprise sectors."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Online toplantıda mikrofonu kapalı olan birine ne denir?",
          "options": [
            "Ekranınız yok.",
            "Bilgisayarı kapatın.",
            "Sessizdesiniz! Mikrofonunuzu açın.",
            "Kapıyı örtün."
          ],
          "answerIndex": 2,
          "explanation": "Sessizdesiniz is standard."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "\"Ekran paylaşımı\" ne anlama gelir?",
          "options": [
            "Bilgisayar ekranını toplantıdaki diğer katılımcılara canlı olarak yansıtmak",
            "Ekranın tozunu silmek",
            "İnterneti kapatmak",
            "Yeni bir monitör almak"
          ],
          "answerIndex": 0,
          "explanation": "Screen sharing."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "\"Password\" kelimesinin Türkçe karşılığı nedir?",
          "options": [
            "Ek dosya",
            "Klavye",
            "Kablo",
            "Şifre / Parola"
          ],
          "answerIndex": 3,
          "explanation": "Şifre / Parola is password.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"Please enter your username and password to log in.\"",
          "options": [
            "Ekran kirlendi.",
            "Fare bozuldu.",
            "Sisteme giriş yapmak için lütfen kullanıcı adınızı ve şifrenizi giriniz.",
            "Yeni bir laptop satın alınız."
          ],
          "answerIndex": 2,
          "explanation": "Accurate interface instruction.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 12, Lesson 3: Foundational & Structural Mastery (Sessizdesiniz! Toplantıda konu)"
  },
  "tr-u12-l4": {
    "id": "tr-u12-l4",
    "unit": "tr-u12",
    "level": "A2",
    "objective": "Resmi kurumsal e-posta ve iş yazışmalarını kurallarına uygun olarak yazmak.",
    "presentation": {
      "explanation": "Türk İş Dünyasında Resmi E-posta Yapısı:\n1. Resmi Hitap:\n   - Sayın [Ad Soyad] / Sayın Yetkili, (Dear [Name] / Dear Authority,)\n   - Değerli Ekip Arkadaşlarım, / Merhabalar,\n2. Gövde Metni:\n   - Projemizin güncel ilerleme raporunu paylaşmak amacıyla yazıyorum...\n   - Talep edilen finansal raporu ekte bilgilerinize sunarım.\n   - Herhangi bir sorunuz olursa memnuniyetle yardımcı olmak isterim.\n3. Resmi Kapanış:\n   - Saygılarımla, / İyi çalışmalar dilerim,\n   - Teşekkür eder, iyi günler dilerim,",
      "examples": [
        {
          "target": "Sayın Ahmet Bey,\nRevize edilen proje sunumunu ekte bilgilerinize sunarım. Değerlendirmenizi rica ederim.\nSaygılarımla,\nZeynep Kaya",
          "reading": "Resmi e-posta örneği",
          "translation": "Turkish professional business email."
        }
      ],
      "mnemonics": [
        "İyi çalışmalar dilerim / Saygılarımla = The quintessential Turkish corporate email closing!"
      ],
      "culturalNotes": [
        "In Turkish corporate correspondence, addressing colleagues as \"[First Name] Bey\" (for men) or \"[First Name] Hanım\" (for women) is standard respectful etiquette."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Türk iş dünyasında e-posta sonunda en sık kullanılan resmi kapanış dileği hangisidir?",
          "options": [
            "Hadi eyvallah",
            "Saygılarımla, / İyi çalışmalar dilerim,",
            "Bay bay",
            "Görüşürüz kanka!"
          ],
          "answerIndex": 1,
          "explanation": "İyi çalışmalar dilerim is the standard closing."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Bir belgenin e-postaya eklendiğini resmi olarak nasıl ifade edersiniz?",
          "options": [
            "İlgili dosyayı ekte bilgilerinize sunarım.",
            "İnternetten kendiniz bulun.",
            "Hiçbir dosya göndermiyorum.",
            "Dosya kayboldu."
          ],
          "answerIndex": 0,
          "explanation": "Ekte sunarım indicates attachments."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Mehmet Bey'e yazılan resmi bir e-postanın başlangıç hitabı nasıl olmalıdır?",
          "options": [
            "Naber Memo!",
            "Sen kimsin?",
            "Sayın Mehmet Bey,",
            "Hey Mehmet!"
          ],
          "answerIndex": 2,
          "explanation": "Sayın Mehmet Bey is standard formal address.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"Thank you for your prompt reply and collaboration.\"",
          "options": [
            "Çok geç cevap verdiniz.",
            "Hızlı yanıtınız ve iş birliğiniz için çok teşekkür ederim.",
            "Telefonun şarjı bitti.",
            "E-postanızı almadım."
          ],
          "answerIndex": 1,
          "explanation": "Accurate business gratitude.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 12, Lesson 4: Foundational & Structural Mastery (Sayın Ahmet Bey,\nRevize edilen)"
  },
  "tr-u12-l5": {
    "id": "tr-u12-l5",
    "unit": "tr-u12",
    "level": "A2",
    "objective": "İş mülakatı simülasyonu, yetkinlikleri sunma ve maaş beklentisi müzakeresi.",
    "presentation": {
      "explanation": "İş Görüşmesi ve Mülakat Süreci:\n1. İK ve Mülakat Soruları:\n   - \"Bize eğitim ve iş deneyimlerinizden kısaca bahseder misiniz?\"\n   - \"En güçlü yönleriniz ve mesleki yetkinlikleriniz nelerdir?\"\n   - \"Maaş beklentiniz (net/brüt) nedir?\"\n2. Adayın Yanıtları:\n   - \"Dört yılı aşkın süredir yazılım mimarisi ve veri yönetimi alanında çalışıyorum.\"\n   - \"Analitik düşünme yeteneğim, problem çözme becerim ve takım çalışmasına yatkınlığım en güçlü yönlerimdir.\"\n   - \"Şirketinizin yenilikçi vizyonuna katkı sağlamayı ve ekiple birlikte büyümeyi hedefliyorum.\"",
      "examples": [
        {
          "target": "Mülakatçı: \"Neden bizim şirketimizde çalışmak istiyorsunuz?\"\nAday: \"Şirketinizin teknolojik inovasyon odaklı kültürünü ve sunduğu profesyonel gelişim fırsatlarını çok değerli buluyorum.\"",
          "reading": "İş mülakatı Türkiye",
          "translation": "Interviewer: \"Why do you want to work at our company?\"\nCandidate: \"I highly value your company's culture focused on technological innovation and the professional growth opportunities it offers.\""
        }
      ],
      "mnemonics": [
        "Net Maaş = Take-home pay after tax in Turkey!"
      ],
      "culturalNotes": [
        "In Turkish job offers, candidates frequently negotiate net monthly salary (aylık net maaş) alongside benefits (özel sağlık sigortası, yemek kartı)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "İş görüşmesinde \"maaş beklentisi\" neyi ifade eder?",
          "options": [
            "Adayın pozisyon karşılığında talep ettiği ücret miktarını",
            "Otobüs biletinin fiyatını",
            "Ev kirasını",
            "Devlet vergisini"
          ],
          "answerIndex": 0,
          "explanation": "Maaş beklentisi is desired compensation."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "İş görüşmesinde takım çalışması becerinizi nasıl vurgularsınız?",
          "options": [
            "Toplantılara katılmam.",
            "Takım çalışmasına yatkınım ve çalışma arkadaşlarımla etkili iletişim kurarım.",
            "Projeyle ilgilenmiyorum.",
            "Yalnızca tek başıma çalışırım."
          ],
          "answerIndex": 1,
          "explanation": "Teamwork competency highlight."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "İş başvurusunda adayın geçmiş eğitim ve kariyer bilgilerini özetleyen belgeye ne denir?",
          "options": [
            "Su faturası",
            "Özgeçmiş (CV) / Portfolyo",
            "Uçak bileti",
            "Alışveriş fişi"
          ],
          "answerIndex": 1,
          "explanation": "Özgeçmiş / CV.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"I have strong problem-solving and analytical skills.\"",
          "options": [
            "Güçlü analitik düşünme ve karmaşık problemleri çözme yetkinliğine sahibim.",
            "Bilgisayar kullanmayı bilmiyorum.",
            "Sorumluluk almak istemiyorum.",
            "Şirket kapatıldı."
          ],
          "answerIndex": 0,
          "explanation": "Accurate competency statement.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 12, Lesson 5: Foundational & Structural Mastery (Mülakatçı: \"Neden bizim şirket)"
  },
  "tr-u13-l1": {
    "id": "tr-u13-l1",
    "unit": "tr-u13",
    "level": "A2",
    "objective": "Hobiler, boş zaman etkinlikleri, enstrüman çalma ve doğa yürüyüşlerini Türkçe olarak ifade etmek (Hobiler ve Boş Zaman).",
    "presentation": {
      "explanation": "Türkiye'de Boş Zaman ve Hobiler:\n- Doğa yürüyüşü ve kampçılık (Hiking & camping in Kaçkar Mountains, Likya Yolu, Kapadokya)\n- Müzik aleti çalmak (Bağlama / Saz çalmak, gitar, ney, piyano)\n- Fotoğrafçılık ve resim sanatı (Photography & painting)\n- Kitap okumak (Edebi romanlar, şiir - Nazım Hikmet, Orhan Pamuk)\n- Sahilde yürüyüş yapmak ve Boğaz turu (Bosphorus strolls)\n\nCümle Kalıpları:\n- \"Boş zamanlarımda doğa fotoğrafları çekmeyi ve bağlama çalmayı çok seviyorum.\"\n- \"Hafta sonları dağ yürüyüşü yapmaktan büyük keyif alıyorum.\"",
      "examples": [
        {
          "target": "Boş zamanlarımda Boğaz kıyısında yürüyüş yapmayı ve sahaf sahaf gezip eski kitaplar aramayı çok severim.",
          "reading": "bosh za-man-la-ruhm-DA bo-ahz kuh-yuhn-DA yoo-rew-YEWSH yap-mah-YEE... chok se-ve-REEM.",
          "translation": "In my free time, I love walking along the Bosphorus shore and browsing secondhand bookshops for old books."
        }
      ],
      "mnemonics": [
        "Bağlama / Saz = The soulful traditional Turkish long-necked lute instrument!"
      ],
      "culturalNotes": [
        "Trekking along the ancient Lycian Way (Likya Yolu) along the Mediterranean turquoise coast is one of the world's premier long-distance hiking routes."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Türk halk müziğinin en temel ve köklü telli sazı hangisidir?",
          "options": [
            "Keman",
            "Piyano",
            "Bateri",
            "Bağlama"
          ],
          "answerIndex": 3,
          "explanation": "Bağlama (Saz)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Türkçeye çevirin: \"In my free time, I enjoy playing the acoustic guitar.\"",
          "options": [
            "Eski gitarları satıyorum.",
            "Müzik çok sıkıcıdır.",
            "Boş zamanım hiç yok.",
            "Boş zamanlarımda akustik gitar çalmaktan keyif alırım."
          ],
          "answerIndex": 3,
          "explanation": "Accurate hobby translation."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Türkiye'nin Akdeniz kıyısında yer alan dünyaca ünlü tarihi antik yürüyüş rotası hangisidir?",
          "options": [
            "Likya Yolu",
            "Kral Yolu",
            "Baharat Yolu",
            "İpek Yolu"
          ],
          "answerIndex": 0,
          "explanation": "Likya Yolu.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Boşluğu doldurun: \"Hafta sonları ormanda doğa ______ yapıyoruz.\"",
          "options": [
            "hesaplaması",
            "faturası",
            "vergisi",
            "yürüyüşü / kampı"
          ],
          "answerIndex": 3,
          "explanation": "Doğa yürüyüşü means hiking.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 13, Lesson 1: Foundational & Structural Mastery (Boş zamanlarımda Boğaz kıyısın)"
  },
  "tr-u13-l2": {
    "id": "tr-u13-l2",
    "unit": "tr-u13",
    "level": "A2",
    "objective": "Türk spor kültürü, futbol tutkusu (Üç Büyükler: Galatasaray, Fenerbahçe, Beşiktaş), basketbol ve güreş.",
    "presentation": {
      "explanation": "Türkiye'de Spor ve Taraftarlık Kültürü:\n- Futbol (Süper Lig: \"Üç Büyükler\" - Galatasaray, Fenerbahçe, Beşiktaş, Trabzonspor)\n- Tarihi derbi maçları ve coşkulu tribün besteleri\n- Basketbol (EuroLeague şampiyonlukları - Anadolu Efes, Fenerbahçe Beko)\n- Geleneksel Yağlı Güreş (Tarihi Kırkpınar Yağlı Güreşleri - Edirne)\n- Voleybol (A Milli Kadın Voleybol Takımı - \"Filenin Sultanları\" Avrupa & Dünya Şampiyonu)\n\nMaç Terimleri:\n- Gol atmak / beraberlik / şampiyon olmak / hakem / taraftar",
      "examples": [
        {
          "target": "Derbi maçını izlemek için stadyuma gittik ve taraftarlar doksan dakika boyunca takımı coşkuyla destekledi.",
          "reading": "der-BEE ma-chuh-NUH eez-le-MEK ee-CHEEN stad-yoo-MA geet-TEEK...",
          "translation": "We went to the stadium to watch the derby match and the fans passionately supported the team for ninety minutes."
        }
      ],
      "mnemonics": [
        "Filenin Sultanları = World and European Champion Turkish Women's National Volleyball Team!"
      ],
      "culturalNotes": [
        "Football derbies in Istanbul (Fenerbahçe vs Galatasaray \"Kıtalararası Derbi\") are among the most electric and fiercely contested rivalries in world sport."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Dünya ve Avrupa şampiyonu olan Türkiye A Milli Kadın Voleybol Takımımızın ünlü unvanı nedir?",
          "options": [
            "Filenin Sultanları",
            "Yıldızlar",
            "Boğazın Kartalları",
            "Sarı Kanaryalar"
          ],
          "answerIndex": 0,
          "explanation": "Filenin Sultanları."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Edirne'de yüzyıllardır düzenlenen Türkiye'nin en köklü geleneksel spor organizasyonu nedir?",
          "options": [
            "Tarihi Kırkpınar Yağlı Güreşleri",
            "İstanbul Maratonu",
            "Boğaz Yarışı",
            "Rally"
          ],
          "answerIndex": 0,
          "explanation": "Tarihi Kırkpınar Yağlı Güreşleri."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "\"Derbi maçı\" ne anlama gelir?",
          "options": [
            "Antrenman maçı",
            "Tenis maçı",
            "Yüzme yarışı",
            "Aynı şehrin veya büyük ezeli rakiplerin karşılaştığı yüksek heyecanlı maç"
          ],
          "answerIndex": 3,
          "explanation": "Derbi maçı.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"Our team scored a goal in the 90th minute and won the championship.\"",
          "options": [
            "Maç iptal edildi.",
            "Stadyum tamamen boştu.",
            "Takımımız 90. dakikada gol attı ve şampiyon oldu.",
            "Dün maçı kaybettik."
          ],
          "answerIndex": 2,
          "explanation": "Accurate championship victory translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Türk spor kültürü, futbol tutkusu (Üç Büyükler"
  },
  "tr-u13-l3": {
    "id": "tr-u13-l3",
    "unit": "tr-u13",
    "level": "A2",
    "objective": "Türk Sanat Müziği, Türk Halk Müziği, Anadolu Rock, müzeler (İstanbul Modern, Topkapı) ve kültür festivalleri.",
    "presentation": {
      "explanation": "Müzik ve Sanat Dünyası:\n- Anadolu Rock (Barış Manço, Erkin Koray, Cem Karaca, Moğollar)\n- Türk Sanat Müziği (Klasik Osmanlı makamları, Zeki Müren, Müzeyyen Senar)\n- Türk Halk Müziği ve Âşıklık Geleneği (Âşık Veysel, Neşet Ertaş - \"Bozkırın Tezenesi\")\n- Müzeler: İstanbul Modern Sanat Müzesi, Topkapı Sarayı, Ayasofya, Pera Müzesi\n- Canlı konser ve tiyatro izlemek (Attending live concerts & plays)",
      "examples": [
        {
          "target": "Hafta sonu Pera Müzesi'ndeki sergiyi gezdik ve ünlü \"Kaplumbağa Terbiyecisi\" tablosunu yakından inceledik.",
          "reading": "haf-ta SO-noo PE-ra mew-ze-seen-DE-kee ser-gee-YEE gez-DEEK...",
          "translation": "Over the weekend we visited the exhibition at the Pera Museum and examined the famous \"Tortoise Trainer\" painting up close."
        }
      ],
      "mnemonics": [
        "Neşet Ertaş = \"Bozkırın Tezenesi\", master of folk poetry and bağlama!"
      ],
      "culturalNotes": [
        "Osman Hamdi Bey's masterpiece painting \"Kaplumbağa Terbiyecisi\" (The Tortoise Trainer) is a seminal icon of Turkish art history, exhibited at Pera Museum."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Anadolu Rock müziğinin efsanevi öncülerinden ve 7'den 77'ye herkesin sevgilisi olan sanatçı kimdir?",
          "options": [
            "Mozart",
            "Beethoven",
            "Barış Manço",
            "Elvis Presley"
          ],
          "answerIndex": 2,
          "explanation": "Barış Manço."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Osman Hamdi Bey'in dünyaca ünlü \"Kaplumbağa Terbiyecisi\" tablosu hangi müzede sergilenmektedir?",
          "options": [
            "Pera Müzesi",
            "Louvre Müzesi",
            "British Museum",
            "Prado Müzesi"
          ],
          "answerIndex": 0,
          "explanation": "Pera Müzesi."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Türk halk ozanı ve bağlama ustası Neşet Ertaş hangi unvanla anılır?",
          "options": [
            "Denizin Sesi",
            "Rüzgarın Efendisi",
            "Bozkırın Tezenesi",
            "Güneşin Oğlu"
          ],
          "answerIndex": 2,
          "explanation": "Bozkırın Tezenesi.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"We bought tickets for the live symphony concert in Istanbul.\"",
          "options": [
            "Konser dün akşam bitti.",
            "İstanbul'daki canlı senfoni konseri için bilet satın aldık.",
            "Müzik dinlemeyi sevmeyiz.",
            "Biletlerimizi kaybettik."
          ],
          "answerIndex": 1,
          "explanation": "Accurate concert ticket translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 13, Lesson 3: Foundational & Structural Mastery (Hafta sonu Pera Müzesi'ndeki s)"
  },
  "tr-u13-l4": {
    "id": "tr-u13-l4",
    "unit": "tr-u13",
    "level": "A2",
    "objective": "Arkadaşlarla plan yapmak, buluşma ayarlamak, hevesle kabul etmek ve nazikçe ertelemek („Gidelim mi?“, „Bana uyar!“).",
    "presentation": {
      "explanation": "Buluşma ve Plan Yapma İfadeleri:\n1. Plan önermek:\n   - \"Bu akşam Kadıköy'de / Beşiktaş'ta kahve içmeye gidelim mi?\" (Fancy grabbing coffee?)\n   - \"Cumartesi günü yeni açılan sergiye gitmeye ne dersin?\"\n2. Hevesle kabul etmek:\n   - \"Harika fikir! Bana uyar! / Kesinlikle varım!\" (Count me in!)\n   - \"Süper olur, saat kaçta ve nerede buluşuyoruz?\"\n3. Nazikçe reddetmek ve başka zamana ertelemek:\n   - \"Çok isterdim ama bu akşam çok işim var. Pazar gününe ne dersin?\"\n4. Yer ve saat kararlaştırmak:\n   - \"Akşam saat sekizde vapur iskelesinin önünde buluşalım.\"",
      "examples": [
        {
          "target": "—Akşam Kadıköy Moda sahilinde çay içmeye gidelim mi?\n—Harika fikir, bana uyar! Saat yedi buçukta boğa heykelinin önünde buluşalım.",
          "reading": "Plan yapma diyaloğu",
          "translation": "—Shall we go drink tea on Kadıköy Moda shore this evening?\n—Great idea, works for me! Let's meet at 7:30 in front of the Bull Statue."
        }
      ],
      "mnemonics": [
        "BANA UYAR! = Works for me / Count me in!",
        "Kadıköy Boğa Heykeli = Classic Istanbul meeting spot!"
      ],
      "culturalNotes": [
        "The iconic bronze Bull Statue (Boğa Heykeli) in Kadıköy on Istanbul's Asian side is the most famous social meeting point for friends."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Bir arkadaşınızın buluşma teklifini kabul ederken Türkçe \"Bana uyar! / Varım!\" ne anlama gelir?",
          "options": [
            "Uyumak istiyorum",
            "I'm down! / Works for me! / Count me in!",
            "Sana kızgınım",
            "Asla gelmem"
          ],
          "answerIndex": 1,
          "explanation": "Bana uyar means works for me."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "İstanbul Kadıköy'de gençlerin en meşhur buluşma noktası olan simge heykel hangisidir?",
          "options": [
            "Kadıköy Boğa Heykeli",
            "Aslan Heykeli",
            "Kartal Heykeli",
            "Özgürlük Heykeli"
          ],
          "answerIndex": 0,
          "explanation": "Boğa Heykeli in Kadıköy."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Bir buluşma teklifini nazikçe başka bir güne ertelemek için ne söylenir?",
          "options": [
            "Telefonu kapat",
            "Çok isterdim ama bugün işim var, hafta sonu buluşalım mı?",
            "Seninle asla görüşmem",
            "Beni rahatsız etme"
          ],
          "answerIndex": 1,
          "explanation": "Polite refusal with rescheduling offer.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"Let's meet in front of the theater at eight PM.\"",
          "options": [
            "Akşam saat sekizde tiyatronun önünde buluşalım.",
            "Tiyatro dün kapandı.",
            "Saat sekiz çok geç.",
            "Tiyatroya gitmeyeceğim."
          ],
          "answerIndex": 0,
          "explanation": "Accurate meeting appointment translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 13, Lesson 4: Foundational & Structural Mastery (—Akşam Kadıköy Moda sahilinde )"
  },
  "tr-u13-l5": {
    "id": "tr-u13-l5",
    "unit": "tr-u13",
    "level": "A2",
    "objective": "Film, tiyatro oyunu, kitap ve konserler hakkında eleştirel inceleme ve değerlendirme yazısı yazmak (Nuri Bilge Ceylan sineması).",
    "presentation": {
      "explanation": "Kültür ve Sanat Eleştirisi Yazma (Review):\n- Türk Sineması ve Altın Palmiye: Nuri Bilge Ceylan (Kış Uykusu - Cannes Film Festivali Altın Palmiye Ödülü, Bir Zamanlar Anadolu'da, Ahlat Ağacı)\n- İnceleme Metni Yapısı:\n  1. Eser Künyesi: Film/kitap adı, yönetmen/yazar, tür.\n  2. Konu Özeti: \"Film, insan ruhunun derinliklerine inen etkileyici bir hikayeyi anlatıyor...\"\n  3. Eleştirel Değerlendirme: Güçlü oyunculuk performansları, görsel sinematografi ve diyalogların derinliği.\n  4. Sonuç ve Puan: \"Kesinlikle izlenmesi gereken bir sinema başyapıtı. Puan: 10/10.\"",
      "examples": [
        {
          "target": "Nuri Bilge Ceylan'ın \"Kış Uykusu\" filmi, insan doğasını ve ahlaki çatışmaları ustalıkla işleyen, Altın Palmiye ödüllü bir başyapıttır.",
          "reading": "Film eleştirisi Türkiye",
          "translation": "Nuri Bilge Ceylan's film \"Winter Sleep\" is a Palme d'Or winning masterpiece that masterfully examines human nature and moral conflicts."
        }
      ],
      "mnemonics": [
        "Sinema başyapıtı = Cinematic masterpiece!"
      ],
      "culturalNotes": [
        "Nuri Bilge Ceylan won the prestigious Palme d'Or at the 2014 Cannes Film Festival for \"Winter Sleep\" (Kış Uykusu), set in the mystical landscapes of Cappadocia."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Hangi ünlü Türk yönetmen 2014 yılında \"Kış Uykusu\" filmiyle Cannes Film Festivali'nde Altın Palmiye (Palme d'Or) kazandı?",
          "options": [
            "Nuri Bilge Ceylan",
            "Steven Spielberg",
            "Christopher Nolan",
            "Quentin Tarantino"
          ],
          "answerIndex": 0,
          "explanation": "Nuri Bilge Ceylan."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Bir sanat eleştirisinde \"başyapıt\" kelimesi ne anlama gelir?",
          "options": [
            "Kısa bir fıkra",
            "Yarım kalmış taslak",
            "En üstün nitelikte, kusursuz sanat eseri",
            "Kötü bir kopya"
          ],
          "answerIndex": 2,
          "explanation": "Başyapıt means masterpiece."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Nuri Bilge Ceylan'ın \"Kış Uykusu\" filmi Türkiye'nin hangi büyüleyici coğrafi bölgesinde geçmektedir?",
          "options": [
            "Kapadokya",
            "Ağrı Dağı zirvesi",
            "Tuz Gölü",
            "Karadeniz ormanları"
          ],
          "answerIndex": 0,
          "explanation": "Kapadokya (Cappadocia).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"The screenplay is profound, sharp, and full of surprising dramatic twists.\"",
          "options": [
            "Hikayeyi hiç beğenmedim.",
            "Kitabın kapağı yok.",
            "Film gösterimden kaldırıldı.",
            "Senaryo çok derin, çarpıcı ve beklenmedik dramatik dönüm noktalarıyla dolu."
          ],
          "answerIndex": 3,
          "explanation": "Accurate review translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 13, Lesson 5: Foundational & Structural Mastery (Nuri Bilge Ceylan'ın \"Kış Uyku)"
  },
  "tr-u14-l1": {
    "id": "tr-u14-l1",
    "unit": "tr-u14",
    "level": "A2",
    "objective": "İstanbul Havalimanı (İGA) ve Sabiha Gökçen'de havalimanı işlemleri, biniş kartı, bagaj teslimi ve güvenlik kontrolü.",
    "presentation": {
      "explanation": "Havalimanında (İstanbul Havalimanı - IST, Sabiha Gökçen - SAW, Antalya Havalimanı - AYT):\n- Uçuş biniş kartı (Boarding pass cep telefonunda QR kod)\n- Check-in kontuarı ve bagaj teslimi (Baggage drop-off)\n- Kabin bagajı / El bagajı (Carry-on: 8 kg) / Kayıtlı bagaj (Checked luggage: 20-30 kg)\n- Güvenlik kontrolü (Security check: dizüstü bilgisayarı ve sıvıları çıkarma)\n- Uçağa biniş kapısı (Boarding gate) / Uçağın kalkışı (Takeoff) ve inişi (Landing)\n- Bagaj teslim salonu (Bagaj bandı / Carousel) ve gümrük kapısı",
      "examples": [
        {
          "target": "Lütfen güvenlik kontrolünden geçerken pasaportunuzu ve biniş kartınızı hazır bulundurunuz.",
          "reading": "lewt-FEN gew-ven-LEEK kon-tro-lewn-DEN ge-cher-KEN...",
          "translation": "Please keep your passport and boarding pass ready when passing through the security checkpoint."
        }
      ],
      "mnemonics": [
        "Biniş kartı = Boarding pass! Biniş kapısı = Boarding gate!"
      ],
      "culturalNotes": [
        "Istanbul Airport (İGA) is one of the largest and most architecturally monumental airport terminals in the world, serving as the global hub for Turkish Airlines flying to more countries than any other airline."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Uçağa binmek için güvenlikten sonra gösterilen belgeye Türkçe ne ad verilir?",
          "options": [
            "Ehliyet",
            "Otel faturası",
            "Kütüphane kartı",
            "Uçuş biniş kartı"
          ],
          "answerIndex": 3,
          "explanation": "Biniş kartı is boarding pass."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Türkçeye çevirin: \"The flight to Izmir is delayed by forty minutes.\"",
          "options": [
            "Uçak zamanında kalktı.",
            "İzmir'e uçuş yoktur.",
            "Havalimanı kapalıdır.",
            "İzmir uçuşu kırk dakika gecikmelidir."
          ],
          "answerIndex": 3,
          "explanation": "Accurate flight delay translation."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Yolcular uçaktan indikten sonra valizlerini nereden teslim alırlar?",
          "options": [
            "Pilot kabininden",
            "Bilet satış ofisinden",
            "Uçak pistinden",
            "Bagaj teslim salonundaki bagaj bandından"
          ],
          "answerIndex": 3,
          "explanation": "Bagaj bandı (Baggage carousel).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"Please proceed immediately to gate 14 for boarding.\"",
          "options": [
            "Havalimanını terk ediniz.",
            "Yeni bilet satın alınız.",
            "Lütfen uçağa biniş için derhal 14 numaralı kapıya gidiniz.",
            "Uçak iniş yaptı."
          ],
          "answerIndex": 2,
          "explanation": "Accurate boarding call translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 14, Lesson 1: Foundational & Structural Mastery (Lütfen güvenlik kontrolünden g)"
  },
  "tr-u14-l2": {
    "id": "tr-u14-l2",
    "unit": "tr-u14",
    "level": "A2",
    "objective": "Türkiye'de konaklama: Kapadokya mağara otelleri (Cave hotels), Ege butik otelleri ve resepsiyon işlemleri.",
    "presentation": {
      "explanation": "Türkiye'de Konaklama Türleri:\n- Kapadokya Mağara Otelleri (Otantik Cave Hotels - Göreme, Ürgüp, Uçhisar)\n- Ege butik otelleri ve taş evler (Alaçatı, Bodrum, Kaş, Çıralı)\n- 5 yıldızlı tatil köyleri ve termal oteller (Antalya, Pamukkale)\n- Resepsiyonda (Giriş / Çıkış - Check-in / Check-out):\n  - \"Merhaba, [İsim] adına yapılmış bir oda rezervasyonumuz var.\"\n  - \"Açık büfe kahvaltı saat kaçta başlıyor?\"\n  - \"Wi-Fi şifresini alabilir miyim?\"\n  - \"Oda kartı / anahtarı\"",
      "examples": [
        {
          "target": "İyi günler! Kapadokya'da peri bacaları manzaralı mağara odamız için üç gecelik rezervasyonumuz vardı.",
          "reading": "ee-YEE gewn-LER! ka-pa-DOK-ya-da pe-REE ba-ja-la-RUH man-za-ra-LUH...",
          "translation": "Good day! We have a reservation for three nights for our cave room with a fairy chimney view in Cappadocia."
        }
      ],
      "mnemonics": [
        "Serpme Türk Kahvaltısı = Famous lavish Turkish breakfast spread with dozens of local cheeses, olives, jams, and menemen!"
      ],
      "culturalNotes": [
        "Traditional boutique hotels in Alaçatı and Cappadocia offer authentic regional architectural charm combined with world-class Turkish culinary hospitality (serpme kahvaltı)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Resepsiyona rezervasyonunuz olduğunu nasıl belirtirsiniz?",
          "options": [
            "[Adım] adına yapılmış bir oda rezervasyonum var",
            "Oda ücretsizdir",
            "Burada kalmak istemiyorum",
            "Oteli satın almak istiyorum"
          ],
          "answerIndex": 0,
          "explanation": "...adına rezervasyonum var is standard."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Kapadokya bölgesine özgü dünyaca ünlü geleneksel otel konsepti hangisidir?",
          "options": [
            "Mağara Oteller",
            "Gökdelen oteli",
            "Buz oteli",
            "Ağaç kütüğü"
          ],
          "answerIndex": 0,
          "explanation": "Cave Hotels (Mağara Oteller)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Türk otellerinde masayı donatan zengin çeşitlilikteki geleneksel kahvaltı türüne ne denir?",
          "options": [
            "Kuru ekmek",
            "Sadece sıcak su",
            "Serpme Türk Kahvaltısı",
            "Fast food menüsü"
          ],
          "answerIndex": 2,
          "explanation": "Serpme Türk Kahvaltısı.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"Could you please give me an extra room keycard and the wifi password?\"",
          "options": [
            "Oda kirli.",
            "Bana ekstra bir oda kartı ve wi-fi şifresini verebilir misiniz, lütfen?",
            "Kahvaltı bitti.",
            "Rezervasyonum yok."
          ],
          "answerIndex": 1,
          "explanation": "Accurate reception request.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Türkiye'de konaklama"
  },
  "tr-u14-l3": {
    "id": "tr-u14-l3",
    "unit": "tr-u14",
    "level": "A2",
    "objective": "Türkiye'de demir yolu ulaşımı: Yüksek Hızlı Tren (YHT), Doğu Ekspresi (Kars turu), biletler ve vagonlar.",
    "presentation": {
      "explanation": "TCDD Demir Yolları ve Trenler:\n- YHT (Yüksek Hızlı Tren: Ankara - İstanbul, Ankara - Konya, Ankara - Sivas)\n- Turistik Doğu Ekspresi (Ankara - Kars masalsı kış treni rotası: İliç, Erzurum, Sarıkamış)\n- Vagon türleri: Pulman koltuk, Örtülü Kuşetli (4 kişilik), Yataklı Vagon (2 kişilik özel buzdolaplı ve lavabolu kompartıman)\n- Biletler: Tek yön / Gidiş-Dönüş (One-way / Round-trip)\n- Garda: Peron, tren saati ve vagon/koltuk numarası",
      "examples": [
        {
          "target": "İstanbul'dan Ankara'ya giden Yüksek Hızlı Tren (YHT) saat onda dördüncü perondan kalkacaktır.",
          "reading": "ees-tan-BOOL-dan an-ka-ra-YA gee-DEN yewk-SEK heez-LUH tren...",
          "translation": "The High-Speed Train (YHT) from Istanbul to Ankara will depart from platform four at 10:00."
        }
      ],
      "mnemonics": [
        "YHT = Yüksek Hızlı Tren! Doğu Ekspresi = Legendary fairy-tale winter train to Kars!"
      ],
      "culturalNotes": [
        "The Eastern Express (Doğu Ekspresi) journey through snow-covered Anatolian canyons to historic Kars has become one of the world's most celebrated scenic winter rail journeys."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Ankara ile İstanbul arasında saatte 250 km hızla yolcu taşıyan hızlı trenin adı nedir?",
          "options": [
            "Buharlı lokomotif",
            "Şehir içi tramvay",
            "YHT",
            "Teleferik"
          ],
          "answerIndex": 2,
          "explanation": "YHT."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Kış aylarında karlı manzaralar eşliğinde Kars'a giden ünlü turistik tren hangisidir?",
          "options": [
            "Turistik Doğu Ekspresi",
            "Güney Ekspresi",
            "Toros Ekspresi",
            "Ege Ekspresi"
          ],
          "answerIndex": 0,
          "explanation": "Turistik Doğu Ekspresi."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Trende iki kişinin konforlu yataklarda baş başa seyahat ettiği özel kompartımana ne denir?",
          "options": [
            "Yemekli vagon",
            "Yataklı Vagon",
            "Bagaj vagonu",
            "Pulman koltuk"
          ],
          "answerIndex": 1,
          "explanation": "Yataklı Vagon.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"Please check your ticket for the coach and seat number.\"",
          "options": [
            "Lütfen biletinizdeki vagon ve koltuk numarasını kontrol ediniz.",
            "Perondan uzaklaşınız.",
            "Hiç bilet kalmadı.",
            "Tren seferi iptal edildi."
          ],
          "answerIndex": 0,
          "explanation": "Accurate train boarding instruction.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Türkiye'de demir yolu ulaşımı"
  },
  "tr-u14-l4": {
    "id": "tr-u14-l4",
    "unit": "tr-u14",
    "level": "A2",
    "objective": "Türkiye'de araç kiralama, Otoyol ve Köprü geçiş sistemleri (HGS), Akaryakıt istasyonları (Kurşunsuz 95, Motorin/Dizel).",
    "presentation": {
      "explanation": "Araç Kiralama ve Karayolları:\n- Araç kiralama (Rent a car: Tam kasko sigortası, sınırsız kilometre)\n- Köprüler ve Otoyollar: 1915 Çanakkale Köprüsü, Osmangazi Köprüsü, Yavuz Sultan Selim Köprüsü, Kuzey Marmara Otoyolu\n- HGS (Hızlı Geçiş Sistemi - Otomatik etiketle temassız geçiş)\n- Akaryakıt İstasyonları (Petrol Ofisi, Opet, Shell, BP):\n  - Kurşunsuz Benzin 95 Oktan (Petrol)\n  - Motorin / Dizel (Diesel)\n  - LPG / Otogaz\n  - \"Depoyu kurşunsuz doksan beşle fulleyin lütfen!\" (Fill up the tank!)",
      "examples": [
        {
          "target": "Kolay gelsin! Depoyu kurşunsuz 95 benzinle fulleyebilir misiniz? Ödemeyi içeride kredi kartıyla yapacağım.",
          "reading": "ko-LAY gel-SEEN! de-po-YOO koor-shoon-SOOZ dok-SAN BESH-le fool-le-ye-BEER mee-see-NEEZ?",
          "translation": "Good day! Could you fill up the tank with 95 unleaded petrol? I will pay inside by credit card."
        }
      ],
      "mnemonics": [
        "DEPOYU FULLEYİN = Fill 'er up! HGS = Fast automated highway toll system!"
      ],
      "culturalNotes": [
        "Turkey features an ultra-modern highway network with record-breaking suspension bridges (1915 Çanakkale Bridge, longest suspension bridge span in the world)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Benzin istasyonundaki görevliye arabanın yakıt deposunu tamamen doldurmasını nasıl söylersiniz?",
          "options": [
            "Su koyun motora",
            "Depoyu fulleyin lütfen!",
            "Benzin istemiyorum",
            "Depoyu boşaltın"
          ],
          "answerIndex": 1,
          "explanation": "Depoyu fulleyin lütfen is standard."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Otoyol ve köprü ücretlerini durmadan otomatik ödemeyi sağlayan sistemin adı nedir?",
          "options": [
            "HGS",
            "Nüfus cüzdanı",
            "Kredi kartı slipleri",
            "Milli Piyango"
          ],
          "answerIndex": 0,
          "explanation": "HGS."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Dünyanın en uzun orta açıklıklı asma köprüsü unvanına sahip Türk mühendislik harikası hangisidir?",
          "options": [
            "1915 Çanakkale Köprüsü",
            "Haliç Köprüsü",
            "Boğaziçi Köprüsü",
            "Galata Köprüsü"
          ],
          "answerIndex": 0,
          "explanation": "1915 Çanakkale Köprüsü.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"We rented a car to drive along the turquoise Mediterranean coast.\"",
          "options": [
            "Yollar tamamen kapalı.",
            "Arabamızı sattık.",
            "Araba bozuldu.",
            "Turkuaz Akdeniz kıyı şeridini gezmek için bir araba kiraladık."
          ],
          "answerIndex": 3,
          "explanation": "Accurate road trip translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 14, Lesson 4: Foundational & Structural Mastery (Kolay gelsin! Depoyu kurşunsuz)"
  },
  "tr-u14-l5": {
    "id": "tr-u14-l5",
    "unit": "tr-u14",
    "level": "A2",
    "objective": "Seyahat acil durumları: Kayıp bagaj (PIR raporu), uçuş iptalleri (SHY-YOLCU hakları), seyahat sağlık sigortası.",
    "presentation": {
      "explanation": "Seyahat Sorunları ve Çözümleri:\n- Havalimanında Kayıp Eşya / Kayıp Bagaj Ofisi (Lost & Found):\n  - \"Valizim bagaj bandında çıkmadı.\"\n  - Kayıp Bagaj Raporu (PIR - Property Irregularity Report) doldurmak\n- Uçuş İptali ve Gecikmelerinde Yolcu Hakları (Sivil Havacılık Genel Müdürlüğü SHY-YOLCU Yönetmeliği: ikram, otel konaklaması, tazminat hakkı)\n- Pasaport Kaybı: Polis merkezine bildirim (Tutanak) ve Başkonsolosluğa başvuru\n- Seyahat Sağlık Sigortası poliçesi",
      "examples": [
        {
          "target": "Uçağım iptal edildi. SHY-YOLCU yönetmeliği kapsamında sonraki uçuşa aktarma ve otel konaklaması talep ediyorum.",
          "reading": "Yolcu hakları talebi",
          "translation": "My flight was cancelled. Under the passenger rights regulation, I request rebooking on the next flight and hotel accommodation."
        }
      ],
      "mnemonics": [
        "SHY-YOLCU = Official Turkish civil aviation passenger rights regulation!"
      ],
      "culturalNotes": [
        "Under Turkey's SHY-YOLCU civil aviation regulations, passengers on flights originating in or arriving to Turkey are entitled to hot meals, free communications, hotel lodging, and cash compensations for major delays and cancellations."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Valiziniz kaybolduğunda havalimanındaki görevliye ibraz etmeniz gereken en önemli etiket nedir?",
          "options": [
            "Bagaj fişi / Bagaj etiketi",
            "Alışveriş fişi",
            "Otopark kartı",
            "Müze bileti"
          ],
          "answerIndex": 0,
          "explanation": "Bagaj fişi / etiketi."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Türkiye'de yolcu haklarını güvence altına alan sivil havacılık mevzuatının adı nedir?",
          "options": [
            "Medeni Kanun",
            "Vergi Usul Kanunu",
            "SHY-YOLCU Yönetmeliği",
            "Trafik Kanunu"
          ],
          "answerIndex": 2,
          "explanation": "SHY-YOLCU Yönetmeliği."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Pasaportunu kaybeden bir yabancı turist ilk olarak nereye başvurmalıdır?",
          "options": [
            "Manava",
            "Sinemaya",
            "Plaja",
            "Polis merkezine tutanak tutturup ardından kendi ülkesinin konsolosluğuna"
          ],
          "answerIndex": 3,
          "explanation": "Polis ve Konsolosluk.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"Our flight was rescheduled to tomorrow morning due to a severe snowstorm.\"",
          "options": [
            "Kar fırtınası yoktu.",
            "Uçuş vaktinde kalktı.",
            "Şiddetli kar fırtınası nedeniyle uçuşumuz yarın sabaha ertelendi.",
            "Erken vardık."
          ],
          "answerIndex": 2,
          "explanation": "Accurate flight rescheduling translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Seyahat acil durumları"
  },
  "tr-u15-l1": {
    "id": "tr-u15-l1",
    "unit": "tr-u15",
    "level": "A2",
    "objective": "Giyim, moda, beden ölçüleri, kumaş türleri ve alışveriş merkezleri (AVM: Zorlu Center, Cevahir, Nişantaşı).",
    "presentation": {
      "explanation": "Giyim ve Moda Dünyası (Nişantaşı butikleri, Bağdat Caddesi, İstinyePark, Zorlu Center):\n- Giysiler: Gömlek / Tişört / Pantolon / Kot pantolon (Jeans) / Kazak / Hırka / Mont / Kaban / Palto / Takım elbise / Elbise / Etek\n- Ayakkabılar: Deri ayakkabı / Spor ayakkabı (Sneaker) / Çizme / Bot / Sandalet\n- Kumaşlar: Saf pamuk (%100 Pamuklu / Cotton), Yün (Wool), İpek (Bursa silk), Keten (Linen), Hakiki deri (Genuine leather)\n- Bedenler: XS / S / M / L / XL veya Türk konfeksiyon bedenleri (36, 38, 40, 42)\n- Ayakkabı numarası: \"Ayakkabıda 42 numara giyiyorum.\"",
      "examples": [
        {
          "target": "Afedersiniz, bu yüzde yüz keten gömleğin M bedeni ve lacivert rengi var mı acaba?",
          "reading": "af-e-DER-see-neez, boo yewz-de yewz ke-TEN goem-le-YEEN...",
          "translation": "Excuse me, do you happen to have this 100% linen shirt in size M and navy blue?"
        }
      ],
      "mnemonics": [
        "Bursa İpeği = World-famous historic Bursa silk weaving heritage!"
      ],
      "culturalNotes": [
        "Turkey is one of the world's leading textile and apparel manufacturing powerhouses, renowned for premium Turkish cotton (Ege pamuğu) and luxury leather craftsmanship."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Türkiye'de tarihi ipek dokumacılığı ve koza pazarı (Koza Han) ile ünlü tarihi şehir neresidir?",
          "options": [
            "Antalya",
            "Trabzon",
            "Konya",
            "Bursa"
          ],
          "answerIndex": 3,
          "explanation": "Bursa (Koza Han)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Türkçede \"sneakers / sports shoes\" için en yaygın kullanılan kelime nedir?",
          "options": [
            "Terlik",
            "Çizme",
            "Kravat",
            "Spor ayakkabı"
          ],
          "answerIndex": 3,
          "explanation": "Spor ayakkabı."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Yazın sıcak günlerinde serin ve ferah tutan en popüler doğal kumaş türü hangisidir?",
          "options": [
            "Kalın naylon",
            "Karton",
            "Keten ve pamuklu kumaşlar",
            "Plastik"
          ],
          "answerIndex": 2,
          "explanation": "Keten ve pamuk.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"This pure wool coat is very warm, elegant, and durable.\"",
          "options": [
            "Palto kâğıttan yapılmış.",
            "Bu saf yün palto çok sıcak tutuyor, şık ve kaliteli.",
            "Mağaza kapalı.",
            "Kıyafet sevmem."
          ],
          "answerIndex": 1,
          "explanation": "Accurate wool coat review translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Giyim, moda, beden ölçüleri, kumaş türleri ve alışveriş merkezleri (AVM"
  },
  "tr-u15-l2": {
    "id": "tr-u15-l2",
    "unit": "tr-u15",
    "level": "A2",
    "objective": "Soyunma kabini (Fitting room), kıyafet deneme, beden değişimi ve kıyafetin duruşunu değerlendirme („Üzerinize tam oturdu!“, „Çok yakıştı“).",
    "presentation": {
      "explanation": "Soyunma kabininde (Fitting room):\n- \"Soyunma / deneme kabinleri nerede acaba?\"\n- Kıyafetin duruşunu ifade etmek:\n  - \"Üzerime tam oturdu / cuk oturdu!\" (It fits like a glove!)\n  - \"Bana biraz bol / geniş geldi.\" (Too loose/baggy.)\n  - \"Beli biraz sıktı / dar geldi.\" (Too tight at the waist.)\n  - \"Paçaları çok uzun / kısa.\" (The hems are too long/short.)\n  - \"Bu renk size çok yakıştı!\" (That color looks stunning on you!)\n- \"Bir beden küçüğünü / büyüğünü kabine getirebilir misiniz?\"\n- \"Paça tadilatı yapıyor musunuz?\" (Do you do pant hemming?)",
      "examples": [
        {
          "target": "Deneme kabinine geçip bu ceketi üzerimde göreyim. Baksanıza, üzerime tam oturdu!",
          "reading": "de-ne-ME ka-bee-nee-NE ge-CHEEP...",
          "translation": "Let me step into the fitting room to see how this jacket looks. Look, it fits me like a glove!"
        }
      ],
      "mnemonics": [
        "Cuk oturdu / Tam oturdu = Turkish idioms for \"Fits like a glove / perfect fit!\" ÇOK YAKIŞTI = Looks wonderful on you!"
      ],
      "culturalNotes": [
        "In Turkish stores, sales associates are exceptionally attentive, complimenting shoppers with warm phrases like \"Çok yakıştı!\" (It suits you wonderfully!) and helping with size exchanges."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Türkçede bir kıyafetin bir kişiye çok güzel uyduğunu ve ona çok yakıştığını belirten en yaygın iltifat hangisidir?",
          "options": [
            "„Bu kıyafet size çok yakıştı!”",
            "„Gidin buradan”",
            "„Bu kıyafet çok eski”",
            "„Kıyafetiniz yok”"
          ],
          "answerIndex": 0,
          "explanation": "„Size çok yakıştı!”"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Pantolonun boyunu kısaltma terzilik işlemine ne ad verilir?",
          "options": [
            "Paça tadilatı / Paça boyu kısaltma",
            "Ütü yapma",
            "Yıkama",
            "Boyama"
          ],
          "answerIndex": 0,
          "explanation": "Paça tadilatı."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Mağazada kıyafetlerin denendiği özel alana ne denir?",
          "options": [
            "Kasa",
            "Deneme / Soyunma kabini",
            "Vitrin",
            "Otopark"
          ],
          "answerIndex": 1,
          "explanation": "Deneme kabini.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"The trousers are too tight at the waist; could you bring me size 42?\"",
          "options": [
            "Pantolonun beli biraz sıktı; kırk iki bedenini getirebilir misiniz?",
            "Pantolon istemiyorum.",
            "Mağazada kabin yok.",
            "Pantolon çok ucuz."
          ],
          "answerIndex": 0,
          "explanation": "Accurate size request.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 15, Lesson 2: Foundational & Structural Mastery (Deneme kabinine geçip bu ceket)"
  },
  "tr-u15-l3": {
    "id": "tr-u15-l3",
    "unit": "tr-u15",
    "level": "A2",
    "objective": "İndirim sezonları, kampanyalar, kasada ödeme (Temassız kredi kartı, taksit seçenekleri, FAST / QR kod) ve alışveriş fişi.",
    "presentation": {
      "explanation": "İndirimler ve Ödeme Yöntemleri:\n- Sezon sonu indirimleri: Büyük yaz / kış indirimi, Efsane Cuma (Black Friday)\n- Kampanyalar: %50 indirim / 1 Alana 1 Bedava / Sezon sonu tasfiyesi\n- Kasada (Ödeme süreci):\n  - \"Toplam borcum ne kadar?\"\n  - \"Ödemeyi kredi kartı, banka kartı, temassız veya nakit yapabilirsiniz.\"\n  - Taksit seçenekleri: \"Kredi kartına 3 veya 6 taksit yapabiliriz.\"\n  - Alışveriş fişi / e-Fatura (Tax invoice)\n  - \"Alışveriş poşeti ister misiniz? (Ücretli poşet uygulaması)\"",
      "examples": [
        {
          "target": "Ödemeyi temassız kredi kartımla yapacağım. Fişi de poşete koyabilir misiniz?",
          "reading": "oe-de-me-YEE te-mas-SUHZ kre-dee kar-TUHM-la ya-pa-ja-UHM...",
          "translation": "I will pay with my contactless credit card. Could you also put the receipt in the bag?"
        }
      ],
      "mnemonics": [
        "Taksit = Splitting payments into interest-free credit card installments in Turkey!"
      ],
      "culturalNotes": [
        "Turkey possesses one of the world's most sophisticated banking and point-of-sale terminal infrastructures, featuring installment credit card programs (Bonus, Maximum, World, Axess, CardFinans)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Bir alışveriş tutarını kredi kartıyla aylık eşit parçalara bölerek ödeme işlemine ne denir?",
          "options": [
            "Peşin ödeme",
            "Taksitli ödeme",
            "Veresiye",
            "Borç erteleme"
          ],
          "answerIndex": 1,
          "explanation": "Taksitli ödeme."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Ödeme yaptıktan sonra kasadan alınan resmi mali belgeye ne ad verilir?",
          "options": [
            "Alışveriş fişi / e-Arşiv fatura",
            "Otobüs bileti",
            "Öğrenci belgesi",
            "Kütüphane kartı"
          ],
          "answerIndex": 0,
          "explanation": "Alışveriş fişi / fatura."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Çevre kirliliğini azaltmak amacıyla Türkiye'deki market ve mağazalarda plastik poşetler nasıl verilir?",
          "options": [
            "Yasal olarak cüzi bir ücret karşılığında verilir",
            "Bedava sınırsız",
            "Sadece altınla verilir",
            "Tamamen yasak"
          ],
          "answerIndex": 0,
          "explanation": "Ücretli poşet uygulaması.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"Can I pay with my contactless card in 3 installments?\"",
          "options": [
            "Kartım kayboldu.",
            "Param yok.",
            "Ödeme yapmak istemiyorum.",
            "Temassız kartımla üç taksit halinde ödeyebilir miyim?"
          ],
          "answerIndex": 3,
          "explanation": "Accurate installment payment inquiry.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 15, Lesson 3: Foundational & Structural Mastery (Ödemeyi temassız kredi kartıml)"
  },
  "tr-u15-l4": {
    "id": "tr-u15-l4",
    "unit": "tr-u15",
    "level": "A2",
    "objective": "Tarihi Kapalıçarşı (Grand Bazaar) ve Mısır Çarşısı, baharatlar, lokum, Türk halıları ve nazik pazarlık sanatı.",
    "presentation": {
      "explanation": "Tarihi Çarşılar ve Geleneksel Alışveriş:\n- Kapalıçarşı (Grand Bazaar - 1461 yılında kurulan dünyanın en eski ve en büyük kapalı çarşılarından biri, 4000'den fazla dükkan)\n  - Kuyumcular, altın, gümüş takılar, otantik el dokuması Türk halıları ve kilimler, deri ceketler\n- Mısır Çarşısı (Spice Bazaar in Eminönü):\n  - Taze çekilmiş Türk kahvesi (Kuru Kahveci Mehmet Efendi)\n  - Çifte kavrulmuş fıstıklı Türk lokumu (Turkish Delight), safran, sumak, pul biber, nar ekşisi, bitki çayları\n- Pazarlık Kültürü (Bargaining):\n  - Tarihi çarşılarda çay eşliğinde nezaketle pazarlık yapılır: \"Hayırlı işler usta! Son fiyat ne olur?\"",
      "examples": [
        {
          "target": "Kapalıçarşı'da el dokuması ipek bir halı beğendik ve dükkan sahibinin ikram ettiği Türk çayını içerek pazarlık yaptık.",
          "reading": "ka-pa-LUH-char-shuh-da el do-koo-ma-SUH ee-PEK beer ha-LUH...",
          "translation": "In the Grand Bazaar we liked a handmade silk rug and bargained while drinking Turkish tea offered by the shopkeeper."
        }
      ],
      "mnemonics": [
        "Kapalıçarşı = The monumental 560-year-old Grand Bazaar with over 4,000 shops!"
      ],
      "culturalNotes": [
        "In Istanbul's Grand Bazaar, bargaining is an enjoyable cultural hospitality ritual; merchants welcome customers with complimentary hot Turkish tea in tulip glasses or apple tea."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "İstanbul'da 1461 yılından bu yana hizmet veren dünyanın en eski ve en büyük kapalı çarşısı hangisidir?",
          "options": [
            "Sahaflar Çarşısı",
            "Kapalıçarşı",
            "Arasta Çarşısı",
            "Mısır Çarşısı"
          ],
          "answerIndex": 1,
          "explanation": "Kapalıçarşı (Grand Bazaar)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Eminönü'nde bulunan ve mis kokulu baharatları, lokumları ve şifalı çaylarıyla ünlü tarihi çarşı hangisidir?",
          "options": [
            "Mısır Çarşısı",
            "Bedesten",
            "Bakırcılar Çarşısı",
            "Kemeraltı"
          ],
          "answerIndex": 0,
          "explanation": "Mısır Çarşısı."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Geleneksel Türk çarşılarında pazarlığa başlarken esnafa söylenen samimi ve saygılı temenni nedir?",
          "options": [
            "„Burası neresi”",
            "„Konuşma”",
            "„Hemen ver”",
            "„Hayırlı işler! / Kolay gelsin!”"
          ],
          "answerIndex": 3,
          "explanation": "„Hayırlı işler!”",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"Please give me half a kilo of double-roasted pistachio Turkish delight.\"",
          "options": [
            "Lokum sevmem.",
            "Çarşı kapalı.",
            "Bana yarım kilo çifte kavrulmuş Antep fıstıklı lokum tartar mısınız, lütfen?",
            "Dükkanda lokum yok."
          ],
          "answerIndex": 2,
          "explanation": "Accurate confectionery order translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 15, Lesson 4: Foundational & Structural Mastery (Kapalıçarşı'da el dokuması ipe)"
  },
  "tr-u15-l5": {
    "id": "tr-u15-l5",
    "unit": "tr-u15",
    "level": "A2",
    "objective": "Tüketici hakları, iade ve değişim süreçleri, e-ticaret (Trendyol, Hepsiburada) ve Tax-Free (KDV iadesi) işlemleri.",
    "presentation": {
      "explanation": "Tüketici Hakları ve İnternet Alışverişi:\n- 6502 Sayılı Tüketicinin Korunması Hakkında Kanun:\n  - İnternetten alışverişlerde 14 gün koşulsuz Cayma Hakkı (Ücretsiz iade)\n  - Mağazalardan yapılan alışverişlerde fiş ve etiketle 30 gün içinde değişim imkanı\n  - Ayıplı / kusurlu mallarda 2 yıl yasal garanti hakkı\n- Türkiye'nin lider e-ticaret platformları: Trendyol, Hepsiburada, Yemeksepeti / Trendyol Hızlı Market\n- Yabancı turistler için Tax-Free (KDV İadesi - Global Blue / Tax Free Global): Havalimanında gümrük onaylı fatura ile %10-%20 oranındaki KDV'yi nakit veya karta geri alma.",
      "examples": [
        {
          "target": "İnternetten sipariş ettiğim bu ürünü ondört günlük yasal cayma hakkımı kullanarak iade etmek istiyorum.",
          "reading": "İade talebi",
          "translation": "I would like to return this item ordered online using my statutory fourteen-day right of withdrawal."
        }
      ],
      "mnemonics": [
        "14 Gün Cayma Hakkı = Statutory 14-day cooling-off unconditional return right for all online purchases in Turkey!"
      ],
      "culturalNotes": [
        "Trendyol and Hepsiburada are giant e-commerce platforms in Turkey, providing express delivery and seamless one-click home-pickup returns."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Türkiye'de internetten yapılan alışverişlerde kanunen kaç gün koşulsuz cayma ve iade hakkı vardır?",
          "options": [
            "14 gün",
            "Sadece 1 gün",
            "3 yıl",
            "Hiç iade hakkı yoktur"
          ],
          "answerIndex": 0,
          "explanation": "14 gün cayma hakkı."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Yabancı turistlerin Türkiye'de alışveriş yaparken ödedikleri KDV'yi geri almalarını sağlayan uluslararası sistem nedir?",
          "options": [
            "HGS geçişi",
            "Pasaport pulu",
            "Tax-Free",
            "Vize ücreti"
          ],
          "answerIndex": 2,
          "explanation": "Tax-Free (KDV İadesi)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Kusurlu veya defolu çıkan bir ürünü değiştirmek için mağazaya ne ibraz edilmelidir?",
          "options": [
            "Ehliyet sınavı belgesi",
            "Yol tarifi",
            "Satış fişi / faturası ve ürün",
            "Hiçbir şey"
          ],
          "answerIndex": 2,
          "explanation": "Satış fişi / faturası.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"Could you please provide the Tax-Free invoice for customs validation?\"",
          "options": [
            "Fatura kayboldu.",
            "Gümrük onayı için Tax-Free faturası düzenleyebilir misiniz, lütfen?",
            "Vergi ödemek istemiyorum.",
            "Gümrük kapandı."
          ],
          "answerIndex": 1,
          "explanation": "Accurate Tax-Free invoice request.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 15, Lesson 5: Foundational & Structural Mastery (İnternetten sipariş ettiğim bu)"
  },
  "tr-u16-l1": {
    "id": "tr-u16-l1",
    "unit": "tr-u16",
    "level": "A2",
    "objective": "Hava durumu, meteorolojik terimler, rüzgârlar (Lodos, Poyraz), sıcaklıklar ve „Bardaktan boşanırcasına yağıyor“ deyimi.",
    "presentation": {
      "explanation": "Hava Durumu ve Türkiye'nin Rüzgârları (Hava Raporu):\n- Hava Durumu Terimleri:\n  - \"Hava güneşli / açık / parçalı bulutlu / kapalı / sisli / yağmurlu / karlı / rüzgârlı\"\n  - \"Bardaktan boşanırcasına yağıyor!\" (It's pouring cats and dogs!)\n- İstanbul ve Türkiye'nin meşhur rüzgârları:\n  - Lodos (Güneybatıdan esen ılık, nemli, denizi kabartan ve baş ağrısı yapan rüzgâr — vapur seferlerini iptal ettirir)\n  - Poyraz (Kuzeydoğudan esen serinletici, sert ve kışın dondurucu kar getiren rüzgâr)\n  - Meltem (Ege kıyılarında yazın öğleden sonra esen tatlı serinletici esinti)\n- Sıcaklık: Derece Santigrat (°C: \"Bugün hava yirmi beş derece.\")",
      "examples": [
        {
          "target": "Bugün İstanbul'da hava parçalı bulutlu olacak, ancak güneyden esen kuvvetli lodos nedeniyle deniz ulaşımında aksamalar yaşanabilir.",
          "reading": "boo-GEWN ees-tan-BOOL-da ha-VA...",
          "translation": "Today in Istanbul the weather will be partly cloudy, but disruptions in sea transit may occur due to strong southwesterly Lodos winds."
        }
      ],
      "mnemonics": [
        "Lodos (Warm southwesterly sea wind) vs Poyraz (Crisp northeastern wind)! Bardaktan boşanırcasına = Pouring out of cups!"
      ],
      "culturalNotes": [
        "The Lodos wind in Istanbul is legendary for churning waves in the Bosphorus, canceling ferry lines, and causing mild migraines humorously dubbed \"Lodos baş ağrısı\"."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Türkçede çok şiddetli ve bol miktarda yağan yağmuru anlatan deyim hangisidir?",
          "options": [
            "Güneş açmak",
            "Hava kararmak",
            "Rüzgâr durmak",
            "Bardaktan boşanırcasına yağmak"
          ],
          "answerIndex": 3,
          "explanation": "Bardaktan boşanırcasına yağmak."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "İstanbul'da güneybatıdan esen ve Marmara Denizi'nde vapur seferlerini iptal ettiren ılık ve sert rüzgâr hangisidir?",
          "options": [
            "Poyraz",
            "Karayel",
            "Keşişleme",
            "Lodos"
          ],
          "answerIndex": 3,
          "explanation": "Lodos."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Ege Denizi ve kıyılarında yaz aylarında düzenli eserek tatilcileri ferahlatan rüzgâr hangisidir?",
          "options": [
            "Tufan",
            "İmbat / Meltem rüzgârı",
            "Hortum",
            "Kasırga"
          ],
          "answerIndex": 1,
          "explanation": "Meltem / İmbat.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"The weather forecast warns of heavy rain and sudden drop in temperatures tomorrow.\"",
          "options": [
            "Hava durumu yarın şiddetli yağmur ve sıcaklıklarda ani bir düşüş konusunda uyarıyor.",
            "Hiç yağmur yağmayacak.",
            "Yarın kavurucu bir sıcak olacak.",
            "Hava tahminleri bozuk."
          ],
          "answerIndex": 0,
          "explanation": "Accurate weather forecast translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 16, Lesson 1: Foundational & Structural Mastery (Bugün İstanbul'da hava parçalı)"
  },
  "tr-u16-l2": {
    "id": "tr-u16-l2",
    "unit": "tr-u16",
    "level": "A2",
    "objective": "Dört mevsim: İlkbaharda Hıdırellez, yazın Ege/Akdeniz sahilleri, sonbaharda Yedigöller ve kışın Uludağ/Erciyes kayak merkezleri.",
    "presentation": {
      "explanation": "Dört Mevsim ve Kültürel Ritüeller:\n- İlkbahar (Mart — Mayıs): Cemrelerin düşmesi (Havaya, suya, toprağa), Hıdırellez şenlikleri (5-6 Mayıs bahar bayramı, ateşten atlama, gül ağacına dilek bağlama)\n- Yaz (Haziran — Ağustos): Akdeniz ve Ege'de masmavi koylar (Bodrum, Çeşme, Kaş, Fethiye Ölüdeniz), karpuz-peynir sofraları\n- Sonbahar (Eylül — Kasım): Bolu Yedigöller Milli Parkı'nda sarı ve kızıl yaprak cümbüşü, bağ bozumu şenlikleri\n- Kış (Aralık — Şubat): Uludağ (Bursa), Palandöken (Erzurum), Erciyes (Kayseri) ve Kartalkaya'da kayak ve kış turizmi",
      "examples": [
        {
          "target": "Sonbaharda Bolu Yedigöller'e giderek göller etrafındaki kayın ve meşe ağaçlarının renk cümbüşünü fotoğrafladık.",
          "reading": "son-ba-HAR-da BO-loo ye-dee-GOEL-ler-e gee-de-REK...",
          "translation": "In autumn we went to Bolu Yedigöller and photographed the riot of colors of beech and oak trees around the lakes."
        }
      ],
      "mnemonics": [
        "Cemre Düşmesi = Folk calendar belief of three heat waves dropping into air, water, and earth before spring!"
      ],
      "culturalNotes": [
        "Hıdırellez on May 5-6 is an ancient UNESCO-recognized folk spring holiday celebrating the mythical meeting of prophets Hızır and İlyas, where people tie wishes to rose branches."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "5-6 Mayıs tarihlerinde baharın gelişini kutlamak amacıyla gül ağaçlarına dileklerin bağlandığı geleneksel bayram nedir?",
          "options": [
            "Hıdırellez",
            "Ramazan",
            "Nevruz",
            "Kurban Bayramı"
          ],
          "answerIndex": 0,
          "explanation": "Hıdırellez."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Sonbaharda sarı, turuncu ve kırmızı yapraklarıyla doğaseverlerin akınına uğrayan ünlü göller bölgesi milli parkı neresidir?",
          "options": [
            "Bolu Yedigöller Milli Parkı",
            "Taksim Meydanı",
            "Konya Ovası",
            "Tuz Gölü"
          ],
          "answerIndex": 0,
          "explanation": "Bolu Yedigöller."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Kış aylarında baharın müjdecisi olarak sırasıyla havaya, suya ve toprağa düştüğüne inanılan sıcaklık dalgasına ne denir?",
          "options": [
            "Cemre",
            "Kırağı",
            "Çiy",
            "Dolu"
          ],
          "answerIndex": 0,
          "explanation": "Cemre.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"In winter, ski enthusiasts from around the world flock to the powder snow tracks of Palandöken.\"",
          "options": [
            "Palandöken'de kışın kar olmaz.",
            "Kışın herkes denize girer.",
            "Palandöken kapalıdır.",
            "Kışın dünyanın dört bir yanından kayak tutkunları Palandöken'in toz kar pistlerine akın eder."
          ],
          "answerIndex": 3,
          "explanation": "Accurate ski resort translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Dört mevsim"
  },
  "tr-u16-l3": {
    "id": "tr-u16-l3",
    "unit": "tr-u16",
    "level": "A2",
    "objective": "Türkiye'nin doğa harikaları: Kapadokya Peribacaları, Pamukkale Travertenleri (UNESCO), Ölüdeniz Lagünü, Van Gölü ve Nemrut Dağı.",
    "presentation": {
      "explanation": "Türkiye'nin Eşsiz Tabiat Varlıkları:\n- Kapadokya (Nevşehir - UNESCO Dünya Mirası, volkanik tüflerin aşınmasıyla oluşan Peribacaları, gün doğumunda gökyüzünü dolduran sıcak hava balonları)\n- Pamukkale Travertenleri (Denizli - Kalsiyum oksitli termal suların oluşturduğu bembeyaz basamaklı havuzlar ve Hierapolis antik kenti)\n- Ölüdeniz ve Kelebekler Vadisi (Fethiye - Dünyaca ünlü durgun turkuaz lagün ve yamaç paraşütü merkezi Babadağ)\n- Van Gölü ve Akdamar Adası (Türkiye'nin en büyük sodalı gölü)\n- Nemrut Dağı (Adıyaman - Kommagene Krallığı'nın devasa tanrı heykelleri ve büyüleyici gün doğumu)",
      "examples": [
        {
          "target": "Kapadokya'da gün doğumunda rengarenk sıcak hava balonlarıyla peribacalarının üzerinden süzülmek büyüleyici bir duygudur.",
          "reading": "ka-pa-DOK-ya-da gewn do-oo-MOON-da...",
          "translation": "Gliding over the fairy chimneys in colorful hot air balloons at sunrise in Cappadocia is an enchanting feeling."
        }
      ],
      "mnemonics": [
        "Kapadokya (Peribacaları Balonlar) & Pamukkale (Beyaz Travertenler) = Iconic UNESCO natural wonders of Turkey!"
      ],
      "culturalNotes": [
        "Cappadocia's surreal volcanic fairy chimney landscape was sculpted over millions of years by wind and rain eroding soft ash tuff spewed from Mount Erciyes and Mount Hasan."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Volkanik tüflerin aşınmasıyla oluşan Peribacaları ve sıcak hava balonlarıyla dünya çapında ünlü doğa harikası neresidir?",
          "options": [
            "Anıtkabir",
            "Kapadokya",
            "Boğaziçi Köprüsü",
            "Efes Antik Kenti"
          ],
          "answerIndex": 1,
          "explanation": "Kapadokya."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Termal kalsiyumlu suların oluşturduğu bembeyaz basamaklı havuzlarıyla ünlü UNESCO doğa mirası nerededir?",
          "options": [
            "Pamukkale",
            "Ayder Yaylası",
            "Salda Gölü",
            "Ihlara Vadisi"
          ],
          "answerIndex": 0,
          "explanation": "Pamukkale."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Fethiye'de yer alan ve Babadağ'dan yapılan yamaç paraşütüyle ünlü durgun turkuaz lagün hangisidir?",
          "options": [
            "Beyşehir Gölü",
            "Eğirdir Gölü",
            "Sapanca Gölü",
            "Ölüdeniz"
          ],
          "answerIndex": 3,
          "explanation": "Ölüdeniz.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"Watching the sunrise among the colossal stone statues of Mount Nemrut is an awe-inspiring experience.\"",
          "options": [
            "Gün doğumu izlenemez.",
            "Nemrut düz bir ovadır.",
            "Nemrut Dağı'ndaki devasa taş heykeller arasında gün doğumunu izlemek insanı hayrete düşüren bir deneyimdir.",
            "Nemrut Dağı'nda heykel yoktur."
          ],
          "answerIndex": 2,
          "explanation": "Accurate natural landmark translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Türkiye'nin doğa harikaları"
  },
  "tr-u16-l4": {
    "id": "tr-u16-l4",
    "unit": "tr-u16",
    "level": "A2",
    "objective": "Meteoroloji Genel Müdürlüğü (MGM), AFAD acil durum uyarıları, deprem ve sel önlemleri, „Çök-Kapan-Tutun“ kuralı.",
    "presentation": {
      "explanation": "Afet Yönetimi ve Meteorolojik Uyarılar:\n- MGM (Meteoroloji Genel Müdürlüğü):\n  - Renk kodlu uyarı sistemi: Yeşil (Tehlike yok) / Sarı (Az tehlikeli) / Turuncu (Tehlikeli hava) / Kırmızı (Çok tehlikeli meteorolojik durum)\n- AFAD (Afet ve Acil Durum Yönetimi Başkanlığı):\n  - AFAD Acil Mobil Uygulaması ve telefonlara gönderilen Hayati Uyarı Bildirimi (Hayati Uyarı SMS)\n- Deprem anında hayat kurtaran temel kural: \"ÇÖK - KAPAN - TUTUN\" (Sağlam bir eşyanın yanında cenin pozisyonu alıp başı korumak)\n- Sel ve taşkın uyarılarında dere yataklarından uzak durma kuralı",
      "examples": [
        {
          "target": "AFAD tarafından yapılan uyarıda, şiddetli sağanak yağış ve sel riskine karşı dere yataklarından uzak durulması istendi.",
          "reading": "A-FAD ta-ra-fuhn-DAN ya-puh-LAN...",
          "translation": "In the warning issued by AFAD, people were requested to stay away from river beds against heavy torrential rain and flood risk."
        }
      ],
      "mnemonics": [
        "ÇÖK - KAPAN - TUTUN = The universal life-saving earthquake survival drill taught by AFAD!"
      ],
      "culturalNotes": [
        "AFAD coordinates disaster relief, operating a nationwide seismic monitoring network and conducting nationwide simultaneous earthquake drills (Deprem Tatbikatı) involving millions of citizens."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Bir deprem anında sarsıntı geçene kadar uygulanması gereken en temel hayat kurtaran hareket nedir?",
          "options": [
            "Merdivenlere koşmak",
            "ÇÖK - KAPAN - TUTUN",
            "Asansöre binmek",
            "Pencerelerden atlamak"
          ],
          "answerIndex": 1,
          "explanation": "ÇÖK - KAPAN - TUTUN."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Türkiye'de afet ve acil durumların yönetiminden sorumlu kamu kurumu hangisidir?",
          "options": [
            "AFAD",
            "Karayolları",
            "Merkez Bankası",
            "TÜİK"
          ],
          "answerIndex": 0,
          "explanation": "AFAD."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Hava durumunun çok tehlikeli olduğunu ve can kaybı riski taşıdığını belirten MGM renk kodu hangisidir?",
          "options": [
            "Yeşil Kod",
            "Mavi Kod",
            "Kırmızı Kod",
            "Beyaz Kod"
          ],
          "answerIndex": 2,
          "explanation": "Kırmızı Kod.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"Do not use elevators during earthquakes and prepare an emergency grab bag in advance.\"",
          "options": [
            "Deprem tehlikeli değildir.",
            "Deprem sırasında asansörleri kullanmayın ve önceden bir acil durum afet çantası hazırlayın.",
            "Depremde asansöre koşun.",
            "Afet çantası gereksizdir."
          ],
          "answerIndex": 1,
          "explanation": "Accurate disaster preparedness translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 16, Lesson 4: Foundational & Structural Mastery (AFAD tarafından yapılan uyarıd)"
  },
  "tr-u16-l5": {
    "id": "tr-u16-l5",
    "unit": "tr-u16",
    "level": "A2",
    "objective": "Yenilenebilir enerji hamlesi (Güneş enerjisi, rüzgâr santralleri, jeotermal enerji), Sıfır Atık Projesi (Zero Waste) ve çevre bilinci.",
    "presentation": {
      "explanation": "Türkiye'nin Yeşil Dönüşümü ve Çevre Projeleri:\n- Yenilenebilir Enerji Liderliği:\n  - Karapınar Güneş Enerjisi Santrali (Konya - Avrupa'nın en büyük tek parça güneş enerjisi santrallerinden biri, 1350 MW)\n  - Ege ve Marmara'da Rüzgâr Enerjisi Santralleri (RES)\n  - Jeotermal Enerji (Ege Bölgesi - Türkiye dünyada jeotermal enerjide ilk 4 ülke arasında)\n- \"Sıfır Atık\" Projesi (Zero Waste Project - BM destekli küresel çevre projesi, atıkların kaynağında ayrıştırılması ve geri dönüşüm)\n- Milli Parkların ve caretta caretta deniz kaplumbağalarının (İztuzu Plajı) korunması",
      "examples": [
        {
          "target": "Konya Karapınar'da kurulan devasa güneş santrali, Türkiye'nin temiz enerji üretim kapasitesini büyük ölçüde artırmıştır.",
          "reading": "kon-YA ka-ra-puh-NAR-da koo-roo-LAN...",
          "translation": "The massive solar power plant established in Konya Karapınar has substantially increased Turkey's clean energy generation capacity."
        }
      ],
      "mnemonics": [
        "Sıfır Atık = UN-recognized national Zero Waste sustainability initiative!",
        "Karapınar GES = Colossal solar power farm!"
      ],
      "culturalNotes": [
        "Turkey is a world leader in geothermal renewable energy production and has mobilized thousands of public institutions and schools under the nationwide Zero Waste initiative."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Türkiye'nin atıkları kaynağında ayrıştırarak geri dönüşümü artırmayı hedefleyen ve BM tarafından ödüllendirilen çevre projesi hangisidir?",
          "options": [
            "Sıfır Atık Projesi",
            "Plastik Çoğaltma Projesi",
            "Orman Kesim Projesi",
            "Çöp Yakma Girişimi"
          ],
          "answerIndex": 0,
          "explanation": "Sıfır Atık Projesi."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Türkiye'de nesli tükenme tehlikesi altında olan ve Dalyan İztuzu Plajı'nda koruma altına alınan deniz kaplumbağası türü hangisidir?",
          "options": [
            "Kara kaplumbağası",
            "Dev piton",
            "Bukalemun",
            "Caretta caretta"
          ],
          "answerIndex": 3,
          "explanation": "Caretta caretta."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Konya Karapınar'da eski bir çöl alanına kurulan devasa temiz enerji tesisi hangi türdendir?",
          "options": [
            "Kömür Santrali",
            "Güneş Enerjisi Santrali",
            "Nükleer Santral",
            "Dizel Santrali"
          ],
          "answerIndex": 1,
          "explanation": "Güneş Enerjisi Santrali (GES).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"Expanding solar energy and conserving marine wildlife is crucial for a sustainable green future.\"",
          "options": [
            "Güneş enerjisini yaygınlaştırmak ve deniz canlılarını korumak sürdürülebilir yeşil bir gelecek için hayati önem taşır.",
            "Güneş enerjisi faydasızdır.",
            "Denizleri kirletmeliyiz.",
            "Gelecek nesiller önemsizdir."
          ],
          "answerIndex": 0,
          "explanation": "Accurate sustainability statement.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 16, Lesson 5: Foundational & Structural Mastery (Konya Karapınar'da kurulan dev)"
  },
  "tr-u17-l1": {
    "id": "tr-u17-l1",
    "unit": "tr-u17",
    "level": "A2",
    "objective": "Vücudun bölümleri, ağrı ve hastalık semptomlarını Türkçe ifade etme (\"Başım / boğazım ağrıyor\", \"Yüksek ateşim var\").",
    "presentation": {
      "explanation": "Vücudun bölümleri ve doktorda şikayetleri anlatma (Aile Hekimliği / Muayene):\n- Vücudun bölümleri: Baş (kafa), gözler, kulaklar, burun, boğaz, göğüs, sırt, karın (mide), kollar, bacaklar, dizler, ayaklar\n- Ağrıyı ifade etme (İyelik eki + AĞRIMAK):\n  - \"Başım ağrıyor / boğazım ağrıyor / sırtım ağrıyor / midem ağrıyor.\" (My head/throat/back/stomach hurts.)\n  - \"Gözlerim ağrıyor / bacaklarım ağrıyor / dişlerim ağrıyor.\" (Plural)\n- Semptomlar:\n  - \"Yüksek ateşim var (otuz sekiz buçuk derece) ve titriyorum.\" (High fever & chills.)\n  - \"Kuru öksürüğüm var, burnum tıkalı; fena halde üşütmüşüm / gribim.\"\n  - \"Midem bulanıyor, başım dönüyor ve kendimi çok halsiz hissediyorum.\"\n- Doktor: \"Geçmiş olsun! Şikayetiniz nedir? / Ne zamandan beri ağrınız var?\"",
      "examples": [
        {
          "target": "Merhaba doktor bey; dünden beri boğazım yutkunurken çok fena ağrıyor ve otuz sekiz buçuk derece ateşim var.",
          "reading": "Mer-ha-ba DOK-tor BEY; dewn-DEN be-ree bo-ah-ZUM yoot-koon-oor-KEN...",
          "translation": "Hello doctor; since yesterday my throat hurts terribly when swallowing and I have a fever of 38.5."
        }
      ],
      "mnemonics": [
        "Geçmiş olsun! = May it be in the past! (Universal Turkish wish for speedy recovery)! Başım ağrıyor = My head hurts!"
      ],
      "culturalNotes": [
        "Whenever anyone is ill or mentions a physical ailment in Turkey, people immediately and warmly reply with \"Geçmiş olsun!\" (May it pass quickly!)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Türkçede uzun bir koşudan sonra her iki ayağınızın da ağrıdığını nasıl söylersiniz?",
          "options": [
            "Ayağım ağrıyor",
            "Kulağım ağrıyor",
            "Karnım acıktı",
            "Ayaklarım ağrıyor"
          ],
          "answerIndex": 3,
          "explanation": "Ayaklarım ağrıyor (çoğul)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Birisi hasta olduğunda veya doktora gittiğinde Türk kültüründe söylenen en yaygın iyi dilek sözü nedir?",
          "options": [
            "Afiyet olsun!",
            "Kolay gelsin!",
            "Tebrikler!",
            "Geçmiş olsun!"
          ],
          "answerIndex": 3,
          "explanation": "Geçmiş olsun!"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Türk sağlık sisteminde mahallelerde birinci basamak sağlık hizmeti veren doktora ne ad verilir?",
          "options": [
            "Aile Hekimi",
            "Nöbetçi Eczacı",
            "Başhekim sadece",
            "Hastane müdürü"
          ],
          "answerIndex": 0,
          "explanation": "Aile Hekimi.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"I have acute stomach pain, dizziness, and nausea; please call a doctor immediately.\"",
          "options": [
            "Çok sağlıklıyım ve parka gidiyorum.",
            "Hastaneler kapalıdır.",
            "İlaca ihtiyacım yok.",
            "Şiddetli karın ağrım, baş dönmem ve mide bulantım var; lütfen hemen bir doktor çağırın."
          ],
          "answerIndex": 3,
          "explanation": "Accurate symptom translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 17, Lesson 1: Foundational & Structural Mastery (Merhaba doktor bey; dünden ber)"
  },
  "tr-u17-l2": {
    "id": "tr-u17-l2",
    "unit": "tr-u17",
    "level": "A2",
    "objective": "Türkiye'de eczane kültürü, Nöbetçi Eczane, SGK ve e-Nabız sistemi, reçeteli/reçetesiz ilaçlar ve kullanım talimatı.",
    "presentation": {
      "explanation": "Türkiye'de Eczane ve İlaç Sistemi:\n- Eczane tabelaları: Kırmızı ve beyaz renkli ışıklı standart \"E\" harfi tabelası\n- İlaç türleri:\n  - Reçeteli ilaçlar (Doktorun e-reçete kodu ile SGK kapsamında alınan ilaçlar)\n  - Reçetesiz ilaçlar (OTC): Ağrı kesici ve ateş düşürücüler (parol, apranax, majezik, nurofen), boğaz pastilleri, öksürük şurubu, deniz suyu burun spreyi, yara bandı, gazlı bez, batikon (iyotlu antiseptik)\n- e-Nabız ve MHRS (Sağlık Bakanlığı Merkezi Hekim Randevu Sistemi ve kişisel sağlık kaydı platformu)\n- Nöbetçi Eczane (Gece ve tatil günlerinde acil ilaç temini için dönüşümlü açık kalan eczaneler)\n- İlaç kullanım talimatı: \"Günde üç defa, yemeklerden sonra tok karnına birer tablet alınız.\"",
      "examples": [
        {
          "target": "İyi akşamlar eczacı hanım, e-reçete numaramla ilaçlarımı almaya geldim; bir de kutu yara bandı alabilir miyim?",
          "reading": "Ee-yee ak-sham-LAR ez-ja-JU ha-NUM, e-re-che-te noo-ma-ram-LA...",
          "translation": "Good evening pharmacist, I came to pick up my medicines with my e-prescription code; could I also get a box of band-aids?"
        }
      ],
      "mnemonics": [
        "Kırmızı-Beyaz \"E\" Tabelası = Standardized Turkish pharmacy sign! Nöbetçi Eczane = 24/7 rotating on-duty pharmacy!"
      ],
      "culturalNotes": [
        "All pharmacies in Turkey operate under strict community standards with prominent illuminated red-and-white \"E\" signs, featuring clear window displays listing that night's Nöbetçi Eczane."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Türkiye'deki tüm eczaneleri uzaktan kolayca tanımayı sağlayan standart tabela harfi ve rengi nedir?",
          "options": [
            "Kırmızı ve beyaz renkli ışıklı \"E\" harfi tabelası",
            "Sarı bir yıldız",
            "Mavi bir kare",
            "Yeşil bir ağaç"
          ],
          "answerIndex": 0,
          "explanation": "Kırmızı-beyaz \"E\" harfi."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Gece vakti veya pazar günleri açık olan acil eczaneye Türkiye'de ne ad verilir?",
          "options": [
            "Nöbetçi Eczane",
            "Gündüz Eczanesi",
            "Kapalı Eczane",
            "Süpermarket"
          ],
          "answerIndex": 0,
          "explanation": "Nöbetçi Eczane."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "T.C. Sağlık Bakanlığı'nın tüm tahlil, randevu ve reçete kayıtlarını içeren dijital sağlık platformu hangisidir?",
          "options": [
            "e-Okul",
            "e-Devlet kapısı sadece",
            "Instagram",
            "e-Nabız"
          ],
          "answerIndex": 3,
          "explanation": "e-Nabız.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"Take one tablet with plenty of water three times daily after meals on a full stomach.\"",
          "options": [
            "Bütün ilaçları tek seferde susuz içiniz.",
            "İlaçları asla kullanmayınız.",
            "Günde üç defa yemeklerden sonra tok karnına bol su ile birer tablet alınız.",
            "İlaç sadece cilde sürülür."
          ],
          "answerIndex": 2,
          "explanation": "Accurate posology translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 17, Lesson 2: Foundational & Structural Mastery (İyi akşamlar eczacı hanım, e-r)"
  },
  "tr-u17-l3": {
    "id": "tr-u17-l3",
    "unit": "tr-u17",
    "level": "A2",
    "objective": "112 Acil Çağrı Merkezi, UMKE (Ulusal Medikal Kurtarma Ekibi), Şehir Hastaneleri ve acil servis triyajı.",
    "presentation": {
      "explanation": "Acil Sağlık Hizmetleri ve Afet Tıbbı:\n- 112 Acil Çağrı Merkezi: Türkiye genelinde tüm acil numaraların (Ambulans, Polis, Jandarma, İtfaiye, Sahil Güvenlik, Orman Yangını) tek çatı altında toplandığı entegre numara\n- UMKE (Ulusal Medikal Kurtarma Ekibi):\n  - Sağlık Bakanlığı bünyesinde, deprem ve doğal afetlerde zorlu arazi şartlarında hayat kurtaran dünya çapında eğitimli medikal arama-kurtarma gücü\n- Şehir Hastaneleri (Yüksek teknolojiye sahip, binlerce yatak kapasiteli modern entegre sağlık kampüsleri: Başakşehir Çam ve Sakura, Ankara Bilkent)\n- Hastane Acil Servisi (Kırmızı Alan - Hayati tehlike, Sarı Alan - Acil, Yeşil Alan - Ayaktan tedavi)",
      "examples": [
        {
          "target": "Hemen bir bir iki'yi arayın! Yolda bir vatandaş bayıldı, acil ambulans ve doktor ekibi gerekiyor!",
          "reading": "He-MEN beer beer ee-kee-yee a-ra-YUN! Yol-da beer va-tan-DASH...",
          "translation": "Call 112 immediately! A citizen collapsed on the road, an emergency ambulance and doctor crew are needed!"
        }
      ],
      "mnemonics": [
        "112 = Unified Turkish Emergency Number! UMKE = World-renowned Medical Disaster Rescue Team!"
      ],
      "culturalNotes": [
        "UMKE (National Medical Rescue Team) is globally celebrated for rapid mobilization during major earthquakes and international humanitarian disasters."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Türkiye'de ambulans, polis ve itfaiyenin tek bir çatı altında birleştiği ücretsiz acil çağrı numarası kaçtır?",
          "options": [
            "911",
            "112 Acil Çağrı Merkezi",
            "999",
            "155"
          ],
          "answerIndex": 1,
          "explanation": "112."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Deprem ve afet bölgelerinde zorlu koşullarda medikal müdahale ve kurtarma yapan özel eğitimli sağlık gücü hangisidir?",
          "options": [
            "UMKE",
            "Trafik Polisi",
            "Zabıta",
            "Orman Koruma"
          ],
          "answerIndex": 0,
          "explanation": "UMKE."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Hastane acil servislerinde hayati tehlikesi olan en kritik hastalara anında müdahale edilen renkli alan hangisidir?",
          "options": [
            "Mavi Alan",
            "Beyaz Alan",
            "Kırmızı Alan",
            "Yeşil Alan"
          ],
          "answerIndex": 2,
          "explanation": "Kırmızı Alan.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"The patient is experiencing acute respiratory failure; dispatch a fully equipped mobile ICU ambulance immediately.\"",
          "options": [
            "Ambulans çağırmaya gerek yoktur.",
            "Hasta akut solunum yetmezliği çekiyor; derhal tam donanımlı bir yoğun bakım ambulansı sevk edin.",
            "Hastanede acil servis yoktur.",
            "Hasta evinde dinleniyor."
          ],
          "answerIndex": 1,
          "explanation": "Accurate emergency ambulance call translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 17, Lesson 3: Foundational & Structural Mastery (Hemen bir bir iki'yi arayın! Y)"
  },
  "tr-u17-l4": {
    "id": "tr-u17-l4",
    "unit": "tr-u17",
    "level": "A2",
    "objective": "Türk hamamı ve kese-köpük ritüeli, şifalı termal kaplıcalar (Pamukkale, Bursa, Afyon), adaçayı, ıhlamur ve şifa çorbaları.",
    "presentation": {
      "explanation": "Geleneksel Türk Wellness Kültürü ve Şifalı Kaynaklar:\n- Türk Hamamı Ritüeli (Yüzyıllık arınma ve dolaşım kültürü):\n  - Göbek taşı (mermer sıcak platformda terleme ve kasların gevşemesi)\n  - Kese (İpek kese ile ölü derinin atılması, gözeneklerin açılması ve kan dolaşımının hızlanması) ve köpük masajı\n- Şifalı Termal Kaplıcalar:\n  - Pamukkale (Hierapolis antik termal havuzları ve travertenler)\n  - Bursa, Afyonkarahisar ve Yalova kaplıcaları (Kükürtlü ve mineralli sularla romatizma ve eklem tedavisi)\n- Geleneksel Şifa İçecekleri ve Çorbalar:\n  - Taze demlenmiş adaçayı ve bal-limonlu ıhlamur çayı\n  - Hastalık savar: Sıcak tavuk suyu çorbası ve sarımsaklı-sirkeli paça çorbası",
      "examples": [
        {
          "target": "Türk hamamında sıcak göbek taşında terleyip kese yaptırmak ve ardından ballı ıhlamur içmek vücudu tamamen yeniler.",
          "reading": "Toork ha-ma-mun-DA su-JAK goe-bek ta-shun-DA ter-le-YEEP...",
          "translation": "Sweating on the hot marble stone in a Turkish bath, getting a scrub, and then drinking linden tea with honey completely rejuvenates the body."
        }
      ],
      "mnemonics": [
        "Türk Hamamı (Göbek Taşı & Kese) + Pamukkale Termal Kaplıcaları + Ballı Ihlamur = The ultimate Anatolian wellness tradition!"
      ],
      "culturalNotes": [
        "Turkish baths (hamam) have functioned for centuries as social wellness hubs, integrating thermal hydrotherapy, exfoliation, and aromatherapy."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Türk hamamında yatarak terlenilen ve kasların gevşemesini sağlayan ortadaki büyük sıcak mermer platforma ne ad verilir?",
          "options": [
            "Kurna başı",
            "Göbek taşı",
            "Soyunma kabini",
            "Masa"
          ],
          "answerIndex": 1,
          "explanation": "Göbek taşı."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Soğuk algınlığı ve gribe karşı Türkiye'de geleneksel olarak bal ve limonla demlenerek içilen şifalı çiçek çayı hangisidir?",
          "options": [
            "Ihlamur çayı",
            "Soğuk meşrubat",
            "Şekerli şurup",
            "Kola"
          ],
          "answerIndex": 0,
          "explanation": "Ihlamur çayı."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Beyaz travertenleri ve binlerce yıllık antik termal havuzuyla UNESCO Dünya Mirası olan ünlü kaplıca merkezi neresidir?",
          "options": [
            "Efes",
            "Pamukkale",
            "Kapadokya",
            "Nemrut Dağı"
          ],
          "answerIndex": 1,
          "explanation": "Pamukkale.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"Thermal mineral baths, herbal linden tea, and traditional hammam exfoliation promote deep physical restoration and vitality.\"",
          "options": [
            "Termal mineral banyoları, bitkisel ıhlamur çayı ve geleneksel hamam kesesi derin bir fiziksel yenilenme ve canlılık sağlar.",
            "Hamam kültürü fiziksel olarak yorucudur.",
            "Kaplıcalar sağlığa zararlıdır.",
            "Ihlamur çayının hiçbir faydası yoktur."
          ],
          "answerIndex": 0,
          "explanation": "Accurate wellness statement translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 17, Lesson 4: Foundational & Structural Mastery (Türk hamamında sıcak göbek taş)"
  },
  "tr-u17-l5": {
    "id": "tr-u17-l5",
    "unit": "tr-u17",
    "level": "A2",
    "objective": "Türk tıp tarihinin öncüleri: Aziz Sancar (2015 Nobel Kimya Ödülü - DNA Onarımı), Hulusi Behçet (Behçet Hastalığı), Şerafeddin Sabuncuoğlu.",
    "presentation": {
      "explanation": "Dünya Tıbbına Damga Vuran Türk Bilim İnsanları:\n- Prof. Dr. Aziz Sancar (2015 Nobel Kimya Ödülü — Hücrelerin hasar gören DNA'ları nasıl onardığını ve genetik bilgisini nasıl koruduğunu moleküler düzeyde haritalandıran tarihi keşif)\n- Prof. Dr. Hulusi Behçet (1889-1948 - Kan damarlarının iltihaplanmasıyla seyreden ve dünya tıp literatürüne kendi adıyla geçen \"Behçet Hastalığı\"nı tanımlayan dermatolog)\n- Şerafeddin Sabuncuoğlu (1385-1468 - Amasya Darüşşifası hekimi, ilk Türkçe resimli cerrahi tıp kitabı olan \"Cerrâhiyyetü'l-Hâniyye\"nin yazarı)\n- Prof. Dr. Gazi Yaşargil (Dünya Nöroşirürji Dernekleri Federasyonu tarafından \"Yüzyılın Beyin Cerrahı\" seçilen mikronörocerrahinin kurucusu)",
      "examples": [
        {
          "target": "Prof. Dr. Aziz Sancar'ın DNA onarımı üzerine yaptığı Nobel ödüllü keşifler kanser tedavisi ve moleküler biyolojide çığır açmıştır.",
          "reading": "Pro-fe-soer Dok-tor A-zeez San-jar-un...",
          "translation": "Prof. Dr. Aziz Sancar's Nobel prize-winning discoveries on DNA repair revolutionized cancer therapy and molecular biology."
        }
      ],
      "mnemonics": [
        "Aziz Sancar (2015 Nobel DNA Repair), Gazi Yaşargil (Neurosurgeon of the Century), Hulusi Behçet (Behçet Disease)!"
      ],
      "culturalNotes": [
        "Prof. Dr. Gazi Yaşargil revolutionized brain surgery by inventing the floating microscope and micro-instruments, operating on thousands of patients with unprecedented precision."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Hücrelerin hasarlı DNA'yı nasıl onardığını haritalandırarak 2015 Nobel Ödülü'nü kazanan dünyaca ünlü Türk bilim insanı kimdir?",
          "options": [
            "Prof. Dr. Aziz Sancar",
            "Prof. Dr. Gazi Yaşargil",
            "İbni Sina",
            "Dr. Hulusi Behçet"
          ],
          "answerIndex": 0,
          "explanation": "Prof. Dr. Aziz Sancar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Mikronörocerrahinin kurucusu kabul edilen ve \"Yüzyılın Beyin Cerrahı\" unvanını alan ünlü Türk cerrah kimdir?",
          "options": [
            "Prof. Dr. Aziz Sancar",
            "Ali Kuşçu",
            "Cahit Arf",
            "Prof. Dr. Gazi Yaşargil"
          ],
          "answerIndex": 3,
          "explanation": "Prof. Dr. Gazi Yaşargil."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Kendi adıyla dünya tıp literatürüne giren ve kan damarlarını etkileyen otoimmün hastalığı 1937'de tanımlayan Türk hekim kimdir?",
          "options": [
            "Prof. Dr. Hulusi Behçet",
            "Şerafeddin Sabuncuoğlu",
            "Oktay Sinanoğlu",
            "Fuat Sezgin"
          ],
          "answerIndex": 0,
          "explanation": "Prof. Dr. Hulusi Behçet.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"Groundbreaking discoveries in DNA repair mechanisms and microneurosurgery have fundamentally transformed modern global medicine.\"",
          "options": [
            "Mikrocerrahi ameliyatlarda kullanılmaz.",
            "Türk bilim insanları tıbba katkıda bulunmamıştır.",
            "DNA onarımı tıbbi açıdan önemsizdir.",
            "DNA onarım mekanizmaları ve mikronörocerrahideki çığır açan keşifler modern dünya tıbbını kökten dönüştürmüştür."
          ],
          "answerIndex": 3,
          "explanation": "Accurate scientific translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Türk tıp tarihinin öncüleri"
  },
  "tr-u18-l1": {
    "id": "tr-u18-l1",
    "unit": "tr-u18",
    "level": "B1",
    "objective": "Türkiye'de ev kiralama (Sahibinden.com, Hepsiemlak), kira sözleşmesi, depozito, aidat ve DASK (Zorunlu Deprem Sigortası).",
    "presentation": {
      "explanation": "Türkiye'de Emlak Piyasası ve Ev Kiralama (Kiralık Daire Tutma):\n- Emlak Portalları: Sahibinden.com, Hepsiemlak, Emlakjet\n- Konut Türleri ve Oda Sayısı (Oda + Salon):\n  - 1+1 (Bir oda bir salon - Amerikan mutfaklı modern daire)\n  - 2+1, 3+1 (Aileler için ideal geniş daireler)\n  - Dubleks (İki katlı çatı veya bahçe dubleksi)\n- Sözleşme ve Finansal Şartlar (Türk Borçlar Kanunu):\n  - Kira sözleşmesi ve tahliye taahhütnamesi\n  - Depozito (Genellikle bir veya iki aylık kira bedeli tutarında güvence bedeli)\n  - Aidat (Apartman veya site ortak giderleri: güvenlik, bahçıvan, havuz, asansör bakımı, temizlik)\n  - DASK (Doğal Afet Sigortaları Kurumu - Zorunlu Deprem Sigortası, elektrik ve su aboneliği açtırmak için şarttır)",
      "examples": [
        {
          "target": "Merhaba, Kadıköy'deki iki artı bir kiralık daire için arıyorum; aylık site aidatı ne kadar ve DASK poliçesi hazır mı?",
          "reading": "Mer-ha-ba, Ka-du-KOEY-de-kee ee-kee ar-tu beer kee-ra-LUK...",
          "translation": "Hello, I am calling about the 2+1 rental flat in Kadıköy; how much is the monthly maintenance fee and is the DASK earthquake policy ready?"
        }
      ],
      "mnemonics": [
        "2+1 / 3+1 Daire + Depozito + Aylık Aidat + DASK Deprem Sigortası = Turkish real estate essentials!"
      ],
      "culturalNotes": [
        "Having an active DASK (Compulsory Earthquake Insurance) policy is legally required in Turkey before any tenant can activate municipal electricity, gas, or water utilities."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Türkiye'de \"2+1\" daire ifadesi evin hangi oda yapısına sahip olduğunu belirtir?",
          "options": [
            "2 salon ve 1 mutfak",
            "2 banyo ve 1 balkon",
            "Sadece 2 oda salonsuz",
            "2 yatak odası ve 1 oturma salonu"
          ],
          "answerIndex": 3,
          "explanation": "2 yatak odası ve 1 salon."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Elektrik ve su aboneliği açtırmak için Türkiye'de zorunlu olan deprem sigortası poliçesi hangisidir?",
          "options": [
            "Trafik kaskosu",
            "Seyahat sağlık sigortası",
            "Kütüphane kartı",
            "DASK"
          ],
          "answerIndex": 3,
          "explanation": "DASK."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Apartman veya site sakinlerinin ortak alan temizliği, güvenlik ve asansör bakımı için her ay ödediği ücrete ne denir?",
          "options": [
            "Trafik cezası",
            "Bahşiş",
            "Kira stopajı sadece",
            "Site aidatı"
          ],
          "answerIndex": 3,
          "explanation": "Site aidatı.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"The tenant paid a one-month deposit and signed an annual lease agreement for a furnished two-bedroom apartment.\"",
          "options": [
            "Ev sahibi daireyi kiraya vermekten vazgeçti.",
            "Dairede hiç mobilya yoktur.",
            "Kiracı bir aylık depozito ödedi ve eşyalı iki odalı bir daire için bir yıllık kira sözleşmesi imzaladı.",
            "Kira bedeli ücretsizdir."
          ],
          "answerIndex": 2,
          "explanation": "Accurate tenancy translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 18, Lesson 1: Foundational & Structural Mastery (Merhaba, Kadıköy'deki iki artı)"
  },
  "tr-u18-l2": {
    "id": "tr-u18-l2",
    "unit": "tr-u18",
    "level": "B1",
    "objective": "Türkiye'de site yaşamı: Güvenlikli siteler, kapıcı kültürü (\"Kapıcı Veysel\"), komşuluk ilişkileri ve \"komşu komşunun külüne muhtaçtır\".",
    "presentation": {
      "explanation": "Site ve Apartman Kültürü, Kapıcılık ve Komşuluk Gelenekleri:\n- Güvenlikli Siteler (Modern konut siteleri):\n  - 24 saat güvenlik, açık/kapalı yüzme havuzu, fitness salonu, çocuk oyun parkı, kapalı otopark\n- Türk Apartman Kültürünün Sembolü: Kapıcı (Apartman Görevlisi):\n  - Sabahları kapılara taze ekmek ve gazete servisi yapma, çöpleri toplama, apartman merdivenlerini yıkama ve bahçe bakımı\n- Komşuluk Kültürü ve Dayanışma:\n  - \"Komşu komşunun külüne muhtaçtır\" (Atasözü: En küçük şeyde bile komşuların birbirine yardım etmesinin önemi)\n  - Pişirilen lezzetli yemekten (aşure, börek, kek) komşuya bir tabak ikram etme geleneği (\"Tabak boş geri verilmez\" kuralı)",
      "examples": [
        {
          "target": "Komşumuz bize sıcak peynirli börek getirdi; annem de tabağı boş çevirmeyip içine ev yapımı elmalı kurabiye koydu.",
          "reading": "Kom-shoo-MOOZ bee-ze su-JAK pey-neer-LEE boe-REK ge-TEER-dee...",
          "translation": "Our neighbor brought us warm cheese pastry; my mother didn't return the plate empty, putting homemade apple cookies on it."
        }
      ],
      "mnemonics": [
        "\"Komşu komşunun külüne muhtaçtır\" + Kapıcı ekmek servisi + Boş tabak geri verilmez = Heartwarming Turkish neighborly culture!"
      ],
      "culturalNotes": [
        "In Turkish neighborhood hospitality, returning an empty plate when a neighbor gifts you homemade food is considered bad form; one always returns the dish with sweets, fruit, or homemade snacks."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Komşuların en zor ve küçük anlarda bile birbirine destek olmasını anlatan ünlü Türk atasözü hangisidir?",
          "options": [
            "Komşu komşunun külüne muhtaçtır",
            "Tatlı dil yılanı deliğinden çıkarır",
            "Damlaya damlaya göl olur",
            "Ayağını yorganına göre uzat"
          ],
          "answerIndex": 0,
          "explanation": "Komşu komşunun külüne muhtaçtır."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Bir komşu size evde pişirdiği bir tabak yemek getirdiğinde Türk geleneğine göre ne yapılır?",
          "options": [
            "Tabak boş verilmez; içine başka bir ikram konularak geri verilir",
            "Tabak çöpe atılır",
            "Tabak hemen yıkanıp boş geri verilir",
            "Kapı kapatılır"
          ],
          "answerIndex": 0,
          "explanation": "Tabak boş geri verilmez."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Geleneksel Türk apartmanlarında sabahları ekmek alan, çöpleri toplayan ve temizlik yapan görevliye ne ad verilir?",
          "options": [
            "Postacı",
            "Taksi şoförü",
            "Apartman görevlisi",
            "Kurye"
          ],
          "answerIndex": 2,
          "explanation": "Apartman görevlisi (kapıcı).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"Gated residential complexes with 24-hour security and recreational facilities foster friendly neighborhood communities.\"",
          "options": [
            "Sitelerde komşuluk ilişkisi kurulamaz.",
            "Yirmi dört saat güvenlikli ve sosyal tesisli siteler dostane komşuluk ilişkilerini güçlendirir.",
            "Apartmanlarda ortak yaşam kuralları yoktur.",
            "Güvenlik görevlileri sitelerde çalışmaz."
          ],
          "answerIndex": 1,
          "explanation": "Accurate community life translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Türkiye'de site yaşamı"
  },
  "tr-u18-l3": {
    "id": "tr-u18-l3",
    "unit": "tr-u18",
    "level": "B1",
    "objective": "Geleneksel Türk Evleri: Tarihi Safranbolu Evleri (UNESCO Dünya Mirası), ahşap karkas çatkı, cumbalar ve hayat (avlu).",
    "presentation": {
      "explanation": "Geleneksel Osmanlı-Türk Konut Mimarisi:\n- Safranbolu Evleri (Karabük - UNESCO Dünya Mirası Listesi):\n  - 18. ve 19. yüzyıl geleneksel Osmanlı sivil mimarisinin dünyadaki en iyi korunmuş örnekleri\n  - Ahşap karkas çatkı arasına kerpiç dolgu (Hımış tekniği) ile inşa edilen depreme dayanıklı esnek yapılar\n- Mimari Yapı ve Fonksiyonlar:\n  - Cumba (Sokağa doğru konsol şeklinde taşan, ahşap kafesli pencereleriyle sokağı seyretmeye yarayan ferah köşe odaları)\n  - Hayat / Avlu (Evin zemin katındaki taş döşeli, kuyu ve fırının bulunduğu geniş iç avlu)\n  - Başoda (Misafirlerin ağırlandığı tavanı ahşap oymalı, sedirli ve ocaklı en görkemli oda)\n  - Birbirinin güneşini ve manzarasını kesmeyen çevreye saygılı şehir yerleşimi",
      "examples": [
        {
          "target": "Tarihi Safranbolu konakları, ahşap cumbaları ve birbirinin güneşini kesmeyen mimari düzeniyle UNESCO koruması altındadır.",
          "reading": "Ta-ree-HEE Saf-ran-bo-LOO ko-nak-la-RU, ah-SHAP joom-ba-la-RU...",
          "translation": "Historic Safranbolu mansions are under UNESCO protection with their wooden projecting oriels and architectural layout that respects neighbors' sunlight."
        }
      ],
      "mnemonics": [
        "Safranbolu Konakları (UNESCO) + Ahşap Cumba + Hımış Tekniği + Hayat (Avlu) = Iconic Ottoman-Turkish timber architecture!"
      ],
      "culturalNotes": [
        "Traditional Ottoman houses in Safranbolu and Istanbul were built with such profound neighborly respect that no house cast a shadow or blocked the view of another."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Geleneksel Osmanlı ahşap evlerinde sokağa doğru çıkıntı yapan kafesli balkon-oda bölümüne ne denir?",
          "options": [
            "Teras",
            "Cumba",
            "Kiler",
            "Sığınak"
          ],
          "answerIndex": 1,
          "explanation": "Cumba."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "UNESCO Dünya Mirası Listesi'nde yer alan, geleneksel ahşap konaklarıyla ünlü tarihi Türk şehri neresidir?",
          "options": [
            "Safranbolu",
            "Adana",
            "Ankara merkez",
            "Konya ovası"
          ],
          "answerIndex": 0,
          "explanation": "Safranbolu."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Geleneksel Türk evinde ailenin misafirleri ağırladığı, tavanı işlemeli en gösterişli odaya ne ad verilir?",
          "options": [
            "Antre",
            "Başoda",
            "Vestiyer",
            "Kömürlük"
          ],
          "answerIndex": 1,
          "explanation": "Başoda.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"Historic Safranbolu timber mansions with projecting cumbalar and central courtyards showcase master Ottoman carpentry.\"",
          "options": [
            "Cumbalı ve iç avlulu tarihi Safranbolu ahşap konakları Osmanlı ahşap işçiliği ustalığını sergiler.",
            "Geleneksel Türk evlerinde cumba bulunmaz.",
            "Osmanlı mimarisinde ahşap kullanılmamıştır.",
            "Safranbolu evleri taştan yapılmıştır."
          ],
          "answerIndex": 0,
          "explanation": "Accurate architectural history translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Geleneksel Türk Evleri"
  },
  "tr-u18-l4": {
    "id": "tr-u18-l4",
    "unit": "tr-u18",
    "level": "B1",
    "objective": "Kapadokya Mağara Mimarisi (Cave Houses - Göreme, Uçhisar) ve taş oyma konutlarda doğal iklimlendirme.",
    "presentation": {
      "explanation": "Kapadokya Kaya Oyma Mimarisi ve Taş Konaklar (Nevşehir, Göreme, Ürgüp, Uçhisar):\n- Kapadokya Kaya Oyma Evleri (Cave Architecture - UNESCO Dünya Mirası):\n  - Volkanik tüf kayaların kolayca oyulmasıyla oluşturulan bin yıllık mağara evler ve yer altı şehirleri (Derinkuyu, Kaymaklı)\n- Doğal İklimlendirme ve Enerji Tasarrufu (Bioclimatic cave efficiency):\n  - Tüf kayanın mükemmel ısı yalıtımı sayesinde mağara evler yazın en kavurucu sıcaklarında buz gibi serin (16-18 °C), kışın ise sıcak kalır; hiçbir klima veya aşırı ısıtma gerektirmez\n- Kesme Taş Konaklar (Taş işçiliği):\n  - Yöresel sarı-beyaz tüf taşından yapılan kemerli tavanlar, avlular ve peri bacaları manzaralı teraslar",
      "examples": [
        {
          "target": "Kapadokya'daki kaya oyma mağara evler, tüf taşının doğal yalıtımı sayesinde yazın serin kışın sıcak bir konfor sunar.",
          "reading": "Ka-pa-dok-ya-da-KEE ka-YA oy-MA ma-ah-RA ev-LER...",
          "translation": "Cave houses carved into the rock in Cappadocia offer summer-cool and winter-warm comfort thanks to the natural insulation of volcanic tuff stone."
        }
      ],
      "mnemonics": [
        "Kapadokya Kaya Evleri (Cave Houses) + Volkanik Tüf Doğal Yalıtımı (16-18°C) + Peri Bacaları Manzarası = Timeless subterranean living!"
      ],
      "culturalNotes": [
        "The volcanic rock cut architecture of Cappadocia has sheltered civilizations for millennia, now transformed into world-renowned sustainable boutique cave hotels and residences."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Kapadokya'daki mağara evlerin yazın serin kışın ise sıcak kalmasını sağlayan doğal yapı malzemesi nedir?",
          "options": [
            "Plastik levha",
            "Volkanik tüf kayası",
            "Demir çelik",
            "Cam yünü"
          ],
          "answerIndex": 1,
          "explanation": "Volkanik tüf kayası."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Kapadokya bölgesinde binlerce insanın sığındığı çok katlı tarihi yer altı şehirlerine örnek hangisidir?",
          "options": [
            "Derinkuyu ve Kaymaklı yer altı şehirleri",
            "Dolmabahçe",
            "Anıtkabir",
            "Topkapı Sarayı"
          ],
          "answerIndex": 0,
          "explanation": "Derinkuyu ve Kaymaklı."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Kapadokya'nın eşsiz peri bacaları ve kaya yerleşimleri hangi uluslararası koruma listesinde yer almaktadır?",
          "options": [
            "UNESCO Dünya Mirası Listesi",
            "Nobel Vakfı",
            "Guinness Rekorlar Kitabı",
            "Olimpiyat Listesi"
          ],
          "answerIndex": 0,
          "explanation": "UNESCO Dünya Mirası Listesi.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"Carved volcanic tuff cave dwellings provide natural year-round thermal insulation and timeless aesthetic harmony.\"",
          "options": [
            "Kapadokya taşları ısıyı tutmaz.",
            "Kaya evler modern çağda kullanılmamaktadır.",
            "Mağara evlerde yaşamak imkansızdır.",
            "Oyulmuş volkanik tüf mağara konutları yıl boyu doğal ısı yalıtımı ve zamansız bir estetik uyum sağlar."
          ],
          "answerIndex": 3,
          "explanation": "Accurate architectural science translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 18, Lesson 4: Foundational & Structural Mastery (Kapadokya'daki kaya oyma mağar)"
  },
  "tr-u18-l5": {
    "id": "tr-u18-l5",
    "unit": "tr-u18",
    "level": "B1",
    "objective": "Türkiye'de Akıllı Evler ve Yeşil Binalar: Çatı güneş enerjisi panelleri, akıllı termostatlar, kombi yönetimi ve deprem sensörlü gaz kesme sistemleri.",
    "presentation": {
      "explanation": "Akıllı Ev Teknolojileri, Güvenlik ve Enerji Verimliliği:\n- Türkiye'de Akıllı Ev Sistemleri (Smart Home Automation):\n  - Akıllı kombi termostatları (Doğalgaz faturasını %30'a varan oranda düşüren programlanabilir Wi-Fi oda termostatları)\n  - Cep telefonundan uzaktan aydınlatma, panjur ve klima kontrolü\n- Deprem Güvenlik Otomasyonu (Hayati teknoloji):\n  - Deprem anında sismik dalgaları algılayarak ana doğalgaz vanasını anında otomatik olarak kapatan gaz kesme selenoid valfleri ve acil durum aydınlatmaları\n- Çatı Güneş Enerjisi (GES) ve Yeşil Binalar (LEED / BREEAM sertifikalı çevre dostu konut projeleri, yağmur suyu toplama depoları)",
      "examples": [
        {
          "target": "Akıllı evimiz deprem anında doğalgazı otomatik kesen güvenlik vanasına ve enerji tasarruflu Wi-Fi kombi termostatına sahiptir.",
          "reading": "A-kul-LU e-vee-MEEZ dep-REM a-nun-DA doh-al-ga-ZU...",
          "translation": "Our smart home features a safety valve that automatically shuts off natural gas during an earthquake and an energy-saving Wi-Fi boiler thermostat."
        }
      ],
      "mnemonics": [
        "Deprem Sensörlü Otomatik Gaz Kesme Vanası + Akıllı Wi-Fi Kombi Termostatı + Çatı Güneş Paneli = Turkish smart secure home!"
      ],
      "culturalNotes": [
        "In seismically active Turkey, smart building codes require automated seismic gas shut-off valves and emergency backup lighting in all newly constructed residential buildings."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Deprem anında yangın ve patlama riskini önlemek için doğalgazı anında otomatik olarak kesen güvenlik cihazı nedir?",
          "options": [
            "Sismik sensörlü gaz kesme emniyet vanası",
            "Su sayacı",
            "Klima kumandası",
            "Duman dedektörü sadece"
          ],
          "answerIndex": 0,
          "explanation": "Sismik sensörlü gaz kesme vanası."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Kış aylarında doğalgaz tüketimini ve faturaları önemli ölçüde düşüren akıllı cihaz hangisidir?",
          "options": [
            "Televizyon ekranı",
            "Müzik çalar",
            "Mikser",
            "Akıllı oda termostatı"
          ],
          "answerIndex": 3,
          "explanation": "Akıllı oda termostatı."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Uluslararası standartlarda çevre dostu, enerji ve su tasarruflu binalara verilen prestijli yeşil bina sertifikası hangisidir?",
          "options": [
            "Ehliyet belgesi",
            "ISO 9001 sadece",
            "İkametgah",
            "LEED (veya BREEAM) Yeşil Bina Sertifikası"
          ],
          "answerIndex": 3,
          "explanation": "LEED / BREEAM Sertifikası.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"Automated seismic gas shut-off valves and smart climate control optimize home safety and energy efficiency.\"",
          "options": [
            "Doğalgaz vanaları manuel kapatılmalıdır.",
            "Akıllı evler güvenliği azaltır.",
            "Otomatik sismik gaz kesme vanaları ve akıllı iklim kontrolü ev güvenliğini ve enerji verimliliğini optimize eder.",
            "Deprem sensörleri binalarda çalışmaz."
          ],
          "answerIndex": 2,
          "explanation": "Accurate smart technology translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Türkiye'de Akıllı Evler ve Yeşil Binalar"
  },
  "tr-u19-l1": {
    "id": "tr-u19-l1",
    "unit": "tr-u19",
    "level": "B1",
    "objective": "Türkiye'de iş hayatı ve istihdam (Kariyer.net, LinkedIn), İş Kanunu (Belirsiz süreli iş sözleşmesi), SGK, brüt/net maaş ve yemek kartı (Multinet/Sodexo).",
    "presentation": {
      "explanation": "Türkiye'de İstihdam ve Çalışma Hayatı Mevzuatı:\n- Kariyer ve İş Arama Platformları: Kariyer.net, LinkedIn Türkiye, Yenibiris.com\n- İş Kanunu (4857 Sayılı İş Kanunu) ve Sözleşme Türleri:\n  - Belirsiz süreli iş sözleşmesi (Standart kalıcı kadrolu çalışma sözleşmesi)\n  - Deneme süresi (En çok 2 ay, toplu iş sözleşmeleriyle 4 aya kadar uzatılabilir)\n- Sosyal Güvenlik ve Ücret Yapısı:\n  - SGK (Sosyal Güvenlik Kurumu) kaydı ve sigorta primi bildirimi\n  - Brüt maaş vs Net ele geçen maaş\n  - Asgari Ücret (Gelir vergisi ve damga vergisinden muaf tutulan yasal taban ücret)\n  - Yan Haklar: Yemek kartı (Multinet, Sodexo/Pluxee, Ticket Restaurant), özel sağlık sigortası (ÖSS) ve servis imkanı",
      "examples": [
        {
          "target": "Şirketle belirsiz süreli iş sözleşmesi imzaladım; tam SGK güvencesi, özel sağlık sigortası ve yemek kartı hakkım var.",
          "reading": "Sheer-KET-le be-leer-SEEZ soo-re-LEE eesh soz-lesh-me-SEE...",
          "translation": "I signed a permanent employment contract with the company; I have full SGK social security, private health insurance, and a meal card."
        }
      ],
      "mnemonics": [
        "Belirsiz süreli sözleşme + SGK güvencesi + Yemek kartı (Multinet/Sodexo) + Net maaş = Turkish employment standard!"
      ],
      "culturalNotes": [
        "Corporate shuttle bus services (personel servisi) and meal benefit cards (yemek kartı) are standard fringe benefits provided by Turkish companies to support employees."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Türkiye'de iş arayanların ve işverenlerin en çok kullandığı yerli kariyer portalı hangisidir?",
          "options": [
            "Hava Durumu",
            "E-Devlet Kapısı",
            "Sözlük",
            "Kariyer.net"
          ],
          "answerIndex": 3,
          "explanation": "Kariyer.net."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Türkiye'de tüm çalışanların sağlık ve emeklilik haklarını güvence altına alan devlet kurumu hangisidir?",
          "options": [
            "TFF",
            "Karayolları",
            "Meteoroloji",
            "SGK"
          ],
          "answerIndex": 3,
          "explanation": "SGK."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "4857 Sayılı İş Kanunu'na göre bireysel iş sözleşmelerinde deneme süresi kural olarak en fazla kaç ay olabilir?",
          "options": [
            "5 yıl",
            "12 ay",
            "En fazla 2 ay",
            "1 gün"
          ],
          "answerIndex": 2,
          "explanation": "En fazla 2 ay.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"The employee signed a permanent contract with full social security coverage, private health insurance, and meal benefits.\"",
          "options": [
            "İş sözleşmesi derhal feshedildi.",
            "Çalışan, tam sosyal güvenlik kapsamı, özel sağlık sigortası ve yemek desteği içeren belirsiz süreli bir sözleşme imzaladı.",
            "Şirket hiçbir sosyal güvence sağlamamaktadır.",
            "Maaş ödemeleri yapılmamaktadır."
          ],
          "answerIndex": 1,
          "explanation": "Accurate employment contract translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 19, Lesson 1: Foundational & Structural Mastery (Şirketle belirsiz süreli iş sö)"
  },
  "tr-u19-l2": {
    "id": "tr-u19-l2",
    "unit": "tr-u19",
    "level": "B1",
    "objective": "Ofis kültürü ve çalışma dinamikleri: Çay molası (\"Tavşan kanı çay\"), simit ve poğaça kahvaltıları, Cuma günleri \"Casual Friday\" ve samimi ekip ruhu.",
    "presentation": {
      "explanation": "Türk Ofis Kültürü, İkramlar ve İş Yeri Sosyalleşmesi:\n- Türk Ofislerinin Olmazsa Olmazı: Çay Ocağı ve Çay Molası:\n  - Gün boyu taze demlenen \"tavşan kanı\" ince belli bardakta Türk çayı ikramı (çalışanların motivasyon ve sohbet kaynağı)\n- Sabah Kahvaltı Geleneği:\n  - Sabah ofise gelirken fırından alınan sıcak çıtır simit, poğaça, boyoz veya açma; ofis mutfağında beyaz peynir ve zeytin eşliğinde ekiple paylaşılır\n- Çalışma Atmosferi ve İletişim:\n  - \"Kolay gelsin!\" (Gün boyu çalışanlara ve iş yapanlara söylenen en yaygın ve sıcak çalışma temennisi)\n  - Saygı ve hiyerarşi dengesi: \"Bey\" ve \"Hanım\" hitapları (Ahmet Bey, Zeynep Hanım) ile birlikte sıcak, yardımsever ve misafirperver bir ekip bağı",
      "examples": [
        {
          "target": "Sabah ofise gelirken sıcak simit ve taze demlenmiş tavşan kanı çay ile güne enerjik bir başlangıç yapıyoruz.",
          "reading": "Sa-BAH o-fee-SE ge-leer-KEN su-JAK see-MEET ve ta-ZE...",
          "translation": "Arriving at the office in the morning, we make an energetic start to the day with hot simit and freshly brewed crimson Turkish tea."
        }
      ],
      "mnemonics": [
        "\"Kolay gelsin!\" + Tavşan kanı çay + Çıtır simit kahvaltısı + \"Ahmet Bey / Ayşe Hanım\" = Warm Turkish office culture!"
      ],
      "culturalNotes": [
        "\"Kolay gelsin\" (May it come easy to you) is an iconic Turkish cultural phrase of empathy and encouragement spoken whenever greeting someone working, from colleagues to bus drivers."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Türkiye'de çalışan birine kolaylık ve başarı dilemek için günün her saatinde söylenen en yaygın ifade nedir?",
          "options": [
            "Kolay gelsin!",
            "Güle güle!",
            "İyi geceler!",
            "Geçmiş olsun!"
          ],
          "answerIndex": 0,
          "explanation": "Kolay gelsin!"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Türk ofislerinde gün boyu en çok tüketilen ve ikram edilen geleneksel sıcak içecek nedir?",
          "options": [
            "İnce belli bardakta demli Türk çayı",
            "Sıcak süt",
            "Meyve şurubu",
            "Tuzlu ayran"
          ],
          "answerIndex": 0,
          "explanation": "İnce belli bardakta Türk çayı."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "İş yerinde yöneticilere ve iş arkadaşlarına hitap ederken ismin sonuna eklenen saygılı Türkçe unvanlar nelerdir?",
          "options": [
            "Doktor sadece",
            "Bey (erkekler için) ve Hanım",
            "Ağa",
            "Kaptan"
          ],
          "answerIndex": 1,
          "explanation": "Bey ve Hanım.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"Morning tea breaks and collaborative team breakfasts foster high morale and warm interpersonal relations in the office.\"",
          "options": [
            "Sabah çay molaları ve birlikte yapılan ekip kahvaltıları ofiste yüksek motivasyonu ve samimi ilişkileri güçlendirir.",
            "Çalışanlar birbirine selam vermez.",
            "Kahvaltı yapmak iş verimini düşürür.",
            "Ofiste çay içmek yasaktır."
          ],
          "answerIndex": 0,
          "explanation": "Accurate workplace culture translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Ofis kültürü ve çalışma dinamikleri"
  },
  "tr-u19-l3": {
    "id": "tr-u19-l3",
    "unit": "tr-u19",
    "level": "B1",
    "objective": "Türkiye'de çalışan hakları ve güvenceler: Yıllık ücretli izin (14-26 gün), kıdem tazminatı, doğum izni (16 hafta) ve süt izni.",
    "presentation": {
      "explanation": "Çalışan Hakları, Kıdem ve İzin Hakları (4857 Sayılı Kanun):\n- Yıllık Ücretli İzin Hakkı (Hizmet süresine göre kademeli):\n  - 1 yıldan 5 yıla kadar: En az 14 iş günü\n  - 5 yıldan fazla 15 yıldan az: En az 20 iş günü\n  - 15 yıl ve daha fazla: En az 26 iş günü\n- Kıdem Tazminatı (Türk iş hukukunun en güçlü güvencesi):\n  - Aynı iş yerinde en az 1 yıl çalışan işçiye, haksız fesih, emeklilik veya haklı nedenle ayrılma durumunda her tam yıl için 30 günlük brüt ücreti tutarında tazminat ödenir\n- Annelik ve Doğum İzinleri:\n  - Toplam 16 hafta (doğumdan önce 8 hafta, doğumdan sonra 8 hafta) ücretli doğum izni\n  - Çocuğun 1 yaşına gelmesine kadar günde 1.5 saat ücretli Süt İzni",
      "examples": [
        {
          "target": "Şirkette beş yılı doldurduğum için yıllık ücretli izin hakkım yirmi iş gününe yükseldi ve kıdem tazminatı güvencem bulunuyor.",
          "reading": "Sheer-ket-TE besh yu-lu dol-door-doo-OOM ee-cheen...",
          "translation": "Since I completed five years at the company, my annual paid leave entitlement increased to twenty working days and I have severance pay protection."
        }
      ],
      "mnemonics": [
        "Kıdem Tazminatı (Her yıla 1 aylık brüt maaş) + 16 hafta doğum izni + Kademeli yıllık izin (14/20/26 gün) = Turkish worker rights!"
      ],
      "culturalNotes": [
        "Severance pay (Kıdem tazminatı) is a foundational worker entitlement in Turkey, providing substantial financial security for long-tenured employees."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Türkiye'de aynı iş yerinde 1 ila 5 yıl arası çalışan bir işçinin hak ettiği yıllık ücretli izin süresi en az kaç gündür?",
          "options": [
            "2 gün",
            "En az 14 iş günü",
            "30 gün",
            "Sıfır gün"
          ],
          "answerIndex": 1,
          "explanation": "En az 14 iş günü."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "İşçinin her bir yıllık çalışması karşılığında işten ayrılırken hak kazandığı bir aylık brüt ücret tutarındaki yasal tazminat nedir?",
          "options": [
            "Kıdem tazminatı",
            "Gümrük harcı",
            "Trafik tazminatı",
            "Piyango ikramiyesi"
          ],
          "answerIndex": 0,
          "explanation": "Kıdem tazminatı."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Kadın çalışanlara doğum sonrasında bebekleri bir yaşına gelene kadar günde kaç saat ücretli süt izni verilir?",
          "options": [
            "Günde 1,5 saat",
            "Günde 5 saat",
            "Süt izni verilmez",
            "Haftada 10 dakika"
          ],
          "answerIndex": 0,
          "explanation": "Günde 1,5 saat.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"Statutory severance pay protections and extensive maternity leaves safeguard employee welfare and family security.\"",
          "options": [
            "Doğum izni ücretsizdir.",
            "Kıdem tazminatı hakkı kaldırılmıştır.",
            "Çalışanların hiçbir izin hakkı yoktur.",
            "Yasal kıdem tazminatı güvenceleri ve kapsamlı doğum izinleri çalışan refahını ve aile güvenliğini korur."
          ],
          "answerIndex": 3,
          "explanation": "Accurate labor rights translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Türkiye'de çalışan hakları ve güvenceler"
  },
  "tr-u19-l4": {
    "id": "tr-u19-l4",
    "unit": "tr-u19",
    "level": "B1",
    "objective": "Türkiye'nin teknoloji unicornları (Turcorn): Getir (dünyada hızlı teslimat öncüsü), Peak Games, Dream Games, Trendyol ve Hepsiburada (Nasdaq).",
    "presentation": {
      "explanation": "Türkiye'nin Teknoloji Ekosistemi ve Turcorn (Unicorn) Başarıları:\n- \"Turcorn\" (Değeri 1 Milyar Doları aşan Türk teknoloji girişimleri):\n  - Peak Games ve Dream Games (İstanbul'dan çıkan mobil oyun devleri; Zynga tarafından 1.8 milyar dolara satın alınan Peak Games ve Royal Match ile dünyada 1 numara olan Dream Games)\n  - Getir (Nazım Salur tarafından kurulan, \"10 dakikada market teslimatı\" modelini icat edip Londra, Paris, Amsterdam ve New York'a ihraç eden küresel öncü)\n  - Trendyol (Türkiye'nin en büyük e-ticaret platformu ve ilk decacorn - 10 milyar dolar üzeri değerleme)\n  - Hepsiburada (ABD Nasdaq borsasında doğrudan halka arz edilen ilk Türk şirketi - NASDAQ: HEPS)\n  - Insider (Yapay zeka odaklı pazarlama platformu)",
      "examples": [
        {
          "target": "Dream Games ve Getir, Türkiye'den çıkarak milyarlarca dolarlık değerlemeyle dünya çapında başarı kazanan küresel teknoloji unicornlarıdır.",
          "reading": "Dream Games ve Ge-TEER, Toor-kee-ye-den chu-ka-RAK...",
          "translation": "Dream Games and Getir are global tech unicorns emerging from Turkey that achieved worldwide success with multibillion-dollar valuations."
        }
      ],
      "mnemonics": [
        "Peak Games & Dream Games (World #1 Mobile Gaming) + Getir (Pioneer of 10-min delivery) + Trendyol Decacorn = Turkish Turcorn power!"
      ],
      "culturalNotes": [
        "Istanbul has emerged as one of the world's top mobile gaming hubs, producing legendary game studios like Peak Games and Dream Games whose puzzle titles topped global charts."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Dünyada \"10 dakikada ultra hızlı market teslimatı\" modelini kurarak Londra ve New York'a ihraç eden Türk girişimi hangisidir?",
          "options": [
            "Walmart",
            "Getir",
            "Ebay",
            "Amazon"
          ],
          "answerIndex": 1,
          "explanation": "Getir."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "İstanbul merkezli hangi Türk mobil oyun şirketi \"Royal Match\" oyunu ile dünyada en çok gelir elde eden oyun stüdyolarından biri olmuştur?",
          "options": [
            "Sega",
            "Dream Games",
            "Capcom",
            "Atari"
          ],
          "answerIndex": 1,
          "explanation": "Dream Games."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "ABD Nasdaq borsasında doğrudan hisseleri işlem gören ilk Türk e-ticaret teknoloji şirketi hangisidir?",
          "options": [
            "PTT AVM",
            "Kapalıçarşı Online",
            "Sümerbank",
            "Hepsiburada"
          ],
          "answerIndex": 3,
          "explanation": "Hepsiburada.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"Vibrant gaming studios and rapid delivery tech innovators established Istanbul as a prominent global startup hub.\"",
          "options": [
            "Türkiye'de hiçbir teknoloji şirketi kurulmamıştır.",
            "Oyun geliştiriciliği Türkiye'de yasaktır.",
            "Canlı oyun stüdyoları ve hızlı teslimat teknolojisi öncüleri İstanbul'u önde gelen küresel bir girişimcilik merkezine dönüştürdü.",
            "Getir ve Peak Games başarısız olmuştur."
          ],
          "answerIndex": 2,
          "explanation": "Accurate startup ecosystem translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Türkiye'nin teknoloji unicornları (Turcorn)"
  },
  "tr-u19-l5": {
    "id": "tr-u19-l5",
    "unit": "tr-u19",
    "level": "B1",
    "objective": "Türkiye'nin küresel savunma sanayii ve havacılık devrimi: Baykar (Bayraktar TB2 / Kızılelma İHA/SİHA), TUSAŞ (KAAN 5. Nesil Savaş Uçağı), Aselsan ve THY.",
    "presentation": {
      "explanation": "Türk Havacılık, Savunma Sanayii ve Küresel Sanayi Gücü:\n- Baykar Teknoloji (Selçuk ve Haluk Bayraktar liderliğinde):\n  - Dünyanın en büyük silahlı insansız hava aracı (SİHA) ihracatçısı (Bayraktar TB2, Akıncı ve insansız savaş uçağı Bayraktar Kızılelma)\n  - 30'dan fazla ülkeye ihraç edilerek modern harp doktrinini kökten değiştiren teknoloji\n- TUSAŞ (Türk Havacılık ve Uzay Sanayii):\n  - KAAN (Türkiye'nin yerli 5. Nesil Hayalet Savaş Uçağı - Stealth Fighter), HÜRJET ve GÖKBEY helikopteri\n- Aselsan (Savunma elektroniği, radar, elektro-optik ve haberleşmede dünyanın en büyük ilk 50 savunma şirketinden biri)\n- Türk Hava Yolları (THY - Dünyada en fazla ülkeye ve uluslararası noktaya uçan 1 numaralı küresel havayolu)",
      "examples": [
        {
          "target": "Baykar'ın geliştirdiği Bayraktar insansız hava araçları ve TUSAŞ'ın beşinci nesil KAAN savaş uçağı Türk havacılık sanayiinin zirvesini temsil eder.",
          "reading": "Baykar-un ge-leesh-teer-dee-yee Bayraktar een-san-SUZ...",
          "translation": "Bayraktar unmanned aerial vehicles developed by Baykar and TAI's fifth-generation KAAN fighter jet represent the pinnacle of the Turkish aerospace industry."
        }
      ],
      "mnemonics": [
        "Baykar Bayraktar TB2 / Kızılelma + TUSAŞ KAAN 5. Nesil Uçak + THY (World's #1 airline by countries flown) = Turkish aerospace supremacy!"
      ],
      "culturalNotes": [
        "Turkish Airlines (THY) flies to more countries than any other airline in the world (over 120 nations and 340 destinations), serving as a massive global air bridge."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Dünyanın en çok ihraç edilen ve harp doktrinlerini değiştiren Bayraktar TB2 SİHA'larını geliştiren Türk teknoloji firması hangisidir?",
          "options": [
            "Baykar Teknoloji",
            "Ford Otosan",
            "Vestel",
            "Tofaş"
          ],
          "answerIndex": 0,
          "explanation": "Baykar Teknoloji."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Türkiye'nin TUSAŞ tarafından geliştirilen ve ilk uçuşunu başarıyla gerçekleştiren 5. Nesil Milli Muharip Uçağı hangisidir?",
          "options": [
            "Hürkuş",
            "Gökbey",
            "Anka",
            "KAAN"
          ],
          "answerIndex": 3,
          "explanation": "KAAN."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Dünyada en fazla ülkeye ve en çok uluslararası noktaya uçan dünya lideri Türk bayrak taşıyıcı havayolu şirketi hangisidir?",
          "options": [
            "Air France",
            "Lufthansa",
            "Türk Hava Yolları",
            "British Airways"
          ],
          "answerIndex": 2,
          "explanation": "Türk Hava Yolları (THY).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Türkçeye çevirin: \"Advanced unmanned aerospace engineering and global air connectivity underscore Turkey's high-tech industrial strength.\"",
          "options": [
            "Türkiye havacılık sektöründe faaliyet göstermez.",
            "Gelişmiş insansız havacılık mühendisliği ve küresel hava bağlantısı Türkiye'nin yüksek teknoloji sanayi gücünü vurgular.",
            "KAAN savaş uçağı uçamamıştır.",
            "Bayraktar İHA'ları ihraç edilmemektedir."
          ],
          "answerIndex": 1,
          "explanation": "Accurate aerospace industry translation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Türkiye'nin küresel savunma sanayii ve havacılık devrimi"
  },
  "tr-u20-l1": {
    "id": "tr-u20-l1",
    "unit": "tr-u20",
    "level": "C1",
    "objective": "Turkish natural geography, Cappadocia fairy chimneys, Pamukkale travertines, and Anatolian biodiversity (Kapadokya peri bacaları, Pamukkale travertenleri - UNESCO, Anadolu biyolojik çeşitliliği, Van kedisi, caretta carettalar).",
    "presentation": {
      "explanation": "Turkey's geological wonders, thermal landscapes, and Anatolian biodiversity bridge:\n- **Kapadokya (Cappadocia - UNESCO)**:\n  - Surreal volcanic tuff landscapes sculpted by wind and rain into **Peri Bacaları** (Fairy Chimneys), subterranean underground cities (Derinkuyu, Kaymaklı), and Göreme rock-hewn churches.\n- **Pamukkale (Hierapolis - UNESCO)**:\n  - \"Cotton Castle\": Cascading terraced pools formed of snow-white **traverten** (travertine carbonate mineral deposits) fed by mineral-rich 36°C thermal spring waters.\n- Anatolian Biodiversity Crossroads:\n  - Anatolia is the meeting point of three phytogeographical regions (Euro-Siberian, Mediterranean, Irano-Turanian), hosting over **11,000 plant species** (over 30% endemic, matching the total floral diversity of the entire European continent!).\n  - Marine conservation: **İztuzu Beach** (Dalyan) protection of nesting Loggerhead sea turtles (**Caretta caretta**).\n  - **Van Kedisi** (Van cat): Endemic feline breed famous for odd-colored eyes (heterochromia) and natural swimming abilities.",
      "examples": [
        {
          "target": "Kapadokya'nın volkanik peri bacaları ve Pamukkale'nin bembeyaz traverten terasları, Anadolu'nun eşsiz jeolojik mirasını ve bin yıllık doğa harikalarını temsil eder.",
          "reading": "Ka-pa-dok-ya-nın vol-ka-nik pe-ri ba-ja-la-rı...",
          "translation": "The volcanic fairy chimneys of Cappadocia and the snow-white travertine terraces of Pamukkale represent Anatolia's unique geological heritage and thousand-year natural wonders."
        }
      ],
      "mnemonics": [
        "Kapadokya (Volcanic Fairy Chimneys)! Pamukkale (Cotton Castle Travertines)! Caretta caretta (İztuzu nesting turtles)!"
      ],
      "culturalNotes": [
        "Anatolia is the ancestral genetic birthplace of many of humanity's most vital crops, including domesticated wheat, barley, chickpeas, and wild tulips."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What surreal geological rock formations sculpted from volcanic tuff are celebrated in Cappadocia, Turkey?",
          "options": [
            "Fiyortlar",
            "Buzullar",
            "Kanyon barajları",
            "Peri bacaları"
          ],
          "answerIndex": 3,
          "explanation": "Peri bacaları."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which snow-white mineral travertine terrace and thermal spring complex in Denizli is nicknamed \"Cotton Castle\"?",
          "options": [
            "Nemrut Dağı",
            "Efes",
            "Truva",
            "Pamukkale"
          ],
          "answerIndex": 3,
          "explanation": "Pamukkale."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Anatolia hosts over eleven thousand plant species with thirty percent endemism, serving as a vital bridge for Eurasian biodiversity.\"",
          "options": [
            "Türkiye'de hiç bitki türü bulunmaz.",
            "Anadolu, yüzde otuz endemizm oranıyla on bir binden fazla bitki türüne ev sahipliği yaparak Avrasya biyolojik çeşitliliği için hayati bir köprü görevi görür.",
            "Pamukkale suni betondan yapılmıştır.",
            "Kapadokya deniz seviyesinin altındadır."
          ],
          "answerIndex": 1,
          "explanation": "Accurate Anatolian geography translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which famous beach in Dalyan, Turkey is strictly protected as a vital nesting ground for endangered Caretta caretta sea turtles?",
          "options": [
            "İztuzu Plajı",
            "Konyaaltı Plajı",
            "Lara Plajı",
            "Bebek Sahili"
          ],
          "answerIndex": 0,
          "explanation": "İztuzu Plajı.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 20, Lesson 1: Foundational & Structural Mastery (Kapadokya'nın volkanik peri ba)"
  },
  "tr-u20-l2": {
    "id": "tr-u20-l2",
    "unit": "tr-u20",
    "level": "C1",
    "objective": "Turkey's renewable energy surge: Geothermal power in the Aegean, wind in Marmara, and solar in Central Anatolia (Kalyon Karapınar GES, jeotermal enerji, Ege ve Marmara rüzgâr santralleri, YEKA ihaleleri).",
    "presentation": {
      "explanation": "Renewable energy expansion and geothermal leadership in Turkey:\n- **Kalyon Karapınar Güneş Enerjisi Santrali (GES)** (Konya):\n  - The largest single-site solar power plant in Europe (1,350 MW capacity with 3.5 million solar panels built across 20 million square meters of former desertified land).\n- Geothermal Leadership in the Aegean (**Jeotermal Enerji - Denizli/Aydın**):\n  - Turkey is ranked **#4 in the world for geothermal electricity capacity** (over 1,600 MW), harnessing volcanic tectonic fractures in the Büyük Menderes and Gediz grabens.\n- **YEKA (Yenilenebilir Enerji Kaynak Alanları)**:\n  - Government clean energy tenders mandating domestic manufacturing of wind turbine towers, blades, and solar cells.",
      "examples": [
        {
          "target": "Kalyon Karapınar Güneş Enerjisi Santrali, Avrupa'nın en büyük tek saha fotovoltaik tesisi olarak Türkiye'nin temiz enerji dönüşümüne öncülük etmektedir.",
          "reading": "Kal-yon Ka-ra-pı-nar Gü-neş E-ner-ji-si...",
          "translation": "Kalyon Karapınar Solar Power Plant, as Europe's largest single-site photovoltaic facility, spearheads Turkey's clean energy transition."
        }
      ],
      "mnemonics": [
        "Kalyon Karapınar (1,350 MW Europe's largest solar park)! Jeotermal (#4 in world in Aegean)! YEKA clean tenders!"
      ],
      "culturalNotes": [
        "The Karapınar solar mega-park was constructed on an arid desertified basin in Konya that was unsuitable for agriculture, transforming dry wasteland into green electricity."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which massive solar power plant in Konya, Turkey is recognized as the largest single-site solar farm in Europe with a 1,350 MW capacity?",
          "options": [
            "Kalyon Karapınar GES",
            "Soma Santrali",
            "Atatürk Barajı",
            "Keban Santrali"
          ],
          "answerIndex": 0,
          "explanation": "Kalyon Karapınar GES."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In which global ranking does Turkey stand for geothermal electricity generation capacity, centered in the Aegean region?",
          "options": [
            "Dünya 4.sü",
            "Dünya 100.sü",
            "Sonuncu",
            "Dünya 50.si"
          ],
          "answerIndex": 0,
          "explanation": "Dünya 4.sü (4th in the world)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Harnessing geothermal energy in the Aegean basin provides clean baseload heating for cities and electricity for the national grid.\"",
          "options": [
            "Ege havzasındaki jeotermal enerjinin değerlendirilmesi, şehirler için temiz ısıtma ve ulusal şebeke için kesintisiz elektrik sağlar.",
            "Karapınar güneş santrali kapatılmıştır.",
            "Rüzgâr enerjisi elektrik üretmez.",
            "Türkiye'de jeotermal kaynak yoktur."
          ],
          "answerIndex": 0,
          "explanation": "Accurate clean energy translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the Turkish state auction mechanism for large-scale renewable energy resource areas called?",
          "options": [
            "TÜBİTAK",
            "SGK",
            "AFAD",
            "YEKA"
          ],
          "answerIndex": 3,
          "explanation": "YEKA.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Turkey's renewable energy surge"
  },
  "tr-u20-l3": {
    "id": "tr-u20-l3",
    "unit": "tr-u20",
    "level": "C1",
    "objective": "Endangered wildlife conservation: Anatolian leopard rediscovery, Lake Van pearl mullet, and flamingo breeding colonies (Anadolu leoparı, Tuz Gölü flamingoları, Van Gölü inci kefali, koruma alanları).",
    "presentation": {
      "explanation": "Wildlife biodiversity conservation and iconic species in Turkey:\n- **Anadolu Leoparı (Anatolian Leopard - *Panthera pardus tulliana*)**:\n  - Long thought to be extinct in Turkey, confirmed alive through wildlife camera traps in multiple mountainous regions, triggering nationwide habitat protection.\n- **Tuz Gölü (Lake Tuz - UNESCO Tentative)**:\n  - Hypersaline lake in Central Anatolia serving as the Mediterranean's **largest natural breeding colony for Greater Flamingos** (*Allı Turna / Phoenicopterus roseus*).\n- **İnci Kefali (Pearl Mullet - *Alburnus tarichi*)**:\n  - Endemic fish living in the soda-alkaline waters of Lake Van (*Van Gölü*); undertakes an annual upstream migration jumping over waterfalls to spawn in freshwater rivers.",
      "examples": [
        {
          "target": "Tuz Gölü'nün pembe sularında her yıl on binlerce flamingo yavrusu dünyaya gelirken, Anadolu leoparının fotokapanlarla yeniden görüntülenmesi doğa koruma tarihine geçmiştir.",
          "reading": "Tooz Gö-lü-nün pem-be soo-la-rın-da...",
          "translation": "While tens of thousands of flamingo chicks hatch every year in the pink waters of Lake Tuz, the rediscovery of the Anatolian leopard via camera traps has made conservation history."
        }
      ],
      "mnemonics": [
        "Anadolu leoparı (Mythic predator alive in Anatolia)! Tuz Gölü flamingoları (Largest Mediterranean flamingo nursery)! İnci kefali (Lake Van jumping fish)!"
      ],
      "culturalNotes": [
        "In Turkish folk music and poetry (türküler), flamingos are affectionately called \"Allı Turna\" (crimson crane), symbolizing messengers of longing and distant love."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which mythical apex predator of Turkey, thought extinct for decades, was recently rediscovered in mountain ranges by wildlife camera traps?",
          "options": [
            "Afrika aslanı",
            "Anadolu leoparı",
            "Kutup ayısı",
            "Bengal kaplanı"
          ],
          "answerIndex": 1,
          "explanation": "Anadolu leoparı."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which hypersaline lake in Central Anatolia serves as the largest breeding colony for Greater Flamingos (Allı Turna) in the Mediterranean?",
          "options": [
            "Tuz Gölü",
            "Çıldır Gölü",
            "Beyşehir Gölü",
            "Eğirdir Gölü"
          ],
          "answerIndex": 0,
          "explanation": "Tuz Gölü."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The pearl mullet of Lake Van migrates upstream against torrential river currents every spring to reproduce in freshwater.\"",
          "options": [
            "Anadolu leoparı bir masal yaratığıdır.",
            "Flamingolar Tuz Gölü'ne hiç uğramaz.",
            "Van Gölü'nde hiçbir balık yaşamaz.",
            "Van Gölü'nün inci kefali, her ilkbaharda tatlı sularda üremek için azgın akıntılara karşı nehir boyunca yukarı göç eder."
          ],
          "answerIndex": 3,
          "explanation": "Accurate wildlife biology translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What traditional poetic name is given to flamingos in Turkish folklore and folk songs (türküler)?",
          "options": [
            "Akbaba",
            "Karakarga",
            "Allı Turna",
            "Mavi Kuş"
          ],
          "answerIndex": 2,
          "explanation": "Allı Turna.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Endangered wildlife conservation"
  },
  "tr-u20-l4": {
    "id": "tr-u20-l4",
    "unit": "tr-u20",
    "level": "C2",
    "objective": "Zero Waste Movement (Sıfır Atık), marine litter cleanup in the Marmara Sea, and circular economy initiatives (Sıfır Atık Hareketi, Marmara Denizi müsilaj temizliği ve koruma eylem planı, depozito iade sistemi).",
    "presentation": {
      "explanation": "Turkey's Zero Waste Movement and marine environmental restoration:\n- **Sıfır Atık (Zero Waste Project)**:\n  - National campaign led under UN patronage; established **December 30 as International Zero Waste Day** by unanimous UN General Assembly resolution.\n  - Over 165,000 public institutions and commercial buildings equipped with multi-stream recycling, saving over 40 million trees.\n- Marmara Sea Marine Action Plan:\n  - Addressing marine mucilage (sea snot) through advanced tertiary wastewater treatment plants, nitrogen-phosphorus reduction, and designating the **Marmara Sea as an Environmental Protection Area**.\n- National Deposit Return System (**Depozito Bilgi Yönetim Sistemi - DBYS**).",
      "examples": [
        {
          "target": "Türkiye'nin öncülük ettiği Sıfır Atık Projesi, Birleşmiş Milletler Genel Kurulu tarafından küresel bir model olarak kabul edilmiş ve otuz Mart Uluslararası Sıfır Atık Günü ilan edilmiştir.",
          "reading": "Tür-ki-ye-nin ön-cü-lük et-ti-ği Sı-fır A-tık...",
          "translation": "The Zero Waste Project pioneered by Turkey was adopted as a global model by the UN General Assembly and March 30 was proclaimed International Zero Waste Day."
        }
      ],
      "mnemonics": [
        "Sıfır Atık (UN-recognized Zero Waste Movement)! 30 Mart (International Zero Waste Day)! Marmara Deniz Eylem Planı!"
      ],
      "culturalNotes": [
        "March 30 was officially designated by the United Nations General Assembly as \"International Day of Zero Waste\" following Turkey's global initiative."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which environmental campaign pioneered by Turkey was adopted by the UN General Assembly to declare March 30 as International Zero Waste Day?",
          "options": [
            "Çöp Yakma Projesi",
            "Sıfır Atık Projesi",
            "Maden Yasası",
            "Plastik Üretim Planı"
          ],
          "answerIndex": 1,
          "explanation": "Sıfır Atık Projesi."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which sea bordering Istanbul was designated a Special Environmental Protection Area to eliminate marine mucilage and restore water quality?",
          "options": [
            "Kızıldeniz",
            "Marmara Denizi",
            "Umman Denizi",
            "Hazar Denizi"
          ],
          "answerIndex": 1,
          "explanation": "Marmara Denizi."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Advanced tertiary wastewater treatment facilities and deposit return machines eliminate plastic pollution across coastal cities.\"",
          "options": [
            "Plastik şişeler geri dönüştürülemez.",
            "Marmara Denizi koruma altına alınmamıştır.",
            "İleri biyolojik atıksu arıtma tesisleri ve depozito iade makineleri kıyı şehirlerindeki plastik kirliliğini ortadan kaldırır.",
            "Sıfır Atık hareketi geri dönüşümü yasaklar."
          ],
          "answerIndex": 2,
          "explanation": "Accurate waste management translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What international day was declared by the UN General Assembly on March 30 following Turkey's resolution?",
          "options": [
            "Dünya Orman Günü",
            "Uluslararası Sıfır Atık Günü",
            "Dünya Su Günü",
            "Dünya Çevre Günü"
          ],
          "answerIndex": 1,
          "explanation": "Uluslararası Sıfır Atık Günü.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 20, Lesson 4: Foundational & Structural Mastery (Türkiye'nin öncülük ettiği Sıf)"
  },
  "tr-u20-l5": {
    "id": "tr-u20-l5",
    "unit": "tr-u20",
    "level": "C2",
    "objective": "C2 synthesis on Turkey's Net-Zero 2053 target, green steel, electric mobility (TOGG), and environmental diplomacy (2053 Net Sıfır Emisyon Hedefi, TOGG yerli elektrikli akıllı cihaz, Yeşil Kalkınma Devrimi).",
    "presentation": {
      "explanation": "Turkey's Green Development Revolution and Net-Zero 2053 roadmap:\n- **2053 Net Sıfır Emisyon Hedefi (Net-Zero 2053)**:\n  - Parliamentary ratification of the Paris Climate Agreement and declaration of the **Green Development Revolution (Yeşil Kalkınma Devrimi)**.\n- Electric Mobility Revolution:\n  - **TOGG (Türkiye'nin Otomobili Girişim Grubu)**: Native smart electric C-SUV and sedan platform manufactured at Gemlik Eco-Campus (Europe's cleanest automotive factory).\n  - Nationwide Trugo fast-charging network powered by 100% renewable certified electricity.\n- Decarbonizing heavy export industry (cement, textiles, automotive) to meet the European Union's Carbon Border Adjustment Mechanism (CBAM / SKDM).",
      "examples": [
        {
          "target": "Türkiye'nin iki bin elli üç net sıfır emisyon hedefi ve TOGG elektrikli araç ekosistemi, ülkenin yeşil sanayi dönüşümünü ve küresel rekabet gücünü temsil eder.",
          "reading": "Tür-ki-ye-nin i-ki bin el-li üç net sı-fır...",
          "translation": "Turkey's 2053 net-zero emission target and the TOGG electric vehicle ecosystem represent the country's green industrial transformation and global competitiveness."
        }
      ],
      "mnemonics": [
        "Net Sıfır 2053 (National climate target)! TOGG (Smart electric vehicle & Gemlik Eco-Campus)! Yeşil Kalkınma Devrimi!"
      ],
      "culturalNotes": [
        "The TOGG Gemlik manufacturing campus was designed with volatile organic compound (VOC) emissions under 5 g/m², making it the cleanest automotive plant in Europe."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What is Turkey's official statutory target year for achieving net-zero greenhouse gas emissions under the Green Development Revolution?",
          "options": [
            "2053",
            "2025",
            "2030",
            "2100"
          ],
          "answerIndex": 0,
          "explanation": "2053."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What is the native Turkish smart electric mobility brand manufactured at the Gemlik Eco-Campus?",
          "options": [
            "Anadol eski model",
            "Tofaş Şahin",
            "Devrim prototip",
            "TOGG"
          ],
          "answerIndex": 3,
          "explanation": "TOGG."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Deploying renewable-powered electric vehicle charging networks accelerates the decarbonization of national transport corridors.\"",
          "options": [
            "TOGG benzinli bir motora sahiptir.",
            "Yenilenebilir enerjiyle çalışan elektrikli araç şarj ağlarının yaygınlaştırılması, ulusal ulaşım koridorlarının karbonsuzlaştırılmasını hızlandırır.",
            "Türkiye'de elektrikli araç şarj istasyonu yoktur.",
            "2053 hedefi iptal edilmiştir."
          ],
          "answerIndex": 1,
          "explanation": "Accurate green mobility translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What European Union environmental trade mechanism is driving industrial decarbonization across Turkish exporters?",
          "options": [
            "Sınırda Karbon Düzenleme Mekanizması",
            "Gümrük Birliği sadece",
            "Erasmus",
            "Vize Serbestisi"
          ],
          "answerIndex": 0,
          "explanation": "SKDM / CBAM.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 20, Lesson 5: Foundational & Structural Mastery (Türkiye'nin iki bin elli üç ne)"
  },
  "tr-u21-l1": {
    "id": "tr-u21-l1",
    "unit": "tr-u21",
    "level": "C1",
    "objective": "Turkey's Universal Health Transformation: General Health Insurance (GSS), City Hospitals (Şehir Hastaneleri), and emergency response (Genel Sağlık Sigortası - GSS, Şehir Hastaneleri PPP modeli, 112 Acil Sağlık, aile hekimliği).",
    "presentation": {
      "explanation": "Universal health coverage and the modern City Hospital revolution in Turkey:\n- **Genel Sağlık Sigortası (GSS - General Health Insurance)**:\n  - Enacted under the Health Transformation Program (*Sağlıkta Dönüşüm Programı*), providing **universal health insurance coverage for over 99% of Turkish citizens**, eliminating out-of-pocket barriers for emergencies, surgeries, and cancer treatments.\n- **Şehir Hastaneleri (Integrated City Hospital Campuses)**:\n  - Massive public-private partnership (PPP) tertiary medical campuses across major metropolitan areas (Ankara Bilkent, Başakşehir Çam ve Sakura in Istanbul with over 2,600 beds).\n  - Equipped with advanced seismic base isolators (**deprem izolatörleri** allowing continuous surgical operations during major earthquakes), helipads, and oncology centers.\n- **112 Acil Sağlık & Aile Hekimliği (Family Medicine)**:\n  - National fleet of 4x4 snow ambulances, marine sea ambulances, and dedicated air ambulances (*ambulans uçak ve helikopterler*).",
      "examples": [
        {
          "target": "Türkiye'nin Genel Sağlık Sigortası ve sismik izolatörlü dev Şehir Hastaneleri, tüm vatandaşlara kesintisiz ve yüksek teknolojili sağlık hizmeti sunmaktadır.",
          "reading": "Tür-ki-ye-nin Ge-nel Sağ-lık Si-gor-ta-sı...",
          "translation": "Turkey's General Health Insurance and giant City Hospitals equipped with seismic base isolators provide uninterrupted, high-tech healthcare services to all citizens."
        }
      ],
      "mnemonics": [
        "GSS (%99+ Genel Sağlık Sigortası coverage)! Şehir Hastaneleri (Çam ve Sakura 2,600+ beds with seismic isolators)! 112 Acil Sağlık!"
      ],
      "culturalNotes": [
        "Başakşehir Çam ve Sakura City Hospital in Istanbul is built upon 2,068 seismic base isolators, making it the largest seismically isolated building in the world."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What public health insurance program in Turkey provides universal healthcare coverage for over 99% of citizens?",
          "options": [
            "Trafik Sigortası",
            "Kasko",
            "Konut Sigortası",
            "Genel Sağlık Sigortası"
          ],
          "answerIndex": 3,
          "explanation": "Genel Sağlık Sigortası (GSS)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What engineering feature installed under giant Turkish City Hospitals (like Başakşehir Çam ve Sakura) allows surgeries to continue safely during major earthquakes?",
          "options": [
            "Ahşap kolonlar",
            "Kum torbaları",
            "Sismik taban izolatörleri",
            "Tuğla duvarlar"
          ],
          "answerIndex": 2,
          "explanation": "Sismik taban izolatörleri."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Dedicated air ambulance jets and helicopters transport critical emergency patients from remote Anatolian villages directly to tertiary city hospitals.\"",
          "options": [
            "Özel ambulans uçak ve helikopterler, kritik durumdaki acil hastaları uzak Anadolu köylerinden doğrudan üçüncü basamak şehir hastanelerine nakleder.",
            "Türkiye'de ambulans hizmeti yoktur.",
            "Şehir Hastaneleri depremde hemen kapatılır.",
            "Genel Sağlık Sigortası kaldırılmıştır."
          ],
          "answerIndex": 0,
          "explanation": "Accurate healthcare emergency translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the largest seismically isolated medical hospital campus in Istanbul, inaugurated with over 2,600 hospital beds?",
          "options": [
            "Cerrahpaşa eski bina",
            "Haydarpaşa Numune",
            "Şişli Etfal eski bina",
            "Başakşehir Çam ve Sakura Şehir Hastanesi"
          ],
          "answerIndex": 3,
          "explanation": "Başakşehir Çam ve Sakura Şehir Hastanesi.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Turkey's Universal Health Transformation"
  },
  "tr-u21-l2": {
    "id": "tr-u21-l2",
    "unit": "tr-u21",
    "level": "C1",
    "objective": "World medical pioneers: Hulusi Behçet and Behçet's Disease, Gazi Yaşargil (Father of Modern Microneurosurgery) (Hulusi Behçet - Behçet Hastalığı, Gazi Yaşargil - Yüzyılın Beyin Cerrahı, mikrocerrahi, Leyla retraktörü).",
    "presentation": {
      "explanation": "Legendary Turkish pioneers of global neurosurgery and clinical dermatology:\n- **Prof. Dr. Gazi Yaşargil (1925–2024 - \"Man of the Century in Neurosurgery\")**:\n  - Named the **\"Neurosurgeon of the Century 1950–1999\"** by the Congress of Neurological Surgeons (CNS).\n  - The father of modern microneurosurgery; invented the operating microscope technique for intracranial aneurysms, developed the floating microscope, the **Yaşargil aneurysm clips**, and the **Leyla retractor**, turning inoperable deep brain tumors into curable conditions.\n- **Prof. Dr. Hulusi Behçet (1889–1948)**:\n  - Turkish dermatologist who first described and clinically defined **Behçet's Disease (Behçet Hastalığı / Morbus Behçet)** in 1937 (triple-symptom complex of recurrent aphthous ulcers, genital ulcers, and ocular uveitis), officially recognized in the global medical nomenclature.",
      "examples": [
        {
          "target": "Prof. Dr. Gazi Yaşargil'in mikronöroşirürjideki devrim niteliğindeki buluşları ve Hulusi Behçet'in tanımladığı Behçet Hastalığı dünya tıp tarihine altın harflerle kazınmıştır.",
          "reading": "Prof. Dr. Ga-zi Ya-şar-gil-in mik-ro-nö-ro-şi-rür-ji-de-ki...",
          "translation": "Prof. Dr. Gazi Yasargil's revolutionary inventions in microneurosurgery and the definition of Behcet's Disease by Hulusi Behcet are engraved in gold letters in world medical history."
        }
      ],
      "mnemonics": [
        "Gazi Yaşargil (Neurosurgeon of the Century & microneurosurgery pioneer)! Hulusi Behçet (Behçet's Disease 1937)! Yaşargil aneurysm clips!"
      ],
      "culturalNotes": [
        "Professor Gazi Yaşargil trained three generations of the world's leading neurosurgeons at the University of Zurich and the University of Arkansas."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Turkish neurosurgeon was officially named \"Neurosurgeon of the Century (1950–1999)\" for founding modern microneurosurgery?",
          "options": [
            "Prof. Dr. Gazi Yaşargil",
            "Prof. Dr. Aziz Sancar",
            "Prof. Dr. Hulusi Behçet",
            "Dr. Mehmet Öz"
          ],
          "answerIndex": 0,
          "explanation": "Prof. Dr. Gazi Yaşargil."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What multisystem inflammatory vasculitis disease was identified and described in 1937 by Turkish physician Dr. Hulusi Behçet?",
          "options": [
            "Behçet Hastalığı",
            "Alzheimer",
            "Parkinson",
            "Kuduz"
          ],
          "answerIndex": 0,
          "explanation": "Behçet Hastalığı."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Gazi Yaşargil's introduction of the operating microscope and micro-instruments enabled safe surgical access to deep intracranial vascular aneurysms.\"",
          "options": [
            "Gazi Yaşargil göz doktoruydu.",
            "Behçet Hastalığı tıp literatüründen çıkarılmıştır.",
            "Mikrocerrahi aletleri ameliyatlarda kullanılmaz.",
            "Gazi Yaşargil'in ameliyat mikroskobunu ve mikro-aletleri geliştirmesi, derin kafa içi damar anevrizmalarına güvenli cerrahi müdahaleyi mümkün kıldı."
          ],
          "answerIndex": 3,
          "explanation": "Accurate microneurosurgery translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What surgical retraction device and micro-vascular clip system invented by Gazi Yaşargil is used in neurosurgery operating rooms worldwide?",
          "options": [
            "Lazer tabancası",
            "Elektrikli testere",
            "Leyla retraktörü ve Yaşargil anevrizma klipleri",
            "Robotik dikiş makinesi"
          ],
          "answerIndex": 2,
          "explanation": "Leyla retraktörü ve Yaşargil anevrizma klipleri.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "World medical pioneers"
  },
  "tr-u21-l3": {
    "id": "tr-u21-l3",
    "unit": "tr-u21",
    "level": "C1",
    "objective": "Nobel Laureate Aziz Sancar and DNA repair mechanisms (Prof. Dr. Aziz Sancar, 2015 Nobel Kimya Ödülü, nükleotid eksizyon onarımı, fotoliyaz enzimi, sirkadiyen saat ve kanser kronoterapisi).",
    "presentation": {
      "explanation": "DNA repair mechanisms, Nobel Prize in Chemistry, and chronotherapy:\n- **Prof. Dr. Aziz Sancar (2015 Nobel Prize in Chemistry)**:\n  - Born in Savur (Mardin, Turkey), graduated from Istanbul University Faculty of Medicine.\n  - Unraveled the fundamental molecular mechanism of **Nucleotide Excision Repair (Nükleotid Eksizyon Onarımı)**: The cellular process by which cells map and excise DNA damage caused by ultraviolet (UV) radiation and environmental mutagens.\n  - Discovered the **photolyase enzyme (fotoliyaz)** and mapped the connection between the human **Circadian Clock (sirkadiyen saat / biyolojik saat)** and DNA repair rates, pioneering **Cancer Chronotherapy** (administering chemotherapy drugs at the exact time of day when healthy cell DNA repair is highest and tumor repair is lowest to minimize toxicity).",
      "examples": [
        {
          "target": "Prof. Dr. Aziz Sancar'ın nükleotid eksizyon onarımı alanındaki Nobel ödüllü keşifleri, DNA hasarının hücresel düzeyde nasıl tamir edildiğini ve sirkadiyen kanser tedavisini aydınlatmıştır.",
          "reading": "Prof. Dr. A-ziz San-car-ın nük-le-o-tid...",
          "translation": "Prof. Dr. Aziz Sancar's Nobel-winning discoveries in nucleotide excision repair illuminated how DNA damage is repaired at the cellular level and paved the way for circadian cancer therapies."
        }
      ],
      "mnemonics": [
        "Aziz Sancar (2015 Nobel Prize in Chemistry)! Nükleotid eksizyon onarımı (DNA UV damage repair)! Sirkadiyen saat ve kanser kronoterapisi!"
      ],
      "culturalNotes": [
        "Prof. Aziz Sancar donated his Nobel Prize medal to the Anıtkabir Museum in Ankara as a tribute to the secular educational opportunities of the Republic of Turkey."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Turkish scientist was awarded the 2015 Nobel Prize in Chemistry for mapping nucleotide excision DNA repair mechanisms at the molecular level?",
          "options": [
            "Prof. Dr. Aziz Sancar",
            "Prof. Dr. Gazi Yaşargil",
            "Cahit Arf",
            "Oktay Sinanoğlu"
          ],
          "answerIndex": 0,
          "explanation": "Prof. Dr. Aziz Sancar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What clinical cancer treatment method optimizes drug delivery based on the human circadian biological clock according to Sancar's research?",
          "options": [
            "Kanser Kronoterapisi",
            "Açlık tedavisi",
            "Rastgele dozaj",
            "Aralıksız kemoterapi"
          ],
          "answerIndex": 0,
          "explanation": "Kanser Kronoterapisi."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Nucleotide excision repair continuously fixes DNA damage caused by solar ultraviolet radiation and carcinogenic smoking chemicals.\"",
          "options": [
            "Sirkadiyen saat ile DNA onarımı arasında hiçbir bağ yoktur.",
            "DNA hasarı hücreler tarafından onarılamaz.",
            "Nükleotid eksizyon onarımı, güneşin ultraviyole radyasyonu ve sigaradaki kanserojen kimyasalların neden olduğu DNA hasarlarını sürekli olarak onarır.",
            "Aziz Sancar edebiyat ödülü almıştır."
          ],
          "answerIndex": 2,
          "explanation": "Accurate molecular genetics translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "To which historic museum in Ankara did Prof. Aziz Sancar donate his original Nobel Prize gold medal and certificate in 2016?",
          "options": [
            "Dolmabahçe Sarayı",
            "Anıtkabir Müzesi",
            "Ayasofya",
            "Topkapı Sarayı"
          ],
          "answerIndex": 1,
          "explanation": "Anıtkabir Müzesi.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 21, Lesson 3: Foundational & Structural Mastery (Prof. Dr. Aziz Sancar'ın nükle)"
  },
  "tr-u21-l4": {
    "id": "tr-u21-l4",
    "unit": "tr-u21",
    "level": "C2",
    "objective": "Organ transplantation excellence and world-first composite tissue transplants (Akdeniz Üniversitesi, Prof. Dr. Ömer Özkan, Türkiye'de ilk yüz nakli, ilk çift kol ve bacak nakilleri, canlı donörden karaciğer nakli).",
    "presentation": {
      "explanation": "World-leading organ transplantation and pioneering vascularized composite allotransplantation in Turkey:\n- World Leader in Living Donor Transplants:\n  - Turkey is ranked **#1 in Europe and #2 in the world for living donor liver and kidney transplant volume** (İnönü University Liver Transplant Institute in Malatya under Prof. Sezai Yılmaz performing over 250 liver transplants annually).\n- Breakthrough Composite Tissue Transplants:\n  - **Akdeniz University** in Antalya (led by **Prof. Dr. Ömer Özkan**):\n  - Performed **Turkey's first full-face transplant (Uğur Acar in 2012)**, world-first successful double-arm and leg transplants, and world-first uterine (uterus) transplant from a deceased donor resulting in a successful healthy live birth in 2020.",
      "examples": [
        {
          "target": "Akdeniz Üniversitesi'nde gerçekleştirilen Türkiye'nin ilk tam yüz nakli ve İnönü Üniversitesi Karaciğer Nakli Enstitüsü, Türk cerrahisini küresel organ nakli liderliğine taşımıştır.",
          "reading": "Ak-de-niz Ü-ni-ver-si-te-si-nde ger-çek-leş-ti-ri-len...",
          "translation": "Turkey's first full-face transplant performed at Akdeniz University and the Inonu University Liver Transplant Institute have elevated Turkish surgery to global organ transplantation leadership."
        }
      ],
      "mnemonics": [
        "Ömer Özkan (First full-face transplant at Akdeniz University)! Malatya Karaciğer Nakli Enstitüsü (World living donor liver hub)! Kadavradan rahim nakli!"
      ],
      "culturalNotes": [
        "The Inonu University Liver Transplant Institute in Malatya is the largest specialized liver transplantation hospital complex in Europe and Asia."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Turkish university surgical team in Antalya, led by Prof. Ömer Özkan, performed Turkey's first successful full-face transplant in 2012?",
          "options": [
            "ODTÜ",
            "Akdeniz Üniversitesi",
            "İTÜ",
            "Boğaziçi Üniversitesi"
          ],
          "answerIndex": 1,
          "explanation": "Akdeniz Üniversitesi."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which city in eastern Turkey hosts Europe's largest specialized Liver Transplant Institute performing hundreds of living-donor transplants annually?",
          "options": [
            "Edirne",
            "Malatya",
            "Muğla",
            "Rize"
          ],
          "answerIndex": 1,
          "explanation": "Malatya (İnönü Üniversitesi)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Vascularized composite tissue allotransplantation reconnects microscopic blood vessels, nerves, and muscles to restore facial expression and sensation.\"",
          "options": [
            "Yüz nakli sadece estetik bir makyajdır.",
            "Damarlı kompozit doku nakli, mikroskobik kan damarlarını, sinirleri ve kasları yeniden bağlayarak yüz ifadesini ve his duyusunu geri kazandırır.",
            "Canlıdan karaciğer nakli tıbben imkansızdır.",
            "Türkiye'de organ nakli ameliyatları yapılamaz."
          ],
          "answerIndex": 1,
          "explanation": "Accurate transplant surgery translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In which organ transplantation category is Turkey recognized as ranked #1 in Europe and #2 globally for surgical volume?",
          "options": [
            "Canlı donörden karaciğer ve böbrek nakli",
            "Kemik iliği ihracatı",
            "Diş dolgusu",
            "Yapay kalp üretimi sadece"
          ],
          "answerIndex": 0,
          "explanation": "Canlı donörden karaciğer ve böbrek nakli.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 21, Lesson 4: Foundational & Structural Mastery (Akdeniz Üniversitesi'nde gerçe)"
  },
  "tr-u21-l5": {
    "id": "tr-u21-l5",
    "unit": "tr-u21",
    "level": "C2",
    "objective": "C2 synthesis on Health Tourism, Digital e-Nabız system, and domestic pharmaceutical biotechnology (Sağlık turizmi, e-Nabız kişisel sağlık kaydı, TÜSEB aşı ve biyoteknoloji enstitüsü, TURKOVAC).",
    "presentation": {
      "explanation": "Global health tourism, personal digital health records, and vaccine sovereignty in Turkey:\n- Global Health Tourism Powerhouse (**Uluslararası Sağlık Turizmi**):\n  - Turkey welcomes over **1.5 million international health tourists annually** for cardiovascular surgery, oncology, robotic joint replacement, hair restoration, and dental aesthetics across JCI-accredited hospitals (USHAŞ - International Health Services Inc.).\n- **e-Nabız Personal Health Record System**:\n  - Award-winning national digital health platform serving over 40 million users, integrating all medical records, laboratory tests, radiological MRI/CT scans, and prescriptions via citizen identity.\n- Pharmaceutical Sovereignty & **TÜSEB**:\n  - Health Institutes of Turkey (TÜSEB) developed domestic inactivated COVID-19 vaccine (**TURKOVAC**) and funds national CAR-T cell cancer immunotherapy trials.",
      "examples": [
        {
          "target": "Kırk milyonu aşkın kullanıcısıyla e-Nabız dijital sağlık ekosistemi ve yılda bir buçuk milyon yabancı hastayı ağırlayan sağlık turizmi sektörü, Türkiye'yi küresel bir tıp merkezine dönüştürmüştür.",
          "reading": "Kırk mil-yo-nu aş-kın kul-la-nı-cı-sıy-la...",
          "translation": "With over forty million users, the e-Nabiz digital health ecosystem and a health tourism sector hosting 1.5 million foreign patients annually have transformed Turkey into a global medical hub."
        }
      ],
      "mnemonics": [
        "e-Nabız (40M+ user personal health cloud)! Sağlık Turizmi (1.5M+ international patients)! TÜSEB & TURKOVAC! USHAŞ!"
      ],
      "culturalNotes": [
        "The e-Nabız system won the United Nations World Summit Award (WSA) for Government & Citizen Engagement as the world's best digital health platform."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What UN award-winning digital health platform allows over 40 million Turkish citizens to access all their medical records, prescriptions, and radiology scans online?",
          "options": [
            "e-Nabız",
            "e-Devlet sadece vergi",
            "Instagram",
            "MHRS sadece randevu"
          ],
          "answerIndex": 0,
          "explanation": "e-Nabız."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What state agency coordinates international health tourism accreditation and promotion for Turkish hospitals globally?",
          "options": [
            "TCDD",
            "Karayolları",
            "MTA",
            "USHAŞ"
          ],
          "answerIndex": 3,
          "explanation": "USHAŞ."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Seamless cloud integration of digital medical imaging on e-Nabiz enables instant second opinions between university professors across the country.\"",
          "options": [
            "e-Nabız üzerindeki dijital tıbbi görüntülerin kusursuz bulut entegrasyonu, ülke genelindeki üniversite profesörleri arasında anında ikinci uzman görüşü almayı sağlar.",
            "e-Nabız sistemi yabancı hastalara kapalıdır.",
            "TURKOVAC aşısı üretilmemiştir.",
            "Türkiye'de sağlık turizmi yasaklanmıştır."
          ],
          "answerIndex": 0,
          "explanation": "Accurate digital health translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What domestic inactivated vaccine was developed during the pandemic under the auspices of TÜSEB and Erciyes University in Turkey?",
          "options": [
            "Sinovac",
            "Sputnik",
            "AstraZeneca",
            "TURKOVAC"
          ],
          "answerIndex": 3,
          "explanation": "TURKOVAC.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 21, Lesson 5: Foundational & Structural Mastery (Kırk milyonu aşkın kullanıcısı)"
  },
  "tr-u22-l1": {
    "id": "tr-u22-l1",
    "unit": "tr-u22",
    "level": "C1",
    "objective": "Universal Humanism & Divine Love: Mevlana Celaleddin Rumi and Yunus Emre (Mevlânâ Celâleddîn-i Rûmî - Mesnevî, Şeb-i Arûs, «Gel, ne olursan ol yine gel», Yunus Emre - Risâletü'n-Nushiyye, «Sevelim, sevilelim; dünya kimseye kalmaz»).",
    "presentation": {
      "explanation": "Universal Sufi humanism and ecstatic philosophical poetry in Anatolia:\n- **Mevlana Celaleddin Rumi (1207–1273 - Konya)**:\n  - The supreme mystic poet of divine love and spiritual transformation; author of the 6-volume **«Mesnevî» (Masnavi)**, revered as the Persian Quran of the heart.\n  - Universal Humanist Invitation: **«Gel, gel, ne olursan ol yine gel / İster kâfir, ister mecusi, ister puta tapan ol yine gel / Bizim dergâhımız ümitsizlik dergâhı değildir / Yüz kere tövbeni bozmuş olsan da yine gel»** (Come, come, whoever you are, come! Even if you are an unbeliever, a fire-worshipper, or an idolater, come! Our threshold is not one of despair; even if you have broken your vows a hundred times, come!).\n  - **Şeb-i Arûs (The Nuptial Night)**: Rumi regarded death not as loss, but as the ecstatic wedding union of the lover's soul with the Divine Beloved.\n- **Yunus Emre (1238–1328)**:\n  - The pioneer of pure Turkish vernacular mystical poetry; author of *Risâletü'n-Nushiyye*:\n  - **«Sevelim sevilelim, dünya kimseye kalmaz»** (Let us love and be loved, for the world remains to no one) and *«Yaratılanı severiz, Yaratandan ötürü»* (We love the created, because of the Creator).",
      "examples": [
        {
          "target": "Mevlânâ'nın «Gel, ne olursan ol yine gel» çağrısı ve Yunus Emre'nin «Sevelim sevilelim» felsefesi, Anadolu hümanizminin evrensel vicdanını oluşturur.",
          "reading": "Mev-la-na-nın Gel, ne o-lur-san ol...",
          "translation": "Mevlana Rumi's call \"Come, whoever you are, come\" and Yunus Emre's philosophy of \"Let us love and be loved\" form the universal conscience of Anatolian humanism."
        }
      ],
      "mnemonics": [
        "Mevlana Rumi (Mesnevî & Şeb-i Arûs in Konya)! «Gel, ne olursan ol yine gel»! Yunus Emre (Sevelim sevilelim, dünya kimseye kalmaz)!"
      ],
      "culturalNotes": [
        "Every year on December 17, the anniversary of Rumi's death (Şeb-i Arûs), tens of thousands gather in Konya for the Whirling Dervish Sema ceremony."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which 13th-century Sufi master in Konya composed the monumental 6-volume spiritual masterpiece «Mesnevî»?",
          "options": [
            "Hacı Bektaş-ı Veli",
            "Ahi Evran",
            "Fuzûlî",
            "Mevlânâ Celâleddîn-i Rûmî"
          ],
          "answerIndex": 3,
          "explanation": "Mevlânâ Celâleddîn-i Rûmî."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What famous verse by folk mystic poet Yunus Emre expresses universal love and the transience of human life?",
          "options": [
            "«Bize her yer cennet»",
            "«Yurtta barış, dünyada barış»",
            "«Sevelim sevilelim, dünya kimseye kalmaz»",
            "«Hayatta en hakiki mürşit ilimdir»"
          ],
          "answerIndex": 2,
          "explanation": "«Sevelim sevilelim, dünya kimseye kalmaz»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Rumi's mystical poetry transcends religious dogmatism to celebrate unconditional compassion and the spiritual reunion of the human soul with the Divine.\"",
          "options": [
            "Yunus Emre yabancı dilde yazmıştır.",
            "Mevlânâ sadece savaş destanları yazmıştır.",
            "Mesnevî bir tıp kitabıdır.",
            "Mevlânâ'nın tasavvufi şiiri, dini dogmatizmi aşarak koşulsuz şefkati ve insan ruhunun İlahi olanla manevi vuslatını yüceltir."
          ],
          "answerIndex": 3,
          "explanation": "Accurate Sufi humanism translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What ecstatic term did Mevlana Rumi use to describe his physical death as a joyous wedding reunion with the Divine?",
          "options": [
            "Matem",
            "Kıyamet",
            "Şeb-i Arûs",
            "Hicret"
          ],
          "answerIndex": 2,
          "explanation": "Şeb-i Arûs.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Universal Humanism & Divine Love"
  },
  "tr-u22-l2": {
    "id": "tr-u22-l2",
    "unit": "tr-u22",
    "level": "C1",
    "objective": "Anatolian Social Ethics: Hacı Bektaş-ı Veli and the Ahi Order (Hacı Bektaş-ı Veli - Makâlât, «Eline, beline, diline sahip ol», Ahilik teşkilatı ve Ahi Evran, kadınlar birliği - Bâcıyân-ı Rûm).",
    "presentation": {
      "explanation": "Anatolian civic ethics, social solidarity, and Bektashi philosophy:\n- **Hacı Bektaş-ı Veli (1209–1271 - Nevşehir)**:\n  - The patron saint of the Janissaries and architect of Anatolian syncretic humanism; authored the **«Makâlât» (Four Gateways and Forty Stations - Dört Kapı Kırk Makam)**.\n  - Supreme Moral Code: **«Eline, beline, diline sahip ol»** (Be master of your hand [do not steal/harm], your loins [preserve chastity/loyalty], and your tongue [do not lie/slander]).\n  - Gender Equality Axiom: *«Erkek dişi sorulmaz muhabbetin dilinde / Hakk'ın yarattığı her şey yerli yerinde»* (In the language of divine love, male and female are not questioned; everything created by Truth is in its rightful place).\n- **The Ahi Guild Order (Ahilik Teşkilatı - Ahi Evran)**:\n  - 13th-century guild federation combining professional craft apprenticeship with strict moral honesty, fair price controls, consumer protection, mutual welfare funds, and the world's first female guild movement: **Bâcıyân-ı Rûm** (The Amazon/Sisters Guild founded by Fatma Bacı).",
      "examples": [
        {
          "target": "Hacı Bektaş-ı Veli'nin «Eline, beline, diline sahip ol» ilkesi ve Ahilik teşkilatının esnaf ahlakı, Anadolu toplumunun dürüstlük ve dayanışma omurgasını kurmuştur.",
          "reading": "Ha-cı Bek-taş-ı Ve-li-nin E-li-ne, be-li-ne...",
          "translation": "Haci Bektash Veli's principle of \"Be master of your hand, loins, and tongue\" and the Ahi guild ethics built the backbone of honesty and solidarity in Anatolian society."
        }
      ],
      "mnemonics": [
        "Hacı Bektaş-ı Veli (Makâlât & Dört Kapı Kırk Makam)! «Eline, beline, diline sahip ol»! Ahilik (Ahi Evran craft ethics)! Bâcıyân-ı Rûm (World's first female guild)!"
      ],
      "culturalNotes": [
        "UNESCO celebrated 2021 as the International Year of Haci Bektash Veli, Yunus Emre, and Ahi Evran to honor their timeless contributions to global peace and social tolerance."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What foundational ethical triad was taught by Hacı Bektaş-ı Veli to preserve personal integrity and community harmony?",
          "options": [
            "«Eline, beline, diline sahip ol»",
            "«Her şeyi unut»",
            "«Gözünü, kulağını, burnunu kapa»",
            "«Paranı, mülkünü, gücünü çoğalt»"
          ],
          "answerIndex": 0,
          "explanation": "«Eline, beline, diline sahip ol»."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What 13th-century Anatolian craft trade organization founded by Ahi Evran integrated commercial craftsmanship with strict ethical consumer protection?",
          "options": [
            "Ahilik Teşkilatı",
            "Lonca sadece İtalya'da",
            "Hanza Birliği",
            "Doğu Hindistan Şirketi"
          ],
          "answerIndex": 0,
          "explanation": "Ahilik Teşkilatı."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The Ahi ethical economic system prohibited price gouging and shoddy manufacturing, requiring craftsmen to produce flawless goods for the community.\"",
          "options": [
            "Hacı Bektaş-ı Veli ahlak kurallarını reddetmiştir.",
            "Bâcıyân-ı Rûm askeri bir deniz filosuydu.",
            "Ahilik iktisadi ahlak sistemi, fahiş fiyatı ve kalitesiz üretimi yasaklayarak esnafın toplum yararına kusursuz mal üretmesini zorunlu kılmıştır.",
            "Makâlât bir astronomi haritasıdır."
          ],
          "answerIndex": 2,
          "explanation": "Accurate socio-philosophical translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What historic Anatolian organization founded by Fatma Bacı is celebrated as one of the world's first organized women's artisan guilds?",
          "options": [
            "Süfrajetler",
            "Bâcıyân-ı Rûm",
            "Hilal-i Ahmer",
            "Kızılhaç"
          ],
          "answerIndex": 1,
          "explanation": "Bâcıyân-ı Rûm.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Anatolian Social Ethics"
  },
  "tr-u22-l3": {
    "id": "tr-u22-l3",
    "unit": "tr-u22",
    "level": "C1",
    "objective": "The Melancholy of Istanbul & East-West Soul: Ahmet Hamdi Tanpınar and The Time Regulation Institute (Ahmet Hamdi Tanpınar - Saatleri Ayarlama Enstitüsü, Huzur, Doğu-Batı sentezi, zaman felsefesi, «Ne içindeyim zamanın / Ne de büsbütün dışında»).",
    "presentation": {
      "explanation": "Ahmet Hamdi Tanpinar (1901–1962) and the modern Turkish metaphysical dilemma:\n- **Ahmet Hamdi Tanpınar**:\n  - The master novelist, essayist, and philosopher of Turkish modernity and time.\n- Masterworks:\n  - **«Saatleri Ayarlama Enstitüsü» (The Time Regulation Institute - 1961)**:\n    - Brilliant, ironic bureaucratic satire portraying Hayri İrdal and Halit Ayarcı as they create a state institute to synchronize all public clocks, exposing the comedic tensions of hasty Western modernization and absurd institutional bureaucracy.\n  - **«Huzur» (A Mind at Peace - 1949)**: Masterpiece exploring Mümtaz and Nuran's love against the backdrop of Istanbul, classical Turkish music (*Itri*), Ottoman architectural heritage, and impending World War II anxiety.\n  - The Iconic Temporal Poem: **«Ne içindeyim zamanın, / Ne de büsbütün dışında; / Yekpâre, geniş bir ânın / Parçalanmaz akışında»** (Neither am I inside of time / Nor entirely outside of it / In the indivisible flow / Of a single, vast moment).",
      "examples": [
        {
          "target": "Tanpınar, «Saatleri Ayarlama Enstitüsü» ve «Huzur» romanlarında Doğu ile Batı arasındaki kimlik yarılmasını ve zamanın metafizik akışını eşsiz bir derinlikle işlemiştir.",
          "reading": "Tan-pı-nar, Sa-at-le-ri A-yar-la-ma En-sti-tü-sü...",
          "translation": "In \"The Time Regulation Institute\" and \"A Mind at Peace,\" Tanpinar explored the identity rupture between East and West and the metaphysical flow of time with peerless depth."
        }
      ],
      "mnemonics": [
        "Ahmet Hamdi Tanpınar (Saatleri Ayarlama Enstitüsü & Huzur)! Hayri İrdal & Halit Ayarcı! «Ne içindeyim zamanın»! Doğu-Batı kimlik sentezi!"
      ],
      "culturalNotes": [
        "Orhan Pamuk acknowledged Ahmet Hamdi Tanpinar as his greatest literary master and the spiritual architect of the \"Hüzün\" (melancholy) of Istanbul."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Turkish author wrote the satirical modern classic «Saatleri Ayarlama Enstitüsü» (The Time Regulation Institute)?",
          "options": [
            "Ahmet Hamdi Tanpınar",
            "Orhan Pamuk",
            "Yaşar Kemal",
            "Oğuz Atay"
          ],
          "answerIndex": 0,
          "explanation": "Ahmet Hamdi Tanpınar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What opening lines from Tanpınar's famous poem encapsulate his Bergsonian philosophy of indivisible unified time?",
          "options": [
            "«Ne içindeyim zamanın / Ne de büsbütün dışında»",
            "«Ben sana mecburum»",
            "«Akın var güneşe akın»",
            "«Memleket isterim»"
          ],
          "answerIndex": 0,
          "explanation": "«Ne içindeyim zamanın / Ne de büsbütün dışında»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Tanpınar's novels examine how rapid modernization fractured cultural memory, leaving individuals suspended between Ottoman heritage and European rationality.\"",
          "options": [
            "Saatleri Ayarlama Enstitüsü bir saat tamir kılavuzudur.",
            "Tanpınar'ın romanları, hızlı modernleşmenin kültürel hafızayı nasıl parçaladığını ve bireyi Osmanlı mirası ile Avrupa rasyonalizmi arasında nasıl askıda bıraktığını inceler.",
            "Tanpınar şiir yazmayı reddetmiştir.",
            "Huzur romanı Amerika'da geçmektedir."
          ],
          "answerIndex": 1,
          "explanation": "Accurate literary analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What protagonist in *The Time Regulation Institute* narrates the absurd founding of the institute under the influence of Halit Ayarcı?",
          "options": [
            "Hayri İrdal",
            "İhsan",
            "Suat",
            "Mümtaz"
          ],
          "answerIndex": 0,
          "explanation": "Hayri İrdal.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Melancholy of Istanbul & East-West Soul"
  },
  "tr-u22-l4": {
    "id": "tr-u22-l4",
    "unit": "tr-u22",
    "level": "C2",
    "objective": "Postmodern Irony & The Disconnected Mind: Oğuz Atay and Tutunamayanlar (Oğuz Atay - Tutunamayanlar, Tehlikeli Oyunlar, Turgut Özben ve Selim Işık, Olric, Türk edebiyatında postmodernist devrim, tutunamayanların manifestosu).",
    "presentation": {
      "explanation": "Oguz Atay (1934–1977) and the revolution of postmodern fiction in Turkey:\n- **Oğuz Atay**:\n  - Civil engineer and professor who revolutionized Turkish literature with the landmark novel **«Tutunamayanlar» (The Disconnected - 1971–1972)**, awarded the TRT Novel Prize.\n- Masterpiece Breakthrough:\n  - Chronicles **Turgut Özben** investigating the suicide of his brilliant intellectual friend **Selim Işık**.\n  - Invented the sociophilosophical concept of the **«Tutunamayan» (The Disconnected / The One Who Cannot Hold On)**: The sensitive, self-critical intellectual who refuses to conform to shallow bourgeois opportunism, bureaucratic banality, and hypocritical societal careerism.\n  - Literary Innovation: Stream of consciousness, fictional encyclopedic entries, interior monologues with the imaginary alter-ego **Olric** (*\"Bize ne oldu Olric? - Tutunamadık efendimiz\"*), parodying Western and Turkish literary canons.\n- Followed by **«Tehlikeli Oyunlar» (Dangerous Games - 1973)** with Hikmet Benol.",
      "examples": [
        {
          "target": "«Tutunamayanlar» romanında Oğuz Atay, Selim Işık ve Turgut Özben aracılığıyla modern Türk aydınının kimlik bunalımını ve toplumsal riyakârlığa başkaldırısını dâhiyane bir ironiyle resmetti.",
          "reading": "Tu-tu-na-ma-yan-lar ro-ma-nın-da O-ğuz A-tay...",
          "translation": "In \"The Disconnected,\" Oguz Atay depicted the identity crisis of the modern Turkish intellectual and the revolt against societal hypocrisy through Selim Isik and Turgut Ozben with genius irony."
        }
      ],
      "mnemonics": [
        "Oğuz Atay (Tutunamayanlar & Tehlikeli Oyunlar)! Selim Işık & Turgut Özben! «Tutunamadık efendimiz» (Olric dialogue)! Postmodern devrim!"
      ],
      "culturalNotes": [
        "UNESCO described *Tutunamayanlar* as \"the most significant novel of 20th-century Turkish literature\" for its stylistic complexity and existential daring."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Turkish author wrote the seminal postmodern masterpiece «Tutunamayanlar» (The Disconnected - 1971)?",
          "options": [
            "Bilge Karasu",
            "Oğuz Atay",
            "Peyami Safa",
            "Yusuf Atılgan"
          ],
          "answerIndex": 1,
          "explanation": "Oğuz Atay."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What is the name of Turgut Özben's fictional, deferential alter-ego dialogue partner in *Tutunamayanlar* and *Tehlikeli Oyunlar*?",
          "options": [
            "Hikmet",
            "Olric",
            "Nizamettin",
            "Selim"
          ],
          "answerIndex": 1,
          "explanation": "Olric."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The Disconnected embodies the tragic revolt of the sensitive intellectual who refuses to sacrifice authenticity for societal prestige.\"",
          "options": [
            "«Tutunamayan», toplumsal prestij uğruna sahiciliğini feda etmeyi reddeden duyarlı aydının trajik başkaldırısını simgeler.",
            "Tutunamayanlar bir çocuk masalıdır.",
            "Selim Işık bir siyasi parti lideridir.",
            "Oğuz Atay bir sinema yönetmeniydi."
          ],
          "answerIndex": 0,
          "explanation": "Accurate postmodern analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What tragic event triggers Turgut Özben's existential detective quest into the forgotten writings of his friend in *Tutunamayanlar*?",
          "options": [
            "Bir banka soygunu",
            "Yurt dışına kaçış",
            "Savaş ilanı",
            "Selim Işık'ın intiharı"
          ],
          "answerIndex": 3,
          "explanation": "Selim Işık'ın intiharı.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Postmodern Irony & The Disconnected Mind"
  },
  "tr-u22-l5": {
    "id": "tr-u22-l5",
    "unit": "tr-u22",
    "level": "C2",
    "objective": "C2 synthesis on Nobel Literature & Visual Memory: Orhan Pamuk and The Museum of Innocence (Orhan Pamuk - 2006 Nobel Edebiyat Ödülü, Masumiyet Müzesi, Kara Kitap, Benim Adım Kırmızı, Hüzün kavramı, Çukurcuma müzesi).",
    "presentation": {
      "explanation": "Orhan Pamuk (1952–present) and the architecture of memory in world literature:\n- **Orhan Pamuk (2006 Nobel Prize in Literature)**:\n  - The first Turkish citizen to be awarded the Nobel Prize in Literature.\n  - Nobel citation: *\"Who in the quest for the melancholic soul of his native city has discovered new symbols for the clash and interlacing of cultures.\"*\n- Masterworks:\n  - **«Kara Kitap» (The Black Book - 1990)** & **«Benim Adım Kırmızı» (My Name is Red - 1998)**: Ottoman miniature painters, perspective metaphysics, and murder mystery in 16th-century Istanbul.\n  - **«Masumiyet Müzesi» (The Museum of Innocence - 2008)**:\n    - The epic love story of Kemal Basmacı and Füsun in 1970s Istanbul; Pamuk simultaneously wrote the novel and built a **physical, real-world museum in Çukurcuma (Istanbul)** displaying the thousands of everyday objects described in the book (cigarette butts, cinema tickets, porcelain figurines, earrings), uniting physical museology with literary memory.\n  - The Concept of **Hüzün**: The communal, poetic melancholy that permeates the Ottoman ruins, wooden houses, and Bosphorus waters of Istanbul.",
      "examples": [
        {
          "target": "Orhan Pamuk, 2006 Nobel Edebiyat Ödülü ve Çukurcuma'daki Masumiyet Müzesi ile roman sanatını somut nesnelerle buluşturarak hafızanın ve hüznün başyapıtını inşa etmiştir.",
          "reading": "Or-han Pa-muk, 2006 No-bel E-de-bi-yat Ö-dü-lü...",
          "translation": "With the 2006 Nobel Prize in Literature and the Museum of Innocence in Cukurcuma, Orhan Pamuk bridged the art of the novel with physical artifacts, constructing a masterpiece of memory and melancholy."
        }
      ],
      "mnemonics": [
        "Orhan Pamuk (2006 Nobel Prize in Literature)! Masumiyet Müzesi (Novel & Real museum in Çukurcuma)! Benim Adım Kırmızı! Hüzün!"
      ],
      "culturalNotes": [
        "The real-world Museum of Innocence in Istanbul won the European Museum of the Year Award (EMYA) in 2014 for its revolutionary fusion of literature and material culture."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Who became the first Turkish writer to win the Nobel Prize in Literature in 2006 for masterpieces such as My Name is Red and Snow?",
          "options": [
            "Orhan Pamuk",
            "Yaşar Kemal",
            "Aziz Nesin",
            "Nâzım Hikmet"
          ],
          "answerIndex": 0,
          "explanation": "Orhan Pamuk."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In which historic Istanbul neighborhood did Orhan Pamuk build the real-world physical Museum of Innocence containing artifacts from his novel?",
          "options": [
            "Kadıköy",
            "Sultanahmet",
            "Beşiktaş",
            "Çukurcuma"
          ],
          "answerIndex": 3,
          "explanation": "Çukurcuma (Beyoğlu)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The Museum of Innocence demonstrates that ordinary daily objects possess the power to preserve fleeting moments of human love and historical time.\"",
          "options": [
            "Benim Adım Kırmızı uzayda geçen bir romandır.",
            "Orhan Pamuk müzecilikten nefret eder.",
            "Hüzün kavramı neşeli kutlamaları ifade eder.",
            "Masumiyet Müzesi, sıradan günlük nesnelerin insan sevgisinin ve tarihi zamanın uçucu anlarını koruma gücüne sahip olduğunu kanıtlar."
          ],
          "answerIndex": 3,
          "explanation": "Accurate literary analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What central collective emotion describes the poetic melancholy of Istanbul throughout Orhan Pamuk's memoirs and novels?",
          "options": [
            "Korku",
            "Öfke",
            "Hüzün",
            "Coşku"
          ],
          "answerIndex": 2,
          "explanation": "Hüzün (Melancholy).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "C2 synthesis on Nobel Literature & Visual Memory"
  },
  "tr-u23-l1": {
    "id": "tr-u23-l1",
    "unit": "tr-u23",
    "level": "C1",
    "objective": "Grand Master of Classical Ottoman Architecture: Mimar Sinan and the Selimiye Mosque (Mimar Sinan - Koca Sinan, Süleymaniye Camii, Selimiye Camii Edirne - UNESCO, çıraklık, kalfalık ve ustalık eserleri, kubbe mühendisliği).",
    "presentation": {
      "explanation": "Mimar Sinan (1488–1588 - Kayseri & Istanbul) and the golden age of classical Ottoman imperial architecture:\n- **Mimar Sinan (Koca Mimar Sinan Ağa)**:\n  - Chief Imperial Architect (*Mimarbaşı*) for 50 years under Suleiman the Magnificent, Selim II, and Murad III; constructed over 370 monuments.\n- Sinan's Architectural Progression:\n  - **Çıraklık Eseri (Apprenticeship Masterpiece)**: **Şehzade Camii** (Istanbul - 1548) with four semi-domes.\n  - **Kalfalık Eseri (Journeyman Masterpiece)**: **Süleymaniye Camii** (Istanbul - 1557) crowning the third hill of Istanbul with its vast complex (*Külliye*).\n  - **Ustalık Eseri (Mastery Crowning Masterpiece)**: **Selimiye Camii** in Edirne (1575 - UNESCO World Heritage):\n    - An engineering miracle: Single monumental dome measuring 31.3 meters in diameter resting on 8 fluted octagonal pillars (*müsemmen ayaklar*), surpassing the dome of the Hagia Sophia without intermediate interior columns, flanked by four soaring 83-meter minarets with triple independent spiral staircases (*üç yollu minareler*).",
      "examples": [
        {
          "target": "Mimar Sinan'ın Edirne'deki ustalık eseri Selimiye Camii ve İstanbul'daki Süleymaniye Külliyesi, klasik Osmanlı kubbe mühendisliğinin ve akustik mükemmelliğin zirvesidir.",
          "reading": "Mee-mar See-na-nın E-deer-ne-de-ki us-ta-lık e-se-ri...",
          "translation": "Mimar Sinan's mastery crowning work, the Selimiye Mosque in Edirne, and the Süleymaniye Complex in Istanbul represent the summit of classical Ottoman dome engineering and acoustic perfection."
        }
      ],
      "mnemonics": [
        "Mimar Sinan (Koca Sinan & 370+ monuments)! Şehzade (Çıraklık), Süleymaniye (Kalfalık), Selimiye Edirne (Ustalık UNESCO)! 8 müsemmen ayak!"
      ],
      "culturalNotes": [
        "Sinan installed hollow clay resonance jars (*akustik küpleri*) inside the dome of Süleymaniye to ensure the imam's recitation carried crystal-clear acoustics across every corner of the mosque."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which supreme Ottoman chief imperial architect designed the Süleymaniye Mosque in Istanbul and the Selimiye Mosque in Edirne?",
          "options": [
            "Mimar Hayreddin",
            "Sedefkar Mehmed Ağa",
            "Balyan Ailesi",
            "Mimar Sinan"
          ],
          "answerIndex": 3,
          "explanation": "Mimar Sinan (Koca Sinan)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which monument in Edirne did Mimar Sinan officially declare to be his \"Ustalık Eseri\" (Mastery Masterpiece) surpassing the dome of Hagia Sophia?",
          "options": [
            "Süleymaniye Camii",
            "Şehzade Camii",
            "Selimiye Camii",
            "Mihrimah Sultan Camii"
          ],
          "answerIndex": 2,
          "explanation": "Selimiye Camii (Edirne)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The octagonal structural support system of Selimiye Mosque allowed Sinan to create an expansive, column-free interior sanctuary flooded with natural light.\"",
          "options": [
            "Süleymaniye Camii 20. yüzyılda inşa edilmiştir.",
            "Mimar Sinan sadece ahşap köprüler yapmıştır.",
            "Selimiye Camii'nin sekizgen taşıyıcı sistemi, Sinan'ın doğal ışıkla dolup taşan sütunsuz ve ferah bir iç ibadet mekânı yaratmasını sağlamıştır.",
            "Selimiye Camii kubbesiz düz bir yapıdır."
          ],
          "answerIndex": 2,
          "explanation": "Accurate architectural analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What acoustic engineering innovation did Mimar Sinan embed into the high brick masonry of his domes to optimize voice resonance?",
          "options": [
            "Metal hoparlörler",
            "İçi boş akustik küpleri",
            "Cam aynalar",
            "Pamuklu bezler"
          ],
          "answerIndex": 1,
          "explanation": "İçi boş akustik küpleri.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Grand Master of Classical Ottoman Architecture"
  },
  "tr-u23-l2": {
    "id": "tr-u23-l2",
    "unit": "tr-u23",
    "level": "C1",
    "objective": "Master of the Tortoise Trainer & Ottoman Modern Painting: Osman Hamdi Bey (Osman Hamdi Bey - Kaplumbağa Terbiyecisi 1906, Sanayi-i Nefise Mektebi / Mimar Sinan Güzel Sanatlar Üniversitesi, İstanbul Arkeoloji Müzeleri, İskender Lahdi).",
    "presentation": {
      "explanation": "Osman Hamdi Bey (1842–1910 - Istanbul & Paris) and the birth of modern Turkish painting and museology:\n- **Osman Hamdi Bey**:\n  - Renaissance intellectual; painter trained in Paris under Jean-Léon Gérôme; archaeologist who excavated Sidon and discovered the **Alexander Sarcophagus (İskender Lahdi)**;\n  - Founded the **Istanbul Archaeology Museums (İstanbul Arkeoloji Müzeleri - 1891)** and founded Turkey's first fine arts academy: **Sanayi-i Nefise Mektebi** (now Mimar Sinan Fine Arts University).\n- Iconic Masterpiece: **«Kaplumbağa Terbiyecisi» (The Tortoise Trainer - 1906 - Pera Museum)**:\n  - An elderly Ottoman intellectual in traditional dervish robes holding a *Ney* reed flute, patiently attempting to train slow, stubborn tortoises crawling on the floor of a dilapidated Bursa pavilion;\n  - Supreme satirical allegory of the agonizing slowness of Ottoman bureaucratic and cultural modernization (*\"Patience in transforming society\"*).",
      "examples": [
        {
          "target": "Osman Hamdi Bey'in «Kaplumbağa Terbiyecisi» tablosu ve kurucusu olduğu Sanayi-i Nefise Mektebi, Türk resim sanatını ve müzeciliğini çağdaş dünya sahnesine taşımıştır.",
          "reading": "Os-man Ham-di Be-yin Kap-lum-ba-ğa Ter-bi-ye-ci-si...",
          "translation": "Osman Hamdi Bey's painting \"The Tortoise Trainer\" and his founding of the Academy of Fine Arts propelled Turkish painting and museology onto the contemporary world stage."
        }
      ],
      "mnemonics": [
        "Osman Hamdi Bey (Kaplumbağa Terbiyecisi 1906 at Pera Museum)! Sanayi-i Nefise Mektebi (Mimar Sinan University founder)! İstanbul Arkeoloji Müzeleri & İskender Lahdi!"
      ],
      "culturalNotes": [
        "*The Tortoise Trainer* set an all-time record as the most expensive Turkish painting ever sold when acquired by the Suna and İnan Kıraç Foundation for the Pera Museum in Istanbul."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Ottoman painter and archaeologist founded the Istanbul Archaeology Museums and painted the iconic 1906 masterpiece \"The Tortoise Trainer\"?",
          "options": [
            "Osman Hamdi Bey",
            "İbrahim Çallı",
            "Şeker Ahmet Paşa",
            "Hoca Ali Rıza"
          ],
          "answerIndex": 0,
          "explanation": "Osman Hamdi Bey."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In which prestigious private Istanbul museum on İstiklal Avenue is Osman Hamdi Bey's *The Tortoise Trainer* permanently exhibited?",
          "options": [
            "Pera Müzesi",
            "İstanbul Modern",
            "Sakıp Sabancı Müzesi",
            "Topkapı Sarayı"
          ],
          "answerIndex": 0,
          "explanation": "Pera Müzesi (Pera Museum)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The Tortoise Trainer allegorizes the patient, agonizing struggle of an enlightened intellectual trying to reform resistant bureaucratic institutions.\"",
          "options": [
            "Osman Hamdi Bey sadece kaplumbağa yetiştiriciliği yapmıştır.",
            "«Kaplumbağa Terbiyecisi», aydın bir entelektüelin değişime direnen bürokratik kurumları sabırla ıslah etme mücadelesini simgeler.",
            "İskender Lahdi kaybolmuştur.",
            "Sanayi-i Nefise Mektebi bir askeri kışlaydı."
          ],
          "answerIndex": 1,
          "explanation": "Accurate painting analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What world-famous ancient marble masterpiece did Osman Hamdi Bey excavate in Sidon (Lebanon) in 1887 and bring to the Istanbul Archaeology Museum?",
          "options": [
            "İskender Lahdi",
            "Truva Hazineleri",
            "Zues Sunağı",
            "Mona Lisa"
          ],
          "answerIndex": 0,
          "explanation": "İskender Lahdi.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 23, Lesson 2: Foundational & Structural Mastery (Osman Hamdi Bey'in «Kaplumbağa)"
  },
  "tr-u23-l3": {
    "id": "tr-u23-l3",
    "unit": "tr-u23",
    "level": "C1",
    "objective": "The Sacred Art of Ebru & Marbling: Master Mustafa Düzgünman (Geleneksel Türk Ebru Sanatı - UNESCO, Mustafa Düzgünman, battal ebru, çiçekli ebru - lale ve karanfil, kitre ve sığır ödü kimyası).",
    "presentation": {
      "explanation": "The sacred traditional art of Ebru (Paper Marbling - UNESCO Intangible Cultural Heritage):\n- **Ebru Sanatı (The Art of Marbling - \"Cloud/Water Art\")**:\n  - Painting on liquid: Extracting natural earth and mineral pigments ground with water, dropped upon a mucilaginous water bath thickened with tragacanth gum (**Kitre**) or sea moss carrageenan.\n- Natural Chemistry & Physics:\n  - **Sığır Ödü (Ox Gall)**: Natural surfactant added to pigments to reduce surface tension, allowing colors to float and expand on water without mixing or dissolving into the solution.\n  - Patterns: **Battal Ebru** (primordial mottled drops), **Gel-Git Ebru** (combed back-and-forth waves), and **Çiçekli Ebru** (delicate tulips, carnations, and hyacinths shaped with a single horsehair needle *Biz*).\n- **Master Mustafa Düzgünman (1920–1990 - Üsküdar)**:\n  - The master custodian of classical Ebru; established the classical rules for tulip (*Lale*) and carnation (*Karanfil*) marbling.",
      "examples": [
        {
          "target": "Geleneksel Türk Ebru Sanatı, kitreli su üzerinde sığır ödü ve toprak boyaların dansıyla kâğıda aktarılan eşsiz bir UNESCO somut olmayan kültür mirasıdır.",
          "reading": "Ge-le-nek-sel Türk Eb-ru Sa-na-tı...",
          "translation": "Traditional Turkish Ebru Art is a unique UNESCO intangible cultural heritage transferred onto paper through the dance of ox gall and mineral pigments upon gum-thickened water."
        }
      ],
      "mnemonics": [
        "Ebru Sanatı (UNESCO Intangible Cultural Heritage)! Kitre (Tragacanth gum thickener) & Sığır ödü (Ox gall surfactant)! Mustafa Düzgünman! Battal & Çiçekli ebru!"
      ],
      "culturalNotes": [
        "In Sufi philosophy, Ebru is regarded as a spiritual meditation on divine creation, where every print pulled from the water is a unique, unrepeatable manifestation of cosmic chance and intention."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What traditional UNESCO-inscribed Turkish water marbling art involves floating mineral pigments on gum-thickened water to print onto paper?",
          "options": [
            "Ebru Sanatı",
            "Hat Sanatı",
            "Çini Sanatı",
            "Minyatür"
          ],
          "answerIndex": 0,
          "explanation": "Ebru Sanatı (Paper Marbling)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What natural animal substance is mixed with earth pigments in Ebru to control surface tension and prevent colors from sinking into the water?",
          "options": [
            "Sığır ödü",
            "Yumurta akı",
            "Zeytinyağı",
            "Süt"
          ],
          "answerIndex": 0,
          "explanation": "Sığır ödü (Ox gall)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The delicate horsehair stylus shapes floating pigment drops into elegant tulips and carnations before they are transferred onto rag paper in a single sweep.\"",
          "options": [
            "İnce at kılı biz, yüzen boya damlalarını tek bir hamlede kâğıda aktarılmadan önce zarif lale ve karanfillere dönüştürür.",
            "Mustafa Düzgünman bir keman virtüözüydü.",
            "Ebru kâğıtları fotokopi makinesinde basılır.",
            "Ebru sanatı yağlı boya tuval üzerine yapılır."
          ],
          "answerIndex": 0,
          "explanation": "Accurate traditional art analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What plant gum extract is traditionally used to thicken the water bath (*Tekne*) in the classical art of Ebru?",
          "options": [
            "Çimento",
            "Şeker şurubu",
            "Buğday unu",
            "Kitre (Tragacanth gum) veya Deniz kadayıfı"
          ],
          "answerIndex": 3,
          "explanation": "Kitre (Tragacanth gum).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Sacred Art of Ebru & Marbling"
  },
  "tr-u23-l4": {
    "id": "tr-u23-l4",
    "unit": "tr-u23",
    "level": "C2",
    "objective": "Iznik Ceramic Art & Cobalt Turquoise Glazes (İznik Çinisi, sır altı tekniği, kobalt mavisi ve mercan kırmızısı, Rumi ve Hatayi motifleri, Rüstem Paşa Camii).",
    "presentation": {
      "explanation": "Iznik tiles (İznik Çinisi) and the golden age of Ottoman ceramic chemistry:\n- **İznik Ceramics (15th–17th Century - Lake İznik, Nicaea)**:\n  - The pinnacle of ceramic art in world history; high quartz content body (>80% frit silica), producing a resonant, white porcelain-like strength.\n- Breakthrough Chemistry & Colors:\n  - **Sır Altı Tekniği (Underglaze Technique)**: Painting intricate botanical designs under transparent glassy alkaline glazes, fired at 900°C without pigments bleeding.\n  - Iconic Color Palette: **Kobalt Mavisi (Cobalt Blue)**, **Turkuaz (Turquoise - named after Turkey)**, sage green, and the legendary **Mercan Kırmızısı (Sealing-Wax Coral Red / Domates Kırmızısı)** achieved with iron-rich Armenian bole (*Lapseki toprağı*), standing out in tactile relief.\n- Masterpiece Sanctuary: **Rüstem Paşa Camii (Istanbul - 1563)**: Covered from floor to dome in thousands of pristine floral Iznik tiles (carnations, tulips, hyacinths, cypress trees).",
      "examples": [
        {
          "target": "Rüstem Paşa Camii'ni donatan İznik çinileri, yüksek kuvars oranı ve mercan kırmızısı sır altı tekniğiyle seramik sanatının dünyadaki en parlak zirvesidir.",
          "reading": "Rüs-tem Pa-şa Ca-mi-i-ni do-na-tan İz-nik çi-ni-le-ri...",
          "translation": "The Iznik tiles adorning the Rustem Pasha Mosque, with their high quartz composition and underglaze coral red technique, represent the world's brightest summit of ceramic art."
        }
      ],
      "mnemonics": [
        "İznik Çinisi (High quartz silica body >80%)! Sır altı tekniği (Underglaze painting)! Mercan kırmızısı (Raised coral red)! Rüstem Paşa Camii!"
      ],
      "culturalNotes": [
        "The word \"Turquoise\" in French (*Pierre turquoise*) literally means \"Turkish Stone,\" named by European merchants who imported the vivid blue-green glazed minerals from Turkey."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which historic town in northwestern Turkey was the world-famous center of Ottoman quartz underglaze ceramic tile production?",
          "options": [
            "Avanos",
            "İznik",
            "Çanakkale",
            "Kütahya"
          ],
          "answerIndex": 1,
          "explanation": "İznik (Bursa)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which famous Istanbul mosque designed by Mimar Sinan is celebrated for being completely covered inside with thousands of ruby-red Iznik tiles?",
          "options": [
            "Ayasofya",
            "Rüstem Paşa Camii",
            "Fatih Camii",
            "Sultanahmet Camii"
          ],
          "answerIndex": 1,
          "explanation": "Rüstem Paşa Camii."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The vibrant raised coral red glaze developed in 16th-century Iznik was applied under a crystal-clear silicate glaze to create radiant floral arabesques.\"",
          "options": [
            "Rüstem Paşa Camii çinisiz çıplak bir taş yapıdır.",
            "İznik çinileri plastik ve kumdan üretilir.",
            "Mercan kırmızısı boya ilk yıkamada akar.",
            "16. yüzyıl İznik'inde geliştirilen kabarık mercan kırmızısı sır, parlak çiçekli arabeskler yaratmak için berrak silikat sırın altına uygulandı."
          ],
          "answerIndex": 3,
          "explanation": "Accurate ceramic art analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What mineral composition exceeding 80% gives Iznik tiles their distinctive brilliant white hardness and acoustic ringing resonance?",
          "options": [
            "Demir tozu",
            "Alçı",
            "Kuvars / Silika",
            "Kireç"
          ],
          "answerIndex": 2,
          "explanation": "Kuvars / Silika (Quartz).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 23, Lesson 4: Foundational & Structural Mastery (Rüstem Paşa Camii'ni donatan İ)"
  },
  "tr-u23-l5": {
    "id": "tr-u23-l5",
    "unit": "tr-u23",
    "level": "C2",
    "objective": "C2 synthesis on Modern Turkish Architecture & Balyan Heritage: The Dolmabahçe Palace to Atatürk Cultural Center (Balyan Ailesi - Dolmabahçe Sarayı ve Ortaköy Camii, AKM - Atatürk Kültür Merkezi ve modern opera mimarisi, Tabanlıoğlu Mimarlık).",
    "presentation": {
      "explanation": "From 19th-century Ottoman Bosphorus palaces to modern civic cultural complexes:\n- **The Balyan Dynasty of Imperial Architects (Balyan Ailesi - Garabet & Nigoğos Balyan)**:\n  - Armenian-Ottoman family of master imperial architects who shaped the Bosphorus waterfront in the 19th century;\n  - Masterpieces: **Dolmabahçe Sarayı (1856)** (fusing European Baroque, Rococo, and Neoclassical grandeur with traditional Ottoman imperial ceremonial layout and crystal chandeliers), **Ortaköy Camii (Büyük Mecidiye Camii)**, and **Beylerbeyi Sarayı**.\n- **Modern Civic Architecture: Atatürk Kültür Merkezi (AKM - Taksim Square)**:\n  - Originally designed by Hayati Tabanlıoğlu (1969); reconstructed by Murat Tabanlıoğlu (2021) into a world-class opera house enclosed in a monumental red ceramic sphere inside an expansive transparent glass-and-steel atrium on Taksim Square.",
      "examples": [
        {
          "target": "Balyan ailesinin Dolmabahçe Sarayı'ndaki Boğaziçi barok ihtişamı ve Taksim'deki yeni AKM Opera Binası, Türkiye'nin mimari dönüşümünün simgeleridir.",
          "reading": "Bal-yan a-i-le-si-nin Dol-ma-bah-çe Sa-ra-yın-da-ki...",
          "translation": "The Bosphorus baroque majesty of the Balyan family in Dolmabahce Palace and the new AKM Opera House in Taksim stand as symbols of Turkey's architectural transformation."
        }
      ],
      "mnemonics": [
        "Balyan Ailesi (Dolmabahçe Sarayı 1856 & Ortaköy Camii)! Boğaziçi Baroku! AKM Taksim (Atatürk Kültür Merkezi red sphere opera house)!"
      ],
      "culturalNotes": [
        "Dolmabahçe Palace houses the world's largest Bohemian crystal chandelier in its ceremonial hall (Muayede Salonu), a gift from Queen Victoria with 750 lamps weighing 4.5 tons."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which family of Ottoman Armenian imperial architects designed the Dolmabahçe Palace and Ortaköy Mosque on the Bosphorus in the 19th century?",
          "options": [
            "Balyan Ailesi",
            "Fossati Kardeşler",
            "Melling",
            "D'Aronco"
          ],
          "answerIndex": 0,
          "explanation": "Balyan Ailesi."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What landmark cultural arts and opera complex on Taksim Square in Istanbul features a monumental red sphere auditorium?",
          "options": [
            "Zorlu PSM",
            "Süreyya Operası",
            "Lütfi Kırdar",
            "AKM"
          ],
          "answerIndex": 3,
          "explanation": "AKM (Atatürk Kültür Merkezi)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Dolmabahce Palace synthesized European neoclassical facades with traditional Ottoman harem and ceremonial hall palace spatial organizations.\"",
          "options": [
            "AKM bir alışveriş merkezine dönüştürülmüştür.",
            "Ortaköy Camii Karadeniz dağlarında yer alır.",
            "Dolmabahçe Sarayı, Avrupa neoklasik cephelerini geleneksel Osmanlı harem ve muayede salonu mekânsal kurgusuyla sentezlemiştir.",
            "Dolmabahçe Sarayı Mimar Sinan tarafından yapılmıştır."
          ],
          "answerIndex": 2,
          "explanation": "Accurate architectural synthesis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What grand ceremonial reception hall in Dolmabahçe Palace houses the 4.5-ton Bohemian crystal chandelier presented by Queen Victoria?",
          "options": [
            "Süfera Salonu",
            "Muayede Salonu",
            "Hünkâr Hamamı",
            "Mavi Salon"
          ],
          "answerIndex": 1,
          "explanation": "Muayede Salonu.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "C2 synthesis on Modern Turkish Architecture & Balyan Heritage"
  },
  "tr-u24-l1": {
    "id": "tr-u24-l1",
    "unit": "tr-u24",
    "level": "C1",
    "objective": "Grand Master of Classical Ottoman Music: Hammâmîzâde İsmâil Dede Efendi (Dede Efendi - Klasik Türk Musikisi, Ferahfeza Ayin-i Şerifi, «Yine bir gülnihal», makamlar ve usuller, ney ve tambur, saray bestekârlığı).",
    "presentation": {
      "explanation": "Hammâmîzâde İsmâil Dede Efendi (1778–1846 - Istanbul & Mecca) and the golden summit of Classical Ottoman Music (Klasik Türk Sanat Musikisi):\n- **Dede Efendi (Hammamizade İsmail Dede Efendi)**:\n  - Sufi Mevlevi dervish at Yenikapı Mevlevihanesi; chief court composer (*Sermüezzin*) to Sultan Mahmud II and Abdülmecid I;\n  - Composed over 500 masterworks across sacred Sufi Ayins, Kar, Beste, Ağır Semai, and popular Şarkı songs.\n- Masterpieces & Innovations:\n  - **«Ferahfeza Ayin-i Şerifi» (1839)**: The crowning masterpiece of Mevlevi Sufi ceremonial music, written in the Ferahfeza makam (combining Rast and Acem-Aşiran);\n  - **«Yine bir gülnihal aldı bu gönlümü»** (Rast Makamı): The immortal classical waltz song blending European waltz tempo (3/4) with classical Ottoman Rast microtonal melodies.\n  - The Master Acoustic Instruments: **Ney** (reed flute evoking the soul's longing for the Divine), **Tambur** (long-necked fretted lute with 24 microtonal frets per octave), and **Kemençe**.",
      "examples": [
        {
          "target": "Dede Efendi'nin Ferahfeza Mevlevi Âyini ve «Yine bir gülnihal» bestesi, Klasik Türk Müziği makam ve usul zenginliğinin evrensel zirvesidir.",
          "reading": "De-de E-fen-di-nin Fe-rah-fe-za Mev-le-vee Ah-yee-ni...",
          "translation": "Dede Efendi's Ferahfeza Mevlevi Ayin and \"Yine bir gülnihal\" composition represent the universal summit of Classical Turkish Music makam and usul richness."
        }
      ],
      "mnemonics": [
        "Dede Efendi (Ottoman Classical Music Titan & Yenikapı Mevlevihane)! Ferahfeza Ayin-i Şerifi! «Yine bir gülnihal» (Rast waltz)! Ney ve Tambur!"
      ],
      "culturalNotes": [
        "When Western opera and brass bands entered the Ottoman court under Donizetti Pasha, Dede Efendi famously lamented: *\"The flavor of this music has departed,\"* choosing to make the pilgrimage to Mecca in 1846 where he passed away."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which 19th-century Mevlevi Sufi composer is revered as the supreme master of Classical Ottoman Music for works like Ferahfeza Ayini and \"Yine bir gülnihal\"?",
          "options": [
            "Itri",
            "Hacı Arif Bey",
            "Tamburi Cemil Bey",
            "Hammâmîzâde İsmâil Dede Efendi"
          ],
          "answerIndex": 3,
          "explanation": "Hammâmîzâde İsmâil Dede Efendi."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What reed flute made of nine-segmented giant reed (Kargı) is the spiritual soul of Mevlevi Sufi music and Ottoman classical compositions?",
          "options": [
            "Zurna",
            "Ney",
            "Tulum",
            "Kaval"
          ],
          "answerIndex": 1,
          "explanation": "Ney."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Dede Efendi's Ferahfeza Ayin combines intricate microtonal makam modulation with sweeping rhythmic cycles (Usul) to accompany the whirling Sufi sema ritual.\"",
          "options": [
            "Dede Efendi sadece elektro gitar çalmıştır.",
            "Dede Efendi'nin Ferahfeza Âyini, sema âyinine eşlik etmek için karmaşık makam geçkilerini görkemli ritmik usullerle birleştirir.",
            "Yine bir gülnihal 2020 yılında bestelenmiştir.",
            "Ney plastik borudan yapılan bir çocuk oyuncağıdır."
          ],
          "answerIndex": 1,
          "explanation": "Accurate Ottoman musicology translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What 17th-century Ottoman composer authored the immortal *Nevakar Kârı* and the *Segâh Tekbir* chanted across the Islamic world during Eid prayers?",
          "options": [
            "Itrî",
            "Dede Efendi",
            "Şakir Ağa",
            "Zekai Dede"
          ],
          "answerIndex": 0,
          "explanation": "Itrî (Buhûrîzâde Mustafa Efendi).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Grand Master of Classical Ottoman Music"
  },
  "tr-u24-l2": {
    "id": "tr-u24-l2",
    "unit": "tr-u24",
    "level": "C1",
    "objective": "The Polyphonic Anatolian Rock Revolution: Barış Manço, Erkin Koray, and Cem Karaca (Anadolu Rock, Barış Manço - Dönence ve Gülpembe, Moğollar, Erkin Koray - bağlama elektro füzyon, Cem Karaca - Tamirci Çırağı, halk ozanlığı ve saykodelik rock).",
    "presentation": {
      "explanation": "Anatolian Rock (Anadolu Rock - 1960s–1970s) and the psychedelic fusion revolution:\n- **Anatolian Rock (Anadolu Pop / Rock)**:\n  - The golden movement that merged centuries-old Anatolian Aşık folk poetry (Yunus Emre, Pir Sultan Abdal, Karacaoğlan) and the microtonal **Bağlama (Saz)** with psychedelic electric guitars, Hammond organs, and fuzz pedals.\n- The Titans:\n  - **Barış Manço (1943–1999 - with band Kurtalan Ekspres)**: Turkey's cultural ambassador to 100+ countries; masterpieces: **«Dönence»** (1981 - progressive funk-rock masterwork), **«Gülpembe»**, **«Kara Sevda»**.\n  - **Erkin Koray (1941–2023)**: The \"Father of Turkish Rock\"; invented the **Electric Bağlama (Elektro Saz)** in 1969 with Orhan Gencebay (*«Fesupanallah»*, *«Cemalim»*).\n  - **Cem Karaca (1945–2004 - with band Moğollar & Dervişan)**: Operatic tenor voice and champion of working-class dignity (**«Tamirci Çırağı»**).\n  - **Moğollar & Selda Bağcan** (championed internationally by Dr. Dre and Mos Def).",
      "examples": [
        {
          "target": "Barış Manço'nun «Dönence»si ve Cem Karaca'nın «Tamirci Çırağı», elektro bağlama ve saykodelik rock tınılarıyla Anadolu Rock akımını dünya çapında bir fenomene dönüştürdü.",
          "reading": "Ba-rış Man-ço-nun Dö-nen-ce-si...",
          "translation": "Baris Manco's \"Donence\" and Cem Karaca's \"Tamirci Ciragi,\" with electric baglama and psychedelic rock timbres, transformed the Anatolian Rock movement into a worldwide phenomenon."
        }
      ],
      "mnemonics": [
        "Anadolu Rock 1970s (Bağlama + Psychedelic Electric Guitar)! Barış Manço & Kurtalan Ekspres (Dönence & Gülpembe)! Erkin Koray (Invented Elektro Saz 1969)! Cem Karaca (Tamirci Çırağı)!"
      ],
      "culturalNotes": [
        "Barış Manço's children's TV program *7'den 77'ye* (From 7 to 77) traveled to Japan, Equatorial Guinea, and Siberia, making him the most beloved cultural diplomat in modern Turkish history."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which legendary Turkish cultural ambassador and musician created masterpieces like \"Dönence\" and \"Gülpembe\" with the band Kurtalan Ekspres?",
          "options": [
            "Barış Manço",
            "Fikret Kızılok",
            "Erkin Koray",
            "Cem Karaca"
          ],
          "answerIndex": 0,
          "explanation": "Barış Manço."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What hybrid instrument was invented in 1969 by Erkin Koray and Orhan Gencebay, adding magnetic guitar pickups to the traditional long-necked lute?",
          "options": [
            "Elektro Bağlama",
            "Elektro Kemençe",
            "Elektro Ney",
            "Elektro Kanun"
          ],
          "answerIndex": 0,
          "explanation": "Elektro Bağlama (Electric Saz)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Anatolian Rock synthesized classical ashik folk poetry and modal baglama scales with progressive rock synthesizers and driving rock rhythm sections.\"",
          "options": [
            "Anadolu Rock, klasik âşık halk şiirini ve modal bağlama dizilerini progresif rock synthesizerları ve güçlü rock ritimleriyle sentezlemiştir.",
            "Cem Karaca operetlerde balerin olarak çalıştı.",
            "Elektro saz 21. yüzyılda Amerika'da icat edildi.",
            "Barış Manço İngilizce dışında dil bilmezdi."
          ],
          "answerIndex": 0,
          "explanation": "Accurate Anatolian Rock analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which 1975 social realist rock anthem by Cem Karaca tells the heartbreaking story of an impoverished car mechanic apprentice in love with a wealthy girl?",
          "options": [
            "«Resimdeki Gözyaşları»",
            "«Islak Islak»",
            "«Namus Belası»",
            "«Tamirci Çırağı»"
          ],
          "answerIndex": 3,
          "explanation": "«Tamirci Çırağı».",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Polyphonic Anatolian Rock Revolution"
  },
  "tr-u24-l3": {
    "id": "tr-u24-l3",
    "unit": "tr-u24",
    "level": "C1",
    "objective": "The Immortal Nightingale of Aşık Folk Poetry: Âşık Veysel (Âşık Veysel Şatıroğlu - Sivas Sivrialan, «Uzun ince bir yoldayım», «Kara toprak», çiçek hastalığı ve görme engeli, saz ve felsefi bilgelik).",
    "presentation": {
      "explanation": "Âşık Veysel Şatıroğlu (1894–1973 - Sivrialan, Şarkışla, Sivas) and the philosophical soul of Anatolian folk poetry:\n- **Âşık Veysel**:\n  - Blinded by smallpox at age 7; his father gave him a *Saz (Bağlama)* to comfort his solitude;\n  - Became the supreme **Aşık (Troubadour / Folk Bard)** of 20th-century Turkey, traveling from village to village singing of tolerance, human unity, existential mortality, and profound love of nature.\n- Immortal Masterpieces:\n  - **«Uzun İnce Bir Yoldayım» (I am on a long and narrow road)**: The definitive existential hymn of the human condition (*\"Uzun ince bir yoldayım / Gidiyorum gündüz gece / Bilmiyorum ne haldeyim / Gidiyorum gündüz gece / Dünyaya geldiğim anda / Yürüdüm aynı zamanda / İki kapılı bir handa / Gidiyorum gündüz gece\"* - Living in a two-doored caravanserai, entering through birth and exiting through death).\n  - **«Kara Toprak» (The Black Earth)**: Praising mother Earth as humanity's most faithful, forgiving companion (*\"Benim sadık yârim kara topraktır\"*).",
      "examples": [
        {
          "target": "Âşık Veysel «Uzun ince bir yoldayım» ve «Kara toprak» deyişleriyle iki kapılı bir han olan dünyada insanlığa kardeşlik ve tevazu dersi vermiştir.",
          "reading": "Ah-şık Vey-sel U-zun een-ce beer yol-da-yım...",
          "translation": "With \"Uzun ince bir yoldayım\" and \"Kara toprak,\" Asik Veysel gave humanity a lesson in brotherhood and humility inside this world that is a two-doored caravanserai."
        }
      ],
      "mnemonics": [
        "Âşık Veysel (Blind master of Sivrialan, Sivas)! «Uzun ince bir yoldayım» (Two-doored caravanserai of life)! «Benim sadık yârim kara topraktır»! Bağlama ozanı!"
      ],
      "culturalNotes": [
        "In 2023, UNESCO officially declared the \"Year of Âşık Veysel\" worldwide on the 50th anniversary of his passing to celebrate his universal message of peace, tolerance, and ecological wisdom."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which blind Anatolian master bard from Sivas authored the immortal philosophical songs \"Uzun İnce Bir Yoldayım\" and \"Kara Toprak\"?",
          "options": [
            "Âşık Veysel",
            "Âşık Mahzuni Şerif",
            "Neşet Ertaş",
            "Muharrem Ertaş"
          ],
          "answerIndex": 0,
          "explanation": "Âşık Veysel (Şatıroğlu)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What metaphor for human life between birth and death does Âşık Veysel use in *Uzun İnce Bir Yoldayım*?",
          "options": [
            "İki kapılı bir han",
            "Hızlı bir tren",
            "Karanlık bir kuyu",
            "Uçsuz bucaksız bir okyanus"
          ],
          "answerIndex": 0,
          "explanation": "İki kapılı bir han."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Asik Veysel's Kara Toprak personifies the soil as humanity's most loyal companion that generously returns a thousand blossoms for every single seed planted.\"",
          "options": [
            "Âşık Veysel saz çalmayı hiç öğrenmemiştir.",
            "Uzun İnce Bir Yoldayım bir askeri marştır.",
            "UNESCO 2023 yılını kutlamayı reddetti.",
            "Âşık Veysel'in Kara Toprak şiiri, ekilen her bir tohuma bin bereketle karşılık veren toprağı insanoğlunun en sadık yâri olarak kişileştirir."
          ],
          "answerIndex": 3,
          "explanation": "Accurate folk poetry translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which long-necked plucked fretted lute is the indispensable acoustic instrument of Anatolian Aşık troubadours and folk bards?",
          "options": [
            "Kemençe",
            "Tulum",
            "Bağlama / Saz",
            "Def"
          ],
          "answerIndex": 2,
          "explanation": "Bağlama / Saz.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Immortal Nightingale of Aşık Folk Poetry"
  },
  "tr-u24-l4": {
    "id": "tr-u24-l4",
    "unit": "tr-u24",
    "level": "C2",
    "objective": "The Bozkır Voice & Abdal Heritage: Neşet Ertaş (Neşet Ertaş - Bozkırın Tezenesi, Kırşehir Abdal geleneği, «Yalan Dünya», «Gönül Dağı», «Zahidem», bozlak türü ve garip mahlası).",
    "presentation": {
      "explanation": "Neşet Ertaş (1938–2012 - Kırşehir & İzmir) and the Abdal musical heritage of Central Anatolia:\n- **Neşet Ertaş (\"Bozkırın Tezenesi\" / The Plectrum of the Steppe)**:\n  - Named \"The Plectrum of the Steppe\" by author Yaşar Kemal; the master of the centuries-old **Abdal musical tradition** of Central Anatolia.\n- Mastery of the **Bozlak** Genre:\n  - Free-meter, unmeasured high-register vocal cry born of the harsh, arid steppe plains (*Bozkır*), expressing cosmic heartbreak, longing, and existential exile (*\"Gariplik\"*);\n  - Wrote under the poetic pseudonym **«Garip»** (The Poor Stranger / The Wretched One);\n- Masterpieces & Anthems:\n  - **«Yalan Dünya»** (Ah yalan dünyada / Yalandan yüzüme gülen dünyada);\n  - **«Gönül Dağı»** (The Mountain of the Heart);\n  - **«Zahidem»** & **«Neredesin Sen»**;\n  - Refused the official title of \"State Artist\" (*Devlet Sanatçısı*), stating: *\"I am an artist of the people; to be called a state artist would be an insult to the people.\"*",
      "examples": [
        {
          "target": "«Bozkırın Tezenesi» Neşet Ertaş, «Yalan Dünya» ve «Gönül Dağı» bozlaklarıyla Anadolu Abdal geleneğini ve halkın feryadını bağlamasının tellerinde ölümsüzleştirdi.",
          "reading": "Boz-kı-rın Te-ze-ne-si Ne-şet Er-taş...",
          "translation": "\"The Plectrum of the Steppe\" Neset Ertas immortalized the Anatolian Abdal tradition and the cry of the common people on the strings of his baglama with \"Yalan Dunya\" and \"Gonul Dagi.\""
        }
      ],
      "mnemonics": [
        "Neşet Ertaş (Bozkırın Tezenesi & Abdal tradition)! Bozlak genre (High-register steppe cry)! «Yalan Dünya» & «Gönül Dağı»! Refused State Artist title!"
      ],
      "culturalNotes": [
        "In 2011, UNESCO inscribed the Abdal Musical Heritage of Kırşehir on the UNESCO Creative Cities Network as a World City of Music directly honoring Neşet and Muharrem Ertaş."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Kırşehir folk musician was titled \"Bozkırın Tezenesi\" (The Plectrum of the Steppe) by Yaşar Kemal for classics like \"Yalan Dünya\" and \"Gönül Dağı\"?",
          "options": [
            "Hacı Taşan",
            "Neşet Ertaş",
            "Çekiç Ali",
            "Muharrem Ertaş"
          ],
          "answerIndex": 1,
          "explanation": "Neşet Ertaş."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What unmeasured, high-register passionate vocal song genre of the Central Anatolian steppe was mastered by Neşet Ertaş?",
          "options": [
            "Zeybek",
            "Bozlak",
            "Horon",
            "Semah"
          ],
          "answerIndex": 1,
          "explanation": "Bozlak."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Neset Ertas refused the official State Artist title, affirming that he was solely an artist of the common people who could accept no higher honor.\"",
          "options": [
            "Gönül Dağı bir caz füzyon parçasıdır.",
            "Bozlak sadece sahil kasabalarında söylenir.",
            "Neşet Ertaş, yalnızca halkın bir sanatçısı olduğunu ve bundan daha büyük bir unvan kabul edemeyeceğini belirterek resmi Devlet Sanatçısı unvanını reddetti.",
            "Neşet Ertaş bağlama çalmayı reddetmiştir."
          ],
          "answerIndex": 2,
          "explanation": "Accurate folk musicology translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What humble poetic pen name (Mahlas) meaning \"The Lonely Stranger / The Wretched One\" did Neşet Ertaş use in the final quatrains of his songs?",
          "options": [
            "Seyyah",
            "Garip",
            "Fuzuli",
            "Dertli"
          ],
          "answerIndex": 1,
          "explanation": "Garip.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Bozkır Voice & Abdal Heritage"
  },
  "tr-u24-l5": {
    "id": "tr-u24-l5",
    "unit": "tr-u24",
    "level": "C2",
    "objective": "C2 synthesis on Turkish Five & Modern Symphonic Synthesis: Ahmed Adnan Saygun (Türk Beşleri, Ahmed Adnan Saygun - Yunus Emre Oratoryosu op. 19, Béla Bartók ile Anadolu derlemeleri, Cumhurbaşkanlığı Senfoni Orkestrası).",
    "presentation": {
      "explanation": "Ahmed Adnan Saygun (1907–1991 - Izmir & Ankara) and the modern Turkish symphonic synthesis:\n- **Türk Beşleri (The Turkish Five)**:\n  - The five pioneer composers who founded modern Turkish classical symphonic music under Mustafa Kemal Atatürk's cultural reforms: **Ahmed Adnan Saygun, Cemal Reşit Rey, Ulvi Cemal Erkin, Hasan Ferid Alnar, and Necil Kâzım Akses**.\n- Fieldwork with Béla Bartók (1936):\n  - Traveled through the nomadic Yörük villages of Southern Anatolia with Hungarian composer **Béla Bartók**, recording authentic pentatonic and modal folk songs in phonographs.\n- Supreme Masterpiece: **«Yunus Emre Oratoryosu» op. 19 (1942)**:\n  - The first monumental Western-style oratorio in the Islamic world;\n  - Scored for 4 vocal soloists, large choir, and symphony orchestra, setting the mystical verses of 13th-century Sufi poet Yunus Emre (*«Yalancı dünyaya konup göçenler»*);\n  - Performed triumphantly at the United Nations General Assembly in New York (1958) conducted by Leopold Stokowski.",
      "examples": [
        {
          "target": "Ahmed Adnan Saygun'un «Yunus Emre Oratoryosu», Türk Beşleri'nin polifonik dehasını Birleşmiş Milletler Genel Kurulu'na taşıyarak dünya müzik tarihine altın harflerle kazınmıştır.",
          "reading": "Ah-med Ad-nan Say-gun-un Yu-nus Em-re O-rat-or-yo-su...",
          "translation": "Ahmed Adnan Saygun's \"Yunus Emre Oratorio\" carried the polyphonic genius of the Turkish Five to the United Nations General Assembly, engraved in gold letters in world music history."
        }
      ],
      "mnemonics": [
        "Ahmed Adnan Saygun (Türk Beşleri & Yunus Emre Oratoryosu 1942)! Fieldwork with Béla Bartók in 1936! Leopold Stokowski UN performance 1958! CSO!"
      ],
      "culturalNotes": [
        "The Presidential Symphony Orchestra (Cumhurbaşkanlığı Senfoni Orkestrası - CSO), founded in 1826 in Istanbul as Mızîka-ı Hümâyûn, is one of the oldest active symphony orchestras in the world."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Turkish composer of \"The Turkish Five\" composed the monumental \"Yunus Emre Oratorio\" and conducted ethnomusicological fieldwork with Béla Bartók in 1936?",
          "options": [
            "Ahmed Adnan Saygun",
            "Cemal Reşit Rey",
            "Fazıl Say",
            "Ulvi Cemal Erkin"
          ],
          "answerIndex": 0,
          "explanation": "Ahmed Adnan Saygun."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which world-famous conductor directed the historic performance of Saygun's *Yunus Emre Oratorio* at the United Nations General Hall in New York in 1958?",
          "options": [
            "Leonard Bernstein",
            "Herbert von Karajan",
            "Arturo Toscanini",
            "Leopold Stokowski"
          ],
          "answerIndex": 3,
          "explanation": "Leopold Stokowski."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The Turkish Five successfully synthesized authentic Anatolian modal scales and aksak irregular meters with complex Western polyphonic orchestration.\"",
          "options": [
            "Béla Bartók Türkiye'ye hiç gelmemiştir.",
            "Türk Beşleri, otantik Anadolu makam dizilerini ve aksak usullerini karmaşık Batı polifonik orkestrasyonuyla başarıyla sentezlemiştir.",
            "Ahmed Adnan Saygun orkestra müziğine karşıydı.",
            "Yunus Emre Oratoryosu sadece piyano için yazılmıştır."
          ],
          "answerIndex": 1,
          "explanation": "Accurate modern symphonic analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the name of Turkey's premier state orchestra, founded in 1826 and now housed in its futuristic new concert hall in Ankara?",
          "options": [
            "Cumhurbaşkanlığı Senfoni Orkestrası",
            "Borusan Filarmoni",
            "İstanbul Devlet Senfoni",
            "Bilkent Senfoni"
          ],
          "answerIndex": 0,
          "explanation": "Cumhurbaşkanlığı Senfoni Orkestrası (CSO).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "C2 synthesis on Turkish Five & Modern Symphonic Synthesis"
  },
  "tr-u25-l1": {
    "id": "tr-u25-l1",
    "unit": "tr-u25",
    "level": "C1",
    "objective": "The Poet of Anatolian Solitude & The Golden Palm: Nuri Bilge Ceylan (Nuri Bilge Ceylan - Kış Uykusu 2014 - Cannes Altın Palmiye, Uzak 2002 - Cannes Grand Prix, Bir Zamanlar Anadolu'da 2011, Kapadokya kış manzaraları, Çehovyen diyaloglar).",
    "presentation": {
      "explanation": "Nuri Bilge Ceylan (1959–present - Istanbul & Çanakkale) and modern contemplative Turkish cinema:\n- **Nuri Bilge Ceylan (NBC)**:\n  - The undisputed titan of modern Turkish auteur cinema; won the **Palme d'Or (Altın Palmiye) at Cannes (2014)**, the **Grand Prix twice (2002, 2011)**, and **Best Director (2008)**.\n- Masterpieces & Chekhovian Aesthetics:\n  - **«Kış Uykusu» (Winter Sleep - 2014 - Palme d'Or at Cannes)**:\n    - Set inside a cave hotel in snow-covered Cappadocia (*Kapadokya*);\n    - Reinterprets Anton Chekhov's short stories; examining the moral hypocrisy and intellectual vanity of a retired Istanbul stage actor (Aydın) and his strained relationships with his young wife Nihal and bitter sister Necla;\n    - Schubert's Piano Sonata in A major D. 959 playing over sweeping snowscapes;\n  - **«Bir Zamanlar Anadolu'da» (Once Upon a Time in Anatolia - 2011 - Grand Prix at Cannes)**: Nighttime search for a buried murder victim across the rolling hills of the Anatolian steppe with a doctor, prosecutor, and police commissioner;\n  - **«Uzak» (Distant - 2002)**: Loneliness in snowy Istanbul;\n  - The Famous Dedication (Cannes 2008): **«Bu ödülü, tutkuyla sevdiğim yalnız ve güzel ülkeme adıyorum.»** (I dedicate this award to my lonely and beautiful country, which I love passionately).",
      "examples": [
        {
          "target": "Nuri Bilge Ceylan «Kış Uykusu» ile Cannes'da Altın Palmiye'yi kazanarak Kapadokya karlarında Çehovyen insan ruhunu dünya sinemasının zirvesine taşıdı.",
          "reading": "Nu-ri Bil-ge Cey-lan Kış Uy-ku-su i-le...",
          "translation": "With \"Winter Sleep,\" Nuri Bilge Ceylan won the Palme d'Or at Cannes, elevating the Chekhovian human soul in the snows of Cappadocia to the summit of world cinema."
        }
      ],
      "mnemonics": [
        "Nuri Bilge Ceylan (Kış Uykusu - Palme d'Or at Cannes 2014)! Bir Zamanlar Anadolu'da (Grand Prix 2011)! «Yalnız ve güzel ülkem» (My lonely and beautiful country)! Kapadokya!"
      ],
      "culturalNotes": [
        "Ceylan worked as a professional fine-art photographer before directing, personally operating the camera and grading every panoramic landscape frame like a luminous painting."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Turkish director won the Palme d'Or at the Cannes Film Festival in 2014 for \"Winter Sleep\" (Kış Uykusu) and directed \"Once Upon a Time in Anatolia\"?",
          "options": [
            "Semih Kaplanoğlu",
            "Zeki Demirkubuz",
            "Fatih Akın",
            "Nuri Bilge Ceylan"
          ],
          "answerIndex": 3,
          "explanation": "Nuri Bilge Ceylan."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In which famous geological region of central Turkey, characterized by fairy chimneys and cave hotels in winter snow, is *Kış Uykusu* set?",
          "options": [
            "Pamukkale",
            "Kapadokya",
            "Karadeniz Yaylaları",
            "Toros Dağları"
          ],
          "answerIndex": 1,
          "explanation": "Kapadokya (Cappadocia)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Ceylan explores the psychological vanity of intellectuals through long philosophical dialogues set against the stark, snowy landscapes of Cappadocia.\"",
          "options": [
            "Ceylan, Kapadokya'nın ıssız ve karlı manzaraları eşliğinde entelektüellerin psikolojik kibrini uzun felsefi diyaloglarla irdeler.",
            "Kış Uykusu bir bilimkurgu aksiyon filmidir.",
            "Nuri Bilge Ceylan filmlerinde hiç konuşma kullanılmaz.",
            "Uzak filmi New York'ta çekilmiştir."
          ],
          "answerIndex": 0,
          "explanation": "Accurate Turkish auteur analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "To what did Nuri Bilge Ceylan famously dedicate his Best Director award at the Cannes Film Festival podium in 2008?",
          "options": [
            "«Sinema yapımcılarına»",
            "«Aileme»",
            "«Fransa'ya»",
            "«Yalnız ve güzel ülkeme»"
          ],
          "answerIndex": 3,
          "explanation": "«Yalnız ve güzel ülkeme».",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Poet of Anatolian Solitude & The Golden Palm"
  },
  "tr-u25-l2": {
    "id": "tr-u25-l2",
    "unit": "tr-u25",
    "level": "C1",
    "objective": "The Palme d'Or from Prison: Yılmaz Güney and Yol (Yılmaz Güney ve Şerif Gören - Yol 1982 - Cannes Altın Palmiye, Sürü 1978, Çirkin Kral, hapishaneden film yönetmenliği, Kürt ve Türk kırsal gerçekliği).",
    "presentation": {
      "explanation": "Yılmaz Güney (1937–1984 - Adana & Paris) and revolutionary Turkish political cinema:\n- **Yılmaz Güney (\"Çirkin Kral\" / The Ugly King)**:\n  - Legend of Turkish cinema; actor, novelist, and political dissident director;\n- The Legendary Feat of Directing from Prison:\n  - While imprisoned for political beliefs in Isparta, Güney wrote meticulously detailed scene-by-scene directorial instructions and camera blueprints, which his assistant director **Şerif Gören** executed on location across Turkey;\n  - In 1981, Güney escaped from prison, smuggled the raw 35mm film negatives to Switzerland and Paris, edited the film in secret, and brought it to Cannes.\n- Masterpiece: **«Yol» (The Road - 1982)**:\n  - Won the **Palme d'Or (Altın Palmiye) at the Cannes Film Festival (1982)** (tied with Costa-Gavras's *Missing*), becoming the **first Turkish film in history to win the Palme d'Or**;\n  - Follows 5 prisoners granted a one-week furlough to visit their families across Turkey, discovering that the outside world is an even more suffocating prison of patriarchal honor killings, feudal traditions, and martial law; *«Sürü» (The Herd - 1978)*.",
      "examples": [
        {
          "target": "Yılmaz Güney'in cezaevinden yönettiği «Yol» filmi 1982'de Cannes'da Altın Palmiye kazanarak Türk sinema tarihinin ilk büyük dünya zaferine imza attı.",
          "reading": "Yıl-maz Gü-ney-in ce-za-e-veen-den yö-net-tee-yee Yol...",
          "translation": "Yılmaz Güney's film \"Yol,\" directed from prison, won the Palme d'Or at Cannes in 1982, achieving the first great world victory in Turkish film history."
        }
      ],
      "mnemonics": [
        "Yılmaz Güney (Çirkin Kral & Yol - First Turkish Palme d'Or 1982)! Directed from Isparta prison with Şerif Gören! Sürü 1978! Feudal honor and martial law!"
      ],
      "culturalNotes": [
        "*Yol* was banned from public screening in Turkey for 17 years due to state censorship, receiving its first official Turkish cinema premiere only in 1999."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Turkish filmmaker directed \"Yol\" from prison through assistant Şerif Gören, winning the first Palme d'Or for Turkey at Cannes in 1982?",
          "options": [
            "Yılmaz Güney",
            "Atıf Yılmaz",
            "Ömer Kavur",
            "Nuri Bilge Ceylan"
          ],
          "answerIndex": 0,
          "explanation": "Yılmaz Güney."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What popular cinematic nickname was given to actor and director Yılmaz Güney throughout the Yeşilçam film era?",
          "options": [
            "«Çirkin Kral»",
            "«Altın Çocuk»",
            "«Mavi Gözlü Dev»",
            "«Taşralı»"
          ],
          "answerIndex": 0,
          "explanation": "«Çirkin Kral» (The Ugly King)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Yol portrays Turkey under martial law as a vast open-air prison where rigid patriarchal customs and state authoritarianism crush human freedom.\"",
          "options": [
            "Yol filmi bir komedi dizisidir.",
            "Yılmaz Güney hiç hapse girmemiştir.",
            "Yol filmi Hollywood stüdyolarında çekilmiştir.",
            "Yol, sıkıyönetim altındaki Türkiye'yi katı ataerkil geleneklerin ve devlet otoriterliğinin insan özgürlüğünü ezdiği devasa bir açık hava hapishanesi olarak tasvir eder."
          ],
          "answerIndex": 3,
          "explanation": "Accurate political cinema translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How many prisoners on a one-week holiday furlough from prison are followed in the interwoven narratives of *Yol* (1982)?",
          "options": [
            "İki mahkûm",
            "Yirmi mahkûm",
            "Beş mahkûm",
            "Yalnızca bir mahkûm"
          ],
          "answerIndex": 2,
          "explanation": "Beş mahkûm (Five prisoners).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Palme d'Or from Prison"
  },
  "tr-u25-l3": {
    "id": "tr-u25-l3",
    "unit": "tr-u25",
    "level": "C1",
    "objective": "Transnational Identity & The German-Turkish Bridge: Fatih Akın (Fatih Akın - Duvara Karşı 2004 - Berlin Altın Ayı, Yaşamın Kıyısında 2007 - Cannes En İyi Senaryo, Paramparça 2017 - Altın Küre, Sibel Kekilli, Birol Ünel, punk enerjisi ve İstanbul müziği).",
    "presentation": {
      "explanation": "Fatih Akın (1973–present - Hamburg) and transnational German-Turkish auteur cinema:\n- **Fatih Akın**:\n  - Born in Hamburg to Turkish immigrant parents; became the vital cultural bridge between German and Turkish cinema.\n- Masterpieces & International Honors:\n  - **«Duvara Karşı» (Head-On / Gegen die Wand - 2004)**: Won the **Golden Bear (Altın Ayı) at the Berlin International Film Festival** (the first German film to win in 18 years); visceral punk-energy love story between suicidal Turkish-German outcasts Cahit (Birol Ünel) and Sibel (Sibel Kekilli), punctuated by traditional Turkish classical music ensemble choruses performing along the Bosphorus shoreline;\n  - **«Yaşamın Kıyısında» (The Edge of Heaven - 2007)**: Won **Best Screenplay at Cannes**; interlocking generational journeys between Hamburg, Istanbul, and the Black Sea coast;\n  - **«Crossing the Bridge: The Sound of Istanbul» (2005)**: Documentary featuring Alexander Hacke capturing the musical diversity of Istanbul;\n  - **«Paramparça» (In the Fade - 2017)**: Won the Golden Globe for Best Foreign Language Film (starring Diane Kruger).",
      "examples": [
        {
          "target": "Fatih Akın «Duvara Karşı» ile Berlin'de Altın Ayı kazanarak Türk-Alman kimliğini, punk enerjisini ve İstanbul'un müzikal ruhunu dünya sinemasına taşıdı.",
          "reading": "Fa-tih A-kın Du-va-ra Kar-şı i-le...",
          "translation": "With \"Head-On,\" Fatih Akin won the Golden Bear in Berlin, bringing Turkish-German identity, punk energy, and Istanbul's musical soul to world cinema."
        }
      ],
      "mnemonics": [
        "Fatih Akın (Duvara Karşı 2004 - Golden Bear Berlin)! Birol Ünel & Sibel Kekilli! Yaşamın Kıyısında (Cannes Best Screenplay 2007)! Crossing the Bridge!"
      ],
      "culturalNotes": [
        "In *Duvara Karşı*, Akın staged musical interludes by the legendary classical Turkish singer Selim Sesler and Idil Üner on a wooden pier in front of Istanbul's Ortaköy Mosque as a Greek-chorus structural device."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which German-Turkish director won the Golden Bear at the Berlin Film Festival for \"Duvara Karşı\" (Head-On) in 2004 and directed \"The Edge of Heaven\"?",
          "options": [
            "Fatih Akın",
            "Ferzan Özpetek",
            "Nuri Bilge Ceylan",
            "Kutluğ Ataman"
          ],
          "answerIndex": 0,
          "explanation": "Fatih Akın."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which actress delivered her breakout raw performance as Sibel in Fatih Akın's Golden Bear-winning *Duvara Karşı* (2004)?",
          "options": [
            "Sibel Kekilli",
            "Derya Alabora",
            "Nurgül Yeşilçay",
            "Berna Lâçin"
          ],
          "answerIndex": 0,
          "explanation": "Sibel Kekilli."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Head-On channels raw punk rock fury and traditional Turkish classical song to explore the visceral friction of second-generation immigrant identity in Germany.\"",
          "options": [
            "Fatih Akın sadece sessiz belgeseller çeker.",
            "Duvara Karşı bir çocuk filmidir.",
            "Duvara Karşı, Almanya'daki ikinci nesil göçmen kimliğinin sarsıcı çatışmasını keşfetmek için ham punk rock öfkesiyle geleneksel Türk sanat müziğini harmanlar.",
            "Crossing the Bridge Tokyo sokaklarında çekilmiştir."
          ],
          "answerIndex": 2,
          "explanation": "Accurate transnational cinema translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What music documentary directed by Fatih Akın explores the underground and traditional musical tapestry of Istanbul with bassist Alexander Hacke?",
          "options": [
            "«Soul Kitchen»",
            "«Crossing the Bridge: The Sound of Istanbul»",
            "«İstanbul Hatırası»",
            "«Aşka Ruhunu Kat»"
          ],
          "answerIndex": 1,
          "explanation": "«Crossing the Bridge: The Sound of Istanbul».",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Transnational Identity & The German-Turkish Bridge"
  },
  "tr-u25-l4": {
    "id": "tr-u25-l4",
    "unit": "tr-u25",
    "level": "C2",
    "objective": "Existential Despair & The Underground Fate: Zeki Demirkubuz (Zeki Demirkubuz - Masumiyet 1997 ve Haluk Bilginer tiradı, Kader 2006, Yeraltı 2012 - Dostoyevski uyarlaması, kapı metaforu ve kadercilik, taşra sıkıntısı).",
    "presentation": {
      "explanation": "Zeki Demirkubuz (1964–present - Isparta & Istanbul) and Turkish philosophical existentialism:\n- **Zeki Demirkubuz**:\n  - The Dostoevskian moral philosopher of Turkish cinema; independent auteur who finances his own films to maintain absolute creative freedom;\n- Masterpieces & Existential Themes:\n  - **«Masumiyet» (Innocence - 1997)**: Follows ex-convict Yusuf encountering Bekir (played by **Haluk Bilginer**) and prostitute Uğur (Derya Alabora) in a rundown Izmir flophouse hotel;\n  - **The Legendary Haluk Bilginer Monologue**: A 9-minute single-take confession in a tea-house where Bekir describes his agonizing, hopeless obsession with Uğur across decades (*\"O günden sonra her şey değişti... Ben o gün bittim\"*), hailed as the greatest monologue in Turkish acting history;\n  - **«Kader» (Destiny - 2006 - Golden Orange Best Picture)**: Prequel exploring the youth of Bekir (Ufuk Bayraktar) and Uğur (Vildan Atasever);\n  - **«Yeraltı» (Inside - 2012)**: Modern adaptation of Fyodor Dostoevsky's *Notes from Underground*;\n  - The Recurring Motif: Creaking open and closing doors (**Açılan ve kapanan kapılar**) symbolizing the inescapability of fate.",
      "examples": [
        {
          "target": "Zeki Demirkubuz «Masumiyet» ve «Kader» ile Türk sinemasına Dostoyevski derinliğini aşılamış, Haluk Bilginer'in tiradıyla sinema tarihine geçmiştir.",
          "reading": "Ze-ki De-meer-koo-buz Ma-soo-mee-yet ve Ka-der i-le...",
          "translation": "With \"Innocence\" and \"Destiny,\" Zeki Demirkubuz infused Dostoevskian depth into Turkish cinema, entering film history with Haluk Bilginer's monologue."
        }
      ],
      "mnemonics": [
        "Zeki Demirkubuz (Masumiyet 1997 & Kader 2006)! Haluk Bilginer 9-minute tea-house tiradı! Yeraltı 2012 (Dostoevsky Notes from Underground)! The creaking door motif!"
      ],
      "culturalNotes": [
        "Haluk Bilginer won the International Emmy Award for Best Actor in 2019 for his performance as Agâh Beyoğlu in the miniseries *Şahsiyet* (Persona)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Turkish director created the existential cult classics \"Masumiyet\" (1997) and \"Kader\" (2006), famous for their Dostoevskian themes?",
          "options": [
            "Semih Kaplanoğlu",
            "Reha Erdem",
            "Zeki Demirkubuz",
            "Nuri Bilge Ceylan"
          ],
          "answerIndex": 2,
          "explanation": "Zeki Demirkubuz."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which Emmy-winning master Turkish actor delivered the legendary 9-minute motel monologue as Bekir in Zeki Demirkubuz's *Masumiyet* (1997)?",
          "options": [
            "Uğur Yücel",
            "Haluk Bilginer",
            "Çetin Tekindor",
            "Şener Şen"
          ],
          "answerIndex": 1,
          "explanation": "Haluk Bilginer."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Demirkubuz's cinema investigates the destructive power of unrequited romantic obsession, guilt, and the inescapable entrapment of destiny.\"",
          "options": [
            "Masumiyet bir çocuk çizgi filmidir.",
            "Demirkubuz sineması, karşılıksız romantik saplantının yıkıcı gücünü, suçluluk duygusunu ve kaderin kaçınılmaz kıskacını irdeler.",
            "Haluk Bilginer hiç sinema filmlerinde rol almamıştır.",
            "Zeki Demirkubuz bir aksiyon filmi dublörüdür."
          ],
          "answerIndex": 1,
          "explanation": "Accurate existential cinema translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which Russian literary master's *Notes from Underground* was adapted by Zeki Demirkubuz in his 2012 Ankara-based film *Yeraltı*?",
          "options": [
            "Fyodor Dostoyevski",
            "Anton Çehov",
            "Nikolay Gogol",
            "Lev Tolstoy"
          ],
          "answerIndex": 0,
          "explanation": "Fyodor Dostoyevski.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Existential Despair & The Underground Fate"
  },
  "tr-u25-l5": {
    "id": "tr-u25-l5",
    "unit": "tr-u25",
    "level": "C2",
    "objective": "C2 synthesis on The Golden Age of Yeşilçam & Humanist Comedy: Ertem Eğilmez and The Bandit (Yeşilçam Sineması, Ertem Eğilmez - Hababam Sınıfı, Münir Özkul ve Adile Naşit, Yavuz Turgul ve Şener Şen - Eşkıya 1996, Türk sinemasının yeniden doğuşu).",
    "presentation": {
      "explanation": "The golden legacy of Yeşilçam and the modern renaissance with *Eşkıya* (1996):\n- **Yeşilçam (The Golden Era of Turkish Cinema - 1960s–1970s on Yeşilçam Street, Beyoğlu)**:\n  - Produced hundreds of beloved popular family dramas and comedies;\n  - **Ertem Eğilmez (Arzu Film)**: Master of warm, choral family humanism; created **«Hababam Sınıfı» (The Chaos Class - based on Rıfat Ilgaz's novel)**, starring beloved ensemble actors **Münir Özkul (Kel Mahmut)**, **Adile Naşit (Hafize Ana)**, Kemal Sunal (İnek Şaban), Tarık Akan, and Halit Akçatepe;\n- The Historic Rebirth: **«Eşkıya» (The Bandit - 1996 - Directed by Yavuz Turgul)**:\n  - Single-handedly rescued Turkish cinema from near-total extinction following the 1980s video slump (selling 2.6 million tickets);\n  - Starring **Şener Şen** as Baran, an aging Kurdish mountain bandit released after 35 years in prison, traveling to chaotic modern Istanbul to confront former friend Berfo and save his lost love Keje; culminating on an Istanbul rooftop overlooking the Golden Horn.",
      "examples": [
        {
          "target": "Ertem Eğilmez'in «Hababam Sınıfı» ile Yeşilçam'ın sıcak aile sevgisi ve Yavuz Turgul'un Şener Şen'li «Eşkıya»sı, Türk sinemasının kalbinde taht kurmuştur.",
          "reading": "Er-tem E-yil-me-zin Ha-ba-bam Sı-nı-fı i-le...",
          "translation": "Ertem Eğilmez's \"Hababam Sınıfı\" with Yeşilçam's warm family love and Yavuz Turgul's \"The Bandit\" starring Şener Şen reignited the soul of Turkish cinema."
        }
      ],
      "mnemonics": [
        "Yeşilçam Sineması (Beyoğlu golden age)! Ertem Eğilmez (Hababam Sınıfı & Münir Özkul, Adile Naşit, Kemal Sunal)! Yavuz Turgul & Şener Şen (Eşkıya 1996 rebirth)!"
      ],
      "culturalNotes": [
        "The iconic line spoken by Mahmut Hoca (Münir Özkul) in *Hababam Sınıfı* defines Turkish educational ethics: *\"Okul sadece dört yanı duvarla çevrili, tepesinde dam olan yer değildir. Okul her yerdir.\"* (School is not just a place with four walls and a roof. School is everywhere)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which historic 1996 film directed by Yavuz Turgul, starring Şener Şen as Baran the bandit, revitalized the modern Turkish film industry?",
          "options": [
            "«Eşkıya»",
            "«Gönül Yarası»",
            "«Av Mevsimi»",
            "«Muhsin Bey»"
          ],
          "answerIndex": 0,
          "explanation": "«Eşkıya» (The Bandit)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which master comedic actor portrayed the beloved character \"İnek Şaban\" across Ertem Eğilmez's *Hababam Sınıfı* series?",
          "options": [
            "Şener Şen",
            "İlyas Salman",
            "Zeki Alasya",
            "Kemal Sunal"
          ],
          "answerIndex": 3,
          "explanation": "Kemal Sunal."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The Bandit brought millions of spectators back to movie theaters in 1996, revitalizing Turkish cinema through a poignant clash between ancient bandit honor and modern urban crime.\"",
          "options": [
            "Eşkıya, 1996 yılında milyonlarca seyirciyi sinema salonlarına geri çekerek, kadim eşkıya onuru ile modern kent suçlarının çatışması üzerinden Türk sinemasına yeniden hayat verdi.",
            "Yeşilçam Ankara'da bir dağ köyüdür.",
            "Hababam Sınıfı bir uzay filmiydi.",
            "Şener Şen bir opera orkestrası şefidir."
          ],
          "answerIndex": 0,
          "explanation": "Accurate Turkish cinema history translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What historic street in Istanbul's Beyoğlu district gave its name to the entire golden age of Turkish commercial film production?",
          "options": [
            "Bağdat Caddesi",
            "Nispetiye Caddesi",
            "İstiklal Caddesi",
            "Yeşilçam Sokağı"
          ],
          "answerIndex": 3,
          "explanation": "Yeşilçam Sokağı.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "C2 synthesis on The Golden Age of Yeşilçam & Humanist Comedy"
  },
  "tr-u26-l1": {
    "id": "tr-u26-l1",
    "unit": "tr-u26",
    "level": "C1",
    "objective": "The Architect of Modern Turkish Theater: Muhsin Ertuğrul and Darülbedayi (Muhsin Ertuğrul - Darülbedayi / İstanbul Şehir Tiyatroları, modern tiyatronun kurucusu, Bedia Muvahhit ve Afife Jale - ilk Türk kadın tiyatrocular, Shakespeare çevirileri ve tiyatro disiplini).",
    "presentation": {
      "explanation": "Muhsin Ertuğrul (1892–1979 - Istanbul) and the founding of modern Turkish theatrical institutions:\n- **Muhsin Ertuğrul**:\n  - The Father of Modern Turkish Theater and Cinema; trained in Paris, Berlin, and the Moscow Art Theatre under Stanislavski;\n  - Transformed the Ottoman Imperial Conservatory (**Darülbedayi-i Osmanî - Founded 1914 by André Antoine**) into the modern **Istanbul City Theatres (İstanbul Şehir Tiyatroları)** and founded the State Theatres (*Devlet Tiyatroları*);\n- Champion of Female Pioneer Actors:\n  - **Afife Jale (1902–1941)**: The **first Muslim Turkish woman to step onto a theatrical stage** (playing Emel in *Tatlı Sır* in Kadıköy in 1920 under police raids);\n  - **Bedia Muvahhit (1897–1994)**: Personally encouraged by Mustafa Kemal Atatürk in 1923 in Izmir to play the female lead in *Ateşten Gömlek*;\n- Institutional Legacy: Staging Shakespeare across Anatolia; establishing modern stage lighting, acting ensembles, children's theatres, and rigorous rehearsal discipline.",
      "examples": [
        {
          "target": "Muhsin Ertuğrul Darülbedayi'yi İstanbul Şehir Tiyatroları'na dönüştürerek, Afife Jale ve Bedia Muvahhit gibi öncülerle modern Türk tiyatrosunun temelini attı.",
          "reading": "Muh-sin Er-tuğ-rul Da-rül-be-da-yi-yi...",
          "translation": "Muhsin Ertuğrul transformed Darülbedayi into the Istanbul City Theatres, laying the foundation of modern Turkish theater with pioneers like Afife Jale and Bedia Muvahhit."
        }
      ],
      "mnemonics": [
        "Muhsin Ertuğrul (Father of Modern Turkish Theater & Darülbedayi 1914)! Afife Jale (First Muslim Turkish actress on stage 1920)! Bedia Muvahhit & Atatürk! İstanbul Şehir Tiyatroları!"
      ],
      "culturalNotes": [
        "The prestigious *Afife Tiyatro Ödülleri* (Afife Theatre Awards), held annually at the Haliç Congress Center in Istanbul, are the Turkish equivalent of the Tony Awards, honoring Afife Jale's pioneer courage."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which visionary director and actor is revered as the founder of modern Turkish theatre, leading Darülbedayi and the Istanbul City Theatres?",
          "options": [
            "Haldun Taner",
            "Genco Erkal",
            "Kenter Kardeşler",
            "Muhsin Ertuğrul"
          ],
          "answerIndex": 3,
          "explanation": "Muhsin Ertuğrul."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Who made history in 1920 as the first Muslim Turkish female stage actress, braving police raids in Istanbul to perform on stage?",
          "options": [
            "Bedia Muvahhit",
            "Afife Jale",
            "Yıldız Kenter",
            "Gülriz Sururi"
          ],
          "answerIndex": 1,
          "explanation": "Afife Jale."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Muhsin Ertuğrul instituted strict rehearsal discipline and established municipal repertory stages, bridging Western classical dramaturgy with the emerging Turkish Republic.\"",
          "options": [
            "Muhsin Ertuğrul hiç tiyatro oyunu yönetmemiştir.",
            "Darülbedayi bir uzay araştırma merkezidir.",
            "Afife Jale tiyatro sahnesine çıkmayı reddetmiştir.",
            "Muhsin Ertuğrul, sıkı prova disiplini getirerek ve belediye repertuar sahneleri kurarak, Batı klasik tiyatrosu ile yeni kurulan Türkiye Cumhuriyeti arasında köprü kurdu."
          ],
          "answerIndex": 3,
          "explanation": "Accurate Turkish theater history translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What historic Ottoman performing arts conservatory, founded in 1914 with French director André Antoine, became the Istanbul City Theatres?",
          "options": [
            "Mekteb-i Sultani",
            "Darülelhan",
            "Darülbedayi",
            "Encümen-i Dâniş"
          ],
          "answerIndex": 2,
          "explanation": "Darülbedayi.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Architect of Modern Turkish Theater"
  },
  "tr-u26-l2": {
    "id": "tr-u26-l2",
    "unit": "tr-u26",
    "level": "C1",
    "objective": "Epic Theatrical Satire & Epopees: Haldun Taner and Keşanlı Ali Destanı (Haldun Taner - Keşanlı Ali Destanı 1964, epik tiyatro ve geleneksel Türk seyirlik oyunları, Yalçın Tura müziği, Devekuşu Kabare 1967 - Zeki Alasya ve Metin Akpınar, Gözlerimi Kaparım Vazifemi Yaparım).",
    "presentation": {
      "explanation": "Haldun Taner (1915–1986 - Istanbul) and the invention of authentic Turkish Epic Cabaret Theatre:\n- **Haldun Taner**:\n  - The master satirist, short story writer, and dramatist; synthesized Bertolt Brecht's Epic Theatre with traditional Turkish folk performance (*Meddah*, *Karagöz*, *Ortaoyunu*).\n- The Monumental Masterpiece: **«Keşanlı Ali Destanı» (The Ballad of Ali of Keshan - 1964 - Music by Yalçın Tura)**:\n  - The **first Turkish musical play to achieve worldwide acclaim** (performed in Berlin, London, Prague, Budapest, Beirut);\n  - Set in the impoverished shantytown (*gecekondu*) of Sinekli Dağ in Istanbul;\n  - Ali is framed and imprisoned for a murder he did not commit; while in prison, the real killer dies, and the shantytown dwellers transform Ali into a mythic heroic folk outlaw (*Destan*);\n  - When released, Ali realizes he must play the role of the fearless hero to protect the shantytown from corrupt landlords and politicians, culminating in a bitter, brilliant satire of political mythmaking and populism.\n- The Legendary **Devekuşu Kabare (Ostrich Cabaret - Founded 1967 by Haldun Taner, Ahmet Gülhan, Zeki Alasya, and Metin Akpınar)**: The golden age of political cabaret satire in Turkey.",
      "examples": [
        {
          "target": "Haldun Taner «Keşanlı Ali Destanı» ile epik tiyatroyu Türk seyirlik oyunlarıyla harmanlamış ve Devekuşu Kabare ile siyasi mizahın zirvesini kurmuştur.",
          "reading": "Hal-doon Ta-ner Ke-şan-lı A-li Des-ta-nı i-le...",
          "translation": "Haldun Taner blended epic theater with traditional Turkish folk performance in \"The Ballad of Ali of Keshan\" and founded the pinnacle of political satire with Devekuşu Kabare."
        }
      ],
      "mnemonics": [
        "Haldun Taner (Keşanlı Ali Destanı 1964 & Epic Satire)! Sinekli Dağ shantytown & Yalçın Tura music! Devekuşu Kabare 1967 (Zeki Alasya & Metin Akpınar)! Gözlerimi Kaparım Vazifemi Yaparım!"
      ],
      "culturalNotes": [
        "The famous song *«Morg Tiroidi»* and the iconic opening chorus *«Sinekli Dağ burası, Şehre tepeden bakar...»* composed by Yalçın Tura remain eternal classics of Turkish musical theater."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Turkish playwright wrote the world-famous epic musical \"Keşanlı Ali Destanı\" (1964) and co-founded the legendary Devekuşu Kabare?",
          "options": [
            "Haldun Taner",
            "Orhan Asena",
            "Turgut Özakman",
            "Aziz Nesin"
          ],
          "answerIndex": 0,
          "explanation": "Haldun Taner."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What legendary comedy duo starred in Haldun Taner's iconic Devekuşu Kabare productions across decades?",
          "options": [
            "Zeki Alasya ve Metin Akpınar",
            "Münir Özkul ve Adile Naşit",
            "Kemal Sunal ve Halit Akçatepe",
            "Şener Şen ve İlyas Salman"
          ],
          "answerIndex": 0,
          "explanation": "Zeki Alasya ve Metin Akpınar."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The Ballad of Ali of Keshan combines Brechtian alienation techniques with traditional Meddah folk comedy to satirize how society manufactures heroic political myths.\"",
          "options": [
            "Keşanlı Ali Destanı bir uzay operasıdır.",
            "Haldun Taner hiçbir zaman tiyatro yazmamıştır.",
            "Keşanlı Ali Destanı, toplumun kahramanlık ve siyasi mitleri nasıl ürettiğini hicvetmek için Brecht'çi yabancılaştırma tekniklerini geleneksel Meddah halk mizahıyla harmanlar.",
            "Devekuşu Kabare çocuklara yönelik bir bale okuludur."
          ],
          "answerIndex": 2,
          "explanation": "Accurate Haldun Taner analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What fictional Istanbul shantytown perched on the hills serves as the setting for *Keşanlı Ali Destanı*?",
          "options": [
            "Çamlıca",
            "Sinekli Dağ",
            "Sarıyer",
            "Kandilli"
          ],
          "answerIndex": 1,
          "explanation": "Sinekli Dağ.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Epic Theatrical Satire & Epopees"
  },
  "tr-u26-l3": {
    "id": "tr-u26-l3",
    "unit": "tr-u26",
    "level": "C1",
    "objective": "The Titan of Political Solo Performance: Genco Erkal and Dostlar Tiyatrosu (Genco Erkal - Dostlar Tiyatrosu 1969, Bir Delinin Hatıra Defteri 1965 - Gogol tek kişilik oyun, Nâzım Hikmet epikleri - Kerem Gibi, Fazıl Say ile Güneşin Sofrasında, 60 yıllık sahne direnişi).",
    "presentation": {
      "explanation": "Genco Erkal (1938–2024 - Istanbul) and the monument of Turkish political solo theatre:\n- **Genco Erkal**:\n  - The titan of political stage performance; founder of **Dostlar Tiyatrosu (1969)**; performed continuously for over 60 years on stage;\n- Landmark Masterpieces & Solo Virtuosity:\n  - **«Bir Delinin Hatıra Defteri» (Diary of a Madman - Gogol - Premiere 1965)**:\n    - The **first solo one-man play in Turkish theatrical history**;\n    - Erkal played minor clerk Aksenty Poprishchin descending into madness for 50 years to sold-out generations across Turkey;\n  - **The Nâzım Hikmet Epics**: Transforming the monumental poetry of **Nâzım Hikmet** into visceral stage epics (*«Kerem Gibi»*, *«Kuvâyi Milliye Destanı»*, *«Yaşamaya Dair»*, *«Güneşin Sofrasında»* alongside pianist **Fazıl Say**);\n  - Defiant Theatrical Courage: Performing in open-air amphitheatres, courtyards, and warehouses when state theatres cancelled venues, standing as an uncompromising beacon of intellectual freedom.",
      "examples": [
        {
          "target": "Genco Erkal Dostlar Tiyatrosu'nda «Bir Delinin Hatıra Defteri» ve Nâzım Hikmet destanlarıyla altmış yıl boyunca Türk tiyatro sahnesinin vicdanı oldu.",
          "reading": "Gen-co Er-kal Dost-lar Ti-yat-ro-sun-da...",
          "translation": "At Dostlar Tiyatrosu, with \"Diary of a Madman\" and Nâzım Hikmet epics, Genco Erkal served as the conscience of the Turkish theater stage for sixty years."
        }
      ],
      "mnemonics": [
        "Genco Erkal (Dostlar Tiyatrosu 1969 & 60 years of stage mastery)! Bir Delinin Hatıra Defteri 1965 (First Turkish solo play)! Nâzım Hikmet poems on stage! Fazıl Say collaboration!"
      ],
      "culturalNotes": [
        "Genco Erkal won the Golden Orange (*Altın Portakal*) for Best Actor twice for his film performances in *At* (1982) and *Faize Hücum* (1983)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Turkish actor and director founded Dostlar Tiyatrosu and performed the historic one-man play \"Bir Delinin Hatıra Defteri\" for over 50 years?",
          "options": [
            "Genco Erkal",
            "Müşfik Kenter",
            "Ferhan Şensoy",
            "Cüneyt Gökçer"
          ],
          "answerIndex": 0,
          "explanation": "Genco Erkal."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Whose monumental political poetry was adapted into acclaimed stage productions by Genco Erkal in *Yaşamaya Dair* and *Kerem Gibi*?",
          "options": [
            "Nâzım Hikmet",
            "Attilâ İlhan",
            "Orhan Veli Kanık",
            "Ahmet Hamdi Tanpınar"
          ],
          "answerIndex": 0,
          "explanation": "Nâzım Hikmet."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Genco Erkal pioneered modern solo performance in Turkey, turning Gogol's satire and Nazim Hikmet's verses into electrifying acts of civic and theatrical conscience.\"",
          "options": [
            "Genco Erkal bir opera tenoru olarak Paris'te yaşadı.",
            "Genco Erkal, Gogol'ün hicvini ve Nâzım Hikmet'in dizelerini sarsıcı bir sivil ve tiyatral vicdan eylemine dönüştürerek Türkiye'de modern tek kişilik oyunculuğun öncüsü oldu.",
            "Bir Delinin Hatıra Defteri bir çizgi filmdir.",
            "Dostlar Tiyatrosu 2023 yılında kurulmuştur."
          ],
          "answerIndex": 1,
          "explanation": "Accurate Genco Erkal analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What historic Istanbul theater company was founded in 1969 by Genco Erkal, Mehmet Akan, and Şevket Altuğ?",
          "options": [
            "Dostlar Tiyatrosu",
            "Ortaoyuncular",
            "Oyun Atölyesi",
            "Kent Oyuncuları"
          ],
          "answerIndex": 0,
          "explanation": "Dostlar Tiyatrosu.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Titan of Political Solo Performance"
  },
  "tr-u26-l4": {
    "id": "tr-u26-l4",
    "unit": "tr-u26",
    "level": "C2",
    "objective": "Linguistic Subversion & The Ses Tiyatrosu: Ferhan Şensoy (Ferhan Şensoy - Ortaoyuncular 1980, Ses Tiyatrosu (Beyoğlu), Şahları da Vururlar 1980, Ferhangi Şeyler 1987 - 2000+ gösterim, İsmail Dümbüllü kavuğu geleneği).",
    "presentation": {
      "explanation": "Ferhan Şensoy (1951–2021 - Çarşamba, Samsun & Istanbul) and the radical linguistic universe of Ortaoyuncular:\n- **Ferhan Şensoy**:\n  - The master of linguistic wordplay, subversive humor, and traditional Ottoman-Turkish theatre synthesis; trained in Strasbourg and Canada with Jérôme Savary and André-Louis Perinetti.\n- The Historic Theatre & Company: **Ortaoyuncular (Founded 1980)** at the historic **Ses Tiyatrosu (Ses-Operet 1885)** in Beyoğlu, which Şensoy personally renovated and rescued from destruction.\n- Landmark Masterpieces:\n  - **«Şahları da Vururlar» (They Shoot the Shahs Too - 1980)**: Brilliant political satire of the Iranian Revolution, playing to sold-out crowds during the Turkish martial law era;\n  - **«Ferhangi Şeyler» (1987–2021)**: The legendary solo monologue performance staged by Şensoy over **2,000 times across 34 years**, reviewing the daily morning newspapers, smoking cigarettes, playing the saz, and roasting politicians and neighborhood grocers;\n- **The Tradition of Dümbüllü's Kavuk (İsmail Dümbüllü Kavuğu)**:\n  - The sacred symbol of Turkish comedy and master jester lineage (Kel Hasan Efendi $\\to$ İsmail Dümbüllü $\\to$ Münir Özkul $\\to$ **Ferhan Şensoy** $\\to$ Rasim Öztekin $\\to$ Şevket Çoruh).",
      "examples": [
        {
          "target": "Ferhan Şensoy Ortaoyuncular ve Ses Tiyatrosu'nda «Ferhangi Şeyler» ve «Şahları da Vururlar» ile Türkçenin sınırlarını zorlayan eşsiz bir mizah evreni kurdu.",
          "reading": "Fer-han Şen-soy Or-ta-o-yun-cu-lar ve Ses Ti-yat-ro-sun-da...",
          "translation": "At Ortaoyuncular and Ses Tiyatrosu, with \"Ferhangi Şeyler\" and \"They Shoot the Shahs Too,\" Ferhan Şensoy built a unique comedic universe pushing the boundaries of the Turkish language."
        }
      ],
      "mnemonics": [
        "Ferhan Şensoy (Ortaoyuncular 1980 & Ses Tiyatrosu in Beyoğlu)! Ferhangi Şeyler 1987 (Over 2,000 performances)! Dümbüllü Kavuğu (From Münir Özkul to Ferhan)! Şahları da Vururlar!"
      ],
      "culturalNotes": [
        "Ferhan Şensoy held the sacred *Dümbüllü Kavuğu* for 27 years (1989–2016) before formally handing it down to his beloved ensemble colleague Rasim Öztekin on the stage of Ses Tiyatrosu."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Turkish playwright and satirist founded Ortaoyuncular at the historic Ses Tiyatrosu and performed \"Ferhangi Şeyler\" over 2,000 times?",
          "options": [
            "Nejat Uygur",
            "Levent Kırca",
            "Ferhan Şensoy",
            "Genco Erkal"
          ],
          "answerIndex": 2,
          "explanation": "Ferhan Şensoy."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What historic symbolic headpiece (*kavuk*), representing the unbroken lineage of Turkish popular comedy, was held by Ferhan Şensoy for 27 years?",
          "options": [
            "Nasreddin Hoca Kavuğu",
            "İsmail Dümbüllü Kavuğu",
            "Padişah Fesi",
            "Süleyman Çelebi Sarığı"
          ],
          "answerIndex": 1,
          "explanation": "İsmail Dümbüllü Kavuğu."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Ferhan Şensoy synthesized traditional Ottoman Ortaoyunu improvised theater with modern absurdist satire, creating an inventive linguistic vocabulary in Ferhangi Şeyler.\"",
          "options": [
            "Ferhan Şensoy, geleneksel Osmanlı doğaçlama Ortaoyununu modern absürt hicivle sentezleyerek, Ferhangi Şeyler'de yaratıcı bir dilsel kelime dağarcığı oluşturdu.",
            "Ferhan Şensoy sadece sessiz pantomim gösterileri yapardı.",
            "İsmail Dümbüllü kavuğu bir denizcilik ödülüdür.",
            "Ses Tiyatrosu bir futbol stadyumudur."
          ],
          "answerIndex": 0,
          "explanation": "Accurate Ferhan Şensoy analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In which historic 1885 theater building on İstiklal Avenue in Beyoğlu did Ferhan Şensoy establish the permanent stage for Ortaoyuncular?",
          "options": [
            "Muammer Karaca Tiyatrosu",
            "Şan Tiyatrosu",
            "Kenter Tiyatrosu",
            "Ses Tiyatrosu"
          ],
          "answerIndex": 3,
          "explanation": "Ses Tiyatrosu.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Linguistic Subversion & The Ses Tiyatrosu"
  },
  "tr-u26-l5": {
    "id": "tr-u26-l5",
    "unit": "tr-u26",
    "level": "C2",
    "objective": "C2 synthesis on Independent Stages & Acting Royalty: The Kenter Dynasty and Contemporary Istanbul Drama (Yıldız Kenter ve Müşfik Kenter - Kent Oyuncuları 1962, Ben Anadolu - Güngör Dilmen, Kenter Tiyatrosu Harbiye, Haluk Bilginer ve Oyun Atölyesi - Antonius ile Kleopatra, Moda Sahnesi ve DOT).",
    "presentation": {
      "explanation": "The Kenter dynasty and the contemporary independent theatrical boom in Istanbul:\n- **The Kenter Dynasty: Yıldız Kenter (1928–2019) and Müşfik Kenter (1932–2012)**:\n  - The grand queen and king of Turkish classical and modern acting; founded **Kent Oyuncuları (1962)** and built the **Kenter Tiyatrosu** in Harbiye with their personal savings;\n  - **Yıldız Kenter**: State Artist, UNICEF Goodwill Ambassador; renowned for her monumental solo tour-de-force **«Ben Anadolu» (I, Anatolia - written for her by Güngör Dilmen)**, portraying 16 historical and mythological women across 4,000 years of Anatolian history (from Hittite goddess Kybele to Byzantine empress Theodora and poet Halide Edib);\n  - **Müşfik Kenter**: Master of nuance and the voice of Orhan Veli Kanık's poetry (*«Bir Garip Orhan Veli»*).\n- **Contemporary Theatrical Epicenters in Istanbul**:\n  - **Oyun Atölyesi (Moda, Kadıköy - Founded 1999 by Haluk Bilginer)**: Staged Shakespeare at Shakespeare's Globe Theatre in London (*Antonius ile Kleopatra*);\n  - **Moda Sahnesi**, **DOT Theatre** (pioneering in-yer-face Scottish/British new writing), and the vibrant Kadıköy independent theater hub.",
      "examples": [
        {
          "target": "Yıldız Kenter'in «Ben Anadolu»daki anıtsal oyunculuğu ve Haluk Bilginer'in Oyun Atölyesi, Türk tiyatrosunun çağdaş dünya standartlarındaki zirvesini temsil eder.",
          "reading": "Yıl-dız Ken-te-rin Ben A-na-do-lu-da-ki...",
          "translation": "Yıldız Kenter's monumental performance in \"I, Anatolia\" and Haluk Bilginer's Oyun Atölyesi represent the summit of Turkish theatre at contemporary world standards."
        }
      ],
      "mnemonics": [
        "Yıldız Kenter (Grand Dame of Turkish Theater & Kent Oyuncuları 1962)! Ben Anadolu (Güngör Dilmen)! Müşfik Kenter (Bir Garip Orhan Veli)! Haluk Bilginer & Oyun Atölyesi in Moda!"
      ],
      "culturalNotes": [
        "Yıldız Kenter trained over 3 generations of leading Turkish stage and film actors as Professor of Drama at Istanbul University State Conservatory."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which grand dame of Turkish theater starred in the legendary solo masterwork \"Ben Anadolu\" (I, Anatolia) and founded Kent Oyuncuları with brother Müşfik Kenter?",
          "options": [
            "Yıldız Kenter",
            "Gülriz Sururi",
            "Zuhal Olcay",
            "Tilbe Saran"
          ],
          "answerIndex": 0,
          "explanation": "Yıldız Kenter."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which award-winning actor founded Oyun Atölyesi in Moda, Kadıköy, and brought Turkish stagings of Shakespeare to Shakespeare's Globe in London?",
          "options": [
            "Genco Erkal",
            "Şener Şen",
            "Uğur Yücel",
            "Haluk Bilginer"
          ],
          "answerIndex": 3,
          "explanation": "Haluk Bilginer."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"I, Anatolia traverses four thousand years of Anatolian civilizational history through the transformative solo embodiment of sixteen archetypal women by Yildiz Kenter.\"",
          "options": [
            "Müşfik Kenter hiç tiyatroda oynamamıştır.",
            "Oyun Atölyesi Ankara'da bir sinema salonudur.",
            "Ben Anadolu bir televizyon yemek yarışmasıdır.",
            "Ben Anadolu, Yıldız Kenter'in on altı arketipik kadını dönüştürücü solo canlandırmasıyla dört bin yıllık Anadolu uygarlık tarihini kateder."
          ],
          "answerIndex": 3,
          "explanation": "Accurate Kenter theater analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which master Turkish playwright wrote the historical solo tour-de-force *Ben Anadolu* specifically for Yıldız Kenter in 1984?",
          "options": [
            "Haldun Taner",
            "Necati Cumalı",
            "Güngör Dilmen",
            "Turgut Özakman"
          ],
          "answerIndex": 2,
          "explanation": "Güngör Dilmen.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "C2 synthesis on Independent Stages & Acting Royalty"
  },
  "tr-u27-l1": {
    "id": "tr-u27-l1",
    "unit": "tr-u27",
    "level": "C1",
    "objective": "The Sovereign Queen of Bel Canto: Leyla Gencer (Leyla Gencer - «La Regina» ve «La Diva Turca», Teatro alla Scala di Milano baş sopranosu, Donizetti ve Verdi rönesansı, unutulmuş 73 rolün yeniden keşfi, Maria Callas ile dostluk, Asolo ve Milano mirası).",
    "presentation": {
      "explanation": "Leyla Gencer (Ayşe Leyla Çeyrekgil - 1928–2008 - Istanbul & Milan) and the supreme height of Turkish operatic Bel Canto:\n- **Leyla Gencer («La Diva Turca» / «La Regina» / The Turkish Diva)**:\n  - The most celebrated opera singer in Turkish history and one of the supreme *Primadonna Assoluta* sopranos of the 20th century;\n  - Reigned as prima donna at **Teatro alla Scala in Milan for over 25 consecutive years (1957–1983)**, starring in world premieres under conductors Herbert von Karajan, Riccardo Muti, Gianandrea Gavazzeni, and Tullio Serafin;\n- The Historic Donizetti & Bel Canto Renaissance:\n  - Single-handedly rediscovered and revived over **73 forgotten and unperformed operatic roles** by Gaetano Donizetti (*Roberto Devereux*, *Lucrezia Borgia*, *Anna Bolena*), Gioachino Rossini, and Giuseppe Verdi;\n  - Renowned for her volcanic dramatic temperament, fiery vocal ornamentation, and legendary floating *pianissimo* on high notes;\n  - Artistic Director of the Academy of Lyric Opera at La Scala (Accademia Teatro alla Scala);\n  - Memorial: In accordance with her will, her ashes were scattered across the waters of the Bosphorus Strait in Istanbul in May 2008.",
      "examples": [
        {
          "target": "Leyla Gencer, «La Diva Turca», Milano La Scala sahnesinde 25 yıl boyunca hüküm sürmüş ve Donizetti operalarını dünya sahnelerine yeniden kazandırmıştır.",
          "reading": "Ley-la Gen-cer La Dee-va Toor-ka...",
          "translation": "Leyla Gencer, \"La Diva Turca,\" reigned on the stage of La Scala in Milan for 25 years and single-handedly restored Donizetti's operas to world stages."
        }
      ],
      "mnemonics": [
        "Leyla Gencer (La Diva Turca & Queen of La Scala for 25 years)! Donizetti & Bel Canto renaissance (73 forgotten roles revived)! Pianissimo high notes! Ashes scattered over the Bosphorus!"
      ],
      "culturalNotes": [
        "The Istanbul Foundation for Culture and Arts (İKSV) organizes the prestigious *Leyla Gencer Voice Competition* in Istanbul, attracting the finest young opera singers from across five continents."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which world-renowned Turkish soprano was known in Italy as \"La Diva Turca\", reigning at Teatro alla Scala in Milan for 25 years?",
          "options": [
            "Semiha Berksoy",
            "Suna Korad",
            "Zehra Yıldız",
            "Leyla Gencer"
          ],
          "answerIndex": 3,
          "explanation": "Leyla Gencer."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In which iconic body of water in Istanbul were Leyla Gencer's ashes scattered in May 2008 in accordance with her final testament?",
          "options": [
            "İstanbul Boğazı",
            "Haliç",
            "Marmara Denizi",
            "Karadeniz"
          ],
          "answerIndex": 0,
          "explanation": "İstanbul Boğazı (The Bosphorus Strait)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Leyla Gencer's scholarly excavations of forgotten 19th-century Donizetti and Verdi scores spearheaded the modern European Bel Canto revival.\"",
          "options": [
            "Leyla Gencer sadece sinema filmlerinde rol almıştır.",
            "Leyla Gencer bir rock gitaristidir.",
            "Leyla Gencer'in 19. yüzyılın unutulmuş Donizetti ve Verdi partisyonlarına yönelik araştırmaları, modern Avrupa Bel Canto rönesansına öncülük etti.",
            "La Scala Tiyatrosu Berlin'de yer almaktadır."
          ],
          "answerIndex": 2,
          "explanation": "Accurate Leyla Gencer musicological translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which historic 19th-century Italian composer's neglected tragic operas (like *Roberto Devereux* and *Maria Stuarda*) were historically restored to world stages by Leyla Gencer?",
          "options": [
            "Giacomo Puccini",
            "Gaetano Donizetti",
            "Antonio Vivaldi",
            "Claudio Monteverdi"
          ],
          "answerIndex": 1,
          "explanation": "Gaetano Donizetti.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Sovereign Queen of Bel Canto"
  },
  "tr-u27-l2": {
    "id": "tr-u27-l2",
    "unit": "tr-u27",
    "level": "C1",
    "objective": "The Pioneer Diva of the Turkish Republic: Semiha Berksoy (Semiha Berksoy - Türkiye'nin ilk profesyonel kadın opera sanatçısı, 1934 Özsoy Operası ve Atatürk, 1939 Berlin Müzik Akademisi mezuniyeti ve Ariadne auf Naxos'ta başrol, dışavurumcu ressam kimliği ve Venedik Bienali).",
    "presentation": {
      "explanation": "Semiha Berksoy (1910–2004 - Istanbul & Berlin) and the dawn of modern Turkish opera:\n- **Semiha Berksoy**:\n  - The **first professional female opera singer of the Republic of Turkey**;\n  - Studied at the Istanbul Conservatory and the Berlin State Academy of Music (Hochschule für Musik) under Paul Lohmann;\n  - Multidisciplinary genius: Legendary dramatic soprano, stage actress, and internationally celebrated expressionist painter (featured at the Venice Biennale and São Paulo Art Biennial);\n- Historic Milestones:\n  - **«Özsoy Operası» (1934 - Composed by Ahmed Adnan Saygun)**: Commissioned by **Mustafa Kemal Atatürk** to honor the state visit of Shah Mohammad Reza Pahlavi of Iran; Semiha Berksoy sang the leading role of **Ayxim**, personally congratulated by Atatürk for inaugurating Western opera in Turkey;\n  - **The 1939 Berlin Sensation**: Became the first Turkish singer to perform a leading role in Europe, starring as the title heroine in Richard Strauss's **«Ariadne auf Naxos»** at the Berlin Academy for Strauss's 75th birthday celebration;\n  - Masterpieces: Verdi's *Il Trovatore* (Azucena), Beethoven's *Fidelio* (Leonore), Puccini's *Tosca* and *Madama Butterfly*.",
      "examples": [
        {
          "target": "Semiha Berksoy, Atatürk'ün huzurunda ilk Türk operası «Özsoy»da sahne alarak ve 1939'da Berlin'de Richard Strauss operasında başrol söyleyerek tarihe geçti.",
          "reading": "Se-mee-ha Berk-soy A-ta-toor-koon...",
          "translation": "Semiha Berksoy made history by performing in the first Turkish opera \"Özsoy\" before Atatürk and singing the lead role in Richard Strauss's opera in Berlin in 1939."
        }
      ],
      "mnemonics": [
        "Semiha Berksoy (First Turkish Female Opera Singer & Expressionist Painter)! Özsoy Operası 1934 (Ahmed Adnan Saygun & Atatürk)! Ariadne auf Naxos in Berlin 1939! Venice Biennale!"
      ],
      "culturalNotes": [
        "Semiha Berksoy lived with passionate artistic fearlessness, performing operatic arias in full dramatic makeup in her 90s, with her bedroom installation exhibited at the Venice Biennale in 2005."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Who made history in 1934 as the first professional female opera singer in Turkey, starring in the first Turkish opera \"Özsoy\" for Atatürk?",
          "options": [
            "Semiha Berksoy",
            "Suna Korad",
            "Belkıs Aran",
            "Leyla Gencer"
          ],
          "answerIndex": 0,
          "explanation": "Semiha Berksoy."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which 1934 historic opera, composed by Ahmed Adnan Saygun on Atatürk's directive, was the first Turkish opera ever staged?",
          "options": [
            "«Özsoy Operası»",
            "«Kerem»",
            "«Yunus Emre»",
            "«Köroğlu»"
          ],
          "answerIndex": 0,
          "explanation": "«Özsoy Operası»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Semiha Berksoy pioneered Western operatic performance in republican Turkey while simultaneously achieving global acclaim as an avant-garde expressionist painter.\"",
          "options": [
            "Özsoy Operası 2010 yılında bestelenmiştir.",
            "Semiha Berksoy, cumhuriyet Türkiyesi'nde Batı operasının öncülüğünü yaparken aynı zamanda avangard bir dışavurumcu ressam olarak dünya çapında takdir topladı.",
            "Semiha Berksoy sadece piyano tamirciliği yapmıştır.",
            "Richard Strauss Türk operası bestelemiştir."
          ],
          "answerIndex": 1,
          "explanation": "Accurate Semiha Berksoy analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What Richard Strauss opera did Semiha Berksoy star in at the Berlin Music Academy in 1939, becoming the first Turkish singer to star in Europe?",
          "options": [
            "«Ariadne auf Naxos»",
            "«Elektra»",
            "«Salome»",
            "«Der Rosenkavalier»"
          ],
          "answerIndex": 0,
          "explanation": "«Ariadne auf Naxos».",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Pioneer Diva of the Turkish Republic"
  },
  "tr-u27-l3": {
    "id": "tr-u27-l3",
    "unit": "tr-u27",
    "level": "C1",
    "objective": "The Turkish Five & The National Polyphonic Synthesis: Ahmed Adnan Saygun and Yunus Emre Oratorio (Ahmed Adnan Saygun - Türk Beşleri (Cemal Reşit Rey, Ulvi Cemal Erkin, Hasan Ferid Alnar, Necil Kâzım Akses), Yunus Emre Oratoryosu 1946, Béla Bartók ile Anadolu folklor araştırmaları, Kerem Operası).",
    "presentation": {
      "explanation": "Ahmed Adnan Saygun (1907–1991 - Izmir & Istanbul) and the polyphonic revolution of \"The Turkish Five\" (Türk Beşleri):\n- **The Turkish Five (Türk Beşleri)**:\n  - The pioneer generation of composers (Ahmed Adnan Saygun, Cemal Reşit Rey, Ulvi Cemal Erkin, Hasan Ferid Alnar, Necil Kâzım Akses) tasked with synthesizing traditional Turkish modal folk music (*Makamlar* and *Aksak* asymmetrical rhythms) with Western polyphonic orchestration.\n- **Ahmed Adnan Saygun**:\n  - Studied at the Schola Cantorum in Paris under Vincent d'Indy; conducted fieldwork across Anatolia with Hungarian composer **Béla Bartók** in 1936 collecting authentic Turkish folk songs.\n- The Monumental Masterpiece: **«Yunus Emre Oratoryosu» (Op. 26 - Composed 1942, Premiered 1946 in Ankara)**:\n  - The **greatest and most celebrated polyphonic choral masterpiece in Turkish history**;\n  - Scored for solo vocalists, massive four-part choir, and full symphony orchestra, setting the mystical Sufi poetry of 13th-century humanist poet **Yunus Emre** (*\"Gel gör beni aşk neyledi...\"*);\n  - Performed in Paris under Saygun (1947), and in New York at the United Nations General Assembly Hall (1958) conducted by **Leopold Stokowski** in English translation;\n  - Masterpieces: **«Kerem Operası» (1953)** & **«Köroğlu»**.",
      "examples": [
        {
          "target": "Ahmed Adnan Saygun «Yunus Emre Oratoryosu» ile Türk tasavvuf felsefesini evrensel senfonik koro müziğine dönüştürmüş, Leopold Stokowski yönetiminde BM Genel Kurulu'nda seslendirilmiştir.",
          "reading": "Ah-med Ad-nan Say-goon Yoo-noos Em-re...",
          "translation": "With the \"Yunus Emre Oratorio,\" Ahmed Adnan Saygun transformed Turkish Sufi philosophy into universal symphonic choral music, performed under Leopold Stokowski at the UN General Assembly."
        }
      ],
      "mnemonics": [
        "Ahmed Adnan Saygun (Türk Beşleri & Bela Bartók Anatolian fieldwork 1936)! Yunus Emre Oratoryosu 1946! Leopold Stokowski at UN 1958! «Kerem Operası»! Makam + Symphony!"
      ],
      "culturalNotes": [
        "Saygun was awarded the *Béla Bartók International Prize* by Hungary and the title of *State Artist* (Devlet Sanatçısı) by Turkey for his monumental contributions to world ethnomusicology."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master composer of \"The Turkish Five\" composed the world-famous \"Yunus Emre Oratorio\" (1946) and conducted folk research with Béla Bartók?",
          "options": [
            "Ahmed Adnan Saygun",
            "Cemal Reşit Rey",
            "Ulvi Cemal Erkin",
            "Necil Kâzım Akses"
          ],
          "answerIndex": 0,
          "explanation": "Ahmed Adnan Saygun."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which 13th-century Anatolian Sufi mystic poet's verses on divine love and human brotherhood were set to music in Saygun's monumental oratorio?",
          "options": [
            "Yunus Emre",
            "Pir Sultan Abdal",
            "Mevlânâ Celâleddîn-i Rûmî",
            "Hacı Bektâş-ı Velî"
          ],
          "answerIndex": 0,
          "explanation": "Yunus Emre."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The Yunus Emre Oratorio synthesizes 13th-century Anatolian Sufi mysticism with monumental Western choral counterpoint and modal Makam scales.\"",
          "options": [
            "Yunus Emre Oratoryosu, 13. yüzyıl Anadolu tasavvuf mistisizmini anıtsal Batı koro kontrpuanı ve makamsal dizilerle sentezler.",
            "Ahmed Adnan Saygun hiç koro eseri yazmamıştır.",
            "Leopold Stokowski bir Rus opera şarkıcısıdır.",
            "Yunus Emre Oratoryosu bir çocuk çizgi film müziğidir."
          ],
          "answerIndex": 0,
          "explanation": "Accurate Saygun oratorio analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What collective name is given to the foundational group of five pioneer classical composers who created polyphonic music in modern Turkey?",
          "options": [
            "Müzika-i Hümâyun",
            "Darülelhan Beşlisi",
            "Ankara Ekolü",
            "Türk Beşleri"
          ],
          "answerIndex": 3,
          "explanation": "Türk Beşleri (The Turkish Five).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Turkish Five & The National Polyphonic Synthesis"
  },
  "tr-u27-l4": {
    "id": "tr-u27-l4",
    "unit": "tr-u27",
    "level": "C2",
    "objective": "World Tenors & Contemporary Turkish Opera: Murat Karahan and Burak Bilgili (Murat Karahan - Bolşoy ve Verona Arenası baş tenoru, Devlet Opera ve Balesi Genel Müdürü, Turandot «Nessun dorma», Burak Bilgili - Metropolitan Opera'da ilk Türk başrol bası Don Giovanni, Esin Şengül).",
    "presentation": {
      "explanation": "Murat Karahan, Burak Bilgili, and contemporary Turkish vocal royalty on world stages:\n- **Murat Karahan (1977–present - Ankara)**:\n  - The premier dramatic tenor of modern Turkey; studied at Bilkent University and the Accademia Nazionale di Santa Cecilia in Rome under Renata Scotto;\n  - Guest principal tenor at the **Bolshoi Theatre in Moscow**, Arena di Verona, Vienna State Opera, and Berlin Deutsche Oper (singing Calaf in *Turandot*, Radamès in *Aida*, Don José in *Carmen*, Cavaradossi in *Tosca*);\n  - General Director of the State Opera and Ballet of Turkey (DOB), spearheading the revival of the Aspendos International Opera Festival;\n- **Burak Bilgili (1974–present - Vize, Kırklareli)**:\n  - Master operatic bass; **first Turkish singer in history to sing a leading principal role at the Metropolitan Opera in New York** (Leporello in Mozart's *Don Giovanni*, 2004);\n  - Starred at Milan's La Scala, Paris Opéra, and San Francisco Opera (Don Basilio in *Il barbiere di Siviglia*, Ferrando in *Il Trovatore*);\n- The International Grandeur: The **Aspendos International Opera and Ballet Festival (Antalya)** in the 2,000-year-old Roman amphitheatre.",
      "examples": [
        {
          "target": "Murat Karahan Verona Arenası ve Bolşoy'da parlayan dramatik tenoruyla, Burak Bilgili ise Metropolitan Opera'daki ilk Türk başrol bası olarak dünya operasında bayrağı taşımaktadır.",
          "reading": "Moo-rat Ka-ra-han Ve-ro-na A-re-na-sın-da...",
          "translation": "Murat Karahan with his dramatic tenor shining at Verona and the Bolshoi, and Burak Bilgili as the first Turkish lead bass at the Met, carry the flag in world opera."
        }
      ],
      "mnemonics": [
        "Murat Karahan (Heroic Tenor at Bolshoi & Arena di Verona & DOB General Director)! Burak Bilgili (First Turkish Lead Bass at the Met in Don Giovanni 2004)! Aspendos Opera Festival!"
      ],
      "culturalNotes": [
        "The Aspendos Roman Amphitheatre near Antalya, built in 155 AD under Emperor Marcus Aurelius with intact acoustic stage architecture, allows unamplified operatic voices to be heard clearly by 12,000 spectators."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which acclaimed Turkish dramatic tenor stars regularly at the Bolshoi Theatre and Verona Arena as Calaf and served as General Director of DOB?",
          "options": [
            "Efe Kışlalı",
            "Bülent Bezdüz",
            "Murat Karahan",
            "Hakan Aysev"
          ],
          "answerIndex": 2,
          "explanation": "Murat Karahan."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which Turkish operatic bass made history in 2004 as the first Turkish singer to perform a leading principal role at the Metropolitan Opera in New York?",
          "options": [
            "Tuncay Kurtoğlu",
            "Burak Bilgili",
            "Ayhan Baran",
            "Suat Arikan"
          ],
          "answerIndex": 1,
          "explanation": "Burak Bilgili."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Murat Karahan's powerful dramatic tenor has earned ovations at the Arena di Verona, showcasing modern Turkish vocal virtuosity in Puccini's demanding heroic roles.\"",
          "options": [
            "Aspendos Festivali sadece kayak yarışmalarına ev sahipliği yapar.",
            "Burak Bilgili hiç opera söylememiştir.",
            "Devlet Opera ve Balesi 2024'te kapatılmıştır.",
            "Murat Karahan'ın güçlü dramatik tenoru, Puccini'nin zorlu kahramanlık rollerinde modern Türk vokal virtüözlüğünü sergileyerek Verona Arenası'nda büyük alkış topladı."
          ],
          "answerIndex": 3,
          "explanation": "Accurate modern Turkish opera analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What ancient 2nd-century Roman theatre in Antalya hosts Turkey's world-famous open-air international opera and ballet festival?",
          "options": [
            "Hierapolis Tiyatrosu",
            "Milet Tiyatrosu",
            "Aspendos Antik Tiyatrosu",
            "Efes Antik Tiyatrosu"
          ],
          "answerIndex": 2,
          "explanation": "Aspendos Antik Tiyatrosu.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "World Tenors & Contemporary Turkish Opera"
  },
  "tr-u27-l5": {
    "id": "tr-u27-l5",
    "unit": "tr-u27",
    "level": "C2",
    "objective": "C2 synthesis on The Modern Operatic Renaissance: The Atatürk Cultural Center (AKM) in Istanbul (Atatürk Kültür Merkezi - AKM Taksim, Hayati Tabanlıoğlu ve Murat Tabanlıoğlu, kırmızı küre şeklindeki 2040 kişilik opera salonu, Sinan Operası, DOB ve çağdaş Türk sahnesi).",
    "presentation": {
      "explanation": "The Atatürk Cultural Center (AKM) in Taksim, Istanbul, and the 21st-century operatic renaissance:\n- **The Architectural & Operatic Monument: Atatürk Cultural Center (AKM - Inaugurated October 29, 2021 on Taksim Square)**:\n  - Designed by architect **Murat Tabanlıoğlu** (son of original 1969 AKM architect Hayati Tabanlıoğlu);\n  - **The Iconic Red Spheric Opera Hall (Kırmızı Küre Opera Salonu)**: Houses a state-of-the-art 2,040-seat acoustic opera auditorium encased inside an enormous 15,000-piece hand-crafted ceramic red spherical dome that dominates the transparent glass façade on Taksim Square;\n  - Cutting-edge computerized hydraulic stage elevators, acoustically tuned double-curved timber walls, and natural reverberation calibrated to 1.6 seconds;\n- The Historic Reopening Production: **«Sinan Operası» (October 29, 2021 - Composed by Hasan Uçarsu)**:\n  - Commissioned to celebrate the opening of the new AKM, portraying the genius, spiritual trials, and monumental architecture of Ottoman Master Architect **Mimar Sinan** building the Süleymaniye and Selimiye Mosques under Sultan Suleiman the Magnificent;\n  - Staged with monumental digital projections and full DOB symphonic orchestra and chorus.",
      "examples": [
        {
          "target": "Taksim Meydanı'ndaki yeni AKM, 2040 kişilik kırmızı küre opera salonu ve «Sinan Operası» prömiyeriyle Türk opera sanatının 21. yüzyıldaki görkemli mabedidir.",
          "reading": "Tak-seem Mey-da-nın-da-ki ye-nee AKM...",
          "translation": "The new AKM on Taksim Square, with its 2,040-seat red sphere opera hall and the premiere of \"Sinan Opera,\" is the magnificent 21st-century temple of Turkish operatic art."
        }
      ],
      "mnemonics": [
        "Atatürk Kültür Merkezi AKM (Taksim Square 2021 by Murat Tabanlıoğlu)! Iconic Red Ceramic Sphere (15,000 ceramic tiles & 2,040 seats)! Sinan Operası (Hasan Uçarsu & Mimar Sinan)! State-of-the-art acoustic temple!"
      ],
      "culturalNotes": [
        "The 15,000 custom red ceramic tiles encasing the iconic sphere inside the AKM were individually hand-molded and fired in traditional İznik ceramic kilns."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which grand cultural complex on Taksim Square in Istanbul reopened in 2021 with an iconic 2,040-seat red ceramic spherical opera auditorium?",
          "options": [
            "Atatürk Kültür Merkezi",
            "Zorlu PSM",
            "Lütfi Kırdar Kongre Merkezi",
            "Süreyya Operası"
          ],
          "answerIndex": 0,
          "explanation": "Atatürk Kültür Merkezi (AKM Taksim)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which historic opera composed by Hasan Uçarsu, celebrating the genius of Ottoman master architect Mimar Sinan, inaugurated the new AKM in 2021?",
          "options": [
            "«Özsoy»",
            "«Kerem»",
            "«Hürrem Sultan»",
            "«Sinan Operası»"
          ],
          "answerIndex": 3,
          "explanation": "«Sinan Operası»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The red ceramic sphere inside Istanbul's new AKM functions as both a monumental sculptural icon and a technologically advanced acoustic shell for grand operatic productions.\"",
          "options": [
            "AKM bir spor salonudur.",
            "Murat Tabanlıoğlu bir opera tenorudur.",
            "İstanbul'un yeni AKM'sinin içindeki kırmızı seramik küre, hem anıtsal bir heykelsi simge hem de büyük opera prodüksiyonları için teknolojik olarak gelişmiş bir akustik kabuk görevi görür.",
            "Sinan Operası bir caz albümüdür."
          ],
          "answerIndex": 2,
          "explanation": "Accurate AKM architectural analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which architect designed the iconic 2021 reconstruction of the Atatürk Cultural Center (AKM) in Taksim?",
          "options": [
            "Turgut Cansever",
            "Murat Tabanlıoğlu",
            "Emre Arolat",
            "Nevzat Sayın"
          ],
          "answerIndex": 1,
          "explanation": "Murat Tabanlıoğlu.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "C2 synthesis on The Modern Operatic Renaissance"
  },
  "tr-u28-l1": {
    "id": "tr-u28-l1",
    "unit": "tr-u28",
    "level": "C1",
    "objective": "The Supreme Grand Architect of the Ottoman Empire: Mimar Sinan (Mimar Sinan / Koca Sinan - Çıraklık eseri Şehzade Camii 1548, Kalfalık eseri Süleymaniye Camii 1557, Ustalık eseri Edirne Selimiye Camii 1575 - UNESCO, kubbe mühendisliği, akrep kovucu devekuşu yumurtaları, hava sirkülasyonu ve is odası).",
    "presentation": {
      "explanation": "Mimar Sinan (Koca Mimar Sinan Ağa - c. 1488–1588 - Kayseri & Istanbul) and the golden zenith of classical Ottoman architecture:\n- **Mimar Sinan (The Grand Master of Classical Ottoman Architecture)**:\n  - Chief Imperial Architect (*Mimarbaşı*) serving three great sultans: Suleiman the Magnificent, Selim II, and Murad III; constructed 476 monuments across his 100-year life.\n- The Three Evolutionary Masterpieces in His Own Words:\n  - **1. Çıraklık Eseri (Apprentice Work) - Şehzade Camii (Istanbul, 1548)**: Perfect symmetrical 4-semi-dome central plan;\n  - **2. Kalfalık Eseri (Journeyman Work) - Süleymaniye Camii (Istanbul, 1557)**:\n    - Overlooking the Golden Horn; colossal 53-meter dome supported by two semi-domes and four massive porphyry elephant-foot pillars (*fil ayağı*);\n    - **The Soot Room (İs Odası)**: Ingenious natural airflow engineered to suck soot from 275 burning oil candles into a central chamber, where the black soot was scraped to make high-quality calligraphy ink;\n    - **Ostrich Eggs (Devekuşu Yumurtaları)**: Placed inside oil lamps to emit a natural scent that permanently repels spiders and cobwebs;\n  - **3. Ustalık Eseri (Master Work) - Selimiye Camii (Edirne, 1575 - UNESCO World Heritage)**:\n    - The supreme summit of Islamic dome engineering; single massive 31.28-meter dome resting on an 8-pillared octagonal baldachin with no internal semi-domes, creating a single uninterrupted interior space larger than the Hagia Sophia; four fluted minarets with three independent interlocking stairways.",
      "examples": [
        {
          "target": "Mimar Sinan, Şehzade'yi çıraklık, Süleymaniye'yi kalfalık ve Edirne Selimiye Camii'ni ustalık eseri ilan ederek kubbe mühendisliğinin zirvesine ulaştı.",
          "reading": "Mee-mar See-nan Sheh-za-de-yi...",
          "translation": "Mimar Sinan reached the pinnacle of dome engineering by declaring Sehzade his apprentice work, Suleymaniye his journeyman work, and Edirne Selimiye his masterwork."
        }
      ],
      "mnemonics": [
        "Mimar Sinan (Grand Imperial Architect for 50 years)! Şehzade (Apprentice), Süleymaniye (Journeyman), Selimiye in Edirne (Masterwork)! İs Odası (Soot room making calligraphy ink)! Ostrich eggs repelling spiders! UNESCO Selimiye 1575!"
      ],
      "culturalNotes": [
        "Sinan's humble white stone tomb with an open sabil water fountain sits modestly just outside the northern garden walls of the colossal Süleymaniye Mosque in Istanbul."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Ottoman architect considered the Selimiye Mosque in Edirne (1575) his crowning \"masterwork\" (ustalık eseri)?",
          "options": [
            "Sedefkâr Mehmed Ağa",
            "Mimar Hayreddin",
            "Balyan Ailesi",
            "Mimar Sinan"
          ],
          "answerIndex": 3,
          "explanation": "Mimar Sinan (Koca Sinan)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What ingenious chamber was engineered by Sinan inside the Süleymaniye Mosque to collect candle soot and turn it into fine calligraphy ink?",
          "options": [
            "İs Odası",
            "Hünkâr Mahfili",
            "Muvakkithane",
            "Şadırvan"
          ],
          "answerIndex": 0,
          "explanation": "İs Odası (The Soot Room)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Sinan's Selimiye Mosque in Edirne eliminated secondary semi-domes, resting a colossal thirty-one-meter dome upon an octagonal system of eight piers to maximize interior spatial unity.\"",
          "options": [
            "Mimar Sinan sadece ahşap köprüler inşa etmiştir.",
            "Sinan'ın Edirne'deki Selimiye Camii, ikincil yarım kubbeleri ortadan kaldırarak otuz bir metrelik devasa kubbeyi sekiz fil ayağı üzerine oturttu ve iç mekân bütünlüğünü en üst düzeye çıkardı.",
            "Selimiye Camii Roma'da bulunmaktadır.",
            "Süleymaniye Camii 1990 yılında inşa edilmiştir."
          ],
          "answerIndex": 1,
          "explanation": "Accurate Mimar Sinan engineering analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What natural object was placed inside oil lamps by Mimar Sinan to emit a natural scent preventing spiders from spinning webs in his mosques?",
          "options": [
            "Devekuşu yumurtaları",
            "Defne yaprakları",
            "Karanfil tomurcukları",
            "Sedir ağacı kabuğu"
          ],
          "answerIndex": 0,
          "explanation": "Devekuşu yumurtaları.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Supreme Grand Architect of the Ottoman Empire"
  },
  "tr-u28-l2": {
    "id": "tr-u28-l2",
    "unit": "tr-u28",
    "level": "C1",
    "objective": "The Jewel of Turquoise Iznik Tiles: The Blue Mosque and Sedefkar Mehmed Agha (Sultanahmet Camii / Mavi Cami 1616 - Mimar Sedefkâr Mehmed Ağa, 20 binden fazla el yapımı İznik çinisi, 6 minareli ilk Osmanlı camii, 260 vitray pencere, Ayasofya ile mimari diyalog).",
    "presentation": {
      "explanation": "The Blue Mosque (Sultanahmet Camii - 1609–1616 - Istanbul) and the pinnacle of Ottoman decorative tile art:\n- **Historical Commission (Sultan Ahmed I & Architect Sedefkâr Mehmed Ağa)**:\n  - Built facing the Byzantine Hagia Sophia across the historic Hippodrome square to reaffirm Islamic imperial glory;\n  - Designed by **Sedefkâr Mehmed Ağa** (student of Mimar Sinan and master mother-of-pearl inlayer);\n- Aesthetic & Structural Wonders:\n  - **The 20,000+ Handmade İznik Tiles (İznik Çinileri)**: Interior illuminated in glowing turquoise, cobalt blue, and emerald green by over 20,000 hand-painted ceramic tiles featuring over 50 different tulip motifs, carnations, roses, and cypresses;\n  - **The 6 Minarets Controversy (6 Minare)**: The **first Ottoman imperial mosque with six minarets**; according to legend, Sultan Ahmed ordered gold minarets (*altın*), but the architect misheard the word as six (*altı*); to resolve religious objections from Mecca (which also had 6 minarets), Sultan Ahmed financed the construction of a 7th minaret for the Masjid al-Haram in Mecca;\n  - **Natural Illumination**: 260 stained-glass windows bathing the central 43-meter dome in celestial daylight.",
      "examples": [
        {
          "target": "Sultanahmet Camii, Sedefkâr Mehmed Ağa'nın 20 bini aşkın İznik çinisi ve altı zarif minaresiyle İstanbul silüetinin ve Osmanlı çini sanatının mavi incisidir.",
          "reading": "Sul-tan-ah-met Ca-mee-ee...",
          "translation": "The Blue Mosque, with over 20,000 Iznik tiles and six graceful minarets by Sedefkar Mehmed Agha, is the blue pearl of the Istanbul skyline and Ottoman ceramic art."
        }
      ],
      "mnemonics": [
        "Sultanahmet Camii / Blue Mosque 1616 (Sedefkâr Mehmed Ağa)! 20,000+ turquoise & cobalt İznik tiles (50 tulip patterns)! 6 Minarets legend (Altın vs Altı)! 260 stained-glass windows!"
      ],
      "culturalNotes": [
        "Pope Benedict XVI and Pope Francis both removed their shoes and paused in silent meditative prayer alongside the Grand Mufti inside the Blue Mosque during historic Vatican visits to Istanbul."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Ottoman architect and mother-of-pearl craftsman designed Istanbul's famous 6-minaret Blue Mosque (Sultanahmet Camii) in 1616?",
          "options": [
            "Sedefkâr Mehmed Ağa",
            "Mimar Davud Ağa",
            "Sarkis Balyan",
            "Mimar Sinan"
          ],
          "answerIndex": 0,
          "explanation": "Sedefkâr Mehmed Ağa."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What traditional ceramic town in northwestern Anatolia produced the twenty thousand blue and turquoise handmade tiles inside the Blue Mosque?",
          "options": [
            "İznik",
            "Kütahya",
            "Çanakkale",
            "Avanos"
          ],
          "answerIndex": 0,
          "explanation": "İznik (Nicaea)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"The Blue Mosque incorporates over twenty thousand Iznik ceramic tiles depicting fifty distinct tulip variations, illuminated by two hundred and sixty stained-glass windows.\"",
          "options": [
            "Sultanahmet Camii, iki yüz altmış vitray pencereden gelen ışıkla aydınlanan ve elli farklı lale çeşidini tasvir eden yirmi binden fazla İznik çinisine ev sahipliği yapar.",
            "Mavi Cami ahşaptan yapılmış küçük bir şapeldir.",
            "Sedefkâr Mehmed Ağa bir Venedik denizcisidir.",
            "Sultanahmet Camii 1980 yılında yapılmıştır."
          ],
          "answerIndex": 0,
          "explanation": "Accurate Blue Mosque analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How many minarets did the Blue Mosque originally construct, sparking controversy with the holy sanctuary of Mecca in 1616?",
          "options": [
            "4 minare",
            "2 minare",
            "8 minare",
            "6 minare"
          ],
          "answerIndex": 3,
          "explanation": "6 minare.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Jewel of Turquoise Iznik Tiles"
  },
  "tr-u28-l3": {
    "id": "tr-u28-l3",
    "unit": "tr-u28",
    "level": "C1",
    "objective": "The Bosphorus Palaces & Ottoman Baroque: The Balyan Dynasty (Balyan Ailesi - Garabet Balyan ve Nigoğos Balyan, Dolmabahçe Sarayı 1856 - Boğaz kıyısında 600 metrelik neobarok cephe, 4.5 tonluk Baccarat kristal avize, Ortaköy Camii ve Beylerbeyi Sarayı).",
    "presentation": {
      "explanation": "The Balyan Dynasty (Balyan Ailesi - 18th–19th centuries) and the Ottoman Westernization & Baroque synthesis:\n- **The Balyan Architectural Dynasty**:\n  - An illustrious Armenian-Ottoman family of imperial architects who served six consecutive sultans across three generations (Krikor, Senekerim, Garabet, Nigoğos, and Sarkis Balyan);\n  - Blended French Neoclassicism, Italian Baroque, and Rococo with traditional Ottoman decorative opulence along the shores of the Bosphorus.\n- Landmark Masterpieces:\n  - **Dolmabahçe Sarayı (Dolmabahçe Palace - Inaugurated 1856 by Sultan Abdülmejid I)**:\n    - Symbolized the shift from medieval Topkapı Palace to a modern European waterfront palace;\n    - 600-meter white marble Bosphorus façade, 285 rooms, 44 grand reception halls;\n    - **Muayede Salonu (Ceremonial Hall)**: 36-meter high dome housing the **world's largest Bohemian crystal chandelier** (gift from Queen Victoria, weighing 4.5 metric tons with 750 lamps);\n    - **The Crystal Staircase (Kristal Merdiven)**: Baccarat crystal balusters with brass railings;\n    - Historic site where Mustafa Kemal Atatürk spent his final days and passed away on November 10, 1938;\n  - **Ortaköy Camii (Büyük Mecidiye Camii - 1854 - Nigoğos Balyan)**: Neo-Baroque jewel on the water, framing the Bosphorus Bridge;\n  - **Beylerbeyi Sarayı (1865)** & **Çırağan Sarayı (1871)**.",
      "examples": [
        {
          "target": "Balyan ailesi Dolmabahçe Sarayı ve Ortaköy Camii ile Boğaziçi'ne Osmanlı neobarokunun ve Baccarat kristallerinin zarafetini kazandırdı.",
          "reading": "Bal-yan ay-le-see Dol-ma-bah-çe Sa-ra-yı...",
          "translation": "The Balyan family bestowed the elegance of Ottoman Neo-Baroque and Baccarat crystals upon the Bosphorus through Dolmabahçe Palace and Ortaköy Mosque."
        }
      ],
      "mnemonics": [
        "Balyan Ailesi (Imperial Ottoman Architects across 3 generations)! Dolmabahçe Sarayı 1856 (600m Bosphorus marble facade & 4.5-ton Bohemian crystal chandelier)! Ortaköy Camii (Neo-Baroque jewel)! Atatürk passed away in Dolmabahçe!"
      ],
      "culturalNotes": [
        "All the clocks inside the Dolmabahçe Palace are permanently stopped at 9:05 AM, the exact moment of Mustafa Kemal Atatürk's passing on November 10, 1938."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which renowned family of imperial Ottoman architects designed Dolmabahçe Palace, Ortaköy Mosque, and Beylerbeyi Palace along the Bosphorus?",
          "options": [
            "Balyan Ailesi",
            "Fossati Kardeşler",
            "D'Aronco",
            "Mimar Kemaleddin"
          ],
          "answerIndex": 0,
          "explanation": "Balyan Ailesi (The Balyan Dynasty)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What grand waterfront monument, designed by Garabet and Nigoğos Balyan in 1856, replaced Topkapı as the main administrative residence of the Ottoman Sultans?",
          "options": [
            "Dolmabahçe Sarayı",
            "Yıldız Sarayı",
            "İshak Paşa Sarayı",
            "Topkapı Sarayı"
          ],
          "answerIndex": 0,
          "explanation": "Dolmabahçe Sarayı."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Dolmabahce Palace combines European Neo-Baroque and French neoclassical interiors with traditional Ottoman imperial court ceremonial layouts on the Bosphorus waterfront.\"",
          "options": [
            "Dolmabahçe Sarayı ahşap bir balıkçı kulübesidir.",
            "Ortaköy Camii 2010 yılında inşa edilmiştir.",
            "Mustafa Kemal Atatürk Paris'te vefat etmiştir.",
            "Dolmabahçe Sarayı, Boğaziçi kıyısında Avrupa Neobarok ve Fransız neoklasik iç mekânlarını geleneksel Osmanlı saray teşrifat düzeniyle birleştirir."
          ],
          "answerIndex": 3,
          "explanation": "Accurate Dolmabahçe analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What historic gift from Britain's Queen Victoria, weighing 4.5 tons with 750 lamps, hangs inside the grand Ceremonial Hall of Dolmabahçe Palace?",
          "options": [
            "Altın taht",
            "Mermer çeşme",
            "Bohemya kristal avize",
            "Büyük saat kulesi"
          ],
          "answerIndex": 2,
          "explanation": "Bohemya kristal avize.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Bosphorus Palaces & Ottoman Baroque"
  },
  "tr-u28-l4": {
    "id": "tr-u28-l4",
    "unit": "tr-u28",
    "level": "C2",
    "objective": "The National Architectural Renaissance & The Turkish House: Sedad Hakkı Eldem (Sedad Hakkı Eldem - Milli Mimari Akımı, Türk Evi tipolojisi ve rölöve çalışmaları, Zeyrek Sosyal Sigortalar Kurumu 1970 - Ağa Han Mimarlık Ödülü 1986, Taşlık Şark Kahvesi, Dışişleri Bakanlığı Köşkü).",
    "presentation": {
      "explanation": "Sedad Hakkı Eldem (1908–1988 - Istanbul) and the National Architectural Renaissance (Milli Mimari):\n- **Sedad Hakkı Eldem**:\n  - The master theorist, scholar, and architect of modern Turkish regionalism; Professor at the State Academy of Fine Arts (DGSA / Mimar Sinan Fine Arts University);\n  - Devoted 50 years to the scholarly documentation and survey (*rölöve*) of the traditional **Turkish House (Türk Evi)**, analyzing the central hall (*Sofa*), cantilevered bay windows (*Cumba*), and modular wooden post-and-beam construction.\n- Landmark Masterpieces:\n  - **Zeyrek Social Security Complex (SSK Zeyrek Tesisleri - Istanbul, 1962–1970)**:\n    - Awarded the prestigious **Aga Khan Award for Architecture (1986)**;\n    - Broken down into human-scale, stepped modular pavilions that step down the hill toward the Golden Horn, harmonizing with the 12th-century Byzantine Pantokrator Monastery and Ottoman timber houses through modern concrete canopies and cantilevers;\n  - **Taşlık Oriental Cafe (Taşlık Şark Kahvesi - Maçka, 1948)**: Modern interpretation of the traditional T-shaped Ottoman *Sofa* living hall with panoramic views of the Bosphorus;\n  - **Faculty of Science and Letters (Fen-Edebiyat Fakültesi - Istanbul University, 1944)** (with Emin Onat).",
      "examples": [
        {
          "target": "Sedad Hakkı Eldem «Türk Evi» tipolojisini modernize ederek Zeyrek SSK tesisleriyle 1986 Ağa Han Mimarlık Ödülü'nü kazanmış ve ulusal mimariyi yüceltmiştir.",
          "reading": "Se-dad Hak-kı El-dem Toork E-vee...",
          "translation": "Sedad Hakki Eldem modernized the \"Turkish House\" typology, winning the 1986 Aga Khan Award for Architecture with the Zeyrek SSK complex and elevating national architecture."
        }
      ],
      "mnemonics": [
        "Sedad Hakkı Eldem (Master of Modern Turkish Regionalism & DGSA)! Türk Evi typology (Sofa & Cumba analysis)! Zeyrek SSK Complex (1986 Aga Khan Award for Architecture)! Taşlık Şark Kahvesi!"
      ],
      "culturalNotes": [
        "His seminal multi-volume encyclopedic book *Türk Evi* (The Turkish House) remains the fundamental academic reference for vernacular domestic architecture in Turkey."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Turkish architect wrote \"Türk Evi\" and won the Aga Khan Award for Architecture in 1986 for the Zeyrek SSK Complex in Istanbul?",
          "options": [
            "Doğan Kuban",
            "Emin Onat",
            "Sedad Hakkı Eldem",
            "Turgut Cansever"
          ],
          "answerIndex": 2,
          "explanation": "Sedad Hakkı Eldem."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What traditional spatial element of the Ottoman Turkish House, serving as the central family gathering hall connecting all rooms, was championed by Eldem?",
          "options": [
            "Eyvan",
            "Sofa",
            "Kiler",
            "Cumba"
          ],
          "answerIndex": 1,
          "explanation": "Sofa (The central hall / Hayat)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Eldem's Zeyrek SSK complex respects urban contextualism by breaking down concrete volumes into tiered pavilions that echo the historical timber streetscape of the historic peninsula.\"",
          "options": [
            "Zeyrek SSK binaları New York'ta yer almaktadır.",
            "Ağa Han Ödülü sadece havacılık sektörüne verilir.",
            "Eldem'in Zeyrek SSK kompleksi, betonarme kütleleri tarihi yarımadanın geleneksel ahşap sokak dokusunu yansıtan kademeli pavyonlara bölerek kentsel bağlamcılığa saygı gösterir.",
            "Sedad Hakkı Eldem sadece demiryolu rayları tasarlamıştır."
          ],
          "answerIndex": 2,
          "explanation": "Accurate Sedad Hakkı Eldem analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What traditional cantilevered projecting window bay, typical of vernacular Ottoman wooden residences, was reinterpreted in modern concrete by Sedad Hakkı Eldem?",
          "options": [
            "Taşlık",
            "Cumba",
            "Gusülhane",
            "Cihannüma"
          ],
          "answerIndex": 1,
          "explanation": "Cumba.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The National Architectural Renaissance & The Turkish House"
  },
  "tr-u28-l5": {
    "id": "tr-u28-l5",
    "unit": "tr-u28",
    "level": "C2",
    "objective": "C2 synthesis on The Triad of Aga Khan Laureates & Modern Sacred Vaults: Turgut Cansever and The Sancaklar Mosque (Turgut Cansever - dünyada 3 kez Ağa Han Mimarlık Ödülü kazanan tek mimar, Ertegün Evi ve Demir Evleri, Emre Arolat - Sancaklar Camii 2014 (Büyükçekmece) - toprağa gömülü minimalist yeraltı camisi, modern Türk mimarlık zirvesi).",
    "presentation": {
      "explanation": "Turgut Cansever, Emre Arolat, and the philosophical summits of contemporary Turkish architecture:\n- **Turgut Cansever (1921–2009 - Antalya & Istanbul) - \"Bilge Mimar\" (The Wise Architect)**:\n  - The **only architect in world history to win the Aga Khan Award for Architecture three times** (1980 for the Turkish Historical Society Building in Ankara, 1980 for the Ertegün House in Bodrum, and 1992 for the Demir Holiday Village in Bodrum);\n  - Philosophical Principle: Treating architecture as a moral and spiritual duty (*\"To build the world is to participate in cosmic order\"*), integrating natural local stone, timber carpentry, and historical memory without superficial pastiche.\n- **Sancaklar Mosque (Sancaklar Camii - Büyükçekmece, Istanbul - 2012–2014)**:\n  - Designed by master contemporary architect **Emre Arolat** (RIBA International Award & WAF Winner);\n  - **The Radical Underground Minimalist Mosque**: Sits embedded directly beneath the natural prairie hillside, rejecting flamboyant domes and minarets in favor of pure spiritual contemplation;\n  - Natural slate dry-stone walls blending into the terrain; entering through a cave-like stairway into a subterranean prayer hall illuminated only by a dramatic vertical slit of sunlight washing down the concrete Qibla wall;\n  - Regarded by international critics as the most significant sacred Islamic building of the 21st century.",
      "examples": [
        {
          "target": "Turgut Cansever üç Ağa Han ödüllü felsefesiyle ve Emre Arolat Sancaklar Camii'nin yeraltı sadeliğiyle çağdaş Türk mimarlığını dünya zirvesine taşımıştır.",
          "reading": "Toor-goot Jan-se-ver ooch A-ga Han...",
          "translation": "Turgut Cansever with his 3-time Aga Khan award-winning philosophy and Emre Arolat with the subterranean simplicity of Sancaklar Mosque elevated contemporary Turkish architecture to world summits."
        }
      ],
      "mnemonics": [
        "Turgut Cansever (Only 3-time Aga Khan Award winner in history / Bilge Mimar)! Ertegün House & Turkish Historical Society! Emre Arolat (Sancaklar Camii 2014 in Büyükçekmece)! Subterranean cave-like prayer hall & natural slate light wall!"
      ],
      "culturalNotes": [
        "The Sancaklar Mosque was inspired by the Cave of Hira, where the Prophet Muhammad received the first Qur'anic revelation in meditative seclusion from the material world."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Turkish architect is the only architect in world history to win the prestigious Aga Khan Award for Architecture three times?",
          "options": [
            "Turgut Cansever",
            "Emre Arolat",
            "Murat Tabanlıoğlu",
            "Sedad Hakkı Eldem"
          ],
          "answerIndex": 0,
          "explanation": "Turgut Cansever."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which award-winning 2014 contemporary underground mosque in Büyükçekmece, Istanbul, designed by Emre Arolat, is embedded directly into the hillside landscape?",
          "options": [
            "Şakirin Camii",
            "Marmara İlahiyat Camii",
            "Ahmet Hamdi Akseki Camii",
            "Sancaklar Camii"
          ],
          "answerIndex": 3,
          "explanation": "Sancaklar Camii (Sancaklar Mosque)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Sancaklar Mosque rejects ostentatious monumentalism, embedding its prayer hall within the natural topography to foster profound spiritual introspection through natural daylight washing the concrete Qibla wall.\"",
          "options": [
            "Emre Arolat bir opera sanatçısıdır.",
            "Sancaklar Camii gösterişli anıtsallığı reddederek, beton Kıble duvarını yıkayan doğal gün ışığıyla derin manevi tefekkürü teşvik etmek için ibadet salonunu doğal topoğrafyaya gömer.",
            "Turgut Cansever hiç mimarlık ödülü kazanmamıştır.",
            "Sancaklar Camii kırmızı mermerden yapılmış bir gökdelendir."
          ],
          "answerIndex": 1,
          "explanation": "Accurate contemporary Turkish architecture analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In which coastal Aegean town did Turgut Cansever restore the historic 1980 Aga Khan award-winning residence for music producer Ahmet Ertegün?",
          "options": [
            "Bodrum",
            "Marmaris",
            "Çeşme",
            "Kuşadası"
          ],
          "answerIndex": 0,
          "explanation": "Bodrum (Muğla).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "C2 synthesis on The Triad of Aga Khan Laureates & Modern Sacred Vaults"
  },
  "tr-u29-l1": {
    "id": "tr-u29-l1",
    "unit": "tr-u29",
    "level": "C1",
    "objective": "The Ecstasy of Universal Love & The Eternal Wedding Night: Mevlana Celaleddin Rumi (Mevlânâ Celâleddîn-i Rûmî 1207–1273 - Belh ve Konya, Mesnevî-i Mânevî (26 bin beyit), Dîvân-ı Kebîr, «Gel, gel, ne olursan ol yine gel», Vahdet-i Vücud cezbesi, Şems-i Tebrizî ile buluşma, Şeb-i Arûs (Düğün Gecesi) ve Sema ayini).",
    "presentation": {
      "explanation": "Mevlana Celaleddin Rumi (Mevlânâ Celâleddîn-i Rûmî / Hz. Mevlânâ - 1207–1273 - Balkh, Khorasan & Konya) and the summit of universal love and mystical transcendence:\n- **Mevlânâ Celâleddîn-i Rûmî**:\n  - The supreme mystic, poet, and philosopher of the Islamic world; best-selling poet in the world today; lived and taught in Konya (capital of the Seljuk Sultanate of Rum);\n- The Transformative Catalyst: Encounter with **Shams of Tabriz (Şems-i Tebrizî - 1244)**:\n  - Transformed Rumi from a sober orthodox jurist (*müderris*) into an ecstatic ocean of divine love, poetry, and cosmic dance (*Sema*);\n- Monumental Masterpieces & Metaphysical Theorems:\n  - **Mesnevî-i Mânevî (The Spiritual Couplets - 26,000 rhymed couplets in 6 volumes)**:\n    - Dictated to his beloved disciple Hüsameddin Çelebi; known as the \"Qur'an in Pahlavi\"; begins with the immortal lament of the reed flute (**Ney**): torn from its reed-bed, crying out in longing to return to its divine origin;\n  - **The Universal Call of Forgiveness**:\n    - **«Gel, gel, ne olursan ol yine gel! İster kâfir, ister mecusi, ister putperest ol yine gel! Bizim dergâhımız ümitsizlik dergâhı değildir. Yüz kere tövbeni bozmuş olsan da yine gel!»** (*\"Come, come, whoever you are, come! Even if you are an unbeliever, a fire-worshipper, or an idolater, come! Ours is not a threshold of despair. Even if you have broken your repentance a hundred times, come!\"*);\n  - **Şeb-i Arûs (The Wedding Night - December 17)**: Death is not the end, but the joyful wedding night where the soul reunites eternally with the Divine Beloved;\n  - **The Whirling Sema (Mevlevilik)**: Spinning with right hand open to the heavens receiving grace, left hand turned to the earth distributing love.",
      "examples": [
        {
          "target": "Mevlânâ Celâleddîn-i Rûmî, Mesnevî'si ve «Gel, ne olursan ol yine gel» evrensel çağrısıyla Konya'dan tüm insanlığı ilahi aşka davet etti.",
          "reading": "Mev-la-na Je-la-led-deen Roo-mee...",
          "translation": "Mevlana Celaleddin Rumi, with his Masnavi and universal call \"Come, whoever you are, come,\" invited all humanity to divine love from Konya."
        }
      ],
      "mnemonics": [
        "Mevlânâ Rûmî (Konya master & Universal Poet of Love)! Mesnevî (26,000 verses starting with the Reed Flute Ney)! Şems-i Tebrizî! «Gel, ne olursan ol yine gel»! Şeb-i Arûs (Wedding Night on Dec 17)! The Whirling Dervishes (Sema)!"
      ],
      "culturalNotes": [
        "Every year on December 17 in Konya, tens of thousands of pilgrims from across the globe gather for the *Şeb-i Arûs* ceremonies celebrating Rumi's reunion with God."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which 13th-century Sufi master and philosopher composed the 26,000-verse \"Masnavi\" in Konya, proclaiming \"Come, come, whoever you are, come\"?",
          "options": [
            "Yunus Emre",
            "Hacı Bektaş-ı Veli",
            "Ahmet Yesevi",
            "Mevlânâ Celâleddîn-i Rûmî"
          ],
          "answerIndex": 3,
          "explanation": "Mevlânâ Celâleddîn-i Rûmî."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What traditional reed flute musical instrument, symbolizing the human soul separated from the divine reed-bed, opens Rumi's Mesnevî?",
          "options": [
            "Ney",
            "Kudüm",
            "Rebab",
            "Bağlama"
          ],
          "answerIndex": 0,
          "explanation": "Ney (The reed flute)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Rumi conceived death not as tragic annihilation, but as the 'Wedding Night' (Seb-i Arus) in which the finite soul transcends earthly illusion to unite with the Divine Beloved.\"",
          "options": [
            "Mevlânâ ölümü trajik bir yok oluş olarak değil, sonlu ruhun dünyevi yanılsamayı aşarak İlahi Sevgili ile birleştiği 'Düğün Gecesi' (Şeb-i Arûs) olarak kavramıştır.",
            "Mevlânâ 19. yüzyılda yaşamış bir Osmanlı bürokratıdır.",
            "Sema gösterisi sadece bir spor müsabakasıdır.",
            "Mesnevî denizcilik haritalarından oluşan bir atlastır."
          ],
          "answerIndex": 0,
          "explanation": "Accurate Rumi analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What mysterious wandering dervish arrived in Konya in 1244, transforming Rumi's life into an ecstatic outpouring of mystical poetry?",
          "options": [
            "Hallac-ı Mansur",
            "İbn Arabi",
            "Feridüddin Attar",
            "Şems-i Tebrizî"
          ],
          "answerIndex": 3,
          "explanation": "Şems-i Tebrizî.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Ecstasy of Universal Love & The Eternal Wedding Night"
  },
  "tr-u29-l2": {
    "id": "tr-u29-l2",
    "unit": "tr-u29",
    "level": "C1",
    "objective": "Anatolian Humanism & The Pure Vernacular Word: Yunus Emre (Yunus Emre c. 1238–1328 - Eskişehir ve Sakarya, «Sevelim, sevilelim, bu dünya kimseye kalmaz», «Yetmiş iki millete bir göz ile bakmayan», yalın ve dupduru Türkçe ile tasavvuf, Tapduk Emre dergâhı, UNESCO 1991 Yunus Emre Sevgi Yılı).",
    "presentation": {
      "explanation": "Yunus Emre (c. 1238–1328 - Sarıköy, Eskişehir & Sakarya River) and the birth of Anatolian Humanism in pure vernacular Turkish:\n- **Yunus Emre (The Voice of Anatolian Humanism)**:\n  - Folk poet, Sufi dervish, and moral philosopher; disciple at the lodge of **Tapduk Emre**; proclaimed the equality, brotherhood, and divine worth of all human beings during the catastrophic Mongol invasions of Anatolia;\n  - Inscribed in 1991 by UNESCO as the **International Year of Love and Yunus Emre**.\n- Monumental Metaphysical Poems & Humanist Aphorisms:\n  - **Universal Human Equality (72 Millete Bir Gözle Bakmak)**:\n    - **«Yetmiş iki millete bir göz ile bakmayan / Şer'in evliyasıysa hakikatte asidir»** (*\"He who does not look upon all seventy-two nations with one single eye / Even if he is a religious saint, in truth he is a rebel against God\"*);\n  - **The Core Maxim of Love (Sevelim Sevilelim)**:\n    - **«Gelin tanış olalım, işi kolay kılalım / Sevelim sevilelim, bu dünya kimseye kalmaz»** (*\"Come, let us be acquainted, let us make life easy / Let us love and be loved, this world will remain to no one\"*);\n  - **The Supremacy of the Heart over Dogma**:\n    - **«Bir kez gönül yıktın ise, bu kıldığın namaz değil / Yetmiş iki millet dahi elin yüzün yumaz değil»** (*\"If you have once broken a human heart, that prayer of yours is no true prayer / Not even the seventy-two nations can wash your face clean\"*);\n  - Preserved pure, musical vernacular Turkish (*Öz Türkçe*) against elitist court languages.",
      "examples": [
        {
          "target": "Yunus Emre, duru Türkçesi ve «Sevelim, sevilelim, bu dünya kimseye kalmaz» felsefesiyle evrensel insan sevgisini ve Anadolu hümanizmini inşa etti.",
          "reading": "Yoo-noos Em-re doo-roo Toork-che-see...",
          "translation": "Yunus Emre, with pure Turkish and the philosophy \"Let us love and be loved, this world remains to no one,\" constructed universal human love and Anatolian humanism."
        }
      ],
      "mnemonics": [
        "Yunus Emre (Voice of Anatolian Humanism & Tapduk Emre lodge)! «Sevelim, sevilelim, bu dünya kimseye kalmaz»! «72 millete bir göz ile bakmak» (Universal equality of all peoples)! UNESCO 1991! Pure Turkish language!"
      ],
      "culturalNotes": [
        "According to beloved legend, Yunus carried straight, unblemished firewood on his back for forty years to Tapduk Emre's lodge, saying: *\"To the doorway of truth, even crooked wood cannot enter.\"*"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master 13th-century Anatolian folk poet and humanist philosopher wrote \"Sevelim, sevilelim, bu dünya kimseye kalmaz\" in pure Turkish?",
          "options": [
            "Yunus Emre",
            "Pir Sultan Abdal",
            "Kaygusuz Abdal",
            "Mevlânâ Rûmî"
          ],
          "answerIndex": 0,
          "explanation": "Yunus Emre."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What foundational humanist principle was proclaimed by Yunus Emre regarding how spiritual seekers must view all peoples and nations across the Earth?",
          "options": [
            "«Yetmiş iki millete bir göz ile bakmak»",
            "Sadece kendi milletini sevmek",
            "Altın biriktirmek",
            "Toprak fethetmek"
          ],
          "answerIndex": 0,
          "explanation": "«Yetmiş iki millete bir göz ile bakmak»."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Yunus Emre established that genuine spiritual enlightenment does not reside in dogmatic scholasticism, but in the compassionate preservation of every human heart and universal love.\"",
          "options": [
            "Yunus Emre şiirlerini Latince olarak kaleme almıştır.",
            "Yunus Emre 20. yüzyılda yaşamış bir fabrika müdürüdür.",
            "Sarıköy bir okyanus limanıdır.",
            "Yunus Emre, gerçek manevi aydınlanmanın dogmatik skolastisizmde değil, her insan gönlünün şefkatle korunmasında ve evrensel sevgide yattığını ortaya koymuştur."
          ],
          "answerIndex": 3,
          "explanation": "Accurate Yunus Emre analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What international organization declared 1991 the International Year of Yunus Emre to celebrate his message of peace, tolerance, and human love?",
          "options": [
            "NATO",
            "Avrupa Birliği",
            "UNESCO",
            "Dünya Sağlık Örgütü"
          ],
          "answerIndex": 2,
          "explanation": "UNESCO.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Anatolian Humanism & The Pure Vernacular Word"
  },
  "tr-u29-l3": {
    "id": "tr-u29-l3",
    "unit": "tr-u29",
    "level": "C1",
    "objective": "Culture vs Civilization & The Sociological Foundations of Modernity: Ziya Gökalp (Ziya Gökalp 1876–1924 - Diyarbakır ve İstanbul, Türkçülüğün Esasları 1923, «Türkleşmek, İslamlaşmak, Muasırlaşmak», Hars (Milli Kültür) ile Medeniyet (Evrensel Uygarlık) ayrımı, Atatürk devrimlerinin sosyolojik teorisi).",
    "presentation": {
      "explanation": "Ziya Gökalp (Mehmet Ziya Gökalp - 1876–1924 - Diyarbakır & Istanbul) and the sociological synthesis of modern Turkish nation-building:\n- **Ziya Gökalp**:\n  - The father of Turkish sociology; established the first Department of Sociology in Turkey at Istanbul University (1914); leading intellectual ideologue who provided the sociological framework for Mustafa Kemal Atatürk's secular Republic.\n- Landmark Treatises & Theoretical Frameworks:\n  - **«Türkleşmek, İslamlaşmak, Muasırlaşmak» (Turkification, Islamization, Modernization - 1918)**:\n    - Resolved the identity crisis of the late Ottoman Empire by demonstrating that national identity (Turkish culture), spiritual ethics (Islamic values), and modern scientific technique (Western civilization) are not mutually exclusive, but can be harmoniously synthesized;\n  - **The Distinction between Hars (Culture) and Medeniyet (Civilization)**:\n    - **Hars (Milli Kültür / National Culture)**: The unique, emotional, democratic soul, language, folklore, and arts of a specific nation (cannot be borrowed from abroad);\n    - **Medeniyet (Evrensel Uygarlık / Universal Civilization)**: The shared international body of science, technology, mathematics, and rational industrial methods (must be actively imported and mastered);\n  - **«Türkçülüğün Esasları» (The Principles of Turkism - 1923)**: Outlined educational, legal, linguistic, and economic reforms establishing popular democracy and gender equality.",
      "examples": [
        {
          "target": "Ziya Gökalp, «Hars» (Milli Kültür) ile «Medeniyet» (Evrensel Uygarlık) ayrımını yaparak Atatürk Cumhuriyeti'nin sosyolojik temellerini atmıştır.",
          "reading": "Zee-ya Go-kalp Hars mee-lee kool-toor...",
          "translation": "Ziya Gökalp laid the sociological foundations of Atatürk's Republic by distinguishing between \"Hars\" (National Culture) and \"Medeniyet\" (Universal Civilization)."
        }
      ],
      "mnemonics": [
        "Ziya Gökalp (Father of Turkish Sociology & Istanbul Univ Chair 1914)! «Türkleşmek, İslamlaşmak, Muasırlaşmak»! Hars (National Culture/Soul) vs Medeniyet (Universal Science/Tech)! Türkçülüğün Esasları 1923!"
      ],
      "culturalNotes": [
        "Ziya Gökalp studied Émile Durkheim's French sociology deeply, adapting Durkheimian collective consciousness theory to the specific historical transition from Ottoman imperial millet to Turkish national republic."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master sociologist and thinker founded the first sociology department in Turkey and authored \"The Principles of Turkism\" (1923)?",
          "options": [
            "Ziya Gökalp",
            "Prens Sabahattin",
            "Hilmi Ziya Ülken",
            "Niyazi Berkes"
          ],
          "answerIndex": 0,
          "explanation": "Ziya Gökalp."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What term was used by Ziya Gökalp to denote the authentic, emotional national culture and folk heritage of a people, distinct from universal technological civilization (Medeniyet)?",
          "options": [
            "Hars",
            "Maarif",
            "İrfan",
            "Töre"
          ],
          "answerIndex": 0,
          "explanation": "Hars (Milli Kültür / National Culture)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Ziya Gokalp established that a modern nation must preserve its organic national culture (Hars) while wholeheartedly adopting universal scientific and industrial technology (Medeniyet).\"",
          "options": [
            "Ziya Gökalp Osmanlı sarayında bir besteciydi.",
            "Türkçülüğün Esasları bir tıp anatomisi kitabıdır.",
            "Ziya Gökalp, çağdaş bir ulusun organik milli kültürünü (Hars) korurken, evrensel bilimsel ve endüstriyel teknolojiyi (Medeniyet) bütünüyle benimsemesi gerektiğini ortaya koymuştur.",
            "Gökalp modern bilimin reddedilmesini savunmuştur."
          ],
          "answerIndex": 2,
          "explanation": "Accurate Ziya Gökalp analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In which famous 1918 work did Ziya Gökalp outline his tripartite formula for synthesizing national identity, spiritual ethics, and modern Western science?",
          "options": [
            "«Kızılelma»",
            "«Türkleşmek, İslamlaşmak, Muasırlaşmak»",
            "«Altın Işık»",
            "«Yeni Hayat»"
          ],
          "answerIndex": 1,
          "explanation": "«Türkleşmek, İslamlaşmak, Muasırlaşmak».",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Culture vs Civilization & The Sociological Foundations of Modernity"
  },
  "tr-u29-l4": {
    "id": "tr-u29-l4",
    "unit": "tr-u29",
    "level": "C2",
    "objective": "The History of Thought & The Morality of Love: Hilmi Ziya Ülken (Hilmi Ziya Ülken - Türk Tefekkür Tarihi 1933, Aşk Ahlâkı 1931, İnsani Vatanperverlik, Uyanış Devirlerinde Tercümenin Rolü, Doğu ile Batı arasında köprü felsefesi).",
    "presentation": {
      "explanation": "Hilmi Ziya Ülken (1901–1974 - Istanbul) and the encyclopedic history and humanist ethics of Turkish philosophy:\n- **Hilmi Ziya Ülken**:\n  - Polymath, philosopher, and sociologist; Professor of Philosophy at Istanbul University and Ankara University; founded the Turkish Philosophy Association (*Türk Felsefe Derneği*); published over 30 monumental books covering ontology, sociology, and ethics.\n- Landmark Treatises & Metaphysical Concepts:\n  - **«Aşk Ahlâkı» (The Morality of Love - 1931)**:\n    - The crowning ethical masterwork; argues that the crisis of modern human civilization cannot be solved by cold materialism, rigid dogma, or state authoritarianism;\n    - Proposes an **Ethics of Universal Love (Aşk Ahlâkı)**: Love is the creative ontological energy that elevates human beings from animal egoism to cosmic awareness and selfless solidarity with all humanity;\n  - **«Türk Tefekkür Tarihi» (History of Turkish Thought - 1933)**: 2-volume foundational academic synthesis documenting 1,000 years of philosophy, science, and metaphysics from Central Asia and Seljuk Anatolia to the Ottoman Empire;\n  - **«Uyanış Devirlerinde Tercümenin Rolü» (The Role of Translation in Epochs of Awakening - 1935)**: Proved that all great human civilizational golden ages (Islamic Golden Age in Baghdad, European Renaissance) were triggered by monumental translation movements.",
      "examples": [
        {
          "target": "Hilmi Ziya Ülken, «Aşk Ahlâkı» ve anıtsal «Türk Tefekkür Tarihi» ile Türk düşüncesini evrensel hümanizm ve tercüme felsefesiyle taçlandırmıştır.",
          "reading": "Heel-mee Zee-ya Ool-ken Ashk Ah-la-kı...",
          "translation": "Hilmi Ziya Ulken crowned Turkish thought with universal humanism and translation philosophy in \"The Morality of Love\" and \"History of Turkish Thought.\""
        }
      ],
      "mnemonics": [
        "Hilmi Ziya Ülken (Encyclopedic Titan of Turkish Thought)! «Aşk Ahlâkı» 1931 (Ethics of Universal Love over materialism)! «Türk Tefekkür Tarihi» 1933! The Role of Translation in Civilizational Awakenings!"
      ],
      "culturalNotes": [
        "Hilmi Ziya Ülken was fluent in French, German, Arabic, Persian, and Russian, translating dozens of masterworks by Spinoza, Leibniz, Nietzsche, and Al-Farabi into Turkish."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Turkish philosopher wrote \"Aşk Ahlâkı\" (1931) and the monumental 2-volume \"Türk Tefekkür Tarihi\" (1933)?",
          "options": [
            "Takiyettin Mengüşoğlu",
            "Macit Gökberk",
            "Hilmi Ziya Ülken",
            "Nusret Hızır"
          ],
          "answerIndex": 2,
          "explanation": "Hilmi Ziya Ülken."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What transformative historical engine did Hilmi Ziya Ülken identify as the universal catalyst that sparks civilizational renaissances across world history?",
          "options": [
            "Siyasi darbeler",
            "Altın madenciliği",
            "Tercüme hareketleri",
            "Askeri fetihler"
          ],
          "answerIndex": 2,
          "explanation": "Tercüme hareketleri (Monumental translation movements)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Ulken's Morality of Love established that ethical action reaches its highest fulfillment when human beings transcend biological egoism through cosmic love and active universal solidarity.\"",
          "options": [
            "Aşk Ahlâkı ticari bir muhasebe kitabıdır.",
            "Ülken'in Aşk Ahlâkı, insanın kozmik sevgi ve aktif evrensel dayanışma yoluyla biyolojik bencilliğini aştığında ahlaki eylemin en yüksek olgunluğuna ulaştığını ortaya koymuştur.",
            "Ülken çeviri hareketlerinin kültürlere zarar verdiğini savunmuştur.",
            "Hilmi Ziya Ülken 18. yüzyılda Venedik'te yaşamıştır."
          ],
          "answerIndex": 1,
          "explanation": "Accurate Hilmi Ziya Ülken analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What monumental two-volume historical work, published by Hilmi Ziya Ülken in 1933, established the first comprehensive academic history of Turkish philosophical thought?",
          "options": [
            "«Türk Tefekkür Tarihi»",
            "«Mantık Tarihi»",
            "«İslam Felsefesi»",
            "«Felsefe Dersleri»"
          ],
          "answerIndex": 0,
          "explanation": "«Türk Tefekkür Tarihi».",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The History of Thought & The Morality of Love"
  },
  "tr-u29-l5": {
    "id": "tr-u29-l5",
    "unit": "tr-u29",
    "level": "C2",
    "objective": "C2 synthesis on The Philosophical Foundations of Human Rights: Ioanna Kuçuradi (İoanna Kuçuradi 1936–günümüz - İstanbul, Dünya Felsefe Federasyonu (FISP) Başkanı 1998-2003, İnsan Haklarının Felsefi Temelleri, Etik ve Değerler Felsefesi, Türkiye Felsefe Kurumu Başkanı, UNESCO İnsan Hakları Kürsüsü).",
    "presentation": {
      "explanation": "İoanna Kuçuradi (1936–present - Istanbul & Ankara) and the global philosophical foundations of Universal Human Rights:\n- **İoanna Kuçuradi (Dünya Felsefe Zirvesinde Bir Türk Düşünürü)**:\n  - One of the most respected moral philosophers in the world today; Professor of Philosophy; President of the **International Federation of Philosophical Societies (FISP - 1998–2003)**; UNESCO Chair in Philosophy and Human Rights; Founder and President of the Philosophical Society of Turkey (*Türkiye Felsefe Kurumu*).\n- Monumental Masterpieces & Philosophical System:\n  - **«İnsan Haklarının Felsefi Temelleri» (Philosophical Foundations of Human Rights)**:\n    - Proves that Human Rights are not mere political treaties, legal conventions, or cultural preferences that can be suspended by governments;\n    - **Ontological Grounding of Human Rights**: Human rights are direct structural demands derived from **Human Potentiality and Dignity (İnsanın Değeri ve Olanakları)**—protecting the universal ontological conditions that allow human beings to actualize their human potential in the world;\n  - **«Etik» (Ethics - 1977)** & **«İnsan ve Değerleri» (Human and Values)**:\n    - Formulates the concept of **\"Valuation\" (Değer Biçme vs Değerlendirme)**: Making correct, objective ethical value judgments in concrete, individual human situations rather than applying blind, dogmatic moral rules.",
      "examples": [
        {
          "target": "İoanna Kuçuradi, FISP Başkanı ve UNESCO Kürsüsü olarak insan haklarını «İnsanın Değeri» kavramıyla ontolojik temellere oturtmuştur.",
          "reading": "Ee-o-an-na Koo-choo-ra-dee...",
          "translation": "Ioanna Kucuradi, as FISP President and UNESCO Chair, established human rights on ontological foundations through the concept of \"Human Dignity.\""
        }
      ],
      "mnemonics": [
        "İoanna Kuçuradi (President of FISP & UNESCO Human Rights Chair)! İnsan Haklarının Felsefi Temelleri (Human Rights as ontological demands of Human Dignity)! «Etik» 1977! Değerlendirme (Objective ethical evaluation)!"
      ],
      "culturalNotes": [
        "Kuçuradi organized the 21st World Congress of Philosophy in Istanbul in 2003, bringing together thousands of philosophers from over 100 nations to debate global justice."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Turkish moral philosopher served as President of the International Federation of Philosophical Societies (FISP) and authored \"Philosophical Foundations of Human Rights\"?",
          "options": [
            "İoanna Kuçuradi",
            "Macit Gökberk",
            "Bedia Akarsu",
            "Betül Çotuksöken"
          ],
          "answerIndex": 0,
          "explanation": "İoanna Kuçuradi."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "According to Kuçuradi's philosophy, on what fundamental ontological concept are Universal Human Rights rooted beyond mere legal treaties?",
          "options": [
            "Hükümet kararnameleri",
            "Ekonomik kâr",
            "Geleneksel inançlar",
            "İnsanın değeri ve olanakları"
          ],
          "answerIndex": 3,
          "explanation": "İnsanın değeri ve olanakları."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Kuçuradi demonstrated that human rights are not culture-relative conventions, but universal ontological requirements derived from protecting human dignity and the realization of human potential.\"",
          "options": [
            "Kuçuradi, insan haklarının kültüre göre değişen uzlaşılar olmadığını, insanın değerini korumaktan ve insan olanaklarını gerçekleştirmekten türetilen evrensel ontolojik gereklilikler olduğunu ortaya koymuştur.",
            "İnsan Haklarının Felsefi Temelleri bir turizm rehberidir.",
            "FISP bir denizcilik federasyonudur.",
            "İoanna Kuçuradi bir opera bestecisidir."
          ],
          "answerIndex": 0,
          "explanation": "Accurate Kuçuradi analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In which grand historic city did Kuçuradi preside over the 21st World Congress of Philosophy in 2003 as FISP President?",
          "options": [
            "Atina",
            "Roma",
            "Paris",
            "İstanbul"
          ],
          "answerIndex": 3,
          "explanation": "İstanbul (Turkey).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "C2 synthesis on The Philosophical Foundations of Human Rights"
  },
  "tr-u30-l1": {
    "id": "tr-u30-l1",
    "unit": "tr-u30",
    "level": "C1",
    "objective": "The Melancholy of Anatolian Winter & Chekhovian Dialogue: Nuri Bilge Ceylan (Nuri Bilge Ceylan - Kış Uykusu 2014 - Cannes Altın Palmiye / Palme d'Or; Bir Zamanlar Anadolu'da 2011 - Cannes Büyük Jüri Ödülü, bozkırda savcı, doktor ve komiserin cinayet keşif yolculuğu; Uzak 2002 - Cannes Büyük Jüri Ödülü; Ahlat Ağacı 2018; Kapadokya karları, Gökhan Tiryaki sinematografisi ve insanın varoluşsal yalnızlığı).",
    "presentation": {
      "explanation": "Nuri Bilge Ceylan (1959–present - Istanbul & Çanakkale) and the supreme pinnacle of contemporary Turkish auteur cinema:\n- **Nuri Bilge Ceylan (NBC)**:\n  - Photographer, engineer, and director; won the **Altın Palmiye (Palme d'Or) at Cannes (2014)**, two Cannes Grand Prix awards (2002, 2011), and Cannes Best Director (2008); the most decorated Turkish filmmaker in history.\n- Landmark Masterpieces & Aesthetic Signatures:\n  - **Kış Uykusu (Winter Sleep - 2014 - Cannes Palme d'Or)**:\n    - Set in the snow-covered, fairy-chimney landscape of **Cappadocia (Kapadokya)**;\n    - Follows retired theater actor Aydın (Haluk Bilginer) managing a boutique hotel (Hotel Othello) with his young wife Nihal and sister Necla;\n    - Masterful Chekhovian dialogue dissecting bourgeois hypocrisy, charity, intellectual pride, and emotional cruelty;\n  - **Bir Zamanlar Anadolu'da (Once Upon a Time in Anatolia - 2011 - Cannes Grand Prix)**:\n    - A nighttime police convoy (a doctor, a prosecutor, a police chief, and a confessed murderer) searches for a buried corpse across the rolling hills of the Anatolian steppe;\n    - Explores the mundane absurdity of bureaucratic life against the silent cosmic infinity of nature, featuring **Gökhan Tiryaki's** car-headlight cinematography;\n  - **Uzak (Distant - 2002 - Cannes Grand Prix & Best Actor)** & **Ahlat Ağacı (The Wild Pear Tree - 2018)**;\n  - **Kuru Otlar Üstüne (About Dry Grasses - 2023 - Cannes Best Actress for Merve Dizdar)**.",
      "examples": [
        {
          "target": "Nuri Bilge Ceylan, «Kış Uykusu» ile Cannes'da Altın Palmiye kazanarak Kapadokya ve Anadolu bozkırının melankolisini dünya sinemasına taşıdı.",
          "reading": "Noo-ree Beel-ge Jey-lan...",
          "translation": "Nuri Bilge Ceylan brought the melancholy of Cappadocia and the Anatolian steppe to world cinema, winning the Cannes Palme d'Or with Winter Sleep."
        }
      ],
      "mnemonics": [
        "Nuri Bilge Ceylan (Cannes Palme d'Or Winner 2014)! Kış Uykusu (Haluk Bilginer in snowy Cappadocia)! Bir Zamanlar Anadolu'da 2011 (Steppe night convoy & Cannes Grand Prix)! Gökhan Tiryaki camera! Chekhovian existential solitude!"
      ],
      "culturalNotes": [
        "When accepting the Cannes Best Director prize in 2008 for Three Monkeys, Ceylan uttered the famous line: *«Bu ödülü tutkuyla sevdiğim yalnız ve güzel ülkeme adıyorum»* (*\"I dedicate this award to my lonely and beautiful country, which I love passionately\"*)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Turkish director won the Cannes Palme d'Or for \"Winter Sleep\" (Kış Uykusu, 2014) and the Grand Prix for \"Once Upon a Time in Anatolia\" (2011)?",
          "options": [
            "Semih Kaplanoğlu",
            "Zeki Demirkubuz",
            "Reha Erdem",
            "Nuri Bilge Ceylan"
          ],
          "answerIndex": 3,
          "explanation": "Nuri Bilge Ceylan."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In which iconic Turkish geographical region, famed for its snow-covered volcanic fairy chimneys, is Nuri Bilge Ceylan's \"Winter Sleep\" set?",
          "options": [
            "Kapadokya",
            "Pamukkale",
            "Kaçkar Dağları",
            "Toros Dağları"
          ],
          "answerIndex": 0,
          "explanation": "Kapadokya (Cappadocia)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Ceylan deployed expansive widescreen steppe compositions and Chekhovian dialogues to examine the deep existential solitude and moral self-deception of human nature.\"",
          "options": [
            "Kış Uykusu bir Hollywood aksiyon filmidir.",
            "Nuri Bilge Ceylan bir uçak mühendisidir.",
            "Gökhan Tiryaki opera bestecisidir.",
            "Ceylan, insan doğasının derin varoluşsal yalnızlığını ve ahlaki kendini kandırma hallerini incelemek için geniş bozkır kompozisyonları ve Çehovyen diyaloglar kullandı."
          ],
          "answerIndex": 3,
          "explanation": "Accurate Nuri Bilge Ceylan analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which legendary Turkish actor portrayed the intellectual hotel owner Aydın in Ceylan's Palme d'Or-winning masterpiece *Kış Uykusu* (2014)?",
          "options": [
            "Yılmaz Erdoğan",
            "Muzaffer Özdemir",
            "Haluk Bilginer",
            "Muhammet Uzuner"
          ],
          "answerIndex": 2,
          "explanation": "Haluk Bilginer.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Melancholy of Anatolian Winter & Chekhovian Dialogue"
  },
  "tr-u30-l2": {
    "id": "tr-u30-l2",
    "unit": "tr-u30",
    "level": "C1",
    "objective": "Cinematic Resistance Directed from a Prison Cell: Yılmaz Güney (Yılmaz Güney 1937–1984 - Adana ve Paris; Yol 1982 Şerif Gören ile - Cannes Altın Palmiye / Palme d'Or; Umut 1970 - Adana faytoncusu Cabbar ve Türk Yeni Gerçekçiliği; Sürü 1978 Zeki Ökten ile; cezaevinden yönetilen sinema efsanesi «Çirkin Kral»).",
    "presentation": {
      "explanation": "Yılmaz Güney (Yılmaz Pütün / «Çirkin Kral» - 1937–1984 - Yenice, Adana & Paris) and the legend of revolutionary Turkish cinematic resistance:\n- **Yılmaz Güney (The Ugly King / Çirkin Kral)**:\n  - Folk hero, writer, actor, and director; wrote complete detailed screenplays, camera angles, and costume notes while imprisoned in Turkish military penitentiaries (İmralı, Isparta), directing his assistant directors (**Şerif Gören** and **Zeki Ökten**) from his prison cell;\n  - Escaped from prison in 1981, smuggled the film negatives across Europe, and edited the masterpiece in Switzerland and France.\n- Landmark Masterpieces:\n  - **Umut (Hope - 1970)**:\n    - The foundational turning point of modern Turkish realism;\n    - Güney plays Cabbar, a desperately poor horse carriage driver (*faytoncu*) in Adana whose horse is killed by an automobile; turns to treasure hunting in the desert with a spiritual healer in a heartbreaking descent into delusion;\n  - **Sürü (The Herd - 1978 - Berlin Golden Leopard at Locarno)**: Epic journey of a Kurdish nomadic family herding sheep by train to Istanbul;\n  - **Yol (The Road - 1982 - Cannes Altın Palmiye / Palme d'Or)**:\n    - The first Turkish film in history to win the **Palme d'Or at the Cannes Film Festival** (shared with Costa-Gavras' *Missing*);\n    - Follows five prisoners granted one week of temporary home leave from İmralı island prison, traveling across Turkey to encounter the harsh realities of patriarchal honor killings, poverty, and military checkpoints.",
      "examples": [
        {
          "target": "Yılmaz Güney, cezaevinden yönettiği «Yol» filmiyle 1982 Cannes Film Festivali'nde Türkiye'ye ilk Altın Palmiye'yi kazandırdı.",
          "reading": "Yıl-maz Goo-ney je-za-e-veen-den...",
          "translation": "Yilmaz Guney won Turkey's first Palme d'Or at the 1982 Cannes Film Festival with the film Yol, directed from his prison cell."
        }
      ],
      "mnemonics": [
        "Yılmaz Güney (Çirkin Kral / The Ugly King from Adana)! Umut 1970 (Cabbar the horse carriage driver)! Yol 1982 (First Turkish Cannes Palme d'Or with Şerif Gören)! Sürü 1978! Directing cinema from a prison cell!"
      ],
      "culturalNotes": [
        "Yılmaz Güney is buried in the historic Père Lachaise Cemetery in Paris, alongside Oscar Wilde, Frédéric Chopin, and Marcel Proust."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Turkish director and actor, known as \"Çirkin Kral\", directed the 1982 Cannes Palme d'Or winner \"Yol\" from his prison cell?",
          "options": [
            "Yılmaz Güney",
            "Ömer Lütfi Akad",
            "Atıf Yılmaz",
            "Metin Erksan"
          ],
          "answerIndex": 0,
          "explanation": "Yılmaz Güney."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which groundbreaking 1970 neo-realist film by Yılmaz Güney follows the desperate Adana horse-carriage driver Cabbar searching for buried treasure?",
          "options": [
            "«Umut»",
            "«Ağıt»",
            "«Arkadaş»",
            "«Baba»"
          ],
          "answerIndex": 0,
          "explanation": "«Umut» (Hope)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Yol chronicled five prisoners on furlough, exposing how feudal traditions, patriarchal honor codes, and military authoritarianism formed an inescapable open-air prison.\"",
          "options": [
            "Umut filmi New York'ta çekilmiş bir bilimkurgu filmidir.",
            "Yılmaz Güney bir Osmanlı saray ressamıydı.",
            "«Yol», izinli çıkan beş mahkûmun hikâyesini anlatarak feodal geleneklerin, ataerkil namus kodlarının ve askeri otoriterliğin nasıl kaçınılmaz bir açık hava hapishanesi oluşturduğunu gözler önüne serdi.",
            "Yol filmi sadece yarış atları hakkında bir belgeseldir."
          ],
          "answerIndex": 2,
          "explanation": "Accurate Yılmaz Güney analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which assistant director physically executed Yılmaz Güney's precise directorial scene instructions on location for *Yol* while Güney was imprisoned?",
          "options": [
            "Zeki Ökten",
            "Şerif Gören",
            "Ali Özgentürk",
            "Erden Kıral"
          ],
          "answerIndex": 1,
          "explanation": "Şerif Gören.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Cinematic Resistance Directed from a Prison Cell"
  },
  "tr-u30-l3": {
    "id": "tr-u30-l3",
    "unit": "tr-u30",
    "level": "C1",
    "objective": "The First Golden Bear & The Metaphysics of Water: Metin Erksan (Metin Erksan 1929–2012 - Çanakkale ve İstanbul; Susuz Yaz 1963 - Berlin Film Festivali Altın Ayı / Golden Bear Ödülü (Türk sinema tarihinin ilk uluslararası büyük zaferi), Erol Taş ve Hülya Koçyiğit, mülkiyet ve su hakkı çatışması; Sevmek Zamanı 1965 - surete aşık olma tasavvufi felsefesi ve Büyükada yağmurları).",
    "presentation": {
      "explanation": "Metin Erksan (1929–2012 - Çanakkale & Istanbul) and the founding of intellectual Turkish auteur cinema:\n- **Metin Erksan**:\n  - Art historian and fearless cinematic auteur; directed the historic film that brought Turkey its first major global international festival victory;\n- Monumental Masterpieces & Metaphysical Innovations:\n  - **Susuz Yaz (Dry Summer / Reflections - 1963 - Adapted from Necati Cumalı)**:\n    - Won the **Altın Ayı (Golden Bear) for Best Film at the 14th Berlin International Film Festival (1964)**;\n    - Set in the arid Aegean village of Bademler (İzmir);\n    - Greedy elder brother Osman (**Erol Taş**) dams up the only natural water spring on his land, refusing to share irrigation water with fellow villagers; his gentle brother Hasan (**Ulvi Doğan**) and bride Bahar (**Hülya Koçyiğit** in her legendary debut) are caught in the escalating feud;\n    - A primal, visceral exploration of private property rights versus collective human survival;\n  - **Sevmek Zamanı (Time to Love - 1965)**:\n    - The undisputed cult masterpiece of Turkish cinema;\n    - House painter Halil (**Müşfik Kenter**) falls in love with a photographic portrait of a wealthy woman (Meral) hanging on the wall of a villa in rainy **Büyükada**;\n    - When real Meral discovers him, Halil rejects physical romance with her, declaring the profound Sufi paradox: **«Ben senin suretine aşığım, sana değil. Suretin benden hiçbir şey istemez, ama sen her şeyi değiştireceksin!»** (*\"I am in love with your image, not with you. Your image asks nothing of me, but you would change everything!\"*).",
      "examples": [
        {
          "target": "Metin Erksan, «Susuz Yaz» ile Berlin'de Altın Ayı kazanarak Türk sinemasının ilk büyük uluslararası zaferine imza attı ve «Sevmek Zamanı» ile surete aşkı işledi.",
          "reading": "Me-teen Erk-san Soo-sooz Yaz...",
          "translation": "Metin Erksan achieved Turkish cinema's first major international victory winning the Berlin Golden Bear with Dry Summer, exploring love of the image in Time to Love."
        }
      ],
      "mnemonics": [
        "Metin Erksan (First Turkish Berlin Golden Bear Winner 1964)! Susuz Yaz 1963 (Water rights in Aegean village with Erol Taş & Hülya Koçyiğit)! Sevmek Zamanı 1965 (Halil & Müşfik Kenter on Büyükada: «Ben senin suretine aşığım»)!"
      ],
      "culturalNotes": [
        "Martin Scorsese's World Cinema Project digitally restored *Susuz Yaz* in 2008, preserving it as one of the essential landmarks of global cinema."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Turkish director won the Berlin Golden Bear for \"Susuz Yaz\" (Dry Summer, 1963) and directed the cult classic \"Sevmek Zamanı\" (1965)?",
          "options": [
            "Metin Erksan",
            "Ömer Lütfi Akad",
            "Halit Refiğ",
            "Memduh Ün"
          ],
          "answerIndex": 0,
          "explanation": "Metin Erksan."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In Metin Erksan's 1965 masterpiece \"Sevmek Zamanı\", why does Halil refuse to be with the real Meral when she approaches him in Büyükada?",
          "options": [
            "Çünkü o Meral'in kendisine değil, duvardaki suretine (resmine) aşıktır",
            "Çünkü adadan ayrılmak zorundadır",
            "Çünkü parası yoktur",
            "Çünkü Meral evlidir"
          ],
          "answerIndex": 0,
          "explanation": "Çünkü o Meral'in kendisine değil, duvardaki suretine (resmine) aşıktır."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Dry Summer established an uncompromising social critique of private water ownership in rural Anatolia, winning Turkey's first Berlin Golden Bear.\"",
          "options": [
            "Metin Erksan bir Osmanlı deniz amiralidir.",
            "«Susuz Yaz», kırsal Anadolu'daki özel su mülkiyeti üzerine tavizsiz bir toplumsal eleştiri getirerek Türkiye'nin ilk Berlin Altın Ayı ödülünü kazandırdı.",
            "Hülya Koçyiğit bir opera şarkıcısıdır.",
            "Sevmek Zamanı uzayda geçen bir aksiyon filmidir."
          ],
          "answerIndex": 1,
          "explanation": "Accurate Metin Erksan analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which legendary Turkish villain actor played the greedy water-hoarding brother Osman in Metin Erksan's *Susuz Yaz*?",
          "options": [
            "Erol Taş",
            "Bilal İnci",
            "Ahmet Tarık Tekçe",
            "Hayati Hamzaoğlu"
          ],
          "answerIndex": 0,
          "explanation": "Erol Taş.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The First Golden Bear & The Metaphysics of Water"
  },
  "tr-u30-l4": {
    "id": "tr-u30-l4",
    "unit": "tr-u30",
    "level": "C2",
    "objective": "The Sacred Silence of the Forest & The Yusuf Trilogy: Semih Kaplanoğlu (Semih Kaplanoğlu - Yusuf Üçlemesi: Yumurta 2007, Süt 2008, Bal 2010 - Berlin Film Festivali Altın Ayı / Golden Bear Ödülü; Doğu Karadeniz'in sisli dağları ve arı kovanları, baba-oğul ilişkisi, saf manevi sessizlik ve zamanın ruhu).",
    "presentation": {
      "explanation": "Semih Kaplanoğlu (1963–present - Izmir & Istanbul) and the sublime spiritual poetics of Turkish cinema:\n- **Semih Kaplanoğlu**:\n  - Winner of the **Altın Ayı (Golden Bear) for Best Film at the Berlin International Film Festival (2010)**;\n  - Master of spiritual contemplation, meditative pace, and sacred acoustic silence.\n- The Monumental Masterpiece: **The Yusuf Trilogy (Yusuf Üçlemesi)**:\n  - Formatted in reverse chronological order tracing the spiritual life of poet Yusuf:\n  - **1. Yumurta (Egg - 2007)**: Adult poet Yusuf returns to his Aegean hometown of Tire after his mother's death, confronting forgotten roots;\n  - **2. Süt (Milk - 2008 - Venice Competition)**: Young adolescent Yusuf struggles with poetry and his mother's dairy farm in Tire;\n  - **3. Bal (Honey - 2010 - Berlin Golden Bear / Altın Ayı)**:\n    - 6-year-old Yusuf (**Bora Altaş**) lives in the mystical, misty rainforests of the **Black Sea region (Doğu Karadeniz - Rize/Artvin)**;\n    - Yusuf stutters in school but speaks with crystal clarity when whispering in the forest with his beekeeper father Yakup (**Erdal Beşikçioğlu**), who climbs hundred-foot forest trees to hang traditional wooden beehives (*karakovan*);\n    - When the bees mysteriously vanish and his father goes missing in the high mountains, Yusuf journeys into the silent forest to discover the sacred fragility of existence;\n    - Completely avoids background music, using wind, birds, and buzzing bees to create sacred cinematic prayer.",
      "examples": [
        {
          "target": "Semih Kaplanoğlu, «Yusuf Üçlemesi»nin zirvesi «Bal» filmiyle 2010 Berlin Film Festivali'nde Altın Ayı kazanarak Karadeniz'in ruhunu ölümsüzleştirdi.",
          "reading": "Se-meeh Kap-la-no-loo...",
          "translation": "Semih Kaplanoglu won the Golden Bear at the 2010 Berlin Film Festival with Honey, immortalizing the Black Sea spirit in the Yusuf Trilogy."
        }
      ],
      "mnemonics": [
        "Semih Kaplanoğlu (Berlin Golden Bear Winner 2010)! Yusuf Üçlemesi (Yumurta 2007, Süt 2008, Bal 2010 in reverse order)! 6-year-old Yusuf & beekeeper father in misty Rize/Artvin Karadeniz forests! Karakovan honey & acoustic silence!"
      ],
      "culturalNotes": [
        "Semih Kaplanoğlu received the Golden Bear from jury president Werner Herzog at the 60th Berlin International Film Festival in 2010."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Turkish director won the Berlin Golden Bear in 2010 for \"Bal\" (Honey), the crowning chapter of his Yusuf Trilogy?",
          "options": [
            "Derviş Zaim",
            "Reha Erdem",
            "Semih Kaplanoğlu",
            "Nuri Bilge Ceylan"
          ],
          "answerIndex": 2,
          "explanation": "Semih Kaplanoğlu."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In which lush, mountainous province of the Turkish Black Sea region was Semih Kaplanoğlu's Golden Bear winner \"Bal\" filmed?",
          "options": [
            "Kastamonu",
            "Sinop",
            "Rize ve Artvin",
            "Trabzon"
          ],
          "answerIndex": 2,
          "explanation": "Rize ve Artvin (Doğu Karadeniz)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Kaplanoglu's Honey captured the sacred bond between a child and his beekeeper father in the misty Black Sea forests through profound natural acoustic silence.\"",
          "options": [
            "Kaplanoğlu'nun «Bal» filmi, sisli Karadeniz ormanlarında bir çocuk ile arıcı babası arasındaki kutsal bağı derin bir doğal akustik sessizlikle yakaladı.",
            "Yusuf Üçlemesi bir uzay istasyonunda geçmektedir.",
            "Bora Altaş bir profesyonel futbolcudur.",
            "Semih Kaplanoğlu bir tiyatro komedyenidir."
          ],
          "answerIndex": 0,
          "explanation": "Accurate Semih Kaplanoğlu analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What traditional hanging wooden beehives, placed at the tops of giant forest trees by Yusuf's father, are central to the visual world of *Bal*?",
          "options": [
            "Toprak testiler",
            "Modern plastik kovanlar",
            "Demir kafesler",
            "Karakovan petekleri"
          ],
          "answerIndex": 3,
          "explanation": "Karakovan petekleri.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Sacred Silence of the Forest & The Yusuf Trilogy"
  },
  "tr-u30-l5": {
    "id": "tr-u30-l5",
    "unit": "tr-u30",
    "level": "C2",
    "objective": "C2 synthesis on Mythical Landscapes & The Paranoia of Power: Reha Erdem & Emin Alper (Reha Erdem - Korkuyorum Anne 2004, Kosmos 2009 - Kars karlarında mucizevi derviş hırsız, Şarkı Söyleyen Kadınlar, Jin 2013; Emin Alper - Tepenin Ardı 2012 - Berlin Caligari Ödülü, Abluka 2015 - Venedik Jüri Özel Ödülü, Kurak Günler 2022 - Cannes Belirli Bir Bakış, Yanıklar kasabasındaki dev obruk ve siyasi paranoya metaforu).",
    "presentation": {
      "explanation": "Reha Erdem and Emin Alper: The twin visionary poles of contemporary Turkish auteur cinema:\n- **Reha Erdem (1960–present - Istanbul)**:\n  - The visionary poet of sound design and elemental human nature; studied cinema at the University of Paris VIII;\n  - **Kosmos (2009 - Golden Orange for Best Film & Best Director)**:\n    - Set in the frozen, mythical border city of **Kars** amidst ruins and howling blizzards;\n    - Follows an enigmatic, animalistic wandering thief and healer named Kosmos (**Sermet Yeşil**) who drinks raw tea, eats unrefined sugar, climbs treetops, and heals sick children with pure primal love;\n  - **Korkuyorum Anne (2004)**, **Hayat Var (2008)**, and **Jîn (2013)**;\n- **Emin Alper (1974–present - Ermenek, Karaman & Istanbul)**:\n  - PhD in Economic History; master of political allegory, psychological paranoia, and tense atmospheric dread;\n  - **Tepenin Ardı (Beyond the Hill - 2012 - Berlin Caligari Award)**: Family feud creating an imaginary external enemy \"behind the hill\";\n  - **Abluka (Frenzy - 2015 - Venice Special Jury Prize)**: Dystopian quarantine and trash surveillance in an authoritarian Istanbul;\n  - **Kurak Günler (Burning Days - 2022 - Cannes Un Certain Regard)**:\n    - Young idealistic prosecutor Emre arrives in the drought-stricken central Anatolian town of Yanıklar;\n    - Massive subterranean **sinkholes (obruklar)** constantly swallow the desert earth, serving as a terrifying physical metaphor for moral corruption, water depletion, and populist mob violence.",
      "examples": [
        {
          "target": "Reha Erdem «Kosmos» ile Kars karlarında mistik bir evren kurarken, Emin Alper «Kurak Günler» ile dev obruklar üzerinden siyasi paranoyayı deşifre etti.",
          "reading": "Re-ha Er-dem Kos-mos ee-le...",
          "translation": "While Reha Erdem created a mystical universe in the snows of Kars with Kosmos, Emin Alper decoded political paranoia through giant sinkholes in Burning Days."
        }
      ],
      "mnemonics": [
        "Reha Erdem (Visionary Sound & Myth Master)! Kosmos 2009 (Sermet Yeşil in snowy Kars blizzards)! Emin Alper (Political Paranoia & Allegory Titan)! Abluka 2015 (Venice Jury Prize)! Kurak Günler 2022 (Yanıklar town sinkholes / obruklar at Cannes)!"
      ],
      "culturalNotes": [
        "The real massive sinkholes (obruklar) in the Karapınar district of Konya, formed by underground water table depletion from industrial agriculture, directly inspired Emin Alper's set design for *Burning Days*."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which master Turkish director filmed \"Kosmos\" (2009) in the snows of Kars, and which directed the Cannes-acclaimed political thriller \"Kurak Günler\" (2022)?",
          "options": [
            "Reha Erdem ve Emin Alper",
            "Nuri Bilge Ceylan ve Semih Kaplanoğlu",
            "Yeşim Ustaoğlu ve Derviş Zaim",
            "Zeki Demirkubuz ve Uğur Yücel"
          ],
          "answerIndex": 0,
          "explanation": "Reha Erdem ve Emin Alper."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What terrifying geological phenomenon in the town of Yanıklar serves as a powerful metaphor for political and environmental decay in Emin Alper's \"Kurak Günler\"?",
          "options": [
            "Volkanik patlamalar",
            "Tsunami dalgaları",
            "Buzul erimeleri",
            "Dev obruklar"
          ],
          "answerIndex": 3,
          "explanation": "Dev obruklar (Massive subterranean sinkholes)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"While Reha Erdem's Kosmos explored spiritual animism in the frozen architecture of Kars, Emin Alper's Burning Days utilized geological sinkholes to allegorize populist corruption and environmental catastrophe.\"",
          "options": [
            "Reha Erdem bir hava durumu spikeridir.",
            "Kosmos bir otomobil yarış filmidir.",
            "Emin Alper sadece çocuk müzikalleri yönetmiştir.",
            "Reha Erdem'in «Kosmos»u Kars'ın donmuş mimarisinde manevi animizmi keşfederken, Emin Alper'in «Kurak Günler»i popülist yozlaşmayı ve çevre felaketini alegorize etmek için jeolojik obrukları kullandı."
          ],
          "answerIndex": 3,
          "explanation": "Accurate Reha Erdem and Emin Alper analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In which historic Turkish border city, famed for freezing blizzards and Russian-period basalt architecture, did Reha Erdem shoot *Kosmos* (2009)?",
          "options": [
            "Erzurum",
            "Ağrı",
            "Kars",
            "Van"
          ],
          "answerIndex": 2,
          "explanation": "Kars (Doğu Anadolu).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "C2 synthesis on Mythical Landscapes & The Paranoia of Power"
  },
  "tr-u31-l1": {
    "id": "tr-u31-l1",
    "unit": "tr-u31",
    "level": "C1",
    "objective": "Gaziantep Gastronomy, Pistachio Terroir & The 40-Layer Baklava Mastery (Gaziantep Mutfağı - UNESCO Yaratıcı Şehirler Ağı 2015; Antep Baklavası - Avrupa Birliği Tescilli Coğrafi İşareti (PGI); 40 kat tül inceliğinde açılan ipek yufka, boz iç Antep fıstığı, Şanlıurfa sadeyağı (saf tereyağı), meşe odunu ateşinde taş fırın pişirimi, şerbetleme ve İmam Çağdaş ile Güllüoğlu usta geleneği).",
    "presentation": {
      "explanation": "Gaziantep Gastronomy (Antep Mutfağı) and the supreme pinnacle of authentic Turkish Baklava:\n- **UNESCO Creative Cities Network in Gastronomy (2015)**:\n  - Gaziantep was the first Turkish city inscribed by UNESCO for its living ancient culinary culture;\n- The Master Physics & Geometry of Authentic Antep Baklava (AB Tescilli Coğrafi İşaret):\n  - **The 40 Micro-Layers of Silk Dough (40 Kat İpek Yufka)**:\n    - Rolled by master artisans (*baklava ustaları*) using long pear-wood rolling pins (*oklava*) and pure wheat starch until each layer is **translucent like silk tissue paper** (a newspaper text can be read through a single raw sheet);\n    - Stacked exactly **40 layers high**;\n  - **Boz İç Antep Fıstığı (Early-Harvest Emerald Pistachios)**:\n    - Harvested in late August before fully ripening, when the pistachio kernel is intensely emerald green and concentrated in essential aromatic oils;\n  - **Sadeyağ (Clarified Ghee from Urfa)**: Pure sheep's milk butter boiled and clarified to remove all milk solids and water, with high smoke point and heavenly nutty aroma;\n  - **Stone Oven Baking (Meşe odunlu taş fırın)**: Baked over dry oak wood fires at 200°C for 45 minutes until golden amber, then immediately drenched with boiling hot sugar syrup (*şerbet*);\n  - **The Eating Ritual**: Eaten upside down with the bottom golden layer touching the upper palate; biting creates an acoustic crunch (**«hışşşt sesi»**) followed by butter and emerald pistachio aroma.",
      "examples": [
        {
          "target": "Gaziantep baklavası, 40 kat tül inceliğindeki ipek yufkası, zümrüt yeşili boz fıstığı ve sadeyağıyla UNESCO tescilli dünya mirasıdır.",
          "reading": "Ga-zee-an-tep bak-la-va-sı...",
          "translation": "Gaziantep baklava, with its 40 layers of tissue-thin silk dough, emerald green pistachio, and clarified ghee, is a UNESCO-registered world heritage."
        }
      ],
      "mnemonics": [
        "Gaziantep (UNESCO Gastronomy 2015 & EU PGI Baklava)! 40 translucent silk dough layers! Boz iç Antep fıstığı (Early harvest emerald pistachios)! Urfa sadeyağı (Clarified sheep butter)! Stone oven oak baking! «Hışşşt» crunch sound!"
      ],
      "culturalNotes": [
        "In historical Ottoman court records, the imperial \"Baklava Procession\" (*Baklava Alayı*) took place every 15th of Ramadan, when the Sultan presented thousands of trays of baklava to the Janissary corps."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which early-harvest, emerald-green pistachio type is the irreplaceable culinary heart of authentic Gaziantep baklava?",
          "options": [
            "Kırmızı kabuklu fıstık",
            "Kavrulmuş tuzlu fıstık",
            "Siirt fıstığı",
            "Boz iç Antep fıstığı"
          ],
          "answerIndex": 3,
          "explanation": "Boz iç Antep fıstığı (Early-harvest emerald pistachio)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What traditional pure clarified sheep's butter, renowned for its rich aroma and high smoke point, is poured over layers of baklava before baking?",
          "options": [
            "Sadeyağ",
            "Margarin",
            "Ayçiçek yağı",
            "Zeytinyağı"
          ],
          "answerIndex": 0,
          "explanation": "Sadeyağ (Urfa Sadeyağı / Clarified Ghee)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Authentic Gaziantep baklava layers forty translucent sheets of hand-rolled starch dough with emerald-green early-harvest pistachios and clarified sheep butter, baked in stone ovens over oak fires.\"",
          "options": [
            "UNESCO Gaziantep'i sadece otomotiv sanayisi için tescillemiştir.",
            "Gaziantep baklavası fabrikada dondurulmuş çikolatalı bisküvidir.",
            "Otantik Gaziantep baklavası, elle açılan kırk şeffaf nişastalı yufka katını zümrüt yeşili erken hasat fıstık ve koyun sadeyağı ile buluşturup meşe ateşli taş fırında pişirir.",
            "Baklava yufkası mısır unundan kalın ekmek şeklinde yapılır."
          ],
          "answerIndex": 2,
          "explanation": "Accurate Gaziantep Baklava analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In what year was Gaziantep officially inscribed onto the UNESCO Creative Cities Network in the field of Gastronomy?",
          "options": [
            "2000",
            "2015",
            "2023",
            "1990"
          ],
          "answerIndex": 1,
          "explanation": "2015.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 31, Lesson 1: Foundational & Structural Mastery (Gaziantep baklavası, 40 kat tü)"
  },
  "tr-u31-l2": {
    "id": "tr-u31-l2",
    "unit": "tr-u31",
    "level": "C1",
    "objective": "The Science of the Kebab & The Charcoal Hearth (Kebap Kültürü: Adana Kebabı (Türk Patent Enstitüsü Tescilli: zırhla elde kıyılan 1 yaşındaki erkek kuzu eti, kuyruk yağı (%20–25), taze kırmızı kök biber ve kaya tuzu; geniş demir şişte kömür közünde pişirim), Urfa Kebabı, Beyti Kebabı, Cağ Kebabı (Erzurum yatık döneri), közlenmiş domates ve sumaklı soğan salatası eşliğinde servis).",
    "presentation": {
      "explanation": "The Kebab Culture (Kebap Kültürü - Adana, Urfa, Gaziantep, Erzurum) and the mastery of butchery and fire:\n- **Adana Kebabı (Geographically Protected Traditional Specialty)**:\n  - Regulated under strict culinary specifications: machine-ground meat or frozen beef is strictly prohibited;\n- The Master Artisanal Geometry & Chemistry:\n  - **The Knife & Meat Selection (Zırh Kıyması)**:\n    - Meat from 1-year-old male lamb (*erkek kuzu*) raised on natural highlands;\n    - Hand-minced on a wooden block using a giant crescent-shaped two-handed steel blade (**Zırh**);\n  - **The Fat Ratio (Kuyruk Yağı)**: 20% to 25% fresh tail fat (*kuyruk yağı*) thoroughly integrated with the lean meat, providing juiciness, flavor, and natural binding without breadcrumbs or eggs;\n  - **The Seasoning**: Strictly red sweet capia peppers (**kırmızı pul biber / kök biber**) and sea salt (zero garlic, zero onions, zero cumin in canonical Adana kebab);\n  - **The Skewer & Hearth (Şiş ve Ocakbaşı)**:\n    - Hand-pressed onto wide, flat iron skewers (*demir şiş*) with wet hands, creating distinctive rippled finger indentations;\n    - Cooked over smokeless, ash-covered hardwood oak charcoal embers (**köz**), constantly pressed against fresh flatbread (**lavaş / tırnak pide**) to absorb rendered savory juices;\n  - **Accompaniments**: Charred whole tomatoes and green peppers, sumac-dusted onion parsley salad (**sumaklı soğan**), and icy fermented turnip juice (**Şalgam suyu**);\n  - **Regional Variations**: **Urfa Kebabı** (mild without hot pepper), **Erzurum Cağ Kebabı** (marinated lamb sliced on horizontal rotating spits over wood fire).",
      "examples": [
        {
          "target": "Hakiki Adana kebabı, zırhla elde kıyılan kuzu eti ve kuyruk yağının kömür közünde lavaşla buluştuğu bir lezzet şaheseridir.",
          "reading": "Ha-kee-kee A-da-na ke-ba-bı...",
          "translation": "Authentic Adana kebab is a flavor masterpiece where hand-chopped lamb minced with a zirh blade and tail fat meet lavash bread over charcoal embers."
        }
      ],
      "mnemonics": [
        "Adana Kebabı (Geographically Protected)! Zırh blade hand-mincing (No machines)! Male lamb with 20-25% kuyruk yağı tail fat! Red capia pepper & salt only! Wide iron skewers over oak köz! Lavaş & sumaklı soğan!"
      ],
      "culturalNotes": [
        "Master Adana kebab chefs (*Kebapçı Ustaları*) test their meat blend by holding the heavy skewer vertically; if the raw minced meat clings securely to the steel skewer without falling, the fat-protein emulsion is perfect."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What large, crescent-shaped two-handed steel curved knife is used in Adana to hand-mince lamb meat for authentic Adana Kebab?",
          "options": [
            "Zırh",
            "Bıçkı",
            "Hançer",
            "Satır"
          ],
          "answerIndex": 0,
          "explanation": "Zırh (Zırh bıçağı)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What essential type of fat (20-25% ratio) is minced alongside lamb meat to provide binding, tenderness, and rich flavor in canonical Adana kebab?",
          "options": [
            "Kuyruk yağı",
            "Tereyağı",
            "Sıvı yağ",
            "Zeytinyağı"
          ],
          "answerIndex": 0,
          "explanation": "Kuyruk yağı (Lamb Tail Fat)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Authentic Adana kebab requires hand-mincing male lamb with twenty-five percent tail fat using a two-handed zirh blade, seasoned solely with sweet red capia peppers and sea salt.\"",
          "options": [
            "Adana kebabı mikrodalga fırında pişirilen bir dana rosto yemeğidir.",
            "Otantik Adana kebabı, erkek kuzu etinin yüzde yirmi beş kuyruk yağı ile iki elli zırh bıçağı kullanılarak elde kıyılmasını ve yalnızca tatlı kırmızı kök biber ve kaya tuzu ile baharatlanmasını gerektirir.",
            "Zırh, kebap etini haşlamak için kullanılan büyük bir tenceredir.",
            "Kuyruk yağı yerine krema ve peynir kullanılır."
          ],
          "answerIndex": 1,
          "explanation": "Accurate Adana Kebab analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What traditional tangy, salty fermented dark turnip juice from southern Turkey is the canonical beverage paired with spicy kebabs?",
          "options": [
            "Şalgam suyu",
            "Ayran",
            "Boza",
            "Şıra"
          ],
          "answerIndex": 0,
          "explanation": "Şalgam suyu (Fermented Turnip Juice).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Science of the Kebab & The Charcoal Hearth (Kebap Kültürü"
  },
  "tr-u31-l3": {
    "id": "tr-u31-l3",
    "unit": "tr-u31",
    "level": "C1",
    "objective": "The Turkish Breakfast Feast & The Art of Menemen: Serpme Kahvaltı (Serpme Türk Kahvaltısı: Ezine beyaz peyniri, Kars eski kaşarı, Van otlu peyniri, taze manda kaymağı ve petek balı, Gemlik siyah zeytini, çıtır çıtır susamlı Simit; bakır tavada pişen Menemen (tatlı yeşil biber, kabuğu soyulmuş sulu domates, köy tereyağı ve akışkan yumurta), sucuklu yumurta ve ince belli bardakta taze demlenmiş Rize çayı).",
    "presentation": {
      "explanation": "The Turkish Breakfast (Serpme Kahvaltı) and the world-famous morning feast:\n- **Kahvaltı (Kahve-Altı / \"Before Coffee\")**:\n  - Elevated in modern Turkey into an epic social ceremony of dozens of small ceramic plates covering the table in an abundance of colors, textures, and flavors;\n- Master Cheese & Dairy Terroir:\n  - **Ezine Peyniri (Çanakkale)**: Protected brined white cheese made from sheep, goat, and cow milk grazing on the aromatic herbs of Mount Ida (Kaz Dağları);\n  - **Kars Eski Kaşarı**: Aged Alpine wheel cheese produced from high-plateau cow milk, aged for 6 to 12 months;\n  - **Bal-Kaymak**: Thick, luscious water buffalo clotted cream (**manda kaymağı**) drizzled with raw honeycomb flower honey (*petek balı*);\n- The Hot Centerpieces:\n  - **Menemen (Bakır Tavada)**:\n    - Cooked in a two-handled copper pan (*sahan*);\n    - Sweet green peppers sautéed in rich village butter, combined with finely diced ripe summer tomatoes simmered until juicy, finished with lightly scrambled farm-fresh eggs cooked to a velvety, runny consistency;\n  - **Sucuklu Yumurta**: Spicy cured beef sausage (*sucuk*) sizzling in butter with sunny-side-up eggs;\n- Accompaniments:\n  - Freshly baked sesame-encrusted **Simit**, crusty white bread for dipping, cured Gemlik black olives, and endless refills of clear, amber black tea from Rize brewed in a double-tiered **Çaydanlık** and served in tulip-shaped glasses (**ince belli bardak**).",
      "examples": [
        {
          "target": "Serpme Türk kahvaltısı, bakır tavada pişen menemen, Ezine peyniri, bal-kaymak ve ince belli bardakta demli çayla sabahın bayramıdır.",
          "reading": "Serp-me Toork kah-val-tı-sı...",
          "translation": "The spread Turkish breakfast is a morning festival with copper-pan menemen, Ezine cheese, clotted cream with honey, and steeped tea in tulip glasses."
        }
      ],
      "mnemonics": [
        "Serpme Kahvaltı! Ezine peyniri & Kars eski kaşarı! Bal-Kaymak (Manda kaymağı)! Menemen in copper pan (Runny eggs with tomatoes & peppers)! Hot sesame Simit! Ince belli bardak tea from Rize!"
      ],
      "culturalNotes": [
        "The word *Kahvaltı* literally means \"under-coffee\" (*kahve altı*), denoting the rich morning meal eaten to line the stomach before sipping the first cup of strong Turkish coffee."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which rich, creamy dairy specialty, made from water buffalo milk and drizzled with raw honeycomb, is a star sweet luxury of the Turkish breakfast?",
          "options": [
            "Bal-Kaymak",
            "Sütlaç",
            "Muhallebi",
            "Kazandibi"
          ],
          "answerIndex": 0,
          "explanation": "Bal-Kaymak (Manda Kaymağı with Honey)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What traditional circular sesame-crusted bread ring is a beloved staple of Turkish street food and breakfast tables?",
          "options": [
            "Simit",
            "Lavaş",
            "Bazlama",
            "Pide"
          ],
          "answerIndex": 0,
          "explanation": "Simit."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"A traditional Turkish breakfast spreads an abundance of Ezine cheese, clotted buffalo cream with honey, and freshly cooked copper-pan menemen, paired with endless glasses of steeped Rize tea.\"",
          "options": [
            "Geleneksel bir Türk kahvaltısı, Ezine peyniri, ballı manda kaymağı ve bakır tavada taze pişmiş menemeni, sonsuz bardak demli Rize çayı eşliğinde zengin bir sofrada buluşturur.",
            "Menemen sadece haşlanmış patates ile yapılır.",
            "Simit, içine peynir doldurularak fırınlanan bir İtalyan pizzasıdır.",
            "Kahvaltı kelimesi Fransızca bir akşam yemeği terimidir."
          ],
          "answerIndex": 0,
          "explanation": "Accurate Turkish Breakfast analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What traditional tulip-shaped glass is universally used in Turkey for serving piping-hot black tea?",
          "options": [
            "Kupa bardak",
            "Kadeh",
            "Fincan",
            "İnce belli bardak"
          ],
          "answerIndex": 3,
          "explanation": "İnce belli bardak.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "The Turkish Breakfast Feast & The Art of Menemen"
  },
  "tr-u31-l4": {
    "id": "tr-u31-l4",
    "unit": "tr-u31",
    "level": "C2",
    "objective": "Aegean Olive Oil Alchemy & Cold Vegetable Poetry: Zeytinyağlılar (Ege Zeytinyağlıları: Türk mutfağının soğuk sebze felsefesi; Zeytinyağlı Yaprak Sarması (asma yaprağında kuş üzümü, çam fıstığı, tarçın ve naneli pirinç), Enginar Kalbi baklalı, İmambayıldı (patlıcan, soğan ve sarımsak), Şevketibostan ve Deniz Börülcesi; zeytinyağında dinlendirilerek oda sıcaklığında servis edilen zarafet).",
    "presentation": {
      "explanation": "Zeytinyağlılar (Cold Olive Oil Dishes) and the botanical philosophy of Aegean Turkish gastronomy:\n- **The Unique Culinary Category (Zeytinyağlılar)**:\n  - A distinct, refined genre in Turkish cuisine with no direct equivalent in Western cooking;\n  - Vegetables and stuffed delicacies braised slowly in **Cold-Pressed Extra Virgin Olive Oil (Erken Hasat Soğuk Sıkım Sızma Zeytinyağı)**, a pinch of sugar, and lemon juice, then allowed to cool completely in their own cooking juices and served strictly at **room temperature or chilled**;\n- Master Pillar Dishes:\n  - **1. Zeytinyağlı Yaprak Sarması (Stuffed Grape Leaves)**:\n    - Tender young grape leaves from **Manisa/Erbaa** rolled paper-thin around spiced rice seasoned with pine nuts (**çam fıstığı**), currants (**kuş üzümü**), cinnamon, mint, and allspice;\n  - **2. Zeytinyağlı Enginar (Artichoke Bottoms with Broad Beans)**:\n    - Whole fresh artichoke hearts braised in olive oil, fresh orange juice, and dill, filled with tender baby fava beans (*taze iç bakla*);\n  - **3. İmambayıldı (\"The Imam Fainted\")**:\n    - Whole tender eggplants slit open and stuffed with slow-caramelized sweet onions, garlic, and fresh tomatoes, braised gently in olive oil;\n  - **4. Wild Aegean Wild Herbs (Ege Otları)**:\n    - Foraged herbs from the Aegean hills (Urla, Alaçatı, Ayvalık): **Şevketibostan** (blessed milk thistle), **Deniz börülcesi** (samphire drizzled with garlic and lemon), **Radika** (wild chicory), and **Turpotu**.",
      "examples": [
        {
          "target": "Ege zeytinyağlıları, yaprak sarması ve zeytinyağlı enginarla Türk mutfağının en zarif ve sağlıklı soğuk lezzet felsefesidir.",
          "reading": "E-ge zey-teen-yah-lı-la-rı...",
          "translation": "Aegean olive oil dishes, with stuffed grape leaves and artichokes, are Turkish cuisine's most elegant and healthy cold culinary philosophy."
        }
      ],
      "mnemonics": [
        "Zeytinyağlılar (Cold olive oil cuisine of the Aegean)! Extra virgin olive oil & touch of sugar! Cooked and cooled in its own pan! Yaprak Sarması with pine nuts & currants! Zeytinyağlı Enginar with bakla! İmambayıldı! Ege Otları (Şevketibostan & Deniz börülcesi)!"
      ],
      "culturalNotes": [
        "The Alaçatı Herb Festival (*Alaçatı Ot Festivali*) in Çeşme, Izmir, attracts hundreds of thousands of visitors every spring to celebrate over 100 varieties of wild edible herbs foraged across Aegean hills."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What classic Turkish olive oil dish features tender eggplants stuffed with caramelized onions, garlic, and tomatoes, famously named \"The Imam Fainted\"?",
          "options": [
            "Şakşuka",
            "Hünkârbeğendi",
            "İmambayıldı",
            "Karnıyarık"
          ],
          "answerIndex": 2,
          "explanation": "İmambayıldı."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What two classic sweet-savory aromatics are essential inside the rice filling of authentic Aegean Zeytinyağlı Yaprak Sarması?",
          "options": [
            "Badem ve susam",
            "Kıyma ve salça",
            "Çam fıstığı ve kuş üzümü",
            "Ceviz ve fındık"
          ],
          "answerIndex": 2,
          "explanation": "Çam fıstığı ve kuş üzümü."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Turkish olive oil dishes (Zeytinyaglilar) are gently braised with extra virgin olive oil, lemon, and sugar, and served at room temperature to highlight vegetable freshness.\"",
          "options": [
            "Ege otları sadece hayvan yemi olarak kullanılır.",
            "İmambayıldı kıymalı bir fırın böreğidir.",
            "Zeytinyağlılar sadece sıcak olarak mikrodalgada ısıtılıp yenir.",
            "Türk zeytinyağlıları, sebzelerin tazeliğini öne çıkarmak için sızma zeytinyağı, limon ve şekerle kısık ateşte pişirilir ve oda sıcaklığında servis edilir."
          ],
          "answerIndex": 3,
          "explanation": "Accurate Zeytinyağlılar analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What prized wild edible thistle plant with fleshy white roots is celebrated as a gourmet delicacy in Aegean Izmir cuisine?",
          "options": [
            "Semizotu",
            "Kuzu kulağı",
            "Şevketibostan",
            "Isırgan otu"
          ],
          "answerIndex": 2,
          "explanation": "Şevketibostan.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Aegean Olive Oil Alchemy & Cold Vegetable Poetry"
  },
  "tr-u31-l5": {
    "id": "tr-u31-l5",
    "unit": "tr-u31",
    "level": "C2",
    "objective": "C2 synthesis on The Turkish Coffee Ritual & The Confectionery of Lokum: UNESCO Heritage (Türk Kahvesi Kültürü ve Geleneği - UNESCO İnsanlığın Somut Olmayan Kültürel Mirası 2013; cezvede kısık ateşte veya sıcak kumda ağır ağır pişen bol köpüklü incecik çekilmiş kahve; Türk Lokumu (Rahat-ül Hulküm): Hacı Bekir 1777 usta geleneği, mısır nişastası, çifte kavrulmuş Antep fıstığı, gül suyu ve pudra şekeri; bir yudum su ve telve falı adabı).",
    "presentation": {
      "explanation": "Turkish Coffee Culture and the Master Craft of Turkish Delight (Lokum):\n- **UNESCO Intangible Cultural Heritage of Humanity (2013)**:\n  - Inscribed as a living social symbol of hospitality, friendship, leisure, and fortune-telling across the Mediterranean and Middle East;\n- The Scientific Brewing Architecture of Turkish Coffee:\n  - **The Grind**: Ground into the finest flour-like microscopic powder ($< 100 \\mu\\text{m}$) of any coffee brewing method on Earth;\n  - **The Cezve (Copper Pot)**: Narrow-necked hammered copper or brass pot (*cezve*);\n  - **Slow Thermal Convection**: Brewed on low charcoal embers or in heated sand (**kumda kahve**);\n  - As water heats, fine grounds rise to the surface, forming a thick, velvety crema foam (**bol köpük**) that seals in delicate aromatic volatiles;\n  - Poured unfiltered into small porcelain cups (**fincan**), where fine grounds settle naturally to the bottom (*telve*);\n  - **The Water Rule**: A small glass of pure cold water is served alongside and sipped **before the coffee** to cleanse the palate;\n  - **Tasseography (Kahve Falı)**: Turning the cup onto the saucer to read fortunes in the settled grounds;\n- **The Royal Confectionery of Lokum (Turkish Delight - Founded 1777 by Hacı Bekir)**:\n  - Created by imperial confectioner **Ali Muhiddin Hacı Bekir** in Istanbul;\n  - Transformed heavy flour-and-honey pastes by inventing the translucent, chewy matrix of **pure cornstarch, sugar syrup, and rosewater (*gül suyu*)**;\n  - Crowned by **Çifte Kavrulmuş Fıstıklı Lokum** (double-roasted Antep pistachios encased in translucent gelatinous delight, dusted in powdered sugar).",
      "examples": [
        {
          "target": "Türk kahvesi ve çifte kavrulmuş fıstıklı lokum, 2013'te UNESCO İnsanlığın Somut Olmayan Kültürel Mirası listesine kaydedilmiştir.",
          "reading": "Toork kah-ve-see ve cheef-te...",
          "translation": "Turkish coffee and double-roasted pistachio delight were inscribed in the UNESCO Intangible Cultural Heritage list in 2013."
        }
      ],
      "mnemonics": [
        "Türk Kahvesi (UNESCO 2013 Heritage)! Flour-fine microscopic grind! Hammered copper Cezve or hot sand (Kumda kahve)! Velvety bol köpük foam! Water sipped BEFORE coffee! Telve falı! Hacı Bekir 1777 Turkish Lokum with rosewater & double-roasted pistachios!"
      ],
      "culturalNotes": [
        "The immortal Turkish proverb states: *«Bir fincan kahvenin kırk yıl hatırı vardır»* (*\"A single cup of coffee carries forty years of gratitude and friendship\"*)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which historic confectionery house, established in Istanbul's Bahçekapı district in 1777, invented modern starch-based Turkish Delight (Lokum)?",
          "options": [
            "Hacı Bekir",
            "Güllüoğlu",
            "Karaköy Güllüoğlu",
            "Hafız Mustafa"
          ],
          "answerIndex": 0,
          "explanation": "Hacı Bekir (Ali Muhiddin Hacı Bekir)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Why is a small glass of water traditionally served alongside a cup of Turkish coffee?",
          "options": [
            "To dilute the coffee.",
            "To wash the hands.",
            "To extinguish the cezve fire.",
            "To be sipped before the coffee to cleanse the palate so the coffee flavors are fully appreciated."
          ],
          "answerIndex": 3,
          "explanation": "To be sipped before the coffee to cleanse the palate."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Translate: \"Turkish coffee requires the finest microscopic grind and slow brewing in a copper cezve, generating a velvety foam that seals in aromatic volatiles, followed by the ritual of reading fortune in the settled grounds.\"",
          "options": [
            "UNESCO Türk kahvesini 1950 yılında bir spor dalı olarak tescillemiştir.",
            "Lokum, mısır nişastası yerine sadece çikolata tozu ile yapılır.",
            "Türk kahvesi, en ince mikroskobik öğütmeyi ve aromatik bileşenleri hapseden kadifemsi bir köpük oluşturan bakır cezvede yavaş pişirimi gerektirir, ardından telvede fal bakma ritüeli gelir.",
            "Türk kahvesi filtre kağıdı kullanılarak süzülür."
          ],
          "answerIndex": 2,
          "explanation": "Accurate Turkish coffee analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete the famous Turkish proverb: «Bir fincan kahvenin ... yıl hatırı vardır»?",
          "options": [
            "yüz",
            "kırk",
            "bir",
            "on"
          ],
          "answerIndex": 1,
          "explanation": "kırk (forty / 40).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "C2 synthesis on The Turkish Coffee Ritual & The Confectionery of Lokum"
  },
  "tr-u32-l1": {
    "id": "tr-u32-l1",
    "unit": "u32",
    "level": "C1",
    "objective": "Karagöz ve Hacivat: Geleneksel Türk gölge oyunu, Hayalî, Şeyh Küşteri Meydanı, tasvirler ve UNESCO mirası.",
    "presentation": {
      "explanation": "Karagöz ve Hacivat, kökleri 14. yüzyıl Osmanlı Bursa'sına uzanan ve 2009 yılında UNESCO İnsanlığın Somut Olmayan Kültürel Mirası Temsili Listesi'ne kaydedilen geleneksel Türk gölge oyunudur. Rivayete göre Orhan Gazi devrinde Bursa Ulu Camii inşaatında çalışan iki neşeli işçinin nükte ve atışmalarıyla şantiyeyi oyalaması üzerine başlayan efsane, Şeyh Küşteri tarafından beyaz bir perde (ayna) arkasında mum ışığıyla tasvirlerin oynatılmasıyla sahne sanatına dönüşmüştür («Şeyh Küşteri Meydanı»). Oyun, deve veya manda derisinden kesilip kök boyalarla renklendirilen şeffaf tasvirlerin usta bir gölge oynatıcı («Hayalî» veya «Hayalbaz») ve yardımcısı («Yardak») tarafından yatay tahta çubuklarla oynatılması esasına dayanır. Halkın sağduyusunu, dobra ve eğitimsiz sesini temsil eden Karagöz ile medrese eğitimi almış, yabancı kelimelerle konuşan yarı aydın Hacivat arasındaki dilsel yanlış anlamalar, nükte ve taşlamalar oyunun omurgasını oluşturur.",
      "examples": [
        {
          "target": "Hayalî, perdedeki bütün karakterlerin seslerini ve farklı Osmanlı lehçelerini tek başına taklit eder.",
          "reading": "Hayalî, perdedeki bütün karakterlerin seslerini ve farklı Osmanlı lehçelerini tek başına taklit eder.",
          "translation": "The shadow master imitates the voices of all characters and different Ottoman dialects all by himself."
        },
        {
          "target": "Perde gazeli, oyunun başında tasavvufi ve felsefi bir derinlikle dünyanın faniliğini dile getirir.",
          "reading": "Perde gazeli, oyunun başında tasavvufi ve felsefi bir derinlikle dünyanın faniliğini dile getirir.",
          "translation": "The screen lyric expresses the fleeting nature of the world with mystical depth at the start of the play."
        }
      ],
      "mnemonics": [
        "Karagöz ve Hacivat: Karagöz halkın dobrası ve hazırcevabı, Hacivat ise ağdalı dil kullanan kibar arabulucudur."
      ],
      "culturalNotes": [
        "Karagöz oyunu; Mukaddime (Giriş), Muhavere (Atışma), Fasıl (Asıl Oyun) ve Bitiş olmak üzere dört geleneksel bölümden meydana gelir."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Geleneksel Türk gölge oyununda tasvirleri perde arkasında tek başına seslendirip oynatan ustaya ne ad verilir?",
          "options": [
            "Hayalî",
            "Kavuklu",
            "Sufleci",
            "Figüran"
          ],
          "answerIndex": 0,
          "explanation": "Gölge oyununun tüm seslendirme ve manipülasyonunu yöneten tek ustaya Hayalî denir."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Karagöz perdesine gölge oyununun piri kabul edilen Şeyh Küşteri'nin anısına ne ad verilir?",
          "options": [
            "Şeyh Küşteri Meydanı",
            "Gülhane Meydanı",
            "Divan-ı Hümayun",
            "Enderun Sahnesi"
          ],
          "answerIndex": 0,
          "explanation": "Gölge oyunu perdesi gelenekte saygıyla «Şeyh Küşteri Meydanı» olarak anılır."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Karagöz oyununda tasvirler geleneksel olarak hangi malzemeden yapılarak şeffaflaştırılır ve renklendirilir?",
          "options": [
            "İşlenmiş şeffaf deve veya manda derisi",
            "Sert plastik levhalar",
            "Alüminyum folyo",
            "Renkli karton kâğıt"
          ],
          "answerIndex": 0,
          "explanation": "Geleneksel tasvirler dayanıklı ve ışığı geçiren tabaklanmış deve derisinden oyulur.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Karagöz oyunu hangi yıl UNESCO İnsanlığın Somut Olmayan Kültürel Mirası Temsili Listesi'ne kabul edilmiştir?",
          "options": [
            "2009",
            "1985",
            "2020",
            "1950"
          ],
          "answerIndex": 0,
          "explanation": "Türkiye adına Karagöz geleneği 2009 yılında UNESCO listesine tescil edilmiştir.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Karagöz ve Hacivat"
  },
  "tr-u32-l2": {
    "id": "tr-u32-l2",
    "unit": "u32",
    "level": "C1",
    "objective": "Ortaoyunu ve Meddahlık: Kavuklu ile Pişekâr, İsmail Dümbüllü Kavuk geleneği ve Ferhan Şensoy.",
    "presentation": {
      "explanation": "Ortaoyunu ve Meddahlık, Türk temaşa sanatının gölge oyunundan canlı oyuncu meydanına ve tek kişilik anlatı tiyatrosuna geçişini temsil eden temel halk tiyatrosu türleridir. Ortaoyunu; çepeçevre seyircilerle çevrili üstü açık bir alanda («Palanga»), paravan görevi gören «yeni dünya» ve dükkân dekoru eşliğinde yazılı metne dayanmadan (doğaçlama / tulûat) sergilenir. Karagöz'ün canlı sahnedeki karşılığı olan saf ve komik «Kavuklu» ile Hacivat'ın dengi olan eğitimli, görgülü «Pişekâr» arasındaki söz düelloları halkın zekasını yansıtır. Meddah ise bir mendil (makrame) ve sopa (pastav) yardımıyla yüksekçe bir sandalyede onlarca farklı tipi canlandıran tek kişilik destansı anlatıcıdır. Türk tiyatrosunun en kutsal simgesi sayılan «Kavuk» (ve fes), Kel Hasan Efendi'den İsmail Dümbüllü'ye, ondan Münir Özkul'a, Ferhan Şensoy'a, Rasim Öztekin'e ve Şevket Çoruh'a devredilen asırlık bir usta-çırak mirasıdır.",
      "examples": [
        {
          "target": "Ortaoyununda Kavuklu'nun Pişekâr ile yaptığı tekerleme bölümü doğaçlama ustalığının zirvesidir.",
          "reading": "Ortaoyununda Kavuklu'nun Pişekâr ile yaptığı tekerleme bölümü doğaçlama ustalığının zirvesidir.",
          "translation": "In Ortaoyunu, the punning sequence between Kavuklu and Pişekâr represents the peak of improvisational mastery."
        },
        {
          "target": "Kel Hasan Efendi'den devredilen Kavuk, Türk güldürü tiyatrosunun meşalesi kabul edilir.",
          "reading": "Kel Hasan Efendi'den devredilen Kavuk, Türk güldürü tiyatrosunun meşalesi kabul edilir.",
          "translation": "The Kavuk passed down from Kel Hasan Efendi is considered the torch of Turkish comedy theatre."
        }
      ],
      "mnemonics": [
        "Kavuk geleneği zinciri: Kel Hasan -> İsmail Dümbüllü -> Münir Özkul -> Ferhan Şensoy -> Rasim Öztekin -> Şevket Çoruh."
      ],
      "culturalNotes": [
        "Ferhan Şensoy kurduğu «Ortaoyuncular» tiyatrosu ve Şan Tiyatrosu'ndaki devrimci kabareleriyle bu geleneksel damarı çağdaş siyasi hicve taşımıştır."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Ortaoyununun sergilendiği, seyircilerle çevrili açık meydana ve ana oyun alanına ne ad verilir?",
          "options": [
            "Palanga",
            "Kulisse",
            "Agora",
            "Arena"
          ],
          "answerIndex": 0,
          "explanation": "Ortaoyunu palanga adı verilen dairesel veya elips biçimli açık alanda oynanır."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Geleneksel Meddah anlatıcısının elinde tuttuğu iki temel simgesel aksesuar nedir?",
          "options": [
            "Mendil (makrame) ve sopa / değnek",
            "Kılıç ve kalkan",
            "Fener ve büyüteç",
            "Gözlük ve kitap"
          ],
          "answerIndex": 0,
          "explanation": "Meddah sopayı dikkat çekmek ve ses çıkarmak, mendili ise farklı karakterleri taklit etmek için kullanır."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "İsmail Dümbüllü'nün geleneksel Türk tiyatrosunun simgesi olan tarihi Kavuk'u devrettiği efsanevi aktör kimdir?",
          "options": [
            "Münir Özkul",
            "Sadri Alışık",
            "Kemal Sunal",
            "Şener Şen"
          ],
          "answerIndex": 0,
          "explanation": "İsmail Dümbüllü 1968 yılında Kavuk'u Münir Özkul'a devrederek geleneği taçlandırmıştır.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ortaoyununda zurna eşliğinde meydana ilk çıkan, oyunu başlatan ve idare eden bilgili karakter kimdir?",
          "options": [
            "Pişekâr",
            "Kavuklu",
            "Zenne",
            "Çelebi"
          ],
          "answerIndex": 0,
          "explanation": "Pişekâr oyunu açan, seyirciyi selamlayan ve akışı düzenleyen yönetici figürdür.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Ortaoyunu ve Meddahlık"
  },
  "tr-u32-l3": {
    "id": "tr-u32-l3",
    "unit": "u32",
    "level": "C1",
    "objective": "Darülbedayi ve Muhsin Ertuğrul: Çağdaş Türk tiyatrosunun kuruluşu (1914), Şehir Tiyatroları ve Afife Jale (1920).",
    "presentation": {
      "explanation": "Modern ve kurumsal Türk tiyatrosunun temelleri, 1914 yılında İstanbul Şehremini Cemil Topuzlu Paşa'nın davetiyle Fransız tiyatro kuramcısı André Antoine'ın İstanbul'a gelişi ve *Darülbedayi-i Osmanî*'nin (Güzellikler Evi / Şehir Tiyatroları) kurulmasıyla atıldı. Kurumun başına geçen büyük tiyatro ve sinema adamı Muhsin Ertuğrul (1892–1979), disiplinli oyunculuk, batılı sahneleme teknikleri, dünya klasiklerinin çevirisi ve telif Türk piyeslerinin teşvikiyle modern bir devrim gerçekleştirdi. 1920 yılında, Kadıköy Apollon Sineması'nda Hüseyin Suat'ın *Tatlı Sır* oyununda «Emel» rolüyle sahneye çıkan Afife Jale (1902–1941), Osmanlı döneminde sahneye çıkan ilk Müslüman Türk kadın oyuncu olarak tarihe geçti. Polisin baskı ve tutuklamalarına rağmen «Beni acıyarak değil, sahneye adım attığım cesaretle anın» diyerek kadınların sanat özgürlüğünün ölümsüz meşalesi oldu.",
      "examples": [
        {
          "target": "Muhsin Ertuğrul, disiplinli sahne ahlakı ve yerli piyes yazımına verdiği destekle Türk tiyatrosunu kurumsallaştırdı.",
          "reading": "Muhsin Ertuğrul, disiplinli sahne ahlakı ve yerli piyes yazımına verdiği destekle Türk tiyatrosunu kurumsallaştırdı.",
          "translation": "Muhsin Ertuğrul institutionalized Turkish theatre through disciplined stage ethics and support for local playwrighting."
        },
        {
          "target": "Afife Jale, baskılara boyun eğmeyerek Türk kadınına tiyatro sahnelerinin kapısını sonsuza dek açtı.",
          "reading": "Afife Jale, baskılara boyun eğmeyerek Türk kadınına tiyatro sahnelerinin kapısını sonsuza dek açtı.",
          "translation": "Afife Jale opened the doors of theatre stages to Turkish women forever by refusing to bow to oppression."
        }
      ],
      "mnemonics": [
        "Darülbedayi 1914 (Şehir Tiyatroları beşiği) + Muhsin Ertuğrul disiplini + Afife Jale'nin 1920 sahne devrimi."
      ],
      "culturalNotes": [
        "Türkiye'nin en prestijli tiyatro ödülleri, Afife Jale'nin anısına her yıl düzenlenen «Afife Tiyatro Ödülleri» adıyla verilmektedir."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "1920 yılında sahneye çıkan ilk Müslüman Türk kadın tiyatro oyuncusu kimdir?",
          "options": [
            "Afife Jale",
            "Cahide Sonku",
            "Gülriz Sururi",
            "Yıldız Kenter"
          ],
          "answerIndex": 0,
          "explanation": "Afife Jale, 1920'de Kadıköy Apollon Tiyatrosu'nda sahneye çıkarak büyük bir tabuyu yıkmıştır."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "1914'te temelleri atılan ve günümüzde İstanbul Büyükşehir Belediyesi Şehir Tiyatroları olarak yaşayan tarihi kurumun ilk adı nedir?",
          "options": [
            "Darülbedayi-i Osmanî",
            "Darülfünun",
            "Darüşşafaka",
            "Mekteb-i Mülkiye"
          ],
          "answerIndex": 0,
          "explanation": "Darülbedayi («Güzellikler Kapısı»), Türk tiyatrosunun ilk konservatuvar ve ödenekli tiyatro kurumudur."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Türk tiyatrosunun batılı anlamda kurucusu ve uzun yıllar Şehir Tiyatroları ile Devlet Tiyatroları genel sanat yönetmenliğini yürüten isim kimdir?",
          "options": [
            "Muhsin Ertuğrul",
            "Haldun Taner",
            "Ahmet Vefik Paşa",
            "Genco Erkal"
          ],
          "answerIndex": 0,
          "explanation": "Muhsin Ertuğrul, modern Türk sahne sanatlarının en büyük mimarı ve eğitmenidir.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Her yıl Türkiye'nin en başarılı tiyatro sanatçılarına verilen en köklü ve saygın tiyatro ödülü hangisidir?",
          "options": [
            "Afife Tiyatro Ödülleri",
            "Altın Portakal",
            "Altın Koza",
            "Sedat Simavi Ödülleri"
          ],
          "answerIndex": 0,
          "explanation": "Afife Tiyatro Ödülleri, Yapı Kredi sponsorluğunda 1997'den beri aralıksız verilmektedir.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Darülbedayi ve Muhsin Ertuğrul"
  },
  "tr-u32-l4": {
    "id": "tr-u32-l4",
    "unit": "u32",
    "level": "C1",
    "objective": "Haldun Taner ve Epik Kabare: Keşanlı Ali Destanı (1964), Devekuşu Kabare, Zeki Alasya ve Metin Akpınar.",
    "presentation": {
      "explanation": "Haldun Taner (1915–1986), Türk edebiyatı ve tiyatrosunda epik tiyatro ve kabare türünün tartışmasız kurucusu ve büyük ustasıdır. 1964 yılında Gülriz Sururi - Engin Cezzar Tiyatrosu tarafından sahnelenen ve müziğini Yalçın Tura'nın bestelediği *Keşanlı Ali Destanı*, Türk tiyatrosunun ilk epik müzikal şaheseridir. Gecekondu ortamında geçen oyun, haksız yere hapse giren Ali'nin halkın gözünde nasıl bir mitolojik halk kahramanına dönüştüğünü Brechtyen yabancılaştırma ve geleneksel meddah-ortaoyunu ögelerini harmanlayarak hicveder. 1967 yılında Haldun Taner, Zeki Alasya, Metin Akpınar ve Ahmet Gülhan tarafından kurulan «Devekuşu Kabare Tiyatrosu» (*Vatan Kurtaran Şaban*, *Gözlerimi Kaparım Vazifemi Yaparım*, *Aşk Olsun*), zekice kurgulanmış skeçleri ve taşlamalarıyla Türk halkının hafızasına kazınmış bir toplumsal muhalefet ve mizah okulu olmuştur.",
      "examples": [
        {
          "target": "Keşanlı Ali Destanı, gecekondu kültürünün doğumunu ve kitlelerin kahraman yaratma zaafını epik dille eleştirir.",
          "reading": "Keşanlı Ali Destanı, gecekondu kültürünün doğumunu ve kitlelerin kahraman yaratma zaafını epik dille eleştirir.",
          "translation": "The Ballad of Ali of Keshan critically examines the birth of shantytown culture and the masses' weakness for creating mythical heroes in epic style."
        },
        {
          "target": "Devekuşu Kabare, Zeki Alasya ve Metin Akpınar'ın eşsiz oyunculuk uyumuyla dönemin siyasi tabularını hicvetmiştir.",
          "reading": "Devekuşu Kabare, Zeki Alasya ve Metin Akpınar'ın eşsiz oyunculuk uyumuyla dönemin siyasi tabularını hicvetmiştir.",
          "translation": "Devekuşu Cabaret satirized the political taboos of the era through the unique acting chemistry of Zeki Alasya and Metin Akpınar."
        }
      ],
      "mnemonics": [
        "Haldun Taner ustalığı: Keşanlı Ali Destanı (ilk epik müzikal) + Devekuşu Kabare (siyasi mizah okulu)."
      ],
      "culturalNotes": [
        "*Keşanlı Ali Destanı*, aralarında Almanca, İngilizce, Fransızca, İtalyanca ve Arapça'nın bulunduğu onlarca dile çevrilip Berlin'den Londra'ya dünya sahnelerinde oynanmıştır."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Türk tiyatro tarihinin ilk epik tiyatro başyapıtı kabul edilen ve Haldun Taner tarafından yazılan 1964 tarihli oyun hangisidir?",
          "options": [
            "Keşanlı Ali Destanı",
            "Lüküs Hayat",
            "Köşebaşı",
            "Paydos"
          ],
          "answerIndex": 0,
          "explanation": "*Keşanlı Ali Destanı*, geleneksel anlatı ögeleriyle Brecht tiyatrosunu birleştiren ilk yerli epik eserdir."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "1967 yılında Haldun Taner'in öncülüğünde Zeki Alasya ve Metin Akpınar ile birlikte kurulan efsanevi kabare tiyatrosu hangisidir?",
          "options": [
            "Devekuşu Kabare Tiyatrosu",
            "Dostlar Tiyatrosu",
            "Kent Oyuncuları",
            "AST"
          ],
          "answerIndex": 0,
          "explanation": "Devekuşu Kabare, Türkiye'de siyasi ve edebi kabare türünün zirvesini temsil eder."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Haldun Taner'in bürokrasiyi ve her devrin adamı olma fırsatçılığını eleştirdiği ünlü hiciv piyesi hangisidir?",
          "options": [
            "Gözlerimi Kaparım, Vazifemi Yaparım",
            "Çalıkuşu",
            "Yaban",
            "Kiralık Konak"
          ],
          "answerIndex": 0,
          "explanation": "*Gözlerimi Kaparım Vazifemi Yaparım*, Vicdani ve Efruz karakterleri üzerinden Türkiye'nin yakın tarihini hicveder.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Keşanlı Ali Destanı oyununun dünya çapında tanınan unutulmaz müziklerini besteleyen ünlü besteci kimdir?",
          "options": [
            "Yalçın Tura",
            "Münir Nurettin Selçuk",
            "Cemal Reşit Rey",
            "Ulvi Cemal Erkin"
          ],
          "answerIndex": 0,
          "explanation": "Prof. Yalçın Tura eserin epik şarkılarını geleneksel Türk makamlarıyla harmanlayarak bestelemiştir.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Haldun Taner ve Epik Kabare"
  },
  "tr-u32-l5": {
    "id": "tr-u32-l5",
    "unit": "u32",
    "level": "C1",
    "objective": "Çağdaş Türk Dramaturgisi: Genco Erkal ve Dostlar Tiyatrosu, Nâzım Hikmet uyarlamaları ve politik sahne.",
    "presentation": {
      "explanation": "Çağdaş Türk tiyatrosunun en saygın ve ödün vermez doruklarından biri, usta tiyatrocu Genco Erkal (1938–2024) ve 1969 yılında kurduğu «Dostlar Tiyatrosu»dur. Türk tiyatrosunda politik, belgesel ve epik sahneleme anlayışını kurumsallaştıran Erkal, özellikle Nâzım Hikmet'in destansı şiir külliyatını (*Kuvâyi Milliye Destanı*, *Yaşamaya Dair*, *Kerem Gibi*, *Güneşin Sofrasında*) tek kişilik ve çok sesli sahne senfonilerine dönüştürerek efsaneleşti. Nikolay Gogol'ün *Bir Delinin Hatıra Defteri* eserini 1965'ten itibaren Türkiye'de ilk kez tek kişilik oyun olarak oynayan ve neredeyse 60 yıl boyunca aralıksız sahneleyen Erkal, Bertolt Brecht uyarlamaları (*Gurgula*, *Ben Bertolt Brecht*) ve Aziz Nesin taşlamalarıyla açık hava tiyatrolarından tarihi mekanlara kadar kitleleri aydınlatan sarsıcı bir entelektüel direniş kalesi inşa etti.",
      "examples": [
        {
          "target": "Genco Erkal, Bir Delinin Hatıra Defteri'ni Türkiye'de ilk kez tek kişilik sahne gösterisi olarak sergiledi.",
          "reading": "Genco Erkal, Bir Delinin Hatıra Defteri'ni Türkiye'de ilk kez tek kişilik sahne gösterisi olarak sergiledi.",
          "translation": "Genco Erkal performed Diary of a Madman for the first time in Turkey as a solo one-man stage production."
        },
        {
          "target": "Dostlar Tiyatrosu, Nâzım Hikmet'in dizelerini halkla buluşturan devrimci bir sahne dili kurdu.",
          "reading": "Dostlar Tiyatrosu, Nâzım Hikmet'in dizelerini halkla buluşturan devrimci bir sahne dili kurdu.",
          "translation": "Dostlar Theatre established a revolutionary stage language bringing Nâzım Hikmet's verses to the people."
        }
      ],
      "mnemonics": [
        "Genco Erkal mirası: Dostlar Tiyatrosu (1969) + Bir Delinin Hatıra Defteri virtüözlüğü + Nâzım Hikmet tutkusu."
      ],
      "culturalNotes": [
        "Genco Erkal, sinemada Erden Kıral'ın yönettiği 1983 yapımı *Hakkâri'de Bir Mevsim* filmindeki öğretmen rolüyle Berlin Film Festivali'nde Gümüş Ayı ödülünü paylaşmıştır."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "1969 yılında Genco Erkal ve arkadaşları tarafından kurulan ve Türk politik tiyatrosunun öncüsü olan topluluk hangisidir?",
          "options": [
            "Dostlar Tiyatrosu",
            "Oyun Atölyesi",
            "Kenter Tiyatrosu",
            "BKM"
          ],
          "answerIndex": 0,
          "explanation": "Dostlar Tiyatrosu, yarım asrı aşkın süre boyunca toplumcu tiyatronun öncülüğünü yapmıştır."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Genco Erkal'ın 1965 yılından itibaren Türkiye'de ilk tek kişilik oyun olarak sahnelediği Gogol eseri hangisidir?",
          "options": [
            "Bir Delinin Hatıra Defteri",
            "Müfettiş",
            "Ölü Canlar",
            "Palto"
          ],
          "answerIndex": 0,
          "explanation": "*Bir Delinin Hatıra Defteri* Poprişçin karakteriyle Genco Erkal'ın anıtlaşmış başyapıtıdır."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Genco Erkal hangi dünya şairinin şiirlerini tiyatro sahnesine taşıyarak Yaşamaya Dair ve Kerem Gibi oyunlarını yaratmıştır?",
          "options": [
            "Nâzım Hikmet Ran",
            "Attila İlhan",
            "Orhan Veli Kanık",
            "Ahmet Arif"
          ],
          "answerIndex": 0,
          "explanation": "Genco Erkal, Nâzım Hikmet'in şiirlerini tiyatro formunda sahneleyen en büyük ustaydı.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Genco Erkal'ın başrolünü oynadığı ve 1983 Berlin Film Festivali'nde Gümüş Ayı kazanan ünlü film hangisidir?",
          "options": [
            "Hakkâri'de Bir Mevsim",
            "Yol",
            "Umut",
            "Sürü"
          ],
          "answerIndex": 0,
          "explanation": "Ferit Edgü'nün romanından uyarlanan *Hakkâri'de Bir Mevsim*, Türk sinemasının başyapıtlarındandır.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Çağdaş Türk Dramaturgisi"
  },
  "tr-u33-l1": {
    "id": "tr-u33-l1",
    "unit": "u33",
    "level": "C1",
    "objective": "Mimar Sinan ve Klasik Osmanlı Mimarisi: Şehzadebaşı («çıraklık»), Süleymaniye («kalfalık») ve Selimiye («ustalık», 1575).",
    "presentation": {
      "explanation": "Koca Mimar Sinan (1488/1490–1588), Osmanlı İmparatorluğu'nun Başmimarı (Ser-mimarân-ı Hassa) olarak yaklaşık 50 yıl boyunca görev yapmış ve dünya mimarlık tarihinin en büyük dâhilerinden biri kabul edilmiştir. Sinan, merkezi kubbe mekanını kademeli yarım kubbeler, pandantifler, tromplar ve filayaklarıyla genişleterek ferah, aydınlık ve tek parça bir iç mekan elde etme idealini kusursuzlaştırmıştır. Kendi ifadesiyle gelişim çizgisini üç anıtsal camiyle özetlemiştir: Çıraklık eseri *Şehzade Camii* (1548, merkezi kubbeyi dört yarım kubbeyle çevreleyen ideal simetri), kalfalık eseri İstanbul *Süleymaniye Camii* (1557, Kanuni Sultan Süleyman adına Haliç'e nazır inşa edilen, akustik küpleri ve hava akım odalarıyla donatılmış muazzam külliye) ve ustalık eseri Edirne *Selimiye Camii* (1575, UNESCO Dünya Mirası). Selimiye'de 31,25 metrelik devasa ana kubbeyi sekiz büyük filayağı üzerine oturtarak hiçbir yarım kubbeye ihtiyaç duymadan mekan bütünlüğü ve ferahlıkta erişilmez bir zirveye ulaşmıştır.",
      "examples": [
        {
          "target": "Selimiye Camii'nin sekizgen kaideye oturan kubbesi iç mekanda benzersiz bir ferahlık ve aydınlık yaratır.",
          "reading": "Selimiye Camii'nin sekizgen kaideye oturan kubbesi iç mekanda benzersiz bir ferahlık ve aydınlık yaratır.",
          "translation": "The dome of Selimiye Mosque sitting on an octagonal base creates unique spaciousness and light inside."
        },
        {
          "target": "Süleymaniye Külliyesi; medreseleri, darüşşifası ve kütüphanesiyle devrin en büyük üniversite kampüsüdür.",
          "reading": "Süleymaniye Külliyesi; medreseleri, darüşşifası ve kütüphanesiyle devrin en büyük üniversite kampüsüdür.",
          "translation": "Süleymaniye Complex was the greatest university campus of the era with its madrasas, hospital, and library."
        }
      ],
      "mnemonics": [
        "Mimar Sinan üçlemesi: Şehzade (çıraklık - 4 yarım kubbe) -> Süleymaniye (kalfalık - külliye ihtişamı) -> Selimiye (ustalık - 8 filayağı)."
      ],
      "culturalNotes": [
        "Mimar Sinan'ın Süleymaniye Camii'nde yanan yüzlerce kandilin isini toplayıp mürekkep yaptığı ve hava akımıyla yönlendirdiği «İs Odası» mühendislik harikasıdır."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Mimar Sinan'ın bizzat kendi sözleriyle «ustalık eserim» dediği ve 1575 yılında tamamlanan Edirne'deki şaheseri hangisidir?",
          "options": [
            "Selimiye Camii",
            "Süleymaniye Camii",
            "Şehzade Camii",
            "Mihrimah Sultan Camii"
          ],
          "answerIndex": 0,
          "explanation": "Edirne Selimiye Camii, Sinan'ın sekizgen taşıyıcı sistemle merkezi kubbeyi zirveye ulaştırdığı ustalık yapıtıdır."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Mimar Sinan'ın Süleymaniye Camii kubbesinin altına yerleştirdiği ters çömlekler ve küpler hangi mühendislik amacına hizmet eder?",
          "options": [
            "Mükemmel bir akustik rezonans sağlamak ve sesin her köşeye eşit yayılmasını temin etmek.",
            "Deprem anında su depolamak.",
            "Caminin içine kuşların yuva yapmasını engellemek.",
            "Fazla altınları saklamak."
          ],
          "answerIndex": 0,
          "explanation": "Sinan kubbe içine içi boş akustik küpler yerleştirerek insan sesinin kusursuz yankılanmasını sağlamıştır."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Mimar Sinan'ın «çıraklık eserim» olarak nitelendirdiği İstanbul Fatih'teki 1548 tarihli anıtsal cami hangisidir?",
          "options": [
            "Şehzade Camii",
            "Rüstem Paşa Camii",
            "Kılıç Ali Paşa Camii",
            "Piyale Paşa Camii"
          ],
          "answerIndex": 0,
          "explanation": "Şehzade Camii, Kanuni'nin genç yaşta ölen oğlu Şehzade Mehmet için yaptırılmış ve Sinan'ın ilk anıt yapısı olmuştur.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Mimar Sinan'ın türbesi İstanbul'da hangi büyük külliyenin hemen kuzeydoğu köşesinde mütevazı bir açık türbede yer alır?",
          "options": [
            "Süleymaniye Külliyesi",
            "Fatih Külliyesi",
            "Sultanahmet Camii",
            "Eyüp Sultan Külliyesi"
          ],
          "answerIndex": 0,
          "explanation": "Sinan kendi tasarladığı sade türbesinde Süleymaniye Camii'nin gölgesinde yatmaktadır.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Mimar Sinan ve Klasik Osmanlı Mimarisi"
  },
  "tr-u33-l2": {
    "id": "tr-u33-l2",
    "unit": "u33",
    "level": "C1",
    "objective": "Ayasofya: Mimarlık tarihinin 1500 yıllık matrisi, pandantif kubbe geometrisi ve Doğu Roma-Osmanlı sentezi (537).",
    "presentation": {
      "explanation": "Ayasofya (Kutsal Bilgelik / Hagia Sophia), Doğu Roma İmparatoru I. Justinianus tarafından 532–537 yılları arasında Miletli İsidoros ve Trallesli Anthemios adlı iki matematikçi ve fizikçiye inşa ettirilen, dünya mimarlık tarihinin en devrimci anıtlarından biridir. Dört devasa kemer üzerine oturtulan 31 metre çapındaki basık ana kubbe, ağırlığını köşe «pandantifler» (küresel üçgenler) aracılığıyla dört masif ayağa aktararak kare bir tabanın üzerinde havada asılıymış hissi verir. 1453'te Fatih Sultan Mehmet'in İstanbul'u fethiyle camiye dönüştürülen yapı, Osmanlı döneminde Mimar Sinan tarafından eklenen devasa dış payandalar ve istinat duvarları sayesinde depremlere karşı güçlendirilmiş, minareler, Kazasker Mustafa İzzet Efendi'nin devasa hat levhaları ve hünkar mahfili ile Doğu Roma ve İslam sanatının görkemli bir sentezine dönüşmüştür.",
      "examples": [
        {
          "target": "Ayasofya'nın pandantif kubbe sistemi, kubbenin adeta gökyüzünden altın bir zincirle sarkıtıldığı hissini verir.",
          "reading": "Ayasofya'nın pandantif kubbe sistemi, kubbenin adeta gökyüzünden altın bir zincirle sarkıtıldığı hissini verir.",
          "translation": "Hagia Sophia's pendentive dome system creates the impression that the dome is suspended by a golden chain from heaven."
        },
        {
          "target": "Mimar Sinan'ın eklediği istinat payandaları Ayasofya'yı günümüze kadar ayakta tutan can simidi olmuştur.",
          "reading": "Mimar Sinan'ın eklediği istinat payandaları Ayasofya'yı günümüze kadar ayakta tutan can simidi olmuştur.",
          "translation": "The retaining buttresses added by Mimar Sinan were the lifeline keeping Hagia Sophia standing to this day."
        }
      ],
      "mnemonics": [
        "Ayasofya geometrisi: Kare plan üzerine oturan pandantifli ana kubbe + doğu ve batı yarım kubbeleri."
      ],
      "culturalNotes": [
        "Ayasofya, 537 yılındaki inşasından 1520 yılında Sevilla Katedrali tamamlanana kadar yaklaşık bin yıl boyunca dünyanın en büyük katedrali unvanını korumuştur."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Dairesel bir kubbenin kare planlı bir alt yapıya statik olarak oturmasını sağlayan küresel üçgen mimari elemana ne ad verilir?",
          "options": [
            "Pandantif",
            "Sütun başlığı",
            "Kemer kilittaşı",
            "Çan kulesi"
          ],
          "answerIndex": 0,
          "explanation": "Pandantifler, küre kesiti üçgenler olarak kubbe yükünü dört ana sütun ayağına aktarır."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "16. yüzyılda Ayasofya'nın yıkılmasını engellemek için dev istinat duvarları ve minareler inşa eden Osmanlı mimarı kimdir?",
          "options": [
            "Mimar Sinan",
            "Mimar Hayrettin",
            "Sedefkâr Mehmet Ağa",
            "Balyan Usta"
          ],
          "answerIndex": 0,
          "explanation": "Mimar Sinan yaptığı payanda ve destek duvarlarıyla yapının statik ömrünü uzatmıştır."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Ayasofya'nın yapımını 532 yılında başlatan Doğu Roma (Bizans) İmparatoru kimdir?",
          "options": [
            "I. Justinianus",
            "Büyük Konstantin",
            "Teodosyus",
            "Herakleios"
          ],
          "answerIndex": 0,
          "explanation": "İmparator I. Justinianus, Nika Ayaklanması'ndan hemen sonra yapıyı 5 yılda inşa ettirmiştir.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Ayasofya'nın kubbe eteğini çevreleyen kaç adet pencere iç mekana mistik bir ışık akışı sağlar?",
          "options": [
            "40 pencere",
            "12 pencere",
            "4 pencere",
            "100 pencere"
          ],
          "answerIndex": 0,
          "explanation": "Kubbe kasnağındaki 40 pencere kubbenin adeta ışık üzerinde yüzdüğü yanılsamasını yaratır.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Ayasofya"
  },
  "tr-u33-l3": {
    "id": "tr-u33-l3",
    "unit": "u33",
    "level": "C1",
    "objective": "Topkapı Sarayı ve Divan Avluları: Bâb-ı Hümâyûn, Harem-i Hümâyûn, Enderun Mektebi ve ahşap köşk mimarisi.",
    "presentation": {
      "explanation": "Topkapı Sarayı (Saray-ı Cedîd-i Âmire), Fatih Sultan Mehmet tarafından 1460–1478 yılları arasında Sarayburnu yarımadasında inşa ettirilen ve yaklaşık 400 yıl boyunca Osmanlı İmparatorluğu'nun idari, siyasi ve hanedan merkezi olan eşsiz bir organik saray kompleksidir. Avrupa'daki tek parça simetrik kütle sarayların (Versailles gibi) aksine Topkapı Sarayı; birbirini takip eden dört törensel avlu etrafında bahçeler, köşkler, divan binaları ve revaklarla harmanlanmış asimetrik ve insani ölçekli bir yerleşim düzenine sahiptir. Birinci avludaki anıtsal *Bâb-ı Hümâyûn* ve *Bâbüsselâm* (Selam Kapısı), ikinci avludaki devlet yönetim merkezi *Divan-ı Hümâyûn* (Kubbealtı) ve Adalet Kulesi, üçüncü avludaki *Enderun Mektebi* ve Hazine, dördüncü avludaki Boğaz manzaralı Revan ve Bağdat Köşkleri ile gizemli *Harem*, Osmanlı klasik saray yaşamının ve ahşap-çini bezeme sanatının zirvesini sergiler.",
      "examples": [
        {
          "target": "Bağdat Köşkü, IV. Murad'ın Bağdat fethi anısına çinilerle bezenmiş klasik köşk mimarisinin şaheseridir.",
          "reading": "Bağdat Köşkü, IV. Murad'ın Bağdat fethi anısına çinilerle bezenmiş klasik köşk mimarisinin şaheseridir.",
          "translation": "Baghdad Kiosk is the masterpiece of classical pavilion architecture decorated with tiles in memory of Murad IV's conquest of Baghdad."
        },
        {
          "target": "Kubbealtı salonu, vezirlerin sadrazam başkanlığında cihan devletinin kararlarını aldığı divan merkezidir.",
          "reading": "Kubbealtı salonu, vezirlerin sadrazam başkanlığında cihan devletinin kararlarını aldığı divan merkezidir.",
          "translation": "The Kubbealtı hall is the imperial council center where viziers presided over by the Grand Vizier took decisions of the world state."
        }
      ],
      "mnemonics": [
        "Topkapı Sarayı 4 Avlu Mantığı: 1. Alay Meydanı -> 2. Divan Meydanı -> 3. Enderun Avlusu -> 4. Hasbahçe ve Köşkler."
      ],
      "culturalNotes": [
        "Topkapı Sarayı Mukaddes Emanetler Dairesi'nde Yavuz Sultan Selim'in 1517 Mısır seferinden bu yana 500 yılı aşkın süredir 24 saat kesintisiz Kur'an-ı Kerim tilaveti geleneği sürmektedir."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Topkapı Sarayı'nda devlet işlerinin görüşüldüğü vezirler divanı olan Kubbealtı hangi avluda yer alır?",
          "options": [
            "İkinci Avlu",
            "Birinci Avlu",
            "Üçüncü Avlu",
            "Gülhane Parkı"
          ],
          "answerIndex": 0,
          "explanation": "İkinci avlu devlet yönetiminin ve ulufe dağıtım törenlerinin yapıldığı resmi merkezdir."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Osmanlı bürokrat ve devlet adamlarının eğitildiği Topkapı Sarayı üçüncü avlusundaki tarihi okul hangisidir?",
          "options": [
            "Enderun Mektebi",
            "Darülmuallimin",
            "Kuleli Mektebi",
            "Mülkiye Mektebi"
          ],
          "answerIndex": 0,
          "explanation": "Enderun Mektebi, yetenekli gençleri imparatorluğun zirve yöneticileri olarak yetiştiren elit okuldur."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Topkapı Sarayı'nın siluetinde en yüksek yapı olan ve adaletin saray üzerindeki üstünlüğünü simgeleyen kule hangisidir?",
          "options": [
            "Adalet Kulesi",
            "Galata Kulesi",
            "Beyazıt Kulesi",
            "Kız Kulesi"
          ],
          "answerIndex": 0,
          "explanation": "Adalet Kulesi Kubbealtı'nın hemen yanında yükselir ve padişahın divanı gizlice izlediği pencereye sahiptir.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Topkapı Sarayı'nı 1478 yılında tamamlatarak ilk kez ikametgah ve yönetim merkezi olarak kullanan Osmanlı padişahı kimdir?",
          "options": [
            "Fatih Sultan Mehmet",
            "Kanuni Sultan Süleyman",
            "Yavuz Sultan Selim",
            "II. Abdülhamid"
          ],
          "answerIndex": 0,
          "explanation": "Fatih Sultan Mehmet fetihten sonra sarayın inşasını emretmiş ve buraya yerleşmiştir.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Topkapı Sarayı ve Divan Avluları"
  },
  "tr-u33-l4": {
    "id": "tr-u33-l4",
    "unit": "u33",
    "level": "C1",
    "objective": "Balyan Ailesi ve Boğaziçi Baroku: Dolmabahçe Sarayı (1856), Çırağan, Beylerbeyi ve Ortaköy Camii.",
    "presentation": {
      "explanation": "19. yüzyıl Osmanlı modernleşme (Tanzimat) dönemi mimarlığına, birkaç kuşak boyunca hassa mimarı olarak hizmet veren Ermeni kökenli Balyan Ailesi (Garabet Amira Balyan, Nigoğos Balyan, Sarkis Balyan) damgasını vurmuştur. Sultan Abdülmecid'in emriyle 1843–1856 yılları arasında inşa edilen *Dolmabahçe Sarayı*, Osmanlı saray mimarisinde geleneksel köşkler düzeninden tek kütleli, 285 odalı ve 44 salonlu anıtsal bir Avrupa sarayına geçişi simgeler. Boğaz kıyısında yükselen saray; Fransız Baroku, Rokoko ve Neoklasisizmi Osmanlı süsleme zevkiyle birleştiren eklektik bir üsluba («Boğaziçi Baroku») sahiptir. Sarayın 4,5 tonluk İngiliz kristal avizesiyle aydınlanan 36 metre yüksekliğindeki Muayede Salonu (Tören Salonu) ve Nigoğos Balyan tasarımı Ortaköy (Büyük Mecidiye) Camii, Boğaziçi siluetinin en zarif neobarok simgeleridir.",
      "examples": [
        {
          "target": "Dolmabahçe Sarayı'nın Muayede Salonu, görkemli kubbesi ve kristal avizesiyle imparatorluğun batılılaşan yüzüdür.",
          "reading": "Dolmabahçe Sarayı'nın Muayede Salonu, görkemli kubbesi ve kristal avizesiyle imparatorluğun batılılaşan yüzüdür.",
          "translation": "The Muayede Hall of Dolmabahçe Palace is the westernizing face of the empire with its magnificent dome and crystal chandelier."
        },
        {
          "target": "Ortaköy Camii, zarif neobarok taş oymacılığıyla Boğaz köprüsü altında büyüleyici bir tezat sunar.",
          "reading": "Ortaköy Camii, zarif neobarok taş oymacılığıyla Boğaz köprüsü altında büyüleyici bir tezat sunar.",
          "translation": "Ortaköy Mosque offers a mesmerizing contrast beneath the Bosphorus Bridge with its elegant neo-baroque stonework."
        }
      ],
      "mnemonics": [
        "Balyan Hanedanı & Boğaziçi Baroku: Dolmabahçe Sarayı (1856) + Ortaköy Camii + Beylerbeyi Sarayı."
      ],
      "culturalNotes": [
        "Türkiye Cumhuriyeti'nin kurucusu Gazi Mustafa Kemal Atatürk, 10 Kasım 1938 günü saat 09.05'te Dolmabahçe Sarayı'nın 71 numaralı odasında ebediyete intikal etmiştir."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "19. yüzyılda Dolmabahçe Sarayı, Ortaköy Camii ve Beylerbeyi Sarayı gibi anıtsal Boğaz yapılarını tasarlayan ünlü mimar ailesi kimdir?",
          "options": [
            "Balyan Ailesi",
            "Fossati Kardeşler",
            "D'Aronco Hanedanı",
            "Melling Kardeşler"
          ],
          "answerIndex": 0,
          "explanation": "Balyan ailesi Tanzimat ve sonrasında Osmanlı saray mimarları olarak anıtsal yapılar inşa etmiştir."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Dolmabahçe Sarayı'nın inşasını 1843 yılında başlatan ve 1856'da açılışını yapan Osmanlı padişahı kimdir?",
          "options": [
            "Sultan Abdülmecid",
            "Sultan II. Mahmud",
            "Sultan Abdülaziz",
            "Sultan V. Murad"
          ],
          "answerIndex": 0,
          "explanation": "Sultan Abdülmecid, Topkapı Sarayı'ndan taşınarak Dolmabahçe Sarayı'nı resmi ikametgâh yapmıştır."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Dolmabahçe Sarayı'nın merkezindeki 36 metre yüksekliğindeki anıtsal Tören Salonu'nda (Muayede Salonu) asılı olan devasa kristal avize kaç tondur?",
          "options": [
            "4,5 ton",
            "500 kilogram",
            "20 ton",
            "100 kilogram"
          ],
          "answerIndex": 0,
          "explanation": "Salonda asılı 4,5 tonluk avize 750 ampul ve kristal prizmalarla donatılmıştır.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Mustafa Kemal Atatürk'ün 10 Kasım 1938'de hayata gözlerini yumduğu tarihi mekan neresidir?",
          "options": [
            "Dolmabahçe Sarayı",
            "Çankaya Köşkü",
            "Yıldız Sarayı",
            "Beylerbeyi Sarayı"
          ],
          "answerIndex": 0,
          "explanation": "Atatürk yaşamının son aylarını Dolmabahçe Sarayı'nda geçirmiş ve burada vefat etmiştir.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Balyan Ailesi ve Boğaziçi Baroku"
  },
  "tr-u33-l5": {
    "id": "tr-u33-l5",
    "unit": "u33",
    "level": "C1",
    "objective": "Çağdaş Türk Mimarisi: Sedad Hakkı Eldem (Türk Evi) ve Emre Arolat (Sancaklar Camii, 2012).",
    "presentation": {
      "explanation": "Çağdaş Türk mimarlığı, cumhuriyetin rasyonel modernizmi ile geleneksel Anadolu-Osmanlı mekan hafızasının sentezinde öncü eserler üretmiştir. Sedad Hakkı Eldem (1908–1988), «Türk Evi» tipolojisini bilimsel olarak sınıflandırıp geniş saçaklar, cumbalar, eliböğründeler ve modüler pencere dizilimlerini modern betonarme karkas mimariyle birleştirerek Milli Mimarlık Semineri ve Zeyrek Sosyal Sigortalar Kurumu Binası (1970, Ağa Han Mimarlık Ödülü) gibi başyapıtlar kazandırdı. 21. yüzyılda ise Emre Arolat (EAA), İstanbul Büyükçekmece'de tasarladığı *Sancaklar Camii* (2012) ile geleneksel cami formunun kubbe ve minare klişelerini tamamen yıktı: Eğimli topoğrafyaya gömülü brüt beton, doğal kayrak taşları, yer altı sadeliği ve sadece kıble duvarındaki yarıktan süzülen dramatik gün ışığıyla ibadeti dünyevi gösterişten arındırıp saf bir manevi huşu mekanına dönüştürerek uluslararası RIBA ve WAF ödüllerine layık görüldü.",
      "examples": [
        {
          "target": "Sancaklar Camii, topoğrafyaya gizlenen mağara benzeri yapısıyla maneviyatta sadeliğin manifestosudur.",
          "reading": "Sancaklar Camii, topoğrafyaya gizlenen mağara benzeri yapısıyla maneviyatta sadeliğin manifestosudur.",
          "translation": "Sancaklar Mosque is a manifesto of simplicity in spirituality with its cave-like structure concealed in topography."
        },
        {
          "target": "Sedad Hakkı Eldem, geleneksel Türk evinin cumba ve saçak oranlarını çağdaş kentsel yapılara aktarmıştır.",
          "reading": "Sedad Hakkı Eldem, geleneksel Türk evinin cumba ve saçak oranlarını çağdaş kentsel yapılara aktarmıştır.",
          "translation": "Sedad Hakkı Eldem transferred the bay window and eave proportions of the traditional Turkish house to contemporary urban buildings."
        }
      ],
      "mnemonics": [
        "Türk modern mimarlığı: Sedad Hakkı Eldem (Türk Evi oranları) + Emre Arolat (Sancaklar yer altı brütalizmi)."
      ],
      "culturalNotes": [
        "Sancaklar Camii, Kur'an-ı Kerim'deki «Yeryüzü bana mescit kılındı» ve Hira Mağarası'nın yalın inziva ruhundan ilham alınarak tasarlanmıştır."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Emre Arolat tarafından tasarlanan ve geleneksel kubbe-minare şablonlarını aşarak toprağa gömülen ödüllü çağdaş cami hangisidir?",
          "options": [
            "Sancaklar Camii",
            "Kocatepe Camii",
            "Şakirin Camii",
            "Ahmet Hamdi Akseki Camii"
          ],
          "answerIndex": 0,
          "explanation": "Sancaklar Camii yeraltı mimarisi ve brüt beton sadeliğiyle dünya çapında yankı uyandırmıştır."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Geleneksel Türk konut mimarisini («Türk Evi») derinlemesine araştırıp modern binalara uyarlayan efsanevi cumhuriyet mimarı kimdir?",
          "options": [
            "Sedad Hakkı Eldem",
            "Mimar Kemalettin",
            "Vedat Tek",
            "Turgut Cansever"
          ],
          "answerIndex": 0,
          "explanation": "Sedad Hakkı Eldem Türk Evi plan şemalarını modern Türk mimarisinin temeline yerleştirmiştir."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Sedad Hakkı Eldem'in İstanbul Zeyrek'te geleneksel dokuya saygılı kademeli kütle tasarımıyla 1986 yılında Ağa Han Mimarlık Ödülü kazanan yapısı hangisidir?",
          "options": [
            "SSK Zeyrek Tesisleri",
            "Taşlık Şark Kahvesi",
            "Yalova Termal Oteli",
            "Hilton Oteli İstanbul"
          ],
          "answerIndex": 0,
          "explanation": "Zeyrek SSK kompleksi tarihi çevreye duyarlı modern Türk mimarisinin simgesidir.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Sancaklar Camii'nin ibadet salonunda aydınlatma nasıl sağlanmaktadır?",
          "options": [
            "Kıble duvarı boyunca tavandaki yarıktan süzülen dramatik doğal gün ışığı ile",
            "Tavandan sarkan yüzlerce floresan lamba ile",
            "Sadece mumlarla",
            "Renkli neon tüpleriyle"
          ],
          "answerIndex": 0,
          "explanation": "Kıble duvarından süzülen doğal ışık mekana derin bir sükunet ve uhrevi atmosfer katar.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Çağdaş Türk Mimarisi"
  },
  "tr-u34-l1": {
    "id": "tr-u34-l1",
    "subject": "turkish",
    "unit": 34,
    "lessonNumber": 1,
    "title": "Diplomatic Credentials, State Protocol & Presidential Reception",
    "level": "C2",
    "objective": "Diplomatic Credentials, State Protocol & Presidential Reception (Güven Mektubu, Devlet Protokolü ve İkili Müzakereler).",
    "presentation": {
      "explanation": "C2 düzeyinde diplomatik Türkçede Dışişleri Bakanlığı protokol gelenekleri, Cumhurbaşkanlığı Külliyesi'nde \"Güven Mektubu Takdimi\" (Presenting Credentials), \"Agrément\" (Diplomatik Uygunluk Bildirimi) ve resmi diplomatik nota (Nota Verbale) kuralları işlenir.",
      "examples": [
        {
          "target": "Büyükelçi, Cumhurbaşkanlığı Külliyesi'nde güven mektubunu Cumhurbaşkanına takdim etti.",
          "reading": "Büyükelçi, Cumhurbaşkanlığı Külliyesi'nde güven mektubunu Cumhurbaşkanına takdim etti.",
          "translation": "The Ambassador presented his credentials to the President at the Presidential Complex."
        },
        {
          "target": "Dışişleri Bakanlığı, büyükelçi atamasına ilişkin agrément kararını resmen iletti.",
          "reading": "Dışişleri Bakanlığı, büyükelçi atamasına ilişkin agrément kararını resmen iletti.",
          "translation": "The Ministry of Foreign Affairs officially transmitted the agrément decision regarding the ambassador appointment."
        }
      ],
      "mnemonics": [
        "\"Güven Mektubu\", atanan büyükelçinin ülkesi adına konuşma yetkisini teyit eden resmi belgedir."
      ],
      "culturalNotes": [
        "Güven mektubu takdim törenleri Ankara'da Cumhurbaşkanlığı Muhafız Alayı tören kıtası eşliğinde icra edilir."
      ]
    },
    "guidedPractice": {
      "exercises": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in TURKISH concerning: Diplomatic Credentials, State Protocol & Presidential Reception (Güven Mektubu, Devlet Protokolü ve İkili Müzakereler).",
          "targetPhrase": "Büyükelçi, Cumhurbaşkanlığı Külliyesi'nde güven mektubunu Cumhurbaşkanına takdim etti.",
          "expectedKeywords": [
            "Büyükelçi,",
            "Cumhurbaşkanlığı"
          ]
        }
      ],
      "items": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in TURKISH concerning: Diplomatic Credentials, State Protocol & Presidential Reception (Güven Mektubu, Devlet Protokolü ve İkili Müzakereler).",
          "targetPhrase": "Büyükelçi, Cumhurbaşkanlığı Külliyesi'nde güven mektubunu Cumhurbaşkanına takdim etti.",
          "expectedKeywords": [
            "Büyükelçi,",
            "Cumhurbaşkanlığı"
          ]
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Yeni atanan bir büyükelçinin devlet başkanına sunduğu resmi atama belgesine ne ad verilir?",
          "options": [
            "İç hizmet talimatı",
            "Nüfus cüzdanı sureti",
            "Geçici seyahat belgesi",
            "Güven mektubu"
          ],
          "answerIndex": 3,
          "explanation": "Güven mektubu, büyükelçinin tam yetkili temsilci olduğunu teyit eder.",
          "type": "multiple-choice"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in TURKISH concerning: Diplomatic Credentials, State Protocol & Presidential Reception (Güven Mektubu, Devlet Protokolü ve İkili Müzakereler).",
          "targetPhrase": "Büyükelçi, Cumhurbaşkanlığı Külliyesi'nde güven mektubunu Cumhurbaşkanına takdim etti.",
          "expectedKeywords": [
            "Büyükelçi,",
            "Cumhurbaşkanlığı"
          ]
        }
      ]
    }
  },
  "tr-u34-l2": {
    "id": "tr-u34-l2",
    "subject": "turkish",
    "unit": 34,
    "lessonNumber": 2,
    "title": "Multilateral Treaties, Parliamentary Ratification & Deposition",
    "level": "C2",
    "objective": "Multilateral Treaties, Parliamentary Ratification & Deposition (Çok Taraflı Antlaşmalar, TBMM Onayı ve Tevdi).",
    "presentation": {
      "explanation": "Uluslararası antlaşmalar hukuku: TBMM Uygun Bulma Kanunu (*Ratification Law*), Onay Belgesinin Tevdii (*Deposition of Instrument*), Çekince Koyma (*Reservations*) ve Yürürlüğe Girme usulleri.",
      "examples": [
        {
          "target": "Türkiye Büyük Millet Meclisi uluslararası anlaşmanın onaylanmasını uygun bulan kanunu kabul etti.",
          "reading": "Türkiye Büyük Millet Meclisi uluslararası anlaşmanın onaylanmasını uygun bulan kanunu kabul etti.",
          "translation": "The Grand National Assembly of Turkey adopted the law approving the ratification of the international agreement."
        },
        {
          "target": "Onay belgesi Birleşmiş Milletler Genel Sekreterliği nezdinde resmen tevdi edildi.",
          "reading": "Onay belgesi Birleşmiş Milletler Genel Sekreterliği nezdinde resmen tevdi edildi.",
          "translation": "The instrument of ratification was formally deposited with the UN Secretariat General."
        }
      ],
      "mnemonics": [
        "\"Tevdi etmek\" resmi bir belgeyi saklayıcı makama teslim etmek anlamına gelir."
      ],
      "culturalNotes": [
        "Anayasa'nın 90. maddesi uyarınca usulüne göre yürürlüğe konulmuş temel hak ve özgürlüklere ilişkin milletlerarası antlaşmalar kanunların üzerindedir."
      ]
    },
    "guidedPractice": {
      "exercises": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in TURKISH concerning: Multilateral Treaties, Parliamentary Ratification & Deposition (Çok Taraflı Antlaşmalar, TBMM Onayı ve Tevdi).",
          "targetPhrase": "Türkiye Büyük Millet Meclisi uluslararası anlaşmanın onaylanmasını uygun bulan kanunu kabul etti.",
          "expectedKeywords": [
            "Türkiye",
            "Büyük"
          ]
        }
      ],
      "items": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in TURKISH concerning: Multilateral Treaties, Parliamentary Ratification & Deposition (Çok Taraflı Antlaşmalar, TBMM Onayı ve Tevdi).",
          "targetPhrase": "Türkiye Büyük Millet Meclisi uluslararası anlaşmanın onaylanmasını uygun bulan kanunu kabul etti.",
          "expectedKeywords": [
            "Türkiye",
            "Büyük"
          ]
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Türkiye'de uluslararası antlaşmaların onaylanmasını uygun bulma yetkisi hangi kuruma aittir?",
          "options": [
            "Ticaret Odası",
            "Belediye Encümeni",
            "Türkiye Büyük Millet Meclisi",
            "Noterler Birliği"
          ],
          "answerIndex": 2,
          "explanation": "TBMM, antlaşmaların onaylanmasını uygun bulma kanunu çıkarma yetkisine sahiptir.",
          "type": "multiple-choice"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in TURKISH concerning: Multilateral Treaties, Parliamentary Ratification & Deposition (Çok Taraflı Antlaşmalar, TBMM Onayı ve Tevdi).",
          "targetPhrase": "Türkiye Büyük Millet Meclisi uluslararası anlaşmanın onaylanmasını uygun bulan kanunu kabul etti.",
          "expectedKeywords": [
            "Türkiye",
            "Büyük"
          ]
        }
      ]
    }
  },
  "tr-u34-l3": {
    "id": "tr-u34-l3",
    "subject": "turkish",
    "unit": 34,
    "lessonNumber": 3,
    "title": "Montreux Convention, Straits Regime & Maritime Diplomacy",
    "level": "C2",
    "objective": "Montreux Convention, Straits Regime & Maritime Diplomacy (Montrö Boğazlar Sözleşmesi ve Deniz Diplomasisi).",
    "presentation": {
      "explanation": "1936 Montrö Boğazlar Sözleşmesi'nin hukuki statüsü: Türk Boğazları'ndan (Çanakkale ve İstanbul Boğazı) ticaret ve savaş gemilerinin geçiş rejimi, Karadeniz'e kıyıdaş olan ve olmayan devletlerin tonaj sınırları ve savaş zamanı kapatma yetkisi.",
      "examples": [
        {
          "target": "Türkiye, Montrö Boğazlar Sözleşmesi'nin amir hükümlerini tarafsız ve tavizsiz bir şekilde uygulamaktadır.",
          "reading": "Türkiye, Montrö Boğazlar Sözleşmesi'nin amir hükümlerini tarafsız ve tavizsiz bir şekilde uygulamaktadır.",
          "translation": "Turkey applies the mandatory provisions of the Montreux Straits Convention impartially and uncompromisingly."
        },
        {
          "target": "Savaş zamanında kıyıdaş olmayan devletlerin savaş gemilerinin geçişine ilişkin tonaj tahdidi yürürlüktedir.",
          "reading": "Savaş zamanında kıyıdaş olmayan devletlerin savaş gemilerinin geçişine ilişkin tonaj tahdidi yürürlüktedir.",
          "translation": "Tonnage limitations regarding the passage of warships of non-riparian states remain in force during wartime."
        }
      ],
      "mnemonics": [
        "\"Montrö Sözleşmesi\" Türkiye'nin Boğazlar üzerindeki tam egemenliğini tescil eden kurucu diplomasi belgesidir."
      ],
      "culturalNotes": [
        "Montrö Sözleşmesi, yaklaşık bir asırdır Karadeniz'de barış ve istikrarın temel güvenlik sütununu oluşturmaktadır."
      ]
    },
    "guidedPractice": {
      "exercises": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in TURKISH concerning: Montreux Convention, Straits Regime & Maritime Diplomacy (Montrö Boğazlar Sözleşmesi ve Deniz Diplomasisi).",
          "targetPhrase": "Türkiye, Montrö Boğazlar Sözleşmesi'nin amir hükümlerini tarafsız ve tavizsiz bir şekilde uygulamaktadır.",
          "expectedKeywords": [
            "Türkiye,",
            "Montrö"
          ]
        }
      ],
      "items": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in TURKISH concerning: Montreux Convention, Straits Regime & Maritime Diplomacy (Montrö Boğazlar Sözleşmesi ve Deniz Diplomasisi).",
          "targetPhrase": "Türkiye, Montrö Boğazlar Sözleşmesi'nin amir hükümlerini tarafsız ve tavizsiz bir şekilde uygulamaktadır.",
          "expectedKeywords": [
            "Türkiye,",
            "Montrö"
          ]
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Türk Boğazları'ndan gemi geçiş rejimini ve Türkiye'nin egemenlik haklarını düzenleyen uluslararası sözleşme hangisidir?",
          "options": [
            "Schengen Anlaşması",
            "Montrö Boğazlar Sözleşmesi",
            "Cenevre Turizm Sözleşmesi",
            "Kyoto Protokolü"
          ],
          "answerIndex": 1,
          "explanation": "1936 Montrö Sözleşmesi Türk Boğazları rejimini düzenler.",
          "type": "multiple-choice"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in TURKISH concerning: Montreux Convention, Straits Regime & Maritime Diplomacy (Montrö Boğazlar Sözleşmesi ve Deniz Diplomasisi).",
          "targetPhrase": "Türkiye, Montrö Boğazlar Sözleşmesi'nin amir hükümlerini tarafsız ve tavizsiz bir şekilde uygulamaktadır.",
          "expectedKeywords": [
            "Türkiye,",
            "Montrö"
          ]
        }
      ]
    }
  },
  "tr-u34-l4": {
    "id": "tr-u34-l4",
    "subject": "turkish",
    "unit": 34,
    "lessonNumber": 4,
    "title": "International Mediation, Humanitarian Diplomacy & Grain Corridor",
    "level": "C2",
    "objective": "International Mediation, Humanitarian Diplomacy & Grain Corridor (Uluslararası Arabuluculuk ve İnsani Diplomasi).",
    "presentation": {
      "explanation": "Türkiye'nin uluslararası arabuluculuk vizyonu: Karadeniz Tahıl Girişimi (Black Sea Grain Initiative), esir takası anlaşmaları, BM koordinasyonunda barış diplomasisi ve uluslararası uyuşmazlıkların barışçıl çözümü.",
      "examples": [
        {
          "target": "Arabuluculuk müzakereleri sonucunda küresel gıda güvenliğini sağlayan tahıl koridoru mutabakatı imzalandı.",
          "reading": "Arabuluculuk müzakereleri sonucunda küresel gıda güvenliğini sağlayan tahıl koridoru mutabakatı imzalandı.",
          "translation": "As a result of mediation talks, the grain corridor memorandum securing global food security was signed."
        },
        {
          "target": "Taraflar esir değişimi ve insani koridorların tesisi hususunda mutabakata vardı.",
          "reading": "Taraflar esir değişimi ve insani koridorların tesisi hususunda mutabakata vardı.",
          "translation": "The parties reached an understanding on prisoner exchange and the establishment of humanitarian corridors."
        }
      ],
      "mnemonics": [
        "\"Mutabakat\", tarafların belirli ilkeler üzerinde karşılıklı anlaşmaya varmasıdır."
      ],
      "culturalNotes": [
        "İstanbul, uluslararası diplomasi müzakerelerine ev sahipliği yapan kritik bir barış ve arabuluculuk merkezi konumundadır."
      ]
    },
    "guidedPractice": {
      "exercises": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in TURKISH concerning: International Mediation, Humanitarian Diplomacy & Grain Corridor (Uluslararası Arabuluculuk ve İnsani Diplomasi).",
          "targetPhrase": "Arabuluculuk müzakereleri sonucunda küresel gıda güvenliğini sağlayan tahıl koridoru mutabakatı imzalandı.",
          "expectedKeywords": [
            "Arabuluculuk",
            "müzakereleri"
          ]
        }
      ],
      "items": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in TURKISH concerning: International Mediation, Humanitarian Diplomacy & Grain Corridor (Uluslararası Arabuluculuk ve İnsani Diplomasi).",
          "targetPhrase": "Arabuluculuk müzakereleri sonucunda küresel gıda güvenliğini sağlayan tahıl koridoru mutabakatı imzalandı.",
          "expectedKeywords": [
            "Arabuluculuk",
            "müzakereleri"
          ]
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Uluslararası çatışmalarda tarafları bir araya getirerek uzlaşma sağlama faaliyetine ne ad verilir?",
          "options": [
            "Arabuluculuk",
            "Tek taraflı ültimatom",
            "Askeri müdahale",
            "Gümrük teftişi"
          ],
          "answerIndex": 0,
          "explanation": "Arabuluculuk (Mediation), uyuşmazlıkların barışçıl çözümünü hedefler.",
          "type": "multiple-choice"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in TURKISH concerning: International Mediation, Humanitarian Diplomacy & Grain Corridor (Uluslararası Arabuluculuk ve İnsani Diplomasi).",
          "targetPhrase": "Arabuluculuk müzakereleri sonucunda küresel gıda güvenliğini sağlayan tahıl koridoru mutabakatı imzalandı.",
          "expectedKeywords": [
            "Arabuluculuk",
            "müzakereleri"
          ]
        }
      ]
    }
  },
  "tr-u34-l5": {
    "id": "tr-u34-l5",
    "subject": "turkish",
    "unit": 34,
    "lessonNumber": 5,
    "title": "C2 Master Capstone: High-Level Summit Declaration Drafting & Defense",
    "level": "C2",
    "objective": "C2 Master Capstone: High-Level Summit Declaration Drafting & Defense (Zirve Bildirisi ve Çok Taraflı Diplomasi Savunması).",
    "presentation": {
      "explanation": "C2 Ustalık Projesi: Liderler Zirvesi Ortak Bildirisinin (*Joint Communiqué*) diplomatik dille kaleme alınması, egemenlik hakları ile küresel işbirliği dengesinin savunulması.",
      "examples": [
        {
          "target": "Devlet ve Hükümet Başkanları, uluslararası hukuka ve çok taraflılığa bağlılıklarını teyit eden ortak bildiriyi kabul ettiler.",
          "reading": "Devlet ve Hükümet Başkanları, uluslararası hukuka ve çok taraflılığa bağlılıklarını teyit eden ortak bildiriyi kabul ettiler.",
          "translation": "The Heads of State and Government adopted the joint declaration reaffirming commitment to international law and multilateralism."
        },
        {
          "target": "Bunu tasdiken, tam yetkili temsilciler işbu resmi anlaşmayı imzalamışlardır.",
          "reading": "Bunu tasdiken, tam yetkili temsilciler işbu resmi anlaşmayı imzalamışlardır.",
          "translation": "In witness whereof, the plenipotentiaries have signed this official agreement."
        }
      ],
      "mnemonics": [
        "\"Bunu tasdiken\" uluslararası antlaşmalarda \"In witness whereof\" formülünün resmi Türkçe karşılığıdır."
      ],
      "culturalNotes": [
        "Diplomatik metinlerde her bağlaç ve terim, devletlerin gelecekteki hukuki yükümlülüklerini bağlar."
      ]
    },
    "guidedPractice": {
      "exercises": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in TURKISH concerning: C2 Master Capstone: High-Level Summit Declaration Drafting & Defense (Zirve Bildirisi ve Çok Taraflı Diplomasi Savunması).",
          "targetPhrase": "Devlet ve Hükümet Başkanları, uluslararası hukuka ve çok taraflılığa bağlılıklarını teyit eden ortak bildiriyi kabul ettiler.",
          "expectedKeywords": [
            "Devlet",
            "ve"
          ]
        }
      ],
      "items": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in TURKISH concerning: C2 Master Capstone: High-Level Summit Declaration Drafting & Defense (Zirve Bildirisi ve Çok Taraflı Diplomasi Savunması).",
          "targetPhrase": "Devlet ve Hükümet Başkanları, uluslararası hukuka ve çok taraflılığa bağlılıklarını teyit eden ortak bildiriyi kabul ettiler.",
          "expectedKeywords": [
            "Devlet",
            "ve"
          ]
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Uluslararası resmi antlaşmaların imza bölümünde kullanılan klasik tasdik cümlesi hangisidir?",
          "options": [
            "\"Bu kağıt resmi değildir...\"",
            "\"Herkes imzasını atıp dağılsın...\"",
            "\"Temsilciler olmadan imzalanmıştır...\"",
            "\"Bunu tasdiken, tam yetkili temsilciler işbu antlaşmayı imzalamışlardır...\""
          ],
          "answerIndex": 3,
          "explanation": "\"Bunu tasdiken...\" uluslararası antlaşmaların kapanışındaki resmi onay formülüdür.",
          "type": "multiple-choice"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "type": "synthesis",
          "prompt": "Conduct a diplomatic analysis in TURKISH concerning: C2 Master Capstone: High-Level Summit Declaration Drafting & Defense (Zirve Bildirisi ve Çok Taraflı Diplomasi Savunması).",
          "targetPhrase": "Devlet ve Hükümet Başkanları, uluslararası hukuka ve çok taraflılığa bağlılıklarını teyit eden ortak bildiriyi kabul ettiler.",
          "expectedKeywords": [
            "Devlet",
            "ve"
          ]
        }
      ]
    }
  }
};
  var CURRICULUM = { id: 'turkish', name: "Turkish", units: UNITS, lessons: LESSONS };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['turkish'] = CURRICULUM;
  if (typeof module !== 'undefined' && module.exports) module.exports = CURRICULUM;
})(typeof window !== 'undefined' ? window : global);
