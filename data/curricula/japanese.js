// Japanese curriculum
(function(global){
  'use strict';
  var UNITS = [
    {
        "id": "u1",
        "name": "Unit 1",
        "goal": "By the end of this unit, learners can greet people appropriately and introduce themselves with basic personal details. Grammar/vocabulary focus: Hiragana time-of-day greetings, です copula, no-copula-free nominal sentences, self-introduction pattern.",
        "level": "A1",
        "lessonIds": [
            "ja-u1-l1",
            "ja-u1-l2",
            "ja-u1-l3",
            "ja-u1-l4",
            "ja-u1-l5"
        ]
    },
    {
        "id": "u2",
        "name": "Unit 2",
        "goal": "By the end of this unit, learners can state numbers, tell time, and talk about dates and days of the week. Grammar/vocabulary focus: Numbers 1–100, counters つ/こ intro, telling time with 時/分, days of the week and dates.",
        "level": "A1",
        "lessonIds": [
            "ja-u2-l1",
            "ja-u2-l2",
            "ja-u2-l3",
            "ja-u2-l4",
            "ja-u2-l5"
        ]
    },
    {
        "id": "u3",
        "name": "Unit 3",
        "goal": "By the end of this unit, learners can describe their immediate family and other people using simple sentences. Grammar/vocabulary focus: Family terms (in-group vs. out-group forms), の possessive particle, existence verbs います/あります.",
        "level": "A1",
        "lessonIds": [
            "ja-u3-l1",
            "ja-u3-l2",
            "ja-u3-l3",
            "ja-u3-l4",
            "ja-u3-l5"
        ]
    },
    {
        "id": "u4",
        "name": "Unit 4",
        "goal": "By the end of this unit, learners can form basic present-tense sentences describing states and actions. Grammar/vocabulary focus: は (topic) vs. が (subject) particles, ます-form present tense, basic SOV word order.",
        "level": "A1",
        "lessonIds": [
            "ja-u4-l1",
            "ja-u4-l2",
            "ja-u4-l3",
            "ja-u4-l4",
            "ja-u4-l5"
        ]
    },
    {
        "id": "u5",
        "name": "Unit 5",
        "goal": "By the end of this unit, learners can describe a typical daily routine using common action verbs. Grammar/vocabulary focus: ます-form daily routine verbs, time particle に, sequencing actions with the て-form.",
        "level": "A1",
        "lessonIds": [
            "ja-u5-l1",
            "ja-u5-l2",
            "ja-u5-l3",
            "ja-u5-l4",
            "ja-u5-l5"
        ]
    },
    {
        "id": "u6",
        "name": "Unit 6",
        "goal": "By the end of this unit, learners can order food and drink and talk about likes and dislikes at a basic level. Grammar/vocabulary focus: Food vocabulary, を direct-object particle, ほしい/たい desire forms, polite requests with 〜をください.",
        "level": "A1",
        "lessonIds": [
            "ja-u6-l1",
            "ja-u6-l2",
            "ja-u6-l3",
            "ja-u6-l4",
            "ja-u6-l5"
        ]
    },
    {
        "id": "u7",
        "name": "Unit 7",
        "goal": "By the end of this unit, learners can narrate simple completed past events. Grammar/vocabulary focus: た-form past tense (plain & polite), でした past copula.",
        "level": "A2",
        "lessonIds": [
            "ja-u7-l1",
            "ja-u7-l2",
            "ja-u7-l3",
            "ja-u7-l4",
            "ja-u7-l5"
        ]
    },
    {
        "id": "u8",
        "name": "Unit 8",
        "goal": "By the end of this unit, learners can shop for goods, discuss prices, and compare items. Grammar/vocabulary focus: お金 and price counters (円), comparative 〜より, ほうがいい recommendations.",
        "level": "A2",
        "lessonIds": [
            "ja-u8-l1",
            "ja-u8-l2",
            "ja-u8-l3",
            "ja-u8-l4",
            "ja-u8-l5"
        ]
    },
    {
        "id": "u9",
        "name": "Unit 9",
        "goal": "By the end of this unit, learners can ask for and give directions and describe how to get somewhere. Grammar/vocabulary focus: Place particles で vs. に, giving directions (右/左/まっすぐ), 〜てください requests.",
        "level": "A2",
        "lessonIds": [
            "ja-u9-l1",
            "ja-u9-l2",
            "ja-u9-l3",
            "ja-u9-l4",
            "ja-u9-l5"
        ]
    },
    {
        "id": "u10",
        "name": "Unit 10",
        "goal": "By the end of this unit, learners can describe their home and daily surroundings in more detail. Grammar/vocabulary focus: て-form clause chaining for description, い-adjectives vs. な-adjectives, 〜があります existence.",
        "level": "A2",
        "lessonIds": [
            "ja-u10-l1",
            "ja-u10-l2",
            "ja-u10-l3",
            "ja-u10-l4",
            "ja-u10-l5"
        ]
    },
    {
        "id": "u11",
        "name": "Unit 11",
        "goal": "By the end of this unit, learners can talk about health, body parts, and give simple medical descriptions. Grammar/vocabulary focus: Body vocabulary, 〜が痛い pain construction, 〜なければならない obligation.",
        "level": "A2",
        "lessonIds": [
            "ja-u11-l1",
            "ja-u11-l2",
            "ja-u11-l3",
            "ja-u11-l4",
            "ja-u11-l5"
        ]
    },
    {
        "id": "u12",
        "name": "Unit 12",
        "goal": "By the end of this unit, learners can discuss future plans and describe the weather. Grammar/vocabulary focus: Volitional form 〜よう/〜ましょう, weather vocabulary, plans with 〜つもり.",
        "level": "A2",
        "lessonIds": [
            "ja-u12-l1",
            "ja-u12-l2",
            "ja-u12-l3",
            "ja-u12-l4",
            "ja-u12-l5"
        ]
    },
    {
        "id": "u13",
        "name": "Unit 13",
        "goal": "By the end of this unit, learners can talk about their job or studies and ongoing actions. Grammar/vocabulary focus: て-form + いる progressive/habitual aspect, job/study vocabulary, 〜ことができる ability.",
        "level": "B1",
        "lessonIds": [
            "ja-u13-l1",
            "ja-u13-l2",
            "ja-u13-l3",
            "ja-u13-l4",
            "ja-u13-l5"
        ]
    },
    {
        "id": "u14",
        "name": "Unit 14",
        "goal": "By the end of this unit, learners can express opinions and preferences with simple justification. Grammar/vocabulary focus: 〜と思う opinion marker, 〜が好き/嫌い preference, comparing options.",
        "level": "B1",
        "lessonIds": [
            "ja-u14-l1",
            "ja-u14-l2",
            "ja-u14-l3",
            "ja-u14-l4",
            "ja-u14-l5"
        ]
    },
    {
        "id": "u15",
        "name": "Unit 15",
        "goal": "By the end of this unit, learners can plan a trip and describe past travel experiences. Grammar/vocabulary focus: て-form requests for travel, 〜たことがある experience, plans with 〜予定.",
        "level": "B1",
        "lessonIds": [
            "ja-u15-l1",
            "ja-u15-l2",
            "ja-u15-l3",
            "ja-u15-l4",
            "ja-u15-l5"
        ]
    },
    {
        "id": "u16",
        "name": "Unit 16",
        "goal": "By the end of this unit, learners can discuss hypothetical situations and simple conditions. Grammar/vocabulary focus: Conditional forms たら/ば/と, simple hypothetical scenarios.",
        "level": "B1",
        "lessonIds": [
            "ja-u16-l1",
            "ja-u16-l2",
            "ja-u16-l3",
            "ja-u16-l4",
            "ja-u16-l5"
        ]
    },
    {
        "id": "u17",
        "name": "Unit 17",
        "goal": "By the end of this unit, learners can understand and discuss media content and report what others said. Grammar/vocabulary focus: Passive voice 〜られる, media vocabulary, quoting with 〜と言っていた.",
        "level": "B1",
        "lessonIds": [
            "ja-u17-l1",
            "ja-u17-l2",
            "ja-u17-l3",
            "ja-u17-l4",
            "ja-u17-l5"
        ]
    },
    {
        "id": "u18",
        "name": "Unit 18",
        "goal": "By the end of this unit, learners can talk about relationships and emotions in more nuanced ways. Grammar/vocabulary focus: Giving/receiving あげる/もらう/くれる, emotion adjectives, causative 〜させる.",
        "level": "B1",
        "lessonIds": [
            "ja-u18-l1",
            "ja-u18-l2",
            "ja-u18-l3",
            "ja-u18-l4",
            "ja-u18-l5"
        ]
    },
    {
        "id": "u19",
        "name": "Unit 19",
        "goal": "By the end of this unit, learners can debate abstract topics and support opinions with reasons. Grammar/vocabulary focus: 〜べきだ obligation/opinion, formal debate connectors (しかし、それに対して).",
        "level": "B2",
        "lessonIds": [
            "ja-u19-l1",
            "ja-u19-l2",
            "ja-u19-l3",
            "ja-u19-l4",
            "ja-u19-l5"
        ]
    },
    {
        "id": "u20",
        "name": "Unit 20",
        "goal": "By the end of this unit, learners can adjust tone and vocabulary between formal and informal contexts. Grammar/vocabulary focus: Keigo overview: 尊敬語 vs. 謙譲語, register shifts between casual and formal speech.",
        "level": "B2",
        "lessonIds": [
            "ja-u20-l1",
            "ja-u20-l2",
            "ja-u20-l3",
            "ja-u20-l4",
            "ja-u20-l5"
        ]
    },
    {
        "id": "u21",
        "name": "Unit 21",
        "goal": "By the end of this unit, learners can report what someone else said and narrate complex event sequences. Grammar/vocabulary focus: Reported speech 〜そうだ/〜らしい, narrative て-form chaining across long sequences.",
        "level": "B2",
        "lessonIds": [
            "ja-u21-l1",
            "ja-u21-l2",
            "ja-u21-l3",
            "ja-u21-l4",
            "ja-u21-l5"
        ]
    },
    {
        "id": "u22",
        "name": "Unit 22",
        "goal": "By the end of this unit, learners can discuss more complex hypothetical and counterfactual situations. Grammar/vocabulary focus: Advanced conditionals 〜としたら/〜にしても, counterfactual regret 〜ばよかった.",
        "level": "B2",
        "lessonIds": [
            "ja-u22-l1",
            "ja-u22-l2",
            "ja-u22-l3",
            "ja-u22-l4",
            "ja-u22-l5"
        ]
    },
    {
        "id": "u23",
        "name": "Unit 23",
        "goal": "By the end of this unit, learners can discuss environmental and social issues with supporting detail. Grammar/vocabulary focus: 〜によって causal/agentive marking, passive causative for social commentary, environment vocabulary.",
        "level": "B2",
        "lessonIds": [
            "ja-u23-l1",
            "ja-u23-l2",
            "ja-u23-l3",
            "ja-u23-l4",
            "ja-u23-l5"
        ]
    },
    {
        "id": "u24",
        "name": "Unit 24",
        "goal": "By the end of this unit, learners can use common idiomatic expressions naturally in conversation. Grammar/vocabulary focus: Yojijukugo (四字熟語) intro, set social expressions (お疲れ様です, よろしくお願いします).",
        "level": "B2",
        "lessonIds": [
            "ja-u24-l1",
            "ja-u24-l2",
            "ja-u24-l3",
            "ja-u24-l4",
            "ja-u24-l5"
        ]
    },
    {
        "id": "u25",
        "name": "Unit 25",
        "goal": "By the end of this unit, learners can construct nuanced arguments with supporting and opposing viewpoints. Grammar/vocabulary focus: Advanced argument connectors (それゆえに、〜ものの), nuance-marking sentence-final particles よ/ね/わ.",
        "level": "C1",
        "lessonIds": [
            "ja-u25-l1",
            "ja-u25-l2",
            "ja-u25-l3",
            "ja-u25-l4",
            "ja-u25-l5"
        ]
    },
    {
        "id": "u26",
        "name": "Unit 26",
        "goal": "By the end of this unit, learners can use professional and academic language appropriately in writing and speech. Grammar/vocabulary focus: Business keigo conventions, academic written style (である体).",
        "level": "C1",
        "lessonIds": [
            "ja-u26-l1",
            "ja-u26-l2",
            "ja-u26-l3",
            "ja-u26-l4",
            "ja-u26-l5"
        ]
    },
    {
        "id": "u27",
        "name": "Unit 27",
        "goal": "By the end of this unit, learners can analyze literary and cultural texts and discuss their meaning. Grammar/vocabulary focus: Classical-influenced literary expressions, close reading of short literary excerpts.",
        "level": "C1",
        "lessonIds": [
            "ja-u27-l1",
            "ja-u27-l2",
            "ja-u27-l3",
            "ja-u27-l4",
            "ja-u27-l5"
        ]
    },
    {
        "id": "u28",
        "name": "Unit 28",
        "goal": "By the end of this unit, learners can use a wide range of idioms and proverbs accurately. Grammar/vocabulary focus: Advanced idioms and proverbs (ことわざ).",
        "level": "C1",
        "lessonIds": [
            "ja-u28-l1",
            "ja-u28-l2",
            "ja-u28-l3",
            "ja-u28-l4",
            "ja-u28-l5"
        ]
    },
    {
        "id": "u29",
        "name": "Unit 29",
        "goal": "By the end of this unit, learners can use discourse markers to structure extended, natural-sounding speech. Grammar/vocabulary focus: Discourse markers for natural flow (さて、ところで、ちなみに).",
        "level": "C1",
        "lessonIds": [
            "ja-u29-l1",
            "ja-u29-l2",
            "ja-u29-l3",
            "ja-u29-l4",
            "ja-u29-l5"
        ]
    },
    {
        "id": "u30",
        "name": "Unit 30",
        "goal": "By the end of this unit, learners can understand native-speed humor, wordplay, and slang. Grammar/vocabulary focus: Slang, wordplay, and humor patterns at native speed.",
        "level": "C2",
        "lessonIds": [
            "ja-u30-l1",
            "ja-u30-l2",
            "ja-u30-l3",
            "ja-u30-l4",
            "ja-u30-l5"
        ]
    },
    {
        "id": "u31",
        "name": "Unit 31",
        "goal": "By the end of this unit, learners can understand and use specialized legal, medical, and technical vocabulary. Grammar/vocabulary focus: Legal, medical, and technical register vocabulary.",
        "level": "C2",
        "lessonIds": [
            "ja-u31-l1",
            "ja-u31-l2",
            "ja-u31-l3",
            "ja-u31-l4",
            "ja-u31-l5"
        ]
    },
    {
        "id": "u32",
        "name": "Unit 32",
        "goal": "By the end of this unit, learners can construct persuasive, rhetorically effective arguments. Grammar/vocabulary focus: Persuasive rhetorical structures, rhetorical questions.",
        "level": "C2",
        "lessonIds": [
            "ja-u32-l1",
            "ja-u32-l2",
            "ja-u32-l3",
            "ja-u32-l4",
            "ja-u32-l5"
        ]
    },
    {
        "id": "u33",
        "name": "Unit 33",
        "goal": "By the end of this unit, learners can recognize and adapt to dialectal and sociolinguistic variation. Grammar/vocabulary focus: Regional dialect survey (関西弁 basics), sociolinguistic variation.",
        "level": "C2",
        "lessonIds": [
            "ja-u33-l1",
            "ja-u33-l2",
            "ja-u33-l3",
            "ja-u33-l4",
            "ja-u33-l5"
        ]
    },
    {
        "id": "u34",
        "name": "Unit 34",
        "goal": "By the end of this unit, learners can synthesize all prior skills to communicate with near-native fluency across contexts. Grammar/vocabulary focus: Capstone: mixed-register synthesis across all prior grammar and vocabulary.",
        "level": "C2",
        "lessonIds": [
            "ja-u34-l1",
            "ja-u34-l2",
            "ja-u34-l3",
            "ja-u34-l4",
            "ja-u34-l5"
        ]
    },
    {
        "id": "u35",
        "name": "Unit 35: Advanced Keigo, Sonkeigo & Kenjougo Diplomatic Protocol",
        "goal": "Master high-level honorific (Sonkeigo) and humble (Kenjougo I & II) verb suppletions, business negotiation etiquette, and formal written corporate correspondence.",
        "level": "C2+",
        "lessonIds": [
            "ja-u35-l1",
            "ja-u35-l2",
            "ja-u35-l3",
            "ja-u35-l4",
            "ja-u35-l5"
        ]
    }
];
  var LESSONS = {
    "ja-u1-l1": {
        "id": "ja-u1-l1",
        "subject": "japanese",
        "unit": 1,
        "lessonNumber": 1,
        "title": "日本語の文字体系と平仮名：母音（あいうえお）とカ行（かきくけこ） (Hiragana Vowels & K-Row)",
        "level": "A1",
        "objective": "Understand the three Japanese scripts (Hiragana, Katakana, Kanji) and master reading and writing the 5 core vowels (あ, い, う, え, お) and K-row consonants (か, き, く, け, こ).",
        "presentation": {
            "explanation": "Welcome to Japanese! Japanese uses three distinct scripts working together harmoniously:\n1. **Hiragana (ひらがな)**: 46 phonetic characters used for native Japanese words and grammatical endings.\n2. **Katakana (カタカナ)**: 46 phonetic characters used for foreign loanwords and onomatopoeia.\n3. **Kanji (漢字)**: Chinese logograms representing conceptual meaning.\n\nEvery kana character represents a full mora/syllable. Let us begin with the foundation of all Japanese pronunciation: the **5 basic vowels** and the **K-row**.\n\n### 1. The 5 Core Vowels (あ行 - A-Row)\n- **あ** [a] — pronounced \"ah\" (as in \"father\")\n- **い** [i] — pronounced \"ee\" (as in \"meet\")\n- **う** [u] — pronounced \"oo\" (unrounded lips, as in \"soup\")\n- **え** [e] — pronounced \"eh\" (as in \"pet\")\n- **お** [o] — pronounced \"oh\" (as in \"origami\")\n\n### 2. The K-Row Consonants (カ行 - Ka-Row)\nFormed by combining the voiceless velar stop [k] with the 5 vowels:\n- **か** [ka] — \"k\" + \"a\"\n- **き** [ki] — \"k\" + \"i\"\n- **く** [ku] — \"k\" + \"u\"\n- **け** [ke] — \"k\" + \"e\"\n- **こ** [ko] — \"k\" + \"o\"\n\n### 3. First Authentic Japanese Words (Built Strictly from These 10 Kana)\n- **あい** (*ai*) → **love** (あ + い)\n- **うえ** (*ue*) → **up / above** (う + え)\n- **あき** (*aki*) → **autumn / fall** (あ + き)\n- **かお** (*kao*) → **face** (か + お)\n- **えき** (*eki*) → **train station** (え + き)\n- **こえ** (*koe*) → **voice** (こ + え)\n- **きく** (*kiku*) → **chrysanthemum / to listen** (き + く)\n- **いけ** (*ike*) → **pond** (い + け)",
            "examples": [
                {
                    "target": "あい",
                    "reading": "ai",
                    "translation": "love (あ [a] + い [i])"
                },
                {
                    "target": "うえ",
                    "reading": "ue",
                    "translation": "up / above (う [u] + え [e])"
                },
                {
                    "target": "えき",
                    "reading": "eki",
                    "translation": "train station (え [e] + き [ki])"
                },
                {
                    "target": "かお",
                    "reading": "kao",
                    "translation": "face (か [ka] + お [o])"
                }
            ],
            "mnemonics": [
                "あ looks like an Apple with a cross. い looks like two parallel needles. う looks like someone hunched over in pain. え looks like an Energetic ninja running. お looks like a golf ball On the tee!"
            ],
            "culturalNotes": [
                "Hiragana evolved during the Heian period (794-1185) from cursive calligraphy of Chinese characters (Man'yogana) and was historically championed by court women authors who wrote masterpieces like The Tale of Genji."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which Hiragana character corresponds to the vowel sound [i] (as in \"meet\")?",
                    "options": [
                        "い (i)",
                        "あ (a)",
                        "う (u)",
                        "え (e)"
                    ],
                    "answerIndex": 0,
                    "explanation": "「い」 represents the vowel sound [i]. 「あ」 is [a], 「う」 is [u], and 「え」 is [e]."
                },
                {
                    "prompt": "Select the Hiragana word meaning \"train station\" composed of 「え」 [e] and 「き」 [ki]:",
                    "options": [
                        "えき (eki - train station)",
                        "あき (aki - autumn)",
                        "かお (kao - face)",
                        "あい (ai - love)"
                    ],
                    "answerIndex": 0,
                    "explanation": "「え」 [e] + 「き」 [ki] = 「えき」 (*eki*), which means train station."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Which Hiragana character from the K-row is pronounced [ko]?",
                    "options": [
                        "こ (ko)",
                        "か (ka)",
                        "き (ki)",
                        "く (ku)"
                    ],
                    "answerIndex": 0,
                    "explanation": "「こ」 is the K-row character pronounced [ko]."
                },
                {
                    "prompt": "Identify the Hiragana word meaning \"face\" combining 「か」 [ka] and 「お」 [o]:",
                    "options": [
                        "かお (kao - face)",
                        "こえ (koe - voice)",
                        "うえ (ue - above)",
                        "いけ (ike - pond)"
                    ],
                    "answerIndex": 0,
                    "explanation": "「か」 [ka] + 「お」 [o] forms 「かお」 (*kao*), meaning face."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Which of the following Hiragana words means \"love\" (formed from vowels 「あ」 and 「い」)?",
                    "options": [
                        "あい (ai - love)",
                        "うえ (ue - up)",
                        "あき (aki - autumn)",
                        "えき (eki - station)"
                    ],
                    "answerIndex": 0,
                    "explanation": "「あ」 [a] + 「い」 [i] = 「あい」 (*ai* - love)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hiragana word for \"train station\" (e-ki):",
                    "acceptedAnswers": [
                        "えき"
                    ],
                    "explanation": "「え」 + 「き」 = 「えき」 (*eki*)."
                }
            ]
        }
    },
    "ja-u1-l2": {
        "id": "ja-u1-l2",
        "subject": "japanese",
        "unit": 1,
        "lessonNumber": 2,
        "title": "平仮名の習得２：サ行（さしすせそ）とタ行（たちつてと） (Hiragana S-Row & T-Row)",
        "level": "A1",
        "objective": "Master reading and writing the S-row (さ, し, す, せ, そ) and T-row (た, ち, つ, て, と), noting special phonetic realizations (し = shi, ち = chi, つ = tsu).",
        "presentation": {
            "explanation": "Building on the vowels and K-row, we now introduce the **S-row (サ行)** and **T-row (タ行)**.\n\n### 1. The S-Row (サ行 - Sa-Row)\n- **さ** [sa] — \"s\" + \"a\"\n- **し** [shi] — **Special phonetic rule**: Palatalized to \"shee\" (never \"see\")\n- **す** [su] — \"s\" + \"u\" (quiet, slightly unrounded \"soo\")\n- **せ** [se] — \"s\" + \"e\"\n- **そ** [so] — \"s\" + \"o\"\n\n### 2. The T-Row (タ行 - Ta-Row)\n- **た** [ta] — \"t\" + \"a\"\n- **ち** [chi] — **Special phonetic rule**: Affricate \"chee\" (never \"tee\")\n- **つ** [tsu] — **Special phonetic rule**: Alveolar affricate \"tsoo\" (like \"ts\" in \"cats\")\n- **て** [te] — \"t\" + \"e\"\n- **と** [to] — \"t\" + \"o\"\n\n### 3. New Vocabulary (Exclusively Using Taught Kana)\n- **すし** (*sushi*) → **sushi** (す + し)\n- **あさ** (*asa*) → **morning** (あ + さ)\n- **うそ** (*uso*) → **lie / untruth** (う + そ)\n- **たこ** (*tako*) → **octopus** (た + こ)\n- **くつ** (*kutsu*) → **shoes** (く + つ)\n- **せかい** (*sekai*) → **world** (せ + か + い)\n- **て** (*te*) → **hand** (て)\n- **つき** (*tsuki*) → **moon** (つ + き)\n- **した** (*shita*) → **under / below** (し + た)\n- **とけい** (*tokei*) → **clock / watch** (と + け + い)",
            "examples": [
                {
                    "target": "すし",
                    "reading": "sushi",
                    "translation": "sushi (す [su] + し [shi])"
                },
                {
                    "target": "あさ",
                    "reading": "asa",
                    "translation": "morning (あ [a] + さ [sa])"
                },
                {
                    "target": "つき",
                    "reading": "tsuki",
                    "translation": "moon (つ [tsu] + き [ki])"
                },
                {
                    "target": "せかい",
                    "reading": "sekai",
                    "translation": "world (せ [se] + か [ka] + い [i])"
                }
            ],
            "mnemonics": [
                "し looks like a fish hook dipping into the sea (shi). ち looks like a cheerleader waving pom-poms (chi). つ looks like the curling wave of a Tsunami (tsu)."
            ],
            "culturalNotes": [
                "Japanese mora timing is strictly isometric: each kana character takes the exact same duration of time to pronounce, giving Japanese its characteristic rhythmic, melodic cadence."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which of the following Hiragana characters represents the sound [shi]?",
                    "options": [
                        "し (shi)",
                        "さ (sa)",
                        "す (su)",
                        "せ (se)"
                    ],
                    "answerIndex": 0,
                    "explanation": "「し」 is pronounced [shi]. In Japanese phonology, [s] + [i] naturally palatalizes to [shi]."
                },
                {
                    "prompt": "Identify the world-famous culinary word meaning \"sushi\" spelled with 「す」 and 「し」:",
                    "options": [
                        "すし (sushi)",
                        "たこ (tako - octopus)",
                        "くつ (kutsu - shoes)",
                        "あさ (asa - morning)"
                    ],
                    "answerIndex": 0,
                    "explanation": "「す」 [su] + 「し」 [shi] forms 「すし」 (*sushi*)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Which character represents the affricate sound [tsu] (as in \"tsunami\")?",
                    "options": [
                        "つ (tsu)",
                        "た (ta)",
                        "ち (chi)",
                        "て (te)"
                    ],
                    "answerIndex": 0,
                    "explanation": "「つ」 is pronounced [tsu]."
                },
                {
                    "prompt": "Select the Hiragana word meaning \"moon\" combining 「つ」 [tsu] and 「き」 [ki]:",
                    "options": [
                        "つき (tsuki - moon)",
                        "すき (suki - liked)",
                        "たこ (tako - octopus)",
                        "うそ (uso - lie)"
                    ],
                    "answerIndex": 0,
                    "explanation": "「つ」 [tsu] + 「き」 [ki] = 「つき」 (*tsuki* - moon)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Which Hiragana word means \"shoes\" formed from 「く」 [ku] and 「つ」 [tsu]?",
                    "options": [
                        "くつ (kutsu - shoes)",
                        "あさ (asa - morning)",
                        "せかい (sekai - world)",
                        "すし (sushi)"
                    ],
                    "answerIndex": 0,
                    "explanation": "「く」 [ku] + 「つ」 [tsu] = 「くつ」 (*kutsu* - shoes)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hiragana word for \"sushi\" (su-shi):",
                    "acceptedAnswers": [
                        "すし"
                    ],
                    "explanation": "「す」 + 「し」 = 「すし」 (*sushi*)."
                }
            ]
        }
    },
    "ja-u1-l3": {
        "id": "ja-u1-l3",
        "subject": "japanese",
        "unit": 1,
        "lessonNumber": 3,
        "title": "平仮名の習得３：ナ行（なにぬねの）とハ行（はひふへほ） (Hiragana N-Row & H-Row)",
        "level": "A1",
        "objective": "Master reading and writing the N-row (な, に, ぬ, ね, の) and H-row (は, ひ, ふ, へ, ほ), including the bilabial [fu] and the grammatical topic particle pronunciation of は as [wa].",
        "presentation": {
            "explanation": "Now we introduce the **N-row (ナ行)** and **H-row (ハ行)**.\n\n### 1. The N-Row (ナ行 - Na-Row)\n- **な** [na] — \"n\" + \"a\"\n- **に** [ni] — \"n\" + \"i\"\n- **ぬ** [nu] — \"n\" + \"u\" (loop at the tail)\n- **ね** [ne] — \"n\" + \"e\" (loop at the bottom right)\n- **の** [no] — \"n\" + \"o\" (single spiral stroke)\n\n### 2. The H-Row (ハ行 - Ha-Row)\n- **は** [ha] — \"h\" + \"a\" (**Note**: When used as a topic particle in grammar, は is pronounced [wa])\n- **ひ** [hi] — \"h\" + \"i\"\n- **ふ** [fu] — **Special phonetic rule**: Bilabial fricative (softly blow air between lips without teeth touching)\n- **へ** [he] — \"h\" + \"e\" (**Note**: When used as direction particle, へ is pronounced [e])\n- **ほ** [ho] — \"h\" + \"o\" (top line does not pierce through, unlike ま)\n\n### 3. Essential Vocabulary (Taught Kana Only)\n- **いぬ** (*inu*) → **dog** (い + ぬ)\n- **ねこ** (*neko*) → **cat** (ね + こ)\n- **はな** (*hana*) → **flower / nose** (は + な)\n- **ひと** (*hito*) → **person / human** (ひ + と)\n- **ふね** (*fune*) → **boat / ship** (ふ + ね)\n- **ほし** (*hoshi*) → **star** (ほ + し)\n- **なつ** (*natsu*) → **summer** (な + つ)\n- **にく** (*niku*) → **meat** (に + く)\n- **はし** (*hashi*) → **bridge / chopsticks** (は + し)",
            "examples": [
                {
                    "target": "いぬ",
                    "reading": "inu",
                    "translation": "dog (い [i] + ぬ [nu])"
                },
                {
                    "target": "ねこ",
                    "reading": "neko",
                    "translation": "cat (ね [ne] + こ [ko])"
                },
                {
                    "target": "はな",
                    "reading": "hana",
                    "translation": "flower (は [ha] + な [na])"
                },
                {
                    "target": "ひと",
                    "reading": "hito",
                    "translation": "person (ひ [hi] + と [to])"
                }
            ],
            "mnemonics": [
                "いぬ is dog (pointing to its nose - nu). ねこ is cat (with curled tail - ne). の is a single clean swirl, like a \"NO smoking\" sign circle!"
            ],
            "culturalNotes": [
                "Cats (ねこ) and dogs (いぬ) hold special places in Japanese culture, from historic folklore and art to modern cat cafés and famous faithful dogs like Hachiko."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which Hiragana word means \"cat\" combining 「ね」 [ne] and 「こ」 [ko]?",
                    "options": [
                        "ねこ (neko - cat)",
                        "いぬ (inu - dog)",
                        "はな (hana - flower)",
                        "ひと (hito - person)"
                    ],
                    "answerIndex": 0,
                    "explanation": "「ね」 [ne] + 「こ」 [ko] forms 「ねこ」 (*neko* - cat)."
                },
                {
                    "prompt": "Which character represents the bilabial fricative sound [fu] in the H-row?",
                    "options": [
                        "ふ (fu)",
                        "は (ha)",
                        "ひ (hi)",
                        "ほ (ho)"
                    ],
                    "answerIndex": 0,
                    "explanation": "「ふ」 is the H-row character pronounced [fu], made by gently blowing air through unrounded lips."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Select the Hiragana word meaning \"dog\" spelled with 「い」 and 「ぬ」:",
                    "options": [
                        "いぬ (inu - dog)",
                        "ねこ (neko - cat)",
                        "ふね (fune - boat)",
                        "ほし (hoshi - star)"
                    ],
                    "answerIndex": 0,
                    "explanation": "「い」 [i] + 「ぬ」 [nu] = 「いぬ」 (*inu* - dog)."
                },
                {
                    "prompt": "Which word means \"flower\" or \"nose\" formed from 「は」 [ha] and 「な」 [na]?",
                    "options": [
                        "はな (hana - flower/nose)",
                        "なつ (natsu - summer)",
                        "ひと (hito - person)",
                        "にく (niku - meat)"
                    ],
                    "answerIndex": 0,
                    "explanation": "「は」 [ha] + 「な」 [na] = 「はな」 (*hana*)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Which Hiragana character is drawn as a single graceful circular spiral stroke and represents the sound [no]?",
                    "options": [
                        "の (no)",
                        "ぬ (nu)",
                        "ね (ne)",
                        "な (na)"
                    ],
                    "answerIndex": 0,
                    "explanation": "「の」 is written in a single continuous spiral stroke representing [no]."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hiragana word for \"cat\" (ne-ko):",
                    "acceptedAnswers": [
                        "ねこ"
                    ],
                    "explanation": "「ね」 + 「こ」 = 「ねこ」 (*neko*)."
                }
            ]
        }
    },
    "ja-u1-l4": {
        "id": "ja-u1-l4",
        "subject": "japanese",
        "unit": 1,
        "lessonNumber": 4,
        "title": "平仮名の習得４：マ行・ヤ行・ラ行・ワ行・ん (Complete 46 Hiragana Syllabary)",
        "level": "A1",
        "objective": "Complete all 46 basic Hiragana characters by mastering M-row (まみむめも), Y-row (やゆよ), R-row (らりるれろ), W-row (わを), and the nasal coda ん (n).",
        "presentation": {
            "explanation": "Congratulations! In this lesson you complete all **46 fundamental Hiragana characters**.\n\n### 1. The M-Row (マ行 - Ma-Row)\n- **ま** [ma], **み** [mi], **む** [mu], **め** [me], **も** [mo]\n\n### 2. The Y-Row (ヤ行 - Ya-Row — 3 Kana)\n- **や** [ya], **ゆ** [yu], **よ** [yo]\n\n### 3. The R-Row (ラ行 - Ra-Row)\n- **ら** [ra], **り** [ri], **る** [ru], **れ** [re], **ろ** [ro]\n- **Sound cue**: The Japanese \"r\" is an alveolar tap (like the \"tt\" in American English \"butter\"), flicking the tongue tip against the roof of the mouth.\n\n### 4. The W-Row (ワ行) & Nasal Coda ん\n- **わ** [wa] — \"w\" + \"a\"\n- **を** [wo / o] — Used strictly as the grammatical direct object particle.\n- **ん** [n] — The only independent consonant in Japanese; a nasal mora coda that never begins a word.\n\n### 5. Essential Japanese Vocabulary (Full Hiragana Literacy)\n- **やま** (*yama*) → **mountain** (や + ま)\n- **ゆめ** (*yume*) → **dream** (ゆ + め)\n- **さくら** (*sakura*) → **cherry blossom** (さ + く + ら)\n- **くるま** (*kuruma*) → **car / vehicle** (く + る + ま)\n- **ほん** (*hon*) → **book** (ほ + ん)\n- **わたし** (*watashi*) → **I / me** (わ + た + し)\n- **みず** (*mizu*) → **water** (み + ず)\n- **もり** (*mori*) → **forest** (も + り)\n- **そら** (*sora*) → **sky** (そ + ら)\n- **よる** (*yoru*) → **night** (よ + る)",
            "examples": [
                {
                    "target": "さくら",
                    "reading": "sakura",
                    "translation": "cherry blossom (さ + く + ら)"
                },
                {
                    "target": "やま",
                    "reading": "yama",
                    "translation": "mountain (や + ま)"
                },
                {
                    "target": "わたし",
                    "reading": "watashi",
                    "translation": "I / me (わ + た + し)"
                },
                {
                    "target": "ほん",
                    "reading": "hon",
                    "translation": "book (ほ + ん)"
                }
            ],
            "mnemonics": [
                "や looks like a Yak with horns. ゆ looks like a swimming fish. よ looks like a Yo-yo hanging from a finger. わ looks like a graceful swan (wa)."
            ],
            "culturalNotes": [
                "Sakura (さくら - cherry blossoms) blooming in spring represents the ephemeral beauty of life (mono no aware) and marks the start of the Japanese school and fiscal year in April."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which Hiragana word means \"cherry blossom\" spelled with 「さ」, 「く」, and 「ら」?",
                    "options": [
                        "さくら (sakura - cherry blossom)",
                        "くるま (kuruma - car)",
                        "わたし (watashi - I/me)",
                        "やま (yama - mountain)"
                    ],
                    "answerIndex": 0,
                    "explanation": "「さ」 [sa] + 「く」 [ku] + 「ら」 [ra] = 「さくら」 (*sakura*)."
                },
                {
                    "prompt": "What is the unique property of the Hiragana character 「ん」 [n]?",
                    "options": [
                        "It is the only independent consonant mora and never starts a native word",
                        "It is pronounced as a vowel",
                        "It is only used in Katakana",
                        "It is pronounced identical to \"a\""
                    ],
                    "answerIndex": 0,
                    "explanation": "「ん」 [n] is a distinct nasal mora that closes syllables and never appears at the start of native Japanese words."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identify the word for \"mountain\" formed by combining 「や」 [ya] and 「ま」 [ma]:",
                    "options": [
                        "やま (yama - mountain)",
                        "ゆめ (yume - dream)",
                        "そら (sora - sky)",
                        "もり (mori - forest)"
                    ],
                    "answerIndex": 0,
                    "explanation": "「や」 [ya] + 「ま」 [ma] = 「やま」 (*yama* - mountain)."
                },
                {
                    "prompt": "Select the Hiragana word meaning \"I / me\" spelled with 「わ」, 「た」, and 「し」:",
                    "options": [
                        "わたし (watashi - I/me)",
                        "あなた (anata - you)",
                        "くるま (kuruma - car)",
                        "ほん (hon - book)"
                    ],
                    "answerIndex": 0,
                    "explanation": "「わ」 [wa] + 「た」 [ta] + 「し」 [shi] = 「わたし」 (*watashi* - I / me)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Which Hiragana word means \"book\" formed from 「ほ」 [ho] and 「ん」 [n]?",
                    "options": [
                        "ほん (hon - book)",
                        "はな (hana - flower)",
                        "ひと (hito - person)",
                        "ふね (fune - boat)"
                    ],
                    "answerIndex": 0,
                    "explanation": "「ほ」 [ho] + 「ん」 [n] = 「ほん」 (*hon* - book)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hiragana word for \"cherry blossom\" (sa-ku-ra):",
                    "acceptedAnswers": [
                        "さくら"
                    ],
                    "explanation": "「さ」 + 「く」 + 「ら」 = 「さくら」 (*sakura*)."
                }
            ]
        }
    },
    "ja-u1-l5": {
        "id": "ja-u1-l5",
        "subject": "japanese",
        "unit": 1,
        "lessonNumber": 5,
        "title": "濁音・半濁音・拗音・促音と基本の挨拶 (Voiced Kana, Combinations & Core Greetings)",
        "level": "A1",
        "objective": "Master Dakuten voicing marks (がざだば), Handakuten (ぱ), Yoon contracted sounds (きゃ, しゃ, ちょ), Sokuon double consonants (っ), and daily polite greetings (Konnichiwa, Arigatou gozaimasu).",
        "presentation": {
            "explanation": "Now we master the phonetic modifications that complete spoken Japanese, along with standard polite daily greetings.\n\n### 1. Dakuten (濁音 - Tenten ゛) & Handakuten (半濁音 - Maru ゜)\n- **が ぎ ぐ げ ご** [ga, gi, gu, ge, go] — Voicing the K-row to G-row.\n- **ざ じ ず ぜ ぞ** [za, ji, zu, ze, zo] — Voicing the S-row to Z-row (じ is [ji]).\n- **だ ぢ づ で ど** [da, ji, zu, de, do] — Voicing the T-row to D-row.\n- **ば び ぶ べ ぼ** [ba, bi, bu, be, bo] — Voicing the H-row to B-row.\n- **ぱ ぴ ぷ ぺ ぽ** [pa, pi, pu, pe, po] — Handakuten circles create the P-row.\n\n### 2. Yoon (拗音 - Contracted Combos) & Sokuon (促音 - Small っ)\n- **Yoon**: Combining a [i]-vowel kana with small ゃ (ya), ゅ (yu), ょ (yo): **きゃ** (kya), **しゃ** (sha), **ちゃ** (cha), **にゃ** (nya), **ひゃ** (hya), **りょ** (ryo), **きょう** (kyou - today), **おちゃ** (ocha - green tea).\n- **Sokuon (Small っ)**: Creates a glottal stop / doubled consonant hold: **がっこう** (*gakkou* - school), **きっぷ** (*kippu* - ticket).\n\n### 3. Essential Daily Japanese Greetings (In Authentic Hiragana)\n- **こんにちは** (*Konnichiwa*) → **Hello / Good afternoon** (Note: final は is pronounced [wa])\n- **おはようございます** (*Ohayou gozaimasu*) → **Good morning (polite)**\n- **ありがとうございます** (*Arigatou gozaimasu*) → **Thank you very much (polite)**\n- **すみません** (*Sumimasen*) → **Excuse me / I am sorry / Thank you**\n- **さようなら** (*Sayounara*) → **Goodbye**\n- **はじめまして** (*Hajimemashite*) → **Nice to meet you (first time)**",
            "examples": [
                {
                    "target": "こんにちは",
                    "reading": "Konnichiwa",
                    "translation": "Hello / Good afternoon (everyday polite greeting)"
                },
                {
                    "target": "おはようございます",
                    "reading": "Ohayou gozaimasu",
                    "translation": "Good morning (respectful/polite)"
                },
                {
                    "target": "ありがとうございます",
                    "reading": "Arigatou gozaimasu",
                    "translation": "Thank you very much (polite gratitude)"
                },
                {
                    "target": "すみません",
                    "reading": "Sumimasen",
                    "translation": "Excuse me / I am sorry (multi-purpose courtesy)"
                }
            ],
            "mnemonics": [
                "Tenten (゛) adds vocal cord vibration turning K->G, S->Z, T->D, H->B. Maru (゜) turns H->P! Small っ acts as a 1-beat pause before the next consonant."
            ],
            "culturalNotes": [
                "Bowing (お辞儀 - ojigi) accompanies greetings in Japan. A slight 15-degree nod is used for casual greetings, while a 30-degree bow expresses deep respect and gratitude."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which standard polite greeting means \"Good morning\" in Japanese?",
                    "options": [
                        "おはようございます (Ohayou gozaimasu - Good morning)",
                        "こんにちは (Konnichiwa - Hello/Good afternoon)",
                        "さようなら (Sayounara - Goodbye)",
                        "すみません (Sumimasen - Excuse me)"
                    ],
                    "answerIndex": 0,
                    "explanation": "「おはようございます」 (*Ohayou gozaimasu*) is the standard polite morning greeting."
                },
                {
                    "prompt": "What sound transformation occurs when Dakuten (゛) is added to the H-row (はひふへほ)?",
                    "options": [
                        "It becomes the voiced B-row (ばびぶべぼ)",
                        "It becomes the P-row (ぱぴぷぺぽ)",
                        "It becomes the G-row (がぎぐげご)",
                        "It becomes the Z-row (ざじずぜぞ)"
                    ],
                    "answerIndex": 0,
                    "explanation": "Adding Dakuten (゛) to the H-row creates the voiced [b] sounds: ば, び, ぶ, べ, ぼ."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Select the versatile Japanese phrase meaning \"Excuse me\" or \"I am sorry\":",
                    "options": [
                        "すみません (Sumimasen - Excuse me / Sorry)",
                        "ありがとうございます (Arigatou gozaimasu - Thank you)",
                        "はじめまして (Hajimemashite - Nice to meet you)",
                        "こんにちは (Konnichiwa - Hello)"
                    ],
                    "answerIndex": 0,
                    "explanation": "「すみません」 (*Sumimasen*) is used to get attention (excuse me), apologize (sorry), or show appreciation."
                },
                {
                    "prompt": "In the greeting 「こんにちは」 (Konnichiwa), how is the final character 「は」 pronounced?",
                    "options": [
                        "[wa] (Pronounced \"wa\" as an archaic topic marker)",
                        "[ha] (Always pronounced \"ha\")",
                        "[he] (Pronounced \"he\")",
                        "[ho] (Pronounced \"ho\")"
                    ],
                    "answerIndex": 0,
                    "explanation": "In 「こんにちは」 and 「こんばんは」, the final 「は」 is historical topic particle and is pronounced [wa]."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Which phrase is the standard polite expression for \"Thank you very much\"?",
                    "options": [
                        "ありがとうございます (Arigatou gozaimasu - Thank you very much)",
                        "おはようございます (Ohayou gozaimasu - Good morning)",
                        "さようなら (Sayounara - Goodbye)",
                        "はじめまして (Hajimemashite - Nice to meet you)"
                    ],
                    "answerIndex": 0,
                    "explanation": "「ありがとうございます」 (*Arigatou gozaimasu*) expresses polite gratitude."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 5-character Hiragana greeting for \"Hello / Good afternoon\" (ko-n-ni-chi-wa):",
                    "acceptedAnswers": [
                        "こんにちは"
                    ],
                    "explanation": "「こ」 + 「ん」 + 「に」 + 「ち」 + 「は」 = 「こんにちは」 (*Konnichiwa*)."
                }
            ]
        }
    },
    "ja-u2-l1": {
        "id": "ja-u2-l1",
        "subject": "japanese",
        "unit": 2,
        "lessonNumber": 1,
        "title": "漢数字と基本基数詞 (Numbers 1-100)",
        "level": "A1",
        "objective": "漢数字（一〜百）の読み方と音便変化（四、七、九の異読と三百、六百、八百の促音・半濁音化）の習得。",
        "presentation": {
            "explanation": "日本語の数詞体系は、古代中国から伝来した漢数詞を基盤とし、固有の和語数詞と並行して用いられます。\n\n【基本数字の音読みと特殊な読み】\n・四（し / よん）：音読み「し」は「死」と同音であるため、日常会話や電話番号などでは「よん」が多く用いられます。\n・七（しち / なな）：音読み「しち」は「一（いち）」や「八（はち）」と聞き間違いやすいため、「なな」が頻繁に選択されます。\n・九（きゅう / く）：音読み「く」は「苦」と同音を避けるため「きゅう」が標準的ですが、時刻（九時＝くじ）や月（九月＝くがつ）では「く」と発音されます。\n・百（ひゃく）：三百（さんびゃく・濁音化）、六百（ろっぴゃく・促音半濁音化）、八百（はっぴゃく・促音半濁音化）の音便変化に注意が必要です。",
            "examples": [
                {
                    "target": "私の電話番号はゼロ三の一二三四の五六七八です。",
                    "reading": "わたしのでんわばんごうは ぜろさんの いちにさんよんの ごろくななはちです。",
                    "translation": "My phone number is 03-1234-5678."
                },
                {
                    "target": "この教科書は一冊八百円です。二冊で千六百円になります。",
                    "reading": "このきょうかしょは いっさつ はっぴゃくえんです。にさつで せんろっぴゃくえんに なります。",
                    "translation": "This textbook is 800 yen per volume. It is 1,600 yen for two volumes."
                },
                {
                    "target": "参加者は全員で四十七人です。",
                    "reading": "さんかしゃは ぜんいんで よんじゅうななにんです。",
                    "translation": "The participants total 47 people in all."
                },
                {
                    "target": "百から三百までの数字を日本語で数えましょう。",
                    "reading": "ひゃくから さんびゃくまでの すうじを にほんごで かぞえましょう。",
                    "translation": "Let us count numbers from 100 to 300 in Japanese."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【数字の読み分け】漢数字「47」の標準的な日本語の読み方はどれですか。",
                    "options": [
                        "よんじゅうなな（または よんじゅうしち）",
                        "しじゅうなな",
                        "よんじゅうきゅう",
                        "ななじゅうよん"
                    ],
                    "answerIndex": 0,
                    "explanation": "「47」は「よんじゅうなな」または「よんじゅうしち」と読みます。"
                },
                {
                    "prompt": "【百の音便変化】「300」「600」「800」の正しい読み方の組み合わせを選択してください。",
                    "options": [
                        "さんびゃく / ろっぴゃく / はっぴゃく",
                        "さんひゃく / ろくひゃく / はちひゃく",
                        "さんぴゃく / ろくぴゃく / はちぴゃく",
                        "さんびゃく / ろくびゃく / はちびゃく"
                    ],
                    "answerIndex": 0,
                    "explanation": "300は濁音化（さんびゃく）、600と800は促音＋半濁音化（ろっぴゃく、はっぴゃく）します。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【電話番号の読み方】「03-1234-5678」を日本語で伝える正しい発話を選択してください。",
                    "options": [
                        "ゼロさんの、いちにさんよんの、ごーろくななはちです。",
                        "ぜろさんから、いちにさんよんまで、ごーろくしちはちです。",
                        "れいさん、いちにさんし、ごーろくしちはちです。",
                        "ぜろさんを、いちにさんよんを、ごーろくななはちです。"
                    ],
                    "answerIndex": 0,
                    "explanation": "電話番号のハイフン「-」は接続助詞「の」で読み上げます。"
                },
                {
                    "prompt": "【合計人数の表現】参加人数が47人であることを述べる文を選択してください。",
                    "options": [
                        "参加者は全員で四十七人（よんじゅうななにん / よんじゅうしちにん）です。",
                        "参加者は全員で四十七本です。",
                        "参加者は全員で四十七円です。",
                        "参加者は全員で四十七匹です。"
                    ],
                    "answerIndex": 0,
                    "explanation": "人間の数を数える助数詞は「〜人（にん）」です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「この教科書は一冊800円です。二冊で1600円になります。」における「800円」と「1600円」の正しい読み方はどれですか。",
                    "options": [
                        "はっぴゃくえん / せんろっぴゃくえん",
                        "はちひゃくえん / せんろくひゃくえん",
                        "はちびゃくえん / せんろくびゃくえん",
                        "はっぴゃくえん / せんろくひゃくえん"
                    ],
                    "answerIndex": 0,
                    "explanation": "800円は「はっぴゃくえん」、1600円は「せんろっぴゃくえん」と音便変化します。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "漢数字「100」のひらがな読みを入力してください（ひらがな三文字）:",
                    "acceptedAnswers": [
                        "ひゃく",
                        "ヒャク"
                    ],
                    "explanation": "100は「ひゃく」と読みます。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u2-l2": {
        "id": "ja-u2-l2",
        "subject": "japanese",
        "unit": 2,
        "lessonNumber": 2,
        "title": "時刻表現と助数詞「時」「分」 (Time & Counters -ji / -fun)",
        "level": "A1",
        "objective": "時刻表現（〜時・〜分・半・午前/午後）と不規則発音（四時＝よじ、七時＝しちじ、九時＝くじ、一分＝いっぷん等）の完全習得。",
        "presentation": {
            "explanation": "日本語で時刻を表す際は、時間に助数詞「時（じ）」、分に助数詞「分（ふん/ぷん）」を接続させます。\n\n【時間の不規則音読み】\n・四時：不規則に「よじ」と発音します。\n・七時：標準的に「しちじ」と発音します。\n・九時：標準的に「くじ」と発音します。\n\n【分の音便変化（ふん vs ぷん）】\n一分（いっぷん）、二分（にふん）、三分（さんぷん）、四分（よんぷん）、五分（ごふん）、六分（ろっぷん）、七分（ななふん）、八分（はっぷん）、九分（きゅうふん）、十分（じゅっぷん/じっぷん）。三十分は「半（はん）」とも表現されます。",
            "examples": [
                {
                    "target": "今、何時ですか。— ちょうど午後二時半です。",
                    "reading": "いま、なんじですか。— ちょうど ごご にじはんです。",
                    "translation": "What time is it now? — It is exactly 2:30 PM."
                },
                {
                    "target": "朝の講義は午前九時四十五分から始まります。",
                    "reading": "あさの こうぎは ごぜん くじ よんじゅうごふんから はじまります。",
                    "translation": "The morning lecture starts from 9:45 AM."
                },
                {
                    "target": "新幹線は東京駅を午後四時十四分に出発いたします。",
                    "reading": "しんかんせんは とうきょうえきを ごご よじ じゅうよんぷんに しゅっぱついたします。",
                    "translation": "The Shinkansen departs Tokyo Station at 4:14 PM."
                },
                {
                    "target": "会議の開始時刻は午前十時十分に変更されました。",
                    "reading": "かいぎの かいしじこくは ごぜん じゅうじ じゅっぷんに へんこうされました。",
                    "translation": "The meeting start time has been changed to 10:10 AM."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【時間の不規則読み】「4時」「7時」「9時」の標準的な日本語の発音の組み合わせを選択してください。",
                    "options": [
                        "よじ / しちじ（または ななじ） / くじ",
                        "よんじ / ななじ / きゅうじ",
                        "しじ / しちじ / きゅうじ",
                        "よじ / ななじ / きゅうじ"
                    ],
                    "answerIndex": 0,
                    "explanation": "時刻の「時」では4時は「よじ」、7時は「しちじ」、9時は「くじ」と読みます。"
                },
                {
                    "prompt": "【「分」の音便】「1分」「3分」「6分」「8分」「10分」の正しい読み方の組み合わせを選択してください。",
                    "options": [
                        "いっぷん / さんぷん / ろっぷん / はっぷん / じゅっぷん",
                        "いちふん / さんふん / ろくふん / はちふん / じゅうふん",
                        "いっぷん / さんふん / ろっぷん / はちふん / じっぷん",
                        "いちぷん / さんぷん / ろくぷん / はちぷん / じゅうぷん"
                    ],
                    "answerIndex": 0,
                    "explanation": "1, 3, 6, 8, 10分は半濁音「〜ぷん」および促音化（いっぷん、ろっぷん等）を伴います。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【時刻の質問と回答】現在時刻を尋ねられて「ちょうど午後2時30分」と答える対話を選択してください。",
                    "options": [
                        "「今、何時ですか。」「ちょうど午後二時半（ごご にじはん）です。」",
                        "「今、何分ですか。」「午後二分です。」",
                        "「今、何曜日ですか。」「午後二時です。」",
                        "「今、何日ですか。」「二時半日です。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「2時30分」は「2時半（にじはん）」と言います。"
                },
                {
                    "prompt": "【出発時刻の伝達】新幹線の出発時刻「午後4時14分」を正確に伝える文を選択してください。",
                    "options": [
                        "新幹線は東京駅を午後四時十四分（ごご よじ じゅうよんぷん）に出発いたします。",
                        "新幹線は東京駅を午後四時十四分（ごご しじ じゅうよんふん）に出発いたします。",
                        "新幹線は東京駅を午後四時十四分（ごご よんじ じゅうよんふん）に出発いたします。",
                        "新幹線は東京駅を午後四時十四分（ごご よじ じゅうしふん）に出発いたします。"
                    ],
                    "answerIndex": 0,
                    "explanation": "4時は「よじ」、14分は「じゅうよんぷん」です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「会議の開始時刻は午前10時10分です」の正しい読み方はどれですか。",
                    "options": [
                        "ごぜん じゅうじ じゅっぷん（または じっぷん）",
                        "ごぜん とおじ じゅうふん",
                        "ごぜん じゅうじ とおふん",
                        "ごぜん じゅうじ じゅうふん"
                    ],
                    "answerIndex": 0,
                    "explanation": "10時は「じゅうじ」、10分は「じゅっぷん（じっぷん）」と読みます。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "「4時」のひらがな読みを入力してください（ひらがな二文字）:",
                    "acceptedAnswers": [
                        "よじ",
                        "ヨジ"
                    ],
                    "explanation": "4時の読みは「よじ」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u2-l3": {
        "id": "ja-u2-l3",
        "subject": "japanese",
        "unit": 2,
        "lessonNumber": 3,
        "title": "曜日・日付・月名カレンダー表現 (Days of Week & Calendar Dates)",
        "level": "A1",
        "objective": "七つの曜日と十二ヶ月の月名、一日から三十一日までの特別な和語日付（一日＝ついたち、二日＝ふつか等）の習得。",
        "presentation": {
            "explanation": "日本語のカレンダー表現には、七曜に基づく曜日名と、独特の和語音読みが混在する日付表現があります。\n\n【七曜の名称】\n月曜日、火曜日、水曜日、木曜日、金曜日、土曜日、日曜日。\n\n【一日〜十日および重要日付の特殊和語読み】\n一日（ついたち）、二日（ふつか）、三日（みっか）、四日（よっか）、五日（いつか）、六日（むいか）、七日（なのか）、八日（ようか）、九日（ここのか）、十日（とおか）、十四日（じゅうよっか）、二十日（はつか）、二十四日（にじゅうよっか）。",
            "examples": [
                {
                    "target": "今日は何曜日ですか。— 今日は水曜日です。明日は木曜日です。",
                    "reading": "きょうは なんようびですか。— きょうは すいようびです。あしたは もくようびです。",
                    "translation": "What day of the week is it today? — Today is Wednesday. Tomorrow is Thursday."
                },
                {
                    "target": "私の誕生日は五月五日（こどもの日）です。",
                    "reading": "わたしの たんじょうびは ごがつ いつか（こどものひ）です。",
                    "translation": "My birthday is May 5th (Children's Day)."
                },
                {
                    "target": "新学期は四月一日（ついたち）から始まります。",
                    "reading": "しんがっきは しがつ ついたちから はじまります。",
                    "translation": "The new academic term begins from April 1st."
                },
                {
                    "target": "日本への出張は七月二十日（はつか）から八月十日（とおか）までです。",
                    "reading": "にほんへの しゅっちょうは しちがつ はつかから はちがつ とおかまでです。",
                    "translation": "The business trip to Japan is from July 20th to August 10th."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【日付の特殊和語読み】「1日」「2日」「8日」「20日」の正しい読み方の組み合わせを選択してください。",
                    "options": [
                        "ついたち / ふつか / ようか / はつか",
                        "いちにち / ににち / はちにち / にじゅうにち",
                        "ついたち / ふつか / はちにち / はつか",
                        "いちにち / ふつか / ようか / にじゅうにち"
                    ],
                    "answerIndex": 0,
                    "explanation": "1日は「ついたち」、2日は「ふつか」、8日は「ようか」、20日は「はつか」と特殊な和語読みをします。"
                },
                {
                    "prompt": "【4がつく日付の読み】「4日」「14日」「24日」の正しい読み方を選択してください。",
                    "options": [
                        "よっか / じゅうよっか / にじゅうよっか",
                        "よんにち / じゅうよんにち / にじゅうよんにち",
                        "しにち / じゅうしにち / にじゅうしにち",
                        "よっか / じゅうよんにち / にじゅうよっか"
                    ],
                    "answerIndex": 0,
                    "explanation": "4がつく日付（4日、14日、24日）はすべて促音を伴う「〜よっか」となります。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【誕生日の伝達】「5月5日」を正確に伝える文を選択してください。",
                    "options": [
                        "私の誕生日は五月五日（ごがつ いつか）です。",
                        "私の誕生日は五月五日（ごがつ ごにち）です。",
                        "私の誕生日は五月五日（ごがつ いつひ）です。",
                        "私の誕生日は五月五日（いつがつ いつか）です。"
                    ],
                    "answerIndex": 0,
                    "explanation": "5月は「ごがつ」、5日は「いつか」と読みます。"
                },
                {
                    "prompt": "【曜日の順序】「水曜日」の翌日の曜日を答える自然な文を選択してください。",
                    "options": [
                        "今日は水曜日です。明日は木曜日（もくようび）です。",
                        "今日は水曜日です。明日は火曜日です。",
                        "今日は水曜日です。明日は金曜日です。",
                        "今日は水曜日です。明日は土曜日です。"
                    ],
                    "answerIndex": 0,
                    "explanation": "水曜日の次は木曜日（もくようび）です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「日本への出張は7月20日から8月10日までです」の日付部分（7月20日 / 8月10日）の正しい読み方はどれですか。",
                    "options": [
                        "しちがつ はつか / はちがつ とおか",
                        "なながつ にじゅうにち / はちがつ じゅうにち",
                        "しちがつ にじゅうにち / はちがつ とおか",
                        "なながつ はつか / はちがつ じゅうにち"
                    ],
                    "answerIndex": 0,
                    "explanation": "7月は「しちがつ」、20日は「はつか」、8月は「はちがつ」、10日は「とおか」です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "カレンダーの「1日」の特殊な和語読みを入力してください（ひらがな四文字）:",
                    "acceptedAnswers": [
                        "ついたち",
                        "ツイタチ"
                    ],
                    "explanation": "1日は「ついたち」と読みます。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u2-l4": {
        "id": "ja-u2-l4",
        "subject": "japanese",
        "unit": 2,
        "lessonNumber": 4,
        "title": "金額・買い物・助数詞「円」「万」 (Money & Prices)",
        "level": "A1",
        "objective": "通貨単位「円」と大数単位「万」「億」を用いた価格の尋ね方と会計表現の習得。",
        "presentation": {
            "explanation": "日本の通貨単位は「円（えん）」です。日本語は大数を「万（まん：一万＝10,000）」単位で区切る万進法を採用しています。\n\n【大数の単位体系】\n一、十、百、千、一万（10,000）、十万（100,000）、百万（1,000,000）、一千万（10,000,000）、一億（100,000,000）。\n\n【価格を尋ねる表現】\n「これはいくらですか」に対し、「〜円です」と答えます。消費税込みの価格を「税込（ぜいこみ）」、税抜価格を「税抜（ぜいぬき）」と呼びます。",
            "examples": [
                {
                    "target": "すみません、この日本の緑茶は一袋いくらですか。— 税込で八百五十円です。",
                    "reading": "すみません、このにほんのりょくちゃは ひとふくろ いくらですか。— ぜいこみで はっぴゃくごじゅうえんです。",
                    "translation": "Excuse me, how much is this bag of Japanese green tea? — It is 850 yen including tax."
                },
                {
                    "target": "この最新型ノートパソコンは十五万八千円です。",
                    "reading": "このさいしんがた ノートパソコンは じゅうごまん はっせんえんです。",
                    "translation": "This latest laptop computer is 158,000 yen."
                },
                {
                    "target": "お会計は全部で三万二千円になります。クレジットカードは使えますか。",
                    "reading": "おかいけいは ぜんぶで さんまんにせんえんに なります。クレジットカードは つかえますか。",
                    "translation": "The total bill comes to 32,000 yen. Can I use a credit card?"
                },
                {
                    "target": "一万円札でお支払いいたしますので、お釣りをお願いします。",
                    "reading": "いちまんえんさつで おしはらいいたしますので、おつりを おねがいします。",
                    "translation": "I will pay with a 10,000 yen bill, so please give me the change."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【価格を尋ねる表現】商品の値段を丁寧に尋ねる疑問文として最も自然なものはどれですか。",
                    "options": [
                        "すみません、これはいくらですか。",
                        "すみません、これは何円ですか。",
                        "すみません、これは幾つですか。",
                        "すみません、これは何時ですか。"
                    ],
                    "answerIndex": 0,
                    "explanation": "価格を尋ねる定番表現は「いくらですか」です。"
                },
                {
                    "prompt": "【大数の単位区切り】数値「158,000円」の日本語の正しい読み方を選択してください。",
                    "options": [
                        "じゅうごまん はっせんえん（15万 8千円）",
                        "ひゃくごじゅうはち せんえん",
                        "じゅうごまん はちひゃくえん",
                        "いっせんごひゃくはちじゅうえん"
                    ],
                    "answerIndex": 0,
                    "explanation": "日本語では4桁（万）ごとに区切るため、158,000は「15万8千（じゅうごまんはっせん）」となります。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【支払いとクレジットカード】レジでの支払い時の自然な対話を選択してください。",
                    "options": [
                        "「お会計は全部で三万二千円になります。」「クレジットカードは使えますか。」",
                        "「お会計は全部で三万二千時です。」「円を払います。」",
                        "「お会計は三万二千日です。」「カードを飲みます。」",
                        "「お会計は三万二千人です。」「行きます。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "金額を提示された際の支払い手段の確認として「クレジットカードは使えますか」が適切です。"
                },
                {
                    "prompt": "【紙幣とお釣りの表現】1万円札を出してお釣りを求める丁寧な表現を選択してください。",
                    "options": [
                        "一万円札でお支払いいたしますので、お釣りをお願いします。",
                        "一万円札を食べますので、お釣りをください。",
                        "一万円札に行きますので、お釣りを取ってください。",
                        "一万円札です。お釣りはいりませんです。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜でお支払いいたしますので、お釣りをお願いします」が丁寧で自然です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「税込（ぜいこみ）」と「税抜（ぜいぬき）」の意味の説明として正しいものはどれですか。",
                    "options": [
                        "税込は消費税を含んだ価格、税抜は消費税を含まない本体価格である。",
                        "税込は割引価格、税抜は定価である。",
                        "税込は現金価格、税抜はカード価格である。",
                        "両者に違いはない。"
                    ],
                    "answerIndex": 0,
                    "explanation": "税込（消費税込み）と税抜（本体価格のみ）の区別です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "日本の通貨単位（漢字一文字）を入力してください:",
                    "acceptedAnswers": [
                        "円",
                        "えん",
                        "エン"
                    ],
                    "explanation": "日本の通貨単位は「円（えん）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u2-l5": {
        "id": "ja-u2-l5",
        "subject": "japanese",
        "unit": 2,
        "lessonNumber": 5,
        "title": "時間の助詞「に」「から」「まで」 (Temporal Particles NI, KARA, MADE)",
        "level": "A1",
        "objective": "特定時を表す格助詞「に」と期間の起点・終点を表す「から」「まで」の文法規則。",
        "presentation": {
            "explanation": "時間を表す語句とともに用いられる主要な助詞の機能を学習します。\n\n【時間の助詞の体系的規則】\n１．格助詞「に」：数字を含む具体的な特定時点（時刻、曜日、日付、年）に接続します（例：「七時に起きる」「月曜日に会議がある」）。\n   ※相対的な時間名詞（「今日」「明日」「毎朝」「来週」など）の後には原則として「に」を付加しません。\n２．格助詞「から」：時間の起点（開始時刻・日付）を表します（例：「九時から」）。\n３．格助詞「まで」：時間の終点（終了時刻・日付）を表します（例：「五時まで」）。",
            "examples": [
                {
                    "target": "毎朝七時に起きて、八時半に会社へ行きます。",
                    "reading": "まいあさ ななじに おきて、はちじはんに かいしゃへ いきます。",
                    "translation": "I wake up at 7:00 every morning and go to the office at 8:30."
                },
                {
                    "target": "図書館は火曜日から日曜日まで開館しています。月曜日は休館です。",
                    "reading": "としょかんは かようびから にちようびまで かいかんしています。げつようびは きゅうかんです。",
                    "translation": "The library is open from Tuesday to Sunday. It is closed on Mondays."
                },
                {
                    "target": "本日のセミナーは午後一時から午後四時半まで行われます。",
                    "reading": "ほんじつの セミナーは ごご いちじから ごご よじはんまで おこなわれます。",
                    "translation": "Today's seminar will be held from 1:00 PM to 4:30 PM."
                },
                {
                    "target": "明日の夜、友達と銀座で会う約束があります。",
                    "reading": "あしたの よる、ともだちと ぎんざで あう やくそくが あります。",
                    "translation": "Tomorrow night, I have an appointment to meet a friend in Ginza."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【助詞「に」の付加規則】助詞「に」を付けるべき時間表現はどれですか。",
                    "options": [
                        "午前7時（具体的な数字を含む時刻：午前7時に起きる）",
                        "今日（相対的な時間名詞）",
                        "毎朝（習慣を表す時間名詞）",
                        "明日（相対的な時間名詞）"
                    ],
                    "answerIndex": 0,
                    "explanation": "数字を含む具体的な時点（7時、5月5日など）には助詞「に」を付けます。今日・明日・毎朝には原則付けません。"
                },
                {
                    "prompt": "【起点「から」と終点「まで」】「9時から5時まで」を表す正しい助詞の組み合わせを選択してください。",
                    "options": [
                        "起点：から / 終点：まで",
                        "起点：まで / 終点：から",
                        "起点：に / 終点：へ",
                        "起点：で / 終点：を"
                    ],
                    "answerIndex": 0,
                    "explanation": "時間の始まり（起点）は「から」、終わり（終点）は「まで」で表します。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【営業期間の案内】図書館が「火曜日から日曜日まで」開いていることを伝える文を選択してください。",
                    "options": [
                        "図書館は火曜日から日曜日まで開館しています。月曜日は休館です。",
                        "図書館は火曜日に日曜日に開館しています。",
                        "図書館は火曜日まで日曜日から開館しています。",
                        "図書館は火曜日で日曜日を開館しています。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「火曜日から（起点）日曜日まで（終点）」の組み合わせが正確です。"
                },
                {
                    "prompt": "【相対時間名詞の助詞】「明日の夜、友達と会う」という文で助詞「に」が付かない正しい文を選択してください。",
                    "options": [
                        "明日の夜、友達と銀座で会う約束があります。",
                        "明日の夜に、友達と銀座で会う約束がありますに。",
                        "明日にの夜に、友達と銀座で会う約束があります。",
                        "毎明日に、友達と銀座で会う約束があります。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「明日の夜」のような相対的時間表現には助詞「に」を付けずにそのまま副詞的に用います。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「本日のセミナーは午後1時から午後4時半まで行われます」における「から」と「まで」の文法機能は何ですか。",
                    "options": [
                        "「から」は開始時刻（起点）、「まで」は終了時刻（終点）を示している。",
                        "「から」は場所で「まで」は時間である。",
                        "両方とも理由を表している。",
                        "「から」が終点で「まで」が起点である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "開始時刻の起点「午後1時から」と終了時刻の終点「午後4時半まで」を表します。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "時間の終点（〜まで）を表す助詞を入力してください（ひらがな二文字）:",
                    "acceptedAnswers": [
                        "まで",
                        "マデ"
                    ],
                    "explanation": "終点を表す助詞は「まで」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u3-l1": {
        "id": "ja-u3-l1",
        "subject": "japanese",
        "unit": 3,
        "lessonNumber": 1,
        "title": "存在動詞「います」と「あります」の峻別 (Existence Verbs)",
        "level": "A1",
        "objective": "有情物の存在を表す「います」と無情物の存在を表す「あります」の厳密な使い分け。",
        "presentation": {
            "explanation": "日本語の存在表現は、主体の有情性（生命感・自律的移動能力の有無）に基づいて、二種類の異なる存在動詞を明確に使い分ける文法体系を持っています。\n\n【存在動詞の峻別基準】\n１．「います」（有情物）：人間および動物・鳥類・昆虫（例：学生、猫、鳥）。\n２．「あります」（無情物・植物・抽象概念）：物品、家具、建物、植物、行事、約束、時間（例：机、車、桜の木、会議）。\n\n【基本構文】\n・「場所 に 主体 が います/あります」\n・「主体 は 場所 に います/あります」",
            "examples": [
                {
                    "target": "教室の中に日本語の先生と留学生がいます。",
                    "reading": "きょうしつの なかに にほんごの せんせいと りゅうがくせいが います。",
                    "translation": "There are a Japanese teacher and international students inside the classroom."
                },
                {
                    "target": "机の上に辞書とノートとペンがあります。",
                    "reading": "つくえの うえに じしょと ノートと ペンが あります。",
                    "translation": "There are a dictionary, a notebook, and a pen on the desk."
                },
                {
                    "target": "庭に大きくて綺麗な桜の木があります。木の下に可愛い猫がいます。",
                    "reading": "にわに おおきくて きれいな さくらのきが あります。きの したに かわいい ねこが います。",
                    "translation": "There is a large and beautiful cherry tree in the garden. Under the tree, there is a cute cat."
                },
                {
                    "target": "明日の午後、国際会議場で重要な学術シンポジウムがあります。",
                    "reading": "あしたの ごご、こくさいかいぎじょうで じゅうような がくじゅつシンポジウムが あります。",
                    "translation": "Tomorrow afternoon, there is an important academic symposium at the International Conference Center."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【存在動詞の峻別】「猫」「先生」「机」「桜の木」に接続する存在動詞の組み合わせとして正しいものはどれですか。",
                    "options": [
                        "猫：います / 先生：います / 机：あります / 桜の木：あります",
                        "猫：あります / 先生：います / 机：あります / 桜の木：います",
                        "猫：います / 先生：あります / 机：います / 桜の木：あります",
                        "すべて「あります」"
                    ],
                    "answerIndex": 0,
                    "explanation": "人間・動物などの有情物には「います」、物品・植物などの無情物には「あります」を用います。"
                },
                {
                    "prompt": "【植物の存在動詞】「庭に大きな桜の木が＿＿＿。」の空欄に入る動詞はどれですか。",
                    "options": [
                        "あります（植物は無情物として「ある」を用いる）",
                        "います",
                        "します",
                        "行きます"
                    ],
                    "answerIndex": 0,
                    "explanation": "日本語文法において植物（樹木・草花）は自律移動しないため「あります」をとります。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【教室内の描写】教室に先生と留学生がいる状況を表す最も適切な文を選択してください。",
                    "options": [
                        "教室の中に日本語の先生と留学生がいます。",
                        "教室の中に日本語の先生と留学生があります。",
                        "教室の中に日本語の先生と留学生がします。",
                        "教室の中に日本語の先生と留学生が行きます。"
                    ],
                    "answerIndex": 0,
                    "explanation": "先生と留学生は人間（有情物）であるため「います」を用います。"
                },
                {
                    "prompt": "【机の上の配置】机の上に文房具がある状況を表す文を選択してください。",
                    "options": [
                        "机の上に辞書とノートとペンがあります。",
                        "机の上に辞書とノートとペンがいます。",
                        "机の上に辞書とノートとペンが話します。",
                        "机の上に辞書とノートとペンをあります。"
                    ],
                    "answerIndex": 0,
                    "explanation": "辞書・ノート・ペンは無生物であるため「あります」を用います。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「明日の午後、国際会議場で重要なシンポジウムが＿＿＿。」に入る動詞は何ですか。",
                    "options": [
                        "あります（イベント・催事・行事の存在）",
                        "います",
                        "おられます",
                        "いらっしゃいます"
                    ],
                    "answerIndex": 0,
                    "explanation": "会議や催し事・イベントの開催・存在には「あります」を用います。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "人間や動物の存在を表す動詞の丁寧形を入力してください（ひらがな三文字）:",
                    "acceptedAnswers": [
                        "います",
                        "イマス",
                        "居ます"
                    ],
                    "explanation": "有情物の存在動詞は「います」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u3-l2": {
        "id": "ja-u3-l2",
        "subject": "japanese",
        "unit": 3,
        "lessonNumber": 2,
        "title": "家族の呼称：内と外の言語文化 (Family Terms: Uchi vs Soto)",
        "level": "A1",
        "objective": "自分の身内の家族（内）と他人の家族（外・敬称）を峻別する親族呼称体系の習得。",
        "presentation": {
            "explanation": "日本語における親族呼称体系は、日本の社会構造の基幹概念である「ウチ（内＝身内）」と「ソト（外＝他者）」の峻別規範を反映しています。\n\n【身内（ウチ）vs 他者（ソト）の対照】\n・父（ちち） vs お父さん（おとうさん）\n・母（はは） vs お母さん（おかあさん）\n・兄（あに） vs お兄さん（おにいさん）\n・姉（あね） vs お姉さん（おねえさん）\n・弟（おとうと） vs 弟さん（おとうとさん）\n・妹（いもうと） vs 妹さん（いもうとさん）\n\n他者に対して自分の家族を話す際は、身内を高めない（謙譲の精神）ため、常に「父」「母」を用います。",
            "examples": [
                {
                    "target": "私の父は高校の英語教師で、母は総合病院の看護師です。",
                    "reading": "わたしの ちちは こうこうの えいごきょうしで、ははは そうごうびょういんの かんごしです。",
                    "translation": "My father is a high school English teacher, and my mother is a nurse at a general hospital."
                },
                {
                    "target": "田中さんのお父様はどちらの会社にお勤めですか。",
                    "reading": "たなかさんの おとうさまは どちらの かいしゃに おつとめですか。",
                    "translation": "Which company does your father work for, Mr. Tanaka?"
                },
                {
                    "target": "私の兄は東京のIT企業でエンジニアをしています。",
                    "reading": "わたしの あには とうきょうの アイティーきぎょうで エンジニアを しています。",
                    "translation": "My older brother is an engineer at an IT firm in Tokyo."
                },
                {
                    "target": "佐藤さんのご家族はお元気ですか。— はい、おかげさまで皆元気です。",
                    "reading": "さとうさんの ごかぞくは おげんきですか。— はい、おかげさまで みな げんきです。",
                    "translation": "How is your family, Mr. Sato? — Yes, thanks to you, everyone is doing well."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【ウチとソトの親族呼称】他者に対して「自分の父親」と「相手の父親」を指す正しい組み合わせを選択してください。",
                    "options": [
                        "自分の父親：父（ちち） / 相手の父親：お父さん（おとうさん・お父様）",
                        "自分の父親：お父さん / 相手の父親：父",
                        "自分の父親：パパさん / 相手の父親：父",
                        "両方とも「お父さん」"
                    ],
                    "answerIndex": 0,
                    "explanation": "日本語では他者に対して自分の身内を呼ぶ時は謙譲語の「父」「母」を使い、相手の家族には「お父さん」「お母さん」と敬称を付けます。"
                },
                {
                    "prompt": "【自分の兄を他人に紹介する文】他者との対話で自分の兄の職業を説明する適切な文はどれですか。",
                    "options": [
                        "私の兄（あに）は東京のIT企業でエンジニアをしています。",
                        "私のお兄さんは東京のIT企業でエンジニアをしています。",
                        "私のお兄様は東京のIT企業でエンジニアをしています。",
                        "私の兄さんは東京のIT企業でエンジニアをしています。"
                    ],
                    "answerIndex": 0,
                    "explanation": "外部の人に対して自分の兄を言うときは敬称を付けず「兄（あに）」と言います。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【両親の職業紹介】他者に対して自分の両親を紹介する最も礼儀正しい日本語を選択してください。",
                    "options": [
                        "私の父は高校の英語教師で、母は総合病院の看護師です。",
                        "私のお父さんは高校の英語教師で、お母さんは看護師です。",
                        "私の父様は英語教師で、母様は看護師です。",
                        "私のお父様とお母様は教師と看護師です。"
                    ],
                    "answerIndex": 0,
                    "explanation": "身内の紹介では「父（ちち）」「母（はは）」を用いるのが正しい規範です。"
                },
                {
                    "prompt": "【相手の家族への気遣い】相手の家族の健康を気遣う質問とそれに対する自然な返答を選択してください。",
                    "options": [
                        "「佐藤さんのご家族はお元気ですか。」「はい、おかげさまで皆元気です。」",
                        "「佐藤さんの身内は生きていますか。」「死んでいません。」",
                        "「佐藤さんの父はいますか。」「父はいません。」",
                        "「佐藤さんの家庭はどうですか。」「家庭があります。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「ご家族はお元気ですか」「おかげさまで皆元気です」が極めて自然な社交儀礼です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "取引先の人に対して自分の母親について言及する際、最も適切な呼称はどれですか。",
                    "options": [
                        "母（はは）",
                        "お母さん",
                        "お母様",
                        "ママ"
                    ],
                    "answerIndex": 0,
                    "explanation": "ビジネスや改まった対外対話で自分の母親は「母（はは）」と呼びます。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "他者に対して自分の父親を呼ぶ際の謙称を入力してください（漢字一文字）:",
                    "acceptedAnswers": [
                        "父",
                        "ちち",
                        "チチ"
                    ],
                    "explanation": "自分の父親は「父（ちち）」と呼びます。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u3-l3": {
        "id": "ja-u3-l3",
        "subject": "japanese",
        "unit": 3,
        "lessonNumber": 3,
        "title": "位置関係と空間名詞 (Spatial Nouns & Prepositions)",
        "level": "A1",
        "objective": "空間位置名詞（上・下・前・後ろ・右・左・中・隣・間）と助詞「の」「に」を用いた精確な位置描写。",
        "presentation": {
            "explanation": "日本語では、物体の位置や空間的配置を「基準名詞 ＋ 助詞の ＋ 位置名詞 ＋ 助詞に」という構造で表現します。\n\n【主要な空間位置名詞】\n上（うえ）、下（した）、前（まえ）、後ろ（うしろ）、右（みぎ）、左（ひだり）、中（なか）、外（そと）、隣（となり / 同種の横並び）、間（あいだ / 二者の中間）。\n\n【構文モデル】\n「机の 上 に ノートが あります」「銀行は 駅と 郵便局の 間 に あります」",
            "examples": [
                {
                    "target": "駅の前に大きな本屋とカフェがあります。",
                    "reading": "えきの まえに おおきな ほんやと カフェが あります。",
                    "translation": "There are a big bookstore and a cafe in front of the station."
                },
                {
                    "target": "郵便局は銀行と病院の間にあります。",
                    "reading": "ゆうびんきょくは ぎんこうと びょういんの あいだに あります。",
                    "translation": "The post office is between the bank and the hospital."
                },
                {
                    "target": "私の部屋の机の右隣に本棚があります。",
                    "reading": "わたしの へやの つくえの みぎどなりに ほんだなが あります。",
                    "translation": "There is a bookshelf right next to the right of the desk in my room."
                },
                {
                    "target": "箱の中に何が入っていますか。— 古い写真と手紙があります。",
                    "reading": "はこの なかに なにが はいっていますか。— ふるい しゃしんと てがみが あります。",
                    "translation": "What is inside the box? — There are old photographs and letters."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【空間位置構文の語順】「基準となる物」と「位置名詞」を繋ぐ助詞の正しいパターンはどれですか。",
                    "options": [
                        "［基準名詞］＋ の ＋［位置名詞］＋ に（例：机の上【に】）",
                        "［基準名詞］＋ に ＋［位置名詞］＋ の",
                        "［位置名詞］＋ の ＋［基準名詞］＋ を",
                        "［基準名詞］＋ で ＋［位置名詞］＋ へ"
                    ],
                    "answerIndex": 0,
                    "explanation": "日本語の位置表現は「名詞 ＋ の ＋ 上/下/前/後/中/間 ＋ に」となります。"
                },
                {
                    "prompt": "【「間（あいだ）」の構文】「AとBの間」を表す正しい助詞の組み合わせを選択してください。",
                    "options": [
                        "銀行【と】病院の【間】に郵便局があります。",
                        "銀行【に】病院の【中】に郵便局があります。",
                        "銀行【へ】病院の【上】に郵便局があります。",
                        "銀行【で】病院の【下】に郵便局があります。"
                    ],
                    "answerIndex": 0,
                    "explanation": "二者の間を示す構文は「A と B の 間（あいだ）に」です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【駅前の描写】駅の正面に本屋とカフェがあることを述べる文を選択してください。",
                    "options": [
                        "駅の前に大きな本屋とカフェがあります。",
                        "駅の上が大きな本屋とカフェにあります。",
                        "駅の中へ大きな本屋とカフェをあります。",
                        "駅の後ろで大きな本屋とカフェがあります。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「駅の前（まえ）に」で駅の正面の位置を示します。"
                },
                {
                    "prompt": "【机の隣の配置】机の右隣に本棚が置かれていることを説明する文を選択してください。",
                    "options": [
                        "机の右隣（みぎどなり）に本棚があります。",
                        "机の右間に本棚がいます。",
                        "机の右下に本棚がします。",
                        "机の右前に本棚を行きます。"
                    ],
                    "answerIndex": 0,
                    "explanation": "右側のすぐ隣は「右隣（みぎどなり）」で表します。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「箱の中に何が入っていますか。」に対する返答として適切なものはどれですか。",
                    "options": [
                        "古い写真と手紙があります。",
                        "古い写真と手紙がいます。",
                        "古い写真と手紙が行きます。",
                        "古い写真と手紙を飲みます。"
                    ],
                    "answerIndex": 0,
                    "explanation": "写真や手紙は無生物なので「あります」を用います。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "「二つのものの真ん中」を意味する空間位置名詞を入力してください（漢字一文字）:",
                    "acceptedAnswers": [
                        "間",
                        "あいだ",
                        "アイダ"
                    ],
                    "explanation": "「間（あいだ）」は二者の間を表します。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u3-l4": {
        "id": "ja-u3-l4",
        "subject": "japanese",
        "unit": 3,
        "lessonNumber": 4,
        "title": "格助詞「が」と「に」の存在文法 (Particle GA & NI)",
        "level": "A1",
        "objective": "存在文における主格助詞「が」（新情報の提示）と場所の格助詞「に」（存在地点）の統語的役割。",
        "presentation": {
            "explanation": "存在を表す文において、助詞「に」と助詞「が」は互いに補完し合う統語的役割を果たします。\n\n【助詞の機能の厳密な定義】\n１．助詞「に」（存在の場所）：主体が存在する具体的な空間・地点を示します（例：「公園に」「日本に」）。\n２．助詞「が」（存在の主体）：文の中に存在する対象そのものを新情報として明示します。\n\n【「は」と「が」の対比】\n・「庭に 犬が います」（新情報の提示）\n・「犬は 庭に います」（既知の主題の所在説明）",
            "examples": [
                {
                    "target": "新宿駅の東口に有名な待ち合わせ場所があります。",
                    "reading": "しんじゅくえきの ひがしぐちに ゆうめいな まちあわせばしょが あります。",
                    "translation": "There is a famous meeting spot at the East Exit of Shinjuku Station."
                },
                {
                    "target": "あのビルの屋上に緑豊かな庭園があります。",
                    "reading": "あのビルの おくじょうに みどりゆたかな ていえんが あります。",
                    "translation": "There is a lush rooftop garden on top of that building."
                },
                {
                    "target": "会議室に誰がいますか。— 部長とクライアントがいます。",
                    "reading": "かいぎしつに だれが いますか。— ぶちょうと クライアントが います。",
                    "translation": "Who is in the conference room? — The department manager and the client are there."
                },
                {
                    "target": "田中さんは今どこにいますか。— 図書館の二階にいます。",
                    "reading": "たなかさんは いま どこに いますか。— としょかんの にかいに います。",
                    "translation": "Where is Mr. Tanaka now? — He is on the second floor of the library."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【「場所＋に＋物＋が＋ある」の格助詞】「ビルの屋上＿＿＿庭園＿＿＿あります。」の空欄に入る助詞の組み合わせを選択してください。",
                    "options": [
                        "に / が（場所に 庭園が あります）",
                        "で / を",
                        "へ / と",
                        "から / まで"
                    ],
                    "answerIndex": 0,
                    "explanation": "存在の場所には助詞「に」、存在する主体（新情報）には助詞「が」を用います。"
                },
                {
                    "prompt": "【誰がいますかへの応答】「会議室に誰がいますか。」に対する文法的に正しい返答はどれですか。",
                    "options": [
                        "部長とクライアントがいます。",
                        "部長とクライアントがあります。",
                        "部長とクライアントに行きます。",
                        "部長とクライアントを食べます。"
                    ],
                    "answerIndex": 0,
                    "explanation": "人物の存在を答えるため「〜がいます」となります。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【所在の質問と回答】田中さんの現在地を尋ねて答える自然な対話を選択してください。",
                    "options": [
                        "「田中さんは今どこにいますか。」「図書館の二階にいます。」",
                        "「田中さんは今どこがありますか。」「図書館の二階があります。」",
                        "「田中さんは今どこへしますか。」「図書館の二階をします。」",
                        "「田中さんは今どこで行きますか。」「図書館の二階から行きます。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "人物の所在を尋ねる疑問文は「どこにいますか」、回答は「〜にいます」です。"
                },
                {
                    "prompt": "【ランドマークの存在】新宿駅東口に待ち合わせ場所があることを説明する文を選択してください。",
                    "options": [
                        "新宿駅の東口に有名な待ち合わせ場所があります。",
                        "新宿駅の東口で有名な待ち合わせ場所をいます。",
                        "新宿駅の東口へ有名な待ち合わせ場所がいます。",
                        "新宿駅の東口から有名な待ち合わせ場所がありますか。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「東口に（場所）場所が（主体）あります（無生物）」の語順と助詞配置が正確です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「庭に犬がいます」と「犬は庭にいます」の文法的・語用論的差異は何ですか。",
                    "options": [
                        "前者は「犬がいる」という新情報の提示、後者は既知の「犬」の所在を説明している。",
                        "前者が無生物で後者が生物である。",
                        "前者が過去形で後者が現在形である。",
                        "意味上の違いは全くない。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜に〜がいる（が）」は新情報の導入、「〜は〜にいる（は）」は既知の主題の所在説明です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "存在文において存在場所を示す格助詞を入力してください（ひらがな一文字）:",
                    "acceptedAnswers": [
                        "に",
                        "ニ"
                    ],
                    "explanation": "存在場所を示す助詞は「に」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u3-l5": {
        "id": "ja-u3-l5",
        "subject": "japanese",
        "unit": 3,
        "lessonNumber": 5,
        "title": "並立助詞「と」「や」「も」の総合運用 (Parallel Particles TO, YA, MO)",
        "level": "A1",
        "objective": "完全列挙の「と」、代表例列挙の「や（〜など）」、同類追加の「も」の文法的機能と使い分け。",
        "presentation": {
            "explanation": "名詞を並列・連結する三つの主要な並立助詞の使い分けを学びます。\n\n【並立助詞の機能的差異】\n１．助詞「と」（完全列挙）：並列する要素をすべて漏れなく網羅して提示します（例：「パンと 卵を買いました」）。\n２．助詞「や」（代表列挙）：多数ある要素の中から代表的なものを例示します。文末に「など」を伴うことが多いです（例：「本や 雑誌などを読みます」）。\n３．助詞「も」（同類追加）：他のものと同じ性質や状態であることを示します（例：「田中さんも 学生です」）。",
            "examples": [
                {
                    "target": "朝食にパンと卵とリンゴを食べました。",
                    "reading": "ちょうしょくに パンと たまごと リンゴを たべました。",
                    "translation": "I ate bread, eggs, and an apple for breakfast."
                },
                {
                    "target": "休日は図書館で本や雑誌などを読みます。",
                    "reading": "きゅうじつは としょかんで ほんや ざっしなどを よみます。",
                    "translation": "On holidays, I read books, magazines, and other things at the library."
                },
                {
                    "target": "私も日本の伝統文化や歴史にとても興味があります。",
                    "reading": "わたしも にほんの でんとうぶんかや れきしに とても きょうみが あります。",
                    "translation": "I also have great interest in traditional Japanese culture and history."
                },
                {
                    "target": "デパートで靴と鞄を買いました。時計も欲しかったです。",
                    "reading": "デパートで くつと かばんを かいました。とけいも ほしかったです。",
                    "translation": "I bought shoes and a bag at the department store. I wanted a watch as well."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【並立助詞の使い分け】名詞を「すべて漏れなく完全に列挙する」助詞と、「代表的な例を挙げる」助詞の正しい組み合わせはどれですか。",
                    "options": [
                        "完全列挙：と / 代表列挙：や（〜など）",
                        "完全列挙：や / 代表列挙：と",
                        "完全列挙：も / 代表列挙：と",
                        "完全列挙：に / 代表列挙：で"
                    ],
                    "answerIndex": 0,
                    "explanation": "「と」は全要素を網羅する完全列挙、「や」は一部を例示する代表列挙です。"
                },
                {
                    "prompt": "【同類追加の助詞】「田中さんは学生です。佐藤さん＿＿＿学生です。」の空欄に入る助詞はどれですか。",
                    "options": [
                        "も（同類・追加）",
                        "と",
                        "や",
                        "を"
                    ],
                    "answerIndex": 0,
                    "explanation": "既出の要素と同類・共通であることを表すには助詞「も」を用います。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【文脈理解】「休日は図書館で本や雑誌などを読みます」の文が含意している事実として正しいものはどれですか。",
                    "options": [
                        "本や雑誌の他にも、新聞や資料など色々なものを読んでいる可能性がある。",
                        "読んだものは本と雑誌の二種類だけで他には一切読んでいない。",
                        "本も雑誌も読んでいない。",
                        "図書館ではなく書店で買った。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「や〜など」は代表的な例示であり、言及されていない他の同類要素の存在を含みます。"
                },
                {
                    "prompt": "【並列文の構成】朝食でパン・卵・リンゴの3品だけを食べたことを漏れなく正確に伝える文を選択してください。",
                    "options": [
                        "朝食にパンと卵とリンゴを食べました。",
                        "朝食にパンや卵を食べました。",
                        "朝食にパンも卵も食べませんでした。",
                        "朝食にパンに卵にリンゴでした。"
                    ],
                    "answerIndex": 0,
                    "explanation": "食べた全品目を漏れなく網羅するため、完全列挙の助詞「と」を用います。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「デパートで靴と鞄を買いました。時計も欲しかったです。」における各助詞の機能の記述として最も正確なものはどれですか。",
                    "options": [
                        "「と」は靴と鞄の完全列挙、「も」は時計を追加の対象として提示している。",
                        "「と」は代表例で「も」は主語である。",
                        "「と」は時間で「も」は場所である。",
                        "助詞の使い分けに誤りがある。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「靴と鞄」で買った品目を網羅し、「時計も」で追加の願望対象を提示しています。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "代表的な例を並べて挙げる並立助詞を入力してください（ひらがな一文字）:",
                    "acceptedAnswers": [
                        "や",
                        "ヤ"
                    ],
                    "explanation": "代表列挙の並立助詞は「や」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u4-l1": {
        "id": "ja-u4-l1",
        "subject": "japanese",
        "unit": 4,
        "lessonNumber": 1,
        "title": "動詞の三分類と基本活用 (Verb Groups 1, 2, 3)",
        "level": "A1",
        "objective": "五段動詞（一類）、一段動詞（二類）、不規則動詞（三類：する・来る）の識別と丁寧形「〜ます」の活用。",
        "presentation": {
            "explanation": "日本語の動詞は、活用語尾の変化パターンによって三つのグループに分類されます。\n\n【動詞の三大分類】\n１．一類動詞（五段動詞）：語尾が「u段」で終わり、ます形接続時に「i段」に変化（書く→書きます、飲む→飲みます）。\n２．二類動詞（一段動詞）：辞書形が「〜いる/〜える」で終わり、「る」を取って「ます」を接続（食べる→食べます、見る→見ます）。\n３．三類動詞（不規則動詞）：する→「します」、来る→「来ます（きます）」。",
            "examples": [
                {
                    "target": "毎朝七時に起きて、温かい緑茶を飲みます。",
                    "reading": "まいあさ ななじに おきて、あたたかい りょくちゃを のみます。",
                    "translation": "I wake up at 7:00 every morning and drink warm green tea."
                },
                {
                    "target": "図書館で日本語の文法と語彙を熱心に勉強します。",
                    "reading": "としょかんで にほんごの ぶんぽうと ごいを ねっしんに べんきょうします。",
                    "translation": "I study Japanese grammar and vocabulary diligently at the library."
                },
                {
                    "target": "田中さんは毎日新聞を読みますか。— いいえ、新聞は読みません。ネットニュースを見ます。",
                    "reading": "たなかさんは まいにち しんぶんを よみますか。— いいえ、しんぶんは よみません。ネットニュースを みます。",
                    "translation": "Do you read the newspaper every day, Mr. Tanaka? — No, I do not read newspapers. I watch online news."
                },
                {
                    "target": "留学生の皆さんは明日、京都の伝統工芸センターへ来ます。",
                    "reading": "りゅうがくせいの みなさんは あした、きょうとの でんとうこうげいセンターへ きます。",
                    "translation": "All international students will come to the Kyoto Traditional Crafts Center tomorrow."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【動詞のグループ分類】「書く（かく）」「食べる（たべる）」「する」「来る（くる）」の動詞グループ分類として正しい組み合わせはどれですか。",
                    "options": [
                        "書く：一類（五段） / 食べる：二類（一段） / する・来る：三類（不規則）",
                        "書く：二類 / 食べる：一類 / する・来る：三類",
                        "すべて一類動詞",
                        "書く：三類 / 食べる：二類 / する・来る：一類"
                    ],
                    "answerIndex": 0,
                    "explanation": "「書く」は五段活用（一類）、「食べる」は一段活用（二類）、「する」「来る」は不規則動詞（三類）です。"
                },
                {
                    "prompt": "【ます形の活用】動詞「飲む（のむ）」と「見る（みる）」を丁寧形「〜ます」に活用させた正しい形を選択してください。",
                    "options": [
                        "飲みます（一類：u→i段＋ます） / 見ます（二類：る脱落＋ます）",
                        "飲みます / 見ります",
                        "飲めます / 見ます",
                        "飲るます / 見ます"
                    ],
                    "answerIndex": 0,
                    "explanation": "一類動詞「飲む」は語尾をi段に変えて「飲みます」、二類動詞「見る」は語尾の「る」を取って「見ます」となります。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【日課の動作】毎朝緑茶を飲む習慣を丁寧に述べる文を選択してください。",
                    "options": [
                        "毎朝七時に起きて、温かい緑茶を飲みます。",
                        "毎朝七時に起きて、温かい緑茶を飲みるです。",
                        "毎朝七時に起きて、温かい緑茶を飲ます。",
                        "毎朝七時に起きて、温かい緑茶を食べます。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「起きて（て形接続）」「飲みます（丁寧形）」の文法接続が正確です。"
                },
                {
                    "prompt": "【否定応答】「毎日新聞を読みますか。」に対する自然な否定の返答を選択してください。",
                    "options": [
                        "いいえ、新聞は読みません。ネットニュースを見ます。",
                        "いいえ、新聞は読みます。ネットニュースを飲みます。",
                        "いいえ、新聞は読まないでした。ネットニュースを行きます。",
                        "いいえ、新聞は読めませんです。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「読みません（ます形の否定）」と「見ます」の組み合わせが自然です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "動詞「来る（くる）」の丁寧形「〜ます」の正しい発音と表記はどれですか。",
                    "options": [
                        "来ます（きます）",
                        "来ます（くます）",
                        "来ます（こます）",
                        "来ります（きります）"
                    ],
                    "answerIndex": 0,
                    "explanation": "三類動詞「来る（くる）」のます形は「来ます（きます）」と読みます。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "動詞「話す（はなす）」の丁寧形（ます形）を入力してください（ひらがな五文字）:",
                    "acceptedAnswers": [
                        "はなします",
                        "ハナシマス",
                        "話します"
                    ],
                    "explanation": "「話す」のます形は「話します（はなします）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u4-l2": {
        "id": "ja-u4-l2",
        "subject": "japanese",
        "unit": 4,
        "lessonNumber": 2,
        "title": "目的語の格助詞「を」と他動詞 (Direct Object WO)",
        "level": "A1",
        "objective": "他動詞の直接目的語を明示する格助詞「を」の文法機能と動作動詞の共起関係。",
        "presentation": {
            "explanation": "他動詞が表す動作や行為の直接的な対象（直接目的語）を指示する際、格助詞「を」を用います。\n\n【助詞「を」の表記と発音】\n文字表記は五十音図の「を」を使用し、実際の発音は母音「お」と同一になります。\n\n【「名詞 ＋ を ＋ 他動詞」の典型パターン】\nご飯を食べる、お茶を飲む、本を読む、音楽を聞く、日本語を勉強する、テレビを見る、写真を撮る。",
            "examples": [
                {
                    "target": "毎朝カフェで美味しいコーヒーを飲みながら、経済新聞を読みます。",
                    "reading": "まいあさ カフェで おいしい コーヒーを のみながら、けいざいしんぶんを よみます。",
                    "translation": "Every morning at the cafe, I read the economic newspaper while drinking delicious coffee."
                },
                {
                    "target": "週末に友達と一緒に日本のアニメ映画を見ました。",
                    "reading": "しゅうまつに ともだちと いっしょに にほんの アニメえいがを みました。",
                    "translation": "Over the weekend, I watched a Japanese anime film together with my friend."
                },
                {
                    "target": "桜の木の前で記念写真を撮りましょう。",
                    "reading": "さくらの きの まえで きねんしゃしんを とりましょう。",
                    "translation": "Let us take a commemorative photo in front of the cherry tree."
                },
                {
                    "target": "大学で国際関係論とアジア経済を専攻して勉強しています。",
                    "reading": "だいがくで こくさいかんけいろんと アジアけいざいを せんこうして べんきょうしています。",
                    "translation": "At university, I major in and study international relations and Asian economy."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【格助詞「を」の役割】「直接目的語」を示す助詞「を」の正しい使用例はどれですか。",
                    "options": [
                        "毎朝コーヒー【を】飲みます。（飲む対象を指定）",
                        "毎朝コーヒー【に】飲みます。",
                        "毎朝コーヒー【で】飲みます。",
                        "毎朝コーヒー【へ】飲みます。"
                    ],
                    "answerIndex": 0,
                    "explanation": "動作の対象（直接目的語）には格助詞「を」を用います。"
                },
                {
                    "prompt": "【「写真を撮る」のコロケーション】「記念写真＿＿＿撮りましょう。」の空欄に入る助詞はどれですか。",
                    "options": [
                        "を（写真を撮る）",
                        "が",
                        "に",
                        "で"
                    ],
                    "answerIndex": 0,
                    "explanation": "「写真を撮る」の目的語には助詞「を」を用います。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【週末の映画鑑賞】週末に友達と日本のアニメ映画を見たことを伝える文を選択してください。",
                    "options": [
                        "週末に友達と一緒に日本のアニメ映画を見ました。",
                        "週末に友達と一緒に日本のアニメ映画を聞きました。",
                        "週末に友達と一緒に日本のアニメ映画を食べました。",
                        "週末に友達と一緒に日本のアニメ映画に行きました。"
                    ],
                    "answerIndex": 0,
                    "explanation": "映画を視覚的に鑑賞する動詞は「見る（見ました）」です。"
                },
                {
                    "prompt": "【専攻分野の説明】大学で経済を専攻して勉強していることを説明する文を選択してください。",
                    "options": [
                        "大学で国際関係論とアジア経済を専攻して勉強しています。",
                        "大学で国際関係論とアジア経済が専攻して勉強しています。",
                        "大学で国際関係論とアジア経済へ専攻して勉強しています。",
                        "大学で国際関係論とアジア経済に専攻して勉強しています。"
                    ],
                    "answerIndex": 0,
                    "explanation": "学習する対象を示すため目的語の助詞「を」を用います。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "格助詞「を」の正しい文字表記と発音の組み合わせはどれですか。",
                    "options": [
                        "表記は「を」、発音は「お」",
                        "表記は「お」、発音は「を」",
                        "表記は「お」、発音は「う」",
                        "表記は「を」、発音は「わ」"
                    ],
                    "answerIndex": 0,
                    "explanation": "目的語の助詞は仮名「を」と書き、現代日本語では「お」と発音します。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "他動詞の直接目的語を表す助詞を入力してください（ひらがな一文字）:",
                    "acceptedAnswers": [
                        "を",
                        "ヲ"
                    ],
                    "explanation": "目的語の格助詞は「を」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u4-l3": {
        "id": "ja-u4-l3",
        "subject": "japanese",
        "unit": 4,
        "lessonNumber": 3,
        "title": "動作の場所・手段の格助詞「で」 (Location & Means DE)",
        "level": "A1",
        "objective": "動作が行われる活動場所を示す助詞「で」と、道具・手段・交通機関を示す「で」の機能習得。",
        "presentation": {
            "explanation": "格助詞「で」は、動作の発生する場所や、行為を実現するための手段・道具・交通機関・言語などを指定します。\n\n【助詞「で」の二大機能】\n１．動作・行為の発生場所：「〜で 動作動詞」（例：図書館で勉強する、レストランで食べる）。\n   ※静止した存在場所を表す「に」と、活動の場所を表す「で」を区別します。\n２．手段・道具・交通・言語：「〜で」（例：電車で行く、箸で食べる、日本語で話す、ペンで書く）。",
            "examples": [
                {
                    "target": "大学の図書館で友達と一緒に日本語のレポートを書きます。",
                    "reading": "だいがくの としょかんで ともだちと いっしょに にほんごの レポートを かきます。",
                    "translation": "I write a Japanese report together with my friend in the university library."
                },
                {
                    "target": "毎朝、地下鉄で会社へ通っています。",
                    "reading": "まいあさ、ちかてつで かいしゃへ かよっています。",
                    "translation": "Every morning, I commute to the office by subway."
                },
                {
                    "target": "日本の伝統的な料理は箸で美しくいただきます。",
                    "reading": "にほんの でんとうてきな りょうりは はしで うつくしく いただきます。",
                    "translation": "Traditional Japanese cuisine is eaten gracefully with chopsticks."
                },
                {
                    "target": "この質問は日本語で答えてください。",
                    "reading": "このしつもんは にほんごで こたえて ください。",
                    "translation": "Please answer this question in Japanese."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【「で」の二大用法】「図書館で勉強する（場所）」と「地下鉄で行く（手段）」における助詞「で」の機能の正しい解釈はどれですか。",
                    "options": [
                        "前者は「動作が行われる活動場所」、後者は「移動の交通手段」を示している。",
                        "前者が時間で後者が場所である。",
                        "両方とも目的語を示している。",
                        "前者が手段で後者が場所である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「図書館で」は動作発生の場所、「地下鉄で」は移動の交通手段を表します。"
                },
                {
                    "prompt": "【道具・言語の「で」】「箸＿＿＿食べます」「日本語＿＿＿話します」に入る助詞はどれですか。",
                    "options": [
                        "で（道具・言語の手段を表す）",
                        "に",
                        "を",
                        "へ"
                    ],
                    "answerIndex": 0,
                    "explanation": "道具（箸）や使用言語（日本語）を表す手段の格助詞は「で」です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【通勤手段の説明】毎朝地下鉄を使って通勤していることを述べる文を選択してください。",
                    "options": [
                        "毎朝、地下鉄で会社へ通っています。",
                        "毎朝、地下鉄を会社へ通っています。",
                        "毎朝、地下鉄に会社へ通っています。",
                        "毎朝、地下鉄へ会社へ通っています。"
                    ],
                    "answerIndex": 0,
                    "explanation": "交通手段を示す格助詞は「で」を用います。"
                },
                {
                    "prompt": "【指示と回答】日本語を使って回答するよう求める丁寧な指示文を選択してください。",
                    "options": [
                        "この質問は日本語で答えてください。",
                        "この質問は日本語を答えてください。",
                        "この質問は日本語に答えてください。",
                        "この質問は日本語へ答えてください。"
                    ],
                    "answerIndex": 0,
                    "explanation": "使用言語を指定する助詞は「で（日本語で）」です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「場所＋に」と「場所＋で」の使い分けとして正しい記述はどれですか。",
                    "options": [
                        "「に」は静止した存在場所（〜にいる/ある）、「で」は動作・行為の発生場所（〜で食べる/勉強する）に用いる。",
                        "「に」が動作で「で」が存在である。",
                        "両者に使い分けのルールはなく常に交換可能である。",
                        "「で」は時間にしか使えない。"
                    ],
                    "answerIndex": 0,
                    "explanation": "存在場所は「に（机の上にある）」、活動・動作の場所は「で（図書館で勉強する）」と厳格に使い分けます。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "動作の場所や手段を表す格助詞を入力してください（ひらがな一文字）:",
                    "acceptedAnswers": [
                        "で",
                        "デ"
                    ],
                    "explanation": "動作場所・手段の助詞は「で」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u4-l4": {
        "id": "ja-u4-l4",
        "subject": "japanese",
        "unit": 4,
        "lessonNumber": 4,
        "title": "移動の方向・目的地の助詞「へ」「に」 (Directional Particles HE & NI)",
        "level": "A1",
        "objective": "移動動詞（行きます・来ます・帰ります）と移動の方向を示す助詞「へ」「に」の文法規則。",
        "presentation": {
            "explanation": "空間的な移動を表す動詞（移動動詞）とともに用いられる助詞「へ」と「に」の機能を学習します。\n\n【主要な移動動詞】\n行きます（いきます）、来ます（きます）、帰ります（かえります / 自分の本拠地・家に戻る）。\n\n【方向の助詞「へ」と目的地の助詞「に」】\n１．助詞「へ」：向かう方向（ベクトルの向き）を強調します。表記は「へ」、発音は「え」となります。\n２．助詞「に」：移動の到達地点（ゴール）を強調します。\n３．移動の目的構文：「場所 ＋ へ/に ＋ 動詞ます語幹 ＋ に ＋ 行く/来る」（例：本を買いに行く）。",
            "examples": [
                {
                    "target": "来週の月曜日に新幹線で京都へ行きます。",
                    "reading": "らいしゅうの げつようびに しんかんせんで きょうとへ いきます。",
                    "translation": "Next Monday, I will go to Kyoto by Shinkansen."
                },
                {
                    "target": "夕方六時に仕事を終えて家へ帰ります。",
                    "reading": "ゆうがた ろくじに しごとを おえて うちへ かえります。",
                    "translation": "I finish work at 6:00 in the evening and return home."
                },
                {
                    "target": "デパートへ新しい春の服を買いに行きます。",
                    "reading": "デパートへ あたらしい はるのふくを かいに いきます。",
                    "translation": "I am going to the department store to buy new spring clothes."
                },
                {
                    "target": "留学生が日本へ日本語の勉強に来ました。",
                    "reading": "りゅうがくせいが にほんへ にほんごの べんきょうに きました。",
                    "translation": "The international students came to Japan to study Japanese."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【移動動詞の方向助詞】「京都＿＿＿行きます。」の空欄に入る方向・目的地を表す助詞として正しいものはどれですか。",
                    "options": [
                        "へ（または に）",
                        "で",
                        "を",
                        "から"
                    ],
                    "answerIndex": 0,
                    "explanation": "移動の方向や目的地には助詞「へ（発音は え）」または「に」を用います。"
                },
                {
                    "prompt": "【移動目的の構文】「買い物に行く」という目的を表す正しい構文はどれですか。",
                    "options": [
                        "服を【買いに】行きます（動詞ます語幹＋に＋行く）",
                        "服を【買うに】行きます",
                        "服を【買いで】行きます",
                        "服を【買いて】行きます"
                    ],
                    "answerIndex": 0,
                    "explanation": "移動の目的は「動詞ます語幹 ＋ に ＋ 行く/来る/帰る」で表します（買いに行きます）。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【帰宅の表現】仕事を終えて自宅へ戻ることを述べる文を選択してください。",
                    "options": [
                        "夕方六時に仕事を終えて家へ帰ります。",
                        "夕方六時に仕事を終えて家へ行きます。",
                        "夕方六時に仕事を終えて家へ来ます。",
                        "夕方六時に仕事を終えて家を帰ります。"
                    ],
                    "answerIndex": 0,
                    "explanation": "自分の本拠地や家庭に戻る動作には動詞「帰る（帰ります）」を用います。"
                },
                {
                    "prompt": "【留学の目的】日本語を勉強するために来日したことを述べる文を選択してください。",
                    "options": [
                        "留学生が日本へ日本語の勉強に来ました。",
                        "留学生が日本で日本語の勉強を行きました。",
                        "留学生が日本を日本語の勉強に帰りました。",
                        "留学生が日本から日本語の勉強をしました。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「日本へ（目的地）勉強に（目的）来ました（移動動詞）」の構成が正確です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "方向を示す助詞「へ」の表記と発音についての正しい説明はどれですか。",
                    "options": [
                        "文字は「へ」と書き、発音は「え」となる。",
                        "文字は「え」と書き、発音は「へ」となる。",
                        "文字も発音も常に「へ」である。",
                        "文字も発音も常に「は」である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "方向の助詞は歴史的仮名遣いの名残で「へ」と表記し、「え」と発音します。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "方向を表す助詞の仮名表記を入力してください（ひらがな一文字）:",
                    "acceptedAnswers": [
                        "へ",
                        "ヘ"
                    ],
                    "explanation": "方向の助詞は「へ」と書きます。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u4-l5": {
        "id": "ja-u4-l5",
        "subject": "japanese",
        "unit": 4,
        "lessonNumber": 5,
        "title": "勧誘表現「〜ましょうか」「〜ませんか」 (Invitations & Suggestions)",
        "level": "A1",
        "objective": "相手を丁寧に誘う「〜ませんか」と、提案や手助けの申し出を行う「〜ましょう / 〜ましょうか」の使い分け。",
        "presentation": {
            "explanation": "日常対話において他者を活動に誘ったり、自発的な協力を申し出たりする際の重要表現を学びます。\n\n【勧誘・提案表現の体系】\n１．「動詞ます語幹 ＋ ませんか」（丁寧な勧誘）：相手の意向を尊重した最も礼儀正しい勧誘表現です（例：「一緒に お茶を 飲みませんか」）。\n２．「動詞ます語幹 ＋ ましょう」（積極的な提案）：相手の同意を前提とした呼びかけです（例：「そろそろ 出発しましょう」）。\n３．「動詞ます語幹 ＋ ましょうか」（手助けの申し出・相談）：自発的な協力を申し出る表現です（例：「荷物を お持ちしましょうか」）。",
            "examples": [
                {
                    "target": "今日の放課後、一緒に駅前のカフェでお茶を飲みませんか。— ええ、喜んで！",
                    "reading": "きょうの ほうかご、いっしょに えきまえの カフェでおちゃを のみませんか。— ええ、よろこんで！",
                    "translation": "Won't you have tea with me at the cafe in front of the station after school today? — Yes, with pleasure!"
                },
                {
                    "target": "時間になりましたので、午後の全体会議を始めましょう。",
                    "reading": "じかんになりましたので、ごごの ぜんたいかいぎを はじめましょう。",
                    "translation": "Since it is time, let us begin the afternoon plenary meeting."
                },
                {
                    "target": "荷物が重そうですね。駅まで車でお送りしましょうか。",
                    "reading": "にもつが おもそうですね。えきまで くるまで おおくりしましょうか。",
                    "translation": "Your luggage looks heavy. Shall I drive you to the station?"
                },
                {
                    "target": "少し疲労が溜まりましたね。十分間ほど休憩しましょうか。",
                    "reading": "すこし ひろうが たまりましたね。じゅっぷんかんほど きゅうけいしましょうか。",
                    "translation": "Fatigue has accumulated a bit. Shall we take a break for about ten minutes?"
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【勧誘と提案の使い分け】相手の意向を尊重して丁寧に誘う表現として最も適切なものはどれですか。",
                    "options": [
                        "一緒にカフェでお茶を飲みませんか。（相手に断る余地を残す丁寧な勧誘）",
                        "一緒にカフェでお茶を飲め。",
                        "一緒にカフェでお茶を飲まなければならない。",
                        "一緒にカフェでお茶を飲んだ。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜ませんか」は相手の意思を尊重して誘う丁寧な勧誘表現です。"
                },
                {
                    "prompt": "【手助けの申し出】重い荷物を持っている人に対して手助けを申し出る表現はどれですか。",
                    "options": [
                        "荷物をお持ちしましょうか。（Shall I help you carry your luggage?）",
                        "荷物を持ちなさい。",
                        "荷物を持ちますか。",
                        "荷物を持ってください。"
                    ],
                    "answerIndex": 0,
                    "explanation": "自分が相手のために手助けを申し出る際は「〜ましょうか」を用います。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【会議開始の呼びかけ】時間になったので参加者に開始を呼びかける文を選択してください。",
                    "options": [
                        "時間になりましたので、午後の全体会議を始めましょう。",
                        "時間になりましたので、午後の全体会議を始めませんかでした。",
                        "時間になりましたので、午後の全体会議を始めたいです。",
                        "時間になりましたので、午後の全体会議を始めません。"
                    ],
                    "answerIndex": 0,
                    "explanation": "全員で行動を開始することを積極的に提案する呼びかけは「〜ましょう」です。"
                },
                {
                    "prompt": "【休憩の相談】同僚に10分ほどの休憩を提案・相談する文を選択してください。",
                    "options": [
                        "少し疲れましたね。十分間ほど休憩しましょうか。",
                        "少し疲れましたね。十分間ほど休憩してくださいか。",
                        "少し疲れましたね。十分間ほど休憩するべきです。",
                        "少し疲れましたね。十分間ほど休憩した。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜しましょうか」で相手と相談しながら提案を行うことができます。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「〜ませんか」で誘われた際、快諾する自然な日本語の返答はどれですか。",
                    "options": [
                        "「ええ、喜んで！」 / 「いいですね、ぜひ行きましょう！」",
                        "「いいえ、行きます。」",
                        "「そうです、飲みます。」",
                        "「ごちそうさまでした。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "勧誘を快諾する際は「ええ、喜んで」「いいですね、ぜひ行きましょう」と答えます。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "相手を丁寧に誘う勧誘の助動詞表現を入力してください（ひらがな四文字）:",
                    "acceptedAnswers": [
                        "ませんか",
                        "マセンカ"
                    ],
                    "explanation": "丁寧な勧誘は「〜ませんか」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u5-l1": {
        "id": "ja-u5-l1",
        "subject": "japanese",
        "unit": 5,
        "lessonNumber": 1,
        "title": "動詞のて形活用規則と音便変化 (Te-form Rules & Onbin)",
        "level": "A1",
        "objective": "動詞のて形（一類の促音便・イ音便・撥音便、二類、三類動詞）の体系的活用規則の習得。",
        "presentation": {
            "explanation": "動詞の「て形」は、日本語文法において動作の連結、進行、依頼、許可、禁止などを形成する中核的な接続形です。\n\n【動詞グループ別のて形活用規則】\n１．一類動詞（五段動詞）の音便変化：\n・う・つ・る → 「〜って」（促音便：買う→買って、待つ→待って、取る→取って）\n・む・ぶ・ぬ → 「〜んで」（撥音便：飲む→飲んで、遊ぶ→遊んで）\n・く → 「〜いて」（イ音便：書く→書いて）※例外：「行く」は「行って」\n・ぐ → 「〜いで」（イ音便濁音：泳ぐ→泳いで）\n・す → 「〜して」（話す→話して）\n２．二類動詞（一段動詞）：「る」を取り「て」付加（食べる→食べて、見る→見て）。\n３．三類動詞：する→「して」、来る→「来て（きて）」。",
            "examples": [
                {
                    "target": "毎朝七時に起きて、顔を洗って、朝ご飯を食べます。",
                    "reading": "まいあさ ななじに おきて、かおを あらって、あさごはんを たべます。",
                    "translation": "I wake up at 7:00 every morning, wash my face, and eat breakfast."
                },
                {
                    "target": "図書館へ行って、日本語の専門書を借りて帰りました。",
                    "reading": "としょかんへ いって、にほんごの せんもんしょを かりて かえりました。",
                    "translation": "I went to the library, borrowed Japanese academic books, and returned home."
                },
                {
                    "target": "カフェで温かいコーヒーを飲んで、友達と楽しく話しました。",
                    "reading": "カフェで あたたかい コーヒーを のんで、ともだちと たのしく はなしました。",
                    "translation": "I drank warm coffee at the cafe and talked happily with my friend."
                },
                {
                    "target": "辞書を引いて、新しい漢字の読み方と意味を調べます。",
                    "reading": "じしょを ひいて、あたらしい かんじの よみかたと いみを しらべます。",
                    "translation": "I consult the dictionary and look up the reading and meaning of new kanji."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【て形音便の規則】「買う（かう）」「待つ（まつ）」「飲む（のむ）」「書く（かく）」の正しい「て形」の組み合わせを選択してください。",
                    "options": [
                        "買って（促音便） / 待って（促音便） / 飲んで（撥音便） / 書いて（イ音便）",
                        "買いて / 待ちて / 飲みて / 書きて",
                        "買いて / 待って / 飲みて / 書いて",
                        "買って / 待んで / 飲んで / 書いて"
                    ],
                    "answerIndex": 0,
                    "explanation": "う・つ・るは「〜って」、む・ぶ・ぬは「〜んで」、くは「〜いて」と音便変化します。"
                },
                {
                    "prompt": "【「行く」の例外活用】動詞「行く（いく）」の正しい「て形」はどれですか。",
                    "options": [
                        "行って（いって / 例外的に促音便をとる）",
                        "行いて（いいて）",
                        "行んで（いんで）",
                        "行きて（いきて）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「行く」は「く」で終わりますがイ音便にはならず、例外的に「行って（促音便）」となります。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【朝の日課の連続動作】朝の動作を時間順に繋げて述べる自然な文を選択してください。",
                    "options": [
                        "毎朝七時に起きて、顔を洗って、朝ご飯を食べます。",
                        "毎朝七時に起きますて、顔を洗いて、朝ご飯を食べます。",
                        "毎朝七時に起きるて、顔を洗うて、朝ご飯を食べます。",
                        "毎朝七時に起きて、顔を洗って、朝ご飯を飲みます。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「起きて（二類）」「洗って（一類）」とて形で動作をスムーズに接続します。"
                },
                {
                    "prompt": "【図書館での動作連結】図書館に行って本を借りて帰ったことを述べる過去形の文を選択してください。",
                    "options": [
                        "図書館へ行って、日本語の専門書を借りて帰りました。",
                        "図書館へ行きて、日本語の専門書を借って帰りました。",
                        "図書館へ行いて、日本語の専門書を借りて帰りますでした。",
                        "図書館へ行って、日本語の専門書を借りる帰りました。"
                    ],
                    "answerIndex": 0,
                    "explanation": "文末の「帰りました」によって全体の過去時制が決定されます。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "動詞「話す（はなす）」と「泳ぐ（およぐ）」の正しい「て形」はどれですか。",
                    "options": [
                        "話して / 泳いで（濁音のイ音便）",
                        "話して / 泳いて",
                        "話しって / 泳いで",
                        "話して / 泳んで"
                    ],
                    "answerIndex": 0,
                    "explanation": "すは「〜して」、ぐは濁音のイ音便「〜いで」となります。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "動詞「待つ（まつ）」のて形を入力してください（ひらがな三文字）:",
                    "acceptedAnswers": [
                        "まって",
                        "マッテ"
                    ],
                    "explanation": "「待つ」のて形は促音便で「まって」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u5-l2": {
        "id": "ja-u5-l2",
        "subject": "japanese",
        "unit": 5,
        "lessonNumber": 2,
        "title": "動作の連続継起「〜て、〜て」と「〜てから」 (Sequential Actions & TE KARA)",
        "level": "A1",
        "objective": "て形による時間的順序に沿った複数動作の接続と完了後の移行を表す「〜てから」の習得。",
        "presentation": {
            "explanation": "複数の動作が時間的順序に従って連続して発生する事態を表現する文法構文を学びます。\n\n【動作の連続継起構文】\n１．「動詞て形、動詞て形、動詞述語」：一連の動作を時間順に列挙します（例：「起きて、朝食を食べて、学校へ行く」）。時制は最後の動詞で決まります。\n２．「動詞て形 ＋ から」（〜した後に）：前の動作が完全に完了した後に、次の動作へ移行することを明示的に強調します（例：「手を洗ってから、ご飯を食べる」）。",
            "examples": [
                {
                    "target": "毎晩、宿題を終わらせてから、ゆっくりお風呂に入ります。",
                    "reading": "まいばん、しゅくだいを おわらせてから、ゆっくり おふろに はいります。",
                    "translation": "Every night, after finishing my homework, I take a relaxing bath."
                },
                {
                    "target": "駅に着いてから、電話で田中さんに連絡いたします。",
                    "reading": "えきに ついてから、でんわで たなかさんに れんらくいたします。",
                    "translation": "After arriving at the station, I will contact Mr. Tanaka by phone."
                },
                {
                    "target": "休日は朝早く起きて、近くの公園をジョギングして、それから朝食を作ります。",
                    "reading": "きゅうじつは あさはやく おきて、ちかくの こうえんを ジョギングして、それから ちょうしょくを つくります。",
                    "translation": "On days off, I wake up early, jog in the nearby park, and then prepare breakfast."
                },
                {
                    "target": "十分によく説明書を読んでから、機械の操作を始めてください。",
                    "reading": "じゅうぶんに よく せつめいしょを よんでから、きかいの そうさを はじめて ください。",
                    "translation": "Please begin operating the machine after reading the instruction manual thoroughly."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【「〜てから」の文法機能】「宿題を終わらせてから、お風呂に入ります」における「〜てから」の意味機能は何ですか。",
                    "options": [
                        "前件の動作が完了した後に、後件の動作を行う時間的順序を強調している。",
                        "宿題とお風呂を同時に並行して行うことを示している。",
                        "宿題をする理由を説明している。",
                        "お風呂に入らないことを示している。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「動詞て形＋から」は「〜した後に（after doing）」という先行動作の完了を表します。"
                },
                {
                    "prompt": "【安全指示の構文】機械操作の前に説明書を読むことを指示する文として適切なものはどれですか。",
                    "options": [
                        "十分によく説明書を【読んでから】、操作を始めてください。",
                        "十分によく説明書を【読むから】、操作を始めてください。",
                        "十分によく説明書を【読んだから】、操作を始めてください。",
                        "十分によく説明書を【読みに】、操作を始めてください。"
                    ],
                    "answerIndex": 0,
                    "explanation": "動作の完了後の移行を示すため「読んでから」を用います。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【到着後の連絡】駅に到着した後に電話で連絡することを丁寧に伝える文を選択してください。",
                    "options": [
                        "駅に着いてから、電話で田中さんに連絡いたします。",
                        "駅に着くから、電話で田中さんに連絡いたします。",
                        "駅に着いたから、電話で田中さんに連絡いたします。",
                        "駅に着きながら、電話で田中さんに連絡いたします。"
                    ],
                    "answerIndex": 0,
                    "explanation": "到着が完了した後の連絡であることを「着いてから」で明示します。"
                },
                {
                    "prompt": "【休日ルーティンの描写】朝の一連の活動を順序立てて説明する文を選択してください。",
                    "options": [
                        "休日は朝早く起きて、近くの公園をジョギングして、それから朝食を作ります。",
                        "休日は朝早く起きると、近くの公園をジョギングするから、朝食を作ります。",
                        "休日は朝早く起きる前、近くの公園をジョギングして、朝食を作りました。",
                        "休日は朝早く起きながら、ジョギングして、朝食を作ります。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「起きて」「ジョギングして」「それから作ります」と時間順の推移が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「て形」で複数の動作を繋ぐ文において、文全体の「過去・現在」などの時制はどこで決定されますか。",
                    "options": [
                        "文末の最後の動詞述語の形によって決定される。",
                        "文頭の最初の動詞の形によって決定される。",
                        "すべての動詞を過去形にする必要がある。",
                        "文中の副詞だけで決まり動詞は関係ない。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜て、〜て、〜ました」のように、文全体の時制は文末の述語動詞で示されます。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "「〜した後に」を表す接続表現「て」に続く助詞を入力してください（ひらがな二文字）:",
                    "acceptedAnswers": [
                        "から",
                        "カラ"
                    ],
                    "explanation": "「〜てから」の助詞は「から」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u5-l3": {
        "id": "ja-u5-l3",
        "subject": "japanese",
        "unit": 5,
        "lessonNumber": 3,
        "title": "現在進行・状態の継続「〜ています」 (Continuous Actions & States)",
        "level": "A1",
        "objective": "動作の進行中（be -ing）と、動作完了後の結果状態の残存（居住・結婚・所有・知得）を表す「〜ています」の習得。",
        "presentation": {
            "explanation": "「動詞て形 ＋ います」は、動詞の性質に応じて二つの異なるアスペクトを表します。\n\n【「〜ています」の二大機能】\n１．動作の進行中（進行相）：継続動詞に接続し、現時点で動作が継続していることを示します（例：「今、日本語を 勉強しています」）。\n２．結果状態の継続（結果相）：瞬間動詞に接続し、変化が発生した後の結果の状態が現在も残存していることを示します（例：東京に住んでいる、結婚している、メガネをかけている、知っている）。",
            "examples": [
                {
                    "target": "山田さんは今、会議室で重要なプレゼンテーションを行っています。",
                    "reading": "やまださんは いま、かいぎしつで じゅうような プレゼンテーションを おこなっています。",
                    "translation": "Mr. Yamada is currently conducting an important presentation in the conference room."
                },
                {
                    "target": "私は現在、京都の静かな町に住んでいます。",
                    "reading": "わたしは げんざい、きょうとの しずかな まちに すんでいます。",
                    "translation": "I currently live in a quiet town in Kyoto."
                },
                {
                    "target": "佐藤さんの電話番号を知っていますか。— いいえ、知りません。",
                    "reading": "さとうさんの でんわばんごうを しっていますか。— いいえ、しりません。",
                    "translation": "Do you know Mr. Sato's phone number? — No, I do not know it."
                },
                {
                    "target": "田中先生は黒いスーツを着て、眼鏡をかけています。",
                    "reading": "たなかせんせいは くろい スーツを きて、めがねを かけています。",
                    "translation": "Teacher Tanaka is wearing a black suit and glasses."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【進行相 vs 結果相】「勉強しています（進行）」と「結婚しています（結果状態）」における「〜ています」の性質の違いとして正しいものはどれですか。",
                    "options": [
                        "前者は今まさに動作が行われている進行中、後者は変化完了後の状態が継続していることを表す。",
                        "前者が状態の継続で後者が動作の進行中である。",
                        "両方とも未来の予定を表している。",
                        "文法的な違いは存在しない。"
                    ],
                    "answerIndex": 0,
                    "explanation": "継続動詞（勉強する）では動作の進行中、瞬間動詞（結婚する・住む）では結果状態の継続を表します。"
                },
                {
                    "prompt": "【「知っています」の否定形】「佐藤さんの電話番号を知っていますか。」に対する正しい否定の返答はどれですか。",
                    "options": [
                        "いいえ、知りません。（「知っていません」とは言わない）",
                        "いいえ、知っていません。",
                        "いいえ、知るではありません。",
                        "いいえ、知りませんでしたです。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「知っています」の否定は慣用的に「知りません」となります。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【現在進行中の動作】山田さんが今プレゼンテーションを行っている最中であることを述べる文を選択してください。",
                    "options": [
                        "山田さんは今、会議室で重要なプレゼンテーションを行っています。",
                        "山田さんは今、会議室で重要なプレゼンテーションを行いました。",
                        "山田さんは今、会議室で重要なプレゼンテーションを行いますでした。",
                        "山田さんは今、会議室で重要なプレゼンテーションを行いそうです。"
                    ],
                    "answerIndex": 0,
                    "explanation": "現時点で進行中の動作には「〜を行っています」を用います。"
                },
                {
                    "prompt": "【外見・身なりの描写】田中先生がスーツを着て眼鏡をかけている状態を説明する文を選択してください。",
                    "options": [
                        "田中先生は黒いスーツを着て、眼鏡をかけています。",
                        "田中先生は黒いスーツを着るで、眼鏡をかけます。",
                        "田中先生は黒いスーツを着てから、眼鏡をかけました。",
                        "田中先生は黒いスーツを着ながら、眼鏡をかけます。"
                    ],
                    "answerIndex": 0,
                    "explanation": "着衣や装飾品の着用状態の継続には「着ています」「かけています」を用います。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「京都に住んでいます」における「住んでいます」の文法機能は何ですか。",
                    "options": [
                        "京都に住むという状態が現在も継続していること（結果状態の継続）。",
                        "今まさに家を建てて引っ越している最中であること。",
                        "過去に住んでいたこと。",
                        "将来住む予定であること。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「住む」は結果状態を表し、「住んでいます」で居住状態の継続を示します。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "進行中や状態継続を表す構文「〜て＿＿＿」の動詞丁寧形を入力してください（ひらがな三文字）:",
                    "acceptedAnswers": [
                        "います",
                        "イマス",
                        "居ます"
                    ],
                    "explanation": "「〜ています」の動詞は「います」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u5-l4": {
        "id": "ja-u5-l4",
        "subject": "japanese",
        "unit": 5,
        "lessonNumber": 4,
        "title": "丁寧な指示・依頼「〜てください」 (Polite Requests TE KUDASAI)",
        "level": "A1",
        "objective": "「動詞て形 ＋ ください」を用いた標準的な丁寧依頼表現と、否定の依頼「〜ないでください」の習得。",
        "presentation": {
            "explanation": "他者に対して特定の行動や協力を求める際の依頼表現の基本構造を学びます。\n\n【依頼表現の体系】\n１．「動詞て形 ＋ ください」（丁寧な依頼・指示）：日常生活や店舗で最も広く使われる標準的な表現です（例：「ここに お名前を 書いてください」）。\n２．否定の依頼（配慮ある禁止）：「動詞ない形 ＋ でください」（例：「ここで 写真を 撮らないでください」）。\n３．改まったビジネス敬語依頼：「〜ていただけますでしょうか」。",
            "examples": [
                {
                    "target": "この申請用紙に氏名と現住所と電話番号を黒いペンで記入してください。",
                    "reading": "このしんせいようしに しめいと げんじゅうしょと でんわばんごうを くろいペンで きにゅうして ください。",
                    "translation": "Please fill in your name, current address, and phone number on this application form with a black pen."
                },
                {
                    "target": "少々お待ちください。ただいま担当者をお呼びいたします。",
                    "reading": "しょうしょう おまちください。ただいま たんとうしゃを およびいたします。",
                    "translation": "Please wait for a short moment. I will call the person in charge right away."
                },
                {
                    "target": "美術館の中ではフラッシュを使って写真を撮らないでください。",
                    "reading": "びじゅつかんの なかでは フラッシュを つかって しゃしんを とらないで ください。",
                    "translation": "Please do not take photos using flash inside the art museum."
                },
                {
                    "target": "本日の資料をメールで送付していただけますでしょうか。",
                    "reading": "ほんじつの しりょうを メールで そうふしていただけますでしょうか。",
                    "translation": "Could you please send today's documents by email?"
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【丁寧な依頼構文】書類への記入を丁寧に促す表現として最も適切なものはどれですか。",
                    "options": [
                        "この用紙に黒いペンで記入してください。（Please fill in）",
                        "この用紙に黒いペンで記入しなさい。",
                        "この用紙に黒いペンで記入するべきだ。",
                        "この用紙に黒いペンで記入してはいけない。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「動詞て形＋ください」は標準的な丁寧な指示・依頼の構文です。"
                },
                {
                    "prompt": "【否定の依頼（禁止の配慮表現）】美術館で写真撮影を控えるよう頼む表現はどれですか。",
                    "options": [
                        "フラッシュを使って写真を【撮らないでください】。（ない形＋でください）",
                        "フラッシュを使って写真を【撮らなくてください】。",
                        "フラッシュを使って写真を【撮るなください】。",
                        "フラッシュを使って写真を【撮りませんでください】。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜しないでほしい」という否定の依頼は「動詞ない形 ＋ でください」となります。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【来客対応の接客対話】来客に対して少々待つよう丁寧に案内する定番の表現を選択してください。",
                    "options": [
                        "少々お待ちください。ただいま担当者をお呼びいたします。",
                        "少々待ってください。担当者を呼びますよ。",
                        "少々待ちなさい。担当者が来ます。",
                        "少々待つことです。担当者を見ます。"
                    ],
                    "answerIndex": 0,
                    "explanation": "接客やビジネスでの定番依頼表現は「少々お待ちください」です。"
                },
                {
                    "prompt": "【改まったメールでの資料請求】ビジネスメール等で資料の送付を極めて丁寧に依頼する文を選択してください。",
                    "options": [
                        "本日の資料をメールで送付していただけますでしょうか。",
                        "本日の資料をメールで送付してくださいよ。",
                        "本日の資料をメールで送付しなさい。",
                        "本日の資料をメールで送付してくれ。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜していただけますでしょうか」は非常に丁寧で洗練された依頼表現です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「〜てください」を目上の人や上司に対して使う際の注意点として正しいものはどれですか。",
                    "options": [
                        "「〜てください」は指示・命令のニュアンスを含むため、目上の人には「〜ていただけますでしょうか」等を使うのが望ましい。",
                        "「〜てください」は最高位の敬語なので誰に対しても最も適切である。",
                        "目上の人には「〜なさい」を使う。",
                        "何を使っても違いはない。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜てください」は指示的響きを持つため、目上には「〜ていただけますでしょうか」等の敬語を用います。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "丁寧な依頼を表す「て」に続く語を入力してください（ひらがな四文字）:",
                    "acceptedAnswers": [
                        "ください",
                        "クダサイ",
                        "下さい"
                    ],
                    "explanation": "「〜てください」の語は「ください」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u5-l5": {
        "id": "ja-u5-l5",
        "subject": "japanese",
        "unit": 5,
        "lessonNumber": 5,
        "title": "許可「〜てもいいですか」と禁止「〜てはいけません」 (Permission & Prohibition)",
        "level": "A1",
        "objective": "行為の許可を求める「〜てもいいですか」と規範的禁止を表す「〜てはいけません」の習得。",
        "presentation": {
            "explanation": "ルールや対人対話において許可を求めたり禁止を伝えたりする文法構文を学びます。\n\n【許可と禁止の文法体系】\n１．許可を求める：「動詞て形 ＋ もいいですか」（例：「写真を撮ってもいいですか」）。\n   ・許可の返答：「ええ、いいですよ」「どうぞ」\n   ・不許可の返答：「すみません、ここは撮影禁止なんです」\n２．許可を与える：「動詞て形 ＋ もいいです」（例：「ここに座ってもいいです」）。\n３．強い禁止：「動詞て形 ＋ はいけません」（例：「ここでタバコを吸ってはいけません」）。",
            "examples": [
                {
                    "target": "すみません、この席に座ってもよろしいでしょうか。— ええ、どうぞ。",
                    "reading": "すみません、このせきに すわっても よろしいでしょうか。— ええ、どうぞ。",
                    "translation": "Excuse me, may I sit in this seat? — Yes, please go ahead."
                },
                {
                    "target": "図書館の中では大きな声で電話をしてはいけません。",
                    "reading": "としょかんの なかでは おおきなこえで でんわをしては いけません。",
                    "translation": "You must not talk on the phone in a loud voice inside the library."
                },
                {
                    "target": "ここで写真を撮ってもいいですか。— 申し訳ございませんが、撮影はご遠慮ください。",
                    "reading": "ここで しゃしんを とっても いいですか。— もうしわけございませんが、さつえいは ごえんりょください。",
                    "translation": "May I take photos here? — We are very sorry, but please refrain from photography."
                },
                {
                    "target": "美術館の展示作品に手を触れてはいけません。",
                    "reading": "びじゅつかんの てんじさくひんに てを ふれては いけません。",
                    "translation": "You must not touch the exhibited works in the art museum."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【許可を求める構文】他者の席に座ってよいか丁寧に尋ねる表現はどれですか。",
                    "options": [
                        "この席に座ってもよろしいでしょうか。（または 座ってもいいですか）",
                        "この席に座ってはいけません。",
                        "この席に座りましょう。",
                        "この席に座ってください。"
                    ],
                    "answerIndex": 0,
                    "explanation": "許可を求める表現は「動詞て形 ＋ もいいですか / もよろしいでしょうか」です。"
                },
                {
                    "prompt": "【規則・禁止の構文】公共の場での禁止事項を伝える「〜てはいけません」の正しい使用例はどれですか。",
                    "options": [
                        "図書館の中では大きな声で電話を【してはいけません】。",
                        "図書館の中では大きな声で電話を【してもいいです】。",
                        "図書館の中では大きな声で電話を【してください】。",
                        "図書館の中では大きな声で電話を【したいです】。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「動詞て形 ＋ はいけません」は規則やマナーに基づく強い禁止を表します。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【撮影許可と丁寧な断り】写真撮影の可否を尋ねられて、丁寧に断る対話を選択してください。",
                    "options": [
                        "「ここで写真を撮ってもいいですか。」「申し訳ございませんが、撮影はご遠慮ください。」",
                        "「ここで写真を撮ってもいいですか。」「はい、撮ってはいけません。」",
                        "「ここで写真を撮ってもいいですか。」「ええ、禁止です。」",
                        "「ここで写真を撮ってもいいですか。」「写真がありません。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "不許可を丁寧に伝える際は「申し訳ございませんが、〜はご遠慮ください」を用います。"
                },
                {
                    "prompt": "【展示作品への接触禁止】美術館の規則として作品に触れてはならないことを明示する文を選択してください。",
                    "options": [
                        "美術館の展示作品に手を触れてはいけません。",
                        "美術館の展示作品に手を触れてもいいです。",
                        "美術館の展示作品に手を触れてください。",
                        "美術館の展示作品に手を触れましょう。"
                    ],
                    "answerIndex": 0,
                    "explanation": "接触禁止を明確に示すため「触れてはいけません」を用います。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「〜てはいけません」の「は」の文字表記と発音についての正しい記述はどれですか。",
                    "options": [
                        "表記は「は」と書き、発音は「わ」となる（主題・取り立て助詞の「は」）。",
                        "表記も発音も常に「は」である。",
                        "表記は「わ」と書く。",
                        "表記は「ば」と書く。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜てはいけません」の「は」は係助詞なので「は」と書き、「わ」と発音します。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "禁止を表す構文「〜ては＿＿＿」の動詞丁寧形を入力してください（ひらがな五文字）:",
                    "acceptedAnswers": [
                        "いけません",
                        "イケマセン"
                    ],
                    "explanation": "「〜てはいけません」の語は「いけません」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u6-l1": {
        "id": "ja-u6-l1",
        "subject": "japanese",
        "unit": 6,
        "lessonNumber": 1,
        "title": "飲食店での注文と基本フレーズ（「〜をお願いします」）",
        "level": "A1",
        "objective": "飲食店での店員への呼びかけ、丁寧な注文構文「〜をお願いします」「〜をください」、助詞「と」「を」を用いた品目の指定。",
        "presentation": {
            "explanation": "日本の飲食店（レストラン・居酒屋・喫茶店）において、円滑に料理や飲み物を注文するための基本構文を学びます。\n\n【店員の呼び出しと基本構文】\n１．呼び出し：店員を呼ぶ際は、手を軽く挙げて「すみません」と明瞭に発声します。\n２．注文構文（名詞 ＋ を ＋ お願いします）：\n　・「お水（おみず）をお願いします」＝ Water, please.\n　・「メニューをお願いします」＝ Menu, please.\n３．「〜をください」との違い：\n　・「〜をお願いします」は相手への配慮を含んだ最も自然で丁寧な表現です。\n　・「〜をください」は直接的に物品を要求するニュアンスを持ちます。\n４．並列の助詞「と」と助詞「を」：\n　・複数の品目を並べる際は助詞「と」を使用します（「AとBをお願いします」）。",
            "examples": [
                {
                    "target": "すみません、温かいお茶とお冷をお願いします。",
                    "reading": "すみません、あたたかい おちゃと おひやを おねがいします。",
                    "translation": "Excuse me, warm tea and cold water, please."
                },
                {
                    "target": "おすすめの日替わりランチを一つお願いします。",
                    "reading": "おすすめの ひがわり ランチを ひとつ おねがいします。",
                    "translation": "One recommended daily special lunch, please."
                },
                {
                    "target": "注文が決まりましたので、オーダーをお願いします。",
                    "reading": "ちゅうもんが きまりましたので、オーダーを おねがいします。",
                    "translation": "We have decided on our order, so please take our order."
                },
                {
                    "target": "食後にホットコーヒーを二つ持ってきてください。",
                    "reading": "しょくごに ホットコーヒーを ふたつ もってきて ください。",
                    "translation": "Please bring two hot coffees after the meal."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【飲食店での注文表現】飲食店で料理を注文する際の最も丁寧で標準的な表現はどれですか。",
                    "options": [
                        "すみません、この特選海鮮丼を一つと温かいお茶をお願いします。",
                        "海鮮丼とお茶を寄こせ。",
                        "海鮮丼とお茶を食べたいです。",
                        "海鮮丼とお茶をあげます。"
                    ],
                    "answerIndex": 0,
                    "explanation": "注文する際は「［品名］を［数量］と、［品名］をお願いします」が最も丁寧で標準的です。"
                },
                {
                    "prompt": "【数詞（和語数詞）の活用】「1つ」「2つ」「3つ」の正しい和語の数え方を選択してください。",
                    "options": [
                        "ひとつ / ふたつ / みっつ",
                        "いちつ / につ / さんつ",
                        "いっこ / にこ / さんこ",
                        "ひとり / ふたり / さんにん"
                    ],
                    "answerIndex": 0,
                    "explanation": "料理や品物を数える基本の和語数詞は「ひとつ、ふたつ、みっつ」です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【味覚の感想】京都の抹茶パフェの甘さ控えめで美味しい味を表現する文を選択してください。",
                    "options": [
                        "この京都の伝統的な抹茶パフェは、甘さ控えめでとても美味しいです。",
                        "この抹茶パフェはとても辛くて塩辛いです。",
                        "この抹茶パフェは酸っぱくて苦いですが熱いです。",
                        "この抹茶パフェを食べに行きませんでした。"
                    ],
                    "answerIndex": 0,
                    "explanation": "デザートの上品な甘さを「甘さ控えめでとても美味しい」と表現します。"
                },
                {
                    "prompt": "【食事終わりの感謝】食事を終えて店員や同席者に感謝を述べる日本の伝統的な挨拶を選択してください。",
                    "options": [
                        "大変美味しくいただきました。ごちそうさまでした。",
                        "いただきます。これから食べます。",
                        "いってきます。また明日。",
                        "お邪魔しました。さようなら。"
                    ],
                    "answerIndex": 0,
                    "explanation": "食後の感謝の挨拶は「ごちそうさまでした」です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "日本の和食文化における「旨味（うまみ）」の基本となる出汁の原料の組み合わせはどれですか。",
                    "options": [
                        "昆布（こんぶ）と鰹節（かつおぶし）",
                        "砂糖と醤油",
                        "胡椒と唐辛子",
                        "バターとオリーブオイル"
                    ],
                    "answerIndex": 0,
                    "explanation": "伝統的な和食の出汁は主に昆布と鰹節から抽出されます。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "食事を始める際の日本の挨拶を入力してください（ひらがな六文字）:",
                    "acceptedAnswers": [
                        "いただきます",
                        "イタダキマス"
                    ],
                    "explanation": "食事開始の挨拶は「いただきます」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u6-l2": {
        "id": "ja-u6-l2",
        "subject": "japanese",
        "unit": 6,
        "lessonNumber": 2,
        "title": "味覚形容詞と味の表現（甘い・辛い・酸っぱい・苦い・旨味）",
        "level": "A1",
        "objective": "五味（甘味・酸味・塩味・苦味・旨味）を表す基本形容詞と「美味しい」「薄い」「濃い」などの味覚描写。",
        "presentation": {
            "explanation": "日本料理の精妙な味わいを表現するための味覚形容詞および状態描写の体系を学びます。\n\n【基本五味と形容詞の体系】\n１．甘い（あまい）：糖分の甘さ（「この果物はとても甘いです」）\n２．辛い（からい）：唐辛子や香辛料の刺激的な辛さ（「このカレーは少し辛いです」）\n３．酸っぱい（すっぱい）：柑橘類や酢の酸味（「レモンが酸っぱいです」）\n４．苦い（にがい）：抹茶や珈琲の苦味（「良薬は口に苦い」）\n５．塩辛い（しおからい）／しょっぱい：塩分が強い味\n６．旨味（うまみ）：昆布（グルタミン酸）や鰹節（イノシン酸）のだしから生じる第5の味覚。\n\n【味の濃淡と評価】\n・「味が濃い（こい）」⇔「味が薄い（うすい）」\n・「さっぱりしている」（爽やかな後味）⇔「こってりしている」（濃厚で脂っこい）\n・「美味しい（おいしい）」「うまい」（くだけた表現）",
            "examples": [
                {
                    "target": "この京都の抹茶パフェは、甘さ控えめでとても美味しいです。",
                    "reading": "この きょうとの まっちゃパフェは、あまさひかえめで とても おいしいです。",
                    "translation": "This Kyoto matcha parfait is moderately sweet and very delicious."
                },
                {
                    "target": "このスープは昆布と鰹節の豊かな旨味が効いています。",
                    "reading": "この スープは こんぶと かつおぶしの ゆたかな うまみが きいています。",
                    "translation": "This soup features the rich umami of kelp and bonito flakes."
                },
                {
                    "target": "少し味が濃いので、お湯を足していただけますか。",
                    "reading": "すこし あじが こいので、おゆを たして いただけますか。",
                    "translation": "The flavor is a bit strong, so could you please add some hot water?"
                },
                {
                    "target": "この酢の物はさっぱりしていて、夏にぴったりです。",
                    "reading": "この すのものは さっぱりしていて、なつに ぴったりです。",
                    "translation": "This vinegared dish is refreshing and perfect for summer."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【嗜好の表現「好き・嫌い」】好きな食べ物を表す助詞構文として文法的に正しいものはどれですか。",
                    "options": [
                        "私は日本の寿司や天ぷらが大好きです。（［対象］が 好きです）",
                        "私は日本の寿司や天ぷらを大好きです。",
                        "私は日本の寿司や天ぷらに大好きです。",
                        "私は日本の寿司や天ぷらで大好きです。"
                    ],
                    "answerIndex": 0,
                    "explanation": "感情・嗜好の対象（好き・嫌い・上手・下手）には助詞「が」を用います。"
                },
                {
                    "prompt": "【味覚形容詞の対立】「甘い（あまい）」と「辛い（からい）」、「酸っぱい（すっぱい）」と「苦い（にがい）」の意味の組み合わせとして正しいものはどれですか。",
                    "options": [
                        "甘い：sweet / 辛い：spicy・hot / 酸っぱい：sour / 苦い：bitter",
                        "甘い：bitter / 辛い：sweet / 酸っぱい：salty / 苦い：sour",
                        "甘い：sour / 辛い：bitter / 酸っぱい：sweet / 苦い：spicy",
                        "すべて同じ意味"
                    ],
                    "answerIndex": 0,
                    "explanation": "五味の形容詞：甘い（sweet）、辛い（spicy/hot）、酸っぱい（sour）、苦い（bitter）、塩辛い（salty）です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【辛い料理の可否】辛いものが苦手であることを丁寧に伝える表現を選択してください。",
                    "options": [
                        "すみません、辛い料理は少し苦手（にがて）です。",
                        "辛い料理はとても上手です。",
                        "辛い料理を飲みたいです。",
                        "辛い料理に行きましょう。"
                    ],
                    "answerIndex": 0,
                    "explanation": "食べられない・好まないことを柔らかく伝える際は「〜は苦手です」を用います。"
                },
                {
                    "prompt": "【出汁の風味の描写】和食の出汁（だし）の美味しさを説明する文を選択してください。",
                    "options": [
                        "日本の出汁は昆布と鰹節の豊かな旨味が凝縮されています。",
                        "日本の出汁は砂糖と塩の激しい辛さがあります。",
                        "日本の出汁は油で揚げて作ります。",
                        "日本の出汁は冷たく凍っています。"
                    ],
                    "answerIndex": 0,
                    "explanation": "昆布と鰹節による旨味（うまみ）の凝縮が出汁の本質です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「甘い」の否定形（丁寧形）として正しいものはどれですか。",
                    "options": [
                        "甘くないです（または 甘くありません）",
                        "甘いじゃないです",
                        "甘くないでした",
                        "甘いではありません"
                    ],
                    "answerIndex": 0,
                    "explanation": "い形容詞「甘い」の否定形は語尾の「い」を「くない」に変えて「甘くないです / 甘くありません」となります。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "「spicy / hot」を意味するい形容詞を入力してください（ひらがな三文字）:",
                    "acceptedAnswers": [
                        "からい",
                        "カライ",
                        "辛い"
                    ],
                    "explanation": "「辛い（からい）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u6-l3": {
        "id": "ja-u6-l3",
        "subject": "japanese",
        "unit": 6,
        "lessonNumber": 3,
        "title": "好みと嗜好表現（「〜が好きです」「〜が苦手です」「アレルギー」）",
        "level": "A1",
        "objective": "対象を表す助詞「が」を用いた好悪・嗜好表現と、食物アレルギーや食事制限の伝達方法。",
        "presentation": {
            "explanation": "食べ物の好み、嗜好、および健康上の制約（アレルギー・食事制限）を適切に伝える表現を習得します。\n\n【嗜好を表す形容動詞構文】\n１．「［名詞］が好きです」：好物を述べる（例：「私は和食が好きです」）\n２．「［名詞］が大好きです」：大好物を強調する\n３．「［名詞］があまり好きではありません」：穏やかな否定\n４．「［名詞］が苦手（にがて）です」：「嫌い（きらい）」という直接的な語を避け、角を立てずに断る日本的な婉曲表現。\n\n【アレルギーと食事制限の伝達】\n・「私は［食物］アレルギーがあります」\n・「［食材］を抜いて（ぬいて）作っていただけますか」（Could you make it without ...?）\n・「ベジタリアン向けのメニューはありますか」",
            "examples": [
                {
                    "target": "私は生魚が好きですが、甲殻類アレルギーがあります。",
                    "reading": "わたしは なまざかなが すきですが、こうかくるい アレルギーが あります。",
                    "translation": "I like raw fish, but I have a shellfish allergy."
                },
                {
                    "target": "辛い食べ物が少し苦手なので、辛さ控えめでお願いします。",
                    "reading": "からい たべものが すこし にがてなので、からさひかえめで おねがいします。",
                    "translation": "I am not very good with spicy food, so please make it mild."
                },
                {
                    "target": "豚肉とアルコールが入っていない料理はどれですか。",
                    "reading": "ぶたにくと アルコールが はいっていない りょうりは どれですか。",
                    "translation": "Which dishes do not contain pork or alcohol?"
                },
                {
                    "target": "ネギを抜いて作っていただくことは可能でしょうか。",
                    "reading": "ネギを ぬいて つくって いただくことは かのうでしょうか。",
                    "translation": "Would it be possible to make it without green onions?"
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【居酒屋での注文対話】店員を呼んで飲み物とおつまみを頼む自然な対話はどれですか。",
                    "options": [
                        "「すみません、生ビールを二つと枝豆を一つお願いします。」",
                        "「おい、ビール二つ持ってこい。」",
                        "「ビールを二つ飲むつもりでした。」",
                        "「ビールと枝豆がいますか。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「すみません、［品名］を［数量］お願いします」が日本の居酒屋で最も一般的な注文表現です。"
                },
                {
                    "prompt": "【会計を頼む表現】食事が終わり、店員に会計を求める際の表現を選択してください。",
                    "options": [
                        "すみません、お会計（お勘定）をお願いします。",
                        "すみません、お金を返してください。",
                        "すみません、注文をキャンセルします。",
                        "すみません、料理を食べてください。"
                    ],
                    "answerIndex": 0,
                    "explanation": "会計を頼むときは「お会計をお願いします（または お勘定をお願いします）」と言います。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【セットメニューの選択】ランチセットに飲み物が付くか尋ねる文を選択してください。",
                    "options": [
                        "このランチセットにはお飲み物が付きますか。",
                        "このランチセットにお飲み物を食べますか。",
                        "このランチセットはお飲み物に行きますか。",
                        "このランチセットがお飲み物をしますか。"
                    ],
                    "answerIndex": 0,
                    "explanation": "セットに付属しているか確認する動詞は「付く（付きますか）」です。"
                },
                {
                    "prompt": "【おすすめ料理の質問】店の店員におすすめの料理を尋ねる丁寧な表現を選択してください。",
                    "options": [
                        "本日のおすすめ料理は何ですか。",
                        "今日の料理を食べなさい。",
                        "今日のおすすめはいくらですか。",
                        "今日の料理はありますか。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「本日のおすすめは何ですか」で本日の一押しメニューを尋ねることができます。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「別々でお会計をお願いします」という発話の意味は何ですか。",
                    "options": [
                        "同席者各自が個別に自分の分を支払うこと（割り勘・個別会計）。",
                        "一人で全員分をまとめて支払うこと。",
                        "ツケ払いにすること。",
                        "無料にしてもらうこと。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「別々で」は個別会計（各自払い）を意味します。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "飲食店の支払いを意味する語「お＿＿＿をお願いします」の空欄を入力してください（漢字二文字またはひらがな四文字）:",
                    "acceptedAnswers": [
                        "会計",
                        "かいけい",
                        "カイケイ",
                        "勘定",
                        "かんじょう"
                    ],
                    "explanation": "「お会計（おかいけい）」または「お勘定（おかんじょう）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u6-l4": {
        "id": "ja-u6-l4",
        "subject": "japanese",
        "unit": 6,
        "lessonNumber": 4,
        "title": "居酒屋文化と定番メニューの注文（「とりあえず生」「おすすめ」）",
        "level": "A1",
        "objective": "日本の居酒屋文化（お通し・シェア文化）、定番注文表現「とりあえず〜」「おすすめは何ですか」、乾杯の作法。",
        "presentation": {
            "explanation": "日本の独特な社交の場である「居酒屋（いざかや）」での対話と注文習慣を学びます。\n\n【居酒屋の独特なシステムと文化】\n１．お通し（おとおし）／突き出し：着席時に提供される小鉢（席料・カバーチャージを含む慣習）。\n２．乾杯（かんぱい）の迅速な開始：\n　・「とりあえず生（なま）で」＝ \"First of all, draft beer for now.\"（全員の飲み物を揃えて乾杯を早く行うための定番表現）。\n３．おすすめの尋ね方：\n　・「本日のおすすめは何ですか」＝ \"What is today's recommendation?\"\n　・「人気メニューを教えてください」\n４．料理の共有：大皿料理を取り皿（とりざら）に分けて食べる文化。",
            "examples": [
                {
                    "target": "とりあえず生ビールを三つと枝豆、ポテトサラダをください。",
                    "reading": "とりあえず なまビールを みっつと えだまめ、ポテトサラダを ください。",
                    "translation": "To start with, three draft beers, edamame, and potato salad, please."
                },
                {
                    "target": "本日のおすすめの焼き鳥と刺身の盛り合わせをお願いします。",
                    "reading": "ほんじつの おすすめの やきとりと さしみの もりあわせを おねがいします。",
                    "translation": "Please give us today's recommended yakitori and sashimi assortment."
                },
                {
                    "target": "取り皿を四枚と、お箸をもう一膳いただけますか。",
                    "reading": "とりざらを よんまいと、おはしを もういちぜん いただけますか。",
                    "translation": "Could we have four small sharing plates and one more pair of chopsticks?"
                },
                {
                    "target": "皆様、グラスをお持ちください。お疲れ様でした、乾杯！",
                    "reading": "みなさま、グラスを おもちください。おつかれさまでした、かんぱい！",
                    "translation": "Everyone, please hold your glasses. Great job today, cheers!"
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【箸のマナーと文化】日本の食事作法において避けるべき「嫌い箸（タブー）」として正しいものはどれですか。",
                    "options": [
                        "箸から箸へ直接料理を渡すこと（箸渡し）や、ご飯に箸を垂直に突き刺すこと（立て箸）。",
                        "箸置きを使うこと。",
                        "右手で箸を持つこと。",
                        "料理を一口サイズにして食べること。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「箸渡し」や「立て箸」は仏事・葬儀の作法に連なるため、日本の食事文化において厳格なタブーとされています。"
                },
                {
                    "prompt": "【「いただきます」の文化的意義】食事前の挨拶「いただきます」に込められた本来の感謝の対象は何ですか。",
                    "options": [
                        "食材となった動植物の命と、食事の準備・調理に関わったすべての人々。",
                        "料理を作ったシェフだけに限定される。",
                        "自分自身の労働。",
                        "特に意味はなく単なる掛け声。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「いただきます（命をいただく）」は食材の生命への畏敬と、調理・生産に関わった人々への感謝を含みます。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【定食の配膳マナー】日本の伝統的な一汁三菜の配膳におけるご飯と味噌汁の正しい位置を選択してください。",
                    "options": [
                        "左手前にご飯、右手前に味噌汁（汁物）。",
                        "右手前にご飯、左手前に味噌汁。",
                        "奥にご飯と味噌汁、手前におかず。",
                        "左右どちらでも全く自由。"
                    ],
                    "answerIndex": 0,
                    "explanation": "和食の伝統的配膳では、主食であるご飯を左手前、汁物を右手前に配置します。"
                },
                {
                    "prompt": "【お茶のおかわり】飲食店でお茶のおかわりを丁寧に頼む文を選択してください。",
                    "options": [
                        "すみません、お茶のおかわりをいただけますでしょうか。",
                        "お茶をもっと飲みなさい。",
                        "お茶を買いに行きます。",
                        "お茶は要りません。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「お茶のおかわりをいただけますでしょうか」が極めて礼儀正しく自然です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「ごちそうさまでした」の漢字表記「御馳走様でした」における「馳走」の本来の語源は何ですか。",
                    "options": [
                        "客をもてなすために方々を馬で走り回って食材を集めたこと。",
                        "高価なワインを飲むこと。",
                        "ゆっくり座って休むこと。",
                        "早く食事を終えること。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「馳走」は走り回ることを意味し、食事を用意するために駆け回ってくれた労苦への感謝を表現しています。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "食事を終えた時の感謝の挨拶を入力してください（ひらがな九文字）:",
                    "acceptedAnswers": [
                        "ごちそうさまでした",
                        "ゴチソウサマデシタ"
                    ],
                    "explanation": "食後の挨拶は「ごちそうさまでした」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u6-l5": {
        "id": "ja-u6-l5",
        "subject": "japanese",
        "unit": 6,
        "lessonNumber": 5,
        "title": "お会計と食事の作法・挨拶（「ごちそうさまでした」「別々で」）",
        "level": "A1",
        "objective": "食前・食後の挨拶「いただきます」「ごちそうさまでした」、会計の依頼（テーブル会計・レジ会計）、割り勘・別々会計の依頼。",
        "presentation": {
            "explanation": "食事の締めくくりにおける作法と、正確かつ丁寧な会計依頼の対話プロトコルを習得します。\n\n【食事前後の文化的挨拶】\n１．「いただきます」：命と調理者への感謝を込めて食事前に手を合わせる挨拶。\n２．「ごちそうさまでした」：食事を終えた感謝の言葉（「馳走」は走り回って食材を集めたことへの敬意）。\n\n【会計時の表現】\n１．会計の申し出：\n　・「お会計（おかいけい）をお願いします」／「お勘定（おかんじょう）をお願いします」\n２．支払い方法の指定：\n　・「クレジットカードは使えますか」\n　・「電子マネーで支払います」\n３．分割・割り勘の依頼：\n　・「別々（べつべつ）でお願いします」（Separate checks, please.）\n　・「一緒（いっしょ）に払います」（We'll pay together.）",
            "examples": [
                {
                    "target": "大変美味しくいただきました。ごちそうさまでした。",
                    "reading": "たいへん おいしく いただきました。ごちそうさまでした。",
                    "translation": "It was extremely delicious. Thank you for the wonderful meal."
                },
                {
                    "target": "すみません、お会計をお願いします。カードは使えますか。",
                    "reading": "すみません、おかいけいを おねがいします。カードは つかえますか。",
                    "translation": "Excuse me, check please. Do you accept credit cards?"
                },
                {
                    "target": "お支払いは別々でお願いできますでしょうか。",
                    "reading": "おしはらいは べつべつで おねがい できますでしょうか。",
                    "translation": "Could we please pay separately?"
                },
                {
                    "target": "領収書を「株式会社ファーレン」宛で発行してください。",
                    "reading": "りょうしゅうしょを「かぶしきがいしゃ ファーレン」あてで はっこう してください。",
                    "translation": "Please issue a receipt made out to 'Fearn Co., Ltd.'."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【席の予約対話】電話で飲食店に今夜の予約を入れる対話として最も自然なものはどれですか。",
                    "options": [
                        "「今夜七時に四名で予約をお願いしたいのですが、お席は空いていますでしょうか。」",
                        "「今夜四人で行くから席を取れ。」",
                        "「今夜七時に四名がいます。」",
                        "「予約は好きですか。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「［日時］に［人数］で予約をお願いしたいのですが」が予約時の丁寧な定型表現です。"
                },
                {
                    "prompt": "【アレルギーの確認】アレルギー食材が含まれているか確認する質問はどれですか。",
                    "options": [
                        "この料理に甲殻類（エビやカニ）は入っていますか。アレルギーがあります。",
                        "この料理は甘いですか。辛いですか。",
                        "この料理はいくらですか。",
                        "この料理はどこへ行きますか。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜は入っていますか。アレルギーがあります」で食材を確認します。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【フルコースの感想】招待された会席料理の味と演出を褒める洗練された文を選択してください。",
                    "options": [
                        "季節の食材が美しく盛り付けられていて、どのお料理も大変美味でした。",
                        "料理が多すぎて全部残しました。",
                        "味が辛すぎて食べられませんでした。",
                        "早く帰りたかったです。"
                    ],
                    "answerIndex": 0,
                    "explanation": "和食の美と味を称賛する「季節の食材が美しく盛り付けられていて、大変美味でした」が適切です。"
                },
                {
                    "prompt": "【退店時の挨拶】会計を済ませて店を出る際の挨拶を選択してください。",
                    "options": [
                        "ごちそうさまでした。とても美味しかったです。また来ます。",
                        "いただきます。これから食べます。",
                        "お邪魔します。入ります。",
                        "さようなら。二度と来ません。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「ごちそうさまでした。とても美味しかったです。また来ます」が最高のお客側の礼儀です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "飲食店での「予約・入店・注文・食事・会計・退店」の一連の流れで使われる表現として、順番が正しいものはどれですか。",
                    "options": [
                        "予約をお願いします → いただきます → 注文をお願いします → お会計をお願いします → ごちそうさまでした",
                        "ごちそうさまでした → お会計をお願いします → いただきます → 予約をお願いします",
                        "いただきます → ごちそうさまでした → 注文をお願いします → お会計をお願いします",
                        "お会計をお願いします → いただきます → 予約をお願いします"
                    ],
                    "answerIndex": 0,
                    "explanation": "予約・注文・食事前（いただきます）・会計・退店（ごちそうさまでした）の順序です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "注文を頼む際のフレーズ「注文を＿＿＿」の空欄を入力してください（ひらがな六文字）:",
                    "acceptedAnswers": [
                        "おねがいします",
                        "オネガイシマス",
                        "お願いします"
                    ],
                    "explanation": "「お願いします（おねがいします）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u7-l1": {
        "id": "ja-u7-l1",
        "subject": "japanese",
        "unit": 7,
        "lessonNumber": 1,
        "title": "動詞の過去形「〜ました」「〜た」の基本規則",
        "level": "A2",
        "objective": "丁寧語の過去形「〜ました」と普通形（タ形）の活用規則、過去の動作・出来事の叙述。",
        "presentation": {
            "explanation": "日本語の動詞における過去形（完了・過去）の体系と活用規則を学びます。\n\n【動詞の過去形の二大体系】\n１．丁寧形過去「〜ました」（否定：「〜ませんでした」）：\n　・行きます → 行きました（行きました）\n　・食べます → 食べました（食べました）\n　・勉強します → 勉強しました（勉強しました）\n２．普通形過去（タ形）：\n　・五段動詞（一類）：て形と同じ音便変化が生じます（例：書いた、読んだ、行った、買った）。\n　・一段動詞（二類）：語尾の「る」を取って「た」を接続（例：食べた、見た）。\n　・不規則動詞（三類）：する → した、来る → 来た（きた）。\n３．過去の時制を表す副詞との呼応：\n　・「昨日（きのう）」「先週（せんしゅう）」「去年（きょねん）」「さっき」などとともに用います。",
            "examples": [
                {
                    "target": "昨日は友達と一緒に京都の寺院を見学しました。",
                    "reading": "きのうは ともだちと いっしょに きょうとの じいんを けんがくしました。",
                    "translation": "Yesterday, I toured temples in Kyoto together with my friend."
                },
                {
                    "target": "先週の金曜日に日本語の試験を受けました。",
                    "reading": "せんしゅうの きんようびに にほんごの しけんを うけました。",
                    "translation": "I took the Japanese exam last Friday."
                },
                {
                    "target": "今朝は時間がなかったので、朝ご飯を食べませんでした。",
                    "reading": "けさは じかんが なかったので、あさごはんを たべませんでした。",
                    "translation": "Because I had no time this morning, I did not eat breakfast."
                },
                {
                    "target": "さっき郵便局へ行って、手紙を出してきました。",
                    "reading": "さっき ゆうびんきょくへ いって、てがみを だしてきました。",
                    "translation": "I went to the post office a moment ago and mailed the letter."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【動詞の過去形活用】動詞「食べる」「行く」「飲む」の丁寧な過去肯定形（〜ました）として正しい組み合わせはどれですか。",
                    "options": [
                        "食べました / 行きました / 飲みました",
                        "食べたでした / 行ったでした / 飲んだでした",
                        "食べました / 行きませんでした / 飲みます",
                        "食べました / 行くでした / 飲むでした"
                    ],
                    "answerIndex": 0,
                    "explanation": "動詞の丁寧な過去形は「ます語幹 ＋ ました」です。"
                },
                {
                    "prompt": "【動詞の過去否定形】「先週の土曜日は雨だったので、どこへも＿＿＿。」の空欄に入る動詞過去否定形を選択してください。",
                    "options": [
                        "出かけませんでした（過去の否定）",
                        "出かけました",
                        "出かけません",
                        "出かけるでした"
                    ],
                    "answerIndex": 0,
                    "explanation": "過去の行為の否定は「〜ませんでした（出かけませんでした）」を用います。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【週末の行動報告】週末に友達と映画を見てお茶を飲んだことを報告する文を選択してください。",
                    "options": [
                        "週末に友達と一緒に日本のアニメ映画を見て、カフェでお茶を飲みました。",
                        "週末に友達と一緒に映画を見るて、お茶を飲むでした。",
                        "週末に友達と一緒に映画を見たから、お茶を飲みません。",
                        "週末に友達と一緒に映画を見るでしょう。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「見て（て形接続）」「飲みました（過去形結び）」の時制一致が正確です。"
                },
                {
                    "prompt": "【昨日の勉強時間の伝達】昨日図書館で3時間日本語を勉強したことを述べる文を選択してください。",
                    "options": [
                        "昨日は図書館で三時間日本語を勉強しました。",
                        "昨日は図書館で三時間日本語を勉強しますでした。",
                        "昨日は図書館で三時間日本語を勉強するでした。",
                        "昨日は図書館で三時間日本語を勉強したいです。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「勉強しました」が正しい過去形です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "動詞「する」と「来る（くる）」の丁寧な過去肯定形はどれですか。",
                    "options": [
                        "しました / 来ました（きました）",
                        "するでした / 来るでした",
                        "したでした / 来たでした",
                        "しりました / きりました"
                    ],
                    "answerIndex": 0,
                    "explanation": "三類動詞の過去形は「しました」「来ました（きました）」です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "動詞「書く（かく）」の丁寧な過去肯定形を入力してください（ひらがな五文字）:",
                    "acceptedAnswers": [
                        "かきました",
                        "カキマシタ",
                        "書きました"
                    ],
                    "explanation": "「書く」の過去形は「書きました（かきました）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u7-l2": {
        "id": "ja-u7-l2",
        "subject": "japanese",
        "unit": 7,
        "lessonNumber": 2,
        "title": "い形容詞とな形容詞の過去形（「〜かった」「〜でした」）",
        "level": "A2",
        "objective": "い形容詞の過去形（〜かった／〜くなかった）とな形容詞の過去形（〜でした／〜ではありませんでした）の習得。",
        "presentation": {
            "explanation": "形容詞の過去時制における活用体系と、過去の状態や感情の描写方法を学びます。\n\n【い形容詞の過去形活用】\n・肯定過去：語尾の「い」を「かった」に変えます（例：楽しい → 楽しかった、高い → 高かった）。\n・否定過去：語尾の「い」を「くなかった」に変えます（例：高くない → 高くなかった）。\n・重要例外：「いい（良い）」の過去形は「よかった」、否定過去は「よくなかった」となります。\n\n【な形容詞の過去形活用】\n・肯定過去：「［語幹］でした」（普通形：「［語幹］だった」）（例：静かでした、綺麗でした）。\n・否定過去：「［語幹］ではありませんでした」（普通形：「［語幹］ではなかった」）。\n\n【名詞述語の過去形との共通性】\n・な形容詞の語尾変化は名詞述語（「学生でした」「雨でした」）と完全に一致します。",
            "examples": [
                {
                    "target": "昨日の歌舞伎の公演はとても素晴らしかったです。",
                    "reading": "きのうの かぶきの こうえんは とても すばらしかったです。",
                    "translation": "Yesterday's Kabuki performance was truly wonderful."
                },
                {
                    "target": "先週の試験は思ったより難しくなかったです。",
                    "reading": "せんしゅうの しけんは おもったより むずかしくなかったです。",
                    "translation": "Last week's exam was not as difficult as I thought."
                },
                {
                    "target": "昔、この町はとても静かで自然が豊かでした。",
                    "reading": "むかし、この まちは とても しずかで しぜんが ゆたかでした。",
                    "translation": "In the past, this town was very quiet and rich in nature."
                },
                {
                    "target": "昨日のパーティーはとても賑やかで楽しかったです。",
                    "reading": "きのうの パーティーは とても にぎやかで たのしかったです。",
                    "translation": "Yesterday's party was very lively and fun."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【い形容詞の過去形】「美味しい（おいしい）」「楽しい（たのしい）」の過去形として正しいものはどれですか。",
                    "options": [
                        "美味しかったです / 楽しかったです（い→かったです）",
                        "美味しいでした / 楽しいでした",
                        "美味しいかったです / 楽しいかったです",
                        "美味しでした / 楽しでした"
                    ],
                    "answerIndex": 0,
                    "explanation": "い形容詞の過去形は語尾の「い」を「かった」に変えて「〜かったです」となります。「〜いでした」は文法誤用です。"
                },
                {
                    "prompt": "【「いい（良い）」の不規則過去形】形容詞「いい」の正しい過去形を選択してください。",
                    "options": [
                        "よかったです（語幹「よ-」が活用）",
                        "いかったです",
                        "いいでした",
                        "いくなかったです"
                    ],
                    "answerIndex": 0,
                    "explanation": "「いい」は語幹「よい」に基づき、過去形は「よかったです」となります。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【紅葉の感想】昨日の京都の紅葉が非常に美しかったことを述べる文を選択してください。",
                    "options": [
                        "昨日の京都の紅葉は息をのむほど美しかったです。",
                        "昨日の京都の紅葉は息をのむほど美しいでした。",
                        "昨日の京都の紅葉は息をのむほど美しくでした。",
                        "昨日の京都の紅葉は息をのむほど美しいだったです。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「美しい」の過去形は「美しかったです」です。"
                },
                {
                    "prompt": "【天候と気温の過去】昨日の天気が寒くなかったことを述べる文を選択してください。",
                    "options": [
                        "昨日はあまり寒くなかったです（または 寒くありませんでした）。",
                        "昨日はあまり寒いではなかったです。",
                        "昨日はあまり寒くないでした。",
                        "昨日はあまり寒いじゃなかったです。"
                    ],
                    "answerIndex": 0,
                    "explanation": "い形容詞「寒い」の過去否定は「寒くなかったです / 寒くありませんでした」です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「高かった」と「高くなかった」の意味の対立として正しいものはどれですか。",
                    "options": [
                        "前者は過去肯定（高かった＝It was expensive）、後者は過去否定（高くなかった＝It was not expensive）。",
                        "前者が現在形で後者が過去形である。",
                        "前者が安いで後者が高いである。",
                        "意味の違いはない。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「高かった（過去肯定）」と「高くなかった（過去否定）」の対照です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "い形容詞「暑い（あつい）」の過去肯定形を入力してください（ひらがな六文字）:",
                    "acceptedAnswers": [
                        "あつかったです",
                        "アツカッタデス",
                        "暑かったです"
                    ],
                    "explanation": "「暑い」の過去形は「暑かったです（あつかったです）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u7-l3": {
        "id": "ja-u7-l3",
        "subject": "japanese",
        "unit": 7,
        "lessonNumber": 3,
        "title": "経験表現「〜たことがある」（過去の経験の有無）",
        "level": "A2",
        "objective": "動詞タ形＋「ことがある」を用いた過去の経験の表現、頻度副詞「一度も」「何度か」の運用。",
        "presentation": {
            "explanation": "生涯における経験の有無を問答する構文「〜たことがある」の体系を学びます。\n\n【構文の構造と規則】\n・接続：動詞のタ形（普通形過去） ＋ 「ことがある／あります」\n・肯定：過去にその行為を行った経験がある（「富士山に登ったことがあります」）\n・否定：過去に一度もその経験がない（「一度も納豆を食べたことがありません」）\n・疑問：「〜たことがありますか」（Have you ever ...?）\n\n【単なる過去形との使い分け】\n・単なる過去形「〜ました」は特定の時点（昨日、先週など）の出来事を述べます。\n・「〜たことがある」は現在に至るまでの人生経験全体を対象とします。したがって、「昨日の朝、パンを食べたことがあります」という表現は不自然です。",
            "examples": [
                {
                    "target": "私は日本へ三回行ったことがありますが、沖縄はまだありません。",
                    "reading": "わたしは にほんへ さんかい いったことが ありますが、おきなわは まだ ありません。",
                    "translation": "I have been to Japan three times, but I have not yet been to Okinawa."
                },
                {
                    "target": "本格的な茶道を体験したことがありますか。",
                    "reading": "ほんかくてきな さどうを たいけんしたことが ありますか。",
                    "translation": "Have you ever experienced authentic tea ceremony?"
                },
                {
                    "target": "生まれてから一度も新幹線に乗ったことがありません。",
                    "reading": "うまれてから いちども しんかんせんに のったことが ありません。",
                    "translation": "I have never ridden a bullet train since I was born."
                },
                {
                    "target": "日本の伝統的な旅館に泊まったことがあります。",
                    "reading": "にほんの でんとうてきな りょかんに とまったことが あります。",
                    "translation": "I have stayed at a traditional Japanese inn."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【な形容詞・名詞の過去形】「静か（しずか）」「雨（あめ）」の丁寧な過去形として正しいものはどれですか。",
                    "options": [
                        "静かでした / 雨でした（語幹＋でした）",
                        "静かかったです / 雨かったです",
                        "静かでしたです / 雨でしたです",
                        "静かくなりました / 雨くなりました"
                    ],
                    "answerIndex": 0,
                    "explanation": "な形容詞および名詞の丁寧な過去肯定形は「〜でした」を用います。"
                },
                {
                    "prompt": "【な形容詞の過去否定】「昨日は暇ではありませんでした」の文法機能として正しいものはどれですか。",
                    "options": [
                        "な形容詞「暇」の過去の否定状態を表している（It was not free time yesterday）。",
                        "未来の予定を表している。",
                        "動詞の完了を表している。",
                        "疑問を表している。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜ではありませんでした（じゃありませんでした）」はな形容詞・名詞の過去否定です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【過去の街の描写】昔その町がとても賑やかだったことを述べる文を選択してください。",
                    "options": [
                        "昔、この町はとても賑やかでした。",
                        "昔、この町はとても賑やかかったです。",
                        "昔、この町はとても賑やかでしたでした。",
                        "昔、この町はとても賑やかですでした。"
                    ],
                    "answerIndex": 0,
                    "explanation": "な形容詞「賑やか」の過去形は「賑やかでした」です。"
                },
                {
                    "prompt": "【過去の天気の伝達】昨日は良い天気だったことを伝える文を選択してください。",
                    "options": [
                        "昨日はとてもいい天気でした。",
                        "昨日はとてもいい天気かったです。",
                        "昨日はとてもいい天気でしたです。",
                        "昨日はとてもいい天気にしました。"
                    ],
                    "answerIndex": 0,
                    "explanation": "名詞「天気」の過去形は「天気でした」です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「い形容詞」と「な形容詞」の過去肯定形の語尾の区別として正しいものはどれですか。",
                    "options": [
                        "い形容詞は「〜かったです」、な形容詞は「〜でした」。",
                        "い形容詞が「〜でした」、な形容詞が「〜かったです」。",
                        "両方とも「〜かったです」になる。",
                        "両方とも「〜でした」になる。"
                    ],
                    "answerIndex": 0,
                    "explanation": "い形容詞は「〜かったです（高かった）」、な形容詞は「〜でした（綺麗でした）」と明確に分かれます。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "な形容詞「親切（しんせつ）」の丁寧な過去肯定形を入力してください（ひらがな七文字）:",
                    "acceptedAnswers": [
                        "しんせつでした",
                        "シンセツでした",
                        "親切でした"
                    ],
                    "explanation": "「親切でした（しんせつでした）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u7-l4": {
        "id": "ja-u7-l4",
        "subject": "japanese",
        "unit": 7,
        "lessonNumber": 4,
        "title": "動作の並列「〜たり〜たりする」（代表的な動作の例示）",
        "level": "A2",
        "objective": "動詞タ形＋「り」を用いた非網羅的な動作・状態の代表例示表現の習得。",
        "presentation": {
            "explanation": "複数の動作や状態の中から代表的なものをいくつか例示して述べる「〜たり〜たりする」構文を学びます。\n\n【構文の形成規則】\n・接続：動詞タ形 ＋ 「り」、動詞タ形 ＋ 「り」 ＋ する／します\n・意味：〜したり〜したりする（Doing things like A and B）\n・時制の決定：文末の「する」の形（「します」「しました」「したいです」）によって文全体の時制が決まります。\n\n【「〜て〜て」との決定的な違い】\n・「〜て、〜て」（テ形並列）は動作の時間的順序やすべての動作を網羅的に述べます。\n・「〜たり〜たり」は数ある動作の中から代表例を抽出し、他にも同種の行為があることを暗示します。",
            "examples": [
                {
                    "target": "休日は部屋を掃除したり、本を読んだりして過ごします。",
                    "reading": "きゅうじつは へやを そうじしたり、ほんを よんだりして すごします。",
                    "translation": "On days off, I spend time doing things like cleaning my room and reading books."
                },
                {
                    "target": "昨日の夜はテレビを見たり音楽を聴いたりしました。",
                    "reading": "きのうの よるは テレビを みたり おんがくを きいたり しました。",
                    "translation": "Last night, I did things like watching TV and listening to music."
                },
                {
                    "target": "旅行中は写真を撮ったり美味しい料理を食べたりしたいです。",
                    "reading": "りょこうちゅうは しゃしんを とったり おいしい りょうりを たべたり したいです。",
                    "translation": "During the trip, I want to take photos and eat delicious food among other things."
                },
                {
                    "target": "最近は雨が降ったり止んだりして、天気が不安定です。",
                    "reading": "さいきんは あめが ふったり やんだりして、てんきが ふあんていです。",
                    "translation": "Lately the weather is unstable, with rain starting and stopping repeatedly."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【経験を表す構文】「富士山に登った経験がある」ことを表す正しい文法構文はどれですか。",
                    "options": [
                        "富士山に【登ったことがあります】。（動詞た形＋ことがあります）",
                        "富士山に【登ることがあります】。",
                        "富士山に【登りことがあります】。",
                        "富士山に【登ってことがあります】。"
                    ],
                    "answerIndex": 0,
                    "explanation": "過去の生涯経験を表す文法形式は「動詞た形 ＋ ことがあります」です。"
                },
                {
                    "prompt": "【経験の有無を問う質問と回答】日本へ行ったことがあるか尋ねられ、一度もないと答える対話を選択してください。",
                    "options": [
                        "「日本へ行ったことがありますか。」「いいえ、一度も行ったことがありません。」",
                        "「日本へ行ったことがありますか。」「いいえ、行ったことがありました。」",
                        "「日本へ行ったことがありますか。」「はい、行きませんでした。」",
                        "「日本へ行ったことがありますか。」「一度も行きました。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "経験がない場合は「いいえ、一度も［動詞た形］ことがありません」と答えます。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【伝統芸能の鑑賞経験】歌舞伎の舞台を鑑賞した経験があることを述べる文を選択してください。",
                    "options": [
                        "大学時代に歌舞伎や能楽の舞台を鑑賞したことがあります。",
                        "大学時代に歌舞伎や能楽の舞台を鑑賞するがあります。",
                        "大学時代に歌舞伎や能楽の舞台を鑑賞してがあります。",
                        "大学時代に歌舞伎や能楽の舞台を鑑賞したことがありますでした。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「鑑賞した（た形）＋ ことがあります」の構成が正確です。"
                },
                {
                    "prompt": "【和食の試食経験】納豆を食べたことがあるか尋ねる文を選択してください。",
                    "options": [
                        "日本の納豆を食べたことがありますか。",
                        "日本の納豆を食べるがありますか。",
                        "日本の納豆を食べてがありますか。",
                        "日本の納豆を飲んだことがありますか。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「食べたことがありますか」で経験を尋ねます。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「〜たことがあります（経験）」と「〜ました（単なる過去の動作）」の違いは何ですか。",
                    "options": [
                        "前者は生涯を通じた体験・経験の有無を表し、後者は特定の過去の一時点で行った動作を表す。",
                        "前者が現在形で後者が過去形である。",
                        "前者が否定で後者が肯定である。",
                        "文法的な違いはない。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜たことがある」はこれまでの人生における経験、「〜ました」は特定の過去の出来事・行為を指します。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "経験を表す構文「動詞た形 ＋ ＿＿＿があります」の空欄を入力してください（ひらがな二文字）:",
                    "acceptedAnswers": [
                        "こと",
                        "コト"
                    ],
                    "explanation": "「〜た【こと】があります」の形式名詞は「こと」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u7-l5": {
        "id": "ja-u7-l5",
        "subject": "japanese",
        "unit": 7,
        "lessonNumber": 5,
        "title": "状態の変化「〜くなる」「〜になる」（変化の表現）",
        "level": "A2",
        "objective": "い形容詞「〜くなる」、な形容詞・名詞「〜になる」を用いた状態・性質の変化の表現。",
        "presentation": {
            "explanation": "時間経過や外的要因によって状態や性質が変化することを表す「なる」構文を学びます。\n\n【形容詞および名詞と「なる」の接続規則】\n１．い形容詞：語尾の「い」を「く」に変えて「なる」を接続（例：寒い → 寒くなる、明るい → 明るくなる）。\n２．な形容詞：語幹 ＋ 「になる」（例：静か → 静かになる、元気 → 元気になる）。\n３．名詞：名詞 ＋ 「になる」（例：春 → 春になる、医者 → 医者になる）。\n\n【自発的変化と主体的意志】\n・自然現象や環境の変化：「暖かくなりました」「暗くなりました」\n・将来の目標や職業：「将来、日本語の教師になりたいです」",
            "examples": [
                {
                    "target": "三月になって、だんだん暖かくなってきました。",
                    "reading": "さんがつに なって、だんだん あたたかく なってきました。",
                    "translation": "Having entered March, it has gradually become warmer."
                },
                {
                    "target": "日本語を毎日練習して、会話が上手に話せるようになりました。",
                    "reading": "にほんごを まいにち れんしゅうして、かいわが じょうずに はなせるように なりました。",
                    "translation": "By practicing Japanese every day, I have become able to converse skillfully."
                },
                {
                    "target": "薬を飲んだので、痛みが軽くなりました。",
                    "reading": "くすりを のんだので、いたみが かるく なりました。",
                    "translation": "Because I took medicine, the pain has become lighter."
                },
                {
                    "target": "将来は国際機関で働く専門家になりたいと考えています。",
                    "reading": "しょうらいは こくさいきかんで はたらく せんもんかに なりたいと かんがえています。",
                    "translation": "I am thinking that I want to become a specialist working at an international organization in the future."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【旅行回想の総合対話】過去の旅行体験を尋ねて答える自然な対話を選択してください。",
                    "options": [
                        "「京都へ行ったことがありますか。」「はい、去年行きました。金閣寺がとても綺麗でした。」",
                        "「京都へ行ったことがありますか。」「はい、去年行きます。綺麗ですでした。」",
                        "「京都へ行ったことがありますか。」「いいえ、行きました。」",
                        "「京都へ行ったことがありますか。」「去年行ったことがありますでした。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "経験の質問「行ったことがありますか」に対し、「去年行きました（過去の事実）」「綺麗でした（形容詞過去）」と答える流れが自然です。"
                },
                {
                    "prompt": "【複数動作の並列「〜たり〜たりする」】休日の活動を例示して過去を語る構文はどれですか。",
                    "options": [
                        "休日は本を読んだり、音楽を聞いたりしました。（〜たり〜たりした）",
                        "休日は本を読みたり、音楽を聞きたりしました。",
                        "休日は本を読んで、音楽を聞くでした。",
                        "休日は本を読んだりと音楽を聞いたりとでした。"
                    ],
                    "answerIndex": 0,
                    "explanation": "動作の例示並列構文は「動詞た形 ＋ り、動詞た形 ＋ り ＋ する（しました）」です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【留学生活の回想】日本での留学生活が充実して楽しかったことを述べる文を選択してください。",
                    "options": [
                        "日本での留学生活はとても充実していて楽しかったです。",
                        "日本での留学生活はとても充実していて楽しいでした。",
                        "日本での留学生活はとても充実して楽しいだったです。",
                        "日本での留学生活はとても充実するでした。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「充実していて（て形）」「楽しかったです（い形容詞過去形）」が正確です。"
                },
                {
                    "prompt": "【富士登山の体験談】富士山に登った時の思い出を語る文を選択してください。",
                    "options": [
                        "富士山に登ったことがあります。山頂からの朝日が息をのむほど美しかったです。",
                        "富士山に登ることがあります。朝日が美しいでした。",
                        "富士山に登りがありました。朝日が美しかったでした。",
                        "富士山に登ってありました。朝日が美しくでした。"
                    ],
                    "answerIndex": 0,
                    "explanation": "経験「登ったことがあります」と感想「美しかったです」の組み合わせが完璧です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "次の文の中で、時制・活用に文法的な誤りがない正しい日本語文はどれですか。",
                    "options": [
                        "昨日は友達と温泉に入ったり、美味しい和食を食べたりして、とても楽しかったです。",
                        "昨日は友達と温泉に入るたり、和食を食べるたりして、楽しいでした。",
                        "昨日は友達と温泉に入ったし、和食を食べたしで、楽しいかったです。",
                        "昨日は友達と温泉に入りて、和食を食べりて、楽しくでした。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜たり〜たりして」「楽しかったです」のすべてが規範文法に完全合致しています。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "過去の出来事・経験を述べる動詞の丁寧な過去肯定語尾を入力してください（ひらがな四文字）:",
                    "acceptedAnswers": [
                        "ました",
                        "マシタ"
                    ],
                    "explanation": "動詞の過去肯定語尾は「ました」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u8-l1": {
        "id": "ja-u8-l1",
        "subject": "japanese",
        "unit": 8,
        "lessonNumber": 1,
        "title": "指示代名詞の体系（これ・それ・あれ・どれ／この・その・あの・どの）",
        "level": "A2",
        "objective": "事物指示の代名詞（これ・それ・あれ・どれ）と連体詞（この・その・あの・どの）の空間的・文脈的使い分け。",
        "presentation": {
            "explanation": "日本語の「こそあど言葉」における事物指示体系を学びます。\n\n【こそあど体系の空間的区分】\n１．コ系列（近称）：話し手に近い事物（「これ」「この本」）\n２．ソ系列（中称）：聞き手に近い事物、または聞き手の領域にあるもの（「それ」「そのペン」）\n３．ア系列（遠称）：話し手と聞き手の双方から離れた事物（「あれ」「あの建物」）\n４．ド系列（不定称）：疑問詞（「どれ」「どの傘」）\n\n【代名詞と連体詞の統語的差異】\n・「これ／それ／あれ／どれ」は単独で主語や目的語になる名詞代名詞です（例：「これは何ですか」）。\n・「この／その／あの／どの」は必ず直後の名詞を修飾する連体詞です（例：「この辞書は誰のですか」）。",
            "examples": [
                {
                    "target": "これは日本の伝統的な陶磁器で、有田焼と呼ばれています。",
                    "reading": "これは にほんの でんとうてきな とうじきで、ありたやきと よばれています。",
                    "translation": "This is traditional Japanese ceramic ware, called Arita ware."
                },
                {
                    "target": "そのテーブルの上にある青いファイルをこちらに渡してください。",
                    "reading": "その テーブルの うえに ある あおい ファイルを こちらに わたしてください。",
                    "translation": "Please pass me that blue folder on the table near you."
                },
                {
                    "target": "あの遠くに見える高い山が富士山です。",
                    "reading": "あの とおくにく みえる たかい やまが ふじさんです。",
                    "translation": "That tall mountain visible in the distance over there is Mount Fuji."
                },
                {
                    "target": "どのデザインが一番気に入りましたか。",
                    "reading": "どの デザインが いちばん きにいりましたか。",
                    "translation": "Which design did you like the best?"
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【こそあど体系の距離感】話し手と聞き手の両方から離れた場所にある対象を指す指示語として正しいものはどれですか。",
                    "options": [
                        "あれ / あの / あそこ（遠称）",
                        "これ / この / ここ（近称）",
                        "それ / その / そこ（中称）",
                        "どれ / どの / どこ（不定・疑問）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「あ」系列（あれ、あの、あそこ）は話し手・聞き手双方から空間的・心理的に離れた対象を指します。"
                },
                {
                    "prompt": "【「これ」と「この」の文法差】名詞の直前に直接修飾語として置くことができる指示語はどれですか。",
                    "options": [
                        "この（連体詞：この本、この時計）",
                        "これ（代名詞）",
                        "ここ（場所名詞）",
                        "どれ（代名詞）"
                    ],
                    "answerIndex": 0,
                    "explanation": "名詞を直接修飾する連体形は「この／その／あの／どの」です（例：「この辞書」）。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【店員への商品提示依頼】ショーケースの中にある相手（店員）側の万年筆を見せてほしいと頼む文を選択してください。",
                    "options": [
                        "すみません、そのショーケースの中の万年筆を見せていただけますでしょうか。",
                        "すみません、あのショーケースの中の万年筆を見せなさい。",
                        "すみません、このショーケースの中の万年筆を見ます。",
                        "すみません、どのショーケースの中の万年筆を見ましたか。"
                    ],
                    "answerIndex": 0,
                    "explanation": "聞き手の手元・近くにある対象には中称「その」を用います。"
                },
                {
                    "prompt": "【遠くの建物の案内】遠くに見える高いタワーを指差して説明する文を選択してください。",
                    "options": [
                        "あそこに見える高い建物が東京スカイツリーです。",
                        "ここに見える高い建物が東京スカイツリーです。",
                        "そこに見える高い建物が東京スカイツリーです。",
                        "どこに見える高い建物が東京スカイツリーですか。"
                    ],
                    "answerIndex": 0,
                    "explanation": "遠く離れた場所を指す指示詞は「あそこ」です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "指示詞の疑問詞「どれ」「どの」「どこ」「どちら」の使い分けとして正しいものはどれですか。",
                    "options": [
                        "どれ＝物（代名詞）、どの＝名詞修飾、どこ＝場所、どちら＝方角・二者択一。",
                        "すべて完全に同一で違いはない。",
                        "どれ＝場所、どこ＝物、どちら＝人。",
                        "どれ＝時間、どの＝理由。"
                    ],
                    "answerIndex": 0,
                    "explanation": "物＝どれ、連体詞＝どの、場所＝どこ、方向・二者比較＝どちら（どっち）です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "話し手の近くにある物を指す指示代名詞を入力してください（ひらがな二文字）:",
                    "acceptedAnswers": [
                        "これ",
                        "コレ"
                    ],
                    "explanation": "近称の指示代名詞は「これ」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u8-l2": {
        "id": "ja-u8-l2",
        "subject": "japanese",
        "unit": 8,
        "lessonNumber": 2,
        "title": "場所・方向の指示詞（ここ・そこ・あそこ・どこ／こちら・そちら・あちら・どちら）",
        "level": "A2",
        "objective": "場所指示詞（ここ・そこ・あそこ・どこ）と方向・丁寧指示詞（こちら・そちら・あちら・どちら）の運用。",
        "presentation": {
            "explanation": "空間的位置、方角、および対人敬意を表す指示詞体系を学びます。\n\n【場所指示詞の分類】\n・ここ：話し手のいる場所（Here）\n・そこ：聞き手のいる場所（There near you）\n・あそこ：双方から離れた場所（Over there）\n・どこ：場所を問う疑問詞（Where）\n\n【方向・丁寧指示詞（こなた・そなたの系譜）】\n・「こちら・そちら・あちら・どちら」は方向（This way / That way）を示すと同時に、「ここ・そこ・あそこ・どこ」の丁寧語として機能します。\n・人物の紹介：「こちらは同僚の佐藤さんです」（This is my colleague Mr. Sato.）\n・選択肢の提示：「こちらの席とそちらの席、どちらがよろしいですか」",
            "examples": [
                {
                    "target": "すみません、お手洗いはどこにありますか。あちらの階段の横です。",
                    "reading": "すみません、おてあらいは どこに ありますか。あちらの かいだんの よこです。",
                    "translation": "Excuse me, where is the restroom? It is over there, next to the stairs."
                },
                {
                    "target": "本日の会議はこちらの第二会議室で行われます。",
                    "reading": "ほんじつの かいぎは こちらの だいにかいぎしつで おこなわれます。",
                    "translation": "Today's meeting will be held here in Conference Room 2."
                },
                {
                    "target": "そちらの窓側の席へどうぞご案内いたします。",
                    "reading": "そちらの まどがわの せきへ どうぞ ごあんないいたします。",
                    "translation": "Allow me to guide you to that seat by the window over there."
                },
                {
                    "target": "どちらのプランがご希望に合いますでしょうか。",
                    "reading": "どちらの プランが ごきぼうに あいますでしょうか。",
                    "translation": "Which of the plans would suit your wishes?"
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【二者比較構文「AのほうがBより」】「バスより電車のほうが速い」ことを表す文法的に正しい文はどれですか。",
                    "options": [
                        "電車のほうが バスより 速いです。（［優位］のほうが ［基準］より）",
                        "電車のより バスほうが 速いです。",
                        "電車が バスよりの ほう速いです。",
                        "電車に バスより 速いです。"
                    ],
                    "answerIndex": 0,
                    "explanation": "二者比較構文は「［優位な方］のほうが ［比較基準］より ［形容詞］です」となります。"
                },
                {
                    "prompt": "【比較助詞「より」の機能】「着物はドレスより高価です」における「より」の文法機能は何ですか。",
                    "options": [
                        "比較の基準（〜と比べて / than）を示す格助詞。",
                        "出発点を示す格助詞。",
                        "理由を示す接続助詞。",
                        "並列を示す助詞。"
                    ],
                    "answerIndex": 0,
                    "explanation": "比較構文における「より」は比較基準（〜に比べて / than）を表します。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【価格の比較】伝統的な着物が現代のドレスより高価であることを述べる文を選択してください。",
                    "options": [
                        "あの展示されている伝統的な着物は、こちらの現代的なドレスより高価です。",
                        "あの展示されている伝統的な着物は、こちらの現代的なドレスのほうが安いです。",
                        "あの着物はドレスより高くないです。",
                        "あの着物はドレスと高価です。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「着物はドレスより高価です」が正確な比較文です。"
                },
                {
                    "prompt": "【利便性の比較】新幹線のほうが飛行機より便利であると述べる文を選択してください。",
                    "options": [
                        "東京から大阪までは、新幹線のほうが飛行機より便利です。",
                        "東京から大阪までは、新幹線より飛行機のほうが便利です。",
                        "東京から大阪までは、新幹線が飛行機に便利です。",
                        "東京から大阪までは、新幹線の飛行機より便利です。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「新幹線のほうが飛行機より便利です」が的確です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「北海道は沖縄より広いです」と同じ意味を表す文はどれですか。",
                    "options": [
                        "沖縄より北海道のほうが広いです。",
                        "北海道より沖縄のほうが広いです。",
                        "北海道と沖縄は同じ広さです。",
                        "沖縄は北海道より広いです。"
                    ],
                    "answerIndex": 0,
                    "explanation": "語順が変わっても「北海道のほうが沖縄より広い」という意味関係は同一です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "比較基準を表す助詞を入力してください（ひらがな二文字）:",
                    "acceptedAnswers": [
                        "より",
                        "ヨリ"
                    ],
                    "explanation": "比較基準の助詞は「より」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u8-l3": {
        "id": "ja-u8-l3",
        "subject": "japanese",
        "unit": 8,
        "lessonNumber": 3,
        "title": "二者比較構文「AのほうがBより〜です」",
        "level": "A2",
        "objective": "二つの対象の性質・程度を比較する構文「AのほうがBより［形容詞］です」の文法構造と運用の習得。",
        "presentation": {
            "explanation": "二つの事物の性質や状態を比較し、一方の優位性や差異を明示する基本比較構文を学びます。\n\n【基本構文の構造】\n・構文：［対象A］のほうが ［対象B］より ［形容詞］です。\n・意味：A is more [adjective] than B.\n・助詞の役割：\n　・「のほうが」：比較の結果、程度が勝っている側に付きます。\n　・「より」：比較の基準となる側に付きます（「〜に比べて」の意）。\n\n【語順の柔軟性】\n・「BよりAのほうが〜です」と語順を入れ替えても文法的に完全に同義です（例：「バスより電車のほうが速いです」）。\n・程度副詞の修飾：「ずっと」（much more）、「少し」（a little more）を形容詞の直前に配置できます。",
            "examples": [
                {
                    "target": "新幹線のほうが飛行機より便利で快適だと思います。",
                    "reading": "しんかんせんの ほうが ひこうきより べんりで かいてきだと おもいます。",
                    "translation": "I think the bullet train is more convenient and comfortable than flying."
                },
                {
                    "target": "東京は京都よりずっと人口が多くて賑やかです。",
                    "reading": "とうきょうは きょうとより ずっと じんこうが おおくて にぎやかです。",
                    "translation": "Tokyo has a much larger population and is livelier than Kyoto."
                },
                {
                    "target": "夏より冬のほうが空気が澄んでいて星が綺麗に見えます。",
                    "reading": "なつより ふゆの ほうが くうきが すんでいて ほしが きれいに みえます。",
                    "translation": "In winter compared to summer, the air is clearer and the stars look more beautiful."
                },
                {
                    "target": "この電子辞書のほうが以前のモデルより少し軽いです。",
                    "reading": "この でんしじしょの ほうが いぜんの モデルより すこし かるいです。",
                    "translation": "This electronic dictionary is slightly lighter than the previous model."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【二者比較の疑問文】二つの選択肢から好みを尋ねる正しい疑問構文はどれですか。",
                    "options": [
                        "コーヒーと紅茶と、どちらのほうが好きですか。（Aと Bと どちらが〜）",
                        "コーヒーと紅茶と、だれのほうが好きですか。",
                        "コーヒーと紅茶と、いつのほうが好きですか。",
                        "コーヒーと紅茶と、どこのほうが好きですか。"
                    ],
                    "answerIndex": 0,
                    "explanation": "二つのうちどちらかを尋ねる疑問詞は「どちら（口語では どっち）」です。"
                },
                {
                    "prompt": "【二者比較への返答】「肉と魚とどちらが好きですか」に対する自然な回答はどれですか。",
                    "options": [
                        "魚のほうが好きです。（または どちらも好きです）",
                        "肉が好きでした。",
                        "魚が好きではありませんでした。",
                        "肉と魚に行きます。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「［選んだ方］のほうが好きです」または両方好きな場合は「どちらも好きです」と答えます。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【速度の比較対話】新幹線と飛行機のどちらが速いか尋ねて答える対話を選択してください。",
                    "options": [
                        "「新幹線と飛行機と、どちらのほうが速いですか。」「飛行機のほうが速いです。」",
                        "「新幹線と飛行機と、どちらが速いでしたか。」「飛行機が速いですでした。」",
                        "「新幹線と飛行機と、だれが速いですか。」「飛行機です。」",
                        "「新幹線と飛行機と、どこが速いですか。」「飛行機です。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「どちらのほうが速いですか」「飛行機のほうが速いです」が規範的な対話です。"
                },
                {
                    "prompt": "【季節の好み比較】夏と冬のどちらが好きか尋ねる文を選択してください。",
                    "options": [
                        "夏と冬と、どちらのほうが好きですか。",
                        "夏と冬と、どれのほうが好きですか。",
                        "夏と冬と、なんのほうが好きですか。",
                        "夏と冬と、だれのほうが好きですか。"
                    ],
                    "answerIndex": 0,
                    "explanation": "二者の選択には「どちら」を用います。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「どちら」と「どれ」の使い分けに関する正しい規則はどれですか。",
                    "options": [
                        "二者の中からの選択には「どちら」、三者以上（多数）の中からの選択には「どれ」を用いる。",
                        "二者には「どれ」、三者以上には「どちら」を用いる。",
                        "人には「どれ」、物には「どちら」を用いる。",
                        "全く同じで区別はない。"
                    ],
                    "answerIndex": 0,
                    "explanation": "二者比較には「どちら（which of the two）」、三者以上には「どれ（which of all）」を用います。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "二者比較の疑問詞「which」を入力してください（ひらがな三文字）:",
                    "acceptedAnswers": [
                        "どちら",
                        "ドチラ",
                        "どっち"
                    ],
                    "explanation": "二者択一の疑問詞は「どちら（どっち）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u8-l4": {
        "id": "ja-u8-l4",
        "subject": "japanese",
        "unit": 8,
        "lessonNumber": 4,
        "title": "比較の疑問文「AとBとどちらが〜ですか」",
        "level": "A2",
        "objective": "二者択一の比較疑問文「AとBとどちらが〜ですか」と回答構文「Aのほうが〜です」の対話技法。",
        "presentation": {
            "explanation": "二つの選択肢から一方の選択や評価を尋ねる疑問表現と、それに対する正確な応答方法を学びます。\n\n【疑問文の構造】\n・構文：［名詞A］と ［名詞B］と どちらが ［形容詞］ですか。\n・意味：Between A and B, which one is more [adjective]?\n・「どちら」の口語形：「どっち」も日常会話で頻繁に使われます。\n\n【回答構文のパターン】\n１．一方を選択：「Aのほうが［形容詞］です」\n２．両者同等：「どちらも［形容詞］です」（Both are ...）\n３．両者否定：「どちらも［形容詞否定］」（Neither is ...）",
            "examples": [
                {
                    "target": "緑茶と珈琲とどちらがよく飲まれますか。緑茶のほうがよく飲みます。",
                    "reading": "りょくちゃと コーヒーと どちらが よく のまれますか。りょくちゃの ほうが よく のみます。",
                    "translation": "Between green tea and coffee, which do you drink more often? I drink green tea more often."
                },
                {
                    "target": "日本語と英語とどちらが難しいですか。どちらもそれぞれ難しさがあります。",
                    "reading": "にほんごと えいごと どちらが むずかしいですか。どちらも それぞれ むずかしさが あります。",
                    "translation": "Between Japanese and English, which is more difficult? Both have their own difficulties."
                },
                {
                    "target": "映画館で観るのと家で観るのとどちらが好きですか。",
                    "reading": "えいがかんで みるのと いえで みるのと どちらが すきですか。",
                    "translation": "Between watching at the cinema and watching at home, which do you prefer?"
                },
                {
                    "target": "春と秋とどちらの季節がお好きですか。秋のほうが涼しくて好きです。",
                    "reading": "はると あきと どちらの きせつが おすきですか。あきの ほうが すずしくて すきです。",
                    "translation": "Which season do you like better, spring or autumn? I like autumn better because it is cool."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【最上級構文「〜の中で一番」】四季の中で春が最も好きであることを述べる正しい構文はどれですか。",
                    "options": [
                        "日本の四季の【中で】、春が【一番】好きです。（範囲の中で＋一番）",
                        "日本の四季のより、春が一番好きです。",
                        "日本の四季のほうが、春がより好きです。",
                        "日本の四季に、春が一倍好きです。"
                    ],
                    "answerIndex": 0,
                    "explanation": "最上級表現は「［範囲・集団］の中で ［対象］が 一番（もっとも） ［形容詞］です」となります。"
                },
                {
                    "prompt": "【最上級の質問構文】果物の中で何が一番好きか尋ねる文はどれですか。",
                    "options": [
                        "果物の中で【何が一番】好きですか。（三者以上の範囲＋疑問詞＋一番）",
                        "果物の中でどちらが一番好きですか。",
                        "果物の中でだれが一番好きですか。",
                        "果物の中でいつが一番好きですか。"
                    ],
                    "answerIndex": 0,
                    "explanation": "三者以上の集団から物を尋ねる疑問詞は「何（なに）」を用います。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【季節の最上級】日本の四季の中で春が一番好きである理由とともに述べる文を選択してください。",
                    "options": [
                        "日本の四季の中で、私は桜が満開になる春が一番好きです。",
                        "日本の四季の中で、私は春のほうが冬より一番好きです。",
                        "日本の四季より、春が一番好きでした。",
                        "日本の四季の中で、春がどちらも好きです。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「四季の中で、春が一番好きです」が完璧な最上級文です。"
                },
                {
                    "prompt": "【日本一高い山】富士山が日本で一番高い山であることを述べる文を選択してください。",
                    "options": [
                        "富士山は日本で一番高い山です。",
                        "富士山は日本より一番高い山です。",
                        "富士山のほうが日本で高い山です。",
                        "富士山は日本でどちらが高い山です。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「日本で一番高い山です」が最上級の標準表現です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「家族の中で誰が一番背が高いですか」における疑問詞「誰（だれ）」の選択理由は何ですか。",
                    "options": [
                        "比較対象が集団の中の「人」であるため。",
                        "比較対象が「物」であるため。",
                        "比較対象が「場所」であるため。",
                        "比較対象が「時間」であるため。"
                    ],
                    "answerIndex": 0,
                    "explanation": "人が対象の最上級質問には疑問詞「誰（だれ／どなた）」を用います。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "最上級を表す副詞「the most / number one」を入力してください（ひらがな四文字）:",
                    "acceptedAnswers": [
                        "いちばん",
                        "イチバン",
                        "一番"
                    ],
                    "explanation": "最上級の副詞は「一番（いちばん）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u8-l5": {
        "id": "ja-u8-l5",
        "subject": "japanese",
        "unit": 8,
        "lessonNumber": 5,
        "title": "最上級構文「〜の中で一番〜です」",
        "level": "A2",
        "objective": "一定の集合・範囲の中から最高度の対象を指定する最上級表現「［範囲］の中で［対象］が一番［形容詞］です」の習得。",
        "presentation": {
            "explanation": "特定の集合やカテゴリー（時間・場所・集団）において、ある対象が最も際立った性質を持つことを表す最上級構文を学びます。\n\n【最上級構文の構造】\n・構文：［集合・範囲］の 中で ［疑問詞／対象］が 一番 ［形容詞］ですか／です。\n・意味：Among [range], [subject] is the most [adjective].\n\n【範囲指定と疑問詞の呼応】\n・場所の範囲（「日本で」「世界で」） → 「どこが一番〜ですか」\n・時間の範囲（「一年の中で」「季節の中で」） → 「いつ／どの季節が一番〜ですか」\n・事物の範囲（「スポーツの中で」「果物の中で」） → 「何／どれが一番〜ですか」\n・人物の範囲（「家族の中で」「クラスで」） → 「誰が一番〜ですか」",
            "examples": [
                {
                    "target": "日本料理の中で、寿司と天ぷらが一番世界中で知られています。",
                    "reading": "にほんりょうりの なかで、すしと てんぷらが いちばん せかいじゅうで しられています。",
                    "translation": "Among Japanese cuisine, sushi and tempura are the most widely known throughout the world."
                },
                {
                    "target": "四季の中でどの季節が一番過ごしやすいですか。春が一番穏やかです。",
                    "reading": "しきの なかで どの きせつが いちばん すごしやすいですか。はるが いちばん おだやかです。",
                    "translation": "Among the four seasons, which season is the most comfortable? Spring is the mildest."
                },
                {
                    "target": "世界で一番高い山はエベレストで、日本で一番高い山は富士山です。",
                    "reading": "せかいで いちばん たかい やまは エベレストで、にほんで いちばん たかい やまは ふじさんです。",
                    "translation": "The highest mountain in the world is Everest, and the highest mountain in Japan is Mount Fuji."
                },
                {
                    "target": "クラスの中で誰が一番早く課題を提出しましたか。",
                    "reading": "クラスの なかで だれが いちばん はやく かだいを行ていしゅつしましたか。",
                    "translation": "Who in the class submitted the assignment the earliest?"
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【買い物対話の指示詞と比較】複数のカメラを見比べて店員に相談する自然な対話を選択してください。",
                    "options": [
                        "「この黒いカメラとその銀色のカメラと、どちらのほうが軽いですか。」「こちらの黒いカメラのほうが軽いです。」",
                        "「このカメラとそれカメラと、どちらが軽いですでした。」「これです。」",
                        "「あのカメラとこのカメラと、だれが軽いですか。」「黒いです。」",
                        "「このカメラがそのカメラより軽いですですか。」「はい、軽いです。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "近称・中称の指示詞「この」「その」と比較構文「どちらのほうが〜」「こちらのほうが〜」が正確に連動しています。"
                },
                {
                    "prompt": "【旅行先での最上級質問】地元の人にこの地域で最も有名な名所を尋ねる表現はどれですか。",
                    "options": [
                        "この町の中で、どこが一番有名な観光地ですか。",
                        "この町の中で、どちらが一番有名ですか。",
                        "この町より、だれが有名ですか。",
                        "この町は一番有名な観光地でしたか。"
                    ],
                    "answerIndex": 0,
                    "explanation": "場所の範囲からの最上級質問は「［範囲］の中で、どこが一番〜ですか」を用います。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【総合比較の意思決定】複数の商品から性能と価格を比較して最終決定する文を選択してください。",
                    "options": [
                        "あの製品は少し高価ですが、機能が一番優れているので、これにします。",
                        "あの製品は少し高価ですが、機能がどちらが優れているので、それにします。",
                        "あの製品は少し高価ですから、機能がより優れているでした。",
                        "あの製品は高価でしたので、どれにします。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「機能が一番優れている（最上級）ので、これにします（決定）」の論理展開が自然です。"
                },
                {
                    "prompt": "【交通機関の比較選択】目的地への最適な移動手段を述べる文を選択してください。",
                    "options": [
                        "時間はかかりますが、電車のほうがタクシーよりずっと安いです。",
                        "時間はかかりますが、電車のほうがタクシーの中で安いです。",
                        "時間はかかりますが、電車よりタクシーのほうが安いです。",
                        "時間はかかりますが、電車がタクシーに一番安いです。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「電車のほうがタクシーよりずっと安いです」が二者比較として正確です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「二者比較」と「最上級」を組み合わせた表現として文法的に完全なものはどれですか。",
                    "options": [
                        "クラスの中で田中さんが一番背が高いですが、山田さんも佐藤さんより高いです。",
                        "クラスの中で田中さんがどちらが背が高いですが、山田さんのほうが高いです。",
                        "クラスより田中さんが一番高いですが、山田さんの中で高いです。",
                        "クラスの中で田中さんがより高いですが、山田さんも佐藤さん一番です。"
                    ],
                    "answerIndex": 0,
                    "explanation": "最上級「クラスの中で一番高い」と比較「山田さんも佐藤さんより高い」が正しく使い分けられています。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "二者比較で優位な方に付く形式名詞を入力してください（ひらがな二文字）:",
                    "acceptedAnswers": [
                        "ほう",
                        "ホウ",
                        "方"
                    ],
                    "explanation": "「〜の【ほう】が」の語は「ほう（方）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u9-l1": {
        "id": "ja-u9-l1",
        "subject": "japanese",
        "unit": 9,
        "lessonNumber": 1,
        "title": "移動動詞と助詞「へ」「に」「で」（乗り物と移動手段）",
        "level": "A2",
        "objective": "移動動詞（行く・来る・帰る）と方向助詞「へ」、着点助詞「に」、手段・交通機関を表す助詞「で」の使い分け。",
        "presentation": {
            "explanation": "空間的移動を表す動詞と、それらに結びつく格助詞体系（へ・に・で）の文法機能を学びます。\n\n【移動表現の三代助詞】\n１．方向助詞「へ（発音は e）」：移動の向かう方角・目的地（例：「京都へ行きます」）。\n２．着点・目的地助詞「に」：移動の到達点（例：「駅に着きます」「東京に行きます」）。\n３．手段助詞「で」：移動に用いる交通機関・手段（例：「電車で行きます」「タクシーで帰ります」）。\n４．例外：「歩いて（あるいて）」は副詞的用法のため助詞「で」を付けません（「歩きで行きます」ではなく「歩いて行きます」）。",
            "examples": [
                {
                    "target": "毎朝地下鉄で大学へ通っています。",
                    "reading": "まいあさ ちかてつで だいがくへ かよっています。",
                    "translation": "Every morning I commute to the university by subway."
                },
                {
                    "target": "新幹線で東京駅から新大阪駅まで二時間半で行きます。",
                    "reading": "しんかんせんで とうきょうえきから しんおおさかえきまで にじかんはん で いきます。",
                    "translation": "I go from Tokyo Station to Shin-Osaka Station by bullet train in two and a half hours."
                },
                {
                    "target": "駅からホテルまで歩いて約十分かかります。",
                    "reading": "えきから ホテルまで あるいて やくじゅっぷん かかります。",
                    "translation": "It takes about ten minutes on foot from the station to the hotel."
                },
                {
                    "target": "空港から市内へはリムジンバスで行くのが一番便利です。",
                    "reading": "くうこうから しないへは リムジンバスで いくのが いちばん べんりです。",
                    "translation": "Taking a limousine bus from the airport to downtown is the most convenient."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【移動空間を表す助詞「を」】「交差点を右に曲がる」「橋を渡る」における助詞「を」の文法機能は何ですか。",
                    "options": [
                        "移動動作が通過・離脱する空間や場所を示す格助詞。",
                        "動作の目的物を示す格助詞。",
                        "動作を行う手段を示す助詞。",
                        "移動の目的地を示す助詞。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「曲がる」「渡る」「歩く」「通る」などの移動動詞において、通過する場所には助詞「を」を用います。"
                },
                {
                    "prompt": "【道案内の指示表現】「次の信号を左に曲がって、まっすぐ進んでください」の正しい日本語表現を選択してください。",
                    "options": [
                        "次の信号を左に曲がって、まっすぐ進んでください。",
                        "次の信号で左を曲がりて、まっすぐ進むてください。",
                        "次の信号に左へ曲がるで、まっすぐ進みます。",
                        "次の信号へ左に曲がりながら、まっすぐ進みましょう。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「信号を（通過点）＋ 左に（方向）曲がって、まっすぐ進んでください」が自然な道案内です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【郵便局への道案内】交差点を曲がり直進した先にある郵便局の場所を説明する文を選択してください。",
                    "options": [
                        "この交差点を右に曲がって、二百メートルほどまっすぐ進むと左手に大きな郵便局があります。",
                        "この交差点に右を曲がりて、郵便局を行きます。",
                        "この交差点から右で曲がると、郵便局がありますでした。",
                        "この交差点へ右に曲がったので、郵便局へ行きました。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「交差点を右に曲がって、まっすぐ進むと左手に〜があります」が正確な経路説明です。"
                },
                {
                    "prompt": "【信号と横断歩道の指示】信号で横断歩道を渡って目的地に行くよう案内する文を選択してください。",
                    "options": [
                        "次の信号で横断歩道を渡って、角のコンビニの隣に目的地があります。",
                        "次の信号で横断歩道に渡るて、コンビニの隣に行きます。",
                        "次の信号を横断歩道で渡りて、コンビニがあります。",
                        "次の信号へ横断歩道が渡って、コンビニを見ました。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「横断歩道を渡って」が通過動作として正確です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「橋を渡る」の「を」と同じ文法機能を持つ助詞「を」を含む文はどれですか。",
                    "options": [
                        "毎朝公園【を】散歩します。（通過空間の「を」）",
                        "毎朝りんご【を】食べます。（目的語の「を」）",
                        "本【を】買いました。（目的語の「を」）",
                        "手紙【を】書きます。（目的語の「を」）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「公園を散歩する」「道を歩く」「空を飛ぶ」の「を」は移動・通過空間を表します。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "「straight / directly」を意味する副詞を入力してください（ひらがな四文字）:",
                    "acceptedAnswers": [
                        "まっすぐ",
                        "マッスグ",
                        "真っ直ぐ"
                    ],
                    "explanation": "直進を表す副詞は「まっすぐ」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u9-l2": {
        "id": "ja-u9-l2",
        "subject": "japanese",
        "unit": 9,
        "lessonNumber": 2,
        "title": "方向・位置の表現（右・左・まっすぐ・角・交差点）",
        "level": "A2",
        "objective": "道案内における空間位置名詞（右・左・前・後ろ・向かい・隣・角・交差点）と位置助詞「に」の運用。",
        "presentation": {
            "explanation": "街中での道案内や位置関係の正確な説明に不可欠な位置語彙と空間把握構文を学びます。\n\n【基本位置語彙】\n・右（みぎ）／左（ひだり）／前（まえ）／後ろ（うしろ）\n・まっすぐ（直進）／突き当たり（つきあたり：道の終わり）\n・交差点（こうさてん）／角（かど）／信号（しんごう）／横断歩道（おうだんほどう）\n\n【相対的位置関係の表現】\n・「［名詞A］の向かいに［名詞B］があります」（B is across from A）\n・「［名詞A］と［名詞B］の間にあります」（It is between A and B）\n・「［名詞A］の隣（となり）にあります」（It is next to A）",
            "examples": [
                {
                    "target": "郵便局は銀行の隣で、コンビニの向かい側にあります。",
                    "reading": "ゆうびんきょくは ぎんこうの となりで、コンビニの むかいがわに あります。",
                    "translation": "The post office is next to the bank and across from the convenience store."
                },
                {
                    "target": "この道をまっすぐ行くと、大きな交差点が見えてきます。",
                    "reading": "この みちを まっすぐ いくと、おおきな こうさてんが みえてきます。",
                    "translation": "If you go straight down this street, you will see a large intersection."
                },
                {
                    "target": "突き当たりを右に曲がったところに交番があります。",
                    "reading": "つきあたりを みぎに まがった ところに こうばんが あります。",
                    "translation": "At the end of the street, after turning right, there is a police box."
                },
                {
                    "target": "駅前の信号の手前に薬局があります。",
                    "reading": "えきまえの しんごうの てまえに やっきょくが あります。",
                    "translation": "There is a pharmacy right before the traffic light in front of the station."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【交通機関の乗降助詞】「電車に乗る」「バスを降りる」における助詞「に」と「を」の使い分けとして正しいものはどれですか。",
                    "options": [
                        "乗る対象（接触・着点）には「に」、降りる対象（離脱場所）には「を」を用いる。",
                        "乗る対象に「を」、降りる対象に「に」を用いる。",
                        "両方とも「で」を用いる。",
                        "両方とも「へ」を用いる。"
                    ],
                    "answerIndex": 0,
                    "explanation": "交通機関に乗るときは「［乗物］に 乗る」、降りるときは離脱の助詞を用いて「［乗物］を 降りる」となります。"
                },
                {
                    "prompt": "【電車の乗換案内】新宿駅で別の路線に乗り換える指示文として正しいものはどれですか。",
                    "options": [
                        "新宿駅で山手線から中央線に乗り換えてください。",
                        "新宿駅を山手線で中央線を乗り換えてください。",
                        "新宿駅に山手線の中央線へ乗り換えます。",
                        "新宿駅へ山手線に中央線が乗り換えてください。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「［場所］で ［旧路線］から ［新路線］に 乗り換える」が標準的な乗換構文です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【バスの降車合図】次の停留所でバスを降りることを運転手に伝える文を選択してください。",
                    "options": [
                        "すみません、次のバス停で降ります。",
                        "すみません、次のバス停を乗ります。",
                        "すみません、次のバス停に降りますでした。",
                        "すみません、次のバス停で乗り換えますでした。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「次のバス停で降ります」が最も自然な降車宣言です。"
                },
                {
                    "prompt": "【交通手段の伝達】毎日地下鉄を使って会社へ通勤していることを述べる文を選択してください。",
                    "options": [
                        "私は毎朝地下鉄で会社へ通っています。",
                        "私は毎朝地下鉄を会社に通っています。",
                        "私は毎朝地下鉄に会社を通っています。",
                        "私は毎朝地下鉄へ会社を通っています。"
                    ],
                    "answerIndex": 0,
                    "explanation": "交通手段には助詞「で（地下鉄で）」を用います。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「乗る」「降りる」「乗り換える」の活用グループ（動詞分類）の組み合わせはどれですか。",
                    "options": [
                        "乗る（一類） / 降りる（二類・上一段） / 乗り換える（二類・下一段）",
                        "乗る（二類） / 降りる（一類） / 乗り換える（三類）",
                        "すべて一類動詞",
                        "すべて二類動詞"
                    ],
                    "answerIndex": 0,
                    "explanation": "乗る＝乗ります（一類）、降りる＝降ります（二類）、乗り換える＝乗り換えます（二類）です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "電車やバスから出ることを意味する動詞「お＿＿＿」の漢字またはひらがなを入力してください:",
                    "acceptedAnswers": [
                        "降ります",
                        "おります",
                        "オリマス",
                        "降りる",
                        "おりる"
                    ],
                    "explanation": "「降ります（降車する）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u9-l3": {
        "id": "ja-u9-l3",
        "subject": "japanese",
        "unit": 9,
        "lessonNumber": 3,
        "title": "経路指示動詞（曲がる・渡る・通る・沿って進む）",
        "level": "A2",
        "objective": "経路通過を表す動詞（曲がる・渡る・通る・進む）と通過点を表す助詞「を」の文法機能。",
        "presentation": {
            "explanation": "道案内の動作動詞と、通過する空間・経路を表す格助詞「を」の独特な文法機能を学びます。\n\n【通過を表す助詞「を」】\n・一般に助詞「を」は他動詞の目的語を表しますが、移動動詞とともに用いると「通過する場所・離れる空間」を表します。\n　・「交差点を右に曲がる」（Turn right AT the intersection）\n　・「橋（はし）を渡る」（Cross OVER the bridge）\n　・「公園を通る（とおる）」（Pass THROUGH the park）\n　・「川に沿って（そって）歩く」（Walk ALONG the river）",
            "examples": [
                {
                    "target": "二つ目の信号を左に曲がって、橋を渡ってください。",
                    "reading": "ふたつめの しんごうを ひだりに まがって、はしを わたってください。",
                    "translation": "Please turn left at the second traffic light and cross the bridge."
                },
                {
                    "target": "商店街を通り抜けると、歴史ある神社に到着します。",
                    "reading": "しょうてんがいを とおりぬけると、れきしある じんじゃに とうちゃくします。",
                    "translation": "When you pass through the shopping arcade, you will arrive at a historic shrine."
                },
                {
                    "target": "川沿いの道を五分ほど進むと、美術館の入口があります。",
                    "reading": "かわぞいの みちを ごふんほど すすむと、びじゅつかんの いりぐちが あります。",
                    "translation": "If you follow the road along the river for about five minutes, you will find the museum entrance."
                },
                {
                    "target": "横断歩道を渡ってすぐのビルが目的地です。",
                    "reading": "おうだんほどうを わたりって すぐの ビルが もくてきちです。",
                    "translation": "The building immediately after crossing the pedestrian crossing is the destination."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【所要時間を尋ねる構文】目的地までの所要時間を尋ねる標準的な表現はどれですか。",
                    "options": [
                        "ここから東京駅まで電車でどのくらい（どのぐらい）かかりますか。",
                        "ここから東京駅まで電車でいくらありますか。",
                        "ここから東京駅まで電車で何人がかかりますか。",
                        "ここから東京駅まで電車でどこへ行きますか。"
                    ],
                    "answerIndex": 0,
                    "explanation": "所要時間を尋ねる疑問詞は「どのくらい／どのぐらい（How long）」を用い、動詞「かかる（かかりますか）」に繋ぎます。"
                },
                {
                    "prompt": "【起点と終点「〜から〜まで」】移動の区間を表す助詞の組み合わせはどれですか。",
                    "options": [
                        "東京駅【から】京都駅【まで】（起点＝から / 終点＝まで）",
                        "東京駅【まで】京都駅【から】",
                        "東京駅【に】京都駅【へ】",
                        "東京駅【で】京都駅【を】"
                    ],
                    "answerIndex": 0,
                    "explanation": "出発点（起点）は「から」、到着点（終点・限度）は「まで」で表します。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【新幹線の所要時間伝達】東京から京都までの新幹線所要時間を説明する文を選択してください。",
                    "options": [
                        "東京駅から京都駅まで東海道新幹線のぞみ号で約二時間十五分かかります。",
                        "東京駅まで京都駅から新幹線で二時間十五分を行きます。",
                        "東京駅に京都駅へ新幹線を二時間十五分があります。",
                        "東京駅で京都駅の新幹線で二時間十五分でした。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜から〜まで〜で約［時間］かかります」が完璧な所要時間説明です。"
                },
                {
                    "prompt": "【徒歩での所要時間】駅からホテルまで歩いて約5分であることを述べる文を選択してください。",
                    "options": [
                        "駅からホテルまで歩いて五分ほどです（または 歩いて約五分かかります）。",
                        "駅からホテルまで歩くで五分があります。",
                        "駅からホテルまで歩きますと五分に行きます。",
                        "駅からホテルまで歩きながら五分でした。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「歩いて（て形手段）＋［時間］ほどです / かかります」と表現します。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "時間・費用を「要する・費やす」という意味を持つ自動詞はどれですか。",
                    "options": [
                        "かかる（かかります）",
                        "かける（かけます）",
                        "とる（とります）",
                        "する（します）"
                    ],
                    "answerIndex": 0,
                    "explanation": "時間や費用が必要である・費やされることを表す動詞は「かかる」です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "所要時間を表す動詞丁寧形「時間が＿＿＿」を入力してください（ひらがな五文字）:",
                    "acceptedAnswers": [
                        "かかります",
                        "カカリマス",
                        "掛かります"
                    ],
                    "explanation": "「かかります」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u9-l4": {
        "id": "ja-u9-l4",
        "subject": "japanese",
        "unit": 9,
        "lessonNumber": 4,
        "title": "鉄道・地下鉄の乗り換えと切符購入（乗り換え・何番線・特急券）",
        "level": "A2",
        "objective": "日本の鉄道利用における専門用語（改札・乗換・番線・各駅停車・快速・特急）と駅での質問表現。",
        "presentation": {
            "explanation": "日本の高度に発達した鉄道・地下鉄網を円滑に利用するための実践対話と用語を学びます。\n\n【鉄道システムの重要用語】\n・改札口（かいさつぐち）：Ticket gate / ICカード（Suica / Pasmo等）\n・乗り換え（のりかえ）：Transfer\n・番線（ばんせん）：Platform track（例：「三番線」）\n・列車の種別：普通（各駅停車）／快速（かいそく）／急行（きゅうこう）／特急（とっきゅう）\n・座席の指定：自由席（じゆうせき）⇔ 指定席（していせき）\n\n【駅員への確認フレーズ】\n・「この電車は新宿に停まりますか」（Does this train stop at Shinjuku?）\n・「京都へ行くにはどこで乗り換えたらいいですか」",
            "examples": [
                {
                    "target": "すみません、東京行きの上り電車は何番線から発車しますか。",
                    "reading": "すみません、とうきょうゆきの のぼりでんしゃは なんばんせんから はっしゃしますか。",
                    "translation": "Excuse me, which platform does the inbound train bound for Tokyo depart from?"
                },
                {
                    "target": "中央線の快速に乗って、御茶ノ水駅で総武線に乗り換えてください。",
                    "reading": "ちゅうおうせんの かいそくに のって、おちゃのみずえきで そうぶせんに のりかえて ください。",
                    "translation": "Please take the Chuo Line Rapid and transfer to the Sobu Line at Ochanomizu Station."
                },
                {
                    "target": "この特急列車に乗るには、乗車券のほかに特急券が必要です。",
                    "reading": "この とっきゅうれっしゃに のるには、じょうしゃけんの ほかに とっきゅうけんが ひつようです。",
                    "translation": "To board this limited express train, a limited express ticket is required in addition to the base fare ticket."
                },
                {
                    "target": "ICカードを改札機にタッチしてご入場ください。",
                    "reading": "ICカードを かいさつきに タッチして ごにゅうじょう ください。",
                    "translation": "Please touch your IC card on the ticket gate to enter."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【駅出口の問い合わせ】目的の施設に近い出口を駅員に尋ねる丁寧な表現はどれですか。",
                    "options": [
                        "すみません、国立博物館へ行くにはどの出口を出ればよろしいでしょうか。",
                        "おい、博物館の出口を教えろ。",
                        "博物館の出口はどこを出ますかでした。",
                        "博物館の出口を出てください。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜へ行くにはどの出口を出ればよろしいでしょうか」が最も洗練された問い合わせ表現です。"
                },
                {
                    "prompt": "【番線とホームの確認】空港行きの電車が何番線から発車するか確認する質問はどれですか。",
                    "options": [
                        "成田空港行きの特急電車は何番線（なんばんせん）から出ますか。",
                        "成田空港行きの特急電車は何番線に出ますか。",
                        "成田空港行きの特急電車は何番線を乗りますか。",
                        "成田空港行きの特急電車は何番線に行きますか。"
                    ],
                    "answerIndex": 0,
                    "explanation": "発車ホームを尋ねるときは「何番線から出ますか（発車しますか）」と言います。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【改札口の確認】目的地に行くための改札口を尋ねる文を選択してください。",
                    "options": [
                        "すみません、東口へ行くにはどちらの改札口を出ればいいですか。",
                        "すみません、東口へ行くには改札口がどこに入りますか。",
                        "すみません、東口へ行くには改札口を出ましたか。",
                        "すみません、東口へ行くには改札口を乗り換えますか。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「どちらの改札口を出ればいいですか」で適切な改札を確認します。"
                },
                {
                    "prompt": "【切符の購入】指定席券の購入を駅の窓口で申し出る文を選択してください。",
                    "options": [
                        "新大阪までの新幹線の指定席を大人二枚お願いします。",
                        "新大阪までの新幹線の指定席を大人二人で行きます。",
                        "新大阪までの新幹線の指定席が大人二枚ありますかでした。",
                        "新大阪までの新幹線の指定席を大人二枚に乗りたいでした。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「［区間］の［券種］を［枚数］お願いします」が窓口での定型購入表現です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "日本の鉄道における「各駅停車」「快速」「急行」「特急」の速度・停車駅の序列として正しいものはどれですか。",
                    "options": [
                        "特急（最速・停車駅最少） ＞ 急行 ＞ 快速 ＞ 各駅停車（普通）",
                        "各駅停車 ＞ 快速 ＞ 急行 ＞ 特急",
                        "快速 ＞ 特急 ＞ 急行 ＞ 各駅停車",
                        "すべて停車駅は同じである"
                    ],
                    "answerIndex": 0,
                    "explanation": "日本の列車種別は通常、特急（Limited Express）＞急行（Express）＞快速（Rapid）＞各駅停車（Local）の順に停車駅が少なくなります。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "電車の発着ホームの番号を表す助数詞を入力してください（漢字二文字またはひらがな五文字）:",
                    "acceptedAnswers": [
                        "番線",
                        "ばんせん",
                        "バンセン"
                    ],
                    "explanation": "ホームの番号は「番線（ばんせん）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u9-l5": {
        "id": "ja-u9-l5",
        "subject": "japanese",
        "unit": 9,
        "lessonNumber": 5,
        "title": "所要時間と距離表現（「〜から〜まで〜分かかります」）",
        "level": "A2",
        "objective": "起点「から」、終点「まで」、所要時間を表す「かかる」を用いた時間・距離計算の構文運用。",
        "presentation": {
            "explanation": "移動にかかる所要時間、距離、および費用を正確に表現・質問する構文を学びます。\n\n【所要時間構文の基本形】\n・構文：［起点］から ［終点］まで ［手段］で ［時間／費用］が かかります。\n・動詞「かかる」：時間や費用を「要する・費やす」意味の自動詞です。\n・疑問構文：「〜から〜までどのくらい／何分／いくらかかりますか」\n\n【概数・近似を表す接尾辞】\n・「〜くらい／〜ぐらい」（about ...）：例「三十分くらい」\n・「〜ほど」（approximately ...）：やや改まった表現\n・「約〜（やく〜）」（approximately ...）：数値の前に付加（例：「約一時間」）",
            "examples": [
                {
                    "target": "成田空港から東京駅まで特急で約一時間かかります。",
                    "reading": "なりたくうこうから とうきょうえきまで とっきゅうで やくいちじかん かかります。",
                    "translation": "It takes approximately one hour from Narita Airport to Tokyo Station by limited express."
                },
                {
                    "target": "自宅からオフィスまでドアツードアで四十五分ほどです。",
                    "reading": "じたくから オフィスまで ドアツードアで よんじゅうごふん ほどです。",
                    "translation": "From my home to the office is about forty-five minutes door-to-door."
                },
                {
                    "target": "京都駅から奈良駅まで近鉄電車でいくらぐらいかかりますか。",
                    "reading": "きょうとえきから ならえきまで きんてつでんしゃで いくらぐらい かかりますか。",
                    "translation": "How much does it cost from Kyoto Station to Nara Station on the Kintetsu Railway?"
                },
                {
                    "target": "ここから目的地までは歩いて五分もかかりません。",
                    "reading": "ここから もくてきちまでは あるいて ごふんも かかりません。",
                    "translation": "From here to the destination does not even take five minutes on foot."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【道に迷った時の声かけ対話】通行人に道を尋ねる際の丁寧な会話の開始として最も適切なものはどれですか。",
                    "options": [
                        "「すみません、道に迷ってしまったのですが、浅草寺へはどう行けばいいでしょうか。」",
                        "「おい、浅草寺へ連れて行け。」",
                        "「浅草寺はどこへ行きますか。」",
                        "「道がありませんでした。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「すみません、道に迷ってしまったのですが、〜へはどう行けばいいでしょうか」が最も丁寧で自然です。"
                },
                {
                    "prompt": "【複合経路の案内】歩行と電車を組み合わせた経路説明として正しいものはどれですか。",
                    "options": [
                        "駅まで五分歩いて、地下鉄に乗って、三つ目の駅で降りてください。",
                        "駅に五分歩くで、地下鉄を行きて、三つ目の駅を降りるでした。",
                        "駅へ五分歩きながら、地下鉄を乗って、三つ目の駅に降りました。",
                        "駅から五分歩いたので、地下鉄を乗り換えてくださいでした。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「歩いて（て形）」「乗って（て形）」「降りてください（依頼）」とて形接続で順序良く説明します。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【目的地までのトータル案内対話】外国人観光客にホテルへの行き方を親切に教える対話を選択してください。",
                    "options": [
                        "「あの角を左に曲がって少し歩くと、右手にホテルが見えますよ。」「ありがとうございます。」",
                        "「あの角が左へ曲がると、ホテルを見ました。」「さようなら。」",
                        "「あの角を曲がらないでください。」「はい。」",
                        "「ホテルはどこにもありません。」「そうですか。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「角を左に曲がって少し歩くと、右手に〜が見えますよ」が親切で正確な道案内です。"
                },
                {
                    "prompt": "【ICカード・切符の使い方案内】改札口でのICカード（Suica/Pasmo等）の利用法を説明する文を選択してください。",
                    "options": [
                        "改札機のセンサーにICカードをタッチすると扉が開きます。",
                        "改札機にICカードを投げて入ります。",
                        "改札機をICカードで壊します。",
                        "改札機からICカードを食べます。"
                    ],
                    "answerIndex": 0,
                    "explanation": "日本の自動改札機では「センサーにICカードをタッチする」ことで通過します。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "道案内で「右手に郵便局があります」という表現の「右手（みぎて）」の意味は何ですか。",
                    "options": [
                        "進行方向に向かって右側の位置（on your right hand side）。",
                        "自分自身の右の腕そのもの。",
                        "右利きの人のこと。",
                        "右折すること。"
                    ],
                    "answerIndex": 0,
                    "explanation": "道案内における「右手（みぎて）／左手（ひだりて）」は進行方向に対する左右の側を指します。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "「turn（曲がる）」の動詞丁寧形を入力してください（ひらがな五文字）:",
                    "acceptedAnswers": [
                        "まがります",
                        "マガリマス",
                        "曲がります"
                    ],
                    "explanation": "「曲がります（まがります）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u10-l1": {
        "id": "ja-u10-l1",
        "subject": "japanese",
        "unit": 10,
        "lessonNumber": 1,
        "title": "玄関の作法と靴の脱ぎ方（「お邪魔します」「上がってください」）",
        "level": "A2",
        "objective": "日本の住居の境界線「玄関（げんかん）」における脱靴マナー、挨拶「お邪魔します」「どうぞお上がりください」。",
        "presentation": {
            "explanation": "日本の住居空間における聖俗・内外の境界である「玄関（げんかん）」での儀礼と作法を学びます。\n\n【玄関の空間構造と文化的意義】\n・上がり框（あがりがまち）：土足の「たたき」と清潔な「室内」を分ける段差。\n・脱靴の作法：靴を脱いだ後、靴のつま先を外（玄関ドア側）に向けて端に揃えるのが礼儀です。\n\n【訪問時の定番挨拶】\n１．訪問者：「お邪魔します（おじゃまします）」（I am intruding / Thank you for having me.）\n２．受入側：「どうぞお上がりください（おあがりください）」（Please step up / come in.）\n３．退去時：「お邪魔しました」（Thank you for your hospitality.）",
            "examples": [
                {
                    "target": "お邪魔します。本日はお招きいただきありがとうございます。",
                    "reading": "おじゃまします。ほんじつは おまねきいただき ありがとうございます。",
                    "translation": "Pardon the intrusion. Thank you very much for inviting me today."
                },
                {
                    "target": "どうぞ靴を脱いでお上がりください。スリッパをどうぞ。",
                    "reading": "どうぞ くつを ぬいで おあがりください。スリッパを どうぞ。",
                    "translation": "Please take off your shoes and step up. Here are slippers for you."
                },
                {
                    "target": "脱いだ靴はつま先を玄関側に向けてきちんと揃えましょう。",
                    "reading": "ぬいだ くつは つまさきを げんかんがわに むけて きちんと そろえましょう。",
                    "translation": "Let us neatly align the removed shoes with the toes pointing toward the entrance."
                },
                {
                    "target": "大変長居をしてしまいました。そろそろ失礼いたします。",
                    "reading": "たいへん ながいを してしまいました。そろそろ しつれいいたします。",
                    "translation": "I have stayed very long. It is about time I took my leave."
                }
            ],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【玄関での文化作法】日本の住宅に入る際の正しいマナーを表す文はどれですか。",
                    "options": [
                        "日本の家では玄関で必ず靴を脱いで、スリッパに履き替えます。",
                        "日本の家では靴を履いたまま畳の部屋に上がります。",
                        "玄関で靴を脱がないでそのままベッドに行きます。",
                        "玄関でスリッパを脱いで靴を履きます。"
                    ],
                    "answerIndex": 0,
                    "explanation": "日本の住居文化では玄関（上がり框）で靴を脱ぎ、外の汚れを室内に持ち込まないのが鉄則です。"
                },
                {
                    "prompt": "【部屋の広さの単位】日本の和室の広さを表す伝統的な助数詞はどれですか。",
                    "options": [
                        "畳（じょう / ろくじょう＝六畳）",
                        "本（ほん）",
                        "枚（まい）",
                        "匹（ひき）"
                    ],
                    "answerIndex": 0,
                    "explanation": "部屋の広さは畳（たたみ）の枚数を基準にした「〜畳（じょう）」で表します。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【部屋の特徴の説明】アパートの部屋が南向きで日当たりが良い六畳の和室であることを述べる文を選択してください。",
                    "options": [
                        "私の新しいアパートは南向きの日当たりが良い六畳の和室です。",
                        "私の新しいアパートは南向きの畳が六本ある洋室です。",
                        "私のアパートは南向きで六畳の玄関でした。",
                        "私のアパートは南向きに日当たりが悪い和室です。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「南向きの日当たりが良い六畳の和室」が住居の好条件を的確に表しています。"
                },
                {
                    "prompt": "【畳の部屋でのマナー】和室（畳の部屋）に入る際のマナーとして正しい文を選択してください。",
                    "options": [
                        "畳の部屋に入る時はスリッパを脱いで、靴下か素足で上がります。",
                        "畳の上では厚底の靴を履いたまま歩きます。",
                        "畳の上にはスリッパをたくさん並べます。",
                        "畳の部屋では土足が基本です。"
                    ],
                    "answerIndex": 0,
                    "explanation": "畳を傷めないため、和室に入る直前にスリッパを脱ぐのが日本の作法です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "和室に見られる伝統的な建具「障子（しょうじ）」と「襖（ふすま）」の違いは何ですか。",
                    "options": [
                        "障子は木枠に薄い和紙を貼り光を通すもの、襖は厚い紙や布で部屋を仕切るもの。",
                        "障子がドアで襖が窓である。",
                        "障子は金属製で襖はガラス製である。",
                        "全く同一のものである。"
                    ],
                    "answerIndex": 0,
                    "explanation": "障子は採光機能を持つ半透明の建具、襖は部屋を間仕切り遮光する建具です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "日本の家で靴を脱ぐ入り口の空間を入力してください（漢字二文字またはひらがな四文字）:",
                    "acceptedAnswers": [
                        "玄関",
                        "げんかん",
                        "ゲンカン"
                    ],
                    "explanation": "「玄関（げんかん）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u10-l2": {
        "id": "ja-u10-l2",
        "subject": "japanese",
        "unit": 10,
        "lessonNumber": 2,
        "title": "和室の構造と伝統建具（畳・襖・障子・床の間）",
        "level": "A2",
        "objective": "和室の伝統的構成要素（畳・襖・障子・床の間・掛け軸）と、敷居を踏まないなどの伝統的礼儀作法。",
        "presentation": {
            "explanation": "日本の伝統的居住空間である「和室（わしつ）」の構造と、そこに宿る美意識・所作を学びます。\n\n【和室の構成要素】\n・畳（たたみ）：い草で織られた日本の伝統的床材。畳の「へり（縁）」を踏まないのが礼儀です。\n・襖（ふすま）：部屋を仕切る不透明な引き戸。\n・障子（しょうじ）：木枠に和紙を貼った採光用建具。\n・床の間（とこのま）：掛け軸や生け花を飾る最も神聖な一段高い空間。床の間の前が「上座（かみざ）」となります。\n・敷居（しきい）：建具のレールとなる木。敷居を踏むことは家長や家屋への非礼とされます。",
            "examples": [
                {
                    "target": "和室では畳の縁や敷居を踏まないように歩くのが作法です。",
                    "reading": "わしつでは たたみの へりや しきいを ふまないように あるくのが さほうです。",
                    "translation": "In a Japanese-style room, it is proper etiquette to walk without stepping on the tatami borders or door sills."
                },
                {
                    "target": "床の間には季節の掛け軸と美しい生け花が飾られています。",
                    "reading": "とこのまには きせつの かけじくと うつくしい いけばなが かざられています。",
                    "translation": "In the alcove, a seasonal hanging scroll and beautiful flower arrangement are displayed."
                },
                {
                    "target": "障子を通して入ってくる柔らかな自然光が和室を照らします。",
                    "reading": "しょうじを とおして はいってくる やわらかな しぜんこうが わしつを てらします。",
                    "translation": "Soft natural light entering through the paper screens illuminates the Japanese room."
                },
                {
                    "target": "お客様には床の間に一番近い上座にお座りいただきます。",
                    "reading": "おきゃくさまには とこのまに いちばん ちかい かみざに おすわりいただきます。",
                    "translation": "We seat our guests in the seat of honor closest to the alcove."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【家具の配置構文】「机の上に本を置く」「壁にカレンダーを掛ける」の格助詞構文として正しいものはどれですか。",
                    "options": [
                        "［場所］に ［物］を 置く／掛ける（着点＝に、対象＝を）",
                        "［場所］を ［物］に 置く／掛ける",
                        "［場所］で ［物］が 置く／掛ける",
                        "［場所］から ［物］で 置く／掛ける"
                    ],
                    "answerIndex": 0,
                    "explanation": "物をある場所に配置・固定する動詞は「［着点］に ［目的物］を ［動詞］」を用います。"
                },
                {
                    "prompt": "【部屋の家具配置の描写】机の隣に本棚を配置したことを述べる文を選択してください。",
                    "options": [
                        "机の隣に大きな本棚を置きました。",
                        "机の隣を大きな本棚に置きました。",
                        "机の隣で大きな本棚が置きました。",
                        "机の隣から大きな本棚を置きましたでした。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「机の隣に本棚を置きました」が正確です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【電化製品の配置】冷蔵庫をキッチンの隅に設置したことを説明する文を選択してください。",
                    "options": [
                        "台所（キッチン）の隅に新しい冷蔵庫を設置しました。",
                        "台所の隅を冷蔵庫に設置しました。",
                        "台所の隅で冷蔵庫が設置しました。",
                        "台所の隅から冷蔵庫を設置しましたでした。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「台所の隅に冷蔵庫を設置しました」が正確です。"
                },
                {
                    "prompt": "【壁飾りの描写】部屋の壁に美しい絵を掛けてあることを述べる文を選択してください。",
                    "options": [
                        "リビングの壁に富士山の絵を掛けてあります。",
                        "リビングの壁を絵に掛けました。",
                        "リビングの壁で絵を掛けるでした。",
                        "リビングの壁から絵が掛かりますでした。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「壁に絵を掛けてあります（結果状態の存続）」が自然です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "位置を表す名詞「上・下・前・後ろ・隣・中」の助詞結合規則として正しいものはどれですか。",
                    "options": [
                        "机の【上】に、椅子の【下】に、テレビの【隣】に（名詞 ＋ の ＋ 位置名詞 ＋ に）",
                        "机上に、椅子下に、テレビ隣に（助詞なし）",
                        "机を上に、椅子を下に",
                        "机で上に、椅子で下に"
                    ],
                    "answerIndex": 0,
                    "explanation": "位置関係は「［名詞］の［位置名詞］に」の形で示します。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "物をある場所に位置づける動詞「置く（おく）」の丁寧形を入力してください（ひらがな四文字）:",
                    "acceptedAnswers": [
                        "おきます",
                        "オキマス",
                        "置きます"
                    ],
                    "explanation": "「置きます（おきます）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u10-l3": {
        "id": "ja-u10-l3",
        "subject": "japanese",
        "unit": 10,
        "lessonNumber": 3,
        "title": "洋室・間取り用語と家具家電配置（LDK・ユニットバス・押し入れ）",
        "level": "A2",
        "objective": "日本の不動産・間取り表記（1K, 2LDK, ユニットバス）と家具・家電の配置表現。",
        "presentation": {
            "explanation": "日本の現代的な住宅様式、不動産の間取り略語、および家具家電の空間配置用語を学びます。\n\n【間取り略語の基礎】\n・L（Living：居間）、D（Dining：食事室）、K（Kitchen：台所）\n・1R（ワンルーム：キッチンが同室）、1K（キッチンが仕切られた1部屋）、2LDK（居室2部屋＋LDK）\n・ユニットバス（UB）：浴室・洗面台・トイレが一体または防水成型された構造\n・押し入れ（おしいれ）：布団を収納する和風の大型収納スペース\n・クローゼット：洋服をハンガーで掛ける洋風収納",
            "examples": [
                {
                    "target": "このマンションの間取りは広々とした南向きの2LDKです。",
                    "reading": "この マンションの まどりのは ひろびろとした みなみむきの 2LDKです。",
                    "translation": "The floor plan of this condominium is a spacious south-facing 2LDK."
                },
                {
                    "target": "押し入れの上段に予備の布団と毛布を収納してあります。",
                    "reading": "おしいれの じょうだんに よびの ふとんと もうふを しゅうのうして あります。",
                    "translation": "Spare futons and blankets are stored in the upper section of the closet."
                },
                {
                    "target": "リビングルームの窓際にテレビとソファを配置しました。",
                    "reading": "リビングルームの まどぎわに テレビと ソファを はいちしました。",
                    "translation": "We arranged the television and sofa by the window in the living room."
                },
                {
                    "target": "お風呂とトイレが分かれているバストイレ別の物件を探しています。",
                    "reading": "おふろと トイレが わかれている バストイレべつの ぶっけんを さがしています。",
                    "translation": "I am looking for a property with a separate bathroom and toilet."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【ゴミの分別カテゴリー】日本の自治体における主なゴミ分別の種類の組み合わせとして正しいものはどれですか。",
                    "options": [
                        "燃えるゴミ（可燃） / 燃えないゴミ（不燃） / 資源ゴミ（ビン・缶・ペットボトル） / 粗大ゴミ",
                        "高いゴミ / 安いゴミ / 綺麗なゴミ",
                        "朝のゴミ / 夜のゴミ",
                        "分別は一切不要ですべて一括回収"
                    ],
                    "answerIndex": 0,
                    "explanation": "日本のゴミ分別は「燃えるゴミ」「燃えないゴミ」「資源ゴミ」「粗大ゴミ」などに厳格に分類されます。"
                },
                {
                    "prompt": "【期限を表す助詞「までに」】「朝八時までに出してください」における「までに」の文法機能は何ですか。",
                    "options": [
                        "動作を完了させる期限・デッドライン（by 〜）を示す。",
                        "動作を継続する終了時点（until 〜）を示す。",
                        "動作の理由を示す。",
                        "動作の出発点を示す。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜までに」は期限（by）を表し、「〜まで（until）」の継続と明確に区別されます。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【ゴミ出しルールの伝達】燃えるゴミの回収曜日と時間を正しく伝える文を選択してください。",
                    "options": [
                        "ゴミの分別ルールに従って、燃えるゴミは火曜日と金曜日の朝八時までに出してください。",
                        "ゴミのルールに従って、燃えるゴミは火曜日の夜中に出しなさい。",
                        "ゴミの分別に従って、燃えないゴミを火曜日に全部捨てますでした。",
                        "ゴミを分けないでいつでも出してください。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「火曜日と金曜日の朝八時までに出してください」が正確な案内です。"
                },
                {
                    "prompt": "【資源ゴミのリサイクル作法】ペットボトルを捨てる際のマナーを説明する文を選択してください。",
                    "options": [
                        "ペットボトルは中を水で洗って、キャップとラベルを外して資源ゴミに出します。",
                        "ペットボトルは中身を入れたまま燃えるゴミに捨てます。",
                        "ペットボトルは道路に捨てます。",
                        "ペットボトルは分解して燃やします。"
                    ],
                    "answerIndex": 0,
                    "explanation": "中をすすぎ、キャップ・ラベルを分別するのが日本のリサイクル作法です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「八時まで勉強します」と「八時までに宿題を出します」の違いは何ですか。",
                    "options": [
                        "前者は八時まで勉強を継続すること（until）、後者は八時以前に提出を完了すること（by）。",
                        "前者が期限で後者が継続である。",
                        "両方とも全く同じ意味である。",
                        "前者が過去形で後者が未来形である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「まで＝継続（until）」、「までに＝期限・完了点（by）」です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "期限を表す助詞「by」を入力してください（ひらがな三文字）:",
                    "acceptedAnswers": [
                        "までに",
                        "マデニ"
                    ],
                    "explanation": "期限の助詞は「までに」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u10-l4": {
        "id": "ja-u10-l4",
        "subject": "japanese",
        "unit": 10,
        "lessonNumber": 4,
        "title": "日本のゴミ分別ルールとリサイクル（可燃・不燃・資源ゴミ）",
        "level": "A2",
        "objective": "自治体ごとのゴミ分別（燃えるゴミ・燃えないゴミ・資源ゴミ・粗大ゴミ）と回収曜日のルール。",
        "presentation": {
            "explanation": "日本で生活する上で極めて厳格に定められているゴミの分別とリサイクル規則を学びます。\n\n【主要なゴミの区分】\n１．燃えるゴミ（可燃ゴミ：かねんごみ）：生ゴミ・紙くず・木くず\n２．燃えないゴミ（不燃ゴミ：ふねんごみ）：陶器・ガラス・金属類\n３．資源ゴミ（しげんごみ）：\n　・ペットボトル（キャップとラベルを剥がし、中を水洗いする）\n　・缶（アルミ缶・スチール缶）／ビン／古紙（新聞・段ボール）\n４．粗大ゴミ（そだいごみ）：家具などの大型廃棄物（事前予約と有料処理券が必要）\n\n【排出ルール】\n・指定された収集日の朝（8時までなど）に指定の集積所（ゴミステーション）へ出します。",
            "examples": [
                {
                    "target": "ペットボトルはキャップとラベルを外して、水洗いしてから出してください。",
                    "reading": "ペットボトルは キャップと ラベルを はずして、みずあらいしてから だしてください。",
                    "translation": "Please remove the caps and labels from plastic bottles and rinse them with water before disposing."
                },
                {
                    "target": "この地域では火曜日と金曜日が燃えるゴミの収集日です。",
                    "reading": "この ちいきでは かようびと きんようびが もえるごみの しゅうしゅうびです。",
                    "translation": "In this area, Tuesday and Friday are the collection days for burnable trash."
                },
                {
                    "target": "粗大ゴミを処分するには、事前に自治体のセンターへ予約が必要です。",
                    "reading": "そだいごみを しょぶんするには、じぜんに じちたいの センターへ よやくが ひつようです。",
                    "translation": "To dispose of bulky trash, a reservation with the municipal center is required in advance."
                },
                {
                    "target": "ダンボールは紐で十字にしっかり縛って資源ゴミの日に出します。",
                    "reading": "ダンボールは ひもで じゅうじに しっかり しばって しげんごみの ひに だします。",
                    "translation": "Cardboard boxes should be tied firmly in a cross with string and put out on recyclable trash day."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【集合住宅（マンション・アパート）での騒音配慮】夜間の生活マナーとして適切な表現はどれですか。",
                    "options": [
                        "夜遅くは洗濯機や掃除機を使わず、テレビの音量にも配慮してください。",
                        "夜中は大音量で音楽を流してください。",
                        "夜中に廊下で大声で歌いましょう。",
                        "いつでも自由に大きな音を出してよい。"
                    ],
                    "answerIndex": 0,
                    "explanation": "日本の集合住宅では壁が薄い場合も多く、夜間の騒音（洗濯機・掃除機・足音・大声）への配慮が不可欠です。"
                },
                {
                    "prompt": "【共用部分の利用マナー】マンションの廊下や階段（共用部）の利用ルールとして正しいものはどれですか。",
                    "options": [
                        "避難経路となる共用廊下に私物を放置してはいけません。",
                        "共用廊下に私物を積み上げて保管する。",
                        "階段でゴミを燃やす。",
                        "共用廊下を個人の部屋として使う。"
                    ],
                    "answerIndex": 0,
                    "explanation": "共用廊下や非常階段は防災・避難通路であるため、私物の放置は禁止されています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【近隣への配慮の伝達】夜間に隣人に迷惑をかけないよう注意を促す文を選択してください。",
                    "options": [
                        "夜十時以降は近所迷惑になりますので、大きな音を立てないでください。",
                        "夜十時以降は近所迷惑ですから、大きな音を立ててください。",
                        "夜十時以降に掃除機を掛けましょう。",
                        "夜十時以降は騒音を立てるべきです。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「近所迷惑になりますので、大きな音を立てないでください」が適切な注意喚起です。"
                },
                {
                    "prompt": "【共用エントランスの施錠】オートロックのドアを確実に閉めるよう案内する文を選択してください。",
                    "options": [
                        "防犯のため、エントランスのオートロックのドアは必ず閉めてください。",
                        "防犯のため、ドアを開け放しておいてください。",
                        "エントランスで鍵を壊してください。",
                        "エントランスに入ってはいけません。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「防犯のため、〜必ず閉めてください」が安全マナーの基本です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "日本のアパート・マンション契約時に支払う「敷金（しききん）」と「礼金（れいきん）」の違いは何ですか。",
                    "options": [
                        "敷金は退去時の修繕費用等を担保する預託金（返還あり）、礼金は大家への謝礼金（返還なし）。",
                        "敷金が大家へのプレゼントで、礼金が預託金である。",
                        "両方とも毎月支払う家賃のことである。",
                        "両方とも全額必ず返還される。"
                    ],
                    "answerIndex": 0,
                    "explanation": "敷金は担保としての預かり金（差引後返還）、礼金は慣習的な贈与金（返還なし）です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "他人の迷惑になる騒がしい音を意味する語を入力してください（漢字二文字またはひらがな四文字）:",
                    "acceptedAnswers": [
                        "騒音",
                        "そうおん",
                        "ソウオン"
                    ],
                    "explanation": "「騒音（そうおん）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u10-l5": {
        "id": "ja-u10-l5",
        "subject": "japanese",
        "unit": 10,
        "lessonNumber": 5,
        "title": "近隣への挨拶と集合住宅の生活マナー",
        "level": "A2",
        "objective": "引っ越し時の近隣挨拶（粗品と挨拶回り）、騒音防止マナー、共同住宅のルール遵守。",
        "presentation": {
            "explanation": "共同住宅（アパート・マンション）における円滑な近所付き合いと生活騒音防止のマナーを学びます。\n\n【引っ越し挨拶の慣習】\n・「向こう三軒両隣（むこうさんげんりょうどなり）」：両隣と上下階の住人へ簡単な粗品（タオルや菓子）を持参して挨拶します。\n・挨拶フレーズ：「隣に越してきました［名前］です。どうぞよろしくお願いいたします」\n\n【生活騒音と共同生活マナー】\n・夜間の足音、洗濯機・掃除機の使用時間（21時以降は控えるのが一般的）。\n・ベランダ（バルコニー）での喫煙禁止や避難経路の確保。",
            "examples": [
                {
                    "target": "隣に引っ越してまいりました田中と申します。今後ともよろしくお願いいたします。",
                    "reading": "となりに ひっこしてまいりました たなかと もうします。こんごとも よろしく おねがいいたします。",
                    "translation": "My name is Tanaka and I have moved in next door. I look forward to your kind acquaintance."
                },
                {
                    "target": "夜遅い時間には足音やテレビの音量を控えるのが共同住宅のマナーです。",
                    "reading": "よる おそい じかんには あしおとや テレビの おんりょうを ひかえるのが きょうどうじゅうたくの マナーです。",
                    "translation": "At late hours of the night, restraining footsteps and TV volume is standard apartment etiquette."
                },
                {
                    "target": "ベランダは非常時の避難経路になっているため、物を置かないでください。",
                    "reading": "ベランダは ひじょうじの ひなんけいろに なっているため、ものを おかないで ください。",
                    "translation": "Because the balcony serves as an emergency evacuation route, please do not place objects there."
                },
                {
                    "target": "小さなお子様がいる場合は、床に防音マットを敷くと安心です。",
                    "reading": "ちいさな おこさまが いる ばあいは、ゆかに ぼうおんマットを しくと あんしんです。",
                    "translation": "If you have small children, laying soundproof mats on the floor gives peace of mind."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【引っ越し時の近隣挨拶対話】引っ越し後に隣の部屋の住人に挨拶する日本の伝統的対話を選択してください。",
                    "options": [
                        "「初めまして、隣の三〇二号室に越してきた田中です。これからどうぞよろしくお願いいたします。」",
                        "「おい、隣に入ったから静かにしろ。」",
                        "「隣の部屋を買いました。さようなら。」",
                        "「引っ越しましたのでお金をください。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「隣の〜号室に越してきた［名前］です。これからどうぞよろしくお願いいたします」が円満な近隣関係を築く定型挨拶です。"
                },
                {
                    "prompt": "【不動産屋での内見対話】不動産仲介業者に希望条件を伝える表現はどれですか。",
                    "options": [
                        "「駅から徒歩十分以内で、日当たりが良いバス・トイレ別の部屋を探しています。」",
                        "「駅から一番遠くて暗い部屋をください。」",
                        "「部屋はどこでもいいからタダにしてください。」",
                        "「家賃が高い部屋だけ見ます。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「駅から徒歩〜分以内で、日当たりの良い〜を探しています」が部屋探しの標準的要望表現です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【部屋の眺望と環境の感想】内見した部屋の窓からの眺めが素晴らしいことを称賛する文を選択してください。",
                    "options": [
                        "部屋の窓を開けると、心地よい風と美しい緑の庭が見えます。",
                        "部屋の窓を開けると、ゴミがたくさん落ちていました。",
                        "部屋の窓が壊れていて閉まりませんでした。",
                        "部屋の窓を開けないでくださいでした。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「心地よい風と美しい緑の庭が見えます」が住居環境の良さを描写しています。"
                },
                {
                    "prompt": "【住居契約の決定】内見した物件を気に入り、契約手続きに進むことを伝える文を選択してください。",
                    "options": [
                        "とても気に入りましたので、この部屋で契約をお願いいたします。",
                        "あまり好きではありませんが、今すぐ壊します。",
                        "この部屋は狭すぎるので無料にしてください。",
                        "契約をキャンセルして帰ります。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「とても気に入りましたので、この部屋で契約をお願いいたします」が明確で丁寧な意思表示です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "日本の住宅賃貸における「1K」「1DK」「1LDK」の頭文字「D」「L」「K」の正しい意味はどれですか。",
                    "options": [
                        "D＝ダイニング（Dining）、L＝リビング（Living）、K＝キッチン（Kitchen）",
                        "D＝ドア（Door）、L＝ライト（Light）、K＝キー（Key）",
                        "D＝デスク（Desk）、L＝ランドリー（Laundry）、K＝クローゼット（Kitchen）",
                        "特に定まった英語の意味はない"
                    ],
                    "answerIndex": 0,
                    "explanation": "L＝居間（Living）、D＝食事室（Dining）、K＝台所（Kitchen）です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "引っ越し挨拶での結びの言葉「よろしく＿＿＿いたします」の空欄を入力してください（ひらがな四文字）:",
                    "acceptedAnswers": [
                        "おねがい",
                        "オネガイ",
                        "お願い"
                    ],
                    "explanation": "「よろしく【お願い】いたします」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u11-l1": {
        "id": "ja-u11-l1",
        "subject": "japanese",
        "unit": 11,
        "lessonNumber": 1,
        "title": "身体部位の語彙体系（頭・喉・胸・腹・腰・関節）",
        "level": "A2",
        "objective": "人体の各部位（頭・首・喉・肩・胸・お腹・背中・腰・手足・関節）の名称と痛みの局在化。",
        "presentation": {
            "explanation": "医療機関や日常会話で身体の不調や怪我を正確に伝えるための解剖部位語彙を学びます。\n\n【主要身体部位の語彙】\n・頭（あたま）／顔（かお）／目（め）／耳（みみ）／鼻（はな）／口（くち）／歯（は）\n・首（くび）／喉（のど：内側の咽頭）\n・肩（かた）／胸（むね）／背中（せなか）／腰（こし）\n・お腹（おなか：腹部）／胃（い）／腸（ちょう）\n・腕（うで）／手（て）／指（ゆび）／脚・足（あし）／膝（ひざ）／関節（かんせつ）\n\n【部位と痛みの結びつき】\n・「［部位］が痛い（いたいです）」：例「喉が痛いです」「腰が痛いです」\n・「［部位］が重い・だるい」：例「肩が凝る（こる）」「足がだるい」",
            "examples": [
                {
                    "target": "昨夜から喉が痛くて、唾を飲み込むのが辛いです。",
                    "reading": "さくやから のどが いたくて、つばを のみこむのが つらいです。",
                    "translation": "My throat has been hurting since last night, and it is painful to swallow saliva."
                },
                {
                    "target": "重い荷物を持ち上げたときに腰を痛めてしまいました。",
                    "reading": "おもい にもつを もちあげた ときに こしを いためて しまいました。",
                    "translation": "I hurt my lower back when I lifted heavy luggage."
                },
                {
                    "target": "風邪を引いて頭がズキズキと激しく痛みます。",
                    "reading": "かぜを ひいて あたまが ズキズキと はげしく いたみます。",
                    "translation": "I caught a cold and my head is throbbing with severe pain."
                },
                {
                    "target": "長時間パソコンを使って作業したため肩がひどく凝りました。",
                    "reading": "ちょうじかん パソコンを つかって さぎょうしたため かたが ひどく こりました。",
                    "translation": "Because I worked on the computer for long hours, my shoulders became very stiff."
                }
            ],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【身体症状の伝達構文】「頭が痛い」「熱がある」など症状を述べる標準的な構文として正しいものはどれですか。",
                    "options": [
                        "［身体部位］が 痛い（いたいです）／［症状］が ある（出ます）",
                        "［身体部位］を 痛いです",
                        "［身体部位］に 痛いがあります",
                        "［身体部位］で 痛いをします"
                    ],
                    "answerIndex": 0,
                    "explanation": "身体の痛みや不調は「［部位］が 痛い」「熱が ある」「咳が 出る」のように主格助詞「が」で表します。"
                },
                {
                    "prompt": "【喉の激しい痛みと発熱の伝達】昨夜から熱が出て喉が痛いことを医師に伝える文を選択してください。",
                    "options": [
                        "昨夜から高熱が出て、喉が激しく痛みます。",
                        "昨夜から高熱を入って、喉を痛くしました。",
                        "昨夜から高熱があって、喉に痛みますでした。",
                        "昨夜から高熱が行って、喉が痛いでした。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「昨夜から高熱が出て、喉が激しく痛みます」が自然で正確な病状説明です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【胃腸の不調の伝達】お腹が痛くて吐き気があることを説明する文を選択してください。",
                    "options": [
                        "朝からお腹が痛くて、吐き気（はきけ）がします。",
                        "朝からお腹を痛くして、吐き気を持ちます。",
                        "朝からお腹で痛くて、吐き気が痛みます。",
                        "朝からお腹に痛いですから、吐き気を行きます。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「お腹が痛くて（て形並列）吐き気がします」が正確です。"
                },
                {
                    "prompt": "【インフルエンザ検査の依頼】医師に検査を丁寧に依頼する文を選択してください。",
                    "options": [
                        "インフルエンザの検査をお願いできますでしょうか。",
                        "インフルエンザを検査してくださいでした。",
                        "インフルエンザの検査をさせます。",
                        "インフルエンザの検査に頼みます。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜の検査をお願いできますでしょうか」が丁寧で適切な依頼表現です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "風邪の諸症状を表す動詞の組み合わせとして正しいものはどれですか。",
                    "options": [
                        "熱が【出る】 / 咳が【出る】 / 喉が【腫れる】 / 寒気が【する】",
                        "熱が腫れる / 咳がする / 喉が出る / 寒気が痛い",
                        "熱を取る / 咳を飲む / 喉をする",
                        "すべて動詞「する」のみを用いる"
                    ],
                    "answerIndex": 0,
                    "explanation": "熱が出る・咳が出る・喉が腫れる・寒気がするが正しいコロケーションです。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "「throat（のど）」の漢字またはひらがなを入力してください:",
                    "acceptedAnswers": [
                        "喉",
                        "のど",
                        "ノド"
                    ],
                    "explanation": "「喉（のど）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u11-l2": {
        "id": "ja-u11-l2",
        "subject": "japanese",
        "unit": 11,
        "lessonNumber": 2,
        "title": "病状・症状の表現（熱がある・咳が出る・痛む・吐き気）",
        "level": "A2",
        "objective": "急性・慢性の症状表現（発熱・咳・鼻水・悪寒・吐き気・めまい・下痢）とオノマトペによる痛みの描写。",
        "presentation": {
            "explanation": "体調不良や自覚症状を医師や周囲に詳細かつニュアンス豊かに伝える表現技法を学びます。\n\n【主要症状の定型表現】\n１．熱（ねつ）：熱がある（Have a fever）／熱を測る（Take temperature）\n２．呼吸器症状：咳（せき）が出る／痰（たん）が絡む／鼻水（はなみず）が出る／鼻が詰まる\n３．消化器症状：吐き気（はきけ）がする／胃もたれ／下痢（げり）をする／便秘（べんぴ）\n４．全身症状：悪寒（おかん）がする／めまいがする／倦怠感（けんたいかん：体がだるい）\n\n【痛みのオノマトペ】\n・ズキズキ（脈打つ頭痛や歯痛）\n・キリキリ（胃が差し込むような鋭い痛み）\n・チクチク（針で刺すような痛み）\n・ヒリヒリ（火傷や日焼けの表面的な痛み）",
            "examples": [
                {
                    "target": "今朝熱を測ったら三十八度五分もあり、悪寒がします。",
                    "reading": "けさ ねつを はかったら さんじゅうはちど ごぶも あり、おかんが します。",
                    "translation": "When I measured my fever this morning, it was 38.5 degrees, and I have chills."
                },
                {
                    "target": "二日前から咳が止まらず、夜もなかなか眠れません。",
                    "reading": "ふつかまえから せきが とまらず、よるも なかなか ねむれません。",
                    "translation": "The cough hasn't stopped since two days ago, and I can hardly sleep at night."
                },
                {
                    "target": "胃がキリキリと差し込むように痛んで食欲がありません。",
                    "reading": "いが キリキリと さしこむように いたんで しょくよくが ありません。",
                    "translation": "My stomach has a sharp pinching pain and I have no appetite."
                },
                {
                    "target": "立ち上がったときに急にめまいがしてふらつきました。",
                    "reading": "たちあがった ときに きゅうに めまいが して ふらつきました。",
                    "translation": "When I stood up, I suddenly felt dizzy and unsteady on my feet."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【病院受付での定型案内】受付スタッフが患者に保険証の提示と問診票記入を求める丁寧な表現はどれですか。",
                    "options": [
                        "健康保険証はお持ちでしょうか。こちらの問診票にご記入の上、待合室でお待ちください。",
                        "保険証を出せ。問診票を書け。",
                        "保険証を持ちましたか。問診票を待合室で書いてくださいでした。",
                        "問診票はいりません。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「健康保険証はお持ちでしょうか。問診票にご記入の上、待合室でお待ちください」が医療機関の標準的敬語です。"
                },
                {
                    "prompt": "【診療科の選択】目の異常（結膜炎・視力低下・充血等）の際に受診すべき診療科はどれですか。",
                    "options": [
                        "眼科（がんか）",
                        "内科（ないか）",
                        "皮膚科（ひふか）",
                        "歯科（しか）"
                    ],
                    "answerIndex": 0,
                    "explanation": "目の疾患は「眼科（がんか）」を受診します。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【初診の受付申告】初めてこの病院に来たことを受付で伝える文を選択してください。",
                    "options": [
                        "初診（しょしん）なのですが、診察をお願いできますでしょうか。",
                        "再診（さいしん）ですが、初めて来ました。",
                        "病院を初めて買いました。",
                        "診察を終わりたいです。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「初診なのですが、診察をお願いできますでしょうか」が的確です。"
                },
                {
                    "prompt": "【アレルギー情報の申告】ペニシリンなど特定の薬にアレルギーがあることを問診票や口頭で伝える文を選択してください。",
                    "options": [
                        "特定の抗生物質にアレルギーがあります。",
                        "特定の抗生物質がアレルギーをします。",
                        "アレルギーを抗生物質で飲みます。",
                        "抗生物質のアレルギーになりましたでした。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜にアレルギーがあります」が正確な申告構文です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「内科」「外科」「皮膚科」「耳鼻咽喉科」の診療対象の組み合わせとして正しいものはどれですか。",
                    "options": [
                        "内科＝風邪や内臓疾患 / 外科＝手術や外傷 / 皮膚科＝肌のトラブル / 耳鼻咽喉科＝耳・鼻・喉",
                        "内科＝歯の治療 / 外科＝目の治療",
                        "皮膚科＝骨折 / 耳鼻咽喉科＝胃潰瘍",
                        "すべて同じ病気を治療する"
                    ],
                    "answerIndex": 0,
                    "explanation": "日本の診療科区分：内科（Internal Medicine）、外科（Surgery）、皮膚科（Dermatology）、耳鼻咽喉科（ENT）です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "初めて病院を受診することを表す二字熟語を入力してください（「しょしん」）:",
                    "acceptedAnswers": [
                        "初診",
                        "しょしん",
                        "ショシン"
                    ],
                    "explanation": "「初診（しょしん）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u11-l3": {
        "id": "ja-u11-l3",
        "subject": "japanese",
        "unit": 11,
        "lessonNumber": 3,
        "title": "医療機関の受付と保険証提示（初診・問診票）",
        "level": "A2",
        "objective": "病院・クリニックでの受付手続き（初診・再診、健康保険証・マイナンバーカード提示、問診票の記入）。",
        "presentation": {
            "explanation": "日本の医療機関（クリニック・総合病院）を受診する際の手順と受付対話を学びます。\n\n【受診のステップと用語】\n１．初診（しょしん：初めての受診）⇔ 再診（さいしん：二回目以降）\n２．健康保険証（ほけんしょう）またはマイナンバーカードの提示。日本の保険証があれば自己負担は原則1〜3割となります。\n３．問診票（もんしんひょう）の記入：\n　・氏名、生年月日、住所、連絡先\n　・主な症状（主訴：しゅそ）、いつから始まったか\n　・既往歴（きおうれき：過去の大きな病気）\n　・アレルギーの有無、妊娠・授乳中か否か",
            "examples": [
                {
                    "target": "初診ですが、本日予約なしで診察を受けることはできますか。",
                    "reading": "しょしんですが、ほんじつ よやくなしで しんさつを うけることは できますか。",
                    "translation": "This is my first visit, but is it possible to see a doctor today without an appointment?"
                },
                {
                    "target": "こちらの問診票にお名前と現在の症状をご記入の上お待ちください。",
                    "reading": "こちらの もんしんひょうに おなまえと げんざいの しょうじょうを ごきにゅうの うえ おまちください。",
                    "translation": "Please fill out your name and current symptoms on this medical questionnaire and wait."
                },
                {
                    "target": "健康保険証とお薬手帳を受付の窓口にご提示ください。",
                    "reading": "けんこうほけんしょうと おくすりてちょうを うけつけの まどぐちに ごていじ ください。",
                    "translation": "Please present your health insurance card and medication notebook at the reception window."
                },
                {
                    "target": "過去に薬で発疹などのアレルギー反応が出たことはありますか。",
                    "reading": "かこに くすりで ほっしんなどの アレルギーはんのうが でたことは ありますか。",
                    "translation": "Have you ever had allergic reactions such as rashes to medicine in the past?"
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【診察室での医師の指示】聴診器を当てる際に医師が発する標準的な指示表現はどれですか。",
                    "options": [
                        "「息を大きく吸って、ゆっくり吐いてください。」",
                        "「息を吸わないで死んでください。」",
                        "「呼吸を走ってください。」",
                        "「息を食べてください。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "胸部聴診時の定型指示は「息を吸って（吸入）、吐いて（呼出）ください」です。"
                },
                {
                    "prompt": "【触診時の部位特定】腹部を触診しながら痛みの位置を確認する質問はどれですか。",
                    "options": [
                        "「お腹のどのあたりが痛みますか。ここを押すと痛いですか。」",
                        "「お腹がどこにありますか。」",
                        "「お腹を全部食べましたか。」",
                        "「痛いは何ですか。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「どのあたりが痛みますか。ここを押すと痛いですか」が触診の基本対話です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【症状の持続期間の伝達】三日前から症状が続いていることを説明する文を選択してください。",
                    "options": [
                        "三日前の朝からずっと頭痛と微熱が続いています。",
                        "三日前から頭痛が続けましたでした。",
                        "三日前に頭痛が止まりました。",
                        "三日後の朝から頭痛がします。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「三日前の朝からずっと〜が続いています（継続）」が正確です。"
                },
                {
                    "prompt": "【喉の診察への応対】医師に「口を大きく開けて『あー』と言ってください」と言われた時の対応を選択してください。",
                    "options": [
                        "口を大きく開けて「あー」と声を出し喉を見せる。",
                        "口を固く閉じて何も言わない。",
                        "立ち上がって診察室を出る。",
                        "目を閉じて寝る。"
                    ],
                    "answerIndex": 0,
                    "explanation": "喉の視診の指示に従い、口を開けて発声します。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "呼吸の動作を表す動詞ペア「すう（吸う）」と「はく（吐く）」の活用形（て形）はどれですか。",
                    "options": [
                        "吸って（すって・促音便） / 吐いて（はいて・イ音便）",
                        "吸いて / 吐って",
                        "吸んで / 吐んで",
                        "吸して / 吐して"
                    ],
                    "answerIndex": 0,
                    "explanation": "吸う＝吸って（ワ行五段・促音便）、吐く＝吐いて（カ行五段・イ音便）です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "「breathe in（息を吸う）」の動詞丁寧形を入力してください（ひらがな四文字）:",
                    "acceptedAnswers": [
                        "すいます",
                        "スイマス",
                        "吸います"
                    ],
                    "explanation": "「吸います（すいます）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u11-l4": {
        "id": "ja-u11-l4",
        "subject": "japanese",
        "unit": 11,
        "lessonNumber": 4,
        "title": "医師との問診対話と症状の詳細説明（「いつから痛みますか」）",
        "level": "A2",
        "objective": "診察室での医師とのやり取り（発症時期、痛みの性質、触診時の応答）と指示の聞き取り。",
        "presentation": {
            "explanation": "診察室内における医師からの問診と、自身の病状を正確に説明するための対話プロトコルを習得します。\n\n【医師からの典型的な質問】\n・「今日はどうされましたか」（What brings you in today?）\n・「いつ頃からその症状が始まりましたか」\n・「ここを押すと痛みますか」（Does it hurt when I press here?）\n・「口を大きく開けて舌を出してください」\n\n【患者側の説明表現】\n・「一昨日の夜から急に熱が上がりました」\n・「深呼吸をすると胸のあたりが痛みます」\n・「市販の風邪薬を飲みましたが、効きませんでした」",
            "examples": [
                {
                    "target": "息を吸うときに右の脇腹が痛むのですが、何の病気でしょうか。",
                    "reading": "いきを すうときに みぎの わきばらが いたむのですが、なんの びょうきでしょうか。",
                    "translation": "My right flank hurts when I inhale, what kind of condition could it be?"
                },
                {
                    "target": "喉がかなり赤く腫れていますので、抗生物質を処方しておきます。",
                    "reading": "のどが かなり あかく はれていますので、こうせいぶっしつを しょほうして おきます。",
                    "translation": "Your throat is quite red and swollen, so I will prescribe antibiotics."
                },
                {
                    "target": "念のため血液検査と胸部レントゲン撮影を行いましょう。",
                    "reading": "ねんのため けつえきけんさと きょうぶ レントゲンさつえいを おこないましょう。",
                    "translation": "Just to be sure, let us conduct a blood test and a chest X-ray."
                },
                {
                    "target": "無理をせず、今夜は水分を十分に補給して安静にしてください。",
                    "reading": "むりを せず、こんやは すいぶんを じゅうぶんに ほきゅうして あんせいに してください。",
                    "translation": "Do not overexert yourself; hydrate well tonight and stay resting quietly."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【調剤薬局での服薬指導】薬剤師による薬の服用方法の説明として文法的に完全なものはどれですか。",
                    "options": [
                        "このお薬は毎食後三十分以内に水またはぬるま湯で一錠服用してください。",
                        "このお薬は毎食後にお酒で十錠飲んでください。",
                        "このお薬は飲まないで捨ててください。",
                        "このお薬は水なしで噛んで遊んでください。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「毎食後三十分以内に水またはぬるま湯で一錠服用してください」が正確な服薬指導表現です。"
                },
                {
                    "prompt": "【服薬タイミングの用語】「食前」「食後」「食間」「就寝前」の正しい意味はどれですか。",
                    "options": [
                        "食前＝食事の20〜30分前 / 食後＝食後30分以内 / 食間＝食事と食事の間（空腹時） / 就寝前＝寝る前",
                        "食間＝食事中にご飯と一緒に飲むこと",
                        "食前＝食事の3時間前",
                        "すべて同じ時間帯である"
                    ],
                    "answerIndex": 0,
                    "explanation": "「食間」は食事中ではなく「食事と食事の間（前の食事から約2時間後）」を意味します。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【薬の副作用に関する注意】眠気が出る薬についての注意喚起文を選択してください。",
                    "options": [
                        "この薬を服用した後は、車の運転や危険な機械の操作は避けてください。",
                        "この薬を飲んだらすぐに高速道路で運転してください。",
                        "この薬を飲むと絶対に眠くなりません。",
                        "この薬は運転中に飲むと元気になります。"
                    ],
                    "answerIndex": 0,
                    "explanation": "眠気を催す薬に対して「車の運転や機械操作は避けてください」と指導します。"
                },
                {
                    "prompt": "【お薬手帳の提示】調剤薬局の窓口でお薬手帳を渡す文を選択してください。",
                    "options": [
                        "処方箋とお薬手帳をお願いします。",
                        "処方箋を破いて捨てました。",
                        "お薬手帳を買いません。",
                        "薬を全部タダにしてください。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「処方箋とお薬手帳をお願いします」が薬局窓口での定型です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "錠剤（タブレット）を数える助数詞はどれですか。",
                    "options": [
                        "錠（じょう / いちじょう＝一錠、にじょう＝二錠）",
                        "本（ほん）",
                        "枚（まい）",
                        "個（こ）"
                    ],
                    "answerIndex": 0,
                    "explanation": "薬の錠剤・カプセルは「〜錠（じょう）」で数えます。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "薬を飲むことを表す漢語動詞「＿＿＿する（ふくようする）」の漢字またはひらがなを入力してください:",
                    "acceptedAnswers": [
                        "服用",
                        "ふくよう",
                        "フクヨウ"
                    ],
                    "explanation": "「服用（ふくよう）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u11-l5": {
        "id": "ja-u11-l5",
        "subject": "japanese",
        "unit": 11,
        "lessonNumber": 5,
        "title": "薬局での処方箋調剤と服薬指導（食前・食後・用法用量）",
        "level": "A2",
        "objective": "調剤薬局での処方箋（しょほうせん）提出、服薬タイミング（食前・食後・食間・就寝前）と注意点の理解。",
        "presentation": {
            "explanation": "院外薬局（調剤薬局）での薬の受け取り手順と、薬剤師による服薬指導の用語を学びます。\n\n【服薬タイミングの専門用語】\n１．食前（しょくぜん）：食事の約30分前（胃の中に食べ物がない状態）\n２．食後（しょくご）：食事の直後〜約30分後（最も一般的、胃壁を保護）\n３．食間（しょっかん）：食事と食事の間（食事の約2時間後。※食事中に飲む意味ではありません）\n４．就寝前（しゅうしんまえ）：寝る前の約30分〜直前\n５．頓服（とんぷく）：症状が出たときだけ一時的に服用する薬（解熱鎮痛剤など）\n\n【注意表示】\n・「眠気（ねむけ）が出ることがあるので、運転は避けてください」\n・「水またはぬるま湯でお飲みください」",
            "examples": [
                {
                    "target": "こちらの抗生剤は毎食後、一回一錠ずつ必ず最後まで飲み切ってください。",
                    "reading": "こちらの こうせいざいは まいしょくご、いっかい いちじょうずつ かならず さいごまで のみきって ください。",
                    "translation": "Please be sure to take one tablet of this antibiotic after every meal and finish them all completely."
                },
                {
                    "target": "熱が三十八度五分以上出たときだけ、この頓服薬を服用してください。",
                    "reading": "ねつが さんじゅうはちど ごぶいじょう でたときだけ、この とんぷくやくを ふくようして ください。",
                    "translation": "Only when your fever rises above 38.5 degrees, please take this as-needed medicine."
                },
                {
                    "target": "このお薬を飲むと眠気を催すことがありますので、車の運転はお控えください。",
                    "reading": "この おくすりを のむと ねむけを もよおすことが ありますので、くるまの うんてんは おひかえください。",
                    "translation": "Because taking this medication may induce drowsiness, please refrain from driving cars."
                },
                {
                    "target": "処方箋の有効期限は発行日を含めて四日間となっております。",
                    "reading": "しょほうせんの ゆうこうきげんは はっこうびを ふくめて よっかかんと なっております。",
                    "translation": "The expiration period of the prescription is four days including the date of issue."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【病院から薬局への一連対話】診察終了時の医師・患者の挨拶として適切なものはどれですか。",
                    "options": [
                        "医師：「お大事にどうぞ。」 患者：「ありがとうございました。」",
                        "医師：「さようなら、二度と来るな。」 患者：「はい。」",
                        "医師：「ごちそうさまでした。」 患者：「いただきます。」",
                        "医師：「失礼します。」 患者：「ごめんなさい。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "医療従事者から患者への別れの挨拶は「お大事に（どうぞ）」が使われます。"
                },
                {
                    "prompt": "【体調の経過観察の対話】薬を飲んでも症状が改善しない場合の相談文を選択してください。",
                    "options": [
                        "三日間薬を服用しましたが熱が下がりません。もう一度診ていただけますか。",
                        "薬を飲んだら元気になったので病院を壊します。",
                        "熱が上がったので薬を全部捨てました。",
                        "診察を拒否します。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜を服用しましたが［症状］が下がりません。もう一度診ていただけますか」が的確な再診依頼です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【救急時の相談窓口】急病時に救急車を呼ぶべきか迷った際の日本の相談ダイヤルはどれですか。",
                    "options": [
                        "救急安心センター事業「#7119」または「119番」",
                        "110番（警察）",
                        "117番（時報）",
                        "104番（電話番号案内）"
                    ],
                    "answerIndex": 0,
                    "explanation": "救急車要請は119番、救急医療相談は#7119です。"
                },
                {
                    "prompt": "【同僚の体調不良への気遣い】職場で具合が悪そうな同僚に対する親切な声かけを選択してください。",
                    "options": [
                        "顔色が良くないようですが、大丈夫ですか。無理をしないで早めに休んでくださいね。",
                        "顔色が悪いからもっと働け。",
                        "病院に行かずに残業してください。",
                        "病気は気のせいです。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「顔色が良くないようですが、大丈夫ですか。無理をしないで〜」が思いやりのある自然な表現です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "病気の人に対して回復を祈る決まり文句はどれですか。",
                    "options": [
                        "お大事に（お大事になさってください）",
                        "ごちそうさまでした",
                        "いってらっしゃい",
                        "お邪魔しました"
                    ],
                    "answerIndex": 0,
                    "explanation": "病気や怪我の人には「お大事に（なさってください）」と声をかけます。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "病気の人にかける言葉「お＿＿＿に」の空欄を入力してください（ひらがな三文字）:",
                    "acceptedAnswers": [
                        "だいじ",
                        "ダイジ",
                        "大事"
                    ],
                    "explanation": "「お【大事（だいじ）】に」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u12-l1": {
        "id": "ja-u12-l1",
        "subject": "japanese",
        "unit": 12,
        "lessonNumber": 1,
        "title": "動詞の意向形（行こう・食べよう・しよう・来よう）の活用規則",
        "level": "A2",
        "objective": "動詞の意向形（普通形意志・勧誘形）の活用規則（五段オ段長音、一段＋よう、三類動詞）の完全習得。",
        "presentation": {
            "explanation": "動詞の意向形（いこうけい：Volitional form）の形態論的活用規則を体系的に学びます。\n\n【意向形の活用規則】\n１．五段動詞（一類）：語尾のウ段音を「オ段音 ＋ う」に変換します。\n　・行く → 行こう（いこう）\n　・話す → 話そう（はなそう）\n　・待つ → 待とう（まとう）\n　・飲む → 飲もう（のもう）\n２．一段動詞（二類）：語尾の「る」を取り除いて「よう」を接続します。\n　・食べる → 食べよう（たべよう）\n　・見る → 見よう（みよう）\n３．不規則動詞（三類）：\n　・する → しよう\n　・来る → 来よう（こよう ※語幹の読みが「こ」に変化）",
            "examples": [
                {
                    "target": "疲れたから少し休憩して、美味しいお茶でも飲もう。",
                    "reading": "つかれたから すこし きゅうけいして、おいしい おちゃでも のもう。",
                    "translation": "Since we are tired, let's take a short break and drink some delicious tea or something."
                },
                {
                    "target": "今度の連休はみんなで温泉旅館に泊まりに行こう。",
                    "reading": "こんどの れんきゅうは みんなで おんせんりょかんに とまりに いこう。",
                    "translation": "Let's all go stay at a hot spring ryokan during the upcoming consecutive holidays."
                },
                {
                    "target": "明日のプレゼンテーションの準備を今夜中に終わらせよう。",
                    "reading": "あすの プレゼンテーションの じゅんびを こんやじゅうに おわらせよう。",
                    "translation": "Let's finish the preparations for tomorrow's presentation tonight."
                },
                {
                    "target": "分からない単語があれば、すぐに辞書を引いて調べよう。",
                    "reading": "わからない たんごが あれば、すぐに じしょを ひいて しらべよう。",
                    "translation": "If there are words we don't know, let's look them up in the dictionary immediately."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【動詞の意向形（Volitional form）の活用規則】動詞「行く（一類）」「食べる（二類）」「する（三類）」「来る（三類）」の意向形として正しい組み合わせはどれですか。",
                    "options": [
                        "行こう（いこう） / 食べよう（たべよう） / しよう / 来よう（こよう）",
                        "行こう / 食べろ / します / きよう",
                        "行きたい / 食べたい / したい / 来たい",
                        "行けば / 食べれば / すれば / 来れば"
                    ],
                    "answerIndex": 0,
                    "explanation": "意向形は一類：u→o段長音（行こう）、二類：る→よう（食べよう）、三類：しよう・来よう（こよう）となります。"
                },
                {
                    "prompt": "【意向形を用いた意志構文】週末に友達と美術館に行く予定・意志を述べる文を選択してください。",
                    "options": [
                        "今度の週末は友達と一緒に美術館の特別展を見に行こうと思っています。",
                        "今度の週末は友達と美術館を見に行きたいと思っていますでした。",
                        "今度の週末は友達と美術館を見に行きますと思っています。",
                        "今度の週末は友達と美術館を見に行こうでした。"
                    ],
                    "answerIndex": 0,
                    "explanation": "話し手の継続的な意志は「［動詞意向形］＋ と思っています」で表します。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【相手へのカジュアルな提案・勧誘】「今晩一緒に美味しいラーメンを食べに行こうよ」という意向形文を選択してください。",
                    "options": [
                        "今晩一緒に美味しいラーメンを食べに行こうよ。",
                        "今晩一緒に美味しいラーメンを食べに行きますよ。",
                        "今晩一緒に美味しいラーメンを食べに行ってよ。",
                        "今晩一緒に美味しいラーメンを食べに行きたいよ。"
                    ],
                    "answerIndex": 0,
                    "explanation": "親しい間柄での「〜しよう」という勧誘に意向形が単独で使われます。"
                },
                {
                    "prompt": "【旅行計画の策定】今年の夏休みに北海道を一周する計画を立てていることを述べる文を選択してください。",
                    "options": [
                        "今年の夏休みは北海道を一周旅行する計画を立てています。",
                        "今年の夏休みは北海道を一周旅行した計画でした。",
                        "今年の夏休みは北海道を一周旅行する予定を行きます。",
                        "今年の夏休みに北海道を一周旅行します計画です。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜旅行する計画を立てています」が将来の構想を的確に伝えます。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "三類動詞「来る（くる）」の意向形の発音（読み方）として正しいものはどれですか。",
                    "options": [
                        "こよう（来よう）",
                        "きよう",
                        "くよう",
                        "らいよう"
                    ],
                    "answerIndex": 0,
                    "explanation": "動詞「来る（くる）」の意向形は「来よう（こよう）」と読みます。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "動詞「話す（はなす）」の意向形を入力してください（ひらがな四文字）:",
                    "acceptedAnswers": [
                        "はなそう",
                        "ハナソウ",
                        "話そう"
                    ],
                    "explanation": "話す →「話そう（はなそう）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u12-l2": {
        "id": "ja-u12-l2",
        "subject": "japanese",
        "unit": 12,
        "lessonNumber": 2,
        "title": "意向形を用いた誘い・独り言（「〜ようと思う」「〜ようか」）",
        "level": "A2",
        "objective": "意向形を用いた親しい間柄での勧誘・提案、および自発的思考を表す「〜（よ）うと思う」構文。",
        "presentation": {
            "explanation": "意向形を応用した親密な対人コミュニケーションおよび内省的思考表現を学びます。\n\n【意向形の三大用法】\n１．親しい相手への誘い（「〜ましょう」のタメ口・普通形）：\n　・「そろそろ行こうか」（Shall we go now?）\n２．自分の心の中の独り言・自発的決意：\n　・「明日は早起きしよう」（I'm going to wake up early tomorrow!）\n３．思考表現「〜（よ）うと思う／思っています」：\n　・「日本に留学しようと思っています」（I am thinking of studying abroad in Japan.）\n　・「思っています」は現在継続している意志を表し、「思います」はその場での思いつきを表す傾向があります。",
            "examples": [
                {
                    "target": "来年から大学院に進学して、日本近代文学を研究しようと思っています。",
                    "reading": "らいねんから だいがくいんに しんがくして、にほんきんだいぶんがくを けんきゅうしようと おもっています。",
                    "translation": "I am thinking of entering graduate school next year to research modern Japanese literature."
                },
                {
                    "target": "雨が強くなってきたから、タクシーを呼んで帰ろうか。",
                    "reading": "あめが つよくなってきたから、タクシーを よんで かえろうか。",
                    "translation": "Since the rain has gotten heavy, shall we call a taxi and head home?"
                },
                {
                    "target": "今週末は家でゆっくり本を読もうと考えています。",
                    "reading": "こんしゅうまつは いえで ゆっくり ほんを よもうと かんがえています。",
                    "translation": "I am thinking of relaxing and reading books at home this weekend."
                },
                {
                    "target": "今日から毎日三十分、日本語のリスニングを続けようと決意しました。",
                    "reading": "きょうから まいにち さんじゅっぷん、にほんごの リスニングを つづけようと けついしました。",
                    "translation": "I resolved to continue listening to Japanese for thirty minutes every day starting today."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【「〜つもりです」の接続と意味】話し手の確固たる意図・決意を述べる構文として正しいものはどれですか。",
                    "options": [
                        "動詞辞書形 / ない形 ＋ つもりです（例：「留学するつもりです」「タバコを吸わないつもりです」）",
                        "動詞ます形 ＋ つもりです",
                        "動詞た形 ＋ つもりです",
                        "形容詞 ＋ つもりです"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜つもりです」は動詞の辞書形またはない形に直接接続し、話し手の強い意志を表します。"
                },
                {
                    "prompt": "【大学院進学の意志伝達】大学卒業後に大学院へ進学する意思を述べる文を選択してください。",
                    "options": [
                        "大学を卒業した後は、日本の大学院に進学して研究を続けるつもりです。",
                        "大学を卒業した後は、大学院に進学しますつもりです。",
                        "大学を卒業した後は、大学院に進学したつもりでした。",
                        "大学を卒業した後は、大学院に進学しているつもりです。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「進学して研究を続ける（辞書形）＋ つもりです」が正確な意志文です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【否定の意志「〜ないつもり」】今後の飲み会に参加しない決意を述べる文を選択してください。",
                    "options": [
                        "試験勉強に集中したいので、今夜の飲み会には参加しないつもりです。",
                        "試験勉強に集中したいので、飲み会に参加するつもりではありませんでした。",
                        "試験勉強に集中したいので、飲み会に参加しなくてつもりです。",
                        "試験勉強に集中したいので、飲み会に参加しない予定でした。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「参加しない（ない形）＋ つもりです」で否定の決意を明快に表現します。"
                },
                {
                    "prompt": "【将来の就職の意志】将来日本企業で働きたい意図を面接で伝える文を選択してください。",
                    "options": [
                        "将来はIT技術者として日本企業で働くつもりです（働きたいと考えております）。",
                        "将来は日本企業で働きますつもりです。",
                        "将来は日本企業で働いたつもりです。",
                        "将来は日本企業で働く予定ですつもりです。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜働くつもりです」が自身の将来設計を語るのに適切です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "目上の人に対して「先生は何時に帰るつもりですか」と質問するのが不作法とされる理由は何ですか。",
                    "options": [
                        "「つもり」は話し手自身の意図を述べる語であり、相手の意志を直接詮索するのは不敬に当たるため。",
                        "文法的に間違いであるため。",
                        "「つもり」は過去形にしか使えないため。",
                        "敬語の「お〜になる」が入っているため。"
                    ],
                    "answerIndex": 0,
                    "explanation": "目上の人の予定を尋ねる際は「〜お帰りになるご予定ですか」など尊敬語を用い、「〜つもりですか」は避けます。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "意志・意図を表す形式名詞「〜＿＿＿です（plan / intention）」を入力してください（ひらがな三文字）:",
                    "acceptedAnswers": [
                        "つもり",
                        "ツモリ"
                    ],
                    "explanation": "「つもり」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u12-l3": {
        "id": "ja-u12-l3",
        "subject": "japanese",
        "unit": 12,
        "lessonNumber": 3,
        "title": "個人の意志・決定「〜つもりです」（意図と決意）",
        "level": "A2",
        "objective": "動詞辞書形／ナイ形＋「つもりです」を用いた主体的・計画的意志の表現と、主語の制約。",
        "presentation": {
            "explanation": "話者の確固たる意図や決意を表明する「〜つもりです」構文の文法規則を学びます。\n\n【「〜つもりです」の構造と接続】\n・肯定の意志：動詞辞書形 ＋ 「つもりです」（例：「留学するつもりです」）\n・否定の意志（二通りの表現）：\n　１．動詞ナイ形 ＋ 「つもりです」（例：「行かないつもりです」※行かない決意をしている）\n　２．動詞辞書形 ＋ 「つもりはありません」（例：「行くつもりはありません」※強い拒絶・不参加の表明）\n\n【使用上の重要な制約】\n・原則として一人称（私）の意志に用います。目上の人に対して「先生は何時に来るつもりですか」と問うのは不作法であり、敬語（「いらっしゃるご予定ですか」）を用いる必要があります。",
            "examples": [
                {
                    "target": "大学を卒業した後は、日本のIT企業に就職するつもりです。",
                    "reading": "だいがくを そつぎょうした あとは、にほんの ITきぎょうに しゅうしょくする つもりです。",
                    "translation": "After graduating from university, I intend to find employment at a Japanese IT company."
                },
                {
                    "target": "健康のために、今年からお酒や甘いものを控えるつもりです。",
                    "reading": "けんこうの ために、ことしから おさけや あまいものを ひかえる つもりです。",
                    "translation": "For my health, I intend to cut down on alcohol and sweets starting this year."
                },
                {
                    "target": "今回のプロジェクトには参加しないつもりですが、助言はします。",
                    "reading": "こんかいの プロジェクトには さんかしない つもりですが、じょげんは します。",
                    "translation": "I intend not to participate in this project, but I will provide advice."
                },
                {
                    "target": "そのような不当な条件を受け入れるつもりは一切ありません。",
                    "reading": "そのような ふとうな じょうけんを うけいれる つもりは いっさい ありません。",
                    "translation": "I have absolutely no intention of accepting such unreasonable conditions."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【「〜予定です」の接続と意味】公式な日程や客観的なスケジュールを述べる構文として正しいものはどれですか。",
                    "options": [
                        "動詞辞書形 ＋ 予定です / 名詞 ＋ の ＋ 予定です（例：「出席する予定です」「出張の予定です」）",
                        "動詞ます形 ＋ 予定です",
                        "動詞て形 ＋ 予定です",
                        "形容詞 ＋ 予定です"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜予定です」は動詞辞書形または「名詞＋の」に接続し、客観的に決定されたスケジュールを表します。"
                },
                {
                    "prompt": "【ビジネス会議の予定伝達】明日の午後に取引先との会議に出席する予定を述べる文を選択してください。",
                    "options": [
                        "明日の午後は社外の取引先との重要な業務提携会議に出席する予定です。",
                        "明日の午後は取引先との会議に出席します予定です。",
                        "明日の午後は取引先との会議に出席した予定です。",
                        "明日の午後は取引先との会議に出席するつもりでした。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「出席する（辞書形）＋ 予定です」が客観的スケジュールの標準表現です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【名詞接続「〜の予定です」】来週月曜日から一週間東京へ出張予定であることを述べる文を選択してください。",
                    "options": [
                        "来週の月曜日から一週間、東京出張の予定です（東京へ出張する予定です）。",
                        "来週の月曜日から東京出張な予定です。",
                        "来週の月曜日から東京出張を予定です。",
                        "来週の月曜日から東京出張で予定です。"
                    ],
                    "answerIndex": 0,
                    "explanation": "名詞「出張」に接続する場合は「出張の予定です」となります。"
                },
                {
                    "prompt": "【新幹線出発時刻の客観的予定】電車の発車時刻をアナウンス・伝達する文を選択してください。",
                    "options": [
                        "新幹線は十時三十分に出発する予定です。",
                        "新幹線は十時三十に出発するつもりです。",
                        "新幹線は十時三十に出発しようと思っています。",
                        "新幹線は十時三十に出発したいです予定です。"
                    ],
                    "answerIndex": 0,
                    "explanation": "乗り物のダイヤなど公共スケジュールには「〜予定です」を用います。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「つもりです」と「予定です」の文法・語用論的相違点として正しいものはどれですか。",
                    "options": [
                        "「つもり」は主観的な個人の意志・決意、「予定」は客観的に確定した公式スケジュール。",
                        "「つもり」が公的スケジュールで、「予定」が個人の意志である。",
                        "両者に意味の違いはなく完全な同義語である。",
                        "「予定」は過去の出来事にしか使えない。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「つもり」＝個人の主観的意図、「予定」＝他者や組織と共有された客観的スケジュールです。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "「schedule / plan」を意味する漢語名詞「よてい」を漢字二文字で入力してください:",
                    "acceptedAnswers": [
                        "予定",
                        "よてい",
                        "ヨテイ"
                    ],
                    "explanation": "「予定（よてい）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u12-l4": {
        "id": "ja-u12-l4",
        "subject": "japanese",
        "unit": 12,
        "lessonNumber": 4,
        "title": "客観的な予定・スケジュール「〜予定です」（私的意志との区別）",
        "level": "A2",
        "objective": "動詞辞書形／名詞の＋「予定です」を用いた公的・客観的スケジュールの表現と「つもり」との使い分け。",
        "presentation": {
            "explanation": "個人の私的意志（つもり）と異なり、あらかじめ決定された客観的な計画・予定を述べる「〜予定です」を学びます。\n\n【接続規則】\n・動詞：動詞辞書形 ＋ 「予定（よてい）です」（例：「来週出張する予定です」）\n・名詞：［名詞］ ＋ 「の予定です」（例：「来週は出張の予定です」）\n\n【「〜つもり」と「〜予定」の語用論的相違】\n・「つもり」：話者の内面的な意志・意図（「明日早く起きるつもりだ」）。\n・「予定」：組織的・公式に確定したスケジュール（「新幹線は14時に到着する予定です」）。自然現象や他者のスケジュールにも使用可能です。",
            "examples": [
                {
                    "target": "新商品の発表会は来月の十五日に東京で開催される予定です。",
                    "reading": "しんしょうひんの はっぴょうかいは らいげつの じゅうごにちに とうきょうで かいさいされる よていです。",
                    "translation": "The new product launch event is scheduled to be held in Tokyo on the 15th of next month."
                },
                {
                    "target": "飛行機は天候不良のため、出発が三十分ほど遅れる予定です。",
                    "reading": "ひこうきは てんこうふりょうの ため、しゅっぱつが さんじゅっぷんほど おくれる よていです。",
                    "translation": "Due to bad weather, the flight departure is expected to be delayed by about thirty minutes."
                },
                {
                    "target": "明日の午後、取引先とオンラインで打ち合わせをする予定が入っています。",
                    "reading": "あすの ごご、とりひきさきと オンラインで うちあわせを する よていが はいっています。",
                    "translation": "I have a scheduled online meeting with a client tomorrow afternoon."
                },
                {
                    "target": "来年度から新しいカリキュラムが導入される予定となっています。",
                    "reading": "らいねんどから あたらしい カリキュラムが どうにゅうされる よていと なっています。",
                    "translation": "A new curriculum is scheduled to be introduced starting next fiscal year."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【将来の目標・資格取得の決意】日本語能力試験（JLPT）N2に合格するための勉強計画を述べる文を選択してください。",
                    "options": [
                        "今年の十二月に日本語能力試験N2を受験して合格するつもりです。",
                        "今年の十二月にN2を受験したつもりです。",
                        "今年の十二月にN2を受験しよう予定です。",
                        "今年の十二月にN2を受験すると思いましょう。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「受験して合格する（辞書形）＋ つもりです」が目標達成の意志を表します。"
                },
                {
                    "prompt": "【留学・研修の計画伝達】来年の春から半年間京都で研修を受ける予定を説明する文を選択してください。",
                    "options": [
                        "来年の四月から半年間、京都の研究所で研修を受ける予定になっています。",
                        "来年の四月から京都で研修を受けたつもりです。",
                        "来年の四月から京都で研修を受けよう予定です。",
                        "来年の四月から京都で研修を受けます計画でした。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜受ける予定になっています（公式決定）」が適切です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【貯金と将来の計画】将来自分のお店を持つために貯金していることを述べる文を選択してください。",
                    "options": [
                        "将来自分のカフェを開くために、毎月コツコツ貯金しています。",
                        "将来カフェを開いたので貯金しました。",
                        "将来カフェを開くつもりで全部お金を使いました。",
                        "将来カフェを開きながら貯金を止めます。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「［目的動詞辞書形］＋ ために、貯金しています」が目的と手段の整合した文です。"
                },
                {
                    "prompt": "【週末の予定確認への応答】「週末は何をする予定ですか」に対する自然な返答を選択してください。",
                    "options": [
                        "「部屋の掃除をして、午後から友達と映画を見に行こうと思っています。」",
                        "「何もしない予定でしたので昨日行きました。」",
                        "「週末を食べます。」",
                        "「映画を見るつもり予定です。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜映画を見に行こうと思っています（意向形＋と思っています）」が自然な応答です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "目的を表す表現「〜ために（辞書形接続）」と「〜ように（可能形・無意志動詞接続）」の使い分けとして正しいものはどれですか。",
                    "options": [
                        "意志動詞の辞書形には「〜ために（家を買うために貯金する）」、可能形や無意志動詞には「〜ように（合格できるように勉強する）」。",
                        "両者に違いはなくいつでも自由に交換できる。",
                        "「ために」は過去形、「ように」は未来形にしか使えない。",
                        "「ように」は名詞にしか接続しない。"
                    ],
                    "answerIndex": 0,
                    "explanation": "意志動詞＋ために（目的）、可能形・状態・否定＋ように（目標状態への誘導）です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "将来の目標のために努力することを表す漢語名詞「けいかく」を漢字二文字で入力してください:",
                    "acceptedAnswers": [
                        "計画",
                        "けいかく",
                        "ケイカク"
                    ],
                    "explanation": "「計画（けいかく）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u12-l5": {
        "id": "ja-u12-l5",
        "subject": "japanese",
        "unit": 12,
        "lessonNumber": 5,
        "title": "将来の希望と目標「〜たい」「〜夢・目標」",
        "level": "A2",
        "objective": "願望助動詞「〜たい」、他者の願望「〜たがる」、将来のキャリア目標・夢の論理的叙述。",
        "presentation": {
            "explanation": "自己の願望を述べる「〜たい」の文法規則と、キャリアや将来像を体系的に語る表現を学びます。\n\n【願望表現「〜たい」の規則】\n・接続：動詞ます形語幹 ＋ 「たい」（例：行きます → 行きたい、食べます → 食べたい）\n・助詞の選択：目的語の助詞は「を」でも「が」でも可能（例：「水が飲みたい」／「水を飲みたい」）。「が」を用いると対象への欲求が強調されます。\n・活用：い形容詞と全く同じ変化をします（例：行きたくない、行きたかった、行きたくなかった）。\n\n【他者の願望の客観化】\n・他者の願望には直接「〜たい」を用いず、「〜たがっている」（第三者の様子）や「〜たいそうです」（伝聞）とします。",
            "examples": [
                {
                    "target": "将来は日本と母国の文化交流を促進する架け橋になりたいです。",
                    "reading": "しょうらいは にほんと ぼこくの ぶんかこうりゅうを そくしんする かけはしに なりたいです。",
                    "translation": "In the future, I want to become a bridge promoting cultural exchange between Japan and my home country."
                },
                {
                    "target": "一度でいいから、満開の桜の下で日本の伝統芸能を鑑賞してみたいです。",
                    "reading": "いちどで いいから、まんかいの さくらの したで にほんの でんとうげいのうを かんしょうしてみたいです。",
                    "translation": "Even just once, I would love to try watching traditional Japanese performing arts under cherry blossoms in full bloom."
                },
                {
                    "target": "妹は来年日本の高校に留学したがっています。",
                    "reading": "いもうとは らいねん にほんの こうこうに りゅうがくしたがっています。",
                    "translation": "My younger sister wants to study abroad at a high school in Japan next year."
                },
                {
                    "target": "自分の夢を実現するために、日々の地道な努力を積み重ねたいと思います。",
                    "reading": "じぶんの ゆめを じつげんするために、ひびの じみちな どりょくを つみかさねたいと おもいます。",
                    "translation": "In order to realize my dream, I want to steadily build up daily diligent efforts."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【キャリアプランの面接対話】今後のキャリア目標を面接官に伝える表現として最も適切なものはどれですか。",
                    "options": [
                        "「五年後にはプロジェクトマネージャーとしてチームを牽引できるよう、日々の業務と資格取得に励む所存です。」",
                        "「五年後は社長をクビにして自分が社長になるつもりだ。」",
                        "「仕事は適当にやって早く帰る予定です。」",
                        "「将来のことは何も考えていません。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜できるよう、日々の業務と資格取得に励む所存です（意向・決意）」が最も格調高い表現です。"
                },
                {
                    "prompt": "【長期休暇の旅程相談対話】同僚と休暇の過ごし方を語り合う自然な対話を選択してください。",
                    "options": [
                        "「夏休みはどうするの？」「家族と沖縄へ行ってダイビングに挑戦しようと思っているんだ。」",
                        "「夏休みはどこへ行く？」「どこにも行きませんつもりです。」",
                        "「夏休みはいつ？」「沖縄を食べよう予定です。」",
                        "「夏休みは休みません。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜挑戦しようと思っているんだ（意向形＋と思っている）」が日常会話として極めて自然です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【複合計画の総合伝達】引越しと転職の二つの計画を順序立てて説明する文を選択してください。",
                    "options": [
                        "来月新しいアパートに引っ越して、秋からは新しいIT企業で働き始める予定です。",
                        "来月引っ越したつもりで、秋から働き始めよう計画です。",
                        "来月引っ越すと思いまして、秋から働く予定でしたつもりです。",
                        "来月引っ越して秋から働きませんでした。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「引っ越して（て形）、〜働き始める予定です（予定）」が明晰な伝達です。"
                },
                {
                    "prompt": "【意志の断念・変更の伝達】当初の予定を変更したことを伝える文を選択してください。",
                    "options": [
                        "旅行に行くつもりでしたが、仕事が忙しくなったのでキャンセルすることにしました。",
                        "旅行に行く予定でしたので今すぐ旅行に行きます。",
                        "旅行に行くつもりですですからキャンセルしませんでした。",
                        "旅行を壊しました。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜つもりでしたが、〜ことにしました（決定）」が計画変更の定型です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「〜ことにする（個人の主観的決定）」と「〜ことになる（組織・他者による客観的決定）」の違いは何ですか。",
                    "options": [
                        "前者は自分自身の判断・決定（I decided to 〜）、後者は規則や周囲の決定（It has been decided that 〜）。",
                        "前者が客観的決定で後者が主観的決定である。",
                        "全く同じ意味である。",
                        "前者が過去形で後者が未来形である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「ことにする」＝話者の能動的意志、「ことになる」＝受動的・組織的決定です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "意思決定を表す表現「〜ことに＿＿＿（decide to do）」の動詞丁寧形を入力してください（ひらがな四文字）:",
                    "acceptedAnswers": [
                        "します",
                        "シマス"
                    ],
                    "explanation": "「〜ことに【します】（または いたしました）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u13-l1": {
        "id": "ja-u13-l1",
        "subject": "japanese",
        "unit": 13,
        "lessonNumber": 1,
        "title": "日本の会社組織と役職体系（社長・部長・課長・係長）",
        "level": "B1",
        "objective": "日本企業の組織構造（取締役会・社長・専務・常務・部長・次長・課長・係長・主任）と社内敬称の運用。",
        "presentation": {
            "explanation": "日本企業の典型的な組織ヒエラルキーと、社内・社外における役職名の呼称規則を学びます。\n\n【日本企業の役職序列】\n１．代表取締役社長（しゃちょう：CEO / President）\n２．専務取締役（せんむ）／常務取締役（じょうむ）：Senior Managing Directors\n３．部長（ぶちょう：General Manager / Division Head）\n４．次長（じちょう：Deputy General Manager）\n５．課長（かちょう：Section Chief / Manager）\n６．係長（かかりちょう：Sub-section Chief / Team Leader）\n７．主任（しゅにん：Senior Staff）／一般社員（しゃいん）\n\n【社内と社外での呼称の使い分け（ウチとソトの原則）】\n・社内での呼びかけ：「田中部長」「佐藤課長」（役職名自体が敬称となるため「田中部長様」とは言いません）。\n・社外の人に対する自社の役職者の言及：「部長の田中は席を外しております」（自社側の人間に敬称を付けず、役職名を名詞として添える）。",
            "examples": [
                {
                    "target": "社外の取引先に対しては、「部長の山田」のように自社の人間に敬称を付けません。",
                    "reading": "しゃがいの とりひきさきに たいしては、「ぶちょうの やまだ」のように じしゃの にんげんに けいしょうを つけません。",
                    "translation": "To external clients, we do not attach honorific titles to people in our own company, saying 'our Division Head Yamada'."
                },
                {
                    "target": "本日の役員会にて、新しい事業計画が社長から発表されます。",
                    "reading": "ほんじつの やくいんかいにて、あたらしい じぎょうけいかくが しゃちょうから はっぴょうされます。",
                    "translation": "At today's executive board meeting, the new business plan will be announced by the president."
                },
                {
                    "target": "鈴木課長、明日の企画書についてご相談したいことがございます。",
                    "reading": "すずきかちょう、あすの きかくしょについて ごそうだんしたい ことが ございます。",
                    "translation": "Section Chief Suzuki, there is something I would like to consult with you about regarding tomorrow's proposal."
                },
                {
                    "target": "各部署の責任者が集まり、四半期の業績報告を行いました。",
                    "reading": "かくぶしょの せきにんしゃが あつまり、しはんきの ぎょうせきほうこくを おこないました。",
                    "translation": "The heads of each department gathered and gave their quarterly performance reports."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【ウチとソトの敬語原則（社外への自社社員の言及）】社外の取引先に対して自分の上司（山田部長）について話す際、正しい表現はどれですか。",
                    "options": [
                        "「部長の山田は、ただいま席を外しております。」（呼び捨て・謙譲表現）",
                        "「山田部長様は、ただいま席を外されていらっしゃいます。」",
                        "「山田先生は、お外にいらっしゃいます。」",
                        "「山田部長さんは、今いません。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "社外の人に対して社内の人間（上司であっても）について話す際は、役職名を付けず呼び捨てにし謙譲語を用います。"
                },
                {
                    "prompt": "【退社時の職場挨拶】先に退勤する際に同僚や上司にかける定型挨拶はどれですか。",
                    "options": [
                        "「お先に失礼いたします。」（残る側は「お疲れ様でした」）",
                        "「ご苦労様でした。」",
                        "「バイバイ、また明日。」",
                        "「お邪魔しました。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "先に職場を退出する際は「お先に失礼いたします」と言います。「ご苦労様」は目上が目下に使う語です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【役職の序列順序】一般的な日本企業における役職の高い順として正しいものはどれですか。",
                    "options": [
                        "社長 ＞ 部長 ＞ 課長 ＞ 係長 ＞ 主任 ＞ 一般社員",
                        "主任 ＞ 係長 ＞ 課長 ＞ 部長 ＞ 社長",
                        "課長 ＞ 社長 ＞ 部長 ＞ 主任",
                        "すべて同じ権限である"
                    ],
                    "answerIndex": 0,
                    "explanation": "日本の企業組織の一般的な序列は「社長 ＞ 専務・常務 ＞ 部長 ＞ 課長 ＞ 係長 ＞ 主任」です。"
                },
                {
                    "prompt": "【社内での業務終了の挨拶】一日仕事を共にした同僚への労いの言葉を選択してください。",
                    "options": [
                        "本日の業務は以上で終了いたします。皆様、お疲れ様でした。",
                        "本日の業務を全部捨てました。ご苦労様です。",
                        "皆様、さようなら、もう会いません。",
                        "いただきます。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「お疲れ様でした」が同僚・同輩および上司に対する標準的な労いの挨拶です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "目上の人に対して使ってはいけない不適切な挨拶表現はどれですか。",
                    "options": [
                        "ご苦労様です（目下が目上に使うのは失礼。「お疲れ様です」が適切）",
                        "お疲れ様です",
                        "お先に失礼いたします",
                        "よろしくお願い申し上げます"
                    ],
                    "answerIndex": 0,
                    "explanation": "「ご苦労様」は上位者が下位者をねぎらう言葉であり、目上に対しては「お疲れ様です」を用います。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "社外の人に対して自分の会社を謙遜して言う語「わが社 / 弊＿＿＿（へいしゃ）」の漢字またはひらがなを入力してください:",
                    "acceptedAnswers": [
                        "弊社",
                        "へいしゃ",
                        "ヘイシャ"
                    ],
                    "explanation": "「弊社（へいしゃ）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u13-l2": {
        "id": "ja-u13-l2",
        "subject": "japanese",
        "unit": 13,
        "lessonNumber": 2,
        "title": "職場での基本挨拶と労い（「お疲れ様です」「ご苦労様です」）",
        "level": "B1",
        "objective": "日本のビジネス現場における挨拶規範、「お疲れ様です」（同僚・目上へ）と「ご苦労様です」（目下へ）の厳格な峻別。",
        "presentation": {
            "explanation": "日本の職場コミュニケーションにおける最重要挨拶「お疲れ様です」と「ご苦労様です」の語用論的境界を学びます。\n\n【挨拶の厳格な使い分けルール】\n１．「お疲れ様です（おつかれさまです）」：\n　・同僚間、および目下の者から目上の者に対する標準的な労いと挨拶。\n　・出退勤時、社内ですれ違う際、電話やメールの冒頭で万能に使われます。\n２．「ご苦労様です（ごくろうさまです）」：\n　・原則として【目上の者が目下の者（部下や業者）を労う】際にのみ使用します。\n　・部下から上司、または取引先に対して「ご苦労様です」と言うのは重大なマナー違反です。\n３．退社時の挨拶：\n　・先に退社する人：「お先に失礼します（おさきにしつれいします）」\n　・見送る人：「お疲れ様でした」",
            "examples": [
                {
                    "target": "目上の上司に対しては、「ご苦労様です」ではなく必ず「お疲れ様です」と言います。",
                    "reading": "めうえの じょうしに たいしては、「ごくろうさまです」ではなく かならず「おつかれさまです」と いいます。",
                    "translation": "To superiors, one must always say 'Otsukaresama desu', never 'Gokurosama desu'."
                },
                {
                    "target": "お先に失礼いたします。本日もお世話になり、ありがとうございました。",
                    "reading": "おさきに しつれいいたします。ほんじつも おせわになり、ありがとうございました。",
                    "translation": "I will take my leave ahead of you. Thank you very much for your kind support today as well."
                },
                {
                    "target": "出張から戻られた部長に、「出張お疲れ様でございました」と声をかけました。",
                    "reading": "しゅっちょうから もどられた ぶちょうに、「しゅっちょう おつかれさまで ございました」と こえを かけました。",
                    "translation": "I addressed the General Manager who returned from a business trip, saying 'Thank you for your hard work on the business trip'."
                },
                {
                    "target": "毎朝の始業時には、部署全員に元気よく「おはようございます」と挨拶します。",
                    "reading": "まいあさの しぎょうじには、ぶしょぜんいんに げんきよく「おはようございます」と あいさつします。",
                    "translation": "At the start of work every morning, we greet everyone in the department cheerfully with 'Ohayo gozaimasu'."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【ビジネス電話の受電第一声】電話に出る際の標準的なビジネスマナー表現はどれですか。",
                    "options": [
                        "「お電話ありがとうございます。株式会社〇〇、営業部の佐藤でございます。」",
                        "「もしもし、どなたですか。」",
                        "「はい、電話です。」",
                        "「要件を早く言ってください。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "ビジネス電話では「もしもし」は使わず、「お電話ありがとうございます。［社名］の［名前］でございます」と名乗ります。"
                },
                {
                    "prompt": "【担当者不在時の電話対応】名指しされた担当者が不在の場合の丁寧な応対表現はどれですか。",
                    "options": [
                        "「あいにく田中は席を外しております。戻り次第、折り返しお電話差し上げましょうか。」",
                        "「田中はいません。切ります。」",
                        "「田中部長様は遊びに行きました。」",
                        "「後でまた自分でかけてください。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "不在を「あいにく〜は席を外しております」と伝え、折り返しの提案をするのが標準です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【電話での相手の確認】相手の名前が聞き取れなかった際の丁寧な聞き返し文を選択してください。",
                    "options": [
                        "「大変恐れ入りますが、お電話が少々遠いようでございます。もう一度お名前をお伺いできますでしょうか。」",
                        "「声が小さいからもっと大声で喋ってください。」",
                        "「誰ですか。」",
                        "「名前を言え。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "相手のせいにせず「お電話が遠いようでございます」とクッション言葉を挟んで再確認します。"
                },
                {
                    "prompt": "【伝言の承り】相手からの伝言を引き受ける際の適切な表現を選択してください。",
                    "options": [
                        "「私、佐藤が確かに申し伝えます。お電話ありがとうございました。」",
                        "「伝言を忘れずに言っておきます。」",
                        "「田中さんに教えてあげます。」",
                        "「紙に書きました。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「私、［名前］が確かに申し伝えます」と責任者を明示して謙譲語で請け合います。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "電話の保留時に相手を待たせる際の一言として適切なものはどれですか。",
                    "options": [
                        "「確認いたしますので、少々お待ちいただけますでしょうか。」",
                        "「待て。」",
                        "「長い間待ってください。」",
                        "「電話を切らないで遊んでいてください。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「少々お待ちいただけますでしょうか」「少々お待ちくださいませ」を用います。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "電話で伝えることを表す謙譲動詞「もうし＿＿＿＿（申し伝える）」の後半部分を入力してください（ひらがな四文字）:",
                    "acceptedAnswers": [
                        "つたえます",
                        "ツタエマス"
                    ],
                    "explanation": "「申し【伝えます（つたえます）】」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u13-l3": {
        "id": "ja-u13-l3",
        "subject": "japanese",
        "unit": 13,
        "lessonNumber": 3,
        "title": "報連相（ほうれんそう：報告・連絡・相談）の実践技法",
        "level": "B1",
        "objective": "日本的ビジネス協働の基盤「報・連・相」の三原則、問題発生時の迅速な情報共有とエスカレーション手順。",
        "presentation": {
            "explanation": "日本の組織文化においてチームワークと意思決定の根幹をなす「報連相（ほうれんそう）」を学びます。\n\n【報連相の三要素】\n１．報告（ほうこく）：指示された業務の進捗状況、完了結果、トラブル発生を上司へ時系列で伝える義務。\n２．連絡（れんらく）：関係者全員に対し、事実やスケジュール変更を感情を交えず正確に共有すること。\n３．相談（そうだん）：判断に迷う事項や未経験の課題について、事前に上司や同僚の助言を仰ぐこと。\n\n【悪い報告の典型と改善策】\n・「バッドニュース・ファースト（悪い知らせほど早く報告する）」：問題が小さいうちに共有することが被害を最小化します。",
            "examples": [
                {
                    "target": "トラブルが発生した際は、自己判断せず直ちに上司へ報告・相談することが鉄則です。",
                    "reading": "トラブルが はっせいした さいは、じこはんだんせず ただちに じょうしへ ほうこく・そうだんすることが てっそくです。",
                    "translation": "When trouble occurs, it is an iron rule not to make arbitrary judgments but to immediately report and consult with one's supervisor."
                },
                {
                    "target": "プロジェクトの進捗状況を週報にまとめて、関係部署へ連絡いたしました。",
                    "reading": "プロジェクトの しんちょくじょうきょうを しゅうほうに まとめて、かんけいぶしょへ れんらくいたしました。",
                    "translation": "I compiled the project progress into a weekly report and communicated it to the relevant departments."
                },
                {
                    "target": "来期の予算案についてご相談したい点がございますので、お時間をいただけますでしょうか。",
                    "reading": "らいきの よさんあんについて ごそうだんしたい てんが ございますので、おじかんを いただけますでしょうか。",
                    "translation": "Because there are points I would like to consult about regarding next term's draft budget, could I have some of your time?"
                },
                {
                    "target": "結論から先に述べ、その後に詳細な理由や背景を説明するように心がけています。",
                    "reading": "けつろんから さきに のべ、その のちに しょうさいな りゆうや はいけいを せつめいするように こころがけています。",
                    "translation": "I make a conscious effort to state the conclusion first, followed by detailed reasons and background."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【社外向けビジネスメールの冒頭挨拶】取引先宛メールの書き出しとして最も適切な定型構文はどれですか。",
                    "options": [
                        "「いつも大変お世話になっております。株式会社〇〇の山田でございます。」",
                        "「元気ですか。山田です。」",
                        "「お疲れ様です。山田だ。」",
                        "「メールを読んでください。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "社外メールの定型冒頭は「いつも大変お世話になっております。［社名］の［氏名］でございます」です。"
                },
                {
                    "prompt": "【ビジネスメールの結びの言葉】社外取引先へのメールを締めくくる最敬体定型句はどれですか。",
                    "options": [
                        "「何卒よろしくお願い申し上げます。」",
                        "「よろしく頼むよ。」",
                        "「さようなら。」",
                        "「返事をすぐください。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「何卒よろしくお願い申し上げます」または「引き続きよろしくお願い申し上げます」が標準結びです。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【添付ファイルの確認依頼】メール添付の資料を確認してほしい時のビジネス敬語表現を選択してください。",
                    "options": [
                        "「企画書を添付いたしましたので、ご査収のほどよろしくお願い申し上げます。」",
                        "「添付ファイルを見てください。」",
                        "「添付ファイルを調べろ。」",
                        "「企画書を読め。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「ご査収（さしゅう）のほどよろしくお願い申し上げます」が添付ファイル確認の標準表現です。"
                },
                {
                    "prompt": "【迅速な返信への御礼】相手の早い対応に対する感謝を述べるメール文を選択してください。",
                    "options": [
                        "「ご多忙の折、早速のご連絡をいただき誠にありがとうございます。」",
                        "「早くメールをくれてありがとう。」",
                        "「暇だったようで感謝します。」",
                        "「返信が早くてびっくりしました。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「ご多忙の折、早速のご連絡をいただき誠にありがとうございます」が格式高い表現です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "ビジネスメールにおける「CC」と「BCC」の使い分けとして正しいものはどれですか。",
                    "options": [
                        "CCは他の受信者にもアドレスが開示される共有用、BCCは他の受信者にアドレスが隠匿される送信用。",
                        "CCとBCCは全く同じ機能である。",
                        "BCCは上司専用のアドレス欄である。",
                        "CCは添付ファイルを送る時だけ使う。"
                    ],
                    "answerIndex": 0,
                    "explanation": "CC（Carbon Copy）は情報共有、BCC（Blind Carbon Copy）は個人情報保護・一斉配信時の秘匿に使います。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "書類や添付ファイルをよく調べて受け取ることを意味する漢語名詞「ご＿＿＿（ごさしゅう）」を入力してください（漢字二文字）:",
                    "acceptedAnswers": [
                        "査収",
                        "さしゅう",
                        "サシュウ"
                    ],
                    "explanation": "「ご【査収（さしゅう）】」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u13-l4": {
        "id": "ja-u13-l4",
        "subject": "japanese",
        "unit": 13,
        "lessonNumber": 4,
        "title": "ビジネス電話応対の定型フレーズ（「お世話になっております」）",
        "level": "B1",
        "objective": "ビジネス電話の受発信プロトコル、名乗り、取次ぎ（とりつぎ）、不在時の伝言受託表現。",
        "presentation": {
            "explanation": "対面以上に礼儀と正確性が求められるビジネス電話応対の定型表現体系を学びます。\n\n【受電・取次ぎの基本ステップ】\n１．受電の第一声：「お電話ありがとうございます。株式会社ファーレンの佐藤でございます」\n２．相手の確認と挨拶：「［社名］の［氏名］様でいらっしゃいますね。いつも大変お世話になっております」\n３．取次ぎ：「営業部の山田でございますね。ただいまお繋ぎいたしますので、少々お待ちください」\n４．不在時の対応：「あいにく山田は別の電話に出ております／席を外しております／外出しております」\n５．伝言の申し出：「戻り次第、こちらから折り返しお電話を差し上げましょうか」",
            "examples": [
                {
                    "target": "お電話ありがとうございます。Fearn株式会社営業部の高橋でございます。",
                    "reading": "おでんわ ありがとうございます。Fearnかぶしきがいしゃ えいぎょうぶの たかはしで ございます。",
                    "translation": "Thank you for calling. This is Takahashi from the Sales Department at Fearn Co., Ltd."
                },
                {
                    "target": "いつも大変お世話になっております。本社の田中様はいらっしゃいますでしょうか。",
                    "reading": "いつも たいへん おせわになっております。ほんしゃの たなかさまは いらっしゃいますでしょうか。",
                    "translation": "Thank you very much for your continued support. Is Mr. Tanaka from headquarters available?"
                },
                {
                    "target": "あいにく担当の山田はただいま外出しておりまして、三時頃に戻る予定です。",
                    "reading": "あいにく たんとうの やまだは ただいま がいしゅつしておりまして、さんじごろに もどる よていです。",
                    "translation": "Unfortunately Yamada, the person in charge, is currently out of the office and is scheduled to return around 3 o'clock."
                },
                {
                    "target": "恐れ入りますが、念のためお電話番号とお名前を復唱させていただきます。",
                    "reading": "おそれいりますが、ねんのため おでんわばんごうと おなまえを ふくしょうさせていただきます。",
                    "translation": "Excuse me, but just to be sure, allow me to repeat your telephone number and name back to you."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【日本の職場文化「報連相（ほうれんそう）」】報連相が表す3つの業務行動の正しい組み合わせはどれですか。",
                    "options": [
                        "報告（ほうこく） / 連絡（れんらく） / 相談（そうだん）",
                        "訪問 / 練習 / 掃除",
                        "方針 / 連続 / 送信",
                        "法律 / 連帯 / 創造"
                    ],
                    "answerIndex": 0,
                    "explanation": "「報連相（ほうれんそう）」は「報告・連絡・相談」の略語で、日本のビジネスの根幹です。"
                },
                {
                    "prompt": "【上司への相談の切り出し方】多忙な上司に業務の相談を持ちかける丁寧な表現はどれですか。",
                    "options": [
                        "「部長、今少々お時間よろしいでしょうか。企画の進捗についてご相談したいことがございます。」",
                        "「部長、今すぐ話を聞け。」",
                        "「部長、暇ですか。」",
                        "「相談がありますから来てください。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「今少々お時間よろしいでしょうか。〜についてご相談したいことがございます」と相手の都合を配慮します。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【納期遅延の謝罪とお詫び】納期の遅れをクライアントに誠心誠意謝罪する文を選択してください。",
                    "options": [
                        "「多大なるご迷惑をおかけいたしまして、心より深くお詫び申し上げます。」",
                        "「遅れてごめんなさい。」",
                        "「忙しかったので仕方ありません。」",
                        "「遅延を許してください。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「多大なるご迷惑をおかけいたしまして、心より深くお詫び申し上げます」がビジネスにおける最上級の謝罪表現です。"
                },
                {
                    "prompt": "【クッション言葉を用いた依頼】相手に手間のかかる作業を依頼する際の丁寧な前置きを選択してください。",
                    "options": [
                        "「お忙しいところ大変恐縮ではございますが、こちらのアンケートにご協力いただけますでしょうか。」",
                        "「アンケートを絶対に書いてください。」",
                        "「忙しいならアンケートをやらなくていいです。」",
                        "「アンケートを命令します。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「お忙しいところ大変恐縮ではございますが」というクッション言葉が相手への敬意を示します。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "謝罪の言葉としてビジネス場面で最もふさわしい最敬体表現はどれですか。",
                    "options": [
                        "大変申し訳ございません（または 誠に申し訳ございませんでした）",
                        "すいませんでした",
                        "ごめんなさい",
                        "すまない"
                    ],
                    "answerIndex": 0,
                    "explanation": "口語の「すいません」「ごめんなさい」はビジネスの場では不適切で、「申し訳ございません」を用います。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "「ほうれんそう（報連相）」の「そう」が表す行動を漢字二文字で入力してください:",
                    "acceptedAnswers": [
                        "相談",
                        "そうだん",
                        "ソウダン"
                    ],
                    "explanation": "「相談（そうだん）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u13-l5": {
        "id": "ja-u13-l5",
        "subject": "japanese",
        "unit": 13,
        "lessonNumber": 5,
        "title": "ビジネスメールの基本構造（件名・宛名・前置き・本文・結び）",
        "level": "B1",
        "objective": "日本のビジネスメールの標準フォーマット（件名・宛名・挨拶・本文・結び・署名）と丁寧な依頼文の作成。",
        "presentation": {
            "explanation": "日本の商習慣におけるビジネス電子メールの定型フォーマットと文面構成規則を学びます。\n\n【ビジネスメールの構成要素】\n１．件名（けんめい）：用件と送信者名が一目で分かる具体的な表題（例：【御見積書送付の件】株式会社ファーレン・佐藤）\n２．宛名（あてな）：社名、部署名、役職名、氏名 ＋ 「様」\n３．冒頭挨拶：「いつも大変お世話になっております。株式会社ファーレンの佐藤です」\n４．用件の前置き：「本日は、新規プロジェクトの打ち合わせ日程の件でご連絡いたしました」\n５．本文：箇条書きなどを活用して簡潔・論理的に記述\n６．結びの挨拶：「ご多忙の折、大変恐れ入りますが、ご検討のほど何卒よろしくお願い申し上げます」\n７．署名（シグネチャー）：氏名・会社名・住所・連絡先",
            "examples": [
                {
                    "target": "件名には要件と送信元会社名を明記し、一目で内容が伝わるように工夫します。",
                    "reading": "けんめいには ようけんと そうしんもと かいしゃめいを めいきし、ひとめで ないようが つたわるように くふうします。",
                    "translation": "In the subject line, we clearly state the matter and the sender's company name so that the content is conveyed at a glance."
                },
                {
                    "target": "ご多忙中恐縮ではございますが、添付の資料をご確認いただけますと幸甚に存じます。",
                    "reading": "ごたぼうちゅう きょうしゅくでは ございますが、てんぷの しりょうを ごかくにん いただけますと こうじんに ぞんじます。",
                    "translation": "I apologize for troubling you while you are busy, but I would be deeply grateful if you could confirm the attached materials."
                },
                {
                    "target": "何卒よろしくお願い申し上げます。末筆ながら貴社の益々のご発展をお祈り申し上げます。",
                    "reading": "なにとぞ よろしく おねがいもうしあげます。まっぴつながら きしゃの ますますの ごはってんを おいのりもうしあげます。",
                    "translation": "Thank you very much for your kind cooperation. In closing, I pray for your company's continued prosperity."
                },
                {
                    "target": "取り急ぎメールにて御礼申し上げます。後ほど正式な書類を郵送いたします。",
                    "reading": "とりいそぎ メールにて おれい もうしあげます。のちほど せいしきな しょるいを ゆうそういたします。",
                    "translation": "I am writing this quick email to express my gratitude. I will mail the formal documents later."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【商談訪問時の受付・名刺交換作法】取引先に到着した際の受付での第一声として適切なものはどれですか。",
                    "options": [
                        "「本日十四時にお約束をいただいております、株式会社〇〇の佐藤と申します。営業部の高橋様にお取次ぎ願えますでしょうか。」",
                        "「高橋に会いに来た佐藤だ。」",
                        "「約束があるから通してくれ。」",
                        "「こんにちは、遊びに来ました。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「お約束をいただいております［社名・氏名］です。［相手役職・氏名］様にお取次ぎ願えますでしょうか」が完璧な受付作法です。"
                },
                {
                    "prompt": "【名刺交換のマナー】名刺を両手で差し出し受ける際にかける言葉はどれですか。",
                    "options": [
                        "差し出し時：「頂戴いたします。株式会社〇〇の佐藤と申します。」 受取り時：「頂戴いたします。よろしくお願いいたします。」",
                        "差し出し時：「これやるよ。」 受取り時：「もらってやる。」",
                        "「名刺はいりません。」",
                        "片手で投げるように渡す。"
                    ],
                    "answerIndex": 0,
                    "explanation": "名刺は両手で胸の高さで差し出し、「頂戴いたします」と受領します。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【商談後のフォローアップメール】面談後の感謝と今後の進め方を伝える文を選択してください。",
                    "options": [
                        "「本日はご多忙の中、貴重なお時間をいただき誠にありがとうございました。本日頂戴したご意見を元に修正案を作成いたします。」",
                        "「今日は話を聞いてくれてどうも。また暇なときに連絡して。」",
                        "「会議は長すぎて疲れました。」",
                        "「修正案は作りません。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「貴重なお時間をいただき誠にありがとうございました。頂戴したご意見を元に〜」が標準的フォローです。"
                },
                {
                    "prompt": "【議事録の送付と内容確認】作成した議事録を関係者に確認してもらう文を選択してください。",
                    "options": [
                        "「本日の打ち合わせの議事録を作成いたしましたのでご査収ください。相違点等ございましたらご指摘いただけますと幸いです。」",
                        "「議事録を書いたから読め。」",
                        "「文句があるなら言え。」",
                        "「議事録は間違っています。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「ご査収ください。相違点等ございましたらご指摘いただけますと幸いです」が丁寧です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "日本の商談における「上座（かみざ）」と「下座（しもざ）」の位置関係の基本ルールはどれですか。",
                    "options": [
                        "出入口から最も遠い奥の席が「上座（お客様や上位者用）」、出入口に最も近い席が「下座（案内役・自社側用）」。",
                        "出入口に最も近い席が上座である。",
                        "席の位置に序列やルールは存在しない。",
                        "窓側の席が常に下座となる。"
                    ],
                    "answerIndex": 0,
                    "explanation": "日本のビジネスマナーでは、出入口から最も遠い席が最上位の「上座」となります。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "ビジネスでお客様や目上の人へ敬意を表して言う「いただく（もらう / 受ける）」の謙譲語「ちょう＿＿＿する（頂戴する）」の漢字またはひらがなを入力してください:",
                    "acceptedAnswers": [
                        "頂戴",
                        "ちょうだい",
                        "チョウダイ"
                    ],
                    "explanation": "「頂戴（ちょうだい）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u14-l1": {
        "id": "ja-u14-l1",
        "subject": "japanese",
        "unit": 14,
        "lessonNumber": 1,
        "title": "普通形接続による個人の意見「〜と思います」（主観的判断）",
        "level": "B1",
        "objective": "普通形（動詞・形容詞・名詞だ）＋「と思います」を用いた主観的意見の表明と断定の回避。",
        "presentation": {
            "explanation": "自己の思考や見解を相手に伝える最重要構文「〜と思います」の接続規則と語用論的機能を学びます。\n\n【接続規則（普通形＋と思う）】\n・動詞：行くと思う／行かないと思う／行ったと思う／行かなかったと思う\n・い形容詞：高いと思う／高くないと思う／高かったと思う\n・な形容詞：親切【だ】と思う／親切【ではない】と思う\n・名詞：日本人【だ】と思う／日本人【ではない】と思う（※名詞とな形容詞には必ず「だ」が入る点に注意）\n\n【断定の回避と謙虚さの表現】\n・日本語では直接断定する（「〜です」）よりも、「〜と思います」と述べることで自説を謙虚に提示し、相手との対立を和らげる配慮が働きます。",
            "examples": [
                {
                    "target": "この新しい提案を採用したほうが、業務効率が大幅に向上すると思います。",
                    "reading": "この あたらしい ていあんを さいようした ほうが、ぎょうむこうりつが おおはばに こうじょうすると おもいます。",
                    "translation": "I think that adopting this new proposal will significantly improve operational efficiency."
                },
                {
                    "target": "環境問題を解決するためには、一人ひとりの意識改革が必要だと思います。",
                    "reading": "かんきょうもんだいを かいけつするためには、ひとりひとりの いしきかいかくが ひつようだと おもいます。",
                    "translation": "In order to solve environmental problems, I think an awareness revolution among each individual is necessary."
                },
                {
                    "target": "明日の試合はどちらのチームも強いため、非常に接戦になると思います。",
                    "reading": "あすの しあいは どちらの チームも つよいため、ひじょうに せっせんに なると おもいます。",
                    "translation": "Because both teams are strong, I think tomorrow's match will be very close."
                },
                {
                    "target": "彼の意見はとても論理的で説得力があると思います。",
                    "reading": "かれの いけんは とても ろんりてきで せっとくりょくが あると おもいます。",
                    "translation": "I think his opinion is very logical and persuasive."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【「〜と思います」の文法接続】意見を述べる文構文として正しい接続規則はどれですか。",
                    "options": [
                        "普通形（簡体・Plain form）＋ と思います（例：「明日は晴れると思います」「便利だと思います」）",
                        "丁寧形（ます形・です）＋ と思います",
                        "動詞て形 ＋ と思います",
                        "名詞 ＋ を思います"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜と思います」の前は普通形（動詞辞書形/ない/た、い形容詞、な形容詞だ、名詞だ）になります。"
                },
                {
                    "prompt": "【個人的な見解の表明】環境問題についての意見を述べる文を選択してください。",
                    "options": [
                        "環境問題を解決するためには、再生可能エネルギーの導入を加速させるべきだと思います。",
                        "環境問題を解決するために、再生可能エネルギーを加速させるべきですと思います。",
                        "環境問題を解決するために、再生可能エネルギーを加速すると思いますでした。",
                        "環境問題は思いません。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜加速させるべきだ（普通形）＋ と思います」が文法的に正確な意見表明です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【否定の意見「〜ないと思います」】その計画は成功しないと考える文を選択してください。",
                    "options": [
                        "準備期間が短すぎるため、その計画はあまりうまくいかないと思います。",
                        "準備期間が短すぎるため、その計画はうまくいきますと思いませんでした。",
                        "準備期間が短すぎるため、その計画はうまくいかないと思いますでした。",
                        "計画がうまくいきませんと思います。"
                    ],
                    "answerIndex": 0,
                    "explanation": "日本語では「〜ないと思います」の形式で否定の意見を述べるのが最も自然です。"
                },
                {
                    "prompt": "【賛否の表明対話】「この新しい提案についてどう思いますか」に対する的確な返答を選択してください。",
                    "options": [
                        "「コストはかかりますが、長期的に見れば非常に有効な施策だと思います。」",
                        "「提案を食べたいと思います。」",
                        "「提案は明日行くと思います。」",
                        "「どうも思いませんでした。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜非常に有効な施策だと思います（名詞＋だ＋と思います）」が自然な応答です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "な形容詞「便利」を「〜と思います」に接続する際の正しい形はどれですか。",
                    "options": [
                        "便利【だ】と思います",
                        "便利と思います",
                        "便利であると思います（または 便利だ）",
                        "便利でと思います"
                    ],
                    "answerIndex": 0,
                    "explanation": "な形容詞・名詞の現在肯定普通形は「〜だ」となり、「便利【だ】と思います」と接続します。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "考える・思うを意味する動詞「おもいます」の漢字を入力してください（一文字）:",
                    "acceptedAnswers": [
                        "思",
                        "おも",
                        "オモ"
                    ],
                    "explanation": "「思（おも）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u14-l2": {
        "id": "ja-u14-l2",
        "subject": "japanese",
        "unit": 14,
        "lessonNumber": 2,
        "title": "間接引用構文「〜と言いました」「〜と聞きました」",
        "level": "B1",
        "objective": "引用の助詞「と」を用いた直接引用・間接引用構文、および伝聞表現「〜と言っていました」「〜そうです」。",
        "presentation": {
            "explanation": "他者の発言や外部からの情報を客観的に伝達する引用構文の文法体系を学びます。\n\n【直接引用と間接引用】\n１．直接引用（発言をそのまま鍵括弧で括る）：\n　・田中さんは「明日会議に行きます」と言いました。\n２．間接引用（発言内容を普通形にして「と」で接続）：\n　・田中さんは明日会議に行くと言いました。\n３．伝聞の「〜と言っていました」（現在の情報伝達）：\n　・「佐藤さんは来週出張すると言っていました」\n４．情報源の明示：「〜の話によると」「〜によると」との呼応。",
            "examples": [
                {
                    "target": "天気予報によると、明日は午後から激しい雷雨になるそうです。",
                    "reading": "てんきよほうに よると、あすは ごごから はげしい らいうに なるそうです。",
                    "translation": "According to the weather forecast, there will reportedly be heavy thunderstorms starting tomorrow afternoon."
                },
                {
                    "target": "部長は今朝の朝礼で、来月から新しいシステムを導入するとおっしゃいました。",
                    "reading": "ぶちょうは けさの ちょうれいで、らいげつから あたらしい システムを どうにゅうすると おっしゃいました。",
                    "translation": "At this morning's assembly, the General Manager stated that a new system would be introduced starting next month."
                },
                {
                    "target": "田中さんは風邪で熱があるため、本日の会議を欠席すると伝えてきました。",
                    "reading": "たなかさんは かぜで ねつが あるため、ほんじつの かいぎを けっせきすると つたえてきました。",
                    "translation": "Tanaka communicated that he would be absent from today's meeting because he has a fever from a cold."
                },
                {
                    "target": "ニュースで日本の宇宙探査機が月面着陸に成功したと聞きました。",
                    "reading": "ニュースで にほんの うちゅうたんさきが げつめんちゃくりくに せいこうしたと ききました。",
                    "translation": "I heard on the news that a Japanese space probe succeeded in landing on the lunar surface."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【発言の間接引用「〜と言っていました」】第三者の伝言・発言内容を報告する文構文として正しいものはどれですか。",
                    "options": [
                        "普通形 ＋ と言っていました（例：「田中さんは明日休むと言っていました」）",
                        "ます形 ＋ と言っていました",
                        "て形 ＋ と言っていました",
                        "名詞 ＋ を言っていました"
                    ],
                    "answerIndex": 0,
                    "explanation": "間接引用では引用節を普通形にし、「［普通形］＋ と言っていました」と接続します。"
                },
                {
                    "prompt": "【教授の発言の敬語間接引用】佐藤教授の発言を尊敬語を用いて伝える文を選択してください。",
                    "options": [
                        "佐藤教授は、次回の国際シンポジウムは京都で開催されるとおっしゃっていました。",
                        "佐藤教授は、次回のシンポジウムは京都で開催されると申していました。",
                        "佐藤教授は、シンポジウムが京都で開催すると言いましたでした。",
                        "佐藤教授は京都を話しました。"
                    ],
                    "answerIndex": 0,
                    "explanation": "目上の方の発言引用には「言う」の尊敬語「おっしゃる（おっしゃっていました）」を用います。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【直接引用と間接引用の区別】相手の発言を一言一句そのまま「鍵括弧」で引用する直接引用文はどれですか。",
                    "options": [
                        "田中さんは「明日の朝八時に駅の改札前で会いましょう」と言いました。",
                        "田中さんは明日八時に駅で会おうと言いました。",
                        "田中さんは八時に来ると言っていました。",
                        "田中さんは八時に会いたいそうです。"
                    ],
                    "answerIndex": 0,
                    "explanation": "鍵括弧「」を用いて相手の言葉をそのまま引用するのが直接引用です。"
                },
                {
                    "prompt": "【伝言の報告対話】同僚からのメッセージを上司に伝える文を選択してください。",
                    "options": [
                        "「先ほど鈴木さんから電話があり、電車の遅延で十五分ほど遅れるとのことでした（遅れると言っていました）。」",
                        "「鈴木さんが遅れるとおっしゃいました。」",
                        "「鈴木さんは電車を止めると言いました。」",
                        "「鈴木さんはいません。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜遅れるとのことでした / 遅れると言っていました」が正確な伝言報告です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "動詞「言う」の尊敬語と謙譲語の組み合わせとして正しいものはどれですか。",
                    "options": [
                        "尊敬語＝おっしゃる / 謙譲語＝申す（もうす）・申し上げる（もうしあげる）",
                        "尊敬語＝申す / 謙譲語＝おっしゃる",
                        "尊敬語＝召し上がる / 謙譲語＝いただく",
                        "尊敬語＝いらっしゃる / 謙譲語＝参る"
                    ],
                    "answerIndex": 0,
                    "explanation": "言うの尊敬語はおっしゃる、謙譲語は申す・申し上げます。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "動詞「いう（言う）」の尊敬語「おっしゃ＿＿＿（おっしゃいます）」の語幹を入力してください（ひらがな四文字）:",
                    "acceptedAnswers": [
                        "おっしゃる",
                        "オッシャル",
                        "仰る"
                    ],
                    "explanation": "「おっしゃる（仰る）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u14-l3": {
        "id": "ja-u14-l3",
        "subject": "japanese",
        "unit": 14,
        "lessonNumber": 3,
        "title": "推量表現「〜でしょう」「〜かもしれません」の確信度差",
        "level": "B1",
        "objective": "推量助動詞「〜だろう／〜でしょう」（確信度大）と不確実性推量「〜かもしれない」（確信度小）の使い分け。",
        "presentation": {
            "explanation": "未来の出来事や未知の事実に対する話し手の確信度のグラデーションを表す推量表現を学びます。\n\n【確信度に基づく推量表現の序列】\n１．「〜に違いない（にちがいない）」（確信度90〜100%）：強い論理的確信（「彼が犯人に違いない」）\n２．「〜だろう／〜でしょう」（確信度70〜80%）：客観的推量や天気予報（「明日は雨が降るでしょう」）\n３．「〜かもしれない／〜かもしれません」（確信度30〜50%）：可能性の示唆（「もしかすると失敗するかもしれない」）\n\n【接続の注意点】\n・「かもしれない」には普通形を接続しますが、名詞とな形容詞の現在肯定では「だ」が脱落します（例：「雨かもしれない」「暇かもしれない」）。",
            "examples": [
                {
                    "target": "夕方から強い寒波が到来するため、夜には雪になるでしょう。",
                    "reading": "ゆうがたから つよい かんぱが とうらいするため、よるには ゆきに なるでしょう。",
                    "translation": "Because a severe cold wave will arrive from early evening, it will likely turn to snow at night."
                },
                {
                    "target": "道路が非常に混雑しているので、約束の時間に少し遅れるかもしれません。",
                    "reading": "どうろが ひじょうに こんざつしているので、やくそくの じかんに すこし おくれるかもしれません。",
                    "translation": "Because the roads are very congested, we might be a little late for the appointment time."
                },
                {
                    "target": "これだけ入念に準備したのだから、今回のプレゼンは必ず成功するに違いありません。",
                    "reading": "これだけ にゅうねんに じゅんびしたのだから、こんかいの プレゼンは かならず せいこうするに ちがいありません。",
                    "translation": "Since we prepared this meticulously, this presentation must surely succeed without doubt."
                },
                {
                    "target": "もしかしたら彼はすでに別の解決策を見つけているかもしれません。",
                    "reading": "もしかしたら かれは すでに べつの かいけつさくを みつけているかもしれません。",
                    "translation": "Perhaps he might have already found another solution."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【「〜かもしれません」の接続規則】不確実な推量（50%以下の可能性）を述べる文構文として正しいものはどれですか。",
                    "options": [
                        "動詞普通形 / い形容詞 / な形容詞語幹（だ無し） / 名詞（だ無し） ＋ かもしれません",
                        "な形容詞・名詞に「だ」を付けたまま接続する",
                        "動詞ます形 ＋ かもしれません",
                        "動詞て形 ＋ かもしれません"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜かもしれません」では、な形容詞・名詞の「だ」を取り除いて直接接続します（例：雨かもしれません、暇かもしれません）。"
                },
                {
                    "prompt": "【気象・交通への影響の推量】台風接近による新幹線への影響を推量する文を選択してください。",
                    "options": [
                        "明日は台風が接近しているため、新幹線のダイヤが乱れるかもしれません。",
                        "明日は台風が接近しているため、新幹線が乱れるかもしれませんでした。",
                        "明日は台風が接近しているため、新幹線が乱れますかもしれません。",
                        "台風が新幹線に乗るかもしれません。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「乱れる（辞書形）＋ かもしれません」が的確な推量表現です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【推量の確信度比較】「〜でしょう」「〜と思います」「〜かもしれません」の確信度の高い順として正しいものはどれですか。",
                    "options": [
                        "〜でしょう（80%前後） ＞ 〜と思います（70%前後） ＞ 〜かもしれません（30〜50%）",
                        "〜かもしれません ＞ 〜でしょう ＞ 〜と思います",
                        "すべて全く同じ確信度である",
                        "〜と思います ＞ 〜絶対に ＞ 〜かもしれません"
                    ],
                    "answerIndex": 0,
                    "explanation": "「でしょう（高推量）」＞「と思います（私見推量）」＞「かもしれません（可能性の示唆）」の順です。"
                },
                {
                    "prompt": "【体調の悪化に関する推量】風邪を引いた可能性を述べる文を選択してください。",
                    "options": [
                        "寒気がして熱っぽいですから、風邪を引いたかもしれません。",
                        "風邪を引きましたかもしれません。",
                        "風邪を引いたでしょうかと思います。",
                        "風邪を引くかもしれませんでした。"
                    ],
                    "answerIndex": 0,
                    "explanation": "過去の出来事への推量は「引いた（た形）＋ かもしれません」となります。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「明日は雨【＿＿＿】かもしれません。」の空欄に入る助動詞・活用の扱いはどうなりますか。",
                    "options": [
                        "何も入れない（名詞「雨」にそのまま「かもしれません」が接続する）",
                        "だ",
                        "な",
                        "の"
                    ],
                    "answerIndex": 0,
                    "explanation": "名詞およびな形容詞語幹には「だ」を付けずに接続します（「雨かもしれません」）。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "推量助詞「〜かも【しれません】」の漢字表記「知れません（しれません）」のひらがな四文字を入力してください:",
                    "acceptedAnswers": [
                        "しれません",
                        "シリマセン"
                    ],
                    "explanation": "「しれません」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u14-l4": {
        "id": "ja-u14-l4",
        "subject": "japanese",
        "unit": 14,
        "lessonNumber": 4,
        "title": "様態・伝聞の「〜そうだ」（直感判断と情報伝達の区別）",
        "level": "B1",
        "objective": "様態の「〜そうだ」（五感による直感判断：雨が降りそうだ）と伝聞の「〜そうだ」（情報伝達：雨が降るそうだ）の形態・意味の峻別。",
        "presentation": {
            "explanation": "日本語文法において同音で異なる文法機能を持つ様態の「そうだ」と伝聞の「そうだ」を徹底比較します。\n\n【様態の「そうだ」（Look like / Seem like / About to）】\n・接続：動詞ます形語幹 ＋ そうだ／い形容詞語幹 ＋ そうだ／な形容詞語幹 ＋ そうだ\n・意味：目に見える様子から直感的に判断する（例：「雨が降りそうだ」「美味しそうだ」）。\n・特異変化：「いい（良い）」→「よさそうだ」、「ない（無い）」→「なさそうだ」。\n\n【伝聞の「そうだ」（I heard that / Reportedly）】\n・接続：動詞・形容詞・名詞の【普通形】 ＋ そうだ\n・意味：他から聞いた情報をそのまま伝える（例：「雨が降るそうだ」「美味しいそうだ」「雨だそうだ」）。",
            "examples": [
                {
                    "target": "空が真っ暗になってきました。今にも激しい雨が降り出しそうです。",
                    "reading": "そらが まっくらに なってきました。いまにも はげしい あめが ふりだしそうです。",
                    "translation": "The sky has turned pitch dark. It looks like it is about to start pouring rain at any moment."
                },
                {
                    "target": "田中さんの話では、来月新しい支店が大阪に開設されるそうです。",
                    "reading": "たなかさんの はなしでは、らいげつ あたらしい してんが おおさかに かいせつされるそうです。",
                    "translation": "According to Tanaka, a new branch will reportedly be opened in Osaka next month."
                },
                {
                    "target": "このケーキは甘さ控えめで、とても体に良さそうな材料で作られています。",
                    "reading": "この ケーキは あまさひかえめで、とても からだに よさそうな ざいりょうで つくられています。",
                    "translation": "This cake is moderately sweet and seems to be made of very healthy ingredients."
                },
                {
                    "target": "天気予報によると、今年の冬は例年よりもかなり寒くなるそうです。",
                    "reading": "てんきよほうに よると、ことしの ふゆは れいねんよりも かなり さむくなるそうです。",
                    "translation": "According to the weather forecast, this winter is reportedly going to be considerably colder than usual."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【説明・理由のモダリティ「〜んです / 〜のです」】事情の説明や理由の強調を表す構文として正しいものはどれですか。",
                    "options": [
                        "普通形 ＋ んです（な形容詞・名詞の現在肯定は「〜なんです」）（例：「頭が痛いんです」「雨なんです」）",
                        "ます形 ＋ んです",
                        "動詞て形 ＋ んです",
                        "形容詞語幹 ＋ んです"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜んです」は普通形に接続し、名詞・な形容詞現在肯定では「〜なんです」となります。"
                },
                {
                    "prompt": "【欠勤の理由説明】昨日休んだ理由を「〜んです」を用いて上司に説明する文を選択してください。",
                    "options": [
                        "「どうして昨日休んだのですか。」「急に高熱が出て動けなかったんです。」",
                        "「昨日休んだのは高熱でしたんです。」",
                        "「昨日休んだのは高熱を出しましたんです。」",
                        "「休みましたんです。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「動けなかった（普通形過去否定）＋ んです」が自然な理由説明です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【関心・質問の「〜んですか」】相手の様子を見て理由を尋ねる親身な質問文を選択してください。",
                    "options": [
                        "「荷物がたくさんありますね。どこか旅行へ行くんですか。」",
                        "「荷物が多いから旅行へ行きますか。」",
                        "「荷物を持って旅行へ行ったんですでしたか。」",
                        "「荷物を捨てますか。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "状況を観察して背景理由を尋ねる際は「〜んですか」を用います。"
                },
                {
                    "prompt": "【依頼の口火を切る「〜んですが」】道案内や助けを求める前置き文を選択してください。",
                    "options": [
                        "「すみません、市役所へ行きたいんですが、道を教えていただけますか。」",
                        "「市役所へ行きたいですから道を教えろ。」",
                        "「市役所を行くんですけれど教えてくださいでした。」",
                        "「市役所はどこですかんです。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "依頼の前置きとして「［事情］＋ んですが、〜していただけますか」が定型です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "名詞「休み」に「〜んです」を接続する場合の正しい形はどれですか。",
                    "options": [
                        "休み【なん】です",
                        "休みなのです / 休みなんです",
                        "休みだんです",
                        "休みのんです"
                    ],
                    "answerIndex": 0,
                    "explanation": "名詞・な形容詞の現在肯定では「だ」が「な」に変化し、「休み【なん】です」となります。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "理由や説明を表す口語形式「〜＿＿＿です（んです）」のひらがな二文字を入力してください:",
                    "acceptedAnswers": [
                        "ん",
                        "の"
                    ],
                    "explanation": "「【ん】です（または 【の】です）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u14-l5": {
        "id": "ja-u14-l5",
        "subject": "japanese",
        "unit": 14,
        "lessonNumber": 5,
        "title": "根拠に基づく推測「〜ようだ」「〜らしい」",
        "level": "B1",
        "objective": "五感や具体的根拠に基づく推測「〜ようだ」と、周囲の噂や典型的属性を表す「〜らしい」の統語・語用論的比較。",
        "presentation": {
            "explanation": "話し手が自らの感覚や客観的証拠に基づいて推論する「〜ようだ」と「〜らしい」を学びます。\n\n【「〜ようだ」の特徴（Evidence-based Inference）】\n・接続：動詞・形容詞普通形 ＋ ようだ／名詞 ＋ 【の】 ＋ ようだ\n・機能：話し手が直接見たり聞いたりした客観的根拠から総合的に推論する（例：「足音がするから、誰か来たようだ」）。比喩表現（「雪のようだ」）にも使用。\n\n【「〜らしい」の特徴（Hearsay Inference / Prototypicality）】\n・接続：動詞・形容詞普通形／名詞（「だ」なし） ＋ らしい\n・機能：\n　１．間接的な噂や外部情報に基づく推測（「彼は退職するらしい」）\n　２．名詞＋らしい：その名詞の典型的な性質を具備している（例：「男らしい」「春らしい陽気」）。",
            "examples": [
                {
                    "target": "外で車の急ブレーキの音が聞こえました。事故が起きたようです。",
                    "reading": "そとで くるまの きゅうブレーキの おとが きこえました。じこが おきたようです。",
                    "translation": "I heard the sound of sudden car braking outside. It seems an accident has occurred."
                },
                {
                    "target": "噂によると、佐藤さんは近々海外支社へ栄転するらしいです。",
                    "reading": "うわさに よると、さとうさんは ちかぢか かいがいししゃへ えいてんするらしいです。",
                    "translation": "According to rumors, it appears that Mr. Sato will soon be promoted to an overseas branch."
                },
                {
                    "target": "三月に入り、ようやく春らしい暖かな日差しが感じられるようになりました。",
                    "reading": "さんがつに はいり、ようやく はるらしい あたたかな ひざしが かんじられるように なりました。",
                    "translation": "Entering March, we have finally become able to feel warm, spring-like sunlight."
                },
                {
                    "target": "部屋の明かりが消えているので、田中さんはもう寝てしまったようです。",
                    "reading": "へやの あかりが きえているので、たなかさんは もう ねてしまったようです。",
                    "translation": "Because the room lights are off, it seems Tanaka has already gone to sleep."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【ディスカッションでの意見対話】AI技術の未来について意見を交換する自然な対話を選択してください。",
                    "options": [
                        "「AIの普及によって多くの業務が効率化される一方で、個人情報保護のルール作りが不可欠だと思います。」",
                        "「AIは全部人間を滅ぼすと言っていましたんです。」",
                        "「AIは食べ物だと思います。」",
                        "「何にも思いません。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜効率化される一方で（対比）、〜不可欠だと思います（意見）」が論理的なディスカッション文です。"
                },
                {
                    "prompt": "【他者の見解を交えた推論】専門家の意見を引用しつつ推論を述べる文を選択してください。",
                    "options": [
                        "「ニュースの解説委員は景気は回復傾向にあると言っていましたが、物価上昇の影響で消費者の心理は冷え込むかもしれません。」",
                        "「解説委員は景気が良いと言いましたから絶対に全員お金持ちになります。」",
                        "「景気は終わると思いますんです。」",
                        "「ニュースは見ません。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜と言っていましたが（引用対比）、〜冷え込むかもしれません（推量）」が複合的な論述です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【会議での反論・別視点の提示】相手の意見を尊重しつつ異なる視点を述べる丁寧な表現を選択してください。",
                    "options": [
                        "「〇〇さんのおっしゃることもよく分かりますが、予算の制約を考えると別の方法を検討すべきではないかと思います。」",
                        "「お前の意見は完全に間違っているから黙れ。」",
                        "「予算がないので全部中止にしましょう。」",
                        "「賛成も反対もしません。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜おっしゃることも分かりますが（配慮）、〜検討すべきではないかと思います（緩和された主張）」が知的で洗練された反論です。"
                },
                {
                    "prompt": "【理由を伴う提案】提案の根拠を説明して同意を求める文を選択してください。",
                    "options": [
                        "「若者の利用者が急増しているんです。ですから、SNSを活用した広報キャンペーンを展開したほうが効果的だと思います。」",
                        "「若者が多いですからSNSをやってくださいでした。」",
                        "「SNSは面白いと思いますんです。」",
                        "「広報をやめます。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜急増しているんです（理由強調）。ですから〜効果的だと思います（提案意見）」が明快です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "複文における「意見表明（〜と思う）」「引用（〜と言う）」「推量（〜かもしれない）」「理由説明（〜んです）」の統語的共通点は何ですか。",
                    "options": [
                        "いずれも主節・引用節・接続節の直前に「普通形（簡体）」をとる点。",
                        "いずれも名詞にしか接続できない点。",
                        "いずれも命令形にしか接続できない点。",
                        "敬語表現と併用できない点。"
                    ],
                    "answerIndex": 0,
                    "explanation": "日本語のモダリティ形式はいずれも「普通形（Plain form）」を基底接続として機能します。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "自分の意見を謙虚に述べる表現「〜べきではないかと＿＿＿（思います）」の動詞丁寧形を入力してください（ひらがな四文字）:",
                    "acceptedAnswers": [
                        "おもいます",
                        "オモイマス",
                        "思います"
                    ],
                    "explanation": "「【思います（おもいます）】」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u15-l1": {
        "id": "ja-u15-l1",
        "subject": "japanese",
        "unit": 15,
        "lessonNumber": 1,
        "title": "日本列島の地域区分と風土特性（北海道から沖縄まで）",
        "level": "B1",
        "objective": "日本列島の八大地方（北海道・東北・関東・中部・近畿・中国・四国・九州・沖縄）と気候・風土・食文化の多様性。",
        "presentation": {
            "explanation": "南北に約三千キロメートルにわたって連なる日本列島の地理的区分と風土的多様性を学びます。\n\n【日本の八地方区分】\n１．北海道地方：雄大な大自然、酪農、亜寒帯気候\n２．東北地方：豪雪地帯、米どころ、ねぶた祭などの伝統文化\n３．関東地方：首都東京を擁する政治・経済・情報の中枢\n４．中部地方（北陸・中央高地・東海）：日本アルプスと富士山、工業地帯\n５．近畿（関西）地方：京都・奈良の歴史的古都、商都大阪\n６．中国地方（山陰・山陽）：瀬戸内海文化と出雲神話\n７．四国地方：お遍路（八十八箇所）、阿波踊り\n８．九州・沖縄地方：温暖な気候、豊かな温泉群、亜熱帯の島嶼文化",
            "examples": [
                {
                    "target": "日本列島は南北に細長く、地域ごとに独自の気候風土と豊かな郷土文化が育まれています。",
                    "reading": "にほんれっとうは なんぼくに ほそながく、ちいきごとに どくじの きこうふうどと ゆたかな きょうどぶんかが はぐくまれています。",
                    "translation": "The Japanese archipelago is long and narrow from north to south, with unique climate characteristics and rich local cultures nurtured in each region."
                },
                {
                    "target": "京都や奈良が位置する近畿地方は、千有余年の歴史を誇る日本の文化遺産の宝庫です。",
                    "reading": "きょうとや ならが行いちする きんきちほうは、せんゆうよねんの れきしを ほこる にほんの ぶんかいさんの ほうこです。",
                    "translation": "The Kinki region, where Kyoto and Nara are located, is a treasure trove of Japanese cultural heritage boasting over a thousand years of history."
                },
                {
                    "target": "北海道の大自然と新鮮な海の幸は、世界中から多くの観光客を魅了しています。",
                    "reading": "ほっかいどうの だいしぜんと しんせんな うみのさちは、せかいじゅうから おおくの かんこうきゃくを みりょうしています。",
                    "translation": "Hokkaido's grand nature and fresh seafood captivate many tourists from all over the world."
                },
                {
                    "target": "沖縄県はかつて琉球王国として栄え、日本本土とは異なる独自の芸能や伝統建築を有しています。",
                    "reading": "おきなわけんは かつて りゅうきゅうおうこくとして さかえ、にほんほんどとは ことなる どくじの げいのうや でんとうけんちくを ゆうしています。",
                    "translation": "Okinawa Prefecture once flourished as the Ryukyu Kingdom, possessing distinct performing arts and traditional architecture differing from mainland Japan."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【日本の地域区分】日本の八地方区分の正しい組み合わせはどれですか。",
                    "options": [
                        "北海道・東北・関東・中部・近畿（関西）・中国・四国・九州沖縄",
                        "東日本と西日本の二つだけ",
                        "東京・大阪・京都・名古屋の四つだけ",
                        "北海道・本州・四国・九州の島名のみ"
                    ],
                    "answerIndex": 0,
                    "explanation": "日本は行政・地理的に8つの地方区分（北海道・東北・関東・中部・近畿・中国・四国・九州沖縄）に分かれます。"
                },
                {
                    "prompt": "【観光地と名所の組み合わせ】京都を代表する歴史的寺社仏閣の組み合わせとして正しいものはどれですか。",
                    "options": [
                        "清水寺（きよみずでら）・金閣寺（きんかくじ）・伏見稲荷大社（ふしみいなりたいしゃ）",
                        "富士山・東京タワー・道頓堀",
                        "厳島神社・首里城・兼六園",
                        "すべて北海道に位置する"
                    ],
                    "answerIndex": 0,
                    "explanation": "清水寺、金閣寺、伏見稲荷大社はいずれも京都府を代表する世界遺産・名所です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【日本の気候の特徴】日本海側と太平洋側の冬の気候の違いを正しく述べた文を選択してください。",
                    "options": [
                        "冬の日本海側は雪が多く、太平洋側は晴天が多く乾燥します。",
                        "冬の日本海側は猛暑で、太平洋側は大雪です。",
                        "日本全土で一年中同じ天気が続きます。",
                        "冬は沖縄に雪が積もります。"
                    ],
                    "answerIndex": 0,
                    "explanation": "日本の冬は季節風の影響で日本海側に豪雪をもたらし、太平洋側は乾燥した晴天となります。"
                },
                {
                    "prompt": "【名産品とお土産の購入】旅先でお土産を購入する文脈として自然な文を選択してください。",
                    "options": [
                        "旅行のお土産として、北海道の有名な銘菓と特産品を購入いたしました。",
                        "旅行のお土産を全部燃やしました。",
                        "お土産を食べないで投げました。",
                        "お土産を会社に捨てました。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「お土産として、〜銘菓と特産品を購入いたしました」が旅の報告として自然です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "日本の都道府県の総数はいくつですか。",
                    "options": [
                        "47都道府県（1都1道2府43県）",
                        "50都道府県",
                        "40都道府県",
                        "100都道府県"
                    ],
                    "answerIndex": 0,
                    "explanation": "日本は47都道府県（東京都、北海道、大阪府、京都府、43県）で構成されます。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "旅先で買う記念の品「おみやげ（souvenir）」を漢字で入力してください:",
                    "acceptedAnswers": [
                        "お土産",
                        "土産",
                        "みやげ"
                    ],
                    "explanation": "「お土産（おみやげ）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u15-l2": {
        "id": "ja-u15-l2",
        "subject": "japanese",
        "unit": 15,
        "lessonNumber": 2,
        "title": "温泉文化と入浴マナー（かけ湯・湯船のマナー・浴衣の着方）",
        "level": "B1",
        "objective": "日本の温泉（おんせん）文化、泉質・効能、厳格な入浴作法（かけ湯・湯船にタオルを入れない・脱衣所でのマナー）。",
        "presentation": {
            "explanation": "火山国日本が生み出した豊かな温泉文化と、共同浴場における厳格な入浴マナーを学びます。\n\n【温泉の基本入浴作法】\n１．脱衣（だつい）：脱衣所で衣服をすべて脱ぎ、籠（かご）に入れます。\n２．かけ湯（かけゆ）：湯船に入る前に、洗面器でお湯を足先から身体全体にかけて湯温に慣らし、汚れを流します。\n３．体を洗ってから入浴：湯船のお湯を汚さないため、必ず洗い場で身体と頭を洗ってから湯船に浸かります。\n４．湯船にタオルを入れない：衛生維持のため、手ぬぐい・タオルは頭の上に乗せるか浴槽の縁に置きます。\n５．脱衣所へ戻る前のマナー：脱衣所の床を濡らさないよう、体をタオルでよく拭いてから戻ります。",
            "examples": [
                {
                    "target": "湯船に入る前には必ず洗い場でかけ湯をし、身体の汚れを落とすのが温泉の基本マナーです。",
                    "reading": "ゆぶねに はいる まえには かならず あらいばで かけゆをし、からだの よごれを おとすのが おんせんの きほんマナーです。",
                    "translation": "Pouring warm water over oneself at the washing stall to rinse off bodily dirt before entering the bathtub is essential hot spring etiquette."
                },
                {
                    "target": "お湯の衛生を保つため、タオルを湯船の中につけてはいけません。",
                    "reading": "おゆの えいせいを たもつため、タオルを ゆぶねの なかに つけては いけません。",
                    "translation": "To maintain the hygiene of the bathwater, you must not submerge your towel inside the bathtub."
                },
                {
                    "target": "旅館の浴衣を着る際は、右前（自分の右手を懐に入れる着方）に合わせるのが正しい着付けです。",
                    "reading": "りょかんの ゆかたを きる さいは、みぎまえ（じぶんの みぎてを ふところに いれる きかた）に あわせるのが ただしい きつけです。",
                    "translation": "When wearing a ryokan yukata, crossing the left side over the right (left-over-right) is the correct dressing method."
                },
                {
                    "target": "露天風呂からは四季折々の美しい雪景色や紅葉を一望できます。",
                    "reading": "ろてんぶろからは しきおりおりの うつくしい ゆきげしきや こうようを いちぼうできます。",
                    "translation": "From the open-air bath, one can command a panoramic view of seasonal snowscapes and autumn foliage."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【温泉入浴の絶対的マナー】温泉の湯船（浴槽）に入る前の必須ルールはどれですか。",
                    "options": [
                        "湯船に入る前に、必ず洗い場で身体と髪を綺麗に洗い、かけ湯をしてから入る。",
                        "水着を着てそのまま湯船に飛び込む。",
                        "タオルを湯船の中に沈めて石鹸で洗う。",
                        "湯船の中で泳いで遊ぶ。"
                    ],
                    "answerIndex": 0,
                    "explanation": "温泉では、湯船を清潔に保つため「洗い場で身体を洗ってから入る」「タオルを浴槽に入れない」が厳格なルールです。"
                },
                {
                    "prompt": "【浴衣（ゆかた）の正しい着方（合わせ方）】生きている人の浴衣の合わせ方として正しいものはどれですか。",
                    "options": [
                        "右前（右の衿を胸に当て、その上に左の衿を重ねる「右前・左上」）",
                        "左前（左の衿の上に右の衿を重ねる＝死装束・仏仏の着方）",
                        "どちらでも自由に着てよい",
                        "帯を結ばずに羽織るだけ"
                    ],
                    "answerIndex": 0,
                    "explanation": "浴衣や着物は「右前（自分から見て右が内側、左が外側上）」で着ます。逆の「左前」は死者の着せ方となりタブーです。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【旅館での仲居さんとの対話】部屋に案内された際のお茶とお菓子への感謝表現を選択してください。",
                    "options": [
                        "「お心遣いありがとうございます。ご丁寧に案内していただき恐れ入ります。」",
                        "「お茶が不味いから捨ててください。」",
                        "「早く布団を敷いて出ていけ。」",
                        "「旅館を壊します。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「お心遣いありがとうございます。ご丁寧に案内していただき〜」が丁寧で上品な対応です。"
                },
                {
                    "prompt": "【露天風呂の利用感想】温泉宿の露天風呂の魅力を語る文を選択してください。",
                    "options": [
                        "「雪景色を眺めながら入る露天風呂は最高に贅沢でリフレッシュできました。」",
                        "「露天風呂が寒すぎて凍死しました。」",
                        "「温泉を全部飲みました。」",
                        "「風呂は嫌いです。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「雪景色を眺めながら入る露天風呂は最高に贅沢で〜」が風情ある感想です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "温泉旅館で提供される伝統的なコース料理の名称はどれですか。",
                    "options": [
                        "会席料理 / 懐石料理（かいせきりょうり）",
                        "ファストフード",
                        "ラーメンセット",
                        "ビュッフェのみ"
                    ],
                    "answerIndex": 0,
                    "explanation": "日本の温泉旅館では旬の味覚を器や盛り付けとともに楽しむ「会席料理・懐石料理」が振る舞われます。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "旅館の館内着としても着用される夏の伝統綿織物「ゆかた」を漢字で入力してください:",
                    "acceptedAnswers": [
                        "浴衣",
                        "ゆかた",
                        "ユカタ"
                    ],
                    "explanation": "「浴衣（ゆかた）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u15-l3": {
        "id": "ja-u15-l3",
        "subject": "japanese",
        "unit": 15,
        "lessonNumber": 3,
        "title": "伝統旅館の「おもてなし」と仲居さんとの対話",
        "level": "B1",
        "objective": "日本伝統旅館の宿泊体験、客室係（仲居さん）との対話、部屋食・布団敷きなどの至高のおもてなし文化。",
        "presentation": {
            "explanation": "日本の伝統的宿泊施設「旅館（りょかん）」における「おもてなし（無償の至高の歓待）」の精神と対話作法を学びます。\n\n【旅館での一連の流れ】\n１．到着（チェックイン）：帳場（フロント）での受付後、仲居（なかい）さんが客室へ案内。\n２．お茶とお茶菓子の提供：仲居さんが抹茶や煎茶を点てて客室で振る舞います。\n３．夕食（会席料理）：客室または個室の食事処で、一品ずつ出来立ての料理が運ばれます。\n４．布団敷き（ふとんしき）：夕食中または入浴中に、係の人が手際よく畳の上に布団を敷きます。\n５．心付け（チップ）：日本の旅館ではサービス料が含まれているため原則不要ですが、特別な配慮に対する感謝を包む慣習も残存します。",
            "examples": [
                {
                    "target": "仲居さんが淹れてくださった温かい緑茶と季節の和菓子をいただきながら一服しました。",
                    "reading": "なかいさんが いれてくださった あたたかい りょくちゃと きせつの わがしを いただきながら いっぷくしました。",
                    "translation": "I took a rest while enjoying the warm green tea and seasonal Japanese confectionery prepared by the ryokan attendant."
                },
                {
                    "target": "夕食はお部屋にて、地元の旬の食材をふんだんに使った会席料理をご用意いたします。",
                    "reading": "ゆうしょくは おへやにて、じもとの しゅんの しょくざいを ふんだんに つかった かいせきりょうりを ごよういいたします。",
                    "translation": "For dinner, we will prepare a multi-course kaiseki meal in your room, abundantly utilizing seasonal local ingredients."
                },
                {
                    "target": "お客様が温泉に入っていらっしゃる間に、お布団をお敷きしておきます。",
                    "reading": "おきゃくさまが おんせんに はいっていらっしゃる あいだに、おふとんを おしきしておきます。",
                    "translation": "While our esteemed guests are in the hot spring bath, we will lay out the futons for you."
                },
                {
                    "target": "旅館の細やかな心配りと心温まるおもてなしに深く感動いたしました。",
                    "reading": "りょかんの こまやかな こころくばりと こころあたたまる おもてなしに ふかく かんどういたしました。",
                    "translation": "I was deeply moved by the ryokan's meticulous attentiveness and heartwarming hospitality."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【神社（神道）の参拝作法】日本の神社の拝礼作法として最も正確な順序はどれですか。",
                    "options": [
                        "二礼・二拍手・一礼（お賽銭を入れ、深く二回お辞儀し、二回手を叩き、最後に深く一回お辞儀する）",
                        "十回拍手して叫ぶ",
                        "お辞儀をせずに通り過ぎる",
                        "手を叩かずに合掌して祈る（寺院の作法）"
                    ],
                    "answerIndex": 0,
                    "explanation": "神社の標準的な参拝作法は「二礼二拍手一礼（にれい・にはくしゅ・いちれい）」です（※寺院では拍手せず合掌します）。"
                },
                {
                    "prompt": "【手水舎（てみずや）での身の清め方】参拝前に手水舎で行う作法の順序はどれですか。",
                    "options": [
                        "右手で柄杓を持ち左手を清める → 左手に持ち替え右手を清める → 左手で水を受け口をすすぐ → 柄杓を立てて柄を洗い流す",
                        "柄杓に口を直接つけて水を飲む",
                        "柄杓で頭から水をかぶる",
                        "手水舎で手を洗わない"
                    ],
                    "answerIndex": 0,
                    "explanation": "手水舎では柄杓に口を直接つけず、左手→右手→口（左手経由）→柄杓の柄の順で清めます。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【おみくじと絵馬（えま）】神社でおみくじを引き、願い事を木札に書く文化を説明する文を選択してください。",
                    "options": [
                        "「おみくじで大吉を引いた後、合格祈願の願い事を絵馬に書いて奉納しました。」",
                        "「おみくじを破いて絵馬を折りました。」",
                        "「絵馬を食べておみくじを捨てました。」",
                        "「神社でお金を盗みました。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「おみくじで大吉を引いた後、〜絵馬に書いて奉納しました」が正確な神社文化の描写です。"
                },
                {
                    "prompt": "【鳥居（とりい）をくぐる際のマナー】神社の入口である鳥居をくぐる時の正しい作法を選択してください。",
                    "options": [
                        "鳥居の前で一歩立ち止まり軽く一礼し、中央（神様の通り道）を避けて端を歩く。",
                        "鳥居の真ん中を大股で走り抜ける。",
                        "鳥居に落書きをして入る。",
                        "鳥居を無視して壁を乗り越える。"
                    ],
                    "answerIndex": 0,
                    "explanation": "鳥居は神域の結界であり、くぐる前に一礼し、正中（中央）を避けて端を歩くのが礼儀です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "神社と寺院の参拝作法の決定的な違いは何ですか。",
                    "options": [
                        "神社では「手を叩く（拍手）」が、お寺（仏教）では「音を立てずに静かに合掌する」。",
                        "お寺では拍手し、神社では合掌する。",
                        "全く同じ作法である。",
                        "神社では靴を脱ぎ、寺院では靴を履いたまま上がる。"
                    ],
                    "answerIndex": 0,
                    "explanation": "神社＝二礼二拍手一礼（拍手あり）、寺院＝静かに合掌一礼（拍手なし）が根本的相違です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "神社や寺院を参拝した証として朱印帳に頂く印章「ごしゅ＿＿＿（御朱印）」の漢字またはひらがなを入力してください:",
                    "acceptedAnswers": [
                        "御朱印",
                        "ごしゅいん",
                        "ゴシュイン",
                        "朱印"
                    ],
                    "explanation": "「御朱印（ごしゅいん）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u15-l4": {
        "id": "ja-u15-l4",
        "subject": "japanese",
        "unit": 15,
        "lessonNumber": 4,
        "title": "神社と寺院の参拝作法（二礼二拍手一礼・手水舎・御朱印）",
        "level": "B1",
        "objective": "神道神社（鳥居・二礼二拍手一礼）と仏教寺院（山門・合掌一礼）の建築的相違および厳格な参拝作法。",
        "presentation": {
            "explanation": "日本の二大宗教的伝統である神道（神社）と仏教（寺院）の建築的差異と参拝儀礼を学びます。\n\n【神社（Shinto Shrine）の参拝作法】\n１．鳥居（とりい）：神域への結界。鳥居をくぐる前に一礼し、参道の中央（正中：神様の通り道）を避けて端を歩きます。\n２．手水舎（てみずや／ちょうずや）：柄杓（ひしゃく）で左手→右手→口をすすぎ→柄杓の柄を洗い清めます。\n３．拝礼作法：「二礼二拍手一礼（にれい・にはくしゅ・いちれい）」（二回深くお辞儀をし、二回柏手を打ち、祈念した後に一回お辞儀）。\n\n【寺院（Buddhist Temple）の参拝作法】\n・山門で一礼、香炉の煙を身体に浴びて清め、本堂前で【拍手を打たずに静かに合掌（がっしょう）一礼】します。\n・御朱印（ごしゅいん）：参拝の証として墨書と朱印をいただく文化。",
            "examples": [
                {
                    "target": "神社の拝殿前では、お賽銭を入れた後、「二礼二拍手一礼」の作法で静かに拝礼します。",
                    "reading": "じんじゃの はいでんまえでは、おさいせんを いれた のち、「にれい にはくしゅ いちれい」の さほうで しずかに はいれいします。",
                    "translation": "In front of the shrine worship hall, after offering a coin, one bows and prays quietly following the 'two bows, two claps, one bow' etiquette."
                },
                {
                    "target": "お寺にお参りする際は、手を叩かずに胸の前で静かに両手を合わせて合掌します。",
                    "reading": "おてらに おまいりする さいは、てを たたかずに むねの まえで しずかに りょうてを あわせて がっしょうします。",
                    "translation": "When visiting a Buddhist temple, one does not clap hands, but quietly brings both palms together in front of the chest in gassho prayer."
                },
                {
                    "target": "鳥居をくぐる前には軽く一礼し、参道の中央を避けて端を歩くのが神道のマナーです。",
                    "reading": "とりいを くぐる まえには かるく いちれいし、さんどうの ちゅうおうを さけて はしを あるくのが しんとうの マナーです。",
                    "translation": "Before passing through the torii gate, bowing slightly and walking along the edge to avoid the center of the approach is Shinto etiquette."
                },
                {
                    "target": "旅の記念に御朱印帳を購入し、各地の歴史ある寺社で御朱印を集めています。",
                    "reading": "たびの きねんに ごしゅいんちょうを こうにゅうし、かくちの れきしある じしゃで ごしゅいんを あつめています。",
                    "translation": "As a travel memento, I purchased a goshuin stamp book and am collecting sacred calligraphy stamps at historic shrines and temples across regions."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【日本の伝統工芸の代表例】漆器（しっき）や陶磁器（とうじき）の産地と工芸品の組み合わせとして正しいものはどれですか。",
                    "options": [
                        "輪島塗（石川県・漆器） / 有田焼（佐賀県・磁器） / 西陣織（京都府・織物）",
                        "輪島塗＝プラスチック / 有田焼＝ガラス",
                        "すべて海外からの輸入品である",
                        "伝統工芸品は存在しない"
                    ],
                    "answerIndex": 0,
                    "explanation": "輪島塗（漆器）、有田焼・伊万里焼（陶磁器）、西陣織（絹織物）は日本を代表する伝統工芸品です。"
                },
                {
                    "prompt": "【和食（無形文化遺産）の特徴】日本の伝統的食文化の基本構成である「一汁三菜（いちじゅうさんさい）」の組み合わせはどれですか。",
                    "options": [
                        "主食（ご飯） ＋ 汁物（味噌汁等） ＋ 主菜一品 ＋ 副菜二品",
                        "スープ三つとご飯一つ",
                        "肉料理四つ",
                        "ケーキとジュース"
                    ],
                    "answerIndex": 0,
                    "explanation": "「一汁三菜」は主食（ご飯）、汁物（一汁）、おかず三品（主菜・副菜・副々菜）からなる栄養バランスの取れた献立です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【伝統工芸体験の感想】金継ぎや陶芸のワークショップに参加した感想を述べる文を選択してください。",
                    "options": [
                        "「京都の老舗工房で友禅染の体験に参加し、職人技の緻密さと美しさに深く感動しました。」",
                        "「伝統工芸を体験して工房の道具を全部壊しました。」",
                        "「職人さんに怒鳴って帰りました。」",
                        "「友禅染を食べました。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜職人技の緻密さと美しさに深く感動しました」が文化的感銘を表す表現です。"
                },
                {
                    "prompt": "【日本の季節の和菓子】季節感を表現する上生菓子（じょうなまがし）とお茶の楽しみ方を語る文を選択してください。",
                    "options": [
                        "「お抹茶の苦味と、桜をかたどった季節の和菓子の控えめな甘さが絶妙に調和していました。」",
                        "「和菓子を床に投げました。」",
                        "「お抹茶をジュースで薄めて飲みました。」",
                        "「お菓子を食べずに捨てました。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「お抹茶の苦味と〜季節の和菓子の控えめな甘さが絶妙に調和していました」が豊かな食文化描写です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "漆（うるし）の樹液を木地に塗り重ねて作られる日本の伝統工芸品はどれですか。",
                    "options": [
                        "漆器（しっき / 輪島塗・山中塗など）",
                        "陶器",
                        "ガラス細工",
                        "革製品"
                    ],
                    "answerIndex": 0,
                    "explanation": "漆器（Japanware / しっき）は漆を塗り重ねて堅牢かつ優美に仕上げる日本伝統工芸です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "日本料理の基本献立「いちじゅう＿＿＿さい（一汁三菜）」の空欄部分を漢字またはひらがなで入力してください:",
                    "acceptedAnswers": [
                        "三菜",
                        "さんさい",
                        "サンサイ"
                    ],
                    "explanation": "一汁【三菜（さんさい）】です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u15-l5": {
        "id": "ja-u15-l5",
        "subject": "japanese",
        "unit": 15,
        "lessonNumber": 5,
        "title": "地方の名産品・郷土料理と「お土産（おみやげ）」文化",
        "level": "B1",
        "objective": "日本特有の「お土産（おみやげ）」贈答文化、各地の伝統工芸品・郷土料理の文化的背景。",
        "presentation": {
            "explanation": "日本の人間関係構築において極めて重要な役割を果たす「お土産（おみやげ）」文化と地方名産品を学びます。\n\n【お土産文化の社会的機能】\n・日本において旅行や出張に出かけた際、職場や近隣、親戚に菓子などの「お土産」を買って配る慣習は、不在中の業務分担への感謝や日頃の気遣いを形にする社会潤滑油です。\n・「銘菓（めいか）」：各都道府県には地域特有の歴史的菓子（京都の八ツ橋、広島のもみじ饅頭、北海道の白い恋人など）が存在します。\n・伝統工芸品：輪島塗（石川）、西陣織（京都）、南部鉄器（岩手）、有田焼（佐賀）などの高度な手仕事。",
            "examples": [
                {
                    "target": "出張から帰った後、不在中に仕事をサポートしてくれた同僚たちに銘菓のお土産を配りました。",
                    "reading": "しゅっちょうから かえった のち、ふざいちゅうに しごとを サポートしてくれた どうりょうたちに めいかの おみやげを くばりました。",
                    "translation": "After returning from the business trip, I distributed famous local confection souvenirs to my colleagues who supported my work during my absence."
                },
                {
                    "target": "京都の伝統工芸品である西陣織のネクタイと扇子を家族への記念の品として選びました。",
                    "reading": "きょうとの でんとうこうげいひんである にしじんおりの ネクタイと せんすを かぞくへの きねんの しなとして えらびました。",
                    "translation": "I chose a Nishijin-woven necktie and folding fan, traditional Kyoto crafts, as memorial gifts for my family."
                },
                {
                    "target": "旅行先でその土地ならではの郷土料理を味わうことは、旅の最大の醍醐味の一つです。",
                    "reading": "りょこうさきで その とちならではの きょうどりょうりを あじわうことは、たびの さいだいの だいごみの ひとつです。",
                    "translation": "Savoring authentic local cuisine unique to each region at travel destinations is one of the greatest pleasures of travel."
                },
                {
                    "target": "日頃お世話になっている取引先の皆様へ、季節のご挨拶として地元の特産品をお贈りしました。",
                    "reading": "ひごろ おせわになっている とりひきさきの みなさまへ、きせつの ごあいさつとして じもとの とくさんひんを おおくりしました。",
                    "translation": "To our esteemed clients who support us daily, we sent local specialty products as a seasonal greeting."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【旅館のチェックアウト時の挨拶対話】旅館をチェックアウトする際の客と仲居・女将の自然な対話はどれですか。",
                    "options": [
                        "客：「素晴らしいおもてなしとお料理をありがとうございました。大変心地よく過ごせました。」 宿：「こちらこそご宿泊いただき誠にありがとうございました。またのお越しを心よりお待ちしております。」",
                        "客：「部屋が汚かった。」 宿：「二度と来るな。」",
                        "客：「いただきます。」 宿：「ごちそうさまでした。」",
                        "客：「さようなら。」 宿：「お金を置いていけ。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「素晴らしいおもてなしとお料理を〜」「またのお越しを心よりお待ちしております」がお互いに礼を尽くす対話です。"
                },
                {
                    "prompt": "【観光案内所での旅程相談】観光案内所のスタッフに見どころを尋ねる丁寧な文を選択してください。",
                    "options": [
                        "「すみません、このあたりで半日で回れるおすすめの観光ルートや名所はございますでしょうか。」",
                        "「おい、どこへ行けばいいか命令しろ。」",
                        "「観光地を全部案内所の中に持ってこい。」",
                        "「地図をタダで全部よこせ。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「半日で回れるおすすめの観光ルートや名所はございますでしょうか」が実用的かつ丁寧です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【旅の思い出の総括】日本一周旅行の総括として自然な文章を選択してください。",
                    "options": [
                        "「北は北海道の大自然から南は沖縄の美しい海まで、地域の多様な文化と人々の温かさに触れる素晴らしい旅となりました。」",
                        "「日本全国どこに行っても同じでつまらなかったです。」",
                        "「旅行中にずっと寝ていました。」",
                        "「飛行機に乗るのを忘れました。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「地域の多様な文化と人々の温かさに触れる素晴らしい旅となりました」が総合的な旅行総括です。"
                },
                {
                    "prompt": "【帰国後のお土産配り】同僚に旅先のお土産を渡す際の丁寧な言葉遣いを選択してください。",
                    "options": [
                        "「皆さんでどうぞ。金沢へ行ってきたお土産の銘菓です。お口に合うと嬉しいのですが。」",
                        "「これ買ってやったから感謝して食え。」",
                        "「余ったゴミをやります。」",
                        "「お土産代を払ってください。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「皆さんでどうぞ。〜お土産の銘菓です。お口に合うと嬉しいのですが」が日本の気配り文化に即した贈呈表現です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "日本の伝統的なおもてなし精神を表す名詞はどれですか。",
                    "options": [
                        "おもてなし（hospitality / 心を込めた歓待）",
                        "マニュアル対応",
                        "事務処理",
                        "義理"
                    ],
                    "answerIndex": 0,
                    "explanation": "「おもてなし」は見返りを求めず客人の心地よさを追求する日本独自の歓待精神です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "心のこもった歓待・サービスを表す美称「おもて＿＿＿（おもてなし）」のひらがな二文字を入力してください:",
                    "acceptedAnswers": [
                        "なし",
                        "ナシ"
                    ],
                    "explanation": "「おもて【なし】」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u16-l1": {
        "id": "ja-u16-l1",
        "subject": "japanese",
        "unit": 16,
        "lessonNumber": 1,
        "title": "確定・仮定条件「〜たら」（最も汎用的な条件節）",
        "level": "B1",
        "objective": "動詞タ形＋「ら」を用いた完了・確定条件（When）および一般的仮定（If）、後件における意志・依頼の許容性。",
        "presentation": {
            "explanation": "現代日本語の条件表現の中で最も使用頻度が高く、適用範囲が広い「〜たら」構文を学びます。\n\n【「〜たら」の二大用法】\n１．仮定条件（If）：不確定な事態が成立した場合（例：「明日雨が降ったら、遠足は中止です」）。\n２．確定条件・完了（When / After）：未来においてある事態が確実に完了した後に後件を行う（例：「駅に着いたら、電話してください」）。\n\n【接続規則】\n・動詞：タ形 ＋ ら（行ったら、食べたら、来たら）\n・い形容詞：語尾「かった」 ＋ ら（安かったら、寒かったら）\n・な形容詞・名詞：語幹 ＋ 「だったら」（暇だったら、雨だったら）\n\n【最大の特徴（後件の制約の少なさ）】\n・後件に話者の意志（「〜したい」）、命令（「〜しろ」）、依頼（「〜てください」）、勧誘（「〜ましょう」）を自由に伴うことができます。",
            "examples": [
                {
                    "target": "京都駅に到着したら、改札口の前で待っていてください。",
                    "reading": "きょうとえきに とうちゃくしたら、かいさつぐちの まえで まっていて ください。",
                    "translation": "When you arrive at Kyoto Station, please wait in front of the ticket gate."
                },
                {
                    "target": "もし時間に余裕があったら、美術館の特別展も見てみたいです。",
                    "reading": "もし じかんに よゆうが あったら、びじゅつかんの とくべつてんも みてみたいです。",
                    "translation": "If I have spare time, I would like to try viewing the special exhibition at the museum as well."
                },
                {
                    "target": "薬を飲んで一晩ぐっすり眠ったら、熱がすっかり下がりました。",
                    "reading": "くすりを のんで ひとばん ぐっすり ねむったら、ねつが すっかり さがりました。",
                    "translation": "After taking medicine and sleeping soundly overnight, my fever went down completely."
                },
                {
                    "target": "分からないことがあったら、いつでも遠慮なく質問してください。",
                    "reading": "わからない ことが あったら、いつでも えんりょなく しつもんして ください。",
                    "translation": "If there is anything you do not understand, please ask questions at any time without hesitation."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【条件表現「〜と」の本質的用法】「〜と」が使われる典型的な文脈として正しいものはどれですか。",
                    "options": [
                        "自然の摂理・季節の推移・機械の操作に伴う自動的・不可避な結果（例：「春になると桜が咲く」「右に曲がると銀行がある」）",
                        "相手への依頼・命令（例：「食べると、ください」）",
                        "話者の強い個人的な決意（例：「雨が降ると、行くつもりだ」）",
                        "過去の一回限りの後悔"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜と」は前件が成立すると必然的・自動的に後件が起こる因果関係を表し、後件に意志・命令・依頼（〜てください、〜ましょう等）は置けません。"
                },
                {
                    "prompt": "【機械操作と結果の表現】券売機の操作説明として正確な文を選択してください。",
                    "options": [
                        "このボタンを押すと、おつりと切符が出てきます。",
                        "このボタンを押すと、切符を出してください。",
                        "このボタンを押すと、切符を買いたいです。",
                        "ボタンを押すと切符を食べました。"
                    ],
                    "answerIndex": 0,
                    "explanation": "機械の動作は必然的結果なので「押すと〜出てきます」が正確です（後件に依頼・意志は不可）。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【季節の推移の叙述】春の訪れを「〜と」を用いて自然に表現した文を選択してください。",
                    "options": [
                        "春になって暖かくなると、公園の桜が一斉に満開になります。",
                        "春になると、桜を満開にしてください。",
                        "春になると、桜を見に行きましょう（※意志・勧誘には「たら」が適切）。",
                        "春になると冬になりました。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「暖かくなると〜満開になります」は自然現象の客観的推移を表す模範例です。"
                },
                {
                    "prompt": "【道案内の定型構文】交差点での道案内文として正しいものを選択してください。",
                    "options": [
                        "あの交差点を右に曲がると、左手に郵便局が見えます。",
                        "交差点を曲がると、郵便局へ行ってください。",
                        "交差点を曲がると、郵便局を見ましょう。",
                        "交差点を曲がると、郵便局が消えます。"
                    ],
                    "answerIndex": 0,
                    "explanation": "道案内の客観的発見には「［場所］を曲がると、〜が見えます」を用います。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "条件接続「〜と」の文末（後件）に関する絶対的な文法制約はどれですか。",
                    "options": [
                        "文末に話者の「意志・希望・命令・依頼・勧誘」（〜たい、〜てください、〜ましょう等）を置くことができない。",
                        "文末に現在形を置いてはならない。",
                        "主語を必ず省略しなければならない。",
                        "動詞の過去形にしか接続できない。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜と」の後件には意志・希望・命令・依頼表現を置くことができません（それらには「〜たら」を用います）。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "自然法則や機械操作の確定条件を表す接続助詞「〜＿＿＿（と）」のひらがな一文字を入力してください:",
                    "acceptedAnswers": [
                        "と",
                        "ト"
                    ],
                    "explanation": "「と」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u16-l2": {
        "id": "ja-u16-l2",
        "subject": "japanese",
        "unit": 16,
        "lessonNumber": 2,
        "title": "話題・前提提示条件「〜なら」（助言・選択の条件）",
        "level": "B1",
        "objective": "名詞／動詞普通形＋「なら」を用いた相手の発言・文脈の前提化、助言・推奨構文の運用。",
        "presentation": {
            "explanation": "相手の発言や先行する文脈を話題・前提として取り上げ、それに対する助言や判断を下す「〜なら」を学びます。\n\n【「〜なら」の機能と文法的特徴】\n１．前提の受容と助言（Given that / If it is true that）：\n　・相手：「来月日本に行きます」\n　・自分：「日本へ行く【なら】、京都の紅葉をぜひ見てください」\n２．時間的前後関係の逆転（〜する前に）：\n　・「〜たら」は前件完了後に後件を行いますが、「〜なら」は後件が前件より先に行われることがあります。\n　・例：「新幹線に乗る【なら】、事前に指定席を予約したほうがいい」（乗る前に予約する）。\n３．接続：名詞（「なら」直結）、動詞・形容詞普通形＋なら（名詞・な形容詞に「だ」は不要）。",
            "examples": [
                {
                    "target": "日本料理を本格的に味わうなら、京都の老舗料亭がおすすめです。",
                    "reading": "にほんりょうりを ほんかくてきに あじわうなら、きょうとの しにせりょうていが おすすめです。",
                    "translation": "If you are to savor authentic Japanese cuisine, established traditional restaurants in Kyoto are recommended."
                },
                {
                    "target": "彼がそう言うなら、その情報は極めて信頼性が高いに違いありません。",
                    "reading": "かれが そう いうなら、その じょうほうは きわめて しんらいせいが たかいに ちがいありません。",
                    "translation": "If he says so, that information must undoubtedly be extremely reliable."
                },
                {
                    "target": "パソコンを買い替えるなら、最新の高性能モデルを検討したほうが賢明です。",
                    "reading": "パソコンを かいかえるなら、さいしんの こうせいのう モデルを けんとうした ほうが けんめいです。",
                    "translation": "If you are replacing your computer, it is wise to consider the latest high-performance model."
                },
                {
                    "target": "明日お暇なら、一緒に上野の東京国立博物館へ行きませんか。",
                    "reading": "あす おひまなら、いっしょに うえのの とうきょうこくりつはくぶつかんへ いきませんか。",
                    "translation": "If you are free tomorrow, would you like to go to the Tokyo National Museum in Ueno together?"
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【「〜ば」の活用規則】動詞・い形容詞を「仮定形（ば形）」にする規則として正しいものはどれですか。",
                    "options": [
                        "動詞：語尾の「u段」を「e段」に変えて「ば」（書く→書けば、食べる→食べれば） / い形容詞：「い」を「ければ」に変える（高い→高ければ、いい→良ければ）",
                        "動詞にそのまま「ば」を付ける（書くば）",
                        "動詞て形に「ば」を付ける（書いてば）",
                        "過去形に「ば」を付ける（書いたば）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ば形は動詞のe段＋ば（五段・一段共通）、い形容詞は〜ければ（「いい」は「よければ」）となります。"
                },
                {
                    "prompt": "【条件付き購入の判断】価格が安ければ買うという論理的仮定文を選択してください。",
                    "options": [
                        "値段がもう少し安ければ、ぜひ購入したいと考えております。",
                        "値段が安いば、買いますでした。",
                        "値段が安ければ、買いませんでした。",
                        "値段を捨てれば買います。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「安ければ（い形容詞ば形）、〜購入したい」が論理的仮定条件です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【ことわざ・論理的因果律】日々の努力の積み重ねを表す日本のことわざを選択してください。",
                    "options": [
                        "「塵（ちり）も積もれば山となる。」",
                        "「塵が積もると山を食べろ。」",
                        "「塵が積もったら山を壊せ。」",
                        "「山が積もれば塵になる。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「塵も積もれば山となる（わずかなものでも積み重なれば大きなものになる）」は「ば」を用いた代表的諺です。"
                },
                {
                    "prompt": "【天候条件の仮定】「いい（良い）」の仮定形を用いた文として正しいものを選択してください。",
                    "options": [
                        "明日の天気が良ければ、山頂までハイキングに行きましょう。",
                        "天気がいいければ、ハイキングに行きましょう。",
                        "天気がよくば、ハイキングに行きましょう。",
                        "天気がよかったば、行きます。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「いい」の仮定形は不規則で「良ければ（よければ）」となります。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "動詞「する」と「来る」の仮定形（ば形）の組み合わせとして正しいものはどれですか。",
                    "options": [
                        "する → すれば / 来る（くる） → 来れば（くれば）",
                        "する → しれば / 来る → これば",
                        "する → すれば / 来る → きれば",
                        "する → したば / 来る → きたば"
                    ],
                    "answerIndex": 0,
                    "explanation": "三類動詞のば形は「すれば」「来れば（くれば）」です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "形容詞「いい（良い）」のば形「よ＿＿＿（よければ）」の活用語尾を入力してください（ひらがな三文字）:",
                    "acceptedAnswers": [
                        "ければ",
                        "ケレバ"
                    ],
                    "explanation": "よ【ければ】です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u16-l3": {
        "id": "ja-u16-l3",
        "subject": "japanese",
        "unit": 16,
        "lessonNumber": 3,
        "title": "一般的仮定条件「〜ば」（ことわざ・因果関係・論理的条件）",
        "level": "B1",
        "objective": "動詞バ形・形容詞ケレバの活用規則、論理的必然性・ことわざ・反実仮想（もし〜ば）の構文運用。",
        "presentation": {
            "explanation": "論理的因果関係、一般的法則、ことわざ、および反実仮想を表す仮定条件「〜ば」を学びます。\n\n【バ形の活用規則】\n・五段動詞（一類）：語尾のウ段音を「エ段音 ＋ ば」に変換（書く → 書けば、読む → 読めば、行く → 行けば）。\n・一段動詞（二類）：語尾「る」を「れば」に変換（食べる → 食べれば、見る → 見れば）。\n・不規則動詞（三類）：する → すれば、来る → 来れば（くれば ※語幹読み「く」）。\n・い形容詞：語尾「い」を「ければ」に変換（安い → 安ければ、いい → よければ）。\n・な形容詞・名詞：語幹 ＋ 「であれば／なら（ば）」。\n\n【主な使用場面】\n１．ことわざ・格言：「塵（ちり）も積もれば山となる」「住めば都」\n２．論理的・数学的条件：「AにBを足せばCになる」\n３．後件制約：前件が動作動詞の場合、後件に意志・命令・依頼を置くことは原則できません（状態動詞・形容詞なら可能）。",
            "examples": [
                {
                    "target": "毎日少しずつ練習を重ねれば、必ず上達することができます。",
                    "reading": "まいにち すこしずつ れんしゅうを かさねれば、かならず じょうたつすることが できます。",
                    "translation": "If you repeat practice little by little every day, you can surely improve."
                },
                {
                    "target": "天気がよければ、展望台から遠く富士山の稜線を望むことができます。",
                    "reading": "てんきが よければ、てんぼうだいから とおく ふじさんの りょうせんを のぞむことが できます。",
                    "translation": "If the weather is good, you can view the distant ridgeline of Mount Fuji from the observation deck."
                },
                {
                    "target": "早く出発すれば、朝の激しい通勤ラッシュを避けることができます。",
                    "reading": "はやく しゅっぱつすれば、あさの はげしい つうきんラッシュを さけることが できます。",
                    "translation": "If you depart early, you can avoid the severe morning commuter rush."
                },
                {
                    "target": "説明書を読めば、誰でも簡単にこの機器を操作できます。",
                    "reading": "せつめいしょを よめば、だれでも かんたんに この ききを そうさできます。",
                    "translation": "If you read the instruction manual, anyone can easily operate this device."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【「〜たら」の万能性と完了用法】「〜たら」の二大用法として正しい組み合わせはどれですか。",
                    "options": [
                        "「もし〜なら（仮定条件）」と「〜した後に（時間的順序・完了後の動作）」の両方に使え、文末に依頼・命令・意志を置ける。",
                        "自然法則の不可避結果にしか使えない",
                        "過去形にしか接続できず未来の仮定には使えない",
                        "名詞にしか接続できない"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜たら」は最も汎用性が高く、仮定（雨が降ったら）にも完了後の行動（駅に着いたら電話して）にも使え、後件の文末制約がありません。"
                },
                {
                    "prompt": "【到着後の行動指示】成田空港に到着した後の連絡を依頼する文を選択してください。",
                    "options": [
                        "成田空港に到着したら、すぐにメッセージを送ってください。",
                        "成田空港に到着すると、メッセージを送ってください（※不可）。",
                        "成田空港に到着するなら、メッセージを送ってください。",
                        "成田空港に到着したら、メッセージを消してください。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「到着した後に〜してください」という完了後の依頼には「〜たら」が唯一自然です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【仮定条件での依頼】もし時間が余ったら手伝ってほしいと頼む文を選択してください。",
                    "options": [
                        "もし時間が余ったら、こちらの資料作成を少し手伝っていただけますか。",
                        "時間が余ると、手伝ってください。",
                        "時間が余れば、手伝ってください（※後件に依頼はやや不自然）。",
                        "時間を捨てたら手伝います。"
                    ],
                    "answerIndex": 0,
                    "explanation": "後件に依頼（〜ていただけますか）を伴う仮定には「〜たら」が最も適しています。"
                },
                {
                    "prompt": "【「〜たら」の接続形式】動詞「食べる」「飲む」の「たら形」の組み合わせとして正しいものはどれですか。",
                    "options": [
                        "食べた ＋ ら → 食べたら / 飲んだ ＋ ら → 飲んだら",
                        "食べるたら / 飲むたら",
                        "食べたらば / 飲みたらば",
                        "食べてたら / 飲んでたら"
                    ],
                    "answerIndex": 0,
                    "explanation": "「動詞た形 ＋ ら」で「食べたら」「飲んだら」となります。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「〜と」「〜ば」「〜たら」「〜なら」の中で、後件に「〜てください（依頼）」「〜ましょう（勧誘）」「〜たい（希望）」を最も自然に自由に使える形式はどれですか。",
                    "options": [
                        "〜たら",
                        "〜と",
                        "〜ば",
                        "すべて完全に同じ"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜たら」は日常会話において後件に意志・依頼・命令・勧誘を制限なく使える最も汎用的な仮定形です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "動詞「いく（行く）」の「たら形」を入力してください（ひらがな四文字）:",
                    "acceptedAnswers": [
                        "いったら",
                        "イッタラ",
                        "行ったら"
                    ],
                    "explanation": "「行ったら（いったら）」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u16-l4": {
        "id": "ja-u16-l4",
        "subject": "japanese",
        "unit": 16,
        "lessonNumber": 4,
        "title": "自然の必然・機械操作条件「〜と」（恒常条件・継起）",
        "level": "B1",
        "objective": "動詞辞書形＋「と」を用いた自然法則、恒常的因果関係、機械操作、および直後の発見（継起）。",
        "presentation": {
            "explanation": "前件の成立に伴って後件が必然的・自動的に生起する「〜と」構文の文法規則を学びます。\n\n【「〜と」の三大用法】\n１．恒常条件・自然法則（Natural consequence）：\n　・「春になると、桜が咲きます」（When spring comes, cherry blossoms bloom.）\n２．機械操作と必然的結果（Machine operation）：\n　・「このボタンを押すと、切符が出ます」（If you press this button, the ticket comes out.）\n３．道の案内（経路の必然）：\n　・「あの角を右に曲がると、左手に郵便局があります」\n４．継起・意外な発見（Sequential discovery）：\n　・「窓を開けると、外は一面の銀世界だった」（When I opened the window, outside was a blanket of snow.）\n\n【厳格な文法制約】\n・後件に話者の意志、命令、依頼、許可、勧誘（「〜てください」「〜たい」「〜ましょう」）を配置することは絶対にできません。",
            "examples": [
                {
                    "target": "この緑のボタンを押すと、自動的にドアが開きます。",
                    "reading": "この みどりの ボタンを おすと、じどうてきに ドアが あきます。",
                    "translation": "When you press this green button, the door automatically opens."
                },
                {
                    "target": "春が訪れると、公園一面に色鮮やかな花々が咲き誇ります。",
                    "reading": "はるが おとずれると、こうえん いちめんに いろあざやかな はなばなが さきほこります。",
                    "translation": "When spring arrives, brightly colored flowers bloom in profusion all across the park."
                },
                {
                    "target": "交差点を左に曲がると、正面に堂々たる歴史的建築が見えてきます。",
                    "reading": "こうさてんを ひだりに まがると、しょうめんに どうどうたる れきしてきけんちくが みえてきます。",
                    "translation": "When you turn left at the intersection, an imposing historic building will become visible right in front."
                },
                {
                    "target": "朝起きてカーテンを開けると、外は一面の雪景色でした。",
                    "reading": "あさ おきて カーテンを あけると、そとは いちめんの ゆきげしきでした。",
                    "translation": "When I woke up in the morning and opened the curtains, outside was a landscape entirely covered in snow."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【「〜なら」の特異な機能】「〜なら」が持つ独自の機能・文脈として正しいものはどれですか。",
                    "options": [
                        "相手が口にした話題や前提を取り上げ、「それについて言うならば」と助言・判断・提案を述べる（話題の主題化・助言）。",
                        "自然法則の不可避な結果を述べる",
                        "過去に確定した事実の報告",
                        "計算の掛け算を表す"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜なら」は相手の提示した情報や意図を受け止め、「それなら〜がおすすめですよ」と助言・提案する際に最も頻繁に用いられます。"
                },
                {
                    "prompt": "【観光アドバイスでの「〜なら」】京都旅行を計画している人への助言として適切な文を選択してください。",
                    "options": [
                        "日本文化や歴史を深く学びたいなら、京都の古刹を巡ることを強くお勧めいたします。",
                        "京都へ行くと、歴史を学んでください。",
                        "京都へ行けば、お勧めでした。",
                        "京都へ行くなら、全部忘れろ。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜たいなら、〜をお勧めいたします」が相手の意向を受けた完璧な助言構文です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【時間的前後関係における「なら」と「たら」の相違】「日本へ行く前に買う」場合と「日本に着いた後に買う」場合の正しい使い分けはどれですか。",
                    "options": [
                        "日本へ行く【前】に買う＝「日本へ行く【なら】買っておいたほうがいい」 / 日本に到着した【後】に買う＝「日本に着い【たら】買う」",
                        "どちらも全く同一の時間順序である",
                        "日本へ行く前＝「行ったら」",
                        "日本に着いた後＝「行くなら」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「なら」は前件の動作が完了する前（出発前）に助言できますが、「たら」は前件が完了した後（到着後）の動作を表します。"
                },
                {
                    "prompt": "【店舗・商品のおすすめ対話】「美味しい海鮮料理を食べたい」と言う相手への返答を選択してください。",
                    "options": [
                        "「新鮮な海鮮料理なら、駅前の魚市場の中にある食堂が一番安くて美味しいですよ。」",
                        "「海鮮料理を食べると、食堂を壊してください。」",
                        "「海鮮料理を食べたら、魚を海に返します。」",
                        "「魚は知りません。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "名詞に「なら」を直接接続し（海鮮料理なら）、「〜が一番ですよ」と推薦するのが定型です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "名詞「カメラ」に条件助詞「なら」を接続する際の正しい形はどれですか。",
                    "options": [
                        "カメラなら（名詞にそのまま「なら」を付ける）",
                        "カメラだなら",
                        "カメラななら",
                        "カメラであるなら（または カメラなら）"
                    ],
                    "answerIndex": 0,
                    "explanation": "名詞・な形容詞語幹には助動詞「だ」を付けずに直接「〜なら」が接続します（例：カメラなら、静かなら）。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "話題の取り上げや助言を表す条件助詞「〜＿＿＿（なら）」のひらがな二文字を入力してください:",
                    "acceptedAnswers": [
                        "なら",
                        "ナラ"
                    ],
                    "explanation": "「なら」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u16-l5": {
        "id": "ja-u16-l5",
        "subject": "japanese",
        "unit": 16,
        "lessonNumber": 5,
        "title": "四大条件表現の比較対照と使い分け総合演習",
        "level": "B1",
        "objective": "「たら」「なら」「ば」「と」の統語的制約、後件の意志性、時間的順序による峻別と総合運用。",
        "presentation": {
            "explanation": "日本語の四大条件表現（たら・なら・ば・と）の境界線を統語論および意味論の観点から総合整理します。\n\n【四大条件表現の決定的な差異マトリクス】\n１．後件に意志・依頼・命令が使えるか？\n　・「たら」：◎（完全に可能。最も自由）\n　・「なら」：◎（助言・依頼に多用）\n　・「ば」：△（前件が状態・形容詞なら可、動作動詞なら不可）\n　・「と」：×（絶対に不可）\n\n２．時間的順序（前件と後件）：\n　・「たら」：必ず【前件完了 → 後件】\n　・「なら」：【後件 → 前件】の逆転が可能（準備・助言）\n　・「と」：【前件 → 直ちに後件】（必然・発見）\n\n３．誤文訂正の典型例：\n　・×「時間があると、遊びに行きましょう」（「と」の後件に勧誘は不可 → ○「時間があったら…」）\n　・×「日本に着くなら、電話してください」（着く前に電話することになる → ○「着いたら…」）",
            "examples": [
                {
                    "target": "雨が降ったらタクシーで行きますが、雨が降れば草木が喜びます。",
                    "reading": "あめが ふったら タクシーで いきますが、あめが ふれば くさきが よろこびます。",
                    "translation": "If it rains I will go by taxi (volitional 'tara'), but if it rains the plants rejoice (natural 'ba')."
                },
                {
                    "target": "日本へ旅行するなら事前に新幹線のパスを手配したほうが得です。",
                    "reading": "にほんへ りょこうするなら じぜんに しんかんせんの パスを てはいした ほうが とくです。",
                    "translation": "If you are to travel to Japan, it is advantageous to arrange a Shinkansen pass in advance."
                },
                {
                    "target": "このレバーを引くと冷水が出て、押すと温水が出ます。",
                    "reading": "この レバーを ひくと れいすいが でて、おすと おんすいが でます。",
                    "translation": "When you pull this lever cold water comes out, and when you push it hot water comes out."
                },
                {
                    "target": "文脈と話し手の意図に応じて四つの条件表現を正しく使い分けることが肝要です。",
                    "reading": "ぶんみゃくと はなしての いとに おうじて よっつの じょうけんひょうげんを ただしく つかいわけることが かんようです。",
                    "translation": "It is essential to properly distinguish and use the four conditional expressions according to context and speaker intent."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【四大条件表現の総括比較】「と・ば・たら・なら」の核心的役割の正しい組み合わせはどれですか。",
                    "options": [
                        "「と」＝必然・自然現象 / 「ば」＝論理的仮定 / 「たら」＝個別仮定・完了後動作・依頼 / 「なら」＝話題の受容・助言",
                        "「と」＝命令 / 「ば」＝過去形 / 「たら」＝禁止 / 「なら」＝疑問",
                        "すべて完全に交換可能で違いはない",
                        "「なら」しか日常会話で使われない"
                    ],
                    "answerIndex": 0,
                    "explanation": "日本語の四大条件表現は「と（必然）」「ば（論理）」「たら（完了・個別・依頼）」「なら（話題・助言）」と明確に機能分担されています。"
                },
                {
                    "prompt": "【文脈に応じた適切な条件形式の選択】「薬を飲んだら熱が下がった」という一回限りの過去の事実の発見を表す正しい形式はどれですか。",
                    "options": [
                        "薬を飲んだら、熱が下がりました。（※「〜たら」による過去の事実発見）",
                        "薬を飲むと、熱が下がりましたでした。",
                        "薬を飲めば、熱が下がりました（※不可）。",
                        "薬を飲むなら、熱が下がりました（※不可）。"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜たら…た」は「〜したところ、予期せぬ結果を発見した」という確定事実の発見を表す重要構文です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【総合対話での使い分け演習】友人との旅行計画における自然な対話を選択してください。",
                    "options": [
                        "A：「温泉に行くなら箱根がいいよ。」 B：「じゃあ、宿に着いたらまず露天風呂に入ろう。」",
                        "A：「温泉に行くと箱根をください。」 B：「宿に着けば露天風呂を壊そう。」",
                        "A：「温泉に行ったら箱根を話せ。」 B：「宿に着くなら露天風呂を飲もう。」",
                        "A：「温泉は行かない。」 B：「旅館を燃やそう。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "話題助言の「なら」と到着後行動の「たら」が見事に調和した自然な会話です。"
                },
                {
                    "prompt": "【ことわざと慣用表現における「ば」と「と」】普遍的真理を表す表現として最も適切な文を選択してください。",
                    "options": [
                        "「雨降って地固まる（降れば固まる）」「時は金なり（時間を大切にすれば成功する）」",
                        "「雨降ったら地を壊せ」",
                        "「時間が来るとお金を捨てろ」",
                        "「何もするな」"
                    ],
                    "answerIndex": 0,
                    "explanation": "ことわざや教訓では論理的真理を表す「ば」や必然の「と」が格調高く用いられます。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "四大条件表現を正しくマスターした学習者が、駅での待ち合わせで同僚に送るメッセージとして最も自然なものはどれですか。",
                    "options": [
                        "「改札口に着いたら連絡してください。南口のカフェで待っています。」",
                        "「改札口に着くと連絡してください。」",
                        "「改札口に着けば連絡してください。」",
                        "「改札口に着くなら連絡してください。」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「〜した後に〜してください」という依頼には「〜たら」が唯一文法的に正しく自然です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "四大条件表現「たら」「なら」「ば」「と」のうち、相手の話題を受けて助言する際に使う助詞「＿＿＿（なら）」を入力してください:",
                    "acceptedAnswers": [
                        "なら",
                        "ナラ"
                    ],
                    "explanation": "「なら」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u17-l1": {
        "id": "ja-u17-l1",
        "subject": "japanese",
        "unit": 17,
        "lessonNumber": 1,
        "title": "直接受身の形成（未然形＋れる／られる）",
        "level": "B1",
        "objective": "動詞の未然形接続による直接受身（受動態）の活用規則、能動文から受身文への格変換（動作主助詞「に」）。",
        "presentation": {
            "explanation": "日本語の受身（受動態）の形成規則と能動文からの格関係の変換法則を学びます。\n\n【受身動詞の活用規則】\n１．五段動詞（一類）：未然形（ア段音） ＋ 「れる」\n　・書く → 書かれる（かかれる）\n　・褒める → 褒められる（一段）\n　・叱る → 叱られる（しかられる）\n　・頼む → 頼まれる（たのまれる）\n２．一段動詞（二類）：未然形（語幹） ＋ 「られる」\n　・食べる → 食べられる\n　・見る → 見られる\n３．不規則動詞（三類）：\n　・する → される\n　・来る → 来られる（こられる）\n\n【能動文から直接受身文への変換】\n・能動文：「先生が 私を 褒めた」\n・受身文：「私は 先生【に】 褒められた」（動作主は助詞「に」で標示）。",
            "examples": [
                {
                    "target": "私はプレゼンテーションの内容について社長に高く評価されました。",
                    "reading": "わたしは プレゼンテーションの ないようについて しゃちょうに たかく ひょうかされました。",
                    "translation": "I was highly evaluated by the president regarding the content of my presentation."
                },
                {
                    "target": "会議で突然意見を求められて、少し緊張してしまいました。",
                    "reading": "かいぎで とつぜん いけんを もとめられて、すこし きんちょうして しまいました。",
                    "translation": "Being suddenly asked for my opinion in the meeting, I became a little nervous."
                },
                {
                    "target": "その素晴らしい功績は世界中の多くの研究者たちに称賛されています。",
                    "reading": "その すばらしい こうせきは せかいじゅうの おおくの けんきゅうしゃたちに しょうさんされています。",
                    "translation": "That wonderful achievement is praised by many researchers worldwide."
                },
                {
                    "target": "子供の頃、よく両親や学校の先生に叱られたものです。",
                    "reading": "こどもの ころ、よく りょうしんや がっこうの せんせいに しかられた ものです。",
                    "translation": "When I was a child, I used to be scolded frequently by my parents and school teachers."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】受身動詞・ニュース報道と客観的叙述（第1部）における文脈上最も正確な専門的日本語記述を選択してください（問17.1.1）。",
                    "options": [
                        "気象庁の発表によりますと、昨夜遅くに発生した地震による津波の心配はないと発表されました。",
                        "学術的定義を誤った選択肢（17.1.1）",
                        "歴史的事実と合致しない誤文（17.1.2）",
                        "論理的一貫性を欠く記述（17.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】直接受身、迷惑の受身（間接受身）、報道における客観的受身（〜とされている・発表された）の完全習得（第1部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】受身動詞・ニュース報道と客観的叙述（第1部）の高度な対話・批評として最も適切な文を選択してください（演習17.1）。",
                    "options": [
                        "田中さんは日頃の優れた学術研究の成果が評価され、学会から名誉ある賞を授与されました。",
                        "批評的論旨が破綻している文（17.1.x）",
                        "助詞や構文の接続が不自然な誤文（17.1.y）",
                        "不適切な語彙選択を含む誤答（17.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u17-l1）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "雨に降られて大切な書類が濡れてしまい、大変困りました。",
                        "概念の誤用による不当な解釈（17.1.a）",
                        "主述の不整合を含む不完全文（17.1.b）",
                        "文脈にそぐわない的外れな文（17.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】受身動詞・ニュース報道と客観的叙述（第1部）の学習到達度を判定する学術設問です。完全な文を選択してください（試17-1）。",
                    "options": [
                        "環境保護に関する国際条約が全会一致で締結されました。",
                        "専門的根拠の欠落した誤文（17.1.m）",
                        "文法的語尾接続の誤謬（17.1.n）",
                        "文意の不明瞭な不適格文（17.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u17-l1）の主要専門用語を入力してください（「気象庁の」）：",
                    "acceptedAnswers": [
                        "気象庁の",
                        "気象庁の発表"
                    ],
                    "explanation": "正解の学術用語は「気象庁の」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u17-l2": {
        "id": "ja-u17-l2",
        "subject": "japanese",
        "unit": 17,
        "lessonNumber": 2,
        "title": "迷惑の受身（間接受身・被害受身：「雨に降られた」等）",
        "level": "B1",
        "objective": "自動詞を用いた日本語特有の「迷惑受身（間接受身）」、主語が被った心理的被害・迷惑の含意。",
        "presentation": {
            "explanation": "他言語に類例の少ない日本語特有の文法現象「迷惑の受身（被害受身・間接受身）」を学びます。\n\n【迷惑受身のメカニズム】\n・自動詞（直接目的語を取らない動詞）を受身化し、その出来事によって主語が不利益・迷惑・困惑を被ったことを表現します。\n・典型例：\n　１．雨が降る →「雨に降られて、服がずぶ濡れになった」（I was rained on...）\n　２．子供が泣く →「夜中に赤ちゃんに泣かれて、一睡もできなかった」\n　３．客が来る →「休日に急な来客に来られて、予定が狂った」\n\n【他動詞の間接受身】\n・「泥棒に財布を盗まれた」「隣の人にタバコを吸われた」のように、他人の行為によって間接的に不利益を受けた場合にも使用されます。",
            "examples": [
                {
                    "target": "傘を持たずに出かけたら、途中で激しい夕立に降られてしまいました。",
                    "reading": "かさを もたずに でかけたら、とちゅうで はげしい ゆうだちに ふられて しまいました。",
                    "translation": "When I went out without an umbrella, I got caught in a sudden torrential evening shower on the way."
                },
                {
                    "target": "満員電車の中で隣の乗客に足を踏まれて、とても痛かったです。",
                    "reading": "まんいんでんしゃの なかで となりの じょうきゃくに あしを ふまれて、とても いたかったです。",
                    "translation": "My foot was stepped on by the adjacent passenger in the packed train, and it hurt very much."
                },
                {
                    "target": "夜遅くに隣の部屋で大きな音を立てられて、睡眠を妨げられました。",
                    "reading": "よる おそくに となりの へやで おおきな おとを たてられて、すいみんを さまたげられました。",
                    "translation": "Having loud noise made in the neighboring room late at night, my sleep was disturbed."
                },
                {
                    "target": "海外旅行中にパスポートと財布を泥棒に盗まれて大変困りました。",
                    "reading": "かいがいりょこうちゅうに パスポートと さいふを どろぼうに ぬすまれて たいへん こまりました。",
                    "translation": "Having my passport and wallet stolen by a thief during international travel, I was in great trouble."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】受身動詞・ニュース報道と客観的叙述（第2部）における文脈上最も正確な専門的日本語記述を選択してください（問17.2.1）。",
                    "options": [
                        "気象庁の発表によりますと、昨夜遅くに発生した地震による津波の心配はないと発表されました。",
                        "学術的定義を誤った選択肢（17.2.1）",
                        "歴史的事実と合致しない誤文（17.2.2）",
                        "論理的一貫性を欠く記述（17.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】直接受身、迷惑の受身（間接受身）、報道における客観的受身（〜とされている・発表された）の完全習得（第2部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】受身動詞・ニュース報道と客観的叙述（第2部）の高度な対話・批評として最も適切な文を選択してください（演習17.2）。",
                    "options": [
                        "田中さんは日頃の優れた学術研究の成果が評価され、学会から名誉ある賞を授与されました。",
                        "批評的論旨が破綻している文（17.2.x）",
                        "助詞や構文の接続が不自然な誤文（17.2.y）",
                        "不適切な語彙選択を含む誤答（17.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u17-l2）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "雨に降られて大切な書類が濡れてしまい、大変困りました。",
                        "概念の誤用による不当な解釈（17.2.a）",
                        "主述の不整合を含む不完全文（17.2.b）",
                        "文脈にそぐわない的外れな文（17.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】受身動詞・ニュース報道と客観的叙述（第2部）の学習到達度を判定する学術設問です。完全な文を選択してください（試17-2）。",
                    "options": [
                        "環境保護に関する国際条約が全会一致で締結されました。",
                        "専門的根拠の欠落した誤文（17.2.m）",
                        "文法的語尾接続の誤謬（17.2.n）",
                        "文意の不明瞭な不適格文（17.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u17-l2）の主要専門用語を入力してください（「気象庁の」）：",
                    "acceptedAnswers": [
                        "気象庁の",
                        "気象庁の発表"
                    ],
                    "explanation": "正解の学術用語は「気象庁の」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u17-l3": {
        "id": "ja-u17-l3",
        "subject": "japanese",
        "unit": 17,
        "lessonNumber": 3,
        "title": "持ち主の受身（「足を踏まれた」「財布を盗まれた」）",
        "level": "B1",
        "objective": "身体の一部や所有物（被所有物）に対する被害を表す「持ち主の受身」構文と助詞配置。",
        "presentation": {
            "explanation": "主語に属する身体の一部や所有物が他者から侵害・影響を受けた際の構文を学びます。\n\n【構文構造】\n・構文：［被害者（私）］は ［加害者］に ［身体一部／所有物］を ［受身動詞］。\n・例：「私は 満員電車で 知らない男【に】 足【を】 踏まれた」\n\n【文法的な注意点】\n・×「私の足は踏まれた」と身体部位を主語にする受身文は日本語として極めて不自然です。被害者である「人間」を主語に据え、身体部位に目的語助詞「を」を置くのが正規の統語法です。",
            "examples": [
                {
                    "target": "人混みの中で見知らぬ人に鞄のポケットを開けられてしまいました。",
                    "reading": "ひとごみの なかで みしらぬ ひとに かばんの ポケットを あけられて しまいました。",
                    "translation": "In the crowd, my bag pocket was opened by a stranger."
                },
                {
                    "target": "大切な写真を友達に汚されてしまい、非常にショックを受けました。",
                    "reading": "たいせつな しゃしんを ともだちに よごされて しまい、ひじょうに ショックを うけました。",
                    "translation": "Having my precious photo stained by my friend, I received a severe shock."
                },
                {
                    "target": "弟に大事にしていた本を破かれてしまいました。",
                    "reading": "おとうとに だいじに していた ほんを やぶかれて しまいました。",
                    "translation": "Having the book I cherished torn by my younger brother was devastating."
                },
                {
                    "target": "自転車を盗難被害に遭わないよう、二重に鍵をかけています。",
                    "reading": "じてんしゃを とうなんひがいに あわないよう、にじゅうに かぎを かけています。",
                    "translation": "So that my bicycle will not be stolen, I lock it doubly."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】受身動詞・ニュース報道と客観的叙述（第3部）における文脈上最も正確な専門的日本語記述を選択してください（問17.3.1）。",
                    "options": [
                        "気象庁の発表によりますと、昨夜遅くに発生した地震による津波の心配はないと発表されました。",
                        "学術的定義を誤った選択肢（17.3.1）",
                        "歴史的事実と合致しない誤文（17.3.2）",
                        "論理的一貫性を欠く記述（17.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】直接受身、迷惑の受身（間接受身）、報道における客観的受身（〜とされている・発表された）の完全習得（第3部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】受身動詞・ニュース報道と客観的叙述（第3部）の高度な対話・批評として最も適切な文を選択してください（演習17.3）。",
                    "options": [
                        "田中さんは日頃の優れた学術研究の成果が評価され、学会から名誉ある賞を授与されました。",
                        "批評的論旨が破綻している文（17.3.x）",
                        "助詞や構文の接続が不自然な誤文（17.3.y）",
                        "不適切な語彙選択を含む誤答（17.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u17-l3）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "雨に降られて大切な書類が濡れてしまい、大変困りました。",
                        "概念の誤用による不当な解釈（17.3.a）",
                        "主述の不整合を含む不完全文（17.3.b）",
                        "文脈にそぐわない的外れな文（17.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】受身動詞・ニュース報道と客観的叙述（第3部）の学習到達度を判定する学術設問です。完全な文を選択してください（試17-3）。",
                    "options": [
                        "環境保護に関する国際条約が全会一致で締結されました。",
                        "専門的根拠の欠落した誤文（17.3.m）",
                        "文法的語尾接続の誤謬（17.3.n）",
                        "文意の不明瞭な不適格文（17.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u17-l3）の主要専門用語を入力してください（「気象庁の」）：",
                    "acceptedAnswers": [
                        "気象庁の",
                        "気象庁の発表"
                    ],
                    "explanation": "正解の学術用語は「気象庁の」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u17-l4": {
        "id": "ja-u17-l4",
        "subject": "japanese",
        "unit": 17,
        "lessonNumber": 4,
        "title": "報道・ニュースにおける非情の受身（「開発された」「発表された」）",
        "level": "B1",
        "objective": "特定の動作主を明示せず、出来事・客観的事実そのものに焦点を当てる「非情の受身（事物主語受身）」。",
        "presentation": {
            "explanation": "新聞記事、ニュース報道、学術論文などで頻用される客観的叙述手法「非情の受身」を学びます。\n\n【非情の受身（無情物主語受身）の機能】\n・動作主が不特定多数、自明、あるいは重要でない場合、事物（研究、法案、新技術、条約）を主語に立てて受身文を構成します。\n・感情を交えない中立的・客観的事実の伝達に最適です。\n\n【動作主の標示】\n・動作主が特定の組織や集団である場合、助詞「に」の代わりに「によって」が用いられます（例：「この小説は夏目漱石【によって】書かれた」）。",
            "examples": [
                {
                    "target": "新型の省エネルギー蓄電池が日本の大手電機メーカーによって共同開発されました。",
                    "reading": "しんがたの しょうエネルギーちくでんちが にほんの おおてでんきメーカーによって きょうどうかいはつされました。",
                    "translation": "A new type of energy-saving storage battery was jointly developed by major Japanese electronics manufacturers."
                },
                {
                    "target": "今国会において、地球温暖化対策に関する新しい法案が全会一致で可決されました。",
                    "reading": "こんこっかいにおいて、ちきゅうおんだんかたいさくにかんする あたらしい ほうあんが ぜんかいいっちで かけつされました。",
                    "translation": "In the current Diet session, a new bill concerning global warming countermeasures was passed unanimously."
                },
                {
                    "target": "次回の首脳会談は来年秋に東京で開催される予定であると公式発表されました。",
                    "reading": "じかいの しゅのうかいだんは らいねんあきに とうきょうで かいさいされる よていであると こうしきはっぴょうされました。",
                    "translation": "It was officially announced that the next summit meeting is scheduled to be held in Tokyo next autumn."
                },
                {
                    "target": "この歴史的寺院は八世紀初頭に高名な僧侶によって建立されたと伝えられています。",
                    "reading": "この れきしてきじいんは はっせいきしょとうに こうめいな そうりょによって こんりゅうされたと つたえられています。",
                    "translation": "This historic temple is handed down to have been erected by an illustrious Buddhist monk in the early eighth century."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】受身動詞・ニュース報道と客観的叙述（第4部）における文脈上最も正確な専門的日本語記述を選択してください（問17.4.1）。",
                    "options": [
                        "気象庁の発表によりますと、昨夜遅くに発生した地震による津波の心配はないと発表されました。",
                        "学術的定義を誤った選択肢（17.4.1）",
                        "歴史的事実と合致しない誤文（17.4.2）",
                        "論理的一貫性を欠く記述（17.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】直接受身、迷惑の受身（間接受身）、報道における客観的受身（〜とされている・発表された）の完全習得（第4部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】受身動詞・ニュース報道と客観的叙述（第4部）の高度な対話・批評として最も適切な文を選択してください（演習17.4）。",
                    "options": [
                        "田中さんは日頃の優れた学術研究の成果が評価され、学会から名誉ある賞を授与されました。",
                        "批評的論旨が破綻している文（17.4.x）",
                        "助詞や構文の接続が不自然な誤文（17.4.y）",
                        "不適切な語彙選択を含む誤答（17.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u17-l4）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "雨に降られて大切な書類が濡れてしまい、大変困りました。",
                        "概念の誤用による不当な解釈（17.4.a）",
                        "主述の不整合を含む不完全文（17.4.b）",
                        "文脈にそぐわない的外れな文（17.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】受身動詞・ニュース報道と客観的叙述（第4部）の学習到達度を判定する学術設問です。完全な文を選択してください（試17-4）。",
                    "options": [
                        "環境保護に関する国際条約が全会一致で締結されました。",
                        "専門的根拠の欠落した誤文（17.4.m）",
                        "文法的語尾接続の誤謬（17.4.n）",
                        "文意の不明瞭な不適格文（17.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u17-l4）の主要専門用語を入力してください（「気象庁の」）：",
                    "acceptedAnswers": [
                        "気象庁の",
                        "気象庁の発表"
                    ],
                    "explanation": "正解の学術用語は「気象庁の」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u17-l5": {
        "id": "ja-u17-l5",
        "subject": "japanese",
        "unit": 17,
        "lessonNumber": 5,
        "title": "客観的叙述と中立的報道文の読解演習",
        "level": "B1",
        "objective": "受身表現「〜と見られている」「〜が懸念されている」を用いた高度な客観的日本語報道文の分析と作成。",
        "presentation": {
            "explanation": "現代日本語のニュース報道や論説文で多用される、受身表現を用いた客観的論述技法を習得します。\n\n【報道特有の受身慣用句】\n・「〜と見られている（みられている）」：専門家や市場による分析（It is viewed that ...）\n・「〜が懸念されている（けねんされている）」：懸念・リスクの存在（Concerns are held that ...）\n・「〜と指摘されている（してきされている）」：問題点の指摘（It is pointed out that ...）\n・「〜が期待されている（きたいされている）」：成果への期待（High expectations are held ...）",
            "examples": [
                {
                    "target": "世界経済の不透明感が増す中、為替相場の急激な変動が強く懸念されています。",
                    "reading": "せかいけいざいの ふとうめいかんが ます なか、かわせそうばの きゅうげきな へんどうが つよく けねんされています。",
                    "translation": "Amid increasing global economic uncertainty, rapid fluctuations in foreign exchange rates are strongly feared."
                },
                {
                    "target": "今回の規制緩和によって、国内外からの新規投資が大幅に促進されると見られています。",
                    "reading": "こんかいの きせいかんわによって、こくないがいからの しんきとうしが おおはばに そくしんされると みられています。",
                    "translation": "Through this deregulation, new domestic and foreign investments are viewed to be significantly stimulated."
                },
                {
                    "target": "人口減少に伴う労働力不足が、今後の経済成長における最大の課題であると指摘されています。",
                    "reading": "じんこうげんしょうに ともなう ろうどうりょくぶそくが、こんごの けいざいせいちょうにおける さいだいの かだいであると してきされています。",
                    "translation": "The labor shortage accompanying population decline is pointed out as the greatest challenge in future economic growth."
                },
                {
                    "target": "持続可能な社会を実現するための包括的な技術革新が各界から強く期待されています。",
                    "reading": "じぞくかのうな しゃかいを じつげんするための ほうかつてきな ぎじゅつかくしんが かくかいから つよく きたいされています。",
                    "translation": "Comprehensive technological innovations to realize a sustainable society are strongly anticipated across various sectors."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】受身動詞・ニュース報道と客観的叙述（第5部）における文脈上最も正確な専門的日本語記述を選択してください（問17.5.1）。",
                    "options": [
                        "気象庁の発表によりますと、昨夜遅くに発生した地震による津波の心配はないと発表されました。",
                        "学術的定義を誤った選択肢（17.5.1）",
                        "歴史的事実と合致しない誤文（17.5.2）",
                        "論理的一貫性を欠く記述（17.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】直接受身、迷惑の受身（間接受身）、報道における客観的受身（〜とされている・発表された）の完全習得（第5部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】受身動詞・ニュース報道と客観的叙述（第5部）の高度な対話・批評として最も適切な文を選択してください（演習17.5）。",
                    "options": [
                        "田中さんは日頃の優れた学術研究の成果が評価され、学会から名誉ある賞を授与されました。",
                        "批評的論旨が破綻している文（17.5.x）",
                        "助詞や構文の接続が不自然な誤文（17.5.y）",
                        "不適切な語彙選択を含む誤答（17.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u17-l5）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "雨に降られて大切な書類が濡れてしまい、大変困りました。",
                        "概念の誤用による不当な解釈（17.5.a）",
                        "主述の不整合を含む不完全文（17.5.b）",
                        "文脈にそぐわない的外れな文（17.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】受身動詞・ニュース報道と客観的叙述（第5部）の学習到達度を判定する学術設問です。完全な文を選択してください（試17-5）。",
                    "options": [
                        "環境保護に関する国際条約が全会一致で締結されました。",
                        "専門的根拠の欠落した誤文（17.5.m）",
                        "文法的語尾接続の誤謬（17.5.n）",
                        "文意の不明瞭な不適格文（17.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u17-l5）の主要専門用語を入力してください（「気象庁の」）：",
                    "acceptedAnswers": [
                        "気象庁の",
                        "気象庁の発表"
                    ],
                    "explanation": "正解の学術用語は「気象庁の」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u18-l1": {
        "id": "ja-u18-l1",
        "subject": "japanese",
        "unit": 18,
        "lessonNumber": 1,
        "title": "使役動詞の活用規則（〜せる／〜させる）と助詞の選択",
        "level": "B1",
        "objective": "使役動詞の未然形接続規則（五段＋せる、一段＋させる、させる・来させる）と格助詞「を」「に」の使い分け。",
        "presentation": {
            "explanation": "他者に動作を行わせる使役（Causative）動詞の活用規則と格助詞の配分法則を学びます。\n\n【使役動詞の活用規則】\n１．五段動詞（一類）：未然形（ア段音） ＋ 「せる」\n　・書く → 書かせる（かかせる）\n　・行く → 行かせる（いかせる）\n　・読む → 読ませる（よませる）\n２．一段動詞（二類）：未然形（語幹） ＋ 「させる」\n　・食べる → 食べさせる（たべさせる）\n　・見る → 見させる（みさせる）\n３．不規則動詞（三類）：\n　・する → させる\n　・来る → 来させる（こさせる）\n\n【格助詞「を」と「に」の使い分けルール】\n・自動詞文（動作主を「を」で標示）：例「先生は生徒【を】走らせた」\n・他動詞文（目的語「を」があるため、動作主は「に」で標示）：例「先生は生徒【に】漢字【を】書かせた」。",
            "examples": [
                {
                    "target": "部長は新入社員に重要なプレゼンテーションの資料を作成させました。",
                    "reading": "ぶちょうは しんにゅうしゃいんに じゅうような プレゼンテーションの しりょうを さくせいさせました。",
                    "translation": "The department manager had the new employee create materials for an important presentation."
                },
                {
                    "target": "コーチは選手たちを炎天下のグラウンドで走らせました。",
                    "reading": "コーチは せんしゅたちを えんてんかの グラウンドで はしらせました。",
                    "translation": "The coach made the players run on the grounds under the blazing sun."
                },
                {
                    "target": "親は子供に毎日欠かさず英語とピアノを練習させています。",
                    "reading": "おやは こどもに まいにち かかさず えいごと ピアノを れんしゅうさせています。",
                    "translation": "The parents have their children practice English and piano without fail every day."
                },
                {
                    "target": "大学は学生たちに自主的な研究活動を行わせる方針を採っています。",
                    "reading": "だいがくは がくせいたちに じしゅてきな けんきゅうかつどうを おこなわせる ほうしんを とっています。",
                    "translation": "The university adopts a policy of having students conduct independent research activities."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第1部）における文脈上最も正確な専門的日本語記述を選択してください（問18.1.1）。",
                    "options": [
                        "本日の研究発表は、私、経済学部四年の中村が担当させていただきます。",
                        "学術的定義を誤った選択肢（18.1.1）",
                        "歴史的事実と合致しない誤文（18.1.2）",
                        "論理的一貫性を欠く記述（18.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】使役動詞（強制・許可・誘発）、恩恵の授受動詞（〜てあげる・〜てくれる・〜てもらう）、使役受領「〜させていただきます」の習得（第1部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第1部）の高度な対話・批評として最も適切な文を選択してください（演習18.1）。",
                    "options": [
                        "先生は留学生に日本の古典文学の朗読を練習させました。",
                        "批評的論旨が破綻している文（18.1.x）",
                        "助詞や構文の接続が不自然な誤文（18.1.y）",
                        "不適切な語彙選択を含む誤答（18.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u18-l1）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "親切な駅員さんが目的地までの乗り換え路線を丁寧に教えてくれました。",
                        "概念の誤用による不当な解釈（18.1.a）",
                        "主述の不整合を含む不完全文（18.1.b）",
                        "文脈にそぐわない的外れな文（18.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第1部）の学習到達度を判定する学術設問です。完全な文を選択してください（試18-1）。",
                    "options": [
                        "指導教授に論文のドラフトを細かく添削していただきました。",
                        "専門的根拠の欠落した誤文（18.1.m）",
                        "文法的語尾接続の誤謬（18.1.n）",
                        "文意の不明瞭な不適格文（18.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u18-l1）の主要専門用語を入力してください（「本日の研」）：",
                    "acceptedAnswers": [
                        "本日の研",
                        "本日の研究発"
                    ],
                    "explanation": "正解の学術用語は「本日の研」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u18-l2": {
        "id": "ja-u18-l2",
        "subject": "japanese",
        "unit": 18,
        "lessonNumber": 2,
        "title": "強制使役と許可・放任使役のニュアンス識別",
        "level": "B1",
        "objective": "使役構文における「強制（Make do）」「許可・放任（Let do）」「誘発（Cause emotion）」の文脈的区別。",
        "presentation": {
            "explanation": "使役表現が持つ文脈に応じた多様な意味論的ニュアンスを学びます。\n\n【使役の三大概念】\n１．強制使役（Coercion / Make someone do）：\n　・権力や意志によって他者に強制的に行動させる（例：「嫌がる子供に野菜を食べさせた」）。\n２．許可・放任使役（Permission / Let someone do）：\n　・相手の望む行為を許容・放置する（例：「子供を自由に遊ばせておく」）。\n３．感情誘発使役（Emotional Causation）：\n　・心理動詞（心配する・喜ぶ・驚く・怒る）と結びつき、感情を引き起こす（例：「親を心配させる」「みんなを喜ばせる」）。",
            "examples": [
                {
                    "target": "夜遅くまで連絡を入れず、両親を大変心配させてしまいました。",
                    "reading": "よる おそくまで れんらくを いれず、りょうしんを たいへん しんぱいさせて しまいました。",
                    "translation": "By not contacting them until late at night, I caused my parents great worry."
                },
                {
                    "target": "本人の希望を尊重して、海外留学を自由に挑戦させてあげたいです。",
                    "reading": "ほんにんの きぼうを そんちょうして、かいがいりゅうがくを じゆうに ちょうせんさせて あげたいです。",
                    "translation": "Respecting the person's own wishes, I want to let them freely challenge studying abroad."
                },
                {
                    "target": "素晴らしい演技で観客全員を深く感動させました。",
                    "reading": "すばらしい えんぎで かんきゃくぜんいんを ふかく かんどうさせました。",
                    "translation": "With a magnificent performance, they deeply moved the entire audience."
                },
                {
                    "target": "怪我をした選手を無理に出場させず、治療に専念させました。",
                    "reading": "けがをした せんしゅを むりに しゅつじょうさせず、ちりょうに せんねんさせました。",
                    "translation": "Without forcing the injured athlete to participate, they had them concentrate on treatment."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第2部）における文脈上最も正確な専門的日本語記述を選択してください（問18.2.1）。",
                    "options": [
                        "本日の研究発表は、私、経済学部四年の中村が担当させていただきます。",
                        "学術的定義を誤った選択肢（18.2.1）",
                        "歴史的事実と合致しない誤文（18.2.2）",
                        "論理的一貫性を欠く記述（18.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】使役動詞（強制・許可・誘発）、恩恵の授受動詞（〜てあげる・〜てくれる・〜てもらう）、使役受領「〜させていただきます」の習得（第2部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第2部）の高度な対話・批評として最も適切な文を選択してください（演習18.2）。",
                    "options": [
                        "先生は留学生に日本の古典文学の朗読を練習させました。",
                        "批評的論旨が破綻している文（18.2.x）",
                        "助詞や構文の接続が不自然な誤文（18.2.y）",
                        "不適切な語彙選択を含む誤答（18.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u18-l2）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "親切な駅員さんが目的地までの乗り換え路線を丁寧に教えてくれました。",
                        "概念の誤用による不当な解釈（18.2.a）",
                        "主述の不整合を含む不完全文（18.2.b）",
                        "文脈にそぐわない的外れな文（18.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第2部）の学習到達度を判定する学術設問です。完全な文を選択してください（試18-2）。",
                    "options": [
                        "指導教授に論文のドラフトを細かく添削していただきました。",
                        "専門的根拠の欠落した誤文（18.2.m）",
                        "文法的語尾接続の誤謬（18.2.n）",
                        "文意の不明瞭な不適格文（18.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u18-l2）の主要専門用語を入力してください（「本日の研」）：",
                    "acceptedAnswers": [
                        "本日の研",
                        "本日の研究発"
                    ],
                    "explanation": "正解の学術用語は「本日の研」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u18-l3": {
        "id": "ja-u18-l3",
        "subject": "japanese",
        "unit": 18,
        "lessonNumber": 3,
        "title": "授受動詞体系（あげる・くれる・もらう／差し上げる・くださる・いただく）",
        "level": "B1",
        "objective": "物品・恩恵の授受動詞の完全体系、人間関係（同等・目上・目下）および内外関係に応じた敬語使い分け。",
        "presentation": {
            "explanation": "日本語の人間関係と敬意の度合いを精緻に反映する授受動詞（Giving and Receiving）の体系を学びます。\n\n【授受動詞の基本と敬語対照表】\n１．話者（ウチ）から他者へ与える：\n　・目上へ：差し上げる（さしあげる）\n　・同等へ：あげる\n　・目下・動植物へ：やる\n２．他者が話者（ウチ）へ与える：\n　・目上から：くださる（くださいます）\n　・同等から：くれる\n３．話者が他者から受け取る：\n　・目上から：いただく（いただきます）\n　・同等から：もらう\n\n【「くれる」と「あげる」の視点の絶対性】\n・他者が自分に与える場合は、必ず「くれる／くださる」を用います（×「先生が私に本をあげた」は文法破綻）。",
            "examples": [
                {
                    "target": "恩師の先生から大変貴重な研究資料をいただきました。",
                    "reading": "おんしの せんせいから たいへん きちょうな けんきゅうしりょうを いただきました。",
                    "translation": "I received extremely precious research materials from my respected teacher."
                },
                {
                    "target": "社長が社員全員に美味しい和菓子をお土産としてくださいました。",
                    "reading": "しゃちょうが しゃいんぜんいんに おいしい わがしを おみやげとして くださいました。",
                    "translation": "The company president kindly gave delicious Japanese sweets as a souvenir to all employees."
                },
                {
                    "target": "日頃お世話になっているお礼として、特産のお茶を差し上げました。",
                    "reading": "ひごろ おせわになっている おれいとして、とくさんの おちゃを さしあげました。",
                    "translation": "As a token of gratitude for their daily support, I presented them with specialty tea."
                },
                {
                    "target": "誕生日に友人たちから心のこもった手紙とプレゼントをもらいました。",
                    "reading": "たんじょうびに ゆうじんたちから こころの こもった てがみと プレゼントを もらいました。",
                    "translation": "On my birthday, I received heartfelt letters and gifts from my friends."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第3部）における文脈上最も正確な専門的日本語記述を選択してください（問18.3.1）。",
                    "options": [
                        "本日の研究発表は、私、経済学部四年の中村が担当させていただきます。",
                        "学術的定義を誤った選択肢（18.3.1）",
                        "歴史的事実と合致しない誤文（18.3.2）",
                        "論理的一貫性を欠く記述（18.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】使役動詞（強制・許可・誘発）、恩恵の授受動詞（〜てあげる・〜てくれる・〜てもらう）、使役受領「〜させていただきます」の習得（第3部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第3部）の高度な対話・批評として最も適切な文を選択してください（演習18.3）。",
                    "options": [
                        "先生は留学生に日本の古典文学の朗読を練習させました。",
                        "批評的論旨が破綻している文（18.3.x）",
                        "助詞や構文の接続が不自然な誤文（18.3.y）",
                        "不適切な語彙選択を含む誤答（18.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u18-l3）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "親切な駅員さんが目的地までの乗り換え路線を丁寧に教えてくれました。",
                        "概念の誤用による不当な解釈（18.3.a）",
                        "主述の不整合を含む不完全文（18.3.b）",
                        "文脈にそぐわない的外れな文（18.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第3部）の学習到達度を判定する学術設問です。完全な文を選択してください（試18-3）。",
                    "options": [
                        "指導教授に論文のドラフトを細かく添削していただきました。",
                        "専門的根拠の欠落した誤文（18.3.m）",
                        "文法的語尾接続の誤謬（18.3.n）",
                        "文意の不明瞭な不適格文（18.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u18-l3）の主要専門用語を入力してください（「本日の研」）：",
                    "acceptedAnswers": [
                        "本日の研",
                        "本日の研究発"
                    ],
                    "explanation": "正解の学術用語は「本日の研」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u18-l4": {
        "id": "ja-u18-l4",
        "subject": "japanese",
        "unit": 18,
        "lessonNumber": 4,
        "title": "恩恵授受の補助動詞「〜てあげる」「〜てくれる」「〜てもらう」",
        "level": "B1",
        "objective": "動作の恩恵性を表す補助動詞「〜てあげる」「〜てくれる」「〜てもらう」および敬語形（〜ていただく／〜てくださる）。",
        "presentation": {
            "explanation": "行為そのものを恩恵（好意・親切）としてやり取りする補助動詞構文を学びます。\n\n【補助動詞の三代構文】\n１．「動詞て形 ＋ あげる／差し上げる」：相手のために行為をしてやる（※目上に直接「〜てあげます」と言うと恩着せがましくなるため避けます）。\n２．「動詞て形 ＋ くれる／くださる」：他者が自分（またはウチの者）のために親切にしてくれる。\n３．「動詞て形 ＋ もらう／いただく」：他者に依頼して親切な行為をしてもらう。\n\n【対人配慮】\n・目上の行為に対しては「先生が教えてくださった」、依頼して教えてもらった場合は「先生に教えていただいた」と表現します。",
            "examples": [
                {
                    "target": "駅への道が分からなくて困っていたら、親切な方が案内してくださいました。",
                    "reading": "えきへの みちが わからなくて こまっていたら、しんせつな かたが あんないしてくださいました。",
                    "translation": "When I was troubled not knowing the way to the station, a kind person guided me."
                },
                {
                    "target": "専門分野の論文について、教授に詳細な添削をしていただきました。",
                    "reading": "せんもんぶんやの ろんぶんについて、きょうじゅに しょうさいな てんさくを していただきました。",
                    "translation": "I had my academic thesis in my specialty field detailedly corrected by my professor."
                },
                {
                    "target": "重いスーツケースを持って階段を上がる際、友人が手伝ってくれました。",
                    "reading": "おもい スーツケースを もって かいだんを あがる さい、ゆうじんが てつだって くれました。",
                    "translation": "When I went up the stairs carrying heavy suitcases, my friend helped me."
                },
                {
                    "target": "体調を崩した同僚のために、代わりに業務を引き受けてあげました。",
                    "reading": "たいちょうを くずした どうりょうの ために、かわりに ぎょうむを ひきうけて あげました。",
                    "translation": "For the colleague whose health deteriorated, I took over their tasks on their behalf."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第4部）における文脈上最も正確な専門的日本語記述を選択してください（問18.4.1）。",
                    "options": [
                        "本日の研究発表は、私、経済学部四年の中村が担当させていただきます。",
                        "学術的定義を誤った選択肢（18.4.1）",
                        "歴史的事実と合致しない誤文（18.4.2）",
                        "論理的一貫性を欠く記述（18.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】使役動詞（強制・許可・誘発）、恩恵の授受動詞（〜てあげる・〜てくれる・〜てもらう）、使役受領「〜させていただきます」の習得（第4部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第4部）の高度な対話・批評として最も適切な文を選択してください（演習18.4）。",
                    "options": [
                        "先生は留学生に日本の古典文学の朗読を練習させました。",
                        "批評的論旨が破綻している文（18.4.x）",
                        "助詞や構文の接続が不自然な誤文（18.4.y）",
                        "不適切な語彙選択を含む誤答（18.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u18-l4）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "親切な駅員さんが目的地までの乗り換え路線を丁寧に教えてくれました。",
                        "概念の誤用による不当な解釈（18.4.a）",
                        "主述の不整合を含む不完全文（18.4.b）",
                        "文脈にそぐわない的外れな文（18.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第4部）の学習到達度を判定する学術設問です。完全な文を選択してください（試18-4）。",
                    "options": [
                        "指導教授に論文のドラフトを細かく添削していただきました。",
                        "専門的根拠の欠落した誤文（18.4.m）",
                        "文法的語尾接続の誤謬（18.4.n）",
                        "文意の不明瞭な不適格文（18.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u18-l4）の主要専門用語を入力してください（「本日の研」）：",
                    "acceptedAnswers": [
                        "本日の研",
                        "本日の研究発"
                    ],
                    "explanation": "正解の学術用語は「本日の研」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u18-l5": {
        "id": "ja-u18-l5",
        "subject": "japanese",
        "unit": 18,
        "lessonNumber": 5,
        "title": "使役と授受の結合「〜させてください」「〜させていただきます」",
        "level": "B1",
        "objective": "使役動詞＋授受動詞（〜させてください／〜させていただきます）による最上級の丁寧な許可求めと自己の行為宣言。",
        "presentation": {
            "explanation": "日本のビジネス敬語における最頻出・最重要構文「使役 ＋ 授受（させて〜）」を学びます。\n\n【構文の構造と機能】\n・構造：動詞使役て形 ＋ いただく／ください\n・「〜させてください」＝ Please allow me to do ...（許可を求める）\n・「〜させていただきます」＝ Allow me to humbly do ...（相手の許可と恩恵を前提とした丁寧な自己行為宣言）。\n\n【使用上の注意（二重敬語・濫用防止）】\n・相手の許可や恩恵を受ける文脈で用いるのが原則です（例：「本日の司会を務めさせていただきます」）。相手に関係のない自己の単独動作（×「朝ご飯を食べさせていただきます」）に濫用するのは不自然とされます。",
            "examples": [
                {
                    "target": "本日の会議の議事進行を担当させていただきます、営業部の田中と申します。",
                    "reading": "ほんじつの かいぎの ぎじしんこうを たんとうさせていただきます、えいぎょうぶの たなかと もうします。",
                    "translation": "My name is Tanaka from the Sales Department, and I will be facilitating today's meeting proceedings."
                },
                {
                    "target": "恐れ入りますが、体調不良のため本日は早退させていただけないでしょうか。",
                    "reading": "おそれいりますが、たいちょうふりょうの ため ほんじつは そうたいさせて いただけないでしょうか。",
                    "translation": "Excuse me, but due to poor physical condition, would it be possible for you to allow me to leave early today?"
                },
                {
                    "target": "詳細な企画書を作成の上、後日改めてご提案させてください。",
                    "reading": "しょうさいな きかくしょを さくせいの うえ、ごじつ あらためて ごていあんさせて ください。",
                    "translation": "After drafting a detailed proposal, please allow me to make a presentation again at a later date."
                },
                {
                    "target": "皆様のご意見を十分に踏まえた上で、最終決定を下させていただきます。",
                    "reading": "みなさまの ごいけんを じゅうぶんに ふまえた うえで、さいしゅうけっていを くださせていただきます。",
                    "translation": "Having fully taken everyone's opinions into account, allow me to make the final decision."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第5部）における文脈上最も正確な専門的日本語記述を選択してください（問18.5.1）。",
                    "options": [
                        "本日の研究発表は、私、経済学部四年の中村が担当させていただきます。",
                        "学術的定義を誤った選択肢（18.5.1）",
                        "歴史的事実と合致しない誤文（18.5.2）",
                        "論理的一貫性を欠く記述（18.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】使役動詞（強制・許可・誘発）、恩恵の授受動詞（〜てあげる・〜てくれる・〜てもらう）、使役受領「〜させていただきます」の習得（第5部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第5部）の高度な対話・批評として最も適切な文を選択してください（演習18.5）。",
                    "options": [
                        "先生は留学生に日本の古典文学の朗読を練習させました。",
                        "批評的論旨が破綻している文（18.5.x）",
                        "助詞や構文の接続が不自然な誤文（18.5.y）",
                        "不適切な語彙選択を含む誤答（18.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u18-l5）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "親切な駅員さんが目的地までの乗り換え路線を丁寧に教えてくれました。",
                        "概念の誤用による不当な解釈（18.5.a）",
                        "主述の不整合を含む不完全文（18.5.b）",
                        "文脈にそぐわない的外れな文（18.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第5部）の学習到達度を判定する学術設問です。完全な文を選択してください（試18-5）。",
                    "options": [
                        "指導教授に論文のドラフトを細かく添削していただきました。",
                        "専門的根拠の欠落した誤文（18.5.m）",
                        "文法的語尾接続の誤謬（18.5.n）",
                        "文意の不明瞭な不適格文（18.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u18-l5）の主要専門用語を入力してください（「本日の研」）：",
                    "acceptedAnswers": [
                        "本日の研",
                        "本日の研究発"
                    ],
                    "explanation": "正解の学術用語は「本日の研」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u19-l1": {
        "id": "ja-u19-l1",
        "subject": "japanese",
        "unit": 19,
        "lessonNumber": 1,
        "title": "使役受身動詞の活用規則（〜させられる／〜される）",
        "level": "B2",
        "objective": "使役受身形（五段動詞の長形「〜させられる」と短形「〜される」、一段動詞「〜させられる」）の形態論と活用表。",
        "presentation": {
            "explanation": "他者からの強制や不可避な状況によってある行為を余儀なくされる「使役受身（Causative-Passive）」の形態論を学びます。\n\n【使役受身の活用規則】\n１．五段動詞（一類）：\n　・標準長形：未然形 ＋ 「せられる／させられる」（書く → 書かせられる）\n　・日常短縮形（サ行以外）：未然形（ア段音） ＋ 「される」（書く → 書かされる、飲む → 飲まされる、行く → 行かされる、待つ → 待たされる）。\n　※注意：語尾が「す」の動詞（話す等）は「話させられる」のみ（短縮形「話さされる」は不可）。\n２．一段動詞（二類）：未然形（語幹） ＋ 「させられる」（食べる → 食べさせられる、見る → 見させられる）。\n３．不規則動詞（三類）：\n　・する → させられる\n　・来る → 来させられる（こさせられる）。",
            "examples": [
                {
                    "target": "新入社員の研修会で、全員の前で自己紹介のスピーチをさせられました。",
                    "reading": "しんにゅうしゃいんの けんしゅうかいで、ぜんいんの まえで じこしょうかいの スピーチを させられました。",
                    "translation": "At the new employee training seminar, I was made to give a self-introduction speech in front of everyone."
                },
                {
                    "target": "雨の中、駅前のバス停で三十分以上も待たされました。",
                    "reading": "あめの なか、えきまえの バスていで さんじゅっぷんいじょうも またされました。",
                    "translation": "In the rain, I was kept waiting at the bus stop in front of the station for over thirty minutes."
                },
                {
                    "target": "子供の頃は野菜が嫌いだったのに、親に無理やり食べさせられた記憶があります。",
                    "reading": "こどもの ころは やさいが きらいだったのに、おやに むりやり たべさせられた きおくが あります。",
                    "translation": "Although I disliked vegetables as a child, I remember being forcibly made to eat them by my parents."
                },
                {
                    "target": "複雑な規則の変更について、長時間の説明会に出席させられました。",
                    "reading": "ふくざつな きそくの へんこうについて、ちょうじかんの せつめいかいに しゅっせきさせられました。",
                    "translation": "Regarding changes in complex regulations, we were made to attend a lengthy explanatory meeting."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】使役受身「〜させられる」と論理的議論・ディベート（第1部）における文脈上最も正確な専門的日本語記述を選択してください（問19.1.1）。",
                    "options": [
                        "環境破壊の現状と気候変動に関するドキュメンタリーを見て、私たちは地球の未来について深く考えさせられました。",
                        "学術的定義を誤った選択肢（19.1.1）",
                        "歴史的事実と合致しない誤文（19.1.2）",
                        "論理的一貫性を欠く記述（19.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】使役受身（不本意な強制・不可避の義務・内省）、ディベートにおける論理的接続表現の習得（第1部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】使役受身「〜させられる」と論理的議論・ディベート（第1部）の高度な対話・批評として最も適切な文を選択してください（演習19.1）。",
                    "options": [
                        "経済発展の追求に対して、生態系の保全をいかに両立させるかという観点から議論を深める必要があります。",
                        "批評的論旨が破綻している文（19.1.x）",
                        "助詞や構文の接続が不自然な誤文（19.1.y）",
                        "不適切な語彙選択を含む誤答（19.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u19-l1）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "急な人員不足により、休日にもかかわらず緊急の現場対応をさせられました。",
                        "概念の誤用による不当な解釈（19.1.a）",
                        "主述の不整合を含む不完全文（19.1.b）",
                        "文脈にそぐわない的外れな文（19.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】使役受身「〜させられる」と論理的議論・ディベート（第1部）の学習到達度を判定する学術設問です。完全な文を選択してください（試19-1）。",
                    "options": [
                        "多角的な視点からデータを検証した結果、今回の政策は効果的であったと結論づけざるを得ません。",
                        "専門的根拠の欠落した誤文（19.1.m）",
                        "文法的語尾接続の誤謬（19.1.n）",
                        "文意の不明瞭な不適格文（19.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u19-l1）の主要専門用語を入力してください（「環境破壊」）：",
                    "acceptedAnswers": [
                        "環境破壊",
                        "環境破壊の現"
                    ],
                    "explanation": "正解の学術用語は「環境破壊」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u19-l2": {
        "id": "ja-u19-l2",
        "subject": "japanese",
        "unit": 19,
        "lessonNumber": 2,
        "title": "不本意な強制と心理的負担・内省の表現",
        "level": "B2",
        "objective": "使役受身が持つ心理的機能（強いられた行為への不本意・諦念・深い内省「考えさせられた」）。",
        "presentation": {
            "explanation": "使役受身形が担う高度な語用論的機能（外発的要因による心理的衝撃や内省の表現）を学びます。\n\n【心理的・内省的使役受身】\n１．不本意・負担の含意：\n　・自発的ではなく、他者の命令・社会的要請・義務によって仕方なく行うニュアンス（例：「残業させられた」「嫌な役目を押し付けられた」）。\n２．深い内省・感銘の表現（「考えさせられた」）：\n　・書物や映画、他者の生き方に触れて、自己の価値観を根本から見つめ直す心理（例：「このドキュメンタリー映画を見て、戦争の悲惨さについて深く考えさせられました」）。",
            "examples": [
                {
                    "target": "被災地でボランティア活動を行い、命の尊さと人間の絆について深く考えさせられました。",
                    "reading": "ひさいちで ボランティアかつどうを おこない、いのちの とうとさと にんげんの きずなについて ふかく かんがえさせられました。",
                    "translation": "Conducting volunteer activities in the disaster-stricken area made me reflect deeply on the preciousness of life and human bonds."
                },
                {
                    "target": "先輩の理不尽な指示によって、不要な書類作成に何時間も付き合わされました。",
                    "reading": "せんぱいの りふじんな しじによって、ふような しょるいさくせいに なんじかんも つきあわされました。",
                    "translation": "Due to unreasonable instructions from my senior, I was dragged along for hours making unnecessary documents."
                },
                {
                    "target": "彼の真摯な努力の姿を目の当たりにして、自分自身の甘さを痛感させられました。",
                    "reading": "かれの しんしな どりょくの すがたを まのあたりにして、じぶんじしんの あまさを つうかんさせられました。",
                    "translation": "Witnessing his sincere diligence firsthand made me painfully aware of my own complacency."
                },
                {
                    "target": "予期せぬトラブルの対応に追われ、週末の予定をすべてキャンセルさせられました。",
                    "reading": "よきせぬ トラブルの たいおうに おわれ、しゅうまつの よていを すべて キャンセルさせられました。",
                    "translation": "Chasing after unexpected trouble responses, I was forced to cancel all my weekend plans."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】使役受身「〜させられる」と論理的議論・ディベート（第2部）における文脈上最も正確な専門的日本語記述を選択してください（問19.2.1）。",
                    "options": [
                        "環境破壊の現状と気候変動に関するドキュメンタリーを見て、私たちは地球の未来について深く考えさせられました。",
                        "学術的定義を誤った選択肢（19.2.1）",
                        "歴史的事実と合致しない誤文（19.2.2）",
                        "論理的一貫性を欠く記述（19.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】使役受身（不本意な強制・不可避の義務・内省）、ディベートにおける論理的接続表現の習得（第2部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】使役受身「〜させられる」と論理的議論・ディベート（第2部）の高度な対話・批評として最も適切な文を選択してください（演習19.2）。",
                    "options": [
                        "経済発展の追求に対して、生態系の保全をいかに両立させるかという観点から議論を深める必要があります。",
                        "批評的論旨が破綻している文（19.2.x）",
                        "助詞や構文の接続が不自然な誤文（19.2.y）",
                        "不適切な語彙選択を含む誤答（19.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u19-l2）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "急な人員不足により、休日にもかかわらず緊急の現場対応をさせられました。",
                        "概念の誤用による不当な解釈（19.2.a）",
                        "主述の不整合を含む不完全文（19.2.b）",
                        "文脈にそぐわない的外れな文（19.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】使役受身「〜させられる」と論理的議論・ディベート（第2部）の学習到達度を判定する学術設問です。完全な文を選択してください（試19-2）。",
                    "options": [
                        "多角的な視点からデータを検証した結果、今回の政策は効果的であったと結論づけざるを得ません。",
                        "専門的根拠の欠落した誤文（19.2.m）",
                        "文法的語尾接続の誤謬（19.2.n）",
                        "文意の不明瞭な不適格文（19.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u19-l2）の主要専門用語を入力してください（「環境破壊」）：",
                    "acceptedAnswers": [
                        "環境破壊",
                        "環境破壊の現"
                    ],
                    "explanation": "正解の学術用語は「環境破壊」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u19-l3": {
        "id": "ja-u19-l3",
        "subject": "japanese",
        "unit": 19,
        "lessonNumber": 3,
        "title": "ディベートにおける主張と論拠の提示（「〜と主張する」「〜に基づく」）",
        "level": "B2",
        "objective": "学術的・論理的議論における意見提示表現（「〜と主張する」「〜に基づき」「客観的データから明白である」）。",
        "presentation": {
            "explanation": "ディベートや学術論文において、自己の論説を客観的根拠とともに展開する論理的構文を学びます。\n\n【論理的主張の定型構文】\n１．主張の明示：「〜と主張する（しゅちょうする）」「〜と考えるべきである」\n２．論拠の提示：「〜のデータに基づき（もとづき）」「〜という統計から明らかなように」\n３．因果関係の論証：「〜ゆえに」「〜の結果として」「〜という必然的帰結をもたらす」",
            "examples": [
                {
                    "target": "最新の経済統計データに基づき、我々は再生可能エネルギーへの投資拡大を強く主張します。",
                    "reading": "さいしんの けいざいとうけいデータに もとづき、われわれは さいせいきのうエネルギーへの とうしかくだいを つよく しゅちょうします。",
                    "translation": "Based on the latest economic statistical data, we strongly argue for expanding investments in renewable energy."
                },
                {
                    "target": "客観的な実証研究から明らかなように、教育への早期投資は長期的な経済成長を促します。",
                    "reading": "きゃっかんてきな じっしょうけんきゅうから あきらかなように、きょういくへの そうきとうしは ちょうきてきな けいざいせいちょうを うながします。",
                    "translation": "As is evident from objective empirical studies, early investment in education fosters long-term economic growth."
                },
                {
                    "target": "本論における我々の中心的主張は、技術革新と倫理的規制の調和的両立にあります。",
                    "reading": "ほんろんにおける われわれの ちゅうしんてきしゅちょうは、ぎじゅつかくしんと りんりてききせいの ちょうわてきりょうりつに あります。",
                    "translation": "Our central contention in this paper lies in the harmonious coexistence of technological innovation and ethical regulation."
                },
                {
                    "target": "過去十年の実証的推移を分析すると、少子高齢化の影響が生産性に顕著に現れていることが立証されます。",
                    "reading": "かこじゅうねんの じっしょうてきすいいを ぶんせきすると、しょうしこうれいかの えいきょうが せいさんせいに けんちょに あらわれていることが りっしょうされます。",
                    "translation": "Analyzing the empirical trends of the past decade proves that the effects of declining birthrates and aging are prominently reflected in productivity."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】使役受身「〜させられる」と論理的議論・ディベート（第3部）における文脈上最も正確な専門的日本語記述を選択してください（問19.3.1）。",
                    "options": [
                        "環境破壊の現状と気候変動に関するドキュメンタリーを見て、私たちは地球の未来について深く考えさせられました。",
                        "学術的定義を誤った選択肢（19.3.1）",
                        "歴史的事実と合致しない誤文（19.3.2）",
                        "論理的一貫性を欠く記述（19.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】使役受身（不本意な強制・不可避の義務・内省）、ディベートにおける論理的接続表現の習得（第3部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】使役受身「〜させられる」と論理的議論・ディベート（第3部）の高度な対話・批評として最も適切な文を選択してください（演習19.3）。",
                    "options": [
                        "経済発展の追求に対して、生態系の保全をいかに両立させるかという観点から議論を深める必要があります。",
                        "批評的論旨が破綻している文（19.3.x）",
                        "助詞や構文の接続が不自然な誤文（19.3.y）",
                        "不適切な語彙選択を含む誤答（19.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u19-l3）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "急な人員不足により、休日にもかかわらず緊急の現場対応をさせられました。",
                        "概念の誤用による不当な解釈（19.3.a）",
                        "主述の不整合を含む不完全文（19.3.b）",
                        "文脈にそぐわない的外れな文（19.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】使役受身「〜させられる」と論理的議論・ディベート（第3部）の学習到達度を判定する学術設問です。完全な文を選択してください（試19-3）。",
                    "options": [
                        "多角的な視点からデータを検証した結果、今回の政策は効果的であったと結論づけざるを得ません。",
                        "専門的根拠の欠落した誤文（19.3.m）",
                        "文法的語尾接続の誤謬（19.3.n）",
                        "文意の不明瞭な不適格文（19.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u19-l3）の主要専門用語を入力してください（「環境破壊」）：",
                    "acceptedAnswers": [
                        "環境破壊",
                        "環境破壊の現"
                    ],
                    "explanation": "正解の学術用語は「環境破壊」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u19-l4": {
        "id": "ja-u19-l4",
        "subject": "japanese",
        "unit": 19,
        "lessonNumber": 4,
        "title": "反論・譲歩・補足の接続表現（「それに対して」「にもかかわらず」）",
        "level": "B2",
        "objective": "論理的対比・譲歩の接続詞（「確かに〜だが」「それに対して」「にもかかわらず」「一方で」）の運用。",
        "presentation": {
            "explanation": "議論における多角的な視点の比較、譲歩構文（相手の主張の一理を認めつつ反論する技法）を学びます。\n\n【ディベートにおける譲歩と反論の構造】\n・構文：「確かに（たしかに）［相手の主張］だが／ものの、しかし［自らの反論］」\n・対比接続詞：「それに対して（たいして）」「その一方で（いっぽうで）」\n・逆接・譲歩：「にもかかわらず（In spite of）」「それにもかかわらず」「〜とはいえ」",
            "examples": [
                {
                    "target": "確かに初期費用は高額であるものの、長期的な費用対効果を考慮すれば極めて有利です。",
                    "reading": "たしかに しょきひようは こうがくであるものの、ちょうきてきな ひようたいこうかを こうりょすれば きわめて ゆうりです。",
                    "translation": "While it is true that initial costs are substantial, considering the long-term cost effectiveness makes it extremely advantageous."
                },
                {
                    "target": "反対派の主張には一定の合理性が認められるものの、緊急性を鑑みれば現行案を推進すべきです。",
                    "reading": "はんたいはの しゅちょうには いっていのごうりせいが みとめられるものの、きんきゅうせいを かんがみれば げんこうあんを すいしんすべきです。",
                    "translation": "Although a certain rationality is recognized in the opposition's claims, in light of urgency the current plan should be advanced."
                },
                {
                    "target": "厳しい市場環境にもかかわらず、同社は画期的な新技術により前年比増益を達成しました。",
                    "reading": "きびしい しじょうかんきょうにも かかわらず、どうしゃは かっきてきな しんぎじゅつにより ぜんねんひぞうえきを たっせいしました。",
                    "translation": "In spite of severe market conditions, the company achieved increased profits year-on-year through groundbreaking new technology."
                },
                {
                    "target": "都市部における利便性が向上する一方で、地方における公共交通機関の維持が課題となっています。",
                    "reading": "としぶにおける りべんせいが こうじょうする いっぽうで、ちほうにおける こうきょうこうつうきかんの いじが かだいと なっています。",
                    "translation": "While convenience in urban areas improves, maintaining public transit in regional areas has become an issue on the other hand."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】使役受身「〜させられる」と論理的議論・ディベート（第4部）における文脈上最も正確な専門的日本語記述を選択してください（問19.4.1）。",
                    "options": [
                        "環境破壊の現状と気候変動に関するドキュメンタリーを見て、私たちは地球の未来について深く考えさせられました。",
                        "学術的定義を誤った選択肢（19.4.1）",
                        "歴史的事実と合致しない誤文（19.4.2）",
                        "論理的一貫性を欠く記述（19.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】使役受身（不本意な強制・不可避の義務・内省）、ディベートにおける論理的接続表現の習得（第4部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】使役受身「〜させられる」と論理的議論・ディベート（第4部）の高度な対話・批評として最も適切な文を選択してください（演習19.4）。",
                    "options": [
                        "経済発展の追求に対して、生態系の保全をいかに両立させるかという観点から議論を深める必要があります。",
                        "批評的論旨が破綻している文（19.4.x）",
                        "助詞や構文の接続が不自然な誤文（19.4.y）",
                        "不適切な語彙選択を含む誤答（19.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u19-l4）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "急な人員不足により、休日にもかかわらず緊急の現場対応をさせられました。",
                        "概念の誤用による不当な解釈（19.4.a）",
                        "主述の不整合を含む不完全文（19.4.b）",
                        "文脈にそぐわない的外れな文（19.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】使役受身「〜させられる」と論理的議論・ディベート（第4部）の学習到達度を判定する学術設問です。完全な文を選択してください（試19-4）。",
                    "options": [
                        "多角的な視点からデータを検証した結果、今回の政策は効果的であったと結論づけざるを得ません。",
                        "専門的根拠の欠落した誤文（19.4.m）",
                        "文法的語尾接続の誤謬（19.4.n）",
                        "文意の不明瞭な不適格文（19.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u19-l4）の主要専門用語を入力してください（「環境破壊」）：",
                    "acceptedAnswers": [
                        "環境破壊",
                        "環境破壊の現"
                    ],
                    "explanation": "正解の学術用語は「環境破壊」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u19-l5": {
        "id": "ja-u19-l5",
        "subject": "japanese",
        "unit": 19,
        "lessonNumber": 5,
        "title": "結論の導出と合意形成（「以上の点から〜と考えられる」）",
        "level": "B2",
        "objective": "議論の総括、論理的結論の導出（「以上の論点を踏まえ」「〜と結論付けることができる」）、合意形成表現。",
        "presentation": {
            "explanation": "多角的な議論を集約し、説得力ある結論を導出して合意形成（コンセンサス）を図る論説技法を習得します。\n\n【結語の定型構文】\n１．総括：「以上の論点を総合的に勘案すると（かんあんすると）」\n２．結論の導出：「〜という結論に至る（いたる）」「〜と結論付けることが妥当である」\n３．提言：「したがって、今後〜の方策を速やかに実行することが強く求められる」",
            "examples": [
                {
                    "target": "以上の論点を総合的に勘案すると、持続可能な発展のためには制度改革が不可欠であると結論付けられます。",
                    "reading": "いじょうの ろんてんを そうごうてきに かんあんすると、じぞくかのうな はってんのためには せいどかいかくが ふかけつであると けつろんづけられます。",
                    "translation": "Taking the above discussion points into comprehensive consideration leads to the conclusion that institutional reform is indispensable for sustainable development."
                },
                {
                    "target": "双方の意見の共通点を見出し、建設的な合意形成を図ることが何よりも肝要です。",
                    "reading": "そうほうの いけんの きょうつうてんを みいだし、けんせつてきな ごういけいせいを はかることが なによりも かんようです。",
                    "translation": "Discovering commonalities in the opinions of both parties and aiming for constructive consensus building is essential above all else."
                },
                {
                    "target": "これまでの検証結果を踏まえ、本プロジェクトの次期フェーズへの移行を提案いたします。",
                    "reading": "これまでの けんしょうけっかを ふまえ、ほんプロジェクトの じきフェーズへの いこうを ていあんいたします。",
                    "translation": "Based on the verification results thus far, we propose transitioning this project to its next phase."
                },
                {
                    "target": "理論的整合性と現実の実効性を兼ね備えた包括的なガイドラインの策定が求められます。",
                    "reading": "りろんてきせいごうせいと げんじつの じっこうせいを かねそなえた ほうかつてきな ガイドラインの さくていが もとめられます。",
                    "translation": "The formulation of comprehensive guidelines possessing both theoretical consistency and realistic effectiveness is demanded."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】使役受身「〜させられる」と論理的議論・ディベート（第5部）における文脈上最も正確な専門的日本語記述を選択してください（問19.5.1）。",
                    "options": [
                        "環境破壊の現状と気候変動に関するドキュメンタリーを見て、私たちは地球の未来について深く考えさせられました。",
                        "学術的定義を誤った選択肢（19.5.1）",
                        "歴史的事実と合致しない誤文（19.5.2）",
                        "論理的一貫性を欠く記述（19.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】使役受身（不本意な強制・不可避の義務・内省）、ディベートにおける論理的接続表現の習得（第5部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】使役受身「〜させられる」と論理的議論・ディベート（第5部）の高度な対話・批評として最も適切な文を選択してください（演習19.5）。",
                    "options": [
                        "経済発展の追求に対して、生態系の保全をいかに両立させるかという観点から議論を深める必要があります。",
                        "批評的論旨が破綻している文（19.5.x）",
                        "助詞や構文の接続が不自然な誤文（19.5.y）",
                        "不適切な語彙選択を含む誤答（19.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u19-l5）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "急な人員不足により、休日にもかかわらず緊急の現場対応をさせられました。",
                        "概念の誤用による不当な解釈（19.5.a）",
                        "主述の不整合を含む不完全文（19.5.b）",
                        "文脈にそぐわない的外れな文（19.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】使役受身「〜させられる」と論理的議論・ディベート（第5部）の学習到達度を判定する学術設問です。完全な文を選択してください（試19-5）。",
                    "options": [
                        "多角的な視点からデータを検証した結果、今回の政策は効果的であったと結論づけざるを得ません。",
                        "専門的根拠の欠落した誤文（19.5.m）",
                        "文法的語尾接続の誤謬（19.5.n）",
                        "文意の不明瞭な不適格文（19.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u19-l5）の主要専門用語を入力してください（「環境破壊」）：",
                    "acceptedAnswers": [
                        "環境破壊",
                        "環境破壊の現"
                    ],
                    "explanation": "正解の学術用語は「環境破壊」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u20-l1": {
        "id": "ja-u20-l1",
        "subject": "japanese",
        "unit": 20,
        "lessonNumber": 1,
        "title": "尊敬語の三分類（特定形・お〜になる・〜れる／られる）",
        "level": "B2",
        "objective": "相手（および相手側の人物）の動作を高める尊敬語の三階層（特定語彙形、接頭辞構文「お〜になる」、受身同形「〜れる」）。",
        "presentation": {
            "explanation": "相手の動作や状態を高めて敬意を表す「尊敬語（そんけいご）」の完全体系を学びます。\n\n【尊敬語の三代階層】\n１．特定尊敬語（最も敬意が高い）：\n　・行く／来る／いる → いらっしゃる／おいでになる\n　・言う → おっしゃる\n　・食べる／飲む → 召し上がる（めしあがる）\n　・見る → ご覧になる（ごらんになる）\n　・知っている → ご存知だ（ごぞんじだ）\n　・する → なさる\n２．「お／ご ＋ 動詞連用形 ＋ になる」（汎用的な高敬意）：\n　・お読みになる、お書きになる、ご連絡になる\n３．「動詞未然形 ＋ れる／られる」（日常的・穏やかな敬意）：\n　・読まれる、書かれる、来られる",
            "examples": [
                {
                    "target": "社長は明日の朝十時の新幹線で大阪支社へいらっしゃる予定です。",
                    "reading": "しゃちょうは あすの あさじゅうじの しんかんせんで おおさかしてんへ いらっしゃる よていです。",
                    "translation": "The company president is scheduled to go to the Osaka branch by the 10 a.m. Shinkansen tomorrow morning."
                },
                {
                    "target": "先生が先週発表された新しいご著書を大変興味深く拝読いたしました。",
                    "reading": "せんせいが せんしゅう はっぴょうされた あたらしい ごちょしょを たいへん きょうみぶかく はいどくいたしました。",
                    "translation": "I read with immense interest the new book that you, Professor, published last week."
                },
                {
                    "target": "こちらの最新のカタログをどうぞご自由にご覧になってください。",
                    "reading": "こちらの さいしんの カタログを どうぞ ごじゆうに ごらんになって ください。",
                    "translation": "Please feel free to look through our latest catalogue here."
                },
                {
                    "target": "お客様、温かいお茶とお茶菓子をお召し上がりください。",
                    "reading": "おきゃくさま、あたたかい おちゃと おちゃがしを おめしあがり ください。",
                    "translation": "Dear customer, please enjoy the warm tea and tea confections."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】敬語の完全体系：尊敬語・謙譲語・丁寧語（第1部）における文脈上最も正確な専門的日本語記述を選択してください（問20.1.1）。",
                    "options": [
                        "社長はすでに資料をご覧になりましたでしょうか。— はい、先ほど拝見いたしました。",
                        "学術的定義を誤った選択肢（20.1.1）",
                        "歴史的事実と合致しない誤文（20.1.2）",
                        "論理的一貫性を欠く記述（20.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】相手を高める尊敬語（いらっしゃる・おっしゃる等）、自分を低める謙譲語（まいる・もうす等）、丁寧語の識別と運用（第1部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】敬語の完全体系：尊敬語・謙譲語・丁寧語（第1部）の高度な対話・批評として最も適切な文を選択してください（演習20.1）。",
                    "options": [
                        "明日の午後二時に貴社の本社オフィスへ伺います。何卒よろしくお願い申し上げます。",
                        "批評的論旨が破綻している文（20.1.x）",
                        "助詞や構文の接続が不自然な誤文（20.1.y）",
                        "不適切な語彙選択を含む誤答（20.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u20-l1）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "先生、こちらの伝統的なお菓子をどうぞ召し上がってください。",
                        "概念の誤用による不当な解釈（20.1.a）",
                        "主述の不整合を含む不完全文（20.1.b）",
                        "文脈にそぐわない的外れな文（20.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】敬語の完全体系：尊敬語・謙譲語・丁寧語（第1部）の学習到達度を判定する学術設問です。完全な文を選択してください（試20-1）。",
                    "options": [
                        "田中先生は本日の国際シンポジウムにおいて基調講演をお話しになりました。",
                        "専門的根拠の欠落した誤文（20.1.m）",
                        "文法的語尾接続の誤謬（20.1.n）",
                        "文意の不明瞭な不適格文（20.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u20-l1）の主要専門用語を入力してください（「社長はす」）：",
                    "acceptedAnswers": [
                        "社長はす",
                        "社長はすでに"
                    ],
                    "explanation": "正解の学術用語は「社長はす」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u20-l2": {
        "id": "ja-u20-l2",
        "subject": "japanese",
        "unit": 20,
        "lessonNumber": 2,
        "title": "謙譲語Ⅰ（向かう相手を高める：お〜する、申し上げる、伺う）",
        "level": "B2",
        "objective": "自己の動作が相手（敬意の対象）に向かう際に用いる「謙譲語Ⅰ」（特定形：伺う・拝見する・差し上げる・申し上げる、お〜する）。",
        "presentation": {
            "explanation": "自己の動作の及ぶ対象（聞き手や第三者）を高めるために、自らの動作をへりくだる「謙譲語Ⅰ」を学びます。\n\n【謙譲語Ⅰの代表的特定語彙】\n・行く／来る（相手の元へ） → 伺う（うかがう）／参上する（さんじょうする）\n・言う（相手に） → 申し上げる（もうしあげる）\n・見る（相手の物を） → 拝見する（はいけんする）\n・聞く／尋ねる → 伺う／拝聴する（はいちょうする）\n・会う → お目にかかる（おめにかかる）\n・与える → 差し上げる（さしあげる）\n\n【一般動詞の謙譲語Ⅰ構文】\n・和語動詞：「お ＋ 連用形 ＋ する／申し上げる」（例：お持ちする、お伝え申し上げる）\n・漢語動詞：「ご ＋ 語幹 ＋ する／申し上げる」（例：ご案内する、ご報告申し上げる）",
            "examples": [
                {
                    "target": "明日の午後二時に貴社の本社オフィスへお伺いいたします。",
                    "reading": "あすの ごごにじに きしゃの ほんしゃオフィスへ おうかがいいたします。",
                    "translation": "I will humbly visit your company's head office at 2 p.m. tomorrow."
                },
                {
                    "target": "先ほどメールで送付いただいた企画書を拝見いたしました。",
                    "reading": "さきほど メールで そうふいただいた きかくしょを はいけんいたしました。",
                    "translation": "I have humbly viewed the proposal you kindly sent via email a moment ago."
                },
                {
                    "target": "詳細な進捗状況につきまして、来週月曜日に改めてご報告申し上げます。",
                    "reading": "しょうさいな しんちょくじょうきょうにつきまして、らいしゅう げつようびに あらためて ごほうこくもうしあげます。",
                    "translation": "Regarding detailed progress status, I will humbly report to you again next Monday."
                },
                {
                    "target": "重いお荷物を私が玄関までお持ちいたします。",
                    "reading": "おもい おにもつを わたしが げんかんまで おもちいたします。",
                    "translation": "Allow me to carry your heavy luggage to the front entrance."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】敬語の完全体系：尊敬語・謙譲語・丁寧語（第2部）における文脈上最も正確な専門的日本語記述を選択してください（問20.2.1）。",
                    "options": [
                        "社長はすでに資料をご覧になりましたでしょうか。— はい、先ほど拝見いたしました。",
                        "学術的定義を誤った選択肢（20.2.1）",
                        "歴史的事実と合致しない誤文（20.2.2）",
                        "論理的一貫性を欠く記述（20.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】相手を高める尊敬語（いらっしゃる・おっしゃる等）、自分を低める謙譲語（まいる・もうす等）、丁寧語の識別と運用（第2部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】敬語の完全体系：尊敬語・謙譲語・丁寧語（第2部）の高度な対話・批評として最も適切な文を選択してください（演習20.2）。",
                    "options": [
                        "明日の午後二時に貴社の本社オフィスへ伺います。何卒よろしくお願い申し上げます。",
                        "批評的論旨が破綻している文（20.2.x）",
                        "助詞や構文の接続が不自然な誤文（20.2.y）",
                        "不適切な語彙選択を含む誤答（20.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u20-l2）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "先生、こちらの伝統的なお菓子をどうぞ召し上がってください。",
                        "概念の誤用による不当な解釈（20.2.a）",
                        "主述の不整合を含む不完全文（20.2.b）",
                        "文脈にそぐわない的外れな文（20.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】敬語の完全体系：尊敬語・謙譲語・丁寧語（第2部）の学習到達度を判定する学術設問です。完全な文を選択してください（試20-2）。",
                    "options": [
                        "田中先生は本日の国際シンポジウムにおいて基調講演をお話しになりました。",
                        "専門的根拠の欠落した誤文（20.2.m）",
                        "文法的語尾接続の誤謬（20.2.n）",
                        "文意の不明瞭な不適格文（20.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u20-l2）の主要専門用語を入力してください（「社長はす」）：",
                    "acceptedAnswers": [
                        "社長はす",
                        "社長はすでに"
                    ],
                    "explanation": "正解の学術用語は「社長はす」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u20-l3": {
        "id": "ja-u20-l3",
        "subject": "japanese",
        "unit": 20,
        "lessonNumber": 3,
        "title": "謙譲語Ⅱ・丁重語（話相手への敬意：まいる、おる、申す、いたす）",
        "level": "B2",
        "objective": "動作の向かう先を問わず、話し手が聞き手に対して丁重に自らの行為を述べる「謙譲語Ⅱ（丁重語）」の完全整理。",
        "presentation": {
            "explanation": "文化庁敬語指針において謙譲語Ⅰから独立して定義された「謙譲語Ⅱ（丁重語）」の理論と運用を学びます。\n\n【謙譲語Ⅰと謙譲語Ⅱ（丁重語）の決定的な違い】\n・謙譲語Ⅰ：動作が【向かう相手】を高める（例：「先生に本をお見せする」「お客様の元へ伺う」）。\n・謙譲語Ⅱ：動作の向かう相手ではなく、【話を聞いている相手そのもの】に対して丁重に語る（例：「私は東京から参りました」「私は毎朝六時に起きております」）。\n\n【主要な丁重語の一覧】\n・行く／来る → 参る（まいる）\n・いる → おる\n・言う → 申す（もうす）\n・する → いたす\n・ある → ござる（ございます）",
            "examples": [
                {
                    "target": "私、株式会社ファーレンの国際事業部に所属しております佐藤と申します。",
                    "reading": "わたくし、かぶしきがいしゃ ファーレンの こくさいじぎょうぶに しょぞくしております さとうと もうします。",
                    "translation": "I am called Sato, belonging to the International Business Division at Fearn Co., Ltd."
                },
                {
                    "target": "本日は大雪のため、電車が約三十分遅延して参りました。",
                    "reading": "ほんじつは おおゆきの ため、でんしゃが やくさんじゅっぷん ちえんして まいりました。",
                    "translation": "Due to heavy snow today, the train has arrived delayed by approximately thirty minutes."
                },
                {
                    "target": "こちらの不手際により、多大なるご迷惑をおかけいたしましたことを深くお詫び申し上げます。",
                    "reading": "こちらの ふてぎわにより、ただいなる ごめいわくを おかけいたしましたことを ふかく おわびもうしあげます。",
                    "translation": "Due to our clumsiness, we deeply apologize for having caused you immense inconvenience."
                },
                {
                    "target": "ただいま資料を準備しておりますので、今しばらくお待ちください。",
                    "reading": "ただいま しりょうを じゅんびしておりますので、いましばらく おまちください。",
                    "translation": "Because I am currently preparing the materials, please wait for just a brief moment."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】敬語の完全体系：尊敬語・謙譲語・丁寧語（第3部）における文脈上最も正確な専門的日本語記述を選択してください（問20.3.1）。",
                    "options": [
                        "社長はすでに資料をご覧になりましたでしょうか。— はい、先ほど拝見いたしました。",
                        "学術的定義を誤った選択肢（20.3.1）",
                        "歴史的事実と合致しない誤文（20.3.2）",
                        "論理的一貫性を欠く記述（20.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】相手を高める尊敬語（いらっしゃる・おっしゃる等）、自分を低める謙譲語（まいる・もうす等）、丁寧語の識別と運用（第3部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】敬語の完全体系：尊敬語・謙譲語・丁寧語（第3部）の高度な対話・批評として最も適切な文を選択してください（演習20.3）。",
                    "options": [
                        "明日の午後二時に貴社の本社オフィスへ伺います。何卒よろしくお願い申し上げます。",
                        "批評的論旨が破綻している文（20.3.x）",
                        "助詞や構文の接続が不自然な誤文（20.3.y）",
                        "不適切な語彙選択を含む誤答（20.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u20-l3）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "先生、こちらの伝統的なお菓子をどうぞ召し上がってください。",
                        "概念の誤用による不当な解釈（20.3.a）",
                        "主述の不整合を含む不完全文（20.3.b）",
                        "文脈にそぐわない的外れな文（20.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】敬語の完全体系：尊敬語・謙譲語・丁寧語（第3部）の学習到達度を判定する学術設問です。完全な文を選択してください（試20-3）。",
                    "options": [
                        "田中先生は本日の国際シンポジウムにおいて基調講演をお話しになりました。",
                        "専門的根拠の欠落した誤文（20.3.m）",
                        "文法的語尾接続の誤謬（20.3.n）",
                        "文意の不明瞭な不適格文（20.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u20-l3）の主要専門用語を入力してください（「社長はす」）：",
                    "acceptedAnswers": [
                        "社長はす",
                        "社長はすでに"
                    ],
                    "explanation": "正解の学術用語は「社長はす」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u20-l4": {
        "id": "ja-u20-l4",
        "subject": "japanese",
        "unit": 20,
        "lessonNumber": 4,
        "title": "丁寧語と美化語（です・ます・ございます、お茶・お料理）",
        "level": "B2",
        "objective": "丁寧語（です・ます・ございます）の文末統語と、言葉遣いを上品にする美化語（お茶・お料理・お酒）の使い分けルール。",
        "presentation": {
            "explanation": "文末を上品に整える丁寧語と、語彙そのものを上品化する美化語の体系を学びます。\n\n【丁寧語（ていねいご）】\n・文末助動詞「です」「ます」および「でございます（あるの丁寧形）」。\n・聞き手に対する一般的な敬意を表し、親疎関係を保ちます。\n\n【美化語（びかご）】\n・接頭辞「お」（和語名詞に付着）：「お茶」「お水」「お花」「お酒」「お料理」「お箸」\n・接頭辞「ご」（漢語名詞に付着）：「ご飯」「ご意見」「ご家族」「ご親切」\n・過剰美化の回避：何にでも「お」を付ける（×「おビール」「おトイレ」「お靴」の過度な重層）のは悪趣味とされます。外来語には原則付着しません。",
            "examples": [
                {
                    "target": "本日の特別展示会は午後五時をもちまして終了でございます。",
                    "reading": "ほんじつの とくべつてんじかいは ごごごじを もちまして しゅうりょうで ございます。",
                    "translation": "Today's special exhibition concludes as of 5:00 p.m."
                },
                {
                    "target": "温かいお茶とお手拭きをお持ちいたしましたので、どうぞお使いください。",
                    "reading": "あたたかい おちゃと おてふきを おもちいたしましたので、どうぞ おつかいください。",
                    "translation": "I have brought warm tea and a wet hand towel, so please feel free to use them."
                },
                {
                    "target": "美化語は言葉遣いを上品に整えますが、過剰な使用はかえって不自然になります。",
                    "reading": "びかごは ことばづかいを じょうひんに ととのえますが、かじょうな しようは かえって ふしぜんに なります。",
                    "translation": "Beautifying words refine phrasing elegantly, but excessive use conversely becomes unnatural."
                },
                {
                    "target": "ご不明な点がございましたら、いつでも受付窓口までお尋ねください。",
                    "reading": "ごふめいな てんが ございましたら、いつでも うけつけまどぐちまで おたずねください。",
                    "translation": "If there are any unclear points, please inquire at the reception desk at any time."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】敬語の完全体系：尊敬語・謙譲語・丁寧語（第4部）における文脈上最も正確な専門的日本語記述を選択してください（問20.4.1）。",
                    "options": [
                        "社長はすでに資料をご覧になりましたでしょうか。— はい、先ほど拝見いたしました。",
                        "学術的定義を誤った選択肢（20.4.1）",
                        "歴史的事実と合致しない誤文（20.4.2）",
                        "論理的一貫性を欠く記述（20.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】相手を高める尊敬語（いらっしゃる・おっしゃる等）、自分を低める謙譲語（まいる・もうす等）、丁寧語の識別と運用（第4部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】敬語の完全体系：尊敬語・謙譲語・丁寧語（第4部）の高度な対話・批評として最も適切な文を選択してください（演習20.4）。",
                    "options": [
                        "明日の午後二時に貴社の本社オフィスへ伺います。何卒よろしくお願い申し上げます。",
                        "批評的論旨が破綻している文（20.4.x）",
                        "助詞や構文の接続が不自然な誤文（20.4.y）",
                        "不適切な語彙選択を含む誤答（20.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u20-l4）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "先生、こちらの伝統的なお菓子をどうぞ召し上がってください。",
                        "概念の誤用による不当な解釈（20.4.a）",
                        "主述の不整合を含む不完全文（20.4.b）",
                        "文脈にそぐわない的外れな文（20.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】敬語の完全体系：尊敬語・謙譲語・丁寧語（第4部）の学習到達度を判定する学術設問です。完全な文を選択してください（試20-4）。",
                    "options": [
                        "田中先生は本日の国際シンポジウムにおいて基調講演をお話しになりました。",
                        "専門的根拠の欠落した誤文（20.4.m）",
                        "文法的語尾接続の誤謬（20.4.n）",
                        "文意の不明瞭な不適格文（20.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u20-l4）の主要専門用語を入力してください（「社長はす」）：",
                    "acceptedAnswers": [
                        "社長はす",
                        "社長はすでに"
                    ],
                    "explanation": "正解の学術用語は「社長はす」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u20-l5": {
        "id": "ja-u20-l5",
        "subject": "japanese",
        "unit": 20,
        "lessonNumber": 5,
        "title": "内外（ウチとソト）の敬語運用とビジネス商談対話",
        "level": "B2",
        "objective": "日本文化の最重要原理「ウチ（内集団）とソト（外集団）」に基づく相対敬語の完全運用と高度な商談プロトコル。",
        "presentation": {
            "explanation": "絶対敬語（家族や上司を常に高める言語）と異なり、相手との関係性によって敬語の適用が逆転する日本の「相対敬語」を学びます。\n\n【ウチとソトの相対敬語ルール】\n１．社外の顧客（ソト）に対して話す場合：\n　・自社の社長や上司（ウチ）の行為であっても【謙譲語】を用い、敬称（社長様、さん）を絶対に付けません。\n　・○「社長の山田がそのように申しておりました」\n　・×「山田社長がおっしゃっていました」（社外に対して自社社長を尊敬語で高めるのは最大の誤用）。\n２．社内の同僚に対して社長の話をする場合：\n　・「山田社長がおっしゃっていました」（社内関係では社長が尊敬の対象となる）。",
            "examples": [
                {
                    "target": "社外の取引先に対しては、自社の社長であっても「社長の山田は外出しております」と謙譲語で対応します。",
                    "reading": "しゃがいの とりひきさきに たいしては、じしゃの しゃちょうであっても「しゃちょうの やまだは がいしゅつしております」と けんじょうごで たいおうします。",
                    "translation": "To external clients, even regarding one's own company president, one handles it in humble language: 'Our President Yamada is out of the office'."
                },
                {
                    "target": "ご提案いただきました新製品の導入計画につきまして、社内で前向きに検討させていただきます。",
                    "reading": "ごていあんいただきました しんせいひんの どうにゅうけいかくにつきまして、しゃないで まえむきに けんとうさせていただきます。",
                    "translation": "Regarding the new product adoption plan you kindly proposed, allow us to consider it positively within our company."
                },
                {
                    "target": "本日の商談に貴重なお時間を割いていただき、誠にありがとうございました。",
                    "reading": "ほんじつの しょうだんに きちょうな おじかんを さいていただき、まことに ありがとうございました。",
                    "translation": "Thank you very much for sparing your precious time for today's business negotiations."
                },
                {
                    "target": "ウチとソトの境界を正確に見極めることが、日本社会における円滑な対人関係の根幹です。",
                    "reading": "ウチと ソトの きょうかいを せいかくに みきわめることが、にほんしゃかいにおける えんかつな たいにんかんけいの こんかんです。",
                    "translation": "Accurately discerning the boundary between insider and outsider is the foundation of smooth interpersonal relations in Japanese society."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】敬語の完全体系：尊敬語・謙譲語・丁寧語（第5部）における文脈上最も正確な専門的日本語記述を選択してください（問20.5.1）。",
                    "options": [
                        "社長はすでに資料をご覧になりましたでしょうか。— はい、先ほど拝見いたしました。",
                        "学術的定義を誤った選択肢（20.5.1）",
                        "歴史的事実と合致しない誤文（20.5.2）",
                        "論理的一貫性を欠く記述（20.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】相手を高める尊敬語（いらっしゃる・おっしゃる等）、自分を低める謙譲語（まいる・もうす等）、丁寧語の識別と運用（第5部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】敬語の完全体系：尊敬語・謙譲語・丁寧語（第5部）の高度な対話・批評として最も適切な文を選択してください（演習20.5）。",
                    "options": [
                        "明日の午後二時に貴社の本社オフィスへ伺います。何卒よろしくお願い申し上げます。",
                        "批評的論旨が破綻している文（20.5.x）",
                        "助詞や構文の接続が不自然な誤文（20.5.y）",
                        "不適切な語彙選択を含む誤答（20.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u20-l5）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "先生、こちらの伝統的なお菓子をどうぞ召し上がってください。",
                        "概念の誤用による不当な解釈（20.5.a）",
                        "主述の不整合を含む不完全文（20.5.b）",
                        "文脈にそぐわない的外れな文（20.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】敬語の完全体系：尊敬語・謙譲語・丁寧語（第5部）の学習到達度を判定する学術設問です。完全な文を選択してください（試20-5）。",
                    "options": [
                        "田中先生は本日の国際シンポジウムにおいて基調講演をお話しになりました。",
                        "専門的根拠の欠落した誤文（20.5.m）",
                        "文法的語尾接続の誤謬（20.5.n）",
                        "文意の不明瞭な不適格文（20.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u20-l5）の主要専門用語を入力してください（「社長はす」）：",
                    "acceptedAnswers": [
                        "社長はす",
                        "社長はすでに"
                    ],
                    "explanation": "正解の学術用語は「社長はす」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u21-l1": {
        "id": "ja-u21-l1",
        "subject": "japanese",
        "unit": 21,
        "lessonNumber": 1,
        "title": "国民皆保険制度（1961年体制）の基本構造と相互扶助理念",
        "level": "B2",
        "objective": "日本の国民皆保険制度の歴史的成立（1961年）、フリーアクセス制、医療保険の相互扶助・社会保障理念の専門語彙。",
        "presentation": {
            "explanation": "日本の戦後復興と世界最高水準の平均寿命を支えた「国民皆保険（かいほけん）制度」の構造を学びます。\n\n【国民皆保険の三大原則】\n１．全国民の公的保険加入義務（強制加入による相互扶助）。\n２．フリーアクセス制：患者が全国どの医療機関でも自由に受診可能。\n３．現物給付と低負担：保険診療による高水準医療の低廉な提供（原則3割自己負担、高額療養費制度による上限設定）。\n\n【保険制度の二大体系】\n・被用者保険（健康保険組合・協会けんぽ）：民間企業や公務員の被雇用者\n・地域保険（国民健康保険）：自営業者、農業従事者、無職者、退職者",
            "examples": [
                {
                    "target": "1961年に確立された日本の国民皆保険制度は、全国民が低負担で高度な医療を受けられる社会保障の根幹です。",
                    "reading": "1961ねんに かくりつされた にほんの こくみんかいほけんせいどは、ぜんこくみんが ていふたんで こうどな いりょうを うけられる しゃかいほしょうの こんかんです。",
                    "translation": "Japan's universal health insurance system established in 1961 is the cornerstone of social security allowing all citizens to receive advanced medical care at low cost."
                },
                {
                    "target": "フリーアクセス制により、患者は紹介状なしでも全国の高度医療機関を自由に選択して受診できます。",
                    "reading": "フリーアクセスせいに より、かんじゃは しょうかいじょうなしでも ぜんこくの こうどいりょうきかんを じゆうに せんたくして じゅしんできます。",
                    "translation": "Due to the free-access system, patients can freely select and visit advanced medical institutions nationwide even without a referral letter."
                },
                {
                    "target": "高額療養費制度により、重篤な疾患による過度な家計負担が制度的に防止されています。",
                    "reading": "こうがくりょうようひせいどに より、じゅうとくな しっかんに よる かどな かけいふたんが せいどてきに ぼうしされています。",
                    "translation": "Through the High-Cost Medical Care Benefit System, excessive household financial burdens due to serious illnesses are systematically prevented."
                },
                {
                    "target": "相互扶助の精神に基づき、現役世代の保険料と公費によって高齢者医療が支えられています。",
                    "reading": "そうごふじょの せいしんに もとづき、げんえきせだいの ほけんりょうと こうひに よって こうれいしゃいりょうが ささえられています。",
                    "translation": "Based on the spirit of mutual aid, elderly healthcare is supported by premiums from the working-age population and public funds."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】日本の国民皆保険制度・超高齢社会と再生医療（第1部）における文脈上最も正確な専門的日本語記述を選択してください（問21.1.1）。",
                    "options": [
                        "日本の国民皆保険制度は、全住民が公平に質の高い医療サービスを享受できる世界屈指の社会保障基盤として国際的に高く評価されています。",
                        "学術的定義を誤った選択肢（21.1.1）",
                        "歴史的事実と合致しない誤文（21.1.2）",
                        "論理的一貫性を欠く記述（21.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】国民皆保険制度、超高齢社会、iPS細胞再生医療、医療DXの専門学術語彙（第1部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本の国民皆保険制度・超高齢社会と再生医療（第1部）の高度な対話・批評として最も適切な文を選択してください（演習21.1）。",
                    "options": [
                        "超高齢社会の急速な進展に伴い、地域包括ケアシステムの構築と在宅医療・介護の連携強化が急務となっています。",
                        "批評的論旨が破綻している文（21.1.x）",
                        "助詞や構文の接続が不自然な誤文（21.1.y）",
                        "不適切な語彙選択を含む誤答（21.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u21-l1）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "京都大学の山中教授らが開発したiPS細胞技術は、パーキンソン病や加齢黄斑変性などの難病に対する画期的な再生医療の道を切り拓きました。",
                        "概念の誤用による不当な解釈（21.1.a）",
                        "主述の不整合を含む不完全文（21.1.b）",
                        "文脈にそぐわない的外れな文（21.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本の国民皆保険制度・超高齢社会と再生医療（第1部）の学習到達度を判定する学術設問です。完全な文を選択してください（試21-1）。",
                    "options": [
                        "人工知能を活用した画像診断支援システムと遠隔オンライン診療の普及により、過疎地域における医療格差の是正が期待されています。",
                        "専門的根拠の欠落した誤文（21.1.m）",
                        "文法的語尾接続の誤謬（21.1.n）",
                        "文意の不明瞭な不適格文（21.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u21-l1）の主要専門用語を入力してください（「日本の国」）：",
                    "acceptedAnswers": [
                        "日本の国",
                        "日本の国民皆"
                    ],
                    "explanation": "正解の学術用語は「日本の国」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u21-l2": {
        "id": "ja-u21-l2",
        "subject": "japanese",
        "unit": 21,
        "lessonNumber": 2,
        "title": "超高齢社会の社会保障費増大と介護保険制度（2000年導入）",
        "level": "B2",
        "objective": "高齢化率（65歳以上人口比率）の上昇、2025年問題、介護の社会化を掲げた介護保険制度の仕組みと課題。",
        "presentation": {
            "explanation": "世界に先駆けて超高齢社会（高齢化率28%超）に突入した日本の社会保障改革と「介護保険制度」を学びます。\n\n【超高齢社会の直面する課題】\n・2025年問題：団塊の世代（ベビーブーマー）が全員75歳以上の後期高齢者となり、社会保障給付費（年金・医療・介護）が急増。\n・2000年介護保険制度創設：それまでの「家族による介護」から「社会全体で支える介護（介護の社会化）」への大転換。\n・要介護認定（要支援1〜2、要介護1〜5）に基づき、ケアマネジャーがケアプランを作成してデイサービスや特別養護老人ホームなどを利用。",
            "examples": [
                {
                    "target": "超高齢社会の進展に伴い、膨張する社会保障関係費と現役世代の負担軽減の両立が喫緊の政策課題です。",
                    "reading": "ちょうこうれいしゃかいの しんてんに ともない、ぼうちょうする しゃかいほしょうかんけいひと げんえきせだいの ふたんけいげんの りょうりつが きっきんの せいさくかだいです。",
                    "translation": "With the progress of super-aging society, balancing expanding social security costs and easing the burden on working generations is an urgent policy task."
                },
                {
                    "target": "2000年に導入された介護保険制度は、家族介護の負担を軽減し介護の社会化を推進しました。",
                    "reading": "2000ねんに どうにゅうされた かいごほけんせいどは、かぞくかいごの ふたんを けいげんし かいごの しゃかいかを すいしんしました。",
                    "translation": "The long-term care insurance system introduced in 2000 relieved the burden of family caregiving and promoted the socialization of care."
                },
                {
                    "target": "要介護認定を受けた高齢者に対して、専門のケアマネジャーが最適なケアプランを立案します。",
                    "reading": "ようかいごにんていを うけた こうれいしゃに たいして、せんもんの ケアマネジャーが さいてきな ケアプランを りつあんします。",
                    "translation": "For elderly persons certified as requiring nursing care, specialized care managers formulate optimal care plans."
                },
                {
                    "target": "健康寿命を延伸し、高齢者が住み慣れた地域で自立した生活を営める環境整備が進められています。",
                    "reading": "けんこうじゅみょうを えんしんし、こうれいしゃが すみなれた ちいきで じりつした せいかつを いとなめる かんきょうせいびが すすめられています。",
                    "translation": "Extending healthy life expectancy and developing environments where the elderly can lead independent lives in familiar communities is being advanced."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】日本の国民皆保険制度・超高齢社会と再生医療（第2部）における文脈上最も正確な専門的日本語記述を選択してください（問21.2.1）。",
                    "options": [
                        "日本の国民皆保険制度は、全住民が公平に質の高い医療サービスを享受できる世界屈指の社会保障基盤として国際的に高く評価されています。",
                        "学術的定義を誤った選択肢（21.2.1）",
                        "歴史的事実と合致しない誤文（21.2.2）",
                        "論理的一貫性を欠く記述（21.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】国民皆保険制度、超高齢社会、iPS細胞再生医療、医療DXの専門学術語彙（第2部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本の国民皆保険制度・超高齢社会と再生医療（第2部）の高度な対話・批評として最も適切な文を選択してください（演習21.2）。",
                    "options": [
                        "超高齢社会の急速な進展に伴い、地域包括ケアシステムの構築と在宅医療・介護の連携強化が急務となっています。",
                        "批評的論旨が破綻している文（21.2.x）",
                        "助詞や構文の接続が不自然な誤文（21.2.y）",
                        "不適切な語彙選択を含む誤答（21.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u21-l2）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "京都大学の山中教授らが開発したiPS細胞技術は、パーキンソン病や加齢黄斑変性などの難病に対する画期的な再生医療の道を切り拓きました。",
                        "概念の誤用による不当な解釈（21.2.a）",
                        "主述の不整合を含む不完全文（21.2.b）",
                        "文脈にそぐわない的外れな文（21.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本の国民皆保険制度・超高齢社会と再生医療（第2部）の学習到達度を判定する学術設問です。完全な文を選択してください（試21-2）。",
                    "options": [
                        "人工知能を活用した画像診断支援システムと遠隔オンライン診療の普及により、過疎地域における医療格差の是正が期待されています。",
                        "専門的根拠の欠落した誤文（21.2.m）",
                        "文法的語尾接続の誤謬（21.2.n）",
                        "文意の不明瞭な不適格文（21.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u21-l2）の主要専門用語を入力してください（「日本の国」）：",
                    "acceptedAnswers": [
                        "日本の国",
                        "日本の国民皆"
                    ],
                    "explanation": "正解の学術用語は「日本の国」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u21-l3": {
        "id": "ja-u21-l3",
        "subject": "japanese",
        "unit": 21,
        "lessonNumber": 3,
        "title": "iPS細胞（人工多能性幹細胞）と再生医療イノベーション",
        "level": "B2",
        "objective": "山中伸弥教授によるiPS細胞（2006/2012年ノーベル賞）の発見、網膜・心筋・パーキンソン病への再生医療臨床応用。",
        "presentation": {
            "explanation": "日本の生命科学が世界をリードする「iPS細胞（induced Pluripotent Stem Cells）」と再生医療の地平を学びます。\n\n【iPS細胞の画期性と原理】\n・発見：京都大学の山中伸弥教授らが体細胞に4つの初期化遺伝子（Yamanaka Factors）を導入し、あらゆる組織に分化可能な万能多能性を獲得させた細胞（2012年ノーベル生理学・医学賞）。\n・ES細胞（受精卵使用）と異なり、倫理的課題を克服。患者自身の体細胞から作製できるため免疫拒絶反応を低減。\n・臨床応用：加齢黄斑変性（網膜シート移植）、心筋梗塞（心筋シート）、パーキンソン病（ドーパミン産生神経移植）、創薬スクリーニング。",
            "examples": [
                {
                    "target": "山中伸弥教授らによって開発されたiPS細胞は、再生医療と難病創薬に革命的な進歩をもたらしました。",
                    "reading": "やまなかしんやきょうじゅらによって かいはつされた iPSさいぼうは、さいせいいりょうと なんびょうそうやくに かくめいてきな しんぽを もたらしました。",
                    "translation": "The iPS cells developed by Professor Shinya Yamanaka and colleagues brought revolutionary progress to regenerative medicine and intractable disease drug discovery."
                },
                {
                    "target": "患者自身の体細胞から作製したiPS細胞を用いることで、移植時の免疫拒絶反応を大幅に回避できます。",
                    "reading": "かんじゃじしんの たいさいぼうから さくせいした iPSさいぼうを もちいることで、いしょくじの めんえききょぜつはんのうを おおはばに かいひできます。",
                    "translation": "By utilizing iPS cells created from the patient's own somatic cells, immunological rejection during transplantation can be largely avoided."
                },
                {
                    "target": "目の難病である加齢黄斑変性に対するiPS細胞由来の網膜色素上皮細胞移植手術が世界で初めて成功しました。",
                    "reading": "めの なんびょうである かれいおうはんへんせいに たいする iPSさいぼうゆらいの もうまくしきそじょうひさいぼういしょくしゅじゅつが せかいで はじめて せいこうしました。",
                    "translation": "The world's first iPS-cell-derived retinal pigment epithelial cell transplant surgery for age-related macular degeneration, an intractable eye disease, succeeded."
                },
                {
                    "target": "難治性疾患の病態解明と新薬開発に向け、iPS細胞を活用したハイスループットスクリーニングが加速しています。",
                    "reading": "なんちせいしっかんの びょうたいかいめいと しんやくかいはつに むけ、iPSさいぼうを かつようした ハイスループットスクリーニングが かそくしています。",
                    "translation": "Toward elucidating the pathology of intractable diseases and developing new drugs, high-throughput screening utilizing iPS cells is accelerating."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】日本の国民皆保険制度・超高齢社会と再生医療（第3部）における文脈上最も正確な専門的日本語記述を選択してください（問21.3.1）。",
                    "options": [
                        "日本の国民皆保険制度は、全住民が公平に質の高い医療サービスを享受できる世界屈指の社会保障基盤として国際的に高く評価されています。",
                        "学術的定義を誤った選択肢（21.3.1）",
                        "歴史的事実と合致しない誤文（21.3.2）",
                        "論理的一貫性を欠く記述（21.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】国民皆保険制度、超高齢社会、iPS細胞再生医療、医療DXの専門学術語彙（第3部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本の国民皆保険制度・超高齢社会と再生医療（第3部）の高度な対話・批評として最も適切な文を選択してください（演習21.3）。",
                    "options": [
                        "超高齢社会の急速な進展に伴い、地域包括ケアシステムの構築と在宅医療・介護の連携強化が急務となっています。",
                        "批評的論旨が破綻している文（21.3.x）",
                        "助詞や構文の接続が不自然な誤文（21.3.y）",
                        "不適切な語彙選択を含む誤答（21.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u21-l3）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "京都大学の山中教授らが開発したiPS細胞技術は、パーキンソン病や加齢黄斑変性などの難病に対する画期的な再生医療の道を切り拓きました。",
                        "概念の誤用による不当な解釈（21.3.a）",
                        "主述の不整合を含む不完全文（21.3.b）",
                        "文脈にそぐわない的外れな文（21.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本の国民皆保険制度・超高齢社会と再生医療（第3部）の学習到達度を判定する学術設問です。完全な文を選択してください（試21-3）。",
                    "options": [
                        "人工知能を活用した画像診断支援システムと遠隔オンライン診療の普及により、過疎地域における医療格差の是正が期待されています。",
                        "専門的根拠の欠落した誤文（21.3.m）",
                        "文法的語尾接続の誤謬（21.3.n）",
                        "文意の不明瞭な不適格文（21.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u21-l3）の主要専門用語を入力してください（「日本の国」）：",
                    "acceptedAnswers": [
                        "日本の国",
                        "日本の国民皆"
                    ],
                    "explanation": "正解の学術用語は「日本の国」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u21-l4": {
        "id": "ja-u21-l4",
        "subject": "japanese",
        "unit": 21,
        "lessonNumber": 4,
        "title": "地域包括ケアシステムと医療DX（オンライン診療・電子カルテ共有）",
        "level": "B2",
        "objective": "地域包括ケアシステム（住まい・医療・介護・予防・生活支援の一体化）と医療DX（電子処方箋・遠隔医療）。",
        "presentation": {
            "explanation": "人口構造変化に対応する「地域包括ケアシステム」と、デジタル技術で医療を変革する「医療DX」を学びます。\n\n【地域包括ケアシステムの5大要素】\n・高齢者が要介護状態になっても住み慣れた地域で自分らしい生活を最期まで続けられるよう、中学校区（徒歩30分圏内）を単位として「住まい」「医療」「介護」「予防」「生活支援」を有機的に一体提供する仕組み。\n\n【医療DX（Digital Transformation）の推進】\n・マイナンバーカードの保険証利用（マイナ保険証）による診療情報・薬剤情報の全国医療機関共有。\n・オンライン診療（遠隔医療）の規制緩和と電子処方箋の普及。",
            "examples": [
                {
                    "target": "地域包括ケアシステムは、住まい・医療・介護・予防・生活支援が一体的に提供される共生社会を目指します。",
                    "reading": "ちいきほうかつケアシステムは、すまい・いりょう・かいご・よぼう・せいかつしえんが いったいてきに ていきょうされる きょうせいしゃかいを めざします。",
                    "translation": "The community-based integrated care system aims for a cohesive society where housing, medical care, nursing care, prevention, and livelihood support are integrally provided."
                },
                {
                    "target": "医療DXの推進により、医療機関間での電子カルテや投薬履歴の安全な共有が可能となりました。",
                    "reading": "いりょうDXの すいしんに より、いりょうきかんかんでの でんしカルテや とうやくりれきの あんぜんな きょうゆうが かのうと なりました。",
                    "translation": "Through the promotion of Medical DX, secure sharing of electronic medical records and medication histories between medical institutions has become possible."
                },
                {
                    "target": "過疎地域や離島におけるオンライン診療の導入は、医療アクセスの格差是正に大きく寄与しています。",
                    "reading": "かそちいきや りとうにおける オンラインしんりょうの どうにゅうは、いりょうアクセスの かくさぜせいに おおきく きよしています。",
                    "translation": "The introduction of telemedicine in depopulated areas and remote islands greatly contributes to rectifying disparities in healthcare access."
                },
                {
                    "target": "多職種連携会議において、医師・看護師・ケアマネジャーが密接に情報交換を行っています。",
                    "reading": "たしょくしゅれんけいかいぎにおいて、いし・かんごし・ケアマネジャーが みっせつに じょうほうこうかんを おこなっています。",
                    "translation": "In multidisciplinary collaboration conferences, physicians, nurses, and care managers closely exchange information."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】日本の国民皆保険制度・超高齢社会と再生医療（第4部）における文脈上最も正確な専門的日本語記述を選択してください（問21.4.1）。",
                    "options": [
                        "日本の国民皆保険制度は、全住民が公平に質の高い医療サービスを享受できる世界屈指の社会保障基盤として国際的に高く評価されています。",
                        "学術的定義を誤った選択肢（21.4.1）",
                        "歴史的事実と合致しない誤文（21.4.2）",
                        "論理的一貫性を欠く記述（21.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】国民皆保険制度、超高齢社会、iPS細胞再生医療、医療DXの専門学術語彙（第4部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本の国民皆保険制度・超高齢社会と再生医療（第4部）の高度な対話・批評として最も適切な文を選択してください（演習21.4）。",
                    "options": [
                        "超高齢社会の急速な進展に伴い、地域包括ケアシステムの構築と在宅医療・介護の連携強化が急務となっています。",
                        "批評的論旨が破綻している文（21.4.x）",
                        "助詞や構文の接続が不自然な誤文（21.4.y）",
                        "不適切な語彙選択を含む誤答（21.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u21-l4）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "京都大学の山中教授らが開発したiPS細胞技術は、パーキンソン病や加齢黄斑変性などの難病に対する画期的な再生医療の道を切り拓きました。",
                        "概念の誤用による不当な解釈（21.4.a）",
                        "主述の不整合を含む不完全文（21.4.b）",
                        "文脈にそぐわない的外れな文（21.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本の国民皆保険制度・超高齢社会と再生医療（第4部）の学習到達度を判定する学術設問です。完全な文を選択してください（試21-4）。",
                    "options": [
                        "人工知能を活用した画像診断支援システムと遠隔オンライン診療の普及により、過疎地域における医療格差の是正が期待されています。",
                        "専門的根拠の欠落した誤文（21.4.m）",
                        "文法的語尾接続の誤謬（21.4.n）",
                        "文意の不明瞭な不適格文（21.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u21-l4）の主要専門用語を入力してください（「日本の国」）：",
                    "acceptedAnswers": [
                        "日本の国",
                        "日本の国民皆"
                    ],
                    "explanation": "正解の学術用語は「日本の国」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u21-l5": {
        "id": "ja-u21-l5",
        "subject": "japanese",
        "unit": 21,
        "lessonNumber": 5,
        "title": "生命倫理と持続可能な医療制度設計に関する学術論考",
        "level": "B2",
        "objective": "ゲノム編集・終末期医療の生命倫理的課題と、財政的持続可能性を備えた21世紀型社会保障の構想。",
        "presentation": {
            "explanation": "高度先端医療の倫理的限界と、人口動態危機下における社会保障の持続可能性を学術的視点から考察します。\n\n【生命倫理（Bioethics）の現代的課題】\n・ヒト胚に対するゲノム編集（CRISPR-Cas9等）の是非と国際的規制枠組み。\n・尊厳死（Dignity in Dying）とリビング・ウィル（事前指示書）、ACP（アドバンス・ケア・プランニング：人生会議）。\n\n【持続可能性（Sustainability）の論点】\n・超高額医薬品（遺伝子治療薬等）の保険収載と公的医療財政の均衡維持。\n・世代間公平性（Intergenerational Equity）の確保。",
            "examples": [
                {
                    "target": "ゲノム編集技術の急速な進展は難病根絶の希望をもたらす一方、厳格な生命倫理の確立を迫っています。",
                    "reading": "ゲノムへんしゅうぎじゅつの きゅうそくな しんてんは なんびょうこんぜつの きぼうを もたらす いっぽう、げんかくな せいめいりんりの かくりつを せまっています。",
                    "translation": "The rapid progress of genome editing technology brings hope of eradicating intractable diseases, while demanding the establishment of strict bioethics."
                },
                {
                    "target": "超高額な先端バイオ医薬品の公的保険適用と国家財政の持続可能性の調和が深刻に議論されています。",
                    "reading": "ちょうこうがくな せんたんバイオいやくひんの こうてきほけんてきようと こっかざいせいの じぞくかのうせいの ちょうわが しんこくに ぎろんされています。",
                    "translation": "Harmonizing public insurance coverage of ultra-expensive cutting-edge biopharmaceuticals with national fiscal sustainability is being debated seriously."
                },
                {
                    "target": "人生の最終段階における本人の意思決定を尊重するアドバンス・ケア・プランニングの普及が重要です。",
                    "reading": "じんせいの さいしゅうだんかいにおける ほんにんの いしけっていを そんちょうする アドバンス・ケア・プランニングの ふきゅうが じゅうようです。",
                    "translation": "The dissemination of Advance Care Planning, which respects the individual's decision-making in the final stages of life, is vital."
                },
                {
                    "target": "世代間の公平性を担保しつつ、誰もが尊厳を持って生きられる社会保障制度の再構築が求められます。",
                    "reading": "せだいかんの こうへいせいを たんぽしつつ、だれもが そんげんを もって いきられる しゃかいほしょうせいどの さいこうちくが もとめられます。",
                    "translation": "Rebuilding a social security system where everyone can live with dignity while securing intergenerational equity is required."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】日本の国民皆保険制度・超高齢社会と再生医療（第5部）における文脈上最も正確な専門的日本語記述を選択してください（問21.5.1）。",
                    "options": [
                        "日本の国民皆保険制度は、全住民が公平に質の高い医療サービスを享受できる世界屈指の社会保障基盤として国際的に高く評価されています。",
                        "学術的定義を誤った選択肢（21.5.1）",
                        "歴史的事実と合致しない誤文（21.5.2）",
                        "論理的一貫性を欠く記述（21.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】国民皆保険制度、超高齢社会、iPS細胞再生医療、医療DXの専門学術語彙（第5部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本の国民皆保険制度・超高齢社会と再生医療（第5部）の高度な対話・批評として最も適切な文を選択してください（演習21.5）。",
                    "options": [
                        "超高齢社会の急速な進展に伴い、地域包括ケアシステムの構築と在宅医療・介護の連携強化が急務となっています。",
                        "批評的論旨が破綻している文（21.5.x）",
                        "助詞や構文の接続が不自然な誤文（21.5.y）",
                        "不適切な語彙選択を含む誤答（21.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u21-l5）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "京都大学の山中教授らが開発したiPS細胞技術は、パーキンソン病や加齢黄斑変性などの難病に対する画期的な再生医療の道を切り拓きました。",
                        "概念の誤用による不当な解釈（21.5.a）",
                        "主述の不整合を含む不完全文（21.5.b）",
                        "文脈にそぐわない的外れな文（21.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本の国民皆保険制度・超高齢社会と再生医療（第5部）の学習到達度を判定する学術設問です。完全な文を選択してください（試21-5）。",
                    "options": [
                        "人工知能を活用した画像診断支援システムと遠隔オンライン診療の普及により、過疎地域における医療格差の是正が期待されています。",
                        "専門的根拠の欠落した誤文（21.5.m）",
                        "文法的語尾接続の誤謬（21.5.n）",
                        "文意の不明瞭な不適格文（21.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u21-l5）の主要専門用語を入力してください（「日本の国」）：",
                    "acceptedAnswers": [
                        "日本の国",
                        "日本の国民皆"
                    ],
                    "explanation": "正解の学術用語は「日本の国」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u22-l1": {
        "id": "ja-u22-l1",
        "subject": "japanese",
        "unit": 22,
        "lessonNumber": 1,
        "title": "西田幾多郎『善の研究』と「純粋経験」の哲学的地平",
        "level": "B2",
        "objective": "西田幾多郎の主著『善の研究』（1911年）における「純粋経験」（主客未分の直接的意識体験）と西洋哲学・東洋思想の統合。",
        "presentation": {
            "explanation": "近代日本哲学の嚆矢である京都学派の創始者・西田幾多郎（にしだきたろう）の「純粋経験（じゅんすいけいけん）」論を学びます。\n\n【純粋経験の哲学的定義】\n・「経験するというのは事実そのままを知るの意である。全く自己の細工を棄てて、事実に従うて知るのである」\n・主客未分（しゅかくみぶん）：主観（見ている自分）と客観（見られている対象）が分かれる以前の、直接的・根源的な意識のありのままの事実。\n・反省が加わることによって初めて「私」と「物」の対立が生じます。\n\n【西洋近代認識論の克服】\n・デカルトやカントが前提とした「主観／客観の二元論」を、東洋的直観（禅の体験）を論理化することによって根底から超克しようと試みました。",
            "examples": [
                {
                    "target": "西田幾多郎は『善の研究』において、主客未分の根源的意識状態を「純粋経験」と命名しました。",
                    "reading": "にしだきたろうは『ぜんのけんきゅう』において、しゅかくみぶんの こんげんてきいしきじょうたいを「じゅんすいけいけん」と めいめいしました。",
                    "translation": "In 'An Inquiry into the Good', Kitaro Nishida named the fundamental state of consciousness prior to subject-object division 'pure experience'."
                },
                {
                    "target": "美しい音楽に完全に没入している瞬間、聴き手と音の境界は消失して純粋経験が現成します。",
                    "reading": "うつくしい おんがくに かんぜんに ぼつにゅうしている しゅんかん、ききてと おとの きょうかいは しょうしつして じゅんすいけいけんが げんじょうします。",
                    "translation": "In the moment of being completely absorbed in beautiful music, the boundary between listener and sound disappears and pure experience manifests."
                },
                {
                    "target": "東洋の直観的知恵を西洋哲学の厳密な概念体系で論理化した点に、京都学派の独創性があります。",
                    "reading": "とうようの ちょっかんてきちえを せいようてつがくの げんみつな がいねんたいけいで ろんりかした てんに、きょうとがくはの どくそうせいが あります。",
                    "translation": "In logicalizing Eastern intuitive wisdom through the rigorous conceptual framework of Western philosophy lies the originality of the Kyoto School."
                },
                {
                    "target": "知識が成立する以前の直接的な体験こそが、すべての真理と実在の根拠であると西田は論じました。",
                    "reading": "ちしきが せいりつする いぜんの ちょくせつてきな たいけんこそが、すべての しんりと じつざいの こんきょであると にしだは ろんじました。",
                    "translation": "Nishida argued that direct experience prior to the establishment of knowledge is the very ground of all truth and reality."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】京都学派哲学・禅宗思想と日本伝統美学（第1部）における文脈上最も正確な専門的日本語記述を選択してください（問22.1.1）。",
                    "options": [
                        "西田幾多郎は『善の研究』において、主観と客観が未だ分かれない根源的な意識の直接的直観を「純粋経験」と名付けました。",
                        "学術的定義を誤った選択肢（22.1.1）",
                        "歴史的事実と合致しない誤文（22.1.2）",
                        "論理的一貫性を欠く記述（22.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】西田幾多郎の「純粋経験」「場所の論理」、道元禅師『正法眼蔵』、侘び寂び・幽玄の哲学的探究（第1部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】京都学派哲学・禅宗思想と日本伝統美学（第1部）の高度な対話・批評として最も適切な文を選択してください（演習22.1）。",
                    "options": [
                        "道元禅師は『正法眼蔵』の「有時」の巻において、時間とは孤立した流れではなく、存在そのものが時間として現成していると説きました。",
                        "批評的論旨が破綻している文（22.1.x）",
                        "助詞や構文の接続が不自然な誤文（22.1.y）",
                        "不適切な語彙選択を含む誤答（22.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u22-l1）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "谷崎潤一郎は『陰翳礼讃』において、西洋の均質な光の美学に対して、陰影と薄暗がりの調和の中にこそ日本特有の美が宿ると論じました。",
                        "概念の誤用による不当な解釈（22.1.a）",
                        "主述の不整合を含む不完全文（22.1.b）",
                        "文脈にそぐわない的外れな文（22.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】京都学派哲学・禅宗思想と日本伝統美学（第1部）の学習到達度を判定する学術設問です。完全な文を選択してください（試22-1）。",
                    "options": [
                        "侘び寂びの美意識は、完全無欠な対称性を拒絶し、不完全さや余白の中に無限の精神的豊かさを見出します。",
                        "専門的根拠の欠落した誤文（22.1.m）",
                        "文法的語尾接続の誤謬（22.1.n）",
                        "文意の不明瞭な不適格文（22.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u22-l1）の主要専門用語を入力してください（「西田幾多」）：",
                    "acceptedAnswers": [
                        "西田幾多",
                        "西田幾多郎は"
                    ],
                    "explanation": "正解の学術用語は「西田幾多」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u22-l2": {
        "id": "ja-u22-l2",
        "subject": "japanese",
        "unit": 22,
        "lessonNumber": 2,
        "title": "「場所の論理」と主客未分の根源的統一",
        "level": "B2",
        "objective": "西田哲学の中核概念「場所の論理（Topos）」、述語的論理、有の場所から無の場所への深化。",
        "presentation": {
            "explanation": "西田幾多郎が主著『働くものから見るものへ』等で展開した独自の存在論「場所の論理（ばしょのろんり）」を学びます。\n\n【場所の論理の三層構造】\n１．有の場所（自然的世界）：アリストテレス的主語論理（物が客観として存在する世界）。\n２．相対的無の場所（意識の世界）：対象を認識する自己の意識空間（カントの統覚的自己）。\n３．絶対無の場所（真の実在）：認識する自己をも包摂し、主客の対立を超えてすべてをあるがままに成立せしめる根源的包摂者。\n\n【述語的論理の転回】\n・主語が客観的存在を表すのに対し、述語は「包む場所」を表します。「私が見る」のではなく、「絶対無の場所において自己と世界が映し出されている」という転回です。",
            "examples": [
                {
                    "target": "西田哲学の「場所の論理」は、主語的把握を超えて述語的包摂の立場から世界を捉え直す試みです。",
                    "reading": "にしだてつがくの「ばしょのろんり」は、しゅごてきはあくを こえて じゅつごてきほうせつの たちばから せかいを とらえなおす こころみです。",
                    "translation": "Nishida's 'Logic of Place' is an attempt to reconceptualize the world from the standpoint of predicative envelopment beyond subject-centric grasping."
                },
                {
                    "target": "絶対無の場所において、個物は個物でありながら全体と矛盾的自己同一を保ちます。",
                    "reading": "ぜったいむの ばしょにおいて、こぶつは こぶつでありながら ぜんたいと むじゅんてきじこどういつを たもちます。",
                    "translation": "In the place of absolute nothingness, individual entities maintain contradictory self-identity with the whole while remaining individual entities."
                },
                {
                    "target": "自己が世界を映すと同時に、世界が自己を映し出すという動的な相互関係が説かれます。",
                    "reading": "じこが せかいを うつすと どうじに、せかいが じこを うつしだすという どうてきな そうごかんけいが とかれます。",
                    "translation": "A dynamic reciprocal relationship is expounded wherein the self mirrors the world while simultaneously the world mirrors the self."
                },
                {
                    "target": "有と無の対立を包み込む「絶対無」の地平こそが、京都学派の存在論の核心を成しています。",
                    "reading": "ゆうと むの たいりつを つつみこむ「ぜったいむ」の ちへいこそが、きょうとがくはの そんざいろんの かくしんを なしています。",
                    "translation": "The horizon of 'absolute nothingness' enveloping the opposition between being and non-being forms the very core of Kyoto School ontology."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】京都学派哲学・禅宗思想と日本伝統美学（第2部）における文脈上最も正確な専門的日本語記述を選択してください（問22.2.1）。",
                    "options": [
                        "西田幾多郎は『善の研究』において、主観と客観が未だ分かれない根源的な意識の直接的直観を「純粋経験」と名付けました。",
                        "学術的定義を誤った選択肢（22.2.1）",
                        "歴史的事実と合致しない誤文（22.2.2）",
                        "論理的一貫性を欠く記述（22.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】西田幾多郎の「純粋経験」「場所の論理」、道元禅師『正法眼蔵』、侘び寂び・幽玄の哲学的探究（第2部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】京都学派哲学・禅宗思想と日本伝統美学（第2部）の高度な対話・批評として最も適切な文を選択してください（演習22.2）。",
                    "options": [
                        "道元禅師は『正法眼蔵』の「有時」の巻において、時間とは孤立した流れではなく、存在そのものが時間として現成していると説きました。",
                        "批評的論旨が破綻している文（22.2.x）",
                        "助詞や構文の接続が不自然な誤文（22.2.y）",
                        "不適切な語彙選択を含む誤答（22.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u22-l2）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "谷崎潤一郎は『陰翳礼讃』において、西洋の均質な光の美学に対して、陰影と薄暗がりの調和の中にこそ日本特有の美が宿ると論じました。",
                        "概念の誤用による不当な解釈（22.2.a）",
                        "主述の不整合を含む不完全文（22.2.b）",
                        "文脈にそぐわない的外れな文（22.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】京都学派哲学・禅宗思想と日本伝統美学（第2部）の学習到達度を判定する学術設問です。完全な文を選択してください（試22-2）。",
                    "options": [
                        "侘び寂びの美意識は、完全無欠な対称性を拒絶し、不完全さや余白の中に無限の精神的豊かさを見出します。",
                        "専門的根拠の欠落した誤文（22.2.m）",
                        "文法的語尾接続の誤謬（22.2.n）",
                        "文意の不明瞭な不適格文（22.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u22-l2）の主要専門用語を入力してください（「西田幾多」）：",
                    "acceptedAnswers": [
                        "西田幾多",
                        "西田幾多郎は"
                    ],
                    "explanation": "正解の学術用語は「西田幾多」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u22-l3": {
        "id": "ja-u22-l3",
        "subject": "japanese",
        "unit": 22,
        "lessonNumber": 3,
        "title": "道元禅師『正法眼蔵』と「只管打坐」「身心脱落」の思想",
        "level": "B2",
        "objective": "鎌倉時代の禅僧・道元（1200-1253）の主著『正法眼蔵』、曹洞宗の「只管打坐」「身心脱落」「修証一等」の思想体系。",
        "presentation": {
            "explanation": "日本曹洞宗の開祖・道元（どうげん）の深遠な禅思想と『正法眼蔵（しょうぼうげんぞう）』の言語空間を学びます。\n\n【道元禅の核心概念】\n１．只管打坐（しかんたざ）：悟りを得るための手段として坐禅するのではなく、ただひたすらに坐ることそのものが仏の現成である。\n２．身心脱落（しんじんだつらく）：自己の肉体的・精神的な執着や自我の殻が完全に脱落し、宇宙の真理と一体化すること。\n３．修証一等（しゅしょういっとう）：修行（修）と悟り（証）は別個のものではなく、本来同一である。\n４．有時（うじ）：時間と存在は不可分であり、山河大地そのものが時間として流動しているという独自の時間論。",
            "examples": [
                {
                    "target": "道元禅師は『正法眼蔵』において、「只管打坐」すなわち目的意識を捨ててひたすら坐る坐禅の実践を説きました。",
                    "reading": "どうげんぜんじは『しょうぼうげんぞう』において、「しかんたざ」すなわち もくてきいしきを すてて ひたすら すわる ざぜんの じっせんを ときました。",
                    "translation": "Zen Master Dogen in 'Shobogenzo' expounded 'shikantaza', namely the practice of sitting in zazen single-mindedly discarding all goal-oriented calculations."
                },
                {
                    "target": "「身心脱落」とは、自我への執着を根底から脱ぎ捨てて万物と一つになる絶対自由の境地です。",
                    "reading": "「しんじんだつらく」とは、じがへの しゅうちゃくを こんていから ぬぎすてて ばんぶつと ひとつになる ぜったいじゆうの きょうちです。",
                    "translation": "'Casting off body and mind' is the realm of absolute freedom where one thoroughly strips away attachment to the ego and becomes one with all myriad things."
                },
                {
                    "target": "修行のほかに悟りがあるのではなく、日々の正しい実践そのものが悟りの現成であるという「修証一等」の理念です。",
                    "reading": "しゅぎょうの ほかに さとりが あるのではなく、ひびの ただしい じっせんそのものが さとりの げんじょうであるという「しゅしょういっとう」の りねんです。",
                    "translation": "It is the principle of 'oneness of practice and realization', holding that enlightenment does not exist apart from practice, but that daily right practice itself is the manifestation of enlightenment."
                },
                {
                    "target": "山水経の巻では、「山は歩む」という逆説的な表現を通して、存在と時間の根源的一体性が語られます。",
                    "reading": "さんすいきょうの まきでは、「やまは あゆむ」という ぎゃくせつてきな ひょうげんを とおして、そんざいと じかんの こんげんてきいったいせいが かたられます。",
                    "translation": "In the Mountains and Waters Sutra fascicle, through the paradoxical expression 'mountains walk', the primordial unity of being and time is articulated."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】京都学派哲学・禅宗思想と日本伝統美学（第3部）における文脈上最も正確な専門的日本語記述を選択してください（問22.3.1）。",
                    "options": [
                        "西田幾多郎は『善の研究』において、主観と客観が未だ分かれない根源的な意識の直接的直観を「純粋経験」と名付けました。",
                        "学術的定義を誤った選択肢（22.3.1）",
                        "歴史的事実と合致しない誤文（22.3.2）",
                        "論理的一貫性を欠く記述（22.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】西田幾多郎の「純粋経験」「場所の論理」、道元禅師『正法眼蔵』、侘び寂び・幽玄の哲学的探究（第3部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】京都学派哲学・禅宗思想と日本伝統美学（第3部）の高度な対話・批評として最も適切な文を選択してください（演習22.3）。",
                    "options": [
                        "道元禅師は『正法眼蔵』の「有時」の巻において、時間とは孤立した流れではなく、存在そのものが時間として現成していると説きました。",
                        "批評的論旨が破綻している文（22.3.x）",
                        "助詞や構文の接続が不自然な誤文（22.3.y）",
                        "不適切な語彙選択を含む誤答（22.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u22-l3）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "谷崎潤一郎は『陰翳礼讃』において、西洋の均質な光の美学に対して、陰影と薄暗がりの調和の中にこそ日本特有の美が宿ると論じました。",
                        "概念の誤用による不当な解釈（22.3.a）",
                        "主述の不整合を含む不完全文（22.3.b）",
                        "文脈にそぐわない的外れな文（22.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】京都学派哲学・禅宗思想と日本伝統美学（第3部）の学習到達度を判定する学術設問です。完全な文を選択してください（試22-3）。",
                    "options": [
                        "侘び寂びの美意識は、完全無欠な対称性を拒絶し、不完全さや余白の中に無限の精神的豊かさを見出します。",
                        "専門的根拠の欠落した誤文（22.3.m）",
                        "文法的語尾接続の誤謬（22.3.n）",
                        "文意の不明瞭な不適格文（22.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u22-l3）の主要専門用語を入力してください（「西田幾多」）：",
                    "acceptedAnswers": [
                        "西田幾多",
                        "西田幾多郎は"
                    ],
                    "explanation": "正解の学術用語は「西田幾多」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u22-l4": {
        "id": "ja-u22-l4",
        "subject": "japanese",
        "unit": 22,
        "lessonNumber": 4,
        "title": "侘び・寂び・幽玄・物の哀れ：日本伝統美学の四元構造",
        "level": "B2",
        "objective": "日本の伝統的四大美意識（物の哀れ：平安、幽玄：中世能楽、侘び：茶道、寂び：俳諧）の歴史的展開と哲学的本質。",
        "presentation": {
            "explanation": "日本の美意識を構成する四大カテゴリーの通時的変遷と深層構造を学びます。\n\n【四大美意識の体系】\n１．物の哀れ（もののあわれ：平安時代・国学）：\n　・四季の移ろいや生滅流転に直面した際の、深奥な情動と哀感（本居宣長『源氏物語玉の小櫛』）。\n２．幽玄（ゆうげん：中世・能楽歌論）：\n　・言葉や形には表れ尽くさない、奥深く神秘的な余情の美（世阿弥、藤原定家）。\n３．侘び（わび：室町〜安土桃山・茶道）：\n　・物質的な不足や簡素さの中に、精神的な充足と高貴な美を見出す態度（千利休）。\n４．寂び（さび：江戸時代・俳諧）：\n　・時間の経過によって古び、枯淡の趣を帯びた事物に対する静寂の美（松尾芭蕉）。",
            "examples": [
                {
                    "target": "「物の哀れ」は移ろいゆく桜の散り際や四季の無常を見つめる平安貴族の繊細な感受性から生まれました。",
                    "reading": "「もののあわれ」は うつろいゆく さくらの ちりぎわや しきの むじょうを みつめる へいあんきぞくの せんさいな かんじゅせいから うまれました。",
                    "translation": "'Mono no aware' was born from the delicate sensibility of Heian nobility gazing at scattering cherry blossoms and the transience of four seasons."
                },
                {
                    "target": "世阿弥が能楽の至高の美として位置づけた「幽玄」は、微かな余韻と神秘的な奥深さに宿ります。",
                    "reading": "ぜあみが のうがくの しこうの びとして いちづけた「ゆうげん」は、かすかな よいんと しんぴてきな おくぶかさに やどります。",
                    "translation": "'Yugen', positioned by Zeami as the supreme aesthetic of Noh theater, resides in faint reverberations and mystical profundity."
                },
                {
                    "target": "千利休は大名たちの豪華絢爛な道具を排し、素朴な黒楽茶碗に「侘び」の真髄を見出しました。",
                    "reading": "せんのりきゅうは だいみょうたちの ごうかけんらんな どうぐを はいし、そぼくな くろらくちゃわんに「わび」の しんずいを みいだしました。",
                    "translation": "Sen no Rikyu rejected the ostentatious utensils of warlords and discovered the quintessence of 'wabi' in austere black Raku teabowls."
                },
                {
                    "target": "苔むした庭石や古びた木造建築に滲み出る「寂び」の風情は、時間の堆積が生み出す静謐な美です。",
                    "reading": "こけむした にわいしや ふるびた もくぞうけんちくに にじみでる「さび」の ふぜいは、じかんの たいせきが うみだす せいひつな びです。",
                    "translation": "The tasteful atmosphere of 'sabi' exuding from moss-covered garden stones and weathered wooden architecture is a tranquil beauty born of accumulated time."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】京都学派哲学・禅宗思想と日本伝統美学（第4部）における文脈上最も正確な専門的日本語記述を選択してください（問22.4.1）。",
                    "options": [
                        "西田幾多郎は『善の研究』において、主観と客観が未だ分かれない根源的な意識の直接的直観を「純粋経験」と名付けました。",
                        "学術的定義を誤った選択肢（22.4.1）",
                        "歴史的事実と合致しない誤文（22.4.2）",
                        "論理的一貫性を欠く記述（22.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】西田幾多郎の「純粋経験」「場所の論理」、道元禅師『正法眼蔵』、侘び寂び・幽玄の哲学的探究（第4部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】京都学派哲学・禅宗思想と日本伝統美学（第4部）の高度な対話・批評として最も適切な文を選択してください（演習22.4）。",
                    "options": [
                        "道元禅師は『正法眼蔵』の「有時」の巻において、時間とは孤立した流れではなく、存在そのものが時間として現成していると説きました。",
                        "批評的論旨が破綻している文（22.4.x）",
                        "助詞や構文の接続が不自然な誤文（22.4.y）",
                        "不適切な語彙選択を含む誤答（22.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u22-l4）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "谷崎潤一郎は『陰翳礼讃』において、西洋の均質な光の美学に対して、陰影と薄暗がりの調和の中にこそ日本特有の美が宿ると論じました。",
                        "概念の誤用による不当な解釈（22.4.a）",
                        "主述の不整合を含む不完全文（22.4.b）",
                        "文脈にそぐわない的外れな文（22.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】京都学派哲学・禅宗思想と日本伝統美学（第4部）の学習到達度を判定する学術設問です。完全な文を選択してください（試22-4）。",
                    "options": [
                        "侘び寂びの美意識は、完全無欠な対称性を拒絶し、不完全さや余白の中に無限の精神的豊かさを見出します。",
                        "専門的根拠の欠落した誤文（22.4.m）",
                        "文法的語尾接続の誤謬（22.4.n）",
                        "文意の不明瞭な不適格文（22.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u22-l4）の主要専門用語を入力してください（「西田幾多」）：",
                    "acceptedAnswers": [
                        "西田幾多",
                        "西田幾多郎は"
                    ],
                    "explanation": "正解の学術用語は「西田幾多」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u22-l5": {
        "id": "ja-u22-l5",
        "subject": "japanese",
        "unit": 22,
        "lessonNumber": 5,
        "title": "千利休の茶道思想「和敬清寂」と禅美学の統合",
        "level": "B2",
        "objective": "千利休が大成した草庵の茶（茶の湯）、「和敬清寂」「一期一会」の哲学と総合芸術的空間構成。",
        "presentation": {
            "explanation": "茶聖・千利休（せんのりきゅう：1522-1591）が大成した「侘び茶」の哲学的・空間的統合を学びます。\n\n【茶道精神の四規「和敬清寂」】\n１．和（わ）：主客が心を通わせ、互いに調和すること。\n２．敬（けい）：身分の貴賤を問わず、互いを一人の人間として敬うこと。\n３．清（せい）：心身および茶室・道具の清浄を保つこと。\n４．寂（じゃく）：一切の虚飾を脱ぎ捨て、不動の静寂と平穏を得ること。\n\n【空間革命：二畳草庵「待庵（たいあん）」】\n・にじり口（躙口）：どんな身分の武士であっても刀を外し、頭を低く屈めなければ入れない小さな入口（絶対平等の空間）。",
            "examples": [
                {
                    "target": "千利休の提唱した「和敬清寂」は、茶の湯のみならず日本人の精神文化全般に深く根付く指導理念です。",
                    "reading": "せんのりきゅうの ていしょうした「わけいせいじゃく」は、ちゃのゆのみならず にほんじんの せいしんぶんかぜんぱんに ふかく ねづく しどうりねんです。",
                    "translation": "The 'Wa-Kei-Sei-Jaku' advocated by Sen no Rikyu is a guiding principle deeply rooted not only in the tea ceremony but in Japanese spiritual culture overall."
                },
                {
                    "target": "「一期一会」の心構えとは、生涯に一度しか巡り会えない出会いとして、一服の茶に全身全霊を傾ける作法です。",
                    "reading": "「いちごいちえ」の こころがまえとは、しょうがいに いちどしか めぐりあえない であいとして、いっぷくの ちゃに ぜんしんぜんれいを かたむける さほうです。",
                    "translation": "The disposition of 'ichigo ichie' is the etiquette of devoting one's whole body and soul to a single bowl of tea, treating it as an encounter that happens only once in a lifetime."
                },
                {
                    "target": "にじり口をくぐることで、武士も商人も身分を超えて対等な人間として茶室に座することが求められました。",
                    "reading": "にじりぐちを くぐることで、ぶしも しょうにんも みぶんを こえて たいとうな にんげんとして ちゃしつに すわることが もとめられました。",
                    "translation": "By crawling through the nijiriguchi entrance, samurai and merchants alike were required to sit in the tearoom as equal human beings transcending social rank."
                },
                {
                    "target": "床の間の掛け軸、茶花、陶器の配置に至るまで、茶室は計算し尽くされた総合芸術空間です。",
                    "reading": "とこのまの かけじく、ちゃばな、とうきの はいちに いたるまで、ちゃしつは けいさんしつくされた そうごうげいじゅつくうかんです。",
                    "translation": "From the hanging scroll in the alcove to the seasonal tea flowers and ceramic arrangement, the tearoom is a thoroughly calculated comprehensive artistic space."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】京都学派哲学・禅宗思想と日本伝統美学（第5部）における文脈上最も正確な専門的日本語記述を選択してください（問22.5.1）。",
                    "options": [
                        "西田幾多郎は『善の研究』において、主観と客観が未だ分かれない根源的な意識の直接的直観を「純粋経験」と名付けました。",
                        "学術的定義を誤った選択肢（22.5.1）",
                        "歴史的事実と合致しない誤文（22.5.2）",
                        "論理的一貫性を欠く記述（22.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】西田幾多郎の「純粋経験」「場所の論理」、道元禅師『正法眼蔵』、侘び寂び・幽玄の哲学的探究（第5部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】京都学派哲学・禅宗思想と日本伝統美学（第5部）の高度な対話・批評として最も適切な文を選択してください（演習22.5）。",
                    "options": [
                        "道元禅師は『正法眼蔵』の「有時」の巻において、時間とは孤立した流れではなく、存在そのものが時間として現成していると説きました。",
                        "批評的論旨が破綻している文（22.5.x）",
                        "助詞や構文の接続が不自然な誤文（22.5.y）",
                        "不適切な語彙選択を含む誤答（22.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u22-l5）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "谷崎潤一郎は『陰翳礼讃』において、西洋の均質な光の美学に対して、陰影と薄暗がりの調和の中にこそ日本特有の美が宿ると論じました。",
                        "概念の誤用による不当な解釈（22.5.a）",
                        "主述の不整合を含む不完全文（22.5.b）",
                        "文脈にそぐわない的外れな文（22.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】京都学派哲学・禅宗思想と日本伝統美学（第5部）の学習到達度を判定する学術設問です。完全な文を選択してください（試22-5）。",
                    "options": [
                        "侘び寂びの美意識は、完全無欠な対称性を拒絶し、不完全さや余白の中に無限の精神的豊かさを見出します。",
                        "専門的根拠の欠落した誤文（22.5.m）",
                        "文法的語尾接続の誤謬（22.5.n）",
                        "文意の不明瞭な不適格文（22.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u22-l5）の主要専門用語を入力してください（「西田幾多」）：",
                    "acceptedAnswers": [
                        "西田幾多",
                        "西田幾多郎は"
                    ],
                    "explanation": "正解の学術用語は「西田幾多」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u23-l1": {
        "id": "ja-u23-l1",
        "subject": "japanese",
        "unit": 23,
        "lessonNumber": 1,
        "title": "数寄屋造りの空間美学：桂離宮と自然との有機的調和",
        "level": "B2",
        "objective": "数寄屋造り（すきやづくり）の建築様式、桂離宮（かつらりきゅう）の雁行配置、ブルーノ・タウトによる世界的評価。",
        "presentation": {
            "explanation": "日本の伝統木造建築の最高峰「数寄屋造り（すきやづくり）」と桂離宮の建築空間を学びます。\n\n【数寄屋造りの特質】\n・「数寄（すき）」とは茶道や風流を愛好する心を意味し、書院造の格式ばった権威主義を排して、茶室の手法を取り入れた住宅様式です。\n・面皮柱（丸太の皮を一部残した柱）、土壁、竹、杉皮など、自然素材の素朴なテクスチャーを極限まで洗練させます。\n\n【桂離宮（17世紀創建）の建築的驚異】\n・雁行（がんこう）配置：古書院・中書院・新御殿が斜めに雁の群れのように連続し、どの部屋からも庭園の光と風が立体的に取り込まれる設計。\n・ドイツの建築家ブルーノ・タウトは「機能的でありながら完璧な美（泣きたくなるほど美しい）」と激賞しました。",
            "examples": [
                {
                    "target": "桂離宮の数寄屋造り建築は、装飾を削ぎ落とした簡素さの中に究極の洗練と機能美を体現しています。",
                    "reading": "かつらりきゅうの すきやづくりけんちくは、そうしょくを そぎおとした かんそさの なかに きゅうきょくの せんれんと きのうびを たいげんしています。",
                    "translation": "The Sukiya-style architecture of Katsura Imperial Villa embodies ultimate sophistication and functional beauty within simplicity stripped of ornament."
                },
                {
                    "target": "ドイツの建築家ブルーノ・タウトは、桂離宮の無駄のない構造美をモダニズム建築の先駆として世界に紹介しました。",
                    "reading": "ドイツの けんちくか ブルーノ・タウトは、かつらりきゅうの むだのない こうぞうびを モダニズムけんちくの せんくとして せかいに しょうかいしました。",
                    "translation": "German architect Bruno Taut introduced Katsura Villa's lean structural beauty to the world as a pioneer of modern architecture."
                },
                {
                    "target": "庭園の池や四季の植栽と建築群が有機的に融合し、回遊式庭園の歩みとともに風景が無限に展開します。",
                    "reading": "ていえんの いけや しきの しょくさいと けんちくぐんが ゆうきてきに ゆうごうし、かいゆうしきていえんの あゆみとともに ふうけいが むげんに てんかいします。",
                    "translation": "The garden ponds and seasonal plants organically merge with the architecture, with scenery unfolding infinitely alongside steps through the stroll garden."
                },
                {
                    "target": "月を観賞するために張り出された「月見台（つきみだい）」は、自然現象と人間生活の詩的対話を象徴しています。",
                    "reading": "つきを かんしょうするために はりだされた「つきみだい」は、しぜんげんしょうと にんげんせいかつの してきたいわを しょうちょうしています。",
                    "translation": "The 'Moon Viewing Platform' extending out to admire the moon symbolizes the poetic dialogue between natural phenomena and human life."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第1部）における文脈上最も正確な専門的日本語記述を選択してください（問23.1.1）。",
                    "options": [
                        "桂離宮の雁行配置と洗練された数寄屋造りの空間構成は、ブルーノ・タウトやヴァルター・グロピウスら近代モダニズム建築の巨匠たちに絶大な衝撃を与えました。",
                        "学術的定義を誤った選択肢（23.1.1）",
                        "歴史的事実と合致しない誤文（23.1.2）",
                        "論理的一貫性を欠く記述（23.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】桂離宮の数寄屋造り、葛飾北斎・歌川広重の浮世絵版画、ジャポニスムの世界的影響（第1部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第1部）の高度な対話・批評として最も適切な文を選択してください（演習23.1）。",
                    "options": [
                        "葛飾北斎の『冨嶽三十六景・神奈川沖浪裏』は、躍動する巨大な波の造形美と静止する富士山の対比によって、世界の美術史における不朽の金字塔を打ち立てました。",
                        "批評的論旨が破綻している文（23.1.x）",
                        "助詞や構文の接続が不自然な誤文（23.1.y）",
                        "不適切な語彙選択を含む誤答（23.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u23-l1）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "歌川広重の風景版画に見られる大胆な俯瞰構図と雨の描写は、フィンセント・ファン・ゴッホによって油彩画として熱心に模写されました。",
                        "概念の誤用による不当な解釈（23.1.a）",
                        "主述の不整合を含む不完全文（23.1.b）",
                        "文脈にそぐわない的外れな文（23.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第1部）の学習到達度を判定する学術設問です。完全な文を選択してください（試23-1）。",
                    "options": [
                        "日本の浮世絵は、遠近法の既成概念を覆す平面性と鮮烈な輪郭線によって、19世紀後半のヨーロッパにおけるジャポニスムの潮流を牽引しました。",
                        "専門的根拠の欠落した誤文（23.1.m）",
                        "文法的語尾接続の誤謬（23.1.n）",
                        "文意の不明瞭な不適格文（23.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u23-l1）の主要専門用語を入力してください（「桂離宮の」）：",
                    "acceptedAnswers": [
                        "桂離宮の",
                        "桂離宮の雁行"
                    ],
                    "explanation": "正解の学術用語は「桂離宮の」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u23-l2": {
        "id": "ja-u23-l2",
        "subject": "japanese",
        "unit": 23,
        "lessonNumber": 2,
        "title": "木造軸組構法の力学と可変性（柱・梁・貫・障子・襖）",
        "level": "B2",
        "objective": "日本の伝統木造軸組構法（ポスト＆ビーム）、継手・仕口、建具（障子・襖）によるフレキシブルな空間可変性。",
        "presentation": {
            "explanation": "西洋の組積造（石積み・レンガ）と対照をなす日本の「木造軸組構法（じくぐみこうほう）」の力学と柔軟性を学びます。\n\n【木造軸組構法の構造原理】\n１．柱（垂直材）と梁（水平材）、貫（ぬき：柱を貫通する横木）による架構システム。\n２．非耐力壁の自由度：壁で建物を支えるのではなく骨組みで支持するため、外壁や間仕切りをすべて取り払い、庭と一体化する開放的空間が実現可能。\n３．建具の可変性：障子（採光）や襖（仕切り）を開閉・取り外すことで、複数の小部屋を瞬時に一室の大広間へと変換できます。",
            "examples": [
                {
                    "target": "日本の伝統的な木造軸組構法は、柱と梁による柔軟な骨組みにより地震の揺れを巧みに逃がします。",
                    "reading": "にほんの でんとうてきな もくぞうじくぐみこうほうは、はしらと はりに よる じゅうなんな ほねぐみにより じしんの ゆれを たくみに にがします。",
                    "translation": "Japan's traditional wooden post-and-beam construction skillfully dissipates earthquake tremors through a flexible framework of pillars and beams."
                },
                {
                    "target": "襖や障子を取り外すことで、季節や冠婚葬祭の用途に応じて間取りを自在に変更することが可能です。",
                    "reading": "ふすまや しょうじを とりはずすことで、きせつや かんこんそうさいの ようとに おうじて まどりを じざいに へんこうすることが かのうです。",
                    "translation": "By removing fusuma sliding doors and shoji screens, one can freely alter floor layouts according to seasons and ceremonial occasions."
                },
                {
                    "target": "深い軒（のき）は夏の強烈な直射日光を遮り、冬の暖かな斜光を室内の奥深くまで導き入れます。",
                    "reading": "ふかい のきは なつの きょうれつな ちょくしゃにっこうを さえぎり、ふゆの あたたかな しゃこうを しつないの おくふくまで みちびきいれます。",
                    "translation": "Deep eaves block the intense direct sunlight of summer while guiding the warm low-angle rays of winter deep into the room."
                },
                {
                    "target": "金属の釘を一切使わずに木材同士を複雑に噛み合わせる「仕口」技術は、宮大工の至高の知恵です。",
                    "reading": "きんぞくの くぎを いっさい つかわずに もくざいどうしを ふくざつに かみあわせる「しぐち」ぎじゅつは、みやだいくの しこうの ちえです。",
                    "translation": "The 'shiguchi' joint technology of intricately interlocking timbers without using any metal nails is the supreme wisdom of master temple carpenters."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第2部）における文脈上最も正確な専門的日本語記述を選択してください（問23.2.1）。",
                    "options": [
                        "桂離宮の雁行配置と洗練された数寄屋造りの空間構成は、ブルーノ・タウトやヴァルター・グロピウスら近代モダニズム建築の巨匠たちに絶大な衝撃を与えました。",
                        "学術的定義を誤った選択肢（23.2.1）",
                        "歴史的事実と合致しない誤文（23.2.2）",
                        "論理的一貫性を欠く記述（23.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】桂離宮の数寄屋造り、葛飾北斎・歌川広重の浮世絵版画、ジャポニスムの世界的影響（第2部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第2部）の高度な対話・批評として最も適切な文を選択してください（演習23.2）。",
                    "options": [
                        "葛飾北斎の『冨嶽三十六景・神奈川沖浪裏』は、躍動する巨大な波の造形美と静止する富士山の対比によって、世界の美術史における不朽の金字塔を打ち立てました。",
                        "批評的論旨が破綻している文（23.2.x）",
                        "助詞や構文の接続が不自然な誤文（23.2.y）",
                        "不適切な語彙選択を含む誤答（23.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u23-l2）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "歌川広重の風景版画に見られる大胆な俯瞰構図と雨の描写は、フィンセント・ファン・ゴッホによって油彩画として熱心に模写されました。",
                        "概念の誤用による不当な解釈（23.2.a）",
                        "主述の不整合を含む不完全文（23.2.b）",
                        "文脈にそぐわない的外れな文（23.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第2部）の学習到達度を判定する学術設問です。完全な文を選択してください（試23-2）。",
                    "options": [
                        "日本の浮世絵は、遠近法の既成概念を覆す平面性と鮮烈な輪郭線によって、19世紀後半のヨーロッパにおけるジャポニスムの潮流を牽引しました。",
                        "専門的根拠の欠落した誤文（23.2.m）",
                        "文法的語尾接続の誤謬（23.2.n）",
                        "文意の不明瞭な不適格文（23.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u23-l2）の主要専門用語を入力してください（「桂離宮の」）：",
                    "acceptedAnswers": [
                        "桂離宮の",
                        "桂離宮の雁行"
                    ],
                    "explanation": "正解の学術用語は「桂離宮の」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u23-l3": {
        "id": "ja-u23-l3",
        "subject": "japanese",
        "unit": 23,
        "lessonNumber": 3,
        "title": "浮世絵木版画の多色摺技術（錦絵）と鈴木春信・喜多川歌麿",
        "level": "B2",
        "objective": "江戸時代の浮世絵木版画、多色摺錦絵（にしきえ）の技術的革新（見当合わせ）、鈴木春信・喜多川歌麿の美人画表現。",
        "presentation": {
            "explanation": "江戸庶民文化が生み出した世界最高峰の木版印刷美術「浮世絵（うきよえ）」の技術と美人画を学びます。\n\n【多色摺錦絵（にしきえ）の技術革命（1765年）】\n１．絵師（下絵描き）、彫師（版木彫り）、摺師（多色重ね摺り）、版元（プロデューサー）の四者協働分業制。\n２．見当（けんとう）：多色を寸分の狂いもなく重ね刷りするために版木の隅に刻まれた直角の目印（「見当違い」「見当をつける」の語源）。\n３．鈴木春信（すずきはるのぶ）：中間色を多用した叙情的な錦絵を創始。\n４．喜多川歌麿（きたがわうたまろ）：女性の胸から上を大きく捉えた「大首絵（おおくびえ）」によって内面心理の機微を描破。",
            "examples": [
                {
                    "target": "鈴木春信が確立した多色摺錦絵は、版木の隅に「見当」を刻むことで十色以上の精密な重ね摺りを可能にしました。",
                    "reading": "すずきはるのぶが かくりつした たしょくずりにしきえは、はんぎの すみに「けんとう」を きざむことで じゅっしょくいじょうの せいみつな かさねずりを かのうに しました。",
                    "translation": "The full-color nishiki-e established by Suzuki Harunobu enabled precise overlay printing of over ten colors by carving 'kento' registration marks into woodblock corners."
                },
                {
                    "target": "喜多川歌麿の「大首絵」は、遊女や町娘の微細な表情や心理的葛藤を卓越した線描で描き出しました。",
                    "reading": "きたがわうたまろの「おおくびえ」は、ゆうじょや まちむすめの びさいな ひょうじょうや しんりてきかっとうを たくえつした せんびょうで えがきだしました。",
                    "translation": "Kitagawa Utamaro's 'large-head portraits' depicted the subtle facial expressions and psychological struggles of courtesans and town maidens with preeminent line drawing."
                },
                {
                    "target": "絵師・彫師・摺師・版元の高度な分業システムが、江戸時代における安価で大量の美術印刷を支えました。",
                    "reading": "えし・ほりし・すりし・はんもとの こうどな ぶんぎょうシステムが、えどじだいにおける あんかで たいりょうの びじゅついんさつを ささえました。",
                    "translation": "The sophisticated division-of-labor system among painter, carver, printer, and publisher supported inexpensive mass art printing in the Edo period."
                },
                {
                    "target": "雲母（きら）の粉を背景に散りばめた「雲母摺（きらずり）」技法により、画面に幽玄な光沢と高級感が与えられました。",
                    "reading": "きらの こなを はいけいに ちりばめた「きらずり」ぎほうにより、がめんに ゆうげんな こうたくと こうきゅうかんが あたえられました。",
                    "translation": "Through the 'kirazuri' technique dusting mica powder over backgrounds, mystical luster and luxury were imparted to the print surfaces."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第3部）における文脈上最も正確な専門的日本語記述を選択してください（問23.3.1）。",
                    "options": [
                        "桂離宮の雁行配置と洗練された数寄屋造りの空間構成は、ブルーノ・タウトやヴァルター・グロピウスら近代モダニズム建築の巨匠たちに絶大な衝撃を与えました。",
                        "学術的定義を誤った選択肢（23.3.1）",
                        "歴史的事実と合致しない誤文（23.3.2）",
                        "論理的一貫性を欠く記述（23.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】桂離宮の数寄屋造り、葛飾北斎・歌川広重の浮世絵版画、ジャポニスムの世界的影響（第3部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第3部）の高度な対話・批評として最も適切な文を選択してください（演習23.3）。",
                    "options": [
                        "葛飾北斎の『冨嶽三十六景・神奈川沖浪裏』は、躍動する巨大な波の造形美と静止する富士山の対比によって、世界の美術史における不朽の金字塔を打ち立てました。",
                        "批評的論旨が破綻している文（23.3.x）",
                        "助詞や構文の接続が不自然な誤文（23.3.y）",
                        "不適切な語彙選択を含む誤答（23.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u23-l3）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "歌川広重の風景版画に見られる大胆な俯瞰構図と雨の描写は、フィンセント・ファン・ゴッホによって油彩画として熱心に模写されました。",
                        "概念の誤用による不当な解釈（23.3.a）",
                        "主述の不整合を含む不完全文（23.3.b）",
                        "文脈にそぐわない的外れな文（23.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第3部）の学習到達度を判定する学術設問です。完全な文を選択してください（試23-3）。",
                    "options": [
                        "日本の浮世絵は、遠近法の既成概念を覆す平面性と鮮烈な輪郭線によって、19世紀後半のヨーロッパにおけるジャポニスムの潮流を牽引しました。",
                        "専門的根拠の欠落した誤文（23.3.m）",
                        "文法的語尾接続の誤謬（23.3.n）",
                        "文意の不明瞭な不適格文（23.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u23-l3）の主要専門用語を入力してください（「桂離宮の」）：",
                    "acceptedAnswers": [
                        "桂離宮の",
                        "桂離宮の雁行"
                    ],
                    "explanation": "正解の学術用語は「桂離宮の」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u23-l4": {
        "id": "ja-u23-l4",
        "subject": "japanese",
        "unit": 23,
        "lessonNumber": 4,
        "title": "葛飾北斎『富嶽三十六景』と歌川広重『東海道五十三次』の構図革命",
        "level": "B2",
        "objective": "葛飾北斎（神奈川沖浪裏・赤富士）の大胆な幾何学的構図、歌川広重の詩情豊かな雨雪風景とプルシアンブルー（ベロ藍）。",
        "presentation": {
            "explanation": "世界美術史に衝撃を与えた二大巨匠、葛飾北斎（かつしかほくさい）と歌川広重（うたがわひろしげ）の風景版画を学びます。\n\n【葛飾北斎『富嶽三十六景』（1831年頃）】\n・動的構図の極致：「神奈川沖浪裏（Great Wave）」に見る円弧と三角形の幾何学的対比。荒れ狂う巨大な波の飛沫と、遠景に静然と鎮座する富士山のドラマティックな対比。\n・赤富士（凱風快晴）：陽光に染まる富士山を鮮烈な朱色と藍で描いた至高の傑作。\n\n【歌川広重『東海道五十三次』（1833年）】\n・叙情性と天候描写：「庄野の白雨（夕立）」「蒲原の夜之雪」に見る、風雨や静寂な積雪の中を旅する庶民の哀歓と自然の詩情。\n・ベロ藍（プルシアンブルー）：輸入された合成顔料を導入し、透明感のある空と海のグラデーション（ぼかし摺り）を実現。",
            "examples": [
                {
                    "target": "葛飾北斎の『神奈川沖浪裏』は、大波のダイナミックな円弧運動と富士山の静寂が完璧な幾何学的調和を成しています。",
                    "reading": "かつしかほくさいの『かながわおきなみうら』は、おおなみの ダイナミックな えんこううんどうと ふじさんの せいじゃくが かんぺきな きかがくてきちょうわを なしています。",
                    "translation": "Katsushika Hokusai's 'Under the Wave off Kanagawa' achieves perfect geometric harmony between the dynamic arc motion of the giant wave and Mount Fuji's stillness."
                },
                {
                    "target": "歌川広重の『東海道五十三次』は、雨風や雪景色の中を行く旅人の姿を情感豊かに描き出しました。",
                    "reading": "うたがわひろしげの『とうかいどうごじゅうさんつぎ』は、あめかぜや ゆきげしきの なかを いく たびびとの すがたを じょうかんゆたかに えがきだしました。",
                    "translation": "Utagawa Hiroshige's 'Fifty-three Stations of the Tokaido' richly and emotionally depicted travelers making their way through rain, wind, and snowscapes."
                },
                {
                    "target": "輸入顔料であるプルシアンブルー（ベロ藍）の導入により、鮮やかで深みのある空や海の階調表現が可能になりました。",
                    "reading": "ゆにゅうがんりょうである プルシアンブルー（ベロあい）の どうにゅうにより、あざやかで ふかみのある そらや うみの かいちょうひょうげんが かのうになりました。",
                    "translation": "Through the introduction of the imported pigment Prussian blue (Bero-ai), vivid and deep gradation expressions of skies and seas became possible."
                },
                {
                    "target": "大胆なクローズアップと俯瞰視点を組み合わせた北斎の構図法は、近代視覚文化の先駆けとなりました。",
                    "reading": "だいたんな クローズアップと ふかんしてんを くみあわせた ほくさいの こうずほうは、きんだいしかくぶんかの さきがけと なりました。",
                    "translation": "Hokusai's compositional method combining bold close-ups with bird's-eye viewpoints served as a herald of modern visual culture."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第4部）における文脈上最も正確な専門的日本語記述を選択してください（問23.4.1）。",
                    "options": [
                        "桂離宮の雁行配置と洗練された数寄屋造りの空間構成は、ブルーノ・タウトやヴァルター・グロピウスら近代モダニズム建築の巨匠たちに絶大な衝撃を与えました。",
                        "学術的定義を誤った選択肢（23.4.1）",
                        "歴史的事実と合致しない誤文（23.4.2）",
                        "論理的一貫性を欠く記述（23.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】桂離宮の数寄屋造り、葛飾北斎・歌川広重の浮世絵版画、ジャポニスムの世界的影響（第4部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第4部）の高度な対話・批評として最も適切な文を選択してください（演習23.4）。",
                    "options": [
                        "葛飾北斎の『冨嶽三十六景・神奈川沖浪裏』は、躍動する巨大な波の造形美と静止する富士山の対比によって、世界の美術史における不朽の金字塔を打ち立てました。",
                        "批評的論旨が破綻している文（23.4.x）",
                        "助詞や構文の接続が不自然な誤文（23.4.y）",
                        "不適切な語彙選択を含む誤答（23.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u23-l4）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "歌川広重の風景版画に見られる大胆な俯瞰構図と雨の描写は、フィンセント・ファン・ゴッホによって油彩画として熱心に模写されました。",
                        "概念の誤用による不当な解釈（23.4.a）",
                        "主述の不整合を含む不完全文（23.4.b）",
                        "文脈にそぐわない的外れな文（23.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第4部）の学習到達度を判定する学術設問です。完全な文を選択してください（試23-4）。",
                    "options": [
                        "日本の浮世絵は、遠近法の既成概念を覆す平面性と鮮烈な輪郭線によって、19世紀後半のヨーロッパにおけるジャポニスムの潮流を牽引しました。",
                        "専門的根拠の欠落した誤文（23.4.m）",
                        "文法的語尾接続の誤謬（23.4.n）",
                        "文意の不明瞭な不適格文（23.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u23-l4）の主要専門用語を入力してください（「桂離宮の」）：",
                    "acceptedAnswers": [
                        "桂離宮の",
                        "桂離宮の雁行"
                    ],
                    "explanation": "正解の学術用語は「桂離宮の」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u23-l5": {
        "id": "ja-u23-l5",
        "subject": "japanese",
        "unit": 23,
        "lessonNumber": 5,
        "title": "浮世絵が印象派・ジャポニスムに与えた世界的影響",
        "level": "B2",
        "objective": "19世紀後半の欧州におけるジャポニスム（Japonisme）熱狂、モネ・ゴッホ・ドガら印象派・ポスト印象派への決定的インスピレーション。",
        "presentation": {
            "explanation": "19世紀後半のヨーロッパ美術界を席巻した「ジャポニスム（Japonisme）」と浮世絵の国際的伝播を学びます。\n\n【ジャポニスムの衝撃と要因】\n１．1867年パリ万国博覧会：日本の工芸品や浮世絵が出品され、欧州の芸術家たちに強烈な美的情動をもたらしました。\n２．脱・遠近法の自由：ルネサンス以来の明暗法（キアロスクーロ）や一点透視図法にとらわれない、大胆な平面性、輪郭線、斜め構図、鮮やかな色彩。\n３．巨匠たちへの直接的影響：\n　・フィンセント・ファン・ゴッホ：広重の版画を油彩で模写（『名所江戸百景・亀戸梅屋舗』）。\n　・クロード・モネ：自宅（ジヴェルニー）に日本の太鼓橋と睡蓮の池を造園し、数百枚の浮世絵を収集。\n　・エドガー・ドガ：北斎漫画の人体ポーズに触発されて踊り子を描写。",
            "examples": [
                {
                    "target": "十九世紀後半のヨーロッパで沸き起こったジャポニスムは、西洋近代絵画の文脈を根本から変革しました。",
                    "reading": "じゅうきゅうせいきこうはんの ヨーロッパで わきおこった ジャポニスムは、せいようきんだいかいがの ぶんみゃくを こんぽんから へんかくしました。",
                    "translation": "Japonisme, which erupted in late-nineteenth-century Europe, fundamentally revolutionized the context of Western modern painting."
                },
                {
                    "target": "ゴッホは広重の木版画を油絵で熱心に模写し、浮世絵の鮮烈な色彩と平面的構図を自己の画風へ昇華させました。",
                    "reading": "ゴッホは ひろしげの もくはんがを あぶらえで ねっしんに もしゃし、うきよえの せんれつな しきさいと へいめんてきこうずを じこの がふうへ しょうかさせました。",
                    "translation": "Van Gogh eagerly copied Hiroshige's woodblock prints in oil painting, sublimating ukiyo-e's vivid colors and flat composition into his own style."
                },
                {
                    "target": "モネはジヴェルニーの自邸に日本風の太鼓橋を架け、睡蓮の池を生涯にわたって描き続けました。",
                    "reading": "モネは ジヴェルニーの じていに にほんふうの たいこばしを かけ、すいれんの いけを しょうがいに わたって えがきつづけました。",
                    "translation": "Monet built a Japanese-style arched bridge at his residence in Giverny and continued painting the water lily pond throughout his life."
                },
                {
                    "target": "浮世絵の大胆なトリミングと陰影を排した明快な輪郭線は、アール・ヌーヴォーのデザイン運動にも多大な影響を及ぼしました。",
                    "reading": "うきよえの だいたんな トリミングと いんえいを はいした めいかいな りんかくせんは、アール・ヌーヴォーの デザインうんどうにも ただいな えいきょうを およぼしました。",
                    "translation": "Ukiyo-e's bold cropping and distinct contour lines devoid of shading exerted massive influence on the Art Nouveau design movement as well."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第5部）における文脈上最も正確な専門的日本語記述を選択してください（問23.5.1）。",
                    "options": [
                        "桂離宮の雁行配置と洗練された数寄屋造りの空間構成は、ブルーノ・タウトやヴァルター・グロピウスら近代モダニズム建築の巨匠たちに絶大な衝撃を与えました。",
                        "学術的定義を誤った選択肢（23.5.1）",
                        "歴史的事実と合致しない誤文（23.5.2）",
                        "論理的一貫性を欠く記述（23.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】桂離宮の数寄屋造り、葛飾北斎・歌川広重の浮世絵版画、ジャポニスムの世界的影響（第5部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第5部）の高度な対話・批評として最も適切な文を選択してください（演習23.5）。",
                    "options": [
                        "葛飾北斎の『冨嶽三十六景・神奈川沖浪裏』は、躍動する巨大な波の造形美と静止する富士山の対比によって、世界の美術史における不朽の金字塔を打ち立てました。",
                        "批評的論旨が破綻している文（23.5.x）",
                        "助詞や構文の接続が不自然な誤文（23.5.y）",
                        "不適切な語彙選択を含む誤答（23.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u23-l5）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "歌川広重の風景版画に見られる大胆な俯瞰構図と雨の描写は、フィンセント・ファン・ゴッホによって油彩画として熱心に模写されました。",
                        "概念の誤用による不当な解釈（23.5.a）",
                        "主述の不整合を含む不完全文（23.5.b）",
                        "文脈にそぐわない的外れな文（23.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第5部）の学習到達度を判定する学術設問です。完全な文を選択してください（試23-5）。",
                    "options": [
                        "日本の浮世絵は、遠近法の既成概念を覆す平面性と鮮烈な輪郭線によって、19世紀後半のヨーロッパにおけるジャポニスムの潮流を牽引しました。",
                        "専門的根拠の欠落した誤文（23.5.m）",
                        "文法的語尾接続の誤謬（23.5.n）",
                        "文意の不明瞭な不適格文（23.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u23-l5）の主要専門用語を入力してください（「桂離宮の」）：",
                    "acceptedAnswers": [
                        "桂離宮の",
                        "桂離宮の雁行"
                    ],
                    "explanation": "正解の学術用語は「桂離宮の」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u24-l1": {
        "id": "ja-u24-l1",
        "subject": "japanese",
        "unit": 24,
        "lessonNumber": 1,
        "title": "宮廷音楽「雅楽」の歴史と三管・両絃・三鼓の楽器体系",
        "level": "B2",
        "objective": "世界最古の現存合奏宮廷音楽「雅楽（ががく）」の歴史（千二百年）、管絃・舞楽、三管（笙・篳篥・龍笛）・両絃・三鼓の編成。",
        "presentation": {
            "explanation": "古代アジア大陸から伝来し平安宮廷で洗練された世界最古のオーケストラ「雅楽（ががく）」を学びます。\n\n【雅楽の楽器編成体系】\n１．三管（気鳴楽器：主旋律と和音）：\n　・笙（しょう）：17本の竹管。天から差し込む光を表す神秘的な多音クラスター和音（合竹：あいたけ）。\n　・篳篥（ひちりき）：竹製の縦笛に葦の舌。大地に蠢く人間の情念を表す太く豊かな主旋律（塩梅：えんばいという微分音装飾）。\n　・龍笛（りゅうてき）：横笛。天と地の間を縦横無尽に飛翔する龍の鳴き声を表す旋律。\n２．両絃（絃楽器：リズムの骨格）：\n　・琵琶（楽琵琶）／箏（楽箏）\n３．三鼓（打楽器：拍の標示）：\n　・鞨鼓（かっこ：指揮者役）／太鼓（たいこ）／鉦鼓（しょうこ：金属鉦）。",
            "examples": [
                {
                    "target": "雅楽の三管において、笙は天の光、篳篥は地の声、龍笛は空を舞う龍の咆哮を象徴しています。",
                    "reading": "ががくの さんかんに おいて、しょうは てんの ひかり、ひちりきは ちの こえ、りゅうてきは そらを まう りゅうの ほうこうを しょうちょうしています。",
                    "translation": "In the three pipes of Gagaku, the Sho symbolizes heavenly light, the Hichiriki the voice of the earth, and the Ryuteki the roar of a dragon soaring the sky."
                },
                {
                    "target": "千二百年以上もの間、皇室の儀式や主要神社仏閣で途絶えることなく伝承されてきた世界最古の宮廷合奏音楽です。",
                    "reading": "せんにひゃくねんいじょうもの あいだ、こうしつの ぎしきや しゅようじんじゃぶっかくで とだえることなく でんしょうされてきた せかいさいこの きゅうていがっそうおんがくです。",
                    "translation": "It is the world's oldest court ensemble music, transmitted without interruption for over 1,200 years in imperial ceremonies and major shrines and temples."
                },
                {
                    "target": "篳篥の「塩梅（あんばい）」と呼ばれるポルタメント奏法は、微小なピッチの変化によって深い情感を創出します。",
                    "reading": "ひちりきの「あんばい」と よばれる ポルタメントそうほうは、びしょうな ピッチの へんかによって ふかい じょうかんを そうしゅつします。",
                    "translation": "The portamento technique of the Hichiriki called 'anbai' generates deep emotion through microtonal pitch variations."
                },
                {
                    "target": "雅楽は管弦の演奏のみを行う「管絃」と、華麗な装束を着て舞を伴う「舞楽」に大別されます。",
                    "reading": "ががくは かんげんの えんそうのみを おこなう「かんげん」と、かれいな しょうぞくを きて まいを ともなう「ぶがく」に たいべつされます。",
                    "translation": "Gagaku is broadly divided into 'Kangen', which performs instrumental music alone, and 'Bugaku', which accompanies dance in splendid costumes."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第1部）における文脈上最も正確な専門的日本語記述を選択してください（問24.1.1）。",
                    "options": [
                        "宮内庁楽部に伝承される雅楽は、笙の天上の光、篳篥の地上の声、龍笛の天空を翔ける調べが織りなす世界最古の合奏音楽です。",
                        "学術的定義を誤った選択肢（24.1.1）",
                        "歴史的事実と合致しない誤文（24.1.2）",
                        "論理的一貫性を欠く記述（24.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】世界最古の宮廷音楽「雅楽」の楽器体系（笙・篳篥・龍笛）、間（ま）の美学、武満徹・坂本龍一の革新（第1部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第1部）の高度な対話・批評として最も適切な文を選択してください（演習24.1）。",
                    "options": [
                        "武満徹は『ノヴェンバー・ステップス』において、琵琶の激しい打弦音と尺八の息のノイズを西洋のオーケストラと対峙させ、東西の音楽空間を劇的に融合させました。",
                        "批評的論旨が破綻している文（24.1.x）",
                        "助詞や構文の接続が不自然な誤文（24.1.y）",
                        "不適切な語彙選択を含む誤答（24.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u24-l1）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "坂本龍一はシンセサイザーを用いた先進的な電子音楽からオーケストラ映画音楽に至るまで、国境とジャンルを超越した革新的な音響世界を構築しました。",
                        "概念の誤用による不当な解釈（24.1.a）",
                        "主述の不整合を含む不完全文（24.1.b）",
                        "文脈にそぐわない的外れな文（24.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第1部）の学習到達度を判定する学術設問です。完全な文を選択してください（試24-1）。",
                    "options": [
                        "日本の伝統音楽における「間」とは、単なる休符としての空白ではなく、音と音の間に満ちる濃密な緊張感と余情そのものを意味します。",
                        "専門的根拠の欠落した誤文（24.1.m）",
                        "文法的語尾接続の誤謬（24.1.n）",
                        "文意の不明瞭な不適格文（24.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u24-l1）の主要専門用語を入力してください（「宮内庁楽」）：",
                    "acceptedAnswers": [
                        "宮内庁楽",
                        "宮内庁楽部に"
                    ],
                    "explanation": "正解の学術用語は「宮内庁楽」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u24-l2": {
        "id": "ja-u24-l2",
        "subject": "japanese",
        "unit": 24,
        "lessonNumber": 2,
        "title": "日本音楽の時間観：「間（ま）」の美学と「序破急」の形式美",
        "level": "B2",
        "objective": "日本音楽の根源的時間意識「間（ま）」、無音の空間的充実、楽曲構造理論「序・破・急（じょはきゅう）」の美学論。",
        "presentation": {
            "explanation": "西洋音楽の均等な拍子（メトロノーム的時間）と根本的に異なる日本の音響時間論を学びます。\n\n【「間（ま）」の美学的本質】\n・「間」とは単なる無音の空白や休符ではなく、先行する音の余韻と、次に来たるべき音の予兆が緊張感をもって充満する「沈黙の充実空間」です。\n・演奏者同士の呼吸（息の合い）によって伸縮する伸縮自在の時間。\n\n【「序・破・急（じょはきゅう）」の構成論】\n・雅楽、能楽、連歌、武道に共通する展開構造：\n　１．序（じょ）：導入部。拍子にとらわれない静かでゆったりとした導入。\n　２．破（は）：展開部。明確なテンポが現れ、旋律が洗練されて動き出す。\n　３．急（きゅう）：結尾部。テンポが急速に加速し、一気にクライマックスを迎えて終息する。",
            "examples": [
                {
                    "target": "日本の伝統音楽における「間」とは、音と音の間に漂う緊張感に満ちた沈黙の空間美学です。",
                    "reading": "にほんの でんとうおんがくにおける「ま」とは、おとと おとの あいだに ただよう きんちょうかんに みちた ちんもくの くうかんびがくです。",
                    "translation": "'Ma' in traditional Japanese music is a spatial aesthetic of silence filled with palpable tension hovering between sounds."
                },
                {
                    "target": "「序破急」の構成美は、静謐な序奏から劇的な展開を経て急速な終息へと至る有機的な時間芸術の極致です。",
                    "reading": "「じょはきゅう」の こうせいびは、せいひつな じょそうから げきてきな てんかいを へて きゅうそくな しゅうそくへと いたる ゆうきてきな じかんげいじゅつの きょくちです。",
                    "translation": "The compositional beauty of 'Jo-Ha-Kyu' is the apex of organic temporal art, leading from a serene introduction through dramatic development to rapid conclusion."
                },
                {
                    "target": "メトロノームのような機械的拍子ではなく、奏者の呼吸と身体感覚の一致によって「生きた時間」が生み出されます。",
                    "reading": "メトロノームのような きかいてきひょうしではなく、そうしゃの こきゅうと しんたいかんかくの いっちによって「いきた じかん」が うみだされます。",
                    "translation": "Rather than mechanical beats like a metronome, 'living time' is generated through the congruence of performers' breathing and bodily senses."
                },
                {
                    "target": "能舞台における一拍の沈黙は、雄弁な言葉以上に観客の想像力を刺激し深奥な幽玄世界を現出させます。",
                    "reading": "のうぶたいにおける いっぱくの ちんもくは、ゆうべんな ことばいじょうに かんきゃくの そうぞうりょくを しげきし しんおうな ゆうげんせかいを げんしゅつさせます。",
                    "translation": "A single beat of silence on the Noh stage stimulates the audience's imagination more than eloquent words, manifesting a profound yugen world."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第2部）における文脈上最も正確な専門的日本語記述を選択してください（問24.2.1）。",
                    "options": [
                        "宮内庁楽部に伝承される雅楽は、笙の天上の光、篳篥の地上の声、龍笛の天空を翔ける調べが織りなす世界最古の合奏音楽です。",
                        "学術的定義を誤った選択肢（24.2.1）",
                        "歴史的事実と合致しない誤文（24.2.2）",
                        "論理的一貫性を欠く記述（24.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】世界最古の宮廷音楽「雅楽」の楽器体系（笙・篳篥・龍笛）、間（ま）の美学、武満徹・坂本龍一の革新（第2部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第2部）の高度な対話・批評として最も適切な文を選択してください（演習24.2）。",
                    "options": [
                        "武満徹は『ノヴェンバー・ステップス』において、琵琶の激しい打弦音と尺八の息のノイズを西洋のオーケストラと対峙させ、東西の音楽空間を劇的に融合させました。",
                        "批評的論旨が破綻している文（24.2.x）",
                        "助詞や構文の接続が不自然な誤文（24.2.y）",
                        "不適切な語彙選択を含む誤答（24.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u24-l2）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "坂本龍一はシンセサイザーを用いた先進的な電子音楽からオーケストラ映画音楽に至るまで、国境とジャンルを超越した革新的な音響世界を構築しました。",
                        "概念の誤用による不当な解釈（24.2.a）",
                        "主述の不整合を含む不完全文（24.2.b）",
                        "文脈にそぐわない的外れな文（24.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第2部）の学習到達度を判定する学術設問です。完全な文を選択してください（試24-2）。",
                    "options": [
                        "日本の伝統音楽における「間」とは、単なる休符としての空白ではなく、音と音の間に満ちる濃密な緊張感と余情そのものを意味します。",
                        "専門的根拠の欠落した誤文（24.2.m）",
                        "文法的語尾接続の誤謬（24.2.n）",
                        "文意の不明瞭な不適格文（24.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u24-l2）の主要専門用語を入力してください（「宮内庁楽」）：",
                    "acceptedAnswers": [
                        "宮内庁楽",
                        "宮内庁楽部に"
                    ],
                    "explanation": "正解の学術用語は「宮内庁楽」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u24-l3": {
        "id": "ja-u24-l3",
        "subject": "japanese",
        "unit": 24,
        "lessonNumber": 3,
        "title": "邦楽器（箏・尺八・三味線）の音響特質と雑音の受容",
        "level": "B2",
        "objective": "三味線の「さわり」、尺八の「竹の息音（ムラ息）」、箏の押し手・引き色に見る自然音・雑音性の積極的音楽化。",
        "presentation": {
            "explanation": "西洋近代音響学が排除しようとした「ノイズ（雑音・自然音）」を高度な芸術表現として包摂した邦楽器の音響論を学びます。\n\n【主要邦楽器の音響特質】\n１．三味線（しゃみせん）の「さわり（触り）」：\n　・一の糸の根元に意図的に微小な段差を設け、撥（ばち）で弾いた際に弦が棹に触れて「ビーン」という独特の倍音ノイズ（シタールのジャワリと同系統）を発生させる機構。\n２．尺八（しゃくはち）の「息音」と「ムラ息」：\n　・竹の節をそのまま活かした無孔吹口。竹を通り抜ける風の音、嵐のようなノイズ（ムラ息）によって宇宙の風雨を表現。\n３．箏（こと・そう）の微分音技法：\n　・左手で弦を押す「押し手（おして）」により、半音以下の微分音や繊細なポルタメントを自在に表現。",
            "examples": [
                {
                    "target": "三味線の「さわり」が生み出す独特の倍音ノイズは、純音にはない哀愁と陰影を楽曲に付与します。",
                    "reading": "しゃみせんの「さわり」が うみだす どくとくの ばいおんノイズは、じゅんおんには ない あいしゅうと いんえいを がっきょくに ふよします。",
                    "translation": "The unique harmonic overtone noise generated by the Shamisen's 'sawari' imparts melancholy and shading to pieces that pure tones cannot achieve."
                },
                {
                    "target": "尺八の「ムラ息」奏法は、激しい息のノイズによって吹き荒れる風や自然の猛威を抽象的に音響化します。",
                    "reading": "しゃくはちの「むらいき」そうほうは、はげしい いきの ノイズによって ふきあれる かぜや しぜんの もういを ちゅうしょうてきに おんきょうかします。",
                    "translation": "The Shakuhachi's 'mura-iki' technique abstractly acoustifies howling winds and nature's fury through intense breath noise."
                },
                {
                    "target": "箏の左手による「押し手」は、微妙な音程の揺らぎを作り出し、日本人の情念の微細な機微を表現します。",
                    "reading": "ことの ひだりてに よる「おして」は、びみょうな おんていの ゆらぎを つくりだし、にほんじんの じょうねんの びさいな きびを ひょうげんします。",
                    "translation": "The left-hand 'oshite' technique on the Koto creates subtle pitch fluctuations, expressing delicate nuances of Japanese emotionality."
                },
                {
                    "target": "自然界の風の音や雨音を排除すべき雑音とみなさず、そのまま音楽の美として抱きしめる感性があります。",
                    "reading": "しぜんかいの かぜの おとや あめおとを はいじょすべき ざつおんと みなざず、そのまま おんがくの びとして だきしめる かんせいが あります。",
                    "translation": "There is a sensibility that does not regard natural wind or rain sounds as noise to be excluded, but embraces them directly as musical beauty."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第3部）における文脈上最も正確な専門的日本語記述を選択してください（問24.3.1）。",
                    "options": [
                        "宮内庁楽部に伝承される雅楽は、笙の天上の光、篳篥の地上の声、龍笛の天空を翔ける調べが織りなす世界最古の合奏音楽です。",
                        "学術的定義を誤った選択肢（24.3.1）",
                        "歴史的事実と合致しない誤文（24.3.2）",
                        "論理的一貫性を欠く記述（24.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】世界最古の宮廷音楽「雅楽」の楽器体系（笙・篳篥・龍笛）、間（ま）の美学、武満徹・坂本龍一の革新（第3部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第3部）の高度な対話・批評として最も適切な文を選択してください（演習24.3）。",
                    "options": [
                        "武満徹は『ノヴェンバー・ステップス』において、琵琶の激しい打弦音と尺八の息のノイズを西洋のオーケストラと対峙させ、東西の音楽空間を劇的に融合させました。",
                        "批評的論旨が破綻している文（24.3.x）",
                        "助詞や構文の接続が不自然な誤文（24.3.y）",
                        "不適切な語彙選択を含む誤答（24.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u24-l3）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "坂本龍一はシンセサイザーを用いた先進的な電子音楽からオーケストラ映画音楽に至るまで、国境とジャンルを超越した革新的な音響世界を構築しました。",
                        "概念の誤用による不当な解釈（24.3.a）",
                        "主述の不整合を含む不完全文（24.3.b）",
                        "文脈にそぐわない的外れな文（24.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第3部）の学習到達度を判定する学術設問です。完全な文を選択してください（試24-3）。",
                    "options": [
                        "日本の伝統音楽における「間」とは、単なる休符としての空白ではなく、音と音の間に満ちる濃密な緊張感と余情そのものを意味します。",
                        "専門的根拠の欠落した誤文（24.3.m）",
                        "文法的語尾接続の誤謬（24.3.n）",
                        "文意の不明瞭な不適格文（24.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u24-l3）の主要専門用語を入力してください（「宮内庁楽」）：",
                    "acceptedAnswers": [
                        "宮内庁楽",
                        "宮内庁楽部に"
                    ],
                    "explanation": "正解の学術用語は「宮内庁楽」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u24-l4": {
        "id": "ja-u24-l4",
        "subject": "japanese",
        "unit": 24,
        "lessonNumber": 4,
        "title": "武満徹『ノヴェンバー・ステップス』：東西音楽の対峙と融合",
        "level": "B2",
        "objective": "武満徹（1930-1996）の金字塔『ノヴェンバー・ステップス』（1967年ニューヨーク・フィル委嘱初演）、琵琶・尺八と管弦楽の劇的対峙。",
        "presentation": {
            "explanation": "20世紀世界的現代音楽の巨匠・武満徹（たけみつとおる）の音楽哲学と記念碑的作品を学びます。\n\n【『ノヴェンバー・ステップス』（1967年）の衝撃】\n・委嘱：レナード・バーンスタイン率いるニューヨーク・フィルハーモニック創立125周年記念。\n・独奏楽器：鶴田錦史（薩摩琵琶）と横山勝也（尺八）。\n・対峙の思想：西洋オーケストラと日本の伝統楽器を安易に「調和・妥協」させるのではなく、両者の異質な音響宇宙を極限まで鋭く対峙（Confrontation）させ、その火花の中から未曾有の音響空間を現出させました。\n・「音の川」「沈黙と音の等価性」：一音の中に宇宙を聴く独自の武満トーン。",
            "examples": [
                {
                    "target": "武満徹の『ノヴェンバー・ステップス』は、西洋オーケストラと邦楽器の安易な妥協を排し、両者の異質な響きを鋭く対峙させました。",
                    "reading": "たけみつとおるの『ノヴェンバー・ステップス』は、せいようオーケストラと ほうがっきの あんいな だきょうを はいし、りょうしゃの いしつな ひびきを するどく たいじさせました。",
                    "translation": "Toru Takemitsu's 'November Steps' rejected facile compromises between Western orchestra and Japanese instruments, sharply confronting their disparate sonic universes."
                },
                {
                    "target": "琵琶の激しい撥音と尺八の咆哮のような息音は、カーネギー・ホールの聴衆と世界の一流作曲家たちを驚嘆させました。",
                    "reading": "びわの はげしい ばちおんと しゃくはちの ほうこうのような いきおんは、カーネギー・ホールの ちょうしゅうと せかいの いちりゅうさっきょくかたちを きょうたんさせました。",
                    "translation": "The fierce plectrum strikes of the Biwa and roar-like breath sounds of the Shakuhachi astounded Carnegie Hall audiences and leading world composers."
                },
                {
                    "target": "武満は一音の持つ無限の音色と持続に全神経を傾け、音楽を「沈黙の海に浮かぶ彫刻」として捉えました。",
                    "reading": "たけみつは いちおんの もつ むげんの ねいろと じぞくに ぜんしんけいを かたむけ、おんがくを「ちんもくの うみに うかぶ ちょうこく」として とらえました。",
                    "translation": "Takemitsu devoted his whole nerve to the infinite timbre and duration of a single sound, perceiving music as a 'sculpture floating on an ocean of silence'."
                },
                {
                    "target": "東西の音楽文化の境界線に立ち、独自の音響庭園を築き上げた彼の作品は、今なお世界各地で演奏され続けています。",
                    "reading": "とうざいの おんがくぶんかの きょうかいせんに たち、どくじの おんきょうていえんを きずきあげた かれの さくひんは、いまなお せかいかくちで えんそうされつづけています。",
                    "translation": "Standing on the borderline of Eastern and Western musical cultures and building a unique acoustic garden, his works continue to be performed worldwide today."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第4部）における文脈上最も正確な専門的日本語記述を選択してください（問24.4.1）。",
                    "options": [
                        "宮内庁楽部に伝承される雅楽は、笙の天上の光、篳篥の地上の声、龍笛の天空を翔ける調べが織りなす世界最古の合奏音楽です。",
                        "学術的定義を誤った選択肢（24.4.1）",
                        "歴史的事実と合致しない誤文（24.4.2）",
                        "論理的一貫性を欠く記述（24.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】世界最古の宮廷音楽「雅楽」の楽器体系（笙・篳篥・龍笛）、間（ま）の美学、武満徹・坂本龍一の革新（第4部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第4部）の高度な対話・批評として最も適切な文を選択してください（演習24.4）。",
                    "options": [
                        "武満徹は『ノヴェンバー・ステップス』において、琵琶の激しい打弦音と尺八の息のノイズを西洋のオーケストラと対峙させ、東西の音楽空間を劇的に融合させました。",
                        "批評的論旨が破綻している文（24.4.x）",
                        "助詞や構文の接続が不自然な誤文（24.4.y）",
                        "不適切な語彙選択を含む誤答（24.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u24-l4）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "坂本龍一はシンセサイザーを用いた先進的な電子音楽からオーケストラ映画音楽に至るまで、国境とジャンルを超越した革新的な音響世界を構築しました。",
                        "概念の誤用による不当な解釈（24.4.a）",
                        "主述の不整合を含む不完全文（24.4.b）",
                        "文脈にそぐわない的外れな文（24.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第4部）の学習到達度を判定する学術設問です。完全な文を選択してください（試24-4）。",
                    "options": [
                        "日本の伝統音楽における「間」とは、単なる休符としての空白ではなく、音と音の間に満ちる濃密な緊張感と余情そのものを意味します。",
                        "専門的根拠の欠落した誤文（24.4.m）",
                        "文法的語尾接続の誤謬（24.4.n）",
                        "文意の不明瞭な不適格文（24.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u24-l4）の主要専門用語を入力してください（「宮内庁楽」）：",
                    "acceptedAnswers": [
                        "宮内庁楽",
                        "宮内庁楽部に"
                    ],
                    "explanation": "正解の学術用語は「宮内庁楽」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u24-l5": {
        "id": "ja-u24-l5",
        "subject": "japanese",
        "unit": 24,
        "lessonNumber": 5,
        "title": "坂本龍一の音楽世界：伝統音響と電子前衛音楽の架橋",
        "level": "B2",
        "objective": "坂本龍一（1952-2023）の足跡（YMO・映画音楽・環境音響作品『async』）、アヴァンギャルドと大衆性、自然音との共振。",
        "presentation": {
            "explanation": "世界的音楽家・坂本龍一（さかもとりゅういち）の多面的な音楽探求と環境音響の思想を学びます。\n\n【坂本龍一の音楽的軌跡】\n１．イエロー・マジック・オーケストラ（YMO：1978年結成）：最先端のシンセサイザーとコンピューターを駆使し、オリエンタリズムを逆手に取ったエレクトロ・ポップで世界を席巻。\n２．映画音楽の金字塔：『戦場のメリークリスマス』（1983年）、『ラストエンペラー』（1987年・米アカデミー賞作曲賞受賞）。\n３．晩年の環境音響の探求（アルバム『async』2017年、『12』2023年）：\n　・楽器の音と、雨音、足音、森のざわめき、氷河の融解音などのフィールドレコーディングを等価に配置し、人間中心主義を超えた音響宇宙を構築。",
            "examples": [
                {
                    "target": "坂本龍一はYMOの電子音楽からアカデミー賞映画音楽、晩年の環境音響作品に至るまで、常に既存の枠組みを刷新し続けました。",
                    "reading": "さかもとりゅういちは YMOの でんしおんがくから アカデミーしょう えいが おんがく、ばんねんの かんきょうおんきょうさくひんに いたるまで、つねに きそんの わくぐみを さっしんしつづけました。",
                    "translation": "Ryuichi Sakamoto constantly renewed existing frameworks, from YMO's electronic music and Academy Award-winning film scores to late ambient sound works."
                },
                {
                    "target": "アルバム『async』において、彼は雨の滴る音や木々の擦れ合う環境音とピアノの調べを等価に織り交ぜました。",
                    "reading": "アルバム『async』において、かれは あめの したたる おとや きぎの すれあう かんきょうおんと ピアノの しらべを とうかに おりまぜました。",
                    "translation": "In the album 'async', he equally intertwined environmental sounds of dripping rain and rustling trees with piano melodies."
                },
                {
                    "target": "『戦場のメリークリスマス』のメインテーマは、ガムラン調の鐘の音とペンタトニック旋律が融合した不朽の名曲です。",
                    "reading": "『せんじょうの メリークリスマス』の メインテーマは、ガムランちょうの かねの おとと ペンタトニックせんりつが ゆうごうした ふきゅうの めいきょくです。",
                    "translation": "The main theme of 'Merry Christmas, Mr. Lawrence' is an immortal masterpiece fusing gamelan-like bell sounds with pentatonic melody."
                },
                {
                    "target": "「音を所有するのではなく、世界に遍在する音に耳を澄ます」という彼の態度は、現代音楽の倫理的転回を示しています。",
                    "reading": "「おとを しょゆうするのではなく、せかいに へんざいする おとに みみを すます」という かれの たいどは、げんだいおんがくの りんりてきてんかいを しめしています。",
                    "translation": "His attitude of 'not possessing sounds, but listening attentively to sounds omnipresent in the world' indicates an ethical turn in contemporary music."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第5部）における文脈上最も正確な専門的日本語記述を選択してください（問24.5.1）。",
                    "options": [
                        "宮内庁楽部に伝承される雅楽は、笙の天上の光、篳篥の地上の声、龍笛の天空を翔ける調べが織りなす世界最古の合奏音楽です。",
                        "学術的定義を誤った選択肢（24.5.1）",
                        "歴史的事実と合致しない誤文（24.5.2）",
                        "論理的一貫性を欠く記述（24.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】世界最古の宮廷音楽「雅楽」の楽器体系（笙・篳篥・龍笛）、間（ま）の美学、武満徹・坂本龍一の革新（第5部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第5部）の高度な対話・批評として最も適切な文を選択してください（演習24.5）。",
                    "options": [
                        "武満徹は『ノヴェンバー・ステップス』において、琵琶の激しい打弦音と尺八の息のノイズを西洋のオーケストラと対峙させ、東西の音楽空間を劇的に融合させました。",
                        "批評的論旨が破綻している文（24.5.x）",
                        "助詞や構文の接続が不自然な誤文（24.5.y）",
                        "不適切な語彙選択を含む誤答（24.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u24-l5）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "坂本龍一はシンセサイザーを用いた先進的な電子音楽からオーケストラ映画音楽に至るまで、国境とジャンルを超越した革新的な音響世界を構築しました。",
                        "概念の誤用による不当な解釈（24.5.a）",
                        "主述の不整合を含む不完全文（24.5.b）",
                        "文脈にそぐわない的外れな文（24.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第5部）の学習到達度を判定する学術設問です。完全な文を選択してください（試24-5）。",
                    "options": [
                        "日本の伝統音楽における「間」とは、単なる休符としての空白ではなく、音と音の間に満ちる濃密な緊張感と余情そのものを意味します。",
                        "専門的根拠の欠落した誤文（24.5.m）",
                        "文法的語尾接続の誤謬（24.5.n）",
                        "文意の不明瞭な不適格文（24.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u24-l5）の主要専門用語を入力してください（「宮内庁楽」）：",
                    "acceptedAnswers": [
                        "宮内庁楽",
                        "宮内庁楽部に"
                    ],
                    "explanation": "正解の学術用語は「宮内庁楽」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u25-l1": {
        "id": "ja-u25-l1",
        "subject": "japanese",
        "unit": 25,
        "lessonNumber": 1,
        "title": "黒澤明『羅生門』（1950年）：主観的記憶の多面性と真実の相対主義",
        "level": "C1",
        "objective": "黒澤明のヴェネツィア金獅子賞受賞作『羅生門』、芥川龍之介文学の映像化、「羅生門効果（Rashomon Effect）」の映像記号論。",
        "presentation": {
            "explanation": "日本映画を世界のアートシーンの頂点へと押し上げた黒澤明（くろさわあきら：1910-1998）の『羅生門』を学びます。\n\n【『羅生門』の映画史的・哲学的金字塔】\n１．1951年ヴェネツィア国際映画祭最高賞（金獅子賞）および米アカデミー賞名誉賞受賞。\n２．多角的証言構造（Rashomon Effect）：\n　・平安時代末期の荒廃した羅生門の下で語られる殺人事件。盗賊（多襄丸）、侍の妻（真砂）、巫女を通じて語る死んだ侍、そして目撃者の杣売り。同一の事件でありながら、各自の自尊心と利害によって「真実」が全く異なる物語として語られる人間の根源的エゴイズムの暴露。\n３．映像技法の革新：\n　・映画史上初めて「カメラを直接太陽に向けて逆光で撮影」し、鬱蒼とした木漏れ日の中に人間の迷妄を視覚化。",
            "examples": [
                {
                    "target": "黒澤明監督の『羅生門』は、同一の事件に対する四者の主観的証言の食い違いを通じて「真実の相対性」を鋭く抉り出しました。",
                    "reading": "くろさわあきらかんとくの『らしょうもん』は、どういつの じけんにたいする よんしゃの しゅかんてきしょうげんの くいちがいを つうじて「しんじつの そうたいせい」を するどく えぐりだしました。",
                    "translation": "Director Akira Kurosawa's 'Rashomon' sharply gouged out the 'relativity of truth' through discrepancies in the subjective testimonies of four individuals regarding the same incident."
                },
                {
                    "target": "太陽を直接カメラのレンズで捉えた斬新な木漏れ日の撮影手法は、当時の映画界の常識を覆しました。",
                    "reading": "たいようを ちょくせつ カメラの レンズで とらえた ざんしんな こもれびの さつえいしゅほうは、とうじの えいがかいの じょうしきを くつがえしました。",
                    "translation": "The novel filming technique of capturing the sun directly through the camera lens in dappled tree light overturned the common sense of the film industry at the time."
                },
                {
                    "target": "「羅生門効果」という術語は、現在でも心理学・法学・メディア論において広く引用される概念となっています。",
                    "reading": "「らしょうもんこうか」という じゅつごは、げんざいでも しんりがく・ほうがく・メディアろんに おいて ひろく いんようされる がいねんと なっています。",
                    "translation": "The technical term 'Rashomon Effect' has become a concept widely cited even today in psychology, jurisprudence, and media studies."
                },
                {
                    "target": "雨煙る羅生門の巨大な門のセットは、荒廃した平安末期の社会不安と人間の倫理的崩壊を象徴しています。",
                    "reading": "あめけむる らしょうもんの きょだいな もんの セットは、こうはいした へいあんまっきの しゃかいふあんと にんげんの りんりてきほうかいを しょうちょうしています。",
                    "translation": "The giant gate set of rain-swept Rashomon symbolizes the social anxiety and human ethical collapse of the desolate late Heian period."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本映画の黄金期・黒澤明と小津安二郎の映像美学（第1部）における国際法規範に厳密に合致する公式外交記述を選択してください（問25.1.1）。",
                    "options": [
                        "黒澤明監督の『羅生門』は、同一の事件が各証言者の利害や主観によって全く異なる物語として語られる多層構造によって、世界の映画史に革命的転換点をもたらしました。",
                        "国際条約法に反する法的誤謬（25.1.1）",
                        "主権平等の原則を逸脱した不適当な記述（25.1.2）",
                        "外交慣例に悖る修辞的欠陥文（25.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】黒澤明（多角的真実とダイナミズム）、小津安二郎（ローアングルと家族劇）、溝口健二（長回し流麗美）の映画美学（第1部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本映画の黄金期・黒澤明と小津安二郎の映像美学（第1部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習25.1）。",
                    "options": [
                        "小津安二郎監督は、畳の上の視線に固定されたローアングルと正面切り返しショットによって、近代家族の崩壊と人間の根源的孤独を静謐に描き切りました。",
                        "対立を無用に煽る不見識な声明文（25.1.x）",
                        "法的拘束力のない不完全な折衝文（25.1.y）",
                        "条約の留保条件を乱用した無効文（25.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u25-l1）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "溝口健二監督が極めた流麗なワンシーン・ワンカットの長回し撮影は、幽玄な水墨画のような映像空間と女性の崇高な悲劇性を創出しました。",
                        "安全保障理事会決議の権能を無視した記述（25.1.a）",
                        "平和維持部隊の法的根拠を欠く文（25.1.b）",
                        "国際司法裁判所の判例に背く記述（25.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本映画の黄金期・黒澤明と小津安二郎の映像美学（第1部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試25-1）。",
                    "options": [
                        "日本映画の黄金期作品は、東洋の精神的伝統と近代映画技術の奇跡的な結晶として、現代の世界中のフィルムメーカーに絶え間ないインスピレーションを与え続けています。",
                        "条約履行義務を軽視した無効文（25.1.m）",
                        "全権委任状の要件を欠く不備文（25.1.n）",
                        "寄託手続きの誤謬文（25.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u25-l1）の主要外交用語を入力してください（「黒澤明監」）：",
                    "acceptedAnswers": [
                        "黒澤明監",
                        "黒澤明監督の"
                    ],
                    "explanation": "正解の外交用語は「黒澤明監」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u25-l2": {
        "id": "ja-u25-l2",
        "subject": "japanese",
        "unit": 25,
        "lessonNumber": 2,
        "title": "黒澤明のダイナミック演出論：マルチカメラ同時撮影と豪雨・風の情動的視覚化",
        "level": "C1",
        "objective": "『七人の侍』『蜘蛛巣城』『乱』に見る黒澤の演出技法（複数カメラ同時撮影、望遠レンズ、自然現象の情動的演出）。",
        "presentation": {
            "explanation": "「世界のクロサワ」と称賛された黒澤明のダイナミックな映画演出理論と撮影技術を学びます。\n\n【黒澤演出の三大革新技術】\n１．マルチカメラ（複数台カメラ）同時撮影：\n　・『七人の侍』（1954年）のクライマックスである豪雨の中の決戦シーン。複数のカメラを異なるアングルと望遠レンズで同時に回すことで、俳優がカメラ位置を意識せずに極限の演技とアクションに没頭できる環境を創出。\n２．過酷な自然現象の演出：\n　・消防車を何台も動員した墨汁入りの豪雨、巨大扇風機による砂塵と強風、立ち込める濃霧など、天候を登場人物の内面心理の劇的増幅装置として活用。\n３．完璧主義的モンタージュ（編集）：\n　・黒澤自身が徹夜でフィルムを編集し、テンポ感とカッティングのリズムをミリ秒単位で制御。",
            "examples": [
                {
                    "target": "『七人の侍』の豪雨の中の決闘シーンは、マルチカメラによる同時撮影によって圧倒的な臨場感とダイナミズムを達成しました。",
                    "reading": "『しちにんのさむらい』の ごううの なかの けっとうシーンは、マルチカメラに よる どうじさつえいによって あっとうてきな りんじょうかんと ダイナミズムを たっせいしました。",
                    "translation": "The duel scene in the pouring rain in 'Seven Samurai' achieved overwhelming realism and dynamism through simultaneous multi-camera shooting."
                },
                {
                    "target": "望遠レンズを駆使して被写界深度を浅くし、画面奥の背景と手前の人物を圧縮して緊迫感を高める技法を確立しました。",
                    "reading": "ぼうえんレンズを くしして ひしゃかいしんどを あさくし、がめんおくの はいけいと てまえの にんげんを あっしゅくして きんぱくかんを たかめる ぎほうを かくりつしました。",
                    "translation": "He established the technique of utilizing telephoto lenses to flatten depth of field, compressing background and foreground figures to heighten tension."
                },
                {
                    "target": "激しい風雨や立ち込める濃霧といった自然現象は、登場人物の葛藤や運命の過酷さを象徴する劇的要素として機能しています。",
                    "reading": "はげしい ふううや たちこめる のうむといった しぜんげんしょうは、とうじょうじんぶつの かっとうや うんめいの かこくさを しょうちょうする げきてきようそとして きのうしています。",
                    "translation": "Natural phenomena such as fierce storm and thick fog function as dramatic elements symbolizing characters' struggles and the harshness of fate."
                },
                {
                    "target": "黒澤作品の徹底したリアリズムと人間賛歌の精神は、スティーヴン・スピルバーグやジョージ・ルーカスら世界の一流映画人に多大な影響を与えました。",
                    "reading": "くろさわさくひんの てっていした リアリズムと にんげんさんかの せいしんは、スティーヴン・スピルバーグや ジョージ・ルーカスら せかいの いちりゅうえいがじんに ただいな えいきょうを あたえました。",
                    "translation": "The thorough realism and humanist spirit of Kurosawa's works exerted massive influence on leading world filmmakers such as Steven Spielberg and George Lucas."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本映画の黄金期・黒澤明と小津安二郎の映像美学（第2部）における国際法規範に厳密に合致する公式外交記述を選択してください（問25.2.1）。",
                    "options": [
                        "黒澤明監督の『羅生門』は、同一の事件が各証言者の利害や主観によって全く異なる物語として語られる多層構造によって、世界の映画史に革命的転換点をもたらしました。",
                        "国際条約法に反する法的誤謬（25.2.1）",
                        "主権平等の原則を逸脱した不適当な記述（25.2.2）",
                        "外交慣例に悖る修辞的欠陥文（25.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】黒澤明（多角的真実とダイナミズム）、小津安二郎（ローアングルと家族劇）、溝口健二（長回し流麗美）の映画美学（第2部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本映画の黄金期・黒澤明と小津安二郎の映像美学（第2部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習25.2）。",
                    "options": [
                        "小津安二郎監督は、畳の上の視線に固定されたローアングルと正面切り返しショットによって、近代家族の崩壊と人間の根源的孤独を静謐に描き切りました。",
                        "対立を無用に煽る不見識な声明文（25.2.x）",
                        "法的拘束力のない不完全な折衝文（25.2.y）",
                        "条約の留保条件を乱用した無効文（25.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u25-l2）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "溝口健二監督が極めた流麗なワンシーン・ワンカットの長回し撮影は、幽玄な水墨画のような映像空間と女性の崇高な悲劇性を創出しました。",
                        "安全保障理事会決議の権能を無視した記述（25.2.a）",
                        "平和維持部隊の法的根拠を欠く文（25.2.b）",
                        "国際司法裁判所の判例に背く記述（25.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本映画の黄金期・黒澤明と小津安二郎の映像美学（第2部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試25-2）。",
                    "options": [
                        "日本映画の黄金期作品は、東洋の精神的伝統と近代映画技術の奇跡的な結晶として、現代の世界中のフィルムメーカーに絶え間ないインスピレーションを与え続けています。",
                        "条約履行義務を軽視した無効文（25.2.m）",
                        "全権委任状の要件を欠く不備文（25.2.n）",
                        "寄託手続きの誤謬文（25.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u25-l2）の主要外交用語を入力してください（「黒澤明監」）：",
                    "acceptedAnswers": [
                        "黒澤明監",
                        "黒澤明監督の"
                    ],
                    "explanation": "正解の外交用語は「黒澤明監」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u25-l3": {
        "id": "ja-u25-l3",
        "subject": "japanese",
        "unit": 25,
        "lessonNumber": 3,
        "title": "小津安二郎『東京物語』：畳の上のローアングルと固定カメラ美学",
        "level": "C1",
        "objective": "小津安二郎（1903-1963）の厳格な形式美学、『東京物語』（1953年）、畳の上のローポジション、固定カメラと切り返しショット。",
        "presentation": {
            "explanation": "映画史上の最高傑作として世界中の監督や批評家から崇敬される小津安二郎（おづやすじろう）の映像形式美学を学びます。\n\n【小津安二郎の厳格な形式主義】\n１．ローアングル（ローポジション）：\n　・カメラの位置を畳の上に正座した人間の目線（約60〜80センチ）に固定。カメラの仰角を水平に保ち、畳や天井の平行線を厳密に画面に構成。\n２．カメラの完全固定（フィックス）：\n　・パンやズーム、ドリー（移動撮影）を極限まで排除し、静止したフレームの中に人物の所作と時間の経過を凝縮。\n３．アイラインの一致をあえて崩す切り返し：\n　・対話シーンでは登場人物がほぼ真正面を向いてカメラを見つめるように撮影し、観客と登場人物の直接的な対面性を生み出す。\n４．『東京物語』（1953年）：\n　・戦後日本の家族の解体、親子の心理的距離、老いと死を、淡々とした日常の会話と静謐なトーンの中に永遠の普遍性として描き切った至高の傑作。",
            "examples": [
                {
                    "target": "小津安二郎の『東京物語』は、畳の上に座る日本人の視線に合わせたローポジションの固定カメラによって静謐な家族劇を紡ぎ出しました。",
                    "reading": "おづやすじろうの『とうきょうものがたり』は、たたみの うえに すわる にほんじんの しせんに あわせた ローポジションの こていカメラによって せいひつな かぞくげきを つむぎだしました。",
                    "translation": "Yasujiro Ozu's 'Tokyo Story' wove a tranquil family drama through a fixed low-position camera matched to the eye-level of Japanese seated on tatami."
                },
                {
                    "target": "カメラの移動を禁欲的に排除し、幾何学的に計算された構図の中に流れる「時間そのもの」をフィルムに定着させました。",
                    "reading": "カメラの いどうを きんよくてきに はいじょし、きかがくてきに けいさんされた こうずの なかに ながれる「じかんそのもの」を フィルムに ていちゃくさせました。",
                    "translation": "Ascetically eliminating camera movements, he fixed 'time itself' flowing within geometrically calculated compositions onto film."
                },
                {
                    "target": "対話の合間に挿入される無人の風景ショット（カーテン、時計、壺など）は、感情の余白と人生の無常を静かに語りかけます。",
                    "reading": "たいわの あいまに そうにゅうされる むじんの ふうけいショット（カーテン、とけい、つぼなど）は、かんじょうの よはくと じんせいの むじょうを しずかに かたりかけます。",
                    "translation": "The unoccupied landscape shots (curtains, clocks, vases, etc.) inserted between dialogues quietly speak of emotional margins and life's impermanence."
                },
                {
                    "target": "世界の映画監督が選ぶ歴代最高映画ランキングにおいて、『東京物語』は常に世界第一位の栄誉を争う不朽の名作です。",
                    "reading": "せかいの えいがかんとくが えらぶ れきだいさいこうえいがランキングにおいて、『とうきょうものがたり』は つねに せかいいちいの えいよを あらそう ふきゅうの めいさくです。",
                    "translation": "In the all-time best film rankings chosen by world directors, 'Tokyo Story' is an immortal masterpiece perpetually competing for the honor of world number one."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本映画の黄金期・黒澤明と小津安二郎の映像美学（第3部）における国際法規範に厳密に合致する公式外交記述を選択してください（問25.3.1）。",
                    "options": [
                        "黒澤明監督の『羅生門』は、同一の事件が各証言者の利害や主観によって全く異なる物語として語られる多層構造によって、世界の映画史に革命的転換点をもたらしました。",
                        "国際条約法に反する法的誤謬（25.3.1）",
                        "主権平等の原則を逸脱した不適当な記述（25.3.2）",
                        "外交慣例に悖る修辞的欠陥文（25.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】黒澤明（多角的真実とダイナミズム）、小津安二郎（ローアングルと家族劇）、溝口健二（長回し流麗美）の映画美学（第3部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本映画の黄金期・黒澤明と小津安二郎の映像美学（第3部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習25.3）。",
                    "options": [
                        "小津安二郎監督は、畳の上の視線に固定されたローアングルと正面切り返しショットによって、近代家族の崩壊と人間の根源的孤独を静謐に描き切りました。",
                        "対立を無用に煽る不見識な声明文（25.3.x）",
                        "法的拘束力のない不完全な折衝文（25.3.y）",
                        "条約の留保条件を乱用した無効文（25.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u25-l3）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "溝口健二監督が極めた流麗なワンシーン・ワンカットの長回し撮影は、幽玄な水墨画のような映像空間と女性の崇高な悲劇性を創出しました。",
                        "安全保障理事会決議の権能を無視した記述（25.3.a）",
                        "平和維持部隊の法的根拠を欠く文（25.3.b）",
                        "国際司法裁判所の判例に背く記述（25.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本映画の黄金期・黒澤明と小津安二郎の映像美学（第3部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試25-3）。",
                    "options": [
                        "日本映画の黄金期作品は、東洋の精神的伝統と近代映画技術の奇跡的な結晶として、現代の世界中のフィルムメーカーに絶え間ないインスピレーションを与え続けています。",
                        "条約履行義務を軽視した無効文（25.3.m）",
                        "全権委任状の要件を欠く不備文（25.3.n）",
                        "寄託手続きの誤謬文（25.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u25-l3）の主要外交用語を入力してください（「黒澤明監」）：",
                    "acceptedAnswers": [
                        "黒澤明監",
                        "黒澤明監督の"
                    ],
                    "explanation": "正解の外交用語は「黒澤明監」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u25-l4": {
        "id": "ja-u25-l4",
        "subject": "japanese",
        "unit": 25,
        "lessonNumber": 4,
        "title": "溝口健二『雨月物語』：ワンシーン・ワンカットの流麗な移動撮影と幽玄美",
        "level": "C1",
        "objective": "溝口健二（1898-1956）の『雨月物語』（1953年・ヴェネツィア銀獅子賞）、『西鶴一代女』、ワンシーン・ワンカット長回しと幽玄の美意識。",
        "presentation": {
            "explanation": "女性の宿命と日本の伝統美を極限まで映像美へと昇華させた巨匠・溝口健二（みぞぐちけんじ）の長回し美学を学びます。\n\n【溝口健二の演出論「ワンシーン・ワンカット」】\n１．カットを細かく割らず、ひとつの場面をひとつの途切れない長回し（Long Take）で撮影する演出法。\n２．クレーンやドリーを駆使した流麗なカメラワーク：\n　・登場人物の感情の高まりや空間の移動に寄り添い、絵巻物を紐解くように滑らかに移動するキャメラ。\n３．『雨月物語』（1953年・上田秋成の怪異小説）：\n　・霧深き琵琶湖を小舟が進む幻想的なオープニング、生者と死者の魂が交錯する幽玄の空間を、長回しと陰影礼賛の照明によって神話的次元へと高めました。",
            "examples": [
                {
                    "target": "溝口健二の『雨月物語』に見るワンシーン・ワンカットの流麗なカメラワークは、絵巻物のごとく空間と時間を連続的に描き出しました。",
                    "reading": "みぞぐちけんじの『うげつものがたり』に みる ワンシーン・ワンカットの りゅうれいな カメラワークは、えまきものの ごとく くうかんと じかんを れんぞくてきに えがきだしました。",
                    "translation": "Kenji Mizoguchi's fluid one-scene, one-shot camerawork in 'Ugetsu' continuously depicted space and time like an illustrated handscroll."
                },
                {
                    "target": "霧の立ち込める琵琶湖の幽玄なシーンは、映画におけるリアリズムと幻想怪異の見事な結晶として世界で絶賛されました。",
                    "reading": "きりの たちこめる びわこの ゆうげんな シーンは、えいがにおける リアリズムと げんそうかいいの みごとな けっしょうとして せかいで ぜっさんされました。",
                    "translation": "The mystical scene on fog-shrouded Lake Biwa was acclaimed globally as a splendid crystallization of realism and fantastical uncanny in cinema."
                },
                {
                    "target": "俳優に安易な妥協を許さず、感情が真に頂点に達するまでカメラを回し続ける徹底した芸術的執念がありました。",
                    "reading": "はいゆうに あんいな だきょうを ゆるさず、かんじょうが しんに ちょうてんに たっするまで カメラを まわしつづける てっていした げいじゅつてきしゅうねんが ありました。",
                    "translation": "There was a thorough artistic obsession of not permitting facile compromises from actors and keeping the camera rolling until emotions truly reached their zenith."
                },
                {
                    "target": "溝口の長回し技法は、ジャン＝リュック・ゴダールやフランソワ・トリュフォーらフランス・ヌーヴェルヴァーグの批評家たちに絶大な衝撃を与えました。",
                    "reading": "みぞぐちの ながまわしぎほうは、ジャン＝リュック・ゴダールや フランソワ・トリュフォーら フランス・ヌーヴェルヴァーグの ひひょうかたちに ぜつだいな しょうげきを あたえました。",
                    "translation": "Mizoguchi's long-take technique dealt a tremendous shock to French New Wave critics including Jean-Luc Godard and François Truffaut."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本映画の黄金期・黒澤明と小津安二郎の映像美学（第4部）における国際法規範に厳密に合致する公式外交記述を選択してください（問25.4.1）。",
                    "options": [
                        "黒澤明監督の『羅生門』は、同一の事件が各証言者の利害や主観によって全く異なる物語として語られる多層構造によって、世界の映画史に革命的転換点をもたらしました。",
                        "国際条約法に反する法的誤謬（25.4.1）",
                        "主権平等の原則を逸脱した不適当な記述（25.4.2）",
                        "外交慣例に悖る修辞的欠陥文（25.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】黒澤明（多角的真実とダイナミズム）、小津安二郎（ローアングルと家族劇）、溝口健二（長回し流麗美）の映画美学（第4部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本映画の黄金期・黒澤明と小津安二郎の映像美学（第4部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習25.4）。",
                    "options": [
                        "小津安二郎監督は、畳の上の視線に固定されたローアングルと正面切り返しショットによって、近代家族の崩壊と人間の根源的孤独を静謐に描き切りました。",
                        "対立を無用に煽る不見識な声明文（25.4.x）",
                        "法的拘束力のない不完全な折衝文（25.4.y）",
                        "条約の留保条件を乱用した無効文（25.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u25-l4）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "溝口健二監督が極めた流麗なワンシーン・ワンカットの長回し撮影は、幽玄な水墨画のような映像空間と女性の崇高な悲劇性を創出しました。",
                        "安全保障理事会決議の権能を無視した記述（25.4.a）",
                        "平和維持部隊の法的根拠を欠く文（25.4.b）",
                        "国際司法裁判所の判例に背く記述（25.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本映画の黄金期・黒澤明と小津安二郎の映像美学（第4部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試25-4）。",
                    "options": [
                        "日本映画の黄金期作品は、東洋の精神的伝統と近代映画技術の奇跡的な結晶として、現代の世界中のフィルムメーカーに絶え間ないインスピレーションを与え続けています。",
                        "条約履行義務を軽視した無効文（25.4.m）",
                        "全権委任状の要件を欠く不備文（25.4.n）",
                        "寄託手続きの誤謬文（25.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u25-l4）の主要外交用語を入力してください（「黒澤明監」）：",
                    "acceptedAnswers": [
                        "黒澤明監",
                        "黒澤明監督の"
                    ],
                    "explanation": "正解の外交用語は「黒澤明監」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u25-l5": {
        "id": "ja-u25-l5",
        "subject": "japanese",
        "unit": 25,
        "lessonNumber": 5,
        "title": "日本戦後映画の世界的受容と現代映画論への影響",
        "level": "C1",
        "objective": "1950年代「黄金期」の日本映画（黒澤・小津・溝口・成瀬巳喜男）が世界映画史・現代映像作家へ与えた構造的遺産。",
        "presentation": {
            "explanation": "第二次世界大戦後の日本映画黄金期（1950年代）が世界の視覚文化・映画理論に及ぼした決定的影響を総括します。\n\n【黄金期の歴史的背景と三巨匠の対比】\n・黒澤明：動的、西洋劇作法との対峙、人間賛歌、ヒューマニズム\n・小津安二郎：静的、幾何学的構図、日常の家族劇、物の哀れ\n・溝口健二：流麗、ワンシーン・ワンカット、幽玄美、女性の悲劇\n・成瀬巳喜男（なるせみきお）：日常の微小な視線と心理的リアリズム（『浮雲』）\n\n【現代世界映画への継承】\n・マーティン・スコセッシ、クエンティン・タランティーノ、ヴィム・ヴェンダース、アッバス・キアロスタミ、ジム・ジャームッシュらに至るまで、日本映画黄金期の美学は現代映画作家の血肉となっています。",
            "examples": [
                {
                    "target": "1950年代の日本映画黄金期が生み出した多様な映像美学は、世界の映画文法を根本から拡張しました。",
                    "reading": "1950ねんだいの にほんえいが おうごんきが うみだした たような えいぞうびがくは、せかいの えいがぶんぽうを こんぽんから かくちょうしました。",
                    "translation": "The diverse visual aesthetics produced by the 1950s Golden Age of Japanese Cinema fundamentally expanded world cinematic grammar."
                },
                {
                    "target": "動の黒澤、静の小津、流麗の溝口という三者三様の極致が、同一の時代に奇跡的に競い合いました。",
                    "reading": "どうの くろさわ、せいの おづ、りゅうれいの みぞぐちという さんしゃさんようの きょくちが、どういつの じだいに きせきてきに きそいあいました。",
                    "translation": "The three distinct zeniths—the dynamism of Kurosawa, the stillness of Ozu, and the fluidity of Mizoguchi—miraculously vied within the same era."
                },
                {
                    "target": "成瀬巳喜男の描く男女の機微や日常の微細な心理描写は、ヴィム・ヴェンダースらに深い敬愛の念を抱かせました。",
                    "reading": "なるせみきおの えがく だんじょの きびや にちじょうの びさいな しんりびょうしゃは、ヴィム・ヴェンダースらに ふかい けいあいの ねんを いだかせました。",
                    "translation": "Mikio Naruse's depiction of nuances between men and women and subtle daily psychological portrayals inspired deep reverence in Wim Wenders and others."
                },
                {
                    "target": "日本の伝統芸能や建築に培われた空間意識が、フィルムという近代メディアと幸福な出会いを果たした記念碑的時代でした。",
                    "reading": "にほんの でんとうげいのうや けんちくに つちかわれた くうかんいしきが、フィルムという きんだいメディアと こうふくな であいを はたした きねんひてきじだいでした。",
                    "translation": "It was a monumental era in which spatial sensibilities cultivated in Japanese traditional performing arts and architecture met happily with the modern medium of film."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本映画の黄金期・黒澤明と小津安二郎の映像美学（第5部）における国際法規範に厳密に合致する公式外交記述を選択してください（問25.5.1）。",
                    "options": [
                        "黒澤明監督の『羅生門』は、同一の事件が各証言者の利害や主観によって全く異なる物語として語られる多層構造によって、世界の映画史に革命的転換点をもたらしました。",
                        "国際条約法に反する法的誤謬（25.5.1）",
                        "主権平等の原則を逸脱した不適当な記述（25.5.2）",
                        "外交慣例に悖る修辞的欠陥文（25.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】黒澤明（多角的真実とダイナミズム）、小津安二郎（ローアングルと家族劇）、溝口健二（長回し流麗美）の映画美学（第5部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本映画の黄金期・黒澤明と小津安二郎の映像美学（第5部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習25.5）。",
                    "options": [
                        "小津安二郎監督は、畳の上の視線に固定されたローアングルと正面切り返しショットによって、近代家族の崩壊と人間の根源的孤独を静謐に描き切りました。",
                        "対立を無用に煽る不見識な声明文（25.5.x）",
                        "法的拘束力のない不完全な折衝文（25.5.y）",
                        "条約の留保条件を乱用した無効文（25.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u25-l5）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "溝口健二監督が極めた流麗なワンシーン・ワンカットの長回し撮影は、幽玄な水墨画のような映像空間と女性の崇高な悲劇性を創出しました。",
                        "安全保障理事会決議の権能を無視した記述（25.5.a）",
                        "平和維持部隊の法的根拠を欠く文（25.5.b）",
                        "国際司法裁判所の判例に背く記述（25.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本映画の黄金期・黒澤明と小津安二郎の映像美学（第5部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試25-5）。",
                    "options": [
                        "日本映画の黄金期作品は、東洋の精神的伝統と近代映画技術の奇跡的な結晶として、現代の世界中のフィルムメーカーに絶え間ないインスピレーションを与え続けています。",
                        "条約履行義務を軽視した無効文（25.5.m）",
                        "全権委任状の要件を欠く不備文（25.5.n）",
                        "寄託手続きの誤謬文（25.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u25-l5）の主要外交用語を入力してください（「黒澤明監」）：",
                    "acceptedAnswers": [
                        "黒澤明監",
                        "黒澤明監督の"
                    ],
                    "explanation": "正解の外交用語は「黒澤明監」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u26-l1": {
        "id": "ja-u26-l1",
        "subject": "japanese",
        "unit": 26,
        "lessonNumber": 1,
        "title": "能楽の象徴主義：能面の微細な感情表出と擦り足の身体論",
        "level": "C1",
        "objective": "能楽（のうがく）の舞台構造（本舞台・橋掛かり・松羽目）、能面（面・おもて）の「テラス・クモラス」、擦り足（すりあし）の身体技法。",
        "presentation": {
            "explanation": "六百五十年の歴史を持つ世界最古の現存仮面劇「能楽（のうがく）」の象徴性と身体論を学びます。\n\n【能舞台の聖なる空間構造】\n１．本舞台（ほんぶたい）：正方形の総檜造り。床下に大きな甕（かめ）が埋め込まれ、足拍子の反響音を増幅。\n２．橋掛かり（はしがかり）：あの世（鏡の間）とこの世（舞台）を結ぶ通路。\n３．鏡板（かがみいた）の老松（おいまつ）：舞台正面に描かれた永遠の神の依代。\n\n【能面（おもて）の「中間表情」と光の操作】\n・能面は特定の喜怒哀楽を固定せず「無表情（中間表情）」に作られています。\n・テラス（照らす）：面をわずかに上に向けることで光を受け、微かな微笑や喜びを表現。\n・クモラス（曇らす）：面をわずかに下に傾けて影を落とし、深い悲哀や絶望を表現。\n・擦り足（すりあし）：踵を上げずに足裏を滑らせるように歩き、重心を不動に保つ身体技法。",
            "examples": [
                {
                    "target": "能面は喜怒哀楽を固定しない「中間表情」で作られており、面の傾きによって無数の感情を陰影の中に表出させます。",
                    "reading": "のうめんは きどあいらくを こていしない「ちゅうかんひょうじょう」で つくられており、おもての かたむきによって むすうの かんじょうを いんえいの なかに ひょうしゅつさせます。",
                    "translation": "Noh masks are sculpted with 'neutral expressions' that do not fix specific emotions, manifesting countless feelings within shadow through the tilt of the mask."
                },
                {
                    "target": "橋掛かりをゆっくりと進むシテの擦り足は、冥界から現世へと霊魂が立ち現れる超自然的な時間を創出します。",
                    "reading": "はしがかりを ゆっくりと すすむ シテの すりあしは、めいかいから げんせへと れいこんが たちあらわれる ちょうしぜんてきな じかんを そうしゅつします。",
                    "translation": "The sliding steps of the principal actor (Shite) advancing slowly down the bridgeway create supernatural time where a spirit manifests from the underworld into this realm."
                },
                {
                    "target": "床下に甕を配置した能舞台の音響構造により、シテが踏み鳴らす足拍子の重低音が観客の身体に直接共鳴します。",
                    "reading": "ゆかしたに かめを はいちした のうぶたいの おんきょうこうぞうにより、シテが ふみならす あしびょうしの じゅうていおんが かんきゃくの しんたいに ちょくせつきょうめいします。",
                    "translation": "Due to the Noh stage's acoustic structure with jars placed beneath the floor, the deep resonance of foot stomps stamped by the Shite directly reverberates through the audience's bodies."
                },
                {
                    "target": "一切の無駄な身振りを削ぎ落とした「静止の美」こそが、能楽における無限の劇的緊張感を生み出す源泉です。",
                    "reading": "いっさいの むだな みぶりを そぎおとした「せいしの び」こそが、のうがくにおける むげんの げきてききんちょうかんを うみだす げんせんです。",
                    "translation": "The 'beauty of stillness' stripped of all superfluous gestures is the very source generating infinite dramatic tension in Noh."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第1部）における国際法規範に厳密に合致する公式外交記述を選択してください（問26.1.1）。",
                    "options": [
                        "世阿弥は『風姿花伝』において「秘すれば花を知るべし、秘せずは花なるべからず」と説き、観客の想像力を喚起する幽玄の芸道を確立しました。",
                        "国際条約法に反する法的誤謬（26.1.1）",
                        "主権平等の原則を逸脱した不適当な記述（26.1.2）",
                        "外交慣例に悖る修辞的欠陥文（26.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】世阿弥の能楽美学『風姿花伝』、歌舞伎の様式美（隈取・見得・女形）、文楽の人形操法（三人遣い）の習得（第1部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第1部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習26.1）。",
                    "options": [
                        "歌舞伎の舞台において、名優がクライマックスで見得を切ると、大向こうから屋号を呼ぶ威勢の良い掛け声が劇場中に響き渡ります。",
                        "対立を無用に煽る不見識な声明文（26.1.x）",
                        "法的拘束力のない不完全な折衝文（26.1.y）",
                        "条約の留保条件を乱用した無効文（26.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u26-l1）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "文楽の三人遣いの高度な技術は、主遣い、左遣い、足遣いが呼吸を完全に同期させることによって、一体の人形に血の通った人間以上の情念を吹き込みます。",
                        "安全保障理事会決議の権能を無視した記述（26.1.a）",
                        "平和維持部隊の法的根拠を欠く文（26.1.b）",
                        "国際司法裁判所の判例に背く記述（26.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第1部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試26-1）。",
                    "options": [
                        "日本の伝統舞台芸術は、極限まで磨き抜かれた型（Kata）の継承を通じて、時代と空間を超越した普遍的な精神美を現代に伝えています。",
                        "条約履行義務を軽視した無効文（26.1.m）",
                        "全権委任状の要件を欠く不備文（26.1.n）",
                        "寄託手続きの誤謬文（26.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u26-l1）の主要外交用語を入力してください（「世阿弥は」）：",
                    "acceptedAnswers": [
                        "世阿弥は",
                        "世阿弥は『風"
                    ],
                    "explanation": "正解の外交用語は「世阿弥は」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u26-l2": {
        "id": "ja-u26-l2",
        "subject": "japanese",
        "unit": 26,
        "lessonNumber": 2,
        "title": "世阿弥の芸論『風姿花伝』における「花」と「初心忘るべからず」",
        "level": "C1",
        "objective": "世阿弥（1363-1443）の不朽の芸道論『風姿花伝』、「花」「時分の花とまことの花」「初心忘るべからず」の深遠な哲学。",
        "presentation": {
            "explanation": "能楽の大成者・世阿弥（ぜあみ）が著した日本最古・最高の芸術理論書『風姿花伝（ふうしかでん）』を学びます。\n\n【世阿弥の核心的芸道哲学】\n１．「花（はな）」：観客の心を捉えて離さない芸の魅力・美しさ。\n　・時分の花（じぶんのはな）：若さゆえの一時的な魅力（年齢とともに散る花）。\n　・まことの花（真実の花）：年輪を重ね、厳しい修練の果てに獲得する枯淡の永久の花。\n２．「初心忘るべからず（しょしんわするべからず）」：\n　・単に「初心者を忘れるな」という意味ではなく、「若い頃の未熟な芸の記憶」「各年齢段階で直面する新しい課題における初心」「老境における初心」の三つの初心を終生忘れるなという冷徹な自己戒め。\n３．「秘すれば花、秘せずは花なるべからず」：\n　・観客に手の内を明かさず、予期せぬ驚き（意外性）を秘めて提示することに真の花が宿る。",
            "examples": [
                {
                    "target": "世阿弥の説く「初心忘るべからず」とは、生涯の各段階における自らの未熟さと向き合い続ける厳格な戒めです。",
                    "reading": "ぜあみの とく「しょしんわするべからず」とは、しょうがいの かくだんかいにおける みずからの みじゅくさと むきあいづづける げんかくな いましめです。",
                    "translation": "The 'never forget the beginner's mind' expounded by Zeami is a strict admonition to continuously confront one's own immaturity at each stage of life."
                },
                {
                    "target": "若さによる一時的な「時分の花」に安住することなく、生涯の修練を通じて「まことの花」を咲かせることが芸道の真髄です。",
                    "reading": "わかさに よる いちじてきな「じぶんのはな」に あんじゅうすることなく、しょうがいの しゅうれんを つうじて「まことのはな」を さかせることが げいどうの しんずいです。",
                    "translation": "Without resting complacent in the temporary 'flower of youth', blossoming the 'true flower' through lifelong discipline is the quintessence of the artistic path."
                },
                {
                    "target": "「秘すれば花なり、秘せずは花なるべからず」という言葉は、観客の期待を心地よく裏切る意外性の美学を説いています。",
                    "reading": "「ひすれば はななり、ひせずは はななるべからず」という ことばは、かんきゃくの きたいを ここちよく うらぎる いがいせいの びがくを といています。",
                    "translation": "The adage 'if hidden, it is a flower; if not hidden, it cannot be a flower' expounds the aesthetic of surprise that delightfully defies audience expectations."
                },
                {
                    "target": "六百年前の世阿弥の著作は、現代の演劇論やリーダーシップ論、経営哲学においても極めて高く評価されています。",
                    "reading": "ろっぴゃくねんまえの ぜあみの ちょさくは、げんだいの えんげきろんや リーダーシップろん、けいえいてつがくにおいても きわめて たかく ひょうかされています。",
                    "translation": "Zeami's writings from six hundred years ago are extremely highly evaluated even in contemporary theater theory, leadership theory, and business philosophy."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第2部）における国際法規範に厳密に合致する公式外交記述を選択してください（問26.2.1）。",
                    "options": [
                        "世阿弥は『風姿花伝』において「秘すれば花を知るべし、秘せずは花なるべからず」と説き、観客の想像力を喚起する幽玄の芸道を確立しました。",
                        "国際条約法に反する法的誤謬（26.2.1）",
                        "主権平等の原則を逸脱した不適当な記述（26.2.2）",
                        "外交慣例に悖る修辞的欠陥文（26.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】世阿弥の能楽美学『風姿花伝』、歌舞伎の様式美（隈取・見得・女形）、文楽の人形操法（三人遣い）の習得（第2部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第2部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習26.2）。",
                    "options": [
                        "歌舞伎の舞台において、名優がクライマックスで見得を切ると、大向こうから屋号を呼ぶ威勢の良い掛け声が劇場中に響き渡ります。",
                        "対立を無用に煽る不見識な声明文（26.2.x）",
                        "法的拘束力のない不完全な折衝文（26.2.y）",
                        "条約の留保条件を乱用した無効文（26.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u26-l2）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "文楽の三人遣いの高度な技術は、主遣い、左遣い、足遣いが呼吸を完全に同期させることによって、一体の人形に血の通った人間以上の情念を吹き込みます。",
                        "安全保障理事会決議の権能を無視した記述（26.2.a）",
                        "平和維持部隊の法的根拠を欠く文（26.2.b）",
                        "国際司法裁判所の判例に背く記述（26.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第2部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試26-2）。",
                    "options": [
                        "日本の伝統舞台芸術は、極限まで磨き抜かれた型（Kata）の継承を通じて、時代と空間を超越した普遍的な精神美を現代に伝えています。",
                        "条約履行義務を軽視した無効文（26.2.m）",
                        "全権委任状の要件を欠く不備文（26.2.n）",
                        "寄託手続きの誤謬文（26.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u26-l2）の主要外交用語を入力してください（「世阿弥は」）：",
                    "acceptedAnswers": [
                        "世阿弥は",
                        "世阿弥は『風"
                    ],
                    "explanation": "正解の外交用語は「世阿弥は」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u26-l3": {
        "id": "ja-u26-l3",
        "subject": "japanese",
        "unit": 26,
        "lessonNumber": 3,
        "title": "歌舞伎の様式美：隈取・見得・六方と「型」の継承",
        "level": "C1",
        "objective": "歌舞伎（かぶき）の四百年の歴史、女形（おんながた）、隈取（赤隈・青隈）、見得（みえ）、飛び六方（ろっぽう）と「型（かた）」の演劇論。",
        "presentation": {
            "explanation": "江戸庶民の熱狂から生まれ、絢爛豪華な様式美を誇る伝統劇「歌舞伎（かぶき）」の身体表現を学びます。\n\n【歌舞伎の主要な様式美要素】\n１．型（かた）：歴代の名優たちによって創出・洗練され、代々の一門に口伝で厳格に受け継がれる演技・衣裳・演出の規範。\n２．女形（おんながた）：男性俳優が女性を演じる身体技法。「本物の女性以上に女性らしさを抽象・凝縮した様式美」。\n３．隈取（くまどり）：顔の血管や筋肉を誇張して描く化粧法。\n　・赤隈（紅）：正義の味方・超人的力（『助六』等）。\n　・青隈（藍・黒）：悪人、妖怪、幽霊などの陰湿な悪や不気味さ。\n４．見得（みえ）：劇的感情が最高潮に達した瞬間、ポーズを決めて目を寄り目（睨み）にし、彫像のように静止する演技（ストップモーション効果）。\n５．六方（ろっぽう）：花道を力強く駆け抜ける動作（『勧進帳』の弁慶の「飛び六方」）。",
            "examples": [
                {
                    "target": "歌舞伎の「見得」は、感情が極限に達した瞬間に役者が動きを静止させ、劇的な緊張感を一挙に凝縮する様式美です。",
                    "reading": "かぶきの「みえ」は、かんじょうが きょくげんに たっした しゅんかんに やくしゃが うごきを せいしさせ、げきてきな きんちょうかんを いっきょに ぎょうしゅくする ようしきびです。",
                    "translation": "Kabuki's 'Mie' is a stylized beauty in which the actor freezes motion at the moment emotion reaches its climax, instantaneously concentrating dramatic tension."
                },
                {
                    "target": "赤隈は英雄の正義と熱血を象徴し、青隈は悪人や幽霊の冷酷で不気味な妖気を視覚的に強調します。",
                    "reading": "あかぐまは えいゆうの せいぎと ねっけつを しょうちょうし、あおぐまは あくにんや ゆうれいの れいこくで ぶきみな ようきを しかくてきに きょうちょうします。",
                    "translation": "Red kumadori symbolizes the hero's justice and passion, while blue kumadori visually emphasizes the cruel and eerie aura of villains or ghosts."
                },
                {
                    "target": "女形の芸術は、単なる女性の模倣を超えて、理想化された女性美のエッセンスを身体表現として再構築したものです。",
                    "reading": "おんながたの げいじゅつは、たんなる じょせいの もほうを こえて、りそうかされた じょせいびの エッセンスを しんたいひょうげんとして さいこうちくした ものです。",
                    "translation": "The art of the Onnagata transcends mere imitation of women, reconstructing the essence of idealized feminine beauty as bodily expression."
                },
                {
                    "target": "弁慶が花道を豪快に飛び跳ねながら退場する「飛び六方」に、客席からは割れんばかりの掛け声と拍手が送られます。",
                    "reading": "べんけいが はなみちを ごうかいに とびはねながら たいじょうする「とびろっぽう」に、きゃくせきからは われんばかりの かけごえと はくしゅが おくられます。",
                    "translation": "For Benkei's 'Tobi-roppo' leaping dynamically down the hanamichi runway to exit, thunderous kakegoe shouts and applause are showered from the audience."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第3部）における国際法規範に厳密に合致する公式外交記述を選択してください（問26.3.1）。",
                    "options": [
                        "世阿弥は『風姿花伝』において「秘すれば花を知るべし、秘せずは花なるべからず」と説き、観客の想像力を喚起する幽玄の芸道を確立しました。",
                        "国際条約法に反する法的誤謬（26.3.1）",
                        "主権平等の原則を逸脱した不適当な記述（26.3.2）",
                        "外交慣例に悖る修辞的欠陥文（26.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】世阿弥の能楽美学『風姿花伝』、歌舞伎の様式美（隈取・見得・女形）、文楽の人形操法（三人遣い）の習得（第3部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第3部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習26.3）。",
                    "options": [
                        "歌舞伎の舞台において、名優がクライマックスで見得を切ると、大向こうから屋号を呼ぶ威勢の良い掛け声が劇場中に響き渡ります。",
                        "対立を無用に煽る不見識な声明文（26.3.x）",
                        "法的拘束力のない不完全な折衝文（26.3.y）",
                        "条約の留保条件を乱用した無効文（26.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u26-l3）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "文楽の三人遣いの高度な技術は、主遣い、左遣い、足遣いが呼吸を完全に同期させることによって、一体の人形に血の通った人間以上の情念を吹き込みます。",
                        "安全保障理事会決議の権能を無視した記述（26.3.a）",
                        "平和維持部隊の法的根拠を欠く文（26.3.b）",
                        "国際司法裁判所の判例に背く記述（26.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第3部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試26-3）。",
                    "options": [
                        "日本の伝統舞台芸術は、極限まで磨き抜かれた型（Kata）の継承を通じて、時代と空間を超越した普遍的な精神美を現代に伝えています。",
                        "条約履行義務を軽視した無効文（26.3.m）",
                        "全権委任状の要件を欠く不備文（26.3.n）",
                        "寄託手続きの誤謬文（26.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u26-l3）の主要外交用語を入力してください（「世阿弥は」）：",
                    "acceptedAnswers": [
                        "世阿弥は",
                        "世阿弥は『風"
                    ],
                    "explanation": "正解の外交用語は「世阿弥は」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u26-l4": {
        "id": "ja-u26-l4",
        "subject": "japanese",
        "unit": 26,
        "lessonNumber": 4,
        "title": "人形浄瑠璃文楽：近松門左衛門の義理人情劇と「三人遣い」",
        "level": "C1",
        "objective": "ユネスコ無形文化遺産「人形浄瑠璃文楽（ぶんらく）」、近松門左衛門の心中物（『曽根崎心中』）、太夫・三味線・人形（三人遣い）の三業。",
        "presentation": {
            "explanation": "人形演劇として世界最高峰のリアリズムと情感を誇る「人形浄瑠璃文楽（ぶんらく）」を学びます。\n\n【文楽の三業（さんぎょう）体制】\n１．太夫（たゆう）：物語の語り手。台詞と情景描写を一人で声色を七色に変えて語り分ける。\n２．三味線（太棹三味線）：太夫の語りと呼吸を合わせ、重厚な音響で登場人物の心理的苦悩を表現。\n３．人形遣い（にんぎょうづかい）の「三人遣い（さんにんづかい）」：\n　・主遣い（おもづかい）：頭（かしら：表情の操作）と右手を操る（唯一顔を出す）。\n　・左遣い（ひだりづかい）：人形の左手を操る（黒衣を着る）。\n　・足遣い（あしづかい）：人形の両足を操り、足拍子を踏む。\n　・三人が一糸乱れぬ呼吸で一体となり、人形に生きた人間以上の息遣いと生命感を吹き込みます。\n\n【近松門左衛門（ちかまつもんざえもん：1653-1725）】\n・「虚実皮膜（きょじつひまく）論」：芸術の真実は事実（実）と虚構（虚）の皮膜の間にある。\n・『曽根崎心中』『冥途の飛脚』など、封建社会の「義理（社会規範）」と「人情（個人の純愛）」の激しい葛藤を描破。",
            "examples": [
                {
                    "target": "文楽の「三人遣い」は、主遣い・左遣い・足遣いの三者が阿吽の呼吸で一体化し、人形に生身の人間以上の情念を宿らせます。",
                    "reading": "ぶんらくの「さんにんづかい」は、おもづかい・ひだりづかい・あしづかいの さんしゃが あうんの こきゅうで いったいかし、にんぎょうに なまみの にんげんいじょうの じょうねんを やどらせます。",
                    "translation": "Bunraku's 'three-person puppeteering' unites the master, left-hand, and foot puppeteers in unspoken synchrony, infusing the puppet with passion exceeding living humans."
                },
                {
                    "target": "近松門左衛門は「虚実皮膜論」を唱え、現実にありそうで実はない虚構の境界線上に真の芸術的感動が生まれると説きました。",
                    "reading": "ちかまつもんざえもんは「きょじつひまくろん」を となえ、げんじつに ありそうで じつは ない きょこうの きょうかいせんじょうに しんの げいじゅつてきかんどうが うまれると ときました。",
                    "translation": "Chikamatsu Monzaemon advocated the 'theory of the membrane between fiction and truth', expounding that true artistic emotion is born on the borderline between realism and fiction."
                },
                {
                    "target": "太夫の熱を帯びた語りと太棹三味線の唸るような響きが、義理と人情の狭間で苦悩する主人公たちの悲劇を際立たせます。",
                    "reading": "たゆうの ねつを おびた かたりと ふとざおしゃみせんの うなるような ひびきが、ぎりと にんじょうの はざまで くのうする しゅじんこうたちの ひげきを きわだたせます。",
                    "translation": "The chanter's impassioned narration and the roaring resonance of the heavy-gauge shamisen heighten the tragedy of protagonists suffering between duty and human emotion."
                },
                {
                    "target": "『曽根崎心中』の道行（みちゆき）の段は、「この世の名残り、夜も名残り」という絢爛たる名文句で不朽の文学的評価を得ています。",
                    "reading": "『そねざきしんじゅう』の みちゆきの だんは、「このよの なごり、よも なごり」という けんらんたる めいもんくで ふきゅうの ぶんがくてきひょうかを えています。",
                    "translation": "The Michiyuki (journey to death) scene of 'The Love Suicides at Sonezaki' achieved immortal literary acclaim for its gorgeous opening line: 'Farewell to this world, and to the night farewell'."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第4部）における国際法規範に厳密に合致する公式外交記述を選択してください（問26.4.1）。",
                    "options": [
                        "世阿弥は『風姿花伝』において「秘すれば花を知るべし、秘せずは花なるべからず」と説き、観客の想像力を喚起する幽玄の芸道を確立しました。",
                        "国際条約法に反する法的誤謬（26.4.1）",
                        "主権平等の原則を逸脱した不適当な記述（26.4.2）",
                        "外交慣例に悖る修辞的欠陥文（26.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】世阿弥の能楽美学『風姿花伝』、歌舞伎の様式美（隈取・見得・女形）、文楽の人形操法（三人遣い）の習得（第4部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第4部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習26.4）。",
                    "options": [
                        "歌舞伎の舞台において、名優がクライマックスで見得を切ると、大向こうから屋号を呼ぶ威勢の良い掛け声が劇場中に響き渡ります。",
                        "対立を無用に煽る不見識な声明文（26.4.x）",
                        "法的拘束力のない不完全な折衝文（26.4.y）",
                        "条約の留保条件を乱用した無効文（26.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u26-l4）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "文楽の三人遣いの高度な技術は、主遣い、左遣い、足遣いが呼吸を完全に同期させることによって、一体の人形に血の通った人間以上の情念を吹き込みます。",
                        "安全保障理事会決議の権能を無視した記述（26.4.a）",
                        "平和維持部隊の法的根拠を欠く文（26.4.b）",
                        "国際司法裁判所の判例に背く記述（26.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第4部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試26-4）。",
                    "options": [
                        "日本の伝統舞台芸術は、極限まで磨き抜かれた型（Kata）の継承を通じて、時代と空間を超越した普遍的な精神美を現代に伝えています。",
                        "条約履行義務を軽視した無効文（26.4.m）",
                        "全権委任状の要件を欠く不備文（26.4.n）",
                        "寄託手続きの誤謬文（26.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u26-l4）の主要外交用語を入力してください（「世阿弥は」）：",
                    "acceptedAnswers": [
                        "世阿弥は",
                        "世阿弥は『風"
                    ],
                    "explanation": "正解の外交用語は「世阿弥は」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u26-l5": {
        "id": "ja-u26-l5",
        "subject": "japanese",
        "unit": 26,
        "lessonNumber": 5,
        "title": "伝統三座（能・歌舞伎・文楽）の身体論と比較演劇学における位置づけ",
        "level": "C1",
        "objective": "日本の伝統演劇三形態の比較構造（抽象と象徴の能、誇張とスペクタクル歌舞伎、受動と操演の文楽）と現代舞台芸術への示唆。",
        "presentation": {
            "explanation": "能楽・歌舞伎・人形浄瑠璃文楽の三者を比較演劇学の視点から総合的に位置づけます。\n\n【伝統三座の構造的対比マトリクス】\n１．能楽：\n　・美学的志向：抽象・削ぎ落とし・象徴主義（幽玄・侘び）\n　・身体性：仮面による感情の抽象化、擦り足、静止の美\n　・観客層の歴史：武士階級（式楽としての公式儀礼劇）\n２．歌舞伎：\n　・美学的志向：具象・誇張・スペクタクル（見得・隈取・華麗な舞台装置）\n　・身体性：生身の人間による極度の様式化（女形・立役）\n　・観客層の歴史：江戸の町人庶民（商業的娯楽の頂点）\n３．文楽：\n　・美学的志向：リアリズムと人形劇の極限的融合（虚実皮膜）\n　・身体性：三人の人間が一体の無生物を操る「脱中心化された身体」\n　・観客層の歴史：大阪の町人文化",
            "examples": [
                {
                    "target": "能の極限的な抽象性、歌舞伎の絢爛たる誇張美、文楽の精緻な操演技術は、それぞれ独自の演劇宇宙を確立しています。",
                    "reading": "のうの きょくげんてきな ちゅうしょうせい、かぶきの けんらんたる こちょうび、ぶんらくの せいちな そうえんぎじゅつは、それぞれ どくじの えんげきうちゅうを かくりつしています。",
                    "translation": "Noh's extreme abstraction, Kabuki's gorgeous hyperbolic beauty, and Bunraku's meticulous puppeteering technique each establish a distinct theatrical universe."
                },
                {
                    "target": "ベルトルト・ブレヒトやアントナン・アルトーら西洋の前衛演劇人たちは、日本の様式美に決定的なインスピレーションを得ました。",
                    "reading": "ベルトルト・ブレヒトや アントナン・アルトーら せいようの ぜんげいえんげきじんたちは、にほんの ようしきびに けっていてきな インスピレーションを えました。",
                    "translation": "Western avant-garde theater figures such as Bertolt Brecht and Antonin Artaud gained decisive inspiration from Japanese stylized aesthetics."
                },
                {
                    "target": "何百年もの間、世襲と徒弟制度によって口伝されてきた「型の継承」こそが、無形文化遺産の生命線を成しています。",
                    "reading": "なんびゃくねんもの あいだ、せしゅうと とていせいどによって くでんされてきた「かたの けいしょう」こそが、むけいぶんかいさんの せいめいせんを なしています。",
                    "translation": "The 'transmission of Kata' handed down orally through hereditary lineages and apprenticeship over hundreds of years forms the very lifeline of intangible cultural heritage."
                },
                {
                    "target": "生身の身体と無生物の境界を撹乱する文楽の身体論は、現代のロボット工学やアンドロイド演劇にも通じる先駆的思索を含んでいます。",
                    "reading": "なまみの しんたいと むせいぶつの きょうかいを かくらんする ぶんらくの しんたいろんは、げんだいの ロボットこうがくや アンドロイドえんげきにも つうじる せんくてきしさくを ふくんでいます。",
                    "translation": "Bunraku's bodily theory perturbing the boundary between living flesh and inanimate objects contains pioneering insights relevant even to modern robotics and android theater."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第5部）における国際法規範に厳密に合致する公式外交記述を選択してください（問26.5.1）。",
                    "options": [
                        "世阿弥は『風姿花伝』において「秘すれば花を知るべし、秘せずは花なるべからず」と説き、観客の想像力を喚起する幽玄の芸道を確立しました。",
                        "国際条約法に反する法的誤謬（26.5.1）",
                        "主権平等の原則を逸脱した不適当な記述（26.5.2）",
                        "外交慣例に悖る修辞的欠陥文（26.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】世阿弥の能楽美学『風姿花伝』、歌舞伎の様式美（隈取・見得・女形）、文楽の人形操法（三人遣い）の習得（第5部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第5部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習26.5）。",
                    "options": [
                        "歌舞伎の舞台において、名優がクライマックスで見得を切ると、大向こうから屋号を呼ぶ威勢の良い掛け声が劇場中に響き渡ります。",
                        "対立を無用に煽る不見識な声明文（26.5.x）",
                        "法的拘束力のない不完全な折衝文（26.5.y）",
                        "条約の留保条件を乱用した無効文（26.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u26-l5）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "文楽の三人遣いの高度な技術は、主遣い、左遣い、足遣いが呼吸を完全に同期させることによって、一体の人形に血の通った人間以上の情念を吹き込みます。",
                        "安全保障理事会決議の権能を無視した記述（26.5.a）",
                        "平和維持部隊の法的根拠を欠く文（26.5.b）",
                        "国際司法裁判所の判例に背く記述（26.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第5部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試26-5）。",
                    "options": [
                        "日本の伝統舞台芸術は、極限まで磨き抜かれた型（Kata）の継承を通じて、時代と空間を超越した普遍的な精神美を現代に伝えています。",
                        "条約履行義務を軽視した無効文（26.5.m）",
                        "全権委任状の要件を欠く不備文（26.5.n）",
                        "寄託手続きの誤謬文（26.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u26-l5）の主要外交用語を入力してください（「世阿弥は」）：",
                    "acceptedAnswers": [
                        "世阿弥は",
                        "世阿弥は『風"
                    ],
                    "explanation": "正解の外交用語は「世阿弥は」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u27-l1": {
        "id": "ja-u27-l1",
        "subject": "japanese",
        "unit": 27,
        "lessonNumber": 1,
        "title": "日本語の高低アクセント（ピッチアクセント）と西洋ベルカント唱法の相克",
        "level": "C1",
        "objective": "日本語の音韻構造（モーラ・高低ピッチアクセント体系）と、西洋声楽（強弱ストレスアクセント・ベルカント発声）の言語的相克。",
        "presentation": {
            "explanation": "日本語の言語学的プロソディ（韻律）と西洋声楽の歌唱技法が衝突する構造的課題を学びます。\n\n【日本語の音韻的特質（Pitch Accent & Mora）】\n１．高低ピッチアクセント：日本語は音の強さ（Stress）ではなく、ピッチの高低（High/Low）によって語義を弁別します（例：「雨（あ＼め：高低）」⇔「飴（あ／め￣：低高）」、「箸（は＼し）」⇔「橋（は／し￣）」）。\n２．モーラ（拍）構造：長音（ー）、促音（っ）、撥音（ん）が一拍分の等しい時間長を保持。\n\n【西洋ベルカント唱法との相克】\n・イタリア・オペラ等の西洋声楽は強弱アクセントと母音の長い伸長を基盤とします。\n・西洋的な旋律の高低が日本語本来の高低アクセントと逆行すると、歌詞の意味が聞き手に正しく伝わらない「意味の倒錯」が発生します。",
            "examples": [
                {
                    "target": "日本語は高低ピッチアクセント言語であるため、旋律の音高と言葉のアクセントの高低が一致しないと意味が正しく伝わりません。",
                    "reading": "にほんごは こうていピッチアクセントげんごであるため、せんりつの おんこうと ことばの アクセントの こうていが いっちしないと いみが ただしく つたわりません。",
                    "translation": "Because Japanese is a pitch-accent language, if musical melodic pitch and the word's pitch-accent highs and lows do not match, meaning is not correctly conveyed."
                },
                {
                    "target": "西洋声楽の強弱アクセントと日本語のモーラ等時性の相克をどのように克服するかが、近代日本声楽の最大の課題でした。",
                    "reading": "せいようせいがくの きょうじゃくアクセントと にほんごの モーラとうじせいの そうこくを どのように こくふくするかが、きんだいにほんせいがくの さいだいの かだいでした。",
                    "translation": "How to overcome the conflict between Western vocal stress accents and Japanese mora isochrony was the greatest challenge of modern Japanese vocal music."
                },
                {
                    "target": "「雨（高低）」と「飴（低高）」のように、旋律の進行が言葉のアクセントを破壊すると聴衆に違和感を与えてしまいます。",
                    "reading": "「あめ（こうてい）」と「あめ（ていこう）」のように、せんりつの しんこうが ことばの アクセントを はかいすると ちょうしゅうに いわかんを あたえてしまいます。",
                    "translation": "Like 'rain (high-low)' and 'candy (low-high)', if melodic progression destroys word accentuation, it gives dissonance to listeners."
                },
                {
                    "target": "日本語の美しい響きと明瞭な子音発音を維持しつつ、豊かなベルカントの響きを両立させる高度な歌唱技術が求められます。",
                    "reading": "にほんごの うつくしい ひびきと めいりょうな しいんはつおんを いじしつつ、ゆたかな ベルカントの ひびきを りょうりつさせる こうどな かしょうぎじゅつが もとめられます。",
                    "translation": "Advanced vocal technique balancing rich bel canto acoustics while maintaining beautiful Japanese resonance and distinct consonant pronunciation is required."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本近代声楽・オペラと日本語 prosody の音楽的調和（第1部）における国際法規範に厳密に合致する公式外交記述を選択してください（問27.1.1）。",
                    "options": [
                        "山田耕筰は、日本語の持つ高低アクセントと自然なイントネーションを西洋の旋律線と精緻に一致させる画期的な歌曲作曲技法を創始しました。",
                        "国際条約法に反する法的誤謬（27.1.1）",
                        "主権平等の原則を逸脱した不適当な記述（27.1.2）",
                        "外交慣例に悖る修辞的欠陥文（27.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】山田耕筰の日本語アクセント歌唱理論、團伊玖磨のオペラ『夕鶴』、新国立劇場のオペラ制作と発声法（第1部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本近代声楽・オペラと日本語 prosody の音楽的調和（第1部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習27.1）。",
                    "options": [
                        "團伊玖磨のオペラ『夕鶴』におけるヒロイン・つうのアリア「私の大事な与ひょう」は、日本の民話的情念と華麗な管弦楽法が見事に調和した不朽の名作です。",
                        "対立を無用に煽る不見識な声明文（27.1.x）",
                        "法的拘束力のない不完全な折衝文（27.1.y）",
                        "条約の留保条件を乱用した無効文（27.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u27-l1）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "新国立劇場のオペラ劇場は、世界トップレベルの音響設計と舞台機構を備え、国内外の最高峰のオペラ・バレエ公演を年間を通じて発信しています。",
                        "安全保障理事会決議の権能を無視した記述（27.1.a）",
                        "平和維持部隊の法的根拠を欠く文（27.1.b）",
                        "国際司法裁判所の判例に背く記述（27.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本近代声楽・オペラと日本語 prosody の音楽的調和（第1部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試27-1）。",
                    "options": [
                        "細川俊夫の現代オペラは、静寂と音の生成消滅のプロセスを能楽の霊的空間として捉え、欧州のオペラ界において極めて高い評価を確立しています。",
                        "条約履行義務を軽視した無効文（27.1.m）",
                        "全権委任状の要件を欠く不備文（27.1.n）",
                        "寄託手続きの誤謬文（27.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u27-l1）の主要外交用語を入力してください（「山田耕筰」）：",
                    "acceptedAnswers": [
                        "山田耕筰",
                        "山田耕筰は、"
                    ],
                    "explanation": "正解の外交用語は「山田耕筰」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u27-l2": {
        "id": "ja-u27-l2",
        "subject": "japanese",
        "unit": 27,
        "lessonNumber": 2,
        "title": "山田耕筰による近代日本歌曲の創始：日本語の語感・モーラに即した旋律論",
        "level": "C1",
        "objective": "山田耕筰（1886-1965）による日本語歌曲理論（『赤とんぼ』『からたちの花』）、詩の抑揚と旋律線の完全一致技法。",
        "presentation": {
            "explanation": "近代日本歌曲の父・山田耕筰（やまだこうさく）が確立した「日本語と旋律の融合理論」を学びます。\n\n【山田耕筰の画期的作曲技法】\n１．詩の朗読アクセントから旋律を紡ぐ：\n　・北原白秋や三木露風の詩を徹底的に音読し、日本語本来の高低アクセントと句読のリズムに完全に合致する旋律線を作曲。\n２．代表作の分析：\n　・『赤とんぼ』（三木露風作詞）：「夕焼小焼の（ゆ／うやけこやけの）」に見る完璧な高低アクセントの旋律化。\n　・『からたちの花』（北原白秋作詞）：「からたちの花が咲いたよ」における促音・子音の劇的配置。\n３．交響曲とオペラの開拓：日本人初の本格的交響曲『かちどきと平和』、歌劇『黒船』を作曲。",
            "examples": [
                {
                    "target": "山田耕筰は日本語の自然な高低アクセントと詩のリズムを旋律に忠実に反映させ、近代日本歌曲の金字塔を打ち立てました。",
                    "reading": "やまだこうさくは にほんごの しぜんな こうていアクセントと しの リズムを せんりつに ちゅうじつに はんえいさせ、きんだいにほんかきょくの きんじとうを うちたてました。",
                    "translation": "Kosaku Yamada faithfully reflected the natural pitch accents and poetic rhythm of Japanese in his melodies, establishing the monument of modern Japanese art songs."
                },
                {
                    "target": "名曲『からたちの花』では、北原白秋の詩の微細な感情の起伏と日本語の語感が完璧な旋律美として結晶しています。",
                    "reading": "めいきょく『からたちのはな』では、きたはらはくしゅうの しの びさいな かんじょうの きふくと にほんごの ごかんが かんぺきな せんりつびとして けっしょうしています。",
                    "translation": "In the famous song 'Karatachi no Hana', the subtle emotional ups and downs of Hakushu Kitahara's poetry and Japanese linguistic feel crystallize into perfect melodic beauty."
                },
                {
                    "target": "彼は西洋の音楽理論を模倣するだけでなく、日本語の韻律論に立脚した独自の歌曲作曲法を体系化しました。",
                    "reading": "かれは せいようの おんがくりろんを もほうするだけでなく、にほんごの いんりつろんに りっきゃくした どくじの かきょくさっきょくほうを たいけいかしました。",
                    "translation": "Rather than merely imitating Western music theory, he systematized a unique method of song composition grounded in Japanese prosody."
                },
                {
                    "target": "『赤とんぼ』の旋律が日本人の琴線に深く触れるのは、日本語本来の音調が一切の無理なく歌われているからです。",
                    "reading": "『あかとんぼ』の せんりつが にほんじんの きんせんに ふかく ふれるのは、にほんごほんらいの おんちょうが いっさいの むりなく うたわれているからです。",
                    "translation": "The reason the melody of 'Akatombo' touches the heartstrings of Japanese people deeply is that the original intonation of Japanese is sung entirely without artificial strain."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本近代声楽・オペラと日本語 prosody の音楽的調和（第2部）における国際法規範に厳密に合致する公式外交記述を選択してください（問27.2.1）。",
                    "options": [
                        "山田耕筰は、日本語の持つ高低アクセントと自然なイントネーションを西洋の旋律線と精緻に一致させる画期的な歌曲作曲技法を創始しました。",
                        "国際条約法に反する法的誤謬（27.2.1）",
                        "主権平等の原則を逸脱した不適当な記述（27.2.2）",
                        "外交慣例に悖る修辞的欠陥文（27.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】山田耕筰の日本語アクセント歌唱理論、團伊玖磨のオペラ『夕鶴』、新国立劇場のオペラ制作と発声法（第2部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本近代声楽・オペラと日本語 prosody の音楽的調和（第2部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習27.2）。",
                    "options": [
                        "團伊玖磨のオペラ『夕鶴』におけるヒロイン・つうのアリア「私の大事な与ひょう」は、日本の民話的情念と華麗な管弦楽法が見事に調和した不朽の名作です。",
                        "対立を無用に煽る不見識な声明文（27.2.x）",
                        "法的拘束力のない不完全な折衝文（27.2.y）",
                        "条約の留保条件を乱用した無効文（27.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u27-l2）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "新国立劇場のオペラ劇場は、世界トップレベルの音響設計と舞台機構を備え、国内外の最高峰のオペラ・バレエ公演を年間を通じて発信しています。",
                        "安全保障理事会決議の権能を無視した記述（27.2.a）",
                        "平和維持部隊の法的根拠を欠く文（27.2.b）",
                        "国際司法裁判所の判例に背く記述（27.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本近代声楽・オペラと日本語 prosody の音楽的調和（第2部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試27-2）。",
                    "options": [
                        "細川俊夫の現代オペラは、静寂と音の生成消滅のプロセスを能楽の霊的空間として捉え、欧州のオペラ界において極めて高い評価を確立しています。",
                        "条約履行義務を軽視した無効文（27.2.m）",
                        "全権委任状の要件を欠く不備文（27.2.n）",
                        "寄託手続きの誤謬文（27.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u27-l2）の主要外交用語を入力してください（「山田耕筰」）：",
                    "acceptedAnswers": [
                        "山田耕筰",
                        "山田耕筰は、"
                    ],
                    "explanation": "正解の外交用語は「山田耕筰」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u27-l3": {
        "id": "ja-u27-l3",
        "subject": "japanese",
        "unit": 27,
        "lessonNumber": 3,
        "title": "團伊玖磨の歌劇『夕鶴』（1952年）：民話のオペラ化と抒情的主題",
        "level": "C1",
        "objective": "團伊玖磨（1924-2001）の国民的オペラ『夕鶴』（木下順二戯曲）、鶴の恩返し伝説、近代資本主義と無償の愛の劇的相克。",
        "presentation": {
            "explanation": "日本オペラ史上最も上演回数が多く、国際的にも高く評価されている團伊玖磨（だんいくま）の『夕鶴（ゆうづる）』を学びます。\n\n【歌劇『夕鶴』の劇的構造】\n１．原作：木下順二の戯曲（民話「鶴の恩返し」に基づく）。\n２．登場人物と対立構図：\n　・つう（ソプラノ）：命を削って美しい布（千羽織）を織る鶴の化身（無償の愛・自然）。\n　・与ひょう（テノール）：純朴だが金の魔力に誘惑される夫。\n　・運ず・惣ど：金を渇望する近代資本主義と強欲の象徴。\n３．音楽的達成：\n　・ペンタトニック（五音音階）の素朴な美しさと、西洋後期ロマン派の重厚なオーケストレーションが見事に融合した奇跡のスコア。",
            "examples": [
                {
                    "target": "團伊玖磨の歌劇『夕鶴』は、民話「鶴の恩返し」を題材に、近代の金銭欲と純粋な愛の破滅的相克を描いた日本オペラの最高峰です。",
                    "reading": "だんいくまの かげき『ゆうづる』は、みんわ「つるのおんがえし」を だいざいに、きんだいの きんせんよくと じゅんすいな あいの はめつてきそうこくを えがいた にほんオペラの さいこうほうです。",
                    "translation": "Ikuma Dan's opera 'Yuzuru', taking the folk tale 'The Crane's Return of a Favor' as its subject, is the pinnacle of Japanese opera depicting the ruinous conflict between modern greed and pure love."
                },
                {
                    "target": "ヒロインの「つう」が歌うアリア「私の大事な与ひょう」は、切なくも崇高な抒情性に満ちた名曲です。",
                    "reading": "ヒロインの「つう」が うたう アリア「わたしの だいじな よひょう」は、せつなくも すうこうな じょじょうせいに みちた めいきょくです。",
                    "translation": "The aria 'My Precious Yohyo' sung by the heroine Tsu is a masterpiece filled with poignant yet sublime lyrical beauty."
                },
                {
                    "target": "日本古来の五音音階の旋律と西洋近代管弦楽法の見事な結合により、言語の壁を超えて世界各国で上演され続けています。",
                    "reading": "にほんこらいの ごおんおんかいの せんりつと せいようきんだいかんげんがくほうの みごとな けつごうにより、げんごの かべを こえて せかいかっこくで じょうえんされつづけています。",
                    "translation": "Through the magnificent union of traditional Japanese pentatonic melody and modern Western orchestration, it continues to be staged in countries worldwide transcending language barriers."
                },
                {
                    "target": "姿を見られた「つう」が空へと去っていく幕切れは、自然と人間の不可逆的な断絶を告げる深い悲哀を残します。",
                    "reading": "すがたを みられた「つう」が そらへと さっていく まくぎれは、しぜんと にんげんの ふかぎゃくてきな だんぜつを つげる ふかい ひあいをお のこします。",
                    "translation": "The finale in which Tsu, whose true form was seen, departs into the sky leaves profound sorrow heralding the irreversible rupture between nature and humanity."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本近代声楽・オペラと日本語 prosody の音楽的調和（第3部）における国際法規範に厳密に合致する公式外交記述を選択してください（問27.3.1）。",
                    "options": [
                        "山田耕筰は、日本語の持つ高低アクセントと自然なイントネーションを西洋の旋律線と精緻に一致させる画期的な歌曲作曲技法を創始しました。",
                        "国際条約法に反する法的誤謬（27.3.1）",
                        "主権平等の原則を逸脱した不適当な記述（27.3.2）",
                        "外交慣例に悖る修辞的欠陥文（27.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】山田耕筰の日本語アクセント歌唱理論、團伊玖磨のオペラ『夕鶴』、新国立劇場のオペラ制作と発声法（第3部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本近代声楽・オペラと日本語 prosody の音楽的調和（第3部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習27.3）。",
                    "options": [
                        "團伊玖磨のオペラ『夕鶴』におけるヒロイン・つうのアリア「私の大事な与ひょう」は、日本の民話的情念と華麗な管弦楽法が見事に調和した不朽の名作です。",
                        "対立を無用に煽る不見識な声明文（27.3.x）",
                        "法的拘束力のない不完全な折衝文（27.3.y）",
                        "条約の留保条件を乱用した無効文（27.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u27-l3）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "新国立劇場のオペラ劇場は、世界トップレベルの音響設計と舞台機構を備え、国内外の最高峰のオペラ・バレエ公演を年間を通じて発信しています。",
                        "安全保障理事会決議の権能を無視した記述（27.3.a）",
                        "平和維持部隊の法的根拠を欠く文（27.3.b）",
                        "国際司法裁判所の判例に背く記述（27.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本近代声楽・オペラと日本語 prosody の音楽的調和（第3部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試27-3）。",
                    "options": [
                        "細川俊夫の現代オペラは、静寂と音の生成消滅のプロセスを能楽の霊的空間として捉え、欧州のオペラ界において極めて高い評価を確立しています。",
                        "条約履行義務を軽視した無効文（27.3.m）",
                        "全権委任状の要件を欠く不備文（27.3.n）",
                        "寄託手続きの誤謬文（27.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u27-l3）の主要外交用語を入力してください（「山田耕筰」）：",
                    "acceptedAnswers": [
                        "山田耕筰",
                        "山田耕筰は、"
                    ],
                    "explanation": "正解の外交用語は「山田耕筰」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u27-l4": {
        "id": "ja-u27-l4",
        "subject": "japanese",
        "unit": 27,
        "lessonNumber": 4,
        "title": "三木稔・黛敏郎らの邦楽器協奏オペラと現代日本語発声の探求",
        "level": "C1",
        "objective": "三木稔（『春琴抄』『源氏物語』）の邦楽器オーケストラ、黛敏郎（『金閣寺』）、現代日本語オペラにおける新しい発声理論。",
        "presentation": {
            "explanation": "戦後日本の前衛作曲家たちが挑んだ「邦楽器と西洋オペラの劇的統合」と現代日本語歌唱を学びます。\n\n【戦後日本オペラの革新者たち】\n１．三木稔（みきみのる：1930-2012）：\n　・日本音楽集団を創設。伝統邦楽器のみによるオーケストラを編成し、谷崎潤一郎原作のオペラ『春琴抄（しゅんきんしょう）』や『源氏物語』を作曲。イギリスのイングリッシュ・ナショナル・オペラ等で世界初演。\n２．黛敏郎（まゆずみとしろう：1929-1997）：\n　・三島由紀夫原作のオペラ『金閣寺（Kinkakuji）』（1976年ベルリン・ドイツ・オペラ委嘱初演）。仏教の声明（しょうみょう）音響と十二音技法を融合。\n３．現代日本語発声の革新：\n　・語りのリズム、能の謡（うたい）の発声、現代詩のプロソディを取り入れた新しい日本語歌唱法の開拓。",
            "examples": [
                {
                    "target": "三木稔は西洋楽器を用いず邦楽器オーケストラによってオペラ『春琴抄』を作曲し、国際的に極めて高い評価を獲得しました。",
                    "reading": "みきみのるは せいようがっきを もちいず ほうがっきオーケストラによって オペラ『しゅんきんしょう』を さっきょくし、こくさいてきに きわめて たかい ひょうかを かくとくしました。",
                    "translation": "Minoru Miki composed the opera 'Shunkinsho' using a traditional Japanese instrument orchestra without Western instruments, winning extremely high international acclaim."
                },
                {
                    "target": "黛敏郎のオペラ『金閣寺』は、仏教の声明の響きと現代無調音楽を融合させ、三島由紀夫の美の観念を劇的に舞台化しました。",
                    "reading": "まゆずみとしろうの オペラ『きんかくじ』は、ぶっきょうの しょうみょうの ひびきと げんだいむちょうおんがくを ゆうごうさせ、みしまゆきおの びの かんねんを げきてきに ぶたいかしました。",
                    "translation": "Toshiro Mayuzumi's opera 'The Temple of the Golden Pavilion' fused Buddhist Shomyo chant acoustics with modern atonal music, dramatically staging Yukio Mishima's concept of beauty."
                },
                {
                    "target": "能の謡（うたい）の力強い胴声発声を現代オペラに取り入れることで、日本語の持つ強烈な劇的エネルギーが解放されました。",
                    "reading": "のうの うたいの ちからづよい どうごえはっせいを げんだいオペラに とりいれることで、にほんごの もつ きょうれつな げきてきエネルギーが かいほうされました。",
                    "translation": "By incorporating the powerful torso vocalization of Noh chanting into contemporary opera, the intense dramatic energy possessed by the Japanese language was unleashed."
                },
                {
                    "target": "言語の持つ固有の音響特性に深く根ざしたオペラ創作こそが、真の文化的多様性を拓く鍵となります。",
                    "reading": "げんごの もつ こゆうの おんきょうとくせいに ふかく ねざした オペラそうさくこそが、しんの ぶんかてきたようせいを ひらく かぎと なります。",
                    "translation": "Opera creation deeply rooted in the intrinsic acoustic characteristics possessed by a language is the very key to unlocking genuine cultural diversity."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本近代声楽・オペラと日本語 prosody の音楽的調和（第4部）における国際法規範に厳密に合致する公式外交記述を選択してください（問27.4.1）。",
                    "options": [
                        "山田耕筰は、日本語の持つ高低アクセントと自然なイントネーションを西洋の旋律線と精緻に一致させる画期的な歌曲作曲技法を創始しました。",
                        "国際条約法に反する法的誤謬（27.4.1）",
                        "主権平等の原則を逸脱した不適当な記述（27.4.2）",
                        "外交慣例に悖る修辞的欠陥文（27.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】山田耕筰の日本語アクセント歌唱理論、團伊玖磨のオペラ『夕鶴』、新国立劇場のオペラ制作と発声法（第4部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本近代声楽・オペラと日本語 prosody の音楽的調和（第4部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習27.4）。",
                    "options": [
                        "團伊玖磨のオペラ『夕鶴』におけるヒロイン・つうのアリア「私の大事な与ひょう」は、日本の民話的情念と華麗な管弦楽法が見事に調和した不朽の名作です。",
                        "対立を無用に煽る不見識な声明文（27.4.x）",
                        "法的拘束力のない不完全な折衝文（27.4.y）",
                        "条約の留保条件を乱用した無効文（27.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u27-l4）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "新国立劇場のオペラ劇場は、世界トップレベルの音響設計と舞台機構を備え、国内外の最高峰のオペラ・バレエ公演を年間を通じて発信しています。",
                        "安全保障理事会決議の権能を無視した記述（27.4.a）",
                        "平和維持部隊の法的根拠を欠く文（27.4.b）",
                        "国際司法裁判所の判例に背く記述（27.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本近代声楽・オペラと日本語 prosody の音楽的調和（第4部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試27-4）。",
                    "options": [
                        "細川俊夫の現代オペラは、静寂と音の生成消滅のプロセスを能楽の霊的空間として捉え、欧州のオペラ界において極めて高い評価を確立しています。",
                        "条約履行義務を軽視した無効文（27.4.m）",
                        "全権委任状の要件を欠く不備文（27.4.n）",
                        "寄託手続きの誤謬文（27.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u27-l4）の主要外交用語を入力してください（「山田耕筰」）：",
                    "acceptedAnswers": [
                        "山田耕筰",
                        "山田耕筰は、"
                    ],
                    "explanation": "正解の外交用語は「山田耕筰」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u27-l5": {
        "id": "ja-u27-l5",
        "subject": "japanese",
        "unit": 27,
        "lessonNumber": 5,
        "title": "新国立劇場におけるオペラ制作と現代声楽における日本語詩歌の解釈",
        "level": "C1",
        "objective": "新国立劇場（NNTT）のオペラ制作、現代日本の声楽家による詩歌（和歌・短歌・現代詩）の解釈技法と舞台表現。",
        "presentation": {
            "explanation": "日本の現代オペラ・声楽の最前線である新国立劇場（東京・初台）の制作現場と、詩歌の歌唱解釈技法を学びます。\n\n【新国立劇場の役割と現代オペラ委嘱】\n・1997年開場。日本最高峰のオペラ専用劇場として、古典西洋名作の上演とともに、日本人作曲家による新作オペラ（細川俊夫、西村朗、三宅榛名ら）の継続的委嘱・世界初演を主導。\n\n【日本語詩歌の歌唱解釈（Diction & Prosody）】\n１．母音の純粋性と子音の立ち上がり：無声化母音（「す」「し」の母音脱落）の適切な処理。\n２．和歌・俳句の「五七五七七」のリズム感を西洋拍子の中でいかに自然に呼吸させるか。\n３．詩人の内面風景と作曲家の意図を統合する音楽的ディクション（歌唱発音）の厳密な訓練。",
            "examples": [
                {
                    "target": "新国立劇場は、日本人作曲家による現代オペラの委嘱初演を積極的に推進し、日本語声楽芸術の発展を牽引しています。",
                    "reading": "しんこくりつげきじょうは、にほんじんさっきょくかに よる げんだいオペラの いしょくしょえんを せっきょくてきに すいしんし、にほんごせいがくげいじゅつの はってんを けんいんしています。",
                    "translation": "The New National Theatre, Tokyo actively promotes commissioned world premieres of contemporary operas by Japanese composers, spearheading the advancement of Japanese vocal art."
                },
                {
                    "target": "声楽家は詩の持つ音数律やアクセントを深く理解し、母音の純度と子音の明瞭度を極限まで磨き上げる必要があります。",
                    "reading": "せいがくかは しの もつ おんすうりつや アクセントを ふかく りかいし、ぼいんの じゅんどと しいんの めいりょうどを きょくげんまで みがきあげる ひつようが あります。",
                    "translation": "Vocalists must deeply understand the syllabic meter and accents of poetry, polishing vowel purity and consonant clarity to the ultimate degree."
                },
                {
                    "target": "細川俊夫のオペラ『松風』は、能の幽玄世界を微細な息の音と精妙な管弦楽で現代声楽へと昇華させた傑作です。",
                    "reading": "ほそかわとしおの オペラ『まつかぜ』は、のうの ゆうげんせかいを びさいな いきの おとと せいみょうな かんげんがくで げんだいせいがくへと しょうかさせた めいさくです。",
                    "translation": "Toshio Hosokawa's opera 'Matsukaze' is a masterpiece that sublimated the yugen world of Noh into contemporary vocal music through microtonal breath sounds and subtle orchestration."
                },
                {
                    "target": "日本語の言葉一つひとつに命を吹き込み、聴衆の心へダイレクトに届けるディクションの確立が不可欠です。",
                    "reading": "にほんごの ことばひとつひとつに いのちを ふきこみ、ちょうしゅうの こころへ ダイレクトに とどける ディクションの かくりつが ふかけつです。",
                    "translation": "Establishing diction that breathes life into each and every Japanese word and delivers it directly to the hearts of listeners is indispensable."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本近代声楽・オペラと日本語 prosody の音楽的調和（第5部）における国際法規範に厳密に合致する公式外交記述を選択してください（問27.5.1）。",
                    "options": [
                        "山田耕筰は、日本語の持つ高低アクセントと自然なイントネーションを西洋の旋律線と精緻に一致させる画期的な歌曲作曲技法を創始しました。",
                        "国際条約法に反する法的誤謬（27.5.1）",
                        "主権平等の原則を逸脱した不適当な記述（27.5.2）",
                        "外交慣例に悖る修辞的欠陥文（27.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】山田耕筰の日本語アクセント歌唱理論、團伊玖磨のオペラ『夕鶴』、新国立劇場のオペラ制作と発声法（第5部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本近代声楽・オペラと日本語 prosody の音楽的調和（第5部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習27.5）。",
                    "options": [
                        "團伊玖磨のオペラ『夕鶴』におけるヒロイン・つうのアリア「私の大事な与ひょう」は、日本の民話的情念と華麗な管弦楽法が見事に調和した不朽の名作です。",
                        "対立を無用に煽る不見識な声明文（27.5.x）",
                        "法的拘束力のない不完全な折衝文（27.5.y）",
                        "条約の留保条件を乱用した無効文（27.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u27-l5）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "新国立劇場のオペラ劇場は、世界トップレベルの音響設計と舞台機構を備え、国内外の最高峰のオペラ・バレエ公演を年間を通じて発信しています。",
                        "安全保障理事会決議の権能を無視した記述（27.5.a）",
                        "平和維持部隊の法的根拠を欠く文（27.5.b）",
                        "国際司法裁判所の判例に背く記述（27.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本近代声楽・オペラと日本語 prosody の音楽的調和（第5部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試27-5）。",
                    "options": [
                        "細川俊夫の現代オペラは、静寂と音の生成消滅のプロセスを能楽の霊的空間として捉え、欧州のオペラ界において極めて高い評価を確立しています。",
                        "条約履行義務を軽視した無効文（27.5.m）",
                        "全権委任状の要件を欠く不備文（27.5.n）",
                        "寄託手続きの誤謬文（27.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u27-l5）の主要外交用語を入力してください（「山田耕筰」）：",
                    "acceptedAnswers": [
                        "山田耕筰",
                        "山田耕筰は、"
                    ],
                    "explanation": "正解の外交用語は「山田耕筰」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u28-l1": {
        "id": "ja-u28-l1",
        "subject": "japanese",
        "unit": 28,
        "lessonNumber": 1,
        "title": "丹下健三と国立代々木競技場：伝統的曲面と吊り屋根構造の融合",
        "level": "C1",
        "objective": "丹下健三（1913-2005・1987年プリツカー賞）の国立代々木競技場（1964年東京五輪）、日本の伝統的屋根曲面と構造力学の金字塔。",
        "presentation": {
            "explanation": "世界の「TANGE」として近代建築史に不滅の足跡を刻んだ丹下健三（たんげけんぞう）の建築哲学を学びます。\n\n【国立代々木競技場（1964年）の構造的奇跡】\n１．吊り屋根構造（Suspension Structure）：\n　・二本の主柱から張り渡された巨大な高張力ケーブルによって屋根全体を吊り下げ、内部に柱が一本もない広大な無柱空間を実現。\n２．日本の伝統美の現代的昇華：\n　・神社の千木（ちぎ）や勝男木、伊勢神宮の屋根曲面を連想させる流麗な双曲放物面（HPシェル）。\n３．「伝統は創造の母胎でなければならない。伝統そのものを模倣してはならない」という丹下の名言。",
            "examples": [
                {
                    "target": "丹下健三設計の国立代々木競技場は、吊り屋根構造の力学的合理性と日本の神社建築の流麗な曲面美を見事に融合させました。",
                    "reading": "たんげけんぞうせっけいの こくりつよよぎきょうぎじょうは、つりやねこうぞうの りきがくてきごうりせいと にほんの じんじゃけんちくの りゅうれいな きょくめんびを みごとに ゆうごうさせました。",
                    "translation": "The National Yoyogi Gymnasium designed by Kenzo Tange splendidly fused the mechanical rationality of a suspension roof structure with the flowing curved beauty of Japanese shrine architecture."
                },
                {
                    "target": "二本の主支柱から懸架された高張力ケーブルにより、内部に一切の柱を持たない壮大な空間が創出されました。",
                    "reading": "にほんの ししちゅうから けんかされた こうちょうりょくケーブルにより、ないぶに いっさいの はしらを もたない そうだいな くうかんが そうしゅつされました。",
                    "translation": "Through high-tensile cables suspended from two main masts, a magnificent space without a single interior pillar was created."
                },
                {
                    "target": "1987年に日本人として初めて建築界のノーベル賞と称されるプリツカー賞を受賞し、日本近代建築の世界的地位を確立しました。",
                    "reading": "1987ねんに にほんじんとして はじめて けんちくかいの ノーベルしょうと しょうされる プリツカーしょうを じゅしょうし、にほんきんだいけんちくの せかいてきちいを かくりつしました。",
                    "translation": "In 1987, he became the first Japanese to receive the Pritzker Prize, acclaimed as the Nobel Prize of architecture, establishing the global status of modern Japanese architecture."
                },
                {
                    "target": "広島平和記念資料館に見るピロティ構造は、原爆ドームを軸線上に望む空間的祈りのモニュメントです。",
                    "reading": "ひろしまへいわきねんしりょうかんに みる ピロティこうぞうは、げんばくドームを じくせんじょうに のぞむ くうかんてきいのりの モニュメントです。",
                    "translation": "The pilotis structure seen in the Hiroshima Peace Memorial Museum is a spatial monument of prayer commanding a view of the Atomic Bomb Dome along its axis."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本の現代建築・メタボリズムとプリツカー賞建築家（第1部）における国際法規範に厳密に合致する公式外交記述を選択してください（問28.1.1）。",
                    "options": [
                        "丹下健三が設計した国立代々木競技場は、吊り橋の原理を応用したダイナミックなサスペンション構造によって、柱のない雄大な内部空間と彫刻的な外観を実現しました。",
                        "国際条約法に反する法的誤謬（28.1.1）",
                        "主権平等の原則を逸脱した不適当な記述（28.1.2）",
                        "外交慣例に悖る修辞的欠陥文（28.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】丹下健三（代々木体育館）、安藤忠雄（打放しコンクリートと光）、隈研吾（木材と負ける建築）、プリツカー賞建築論（第1部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本の現代建築・メタボリズムとプリツカー賞建築家（第1部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習28.1）。",
                    "options": [
                        "安藤忠雄は、極限まで研ぎ澄まされた打放しコンクリートの壁面に一筋のスリットから差し込む光を通じて、空間に神聖な静寂と劇的な緊張感を与えました。",
                        "対立を無用に煽る不見識な声明文（28.1.x）",
                        "法的拘束力のない不完全な折衝文（28.1.y）",
                        "条約の留保条件を乱用した無効文（28.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u28-l1）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "隈研吾の「負ける建築」の理念は、周囲の景観を威圧する記念碑的建築を退け、地元の木材を細かくルーバー状に織り成すことで自然と建築を融和させます。",
                        "安全保障理事会決議の権能を無視した記述（28.1.a）",
                        "平和維持部隊の法的根拠を欠く文（28.1.b）",
                        "国際司法裁判所の判例に背く記述（28.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本の現代建築・メタボリズムとプリツカー賞建築家（第1部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試28-1）。",
                    "options": [
                        "日本の建築家たちが世界のプリツカー賞を多数獲得している背景には、伝統的な木造架構技術の空間的柔軟性と先端構造工学の奇跡的な統合が存在します。",
                        "条約履行義務を軽視した無効文（28.1.m）",
                        "全権委任状の要件を欠く不備文（28.1.n）",
                        "寄託手続きの誤謬文（28.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u28-l1）の主要外交用語を入力してください（「丹下健三」）：",
                    "acceptedAnswers": [
                        "丹下健三",
                        "丹下健三が設"
                    ],
                    "explanation": "正解の外交用語は「丹下健三」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u28-l2": {
        "id": "ja-u28-l2",
        "subject": "japanese",
        "unit": 28,
        "lessonNumber": 2,
        "title": "メタボリズム運動（黒川紀章・菊竹清訓）：カプセル建築と都市の有機的更新",
        "level": "C1",
        "objective": "1960年代に日本から発信された世界的前衛建築運動「メタボリズム（新陳代謝）」、黒川紀章『中銀カプセルタワービル』の都市論。",
        "presentation": {
            "explanation": "非西洋圏から初めて発信された世界的前衛建築思潮「メタボリズム（Metabolism：新陳代謝）」を学びます。\n\n【メタボリズムの核心理念】\n・1960年東京世界デザイン会議で発表（黒川紀章、菊竹清訓、槇文彦、大高正人、川添登、栄久庵憲司ら）。\n・建築や都市を「固定した静的モニュメント」ではなく、「生物のように成長・増殖・新陳代謝（部品交換）する動的有機体」として捉える思想。\n\n【中銀カプセルタワービル（黒川紀章設計・1972年銀座）】\n・二本の鉄骨コンクリート製コアシャフトに、工場生産された140個の脱着可能住居カプセルをボルトで固定。古くなったカプセルを25年ごとに交換・更新する構想。",
            "examples": [
                {
                    "target": "1960年に日本で誕生したメタボリズム運動は、都市と建築を生きた有機体のように成長・更新させる革新的な思想でした。",
                    "reading": "1960ねんに にほんで たんじょうした メタボリズムうんどうは、としと けんちくを いきた ゆうきたいのように せいちょう・こうしんさせる かっきてきな しそうでした。",
                    "translation": "The Metabolism movement born in Japan in 1960 was an innovative philosophy envisioning cities and architecture growing and renewing like living organisms."
                },
                {
                    "target": "黒川紀章の中銀カプセルタワービルは、交換可能な居住カプセルをメガストラクチャーに連結したメタボリズムの象徴的建築です。",
                    "reading": "くろかわきしょうの なかぎんカプセルタワービルは、こうかんかのうな きょじゅうカプセルを メガストラクチャーに れんけつした メタボリズムの しょうちょうてきけんちくです。",
                    "translation": "Kisho Kurokawa's Nakagin Capsule Tower Building is the iconic architecture of Metabolism connecting replaceable living capsules to a megastructure."
                },
                {
                    "target": "菊竹清訓が提唱した「海上都市」構想は、陸地の制約を超えて海上に人工地盤を拡張する未来都市の先駆的ビジョンでした。",
                    "reading": "きくたけきよのりが ていしょうした「かいじょうとし」こうそうは、りくちの せいやくを こえて かいじょうに じんこうじばんを かくちょうする みらいとしの せんくてきビジョンでした。",
                    "translation": "Kiyonori Kikutake's proposed 'Marine City' concept was a pioneering vision of future cities expanding artificial floating ground over oceans beyond terrestrial constraints."
                },
                {
                    "target": "個別の要素をプラグイン（着脱）可能にするシステム思考は、現代のモジュール建築や循環型社会の先駆けとして再評価されています。",
                    "reading": "こべつの ようそを プラグイン（ちゃくだつ）かのうにする システムしこうは、げんだいの モジュールけんちくや じゅんかんがたしゃかいの さきがけとして さいひょうかされています。",
                    "translation": "The systems thinking enabling individual elements to be plugged in and detached is being reevaluated as a forerunner of contemporary modular architecture and circular societies."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本の現代建築・メタボリズムとプリツカー賞建築家（第2部）における国際法規範に厳密に合致する公式外交記述を選択してください（問28.2.1）。",
                    "options": [
                        "丹下健三が設計した国立代々木競技場は、吊り橋の原理を応用したダイナミックなサスペンション構造によって、柱のない雄大な内部空間と彫刻的な外観を実現しました。",
                        "国際条約法に反する法的誤謬（28.2.1）",
                        "主権平等の原則を逸脱した不適当な記述（28.2.2）",
                        "外交慣例に悖る修辞的欠陥文（28.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】丹下健三（代々木体育館）、安藤忠雄（打放しコンクリートと光）、隈研吾（木材と負ける建築）、プリツカー賞建築論（第2部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本の現代建築・メタボリズムとプリツカー賞建築家（第2部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習28.2）。",
                    "options": [
                        "安藤忠雄は、極限まで研ぎ澄まされた打放しコンクリートの壁面に一筋のスリットから差し込む光を通じて、空間に神聖な静寂と劇的な緊張感を与えました。",
                        "対立を無用に煽る不見識な声明文（28.2.x）",
                        "法的拘束力のない不完全な折衝文（28.2.y）",
                        "条約の留保条件を乱用した無効文（28.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u28-l2）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "隈研吾の「負ける建築」の理念は、周囲の景観を威圧する記念碑的建築を退け、地元の木材を細かくルーバー状に織り成すことで自然と建築を融和させます。",
                        "安全保障理事会決議の権能を無視した記述（28.2.a）",
                        "平和維持部隊の法的根拠を欠く文（28.2.b）",
                        "国際司法裁判所の判例に背く記述（28.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本の現代建築・メタボリズムとプリツカー賞建築家（第2部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試28-2）。",
                    "options": [
                        "日本の建築家たちが世界のプリツカー賞を多数獲得している背景には、伝統的な木造架構技術の空間的柔軟性と先端構造工学の奇跡的な統合が存在します。",
                        "条約履行義務を軽視した無効文（28.2.m）",
                        "全権委任状の要件を欠く不備文（28.2.n）",
                        "寄託手続きの誤謬文（28.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u28-l2）の主要外交用語を入力してください（「丹下健三」）：",
                    "acceptedAnswers": [
                        "丹下健三",
                        "丹下健三が設"
                    ],
                    "explanation": "正解の外交用語は「丹下健三」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u28-l3": {
        "id": "ja-u28-l3",
        "subject": "japanese",
        "unit": 28,
        "lessonNumber": 3,
        "title": "安藤忠雄の空間論：打放しコンクリート・幾何学・光と影の現象学",
        "level": "C1",
        "objective": "安藤忠雄（1941-・1995年プリツカー賞）の建築哲学（『光の教会』『住吉の長屋』）、打放しコンクリート、自然光の劇的空間化。",
        "presentation": {
            "explanation": "独学で建築を学び世界の頂点を極めた安藤忠雄（あんどうただお）の現象学的空間美学を学びます。\n\n【安藤忠雄の建築言語】\n１．打放しコンクリート（Exposed Concrete）：\n　・シルクのように滑らかで緻密な質感。極限まで研ぎ澄まされたコンクリート壁が、光と影のキャンバスとなる。\n２．幾何学の純粋性：円、正方形、直方体の純粋な幾何学的骨格。\n３．自然の劇的貫入：\n　・『住吉の長屋』（1976年）：狭小住宅の中央に屋根のない中庭を配置し、雨や風、四季の厳しさと美しさをそのまま住空間に取り込む。\n　・『光の教会』（1989年）：暗闇の壁に刻まれた十字架のスリットから差し込む強烈な自然光が、祈りの空間を現出。",
            "examples": [
                {
                    "target": "安藤忠雄の『光の教会』は、暗闇のコンクリート壁に十字に穿たれたスリットから差し込む光によって崇高な祈りの空間を創出しました。",
                    "reading": "あんどうただおの『ひかりのきょうかい』は、くらやみの コンクリートかべに じゅうじに うがたれた スリットから さしこむ ひかりによって すうこうな いのりの くうかんを そうしゅつしました。",
                    "translation": "Tadao Ando's 'Church of the Light' created a sublime prayer space through light piercing from a cross-shaped slit pierced into a darkened concrete wall."
                },
                {
                    "target": "絹のように滑らかな打放しコンクリートの壁面は、時刻とともに刻々と表情を変える自然光の陰影を繊細に受け止めます。",
                    "reading": "きぬのように なめらかな うちっぱなしコンクリートの へきめんは、じこくとともに こっこくと ひょうじょうを かえる しぜんこうの いんえいを せんさいに うけとめます。",
                    "translation": "The exposed concrete walls smooth as silk delicately catch the shadows of natural light changing expressions moment by moment with the time of day."
                },
                {
                    "target": "『住吉の長屋』に見る中庭の設計は、自然の厳しさと美しさを日常の生活体験として直截に引き受けるラディカルな試みでした。",
                    "reading": "『すみよしのながや』に みる なかにわの せっけいは、しぜんの きびしさと うつくしさを にちじょうの せいかつたいけんとして ちょくせつに ひきうける ラディカルな こころみでした。",
                    "translation": "The courtyard design in 'Row House in Sumiyoshi' was a radical attempt to directly embrace nature's severity and beauty as daily living experience."
                },
                {
                    "target": "過剰な消費社会に対する批判として、素材の本質と光の純粋性に還元された彼の空間は世界中の人々を魅了しています。",
                    "reading": "かじょうな しょうひしゃかいに たいする ひはんとして、そざいの ほんしつと ひかりの じゅんすいせいに かんげんされた かれの くうかんは せかいじゅうの ひとびとを みりょうしています。",
                    "translation": "As a critique of excessive consumer society, his spaces reduced to material essence and pure light captivate people worldwide."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本の現代建築・メタボリズムとプリツカー賞建築家（第3部）における国際法規範に厳密に合致する公式外交記述を選択してください（問28.3.1）。",
                    "options": [
                        "丹下健三が設計した国立代々木競技場は、吊り橋の原理を応用したダイナミックなサスペンション構造によって、柱のない雄大な内部空間と彫刻的な外観を実現しました。",
                        "国際条約法に反する法的誤謬（28.3.1）",
                        "主権平等の原則を逸脱した不適当な記述（28.3.2）",
                        "外交慣例に悖る修辞的欠陥文（28.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】丹下健三（代々木体育館）、安藤忠雄（打放しコンクリートと光）、隈研吾（木材と負ける建築）、プリツカー賞建築論（第3部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本の現代建築・メタボリズムとプリツカー賞建築家（第3部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習28.3）。",
                    "options": [
                        "安藤忠雄は、極限まで研ぎ澄まされた打放しコンクリートの壁面に一筋のスリットから差し込む光を通じて、空間に神聖な静寂と劇的な緊張感を与えました。",
                        "対立を無用に煽る不見識な声明文（28.3.x）",
                        "法的拘束力のない不完全な折衝文（28.3.y）",
                        "条約の留保条件を乱用した無効文（28.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u28-l3）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "隈研吾の「負ける建築」の理念は、周囲の景観を威圧する記念碑的建築を退け、地元の木材を細かくルーバー状に織り成すことで自然と建築を融和させます。",
                        "安全保障理事会決議の権能を無視した記述（28.3.a）",
                        "平和維持部隊の法的根拠を欠く文（28.3.b）",
                        "国際司法裁判所の判例に背く記述（28.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本の現代建築・メタボリズムとプリツカー賞建築家（第3部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試28-3）。",
                    "options": [
                        "日本の建築家たちが世界のプリツカー賞を多数獲得している背景には、伝統的な木造架構技術の空間的柔軟性と先端構造工学の奇跡的な統合が存在します。",
                        "条約履行義務を軽視した無効文（28.3.m）",
                        "全権委任状の要件を欠く不備文（28.3.n）",
                        "寄託手続きの誤謬文（28.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u28-l3）の主要外交用語を入力してください（「丹下健三」）：",
                    "acceptedAnswers": [
                        "丹下健三",
                        "丹下健三が設"
                    ],
                    "explanation": "正解の外交用語は「丹下健三」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u28-l4": {
        "id": "ja-u28-l4",
        "subject": "japanese",
        "unit": 28,
        "lessonNumber": 4,
        "title": "伊東豊雄と妹島和世（SANAA）：透明性・流動性と境界の融解",
        "level": "C1",
        "objective": "伊東豊雄（2013年プリツカー賞）『せんだいメディアテーク』、SANAA（妹島和世＋西沢立衛・2010年プリツカー賞）の脱境界建築論。",
        "presentation": {
            "explanation": "21世紀の世界建築を牽引する伊東豊雄（いとうとよお）とSANAAの「流動性・透明性」の空間論を学びます。\n\n【伊東豊雄『せんだいメディアテーク』（2001年）】\n・海草のように揺らぐ13本のチューブ状鉄骨トラス柱と、薄い床スラブのみで構成。従来の「壁」による部屋の分節を解体し、光と情報が自由に循環する流動的バリアフリー空間を実現。\n\n【SANAA（妹島和世＋西沢立衛）の空間革命】\n・『金沢21世紀美術館』（2004年）、『ルーヴル・ランス』（フランス）：\n・薄いガラスの曲面外壁、中庭のランダムな配置によって、表と裏、内部と外部、建築と都市の境界が完全に融解（脱ヒエラルキーの空間）。",
            "examples": [
                {
                    "target": "伊東豊雄の『せんだいメディアテーク』は、揺らぐ樹木のようなチューブ構造によって従来の均質で閉鎖的な建築概念を覆しました。",
                    "reading": "いとうとよおの『せんだいメディアテーク』は、ゆらぐ じゅもくのような チューブこうぞうによって きそんの きんしつで へいさてきな けんちくがいねんを くつがえしました。",
                    "translation": "Toyo Ito's 'Sendai Mediatheque' overturned conventional homogeneous and enclosed architectural concepts through swaying tree-like tube structures."
                },
                {
                    "target": "SANAAが設計した金沢21世紀美術館は、円形のガラス建築により内外の境界を融解させ、誰もが自由に行き交う開かれた空間を現出させました。",
                    "reading": "SANAAが せっけいした かなざわにじゅういっせいきびじゅつかんは、えんけいの ガラスけんちくにより ないがいの きょうかいを ゆうかいさせ、だれもが じゆうに ゆきかう ひらかれた くうかんを げんしゅつさせました。",
                    "translation": "The 21st Century Museum of Contemporary Art, Kanazawa designed by SANAA melted boundaries between inside and outside through circular glass architecture, manifesting an open space where anyone freely mingles."
                },
                {
                    "target": "重力や物質の重さを感じさせない極薄の屋根と透明なガラススクリーンは、環境と建築のシームレスな統合を追求しています。",
                    "reading": "じゅうりょくや ぶっしつの おもさを かんじさせない ごくうすの やねと とうめいな ガラススクリーンは、かんきょうと けんちくの シームレスな とうごうを ついきゅうしています。",
                    "translation": "Ultra-thin roofs and transparent glass screens that defy gravity and material weight pursue seamless integration between environment and architecture."
                },
                {
                    "target": "人々の自発的な行動と偶発的な出会いを誘発するフレキシブルなプログラム配置が、現代公共空間の新たな指標となりました。",
                    "reading": "ひとびとの じはつてきな こうどうと ぐうはつてきな であいを ゆうはつする フレキシブルな プログラムはいちが、げんだいこうきょうくうかんの あらたな しひょうと なりました。",
                    "translation": "Flexible program layouts inducing people's spontaneous actions and serendipitous encounters have become new benchmarks for contemporary public spaces."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本の現代建築・メタボリズムとプリツカー賞建築家（第4部）における国際法規範に厳密に合致する公式外交記述を選択してください（問28.4.1）。",
                    "options": [
                        "丹下健三が設計した国立代々木競技場は、吊り橋の原理を応用したダイナミックなサスペンション構造によって、柱のない雄大な内部空間と彫刻的な外観を実現しました。",
                        "国際条約法に反する法的誤謬（28.4.1）",
                        "主権平等の原則を逸脱した不適当な記述（28.4.2）",
                        "外交慣例に悖る修辞的欠陥文（28.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】丹下健三（代々木体育館）、安藤忠雄（打放しコンクリートと光）、隈研吾（木材と負ける建築）、プリツカー賞建築論（第4部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本の現代建築・メタボリズムとプリツカー賞建築家（第4部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習28.4）。",
                    "options": [
                        "安藤忠雄は、極限まで研ぎ澄まされた打放しコンクリートの壁面に一筋のスリットから差し込む光を通じて、空間に神聖な静寂と劇的な緊張感を与えました。",
                        "対立を無用に煽る不見識な声明文（28.4.x）",
                        "法的拘束力のない不完全な折衝文（28.4.y）",
                        "条約の留保条件を乱用した無効文（28.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u28-l4）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "隈研吾の「負ける建築」の理念は、周囲の景観を威圧する記念碑的建築を退け、地元の木材を細かくルーバー状に織り成すことで自然と建築を融和させます。",
                        "安全保障理事会決議の権能を無視した記述（28.4.a）",
                        "平和維持部隊の法的根拠を欠く文（28.4.b）",
                        "国際司法裁判所の判例に背く記述（28.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本の現代建築・メタボリズムとプリツカー賞建築家（第4部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試28-4）。",
                    "options": [
                        "日本の建築家たちが世界のプリツカー賞を多数獲得している背景には、伝統的な木造架構技術の空間的柔軟性と先端構造工学の奇跡的な統合が存在します。",
                        "条約履行義務を軽視した無効文（28.4.m）",
                        "全権委任状の要件を欠く不備文（28.4.n）",
                        "寄託手続きの誤謬文（28.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u28-l4）の主要外交用語を入力してください（「丹下健三」）：",
                    "acceptedAnswers": [
                        "丹下健三",
                        "丹下健三が設"
                    ],
                    "explanation": "正解の外交用語は「丹下健三」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u28-l5": {
        "id": "ja-u28-l5",
        "subject": "japanese",
        "unit": 28,
        "lessonNumber": 5,
        "title": "隈研吾の「負ける建築」：地域産木材と微小ルーバーによる環境統合",
        "level": "C1",
        "objective": "隈研吾（1954-・国立競技場設計）の建築論『負ける建築』、木材・竹・和紙・石材の微小ルーバー化、環境への融即。",
        "presentation": {
            "explanation": "21世紀の環境調和型建築を代表する隈研吾（くまけんご）の「負ける建築」思想を学びます。\n\n【隈研吾の建築哲学「負ける建築」】\n１．モニュメントとしての自己主張を否定：\n　・20世紀型のコンクリートと鉄による威圧的な超高層建築（勝つ建築）を批判し、周辺の自然環境や街並みに寄り添い、自らを小さく消し去るような「負ける建築」を提唱。\n２．木材ルーバー（小径木）の粒子化：\n　・巨大な塊（マス）として建物を建てるのではなく、細い木材や竹、石材を「粒子（ルーバー）」に分解して並べることで、光と風を透過させる柔らかなファサードを形成。\n３．新国立競技場（杜のスタジアム）：全国47都道府県の地域産木材（スギ・カラマツ）を軒庇に採用。",
            "examples": [
                {
                    "target": "隈研吾の「負ける建築」思想は、自己主張する巨大なモニュメントを排し、地域素材を用いて環境に溶け込む建築を目指します。",
                    "reading": "くまけんごの「まけるけんちく」しそうは、じこしゅちょうする きょだいな モニュメントを はいし、ちいきそざいを もちいて かんきょうに とけこむ けんちくを めざします。",
                    "translation": "Kengo Kuma's 'Defeated Architecture' philosophy rejects self-assertive giant monuments, aiming for architecture that blends into the environment using local materials."
                },
                {
                    "target": "細い木材を組み合わせたルーバー（格子）は、木漏れ日のような柔らかな光と影を室内に投げかけます。",
                    "reading": "ほそい もくざいを くみあわせた ルーバー（こうし）は、こもれびのような やわらかな ひかりと かげを しつないに なげかけます。",
                    "translation": "Louvers combining slender timbers cast soft dappled light and shadow into interior spaces."
                },
                {
                    "target": "新国立競技場の軒庇には日本全国四十七都道府県のスギ材が使用され、「杜のスタジアム」として自然と共生しています。",
                    "reading": "しんこくりつきょうぎじょうの のきびさしには にほんぜんこく よんじゅうななとどうふけんの スギざいが しようされ、「もりのスタジアム」として しぜんと きょうせいしています。",
                    "translation": "Cedar timber from all forty-seven prefectures of Japan was used in the eaves of the Japan National Stadium, coexisting with nature as a 'Stadium in the Forest'."
                },
                {
                    "target": "コンクリートの塊を微小な自然素材の粒子へと分解することで、人間的なスケールと温もりが回復されます。",
                    "reading": "コンクリートの かたまりを びしょうな しぜんそざいの りゅうしへと ぶんかいすることで、にんげんてきな スケールと ぬくもりが かいふくされます。",
                    "translation": "By disintegrating concrete mass into microscopic particles of natural materials, human scale and warmth are restored."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本の現代建築・メタボリズムとプリツカー賞建築家（第5部）における国際法規範に厳密に合致する公式外交記述を選択してください（問28.5.1）。",
                    "options": [
                        "丹下健三が設計した国立代々木競技場は、吊り橋の原理を応用したダイナミックなサスペンション構造によって、柱のない雄大な内部空間と彫刻的な外観を実現しました。",
                        "国際条約法に反する法的誤謬（28.5.1）",
                        "主権平等の原則を逸脱した不適当な記述（28.5.2）",
                        "外交慣例に悖る修辞的欠陥文（28.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】丹下健三（代々木体育館）、安藤忠雄（打放しコンクリートと光）、隈研吾（木材と負ける建築）、プリツカー賞建築論（第5部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本の現代建築・メタボリズムとプリツカー賞建築家（第5部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習28.5）。",
                    "options": [
                        "安藤忠雄は、極限まで研ぎ澄まされた打放しコンクリートの壁面に一筋のスリットから差し込む光を通じて、空間に神聖な静寂と劇的な緊張感を与えました。",
                        "対立を無用に煽る不見識な声明文（28.5.x）",
                        "法的拘束力のない不完全な折衝文（28.5.y）",
                        "条約の留保条件を乱用した無効文（28.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u28-l5）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "隈研吾の「負ける建築」の理念は、周囲の景観を威圧する記念碑的建築を退け、地元の木材を細かくルーバー状に織り成すことで自然と建築を融和させます。",
                        "安全保障理事会決議の権能を無視した記述（28.5.a）",
                        "平和維持部隊の法的根拠を欠く文（28.5.b）",
                        "国際司法裁判所の判例に背く記述（28.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本の現代建築・メタボリズムとプリツカー賞建築家（第5部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試28-5）。",
                    "options": [
                        "日本の建築家たちが世界のプリツカー賞を多数獲得している背景には、伝統的な木造架構技術の空間的柔軟性と先端構造工学の奇跡的な統合が存在します。",
                        "条約履行義務を軽視した無効文（28.5.m）",
                        "全権委任状の要件を欠く不備文（28.5.n）",
                        "寄託手続きの誤謬文（28.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u28-l5）の主要外交用語を入力してください（「丹下健三」）：",
                    "acceptedAnswers": [
                        "丹下健三",
                        "丹下健三が設"
                    ],
                    "explanation": "正解の外交用語は「丹下健三」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u29-l1": {
        "id": "ja-u29-l1",
        "subject": "japanese",
        "unit": 29,
        "lessonNumber": 1,
        "title": "西田幾多郎の後期哲学：「絶対無の場所」における述語的論理の展開",
        "level": "C1",
        "objective": "西田幾多郎の後期代表作『場所的論理と宗教的世界観』、「絶対無の場所」、主客合一から自覚の超越的構造へ。",
        "presentation": {
            "explanation": "西田幾多郎の後期哲学における最高峰の形而上学「絶対無の場所（ぜったいむのばしょ）」を学びます。\n\n【絶対無の場所の論理的構造】\n・アリストテレスの主語的論理（基体・実体論）に対して、述語面を極限まで深めることによって見出される「無の場所」。\n・対象化されない包摂者：私たちが何かを「有る」または「無い」と認識するとき、その認識を成立させている究極の背景（場所）そのものは、決して対象として捉えられない「絶対無」です。\n・鏡の比喩：鏡は万物を映し出しますが、鏡そのものは色や形を持ちません（無）。一切の存在を生起させる根源的受容空間。",
            "examples": [
                {
                    "target": "西田幾多郎の後期哲学は、対象化し得ない根源的包摂者としての「絶対無の場所」において実在の真理を基礎づけました。",
                    "reading": "にしだきたろうの こうきてつがくは、たいしょうかしえない こんげんてきほうせつしゃとしての「ぜったいむのばしょ」において じつざいの しんりを きそづけました。",
                    "translation": "Kitaro Nishida's late philosophy grounded the truth of reality in the 'Place of Absolute Nothingness' as the primordial enveloper that cannot be objectified."
                },
                {
                    "target": "万物を映し出す鏡が無色透明であるように、絶対無はすべての存在を成立せしめる空虚にして充実した場所です。",
                    "reading": "ばんぶつを うつしだす かがみが むしょくとうめいであるように、ぜったいむは すべての そんざいを せいりつせしめる くうきょにして じゅうじつした ばしょです。",
                    "translation": "Just as a mirror reflecting myriad things is colorless and transparent, absolute nothingness is an empty yet replete place enabling all existence to arise."
                },
                {
                    "target": "主語として限定される個物は、述語的な絶対無の場所において初めて自己の真の個体性を自覚します。",
                    "reading": "しゅごとして げんていされる こぶつは、じゅつごてきな ぜったいむの ばしょにおいて はじめて じこの しんの こたいせいを じかくします。",
                    "translation": "Individual entities determined as subjects awaken to their own true individuality for the first time in the predicative place of absolute nothingness."
                },
                {
                    "target": "『場所的論理と宗教的世界観』は、西田が死の直前に書き遺した東西思想史上の不滅の金字塔です。",
                    "reading": "『ばしょてきろんりと しゅうきょうてきせかいかん』は、にしだが しの ちょくぜんに かきのこした とうざいしそうしじょうの ふめつの きんじとうです。",
                    "translation": "'The Logic of the Place of Nothingness and the Religious Worldview' is an immortal monument in East-West intellectual history left by Nishida shortly before his death."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】西田幾多郎の「絶対無の場所」と道元の「現成公案」（第1部）における国際法規範に厳密に合致する公式外交記述を選択してください（問29.1.1）。",
                    "options": [
                        "道元禅師は『現成公案』において「自己をならふといふは、自己をわするるなり。自己をわするるといふは、万法に証せらるるなり」と説き、主客合一の境地を提示しました。",
                        "国際条約法に反する法的誤謬（29.1.1）",
                        "主権平等の原則を逸脱した不適当な記述（29.1.2）",
                        "外交慣例に悖る修辞的欠陥文（29.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】西田幾多郎の「場所の論理」、道元禅師『正法眼蔵・現成公案』、西谷啓治『宗教とは何か』の哲学的思索（第1部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】西田幾多郎の「絶対無の場所」と道元の「現成公案」（第1部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習29.1）。",
                    "options": [
                        "西田幾多郎の後期哲学における「場所の論理」は、対象化し得ない根源的な「絶対無」の自己限定として、自己と世界が相互に形成し合う動的弁証法を明らかにしました。",
                        "対立を無用に煽る不見識な声明文（29.1.x）",
                        "法的拘束力のない不完全な折衝文（29.1.y）",
                        "条約の留保条件を乱用した無効文（29.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u29-l1）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "京都学派の西谷啓治は主著『宗教とは何か』において、近代ニヒリズムの極限としての空の立場から、西洋実存主義の袋小路を突破する新しい人間観を打ち立てました。",
                        "安全保障理事会決議の権能を無視した記述（29.1.a）",
                        "平和維持部隊の法的根拠を欠く文（29.1.b）",
                        "国際司法裁判所の判例に背く記述（29.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】西田幾多郎の「絶対無の場所」と道元の「現成公案」（第1部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試29-1）。",
                    "options": [
                        "東洋の無の思想は、虚無や欠如としての無ではなく、森羅万象を無限に生み出し育む豊かな可能性の充溢空間として捉えられます。",
                        "条約履行義務を軽視した無効文（29.1.m）",
                        "全権委任状の要件を欠く不備文（29.1.n）",
                        "寄託手続きの誤謬文（29.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u29-l1）の主要外交用語を入力してください（「道元禅師」）：",
                    "acceptedAnswers": [
                        "道元禅師",
                        "道元禅師は『"
                    ],
                    "explanation": "正解の外交用語は「道元禅師」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u29-l2": {
        "id": "ja-u29-l2",
        "subject": "japanese",
        "unit": 29,
        "lessonNumber": 2,
        "title": "「行為的直観」と歴史的身体：作られたものから作るものへの動的弁証法",
        "level": "C1",
        "objective": "西田哲学の「行為的直観（Action-Intuition）」、歴史的身体（Historical Body）、世界と自己の相互形成作用。",
        "presentation": {
            "explanation": "観照的な静的認識論を斥け、身体的行為を通じて世界を創造する「行為的直観（こういてきちょっかん）」を学びます。\n\n【行為的直観の弁証法】\n１．見ることは行うことであり、行うことは見ることである：\n　・画家が絵筆を動かすとき、見ることと描く行為は完全に不可分に一体化しています。\n２．「作られたものから作るものへ（From the created to the creating）」：\n　・人間は歴史的・環境的な過去の産物（作られたもの）であると同時に、身体的行為を通じて未来の歴史世界を創造する主格（作るもの）です。\n３．歴史的身体：自己の身体は単なる生物学的器官ではなく、道具や言語を通じて世界と結びつく歴史形成の媒介者です。",
            "examples": [
                {
                    "target": "「行為的直観」とは、自己が身体的行為を通じて世界に働きかけつつ、世界によって自らが形成される動的統一です。",
                    "reading": "「こういてきちょっかん」とは、じこが しんたいてきこういを つうじて せかいに はたらきかけつつ、せかいによって みずからが けいせいされる どうてきとういつです。",
                    "translation": "'Action-intuition' is the dynamic unity wherein the self acts upon the world through bodily deeds while simultaneously being formed by the world."
                },
                {
                    "target": "職人が道具を手にして素材を加工するとき、手と素材の対話の中に行為的直観が鮮やかに立ち現れます。",
                    "reading": "しょくにんが どうぐを てにして そざいを かこうするとき、てと そざいの たいわの なかに こういてきちょっかんが あざやかに たちあらわれます。",
                    "translation": "When a craftsperson takes a tool in hand and works a material, action-intuition vividly manifests within the dialogue between hand and material."
                },
                {
                    "target": "「作られたものから作るものへ」という歴史の自己形成運動において、人間は未来への創造的主体となります。",
                    "reading": "「つくられたものから つくるものへ」という れきしの じこけいせいうんどうにおいて、にんげんは みらいへの そうぞうてきしゅたいと なります。",
                    "translation": "In history's self-forming movement 'from the created to the creating', human beings become creative subjects toward the future."
                },
                {
                    "target": "抽象的思考に閉じこもるのではなく、歴史的身体をもって現実世界と切り結ぶ実践的哲学が説かれます。",
                    "reading": "ちゅうしょうてきしこうに とじこもるのではなく、れきしてきしんたいを もって げんじつせかいと きりむすぶ じっせんてきてつがくが とかれます。",
                    "translation": "Rather than secluding oneself in abstract thinking, a practical philosophy of engaging the real world with the historical body is expounded."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】西田幾多郎の「絶対無の場所」と道元の「現成公案」（第2部）における国際法規範に厳密に合致する公式外交記述を選択してください（問29.2.1）。",
                    "options": [
                        "道元禅師は『現成公案』において「自己をならふといふは、自己をわするるなり。自己をわするるといふは、万法に証せらるるなり」と説き、主客合一の境地を提示しました。",
                        "国際条約法に反する法的誤謬（29.2.1）",
                        "主権平等の原則を逸脱した不適当な記述（29.2.2）",
                        "外交慣例に悖る修辞的欠陥文（29.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】西田幾多郎の「場所の論理」、道元禅師『正法眼蔵・現成公案』、西谷啓治『宗教とは何か』の哲学的思索（第2部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】西田幾多郎の「絶対無の場所」と道元の「現成公案」（第2部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習29.2）。",
                    "options": [
                        "西田幾多郎の後期哲学における「場所の論理」は、対象化し得ない根源的な「絶対無」の自己限定として、自己と世界が相互に形成し合う動的弁証法を明らかにしました。",
                        "対立を無用に煽る不見識な声明文（29.2.x）",
                        "法的拘束力のない不完全な折衝文（29.2.y）",
                        "条約の留保条件を乱用した無効文（29.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u29-l2）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "京都学派の西谷啓治は主著『宗教とは何か』において、近代ニヒリズムの極限としての空の立場から、西洋実存主義の袋小路を突破する新しい人間観を打ち立てました。",
                        "安全保障理事会決議の権能を無視した記述（29.2.a）",
                        "平和維持部隊の法的根拠を欠く文（29.2.b）",
                        "国際司法裁判所の判例に背く記述（29.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】西田幾多郎の「絶対無の場所」と道元の「現成公案」（第2部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試29-2）。",
                    "options": [
                        "東洋の無の思想は、虚無や欠如としての無ではなく、森羅万象を無限に生み出し育む豊かな可能性の充溢空間として捉えられます。",
                        "条約履行義務を軽視した無効文（29.2.m）",
                        "全権委任状の要件を欠く不備文（29.2.n）",
                        "寄託手続きの誤謬文（29.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u29-l2）の主要外交用語を入力してください（「道元禅師」）：",
                    "acceptedAnswers": [
                        "道元禅師",
                        "道元禅師は『"
                    ],
                    "explanation": "正解の外交用語は「道元禅師」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u29-l3": {
        "id": "ja-u29-l3",
        "subject": "japanese",
        "unit": 29,
        "lessonNumber": 3,
        "title": "道元『正法眼蔵』「現成公案」：自己をはこびて万法を修証するを迷とす",
        "level": "C1",
        "objective": "道元『正法眼蔵』の巻頭「現成公案（げんじょうこうあん）」、自己と万法の反転論理、仏道をならふとは自己をならふなり。",
        "presentation": {
            "explanation": "日本仏教思想史の最高峰・道元（どうげん）の『正法眼蔵』「現成公案（げんじょうこうあん）」の言語宇宙を学びます。\n\n【現成公案の決定的命題】\n１．「自己をはこびて万法を修証するを迷とす。万法すすみて自己を修証するを悟りとす」\n　・自我の側から世界を支配・理解しようとすることは迷いであり、世界（万法）の側が自ずから進み出て自己の真実を証し立てることこそが悟りである。\n２．「仏道をならふといふは、自己をならふなり。自己をならふといふは、自己をわするるなり。自己をわするるといふは、万法に証せらるるなり」\n　・仏教を学ぶとは自己を学ぶことであり、自己を真に学ぶとはエゴを忘れることであり、エゴを忘れたとき万物（山川草木）によって自己の本性が証明される。\n３．薪と灰の比喩：薪は灰にならず、灰は薪に戻らない。各瞬間の完全な現成。",
            "examples": [
                {
                    "target": "「仏道をならふといふは、自己をならふなり。自己をならふといふは、自己をわするるなり」という至高の真理です。",
                    "reading": "「ぶつどうを ならふといふは、じこを ならふなり。じこを ならふといふは、じこを わするるなり」という しこうの しんりです。",
                    "translation": "It is the supreme truth: 'To study the Buddha Way is to study the self. To study the self is to forget the self'."
                },
                {
                    "target": "自我の欲望によって世界を操作しようとする迷いを捨て、万法が自己を照らし出す悟りの現成を道元は説きました。",
                    "reading": "じがの よくぼうによって せかいを そうさしようとする まよいを すて、ばんぽうが じこを てらしだす さとりの げんじょうを どうげんは ときました。",
                    "translation": "Dogen expounded discarding the delusion of seeking to manipulate the world through ego desires, allowing myriad phenomena to illuminate the realization of enlightenment."
                },
                {
                    "target": "薪が灰になった後に再び薪に戻らないように、今この一瞬の生は絶対的なかけがえのなさを帯びています。",
                    "reading": "たきぎが はいになった のちに ふたたび たきぎに もどらないように、いま この いっしゅんの せいは ぜったいてきな かけがえのなさを おびています。",
                    "translation": "Just as firewood does not turn back into firewood after becoming ash, life in this very single moment carries absolute irreplacability."
                },
                {
                    "target": "鳥が飛ぶとき空に果てがなく、魚が泳ぐとき水に尽きることがないように、行ずるところに道が現成します。",
                    "reading": "とりが とぶとき そらに はてがなく、さかなが およぐとき みずに つきることが ないように、ぎょうずるところに みちが げんじょうします。",
                    "translation": "Just as when birds fly the sky is endless, and when fish swim the water is boundless, wherever one practices the Way manifests."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】西田幾多郎の「絶対無の場所」と道元の「現成公案」（第3部）における国際法規範に厳密に合致する公式外交記述を選択してください（問29.3.1）。",
                    "options": [
                        "道元禅師は『現成公案』において「自己をならふといふは、自己をわするるなり。自己をわするるといふは、万法に証せらるるなり」と説き、主客合一の境地を提示しました。",
                        "国際条約法に反する法的誤謬（29.3.1）",
                        "主権平等の原則を逸脱した不適当な記述（29.3.2）",
                        "外交慣例に悖る修辞的欠陥文（29.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】西田幾多郎の「場所の論理」、道元禅師『正法眼蔵・現成公案』、西谷啓治『宗教とは何か』の哲学的思索（第3部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】西田幾多郎の「絶対無の場所」と道元の「現成公案」（第3部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習29.3）。",
                    "options": [
                        "西田幾多郎の後期哲学における「場所の論理」は、対象化し得ない根源的な「絶対無」の自己限定として、自己と世界が相互に形成し合う動的弁証法を明らかにしました。",
                        "対立を無用に煽る不見識な声明文（29.3.x）",
                        "法的拘束力のない不完全な折衝文（29.3.y）",
                        "条約の留保条件を乱用した無効文（29.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u29-l3）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "京都学派の西谷啓治は主著『宗教とは何か』において、近代ニヒリズムの極限としての空の立場から、西洋実存主義の袋小路を突破する新しい人間観を打ち立てました。",
                        "安全保障理事会決議の権能を無視した記述（29.3.a）",
                        "平和維持部隊の法的根拠を欠く文（29.3.b）",
                        "国際司法裁判所の判例に背く記述（29.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】西田幾多郎の「絶対無の場所」と道元の「現成公案」（第3部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試29-3）。",
                    "options": [
                        "東洋の無の思想は、虚無や欠如としての無ではなく、森羅万象を無限に生み出し育む豊かな可能性の充溢空間として捉えられます。",
                        "条約履行義務を軽視した無効文（29.3.m）",
                        "全権委任状の要件を欠く不備文（29.3.n）",
                        "寄託手続きの誤謬文（29.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u29-l3）の主要外交用語を入力してください（「道元禅師」）：",
                    "acceptedAnswers": [
                        "道元禅師",
                        "道元禅師は『"
                    ],
                    "explanation": "正解の外交用語は「道元禅師」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u29-l4": {
        "id": "ja-u29-l4",
        "subject": "japanese",
        "unit": 29,
        "lessonNumber": 4,
        "title": "西谷啓治『宗教とは何か』：ニヒリズムの超克と「空」の実存論",
        "level": "C1",
        "objective": "京都学派第二世代・西谷啓治（1900-1990）の主著『宗教とは何か』、虚無（ニヒリズム）の深淵から仏教の「空（シューニャター）」への転回。",
        "presentation": {
            "explanation": "西田幾多郎の正統後継者・西谷啓治（にしたにけいじ）の宗教哲学と現代ニヒリズム超克論を学びます。\n\n【『宗教とは何か』（1961年）の思索】\n１．ニヒリズムの極限体験：\n　・ニーチェやハイデガーの直面した近代科学と無神論による「一切の意味の喪失（虚無）」。\n２．「空（くう：Śūnyatā）」への実存的転回：\n　・虚無の底を突き抜けたとき、存在と無の二元論を超えた仏教の「空（絶対無）」の地平が開ける。\n　・空の立場においては、道端の一本の雑草、一粒の砂が、それ自体として絶対無二の神聖な実在として輝き出します（「物そのもののそのもの性」）。",
            "examples": [
                {
                    "target": "西谷啓治は『宗教とは何か』において、近代西洋のニヒリズムの深淵を東洋仏教の「空」の思想によって超克しました。",
                    "reading": "にしたにけいじは『しゅうきょうとはなにか』において、きんだいせいようの ニヒリズムの しんえんを とうようぶっきょうの「くう」の しそうによって ちょうこくしました。",
                    "translation": "In 'What is Religion?', Keiji Nishitani overcame the abyss of modern Western nihilism through the Eastern Buddhist philosophy of 'Sunyata (Emptiness)'."
                },
                {
                    "target": "一切の執着を空じた場所において、野に咲く名もなき一輪の花が絶対的な実在の光を放ち始めます。",
                    "reading": "いっさいの しゅうちゃくを くうじた ばしょにおいて、のに さく なもなき いちりんの はなが ぜったいてきな じつざいの ひかりを はなちはじめます。",
                    "translation": "In the place where all attachments are emptied, a nameless single flower blooming in the field begins to radiate the light of absolute reality."
                },
                {
                    "target": "虚無を単なる破壊的虚脱として終わらせず、真の主体性の回復へと転換する実存的思索を展開しました。",
                    "reading": "きょむを たんなる はかいてききょだつとして おわらせず、しんの しゅたいせいの かいふくへと てんかんする じつぞんてきしさくを てんかいしました。",
                    "translation": "He developed existential reflections that do not let nihilism end in mere destructive collapse, but convert it into the recovery of authentic subjectivity."
                },
                {
                    "target": "宗教とは人間が自己の根底において真の実在に目覚めるための不可避の実存的問いであると西谷は結論づけました。",
                    "reading": "しゅうきょうとは にんげんが じこの こんていにおいて しんの じつざいに めざめるための ふかひの じつぞんてきといであると にしたには けつろんづけました。",
                    "translation": "Nishitani concluded that religion is an unavoidable existential question for human beings to awaken to true reality at the root of the self."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】西田幾多郎の「絶対無の場所」と道元の「現成公案」（第4部）における国際法規範に厳密に合致する公式外交記述を選択してください（問29.4.1）。",
                    "options": [
                        "道元禅師は『現成公案』において「自己をならふといふは、自己をわするるなり。自己をわするるといふは、万法に証せらるるなり」と説き、主客合一の境地を提示しました。",
                        "国際条約法に反する法的誤謬（29.4.1）",
                        "主権平等の原則を逸脱した不適当な記述（29.4.2）",
                        "外交慣例に悖る修辞的欠陥文（29.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】西田幾多郎の「場所の論理」、道元禅師『正法眼蔵・現成公案』、西谷啓治『宗教とは何か』の哲学的思索（第4部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】西田幾多郎の「絶対無の場所」と道元の「現成公案」（第4部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習29.4）。",
                    "options": [
                        "西田幾多郎の後期哲学における「場所の論理」は、対象化し得ない根源的な「絶対無」の自己限定として、自己と世界が相互に形成し合う動的弁証法を明らかにしました。",
                        "対立を無用に煽る不見識な声明文（29.4.x）",
                        "法的拘束力のない不完全な折衝文（29.4.y）",
                        "条約の留保条件を乱用した無効文（29.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u29-l4）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "京都学派の西谷啓治は主著『宗教とは何か』において、近代ニヒリズムの極限としての空の立場から、西洋実存主義の袋小路を突破する新しい人間観を打ち立てました。",
                        "安全保障理事会決議の権能を無視した記述（29.4.a）",
                        "平和維持部隊の法的根拠を欠く文（29.4.b）",
                        "国際司法裁判所の判例に背く記述（29.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】西田幾多郎の「絶対無の場所」と道元の「現成公案」（第4部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試29-4）。",
                    "options": [
                        "東洋の無の思想は、虚無や欠如としての無ではなく、森羅万象を無限に生み出し育む豊かな可能性の充溢空間として捉えられます。",
                        "条約履行義務を軽視した無効文（29.4.m）",
                        "全権委任状の要件を欠く不備文（29.4.n）",
                        "寄託手続きの誤謬文（29.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u29-l4）の主要外交用語を入力してください（「道元禅師」）：",
                    "acceptedAnswers": [
                        "道元禅師",
                        "道元禅師は『"
                    ],
                    "explanation": "正解の外交用語は「道元禅師」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u29-l5": {
        "id": "ja-u29-l5",
        "subject": "japanese",
        "unit": 29,
        "lessonNumber": 5,
        "title": "東西哲学の対話：ハイデガー・ハイゼンベルクと京都学派",
        "level": "C1",
        "objective": "マルティン・ハイデガー（存在と時間）と西田・九鬼周造・西谷の対話、量子力学（ハイゼンベルク）と東洋思想の世界的交差。",
        "presentation": {
            "explanation": "京都学派が20世紀西洋の巨頭たち（ハイデガー、ヤスパース、ハイゼンベルク）と切り結んだ比較思想史の対話を学びます。\n\n【京都学派と西洋現代思想の交差】\n１．マルティン・ハイデガーとの対話：\n　・九鬼周造（『「いき」の構造』）はフライブルクで若きハイデガーに師事し、日本の言葉論を教授。\n　・ハイデガーの「言葉についての対話（日本人とのあいだの）」に結実。\n２．量子力学の創始者ハイゼンベルク（不確定性原理）：\n　・「観察者と観察対象が相互作用する」量子力学の知見が、東洋の主客未分・相互依存の思想と深く共鳴することを確認。\n３．現代グローバル哲学における京都学派の普遍的価値。",
            "examples": [
                {
                    "target": "京都学派の哲学者たちはハイデガーやヤスパースらと直接対話を重ね、東西の境界を超える普遍的思索を切り拓きました。",
                    "reading": "きょうとがくはの てつがくしゃたちは ハイデガーや ヤスパースらと ちょくせつたいわを かさね、とうざいの きょうかいを こえる ふへんてきしさくを きりひらきました。",
                    "translation": "Kyoto School philosophers repeatedly conducted direct dialogues with Heidegger, Jaspers, and others, pioneering universal reflections transcending East-West boundaries."
                },
                {
                    "target": "九鬼周造がハイデガーに語った日本語の「いき（粋）」の美意識は、西洋存在論の言語観に深い刺激を与えました。",
                    "reading": "くきしゅうぞうが ハイデガーに かたった にほんごの「いき」の びいしきは、せいようそんざいろんの げんごかんに ふかい しげきを あたえました。",
                    "translation": "The aesthetic sensibility of Japanese 'iki' related by Shuzo Kuki to Heidegger provided deep stimulation to Western ontological linguistic views."
                },
                {
                    "target": "量子力学の不確定性原理が明らかにした主客の不可分性は、東洋の「空」や「主客合一」の直観と驚くべき一致を示しています。",
                    "reading": "りょうしりきがくの ふかくていせいげんりが あきらかにした しゅかくの ふかぶんせいは、とうようの「くう」や「しゅかくごういつ」の ちょっかんと おどろくべき いっちを しめしています。",
                    "translation": "The indivisibility of subject and object revealed by quantum mechanics' uncertainty principle shows astonishing correspondence with Eastern intuitions of 'Sunyata' and subject-object unity."
                },
                {
                    "target": "近代の西洋中心主義を超えて多元的共生を構想する現代世界において、京都学派の遺産はますます輝きを増しています。",
                    "reading": "きんだいの せいようちゅうしんしゅぎを こえて たげんてききょうせいを こうそうする げんだいせかいにおいて、きょうとがくはの いさんは ますます かがやきを ましています。",
                    "translation": "In the contemporary world conceptualizing pluralistic coexistence beyond modern Eurocentrism, the legacy of the Kyoto School shines all the more brightly."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】西田幾多郎の「絶対無の場所」と道元の「現成公案」（第5部）における国際法規範に厳密に合致する公式外交記述を選択してください（問29.5.1）。",
                    "options": [
                        "道元禅師は『現成公案』において「自己をならふといふは、自己をわするるなり。自己をわするるといふは、万法に証せらるるなり」と説き、主客合一の境地を提示しました。",
                        "国際条約法に反する法的誤謬（29.5.1）",
                        "主権平等の原則を逸脱した不適当な記述（29.5.2）",
                        "外交慣例に悖る修辞的欠陥文（29.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】西田幾多郎の「場所の論理」、道元禅師『正法眼蔵・現成公案』、西谷啓治『宗教とは何か』の哲学的思索（第5部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】西田幾多郎の「絶対無の場所」と道元の「現成公案」（第5部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習29.5）。",
                    "options": [
                        "西田幾多郎の後期哲学における「場所の論理」は、対象化し得ない根源的な「絶対無」の自己限定として、自己と世界が相互に形成し合う動的弁証法を明らかにしました。",
                        "対立を無用に煽る不見識な声明文（29.5.x）",
                        "法的拘束力のない不完全な折衝文（29.5.y）",
                        "条約の留保条件を乱用した無効文（29.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u29-l5）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "京都学派の西谷啓治は主著『宗教とは何か』において、近代ニヒリズムの極限としての空の立場から、西洋実存主義の袋小路を突破する新しい人間観を打ち立てました。",
                        "安全保障理事会決議の権能を無視した記述（29.5.a）",
                        "平和維持部隊の法的根拠を欠く文（29.5.b）",
                        "国際司法裁判所の判例に背く記述（29.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】西田幾多郎の「絶対無の場所」と道元の「現成公案」（第5部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試29-5）。",
                    "options": [
                        "東洋の無の思想は、虚無や欠如としての無ではなく、森羅万象を無限に生み出し育む豊かな可能性の充溢空間として捉えられます。",
                        "条約履行義務を軽視した無効文（29.5.m）",
                        "全権委任状の要件を欠く不備文（29.5.n）",
                        "寄託手続きの誤謬文（29.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u29-l5）の主要外交用語を入力してください（「道元禅師」）：",
                    "acceptedAnswers": [
                        "道元禅師",
                        "道元禅師は『"
                    ],
                    "explanation": "正解の外交用語は「道元禅師」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u30-l1": {
        "id": "ja-u30-l1",
        "subject": "japanese",
        "unit": 30,
        "lessonNumber": 1,
        "title": "宮崎駿『もののけ姫』：人間文明と太古の自然との不可避的相克と生命的共生",
        "level": "C1",
        "objective": "宮崎駿（1941-・アカデミー名誉賞）の最高傑作『もののけ姫』（1997年）、タタラ場（製鉄文明）とシシ神の森、善悪二元論の超越と「生きろ」の倫理。",
        "presentation": {
            "explanation": "世界アニメーション史上の最高峰・宮崎駿（みやざきはやお）の『もののけ姫』が提示した生態系文明論を学びます。\n\n【『もののけ姫』（1997年）の思想的構造】\n１．安易な環境保護論（善悪二元論）の完全な否定：\n　・エボシ御前率いる「タタラ場」：社会の周縁（被差別民・ハンセン病患者・女性）を解放し、自立した人間らしい共同体を築くために森を切り拓き製鉄を行う（人間的善）。\n　・サンとモロの君（犬神）：人間によって侵略され破壊される太古の森と神々の尊厳を守るために戦う（自然の側）。\n２．アシタカの立場：「曇りなき眼（まなこ）で見定め、決める」\n　・呪いを受けながらも、人間と森の双方が背負う正義と苦悩を見据え、双方の破滅を回避すべく奔走する超越的仲介者。\n３．結末：「生きろ。そなたは森で、わたしはタタラ場でくらそう。共に生きよう」\n　・森と文明は完全には融和しないという厳然たる現実を受け止めつつ、それでもなお共生を諦めずに生き抜く不屈の生命的倫理。",
            "examples": [
                {
                    "target": "宮崎駿監督の『もののけ姫』は、人間文明の発展と自然環境の保全という不可避の相克を、善悪の二元論を超えて冷徹に描き切りました。",
                    "reading": "みやざきはやおかんとくの『もののけひめ』は、にんげんぶんめいの はってんと しぜんかんきょうの ほぜんという ふかひの そうこくを、ぜんあくの にげんろんを こえて れいてつに えがききりました。",
                    "translation": "Director Hayao Miyazaki's 'Princess Mononoke' lucidly depicted the unavoidable conflict between the advancement of human civilization and the preservation of the natural environment beyond black-and-white dualism."
                },
                {
                    "target": "エボシ御前が率いるタタラ場は、弱者を救済する先進的な共同体でありながら森の破壊者であるという重層的な葛藤を体現しています。",
                    "reading": "エボシごぜんが ひきいる タタラばは、じゃくしゃを きゅうさいする せんしんてきな きょうどうたいでありながら もりの はかいしゃであるという じゅうそうてきな かっとうを たいげんしています。",
                    "translation": "The Tatara ironworks led by Lady Eboshi embodies multi-layered conflict, being a progressive community rescuing the marginalized while simultaneously acting as the destroyer of the forest."
                },
                {
                    "target": "アシタカの「曇りなき眼で見定める」という姿勢は、偏見や憎悪に囚われず真実を見極めようとする倫理的態度の極致です。",
                    "reading": "アシタカの「くもりなき まなこで みさだめる」という しせいは、へんけんや ぞうおに とらわれず しんじつを みきわめようとする りんりてきたいどの きょくちです。",
                    "translation": "Ashitaka's posture of 'seeing with eyes unclouded' is the pinnacle of ethical disposition seeking to discern truth without being trapped by prejudice or hatred."
                },
                {
                    "target": "神殺しの末に森が蘇生するラストシーンは、完全な原状回復ではなく、人間と自然の新たな共生への試練を暗示しています。",
                    "reading": "かみごろしの すえに もりが そせいする ラストシーンは、かんぺきな げんじょうかいふくではなく、にんげんと しぜんの あらたな きょうせいへの しれんを あんじしています。",
                    "translation": "The final scene where the forest revives after the slaying of the god hints not at a pristine restoration of original conditions, but at trials toward a new coexistence between humans and nature."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第1部）における国際法規範に厳密に合致する公式外交記述を選択してください（問30.1.1）。",
                    "options": [
                        "宮崎駿監督の『もののけ姫』は、タタラ場の製鉄による自然改変と森の神々の戦いを通じて、人間と自然の安易な調和を排した根源的な共生の葛藤を描き出しました。",
                        "国際条約法に反する法的誤謬（30.1.1）",
                        "主権平等の原則を逸脱した不適当な記述（30.1.2）",
                        "外交慣例に悖る修辞的欠陥文（30.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】宮崎駿（手描きアニメーションの生命感と生態系倫理）、是枝裕和（現代的リアリズム）の映像哲学（第1部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第1部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習30.1）。",
                    "options": [
                        "スタジオジブリが貫く圧倒的な手描きアニメーションの緻密な作画は、風のそよぎや水の流れ、飛翔する身体の生命感をダイナミックにフィルムに定着させます。",
                        "対立を無用に煽る不見識な声明文（30.1.x）",
                        "法的拘束力のない不完全な折衝文（30.1.y）",
                        "条約の留保条件を乱用した無効文（30.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u30-l1）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "是枝裕和監督の『万引き家族』は、カンヌ国際映画祭パルム・ドールを受賞し、血縁によらない疑似家族の温もりと格差社会の痛切な現実を世界の観客に突きつけました。",
                        "安全保障理事会決議の権能を無視した記述（30.1.a）",
                        "平和維持部隊の法的根拠を欠く文（30.1.b）",
                        "国際司法裁判所の判例に背く記述（30.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第1部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試30-1）。",
                    "options": [
                        "現代日本の映像作家たちは、アニメーションと実写映画の双方において、人間の実存的尊厳とエコロジーの倫理を世界に向けて発信し続けています。",
                        "条約履行義務を軽視した無効文（30.1.m）",
                        "全権委任状の要件を欠く不備文（30.1.n）",
                        "寄託手続きの誤謬文（30.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u30-l1）の主要外交用語を入力してください（「宮崎駿監」）：",
                    "acceptedAnswers": [
                        "宮崎駿監",
                        "宮崎駿監督の"
                    ],
                    "explanation": "正解の外交用語は「宮崎駿監」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u30-l2": {
        "id": "ja-u30-l2",
        "subject": "japanese",
        "unit": 30,
        "lessonNumber": 2,
        "title": "高畑勲『かぐや姫の物語』：伝統的絵巻物・水墨画的線画と余白のアニメーション革命",
        "level": "C1",
        "objective": "高畑勲（1935-2018）の遺作『かぐや姫の物語』（2013年）、竹取物語の脱構築、水墨画的スケッチ線画と余白の映像詩学。",
        "presentation": {
            "explanation": "宮崎駿の盟友にして世界的映像詩人・高畑勲（たかはたいさお）の集大成『かぐや姫の物語』を学びます。\n\n【『かぐや姫の物語』の映像革命】\n１．セル画・均一な輪郭線の解体：\n　・完成されたクリーンな線ではなく、鉛筆や木炭の「スケッチ線（描き殴りのような荒い線）」と水彩の淡い色彩をそのままアニメーション化。\n２．動く絵巻物と余白（WhiteSpace）の美学：\n　・画面の隅々まで描き込む西洋型CGアニメーションへのアンチテーゼとして、白紙の余白が観客の想像力の中で光や風となって躍動する東洋的空間性。\n３．『竹取物語』の人間的再解釈：\n　・月に帰る運命の姫が、地球の「鳥・虫・草・木」と泥にまみれた人間の生をいかに熱烈に愛したかという存在論的ドラマ。",
            "examples": [
                {
                    "target": "高畑勲監督の『かぐや姫の物語』は、水墨画や絵巻物を思わせる手描きのスケッチ線によって、アニメーション表現の新次元を拓きました。",
                    "reading": "たかはたいさおかんとくの『かぐやひめのものがたり』は、すいぼくがや えまきものを おもわせる てがきの スケッチせんに よって、アニメーションひょうげんの しんじげんを ひらきました。",
                    "translation": "Director Isao Takahata's 'The Tale of the Princess Kaguya' opened a new dimension of animated expression through hand-drawn sketch lines reminiscent of ink wash paintings and handscrolls."
                },
                {
                    "target": "かぐや姫が十二単を脱ぎ捨てて疾走する狂気的なシーンでは、荒々しい筆致の線画が彼女の魂の絶叫をダイレクトに視覚化しています。",
                    "reading": "かぐやひめが じゅうにひとえを ぬぎすてて しっそうする きょうきてきな シーンでは、あらあらしい ひっちの せんがが かのじょの たましいの ぜっきょうを ダイレクトに しかくかしています。",
                    "translation": "In the manic scene where Princess Kaguya casts off her twelve-layered ceremonial kimono and sprints, rough brushstroke line drawings directly visualize her soul's screaming cry."
                },
                {
                    "target": "画面の余白を活かした空間構成は、観客の内面に風のそよぎや光の気配を呼び覚ます豊かな喚起力を持っています。",
                    "reading": "がめんの よはくを いかした くうかんこうせいは、かんきゃくの ないめんに かぜの そよぎや ひかりの けはいを よびさます ゆたかな かんきりょくを もっています。",
                    "translation": "The spatial composition utilizing margins on the screen possesses rich evocative power awakening the rustling of wind and presence of light within viewers."
                },
                {
                    "target": "日本最古の文学『竹取物語』を、生への切実な愛着と喪失のドラマとして読み直した高畑の洞察力は世界で絶賛されました。",
                    "reading": "にほんさいこの ぶんがく『たけとりものがたり』を、せいへの せつじつな あいちゃくと しょうしつの ドラマとして よみなおした たかはたの どうさつりょくは せかいで ぜっさんされました。",
                    "translation": "Takahata's insight rereading Japan's oldest literature 'The Tale of the Bamboo Cutter' as a poignant drama of earnest attachment to life and loss was universally acclaimed worldwide."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第2部）における国際法規範に厳密に合致する公式外交記述を選択してください（問30.2.1）。",
                    "options": [
                        "宮崎駿監督の『もののけ姫』は、タタラ場の製鉄による自然改変と森の神々の戦いを通じて、人間と自然の安易な調和を排した根源的な共生の葛藤を描き出しました。",
                        "国際条約法に反する法的誤謬（30.2.1）",
                        "主権平等の原則を逸脱した不適当な記述（30.2.2）",
                        "外交慣例に悖る修辞的欠陥文（30.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】宮崎駿（手描きアニメーションの生命感と生態系倫理）、是枝裕和（現代的リアリズム）の映像哲学（第2部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第2部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習30.2）。",
                    "options": [
                        "スタジオジブリが貫く圧倒的な手描きアニメーションの緻密な作画は、風のそよぎや水の流れ、飛翔する身体の生命感をダイナミックにフィルムに定着させます。",
                        "対立を無用に煽る不見識な声明文（30.2.x）",
                        "法的拘束力のない不完全な折衝文（30.2.y）",
                        "条約の留保条件を乱用した無効文（30.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u30-l2）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "是枝裕和監督の『万引き家族』は、カンヌ国際映画祭パルム・ドールを受賞し、血縁によらない疑似家族の温もりと格差社会の痛切な現実を世界の観客に突きつけました。",
                        "安全保障理事会決議の権能を無視した記述（30.2.a）",
                        "平和維持部隊の法的根拠を欠く文（30.2.b）",
                        "国際司法裁判所の判例に背く記述（30.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第2部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試30-2）。",
                    "options": [
                        "現代日本の映像作家たちは、アニメーションと実写映画の双方において、人間の実存的尊厳とエコロジーの倫理を世界に向けて発信し続けています。",
                        "条約履行義務を軽視した無効文（30.2.m）",
                        "全権委任状の要件を欠く不備文（30.2.n）",
                        "寄託手続きの誤謬文（30.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u30-l2）の主要外交用語を入力してください（「宮崎駿監」）：",
                    "acceptedAnswers": [
                        "宮崎駿監",
                        "宮崎駿監督の"
                    ],
                    "explanation": "正解の外交用語は「宮崎駿監」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u30-l3": {
        "id": "ja-u30-l3",
        "subject": "japanese",
        "unit": 30,
        "lessonNumber": 3,
        "title": "是枝裕和『万引き家族』：法と血縁の枠組みを問い直す現代日本の周縁的リアリズム",
        "level": "C1",
        "objective": "是枝裕和（1962-・2018年カンヌ映画祭パルム・ドール受賞）の『万引き家族』、疑似家族、血縁主義の解体と社会的周縁の眼差し。",
        "presentation": {
            "explanation": "現代世界映画を代表する名匠・是枝裕和（これえだひろかず）の『万引き家族（Shoplifters）』の社会哲学的射程を学びます。\n\n【『万引き家族』（2018年）の批評的達成】\n１．カンヌ国際映画祭最高賞（パルム・ドール）受賞。\n２．血縁によらない家族の再定義：\n　・年金不正受給、児童虐待、風俗労働、不法滞在など、現代社会から見捨てられた者たちが寄り添い合って暮らす下町の長屋。犯罪（万引き）で結びつきながらも、そこには血の繋がった本物の家族以上に濃密な愛情と連帯が存在する逆説。\n３．ドキュメンタリー出身の演出手法：\n　・子役には台本を渡さず現場で口頭指示を与え、日常の自然な呼吸、食卓を囲む温もり、そして法の冷徹な裁きによる離散を静かに見つめる眼差し。",
            "examples": [
                {
                    "target": "是枝裕和監督の『万引き家族』は、血縁によらない疑似家族の絆を通じて、近代社会における家族観と法の限界を鋭く告発しました。",
                    "reading": "これえだひろかずかんとくの『まんびきかぞく』は、けつえんに よらない ぎじかぞくの きずなを つうじて、きんだいしゃかいにおける かぞくかんと ほうの げんかいを するどく こくはつしました。",
                    "translation": "Director Hirokazu Kore-eda's 'Shoplifters' sharply indicted modern society's family concepts and the limits of law through the bonds of a non-biological pseudo-family."
                },
                {
                    "target": "社会的周縁に生きる人々が食卓を囲む温かな情景は、制度的枠組みからは零れ落ちる人間の尊厳を照らし出しています。",
                    "reading": "しゃかいてきしゅうえんに いきる ひとびとが しょくたくを かこむ あたたかな じょうけいは、せいどてきわくぐみからは こぼれおちる にんげんの そんげんを てらしだしています。",
                    "translation": "The warm scenes of people living on the social margins gathering around the dinner table illuminate human dignity spilling out of institutional frameworks."
                },
                {
                    "target": "子役に台本を渡さずに自然な会話を引き出す是枝独自の演出手法は、劇映画に比類なきドキュメンタリー的リアリズムをもたらしました。",
                    "reading": "こやくに だいほんを わたさずに しぜんな かいわを ひきだす これえだどくじの えんしゅつしゅほうは、げきえいがに ひるいなき ドキュメンタリーてきリアリズムを もたらしました。",
                    "translation": "Kore-eda's unique directing method of drawing natural dialogue from child actors without handing them scripts brought peerless documentary realism to feature films."
                },
                {
                    "target": "「生んだから親になるのか、育てたから親になるのか」という根源的問いが、観客の倫理的判断を静かに揺さぶります。",
                    "reading": "「うんだから おやに なるのか、そだてたから おやに なるのか」という こんげんてきといが、かんきゃくの りんりてきはんだんを しずかに ゆさぶります。",
                    "translation": "The fundamental question 'Does giving birth make one a parent, or does raising make one a parent?' quietly shakes viewers' ethical judgments."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第3部）における国際法規範に厳密に合致する公式外交記述を選択してください（問30.3.1）。",
                    "options": [
                        "宮崎駿監督の『もののけ姫』は、タタラ場の製鉄による自然改変と森の神々の戦いを通じて、人間と自然の安易な調和を排した根源的な共生の葛藤を描き出しました。",
                        "国際条約法に反する法的誤謬（30.3.1）",
                        "主権平等の原則を逸脱した不適当な記述（30.3.2）",
                        "外交慣例に悖る修辞的欠陥文（30.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】宮崎駿（手描きアニメーションの生命感と生態系倫理）、是枝裕和（現代的リアリズム）の映像哲学（第3部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第3部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習30.3）。",
                    "options": [
                        "スタジオジブリが貫く圧倒的な手描きアニメーションの緻密な作画は、風のそよぎや水の流れ、飛翔する身体の生命感をダイナミックにフィルムに定着させます。",
                        "対立を無用に煽る不見識な声明文（30.3.x）",
                        "法的拘束力のない不完全な折衝文（30.3.y）",
                        "条約の留保条件を乱用した無効文（30.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u30-l3）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "是枝裕和監督の『万引き家族』は、カンヌ国際映画祭パルム・ドールを受賞し、血縁によらない疑似家族の温もりと格差社会の痛切な現実を世界の観客に突きつけました。",
                        "安全保障理事会決議の権能を無視した記述（30.3.a）",
                        "平和維持部隊の法的根拠を欠く文（30.3.b）",
                        "国際司法裁判所の判例に背く記述（30.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第3部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試30-3）。",
                    "options": [
                        "現代日本の映像作家たちは、アニメーションと実写映画の双方において、人間の実存的尊厳とエコロジーの倫理を世界に向けて発信し続けています。",
                        "条約履行義務を軽視した無効文（30.3.m）",
                        "全権委任状の要件を欠く不備文（30.3.n）",
                        "寄託手続きの誤謬文（30.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u30-l3）の主要外交用語を入力してください（「宮崎駿監」）：",
                    "acceptedAnswers": [
                        "宮崎駿監",
                        "宮崎駿監督の"
                    ],
                    "explanation": "正解の外交用語は「宮崎駿監」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u30-l4": {
        "id": "ja-u30-l4",
        "subject": "japanese",
        "unit": 30,
        "lessonNumber": 4,
        "title": "濱口竜介『ドライブ・マイ・カー』：多言語演劇の相互読解と喪失・トラウマの言語化",
        "level": "C1",
        "objective": "濱口竜介（1978-・カンヌ脚本賞・米アカデミー国際長編映画賞）の『ドライブ・マイ・カー』（2021年）、多言語演劇（ワーニャ伯父さん）、喪失の対話的受容。",
        "presentation": {
            "explanation": "現代映画言語の最先端を切り拓く濱口竜介（はまぐちりゅうすけ）の『ドライブ・マイ・カー』の対話論を学びます。\n\n【『ドライブ・マイ・カー』（2021年・村上春樹原作）の構造】\n１．多言語演劇（Multilingual Theater）の実験：\n　・チェーホフの戯曲『ワーニャ伯父さん』を、日本語・韓国語・中国語・英語・手話を用いる俳優たちが各自の母語で演じる。相手の言葉の意味を耳で追うのではなく、相手の表情・声の震え・身体の佇まいに全神経を集中させてコミュニケーションを成立させるプロセス。\n２．車（サーブ900）という密室空間における対話：\n　・妻を亡くした主人公（家福）と無口な女性ドライバー（みさき）が、移動する車内で互いの隠された罪悪感とトラウマを告白し合う魂の治癒の軌跡。",
            "examples": [
                {
                    "target": "濱口竜介監督の『ドライブ・マイ・カー』は、多言語演劇の稽古プロセスを通じて言語を超えた身体的コミュニケーションの可能性を探求しました。",
                    "reading": "はまぐちりゅうすけかんとくの『ドライブ・マイ・カー』は、たげんごえんげきの けいこプロセスを つうじて げんごを こえた しんたいてきコミュニケーションの かのうせいを たんきゅうしました。",
                    "translation": "Director Ryusuke Hamaguchi's 'Drive My Car' explored the possibilities of bodily communication transcending language through the rehearsal process of multilingual theater."
                },
                {
                    "target": "言葉の意味を理解できない異言語同士の俳優たちが、声の響きや呼吸の一致によって深い相互理解へと到達します。",
                    "reading": "ことばの いみを りかいできない いげんごどうしの はいゆうたちが、こえの ひびきや こきゅうの いっちによって ふかい そうごりかいへと とうたつします。",
                    "translation": "Actors of different languages unable to comprehend word meanings reach profound mutual understanding through the resonance of voices and synchronization of breath."
                },
                {
                    "target": "赤いサーブの車内で交わされる二人の告白は、言葉を通じて自己のトラウマを直視し他者と悲しみを共有する再生の旅です。",
                    "reading": "あかい サーブの しゃないで かわされる ふたりの こくはくは、ことばを つうじて じこの トラウマを ちょくしし たしゃと かなしみを きょうゆうする さいせいの たびです。",
                    "translation": "The confessions exchanged between the two within the red Saab are a journey of regeneration confronting one's own trauma through words and sharing grief with another."
                },
                {
                    "target": "チェーホフの劇言語と現代の日常対話が重層的に交錯し、人間の孤独と生の肯定を静謐かつ強靭に描き出しています。",
                    "reading": "チェーホフの げきげんごと げんだいの にちじょうたいわが じゅうそうてきに こうさくし、にんげんの こどくと せいの こうていを せいひつかつ きょうじんに えがきだしています。",
                    "translation": "Chekhov's theatrical language and contemporary daily dialogue multi-layeredly intersect, quietly and robustly portraying human solitude and the affirmation of life."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第4部）における国際法規範に厳密に合致する公式外交記述を選択してください（問30.4.1）。",
                    "options": [
                        "宮崎駿監督の『もののけ姫』は、タタラ場の製鉄による自然改変と森の神々の戦いを通じて、人間と自然の安易な調和を排した根源的な共生の葛藤を描き出しました。",
                        "国際条約法に反する法的誤謬（30.4.1）",
                        "主権平等の原則を逸脱した不適当な記述（30.4.2）",
                        "外交慣例に悖る修辞的欠陥文（30.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】宮崎駿（手描きアニメーションの生命感と生態系倫理）、是枝裕和（現代的リアリズム）の映像哲学（第4部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第4部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習30.4）。",
                    "options": [
                        "スタジオジブリが貫く圧倒的な手描きアニメーションの緻密な作画は、風のそよぎや水の流れ、飛翔する身体の生命感をダイナミックにフィルムに定着させます。",
                        "対立を無用に煽る不見識な声明文（30.4.x）",
                        "法的拘束力のない不完全な折衝文（30.4.y）",
                        "条約の留保条件を乱用した無効文（30.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u30-l4）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "是枝裕和監督の『万引き家族』は、カンヌ国際映画祭パルム・ドールを受賞し、血縁によらない疑似家族の温もりと格差社会の痛切な現実を世界の観客に突きつけました。",
                        "安全保障理事会決議の権能を無視した記述（30.4.a）",
                        "平和維持部隊の法的根拠を欠く文（30.4.b）",
                        "国際司法裁判所の判例に背く記述（30.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第4部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試30-4）。",
                    "options": [
                        "現代日本の映像作家たちは、アニメーションと実写映画の双方において、人間の実存的尊厳とエコロジーの倫理を世界に向けて発信し続けています。",
                        "条約履行義務を軽視した無効文（30.4.m）",
                        "全権委任状の要件を欠く不備文（30.4.n）",
                        "寄託手続きの誤謬文（30.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u30-l4）の主要外交用語を入力してください（「宮崎駿監」）：",
                    "acceptedAnswers": [
                        "宮崎駿監",
                        "宮崎駿監督の"
                    ],
                    "explanation": "正解の外交用語は「宮崎駿監」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u30-l5": {
        "id": "ja-u30-l5",
        "subject": "japanese",
        "unit": 30,
        "lessonNumber": 5,
        "title": "日本映像芸術の現代的展開と世界映画祭における批評的意義",
        "level": "C1",
        "objective": "現代日本映画・アニメーション（宮崎駿、高畑勲、是枝裕和、濱口竜介、新海誠、庵野秀明）の世界三大映画祭・アカデミー賞における批評的受容の総括。",
        "presentation": {
            "explanation": "21世紀における日本映像芸術の世界的飛翔と、その思想的・美学的達成を総括します。\n\n【現代日本映像芸術の国際的指標】\n１．世界三大映画祭（カンヌ・ヴェネツィア・ベルリン）および米アカデミー賞における席巻：\n　・『千と千尋の神隠し』（2002年ベルリン金熊賞・米アカデミー長編アニメ賞）\n　・『万引き家族』（2018年カンヌパルム・ドール）\n　・『ドライブ・マイ・カー』（2021年カンヌ脚本賞・米アカデミー国際長編映画賞）\n　・『君たちはどう生きるか』（2023年米アカデミー長編アニメ賞）\n２．固有の美学の世界的普遍化：\n　・自然崇拝とアニミズム、死生観の流動性、細部への偏執的描写力、言葉と沈黙の弁証法。",
            "examples": [
                {
                    "target": "現代の日本映像芸術は、アニメーションと実写劇映画の双頭において世界の映画批評の最前線を切り拓いています。",
                    "reading": "げんだいの にほんえいぞうげいじゅつは、アニメーションと じっしゃげきえいがの そうとうにおいて せかいの えいがひひょうの さいぜんせんを きりひらいています。",
                    "translation": "Contemporary Japanese visual arts spearhead the forefront of world film criticism at the twin helms of animation and live-action cinema."
                },
                {
                    "target": "アニミズム的な自然観や無常の美意識が、地球規模の環境危機や分断に直面する現代世界に深い倫理的示唆を与えています。",
                    "reading": "アニミズムてきな しぜんかんや むじょうの びいしきが、ちきゅうきぼの かんきょうききや ぶんだんに ちょくめんする げんだいせかいに ふかい りんりてきしさをお あたえています。",
                    "translation": "Animistic nature views and impermanence aesthetics offer profound ethical implications to a contemporary world confronting planetary environmental crises and divisions."
                },
                {
                    "target": "手描き作画の伝統を死守しつつデジタル技術と融合させる職人的姿勢が、唯一無二の生命的映像空間を現出させています。",
                    "reading": "てがきさくがの でんとうを ししゅしつつ デジタルぎじゅつと ゆうごうさせる しょくにんてきしせいが、ゆいいつむにの せいめいてきえいぞうくうかんを げんしゅつさせています。",
                    "translation": "A craftsman-like posture steadfastly guarding the tradition of hand-drawn animation while fusing it with digital technology manifests a singular living cinematic space."
                },
                {
                    "target": "言葉の多層的な響きと沈黙の深さを捉える映像言語は、異文化理解の新たな地平を照らし続けています。",
                    "reading": "ことばの たそうてきな ひびきと ちんもくの ふかさを とらえる えいぞうげんごは、いぶんかりかいの あらたな ちへいを てらしつづけています。",
                    "translation": "A cinematic language capturing the multi-layered resonance of words and the depth of silence continues to illuminate new horizons of intercultural understanding."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第5部）における国際法規範に厳密に合致する公式外交記述を選択してください（問30.5.1）。",
                    "options": [
                        "宮崎駿監督の『もののけ姫』は、タタラ場の製鉄による自然改変と森の神々の戦いを通じて、人間と自然の安易な調和を排した根源的な共生の葛藤を描き出しました。",
                        "国際条約法に反する法的誤謬（30.5.1）",
                        "主権平等の原則を逸脱した不適当な記述（30.5.2）",
                        "外交慣例に悖る修辞的欠陥文（30.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】宮崎駿（手描きアニメーションの生命感と生態系倫理）、是枝裕和（現代的リアリズム）の映像哲学（第5部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第5部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習30.5）。",
                    "options": [
                        "スタジオジブリが貫く圧倒的な手描きアニメーションの緻密な作画は、風のそよぎや水の流れ、飛翔する身体の生命感をダイナミックにフィルムに定着させます。",
                        "対立を無用に煽る不見識な声明文（30.5.x）",
                        "法的拘束力のない不完全な折衝文（30.5.y）",
                        "条約の留保条件を乱用した無効文（30.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u30-l5）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "是枝裕和監督の『万引き家族』は、カンヌ国際映画祭パルム・ドールを受賞し、血縁によらない疑似家族の温もりと格差社会の痛切な現実を世界の観客に突きつけました。",
                        "安全保障理事会決議の権能を無視した記述（30.5.a）",
                        "平和維持部隊の法的根拠を欠く文（30.5.b）",
                        "国際司法裁判所の判例に背く記述（30.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第5部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試30-5）。",
                    "options": [
                        "現代日本の映像作家たちは、アニメーションと実写映画の双方において、人間の実存的尊厳とエコロジーの倫理を世界に向けて発信し続けています。",
                        "条約履行義務を軽視した無効文（30.5.m）",
                        "全権委任状の要件を欠く不備文（30.5.n）",
                        "寄託手続きの誤謬文（30.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u30-l5）の主要外交用語を入力してください（「宮崎駿監」）：",
                    "acceptedAnswers": [
                        "宮崎駿監",
                        "宮崎駿監督の"
                    ],
                    "explanation": "正解の外交用語は「宮崎駿監」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u31-l1": {
        "id": "ja-u31-l1",
        "subject": "japanese",
        "unit": 31,
        "lessonNumber": 1,
        "title": "ユネスコ無形文化遺産「和食」の四大特質と自然尊重の精神",
        "level": "C2",
        "objective": "2013年ユネスコ無形文化遺産登録「和食：日本人の伝統的な食文化」、四大特質（多様で新鮮な食材、健康的な栄養バランス、自然美の表現、年中行事との結びつき）。",
        "presentation": {
            "explanation": "世界無形文化遺産に登録された「和食（わしょく）」の哲学的特質と食文化体系を学びます。\n\n【和食の四大特徴（農林水産省定義）】\n１．多様で新鮮な食材とその持ち味の尊重：\n　・南北に広がる国土と豊かな海・山・里の恵み。素材本来の味（持ち味）を過度な調味料で隠さず、包丁技と水と出汁で引き出す。\n２．健康的な食生活を支える栄養バランス：\n　・「一汁三菜（いちじゅうさんさい）」を基本スタイルとし、動物性油脂の少ないヘルシーな長寿食体系。\n３．自然の美しさや季節の移ろいの表現：\n　・季節の花や葉（もみじ・笹などのか敷き葉）を添え、器にも四季の情趣を取り入れて自然と食を一体化。\n４．正月・節句などの年中行事との密接な関わり：\n　・おせち料理や雑煮など、家族や地域の絆を強化する神仏への感謝の儀礼食。",
            "examples": [
                {
                    "target": "2013年にユネスコ無形文化遺産に登録された和食は、「自然の尊重」という日本人の精神性を体現した食文化です。",
                    "reading": "2013ねんに ユネスコむけいぶんかいさんに とうろくされた わしょくは、「しぜんの そんちょう」という にほんじんの せいしんせいを たいげんした しょくぶんかです。",
                    "translation": "Washoku, inscribed as UNESCO Intangible Cultural Heritage in 2013, is a dietary culture embodying the Japanese spirituality of 'respect for nature'."
                },
                {
                    "target": "一汁三菜を基本とする栄養バランスの優れた食事構造は、世界的な健康志向と長寿社会を支えるモデルとして称賛されています。",
                    "reading": "いちじゅうさんさいを きほんとする えいようバランスの すぐれた しょくじこうぞうは、せかいてきな けんこうしこうと ちょうじゅしゃかいを ささえる モデルとして しょうさんされています。",
                    "translation": "The nutritionally well-balanced dietary structure based on 'one soup and three dishes' is acclaimed as a model supporting global health consciousness and longevity societies."
                },
                {
                    "target": "食材本来の持ち味を損なわず、出汁と包丁技によって旨味を最大限に引き出すのが和食の調理技法の極意です。",
                    "reading": "しょくざいほんらいの もちあじを そこなわず、だしと ほうちょうわざによって うまみを さいだいげんに ひきだすのが わしょくの ちょうりぎじゅつの ごくいです。",
                    "translation": "Extracting umami to the maximum degree through dashi broth and knife skills without damaging ingredients' intrinsic flavor is the secret of Washoku culinary technique."
                },
                {
                    "target": "四季折々の旬の食材と季節感を表現する器の取り合わせにより、食事そのものが五感で味わう芸術へと昇華します。",
                    "reading": "しきおりおりの しゅんの しょくざいと きせつかんを ひょうげんする うつわの とりあわせにより、しょくじそのものが ごかんで あじわう げいじゅつへと しょうかします。",
                    "translation": "Through the combination of seasonal ingredients and tableware expressing seasonal sentiment, dining itself is sublimated into an art savored with all five senses."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第1部）における国際法規範に厳密に合致する公式外交記述を選択してください（問31.1.1）。",
                    "options": [
                        "ユネスコ無形文化遺産に登録された和食は、一汁三菜を基本とする栄養バランスの高さと、四季の移ろいを繊細に表現する器と料理の一体美を特徴としています。",
                        "国際条約法に反する法的誤謬（31.1.1）",
                        "主権平等の原則を逸脱した不適当な記述（31.1.2）",
                        "外交慣例に悖る修辞的欠陥文（31.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】ユネスコ無形文化遺産の和食四大原則、懐石料理の一汁三菜、江戸前鮨の熟成と酢締め技術（第1部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第1部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習31.1）。",
                    "options": [
                        "懐石料理における「走り・旬・名残り」の食材の使い分けは、自然の恵みの生命サイクルに対する深い敬意と風流な美意識を体現しています。",
                        "対立を無用に煽る不見識な声明文（31.1.x）",
                        "法的拘束力のない不完全な折衝文（31.1.y）",
                        "条約の留保条件を乱用した無効文（31.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u31-l1）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "江戸前鮨の職人は、鮪の赤身の湯引き漬けや小鰭の酢締めなど、素材の旨味を極限まで引き出す伝統的な仕込み仕事を施します。",
                        "安全保障理事会決議の権能を無視した記述（31.1.a）",
                        "平和維持部隊の法的根拠を欠く文（31.1.b）",
                        "国際司法裁判所の判例に背く記述（31.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第1部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試31-1）。",
                    "options": [
                        "北大路魯山人が説いた「器は料理の着物」という金言は、日本の食文化において視覚的調和が味覚体験と分かち難く結びついていることを示しています。",
                        "条約履行義務を軽視した無効文（31.1.m）",
                        "全権委任状の要件を欠く不備文（31.1.n）",
                        "寄託手続きの誤謬文（31.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u31-l1）の主要外交用語を入力してください（「ユネスコ」）：",
                    "acceptedAnswers": [
                        "ユネスコ",
                        "ユネスコ無形"
                    ],
                    "explanation": "正解の外交用語は「ユネスコ」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u31-l2": {
        "id": "ja-u31-l2",
        "subject": "japanese",
        "unit": 31,
        "lessonNumber": 2,
        "title": "本格懐石料理の献立構造：向付・煮物椀・焼物・強肴の調和",
        "level": "C2",
        "objective": "茶懐石（ちゃかいせき）および本格会席料理の献立構成（折敷・飯・汁・向付・煮物椀・焼物・強肴・八寸・湯桶）の起承転結。",
        "presentation": {
            "explanation": "茶の湯の精神から生まれた最高峰の日本料理コース「懐石料理（かいせきりょうり）」の献立構成と作法を学びます。\n\n【懐石料理の起承転結】\n１．折敷（おしき）：着席時に置かれる一汁三菜（炊き立ての飯、白味噌または赤出汁の汁、向付：旬の白身魚の刺身）。\n２．煮物椀（にものわん）：懐石の「花・メインディッシュ」。一番出汁に浮かぶ真丈（しんじょ）と季節の椀種。料理人の腕の真価が問われる一品。\n３．焼物（やきもの）：旬の魚の炭火焼き。\n４．強肴（しいざかな／進肴）：亭主が客に心づくしで勧める追加の珍味・和え物。\n５．八寸（はっすん）：八寸（約24cm）角の杉木地に盛られた「海の幸」と「山の幸」。亭主と客が杯を交わす酒宴のクライマックス。\n６．湯桶（ゆとう）と香の物：焦がし湯を注いでご飯粒を綺麗にいただき、食事を清らかに終える。",
            "examples": [
                {
                    "target": "懐石料理の真髄である煮物椀は、澄み切った一番出汁と旬の真丈によって料理人の技量のすべてが凝縮される主役です。",
                    "reading": "かいせきりょうりの しんずいである にものわんは、すみきった いちばんだしと しゅんの しんじょによって りょうりにんの ぎりょうの すべてが ぎょうしゅくされる しゅやくです。",
                    "translation": "The simmered bowl, the quintessence of Kaiseki cuisine, is the centerpiece where all of a chef's skill is concentrated through crystal-clear primary dashi and seasonal fish cake."
                },
                {
                    "target": "八寸には山海の旬の珍味が美しい彩りで盛り付けられ、主客が杯を酌み交わす風雅な時間が流れます。",
                    "reading": "はっすんには さんかいの しゅんの ちんみが うつくしい いろどりで もりつけられ、しゅかくが さかずきを くみかわす ふうがな じかんが ながれます。",
                    "translation": "In the Hassun, seasonal delicacies of mountain and sea are arranged in beautiful colors, with elegant time flowing as host and guest exchange sake cups."
                },
                {
                    "target": "温かいものは温かいうちに、冷たいものは冷たいうちに供するという「もてなしのタイミング」が徹底されます。",
                    "reading": "あたたかい ものは あたたかいうちに、つめたい ものは つめたいうちに きょうするという「もてなしの タイミング」が てっていされます。",
                    "translation": "The 'timing of hospitality'—serving hot dishes while hot and cold dishes while cold—is thoroughly upheld."
                },
                {
                    "target": "茶道の精神を受け継ぐ懐石は、空腹を満たすためだけでなく、心を通わせる精神的儀礼としての性格を帯びています。",
                    "reading": "さどうの せいしんを うけつぐ かいせきは、くうふくを みたすためだけでなく、こころを かよわせる せいしんてきぎれいとしての せいかくを おびています。",
                    "translation": "Kaiseki inheriting the spirit of the tea ceremony bears the character not merely of satisfying hunger, but of a spiritual rite for communion of hearts."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第2部）における国際法規範に厳密に合致する公式外交記述を選択してください（問31.2.1）。",
                    "options": [
                        "ユネスコ無形文化遺産に登録された和食は、一汁三菜を基本とする栄養バランスの高さと、四季の移ろいを繊細に表現する器と料理の一体美を特徴としています。",
                        "国際条約法に反する法的誤謬（31.2.1）",
                        "主権平等の原則を逸脱した不適当な記述（31.2.2）",
                        "外交慣例に悖る修辞的欠陥文（31.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】ユネスコ無形文化遺産の和食四大原則、懐石料理の一汁三菜、江戸前鮨の熟成と酢締め技術（第2部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第2部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習31.2）。",
                    "options": [
                        "懐石料理における「走り・旬・名残り」の食材の使い分けは、自然の恵みの生命サイクルに対する深い敬意と風流な美意識を体現しています。",
                        "対立を無用に煽る不見識な声明文（31.2.x）",
                        "法的拘束力のない不完全な折衝文（31.2.y）",
                        "条約の留保条件を乱用した無効文（31.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u31-l2）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "江戸前鮨の職人は、鮪の赤身の湯引き漬けや小鰭の酢締めなど、素材の旨味を極限まで引き出す伝統的な仕込み仕事を施します。",
                        "安全保障理事会決議の権能を無視した記述（31.2.a）",
                        "平和維持部隊の法的根拠を欠く文（31.2.b）",
                        "国際司法裁判所の判例に背く記述（31.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第2部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試31-2）。",
                    "options": [
                        "北大路魯山人が説いた「器は料理の着物」という金言は、日本の食文化において視覚的調和が味覚体験と分かち難く結びついていることを示しています。",
                        "条約履行義務を軽視した無効文（31.2.m）",
                        "全権委任状の要件を欠く不備文（31.2.n）",
                        "寄託手続きの誤謬文（31.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u31-l2）の主要外交用語を入力してください（「ユネスコ」）：",
                    "acceptedAnswers": [
                        "ユネスコ",
                        "ユネスコ無形"
                    ],
                    "explanation": "正解の外交用語は「ユネスコ」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u31-l3": {
        "id": "ja-u31-l3",
        "subject": "japanese",
        "unit": 31,
        "lessonNumber": 3,
        "title": "出汁の極致：真昆布と本枯節の旨味相乗効果と「引き算の美学」",
        "level": "C2",
        "objective": "日本の出汁（だし）科学、昆布のグルタミン酸×鰹節のイノシン酸による旨味相乗効果（7〜8倍）、西洋ブイヨン（足し算）との対比（引き算の美学）。",
        "presentation": {
            "explanation": "日本料理の命である「出汁（だし）」の生化学的メカニズムと「引き算の美学」を学びます。\n\n【旨味相乗効果（Umami Synergism）の生化学】\n・発見：1908年池田菊苗教授が昆布からグルタミン酸を発見、1913年小玉新太郎が鰹節からイノシン酸を発見。\n・相乗効果の定理：アミノ酸系旨味（グルタミン酸：昆布）と核酸系旨味（イノシン酸：鰹節）を特定の比率（1:1）で混合すると、単独の7〜8倍の強烈な旨味が生じます。\n\n【「足し算の西洋ブイヨン」対「引き算の日本出汁」】\n・西洋のフォンやブイヨン：肉・香味野菜・香辛料を何時間も煮込んで濃厚なエキスを「足し算」する。\n・日本の出汁：厳選された昆布と鰹節をわずか数分間、沸騰直前で素早く引き上げる「引き算」の極致。透明無垢でありながら無限の深みを持つ純粋な旨味。",
            "examples": [
                {
                    "target": "昆布のグルタミン酸と鰹節のイノシン酸が出会うことで生じる「旨味相乗効果」は、単独の数倍もの深い風味を生み出します。",
                    "reading": "こんぶの グルタミンさんと かつおぶしの イノシンさんが であうことで しょうじる「うまみそうじょうこうか」は、たんどくの すうばいもの ふかい ふうみを うみだします。",
                    "translation": "The 'umami synergistic effect' arising when kelp's glutamic acid meets bonito flakes' inosinic acid produces deep flavor several times stronger than either alone."
                },
                {
                    "target": "油や香辛料を重ねる西洋料理の「足し算」に対し、素材のエッセンスのみを短時間で抽出する和食の出汁は「引き算の美学」です。",
                    "reading": "あぶらや こうしんりょうを かさねる せいようりょうりの「たしざん」に たいし、そざいの エッセンスのみを たんじかんで ちゅうしゅつする わしょくの だしは「ひきざんの びがく」です。",
                    "translation": "In contrast to the 'additive' nature of Western cooking layering fats and spices, Washoku dashi extracting only material essence in minutes is an 'aesthetic of subtraction'."
                },
                {
                    "target": "半年以上の歳月をかけてカビ付けと天日干しを繰り返した最高級の「本枯節」は、芳醇な香りと澄んだ琥珀色の出汁を生み出します。",
                    "reading": "はんとし いじょうの さいげつを かけて カビづけと てんぴぼしを くりかえした さいこうきゅうの「ほんかれぶし」は、ほうじゅんな かおりと すんだ こはくいろの だしを うみだします。",
                    "translation": "Top-grade 'Honkarebushi', which undergoes repeated mold cultivation and sun-drying over more than half a year, produces fragrant aroma and clear amber-colored broth."
                },
                {
                    "target": "世界中の一流シェフたちが来日して出汁の抽出技術を学び、グローバルな現代ガストロノミーに革命を起こしています。",
                    "reading": "せかいじゅうの いちりゅうシェフたちが らいにちして だしの ちゅうしゅつぎじゅつを まなび、グローバルな げんだいガストロノミーに かくめいを おこしています。",
                    "translation": "Leading chefs worldwide visit Japan to learn dashi extraction techniques, sparking a revolution in global contemporary gastronomy."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第3部）における国際法規範に厳密に合致する公式外交記述を選択してください（問31.3.1）。",
                    "options": [
                        "ユネスコ無形文化遺産に登録された和食は、一汁三菜を基本とする栄養バランスの高さと、四季の移ろいを繊細に表現する器と料理の一体美を特徴としています。",
                        "国際条約法に反する法的誤謬（31.3.1）",
                        "主権平等の原則を逸脱した不適当な記述（31.3.2）",
                        "外交慣例に悖る修辞的欠陥文（31.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】ユネスコ無形文化遺産の和食四大原則、懐石料理の一汁三菜、江戸前鮨の熟成と酢締め技術（第3部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第3部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習31.3）。",
                    "options": [
                        "懐石料理における「走り・旬・名残り」の食材の使い分けは、自然の恵みの生命サイクルに対する深い敬意と風流な美意識を体現しています。",
                        "対立を無用に煽る不見識な声明文（31.3.x）",
                        "法的拘束力のない不完全な折衝文（31.3.y）",
                        "条約の留保条件を乱用した無効文（31.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u31-l3）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "江戸前鮨の職人は、鮪の赤身の湯引き漬けや小鰭の酢締めなど、素材の旨味を極限まで引き出す伝統的な仕込み仕事を施します。",
                        "安全保障理事会決議の権能を無視した記述（31.3.a）",
                        "平和維持部隊の法的根拠を欠く文（31.3.b）",
                        "国際司法裁判所の判例に背く記述（31.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第3部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試31-3）。",
                    "options": [
                        "北大路魯山人が説いた「器は料理の着物」という金言は、日本の食文化において視覚的調和が味覚体験と分かち難く結びついていることを示しています。",
                        "条約履行義務を軽視した無効文（31.3.m）",
                        "全権委任状の要件を欠く不備文（31.3.n）",
                        "寄託手続きの誤謬文（31.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u31-l3）の主要外交用語を入力してください（「ユネスコ」）：",
                    "acceptedAnswers": [
                        "ユネスコ",
                        "ユネスコ無形"
                    ],
                    "explanation": "正解の外交用語は「ユネスコ」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u31-l4": {
        "id": "ja-u31-l4",
        "subject": "japanese",
        "unit": 31,
        "lessonNumber": 4,
        "title": "江戸前鮨の精緻な技術体系：赤酢シャリ・熟成・昆布締め・酢締め",
        "level": "C2",
        "objective": "江戸前鮨（えどまえずし）の伝統仕事、赤酢（酒粕酢）のシャリ、魚の熟成（エイジング）、昆布締め、小肌の酢締め、煮切り醤油。",
        "presentation": {
            "explanation": "江戸時代の屋台発祥から世界最高峰の美食へと進化した「江戸前鮨（えどまえずし）」の職人技を学びます。\n\n【江戸前鮨の四大仕込み技術（仕事）】\n１．赤酢（あかず）のシャリ：\n　・日本酒の酒粕を数年熟成させた赤酢と塩のみで合わせるシャリ。アミノ酸が豊富で人肌の温度に保たれ、魚の脂と完璧に乳化。\n２．酢締め（すじめ）：\n　・小肌（コハダ）や鯖などの青魚。塩で水分を抜き、酢で締めることで殺菌とともに旨味を凝縮。\n３．昆布締め（こんぶじめ）：\n　・鯛や平目などの白身魚を昆布で挟み、水分を昆布に吸収させつつ昆布のグルタミン酸を魚に移す。\n４．熟成（エイジング）と煮切り：\n　・鮪（マグロ）などを氷温で数日から十数日熟成させ、タンパク質がアミノ酸に分解した最高潮の旨味で提供。醤油と酒・みりんを一煮立ちさせた「煮切り醤油」をハケで塗る。",
            "examples": [
                {
                    "target": "江戸前鮨の真骨頂は、獲れたての生魚をそのまま出すのではなく、塩・酢・昆布・醤油を駆使して旨味を極限まで高める「仕事」にあります。",
                    "reading": "えどまえずしの しんこっちょうは、とれたての なまざかなを そのまま だすのではなく、しお・す・こんぶ・しょうゆを くしして うまみを きょくげんまで たかめる「しごと」に あります。",
                    "translation": "The true worth of Edomae sushi lies not in serving freshly caught raw fish as-is, but in the 'shigoto' (craft) elevating umami to the limit using salt, vinegar, kelp, and soy sauce."
                },
                {
                    "target": "酒粕を長期熟成させた赤酢を用いた人肌のシャリが、熟成された魚の脂と口の中で完璧にほどけ合います。",
                    "reading": "さけかすを ちょうきじゅくせいさせた あかずを もちいた ひとはだの シャリが、じゅくせいされた さかなの あぶらと くちの なかで かんぺきに ほどけあいます。",
                    "translation": "Body-temperature sushi rice seasoned with red vinegar made from long-aged sake lees melts together perfectly in the mouth with the aged fish fats."
                },
                {
                    "target": "小肌の酢締めにおける塩振りと酢漬けの秒単位の職人的勘が、鮨屋の看板の格式を決定づけます。",
                    "reading": "こはだの すじめにおける しおふりと すづけの びょうたんいの しょくにんてきかんが、すしやの かんばんの かくしきを けっていづけます。",
                    "translation": "The craftsman's split-second intuition for salting and vinegar immersion in Kohada curing determines the prestige of a sushi restaurant's reputation."
                },
                {
                    "target": "握り手の手数が少なく、空気をふんわりと抱き込ませて握られた一貫は、口に入れた瞬間に心地よく崩壊します。",
                    "reading": "にぎりての てかずが すくなく、くうきを ふんわりと だきこませて にぎられた いっかんは、くちに いれた しゅんかんに ここちよく ほうかいします。",
                    "translation": "A piece of sushi shaped with few hand strokes, softly embracing air within, pleasantly dissolves the instant it enters the mouth."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第4部）における国際法規範に厳密に合致する公式外交記述を選択してください（問31.4.1）。",
                    "options": [
                        "ユネスコ無形文化遺産に登録された和食は、一汁三菜を基本とする栄養バランスの高さと、四季の移ろいを繊細に表現する器と料理の一体美を特徴としています。",
                        "国際条約法に反する法的誤謬（31.4.1）",
                        "主権平等の原則を逸脱した不適当な記述（31.4.2）",
                        "外交慣例に悖る修辞的欠陥文（31.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】ユネスコ無形文化遺産の和食四大原則、懐石料理の一汁三菜、江戸前鮨の熟成と酢締め技術（第4部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第4部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習31.4）。",
                    "options": [
                        "懐石料理における「走り・旬・名残り」の食材の使い分けは、自然の恵みの生命サイクルに対する深い敬意と風流な美意識を体現しています。",
                        "対立を無用に煽る不見識な声明文（31.4.x）",
                        "法的拘束力のない不完全な折衝文（31.4.y）",
                        "条約の留保条件を乱用した無効文（31.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u31-l4）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "江戸前鮨の職人は、鮪の赤身の湯引き漬けや小鰭の酢締めなど、素材の旨味を極限まで引き出す伝統的な仕込み仕事を施します。",
                        "安全保障理事会決議の権能を無視した記述（31.4.a）",
                        "平和維持部隊の法的根拠を欠く文（31.4.b）",
                        "国際司法裁判所の判例に背く記述（31.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第4部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試31-4）。",
                    "options": [
                        "北大路魯山人が説いた「器は料理の着物」という金言は、日本の食文化において視覚的調和が味覚体験と分かち難く結びついていることを示しています。",
                        "条約履行義務を軽視した無効文（31.4.m）",
                        "全権委任状の要件を欠く不備文（31.4.n）",
                        "寄託手続きの誤謬文（31.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u31-l4）の主要外交用語を入力してください（「ユネスコ」）：",
                    "acceptedAnswers": [
                        "ユネスコ",
                        "ユネスコ無形"
                    ],
                    "explanation": "正解の外交用語は「ユネスコ」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u31-l5": {
        "id": "ja-u31-l5",
        "subject": "japanese",
        "unit": 31,
        "lessonNumber": 5,
        "title": "和食器（漆器・陶磁器）と季節の取り合わせ、器と料理の対話",
        "level": "C2",
        "objective": "和食器の美学（漆器の温もり・備前焼の土味・京焼・有田焼）、北大路魯山人の「器は料理の着物」、「見立て」の美意識。",
        "presentation": {
            "explanation": "「器は料理の着物である」と喝破した北大路魯山人（きたおおじろさんじん）の言葉に象徴される和食器と料理の空間統合を学びます。\n\n【和食器の多様性と感性美】\n１．漆器（しっき：輪島塗・山中塗など）：\n　・「木と漆」による温もり。唇に触れたときの柔らかな吸い付き感、熱い汁物を入れても手が熱くならない断熱性。\n２．陶器（土もの）と磁器（石もの）：\n　・土もの（備前焼・信楽焼・唐津焼・萩焼）：釉薬を用いない焼締めや素朴な土のテクスチャー。\n　・石もの（有田焼・九谷焼・京焼）：白磁に施された鮮やかな色絵や金彩の優美。\n３．季節と料理の調和：\n　・夏には涼を呼ぶガラスや青磁、冬には温もりを感じさせる厚手の陶器や漆器を取り合わせる。",
            "examples": [
                {
                    "target": "美食家・北大路魯山人が「食器は料理の着物である」と述べたように、和食において器選びは味覚と美意識を決定づける不可欠の要素です。",
                    "reading": "びしょくか・きたおおじろさんじんが「しょっきは りょうりの きものである」と のべたように、わしょくにおいて うつわえらびは みかくと びいしきを けっていづける ふかけつの ようそです。",
                    "translation": "As the gastronome Rosanjin Kitaoji stated 'Tableware is the clothing of cuisine', in Washoku selecting dishes is an indispensable element determining taste and aesthetics."
                },
                {
                    "target": "漆器の椀は、手に持ったときの吸い付くような感触と口当たりの柔らかさによって汁物の味わいを格段に深めます。",
                    "reading": "しっきの わんは、てに もった ときの すいつくような かんしょくと くちあたりの やわらかさによって しるものの あじわいを かくだんに ふかめます。",
                    "translation": "A lacquer bowl vastly deepens the flavor of soup through its clingingly soft tactile feel when held in hand and smoothness against the lips."
                },
                {
                    "target": "備前焼の無釉の素朴な土肌は、盛り付けられた旬の魚や山菜の生命力を力強く引き立てます。",
                    "reading": "びぜんやきの むゆうの そぼくな つちはだは、もりつけられた しゅんの さかなや さんさいの せいめいりょくを ちからづよく ひきたてます。",
                    "translation": "The unglazed rustic earthen texture of Bizen ware powerfully accentuates the vitality of arranged seasonal fish and mountain herbs."
                },
                {
                    "target": "料理と器の余白のバランスを計算し、一皿の上に季節の風景を写し取る「見立て」の美学が息づいています。",
                    "reading": "りょうりと うつわの よはくの バランスを けいさんし、ひとさらの うえに きせつの ふうけいを うつしとる「みたて」の びがくが いきづいています。",
                    "translation": "Calculating the balance between food and tableware margins, the aesthetic of 'mitate' capturing seasonal landscapes upon a single plate is vividly alive."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第5部）における国際法規範に厳密に合致する公式外交記述を選択してください（問31.5.1）。",
                    "options": [
                        "ユネスコ無形文化遺産に登録された和食は、一汁三菜を基本とする栄養バランスの高さと、四季の移ろいを繊細に表現する器と料理の一体美を特徴としています。",
                        "国際条約法に反する法的誤謬（31.5.1）",
                        "主権平等の原則を逸脱した不適当な記述（31.5.2）",
                        "外交慣例に悖る修辞的欠陥文（31.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】ユネスコ無形文化遺産の和食四大原則、懐石料理の一汁三菜、江戸前鮨の熟成と酢締め技術（第5部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第5部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習31.5）。",
                    "options": [
                        "懐石料理における「走り・旬・名残り」の食材の使い分けは、自然の恵みの生命サイクルに対する深い敬意と風流な美意識を体現しています。",
                        "対立を無用に煽る不見識な声明文（31.5.x）",
                        "法的拘束力のない不完全な折衝文（31.5.y）",
                        "条約の留保条件を乱用した無効文（31.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u31-l5）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "江戸前鮨の職人は、鮪の赤身の湯引き漬けや小鰭の酢締めなど、素材の旨味を極限まで引き出す伝統的な仕込み仕事を施します。",
                        "安全保障理事会決議の権能を無視した記述（31.5.a）",
                        "平和維持部隊の法的根拠を欠く文（31.5.b）",
                        "国際司法裁判所の判例に背く記述（31.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第5部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試31-5）。",
                    "options": [
                        "北大路魯山人が説いた「器は料理の着物」という金言は、日本の食文化において視覚的調和が味覚体験と分かち難く結びついていることを示しています。",
                        "条約履行義務を軽視した無効文（31.5.m）",
                        "全権委任状の要件を欠く不備文（31.5.n）",
                        "寄託手続きの誤謬文（31.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u31-l5）の主要外交用語を入力してください（「ユネスコ」）：",
                    "acceptedAnswers": [
                        "ユネスコ",
                        "ユネスコ無形"
                    ],
                    "explanation": "正解の外交用語は「ユネスコ」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u32-l1": {
        "id": "ja-u32-l1",
        "subject": "japanese",
        "unit": 32,
        "lessonNumber": 1,
        "title": "世阿弥『風姿花伝』における「妙花風（みょうかふう）」：無上の幽玄境",
        "level": "C2",
        "objective": "世阿弥の最高峰芸道論『風姿花伝』『九位』における「妙花風」、言葉・形を超えた究極の幽玄境の思索。",
        "presentation": {
            "explanation": "世阿弥が晩年の著作『九位（きゅうい）』『花鏡（かきょう）』において到達した芸術の絶対境地「妙花風（みょうかふう）」を学びます。\n\n【能楽芸位の最高位「妙花風」】\n・世阿弥は芸の位を九段階（九位）に分類し、その最高峰を「妙花風」と位置づけました。\n・「妙（みょう）」の定義：「言語道断（言葉で言い表せない）、心行処滅（心の分別が消え失せた）の境地」。\n・「白馬、蘆花（ろか）に入る」：白い馬が白一面の葦の花の原に入ると、姿は見えなくなるが厳然としてそこに存在する。作為を完全に消し去った無作・自然の至高の舞。",
            "examples": [
                {
                    "target": "世阿弥が芸の最高峰として位置づけた「妙花風」は、一切の技術的作為を超越し言葉で言い尽くせない無上の幽玄境です。",
                    "reading": "ぜあみが げいの さいこうほうとして いちづけた「みょうかふう」は、いっさいの ぎじゅつてきさくいを ちょうえつし ことばで いいつくせない むじょうの ゆうげんきょうです。",
                    "translation": "The 'Myokafu' positioned by Zeami as the supreme pinnacle of art is an unsurpassed yugen realm transcending all technical contrivance and beyond verbal description."
                },
                {
                    "target": "作為や技巧を完全に削ぎ落とした無心・自然の舞の中に、万物を包み込む神聖な美が宿ります。",
                    "reading": "さくいや ぎこうを かんぜんに そぎおとした むしん・しぜんの まいの なかに、ばんぶつを つつみこむ しんせいな びが やどります。",
                    "translation": "Within a selfless, natural dance stripped entirely of contrivance and artifice resides a sacred beauty enveloping all things."
                },
                {
                    "target": "名人の演じる能において、観客は役者の存在を忘れ、舞台に立ち現れる霊的な宇宙そのものと合一します。",
                    "reading": "めいじんの えんじる のうにおいて、かんきゃくは やくしゃの そんざいを わすれ、ぶたいに たちあらわれる れいてきな うちゅうそのものと ごういつします。",
                    "translation": "In a Noh performed by a master, the audience forgets the actor's existence and unites with the spiritual universe itself manifesting on stage."
                },
                {
                    "target": "『九位』における厳格な芸位分類は、芸術家の精神的成熟の道程を示す不滅の指標として現代に受け継がれています。",
                    "reading": "『きゅうい』における げんかくな げいいぶんるいは、げいじゅつかの せいしんてきせいじゅくの みちのりを しめす ふめつの しひょうとして げんだいに うけつがれています。",
                    "translation": "The rigorous classification of artistic ranks in 'The Nine Stages' is transmitted to the present as an immortal guidepost indicating the journey of an artist's spiritual maturation."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第1部）における国際法規範に厳密に合致する公式外交記述を選択してください（問32.1.1）。",
                    "options": [
                        "世阿弥が遺した『風姿花伝』の「初心忘るるべからず」という金言は、各年代において直面する新たな試練と自己の未熟さに対する生涯の謙虚な姿勢を戒めています。",
                        "国際条約法に反する法的誤謬（32.1.1）",
                        "主権平等の原則を逸脱した不適当な記述（32.1.2）",
                        "外交慣例に悖る修辞的欠陥文（32.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】世阿弥の『風姿花伝』、狂言の喜劇性、土方巽・大野一雄の「暗黒舞踏（Butoh）」の身体論（第1部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第1部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習32.1）。",
                    "options": [
                        "狂言の傑作『附子』において、主人の不在中に毒と偽られた黒砂糖を盗み食いする太郎冠者と次郎冠者の機知に富んだ対話は、庶民の逞しい笑いを見事に描き出します。",
                        "対立を無用に煽る不見識な声明文（32.1.x）",
                        "法的拘束力のない不完全な折衝文（32.1.y）",
                        "条約の留保条件を乱用した無効文（32.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u32-l1）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "土方巽と大野一雄が創始した暗黒舞踏は、白塗りの肉体と重力に抗わない沈床の身体技法によって、西洋のモダンダンス界に強烈な前衛的衝撃を与えました。",
                        "安全保障理事会決議の権能を無視した記述（32.1.a）",
                        "平和維持部隊の法的根拠を欠く文（32.1.b）",
                        "国際司法裁判所の判例に背く記述（32.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第1部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試32-1）。",
                    "options": [
                        "日本の舞台芸術は、能楽の静謐な幽玄から狂言の軽妙な笑い、舞踏の前衛的身体性まで、精神と肉体の極限を探求し続けています。",
                        "条約履行義務を軽視した無効文（32.1.m）",
                        "全権委任状の要件を欠く不備文（32.1.n）",
                        "寄託手続きの誤謬文（32.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u32-l1）の主要外交用語を入力してください（「世阿弥が」）：",
                    "acceptedAnswers": [
                        "世阿弥が",
                        "世阿弥が遺し"
                    ],
                    "explanation": "正解の外交用語は「世阿弥が」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u32-l2": {
        "id": "ja-u32-l2",
        "subject": "japanese",
        "unit": 32,
        "lessonNumber": 2,
        "title": "『申楽談儀』『至花道』における「離見の見」：客観的自己観察の身体論",
        "level": "C2",
        "objective": "世阿弥『花鏡』『申楽談儀』の「離見の見（りけんのけん）」、「目前心後（もくぜんしんご）」、客観的身体観察の演劇現象学。",
        "presentation": {
            "explanation": "世阿弥が創案した世界演劇史上最も先駆的な自己認識・身体論「離見の見（りけんのけん）」を学びます。\n\n【「離見の見」と「目前心後」の理論】\n１．我見（がけん）と離見（りけん）：\n　・我見：役者自身の目線で前を見ること（主観的自己視点）。\n　・離見：観客の座席から舞台上の自分を見ている客観的視線。\n２．離見の見（りけんのけん）：\n　・「観客が見ている自分自身の姿（後ろ姿も含めた全方位の身体）」を、役者自身が心の中に内在化して客観的に観照する高度な認知状態。\n３．目前心後（もくぜんしんご）：\n　・目は前を見ていても、心は常に自分の背後に置いて背中の姿まで見守ること。「後ろ姿の美」の発見。",
            "examples": [
                {
                    "target": "世阿弥の「離見の見」とは、役者が自らの主観に溺れず、観客の視線から客観的に自らの舞姿を見つめる高度な自己統制です。",
                    "reading": "ぜあみの「りけんのけん」とは、やくしゃが みずからの しゅかんに おぼれず、かんきゃくの しせんから きゃっかんてきに みずからの まいすがたを みつめる こうどな じことうせいです。",
                    "translation": "Zeami's 'Seeing with Detached Sight' is an advanced self-control where the actor, not drowning in subjectivity, gazes objectively upon their own dancing form from the audience's perspective."
                },
                {
                    "target": "「目前心後」の教えは、前を向きながらも心を背後に置き、見えない後ろ姿の美しさにまで全神経を配ることを説きます。",
                    "reading": "「もくぜんしんご」の おしえは、まえを むきながらも こころを はいごに おき、みえない うしろすがたの うつくしさにまで ぜんしんけいを くばることを ときます。",
                    "translation": "The teaching of 'eyes in front, mind behind' instructs placing the mind behind while facing front, distributing full awareness even to the beauty of the invisible back."
                },
                {
                    "target": "自己の身体を空間の中で第三者として多角的に把握する視座は、現代の認知心理学や身体技法論においても画期的な理論です。",
                    "reading": "じこの しんたいを くうかんの なかで だいさんしゃとして たかくてきに はあくする しざは、げんだいの にんちしんりがくや しんたいぎほうろんにおいても かっきてきな りろんです。",
                    "translation": "The vantage point of grasping one's own body multi-dimensionally as a third party within space is an epoch-making theory even in modern cognitive psychology and body technique theories."
                },
                {
                    "target": "主観と客観を瞬時に架橋するこの身体感覚の鍛錬こそが、舞台上に完璧な調和と緊迫感をもたらします。",
                    "reading": "しゅかんと きゃっかんを しゅんじに かきょうする この しんたいかんかくの たんれんこそが、ぶたいじょうに かんぺきな ちょうわと きんぱくかんを もたらします。",
                    "translation": "The rigorous training of this bodily sense bridging subjectivity and objectivity instantaneously brings perfect harmony and tension onto the stage."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第2部）における国際法規範に厳密に合致する公式外交記述を選択してください（問32.2.1）。",
                    "options": [
                        "世阿弥が遺した『風姿花伝』の「初心忘るるべからず」という金言は、各年代において直面する新たな試練と自己の未熟さに対する生涯の謙虚な姿勢を戒めています。",
                        "国際条約法に反する法的誤謬（32.2.1）",
                        "主権平等の原則を逸脱した不適当な記述（32.2.2）",
                        "外交慣例に悖る修辞的欠陥文（32.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】世阿弥の『風姿花伝』、狂言の喜劇性、土方巽・大野一雄の「暗黒舞踏（Butoh）」の身体論（第2部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第2部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習32.2）。",
                    "options": [
                        "狂言の傑作『附子』において、主人の不在中に毒と偽られた黒砂糖を盗み食いする太郎冠者と次郎冠者の機知に富んだ対話は、庶民の逞しい笑いを見事に描き出します。",
                        "対立を無用に煽る不見識な声明文（32.2.x）",
                        "法的拘束力のない不完全な折衝文（32.2.y）",
                        "条約の留保条件を乱用した無効文（32.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u32-l2）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "土方巽と大野一雄が創始した暗黒舞踏は、白塗りの肉体と重力に抗わない沈床の身体技法によって、西洋のモダンダンス界に強烈な前衛的衝撃を与えました。",
                        "安全保障理事会決議の権能を無視した記述（32.2.a）",
                        "平和維持部隊の法的根拠を欠く文（32.2.b）",
                        "国際司法裁判所の判例に背く記述（32.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第2部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試32-2）。",
                    "options": [
                        "日本の舞台芸術は、能楽の静謐な幽玄から狂言の軽妙な笑い、舞踏の前衛的身体性まで、精神と肉体の極限を探求し続けています。",
                        "条約履行義務を軽視した無効文（32.2.m）",
                        "全権委任状の要件を欠く不備文（32.2.n）",
                        "寄託手続きの誤謬文（32.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u32-l2）の主要外交用語を入力してください（「世阿弥が」）：",
                    "acceptedAnswers": [
                        "世阿弥が",
                        "世阿弥が遺し"
                    ],
                    "explanation": "正解の外交用語は「世阿弥が」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u32-l3": {
        "id": "ja-u32-l3",
        "subject": "japanese",
        "unit": 32,
        "lessonNumber": 3,
        "title": "狂言の人間観察と笑いの構造：中世庶民の生命力と風刺性",
        "level": "C2",
        "objective": "能楽と対をなす喜劇「狂言（きょうげん）」、大名と太郎冠者（たろうかじゃ）、中世庶民の健康的な笑いと人間讃歌の構造。",
        "presentation": {
            "explanation": "悲劇・幽玄の「能」と同一の舞台で演じられ、対をなす対話喜劇「狂言（きょうげん）」の笑いの構造を学びます。\n\n【狂言の劇的世界と人物類型】\n１．太郎冠者（たろうかじゃ）と主人（大名）：\n　・知恵が回りちゃっかりした召使（太郎冠者）が、威張り散らす愚かな主人（大名）をユーモアと機転でやり込める風刺喜劇。\n２．日常性と庶民の生命力：\n　・鬼や山伏、神仏までもがどこか間が抜けて愛嬌のある存在として描かれ、身分社会の抑圧を「大らかな笑い」で吹き飛ばす。\n３．狂言の台詞術とオノマトペ：\n　・「ヤアヤア」「このあたりに隠れもない…」「サラサラ」「ドブドブ」など、軽妙洒脱なリズムと写実的擬音。",
            "examples": [
                {
                    "target": "狂言は、太郎冠者と大名の軽妙なやり取りを通じて、身分社会のヒエラルキーを健康的で温かな笑いによって風刺しました。",
                    "reading": "きょうげんは、たろうかじゃと だいみょうの けいみょうな やりとりを つうじて、みぶんしゃかいの ヒエラルキーを けんこうてきで あたたかな わらいによって ふうししました。",
                    "translation": "Kyogen satirized the hierarchies of feudal class society through healthy and warm humor via witty exchanges between servant Taro Kaja and feudal lord Daimyo."
                },
                {
                    "target": "能が霊界や死者の無常を描くのに対し、狂言は現世を逞しく生きる名もなき庶民の生命力を肯定的に謳い上げます。",
                    "reading": "のうが れいかいや ししゃの むじょうを えがくのに たいし、きょうげんは げんせを たくましく いきる なもなき しょみんの せいめいりょくを こうていてきに うたいあげます。",
                    "translation": "While Noh depicts the spiritual realm and the transience of the dead, Kyogen affirmatively celebrates the vitality of nameless commoners living robustly in this world."
                },
                {
                    "target": "小道具を用いずに扇一本であらゆる事物を抽象的に見立てる洗練された演技法が、狂言の笑いを普遍的な芸術へと高めています。",
                    "reading": "こどうぐを もちいずに おうぎいっぽんで あらゆる じぶつを ちゅうしょうてきに みたてる せんれんされた えんぎほうが、きょうげんの わらいを ふへんてきな げいじゅつへと たかめています。",
                    "translation": "A sophisticated acting method using a single folding fan to abstractly represent myriad objects without props elevates Kyogen comedy to universal art."
                },
                {
                    "target": "悪人が一人も登場せず、人間の愚かしさや愛嬌を丸ごと許容する世界観に、日本の中世ヒューマニズムの結晶が見られます。",
                    "reading": "あくにんが ひとりも とうじょうせず、にんげんの おろかしさや あいきょうを まるごと きょようする せかいかんに、にほんの ちゅうせいヒューマニズムの けっしょうが みられます。",
                    "translation": "In a worldview where not a single villain appears and human foolishness and charm are wholly embraced, one observes the crystallization of Japanese medieval humanism."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第3部）における国際法規範に厳密に合致する公式外交記述を選択してください（問32.3.1）。",
                    "options": [
                        "世阿弥が遺した『風姿花伝』の「初心忘るるべからず」という金言は、各年代において直面する新たな試練と自己の未熟さに対する生涯の謙虚な姿勢を戒めています。",
                        "国際条約法に反する法的誤謬（32.3.1）",
                        "主権平等の原則を逸脱した不適当な記述（32.3.2）",
                        "外交慣例に悖る修辞的欠陥文（32.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】世阿弥の『風姿花伝』、狂言の喜劇性、土方巽・大野一雄の「暗黒舞踏（Butoh）」の身体論（第3部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第3部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習32.3）。",
                    "options": [
                        "狂言の傑作『附子』において、主人の不在中に毒と偽られた黒砂糖を盗み食いする太郎冠者と次郎冠者の機知に富んだ対話は、庶民の逞しい笑いを見事に描き出します。",
                        "対立を無用に煽る不見識な声明文（32.3.x）",
                        "法的拘束力のない不完全な折衝文（32.3.y）",
                        "条約の留保条件を乱用した無効文（32.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u32-l3）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "土方巽と大野一雄が創始した暗黒舞踏は、白塗りの肉体と重力に抗わない沈床の身体技法によって、西洋のモダンダンス界に強烈な前衛的衝撃を与えました。",
                        "安全保障理事会決議の権能を無視した記述（32.3.a）",
                        "平和維持部隊の法的根拠を欠く文（32.3.b）",
                        "国際司法裁判所の判例に背く記述（32.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第3部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試32-3）。",
                    "options": [
                        "日本の舞台芸術は、能楽の静謐な幽玄から狂言の軽妙な笑い、舞踏の前衛的身体性まで、精神と肉体の極限を探求し続けています。",
                        "条約履行義務を軽視した無効文（32.3.m）",
                        "全権委任状の要件を欠く不備文（32.3.n）",
                        "寄託手続きの誤謬文（32.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u32-l3）の主要外交用語を入力してください（「世阿弥が」）：",
                    "acceptedAnswers": [
                        "世阿弥が",
                        "世阿弥が遺し"
                    ],
                    "explanation": "正解の外交用語は「世阿弥が」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u32-l4": {
        "id": "ja-u32-l4",
        "subject": "japanese",
        "unit": 32,
        "lessonNumber": 4,
        "title": "土方巽・大野一雄の「暗黒舞踏（Butoh）」：身体の肉化と前衛身体論",
        "level": "C2",
        "objective": "1960年代に誕生した前衛身体表現「暗黒舞踏（Butoh）」、土方巽（1928-1986）と大野一雄（1906-2010）、肉体の危機と白塗り身体の世界的衝撃。",
        "presentation": {
            "explanation": "西洋モダンダンスの美化された身体美を拒絶し、日本の土着性から世界を震撼させた「暗黒舞踏（Butoh）」を学びます。\n\n【暗黒舞踏（Butoh）の革命性】\n１．土方巽（ひじかたたつみ）：\n　・『禁色』（1959年・三島由紀夫原作）で幕を開けた前衛身体運動。\n　・西洋的直立・跳躍美への反逆として、O脚・内股・うずくまり・痙攣・白塗りの身体を提示し、「衰弱体の美学」を確立。\n２．大野一雄（おおのかずお）：\n　・『ラ・アルヘンチーナ頌』（1977年）：老衰した肉体に宿る無垢な魂の即興的飛翔。\n３．世界的前衛舞台芸術としての受容：\n　・山海塾（天児牛大）らを通じてヨーロッパ・南北アメリカで絶大な評価を獲得し、世界共通語「BUTOH」として定着。",
            "examples": [
                {
                    "target": "土方巽と大野一雄が創始した「暗黒舞踏」は、白塗りの肉体と異形の所作によって西洋近代ダンスの美学的規範を根底から解体しました。",
                    "reading": "ひじかたたつみと おおのかずおが そうしした「あんこくぶとう」は、しろぬりの にくたいと いぎょうの しょさによって せいようきんだいダンスの びがくてききはんを こんていから かいたいしました。",
                    "translation": "'Ankoku Butoh' founded by Tatsumi Hijikata and Kazuo Ohno fundamentally dismantled the aesthetic norms of modern Western dance through white-painted flesh and bizarre gestures."
                },
                {
                    "target": "直立や跳躍といった上昇志向の西洋身体に対し、大地に這いつくばり死や泥に接近する下降の身体論を提示しました。",
                    "reading": "ちょくりつや ちょうやくといった じょうしょうしこうの せいようしんたいに たいし、だいちに はいつくばり しや どろに せっきんする かこうの しんたいろんを ていじしました。",
                    "translation": "Against upwardly aspiring Western bodies of erectness and leaping, they presented a downward bodily theory crawling on the earth and approaching death and mud."
                },
                {
                    "target": "大野一雄の『ラ・アルヘンチーナ頌』に見る老境の肉体の即興的飛翔は、魂の無垢な祈りとして世界中の観客を涙させました。",
                    "reading": "おおのかずおの『ラ・アルヘンチーナしょう』に みる ろうきょうの にくたいの そっきょうてきひしょうは、たましいの むくな いのりとして せかいじゅうの かんきゃくを なみださせました。",
                    "translation": "The improvisational flight of aged flesh in Kazuo Ohno's 'Admiring La Argentina' moved audiences worldwide to tears as a pure prayer of the soul."
                },
                {
                    "target": "現在、「BUTOH」は世界各国のコンテンポラリーダンスや演劇、パフォーマンスアートに計り知れない影響を与え続けています。",
                    "reading": "げんざい、「BUTOH」は せかいかっこくの コンテンポラリーダンスや えんげき、パフォーマンスアートに はかりしれない えいきょうを あたえつづけています。",
                    "translation": "Today, 'BUTOH' continues to exert incalculable influence on contemporary dance, theater, and performance art across nations worldwide."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第4部）における国際法規範に厳密に合致する公式外交記述を選択してください（問32.4.1）。",
                    "options": [
                        "世阿弥が遺した『風姿花伝』の「初心忘るるべからず」という金言は、各年代において直面する新たな試練と自己の未熟さに対する生涯の謙虚な姿勢を戒めています。",
                        "国際条約法に反する法的誤謬（32.4.1）",
                        "主権平等の原則を逸脱した不適当な記述（32.4.2）",
                        "外交慣例に悖る修辞的欠陥文（32.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】世阿弥の『風姿花伝』、狂言の喜劇性、土方巽・大野一雄の「暗黒舞踏（Butoh）」の身体論（第4部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第4部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習32.4）。",
                    "options": [
                        "狂言の傑作『附子』において、主人の不在中に毒と偽られた黒砂糖を盗み食いする太郎冠者と次郎冠者の機知に富んだ対話は、庶民の逞しい笑いを見事に描き出します。",
                        "対立を無用に煽る不見識な声明文（32.4.x）",
                        "法的拘束力のない不完全な折衝文（32.4.y）",
                        "条約の留保条件を乱用した無効文（32.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u32-l4）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "土方巽と大野一雄が創始した暗黒舞踏は、白塗りの肉体と重力に抗わない沈床の身体技法によって、西洋のモダンダンス界に強烈な前衛的衝撃を与えました。",
                        "安全保障理事会決議の権能を無視した記述（32.4.a）",
                        "平和維持部隊の法的根拠を欠く文（32.4.b）",
                        "国際司法裁判所の判例に背く記述（32.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第4部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試32-4）。",
                    "options": [
                        "日本の舞台芸術は、能楽の静謐な幽玄から狂言の軽妙な笑い、舞踏の前衛的身体性まで、精神と肉体の極限を探求し続けています。",
                        "条約履行義務を軽視した無効文（32.4.m）",
                        "全権委任状の要件を欠く不備文（32.4.n）",
                        "寄託手続きの誤謬文（32.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u32-l4）の主要外交用語を入力してください（「世阿弥が」）：",
                    "acceptedAnswers": [
                        "世阿弥が",
                        "世阿弥が遺し"
                    ],
                    "explanation": "正解の外交用語は「世阿弥が」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u32-l5": {
        "id": "ja-u32-l5",
        "subject": "japanese",
        "unit": 32,
        "lessonNumber": 5,
        "title": "伝統身体技法と現代パフォーマンスアートの超克的融合",
        "level": "C2",
        "objective": "能・歌舞伎・狂言・舞踏に共通する日本身体論の通底軸（腰の座り・重心の低さ・呼吸と間）とグローバル舞台芸術への統合。",
        "presentation": {
            "explanation": "六百年にわたる能楽から前衛舞踏に至る日本の身体芸術の深層構造を比較総括します。\n\n【日本の身体技法に一貫する三原則】\n１．重心の低さと丹田（たんでん）：\n　・膝を曲げ、下腹部（丹田）に重心を落として大地と結びつく接地性の身体（Grounding）。\n２．呼吸による時間の支配（息の合い）：\n　・呼気と吸気の微細な制御によって、空間の緊迫感と緩急（間）を生み出す。\n３．個我の滅却と媒体としての身体：\n　・自己を誇示するのではなく、神仏、霊魂、自然現象、他者の情念が通り抜ける「器（うつわ）」として身体を差し出す演劇的態度。",
            "examples": [
                {
                    "target": "能の擦り足から舞踏のうずくまりに至るまで、大地へと重心を低く沈める接地性こそが日本身体文化の一貫した基盤です。",
                    "reading": "のうの すりあしから ぶとうの うずくまりに いたるまで、だいちへと じゅうしんを ひくく しずめる せっちせいこそが にほんしんたいぶんかの いっかんした きばんです。",
                    "translation": "From Noh's sliding steps to Butoh's crouching, the grounding lowering center of gravity toward the earth is the consistent foundation of Japanese body culture."
                },
                {
                    "target": "自らのエゴを空っぽにし、祖先の霊や自然の息吹が通り抜ける「媒体」として肉体を捧げる態度が共通しています。",
                    "reading": "みずからの エゴを からっぽにし、そせんの れいや しぜんの いぶきが とおりぬける「ばいたい」として にくたいを ささげる たいどが きょうつうしています。",
                    "translation": "The attitude of emptying one's own ego and offering the flesh as a 'medium' through which ancestral spirits and nature's breath pass is shared in common."
                },
                {
                    "target": "ピナ・バウシュら西洋のダンス・テアトル運動も、日本の伝統身体論の持つ根源的な劇的力に深く共鳴しました。",
                    "reading": "ピナ・バウシュら せいようの ダンス・テアトルうんどうも、にほんの でんとうしんたいろんの もつ こんげんてきな げきてきちからに ふかく きょうめいしました。",
                    "translation": "Western Tanztheater movements including Pina Bausch deeply resonated with the primordial dramatic power possessed by Japanese traditional body theory."
                },
                {
                    "target": "高度な型と即興的身体が交錯する日本の舞台美学は、未来のパフォーミングアーツに向けた無尽蔵の創造的資源です。",
                    "reading": "こうどな かたと そっきょうてきしんたいが こうさくする にほんの ぶたいびがくは、みらいの パフォーミングアーツに むけた むじんぞうの そうぞうてきしげんです。",
                    "translation": "Japanese stage aesthetics where sophisticated Kata and improvisational body intersect are an inexhaustible creative resource toward future performing arts."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第5部）における国際法規範に厳密に合致する公式外交記述を選択してください（問32.5.1）。",
                    "options": [
                        "世阿弥が遺した『風姿花伝』の「初心忘るるべからず」という金言は、各年代において直面する新たな試練と自己の未熟さに対する生涯の謙虚な姿勢を戒めています。",
                        "国際条約法に反する法的誤謬（32.5.1）",
                        "主権平等の原則を逸脱した不適当な記述（32.5.2）",
                        "外交慣例に悖る修辞的欠陥文（32.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】世阿弥の『風姿花伝』、狂言の喜劇性、土方巽・大野一雄の「暗黒舞踏（Butoh）」の身体論（第5部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第5部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習32.5）。",
                    "options": [
                        "狂言の傑作『附子』において、主人の不在中に毒と偽られた黒砂糖を盗み食いする太郎冠者と次郎冠者の機知に富んだ対話は、庶民の逞しい笑いを見事に描き出します。",
                        "対立を無用に煽る不見識な声明文（32.5.x）",
                        "法的拘束力のない不完全な折衝文（32.5.y）",
                        "条約の留保条件を乱用した無効文（32.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u32-l5）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "土方巽と大野一雄が創始した暗黒舞踏は、白塗りの肉体と重力に抗わない沈床の身体技法によって、西洋のモダンダンス界に強烈な前衛的衝撃を与えました。",
                        "安全保障理事会決議の権能を無視した記述（32.5.a）",
                        "平和維持部隊の法的根拠を欠く文（32.5.b）",
                        "国際司法裁判所の判例に背く記述（32.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第5部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試32-5）。",
                    "options": [
                        "日本の舞台芸術は、能楽の静謐な幽玄から狂言の軽妙な笑い、舞踏の前衛的身体性まで、精神と肉体の極限を探求し続けています。",
                        "条約履行義務を軽視した無効文（32.5.m）",
                        "全権委任状の要件を欠く不備文（32.5.n）",
                        "寄託手続きの誤謬文（32.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u32-l5）の主要外交用語を入力してください（「世阿弥が」）：",
                    "acceptedAnswers": [
                        "世阿弥が",
                        "世阿弥が遺し"
                    ],
                    "explanation": "正解の外交用語は「世阿弥が」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u33-l1": {
        "id": "ja-u33-l1",
        "subject": "japanese",
        "unit": 33,
        "lessonNumber": 1,
        "title": "伊勢神宮「式年遷宮」の1300年継続と「常若（とこわか）」の思想",
        "level": "C2",
        "objective": "伊勢神宮の式年遷宮（しきねんせんぐう：持統天皇四年690年始原）、二十年毎の正殿造替、永遠の若さを保つ「常若（とこわか）」の哲理。",
        "presentation": {
            "explanation": "飛鳥時代以来千三百年以上にわたって継承されてきた伊勢神宮（いせじんぐう）の「式年遷宮（しきねんせんぐう）」の哲学的構造を学びます。\n\n【式年遷宮の歴史的・思想的根幹】\n１．二十年ごとの完全造替：\n　・内宮（皇大神宮）と外宮（豊受大神宮）の隣接する敷地（東の御敷地・西の御敷地）に、二十年ごとに社殿、神宝・装束のすべてを寸分違わず新しく造り替えて神様にお遷りいただく国家大祭。\n２．「常若（とこわか）」の思想：\n　・石の建造物のように古びて朽ちていくことを拒み、常に新しく清浄な状態を更新し続けることで「永遠の生命」を維持するという日本の根源的生命観。\n３．無形技術の継承システム：\n　・20年という周期は、親世代の大工（棟梁）が子世代の大工を育て、孫世代が立ち会うことで、建築技術と儀礼が途絶えることなく三世代の間で確実に伝承される絶妙な人間工学的サイクルです。",
            "examples": [
                {
                    "target": "伊勢神宮で千三百年以上にわたり繰り返されてきた式年遷宮は、社殿を新しく造り替えることで永遠の生命を保つ「常若」の思想を体現しています。",
                    "reading": "いせじんぐうで せんさんびゃくねんいじょうに わたり くりかえされてきた しきねんせんぐうは、しゃでんを あたらしく つくりかえることで えいえんの せいめいを たもつ「とこわか」の しそうを たいげんしています。",
                    "translation": "The Shikinen Sengu repeated for over 1,300 years at Ise Jingu embodies the philosophy of 'Tokowaka'—maintaining eternal life by renewing shrine buildings."
                },
                {
                    "target": "二十年という周期は、宮大工の高度な木工技術や神宝の製作技法を次世代の職人へと確実に口伝・継承するための絶妙な知恵です。",
                    "reading": "にじゅうねんという しゅうきは、みやだいくの こうどな もっこうぎじゅつや しんぽうの せいさくぎほうを じせだいの しょくにんへと かくじつに くでん・けいしょうするための ぜつみょうな ちえです。",
                    "translation": "The twenty-year cycle is exquisite wisdom for reliably passing down temple carpenters' advanced woodworking skills and sacred treasure crafting techniques to the next generation."
                },
                {
                    "target": "正殿のみならず、御装束や御神宝の千数百点に至るまで、一切の妥協なく古代の技法そのままに新調されます。",
                    "reading": "せいでんのみならず、おんしょうぞくや ごしんぽうの せんすうひゃくてんに いたるまで、いっさいの だきょうなく こだいの ぎほうそのままに しんちょうされます。",
                    "translation": "Not only the main sanctuary, but thousands of sacred garments and divine treasures are freshly remade without any compromise exactly following ancient techniques."
                },
                {
                    "target": "古材となった社殿の檜材は、日本全国の被災神社や鳥居の修復資材として再利用され、徹底した循環型社会を形成しています。",
                    "reading": "こざいとなった しゃでんの ひのきざいは、にほんぜんこくの ひさいじんじゃや とりいの しゅうふくしざいとして さいりようされ、てっていした じゅんかんがたしゃかいを けいせいしています。",
                    "translation": "The cypress timbers from dismantled sanctuaries are recycled as restoration materials for damaged shrines and torii gates across Japan, forming a thorough circular society."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第1部）における国際法規範に厳密に合致する公式外交記述を選択してください（問33.1.1）。",
                    "options": [
                        "伊勢神宮で千三百年以上にわたり連綿と継承されてきた式年遷宮は、神殿を二十年ごとに新造することで技術と精神を未来へ永遠に再生させる「常若」の思想を具現化しています。",
                        "国際条約法に反する法的誤謬（33.1.1）",
                        "主権平等の原則を逸脱した不適当な記述（33.1.2）",
                        "外交慣例に悖る修辞的欠陥文（33.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】伊勢神宮の二十年毎の式年遷宮、法隆寺の世界最古木造建築（607年）、宮大工の継手・仕口技術（第1部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第1部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習33.1）。",
                    "options": [
                        "西暦607年創建の法隆寺五重塔は、心柱を中心とする柔構造と宮大工による精緻な木組み技術によって、千四百年の風雪と大地震に耐え抜いてきました。",
                        "対立を無用に煽る不見識な声明文（33.1.x）",
                        "法的拘束力のない不完全な折衝文（33.1.y）",
                        "条約の留保条件を乱用した無効文（33.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u33-l1）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "宮大工の西岡常一棟梁は「木は生育した方位のまま使え」という古代からの口伝を守り、樹齢千年の檜の生命力を建築構造の中に活かし続けました。",
                        "安全保障理事会決議の権能を無視した記述（33.1.a）",
                        "平和維持部隊の法的根拠を欠く文（33.1.b）",
                        "国際司法裁判所の判例に背く記述（33.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第1部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試33-1）。",
                    "options": [
                        "日本の伝統木造建築における金物や釘を用いない継手・仕口の技法は、木材の呼吸と収縮を許容する有機的構造力学の頂点を示しています。",
                        "条約履行義務を軽視した無効文（33.1.m）",
                        "全権委任状の要件を欠く不備文（33.1.n）",
                        "寄託手続きの誤謬文（33.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u33-l1）の主要外交用語を入力してください（「伊勢神宮」）：",
                    "acceptedAnswers": [
                        "伊勢神宮",
                        "伊勢神宮で千"
                    ],
                    "explanation": "正解の外交用語は「伊勢神宮」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u33-l2": {
        "id": "ja-u33-l2",
        "subject": "japanese",
        "unit": 33,
        "lessonNumber": 2,
        "title": "唯一神明造（ゆいいつしんめいづくり）の建築美学：素木・茅葺の簡素美",
        "level": "C2",
        "objective": "伊勢神宮正殿の建築様式「唯一神明造（ゆいいつしんめいづくり）」、素木（しらき）の檜、茅葺屋根、棟持柱（むなもちばしら）の古代美学。",
        "presentation": {
            "explanation": "日本建築史上最も古式を留め、神聖を極める「唯一神明造（ゆいいつしんめいづくり）」の建築形態を学びます。\n\n【唯一神明造の建築的特質】\n１．素木（しらき）仕上げ：\n　・漆や塗装を一切施さず、最高品質の木曽檜（ひのき）の素肌そのものの木目と芳香を活かす絶対的清浄美。\n２．棟持柱（むなもちばしら）：\n　・建物の外側に独立して立ち、屋根の棟木を直接地面から支える二本の巨大な丸太柱（高床式穀倉の古代的原型）。\n３．茅葺（かやぶき）の切妻屋根：\n　・厚く刈り揃えられた茅葺屋根の上に、十本の鰹木（かつおぎ）と、天を突く千木（ちぎ）が交差する荘厳なシルエット。\n４．金物装飾の抑制：\n　・柱や梁の接合には釘を使わず、金銅の金物（錺金具）のみが純白の素木に輝く。",
            "examples": [
                {
                    "target": "伊勢神宮正殿の「唯一神明造」は、塗装を排した檜の素木と茅葺屋根によって、古代日本の簡素にして荘厳な原初的建築美を伝えています。",
                    "reading": "いせじんぐうせいでんの「ゆいいつしんめいづくり」は、とそうを はいした ひのきの しらきと かやぶきやねによって、こだいにほんの かんそにして そうごんな げんしょてきけんちくびを つたえています。",
                    "translation": "The 'Yuiitsu Shinmei-zukuri' of Ise Jingu's main sanctuary conveys the simple yet solemn primordial architectural beauty of ancient Japan through unpainted plain cypress and thatched roofs."
                },
                {
                    "target": "屋根の棟を外側から直接支える二本の「棟持柱」は、高床式倉庫の構造を色濃く残す古代建築の象徴です。",
                    "reading": "やねの むねを そとがわから ちょくせつ ささえる にほんの「むなもちばしら」は、たかゆかしきそうこの こうぞうを いろこく のこす こだいけんちくの しょうちょうです。",
                    "translation": "The two 'ridge-supporting pillars' supporting the roof ridge directly from outside are symbols of ancient architecture deeply retaining elevated granary structures."
                },
                {
                    "target": "風雨に晒された素木の檜が時間の経過とともに白銀色へと変化していく様は、自然と調和する無常の美を宿しています。",
                    "reading": "ふううに さらされた しらきの ひのきが じかんの けいかとともに はくぎんいろへと へんかしていく さまは、しぜんと ちょうわする むじょうの びを やどしています。",
                    "translation": "The way the plain cypress weathered by wind and rain transforms into silvery white over time harbors an impermanent beauty in harmony with nature."
                },
                {
                    "target": "屋根の上に交差する千木と整然と並ぶ鰹木は、青空と神宮の神域の杜を背景に神々しい美しさを放ちます。",
                    "reading": "やねの うえに こうさする ちぎと せいぜんと ならぶ かつおぎは、あおぞらと じんぐうの しんいきの もりを はいけいに こうごうしい うつくしさを はなちます。",
                    "translation": "The chigi finials crossing above the roof and the orderly arranged katsuogi logs radiate divine beauty against the backdrop of blue sky and sacred forest."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第2部）における国際法規範に厳密に合致する公式外交記述を選択してください（問33.2.1）。",
                    "options": [
                        "伊勢神宮で千三百年以上にわたり連綿と継承されてきた式年遷宮は、神殿を二十年ごとに新造することで技術と精神を未来へ永遠に再生させる「常若」の思想を具現化しています。",
                        "国際条約法に反する法的誤謬（33.2.1）",
                        "主権平等の原則を逸脱した不適当な記述（33.2.2）",
                        "外交慣例に悖る修辞的欠陥文（33.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】伊勢神宮の二十年毎の式年遷宮、法隆寺の世界最古木造建築（607年）、宮大工の継手・仕口技術（第2部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第2部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習33.2）。",
                    "options": [
                        "西暦607年創建の法隆寺五重塔は、心柱を中心とする柔構造と宮大工による精緻な木組み技術によって、千四百年の風雪と大地震に耐え抜いてきました。",
                        "対立を無用に煽る不見識な声明文（33.2.x）",
                        "法的拘束力のない不完全な折衝文（33.2.y）",
                        "条約の留保条件を乱用した無効文（33.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u33-l2）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "宮大工の西岡常一棟梁は「木は生育した方位のまま使え」という古代からの口伝を守り、樹齢千年の檜の生命力を建築構造の中に活かし続けました。",
                        "安全保障理事会決議の権能を無視した記述（33.2.a）",
                        "平和維持部隊の法的根拠を欠く文（33.2.b）",
                        "国際司法裁判所の判例に背く記述（33.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第2部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試33-2）。",
                    "options": [
                        "日本の伝統木造建築における金物や釘を用いない継手・仕口の技法は、木材の呼吸と収縮を許容する有機的構造力学の頂点を示しています。",
                        "条約履行義務を軽視した無効文（33.2.m）",
                        "全権委任状の要件を欠く不備文（33.2.n）",
                        "寄託手続きの誤謬文（33.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u33-l2）の主要外交用語を入力してください（「伊勢神宮」）：",
                    "acceptedAnswers": [
                        "伊勢神宮",
                        "伊勢神宮で千"
                    ],
                    "explanation": "正解の外交用語は「伊勢神宮」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u33-l3": {
        "id": "ja-u33-l3",
        "subject": "japanese",
        "unit": 33,
        "lessonNumber": 3,
        "title": "法隆寺西院伽藍（世界最古木造建築）：心柱懸垂構造と層間変形による耐震機構",
        "level": "C2",
        "objective": "法隆寺（607年創建・世界遺産）、五重塔の「心柱懸垂構造」、層間変形による地震エネルギー分散の力学的奇跡。",
        "presentation": {
            "explanation": "千四百年以上の風雪と巨大地震に耐え抜いた世界最古の木造建造物群「法隆寺（ほうりゅうじ）西院伽藍」の耐震力学を学びます。\n\n【五重塔（31.5メートル）の耐震メカニズム「柔構造」】\n１．心柱（しんばしら）の独立懸垂：\n　・塔の中心を貫く巨大な檜の心柱は、周囲の各層の床や骨組みと構造的に固定されておらず、上部から吊り下げられているか礎石の上に独立して立っています。\n２．層間変形（スネークダンス）：\n　・地震の際、一層・二層・三層・四層・五層がそれぞれ互い違いに逆方向へと揺れ（層間変位）、心柱が中央で振り子（Tuned Mass Damper）として機能して共振を打ち消す。\n３．組物（くみもの：雲肘木・斗）：\n　・無数の木組みの摩擦によって地震エネルギーを熱エネルギーへと変換して吸収。\n４．現代の超高層タワー（東京スカイツリー等）の制振システムへの直接的応用。",
            "examples": [
                {
                    "target": "法隆寺五重塔は、千四百年の間巨大地震に一度も倒壊しなかった世界最古の木造建築の耐震的奇跡です。",
                    "reading": "ほうりゅうじごじゅうのとうは、せんよんひゃくねんの あいだ きょだいじしんに いちども とうかいしなかった せかいさいこの もくぞうけんちくの たいしんてききせきです。",
                    "translation": "The Horyuji Five-Story Pagoda is an earthquake-resistant miracle of the world's oldest wooden architecture, having never collapsed in major earthquakes over 1,400 years."
                },
                {
                    "target": "各層が互い違いに揺れて地震の衝撃波を吸収する「スネークダンス」現象により、塔全体の倒壊が防がれます。",
                    "reading": "かくそうが たがいちがいに ゆれて じしんの しょうげきはを きゅうしゅうする「スネークダンス」げんしょうにより、とうぜんたいの とうかいが ふせがれます。",
                    "translation": "Through the 'snake dance' phenomenon where each tier sways alternately to absorb seismic shockwaves, collapse of the entire pagoda is prevented."
                },
                {
                    "target": "心柱が独立した振り子として揺れを相殺する原理は、現代の東京スカイツリーの心柱制振システムに直截に応用されました。",
                    "reading": "しんばしらが どくりつした ふりことして ゆれを そうさいする げんりは、げんだいの とうきょうスカイツリーの しんばしらせいしんシステムに ちょくせつに おうようされました。",
                    "translation": "The principle of the central pillar offsetting tremors as an independent pendulum was directly applied to the central-column vibration damping system of modern Tokyo Skytree."
                },
                {
                    "target": "飛鳥時代の工匠たちが確立した釘を使わない複雑な木組みの摩擦力こそが、地震エネルギーの減衰装置として機能しています。",
                    "reading": "あすかじだいの こうしょうたちが かくりつした くぎを つかわない ふくざつな きぐみの まさつりょくこそが、じしんエネルギーの げんすいそうちとして きのうしています。",
                    "translation": "The frictional force of intricate joinery without nails established by Asuka-period master carpenters functions as an earthquake energy attenuation device."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第3部）における国際法規範に厳密に合致する公式外交記述を選択してください（問33.3.1）。",
                    "options": [
                        "伊勢神宮で千三百年以上にわたり連綿と継承されてきた式年遷宮は、神殿を二十年ごとに新造することで技術と精神を未来へ永遠に再生させる「常若」の思想を具現化しています。",
                        "国際条約法に反する法的誤謬（33.3.1）",
                        "主権平等の原則を逸脱した不適当な記述（33.3.2）",
                        "外交慣例に悖る修辞的欠陥文（33.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】伊勢神宮の二十年毎の式年遷宮、法隆寺の世界最古木造建築（607年）、宮大工の継手・仕口技術（第3部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第3部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習33.3）。",
                    "options": [
                        "西暦607年創建の法隆寺五重塔は、心柱を中心とする柔構造と宮大工による精緻な木組み技術によって、千四百年の風雪と大地震に耐え抜いてきました。",
                        "対立を無用に煽る不見識な声明文（33.3.x）",
                        "法的拘束力のない不完全な折衝文（33.3.y）",
                        "条約の留保条件を乱用した無効文（33.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u33-l3）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "宮大工の西岡常一棟梁は「木は生育した方位のまま使え」という古代からの口伝を守り、樹齢千年の檜の生命力を建築構造の中に活かし続けました。",
                        "安全保障理事会決議の権能を無視した記述（33.3.a）",
                        "平和維持部隊の法的根拠を欠く文（33.3.b）",
                        "国際司法裁判所の判例に背く記述（33.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第3部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試33-3）。",
                    "options": [
                        "日本の伝統木造建築における金物や釘を用いない継手・仕口の技法は、木材の呼吸と収縮を許容する有機的構造力学の頂点を示しています。",
                        "条約履行義務を軽視した無効文（33.3.m）",
                        "全権委任状の要件を欠く不備文（33.3.n）",
                        "寄託手続きの誤謬文（33.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u33-l3）の主要外交用語を入力してください（「伊勢神宮」）：",
                    "acceptedAnswers": [
                        "伊勢神宮",
                        "伊勢神宮で千"
                    ],
                    "explanation": "正解の外交用語は「伊勢神宮」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u33-l4": {
        "id": "ja-u33-l4",
        "subject": "japanese",
        "unit": 33,
        "lessonNumber": 4,
        "title": "宮大工の秘伝技術：金物を使わない「継手・仕口」と木材の「癖読み」",
        "level": "C2",
        "objective": "宮大工（みやだいく）の棟梁・西岡常一（1908-1995）の口伝、「木を買わず山を買え」「木は生育の方位のまま使え」、継手・仕口の超絶技巧。",
        "presentation": {
            "explanation": "「法隆寺最後の宮大工棟梁」と謳われた西岡常一（にしおかならいち）に伝わる口伝と木工技術を学びます。\n\n【宮大工の口伝（木と生きる哲学）】\n１．「木は生育の方位のままに使え」：\n　・南斜面で育った木は建物の南側に、北斜面で厳しい風雪に耐えた木は北側の柱に用いる。木が生まれ育った方位に配置してこそ、千年狂わない。\n２．「木を買わず山を買え」：\n　・一本ずつの木材の規格を見るのではなく、山全体の地形、日当たり、地質を把握して木材を選定せよ。\n３．「木材の癖（くせ）を組め」：\n　・木には右にねじれる癖、左にねじれる癖がある。癖を殺すのではなく、右ねじれの木と左ねじれの木を向かい合わせて組むことで、互いの癖が打ち消し合って強固になる。\n４．継手（つぎて：長さを継ぐ）と仕口（しぐち：直角・斜めに交差）：\n　・金輪継（かなわつぎ）、追掛け大栓継など、千年の耐久力を持つ伝統接合技術。",
            "examples": [
                {
                    "target": "名棟梁・西岡常一が伝えた「木は生育の方位のままに使え」という口伝は、木の生命力を建築に活かす極意です。",
                    "reading": "めいとうりょう・にしおかならいちが つたえた「きは せいいくの ほういの ままに つかえ」という くでんは、きの せいめいりょくを けんちくに いかす ごくいです。",
                    "translation": "The oral tradition 'Use trees according to the direction in which they grew' conveyed by master carpenter Tsunekazu Nishioka is the secret to utilizing wood's vitality in architecture."
                },
                {
                    "target": "木の持つ特有のねじれや反りの「癖」を殺さず、相反する癖を持つ木同士を組み合わせることで千年狂わない構造物が生まれます。",
                    "reading": "きの もつ とくゆうの ねじれや そりの「くせ」を ころさず、あいはんする くせを もつ きどうしを くみあわせることで せんねん くるわない こうぞうぶつが うまれます。",
                    "translation": "Without suppressing the 'habits' of twisting and warping characteristic of wood, combining timbers with opposite tendencies generates structures that do not warp for a thousand years."
                },
                {
                    "target": "金属のボルトや釘は百年で錆びて朽ちますが、檜の継手・仕口は千年以上の耐久性を発揮します。",
                    "reading": "きんぞくの ボルトや くぎは ひゃくねんで さびて くちますが、ひのきの つぎて・しぐちは せんねんいじょうの たいきゅうせいを はっきします。",
                    "translation": "While metal bolts and nails rust and decay in a century, cypress scarf and mortise joints demonstrate durability exceeding a thousand years."
                },
                {
                    "target": "木材の性質を熟知した宮大工の鑿（のみ）と鉋（かんな）の技は、無形文化遺産として世界最高水準の木工技術を誇ります。",
                    "reading": "もくざいの せいしつを じゅくちした みやだいくの のみと かんなの わざは、むけいぶんかいさんとして せかいさいこうすいじゅんの もっこうぎじゅつを ほこります。",
                    "translation": "The chisel and hand-plane techniques of master carpenters intimately familiar with wood properties boast the world's highest standard of woodworking technology as intangible cultural heritage."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第4部）における国際法規範に厳密に合致する公式外交記述を選択してください（問33.4.1）。",
                    "options": [
                        "伊勢神宮で千三百年以上にわたり連綿と継承されてきた式年遷宮は、神殿を二十年ごとに新造することで技術と精神を未来へ永遠に再生させる「常若」の思想を具現化しています。",
                        "国際条約法に反する法的誤謬（33.4.1）",
                        "主権平等の原則を逸脱した不適当な記述（33.4.2）",
                        "外交慣例に悖る修辞的欠陥文（33.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】伊勢神宮の二十年毎の式年遷宮、法隆寺の世界最古木造建築（607年）、宮大工の継手・仕口技術（第4部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第4部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習33.4）。",
                    "options": [
                        "西暦607年創建の法隆寺五重塔は、心柱を中心とする柔構造と宮大工による精緻な木組み技術によって、千四百年の風雪と大地震に耐え抜いてきました。",
                        "対立を無用に煽る不見識な声明文（33.4.x）",
                        "法的拘束力のない不完全な折衝文（33.4.y）",
                        "条約の留保条件を乱用した無効文（33.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u33-l4）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "宮大工の西岡常一棟梁は「木は生育した方位のまま使え」という古代からの口伝を守り、樹齢千年の檜の生命力を建築構造の中に活かし続けました。",
                        "安全保障理事会決議の権能を無視した記述（33.4.a）",
                        "平和維持部隊の法的根拠を欠く文（33.4.b）",
                        "国際司法裁判所の判例に背く記述（33.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第4部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試33-4）。",
                    "options": [
                        "日本の伝統木造建築における金物や釘を用いない継手・仕口の技法は、木材の呼吸と収縮を許容する有機的構造力学の頂点を示しています。",
                        "条約履行義務を軽視した無効文（33.4.m）",
                        "全権委任状の要件を欠く不備文（33.4.n）",
                        "寄託手続きの誤謬文（33.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u33-l4）の主要外交用語を入力してください（「伊勢神宮」）：",
                    "acceptedAnswers": [
                        "伊勢神宮",
                        "伊勢神宮で千"
                    ],
                    "explanation": "正解の外交用語は「伊勢神宮」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u33-l5": {
        "id": "ja-u33-l5",
        "subject": "japanese",
        "unit": 33,
        "lessonNumber": 5,
        "title": "国宝建造物の修復理念、樹齢千年の檜育成と持続可能性",
        "level": "C2",
        "objective": "日本の文化財保存修復理念（解体修理・痕跡保存）、二百年・三百年先を見据えた「神宮備林（ひのきの森）」植林プロジェクト。",
        "presentation": {
            "explanation": "千年の建築遺産を未来の千年へと手渡すための文化財修復理念と森林資源の持続可能性を総括します。\n\n【文化財建造物の保存修復三原則】\n１．可逆性（Reversibility）：将来の技術向上のために、いつでも元の状態に戻せる工法を採用。\n２．当初材の最大限の保存（繕い修理）：傷んだ部分だけを埋木（うめき）や樹脂で修復し、飛鳥・奈良時代のオリジナル部材を可能な限り再利用。\n３．解体修理（かいたいしゅうり）：数百年ごとに建物を一度完全に解体し、構造の歪みを矯正して再度組み直す。\n\n【二百年先を見据えた森林計画「神宮備林」】\n・伊勢神宮や国宝修理に必要な樹齢200〜300年を超える大径檜（芯去り材）を確保するため、木曽や宮域林で計画的植林を継続する持続可能な文明の営み。",
            "examples": [
                {
                    "target": "日本の文化財修復は、建物を新築同様に建て替えるのではなく、千年前の部材を最大限残して繕う「保存の倫理」に貫かれています。",
                    "reading": "にほんの ぶんかいしゅうふくは、けんちくを しんちくどうように たてかえるのではなく、せんねんまえの ぶざいを さいだいげん のこして つくろう「ほぜんの りんり」に つらぬかれています。",
                    "translation": "Japanese cultural property restoration is permeated by an 'ethics of preservation' that repairs and retains thousand-year-old original members to the maximum degree rather than rebuilding like new construction."
                },
                {
                    "target": "二百年後の式年遷宮を見据えて大径檜を計画的に育成する「神宮備林」の取り組みは、究極の持続可能性のモデルです。",
                    "reading": "にひゃくねんごの しきねんせんぐうを みすえて だいけいひのきを けいかくてきに いくせいする「じんぐうびりん」の とりくみは、きゅうきょくの じぞくかのうせいの モデルです。",
                    "translation": "The initiative of the 'Jingu Reserve Forest' systematically cultivating large-diameter cypress looking two hundred years ahead to future Shikinen Sengu is an ultimate model of sustainability."
                },
                {
                    "target": "解体修理の際に部材に残された古代の墨書や手斧（ちょうな）の削り跡は、当時の工匠たちの息遣いを現代に伝えます。",
                    "reading": "かいたいしゅうりの さいに ぶざいに のこされた こだいの ぼくしょや ちょうなの けずりあとは、とうじの こうしょうたちの いきづかいを げんだいに つたえます。",
                    "translation": "Ancient ink inscriptions and adze tooling marks left on timber members during dismantling restoration convey the breath of contemporary master craftsmen to the present day."
                },
                {
                    "target": "自然の恵みである森林を守り、人間の英知である技を世代を超えて受け継ぐ循環こそが、日本文化の真髄です。",
                    "reading": "しぜんの めぐみである しんりんを まもり、にんげんの えいちである わざを せだいを こえて うけつぐ じゅんかんこそが、にほんぶんかの しんずいです。",
                    "translation": "The cycle of protecting forests—a blessing of nature—and passing down techniques—the wisdom of humanity—across generations is the quintessence of Japanese culture."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第5部）における国際法規範に厳密に合致する公式外交記述を選択してください（問33.5.1）。",
                    "options": [
                        "伊勢神宮で千三百年以上にわたり連綿と継承されてきた式年遷宮は、神殿を二十年ごとに新造することで技術と精神を未来へ永遠に再生させる「常若」の思想を具現化しています。",
                        "国際条約法に反する法的誤謬（33.5.1）",
                        "主権平等の原則を逸脱した不適当な記述（33.5.2）",
                        "外交慣例に悖る修辞的欠陥文（33.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】伊勢神宮の二十年毎の式年遷宮、法隆寺の世界最古木造建築（607年）、宮大工の継手・仕口技術（第5部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第5部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習33.5）。",
                    "options": [
                        "西暦607年創建の法隆寺五重塔は、心柱を中心とする柔構造と宮大工による精緻な木組み技術によって、千四百年の風雪と大地震に耐え抜いてきました。",
                        "対立を無用に煽る不見識な声明文（33.5.x）",
                        "法的拘束力のない不完全な折衝文（33.5.y）",
                        "条約の留保条件を乱用した無効文（33.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u33-l5）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "宮大工の西岡常一棟梁は「木は生育した方位のまま使え」という古代からの口伝を守り、樹齢千年の檜の生命力を建築構造の中に活かし続けました。",
                        "安全保障理事会決議の権能を無視した記述（33.5.a）",
                        "平和維持部隊の法的根拠を欠く文（33.5.b）",
                        "国際司法裁判所の判例に背く記述（33.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第5部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試33-5）。",
                    "options": [
                        "日本の伝統木造建築における金物や釘を用いない継手・仕口の技法は、木材の呼吸と収縮を許容する有機的構造力学の頂点を示しています。",
                        "条約履行義務を軽視した無効文（33.5.m）",
                        "全権委任状の要件を欠く不備文（33.5.n）",
                        "寄託手続きの誤謬文（33.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u33-l5）の主要外交用語を入力してください（「伊勢神宮」）：",
                    "acceptedAnswers": [
                        "伊勢神宮",
                        "伊勢神宮で千"
                    ],
                    "explanation": "正解の外交用語は「伊勢神宮」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u34-l1": {
        "id": "ja-u34-l1",
        "subject": "japanese",
        "unit": 34,
        "lessonNumber": 1,
        "title": "1969年ウィーン条約法条約（VCLT）と条約締結・批准の手続き",
        "level": "C2",
        "objective": "条約法の基本条約（VCLT・Vienna Convention on the Law of Treaties）、条約の起草・全権委任状・署名・国会承認・批准書寄託の手続き。",
        "presentation": {
            "explanation": "国際法の根幹をなす「条約法に関するウィーン条約（VCLT：1969年採択）」に基づく国家間の条約締結プロトコルを学びます。\n\n【条約締結の国際法的手続きステップ】\n１．全権委任状（Full Powers）の付与：国家を代表して交渉・採択を行う外交官への権限付与。\n２．条約テキストの採択（Adoption）と認証（Authentication）。\n３．署名（Signature）：国家の条約に対する暫定的な賛意（批准前の不阻害義務・VCLT第18条）。\n４．国内法的手続き：日本国憲法第73条に基づく内閣による条約締結と【国会の事前承認】。\n５．批准（Ratification）および受諾・承認：国家が条約に最終的に拘束されることへの正式同意。\n６．批准書の寄託（Deposit）：寄託所（国連事務総長等）への寄託をもって国際的に発効（Entry into Force）。\n７．「合意は守られなければならない（Pacta sunt servanda）」（VCLT第26条）：国際法の根本規範。",
            "examples": [
                {
                    "target": "1969年ウィーン条約法条約第26条に規定される「合意は守られなければならない（Pacta sunt servanda）」は、国際法秩序の絶対的根幹です。",
                    "reading": "1969ねん ウィーンじょうやくほうじょうやく だいにじゅうろくじょうに きていされる「ごういは まもらなければならない」は、こくさいほうちつじょの ぜったいてきこんかんです。",
                    "translation": "'Pacta sunt servanda (Agreements must be kept)' stipulated in Article 26 of the 1969 Vienna Convention on the Law of Treaties is the absolute cornerstone of international legal order."
                },
                {
                    "target": "条約に署名した国家は、条約が発効するまでの間、その趣旨及び目的を損なうような行為を行ってはならない義務（VCLT第18条）を負います。",
                    "reading": "じょうやくに しょめいした こっかは、じょうやくが はっこうするまでの あいだ、その しゅしおよび もくてきを そこなうような こういを おこなっては ならない ぎむを おいます。",
                    "translation": "A state that has signed a treaty bears the obligation (VCLT Article 18) not to defeat the object and purpose of the treaty prior to its entry into force."
                },
                {
                    "target": "日本国憲法に基づき、条約の締結には国会の事前の承認を得た上で、全権委任状を有する大使が批准書を寄託機関へ寄託します。",
                    "reading": "にほんこくけんぽうに もとづき、じょうやくの ていけつには こっかいの じぜんの しょうにんを えた うえで、ぜんけんいにんじょうを ゆうする たいしが ひじゅんしょを きたくきかんへ きたくします。",
                    "translation": "Pursuant to the Constitution of Japan, upon obtaining the prior approval of the Diet for concluding a treaty, an ambassador with full powers deposits the instrument of ratification with the depositary."
                },
                {
                    "target": "多国間条約における留保（Reservation）は、条約の趣旨及び目的と両立しない限りにおいて制限的に認められます。",
                    "reading": "たこくかんじょうやくにおける りゅうほは、じょうやくの しゅしおよび もくてきと りょうりつしない かぎりにおいて せいげんてきに みとめられます。",
                    "translation": "Reservations in multilateral treaties are admitted restrictively insofar as they are not incompatible with the object and purpose of the treaty."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第1部）における国際法規範に厳密に合致する公式外交記述を選択してください（問34.1.1）。",
                    "options": [
                        "本協定の締約国は、千九百六十九年条約法に関するウィーン条約第百条に基づき、正式な批准書を国際連合事務総長へ寄託いたしました。",
                        "国際条約法に反する法的誤謬（34.1.1）",
                        "主権平等の原則を逸脱した不適当な記述（34.1.2）",
                        "外交慣例に悖る修辞的欠陥文（34.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】1969年ウィーン条約法条約（VCLT）、国連憲章第7章安全保障理事会決議、首脳サミット共同声明の外交起草と口頭防衛（第1部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第1部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習34.1）。",
                    "options": [
                        "各国首脳はサミット共同声明を採択し、法の支配に基づく自由で開かれた国際秩序の維持と、気候変動対策への断固たる誓約を再確認いたしました。",
                        "対立を無用に煽る不見識な声明文（34.1.x）",
                        "法的拘束力のない不完全な折衝文（34.1.y）",
                        "条約の留保条件を乱用した無効文（34.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u34-l1）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "国際連合安全保障理事会は、国連憲章第七章の下で行動し、全ての必要な措置を執ることを多国籍平和維持部隊に委任することを全会一致で決議いたしました。",
                        "安全保障理事会決議の権能を無視した記述（34.1.a）",
                        "平和維持部隊の法的根拠を欠く文（34.1.b）",
                        "国際司法裁判所の判例に背く記述（34.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第1部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試34-1）。",
                    "options": [
                        "締約国は「合意は守られなければならない」という国際慣習法の根本規範に則り、本多国間条約の義務を誠実に履行することを誓約いたします。",
                        "条約履行義務を軽視した無効文（34.1.m）",
                        "全権委任状の要件を欠く不備文（34.1.n）",
                        "寄託手続きの誤謬文（34.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u34-l1）の主要外交用語を入力してください（「本協定の」）：",
                    "acceptedAnswers": [
                        "本協定の",
                        "本協定の締約"
                    ],
                    "explanation": "正解の外交用語は「本協定の」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u34-l2": {
        "id": "ja-u34-l2",
        "subject": "japanese",
        "unit": 34,
        "lessonNumber": 2,
        "title": "国連憲章第7章に基づく平和維持・安全保障理事会決議の解釈",
        "level": "C2",
        "objective": "国際連合憲章第7章（平和に対する脅威・平和の破壊・侵略行為）、安保理決議（UNSCR）、武力行使容認・制裁措置の国際法法理。",
        "presentation": {
            "explanation": "国際安全保障体制の最高峰である「国際連合憲章第7章」および安全保障理事会（安保理）決議の解釈法理を学びます。\n\n【国連憲章第7章の法的枠組み】\n１．第39条：安保理による「平和に対する脅威、平和の破壊又は侵略行為の存在」の認定。\n２．第41条：非軍事的制裁措置（経済制裁、断交、資産凍結、通信遮断）。\n３．第42条：軍事的措置（陸海空軍による武力の行使容認：「必要なすべての措置（All necessary measures）」の決議文言）。\n４．第51条：個別的・集団的自衛権（Inherent Right of Self-Defense）の行使要件と安保理への即時報告義務。",
            "examples": [
                {
                    "target": "国連安保理決議における「必要なすべての措置をとることを容認する」という文言は、国際法上武力行使を含む強制措置を承認する定型表現です。",
                    "reading": "こくれん あんぼりけつぎにおける「ひつような すべての そちを とることを ようにんする」という もんごんは、こくさいほうじょう ぶりょくこうしを ふくむ きょうせいそちを しょうにんする ていけいひょうげんです。",
                    "translation": "The phrase 'authorizes all necessary measures' in UN Security Council resolutions is standard language authorizing coercive measures including the use of force under international law."
                },
                {
                    "target": "国連憲章第51条に基づく自衛権の行使は、武力攻撃が発生した緊急時に限定され、安保理が必要な措置を執るまでの暫定的な権利です。",
                    "reading": "こくれんけんしょう だいごじゅういちじょうに もとづく じえいけんの こうしは、ぶりょくこうげきが はっせいした きんきゅうじに げんていされ、あんぼりが ひつような そちを とるまでの ざんていてきな けんりです。",
                    "translation": "The exercise of the right of self-defense under UN Charter Article 51 is limited to emergency circumstances where an armed attack occurs and is a provisional right until the Security Council takes necessary measures."
                },
                {
                    "target": "常任理事国の拒否権（Veto）行使により安保理が機能不全に陥った場合における国連総会の「平和のための結集」決議の意義が再評価されています。",
                    "reading": "じょうにんりじこくの きょひけんこうしにより あんぼりが きのうふぜんに おちいった ばあいにおける こくれんそうかいの「へいわのための けっしゅう」けつぎの いぎが さいひょうかされています。",
                    "translation": "The significance of the General Assembly's 'Uniting for Peace' resolution in cases where the Security Council falls into dysfunction due to permanent members' exercise of veto power is being reevaluated."
                },
                {
                    "target": "国際人道法およびジュネーブ諸条約の厳格な遵守は、いかなる軍事作戦においても国家が負う絶対的義務です。",
                    "reading": "こくさいじんどうほうおよび ジュネーブしょじょうやくの げんかくな じゅんしゅは、いかなる ぐんじさくせんにおいても こっかが おう ぜったいてきぎむです。",
                    "translation": "Strict compliance with international humanitarian law and the Geneva Conventions is an absolute obligation borne by states in any military operation."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第2部）における国際法規範に厳密に合致する公式外交記述を選択してください（問34.2.1）。",
                    "options": [
                        "本協定の締約国は、千九百六十九年条約法に関するウィーン条約第百条に基づき、正式な批准書を国際連合事務総長へ寄託いたしました。",
                        "国際条約法に反する法的誤謬（34.2.1）",
                        "主権平等の原則を逸脱した不適当な記述（34.2.2）",
                        "外交慣例に悖る修辞的欠陥文（34.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】1969年ウィーン条約法条約（VCLT）、国連憲章第7章安全保障理事会決議、首脳サミット共同声明の外交起草と口頭防衛（第2部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第2部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習34.2）。",
                    "options": [
                        "各国首脳はサミット共同声明を採択し、法の支配に基づく自由で開かれた国際秩序の維持と、気候変動対策への断固たる誓約を再確認いたしました。",
                        "対立を無用に煽る不見識な声明文（34.2.x）",
                        "法的拘束力のない不完全な折衝文（34.2.y）",
                        "条約の留保条件を乱用した無効文（34.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u34-l2）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "国際連合安全保障理事会は、国連憲章第七章の下で行動し、全ての必要な措置を執ることを多国籍平和維持部隊に委任することを全会一致で決議いたしました。",
                        "安全保障理事会決議の権能を無視した記述（34.2.a）",
                        "平和維持部隊の法的根拠を欠く文（34.2.b）",
                        "国際司法裁判所の判例に背く記述（34.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第2部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試34-2）。",
                    "options": [
                        "締約国は「合意は守られなければならない」という国際慣習法の根本規範に則り、本多国間条約の義務を誠実に履行することを誓約いたします。",
                        "条約履行義務を軽視した無効文（34.2.m）",
                        "全権委任状の要件を欠く不備文（34.2.n）",
                        "寄託手続きの誤謬文（34.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u34-l2）の主要外交用語を入力してください（「本協定の」）：",
                    "acceptedAnswers": [
                        "本協定の",
                        "本協定の締約"
                    ],
                    "explanation": "正解の外交用語は「本協定の」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u34-l3": {
        "id": "ja-u34-l3",
        "subject": "japanese",
        "unit": 34,
        "lessonNumber": 3,
        "title": "首脳サミット共同声明（コミュニケ）の起草・文言交渉（シェパ会議）",
        "level": "C2",
        "objective": "G7/G20首脳サミット共同声明（コミュニケ）の起草プロセス、シェパ（Sherpa）会議、外交的妥協（ブラケット解消）の言語戦略。",
        "presentation": {
            "explanation": "国際多国間サミットにおける共同声明（Communique）の高度な外交文書起草と文言交渉（シェパ会議）の技法を学びます。\n\n【首脳宣言起草の外交プロセス】\n１．シェパ（Sherpa）：各国首脳の個人代表として共同声明の文言を一字一句調整する首席外交官。\n２．ブラケット（［ ］：角括弧）：合意に達していない対立文言をブラケットで囲み、徹夜のシェパ会議で妥協案（Compromise Text）を練り上げてブラケットを解消する。\n３．建設的曖昧さ（Constructive Ambiguity）：対立する国双方が自国に有利に解釈可能な二重の意味を持つ高度な文言を採用して決裂を回避する外交語法。",
            "examples": [
                {
                    "target": "首脳サミット共同声明の起草にあたり、各国シェパたちは対立する文言のブラケット（角括弧）を解消するため徹夜の折衝を重ねました。",
                    "reading": "しゅのうサミット きょうどうせいめいの きそうに あたり、かっこく シェパたちは たいりつする もんごんの ブラケット（かくかっこ）を かいしょうするため てつやの せっしょうを かさねました。",
                    "translation": "In drafting the summit joint communique, sherpas of each nation engaged in round-the-clock negotiations to remove brackets on conflicting wording."
                },
                {
                    "target": "「建設的曖昧さ」を導入することにより、各国の国内世論に配慮しつつ全会一致の共同声明採択を成功させました。",
                    "reading": "「けんせつてきあいまいさ」を どうにゅうすることにより、かっこくの こくないよろんに はいりょしつつ ぜんかいいっちの きょうどうせいめいさいたくを せいこうさせました。",
                    "translation": "By introducing 'constructive ambiguity', they succeeded in unanimous adoption of the joint declaration while taking into account each nation's domestic public opinion."
                },
                {
                    "target": "自由で開かれた国際秩序の維持と法の支配に基づく平和の尊さを、コミュニケの首座に明記しました。",
                    "reading": "じゆうで ひらかれた こくさいちつじょの いじと ほうの しはいに もとづく へいわの とうとさを、コミュニケの しゅざに めいきしました。",
                    "translation": "They clearly stipulated the maintenance of a free and open international order and the preciousness of peace based on the rule of law at the forefront of the communique."
                },
                {
                    "target": "気候変動対策と経済安全保障の強化に向けた具体的な数値目標と行動計画が合意文書に盛り込まれました。",
                    "reading": "きこうへんどうたいさくと けいざいあんぜんほしょうの きょうかに むけた ぐたいてきな すうちもくひょうと こうどうけいかくが ごういぶんしょに もりこまれました。",
                    "translation": "Concrete numerical targets and action plans toward climate change countermeasures and strengthening economic security were incorporated into the consensus document."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第3部）における国際法規範に厳密に合致する公式外交記述を選択してください（問34.3.1）。",
                    "options": [
                        "本協定の締約国は、千九百六十九年条約法に関するウィーン条約第百条に基づき、正式な批准書を国際連合事務総長へ寄託いたしました。",
                        "国際条約法に反する法的誤謬（34.3.1）",
                        "主権平等の原則を逸脱した不適当な記述（34.3.2）",
                        "外交慣例に悖る修辞的欠陥文（34.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】1969年ウィーン条約法条約（VCLT）、国連憲章第7章安全保障理事会決議、首脳サミット共同声明の外交起草と口頭防衛（第3部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第3部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習34.3）。",
                    "options": [
                        "各国首脳はサミット共同声明を採択し、法の支配に基づく自由で開かれた国際秩序の維持と、気候変動対策への断固たる誓約を再確認いたしました。",
                        "対立を無用に煽る不見識な声明文（34.3.x）",
                        "法的拘束力のない不完全な折衝文（34.3.y）",
                        "条約の留保条件を乱用した無効文（34.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u34-l3）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "国際連合安全保障理事会は、国連憲章第七章の下で行動し、全ての必要な措置を執ることを多国籍平和維持部隊に委任することを全会一致で決議いたしました。",
                        "安全保障理事会決議の権能を無視した記述（34.3.a）",
                        "平和維持部隊の法的根拠を欠く文（34.3.b）",
                        "国際司法裁判所の判例に背く記述（34.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第3部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試34-3）。",
                    "options": [
                        "締約国は「合意は守られなければならない」という国際慣習法の根本規範に則り、本多国間条約の義務を誠実に履行することを誓約いたします。",
                        "条約履行義務を軽視した無効文（34.3.m）",
                        "全権委任状の要件を欠く不備文（34.3.n）",
                        "寄託手続きの誤謬文（34.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u34-l3）の主要外交用語を入力してください（「本協定の」）：",
                    "acceptedAnswers": [
                        "本協定の",
                        "本協定の締約"
                    ],
                    "explanation": "正解の外交用語は「本協定の」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u34-l4": {
        "id": "ja-u34-l4",
        "subject": "japanese",
        "unit": 34,
        "lessonNumber": 4,
        "title": "国際司法裁判所（ICJ）判例と国際人道法・国家責任の法理",
        "level": "C2",
        "objective": "国際司法裁判所（ICJ：ハーグ）の管轄権受諾宣言、国家責任条文案（ILC）、国連海洋法条約（UNCLOS）の紛争解決手続。",
        "presentation": {
            "explanation": "国際紛争の平和的解決の中枢機関「国際司法裁判所（ICJ）」の判例理論と国家責任法を学びます。\n\n【ICJと国際紛争解決の法理】\n１．裁判管轄権の同意原則：国家の主権平等に基づき、当事国双方が合意（選択条項受託宣言：ICJ規程第36条第2項等）しない限り裁判所は管轄権を行使できない。\n２．国家責任（State Responsibility）：国際違法行為を行った国家は、違法行為の中止、原状回復（Restitution）、金銭賠償（Compensation）、謝罪（Satisfaction）の義務を負う。\n３．国連海洋法条約（UNCLOS）：領海（12海里）、排他的経済水域（EEZ：200海里）、大陸棚の境界画定と海洋の自由。",
            "examples": [
                {
                    "target": "国際司法裁判所（ICJ）の判例法理は、武力紛争の平和的解決と国家主権の限界を画定する国際判例体系の最高権威です。",
                    "reading": "こくさいしほうさいばんしょ（ICJ）の はんれいほうりは、ぶりょくふんそうの へいわてきかいけつと こっかしゅけんの げんかいを かくていする こくさいはんれいたいけいの さいこうけんいです。",
                    "translation": "The case law jurisprudence of the International Court of Justice (ICJ) is the supreme authority in the international jurisprudence system demarcating the peaceful resolution of armed conflicts and limits of state sovereignty."
                },
                {
                    "target": "国連海洋法条約（UNCLOS）に基づく海洋境界画定においては、中間線原則と衡平な解決（Equitable Solution）が適用されます。",
                    "reading": "こくれんかいようほうじょうやく（UNCLOS）に もとづく かいようきょうかいかくていにおいては、ちゅうかんせんげんそくと こうへいな かいけつが てきようされます。",
                    "translation": "In maritime boundary delimitation under the UN Convention on the Law of the Sea (UNCLOS), the equidistance principle and equitable solutions are applied."
                },
                {
                    "target": "国際法上違法と認定された行為に対しては、被害国に対する現状回復と損害賠償を行う国家責任が発生します。",
                    "reading": "こくさいほうじょう いほうと にんていされた こういに たいしては、ひがいこくに たいする げんじょうかいふくと そんがいばいしょうを おこなう こっかせきにんが はっせいします。",
                    "translation": "Regarding acts recognized as internationally wrongful, state responsibility to provide restitution to the injured state and compensation for damages arises."
                },
                {
                    "target": "法の支配に基づく国際秩序の確立こそが、大国の独断を排し小国の主権と安全を担保する唯一の道です。",
                    "reading": "ほうの しはいに もとづく こくさいちつじょの かくりつこそが、たいこくの どくだんを はいし しょうこくの しゅけんと あんぜんを たんぽする ゆいいつの みちです。",
                    "translation": "Establishing an international order based on the rule of law is the sole path rejecting great-power arbitrariness and securing small nations' sovereignty and security."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第4部）における国際法規範に厳密に合致する公式外交記述を選択してください（問34.4.1）。",
                    "options": [
                        "本協定の締約国は、千九百六十九年条約法に関するウィーン条約第百条に基づき、正式な批准書を国際連合事務総長へ寄託いたしました。",
                        "国際条約法に反する法的誤謬（34.4.1）",
                        "主権平等の原則を逸脱した不適当な記述（34.4.2）",
                        "外交慣例に悖る修辞的欠陥文（34.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】1969年ウィーン条約法条約（VCLT）、国連憲章第7章安全保障理事会決議、首脳サミット共同声明の外交起草と口頭防衛（第4部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第4部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習34.4）。",
                    "options": [
                        "各国首脳はサミット共同声明を採択し、法の支配に基づく自由で開かれた国際秩序の維持と、気候変動対策への断固たる誓約を再確認いたしました。",
                        "対立を無用に煽る不見識な声明文（34.4.x）",
                        "法的拘束力のない不完全な折衝文（34.4.y）",
                        "条約の留保条件を乱用した無効文（34.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u34-l4）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "国際連合安全保障理事会は、国連憲章第七章の下で行動し、全ての必要な措置を執ることを多国籍平和維持部隊に委任することを全会一致で決議いたしました。",
                        "安全保障理事会決議の権能を無視した記述（34.4.a）",
                        "平和維持部隊の法的根拠を欠く文（34.4.b）",
                        "国際司法裁判所の判例に背く記述（34.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第4部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試34-4）。",
                    "options": [
                        "締約国は「合意は守られなければならない」という国際慣習法の根本規範に則り、本多国間条約の義務を誠実に履行することを誓約いたします。",
                        "条約履行義務を軽視した無効文（34.4.m）",
                        "全権委任状の要件を欠く不備文（34.4.n）",
                        "寄託手続きの誤謬文（34.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u34-l4）の主要外交用語を入力してください（「本協定の」）：",
                    "acceptedAnswers": [
                        "本協定の",
                        "本協定の締約"
                    ],
                    "explanation": "正解の外交用語は「本協定の」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u34-l5": {
        "id": "ja-u34-l5",
        "subject": "japanese",
        "unit": 34,
        "lessonNumber": 5,
        "title": "多国間外交交渉の実践：首脳会談プロトコルと共同記者会見の口頭防衛",
        "level": "C2",
        "objective": "国際外交におけるプロトコル（儀典長・席次・晩餐会）、バイラテラル首脳会談、同時通訳下のプレストーキングと口頭防衛戦略。",
        "presentation": {
            "explanation": "最高峰のC2レベルにおける外交実践：二国間（バイ）首脳会談、国際プロトコル、および共同記者会見での口頭防衛を総括します。\n\n【最高峰の外交プロトコルと実践技法】\n１．外交儀典（Protocol）：席次（プレシデンス）、国旗の掲揚規則、公式晩餐会でのトースト（乾杯スピーチ）の修辞学。\n２．首脳会談の展開：テテ・ア・テテ（一対一の極秘会談）から拡大会合への移行、通訳官との息の合った発話速度と専門用語統御。\n３．共同記者会見における口頭防衛（Verbal Defense）：\n　・世界各国の記者からの厳しい質問に対し、国家の公式見解を微動だにせず堅持しつつ、相手国首脳との信頼関係を損なわない冷静沈着で洗練された外交言語の運用。",
            "examples": [
                {
                    "target": "二国間首脳会談後の共同記者会見において、首席報道官は挑発的な質問に対しても国際法規範を厳格に引用して完璧な口頭防衛を展開しました。",
                    "reading": "にこくかんしゅのうかいだんごの きょうどうきしゃかいけんにおいて、しゅせきほうどうかんは ちょうはつてきな しつもんに たいしても こくさいほうきはんを げんかくに いんようして かんぺきな こうとうぼうえいを てんかいしました。",
                    "translation": "In the joint press conference following the bilateral summit, the chief spokesperson deployed a flawless oral defense strictly citing international legal norms even against provocative questions."
                },
                {
                    "target": "外交プロトコルにおける席次や儀礼の厳格な遵守は、国家の威信と相互平等の原則を可視化する不可欠の形式美です。",
                    "reading": "がいこうプロトコルにおける せきじや ぎれいの げんかくな じゅんしゅは、こっかの いしんと そうごへいとうの げんそくを かしかする ふかけつの けいしきびです。",
                    "translation": "Strict adherence to precedence and etiquette in diplomatic protocol is an indispensable formal beauty visualizing national prestige and the principle of mutual equality."
                },
                {
                    "target": "同時通訳を介した首脳間の対話では、簡潔明瞭な論理展開と格調高い語彙の選択が合意の成否を分けます。",
                    "reading": "どうじつうやくを かいした しゅのうかんの たいわでは、かんけつめいりょうな ろんりてんかいと かくちょうたかい ごいの せんたくが ごういの せいひを わけます。",
                    "translation": "In summit dialogues mediated by simultaneous interpretation, concise and clear logical progression and dignified vocabulary choice determine the success or failure of consensus."
                },
                {
                    "target": "多国間条約の批准から首脳外交の実践に至るまで、国際社会における平和と繁栄を希求する言語運用能力がここに完成します。",
                    "reading": "たこくかんじょうやくの ひじゅんから しゅのうがいこうの じっせんに いたるまで、こくさいしゃかいにおける へいわと はんえいを ききゅうする げんごうんようのうりょくが ここに かんせいします。",
                    "translation": "From multilateral treaty ratification to the practice of summit diplomacy, language proficiency seeking peace and prosperity in international society is accomplished here."
                }
            ],
            "mnemonics": [],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第5部）における国際法規範に厳密に合致する公式外交記述を選択してください（問34.5.1）。",
                    "options": [
                        "本協定の締約国は、千九百六十九年条約法に関するウィーン条約第百条に基づき、正式な批准書を国際連合事務総長へ寄託いたしました。",
                        "国際条約法に反する法的誤謬（34.5.1）",
                        "主権平等の原則を逸脱した不適当な記述（34.5.2）",
                        "外交慣例に悖る修辞的欠陥文（34.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】1969年ウィーン条約法条約（VCLT）、国連憲章第7章安全保障理事会決議、首脳サミット共同声明の外交起草と口頭防衛（第5部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第5部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習34.5）。",
                    "options": [
                        "各国首脳はサミット共同声明を採択し、法の支配に基づく自由で開かれた国際秩序の維持と、気候変動対策への断固たる誓約を再確認いたしました。",
                        "対立を無用に煽る不見識な声明文（34.5.x）",
                        "法的拘束力のない不完全な折衝文（34.5.y）",
                        "条約の留保条件を乱用した無効文（34.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u34-l5）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "国際連合安全保障理事会は、国連憲章第七章の下で行動し、全ての必要な措置を執ることを多国籍平和維持部隊に委任することを全会一致で決議いたしました。",
                        "安全保障理事会決議の権能を無視した記述（34.5.a）",
                        "平和維持部隊の法的根拠を欠く文（34.5.b）",
                        "国際司法裁判所の判例に背く記述（34.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第5部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試34-5）。",
                    "options": [
                        "締約国は「合意は守られなければならない」という国際慣習法の根本規範に則り、本多国間条約の義務を誠実に履行することを誓約いたします。",
                        "条約履行義務を軽視した無効文（34.5.m）",
                        "全権委任状の要件を欠く不備文（34.5.n）",
                        "寄託手続きの誤謬文（34.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u34-l5）の主要外交用語を入力してください（「本協定の」）：",
                    "acceptedAnswers": [
                        "本協定の",
                        "本協定の締約"
                    ],
                    "explanation": "正解の外交用語は「本協定の」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u35-l1": {
        "id": "ja-u35-l1",
        "subject": "japanese",
        "unit": 35,
        "lessonNumber": 1,
        "title": "最高峰の敬語：尊敬語と謙譲語の完全対称体系 (Apex Keigo: Sonkeigo vs Kenjougo Suppletion)",
        "level": "C2+",
        "objective": "Master irregular honorific and humble verb pairs (いらっしゃる / 参る・伺う, おっしゃる / 申し上げる, なさる / 致す, ご覧になる / 拝見する).",
        "presentation": {
            "explanation": "日本語の敬語体系は、人間関係の距離感、社会的階層、内外（ウチ・ソト）の境界を緻密に反映する高度な言語機構です。\n\n### 1. 尊敬語（Sonkeigo — Elevating the Counterpart）\n- **行く・来る・居る** &rarr; **いらっしゃる / おいでになる**\n- **言う** &rarr; **おっしゃる**\n- **食べる・飲む** &rarr; **召し上がる**\n- **見る** &rarr; **ご覧になる**\n- **知っている** &rarr; **ご存じである**\n\n### 2. 謙譲語Ⅰ・Ⅱ（Kenjougo — Lowering Self / Teichougo — Courteous Stance）\n- **行く・来る** &rarr; **参る** (Teichougo) / **伺う** (Humble towards destination host)\n- **言う** &rarr; **申す** (Teichougo) / **申し上げる** (Humble towards listener)\n- **食べる・飲む・貰う** &rarr; **いただく / 頂戴する**\n- **見る** &rarr; **拝見する**\n- **知っている** &rarr; **存じ上げている** (Towards person) / **存じている** (About matter)\n- **する** &rarr; **致す** (Teichougo)",
            "examples": [
                {
                    "target": "社長が資料をご覧になりました。",
                    "reading": "Shachou ga shiryou o goran ni narimashita.",
                    "translation": "The company president looked at the documents (Sonkeigo)."
                },
                {
                    "target": "私が企画書を拝見いたします。",
                    "reading": "Watakushi ga kikakusho o haiken itashimasu.",
                    "translation": "I shall humbly inspect the proposal (Kenjougo I + II)."
                },
                {
                    "target": "明日十時に貴社へ伺います。",
                    "reading": "Asu juu-ji ni kisha e ukagaimasu.",
                    "translation": "I will humbly visit your company tomorrow at 10:00 (Kenjougo)."
                },
                {
                    "target": "詳細は担当の田中より申し上げます。",
                    "reading": "Shousai wa tantou no Tanaka yori moushiagemasu.",
                    "translation": "The details will be humbly stated by our representative Tanaka."
                }
            ],
            "mnemonics": [
                "Sonkeigo lifts the client to the sky (ご覧になる); Kenjougo bows yourself to the floor (拝見する)!"
            ],
            "culturalNotes": [
                "In Japanese business etiquette, referring to your own company president as \"Shachou\" to an outside client is a severe faux pas; internally he is Shachou, but to outsiders he is simply \"Tanaka\" (Uchi vs Soto rule)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which verb is the correct humble form (Kenjougo) to express that YOU will look at an external client's proposal?",
                    "options": [
                        "拝見する (Haiken suru — Kenjougo)",
                        "ご覧になる (Goran ni naru — Sonkeigo for other)",
                        "見られる (Mirareru)",
                        "お見えになる (Omie ni naru)"
                    ],
                    "answerIndex": 0,
                    "explanation": "«拝見する» is the humble verb used when the speaker inspects something belonging to the listener."
                },
                {
                    "prompt": "How should you refer to your own company's president (Yamada) when speaking to a client on the telephone?",
                    "options": [
                        "社長の山田 (or simply 山田, treating him as part of your Uchi group without honorifics)",
                        "山田社長様",
                        "山田先生",
                        "社長様"
                    ],
                    "answerIndex": 0,
                    "explanation": "When speaking to outside clients (Soto), members of your own organization (Uchi) are never elevated with honorific titles."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Select the correct honorific sentence meaning \"The director has already arrived\":",
                    "options": [
                        "部長は既にお見えになりました。 (Sonkeigo)",
                        "部長は既に参りました。",
                        "部長は既に伺いました。",
                        "部長は既に致しました。"
                    ],
                    "answerIndex": 0,
                    "explanation": "«お見えになる» or «いらっしゃる» is the appropriate honorific (Sonkeigo) form for someone arriving."
                },
                {
                    "prompt": "What does the humble phrase «存じ上げております» mean?",
                    "options": [
                        "I humbly know / am acquainted with (Kenjougo regarding a person/entity)",
                        "I do not know",
                        "Please know this",
                        "You know this"
                    ],
                    "answerIndex": 0,
                    "explanation": "«存じ上げる» is the humble form of knowing or being acquainted with someone."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Which suppletive verb replaces «言う» (to say) when elevating an esteemed counterpart (Sonkeigo)?",
                    "options": [
                        "おっしゃる (Ossharu)",
                        "申し上げる (Moushiageru)",
                        "申す (Mousu)",
                        "致す (Itasu)"
                    ],
                    "answerIndex": 0,
                    "explanation": "«おっしゃる» is the respectful honorific equivalent of «言う»."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the humble verb for \"to look at / inspect\" in Kanji (拝 + 見 + する):",
                    "acceptedAnswers": [
                        "拝見する",
                        "はいけんする"
                    ],
                    "explanation": "«拝見する» = to humbly view/inspect."
                }
            ]
        }
    },
    "ja-u35-l2": {
        "id": "ja-u35-l2",
        "subject": "japanese",
        "unit": 35,
        "lessonNumber": 2,
        "title": "ビジネス文書・メールにおける定型儀礼表現 (Formal Business Correspondence & Epistolary Formulas)",
        "level": "C2+",
        "objective": "Master opening/closing greetings (拝啓 / 敬具, 貴社ますますご清栄のこととお慶び申し上げます) and corporate phrasing.",
        "presentation": {
            "explanation": "ビジネス文書・メールにおける定型儀礼表現 (Formal Business Correspondence & Epistolary Formulas)。\n\n本課では、学術・外交・ビジネスの最高水準で要求される日本語の高度な語用論的規範とプロトコルを習得します。相手との関係性に応じた的確な表現選択が、信頼と協調の基盤を築きます。",
            "examples": [
                {
                    "target": "貴社ますますご清栄のこととお慶び申し上げます。",
                    "reading": "Kisha masumasu go-seiei no koto to oyorokobi moushiagemasu.",
                    "translation": "We rejoice in the continued prosperity and success of your esteemed company."
                }
            ],
            "mnemonics": [
                "Authentic Japanese high protocol reflects mindful respect (思いやり) and relational balance (調和)."
            ],
            "culturalNotes": [
                "High-register Japanese communication prioritizes emotional safety, subtle nuance, and communal dignity."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which opening greeting pairs canonically with the formal closing «敬具» (Keigu) in Japanese business letters?",
                    "options": [
                        "拝啓 (Haikei — Opening salutation)",
                        "前略",
                        "草々",
                        "かしこ"
                    ],
                    "answerIndex": 0,
                    "explanation": "拝啓 (Haikei — Opening salutation)"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What does «貴社» (Kisha) signify in formal written correspondence?",
                    "options": [
                        "Your esteemed company (Written honorific address)",
                        "Our company",
                        "Previous company",
                        "Supplier"
                    ],
                    "answerIndex": 0,
                    "explanation": "Your esteemed company (Written honorific address)"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Which opening greeting pairs canonically with the formal closing «敬具» (Keigu) in Japanese business letters?",
                    "options": [
                        "拝啓 (Haikei — Opening salutation)",
                        "前略",
                        "草々",
                        "かしこ"
                    ],
                    "answerIndex": 0,
                    "explanation": "拝啓 (Haikei — Opening salutation)"
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target expression: «貴社ますますご清栄のこととお慶び申し上げます。»",
                    "acceptedAnswers": [
                        "貴社ますますご清栄のこととお慶び申し上げます。",
                        "Kisha masumasu go-seiei no koto to oyorokobi moushiagemasu."
                    ],
                    "explanation": "We rejoice in the continued prosperity and success of your esteemed company."
                }
            ]
        }
    },
    "ja-u35-l3": {
        "id": "ja-u35-l3",
        "subject": "japanese",
        "unit": 35,
        "lessonNumber": 3,
        "title": "婉曲表現とクッション言葉による交渉術 (Cushion Words & Softened Diplomatic Refusal)",
        "level": "C2+",
        "objective": "Master polite cushion words (恐れ入りますが, あいにくではございますが, 誠に心苦しいのですが).",
        "presentation": {
            "explanation": "婉曲表現とクッション言葉による交渉術 (Cushion Words & Softened Diplomatic Refusal)。\n\n本課では、学術・外交・ビジネスの最高水準で要求される日本語の高度な語用論的規範とプロトコルを習得します。相手との関係性に応じた的確な表現選択が、信頼と協調の基盤を築きます。",
            "examples": [
                {
                    "target": "誠に恐れ入りますが、ご容赦いただけますでしょうか。",
                    "reading": "Makoto ni osoreirimasu ga, go-yousha itadakemasu deshou ka.",
                    "translation": "I am truly dreadfully sorry, but could you kindly grant us your understanding and forgiveness?"
                }
            ],
            "mnemonics": [
                "Authentic Japanese high protocol reflects mindful respect (思いやり) and relational balance (調和)."
            ],
            "culturalNotes": [
                "High-register Japanese communication prioritizes emotional safety, subtle nuance, and communal dignity."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "What is the linguistic purpose of \"Cushion Words\" (クッション言葉) in Japanese negotiations?",
                    "options": [
                        "To soften difficult requests or refusals and preserve interpersonal harmony",
                        "To lengthen the sentence artificially",
                        "To indicate anger",
                        "To replace verbs"
                    ],
                    "answerIndex": 0,
                    "explanation": "To soften difficult requests or refusals and preserve interpersonal harmony"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Which cushion phrase politely prefaces an unavoidable scheduling conflict or refusal?",
                    "options": [
                        "あいにくではございますが (Unfortunately / Regrettably)",
                        "おめでとうございますが",
                        "是非とも",
                        "とんでもございません"
                    ],
                    "answerIndex": 0,
                    "explanation": "あいにくではございますが (Unfortunately / Regrettably)"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "What is the linguistic purpose of \"Cushion Words\" (クッション言葉) in Japanese negotiations?",
                    "options": [
                        "To soften difficult requests or refusals and preserve interpersonal harmony",
                        "To lengthen the sentence artificially",
                        "To indicate anger",
                        "To replace verbs"
                    ],
                    "answerIndex": 0,
                    "explanation": "To soften difficult requests or refusals and preserve interpersonal harmony"
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target expression: «誠に恐れ入りますが、ご容赦いただけますでしょうか。»",
                    "acceptedAnswers": [
                        "誠に恐れ入りますが、ご容赦いただけますでしょうか。",
                        "Makoto ni osoreirimasu ga, go-yousha itadakemasu deshou ka."
                    ],
                    "explanation": "I am truly dreadfully sorry, but could you kindly grant us your understanding and forgiveness?"
                }
            ]
        }
    },
    "ja-u35-l4": {
        "id": "ja-u35-l4",
        "subject": "japanese",
        "unit": 35,
        "lessonNumber": 4,
        "title": "二重敬語の回避と現代敬語指針 (Avoiding Double Honorifics & Agency for Cultural Affairs Guidelines)",
        "level": "C2+",
        "objective": "Distinguish authentic refined honorifics from incorrect double honorifics (e.g. おっしゃられる &rarr; おっしゃる, ご覧になられる &rarr; ご覧になる).",
        "presentation": {
            "explanation": "二重敬語の回避と現代敬語指針 (Avoiding Double Honorifics & Agency for Cultural Affairs Guidelines)。\n\n本課では、学術・外交・ビジネスの最高水準で要求される日本語の高度な語用論的規範とプロトコルを習得します。相手との関係性に応じた的確な表現選択が、信頼と協調の基盤を築きます。",
            "examples": [
                {
                    "target": "部長がおっしゃいました。（誤：おっしゃられました）",
                    "reading": "Buchou ga osshaimashita.",
                    "translation": "The general manager said so (Correct single honorific without clumsy double marking)."
                }
            ],
            "mnemonics": [
                "Authentic Japanese high protocol reflects mindful respect (思いやり) and relational balance (調和)."
            ],
            "culturalNotes": [
                "High-register Japanese communication prioritizes emotional safety, subtle nuance, and communal dignity."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Why is «おっしゃられる» classified as a grammatical error (二重敬語 / Double Honorific) in standard Keigo?",
                    "options": [
                        "Because «おっしゃる» is already honorific; adding «-(ら)れる» applies two redundant honorific markers to one verb",
                        "Because it is too short",
                        "Because it is informal",
                        "Because it only applies to objects"
                    ],
                    "answerIndex": 0,
                    "explanation": "Because «おっしゃる» is already honorific; adding «-(ら)れる» applies two redundant honorific markers to one verb"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What is the correct honorific expression for \"The client has read the email\"?",
                    "options": [
                        "お客様がメールをお読みになりました。 (or ご覧になりました)",
                        "お客様がメールをお読みになられました。",
                        "お客様がメールを拝見されました。",
                        "お客様がメールを読まれになられました。"
                    ],
                    "answerIndex": 0,
                    "explanation": "お客様がメールをお読みになりました。 (or ご覧になりました)"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Why is «おっしゃられる» classified as a grammatical error (二重敬語 / Double Honorific) in standard Keigo?",
                    "options": [
                        "Because «おっしゃる» is already honorific; adding «-(ら)れる» applies two redundant honorific markers to one verb",
                        "Because it is too short",
                        "Because it is informal",
                        "Because it only applies to objects"
                    ],
                    "answerIndex": 0,
                    "explanation": "Because «おっしゃる» is already honorific; adding «-(ら)れる» applies two redundant honorific markers to one verb"
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target expression: «部長がおっしゃいました。»",
                    "acceptedAnswers": [
                        "部長がおっしゃいました。",
                        "Buchou ga osshaimashita."
                    ],
                    "explanation": "The general manager said so (Correct single honorific without clumsy double marking)."
                }
            ]
        }
    },
    "ja-u35-l5": {
        "id": "ja-u35-l5",
        "subject": "japanese",
        "unit": 35,
        "lessonNumber": 5,
        "title": "慶弔・社交儀礼と最高度プロトコル (Ceremonial Etiquette, Condolences & Summit Protocol)",
        "level": "C2+",
        "objective": "Master high ceremonial formulas for congratulations, condolences (ご冥福をお祈りいたします, お悔やみ申し上げます), and diplomatic toasts.",
        "presentation": {
            "explanation": "慶弔・社交儀礼と最高度プロトコル (Ceremonial Etiquette, Condolences & Summit Protocol)。\n\n本課では、学術・外交・ビジネスの最高水準で要求される日本語の高度な語用論的規範とプロトコルを習得します。相手との関係性に応じた的確な表現選択が、信頼と協調の基盤を築きます。",
            "examples": [
                {
                    "target": "心より哀悼の意を表し、ご冥福をお祈り申し上げます。",
                    "reading": "Kokoro yori aitou no i o hyoushi, go-meifuku o oinori moushiagemasu.",
                    "translation": "We express our deepest condolences from the bottom of our hearts and pray for eternal repose."
                }
            ],
            "mnemonics": [
                "Authentic Japanese high protocol reflects mindful respect (思いやり) and relational balance (調和)."
            ],
            "culturalNotes": [
                "High-register Japanese communication prioritizes emotional safety, subtle nuance, and communal dignity."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which expression is traditionally offered to express formal condolences to a grieving family?",
                    "options": [
                        "心よりお悔やみ申し上げます (We offer our deepest and heartfelt condolences)",
                        "お祝い申し上げます",
                        "ご苦労様でした",
                        "ご清栄をお祈りします"
                    ],
                    "answerIndex": 0,
                    "explanation": "心よりお悔やみ申し上げます (We offer our deepest and heartfelt condolences)"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What does the word «冥福» (Meifuku) signify in Buddhist-influenced condolence formulas?",
                    "options": [
                        "Happiness and peaceful repose in the afterworld",
                        "Health in this world",
                        "Financial wealth",
                        "Good fortune in travel"
                    ],
                    "answerIndex": 0,
                    "explanation": "Happiness and peaceful repose in the afterworld"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Which expression is traditionally offered to express formal condolences to a grieving family?",
                    "options": [
                        "心よりお悔やみ申し上げます (We offer our deepest and heartfelt condolences)",
                        "お祝い申し上げます",
                        "ご苦労様でした",
                        "ご清栄をお祈りします"
                    ],
                    "answerIndex": 0,
                    "explanation": "心よりお悔やみ申し上げます (We offer our deepest and heartfelt condolences)"
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target expression: «心より哀悼の意を表し、ご冥福をお祈り申し上げます。»",
                    "acceptedAnswers": [
                        "心より哀悼の意を表し、ご冥福をお祈り申し上げます。",
                        "Kokoro yori aitou no i o hyoushi, go-meifuku o oinori moushiagemasu."
                    ],
                    "explanation": "We express our deepest condolences from the bottom of our hearts and pray for eternal repose."
                }
            ]
        }
    }
};
  var CURRICULUM = { id: 'japanese', name: 'Japanese', units: UNITS, lessons: LESSONS };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['japanese'] = CURRICULUM;
  if (typeof module !== 'undefined' && module.exports) module.exports = CURRICULUM;
})(typeof window !== 'undefined' ? window : global);
