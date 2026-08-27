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
    }
];
  var LESSONS = {
    "ja-u1-l1": {
        "id": "ja-u1-l1",
        "unit": "ja-u1",
        "level": "A1",
        "objective": "Greet people appropriately at any time of day and close a conversation politely using core aisatsu (挨拶) expressions.",
        "prerequisites": [],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "In Japanese, greetings (挨拶 aisatsu) are tightly tied to the time of day and to whether an interaction is beginning or ending — there is no single all-purpose word like English 'hi' that works at every hour. Mornings use おはようございます until roughly late morning, afternoons switch to こんにちは, and evenings to こんばんは. These three never combine with です — they are fixed, self-contained expressions on their own. Because Japanese social interaction emphasizes acknowledging the relationship and the moment, greetings are also physical: a slight bow (会釈 eshaku) usually accompanies them, deeper for more formal contexts. Leaving a conversation has its own vocabulary too: さようなら carries a note of finality (a longer parting) and is used far less between people who will see each other again soon, where じゃあね or また明日 (see you tomorrow) is more natural. ありがとうございます (thank you, polite) and すみません (excuse me / sorry, also used to get attention) round out the core survival set every beginner needs before anything else.",
            "examples": [
                {
                    "target": "おはようございます",
                    "reading": "Ohayou gozaimasu",
                    "translation": "Good morning (polite, used until roughly late morning)"
                },
                {
                    "target": "こんにちは",
                    "reading": "Konnichiwa",
                    "translation": "Good afternoon / hello (daytime)"
                },
                {
                    "target": "こんばんは",
                    "reading": "Konbanwa",
                    "translation": "Good evening"
                },
                {
                    "target": "さようなら",
                    "reading": "Sayounara",
                    "translation": "Goodbye (implies a longer parting, not casual daily use)"
                },
                {
                    "target": "また明日",
                    "reading": "Mata ashita",
                    "translation": "See you tomorrow"
                },
                {
                    "target": "ありがとうございます",
                    "reading": "Arigatou gozaimasu",
                    "translation": "Thank you (polite)"
                },
                {
                    "target": "すみません",
                    "reading": "Sumimasen",
                    "translation": "Excuse me / I'm sorry / thank you for the trouble"
                }
            ],
            "mnemonics": [
                "こんにちは and こんばんは both start with こん- ('this ___') — こんにち = 'this day' (daytime), こんばん = 'this evening'.",
                "おはよう contains 早い (hayai, 'early') — a reminder it's the greeting for the early part of the day."
            ],
            "culturalNotes": [
                "さようなら is used more sparingly than English \"bye\" — between classmates, family, or coworkers you expect to see again soon, casual expressions like じゃあね or またね are far more natural.",
                "A small bow (eshaku) commonly accompanies these greetings; the depth and duration of the bow scales with formality."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "It is 8 AM. Which greeting fits?",
                    "options": [
                        "さようなら (1.1)",
                        "こんばんは (1.2)",
                        "こんにちは (1.3)",
                        "おはようございます (1.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "おはようございます is used in the morning."
                },
                {
                    "prompt": "It is 7 PM. Which greeting fits?",
                    "options": [
                        "すみません",
                        "こんばんは",
                        "おはようございます",
                        "こんにちは"
                    ],
                    "answerIndex": 1,
                    "explanation": "こんばんは is the evening greeting."
                },
                {
                    "prompt": "Someone helps you carry a bag. What do you say?",
                    "options": [
                        "ありがとうございます",
                        "さようなら",
                        "おはようございます",
                        "こんにちは"
                    ],
                    "answerIndex": 0,
                    "explanation": "ありがとうございます thanks them politely."
                },
                {
                    "prompt": "You'll see your coworker again tomorrow morning. What's the more natural way to say goodbye today?",
                    "options": [
                        "こんにちは",
                        "さようなら",
                        "すみません",
                        "また明日"
                    ],
                    "answerIndex": 3,
                    "explanation": "また明日 (\"see you tomorrow\") fits an everyday parting far better than the more final さようなら."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: 'Good afternoon.'",
                    "options": [
                        "ありがとうございます (1.1)",
                        "こんばんは (1.2)",
                        "おはようございます (1.3)",
                        "こんにちは (1.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "こんにちは = good afternoon / hello during the day."
                },
                {
                    "prompt": "You bump into someone on the train and want to apologize briefly. What do you say?",
                    "options": [
                        "さようなら",
                        "すみません",
                        "ありがとうございます",
                        "こんばんは"
                    ],
                    "answerIndex": 1,
                    "explanation": "すみません covers a light apology as well as \"excuse me.\""
                },
                {
                    "prompt": "Which greeting would sound odd said with です attached (e.g. こんにちはです)?",
                    "options": [
                        "Both A and B are already complete and never take です",
                        "おはようございます",
                        "None of these",
                        "こんにちは"
                    ],
                    "answerIndex": 0,
                    "explanation": "Time-of-day greetings are fixed expressions; they never combine with です."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Select the correct morning greeting.",
                    "options": [
                        "おはようございます",
                        "こんにちは",
                        "こんばんは",
                        "さようなら"
                    ],
                    "answerIndex": 0,
                    "explanation": "おはようございます is for mornings."
                },
                {
                    "prompt": "Select the correct evening greeting.",
                    "options": [
                        "ありがとうございます",
                        "おはようございます",
                        "こんにちは",
                        "こんばんは"
                    ],
                    "answerIndex": 3,
                    "explanation": "こんばんは is for evenings."
                },
                {
                    "prompt": "What does すみません mean, besides 'excuse me'?",
                    "options": [
                        "See you tomorrow",
                        "Good evening",
                        "Thank you / sorry for the trouble",
                        "Good morning"
                    ],
                    "answerIndex": 2,
                    "explanation": "すみません doubles as a light apology or acknowledgment of trouble caused."
                },
                {
                    "prompt": "Which is the most natural way to say goodbye to a classmate you will see tomorrow?",
                    "options": [
                        "こんばんは",
                        "また明日",
                        "すみません",
                        "さようなら"
                    ],
                    "answerIndex": 1,
                    "explanation": "また明日 fits casual, expected-to-meet-again partings."
                },
                {
                    "prompt": "Translate: 'Thank you (polite).'",
                    "options": [
                        "ありがとうございます",
                        "すみません",
                        "さようなら",
                        "こんにちは"
                    ],
                    "answerIndex": 0,
                    "explanation": "ありがとうございます is the standard polite thank-you."
                },
                {
                    "prompt": "A greeting is typically accompanied by which physical gesture?",
                    "options": [
                        "A handshake",
                        "A wave only",
                        "No gesture at all",
                        "A slight bow (eshaku)"
                    ],
                    "answerIndex": 3,
                    "explanation": "A small bow customarily accompanies Japanese greetings, scaling with formality."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u1-l2": {
        "id": "ja-u1-l2",
        "unit": "ja-u1",
        "level": "A1",
        "objective": "Build basic identity sentences with the です copula and the topic particle は, and negate them politely.",
        "prerequisites": [
            "ja-u1-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u1-l1"
            ]
        },
        "presentation": {
            "explanation": "Japanese sentences describing identity follow the pattern [Topic] は [Noun] です — literally 'as for [topic], it is [noun]'. は (written with the hiragana character for 'ha' but pronounced 'wa' when used as this particle) marks what the sentence is about, not necessarily its grammatical subject. です is a polite copula, roughly 'is/am/are', and always comes at the very end of the sentence — Japanese is verb-final (SOV), unlike English's subject-verb-object order. So わたしは学生です (Watashi wa gakusei desu) is literally 'As for me, [I am a] student.' To negate a です sentence, replace です with じゃありません (casual-polite) or ではありません (slightly more formal) — both mean 'is not'. Because Japanese frequently omits the subject once it's clear from context, if someone already knows you're talking about yourself, わたしは can often be dropped entirely: just 学生です is a completely natural way to say 'I am a student' in the right context.",
            "examples": [
                {
                    "target": "わたしは学生です。",
                    "reading": "Watashi wa gakusei desu.",
                    "translation": "I am a student."
                },
                {
                    "target": "わたしは先生です。",
                    "reading": "Watashi wa sensei desu.",
                    "translation": "I am a teacher."
                },
                {
                    "target": "これは本です。",
                    "reading": "Kore wa hon desu.",
                    "translation": "This is a book."
                },
                {
                    "target": "わたしは学生じゃありません。",
                    "reading": "Watashi wa gakusei ja arimasen.",
                    "translation": "I am not a student."
                },
                {
                    "target": "これは本ではありません。",
                    "reading": "Kore wa hon dewa arimasen.",
                    "translation": "This is not a book."
                }
            ],
            "mnemonics": [
                "は as a particle is pronounced 'wa,' not 'ha' — think of it as putting the topic 'on a wa(ve)' that carries the rest of the sentence.",
                "です sits at the very end, like a period with a voice — it always closes the sentence."
            ],
            "culturalNotes": [
                "Dropping the subject once it is understood from context is completely normal and often sounds more natural than always including わたしは."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Fill in: これ ___ 本です。 (This is a book.)",
                    "options": [
                        "が (2.1)",
                        "は (2.2)",
                        "に (2.3)",
                        "を (2.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "は marks これ as the topic."
                },
                {
                    "prompt": "Translate: 'I am a teacher.'",
                    "options": [
                        "わたしは学生です。",
                        "わたしは先生です。",
                        "わたしは先生じゃありません。",
                        "これは先生です。"
                    ],
                    "answerIndex": 1,
                    "explanation": "先生 = teacher; the copula です closes the sentence."
                },
                {
                    "prompt": "Negate: わたしは学生です → ?",
                    "options": [
                        "わたしは学生です。",
                        "わたしは学生じゃありません。",
                        "これは学生です。",
                        "わたしが学生です。"
                    ],
                    "answerIndex": 1,
                    "explanation": "じゃありません negates です."
                },
                {
                    "prompt": "Where does the copula です go in the sentence?",
                    "options": [
                        "At the beginning",
                        "Right after the topic",
                        "At the very end",
                        "It never appears"
                    ],
                    "answerIndex": 2,
                    "explanation": "Japanese is verb/copula-final (SOV)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: 'This is not a book.'",
                    "options": [
                        "これは本じゃありません。 (2.1)",
                        "わたしは本です。 (2.2)",
                        "これが本です。 (2.3)",
                        "これは本です。 (2.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "じゃありません negates です for これ."
                },
                {
                    "prompt": "What does わたしは学生です literally emphasize as its topic?",
                    "options": [
                        "わたし (me)",
                        "です (is)",
                        "Nothing is emphasized",
                        "学生 (student)"
                    ],
                    "answerIndex": 0,
                    "explanation": "は marks わたし as what the sentence is about."
                },
                {
                    "prompt": "In the right context, which is a completely natural, shorter way to say 'I am a student'?",
                    "options": [
                        "学生です。",
                        "わたしは。",
                        "です学生。",
                        "わたしはです。"
                    ],
                    "answerIndex": 0,
                    "explanation": "The subject can be dropped once context makes it clear."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Which particle marks the topic of a sentence?",
                    "options": [
                        "を",
                        "に",
                        "で",
                        "は"
                    ],
                    "answerIndex": 3,
                    "explanation": "は is the topic-marking particle (pronounced \"wa\")."
                },
                {
                    "prompt": "Translate: 'I am a student.'",
                    "options": [
                        "わたしを学生です。",
                        "学生はわたしです。",
                        "わたしは学生です。",
                        "わたしは先生です。"
                    ],
                    "answerIndex": 2,
                    "explanation": "学生 = student, closed with です."
                },
                {
                    "prompt": "Which sentence correctly negates これは本です?",
                    "options": [
                        "これは本ですじゃない。",
                        "これは本じゃありません。",
                        "これは本ませんでした。",
                        "これも本です。"
                    ],
                    "answerIndex": 1,
                    "explanation": "じゃありません is the standard polite negation of です."
                },
                {
                    "prompt": "What part of speech is です?",
                    "options": [
                        "A polite copula (is/am/are)",
                        "A verb of motion",
                        "A noun",
                        "A particle"
                    ],
                    "answerIndex": 0,
                    "explanation": "です links the topic to a noun, meaning \"is/am/are.\""
                },
                {
                    "prompt": "Where in a Japanese sentence does the main verb/copula typically go?",
                    "options": [
                        "First",
                        "Anywhere",
                        "Second",
                        "Last"
                    ],
                    "answerIndex": 3,
                    "explanation": "Japanese word order is Subject-Object-Verb, so the copula/verb comes last."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u1-l3": {
        "id": "ja-u1-l3",
        "unit": "ja-u1",
        "level": "A1",
        "objective": "Introduce yourself with your name, nationality, and occupation in a complete, natural self-introduction (自己紹介).",
        "prerequisites": [
            "ja-u1-l1",
            "ja-u1-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u1-l2"
            ]
        },
        "presentation": {
            "explanation": "A Japanese self-introduction (自己紹介 jikoshoukai) follows a predictable ritual shape: state your name, state your nationality or where you're from, state your occupation or role, and close with a fixed set phrase. Names use はじめまして (nice to meet you) to open, then わたしは[name]です — note that Japanese speakers usually don't attach です directly after their own name the way you might expect a title to; instead it's simply わたしは田中です (I am Tanaka). Nationality uses [country]人 (じん) — アメリカ人 (American), 日本人 (Japanese) — combined with the pattern from Lesson 2: わたしはアメリカ人です. Occupation reuses the same です pattern: わたしは学生です (I am a student), わたしは会社員です (I am a company employee). The whole introduction traditionally closes with どうぞよろしくお願いします (roughly, 'please treat me kindly going forward' — a phrase with no direct English equivalent, signaling you're looking forward to a good relationship).",
            "examples": [
                {
                    "target": "はじめまして。",
                    "reading": "Hajimemashite.",
                    "translation": "Nice to meet you (said only at a first meeting)."
                },
                {
                    "target": "わたしは田中です。",
                    "reading": "Watashi wa Tanaka desu.",
                    "translation": "I am Tanaka."
                },
                {
                    "target": "わたしはアメリカ人です。",
                    "reading": "Watashi wa Amerika-jin desu.",
                    "translation": "I am American."
                },
                {
                    "target": "わたしは日本人じゃありません。",
                    "reading": "Watashi wa Nihon-jin ja arimasen.",
                    "translation": "I am not Japanese."
                },
                {
                    "target": "わたしは会社員です。",
                    "reading": "Watashi wa kaishain desu.",
                    "translation": "I am a company employee."
                },
                {
                    "target": "どうぞよろしくお願いします。",
                    "reading": "Douzo yoroshiku onegaishimasu.",
                    "translation": "(closing phrase — please treat me well / I look forward to working with you)"
                }
            ],
            "mnemonics": [
                "人 (じん, 'person') tacked onto a country name makes a nationality — 日本 (Japan) + 人 = 日本人 (Japanese person). Think 'country + person = nationality.'"
            ],
            "culturalNotes": [
                "はじめまして and どうぞよろしくお願いします are said only at the very first meeting with someone, bookending the introduction — they are not repeated in later conversations."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Fill in the nationality suffix: アメリカ___ (American)",
                    "options": [
                        "人 (3.1)",
                        "国 (3.2)",
                        "です (3.3)",
                        "語 (3.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "人 (jin) turns a country name into a nationality/person."
                },
                {
                    "prompt": "Which phrase is said only at a first meeting, before your name?",
                    "options": [
                        "はじめまして",
                        "こんにちは",
                        "さようなら",
                        "どうぞよろしくお願いします"
                    ],
                    "answerIndex": 0,
                    "explanation": "はじめまして opens a first-time introduction."
                },
                {
                    "prompt": "Translate: 'I am a company employee.'",
                    "options": [
                        "わたしは会社員です。",
                        "わたしはアメリカ人です。",
                        "わたしは先生じゃありません。",
                        "わたしは学生です。"
                    ],
                    "answerIndex": 0,
                    "explanation": "会社員 = company employee."
                },
                {
                    "prompt": "What does どうぞよろしくお願いします close out?",
                    "options": [
                        "A first-meeting self-introduction",
                        "A goodbye at the end of the day",
                        "A question",
                        "A shopping request"
                    ],
                    "answerIndex": 0,
                    "explanation": "It is the traditional closing line of a self-introduction."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: 'I am not Japanese.'",
                    "options": [
                        "わたしは日本人です。 (3.1)",
                        "わたしは日本人じゃありません。 (3.2)",
                        "わたしはアメリカ人です。 (3.3)",
                        "これは日本人です。 (3.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "じゃありません negates the identity statement."
                },
                {
                    "prompt": "Put in order: 1) はじめまして 2) name+です 3) どうぞよろしくお願いします — what comes first?",
                    "options": [
                        "name+です",
                        "どうぞよろしくお願いします",
                        "はじめまして",
                        "They can be in any order"
                    ],
                    "answerIndex": 2,
                    "explanation": "はじめまして opens the introduction ritual."
                },
                {
                    "prompt": "How would you state you're a student AND that you're American in one idea?",
                    "options": [
                        "アメリカわたしは学生です。",
                        "わたしはアメリカ人です。学生です。",
                        "わたしは学生アメリカ人です。",
                        "です学生アメリカ人わたしは。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Two separate は...です statements are the natural way to state both facts."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "What suffix turns a country name into a nationality?",
                    "options": [
                        "語 (go)",
                        "です (desu)",
                        "人 (jin)",
                        "国 (koku)"
                    ],
                    "answerIndex": 2,
                    "explanation": "人 (jin) = person, attached to a country name for nationality."
                },
                {
                    "prompt": "Translate: 'Nice to meet you.'",
                    "options": [
                        "どうぞよろしくお願いします",
                        "はじめまして",
                        "すみません",
                        "こんにちは"
                    ],
                    "answerIndex": 1,
                    "explanation": "はじめまして is said at a first meeting."
                },
                {
                    "prompt": "Translate: 'I am American.'",
                    "options": [
                        "わたしはアメリカ人です。",
                        "わたしはアメリカです。",
                        "わたしはアメリカ人じゃありません。",
                        "アメリカはわたしです。"
                    ],
                    "answerIndex": 0,
                    "explanation": "アメリカ人 = American (person)."
                },
                {
                    "prompt": "What is the closing phrase of a self-introduction?",
                    "options": [
                        "はじめまして",
                        "こんにちは",
                        "さようなら",
                        "どうぞよろしくお願いします"
                    ],
                    "answerIndex": 3,
                    "explanation": "どうぞよろしくお願いします closes the jikoshoukai ritual."
                },
                {
                    "prompt": "Translate: 'I am a student, not a teacher.'",
                    "options": [
                        "わたしは学生と先生です。",
                        "わたしは先生です。学生じゃありません。",
                        "わたしは学生です。先生じゃありません。",
                        "これは学生です。"
                    ],
                    "answerIndex": 2,
                    "explanation": "学生です states student; 先生じゃありません negates teacher."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u1-l4": {
        "id": "ja-u1-l4",
        "unit": "ja-u1",
        "level": "A1",
        "objective": "Ask and answer simple yes/no and identity questions using the question particle か and the reaction words そうです and ちがいます.",
        "prerequisites": [
            "ja-u1-l2",
            "ja-u1-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u1-l3"
            ]
        },
        "presentation": {
            "explanation": "Turning a です statement into a yes/no question in Japanese is remarkably simple: just add か to the end and raise your intonation slightly — no word order change and no auxiliary verb like English 'do/does' is needed. 学生ですか (Gakusei desu ka?) means 'Are [you] a student?' To answer, はい, そうです (yes, that's right) confirms, and いいえ, ちがいます (no, that's wrong / that's not it) or いいえ, 〜じゃありません denies. Asking someone's name politely uses お名前は何ですか (Onamae wa nan desu ka? — 'What is your name?'), where 何 (なに/なん, 'what') fills the slot that would otherwise hold an answer. This lesson also introduces the near/far demonstrative set これ/それ/あれ (this/that/that-over-there) for pointing at objects: これ is near the speaker, それ is near the listener, あれ is far from both.",
            "examples": [
                {
                    "target": "学生ですか。",
                    "reading": "Gakusei desu ka?",
                    "translation": "Are you a student?"
                },
                {
                    "target": "はい、そうです。",
                    "reading": "Hai, sou desu.",
                    "translation": "Yes, that's right."
                },
                {
                    "target": "いいえ、ちがいます。",
                    "reading": "Iie, chigaimasu.",
                    "translation": "No, that's not it."
                },
                {
                    "target": "お名前は何ですか。",
                    "reading": "Onamae wa nan desu ka?",
                    "translation": "What is your name?"
                },
                {
                    "target": "これは何ですか。",
                    "reading": "Kore wa nan desu ka?",
                    "translation": "What is this?"
                },
                {
                    "target": "それは本です。",
                    "reading": "Sore wa hon desu.",
                    "translation": "That is a book."
                }
            ],
            "mnemonics": [
                "か at the end of a sentence is like a question mark you can hear — 'desu' becomes 'desu-KA?'",
                "これ/それ/あれ scale with distance from you: これ = close, それ = there (near them), あれ = away over there — the vowel gets \"further\" each step (ko-so-a)."
            ],
            "culturalNotes": [
                "そうです confirms the whole statement as correct, not just a literal \"yes\" — it is closer to \"that's right.\""
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Turn this into a question: 先生です → ?",
                    "options": [
                        "先生ですか。 (4.1)",
                        "先生ですね。 (4.2)",
                        "先生です。 (4.3)",
                        "先生じゃありません。 (4.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "Adding か turns a statement into a yes/no question."
                },
                {
                    "prompt": "Someone asks 学生ですか and you ARE a student — how do you answer?",
                    "options": [
                        "いいえ、ちがいます。",
                        "これは学生です。",
                        "さようなら。",
                        "はい、そうです。"
                    ],
                    "answerIndex": 3,
                    "explanation": "はい、そうです confirms."
                },
                {
                    "prompt": "Translate: 'What is your name?'",
                    "options": [
                        "お名前は何ですか。",
                        "あなたはだれですか。",
                        "これは何ですか。",
                        "はじめまして。"
                    ],
                    "answerIndex": 0,
                    "explanation": "お名前は何ですか asks for a name politely."
                },
                {
                    "prompt": "An object is near the listener, not you. Which word points to it?",
                    "options": [
                        "これ",
                        "どれ",
                        "それ",
                        "あれ"
                    ],
                    "answerIndex": 2,
                    "explanation": "それ = near the listener."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "You're asked 先生ですか but you're NOT a teacher — how do you answer?",
                    "options": [
                        "はい、そうです。 (4.1)",
                        "いいえ、ちがいます。 (4.2)",
                        "はじめまして。 (4.3)",
                        "これは先生です。 (4.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "いいえ、ちがいます denies the statement."
                },
                {
                    "prompt": "Translate: 'What is this?'",
                    "options": [
                        "これは何ですか。",
                        "それは何ですか。",
                        "学生ですか。",
                        "お名前は何ですか。"
                    ],
                    "answerIndex": 0,
                    "explanation": "これ points to something near the speaker."
                },
                {
                    "prompt": "An object is far from both speaker and listener. Which word points to it?",
                    "options": [
                        "これ",
                        "それ",
                        "それは",
                        "あれ"
                    ],
                    "answerIndex": 3,
                    "explanation": "あれ = far from both parties."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Which particle turns a statement into a yes/no question?",
                    "options": [
                        "は",
                        "か",
                        "を",
                        "も"
                    ],
                    "answerIndex": 1,
                    "explanation": "か added at the end makes it a question."
                },
                {
                    "prompt": "Translate: 'Yes, that's right.'",
                    "options": [
                        "はい、そうです。",
                        "いいえ、ちがいます。",
                        "すみません。",
                        "はじめまして。"
                    ],
                    "answerIndex": 0,
                    "explanation": "はい、そうです confirms a statement."
                },
                {
                    "prompt": "Translate: 'No, that's not it.'",
                    "options": [
                        "はい、そうです。",
                        "これは何ですか。",
                        "ありがとうございます。",
                        "いいえ、ちがいます。"
                    ],
                    "answerIndex": 3,
                    "explanation": "いいえ、ちがいます denies a statement."
                },
                {
                    "prompt": "Which word means 'this' (near the speaker)?",
                    "options": [
                        "あれ",
                        "それ",
                        "これ",
                        "どれ"
                    ],
                    "answerIndex": 2,
                    "explanation": "これ = this, near the speaker."
                },
                {
                    "prompt": "Translate: 'What is your name?'",
                    "options": [
                        "学生ですか。",
                        "お名前は何ですか。",
                        "これは何ですか。",
                        "はじめまして。"
                    ],
                    "answerIndex": 1,
                    "explanation": "お名前は何ですか politely asks for a name."
                },
                {
                    "prompt": "Which word points to something far from both speaker and listener?",
                    "options": [
                        "あれ",
                        "それ",
                        "は",
                        "これ"
                    ],
                    "answerIndex": 0,
                    "explanation": "あれ = far from both."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u1-l5": {
        "id": "ja-u1-l5",
        "unit": "ja-u1",
        "level": "A1",
        "objective": "Combine greetings, self-introduction, and simple question-and-answer into a short, natural first-meeting dialogue.",
        "prerequisites": [
            "ja-u1-l1",
            "ja-u1-l2",
            "ja-u1-l3",
            "ja-u1-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u1-l1",
                "ja-u1-l2",
                "ja-u1-l3",
                "ja-u1-l4"
            ]
        },
        "presentation": {
            "explanation": "This capstone lesson strings together everything from Unit 1 into one connected exchange — the kind of 30-second conversation you'd actually have meeting someone for the first time in Japan. Notice how each earlier lesson's building block appears in sequence: a time-appropriate greeting, はじめまして to open the introduction ritual, a topic-marked identity statement with は...です, a か-question to learn about the other person, a そうです/ちがいます reaction, and どうぞよろしくお願いします to close. Real conversations rarely stay in one 'mode' for long — they weave statements and questions together — so being able to shift fluidly between them, rather than just drilling each piece in isolation, is the actual skill this unit has been building toward.",
            "examples": [
                {
                    "target": "A: こんにちは。はじめまして。",
                    "reading": "Konnichiwa. Hajimemashite.",
                    "translation": "A: Hello. Nice to meet you."
                },
                {
                    "target": "B: はじめまして。わたしは田中です。",
                    "reading": "Hajimemashite. Watashi wa Tanaka desu.",
                    "translation": "B: Nice to meet you. I am Tanaka."
                },
                {
                    "target": "A: 田中さんは学生ですか。",
                    "reading": "Tanaka-san wa gakusei desu ka?",
                    "translation": "A: Are you a student, Tanaka?"
                },
                {
                    "target": "B: はい、そうです。田中さんは？",
                    "reading": "Hai, sou desu. Tanaka-san wa?",
                    "translation": "B: Yes, I am. And you?"
                },
                {
                    "target": "A: わたしは先生です。どうぞよろしくお願いします。",
                    "reading": "Watashi wa sensei desu. Douzo yoroshiku onegaishimasu.",
                    "translation": "A: I'm a teacher. Pleased to meet you."
                }
            ],
            "mnemonics": [
                "さん after a name is a polite title (like Mr./Ms.) — never attach it to your own name, only to others'."
            ],
            "culturalNotes": [
                "Repeating the question back with just [Name]さんは？ (and rising intonation) is a very common, efficient way to return a question without restating the whole sentence."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "What comes right after こんにちは when meeting someone for the very first time?",
                    "options": [
                        "さようなら (5.1)",
                        "はじめまして (5.2)",
                        "ありがとうございます (5.3)",
                        "そうです (5.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "はじめまして follows the initial greeting to open the introduction."
                },
                {
                    "prompt": "田中さんは学生ですか。はい、___。",
                    "options": [
                        "ちがいます",
                        "そうです",
                        "さようなら",
                        "はじめまして"
                    ],
                    "answerIndex": 1,
                    "explanation": "はい、そうです confirms the question."
                },
                {
                    "prompt": "How do you politely return a question ('And you, Tanaka?') without repeating the whole sentence?",
                    "options": [
                        "田中さんは？",
                        "田中さんですか。",
                        "そうです田中さん。",
                        "はじめまして田中さん。"
                    ],
                    "answerIndex": 0,
                    "explanation": "[Name]さんは？ with rising intonation efficiently returns the question."
                },
                {
                    "prompt": "What title is attached to someone else's name but never your own?",
                    "options": [
                        "さん",
                        "か",
                        "です",
                        "は"
                    ],
                    "answerIndex": 0,
                    "explanation": "さん is a polite title used for others, not oneself."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Order these into a natural exchange: 1) はい、そうです 2) 学生ですか 3) はじめまして — which comes first?",
                    "options": [
                        "はい、そうです (5.1)",
                        "はじめまして (5.2)",
                        "Order does not matter (5.3)",
                        "学生ですか (5.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "はじめまして opens the interaction before any questions."
                },
                {
                    "prompt": "Translate the full exchange sense: 'Nice to meet you. I am Tanaka. Are you a student? Yes, I am.'",
                    "options": [
                        "はじめまして。わたしは田中です。学生ですか。はい、そうです。",
                        "こんにちは。田中さんは学生です。そうですか。",
                        "はじめまして。田中さんですか。はい、そうです。",
                        "さようなら。わたしは田中です。学生ですか。いいえ、ちがいます。"
                    ],
                    "answerIndex": 0,
                    "explanation": "This matches each sentence in order: greeting, identity, question, confirmation."
                },
                {
                    "prompt": "Which closing phrase signals you're finished with the introduction and look forward to the relationship?",
                    "options": [
                        "そうです",
                        "これは何ですか",
                        "どうぞよろしくお願いします",
                        "ちがいます"
                    ],
                    "answerIndex": 2,
                    "explanation": "どうぞよろしくお願いします closes a jikoshoukai."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Put in order: greeting → introduction opener → identity statement → question → answer → closer. What's the FIRST element?",
                    "options": [
                        "こんにちは / おはようございます / こんばんは",
                        "はい、そうです",
                        "か question",
                        "どうぞよろしくお願いします"
                    ],
                    "answerIndex": 0,
                    "explanation": "A time-appropriate greeting opens the exchange."
                },
                {
                    "prompt": "In 田中さんは学生ですか, what does さん signal?",
                    "options": [
                        "A question",
                        "Negation",
                        "Past tense",
                        "A polite title for the person named"
                    ],
                    "answerIndex": 3,
                    "explanation": "さん is a respectful title used on others’ names."
                },
                {
                    "prompt": "Which response correctly confirms 'yes, I am a student'?",
                    "options": [
                        "これは学生です。",
                        "どうぞよろしくお願いします。",
                        "はい、そうです。",
                        "いいえ、ちがいます。"
                    ],
                    "answerIndex": 2,
                    "explanation": "はい、そうです confirms the statement."
                },
                {
                    "prompt": "Which phrase closes a first-meeting introduction?",
                    "options": [
                        "こんにちは",
                        "どうぞよろしくお願いします",
                        "それは本です",
                        "はじめまして"
                    ],
                    "answerIndex": 1,
                    "explanation": "どうぞよろしくお願いします is the traditional closing line."
                },
                {
                    "prompt": "Translate: 'I am a teacher. Pleased to meet you.'",
                    "options": [
                        "わたしは先生です。どうぞよろしくお願いします。",
                        "先生はわたしです。ちがいます。",
                        "わたしは先生ですか。",
                        "わたしは学生です。はじめまして。"
                    ],
                    "answerIndex": 0,
                    "explanation": "わたしは先生です states the identity; どうぞよろしくお願いします closes politely."
                },
                {
                    "prompt": "What is the efficient way to ask 'And you?' after answering a question, reusing the other person's name?",
                    "options": [
                        "[Name]ですか？",
                        "そうです[Name]",
                        "はじめまして[Name]",
                        "[Name]さんは？"
                    ],
                    "answerIndex": 3,
                    "explanation": "[Name]さんは？ with rising intonation returns the question naturally."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u2-l1": {
        "id": "ja-u2-l1",
        "unit": "ja-u2",
        "level": "A1",
        "objective": "Count from 1 to 100 using the native Sino-Japanese number system and read simple two- and three-digit numbers aloud.",
        "prerequisites": [
            "ja-u1-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u1-l2",
                "ja-u1-l3"
            ]
        },
        "presentation": {
            "explanation": "Japanese numbers 1–10 are いち, に, さん, し/よん, ご, ろく, しち/なな, はち, きゅう, じゅう. Two numbers have two readings each — 4 can be し or よん, and 7 can be しち or なな — because し sounds identical to 死 (death) and しち can be misheard for いち (one), so よん and なな are strongly preferred in daily speech, especially when counting objects or giving phone numbers. Once you know 1–10, the whole system up to 99 is built compositionally: 11 is じゅういち (10+1), 20 is にじゅう (2×10), 35 is さんじゅうご (3×10+5) — there's no separate word to memorize for each ten, unlike English 'twenty,' 'thirty.' 100 is ひゃく, and the same compositional logic continues: 101 is ひゃくいち, 150 is ひゃくごじゅう. This regularity makes Japanese numbers considerably easier to generalize once the 1–10 base and the multiplication logic click.",
            "examples": [
                {
                    "target": "1 いち, 2 に, 3 さん, 4 よん, 5 ご",
                    "reading": "ichi, ni, san, yon, go",
                    "translation": "1, 2, 3, 4, 5"
                },
                {
                    "target": "6 ろく, 7 なな, 8 はち, 9 きゅう, 10 じゅう",
                    "reading": "roku, nana, hachi, kyuu, juu",
                    "translation": "6, 7, 8, 9, 10"
                },
                {
                    "target": "11 じゅういち",
                    "reading": "juu-ichi",
                    "translation": "11 (10+1)"
                },
                {
                    "target": "20 にじゅう",
                    "reading": "ni-juu",
                    "translation": "20 (2×10)"
                },
                {
                    "target": "35 さんじゅうご",
                    "reading": "san-juu-go",
                    "translation": "35 (3×10+5)"
                },
                {
                    "target": "100 ひゃく",
                    "reading": "hyaku",
                    "translation": "100"
                }
            ],
            "mnemonics": [
                "よん and なな are the 'safe' readings for 4 and 7 — avoid し (sounds like 死, death) and be careful with しち (can be confused with いち).",
                "Think of two-digit numbers as simple math read aloud: 35 = \"3, 10, 5\" (さん・じゅう・ご) with no separate word needed for \"thirty.\""
            ],
            "culturalNotes": [
                "し (4) is avoided in many contexts beyond just speech — some hospitals and hotels skip room/floor number 4 entirely because of the death association, similar to floor 13 superstition in some Western buildings."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you say 20?",
                    "options": [
                        "にじゅう (6.1)",
                        "にひゃく (6.2)",
                        "じゅうじゅう (6.3)",
                        "じゅうに (6.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "にじゅう = 2×10."
                },
                {
                    "prompt": "Which reading of 4 is generally preferred in everyday speech?",
                    "options": [
                        "Neither is used",
                        "Both equally common",
                        "し",
                        "よん"
                    ],
                    "answerIndex": 3,
                    "explanation": "よん avoids the death association of し."
                },
                {
                    "prompt": "How do you say 35?",
                    "options": [
                        "さんご",
                        "さんじゅうご",
                        "じゅうさんご",
                        "ごじゅうさん"
                    ],
                    "answerIndex": 1,
                    "explanation": "35 = 3×10 + 5 = さんじゅうご."
                },
                {
                    "prompt": "How do you say 100?",
                    "options": [
                        "せん",
                        "じゅうじゅう",
                        "まん",
                        "ひゃく"
                    ],
                    "answerIndex": 3,
                    "explanation": "ひゃく = 100."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "How do you say 11?",
                    "options": [
                        "じゅういち (6.1)",
                        "じゅうじゅう (6.2)",
                        "いちいち (6.3)",
                        "いちじゅう (6.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "11 = 10+1 = じゅういち."
                },
                {
                    "prompt": "How do you say 101?",
                    "options": [
                        "せんいち",
                        "ひゃくじゅう",
                        "ひゃくいち",
                        "いちひゃく"
                    ],
                    "answerIndex": 2,
                    "explanation": "101 = 100+1 = ひゃくいち."
                },
                {
                    "prompt": "Why is なな preferred over しち for 7 in many contexts?",
                    "options": [
                        "しち is grammatically incorrect",
                        "なな is shorter",
                        "There is no reason, both are rare",
                        "しち can be confused with いち (1)"
                    ],
                    "answerIndex": 3,
                    "explanation": "しち risks being misheard as いち, so なな is often clearer."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "How do you say 8?",
                    "options": [
                        "ばく",
                        "きゅう",
                        "ろく",
                        "はち"
                    ],
                    "answerIndex": 3,
                    "explanation": "8 = はち."
                },
                {
                    "prompt": "How do you say 20?",
                    "options": [
                        "にせん",
                        "じゅうに",
                        "にじゅう",
                        "にひゃく"
                    ],
                    "answerIndex": 2,
                    "explanation": "20 = 2×10 = にじゅう."
                },
                {
                    "prompt": "How do you say 47?",
                    "options": [
                        "よんなな",
                        "よんじゅうなな",
                        "じゅうよんなな",
                        "ななじゅうよん"
                    ],
                    "answerIndex": 1,
                    "explanation": "47 = 4×10+7 = よんじゅうなな."
                },
                {
                    "prompt": "Which number is often avoided due to sounding like 'death' (死)?",
                    "options": [
                        "4 (し)",
                        "7 (しち)",
                        "1 (いち)",
                        "9 (きゅう)"
                    ],
                    "answerIndex": 0,
                    "explanation": "し (4) sounds identical to 死 (death)."
                },
                {
                    "prompt": "How do you say 100?",
                    "options": [
                        "じゅうじゅう",
                        "せん",
                        "まん",
                        "ひゃく"
                    ],
                    "answerIndex": 3,
                    "explanation": "100 = ひゃく."
                },
                {
                    "prompt": "How is the Japanese number system for 11–99 structurally different from English?",
                    "options": [
                        "It has unique words for each ten, just like English",
                        "It has no way to express numbers above 10",
                        "It is fully compositional (tens × 10 + ones), with no separate words like \"twenty\"",
                        "It uses letters instead of a counting system"
                    ],
                    "answerIndex": 2,
                    "explanation": "Japanese builds 11–99 compositionally rather than using unique decade words."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u2-l2": {
        "id": "ja-u2-l2",
        "unit": "ja-u2",
        "level": "A1",
        "objective": "Tell the time in Japanese using 時 (hour) and 分 (minute), including irregular minute readings.",
        "prerequisites": [
            "ja-u2-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u2-l1"
            ]
        },
        "presentation": {
            "explanation": "Telling time in Japanese attaches counters to numbers: 時 (じ) for the hour and 分 (ふん/ぷん) for minutes. Hours are mostly regular: 1時 (いちじ), 2時 (にじ), 3時 (さんじ) — except 4時 which is よじ (not よんじ) and 7時 which is しちじ (not ななじ, unlike the general preference from Lesson 1 — this is one of the few places しち survives in everyday use), and 9時 くじ (not きゅうじ). Minutes are trickier because 分's pronunciation shifts between ふん and ぷん depending on the preceding number, following a sound-euphony pattern: 1分 いっぷん, 2分 にふん, 3分 さんぷん, 4分 よんぷん, 5分 ごふん, 6分 ろっぷん, and so on — this is memorized in chunks rather than derived from a single rule. 半 (はん, 'half') is used for the 30-minute mark as a shortcut: 3時半 (さんじはん) = 3:30, more natural than さんじさんじゅっぷん. To ask the time: 今何時ですか (Ima nanji desu ka?, 'What time is it now?').",
            "examples": [
                {
                    "target": "今何時ですか。",
                    "reading": "Ima nanji desu ka?",
                    "translation": "What time is it now?"
                },
                {
                    "target": "3時です。",
                    "reading": "Sanji desu.",
                    "translation": "It's 3 o'clock."
                },
                {
                    "target": "4時です。",
                    "reading": "Yoji desu.",
                    "translation": "It's 4 o'clock. (irregular: よじ, not よんじ)"
                },
                {
                    "target": "7時です。",
                    "reading": "Shichiji desu.",
                    "translation": "It's 7 o'clock. (irregular: しちじ, not ななじ)"
                },
                {
                    "target": "3時半です。",
                    "reading": "Sanji han desu.",
                    "translation": "It's 3:30."
                },
                {
                    "target": "5時10分です。",
                    "reading": "Goji juppun desu.",
                    "translation": "It's 5:10."
                }
            ],
            "mnemonics": [
                "4時 and 9時 are the two 'oddball' hours: よじ (not よんじ) and くじ (not きゅうじ) — memorize these two exceptions specifically since they break the otherwise-regular pattern.",
                "半 (はん, 'half') is your shortcut for :30 — much shorter than saying the full minute count."
            ],
            "culturalNotes": [
                "7時 keeping しち rather than switching to なな (as Lesson 1 would predict) is a good reminder that 'preferred reading' rules have exceptions in fixed, high-frequency expressions like time-telling."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you say '4 o'clock'?",
                    "options": [
                        "よんじ (7.1)",
                        "よじ (7.2)",
                        "よんじゅうじ (7.3)",
                        "しじ (7.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "4時 is irregularly よじ, not よんじ."
                },
                {
                    "prompt": "How do you say '9 o'clock'?",
                    "options": [
                        "きゅうじ",
                        "くじ",
                        "きゅうふんじ",
                        "ここのじ"
                    ],
                    "answerIndex": 1,
                    "explanation": "9時 is irregularly くじ, not きゅうじ."
                },
                {
                    "prompt": "How do you say '3:30'?",
                    "options": [
                        "さんじさんじゅっぷん",
                        "さんじはん",
                        "さんじゅうさんじ",
                        "はんさんじ"
                    ],
                    "answerIndex": 1,
                    "explanation": "半 (はん) is the standard shortcut for the 30-minute mark."
                },
                {
                    "prompt": "How do you ask 'What time is it now?'",
                    "options": [
                        "今何時ですか。",
                        "何分ですか。",
                        "これは何ですか。",
                        "今日は何ですか。"
                    ],
                    "answerIndex": 0,
                    "explanation": "今何時ですか asks for the current time."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Which hour keeps the しち reading instead of switching to なな, unlike the general Unit 2 Lesson 1 rule?",
                    "options": [
                        "7時 (7.1)",
                        "9時 (7.2)",
                        "1時 (7.3)",
                        "4時 (7.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "7時 is しちじ, an exception to the なな preference."
                },
                {
                    "prompt": "How do you say '5:10'?",
                    "options": [
                        "じゅっぷんごじ",
                        "ごふんじ",
                        "じゅうごふん",
                        "ごじじゅっぷん"
                    ],
                    "answerIndex": 3,
                    "explanation": "5時10分 = ごじじゅっぷん."
                },
                {
                    "prompt": "What does 分 (ふん/ぷん) mark?",
                    "options": [
                        "Minutes",
                        "Days",
                        "Years",
                        "Hours"
                    ],
                    "answerIndex": 0,
                    "explanation": "分 is the minute counter, with a shifting pronunciation depending on the number before it."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "How do you say '3 o'clock'?",
                    "options": [
                        "みっつじ",
                        "さんじゅう",
                        "さんじ",
                        "さんぷん"
                    ],
                    "answerIndex": 2,
                    "explanation": "3時 = さんじ."
                },
                {
                    "prompt": "How do you say '4 o'clock'? (irregular)",
                    "options": [
                        "よんじ",
                        "よじ",
                        "よんふん",
                        "しじ"
                    ],
                    "answerIndex": 1,
                    "explanation": "よじ is the irregular reading for 4時."
                },
                {
                    "prompt": "How do you say '9 o'clock'? (irregular)",
                    "options": [
                        "くじ",
                        "くふん",
                        "きゅうじ",
                        "きゅうふん"
                    ],
                    "answerIndex": 0,
                    "explanation": "くじ is the irregular reading for 9時."
                },
                {
                    "prompt": "What does 半 (はん) indicate when attached to a time?",
                    "options": [
                        "A quarter past",
                        "Midnight",
                        "A full hour",
                        "Half past (the 30-minute mark)"
                    ],
                    "answerIndex": 3,
                    "explanation": "半 = \"half,\" used for :30."
                },
                {
                    "prompt": "Translate: 'What time is it now?'",
                    "options": [
                        "何時間ですか。",
                        "これは何時計ですか。",
                        "今何時ですか。",
                        "今日は何ですか。"
                    ],
                    "answerIndex": 2,
                    "explanation": "今何時ですか asks the current time."
                },
                {
                    "prompt": "Which hour is a rare exception where しち is preferred over なな?",
                    "options": [
                        "4時",
                        "7時",
                        "2時",
                        "9時"
                    ],
                    "answerIndex": 1,
                    "explanation": "7時 = しちじ, unlike the general なな preference elsewhere."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u2-l3": {
        "id": "ja-u2-l3",
        "unit": "ja-u2",
        "level": "A1",
        "objective": "Name the days of the week and describe simple weekly schedules using 曜日.",
        "prerequisites": [
            "ja-u2-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u2-l2"
            ]
        },
        "presentation": {
            "explanation": "The days of the week all end in 曜日 (ようび, 'day') attached to a kanji representing a classical element or celestial body: 月曜日 (Monday, moon), 火曜日 (Tuesday, fire), 水曜日 (Wednesday, water), 木曜日 (Thursday, wood/tree), 金曜日 (Friday, gold/metal), 土曜日 (Saturday, earth), 日曜日 (Sunday, sun). These map directly onto the same five-elements-plus-sun-and-moon logic found in the English planetary names (Moon-day, Saturn-day, Sun-day), just via a different cosmological system. To talk about weekly routines, combine a day with は and a verb: 月曜日は忙しいです (Getsuyoubi wa isogashii desu, 'Monday is busy'). 何曜日ですか (Nan youbi desu ka?) asks 'What day of the week is it?' — distinct from asking the date, which is covered in the next lesson.",
            "examples": [
                {
                    "target": "月曜日",
                    "reading": "Getsuyoubi",
                    "translation": "Monday"
                },
                {
                    "target": "火曜日",
                    "reading": "Kayoubi",
                    "translation": "Tuesday"
                },
                {
                    "target": "水曜日",
                    "reading": "Suiyoubi",
                    "translation": "Wednesday"
                },
                {
                    "target": "木曜日",
                    "reading": "Mokuyoubi",
                    "translation": "Thursday"
                },
                {
                    "target": "金曜日",
                    "reading": "Kin'youbi",
                    "translation": "Friday"
                },
                {
                    "target": "土曜日",
                    "reading": "Doyoubi",
                    "translation": "Saturday"
                },
                {
                    "target": "日曜日",
                    "reading": "Nichiyoubi",
                    "translation": "Sunday"
                },
                {
                    "target": "今日は何曜日ですか。",
                    "reading": "Kyou wa nan youbi desu ka?",
                    "translation": "What day is it today?"
                }
            ],
            "mnemonics": [
                "Moon (月) → Monday, Sun (日) → Sunday: the same logic as English \"Mon-day\" and \"Sun-day,\" just with the kanji spelled out directly.",
                "The middle five (火水木金土 — fire, water, wood, gold, earth) are the five classical elements, appearing in that fixed order every week."
            ],
            "culturalNotes": [
                "Japanese calendars conventionally start the week on Sunday (日) or Monday (月) depending on the publisher — unlike a single fixed convention, so it varies by product."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which day is 月曜日?",
                    "options": [
                        "Monday (8.1)",
                        "Saturday (8.2)",
                        "Friday (8.3)",
                        "Sunday (8.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "月 (moon) → Monday."
                },
                {
                    "prompt": "Which day is 日曜日?",
                    "options": [
                        "Monday",
                        "Wednesday",
                        "Thursday",
                        "Sunday"
                    ],
                    "answerIndex": 3,
                    "explanation": "日 (sun) → Sunday."
                },
                {
                    "prompt": "How do you ask 'What day of the week is it?'",
                    "options": [
                        "何曜日ですか。",
                        "今何時ですか。",
                        "これは何ですか。",
                        "今日は何日ですか。"
                    ],
                    "answerIndex": 0,
                    "explanation": "何曜日ですか asks for the day of the week."
                },
                {
                    "prompt": "Which kanji represents Friday?",
                    "options": [
                        "金 (gold)",
                        "土 (earth)",
                        "火 (fire)",
                        "木 (wood)"
                    ],
                    "answerIndex": 0,
                    "explanation": "金曜日 = Friday."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: 'Monday is busy.'",
                    "options": [
                        "月曜日は忙しいです。 (8.1)",
                        "月曜日が忙しいです。 (8.2)",
                        "忙しいは月曜日です。 (8.3)",
                        "月曜日です忙しい。 (8.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "は marks 月曜日 as the topic, followed by the adjective + です."
                },
                {
                    "prompt": "What order do the five 'element' days (火水木金土) fall in the week?",
                    "options": [
                        "Tuesday, Wednesday, Thursday, Friday, Saturday",
                        "Monday, Tuesday, Wednesday, Thursday, Friday",
                        "Wednesday, Thursday, Friday, Saturday, Sunday",
                        "Any order — they are not fixed"
                    ],
                    "answerIndex": 0,
                    "explanation": "Fire, water, wood, gold, earth correspond to Tue–Sat."
                },
                {
                    "prompt": "Which day is 木曜日?",
                    "options": [
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Tuesday"
                    ],
                    "answerIndex": 1,
                    "explanation": "木 (wood/tree) → Thursday."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Which day is 水曜日?",
                    "options": [
                        "Tuesday",
                        "Wednesday",
                        "Sunday",
                        "Thursday"
                    ],
                    "answerIndex": 1,
                    "explanation": "水 (water) → Wednesday."
                },
                {
                    "prompt": "Which day is 土曜日?",
                    "options": [
                        "Saturday",
                        "Sunday",
                        "Monday",
                        "Friday"
                    ],
                    "answerIndex": 0,
                    "explanation": "土 (earth) → Saturday."
                },
                {
                    "prompt": "Which kanji means 'fire' and marks Tuesday?",
                    "options": [
                        "木",
                        "金",
                        "水",
                        "火"
                    ],
                    "answerIndex": 3,
                    "explanation": "火 = fire = Tuesday."
                },
                {
                    "prompt": "How do you ask what day of the week it is today?",
                    "options": [
                        "何分ですか。",
                        "今何時ですか。",
                        "今日は何曜日ですか。",
                        "今日は何ですか。"
                    ],
                    "answerIndex": 2,
                    "explanation": "今日は何曜日ですか specifically asks for the day of the week."
                },
                {
                    "prompt": "Translate: 'Friday is busy.'",
                    "options": [
                        "金曜日が忙しいです。",
                        "金曜日は忙しいです。",
                        "忙しい金曜日です。",
                        "金曜日ですが忙しい。"
                    ],
                    "answerIndex": 1,
                    "explanation": "は topic-marks 金曜日, followed by 忙しいです."
                },
                {
                    "prompt": "All days of the week share which common ending?",
                    "options": [
                        "曜日",
                        "です",
                        "時",
                        "分"
                    ],
                    "answerIndex": 0,
                    "explanation": "Every day name ends in 曜日 (youbi)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u2-l4": {
        "id": "ja-u2-l4",
        "unit": "ja-u2",
        "level": "A1",
        "objective": "State dates using month and day counters, and describe upcoming or past dates.",
        "prerequisites": [
            "ja-u2-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u2-l3"
            ]
        },
        "presentation": {
            "explanation": "Japanese dates follow year → month → day order, the reverse of the common English month-day order but matching the logical 'biggest unit first' pattern also used for addresses. Months are simply the number + 月 (がつ): 1月 いちがつ (January), 4月 しがつ (April — irregular reading), 7月 しちがつ (July — irregular reading), 9月 くがつ (September — irregular reading). Days of the month are the trickiest part of this lesson: days 1–10 have unique native-Japanese readings that don't follow the number system at all — 一日 ついたち (1st), 二日 ふつか (2nd), 三日 みっか (3rd), and so on through 十日 とおか (10th) — after which days mostly regularize using じゅう-+ the irregular unit reading (十四日 じゅうよっか, 14th) with a few more exceptions like 二十日 はつか (20th). These day-of-month readings are memorized as a set, similar to English 'first/second/third' being irregular before regularizing at 'fourth' onward.",
            "examples": [
                {
                    "target": "1月",
                    "reading": "Ichigatsu",
                    "translation": "January"
                },
                {
                    "target": "4月",
                    "reading": "Shigatsu",
                    "translation": "April (irregular)"
                },
                {
                    "target": "一日",
                    "reading": "Tsuitachi",
                    "translation": "the 1st (irregular)"
                },
                {
                    "target": "二日",
                    "reading": "Futsuka",
                    "translation": "the 2nd (irregular)"
                },
                {
                    "target": "十日",
                    "reading": "Tooka",
                    "translation": "the 10th (irregular)"
                },
                {
                    "target": "二十日",
                    "reading": "Hatsuka",
                    "translation": "the 20th (irregular)"
                },
                {
                    "target": "今日は何月何日ですか。",
                    "reading": "Kyou wa nangatsu nannichi desu ka?",
                    "translation": "What's today's date?"
                }
            ],
            "mnemonics": [
                "Days 1st–10th of the month are a memorized irregular set — treat them like a short vocabulary list of their own, separate from the regular counting system.",
                "Year → Month → Day, biggest-to-smallest, matches Japanese address order too (country → prefecture → city → street) — it's a consistent 'zoom in' pattern across the language."
            ],
            "culturalNotes": [
                "Even fully fluent learners often keep a reference chart for the 1st–10th day readings handy, since they genuinely don't follow a predictable rule — this is normal, not a sign you're behind."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you say 'January'?",
                    "options": [
                        "いちがつ (9.1)",
                        "いちじ (9.2)",
                        "いちようび (9.3)",
                        "いちにち (9.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "1月 = いちがつ."
                },
                {
                    "prompt": "How do you say 'the 1st' of the month?",
                    "options": [
                        "いちにち",
                        "いちがつ",
                        "ひとつ",
                        "ついたち"
                    ],
                    "answerIndex": 3,
                    "explanation": "The 1st has the unique irregular reading ついたち."
                },
                {
                    "prompt": "Which month has an irregular reading (not simply number + がつ)?",
                    "options": [
                        "2月",
                        "5月",
                        "3月",
                        "4月"
                    ],
                    "answerIndex": 3,
                    "explanation": "4月 is しがつ, an irregular reading."
                },
                {
                    "prompt": "What order do Japanese dates follow?",
                    "options": [
                        "Day → Month → Year",
                        "There is no fixed order",
                        "Month → Day → Year",
                        "Year → Month → Day"
                    ],
                    "answerIndex": 3,
                    "explanation": "Japanese dates go from the biggest unit (year) to the smallest (day)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "How do you say 'the 20th'?",
                    "options": [
                        "にじゅうにち (9.1)",
                        "はつか (9.2)",
                        "はつたち (9.3)",
                        "にじゅうか (9.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "The 20th has the special irregular reading はつか."
                },
                {
                    "prompt": "How do you ask 'What's today's date?'",
                    "options": [
                        "今日は何曜日ですか。",
                        "今日は何月何日ですか。",
                        "これは何ですか。",
                        "今何時ですか。"
                    ],
                    "answerIndex": 1,
                    "explanation": "何月何日ですか asks for month and day."
                },
                {
                    "prompt": "Why are the 1st–10th day-of-month readings considered especially hard?",
                    "options": [
                        "They follow the regular number system perfectly",
                        "They have unique native readings that do not follow the number system",
                        "They are identical to the hour readings",
                        "They are never used in modern Japanese"
                    ],
                    "answerIndex": 1,
                    "explanation": "Days 1–10 have irregular, memorized readings distinct from regular counting."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "How do you say 'July'? (irregular)",
                    "options": [
                        "しちがつ",
                        "ななつき",
                        "なながつ",
                        "しつき"
                    ],
                    "answerIndex": 0,
                    "explanation": "7月 = しちがつ, an irregular reading."
                },
                {
                    "prompt": "How do you say 'the 3rd' of the month?",
                    "options": [
                        "さんにち",
                        "みっつ",
                        "さんがつ",
                        "みっか"
                    ],
                    "answerIndex": 3,
                    "explanation": "三日 = みっか, an irregular reading."
                },
                {
                    "prompt": "What does 何月何日ですか ask for?",
                    "options": [
                        "The time",
                        "The day of the week",
                        "The month and day",
                        "The year only"
                    ],
                    "answerIndex": 2,
                    "explanation": "It asks for both month and day."
                },
                {
                    "prompt": "What order do Japanese dates follow?",
                    "options": [
                        "Month, Day, Year",
                        "Year, Month, Day",
                        "Day, Month, Year",
                        "Random order"
                    ],
                    "answerIndex": 1,
                    "explanation": "Year comes first, then month, then day."
                },
                {
                    "prompt": "How do you say 'September'? (irregular)",
                    "options": [
                        "くがつ",
                        "ここのがつ",
                        "きゅうがつ",
                        "きゅうつき"
                    ],
                    "answerIndex": 0,
                    "explanation": "9月 = くがつ, an irregular reading."
                },
                {
                    "prompt": "How do you say 'the 10th' of the month?",
                    "options": [
                        "じゅうにち",
                        "じゅうか",
                        "とおにち",
                        "とおか"
                    ],
                    "answerIndex": 3,
                    "explanation": "十日 = とおか, an irregular reading."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u2-l5": {
        "id": "ja-u2-l5",
        "unit": "ja-u2",
        "level": "A1",
        "objective": "Combine numbers, time, days of the week, and dates to describe a simple personal schedule.",
        "prerequisites": [
            "ja-u2-l1",
            "ja-u2-l2",
            "ja-u2-l3",
            "ja-u2-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u2-l1",
                "ja-u2-l2",
                "ja-u2-l3",
                "ja-u2-l4"
            ]
        },
        "presentation": {
            "explanation": "This capstone lesson combines every counter system from Unit 2 — numbers, hours/minutes, days of the week, and dates — into full schedule sentences, the kind you'd actually use to plan a meeting or describe a class timetable. A complete schedule statement typically stacks day + time + activity: 月曜日の九時に会議があります (Getsuyoubi no kuji ni kaigi ga arimasu, 'There is a meeting on Monday at 9 o'clock'), using の to link the day to a following noun phrase and に to mark the specific point in time an event occurs — the same に that will be formally introduced as the time particle in Unit 4, but natural to preview here since schedule sentences don't work without it. Being able to fluidly state 'what, when, on which day' in one breath is the actual payoff of memorizing all those irregular readings from the last four lessons.",
            "examples": [
                {
                    "target": "月曜日の九時に会議があります。",
                    "reading": "Getsuyoubi no kuji ni kaigi ga arimasu.",
                    "translation": "There is a meeting on Monday at 9 o'clock."
                },
                {
                    "target": "木曜日は忙しいです。",
                    "reading": "Mokuyoubi wa isogashii desu.",
                    "translation": "Thursday is busy."
                },
                {
                    "target": "今日は五月三日です。",
                    "reading": "Kyou wa gogatsu mikka desu.",
                    "translation": "Today is May 3rd."
                },
                {
                    "target": "土曜日の三時半に友達に会います。",
                    "reading": "Doyoubi no sanji han ni tomodachi ni aimasu.",
                    "translation": "I'll meet a friend on Saturday at 3:30."
                }
            ],
            "mnemonics": [
                "Schedule sentences stack like building blocks: [day]の[time]に[event]があります — day links to time with の, and に pins down exactly when."
            ],
            "culturalNotes": [
                "This day+time+に pattern previews the time particle に formally covered in Unit 4 — seeing it in context here first, before the rule is spelled out, mirrors how learners often absorb grammar naturally before they can explain it."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Fill in: 月曜日___九時___会議があります。 (There is a meeting on Monday at 9.)",
                    "options": [
                        "は／に (10.1)",
                        "の／に (10.2)",
                        "を／で (10.3)",
                        "が／の (10.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "の links day to time; に marks the specific time."
                },
                {
                    "prompt": "Translate: 'Today is May 3rd.'",
                    "options": [
                        "今日は五月三日です。",
                        "今日は三月五日です。",
                        "五月は今日三日です。",
                        "今日は五日三月です。"
                    ],
                    "answerIndex": 0,
                    "explanation": "五月 (May) precedes 三日 (3rd), matching month-then-day order."
                },
                {
                    "prompt": "Which particle marks the specific point in time an event occurs?",
                    "options": [
                        "は",
                        "に",
                        "を",
                        "も"
                    ],
                    "answerIndex": 1,
                    "explanation": "に pins down a specific time."
                },
                {
                    "prompt": "Translate: 'Thursday is busy.'",
                    "options": [
                        "木曜日に忙しいです。",
                        "木曜日は忙しいです。",
                        "忙しい木曜日です。",
                        "木曜日を忙しいです。"
                    ],
                    "answerIndex": 1,
                    "explanation": "は topic-marks the day, followed by 忙しいです."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: 'I'll meet a friend on Saturday at 3:30.'",
                    "options": [
                        "土曜日の三時半に友達に会います。 (10.1)",
                        "三時半の土曜日に友達があります。 (10.2)",
                        "友達は土曜日三時半です。 (10.3)",
                        "土曜日は三時半友達会います。 (10.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "Day の time に friend に会います is the natural full pattern."
                },
                {
                    "prompt": "What does の do in 月曜日の九時?",
                    "options": [
                        "Marks the object",
                        "Negates the sentence",
                        "Asks a question",
                        "Links the day to the following time phrase"
                    ],
                    "answerIndex": 3,
                    "explanation": "の connects 月曜日 (Monday) to 九時 (9 o'clock) as one linked phrase."
                },
                {
                    "prompt": "Which is the correct order of elements in a full schedule sentence?",
                    "options": [
                        "Event → Time → Day",
                        "Order is irrelevant in Japanese",
                        "Day → Time → Event",
                        "Time → Event → Day"
                    ],
                    "answerIndex": 2,
                    "explanation": "Japanese schedule sentences typically go day → time → event."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: 'There is a meeting on Monday at 9 o'clock.'",
                    "options": [
                        "九時の月曜日に会議です。",
                        "会議は月曜日九時です。",
                        "月曜日は九時会議があります。",
                        "月曜日の九時に会議があります。"
                    ],
                    "answerIndex": 3,
                    "explanation": "Day の time に event があります is the natural pattern."
                },
                {
                    "prompt": "Which particle links a day to a following time phrase (like 月曜日の九時)?",
                    "options": [
                        "に",
                        "を",
                        "の",
                        "は"
                    ],
                    "answerIndex": 2,
                    "explanation": "の links 月曜日 and 九時 into one phrase."
                },
                {
                    "prompt": "Which particle marks the specific time an event happens?",
                    "options": [
                        "が",
                        "に",
                        "も",
                        "は"
                    ],
                    "answerIndex": 1,
                    "explanation": "に marks the specific point in time."
                },
                {
                    "prompt": "Translate: 'Today is May 3rd.'",
                    "options": [
                        "今日は五月三日です。",
                        "五月三日は今日ですか。",
                        "三月五日は今日です。",
                        "今日は三日五月です。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Month then day: 五月三日."
                },
                {
                    "prompt": "In 土曜日の三時半に友達に会います, what does 半 indicate?",
                    "options": [
                        "A quarter hour",
                        "Midnight",
                        "A full day",
                        "Half past (the 30-minute mark)"
                    ],
                    "answerIndex": 3,
                    "explanation": "半 = half, i.e. :30."
                },
                {
                    "prompt": "What is the overall structural pattern this lesson teaches for a schedule sentence?",
                    "options": [
                        "There is no consistent structure",
                        "[time]は[event]の[day]です",
                        "[day]の[time]に[event]があります",
                        "[event]の[day]に[time]があります"
                    ],
                    "answerIndex": 2,
                    "explanation": "Day の time に event があります is the pattern drilled throughout this lesson."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u3-l1": {
        "id": "ja-u3-l1",
        "unit": "ja-u3",
        "level": "A1",
        "objective": "Name immediate family members using the correct in-group (own family) vocabulary set.",
        "prerequisites": [
            "ja-u2-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u1-l2",
                "ja-u1-l3"
            ]
        },
        "presentation": {
            "explanation": "Japanese has two separate vocabulary sets for every family member, depending on whether you're talking about your OWN family (in-group, humble) or someone ELSE's family (out-group, respectful). This lesson covers the in-group set, used when you refer to your own relatives while speaking with someone outside your family: 父 (ちち, my father), 母 (はは, my mother), 兄 (あに, my older brother), 姉 (あね, my older sister), 弟 (おとうと, my younger brother), 妹 (いもうと, my younger sister). Notice Japanese distinguishes older vs. younger siblings with completely different words — there's no single word for 'brother' or 'sister' the way English has one. These in-group words are deliberately plain/humble because Japanese politeness works by lowering references to your own group while raising references to others' — the out-group set (お父さん, お母さん, etc.) is covered in the next lesson and used for other people's families.",
            "examples": [
                {
                    "target": "父",
                    "reading": "chichi",
                    "translation": "my father"
                },
                {
                    "target": "母",
                    "reading": "haha",
                    "translation": "my mother"
                },
                {
                    "target": "兄",
                    "reading": "ani",
                    "translation": "my older brother"
                },
                {
                    "target": "姉",
                    "reading": "ane",
                    "translation": "my older sister"
                },
                {
                    "target": "弟",
                    "reading": "otouto",
                    "translation": "my younger brother"
                },
                {
                    "target": "妹",
                    "reading": "imouto",
                    "translation": "my younger sister"
                },
                {
                    "target": "わたしの父は先生です。",
                    "reading": "Watashi no chichi wa sensei desu.",
                    "translation": "My father is a teacher."
                }
            ],
            "mnemonics": [
                "Japanese never has one word for 'sibling' — it always splits by both gender AND relative age (older/younger), because that hierarchy matters socially.",
                "の (possessive particle from Unit 1) links わたし to 父: わたしの父 = 'my father,' the same の pattern used for any possession."
            ],
            "culturalNotes": [
                "Using the plain in-group words (父, 母, 兄, 姉) for your OWN family while using someone else's honorific version for THEIRS is a core, non-negotiable politeness rule — using お父さん for your own dad while talking to an outsider would sound oddly self-important."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you say 'my father'?",
                    "options": [
                        "父 (11.1)",
                        "兄 (11.2)",
                        "姉 (11.3)",
                        "母 (11.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "父 (ちち) = my father."
                },
                {
                    "prompt": "How do you say 'my older sister'?",
                    "options": [
                        "弟",
                        "母",
                        "妹",
                        "姉"
                    ],
                    "answerIndex": 3,
                    "explanation": "姉 (あね) = my older sister."
                },
                {
                    "prompt": "Which word means 'my younger brother'?",
                    "options": [
                        "姉",
                        "兄",
                        "妹",
                        "弟"
                    ],
                    "answerIndex": 3,
                    "explanation": "弟 (おとうと) = my younger brother."
                },
                {
                    "prompt": "Translate: 'My mother is a teacher.'",
                    "options": [
                        "母はわたしです。",
                        "わたしの母は先生です。",
                        "わたしは母の先生です。",
                        "わたしの父は先生です。"
                    ],
                    "answerIndex": 1,
                    "explanation": "わたしの母 = my mother, followed by は先生です."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "How do you say 'my younger sister'?",
                    "options": [
                        "妹 (11.1)",
                        "兄 (11.2)",
                        "母 (11.3)",
                        "姉 (11.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "妹 (いもうと) = my younger sister."
                },
                {
                    "prompt": "Why doesn't Japanese have one single word for 'brother'?",
                    "options": [
                        "Because gender is not marked in Japanese",
                        "Because 兄 and 弟 are synonyms",
                        "Because Japanese has no word for siblings at all",
                        "Because it distinguishes older vs. younger siblings as separate words"
                    ],
                    "answerIndex": 3,
                    "explanation": "Relative age is baked into the vocabulary itself."
                },
                {
                    "prompt": "Which particle links わたし to 父 in わたしの父 (my father)?",
                    "options": [
                        "の",
                        "は",
                        "を",
                        "が"
                    ],
                    "answerIndex": 0,
                    "explanation": "の is the possessive particle from Unit 1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "How do you say 'my older brother'?",
                    "options": [
                        "妹",
                        "姉",
                        "兄",
                        "弟"
                    ],
                    "answerIndex": 2,
                    "explanation": "兄 (あに) = my older brother."
                },
                {
                    "prompt": "How do you say 'my mother'?",
                    "options": [
                        "兄",
                        "母",
                        "父",
                        "姉"
                    ],
                    "answerIndex": 1,
                    "explanation": "母 (はは) = my mother."
                },
                {
                    "prompt": "What distinguishes 兄/弟 from each other?",
                    "options": [
                        "Relative age (older vs. younger)",
                        "Formality level",
                        "Gender",
                        "Nothing, they are synonyms"
                    ],
                    "answerIndex": 0,
                    "explanation": "兄 = older brother, 弟 = younger brother."
                },
                {
                    "prompt": "When are the plain in-group words (父, 母, 兄, 姉...) used?",
                    "options": [
                        "Only in writing",
                        "When talking about anyone's family",
                        "Only when angry",
                        "When talking about your OWN family to an outsider"
                    ],
                    "answerIndex": 3,
                    "explanation": "In-group words humbly refer to your own family."
                },
                {
                    "prompt": "Translate: 'My father is a teacher.'",
                    "options": [
                        "父はわたしです。",
                        "わたしの母は先生です。",
                        "わたしの父は先生です。",
                        "わたしは父の先生です。"
                    ],
                    "answerIndex": 2,
                    "explanation": "わたしの父 (my father) は先生です (is a teacher)."
                },
                {
                    "prompt": "How do you say 'my younger brother'?",
                    "options": [
                        "妹",
                        "弟",
                        "姉",
                        "兄"
                    ],
                    "answerIndex": 1,
                    "explanation": "弟 (おとうと) = my younger brother."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u3-l2": {
        "id": "ja-u3-l2",
        "unit": "ja-u3",
        "level": "A1",
        "objective": "Talk about someone else's family members using the correct out-group (respectful) vocabulary set.",
        "prerequisites": [
            "ja-u3-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u3-l1"
            ]
        },
        "presentation": {
            "explanation": "Every family word from Lesson 1 has a matching honorific version used when talking about someone ELSE's family (or addressing/referring to a family member directly, even your own, within the family): お父さん (someone's father), お母さん (someone's mother), お兄さん (someone's older brother), お姉さん (someone's older sister), 弟さん (someone's younger brother), 妹さん (someone's younger sister). The pattern is fairly consistent: お + [word] + さん for parents and older siblings, and just [word] + さん for younger siblings (お弟さん is not used). This out-group set is also what children use to address their own parents directly (calling your own mother お母さん to her face is completely normal — the in-group/out-group split applies to talking ABOUT your family to outsiders, not to how you address family members within the household).",
            "examples": [
                {
                    "target": "お父さん",
                    "reading": "otousan",
                    "translation": "(someone's) father / used to address one's own father"
                },
                {
                    "target": "お母さん",
                    "reading": "okaasan",
                    "translation": "(someone's) mother / used to address one's own mother"
                },
                {
                    "target": "お兄さん",
                    "reading": "oniisan",
                    "translation": "(someone's) older brother"
                },
                {
                    "target": "お姉さん",
                    "reading": "oneesan",
                    "translation": "(someone's) older sister"
                },
                {
                    "target": "弟さん",
                    "reading": "otoutosan",
                    "translation": "(someone's) younger brother"
                },
                {
                    "target": "田中さんのお父さんは医者です。",
                    "reading": "Tanaka-san no otousan wa isha desu.",
                    "translation": "Mr. Tanaka's father is a doctor."
                }
            ],
            "mnemonics": [
                "お...さん = 'honorable ___' — the same お prefix and さん suffix that show up throughout polite Japanese, bookending the plain word from Lesson 1.",
                "You call your OWN mom お母さん to her face, but call her 母 when describing her to someone outside the family — same person, different register depending on the audience."
            ],
            "culturalNotes": [
                "This out-group/in-group distinction extends beyond family to many workplace and social relationships in Japanese — it is one of the most foundational politeness structures in the language, not just a family quirk."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you refer to someone else's father?",
                    "options": [
                        "父 (12.1)",
                        "お父さん (12.2)",
                        "お兄さん (12.3)",
                        "兄 (12.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "お父さん is the out-group/respectful form."
                },
                {
                    "prompt": "How do you refer to someone else's older sister?",
                    "options": [
                        "姉",
                        "お姉さん",
                        "妹さん",
                        "妹"
                    ],
                    "answerIndex": 1,
                    "explanation": "お姉さん is the respectful form for someone else's older sister."
                },
                {
                    "prompt": "How would you address your OWN mother directly, face to face?",
                    "options": [
                        "母",
                        "お母さん",
                        "Neither — you never say her name",
                        "はは"
                    ],
                    "answerIndex": 1,
                    "explanation": "お母さん is used to address one's own mother directly, unlike the plain 母 used when describing her to outsiders."
                },
                {
                    "prompt": "What is the general pattern for forming the out-group term from the in-group word?",
                    "options": [
                        "Add です",
                        "Add お...さん (or just さん for younger siblings)",
                        "Reverse the word",
                        "No pattern exists"
                    ],
                    "answerIndex": 1,
                    "explanation": "お + word + さん (or word + さん for younger siblings)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: 'Mr. Tanaka's father is a doctor.'",
                    "options": [
                        "田中さんの父は医者です。 (12.1)",
                        "お父さんは田中さんです。 (12.2)",
                        "田中さんはお父さんの医者です。 (12.3)",
                        "田中さんのお父さんは医者です。 (12.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "Since it's someone else's father, the respectful お父さん is required."
                },
                {
                    "prompt": "Which younger-sibling term does NOT take the お prefix?",
                    "options": [
                        "お姉さん",
                        "弟さん",
                        "お父さん",
                        "お兄さん"
                    ],
                    "answerIndex": 1,
                    "explanation": "弟さん uses only さん, without お."
                },
                {
                    "prompt": "Why would お父さん sound odd if used to describe YOUR OWN father to an outsider?",
                    "options": [
                        "It would sound like you are being overly self-important, raising your own family unnecessarily",
                        "It only refers to fathers who are doctors",
                        "It has no issue — it is perfectly fine",
                        "It is grammatically incorrect"
                    ],
                    "answerIndex": 0,
                    "explanation": "Using the respectful form for your own family when speaking to an outsider breaks the humble in-group/respectful out-group rule."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "How do you refer to someone else's mother?",
                    "options": [
                        "姉",
                        "お母さん",
                        "お姉さん",
                        "母"
                    ],
                    "answerIndex": 1,
                    "explanation": "お母さん = someone else's mother."
                },
                {
                    "prompt": "How do you refer to someone else's older brother?",
                    "options": [
                        "お兄さん",
                        "弟",
                        "弟さん",
                        "兄"
                    ],
                    "answerIndex": 0,
                    "explanation": "お兄さん = someone else's older brother."
                },
                {
                    "prompt": "When would you use お母さん for your OWN mother?",
                    "options": [
                        "Never",
                        "Only in writing",
                        "Only if she is a teacher",
                        "When addressing her directly, face to face, within the family"
                    ],
                    "answerIndex": 3,
                    "explanation": "The out-group form is used to address one's own family members directly."
                },
                {
                    "prompt": "What does this in-group/out-group vocabulary split reveal about Japanese politeness?",
                    "options": [
                        "It only applies to family words and nothing else",
                        "It applies only to written Japanese",
                        "It reflects a broader pattern of humbling one's own group while respecting others', seen throughout the language",
                        "It is a random historical accident with no pattern"
                    ],
                    "answerIndex": 2,
                    "explanation": "This structure extends well beyond family vocabulary into broader Japanese social language."
                },
                {
                    "prompt": "Translate: 'Mr. Tanaka's father is a doctor.'",
                    "options": [
                        "お父さんは医者の田中さんです。",
                        "田中さんのお父さんは医者です。",
                        "田中さんの父は医者です。",
                        "医者は田中さんです。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Someone else's father requires お父さん."
                },
                {
                    "prompt": "How do you refer to someone else's younger brother?",
                    "options": [
                        "弟さん",
                        "兄さん",
                        "弟",
                        "お弟さん"
                    ],
                    "answerIndex": 0,
                    "explanation": "弟さん, without the お prefix, is the correct out-group form."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u3-l3": {
        "id": "ja-u3-l3",
        "unit": "ja-u3",
        "level": "A1",
        "objective": "Express possession and relationships between people and things using the の particle.",
        "prerequisites": [
            "ja-u3-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u3-l1",
                "ja-u3-l2"
            ]
        },
        "presentation": {
            "explanation": "の is a small but extremely versatile particle: placed between two nouns, it links them the way English 'of' or an apostrophe-s does, but always in the reverse order — [owner]の[thing owned]. わたしの本 is literally 'me's book,' i.e. 'my book.' The same structure extends beyond simple possession to descriptive relationships: 日本の車 (a Japanese car, literally 'Japan's car'), 大学の先生 (a university professor, literally 'university's teacher'). Multiple の's can chain together: 田中さんのお父さんの車 (Mr. Tanaka's father's car) — each の links the noun immediately before it to the noun immediately after, working right-to-left just like English possessive chains. This is the same の already used informally in Unit 1 and Unit 2 (わたしの父, 月曜日の九時) — this lesson makes the general pattern explicit.",
            "examples": [
                {
                    "target": "わたしの本",
                    "reading": "watashi no hon",
                    "translation": "my book"
                },
                {
                    "target": "日本の車",
                    "reading": "Nihon no kuruma",
                    "translation": "a Japanese car"
                },
                {
                    "target": "大学の先生",
                    "reading": "daigaku no sensei",
                    "translation": "a university professor"
                },
                {
                    "target": "田中さんのお父さんの車",
                    "reading": "Tanaka-san no otousan no kuruma",
                    "translation": "Mr. Tanaka's father's car"
                },
                {
                    "target": "これはわたしの本です。",
                    "reading": "Kore wa watashi no hon desu.",
                    "translation": "This is my book."
                }
            ],
            "mnemonics": [
                "の flips English word order: 'Tanaka's father' becomes 田中さんの父 — [owner] comes first, then の, then [thing].",
                "Chain multiple の's like a possessive relay: A の B の C = 'A's B's C,' read left to right exactly as written."
            ],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Translate: 'my book'",
                    "options": [
                        "わたしの本 (13.1)",
                        "わたし本の (13.2)",
                        "本わたしの (13.3)",
                        "本のわたし (13.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "[owner]の[thing] = わたしの本."
                },
                {
                    "prompt": "Translate: 'a Japanese car'",
                    "options": [
                        "日本の車",
                        "日本車の",
                        "車日本の",
                        "車の日本"
                    ],
                    "answerIndex": 0,
                    "explanation": "日本の車 = Japan's car."
                },
                {
                    "prompt": "What English structure does の most closely correspond to?",
                    "options": [
                        "possessive 's / of",
                        "'but'",
                        "A question marker",
                        "'and'"
                    ],
                    "answerIndex": 0,
                    "explanation": "の functions like English possessive 's or \"of.\""
                },
                {
                    "prompt": "Translate: 'This is my book.'",
                    "options": [
                        "わたしはこれの本です。",
                        "本はこれのわたしです。",
                        "これのわたしは本です。",
                        "これはわたしの本です。"
                    ],
                    "answerIndex": 3,
                    "explanation": "これは (topic) わたしの本 (my book) です."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: 'Mr. Tanaka's father's car'",
                    "options": [
                        "田中さんのお父さんの車 (13.1)",
                        "車の田中さんのお父さん (13.2)",
                        "田中さんお父さんの車の (13.3)",
                        "車田中さんのお父さんの (13.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "Chained の's work left to right: Tanaka's → father's → car."
                },
                {
                    "prompt": "Translate: 'a university professor'",
                    "options": [
                        "先生の大学",
                        "大学の先生",
                        "大学先生の",
                        "先生大学の"
                    ],
                    "answerIndex": 1,
                    "explanation": "大学の先生 = university's teacher/professor."
                },
                {
                    "prompt": "In A の B の C, which noun is the ultimate 'thing' being described?",
                    "options": [
                        "A",
                        "B",
                        "C",
                        "None — の has no directionality"
                    ],
                    "answerIndex": 2,
                    "explanation": "The final noun C is what's being described/owned, working right-to-left through the chain of の."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: 'my father'",
                    "options": [
                        "わたしの父",
                        "父わたしの",
                        "父のわたし",
                        "わたし父の"
                    ],
                    "answerIndex": 0,
                    "explanation": "わたしの父 = my father."
                },
                {
                    "prompt": "Which particle links two nouns in a possessive/descriptive relationship?",
                    "options": [
                        "は",
                        "が",
                        "を",
                        "の"
                    ],
                    "answerIndex": 3,
                    "explanation": "の is the linking/possessive particle."
                },
                {
                    "prompt": "Translate: 'a Japanese car'",
                    "options": [
                        "車日本",
                        "車の日本",
                        "日本の車",
                        "日本車"
                    ],
                    "answerIndex": 2,
                    "explanation": "日本の車 = Japan's car."
                },
                {
                    "prompt": "Translate: 'Mr. Tanaka's father's car'",
                    "options": [
                        "車のお父さんの田中さん",
                        "田中さんのお父さんの車",
                        "お父さんの田中さんの車",
                        "田中さんの車のお父さん"
                    ],
                    "answerIndex": 1,
                    "explanation": "Chain reads left-to-right: Tanaka's → father's → car."
                },
                {
                    "prompt": "What is the word order rule for の?",
                    "options": [
                        "[owner]の[thing owned]",
                        "[thing owned]の[owner]",
                        "Order does not matter",
                        "の always goes at the end of the sentence"
                    ],
                    "answerIndex": 0,
                    "explanation": "Owner comes first, then の, then the thing owned."
                },
                {
                    "prompt": "Translate: 'This is my book.'",
                    "options": [
                        "これの本はわたしです。",
                        "わたしはこれ本です。",
                        "本はこれです。",
                        "これはわたしの本です。"
                    ],
                    "answerIndex": 3,
                    "explanation": "これは わたしの本 です correctly states identity/possession."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u3-l4": {
        "id": "ja-u3-l4",
        "unit": "ja-u3",
        "level": "A1",
        "objective": "Describe existence and location of people/animals versus objects using います and あります.",
        "prerequisites": [
            "ja-u3-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u3-l3"
            ]
        },
        "presentation": {
            "explanation": "Japanese has two different verbs for 'there is/are,' split by animacy — a distinction English doesn't make. います is used for animate things that can move on their own: people and animals. あります is used for inanimate things: objects, plants, and abstract things like events. わたしの父は東京にいます (My father is in Tokyo — using います because 父 is a person) versus わたしの本はここにあります (My book is here — using あります because 本 is an object). This pairs directly with the family vocabulary from this unit: 兄弟がいます (I have siblings, literally 'siblings exist') versus 兄弟がいません (I don't have siblings). Note が (not は) is typically used with います/あります when introducing the existence of something for the first time, similar to how Spanish hay pairs with indefinite subjects — a small preview of a pattern you'll see recur across languages.",
            "examples": [
                {
                    "target": "わたしの父は東京にいます。",
                    "reading": "Watashi no chichi wa Tokyo ni imasu.",
                    "translation": "My father is in Tokyo."
                },
                {
                    "target": "わたしの本はここにあります。",
                    "reading": "Watashi no hon wa koko ni arimasu.",
                    "translation": "My book is here."
                },
                {
                    "target": "兄弟がいます。",
                    "reading": "Kyoudai ga imasu.",
                    "translation": "I have siblings. (siblings exist)"
                },
                {
                    "target": "兄弟がいません。",
                    "reading": "Kyoudai ga imasen.",
                    "translation": "I don't have siblings."
                },
                {
                    "target": "猫が三匹います。",
                    "reading": "Neko ga sanbiki imasu.",
                    "translation": "There are three cats."
                }
            ],
            "mnemonics": [
                "います = alIVe things (people/animals) — both start with a similar sound to help you remember 'i' for 'living.'",
                "あります = objects, like a shelf holding items — inanimate things that can't move themselves."
            ],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "わたしの父は東京に___。 (My father is in Tokyo.)",
                    "options": [
                        "います (14.1)",
                        "です (14.2)",
                        "いません (14.3)",
                        "あります (14.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "父 is a person → います."
                },
                {
                    "prompt": "わたしの本はここに___。 (My book is here.)",
                    "options": [
                        "います",
                        "いません",
                        "ありません",
                        "あります"
                    ],
                    "answerIndex": 3,
                    "explanation": "本 is an object → あります."
                },
                {
                    "prompt": "Which verb is used for animals?",
                    "options": [
                        "あります",
                        "ではありません",
                        "います",
                        "です"
                    ],
                    "answerIndex": 2,
                    "explanation": "Animals are animate → います."
                },
                {
                    "prompt": "Translate: 'I have siblings.'",
                    "options": [
                        "兄弟があります。",
                        "兄弟のいます。",
                        "兄弟がいます。",
                        "兄弟はいます。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Siblings are people → が...います, using が to introduce existence."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: 'I don't have siblings.'",
                    "options": [
                        "兄弟がいません。 (14.1)",
                        "兄弟のいません。 (14.2)",
                        "兄弟がありません。 (14.3)",
                        "兄弟はいます。 (14.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "いません negates います for people."
                },
                {
                    "prompt": "Which verb correctly completes: 猫が三匹___。 (There are three cats.)",
                    "options": [
                        "あります",
                        "います",
                        "ではありません",
                        "です"
                    ],
                    "answerIndex": 1,
                    "explanation": "Cats are animate → います."
                },
                {
                    "prompt": "What determines whether います or あります is used?",
                    "options": [
                        "Whether the noun is a question",
                        "Animacy — living/moving things use います, objects use あります",
                        "Sentence length",
                        "Formality level"
                    ],
                    "answerIndex": 1,
                    "explanation": "The choice is entirely based on animacy."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "わたしの母は大阪に___。 (My mother is in Osaka.)",
                    "options": [
                        "ありません",
                        "あります",
                        "です",
                        "います"
                    ],
                    "answerIndex": 3,
                    "explanation": "母 is a person → います."
                },
                {
                    "prompt": "つくえの上に本が___。 (There is a book on the desk.)",
                    "options": [
                        "います",
                        "いません",
                        "あります",
                        "ではありません"
                    ],
                    "answerIndex": 2,
                    "explanation": "本 is an object → あります."
                },
                {
                    "prompt": "Which verb negation means 'there isn't/aren't' for objects?",
                    "options": [
                        "いません",
                        "ありません",
                        "じゃありません",
                        "ではいません"
                    ],
                    "answerIndex": 1,
                    "explanation": "ありません negates あります for inanimate things."
                },
                {
                    "prompt": "Translate: 'I have siblings.'",
                    "options": [
                        "兄弟がいます。",
                        "兄弟があります。",
                        "兄弟はあります。",
                        "兄弟のいます。"
                    ],
                    "answerIndex": 0,
                    "explanation": "People/siblings use が...います."
                },
                {
                    "prompt": "Which particle typically introduces the existence of something for the first time with います/あります?",
                    "options": [
                        "に",
                        "を",
                        "は",
                        "が"
                    ],
                    "answerIndex": 3,
                    "explanation": "が commonly marks the newly introduced subject with existence verbs."
                },
                {
                    "prompt": "Which category correctly uses います?",
                    "options": [
                        "Weather",
                        "Abstract concepts only",
                        "People and animals",
                        "Books and objects"
                    ],
                    "answerIndex": 2,
                    "explanation": "います is for animate beings: people and animals."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u3-l5": {
        "id": "ja-u3-l5",
        "unit": "ja-u3",
        "level": "A1",
        "objective": "Describe your own family in a short connected passage, combining vocabulary, の possession, and います/あります.",
        "prerequisites": [
            "ja-u3-l1",
            "ja-u3-l2",
            "ja-u3-l3",
            "ja-u3-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u3-l1",
                "ja-u3-l2",
                "ja-u3-l3",
                "ja-u3-l4"
            ]
        },
        "presentation": {
            "explanation": "This capstone lesson combines everything from Unit 3 into a short connected family description — the kind of passage you might write in a self-introduction essay or say aloud when meeting a new host family. It threads in-group vocabulary (父, 母, 兄, 妹...), the の possessive/descriptive particle, and います for describing family existence, plus reuses は...です identity statements and job vocabulary from earlier units. A natural flow moves from stating who exists in the family, to what they do, to a small detail about one of them — mirroring how a real self-introduction naturally expands outward from bare facts into a bit of personality.",
            "examples": [
                {
                    "target": "わたしの家族は四人です。",
                    "reading": "Watashi no kazoku wa yonin desu.",
                    "translation": "My family is four people. (There are four people in my family.)"
                },
                {
                    "target": "父と母と姉がいます。",
                    "reading": "Chichi to haha to ane ga imasu.",
                    "translation": "I have a father, a mother, and an older sister."
                },
                {
                    "target": "父は会社員です。母は先生です。",
                    "reading": "Chichi wa kaishain desu. Haha wa sensei desu.",
                    "translation": "My father is a company employee. My mother is a teacher."
                },
                {
                    "target": "姉の名前はゆきです。",
                    "reading": "Ane no namae wa Yuki desu.",
                    "translation": "My older sister's name is Yuki."
                }
            ],
            "mnemonics": [
                "と means 'and' between nouns (父と母と姉 = father and mother and older sister) — a new small connector worth noting alongside の."
            ],
            "culturalNotes": [
                "家族 (かぞく, \"family\") counts people with 人 (にん) — 四人 = four people — the same counter system used generally for counting people, not specific to family."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Translate: 'My family is four people.'",
                    "options": [
                        "わたしの家族は四人です。 (15.1)",
                        "わたしは家族の四人です。 (15.2)",
                        "四人はわたしの家族です。 (15.3)",
                        "家族はわたしの四人です。 (15.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "わたしの家族 (my family) は四人です (is four people)."
                },
                {
                    "prompt": "Which particle means 'and' between nouns, as in 父と母と姉?",
                    "options": [
                        "の",
                        "は",
                        "と",
                        "が"
                    ],
                    "answerIndex": 2,
                    "explanation": "と connects nouns in a list, meaning \"and.\""
                },
                {
                    "prompt": "Translate: 'I have a father, a mother, and an older sister.'",
                    "options": [
                        "父と母と姉がいます。",
                        "父と母と姉があります。",
                        "父と母と姉はです。",
                        "父母姉のいます。"
                    ],
                    "answerIndex": 0,
                    "explanation": "People connected with と, then が...います for existence."
                },
                {
                    "prompt": "Translate: 'My older sister's name is Yuki.'",
                    "options": [
                        "ゆきの名前は姉です。",
                        "姉の名前はゆきです。",
                        "姉はゆきの名前です。",
                        "名前は姉のゆきです。"
                    ],
                    "answerIndex": 1,
                    "explanation": "姉の名前 (older sister's name) は ゆきです."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: 'My father is a company employee. My mother is a teacher.'",
                    "options": [
                        "父と母は会社員と先生です。 (15.1)",
                        "父は会社員です。母は先生です。 (15.2)",
                        "会社員は父です。先生は母です。 (15.3)",
                        "父は先生です。母は会社員です。 (15.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "Two separate は...です statements, matching each parent to their job."
                },
                {
                    "prompt": "What counter follows numbers when counting people, as in 四人?",
                    "options": [
                        "匹",
                        "本",
                        "時",
                        "人"
                    ],
                    "answerIndex": 3,
                    "explanation": "人 (にん) is the people counter."
                },
                {
                    "prompt": "Why does this capstone lesson combine の, います, と, and は...です rather than drilling just one?",
                    "options": [
                        "Because real descriptions naturally combine multiple grammar points at once, not one at a time",
                        "Because と replaces the need for は",
                        "There is no particular reason",
                        "Because の and います cannot be used separately"
                    ],
                    "answerIndex": 0,
                    "explanation": "Natural language use blends grammar points together, which this capstone reflects."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: 'My family is four people.'",
                    "options": [
                        "家族の四人はわたしです。",
                        "わたしは四人の家族です。",
                        "わたしの家族は四人です。",
                        "四人の家族がわたしです。"
                    ],
                    "answerIndex": 2,
                    "explanation": "わたしの家族は四人です correctly states family size."
                },
                {
                    "prompt": "父と母と姉がいます — what does と do here?",
                    "options": [
                        "Marks the topic",
                        "Connects the listed nouns (\"and\")",
                        "Marks a question",
                        "Negates the sentence"
                    ],
                    "answerIndex": 1,
                    "explanation": "と = \"and,\" linking father, mother, older sister."
                },
                {
                    "prompt": "Translate: 'My older sister's name is Yuki.'",
                    "options": [
                        "姉の名前はゆきです。",
                        "ゆきは姉の名前です名前。",
                        "名前のゆきは姉です。",
                        "姉はゆきです名前。"
                    ],
                    "answerIndex": 0,
                    "explanation": "姉の名前 (older sister's name) は ゆきです."
                },
                {
                    "prompt": "Which verb correctly completes 父と母と姉が___。 (I have a father, mother, and older sister.)",
                    "options": [
                        "あります",
                        "です",
                        "いません",
                        "います"
                    ],
                    "answerIndex": 3,
                    "explanation": "People are animate → います."
                },
                {
                    "prompt": "What counter is used for counting people?",
                    "options": [
                        "匹",
                        "時",
                        "人",
                        "本"
                    ],
                    "answerIndex": 2,
                    "explanation": "人 (にん) counts people, as in 四人 (four people)."
                },
                {
                    "prompt": "Translate: 'My father is a company employee.'",
                    "options": [
                        "会社員は父です。",
                        "父は会社員です。",
                        "父が会社員います。",
                        "父の会社員です。"
                    ],
                    "answerIndex": 1,
                    "explanation": "父は (topic) 会社員です (is a company employee)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u4-l1": {
        "id": "ja-u4-l1",
        "unit": "ja-u4",
        "level": "A1",
        "objective": "Distinguish は (topic) from が (subject) in context, choosing correctly for new information versus known topics.",
        "prerequisites": [
            "ja-u3-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u1-l2",
                "ja-u3-l4"
            ]
        },
        "presentation": {
            "explanation": "Unit 1 introduced は as a general 'topic marker,' but Japanese also has が, which marks the grammatical subject — and choosing between them is one of the most persistent challenges for learners because English 'is/are' gives no hint which to use. The core distinction: は sets up what the sentence is ABOUT (often already known or established), while が highlights WHAT specifically is true, often introducing new information or answering an implicit 'which one?' question. Compare 猫が好きです (Neko ga suki desu, 'I like CATS' — が emphasizes that it's specifically cats, as new/specific information) with 猫は好きです (Neko wa suki desu, 'As for cats, I like them' — は sets cats up as an established topic, perhaps already mentioned). A classic test: が answers a 'who/what' question (誰が来ましたか — Who came? — 田中さんが来ました, Tanaka came, が because it's the answer to 'who'), while は sets a scene for a following comment (田中さんは学生です — as for Tanaka, [he] is a student).",
            "examples": [
                {
                    "target": "猫が好きです。",
                    "reading": "Neko ga suki desu.",
                    "translation": "I like cats. (が — this is the new/specific info)"
                },
                {
                    "target": "猫は好きです。",
                    "reading": "Neko wa suki desu.",
                    "translation": "As for cats, I like them. (は — cats as established topic)"
                },
                {
                    "target": "誰が来ましたか。",
                    "reading": "Dare ga kimashita ka?",
                    "translation": "Who came?"
                },
                {
                    "target": "田中さんが来ました。",
                    "reading": "Tanaka-san ga kimashita.",
                    "translation": "Tanaka came. (が answers \"who\")"
                },
                {
                    "target": "田中さんは学生です。",
                    "reading": "Tanaka-san wa gakusei desu.",
                    "translation": "As for Tanaka, he is a student."
                }
            ],
            "mnemonics": [
                "が answers 'WHICH one/who' questions — it points at the specific answer. は sets the stage and lets the rest of the sentence comment on it.",
                "Think of は as a spotlight on the STAGE (the topic) and が as a spotlight on the ACTOR walking onto it (the specific subject)."
            ],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "誰___来ましたか。 (Who came?)",
                    "options": [
                        "が (16.1)",
                        "を (16.2)",
                        "も (16.3)",
                        "は (16.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "が is used in \"who\" questions, expecting a specific answer."
                },
                {
                    "prompt": "田中さん___来ました。 (answering 'Tanaka came')",
                    "options": [
                        "に",
                        "を",
                        "は",
                        "が"
                    ],
                    "answerIndex": 3,
                    "explanation": "が marks the specific answer to a who-question."
                },
                {
                    "prompt": "田中さん___学生です。 (As for Tanaka, he's a student — setting up a topic)",
                    "options": [
                        "を",
                        "は",
                        "で",
                        "が"
                    ],
                    "answerIndex": 1,
                    "explanation": "は sets Tanaka up as the established topic."
                },
                {
                    "prompt": "猫___好きです。 (I like cats — emphasizing specifically cats)",
                    "options": [
                        "を",
                        "は",
                        "も",
                        "が"
                    ],
                    "answerIndex": 3,
                    "explanation": "が emphasizes the specific thing liked."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Which particle would you use to introduce a new piece of information as the answer to an implicit question?",
                    "options": [
                        "が (16.1)",
                        "を (16.2)",
                        "の (16.3)",
                        "は (16.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "が highlights new/specific information."
                },
                {
                    "prompt": "Which particle would you use to set up a topic that the rest of the sentence will comment on?",
                    "options": [
                        "で",
                        "に",
                        "は",
                        "が"
                    ],
                    "answerIndex": 2,
                    "explanation": "は establishes the topic for ongoing comment."
                },
                {
                    "prompt": "犬___好きですが、猫___好きじゃありません。 (I like dogs, but I don't like cats — contrasting two topics)",
                    "options": [
                        "が／は",
                        "は／が",
                        "が／が",
                        "は／は"
                    ],
                    "answerIndex": 3,
                    "explanation": "は／は sets up two contrasted topics (dogs vs. cats)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "誰___学生ですか。 (Who is a student?)",
                    "options": [
                        "を",
                        "が",
                        "も",
                        "は"
                    ],
                    "answerIndex": 1,
                    "explanation": "が in a who-question seeks a specific answer."
                },
                {
                    "prompt": "わたし___学生です。 (As for me, I am a student — general self-introduction)",
                    "options": [
                        "は",
                        "を",
                        "で",
                        "が"
                    ],
                    "answerIndex": 0,
                    "explanation": "は sets up \"I\" as the topic."
                },
                {
                    "prompt": "これ___本です。 (This is a book — stating これ as the topic)",
                    "options": [
                        "に",
                        "を",
                        "が",
                        "は"
                    ],
                    "answerIndex": 3,
                    "explanation": "は sets これ up as the topic in an identity statement."
                },
                {
                    "prompt": "雨___降っています。 (Rain is falling — の new observed fact)",
                    "options": [
                        "を",
                        "は",
                        "が",
                        "も"
                    ],
                    "answerIndex": 2,
                    "explanation": "が marks rain as the specific subject of a newly noticed event."
                },
                {
                    "prompt": "Which particle typically answers a 'who/which' question directly?",
                    "options": [
                        "を",
                        "が",
                        "に",
                        "は"
                    ],
                    "answerIndex": 1,
                    "explanation": "が provides the specific answer to who/which questions."
                },
                {
                    "prompt": "Which particle is more appropriate for a general self-introduction topic like 'As for me, I am...'?",
                    "options": [
                        "は",
                        "を",
                        "で",
                        "が"
                    ],
                    "answerIndex": 0,
                    "explanation": "は sets up the ongoing topic of the sentence."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u4-l2": {
        "id": "ja-u4-l2",
        "unit": "ja-u4",
        "level": "A1",
        "objective": "Conjugate regular verbs into the polite present-tense ます-form for both affirmative and negative statements.",
        "prerequisites": [
            "ja-u4-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u4-l1"
            ]
        },
        "presentation": {
            "explanation": "The ます-form is the polite present/future tense used in everyday formal-enough speech (with teachers, strangers, coworkers). Its ending changes systematically based on verb type: for る-verbs (like 食べる, たべる, 'to eat'), drop る and add ます: 食べます. For う-verbs (like 飲む, のむ, 'to drink'), change the final u-sound to an i-sound and add ます: 飲みます. Negation replaces ます with ません: 食べません (don't eat), 飲みません (don't drink). Importantly, ます-form covers BOTH present habitual action and future action — Japanese doesn't grammatically distinguish 'I eat' from 'I will eat' the way English does; context (or a time word like 明日, tomorrow) clarifies which is meant. This is the same ます you've already seen throughout Units 1–3 in fixed phrases like お願いします — now you're learning to build it yourself from any verb.",
            "examples": [
                {
                    "target": "食べます。",
                    "reading": "Tabemasu.",
                    "translation": "I eat / I will eat. (る-verb: 食べる → 食べます)"
                },
                {
                    "target": "食べません。",
                    "reading": "Tabemasen.",
                    "translation": "I don't eat / won't eat."
                },
                {
                    "target": "飲みます。",
                    "reading": "Nomimasu.",
                    "translation": "I drink / will drink. (う-verb: 飲む → 飲みます)"
                },
                {
                    "target": "飲みません。",
                    "reading": "Nomimasen.",
                    "translation": "I don't drink / won't drink."
                },
                {
                    "target": "毎日、水を飲みます。",
                    "reading": "Mainichi, mizu o nomimasu.",
                    "translation": "Every day, I drink water."
                }
            ],
            "mnemonics": [
                "る-verbs: just drop る, add ます — the simplest pattern (食べる → 食べます).",
                "ます-form covers present AND future — Japanese doesn't force you to pick, unlike English 'eat' vs. 'will eat.'"
            ],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "食べる → ます-form?",
                    "options": [
                        "食べます (17.1)",
                        "食べります (17.2)",
                        "食べる (17.3)",
                        "食べます (17.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "る-verbs drop る and add ます."
                },
                {
                    "prompt": "How do you negate 飲みます (I drink)?",
                    "options": [
                        "飲みません",
                        "飲みませんでした",
                        "飲まない",
                        "飲みます"
                    ],
                    "answerIndex": 0,
                    "explanation": "ません is the polite present negative ending."
                },
                {
                    "prompt": "Does ます-form distinguish present from future?",
                    "options": [
                        "Yes, always",
                        "No — context clarifies which is meant",
                        "Only in questions",
                        "Only for る-verbs"
                    ],
                    "answerIndex": 1,
                    "explanation": "ます-form covers both; time words or context disambiguate."
                },
                {
                    "prompt": "Translate: 'Every day, I drink water.'",
                    "options": [
                        "毎日、水を飲みます。",
                        "毎日、水が飲みます。",
                        "水は毎日飲みません。",
                        "毎日飲みます水を。"
                    ],
                    "answerIndex": 0,
                    "explanation": "毎日 (every day), 水を (water, object), 飲みます (drink)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What ending replaces ます for the negative form?",
                    "options": [
                        "ませんでした (17.1)",
                        "ないです (17.2)",
                        "じゃありません (17.3)",
                        "ません (17.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "ません is the standard polite present negative."
                },
                {
                    "prompt": "Which verb type does 飲む belong to, given its ます-form is 飲みます (u→i shift)?",
                    "options": [
                        "う-verb",
                        "Irregular verb",
                        "Adjective",
                        "る-verb"
                    ],
                    "answerIndex": 0,
                    "explanation": "The u→i shift before ます is characteristic of う-verbs."
                },
                {
                    "prompt": "Translate: 'I don't eat.'",
                    "options": [
                        "食べません。",
                        "食べるません。",
                        "食べないです。",
                        "食べます。"
                    ],
                    "answerIndex": 0,
                    "explanation": "食べません is the correct polite negative."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "食べる → ?",
                    "options": [
                        "食べます",
                        "食ます",
                        "食べります",
                        "食べる"
                    ],
                    "answerIndex": 0,
                    "explanation": "Drop る, add ます."
                },
                {
                    "prompt": "飲む → ?",
                    "options": [
                        "飲む",
                        "飲るます",
                        "飲みる",
                        "飲みます"
                    ],
                    "answerIndex": 3,
                    "explanation": "u→i shift before ます for う-verbs."
                },
                {
                    "prompt": "Negate 食べます.",
                    "options": [
                        "食べないでした",
                        "食べます",
                        "食べません",
                        "食べませんか"
                    ],
                    "answerIndex": 2,
                    "explanation": "ません is the negative ending."
                },
                {
                    "prompt": "What does ます-form cover, tense-wise?",
                    "options": [
                        "Only present",
                        "Both present and future",
                        "Only future",
                        "Only past"
                    ],
                    "answerIndex": 1,
                    "explanation": "ます-form is unmarked for present vs. future."
                },
                {
                    "prompt": "Translate: 'I drink water.'",
                    "options": [
                        "水を飲みます。",
                        "飲みます水を。",
                        "水は飲みません。",
                        "水が飲みる。"
                    ],
                    "answerIndex": 0,
                    "explanation": "水を (object) 飲みます (drink)."
                },
                {
                    "prompt": "Which particle marks the direct object in 水を飲みます?",
                    "options": [
                        "は",
                        "に",
                        "が",
                        "を"
                    ],
                    "answerIndex": 3,
                    "explanation": "を marks the direct object of the verb."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u4-l3": {
        "id": "ja-u4-l3",
        "unit": "ja-u4",
        "level": "A1",
        "objective": "Use the direct-object particle を and the time/location particle に correctly with common verbs.",
        "prerequisites": [
            "ja-u4-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u4-l2"
            ]
        },
        "presentation": {
            "explanation": "を marks the direct object of a transitive verb — the thing an action is done TO: 水を飲みます (drink water), リンゴを食べます (eat an apple), 日本語を勉強します (study Japanese). に has several jobs, but the two most essential for beginners are marking a SPECIFIC POINT IN TIME an action happens (七時に起きます, 'I wake up AT 7 o'clock') and marking a DESTINATION with motion verbs (日本に行きます, 'I go TO Japan'). A useful contrast: を pairs with verbs that act ON something (eat, drink, study, watch — the object is affected/consumed), while に pairs with a time-point or a destination point (arrive AT, exist AT, go TO) — the object of に is a location/time you're oriented toward, not something you're doing something to.",
            "examples": [
                {
                    "target": "水を飲みます。",
                    "reading": "Mizu o nomimasu.",
                    "translation": "I drink water."
                },
                {
                    "target": "リンゴを食べます。",
                    "reading": "Ringo o tabemasu.",
                    "translation": "I eat an apple."
                },
                {
                    "target": "日本語を勉強します。",
                    "reading": "Nihongo o benkyou shimasu.",
                    "translation": "I study Japanese."
                },
                {
                    "target": "七時に起きます。",
                    "reading": "Shichiji ni okimasu.",
                    "translation": "I wake up at 7 o'clock."
                },
                {
                    "target": "日本に行きます。",
                    "reading": "Nihon ni ikimasu.",
                    "translation": "I go to Japan."
                }
            ],
            "mnemonics": [
                "を = the thing being acted ON (eaten, drunk, studied). に = the point in TIME or the destination you're headed TOWARD.",
                "を follows what verb targets/consumes; に follows when or where something is aimed."
            ],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "水___飲みます。 (I drink water.)",
                    "options": [
                        "を (18.1)",
                        "に (18.2)",
                        "で (18.3)",
                        "は (18.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "を marks the direct object."
                },
                {
                    "prompt": "七時___起きます。 (I wake up at 7.)",
                    "options": [
                        "に",
                        "は",
                        "が",
                        "を"
                    ],
                    "answerIndex": 0,
                    "explanation": "に marks the specific time."
                },
                {
                    "prompt": "日本___行きます。 (I go to Japan.)",
                    "options": [
                        "で",
                        "に",
                        "は",
                        "を"
                    ],
                    "answerIndex": 1,
                    "explanation": "に marks the destination with motion verbs."
                },
                {
                    "prompt": "日本語___勉強します。 (I study Japanese.)",
                    "options": [
                        "を",
                        "で",
                        "は",
                        "に"
                    ],
                    "answerIndex": 0,
                    "explanation": "を marks the direct object of 勉強します."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "リンゴ___食べます。 (I eat an apple.)",
                    "options": [
                        "を (18.1)",
                        "に (18.2)",
                        "は (18.3)",
                        "が (18.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "を marks the direct object."
                },
                {
                    "prompt": "Which particle would mark 'Tokyo' in 'I am going to Tokyo'?",
                    "options": [
                        "を",
                        "に",
                        "は",
                        "で"
                    ],
                    "answerIndex": 1,
                    "explanation": "に marks the destination of motion verbs."
                },
                {
                    "prompt": "What is the general rule distinguishing を from に in this lesson?",
                    "options": [
                        "を = time, に = object",
                        "を = the thing acted on, に = time-point or destination",
                        "They are fully interchangeable",
                        "を is only for people, に only for objects"
                    ],
                    "answerIndex": 1,
                    "explanation": "This is the key distinction taught in this lesson."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "コーヒー___飲みます。 (I drink coffee.)",
                    "options": [
                        "は",
                        "で",
                        "に",
                        "を"
                    ],
                    "answerIndex": 3,
                    "explanation": "を marks the direct object."
                },
                {
                    "prompt": "八時___寝ます。 (I sleep at 8.)",
                    "options": [
                        "を",
                        "が",
                        "に",
                        "は"
                    ],
                    "answerIndex": 2,
                    "explanation": "に marks the specific time."
                },
                {
                    "prompt": "京都___行きます。 (I am going to Kyoto.)",
                    "options": [
                        "を",
                        "に",
                        "は",
                        "で"
                    ],
                    "answerIndex": 1,
                    "explanation": "に marks the destination."
                },
                {
                    "prompt": "本___読みます。 (I read a book.)",
                    "options": [
                        "を",
                        "に",
                        "は",
                        "で"
                    ],
                    "answerIndex": 0,
                    "explanation": "を marks the object being read."
                },
                {
                    "prompt": "Which particle pairs with a specific clock time, like 七時 (7 o'clock)?",
                    "options": [
                        "を",
                        "は",
                        "も",
                        "に"
                    ],
                    "answerIndex": 3,
                    "explanation": "に marks specific points in time."
                },
                {
                    "prompt": "Which particle marks the object of 食べます (to eat)?",
                    "options": [
                        "に",
                        "は",
                        "を",
                        "で"
                    ],
                    "answerIndex": 2,
                    "explanation": "を marks what is being eaten."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u4-l4": {
        "id": "ja-u4-l4",
        "unit": "ja-u4",
        "level": "A1",
        "objective": "Use で (means/location-of-action) and も (also/too) correctly, extending the particle set.",
        "prerequisites": [
            "ja-u4-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u4-l3"
            ]
        },
        "presentation": {
            "explanation": "で has two closely related jobs: marking the LOCATION where an action takes place (図書館で勉強します, 'I study AT the library' — contrast with に, which marks existence/destination, not where an action happens) and marking the MEANS or TOOL used to do something (電車で行きます, 'I go BY train'; 箸で食べます, 'I eat WITH chopsticks'). A useful contrast with Lesson 3's に: 日本にいます (I am IN Japan — existence, に) versus 日本で働きます (I work IN Japan — location of an action, で). も means 'also/too' and REPLACES は or が entirely rather than stacking with them — わたしも学生です (I am ALSO a student) drops は and puts も directly after わたし. も can attach after other particles like に and で without replacing them (図書館にも行きます, 'I also go to the library'), but never coexists with は or が.",
            "examples": [
                {
                    "target": "図書館で勉強します。",
                    "reading": "Toshokan de benkyou shimasu.",
                    "translation": "I study at the library."
                },
                {
                    "target": "電車で行きます。",
                    "reading": "Densha de ikimasu.",
                    "translation": "I go by train."
                },
                {
                    "target": "箸で食べます。",
                    "reading": "Hashi de tabemasu.",
                    "translation": "I eat with chopsticks."
                },
                {
                    "target": "わたしも学生です。",
                    "reading": "Watashi mo gakusei desu.",
                    "translation": "I am also a student."
                },
                {
                    "target": "図書館にも行きます。",
                    "reading": "Toshokan ni mo ikimasu.",
                    "translation": "I also go to the library."
                }
            ],
            "mnemonics": [
                "で = WHERE an action happens or WHAT tool does it (both are 'how the action is carried out'). に = WHERE something exists/is headed (a fixed point, not an action site).",
                "も REPLACES は/が (わたしも, not わたしはも) but STACKS after に/で (図書館にも) — replace vs. add-on, depending on which particle it's touching."
            ],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "図書館___勉強します。 (I study at the library.)",
                    "options": [
                        "に (19.1)",
                        "を (19.2)",
                        "は (19.3)",
                        "で (19.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "で marks the location where the action (studying) happens."
                },
                {
                    "prompt": "電車___行きます。 (I go by train.)",
                    "options": [
                        "に",
                        "を",
                        "も",
                        "で"
                    ],
                    "answerIndex": 3,
                    "explanation": "で marks the means of transportation."
                },
                {
                    "prompt": "わたし___学生です。 (I am also a student.)",
                    "options": [
                        "はも",
                        "には",
                        "も",
                        "がも"
                    ],
                    "answerIndex": 2,
                    "explanation": "も replaces は entirely."
                },
                {
                    "prompt": "図書館___も行きます。 (I also go to the library.)",
                    "options": [
                        "は",
                        "を",
                        "が",
                        "に"
                    ],
                    "answerIndex": 3,
                    "explanation": "に stacks with も rather than being replaced."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "箸___食べます。 (I eat with chopsticks.)",
                    "options": [
                        "に (19.1)",
                        "は (19.2)",
                        "で (19.3)",
                        "を (19.4)"
                    ],
                    "answerIndex": 2,
                    "explanation": "で marks the tool/means used."
                },
                {
                    "prompt": "Contrast: 日本___います vs. 日本___働きます — which particles fill these blanks respectively?",
                    "options": [
                        "で／に",
                        "に／で",
                        "は／が",
                        "を／は"
                    ],
                    "answerIndex": 1,
                    "explanation": "に for existence (います), で for the location of an action (働きます)."
                },
                {
                    "prompt": "Which particles does も replace vs. stack with?",
                    "options": [
                        "Replaces に/で, stacks with は/が",
                        "Replaces は/が, stacks with に/で",
                        "Stacks with all particles",
                        "Replaces all particles"
                    ],
                    "answerIndex": 1,
                    "explanation": "も replaces は/が but can follow に/で."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "車___行きました。 (I went by car.)",
                    "options": [
                        "に",
                        "を",
                        "で",
                        "は"
                    ],
                    "answerIndex": 2,
                    "explanation": "で marks the means of transportation."
                },
                {
                    "prompt": "スプーン___食べます。 (I eat with a spoon.)",
                    "options": [
                        "に",
                        "で",
                        "を",
                        "も"
                    ],
                    "answerIndex": 1,
                    "explanation": "で marks the tool used."
                },
                {
                    "prompt": "これ___おいしいです。 (This is ALSO delicious.)",
                    "options": [
                        "も",
                        "はも",
                        "がも",
                        "には"
                    ],
                    "answerIndex": 0,
                    "explanation": "も replaces は/が."
                },
                {
                    "prompt": "田中さん___学生です。 (Mr. Tanaka is ALSO a student.)",
                    "options": [
                        "はも",
                        "には",
                        "がも",
                        "も"
                    ],
                    "answerIndex": 3,
                    "explanation": "も replaces は entirely."
                },
                {
                    "prompt": "Which particle marks WHERE an action takes place (not existence)?",
                    "options": [
                        "を",
                        "に",
                        "で",
                        "は"
                    ],
                    "answerIndex": 2,
                    "explanation": "で marks the location of an action."
                },
                {
                    "prompt": "図書館___勉強します — which particle fits?",
                    "options": [
                        "を",
                        "で",
                        "に",
                        "は"
                    ],
                    "answerIndex": 1,
                    "explanation": "で marks the location of the action \"study.\""
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u4-l5": {
        "id": "ja-u4-l5",
        "unit": "ja-u4",
        "level": "A1",
        "objective": "Combine は, が, を, に, で, and も correctly in connected present-tense sentences describing daily actions.",
        "prerequisites": [
            "ja-u4-l1",
            "ja-u4-l2",
            "ja-u4-l3",
            "ja-u4-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u4-l1",
                "ja-u4-l2",
                "ja-u4-l3",
                "ja-u4-l4"
            ]
        },
        "presentation": {
            "explanation": "This capstone lesson is a full particle speedrun, combining every particle from Unit 4 — は, が, を, に, で, へ (direction, briefly reviewed here from context), も — inside connected ます-form sentences. The real skill being tested is rapid, correct particle selection in context, since each particle answers a different implicit question about the sentence: は/が (what's the topic/subject?), を (what's acted on?), に (when/where specifically?), で (where's the action happening, or with what tool?), も (what else applies?). Seeing them mixed together in full sentences — rather than one at a time — is what actually prepares you for real reading and listening, where all seven particles appear interleaved without warning.",
            "examples": [
                {
                    "target": "わたしは毎朝、七時に起きます。",
                    "reading": "Watashi wa maiasa, shichiji ni okimasu.",
                    "translation": "I wake up at 7 every morning."
                },
                {
                    "target": "図書館で日本語を勉強します。",
                    "reading": "Toshokan de nihongo o benkyou shimasu.",
                    "translation": "I study Japanese at the library."
                },
                {
                    "target": "電車で学校に行きます。",
                    "reading": "Densha de gakkou ni ikimasu.",
                    "translation": "I go to school by train."
                },
                {
                    "target": "友達も図書館に行きます。",
                    "reading": "Tomodachi mo toshokan ni ikimasu.",
                    "translation": "My friend also goes to the library."
                }
            ],
            "mnemonics": [
                "Run through the checklist for any sentence: who's the topic (は/が)? what's acted on (を)? when/where specifically (に)? where's the action happening or with what (で)? anything else included (も)?"
            ],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "わたし___毎朝、七時___起きます。 (I wake up at 7 every morning.)",
                    "options": [
                        "は／に (20.1)",
                        "が／を (20.2)",
                        "を／で (20.3)",
                        "に／は (20.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "は marks the topic (I); に marks the specific time."
                },
                {
                    "prompt": "図書館___日本語___勉強します。 (I study Japanese at the library.)",
                    "options": [
                        "に／を",
                        "で／を",
                        "を／で",
                        "は／に"
                    ],
                    "answerIndex": 1,
                    "explanation": "で marks the location of the action; を marks the object studied."
                },
                {
                    "prompt": "電車___学校___行きます。 (I go to school by train.)",
                    "options": [
                        "で／に",
                        "に／で",
                        "を／に",
                        "で／を"
                    ],
                    "answerIndex": 0,
                    "explanation": "で marks the means (train); に marks the destination."
                },
                {
                    "prompt": "友達___図書館___行きます。 (My friend ALSO goes to the library.)",
                    "options": [
                        "も／に",
                        "は／に",
                        "が／を",
                        "に／も"
                    ],
                    "answerIndex": 0,
                    "explanation": "も (also) replaces は/が for \"friend\"; に marks the destination."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: 'I study Japanese at the library.'",
                    "options": [
                        "日本語で図書館を勉強します。 (20.1)",
                        "図書館で日本語を勉強します。 (20.2)",
                        "図書館を日本語で勉強します。 (20.3)",
                        "図書館に日本語で勉強します。 (20.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "で marks location, を marks the object of study."
                },
                {
                    "prompt": "Translate: 'I go to school by train.'",
                    "options": [
                        "電車で学校に行きます。",
                        "電車に学校で行きます。",
                        "学校を電車で行きます。",
                        "学校で電車に行きます。"
                    ],
                    "answerIndex": 0,
                    "explanation": "で marks means (train), に marks destination (school)."
                },
                {
                    "prompt": "What is the actual skill this capstone lesson tests, beyond individual particle knowledge?",
                    "options": [
                        "Memorizing more vocabulary",
                        "Kanji stroke order",
                        "Verb tense formation only",
                        "Rapid, correct particle selection across a full connected sentence"
                    ],
                    "answerIndex": 3,
                    "explanation": "The lesson tests combining multiple particles fluently in context."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "わたし___学生です。 (As for me, I am a student.)",
                    "options": [
                        "が",
                        "は",
                        "を",
                        "で"
                    ],
                    "answerIndex": 1,
                    "explanation": "は sets up the topic."
                },
                {
                    "prompt": "水___飲みます。 (I drink water.)",
                    "options": [
                        "を",
                        "に",
                        "で",
                        "は"
                    ],
                    "answerIndex": 0,
                    "explanation": "を marks the direct object."
                },
                {
                    "prompt": "七時___起きます。 (I wake up at 7.)",
                    "options": [
                        "を",
                        "で",
                        "は",
                        "に"
                    ],
                    "answerIndex": 3,
                    "explanation": "に marks the specific time."
                },
                {
                    "prompt": "図書館___勉強します。 (I study at the library.)",
                    "options": [
                        "は",
                        "を",
                        "で",
                        "に"
                    ],
                    "answerIndex": 2,
                    "explanation": "で marks the location of the action."
                },
                {
                    "prompt": "田中さん___学生です。 (Mr. Tanaka is ALSO a student.)",
                    "options": [
                        "が",
                        "も",
                        "を",
                        "は"
                    ],
                    "answerIndex": 1,
                    "explanation": "も replaces は for \"also.\""
                },
                {
                    "prompt": "誰___来ましたか。 (Who came?)",
                    "options": [
                        "が",
                        "を",
                        "も",
                        "は"
                    ],
                    "answerIndex": 0,
                    "explanation": "が seeks the specific answer to a who-question."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u5-l1": {
        "id": "ja-u5-l1",
        "unit": "ja-u5",
        "level": "A1",
        "objective": "Describe a typical daily routine using common ます-form action verbs in sequence.",
        "prerequisites": [
            "ja-u4-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u4-l2",
                "ja-u2-l2"
            ]
        },
        "presentation": {
            "explanation": "This lesson introduces the core verb set for describing a daily routine, all in the ます-form learned in Unit 4: 起きます (okimasu, get up), 寝ます (nemasu, go to sleep), 働きます (hatarakimasu, work), 帰ります (kaerimasu, return home), シャワーを浴びます (shawaa o abimasu, take a shower). Combined with the time particle に from Unit 4, you can now build full routine statements: 七時に起きます (I get up at 7). Because ます-form doesn't distinguish habitual present from a one-time future action (Unit 4, Lesson 2), まいにち (every day) or いつも (always) are often added at the start of a sentence to make clear you're describing a REPEATED routine rather than a single planned event: 毎日、七時に起きます (Every day, I get up at 7).",
            "examples": [
                {
                    "target": "毎日、七時に起きます。",
                    "reading": "Mainichi, shichiji ni okimasu.",
                    "translation": "Every day, I get up at 7."
                },
                {
                    "target": "シャワーを浴びます。",
                    "reading": "Shawaa o abimasu.",
                    "translation": "I take a shower."
                },
                {
                    "target": "九時に働きます。",
                    "reading": "Kuji ni hatarakimasu.",
                    "translation": "I work starting at 9."
                },
                {
                    "target": "六時に帰ります。",
                    "reading": "Rokuji ni kaerimasu.",
                    "translation": "I return home at 6."
                },
                {
                    "target": "十一時に寝ます。",
                    "reading": "Juuichiji ni nemasu.",
                    "translation": "I go to sleep at 11."
                }
            ],
            "mnemonics": [
                "毎日 (every day) at the front of a sentence signals 'this is a routine,' resolving the present/future ambiguity of ます-form."
            ],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "毎日、七時___起きます。 (Every day, I get up at 7.)",
                    "options": [
                        "に (21.1)",
                        "で (21.2)",
                        "は (21.3)",
                        "を (21.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "に marks the specific time."
                },
                {
                    "prompt": "How do you say 'I take a shower'?",
                    "options": [
                        "シャワーが浴びます。",
                        "シャワーは浴びます。",
                        "シャワーを浴びます。",
                        "シャワーに浴びます。"
                    ],
                    "answerIndex": 2,
                    "explanation": "を marks the object of 浴びます."
                },
                {
                    "prompt": "How do you say 'I return home at 6'?",
                    "options": [
                        "六時は帰ります。",
                        "六時に帰ります。",
                        "帰ります六時に。",
                        "六時を帰ります。"
                    ],
                    "answerIndex": 1,
                    "explanation": "に marks the specific time before the verb."
                },
                {
                    "prompt": "What word is often added to clarify a ROUTINE (repeated) meaning rather than a one-time future event?",
                    "options": [
                        "すぐに",
                        "たぶん",
                        "もう",
                        "毎日"
                    ],
                    "answerIndex": 3,
                    "explanation": "毎日 (every day) signals repetition/habit."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "How do you say 'I go to sleep at 11'?",
                    "options": [
                        "十一時を寝ます。 (21.1)",
                        "寝ます十一時に。 (21.2)",
                        "十一時は寝ました。 (21.3)",
                        "十一時に寝ます。 (21.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "に marks the time; 寝ます is the ます-form of 寝る."
                },
                {
                    "prompt": "How do you say 'I work starting at 9'?",
                    "options": [
                        "九時を働きます。",
                        "働きます九時。",
                        "九時は働く。",
                        "九時に働きます。"
                    ],
                    "answerIndex": 3,
                    "explanation": "に marks the time before 働きます."
                },
                {
                    "prompt": "Why does ます-form need a helper word like 毎日 to clearly mean 'routine'?",
                    "options": [
                        "There is no reason",
                        "Because 毎日 is required grammatically in every sentence",
                        "It doesn't — ます-form always means routine",
                        "Because ます-form is unmarked for present vs. future, so context words disambiguate"
                    ],
                    "answerIndex": 3,
                    "explanation": "This directly follows from Unit 4 Lesson 2's point about ます-form tense ambiguity."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "毎日、七時___起きます。",
                    "options": [
                        "に",
                        "で",
                        "は",
                        "を"
                    ],
                    "answerIndex": 0,
                    "explanation": "に marks the time."
                },
                {
                    "prompt": "How do you say 'I take a shower'?",
                    "options": [
                        "シャワーに浴びます。",
                        "シャワーは浴びます。",
                        "シャワーが浴びます。",
                        "シャワーを浴びます。"
                    ],
                    "answerIndex": 3,
                    "explanation": "を marks the object."
                },
                {
                    "prompt": "How do you say 'I work' in ます-form?",
                    "options": [
                        "働むす",
                        "働る",
                        "働きます",
                        "働く"
                    ],
                    "answerIndex": 2,
                    "explanation": "働きます is the correct ます-form."
                },
                {
                    "prompt": "How do you say 'I return home' in ます-form?",
                    "options": [
                        "帰えます",
                        "帰ります",
                        "帰る",
                        "帰きます"
                    ],
                    "answerIndex": 1,
                    "explanation": "帰ります is the correct ます-form of 帰る."
                },
                {
                    "prompt": "How do you say 'I go to sleep' in ます-form?",
                    "options": [
                        "寝ます",
                        "寝る",
                        "寝りいます",
                        "寝きます"
                    ],
                    "answerIndex": 0,
                    "explanation": "寝ます is the ます-form of 寝る."
                },
                {
                    "prompt": "Translate: 'Every day, I get up at 7.'",
                    "options": [
                        "毎日は七時起きます。",
                        "七時、毎日を起きます。",
                        "起きます毎日七時に。",
                        "毎日、七時に起きます。"
                    ],
                    "answerIndex": 3,
                    "explanation": "毎日 (every day), 七時に (at 7), 起きます (get up)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u5-l2": {
        "id": "ja-u5-l2",
        "unit": "ja-u5",
        "level": "A1",
        "objective": "Sequence two or more daily actions using the て-form of verbs.",
        "prerequisites": [
            "ja-u5-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u5-l1"
            ]
        },
        "presentation": {
            "explanation": "To connect a sequence of actions ('I do X, then Y, then Z') without repeating です/ます after every single verb, Japanese uses the て-form as a connector. Forming て-form depends on verb type: る-verbs simply swap る for て (食べる → 食べて), while う-verbs follow a small set of sound-shift rules depending on their final syllable (飲む → 飲んで, 起きる → 起きて since 起きる is actually a る-verb despite ending differently, 行く → 行って — irregular pattern). For this lesson, focus on recognizing and using て-form in the common daily-routine verbs already learned: 起きて (getting up, then...), 食べて (eating, then...), 出て (leaving, then...). A full routine sentence chains these: 起きて、朝ご飯を食べて、学校に行きます (I get up, eat breakfast, and go to school) — only the LAST verb in the chain takes the full ます-form; everything before it stays in て-form.",
            "examples": [
                {
                    "target": "起きて、朝ご飯を食べます。",
                    "reading": "Okite, asagohan o tabemasu.",
                    "translation": "I get up and eat breakfast."
                },
                {
                    "target": "起きて、朝ご飯を食べて、学校に行きます。",
                    "reading": "Okite, asagohan o tabete, gakkou ni ikimasu.",
                    "translation": "I get up, eat breakfast, and go to school."
                },
                {
                    "target": "シャワーを浴びて、寝ます。",
                    "reading": "Shawaa o abite, nemasu.",
                    "translation": "I take a shower and go to sleep."
                },
                {
                    "target": "働いて、家に帰ります。",
                    "reading": "Hataraite, ie ni kaerimasu.",
                    "translation": "I work and return home."
                }
            ],
            "mnemonics": [
                "Only the LAST verb in a chain gets full ます-form; every earlier verb just uses て — think of て as a comma connecting actions in one breath."
            ],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "起き___、朝ご飯を食べます。 (I get up and eat breakfast.)",
                    "options": [
                        "ます (22.1)",
                        "だ (22.2)",
                        "て (22.3)",
                        "ました (22.4)"
                    ],
                    "answerIndex": 2,
                    "explanation": "て-form connects the first action to the next."
                },
                {
                    "prompt": "Which verb in a chain of connected actions takes the full ます-form?",
                    "options": [
                        "The first verb",
                        "Every verb",
                        "None of them",
                        "Only the last verb"
                    ],
                    "answerIndex": 3,
                    "explanation": "Only the final verb closes the sentence in ます-form; earlier ones use て."
                },
                {
                    "prompt": "食べる → て-form?",
                    "options": [
                        "食べて",
                        "食べます",
                        "食べる",
                        "食べった"
                    ],
                    "answerIndex": 0,
                    "explanation": "る-verbs swap る for て."
                },
                {
                    "prompt": "Translate: 'I take a shower and go to sleep.'",
                    "options": [
                        "シャワーを浴びて、寝ます。",
                        "シャワーを浴びます、寝て。",
                        "シャワーを浴びて寝る。",
                        "シャワーを浴びる、寝ます。"
                    ],
                    "answerIndex": 0,
                    "explanation": "浴びて (て-form) connects to 寝ます (final ます-form)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: 'I get up, eat breakfast, and go to school.'",
                    "options": [
                        "起きます、朝ご飯を食べて、学校に行って。 (22.1)",
                        "起きて、朝ご飯を食べます、学校に行って。 (22.2)",
                        "起きて、朝ご飯を食べて、学校に行きます。 (22.3)",
                        "起きて朝ご飯食べて学校行く。 (22.4)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Two て-form verbs chain into the final ます-form verb."
                },
                {
                    "prompt": "働く → て-form (irregular sound shift)?",
                    "options": [
                        "働いて",
                        "働きて",
                        "働って",
                        "働て"
                    ],
                    "answerIndex": 0,
                    "explanation": "働く follows the く→いて sound-shift pattern for て-form."
                },
                {
                    "prompt": "Why is て-form useful for describing routines?",
                    "options": [
                        "It replaces ます entirely, forever",
                        "It only works with one verb at a time",
                        "It has no particular use",
                        "It lets you chain multiple actions without repeating ます after each one"
                    ],
                    "answerIndex": 3,
                    "explanation": "て-form links a sequence smoothly, ending in one final ます-form verb."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "起き___、学校に行きます。 (I get up and go to school.)",
                    "options": [
                        "だ",
                        "ます",
                        "の",
                        "て"
                    ],
                    "answerIndex": 3,
                    "explanation": "て-form connects to the following verb."
                },
                {
                    "prompt": "食べる → て-form?",
                    "options": [
                        "食べった",
                        "食べいて",
                        "食べて",
                        "食べます"
                    ],
                    "answerIndex": 2,
                    "explanation": "る-verbs simply swap る for て."
                },
                {
                    "prompt": "In a chain of three actions, how many verbs take full ます-form?",
                    "options": [
                        "Zero",
                        "One (the last)",
                        "Two",
                        "All three"
                    ],
                    "answerIndex": 1,
                    "explanation": "Only the final verb closes the sentence in ます-form."
                },
                {
                    "prompt": "Translate: 'I work and return home.'",
                    "options": [
                        "働いて、家に帰ります。",
                        "働いて家に帰る。",
                        "働く、家に帰ります。",
                        "働きます、家に帰て。"
                    ],
                    "answerIndex": 0,
                    "explanation": "働いて (て-form) connects to 帰ります (final ます-form)."
                },
                {
                    "prompt": "Translate: 'I take a shower and go to sleep.'",
                    "options": [
                        "シャワーを浴びる、寝ました。",
                        "シャワーを浴びて寝る。",
                        "シャワーを浴びます、寝て。",
                        "シャワーを浴びて、寝ます。"
                    ],
                    "answerIndex": 3,
                    "explanation": "浴びて connects to the final ます-form 寝ます."
                },
                {
                    "prompt": "What is the general rule for building a chain of daily-routine actions?",
                    "options": [
                        "Use ます after every verb",
                        "Order does not matter",
                        "Use て after every verb except the last, which takes ます",
                        "Only use て-form, never ます"
                    ],
                    "answerIndex": 2,
                    "explanation": "This is the core rule taught in this lesson."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u5-l3": {
        "id": "ja-u5-l3",
        "unit": "ja-u5",
        "level": "A1",
        "objective": "Use frequency adverbs (いつも, よく, ときどき, あまり, ぜんぜん) to describe how often you do something.",
        "prerequisites": [
            "ja-u5-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u5-l1",
                "ja-u5-l2"
            ]
        },
        "presentation": {
            "explanation": "Frequency adverbs sit near the start of a sentence (often right after the topic) and scale from 'always' down to 'never': いつも (always), よく (often), ときどき (sometimes), あまり (not very often), ぜんぜん (not at all). The last two — あまり and ぜんぜん — are special: they REQUIRE a negative verb ending to sound correct. あまり食べません (I don't eat much) is correct, but あまり食べます is not natural Japanese — あまり essentially means 'not very much' and needs the negative to complete its meaning, similar to how English 'not really' implies negation even without the word 'not' always being obvious. ぜんぜん behaves the same way but is stronger: ぜんぜん食べません (I don't eat at all).",
            "examples": [
                {
                    "target": "いつも七時に起きます。",
                    "reading": "Itsumo shichiji ni okimasu.",
                    "translation": "I always get up at 7."
                },
                {
                    "target": "よく朝ご飯を食べます。",
                    "reading": "Yoku asagohan o tabemasu.",
                    "translation": "I often eat breakfast."
                },
                {
                    "target": "ときどき運動します。",
                    "reading": "Tokidoki undou shimasu.",
                    "translation": "I sometimes exercise."
                },
                {
                    "target": "あまり運動しません。",
                    "reading": "Amari undou shimasen.",
                    "translation": "I don't exercise very much."
                },
                {
                    "target": "ぜんぜん運動しません。",
                    "reading": "Zenzen undou shimasen.",
                    "translation": "I don't exercise at all."
                }
            ],
            "mnemonics": [
                "あまり and ぜんぜん are 'negative-seeking' adverbs — they sound incomplete without ません/ない, unlike いつも/よく/ときどき which pair naturally with positive verbs."
            ],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "___七時に起きます。 (I always get up at 7.)",
                    "options": [
                        "いつも (23.1)",
                        "ぜんぜん (23.2)",
                        "ときどき (23.3)",
                        "あまり (23.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "いつも = always."
                },
                {
                    "prompt": "あまり運動___。 (I don't exercise very much.)",
                    "options": [
                        "しません",
                        "した",
                        "でした",
                        "します"
                    ],
                    "answerIndex": 0,
                    "explanation": "あまり requires a negative verb ending."
                },
                {
                    "prompt": "Which adverb means 'sometimes'?",
                    "options": [
                        "よく",
                        "ときどき",
                        "ぜんぜん",
                        "いつも"
                    ],
                    "answerIndex": 1,
                    "explanation": "ときどき = sometimes."
                },
                {
                    "prompt": "ぜんぜん運動___。 (I don't exercise at all.)",
                    "options": [
                        "しません",
                        "した",
                        "でした",
                        "します"
                    ],
                    "answerIndex": 0,
                    "explanation": "ぜんぜん also requires a negative verb ending."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Which adverb means 'often'?",
                    "options": [
                        "いつも (23.1)",
                        "よく (23.2)",
                        "あまり (23.3)",
                        "ぜんぜん (23.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "よく = often."
                },
                {
                    "prompt": "Why is あまり食べます considered unnatural?",
                    "options": [
                        "It is perfectly natural",
                        "あまり requires a negative verb ending to complete its meaning",
                        "あまり can only be used with adjectives",
                        "It is a formality issue only"
                    ],
                    "answerIndex": 1,
                    "explanation": "あまり pairs with negation; without it, the sentence is incomplete/unnatural."
                },
                {
                    "prompt": "Which is stronger: あまり or ぜんぜん (both meaning 'not much/at all')?",
                    "options": [
                        "あまり",
                        "ぜんぜん",
                        "They are identical in strength",
                        "Neither is negative"
                    ],
                    "answerIndex": 1,
                    "explanation": "ぜんぜん is the stronger \"not at all.\""
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "___朝ご飯を食べます。 (I often eat breakfast.)",
                    "options": [
                        "あまり",
                        "いつも運動",
                        "よく",
                        "ぜんぜん"
                    ],
                    "answerIndex": 2,
                    "explanation": "よく = often."
                },
                {
                    "prompt": "あまり運動___。 (negative required)",
                    "options": [
                        "します",
                        "しません",
                        "でした",
                        "した"
                    ],
                    "answerIndex": 1,
                    "explanation": "あまり requires negation."
                },
                {
                    "prompt": "Which word means 'always'?",
                    "options": [
                        "いつも",
                        "ときどき",
                        "あまり",
                        "よく"
                    ],
                    "answerIndex": 0,
                    "explanation": "いつも = always."
                },
                {
                    "prompt": "Which two adverbs specifically require a negative verb ending?",
                    "options": [
                        "いつも and よく",
                        "よく and ときどき",
                        "いつも and ぜんぜん",
                        "あまり and ぜんぜん"
                    ],
                    "answerIndex": 3,
                    "explanation": "あまり and ぜんぜん both require negation."
                },
                {
                    "prompt": "ぜんぜん運動___。 (I don't exercise at all.)",
                    "options": [
                        "します",
                        "でした",
                        "しません",
                        "した"
                    ],
                    "answerIndex": 2,
                    "explanation": "ぜんぜん requires the negative しません."
                },
                {
                    "prompt": "Translate: 'I sometimes exercise.'",
                    "options": [
                        "いつも運動しません。",
                        "ときどき運動します。",
                        "あまり運動します。",
                        "ぜんぜん運動します。"
                    ],
                    "answerIndex": 1,
                    "explanation": "ときどき (sometimes) pairs naturally with a positive verb."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u5-l4": {
        "id": "ja-u5-l4",
        "unit": "ja-u5",
        "level": "A1",
        "objective": "Ask and answer questions about someone else's daily routine using question words and polite verb forms.",
        "prerequisites": [
            "ja-u5-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u5-l1",
                "ja-u1-l4"
            ]
        },
        "presentation": {
            "explanation": "Asking about someone's routine combines the か question particle (Unit 1) with question words: 何時に起きますか (Nanji ni okimasu ka?, 'What time do you get up?'), 何をしますか (Nani o shimasu ka?, 'What do you do?'). 何 (なに/なん, 'what') was previewed in Unit 1 for これは何ですか — here it extends to asking about actions rather than just identifying objects. Answering naturally echoes the question's structure back with your own information: 七時に起きます (I get up at 7) directly answers 何時に起きますか by filling in the same に-marked slot. This question-and-answer symmetry — the answer reuses the same particle the question used — is a useful general pattern across Japanese question formation, not just for routines.",
            "examples": [
                {
                    "target": "何時に起きますか。",
                    "reading": "Nanji ni okimasu ka?",
                    "translation": "What time do you get up?"
                },
                {
                    "target": "七時に起きます。",
                    "reading": "Shichiji ni okimasu.",
                    "translation": "I get up at 7."
                },
                {
                    "target": "何をしますか。",
                    "reading": "Nani o shimasu ka?",
                    "translation": "What do you do?"
                },
                {
                    "target": "仕事をします。",
                    "reading": "Shigoto o shimasu.",
                    "translation": "I work. (lit. I do work)"
                },
                {
                    "target": "毎日、何を食べますか。",
                    "reading": "Mainichi, nani o tabemasu ka?",
                    "translation": "What do you eat every day?"
                }
            ],
            "mnemonics": [
                "Answers mirror questions: 何時に___か → [time]に___ — the same particle (に in this case) carries over from question to answer."
            ],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you ask 'What time do you get up?'",
                    "options": [
                        "何時に起きますか。 (24.1)",
                        "何時が起きますか。 (24.2)",
                        "起きますか何時。 (24.3)",
                        "何を起きますか。 (24.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "何時に + verb + か forms the question."
                },
                {
                    "prompt": "何___しますか。 (What do you do?)",
                    "options": [
                        "は",
                        "に",
                        "が",
                        "を"
                    ],
                    "answerIndex": 3,
                    "explanation": "を marks 何 as the object of します."
                },
                {
                    "prompt": "Someone asks 何時に起きますか and you get up at 6 — how do you answer?",
                    "options": [
                        "六時に起きます。",
                        "六時は起きるか。",
                        "六時を起きます。",
                        "起きます六時に。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Echo the に particle from the question in your answer."
                },
                {
                    "prompt": "Translate: 'What do you eat every day?'",
                    "options": [
                        "毎日、何を食べますか。",
                        "毎日食べますか何を。",
                        "毎日、何が食べますか。",
                        "何、毎日食べますか。"
                    ],
                    "answerIndex": 0,
                    "explanation": "毎日 (every day), 何を (what, object), 食べますか (do you eat)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "How do you answer 何をしますか if your answer is '仕事' (work)?",
                    "options": [
                        "仕事をします。 (24.1)",
                        "します仕事を。 (24.2)",
                        "仕事はします。 (24.3)",
                        "仕事にします。 (24.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "を carries over from the question, marking 仕事 as the object."
                },
                {
                    "prompt": "What general pattern connects a question and its natural answer in Japanese?",
                    "options": [
                        "The answer always uses a different particle than the question",
                        "The answer typically reuses the same particle the question used",
                        "There is no consistent pattern",
                        "Particles are dropped entirely in answers"
                    ],
                    "answerIndex": 1,
                    "explanation": "This question-answer particle symmetry is the key insight of this lesson."
                },
                {
                    "prompt": "Translate: 'What time do you get up?'",
                    "options": [
                        "何時に起きますか。",
                        "何時が起きますか。",
                        "何が起きる時ですか。",
                        "起きますか何時に。"
                    ],
                    "answerIndex": 0,
                    "explanation": "何時に起きますか is the standard question form."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "How do you ask 'What time do you get up?'",
                    "options": [
                        "何を起きますか。",
                        "何時に起きますか。",
                        "何時が起きますか。",
                        "起きます何時か。"
                    ],
                    "answerIndex": 1,
                    "explanation": "何時に + verb + か."
                },
                {
                    "prompt": "何___しますか。",
                    "options": [
                        "を",
                        "は",
                        "が",
                        "も"
                    ],
                    "answerIndex": 0,
                    "explanation": "を marks 何 as the object of します."
                },
                {
                    "prompt": "If asked 何を食べますか and your answer is パン (bread), how do you answer?",
                    "options": [
                        "食べますパンを。",
                        "パンは食べます。",
                        "パンが食べます。",
                        "パンを食べます。"
                    ],
                    "answerIndex": 3,
                    "explanation": "を carries over from the question."
                },
                {
                    "prompt": "If asked 何時に寝ますか and you sleep at 11, how do you answer?",
                    "options": [
                        "十一時は寝るか。",
                        "十一時を寝ます。",
                        "十一時に寝ます。",
                        "寝ます十一時。"
                    ],
                    "answerIndex": 2,
                    "explanation": "に carries over from the question into the answer."
                },
                {
                    "prompt": "What does 何 mean?",
                    "options": [
                        "Who",
                        "What",
                        "When",
                        "Where"
                    ],
                    "answerIndex": 1,
                    "explanation": "何 (なに/なん) means \"what.\""
                },
                {
                    "prompt": "What is the general rule this lesson teaches about answering questions?",
                    "options": [
                        "Reuse the same particle the question used",
                        "Never use particles in answers",
                        "Always change the particle in your answer",
                        "Only use は in answers"
                    ],
                    "answerIndex": 0,
                    "explanation": "This mirrors the question-answer particle symmetry taught in this lesson."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u5-l5": {
        "id": "ja-u5-l5",
        "unit": "ja-u5",
        "level": "A1",
        "objective": "Describe a full daily routine from morning to night in a connected paragraph, using て-form sequencing and frequency adverbs.",
        "prerequisites": [
            "ja-u5-l1",
            "ja-u5-l2",
            "ja-u5-l3",
            "ja-u5-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u5-l1",
                "ja-u5-l2",
                "ja-u5-l3",
                "ja-u5-l4"
            ]
        },
        "presentation": {
            "explanation": "This capstone lesson produces a full daily-routine paragraph — the kind of extended description that pulls together every piece of Unit 5: ます-form verbs (Lesson 1), て-form sequencing (Lesson 2), frequency adverbs (Lesson 3), and the question-answer pattern for checking comprehension (Lesson 4). A natural routine paragraph moves chronologically from waking to sleeping, using て-form to chain same-clause actions and starting fresh clauses at natural breaks: いつも七時に起きて、朝ご飯を食べます。九時に働いて、六時に家に帰ります。よく運動しますが、あまりテレビを見ません。十一時に寝ます。Being able to produce several connected sentences like this — not just isolated single-sentence drills — is the actual marker of A1-level speaking ability the CEFR framework describes.",
            "examples": [
                {
                    "target": "いつも七時に起きて、朝ご飯を食べます。",
                    "reading": "Itsumo shichiji ni okite, asagohan o tabemasu.",
                    "translation": "I always get up at 7 and eat breakfast."
                },
                {
                    "target": "九時に働いて、六時に家に帰ります。",
                    "reading": "Kuji ni hataraite, rokuji ni ie ni kaerimasu.",
                    "translation": "I work starting at 9 and return home at 6."
                },
                {
                    "target": "よく運動しますが、あまりテレビを見ません。",
                    "reading": "Yoku undou shimasu ga, amari terebi o mimasen.",
                    "translation": "I often exercise, but I don't watch much TV."
                },
                {
                    "target": "十一時に寝ます。",
                    "reading": "Juuichiji ni nemasu.",
                    "translation": "I go to sleep at 11."
                }
            ],
            "mnemonics": [
                "が (but) connects two contrasting ideas across clauses, letting you build longer, more natural paragraphs — a small preview of a connector you'll formalize later."
            ],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "いつも七時に起き___、朝ご飯を食べます。 (I always get up at 7 and eat breakfast.)",
                    "options": [
                        "ます (25.1)",
                        "て (25.2)",
                        "だ (25.3)",
                        "の (25.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "て-form connects to the next clause."
                },
                {
                    "prompt": "九時に働いて、六時に家に___。 (I return home at 6.)",
                    "options": [
                        "帰る",
                        "帰きます",
                        "帰ります",
                        "帰て"
                    ],
                    "answerIndex": 2,
                    "explanation": "帰ります is the final ます-form closing the sentence."
                },
                {
                    "prompt": "よく運動します___、あまりテレビを見ません。 (I often exercise, BUT I don't watch much TV.)",
                    "options": [
                        "て",
                        "が",
                        "は",
                        "も"
                    ],
                    "answerIndex": 1,
                    "explanation": "が connects two contrasting clauses."
                },
                {
                    "prompt": "What four elements from this unit does the capstone paragraph combine?",
                    "options": [
                        "ます-form, て-form sequencing, frequency adverbs, and question-answer particle symmetry",
                        "Only ます-form verbs",
                        "Only frequency adverbs",
                        "Only て-form"
                    ],
                    "answerIndex": 0,
                    "explanation": "This is the explicit combination the capstone is built around."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: 'I often exercise, but I don't watch much TV.'",
                    "options": [
                        "よく運動して、あまりテレビを見ます。 (25.1)",
                        "よく運動しますが、あまりテレビを見ません。 (25.2)",
                        "よく運動しません、あまりテレビを見ます。 (25.3)",
                        "あまり運動しますが、よくテレビを見ません。 (25.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "よく (often) + positive verb, が (but), あまり (not much) + negative verb."
                },
                {
                    "prompt": "Why does あまりテレビを見ません use the negative見ません rather than 見ます?",
                    "options": [
                        "It is a typo",
                        "テレビ requires negation",
                        "There is no reason",
                        "あまり requires a negative verb ending, as established in Lesson 3"
                    ],
                    "answerIndex": 3,
                    "explanation": "This directly reuses the あまり + negative rule from Lesson 3."
                },
                {
                    "prompt": "What CEFR-level marker does producing a multi-sentence connected routine description represent?",
                    "options": [
                        "C2 mastery",
                        "No CEFR relevance",
                        "B2 upper-intermediate",
                        "A1-level basic connected speech"
                    ],
                    "answerIndex": 3,
                    "explanation": "Connected, multi-sentence description of routines is a hallmark A1 can-do skill."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "いつも七時に起き___、朝ご飯を食べます。",
                    "options": [
                        "て",
                        "ます",
                        "だ",
                        "か"
                    ],
                    "answerIndex": 0,
                    "explanation": "て-form connects the clauses."
                },
                {
                    "prompt": "九時に働いて、六時に家に___。",
                    "options": [
                        "帰きます",
                        "帰て",
                        "帰る",
                        "帰ります"
                    ],
                    "answerIndex": 3,
                    "explanation": "帰ります closes the sentence in full ます-form."
                },
                {
                    "prompt": "よく運動します___、あまりテレビを見ません。",
                    "options": [
                        "も",
                        "は",
                        "が",
                        "て"
                    ],
                    "answerIndex": 2,
                    "explanation": "が connects two contrasting ideas."
                },
                {
                    "prompt": "あまりテレビを___。 (I don't watch much TV.)",
                    "options": [
                        "見て",
                        "見ません",
                        "見た",
                        "見ます"
                    ],
                    "answerIndex": 1,
                    "explanation": "あまり requires the negative 見ません."
                },
                {
                    "prompt": "十一時に___。 (I go to sleep at 11 — final verb of the paragraph.)",
                    "options": [
                        "寝ます",
                        "寝る",
                        "寝ません",
                        "寝て"
                    ],
                    "answerIndex": 0,
                    "explanation": "The final verb of a routine paragraph takes full ます-form."
                },
                {
                    "prompt": "What is the overall skill being tested by this capstone paragraph?",
                    "options": [
                        "Producing a single isolated sentence",
                        "Only conjugating verbs correctly",
                        "Only using question words",
                        "Producing a connected, multi-sentence description combining ます-form, て-form, frequency adverbs, and contrast"
                    ],
                    "answerIndex": 3,
                    "explanation": "This is the explicit goal of the capstone lesson."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u6-l1": {
        "id": "ja-u6-l1",
        "unit": "ja-u6",
        "level": "A1",
        "objective": "Name common foods and drinks and use the を particle to mark exactly what someone eats, drinks, or buys.",
        "prerequisites": [
            "ja-u5-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u5-l3",
                "ja-u5-l4",
                "ja-u5-l5"
            ]
        },
        "presentation": {
            "explanation": "を marks the direct object of a verb — the thing being eaten, drunk, bought, or otherwise acted on. You already know は (topic, Unit 4) and が (subject, Unit 4); を completes the trio by tagging what the action is done TO. Sentence order is Subject + は + Object + を + Verb: 田中さんはラーメンを食べます (\"As for Tanaka-san, [he] eats ramen\"). Here's a fun bit of trivia that helps を stick: it is pronounced exactly like お (o), and in modern Japanese it exists for ONE reason only — marking objects. Every other kana can start a word (おかね, おちゃ...) but を never does; if you see を anywhere, a verb is about to consume, buy, or otherwise act on whatever came right before it. Core food/drink vocabulary for this unit: ラーメン (ramen), 寿司/すし (sushi), てんぷら (tempura), カレー (curry), 水/みず (water), お茶/おちゃ (tea), コーヒー (coffee), ビール (beer).",
            "examples": [
                {
                    "target": "田中さんはラーメンを食べます。",
                    "reading": "Tanaka-san wa ra-men o tabemasu.",
                    "translation": "Tanaka-san eats ramen."
                },
                {
                    "target": "わたしはコーヒーを飲みます。",
                    "reading": "Watashi wa ko-hi- o nomimasu.",
                    "translation": "I drink coffee."
                },
                {
                    "target": "田中さんは寿司屋でもラーメンを食べます。",
                    "reading": "Tanaka-san wa sushiya de mo ra-men o tabemasu.",
                    "translation": "Tanaka-san eats ramen even at the sushi restaurant."
                },
                {
                    "target": "何を食べますか。",
                    "reading": "Nani o tabemasu ka.",
                    "translation": "What do you eat? / What are you going to eat?"
                }
            ],
            "mnemonics": [
                "を is お's one-job cousin: お can spell all kinds of words, but を only ever stands right after the thing getting eaten, drunk, or bought. See を, expect a verb doing something TO it.",
                "Picture を as a hook shape snagging the object and reeling it toward the verb at the end of the sentence — that's literally its grammatical job."
            ],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "田中さんはラーメン___食べます。 (Tanaka-san eats ramen.)",
                    "options": [
                        "は (26.1)",
                        "が (26.2)",
                        "に (26.3)",
                        "を (26.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "を marks ラーメン as the direct object of 食べます."
                },
                {
                    "prompt": "わたしはコーヒー___飲みます。 (I drink coffee.)",
                    "options": [
                        "も",
                        "は",
                        "が",
                        "を"
                    ],
                    "answerIndex": 3,
                    "explanation": "コーヒー is the thing being drunk, so it takes を."
                },
                {
                    "prompt": "何___食べますか。 (What do you eat?)",
                    "options": [
                        "を",
                        "は",
                        "で",
                        "が"
                    ],
                    "answerIndex": 0,
                    "explanation": "何 (what) is still the object of 食べます here, so it takes を just like any other noun would."
                },
                {
                    "prompt": "Which particle marks the direct object of a verb — the thing an action is done to?",
                    "options": [
                        "を (direct object)",
                        "は (topic)",
                        "に (time/goal)",
                        "が (subject)"
                    ],
                    "answerIndex": 0,
                    "explanation": "を is the direct-object marker introduced in this lesson."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: 'Tanaka-san eats ramen even at the sushi restaurant.'",
                    "options": [
                        "田中さんは寿司屋でラーメンが食べます。 (26.1)",
                        "田中さんは寿司屋でもラーメンは食べます。 (26.2)",
                        "田中さんはラーメンを寿司屋を食べます。 (26.3)",
                        "田中さんは寿司屋でもラーメンを食べます。 (26.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "でも (even at) + ラーメンを (object) + 食べます (verb) is the correct chain; only option 0 keeps を on ラーメン and doesn't double up markers incorrectly."
                },
                {
                    "prompt": "Why is を uniquely easy to spot compared to other kana?",
                    "options": [
                        "It only ever marks a direct object — it never spells the start of an ordinary word",
                        "It is always the first character in a sentence",
                        "It replaces kanji entirely",
                        "It is always capitalized"
                    ],
                    "answerIndex": 0,
                    "explanation": "を is a single-purpose grammatical particle, unlike お which appears inside many words."
                },
                {
                    "prompt": "田中さんは何を食べますか — what grammatical role does 何 play here?",
                    "options": [
                        "It has no grammatical role",
                        "Direct object, marked by を, just like any other noun",
                        "Subject, marked by が",
                        "Topic, marked by は"
                    ],
                    "answerIndex": 1,
                    "explanation": "Question words slot into the same particle pattern as the answer would use."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "田中さんはラーメン___食べます。",
                    "options": [
                        "は",
                        "が",
                        "に",
                        "を"
                    ],
                    "answerIndex": 3,
                    "explanation": "を marks the direct object."
                },
                {
                    "prompt": "わたしはコーヒー___飲みます。",
                    "options": [
                        "も",
                        "は",
                        "を",
                        "が"
                    ],
                    "answerIndex": 2,
                    "explanation": "を marks コーヒー as what's being drunk."
                },
                {
                    "prompt": "何___食べますか。",
                    "options": [
                        "が",
                        "を",
                        "で",
                        "は"
                    ],
                    "answerIndex": 1,
                    "explanation": "何 still takes を as the object of 食べます."
                },
                {
                    "prompt": "田中さんは寿司屋___もラーメンを食べます。 (...even at the sushi restaurant...)",
                    "options": [
                        "で",
                        "が",
                        "を",
                        "は"
                    ],
                    "answerIndex": 0,
                    "explanation": "で marks the location where an action happens; も (also/even) attaches after it."
                },
                {
                    "prompt": "What is unique about を among all hiragana?",
                    "options": [
                        "It's only used by children",
                        "It's the rarest sound in Japanese",
                        "It doesn't actually exist in modern Japanese",
                        "It only ever functions as the direct-object particle, never spelling an ordinary word"
                    ],
                    "answerIndex": 3,
                    "explanation": "This is the trivia fact directly taught in the explanation."
                },
                {
                    "prompt": "Translate: 'I drink tea.'",
                    "options": [
                        "わたしはお茶は飲みます。",
                        "わたしはお茶を飲む。",
                        "わたしはお茶を飲みます。",
                        "わたしはお茶が飲みます。"
                    ],
                    "answerIndex": 2,
                    "explanation": "お茶を飲みます (drink tea) with を marking the object and polite ます-form."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u6-l2": {
        "id": "ja-u6-l2",
        "unit": "ja-u6",
        "level": "A1",
        "objective": "Express wanting to do something with the たい form and wanting a thing with ほしい, including the particle shift they both trigger.",
        "prerequisites": [
            "ja-u6-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u6-l1"
            ]
        },
        "presentation": {
            "explanation": "Two different words mean \"want\" in Japanese, and they attach to two different kinds of things. たい attaches to a verb's ます-stem (drop ます, add たい) to mean \"want to [do the verb]\": 食べます → 食べたい (want to eat), 飲みます → 飲みたい (want to drink). Once attached, たい behaves exactly like an い-adjective: 食べたいです (polite), 食べたくないです (don't want to). ほしい, by contrast, is already an い-adjective on its own and attaches directly to a NOUN to mean \"want [that thing]\": 水がほしいです (\"I want water\"). Here's the trap worth knowing cold: because both たい and ほしい are grammatically adjectives, not action verbs, the thing wanted is often marked with が instead of を — 田中さんはラーメンが食べたいです is more natural than ...を食べたいです, the same way you'd say \"ramen is desirable to Tanaka-san\" rather than \"Tanaka-san performs wanting upon ramen.\" Both を and が are technically accepted with たい, but native speakers reach for が far more often, and with ほしい, が is the only real option.",
            "examples": [
                {
                    "target": "田中さんはラーメンが食べたいです。",
                    "reading": "Tanaka-san wa ra-men ga tabetai desu.",
                    "translation": "Tanaka-san wants to eat ramen."
                },
                {
                    "target": "わたしは水がほしいです。",
                    "reading": "Watashi wa mizu ga hoshii desu.",
                    "translation": "I want water."
                },
                {
                    "target": "田中さんは寿司屋でもラーメンが食べたいです。",
                    "reading": "Tanaka-san wa sushiya de mo ra-men ga tabetai desu.",
                    "translation": "Even at the sushi restaurant, Tanaka-san wants to eat ramen."
                },
                {
                    "target": "何が飲みたいですか。",
                    "reading": "Nani ga nomitai desu ka.",
                    "translation": "What do you want to drink?"
                }
            ],
            "mnemonics": [
                "たい rhymes with \"tie\" — tie the desire directly onto the verb stem (食べ + たい).",
                "ほしい hides 星 (hoshi, \"star\") in its sound — think \"wishing on a star\" for a thing you want, not an action you want to do.",
                "Both たい and ほしい are secretly adjectives wearing a verb's clothes, which is exactly why they pull が instead of を — same logic you'll meet again with 好き in Lesson 4."
            ],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "田中さんはラーメン___食べたいです。 (Tanaka-san wants to eat ramen.)",
                    "options": [
                        "を (27.1)",
                        "に (27.2)",
                        "が (27.3)",
                        "は (27.4)"
                    ],
                    "answerIndex": 2,
                    "explanation": "たい pulls が more naturally than を because it's grammatically an adjective."
                },
                {
                    "prompt": "わたしは水___ほしいです。 (I want water.)",
                    "options": [
                        "を",
                        "は",
                        "も",
                        "が"
                    ],
                    "answerIndex": 3,
                    "explanation": "ほしい always takes が for the thing wanted."
                },
                {
                    "prompt": "食べます → ___ (want to eat)",
                    "options": [
                        "食べたい",
                        "食べます たい",
                        "食べるたい",
                        "食べいたい"
                    ],
                    "answerIndex": 0,
                    "explanation": "Drop ます from the stem and add たい directly: 食べ + たい."
                },
                {
                    "prompt": "What part of speech do たい and ほしい both function as, once attached/used?",
                    "options": [
                        "Nouns",
                        "い-adjectives",
                        "Counters",
                        "Particles"
                    ],
                    "answerIndex": 1,
                    "explanation": "Both conjugate exactly like い-adjectives (たいです/たくないです, ほしいです/ほしくないです)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: 'What do you want to drink?'",
                    "options": [
                        "何を飲みますですか。 (27.1)",
                        "何がほしいたいですか。 (27.2)",
                        "何が飲みたいですか。 (27.3)",
                        "何飲みたいをですか。 (27.4)"
                    ],
                    "answerIndex": 2,
                    "explanation": "何が + ます-stem(飲み) + たい + です + か is the correct pattern."
                },
                {
                    "prompt": "Why does 水がほしいです sound more natural than 水をほしいです to a native speaker?",
                    "options": [
                        "ほしい is an adjective describing the water as desirable, not a verb acting on the water, so が fits its grammar",
                        "There's no difference at all",
                        "ほしい only works with proper nouns",
                        "を is grammatically forbidden entirely"
                    ],
                    "answerIndex": 0,
                    "explanation": "This is the core grammar-trap logic explained in the lesson."
                },
                {
                    "prompt": "飲みます becomes what in the たい form?",
                    "options": [
                        "飲むたい",
                        "飲みますたい",
                        "飲たい",
                        "飲みたい"
                    ],
                    "answerIndex": 3,
                    "explanation": "Stem 飲み + たい = 飲みたい."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "田中さんはラーメン___食べたいです。",
                    "options": [
                        "は",
                        "を",
                        "が",
                        "に"
                    ],
                    "answerIndex": 2,
                    "explanation": "が is the natural particle with たい."
                },
                {
                    "prompt": "わたしは水___ほしいです。",
                    "options": [
                        "を",
                        "が",
                        "も",
                        "は"
                    ],
                    "answerIndex": 1,
                    "explanation": "ほしい requires が."
                },
                {
                    "prompt": "食べます → ___ (want to eat)",
                    "options": [
                        "食べたい",
                        "食べいたい",
                        "食べるたい",
                        "食べますたい"
                    ],
                    "answerIndex": 0,
                    "explanation": "食べ (stem) + たい."
                },
                {
                    "prompt": "飲みます → ___ (want to drink)",
                    "options": [
                        "飲たい",
                        "飲むたい",
                        "飲みますたい",
                        "飲みたい"
                    ],
                    "answerIndex": 3,
                    "explanation": "飲み (stem) + たい."
                },
                {
                    "prompt": "Why do たい and ほしい both favor が over を for the thing wanted?",
                    "options": [
                        "Random exception with no reason",
                        "を is only for food, not drinks",
                        "Both are grammatically い-adjectives describing a state, not verbs performing an action on an object",
                        "が is simply more polite"
                    ],
                    "answerIndex": 2,
                    "explanation": "This is the exact grammar-trap logic taught in the lesson, previewing the same pattern for 好き in Lesson 4."
                },
                {
                    "prompt": "Translate: 'Even at the sushi restaurant, Tanaka-san wants to eat ramen.'",
                    "options": [
                        "田中さんは寿司屋でもラーメンが食べます。",
                        "田中さんは寿司屋でもラーメンが食べたいです。",
                        "田中さんは寿司屋でラーメンを食べたいでした。",
                        "田中さんは寿司屋がラーメンを食べたいです。"
                    ],
                    "answerIndex": 1,
                    "explanation": "でも (even at) + ラーメンが (desired object) + 食べたいです (want to eat, polite)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u6-l3": {
        "id": "ja-u6-l3",
        "unit": "ja-u6",
        "level": "A1",
        "objective": "Order food and drinks politely using 〜をください and recognize the real restaurant etiquette that surrounds ordering in Japan.",
        "prerequisites": [
            "ja-u6-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u6-l1",
                "ja-u6-l2"
            ]
        },
        "presentation": {
            "explanation": "ください is the polite \"please give me\" and attaches straight after Noun + を: [Noun]をください。 It's the single most useful phrase for ordering anything, buying anything, or requesting anything handed to you. To order more than one of something, drop in a counter before ください: ビールを二つください (\"two beers, please\") uses つ, the generic counter from Unit 2. Structurally ください is a shortened, softened form of the verb くださる (\"[a social superior] gives\"), which is why it already sounds humble and polite without needing です — never say 〜をくださいです, that's redundant and unnatural.",
            "examples": [
                {
                    "target": "すみません、ラーメンをください。",
                    "reading": "Sumimasen, ra-men o kudasai.",
                    "translation": "Excuse me, ramen please."
                },
                {
                    "target": "水をください。",
                    "reading": "Mizu o kudasai.",
                    "translation": "Water, please."
                },
                {
                    "target": "ビールを二つください。",
                    "reading": "Bi-ru o futatsu kudasai.",
                    "translation": "Two beers, please."
                },
                {
                    "target": "店員：いらっしゃいませ！ご注文は？　田中さん：ラーメンをください。",
                    "reading": "Ten'in: Irasshaimase! Gochuumon wa? / Tanaka-san: Ra-men o kudasai.",
                    "translation": "Staff: Welcome! What'll you have? / Tanaka-san: Ramen, please."
                }
            ],
            "mnemonics": [
                "すみません isn't just \"sorry\" — in a restaurant it's your summon button. Say it once, a little louder, and staff come to you; there's no separate word for \"waiter!\""
            ],
            "culturalNotes": [
                "In Japanese restaurants you call out すみません to bring staff to your table — waving, snapping, or making prolonged eye contact from across the room reads as rude. Tipping is not customary and can actively confuse or embarrass staff: excellent, attentive service (omotenashi) is considered already built into the price and a matter of professional pride, not something purchased extra.",
                "いただきます, said just before eating, and ごちそうさまでした, said after finishing, aren't optional politeness — they're closer to a small ritual of thanks toward the food, the cook, and everyone in the chain that brought the meal to the table. Skipping them at a family meal in Japan would be noticed the way skipping \"thank you\" would be elsewhere."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "水___ください。 (Water, please.)",
                    "options": [
                        "が (28.1)",
                        "は (28.2)",
                        "に (28.3)",
                        "を (28.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "ください follows Noun + を."
                },
                {
                    "prompt": "ビールを二つ___。 (Two beers, please.)",
                    "options": [
                        "くださいです",
                        "たいです",
                        "ほしいです",
                        "ください"
                    ],
                    "answerIndex": 3,
                    "explanation": "ください never takes です after it — it's already a complete polite request."
                },
                {
                    "prompt": "店員: いらっしゃいませ！ご注文は？ — what is the staff member doing?",
                    "options": [
                        "Welcoming the customer and asking for their order",
                        "Apologizing",
                        "Asking for payment",
                        "Saying goodbye"
                    ],
                    "answerIndex": 0,
                    "explanation": "いらっしゃいませ = welcome; ご注文は？ = what's your order?"
                },
                {
                    "prompt": "How do you get a server's attention in a Japanese restaurant?",
                    "options": [
                        "Snap your fingers",
                        "Call out すみません",
                        "Make prolonged eye contact from across the room",
                        "Wave your hand high"
                    ],
                    "answerIndex": 1,
                    "explanation": "すみません is the standard, polite way to summon staff."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: 'Excuse me, ramen please.'",
                    "options": [
                        "すみません、ラーメンをください。 (28.1)",
                        "すみません、ラーメンがください。 (28.2)",
                        "すみません、ラーメンをくださいです。 (28.3)",
                        "すみません、ラーメンほしいください。 (28.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "すみません + Noun + を + ください, with no です added."
                },
                {
                    "prompt": "Why is 〜をくださいです considered wrong?",
                    "options": [
                        "It's actually correct",
                        "ください is already a complete, polite request form — です is redundant on top of it",
                        "です is required after every sentence",
                        "を should be が instead"
                    ],
                    "answerIndex": 1,
                    "explanation": "ください is a softened imperative derived from くださる and needs no です."
                },
                {
                    "prompt": "What does tipping typically communicate in a Japanese restaurant context?",
                    "options": [
                        "Gratitude, exactly as in the US",
                        "Confusion or mild embarrassment — great service is already priced in as professional pride",
                        "It's mandatory and expected",
                        "It's illegal"
                    ],
                    "answerIndex": 1,
                    "explanation": "This is the specific cultural note taught in the lesson, not just \"it's polite not to tip.\""
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "水___ください。",
                    "options": [
                        "に",
                        "を",
                        "が",
                        "は"
                    ],
                    "answerIndex": 1,
                    "explanation": "Noun + を + ください."
                },
                {
                    "prompt": "ビールを二つ___。",
                    "options": [
                        "ください",
                        "ほしいです",
                        "くださいです",
                        "たいです"
                    ],
                    "answerIndex": 0,
                    "explanation": "ください stands alone; no です needed."
                },
                {
                    "prompt": "What phrase do you call out to summon a server in Japan?",
                    "options": [
                        "ウェイター！",
                        "ください",
                        "いただきます",
                        "すみません"
                    ],
                    "answerIndex": 3,
                    "explanation": "すみません is the standard way to get staff attention."
                },
                {
                    "prompt": "What does いらっしゃいませ mean?",
                    "options": [
                        "Thank you for the meal",
                        "The check, please",
                        "Welcome (said by shop/restaurant staff)",
                        "Goodbye"
                    ],
                    "answerIndex": 2,
                    "explanation": "It's the standard greeting shouted by staff when a customer enters."
                },
                {
                    "prompt": "Why don't you typically tip at a Japanese restaurant?",
                    "options": [
                        "Tipping is offensive and never happens anywhere in Japan for any service",
                        "Attentive service is already considered part of the price and professional pride, so a tip can confuse or embarrass staff",
                        "Prices already include a 20% tip on the receipt",
                        "It's against the law"
                    ],
                    "answerIndex": 1,
                    "explanation": "This captures the specific social reasoning, not just the fact that tipping is rare."
                },
                {
                    "prompt": "Translate: 'Ramen, please.' (as an order)",
                    "options": [
                        "ラーメンをください。",
                        "ラーメンがください。",
                        "ラーメンほしいください。",
                        "ラーメンをくださいです。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Noun + を + ください."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u6-l4": {
        "id": "ja-u6-l4",
        "unit": "ja-u6",
        "level": "A1",
        "objective": "Express likes and dislikes about food with 好き/嫌い and が, and ask others about their preferences with 何が好きですか, while avoiding the classic を-instead-of-が mistake.",
        "prerequisites": [
            "ja-u6-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u6-l1",
                "ja-u6-l2",
                "ja-u6-l3"
            ]
        },
        "presentation": {
            "explanation": "好き (like) and 嫌い (dislike) are な-adjectives, not verbs — grammatically they describe a QUALITY of the noun (\"likable,\" \"dislikable\"), not an action done to it. That means the liked or disliked thing is marked with が, never を: わたしは寿司が好きです literally reads closer to \"as for me, sushi is likable\" than \"I like sushi\" — the liking isn't something you DO to the sushi, it's a state the sushi is in, from your point of view. This is the single most common particle mistake English-speaking learners make with 好き, precisely because English grammar makes \"sushi\" the object of the verb \"like.\" You already primed this exact pattern in Lesson 2 with たい and ほしい — が for anything grammatically adjective-shaped is now a pattern you can trust. Intensity scale: 大好き (love, big-like) > 好き (like) > あまり好きじゃない (don't like much) > 嫌い (dislike) > 大嫌い (hate).",
            "examples": [
                {
                    "target": "わたしは寿司が好きです。",
                    "reading": "Watashi wa sushi ga suki desu.",
                    "translation": "I like sushi."
                },
                {
                    "target": "田中さんはラーメンが大好きです。",
                    "reading": "Tanaka-san wa ra-men ga daisuki desu.",
                    "translation": "Tanaka-san loves ramen."
                },
                {
                    "target": "わたしは辛い食べ物が嫌いです。",
                    "reading": "Watashi wa karai tabemono ga kirai desu.",
                    "translation": "I dislike spicy food."
                },
                {
                    "target": "田中さんは寿司が好きですか。あまり好きじゃないです。",
                    "reading": "Tanaka-san wa sushi ga suki desu ka. Amari suki ja nai desu.",
                    "translation": "Does Tanaka-san like sushi? He doesn't like it very much."
                },
                {
                    "target": "何が好きですか。",
                    "reading": "Nani ga suki desu ka.",
                    "translation": "What do you like?"
                }
            ],
            "mnemonics": [
                "好き is built from 女 (woman) + 子 (child) in its old etymology — a picture of natural affection. Whatever the history, remember it grammatically the same way as たい/ほしい from Lesson 2: adjective-shaped feeling, が-marked object.",
                "If you catch yourself about to say 〜を好きです, stop: 好き never touches を. It's not an action, it's a state — が every time."
            ],
            "culturalNotes": [
                "Bluntly saying 嫌い about food someone cooked or served you can land as harsh in Japan. The softer, more common move is あまり好きじゃないです (\"I don't like it very much\") or ちょっと苦手です (\"it's a bit of a weak point for me\") — 苦手 literally means \"weak point/bad at,\" letting you decline something without directly insulting the dish or the person who made it."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "わたしは寿司___好きです。 (I like sushi.)",
                    "options": [
                        "は (29.1)",
                        "を (29.2)",
                        "に (29.3)",
                        "が (29.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "好き is a な-adjective; the liked thing takes が, not を."
                },
                {
                    "prompt": "田中さんはラーメン___大好きです。 (Tanaka-san loves ramen.)",
                    "options": [
                        "を",
                        "は",
                        "も",
                        "が"
                    ],
                    "answerIndex": 3,
                    "explanation": "Same が rule applies to 大好き."
                },
                {
                    "prompt": "何___好きですか。 (What do you like?)",
                    "options": [
                        "を",
                        "が",
                        "で",
                        "は"
                    ],
                    "answerIndex": 1,
                    "explanation": "何 as the liked thing still takes が."
                },
                {
                    "prompt": "What softer alternative to 嫌い would a polite guest use to decline a dish without offending the cook?",
                    "options": [
                        "大嫌いです",
                        "There is no softer alternative",
                        "あまり好きじゃないです / ちょっと苦手です",
                        "を好きじゃないです"
                    ],
                    "answerIndex": 2,
                    "explanation": "These are the two softening phrases given in the cultural note."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Why can't 好き take を, even though \"like [food]\" sounds like an object-taking action in English?",
                    "options": [
                        "It's a random exception (29.1)",
                        "好き secretly means something different (29.2)",
                        "好き is grammatically an adjective describing a state, not a verb performing an action — so が marks it, same as たい/ほしい from Lesson 2 (29.3)",
                        "を is reserved only for food nouns (29.4)"
                    ],
                    "answerIndex": 2,
                    "explanation": "This connects directly back to the たい/ほしい grammar-trap logic from Lesson 2."
                },
                {
                    "prompt": "Rank from most to least positive: 大好き, あまり好きじゃない, 好き, 大嫌い, 嫌い",
                    "options": [
                        "大好き > 好き > あまり好きじゃない > 嫌い > 大嫌い",
                        "大嫌い > 嫌い > あまり好きじゃない > 好き > 大好き",
                        "嫌い > 大嫌い > 好き > 大好き > あまり好きじゃない",
                        "好き > 大好き > 嫌い > あまり好きじゃない > 大嫌い"
                    ],
                    "answerIndex": 0,
                    "explanation": "This is the intensity scale given directly in the explanation."
                },
                {
                    "prompt": "Translate: 'Tanaka-san loves ramen.'",
                    "options": [
                        "田中さんはラーメンが大好きです。",
                        "田中さんはラーメンを大好きです。",
                        "田中さんはラーメン大好きが です。",
                        "田中さんはラーメンが大好きでした。"
                    ],
                    "answerIndex": 0,
                    "explanation": "が marks the loved thing; です keeps it present-tense polite."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "わたしは寿司___好きです。",
                    "options": [
                        "が",
                        "を",
                        "に",
                        "は"
                    ],
                    "answerIndex": 0,
                    "explanation": "が marks the liked thing."
                },
                {
                    "prompt": "田中さんはラーメン___大好きです。",
                    "options": [
                        "を",
                        "も",
                        "は",
                        "が"
                    ],
                    "answerIndex": 3,
                    "explanation": "が marks 大好き's object too."
                },
                {
                    "prompt": "何___好きですか。",
                    "options": [
                        "を",
                        "は",
                        "が",
                        "で"
                    ],
                    "answerIndex": 2,
                    "explanation": "何 as the liked thing takes が."
                },
                {
                    "prompt": "わたしは辛い食べ物___嫌いです。 (I dislike spicy food.)",
                    "options": [
                        "を",
                        "が",
                        "は",
                        "も"
                    ],
                    "answerIndex": 1,
                    "explanation": "嫌い follows the same が rule as 好き."
                },
                {
                    "prompt": "What is the grammatical reason 好き/嫌い take が instead of を?",
                    "options": [
                        "They are な-adjectives describing a state of the noun, not verbs acting on it — exactly like たい/ほしい",
                        "No reason, it's arbitrary",
                        "を is forbidden in polite speech",
                        "が is only used with food vocabulary"
                    ],
                    "answerIndex": 0,
                    "explanation": "This directly restates the core grammar point of the lesson."
                },
                {
                    "prompt": "What does ちょっと苦手です politely communicate about a food?",
                    "options": [
                        "You are allergic to it",
                        "It's your favorite food",
                        "You've never tried it",
                        "You dislike it, without bluntly saying 嫌い and risking offense"
                    ],
                    "answerIndex": 3,
                    "explanation": "苦手 (weak point) is the softening phrase from the cultural note."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u6-l5": {
        "id": "ja-u6-l5",
        "unit": "ja-u6",
        "level": "A1",
        "objective": "Produce a connected restaurant-ordering paragraph that combines food vocabulary, を, たい/ほしい, ください, and 好き/嫌い with が.",
        "prerequisites": [
            "ja-u6-l1",
            "ja-u6-l2",
            "ja-u6-l3",
            "ja-u6-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u6-l1",
                "ja-u6-l2",
                "ja-u6-l3",
                "ja-u6-l4"
            ]
        },
        "presentation": {
            "explanation": "This capstone combines every piece of Unit 6 into one connected mini-story: object-marking を (Lesson 1), desire with たい/ほしい (Lesson 2), ordering with ください (Lesson 3), and preferences with 好き/嫌い + が (Lesson 4) — all of it running through the now-familiar running joke that 田中さん orders ramen absolutely everywhere, sushi restaurant included. One new connector gets a preview here, the same way が (but) got previewed back in the Unit 5 capstone: から means \"because,\" attaching directly after a plain-form or です-ending clause to give a reason for what follows. わたしは日本料理が好きです。今日は寿司が食べたいです。でも、田中さんはラーメンが好きですから、ラーメンをください。田中さんは辛い食べ物が嫌いですから、辛くない料理がほしいです。",
            "examples": [
                {
                    "target": "わたしは日本料理が好きです。",
                    "reading": "Watashi wa nihon ryouri ga suki desu.",
                    "translation": "I like Japanese food."
                },
                {
                    "target": "今日は寿司が食べたいです。",
                    "reading": "Kyou wa sushi ga tabetai desu.",
                    "translation": "Today I want to eat sushi."
                },
                {
                    "target": "でも、田中さんはラーメンが好きですから、ラーメンをください。",
                    "reading": "Demo, Tanaka-san wa ra-men ga suki desu kara, ra-men o kudasai.",
                    "translation": "But Tanaka-san likes ramen, so — ramen, please."
                },
                {
                    "target": "田中さんは辛い食べ物が嫌いですから、辛くない料理がほしいです。",
                    "reading": "Tanaka-san wa karai tabemono ga kirai desu kara, karakunai ryouri ga hoshii desu.",
                    "translation": "Tanaka-san dislikes spicy food, so he wants a dish that isn't spicy."
                }
            ],
            "mnemonics": [
                "から (because) after a です-ending clause is the reason-connector — think of it as a small preview, the same trick as が (but) from the Unit 5 capstone. You'll formalize から fully in a later unit; for now, recognize \"...ですから、...\" as \"...because..., ...\"."
            ],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "わたしは日本料理___好きです。 (I like Japanese food.)",
                    "options": [
                        "を (30.1)",
                        "が (30.2)",
                        "は (30.3)",
                        "に (30.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "好き still takes が, straight from Lesson 4."
                },
                {
                    "prompt": "今日は寿司___食べたいです。 (Today I want to eat sushi.)",
                    "options": [
                        "を",
                        "が",
                        "は",
                        "で"
                    ],
                    "answerIndex": 1,
                    "explanation": "たい favors が for the wanted object, from Lesson 2."
                },
                {
                    "prompt": "田中さんはラーメンが好きです___、ラーメンをください。 (...because..., ramen please.)",
                    "options": [
                        "が",
                        "から",
                        "を",
                        "も"
                    ],
                    "answerIndex": 1,
                    "explanation": "から attaches after a です-ending clause to mean \"because.\""
                },
                {
                    "prompt": "What four Unit 6 elements does this capstone combine?",
                    "options": [
                        "を, たい/ほしい, ください, and 好き/嫌い with が",
                        "Only を and ください",
                        "Only 好き and 嫌い",
                        "Only counters"
                    ],
                    "answerIndex": 0,
                    "explanation": "This is the explicit combination the capstone is built around."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: 'Tanaka-san dislikes spicy food, so he wants a dish that isn't spicy.'",
                    "options": [
                        "田中さんは辛い食べ物が嫌いですが、辛くない料理がほしいです。 (30.1)",
                        "田中さんは辛い食べ物が嫌いですから、辛くない料理がほしいです。 (30.2)",
                        "田中さんは辛い食べ物が嫌いです、辛くない料理がほしいです。 (30.3)",
                        "田中さんは辛い食べ物を嫌いですから、辛くない料理をほしいです。 (30.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "嫌い and ほしい both take が, and から (because) is the correct connector here, not が/but."
                },
                {
                    "prompt": "What does the connector から added in this lesson mean, and where does it attach?",
                    "options": [
                        "\"And,\" joining two nouns",
                        "\"But,\" attaching mid-word",
                        "\"If,\" starting a conditional",
                        "\"Because,\" attaching after a です-ending (or plain-form) clause to give a reason"
                    ],
                    "answerIndex": 3,
                    "explanation": "から = because, previewed exactly as described in the explanation."
                },
                {
                    "prompt": "What running joke has followed 田中さん since Lesson 1 of this unit?",
                    "options": [
                        "He never eats at all",
                        "He only drinks water",
                        "He hates all Japanese food",
                        "He orders ramen everywhere, even at a sushi restaurant"
                    ],
                    "answerIndex": 3,
                    "explanation": "This is the continuity thread running through every example in Unit 6."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "わたしは日本料理___好きです。",
                    "options": [
                        "に",
                        "を",
                        "は",
                        "が"
                    ],
                    "answerIndex": 3,
                    "explanation": "好き takes が."
                },
                {
                    "prompt": "今日は寿司___食べたいです。",
                    "options": [
                        "を",
                        "は",
                        "が",
                        "で"
                    ],
                    "answerIndex": 2,
                    "explanation": "たい favors が."
                },
                {
                    "prompt": "田中さんはラーメンが好きです___、ラーメンをください。",
                    "options": [
                        "を",
                        "から",
                        "も",
                        "が"
                    ],
                    "answerIndex": 1,
                    "explanation": "から = because."
                },
                {
                    "prompt": "田中さんは辛い食べ物___嫌いですから、辛くない料理がほしいです。",
                    "options": [
                        "が",
                        "は",
                        "も",
                        "を"
                    ],
                    "answerIndex": 0,
                    "explanation": "嫌い takes が, same rule as 好き."
                },
                {
                    "prompt": "辛くない料理___ほしいです。 (He wants a dish that isn't spicy.)",
                    "options": [
                        "を",
                        "は",
                        "に",
                        "が"
                    ],
                    "answerIndex": 3,
                    "explanation": "ほしい always takes が."
                },
                {
                    "prompt": "What is the overall skill this capstone paragraph is testing?",
                    "options": [
                        "Only reading kanji aloud",
                        "Only counting objects with つ",
                        "Producing a connected, multi-sentence food-preference and ordering narrative combining を, たい/ほしい, ください, and 好き/嫌い with が",
                        "Isolated vocabulary recall only"
                    ],
                    "answerIndex": 2,
                    "explanation": "This is the explicit goal stated in the lesson explanation."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u7-l1": {
        "id": "ja-u7-l1",
        "unit": "ja-u7",
        "level": "A2",
        "objective": "Say what something was or wasn't using でした for nouns and な-adjectives, plus casual じゃなかった(です) and formal ではありませんでした negatives.",
        "prerequisites": [
            "ja-u6-l1",
            "ja-u6-l2",
            "ja-u6-l3",
            "ja-u6-l4",
            "ja-u6-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u6-l3",
                "ja-u6-l4",
                "ja-u6-l5"
            ]
        },
        "presentation": {
            "explanation": "です has exactly one past-tense form, and it never changes for person or number the way English \"was/were\" does: でした. Swap す for した and you're done — 学生です (is a student) → 学生でした (was a student), 静かです (is quiet, a な-adjective) → 静かでした (was quiet). な-adjectives conjugate exactly like nouns here, which is the whole reason they're called \"na-adjectives\" and not real adjectives. Negating it in the past gives two registers, same split as Unit 4's present-tense negative: casual じゃなかった(です) and formal ではありませんでした. Both mean the same thing — じゃなかったです is what you'd say at a family dinner, ではありませんでした is what shows up in a business email. Today's case study: 田中さん's disappointing Sunday at the zoo, which — for once — involved a search for ramen that came up completely empty.",
            "examples": [
                {
                    "target": "昨日は日曜日でした。",
                    "reading": "Kinou wa nichiyoubi deshita.",
                    "translation": "Yesterday was Sunday."
                },
                {
                    "target": "動物園はとても静かでした。",
                    "reading": "Doubutsuen wa totemo shizuka deshita.",
                    "translation": "The zoo was very quiet. (な-adjective 静か + でした)"
                },
                {
                    "target": "でも、動物園はラーメン屋じゃなかったです。",
                    "reading": "Demo, doubutsuen wa ra-men-ya ja nakatta desu.",
                    "translation": "But the zoo wasn't a ramen shop. (casual negative past)"
                },
                {
                    "target": "田中さんは元気ではありませんでした。",
                    "reading": "Tanaka-san wa genki de wa arimasen deshita.",
                    "translation": "Tanaka-san wasn't well. (formal negative past)"
                }
            ],
            "mnemonics": [
                "でした = です's past-tense costume — one swap (す→した), and it never conjugates for person or number the way English \"was/were\" does. One form, every subject, always.",
                "Negative past has two outfits: casual じゃなかった(です) for friends, formal ではありませんでした for your boss. Same meaning, different formality — exactly the same split you learned for present-tense negatives back in Unit 4."
            ],
            "culturalNotes": [
                "ではありませんでした sounds noticeably stiff in daily conversation — native speakers reach for it in writing, announcements, and customer service, but among friends じゃなかったです (or even plain じゃなかった) is the natural choice."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "昨日は日曜日___。 (Yesterday was Sunday.)",
                    "options": [
                        "です (31.1)",
                        "だった (31.2)",
                        "でしょう (31.3)",
                        "でした (31.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "でした is the polite past of です — one fixed form, no conjugation for person/number."
                },
                {
                    "prompt": "動物園はとても静か___。 (The zoo was very quiet.)",
                    "options": [
                        "でしたか",
                        "ないでした",
                        "でした",
                        "かったです"
                    ],
                    "answerIndex": 2,
                    "explanation": "静か is a な-adjective, so it takes でした in the past exactly like a noun does."
                },
                {
                    "prompt": "動物園はラーメン屋___。 (casual: wasn't a ramen shop)",
                    "options": [
                        "じゃないです",
                        "でした",
                        "じゃなかったです",
                        "じゃありますでした"
                    ],
                    "answerIndex": 2,
                    "explanation": "Casual negative past = じゃなかった(です)."
                },
                {
                    "prompt": "田中さんは元気___。 (formal: wasn't well)",
                    "options": [
                        "でした",
                        "ではありませんでした",
                        "ではありません",
                        "じゃなかった"
                    ],
                    "answerIndex": 1,
                    "explanation": "Formal negative past = ではありませんでした."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: 'The zoo was very quiet.'",
                    "options": [
                        "動物園はとても静くなかったです。 (31.1)",
                        "動物園はとても静かです。 (31.2)",
                        "動物園はとても静かだった でした。 (31.3)",
                        "動物園はとても静かでした。 (31.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "な-adjective positive past is stem + でした, just like a noun."
                },
                {
                    "prompt": "What's the one thing that never changes about でした, no matter who or what the subject is?",
                    "options": [
                        "Its form — it's always でした regardless of person or number",
                        "It must always be negative",
                        "It only works with animals",
                        "It never appears in questions"
                    ],
                    "answerIndex": 0,
                    "explanation": "Unlike English 'was/were,' でした is invariant across every subject."
                },
                {
                    "prompt": "Translate: 'But the zoo wasn't a ramen shop.'",
                    "options": [
                        "でも、動物園はラーメン屋じゃありますでした。",
                        "でも、動物園はラーメン屋ではなかった です。",
                        "でも、動物園はラーメン屋じゃなかったです。",
                        "でも、動物園はラーメン屋じゃないでした。"
                    ],
                    "answerIndex": 2,
                    "explanation": "The correct casual negative past pattern is noun + じゃなかったです."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "昨日は日曜日___。",
                    "options": [
                        "です",
                        "だった",
                        "でした",
                        "でしょう"
                    ],
                    "answerIndex": 2,
                    "explanation": "でした is the polite past of です."
                },
                {
                    "prompt": "動物園はとても静か___。",
                    "options": [
                        "かったです",
                        "でした",
                        "でしたか",
                        "ないでした"
                    ],
                    "answerIndex": 1,
                    "explanation": "な-adjectives take でした in the past, like nouns."
                },
                {
                    "prompt": "動物園はラーメン屋___。 (casual negative)",
                    "options": [
                        "じゃなかったです",
                        "でした",
                        "じゃないです",
                        "じゃありますでした"
                    ],
                    "answerIndex": 0,
                    "explanation": "じゃなかった(です) is the casual negative past."
                },
                {
                    "prompt": "田中さんは元気___。 (formal negative)",
                    "options": [
                        "ではありません",
                        "でした",
                        "じゃなかった",
                        "ではありませんでした"
                    ],
                    "answerIndex": 3,
                    "explanation": "ではありませんでした is the formal negative past."
                },
                {
                    "prompt": "How does です's past-tense form change based on the subject's person or number?",
                    "options": [
                        "It changes to だった for plural subjects",
                        "It adds -s for plural subjects",
                        "It doesn't change at all — でした is fixed regardless of person or number",
                        "It becomes でしたら"
                    ],
                    "answerIndex": 2,
                    "explanation": "でした is invariant — no subject agreement, unlike English 'was/were.'"
                },
                {
                    "prompt": "Which register would じゃなかったです fit best?",
                    "options": [
                        "A legal document",
                        "A casual conversation with friends or family",
                        "A textbook grammar appendix only",
                        "A formal business email"
                    ],
                    "answerIndex": 1,
                    "explanation": "じゃなかったです is the everyday casual-but-polite negative past."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u7-l2": {
        "id": "ja-u7-l2",
        "unit": "ja-u7",
        "level": "A2",
        "objective": "Form the past tense of i-adjectives using かった (positive) and くなかった (negative), including the irregular いい → よかった.",
        "prerequisites": [
            "ja-u7-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u7-l1"
            ]
        },
        "presentation": {
            "explanation": "い-adjectives never touch です for their actual tense — です after an i-adjective is just a politeness add-on, never a conjugation. The real past marker replaces the final い with かった: 楽しい (fun) → 楽しかった (was fun). Negative past drops the い and adds くなかった: 楽しくなかった (wasn't fun). Stack です on either one purely for politeness: 楽しかったです, 楽しくなかったです — the です itself never changes form here, unlike Lesson 1's でした. One essential irregular: いい (good) does NOT become いかった. It secretly borrows the old form よい for every conjugation except the plain present, so past is よかった. Continuing the zoo saga: the walk was 楽しかった, but finding ramen was 難しかった (difficult), and the food-cart curry bread, sadly, was 美味しくなかった (wasn't tasty).",
            "examples": [
                {
                    "target": "動物園の散歩は楽しかったです。",
                    "reading": "Doubutsuen no sanpo wa tanoshikatta desu.",
                    "translation": "The walk around the zoo was fun."
                },
                {
                    "target": "でも、ラーメンを見つけるのは難しかったです。",
                    "reading": "Demo, ra-men o mitsukeru no wa muzukashikatta desu.",
                    "translation": "But finding ramen was difficult."
                },
                {
                    "target": "売店のカレーパンは美味しくなかったです。",
                    "reading": "Baiten no kare-pan wa oishikunakatta desu.",
                    "translation": "The curry bread at the stand wasn't tasty."
                },
                {
                    "target": "天気はよかったです。",
                    "reading": "Tenki wa yokatta desu.",
                    "translation": "The weather was good. (いい → よかった, irregular)"
                }
            ],
            "mnemonics": [
                "い-adjective past: chop the い, glue on かった. 楽し(い) → 楽しかった. です rides on top purely for politeness — it never carries the tense itself, unlike with nouns and な-adjectives in Lesson 1.",
                "いい is the one troublemaker: it quietly swaps to よい for every conjugation except the plain present tense. Past isn't いかった, it's よかった — memorize this single exception and every other i-adjective just follows the かった/くなかった rule."
            ],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "動物園の散歩は楽し___です。 (The walk was fun.)",
                    "options": [
                        "かった (32.1)",
                        "だった (32.2)",
                        "いでした (32.3)",
                        "くない (32.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "い-adjective positive past: drop い, add かった."
                },
                {
                    "prompt": "カレーパンは美味し___です。 (The curry bread wasn't tasty.)",
                    "options": [
                        "くなかった",
                        "かったない",
                        "じゃなかった",
                        "くないでした"
                    ],
                    "answerIndex": 0,
                    "explanation": "い-adjective negative past: drop い, add くなかった."
                },
                {
                    "prompt": "天気は___です。 (The weather was good.)",
                    "options": [
                        "よかった",
                        "いかった",
                        "よいでした",
                        "いいかった"
                    ],
                    "answerIndex": 0,
                    "explanation": "いい is irregular — its past is よかった, never いかった."
                },
                {
                    "prompt": "Why is 楽しいでした wrong for 'was fun'?",
                    "options": [
                        "It's actually correct",
                        "い-adjectives mark their own tense with かった/くなかった; です never carries the tense here",
                        "でした can only follow verbs",
                        "楽しい can't be used with です at all"
                    ],
                    "answerIndex": 1,
                    "explanation": "This is the exact trap the explanation warns about — です is decoration, not the tense marker, for i-adjectives."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: 'But finding ramen was difficult.'",
                    "options": [
                        "でも、ラーメンを見つけるのは難しいでした。 (32.1)",
                        "でも、ラーメンを見つけるのは難しくなかったです。 (32.2)",
                        "でも、ラーメンを見つけるのは難しかったです。 (32.3)",
                        "でも、ラーメンを見つけるのは難しだったです。 (32.4)"
                    ],
                    "answerIndex": 2,
                    "explanation": "難しい → 難しかった (positive past), plus です for politeness."
                },
                {
                    "prompt": "What's the irregular past form of いい (good), and why doesn't it follow the normal かった rule directly on いい?",
                    "options": [
                        "よかった — いい secretly uses the old stem よい for every conjugation except plain present",
                        "いいでした — いい copies noun conjugation",
                        "よくない — that's the negative present, not past",
                        "いかった — it's a totally normal い-adjective"
                    ],
                    "answerIndex": 0,
                    "explanation": "いい/よい is the single most common irregular i-adjective in Japanese."
                },
                {
                    "prompt": "Translate: 'The curry bread at the stand wasn't tasty.'",
                    "options": [
                        "売店のカレーパンは美味しいじゃなかったです。",
                        "売店のカレーパンは美味しかったくないです。",
                        "売店のカレーパンは美味しくないでした。",
                        "売店のカレーパンは美味しくなかったです。"
                    ],
                    "answerIndex": 3,
                    "explanation": "美味しい → 美味しくなかった is the correct negative-past chain."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "動物園の散歩は楽し___です。",
                    "options": [
                        "くない",
                        "かった",
                        "だった",
                        "いでした"
                    ],
                    "answerIndex": 1,
                    "explanation": "楽しい → 楽しかった."
                },
                {
                    "prompt": "カレーパンは美味し___です。",
                    "options": [
                        "くなかった",
                        "くないでした",
                        "じゃなかった",
                        "かったない"
                    ],
                    "answerIndex": 0,
                    "explanation": "美味しい → 美味しくなかった."
                },
                {
                    "prompt": "天気は___です。",
                    "options": [
                        "いいかった",
                        "いかった",
                        "よいでした",
                        "よかった"
                    ],
                    "answerIndex": 3,
                    "explanation": "いい → よかった (irregular)."
                },
                {
                    "prompt": "ラーメンを見つけるのは難し___です。 (finding ramen was difficult)",
                    "options": [
                        "くない",
                        "だった",
                        "かった",
                        "いでした"
                    ],
                    "answerIndex": 2,
                    "explanation": "難しい → 難しかった."
                },
                {
                    "prompt": "What does です do when it's attached to an i-adjective past form like 楽しかったです?",
                    "options": [
                        "It carries the past tense meaning by itself",
                        "It only adds politeness — the tense already lives in かった",
                        "It's a typo and should be removed",
                        "It negates the sentence"
                    ],
                    "answerIndex": 1,
                    "explanation": "This is the core distinction between i-adjective tense (self-contained) and noun/na-adjective tense (carried by でした)."
                },
                {
                    "prompt": "Which i-adjective is the irregular exception covered in this lesson?",
                    "options": [
                        "いい",
                        "美味しい",
                        "難しい",
                        "楽しい"
                    ],
                    "answerIndex": 0,
                    "explanation": "いい → よかった is the one irregular past form."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u7-l3": {
        "id": "ja-u7-l3",
        "unit": "ja-u7",
        "level": "A2",
        "objective": "Conjugate any verb into the polite past (〜ました) and polite past negative (〜ませんでした) by swapping the ます-form ending, with no exceptions.",
        "prerequisites": [
            "ja-u7-l1",
            "ja-u7-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u7-l1",
                "ja-u7-l2"
            ]
        },
        "presentation": {
            "explanation": "Since Unit 4 you've used the ます-form for present/future action: 食べます (eat/will eat), 行きます (go/will go). Past is the easiest tense-swap in the whole language: ます → ました for positive, ません → ませんでした for negative. This works for literally every verb without a single exception, because you're only ever touching the polite ending, never the verb's inner stem — the irregular stuff (する, 来る) already got handled back when you first learned their ます-forms. 田中さん's Sunday, part three: he went to the zoo, searched for a ramen shop, and — true to the running joke — did not find one.",
            "examples": [
                {
                    "target": "田中さんは動物園に行きました。",
                    "reading": "Tanaka-san wa doubutsuen ni ikimashita.",
                    "translation": "Tanaka-san went to the zoo."
                },
                {
                    "target": "ラーメン屋を探しました。",
                    "reading": "Ra-men-ya o sagashimashita.",
                    "translation": "He looked for a ramen shop."
                },
                {
                    "target": "でも、見つけませんでした。",
                    "reading": "Demo, mitsukemasen deshita.",
                    "translation": "But he didn't find one."
                },
                {
                    "target": "田中さんは少し悲しかったです。",
                    "reading": "Tanaka-san wa sukoshi kanashikatta desu.",
                    "translation": "Tanaka-san was a little sad. (i-adjective past from Lesson 2)"
                }
            ],
            "mnemonics": [
                "ます-form past is a one-syllable swap: ます→ました (did), ません→ませんでした (didn't). Every single verb, no exceptions — you're only ever changing the polite ending, never the stem underneath it."
            ],
            "culturalNotes": []
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "田中さんは動物園に行き___。 (Tanaka went to the zoo.)",
                    "options": [
                        "ます (33.1)",
                        "ませんでした (33.2)",
                        "でした (33.3)",
                        "ました (33.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "ます → ました is the polite past positive."
                },
                {
                    "prompt": "ラーメン屋を見つけ___。 (He didn't find a ramen shop.)",
                    "options": [
                        "ました",
                        "ません",
                        "なかったでした",
                        "ませんでした"
                    ],
                    "answerIndex": 3,
                    "explanation": "ません → ませんでした is the polite past negative."
                },
                {
                    "prompt": "What ending do you swap to go from present ます-form to past?",
                    "options": [
                        "ます → まった",
                        "ます → まます",
                        "ます → まし",
                        "ます → ました"
                    ],
                    "answerIndex": 3,
                    "explanation": "This is the entire rule — swap ます for ました."
                },
                {
                    "prompt": "Does this ました/ませんでした rule have any exceptions among verbs?",
                    "options": [
                        "No — every verb takes the same ます→ました / ません→ませんでした swap, no exceptions",
                        "Only する is exempt",
                        "Only verbs ending in う are exempt",
                        "Yes, irregular verbs conjugate completely differently"
                    ],
                    "answerIndex": 0,
                    "explanation": "This swap happens at the polite-ending layer, which is uniform across all verbs including irregulars."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: 'He looked for a ramen shop.'",
                    "options": [
                        "ラーメン屋を探しました。 (33.1)",
                        "ラーメン屋を探します。 (33.2)",
                        "ラーメン屋を探しませんでした。 (33.3)",
                        "ラーメン屋を探しでした。 (33.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "探します → 探しました (positive polite past)."
                },
                {
                    "prompt": "Translate: 'But he didn't find one.'",
                    "options": [
                        "でも、見つけませんでした。",
                        "でも、見つけました。",
                        "でも、見つけませんでした か。",
                        "でも、見つけないでした。"
                    ],
                    "answerIndex": 0,
                    "explanation": "見つけません → 見つけませんでした (negative polite past)."
                },
                {
                    "prompt": "Why can this same ました/ませんでした rule be applied to literally any Japanese verb without memorizing exceptions?",
                    "options": [
                        "Because it isn't actually true — many verbs are irregular",
                        "Because the swap happens on the polite ending, not the verb stem, and that ending is identical across all verbs",
                        "Because only する and 来る use ました",
                        "Because it only works for verbs of motion"
                    ],
                    "answerIndex": 1,
                    "explanation": "This is the reason it's the easiest past-tense pattern in Japanese."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "田中さんは動物園に行き___。",
                    "options": [
                        "ました",
                        "でした",
                        "ます",
                        "ませんでした"
                    ],
                    "answerIndex": 0,
                    "explanation": "ます → ました."
                },
                {
                    "prompt": "ラーメン屋を見つけ___。",
                    "options": [
                        "ません",
                        "なかったでした",
                        "ました",
                        "ませんでした"
                    ],
                    "answerIndex": 3,
                    "explanation": "ません → ませんでした."
                },
                {
                    "prompt": "ラーメン屋を探し___。 (He looked for a ramen shop.)",
                    "options": [
                        "ませんでした",
                        "でした",
                        "ました",
                        "ます"
                    ],
                    "answerIndex": 2,
                    "explanation": "探します → 探しました."
                },
                {
                    "prompt": "What's the polite past negative ending for any verb?",
                    "options": [
                        "なかったです",
                        "ませんでした",
                        "ましたじゃない",
                        "ませんです"
                    ],
                    "answerIndex": 1,
                    "explanation": "ません → ませんでした is the rule taught this lesson."
                },
                {
                    "prompt": "How many exceptions does the ます→ました / ません→ませんでした rule have?",
                    "options": [
                        "None — it applies uniformly to every verb",
                        "Two: する and 来る",
                        "Every verb ending in ぶ",
                        "All い-adjectives are exceptions"
                    ],
                    "answerIndex": 0,
                    "explanation": "It's applied at the ending, not the stem, so it's exception-free."
                },
                {
                    "prompt": "田中さんは少し___です。 (Tanaka was a little sad.)",
                    "options": [
                        "悲しでした",
                        "悲しいでした",
                        "悲しくました",
                        "悲しかった"
                    ],
                    "answerIndex": 3,
                    "explanation": "Review of Lesson 2: 悲しい → 悲しかった for i-adjective past."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u7-l4": {
        "id": "ja-u7-l4",
        "unit": "ja-u7",
        "level": "A2",
        "objective": "Form the plain (casual) past た-form for u-verbs, ru-verbs, and the irregular する/来る, using the same stem changes as the て-form from Unit 5, plus the plain negative past なかった.",
        "prerequisites": [
            "ja-u7-l1",
            "ja-u7-l2",
            "ja-u7-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u7-l3",
                "ja-u5-l5"
            ]
        },
        "presentation": {
            "explanation": "You already learned the て-form sound changes back in Unit 5's capstone: う/つ/る→って, む/ぬ/ぶ→んで, く→いて, ぐ→いで, す→して, ru-verbs just drop る and add て, and irregulars する→して, 来る→来て. The plain past た-form uses the IDENTICAL stem changes — just replace every て with た and every で with だ. 行く→行って→行った. 食べる→食べて→食べた. する→して→した. 来る→来て→来た. If you can build the て-form, you already know the た-form; it's a one-letter swap on a pattern you've had since Unit 5. The plain negative past is a separate track: take the plain negative ない-form (from Unit 4/5), drop the final い, add かった — 食べない→食べなかった, 来ない→来なかった. Casual narration doesn't use ます/でした at all; it runs entirely on plain forms like these, which is why plain past matters even if you speak politely most of the time — you'll hear it constantly from friends, in books, and in casual dialogue.",
            "examples": [
                {
                    "target": "田中さんは動物園に行った。",
                    "reading": "Tanaka-san wa doubutsuen ni itta.",
                    "translation": "Tanaka-san went to the zoo. (plain past, casual)"
                },
                {
                    "target": "ラーメンを食べなかった。",
                    "reading": "Ra-men o tabenakatta.",
                    "translation": "He didn't eat ramen. (plain negative past)"
                },
                {
                    "target": "動物園で象を見た。",
                    "reading": "Doubutsuen de zou o mita.",
                    "translation": "He saw an elephant at the zoo."
                },
                {
                    "target": "疲れたから、早く帰った。",
                    "reading": "Tsukareta kara, hayaku kaetta.",
                    "translation": "Because he was tired, he went home early. (から, previewed in the Unit 6 capstone)"
                }
            ],
            "mnemonics": [
                "た-form = て-form with a costume change: every て becomes た, every で becomes だ. If you know 食べて, you already know 食べた — same Unit 5 stem-change groups, just a different final letter.",
                "Plain negative past runs on a completely separate track from positive: chop the い off ない, glue on かった. ない→なかった works the same way after every verb's plain negative stem, no exceptions."
            ],
            "culturalNotes": [
                "Plain forms (行った, 食べなかった) aren't \"lower level\" than polite forms — they're what you'll actually hear between friends, in novels, in diary entries, and in most anime/drama dialogue. Fluent speakers move fluidly between plain and polite depending on who they're talking to, not based on how advanced they are."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "田中さんは動物園に___。 (plain past of 行く: went)",
                    "options": [
                        "行て (34.1)",
                        "行った (34.2)",
                        "行いた (34.3)",
                        "行きた (34.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "行く follows the う/つ/る→って て-form group, so た-form is 行った."
                },
                {
                    "prompt": "ラーメンを___。 (plain negative past of 食べる: didn't eat)",
                    "options": [
                        "食べなかった",
                        "食べないでした",
                        "食べなくない",
                        "食べませんでした"
                    ],
                    "answerIndex": 0,
                    "explanation": "食べない → drop い, add かった → 食べなかった."
                },
                {
                    "prompt": "動物園で象を___。 (plain past of 見る: saw)",
                    "options": [
                        "見た",
                        "見だ",
                        "見きた",
                        "見って"
                    ],
                    "answerIndex": 0,
                    "explanation": "見る is a ru-verb: drop る, add た → 見た."
                },
                {
                    "prompt": "If you already know a verb's て-form, what do you need to change to get the plain past た-form?",
                    "options": [
                        "Nothing — memorize a completely new form",
                        "Change the verb ending to い",
                        "Just swap て→た and で→だ; the stem change is identical",
                        "Add ました to the end"
                    ],
                    "answerIndex": 2,
                    "explanation": "This is the direct link back to Unit 5's て-form stem-change groups."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: 'Because he was tired, he went home early.'",
                    "options": [
                        "疲れたから、早く帰った。 (34.1)",
                        "疲れたから、早く帰りません。 (34.2)",
                        "疲れましたから、早く帰る。 (34.3)",
                        "疲れるから、早く帰った。 (34.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "疲れる→疲れた (plain past), から (because), 帰る→帰った (plain past)."
                },
                {
                    "prompt": "What's the plain negative past ending pattern, and which form does it start from?",
                    "options": [
                        "Starts from ます-form, adds でした",
                        "It's identical to the polite negative past",
                        "Starts from the plain negative ない-form, drops い, adds かった",
                        "Starts from て-form, adds なかった"
                    ],
                    "answerIndex": 2,
                    "explanation": "Negative past has its own track, separate from the positive た-form's て→た swap."
                },
                {
                    "prompt": "Translate: 'He saw an elephant at the zoo.'",
                    "options": [
                        "動物園で象を見た。",
                        "動物園で象を見ます。",
                        "動物園で象が見た。",
                        "動物園に象を見った。"
                    ],
                    "answerIndex": 0,
                    "explanation": "で marks the location of the action (from earlier units), 見る→見た for plain past, を marks 象 as the object."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "田中さんは動物園に___。 (went, plain)",
                    "options": [
                        "行て",
                        "行きた",
                        "行いた",
                        "行った"
                    ],
                    "answerIndex": 3,
                    "explanation": "行く → 行った."
                },
                {
                    "prompt": "ラーメンを___。 (didn't eat, plain)",
                    "options": [
                        "食べないでした",
                        "食べませんでした",
                        "食べなかった",
                        "食べなくない"
                    ],
                    "answerIndex": 2,
                    "explanation": "食べない → 食べなかった."
                },
                {
                    "prompt": "動物園で象を___。 (saw, plain)",
                    "options": [
                        "見って",
                        "見た",
                        "見だ",
                        "見きた"
                    ],
                    "answerIndex": 1,
                    "explanation": "見る → 見た (ru-verb)."
                },
                {
                    "prompt": "疲れたから、早く___。 (went home, plain)",
                    "options": [
                        "帰った",
                        "帰る",
                        "帰りた",
                        "帰て"
                    ],
                    "answerIndex": 0,
                    "explanation": "帰る → 帰った, following the う/つ/る group."
                },
                {
                    "prompt": "How does the plain past た-form relate to the て-form you learned in Unit 5?",
                    "options": [
                        "They're unrelated and must be memorized separately",
                        "て-form is the negative version of た-form",
                        "た-form only exists for irregular verbs",
                        "た-form uses the exact same stem changes as て-form — just swap て→た and で→だ"
                    ],
                    "answerIndex": 3,
                    "explanation": "This is the core insight of the lesson — no new stem rules, just a letter swap."
                },
                {
                    "prompt": "Which form does the plain negative past た-equivalent (なかった) build from?",
                    "options": [
                        "The ます-form",
                        "The て-form",
                        "The plain negative ない-form",
                        "The でした form"
                    ],
                    "answerIndex": 2,
                    "explanation": "Negative past runs on a separate track: ない → なかった."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u7-l5": {
        "id": "ja-u7-l5",
        "unit": "ja-u7",
        "level": "A2",
        "objective": "Produce a connected multi-sentence narration of a past day, combining でした, い-adjective past, and verb past forms (ました and plain た) fluently in one paragraph.",
        "prerequisites": [
            "ja-u7-l1",
            "ja-u7-l2",
            "ja-u7-l3",
            "ja-u7-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "ja-u7-l1",
                "ja-u7-l2",
                "ja-u7-l3",
                "ja-u7-l4"
            ]
        },
        "presentation": {
            "explanation": "This capstone closes out 田中さん's Sunday and the whole unit at once, stitching together every past-tense piece: でした for nouns/な-adjectives (Lesson 1), かった/くなかった for い-adjectives (Lesson 2), ました/ませんでした for polite verbs (Lesson 3), and plain た for casual narration (Lesson 4) — plus the から (because) connector previewed back in Unit 6. Real Japanese narration mixes registers less than you'd think within one paragraph (a diary entry stays plain, a report to your boss stays polite), but for this capstone we deliberately show both polite and plain so you can recognize either on sight. Full story: 昨日は日曜日でした。田中さんは動物園に行きました。動物園はとても静かでした。散歩は楽しかったですが、ラーメン屋を探して、見つけませんでした。売店のカレーパンは美味しくなかったです。でも、天気はよかったですから、田中さんは少しだけ幸せでした。",
            "examples": [
                {
                    "target": "昨日は日曜日でした。田中さんは動物園に行きました。",
                    "reading": "Kinou wa nichiyoubi deshita. Tanaka-san wa doubutsuen ni ikimashita.",
                    "translation": "Yesterday was Sunday. Tanaka-san went to the zoo."
                },
                {
                    "target": "動物園はとても静かでした。散歩は楽しかったですが、ラーメン屋を探して、見つけませんでした。",
                    "reading": "Doubutsuen wa totemo shizuka deshita. Sanpo wa tanoshikatta desu ga, ra-men-ya o sagashite, mitsukemasen deshita.",
                    "translation": "The zoo was very quiet. The walk was fun, but he looked for a ramen shop and didn't find one."
                },
                {
                    "target": "売店のカレーパンは美味しくなかったです。",
                    "reading": "Baiten no kare-pan wa oishikunakatta desu.",
                    "translation": "The curry bread at the stand wasn't tasty."
                },
                {
                    "target": "でも、天気はよかったですから、田中さんは少しだけ幸せでした。",
                    "reading": "Demo, tenki wa yokatta desu kara, Tanaka-san wa sukoshi dake shiawase deshita.",
                    "translation": "But the weather was good, so Tanaka-san was at least a little happy."
                }
            ],
            "mnemonics": [
                "Four past-tense tools, one story: でした (nouns/な-adj), かった/くなかった (い-adj), ました/ませんでした (polite verbs). Pick the tool by what kind of word you're conjugating, not by memorizing sentences whole."
            ],
            "culturalNotes": [
                "This kind of small, bittersweet-but-ultimately-okay ending — the ramen quest failed, but the weather was good so it was still a fine day — is a very common shape for casual Japanese storytelling and journaling, favoring gentle understatement over a dramatic high or low."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "昨日は日曜日___。 (Yesterday was Sunday.)",
                    "options": [
                        "でした (35.1)",
                        "ました (35.2)",
                        "かった (35.3)",
                        "でした か (35.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "日曜日 is a noun, so でした from Lesson 1."
                },
                {
                    "prompt": "田中さんは動物園に___。 (went, polite)",
                    "options": [
                        "行きました",
                        "行った",
                        "行きます",
                        "行きでした"
                    ],
                    "answerIndex": 0,
                    "explanation": "Polite past verb form from Lesson 3: 行きます → 行きました."
                },
                {
                    "prompt": "散歩は___です。 (was fun)",
                    "options": [
                        "楽しかった",
                        "楽しいでした",
                        "楽しました",
                        "楽しでした"
                    ],
                    "answerIndex": 0,
                    "explanation": "い-adjective past from Lesson 2: 楽しい → 楽しかった."
                },
                {
                    "prompt": "What four Unit 7 elements does this capstone combine?",
                    "options": [
                        "でした, い-adjective past, ました/ませんでした, and plain た, plus the から connector",
                        "Only でした and ました",
                        "Only plain forms",
                        "Only negative forms"
                    ],
                    "answerIndex": 0,
                    "explanation": "This is the explicit combination stated in the lesson explanation."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: 'But the weather was good, so Tanaka-san was at least a little happy.'",
                    "options": [
                        "でも、天気はよくなかったですから、田中さんは幸せじゃなかったです。 (35.1)",
                        "でも、天気はよかったですから、田中さんは少しだけ幸せでした。 (35.2)",
                        "でも、天気はよかったが、田中さんは幸せでした。 (35.3)",
                        "でも、天気はいいでしたから、田中さんは少しだけ幸せます。 (35.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "天気 (weather) is a noun/quality described by いい → よかった, から means 'because,' and 幸せ (happy, な-adjective) takes でした."
                },
                {
                    "prompt": "Why does 幸せ (happy) take でした rather than かった in this paragraph?",
                    "options": [
                        "でした only follows verbs",
                        "It's actually a mistake",
                        "幸せ has no past tense",
                        "幸せ is a な-adjective, so it conjugates like a noun with でした, not like an い-adjective"
                    ],
                    "answerIndex": 3,
                    "explanation": "This distinguishes な-adjectives (でした) from い-adjectives (かった/くなかった), the core split from Lessons 1 and 2."
                },
                {
                    "prompt": "What was the actual outcome of 田中さん's ramen search this time, and how did the day end overall?",
                    "options": [
                        "He found ramen and the day was perfect",
                        "He gave up on ramen forever",
                        "The zoo was closed",
                        "He didn't find ramen, but the weather was good, so the day was still a little happy"
                    ],
                    "answerIndex": 3,
                    "explanation": "This is the specific bittersweet-but-okay ending the capstone paragraph builds toward."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "昨日は日曜日___。",
                    "options": [
                        "かった",
                        "ました",
                        "でした",
                        "でしたか"
                    ],
                    "answerIndex": 2,
                    "explanation": "日曜日 is a noun → でした."
                },
                {
                    "prompt": "田中さんは動物園に___。 (polite past)",
                    "options": [
                        "行った",
                        "行きました",
                        "行きます",
                        "行きでした"
                    ],
                    "answerIndex": 1,
                    "explanation": "行きます → 行きました."
                },
                {
                    "prompt": "散歩は___です。",
                    "options": [
                        "楽しかった",
                        "楽しました",
                        "楽しいでした",
                        "楽しでした"
                    ],
                    "answerIndex": 0,
                    "explanation": "楽しい → 楽しかった."
                },
                {
                    "prompt": "ラーメン屋を探して、___。 (didn't find, polite)",
                    "options": [
                        "見つけました",
                        "見つけなかった",
                        "見つけないでした",
                        "見つけませんでした"
                    ],
                    "answerIndex": 3,
                    "explanation": "見つけません → 見つけませんでした."
                },
                {
                    "prompt": "カレーパンは美味し___です。 (wasn't tasty)",
                    "options": [
                        "かった",
                        "くない",
                        "くなかった",
                        "じゃなかった"
                    ],
                    "answerIndex": 2,
                    "explanation": "美味しい → 美味しくなかった."
                },
                {
                    "prompt": "What is the overall skill this capstone paragraph is testing?",
                    "options": [
                        "Only counting objects",
                        "Producing a connected multi-sentence past-tense narration combining でした, い-adjective past, and verb past forms (ました and plain た)",
                        "Only questions in the present tense",
                        "Isolated vocabulary recall only"
                    ],
                    "answerIndex": 1,
                    "explanation": "This is the explicit goal stated in the lesson explanation."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u8-l1": {
        "id": "ja-u8-l1",
        "unit": "ja-u8",
        "level": "A2",
        "objective": "Master the Japanese currency system (円 en), count large numbers in the 万 (ten-thousand) base system, and ask and understand prices using 'いくらですか'.",
        "presentation": {
            "explanation": "Welcome to A2 Japanese Unit 8: Shopping & Money! In Japan, currency is counted in Yen (**円** *en*), and large numbers group by **4 zeros (万 *man* = 10,000)** rather than 3 zeros:\n\n1. The Japanese Large Number Scale:\n   - **百** (*hyaku*) = 100 (Sound shifts: 300 *sanbyaku*, 600 *roppyaku*, 800 *happyaku*)\n   - **千** (*sen*) = 1,000 (Sound shifts: 3,000 *sanzen*, 8,000 *hassen*)\n   - **万** (*man*) = 10,000 (*ichi-man* = 10,000; *go-man* = 50,000; *jū-man* = 100,000)\n   - *Example*: ¥45,000 = **四万五千円** (*yon-man go-sen en*).\n\n2. Asking Prices:\n   - **これはいくらですか。** (*Kore wa ikura desu ka?*) = How much is this?\n   - **すみません、そのカメラはいくらですか。** = Excuse me, how much is that camera?\n   - **それは二万八千円です。** (*Sore wa ni-man hassen en desu.*) = That is ¥28,000.\n\n3. Total Price & Tax Terms:\n   - **税込み** (*zeikomi*) = Tax included (standard display in Japan).\n   - **税抜き** (*zeinuki*) = Before tax.\n   - **全部で** (*zenbu de*) = In total (*'全部で三千円です'* - ¥3,000 in total).",
            "examples": [
                {
                    "target": "すみません、この時計はいくらですか。",
                    "reading": "Sumimasen, kono tokei wa ikura desu ka.",
                    "translation": "Excuse me, how much is this watch?"
                },
                {
                    "target": "それは一万五千円（税込み）です。",
                    "reading": "Sore wa ichi-man go-sen en (zeikomi) desu.",
                    "translation": "That is 15,000 yen (tax included)."
                },
                {
                    "target": "全部で四千二百円になります。",
                    "reading": "Zenbu de yon-sen ni-hyaku en ni narimasu.",
                    "translation": "The total comes to 4,200 yen."
                }
            ],
            "mnemonics": [
                "10,000 in Japanese is ICHI-MAN (一万) — count in blocks of 4 zeros!",
                "IKURA DESU KA? = How much is it?"
            ],
            "culturalNotes": [
                "Japan is renowned for transparent pricing where '税込み' (tax included) is clearly printed on price tags, and cash or IC transportation cards (Suica/Pasmo) are universally accepted."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How is ¥35,000 spoken in Japanese?",
                    "options": [
                        "三十五千円 (san-jū-go-sen en) (36.1)",
                        "三百五十円 (san-byaku go-jū en) (36.2)",
                        "三千五万円 (san-sen go-man en) (36.3)",
                        "三万五千円 (san-man go-sen en) (36.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "35,000 = 3 units of 10,000 (三万 san-man) + 5,000 (五千 go-sen) = san-man go-sen en."
                },
                {
                    "prompt": "How do you ask 'How much is this?' in polite Japanese?",
                    "options": [
                        "これはどこですか。",
                        "これは何時ですか。",
                        "これは誰ですか。",
                        "これはいくらですか。 (Kore wa ikura desu ka?)"
                    ],
                    "answerIndex": 3,
                    "explanation": "Ikura desu ka = How much is it?"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: 'このヘッドホンは二万九千八百円です。'",
                    "options": [
                        "These headphones are 2,980 yen. (36.1)",
                        "These headphones are 298,000 yen. (36.2)",
                        "I want to buy 29 headphones. (36.3)",
                        "These headphones are 29,800 yen. (36.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "ni-man (20,000) + kyū-sen (9,000) + happyaku (800) = 29,800 yen."
                },
                {
                    "prompt": "What does '税込み' (zeikomi) indicate on a price tag?",
                    "options": [
                        "Tax is not included and must be added at the register.",
                        "The item is free of charge.",
                        "The item is sold out.",
                        "Consumption tax (tax) is already included in the displayed price."
                    ],
                    "answerIndex": 3,
                    "explanation": "税込み (zeikomi) = tax included."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Match the sound shifts for counting in hundreds: 300, 600, 800:",
                    "options": [
                        "300: sanhyaku | 600: rokuhyaku | 800: hachihyaku",
                        "300: sanbyaku | 600: roppyaku | 800: happyaku",
                        "300: sanzen | 600: rokuman | 800: hassen",
                        "All are pronounced hyaku without shifts"
                    ],
                    "answerIndex": 1,
                    "explanation": "Phonetic sound shifts for 300 (sanbyaku), 600 (roppyaku), 800 (happyaku)."
                },
                {
                    "prompt": "Translate: 'Tシャツを二枚買いました。全部で五千円でした。'",
                    "options": [
                        "I bought two T-shirts. In total it was 5,000 yen.",
                        "T-shirts cost 500 yen each.",
                        "I did not buy any T-shirts.",
                        "I bought five T-shirts for 2,000 yen."
                    ],
                    "answerIndex": 0,
                    "explanation": "二枚 (ni-mai = 2 flat items) + 全部で (in total) + 5,000 yen."
                },
                {
                    "prompt": "Why does Japanese use '万' (man = 10,000) as its primary large number base rather than 'thousand' (1,000)?",
                    "options": [
                        "Because Japanese has no word for thousand.",
                        "Because Yen coins are large.",
                        "It was invented in the Meiji era.",
                        "Traditional East Asian numeral systems group numbers in powers of 10^4 (myriad / 万) rather than powers of 10^3 (thousands)."
                    ],
                    "answerIndex": 3,
                    "explanation": "East Asian base-10,000 counting system."
                },
                {
                    "prompt": "Complete the clerk's sentence: 'お会計は _______ (in total) 八千円になります。'",
                    "options": [
                        "どこで",
                        "だれと",
                        "全部で (zenbu de)",
                        "いつから"
                    ],
                    "answerIndex": 2,
                    "explanation": "全部で (zenbu de) = in total."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u8-l2": {
        "id": "ja-u8-l2",
        "unit": "ja-u8",
        "level": "A2",
        "objective": "Distinguish demonstrative pronouns (これ/それ/あれ/どれ) from demonstrative adjectives (この/その/あの/どの + Noun) and navigate department store sections (売り場 uriba, 階 kai/gai).",
        "presentation": {
            "explanation": "When shopping in department stores (デパート *depāto*), Japanese uses the famous **ko-so-a-do** system:\n\n1. Demonstrative Pronoun vs. Demonstrative Adjective:\n   - **PRONOUN (Stands alone — NEVER followed by a noun)**:\n     - **これ** (*kore*) = this one (near speaker)\n     - **それ** (*sore*) = that one (near listener)\n     - **あれ** (*are*) = that one over there (far from both)\n     - **どれ** (*dore*) = which one?\n     - *'これをください'* (Please give me this one!)\n   - **ADJECTIVE (MUST be followed directly by a noun)**:\n     - **この** + Noun (*kono...*) = this [noun] (*このシャツ* - this shirt)\n     - **その** + Noun (*sono...*) = that [noun] (*その靴* - those shoes)\n     - **あの** + Noun (*ano...*) = that [noun] over there (*あの店* - that store over there)\n     - **どの** + Noun (*dono...*) = which [noun]? (*どのカバン* - which bag?)\n\n2. Department Store Floors & Sections:\n   - **Floor Counter: 〜階** (*-kai / -gai*):\n     - 1st floor = *ikkai* (一階), 2nd = *nikai* (二階), 3rd = *sankai* / *sangai* (三階), basement 1st floor = *chika ikkai* (地下1階 / B1F).\n   - **Section / Counter: 〜売り場** (*-uriba*):\n     - *靴売り場* (*kutsu uriba*) = shoe section\n     - *化粧品売り場* (*keshōhin uriba*) = cosmetics section\n     - *免税カウンター* (*menzei kauntā*) = duty-free tax refund counter",
            "examples": [
                {
                    "target": "すみません、靴売り場は何階ですか。",
                    "reading": "Sumimasen, kutsu uriba wa nan-gai desu ka.",
                    "translation": "Excuse me, which floor is the shoe section?"
                },
                {
                    "target": "靴売り場は三階にございます。",
                    "reading": "Kutsu uriba wa san-gai ni gozaimasu.",
                    "translation": "The shoe section is on the 3rd floor (polite)."
                },
                {
                    "target": "あの黒いカバンを見せてください。",
                    "reading": "Ano kuroi kaban o misete kudasai.",
                    "translation": "Please show me that black bag over there."
                }
            ],
            "mnemonics": [
                "KO (near me), SO (near you), A (over there), DO (which?)!",
                "KORE stands ALONE; KONO needs a NOUN!"
            ],
            "culturalNotes": [
                "In Japanese department stores (like Isetan, Mitsukoshi, Takashimaya), the basement floor (デパ地下 depachika) is famous as a gourmet culinary paradise filled with regional bento, wagashi sweets, and delicacies."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which demonstrative word must be followed directly by a noun?",
                    "options": [
                        "この (kono — e.g. このカメラ kono kamera) (37.1)",
                        "あれ (are) (37.2)",
                        "これ (kore) (37.3)",
                        "それ (sore) (37.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "Kono/sono/ano/dono are demonstrative adjectives that must attach to a noun."
                },
                {
                    "prompt": "How do you ask 'Which floor is the camera section?'",
                    "options": [
                        "カメラ売り場は何階ですか。 (Kamera uriba wa nan-gai desu ka?)",
                        "カメラはいくらですか。",
                        "カメラ売り場はだれですか。",
                        "カメラ売り場はいつですか。"
                    ],
                    "answerIndex": 0,
                    "explanation": "何階 (nan-gai) = which floor; 売り場 (uriba) = sales section."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: '地下1階に食品売り場（デパ地下）があります。'",
                    "options": [
                        "The 1st floor is closed for food. (37.1)",
                        "There is a food section (depachika) on the 1st basement floor (B1F). (37.2)",
                        "Depachika is on the 10th floor. (37.3)",
                        "There is no food in the department store. (37.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "地下1階 (chika ikkai = B1F); 食品売り場 = food section."
                },
                {
                    "prompt": "Why is 'これシャツをください' ungrammatical in Japanese?",
                    "options": [
                        "Because shirts are expensive.",
                        "Because ください only takes verbs.",
                        "Because 'これ' is a pronoun that cannot modify a noun; you must say 'このシャツ' (this shirt) or 'これをください' (give me this).",
                        "It is a dialect variation."
                    ],
                    "answerIndex": 2,
                    "explanation": "Kore cannot directly precede a noun; kono + noun is required."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Match the demonstrative pairs: this / this noun, that / that noun, that over there / that noun over there:",
                    "options": [
                        "これ / この [N] | それ / その [N] | あれ / あの [N] | どれ / どの [N]",
                        "All use この",
                        "これ / あれ | それ / どれ",
                        "All use これ"
                    ],
                    "answerIndex": 0,
                    "explanation": "Ko-so-a-do pronoun vs. adjective systematic distinction."
                },
                {
                    "prompt": "Translate: 'その青いセーターを試着してもいいですか。'",
                    "options": [
                        "I will buy that blue sweater.",
                        "How much is that blue sweater?",
                        "Do you have a blue sweater?",
                        "May I try on that blue sweater?"
                    ],
                    "answerIndex": 3,
                    "explanation": "試着する (shichaku suru) = to try on clothes (〜てもいいですか = may I?)."
                },
                {
                    "prompt": "What is 'デパ地下' (depachika)?",
                    "options": [
                        "An underground parking lot",
                        "A shoe store",
                        "The gourmet food and delicacy market located on the basement floor of Japanese department stores",
                        "A subway train"
                    ],
                    "answerIndex": 2,
                    "explanation": "Depachika is the famous basement food hall of Japanese department stores."
                },
                {
                    "prompt": "Complete: '免税カウンターは _______ (7th floor) にあります。'",
                    "options": [
                        "七本",
                        "七階 (nana-kai)",
                        "七つ",
                        "七人"
                    ],
                    "answerIndex": 1,
                    "explanation": "七階 (nana-kai) = 7th floor."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u8-l3": {
        "id": "ja-u8-l3",
        "unit": "ja-u8",
        "level": "A2",
        "objective": "Form comparisons of two items using 'A のほうが B より [Adjective] です' and ask comparative questions with 'どちらのほうが [Adjective] ですか'.",
        "presentation": {
            "explanation": "To compare two products, prices, or choices in Japanese, we use the **より** (than) and **ほうが** (direction/side) comparative structure:\n\n1. Stating a Comparison: **A のほうが B より [Adjective] です**:\n   - Meaning: *'A is more [Adjective] than B'*\n   - Breakdown: *A のほう* (A's side) + *が* (subject) + *B より* (than B) + *Adjective です*.\n   - *Examples*:\n     - **このカメラのほうがそのカメラより軽いです。** (*Kono kamera no hou ga sono kamera yori karui desu.* = This camera is lighter than that camera.)\n     - **新幹線のほうが飛行機より安いです。** (*Shinkansen no hou ga hikōki yori yasui desu.* = Shinkansen is cheaper than airplane.)\n\n2. Asking a Comparison Question: **A と B と どちらのほうが [Adjective] ですか**:\n   - Meaning: *'Between A and B, which one is more [Adjective]?'*\n   - *Example*:\n     - **「赤いのと黒いのと、どちらのほうが人気がありますか。」** (*Akai no to kuroi no to, dochira no hou ga ninki ga arimasu ka?* = Between the red one and the black one, which is more popular?)\n   - **Answer**: **「黒いほうのほうが人気があります。」** (*Kuroi hou no hou ga ninki ga arimasu.* = The black one is more popular.)\n\n3. 'Both are...' (A も B も):\n   - **どちらも [Adjective] です。** (*Dochira mo...*) = Both are...\n   - **どちらも好きです。** (*Dochira mo suki desu.*) = I like both.",
            "examples": [
                {
                    "target": "このパソコンのほうが前のより速くて便利です。",
                    "reading": "Kono pasokon no hou ga mae no yori hayakute benri desu.",
                    "translation": "This laptop is faster and more convenient than the previous one."
                },
                {
                    "target": "緑茶とほうじ茶と、どちらのほうがおすすめですか。",
                    "reading": "Ryokucha to hōjicha to, dochira no hou ga osusume desu ka.",
                    "translation": "Between green tea and roasted tea, which do you recommend?"
                },
                {
                    "target": "日本のカメラは性能がいいです。",
                    "reading": "Nihon no kamera wa seinō ga ii desu.",
                    "translation": "Japanese cameras have great performance/quality."
                }
            ],
            "mnemonics": [
                "A NO HOU GA = A's side WINS (is more...)",
                "B YORI = Than B (B is the benchmark)",
                "DOCHIRA? = Which of the two?"
            ],
            "culturalNotes": [
                "When asking for shopkeeper advice in Japan, saying 'どちらのほうがおすすめですか' (Which do you recommend?) politely invites their expert guidance."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you say 'This smartphone is lighter than that one' in Japanese?",
                    "options": [
                        "このスマホはそのスマホより軽くないです。 (38.1)",
                        "このスマホはそのスマホが軽いです。 (38.2)",
                        "どちらも軽いです。 (38.3)",
                        "このスマホのほうがそのスマホより軽いです。 (Kono sumaho no hou ga sono sumaho yori karui desu.) (38.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "A のほうが B より [Adjective] です = A is more [adj] than B."
                },
                {
                    "prompt": "What word is used to ask 'Which of the two' in polite Japanese?",
                    "options": [
                        "どれ (dore — for 3+ items)",
                        "だれ (dare)",
                        "どこ (doko)",
                        "どちら (dochira / どっち docchi)"
                    ],
                    "answerIndex": 3,
                    "explanation": "どちら (dochira) specifically compares two items."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: '東京のほうが京都よりにぎやかです。'",
                    "options": [
                        "Tokyo is livelier / more bustling than Kyoto. (38.1)",
                        "Kyoto is livelier than Tokyo. (38.2)",
                        "Tokyo and Kyoto are both quiet. (38.3)",
                        "I want to visit Tokyo and Kyoto. (38.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "Tokyo no hou ga Kyoto yori nigiyaka desu = Tokyo is livelier than Kyoto."
                },
                {
                    "prompt": "How do you reply 'Both are delicious' to a comparative food question?",
                    "options": [
                        "どちらも美味しいです。 (Dochira mo oishii desu.)",
                        "どちらも美味しくないです。",
                        "これだけ美味しいです。",
                        "わかりません。"
                    ],
                    "answerIndex": 0,
                    "explanation": "どちらも (dochira mo) = both."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Match the comparative components: A のほうが, B より, どちらのほうが, どちらも:",
                    "options": [
                        "All mean 'expensive'",
                        "A のほうが: than A | B より: B is more...",
                        "All mean 'yesterday'",
                        "A のほうが: A is more... | B より: than B | どちらのほうが: which of the two... | どちらも: both"
                    ],
                    "answerIndex": 3,
                    "explanation": "Core Japanese comparative syntax elements."
                },
                {
                    "prompt": "Translate: '肉と魚と、どちらのほうが好きですか。— 魚のほうが好きです。'",
                    "options": [
                        "Do you eat meat and fish? — No, I don't.",
                        "I don't like fish or meat.",
                        "Between meat and fish, which do you like better? — I like fish better.",
                        "Fish is more expensive than meat."
                    ],
                    "answerIndex": 2,
                    "explanation": "Natural comparative preference dialogue."
                },
                {
                    "prompt": "Why is 'どちら' (dochira) preferred over 'どれ' (dore) when comparing two specific items?",
                    "options": [
                        "It is a modern slang rule.",
                        "Because 'どちら' is specifically designed for binary choice (two items), whereas 'どれ' is used for choosing among three or more items.",
                        "Because dore is rude.",
                        "Because dochira means why."
                    ],
                    "answerIndex": 1,
                    "explanation": "Dochira = binary choice (between 2); Dore = multiple choice (3+)."
                },
                {
                    "prompt": "Complete: '冬のほうが夏の_______ (than) 寒いです。'",
                    "options": [
                        "より (yori)",
                        "から",
                        "ほう",
                        "まで"
                    ],
                    "answerIndex": 0,
                    "explanation": "夏より (yori = than summer)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u8-l4": {
        "id": "ja-u8-l4",
        "unit": "ja-u8",
        "level": "A2",
        "objective": "Give and understand advice and recommendations using '〜ほうがいいです' (with past plain た-form for positive advice and ない-form for negative advice) and '〜はどうですか'.",
        "presentation": {
            "explanation": "When giving helpful suggestions or recommendations in Japanese, we use the advice pattern **〜ほうがいいです**:\n\n1. Positive Advice: **[Verb Plain Past た-form] + ほうがいいです**:\n   - Meaning: *'You had better do...' / 'It is best to...'* (literally: *'The choice of having done X is better'*):\n     - *買う* -> **買ったほうがいいです** (*Katta hou ga ii desu.* = You'd better buy it / It's best to buy it.)\n     - *予約する* -> **予約したほうがいいです** (*Yoyaku shita hou ga ii desu.* = You'd better make a reservation.)\n     - *試着する* -> **試着したほうがいいです** (*Shichaku shita hou ga ii desu.* = You should try it on.)\n     - *早く行く* -> **早く行ったほうがいいです** (*Hayaku itta hou ga ii desu.* = You should go early.)\n\n2. Negative Advice: **[Verb Plain Negative ない-form] + ほうがいいです**:\n   - Meaning: *'You had better NOT do...' / 'It's best not to...'*:\n     - *買わない* -> **買わないほうがいいです** (*Kawanai hou ga ii desu.* = You'd better not buy it.)\n     - *無理をしない* -> **無理をしないほうがいいです** (*Muri o shinai hou ga ii desu.* = Don't push yourself too hard.)\n\n3. Gentle Suggestions: **〜はどうですか** (*〜wa dō desu ka?*):\n   - *'このサイズはどうですか。'* (How about this size?)\n   - *'最新モデルはどうですか。'* (How about the latest model?)",
            "examples": [
                {
                    "target": "人気がある商品ですから、今買ったほうがいいですよ。",
                    "reading": "Ninki ga aru shōhin desu kara, ima katta hou ga ii desu yo.",
                    "translation": "Because this is a popular product, you'd better buy it now."
                },
                {
                    "target": "靴は買う前に試着したほうがいいです。",
                    "reading": "Kutsu wa kau mae ni shichaku shita hou ga ii desu.",
                    "translation": "It is best to try on shoes before buying them."
                },
                {
                    "target": "高いですから、無理して買わないほうがいいです。",
                    "reading": "Takai desu kara, muri shite kawanai hou ga ii desu.",
                    "translation": "Since it's expensive, you'd better not force yourself to buy it."
                }
            ],
            "mnemonics": [
                "Positive Advice = TA-form + HOU GA II DESU (katta hou ga ii)!",
                "Negative Advice = NAI-form + HOU GA II DESU (kawanai hou ga ii)!"
            ],
            "culturalNotes": [
                "In Japanese communication, direct imperatives (*'Buy this!'*) are considered harsh; using '〜たほうがいいですよ' softens the recommendation into caring, respectful advice."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you politely recommend 'You should try it on' to a customer in Japanese?",
                    "options": [
                        "試着しないほうがいいです。 (39.1)",
                        "試着したほうがいいですよ。 (Shichaku shita hou ga ii desu yo — ta-form + hou ga ii) (39.2)",
                        "試着しました。 (39.3)",
                        "試着するほうがいいです。 (39.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "Positive advice takes the ta-form: 試着したほうがいいです."
                },
                {
                    "prompt": "How do you say 'You'd better not drink too much cold water'?",
                    "options": [
                        "冷たい水をあまり飲まないほうがいいです。 (nai-form + hou ga ii desu)",
                        "冷たい水を飲みます。",
                        "冷たい水は美味しいです。",
                        "冷たい水を飲んだほうがいいです。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Negative advice takes the nai-form: 飲まないほうがいいです."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: '週末は混みますから、平日に行ったほうがいいです。'",
                    "options": [
                        "Because weekends are crowded, you'd better go on a weekday. (39.1)",
                        "Weekdays are very crowded. (39.2)",
                        "Weekends are closed on weekdays. (39.3)",
                        "We will go shopping on the weekend. (39.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "混みますから (because crowded) + 行ったほうがいい (better to go)."
                },
                {
                    "prompt": "What verb form attaches to 'ほうがいいです' for affirmative advice?",
                    "options": [
                        "Plain past た-form (e.g. 買ったほうがいい, 見たほうがいい)",
                        "Te-form",
                        "Dictionary form",
                        "Masu-form"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirmative advice historically and grammatically requires the ta-form."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Match the advice structures: 行ったほうがいい, 行かないほうがいい, これはどうですか:",
                    "options": [
                        "行ったほうがいい: you shouldn't go | 行かないほうがいい: you should go",
                        "All mean 'I am going'",
                        "行ったほうがいい: you should go | 行かないほうがいい: you shouldn't go | これはどうですか: how about this?",
                        "All mean 'goodbye'"
                    ],
                    "answerIndex": 2,
                    "explanation": "Advice and suggestion syntax paradigms."
                },
                {
                    "prompt": "Translate: '風邪を引きましたから、今日は早く寝たほうがいいですよ。'",
                    "options": [
                        "I will go to work today.",
                        "Because you caught a cold, you'd better go to sleep early today.",
                        "You shouldn't sleep today.",
                        "The weather is very cold today."
                    ],
                    "answerIndex": 1,
                    "explanation": "早く寝たほうがいい (better to sleep early)."
                },
                {
                    "prompt": "Why does Japanese use the past 'た-form' in '買ったほうがいい' even when giving advice about the future?",
                    "options": [
                        "Because the speaker envisions the hypothetical completed state of having purchased the item as the superior outcome.",
                        "Because the purchase already happened.",
                        "Because it is an irregular noun.",
                        "It is a spelling error."
                    ],
                    "answerIndex": 0,
                    "explanation": "Aspectual completion concept: the completed state of action X is advantageous."
                },
                {
                    "prompt": "Complete: 'パスポートは大事ですから、無くさ_______ (better not lose) ほうがいいです。'",
                    "options": [
                        "ます",
                        "た",
                        "て",
                        "ない (nakusanai)"
                    ],
                    "answerIndex": 3,
                    "explanation": "無くさないほうがいい (better not lose)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u8-l5": {
        "id": "ja-u8-l5",
        "unit": "ja-u8",
        "level": "A2",
        "objective": "Demonstrate comprehensive A2 shopping fluency by understanding and participating in a multi-turn dialogue purchasing electronics and souvenirs in Akihabara and Ginza with tax-free procedures and digital payments.",
        "presentation": {
            "explanation": "In this Master Checkpoint for Unit 8, we integrate numbers into the ten-thousands, demonstratives (この/その/あの), comparisons (AのほうがBより), advice (〜たほうがいい), tax-free procedures (免税 *menzei*), and payment methods in an authentic Tokyo shopping interaction:\n\n1. The Setting:\n   - **David** (international visitor) enters a flagship electronics megastore (家電量販店 *kaden ryōhanten*, like Yodobashi Camera or Bic Camera) in Akihabara, Tokyo. **Yamada** (store clerk) assists him.\n\n2. Authentic Cultural Dialogue:\n   - **山田 (Yamada)**: いらっしゃいませ！何かお探しですか。 (*Welcome! Are you looking for something?*)\n   - **デビッド (David)**: すみません、日本のミラーレスカメラを探しています。 (*Excuse me, I'm looking for a Japanese mirrorless camera.*)\n   - **山田**: かしこまりました。カメラ売り場はこちらです。こちらの最新モデルAと、あちらのモデルBがございます。 (*Certainly. The camera section is right here. We have this latest Model A here, and that Model B over there.*)\n   - **デビッド**: モデルAとモデルBと、どちらのほうが軽いですか。 (*Between Model A and Model B, which one is lighter?*)\n   - **山田**: モデルAのほうがモデルBより軽くて、持ち歩きに便利です。オートフォーカスも速いですよ。旅行にはモデルAを選んだほうがいいと思います。 (*Model A is lighter than Model B and convenient to carry around. The autofocus is fast too. For travel, I think you'd better choose Model A.*)\n   - **デビッド**: なるほど！モデルAはいくらですか。 (*I see! How much is Model A?*)\n   - **山田**: 税込みで八万八千円です。パスポートをお持ちでしたら、免税（Tax-Free）で八万円になります。 (*It is 88,000 yen tax included. If you have your passport, with tax-free it will be 80,000 yen.*)\n   - **デビッド**: 本当ですか！パスポートを持っています。じゃ、これにします！ (*Really! I have my passport. In that case, I'll take this one!*)\n   - **山田**: ありがとうございます！お支払いはクレジットカードですか、Suicaですか。 (*Thank you very much! Will payment be by credit card or Suica?*)\n   - **デビッド**: クレジットカードでお願いします。 (*By credit card, please.*)\n   - **山田**: かしこまりました。免税手続きをいたしますので、少々お待ちください。 (*Certainly. I will process the tax-free procedure, please wait a brief moment.*)",
            "examples": [
                {
                    "target": "モデルAのほうが軽くて便利ですから、旅行にはモデルAのほうがいいです。",
                    "reading": "Moderu A no hou ga karukute benri desu kara, ryokō ni wa Moderu A no hou ga ii desu.",
                    "translation": "Because Model A is lighter and more convenient, for travel Model A is better."
                },
                {
                    "target": "パスポートをお持ちでしたら、免税で八万円になります。",
                    "reading": "Pasupōto o omochi deshita ra, menzei de hachi-man en ni narimasu.",
                    "translation": "If you have your passport, with tax-free it comes to 80,000 yen."
                },
                {
                    "target": "これにします。クレジットカードでお願いします。",
                    "reading": "Kore ni shimasu. Kurejitto kādo de onegai shimasu.",
                    "translation": "I'll take this one. By credit card, please."
                }
            ],
            "mnemonics": [
                "KORE NI SHIMASU = I'll take this one! (standard decision phrase).",
                "MENZEI (免税) = Tax-free shopping (10% consumption tax refund for tourists).",
                "KASHIKOMARIMASHITA = Certainly! (high-polite clerk acknowledgment)."
            ],
            "culturalNotes": [
                "Japan's tax-free system (免税 menzei) allows foreign tourists purchasing over ¥5,000 in goods to waive the 10% consumption tax by presenting their physical passport at the register or tax refund counter."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "What key phrase did David use to finalize his decision to buy the camera?",
                    "options": [
                        "これにします！ (Kore ni shimasu! — I'll take this one!) (40.1)",
                        "これを買いません。 (40.2)",
                        "これは嫌です。 (40.3)",
                        "どこに行きますか。 (40.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "'〜にします' (Kore ni shimasu) is the standard Japanese phrase for deciding on a purchase or restaurant selection."
                },
                {
                    "prompt": "What requirement is necessary to receive '免税' (menzei / tax-free) in Japan?",
                    "options": [
                        "Presenting a valid physical foreign passport (パスポート)",
                        "Having a Japanese driver's license",
                        "Paying only with 10,000-yen bills",
                        "Shopping only after midnight"
                    ],
                    "answerIndex": 0,
                    "explanation": "Tax-free shopping requires presenting a physical foreign passport."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Why did the store clerk recommend Model A for traveling?",
                    "options": [
                        "Because Model B is cheaper. (40.1)",
                        "Because Model A is lighter than Model B, convenient to carry, and has fast autofocus. (40.2)",
                        "Because Model A is broken. (40.3)",
                        "Because Model A is very heavy. (40.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "モデルAのほうが軽くて、持ち歩きに便利です (Model A is lighter and convenient to carry)."
                },
                {
                    "prompt": "Translate: '免税手続きをいたしますので、少々お待ちください。'",
                    "options": [
                        "Please pay with cash only.",
                        "I will process the tax-free procedure, please wait a brief moment.",
                        "The store is now closing.",
                        "We do not offer tax-free service today."
                    ],
                    "answerIndex": 1,
                    "explanation": "免税手続き (tax-free procedure) + 少々お待ちください (please wait a moment)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate the complete sentence: 'モデルAのほうがモデルBより軽いですから、旅行にはこれにしたほうがいいです。免税で八万円でした。'",
                    "options": [
                        "Tomorrow I will buy two cameras for 8,000 yen.",
                        "Because Model A is lighter than Model B, for travel you'd better choose this one. With tax-free it was 80,000 yen.",
                        "Model B is lighter and costs 88,000 yen.",
                        "Cameras cannot be purchased tax-free."
                    ],
                    "answerIndex": 1,
                    "explanation": "Synthesis of comparatives, advice (〜たほうがいい), decision phrases, large numbers, and tax-free shopping."
                },
                {
                    "prompt": "What is '秋葉原' (Akihabara) famous for in Tokyo?",
                    "options": [
                        "Tokyo's world-famous hub for electronics megastores, anime, gaming, and tech culture",
                        "A mountain hiking resort",
                        "A seafood fish market",
                        "A traditional pottery village"
                    ],
                    "answerIndex": 0,
                    "explanation": "Akihabara (Electric Town) is Tokyo's premier electronics and tech district."
                },
                {
                    "prompt": "What core grammatical and communicative competencies were mastered across Unit 8 in Japanese?",
                    "options": [
                        "Passive and causative-passive forms only",
                        "Classical literary grammar only",
                        "Hiragana strokes only",
                        "Numbers in the ten-thousands (万), price counters (円), asking prices (いくら), ko-so-a-do demonstratives (この/その/あの), comparatives (AのほうがBより), advice (〜たほうがいい), and full retail/tax-free checkout transactions"
                    ],
                    "answerIndex": 3,
                    "explanation": "Unit 8 complete retail shopping, large numbers, comparatives, advice, and tax-free transaction mastery."
                },
                {
                    "prompt": "How much was the tax-free discount on David's camera purchase?",
                    "options": [
                        "50,000 yen discount",
                        "1,000 yen discount",
                        "8,000 yen discount (from ¥88,000 down to ¥80,000 — 10% tax exemption)",
                        "Zero discount"
                    ],
                    "answerIndex": 2,
                    "explanation": "¥88,000 (tax incl.) - 10% tax = ¥80,000 (免税 menzei)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u9-l1": {
        "id": "ja-u9-l1",
        "unit": "ja-u9",
        "level": "A2",
        "objective": "Identify essential Japanese urban transportation modes and railway infrastructure (電車, 地下鉄, 新幹線, バス, タクシー, 駅, 切符, 改札, ホーム, 乗り換え, Suica) and apply the means particle 'で' vs. '歩いて'.",
        "presentation": {
            "explanation": "Welcome to A2 Japanese Unit 9: Directions & Transportation (道案内と交通)! Japan is globally famous for its world-class train network. Master these essential terms:\n\n1. Modes of Transportation (交通機関):\n   - **電車 (でんしゃ / densha)** = electric train / local train\n   - **地下鉄 (ちかてつ / chikatetsu)** = subway / metro\n   - **新幹線 (しんかんせん / shinkansen)** = bullet train\n   - **バス (basu)** = bus\n   - **タクシー (takushii)** = taxi\n   - **自転車 (じてんしゃ / jitensha)** = bicycle\n   - **車 (くるま / kuruma)** = car\n   - **飛行機 (ひこうき / hikouki)** = airplane\n\n2. Particle **で (de)** for Means of Transportation:\n   - Attach **で** to the vehicle: *電車で行きます (densha de ikimasu = I go by train)*; *バスで来ました (basu de kimashita = I came by bus)*.\n   - **Crucial Exception**: Walking on foot uses **歩いて (あるいて / aruite)** with NO particle: *歩いて行きます (aruite ikimasu = I go on foot)*.\n\n3. Railway Infrastructure & Ticketing (駅と切符):\n   - **駅 (えき / eki)** = station (*新宿駅 Shinjuku-eki*)\n   - **切符 (きっぷ / kippu)** = physical ticket\n   - **改札 (かいさつ / kaisatsu)** = ticket barrier / turnstile gate\n   - **ホーム (hoomu)** = station track platform (*3番線ホーム 3-bansen hoomu = Platform 3*)\n   - **乗り換え (のりかえ / norikae)** = train transfer / changing lines\n   - **ICカード (IC kaado / Suica / Pasmo)** = contactless prepaid transit card.",
            "examples": [
                {
                    "target": "新宿駅から渋谷駅までJR山手線で行きます。",
                    "reading": "Shinjuku-eki kara Shibuya-eki made JR Yamanote-sen de ikimasu.",
                    "translation": "I go from Shinjuku Station to Shibuya Station by JR Yamanote Line."
                },
                {
                    "target": "駅からホテルまで歩いて5分です。",
                    "reading": "Eki kara hoteru made aruite go-fun desu.",
                    "translation": "From the station to the hotel is 5 minutes on foot."
                },
                {
                    "target": "改札でSuicaをタッチしてください。",
                    "reading": "Kaisatsu de Suica o tacchi shite kudasai.",
                    "translation": "Please tap your Suica at the ticket barrier."
                }
            ],
            "mnemonics": [
                "VEHICLE + DE (densha de, basu de); WALKING = ARUITE (no de)!",
                "KAISATSU = The ticket gates where you tap Suica!",
                "NORIKAE = Train transfer / changing lines!"
            ],
            "culturalNotes": [
                "Japan's IC cards (Suica, Pasmo, Icoca) work universally across subways, buses, vending machines, and convenience stores nationwide with 99.9% on-time train punctuality."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you say 'I go to Kyoto by Shinkansen (bullet train)' in Japanese?",
                    "options": [
                        "新幹線を京都に行きます。 (41.1)",
                        "新幹線に京都に行きます。 (41.2)",
                        "新幹線へ京都で行きます。 (41.3)",
                        "新幹線で京都に行きます。 (Shinkansen de Kyouto ni ikimasu.) (41.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "Means of transit uses particle で: 新幹線で."
                },
                {
                    "prompt": "Which phrase correctly expresses going 'on foot' without particles?",
                    "options": [
                        "歩きで行きます",
                        "足で行きます",
                        "歩くで行きます",
                        "歩いて行きます (aruite ikimasu)"
                    ],
                    "answerIndex": 3,
                    "explanation": "歩いて (aruite) is the adverbial te-form meaning 'on foot', taking no particle."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: '東京駅で新幹線に乗り換えます。'",
                    "options": [
                        "I missed the train at Tokyo Station. (41.1)",
                        "The Shinkansen does not stop at Tokyo Station. (41.2)",
                        "I bought a Shinkansen ticket in Tokyo. (41.3)",
                        "I transfer to the Shinkansen at Tokyo Station. (41.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "乗り換えます (norikaemasu) = to transfer/change trains."
                },
                {
                    "prompt": "What is the Japanese term for the ticket barrier / turnstile gate?",
                    "options": [
                        "ホーム (platform)",
                        "切符 (ticket)",
                        "出口 (exit)",
                        "改札 (かいさつ / kaisatsu)"
                    ],
                    "answerIndex": 3,
                    "explanation": "改札 (kaisatsu) = ticket gate / barrier."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Match the transportation terms: 地下鉄, 改札, 乗り換え, 新幹線:",
                    "options": [
                        "地下鉄: subway | 改札: ticket barrier | 乗り換え: transfer | 新幹線: bullet train",
                        "All mean bicycles",
                        "All mean streetlights",
                        "地下鉄: bus | 改札: train | 乗り換え: ticket | 新幹線: airport"
                    ],
                    "answerIndex": 0,
                    "explanation": "Public transit infrastructure matching."
                },
                {
                    "prompt": "Translate: '3番線ホームから電車に乗ってください。'",
                    "options": [
                        "The train on Platform 3 is delayed.",
                        "Platform 3 is closed.",
                        "Please buy three tickets.",
                        "Please board the train from Platform 3."
                    ],
                    "answerIndex": 3,
                    "explanation": "3番線ホーム = Platform track 3; 電車に乗ってください = please board the train."
                },
                {
                    "prompt": "Why is '電車で行く' correct, but '歩きで行く' unnatural in Japanese?",
                    "options": [
                        "Because walking is forbidden in Tokyo.",
                        "Because densha is an adjective.",
                        "Because vehicles take the instrumental particle 'で', whereas walking naturally uses the connective te-form verb '歩いて' without 'で'.",
                        "It is a dialect rule."
                    ],
                    "answerIndex": 2,
                    "explanation": "Grammatical syntax: [Vehicle] で vs. 歩いて."
                },
                {
                    "prompt": "Complete: '駅の券売機で_______ (ticket) を買いました。'",
                    "options": [
                        "改札",
                        "切符 (きっぷ / kippu)",
                        "バス",
                        "ホーム"
                    ],
                    "answerIndex": 1,
                    "explanation": "切符を買いました = bought a ticket."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u9-l2": {
        "id": "ja-u9-l2",
        "unit": "ja-u9",
        "level": "A2",
        "objective": "Master Japanese spatial position words (右, 左, まっすぐ, 前, 後ろ, 隣, 近く, 間) and urban landmark reference points (交差点, 信号, 角, 交番).",
        "presentation": {
            "explanation": "Giving and understanding directions in Japanese requires exact spatial location nouns:\n\n1. Spatial Positions (位置の言葉):\n   - **右 (みぎ / migi)** = right (*右に migi ni = to the right*)\n   - **左 (ひだり / hidari)** = left (*左に hidari ni = to the left*)\n   - **まっすぐ (massugu)** = straight ahead (*まっすぐ行く massugu iku*)\n   - **前 (まえ / mae)** = in front of / before (*駅の前 eki no mae*)\n   - **後ろ (うしろ / ushiro)** = behind / in back of (*ビルの後ろ biru no ushiro*)\n   - **隣 (となり / tonari)** = next to (same category neighbor, e.g. next building)\n   - **横 (よこ / yoko)** = beside / side-by-side\n   - **近く (ちかく / chikaku)** = nearby / in the vicinity of (*駅の近く eki no chikaku*)\n   - **間 (あいだ / aida)** = between (*AとBの間 A to B no aida*).\n\n2. Urban Landmark Reference Points (街の目印):\n   - **交差点 (こうさてん / kousaten)** = intersection / crossroads\n   - **信号 (しんごう / shingou)** = traffic light\n   - **角 (かど / kado)** = street corner (*次の角 tsugi no kado*)\n   - **交番 (こうばん / kouban)** = police box (the universal Japanese neighborhood navigation landmark!).",
            "examples": [
                {
                    "target": "銀行は郵便局の隣で、駅の前にあります。",
                    "reading": "Ginkou wa yuubinkyoku no tonari de, eki no mae ni arimasu.",
                    "translation": "The bank is next to the post office and in front of the station."
                },
                {
                    "target": "コンビニとカフェの間に本屋があります。",
                    "reading": "Konbini to kafe no aida ni hon'ya ga arimasu.",
                    "translation": "There is a bookstore between the convenience store and the café."
                },
                {
                    "target": "あの信号の交差点の近くに交番があります。",
                    "reading": "Ano shingou no kousaten no chikaku ni kouban ga arimasu.",
                    "translation": "There is a police box near the traffic light intersection."
                }
            ],
            "mnemonics": [
                "MIGI = Right; HIDARI = Left; MASSUGU = Straight ahead!",
                "AとBのAIDAA = In between A and B!",
                "KOUBAN = The neighborhood police box where officers give directions!"
            ],
            "culturalNotes": [
                "Because Japanese cities historically lack Western-style sequential street names, navigation is done relative to landmarks, train station exits, and local police boxes (交番 kouban), which keep detailed street-block maps (住宅地図)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you say 'to the right' and 'to the left' in Japanese?",
                    "options": [
                        "右に (migi ni) / 左に (hidari ni) (42.1)",
                        "上に / 下に (42.2)",
                        "前に / 後ろに (42.3)",
                        "隣に / 近くに (42.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "右 (migi = right) + 左 (hidari = left)."
                },
                {
                    "prompt": "What is the famous Japanese neighborhood landmark where citizens ask for directions?",
                    "options": [
                        "交番 (こうばん / kouban — neighborhood police box)",
                        "空港 (airport)",
                        "山 (mountain)",
                        "港 (harbor)"
                    ],
                    "answerIndex": 0,
                    "explanation": "Kouban (police box) officers provide maps and walking directions."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: '次の信号を右に曲がってください。'",
                    "options": [
                        "Please stop at the next traffic light. (42.1)",
                        "Please turn right at the next traffic light. (42.2)",
                        "Please go straight past the traffic light. (42.3)",
                        "The traffic light is broken. (42.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "次の信号 (next traffic light) + 右に曲がってください (please turn right)."
                },
                {
                    "prompt": "How do you say 'between the pharmacy and the supermarket' in Japanese?",
                    "options": [
                        "薬局の隣のスーパー",
                        "薬局の前のスーパー",
                        "薬局とスーパーの間 (yakkyoku to suupaa no aida)",
                        "薬局の近くのスーパー"
                    ],
                    "answerIndex": 2,
                    "explanation": "AとBの間 (A to B no aida) = between A and B."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Match the spatial words: 右, まっすぐ, 隣, 交差点:",
                    "options": [
                        "All mean inside",
                        "All mean behind",
                        "右: left | まっすぐ: stop | 隣: far | 交差点: bridge",
                        "右: right | まっすぐ: straight ahead | 隣: next to (neighbor) | 交差点: intersection"
                    ],
                    "answerIndex": 3,
                    "explanation": "Spatial position matching."
                },
                {
                    "prompt": "Translate: '駅の改札を出て、まっすぐ行くと、左側に交番があります。'",
                    "options": [
                        "The police box is inside the station.",
                        "The ticket gates on the left are closed.",
                        "Exit the station ticket gates, go straight ahead, and you will see a police box on the left side.",
                        "Turn right at the station and buy a ticket."
                    ],
                    "answerIndex": 2,
                    "explanation": "改札を出て = exit gates; まっすぐ行くと = if you go straight; 左側に = on the left side."
                },
                {
                    "prompt": "Why do Japanese address systems not rely on street names like Western cities?",
                    "options": [
                        "Because roads are too narrow.",
                        "Japanese addresses are organized hierarchically by prefecture, city, ward, district block (丁目 choume), and building number, making landmark-based navigation essential.",
                        "Because maps are not used.",
                        "Because street names are illegal."
                    ],
                    "answerIndex": 1,
                    "explanation": "Block-based hierarchical address system requires landmark navigation."
                },
                {
                    "prompt": "Complete: '交番はビルの_______ (behind) にあります。'",
                    "options": [
                        "後ろ (うしろ / ushiro)",
                        "右",
                        "間",
                        "前"
                    ],
                    "answerIndex": 0,
                    "explanation": "ビルの後ろ = behind the building."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u9-l3": {
        "id": "ja-u9-l3",
        "unit": "ja-u9",
        "level": "A2",
        "objective": "Give and follow walking directions using polite request forms with '〜てください' (曲がってください, 渡ってください, 行ってください, 降りてください) and the route/point of passage particle 'を'.",
        "presentation": {
            "explanation": "Directing someone in Japanese combines te-form directional verbs with **〜てください** (please do):\n\n1. Essential Directional Verbs (道案内の動詞):\n   - **曲がる (まがる / magaru)** -> **曲がってください (magatte kudasai)** = Please turn\n     - *右に曲がってください (migi ni magatte kudasai = Please turn right)*\n     - *左に曲がってください (hidari ni magatte kudasai = Please turn left)*\n   - **渡る (わたる / wataru)** -> **渡ってください (watatte kudasai)** = Please cross\n     - *道を渡ってください (michi o watatte kudasai = Please cross the street)*\n     - *横断歩道を渡ってください (oudanhodou o watatte kudasai = Please cross the pedestrian crossing)*\n   - **行く (いく / iku)** -> **行ってください (itte kudasai)** = Please go / proceed\n     - *まっすぐ行ってください (massugu itte kudasai = Please go straight ahead)*\n   - **降りる (おりる / oriru)** -> **降りてください (orite kudasai)** = Please get off (train/bus)\n     - *次の駅で降りてください (tsugi no eki de orite kudasai = Please get off at the next station)*.\n\n2. The Route Particle **を (o)** for Spatial Passage:\n   - In Japanese, the space or landmark being traversed, crossed, or turned around takes **を**:\n     - *角**を**右に曲がります (kado **o** migi ni magarimasu = Turn right **at/around** the corner)*\n     - *橋**を**渡ります (hashi **o** watarimasu = Cross **over** the bridge)*\n     - *公園**を**歩きます (kouen **o** arukimasu = Walk **through** the park)*.",
            "examples": [
                {
                    "target": "この道をまっすぐ行って、二つ目の角を左に曲がってください。",
                    "reading": "Kono michi o massugu itte, futatsume no kado o hidari ni magatte kudasai.",
                    "translation": "Go straight down this street, and please turn left at the second corner."
                },
                {
                    "target": "横断歩道を渡ると、右手に郵便局が見えます。",
                    "reading": "Oudanhodou o wataru to, migite ni yuubinkyoku ga miemasu.",
                    "translation": "When you cross the pedestrian crossing, you will see the post office on your right."
                },
                {
                    "target": "渋谷駅で地下鉄銀座線に乗り換えてください。",
                    "reading": "Shibuya-eki de chikatetsu Ginza-sen ni norikaete kudasai.",
                    "translation": "Please transfer to the subway Ginza Line at Shibuya Station."
                }
            ],
            "mnemonics": [
                "KADO O MAGARU = Turn around the corner (take particle を)!",
                "HASHI O WATARU = Cross the bridge!",
                "MASSUGU ITTE KUDASAI = Please go straight ahead!"
            ],
            "culturalNotes": [
                "In Japanese direction giving, terms like '右手 (みぎて / migite = your right hand side)' and '左手 (ひだりて / hidarite = your left hand side)' are commonly used to point out visible landmarks."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you politely say 'Please turn right at the corner' in Japanese?",
                    "options": [
                        "角で右に行く。 (43.1)",
                        "角に右を曲がる。 (43.2)",
                        "角を右に曲がってください。 (Kado o migi ni magatte kudasai.) (43.3)",
                        "角から右へ渡る。 (43.4)"
                    ],
                    "answerIndex": 2,
                    "explanation": "角を (route of turn) + 右に曲がってください (please turn right)."
                },
                {
                    "prompt": "What particle marks the bridge when crossing it: '橋 _______ (cross) 渡ってください'?",
                    "options": [
                        "に",
                        "で",
                        "へ",
                        "を (o — marking space traversed)"
                    ],
                    "answerIndex": 3,
                    "explanation": "Verbs of motion across space (wataru, tooru, aruku) govern particle を."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: 'あの信号を渡って、まっすぐ行くと、右側にあります。'",
                    "options": [
                        "Cross that traffic light, go straight ahead, and it will be on the right side. (43.1)",
                        "Turn left at the traffic light and stop. (43.2)",
                        "Do not cross at that traffic light. (43.3)",
                        "The traffic light on the right is closed. (43.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "信号を渡って = cross traffic light; まっすぐ行くと = going straight; 右側にあります = is on right."
                },
                {
                    "prompt": "What does '二つ目の角 (ふたつめのかど / futatsume no kado)' mean?",
                    "options": [
                        "The second corner",
                        "Two corners",
                        "The first corner",
                        "A corner with two shops"
                    ],
                    "answerIndex": 0,
                    "explanation": "二つ目 (futatsume) = the second one (ordinal counter)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Match the direction commands: まっすぐ行ってください, 左に曲がってください, 道を渡ってください, 電車を降りてください:",
                    "options": [
                        "All are food verbs",
                        "All mean buy tickets",
                        "まっすぐ行ってください: please go straight | 左に曲がってください: please turn left | 道を渡ってください: please cross the street | 電車を降りてください: please get off the train",
                        "All mean stop"
                    ],
                    "answerIndex": 2,
                    "explanation": "Directional te-kudasai commands matching."
                },
                {
                    "prompt": "Translate: 'すみません、浅草寺へはどう行きますか。 — この道をまっすぐ行ってください。'",
                    "options": [
                        "Asakusa is far from here.",
                        "Excuse me, how do I get to Sensoji Temple? — Please go straight along this street.",
                        "Where is the subway to Asakusa? — Take a taxi.",
                        "Sensoji Temple is closed today."
                    ],
                    "answerIndex": 1,
                    "explanation": "どう行きますか = how do I go; この道をまっすぐ行ってください = please go straight."
                },
                {
                    "prompt": "Why does '角を曲がる' take the particle 'を' rather than 'で'?",
                    "options": [
                        "In Japanese, the particle 'を' marks the physical spatial medium or point through/around which motion occurs with verbs of movement.",
                        "It is a modern slang rule.",
                        "Because kado is a food item.",
                        "Because magaru is an irregular adjective."
                    ],
                    "answerIndex": 0,
                    "explanation": "Particle を marks spatial points of traversal with motion verbs."
                },
                {
                    "prompt": "Complete: '次の駅で山手線を_______ (please get off).'",
                    "options": [
                        "曲がってください",
                        "渡ってください",
                        "乗ってください",
                        "降りてください (おりてください / orite kudasai)"
                    ],
                    "answerIndex": 3,
                    "explanation": "降りてください = please get off."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u9-l4": {
        "id": "ja-u9-l4",
        "unit": "ja-u9",
        "level": "A2",
        "objective": "Master the precise grammatical functions of Japanese spatial and motion particles: 'に' (specific arrival point / target), 'へ' (directional orientation), 'で' (means / venue of action), and 'を' (space traversed / departed).",
        "presentation": {
            "explanation": "Mastering the 4 directional particles unlocks full fluency in Japanese navigation and travel:\n\n1. **に (ni)** — Specific Target / Exact Destination / Static Location:\n   - **Destination of Motion**: *東京駅**に**着きました (Tokyo-eki ni tsukimashita = Arrived **at** Tokyo Station)*.\n   - **Directional Target**: *右**に**曲がる (migi ni magaru = Turn **to the** right)*.\n   - **Existence**: *交番は駅の隣**に**あります (kouban wa eki no tonari ni arimasu = Police box is **next to** the station)*.\n\n2. **へ (he, pronounced 'e')** — General Direction / Heading Towards:\n   - Expresses orientation heading toward a destination (like English 'towards'):\n     - *京都**へ**向かいます (Kyouto **e** mukaimasu = Heading **towards** Kyoto)*\n     - *日本**へ**ようこそ (Nihon **e** youkoso = Welcome **to** Japan!).*\n\n3. **で (de)** — Means of Transit / Venue of Action:\n   - **Means / Instrument**: *新幹線**で**行く (shinkansen **de** iku = Go **by** bullet train)*.\n   - **Location of Active Event**: *新宿駅**で**切符を買う (Shinjuku-eki **de** kippu o kau = Buy tickets **at** Shinjuku Station)*.\n\n4. **を (o)** — Space Traversed / Point of Departure:\n   - **Route Traversed**: *公園**を**散歩する (kouen **o** sanpo suru = Stroll **through** the park)*; *道を渡る (michi **o** wataru = Cross the road)*.\n   - **Point of Departure / Leaving**: *家**を**出る (ie **o** deru = Leave the house)*; *電車**を**降りる (densha **o** oriru = Get off the train)*.",
            "examples": [
                {
                    "target": "新幹線で東京から京都へ行きます。",
                    "reading": "Shinkansen de Toukyou kara Kyouto e ikimasu.",
                    "translation": "I go from Tokyo towards Kyoto by Shinkansen."
                },
                {
                    "target": "駅で切符を買って、改札を通って、電車に乗りました。",
                    "reading": "Eki de kippu o katte, kaisatsu o tootte, densha ni norimashita.",
                    "translation": "I bought a ticket at the station, passed through the gate, and boarded the train."
                },
                {
                    "target": "次の角を右に曲がると、左側に博物館があります。",
                    "reading": "Tsugi no kado o migi ni magaru to, hidarigawa ni hakubutsukan ga arimasu.",
                    "translation": "When you turn right around the next corner, the museum is on the left side."
                }
            ],
            "mnemonics": [
                "NI = Exact destination / point (eki ni iku)!",
                "E (written へ) = Direction towards (Kyouto e)!",
                "DE = Means / Action venue (densha de, eki de)!",
                "O (written を) = Space traversed / left (michi o wataru, densha o oriru)!"
            ],
            "culturalNotes": [
                "The subtle nuance: '東京に行きます' emphasizes Tokyo as the final arrival point, while '東京へ行きます' emphasizes the voyage and journey towards Tokyo."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choose the correct particles: 'バス _______ (by) 駅 _______ (to) 行きます。'",
                    "options": [
                        "を / へ (44.1)",
                        "で / に (Basu de eki ni ikimasu.) (44.2)",
                        "へ / で (44.3)",
                        "に / で (44.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "Means uses で (basu de) + destination uses に (eki ni)."
                },
                {
                    "prompt": "Which particle marks departure when leaving a train: '電車 _______ 降りました'?",
                    "options": [
                        "を (densha o orimashita — point of departure)",
                        "で",
                        "へ",
                        "に"
                    ],
                    "answerIndex": 0,
                    "explanation": "Point of departure/leaving takes を (densha o oriru, ie o deru)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: '公園を歩いて、駅の前で友達に会いました。'",
                    "options": [
                        "I walked through the park and met my friend in front of the station. (44.1)",
                        "The park is behind the station. (44.2)",
                        "I ran away from the station into the park. (44.3)",
                        "My friend is waiting in the park. (44.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "公園を歩いて (walked through park) + 駅の前で会いました (met in front of station)."
                },
                {
                    "prompt": "What is the difference between '駅にあります' and '駅で買います'?",
                    "options": [
                        "'駅にあります' uses に for static existence (the thing is located at the station); '駅で買います' uses で for active action (buying occurs at the station).",
                        "The second is walking.",
                        "There is no difference.",
                        "The first is past tense."
                    ],
                    "answerIndex": 0,
                    "explanation": "に for existence (arimasu/imasu) vs. で for dynamic action venue."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Match the particle functions: で, に, へ, を:",
                    "options": [
                        "All mean 'with'",
                        "で: Means / action venue | に: Exact target / destination | へ: Direction towards | を: Space traversed / departure",
                        "All are question markers",
                        "All mean 'from'"
                    ],
                    "answerIndex": 1,
                    "explanation": "Directional particle functional definitions."
                },
                {
                    "prompt": "Translate: '橋を渡って、右に曲がると、交番の前に着きます。'",
                    "options": [
                        "Cross the bridge, turn right, and you will arrive in front of the police box.",
                        "The bridge is closed in front of the police box.",
                        "The police box is on the bridge.",
                        "Turn left before the bridge."
                    ],
                    "answerIndex": 0,
                    "explanation": "橋を渡って (cross bridge) + 右に曲がると (turn right) + 前に着きます (arrive in front)."
                },
                {
                    "prompt": "Why does '電車に乗る' take 'に' while '電車を降りる' takes 'を'?",
                    "options": [
                        "It is completely random.",
                        "Because noru is a noun.",
                        "Because oriru is past tense.",
                        "Boarding (乗る) represents entering/arriving onto a specific target (marked by に), while exiting (降りる) represents departing/leaving a space (marked by を)."
                    ],
                    "answerIndex": 3,
                    "explanation": "Target of attachment (に) vs. point of detachment (を)."
                },
                {
                    "prompt": "Complete: '飛行機_______ (by) 日本_______ (towards) 行きます。'",
                    "options": [
                        "を / で",
                        "に / で",
                        "で / へ (or に)",
                        "から / を"
                    ],
                    "answerIndex": 2,
                    "explanation": "飛行機で (by plane) + 日本へ (towards Japan)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u9-l5": {
        "id": "ja-u9-l5",
        "unit": "ja-u9",
        "level": "A2",
        "objective": "Demonstrate comprehensive A2 navigation fluency by understanding and participating in a multi-turn dialogue navigating Shinjuku Station, taking the JR Yamanote Line, tapping Suica at the turnstiles, and asking a police box (交番) officer for walking directions to Meiji Jingu Shrine in Harajuku.",
        "presentation": {
            "explanation": "In this Master Checkpoint for Unit 9, we synthesize transit modes, railway terminology (Suica, kaisatsu, Yamanote Line), spatial positions, and polite direction-asking in Tokyo:\n\n1. The Setting:\n   - **David** (traveler) is at the world's busiest railway hub, **新宿駅 (Shinjuku Station)** in Tokyo. He wants to visit **明治神宮 (Meiji Jingu Shrine)** in nearby Harajuku. He navigates the station with station staff (**駅員 eki'in**) and asks a neighborhood police officer (**お巡りさん omawari-san**) at the Harajuku **交番 (kouban)**.\n\n2. Authentic Cultural Dialogue:\n   - **デービッド (David)**: すみません、明治神宮へ行きたいんですが、何線に乗ればいいですか？ (*Excuse me, I want to go to Meiji Jingu Shrine, which train line should I take?*)\n   - **駅員 (Station Staff)**: JR山手線の内回り、14番線ホームから品川・渋谷方面の電車に乗ってください。原宿駅で降ります。二駅ですよ。 (*Please take the JR Yamanote Line (Inner Loop) from Platform 14 for Shinagawa/Shibuya. Get off at Harajuku Station. It's two stops.*)\n   - **デービッド**: ありがとうございます！Suicaで乗れますか？ (*Thank you! Can I ride with Suica?*)\n   - **駅員**: はい、改札機の青い部分にSuicaをタッチしてください。 (*Yes, please tap your Suica on the blue sensor of the ticket gate.*)\n   - *(デービッドは山手線に乗って原宿駅に到着し、西口を出る)*\n   - **デービッド (原宿駅前の交番で)**: すみません、お巡りさん。明治神宮の入口へはどう行きますか？ (*Excuse me, officer. How do I get to the entrance of Meiji Jingu Shrine?*)\n   - **お巡りさん (Police Officer)**: ああ、明治神宮ですね。簡単ですよ。駅の西口を出て、右に曲がってください。大きな神宮橋がありますから、橋を渡ってまっすぐ行ってください。 (*Ah, Meiji Jingu Shrine. It's very easy. Exit the station's West Exit and turn right. There is the large Jingu Bridge, so cross the bridge and go straight ahead.*)\n   - **デービッド**: 橋を渡って、まっすぐですね。 (*Cross the bridge, and go straight ahead, right?*)\n   - **お巡りさん**: はい。すぐに大きな木造の鳥居（とりい）が見えます。そこが明治神宮の入口です。歩いて2分くらいですよ。 (*Yes. You will immediately see a huge wooden Torii gate. That is the entrance to Meiji Jingu. It's about 2 minutes on foot.*)\n   - **デービッド**: よく分かりました！ご親切にありがとうございました！ (*I understand well! Thank you very much for your kindness!*)\n   - **お巡りさん**: いいえ、いってらっしゃい！良いお参りを！ (*You're welcome, have a great visit!*)",
            "examples": [
                {
                    "target": "JR山手線の14番線ホームから電車に乗って、原宿駅で降ります。",
                    "reading": "JR Yamanote-sen no juu-yon-bansen hoomu kara densha ni notte, Harajuku-eki de orimasu.",
                    "translation": "Board the train from Platform 14 of the JR Yamanote Line, and get off at Harajuku Station."
                },
                {
                    "target": "神宮橋を渡ってまっすぐ行くと、大きな鳥居が見えます。",
                    "reading": "Jinguubashi o watatte massugu iku to, ookina torii ga miemasu.",
                    "translation": "When you cross Jingu Bridge and go straight, you will see a large Torii gate."
                },
                {
                    "target": "改札機の青い部分にSuicaをタッチしてください。",
                    "reading": "Kaisatsuki no aoi bubun ni Suica o tacchi shite kudasai.",
                    "translation": "Please tap your Suica on the blue sensor of the ticket barrier."
                }
            ],
            "mnemonics": [
                "YAMANOTE LINE = Tokyo's famous green loop line connecting Shinjuku, Shibuya, Tokyo!",
                "TORII = Iconic vermilion or cedar wooden Shinto shrine gate marking sacred ground!",
                "OMAWARI-SAN = Friendly Japanese term for neighborhood police box officer."
            ],
            "culturalNotes": [
                "Meiji Jingu Shrine, surrounded by a 170-acre forested park in the center of Tokyo containing over 120,000 evergreen trees donated from across Japan, welcomes over 3 million visitors during New Year's Hatsumoude alone."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "What train line did the station staff instruct David to take from Shinjuku Station to Harajuku?",
                    "options": [
                        "JR山手線 (JR Yamanote Line — Platform 14, two stops to Harajuku) (45.1)",
                        "新幹線 (Shinkansen) (45.2)",
                        "地下鉄銀座線 (45.3)",
                        "成田エクスプレス (45.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "The station staff directed David to take the JR Yamanote Line from Platform 14."
                },
                {
                    "prompt": "What landmark marks the entrance of Meiji Jingu Shrine after crossing Jingu Bridge?",
                    "options": [
                        "A huge wooden Torii gate (大きな木造の鳥居)",
                        "A shopping mall",
                        "A train track",
                        "A swimming pool"
                    ],
                    "answerIndex": 0,
                    "explanation": "The police officer noted: '大きな木造の鳥居が見えます' (you will see a huge wooden Torii gate)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "How many train stops is Harajuku Station from Shinjuku Station on the Yamanote Line?",
                    "options": [
                        "1 stop (45.1)",
                        "2 stops (二駅 / futa-eki — Shinjuku -> Yoyogi -> Harajuku) (45.2)",
                        "5 stops (45.3)",
                        "10 stops (45.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "The staff confirmed: '二駅ですよ' (it's 2 stops)."
                },
                {
                    "prompt": "Translate: '改札を出て、右に曲がってください。'",
                    "options": [
                        "The ticket gates are on the right.",
                        "Exit the ticket gates, and please turn right.",
                        "Please buy a ticket on the right.",
                        "Turn left inside the train."
                    ],
                    "answerIndex": 1,
                    "explanation": "改札を出て (exit ticket gates) + 右に曲がってください (please turn right)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate the complete sentence: '新宿駅からJR山手線に乗って原宿駅で降り、橋を渡って明治神宮に行きました。'",
                    "options": [
                        "I boarded the JR Yamanote Line from Shinjuku Station, got off at Harajuku Station, crossed the bridge, and went to Meiji Jingu Shrine.",
                        "Tomorrow I will take a taxi from Tokyo Station to Mount Fuji.",
                        "Meiji Jingu Shrine was closed and there were no trains running.",
                        "I lost my Suica card inside Harajuku Station."
                    ],
                    "answerIndex": 0,
                    "explanation": "Synthesis of transit boarding (に乗って), alighting (で降り), route traversal (橋を渡って), and destination (に行きました)."
                },
                {
                    "prompt": "What is 'Suica' in Japanese transit culture?",
                    "options": [
                        "A Tokyo taxi company",
                        "A type of watermelon only",
                        "A Japanese bullet train model",
                        "A contactless prepaid IC transit card used seamlessly across Japanese trains, subways, buses, and convenience stores"
                    ],
                    "answerIndex": 3,
                    "explanation": "Suica is Japan's ubiquitous rechargeable contactless IC card."
                },
                {
                    "prompt": "What core grammatical, lexical, and navigational competencies were mastered across Unit 9 in Japanese?",
                    "options": [
                        "Honorific sonkeigo verb conjugations only",
                        "Classical Heian court Japanese only",
                        "Public transit vocabulary (densha, chikatetsu, shinkansen, eki, kaisatsu, hoomu), spatial position words (migi, hidari, massugu, aida), direction commands with te-kudasai (magatte, watatte, orite), the 4-particle framework (ni, e, de, o), and Tokyo railway station navigation",
                        "Hiragana stroke orders only"
                    ],
                    "answerIndex": 2,
                    "explanation": "Unit 9 comprehensive Japanese transit, spatial positions, te-kudasai direction giving, particle mastery, and station navigation."
                },
                {
                    "prompt": "What friendly phrase did the police officer say to David as he departed for the shrine?",
                    "options": [
                        "さようなら、もう来ないでください。",
                        "いってらっしゃい！良いお参りを！ (Have a great trip! Have a wonderful shrine visit!)",
                        "ごちそうさまでした！",
                        "おやすみなさい！"
                    ],
                    "answerIndex": 1,
                    "explanation": "The officer warmly wished David: 'いってらっしゃい！良いお参りを！'"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u10-l1": {
        "id": "ja-u10-l1",
        "unit": "ja-u10",
        "level": "A2",
        "objective": "Identify and describe rooms of a Japanese residence and traditional architectural elements (玄関 genkan, 和室 washitsu, 畳 tatami, 障子 shōji, お風呂 ofuro, 台所 daidokoro).",
        "presentation": {
            "explanation": "In this lesson, we explore **The Japanese Home & Architecture (日本の家と部屋)**:\n\n1. Essential Rooms & Architectural Features:\n   - **玄関 (げんかん / genkan)**: entranceway / entryway (where shoes are removed!)\n   - **部屋 (へや / heya)**: room / bedroom\n   - **和室 (わしつ / washitsu)**: traditional Japanese-style room\n   - **洋室 (ようしつ / yōshitsu)**: Western-style room\n   - **台所 (だいどころ / daidokoro) / キッチン (kicchin)**: kitchen\n   - **お風呂 (おふろ / ofuro) / 浴室 (よくしつ / yokushitsu)**: deep soaking bath / bathroom\n   - **お手洗い (おてあらい / otearai) / トイレ (toire)**: restroom / toilet\n   - **居間 (いま / ima) / リビング (ribingu)**: living room\n   - **畳 (たたみ / tatami)**: woven rush grass mat (used to measure room area, e.g. 六畳 rokujō = 6-mat room)\n   - **障子 (しょうじ / shōji)**: sliding paper lattice doors\n\n2. Cultural Protocol at the Genkan:\n   - In Japanese homes, shoes are ALWAYS removed at the lower step of the **玄関 (genkan)** before stepping up into the raised living area and putting on indoor slippers (スリッパ).",
            "examples": [
                {
                    "target": "玄関で靴を脱いで、スリッパを履きます。",
                    "reading": "Genkan de kutsu o nuide, surippa o hakimasu.",
                    "translation": "I take off my shoes at the entrance and put on slippers."
                },
                {
                    "target": "このアパートの和室は六畳で、とても静かです。",
                    "reading": "Kono apāto no washitsu wa rokujō de, totemo shizuka desu.",
                    "translation": "The Japanese-style room in this apartment is 6 tatami mats and very quiet."
                }
            ],
            "mnemonics": [
                "GENKAN = Entranceway (gen = mysterious/gateway, kan = barrier)!",
                "WASHITSU = Japanese room (wa = Japanese, shitsu = room) vs. YŌSHITSU = Western room (yō = ocean/western)!",
                "TATAMI MAT COUNT: 六畳 (rokujō = 6 mats) is the standard cozy apartment size!"
            ],
            "culturalNotes": [
                "In Japanese apartments, Japanese soaking baths (お風呂 ofuro) and toilets (トイレ toire) are almost always in completely separate rooms, preserving the ritual purity of bathing."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "日本の家で、靴を脱ぐ場所は何と呼ばれますか？ (What is the entrance area where shoes are taken off called?)",
                    "options": [
                        "台所 (だいどころ) (46.1)",
                        "お風呂 (おふろ) (46.2)",
                        "ベランダ (46.3)",
                        "玄関 (げんかん / genkan) (46.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "玄関 (genkan) is the dedicated entrance foyer where shoes are removed."
                },
                {
                    "prompt": "伝統的な日本風の部屋を何と言いますか？ (What is a traditional Japanese-style room called?)",
                    "options": [
                        "洋室 (ようしつ)",
                        "廊下 (ろうか)",
                        "台所 (だいどころ)",
                        "和室 (わしつ / washitsu)"
                    ],
                    "answerIndex": 3,
                    "explanation": "和室 (washitsu) means a traditional Japanese-style tatami room."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "部屋の広さを表す単位「畳」の読み方は何ですか？ (How is the room-area unit 畳 read?)",
                    "options": [
                        "かい (46.1)",
                        "ほん (46.2)",
                        "まい (46.3)",
                        "じょう (jō / tatami count e.g. 六畳 rokujō) (46.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "畳 as a counter for room size is read じょう (jō), e.g. 6畳 (rokujō)."
                },
                {
                    "prompt": "正しい文を選んでください: 'The kitchen is very clean.'",
                    "options": [
                        "お風呂はとても高いです。",
                        "玄関はとても赤いです。",
                        "和室はとても辛いです。",
                        "台所はとてもきれいです。 (Daidokoro wa totemo kirei desu.)"
                    ],
                    "answerIndex": 3,
                    "explanation": "台所 (daidokoro = kitchen) + きれい (clean/pretty)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "単語と意味を一致させてください: 玄関, 台所, 和室, お風呂:",
                    "options": [
                        "玄関: bedroom | 台所: balcony | 和室: garage | お風呂: living room",
                        "All mean bedroom",
                        "All mean office",
                        "玄関: entryway | 台所: kitchen | 和室: tatami room | お風呂: deep bath"
                    ],
                    "answerIndex": 3,
                    "explanation": "Japanese room vocabulary matching."
                },
                {
                    "prompt": "なぜ日本の家では風呂場とトイレが別々になっていることが多いですか？",
                    "options": [
                        "法律で禁止されているから",
                        "水道管が1本しかないから",
                        "清潔とリラックスを重視し、体を洗って温まるお風呂の空間を神聖・衛生的に保つため (#ScienceOfLearning)",
                        "偶然の習慣にすぎない"
                    ],
                    "answerIndex": 2,
                    "explanation": "Separating bath and toilet maintains cleanliness and bathing relaxation."
                },
                {
                    "prompt": "文を完成させてください: 「私の部屋は_______（4.5畳）です。」",
                    "options": [
                        "四畳十",
                        "四畳半 (よじょうはん / yojōhan)",
                        "四本半",
                        "四枚半"
                    ],
                    "answerIndex": 1,
                    "explanation": "四畳半 (yojōhan = 4.5 tatami mats) is a classic Japanese room measurement."
                },
                {
                    "prompt": "和室にある紙でできた引き戸は何ですか？",
                    "options": [
                        "障子 (しょうじ / shōji)",
                        "はし",
                        "きもの",
                        "すし"
                    ],
                    "answerIndex": 0,
                    "explanation": "障子 (shōji) are the sliding translucent paper screen doors."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u10-l2": {
        "id": "ja-u10-l2",
        "unit": "ja-u10",
        "level": "A2",
        "objective": "Express the existence and spatial location of furniture and household items using the existence constructions 〜に〜があります (inanimate objects) and 〜に〜がいます (animate beings).",
        "presentation": {
            "explanation": "In this lesson, we master **Furniture & Existence Structures (家具と存在表現)** in Japanese:\n\n1. Essential Furniture Items (家具 / kagu):\n   - **机 (つくえ / tsukue)**: desk\n   - **椅子 (いす / isu)**: chair\n   - **ベッド (beddo)**: bed\n   - **布団 (ふとん / futon)**: traditional Japanese sleeping mattress\n   - **本棚 (ほんだな / hondana)**: bookshelf\n   - **冷蔵庫 (れいぞうこ / reizōko)**: refrigerator\n   - **電子レンジ (でんしれんじ / denshirenji)**: microwave oven\n   - **洗濯機 (せんたくき / sentakuki)**: washing machine\n   - **テレビ (terebi)**: television\n\n2. The Core Existence Grammar:\n   - **[Place] に [Inanimate Item] が あります**: There is [item] in [place].\n     - *部屋に机とベッドがあります。* (There is a desk and a bed in the room.)\n   - **[Place] に [Person / Animal] が います**: There is [person/animal] in [place].\n     - *リビングに猫がいます。* (There is a cat in the living room.)\n\n3. Relative Spatial Positions:\n   - **上 (うえ / ue)**: on / above\n   - **下 (した / shita)**: under / below\n   - **中 (なか / naka)**: inside\n   - **隣 (となり / tonari)**: next to (same category)\n   - **横 (よこ / yoko)**: beside / next to\n   - *机の上にパソコンがあります。* (There is a laptop on the desk.)",
            "examples": [
                {
                    "target": "机の横に本棚があります。",
                    "reading": "Tsukue no yoko ni hondana ga arimasu.",
                    "translation": "There is a bookshelf next to the desk."
                },
                {
                    "target": "冷蔵庫の中に冷たいお茶がありますよ。",
                    "reading": "Reizōko no naka ni tsumetai ocha ga arimasu yo.",
                    "translation": "There is cold tea inside the refrigerator."
                }
            ],
            "mnemonics": [
                "ARIMASU = for inanimate non-living things (furniture, books, electronics)!",
                "IMASU = for animate living beings (people, cats, dogs)!",
                "UE = up/above; SHITA = under/below; NAKA = inside!"
            ],
            "culturalNotes": [
                "Traditional Japanese futons (布団) are folded and stored inside sliding closets (押入れ oshiire) every morning, allowing a single washitsu room to transform from a bedroom at night into a living space by day."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "家具や物（無生物）の存在を表す動詞はどちらですか？ (Which verb expresses the existence of inanimate objects like furniture?)",
                    "options": [
                        "あります (arimasu) (47.1)",
                        "たべます (tabemasu) (47.2)",
                        "います (imasu) (47.3)",
                        "いきます (ikimasu) (47.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "あります (arimasu) is used for non-living objects and furniture."
                },
                {
                    "prompt": "「机の上」の意味は何ですか？",
                    "options": [
                        "On top of the desk (on the desk)",
                        "Under the desk",
                        "Behind the desk",
                        "Inside the desk"
                    ],
                    "answerIndex": 0,
                    "explanation": "机 (desk) + の + 上 (top/above) = on top of the desk."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "正しい文を選んでください: 'There is a cat under the chair.'",
                    "options": [
                        "椅子の下に猫があります。 (47.1)",
                        "椅子の下に猫がいます。 (Isu no shita ni neko ga imasu.) (47.2)",
                        "机の上に犬がいます。 (47.3)",
                        "部屋の中に車があります。 (47.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "猫 (cat = living animal) requires います, and 下 means under."
                },
                {
                    "prompt": "「冷蔵庫」の読み方は何ですか？",
                    "options": [
                        "せんたくき",
                        "ほんだな",
                        "れいぞうこ (reizōko)",
                        "でんしれんじ"
                    ],
                    "answerIndex": 2,
                    "explanation": "冷蔵庫 is read れいぞうこ (reizōko = refrigerator)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "「あります」と「います」の使い分けとして正しいものはどれですか？",
                    "options": [
                        "夜は「います」、昼は「あります」を使う",
                        "大きな物には「います」、小さな物には「あります」を使う",
                        "本棚・冷蔵庫・テレビには「あります」、家族・友達・犬には「います」を使う (#ScienceOfLearning)",
                        "どちらも全く同じで違いはない"
                    ],
                    "answerIndex": 2,
                    "explanation": "Inanimate objects take あります; animate living beings take います."
                },
                {
                    "prompt": "日本語に翻訳してください: 'There is a television in the living room.'",
                    "options": [
                        "お風呂にテレビがあります。",
                        "リビングにテレビがあります。 (Ribingu ni terebi ga arimasu.)",
                        "玄関にテレビを置きます。",
                        "リビングにテレビがいます。"
                    ],
                    "answerIndex": 1,
                    "explanation": "リビングにテレビがあります."
                },
                {
                    "prompt": "本を入れる家具は何ですか？",
                    "options": [
                        "本棚 (ほんだな / hondana)",
                        "布団 (ふとん)",
                        "鏡 (かがみ)",
                        "洗濯機 (せんたくき)"
                    ],
                    "answerIndex": 0,
                    "explanation": "本棚 (hondana) is a bookshelf."
                },
                {
                    "prompt": "文を完成させてください: 「部屋に何_______ありますか。」",
                    "options": [
                        "で (de)",
                        "を (o)",
                        "へ (e)",
                        "が (ga)"
                    ],
                    "answerIndex": 3,
                    "explanation": "Existence constructions take the particle が: 何がありますか (What is there?)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u10-l3": {
        "id": "ja-u10-l3",
        "unit": "ja-u10",
        "level": "A2",
        "objective": "Connect and chain multiple adjectives to describe homes and daily environments smoothly using the 〜くて form for い-adjectives and the 〜で form for な-adjectives.",
        "presentation": {
            "explanation": "When describing a home in Japanese, you frequently need to combine multiple attributes (e.g. *'spacious and bright'*, *'quiet and convenient'*): **Adjective Chaining (形容詞の連結)**:\n\n1. Chaining い-Adjectives (Drop い $\\rightarrow$ add 〜くて):\n   - **広い (ひろい / spacious)** $\\rightarrow$ **広くて (hirokute)**\n   - **明るい (あかるい / bright)** $\\rightarrow$ **明るくて (akarukute)**\n   - **新しい (あたらしい / new)** $\\rightarrow$ **新しくて (atarashikute)**\n   - **いい / 良い (good - irregular!)** $\\rightarrow$ **よくて (yokute)**\n   - *Example*: *私の部屋は広くて明るいです。* (My room is spacious and bright.)\n\n2. Chaining な-Adjectives (Drop な $\\rightarrow$ add 〜で):\n   - **静か [な] (しずか / quiet)** $\\rightarrow$ **静かで (shizuka de)**\n   - **便利 [な] (べんり / convenient)** $\\rightarrow$ **便利で (benri de)**\n   - **きれい [な] (clean/pretty)** $\\rightarrow$ **れいで (kirei de)**\n   - *Example*: *このアパートは静かで便利です。* (This apartment is quiet and convenient.)\n\n3. Mixed Combinations:\n   - *部屋はきれいで（な-adj）、広いです（い-adj）。* (The room is clean and spacious.)\n   - *家賃は安くて（い-adj）、便利です（な-adj）。* (The rent is cheap and convenient.)",
            "examples": [
                {
                    "target": "この家は新しくて、とてもきれいです。",
                    "reading": "Kono ie wa atarashikute, totemo kirei desu.",
                    "translation": "This house is new and very clean."
                },
                {
                    "target": "駅の近くは便利で、夜も明るいです。",
                    "reading": "Eki no chikaku wa benri de, yoru mo akarui desu.",
                    "translation": "Near the station is convenient and bright even at night."
                }
            ],
            "mnemonics": [
                "I-ADJECTIVES CHAIN WITH -KUTE: Hiroi -> Hiro-kute (Spacious and...)!",
                "NA-ADJECTIVES CHAIN WITH -DE: Shizuka -> Shizuka de (Quiet and...)!",
                "IRREGULAR II -> YOKUTE: 'Ii' (good) becomes 'yokute'!"
            ],
            "culturalNotes": [
                "In Japanese real estate apartment listings (賃貸情報 chintai jōhō), properties are praised with chained descriptors like 「南向きで日当たりが良くて静か」 (South-facing, well-sunlit, and quiet)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "い形容詞「広い（ひろい）」を他の形容詞とつなげるときの形は何ですか？ (How do you chain the i-adj 'hiroi'?)",
                    "options": [
                        "広いで (48.1)",
                        "広くに (48.2)",
                        "広くて (hirokute) (48.3)",
                        "広くだ (48.4)"
                    ],
                    "answerIndex": 2,
                    "explanation": "い-adjectives drop い and add 〜くて: 広くて (hirokute)."
                },
                {
                    "prompt": "な形容詞「静か（しずか）」を他の形容詞とつなげるときの形は何ですか？ (How do you chain the na-adj 'shizuka'?)",
                    "options": [
                        "静かくて",
                        "静かに",
                        "静かだ",
                        "静かで (shizuka de)"
                    ],
                    "answerIndex": 3,
                    "explanation": "な-adjectives attach 〜で: 静かで (shizuka de)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "正しい文を選んでください: 'The apartment is cheap and convenient.'",
                    "options": [
                        "アパートは安くて、便利です。 (Apāto wa yasukute, benri desu.) (48.1)",
                        "アパートは安いで、便利です。 (48.2)",
                        "アパートは安くてです。 (48.3)",
                        "アパートは安くて、便利くてです。 (48.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "安い (yasui -> yasukute) + 便利です (benri desu)."
                },
                {
                    "prompt": "形容詞「いい（良い）」をつなげる形（〜くて）はどう変化しますか？",
                    "options": [
                        "よくて (yokute - 不規則変化)",
                        "いくて",
                        "いいで",
                        "いいて"
                    ],
                    "answerIndex": 0,
                    "explanation": "いい conjugates from its classical stem よい -> よくて."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "形容詞の連結形を一致させてください: 新しい, きれい[な], 広い, 便利[な]:",
                    "options": [
                        "All end in -kute",
                        "新しい: 新しくて | きれい: きれいで | 広い: 広くて | 便利: 便利で",
                        "All end in -de",
                        "新しい: 新しいで | きれい: きれいくて | 広い: 広いので | 便利: 便利くて"
                    ],
                    "answerIndex": 1,
                    "explanation": "Adjective chaining forms matching."
                },
                {
                    "prompt": "なぜ「きれい」の連結形は「きれいくて」ではなく「きれいで」になるのですか？",
                    "options": [
                        "「きれい」は末尾が「い」で終わるが、文法上は「な形容詞（形容動詞）」であるため (#ScienceOfLearning)",
                        "間違いだから",
                        "発音しにくいから",
                        "古い日本語だから"
                    ],
                    "answerIndex": 0,
                    "explanation": "きれい is grammatically a な-adjective (kirei na), so its connective form is きれいで."
                },
                {
                    "prompt": "日本語に翻訳してください: 'My room is quiet, bright, and very comfortable.'",
                    "options": [
                        "私の部屋は静かです、明るいです。",
                        "私の部屋は静かに明るいです。",
                        "私の部屋は静かくて、明るいで、快適です。",
                        "私の部屋は静かで、明るくて、とても快適です。 (Watashi no heya wa shizuka de, akarukute, totemo kaiteki desu.)"
                    ],
                    "answerIndex": 3,
                    "explanation": "静かで (na-adj) + 明るくて (i-adj) + 快適です."
                },
                {
                    "prompt": "文を完成させてください: 「東京の家賃は_______、部屋は狭いです。」（高い）",
                    "options": [
                        "高いで",
                        "高くては",
                        "高くて (takakute)",
                        "高くに"
                    ],
                    "answerIndex": 2,
                    "explanation": "高い (takai -> takakute = expensive and...)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u10-l4": {
        "id": "ja-u10-l4",
        "unit": "ja-u10",
        "level": "A2",
        "objective": "Sequence and narrate daily household chores and routines chronologically using the 〜て form verb chaining construction (朝起きて、掃除して、ご飯を食べます).",
        "presentation": {
            "explanation": "In this lesson, we learn to describe chronological daily routines using **Sequential Verb Chaining with the 〜て Form (〜て、〜て、〜ます)**:\n\n1. The Sequential Action Formula:\n   - In Japanese, when you perform actions in chronological order (*Action 1 $\\rightarrow$ Action 2 $\\rightarrow$ Action 3*), you put all prior verbs into their **〜て form**, and finish the sentence with the final tense-carrying verb!\n   - *Formula*: **[Verb 1 - て]、[Verb 2 - て]、[Verb 3 - ます / ました]**.\n\n2. Common Daily Household Verbs in て-Form:\n   - **起きる (おきる / to wake up)** $\\rightarrow$ **起きて (okite)**\n   - **顔を洗う (あらう / to wash face)** $\\rightarrow$ **洗って (aratte)**\n   - **掃除する (そうじする / to clean)** $\\rightarrow$ **掃除して (sōji shite)**\n   - **洗濯する (せんたくする / to do laundry)** $\\rightarrow$ **洗濯して (sentaku shite)**\n   - **料理する (りょうりする / to cook)** $\\rightarrow$ **料理して (ryōri shite)**\n   - **食べる (たべる / to eat)** $\\rightarrow$ **食べて (tabete)**\n   - **ゴミを出す (ごみをだす / to take out trash)** $\\rightarrow$ **ゴミを出して (gomi o dashite)**\n   - **お風呂に入る (おふろにはいる / to take a bath)** $\\rightarrow$ **お風呂に入って (ofuro ni haitte)**\n\n3. Integrated Routine Example:\n   - *毎朝、7時に起きて、シャワーを浴びて、朝ご飯を食べます。* (Every morning, I wake up at 7, take a shower, and eat breakfast.)\n   - *昨日は部屋を掃除して、洗濯して、買い出しに行きました。* (Yesterday I cleaned my room, did laundry, and went grocery shopping.)",
            "examples": [
                {
                    "target": "朝起きて、窓を開けて、新鮮な空気を吸います。",
                    "reading": "Asa okite, mado o akete, shinsen na kūki o suimasu.",
                    "translation": "In the morning I wake up, open the window, and breathe the fresh air."
                },
                {
                    "target": "夜はお風呂に入って、本を読んで、11時に寝ます。",
                    "reading": "Yoru wa ofuro ni haitte, hon o yonde, jū-ichi-ji ni nemasu.",
                    "translation": "At night I take a bath, read a book, and go to bed at 11."
                }
            ],
            "mnemonics": [
                "TE-FORM CHAINS TIME: Verb-te, Verb-te, Verb-masu connects your actions chronologically!",
                "THE FINAL VERB CONTROLS TENSE: Use 〜ました at the end to make the whole chain past tense!",
                "OFURO NI HAIRU -> HAITTE: To take a bath (literally: to enter the bath)!"
            ],
            "culturalNotes": [
                "In Japanese daily life, strict municipal trash sorting (ゴミの分別 gomi no bunbetsu: burnable, non-burnable, PET bottles, cans) is an essential morning routine with specific designated collection days."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "「起きます（おきます）」を連続した動作を表す「て形」に変えるとどうなりますか？",
                    "options": [
                        "起きって (49.1)",
                        "起きて (okite) (49.2)",
                        "起きた (49.3)",
                        "起きてで (49.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "起きる (Group 2) -> 起きて (okite)."
                },
                {
                    "prompt": "複数の動作を順番に並べるとき、文の過去形・現在形はどの動詞で決まりますか？",
                    "options": [
                        "文の最後にある最後の動詞 (The final verb at the end of the sentence) (#ScienceOfLearning)",
                        "真ん中にある動詞",
                        "すべての動詞に過去形をつける",
                        "最初にある最初の動詞"
                    ],
                    "answerIndex": 0,
                    "explanation": "The final verb carrying 〜ます or 〜ました determines the grammatical tense of the entire chain."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "正しい文を選んでください: 'I cleaned my room and did laundry.'",
                    "options": [
                        "部屋を掃除して、洗濯しました。 (Heya o sōji shite, sentaku shimashita.) (49.1)",
                        "部屋を掃除して、洗濯してです。 (49.2)",
                        "部屋を掃除します、洗濯します。 (49.3)",
                        "部屋を掃除するで、洗濯した。 (49.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "掃除して (te-form) + 洗濯しました (past polite)."
                },
                {
                    "prompt": "「お風呂に入ります」のて形は何ですか？",
                    "options": [
                        "お風呂に入って (ofuro ni haitte - Group 1 入る ends in る -> って)",
                        "お風呂に入くて",
                        "お風呂に入りて",
                        "お風呂に入んで"
                    ],
                    "answerIndex": 0,
                    "explanation": "入る (hairu) is an irregular Group 1 verb ending in る -> 入って (haitte)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "動作の順序を完成させてください: 「朝_______、顔を_______、朝ご飯を_______。」（起きる・洗う・食べる）",
                    "options": [
                        "起きて / 洗って / 食べます (okite / aratte / tabemasu)",
                        "起きる / 洗う / 食べます",
                        "起きで / 洗いで / 食べます",
                        "起きた / 洗った / 食べた"
                    ],
                    "answerIndex": 0,
                    "explanation": "起きて (okite) -> 洗って (aratte) -> 食べます (tabemasu)."
                },
                {
                    "prompt": "「ゴミを出します」の日常生活における意味は何ですか？",
                    "options": [
                        "To buy trash bins",
                        "To make more trash",
                        "To burn trash at home",
                        "To take out the garbage/trash to the collection area"
                    ],
                    "answerIndex": 3,
                    "explanation": "ゴミを出す (gomi o dasu) means to put out/take out the sorted trash."
                },
                {
                    "prompt": "日本語に翻訳してください: 'Yesterday I cooked, ate with my family, and watched TV.'",
                    "options": [
                        "昨日は料理を作ってで、見てです。",
                        "昨日は料理を作ります、食べます、見ました。",
                        "昨日は料理を作って、家族と一緒に食べて、テレビを見ました。 (Kinō wa ryōri o tsukutte, kazoku to issho ni tabete, terebi o mimashita.)",
                        "昨日は料理を作った、食べた、見ます。"
                    ],
                    "answerIndex": 2,
                    "explanation": "作って + 食べて + 見ました (past narration)."
                },
                {
                    "prompt": "文を完成させてください: 「夜、お風呂に入って_______、すぐに寝ました。」",
                    "options": [
                        "ので",
                        "から (kara - after entering the bath)",
                        "でも",
                        "まで"
                    ],
                    "answerIndex": 1,
                    "explanation": "〜てから means 'after doing X'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u10-l5": {
        "id": "ja-u10-l5",
        "unit": "ja-u10",
        "level": "A2",
        "objective": "Synthesize architectural vocabulary, furniture positioning, adjective chaining, and て-form chronological action sequences to present a complete descriptive tour of a Japanese home and daily lifestyle.",
        "presentation": {
            "explanation": "In this **A2 Milestone Checkpoint for Unit 10**, you integrate all vocabulary, existence markers, adjective chaining, and sequential action grammar to deliver a **Complete Tour of My Japanese Apartment & Daily Routine (私の部屋と毎日の生活)**:\n\n1. The Grand Integration Presentation:\n   - *「こんにちは！私の東京のアパートへようこそ。玄関で靴を脱いで、どうぞお上がりください。\n   この部屋は六畳の和室で、南向きで明るくて、とても静かです。畳のいい匂いがします。\n   部屋の真ん中に小さな机があって、机の横に本棚があります。本棚の上には日本語の辞書や教科書がたくさん並んでいます。\n   部屋の奥にはベランダがあって、天気がいい日は洗濯物を干します。\n   毎朝7時に起きて、窓を開けて空気を入れ替えてから、台所で朝ご飯を作ります。夜はお風呂にゆっくり入って、本を読んでから11時に寝ます。小さくてシンプルな部屋ですが、とても住みやすくて気に入っています。」*\n\n2. Core A2 Mastery Points Verified:\n   - Genkan etiquette & architectural terminology.\n   - Existence (`arimasu`) and spatial prepositions (`yoko`, `naka`, `ue`).\n   - Adjective chaining (`akarukute`, `shizuka de`, `atarashikute`).\n   - Sequential daily life routines in て-form.",
            "examples": [
                {
                    "target": "Integration Monologue: Delivering a complete apartment tour, explaining furniture layout, and narrating daily morning and evening routines.",
                    "reading": "A2 Milestone Monologue",
                    "translation": "Complete home and lifestyle synthesis."
                },
                {
                    "target": "Cultural Politeness: 'どうぞお上がりください' (Please step up and come in!).",
                    "reading": "Dōzo o-agari kudasai",
                    "translation": "Traditional home entry invitation."
                }
            ],
            "mnemonics": [
                "A2 UNIT 10 COMPLETE: Japanese Home, Furniture, Adjectives, and Daily Routines mastered!",
                "DŌZO O-AGARI KUDASAI: Step up from the genkan into the home!",
                "SEAMLESS FLOW: Connect rooms with 'arimasu' and days with 'te-form'!"
            ],
            "culturalNotes": [
                "Inviting someone into your home with 「どうぞお上がりください」 (literally: 'please step up') reflects the physical elevation of traditional Japanese floors above the genkan ground level."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "統合テキストで、筆者の部屋はどのような部屋ですか？ (What kind of room does the author have?)",
                    "options": [
                        "六畳の和室で、南向きで明るく、とても静かな部屋 (50.1)",
                        "とても狭くて暗い洋室 (50.2)",
                        "地下にある窓のない部屋 (50.3)",
                        "家具が一つもない部屋 (50.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "Text states: '六畳の和室で、南向きで明るくて、とても静かです'."
                },
                {
                    "prompt": "日本の家にお客さんを招き入れるときの丁寧な挨拶は何ですか？",
                    "options": [
                        "どうぞお上がりください (Dōzo o-agari kudasai)",
                        "ごちそうさまでした",
                        "おやすみなさい",
                        "いってきます"
                    ],
                    "answerIndex": 0,
                    "explanation": "どうぞお上がりください is the polite formula inviting someone to step up into the home."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "日本語に翻訳してください: 'My apartment is small, but clean and very comfortable.'",
                    "options": [
                        "私のアパートは高くて、不便です。 (50.1)",
                        "私のアパートは小さいですが、きれいで、とても快適です。 (Watashi no apāto wa chiisai desu ga, kirei de, totemo kaiteki desu.) (50.2)",
                        "私のアパートは静かくて、古いです。 (50.3)",
                        "私のアパートは大きいです、汚いです。 (50.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "小さいですが + きれいで (na-adj) + 快適です."
                },
                {
                    "prompt": "「畳のいい匂い（におい）」とはどのような文化的体験ですか？",
                    "options": [
                        "料理のスパイスの匂い",
                        "イグサ（い草）で作られた新しい畳が放つ、日本独特の心地よい自然の香り",
                        "ペンキの匂い",
                        "香水の匂い"
                    ],
                    "answerIndex": 1,
                    "explanation": "Fresh tatami rush grass (igusa) emits a soothing natural aroma."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "日本語第10ユニット全体で習得した重要文法・表現は何ですか？",
                    "options": [
                        "天気の単語のみ",
                        "数字の数え方のみ",
                        "電車の乗り換え案内のみ",
                        "日本家屋の構造（玄関・和室・畳・お風呂）、家具と存在文（〜に〜があります/います）、形容詞の連結形（い形容詞〜くて／な形容詞〜で）、動作の連続て形（〜て、〜て、〜ます）、および部屋と日常生活の総合描写"
                    ],
                    "answerIndex": 3,
                    "explanation": "Comprehensive Japanese Unit 10 competencies certification."
                },
                {
                    "prompt": "文を完成させてください: 「部屋を掃除_______、洗濯物を_______、スーパーへ行きました。」",
                    "options": [
                        "した / 干した",
                        "する / 干す",
                        "して / 干して (shite / hoshite)",
                        "すで / 干しで"
                    ],
                    "answerIndex": 2,
                    "explanation": "掃除して (clean) -> 干して (hang laundry) -> 行きました (went)."
                },
                {
                    "prompt": "なぜ日本語で「て形」による動作連結と形容詞連結を習得することが中級（A2/B1）への決定的な跳躍となるのですか？",
                    "options": [
                        "漢字を覚えなくてよくなるから",
                        "単文を途切れ途切れに話す初級段階から脱却し、一息で複数の情報や因果関係・時間経過を流暢に語れるようになるため (#ScienceOfLearning)",
                        "すべての文が短くなるから",
                        "文法規則がなくなるから"
                    ],
                    "answerIndex": 1,
                    "explanation": "Chaining adjectives and actions transforms fragmented single sentences into fluid connected discourse."
                },
                {
                    "prompt": "日本のことわざ「住めば_______」を完成させてください。",
                    "options": [
                        "都 (みやこ / Sumeba miyako - Wherever you live, you grow to love it like a capital)",
                        "海",
                        "山",
                        "駅"
                    ],
                    "answerIndex": 0,
                    "explanation": "住めば都 (Sumeba miyako = Home is where you make it)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u11-l1": {
        "id": "ja-u11-l1",
        "unit": "ja-u11",
        "level": "A2",
        "objective": "Master essential Japanese vocabulary for human body parts (体の部位).",
        "presentation": {
            "explanation": "Essential body part nouns in Japanese:\n- 頭 (あたま, atama) = Head\n- 顔 (かお, kao) = Face\n- 目 (め, me) = Eye(s) / 耳 (みみ, mimi) = Ear(s) / 鼻 (はな, hana) = Nose / 口 (くち, kuchi) = Mouth\n- 首 (くび, kubi) = Neck / 肩 (かた, kata) = Shoulder(s)\n- 腕 (うで, ude) = Arm(s) / 手 (て, te) = Hand(s) / 指 (ゆび, yubi) = Finger(s)\n- 胸 (むね, mune) = Chest / お腹 (おなか, onaka) = Stomach / 背中 (せなか, senaka) = Back\n- 足 (あし, ashi) = Leg(s) / Foot/Feet / 膝 (ひざ, hiza) = Knee(s)",
            "examples": [
                {
                    "target": "風邪をひいて、頭がズキズキ痛いです。",
                    "reading": "kaze o hiite, atama ga zukizuki itai desu.",
                    "translation": "I caught a cold, and my head is throbbing with pain."
                },
                {
                    "target": "ご飯を食べる前に、石鹸で手をよく洗ってください。",
                    "reading": "gohan o taberu mae ni, sekken de te o yoku aratte kudasai.",
                    "translation": "Before eating meals, please wash your hands well with soap."
                }
            ],
            "mnemonics": [
                "ATAMA = A top of man = Head",
                "ME = Look at ME with your eye",
                "TE = Touch Everything with your hand"
            ],
            "culturalNotes": [
                "In Japanese, \"足\" (ashi) can refer to both the foot and the entire leg, with context making the exact distinction clear."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "What is the Japanese word for \"stomach\"?",
                    "options": [
                        "頭 (あたま, atama) (51.1)",
                        "背中 (せなか, senaka) (51.2)",
                        "肩 (かた, kata) (51.3)",
                        "お腹 (おなか, onaka) (51.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "お腹 (onaka) means stomach/belly."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: \"Hand / Hands\"",
                    "options": [
                        "足 (あし, ashi) (51.1)",
                        "目 (め, me) (51.2)",
                        "口 (くち, kuchi) (51.3)",
                        "手 (て, te) (51.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "手 (te) means hand."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Which part of the body is \"肩\" (かた, kata)?",
                    "options": [
                        "Knee",
                        "Elbow",
                        "Shoulder",
                        "Chest"
                    ],
                    "answerIndex": 2,
                    "explanation": "肩 (kata) means shoulder."
                },
                {
                    "prompt": "Translate to Japanese: \"My eyes are tired from looking at the screen.\"",
                    "options": [
                        "足を洗いました。",
                        "画面を見て、目が疲れました。",
                        "手袋を買います。",
                        "お腹がいっぱいです。"
                    ],
                    "answerIndex": 1,
                    "explanation": "目が疲れました means eyes are fatigued."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u11-l2": {
        "id": "ja-u11-l2",
        "unit": "ja-u11",
        "level": "A2",
        "objective": "Express physical symptoms, pain, and illness using 「〜が痛い」 and 「熱/咳がある・出る」.",
        "presentation": {
            "explanation": "Key grammatical patterns for symptoms:\n1. [Body Part] + が痛いです (ga itai desu) = [Body part] hurts.\n   - 頭が痛いです (I have a headache.)\n   - 喉が痛いです (My throat hurts.)\n2. 熱があります (netsu ga arimasu) = I have a fever.\n3. 咳が出ます (seki ga demasu) = I have a cough.\n4. 鼻水が出ます (hanamizu ga demasu) = I have a runny nose.\n5. 気持ちが悪いです (kimochi ga warui desu) = I feel nauseous / sick.",
            "examples": [
                {
                    "target": "昨日から熱が38度あって、喉もひどく痛みます。",
                    "reading": "kinou kara netsu ga sanjuuhachido atte, nodo mo hidoku itamimasu.",
                    "translation": "Since yesterday I have a 38-degree fever and my throat hurts severely."
                },
                {
                    "target": "少しめまいがして、寒気がします。",
                    "reading": "sukoshi memai ga shite, samuke ga shimasu.",
                    "translation": "I feel slightly dizzy and have chills."
                }
            ],
            "mnemonics": [
                "ITAI = \"Ouch! It hurts!\"",
                "NETSU = Heat/Temperature = Fever"
            ],
            "culturalNotes": [
                "In Japan, body temperature is measured in Celsius (e.g. 37.5°C is considered the fever threshold for schools and clinics)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you say \"My throat hurts\" in Japanese?",
                    "options": [
                        "喉が痛いです (のどがいたいです) (52.1)",
                        "手が長いです (52.2)",
                        "足が速いです (52.3)",
                        "頭がいいです (52.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "喉 (nodo) = throat + が痛いです = hurts."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Complete: \"昨日から咳が______。\" (I have a cough since yesterday).",
                    "options": [
                        "出ます (demasu) (52.1)",
                        "食べます (52.2)",
                        "行きます (52.3)",
                        "飲みます (52.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "咳が出る (seki ga deru) is the set collocation for coughing."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"I have a fever of 38.2 degrees.\"",
                    "options": [
                        "38階に行きます。",
                        "38度2分の熱があります。",
                        "38時に起きます。",
                        "38人来ました。"
                    ],
                    "answerIndex": 1,
                    "explanation": "38度2分の熱があります states the fever temperature."
                },
                {
                    "prompt": "What is the natural expression for catching a cold in Japanese?",
                    "options": [
                        "風邪をひく (kaze o hiku)",
                        "風邪を投げる",
                        "風邪を作る",
                        "風邪を飲む"
                    ],
                    "answerIndex": 0,
                    "explanation": "風邪をひく (kaze o hiku) is the standard phrase for catching a cold."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u11-l3": {
        "id": "ja-u11-l3",
        "unit": "ja-u11",
        "level": "A2",
        "objective": "Navigate Japanese hospitals, medical reception (受付), and pharmacy prescription dispensing.",
        "presentation": {
            "explanation": "Key hospital & pharmacy vocabulary in Japan:\n- 病院 (びょういん, byouin) = Hospital / Clinic\n- 受付 (うけつけ, uketsuke) = Reception desk\n- 保険証 (ほけんしょう, hokenshou) = National Health Insurance card (or My Number card)\n- 診察券 (しんさつけん, shinsatsuken) = Clinic patient registration card\n- 処方箋 (しょほうせん, shohousen) = Doctor's prescription\n- 薬局 (やっきょく, yakkyoku) = Dispensing pharmacy\n- 食後 (しょくご, shokugo) = After meals / 食前 (しょくぜん, shokuzen) = Before meals\n\nPrescription dosage instructions:\n- 「1日3回、食後に飲んでください」 (Please take 3 times a day after meals.)",
            "examples": [
                {
                    "target": "受付で保険証と診察券をご提示ください。",
                    "reading": "uketsuke de hokenshou to shinsatsuken o goteiji kudasai.",
                    "translation": "Please present your health insurance card and patient registration card at reception."
                },
                {
                    "target": "この胃薬は、毎食後30分以内に水で服用してください。",
                    "reading": "kono igusuri wa, maishokugo sanjuppun inai ni mizu de fukuyou shite kudasai.",
                    "translation": "Please take this stomach medicine with water within 30 minutes after every meal."
                }
            ],
            "mnemonics": [
                "HOKENSHOU = Japanese health insurance card",
                "SHOKUGO = Shoku (meal) + Go (after) = After meals"
            ],
            "culturalNotes": [
                "In Japan, clinics and pharmacies are separated by law (医薬分業). After seeing the doctor at the clinic, you take your prescription slip (処方箋) to a neighboring dispensing pharmacy (調剤薬局)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "What does 「食後 (しょくご)」 mean on a Japanese medicine envelope?",
                    "options": [
                        "Before meals (53.1)",
                        "Before bed (53.2)",
                        "After meals (53.3)",
                        "Between meals (53.4)"
                    ],
                    "answerIndex": 2,
                    "explanation": "食後 means after eating meals."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What essential document must you present at every Japanese medical visit?",
                    "options": [
                        "保険証 (ほけんしょう, Health Insurance card) (53.1)",
                        "パスポートのみ (53.2)",
                        "名刺 (53.3)",
                        "図書館カード (53.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "保険証 is the health insurance card required for universal 70-80% coverage."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Please take one tablet twice a day after breakfast and dinner.\"",
                    "options": [
                        "朝と夜の食後に1錠ずつ、1日2回飲んでください。",
                        "お昼ご飯の前に5個食べてください。",
                        "水なしで飲んでください。",
                        "寝る前に全部飲んでください。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurate Japanese dosage instruction."
                },
                {
                    "prompt": "What is a 「処方箋 (しょほうせん)」?",
                    "options": [
                        "Train ticket",
                        "Receipt for grocery shopping",
                        "Restaurant menu",
                        "Medical prescription from a doctor"
                    ],
                    "answerIndex": 3,
                    "explanation": "処方箋 is a prescription paper given to the pharmacy."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u11-l4": {
        "id": "ja-u11-l4",
        "unit": "ja-u11",
        "level": "A2",
        "objective": "Discuss daily wellness, healthy lifestyle habits, and Japanese empathetic recovery expressions.",
        "presentation": {
            "explanation": "Key wellness vocabulary & expressions in Japanese:\n- 早寝早起き (はやねはやおき, hayane hayaoki) = Early to bed, early to rise\n- 規則正しい生活 (きそくただしいせいかつ) = Regular, structured daily routine\n- バランスの取れた食事 = Well-balanced meals\n- 水分補給 (すいぶんほきゅう) = Hydration / drinking fluids\n- 十分な睡眠 (じゅうぶんなすいみん) = Sufficient sleep\n\nJapanese Empathy & Well Wishes:\n- 「お大事に (どうぞ)」 (Odaiji ni douzo) = Please take good care of yourself / Get well soon! (Said by doctors, pharmacists, and friends to sick people).",
            "examples": [
                {
                    "target": "無理をしないで、温かいお茶を飲んでゆっくり休んでくださいね。お大事に。",
                    "reading": "muri o shinaide, atatakai ocha o nonde yukkuri yasunde kudasai ne. odaiji ni.",
                    "translation": "Don't overwork yourself, drink warm tea, and rest well. Take care!"
                }
            ],
            "mnemonics": [
                "ODAIJI NI = Take care / Get well soon (Daiji = Important/Precious body)"
            ],
            "culturalNotes": [
                "\"お大事に\" (Odaiji ni) is strictly reserved for people who are ill or injured. Do not say it to healthy people leaving the room!"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "What is the universal Japanese phrase for wishing someone who is sick a swift recovery?",
                    "options": [
                        "ごちそうさま (54.1)",
                        "お大事に (Odaiji ni) (54.2)",
                        "お疲れ様でした (54.3)",
                        "いただきます (54.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "お大事に is the Japanese expression for \"take care / get well soon\"."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: \"Early to bed, early to rise (healthy habit)\"",
                    "options": [
                        "早寝早起き (はやねはやおき) (54.1)",
                        "朝寝坊 (54.2)",
                        "暴飲暴食 (54.3)",
                        "夜更かし (54.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "早寝早起き is the classic four-character idiom for early sleep and wake."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "When the pharmacist hands you your cold medicine at the checkout, what do they say as you leave?",
                    "options": [
                        "また買いに来てください。",
                        "いらっしゃいませ！",
                        "ごめんなさい。",
                        "お大事にどうぞ。 (Please take care.)"
                    ],
                    "answerIndex": 3,
                    "explanation": "お大事にどうぞ is standard pharmacy parting courtesy."
                },
                {
                    "prompt": "Translate to Japanese: \"Getting sufficient sleep is the foundation of good health.\"",
                    "options": [
                        "病院が好きです。",
                        "寝ないほうが元気です。",
                        "十分な睡眠をとることは、健康の基本です。",
                        "薬だけあれば十分です。"
                    ],
                    "answerIndex": 2,
                    "explanation": "十分な睡眠をとることは、健康の基本です is grammatically natural."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u11-l5": {
        "id": "ja-u11-l5",
        "unit": "ja-u11",
        "level": "A2",
        "objective": "Complete full simulation of a medical consultation (問診) with a Japanese physician.",
        "presentation": {
            "explanation": "Step-by-step Japanese Doctor Consultation Flow:\n1. Doctor Opening Question:\n   - 「今日はどうされましたか？」 (What brings you in today? / How are you feeling?)\n2. Patient Symptom Description:\n   - 「一昨日から喉が痛くて、今朝から38度5分の熱があります。」 (Since two days ago my throat has hurt, and from this morning I have a 38.5°C fever.)\n3. Doctor Examination & Instruction:\n   - 「口を大きく開けてください。あーと言ってください。」 (Please open your mouth wide. Say \"Aaah\".)\n   - 「胸の音を聞きますね。深呼吸してください。」 (I'll listen to your chest now. Take deep breaths.)\n4. Diagnosis & Prescription:\n   - 「喉がかなり赤く腫れていますね。抗生物質と解熱剤を出しておきます。」 (Your throat is swollen and red. I will prescribe antibiotics and fever reducers.)",
            "examples": [
                {
                    "target": "医師：「今日はどうされましたか？」\n患者：「頭が痛くて、体がだるいです。アレルギーの薬も欲しいです。」",
                    "reading": "Ishi: \"Kyou wa dou saremashita ka?\"\nKanja: \"Atama ga itakute, karada ga darui desu. Arerugii no kusuri mo hoshii desu.\"",
                    "translation": "Doctor: \"What brings you in today?\"\nPatient: \"My head hurts and my body feels sluggish. I would also like allergy medication.\""
                }
            ],
            "mnemonics": [
                "DOU SAREMASHITA KA? = Polite \"What happened / How can I help?\""
            ],
            "culturalNotes": [
                "Japanese doctors use respectful Keigo when asking patients about their symptoms and physical state."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "What does a Japanese doctor mean by 「深呼吸してください (しんこきゅうしてください)」?",
                    "options": [
                        "Please take deep breaths (for stethoscope exam) (55.1)",
                        "Please hold your breath for 5 minutes (55.2)",
                        "Please stand on one leg (55.3)",
                        "Please drink water (55.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "深呼吸 (shinkokyuu) means deep breathing."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "How do you answer the doctor when they ask: 「アレルギーはありますか？」",
                    "options": [
                        "いいえ、日本人です。 (55.1)",
                        "いいえ、特にありません。 / はい、花粉症があります。 (55.2)",
                        "明日は晴れです。 (55.3)",
                        "はい、車があります。 (55.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "Appropriate answer about allergies / pollen allergy."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Arrange the clinical consultation stages in logical sequence:",
                    "options": [
                        "1. 手術 -> 2. 受付 -> 3. 帰宅",
                        "1. 薬を飲む -> 2. 病院を探す -> 3. 走る",
                        "1. 受付で保険証提出 -> 2. 問診票記入 -> 3. 医師の診察 -> 4. 会計と処方箋受取 -> 5. 調剤薬局で薬受取",
                        "1. 会計 -> 2. 診察 -> 3. 予約"
                    ],
                    "answerIndex": 2,
                    "explanation": "Standard Japanese medical visit procedural workflow."
                },
                {
                    "prompt": "Translate: \"The doctor said to rest at home for two days.\"",
                    "options": [
                        "病院で働きます。",
                        "お医者さんは2日間家で休むように言いました。",
                        "毎日走ります。",
                        "学校に行きました。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Correct reported speech for medical advice."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u12-l1": {
        "id": "ja-u12-l1",
        "unit": "ja-u12",
        "level": "A2",
        "objective": "職業・役職・仕事の分野に関する日本語表現を習得する（会社員、エンジニア、公務員など）。",
        "presentation": {
            "explanation": "職業と職種の日本語表現：\n- 会社員（かいしゃいん - Office worker / Company employee）\n- エンジニア / プログラマー（Engineer / Programmer）\n- 公務員（こうむいん - Civil servant / Government worker）\n- 医師 / 看護師（いし / かんごし - Physician / Nurse）\n- 教師 / 教授（きょうし / きょうじゅ - Teacher / Professor）\n- 弁護士（べんごし - Lawyer）\n- 営業（えいぎょう - Sales / Business development）\n\n文型：\n- 「私はIT企業でシステムエンジニアとして働いています。」\n- （〜で〜として働いている = To work at ... as a ...）",
            "examples": [
                {
                    "target": "田中さんは東京の大手電機メーカーで営業を担当しています。",
                    "reading": "Tanaka-san wa Tōkyō no ōte denki mēkā de eigyō o tantō shite imasu.",
                    "translation": "Mr. Tanaka is in charge of sales at a major electronics manufacturer in Tokyo."
                }
            ],
            "mnemonics": [
                "〜を担当している (tantō shite iru) = In charge of / responsible for!"
            ],
            "culturalNotes": [
                "In Japanese business etiquette, referring to one's own company uses the humble word \"弊社 (heisha)\" or \"当社 (tōsha)\", while the counterparty company is respectfully called \"貴社 (kisha)\" or \"御社 (onsha)\"."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "「IT企業でエンジニアとして働いています」の意味はどれですか？",
                    "options": [
                        "I am studying IT at university (56.1)",
                        "I want to buy a computer (56.2)",
                        "I do not like technology (56.3)",
                        "I work as an engineer at an IT company (56.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "Accurate profession statement."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "自分の会社を相手に対してへりくだって言う言葉は何ですか？",
                    "options": [
                        "御社（おんしゃ） (56.1)",
                        "貴社（きしゃ） (56.2)",
                        "大会社 (56.3)",
                        "弊社（へいしゃ）/ 当社 (56.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "弊社 (heisha) is humble \"our company\"."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "「営業」とはどのような仕事ですか？",
                    "options": [
                        "病院で手術をする仕事",
                        "自社の商品やサービスを顧客に提案・販売する仕事 (Sales/BD)",
                        "料理を作る仕事",
                        "学校で生徒に教える仕事"
                    ],
                    "answerIndex": 1,
                    "explanation": "営業 means sales and client relations."
                },
                {
                    "prompt": "日本語に訳してください: \"She is a civil servant working at City Hall.\"",
                    "options": [
                        "彼女は市役所に勤めている公務員です。",
                        "市役所は閉まりました。",
                        "彼女は学生です。",
                        "彼女はパン屋さんです。"
                    ],
                    "answerIndex": 0,
                    "explanation": "公務員 is civil servant."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u12-l2": {
        "id": "ja-u12-l2",
        "unit": "ja-u12",
        "level": "A2",
        "objective": "オフィスでの日常業務・会議・タスク管理の表現（メール送受信、ミーティング、スケジュール調整）。",
        "presentation": {
            "explanation": "職場の日常業務とアクション：\n- メールを確認する / 返信する / 転送する（Check / Reply to / Forward email）\n- 会議 / ミーティングに参加する（Attend a meeting）\n- 資料・企画書を作成する（Prepare documents / proposals）\n- スケジュールを調整する（Adjust/coordinate the schedule）\n- 締め切り（しめきり - Deadline）に間に合わせる（Meet the deadline）\n- 在宅勤務 / テレワーク / リモートワーク（Remote work / WFH）",
            "examples": [
                {
                    "target": "午後のミーティングの資料を作成して、関係者に共有しました。",
                    "reading": "Gogo no mītingu no shiryō o sakusei shite, kankeisha ni kyōyū shimashita.",
                    "translation": "I prepared the documents for the afternoon meeting and shared them with stakeholders."
                }
            ],
            "mnemonics": [
                "共有する (kyōyū suru) = To share (documents, screen, calendar)!"
            ],
            "culturalNotes": [
                "The Japanese concept of \"報・連・相 (Hō-Ren-Sō)\" — 報告 (Report), 連絡 (Communicate), 相談 (Consult) — is the bedrock of Japanese corporate communication."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "日本のビジネスで最も重要なコミュニケーションの原則は何ですか？",
                    "options": [
                        "報連相（ほうれんそう：報告・連絡・相談） (57.1)",
                        "無断欠勤 (57.2)",
                        "沈黙 (57.3)",
                        "独断専行 (57.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "Hō-Ren-Sō is fundamental to Japanese business workflow."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "「締め切りに間に合う」とはどういう意味ですか？",
                    "options": [
                        "To meet the deadline on time (57.1)",
                        "To miss the deadline (57.2)",
                        "To postpone the project (57.3)",
                        "To cancel the meeting (57.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "間に合う means in time."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "「在宅勤務」と同じ意味のカタカナ語はどれですか？",
                    "options": [
                        "テレワーク / リモートワーク",
                        "アルバイト",
                        "出張",
                        "オーバーワーク"
                    ],
                    "answerIndex": 0,
                    "explanation": "Telework/Remote work."
                },
                {
                    "prompt": "訳してください: \"Please confirm your availability for tomorrow's meeting.\"",
                    "options": [
                        "時計を見ました。",
                        "会議は中止になりました。",
                        "明日は休みます。",
                        "明日の会議のご都合をご確認いただけますでしょうか。"
                    ],
                    "answerIndex": 3,
                    "explanation": "Polite business schedule confirmation."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u12-l3": {
        "id": "ja-u12-l3",
        "unit": "ja-u12",
        "level": "A2",
        "objective": "IT用語・パソコン周辺機器・デジタルコミュニケーションの日本語語彙。",
        "presentation": {
            "explanation": "デジタル機器とIT用語：\n- ノートパソコン / デスクトップPC（Laptop / Desktop PC）\n- モニター / キーボード / マウス / 充電器（Monitor / Keyboard / Mouse / Charger）\n- パスワード / アカウント / ログイン（Password / Account / Login）\n- ファイルを添付する（Attach a file） / 保存する（Save）\n- クラウドにアップロードする / ダウンロードする（Upload to cloud / Download）\n- 画面共有（がめんきょうゆう - Screen sharing during video calls）\n- 音声をミュートにする（Mute audio） / ミュートを解除する（Unmute）",
            "examples": [
                {
                    "target": "マイクがミュートになっていますので、ミュートを解除してお話しください。",
                    "reading": "Maiku ga myūto ni natte imasu node, myūto o kaijo shite ohanashi kudasai.",
                    "translation": "Your microphone is muted, so please unmute and speak."
                }
            ],
            "mnemonics": [
                "ミュートを解除する (myūto o kaijo suru) = Unmute!"
            ],
            "culturalNotes": [
                "In Japanese online business meetings (Zoom/Teams), it is standard courtesy to turn on the camera and greet with a bow before speaking: \"よろしくお願いいたします\"."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "オンライン会議で自分のPC画面を他の人に見せる機能は何ですか？",
                    "options": [
                        "画面消去 (58.1)",
                        "強制終了 (58.2)",
                        "画面共有（がめんきょうゆう） (58.3)",
                        "音声録音 (58.4)"
                    ],
                    "answerIndex": 2,
                    "explanation": "画面共有 is screen sharing."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "「ファイルを添付する」とはどういう操作ですか？",
                    "options": [
                        "メールやチャットにファイルを付けて送信すること (58.1)",
                        "ファイルを削除すること (58.2)",
                        "画面を明るくすること (58.3)",
                        "PCの電源を切ること (58.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "Attaching a file to email/chat."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "「パスワードを入力してログインしてください」の意味はどれですか？",
                    "options": [
                        "Please change your computer",
                        "Please delete the software",
                        "Please turn off the internet",
                        "Please enter your password to log in"
                    ],
                    "answerIndex": 3,
                    "explanation": "Enter password and log in."
                },
                {
                    "prompt": "訳してください: \"I have uploaded the latest presentation to the shared cloud folder.\"",
                    "options": [
                        "パソコンを買い替えました。",
                        "クラウドは雨が降っています。",
                        "最新のプレゼン資料を共有クラウドフォルダにアップロードしました。",
                        "プレゼン資料を紛失しました。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurate technical workplace statement."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u12-l4": {
        "id": "ja-u12-l4",
        "unit": "ja-u12",
        "level": "A2",
        "objective": "ビジネスメールの基本フォーマット（件名、宛名、挨拶文、用件、結び、署名）。",
        "presentation": {
            "explanation": "日本のビジネスメールの構成：\n1. 件名（わかりやすく簡潔に：【ご案内】新商品に関するお打ち合わせの件）\n2. 宛名（相手の会社名・部署・氏名・様：株式会社ABC 営業部 山田様）\n3. 冒頭の挨拶：\n   - 「いつも大変お世話になっております。」\n4. 本文・用件：\n   - 「さて、表題の件につきまして、下記の通りご案内申し上げます。」\n5. 結びの挨拶：\n   - 「ご多忙のところ恐れ入りますが、ご検討のほどよろしくお願い申し上げます。」\n6. 署名（会社名、部署、氏名、連絡先）",
            "examples": [
                {
                    "target": "いつも大変お世話になっております。FEARN株式会社の佐藤でございます。",
                    "reading": "Itsumo taihen osewa ni natte orimasu. FEARN kabushikigaisha no Satō de gozaimasu.",
                    "translation": "Thank you very much for your continued support. I am Sato from FEARN Inc."
                }
            ],
            "mnemonics": [
                "いつも大変お世話になっております = The indispensable universal opening of Japanese business emails!"
            ],
            "culturalNotes": [
                "In Japan, omitting the company name or honorific \"様 (sama)\" in an email address header is considered a serious breach of business etiquette."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "日本のビジネスメールで冒頭に必ず書く定番の挨拶文は何ですか？",
                    "options": [
                        "久しぶり！ (59.1)",
                        "いつも大変お世話になっております。 (59.2)",
                        "どうもどうも (59.3)",
                        "やあ、元気？ (59.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "いつも大変お世話になっております is the gold standard greeting."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "メールの文末に添える最も一般的な結びの言葉は何ですか？",
                    "options": [
                        "何卒よろしくお願い申し上げます。 (59.1)",
                        "おしまい。 (59.2)",
                        "バイバイ！ (59.3)",
                        "じゃあまたね。 (59.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "よろしくお願い申し上げます is the formal closing."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "ビジネスメールの件名（Subject）で最も推奨される書き方はどれですか？",
                    "options": [
                        "空欄にして送る",
                        "100文字以上の長文を書く",
                        "【重要】や用件が一目でわかる簡潔なタイトルをつける",
                        "「こんにちは」とだけ書く"
                    ],
                    "answerIndex": 2,
                    "explanation": "Clear, concise bracketed subject tags."
                },
                {
                    "prompt": "訳してください: \"Thank you for your prompt response.\"",
                    "options": [
                        "返信が遅くて困りました。",
                        "早速のご返信、誠にありがとうございます。",
                        "パソコンが壊れました。",
                        "メールが届いていません。"
                    ],
                    "answerIndex": 1,
                    "explanation": "早速のご返信、誠にありがとうございます is standard polite business gratitude."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u12-l5": {
        "id": "ja-u12-l5",
        "unit": "ja-u12",
        "level": "A2",
        "objective": "採用面接（自己PR、志望動機、長所・短所）とビジネス敬語の基本実践。",
        "presentation": {
            "explanation": "日本の就職面接（面接マナーと頻出質問）：\n1. 入室マナー：ドアを3回ノック →「失礼いたします」と一礼。\n2. 自己紹介と志望動機：\n   - 面接官：「簡単に自己紹介をお願いいたします。」\n   - 応募者：「〇〇と申します。前職では5年間ソフトウェア開発に従事し、大規模システムの設計を担当いたしました。」\n   - 「貴社の革新的なAI技術とグローバルな事業展開に強く魅力を感じ、志望いたしました。」\n3. 長所と強み（自己PR）：\n   - 「私の強みは、課題に対して主体的に行動し、チームと協力して解決に導く粘り強さです。」\n4. 退室：「本日は貴重なお時間をいただき、誠にありがとうございました。」",
            "examples": [
                {
                    "target": "面接官：「これまでのご経験をどのように弊社で活かせるとお考えですか？」\n応募者：「培ってきた技術力とマネジメントスキルを活かし、新規事業の成長に貢献したいと考えております。」",
                    "reading": "面接対話例",
                    "translation": "Interviewer: \"How do you plan to leverage your past experience at our company?\"\nCandidate: \"I wish to utilize the technical and management skills I have cultivated to contribute to the growth of new ventures.\""
                }
            ],
            "mnemonics": [
                "失礼いたします (shitsurei itashimasu) = Excuse me (entering/leaving professional spaces)!"
            ],
            "culturalNotes": [
                "In Japanese job interviews, using humble language (Kenjōgo: 申します, 従事いたしました) and respectful language (Sonkeigo: 貴社, ご覧いただく) shows professionalism."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "面接室に入室する際、ドアをノックした後に言う挨拶は何ですか？",
                    "options": [
                        "失礼いたします（しつれいいたします） (60.1)",
                        "おじゃましまーす (60.2)",
                        "入るよー (60.3)",
                        "だれかいますか？ (60.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "失礼いたします is the mandatory polite entry greeting."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "「自己PR（じこピーアール）」とは何を説明することですか？",
                    "options": [
                        "好きなアニメを語ること (60.1)",
                        "自分の強みや長所、企業に貢献できるスキルをアピールすること (60.2)",
                        "会社の愚痴を言うこと (60.3)",
                        "自分の家族の歴史を語ること (60.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "Self-PR highlights professional strengths and competencies."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "日本の履歴書（りれきしょ）に記載する必須項目はどれですか？",
                    "options": [
                        "好きな食べ物と嫌いな食べ物",
                        "学歴・職歴・保有資格・志望動機",
                        "飼っているペットの名前",
                        "好きな映画のランキング"
                    ],
                    "answerIndex": 1,
                    "explanation": "Academic/employment history, certifications, and motivation."
                },
                {
                    "prompt": "面接終了時に面接官に伝えるべき最も適切な感謝の言葉はどれですか？",
                    "options": [
                        "本日は貴重なお時間をいただき、誠にありがとうございました。",
                        "ごちそうさまでした。",
                        "お疲れっす！",
                        "じゃあ採用してくださいね。"
                    ],
                    "answerIndex": 0,
                    "explanation": "本日は貴重なお時間をいただき、誠にありがとうございました is the standard closing gratitude."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u13-l1": {
        "id": "ja-u13-l1",
        "unit": "ja-u13",
        "level": "A2",
        "objective": "趣味・余暇の過ごし方・関心事についての日本語表現（写真、読書、楽器演奏、登山など）。",
        "presentation": {
            "explanation": "趣味と休日の過ごし方（しゅみ）：\n- 写真を撮る / カメラ（Taking photos / Photography）\n- 読書（どくしょ）/ 小説や漫画を読む（Reading novels & manga）\n- 楽器を演奏する（ギター、ピアノ、ドラムを弾く・叩く）\n- 登山 / ハイキング / キャンプ（Mountaineering / Hiking / Camping）\n- 料理 / お菓子作り（Cooking / Baking）\n- 映画鑑賞 / アニメ鑑賞（Watching films / Anime）\n\n文型：\n- 「私の趣味は一眼レフカメラで風景写真を撮ることです。」\n- 「休日はよく山に登ってリフレッシュしています。」",
            "examples": [
                {
                    "target": "休日は家でゆっくり小説を読んだり、ピアノを弾いたりして過ごしています。",
                    "reading": "Kyūjitsu wa ie de yukkuri shōsetsu o yondari, piano o hiitari shite sugoshite imasu.",
                    "translation": "On days off, I spend time at home relaxing, reading novels, and playing the piano."
                }
            ],
            "mnemonics": [
                "〜たり〜たりする = Listing parallel actions (doing A, doing B, etc.)!"
            ],
            "culturalNotes": [
                "Hiking (登山) in Japan's pristine mountains (Mount Fuji, Japan Alps, Mount Takao) and solo camping (ソロキャンプ) have become massive lifestyle trends."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "「趣味は写真を撮ることです」の意味はどれですか？",
                    "options": [
                        "I want to sell my camera (61.1)",
                        "I do not like photos (61.2)",
                        "I am studying painting (61.3)",
                        "My hobby is taking photographs (61.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "Taking photos hobby."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "楽器を演奏する動詞の使い分け：ピアノを______、ドラムを______。",
                    "options": [
                        "食べる / 飲む (61.1)",
                        "走る / 泳ぐ (61.2)",
                        "買う / 売る (61.3)",
                        "弾く（ひく）/ 叩く（たたく） (61.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "ピアノを弾く / ドラムを叩く."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "「休日はハイキングをしてリフレッシュします」の「リフレッシュ」の意味は？",
                    "options": [
                        "気分転換をして心身を元気に回復させること",
                        "パソコンを壊すこと",
                        "寝ないで働くこと",
                        "仕事を倍に増やすこと"
                    ],
                    "answerIndex": 0,
                    "explanation": "Refreshing mind and body."
                },
                {
                    "prompt": "日本語に訳してください: \"In my free time, I enjoy cooking Japanese cuisine.\"",
                    "options": [
                        "日本料理は食べられません。",
                        "レストランは休みです。",
                        "料理が下手です。",
                        "時間があるときは、日本料理を作るのを楽しんでいます。"
                    ],
                    "answerIndex": 3,
                    "explanation": "Accurate hobby translation."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u13-l2": {
        "id": "ja-u13-l2",
        "unit": "ja-u13",
        "level": "A2",
        "objective": "スポーツ、観戦文化、武道、ジムでのトレーニングの日本語語彙。",
        "presentation": {
            "explanation": "日本のスポーツと観戦文化：\n- 野球（やきゅう - Baseball: プロ野球、甲子園、大谷翔平選手）\n- サッカー（Jリーグ、日本代表 Samurai Blue）\n- 相撲（すもう - Sumo: 大相撲本場所、横綱、土俵）\n- 武道（ぶどう - 柔道 Judo, 剣道 Kendo, 空手 Karate）\n- ジムで筋トレをする（Weight training at the gym）\n- ランニング / マラソン（Running / Marathon: 皇居ラン）\n\n表現：\n- 「スタジアムで生で試合を観戦する」（Watching the match live at the stadium）\n- 「応援する / ホームランを打つ / 勝利する」",
            "examples": [
                {
                    "target": "東京ドームでプロ野球の試合を生で観戦して、全力で応援しました。",
                    "reading": "Tōkyō Dōmu de puro yakyū no shiai o nama de kansen shite, zenryoku de ōen shimashita.",
                    "translation": "I watched the professional baseball game live at Tokyo Dome and cheered with all my might."
                }
            ],
            "mnemonics": [
                "生で観戦する (nama de kansen suru) = Watching live at the venue!"
            ],
            "culturalNotes": [
                "Baseball is Japan's undisputed national pastime, with passionate stadium cheering sections (ōendan) featuring trumpets and synchronized chants."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "日本の国技（こくぎ）として知られる伝統的な格闘技は何ですか？",
                    "options": [
                        "相撲（すもう） (62.1)",
                        "クリケット (62.2)",
                        "バスケットボール (62.3)",
                        "アイスホッケー (62.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "Sumo is the traditional national sport."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "東京で市民ランナーに最も人気のあるランニングコースはどこですか？",
                    "options": [
                        "皇居周辺（皇居ラン） (62.1)",
                        "羽田空港の滑走路 (62.2)",
                        "首都高速道路 (62.3)",
                        "地下鉄のトンネル (62.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "Imperial Palace running loop (皇居ラン)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "「応援する（おうえんする）」とはどういう意味ですか？",
                    "options": [
                        "To criticize",
                        "To leave the stadium",
                        "To referee the game",
                        "To cheer for, support, or root for a team or athlete"
                    ],
                    "answerIndex": 3,
                    "explanation": "Cheering/supporting a team."
                },
                {
                    "prompt": "訳してください: \"Our team won the championship match 3-1.\"",
                    "options": [
                        "スタジアムは遠いです。",
                        "試合は雨で中止でした。",
                        "私たちのチームが決勝戦で３対１で勝利しました。",
                        "試合に負けて悔しいです。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Victory statement."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u13-l3": {
        "id": "ja-u13-l3",
        "unit": "ja-u13",
        "level": "A2",
        "objective": "音楽ジャンル、伝統芸能、美術館、ライブ・コンサート鑑賞の語彙。",
        "presentation": {
            "explanation": "日本の音楽・芸術・伝統文化：\n- J-POP / J-Rock / アニソン（Anime songs） / シティポップ（City Pop）\n- 伝統芸能：歌舞伎（Kabuki）、能（Noh）、文楽（Bunraku）、落語（Rakugo）\n- 美術館・博物館巡り（Visiting art museums: 上野の国立西洋美術館、森美術館）\n- ライブハウス / 野外フェス（Live music club / Outdoor summer festivals: Fuji Rock, Summer Sonic）\n- 展覧会を見に行く（Going to an art exhibition）",
            "examples": [
                {
                    "target": "先週末、六本木の美術館で開催されている現代アートの展覧会を見に行きました。",
                    "reading": "Senshūmatsu, Roppongi no bijutsukan de kaisai sarete iru gendai āto no tenrankai o mi ni ikimashita.",
                    "translation": "Last weekend, I went to see the contemporary art exhibition held at a museum in Roppongi."
                }
            ],
            "mnemonics": [
                "美術館 (bijutsukan) = Art museum, 博物館 (hakubutsukan) = History/science museum!"
            ],
            "culturalNotes": [
                "Tokyo has one of the world's richest museum ecosystems, centered around Ueno Park and Roppongi Art Triangle (Mori Art Museum, National Art Center, Suntory Museum)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "一人で座布団に座り、扇子と手ぬぐいを使って演じ分ける日本の伝統話芸は何ですか？",
                    "options": [
                        "歌舞伎 (63.1)",
                        "オペラ (63.2)",
                        "落語（らくご） (63.3)",
                        "能 (63.4)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Rakugo is traditional comic storytelling."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "「美術館」と「博物館」の違いは何ですか？",
                    "options": [
                        "美術館は主に絵画や彫刻などの美術品、博物館は歴史・自然・科学の展示 (63.1)",
                        "違いはない (63.2)",
                        "博物館は映画を見る場所 (63.3)",
                        "美術館は本を読む場所 (63.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "Art museum vs General museum."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "日本を代表する世界的に有名な夏の野外音楽フェスティバルはどれですか？",
                    "options": [
                        "隅田川花火大会",
                        "お正月",
                        "フジロックフェスティバル（FUJI ROCK FESTIVAL）",
                        "東京マラソン"
                    ],
                    "answerIndex": 2,
                    "explanation": "Fuji Rock Festival."
                },
                {
                    "prompt": "訳してください: \"I bought tickets for the live concert next month.\"",
                    "options": [
                        "音楽は聴きません。",
                        "来月のライブコンサートのチケットを購入しました。",
                        "チケットを紛失しました。",
                        "コンサートは昨日終わりました。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Live concert ticket purchase."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u13-l4": {
        "id": "ja-u13-l4",
        "unit": "ja-u13",
        "level": "A2",
        "objective": "友達を遊びやイベントに誘う、承諾する、断る、待ち合わせの約束をする表現。",
        "presentation": {
            "explanation": "遊びの誘いと約束の表現（Invitations & plans）：\n1. 誘う文型：\n   - 「〜ませんか？」（Won't you...? / Polite invitation）\n   - 「今週末、一緒に映画を見に行きませんか？」\n   - 「〜ない？ / 行こうよ！」（Casual invitation among close friends）\n2. 喜んで応じる：\n   - 「ぜひ！行きましょう！」「いいね、行こう！」\n3. 丁寧に断る・日程変更を提案する：\n   - 「行きたいのは山々なんですが、あいにく先約がありまして…また次回誘ってください！」\n4. 待ち合わせ場所と時間：\n   - 「土曜日の午後１時に渋谷駅のハチ公前で待ち合わせましょう。」",
            "examples": [
                {
                    "target": "「今週の金曜日の夜、美味しいラーメンを食べに行きませんか？」「いいですね！ぜひ行きましょう！」",
                    "reading": "誘いと返答",
                    "translation": "\"Would you like to go eat delicious ramen this Friday evening?\" \"Sounds great! Let's definitely go!\""
                }
            ],
            "mnemonics": [
                "ハチ公前 (Hachikō-mae) = The quintessential meeting spot in Shibuya, Tokyo!"
            ],
            "culturalNotes": [
                "When declining an invitation in Japan, directly saying \"No (いいえ)\" is considered too blunt; instead, use softening phrases like \"ちょっと用事があって… (I have a slight errand...)\" with an apologetic tone."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "「一緒にカフェに行きませんか？」と誘われた時の前向きな返事はどれですか？",
                    "options": [
                        "カフェは嫌いです (64.1)",
                        "ぜひ！行きましょう！ (64.2)",
                        "誰ですか？ (64.3)",
                        "絶対に行きません (64.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "ぜひ！行きましょう！ is enthusiastic acceptance."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "日本で誘いを角を立てずに丁寧に断る時の定番の言い回しはどれですか？",
                    "options": [
                        "あいにく先約（都合）がありまして…また誘ってください！ (64.1)",
                        "うるさいです (64.2)",
                        "二度と誘わないで (64.3)",
                        "嫌です、無理です (64.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "Polite refusal with soft buffer."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "東京・渋谷で最も有名な定番の待ち合わせスポットはどこですか？",
                    "options": [
                        "羽田空港",
                        "ハチ公前広場（忠犬ハチ公像前）",
                        "山手線の線路上",
                        "東京タワーのてっぺん"
                    ],
                    "answerIndex": 1,
                    "explanation": "Hachiko Statue in Shibuya."
                },
                {
                    "prompt": "訳してください: \"Let's meet in front of the station at 6 PM tomorrow.\"",
                    "options": [
                        "明日の午後６時に駅の前で待ち合わせましょう。",
                        "駅は閉まっています。",
                        "電車が遅れました。",
                        "昨日会いました。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Meeting arrangement."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u13-l5": {
        "id": "ja-u13-l5",
        "unit": "ja-u13",
        "level": "A2",
        "objective": "映画・小説・展示の感想・レビューを書く（ストーリー展開、演出、おすすめ度）。",
        "presentation": {
            "explanation": "感想文・レビューの構成（Review）：\n1. 作品情報：タイトル、監督/著者、ジャンル\n2. あらすじ（要約）：「この作品は、〜の物語を描いています。」\n3. 魅力と評価：\n   - 「ストーリーの展開がスピーディーで、最後まで目が離せませんでした。」\n   - 「映像美と音楽の調和が素晴らしく、感動しました。」\n   - 「俳優の演技が非常にリアルで引き込まれました。」\n4. 総合おすすめ度：「サスペンス映画が好きな方にはぜひおすすめしたい名作です。評価：★★★★★」",
            "examples": [
                {
                    "target": "息をのむような美しい映像と心に響く音楽に圧倒されました。映画館の大スクリーンで見るべき傑作です。",
                    "reading": "映画レビュー",
                    "translation": "I was overwhelmed by breathtaking visuals and heart-stirring music. It is a masterpiece that must be seen on a large cinema screen."
                }
            ],
            "mnemonics": [
                "目が離せない (me ga hanasenai) = Cannot take one's eyes off / Gripping!"
            ],
            "culturalNotes": [
                "Japan has a celebrated anime and film industry (Studio Ghibli, Akira Kurosawa, Makoto Shinkai) with deep audience appreciation for evocative art direction and thematic depth."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "「最後まで目が離せなかった」とはどのような評価ですか？",
                    "options": [
                        "物語がとてもスリリングで面白く、集中して見続けたこと (65.1)",
                        "目が痛くなったこと (65.2)",
                        "画面が見えなかったこと (65.3)",
                        "途中で寝てしまったこと (65.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "Gripping plot."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "「傑作（けっさく）」とはどういう意味ですか？",
                    "options": [
                        "短い作品 (65.1)",
                        "未完成の作品 (65.2)",
                        "極めて優れた素晴らしい作品（Masterpiece） (65.3)",
                        "失敗作 (65.4)"
                    ],
                    "answerIndex": 2,
                    "explanation": "傑作 means masterpiece."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "世界的に有名な日本のアニメーション制作会社はどれですか？",
                    "options": [
                        "スタジオジブリ（Studio Ghibli）",
                        "NASA",
                        "BMW",
                        "ハーバード大学"
                    ],
                    "answerIndex": 0,
                    "explanation": "Studio Ghibli."
                },
                {
                    "prompt": "訳してください: \"The story is deeply moving and full of unexpected twists.\"",
                    "options": [
                        "映画館は暗いです。",
                        "物語は退屈でした。",
                        "本を買いませんでした。",
                        "ストーリーはとても感動的で、予想外の展開に満ちています。"
                    ],
                    "answerIndex": 3,
                    "explanation": "Accurate review translation."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u14-l1": {
        "id": "ja-u14-l1",
        "unit": "ja-u14",
        "level": "A2",
        "objective": "日本の空港での搭乗手続き、手荷物預け、保安検査、税関申告の日本語表現（成田・羽田空港）。",
        "presentation": {
            "explanation": "日本の国際空港（羽田空港・成田国際空港・関西国際空港）：\n- 搭乗券（とうじょうけん - Boarding pass）/ パスポート（旅券）\n- チェックインカウンター / 自動チェックイン機（Self-service kiosk）\n- 預け手荷物（Suitcase check-in）/ 機内持ち込み手荷物（Carry-on luggage）\n- 保安検査場（Security check: ノートパソコンや液体類を取り出す）\n- 搭乗口 / ゲート（Boarding gate）\n- 手荷物受取所（Baggage claim: ターンテーブル）\n- 税関申告書 / Visit Japan Web（Customs declaration QR code）",
            "examples": [
                {
                    "target": "保安検査場では、ノートパソコンと液体類をバッグから出してお出しください。",
                    "reading": "Hoan kensajō dewa, nōtopasokon to ekitairui o baggu kara dashite odashi kudasai.",
                    "translation": "At the security checkpoint, please take out your laptop and liquids from your bag."
                }
            ],
            "mnemonics": [
                "搭乗券 (tōjōken) = Boarding pass! 保安検査 (hoan kensa) = Security check!"
            ],
            "culturalNotes": [
                "Japan utilizes \"Visit Japan Web\" digital QR codes for seamless immigration clearance, customs declaration, and tax-free shopping."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "飛行機に乗るために必要なチケット（Boarding pass）は日本語で何ですか？",
                    "options": [
                        "定期券 (66.1)",
                        "領収書 (66.2)",
                        "入場券 (66.3)",
                        "搭乗券（とうじょうけん） (66.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "搭乗券 (tōjōken) is boarding pass."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "手荷物受取所で自分の荷物が出てくる回転ベルトを何と言いますか？",
                    "options": [
                        "エスカレーター (66.1)",
                        "滑走路 (66.2)",
                        "エレベーター (66.3)",
                        "ターンテーブル / 手荷物受取レーン (66.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "ターンテーブル (turntable / baggage carousel)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "日本の入国・税関手続きをオンラインでスムーズに行うデジタルサービスは何ですか？",
                    "options": [
                        "Tokyo Metro App",
                        "Line Pay",
                        "Suica",
                        "Visit Japan Web"
                    ],
                    "answerIndex": 3,
                    "explanation": "Visit Japan Web."
                },
                {
                    "prompt": "日本語に訳してください: \"Please have your passport and boarding pass ready.\"",
                    "options": [
                        "荷物を置いて帰ってください。",
                        "空港は閉館しました。",
                        "パスポートと搭乗券をお手元にご用意ください。",
                        "切符を買い直してください。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurate airport announcement."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u14-l2": {
        "id": "ja-u14-l2",
        "unit": "ja-u14",
        "level": "A2",
        "objective": "日本の旅館・ホテルでのチェックイン、温泉マナー、懐石料理の予約と対応。",
        "presentation": {
            "explanation": "日本の宿泊施設：ホテルと伝統的な「旅館（りょかん）」：\n- 旅館の特徴：畳（tatami）、布団（futon）、浴衣（yukata）、露天風呂（onsen）\n- 懐石料理（かいせきりょうり - Traditional multi-course seasonal banquet）\n- フロントでの会話：\n  - 「チェックインをお願いします。〜の名前で予約しています。」\n  - 「夕食・朝食は何時からですか？」\n  - 「露天風呂のご利用時間は何時までですか？」\n- 温泉のマナー：浴槽に入る前に体を洗う、タオルを湯船に入れない、脱衣所に入る前に体を拭く",
            "examples": [
                {
                    "target": "チェックインをお願いします。スミスの名前で露天風呂付きの和室を一泊予約しております。",
                    "reading": "Chekkuin o onegai shimasu. Sumisu no namae de rotenburo tsuki no washitsu o ippaku yoyaku shite orimasu.",
                    "translation": "Check-in please. I have booked a Japanese-style room with an open-air bath for one night under the name Smith."
                }
            ],
            "mnemonics": [
                "和室 (washitsu) = Japanese tatami room, 洋室 (yōshitsu) = Western room!"
            ],
            "culturalNotes": [
                "In Japanese onsen (hot springs), washing thoroughly at the washing stations (洗い場) before entering the communal bath is an inviolable cultural rule."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "日本の温泉（おんせん）に入る時の絶対的な基本マナーはどれですか？",
                    "options": [
                        "湯船に入る前に、必ず体を石鹸で洗ってきれいに流す (67.1)",
                        "湯船で泳ぎ回る (67.2)",
                        "服を着たまま入る (67.3)",
                        "靴を履いて入る (67.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "Washing before entering bath."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "旅館で提供される日本の伝統的な季節のコース料理を何と言いますか？",
                    "options": [
                        "懐石料理（かいせきりょうり） (67.1)",
                        "ファストフード (67.2)",
                        "カップラーメン (67.3)",
                        "バーベキュー (67.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "懐石料理 (Kaiseki cuisine)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "旅館の畳の部屋で寝るときに敷く日本の伝統的な寝具は何ですか？",
                    "options": [
                        "ハンモック",
                        "ベンチ",
                        "布団（ふとん）",
                        "寝袋"
                    ],
                    "answerIndex": 2,
                    "explanation": "布団 (Futon)."
                },
                {
                    "prompt": "訳してください: \"Could you please tell me what time dinner is served?\"",
                    "options": [
                        "チェックアウトは何時ですか？",
                        "夕食の時間は何時からか教えていただけますか？",
                        "温泉はどこですか？",
                        "部屋の鍵を失くしました。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurate ryokan dining inquiry."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u14-l3": {
        "id": "ja-u14-l3",
        "unit": "ja-u14",
        "level": "A2",
        "objective": "新幹線（Shinkansen）、特急券、指定席・自由席、ICカード（Suica/Pasmo）の利用。",
        "presentation": {
            "explanation": "日本の鉄道と新幹線（JR）：\n- 新幹線（のぞみ、ひかり、こだま、はやぶさ、かがやき）\n- 乗車券（Base fare ticket）＋ 特急券（Express surcharge ticket）\n- 指定席（Reserved seat）vs 自由席（Non-reserved seat）vs グリーン車（First class Green Car）\n- 交通系ICカード（Suica, Pasmo, ICOCA - タッチで自動改札を通過）\n- 駅弁（えきべん - Train station bento box enjoyed on the Shinkansen）\n- 「〜番線ホーム」「〜行き」「発車ベル」",
            "examples": [
                {
                    "target": "新大阪行きの新幹線「のぞみ」の指定席特急券を２枚購入したいのですが。",
                    "reading": "Shin-Ōsaka yuki no shinkansen \"Nozomi\" no shiteiseki tokkyūken o nimai kōnyū shitai no desu ga.",
                    "translation": "I would like to purchase two reserved-seat express tickets for the Nozomi Shinkansen bound for Shin-Osaka."
                }
            ],
            "mnemonics": [
                "指定席 (shiteiseki) = Reserved, 自由席 (jiyūseki) = Non-reserved!"
            ],
            "culturalNotes": [
                "Eating a local specialty Ekiben (駅弁) accompanied by green tea while enjoying the scenic window view of Mount Fuji from the Shinkansen is an iconic Japanese travel experience."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "新幹線で確実に座るために購入する座席指定の切符は何ですか？",
                    "options": [
                        "自由席 (68.1)",
                        "普通乗車券のみ (68.2)",
                        "指定席特急券（していせき） (68.3)",
                        "入場券 (68.4)"
                    ],
                    "answerIndex": 2,
                    "explanation": "指定席 (Reserved seat)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "駅で購入して新幹線の車内で食べる旅の名物弁当を何と呼びますか？",
                    "options": [
                        "駅弁（えきべん） (68.1)",
                        "給食 (68.2)",
                        "夜食 (68.3)",
                        "おやつ (68.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "駅弁 (Ekiben)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "日本の地下鉄やJRでタッチするだけで乗車できる交通系ICカードの代表例はどれですか？",
                    "options": [
                        "クレジットカードのみ",
                        "Suica / Pasmo / ICOCA",
                        "映画館の半券",
                        "パスポート"
                    ],
                    "answerIndex": 1,
                    "explanation": "Suica / Pasmo."
                },
                {
                    "prompt": "訳してください: \"The Shinkansen bound for Kyoto departs from platform 14 at 10:30 AM.\"",
                    "options": [
                        "京都行きの新幹線は午前10時30分に14番線ホームから発車します。",
                        "切符は売り切れました。",
                        "京都駅は工事中です。",
                        "新幹線は運休です。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurate departure announcement."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u14-l4": {
        "id": "ja-u14-l4",
        "unit": "ja-u14",
        "level": "A2",
        "objective": "日本でのレンタカー利用、国際運転免許証、ETCカード、ガソリンスタンドでの給油。",
        "presentation": {
            "explanation": "日本でのレンタカーとドライブ：\n- 国際運転免許証（International Driving Permit - ジュネーブ条約様式）\n- 日本は左側通行（Drive on the left side of the road）\n- ETCカード（Electronic Toll Collection - 高速道路の自動料金収受システム）\n- カーナビゲーション（Car GPS - 電話番号やマップコードで目的地設定）\n- ガソリンスタンド（給油所）：\n  - レギュラー（Regular gasoline - 赤）\n  - ハイオク（High-octane - 黄）\n  - 軽油（Diesel - 緑）\n  - 「レギュラー満タンでお願いします。」（Regular, fill it up please!）",
            "examples": [
                {
                    "target": "ガソリンスタンドで「レギュラー満タン、現金でお願いします」と頼みました。",
                    "reading": "Gasorin sutando de \"Regyurā mantan, genkin de onegai shimasu\" to tanomimashita.",
                    "translation": "At the gas station I asked: \"Regular, fill it up, paying with cash please.\""
                }
            ],
            "mnemonics": [
                "レギュラー満タン (Regyurā mantan) = Fill it up with regular gasoline!"
            ],
            "culturalNotes": [
                "In Japan, driving is strictly on the left side of the road, and blood alcohol limit for drivers is zero (0.00% absolute zero-tolerance policy)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "日本のガソリンスタンドで「レギュラーガソリンを満タンにしてください」と注文する定番フレーズは？",
                    "options": [
                        "ガソリンはいりません (69.1)",
                        "レギュラー満タンでお願いします (69.2)",
                        "車を洗ってください (69.3)",
                        "水を入れてください (69.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "レギュラー満タンでお願いします is exact."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "日本の高速道路の料金所をノンストップで自動通過するための無線カードシステムは何ですか？",
                    "options": [
                        "ETCカード（ETCシステム） (69.1)",
                        "マイナンバーカード (69.2)",
                        "図書カード (69.3)",
                        "Suica (69.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "ETCカード."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "日本における自動車の通行車線と飲酒運転の基準はどうなっていますか？",
                    "options": [
                        "左側通行・飲酒運転は一切禁止（ゼロ許容基準）",
                        "歩道を通行",
                        "右側通行・飲酒しても自由",
                        "真ん中通行"
                    ],
                    "answerIndex": 0,
                    "explanation": "Left side driving, absolute zero alcohol tolerance."
                },
                {
                    "prompt": "訳してください: \"We rented a car with GPS at Chitose Airport in Hokkaido.\"",
                    "options": [
                        "空港に車がありませんでした。",
                        "車が故障しました。",
                        "道路が通行止めです。",
                        "北海道の新千歳空港でカーナビ付きのレンタカーを借りました。"
                    ],
                    "answerIndex": 3,
                    "explanation": "Accurate car rental translation."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u14-l5": {
        "id": "ja-u14-l5",
        "unit": "ja-u14",
        "level": "A2",
        "objective": "旅行中のトラブル対応：落とし物・忘れ物（交番・遺失物センター）、体調不良、台風・地震時の対応。",
        "presentation": {
            "explanation": "旅行中のトラブルと緊急時対応（Emergency & Lost items）：\n- 交番（こうばん - Kōban / Police box: 紛失届・落とし物の問い合わせ）\n  - 「財布 / パスポートを落としてしまいました。」\n  - 「遺失物届（いしつぶつとどけ）を提出したいのですが。」\n- 駅の遺失物取扱所（Lost & Found counter at train stations）\n- 免税手続き（Tax-Free shopping with passport QR code）\n- 自然災害時の情報確認（NHK防災アプリ、Safety Tips App - 地震・台風警報）\n- 海外旅行保険の連絡先確認",
            "examples": [
                {
                    "target": "交番に行って遺失物届を出したら、落とした財布が無事に見つかって戻ってきました。",
                    "reading": "Kōban ni itte ishitsubutsutodoke o dashitara, otoshita saifu ga buji ni mitsukatte modotte kimashita.",
                    "translation": "When I went to the police box and filed a lost property report, my lost wallet was safely found and returned."
                }
            ],
            "mnemonics": [
                "交番 (Kōban) = Neighborhood police box with a worldwide reputation for returning lost items!"
            ],
            "culturalNotes": [
                "Japan's Kōban system and high civic honesty result in astronomical rates of returned lost wallets, smartphones, and umbrellas to owners."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "日本で財布やパスポートを落とした時、最初に届け出る街頭の警察施設は何ですか？",
                    "options": [
                        "交番（こうばん - Kōban） (70.1)",
                        "映画館 (70.2)",
                        "八百屋 (70.3)",
                        "コンビニのゴミ箱 (70.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "交番 (Kōban)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "落とし物をした時に警察に提出する書類を何と言いますか？",
                    "options": [
                        "確定申告書 (70.1)",
                        "転居届 (70.2)",
                        "遺失物届（いしつぶつとどけ） (70.3)",
                        "婚姻届 (70.4)"
                    ],
                    "answerIndex": 2,
                    "explanation": "遺失物届 (Lost property report)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "日本滞在中に地震や台風の緊急速報を受信できる訪日観光客向け公式アプリはどれですか？",
                    "options": [
                        "YouTube",
                        "TikTok",
                        "Instagram",
                        "Safety Tips アプリ / NHK WORLD-JAPAN"
                    ],
                    "answerIndex": 3,
                    "explanation": "Safety Tips app."
                },
                {
                    "prompt": "訳してください: \"I accidentally left my bag on the train. Is there a lost and found counter?\"",
                    "options": [
                        "電車に乗っていません。",
                        "バッグを新しく買いました。",
                        "電車の中にバッグを忘れてしまいました。お忘れ物取扱所はありますか？",
                        "駅を出てください。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurate lost property inquiry."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u15-l1": {
        "id": "ja-u15-l1",
        "unit": "ja-u15",
        "level": "A2",
        "objective": "日本のファッション、服屋での買い物、サイズ表記（S/M/L、号数）と素材の日本語語彙（銀座・原宿・渋谷）。",
        "presentation": {
            "explanation": "日本の服屋・ショッピングモール（ユニクロ、無印良品、銀座・表参道・渋谷）：\n- 衣類：シャツ、Tシャツ、ズボン / パンツ、ジーンズ / デニム、セーター、コート、ジャケット、ワンピース、スカート\n- 靴・靴下：スニーカー、革靴（かわぐつ）、パンプス、サンダル\n- 素材：綿 / コットン（cotton）、毛 / ウール（wool）、絹 / シルク（silk）、麻 / リネン（linen）、革 / レザー（leather）\n- サイズ：S（エス）、M（エム）、L（エル）、LL / XL（エルエル）\n- 靴のサイズ（cm表記：26.5cm、27.0cmなど）",
            "examples": [
                {
                    "target": "すみません、このウールのセーターのMサイズで、ネイビーのものはありますか？",
                    "reading": "Sumimasen, kono ūru no sētā no Emu-saizu de, neibī no mono wa arimasu ka?",
                    "translation": "Excuse me, do you have this wool sweater in size M in navy blue?"
                }
            ],
            "mnemonics": [
                "靴のサイズ = Shoe sizes in Japan are always measured in centimeters (e.g., 27.0 cm)!"
            ],
            "culturalNotes": [
                "Japan is renowned worldwide for minimalist high-quality functional apparel (UNIQLO Heattech/AIRism, MUJI) and cutting-edge streetwear fashion in Harajuku and Shibuya."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "日本の靴のサイズ表記は何の単位で表されますか？",
                    "options": [
                        "インチ (71.1)",
                        "ポンド (71.2)",
                        "尺 (71.3)",
                        "センチメートル（cm表記：例 26.5cm） (71.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "Centimeters (cm)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "「綿（コットン）100％」の衣服の特徴は何ですか？",
                    "options": [
                        "金属のように硬い (71.1)",
                        "水に溶ける (71.2)",
                        "ガラスでできている (71.3)",
                        "肌触りが良く吸水性と通気性に優れている (71.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "Cotton properties."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "世界的に有名な日本の機能性ファッションブランドはどれですか？",
                    "options": [
                        "ボーイング",
                        "フェラーリ",
                        "ユニクロ（UNIQLO）/ 無印良品（MUJI）",
                        "アップル"
                    ],
                    "answerIndex": 2,
                    "explanation": "UNIQLO / MUJI."
                },
                {
                    "prompt": "日本語に訳してください: \"Do you have this shirt in a larger size?\"",
                    "options": [
                        "このシャツは壊れています。",
                        "このシャツのもう少し大きいサイズはありますか？",
                        "店員はいません。",
                        "服は買いません。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurate sizing inquiry."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u15-l2": {
        "id": "ja-u15-l2",
        "unit": "ja-u15",
        "level": "A2",
        "objective": "試着室（Fitting room）の利用、フェイスカバーのマナー、試着後の感想を伝える表現。",
        "presentation": {
            "explanation": "試着室（しちゃくしつ）でのマナーと会話：\n- 試着をお願いする：「これを試着してもいいですか？」（May I try this on?）\n- 試着室のマナー：\n  - 靴を脱いで上がる（Take off shoes before stepping on the platform）\n  - 女性はメイクが付かないよう「フェイスカバー」を着用する\n- サイズ感の表現：\n  - 「ぴったりです！」（It fits perfectly!）\n  - 「ちょっと大きすぎます / 小さすぎます。」（A bit too big / small.）\n  - 「ウエストが少しきついです / 丈（たけ）が長すぎます。」\n- 「裾上げ（すそあげ）をお願いできますか？」（Can you hem the pants?）",
            "examples": [
                {
                    "target": "「試着してもよろしいですか？」「はい、どうぞ！試着室へご案内いたします。」",
                    "reading": "試着のやりとり",
                    "translation": "\"May I try this on?\" \"Yes, please! Let me guide you to the fitting room.\""
                }
            ],
            "mnemonics": [
                "フェイスカバー (Face cover) = Disposable non-woven hood worn by women to protect garments from makeup!"
            ],
            "culturalNotes": [
                "In Japanese apparel stores, always take off your shoes before stepping into the fitting room carpet, and accept the complimentary face cover (フェイスカバー) to prevent makeup smudging."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "日本の服屋で女性が試着する際にメイク汚れを防ぐために渡されるものは何ですか？",
                    "options": [
                        "フェイスカバー（不織布の頭部カバー） (72.1)",
                        "マスクのみ (72.2)",
                        "サングラス (72.3)",
                        "帽子 (72.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "フェイスカバー (Face cover)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "ズボンの裾（すそ）の長さを直してもらうことを日本語で何と言いますか？",
                    "options": [
                        "裾上げ（すそあげ） (72.1)",
                        "洗濯 (72.2)",
                        "アイロンがけ (72.3)",
                        "染色 (72.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "裾上げ (hemming)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "試着室に入るときの日本の礼儀正しい基本マナーは何ですか？",
                    "options": [
                        "靴のまま泥だらけで上がる",
                        "靴を脱いで試着台に上がる",
                        "何も気にしない",
                        "靴を放り投げる"
                    ],
                    "answerIndex": 1,
                    "explanation": "Taking off shoes."
                },
                {
                    "prompt": "訳してください: \"This jacket fits me perfectly. I will take it.\"",
                    "options": [
                        "このジャケットはサイズがぴったりです。これにします（買います）。",
                        "服は買いません。",
                        "レジはどこですか。",
                        "ジャケットは大きすぎます。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurate buying decision."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u15-l3": {
        "id": "ja-u15-l3",
        "unit": "ja-u15",
        "level": "A2",
        "objective": "お会計・支払い方法（キャッシュレス、PayPay、Suica、クレジットカード）とレシート・ポイントカード。",
        "presentation": {
            "explanation": "レジでのお会計（Cashier & Payment）：\n- 店員の定番セリフ：\n  - 「ポイントカードはお持ちですか？」\n  - 「お支払いはどうされますか？（現金、カード、電子マネー）」\n  - 「レシート（領収書）はご利用ですか？」\n  - 「袋（ふくろ）はお付けしますか？（レジ袋有料化）」\n- キャッシュレス決済の表現：\n  - 「クレジットカードのタッチ決済でお願いします。」\n  - 「PayPay（ペイペイ）で払います。」\n  - 「Suica（交通系IC）でお願いします。」\n- カトリートレイ（コイントレイ）にお金を置くマナー",
            "examples": [
                {
                    "target": "お支払いはクレジットカードのタッチ決済でお願いします。レシートもいただけますか？",
                    "reading": "Oshiharai wa kurejittokādo no tacchi kessai de onegai shimasu.",
                    "translation": "I will pay with contactless credit card. May I also have the receipt?"
                }
            ],
            "mnemonics": [
                "PayPay / Suica = Ubiquitous QR code and IC tap payments across Japan!"
            ],
            "culturalNotes": [
                "In Japan, cash and cards are respectfully placed in the small payment tray (カルトン / コイントレイ) on the counter rather than handed directly from palm to palm."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "日本のレジでお金やクレジットカードを渡す際のマナーはどれですか？",
                    "options": [
                        "店員の顔に投げる (73.1)",
                        "カウンターの上に置かれたコイントレイ（カルトン）に乗せる (73.2)",
                        "床に落とす (73.3)",
                        "ポケットに隠す (73.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "Placing on the coin tray."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "日本全国で最も普及しているQRコード決済サービスの一つは何ですか？",
                    "options": [
                        "PayPay（ペイペイ） (73.1)",
                        "BitTorrent (73.2)",
                        "Skype (73.3)",
                        "Telegram (73.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "PayPay."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "日本のコンビニやスーパーで「レジ袋」をもらうときの規則はどうなっていますか？",
                    "options": [
                        "レジ袋は基本的に有料（1枚数円）で提供される",
                        "常に1万円かかる",
                        "何枚でも無料",
                        "世界中で禁止"
                    ],
                    "answerIndex": 0,
                    "explanation": "Plastic bags are charged (有料化)."
                },
                {
                    "prompt": "訳してください: \"Can I pay using IC transit card (Suica)?\"",
                    "options": [
                        "カードが壊れています。",
                        "お金を持っていません。",
                        "レジは閉まっています。",
                        "交通系ICカード（Suica）で支払うことはできますか？"
                    ],
                    "answerIndex": 3,
                    "explanation": "Accurate IC payment inquiry."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u15-l4": {
        "id": "ja-u15-l4",
        "unit": "ja-u15",
        "level": "A2",
        "objective": "日本のデパ地下（Depachika）、伝統市場（築地場外市場・錦市場）、お土産選び（おみやげ）。",
        "presentation": {
            "explanation": "デパ地下と日本のグルメ市場：\n- デパ地下（デパートの地下食品売り場：伊勢丹、三越、高島屋、阪急）\n  - 高級和菓子、洋菓子、総菜（そうざい）、老舗の弁当、高級フルーツ\n- 伝統的な市場・商店街：\n  - 築地場外市場（東京の新鮮な海鮮丼・玉子焼き）\n  - 錦市場（京都の台所：京野菜、漬物、湯葉）\n  - アメ横（上野の活気ある商店街）\n- お土産文化（おみやげ - 旅先で職場や友人のために個包装のお菓子を買う習慣）",
            "examples": [
                {
                    "target": "デパ地下で職場の同僚に配るためのお土産として、個包装の和菓子アソートを購入しました。",
                    "reading": "Depachika de shokuba no dōryō ni kubaru tame no omiyage toshite...",
                    "translation": "In the department store basement, I bought an assortment of individually wrapped Japanese sweets as souvenirs for my colleagues."
                }
            ],
            "mnemonics": [
                "デパ地下 (Depachika) = The underground food wonderland of Japanese department stores!"
            ],
            "culturalNotes": [
                "Omiyage (お土産) is a deeply rooted Japanese cultural custom of bringing back individually packaged regional snacks for workplace colleagues upon returning from trips."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "日本の大手百貨店の地下にある豪華な食品・総菜フロアを何と呼びますか？",
                    "options": [
                        "ボイラー室 (74.1)",
                        "デパ地下（デパちか） (74.2)",
                        "倉庫 (74.3)",
                        "地下駐車場 (74.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "デパ地下 (Depachika)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "「京都の台所」として有名な、京都の伝統食材が揃う細長い商店街市場はどこですか？",
                    "options": [
                        "錦市場（にしきいちば） (74.1)",
                        "アメ横 (74.2)",
                        "道頓堀 (74.3)",
                        "築地市場 (74.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "錦市場 in Kyoto."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "日本でお土産用のお菓子を選ぶ際、職場などに配りやすいように重視されるパッケージの特徴は？",
                    "options": [
                        "包装が一切ないこと",
                        "賞味期限が今日中のもの",
                        "一つの巨大な塊になっていること",
                        "一つずつ分けられる「個包装（こほうそう）」になっていること"
                    ],
                    "answerIndex": 3,
                    "explanation": "Individually wrapped (個包装)."
                },
                {
                    "prompt": "訳してください: \"Please wrap this confectionery box as a gift souvenir.\"",
                    "options": [
                        "箱を捨ててください。",
                        "お金を返してください。",
                        "このお菓子をお土産用にギフト包装（ラッピング）していただけますか？",
                        "お菓子は食べません。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurate gift wrapping request."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u15-l5": {
        "id": "ja-u15-l5",
        "unit": "ja-u15",
        "level": "A2",
        "objective": "免税手続き（Tax-Free）、消費税の免除、レシートと返品・交換のルール。",
        "presentation": {
            "explanation": "免税ショッピングと返品（Tax-Free & Returns）：\n- 免税カウンター（めんぜいカウンター - Tax-Free Counter / Tax Refund）\n- 免税の条件：\n  - 訪日外国人観光客（短期滞在 / 6か月未満）\n  - パスポート（旅券）またはVisit Japan Webの免税QRコードの提示\n  - 同日・同店舗で合計5,000円以上（税抜）の購入\n- 消耗品（化粧品、食品、医薬品）の密封シール（日本国内で開封不可）\n- 日本での返品・交換：レシートと未開封・タグ付き商品を持参して1週間以内が一般的",
            "examples": [
                {
                    "target": "免税手続きをお願いします。こちらがパスポートと免税QRコードです。",
                    "reading": "Menzei tetsuzuki o onegai shimasu. Kochira ga pasupōto to menzei kyū-āru-kōdo desu.",
                    "translation": "Tax-free processing please. Here is my passport and tax-free QR code."
                }
            ],
            "mnemonics": [
                "免税 (Menzei) = Tax-Free shopping (exempt from Japan's 10% consumption tax)!"
            ],
            "culturalNotes": [
                "Consumables bought under tax-free exemptions in Japan are packed in tamper-evident sealed bags (免税専用袋) and must not be opened until departing Japan."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "日本で免税（Tax-Free）を受けるためにレジや免税カウンターで提示するものは何ですか？",
                    "options": [
                        "パスポート（旅券）または免税QRコード (75.1)",
                        "日本の健康保険証 (75.2)",
                        "電車の切符 (75.3)",
                        "名刺 (75.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "Passport / Tax-free QR code."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "日本で免税購入した化粧品や食品などの消耗品について守るべきルールは何ですか？",
                    "options": [
                        "ゴミ箱に捨てる (75.1)",
                        "友達にあげてしまう (75.2)",
                        "日本を出国するまで専用の密封袋を開封してはならない (75.3)",
                        "買ってすぐに全部食べる (75.4)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Must remain sealed in Japan."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "日本の一般的な標準消費税率は何パーセントですか？",
                    "options": [
                        "0％",
                        "50％",
                        "10％（飲食料品等は軽減税率8％）",
                        "25％"
                    ],
                    "answerIndex": 2,
                    "explanation": "10% standard (8% reduced for groceries)."
                },
                {
                    "prompt": "訳してください: \"Is this purchase eligible for tax-free shopping?\"",
                    "options": [
                        "税金を多く払います。",
                        "このお買い物は免税手続きの対象になりますか？",
                        "買い物をキャンセルします。",
                        "レシートはいりません。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurate tax-free inquiry."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u16-l1": {
        "id": "ja-u16-l1",
        "unit": "ja-u16",
        "level": "A2",
        "objective": "日本の天気、気温、気象現象の日本語表現（晴れ、雨、曇り、雪、湿度、ゲリラ豪雨）。",
        "presentation": {
            "explanation": "日本の天気と気象（てんき）：\n- 天気の状態：晴れ（はれ - sunny）、曇り（くもり - cloudy）、雨（あめ - rain）、雪（ゆき - snow）、大雨（おおあめ - heavy rain）\n- 気象現象：風（かぜ）、台風（たいふう - typhoon）、雷（かみなり - thunder）、霧（きり - fog）、虹（にじ - rainbow）\n- 気温と湿度：\n  - 最高気温（さいこうきおん）/ 最低気温（さいていきおん）\n  - 摂氏（せっし - Celsius: 例「今日は摂氏25度です。」）\n  - 湿度が高い（蒸し暑い - humid and muggy in summer）\n- 「ゲリラ豪雨」（突発的な局地的大雨 / Sudden localized torrential downpour）",
            "examples": [
                {
                    "target": "今日の東京は一日中よく晴れて、最高気温は25度まで上がる見込みです。",
                    "reading": "Kyō no Tōkyō wa ichinichijū yoku harete, saikō kion wa nijūgo-do made agaru mikomi desu.",
                    "translation": "Today in Tokyo it will be sunny all day, and the maximum temperature is expected to rise to 25 degrees."
                }
            ],
            "mnemonics": [
                "蒸し暑い (mushiatsui) = Humid and sweltering summer weather!"
            ],
            "culturalNotes": [
                "In Japanese culture, weather forecast accuracy is among the highest in the world, with umbrella forecasts (傘指数) and laundry drying indices (洗濯指数) broadcast daily."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "日本の夏の高温多湿な「じっとりとした暑さ」を表す日本語の形容詞はどれですか？",
                    "options": [
                        "肌寒い (76.1)",
                        "涼しい (76.2)",
                        "凍える (76.3)",
                        "蒸し暑い（むしあつい） (76.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "蒸し暑い (humid and hot)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "日本の夏に都市部で突発的に発生する猛烈な局地的大雨を何と言いますか？",
                    "options": [
                        "春一番 (76.1)",
                        "小雨 (76.2)",
                        "霧雨 (76.3)",
                        "ゲリラ豪雨（ゲリラごうう） (76.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "ゲリラ豪雨."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "テレビの天気予報で傘を持っていくべきかどうかを示す指数は何ですか？",
                    "options": [
                        "車指数",
                        "傘指数（かさしすう）",
                        "飛行機指数",
                        "靴指数"
                    ],
                    "answerIndex": 1,
                    "explanation": "傘指数."
                },
                {
                    "prompt": "日本語に訳してください: \"There will be a sudden thunderstorm this evening; please take an umbrella.\"",
                    "options": [
                        "今夜は突然の雷雨が予想されますので、傘をお持ちください。",
                        "傘は不要です。",
                        "今夜は晴れて星が見えます。",
                        "雨は一切降りません。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurate thunderstorm warning translation."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u16-l2": {
        "id": "ja-u16-l2",
        "unit": "ja-u16",
        "level": "A2",
        "objective": "日本の四季（春夏秋冬）、二十四節気、お花見（桜）、紅葉狩り、雪景色。",
        "presentation": {
            "explanation": "日本の豊かな四季（しき）：\n- 春（はる - 3〜5月）：桜（さくら）、お花見（はなみ）、桜前線（さくらぜんせん）、新学期\n- 梅雨（つゆ - 6〜7月）：アジサイの花、雨季\n- 夏（なつ - 7〜8月）：花火大会、夏祭り、浴衣、スイカ、蝉の声\n- 秋（あき - 9〜11月）：紅葉狩り（もみじがり - Viewing autumn maple leaves）、食欲の秋、十五夜（月見）\n- 冬（ふゆ - 12〜2月）：雪景色（ゆきげしき）、温泉、こたつ、お正月",
            "examples": [
                {
                    "target": "春になると公園で満開の桜の下でお花見を楽しみ、秋には京都へ紅葉を見に行きます。",
                    "reading": "Haru ni naru to kōen de mankai no sakura no shita de ohanami o tanoshimi...",
                    "translation": "When spring arrives we enjoy cherry blossom viewing under full blooms in the park, and in autumn we go to Kyoto to see the fall foliage."
                }
            ],
            "mnemonics": [
                "お花見 (Hanami) = Spring cherry blossom viewing, 紅葉狩り (Momijigari) = Autumn foliage viewing!"
            ],
            "culturalNotes": [
                "Japan's deep aesthetic appreciation for the fleeting beauty of cherry blossoms (物の哀れ Mono no aware - the bittersweet transience of things) defines traditional art and literature."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "春に満開の桜の木の下で家族や友人と飲食を楽しむ日本の伝統行事は何ですか？",
                    "options": [
                        "お花見（おはなみ） (77.1)",
                        "水泳大会 (77.2)",
                        "雪合戦 (77.3)",
                        "紅葉狩り (77.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "お花見 (Hanami)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "秋に赤や黄色に色づいたカエデやイチョウの葉を鑑賞しに行く行事を何と言いますか？",
                    "options": [
                        "紅葉狩り（もみじがり） (77.1)",
                        "潮干狩り (77.2)",
                        "イチゴ狩り (77.3)",
                        "キノコ狩り (77.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "紅葉狩り (Momijigari)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "6月から7月にかけて日本列島に長雨をもたらす季節は何ですか？",
                    "options": [
                        "梅雨（つゆ / ばいう）",
                        "厳冬",
                        "春一番",
                        "真夏"
                    ],
                    "answerIndex": 0,
                    "explanation": "梅雨 (Tsuyu - rainy season)."
                },
                {
                    "prompt": "訳してください: \"In autumn, the mountains of Kyoto are beautifully colored in red and gold.\"",
                    "options": [
                        "秋には桜が咲きます。",
                        "京都に山はありません。",
                        "山は雪で真っ白です。",
                        "秋には京都の山々が赤や黄金色に美しく彩られます。"
                    ],
                    "answerIndex": 3,
                    "explanation": "Accurate autumn landscape translation."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u16-l3": {
        "id": "ja-u16-l3",
        "unit": "ja-u16",
        "level": "A2",
        "objective": "日本の名山・自然遺産：富士山（世界文化遺産）、屋久島、白神山地、知床半島。",
        "presentation": {
            "explanation": "日本の壮大な自然遺産（しぜんいさん）：\n- 富士山（ふじさん - 標高3,776m、日本の最高峰、信仰の対象と芸術の源泉としてユネスコ世界文化遺産）\n- 屋久島（やくしま - 樹齢数千年の縄文杉、苔むす原生林、映画『もののけ姫』のモデル）\n- 白神山地（しらかみさんち - 東アジア最大級のブナの原生林）\n- 知床（しれとこ - 北海道の流氷、ヒグマ、オホーツク海の豊かな海洋生態系）\n- 地理の語彙：火山、カルデラ、渓谷、リアス式海岸、滝（たき）",
            "examples": [
                {
                    "target": "富士山は標高三千七百七十六メートルの日本最高峰で、美しい円錐形の成層火山です。",
                    "reading": "Fujisan wa hyōkō sanzenshichihyakunanajūroku mētoru no Nihon saikōhō de...",
                    "translation": "Mount Fuji is Japan's highest peak at 3,776 meters, a stratovolcano with a beautiful conical shape."
                }
            ],
            "mnemonics": [
                "富士山 (3,776m) = Japan's sacred peak, Yakushima = Ancient Jōmon Cedar island!"
            ],
            "culturalNotes": [
                "Mount Fuji has inspired Japanese painters for centuries (Hokusai's \"Thirty-Six Views of Mount Fuji\"), worshipped as a sacred spiritual mountain (富士信仰)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "日本の最高峰であり、国の象徴として世界遺産に登録されている山は何ですか？",
                    "options": [
                        "高尾山 (78.1)",
                        "富士山（ふじさん - 標高3,776m） (78.2)",
                        "阿蘇山 (78.3)",
                        "エベレスト (78.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "富士山 (Mount Fuji)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "樹齢数千年を超える巨大な「縄文杉」が生息する世界自然遺産の島はどこですか？",
                    "options": [
                        "屋久島（やくしま - 鹿児島県） (78.1)",
                        "沖縄本島 (78.2)",
                        "淡路島 (78.3)",
                        "佐渡島 (78.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "屋久島 (Yakushima)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "冬の北海道・オホーツク海沿岸に押し寄せる神秘的な氷の自然現象は何ですか？",
                    "options": [
                        "人工雪",
                        "氷山",
                        "霜柱",
                        "流氷（りゅうひょう）"
                    ],
                    "answerIndex": 3,
                    "explanation": "流氷 (Drift ice)."
                },
                {
                    "prompt": "訳してください: \"The trekking trail through the ancient mossy cedar forest is breathtaking.\"",
                    "options": [
                        "道が舗装されています。",
                        "森は立ち入り禁止です。",
                        "苔むした古代の杉林を歩くトレッキングルートは息をのむほど美しいです。",
                        "森には木がありません。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurate nature trail translation."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u16-l4": {
        "id": "ja-u16-l4",
        "unit": "ja-u16",
        "level": "A2",
        "objective": "気象庁の防災気象情報、台風・大雨特別警報、緊急地震速報（EEW）と避難指示。",
        "presentation": {
            "explanation": "日本の防災と緊急情報（ぼうさい）：\n- 気象庁（JMA - Japan Meteorological Agency）の警報レベル：\n  - 注意報（Advisory） < 警報（Warning） < 特別警報（Emergency Warning - ただちに命を守る行動を！）\n- 緊急地震速報（EEW - Earthquake Early Warning: スマートフォンの警告音、強い揺れに警戒）\n- 台風の接近：中心気圧（hPa）、最大瞬間風速、暴風域\n- 避難情報：高齢者等避難（レベル3） < 避難指示（レベル4 - 全員避難） < 緊急安全確保（レベル5）\n- 防災グッズ：非常用持ち出し袋、懐中電灯、保存水、乾パン",
            "examples": [
                {
                    "target": "緊急地震速報です。強い揺れに備えてください。頭を守り、机の下に隠れてください。",
                    "reading": "Kinkyū jishin sokuhō desu. Tsuyoi yure ni sonaete kudasai...",
                    "translation": "Earthquake Early Warning. Prepare for strong shaking. Protect your head and hide under a desk."
                }
            ],
            "mnemonics": [
                "特別警報 (Tokubetsu Keihō) = Level 5 Maximum Emergency Warning: Take immediate life-saving action!"
            ],
            "culturalNotes": [
                "Japan operates the world's most advanced Earthquake Early Warning system, broadcasting alerts to millions of mobile phones and TV channels within seconds of seismic P-wave detection."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "緊急地震速報のアラームが鳴った時、真っ先にとるべき安全行動は何ですか？",
                    "options": [
                        "エレベーターに乗る (79.1)",
                        "頭を保護し、丈夫な机の下などに身を隠す（姿勢を低くする） (79.2)",
                        "外へ走って飛び出す (79.3)",
                        "窓から外を覗く (79.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "Protect head and drop under sturdy desk."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "自治体から「避難指示（警戒レベル４）」が出された場合、どうすべきですか？",
                    "options": [
                        "危険な場所から全員速やかに指定の避難所や安全な場所へ避難する (79.1)",
                        "川を見に行く (79.2)",
                        "何もしない (79.3)",
                        "テレビゲームをして待つ (79.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "Evacuate immediately."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "気象庁が数十年に一度の重大な災害が迫っている時に発表する最高レベルの警報は何ですか？",
                    "options": [
                        "注意報",
                        "お知らせ",
                        "特別警報（とくべつけいほう）",
                        "天気予報"
                    ],
                    "answerIndex": 2,
                    "explanation": "特別警報 (Emergency Warning)."
                },
                {
                    "prompt": "訳してください: \"A large typhoon is approaching with strong winds and heavy rainfall.\"",
                    "options": [
                        "快晴の予報です。",
                        "大型の台風が強い風と大雨を伴って接近しています。",
                        "台風は消滅しました。",
                        "風も雨もありません。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurate typhoon warning translation."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u16-l5": {
        "id": "ja-u16-l5",
        "unit": "ja-u16",
        "level": "A2",
        "objective": "日本の環境保護、ごみ分別（燃えるごみ、燃えないごみ、資源ごみ）と「もったいない」の精神。",
        "presentation": {
            "explanation": "日本の環境意識とリサイクル文化：\n- 「もったいない（Mottainai）」の哲学（Reduce, Reuse, Recycle, Respect - ノーベル平和賞受賞者ワンガリ・マータイ氏が世界に提唱）\n- ごみの徹底した分別ルール：\n  - 燃えるごみ / 可燃ごみ（Burnable waste: 生ごみ、紙くず）\n  - 燃えないごみ / 不燃ごみ（Non-burnable: ガラス、陶器、金属）\n  - 資源ごみ（Recyclables: ペットボトル、アルミ缶、スチール缶、ビン、古紙）\n- ペットボトルのマナー：ラベルをはがし、キャップを外し、中を軽く水洗いしてつぶす\n- マイバッグ（エコバッグ）の持参とマイボトルの利用",
            "examples": [
                {
                    "target": "「もったいない」の精神を大切にして、ペットボトルはラベルとキャップを分別してリサイクルに出します。",
                    "reading": "Mottainai no seishin o taisetsu ni shite...",
                    "translation": "Valuing the spirit of \"Mottainai\", we separate the labels and caps of plastic bottles before putting them out for recycling."
                }
            ],
            "mnemonics": [
                "MOTTAINAI = Ancient Japanese philosophy of treasuring resources and eliminating waste!"
            ],
            "culturalNotes": [
                "The Japanese concept of \"Mottainai\" expresses a sense of regret over wasting resources, embodying respect for materials and environmental stewardship."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "日本の「資源を無駄にせず大切にする心」を表す世界的に知られた日本語の概念は何ですか？",
                    "options": [
                        "もったいない（Mottainai） (80.1)",
                        "めんどくさい (80.2)",
                        "どういたしまして (80.3)",
                        "しょうがない (80.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "もったいない (Mottainai)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "日本でペットボトルをリサイクルに出す時の正しい手順はどれですか？",
                    "options": [
                        "飲み残しを入れたまま捨てる (80.1)",
                        "泥で汚す (80.2)",
                        "燃えるゴミに混ぜる (80.3)",
                        "キャップとラベルをはがし、中をすすいでつぶす (80.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "Remove cap/label, rinse, and crush."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "生ごみや紙くずは何ごみとして出しますか？",
                    "options": [
                        "危険物",
                        "燃えるごみ（可燃ごみ）",
                        "アルミ缶",
                        "大型家電"
                    ],
                    "answerIndex": 1,
                    "explanation": "燃えるごみ (Burnable waste)."
                },
                {
                    "prompt": "訳してください: \"Reducing single-use plastics and recycling resources is vital for protecting nature.\"",
                    "options": [
                        "使い捨てプラスチックを減らし、資源をリサイクルすることは自然保護のために不可欠です。",
                        "ゴミは分別しなくていいです。",
                        "自然はどうでもいいです。",
                        "プラスチックをたくさん燃やします。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurate environmental conservation statement."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u17-l1": {
        "id": "ja-u17-l1",
        "unit": "ja-u17",
        "level": "A2",
        "objective": "体の部位、症状の表現（痛い、熱がある、喉が痛い、吐き気がする、だるい）と病院での受付。",
        "presentation": {
            "explanation": "体の部位と症状の日本語表現（びょういん）：\n- 体の部位（からだのぶい）：頭（あたま）、目（め）、耳（みみ）、喉（のど）、胸（むね）、お腹（おなか）、背中（せなか）、腰（こし）、腕（うで）、足（あし）\n- 症状の表現（しょうじょう）：\n  - 「頭が痛いです（ずつうがします）。」（I have a headache.）\n  - 「熱があります（ねつが38度あります）。」（I have a fever of 38°C.）\n  - 「喉が痛くて咳が出ます。」（Sore throat and cough.）\n  - 「お腹が痛くて下痢をしています。」（Stomachache and diarrhea.）\n  - 「吐き気がします / めまいがします / 体がだるいです。」\n- 病院の受付：「初診（しょしん）です。問診票（もんしんひょう）を書きます。」",
            "examples": [
                {
                    "target": "昨夜から熱が三十八度五分あり、喉が痛くて体がとてもだるいです。",
                    "reading": "Sakuya kara netsu ga sanjūhachi-do go-bu ari, nodo ga itakute...",
                    "translation": "Since last night I have had a fever of 38.5 degrees, my throat hurts, and my body feels very sluggish."
                }
            ],
            "mnemonics": [
                "〜が痛い (itai) = Hurts! 熱がある (netsu ga aru) = Have a fever! だるい = Sluggish/fatigued!"
            ],
            "culturalNotes": [
                "When visiting a clinic in Japan for the first time, patients complete a detailed questionnaire (問診票 Monshinp愺) describing all symptoms, onset times, and medical history."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "日本語で「喉が痛くて咳が出る」を正確に伝える文はどれですか？",
                    "options": [
                        "足が痛くて走れます (81.1)",
                        "お腹が空いてご飯を食べます (81.2)",
                        "眠くて元気です (81.3)",
                        "喉が痛くて咳（せき）が出ます (81.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "喉が痛くて咳が出ます."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "日本の病院で初めて診察を受ける時に記入する症状質問票を何と言いますか？",
                    "options": [
                        "パスポート (81.1)",
                        "乗車券 (81.2)",
                        "領収書 (81.3)",
                        "問診票（もんしんひょう） (81.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "問診票 (Monshinp愺)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "体が重く疲れて力が入らない状態を表す日本語の表現は何ですか？",
                    "options": [
                        "体がだるい（倦怠感がある）",
                        "体が軽い",
                        "絶好調",
                        "元気いっぱい"
                    ],
                    "answerIndex": 0,
                    "explanation": "体がだるい."
                },
                {
                    "prompt": "日本語に訳してください: \"I have a severe stomachache and nausea; please call a doctor.\"",
                    "options": [
                        "お腹がいっぱいで幸せです。",
                        "病院に行きたくありません。",
                        "元気で病気ではありません。",
                        "激しい腹痛と吐き気がします。お医者さんを呼んでください。"
                    ],
                    "answerIndex": 3,
                    "explanation": "Accurate emergency symptom translation."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u17-l2": {
        "id": "ja-u17-l2",
        "unit": "ja-u17",
        "level": "A2",
        "objective": "日本の薬局・ドラッグストア（マツモトキヨシ）、処方箋とお薬手帳、用法の指示（食後、1日3回）。",
        "presentation": {
            "explanation": "日本の薬局とドラッグストア（調剤薬局 / ドラッグストア）：\n- 調剤薬局（ちょうざいやっきょく）：病院で発行された「処方箋（しょほうせん - Prescription）」を出して調剤してもらう\n- ドラッグストア（マツモトキヨシ、ウエルシアなど）：一般用医薬品（OTC医薬品：頭痛薬、風邪薬、目薬、湿布、胃腸薬）を購入\n- お薬手帳（おくすりてちょう - Prescription record booklet / digital app to prevent dangerous drug interactions）\n- 服用方法の指示（ふくよう）：\n  - 「食前（しょくぜん - Before meals）」 / 「食後（しょくご - After meals）」 / 「就寝前（Before sleep）」\n  - 「1回1錠、1日3回、食後に水で服用してください。」",
            "examples": [
                {
                    "target": "このお薬は毎食後に一錠ずつ、十分なお水で飲んでください。こちらがお薬手帳です。",
                    "reading": "Kono okusuri wa maishokugo ni ichijō zutsu, jūbun na omizu de nonde kudasai.",
                    "translation": "Please take one tablet of this medicine after every meal with plenty of water. Here is your medication notebook."
                }
            ],
            "mnemonics": [
                "お薬手帳 (Okusuri Techō) = Essential Japanese booklet recording all medications to prevent drug interactions!"
            ],
            "culturalNotes": [
                "Japan's drugstores are world-famous for premium skincare, eye drops, warm heat patches (めぐりズム), and pain relief patches (サロンパス Salompast)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "医師が発行した処方箋をもとに薬を調合してもらう専門の薬局は何ですか？",
                    "options": [
                        "調剤薬局（ちょうざいやっきょく） (82.1)",
                        "郵便局 (82.2)",
                        "コンビニ (82.3)",
                        "本屋 (82.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "調剤薬局."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "薬の重複や危険な飲み合わせを防ぐために日本で広く使われている手帳は何ですか？",
                    "options": [
                        "お薬手帳（おくすりてちょう） (82.1)",
                        "生徒手帳 (82.2)",
                        "日記帳 (82.3)",
                        "スケジュール帳 (82.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "お薬手帳."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "「食後（しょくご）に服用」とはいつ薬を飲むことを意味しますか？",
                    "options": [
                        "食事を食べる1時間前",
                        "運動の最中",
                        "寝る直前のみ",
                        "食事を終えてから30分以内"
                    ],
                    "answerIndex": 3,
                    "explanation": "食後 (After meals)."
                },
                {
                    "prompt": "訳してください: \"Take two capsules after meals three times a day for five days.\"",
                    "options": [
                        "薬を全部一度に飲んでください。",
                        "薬を飲んではいけません。",
                        "1日3回、毎食後に2カプセルずつ5日間服用してください。",
                        "水なしで噛んでください。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurate dosage translation."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u17-l3": {
        "id": "ja-u17-l3",
        "unit": "ja-u17",
        "level": "A2",
        "objective": "日本の緊急電話119番（救急車）、健康保険証 / マイナ保険証、夜間救急診療。",
        "presentation": {
            "explanation": "日本の救急医療と救急車（きゅうきゅうしゃ）：\n- 緊急通報ダイヤル：119番（消防・救急車 / Fire & Ambulance）\n  - 「火事ですか、救急ですか？」「救急（きゅうきゅう）です！」\n  - 住所と現在地、患者の状態、年齢を伝える\n  - 日本では救急車の出動要請自体は無料です\n- 日本の医療保険制度：国民健康保険証（またはマイナンバーカードのマイナ保険証）で窓口負担は原則1〜3割\n- 夜間・休日の急病：救急安心センター事業（#7119 - 救急車を呼ぶか迷った時の医療相談ダイヤル）",
            "examples": [
                {
                    "target": "119番に電話して救急車を呼びました。患者は意識があり呼吸も安定しています。",
                    "reading": "Hyakujūkyū-ban ni denwa shite kyūkyūsha o yobimashita...",
                    "translation": "I dialed 119 and called an ambulance. The patient is conscious and breathing is stable."
                }
            ],
            "mnemonics": [
                "119 = Fire & Ambulance in Japan! #7119 = Medical consultation hotline when unsure whether to call ambulance!"
            ],
            "culturalNotes": [
                "Japan's universal healthcare system guarantees access to any hospital or clinic across the country with low copayments (typically 30% for working adults)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "日本で救急車を呼ぶための緊急通報電話番号は何番ですか？",
                    "options": [
                        "110番（警察） (83.1)",
                        "119番 (83.2)",
                        "118番（海上保安） (83.3)",
                        "104番 (83.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "119番 (Ambulance & Fire)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "日本で「救急車を呼ぶべきか病院に行くべきか」迷った時に相談できる全国共通ダイヤルは何ですか？",
                    "options": [
                        "#7119（救急安心センター事業） (83.1)",
                        "#110 (83.2)",
                        "#000 (83.3)",
                        "#999 (83.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "#7119."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "日本の公的医療保険に加入している一般的な現役世代の自己負担割合は何割ですか？",
                    "options": [
                        "0割",
                        "9割負担",
                        "3割負担（原則7割が保険給付）",
                        "10割全額自己負担"
                    ],
                    "answerIndex": 2,
                    "explanation": "3割負担 (30% copay)."
                },
                {
                    "prompt": "訳してください: \"The patient collapsed and lost consciousness; send an ambulance immediately to this address.\"",
                    "options": [
                        "救急車は不要です。",
                        "患者が倒れて意識がありません。この住所に今すぐ救急車をお願いします。",
                        "病院は休みです。",
                        "患者は散歩しています。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurate emergency dispatch call translation."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u17-l4": {
        "id": "ja-u17-l4",
        "unit": "ja-u17",
        "level": "A2",
        "objective": "日本の長寿の秘密：和食（一汁三菜、発酵食品、緑茶）、ラジオ体操、温泉湯治（とうじ）。",
        "presentation": {
            "explanation": "日本の健康長寿とウェルネス文化（健康と長寿）：\n- 和食（ユネスコ無形文化遺産）の栄養バランス：「一汁三菜（いちじゅうさんさい - 主食のご飯、味噌汁、主菜1品、副菜2品）」\n- 発酵食品（はっこうしょくひん）：納豆（ナットウキナーゼ）、味噌、醤油、漬物、甘酒（「飲む点滴」）\n- 緑茶（カテキンによる抗酸化作用と抗菌作用）\n- 朝の「ラジオ体操」（昭和初期から国民的健康習慣として続く全身ストレッチ運動）\n- 温泉湯治（とうじ - 温泉のミネラル泉質で体を温め、自律神経を整える古来の健康療法）",
            "examples": [
                {
                    "target": "毎朝の納豆と味噌汁、緑茶を中心とした一汁三菜の和食が日本の健康長寿の基礎を支えています。",
                    "reading": "Maiasa no nattō to misoshiru, ryokucha o chūshin to shita ichijū-sansai no washoku...",
                    "translation": "The traditional Japanese washoku diet centered on morning natto, miso soup, green tea, and \"one soup, three dishes\" supports Japan's healthy longevity."
                }
            ],
            "mnemonics": [
                "一汁三菜 (Ichijū-sansai) = One soup, three dishes: The golden nutritional balance of Washoku!"
            ],
            "culturalNotes": [
                "Japan boasts one of the highest healthy life expectancies in the world, with regions like Okinawa and Nagano celebrated as global \"Blue Zones\" of active centenarians."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "日本の伝統的な献立の基本である「ご飯、汁物、3つのおかず」の構成を何と言いますか？",
                    "options": [
                        "食べ放題 (84.1)",
                        "一汁三菜（いちじゅうさんさい） (84.2)",
                        "ファストフード (84.3)",
                        "大盛り丼 (84.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "一汁三菜 (Ichijū-sansai)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "日本の大豆発酵食品で、腸内環境を整え血流を良くすることで有名なネバネバした伝統食は何ですか？",
                    "options": [
                        "納豆（なっとう） (84.1)",
                        "うどん (84.2)",
                        "餅 (84.3)",
                        "天ぷら (84.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "納豆 (Natto)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "温泉に一定期間滞在して温泉の効能で病気や疲労を治す日本の伝統的な温泉療法は何ですか？",
                    "options": [
                        "登山",
                        "湯治（とうじ）",
                        "サウナのみ",
                        "海水浴"
                    ],
                    "answerIndex": 1,
                    "explanation": "湯治 (Tōji - onsen hot spring therapy)."
                },
                {
                    "prompt": "訳してください: \"Drinking antioxidant-rich green tea and eating fermented foods daily promotes lifelong gut health.\"",
                    "options": [
                        "抗酸化物質が豊富な緑茶を飲み、発酵食品を毎日食べることは生涯にわたる腸の健康を促進します。",
                        "健康はどうでもいいです。",
                        "緑茶は体に毒です。",
                        "発酵食品は食べられません。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurate dietary health translation."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u17-l5": {
        "id": "ja-u17-l5",
        "unit": "ja-u17",
        "level": "A2",
        "objective": "日本の最先端再生医療（iPS細胞 - 山中伸弥教授ノーベル賞）、重粒子線がん治療、国民健康診査（人間ドック）。",
        "presentation": {
            "explanation": "日本の最先端医療と予防医学（せんたんいりょう）：\n- iPS細胞（人工多能性幹細胞 - 京都大学・山中伸弥教授が開発、2012年ノーベル生理学・医学賞受賞、眼の網膜や心筋、パーキンソン病の再生医療臨床応用）\n- 重粒子線治療（がんの病巣をピンポイントで照射し、正常組織を傷つけずにがん細胞を破壊する世界最高峰の放射線治療）\n- 予防医学の最高峰「人間ドック（Ningen Dock）」：総合的な精密健康診断（MRI、CT、胃カメラ、腫瘍マーカー）を定期受診する日本独自の予防健診文化",
            "examples": [
                {
                    "target": "日本で開発されたiPS細胞技術は、難病治療や再生医療の未来を大きく切り拓く世界的イノベーションです。",
                    "reading": "Nihon de kaihatsu sareta ai-pī-esu saibō gijutsu wa...",
                    "translation": "The iPS cell technology developed in Japan is a global innovation opening up the future of intractable disease treatment and regenerative medicine."
                }
            ],
            "mnemonics": [
                "iPS細胞 (Yamanaka Nobel Prize) & 人間ドック (Ningen Dock Comprehensive Health Screening)!"
            ],
            "culturalNotes": [
                "The Japanese term \"人間ドック\" (Ningen Dock) comes from a maritime ship dry dock, metaphorically bringing human bodies into dry dock for total comprehensive maintenance."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "京都大学の山中伸弥教授が開発しノーベル賞を受賞した、再生医療の要となる細胞は何ですか？",
                    "options": [
                        "iPS細胞（人工多能性幹細胞） (85.1)",
                        "赤血球のみ (85.2)",
                        "人工知能チップ (85.3)",
                        "植物細胞 (85.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "iPS細胞 (iPS cells)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "船のドック点検のように体を隅々まで精密検査する日本独特の総合健康診断を何と呼びますか？",
                    "options": [
                        "体力テスト (85.1)",
                        "体重測定 (85.2)",
                        "検温 (85.3)",
                        "人間ドック（にんげんドック） (85.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "人間ドック (Ningen Dock)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "正常細胞へのダメージを最小限に抑えながらがん病巣をピンポイントで破壊する日本の高度放射線治療は何ですか？",
                    "options": [
                        "重粒子線がん治療（粒子線治療）",
                        "外科手術のみ",
                        "温熱パック",
                        "民間療法"
                    ],
                    "answerIndex": 0,
                    "explanation": "重粒子線がん治療."
                },
                {
                    "prompt": "訳してください: \"Preventive health screenings and advanced regenerative medicine are pillars of modern longevity.\"",
                    "options": [
                        "検診は意味がありません。",
                        "病気になってから何もしないのが一番です。",
                        "医療は不要です。",
                        "予防健康診断と高度な再生医療は現代の健康長寿の柱です。"
                    ],
                    "answerIndex": 3,
                    "explanation": "Accurate advanced medicine statement."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u18-l1": {
        "id": "ja-u18-l1",
        "unit": "ja-u18",
        "level": "B1",
        "objective": "日本の賃貸住宅探し（SUUMO、HOME'S）、間取り（1R, 1K, 1LDK, 2LDK）、敷金・礼金と賃貸借契約。",
        "presentation": {
            "explanation": "日本の賃貸住宅と不動産（お部屋探し）：\n- 代表的な不動産ポータルサイト：SUUMO（スーモ）、LIFULL HOME'S（ホームズ）、athome\n- 間取りの記号（まどり）：\n  - R = Room（ワンルーム：キッチンと居室の間に仕切りがない）\n  - K = Kitchen（キッチンが独立している）\n  - DK = Dining Kitchen（ダイニングキッチン）\n  - LDK = Living Dining Kitchen（リビング・ダイニング・キッチン）\n  - 例：1LDK（1居室＋リビングダイニングキッチン）、2LDK（2居室＋LDK）\n- 初期費用と賃貸契約の用語：\n  - 敷金（しききん - 保証金 / 退去時に原状回復費用を差し引いて返還される）\n  - 礼金（れいきん - 大家さんへの謝礼 / 返還されない日本独自の慣習）\n  - 仲介手数料（不動産会社への手数料、通常家賃0.5〜1ヶ月分）\n  - 保証会社（連帯保証人の代わりに家賃保証会社を利用することが一般的）",
            "examples": [
                {
                    "target": "駅徒歩五分の築浅ワンエルディーケー（1LDK）で、敷金一ヶ月・礼金ゼロの物件を探しています。",
                    "reading": "Eki toho go-fun no chiku-asa wan-eru-dī-kē de, shikikin ikka-getsu, reikin zero no bukken o...",
                    "translation": "I am looking for a newly built 1LDK apartment within 5 minutes' walk from the station, with one month's deposit and zero key money."
                }
            ],
            "mnemonics": [
                "敷金 (Shikikin = Refundable Deposit) vs 礼金 (Reikin = Non-refundable Gratitude Money)! 1LDK = 1 Bed + Living/Dining/Kitchen!"
            ],
            "culturalNotes": [
                "Many modern apartments now feature \"Reikin Zero\" (ゼロ礼金) to attract tenants, though traditionally 1-2 months' rent was gifted as non-refundable key money."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "日本の賃貸住宅の初期費用で、退去時に部屋の修繕費を引いて戻ってくる預け金は何ですか？",
                    "options": [
                        "礼金（れいきん） (86.1)",
                        "火災保険料 (86.2)",
                        "仲介手数料 (86.3)",
                        "敷金（しききん） (86.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "敷金 (Shikikin - Deposit)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "日本の間取り表記で「1居室＋リビング・ダイニング・キッチン」を表す記号は何ですか？",
                    "options": [
                        "1R (86.1)",
                        "3K (86.2)",
                        "Studio (86.3)",
                        "1LDK (86.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "1LDK."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "駅からアパートまで歩いてかかる時間を表す不動産用語は何ですか？",
                    "options": [
                        "駅飛行",
                        "駅直結のみ",
                        "駅車道",
                        "駅徒歩○分（えきとほ）"
                    ],
                    "answerIndex": 3,
                    "explanation": "駅徒歩 (Eki toho - walking minutes from station)."
                },
                {
                    "prompt": "日本語に訳してください: \"The tenant signed a two-year lease contract and paid the security deposit and agency fee.\"",
                    "options": [
                        "家賃は支払われていません。",
                        "部屋に家具はありません。",
                        "賃借人は二年間の賃貸借契約を結び、敷金と仲介手数料を支払いました。",
                        "アパートは駅からとても遠いです。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurate real estate translation."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u18-l2": {
        "id": "ja-u18-l2",
        "unit": "ja-u18",
        "level": "B1",
        "objective": "日本の伝統的な和室（畳、襖、障子、床の間）と現代建築の調和（フローリング、対面キッチン、浴室乾燥機）。",
        "presentation": {
            "explanation": "和室（わしつ）の構造と現代の住環境：\n- 和室の伝統的構成要素：\n  - 畳（たたみ - い草で作られた調湿性と断熱性に優れた床材、部屋の広さの単位「6畳/8畳」としても使用）\n  - 襖（ふすま - 部屋と部屋を仕切る厚手の引き戸）\n  - 障子（しょうじ - 格子の木枠に和紙を貼り、柔らかい自然光を通す引き戸）\n  - 押入れ（おしいれ - 布団を収納する上下2段の大容量収納スペース）\n  - 床の間（とこのま - 掛け軸や生け花を飾る客間の上座空間）\n- 現代の設備（せつび）：\n  - 対面キッチン（アイランドキッチン）、フローリング、浴室乾燥機（雨の日でも洗濯物を浴室で乾かせる温風乾燥システム）、追い焚き機能付き風呂（お湯を温め直す自動機能）",
            "examples": [
                {
                    "target": "このマンションはリビングがフローリングで、隣に落ち着いた六畳の和室と押入れがついています。",
                    "reading": "Kono manshon wa ribingu ga furōringu de, tonari ni ochitsuita roku-jō no washitsu to...",
                    "translation": "This apartment features a hardwood flooring living room, accompanied by an adjoining calm 6-tatami Japanese room and closet."
                }
            ],
            "mnemonics": [
                "畳 (Tatami), 襖 (Fusuma), 障子 (Shōji), 押入れ (Oshiire) = The timeless four elements of the Japanese Washitsu!"
            ],
            "culturalNotes": [
                "The size of Japanese residential rooms is universally measured in \"jō\" (畳 - tatami mats), with one standard mat measuring roughly 1.82m × 0.91m (approx 1.65 m²)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "和紙が貼られており、閉め切っても外の柔らかな光を通す日本の伝統的な引き戸は何ですか？",
                    "options": [
                        "障子（しょうじ） (87.1)",
                        "ブラインド (87.2)",
                        "襖（ふすま） (87.3)",
                        "カーテン (87.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "障子 (Shōji)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "日本の住宅で雨の日でも風呂場で衣類をすばやく乾かせる便利な温風乾燥設備は何ですか？",
                    "options": [
                        "浴室暖房乾燥機（よくしつかんそうき） (87.1)",
                        "扇風機のみ (87.2)",
                        "電子レンジ (87.3)",
                        "エアコンの送風のみ (87.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "浴室乾燥機."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "日本の部屋の広さを測る基準となる、い草で作られた伝統的な敷物は何ですか？",
                    "options": [
                        "絨毯",
                        "クッション",
                        "畳（たたみ / ○畳）",
                        "タイル"
                    ],
                    "answerIndex": 2,
                    "explanation": "畳 (Tatami)."
                },
                {
                    "prompt": "訳してください: \"Traditional tatami mat rooms provide natural humidity control and a peaceful aesthetic in modern homes.\"",
                    "options": [
                        "畳は現代の家には設置できません。",
                        "伝統的な畳の部屋は、現代の住宅において自然な湿度調節と落ち着いた美しさをもたらします。",
                        "浴室乾燥機は使えません。",
                        "障子は光を遮断します。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurate Japanese architecture statement."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u18-l3": {
        "id": "ja-u18-l3",
        "unit": "ja-u18",
        "level": "B1",
        "objective": "地域社会のルール：ごみ分別（燃えるごみ、燃えないごみ、資源ごみ、粗大ごみ）、町内会（自治会）、回覧板（かいらんばん）。",
        "presentation": {
            "explanation": "日本の地域社会のルールとごみ出しマナー（ごみ分別と自治会）：\n- ごみの分別カテゴリー（自治体ごとに厳格に規定）：\n  - 燃えるごみ（可燃ごみ - 生ごみ、紙くずなど / 指定収集日の朝8時までに出す）\n  - 燃えないごみ（不燃ごみ - ガラス、陶器、小型金属製品）\n  - 資源ごみ（リサイクル - ペットボトル、ビン、アルミ缶、古紙・段ボール）\n  - 粗大ごみ（そだいごみ - 家具や家電など大型のごみ / 事前に専用シールを購入して予約収集）\n- 指定ごみ袋制度（多くの自治体で有料の指定ごみ袋を使用）\n- 町内会・自治会と「回覧板（かいらんばん）」：地域の連絡網や防災情報を各世帯が順番に手渡しで回覧するコミュニティ制度",
            "examples": [
                {
                    "target": "ペットボトルはキャップとラベルを剥がして中を水洗いし、水曜日の資源ごみの日に出してください。",
                    "reading": "Petto-botoru wa kyappu to raberu o hagashite naka o mizu-arai shi...",
                    "translation": "Please remove caps and labels from PET bottles, rinse the inside with water, and put them out on Wednesday's recyclable garbage day."
                }
            ],
            "mnemonics": [
                "燃えるごみ (Burnable) vs 燃えないごみ (Non-burnable) vs 資源ごみ (Recyclables) vs 粗大ごみ (Oversized bulky waste)!"
            ],
            "culturalNotes": [
                "Putting out garbage on the wrong day or without proper separation can lead to neighborhood complaints; cleanliness and precise sorting are central community values."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "家具や布団など、通常のごみ集積所に出せない大型ごみを日本で何と呼びますか？",
                    "options": [
                        "燃えるごみ (88.1)",
                        "粗大ごみ（そだいごみ） (88.2)",
                        "生ごみ (88.3)",
                        "資源ごみ (88.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "粗大ごみ (Bulky waste)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "地域自治会や町内会の連絡事項がバインダーに挟まれ、ご近所同士で順番に回す仕組みを何と言いますか？",
                    "options": [
                        "回覧板（かいらんばん） (88.1)",
                        "チラシ (88.2)",
                        "速達郵便 (88.3)",
                        "新聞 (88.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "回覧板 (Kairanban)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "ペットボトルをごみに出す際のマナーとして正しい手順はどれですか？",
                    "options": [
                        "燃えないごみの日に出す",
                        "キャップとフィルムラベルを剥がし、中を水で洗ってから出す",
                        "潰さずにそのまま放置する",
                        "中身が入ったまま捨てる"
                    ],
                    "answerIndex": 1,
                    "explanation": "ラベルを剥がして洗って出す."
                },
                {
                    "prompt": "訳してください: \"Proper waste separation and neighborhood community cooperation ensure clean and safe living environments.\"",
                    "options": [
                        "適切なごみ分別と地域のコミュニティ協力が、清潔で安全な生活環境を守ります。",
                        "粗大ごみは手続き不要です。",
                        "リサイクルは禁止されています。",
                        "ごみはいつでも自由に捨てて構いません。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurate community rules translation."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u18-l4": {
        "id": "ja-u18-l4",
        "unit": "ja-u18",
        "level": "B1",
        "objective": "日本の耐震建築工法（免震・制震・耐震構造）、木造軸組工法、宮大工の継手・仕口（釘を使わない伝統木工建築）。",
        "presentation": {
            "explanation": "日本の耐震技術と伝統木工建築（建築と防災技術）：\n- 三大地震対策構造：\n  - 耐震構造（たいしん - 柱や梁を強固にして建物の崩壊を防ぐ基本工法）\n  - 制震構造（せいしん - ダンパー装置で地震の揺れエネルギーを吸収する）\n  - 免震構造（めんしん - 地盤と建物の間に積層ゴムアイソレータを設置し、揺れを建物に直接伝えない最高水準の技術）\n- 伝統木工技術「宮大工（みやだいく）」の技：\n  - 継手（つぎて）・仕口（しぐち）：金属の釘やボルトを一切使わず、木と木を精巧に噛み合わせる「木組み工法」\n  - 法隆寺五重塔（築1300年超の世界最古の木造建築：心柱による柔構造で地震の揺れを逃がす免震の原点）",
            "examples": [
                {
                    "target": "日本の高層マンションには最先端の免震ゴム技術が採用されており、巨大地震の揺れを大幅に軽減します。",
                    "reading": "Nihon no kōsō manshon ni wa saisentan no menshin gomu gijutsu ga...",
                    "translation": "State-of-the-art seismic isolation rubber technology is adopted in Japanese high-rise apartments, drastically mitigating massive earthquake shaking."
                }
            ],
            "mnemonics": [
                "免震 (Menshin = Isolation with rubber pads) vs 制震 (Seishin = Dampers) vs 耐震 (Taishin = Rigid reinforcement)!"
            ],
            "culturalNotes": [
                "Horyu-ji's Five-Story Pagoda in Nara, built over 1,300 years ago without a single metal nail, uses an independent central cedar pillar (心柱 Shinbashira) that counter-oscillates against earthquake tremors."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "建物の基礎と地盤の間にゴムやベアリングを挟み、地震の揺れを直接建物に伝えない最高峰の工法は何ですか？",
                    "options": [
                        "ブロック積み (89.1)",
                        "免震構造（めんしん） (89.2)",
                        "基礎なし工法 (89.3)",
                        "木造プレハブ (89.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "免震構造 (Menshin)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "神社や寺院を建築する宮大工が、釘を使わずに木材を強固に接合する伝統技術は何ですか？",
                    "options": [
                        "木組み工法（継手・仕口） (89.1)",
                        "溶接 (89.2)",
                        "針金工法 (89.3)",
                        "接着剤工法 (89.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "木組み工法 (Kigumi)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "世界最古の木造建築として知られ、地震の揺れを逃がす心柱構造を持つ奈良の五重塔がある寺院はどこですか？",
                    "options": [
                        "法隆寺（ほうりゅうじ）",
                        "東寺",
                        "浅草寺",
                        "金閣寺"
                    ],
                    "answerIndex": 0,
                    "explanation": "法隆寺 (Horyu-ji)."
                },
                {
                    "prompt": "訳してください: \"Ancient timber interlocking joinery and cutting-edge seismic isolation represent the pinnacle of Japanese structural engineering.\"",
                    "options": [
                        "免震装置は効果がありません。",
                        "現代のビルに耐震性はありません。",
                        "木造建築は地震に弱いです。",
                        "古代の木組み継手工法と最先端の免震技術は、日本の構造工学の頂点を象徴しています。"
                    ],
                    "answerIndex": 3,
                    "explanation": "Accurate architectural engineering translation."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u18-l5": {
        "id": "ja-u18-l5",
        "unit": "ja-u18",
        "level": "B1",
        "objective": "日本のスマートホーム設備：温水洗浄便座（ウォシュレット - TOTO）、玄関オートロック、省エネHEMS、防犯カメラ連動インターホン。",
        "presentation": {
            "explanation": "日本のハイテク住宅設備とスマートホーム（最新の住宅テクノロジー）：\n- 温水洗浄便座（TOTO ウォシュレットなど世界に誇る衛生陶器技術）：\n  - 自動開閉フタ、便座ヒーター、おしり洗浄ノズル（水勢・水温調整）、脱臭機能、プレミストによる汚れ防止\n- セキュリティと利便性：\n  - カラーモニター付きインターホン（録画機能付きで訪問者を確認）\n  - エントランスのオートロック＆スマートキー（ICカード、スマートフォン、顔認証での解錠）\n  - 24時間換気システム（シックハウス症候群を防ぎ、常に新鮮な空気を循環）\n- HEMS（Home Energy Management System）：\n  - 太陽光発電、家庭用蓄電池、家電の消費電力をリアルタイムで見える化し自動省エネ制御するスマートハウス技術",
            "examples": [
                {
                    "target": "日本の最新マンションは顔認証オートロックとHEMSによる電力自動最適化システムを備えています。",
                    "reading": "Nihon no saishin manshon wa kao-ninshō ōtorokku to HEMS ni yoru...",
                    "translation": "Japan's latest condominiums are equipped with facial-recognition auto-locks and HEMS automated power optimization systems."
                }
            ],
            "mnemonics": [
                "温水洗浄便座 (Washlet) + モニター付きインターホン + HEMS = The world standard of Japanese residential tech!"
            ],
            "culturalNotes": [
                "TOTO's Washlet toilet, introduced in 1980, is installed in over 80% of Japanese households and admired internationally for its hospitality (おもてなし) hygiene precision."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "日本の住宅に広く普及している、温水洗浄やおしり洗浄、便座ヒーター機能を備えたハイテク便座は何ですか？",
                    "options": [
                        "温水洗浄便座（ウォシュレットなど） (90.1)",
                        "和式便器のみ (90.2)",
                        "手洗い場のみ (90.3)",
                        "木製便座 (90.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "温水洗浄便座 (Washlet)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "家庭内の太陽光発電や電気の使用量をリアルタイムで管理・最適化するスマートエネルギーシステムは何ですか？",
                    "options": [
                        "テレビリモコン (90.1)",
                        "電気スタンド (90.2)",
                        "懐中電灯 (90.3)",
                        "HEMS（ヘムス - ホームエネルギーマネジメントシステム） (90.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "HEMS."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "日本のオートロックマンションで、来訪者の顔を室内から映像で確認して解錠できる設備は何ですか？",
                    "options": [
                        "ドアベルの音のみ",
                        "郵便ポスト",
                        "玄関の鍵穴のみ",
                        "TVモニター付きインターホン"
                    ],
                    "answerIndex": 3,
                    "explanation": "TVモニター付きインターホン."
                },
                {
                    "prompt": "訳してください: \"Smart home energy management and automated security systems provide superior comfort and safety in modern residences.\"",
                    "options": [
                        "省エネシステムは電力を浪費します。",
                        "ハイテク設備は生活を不便にします。",
                        "スマートホームのエネルギー管理と自動セキュリティシステムは、現代の住宅に優れた快適性と安全性をもたらします。",
                        "オートロックは危険です。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurate smart residence statement translation."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u19-l1": {
        "id": "ja-u19-l1",
        "unit": "ja-u19",
        "level": "B1",
        "objective": "日本の就職活動（就活・シューカツ）、エントリーシート（ES）、適性検査（SPI）、面接マナーと内定（ないてい）。",
        "presentation": {
            "explanation": "日本の就職活動（就活 - しゅうかつ）システム：\n- 就活のスケジュールと選考プロセス（新卒一括採用）：\n  - プレエントリー・会社説明会（大学3年生の春〜秋）\n  - エントリーシート（ES - 志望動機、自己PR、ガクチカ「学生時代に力を入れたこと」を記入）\n  - 適性検査（SPI / 玉手箱 - 言語・非言語の能力テストと性格診断）\n  - グループディスカッション（GD）と複数回の面接（一次面接、二次面接、最終役員面接）\n  - 内々定（ないないてい）・内定（ないてい - 正式な採用通知・内定式）\n- 面接マナー：\n  - ドアを3回ノックして「失礼します」と一礼して入室\n  - 着席を促されるまで椅子の横で直立待機\n  - リクルートスーツ（黒無地のスーツ、白ワイシャツ、黒革靴・パンプス）の着用",
            "examples": [
                {
                    "target": "最終面接を通過し、第一志望の総合商社から内定通知（ないてい）をいただきました。",
                    "reading": "Saishū mensetsu o tsūka shi, dai-ichi shibō no sōgō shōsha kara naitei tsūchi o...",
                    "translation": "I passed the final interview and received an official job offer notification from my top-choice general trading company."
                }
            ],
            "mnemonics": [
                "就活 (Shūkatsu) -> ES (Entry Sheet) -> ガクチカ (Gakuchika) -> 面接 (Interview) -> 内定 (Naitei - Job Offer)!"
            ],
            "culturalNotes": [
                "\"Gakuchika\" (ガクチカ) is a famous Japanese acronym for \"Gakusei jidai ni chikara o ireta koto\" (What you devoted yourself to during university), the core question of every job interview."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "日本の就職面接で必ず聞かれる「学生時代に最も力を入れて取り組んだこと」を略して何と言いますか？",
                    "options": [
                        "シューカツ (91.1)",
                        "インターン (91.2)",
                        "オファー (91.3)",
                        "ガクチカ (91.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "ガクチカ (Gakuchika)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "企業から学生へ正式に出される採用内定の通知を何と言いますか？",
                    "options": [
                        "退職届 (91.1)",
                        "履歴書 (91.2)",
                        "請求書 (91.3)",
                        "内定（ないてい） (91.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "内定 (Naitei)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "日本の新卒就職活動で広く使われる言語・非言語能力と適性を測る代表的なWebテストは何ですか？",
                    "options": [
                        "運転免許試験",
                        "TOEICのみ",
                        "SPI（適性検査）",
                        "漢検"
                    ],
                    "answerIndex": 2,
                    "explanation": "SPI (適性検査)."
                },
                {
                    "prompt": "日本語に訳してください: \"The university student submitted an entry sheet and received an official job offer from an IT enterprise.\"",
                    "options": [
                        "学生は面接に遅刻しました。",
                        "大学生はエントリーシートを提出し、IT企業から正式に内定を獲得しました。",
                        "会社は採用を行っていません。",
                        "内定は取り消されました。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurate job hunting translation."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u19-l2": {
        "id": "ja-u19-l2",
        "unit": "ja-u19",
        "level": "B1",
        "objective": "ビジネスマナーと名刺交換（めいしこうかん）：両手で差し出し両手で受け取る作法、席次（上座・下座）、お辞儀の角度。",
        "presentation": {
            "explanation": "日本の厳格なビジネスマナーと名刺交換（めいしこうかん）：\n- 名刺交換の絶対ルール（名刺入れの上に名刺を載せる）：\n  - 必ず立ち上がり、相手の目を見て名刺を両手で差し出す：「株式会社○○の田中と申します。よろしくお願いいたします。」\n  - 相手の名刺は両手で受け取り、「頂戴いたします（ちょうだいいたします）」と述べる\n  - 相手の名前の漢字や会社ロゴを指で隠さない\n  - 商談中は受け取った名刺を名刺入れの上に載せ、テーブルの左上に並べて置く\n- 席次（せきじ - 上座と下座のマナー）：\n  - 上座（かみざ - ドアから最も遠い奥の席 / 役職が最も高い人やクライアントが座る）\n  - 下座（しもざ - ドアに最も近い手前の席 / 新入社員や自社の人間が座る）\n- お辞儀（おじぎ）の3段階：会釈（15度）、敬礼（30度）、最敬礼（45度）",
            "examples": [
                {
                    "target": "名刺は両手で名刺入れの上に載せて丁寧に受け取り、「頂戴いたします」と頭を下げます。",
                    "reading": "Meishi wa ryōte de meishi-ire no ue ni nosete teinei ni uketori, chōdai itashimasu to...",
                    "translation": "Business cards are received politely with both hands placed on top of the card case, bowing while saying \"Chōdai itashimasu\"."
                }
            ],
            "mnemonics": [
                "名刺交換 (Both hands, never cover text) + 上座 (Furthest from door) vs 下座 (Near door) + 最敬礼 (45° Bow)!"
            ],
            "culturalNotes": [
                "In Japanese business, a business card (名刺 Meishi) is treated with absolute reverence as the physical embodiment of the person and company; writing on it or folding it is strictly taboo."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "会議室やタクシーで、最も役職の高い人やお客様が座るドアから一番遠い奥の席を何と言いますか？",
                    "options": [
                        "上座（かみざ） (92.1)",
                        "非常口席 (92.2)",
                        "下座（しもざ） (92.3)",
                        "通路席 (92.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "上座 (Kamiza)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "相手から名刺を受け取る際に発する日本の最も丁寧な敬語表現は何ですか？",
                    "options": [
                        "頂戴いたします（ちょうだいいたします） (92.1)",
                        "もらいます (92.2)",
                        "いただきます (92.3)",
                        "どうも (92.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "頂戴いたします (Chōdai itashimasu)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "名刺交換の正しい作法として絶対に避けるべき行為はどれですか？",
                    "options": [
                        "名刺を両手で受け取ること",
                        "相手の会社名や名前の文字の上に指を置いて隠すこと",
                        "名前を丁寧に確認すること",
                        "名刺入れを準備すること"
                    ],
                    "answerIndex": 1,
                    "explanation": "文字の上に指を置いて隠すこと."
                },
                {
                    "prompt": "訳してください: \"Exchanging business cards with both hands and observing proper seating etiquette demonstrates deep professional respect.\"",
                    "options": [
                        "両手で名刺を交換し適切な席次マナーを守ることは、深いビジネス上の敬意を示します。",
                        "席次は自由に座って構いません。",
                        "お辞儀はビジネスで禁止されています。",
                        "名刺は片手で投げ渡すべきです。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurate business etiquette translation."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u19-l3": {
        "id": "ja-u19-l3",
        "unit": "ja-u19",
        "level": "B1",
        "objective": "ビジネスコミュニケーションの極意：報・連・相（ほうれんそう - 報告・連絡・相談）、お疲れ様です、ビジネスメールの定型句。",
        "presentation": {
            "explanation": "日本の職場コミュニケーションと「報・連・相（ほうれんそう）」：\n- 報・連・相（ホウレンソウ - 仕事を円滑に進める3原則）：\n  - 報告（ほうこく - 頼まれた仕事の進捗や結果、ミスを速やかに上司に伝える）\n  - 連絡（れんらく - スケジュールや決定事項を関係者全員に迅速に共有する）\n  - 相談（そうだん - 迷った時やトラブル発生時に一人で判断せず上司や先輩にアドバイスを求める）\n- 職場の万能挨拶：「お疲れ様です（おつかれさまです）」（同僚や上司とのすれ違い、電話の第一声、メールの冒頭で使う）\n- ビジネスメールの基本構成：\n  - 宛名：「株式会社○○　営業部　部長　山田様」\n  - 挨拶：「いつも大変お世話になっております。株式会社△△の佐藤でございます。」\n  - 結び：「何卒よろしくお願い申し上げます。」",
            "examples": [
                {
                    "target": "トラブルが発生した際は、自己判断せずにすぐに上司へ「報・連・相」を行うことが重要です。",
                    "reading": "Toraburu ga hassei shita sai wa, jiko-handan sezu ni sugu ni jōshi e hō-ren-sō o...",
                    "translation": "When a problem occurs, it is crucial to perform Hō-Ren-Sō to your superior immediately without making arbitrary self-judgments."
                }
            ],
            "mnemonics": [
                "報・連・相 (Hō-Ren-Sō: 報告 Report, 連絡 Communicate, 相談 Consult) = The golden triad of Japanese teamwork!"
            ],
            "culturalNotes": [
                "\"Otsukaresama desu\" (お疲れ様です) is the indispensable grease of Japanese workplace harmony, acknowledging mutual hard work and shared dedication."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "日本のビジネス界で最も重要なコミュニケーション標語「ほうれんそう」が表す3つの言葉は何ですか？",
                    "options": [
                        "本・練習・掃除 (93.1)",
                        "報告（ほうこく）・連絡（れんらく）・相談（そうだん） (93.2)",
                        "放送・連盟・組織 (93.3)",
                        "法律・連帯・捜査 (93.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "報告・連絡・相談 (Hō-Ren-Sō)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "日本のビジネスメールの冒頭で最も一般的に使われる感謝の挨拶文序句は何ですか？",
                    "options": [
                        "いつも大変お世話になっております (93.1)",
                        "ご苦労様でした (93.2)",
                        "元気ですか (93.3)",
                        "久しぶりです (93.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "いつも大変お世話になっております."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "社内で同僚や上司とすれ違う時や仕事終わりの挨拶として最も適切な言葉は何ですか？",
                    "options": [
                        "お疲れ様です（お疲れ様でした）",
                        "さようなら",
                        "バイバイ",
                        "ご苦労様（目上には使わない）"
                    ],
                    "answerIndex": 0,
                    "explanation": "お疲れ様です."
                },
                {
                    "prompt": "訳してください: \"Proactive communication, timely reporting, and structured business emails ensure seamless team collaboration.\"",
                    "options": [
                        "ビジネスメールに挨拶文は不要です。",
                        "報告は不要です。",
                        "一人で抱え込んで仕事を進めるべきです。",
                        "積極的なコミュニケーション、タイムリーな報告、体系的なビジネスメールが円滑なチーム協働を可能にします。"
                    ],
                    "answerIndex": 3,
                    "explanation": "Accurate workplace communication translation."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u19-l4": {
        "id": "ja-u19-l4",
        "unit": "ja-u19",
        "level": "B1",
        "objective": "日本の働き方改革（はたらきかたかいかく）：残業時間の上限規制、有給休暇取得義務（年5日）、テレワークとワーケーション。",
        "presentation": {
            "explanation": "日本の労働環境の変革（働き方改革関連法）：\n- 働き方改革の主要施策：\n  - 時間外労働（残業時間）の上限規制（原則月45時間・年360時間の上限設定）\n  - 年次有給休暇（ゆうきゅうきゅうか）の取得義務化（年10日以上の有給が付与される労働者に対し、年5日以上の確実な取得を企業に義務付け）\n  - 同一労働同一賃金（正社員と非正規雇用労働者の間の不合理な待遇格差を禁止）\n- 新しい働き方の普及：\n  - テレワーク（在宅勤務）、ハイブリッドワーク、フレックスタイム制（コアタイム）\n  - ワーケーション（Work + Vacation：観光地や温泉地のリゾートでリモートワークを行う新しいライフスタイル）",
            "examples": [
                {
                    "target": "働き方改革により残業が大幅に減少し、年次有給休暇の取得やワーケーションの推進が進んでいます。",
                    "reading": "Hatarakikata kaikaku ni yori zangyō ga ōhaba ni genshō shi, nenji yūkyū kyūka no...",
                    "translation": "Through the Work Style Reform, overtime has drastically decreased, while annual paid leave utilization and workations are actively promoted."
                }
            ],
            "mnemonics": [
                "働き方改革 (Work Style Reform) + 残業上限規制 + 有給年5日取得義務 + ワーケーション = Modern Japanese work-life balance!"
            ],
            "culturalNotes": [
                "Japan's \"Work Style Reform\" has transformed corporate culture, encouraging male paternity leave (育休 Ikukyu) and dismantling traditional late-night overtime habits."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "日本の労働基準法で企業に対して年5日以上の確実な取得が義務付けられている休暇は何ですか？",
                    "options": [
                        "正月休みのみ (94.1)",
                        "年次有給休暇（有休） (94.2)",
                        "無給休暇 (94.3)",
                        "冠婚葬祭休暇のみ (94.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "年次有給休暇（有休）."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "リゾート地や観光地で休暇を楽しみながらリモートワークを行う新しい働き方を何と呼びますか？",
                    "options": [
                        "単身赴任 (94.1)",
                        "ワーケーション（Workation） (94.2)",
                        "残業 (94.3)",
                        "出張のみ (94.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "ワーケーション."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "正社員とパート・契約社員の間で不合理な待遇差を設けることを禁止する法律上の原則は何ですか？",
                    "options": [
                        "年功序列のみ",
                        "終身雇用のみ",
                        "歩合給制度",
                        "同一労働同一賃金"
                    ],
                    "answerIndex": 3,
                    "explanation": "同一労働同一賃金."
                },
                {
                    "prompt": "訳してください: \"Strict limits on overtime hours and flexible remote working policies enhance employee wellbeing and operational productivity.\"",
                    "options": [
                        "残業は無制限に行うべきです。",
                        "テレワークは全面的に禁止されています。",
                        "残業時間の上限規制と柔軟なリモートワーク方針は、従業員の幸福度と業務生産性を高めます。",
                        "有給休暇を取得してはいけません。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurate labor policy translation."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u19-l5": {
        "id": "ja-u19-l5",
        "unit": "ja-u19",
        "level": "B1",
        "objective": "世界を牽引する日本企業と「ものづくり」の精神：トヨタ生産方式（カイゼン / カンバン方式）、ソニー、任天堂と高品質クラフトマンシップ。",
        "presentation": {
            "explanation": "世界に誇る日本の製造業と「ものづくり（Monozukuri）」の哲学：\n- トヨタ生産方式（TPS - Toyota Production System）：\n  - カイゼン（改善 - Kaizen）：現場の作業員自らが日々無駄を省き、絶え間ない品質向上を続ける世界的経営哲学\n  - ジャスト・イン・タイム（JIT）：必要なものを、必要な時に、必要な量だけ生産・供給する徹底した在庫削減システム（カンバン方式）\n- 日本を代表するグローバル企業：\n  - トヨタ自動車（世界一の自動車メーカー、ハイブリッド車プリウス・水素エンジン技術）\n  - ソニー（ウォークマン、PlayStation、CMOSイメージセンサーで世界シェアトップ）\n  - 任天堂（ファミコン、Nintendo Switch、マリオやゼルダなどの世界的エンターテインメントIP）\n- 中小企業の町工場（大田区や東大阪の超精密加工技術が生み出す宇宙ロケット部品や医療器具）",
            "examples": [
                {
                    "target": "トヨタのカイゼン精神と徹底した品質管理は、世界の製造業における普遍的なスタンダードとなっています。",
                    "reading": "Toyota no kaizen seishin to tettei shita hinshitsu kanri wa...",
                    "translation": "Toyota's Kaizen spirit and thorough quality management have become universal standards in global manufacturing."
                }
            ],
            "mnemonics": [
                "ものづくり (Monozukuri) + カイゼン (Kaizen continuous improvement) + カンバン方式 (Just-in-Time) = Japanese industrial supremacy!"
            ],
            "culturalNotes": [
                "The Japanese word \"Kaizen\" (改善 - continuous improvement) and \"Monozukuri\" (ものづくり - craftsmanship spirit) have been adopted verbatim into business lexicons worldwide."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "トヨタ自動車が確立し、世界中の工場で採用されている「継続的な改善」を意味する日本語の経営用語は何ですか？",
                    "options": [
                        "カイゼン（改善 / Kaizen） (95.1)",
                        "カンタン (95.2)",
                        "ストップ (95.3)",
                        "ダイナミック (95.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "カイゼン (Kaizen)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "必要な部品を必要な時に必要な分だけ供給して無駄な在庫をなくすトヨタの生産管理方式は何ですか？",
                    "options": [
                        "大量在庫方式 (95.1)",
                        "見込み生産のみ (95.2)",
                        "手作業のみ (95.3)",
                        "ジャスト・イン・タイム（カンバン方式） (95.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "ジャスト・イン・タイム (JIT)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "卓越した技術力と誠実な誇りを持って製品を作り上げる日本の職人精神を何と呼びますか？",
                    "options": [
                        "機械任せ",
                        "安売り精神",
                        "ものづくり精神（匠の技）",
                        "適当主義"
                    ],
                    "answerIndex": 2,
                    "explanation": "ものづくり精神."
                },
                {
                    "prompt": "訳してください: \"Continuous Kaizen improvements, precision engineering, and dedicated craftsmanship define the global prestige of Japanese industry.\"",
                    "options": [
                        "日本の製造業は品質を重視しません。",
                        "継続的なカイゼン改善、精密工学、献身的な職人精神が日本産業の世界的な名声を確立しています。",
                        "精密加工技術は存在しません。",
                        "カイゼンは失敗した経営手法です。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurate industrial philosophy translation."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u20-l1": {
        "id": "ja-u20-l1",
        "unit": "ja-u20",
        "level": "C1",
        "objective": "Japanese ecological worldview: Satoyama landscape harmony, UNESCO natural heritage, and forest bathing (里山・里海、屋久島・白神山地、森林浴、自然共生社会).",
        "presentation": {
            "explanation": "Japanese ecological philosophy and UNESCO World Natural Heritage:\n- **里山 (Satoyama) & 里海 (Satoumi)**:\n  - The traditional landscape mosaic of managed woodlands, paddy fields, irrigation ponds, and grasslands where human stewardship sustains higher biodiversity than untouched wilderness.\n  - The global **Satoyama Initiative** adopted at the UN Convention on Biological Diversity (COP10 in Nagoya).\n- UNESCO World Natural Heritage Sites:\n  - **屋久島 (Yakushima, Kagoshima)**: Primeval temperate rainforest with ancient Yaku-sugi cedars (including Jōmon Sugi, estimated at 2,000–7,000 years old).\n  - **白神山地 (Shirakami Sanchi, Aomori/Akita)**: The largest pristine virgin Siebold's beech forest in East Asia, home to black woodpeckers and golden eagles.\n  - **知床 (Shiretoko, Hokkaido)**: Maritime and terrestrial ecosystem linked by drift ice (流氷) and salmon runs.\n- **森林浴 (Shinrin-yoku - Forest Bathing)**:\n  - The scientifically validated practice of immersing oneself in the forest atmosphere, inhaling tree phytoncides (フィトンチッド) to reduce cortisol and enhance natural killer (NK) immune cell activity.",
            "examples": [
                {
                    "target": "屋久島の原生林に聳える縄文杉や白神山地の広大なブナ原生林は、人間と太古の自然が共生してきた日本の精神文化を象徴しています。",
                    "reading": "Yakushima no genseirin ni sobieru Jōmon-sugi ya Shirakami-sanchi no kōdai na buna genseirin wa...",
                    "translation": "The Jōmon Cedar soaring in Yakushima's primeval forest and the vast virgin beech forest of Shirakami Sanchi symbolize Japan's spiritual culture of human coexistence with ancient nature."
                }
            ],
            "mnemonics": [
                "里山 (Satoyama - Human-nature harmonious stewardship)! 屋久島 (Yakushima Jōmon-sugi)! 森林浴 (Shinrin-yoku forest healing)!"
            ],
            "culturalNotes": [
                "The concept of Satoyama demonstrates that human presence, when guided by regenerative care, can actively enrich biodiversity rather than deplete it."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "What traditional Japanese socio-ecological landscape model balances human agriculture, managed woodlands, and biodiversity conservation?",
                    "options": [
                        "高層ビル群 (96.1)",
                        "埋立地 (96.2)",
                        "コンクリート護岸 (96.3)",
                        "里山 (Satoyama) (96.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "里山 (Satoyama)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Which UNESCO World Natural Heritage island in Kagoshima is renowned for ancient Yaku-sugi cedar trees including the Jōmon Sugi?",
                    "options": [
                        "淡路島 (96.1)",
                        "佐渡島 (96.2)",
                        "沖縄本島 (96.3)",
                        "屋久島 (Yakushima) (96.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "屋久島 (Yakushima)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Forest bathing (Shinrin-yoku) is a scientifically recognized wellness practice where inhaling tree phytoncides lowers stress and boosts immune health.\"",
                    "options": [
                        "森林浴は木を伐採することです。",
                        "森林浴（しんりんよく）は樹木のフィトンチッドを吸い込むことでストレスを軽減し免疫力を高める科学的に実証された健康法です。",
                        "日本には森林が全くありません。",
                        "樹木は人体に有害です。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurate Shinrin-yoku translation."
                },
                {
                    "prompt": "What pristine forest in northern Japan preserves the largest virgin Siebold's beech forest in East Asia?",
                    "options": [
                        "白神山地 (Shirakami Sanchi)",
                        "富士の樹海",
                        "明治神宮の森",
                        "高尾山"
                    ],
                    "answerIndex": 0,
                    "explanation": "白神山地 (Shirakami Sanchi)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u20-l2": {
        "id": "ja-u20-l2",
        "unit": "ja-u20",
        "level": "C1",
        "objective": "Four seasons, micro-seasons (72 Kō), and seasonal consciousness in Japanese culture (二十四節気と七十二候、立春・冬至、季語、花鳥風月).",
        "presentation": {
            "explanation": "Seasonal sensitivity and micro-chronometry in Japanese culture:\n- The Traditional Solar Calendar Division:\n  - **二十四節気 (Nijūshi Sekki - 24 Solar Terms)**: Dividing the solar year into 24 distinct seasonal nodes (e.g. 立春 Risshun - Start of Spring, 夏至 Geshi - Summer Solstice, 秋分 Shūbun - Autumnal Equinox, 冬至 Tōji - Winter Solstice).\n  - **七十二候 (Shichijūni Kō - 72 Micro-Seasons)**: Further dividing each solar term into 5-day poetic intervals describing precise natural phenomena (e.g., *東風解凍 Harukaze kōri wo toku* = \"East wind melts the ice\", *蛙始鳴 Kawazu hajimete naku* = \"Frogs begin to sing\", *紅葉蔦黄 Momiji tsuta kibamu* = \"Maple and ivy turn yellow\").\n- Aesthetic Philosophy:\n  - **花鳥風月 (Kachō Fūgetsu)**: \"Flower, Bird, Wind, Moon\" - Loving the beauties of nature and experiencing spiritual tranquility through artistic harmony.\n  - **季語 (Kigo)**: Mandatory seasonal words in Haiku poetry rooting human emotion in cyclical nature.",
            "examples": [
                {
                    "target": "日本古来の七十二候は、わずか五日ごとの自然の移ろい—氷の解けやツバメの渡り—を繊細に捉える比類なき季節意識の結晶です。",
                    "reading": "Nihon korai no shichijūni-kō wa, wazuka itsuka goto no shizen no utsuroi...",
                    "translation": "Japan's ancient 72 micro-seasons are the culmination of an incomparable seasonal consciousness, capturing delicate shifts in nature every five days—from ice melting to swallows migrating."
                }
            ],
            "mnemonics": [
                "二十四節気 (24 Solar Terms)! 七十二候 (72 5-day Micro-Seasons)! 花鳥風月 (Kachō Fūgetsu - Nature aesthetic)!"
            ],
            "culturalNotes": [
                "Greeting letters and business emails in Japan traditionally open with a seasonal greeting (季節の挨拶 / 時候の挨拶) reflecting the current solar term."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How many poetic micro-seasons (候 - Kō) did traditional Japanese calendars divide the solar year into to track subtle changes in nature every 5 days?",
                    "options": [
                        "七十二候 (72 Micro-seasons) (97.1)",
                        "三百六十五候 (97.2)",
                        "四季節のみ (97.3)",
                        "十二候 (97.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "七十二候 (72)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What four-character idiom (Yojijukugo) expresses finding spiritual beauty and artistic inspiration in natural landscapes (flowers, birds, wind, and moon)?",
                    "options": [
                        "花鳥風月 (Kachō Fūgetsu) (97.1)",
                        "弱肉強食 (97.2)",
                        "四面楚歌 (97.3)",
                        "以心伝心 (97.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "花鳥風月 (Kachō Fūgetsu)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"In Japanese Haiku poetry, a seasonal word (Kigo) is essential to anchor human emotional reflections in the natural world.\"",
                    "options": [
                        "日本の俳句において、人間の心情を自然界の営みと結びつけるために「季語（きご）」の存在は不可欠です。",
                        "季語は数字の名前です。",
                        "日本文化には季節感がありません。",
                        "俳句に季節の言葉は使えません。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurate Kigo and Haiku translation."
                },
                {
                    "prompt": "What is the first solar term of the Japanese calendar marking the conceptual onset of spring around February 4th?",
                    "options": [
                        "大寒 (Daikan)",
                        "夏至 (Geshi)",
                        "秋分 (Shūbun)",
                        "立春 (Risshun)"
                    ],
                    "answerIndex": 3,
                    "explanation": "立春 (Risshun)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u20-l3": {
        "id": "ja-u20-l3",
        "unit": "ja-u20",
        "level": "C1",
        "objective": "Volcanology, geothermal energy, natural disaster preparedness, and Onsen heritage (火山大国、地熱発電、ハザードマップ、防災意識、温泉文化).",
        "presentation": {
            "explanation": "Geological dynamism, disaster resilience, and geothermal energy in Japan:\n- Volcanic Geography:\n  - Japan sits on the Pacific \"Ring of Fire\" (環太平洋造山帯) at the junction of 4 tectonic plates, hosting 111 active volcanoes (活火山).\n  - **富士山 (Mount Fuji)**: Stratovolcano (3,776m - UNESCO Cultural Heritage), sacred mountain (*Sangaku Shinkō*), and source of volcanic groundwater springs (Kakita River).\n- Disaster Preparedness Culture (防災 - Bōsai):\n  - Earthquake early warning systems (**緊急地震速報 - EEW**) delivered instantly via 5G cell broadcasts.\n  - Municipal **Hazard Maps (ハザードマップ)**, disaster evacuation drills on Disaster Prevention Day (September 1 - commemorating the 1923 Great Kantō Earthquake), and earthquake-resistant architecture (耐震・制震・免震).\n- Geothermal Energy & Onsen:\n  - Over 27,000 natural hot spring sources (**温泉 - Onsen**).\n  - Expanding baseload **地熱発電 (Geothermal power generation)** in Tohoku and Kyushu while preserving historic hot spring town heritage.",
            "examples": [
                {
                    "target": "日本は高度な耐震工学と緊急地震速報システムを融合させ、火山や地震の多い過酷な自然環境と共生する世界最高峰の防災体制を築いています。",
                    "reading": "Nihon wa kōdo na taishin kōgaku to kinkyū jishin sokuhō shisutemu wo yūgō sase...",
                    "translation": "Japan has built the world's premier disaster preparedness system by combining advanced earthquake-resistant engineering with real-time early warning networks to coexist with its harsh volcanic and seismic environment."
                }
            ],
            "mnemonics": [
                "防災 (Bōsai - Preparedness culture)! 緊急地震速報 (Instant EEW alert)! 地熱発電 (Geothermal baseload power)!"
            ],
            "culturalNotes": [
                "On September 1 every year (Disaster Prevention Day), millions of students, emergency services, and citizens across Japan conduct nationwide coordinated disaster drills."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "What nationwide early warning alert system sends immediate earthquake notifications to all Japanese smartphones seconds before major seismic waves hit?",
                    "options": [
                        "天気予報 (98.1)",
                        "緊急地震速報 (EEW - Kinkyū Jishin Sokuhō) (98.2)",
                        "迷惑メール (98.3)",
                        "時刻表 (98.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "緊急地震速報."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What renewable energy source leverages Japan's vast volcanic hot water reservoirs for baseload electricity generation?",
                    "options": [
                        "地熱発電 (Geothermal power) (98.1)",
                        "原子力 (98.2)",
                        "石炭火力 (98.3)",
                        "ディーゼル発電 (98.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "地熱発電."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Municipal hazard maps and regular disaster drills empower citizens to identify evacuation routes and safe shelters before flooding or earthquakes occur.\"",
                    "options": [
                        "避難所は存在しません。",
                        "地震の訓練は行われません。",
                        "ハザードマップは観光用パンフレットです。",
                        "自治体のハザードマップと定期的な避難訓練により、住民は水害や地震が発生する前に避難経路と安全な避難所を把握することができます。"
                    ],
                    "answerIndex": 3,
                    "explanation": "Accurate disaster preparedness translation."
                },
                {
                    "prompt": "Which sacred active stratovolcano is Japan's highest peak at 3,776 meters and inscribed on the UNESCO World Heritage List?",
                    "options": [
                        "御嶽山",
                        "桜島",
                        "富士山 (Mount Fuji)",
                        "阿蘇山"
                    ],
                    "answerIndex": 2,
                    "explanation": "富士山 (Mount Fuji)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u20-l4": {
        "id": "ja-u20-l4",
        "unit": "ja-u20",
        "level": "C2",
        "objective": "Waste reduction philosophy: Mottainai, circular economy, 3R and zero-waste communities (もったいない精神、循環型社会、3R、徳島県上勝町のゼロ・ウェイスト運動).",
        "presentation": {
            "explanation": "The philosophy of *Mottainai* and Japan's cutting-edge circular economy:\n- **もったいない (Mottainai)**:\n  - An ancient Buddhist-derived concept expressing deep regret over wasting resources, reverence for the intrinsic value of objects, and gratitude toward all living things and materials.\n  - Popularized globally by Kenyan Nobel Peace Prize Laureate Wangari Maathai as the universal slogan for environmental conservation and the 4Rs (Reduce, Reuse, Recycle, Respect).\n- Zero-Waste Innovations:\n  - **Kamikatsu Zero Waste Town (徳島県上勝町)**: Japan's premier zero-waste municipality, sorting household refuse into **45 distinct categories** to achieve an 80%+ recycling rate without garbage incinerators.\n  - Advanced circular PET bottle recycling (**Bottle-to-Bottle** technology achieving 90%+ recycling rate in Japan).\n- Urban Mining (都市鉱山 - Toshi Kōzan):\n  - Recovering gold, silver, and rare metals from discarded electronics to produce national medals (e.g. 100% recycled medals at Tokyo Olympics).",
            "examples": [
                {
                    "target": "「もったいない」の精神は、物を大切にし資源を循環させる日本の伝統的価値観であり、上勝町のゼロ・ウェイスト運動を通じて世界的な環境モデルへと発展しました。",
                    "reading": "Mottainai no seishin wa, mono wo taisetsu ni shi...",
                    "translation": "The spirit of \"Mottainai\" is a traditional Japanese value of cherishing objects and cycling resources, which has evolved into a global environmental model through Kamikatsu's zero-waste movement."
                }
            ],
            "mnemonics": [
                "もったいない (Mottainai - Reverence for resources)! 上勝町 (Kamikatsu 45-category zero waste)! 都市鉱山 (Urban mining)!"
            ],
            "culturalNotes": [
                "Nobel laureate Wangari Maathai was so inspired by \"Mottainai\" during her visit to Kyoto that she launched the international Mottainai Campaign across the United Nations."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which Japanese town became globally famous for its zero-waste policy, sorting trash into 45 separate categories with an 80%+ recycling rate?",
                    "options": [
                        "大阪市北区 (99.1)",
                        "徳島県上勝町 (Kamikatsu Town) (99.2)",
                        "横浜市西区 (99.3)",
                        "東京都新宿区 (99.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "徳島県上勝町 (Kamikatsu Town)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What untranslatable Japanese philosophical concept expresses deep sorrow over wasted resources and reverence for the life of objects?",
                    "options": [
                        "ごちそうさま (99.1)",
                        "もったいない (Mottainai) (99.2)",
                        "お疲れ様 (99.3)",
                        "いただきます (99.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "もったいない (Mottainai)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Urban mining allows the recovery of precious metals from discarded smartphones and electronics to build sustainable circular supply chains.\"",
                    "options": [
                        "日本のリサイクル率はゼロです。",
                        "都市鉱山は地下深くのトンネルです。",
                        "都市鉱山（としこうざん）の技術により、廃棄されたスマートフォンや電子機器から貴金属を回収し、持続可能な循環型サプライチェーンを構築できます。",
                        "電子機器はリサイクルできません。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurate circular economy translation."
                },
                {
                    "prompt": "Who popularized the Japanese concept of \"Mottainai\" globally at the United Nations?",
                    "options": [
                        "Nelson Mandela",
                        "Wangari Maathai (Nobel Peace Laureate)",
                        "Albert Einstein",
                        "Marie Curie"
                    ],
                    "answerIndex": 1,
                    "explanation": "Wangari Maathai."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u20-l5": {
        "id": "ja-u20-l5",
        "unit": "ja-u20",
        "level": "C2",
        "objective": "C2 synthesis on Japan's 2050 Carbon Neutral roadmap, offshore wind, hydrogen society, and biodiversity frameworks (2050年カーボンニュートラル、洋上風力発電、水素社会実現、GXグリーン・トランスフォーメーション).",
        "presentation": {
            "explanation": "Japan's Green Transformation (GX) and 2050 Net-Zero Strategy:\n- **GX (Green Transformation) Strategy**:\n  - Statutory investment of 150 trillion yen over 10 years through GX Economic Transition Bonds.\n  - Transitioning industrial giants (steel, chemicals, automotive) to carbon-neutral production.\n- Hydrogen & Ammonia Energy Carriers:\n  - **水素社会 (Hydrogen Society)**: Developing world-first liquefied hydrogen carriers (Suiso Frontier), commercial hydrogen fuel-cell heavy transport, and green hydrogen supply chains from Fukushima Hydrogen Energy Research Field (FH2R).\n  - Co-firing ammonia in thermal power generation to slash carbon emissions during baseload transition.\n- Floating Offshore Wind (浮体式洋上風力発電):\n  - Harnessing deep offshore Pacific coastal winds around Japan's expansive Exclusive Economic Zone (EEZ - 6th largest in the world).",
            "examples": [
                {
                    "target": "日本は広大な排他的経済水域を活用した浮体式洋上風力発電と次世代水素エネルギー技術の開発を加速し、二〇五〇年カーボンニュートラルの達成を目指しています。",
                    "reading": "Nihon wa kōdai na haitateki keizai suiiki wo katsuyō shita futeishiki yōjō fūryoku hatsuden to...",
                    "translation": "Japan is accelerating the development of floating offshore wind power utilizing its vast Exclusive Economic Zone and next-generation hydrogen energy technologies, aiming to achieve carbon neutrality by 2050."
                }
            ],
            "mnemonics": [
                "GX (Green Transformation - 150T Yen)! 水素社会 (Hydrogen society & FH2R)! 浮体式洋上風力 (Floating offshore wind in EEZ)!"
            ],
            "culturalNotes": [
                "Japan possesses the 6th largest Exclusive Economic Zone (EEZ) in the world, making floating offshore wind technology a vital strategic frontier for its energy independence."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "By which target year has Japan legally committed to achieving complete net-zero greenhouse gas emissions (Carbon Neutral)?",
                    "options": [
                        "2050年 (Year 2050) (100.1)",
                        "2025年 (100.2)",
                        "2030年 (100.3)",
                        "2100年 (100.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "2050年."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What next-generation clean fuel carrier is Japan pioneering for heavy transport and decarbonized industrial power generation?",
                    "options": [
                        "石炭 (100.1)",
                        "薪 (100.2)",
                        "重油 (100.3)",
                        "水素エネルギー (Hydrogen energy) (100.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "水素エネルギー (Hydrogen)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Floating offshore wind turbines deployed in deep coastal waters represent a vital renewable frontier for island nations with expansive ocean territories.\"",
                    "options": [
                        "洋上風力発電は陸地でのみ稼働します。",
                        "水深の深い沿岸海域に設置される浮体式洋上風力発電は、広大な領海を持つ島国にとって極めて重要な再生可能エネルギーのフロンティアです。",
                        "島国に風力エネルギーは不向きです。",
                        "海には風が吹きません。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurate floating wind translation."
                },
                {
                    "prompt": "What comprehensive national economic initiative is driving 150 trillion yen into Japan's clean energy transition?",
                    "options": [
                        "GX (グリーン・トランスフォーメーション - Green Transformation)",
                        "アベノミクスのみ",
                        "高度経済成長",
                        "ITバブル"
                    ],
                    "answerIndex": 0,
                    "explanation": "GX (Green Transformation)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u21-l1": {
        "id": "ja-u21-l1",
        "unit": "ja-u21",
        "level": "C1",
        "objective": "Japan's Universal Health Insurance system, longevity culture, and preventative medicine (国民皆保険制度、高額療養費制度、健康寿命、特定健診・メタボ健診).",
        "presentation": {
            "explanation": "Universal healthcare architecture and world-leading longevity in Japan:\n- **国民皆保険制度 (Kokumin Kai-Hoken - Universal Health Insurance)**:\n  - Established in 1961, guaranteeing every resident affordable access to medical care with universal free choice of clinics and standardized co-pays (10–30%).\n  - **高額療養費制度 (High-Cost Medical Expense Benefit)**: Statutory monthly ceiling capping out-of-pocket medical bills to protect citizens from catastrophic healthcare debt.\n- Preventative Medicine Culture (予防医学):\n  - Mandatory annual health checkups (**特定健康診査 / メタボ健診**) screening for lifestyle diseases and metabolic syndrome.\n  - World's highest healthy life expectancy (**健康寿命 - Kenkō Jumyō**) supported by balanced washoku nutrition, daily walking, and universal primary screening.",
            "examples": [
                {
                    "target": "日本の国民皆保険制度と高額療養費制度は、すべての国民に高度な医療への平等なアクセスを保障し、世界最高水準の長寿社会を支えています。",
                    "reading": "Nihon no kokumin kai-hoken seido to kōgaku ryōyōhi seido wa...",
                    "translation": "Japan's Universal Health Insurance and High-Cost Medical Expense Benefit guarantee all citizens equal access to advanced medical care, sustaining the world's premier longevity society."
                }
            ],
            "mnemonics": [
                "国民皆保険 (Universal health coverage since 1961)! 高額療養費制度 (Monthly medical expense cap)! 健康寿命 (Healthy lifespan)!"
            ],
            "culturalNotes": [
                "Japan has over 90,000 centenarians (people aged 100+), the highest proportion in the world, celebrated annually on Respect for the Aged Day (敬老の日)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "In which year did Japan establish its universal health insurance system (国民皆保険制度) covering 100% of citizens?",
                    "options": [
                        "1945年 (101.1)",
                        "2000年 (101.2)",
                        "1989年 (101.3)",
                        "1961年 (Shōwa 36) (101.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "1961年."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What statutory Japanese social safety net caps maximum out-of-pocket medical expenses per month for expensive hospital surgeries?",
                    "options": [
                        "消費税 (101.1)",
                        "自動車保険 (101.2)",
                        "高額療養費制度 (High-Cost Medical Expense Benefit) (101.3)",
                        "住宅ローン (101.4)"
                    ],
                    "answerIndex": 2,
                    "explanation": "高額療養費制度."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Mandatory annual metabolic health checkups enable early detection of cardiovascular risks and promote long-term healthy lifespan.\"",
                    "options": [
                        "毎年の特定健康診査（メタボ健診）は心血管疾患のリスクを早期発見し、長期的な健康寿命の延伸を促進します。",
                        "日本には健康保険がありません。",
                        "定期健診は法律で禁止されています。",
                        "高額療養費制度は存在しません。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurate preventative healthcare translation."
                },
                {
                    "prompt": "What is the Japanese term for \"healthy life expectancy\" (the period lived in good health without daily care assistance)?",
                    "options": [
                        "定年年齢",
                        "平均余命のみ",
                        "労働時間",
                        "健康寿命 (Kenkō Jumyō)"
                    ],
                    "answerIndex": 3,
                    "explanation": "健康寿命 (Kenkō Jumyō)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u21-l2": {
        "id": "ja-u21-l2",
        "unit": "ja-u21",
        "level": "C1",
        "objective": "Regenerative medicine breakthroughs: iPS cells, Nobel Laureate Shinya Yamanaka, and clinical cell therapy (iPS細胞、山中伸弥教授、ノーベル生理学・医学賞、再生医療安全性確保法、網膜色素変性症治療).",
        "presentation": {
            "explanation": "Stem cell revolution and regenerative medicine pioneering in Japan:\n- **iPS細胞 (induced Pluripotent Stem Cells)**:\n  - Discovered in 2006 by Professor **Shinya Yamanaka (山中伸弥)** at Kyoto University (Awarded the 2012 Nobel Prize in Physiology or Medicine).\n  - Generated by introducing four specific transcription factors (**Yamanaka Factors**: Oct3/4, Sox2, Klf4, c-Myc) into adult somatic cells (such as skin or blood), reverting them into pluripotency capable of becoming any cell type in the human body without using embryonic tissue.\n- Clinical World-Firsts in Japan:\n  - World-first clinical transplant of iPS-derived retinal pigment epithelial cells (Dr. Masayo Takahashi at RIKEN for age-related macular degeneration).\n  - Clinical trials for iPS-derived dopaminergic neurons for Parkinson's disease and cardiac muscle sheets for severe heart failure.\n- Regulatory Vanguard: The **Act on the Safety of Regenerative Medicine (再生医療安全性確保法)**.",
            "examples": [
                {
                    "target": "山中伸弥教授によるiPS細胞の発見は、受精卵を用いずにあらゆる組織を再生する道を拓き、世界の再生医療と創薬研究に革命をもたらしました。",
                    "reading": "Yamanaka Shinya kyōju ni yoru iPS saibō no hakken wa...",
                    "translation": "Professor Shinya Yamanaka's discovery of iPS cells opened the path to regenerating all human tissues without using embryos, revolutionizing global regenerative medicine and drug discovery."
                }
            ],
            "mnemonics": [
                "iPS細胞 (Yamanaka 4 factors & 2012 Nobel Prize)! 京都大学CiRA! 再生医療安全性確保法 (Fast-track regenerative safety law)!"
            ],
            "culturalNotes": [
                "Kyoto University's Center for iPS Cell Research and Application (CiRA) operates a public iPS cell stock project providing clinical-grade cell lines for medical teams worldwide."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which Japanese scientist was awarded the 2012 Nobel Prize in Physiology or Medicine for discovering induced Pluripotent Stem (iPS) cells?",
                    "options": [
                        "山中伸弥教授 (Prof. Shinya Yamanaka) (102.1)",
                        "大隅良典教授 (102.2)",
                        "本庶佑教授 (102.3)",
                        "湯川秀樹教授 (102.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "山中伸弥教授."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Why are iPS cells considered an ethical and scientific breakthrough compared to traditional embryonic stem (ES) cells?",
                    "options": [
                        "They are reprogrammed from adult somatic cells without destroying human embryos (102.1)",
                        "They only grow in computers (102.2)",
                        "They cannot differentiate into organs (102.3)",
                        "They are synthetic plastic cells (102.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "Reprogrammed from adult somatic cells without destroying embryos."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Clinical trials utilizing iPS-derived dopaminergic neurons aim to restore motor function in patients suffering from advanced Parkinson's disease.\"",
                    "options": [
                        "iPS細胞は医療応用できません。",
                        "パーキンソン病の臨床試験は行われていません。",
                        "山中教授は物理学賞を受賞しました。",
                        "iPS細胞由来のドパミン神経前駆細胞を用いた臨床試験は、進行期パーキンソン病患者の運動機能回復を目指しています。"
                    ],
                    "answerIndex": 3,
                    "explanation": "Accurate regenerative medicine translation."
                },
                {
                    "prompt": "What research center at Kyoto University serves as the global hub for stem cell biology and clinical iPS technology?",
                    "options": [
                        "RIKENのみ",
                        "JAXA",
                        "CiRA (iPS細胞研究所)",
                        "JAMSTEC"
                    ],
                    "answerIndex": 2,
                    "explanation": "CiRA (iPS細胞研究所)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u21-l3": {
        "id": "ja-u21-l3",
        "unit": "ja-u21",
        "level": "C1",
        "objective": "Super-aging society (Chō-kōreika Shakai), Kaigo nursing care insurance, and robotics in elderly care (超高齢社会、介護保険制度、地域包括ケアシステム、介護ロボット、フレイル予防).",
        "presentation": {
            "explanation": "Social engineering and robotics for the world's premier super-aging society:\n- **超高齢社会 (Chō-kōreika Shakai - Super-Aging Society)**:\n  - Over 29% of Japan's population is aged 65 or older, leading the world in senior demographic transition.\n- **介護保険制度 (Long-Term Care Insurance System - Kaigo Hoken)**:\n  - Established in 2000, funded half by social insurance premiums and half by taxes, providing institutional nursing home care, day service, home nursing visits, and respite care based on 7 certified care-need levels (*要介護度*).\n- **地域包括ケアシステム (Community Integrated Care System)**:\n  - Enabling elderly citizens to live independently in familiar neighborhoods until the end of life through integrated housing, medical care, prevention, and social assistance.\n- Nursing Robotics (**介護ロボット**):\n  - Exoskeleton power suits assisting caregivers in lifting patients (Cyberdyne HAL), robotic seal pets for cognitive dementia comfort (Paro), and smart sensor monitoring beds.",
            "examples": [
                {
                    "target": "超高齢社会を迎えた日本は、公的介護保険制度と地域包括ケアシステムを構築し、最先端の介護ロボットを導入して持続可能な高齢者福祉を実現しています。",
                    "reading": "Chō-kōreika shakai wo mukaeta Nihon wa, kōteki kaigo hoken seido to...",
                    "translation": "Facing a super-aging society, Japan has built a public Long-Term Care Insurance and community integrated care system, deploying cutting-edge caregiving robots to achieve sustainable elder welfare."
                }
            ],
            "mnemonics": [
                "介護保険制度 (Kaigo Hoken since 2000)! 地域包括ケア (Community integrated living)! 介護ロボット (HAL exoskeleton & Paro)!"
            ],
            "culturalNotes": [
                "The therapeutic robotic seal \"Paro\" (パロ), developed by Japan's AIST, is certified by the US FDA as a medical biofeedback device to soothe dementia patients."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "What public social insurance system was launched in Japan in 2000 to provide comprehensive nursing and elder care assistance?",
                    "options": [
                        "介護保険制度 (Long-Term Care Insurance) (103.1)",
                        "雇用保険 (103.2)",
                        "火災保険 (103.3)",
                        "自動車損保 (103.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "介護保険制度."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What is the Japanese term for an integrated community model allowing seniors to receive medical care and daily support in their own neighborhoods?",
                    "options": [
                        "地域包括ケアシステム (Community Integrated Care System) (103.1)",
                        "私設病院のみ (103.2)",
                        "全寮制収容所 (103.3)",
                        "孤立隔離システム (103.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "地域包括ケアシステム."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Wearable robotic power assist suits reduce physical lower-back strain on caregiving staff when lifting elderly residents.\"",
                    "options": [
                        "介護保険制度は廃止されました。",
                        "日本には高齢者がほとんどいません。",
                        "装着型介護ロボット（パワーアシストスーツ）は、高齢者の移乗介助時における介護職員の腰部負担を大幅に軽減します。",
                        "介護ロボットは法律で禁止されています。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurate elder care translation."
                },
                {
                    "prompt": "What percentage range of Japan's national population is aged 65 and older?",
                    "options": [
                        "Under 10%",
                        "Over 29% (World's highest proportion)",
                        "Exactly 50%",
                        "Around 5%"
                    ],
                    "answerIndex": 1,
                    "explanation": "Over 29%."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u21-l4": {
        "id": "ja-u21-l4",
        "unit": "ja-u21",
        "level": "C2",
        "objective": "Cancer immunotherapy Nobel breakthroughs: PD-1 checkpoint inhibitors and Tasuku Honjo (免疫チェックポイント阻害薬、オプジーボ、本庶佑教授、がん免疫療法、抗PD-1抗体).",
        "presentation": {
            "explanation": "Cancer immunology and Nobel Prize winning checkpoint therapy in Japan:\n- **PD-1 Checkpoint Inhibitors (免疫チェックポイント阻害薬)**:\n  - Discovered by Professor **Tasuku Honjo (本庶佑)** at Kyoto University (Awarded the 2018 Nobel Prize in Physiology or Medicine alongside James P. Allison).\n  - Mechanism: Cancer cells evade the immune system by expressing PD-L1, which binds to the **PD-1 receptor** on killer T-cells, effectively putting the T-cell to \"sleep\".\n  - Honjo developed monoclonal antibodies (**オプジーボ - Opdivo / Nivolumab**) that block PD-1, unlocking the human immune system to naturally attack and destroy malignant tumors across lung cancer, melanoma, and renal carcinoma.\n- Fundamental paradigm shift: Transitioning oncology from poisoning cancer cells (chemotherapy/radiation) to **empowering the body's own immune lymphocytes**.",
            "examples": [
                {
                    "target": "本庶佑教授によるPD-1分子の発見と抗がん免疫薬「オプジーボ」の開発は、がん治療の歴史に免疫療法という第四の柱を確立しました。",
                    "reading": "Honjo Tasuku kyōju ni yoru PD-1 bunshi no hakken to...",
                    "translation": "Professor Tasuku Honjo's discovery of the PD-1 molecule and development of the anti-cancer drug \"Opdivo\" established immunotherapy as the historic fourth pillar of oncology."
                }
            ],
            "mnemonics": [
                "PD-1 & 本庶佑 (2018 Nobel Prize)! オプジーボ (Opdivo unlocks T-cell killer response)! 第四の治療の柱 (Immunotherapy pillar)!"
            ],
            "culturalNotes": [
                "Professor Honjo famously stated that true scientific discoveries come from \"curiosity, courage, challenge, confidence, concentration, and continuation\" (the 6 Cs)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which Japanese immunologist won the 2018 Nobel Prize in Physiology or Medicine for discovering the PD-1 immune checkpoint molecule?",
                    "options": [
                        "利根川進教授 (104.1)",
                        "本庶佑教授 (Prof. Tasuku Honjo) (104.2)",
                        "野依良治教授 (104.3)",
                        "山中伸弥教授 (104.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "本庶佑教授."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What breakthrough cancer immunotherapy drug was developed based on Prof. Honjo's PD-1 checkpoint research?",
                    "options": [
                        "ペニシリン (104.1)",
                        "オプジーボ (Opdivo / Nivolumab) (104.2)",
                        "ステロイド軟膏 (104.3)",
                        "アスピリン (104.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "オプジーボ (Opdivo)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Immune checkpoint inhibitors release the molecular brakes on killer T-lymphocytes, allowing the immune system to recognize and eradicate tumor cells.\"",
                    "options": [
                        "PD-1分子は存在しません。",
                        "免疫チェックポイント阻害薬はキラーT細胞のブレーキを解除し、生体自身の免疫系が腫瘍細胞を認識して排除することを可能にします。",
                        "がん免疫療法は臨床的に効果がありません。",
                        "オプジーボは抗生物質です。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurate immunology translation."
                },
                {
                    "prompt": "What biological receptor on T-cells does the cancer drug Opdivo target to prevent tumor immune evasion?",
                    "options": [
                        "PD-1 受容体 (Programmed cell death protein 1)",
                        "味覚受容体",
                        "ヘモグロビン",
                        "インスリン受容体"
                    ],
                    "answerIndex": 0,
                    "explanation": "PD-1 受容体."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u21-l5": {
        "id": "ja-u21-l5",
        "unit": "ja-u21",
        "level": "C2",
        "objective": "C2 synthesis on Japan's Medical DX (Digital Transformation), Heavy Ion Radiotherapy, and National Genomic Medicine (医療DX、重粒子線がん治療、全ゲノム解析等実行計画、オンライン診療).",
        "presentation": {
            "explanation": "Next-generation medical digital transformation and heavy ion beam oncology in Japan:\n- Heavy Particle / Heavy Ion Radiotherapy (**重粒子線治療 - Carbon Ion Radiotherapy**):\n  - Japan is the world pioneer in heavy ion cancer radiotherapy (QST Hospital in Chiba).\n  - Carbon ion beams accelerate particles to 70% of light speed, releasing peak destructive energy precisely at the tumor depth (**Bragg Peak - ブラッグピーク**) without damaging surrounding healthy tissue, curing deep inoperable tumors in days.\n- Medical DX & Genomic Revolution:\n  - National **全ゲノム解析等実行計画 (Whole Genome Analysis Plan)**: Clinical genomic sequencing of 100,000 cancer and rare disease patients.\n  - Nationwide integration of **My Number Health Insurance Cards (マイナ保険証)** and electronic medical record sharing.",
            "examples": [
                {
                    "target": "日本の重粒子線がん治療技術と全ゲノム解析計画は、ブラッグピークを活用したピンポイント照射と個別化ゲノム医療の最先端を切り拓いています。",
                    "reading": "Nihon no jūryūshisen gan chiryō gijutsu to zen-genomu kaiseki keikaku wa...",
                    "translation": "Japan's heavy ion radiotherapy technology and whole genome analysis plan are pioneering the frontier of pinpoint Bragg-peak radiation and personalized genomic medicine."
                }
            ],
            "mnemonics": [
                "重粒子線治療 (Carbon Ion Bragg Peak pinpoint radiation)! 全ゲノム解析計画 (100k cancer whole genome sequencing)! 医療DX & マイナ保険証!"
            ],
            "culturalNotes": [
                "Carbon ion radiotherapy was first deployed clinically at the National Institute of Radiological Sciences (NIRS) in Chiba, Japan, treating over 15,000 patients with minimal side effects."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "What physical radiation phenomenon allows heavy carbon ion radiotherapy to deposit maximum lethal energy exactly inside deep tumors without harming healthy organs?",
                    "options": [
                        "ブラッグピーク (Bragg Peak) (105.1)",
                        "ドップラー効果 (105.2)",
                        "全反射 (105.3)",
                        "光電効果 (105.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "ブラッグピーク (Bragg Peak)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Which Japanese national program sequences the complete genomes of over 100,000 cancer and rare disease patients to develop personalized therapeutics?",
                    "options": [
                        "宇宙開発計画 (105.1)",
                        "新幹線整備計画 (105.2)",
                        "観光立国推進基本計画 (105.3)",
                        "全ゲノム解析等実行計画 (Whole Genome Analysis Plan) (105.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "全ゲノム解析等実行計画."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Deploying medical digital transformation and nationwide electronic medical records enables seamless cloud data sharing between hospitals and pharmacies.\"",
                    "options": [
                        "医療DXの推進と全国電子カルテ情報共有により、病院と薬局間のシームレスなクラウドデータ連携が可能になります。",
                        "重粒子線治療はレントゲン写真と同じです。",
                        "マイナ保険証は医療機関で使えません。",
                        "全ゲノム解析は禁止されています。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurate medical DX translation."
                },
                {
                    "prompt": "Where was the world's first specialized medical heavy carbon ion synchrotron accelerator facility (HIMAC) built in Japan?",
                    "options": [
                        "北海道",
                        "沖縄県",
                        "京都府",
                        "千葉県（量子科学技術研究開発機構 QST）"
                    ],
                    "answerIndex": 3,
                    "explanation": "千葉県 (QST)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u22-l1": {
        "id": "ja-u22-l1",
        "unit": "ja-u22",
        "level": "C1",
        "objective": "The Kyoto School of Philosophy: Kitarō Nishida, the Logic of Basho, and Pure Experience (京都学派、西田幾多郎 - 『善の研究』、絶対矛盾的自己同一、場所の論理、絶対無).",
        "presentation": {
            "explanation": "The Kyoto School (京都学派) and Japan's premier original philosophical system:\n- **Kitarō Nishida (西田幾多郎 - 1870–1945)**:\n  - Founder of the Kyoto School at Kyoto University; authored the landmark treatise **『善の研究』 (An Inquiry into the Good - 1911)**.\n- Core Philosophical Concepts:\n  - **純粋経験 (Pure Experience)**: Experiencing reality prior to the intellectual division between subject (self) and object (world).\n  - **場所の論理 (Logic of Basho / Topos)**: The logic of self-encompassing situational space, culminating in **絶対無 (Absolute Nothingness)**—not empty void, but the infinite dynamic field out of which all being emerges.\n  - **絶対矛盾的自己同一 (Absolute Contradictory Self-Identity)**: The dialectical unity of opposing forces interpenetrating in the living historical present.\n- The famous **Philosopher's Walk (哲学の道 - Tetsugaku no Michi)** in Kyoto where Nishida meditated daily.",
            "examples": [
                {
                    "target": "西田幾多郎は『善の研究』において「純粋経験」と「絶対無」の概念を提唱し、西洋近代哲学と東洋の仏教的叡智を止揚した独創的な日本哲学を樹立しました。",
                    "reading": "Nishida Kitarō wa Zen no Kenkyū ni oite...",
                    "translation": "Kitaro Nishida proposed the concepts of \"Pure Experience\" and \"Absolute Nothingness\" in \"An Inquiry into the Good,\" establishing an original Japanese philosophy that synthesized modern Western thought with Eastern Buddhist wisdom."
                }
            ],
            "mnemonics": [
                "西田幾多郎 (Kitaro Nishida & 善の研究 1911)! 純粋経験 (Pre-subject/object Pure Experience)! 場所の論理 & 絶対無! 哲学の道!"
            ],
            "culturalNotes": [
                "Kyoto's Philosopher's Walk along the Lake Biwa Canal between Ginkaku-ji and Nanzen-ji is lined with cherry blossoms where Nishida walked in contemplative thought."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which Japanese philosopher founded the Kyoto School and authored the foundational 1911 philosophical work 『善の研究』 (An Inquiry into the Good)?",
                    "options": [
                        "福沢諭吉 (106.1)",
                        "夏目漱石 (106.2)",
                        "三島由紀夫 (106.3)",
                        "西田幾多郎 (Kitaro Nishida) (106.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "西田幾多郎 (Kitaro Nishida)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What famous stone-paved canal path in Kyoto was named after Kitarō Nishida's daily philosophical meditation walks?",
                    "options": [
                        "花見小路 (106.1)",
                        "竹林の小径 (106.2)",
                        "哲学の道 (Philosopher's Walk) (106.3)",
                        "仲見世通り (106.4)"
                    ],
                    "answerIndex": 2,
                    "explanation": "哲学の道 (Philosopher's Walk)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Pure experience denotes the direct, unmediated awareness of reality before the analytical intellect splits the world into subject and object.\"",
                    "options": [
                        "絶対無は虚無主義と同じです。",
                        "西田幾多郎は物理学者でした。",
                        "京都学派は西洋哲学の翻訳のみを行いました。",
                        "純粋経験とは、分析的知性が世界を主観と客観に二分する前の、直接的で無媒介な現実の自覚を指します。"
                    ],
                    "answerIndex": 3,
                    "explanation": "Accurate Kyoto School philosophy translation."
                },
                {
                    "prompt": "What foundational metaphysical concept in Nishida's philosophy describes the ultimate ground of reality beyond being and non-being?",
                    "options": [
                        "唯物論",
                        "絶対有",
                        "絶対無 (Absolute Nothingness)",
                        "機械論"
                    ],
                    "answerIndex": 2,
                    "explanation": "絶対無 (Absolute Nothingness)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u22-l2": {
        "id": "ja-u22-l2",
        "unit": "ja-u22",
        "level": "C1",
        "objective": "Philosophy of Time & Impermanence: Dōgen Zenji and the Shōbōgenzō (道元禅師、曹洞宗、正法眼蔵、有時 - 存在と時間、身心脱落、只管打坐).",
        "presentation": {
            "explanation": "Zen metaphysics, temporality, and phenomenological ontology in Dōgen:\n- **Dōgen Zenji (道元禅師 - 1200–1253)**:\n  - Founder of Sōtō Zen Buddhism in Japan and Eihei-ji Temple (Fukui); authored the masterwork **『正法眼蔵』 (Shōbōgenzō - Treasury of the True Dharma Eye)**.\n- Ontological & Temporal Insights:\n  - **有時 (Uji - Being-Time)**: Time is not an empty container through which objects pass; every moment of existence *is* time itself (*\"Time itself is being, and all being is time\"*).\n  - **只管打坐 (Shikantaza - Just Sitting)**: Silent meditation without seeking enlightenment as a future goal; the practice of sitting is itself the actualization of enlightenment.\n  - **身心脱落 (Shinjin Datsuraku)**: \"Casting off body and mind\"—the complete dissolution of the illusory dualistic ego.",
            "examples": [
                {
                    "target": "道元禅師は『正法眼蔵』の「有時（うじ）」の巻で、時間は外的な流れではなく存在そのものであると喝破し、独自の現象学的時間論を展開しました。",
                    "reading": "Dōgen Zenji wa Shōbōgenzō no Uji no maki de...",
                    "translation": "In the \"Uji\" chapter of Shobogenzo, Dogen Zenji proclaimed that time is not an external flow but being itself, developing a unique phenomenological ontology of temporality."
                }
            ],
            "mnemonics": [
                "道元禅師 (Dogen & 正法眼蔵 Shōbōgenzō)! 有時 (Being-Time: existence is time)! 只管打坐 (Shikantaza)! 身心脱落!"
            ],
            "culturalNotes": [
                "Modern Western philosophers, including Martin Heidegger, have been compared to Dōgen for their parallel investigations into the unified nature of Being and Time (*Sein und Zeit*)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "What monumental philosophical-religious treatise did Sōtō Zen master Dōgen author in the 13th century?",
                    "options": [
                        "『正法眼蔵』 (Shōbōgenzō) (107.1)",
                        "『平家物語』 (107.2)",
                        "『古事記』 (107.3)",
                        "『源氏物語』 (107.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "『正法眼蔵』."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What radical concept in Dōgen's Shōbōgenzō expresses the indivisible oneness of existence and temporality?",
                    "options": [
                        "有時（うじ - Being-Time） (107.1)",
                        "因果応報 (107.2)",
                        "輪廻転生 (107.3)",
                        "四苦八苦 (107.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "有時（うじ）."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"The practice of Shikantaza (just sitting) reveals that everyday mindful practice is not a means to enlightenment, but the very manifestation of truth itself.\"",
                    "options": [
                        "道元は坐禅を禁止しました。",
                        "正法眼蔵は軍事戦略の書です。",
                        "只管打坐の実践は、日々の瞑想が悟りへの手段ではなく、真理そのものの現成であることを明らかにします。",
                        "有時は時間を否定する概念です。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurate Zen philosophy translation."
                },
                {
                    "prompt": "What historic temple in Fukui Prefecture did Dōgen establish as the head monastery of Sōtō Zen Buddhism?",
                    "options": [
                        "金閣寺",
                        "大本山永平寺 (Eihei-ji)",
                        "清水寺",
                        "東大寺"
                    ],
                    "answerIndex": 1,
                    "explanation": "大本山永平寺 (Eihei-ji)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u22-l3": {
        "id": "ja-u22-l3",
        "unit": "ja-u22",
        "level": "C1",
        "objective": "Japanese Aesthetics & Shadow: Jun'ichirō Tanizaki's In Praise of Shadows and Wabi-Sabi metaphysics (谷崎潤一郎 - 『陰翳礼讚』、幽玄、侘び寂び、物の哀れ、数寄屋造り).",
        "presentation": {
            "explanation": "Aesthetic philosophy, the beauty of shadow, and classic Japanese spatial metaphysics:\n- **Jun'ichirō Tanizaki (谷崎潤一郎 - 1886–1965)**:\n  - Landmark aesthetic essay **『陰翳礼讚』 (In Praise of Shadows - 1933)**:\n  - Contends that while Western modernization seeks bright sterile illumination that expels all dark corners, traditional Japanese aesthetics finds profound beauty in the subtle gradation of **shadows, dim ambient light (陰翳 - In'ei), gold lacquer glowing in candlelight, and weathered patinas**.\n- Core Metaphysical Aesthetic Triad:\n  - **侘び寂び (Wabi-Sabi)**: The quiet beauty of impermanence, transience, asymmetry, and rustic simplicity.\n  - **幽玄 (Yūgen)**: Deep mysterious grace, subtleness, and unspoken depth that cannot be fully expressed in explicit words.\n  - **物の哀れ (Mono no Aware)**: Pathos and bittersweet sensitivity toward the ephemeral passing of living things.",
            "examples": [
                {
                    "target": "谷崎潤一郎は『陰翳礼讚』において、西洋の均一な照明に対し、闇と薄明かりのグラデーションに美を見出す日本固有の美意識を鮮やかに論じました。",
                    "reading": "Tanizaki Jun'ichirō wa In'ei Raisan ni oite...",
                    "translation": "In \"In Praise of Shadows,\" Jun'ichiro Tanizaki vividly argued that in contrast to Western uniform lighting, traditional Japanese aesthetics discovers profound beauty in the gradation of darkness and twilight."
                }
            ],
            "mnemonics": [
                "谷崎潤一郎 (In Praise of Shadows 1933)! 陰翳礼讚 (Beauty of shadows & gold lacquer)! 幽玄 & 侘び寂び! 物の哀れ!"
            ],
            "culturalNotes": [
                "Tanizaki noted that Japanese gold leaf lacquerware (蒔絵) was specifically designed to shimmer softly in dark candlelight rooms rather than under harsh electric bulbs."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which renowned Japanese author wrote the seminal 1933 aesthetic essay 『陰翳礼讚』 (In Praise of Shadows)?",
                    "options": [
                        "谷崎潤一郎 (Jun'ichiro Tanizaki) (108.1)",
                        "川端康成 (108.2)",
                        "太宰治 (108.3)",
                        "芥川龍之介 (108.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "谷崎潤一郎."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What traditional Japanese aesthetic philosophy finds profound beauty in impermanence, aged patina, and rustic simplicity?",
                    "options": [
                        "侘び寂び (Wabi-Sabi) (108.1)",
                        "唯美主義 (108.2)",
                        "豪華絢爛 (108.3)",
                        "完全無欠 (108.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "侘び寂び (Wabi-Sabi)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"The concept of Yūgen evokes a profound, subtle mystery and unspoken emotional depth that transcends explicit visual representation.\"",
                    "options": [
                        "陰翳礼讚は電気照明の普及を讃える本です。",
                        "「幽玄（ゆうげん）」の概念は、明白な視覚的描写を超越した、深遠で繊細な神秘と余情の美を呼び起こします。",
                        "物の哀れは怒りの感情を意味します。",
                        "日本の伝統建築には影が存在しません。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurate Japanese aesthetics translation."
                },
                {
                    "prompt": "What traditional architectural style utilizes natural unfinished wood, tatami mats, and shoji screens to harmonize shadows and light?",
                    "options": [
                        "数寄屋造り (Sukiya-zukuri)",
                        "バロック様式",
                        "コンクリート打ちっ放し",
                        "ゴシック様式"
                    ],
                    "answerIndex": 0,
                    "explanation": "数寄屋造り."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u22-l4": {
        "id": "ja-u22-l4",
        "unit": "ja-u22",
        "level": "C2",
        "objective": "Post-war existential literature and existential alienation: Kenzaburō Ōe and Kōbō Abe (大江健三郎 - ノーベル文学賞『個人的な体験』、安部公房 - 『砂の女』、実存的不条理、境界の哲学).",
        "presentation": {
            "explanation": "Post-war existentialism, modern alienation, and Nobel literature in Japan:\n- **Kōbō Abe (安部公房 - 1924–1993)**:\n  - The \"Kafka of Japan\"; authored the existential masterpiece **『砂の女』 (The Woman in the Dunes - 1962)**:\n  - Entomologist trapped in a Sisyphean desert sandpit; profound allegory of modern institutional alienation, bureaucratic identity loss, and the illusion of urban freedom.\n- **Kenzaburō Ōe (大江健三郎 - 1935–2023 - 1994 Nobel Prize in Literature)**:\n  - Nobel citation: *\"Who with poetic force creates an imagined world, where life and myth condense to form a perplexing picture of the human predicament today.\"*\n  - Masterpiece **『個人的な体験』 (A Personal Matter)**: The existential crisis of a young father confronting the birth of a brain-damaged child, choosing moral responsibility over escapism; and his anti-nuclear pacifist essays (*Hiroshima Notes*).",
            "examples": [
                {
                    "target": "安部公房の『砂の女』における不条理な実存の探求と大江健三郎の核なき平和への祈念は、戦後日本文学が世界に放った実存的遺産です。",
                    "reading": "Abe Kōbō no Suna no Onna ni okeru fujōri na jitsuzon no tankyū to...",
                    "translation": "Kobo Abe's exploration of absurd existence in \"The Woman in the Dunes\" and Kenzaburo Oe's prayer for nuclear-free peace are the existential legacies of postwar Japanese literature to the world."
                }
            ],
            "mnemonics": [
                "安部公房 (The Woman in the Dunes & existential absurd)! 大江健三郎 (1994 Nobel Prize & A Personal Matter)! ヒロシマ・ノート!"
            ],
            "culturalNotes": [
                "In his 1994 Nobel lecture titled \"Japan, the Ambiguous, and Myself\" (あいまいな日本の私), Oe engaged in dialogue with Yasunari Kawabata's 1968 lecture \"Japan, the Beautiful, and Myself.\""
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which Japanese novelist won the 1994 Nobel Prize in Literature for masterpieces such as A Personal Matter and The Silent Cry?",
                    "options": [
                        "村上春樹 (109.1)",
                        "大江健三郎 (Kenzaburo Oe) (109.2)",
                        "三島由紀夫 (109.3)",
                        "安部公房 (109.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "大江健三郎."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What world-famous 1962 existential novel by Kōbō Abe depicts an entomologist trapped in a shifting sand dunes pit?",
                    "options": [
                        "『金閣寺』 (109.1)",
                        "『砂の女』 (The Woman in the Dunes) (109.2)",
                        "『羅生門』 (109.3)",
                        "『雪国』 (109.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "『砂の女』."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"The protagonist's struggle against the encroaching sand serves as a universal allegory for the Sisyphean absurdity of modern urban existence.\"",
                    "options": [
                        "押し寄せる砂に対する主人公の格闘は、近代都市におけるシーシュポス的不条理の実存を象徴する普遍的な寓話となっています。",
                        "安部公房は砂漠のガイドブックを書きました。",
                        "個人的な体験はフィクションを否定する作品です。",
                        "大江健三郎は推理小説専門の作家でした。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurate literary analysis translation."
                },
                {
                    "prompt": "What title did Kenzaburō Ōe give to his 1994 Nobel Prize acceptance lecture in Stockholm?",
                    "options": [
                        "「美しい日本の私」",
                        "「吾輩は猫である」",
                        "「こころ」",
                        "「あいまいな日本の私」 (Japan, the Ambiguous, and Myself)"
                    ],
                    "answerIndex": 3,
                    "explanation": "「あいまいな日本の私」."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u22-l5": {
        "id": "ja-u22-l5",
        "unit": "ja-u22",
        "level": "C2",
        "objective": "C2 synthesis on Environmental Ethics, Degrowth & Deglobalization debates: Kohei Saito and Marx in the Anthropocene (斎藤幸平 - 『人新世の「資本論」』、脱成長コミュニズム、コモンズの再生、持続可能性の倫理).",
        "presentation": {
            "explanation": "Contemporary Japanese intellectual philosophy, environmental ethics, and the Anthropocene:\n- **Prof. Kohei Saito (斎藤幸平 - 1987–present)**:\n  - Associate Professor of Philosophy at the University of Tokyo; recipient of the prestigious Deutscher Memorial Prize for *Karl Marx's Ecosocialism*.\n- **『人新世の「資本論」』 (Capital in the Anthropocene - 2020)**:\n  - Became a runaway national and international bestseller selling over 500,000 copies.\n  - Re-interprets Marx's late-stage notebooks through ecological lens, demonstrating that infinite capitalist economic growth is biophysically incompatible with planetary boundaries (the metabolic rift / 物質代謝の亀裂).\n  - Advocates for **脱成長コミュニズム (Degrowth Communism)** and the restoration of **コモンズ (The Commons)**: Democratically managing shared societal wealth (clean water, renewable energy, healthcare, public transport, and open knowledge) for human flourishing rather than capital accumulation.",
            "examples": [
                {
                    "target": "斎藤幸平は『人新世の「資本論」』において、地球の限界と物質代謝の亀裂を克服するための「コモンズ」の再生と脱成長の倫理的必然性を説きました。",
                    "reading": "Saitō Kōhei wa Jinshinsei no Shihonron ni oite...",
                    "translation": "In \"Capital in the Anthropocene,\" Kohei Saito articulated the ethical necessity of regenerating the commons and embracing degrowth to overcome planetary boundaries and the metabolic rift."
                }
            ],
            "mnemonics": [
                "斎藤幸平 (Kohei Saito & 人新世の「資本論」)! 物質代謝の亀裂 (Metabolic rift)! コモンズの再生 (Shared commons for public good)!"
            ],
            "culturalNotes": [
                "The concept of \"The Commons\" (コモンズ) in Japan echoes traditional village commons (*Iriaichi* 入会地), where shared mountain forests and waterways were sustainably co-managed by local communities for centuries."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which Japanese philosopher at the University of Tokyo authored the runaway bestselling work 『人新世の「資本論」』 (Capital in the Anthropocene)?",
                    "options": [
                        "斎藤幸平 (Kohei Saito) (110.1)",
                        "柄谷行人 (110.2)",
                        "丸山真男 (110.3)",
                        "浅田彰 (110.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "斎藤幸平 (Kohei Saito)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What key ecological concept describes the shared, democratically co-managed resources (water, energy, healthcare) championed by Saito?",
                    "options": [
                        "私的所有の独占 (110.1)",
                        "株式市場 (110.2)",
                        "軍事基地 (110.3)",
                        "コモンズ (The Commons) (110.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "コモンズ (The Commons)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Planetary boundaries require transitioning from endless quantitative GDP expansion toward qualitative human flourishing and ecological regeneration.\"",
                    "options": [
                        "人新世は氷河期以前の地質時代です。",
                        "斎藤幸平は環境保護に反対しています。",
                        "コモンズはすべて民営化されるべきです。",
                        "地球の環境収容量（プラネタリー・バウンダリー）は、無限の量的GDP拡大から質的な人間の繁栄と生態系再生への転換を求めています。"
                    ],
                    "answerIndex": 3,
                    "explanation": "Accurate environmental philosophy translation."
                },
                {
                    "prompt": "What biological-ecological term coined by Marx describes the rupture between human industrial resource consumption and natural planetary cycles?",
                    "options": [
                        "労働分業",
                        "資本の回転速度",
                        "物質代謝の亀裂 (Metabolic Rift)",
                        "剰余価値"
                    ],
                    "answerIndex": 2,
                    "explanation": "物質代謝の亀裂 (Metabolic Rift)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u23-l1": {
        "id": "ja-u23-l1",
        "unit": "ja-u23",
        "level": "C1",
        "objective": "Classical Japanese Architecture: Katsura Imperial Villa and Sukiya-zukuri (桂離宮、数寄屋造り、ブルーノ・タウトの絶賛、借景、回遊式庭園、モダニズムとの共鳴).",
        "presentation": {
            "explanation": "Katsura Imperial Villa (桂離宮) and the pure essence of traditional Japanese architectural aesthetics:\n- **Katsura Imperial Villa (桂離宮 - 17th Century - Kyoto)**:\n  - Built by Prince Hachijō Toshihito along the Katsura River; the absolute summit of **Sukiya-zukuri (数寄屋造り - Teahouse residential style)**.\n- Architectural Principles:\n  - **Bruno Taut's Revelation (1933)**: Famous German Bauhaus architect proclaimed Katsura an absolute miracle of architecture, declaring its functional simplicity and honest materials to be the pure historical precursor to modern international architecture (*\"Form follows function, organic beauty without ornament\"*).\n  - **借景 (Shakkei - Borrowed Scenery)**: Integrating distant mountains and bamboo groves seamlessly into interior veranda views.\n  - **回遊式庭園 (Stroll Garden - Kaiyū-shiki teien)**: Path designed to unfold ever-changing vistas with stepping stones (*Tobi-ishi*) and rustic pavilions (Shōkin-tei).",
            "examples": [
                {
                    "target": "桂離宮の洗練された数寄屋造りと借景の手法は、ブルーノ・タウトやヴァルター・グロピウスら世界の近代建築家に計り知れない衝撃を与えました。",
                    "reading": "Katsura Rikyū no senren sareta sukiya-zukuri to...",
                    "translation": "The refined Sukiya style and borrowed scenery technique of Katsura Imperial Villa delivered an immeasurable revelation to world modernist architects including Bruno Taut and Walter Gropius."
                }
            ],
            "mnemonics": [
                "桂離宮 (Katsura Imperial Villa in Kyoto)! 数寄屋造り (Sukiya teahouse style)! ブルーノ・タウト (Bruno Taut praise)! 借景 (Borrowed scenery)!"
            ],
            "culturalNotes": [
                "Walter Gropius (founder of the Bauhaus) and Kenzo Tange co-authored the book *Katsura: Tradition and Creation in Japanese Architecture* in 1960."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which 17th-century Kyoto imperial villa is celebrated globally as the supreme masterpiece of Sukiya-zukuri architectural design?",
                    "options": [
                        "修学院離宮 (111.1)",
                        "二条城 (111.2)",
                        "平安神宮 (111.3)",
                        "桂離宮 (Katsura Imperial Villa) (111.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "桂離宮 (Katsura Imperial Villa)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Which German Bauhaus architect visited Katsura Imperial Villa in 1933 and declared it a foundational masterpiece of functional modernism?",
                    "options": [
                        "ル・コルビュジエ (111.1)",
                        "フランク・ロイド・ライト (111.2)",
                        "ブルーノ・タウト (Bruno Taut) (111.3)",
                        "ミース・ファン・デル・ローエ (111.4)"
                    ],
                    "answerIndex": 2,
                    "explanation": "ブルーノ・タウト."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"The architectural technique of borrowed scenery incorporates distant mountains and natural forests into the visual composition of the garden pavilion.\"",
                    "options": [
                        "数寄屋造りは金箔を多用する豪華様式です。",
                        "桂離宮は鉄筋コンクリートの高層ビルです。",
                        "借景（しゃっけい）の建築技法は、遠くの山々や自然林を庭園の東屋の視覚的構図に巧みに取り込みます。",
                        "ブルーノ・タウトは日本の伝統建築を批判しました。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurate architectural analysis translation."
                },
                {
                    "prompt": "What traditional garden layout at Katsura Villa invites visitors to walk along stepping stone paths to discover changing landscapes?",
                    "options": [
                        "枯山水のみ",
                        "回遊式庭園 (Stroll Garden)",
                        "芝生広場",
                        "幾何学式フランス庭園"
                    ],
                    "answerIndex": 1,
                    "explanation": "回遊式庭園."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u23-l2": {
        "id": "ja-u23-l2",
        "unit": "ja-u23",
        "level": "C1",
        "objective": "The Golden Age of Ukiyo-e: Hokusai, Hiroshige, and the Japonisme revolution (葛飾北斎 - 『冨嶽三十六景』「神奈川沖浪裏」、歌川広重 - 『東海道五十三次』、ジャポニスム、モネとゴッホへの影響).",
        "presentation": {
            "explanation": "Ukiyo-e woodblock printmaking (浮世絵) and its transformative impact on Western art (Japonisme):\n- **Katsushika Hokusai (葛飾北斎 - 1760–1849)**:\n  - Masterpiece series: **『冨嶽三十六景』 (Thirty-Six Views of Mount Fuji)**.\n  - The iconic **「神奈川沖浪裏」 (The Great Wave off Kanagawa)**: Dynamic fractal wave clawing over fisherman boats using imported Prussian Blue pigment (*Bero-ai*).\n- **Utagawa Hiroshige (歌川広重 - 1797–1858)**:\n  - Masterpiece series: **『東海道五十三次』 (The Fifty-Three Stations of the Tōkaidō)** and *One Hundred Famous Views of Edo* (dramatic rain showers, mist, and deep perspective).\n- **ジャポニスム (Japonisme)**:\n  - Revolutionized European Impressionism and Post-Impressionism; Claude Monet decorated his Giverny dining room with ukiyo-e prints, while **Vincent van Gogh** copied Hiroshige's *Plum Park in Kameido* in oil.",
            "examples": [
                {
                    "target": "葛飾北斎の「神奈川沖浪裏」と歌川広重の風景版画は、十九世紀後半のヨーロッパにジャポニスムの旋風を巻き起こし、印象派とゴッホの画風を一変させました。",
                    "reading": "Katsushika Hokusai no Kanagawa-oki Nami-ura to...",
                    "translation": "Hokusai's \"The Great Wave off Kanagawa\" and Hiroshige's landscape prints sparked the hurricane of Japonisme in late 19th-century Europe, transforming Impressionism and Van Gogh's style."
                }
            ],
            "mnemonics": [
                "葛飾北斎 (Hokusai & The Great Wave off Kanagawa)! 歌川広重 (Hiroshige & Tōkaidō 53 stations)! ジャポニスム (Influence on Monet & Van Gogh)!"
            ],
            "culturalNotes": [
                "Van Gogh wrote to his brother Theo in 1888: \"All my work is based on Japanese art... Japanese artists teach us to see a blade of grass as if it were a cosmic event.\""
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which master woodblock artist created \"The Great Wave off Kanagawa\" in the series Thirty-Six Views of Mount Fuji?",
                    "options": [
                        "葛飾北斎 (Katsushika Hokusai) (112.1)",
                        "東洲斎写楽 (112.2)",
                        "歌川広重 (112.3)",
                        "喜多川歌麿 (112.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "葛飾北斎 (Katsushika Hokusai)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Which post-impressionist painter famously painted direct oil copies of Utagawa Hiroshige's ukiyo-e woodblock prints in Paris?",
                    "options": [
                        "フィンセント・ファン・ゴッホ (Vincent van Gogh) (112.1)",
                        "パブロ・ピカソ (112.2)",
                        "レオナルド・ダ・ヴィンチ (112.3)",
                        "レンブラント (112.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "フィンセント・ファン・ゴッホ."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"The asymmetric framing, flat planes of vibrant color, and dynamic diagonal lines of Ukiyo-e revolutionized modern European painting.\"",
                    "options": [
                        "浮世絵は油絵具で描かれた壁画です。",
                        "浮世絵の大胆な非対称の構図、鮮やかな色彩の平面性、ダイナミックな斜線構成は、近代ヨーロッパ絵画に革命をもたらしました。",
                        "ジャポニスムは18世紀初頭に終わりました。",
                        "北斎は富士山の絵を一度も描きませんでした。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurate art history translation."
                },
                {
                    "prompt": "What synthetic mineral blue pigment imported from Europe gave Hokusai's *Great Wave* its vibrant deep ocean hue?",
                    "options": [
                        "ベロ藍 / プルシアンブルー (Prussian Blue)",
                        "藍染め",
                        "コバルトブルー",
                        "ラピスラズリ"
                    ],
                    "answerIndex": 0,
                    "explanation": "ベロ藍 (Prussian Blue)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u23-l3": {
        "id": "ja-u23-l3",
        "unit": "ja-u23",
        "level": "C1",
        "objective": "Post-War Architecture & Metabolism: Kenzō Tange and Yoyogi National Gymnasium (丹下健三 - プリツカー賞、国立代々木競技場、メタボリズム運動、黒川紀章の中銀カプセルタワービル、広島平和記念公園).",
        "presentation": {
            "explanation": "Kenzō Tange (1913–2005) and the world-renowned Japanese architectural renaissance:\n- **Kenzō Tange (丹下健三 - 1987 Pritzker Architecture Prize)**:\n  - The titan of 20th-century Japanese architecture; fused traditional Japanese spatial post-and-beam logic with monumental reinforced concrete.\n- Masterpieces:\n  - **広島平和記念資料館 (Hiroshima Peace Memorial Museum - 1955)**: A concrete bridge framing the A-Bomb Dome.\n  - **国立代々木競技場 (Yoyogi National Gymnasium - 1964 Tokyo Olympics)**: Masterpiece of structural suspension roof engineering (*吊り屋根構造*), creating soaring, pillar-less interior spaces celebrated as one of the most beautiful buildings of the 20th century.\n- **メタボリズム (Metabolism Movement - 1960s)**:\n  - Visionary avant-garde movement (Kisho Kurokawa, Fumihiko Maki, Kiyonori Kikutake) viewing cities not as static monuments, but as living biological organisms capable of organic regeneration, exemplified by Kisho Kurokawa's **中銀カプセルタワービル (Nakagin Capsule Tower - 1972)**.",
            "examples": [
                {
                    "target": "丹下健三による国立代々木競技場の吊り屋根構造とメタボリズム建築運動は、日本の伝統美と先進工学を融合させて世界の都市論を牽引しました。",
                    "reading": "Tange Kenzō ni yoru Kokuritsu Yoyogi Kyōgijō no...",
                    "translation": "Kenzo Tange's suspension-roof design at Yoyogi National Gymnasium and the Metabolism architectural movement fused Japanese traditional beauty with advanced engineering to lead global urbanism."
                }
            ],
            "mnemonics": [
                "丹下健三 (Kenzo Tange & 1987 Pritzker Prize)! 国立代々木競技場 (1964 Olympic suspension roof)! メタボリズム & 中銀カプセルタワービル!"
            ],
            "culturalNotes": [
                "Kenzo Tange was the first Japanese architect to win the Pritzker Architecture Prize (1987), mentoring future Pritzker laureates Fumihiko Maki and Arata Isozaki."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which Japanese architect won the 1987 Pritzker Prize and designed the iconic Yoyogi National Gymnasium for the 1964 Tokyo Olympics?",
                    "options": [
                        "丹下健三 (Kenzō Tange) (113.1)",
                        "安藤忠雄 (113.2)",
                        "隈研吾 (113.3)",
                        "黒川紀章 (113.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "丹下健三 (Kenzō Tange)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What avant-garde architectural movement founded in 1960 in Japan envisioned cities as growing, adaptable biological organisms?",
                    "options": [
                        "メタボリズム (Metabolism Movement) (113.1)",
                        "構成主義 (113.2)",
                        "バウハウス (113.3)",
                        "アール・ヌーヴォー (113.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "メタボリズム."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"The suspension cable roof system of Yoyogi Gymnasium eliminated interior support columns, creating sweeping organic curves inspired by Japanese temple roofs.\"",
                    "options": [
                        "代々木競技場の吊りケーブル構造は内部の支柱を排除し、日本の寺院の反り屋根を想起させる流麗で有機的な曲線を創出しました。",
                        "丹下健三は広島平和記念公園の設計を拒否しました。",
                        "メタボリズム建築は建物の解体を禁止しました。",
                        "代々木競技場は木造の平屋建てです。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurate architectural analysis translation."
                },
                {
                    "prompt": "What iconic futuristic building in Tokyo featuring 140 replaceable residential capsules was designed by Kisho Kurokawa in 1972?",
                    "options": [
                        "六本木ヒルズ",
                        "東京都庁舎",
                        "東京タワー",
                        "中銀カプセルタワービル (Nakagin Capsule Tower)"
                    ],
                    "answerIndex": 3,
                    "explanation": "中銀カプセルタワービル."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u23-l4": {
        "id": "ja-u23-l4",
        "unit": "ja-u23",
        "level": "C2",
        "objective": "The Aesthetics of Exposed Concrete & Void: Tadao Andō and The Church of the Light (安藤忠雄 - プリツカー賞、打ち放しコンクリート、光の教会、表参道ヒルズ、直島・地中美術館、自然との対話).",
        "presentation": {
            "explanation": "Tadao Andō (1941–present) and the metaphysical architecture of light and exposed concrete:\n- **Tadao Andō (安藤忠雄 - 1995 Pritzker Architecture Prize - Osaka)**:\n  - Self-taught boxer turned world architect; master of silky-smooth exposed concrete (**打ち放しコンクリート**), pure geometric forms, and natural elemental forces (light, wind, water).\n- Masterpieces:\n  - **光の教会 (Church of the Light - 1989 - Ibaraki, Osaka)**:\n    - Concrete sanctuary where the rear altar wall is carved with a cross-shaped cruciform slit, illuminating the dark interior with a blazing cross of pure sunlight.\n  - **Naoshima Island & Chichu Art Museum (地中美術館 - 2004)**:\n    - Entire museum built subterraneanly underground inside a National Park hill to preserve the island landscape, utilizing skylights to naturally illuminate Claude Monet and James Turrell installations.\n  - **Row House in Sumiyoshi (住吉の長屋 - 1976)**: Pure concrete courtyard forcing inhabitants to experience rain and seasons directly.",
            "examples": [
                {
                    "target": "安藤忠雄の「光の教会」や直島の地中美術館は、打ち放しコンクリートと自然光の劇的な対話を通じて、建築を瞑想的空間へと昇華させています。",
                    "reading": "Andō Tadao no Hikari no Kyōkai ya Naoshima no...",
                    "translation": "Tadao Ando's \"Church of the Light\" and Naoshima's Chichu Art Museum sublimate architecture into contemplative space through dramatic dialogue between exposed concrete and natural light."
                }
            ],
            "mnemonics": [
                "安藤忠雄 (Tadao Ando & 1995 Pritzker Prize)! 打ち放しコンクリート (Silky exposed concrete)! 光の教会 (Cross of sunlight)! 直島・地中美術館!"
            ],
            "culturalNotes": [
                "Ando received the 1995 Pritzker Prize in Versailles and donated the entire $100,000 prize money to the orphans of the Great Hanshin-Awaji (Kobe) Earthquake."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which self-taught Osaka architect won the 1995 Pritzker Prize for masterworks like Church of the Light and Naoshima's Chichu Art Museum?",
                    "options": [
                        "磯崎新 (114.1)",
                        "安藤忠雄 (Tadao Andō) (114.2)",
                        "坂茂 (114.3)",
                        "隈研吾 (114.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "安藤忠雄 (Tadao Andō)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What architectural signature material, finished with silky formwork tie holes, defines Tadao Andō's minimalist aesthetic?",
                    "options": [
                        "大理石彫刻 (114.1)",
                        "打ち放しコンクリート (Exposed smooth-cast concrete) (114.2)",
                        "プラスチックパネル (114.3)",
                        "赤レンガ (114.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "打ち放しコンクリート."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"By embedding the Chichu Art Museum underground, Ando preserved the scenic topography of the Seto Inland Sea while sculpting subterranean light wells.\"",
                    "options": [
                        "安藤忠雄は大学の建築学部を首席で卒業しました。",
                        "光の教会の十字架は電飾ネオンで作られています。",
                        "住吉の長屋は木造の超高層タワーです。",
                        "地中美術館を地下に埋設することで、安藤は瀬戸内海の美しい景観を守りつつ、地下の光庭を彫刻のように創り出しました。"
                    ],
                    "answerIndex": 3,
                    "explanation": "Accurate architectural analysis translation."
                },
                {
                    "prompt": "In which church in Ibaraki, Osaka did Tadao Andō slice a geometric cross into the solid concrete altar wall to admit radiant natural light?",
                    "options": [
                        "石の教会",
                        "風の教会",
                        "光の教会 (Church of the Light)",
                        "水の教会"
                    ],
                    "answerIndex": 2,
                    "explanation": "光の教会 (Church of the Light)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u23-l5": {
        "id": "ja-u23-l5",
        "unit": "ja-u23",
        "level": "C2",
        "objective": "C2 synthesis on Organic Materiality & Timber Architecture: Kengo Kuma and Shigeru Ban (隈研吾 - 国立競技場、木材とルーバーの建築、負ける建築、坂茂 - プリツカー賞、紙管建築、災害人道支援シェルター).",
        "presentation": {
            "explanation": "Sustainable timber engineering, organic materiality, and humanitarian architecture in Japan:\n- **Kengo Kuma (隈研吾 - 1954–present - Tokyo)**:\n  - Champion of **「負ける建築」 (Defeated Architecture / Architecture of Humility)**: Architecture that does not impose arrogant concrete monuments onto nature, but dissolves quietly into its surrounding environment using local wood, cedar louvers, bamboo, and washi paper.\n  - Masterpiece: **国立競技場 (Japan National Stadium - 2020 Tokyo Olympics)**: Built with timber sourced from all 47 Japanese prefectures, featuring eaves (*Noki-bisashi*) that channel natural wind cooling.\n- **Shigeru Ban (坂茂 - 2014 Pritzker Architecture Prize)**:\n  - The \"Architect of Humanity\"; invented structural **紙管建築 (Paper Tube Architecture)**: Recyclable, earthquake-resistant structural paper tubes deployed for emergency disaster shelters across Rwanda, Kobe, Haiti, Turkey, and Ukraine.",
            "examples": [
                {
                    "target": "隈研吾による国産木材を活用した新国立競技場と、坂茂による紙管を用いた人道支援シェルターは、日本の持続可能な建築哲学を世界に示しています。",
                    "reading": "Kuma Kengo ni yoru kokusan mokuzai wo katsuyō shita...",
                    "translation": "Kengo Kuma's National Stadium utilizing domestic timber and Shigeru Ban's humanitarian paper-tube disaster shelters demonstrate Japan's sustainable architectural philosophy to the world."
                }
            ],
            "mnemonics": [
                "隈研吾 (Kengo Kuma & 負ける建築 / National Stadium timber eaves)! 坂茂 (Shigeru Ban & 2014 Pritzker Prize for Paper Tube emergency shelters)!"
            ],
            "culturalNotes": [
                "Shigeru Ban's Volunteer Architects Network (VAN) responds to global earthquake and refugee crises within 48 hours, constructing dignified private partitioned shelters using paper tubes and cloth."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which Japanese architect designed the 2020 Tokyo National Stadium using cedar louvers from all 47 prefectures under the concept of \"Architecture of Humility\"?",
                    "options": [
                        "隈研吾 (Kengo Kuma) (115.1)",
                        "安藤忠雄 (115.2)",
                        "伊東豊雄 (115.3)",
                        "丹下健三 (115.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "隈研吾 (Kengo Kuma)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Which 2014 Pritzker Prize winner invented structural Paper Tube Architecture (紙管建築) to build emergency disaster relief shelters globally?",
                    "options": [
                        "隈研吾 (115.1)",
                        "妹島和世 (115.2)",
                        "西沢立衛 (115.3)",
                        "坂茂 (Shigeru Ban) (115.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "坂茂 (Shigeru Ban)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Paper tube architectural shelters provide rapid, environmentally sustainable, and dignified emergency housing for displaced earthquake survivors.\"",
                    "options": [
                        "隈研吾は木材の使用を禁止しています。",
                        "坂茂は豪華カジノ専門の建築家です。",
                        "紙管を用いた建築シェルターは、被災者に迅速で環境に優しく、尊厳ある緊急避難用住居を提供します。",
                        "新国立競技場はプラスチックのみで作られました。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurate sustainable architecture translation."
                },
                {
                    "prompt": "What philosophical concept championed by Kengo Kuma advocates designing buildings that harmonize with and yield to their natural surroundings?",
                    "options": [
                        "超高層メガロポリス",
                        "「負ける建築」 (Defeated Architecture / Architecture of Humility)",
                        "人工島計画",
                        "絶対要塞建築"
                    ],
                    "answerIndex": 1,
                    "explanation": "「負ける建築」."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u24-l1": {
        "id": "ja-u24-l1",
        "unit": "ja-u24",
        "level": "C1",
        "objective": "Ancient Imperial Court Music: Gagaku, Shō, and the World's Oldest Orchestral Tradition (雅楽、世界最古のオーケストラ、笙・篳篥・龍笛、越天楽、平調、ユネスコ無形文化遺産).",
        "presentation": {
            "explanation": "Gagaku (雅楽 - \"Elegant Music\") and the world's oldest continuous orchestral music tradition:\n- **Gagaku (雅楽 - Inscribed on UNESCO Intangible Cultural Heritage List 2009)**:\n  - Preserved continuously by the Imperial Household Agency Music Department (**宮内庁楽部**) for over 1,300 years since the Asuka and Nara periods (7th–8th Century).\n- Three Sacred Wind Instruments of the Orchestra (**三管 - San-kan**):\n  - **笙 (Shō - Mouth Organ)**: 17 bamboo pipes imitating the folded wings and heavenly voice of the mythical Phoenix (*Hō-ō*); plays complex 5-to-6 note harmonic clusters (**Aitake - 合竹**), representing the celestial light shining down from the heavens.\n  - **篳篥 (Hichiriki - Double-reed pipe)**: Piercing, expressive voice representing the earthly human soul.\n  - **龍笛 (Ryūteki - Dragon flute)**: Transverse flute representing dragons dancing through the sky between heaven and earth.\n- Masterpiece: **「越天楽」 (Etenraku)** in the Hyōjō modal scale.",
            "examples": [
                {
                    "target": "世界最古の合奏音楽である雅楽において、笙の和音は天空の光を表し、篳篥と龍笛の旋律とともに千数百年の時を超えた宇宙的調和を奏でます。",
                    "reading": "Sekai saiko no gassō ongaku de aru Gagaku ni oite...",
                    "translation": "In Gagaku, the world's oldest orchestral music, the chords of the Shō represent celestial light, playing alongside the Hichiriki and Ryūteki to create cosmic harmony spanning over a millennium."
                }
            ],
            "mnemonics": [
                "雅楽 (Gagaku - World's oldest orchestra for 1,300+ years UNESCO)! 笙 (Shō phoenix chord = heavenly light)! 篳篥 (Hichiriki = earthly soul)! 越天楽 (Etenraku)!"
            ],
            "culturalNotes": [
                "Modern Western avant-garde composers like John Cage, Karlheinz Stockhausen, and Olivier Messiaen studied the microtonal pitch bends and tone clusters of Gagaku in Tokyo."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which 1,300-year-old Japanese imperial court orchestral music tradition is recognized as the oldest continuously performed orchestral music in the world?",
                    "options": [
                        "能楽 (Nōgaku) (116.1)",
                        "歌舞伎音楽 (116.2)",
                        "津軽三味線 (116.3)",
                        "雅楽 (Gagaku) (116.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "雅楽 (Gagaku)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What 17-pipe bamboo mouth organ in Gagaku plays harmonic clusters (Aitake) symbolizing the light of heaven and the phoenix?",
                    "options": [
                        "篳篥（ひちりき） (116.1)",
                        "笙（しょう - Shō） (116.2)",
                        "龍笛（りゅうてき） (116.3)",
                        "和太鼓 (116.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "笙（しょう - Shō）."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"The tripartite wind instrumentation of Gagaku symbolizes the metaphysical cosmos: the celestial light of the Shō, the dragon flying in the sky, and human life on earth.\"",
                    "options": [
                        "雅楽はエレクトリックギターで演奏されます。",
                        "雅楽の三管（笙・龍笛・篳篥）は、笙の天空の光、空を舞う龍、そして地上の人間の命という形而上学的宇宙観を象徴しています。",
                        "越天楽は20世紀に作曲されたポップスです。",
                        "宮内庁楽部は1990年に設立されました。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurate ethnomusicological translation."
                },
                {
                    "prompt": "What is the most famous classical Gagaku piece, traditionally played in the Hyōjō modal scale during imperial banquets and New Year ceremonies?",
                    "options": [
                        "「越天楽」（えてんらく - Etenraku）",
                        "「春の海」",
                        "「さくらさくら」",
                        "「六段の調」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「越天楽」 (Etenraku)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u24-l2": {
        "id": "ja-u24-l2",
        "unit": "ja-u24",
        "level": "C1",
        "objective": "The Art of Ma (Negative Space) & Biwa Ballads: Toru Takemitsu and November Steps (武満徹 - 『ノヴェンバー・ステップス』1967、ニューヨーク・フィル、琵琶と尺八のオーケストラ対話、間（ま）の美学、映画音楽).",
        "presentation": {
            "explanation": "Toru Takemitsu (1930–1996 - Tokyo) and the bridge between Japanese silence and Western orchestration:\n- **Toru Takemitsu (武満徹)**:\n  - The foremost Japanese 20th-century composer; celebrated by Igor Stravinsky (who praised his *Requiem for Strings* in 1959 as a masterpiece of intensity).\n- Masterpiece: **«November Steps» (1967 - Commissioned by Leonard Bernstein for the New York Philharmonic's 125th Anniversary)**:\n  - Double concerto for traditional **Biwa (琵琶 - Satsuma lute)** (played by Kinshi Tsuruta) and **Shakuhachi (尺八 - bamboo flute)** (played by Katsuya Yokoyama) with Western Symphony Orchestra;\n  - Refused to blend the instruments into a superficial hybrid; instead placed the raw, unmeasured, breath-driven sound of bamboo and striking plectrums into dramatic confrontation with Western orchestral timbres.\n- **The Aesthetics of 間 (Ma - Negative Space / Pregnant Silence)**:\n  - Sound and silence are equal partners; a single struck sound contains an entire universe (*\"Music is either sound or silence; silence is not empty, but filled with potential sound\"*).\n  - Film Scores: Akira Kurosawa's *Ran*, Masaki Kobayashi's *Harakiri*.",
            "examples": [
                {
                    "target": "武満徹の『ノヴェンバー・ステップス』は、琵琶と尺八のノイズや「間（ま）」の美学を西洋オーケストラと対峙させ、現代音楽の歴史的モニュメントとなりました。",
                    "reading": "Takemitsu Tōru no Nobenbā Suteppusu wa...",
                    "translation": "Toru Takemitsu's \"November Steps\" brought the acoustic noise and aesthetics of \"Ma\" (silence) in the Biwa and Shakuhachi into confrontation with the Western orchestra, creating a historic monument of contemporary music."
                }
            ],
            "mnemonics": [
                "武満徹 (Toru Takemitsu & November Steps 1967 NY Phil)! 琵琶と尺八 (Biwa & Shakuhachi confrontation)! 間（ま）の美学 (Aesthetics of pregnant silence)! 映画『乱』!"
            ],
            "culturalNotes": [
                "Takemitsu listened to daily tape recordings of bird songs and rainfall in his mountain cabin in Kurohime, composing music as \"a garden of sound.\""
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which Japanese composer wrote the 1967 masterpiece «November Steps» for Biwa, Shakuhachi, and the New York Philharmonic?",
                    "options": [
                        "武満徹 (Toru Takemitsu) (117.1)",
                        "黛敏郎 (117.2)",
                        "坂本龍一 (117.3)",
                        "久石譲 (117.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "武満徹 (Toru Takemitsu)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What traditional Japanese spatial and temporal aesthetic concept of \"pregnant silence / meaningful void\" was foundational to Takemitsu's music?",
                    "options": [
                        "間（ま - Ma / Negative Space and Silence） (117.1)",
                        "侘び寂びのみ (117.2)",
                        "幽玄 (117.3)",
                        "物の哀れ (117.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "間（ま - Ma）."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Takemitsu treated unpitched acoustic breath noises and sharp plectrum strikes as living sonic organisms possessing infinite harmonic depth.\"",
                    "options": [
                        "武満は、調律されない息のノイズや鋭い撥（ばち）の打音を、無限の倍音の深みを持つ生きた音響生命体として扱いました。",
                        "ノヴェンバー・ステップスはピアノの独奏曲です。",
                        "ストラヴィンスキーは日本の音楽を批判しました。",
                        "武満徹は電子音楽の演奏を拒絶しました。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurate contemporary musicology translation."
                },
                {
                    "prompt": "Which epic Akira Kurosawa samurai film adaptation of Shakespeare's *King Lear* was scored by Toru Takemitsu in 1985?",
                    "options": [
                        "『羅生門』",
                        "『七人の侍』",
                        "『用心棒』",
                        "『乱』 (Ran)"
                    ],
                    "answerIndex": 3,
                    "explanation": "『乱』 (Ran)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u24-l3": {
        "id": "ja-u24-l3",
        "unit": "ja-u24",
        "level": "C1",
        "objective": "Electronic Music Pioneers & The Yellow Magic Orchestra: Ryuichi Sakamoto (坂本龍一 - YMO、戦場のメリークリスマス、ラストエンペラーでアカデミー作曲賞、アンビエント音楽、環境音とシンセサイザー).",
        "presentation": {
            "explanation": "Ryuichi Sakamoto (1952–2023 - Tokyo) and the revolution of electronic, cinematic, and ambient music:\n- **Yellow Magic Orchestra (YMO - Formed 1978 with Haruomi Hosono & Yukihiro Takahashi)**:\n  - Pioneers of synth-pop, electro, and techno; utilizing Roland modular synths, the TR-808 drum machine, and vocoders, selling millions globally (*Solid State Survivor*, *Rydeen*).\n- Academy Award & Cinematic Milestones:\n  - **«Merry Christmas, Mr. Lawrence» (戦場のメリークリスマス - 1983 - Nagisa Oshima)**: Haunting pentatonic gamelan-inspired synthesizer and piano theme;\n  - **«The Last Emperor» (ラストエンペラー - 1987 - Bernardo Bertolucci)**: Won the **Academy Award (Oscar) for Best Original Score**, the Golden Globe, and the Grammy Award, fusing traditional Chinese erhu and pipa with full Western symphony orchestra.\n- Later Ambient Environmental Philosophy:\n  - Recording melting glacier water in Greenland and forest rain in *async* (2017), treating music as the organic acoustic prayer of the planet.",
            "examples": [
                {
                    "target": "坂本龍一はYMOでの電子音楽革命から『ラストエンペラー』でのアカデミー賞受賞、そして自然の環境音を慈しむアンビエント音楽まで、世界の音楽地図を塗り替えました。",
                    "reading": "Sakamoto Ryūichi wa YMO de no denshi ongaku...",
                    "translation": "From the electronic music revolution in YMO to his Academy Award for \"The Last Emperor\" and ambient works cherishing natural environmental sounds, Ryuichi Sakamoto redrew the world musical map."
                }
            ],
            "mnemonics": [
                "坂本龍一 (Ryuichi Sakamoto & YMO)! 戦場のメリークリスマス (Merry Christmas Mr. Lawrence)! ラストエンペラー (1987 Oscar Best Original Score)! async!"
            ],
            "culturalNotes": [
                "Sakamoto's final concert film *Opus* (2023) captures him playing 20 solo piano pieces in Tokyo's NHK Studio 509 without speaking, an intimate musical farewell to humanity."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which Japanese composer won the Academy Award (Oscar) for Best Original Score in 1987 for Bertolucci's film The Last Emperor?",
                    "options": [
                        "坂本龍一 (Ryuichi Sakamoto) (118.1)",
                        "久石譲 (118.2)",
                        "武満徹 (118.3)",
                        "菅野よう子 (118.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "坂本龍一 (Ryuichi Sakamoto)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What pioneering electronic music group was founded in 1978 by Ryuichi Sakamoto, Haruomi Hosono, and Yukihiro Takahashi?",
                    "options": [
                        "Yellow Magic Orchestra (YMO) (118.1)",
                        "Tangerine Dream (118.2)",
                        "Kraftwerk (118.3)",
                        "Daft Punk (118.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "Yellow Magic Orchestra (YMO)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Sakamoto's score for Merry Christmas Mr. Lawrence fused pentatonic Asian melodic contour with Western harmonic counterpoint and shimmering synthesizer textures.\"",
                    "options": [
                        "坂本龍一はピアノを一度も弾きませんでした。",
                        "YMOはアコースティックギターのみで演奏するフォークバンドでした。",
                        "ラストエンペラーの音楽はアカデミー賞にノミネートされませんでした。",
                        "『戦場のメリークリスマス』の劇伴は、アジア的な五音音階の旋律線を西洋の対位法的和声および煌めくシンセサイザーの音響テクスチャーと融合させました。"
                    ],
                    "answerIndex": 3,
                    "explanation": "Accurate film musicology translation."
                },
                {
                    "prompt": "What was the title of Ryuichi Sakamoto's acclaimed 2017 ambient solo album recorded after his cancer diagnosis, featuring the acoustic sounds of Arctic glacier water and rain?",
                    "options": [
                        "『BTTB』",
                        "『Thousand Knives』",
                        "『async』",
                        "『Out of Noise』"
                    ],
                    "answerIndex": 2,
                    "explanation": "『async』."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u24-l4": {
        "id": "ja-u24-l4",
        "unit": "ja-u24",
        "level": "C2",
        "objective": "Symphonic Anime Scoring & Ghibli Magic: Joe Hisaishi and Studio Ghibli (久石譲 - 宮崎駿監督との不滅の協働、『千と千尋の神隠し』「あの夏へ」、『もののけ姫』、『風の谷のナウシカ』、ミニマル・ミュージックと管弦楽法).",
        "presentation": {
            "explanation": "Joe Hisaishi (久石譲 - 1950–present - Nagano) and the symphonic golden age of Studio Ghibli:\n- **Joe Hisaishi (Mamoru Fujisawa - 久石譲)**:\n  - Studied minimalist music under Terry Riley and Steve Reich at Kunitachi College of Music; composed the score for every Hayao Miyazaki feature film from 1984 to 2023.\n- Masterpieces & Orchestral Innovations:\n  - **«風の谷のナウシカ» (Nausicaä of the Valley of the Wind - 1984)**: Minimalist arpeggios and synthesized choral layers.\n  - **«もののけ姫» (Princess Mononoke - 1997)**: Epic modal symphonies for 90-piece orchestra, Taiko drums, and countertenor Yoshikazu Mera.\n  - **«千と千尋の神隠し» (Spirited Away - 2001)**: The iconic solo piano opening **「あの夏へ」 (One Summer's Day)**, using suspended ninth chords and pentatonic grace notes to evoke childhood nostalgia, lost memory, and spiritual longing.\n- Takeshi Kitano Film Scores: *Sonatine*, *Hana-bi*, *Kikujiro* (featuring the piano classic *Summer*).",
            "examples": [
                {
                    "target": "久石譲による『千と千尋の神隠し』の「あの夏へ」や『もののけ姫』の管弦楽スコアは、ミニマリズムの手法と叙情的な旋律で世界の映画音楽の金字塔を打ち立てました。",
                    "reading": "Hisaishi Jō ni yoru Sen to Chihiro no Kamikakushi no...",
                    "translation": "Joe Hisaishi's \"One Summer's Day\" for Spirited Away and orchestral score for Princess Mononoke established monuments of world cinema music through minimalist techniques and lyrical melody."
                }
            ],
            "mnemonics": [
                "久石譲 (Joe Hisaishi & Hayao Miyazaki Ghibli partner)! 千と千尋の神隠し (Spirited Away: One Summer's Day)! もののけ姫 (Princess Mononoke)! 北野武映画『Summer』!"
            ],
            "culturalNotes": [
                "Hisaishi conducted a sold-out concert series with the Royal Philharmonic Orchestra at London's Wembley Arena and Madison Square Garden in New York, performing his Ghibli symphonic suites for 25,000 cheering fans."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which Japanese composer scored all of Hayao Miyazaki's legendary Studio Ghibli films, including Spirited Away, Princess Mononoke, and My Neighbor Totoro?",
                    "options": [
                        "坂本龍一 (119.1)",
                        "久石譲 (Joe Hisaishi) (119.2)",
                        "川井憲次 (119.3)",
                        "菅野よう子 (119.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "久石譲 (Joe Hisaishi)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What is the title of the famous opening solo piano theme composed by Joe Hisaishi for Hayao Miyazaki's Oscar-winning *Spirited Away*?",
                    "options": [
                        "「君をのせて」 (119.1)",
                        "「あの夏へ」 (One Summer's Day) (119.2)",
                        "「風の通り道」 (119.3)",
                        "「海の見える街」 (119.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "「あの夏へ」 (One Summer's Day)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Hisaishi's film compositions combine repetitive minimalist rhythmic cells with expansive romantic symphonic themes to amplify emotional depth in animation.\"",
                    "options": [
                        "もののけ姫の音楽はエレキベースのみで作曲されました。",
                        "久石譲はジャズドラム専門の演奏家です。",
                        "久石の映画音楽は、ミニマリズムの反復的なリズム単位と壮大なロマン派的管弦楽の旋律を結合させ、アニメーションの感情的深度を劇的に高めています。",
                        "久石譲はジブリ映画の音楽を担当したことがありません。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurate film music analysis translation."
                },
                {
                    "prompt": "Which Takeshi Kitano film features Joe Hisaishi's beloved joyful piano track \"Summer\"?",
                    "options": [
                        "『HANA-BI』",
                        "『菊次郎の夏』 (Kikujiro)",
                        "『座頭市』",
                        "『ソナチネ』"
                    ],
                    "answerIndex": 1,
                    "explanation": "『菊次郎の夏』 (Kikujiro)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u24-l5": {
        "id": "ja-u24-l5",
        "unit": "ja-u24",
        "level": "C2",
        "objective": "C2 synthesis on World Conductor Leadership: Seiji Ozawa and the Saito Kinen Festival (小澤征爾 - ボストン交響楽団音楽監督、サイトウ・キネン・フェスティバル松本、ウィーン・フィル・ニューイヤーコンサート、ベルリン・フィルとの絆).",
        "presentation": {
            "explanation": "Seiji Ozawa (1935–2024 - Shenyang, Tokyo & Boston) and the global triumph of Japanese symphonic conducting:\n- **Seiji Ozawa (小澤征爾)**:\n  - Mentored by Hideo Saito, Charles Munch, and Herbert von Karajan; served as the Music Director of the **Boston Symphony Orchestra for 29 consecutive years (1973–2002)**—the longest tenure in the orchestra's history;\n  - Music Director of the Vienna State Opera (Wiener Staatsoper - 2002–2010);\n  - First Japanese maestro to conduct the prestigious **Vienna Philharmonic New Year's Concert (2002)**.\n- Founding the **Saito Kinen Orchestra & Seiji Ozawa Matsumoto Festival** (Nagano):\n  - Gathered elite Japanese musicians from Berlin, Vienna, Boston, and London to create an orchestra celebrated worldwide for unmatched precision, explosive dynamics, and warm expressive lyricism.\n- Co-authored *Absolutely on Music* (小澤征爾さんと、音楽について話そう) with Haruki Murakami.",
            "examples": [
                {
                    "target": "小澤征爾はボストン交響楽団を三十年近く率い、サイトウ・キネン・オーケストラを通じて日本発のクラシック演奏水準を世界の最高峰へと引き上げました。",
                    "reading": "Ozawa Seiji wa Bosuton Kōkyō Gakudan wo...",
                    "translation": "Seiji Ozawa led the Boston Symphony Orchestra for nearly three decades and, through the Saito Kinen Orchestra, elevated Japanese classical music performance to the highest summit of the world."
                }
            ],
            "mnemonics": [
                "小澤征爾 (Seiji Ozawa & Boston Symphony 29 years)! サイトウ・キネン・フェスティバル松本! ウィーン国立歌劇場音楽監督! 村上春樹との対話!"
            ],
            "culturalNotes": [
                "In 2015, Ozawa received the Kennedy Center Honor in Washington D.C., with President Barack Obama paying tribute to his boundless joy and energy on the podium."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which Japanese maestro served as Music Director of the Boston Symphony Orchestra for 29 years and conducted the Vienna Philharmonic New Year's Concert in 2002?",
                    "options": [
                        "小澤征爾 (Seiji Ozawa) (120.1)",
                        "朝比奈隆 (120.2)",
                        "西本智実 (120.3)",
                        "佐渡裕 (120.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "小澤征爾 (Seiji Ozawa)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What world-renowned annual classical music festival in Nagano was founded by Seiji Ozawa in 1992 in memory of teacher Hideo Saito?",
                    "options": [
                        "パシフィック・ミュージック・フェスティバル (120.1)",
                        "東京春音楽祭 (120.2)",
                        "軽井沢国際音楽祭 (120.3)",
                        "サイトウ・キネン・フェスティバル松本 (Seiji Ozawa Matsumoto Festival) (120.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "サイトウ・キネン・フェスティバル松本."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Ozawa's conducting combined razor-sharp rhythmic precision with an intensely expressive, whole-body musical gesture that inspired orchestral players.\"",
                    "options": [
                        "サイトウ・キネン・オーケストラはアマチュアの合唱団です。",
                        "小澤の指揮法は、カミソリのように鋭いリズムの精密さと、オーケストラの奏者を鼓舞する極めて表現力豊かな全身の身振りを融合させていました。",
                        "小澤征爾は一度も海外で指揮しませんでした。",
                        "ボストン交響楽団は小澤を1年で解雇しました。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurate orchestral conducting translation."
                },
                {
                    "prompt": "Which world-famous Japanese novelist published an extensive book of intimate dialogues with Seiji Ozawa titled *Absolutely on Music*?",
                    "options": [
                        "村上春樹 (Haruki Murakami)",
                        "大江健三郎",
                        "吉本ばなな",
                        "三島由紀夫"
                    ],
                    "answerIndex": 0,
                    "explanation": "村上春樹 (Haruki Murakami)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u25-l1": {
        "id": "ja-u25-l1",
        "unit": "ja-u25",
        "level": "C1",
        "objective": "The Emperor of World Cinema: Akira Kurosawa and Rashomon (黒澤明 - 『羅生門』1950年ヴェネツィア国際映画祭金獅子賞、羅生門効果、三船敏郎、『七人の侍』、『天国と地獄』、マルチカメラ撮影と望遠レンズ).",
        "presentation": {
            "explanation": "Akira Kurosawa (黒澤明 - 1910–1998 - Tokyo) and the transformation of world cinematic grammar:\n- **Akira Kurosawa (The \"Emperor\" of Cinema - 世界のクロサワ)**:\n  - Mentored by Kajirō Yamamoto; awarded the **Academy Honorary Award for Lifetime Achievement (1990)** (presented by Steven Spielberg and George Lucas, who declared: *\"He is the pictorial Shakespeare of our time\"*).\n- Landmark Masterpieces:\n  - **«羅生門» (Rashomon - 1950)**: Won the **Golden Lion (金獅子賞) at the Venice Film Festival** and an Academy Honorary Award;\n    - Birthed the global psychological and legal term **\"The Rashomon Effect\" (羅生門効果)**: Showing the murder of a samurai and assault of his wife through 4 mutually contradictory subjective eyewitness flashbacks (the bandit Tajōmaru, the wife Masako, the dead samurai speaking through a psychic medium *Miko*, and the woodcutter), questioning the very existence of objective truth;\n    - First film in history to point the camera lens directly into the blazing sunlight through tree canopies (using mirrors);\n  - **«七人の侍» (Seven Samurai - 1954)**: Invented the modern action film ensemble grammar (telephoto multi-camera setups in driving rain);\n  - The legendary collaboration with actor **Toshirō Mifune (三船敏郎)** (16 films).",
            "examples": [
                {
                    "target": "黒澤明の『羅生門』は主観的真実を問う「羅生門効果」を映画史に刻み、ヴェネツィア国際映画祭の金獅子賞を獲得して日本映画を世界に開眼させました。",
                    "reading": "Kurosawa Akira no Rashōmon wa shukanteki shinjitsu wo...",
                    "translation": "Akira Kurosawa's \"Rashomon\" etched the \"Rashomon Effect\" questioning subjective truth into film history, winning the Golden Lion at Venice and awakening the world to Japanese cinema."
                }
            ],
            "mnemonics": [
                "黒澤明 (Akira Kurosawa & 世界のクロサワ)! 羅生門 (Rashomon 1950 Golden Lion in Venice & Rashomon Effect)! 三船敏郎 (Toshiro Mifune)! 七人の侍 (Seven Samurai 1954)!"
            ],
            "culturalNotes": [
                "Kurosawa's *Seven Samurai* directly inspired *The Magnificent Seven*, *Yojimbo* was remade by Sergio Leone as *A Fistful of Dollars*, and *The Hidden Fortress* inspired George Lucas's *Star Wars*."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which Japanese director won the Golden Lion at the Venice Film Festival in 1950 for \"Rashomon\" and directed \"Seven Samurai\"?",
                    "options": [
                        "小津安二郎 (121.1)",
                        "溝口健二 (121.2)",
                        "大島渚 (121.3)",
                        "黒澤明 (Akira Kurosawa) (121.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "黒澤明 (Akira Kurosawa)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What famous psychological and narrative phenomenon, named after Kurosawa's 1950 film, describes contradictory subjective accounts of the same event by different witnesses?",
                    "options": [
                        "ドッペルゲンガー効果 (121.1)",
                        "羅生門効果 (The Rashomon Effect) (121.2)",
                        "バタフライ効果 (121.3)",
                        "プラシーボ効果 (121.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "羅生門効果 (The Rashomon Effect)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Kurosawa filmed the climactic battle in Seven Samurai using multiple synchronized telephoto cameras in torrential mud and rain to capture kinetic realism.\"",
                    "options": [
                        "黒澤は豪雨と泥濘の中で複数の望遠カメラを同時に回し、『七人の侍』のクライマックスの合戦シーンにおける動的なリアリズムを捉えました。",
                        "羅生門はカラーの長編アニメーションです。",
                        "黒澤明は映画監督になる前にプロ野球選手でした。",
                        "三船敏郎は一度も黒澤映画に出演しませんでした。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurate cinematic analysis translation."
                },
                {
                    "prompt": "Which legendary Japanese actor starred in 16 of Kurosawa's greatest masterpieces, including *Rashomon*, *Seven Samurai*, and *Yojimbo*?",
                    "options": [
                        "高倉健",
                        "志村喬",
                        "仲代達矢",
                        "三船敏郎 (Toshirō Mifune)"
                    ],
                    "answerIndex": 3,
                    "explanation": "三船敏郎 (Toshirō Mifune)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u25-l2": {
        "id": "ja-u25-l2",
        "unit": "ja-u25",
        "level": "C1",
        "objective": "The Master of Japanese Domesticity & Low-Angle Geometry: Yasujirō Ozu (小津安二郎 - 『東京物語』1953、タタミ・ショット（ローアングル）、赤いやかんの静物ショット、原節子、家族の解体と無常感、笠智衆).",
        "presentation": {
            "explanation": "Yasujirō Ozu (1903–1963 - Tokyo & Kamakura) and the minimalist purity of cinematic transcendental style:\n- **Yasujirō Ozu (小津安二郎)**:\n  - Voted #3 Greatest Director of All Time by *Sight & Sound* critics;\n- Uncompromising Formal Cinematic Aesthetics:\n  - **The Tatami Shot (ローアングル / Tatami-level camera)**: Fixed 50mm lens positioned approximately 3 feet off the ground (the exact eye-level of a person seated on a traditional Japanese straw Tatami mat);\n  - **Direct-to-Camera Eye-lines**: Actors look directly into the camera lens during dialogue rather than off-screen over-the-shoulder;\n  - **Pillow Shots (カーテン・ショット / Still-life cutaways)**: Lyrical cutaways to static objects (a red kettle, clothes hanging on a line, empty train tracks, an office hallway) between scenes, evoking Zen stillness and the passing of time (*Mono no Aware*);\n- Masterpiece: **«東京物語» (Tokyo Story - 1953)**: Aging parents travel from Onomichi to Tokyo, receiving indifferent treatment from their busy children, with only their widowed daughter-in-law Noriko (played by **Setsuko Hara - 原節子**) showing genuine warmth.",
            "examples": [
                {
                    "target": "小津安二郎の『東京物語』は、タタミ・ショットの幾何学的構図と静物ショットを通じて、近代化に伴う家族の解体と人生の無常を静謐に描き出しました。",
                    "reading": "Ozu Yasujirō no Tōkyō Monogatari wa tatami-shotto no...",
                    "translation": "Through geometric tatami-shot compositions and still-life cutaways, Yasujiro Ozu's \"Tokyo Story\" serenely depicted the disintegration of the family and the transience of life amidst modernization."
                }
            ],
            "mnemonics": [
                "小津安二郎 (Yasujiro Ozu & Tokyo Story 1953 #1 masterwork)! タタミ・ショット (Tatami eye-level low angle)! 原節子 (Setsuko Hara)! 笠智衆 (Chishu Ryu)! 物の哀れ!"
            ],
            "culturalNotes": [
                "Ozu's gravestone at Engaku-ji temple in Kita-Kamakura has no name inscribed upon it, bearing only a single Chinese character: **「無」** (Mu / Nothingness / Emptiness)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which master Japanese filmmaker directed \"Tokyo Story\" (1953) and pioneered the iconic low-angle \"Tatami Shot\"?",
                    "options": [
                        "小津安二郎 (Yasujirō Ozu) (122.1)",
                        "成瀬巳喜男 (122.2)",
                        "今村昌平 (122.3)",
                        "黒澤明 (122.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "小津安二郎 (Yasujirō Ozu)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What characteristic camera elevation was strictly maintained by Yasujirō Ozu in almost all his post-war films?",
                    "options": [
                        "The Tatami Shot (Camera positioned at seated tatami mat eye-level) (122.1)",
                        "Bird's-eye drone overhead shot (122.2)",
                        "Extreme Dutch tilt angle (122.3)",
                        "Shaky handheld camera (122.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "The Tatami Shot."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Ozu's static pillow shots of everyday objects function as contemplative visual breaths, punctuating scene transitions with poignant Zen stillness.\"",
                    "options": [
                        "東京物語は巨大怪獣映画です。",
                        "小津安二郎はカメラを激しく動かすアクション監督でした。",
                        "原節子はハリウッドのアクション女優でした。",
                        "小津の日常的な静物を捉えたカーテン・ショットは瞑想的な視覚的休止符として機能し、静謐な禅の静寂で場面転換を彩ります。"
                    ],
                    "answerIndex": 3,
                    "explanation": "Accurate Ozu cinematic analysis translation."
                },
                {
                    "prompt": "What single Buddhist kanji character is engraved upon Yasujirō Ozu's gravestone at Engaku-ji Temple in Kamakura?",
                    "options": [
                        "「愛」",
                        "「美」",
                        "「無」 (Mu / Nothingness)",
                        "「光」"
                    ],
                    "answerIndex": 2,
                    "explanation": "「無」 (Mu)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u25-l3": {
        "id": "ja-u25-l3",
        "unit": "ja-u25",
        "level": "C1",
        "objective": "Long-Take Fluidity & Female Tragedy: Kenji Mizoguchi (溝口健二 - 『雨月物語』1953年ヴェネツィア銀獅子賞、『西鶴一代女』、『山椒大夫』、ワンシーン・ワンカット長回し、クレーン撮影と幽玄の美学).",
        "presentation": {
            "explanation": "Kenji Mizoguchi (1898–1956 - Tokyo & Kyoto) and the supreme pinnacle of Japanese long-take cinema:\n- **Kenji Mizoguchi (溝口健二)**:\n  - Champion of feminist themes in pre-modern and modern Japan; won 3 consecutive awards at the Venice Film Festival (1952, 1953, 1954);\n  - Jean-Luc Godard and French New Wave directors declared him the greatest filmmaker of all time (*\"The greatest of them all, who dominates everyone\"*).\n- Hallmarks of Cinematic Purity:\n  - **The One-Scene One-Cut Method (ワンシーン・ワンカット / Plan-Séquence)**: Refusing close-up cuts; filming lengthy, unbroken scenes from a distance using fluid crane and tracking camera movements, allowing actors to inhabit emotional truth in real continuous time;\n  - **Aesthetics of Yūgen (幽玄 - Profound Mystical Grace)**: Ethereal mist over Lake Biwa in **«雨月物語» (Ugetsu - 1953 - Silver Lion at Venice)**, ghost lovers bathed in candlelight, and moral sacrifice in **«山椒大夫» (Sansho the Bailiff - 1954)** and **«西鶴一代女» (The Life of Oharu)** starring Kinuyo Tanaka.",
            "examples": [
                {
                    "target": "溝口健二の『雨月物語』と『山椒大夫』は、ワンシーン・ワンカットの流麗な長回しと幽玄の映像美でヴェネツィアを魅了し、世界の映画監督たちを脱帽させました。",
                    "reading": "Mizoguchi Kenji no Ugetsu Monogatari to...",
                    "translation": "Kenji Mizoguchi's \"Ugetsu\" and \"Sansho the Bailiff\" enchanted Venice with fluid one-scene one-cut long takes and mystical Yugen beauty, leaving world directors in awe."
                }
            ],
            "mnemonics": [
                "溝口健二 (Kenji Mizoguchi & 3-time Venice winner)! 雨月物語 (Ugetsu 1953 on Lake Biwa)! ワンシーン・ワンカット長回し (One-scene one-cut long takes)! 田中絹代 (Kinuyo Tanaka)!"
            ],
            "culturalNotes": [
                "Mizoguchi studied Western oil painting as a young man before entering cinema, composing every film frame with the spatial depth and atmospheric lighting of a classical Japanese scroll painting."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which Japanese director won consecutive awards at Venice for \"Ugetsu\" (1953) and \"Sansho the Bailiff\" using the \"one-scene one-cut\" long take technique?",
                    "options": [
                        "溝口健二 (Kenji Mizoguchi) (123.1)",
                        "黒澤明 (123.2)",
                        "小津安二郎 (123.3)",
                        "深作欣二 (123.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "溝口健二 (Kenji Mizoguchi)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What characteristic directorial camera technique, avoiding fast editing cuts in favor of continuous fluid wide shots, was championed by Mizoguchi?",
                    "options": [
                        "ワンシーン・ワンカット長回し (One-scene one-cut / Plan-séquence) (123.1)",
                        "高速モンタージュ (123.2)",
                        "ジャンプカット (123.3)",
                        "クローズアップの連続 (123.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "ワンシーン・ワンカット長回し."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"The boat gliding through the fog on Lake Biwa in Ugetsu represents one of the most hauntingly poetic long takes in the history of world cinema.\"",
                    "options": [
                        "雨月物語は現代の東京を舞台にしたコメディです。",
                        "溝口健二はワンシーン・ワンカット撮影を禁止しました。",
                        "『雨月物語』で琵琶湖の深い霧の中を滑るように進む小舟の場面は、世界映画史上最も幽玄で詩的な長回しの一つとして輝いています。",
                        "山椒大夫はSFアニメーションです。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurate cinematic analysis translation."
                },
                {
                    "prompt": "Which legendary Japanese actress starred in Mizoguchi's greatest feminist historical tragedies, including *The Life of Oharu* and *Ugetsu*?",
                    "options": [
                        "原節子",
                        "田中絹代 (Kinuyo Tanaka)",
                        "吉永小百合",
                        "高峰秀子"
                    ],
                    "answerIndex": 1,
                    "explanation": "田中絹代 (Kinuyo Tanaka)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u25-l4": {
        "id": "ja-u25-l4",
        "unit": "ja-u25",
        "level": "C2",
        "objective": "Hand-Drawn Anime Humanism: Hayao Miyazaki and Studio Ghibli (宮崎駿 - 『千と千尋の神隠し』2002年ベルリン金熊賞＆アカデミー長編アニメ映画賞、『君たちはどう生きるか』、自然信仰、飛行艇、反戦エコロジー).",
        "presentation": {
            "explanation": "Hayao Miyazaki (宮崎駿 - 1941–present - Tokyo) and the worldwide triumph of hand-drawn animation:\n- **Hayao Miyazaki (Co-founder of Studio Ghibli - スタジオジブリ 1985)**:\n  - The undisputed Walt Disney and Akira Kurosawa of animation; awarded 2 competitive Academy Awards (Oscars) for Best Animated Feature and an Academy Honorary Award (2014);\n  - Champion of artisanal hand-drawn cel animation (*手描きアニメーション*) over computer-generated CGI.\n- Historic Masterpieces:\n  - **«千と千尋の神隠し» (Spirited Away - 2001)**: The **only non-English, hand-drawn film to win the Academy Award (Oscar) for Best Animated Feature** and the **Golden Bear (金熊賞) at the Berlin International Film Festival**;\n  - **«もののけ姫» (Princess Mononoke - 1997)**: Epic confrontation between industrial ironworks (Lady Eboshi) and the primordial forest gods (*Kodama*, Deer God *Shishigami*);\n  - **«君たちはどう生きるか» (The Boy and the Heron - 2023)**: Won his second Oscar for Best Animated Feature;\n  - Recurring Thematic Motifs: Pacifism, ecological animism (Shinto kami), soaring flight mechanics (*Hikōtei*), and fiercely independent female protagonists.",
            "examples": [
                {
                    "target": "宮崎駿の『千と千尋の神隠し』や『もののけ姫』は、手描きアニメーションの緻密な職人技とアニミズム的自然観で世界最高峰の評価を獲得しました。",
                    "reading": "Miyazaki Hayao no Sen to Chihiro no Kamikakushi ya...",
                    "translation": "Hayao Miyazaki's \"Spirited Away\" and \"Princess Mononoke\" attained the highest global acclaim through meticulous hand-drawn artisan animation and animistic ecological vision."
                }
            ],
            "mnemonics": [
                "宮崎駿 (Hayao Miyazaki & Studio Ghibli 1985)! 千と千尋の神隠し (Spirited Away - Oscar & Berlin Golden Bear)! もののけ姫! 君たちはどう生きるか (The Boy and the Heron)! 手描きアニメ!"
            ],
            "culturalNotes": [
                "Miyazaki refused to attend the 2003 Academy Awards ceremony in Los Angeles in protest against the US military invasion of Iraq, later explaining: *\"I did not want to visit a country that was bombing Iraq.\"*"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which Studio Ghibli director won the Berlin Golden Bear and two Academy Awards for Best Animated Feature for \"Spirited Away\" and \"The Boy and the Heron\"?",
                    "options": [
                        "庵野秀明 (124.1)",
                        "新海誠 (124.2)",
                        "宮崎駿 (Hayao Miyazaki) (124.3)",
                        "高畑勲 (124.4)"
                    ],
                    "answerIndex": 2,
                    "explanation": "宮崎駿 (Hayao Miyazaki)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What traditional artistic production philosophy defines Hayao Miyazaki's studio work, prioritizing human pencil craftsmanship over 3D computer graphics?",
                    "options": [
                        "モーションキャプチャのみ (124.1)",
                        "手描きアニメーション (Meticulous hand-drawn 2D animation) (124.2)",
                        "生成AI動画 (124.3)",
                        "フル3D CGI (124.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "手描きアニメーション."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Princess Mononoke rejects simple good-versus-evil dualism, depicting the tragic conflict between human technological survival and ecological preservation.\"",
                    "options": [
                        "宮崎駿は飛行機のデザインを強く嫌悪しています。",
                        "『もののけ姫』は単純な善悪二元論を排し、人類の技術的生存と生態系の保全との間の悲劇的な葛藤を描き出しています。",
                        "スタジオジブリは2020年に設立されました。",
                        "千と千尋の神隠しは実写のドキュメンタリー映画です。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurate anime analysis translation."
                },
                {
                    "prompt": "Which 2023 semi-autobiographical Studio Ghibli feature film won Hayao Miyazaki his second Academy Award for Best Animated Feature at age 83?",
                    "options": [
                        "『君たちはどう生きるか』 (The Boy and the Heron)",
                        "『ハウルの動く城』",
                        "『崖の上のポニョ』",
                        "『風立ちぬ』"
                    ],
                    "answerIndex": 0,
                    "explanation": "『君たちはどう生きるか』."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u25-l5": {
        "id": "ja-u25-l5",
        "unit": "ja-u25",
        "level": "C2",
        "objective": "C2 synthesis on Contemporary Japanese Humanism: Hirokazu Kore-eda and Ryusuke Hamaguchi (是枝裕和 - 『万引き家族』2018年カンヌ最高賞パルム・ドール、『誰も知らない』、濱口竜介 - 『ドライブ・マイ・カー』2021年カンヌ脚本賞＆米アカデミー国際長編映画賞、チェーホフの劇中劇).",
        "presentation": {
            "explanation": "Hirokazu Kore-eda and Ryusuke Hamaguchi as the leading figures of 21st-century Japanese auteur cinema:\n- **Hirokazu Kore-eda (是枝裕和 - 1962–present - Tokyo)**:\n  - The heir to Ozu and Mikio Naruse; master of gentle, documentary-style human empathy and critique of modern social safety nets.\n  - Masterpiece: **«万引き家族» (Shoplifters - 2018)**: Won the **Palme d'Or (パルム・ドール) at the Cannes Film Festival**; exploring a makeshift, non-biological chosen family of societal outcasts bound together by love and petty shoplifting; *«誰も知らない» (Nobody Knows - 2004)* (14-year-old Yūya Yagira winning Best Actor at Cannes).\n- **Ryusuke Hamaguchi (濱口竜介 - 1978–present - Kanagawa)**:\n  - Master of hypnotic text-driven cinema, multi-lingual rehearsals, and psychological grief.\n  - Masterpiece: **«ドライブ・マイ・カー» (Drive My Car - 2021 - based on Haruki Murakami's short story)**: Won the **Academy Award (Oscar) for Best International Feature Film**, Cannes Best Screenplay, and Golden Globe; a 3-hour meditation inside a red Saab 900 weaving multilingual stagings of Anton Chekhov's *Uncle Vanya*.",
            "examples": [
                {
                    "target": "是枝裕和の『万引き家族』によるカンヌ最高賞パルム・ドール受賞と、濱口竜介の『ドライブ・マイ・カー』の米アカデミー賞受賞は、現代日本映画の知性と人間主義を世界に証明しました。",
                    "reading": "Kore-eda Hirokazu no Manbiki Kazoku ni yoru...",
                    "translation": "Hirokazu Kore-eda's Palme d'Or at Cannes for \"Shoplifters\" and Ryusuke Hamaguchi's Academy Award for \"Drive My Car\" proved the intellect and humanism of contemporary Japanese cinema to the world."
                }
            ],
            "mnemonics": [
                "是枝裕和 (Hirokazu Kore-eda & Shoplifters 2018 Palme d'Or)! 濱口竜介 (Ryusuke Hamaguchi & Drive My Car 2021 Oscar)! 村上春樹 & 赤いサーブ900!"
            ],
            "culturalNotes": [
                "In *Drive My Car*, Hamaguchi staged Chekhov's *Uncle Vanya* with actors speaking Japanese, Korean, Mandarin, German, Tagalog, and Korean Sign Language simultaneously on stage."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which Japanese director won the Palme d'Or at the Cannes Film Festival in 2018 for the masterpiece \"Shoplifters\" (万引き家族)?",
                    "options": [
                        "是枝裕和 (Hirokazu Kore-eda) (125.1)",
                        "濱口竜介 (125.2)",
                        "河瀬直美 (125.3)",
                        "北野武 (125.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "是枝裕和 (Hirokazu Kore-eda)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Which 2021 three-hour film by Ryusuke Hamaguchi, adapted from a Haruki Murakami story, won the Academy Award for Best International Feature?",
                    "options": [
                        "『偶然と想像』 (125.1)",
                        "『悪は存在しない』 (125.2)",
                        "『寝ても覚めても』 (125.3)",
                        "『ドライブ・マイ・カー』 (Drive My Car) (125.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "『ドライブ・マイ・カー』 (Drive My Car)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Drive My Car utilizes long conversational journeys inside a red vintage car to unpack traumatic grief, guilt, and emotional reconciliation through Chekhov's dialogues.\"",
                    "options": [
                        "『ドライブ・マイ・カー』は、赤いヴィンテージカーの中での長時間の対話の旅を通じて、チェーホフの台詞を交えながらトラウマ的な喪失、罪悪感、そして感情の和解を解き明かします。",
                        "是枝裕和の映画はすべて英語で吹き替えられています。",
                        "万引き家族はカーアクション映画です。",
                        "濱口竜介はサイレント映画しか監督しません。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurate contemporary cinema analysis translation."
                },
                {
                    "prompt": "What iconic red Swedish automobile serves as the traveling confessional sanctuary in Ryusuke Hamaguchi's *Drive My Car*?",
                    "options": [
                        "ボルボ・240",
                        "フォルクスワーゲン・ビートル",
                        "トヨタ・カローラ",
                        "サーブ・900 ターボ (Saab 900 Turbo)"
                    ],
                    "answerIndex": 3,
                    "explanation": "サーブ・900 (Saab 900)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u26-l1": {
        "id": "ja-u26-l1",
        "unit": "ja-u26",
        "level": "C1",
        "objective": "The Sacred Mask & The Flower of Yūgen: Zeami and Noh Theatre (世阿弥 - 能楽の大成者、観阿弥、『風姿花伝』「秘すれば花」「初心忘るべからず」、幽玄の美、能面、橋掛かり、シテとワキ、無形文化遺産).",
        "presentation": {
            "explanation": "Zeami Motokiyo (世阿弥 元清 - 1363–1443 - Kyoto & Sado Island) and the transcendental aesthetics of Noh (能楽):\n- **Zeami Motokiyo (alongside his father Kan'ami - 観阿弥)**:\n  - Perfected **Noh (能)** into the world's oldest continuous theatrical tradition (UNESCO Masterpiece of Oral and Intangible Heritage of Humanity);\n  - Patronized by Shogun Ashikaga Yoshimitsu during the Muromachi period.\n- The Foundational Treatise: **«風姿花伝» (Fūshikaden / The Transmission of the Flower - 1402)**:\n  - World's first comprehensive manual of acting and dramatic aesthetics;\n  - The Aphorisms: **「秘すれば花」** (*\"If it is hidden, it is a flower; if it is not hidden, it cannot be a flower\"* — the supreme power of subtle mystery and withholding) & **「初心忘るべからず」** (*\"Never forget the beginner's mind\"* — embracing humility and growth at every stage of age and mastery);\n- Stage Architecture & Roles:\n  - **The Hashigakari (橋掛かり - Bridgeway)**: The roofed wooden corridor connecting the mortal dressing room (*Kagami-no-ma* / Mirror Room) to the sacred pine-painted stage, representing the boundary between this world and the spirit realm;\n  - **Noh Masks (能面 - Nohmen)**: Carved cypress masks (Hannya, Ko-omote) exhibiting *Teru* (tilting up to smile) and *Kumoru* (tilting down to express weeping grief);\n  - Roles: **Shite (シテ - Protagonist/Ghost)** and **Waki (ワキ - Witness/Traveling Priest)**.",
            "examples": [
                {
                    "target": "世阿弥は『風姿花伝』で「秘すれば花」「初心忘るべからず」と説き、能楽を幽玄の美の極致へと昇華させました。",
                    "reading": "Zeami wa Fūshikaden de hisureba hana...",
                    "translation": "In Fūshikaden, Zeami taught \"If it is hidden, it is a flower\" and \"Never forget the beginner's mind,\" sublimating Noh theater to the ultimate peak of Yūgen beauty."
                }
            ],
            "mnemonics": [
                "世阿弥 (Zeami & Fūshikaden 1402)! 「秘すれば花」 (If hidden, it is a flower)! 「初心忘るべからず」! 橋掛かり (Hashigakari bridgeway)! シテ (Shite) & ワキ (Waki)!"
            ],
            "culturalNotes": [
                "The single pine tree painted on the back wall (*Kagami-ita*) of every Noh stage represents the sacred Yogo Pine Tree at Kasuga Shrine in Nara, where the gods descended to watch the first performance."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which master dramatist and actor perfected classical Noh theatre and authored the seminal aesthetic treatise \"Fūshikaden\" in 1402?",
                    "options": [
                        "近松門左衛門 (126.1)",
                        "出雲阿国 (126.2)",
                        "坂東玉三郎 (126.3)",
                        "世阿弥 (Zeami Motokiyo) (126.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "世阿弥 (Zeami Motokiyo)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What famous aesthetic maxim in Zeami's *Fūshikaden* asserts that keeping artistic subtlety concealed creates the true \"flower\" of beauty?",
                    "options": [
                        "「花鳥風月」 (126.1)",
                        "「秘すれば花」 (Hisureba hana / If it is hidden, it is a flower) (126.2)",
                        "「一期一会」 (126.3)",
                        "「温故知新」 (126.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "「秘すれば花」."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"The Hashigakari bridgeway in Noh theatre serves not merely as an actor's entrance, but as a metaphysical corridor linking the world of the living with the spirit realm.\"",
                    "options": [
                        "初心忘るべからずは料理の本の言葉です。",
                        "能楽は20世紀にアメリカで発明されました。",
                        "世阿弥は歌舞伎の女形でした。",
                        "能舞台の橋掛かりは単なる役者の入退場口ではなく、現世と霊界を結ぶ形而上学的な回廊として機能します。"
                    ],
                    "answerIndex": 3,
                    "explanation": "Accurate Noh theatre analysis translation."
                },
                {
                    "prompt": "What are the primary performance roles in a classical Noh play representing the protagonist (often a ghost or deity) and the witnessing traveler/priest?",
                    "options": [
                        "太夫 と 三味線",
                        "立役 と 女形",
                        "シテ (Shite) と ワキ (Waki)",
                        "主役 と 脇役"
                    ],
                    "answerIndex": 2,
                    "explanation": "シテ (Shite) と ワキ (Waki)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u26-l2": {
        "id": "ja-u26-l2",
        "unit": "ja-u26",
        "level": "C1",
        "objective": "Kabuki Grandeur, Onnagata & Mie Poses: Izumo no Okuni and The Kabuki-za (出雲阿国 - 歌舞伎の創始、歌舞伎座、女形（おんながた）の美学 - 坂東玉三郎、見得（みえ）を切る、隈取（くまどり）、花道（はなみち）、人間国宝).",
        "presentation": {
            "explanation": "The dynamic world of Kabuki (歌舞伎) from Edo street revolution to Living National Treasures:\n- **Origins & Evolution**:\n  - Founded in Kyoto in 1603 by **Izumo no Okuni (出雲阿国)** as an avant-garde female riverbed dance troupe (*Kabuki Odori* - from *kabuku*, \"to lean, slant, or be wildly eccentric\");\n  - Evolved into all-male professional classical theater during the Edo period.\n- Stylistic Conventions & Stage Machinery:\n  - **The Hanamichi (花道 - Flower Path)**: Raised wooden walkway running through the audience from the back of the auditorium directly onto the stage, used for dramatic entrances and exits;\n  - **The Mie Pose (見得を切る)**: The actor freezes in an exaggerated sculptural pose, crossing their eyes (*Miwatashi*) to the sharp clacking of wooden clappers (*Tsuke*), focusing the audience's psychological tension at dramatic peaks;\n  - **Kumadori (隈取 - Stylized Makeup)**: Red lines (*Aragoto* righteous strength, justice, hero), Blue/black lines (*Kugeaku* demonic villainy, ghosts), Brown lines (monsters/beasts);\n  - **Onnagata (女形 - Male Actors of Female Roles)**: Refined into sublime archetypes of feminine elegance and tragic grace by Living National Treasures such as **Bandō Tamasaburō V (五代目 坂東玉三郎)**.",
            "examples": [
                {
                    "target": "歌舞伎は出雲阿国の創始から歌舞伎座の舞台へと受け継がれ、花道、隈取、そして坂東玉三郎の至高の女形芸によって世界の観客を魅了しています。",
                    "reading": "Kabuki wa Izumo no Okuni no sōshi kara...",
                    "translation": "From Izumo no Okuni's founding to the Kabuki-za stage, Kabuki has enchanted world audiences through the Hanamichi, Kumadori makeup, and Bando Tamasaburo's supreme Onnagata artistry."
                }
            ],
            "mnemonics": [
                "出雲阿国 (Izumo no Okuni 1603 founding)! 見得を切る (Mie pose freezing action with Tsuke wooden clappers)! 隈取 (Red = hero, Blue = villain)! 花道 (Hanamichi walkway)! 坂東玉三郎 (Onnagata)!"
            ],
            "culturalNotes": [
                "During dramatic moments, audience members seated in the upper balcony shout out the actor's traditional lineage house name (such as *«Omodakaya!»* or *«Naritaya!»*) in a practice known as **Kakegoe (掛け声)**."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which legendary 17th-century female performer founded Kabuki dancing on the dry riverbeds of the Kamo River in Kyoto in 1603?",
                    "options": [
                        "出雲阿国 (Izumo no Okuni) (127.1)",
                        "清少納言 (127.2)",
                        "静御前 (127.3)",
                        "紫式部 (127.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "出雲阿国 (Izumo no Okuni)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What color of Kumadori facial makeup in Kabuki represents righteous heroic strength and divine justice in *Aragoto* plays?",
                    "options": [
                        "赤色 (Red makeup) (127.1)",
                        "青色 (Blue) (127.2)",
                        "緑色 (Green) (127.3)",
                        "黒色 (Black) (127.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "赤色 (Red makeup)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"The actor executes a dramatic Mie pose on the Hanamichi walkway, freezing in powerful visual tension accompanied by the sharp clack of wooden clappers.\"",
                    "options": [
                        "歌舞伎座は京都にある寺院です。",
                        "女形は女性だけが演じる役柄です。",
                        "役者は花道の上で劇的な見得を切り、ツケ木の鋭い打音とともに力強い視覚的緊張感の中に静止します。",
                        "隈取は現代のCG技術です。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurate Kabuki performance translation."
                },
                {
                    "prompt": "Which contemporary Living National Treasure is universally celebrated as the supreme master of the *Onnagata* (female roles) in Japanese Kabuki?",
                    "options": [
                        "市川海老蔵",
                        "五代目 坂東玉三郎 (Bandō Tamasaburō V)",
                        "松本幸四郎",
                        "中村勘三郎"
                    ],
                    "answerIndex": 1,
                    "explanation": "坂東玉三郎 (Bandō Tamasaburō)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u26-l3": {
        "id": "ja-u26-l3",
        "unit": "ja-u26",
        "level": "C1",
        "objective": "The Shakespeare of Japan & The Art of Bunraku: Chikamatsu Monzaemon (近松門左衛門 - 『曽根崎心中』1703、『心中天網島』、人形浄瑠璃（文楽）、太夫・三味線・三人遣い、義理と人情の葛藤、虚実皮膜の論).",
        "presentation": {
            "explanation": "Chikamatsu Monzaemon (近松門左衛門 - 1653–1725 - Osaka & Kyoto) and puppet theater (*Ningyō Jōruri* / Bunraku):\n- **Chikamatsu Monzaemon (The \"Shakespeare of Japan\")**:\n  - The supreme dramatist of the Edo merchant renaissance (*Genroku culture*);\n- Dramatic Philosophy: **«虚実皮膜の論» (The Theory of the Membrane between Truth and Fiction)**:\n  - Chikamatsu argued that art is not a literal photographic copy of reality, nor pure fantasy, but lives on the delicate, translucent skin (*Pimaku*) suspended between truth (*Kyo*) and fiction (*Jitsu*);\n- The Masterpiece: **«曽根崎心中» (The Love Suicides at Sonezaki - 1703)**:\n  - Pioneered the **Shinjū (心中 - Double Love Suicide)** genre based on real merchant scandals in Osaka;\n  - Follows clerk Tokubei and courtesan Ohatsu trapped by financial debt, treachery, and social duty (**Giri 義理**) choosing to die together in Sonezaki Forest to be united in the Pure Land of the Buddha (**Ninjō 人情**);\n- The 3 Pillars of Bunraku (文楽):\n  - **Tayū (太夫)**: The solo chanter who voices all male, female, and supernatural characters with extreme vocal modulation;\n  - **Shamisen (三味線)**: Driving emotional tempo with heavy ivory plectrum (*Bachi*);\n  - **Sannin-zukai (三人遣い - 3-Person Puppetry)**: Omozukai (head & right arm), Hidarizukai (left arm), Ashizukai (legs/feet).",
            "examples": [
                {
                    "target": "近松門左衛門は『曽根崎心中』で義理と人情の悲劇的葛藤を描き、「虚実皮膜の論」によって文楽と日本演劇の理論的基礎を確立しました。",
                    "reading": "Chikamatsu Monzaemon wa Sonezaki Shinjū de...",
                    "translation": "Chikamatsu Monzaemon depicted the tragic conflict of Giri and Ninjo in \"The Love Suicides at Sonezaki,\" establishing the theoretical foundation of Bunraku through his \"Theory of the Membrane between Truth and Fiction.\""
                }
            ],
            "mnemonics": [
                "近松門左衛門 (The Shakespeare of Japan)! 曽根崎心中 1703 (Tokubei & Ohatsu)! 義理 (Social duty) vs 人情 (Human passion)! 虚実皮膜の論! 文楽の三人遣い (3-person puppetry)!"
            ],
            "culturalNotes": [
                "The public craze for Chikamatsu's love-suicide plays was so intense that the Tokugawa Shogunate formally banned all *Shinjū-mono* plays in 1723 to prevent copycat suicides."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which Edo period dramatist, hailed as the \"Shakespeare of Japan\", wrote \"The Love Suicides at Sonezaki\" (1703) for puppet theater?",
                    "options": [
                        "近松門左衛門 (Chikamatsu Monzaemon) (128.1)",
                        "世阿弥 (128.2)",
                        "井原西鶴 (128.3)",
                        "松尾芭蕉 (128.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "近松門左衛門 (Chikamatsu Monzaemon)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What fundamental aesthetic theory did Chikamatsu Monzaemon formulate, stating that true art exists on the razor-thin membrane between truth and fiction?",
                    "options": [
                        "虚実皮膜の論 (Kyojitsu Himaku no Ron) (128.1)",
                        "侘び寂びの論 (128.2)",
                        "物哀の論 (128.3)",
                        "幽玄の美 (128.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "虚実皮膜の論."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"In Bunraku puppet theater, three synchronized puppeteers operate a single life-sized puppet in seamless unison while the Tayu chanter narrates every character's voice.\"",
                    "options": [
                        "曽根崎心中は現代のSF小説です。",
                        "文楽の人形劇では、太夫がすべての登場人物の声を語り分ける中、息の合った三人の人形遣いが一体の人形を滑らかに操ります。",
                        "文楽の人形はすべて機械で自動的に動きます。",
                        "近松門左衛門は映画の脚本家でした。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurate Bunraku theater analysis translation."
                },
                {
                    "prompt": "What central Japanese dramatic conflict between external societal duty/honor and authentic inner human love/passion drives Chikamatsu's plays?",
                    "options": [
                        "義理（Giri）と人情（Ninjō）の葛藤",
                        "主君と家臣",
                        "金銭と権力",
                        "武士道と仏教"
                    ],
                    "answerIndex": 0,
                    "explanation": "義理（Giri）と人情（Ninjō）の葛藤."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u26-l4": {
        "id": "ja-u26-l4",
        "unit": "ja-u26",
        "level": "C2",
        "objective": "Post-War Avant-Garde & The Body's Rebellion: Butoh Dance and Hijikata Tatsumi (暗黒舞踏 - 土方巽『禁色』1959、大野一雄、肉体の反逆、白塗りと歪んだ肉体言語、アングラ演劇 - 寺山修司「天井桟敷」、唐十郎「紅テント」).",
        "presentation": {
            "explanation": "The revolutionary explosion of post-war Japanese avant-garde performance: Butoh (暗黒舞踏) and Angura Underground Theatre:\n- **Butoh (暗黒舞踏 - Ankoku Butoh / Dance of Darkness)**:\n  - Founded in 1959 by **Tatsumi Hijikata (土方巽)** with his shocking premiere *«禁色» (Kinjiki / Forbidden Colors - based on Yukio Mishima's novel)* and lifelong collaborator **Kazuo Ohno (大野一雄)**;\n  - Total rejection of Western ballet and traditional Japanese classical dance; stripping away graceful harmony to confront primal human mortality, post-atomic trauma, and the abject body;\n  - Aesthetics: Performers covered in chalky white body paint (*Shironuri*), shaved heads, inward-curled claw-like fingers, contorted spines, and agonizingly slow micro-movements expressing the primal cries of the subconscious flesh.\n- **The Angura (アングラ) Underground Theatrical Revolution (1960s–1970s)**:\n  - **Shūji Terayama (寺山修司)** and his radical theatre company **Tenjō Sajiki (天井桟敷)**: City-wide guerrilla street theatre (*Shigai-geki*), surrealist circus parades, and poetic subversion;\n  - **Jūrō Kara (唐十郎)** and the **Red Tent (紅テント / Jōkyō Gekijō)**: Mobile red tent erected in shrine courtyards without government permission.",
            "examples": [
                {
                    "target": "土方巽と大野一雄による暗黒舞踏と寺山修司の天井桟敷は、白塗りの肉体の反逆とアングラ演劇によって世界のアート界に衝撃を与えました。",
                    "reading": "Hijikata Tatsumi to Ōno Kazuo ni yoru...",
                    "translation": "Ankoku Butoh by Tatsumi Hijikata and Kazuo Ohno, along with Shuji Terayama's Tenjo Sajiki, shocked the world art scene through the rebellion of the white-painted flesh and underground Angura theater."
                }
            ],
            "mnemonics": [
                "土方巽 (Tatsumi Hijikata & Ankoku Butoh 1959)! 大野一雄 (Kazuo Ohno)! 白塗り (Shironuri white body paint & body rebellion)! 寺山修司 (Shuji Terayama & 天井桟敷)! 唐十郎 (Red Tent)!"
            ],
            "culturalNotes": [
                "Kazuo Ohno continued performing Butoh across Europe, America, and Japan well past his 100th birthday, dancing on stage from a wheelchair with poetic, expressive hand movements."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which radical Japanese performance art form, known as the \"Dance of Darkness\" with chalk-white bodies and contorted physical language, was founded in 1959 by Tatsumi Hijikata?",
                    "options": [
                        "文楽 (129.1)",
                        "狂言 (129.2)",
                        "暗黒舞踏 (Ankoku Butoh) (129.3)",
                        "能楽 (129.4)"
                    ],
                    "answerIndex": 2,
                    "explanation": "暗黒舞踏 (Ankoku Butoh)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Which visionary avant-garde poet and dramatist founded the experimental underground theatre troupe \"Tenjō Sajiki\" in 1967?",
                    "options": [
                        "鈴木忠志 (129.1)",
                        "寺山修司 (Shūji Terayama) (129.2)",
                        "別役実 (129.3)",
                        "唐十郎 (129.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "寺山修司 (Shūji Terayama)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Ankoku Butoh rejected Western classical symmetry and modern commercialism to explore the primal, contorted vulnerability of the post-war Japanese body through white paint and slow movement.\"",
                    "options": [
                        "暗黒舞踏は西洋の古典的対称性と近代の商業主義を拒絶し、白塗りと緩慢な動作を通じて戦後日本の肉体が持つ根源的で歪曲した脆さを探求しました。",
                        "寺山修司は銀行員として一生を過ごしました。",
                        "大野一雄はプロのオペラ歌手でした。",
                        "暗黒舞踏はハワイのフラダンスの一種です。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurate Butoh analysis translation."
                },
                {
                    "prompt": "Which 1959 novel by Yukio Mishima provided the title and inspiration for Tatsumi Hijikata's groundbreaking debut Butoh performance?",
                    "options": [
                        "『潮騒』",
                        "『金閣寺』",
                        "『仮面の告白』",
                        "『禁色』 (Forbidden Colors)"
                    ],
                    "answerIndex": 3,
                    "explanation": "『禁色』 (Forbidden Colors)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u26-l5": {
        "id": "ja-u26-l5",
        "unit": "ja-u26",
        "level": "C2",
        "objective": "C2 synthesis on Global Actor Training & Physical Energy: Tadashi Suzuki and The Suzuki Method (鈴木忠志 - 鈴木メソッド（SCOT - 劇団創造舞台）、利賀村の国際演劇祭、足拍子と重心の身体訓練、古代ギリシャ悲劇の再解釈『トロイアの女』、世界の名門演劇学校).",
        "presentation": {
            "explanation": "Tadashi Suzuki (鈴木忠志 - 1939–present - Shizuoka, Tokyo & Toga Village) and the world-renowned Suzuki Method of Actor Training:\n- **Tadashi Suzuki (鈴木忠志)**:\n  - Founder of the **Suzuki Company of Toga (SCOT)** and co-founder of the Theatre Olympics;\n  - Built a world-famous theatrical sanctuary in the remote mountainous village of **Toga (利賀村)** in Toyama Prefecture, converting traditional steep-thatched *Gasshō-zukuri* farmhouses into open-air amphitheaters overlooking lakes.\n- The Revolutionary **Suzuki Actor Training Method (スズキ・トレーニング・メソッド)**:\n  - Taught in premier drama conservatories across the globe (Juilliard, Royal Shakespeare Company, Moscow Art Theatre, Columbia University);\n  - Focuses on the actor's lower body, pelvic center of gravity (*Tanden* / 丹田), and stamping feet (**Ashi-byōshi / 足拍子**), reconnecting the human actor with the raw kinetic energy of the earth;\n  - Dismantles psychological naturalism in favor of explosive vocal projection, stillness, and volcanic physical discipline;\n  - Monumental Reinterpretations of Classical Tragedy: *«トロイアの女» (The Trojan Women)*, *«ディオニュソス» (Dionysus)*, and *«リア王» (King Lear)*.",
            "examples": [
                {
                    "target": "鈴木忠志は利賀村から発信した「スズキ・メソッド」の足拍子と身体重心訓練によって、世界中の名門演劇学校と現代演劇の身体観を根底から革新しました。",
                    "reading": "Suzuki Tadashi wa Toga-mura kara...",
                    "translation": "Originating from Toga Village, Tadashi Suzuki fundamentally transformed physical training in world drama schools through the foot-stamping and pelvic grounding of the Suzuki Method."
                }
            ],
            "mnemonics": [
                "鈴木忠志 (Tadashi Suzuki & SCOT)! 利賀村 (Toga Village mountain theater)! スズキ・メソッド (Suzuki Actor Training Method)! 足拍子 & 丹田 (Foot stamping & pelvic center)! The Trojan Women!"
            ],
            "culturalNotes": [
                "The Toga International Arts Festival, founded by Suzuki in 1982, was the very first international theatre festival held in Japan, drawing world directors, critics, and actors to the Toyama mountains every summer."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which internationally acclaimed Japanese theatre director founded SCOT in Toga Village and created the world-famous \"Suzuki Method of Actor Training\"?",
                    "options": [
                        "鈴木忠志 (Tadashi Suzuki) (130.1)",
                        "蜷川幸雄 (130.2)",
                        "平田オリザ (130.3)",
                        "野田秀樹 (130.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "鈴木忠志 (Tadashi Suzuki)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What anatomical focus and physical action defines the core of the Suzuki Method, cultivating vocal power and stage presence through the earth?",
                    "options": [
                        "手先の指先の体操 (130.1)",
                        "笑顔の表情筋訓練 (130.2)",
                        "無音の瞑想のみ (130.3)",
                        "足拍子と骨盤の重心（丹田）の訓練 (Foot stamping and pelvic center grounding) (130.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "足拍子と骨盤の重心（丹田）の訓練."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"The Suzuki Method reclaims the actor's volcanic physical presence by anchoring vocal resonance in intense lower-body stamping and grounded pelvic discipline.\"",
                    "options": [
                        "利賀村は東京の地下鉄駅です。",
                        "トロイアの女は日本の江戸時代のアニメです。",
                        "鈴木忠志はテレビドラマのプロデューサーでした。",
                        "スズキ・メソッドは、下半身の力強い足拍子と安定した骨盤の規律に声の共鳴を根付かせることで、役者の持つ爆発的な身体的存在感を回復させます。"
                    ],
                    "answerIndex": 3,
                    "explanation": "Accurate theatrical training analysis translation."
                },
                {
                    "prompt": "In which remote mountainous prefecture of Japan did Tadashi Suzuki build the international open-air amphitheater complex of SCOT?",
                    "options": [
                        "長野県軽井沢",
                        "北海道ニセコ",
                        "富山県利賀村 (Toga Village, Toyama Prefecture)",
                        "京都府美山"
                    ],
                    "answerIndex": 2,
                    "explanation": "富山県利賀村 (Toga Village, Toyama Prefecture)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u27-l1": {
        "id": "ja-u27-l1",
        "unit": "ja-u27",
        "level": "C1",
        "objective": "The Nightingale of the World: Miura Tamaki and Madama Butterfly (三浦環 - プッチーニ『蝶々夫人』の世界的名ソプラノ、プッチーニ本人からの絶賛、ロンドン・メトロポリタン歌劇場、長崎グラバー園、日本のオペラ黎明期).",
        "presentation": {
            "explanation": "Tamaki Miura (三浦環 - 1884–1946 - Tokyo & Nagasaki) and the dawn of Japanese opera on the world stage:\n- **Tamaki Miura (三浦環)**:\n  - The first Japanese opera singer to achieve international superstardom; studied at the Tokyo Music School (now Tokyo University of the Arts - 芸大);\n- The Definitive «Madama Butterfly» (Puccini's 蝶々夫人):\n  - Performed the role of **Cio-Cio-San (Madama Butterfly)** over **2,000 times** on the greatest opera stages across Europe and the United States (London Royal Opera House Covent Garden 1915, Metropolitan Opera in New York, Chicago, Rome, Milan);\n  - **Giacomo Puccini's Personal Acclamation**: When Puccini heard Miura perform Cio-Cio-San in Rome in 1920, the composer embraced her, declaring: *\"This is the exact Cio-Cio-San that I saw in my imagination when I composed the opera!\"*;\n  - Authentic Japanese Costumes & Gestures: Brought authentic silk kimonos, traditional hair styling, and delicate Japanese physical mannerisms to Western opera houses, humanizing the role beyond Western orientalism;\n  - Memorial: A bronze statue of Miura Tamaki looking out over Nagasaki Bay stands in Glover Garden (*グラバー園*).",
            "examples": [
                {
                    "target": "三浦環はプッチーニの『蝶々夫人』を欧米で二千回以上歌い、作曲者本人から「私の思い描いた通りの蝶々さん」と激賞された日本初の国際的オペラ歌手です。",
                    "reading": "Miura Tamaki wa Puttsīni no Chōchō Fujin wo...",
                    "translation": "Tamaki Miura sang Puccini's \"Madama Butterfly\" over 2,000 times across Europe and America, praised by the composer himself as \"the exact Butterfly I imagined,\" as Japan's first international opera singer."
                }
            ],
            "mnemonics": [
                "三浦環 (Tamaki Miura & Madama Butterfly over 2,000 times)! Giacomo Puccini's personal embrace in Rome 1920! Glover Garden statue in Nagasaki! First Japanese international opera diva!"
            ],
            "culturalNotes": [
                "Puccini's *Madama Butterfly* was inspired in part by Nagasaki's Glover Garden estate and traditional Japanese folk melodies (such as *Sakura Sakura* and *Echigo Jishi*) woven into the orchestral score."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which pioneer Japanese soprano became a world opera legend, performing Puccini's \"Madama Butterfly\" over 2,000 times at Covent Garden and the Met?",
                    "options": [
                        "中丸三千繪 (131.1)",
                        "森麻季 (131.2)",
                        "東敦子 (131.3)",
                        "三浦環 (Tamaki Miura) (131.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "三浦環 (Tamaki Miura)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "In which historic Nagasaki hilltop garden overlooking the harbor does a memorial bronze statue of Tamaki Miura and Puccini stand?",
                    "options": [
                        "グラバー園 (Glover Garden) (131.1)",
                        "大浦天主堂 (131.2)",
                        "出島 (131.3)",
                        "平和公園 (131.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "グラバー園 (Glover Garden)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Tamaki Miura imbued Puccini's tragic heroine with authentic Japanese dignity, vocal nuance, and traditional silk attire, dismantling exotic Western caricatures on world stages.\"",
                    "options": [
                        "グラバー園は東京の地下街です。",
                        "三浦環はプロの歌舞伎役者でした。",
                        "三浦環はプッチーニの悲劇のヒロインに本物の日本の気品と繊細な歌唱、伝統的な着物を吹き込み、世界の舞台における西洋のエキゾチックな偏見を打破しました。",
                        "蝶々夫人はモーツァルトが作曲した喜劇です。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurate Japanese operatic analysis translation."
                },
                {
                    "prompt": "What legendary Italian opera composer personally embraced Tamaki Miura in Rome in 1920, praising her as his idealized Cio-Cio-San?",
                    "options": [
                        "ジュゼッペ・ヴェルディ",
                        "ジャコモ・プッチーニ (Giacomo Puccini)",
                        "ジョアキーノ・ロッシーニ",
                        "ガエターノ・ドニゼッティ"
                    ],
                    "answerIndex": 1,
                    "explanation": "ジャコモ・プッチーニ (Giacomo Puccini)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u27-l2": {
        "id": "ja-u27-l2",
        "unit": "ja-u27",
        "level": "C1",
        "objective": "Modern Japanese Operatic Synthesis: Dan Ikuma and Yūzuru (團伊玖磨 - オペラ『夕鶴』1952、木下順二の戯曲『鶴の恩返し』、つうのアリア「与ひょう、私の大事な与ひょう」、五音音階と西洋和声の融合、新国立劇場).",
        "presentation": {
            "explanation": "Ikuma Dan (團伊玖磨 - 1924–2001 - Tokyo & Hachijō-jima) and the masterpiece of Japanese national opera:\n- **Ikuma Dan (團伊玖磨)**:\n  - Grandson of statesman Dan Takuma; student of Kosaku Yamada and Saburō Moroi; President of the Japan-China Cultural Exchange Association.\n- The National Masterpiece: **«夕鶴» (Yūzuru / Twilight Crane - Premiered January 30, 1952 in Osaka)**:\n  - The most performed and beloved domestic Japanese opera in history (performed over 800 times in Japan, Zurich, Milan, London, and New York);\n  - Libretto by **Junji Kinoshita** based on the ancient folk fable **«鶴の恩返し» (The Crane's Gratitude)**;\n  - Follows crane spirit **Tsū (つう)**, who assumes human form to marry poor peasant Yohyō after he removes an arrow from her wing; Tsū weaves exquisite thousand-feather brocade cloth (*Senba-ori*) from her own breast feathers at the cost of her life;\n  - Corrupt merchant Unzō tempts Yohyō with greed, driving Yohyō to force Tsū to weave more cloth to sell in Kyoto, until Tsū is discovered in her crane form and flies away into the snowy twilight sky forever;\n  - Tsū's Heartbreaking Aria: **「与ひょう、私の大事な与ひょう...」** (Yohyō, my precious Yohyō...);\n  - Masterful synthesis of Japanese pentatonic folk scales (*Yo-senpo* / *In-senpo*) with lush Western late-romantic orchestration.",
            "examples": [
                {
                    "target": "團伊玖磨のオペラ『夕鶴』は、木下順二の戯曲とつうの哀切なアリアを通じて、日本民話の美と近代の物欲批判を世界最高水準のオペラへと昇華させました。",
                    "reading": "Dan Ikuma no opera Yūzuru wa...",
                    "translation": "Ikuma Dan's opera \"Twilight Crane,\" through Junji Kinoshita's play and Tsu's sorrowful aria, sublimated Japanese folk beauty and the critique of modern greed into world-class opera."
                }
            ],
            "mnemonics": [
                "團伊玖磨 (Ikuma Dan & Yūzuru 1952)! 木下順二 (Junji Kinoshita & The Crane's Gratitude)! Tsū's Senba-ori brocade! 「与ひょう、私の大事な与ひょう」! Pentatonic scale + Western harmony!"
            ],
            "culturalNotes": [
                "Dan Ikuma personally conducted *Yūzuru* over 600 times across his lifetime, maintaining that Japanese opera must touch the core ethical soul of the folk community."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which master Japanese composer wrote the celebrated national opera \"Yūzuru\" (Twilight Crane) in 1952 based on Junji Kinoshita's play?",
                    "options": [
                        "團伊玖磨 (Ikuma Dan) (132.1)",
                        "山田耕筰 (132.2)",
                        "三善晃 (132.3)",
                        "武満徹 (132.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "團伊玖磨 (Ikuma Dan)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What traditional Japanese folk fable about a wounded animal transforming into a loving wife serves as the foundation for the opera *Yūzuru*?",
                    "options": [
                        "鶴の恩返し (The Crane's Gratitude) (132.1)",
                        "竹取物語 (The Tale of the Bamboo Cutter) (132.2)",
                        "桃太郎 (132.3)",
                        "浦島太郎 (132.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "鶴の恩返し (The Crane's Gratitude)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Yūzuru merges traditional Japanese pentatonic modes with rich Western orchestral counterpoint to dramatize the tragic loss of pure love to commercial greed.\"",
                    "options": [
                        "夕鶴は現代の東京を舞台にした電子音楽オペラです。",
                        "『夕鶴』は伝統的な日本の五音音階と豊かな西洋オーケストラの対位法を融合させ、商業的な強欲によって純粋な愛が失われる悲劇を描き出しています。",
                        "團伊玖磨は一度もオペラを作曲しませんでした。",
                        "木下順二はアメリカの小説家です。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurate Yūzuru operatic analysis translation."
                },
                {
                    "prompt": "What magical cloth is woven by the crane spirit Tsū from her own plucked feathers behind the closed door of the loom room in *Yūzuru*?",
                    "options": [
                        "千羽織（鶴の羽根で織った布）",
                        "金の絨毯",
                        "絹の着物",
                        "木綿の帯"
                    ],
                    "answerIndex": 0,
                    "explanation": "千羽織."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u27-l3": {
        "id": "ja-u27-l3",
        "unit": "ja-u27",
        "level": "C1",
        "objective": "The Titan of Modern Lyricism: Yamada Kōsaku and The National Anthem of Japanese Song (山田耕筰 - 日本近代音楽の父、オペラ『黒船』1940、歌曲『赤とんぼ』『からたちの花』、ベルリン・フィル初指揮、日本語の抑揚と西洋音楽の統合).",
        "presentation": {
            "explanation": "Kōsaku Yamada (山田耕筰 - 1886–1965 - Tokyo) and the foundation of Japanese Western classical music and art song:\n- **Kōsaku Yamada (日本近代音楽の父 / Father of Modern Japanese Classical Music)**:\n  - Studied at the Berlin Royal Academy of Music (Hochschule für Musik) under Max Bruch;\n  - In 1912, became the **first Japanese conductor in history to conduct the Berlin Philharmonic Orchestra** (performing his Symphony in F major *Triumph and Peace*);\n  - Founded the Japan Philharmonic and NHK Symphony Orchestra lineages.\n- Landmark Operatic & Art Song Masterpieces:\n  - **The Opera «黒船» (Kurofune / The Black Ships - 1940)**: Centered on Okichi (お吉) and American Consul Townsend Harris in Shimoda during the Bakumatsu era, fusing Wagnerian leitmotif technique with traditional shamisen *kouta* songs;\n  - **The Master of Nihon Kakyoku (日本歌曲 / Japanese Art Song)**: Collaborated with poet **Rofū Miki (三木露風)** to create immortal national art songs: **«赤とんぼ» (Akatonbo / Red Dragonfly - 1927)**, **«からたちの花» (Karatachi no Hana)**, and **«この道» (Kono Michi - poem by Hakushū Kitahara)**;\n  - Revolutionary Linguistic Principle: Perfected the natural melodic curvature of Japanese pitch accent (*Kōtei akusento*) within Western harmonic notation.",
            "examples": [
                {
                    "target": "山田耕筰は日本人として初めてベルリン・フィルを指揮し、オペラ『黒船』や歌曲『赤とんぼ』で日本語の高低アクセントと西洋音楽を完全統合しました。",
                    "reading": "Yamada Kōsaku wa Nihonjin to shite...",
                    "translation": "Kōsaku Yamada was the first Japanese conductor to lead the Berlin Philharmonic, perfectly integrating Japanese pitch accent with Western music in the opera \"The Black Ships\" and the song \"Red Dragonfly.\""
                }
            ],
            "mnemonics": [
                "山田耕筰 (Father of Japanese Classical Music & First to conduct Berlin Phil 1912)! オペラ『黒船』 (Kurofune 1940)! 『赤とんぼ』 (Red Dragonfly with Rofū Miki)! 『この道』!"
            ],
            "culturalNotes": [
                "*Akatonbo* (Red Dragonfly) was voted the #1 most beloved song of all time in a nationwide survey conducted by the Japanese Agency for Cultural Affairs."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which pioneer composer was the first Japanese musician to conduct the Berlin Philharmonic (1912) and composed the opera \"Kurofune\" and the song \"Akatonbo\"?",
                    "options": [
                        "山田耕筰 (Kōsaku Yamada) (133.1)",
                        "瀧廉太郎 (133.2)",
                        "信時潔 (133.3)",
                        "伊福部昭 (133.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "山田耕筰 (Kōsaku Yamada)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Which immortal 1927 Japanese art song by Yamada Kōsaku and poet Rofū Miki evokes nostalgic childhood memories of red dragonflies at sunset?",
                    "options": [
                        "『赤とんぼ』 (Akatonbo / Red Dragonfly) (133.1)",
                        "『早春賦』 (133.2)",
                        "『荒城の月』 (133.3)",
                        "『浜辺の歌』 (133.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "『赤とんぼ』 (Akatonbo)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Yamada Kōsaku aligned Western diatonic melodies with the natural pitch-accent contours of spoken Japanese, establishing the golden standard of modern Japanese art song.\"",
                    "options": [
                        "山田耕筰は西洋の全音階的旋律を日本語の自然な高低アクセントの輪郭と合致させ、近代日本歌曲の黄金律を打ち立てました。",
                        "赤とんぼはアメリカの民謡の翻訳です。",
                        "黒船は宇宙船のオペラです。",
                        "山田耕筰はベルリンに行ったことがない。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurate Yamada musicological analysis translation."
                },
                {
                    "prompt": "What 1940 opera by Yamada Kōsaku portrays the arrival of Commodore Perry and Consul Townsend Harris in 19th-century Shimoda?",
                    "options": [
                        "『夕鶴』",
                        "『修禅寺物語』",
                        "『春香』",
                        "『黒船』 (The Black Ships / Kurofune)"
                    ],
                    "answerIndex": 3,
                    "explanation": "『黒船』 (Kurofune)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u27-l4": {
        "id": "ja-u27-l4",
        "unit": "ja-u27",
        "level": "C2",
        "objective": "Contemporary Avant-Garde Opera: Toshio Hosokawa (細川俊夫 - オペラ『班女』2004 - 三島由紀夫原案、エクサン・プロヴァンス音楽祭、オペラ『海、静けさ』 - 東日本大震災と平田オリザ、シャーマニズムと自然の響き).",
        "presentation": {
            "explanation": "Toshio Hosokawa (細川俊夫 - 1955–present - Hiroshima & Berlin) and contemporary avant-garde Japanese opera:\n- **Toshio Hosokawa (細川俊夫)**:\n  - Leading Japanese composer in world contemporary classical music; studied in Berlin and Freiburg under Isang Yun and Klaus Huber; member of the Berlin Academy of Arts.\n- Landmark Operatic Masterpieces:\n  - **«班女» (Hanjo - Premiered 2004 at the Aix-en-Provence Festival, France)**:\n    - Directed by Anne Teresa De Keersmaeker; libretto based on **Yukio Mishima's** modern Noh play *Hanjo* (adapted from Zeami's classical Noh);\n    - Follows geisha Hanako waiting obsessively at a railway station holding an autumn fan for her lost lover Yoshio; explored through microtonal acoustic clusters, breath sounds (*Senzai*), and deep percussion mimicking temple bells;\n  - **«海、静けさ» (Stilles Meer / Silent Sea - 2016 - Hamburg State Opera)**:\n    - Libretto by **Oriza Hirata**; addressing the grief and trauma of the 2011 Great East Japan Earthquake and Fukushima tsunami through the lens of a German woman searching for her lost Japanese husband;\n  - Musical Aesthetic: Treating musical sound not as a mechanical object, but as a living plant growing out of primordial silence (**静寂から生まれる音**).",
            "examples": [
                {
                    "target": "細川俊夫は『班女』や『海、静けさ』で三島由紀夫や能楽の幽玄美を現代前衛オペラへと昇華させ、世界の主要歌劇場で絶賛されています。",
                    "reading": "Hosokawa Toshio wa Hanjo ya Stilles Meer de...",
                    "translation": "In \"Hanjo\" and \"Silent Sea,\" Toshio Hosokawa sublimated Yukio Mishima and the Yugen beauty of Noh into contemporary avant-garde opera, acclaimed across world opera houses."
                }
            ],
            "mnemonics": [
                "細川俊夫 (Toshio Hosokawa & Contemporary Avant-Garde Opera)! オペラ『班女』 (Hanjo 2004 Aix-en-Provence & Yukio Mishima Noh)! オペラ『海、静けさ』 (Stilles Meer 2016 & Fukushima tsunami)! Sound born from silence!"
            ],
            "culturalNotes": [
                "Hosokawa was born in Hiroshima ten years after the atomic bombing, shaping his profound artistic mission to transform historical trauma into transcultural spiritual healing through acoustic resonance."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which world-renowned contemporary Japanese composer wrote the operas \"Hanjo\" (2004) and \"Stilles Meer\" (2016)?",
                    "options": [
                        "藤倉大 (134.1)",
                        "坂本龍一 (134.2)",
                        "細川俊夫 (Toshio Hosokawa) (134.3)",
                        "武満徹 (134.4)"
                    ],
                    "answerIndex": 2,
                    "explanation": "細川俊夫 (Toshio Hosokawa)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Which 20th-century literary titan's modern Noh play provided the libretto for Toshio Hosokawa's 2004 opera *Hanjo*?",
                    "options": [
                        "大江健三郎 (134.1)",
                        "三島由紀夫 (Yukio Mishima) (134.2)",
                        "安部公房 (134.3)",
                        "川端康成 (134.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "三島由紀夫 (Yukio Mishima)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Hosokawa conceives contemporary operatic sound as a living calligraphy stroke emerging from meditative silence and returning to the cosmic void.\"",
                    "options": [
                        "細川俊夫は電子ゲームのBGMのみを作曲しています。",
                        "班女はロマンティックなハリウッドミュージカルです。",
                        "エクス・アン・プロヴァンス音楽祭は冬のスキー大会です。",
                        "細川は現代オペラの音響を、瞑想的な静寂から立ち現れ、宇宙の虚無へと回帰する生きた書道の筆致として構想しています。"
                    ],
                    "answerIndex": 3,
                    "explanation": "Accurate Hosokawa compositional analysis translation."
                },
                {
                    "prompt": "What tragic 2011 Japanese national catastrophe serves as the central dramatic theme in Hosokawa's 2016 opera *Stilles Meer* (Silent Sea)?",
                    "options": [
                        "関東大震災",
                        "伊勢湾台風",
                        "東日本大震災と津波（2011年）",
                        "阪神淡路大震災"
                    ],
                    "answerIndex": 2,
                    "explanation": "東日本大震災と津波."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u27-l5": {
        "id": "ja-u27-l5",
        "unit": "ja-u27",
        "level": "C2",
        "objective": "C2 synthesis on Japan's National Operatic Temple: The New National Theatre, Tokyo (新国立劇場（NNTT）- 初台、オペラ劇場、大野和士芸術監督、東京二期会と藤原歌劇団、世界トップクラスの舞台機構と共同制作).",
        "presentation": {
            "explanation": "The New National Theatre Tokyo (NNTT) and the contemporary operatic ecosystem in Japan:\n- **The Architectural & Operatic Crown: New National Theatre, Tokyo (新国立劇場 - NNTT - Opened October 1997 in Hatsudai, Shibuya)**:\n  - Japan's premier national center for the performing arts (Opera, Ballet, Contemporary Dance, and Spoken Drama);\n  - **The Opera House (オペラパレス / Opera Palace)**: 1,814-seat traditional proscenium acoustic hall with a 4-stage cross-shaped layout (main stage, rear stage, left and right wing stages), allowing complete set shifts in seconds;\n- Artistic Leadership & Global Prestige:\n  - Led by internationally acclaimed Maestro **Kazushi Ōno (大野和士)** (former Music Director of Brussels Royal Opera La Monnaie, Opéra de Lyon, and Barcelona Symphony);\n  - Commissions ambitious new Japanese contemporary operas (e.g. *A Midsummer Night's Dream*, *Silence* based on Shūsaku Endō);\n- The Two Pillars of Japanese Opera Companies:\n  - **Tokyo Nikikai Opera Theatre (東京二期会 - Founded 1952)** & **Fujiwara Opera (藤原歌劇団 - Founded 1934 by Yoshie Fujiwara)**;\n  - Co-producing world premieres with the Royal Opera House Covent Garden, Vienna State Opera, and Metropolitan Opera.",
            "examples": [
                {
                    "target": "初台の新国立劇場（NNTT）は大野和士芸術監督のもと、二期会や藤原歌劇団とともに日本オペラ界を世界最高峰の共同制作へと牽引しています。",
                    "reading": "Hatsudai no Shin Kokuritsu Gekijō wa...",
                    "translation": "The New National Theatre, Tokyo in Hatsudai, under Artistic Director Kazushi Ono alongside Nikikai and Fujiwara Opera, leads Japanese opera into top-tier global co-productions."
                }
            ],
            "mnemonics": [
                "新国立劇場 (NNTT in Hatsudai 1997)! Opera Palace (4-stage cross layout)! 大野和士 (Kazushi Ōno Artistic Director)! 東京二期会 (Nikikai 1952) & 藤原歌劇団 (Fujiwara 1934)!"
            ],
            "culturalNotes": [
                "The NNTT Opera Palace is acoustically calibrated with a reverberation time of 1.5 seconds, specifically engineered so unamplified human voices can project clearly over a full 100-piece symphony orchestra."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which grand national performing arts complex in Hatsudai, Tokyo, opened in 1997, is the premier opera house of Japan?",
                    "options": [
                        "新国立劇場 (New National Theatre, Tokyo / NNTT) (135.1)",
                        "東京文化会館 (135.2)",
                        "NHKホール (135.3)",
                        "サントリーホール (135.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "新国立劇場 (New National Theatre, Tokyo)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Which master Japanese conductor, former director at Brussels La Monnaie and Lyon, serves as Artistic Director of Opera at the NNTT?",
                    "options": [
                        "小澤征爾 (135.1)",
                        "佐渡裕 (135.2)",
                        "西本智実 (135.3)",
                        "大野和士 (Kazushi Ōno) (135.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "大野和士 (Kazushi Ōno)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"The Opera Palace at the New National Theatre Tokyo features a four-stage cross layout that enables rapid, automated set transformations for grand operatic productions.\"",
                    "options": [
                        "新国立劇場は映画専用の映画館です。",
                        "大野和士はプロのテニス選手です。",
                        "新国立劇場のオペラパレスは、大規模なオペラ公演のために迅速で自動化された舞台転換を可能にする4面舞台クロス構造を備えています。",
                        "東京二期会は2022年に設立されたロックバンドです。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurate NNTT architectural analysis translation."
                },
                {
                    "prompt": "What historic Japanese opera company was founded in 1952 by pioneer vocalists including Teiichi Nakayama and Katsumi Kawasaki?",
                    "options": [
                        "松竹歌劇団",
                        "東京二期会 (Tokyo Nikikai Opera Theatre)",
                        "宝塚歌劇団",
                        "劇団四季"
                    ],
                    "answerIndex": 1,
                    "explanation": "東京二期会."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u28-l1": {
        "id": "ja-u28-l1",
        "unit": "ja-u28",
        "level": "C1",
        "objective": "The Grand Master of Modern Japanese Architecture: Kenzō Tange (丹下健三 - プリツカー賞1987年、国立代々木競技場1964年の吊り屋根構造、広島平和記念資料館と原爆死没者慰霊碑、東京カテドラル聖マリア大聖堂、メタボリズム運動への影響).",
        "presentation": {
            "explanation": "Kenzō Tange (丹下健三 - 1913–2005 - Osaka & Tokyo) and the monumental rebirth of modern Japanese architecture:\n- **Kenzō Tange (丹下健三)**:\n  - The father of modern Japanese architecture; first Japanese architect to win the **Pritzker Architecture Prize (1987)**; mentor to a legendary generation of architects (Fumihiko Maki, Arata Isozaki, Kisho Kurokawa);\n- Landmark Masterpieces & Structural Inventions:\n  - **Hiroshima Peace Memorial Park & Museum (広島平和記念資料館 - 1955)**: Sits on the central visual axis framing the Genbaku Atomic Bomb Dome; designed the concrete paraboloid Arch Monument (*Cenotaph*) echoing ancient Haniwa saddle roofs;\n  - **Yoyogi National Gymnasium (国立代々木競技場 - 1964 Tokyo Olympics)**:\n    - Masterpiece of world engineering; colossal **suspension cable roof structure (吊り屋根構造)** supported by two monumental steel cables suspended between concrete pylons, creating an uninterrupted column-free interior resembling a dynamic curved shell or Japanese temple roof;\n  - **St. Mary's Cathedral, Tokyo (東京カテドラル聖マリア大聖堂 - 1964)**: 8 soaring hyperbolic paraboloid concrete walls clad in stainless steel forming a giant cross visible from the sky;\n  - **Tokyo Metropolitan Government Building (東京都庁舎 - Shinjuku 1991)**: Twin towers echoing Gothic cathedrals and Japanese digital microchips.",
            "examples": [
                {
                    "target": "丹下健三は国立代々木競技場の吊り屋根構造や広島平和記念資料館を通じて、日本の伝統美とモダニズム構造を融合させ、日本人初のプリツカー賞を受賞しました。",
                    "reading": "Tange Kenzō wa Kokuritsu Yoyogi Kyōgijō no...",
                    "translation": "Kenzō Tange fused traditional Japanese beauty with modernist structure in the Yoyogi National Gymnasium and Hiroshima Peace Memorial Museum, winning Japan's first Pritzker Prize."
                }
            ],
            "mnemonics": [
                "丹下健三 (Father of Modern Japanese Architecture & First Pritzker 1987)! Yoyogi National Gymnasium 1964 (Suspension cable roof)! Hiroshima Peace Park Cenotaph! St. Mary's Cathedral cross! Tokyo Metropolitan Government Building!"
            ],
            "culturalNotes": [
                "The suspension cable roof of the Yoyogi National Gymnasium was so structurally daring in 1964 that international engineers initially believed it would collapse under typhoon winds, yet it has stood flawlessly for over 60 years."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which master architect was the first Japanese laureate of the Pritzker Prize (1987), designing the Yoyogi National Gymnasium and Hiroshima Peace Memorial Museum?",
                    "options": [
                        "安藤忠雄 (136.1)",
                        "槇文彦 (136.2)",
                        "磯崎新 (136.3)",
                        "丹下健三 (Kenzō Tange) (136.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "丹下健三 (Kenzō Tange)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What revolutionary structural engineering technique allowed Kenzō Tange to create column-free interior spaces for the 1964 Tokyo Olympics at Yoyogi?",
                    "options": [
                        "吊り屋根構造（ケーブルサスペンション構造） (136.1)",
                        "木造合掌造り (136.2)",
                        "レンガ積層構造 (136.3)",
                        "竹製フレーム構造 (136.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "吊り屋根構造."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Tange's Yoyogi Gymnasium suspended steel cables from two central concrete masts to create a swooping aerodynamic roof reminiscent of ancient Shinto shrine architecture.\"",
                    "options": [
                        "丹下健三は木造住宅のみを設計した大工でした。",
                        "丹下の代々木体育館は、2本のコンクリート主柱から鋼製ケーブルを吊り下げ、古代の神社建築を思わせる流麗な空気力学的屋根を生み出しました。",
                        "広島平和資料館は地下鉄の駅です。",
                        "代々木競技場は2020年に初めて建設されました。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurate Tange architectural analysis translation."
                },
                {
                    "prompt": "What landmark twin-tower administrative building in Shinjuku, Tokyo, was designed by Kenzō Tange and completed in 1991?",
                    "options": [
                        "東京都庁舎 (Tokyo Metropolitan Government Building)",
                        "六本木ヒルズ森タワー",
                        "東京タワー",
                        "サンシャイン60"
                    ],
                    "answerIndex": 0,
                    "explanation": "東京都庁舎."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u28-l2": {
        "id": "ja-u28-l2",
        "unit": "ja-u28",
        "level": "C1",
        "objective": "The Poetry of Exposed Concrete & Sacred Void: Tadao Andō (安藤忠雄 - プリツカー賞1995年、打ち放しコンクリートの美学、住吉の長屋1976、光の教会（茨木市）- スリット十字架の光、地中美術館（直島）とモネ、独学の建築家).",
        "presentation": {
            "explanation": "Tadao Andō (安藤忠雄 - 1941–present - Osaka) and the master of exposed concrete, natural light, and sacred space:\n- **Tadao Andō (安藤忠雄)**:\n  - Self-taught architect (former professional boxer); awarded the **Pritzker Architecture Prize (1995)** and the Praemium Imperiale; transformed raw industrial concrete into silk-smooth spiritual poetry.\n- Landmark Masterpieces & Architectural Philosophy:\n  - **The Signature Material**: **Smooth Exposed Concrete (打ち放しコンクリート)** with visible formwork tie-holes (*P-con holes*) polished like smooth tatami mats;\n  - **Row House in Sumiyoshi (住吉の長屋 - Osaka, 1976 - Architectural Institute of Japan Prize)**: A minimalist concrete box inserted into a traditional wooden neighborhood, requiring residents to pass through an open-air central courtyard exposed to wind and rain to move between bedrooms and bathrooms, compelling humans to coexist directly with nature;\n  - **Church of the Light (光の教会 - Ibaraki, Osaka, 1989)**: A bare concrete chapel punctured at the altar by a vertical and horizontal cross slit in the concrete wall, allowing pure golden sunlight to form a glowing geometric cross of light emerging from darkness;\n  - **Chichu Art Museum (地中美術館 - Naoshima, 2004)**: Built entirely subterranean beneath the hilltop of the art island Naoshima to preserve the natural island landscape, illuminating Claude Monet's *Water Lilies* through overhead skylights.",
            "examples": [
                {
                    "target": "安藤忠雄は打ち放しコンクリートと光の教会や地中美術館を通じて、自然の光と風を建築空間そのものへと昇華させ、プリツカー賞を受賞しました。",
                    "reading": "Andō Tadao wa uchihanashi konkuriito...",
                    "translation": "Through exposed concrete and works like the Church of the Light and Chichu Art Museum, Tadao Ando sublimated natural light and wind into architectural space, winning the Pritzker Prize."
                }
            ],
            "mnemonics": [
                "安藤忠雄 (Self-Taught Boxing Architect & Pritzker 1995)! 打ち放しコンクリート (Smooth exposed concrete with P-con tie holes)! 住吉の長屋 1976 (Open-air central courtyard)! 光の教会 (Cross slit of sunlight)! 地中美術館 in Naoshima!"
            ],
            "culturalNotes": [
                "Andō ensures the concrete wooden formwork (*katawaku*) is coated with urethane and vibrated meticulously so the concrete surface emerges as smooth and lustrous as polished marble."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which self-taught Japanese Pritzker laureate designed the Church of the Light and Naoshima's Chichu Art Museum using smooth exposed concrete?",
                    "options": [
                        "安藤忠雄 (Tadao Andō) (137.1)",
                        "伊東豊雄 (137.2)",
                        "坂茂 (137.3)",
                        "隈研吾 (137.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "安藤忠雄 (Tadao Andō)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What sacred architectural feature defines the altar of Tadao Andō's 1989 Church of the Light in Ibaraki, Osaka?",
                    "options": [
                        "コンクリート壁に穿たれた十字架のスリット光 (A cross-shaped slit in the concrete wall of light) (137.1)",
                        "金色の巨大な十字架彫刻 (137.2)",
                        "大理石の祭壇 (137.3)",
                        "ステンドグラスの窓 (137.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "十字架のスリット光."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Ando's Chichu Art Museum is embedded entirely underground to avoid disrupting the coastal landscape of the Seto Inland Sea, relying exclusively on natural zenithal light.\"",
                    "options": [
                        "安藤の地中美術館は瀬戸内海の海岸景観を損なわないよう完全に地下に埋設され、天窓からの自然光のみに依存しています。",
                        "安藤忠雄は木造の超高層ビルのみを設計します。",
                        "光の教会はステンドグラスで密閉されています。",
                        "住吉の長屋は東京の皇居内にあります。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurate Tadao Ando analysis translation."
                },
                {
                    "prompt": "What award-winning 1976 minimalist Osaka residential project established Tadao Andō's international reputation with its open-air central courtyard?",
                    "options": [
                        "六甲の集合住宅",
                        "水の教会",
                        "表参道ヒルズ",
                        "住吉の長屋 (Row House in Sumiyoshi / Azuma House)"
                    ],
                    "answerIndex": 3,
                    "explanation": "住吉の長屋."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u28-l3": {
        "id": "ja-u28-l3",
        "unit": "ja-u28",
        "level": "C1",
        "objective": "Metabolism & Modular Capsule Architecture: Kishō Kurokawa and The Nakagin Capsule Tower (黒川紀章 - メタボリズム建築運動1960年、中銀カプセルタワービル1972年（銀座）、新陳代謝する建築、国立新美術館（六本木）、共生の思想).",
        "presentation": {
            "explanation": "Kishō Kurokawa (黒川紀章 - 1934–2007 - Nagoya & Tokyo) and the radical vision of the Metabolism Movement:\n- **Kishō Kurokawa & The Metabolism Movement (メタボリズム - Launched at the 1960 World Design Conference in Tokyo)**:\n  - The only non-Western architectural avant-garde movement to alter 20th-century world urban theory;\n  - Conceived architecture not as static, permanent monuments, but as living, biological organisms that grow, adapt, and replace worn-out parts through continuous cellular metabolism (*Shinchintaisha / 新陳代謝*).\n- The Monumental Icon: **Nakagin Capsule Tower (中銀カプセルタワービル - 1972 - Ginza, Tokyo)**:\n  - Two interconnected concrete mega-structure service cores supporting **140 prefabricated individual steel capsule units** attached with four high-tension bolts;\n  - Each $2.5m \\times 4.0m$ capsule was a self-contained micro-living pod designed for single business travelers, equipped with a circular porthole window, built-in reel-to-reel tape deck, Sony Trinitron color TV, rotary telephone, and unit bathroom;\n  - Designed for capsules to be detached and replaced every 25 years;\n- Other Masterpieces: **The National Art Center, Tokyo (国立新美術館 - Roppongi 2007)** with its wave-like glass louvers, and the **Kuala Lumpur International Airport (KLIA)** embedded in a rainforest.",
            "examples": [
                {
                    "target": "黒川紀章はメタボリズム運動の象徴である中銀カプセルタワービルを通じて、都市と建築が生物のように新陳代謝する未来を銀座の空に具現化しました。",
                    "reading": "Kurokawa Kishō wa Metabolizumu undō no...",
                    "translation": "Through the Nakagin Capsule Tower, the symbol of the Metabolism movement, Kishō Kurokawa embodied a future where cities and architecture metabolize like biological organisms in the Ginza sky."
                }
            ],
            "mnemonics": [
                "黒川紀章 (Kishō Kurokawa & Metabolism Movement 1960)! 中銀カプセルタワービル 1972 in Ginza (140 modular living pods with round porthole windows)! Living organism architecture! 国立新美術館 in Roppongi!"
            ],
            "culturalNotes": [
                "Although the Nakagin Capsule Tower was dismantled in 2022 due to structural aging, individual restored capsules were preserved and donated to museums worldwide, including the Centre Pompidou in Paris and SFMOMA in San Francisco."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which Japanese Metabolist architect designed the world-famous modular Nakagin Capsule Tower (1972) in Ginza and The National Art Center, Tokyo?",
                    "options": [
                        "黒川紀章 (Kishō Kurokawa) (138.1)",
                        "丹下健三 (138.2)",
                        "磯崎新 (138.3)",
                        "安藤忠雄 (138.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "黒川紀章 (Kishō Kurokawa)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What Japanese architectural manifesto, founded in 1960, viewed cities and buildings as living biological organisms capable of organic regeneration and modular renewal?",
                    "options": [
                        "メタボリズム (Metabolism Movement) (138.1)",
                        "デ・ステイル (138.2)",
                        "ブルータリズム (138.3)",
                        "バウハウス (138.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "メタボリズム (Metabolism Movement)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"The Nakagin Capsule Tower demonstrated metabolic urbanism by attaching prefabricated living units to central concrete cores with high-tension bolts for individual replacement.\"",
                    "options": [
                        "中銀カプセルタワーは木造の伝統的な農家でした。",
                        "黒川紀章は建築家ではなく小説家でした。",
                        "国立新美術館は1800年に建てられました。",
                        "中銀カプセルタワービルは、高張力ボルトを用いて中央のコンクリートコアにプレハブ式居住ユニットを取り付け、個別の交換を可能にすることでメタボリズム都市計画を実証しました。"
                    ],
                    "answerIndex": 3,
                    "explanation": "Accurate Metabolism architectural analysis translation."
                },
                {
                    "prompt": "What characteristic visual window design was installed in each of the 140 modular living capsules in the Nakagin Capsule Tower?",
                    "options": [
                        "四角いガラスブロック",
                        "ステンドグラスのアーチ",
                        "円形の丸窓（ポートホール・ウィンドウ）",
                        "引き違いの障子窓"
                    ],
                    "answerIndex": 2,
                    "explanation": "円形の丸窓."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u28-l4": {
        "id": "ja-u28-l4",
        "unit": "ja-u28",
        "level": "C2",
        "objective": "Tectonic Wood Weaving & Defeated Architecture: Kengo Kuma (隈研吾 - 負ける建築、国立競技場（杜のスタジアム）2020、木材の組木構造（地獄組み）- サニーヒルズ南青山、高輪ゲートウェイ駅、スコットランドV&Aダンディ).",
        "presentation": {
            "explanation": "Kengo Kuma (隈研吾 - 1954–present - Kanagawa & Tokyo) and the philosophy of \"Defeated Architecture\" (負ける建築):\n- **Kengo Kuma (隈研吾)**:\n  - Champion of natural materials (cedar, cypress wood, bamboo, stone, washi paper) rejecting monolithic concrete towers in favor of permeable, human-scale timber lattices that merge seamlessly into surrounding forests and streetscapes.\n- The Philosophy of **«負ける建築» (Defeated Architecture)**:\n  - Architecture should not assert its ego against nature, but humbly \"lose\" to the surrounding environment and landscape, dissolving boundaries through porous wood louvers.\n- Landmark Masterpieces:\n  - **Japan National Stadium (国立競技場 / 杜のスタジアム - 2020 Tokyo Olympics)**:\n    - Multi-tiered wooden eaves crafted from certified cedar timber gathered from all **47 prefectures of Japan**, cooled by natural wind flow through timber louvers (*Kaze no Chōkoku*);\n  - **SunnyHills Minami-Aoyama (Tokyo - 2013)**: 3-dimensional wooden lattice basket structure using traditional interlocking joinery with zero nails (**地獄組み / Jigoku-gumi**);\n  - **Takanawa Gateway Station (高輪ゲートウェイ駅 - 2020)**: Origami-folded PTFE membrane roof framed with Tohoku cedar;\n  - **V&A Dundee (Scotland - 2018)**: Precast horizontal stone panels resembling dramatic Scottish cliff headlands.",
            "examples": [
                {
                    "target": "隈研吾は「負ける建築」の理念のもと、47都道府県の木材を用いた国立競技場や地獄組み木造構造で、世界に日本の木工技術の美を発信しています。",
                    "reading": "Kuma Kengo wa Makeru Kenchiku no...",
                    "translation": "Under the philosophy of \"Defeated Architecture,\" Kengo Kuma conveys the beauty of Japanese woodworking globally through the National Stadium using timber from all 47 prefectures and interlocking wood structures."
                }
            ],
            "mnemonics": [
                "隈研吾 (Kengo Kuma & «負ける建築» Defeated Architecture)! 国立競技場 (47 prefectures cedar wood eaves)! 地獄組み joinery at SunnyHills Minami-Aoyama! 高輪ゲートウェイ駅! V&A Dundee!"
            ],
            "culturalNotes": [
                "For the 2020 National Stadium, the timber was arranged geographically with northern cedar from Hokkaido on the north eaves and southern timber from Okinawa on the south eaves."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which master Japanese architect designed the 2020 Tokyo Olympic National Stadium and pioneered the philosophy of \"Defeated Architecture\" (負ける建築)?",
                    "options": [
                        "妹島和世 (139.1)",
                        "伊東豊雄 (139.2)",
                        "隈研吾 (Kengo Kuma) (139.3)",
                        "坂茂 (139.4)"
                    ],
                    "answerIndex": 2,
                    "explanation": "隈研吾 (Kengo Kuma)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What traditional nail-free interlocking Japanese woodworking joinery technique is showcased in Kengo Kuma's SunnyHills shop in Minami-Aoyama?",
                    "options": [
                        "組子細工 (139.1)",
                        "地獄組み (Jigoku-gumi / 3D interlocking wood joinery) (139.2)",
                        "輪島塗 (139.3)",
                        "寄木細工 (139.4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "地獄組み (Jigoku-gumi)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Kuma's philosophy of Defeated Architecture utilizes delicate timber louvers to dissolve solid building mass into dappled light and shadow.\"",
                    "options": [
                        "国立競技場はプラスチックのみで作られました。",
                        "地獄組みは金属の溶接技術です。",
                        "隈の「負ける建築」の哲学は、繊細な木製ルーバーを用いて建物の重厚な塊を木漏れ日のような光と影へと分解・融解させます。",
                        "隈研吾は鉄筋コンクリートの要塞のみを設計します。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurate Kengo Kuma analysis translation."
                },
                {
                    "prompt": "From where was the cedar wood for the eaves of the 2020 National Stadium in Tokyo gathered to symbolize national unity?",
                    "options": [
                        "アマゾンの熱帯雨林",
                        "全国47都道府県の地域産木材 (Certified timber gathered from all 47 prefectures)",
                        "ロシアのシベリア松",
                        "カナダの原生林のみ"
                    ],
                    "answerIndex": 1,
                    "explanation": "全国47都道府県の地域産木材."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u28-l5": {
        "id": "ja-u28-l5",
        "unit": "ja-u28",
        "level": "C2",
        "objective": "C2 synthesis on Pritzker Titans of Ephemeral Light & Humanitarian Architecture: SANAA and Shigeru Ban (SANAA（妹島和世＋西沢立衛）- プリツカー賞2010年、金沢21世紀美術館、トレド美術館ガラスパビリオン、坂茂 - プリツカー賞2014年、紙管建築と災害人道支援避難所、クライストチャーチ紙の大聖堂).",
        "presentation": {
            "explanation": "SANAA (Kazuyo Sejima + Ryue Nishizawa) and Shigeru Ban: Contemporary Japanese architectural titans on the global stage:\n- **SANAA (Kazuyo Sejima 妹島和世 + Ryue Nishizawa 西沢立衛 - Pritzker Prize 2010)**:\n  - Masters of ultra-light, transparent, boundary-free architecture where walls dematerialize into ethereal glass and white steel.\n  - **21st Century Museum of Contemporary Art, Kanazawa (金沢21世紀美術館 - 2004)**: A circular, low-profile glass pavilion with no front or back entrance, allowing visitors to enter from any direction into an open civic park, featuring Leandro Erlich's *The Swimming Pool*;\n  - **Rolex Learning Center (EPFL, Switzerland - 2010)** & **Louvre-Lens (France - 2012)**;\n- **Shigeru Ban (坂茂 - Pritzker Prize 2014)**:\n  - Pioneer of recyclable **Paper Tube Structures (紙管建築)** and humanitarian disaster relief architecture;\n  - Built emergency shelters, partition systems, and community centers for refugees and disaster victims across Rwanda, Kobe (Paper Church), Haiti, Ukraine, and Turkey;\n  - **Cardboard Cathedral (Christchurch, New Zealand - 2013)**: A soaring A-frame cathedral constructed from 98 giant structural cardboard tubes following the 2011 Christchurch earthquake.",
            "examples": [
                {
                    "target": "SANAAの金沢21世紀美術館における透明な境界のない建築美と、坂茂の紙管による災害人道支援建築は、日本の現代建築の世界的倫理と芸術性を証明しています。",
                    "reading": "SANAA no Kanazawa 21-seiki...",
                    "translation": "SANAA's boundary-free transparent aesthetic in the 21st Century Museum of Kanazawa and Shigeru Ban's paper tube disaster relief architecture prove the global ethics and artistry of modern Japanese architecture."
                }
            ],
            "mnemonics": [
                "SANAA (Kazuyo Sejima & Ryue Nishizawa - Pritzker 2010)! 21st Century Museum of Contemporary Art, Kanazawa (Circular glass pavilion)! Shigeru Ban (Pritzker 2014 & Paper Tube Architecture)! Cardboard Cathedral in Christchurch! Humanitarian disaster relief!"
            ],
            "culturalNotes": [
                "Shigeru Ban developed the Paper Partition System (PPS) used globally inside school gymnasiums during earthquakes and floods, giving evacuated families dignity and privacy during crises."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which architectural duo founded SANAA, winning the Pritzker Prize in 2010 for designs like the 21st Century Museum of Contemporary Art, Kanazawa?",
                    "options": [
                        "妹島和世＋西沢立衛 (Kazuyo Sejima + Ryue Nishizawa) (140.1)",
                        "隈研吾＋安藤忠雄 (140.2)",
                        "伊東豊雄＋藤本壮介 (140.3)",
                        "丹下健三＋黒川紀章 (140.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "妹島和世＋西沢立衛."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Which Japanese Pritzker laureate (2014) pioneered structural paper tubes for disaster relief shelters and built the Cardboard Cathedral in Christchurch?",
                    "options": [
                        "安藤忠雄 (140.1)",
                        "磯崎新 (140.2)",
                        "槇文彦 (140.3)",
                        "坂茂 (Shigeru Ban) (140.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "坂茂 (Shigeru Ban)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Shigeru Ban's Cardboard Cathedral demonstrated that waterproofed structural paper tubes can create monumental, durable sacred architecture while serving emergency humanitarian needs.\"",
                    "options": [
                        "紙管建築は雨が降ると数秒で溶けてなくなります。",
                        "坂茂の紙の大聖堂は、防水加工された構造用紙管が緊急の人道支援ニーズに応えながら、記念碑的で耐久性のある神聖な建築を生み出せることを証明しました。",
                        "SANAAはコンクリートの軍事要塞を専門に設計しています。",
                        "金沢21世紀美術館は窓のない地下シェルターです。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurate Shigeru Ban and SANAA analysis translation."
                },
                {
                    "prompt": "What circular 2004 architectural landmark in Ishikawa Prefecture, designed by SANAA, has no designated entrance facade, inviting visitors from all 360 degrees?",
                    "options": [
                        "金沢21世紀美術館 (21st Century Museum of Contemporary Art, Kanazawa)",
                        "国立西洋美術館",
                        "東京国立近代美術館",
                        "森美術館"
                    ],
                    "answerIndex": 0,
                    "explanation": "金沢21世紀美術館."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u29-l1": {
        "id": "ja-u29-l1",
        "unit": "ja-u29",
        "level": "C1",
        "objective": "Pure Experience & The Logic of Basho: Kitarō Nishida (西田幾多郎 - 京都学派の創始者、『善の研究』1911年、主客未分の「純粋経験」、場所の論理と絶対無の自覚、西洋哲学と東洋的直観の歴史的融合、京都の哲学の道).",
        "presentation": {
            "explanation": "Kitarō Nishida (西田幾多郎 - 1870–1945 - Ishikawa & Kyoto) and the creation of original modern Japanese philosophy:\n- **Kitarō Nishida (西田幾多郎)**:\n  - The founder of the world-famous **Kyoto School (京都学派)**; Professor of Philosophy at Kyoto Imperial University; created the **Philosopher's Path (哲学の道)** along the cherry blossom canal in Kyoto where he took daily meditative walks.\n- Landmark Treatises & Metaphysical Concepts:\n  - **『善の研究』(An Inquiry into the Good - 1911)**:\n    - The foundational text of modern Japanese philosophy;\n    - **Pure Experience (純粋経験 / Junsui Keiken)**: The state of direct, unmediated consciousness before the artificial cognitive separation between subject (the observer) and object (the thing observed)—such as the pure absorption of hearing a bell toll before thinking \"I hear a bell\";\n  - **The Logic of Basho (場所の論理 / Logic of Place/Field)**:\n    - Developed to overcome Western Aristotle-Kantian logic; proposes that being is always situated within an encompassing \"place\" or horizon of consciousness;\n  - **Absolute Nothingness (絶対無 / Zettai Mu)**: The ultimate universal horizon that encompasses all physical beings and forms without being a finite object itself, echoing Buddhist Śūnyatā (*Kū*).",
            "examples": [
                {
                    "target": "西田幾多郎は『善の研究』における「純粋経験」や「場所の論理」を通じて、西洋論理と東洋の「絶対無」を融合し、京都学派を創始しました。",
                    "reading": "Nishida Kitarō wa Zen no Kenkyū...",
                    "translation": "Through \"Pure Experience\" and the \"Logic of Basho\" in An Inquiry into the Good, Kitaro Nishida fused Western logic with Eastern \"Absolute Nothingness,\" founding the Kyoto School."
                }
            ],
            "mnemonics": [
                "西田幾多郎 (Founder of Kyoto School & Philosopher's Path 哲学の道)! 『善の研究』1911 (An Inquiry into the Good)! 純粋経験 (Pure Experience before subject-object split)! 場所の論理 (Logic of Basho)! 絶対無 (Absolute Nothingness)!"
            ],
            "culturalNotes": [
                "Nishida engraved his personal motto on a stone along the Philosopher's Path in Kyoto: *«人は人 吾はわれなり とにかくに 吾行く道を 吾は行くなり»* (*\"Others are others, I am myself; in any case, along the path I walk, I make my way\"*)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which master Japanese philosopher founded the Kyoto School and wrote \"An Inquiry into the Good\" (『善の研究』) in 1911?",
                    "options": [
                        "田辺元 (141.1)",
                        "和辻哲郎 (141.2)",
                        "西谷啓治 (141.3)",
                        "西田幾多郎 (Kitarō Nishida) (141.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "西田幾多郎 (Kitarō Nishida)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What foundational epistemological concept in Nishida's philosophy describes direct consciousness before the division between subject and object?",
                    "options": [
                        "純粋経験 (Pure Experience) (141.1)",
                        "物自体 (141.2)",
                        "実存 (141.3)",
                        "弁証法 (141.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "純粋経験 (Pure Experience)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Nishida's Logic of Basho conceptualizes Absolute Nothingness not as a nihilistic void, but as the ultimate encompassing ground within which all dynamic phenomena emerge.\"",
                    "options": [
                        "西田の場所の論理は、絶対無を虚無的な空白としてではなく、あらゆる動的な現象が生起する究極の包摂的根底として概念化します。",
                        "西田幾多郎は武士道のみを教えた軍人でした。",
                        "哲学の道は東京の地下鉄駅です。",
                        "善の研究は料理のレシピ本です。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurate Kitarō Nishida analysis translation."
                },
                {
                    "prompt": "What famous scenic cherry-lined stone canal walking route in Kyoto is named in honor of Kitarō Nishida's daily philosophical meditation walks?",
                    "options": [
                        "産寧坂",
                        "御所の小径",
                        "鴨川の土手",
                        "哲学の道 (The Philosopher's Path)"
                    ],
                    "answerIndex": 3,
                    "explanation": "哲学の道."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u29-l2": {
        "id": "ja-u29-l2",
        "unit": "ja-u29",
        "level": "C1",
        "objective": "Just Sitting & Being-Time: Dōgen Zenji and the Shōbōgenzō (道元禅師 - 曹洞宗開祖、大著『正法眼蔵』、只管打坐（しかんたざ）、身心脱落（しんじんだつらく）、「有時（うじ）」の時間論、福井県永平寺).",
        "presentation": {
            "explanation": "Dōgen Zenji (道元禅師 - 1200–1253 - Kyoto & Echizen/Eihei-ji) and the supreme metaphysics of Sōtō Zen:\n- **Dōgen Zenji (道元)**:\n  - Founder of the **Sōtō Zen (曹洞宗)** school in Japan; founded **Eihei-ji Temple (永平寺)** in the deep mountain cedar forests of Fukui;\n- Landmark Metaphysical Treatises & Concepts:\n  - **『正法眼蔵』(Shōbōgenzō - The Treasury of the True Dharma Eye)**:\n    - 95-fascicle monumental philosophical masterpiece composed in vernacular Japanese;\n    - **Shikantaza (只管打坐 / \"Just Sitting\")**: Pure, silent seated zazen meditation without striving for external enlightenment; practice and enlightenment are not two separate steps, but identical (**修証一如 / Shushō Ichinyo**);\n    - **Shinjin Datsuraku (身心脱落 / \"Casting off of Body and Mind\")**: Total liberation from ego-attachment and intellectual grasping;\n    - **Uji (有時 / \"Being-Time\")**: Revolutionary non-linear temporal ontology: Time does not flow past like an external river; rather, **existence itself is time, and time itself is existence** (every moment contains the entirety of being and mountains flowing).",
            "examples": [
                {
                    "target": "道元禅師は『正法眼蔵』において只管打坐と「有時」の時間論を説き、実践と悟りが一つである修証一如の哲学を確立しました。",
                    "reading": "Dōgen Zenji wa Shōbōgenzō ni oite...",
                    "translation": "In the Shōbōgenzō, Dogen Zenji expounded Just Sitting and the temporal theory of \"Being-Time,\" establishing the philosophy that practice and realization are one."
                }
            ],
            "mnemonics": [
                "道元禅師 (Founder of Sōtō Zen & Eihei-ji Temple in Fukui)! 『正法眼蔵』(Shōbōgenzō)! 只管打坐 (Shikantaza / Just Sitting)! 身心脱落 (Casting off body & mind)! 有時 (Uji / Being-Time)! 修証一如 (Practice and Enlightenment are One)!"
            ],
            "culturalNotes": [
                "Modern philosophers like Martin Heidegger were profoundly astonished upon reading Dōgen's *Uji*, recognizing that Dōgen had articulated the unity of Time and Being 700 years before European phenomenology."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which 13th-century master founded Sōtō Zen and authored the monumental 95-chapter philosophical masterwork \"Shōbōgenzō\" (『正法眼蔵』)?",
                    "options": [
                        "道元禅師 (Dōgen Zenji) (142.1)",
                        "親鸞 (142.2)",
                        "日蓮 (142.3)",
                        "栄西 (142.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "道元禅師 (Dōgen Zenji)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What foundational Sōtō Zen meditation practice, meaning \"Just Sitting\" without seeking external goals, was established by Dōgen?",
                    "options": [
                        "只管打坐 (Shikantaza) (142.1)",
                        "公案禅 (142.2)",
                        "滝行 (142.3)",
                        "念仏 (142.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "只管打坐 (Shikantaza)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Dogen's concept of Being-Time asserts that time is not an external continuum sweeping past, but that every passing moment of existence is dynamically indivisible from time itself.\"",
                    "options": [
                        "曹洞宗は座禅を禁止しています。",
                        "道元は永平寺を1950年に建てました。",
                        "正法眼蔵は武術の指南書です。",
                        "道元の「有時」の概念は、時間が外側を流れる連続体ではなく、存在のあらゆる瞬間そのものが時間と動的に不可分であると説きます。"
                    ],
                    "answerIndex": 3,
                    "explanation": "Accurate Dōgen philosophical analysis translation."
                },
                {
                    "prompt": "What mountain monastery temple in Fukui Prefecture was founded by Dōgen in 1244 as the head temple of Sōtō Zen in Japan?",
                    "options": [
                        "金閣寺",
                        "東福寺",
                        "大本山 永平寺 (Eihei-ji)",
                        "清水寺"
                    ],
                    "answerIndex": 2,
                    "explanation": "大本山 永平寺."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u29-l3": {
        "id": "ja-u29-l3",
        "unit": "ja-u29",
        "level": "C1",
        "objective": "Overcoming Nihilism & The Standpoint of Sunyata: Keiji Nishitani (西谷啓治 - 京都学派、『宗教とは何か』1961年、ニヒリズムの超克、ハイデッガーとの対話、空の立場（śūnyatā）と自己否定による真の自己の回復、絶対的随順).",
        "presentation": {
            "explanation": "Keiji Nishitani (西谷啓治 - 1900–1990 - Ishikawa & Kyoto) and overcoming European nihilism through Eastern Emptiness:\n- **Keiji Nishitani (西谷啓治)**:\n  - Foremost student of Kitarō Nishida; studied under Martin Heidegger in Freiburg (1937–1939); succeeded Nishida as the intellectual leader of the Kyoto School.\n- Landmark Metaphysical Treatises & Concepts:\n  - **『宗教とは何か』(What is Religion? / Religion and Nothingness - 1961)**:\n    - The crowning masterwork of the later Kyoto School;\n    - **The Crisis of European Nihilism**: Deep engagement with Friedrich Nietzsche's \"Death of God\" and European existential despair, where relative nothingness (*Nihil*) leaves humanity in an abyss of meaninglessness;\n    - **The Breakthrough to Śūnyatā (空の立場 / The Standpoint of Emptiness)**:\n      - Relative nothingness is overcome not by clinging to ego, but by pushing through to **True Absolute Emptiness (空)**;\n      - In Emptiness, when the ego completely dies to itself, reality is restored in its vivid, radiant, interdependent uniqueness—where a flower is truly a flower in its original beauty;\n      - Expressed as: *\"Fire does not burn fire; water does not wet water\"*.",
            "examples": [
                {
                    "target": "西谷啓治は『宗教とは何か』においてニヒリズムの深淵を直視し、「空の立場」を通じて真の自己と世界の実在性を回復する哲学を確立しました。",
                    "reading": "Nishitani Keiji wa Shūkyō to wa nani ka...",
                    "translation": "In What is Religion?, Keiji Nishitani directly confronted the abyss of nihilism, establishing a philosophy that restores the authentic self and reality through the \"Standpoint of Emptiness.\""
                }
            ],
            "mnemonics": [
                "西谷啓治 (Keiji Nishitani & Student of Nishida/Heidegger)! 『宗教とは何か』(What is Religion? 1961)! Overcoming European Nihilism! 空の立場 (The Standpoint of Śūnyatā/Emptiness)! Self-negation opening into authentic radiant reality!"
            ],
            "culturalNotes": [
                "Nishitani was instrumental in fostering high-level Buddhist-Christian philosophical dialogue, participating in international symposia with Thomas Merton and Paul Tillich."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which master Kyoto School philosopher studied with Heidegger and authored \"What is Religion?\" (『宗教とは何か』), pioneering the Standpoint of Emptiness?",
                    "options": [
                        "西谷啓治 (Keiji Nishitani) (143.1)",
                        "西田幾多郎 (143.2)",
                        "田辺元 (143.3)",
                        "久松真一 (143.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "西谷啓治 (Keiji Nishitani)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What Buddhist philosophical concept of Emptiness (Śūnyatā) was formulated by Nishitani to overcome modern European nihilism?",
                    "options": [
                        "空の立場 (The Standpoint of Emptiness / Śūnyatā) (143.1)",
                        "唯物論 (143.2)",
                        "理神論 (143.3)",
                        "現象学 (143.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "空の立場 (The Standpoint of Emptiness / Śūnyatā)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Nishitani established that relative nihilism is transcended through Absolute Emptiness, wherein the complete negation of ego opens into the luminous affirmation of all beings.\"",
                    "options": [
                        "西谷啓治は19世紀の浮世絵師でした。",
                        "宗教とは何かは軍事戦略の書です。",
                        "西谷は、相対的ニヒリズムが絶対的な空を通じて超克され、そこにおいて自我の完全な否定があらゆる存在の光明に満ちた肯定へと開かれることを論証しました。",
                        "空の立場は物質の完全な消滅を意味します。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurate Nishitani philosophical analysis translation."
                },
                {
                    "prompt": "Under which legendary German philosopher did Keiji Nishitani study in Freiburg between 1937 and 1939 before writing on nihilism?",
                    "options": [
                        "イマヌエル・カント",
                        "マルティン・ハイデッガー (Martin Heidegger)",
                        "アルトゥル・ショーペンハウアー",
                        "ゲオルク・ヘーゲル"
                    ],
                    "answerIndex": 1,
                    "explanation": "マルティン・ハイデッガー."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u29-l4": {
        "id": "ja-u29-l4",
        "unit": "ja-u29",
        "level": "C2",
        "objective": "Climate, Culture & Relational Coexistence: Tetsurō Watsuji (和辻哲郎 - 『風土』1935年 - モンスーン型・砂漠型・牧場型の人間類型論、『倫理学』- 人間の「間柄的存在（あいだがら）」、個人主義と全体主義の超克、日本精神史研究).",
        "presentation": {
            "explanation": "Tetsurō Watsuji (和辻哲郎 - 1889–1960 - Himeji & Tokyo) and the philosophy of Climate and Relational Coexistence:\n- **Tetsurō Watsuji (和辻哲郎)**:\n  - Professor of Ethics at the University of Tokyo; synthesized European hermeneutics and ethics with classical Japanese spiritual history.\n- Landmark Masterpieces & Philosophical Inventions:\n  - **『風土』(Climate and Culture: A Philosophical Study - 1935)**:\n    - Rejects mechanical environmental determinism; posits that **Fūdo (風土 / Climate/Environment)** is not external nature, but the structural medium through which human beings discover and experience themselves;\n    - **The 3 Great Cultural-Climatic Typologies**:\n      - **1. The Monsoon Type (モンスーン型 - East/South Asia)**: Characterized by moisture, typhoons, and seasonal inundation, cultivating endurance, passivity, receptivity, and collective social harmony;\n      - **2. The Desert Type (砂漠型 - Middle East)**: Arid, harsh desolation cultivating fierce will, prophetic monotheism, and radical collective discipline;\n      - **3. The Meadow/Pasture Type (牧場型 - Western Europe)**: Gentle, predictable, docile nature cultivating rational inquiry, mechanical mastery, and individual autonomy;\n  - **『倫理学』(Ethics - 1937–1949)**: Humans are not isolated atomized individuals (*individualism*), nor mere cogs in the state (*totalitarianism*), but **«間柄的存在» (Aidagara - Relational Beings)** existing dynamically in the living in-betweenness of human relationships.",
            "examples": [
                {
                    "target": "和辻哲郎は『風土』におけるモンスーン・砂漠・牧場の三類型論と『倫理学』の間柄的存在の概念により、人間存在の根源的関係性を解明しました。",
                    "reading": "Watsuji Tetsurō wa Fūdo ni oite...",
                    "translation": "Through the three typologies of Monsoon, Desert, and Meadow in Climate and Culture and the concept of relational beings in Ethics, Tetsuro Watsuji illuminated the fundamental relationality of human existence."
                }
            ],
            "mnemonics": [
                "和辻哲郎 (Tetsurō Watsuji & Cultural Hermeneutics)! 『風土』1935 (Climate & Culture: Monsoon, Desert, Meadow typologies)! 『倫理学』(Ethics)! 間柄的存在 (Aidagara / Humans as relational in-between beings)!"
            ],
            "culturalNotes": [
                "Watsuji's concept of *Aidagara* (間柄) is rooted in the Japanese word for human being, *Ningen* (人間), which literally translates to \"between people\" (人 = person, 間 = interval/between)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which master Japanese philosopher authored \"Climate and Culture\" (『風土』1935) and formulated the ethical concept of \"Aidagara\" (間柄的存在)?",
                    "options": [
                        "丸山眞男 (144.1)",
                        "九鬼周造 (144.2)",
                        "和辻哲郎 (Tetsurō Watsuji) (144.3)",
                        "西田幾多郎 (144.4)"
                    ],
                    "answerIndex": 2,
                    "explanation": "和辻哲郎 (Tetsurō Watsuji)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What climate typology in Watsuji's \"Fūdo\", characterized by seasonal rains and typhoons, cultivates endurance, receptivity, and collective harmony in Asia?",
                    "options": [
                        "ツンドラ型 (144.1)",
                        "牧場型 (Meadow type) (144.2)",
                        "モンスーン型 (Monsoon type) (144.3)",
                        "砂漠型 (Desert type) (144.4)"
                    ],
                    "answerIndex": 2,
                    "explanation": "モンスーン型 (Monsoon type)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Watsuji defined human ethical existence not as isolated Cartesian individuality, but as an ongoing dynamic dialectic within the relational space between persons (Aidagara).\"",
                    "options": [
                        "和辻哲郎は18世紀の浮世絵師でした。",
                        "和辻は人間の倫理的存在を孤立したデカルト的個我としてではなく、人間と人間のあいだの相互関係的空間（間柄）における動的な弁証法として定義しました。",
                        "牧場型気候は熱帯雨林地帯を指します。",
                        "風土は日本の天気予報を記録した気象観測日誌です。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurate Watsuji ethical analysis translation."
                },
                {
                    "prompt": "What literal kanji etymology of the Japanese word for human being (*Ningen* / 人間) did Watsuji use to prove that human nature is fundamentally relational?",
                    "options": [
                        "「人のあいだ」（人＋間 = Between people / In-betweenness)",
                        "「戦う者」",
                        "「考える葦」",
                        "「神の子」"
                    ],
                    "answerIndex": 0,
                    "explanation": "「人のあいだ」."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u29-l5": {
        "id": "ja-u29-l5",
        "unit": "ja-u29",
        "level": "C2",
        "objective": "C2 synthesis on The Philosophy of Ephemeral Grace & Ineffable Shadow: Zeami and Jun'ichirō Tanizaki (世阿弥元清 - 能楽大成者、『風姿花伝』-「秘すれば花」「初心忘るるべからず」「幽玄（ゆうげん）」、谷崎潤一郎 - 『陰翳礼讃』1933年、薄暗がりの中の美と陰影の形而上学).",
        "presentation": {
            "explanation": "The supreme aesthetics of ephemeral grace, hidden blossoms, and shadowy subtlety:\n- **Zeami Motokiyo (世阿弥元清 - c. 1363–1443 - Muromachi Kyoto)**:\n  - Dramatist, actor, and aesthetician who perfected the art of **Noh Theater (能楽)** with his father Kan'ami under Shōgun Ashikaga Yoshimitsu;\n  - **『風姿花伝』(Fūshikaden / The Transmission of the Flower - 1400)**:\n    - **«秘すれば花、秘せずは花なるべからず»** (*\"If hidden, it is the flower; if unhidden, it cannot be the flower\"*): True beauty is the unspoken mystery withheld just beneath the surface;\n    - **«初心忘るるべからず»** (*\"Never forget the beginner's mind\"*): Sustaining lifelong humility and adaptability at every stage of artistic maturation;\n    - **Yūgen (幽玄 / Subtle Profundity)**: A profound, mysterious, quiet grace that hints at infinite depth without vulgar obviousness;\n- **Jun'ichirō Tanizaki (谷崎潤一郎 - 1886–1965)**:\n  - **『陰翳礼讃』(In Praise of Shadows - 1933)**:\n    - The metaphysical defense of Japanese aesthetics against harsh Western electric illumination;\n    - Discovers that Japanese lacquerware, gold leaf screens (*Byōbu*), and tokonoma alcoves were designed to reveal their profound, glowing richness only within the dim, flickering amber shadows of candlelight.",
            "examples": [
                {
                    "target": "世阿弥の『風姿花伝』における「秘すれば花」と「幽玄」の美学、谷崎潤一郎の『陰翳礼讃』における影の形而上学は、日本の深層哲学の真髄です。",
                    "reading": "Zeami no Fūshikaden ni okeru...",
                    "translation": "Zeami's aesthetics of \"If hidden it is a flower\" and \"Yūgen\" in Fūshikaden, alongside Jun'ichirō Tanizaki's metaphysics of shadow in In Praise of Shadows, form the true essence of Japanese deep philosophy."
                }
            ],
            "mnemonics": [
                "世阿弥 (Zeami & Noh Theater Perfection)! 『風姿花伝』(Fūshikaden 1400)! «秘すれば花» (If hidden it is a flower)! «初心忘るるべからず» (Never forget beginner's mind)! 幽玄 (Yūgen / Subtle Profundity)! 谷崎潤一郎 (In Praise of Shadows 『陰翳礼讃』1933)!"
            ],
            "culturalNotes": [
                "Tanizaki observed in *In Praise of Shadows* that gold leaf was not used in traditional dark Japanese rooms for gaudy display, but as an ingenious passive reflector of dim candlelight."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which 15th-century Noh master authored the timeless aesthetic treatise \"Fūshikaden\" (『風姿花伝』), coining \"If hidden, it is a flower\"?",
                    "options": [
                        "世阿弥元清 (Zeami Motokiyo) (145.1)",
                        "観阿弥 (145.2)",
                        "松尾芭蕉 (145.3)",
                        "千利休 (145.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "世阿弥元清 (Zeami Motokiyo)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What world-famous 1933 essay by Jun'ichirō Tanizaki explores the quiet metaphysical beauty of amber candlelight and dim shadows in Japanese architecture?",
                    "options": [
                        "『細雪』 (145.1)",
                        "『春琴抄』 (145.2)",
                        "『痴人の愛』 (145.3)",
                        "『陰翳礼讃』(In Praise of Shadows) (145.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "『陰翳礼讃』(In Praise of Shadows)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Zeami established that true artistic mastery resides in Yugen, where restrained suggestion and hidden emotion evoke far greater depth than literal demonstration.\"",
                    "options": [
                        "世阿弥は、抑制された暗示と秘められた感情が直接的な誇示よりも遥かに深い境地を呼び起こす「幽玄」にこそ、真の芸術的到達点があると論じました。",
                        "陰翳礼讃は蛍光灯の設置マニュアルです。",
                        "初心忘るるべからずは料理の標語です。",
                        "世阿弥は能楽を禁止した室町幕府の武将でした。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurate Zeami and Tanizaki aesthetic analysis translation."
                },
                {
                    "prompt": "What immortal maxim from Zeami's *Fūshikaden* reminds artists and practitioners to never lose the humble awareness of their early vulnerabilities and openness?",
                    "options": [
                        "「行雲流水」",
                        "「温故知新」",
                        "「一期一会」",
                        "「初心忘るるべからず」 (Never forget the beginner's mind)"
                    ],
                    "answerIndex": 3,
                    "explanation": "「初心忘るるべからず」."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u30-l1": {
        "id": "ja-u30-l1",
        "unit": "ja-u30",
        "level": "C1",
        "objective": "The Kinetic Epic & The Multiperspective Truth: Akira Kurosawa (黒澤明 - ヴェネツィア国際映画祭金獅子賞『羅生門』1950年 - 羅生門効果（多角的真実）、『七人の侍』1954年の複数カメラ同時撮影と望遠レンズ、『乱』1985年の色彩設計とシェイクスピア『リア王』、三船敏郎との黄金タッグ).",
        "presentation": {
            "explanation": "Akira Kurosawa (黒澤明 - 1910–1998 - Tokyo) and the monumental titan of world cinema:\n- **Akira Kurosawa (世界のクロサワ / \"The Emperor\")**:\n  - Recipient of the Venice Golden Lion, Cannes Palme d'Or, and Academy Honorary Award for Lifetime Achievement; revolutionized cinematic grammar across the globe (inspiring George Lucas's *Star Wars*, Sergio Leone's *A Fistful of Dollars*, and John Sturges's *The Magnificent Seven*).\n- Monumental Masterpieces & Cinematic Inventions:\n  - **『羅生門』(Rashomon - 1950 - Venice Golden Lion & Academy Award)**:\n    - Catapulted Japanese cinema onto the world stage;\n    - **The Rashomon Effect (羅生門効果)**: A samurai is murdered in a bamboo grove; four witnesses (the bandit Tajōmaru, the wife, the murdered samurai speaking through a medium, and the woodcutter) recount four completely contradictory, self-serving versions of the same event, demonstrating the subjective fragility of human truth;\n    - Filmed sunlight flashing directly into the camera lens through forest leaves (first time in cinema history);\n  - **『七人の侍』(Seven Samurai - 1954)**:\n    - Pioneer of modern action cinema: Used multiple cameras filming simultaneously from different angles (*multi-camera setup*) and telephoto lenses (*bōen renzu*) to capture the chaotic mud battle in torrential rain;\n  - **『乱』(Ran - 1985)**: Monumental color epic adapting Shakespeare's *King Lear* on the volcanic slopes of Mount Fuji;\n  - Legendary partnership with actor **Toshirō Mifune (三船敏郎)** across 16 films.",
            "examples": [
                {
                    "target": "黒澤明は『羅生門』でヴェネツィア金獅子賞を獲得し、主観的真実を描く「羅生門効果」と『七人の侍』のダイナミックなマルチカメラ手法で世界映画史を変革しました。",
                    "reading": "Kurosawa Akira wa Rashōmon de...",
                    "translation": "Akira Kurosawa won the Venice Golden Lion with Rashomon, transforming world film history with the subjective \"Rashomon Effect\" and the dynamic multi-camera technique of Seven Samurai."
                }
            ],
            "mnemonics": [
                "黒澤明 (Akira Kurosawa / 世界のクロサワ)! 『羅生門』1950 (Venice Golden Lion & The Rashomon Effect)! 『七人の侍』1954 (Multi-camera telephoto rain battle)! 『乱』1985 (King Lear on Fuji)! Toshirō Mifune!"
            ],
            "culturalNotes": [
                "George Lucas openly credited Kurosawa's 1958 film *The Hidden Fortress* (隠し砦の三悪人), with its two bickering peasants Tahei and Matashichi, as the primary structural inspiration for C-3PO and R2-D2 in *Star Wars*."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which master Japanese filmmaker won the Venice Golden Lion for \"Rashomon\" (1950) and directed \"Seven Samurai\" (1954)?",
                    "options": [
                        "小津安二郎 (146.1)",
                        "溝口健二 (146.2)",
                        "大島渚 (146.3)",
                        "黒澤明 (Akira Kurosawa) (146.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "黒澤明 (Akira Kurosawa)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What psychological and cinematic term, named after Kurosawa's 1950 film, describes when different eyewitnesses provide contradictory accounts of the same event?",
                    "options": [
                        "羅生門効果 (The Rashomon Effect) (146.1)",
                        "モンタージュ理論 (146.2)",
                        "クショフ効果 (146.3)",
                        "ベルト効果 (146.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "羅生門効果 (The Rashomon Effect)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Kurosawa's Seven Samurai pioneered simultaneous multi-camera filming and telephoto lenses, immersing the viewer directly inside the kinetic chaos of the rain-drenched battle.\"",
                    "options": [
                        "羅生門は現代の宇宙探査船のドキュメンタリーです。",
                        "黒澤明は無声映画の弁士でした。",
                        "三船敏郎は歌舞伎の女形専門俳優でした。",
                        "黒澤の『七人の侍』は、複数カメラの同時撮影と望遠レンズの先駆的導入により、雨に濡れた戦闘の動的な混沌の只中へと観客を直接引き込みました。"
                    ],
                    "answerIndex": 3,
                    "explanation": "Accurate Kurosawa analysis translation."
                },
                {
                    "prompt": "Which Shakespearean tragedy was adapted by Akira Kurosawa in his 1985 color epic *Ran*, transposing the story to Sengoku period warlords on Mount Fuji?",
                    "options": [
                        "『マクベス』",
                        "『ハムレット』",
                        "『リア王』 (King Lear)",
                        "『オセロ』"
                    ],
                    "answerIndex": 2,
                    "explanation": "『リア王』 (King Lear)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u30-l2": {
        "id": "ja-u30-l2",
        "unit": "ja-u30",
        "level": "C1",
        "objective": "The Tatami Low Angle & The Poetics of Ephemeral Transience: Yasujirō Ozu (小津安二郎 - 『東京物語』1953年 - 世界映画史上最高傑作ランキング首位、畳の上のローアングル（目線約90cm）、カーテン・ショット（ピロー・ショット）、原節子との名コンビ、もののあわれと家族の崩壊の静かな受容).",
        "presentation": {
            "explanation": "Yasujirō Ozu (小津安二郎 - 1903–1963 - Tokyo & Kamakura) and the supreme poetic minimalism of world cinema:\n- **Yasujirō Ozu (小津安二郎)**:\n  - Repeatedly voted by international film directors in the British Film Institute's *Sight & Sound* decennial poll as the creator of the **#1 Greatest Movie in Film History (『東京物語』Tokyo Story)**; gravestone in Engaku-ji Temple, Kamakura, inscribed with a single kanji: **«無» (Mu / Nothingness)**.\n- Stylistic Signatures & Cinematic Grammar:\n  - **The Tatami Low Angle (畳の上のローアングル)**:\n    - Placed the 50mm camera lens at approximately **90 centimeters (3 feet) off the floor**, matching the eye-level of a person seated on a traditional tatami mat, creating a calm, respectful, static architectural geometry;\n  - **Pillow Shots / Curtain Shots (中間字幕・静物ショット)**: Intercut static shots of empty train tracks, laundry drying in the wind, tea kettles, or smokestacks, allowing temporal space for emotional resonance and contemplation;\n  - **Direct-to-Camera Dialogue**: Characters look almost straight into the camera lens during conversations, creating intimate direct connection with the viewer;\n  - **Masterpieces**: **『晩春』(Late Spring - 1949)**, **『麦秋』(Early Summer - 1951)**, **『東京物語』(Tokyo Story - 1953)**, and **『秋刀魚の味』(An Autumn Afternoon - 1962)** starring the radiant **Setsuko Hara (原節子)**.",
            "examples": [
                {
                    "target": "小津安二郎は『東京物語』において畳のローアングルと静物ショットを極め、家族の変遷と「もののあわれ」を静謐に描き出しました。",
                    "reading": "Ozu Yasujirō wa Tōkyō Monogatari...",
                    "translation": "Yasujiro Ozu perfected the low tatami angle and still-life shots in Tokyo Story, serenely depicting family transience and \"mono no aware.\""
                }
            ],
            "mnemonics": [
                "小津安二郎 (Yasujirō Ozu & Kamakura Engaku-ji «無»)! 『東京物語』Tokyo Story 1953 (#1 Greatest Film in Sight & Sound)! 畳のローアングル (90cm tatami eye level)! Pillow shots (Quiet inanimate moments)! Setsuko Hara! もののあわれ!"
            ],
            "culturalNotes": [
                "Ozu was famously fond of saying: *\"I am like a tofu maker; I can make fried tofu, boiled tofu, or stuffed tofu, but it is always tofu\"*—reflecting his lifelong dedication to refining his singular artistic style."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which master Japanese filmmaker directed \"Tokyo Story\" (1953), renowned for his 90cm low tatami camera angle and pillow shots?",
                    "options": [
                        "小津安二郎 (Yasujirō Ozu) (147.1)",
                        "成瀬巳喜男 (147.2)",
                        "溝口健二 (147.3)",
                        "黒澤明 (147.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "小津安二郎 (Yasujirō Ozu)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What single Zen Buddhist kanji character is engraved upon Yasujirō Ozu's tombstone at Engaku-ji Temple in Kamakura?",
                    "options": [
                        "«無» (Mu / Nothingness) (147.1)",
                        "«美» (147.2)",
                        "«愛» (147.3)",
                        "«道» (147.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "«無» (Mu / Nothingness)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Ozu's camera maintains a static tatami eye-level perspective, intercutting contemplative pillow shots to convey the quiet, poignant transience of family life (mono no aware).\"",
                    "options": [
                        "東京物語はサイエンスフィクション映画です。",
                        "小津安二郎はハリウッドでアクション映画のみを監督しました。",
                        "小津のカメラは静的な畳の目線の視点を保ち、瞑想的なピロー・ショットを挿入することで、家族生活の静かで痛切な無常感（もののあわれ）を伝えます。",
                        "原節子は能楽の面職人でした。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurate Ozu analysis translation."
                },
                {
                    "prompt": "Which beloved Japanese actress starred as the devoted daughter-in-law Noriko across Ozu's classic \"Noriko Trilogy\" (Late Spring, Early Summer, Tokyo Story)?",
                    "options": [
                        "田中絹代",
                        "原節子 (Setsuko Hara)",
                        "高峰秀子",
                        "山田五十鈴"
                    ],
                    "answerIndex": 1,
                    "explanation": "原節子 (Setsuko Hara)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u30-l3": {
        "id": "ja-u30-l3",
        "unit": "ja-u30",
        "level": "C1",
        "objective": "The Fluid Long Take & The Tragic Elevation of Women: Kenji Mizoguchi (溝口健二 - ヴェネツィア国際映画祭銀獅子賞『雨月物語』1953年、国際賞『西鶴一代女』1952年、『山椒大夫』1954年、一場一鏡（ワンシーン・ワンカット）の優美な長回し、女性の悲劇と崇高な自己犠牲).",
        "presentation": {
            "explanation": "Kenji Mizoguchi (溝口健二 - 1898–1956 - Tokyo & Kyoto) and the supreme master of the cinematic long take and scrolling pictorial elegance:\n- **Kenji Mizoguchi (溝口健二)**:\n  - French New Wave directors (Jean-Luc Godard, François Truffaut, Jacques Rivette) proclaimed him the greatest director of all cinema; won major awards at the Venice Film Festival three consecutive years (1952, 1953, 1954).\n- Stylistic Mastery & Philosophical Ethos:\n  - **The \"One Scene, One Cut\" Technique (一場一鏡 / Ichijō Ikkyō - Fluid Long Take)**:\n    - Refused rapid montage cutting; allowed entire dramatic scenes to unfold in unbroken, hypnotic, mobile long takes with graceful panning cranes and crane dollies, resembling a traditional Japanese painted handscroll (*Emakimono*) unrolling across time;\n  - **The Tragic Nobility of Women**: Chronicled the systemic oppression, sacrifice, and spiritual elevation of Japanese women in patriarchal feudal society;\n  - **Landmark Masterpieces**:\n    - **『西鶴一代女』(The Life of Oharu - 1952 - Venice International Prize)**: The tragic downward spiral and spiritual endurance of a court lady starring **Kinuyo Tanaka (田中絹代)**;\n    - **『雨月物語』(Ugetsu - 1953 - Venice Silver Lion)**: Ethereal ghost masterpiece set on a misty Biwa lake in wartime;\n    - **『山椒大夫』(Sansho the Bailiff - 1954)**: Legendary moral drama of fraternal devotion and compassion (*\"Without mercy, man is like a beast\"*).",
            "examples": [
                {
                    "target": "溝口健二は『雨月物語』や『西鶴一代女』で一場一鏡の流麗な長回しを確立し、女性の悲哀と精神的崇高さを絵巻物のように描き出しました。",
                    "reading": "Mizoguchi Kenji wa Ugetsu Monogatari...",
                    "translation": "Kenji Mizoguchi established the fluid long take in Ugetsu and The Life of Oharu, depicting the sorrow and spiritual nobility of women like an unrolling handscroll."
                }
            ],
            "mnemonics": [
                "溝口健二 (Kenji Mizoguchi & Venice Film Festival Titan)! 一場一鏡 (One Scene, One Cut fluid long take)! 『雨月物語』Ugetsu 1953 (Lake Biwa ghost masterpiece)! 『西鶴一代女』with Kinuyo Tanaka! 『山椒大夫』! French New Wave idol!"
            ],
            "culturalNotes": [
                "Godard famously wrote in *Cahiers du Cinéma*: *\"If music is Mozart and painting is Rembrandt, then cinema is Kenji Mizoguchi.\"*"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which master Japanese director won Venice Film Festival awards three years in a row for \"The Life of Oharu\", \"Ugetsu\", and \"Sansho the Bailiff\"?",
                    "options": [
                        "溝口健二 (Kenji Mizoguchi) (148.1)",
                        "黒澤明 (148.2)",
                        "小津安二郎 (148.3)",
                        "市川崑 (148.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "溝口健二 (Kenji Mizoguchi)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What famous cinematic directing technique, known in Japanese as \"Ichijō Ikkyō\" (一場一鏡), was perfected by Mizoguchi to film complex scenes without cutting?",
                    "options": [
                        "ワンシーン・ワンカットの長回し (One-scene one-cut fluid long take) (148.1)",
                        "クローズアップの連続 (148.2)",
                        "静止画のコマ撮り (148.3)",
                        "超高速ジャンプカット (148.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "ワンシーン・ワンカットの長回し."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Mizoguchi's scrolling long takes and crane movements capture the emotional suffering of women with transcendent pictorial beauty akin to classical Japanese scroll paintings.\"",
                    "options": [
                        "溝口健二はテレビCMの専門ディレクターでした。",
                        "溝口の流れるような長回しとクレーン撮影は、古典的な日本の絵巻物に似た超越的な絵画的美しさで女性の感情的苦悩を捉えています。",
                        "田中絹代はフランスのバレエダンサーでした。",
                        "雨月物語はアメリカの西部劇です。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurate Mizoguchi analysis translation."
                },
                {
                    "prompt": "On which historic lake in Shiga Prefecture is the misty, haunting boat journey filmed in Mizoguchi's 1953 masterpiece *Ugetsu*?",
                    "options": [
                        "琵琶湖 (Lake Biwa)",
                        "中禅寺湖",
                        "洞爺湖",
                        "芦ノ湖"
                    ],
                    "answerIndex": 0,
                    "explanation": "琵琶湖 (Lake Biwa)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u30-l4": {
        "id": "ja-u30-l4",
        "unit": "ja-u30",
        "level": "C2",
        "objective": "Animism, Hand-Drawn Flight & Ecological Mythology: Hayao Miyazaki and Studio Ghibli (宮﨑駿 - スタジオジブリ1985年設立、米アカデミー賞長編アニメ賞＆ベルリン金熊賞『千と千尋の神隠し』2001年、『もののけ姫』1997年 - 生きろ。タタラ場とシシ神の森、『風の谷のナウシカ』、手描き作画の至高美と飛行への憧憬).",
        "presentation": {
            "explanation": "Hayao Miyazaki (宮﨑駿 - 1941–present - Tokyo & Mitaka) and the zenith of hand-drawn animated world mythology:\n- **Hayao Miyazaki (宮﨑駿 / Studio Ghibli - スタジオジブリ)**:\n  - Co-founded **Studio Ghibli** in 1985 with Isao Takahata and Toshio Suzuki; awarded two Academy Awards for Best Animated Feature (*Spirited Away* in 2002 and *The Boy and the Heron* in 2024), the Golden Bear at Berlin, and the Academy Honorary Award (2014).\n- Artistic Principles & Thematic Universes:\n  - **Hand-Drawn Artisan Animation (手描き作画の職人美)**: Insists on hand-painted watercolor backgrounds and hand-drawn cell animation capturing organic natural physics (water currents, wind in grass, falling debris, floating clouds);\n  - **Shinto Animism & Ecology (八百万の神々と自然共生)**: Nature is not a passive resource for human exploitation, but a living sacred realm inhabited by kami spirits;\n  - **The Euphoria of Flight (飛行への憧れ)**: From gliders in *Nausicaä* to flying castles and seaplanes in *Porco Rosso*;\n- Monumental Masterpieces:\n  - **『風の谷のナウシカ』(Nausicaä of the Valley of the Wind - 1984)**: Post-apocalyptic ecological redemption;\n  - **『もののけ姫』(Princess Mononoke - 1997 - Catchphrase: «生きろ。»)**: Complex clash between Lady Eboshi's ironworking civilization (Tataraba) and San/Moro's primordial forest spirits;\n  - **『千と千尋の神隠し』(Spirited Away - 2001)**: 10-year-old Chihiro working in the bathhouse of the spirits (Aburaya) to restore her identity and save her parents.",
            "examples": [
                {
                    "target": "宮﨑駿はスタジオジブリで『千と千尋の神隠し』や『もののけ姫』を生み出し、手描きアニメーションと神道自然観で世界最高峰の芸術を確立しました。",
                    "reading": "Miyazaki Hayao wa Sutajio Jiburi de...",
                    "translation": "Hayao Miyazaki created Spirited Away and Princess Mononoke at Studio Ghibli, establishing world-class art through hand-drawn animation and Shinto ecological worldviews."
                }
            ],
            "mnemonics": [
                "宮﨑駿 (Hayao Miyazaki & Studio Ghibli 1985)! 『千と千尋の神隠し』Spirited Away 2001 (Oscar & Berlin Golden Bear)! 『もののけ姫』Princess Mononoke («生きろ。»)! Hand-drawn watercolor physics & ecstasy of flight! Shinto animism!"
            ],
            "culturalNotes": [
                "The Ghibli Museum in Mitaka, Tokyo, features a rooftop bronze robot soldier from *Castle in the Sky* and exclusive short films projected in its Saturn Theater."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which master Japanese animation auteur co-founded Studio Ghibli and won the Academy Award and Berlin Golden Bear for \"Spirited Away\" (2001)?",
                    "options": [
                        "今敏 (149.1)",
                        "新海誠 (149.2)",
                        "宮﨑駿 (Hayao Miyazaki) (149.3)",
                        "高畑勲 (149.4)"
                    ],
                    "answerIndex": 2,
                    "explanation": "宮﨑駿 (Hayao Miyazaki)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What memorable one-word tagline («生きろ。» / \"Live.\") accompanied the theatrical release of Miyazaki's 1997 epic \"Princess Mononoke\"?",
                    "options": [
                        "「信じよ。」 (149.1)",
                        "「戦え。」 (149.2)",
                        "「生きろ。」 (\"Live.\") (149.3)",
                        "「飛べ。」 (149.4)"
                    ],
                    "answerIndex": 2,
                    "explanation": "「生きろ。」."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Miyazaki's cinema synthesizes Shinto animistic reverie with intricate hand-drawn physics, depicting the ecological struggle between industrial expansion and sacred nature.\"",
                    "options": [
                        "宮﨑の映画は、神道の精霊的幻想と複雑な手描き物理描写を融合させ、産業の拡大と神聖な自然の間の生態学的闘争を描き出します。",
                        "千と千尋の神隠しはフランスのバレエ作品です。",
                        "スタジオジブリは1900年に設立されました。",
                        "宮﨑駿は3Dコンピュータゲームのプログラマーです。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurate Miyazaki analysis translation."
                },
                {
                    "prompt": "What mythical bathhouse for eight million Shinto kami spirits, run by the sorceress Yubaba, serves as the main setting of *Spirited Away*?",
                    "options": [
                        "千代の湯",
                        "湯屋・極楽亭",
                        "天空の城",
                        "油屋 (Aburaya / The Oil House Bathhouse)"
                    ],
                    "answerIndex": 3,
                    "explanation": "油屋 (Aburaya)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u30-l5": {
        "id": "ja-u30-l5",
        "unit": "ja-u30",
        "level": "C2",
        "objective": "C2 synthesis on Samurai Existential Rebellion & The Japanese New Wave: Masaki Kobayashi & Nagisa Ōshima (小林正樹 - カンヌ審査員特別賞『切腹』1962年 - 武士道イデオロギーの偽善の告発、『怪談』1964年、大島渚 - 松竹ヌーヴェルヴァーグ、『愛のコリーダ』1976年、『戦場のメリークリスマス』1983年 - 坂本龍一とデヴィッド・ボウイ).",
        "presentation": {
            "explanation": "Masaki Kobayashi and Nagisa Ōshima: Radical existential rebellion and the Japanese New Wave:\n- **Masaki Kobayashi (小林正樹 - 1916–1996 - Otaru, Hokkaido & Tokyo)**:\n  - Uncompromising humanist auteur; pacifist drafted into WWII who refused promotion to officer in protest against imperial militarism;\n  - **『切腹』(Harakiri - 1962 - Cannes Special Jury Prize)**:\n    - The supreme anti-samurai masterpiece; masterless ronin Hanshirō Tsugumo (**Tatsuya Nakadai**) arrives at the Ii clan palace requesting ritual suicide, exposing the cruel, hypocritical vanity of the feudal samurai code (*Bushidō*);\n  - **『怪談』(Kwaidan - 1964 - Cannes Special Jury Prize & Oscar Nominee)**: 4-part ghost anthology with Toru Takemitsu's avant-garde score and stylized studio sets;\n- **Nagisa Ōshima (大島渚 - 1932–2013 - Kyoto & Tokyo)**:\n  - Leader of the **Japanese New Wave (松竹ヌーヴェルヴァーグ)**; exploded traditional cinematic taboos of politics, sexuality, and national identity;\n  - **『愛のコリーダ』(In the Realm of the Senses - 1976)**: Uncompromising exploration of all-consuming erotic obsession;\n  - **『戦場のメリークリスマス』(Merry Christmas, Mr. Lawrence - 1983)**: POW camp in Java starring **David Bowie**, **Ryūichi Sakamoto (坂本龍一)** (who also composed the legendary soundtrack), and **Takeshi Kitano (ビートたけし)**.",
            "examples": [
                {
                    "target": "小林正樹は『切腹』で武士道イデオロギーの偽善を告発し、大島渚は『戦場のメリークリスマス』で越境的な人間精神を描き出しました。",
                    "reading": "Kobayashi Masaki wa Seppuku de...",
                    "translation": "Masaki Kobayashi exposed the hypocrisy of samurai ideology in Harakiri, while Nagisa Oshima depicted the trans-boundary human spirit in Merry Christmas Mr. Lawrence."
                }
            ],
            "mnemonics": [
                "小林正樹 (Masaki Kobayashi)! 『切腹』Harakiri 1962 (Tatsuya Nakadai dismantling feudal hypocrisy)! 『怪談』Kwaidan 1964! 大島渚 (Nagisa Ōshima & Japanese New Wave)! 『戦場のメリークリスマス』(David Bowie & Ryūichi Sakamoto)!"
            ],
            "culturalNotes": [
                "Composer Ryūichi Sakamoto agreed to act in *Merry Christmas Mr. Lawrence* on the single condition that Ōshima let him compose the complete musical score, creating one of the most iconic film themes in history."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which master Japanese filmmaker directed the 1962 Cannes-winning anti-feudal samurai masterpiece \"Harakiri\" (『切腹』)?",
                    "options": [
                        "小林正樹 (Masaki Kobayashi) (150.1)",
                        "大島渚 (150.2)",
                        "岡本喜八 (150.3)",
                        "深作欣二 (150.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "小林正樹 (Masaki Kobayashi)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Which 1983 WWII film directed by Nagisa Ōshima starred rock icon David Bowie and composer Ryūichi Sakamoto in a Java POW camp?",
                    "options": [
                        "『愛のコリーダ』 (150.1)",
                        "『日本の夜と霧』 (150.2)",
                        "『御法度』 (150.3)",
                        "『戦場のメリークリスマス』 (Merry Christmas, Mr. Lawrence) (150.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "『戦場のメリークリスマス』."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Kobayashi's Harakiri deployed geometrical framing and razor-sharp dramatic tension to deconstruct the authoritarian cruelty disguised beneath feudal samurai honor.\"",
                    "options": [
                        "小林正樹は歌舞伎の舞台役者でした。",
                        "切腹はハリウッドのアニメーション映画です。",
                        "坂本龍一は映画音楽の作曲を拒否しました。",
                        "小林の『切腹』は、幾何学的な画面構成と研ぎ澄まされた劇的緊張感を用いて、封建的な武士の名誉の陰に隠された権威主義的な残酷さを解体しました。"
                    ],
                    "answerIndex": 3,
                    "explanation": "Accurate Kobayashi and Ōshima analysis translation."
                },
                {
                    "prompt": "What legendary Japanese actor starred as the defiant ronin Hanshirō Tsugumo in Kobayashi's *Harakiri* (1962) and in Kurosawa's *Ran* (1985)?",
                    "options": [
                        "三船敏郎",
                        "志村喬",
                        "仲代達矢 (Tatsuya Nakadai)",
                        "勝新太郎"
                    ],
                    "answerIndex": 2,
                    "explanation": "仲代達矢 (Tatsuya Nakadai)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u31-l1": {
        "id": "ja-u31-l1",
        "unit": "ja-u31",
        "level": "C1",
        "objective": "The Architecture of Washoku, The Fifth Taste Umami & UNESCO Heritage (和食 - 2013年ユネスコ無形文化遺産登録、一汁三菜の栄養黄金比、旬の三段階（走り・盛り・名残）、だし（昆布のグルタミン酸と鰹節のイノシン酸の相乗効果）、池田菊苗教授によるうま味（Umami）の科学的発見 1908年).",
        "presentation": {
            "explanation": "Washoku (和食) and the scientific and philosophical foundations of Japanese traditional dietary cultures:\n- **UNESCO Intangible Cultural Heritage of Humanity (2013)**:\n  - Inscribed as a social practice based on a comprehensive skill, knowledge, and respect for nature and sustainable natural resources.\n- Core Philosophical & Nutritional Pillars:\n  - **The Golden Ratio: Ichijū-Sansai (一汁三菜 / One Soup, Three Dishes)**:\n    - Steamed white rice (*shari / gohan*), one clear soup or miso soup (*jū*), one main dish (*shusai* - fish/meat), and two side dishes (*fukusai* - vegetables/seaweed/tofu), achieving perfect nutritional balance, hydration, and low saturated fat;\n  - **The Poetry of Shun (旬 / Seasonal Micro-Timing)**:\n    - **1. Hashiri (走り)**: The exciting first arrival of a seasonal ingredient;\n    - **2. Sakari (盛り)**: The absolute peak of ripeness, flavor, and abundance;\n    - **3. Nagori (名残)**: The lingering, nostalgic final days of the ingredient before disappearing until next year;\n- The Alchemy of Dashi (出汁) & The Discovery of Umami:\n  - **Umami (うま味 - The Fifth Basic Taste)**: Discovered and isolated in 1908 by Tokyo Imperial University Professor **Kikunae Ikeda (池田菊苗)** from kombu kelp;\n  - **Umami Synergistic Multiplication (うま味の相乗効果)**:\n    - Combining **Glutamic acid (グルタミン酸)** from dried Ma-kombu kelp with **Inosinic acid (イノシン酸)** from dried fermented bonito flakes (*Katsuobushi*) multiplies perceived savoriness **7 to 8 times** over either ingredient alone!",
            "examples": [
                {
                    "target": "和食はユネスコ無形文化遺産に登録されており、昆布のグルタミン酸と鰹節のイノシン酸が織りなす「うま味」の相乗効果がその真髄です。",
                    "reading": "Washoku wa Yunesuko mukei bunka...",
                    "translation": "Washoku is inscribed as a UNESCO Intangible Cultural Heritage, whose essence is the synergistic multiplication of umami woven from kombu glutamic acid and bonito inosinic acid."
                }
            ],
            "mnemonics": [
                "和食 (UNESCO 2013)! 一汁三菜 (Ichijū-Sansai)! 旬 (Hashiri, Sakari, Nagori)! うま味 (Umami discovered by Kikunae Ikeda 1908)! Dashi synergy: Kombu (Glutamate) + Katsuobushi (Inosinate) = 8x savoriness!"
            ],
            "culturalNotes": [
                "Katsuobushi (dried skipjack tuna) is the hardest food in the world, undergoing multiple mould fermentations (Aspergillus glaucus) and sun-dryings until it rings like wood or glass when struck."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which Tokyo Imperial University professor scientifically discovered and named the fifth basic taste \"Umami\" from kombu dashi in 1908?",
                    "options": [
                        "湯川秀樹 (151.1)",
                        "小柴昌俊 (151.2)",
                        "山中伸弥 (151.3)",
                        "池田菊苗 (Kikunae Ikeda) (151.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "池田菊苗 (Kikunae Ikeda)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What two amino/nucleic acid compounds synergistically combine in traditional Japanese dashi to multiply savory flavor 8-fold?",
                    "options": [
                        "グルタミン酸（昆布）とイノシン酸（鰹節） (151.1)",
                        "クエン酸とリンゴ酸 (151.2)",
                        "乳酸と酢酸 (151.3)",
                        "アスコルビン酸とタウリン (151.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "グルタミン酸（昆布）とイノシン酸（鰹節）."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Washoku reflects profound reverence for natural seasonality through the three stages of Shun (hashiri, sakari, nagori) and the nutritional balance of ichiju-sansai.\"",
                    "options": [
                        "鰹節は生のマグロを冷凍したものです。",
                        "和食は1990年にアメリカで発明されたファストフードです。",
                        "和食は、「旬」の三段階（走り・盛り・名残）と「一汁三菜」の栄養バランスを通じて、自然の季節性に対する深甚な敬意を反映しています。",
                        "うま味は酸味と甘味を混ぜた人工調味料に過ぎません。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurate Washoku analysis translation."
                },
                {
                    "prompt": "What term describes the traditional golden compositional format of Japanese meals consisting of rice, soup, one main protein dish, and two vegetable side dishes?",
                    "options": [
                        "会席料理",
                        "一汁三菜 (Ichijū-Sansai)",
                        "本膳料理",
                        "精進料理"
                    ],
                    "answerIndex": 1,
                    "explanation": "一汁三菜 (Ichijū-Sansai)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u31-l2": {
        "id": "ja-u31-l2",
        "unit": "ja-u31",
        "level": "C1",
        "objective": "Kaiseki Ryōri, The Tea Aesthetic & Rosanjin's Harmony of Dish and Vessel (懐石料理・会席料理 - 千利休の一期一会とおもてなしの心、侘び寂びの美意識、北大路魯山人「器は料理の着物である」、八寸・向付・椀物・焼き物のコース構成と季節の情景描写).",
        "presentation": {
            "explanation": "Kaiseki Ryōri (懐石・会席料理) and the philosophical union of gastronomy, vessel, and Zen tea ceremony:\n- **Cha-kaiseki (懐石) vs Kaiseki (会席)**:\n  - **Cha-kaiseki (茶懐石)**: The austere, spiritual meal served by the host before the formal Chanoyu tea ceremony developed by **Sen no Rikyū (千利休)**; named after the warm stone (*kaiseki*) Zen monks held against their stomachs during cold meditation;\n  - **Kaiseki (会席料理)**: The refined, multi-course banquet of Kyoto haute cuisine celebrating seasonal poetry and hospitality (*omotenashi*);\n- The Course Structure & Spatial Poetry:\n  - **1. Sakizuke (先付)**: Seasonal welcoming amuse-bouche;\n  - **2. Hassun (八寸)**: The visual centerpiece: an 8-sun (approx 24cm) square cedar wood tray expressing the seasonal harmony of mountain and sea ingredients (*Umi no mono, Yama no mono*);\n  - **3. Mukōzuke (向付)**: Sashimi served with fresh wasabi;\n  - **4. Owan (椀物)**: Clear dashi soup—the definitive test of a master chef's dashi craftsmanship;\n  - **5. Yakimono (焼物)** & **Takiawase (炊合せ)**;\n- **Rosanjin's Doctrine (北大路魯山人 - 1883–1959)**:\n  - Master calligrapher, potter, and gastronome who declared: **«器は料理の着物である»** (*\"Vessels and ceramics are the kimonos of food\"*);\n  - Food and antique ceramics (Oribe, Bizen, Karatsu, Lacquerware) must form a single, indivisible artistic masterpiece.",
            "examples": [
                {
                    "target": "北大路魯山人が「器は料理の着物」と説いたように、会席料理は千利休の「一期一会」の精神で器と旬の味覚を一体化させます。",
                    "reading": "Kitaōji Rosanjin ga...",
                    "translation": "As Kitaoji Rosanjin taught that \"vessels are the clothing of food,\" kaiseki cuisine unifies ceramic vessels with seasonal delicacies in Sen no Rikyu's spirit of \"Ichigo Ichie.\""
                }
            ],
            "mnemonics": [
                "懐石・会席 (Kaiseki Kyoto Haute Cuisine)! Sen no Rikyū (Ichigo Ichie & Omotenashi)! 八寸 (Hassun - Mountain & Sea on 24cm tray)! 椀物 (Owan clear soup test of dashi)! 北大路魯山人: «器は料理の着物である» (Vessels are food's kimonos)!"
            ],
            "culturalNotes": [
                "In true Kyoto Kaiseki, the lacquerware soup bowl lid is lightly misted with clean water drops (*shizuku*) right before serving to prove to the guest that no one has opened the lid since the chef plated it."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which master Japanese calligrapher, potter, and gastronome famously declared that \"Ceramic vessels are the kimonos of food\" (器は料理の着物)?",
                    "options": [
                        "北大路魯山人 (Kitaōji Rosanjin) (152.1)",
                        "古田織部 (152.2)",
                        "本阿弥光悦 (152.3)",
                        "千利休 (152.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "北大路魯山人 (Kitaōji Rosanjin)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What key course in a traditional Kaiseki banquet consists of an 8-sun square cedar tray harmonizing seasonal delicacies from both mountain and sea?",
                    "options": [
                        "八寸 (Hassun) (152.1)",
                        "向付 (Mukōzuke) (152.2)",
                        "水物 (Mizumono) (152.3)",
                        "椀物 (Wanmono) (152.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "八寸 (Hassun)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Kaiseki cuisine embodies Sen no Rikyu's Zen hospitality (ichigo ichie), orchestrating seasonal flavors and handmade ceramics into a harmonious sensory artwork.\"",
                    "options": [
                        "懐石料理は電車の駅弁として発祥しました。",
                        "懐石料理は、千利休の禅的もてなし（一期一会）を体現し、季節の味覚と手作りの陶磁器を調和のとれた感覚的芸術作品へと結実させます。",
                        "魯山人は料理に陶器を使うことを固く禁じました。",
                        "八寸とは8種類のデザートを食べる儀式です。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurate Kaiseki analysis translation."
                },
                {
                    "prompt": "What warm object, held by Zen monks against their stomachs beneath their robes to ward off cold and hunger, gave Cha-kaiseki (懐石) its poetic name?",
                    "options": [
                        "温めた石 (A heated pocket stone / Kaiseki)",
                        "竹筒の温水",
                        "熱い鉄瓶",
                        "香炉"
                    ],
                    "answerIndex": 0,
                    "explanation": "温めた石 (A heated pocket stone / Kaiseki)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u31-l3": {
        "id": "ja-u31-l3",
        "unit": "ja-u31",
        "level": "C1",
        "objective": "The Art of Edomae Sushi & Aging Alchemy: Sukiyabashi Jiro (江戸前寿司 - 熟成（旨味のアミノ酸凝縮）、赤酢シャリの温度管理（人肌約36℃）、煮切り醤油とツメ（煮詰め）、漬けマグロと煮穴子の伝統技法、すきやばし次郎の小野二郎と職人の神髄).",
        "presentation": {
            "explanation": "Edomae Sushi (江戸前寿司) and the artisanal pinnacle of precision and umami maturation:\n- **Edomae Tradition (江戸前 - Edo Bay / Tokyo)**:\n  - Developed in the 1820s by Hanaya Yohei (華屋与兵衛) in old Edo (Tokyo); transformed fast-food street stalls into the world's most sophisticated minimalist culinary art form.\n- Scientific Mastery & Artisanal Precision:\n  - **The Science of Fish Aging (熟成 / Jukusei)**:\n    - Contrary to the western myth that fresher is always better, fish meat is aged for days (or weeks for tuna and white fish) under strict temperature control;\n    - Cellular ATP breaks down into savory **Inosinic acid**, while proteins degrade into rich amino acids, softening muscle fibers to create butter-like melt and immense umami depth;\n  - **The Supremacy of Shari (シャリ / Sushi Rice)**:\n    - 70% of sushi quality resides in the rice;\n    - Seasoned with traditional aged red sake-lees vinegar (**Akasu / 赤酢**) and sea salt (zero sugar in purist Edomae);\n    - Maintained strictly at **human body temperature (Hito-hada / 人肌 ~ 36°C)** so the rice grains harmonize perfectly with the fish fat on the tongue;\n  - **Classic Edomae Preservations**:\n    - **Zuke (漬け)**: Marinating lean tuna (*Maguro akami*) in hot sake, mirin, and soy sauce;\n    - **Shime (締め)**: Curing oily fish (*Kohada / Shime-saba*) in salt and vinegar;\n    - **Ni-anago (煮穴子)**: Braising sea eel until meltingly tender, glazed with a sweet reduction sauce (**Tsume / 煮詰め**);\n  - Documented globally in David Gelb's film *Jiro Dreams of Sushi* (2011) starring **Jiro Ono (小野二郎)** at Sukiyabashi Jiro.",
            "examples": [
                {
                    "target": "江戸前寿司の極致は、赤酢シャリの人肌の温度管理と魚の熟成による旨味の凝縮にあり、すきやばし次郎が世界を魅了しました。",
                    "reading": "Edomae zushi no kyokuchi wa...",
                    "translation": "The pinnacle of Edomae sushi lies in the body-temperature control of red-vinegar shari and the concentration of umami through fish aging, mesmerizing the world at Sukiyabashi Jiro."
                }
            ],
            "mnemonics": [
                "江戸前寿司 (Edomae Sushi from Edo Bay 1820s)! Jukusei (Fish aging for Inosinic acid umami)! Shari at Hito-hada (Human body temp ~36°C with Akasu red vinegar)! Nikiri soy & Tsume glaze! Jiro Ono (すきやばし次郎)!"
            ],
            "culturalNotes": [
                "Apprentices at top Tokyo sushi counters spend up to ten years mastering rice washing, fire management, and slicing before they are permitted to touch expensive fish or make tamagoyaki."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "What traditional vinegar, made from fermented aged sake lees, is used in authentic Edomae sushi to give the shari rice its distinctive reddish-brown color and mellow acidity?",
                    "options": [
                        "赤酢 (Akasu / Red Sake-Lees Vinegar) (153.1)",
                        "米酢 (White Rice Vinegar) (153.2)",
                        "黒酢 (Black Vinegar) (153.3)",
                        "リンゴ酢 (Apple Cider Vinegar) (153.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "赤酢 (Akasu / Red Sake-Lees Vinegar)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "At what precise physical temperature should master Edomae sushi shari rice be maintained when served to the customer?",
                    "options": [
                        "人肌の温度（約36℃ / Human body temperature） (153.1)",
                        "沸騰直後の熱湯温度（約80℃） (153.2)",
                        "室温ゼロ度 (153.3)",
                        "氷水で冷やした温度（約5℃） (153.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "人肌の温度（約36℃ / Human body temperature）."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Edomae sushi masters age fish for days to allow natural enzymes to convert cellular ATP into savory inosinic acid, pairing the cut with body-temperature red-vinegar shari.\"",
                    "options": [
                        "江戸前寿司の職人は、天然の酵素が細胞内のATPを風味豊かなイノシン酸へと変換するように魚を数日間熟成させ、その切り身を人肌の赤酢シャリと合わせます。",
                        "小野二郎はフランス料理のパティシエです。",
                        "シャリには大量の白砂糖を混ぜるのが江戸前の基本です。",
                        "江戸前寿司は冷凍魚のみを使用する現代の工業製品です。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurate Edomae sushi analysis translation."
                },
                {
                    "prompt": "What traditional glazed reduction sauce, simmered from fish stock, soy sauce, and mirin, is brushed on top of cooked eel (Anago) in Edomae sushi?",
                    "options": [
                        "ポン酢",
                        "ごまだれ",
                        "わさび醤油",
                        "ツメ / 煮詰め (Tsume)"
                    ],
                    "answerIndex": 3,
                    "explanation": "ツメ / 煮詰め (Tsume)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u31-l4": {
        "id": "ja-u31-l4",
        "unit": "ja-u31",
        "level": "C2",
        "objective": "Wagyu Genetics, Terroir & A5 Marbling Science: Tajima Lineage (和牛 - 但馬牛（兵庫県）の純血統と日本の三大和牛（松阪牛・神戸牛・近江牛）、A5ランクの歩留等級と肉質等級、B.M.S.（脂肪交雑基準 No.1〜12）、オレイン酸含有率と体温（約25℃）でとろける霜降り脂の融点力学).",
        "presentation": {
            "explanation": "Wagyu (和牛) genetics, agricultural terroir, and the biophysical science of marbling:\n- **Tajima Bloodline Purity (但馬牛 - Hyogo Prefecture)**:\n  - Over 99.9% of all prized Kuroge Washu (Japanese Black cattle) across Japan trace their pure maternal genetic lineage directly back to a single legendary cow named **«Tajima-go» (但馬牛)** in the Mikata district of Hyogo;\n  - Underpins the Big Three Wagyu brands: **Kobe Beef (神戸牛)**, **Matsusaka Beef (松阪牛)**, and **Ōmi Beef (近江牛)**;\n- The Rigorous Japanese Grading Standards (JMGA):\n  - **Yield Grade (歩留等級: A, B, C)**: Percentage of marketable meat from carcass (A = 72% or higher);\n  - **Quality Grade (肉質等級: 1 to 5)** based on four criteria: 1. Marbling (B.M.S.), 2. Meat color & brightness, 3. Firmness & texture, 4. Fat color & luster;\n  - **B.M.S. (Beef Marbling Standard No. 1 to 12)**: Grade 5 requires BMS No. 8 to 12;\n- The Biophysics of Wagyu Fat:\n  - Wagyu fat contains up to **55–60% Monounsaturated Oleic Acid (オレイン酸)**;\n  - Lowers fat melting point down to **25°C to 28°C** (well below human body temperature ~36.5°C), meaning the exquisite intramuscular marbling (*shimofuri*) melts instantly upon touching the human tongue, releasing sweet peach-and-coconut aromatic lactones (*Wagyu-kō*).",
            "examples": [
                {
                    "target": "但馬牛の血統を継ぐA5ランクの神戸牛や松阪牛は、オレイン酸が豊富で体温より低い温度で溶ける至高の霜降りを誇ります。",
                    "reading": "Tajima-ushi no kettō o tsugu...",
                    "translation": "A5-rank Kobe and Matsusaka beef, inheriting the Tajima bloodline, boast supreme marbling rich in oleic acid that melts at temperatures below human body heat."
                }
            ],
            "mnemonics": [
                "和牛 (Wagyu)! Tajima-ushi (但馬牛 in Hyogo as pure root ancestor)! Kobe, Matsusaka & Ōmi! A5 Rank (Yield A + Quality 5)! B.M.S. No. 8–12! Oleic acid melts at ~25°C in the mouth!"
            ],
            "culturalNotes": [
                "Matsusaka cattle are pampered with beer mashes during summer heat to stimulate appetite and massaged with shochu spirit to ensure even lipid distribution throughout the muscle tissue."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which historic region in Hyogo Prefecture is the pure ancestral genetic origin of over 99% of all Japanese Black Wagyu cattle (Kuroge Washu)?",
                    "options": [
                        "薩摩牛 (154.1)",
                        "宮崎牛 (154.2)",
                        "但馬牛 (Tajima-ushi / Hyogo Prefecture) (154.3)",
                        "十勝牛 (Hokkaido) (154.4)"
                    ],
                    "answerIndex": 2,
                    "explanation": "但馬牛 (Tajima-ushi / Hyogo Prefecture)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Why does authentic A5 Japanese Wagyu fat create a melting, non-greasy sensation in the mouth?",
                    "options": [
                        "Because the fat contains zero calories. (154.1)",
                        "Because sugar is injected into the meat. (154.2)",
                        "Because high oleic acid content lowers the fat melting point to approximately 25°C, melting effortlessly below human body temperature. (154.3)",
                        "Because the meat is boiled in oil. (154.4)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Because high oleic acid content lowers the fat melting point to approx 25°C."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Japanese A5 Wagyu grading represents the pinnacle of livestock genetics, achieving a BMS marbling score of 8 to 12 with fat melting below body temperature.\"",
                    "options": [
                        "松阪牛は魚肉の加工品です。",
                        "A5ランクとは肉の賞味期限が5日間であることを意味します。",
                        "和牛はオーストラリア原産の野生の羊です。",
                        "日本のA5ランク和牛格付けは畜産遺伝学の最高峰を表し、体温以下で溶ける脂質を伴うBMS脂肪交雑基準8から12を達成しています。"
                    ],
                    "answerIndex": 3,
                    "explanation": "Accurate Wagyu analysis translation."
                },
                {
                    "prompt": "What official standard (No. 1 to 12) measures the intricate intramuscular marbling dispersion in Japanese beef quality grading?",
                    "options": [
                        "B.F.S. (Beef Fat Standard)",
                        "B.T.S. (Beef Texture Standard)",
                        "B.M.S. (Beef Marbling Standard / 脂肪交雑基準)",
                        "B.C.S. (Beef Color Standard)"
                    ],
                    "answerIndex": 2,
                    "explanation": "B.M.S. (Beef Marbling Standard)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u31-l5": {
        "id": "ja-u31-l5",
        "unit": "ja-u31",
        "level": "C2",
        "objective": "C2 synthesis on Sake Brewing Alchemy, Rice Polishing & Kōji Fermentation: The World of Nihonshu (日本酒 - 特定名称酒の分類：純米大吟醸・大吟醸・純米吟醸・特別純米酒、精米歩合（50%以下）、国菌・麹菌（Aspergillus oryzae）と酵母による並行複発酵（世界最高アルコール度数約20%を生む発酵工学）、酒造好適米「山田錦」と杜氏（とうじ）の技芸).",
        "presentation": {
            "explanation": "Nihonshu (日本酒 - Japanese Sake) and the world's most sophisticated biochemical fermentation engineering:\n- **Special Designation Sakes (特定名称酒 / Tokutei Meishō-shu)**:\n  - Classified strictly by **Rice Polishing Ratio (精米歩合 / Seimai Buai)** and added brewer's alcohol:\n    - **Junmai Daiginjō (純米大吟醸)**: Seimai Buai $\\le 50\\%$ (outer 50% or more polished away to expose pure starchy core *Shinpaku* / 心白), pure rice, zero added alcohol;\n    - **Daiginjō (大吟醸)**: Seimai Buai $\\le 50\\%$, with master touch of distilled brewer's alcohol to volatilize aromatic esters;\n    - **Junmai Ginjō (純米吟醸)**: Seimai Buai $\\le 60\\%$;\n    - **Junmai (純米酒)**: No polishing minimum, pure rice;\n- The Biochemical Miracle: **Multiple Parallel Fermentation (並行複発酵 / Heikō Fuku-hakkō)**:\n  - Unlike beer (saccharification first, then fermentation) or wine (single simple sugar fermentation), sake executes **two biochemical reactions simultaneously in the exact same mash tank (Moromi)**:\n    - **1. Saccharification**: Kōji mold (**黄麹菌 / Aspergillus oryzae - Japan's National Fungus / 国菌**) converts rice starch into glucose sugars;\n    - **2. Fermentation**: Sake yeast (*Kōbo*) ferments glucose into ethanol;\n  - Yields the highest natural alcohol yield (up to **20% ABV**) of any non-distilled beverage on Earth;\n- The King of Sake Rice: **Yamada Nishiki (山田錦)** from Hyogo Special A Region;\n- Guided by the master brewmaster (**Tōji / 杜氏**): Tamba, Nanbu, and Echigo brewing guilds.",
            "examples": [
                {
                    "target": "日本酒の純米大吟醸は、精米歩合50%以下の山田錦と国菌・黄麹菌による「並行複発酵」が生み出す最高峰の醸造芸術です。",
                    "reading": "Nihonshu no Junmai Daiginjō wa...",
                    "translation": "Junmai Daiginjo sake is the supreme brewing art created by \"multiple parallel fermentation\" using Yamada Nishiki rice polished below 50% and national yellow koji mold."
                }
            ],
            "mnemonics": [
                "日本酒 (Nihonshu)! Junmai Daiginjō (Seimai Buai <= 50% pure rice)! Kōji mold (Aspergillus oryzae / 国菌)! 並行複発酵 (Multiple Parallel Fermentation -> 20% natural ABV)! 酒米の王様・山田錦! 杜氏 (Tōji master brewmaster)!"
            ],
            "culturalNotes": [
                "In 2006, the Brewing Society of Japan officially designated Aspergillus oryzae (Kōji mold) as the official \"National Fungus\" (国菌 / Kokukin) of Japan due to its foundational role in sake, miso, and soy sauce."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "What maximum rice polishing ratio (Seimai Buai) is legally required for a sake to qualify as a Daiginjo (大吟醸) or Junmai Daiginjo?",
                    "options": [
                        "50% or less (精米歩合50%以下) (155.1)",
                        "60% or less (155.2)",
                        "100% (155.3)",
                        "70% or less (155.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "50% or less (精米歩合50%以下)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What unique dual biochemical fermentation process allows Japanese sake to naturally reach nearly 20% ABV without distillation?",
                    "options": [
                        "単複発酵 (155.1)",
                        "単発酵 (155.2)",
                        "乳酸発酵 (155.3)",
                        "並行複発酵 (Multiple Parallel Fermentation) (155.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "並行複発酵 (Multiple Parallel Fermentation)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Translate: \"Multiple parallel fermentation simultaneously executes koji starch saccharification and yeast alcohol conversion in the same mash, producing the highest natural ABV of any brewed beverage.\"",
                    "options": [
                        "山田錦は沖縄で栽培されるマンゴーの品種です。",
                        "大吟醸とは精米歩合が90%以上の酒のことです。",
                        "並行複発酵は、同一のもろみ内で麹によるデンプンの糖化と酵母によるアルコール発酵を同時に進行させ、あらゆる醸造酒の中で最高の自然アルコール度数を生み出します。",
                        "日本酒はウイスキーのように蒸留して作られます。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurate Sake brewing analysis translation."
                },
                {
                    "prompt": "Which supreme variety of sake brewing rice (Saka-mai), grown primarily in Hyogo Prefecture, is celebrated as the undisputed \"King of Sake Rice\"?",
                    "options": [
                        "美山錦",
                        "山田錦 (Yamada Nishiki)",
                        "雄町",
                        "五百万石"
                    ],
                    "answerIndex": 1,
                    "explanation": "山田錦 (Yamada Nishiki)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u32-l1": {
        "id": "ja-u32-l1",
        "unit": "ja-u32",
        "level": "C1",
        "objective": "Noh Theatre & Zeami's Subtle Grace: Fūshikaden (能楽 - 世阿弥「秘すれば花」, 幽玄, 夢幻能): Advanced mastery of cultural, historical, and linguistic dimensions.",
        "presentation": {
            "explanation": "Noh Theatre & Zeami's Subtle Grace: Fūshikaden (能楽 - 世阿弥「秘すれば花」, 幽玄, 夢幻能) represents a cornerstone of Theatre, Dramaturgy & Stagecraft. This session investigates its historical origins, aesthetic and philosophical foundations, and structural influence on civilization.",
            "examples": [
                {
                    "target": "Mastery of Noh Theatre & Zeami's Subtle Grace: Fūshikaden (能楽 - 世阿弥「秘すれば花」, 幽玄, 夢幻能) exemplifies the cultural and expressive pinnacle of Japanese.",
                    "reading": "Target analysis of Noh Theatre & Zeami's Subtle Grace: Fūshikaden (能楽 - 世阿弥「秘すれば花」, 幽玄, 夢幻能)...",
                    "translation": "Mastery of Noh Theatre & Zeami's Subtle Grace: Fūshikaden (能楽 - 世阿弥「秘すれば花」, 幽玄, 夢幻能) exemplifies the cultural and expressive pinnacle of Japanese."
                }
            ],
            "mnemonics": [
                "Noh Theatre & Zeami's Subtle Grace: Fūshikaden (能楽 - 世阿弥「秘すれば花」, 幽玄, 夢幻能)! Essential milestone in Theatre, Dramaturgy & Stagecraft!"
            ],
            "culturalNotes": [
                "Noh Theatre & Zeami's Subtle Grace: Fūshikaden (能楽 - 世阿弥「秘すれば花」, 幽玄, 夢幻能) is celebrated worldwide as a defining achievement of Japanese heritage."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which major figure, institution, or concept is central to the study of Noh Theatre & Zeami's Subtle Grace: Fūshikaden (能楽 - 世阿弥「秘すれば花」, 幽玄, 夢幻能)?",
                    "options": [
                        "Generic introductory concept (156.1)",
                        "Irrelevant topic (156.2)",
                        "Modern fast-food trend (156.3)",
                        "Noh Theatre & Zeami's Subtle Grace: Fūshikaden (156.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "Noh Theatre & Zeami's Subtle Grace: Fūshikaden is the central subject."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "In the context of Theatre, Dramaturgy & Stagecraft, what is the primary significance of Noh Theatre & Zeami's Subtle Grace: Fūshikaden?",
                    "options": [
                        "It represents a defining historical and aesthetic breakthrough in Japanese civilization. (156.1)",
                        "It has no historical significance. (156.2)",
                        "It was imported from an unrelated continent. (156.3)",
                        "It was invented yesterday. (156.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "It represents a defining breakthrough in Japanese civilization."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Analyze the significance of Noh Theatre & Zeami's Subtle Grace: Fūshikaden in the development of Theatre, Dramaturgy & Stagecraft:",
                    "options": [
                        "It was a minor commercial advertising campaign.",
                        "Noh Theatre & Zeami's Subtle Grace: Fūshikaden established enduring philosophical, technical, and expressive standards across the tradition.",
                        "It only applied to elementary school education.",
                        "It was completely forgotten within a week."
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurate analysis of Noh Theatre & Zeami's Subtle Grace: Fūshikaden (能楽 - 世阿弥「秘すれば花」, 幽玄, 夢幻能)."
                },
                {
                    "prompt": "What mastery level does completing Noh Theatre & Zeami's Subtle Grace: Fūshikaden contribute to in the FEARN curriculum?",
                    "options": [
                        "Advanced C1/C2 Sovereign Omni-Mastery",
                        "Beginner A1",
                        "Pre-intermediate B1",
                        "Elementary A2"
                    ],
                    "answerIndex": 0,
                    "explanation": "Advanced C1/C2 Sovereign Omni-Mastery."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u32-l2": {
        "id": "ja-u32-l2",
        "unit": "ja-u32",
        "level": "C1",
        "objective": "Kabuki Theatre & The Grand Dynamic Stage (歌舞伎 - 出雲阿国, 隈取, 見得を切る, 花道, 坂東玉三郎): Advanced mastery of cultural, historical, and linguistic dimensions.",
        "presentation": {
            "explanation": "Kabuki Theatre & The Grand Dynamic Stage (歌舞伎 - 出雲阿国, 隈取, 見得を切る, 花道, 坂東玉三郎) represents a cornerstone of Theatre, Dramaturgy & Stagecraft. This session investigates its historical origins, aesthetic and philosophical foundations, and structural influence on civilization.",
            "examples": [
                {
                    "target": "Mastery of Kabuki Theatre & The Grand Dynamic Stage (歌舞伎 - 出雲阿国, 隈取, 見得を切る, 花道, 坂東玉三郎) exemplifies the cultural and expressive pinnacle of Japanese.",
                    "reading": "Target analysis of Kabuki Theatre & The Grand Dynamic Stage (歌舞伎 - 出雲阿国, 隈取, 見得を切る, 花道, 坂東玉三郎)...",
                    "translation": "Mastery of Kabuki Theatre & The Grand Dynamic Stage (歌舞伎 - 出雲阿国, 隈取, 見得を切る, 花道, 坂東玉三郎) exemplifies the cultural and expressive pinnacle of Japanese."
                }
            ],
            "mnemonics": [
                "Kabuki Theatre & The Grand Dynamic Stage (歌舞伎 - 出雲阿国, 隈取, 見得を切る, 花道, 坂東玉三郎)! Essential milestone in Theatre, Dramaturgy & Stagecraft!"
            ],
            "culturalNotes": [
                "Kabuki Theatre & The Grand Dynamic Stage (歌舞伎 - 出雲阿国, 隈取, 見得を切る, 花道, 坂東玉三郎) is celebrated worldwide as a defining achievement of Japanese heritage."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which major figure, institution, or concept is central to the study of Kabuki Theatre & The Grand Dynamic Stage (歌舞伎 - 出雲阿国, 隈取, 見得を切る, 花道, 坂東玉三郎)?",
                    "options": [
                        "Kabuki Theatre & The Grand Dynamic Stage (157.1)",
                        "Irrelevant topic (157.2)",
                        "Modern fast-food trend (157.3)",
                        "Generic introductory concept (157.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "Kabuki Theatre & The Grand Dynamic Stage is the central subject."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "In the context of Theatre, Dramaturgy & Stagecraft, what is the primary significance of Kabuki Theatre & The Grand Dynamic Stage?",
                    "options": [
                        "It represents a defining historical and aesthetic breakthrough in Japanese civilization. (157.1)",
                        "It has no historical significance. (157.2)",
                        "It was invented yesterday. (157.3)",
                        "It was imported from an unrelated continent. (157.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "It represents a defining breakthrough in Japanese civilization."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Analyze the significance of Kabuki Theatre & The Grand Dynamic Stage in the development of Theatre, Dramaturgy & Stagecraft:",
                    "options": [
                        "Kabuki Theatre & The Grand Dynamic Stage established enduring philosophical, technical, and expressive standards across the tradition.",
                        "It was a minor commercial advertising campaign.",
                        "It was completely forgotten within a week.",
                        "It only applied to elementary school education."
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurate analysis of Kabuki Theatre & The Grand Dynamic Stage (歌舞伎 - 出雲阿国, 隈取, 見得を切る, 花道, 坂東玉三郎)."
                },
                {
                    "prompt": "What mastery level does completing Kabuki Theatre & The Grand Dynamic Stage contribute to in the FEARN curriculum?",
                    "options": [
                        "Pre-intermediate B1",
                        "Beginner A1",
                        "Elementary A2",
                        "Advanced C1/C2 Sovereign Omni-Mastery"
                    ],
                    "answerIndex": 3,
                    "explanation": "Advanced C1/C2 Sovereign Omni-Mastery."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u32-l3": {
        "id": "ja-u32-l3",
        "unit": "ja-u32",
        "level": "C2",
        "objective": "Bunraku Puppet Theatre & Chikamatsu Monzaemon (文楽 - 義理と人情の相克, 『曾根崎心中』, 三人遣い): Advanced mastery of cultural, historical, and linguistic dimensions.",
        "presentation": {
            "explanation": "Bunraku Puppet Theatre & Chikamatsu Monzaemon (文楽 - 義理と人情の相克, 『曾根崎心中』, 三人遣い) represents a cornerstone of Theatre, Dramaturgy & Stagecraft. This session investigates its historical origins, aesthetic and philosophical foundations, and structural influence on civilization.",
            "examples": [
                {
                    "target": "Mastery of Bunraku Puppet Theatre & Chikamatsu Monzaemon (文楽 - 義理と人情の相克, 『曾根崎心中』, 三人遣い) exemplifies the cultural and expressive pinnacle of Japanese.",
                    "reading": "Target analysis of Bunraku Puppet Theatre & Chikamatsu Monzaemon (文楽 - 義理と人情の相克, 『曾根崎心中』, 三人遣い)...",
                    "translation": "Mastery of Bunraku Puppet Theatre & Chikamatsu Monzaemon (文楽 - 義理と人情の相克, 『曾根崎心中』, 三人遣い) exemplifies the cultural and expressive pinnacle of Japanese."
                }
            ],
            "mnemonics": [
                "Bunraku Puppet Theatre & Chikamatsu Monzaemon (文楽 - 義理と人情の相克, 『曾根崎心中』, 三人遣い)! Essential milestone in Theatre, Dramaturgy & Stagecraft!"
            ],
            "culturalNotes": [
                "Bunraku Puppet Theatre & Chikamatsu Monzaemon (文楽 - 義理と人情の相克, 『曾根崎心中』, 三人遣い) is celebrated worldwide as a defining achievement of Japanese heritage."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which major figure, institution, or concept is central to the study of Bunraku Puppet Theatre & Chikamatsu Monzaemon (文楽 - 義理と人情の相克, 『曾根崎心中』, 三人遣い)?",
                    "options": [
                        "Bunraku Puppet Theatre & Chikamatsu Monzaemon (158.1)",
                        "Generic introductory concept (158.2)",
                        "Irrelevant topic (158.3)",
                        "Modern fast-food trend (158.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "Bunraku Puppet Theatre & Chikamatsu Monzaemon is the central subject."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "In the context of Theatre, Dramaturgy & Stagecraft, what is the primary significance of Bunraku Puppet Theatre & Chikamatsu Monzaemon?",
                    "options": [
                        "It represents a defining historical and aesthetic breakthrough in Japanese civilization. (158.1)",
                        "It was imported from an unrelated continent. (158.2)",
                        "It was invented yesterday. (158.3)",
                        "It has no historical significance. (158.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "It represents a defining breakthrough in Japanese civilization."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Analyze the significance of Bunraku Puppet Theatre & Chikamatsu Monzaemon in the development of Theatre, Dramaturgy & Stagecraft:",
                    "options": [
                        "It was a minor commercial advertising campaign.",
                        "It was completely forgotten within a week.",
                        "It only applied to elementary school education.",
                        "Bunraku Puppet Theatre & Chikamatsu Monzaemon established enduring philosophical, technical, and expressive standards across the tradition."
                    ],
                    "answerIndex": 3,
                    "explanation": "Accurate analysis of Bunraku Puppet Theatre & Chikamatsu Monzaemon (文楽 - 義理と人情の相克, 『曾根崎心中』, 三人遣い)."
                },
                {
                    "prompt": "What mastery level does completing Bunraku Puppet Theatre & Chikamatsu Monzaemon contribute to in the FEARN curriculum?",
                    "options": [
                        "Beginner A1",
                        "Elementary A2",
                        "Advanced C1/C2 Sovereign Omni-Mastery",
                        "Pre-intermediate B1"
                    ],
                    "answerIndex": 2,
                    "explanation": "Advanced C1/C2 Sovereign Omni-Mastery."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u32-l4": {
        "id": "ja-u32-l4",
        "unit": "ja-u32",
        "level": "C2",
        "objective": "Kyōgen & The Art of Laughter (狂言 - 和泉流・大蔵流, 太郎冠者と大名, 『附子』): Advanced mastery of cultural, historical, and linguistic dimensions.",
        "presentation": {
            "explanation": "Kyōgen & The Art of Laughter (狂言 - 和泉流・大蔵流, 太郎冠者と大名, 『附子』) represents a cornerstone of Theatre, Dramaturgy & Stagecraft. This session investigates its historical origins, aesthetic and philosophical foundations, and structural influence on civilization.",
            "examples": [
                {
                    "target": "Mastery of Kyōgen & The Art of Laughter (狂言 - 和泉流・大蔵流, 太郎冠者と大名, 『附子』) exemplifies the cultural and expressive pinnacle of Japanese.",
                    "reading": "Target analysis of Kyōgen & The Art of Laughter (狂言 - 和泉流・大蔵流, 太郎冠者と大名, 『附子』)...",
                    "translation": "Mastery of Kyōgen & The Art of Laughter (狂言 - 和泉流・大蔵流, 太郎冠者と大名, 『附子』) exemplifies the cultural and expressive pinnacle of Japanese."
                }
            ],
            "mnemonics": [
                "Kyōgen & The Art of Laughter (狂言 - 和泉流・大蔵流, 太郎冠者と大名, 『附子』)! Essential milestone in Theatre, Dramaturgy & Stagecraft!"
            ],
            "culturalNotes": [
                "Kyōgen & The Art of Laughter (狂言 - 和泉流・大蔵流, 太郎冠者と大名, 『附子』) is celebrated worldwide as a defining achievement of Japanese heritage."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which major figure, institution, or concept is central to the study of Kyōgen & The Art of Laughter (狂言 - 和泉流・大蔵流, 太郎冠者と大名, 『附子』)?",
                    "options": [
                        "Generic introductory concept (159.1)",
                        "Irrelevant topic (159.2)",
                        "Modern fast-food trend (159.3)",
                        "Kyōgen & The Art of Laughter (159.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "Kyōgen & The Art of Laughter is the central subject."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "In the context of Theatre, Dramaturgy & Stagecraft, what is the primary significance of Kyōgen & The Art of Laughter?",
                    "options": [
                        "It has no historical significance. (159.1)",
                        "It was imported from an unrelated continent. (159.2)",
                        "It was invented yesterday. (159.3)",
                        "It represents a defining historical and aesthetic breakthrough in Japanese civilization. (159.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "It represents a defining breakthrough in Japanese civilization."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Analyze the significance of Kyōgen & The Art of Laughter in the development of Theatre, Dramaturgy & Stagecraft:",
                    "options": [
                        "It was a minor commercial advertising campaign.",
                        "It was completely forgotten within a week.",
                        "Kyōgen & The Art of Laughter established enduring philosophical, technical, and expressive standards across the tradition.",
                        "It only applied to elementary school education."
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurate analysis of Kyōgen & The Art of Laughter (狂言 - 和泉流・大蔵流, 太郎冠者と大名, 『附子』)."
                },
                {
                    "prompt": "What mastery level does completing Kyōgen & The Art of Laughter contribute to in the FEARN curriculum?",
                    "options": [
                        "Pre-intermediate B1",
                        "Advanced C1/C2 Sovereign Omni-Mastery",
                        "Elementary A2",
                        "Beginner A1"
                    ],
                    "answerIndex": 1,
                    "explanation": "Advanced C1/C2 Sovereign Omni-Mastery."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u32-l5": {
        "id": "ja-u32-l5",
        "unit": "ja-u32",
        "level": "C2",
        "objective": "Modern Avant-Garde Stagecraft: Ankoku Butoh (土方巽・大野一雄), 寺山修司 & 鈴木忠志: Advanced mastery of cultural, historical, and linguistic dimensions.",
        "presentation": {
            "explanation": "Modern Avant-Garde Stagecraft: Ankoku Butoh (土方巽・大野一雄), 寺山修司 & 鈴木忠志 represents a cornerstone of Theatre, Dramaturgy & Stagecraft. This session investigates its historical origins, aesthetic and philosophical foundations, and structural influence on civilization.",
            "examples": [
                {
                    "target": "Mastery of Modern Avant-Garde Stagecraft: Ankoku Butoh (土方巽・大野一雄), 寺山修司 & 鈴木忠志 exemplifies the cultural and expressive pinnacle of Japanese.",
                    "reading": "Target analysis of Modern Avant-Garde Stagecraft: Ankoku Butoh (土方巽・大野一雄), 寺山修司 & 鈴木忠志...",
                    "translation": "Mastery of Modern Avant-Garde Stagecraft: Ankoku Butoh (土方巽・大野一雄), 寺山修司 & 鈴木忠志 exemplifies the cultural and expressive pinnacle of Japanese."
                }
            ],
            "mnemonics": [
                "Modern Avant-Garde Stagecraft: Ankoku Butoh (土方巽・大野一雄), 寺山修司 & 鈴木忠志! Essential milestone in Theatre, Dramaturgy & Stagecraft!"
            ],
            "culturalNotes": [
                "Modern Avant-Garde Stagecraft: Ankoku Butoh (土方巽・大野一雄), 寺山修司 & 鈴木忠志 is celebrated worldwide as a defining achievement of Japanese heritage."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which major figure, institution, or concept is central to the study of Modern Avant-Garde Stagecraft: Ankoku Butoh (土方巽・大野一雄), 寺山修司 & 鈴木忠志?",
                    "options": [
                        "Modern Avant-Garde Stagecraft: Ankoku Butoh (160.1)",
                        "Generic introductory concept (160.2)",
                        "Modern fast-food trend (160.3)",
                        "Irrelevant topic (160.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "Modern Avant-Garde Stagecraft: Ankoku Butoh is the central subject."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "In the context of Theatre, Dramaturgy & Stagecraft, what is the primary significance of Modern Avant-Garde Stagecraft: Ankoku Butoh?",
                    "options": [
                        "It has no historical significance. (160.1)",
                        "It was imported from an unrelated continent. (160.2)",
                        "It was invented yesterday. (160.3)",
                        "It represents a defining historical and aesthetic breakthrough in Japanese civilization. (160.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "It represents a defining breakthrough in Japanese civilization."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Analyze the significance of Modern Avant-Garde Stagecraft: Ankoku Butoh in the development of Theatre, Dramaturgy & Stagecraft:",
                    "options": [
                        "It was completely forgotten within a week.",
                        "Modern Avant-Garde Stagecraft: Ankoku Butoh established enduring philosophical, technical, and expressive standards across the tradition.",
                        "It only applied to elementary school education.",
                        "It was a minor commercial advertising campaign."
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurate analysis of Modern Avant-Garde Stagecraft: Ankoku Butoh (土方巽・大野一雄), 寺山修司 & 鈴木忠志."
                },
                {
                    "prompt": "What mastery level does completing Modern Avant-Garde Stagecraft: Ankoku Butoh contribute to in the FEARN curriculum?",
                    "options": [
                        "Advanced C1/C2 Sovereign Omni-Mastery",
                        "Elementary A2",
                        "Pre-intermediate B1",
                        "Beginner A1"
                    ],
                    "answerIndex": 0,
                    "explanation": "Advanced C1/C2 Sovereign Omni-Mastery."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u33-l1": {
        "id": "ja-u33-l1",
        "unit": "ja-u33",
        "level": "C1",
        "objective": "Ise Jingū & Sacred Shinto Cyclical Rebuilding (伊勢神宮 - 式年遷宮 20年ごとの解体新築, 唯一神明造): Advanced mastery of cultural, historical, and linguistic dimensions.",
        "presentation": {
            "explanation": "Ise Jingū & Sacred Shinto Cyclical Rebuilding (伊勢神宮 - 式年遷宮 20年ごとの解体新築, 唯一神明造) represents a cornerstone of Architecture, Sacred Geometry & Urbanism. This session investigates its historical origins, aesthetic and philosophical foundations, and structural influence on civilization.",
            "examples": [
                {
                    "target": "Mastery of Ise Jingū & Sacred Shinto Cyclical Rebuilding (伊勢神宮 - 式年遷宮 20年ごとの解体新築, 唯一神明造) exemplifies the cultural and expressive pinnacle of Japanese.",
                    "reading": "Target analysis of Ise Jingū & Sacred Shinto Cyclical Rebuilding (伊勢神宮 - 式年遷宮 20年ごとの解体新築, 唯一神明造)...",
                    "translation": "Mastery of Ise Jingū & Sacred Shinto Cyclical Rebuilding (伊勢神宮 - 式年遷宮 20年ごとの解体新築, 唯一神明造) exemplifies the cultural and expressive pinnacle of Japanese."
                }
            ],
            "mnemonics": [
                "Ise Jingū & Sacred Shinto Cyclical Rebuilding (伊勢神宮 - 式年遷宮 20年ごとの解体新築, 唯一神明造)! Essential milestone in Architecture, Sacred Geometry & Urbanism!"
            ],
            "culturalNotes": [
                "Ise Jingū & Sacred Shinto Cyclical Rebuilding (伊勢神宮 - 式年遷宮 20年ごとの解体新築, 唯一神明造) is celebrated worldwide as a defining achievement of Japanese heritage."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which major figure, institution, or concept is central to the study of Ise Jingū & Sacred Shinto Cyclical Rebuilding (伊勢神宮 - 式年遷宮 20年ごとの解体新築, 唯一神明造)?",
                    "options": [
                        "Generic introductory concept (161.1)",
                        "Irrelevant topic (161.2)",
                        "Modern fast-food trend (161.3)",
                        "Ise Jingū & Sacred Shinto Cyclical Rebuilding (161.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "Ise Jingū & Sacred Shinto Cyclical Rebuilding is the central subject."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "In the context of Architecture, Sacred Geometry & Urbanism, what is the primary significance of Ise Jingū & Sacred Shinto Cyclical Rebuilding?",
                    "options": [
                        "It represents a defining historical and aesthetic breakthrough in Japanese civilization. (161.1)",
                        "It has no historical significance. (161.2)",
                        "It was imported from an unrelated continent. (161.3)",
                        "It was invented yesterday. (161.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "It represents a defining breakthrough in Japanese civilization."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Analyze the significance of Ise Jingū & Sacred Shinto Cyclical Rebuilding in the development of Architecture, Sacred Geometry & Urbanism:",
                    "options": [
                        "Ise Jingū & Sacred Shinto Cyclical Rebuilding established enduring philosophical, technical, and expressive standards across the tradition.",
                        "It was a minor commercial advertising campaign.",
                        "It only applied to elementary school education.",
                        "It was completely forgotten within a week."
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurate analysis of Ise Jingū & Sacred Shinto Cyclical Rebuilding (伊勢神宮 - 式年遷宮 20年ごとの解体新築, 唯一神明造)."
                },
                {
                    "prompt": "What mastery level does completing Ise Jingū & Sacred Shinto Cyclical Rebuilding contribute to in the FEARN curriculum?",
                    "options": [
                        "Elementary A2",
                        "Beginner A1",
                        "Pre-intermediate B1",
                        "Advanced C1/C2 Sovereign Omni-Mastery"
                    ],
                    "answerIndex": 3,
                    "explanation": "Advanced C1/C2 Sovereign Omni-Mastery."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u33-l2": {
        "id": "ja-u33-l2",
        "unit": "ja-u33",
        "level": "C1",
        "objective": "Hōryū-ji & Master Wood Joinery (法隆寺 - 世界最古の木造建築 607年, 西岡常一宮大工の技, 釘を使わぬ組物): Advanced mastery of cultural, historical, and linguistic dimensions.",
        "presentation": {
            "explanation": "Hōryū-ji & Master Wood Joinery (法隆寺 - 世界最古の木造建築 607年, 西岡常一宮大工の技, 釘を使わぬ組物) represents a cornerstone of Architecture, Sacred Geometry & Urbanism. This session investigates its historical origins, aesthetic and philosophical foundations, and structural influence on civilization.",
            "examples": [
                {
                    "target": "Mastery of Hōryū-ji & Master Wood Joinery (法隆寺 - 世界最古の木造建築 607年, 西岡常一宮大工の技, 釘を使わぬ組物) exemplifies the cultural and expressive pinnacle of Japanese.",
                    "reading": "Target analysis of Hōryū-ji & Master Wood Joinery (法隆寺 - 世界最古の木造建築 607年, 西岡常一宮大工の技, 釘を使わぬ組物)...",
                    "translation": "Mastery of Hōryū-ji & Master Wood Joinery (法隆寺 - 世界最古の木造建築 607年, 西岡常一宮大工の技, 釘を使わぬ組物) exemplifies the cultural and expressive pinnacle of Japanese."
                }
            ],
            "mnemonics": [
                "Hōryū-ji & Master Wood Joinery (法隆寺 - 世界最古の木造建築 607年, 西岡常一宮大工の技, 釘を使わぬ組物)! Essential milestone in Architecture, Sacred Geometry & Urbanism!"
            ],
            "culturalNotes": [
                "Hōryū-ji & Master Wood Joinery (法隆寺 - 世界最古の木造建築 607年, 西岡常一宮大工の技, 釘を使わぬ組物) is celebrated worldwide as a defining achievement of Japanese heritage."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which major figure, institution, or concept is central to the study of Hōryū-ji & Master Wood Joinery (法隆寺 - 世界最古の木造建築 607年, 西岡常一宮大工の技, 釘を使わぬ組物)?",
                    "options": [
                        "Hōryū-ji & Master Wood Joinery (162.1)",
                        "Irrelevant topic (162.2)",
                        "Modern fast-food trend (162.3)",
                        "Generic introductory concept (162.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "Hōryū-ji & Master Wood Joinery is the central subject."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "In the context of Architecture, Sacred Geometry & Urbanism, what is the primary significance of Hōryū-ji & Master Wood Joinery?",
                    "options": [
                        "It represents a defining historical and aesthetic breakthrough in Japanese civilization. (162.1)",
                        "It has no historical significance. (162.2)",
                        "It was invented yesterday. (162.3)",
                        "It was imported from an unrelated continent. (162.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "It represents a defining breakthrough in Japanese civilization."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Analyze the significance of Hōryū-ji & Master Wood Joinery in the development of Architecture, Sacred Geometry & Urbanism:",
                    "options": [
                        "It only applied to elementary school education.",
                        "It was a minor commercial advertising campaign.",
                        "It was completely forgotten within a week.",
                        "Hōryū-ji & Master Wood Joinery established enduring philosophical, technical, and expressive standards across the tradition."
                    ],
                    "answerIndex": 3,
                    "explanation": "Accurate analysis of Hōryū-ji & Master Wood Joinery (法隆寺 - 世界最古の木造建築 607年, 西岡常一宮大工の技, 釘を使わぬ組物)."
                },
                {
                    "prompt": "What mastery level does completing Hōryū-ji & Master Wood Joinery contribute to in the FEARN curriculum?",
                    "options": [
                        "Elementary A2",
                        "Beginner A1",
                        "Advanced C1/C2 Sovereign Omni-Mastery",
                        "Pre-intermediate B1"
                    ],
                    "answerIndex": 2,
                    "explanation": "Advanced C1/C2 Sovereign Omni-Mastery."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u33-l3": {
        "id": "ja-u33-l3",
        "unit": "ja-u33",
        "level": "C2",
        "objective": "Katsura Imperial Villa & Sukiya-Zukuri (桂離宮 - 数寄屋造り, 雁行配置, ブルーノ・タウト「永遠の美」): Advanced mastery of cultural, historical, and linguistic dimensions.",
        "presentation": {
            "explanation": "Katsura Imperial Villa & Sukiya-Zukuri (桂離宮 - 数寄屋造り, 雁行配置, ブルーノ・タウト「永遠の美」) represents a cornerstone of Architecture, Sacred Geometry & Urbanism. This session investigates its historical origins, aesthetic and philosophical foundations, and structural influence on civilization.",
            "examples": [
                {
                    "target": "Mastery of Katsura Imperial Villa & Sukiya-Zukuri (桂離宮 - 数寄屋造り, 雁行配置, ブルーノ・タウト「永遠の美」) exemplifies the cultural and expressive pinnacle of Japanese.",
                    "reading": "Target analysis of Katsura Imperial Villa & Sukiya-Zukuri (桂離宮 - 数寄屋造り, 雁行配置, ブルーノ・タウト「永遠の美」)...",
                    "translation": "Mastery of Katsura Imperial Villa & Sukiya-Zukuri (桂離宮 - 数寄屋造り, 雁行配置, ブルーノ・タウト「永遠の美」) exemplifies the cultural and expressive pinnacle of Japanese."
                }
            ],
            "mnemonics": [
                "Katsura Imperial Villa & Sukiya-Zukuri (桂離宮 - 数寄屋造り, 雁行配置, ブルーノ・タウト「永遠の美」)! Essential milestone in Architecture, Sacred Geometry & Urbanism!"
            ],
            "culturalNotes": [
                "Katsura Imperial Villa & Sukiya-Zukuri (桂離宮 - 数寄屋造り, 雁行配置, ブルーノ・タウト「永遠の美」) is celebrated worldwide as a defining achievement of Japanese heritage."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which major figure, institution, or concept is central to the study of Katsura Imperial Villa & Sukiya-Zukuri (桂離宮 - 数寄屋造り, 雁行配置, ブルーノ・タウト「永遠の美」)?",
                    "options": [
                        "Katsura Imperial Villa & Sukiya-Zukuri (163.1)",
                        "Generic introductory concept (163.2)",
                        "Irrelevant topic (163.3)",
                        "Modern fast-food trend (163.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "Katsura Imperial Villa & Sukiya-Zukuri is the central subject."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "In the context of Architecture, Sacred Geometry & Urbanism, what is the primary significance of Katsura Imperial Villa & Sukiya-Zukuri?",
                    "options": [
                        "It represents a defining historical and aesthetic breakthrough in Japanese civilization. (163.1)",
                        "It was imported from an unrelated continent. (163.2)",
                        "It was invented yesterday. (163.3)",
                        "It has no historical significance. (163.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "It represents a defining breakthrough in Japanese civilization."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Analyze the significance of Katsura Imperial Villa & Sukiya-Zukuri in the development of Architecture, Sacred Geometry & Urbanism:",
                    "options": [
                        "It was a minor commercial advertising campaign.",
                        "It was completely forgotten within a week.",
                        "Katsura Imperial Villa & Sukiya-Zukuri established enduring philosophical, technical, and expressive standards across the tradition.",
                        "It only applied to elementary school education."
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurate analysis of Katsura Imperial Villa & Sukiya-Zukuri (桂離宮 - 数寄屋造り, 雁行配置, ブルーノ・タウト「永遠の美」)."
                },
                {
                    "prompt": "What mastery level does completing Katsura Imperial Villa & Sukiya-Zukuri contribute to in the FEARN curriculum?",
                    "options": [
                        "Beginner A1",
                        "Advanced C1/C2 Sovereign Omni-Mastery",
                        "Pre-intermediate B1",
                        "Elementary A2"
                    ],
                    "answerIndex": 1,
                    "explanation": "Advanced C1/C2 Sovereign Omni-Mastery."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u33-l4": {
        "id": "ja-u33-l4",
        "unit": "ja-u33",
        "level": "C2",
        "objective": "Zen Rock Gardens & Dry Landscapes: Ryōan-ji (竜安寺枯山水 - 15個の石の配置, 借景, 白砂の波紋): Advanced mastery of cultural, historical, and linguistic dimensions.",
        "presentation": {
            "explanation": "Zen Rock Gardens & Dry Landscapes: Ryōan-ji (竜安寺枯山水 - 15個の石の配置, 借景, 白砂の波紋) represents a cornerstone of Architecture, Sacred Geometry & Urbanism. This session investigates its historical origins, aesthetic and philosophical foundations, and structural influence on civilization.",
            "examples": [
                {
                    "target": "Mastery of Zen Rock Gardens & Dry Landscapes: Ryōan-ji (竜安寺枯山水 - 15個の石の配置, 借景, 白砂の波紋) exemplifies the cultural and expressive pinnacle of Japanese.",
                    "reading": "Target analysis of Zen Rock Gardens & Dry Landscapes: Ryōan-ji (竜安寺枯山水 - 15個の石の配置, 借景, 白砂の波紋)...",
                    "translation": "Mastery of Zen Rock Gardens & Dry Landscapes: Ryōan-ji (竜安寺枯山水 - 15個の石の配置, 借景, 白砂の波紋) exemplifies the cultural and expressive pinnacle of Japanese."
                }
            ],
            "mnemonics": [
                "Zen Rock Gardens & Dry Landscapes: Ryōan-ji (竜安寺枯山水 - 15個の石の配置, 借景, 白砂の波紋)! Essential milestone in Architecture, Sacred Geometry & Urbanism!"
            ],
            "culturalNotes": [
                "Zen Rock Gardens & Dry Landscapes: Ryōan-ji (竜安寺枯山水 - 15個の石の配置, 借景, 白砂の波紋) is celebrated worldwide as a defining achievement of Japanese heritage."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which major figure, institution, or concept is central to the study of Zen Rock Gardens & Dry Landscapes: Ryōan-ji (竜安寺枯山水 - 15個の石の配置, 借景, 白砂の波紋)?",
                    "options": [
                        "Generic introductory concept (164.1)",
                        "Irrelevant topic (164.2)",
                        "Modern fast-food trend (164.3)",
                        "Zen Rock Gardens & Dry Landscapes: Ryōan-ji (164.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "Zen Rock Gardens & Dry Landscapes: Ryōan-ji is the central subject."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "In the context of Architecture, Sacred Geometry & Urbanism, what is the primary significance of Zen Rock Gardens & Dry Landscapes: Ryōan-ji?",
                    "options": [
                        "It has no historical significance. (164.1)",
                        "It was imported from an unrelated continent. (164.2)",
                        "It was invented yesterday. (164.3)",
                        "It represents a defining historical and aesthetic breakthrough in Japanese civilization. (164.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "It represents a defining breakthrough in Japanese civilization."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Analyze the significance of Zen Rock Gardens & Dry Landscapes: Ryōan-ji in the development of Architecture, Sacred Geometry & Urbanism:",
                    "options": [
                        "It was a minor commercial advertising campaign.",
                        "Zen Rock Gardens & Dry Landscapes: Ryōan-ji established enduring philosophical, technical, and expressive standards across the tradition.",
                        "It only applied to elementary school education.",
                        "It was completely forgotten within a week."
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurate analysis of Zen Rock Gardens & Dry Landscapes: Ryōan-ji (竜安寺枯山水 - 15個の石の配置, 借景, 白砂の波紋)."
                },
                {
                    "prompt": "What mastery level does completing Zen Rock Gardens & Dry Landscapes: Ryōan-ji contribute to in the FEARN curriculum?",
                    "options": [
                        "Advanced C1/C2 Sovereign Omni-Mastery",
                        "Elementary A2",
                        "Pre-intermediate B1",
                        "Beginner A1"
                    ],
                    "answerIndex": 0,
                    "explanation": "Advanced C1/C2 Sovereign Omni-Mastery."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u33-l5": {
        "id": "ja-u33-l5",
        "unit": "ja-u33",
        "level": "C2",
        "objective": "Modern Japanese Architecture: Kenzo Tange (丹下健三), Tadao Ando (安藤忠雄 - 光の教会) & Kengo Kuma (隈研吾): Advanced mastery of cultural, historical, and linguistic dimensions.",
        "presentation": {
            "explanation": "Modern Japanese Architecture: Kenzo Tange (丹下健三), Tadao Ando (安藤忠雄 - 光の教会) & Kengo Kuma (隈研吾) represents a cornerstone of Architecture, Sacred Geometry & Urbanism. This session investigates its historical origins, aesthetic and philosophical foundations, and structural influence on civilization.",
            "examples": [
                {
                    "target": "Mastery of Modern Japanese Architecture: Kenzo Tange (丹下健三), Tadao Ando (安藤忠雄 - 光の教会) & Kengo Kuma (隈研吾) exemplifies the cultural and expressive pinnacle of Japanese.",
                    "reading": "Target analysis of Modern Japanese Architecture: Kenzo Tange (丹下健三), Tadao Ando (安藤忠雄 - 光の教会) & Kengo Kuma (隈研吾)...",
                    "translation": "Mastery of Modern Japanese Architecture: Kenzo Tange (丹下健三), Tadao Ando (安藤忠雄 - 光の教会) & Kengo Kuma (隈研吾) exemplifies the cultural and expressive pinnacle of Japanese."
                }
            ],
            "mnemonics": [
                "Modern Japanese Architecture: Kenzo Tange (丹下健三), Tadao Ando (安藤忠雄 - 光の教会) & Kengo Kuma (隈研吾)! Essential milestone in Architecture, Sacred Geometry & Urbanism!"
            ],
            "culturalNotes": [
                "Modern Japanese Architecture: Kenzo Tange (丹下健三), Tadao Ando (安藤忠雄 - 光の教会) & Kengo Kuma (隈研吾) is celebrated worldwide as a defining achievement of Japanese heritage."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which major figure, institution, or concept is central to the study of Modern Japanese Architecture: Kenzo Tange (丹下健三), Tadao Ando (安藤忠雄 - 光の教会) & Kengo Kuma (隈研吾)?",
                    "options": [
                        "Modern Japanese Architecture: Kenzo Tange (165.1)",
                        "Generic introductory concept (165.2)",
                        "Modern fast-food trend (165.3)",
                        "Irrelevant topic (165.4)"
                    ],
                    "answerIndex": 0,
                    "explanation": "Modern Japanese Architecture: Kenzo Tange is the central subject."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "In the context of Architecture, Sacred Geometry & Urbanism, what is the primary significance of Modern Japanese Architecture: Kenzo Tange?",
                    "options": [
                        "It has no historical significance. (165.1)",
                        "It was imported from an unrelated continent. (165.2)",
                        "It was invented yesterday. (165.3)",
                        "It represents a defining historical and aesthetic breakthrough in Japanese civilization. (165.4)"
                    ],
                    "answerIndex": 3,
                    "explanation": "It represents a defining breakthrough in Japanese civilization."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "Analyze the significance of Modern Japanese Architecture: Kenzo Tange in the development of Architecture, Sacred Geometry & Urbanism:",
                    "options": [
                        "Modern Japanese Architecture: Kenzo Tange established enduring philosophical, technical, and expressive standards across the tradition.",
                        "It was completely forgotten within a week.",
                        "It only applied to elementary school education.",
                        "It was a minor commercial advertising campaign."
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurate analysis of Modern Japanese Architecture: Kenzo Tange (丹下健三), Tadao Ando (安藤忠雄 - 光の教会) & Kengo Kuma (隈研吾)."
                },
                {
                    "prompt": "What mastery level does completing Modern Japanese Architecture: Kenzo Tange contribute to in the FEARN curriculum?",
                    "options": [
                        "Beginner A1",
                        "Elementary A2",
                        "Pre-intermediate B1",
                        "Advanced C1/C2 Sovereign Omni-Mastery"
                    ],
                    "answerIndex": 3,
                    "explanation": "Advanced C1/C2 Sovereign Omni-Mastery."
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
        "title": "Diplomatic Credentials, State Protocol & Bilateral Summits",
        "level": "C2",
        "objective": "Diplomatic Credentials, State Protocol & Bilateral Summits (信任状捧呈・国家儀礼・二国間首脳会談).",
        "presentation": {
            "explanation": "最高度（C2級）の外交日本語では、皇室儀礼や国家元首への「信任状捧呈式（しんにんじょうほうていしき）」、外務省の公電・外交文書（口上書・覚書）における最高峰の敬語体系・漢語表現を網羅します。外交的配慮を伴う文末表現（「〜と認識しております」「〜について遺憾の意を表明する」）が駆使されます。",
            "examples": [
                {
                    "target": "特命全権大使は皇居において信任状を捧呈いたしました。",
                    "reading": "とくめいぜんけんたいしはこうきょにおいてしんにんじょうをほうていいたしました。",
                    "translation": "The Ambassador Extraordinary and Plenipotentiary presented credentials at the Imperial Palace."
                },
                {
                    "target": "両国首脳は戦略的互恵関係の深化について一致いたしました。",
                    "reading": "りょうこくしゅのうはせんりゃくてきごけいかんけいのしんかについていっちいたしました。",
                    "translation": "The leaders of both nations reached an agreement on deepening mutually beneficial strategic relations."
                }
            ],
            "mnemonics": [
                "「捧呈（ほうてい）」は両手で恭しく捧げて差し上げる意。外交儀礼特有の最高敬意語。"
            ],
            "culturalNotes": [
                "駐日大使の信任状捧呈式では、宮内庁が手配する儀装馬車または自動車で皇居へ向かう伝統が現在も継承されています。"
            ]
        },
        "guidedPractice": {
            "exercises": [
                {
                    "type": "synthesis",
                    "prompt": "Conduct a diplomatic analysis in JAPANESE concerning: Diplomatic Credentials, State Protocol & Bilateral Summits (信任状捧呈・国家儀礼・二国間首脳会談).",
                    "targetPhrase": "特命全権大使は皇居において信任状を捧呈いたしました。",
                    "expectedKeywords": [
                        "特命全権大使は皇居において信任状を捧呈いたしました。",
                        ""
                    ]
                }
            ],
            "items": [
                {
                    "type": "synthesis",
                    "prompt": "Conduct a diplomatic analysis in JAPANESE concerning: Diplomatic Credentials, State Protocol & Bilateral Summits (信任状捧呈・国家儀礼・二国間首脳会談).",
                    "targetPhrase": "特命全権大使は皇居において信任状を捧呈いたしました。",
                    "expectedKeywords": [
                        "特命全権大使は皇居において信任状を捧呈いたしました。",
                        ""
                    ]
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "新任の大使が着任後、国家元首に公式文書を提出する儀式は何と呼ばれますか？",
                    "options": [
                        "国勢調査報告会",
                        "民間親善歓送会",
                        "就任宣誓パレード",
                        "信任状捧呈式（しんにんじょうほうていしき）"
                    ],
                    "answerIndex": 3,
                    "explanation": "信任状を元首に捧呈する儀式を「信任状捧呈式」と呼びます。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "type": "synthesis",
                    "prompt": "Conduct a diplomatic analysis in JAPANESE concerning: Diplomatic Credentials, State Protocol & Bilateral Summits (信任状捧呈・国家儀礼・二国間首脳会談).",
                    "targetPhrase": "特命全権大使は皇居において信任状を捧呈いたしました。",
                    "expectedKeywords": [
                        "特命全権大使は皇居において信任状を捧呈いたしました。",
                        ""
                    ]
                }
            ]
        }
    },
    "ja-u34-l2": {
        "id": "ja-u34-l2",
        "subject": "japanese",
        "unit": 34,
        "lessonNumber": 2,
        "title": "Multilateral Treaty Ratification & Diplomatic Notes",
        "level": "C2",
        "objective": "Multilateral Treaty Ratification & Diplomatic Notes (多国間条約の批准・公文・口上書).",
        "presentation": {
            "explanation": "国際法に基づく多国間条約の調印・国会批准・寄託手続きの専門語彙を扱います。外交使節団間で交わされる「口上書（こうじょうしょ・Note Verbale）」や「覚書（おぼえがき・Memorandum）」の定型構文を習得します。",
            "examples": [
                {
                    "target": "日本国政府は条約の批准書を寄託機関に正式に寄託した。",
                    "reading": "にほんこくせいふはじょうやくのひじゅんしょをきたくきかんにせいしきにきたくした。",
                    "translation": "The Government of Japan formally deposited the instrument of ratification with the depositary."
                },
                {
                    "target": "日本国大使館は本口上書をもって接受国外務省に敬意を表します。",
                    "reading": "にほんこくたいしかんはほんこうじょうしょをもってせつじゅこくがいむしょうにけいいをひょうします。",
                    "translation": "The Embassy of Japan presents its compliments to the Ministry of Foreign Affairs of the receiving State."
                }
            ],
            "mnemonics": [
                "「寄託（きたく）」は公的条約文書を保管機関に委ねて預けること。"
            ],
            "culturalNotes": [
                "外交文書（口上書）の冒頭と結びには、数百年続く国際外交上の儀礼的敬意表明定型句が用いられます。"
            ]
        },
        "guidedPractice": {
            "exercises": [
                {
                    "type": "synthesis",
                    "prompt": "Conduct a diplomatic analysis in JAPANESE concerning: Multilateral Treaty Ratification & Diplomatic Notes (多国間条約の批准・公文・口上書).",
                    "targetPhrase": "日本国政府は条約の批准書を寄託機関に正式に寄託した。",
                    "expectedKeywords": [
                        "日本国政府は条約の批准書を寄託機関に正式に寄託した。",
                        ""
                    ]
                }
            ],
            "items": [
                {
                    "type": "synthesis",
                    "prompt": "Conduct a diplomatic analysis in JAPANESE concerning: Multilateral Treaty Ratification & Diplomatic Notes (多国間条約の批准・公文・口上書).",
                    "targetPhrase": "日本国政府は条約の批准書を寄託機関に正式に寄託した。",
                    "expectedKeywords": [
                        "日本国政府は条約の批准書を寄託機関に正式に寄託した。",
                        ""
                    ]
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "口上書（Note Verbale）の冒頭で相手国外務省に対して用いられる定型句はどれですか？",
                    "options": [
                        "お気軽に連絡してください",
                        "昨日はどうもお世話になりました",
                        "〜をもって敬意を表します（presents its compliments to...）",
                        "返信は不要ですのでよろしく"
                    ],
                    "answerIndex": 2,
                    "explanation": "「〜をもって敬意を表します」が外交口上書の国際標準定型句です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "type": "synthesis",
                    "prompt": "Conduct a diplomatic analysis in JAPANESE concerning: Multilateral Treaty Ratification & Diplomatic Notes (多国間条約の批准・公文・口上書).",
                    "targetPhrase": "日本国政府は条約の批准書を寄託機関に正式に寄託した。",
                    "expectedKeywords": [
                        "日本国政府は条約の批准書を寄託機関に正式に寄託した。",
                        ""
                    ]
                }
            ]
        }
    },
    "ja-u34-l3": {
        "id": "ja-u34-l3",
        "subject": "japanese",
        "unit": 34,
        "lessonNumber": 3,
        "title": "UN Peacekeeping Operations & Ceasefire Demarcations",
        "level": "C2",
        "objective": "UN Peacekeeping Operations & Ceasefire Demarcations (国連平和維持活動・停戦協定・国境画定).",
        "presentation": {
            "explanation": "国連安保理決議（UNSC Resolutions）、平和維持活動（PKO）、非武装地帯（DMZ）、停戦監視団の派遣に関する高度な政治・軍事外交専門用語を分析します。",
            "examples": [
                {
                    "target": "国連安全保障理事会は停戦監視団の派遣を満場一致で採択した。",
                    "reading": "こくれんあんぜんほしょうりじかいはていせんかんしだんのはけんをまんじょういっちでさいたくした。",
                    "translation": "The UN Security Council unanimously adopted the dispatch of a ceasefire monitoring mission."
                },
                {
                    "target": "非武装地帯における偶発的軍事衝突を回避するための緊急連絡網が設置された。",
                    "reading": "ひぶそうちたいにおけるぐうはつてきぐんじしょうとつをかいひするためのきんきゅうれんらくもうがせっちされた。",
                    "translation": "A hotline was established to avoid accidental military clashes in the demilitarized zone."
                }
            ],
            "mnemonics": [
                "「満場一致（まんじょういっち）」は議場にいる全員の意見が完全に合致すること。"
            ],
            "culturalNotes": [
                "日本のPKO参加には「PKO協力法」に基づく厳格な平和原則（参加5原則）が定められています。"
            ]
        },
        "guidedPractice": {
            "exercises": [
                {
                    "type": "synthesis",
                    "prompt": "Conduct a diplomatic analysis in JAPANESE concerning: UN Peacekeeping Operations & Ceasefire Demarcations (国連平和維持活動・停戦協定・国境画定).",
                    "targetPhrase": "国連安全保障理事会は停戦監視団の派遣を満場一致で採択した。",
                    "expectedKeywords": [
                        "国連安全保障理事会は停戦監視団の派遣を満場一致で採択した。",
                        ""
                    ]
                }
            ],
            "items": [
                {
                    "type": "synthesis",
                    "prompt": "Conduct a diplomatic analysis in JAPANESE concerning: UN Peacekeeping Operations & Ceasefire Demarcations (国連平和維持活動・停戦協定・国境画定).",
                    "targetPhrase": "国連安全保障理事会は停戦監視団の派遣を満場一致で採択した。",
                    "expectedKeywords": [
                        "国連安全保障理事会は停戦監視団の派遣を満場一致で採択した。",
                        ""
                    ]
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "「満場一致」の意味として最も適切なものはどれですか？",
                    "options": [
                        "過半数ぎりぎりで可決すること",
                        "出席者全員の賛成によって決定すること",
                        "結論を出さずに次回に延期すること",
                        "くじ引きで代表者を決めること"
                    ],
                    "answerIndex": 1,
                    "explanation": "満場一致は出席者全員の合意による可決を意味します。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "type": "synthesis",
                    "prompt": "Conduct a diplomatic analysis in JAPANESE concerning: UN Peacekeeping Operations & Ceasefire Demarcations (国連平和維持活動・停戦協定・国境画定).",
                    "targetPhrase": "国連安全保障理事会は停戦監視団の派遣を満場一致で採択した。",
                    "expectedKeywords": [
                        "国連安全保障理事会は停戦監視団の派遣を満場一致で採択した。",
                        ""
                    ]
                }
            ]
        }
    },
    "ja-u34-l4": {
        "id": "ja-u34-l4",
        "subject": "japanese",
        "unit": 34,
        "lessonNumber": 4,
        "title": "Economic Sanctions, Extradition Treaties & Universal Jurisdiction",
        "level": "C2",
        "objective": "Economic Sanctions, Extradition Treaties & Universal Jurisdiction (経済制裁・犯罪人引渡条約・普遍的管轄権).",
        "presentation": {
            "explanation": "国際テロ資金凍結、資産凍結、輸出規制（キャッチオール規制）、犯罪人引渡条約（Extradition Treaty）の締結要件および国際司法裁判所（ICJ）への付託条項を学習します。",
            "examples": [
                {
                    "target": "経済制裁措置として特定対象者の資産凍結および渡航制限が科された。",
                    "reading": "けいざいせいさいそちとしてとくていたいしょうしゃのしさんとうけつおよびとこうせいげんがかされた。",
                    "translation": "Asset freezing and travel restrictions were imposed on designated entities as economic sanctions."
                },
                {
                    "target": "両国間における犯罪人引渡条約に基づき、身柄の引き渡しが執行された。",
                    "reading": "りょうこくかんにあけるはんざいにんひきわたしじょうやくにもとづき、みがらのひきわたしがしっこうされた。",
                    "translation": "Extradition was executed based on the bilateral extradition treaty between both countries."
                }
            ],
            "mnemonics": [
                "「引渡（ひきわたし）」は逃亡犯罪人の身柄を請求国へ正式に移送すること。"
            ],
            "culturalNotes": [
                "日本は二国間犯罪人引渡条約をアメリカおよび韓国と締結しており、条約外の引き渡しは国際礼譲と国内法に基づいて判断されます。"
            ]
        },
        "guidedPractice": {
            "exercises": [
                {
                    "type": "synthesis",
                    "prompt": "Conduct a diplomatic analysis in JAPANESE concerning: Economic Sanctions, Extradition Treaties & Universal Jurisdiction (経済制裁・犯罪人引渡条約・普遍的管轄権).",
                    "targetPhrase": "経済制裁措置として特定対象者の資産凍結および渡航制限が科された。",
                    "expectedKeywords": [
                        "経済制裁措置として特定対象者の資産凍結および渡航制限が科された。",
                        ""
                    ]
                }
            ],
            "items": [
                {
                    "type": "synthesis",
                    "prompt": "Conduct a diplomatic analysis in JAPANESE concerning: Economic Sanctions, Extradition Treaties & Universal Jurisdiction (経済制裁・犯罪人引渡条約・普遍的管轄権).",
                    "targetPhrase": "経済制裁措置として特定対象者の資産凍結および渡航制限が科された。",
                    "expectedKeywords": [
                        "経済制裁措置として特定対象者の資産凍結および渡航制限が科された。",
                        ""
                    ]
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "条約に基づき他国へ逃亡した被疑者の身柄を請求国へ送還する法的手続きは何ですか？",
                    "options": [
                        "犯罪人引渡（Extradition）",
                        "現地釈放",
                        "強制就労",
                        "任意同行"
                    ],
                    "answerIndex": 0,
                    "explanation": "犯罪人引渡条約に基づく身柄の引き渡し手続きです。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "type": "synthesis",
                    "prompt": "Conduct a diplomatic analysis in JAPANESE concerning: Economic Sanctions, Extradition Treaties & Universal Jurisdiction (経済制裁・犯罪人引渡条約・普遍的管轄権).",
                    "targetPhrase": "経済制裁措置として特定対象者の資産凍結および渡航制限が科された。",
                    "expectedKeywords": [
                        "経済制裁措置として特定対象者の資産凍結および渡航制限が科された。",
                        ""
                    ]
                }
            ]
        }
    },
    "ja-u34-l5": {
        "id": "ja-u34-l5",
        "subject": "japanese",
        "unit": 34,
        "lessonNumber": 5,
        "title": "C2 Master Capstone: Joint Communiqué Drafting & Multilateral Diplomacy Defense",
        "level": "C2",
        "objective": "C2 Master Capstone: Joint Communiqué Drafting & Multilateral Diplomacy Defense (共同宣言・首脳会談コミュニケの起草と最終防衛).",
        "presentation": {
            "explanation": "多国間サミット（G7、G20、ASEAN+3）における首脳共同宣言（Joint Communiqué）の精密な起草と、各国の国益・条文留保を調整する高度な外交交渉術の総括演習です。",
            "examples": [
                {
                    "target": "首脳陣は国際秩序の維持と多国間協調主義の堅持を謳う共同声明を発出した。",
                    "reading": "しゅのうちんはこくさいちつじょのいじとたこくかんきょうちょうしゅぎのけんじをうたうきょうどうせいめいをはっしゅつした。",
                    "translation": "The leaders issued a joint statement upholding the international order and multilateral cooperation."
                },
                {
                    "target": "本コミュニケに盛り込まれた行動計画を着実に履行することで合意した。",
                    "reading": "ほんこみゅにけにもりこまれたこうどうけいかくをちゃくじつにりこうすることでごういした。",
                    "translation": "Agreement was reached to steadily implement the action plan incorporated in this communiqué."
                }
            ],
            "mnemonics": [
                "「堅持（けんじ）」は方針や主張を固く守って変えないこと。"
            ],
            "culturalNotes": [
                "国際共同宣言における文言調整（ワーディング交渉）では、一語のニュアンスの違いが国家間の主権解釈に直結します。"
            ]
        },
        "guidedPractice": {
            "exercises": [
                {
                    "type": "synthesis",
                    "prompt": "Conduct a diplomatic analysis in JAPANESE concerning: C2 Master Capstone: Joint Communiqué Drafting & Multilateral Diplomacy Defense (共同宣言・首脳会談コミュニケの起草と最終防衛).",
                    "targetPhrase": "首脳陣は国際秩序の維持と多国間協調主義の堅持を謳う共同声明を発出した。",
                    "expectedKeywords": [
                        "首脳陣は国際秩序の維持と多国間協調主義の堅持を謳う共同声明を発出した。",
                        ""
                    ]
                }
            ],
            "items": [
                {
                    "type": "synthesis",
                    "prompt": "Conduct a diplomatic analysis in JAPANESE concerning: C2 Master Capstone: Joint Communiqué Drafting & Multilateral Diplomacy Defense (共同宣言・首脳会談コミュニケの起草と最終防衛).",
                    "targetPhrase": "首脳陣は国際秩序の維持と多国間協調主義の堅持を謳う共同声明を発出した。",
                    "expectedKeywords": [
                        "首脳陣は国際秩序の維持と多国間協調主義の堅持を謳う共同声明を発出した。",
                        ""
                    ]
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "prompt": "国際首脳会議の合意事項を正式に内外へ公表する文書は何と呼ばれますか？",
                    "options": [
                        "議事録の草案断片",
                        "私信メモ",
                        "非公式日記",
                        "共同宣言・コミュニケ（Joint Communiqué）"
                    ],
                    "answerIndex": 3,
                    "explanation": "共同宣言またはコミュニケが首脳会議の公式成果文書です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "type": "synthesis",
                    "prompt": "Conduct a diplomatic analysis in JAPANESE concerning: C2 Master Capstone: Joint Communiqué Drafting & Multilateral Diplomacy Defense (共同宣言・首脳会談コミュニケの起草と最終防衛).",
                    "targetPhrase": "首脳陣は国際秩序の維持と多国間協調主義の堅持を謳う共同声明を発出した。",
                    "expectedKeywords": [
                        "首脳陣は国際秩序の維持と多国間協調主義の堅持を謳う共同声明を発出した。",
                        ""
                    ]
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
