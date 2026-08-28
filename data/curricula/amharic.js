// Amharic curriculum — full CEFR A1–C2 roadmap (34 units, 170 lessons)
(function (global) {
  'use strict';
  var UNITS = [
    {
        "id": "am-u1",
        "unit": 1,
        "title": "ፊደል እና የመጀመሪያ ሰላምታ (Fidel Alphabet & Greetings)",
        "level": "A1",
        "goal": "By the end of this unit, learners can read basic Fidel script principles, greet others across formal, informal, masculine, and feminine social registers, introduce themselves by name, use essential Ethiopian etiquette formulas, and say goodbye appropriately.",
        "lessonIds": [
            "am-u1-l1",
            "am-u1-l2",
            "am-u1-l3",
            "am-u1-l4",
            "am-u1-l5"
        ]
    },
    {
        "id": "am-u2",
        "unit": 2,
        "title": "መሰረታዊ ስሞች እና መስተፃምሮች (Basic Nouns & Articles)",
        "level": "A1",
        "goal": "Mastery of የዕለት ተዕለት ቁሳቁሶች እና ስሞች (Everyday Nouns and Definiteness).",
        "lessonIds": [
            "am-u2-l1",
            "am-u2-l2",
            "am-u2-l3",
            "am-u2-l4",
            "am-u2-l5"
        ]
    },
    {
        "id": "am-u3",
        "unit": 3,
        "title": "የግል ተውላጠ ስሞች እና መስተዋድድ (Personal Pronouns & Prepositions)",
        "level": "A1",
        "goal": "Mastery of ተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions).",
        "lessonIds": [
            "am-u3-l1",
            "am-u3-l2",
            "am-u3-l3",
            "am-u3-l4",
            "am-u3-l5"
        ]
    },
    {
        "id": "am-u4",
        "unit": 4,
        "title": "ቀላል የአሁን ጊዜ ግሶች (Present Tense & Habitual Actions)",
        "level": "A1",
        "goal": "Mastery of የአሁን ጊዜ አጠቃቀም (Present Tense Habits).",
        "lessonIds": [
            "am-u4-l1",
            "am-u4-l2",
            "am-u4-l3",
            "am-u4-l4",
            "am-u4-l5"
        ]
    },
    {
        "id": "am-u5",
        "unit": 5,
        "title": "የቀድሞ ጊዜ ግስ እና ታሪክ (Simple Past Tense Narratives)",
        "level": "A1",
        "goal": "Mastery of ያለፈ ጊዜ ድርጊቶች (Past Tense Narration).",
        "lessonIds": [
            "am-u5-l1",
            "am-u5-l2",
            "am-u5-l3",
            "am-u5-l4",
            "am-u5-l5"
        ]
    },
    {
        "id": "am-u6",
        "unit": 6,
        "title": "የወደፊት ጊዜ እና እቅድ (Future Tense & Intentions)",
        "level": "A2",
        "goal": "Mastery of የወደፊት እቅዶች (Future Intentions).",
        "lessonIds": [
            "am-u6-l1",
            "am-u6-l2",
            "am-u6-l3",
            "am-u6-l4",
            "am-u6-l5"
        ]
    },
    {
        "id": "am-u7",
        "unit": 7,
        "title": "የግስ አሉታ እና ጥያቄዎች (Negation & Interrogatives)",
        "level": "A2",
        "goal": "Mastery of አሉታዊ ዓረፍተ ነገሮች (Negation Forms).",
        "lessonIds": [
            "am-u7-l1",
            "am-u7-l2",
            "am-u7-l3",
            "am-u7-l4",
            "am-u7-l5"
        ]
    },
    {
        "id": "am-u8",
        "unit": 8,
        "title": "ቤተሰብ እና ማህበራዊ ግንኙነት (Family & Kinship Structures)",
        "level": "A2",
        "goal": "Mastery of የቤተሰብ ዝምድና (Family Kinship Terms).",
        "lessonIds": [
            "am-u8-l1",
            "am-u8-l2",
            "am-u8-l3",
            "am-u8-l4",
            "am-u8-l5"
        ]
    },
    {
        "id": "am-u9",
        "unit": 9,
        "title": "ምግብ፣ ገበያ እና ግብይት (Cuisine, Markets & Commerce)",
        "level": "A2",
        "goal": "Mastery of የገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine).",
        "lessonIds": [
            "am-u9-l1",
            "am-u9-l2",
            "am-u9-l3",
            "am-u9-l4",
            "am-u9-l5"
        ]
    },
    {
        "id": "am-u10",
        "unit": 10,
        "title": "ቦታዎች፣ ከተማ እና ጉዞ (City Navigation & Spatial Relations)",
        "level": "A2",
        "goal": "Mastery of የከተማ ጉዞ እና አቅጣጫ (Urban Navigation).",
        "lessonIds": [
            "am-u10-l1",
            "am-u10-l2",
            "am-u10-l3",
            "am-u10-l4",
            "am-u10-l5"
        ]
    },
    {
        "id": "am-u11",
        "unit": 11,
        "title": "ጊዜ፣ ሰዓት እና የቀን መቁጠሪያ (Time Expressions & Calendar)",
        "level": "B1",
        "goal": "Mastery of ሰዓት እና የቀን ስሞች (Time and Days).",
        "lessonIds": [
            "am-u11-l1",
            "am-u11-l2",
            "am-u11-l3",
            "am-u11-l4",
            "am-u11-l5"
        ]
    },
    {
        "id": "am-u12",
        "unit": 12,
        "title": "የሰውነት ክፍሎች እና ጤና (Health & Medical Consultations)",
        "level": "B1",
        "goal": "Mastery of የጤና እንክብካቤ እና ህክምና (Health and Anatomy).",
        "lessonIds": [
            "am-u12-l1",
            "am-u12-l2",
            "am-u12-l3",
            "am-u12-l4",
            "am-u12-l5"
        ]
    },
    {
        "id": "am-u13",
        "unit": 13,
        "title": "አየር ሁኔታ እና የተፈጥሮ አካባቢ (Weather & Geography)",
        "level": "B1",
        "goal": "Mastery of አየር ጠባይ እና ተፈጥሮ (Weather and Nature).",
        "lessonIds": [
            "am-u13-l1",
            "am-u13-l2",
            "am-u13-l3",
            "am-u13-l4",
            "am-u13-l5"
        ]
    },
    {
        "id": "am-u14",
        "unit": 14,
        "title": "ስራ፣ ሙያ እና የስራ ቦታ (Occupations & Workplace Dialogue)",
        "level": "B1",
        "goal": "Mastery of የስራ መስክ እና ሙያ (Professions and Workplace).",
        "lessonIds": [
            "am-u14-l1",
            "am-u14-l2",
            "am-u14-l3",
            "am-u14-l4",
            "am-u14-l5"
        ]
    },
    {
        "id": "am-u15",
        "unit": 15,
        "title": "ትምህርት፣ ሳይንስ እና ቴክኖሎጂ (Education & Academia)",
        "level": "B1",
        "goal": "Mastery of የትምህርት ጥናት (Education and Academia).",
        "lessonIds": [
            "am-u15-l1",
            "am-u15-l2",
            "am-u15-l3",
            "am-u15-l4",
            "am-u15-l5"
        ]
    },
    {
        "id": "am-u16",
        "unit": 16,
        "title": "ስሜት፣ ስነ-ልቦና እና ባህሪ (Emotions & Psychology)",
        "level": "B1",
        "goal": "Mastery of ስሜታዊ መግለጫዎች (Emotions and Feelings).",
        "lessonIds": [
            "am-u16-l1",
            "am-u16-l2",
            "am-u16-l3",
            "am-u16-l4",
            "am-u16-l5"
        ]
    },
    {
        "id": "am-u17",
        "unit": 17,
        "title": "የግስ ዝርያዎች፡ ተገብሮ ግስ (Passive Verb Derivations - ተ-)",
        "level": "B2",
        "goal": "Mastery of ተገብሮ ግስ አወቃቀር (Passive Stems).",
        "lessonIds": [
            "am-u17-l1",
            "am-u17-l2",
            "am-u17-l3",
            "am-u17-l4",
            "am-u17-l5"
        ]
    },
    {
        "id": "am-u18",
        "unit": 18,
        "title": "የግስ ዝርያዎች፡ አሰሪ ግስ (Causative Derivations - አስ-)",
        "level": "B2",
        "goal": "Mastery of አሰሪ ግስ አወቃቀር (Causative Stems).",
        "lessonIds": [
            "am-u18-l1",
            "am-u18-l2",
            "am-u18-l3",
            "am-u18-l4",
            "am-u18-l5"
        ]
    },
    {
        "id": "am-u19",
        "unit": 19,
        "title": "ቅጽሎች እና ንፅፅር (Comparative & Superlative Forms)",
        "level": "B2",
        "goal": "Mastery of ንፅፅር እና ቅጽሎች (Comparatives).",
        "lessonIds": [
            "am-u19-l1",
            "am-u19-l2",
            "am-u19-l3",
            "am-u19-l4",
            "am-u19-l5"
        ]
    },
    {
        "id": "am-u20",
        "unit": 20,
        "title": "ተቀጥላ ዓረፍተ ነገሮች (Subordinate Clauses & Relative የ-)",
        "level": "B2",
        "goal": "Mastery of አገናኝ መስተፃምሮች (Relative Clauses).",
        "lessonIds": [
            "am-u20-l1",
            "am-u20-l2",
            "am-u20-l3",
            "am-u20-l4",
            "am-u20-l5"
        ]
    },
    {
        "id": "am-u21",
        "unit": 21,
        "title": "ሁኔታዊ እና ግምታዊ ዓረፍተ ነገሮች (Conditionals & Subjunctive)",
        "level": "B2",
        "goal": "Mastery of ሁኔታዊ አገባቦች (Conditionals).",
        "lessonIds": [
            "am-u21-l1",
            "am-u21-l2",
            "am-u21-l3",
            "am-u21-l4",
            "am-u21-l5"
        ]
    },
    {
        "id": "am-u22",
        "unit": 22,
        "title": "ቀጥተኛ ያልሆነ ንግግር (Reported Speech & Conjunctions)",
        "level": "B2",
        "goal": "Mastery of ቀጥተኛ ያልሆነ ንግግር (Indirect Speech).",
        "lessonIds": [
            "am-u22-l1",
            "am-u22-l2",
            "am-u22-l3",
            "am-u22-l4",
            "am-u22-l5"
        ]
    },
    {
        "id": "am-u23",
        "unit": 23,
        "title": "የኢትዮጵያ ባህል እና ወጎች (Cultural Heritage & Coffee Ceremony)",
        "level": "B2",
        "goal": "Mastery of የቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs).",
        "lessonIds": [
            "am-u23-l1",
            "am-u23-l2",
            "am-u23-l3",
            "am-u23-l4",
            "am-u23-l5"
        ]
    },
    {
        "id": "am-u24",
        "unit": 24,
        "title": "ኪነ-ጥበብ፣ ሙዚቃ እና ስነ-ጽሁፍ (Arts, Music & Literature)",
        "level": "B2",
        "goal": "Mastery of ስነ-ጽሁፍ እና ጥበብ (Literature and Arts).",
        "lessonIds": [
            "am-u24-l1",
            "am-u24-l2",
            "am-u24-l3",
            "am-u24-l4",
            "am-u24-l5"
        ]
    },
    {
        "id": "am-u25",
        "unit": 25,
        "title": "ታሪክ እና ጥንታዊ ቅርሶች (Ethiopian History & Ge'ez Roots)",
        "level": "C1",
        "goal": "Mastery of ታሪክ እና ቅርሶች (History and Heritage).",
        "lessonIds": [
            "am-u25-l1",
            "am-u25-l2",
            "am-u25-l3",
            "am-u25-l4",
            "am-u25-l5"
        ]
    },
    {
        "id": "am-u26",
        "unit": 26,
        "title": "ህግ፣ አስተዳደር እና ፖለቲካ (Legal Terminology & Governance)",
        "level": "C1",
        "goal": "Mastery of ህጋዊ ቃላት እና አስተዳደር (Legal Discourse).",
        "lessonIds": [
            "am-u26-l1",
            "am-u26-l2",
            "am-u26-l3",
            "am-u26-l4",
            "am-u26-l5"
        ]
    },
    {
        "id": "am-u27",
        "unit": 27,
        "title": "ኢኮኖሚ፣ ንግድ እና ፋይናንስ (Economics & Banking)",
        "level": "C1",
        "goal": "Mastery of የኢኮኖሚ ትንተና (Economics and Banking).",
        "lessonIds": [
            "am-u27-l1",
            "am-u27-l2",
            "am-u27-l3",
            "am-u27-l4",
            "am-u27-l5"
        ]
    },
    {
        "id": "am-u28",
        "unit": 28,
        "title": "ሚዲያ፣ ጋዜጠኝነት እና ግንኙነት (Media & Journalism)",
        "level": "C1",
        "goal": "Mastery of ጋዜጠኝነት እና ዜና (Journalism and Media).",
        "lessonIds": [
            "am-u28-l1",
            "am-u28-l2",
            "am-u28-l3",
            "am-u28-l4",
            "am-u28-l5"
        ]
    },
    {
        "id": "am-u29",
        "unit": 29,
        "title": "አካባቢ ጥበቃ እና ዘላቂ ልማት (Ecology & Sustainable Development)",
        "level": "C1",
        "goal": "Mastery of የአካባቢ ጥበቃ (Environmental Science).",
        "lessonIds": [
            "am-u29-l1",
            "am-u29-l2",
            "am-u29-l3",
            "am-u29-l4",
            "am-u29-l5"
        ]
    },
    {
        "id": "am-u30",
        "unit": 30,
        "title": "ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics)",
        "level": "C1",
        "goal": "Mastery of ፍልስፍናዊ አስተሳሰብ (Philosophical Discourse).",
        "lessonIds": [
            "am-u30-l1",
            "am-u30-l2",
            "am-u30-l3",
            "am-u30-l4",
            "am-u30-l5"
        ]
    },
    {
        "id": "am-u31",
        "unit": 31,
        "title": "ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse)",
        "level": "C2",
        "goal": "Mastery of ሳይንሳዊ ግኝት (Scientific Research).",
        "lessonIds": [
            "am-u31-l1",
            "am-u31-l2",
            "am-u31-l3",
            "am-u31-l4",
            "am-u31-l5"
        ]
    },
    {
        "id": "am-u32",
        "unit": 32,
        "title": "ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs)",
        "level": "C2",
        "goal": "Mastery of ዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties).",
        "lessonIds": [
            "am-u32-l1",
            "am-u32-l2",
            "am-u32-l3",
            "am-u32-l4",
            "am-u32-l5"
        ]
    },
    {
        "id": "am-u33",
        "unit": 33,
        "title": "የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric)",
        "level": "C2",
        "goal": "Mastery of የአነጋገር ዘይቤ (Idiomatic Expressions).",
        "lessonIds": [
            "am-u33-l1",
            "am-u33-l2",
            "am-u33-l3",
            "am-u33-l4",
            "am-u33-l5"
        ]
    },
    {
        "id": "am-u34",
        "unit": 34,
        "title": "የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery)",
        "level": "C2",
        "goal": "Mastery of የላቀ የአማርኛ ንግግር (C2 Capstone Statecraft).",
        "lessonIds": [
            "am-u34-l1",
            "am-u34-l2",
            "am-u34-l3",
            "am-u34-l4",
            "am-u34-l5"
        ]
    }
];
  var LESSONS = {
    "am-u1-l1": {
        "id": "am-u1-l1",
        "unit": "am-u1",
        "level": "A1",
        "objective": "Greet others using universal (ሰላም - Selam) and formal respectful (ጤና ይስጥልኝ - Tena yisṭillign) Amharic greeting formulas.",
        "prerequisites": [],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Amharic is written in an ancient abugida syllabary known as Fidel (ፊደል). In everyday Ethiopian communication, greetings depend heavily on social distance and respect.\n\nThe most universal, versatile greeting across all of Ethiopia is « ሰላም » (Selam), which literally means 'Peace'. It can be used with friends, family, colleagues, and peers at any time of day, functioning like 'Hello' or 'Hi'.\n\nWhen greeting elders, superiors, customers, or strangers, polite etiquette requires the formal greeting « ጤና ይስጥልኝ » (Tena yisṭillign). This reverent phrase literally translates to 'May He (God) give you health for my sake' (ጤና = health, ይስጥልኝ = may He give for me). When uttering this greeting, Ethiopians often accompany it with a slight bow or a two-handed handshake as a gesture of deep cultural respect.",
            "examples": [
                {
                    "target": "ሰላም፣ እንደምን ነህ?",
                    "reading": "Selam, indemin neh?",
                    "translation": "Hello, how are you? (to a male friend)"
                },
                {
                    "target": "ጤና ይስጥልኝ፣ ክቡር አቶ በቀለ።",
                    "reading": "Tena yisṭillign, kibur ato Bekele.",
                    "translation": "Good day / Greetings, honorable Mr. Bekele. (formal)"
                },
                {
                    "target": "ሰላም ለሁላችሁም!",
                    "reading": "Selam lehulachihum!",
                    "translation": "Peace / Hello to all of you!"
                },
                {
                    "target": "ጤና ይስጥልኝ፣ እንዴት ነዎት?",
                    "reading": "Tena yisṭillign, indet newot?",
                    "translation": "Greetings, how are you? (polite/formal to an elder)"
                },
                {
                    "target": "ሰላም ሰላም!",
                    "reading": "Selam selam!",
                    "translation": "Hey there! / Peace peace! (cheerful informal greeting)"
                }
            ],
            "mnemonics": [
                "« Selam » is cognate with Arabic 'Salam' and Hebrew 'Shalom' — all meaning PEACE!",
                "« Tena yisṭillign » begins with 'Tena' (Health) — you are wishing divine health upon the listener."
            ],
            "culturalNotes": [
                "In Ethiopian culture, a handshake between acquaintances is often accompanied by touching one's own right elbow with the left hand, or bowing slightly, to convey utmost deference.",
                "Entering a room or joining a shared meal without greeting everyone present is considered exceptionally disrespectful."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which greeting is the universal Amharic word for 'Hello / Peace' suitable with peers?",
                    "options": [
                        "አመሰግናለሁ (Ameseginalehu)",
                        "ሰላም (Selam)",
                        "ደህና ሁን (Dehna hun)",
                        "ይቅርታ (Yikirta)"
                    ],
                    "answerIndex": 1,
                    "explanation": "« ሰላም » (Selam) is the universal greeting meaning 'Peace / Hello'."
                },
                {
                    "prompt": "How do you respectfully greet an elder or a formal guest in Amharic?",
                    "options": [
                        "ጤና ይስጥልኝ (Tena yisṭillign)",
                        "ቻው (Chao)",
                        "እሺ (Ishi)",
                        "ስሜ (Sime)"
                    ],
                    "answerIndex": 0,
                    "explanation": "« ጤና ይስጥልኝ » (Tena yisṭillign) is the formal respectful greeting."
                },
                {
                    "prompt": "What does the formal greeting « ጤና ይስጥልኝ » literally translate to?",
                    "options": [
                        "May you have wealth",
                        "May He give you health for my sake",
                        "Until tomorrow",
                        "Welcome to my home"
                    ],
                    "answerIndex": 1,
                    "explanation": "ጤና (health) + ይስጥልኝ (may He give you for me)."
                },
                {
                    "prompt": "What physical gesture commonly accompanies respectful greetings in Ethiopia?",
                    "options": [
                        "Snapping fingers",
                        "A slight bow and two-handed handshake",
                        "Looking away silently",
                        "Waving both hands"
                    ],
                    "answerIndex": 1,
                    "explanation": "A gentle bow and supporting the right arm with the left hand during handshakes shows deep respect."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "You meet your university professor in Addis Ababa. Which greeting should you choose?",
                    "options": [
                        "ጤና ይስጥልኝ",
                        "ቻው",
                        "ደህና ሁን",
                        "ምንም አይደለም"
                    ],
                    "answerIndex": 0,
                    "explanation": "ጤና ይስጥልኝ is the correct respectful formal register for professors and elders."
                },
                {
                    "prompt": "What is the primary writing system of Amharic called?",
                    "options": [
                        "Hieroglyphs",
                        "Fidel (ፊደል / Abugida)",
                        "Cuneiform",
                        "Devanagari"
                    ],
                    "answerIndex": 1,
                    "explanation": "Amharic is written in the Ge'ez-derived script known as Fidel (ፊደል)."
                },
                {
                    "prompt": "Translate: 'Peace to all of you!'",
                    "options": [
                        "ሰላም ለሁላችሁም!",
                        "ጤና ይስጥልኝ ለብቻህ!",
                        "አመሰግናለሁ!",
                        "ይቅርታ አድርጉልኝ!"
                    ],
                    "answerIndex": 0,
                    "explanation": "« ሰላም ለሁላችሁም! » means 'Peace/Hello to all of you!'."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Select the formal respectful Ethiopian daytime greeting:",
                    "options": [
                        "ጤና ይስጥልኝ",
                        "ቻው ቻው",
                        "እሺ እሺ",
                        "ደህና ዋል"
                    ],
                    "answerIndex": 0,
                    "explanation": "ጤና ይስጥልኝ (Tena yisṭillign) is the formal greeting."
                },
                {
                    "type": "multiple-choice",
                    "prompt": "What does « ሰላም » literally mean in Semitic linguistics?",
                    "options": [
                        "Good morning",
                        "Peace",
                        "Health",
                        "Friendship"
                    ],
                    "answerIndex": 1,
                    "explanation": "ሰላም literally means 'Peace'."
                },
                {
                    "type": "multiple-choice",
                    "prompt": "Which greeting is appropriate when casually meeting a close friend in a café?",
                    "options": [
                        "ሰላም",
                        "ክቡር ሆይ",
                        "ይቅርታ",
                        "አመሰግናለሁ"
                    ],
                    "answerIndex": 0,
                    "explanation": "ሰላም is the standard casual greeting."
                },
                {
                    "type": "multiple-choice",
                    "prompt": "Identify the Amharic word for 'health' embedded in « ጤና ይስጥልኝ »:",
                    "options": [
                        "ጤና (Tena)",
                        "ስም (Sim)",
                        "ቤት (Bet)",
                        "ውሃ (Wuha)"
                    ],
                    "answerIndex": 0,
                    "explanation": "ጤና (Tena) means health."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the universal Amharic word for 'Peace / Hello' in Fidel script (ሰላም):",
                    "acceptedAnswers": [
                        "ሰላም",
                        "Selam",
                        "selam"
                    ],
                    "explanation": "ሰላም (Selam) is the universal greeting."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u1-l2": {
        "id": "am-u1-l2",
        "unit": "am-u1",
        "level": "A1",
        "objective": "Ask 'How are you?' and respond across grammatical genders and social registers: masculine (እንዴት ነህ?), feminine (እንዴት ነሽ?), plural (እንዴት ናችሁ?), and polite (እንዴት ነዎት?).",
        "prerequisites": [
            "am-u1-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u1-l1"
            ]
        },
        "presentation": {
            "explanation": "In Amharic, the second-person pronoun and verb conjugation change strictly based on the GENDER and SOCIAL HIERARCHY of the person you are addressing:\n\n1. Asking a Male (2nd person masculine singular):\n- « እንዴት ነህ? » (Indet neh?) or « እንደምን አለህ? » (Indemin alleh?) -> 'How are you?'\n\n2. Asking a Female (2nd person feminine singular):\n- « እንዴት ነሽ? » (Indet nesh?) or « እንደምን አለሽ? » (Indemin allesh?) -> 'How are you?'\n\n3. Asking a Plural Group (2nd person plural):\n- « እንዴት ናችሁ? » (Indet nachihu?) or « እንደምን አላችሁ? » (Indemin allachihu?) -> 'How are you all?'\n\n4. Asking an Elder / Superior (2nd person polite formal):\n- « እንዴት ነዎት? » (Indet newot?) or « እንደምን አሉ? » (Indemin allu?) -> 'How are you, sir/madam?'\n\nStandard Positive Responses:\n- « ደህና ነኝ፣ እግዚአብሔር ይመስገን » (Dehna negn, Igziabher yimesgen) -> 'I am fine, thanks be to God.'\n- « አለሁ » (Allehu) -> 'I am well / I am here / surviving well.'",
            "examples": [
                {
                    "target": "ሰላም ዳዊት፣ እንዴት ነህ?",
                    "reading": "Selam Dawit, indet neh?",
                    "translation": "Hello Dawit, how are you? (to a male)"
                },
                {
                    "target": "ሰላም ሄለን፣ እንዴት ነሽ?",
                    "reading": "Selam Helen, indet nesh?",
                    "translation": "Hello Helen, how are you? (to a female)"
                },
                {
                    "target": "እንደምን አደራችሁ፣ ተማሪዎች?",
                    "reading": "Indemin adderachihu, temariwoch?",
                    "translation": "Good morning, students! (to a plural group)"
                },
                {
                    "target": "ጤና ይስጥልኝ ጋሼ፣ እንዴት ነዎት?",
                    "reading": "Tena yisṭillign Gashe, indet newot?",
                    "translation": "Greetings elder brother/uncle, how are you? (polite formal)"
                },
                {
                    "target": "ደህና ነኝ፣ እግዚአብሔር ይመስገን። አንተስ?",
                    "reading": "Dehna negn, Igziabher yimesgen. Antes?",
                    "translation": "I am fine, praise God. And you? (to male)"
                }
            ],
            "mnemonics": [
                "NEH = HE (addressed to a man: እንዴት ነህ - Indet neh). NESH = SHE (addressed to a woman: እንዴት ነሽ - Indet nesh)!",
                "« Igziabher yimesgen » is the universal Ethiopian reply — attributing health and well-being to the Creator."
            ],
            "culturalNotes": [
                "In Ethiopia, regardless of religious background, answering 'How are you?' with « እግዚአብሔር ይመስገን » (Praise God) or « አልሐምዱሊላህ » is culturally standard and demonstrates gratitude and humility.",
                "Failing to adapt 'neh' (male) vs 'nesh' (female) is an immediate grammatical tell for foreign learners."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you ask a female friend 'How are you?' in Amharic?",
                    "options": [
                        "እንዴት ነህ? (Indet neh?)",
                        "እንዴት ነሽ? (Indet nesh?)",
                        "እንዴት ናችሁ? (Indet nachihu?)",
                        "እንዴት ነዎት? (Indet newot?)"
                    ],
                    "answerIndex": 1,
                    "explanation": "« እንዴት ነሽ? » (Indet nesh?) uses the feminine singular 2nd-person marker -ሽ (-sh)."
                },
                {
                    "prompt": "How do you ask an elder or professor 'How are you?' politely?",
                    "options": [
                        "እንዴት ነህ?",
                        "እንዴት ነሽ?",
                        "እንዴት ነዎት? (Indet newot?)",
                        "ደህና ነኝ"
                    ],
                    "answerIndex": 2,
                    "explanation": "« እንዴት ነዎት? » (Indet newot?) is the formal honorific form."
                },
                {
                    "prompt": "What is the standard, culturally respectful answer meaning 'I am fine, praise God'?",
                    "options": [
                        "ደህና ነኝ፣ እግዚአብሔር ይመስገን",
                        "ይቅርታ አድርግልኝ",
                        "አልፈልግም",
                        "ስሜ ዳዊት ነው"
                    ],
                    "answerIndex": 0,
                    "explanation": "« ደህና ነኝ፣ እግዚአብሔር ይመስገን » (Dehna negn, Igziabher yimesgen) is standard."
                },
                {
                    "prompt": "How do you ask a group of friends 'How are you all?'",
                    "options": [
                        "እንዴት ነህ?",
                        "እንዴት ነሽ?",
                        "እንዴት ናችሁ? (Indet nachihu?)",
                        "እንዴት ነኝ?"
                    ],
                    "answerIndex": 2,
                    "explanation": "« እንዴት ናችሁ? » (Indet nachihu?) is the plural form."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: 'How are you, Dawit?' (Dawit is male):",
                    "options": [
                        "እንዴት ነሽ ዳዊት?",
                        "እንዴት ነህ ዳዊት?",
                        "እንዴት ናችሁ ዳዊት?",
                        "እንዴት ነዎት ዳዊት?"
                    ],
                    "answerIndex": 1,
                    "explanation": "« እንዴት ነህ ዳዊት? » (masculine singular)."
                },
                {
                    "prompt": "After saying you are fine, how do you ask a woman 'And you?' (feminine):",
                    "options": [
                        "አንተስ? (Antes?)",
                        "አንቺስ? (Anchis?)",
                        "እናንተስ? (Enantes?)",
                        "እርስዎስ? (Irsiwos?)"
                    ],
                    "answerIndex": 1,
                    "explanation": "« አንቺስ? » (Anchis?) means 'And you?' to a female."
                },
                {
                    "prompt": "What does « አለሁ » (Allehu) mean when answering a greeting?",
                    "options": [
                        "I am fine / I am here",
                        "I am tired",
                        "Goodbye",
                        "No thank you"
                    ],
                    "answerIndex": 0,
                    "explanation": "« አለሁ » (literally 'I exist / I am present') is a common relaxed reply meaning 'I'm doing well / I'm here'."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Select the correct question addressed to a woman:",
                    "options": [
                        "እንዴት ነህ?",
                        "እንዴት ነሽ?",
                        "እንዴት ነኝ?",
                        "እንዴት ነው?"
                    ],
                    "answerIndex": 1,
                    "explanation": "እንዴት ነሽ? is the feminine question."
                },
                {
                    "type": "multiple-choice",
                    "prompt": "What suffix marks 2nd-person masculine singular in « እንዴት ነህ »?",
                    "options": [
                        "-ሽ (-sh)",
                        "-ህ (-h / neh)",
                        "-ችሁ (-chihu)",
                        "-ዎት (-wot)"
                    ],
                    "answerIndex": 1,
                    "explanation": "-ህ (-h) marks masculine singular."
                },
                {
                    "type": "multiple-choice",
                    "prompt": "Translate: 'I am fine' (Dehna negn):",
                    "options": [
                        "ደህና ነኝ",
                        "ደህና ሁን",
                        "ደህና እደር",
                        "ደህና ዋል"
                    ],
                    "answerIndex": 0,
                    "explanation": "ደህና ነኝ (Dehna negn) = I am fine."
                },
                {
                    "type": "multiple-choice",
                    "prompt": "Which pronoun question is used to ask an elder 'And you, sir/madam?'",
                    "options": [
                        "አንተስ?",
                        "አንቺስ?",
                        "እርስዎስ? (Irsiwos?)",
                        "እነሱስ?"
                    ],
                    "answerIndex": 2,
                    "explanation": "እርስዎስ? is the formal polite 'And you?'."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'fine / well' in « ደህና ነኝ » (ደህና):",
                    "acceptedAnswers": [
                        "ደህና",
                        "Dehna",
                        "dehna"
                    ],
                    "explanation": "ደህና (Dehna) means fine/well/safe."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u1-l3": {
        "id": "am-u1-l3",
        "unit": "am-u1",
        "level": "A1",
        "objective": "Introduce yourself using « ስሜ ... ይባላል » (Sime ... yiballal) or « እባላለሁ » (Iballalehu), and ask someone their name across genders.",
        "prerequisites": [
            "am-u1-l1",
            "am-u1-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u1-l1",
                "am-u1-l2"
            ]
        },
        "presentation": {
            "explanation": "To state your name in Amharic, the noun « ስም » (Sim - name) takes the first-person possessive suffix -ኤ (-e), becoming « ስሜ » (Sime - my name):\n\nFormula 1: « ስሜ [ስም] ይባላል » (Sime [Name] yiballal) -> 'My name is called [Name]' (literally: My name, it is called...)\nFormula 2: « [ስም] እባላለሁ » ([Name] iballalehu) -> 'I am called [Name]'\nFormula 3: « እኔ [ስም] ነኝ » (Ine [Name] negn) -> 'I am [Name]'\n\nAsking Someone's Name:\n- To a male: « ስምህ ማን ነው? » (Simih man new?) -> 'What is your (m.) name?'\n- To a female: « ስምሽ ማን ነው? » (Simish man new?) -> 'What is your (f.) name?'\n- To an elder / formal: « ስምዎ ማን ነው? » (Simwo man new?) -> 'What is your (polite) name?'\n\nUpon meeting someone for the first time, say:\n- « ስለተዋወቅን ደስ ብሎኛል » (Siletewaweqin des bilognall) -> 'Pleased to meet you' (literally: Because we became acquainted, it has pleased me).",
            "examples": [
                {
                    "target": "ስሜ ዮናስ ይባላል።",
                    "reading": "Sime Yonas yiballal.",
                    "translation": "My name is Yonas."
                },
                {
                    "target": "ስምህ ማን ነው?",
                    "reading": "Simih man new?",
                    "translation": "What is your name? (to a male)"
                },
                {
                    "target": "ስምሽ ማን ነው?",
                    "reading": "Simish man new?",
                    "translation": "What is your name? (to a female)"
                },
                {
                    "target": "ስምዎ ማን ነው ክቡር ሆይ?",
                    "reading": "Simwo man new kibur hoy?",
                    "translation": "What is your name, honored sir? (formal)"
                },
                {
                    "target": "ስለተዋወቅን ደስ ብሎኛል!",
                    "reading": "Siletewaweqin des bilognall!",
                    "translation": "Nice to meet you! (Delighted to make your acquaintance)"
                }
            ],
            "mnemonics": [
                "SIM = Name. Add -E for MY name (Sime), add -IH for YOUR (m) name (Simih), add -ISH for YOUR (f) name (Simish)!",
                "« Des bilognall » = 'It brought me joy' (Des = joy/delight)."
            ],
            "culturalNotes": [
                "In Ethiopia, people do not traditionally use family surnames in the Western sense. Your name consists of your given personal name followed by your father's personal name (and often grandfather's name), e.g., Abebe Bikila (Abebe, son of Bikila).",
                "When addressing someone formally, use titles like « አቶ » (Ato - Mr.), « ወይዘሮ » (Weyzero - Mrs.), or « ወይዘሪት » (Weyzerit - Miss) before their personal first name: 'Ato Abebe'."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you say 'My name is Almaz' in Amharic?",
                    "options": [
                        "ስሜ አልማዝ ይባላል።",
                        "ስምህ አልማዝ ነው?",
                        "ስምሽ አልማዝ ነው።",
                        "እሷ አልማዝ ናት።"
                    ],
                    "answerIndex": 0,
                    "explanation": "« ስሜ አልማዝ ይባላል » (Sime Almaz yiballal) is the standard formula."
                },
                {
                    "prompt": "How do you ask a man his name?",
                    "options": [
                        "ስምሽ ማን ነው?",
                        "ስምህ ማን ነው? (Simih man new?)",
                        "ስሜ ማን ነው?",
                        "ስማቸው ማን ነው?"
                    ],
                    "answerIndex": 1,
                    "explanation": "« ስምህ ማን ነው? » uses -ህ (-ih) for masculine singular."
                },
                {
                    "prompt": "How do you ask a woman her name?",
                    "options": [
                        "ስምህ ማን ነው?",
                        "ስምሽ ማን ነው? (Simish man new?)",
                        "ስምዎ ማን ነው?",
                        "ስሜ ማን ነው?"
                    ],
                    "answerIndex": 1,
                    "explanation": "« ስምሽ ማን ነው? » uses -ሽ (-ish) for feminine singular."
                },
                {
                    "prompt": "What expression translates to 'Nice to meet you' in Amharic?",
                    "options": [
                        "ደህና ሁን",
                        "ስለተዋወቅን ደስ ብሎኛል (Siletewaweqin des bilognall)",
                        "ይቅርታ",
                        "አመሰግናለሁ"
                    ],
                    "answerIndex": 1,
                    "explanation": "« ስለተዋወቅን ደስ ብሎኛል » means 'Nice to meet you'."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "How is an Ethiopian full name structured?",
                    "options": [
                        "Given Name + Mother's Maiden Name",
                        "Given Name + Father's Given Name",
                        "Family Surname + Given Name",
                        "City of Birth + Given Name"
                    ],
                    "answerIndex": 1,
                    "explanation": "Ethiopian naming structure is Personal Name + Father's Name."
                },
                {
                    "prompt": "Translate: 'I am called Thomas' (using iballalehu):",
                    "options": [
                        "ቶማስ እባላለሁ።",
                        "ቶማስ ይባላል።",
                        "ስምሽ ቶማስ ነው።",
                        "ቶማስ ነሽ።"
                    ],
                    "answerIndex": 0,
                    "explanation": "« ቶማስ እባላለሁ » means 'I am called Thomas'."
                },
                {
                    "prompt": "What is the polite title for 'Mr.' in Amharic?",
                    "options": [
                        "ወይዘሮ (Mrs.)",
                        "አቶ (Ato)",
                        "ጋሼ",
                        "መምህር"
                    ],
                    "answerIndex": 1,
                    "explanation": "« አቶ » (Ato) is the formal title for 'Mr.'."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Complete the self-introduction: « ___ ዮሐንስ ይባላል። »",
                    "options": [
                        "ስሜ",
                        "ስምህ",
                        "ስምሽ",
                        "ስሙ"
                    ],
                    "answerIndex": 0,
                    "explanation": "ስሜ (Sime) = My name."
                },
                {
                    "type": "multiple-choice",
                    "prompt": "Which question is addressed to a female addressee?",
                    "options": [
                        "ስምህ ማን ነው?",
                        "ስምሽ ማን ነው?",
                        "ስምዎ ማን ነው?",
                        "ስሜ ማን ነው?"
                    ],
                    "answerIndex": 1,
                    "explanation": "ስምሽ ማን ነው? is feminine."
                },
                {
                    "type": "multiple-choice",
                    "prompt": "What does « ማን ነው? » (Man new?) mean in Amharic?",
                    "options": [
                        "Where is it?",
                        "Who / What is it?",
                        "How much is it?",
                        "When is it?"
                    ],
                    "answerIndex": 1,
                    "explanation": "ማን (Man) means 'who/what'."
                },
                {
                    "type": "multiple-choice",
                    "prompt": "What does « ስለተዋወቅን ደስ ብሎኛል » express upon meeting someone?",
                    "options": [
                        "Pleased to meet you",
                        "Goodbye until tomorrow",
                        "I don't understand",
                        "Please forgive me"
                    ],
                    "answerIndex": 0,
                    "explanation": "Pleased to meet you."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'My name' in Fidel script (ስሜ):",
                    "acceptedAnswers": [
                        "ስሜ",
                        "Sime",
                        "sime"
                    ],
                    "explanation": "ስሜ (Sime) means 'My name'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u1-l4": {
        "id": "am-u1-l4",
        "unit": "am-u1",
        "level": "A1",
        "objective": "Use essential Ethiopian courtesy expressions: please (እባክህ / እባክሽ / እባክዎ), thank you (አመሰግናለሁ), you're welcome (ምንም አይደለም), and excuse me / sorry (ይቅርታ).",
        "prerequisites": [
            "am-u1-l1",
            "am-u1-l2",
            "am-u1-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u1-l1",
                "am-u1-l3"
            ]
        },
        "presentation": {
            "explanation": "Politeness formulas in Amharic reflect traditional Ethiopian warmth, hospitality (እንግዳ ተቀባይነት), and respect:\n\n1. Saying 'Please':\n- To a male: « እባክህ » (Ibakih)\n- To a female: « እባክሽ » (Ibakish)\n- To a group: « እባካችሁ » (Ibakachihu)\n- To an elder / formal: « እባክዎ » (Ibakwo) or « እባክዎትን » (Ibakwotin)\n\n2. Saying 'Thank you':\n- « አመሰግናለሁ » (Ameseginalehu) -> 'Thank you' (literally: I praise/thank)\n- « በጣም አመሰግናለሁ » (Beṭam ameseginalehu) -> 'Thank you very much' (በጣም = very much)\n- Traditional blessing response: « እግዚአብሔር ይስጥልኝ » (Igziabher yisṭillign) -> 'May God reward/give you on my behalf'\n\n3. Saying 'You're welcome / It's nothing':\n- « ምንም አይደለም » (Minim aydellem) -> 'It's nothing / No problem at all' (ምንም = nothing, አይደለም = it is not)\n\n4. Saying 'Excuse me / Sorry':\n- « ይቅርታ » (Yikirta) -> 'Excuse me / Pardon / Forgiveness'\n- « ይቅርታ አድርግልኝ » (Yikirta adriglign) -> 'Please forgive me' (to a male)",
            "examples": [
                {
                    "target": "እባክሽ ውሃ ስጪኝ።",
                    "reading": "Ibakish wuha sichign.",
                    "translation": "Please give me water. (to a female)"
                },
                {
                    "target": "በጣም አመሰግናለሁ ለረዳኸኝ!",
                    "reading": "Beṭam ameseginalehu leredahegn!",
                    "translation": "Thank you very much for helping me!"
                },
                {
                    "target": "ምንም አይደለም፣ ደስ ብሎኛል።",
                    "reading": "Minim aydellem, des bilognall.",
                    "translation": "You're welcome / It's nothing, my pleasure."
                },
                {
                    "target": "ይቅርታ፣ መንገዱ የት ነው?",
                    "reading": "Yikirta, mengedu yet new?",
                    "translation": "Excuse me, where is the road / street?"
                },
                {
                    "target": "እባክዎ እዚህ ይቀመጡ።",
                    "reading": "Ibakwo izzih yiqemeṭu.",
                    "translation": "Please sit here. (polite to an elder)"
                }
            ],
            "mnemonics": [
                "AMESEGINALEHU: Imagine saying 'A message in a hug' to remember thanking someone warmly!",
                "YIKIRTA = Pardon / Excuse me (think of asking to 'clear' the way)."
            ],
            "culturalNotes": [
                "When someone serves you traditional Ethiopian coffee (ቡና - Buna) or offers a food morsel by hand (ጉርሻ - Gursha), responding with « እግዚአብሔር ይስጥልኝ » or « አመሰግናለሁ » is essential etiquette.",
                "Refusing a 'Gursha' (feeding a bite of injera to a guest with one's right hand) is seen as rejecting friendship."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you say 'Thank you very much' in Amharic?",
                    "options": [
                        "በጣም አመሰግናለሁ (Beṭam ameseginalehu)",
                        "ምንም አይደለም",
                        "ይቅርታ",
                        "እባክህ"
                    ],
                    "answerIndex": 0,
                    "explanation": "« በጣም አመሰግናለሁ » means 'Thank you very much'."
                },
                {
                    "prompt": "What is the polite response to 'Thank you' meaning 'It's nothing / You're welcome'?",
                    "options": [
                        "ሰላም",
                        "ምንም አይደለም (Minim aydellem)",
                        "ስሜ ዳዊት ነው",
                        "እንዴት ነህ"
                    ],
                    "answerIndex": 1,
                    "explanation": "« ምንም አይደለም » (Minim aydellem) means 'It's nothing / You're welcome'."
                },
                {
                    "prompt": "How do you say 'Please' when asking an older woman or respected official?",
                    "options": [
                        "እባክህ",
                        "እባክሽ",
                        "እባክዎ / እባክዎትን (Ibakwo)",
                        "አመሰግናለሁ"
                    ],
                    "answerIndex": 2,
                    "explanation": "« እባክዎ » (Ibakwo) is the formal respectful form of 'Please'."
                },
                {
                    "prompt": "You accidentally bump into someone in a market. What should you immediately say?",
                    "options": [
                        "ይቅርታ (Yikirta)",
                        "ደህና ሁን",
                        "ምንም አይደለም",
                        "እሺ"
                    ],
                    "answerIndex": 0,
                    "explanation": "« ይቅርታ » (Yikirta) means 'Excuse me / Pardon / Sorry'."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "How do you say 'Please' to a male peer?",
                    "options": [
                        "እባክሽ",
                        "እባክህ (Ibakih)",
                        "እባክዎ",
                        "እባካችሁ"
                    ],
                    "answerIndex": 1,
                    "explanation": "« እባክህ » is the masculine singular form."
                },
                {
                    "prompt": "What does « እግዚአብሔር ይስጥልኝ » mean when said after receiving a favor or gift?",
                    "options": [
                        "May God reward you for me",
                        "Goodbye forever",
                        "I am very sorry",
                        "Where is the church?"
                    ],
                    "answerIndex": 0,
                    "explanation": "It is a heartfelt blessing meaning 'May God give to you on my behalf'."
                },
                {
                    "prompt": "What is the traditional Ethiopian practice of feeding a bite of food to a guest called?",
                    "options": [
                        "ቡና (Buna)",
                        "ጉርሻ (Gursha)",
                        "ፊደል (Fidel)",
                        "ሰላም (Selam)"
                    ],
                    "answerIndex": 1,
                    "explanation": "« ጉርሻ » (Gursha) is the warm cultural gesture of feeding a morsel to someone."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Translate: 'Thank you' in standard Amharic:",
                    "options": [
                        "አመሰግናለሁ",
                        "ይቅርታ",
                        "እባክህ",
                        "ምንም አይደለም"
                    ],
                    "answerIndex": 0,
                    "explanation": "አመሰግናለሁ (Ameseginalehu) = Thank you."
                },
                {
                    "type": "multiple-choice",
                    "prompt": "What does « ይቅርታ » mean?",
                    "options": [
                        "Thank you",
                        "Excuse me / Sorry",
                        "Please",
                        "Welcome"
                    ],
                    "answerIndex": 1,
                    "explanation": "ይቅርታ (Yikirta) = Excuse me / Sorry."
                },
                {
                    "type": "multiple-choice",
                    "prompt": "How do you say 'Please' to a woman?",
                    "options": [
                        "እባክህ",
                        "እባክሽ",
                        "እባክዎ",
                        "እባካችሁ"
                    ],
                    "answerIndex": 1,
                    "explanation": "እባክሽ (Ibakish) is feminine."
                },
                {
                    "type": "multiple-choice",
                    "prompt": "What is the meaning of « በጣም » in « በጣም አመሰግናለሁ »?",
                    "options": [
                        "Little",
                        "Very / Very much",
                        "Today",
                        "Always"
                    ],
                    "answerIndex": 1,
                    "explanation": "በጣም (Beṭam) = Very / Very much."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'Thank you' in Fidel script (አመሰግናለሁ):",
                    "acceptedAnswers": [
                        "አመሰግናለሁ",
                        "Ameseginalehu",
                        "ameseginalehu"
                    ],
                    "explanation": "አመሰግናለሁ (Ameseginalehu) means 'Thank you'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u1-l5": {
        "id": "am-u1-l5",
        "unit": "am-u1",
        "level": "A1",
        "objective": "Master Fidel vowel orders (ግዕዝ እስከ ሳብዕ) and express appropriate farewell formulas (ደህና ሁን / ሁኚ / ሁኑ / ይሁኑ and ቻው).",
        "prerequisites": [
            "am-u1-l1",
            "am-u1-l2",
            "am-u1-l3",
            "am-u1-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u1-l1",
                "am-u1-l4"
            ]
        },
        "presentation": {
            "explanation": "The Fidel writing system is an Abugida: each symbol represents a consonant combined with an inherent vowel sound. Every basic consonant character has SEVEN standard vowel modifications called Orders (ወገኖች / ዓዕማድ):\n\n1. 1st Order — ግዕዝ (Ge'ez): inherent /ä/ or /e/ sound (e.g., ሀ - hä, ለ - lä, መ - mä, ሰ - sä)\n2. 2nd Order — ካዕብ (Ka'ib): /u/ sound (e.g., ሁ - hu, ሉ - lu, ሙ - mu, ሱ - su)\n3. 3rd Order — ሣልስ (Salis): /i/ sound (e.g., ሂ - hi, ሊ - li, ሚ - mi, ሲ - si)\n4. 4th Order — ራብዕ (Rabi'): /a/ long sound (e.g., ሃ - ha, ላ - la, ማ - ma, ሳ - sa)\n5. 5th Order — ኃምስ (Hamis): /e/ sound (e.g., ሄ - he, ሌ - le, ሜ - me, ሴ - se)\n6. 6th Order — ሳድስ (Sadis): short /ɨ/ or bare consonant without vowel (e.g., ህ - h/hɨ, ል - l/lɨ, ም - m/mɨ, ስ - s/sɨ)\n7. 7th Order — ሳብዕ (Sabi'): /o/ sound (e.g., ሆ - ho, ሎ - lo, ሞ - mo, ሶ - so)\n\nFarewells & Parting Formulas in Amharic:\n- To a male: « ደህና ሁን » (Dehna hun) -> 'Goodbye / Stay safe (m.)'\n- To a female: « ደህና ሁኚ » (Dehna hugni) -> 'Goodbye / Stay safe (f.)'\n- To a group: « ደህና ሁኑ » (Dehna hunu) -> 'Goodbye (plural)'\n- To an elder / formal: « ደህና ይሁኑ » (Dehna yihunu) -> 'Goodbye (formal)'\n- Daytime parting: « ደህና ዋል / ዋዪ / ዋሉ » (Dehna wal / wayi / walu) -> 'Have a good day'\n- Nighttime parting: « ደህና እደር / እደሪ / እደሩ » (Dehna ider / ideri / ideru) -> 'Good night'\n- Casual modern farewell: « ቻው » (Chao - borrowed from Italian).",
            "examples": [
                {
                    "target": "ደህና ሁን ዳዊት፣ ነገ እንገናኛለን።",
                    "reading": "Dehna hun Dawit, nege innigenagnallen.",
                    "translation": "Goodbye Dawit, we will meet tomorrow."
                },
                {
                    "target": "ደህና ሁኚ ሄለን፣ ሰላም ሁኚ።",
                    "reading": "Dehna hugni Helen, selam hugni.",
                    "translation": "Goodbye Helen, stay well."
                },
                {
                    "target": "ደህና እደሩ፣ መልካም ሌሊት!",
                    "reading": "Dehna ideru, melkam lelit!",
                    "translation": "Good night to you all, sweet dreams!"
                },
                {
                    "target": "ደህና ይሁኑ ክቡር አቶ ተፈራ።",
                    "reading": "Dehna yihunu kibur ato Tefera.",
                    "translation": "Farewell and stay well, honored Mr. Tefera. (formal)"
                },
                {
                    "target": "ቻው፣ በደህና ግባ!",
                    "reading": "Chao, bedehna giba!",
                    "translation": "Bye, arrive safely! (casual)"
                }
            ],
            "mnemonics": [
                "7 Orders Rhyme: Ge'ez (ä), Ka'ib (u), Salis (i), Rabi' (a), Hamis (e), Sadis (bare), Sabi' (o)!",
                "« Dehna hun » = Be healthy/safe! (Hun = be m., Hugni = be f., Hunu = be pl.)."
            ],
            "culturalNotes": [
                "Wishing someone a good night in Amharic (« ደህና እደር ») literally means 'Pass the night in health and safety'.",
                "Italian loan words like « ቻው » (Chao) entered urban Ethiopian slang during the 1930s and remain extremely common among younger generations."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How many vowel orders (forms) does each basic consonant letter have in the Fidel syllabary?",
                    "options": [
                        "3 orders",
                        "5 orders",
                        "7 orders (ግዕዝ እስከ ሳብዕ)",
                        "12 orders"
                    ],
                    "answerIndex": 2,
                    "explanation": "Fidel consonants each have 7 vowel orders."
                },
                {
                    "prompt": "How do you say 'Goodbye / Stay safe' to a female friend?",
                    "options": [
                        "ደህና ሁን",
                        "ደህና ሁኚ (Dehna hugni)",
                        "ደህና ሁኑ",
                        "ደህና እደር"
                    ],
                    "answerIndex": 1,
                    "explanation": "« ደህና ሁኚ » is the feminine singular farewell."
                },
                {
                    "prompt": "What is the 4th order (ራብዕ) vowel sound in the Fidel system?",
                    "options": [
                        "/ä/",
                        "/u/",
                        "/i/",
                        "/a/ (long open 'a')"
                    ],
                    "answerIndex": 3,
                    "explanation": "The 4th order (ራብዕ) represents the open /a/ sound (e.g. ሃ, ላ, ማ, ሳ)."
                },
                {
                    "prompt": "How do you say 'Good night' to a male friend?",
                    "options": [
                        "ደህና እደር (Dehna ider)",
                        "ደህና ዋል",
                        "ደህና ሁኚ",
                        "ጤና ይስጥልኝ"
                    ],
                    "answerIndex": 0,
                    "explanation": "« ደህና እደር » (Dehna ider) wishes a good night to a male."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: 'Goodbye to all of you!' (plural):",
                    "options": [
                        "ደህና ሁን",
                        "ደህና ሁኚ",
                        "ደህና ሁኑ! (Dehna hunu!)",
                        "ደህና እደር"
                    ],
                    "answerIndex": 2,
                    "explanation": "« ደህና ሁኑ » is plural."
                },
                {
                    "prompt": "Which Fidel order represents the bare consonant sound without an inherent vowel?",
                    "options": [
                        "1st order (ግዕዝ)",
                        "4th order (ራብዕ)",
                        "6th order (ሳድስ - Sadis)",
                        "7th order (ሳብዕ)"
                    ],
                    "answerIndex": 2,
                    "explanation": "The 6th order (ሳድስ) represents the bare consonant or short /ɨ/."
                },
                {
                    "prompt": "What casual farewell borrowed from Italian is common in urban Addis Ababa?",
                    "options": [
                        "ሰላም",
                        "ቻው (Chao)",
                        "እሺ",
                        "አዎ"
                    ],
                    "answerIndex": 1,
                    "explanation": "« ቻው » (Chao) is widely used informally."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Select the correct farewell addressed to an elder or respected superior:",
                    "options": [
                        "ደህና ይሁኑ (Dehna yihunu)",
                        "ደህና ሁን",
                        "ቻው ቻው",
                        "ደህና ሁኚ"
                    ],
                    "answerIndex": 0,
                    "explanation": "ደህና ይሁኑ is the formal respectful farewell."
                },
                {
                    "type": "multiple-choice",
                    "prompt": "Which order of the letter 'ሰ' is 'ሱ' (su)?",
                    "options": [
                        "1st Order (Ge'ez)",
                        "2nd Order (Ka'ib)",
                        "3rd Order (Salis)",
                        "7th Order (Sabi')"
                    ],
                    "answerIndex": 1,
                    "explanation": "ሱ (su) is the 2nd order (Ka'ib)."
                },
                {
                    "type": "multiple-choice",
                    "prompt": "What does « ደህና ዋል » mean when parting during the daytime?",
                    "options": [
                        "Have a good day",
                        "Have a good night",
                        "Eat well",
                        "Happy birthday"
                    ],
                    "answerIndex": 0,
                    "explanation": "ደህና ዋል = Have a good day (daytime parting)."
                },
                {
                    "type": "multiple-choice",
                    "prompt": "Translate: 'Good night' to a female friend (Dehna ideri):",
                    "options": [
                        "ደህና እደር",
                        "ደህና እደሪ",
                        "ደህና እደሩ",
                        "ደህና ዋዪ"
                    ],
                    "answerIndex": 1,
                    "explanation": "ደህና እደሪ (feminine singular)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic farewell meaning 'Stay safe / Goodbye (m.)' in Fidel script (ደህና ሁን):",
                    "acceptedAnswers": [
                        "ደህና ሁን",
                        "Dehna hun",
                        "dehna hun"
                    ],
                    "explanation": "ደህና ሁን (Dehna hun) is the masculine farewell."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u2-l1": {
        "id": "am-u2-l1",
        "unit": "am-u2",
        "level": "A1",
        "objective": "Form definite nouns using masculine (-ኡ / -ው) and feminine (-ዋ / -ይቱ) definite article suffixes.",
        "prerequisites": [
            "am-u1-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u1-l3",
                "am-u1-l5"
            ]
        },
        "presentation": {
            "explanation": "In Amharic, there is no separate word for 'the' (like English 'the' or Arabic 'al-'). Instead, definiteness is expressed by attaching a definite suffix directly to the end of the noun:\n\n1. Masculine Definite Suffix:\n- After a consonant: add -ኡ (-u). E.g., « ቤት » (bet - house) -> « ቤቱ » (betu - the house); « መጽሐፍ » (mets'haf - book) -> « መጽሐፉ » (mets'hafu - the book); « ወንበር » (wenber - chair) -> « ወንበሩ » (wenberu - the chair).\n- After a vowel: add -ው (-w). E.g., « ውሻ » (wusha - dog) -> « ውሻው » (wushaw - the dog); « ዶሮ » (doro - chicken) -> « ዶሮው » (dorow - the chicken).\n\n2. Feminine Definite Suffix:\n- Add -ዋ (-wa) or -ይቱ (-yitu / -itu). E.g., « ሴት » (set - woman) -> « ሴቷ » (setwa - the woman); « ድመት » (dimet - cat) -> « ድመቷ » (dimetwa - the cat); « ልጅ » (lij - child) -> « ልጁ » (liju - the boy) vs « ልጂቷ » (lijitu / lijwa - the girl).",
            "examples": [
                {
                    "target": "ቤቱ በጣም ትልቅ ነው።",
                    "reading": "Betu beṭam tiliq new.",
                    "translation": "The house is very big."
                },
                {
                    "target": "መጽሐፉ ጠረጴዛው ላይ አለ።",
                    "reading": "Mets'hafu t'erep'ezaw lay ale.",
                    "translation": "The book is on the table."
                },
                {
                    "target": "ሴቷ ወደ ገበያ ሄደች።",
                    "reading": "Setwa wede gebeya hedech.",
                    "translation": "The woman went to the market."
                },
                {
                    "target": "ውሻው በግቢው ውስጥ ይሮጣል።",
                    "reading": "Wushaw begibiw wust' yiroṭal.",
                    "translation": "The dog runs inside the compound."
                },
                {
                    "target": "ልጂቷ ጎበዝ ተማሪ ናት።",
                    "reading": "Lijitu gobez temari nat.",
                    "translation": "The girl is a clever student."
                }
            ],
            "mnemonics": [
                "-U for him/masculine (Bet -> Bet-U), -WA for her/feminine (Set -> Set-WA)!"
            ],
            "culturalNotes": [
                "In Amharic, small, cute, or affectionate objects are frequently given the feminine definite suffix (-ዋ), whereas large or impressive things often take the masculine (-ኡ)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you make the masculine noun « ቤት » (house) definite ('the house')?",
                    "options": [
                        "ቤቱ (Betu)",
                        "ቤትዋ (Betwa)",
                        "ቤቶች (Betoch)",
                        "አንድ ቤት (And bet)"
                    ],
                    "answerIndex": 0,
                    "explanation": "Adding -ኡ (-u) to a consonant-ending noun forms the masculine definite: ቤቱ = the house."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Which word means 'the woman' in Amharic?",
                    "options": [
                        "ሴቷ (Setwa)",
                        "ሴቱ (Setu)",
                        "ሴቶች (Setoch)",
                        "ሴትዬ (Setiye)"
                    ],
                    "answerIndex": 0,
                    "explanation": "« ሴት » (woman) takes the feminine definite suffix -ዋ (-wa) to become « ሴቷ » (the woman)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "How do you say 'The book' in Amharic given « መጽሐፍ » (book)?",
                    "options": [
                        "መጽሐፉ (Mets'hafu)",
                        "መጽሐፏ",
                        "መጽሐፎች",
                        "መጽሐፌ"
                    ],
                    "answerIndex": 0,
                    "explanation": "መጽሐፉ is the masculine definite form."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'the house' in Fidel script (ቤቱ):",
                    "acceptedAnswers": [
                        "ቤቱ",
                        "betu",
                        "Betu"
                    ],
                    "explanation": "ቤቱ (Betu) means 'the house'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u2-l2": {
        "id": "am-u2-l2",
        "unit": "am-u2",
        "level": "A1",
        "objective": "Count from 1 to 10 in Amharic (አንድ እስከ አስር) and use numbers with nouns.",
        "prerequisites": [
            "am-u2-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u2-l1"
            ]
        },
        "presentation": {
            "explanation": "Numbers in Amharic precede the noun they count. When counting objects, the noun following the number generally remains in the SINGULAR form (e.g., « ሦስት ቤት » = three house[s], not three houses):\n\n1. Numbers 1 to 10 (ቁጥሮች ከአንድ እስከ አስር):\n- 1 = አንድ (And)\n- 2 = ሁለት (Hulet)\n- 3 = ሦስት (Sost)\n- 4 = አራት (Arat)\n- 5 = አምስት (Amist)\n- 6 = ስድስት (Sidist)\n- 7 = ሰባት (Sebat)\n- 8 = ስምንት (Simint)\n- 9 = ዘጠኝ (Zet'egn)\n- 10 = አስር (Asir)\n\n2. Syntactic Rule: Number + Singular Noun:\n- « ሁለት ሰው » (Hulet sew) -> two people (literally: two person).\n- « አምስት ብር » (Amist birr) -> five birr (Ethiopian currency).",
            "examples": [
                {
                    "target": "እኔ አንድ ወንድም እና ሁለት እህቶች አሉኝ።",
                    "reading": "Ine and wondim ina hulet ihitoch alugn.",
                    "translation": "I have one brother and two sisters."
                },
                {
                    "target": "ሦስት ቡና እባክዎ!",
                    "reading": "Sost buna ibakwo!",
                    "translation": "Three coffees, please!"
                },
                {
                    "target": "ጠረጴዛው ላይ አራት መጻሕፍት አሉ።",
                    "reading": "T'erep'ezaw lay arat mets'ahaft alu.",
                    "translation": "There are four books on the table."
                },
                {
                    "target": "ይህ ሻይ አምስት ብር ነው።",
                    "reading": "Yih shay amist birr new.",
                    "translation": "This tea is five birr."
                },
                {
                    "target": "በሳምንት ውስጥ ሰባት ቀናት አሉ።",
                    "reading": "Besamint wust' sebat qenat alu.",
                    "translation": "There are seven days in a week."
                }
            ],
            "mnemonics": [
                "And (1), Hulet (2), Sost (3), Arat (4), Amist (5) — count on 5 fingers!",
                "Sidist (6), Sebat (7), Simint (8), Zet'egn (9), Asir (10)!"
            ],
            "culturalNotes": [
                "The Ethiopian currency is the ብር (Birr). In traditional coffee houses (bunna bet), you order cups of coffee simply as « አንድ ቡና », « ሁለት ቡና »."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "What is the Amharic word for the number 3 (three)?",
                    "options": [
                        "ሦስት (Sost)",
                        "ሁለት (Hulet)",
                        "አራት (Arat)",
                        "አንድ (And)"
                    ],
                    "answerIndex": 0,
                    "explanation": "« ሦስት » (Sost) is three."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "How do you say 'five birr' in Amharic?",
                    "options": [
                        "አምስት ብር (Amist birr)",
                        "ስድስት ብር",
                        "አራት ብር",
                        "አስር ብር"
                    ],
                    "answerIndex": 0,
                    "explanation": "« አምስት » is 5 + « ብር » is currency = አምስት ብር."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "What number is « ሰባት » (Sebat) in Amharic?",
                    "options": [
                        "6",
                        "7 (Seven)",
                        "8",
                        "9"
                    ],
                    "answerIndex": 1,
                    "explanation": "« ሰባት » (Sebat) means 7."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for the number 1 (one) in Fidel script (አንድ):",
                    "acceptedAnswers": [
                        "አንድ",
                        "and",
                        "And"
                    ],
                    "explanation": "አንድ (And) means 'one'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u2-l3": {
        "id": "am-u2-l3",
        "unit": "am-u2",
        "level": "A1",
        "objective": "Point to objects and people using proximal and distal demonstratives (ይህ / ይሄ, ይህቺ / ይህች, ያ, ያቺ, እነዚህ, እነዚያ).",
        "prerequisites": [
            "am-u2-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u2-l2"
            ]
        },
        "presentation": {
            "explanation": "Amharic demonstrative pronouns distinguish between distance (near vs. far), grammatical gender (masculine vs. feminine), and number (singular vs. plural):\n\n1. Proximal Demonstratives ('This / These' - ቅርብ):\n- Masculine: ይህ (Yih) or colloquial ይሄ (Yihe) -> 'this (m.)'. E.g., « ይህ ቤት » (yih bet - this house).\n- Feminine: ይህቺ (Yihchi) or ይህች (Yihch) -> 'this (f.)'. E.g., « ይህቺ ሴት » (yihchi set - this woman).\n- Plural (common gender): እነዚህ (Inezih) -> 'these'. E.g., « እነዚህ ሰዎች » (inezih sewoch - these people).\n\n2. Distal Demonstratives ('That / Those' - ሩቅ):\n- Masculine: ያ (Ya) -> 'that (m.)'. E.g., « ያ ተራራ » (ya terara - that mountain).\n- Feminine: ያቺ (Yachi) -> 'that (f.)'. E.g., « ያቺ መኪና » (yachi mekina - that car).\n- Plural (common gender): እነዚያ (Ineziya) -> 'those'. E.g., « እነዚያ ቤቶች » (ineziya betoch - those houses).",
            "examples": [
                {
                    "target": "ይህ መጽሐፍ በጣም አስደሳች ነው።",
                    "reading": "Yih mets'haf beṭam asdesach new.",
                    "translation": "This book is very interesting."
                },
                {
                    "target": "ይህቺ ልጅ የእኔ እህት ናት።",
                    "reading": "Yihchi lij ye'ine ihit nat.",
                    "translation": "This girl is my sister."
                },
                {
                    "target": "እነዚህ ተማሪዎች ከአዲስ አበባ ናቸው።",
                    "reading": "Inezih temariwoch ke'Addis Abeba nachew.",
                    "translation": "These students are from Addis Ababa."
                },
                {
                    "target": "ያ ሱቅ ዛሬ ክፍት ነው?",
                    "reading": "Ya suq zare kift new?",
                    "translation": "Is that shop open today?"
                },
                {
                    "target": "ያቺ መኪና የማን ናት?",
                    "reading": "Yachi mekina yeman nat?",
                    "translation": "Whose is that car over there?"
                }
            ],
            "mnemonics": [
                "YIH = this (m), YIHCHI = this (f), INEZiH = these (plural)!",
                "YA = that (m), YACHI = that (f), INEZIYA = those (plural)!"
            ],
            "culturalNotes": [
                "In everyday spoken Amharic, « ይሄ » (yihe) is commonly used colloquially for « ይህ » (yih). When pointing, it is polite to gesture with an open hand."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which demonstrative means 'this' for a masculine noun like « ወንድም » (brother)?",
                    "options": [
                        "ይህ (Yih / ይሄ)",
                        "ይህቺ (Yihchi)",
                        "ያቺ (Yachi)",
                        "እነዚያ (Ineziya)"
                    ],
                    "answerIndex": 0,
                    "explanation": "« ይህ » (Yih) is the masculine singular proximal demonstrative ('this')."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "How do you say 'these books' in Amharic?",
                    "options": [
                        "እነዚህ መጻሕፍት (Inezih mets'ahaft)",
                        "ያ መጽሐፍ",
                        "እነዚያ መጻሕፍት",
                        "ይህቺ መጽሐፍ"
                    ],
                    "answerIndex": 0,
                    "explanation": "« እነዚህ » means 'these' (plural near demonstrative)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "What does « ያቺ መኪና » (Yachi mekina) mean?",
                    "options": [
                        "This car (f.)",
                        "That car (f. over there)",
                        "These cars",
                        "My car"
                    ],
                    "answerIndex": 1,
                    "explanation": "« ያቺ » is the feminine distal demonstrative meaning 'that (over there)'."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'that (masculine)' in Fidel script (ያ):",
                    "acceptedAnswers": [
                        "ያ",
                        "ya",
                        "Ya"
                    ],
                    "explanation": "ያ (Ya) means 'that' (masculine singular)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u2-l4": {
        "id": "am-u2-l4",
        "unit": "am-u2",
        "level": "A1",
        "objective": "Form regular plural nouns using the suffix -ኦች (-och) or -ዎች (-woch), and recognize common irregular plurals.",
        "prerequisites": [
            "am-u2-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u2-l3"
            ]
        },
        "presentation": {
            "explanation": "In Amharic, plural nouns are formed systematically by attaching a plural suffix:\n\n1. Regular Plural Formation:\n- After consonants: add -ኦች (-och). E.g., « ቤት » (bet - house) -> « ቤቶች » (betoch - houses); « ሰው » (sew - person) -> « ሰዎች » (sewoch - people); « ወንበር » (wenber - chair) -> « ወንበሮች » (wenberoch - chairs).\n- After vowels: add -ዎች (-woch). E.g., « ውሻ » (wusha - dog) -> « ውሾች / ውሻዎች » (wushoch / wushawoch - dogs); « ዶሮ » (doro - chicken) -> « ዶሮዎች » (dorowoch - chickens); « ከተማ » (ketema - city) -> « ከተሞች / ከተማዎች » (ketemoch / ketemawoch - cities).\n\n2. Plural Definite Combination:\n- When making a plural noun definite ('the houses'), add -ኡ (-u) after the plural suffix: « ቤቶች » (houses) + « -ኡ » -> « ቤቶቹ » (betochu - the houses); « ሰዎቹ » (sewochu - the people).\n\n3. Classical Ge'ez Broken Plural in Common Use:\n- « መጽሐፍ » (book) -> « መጻሕፍት » (mets'ahaft - books).",
            "examples": [
                {
                    "target": "በአዲስ አበባ ውስጥ ብዙ አዳዲስ ቤቶች አሉ።",
                    "reading": "Be'Addis Abeba wust' bizu addis betoch alu.",
                    "translation": "There are many new houses in Addis Ababa."
                },
                {
                    "target": "ሰዎቹ በሰላም ተሰብስበው ይወያያሉ።",
                    "reading": "Sewochu beselam tesebsibew yiweyeyalu.",
                    "translation": "The people are gathered peacefully in discussion."
                },
                {
                    "target": "እነዚህ ከተሞች በጣም ያማምራሉ!",
                    "reading": "Inezih ketemoch beṭam yamamiralu!",
                    "translation": "These cities are very beautiful!"
                },
                {
                    "target": "ተማሪዎቹ አዳዲስ መጻሕፍትን ገዙ።",
                    "reading": "Temariwochu addis mets'ahaftin gezu.",
                    "translation": "The students bought new books."
                },
                {
                    "target": "ውሾቹ በግቢው በር ላይ ቆመዋል።",
                    "reading": "Wushochu begibiw ber lay qomewal.",
                    "translation": "The dogs are standing at the compound gate."
                }
            ],
            "mnemonics": [
                "-OCH for plurals (Bet -> Bet-och), -OCHU for the plurals (Bet-och-u)!"
            ],
            "culturalNotes": [
                "If a number or quantity word precedes the noun (e.g. « አምስት ሰው »), the noun itself is often kept in the singular form in natural spoken speech."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you make the noun « ቤት » (house) plural ('houses')?",
                    "options": [
                        "ቤቶች (Betoch)",
                        "ቤቱ",
                        "ቤትዋ",
                        "ቤቴ"
                    ],
                    "answerIndex": 0,
                    "explanation": "Adding -ኦች (-och) forms the regular plural: ቤቶች = houses."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What is the meaning of « ሰዎቹ » (Sewochu)?",
                    "options": [
                        "The people (plural definite)",
                        "A person",
                        "The house",
                        "Those dogs"
                    ],
                    "answerIndex": 0,
                    "explanation": "ሰው (person) + -ዎች (plural) + -ኡ (the) = ሰዎቹ (the people)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "How do you say 'The houses' (plural definite) in Amharic?",
                    "options": [
                        "ቤቶቹ (Betochu)",
                        "ቤቶች",
                        "ቤቱ",
                        "ይህ ቤት"
                    ],
                    "answerIndex": 0,
                    "explanation": "ቤቶቹ combines the plural suffix -ኦች and the definite article -ኡ."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic plural suffix attached to consonant-ending nouns in Fidel script (-ኦች):",
                    "acceptedAnswers": [
                        "ኦች",
                        "och",
                        "Och",
                        "-ኦች"
                    ],
                    "explanation": "« ኦች » (-och) is the standard plural suffix."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u2-l5": {
        "id": "am-u2-l5",
        "unit": "am-u2",
        "level": "A1",
        "objective": "Synthesize nouns, definiteness, numbers, demonstratives, and plurals in complete, connected descriptive dialogues.",
        "prerequisites": [
            "am-u2-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u2-l3",
                "am-u2-l4"
            ]
        },
        "presentation": {
            "explanation": "In this Unit 2 Capstone lesson, we bring together all the core nominal building blocks of Amharic:\n\n1. Complete Nominal Phrase Synthesis:\n- Demonstrative + Number + Adjective + Noun + Definiteness: E.g., « እነዚህ ሦስት ትላልቅ ቤቶች » (These three big houses).\n- Existence with « አለ » (ale - there is / exists m.), « አለች » (alech - there is f.), « አሉ » (alu - there are pl.), and negation « የለም » (yelem - there is not), « የሉም » (yelum - there are not).\n\n2. Practical Conversational Dialogues:\n- Identifying objects, asking price and quantity in Ethiopian markets (መርካቶ Merkato).",
            "examples": [
                {
                    "target": "A: ይህ መጽሐፍ ስንት ብር ነው? B: ያ መጽሐፍ ሃያ ብር ነው።",
                    "reading": "A: Yih mets'haf sint birr new? B: Ya mets'haf haya birr new.",
                    "translation": "A: How much is this book? B: That book is twenty birr."
                },
                {
                    "target": "እነዚህ ሁለቱ ልጆች የእኔ ተማሪዎች ናቸው።",
                    "reading": "Inezih huletu lijoch ye'ine temariwoch nachew.",
                    "translation": "These two children are my students."
                },
                {
                    "target": "በክፍሉ ውስጥ ስንት ወንበሮች አሉ?",
                    "reading": "Bekiflu wust' sint wenberoch alu?",
                    "translation": "How many chairs are there in the room?"
                },
                {
                    "target": "አራት ትላልቅ ወንበሮች እና አንድ ጠረጴዛ አሉ።",
                    "reading": "Arat tilaliq wenberoch ina and t'erep'eza alu.",
                    "translation": "There are four large chairs and one table."
                },
                {
                    "target": "ይቅርታ፣ እዚህ አቅራቢያ ጥሩ ሆቴል አለ?",
                    "reading": "Yiqirta, izzih aqrabya t'iru hotel ale?",
                    "translation": "Excuse me, is there a good hotel nearby here?"
                }
            ],
            "mnemonics": [
                "SYNTHESIS: Yih (Demonstrative) + Hulet (Number) + Betoch (Plural Noun) + Alu (Verb)!"
            ],
            "culturalNotes": [
                "Addis Ababa's መርካቶ (Merkato) is recognized as the largest open-air marketplace in Africa, spanning square kilometers with thousands of stalls."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you ask 'How much is this?' in Amharic when shopping?",
                    "options": [
                        "ይህ ስንት ብር ነው? (Yih sint birr new?)",
                        "ስምህ ማን ነው?",
                        "የት ነው?",
                        "ደህና ነህ?"
                    ],
                    "answerIndex": 0,
                    "explanation": "« ስንት » (sint) means 'how much/many'."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: 'There are four books on the table.'",
                    "options": [
                        "ጠረጴዛው ላይ አራት መጻሕፍት አሉ።",
                        "ይህ መጽሐፍ አንድ ብር ነው።",
                        "መጽሐፉ የለም።",
                        "ሁለት ሰዎች አሉ።"
                    ],
                    "answerIndex": 0,
                    "explanation": "አራት (4) + መጻሕፍት (books) + አሉ።"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "What does the question word « ስንት? » (Sint?) mean in Amharic?",
                    "options": [
                        "How much? / How many?",
                        "Where?",
                        "When?",
                        "Why?"
                    ],
                    "answerIndex": 0,
                    "explanation": "« ስንት » (Sint) asks for quantity or price."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic verb for 'there is / exists (m.)' in Fidel script (አለ):",
                    "acceptedAnswers": [
                        "አለ",
                        "ale",
                        "Ale"
                    ],
                    "explanation": "አለ (Ale) means 'there is / exists'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u3-l1": {
        "id": "am-u3-l1",
        "subject": "amharic",
        "unit": 3,
        "lessonNumber": 1,
        "title": "የግል ተውላጠ ስሞች እና መስተዋድድ (Personal Pronouns & Prepositions) (Part 1)",
        "level": "A1",
        "objective": "Comprehensive mastery of ተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions) - ደረጃ 1) ተማሪዎች ስለ ተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (3.1.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (3.1.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (3.1.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions)» አጠቃቀም በደረጃ 1 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (3.1.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (3.1.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (3.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የግል ተውላጠ ስሞች እና መስተዋድድ (Personal Pronouns & Prepositions)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 1)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (3.1.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (3.1.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (3.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 3-1)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (3.1.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (3.1.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (3.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («እኔ_3_1»):",
                    "acceptedAnswers": [
                        "እኔ_3_1"
                    ],
                    "explanation": "The target keyword was: 【እኔ_3_1】"
                }
            ]
        }
    },
    "am-u3-l2": {
        "id": "am-u3-l2",
        "subject": "amharic",
        "unit": 3,
        "lessonNumber": 2,
        "title": "የግል ተውላጠ ስሞች እና መስተዋድድ (Personal Pronouns & Prepositions) (Part 2)",
        "level": "A1",
        "objective": "Comprehensive mastery of ተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions) - ደረጃ 2) ተማሪዎች ስለ ተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (3.2.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (3.2.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (3.2.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions)» አጠቃቀም በደረጃ 2 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (3.2.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (3.2.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (3.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የግል ተውላጠ ስሞች እና መስተዋድድ (Personal Pronouns & Prepositions)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 2)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (3.2.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (3.2.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (3.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 3-2)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (3.2.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (3.2.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (3.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («እኔ_3_2»):",
                    "acceptedAnswers": [
                        "እኔ_3_2"
                    ],
                    "explanation": "The target keyword was: 【እኔ_3_2】"
                }
            ]
        }
    },
    "am-u3-l3": {
        "id": "am-u3-l3",
        "subject": "amharic",
        "unit": 3,
        "lessonNumber": 3,
        "title": "የግል ተውላጠ ስሞች እና መስተዋድድ (Personal Pronouns & Prepositions) (Part 3)",
        "level": "A1",
        "objective": "Comprehensive mastery of ተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions) - ደረጃ 3) ተማሪዎች ስለ ተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (3.3.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (3.3.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (3.3.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions)» አጠቃቀም በደረጃ 3 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (3.3.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (3.3.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (3.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የግል ተውላጠ ስሞች እና መስተዋድድ (Personal Pronouns & Prepositions)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 3)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (3.3.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (3.3.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (3.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 3-3)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (3.3.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (3.3.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (3.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («እኔ_3_3»):",
                    "acceptedAnswers": [
                        "እኔ_3_3"
                    ],
                    "explanation": "The target keyword was: 【እኔ_3_3】"
                }
            ]
        }
    },
    "am-u3-l4": {
        "id": "am-u3-l4",
        "subject": "amharic",
        "unit": 3,
        "lessonNumber": 4,
        "title": "የግል ተውላጠ ስሞች እና መስተዋድድ (Personal Pronouns & Prepositions) (Part 4)",
        "level": "A1",
        "objective": "Comprehensive mastery of ተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions) - ደረጃ 4) ተማሪዎች ስለ ተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (3.4.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (3.4.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (3.4.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions)» አጠቃቀም በደረጃ 4 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (3.4.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (3.4.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (3.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የግል ተውላጠ ስሞች እና መስተዋድድ (Personal Pronouns & Prepositions)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 4)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (3.4.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (3.4.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (3.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 3-4)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (3.4.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (3.4.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (3.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («እኔ_3_4»):",
                    "acceptedAnswers": [
                        "እኔ_3_4"
                    ],
                    "explanation": "The target keyword was: 【እኔ_3_4】"
                }
            ]
        }
    },
    "am-u3-l5": {
        "id": "am-u3-l5",
        "subject": "amharic",
        "unit": 3,
        "lessonNumber": 5,
        "title": "የግል ተውላጠ ስሞች እና መስተዋድድ (Personal Pronouns & Prepositions) (Part 5)",
        "level": "A1",
        "objective": "Comprehensive mastery of ተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions) - ደረጃ 5) ተማሪዎች ስለ ተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (3.5.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (3.5.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (3.5.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions)» አጠቃቀም በደረጃ 5 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (3.5.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (3.5.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (3.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የግል ተውላጠ ስሞች እና መስተዋድድ (Personal Pronouns & Prepositions)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 5)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (3.5.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (3.5.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (3.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 3-5)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (3.5.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (3.5.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (3.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («እኔ_3_5»):",
                    "acceptedAnswers": [
                        "እኔ_3_5"
                    ],
                    "explanation": "The target keyword was: 【እኔ_3_5】"
                }
            ]
        }
    },
    "am-u4-l1": {
        "id": "am-u4-l1",
        "subject": "amharic",
        "unit": 4,
        "lessonNumber": 1,
        "title": "ቀላል የአሁን ጊዜ ግሶች (Present Tense & Habitual Actions) (Part 1)",
        "level": "A1",
        "objective": "Comprehensive mastery of የአሁን ጊዜ አጠቃቀም (Present Tense Habits).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የአሁን ጊዜ አጠቃቀም (Present Tense Habits) - ደረጃ 1) ተማሪዎች ስለ የአሁን ጊዜ አጠቃቀም (Present Tense Habits) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየአሁን ጊዜ አጠቃቀም (Present Tense Habits) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (4.1.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (4.1.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (4.1.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የአሁን ጊዜ አጠቃቀም (Present Tense Habits)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የአሁን ጊዜ አጠቃቀም (Present Tense Habits)» አጠቃቀም በደረጃ 1 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (4.1.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (4.1.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (4.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ቀላል የአሁን ጊዜ ግሶች (Present Tense & Habitual Actions)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 1)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (4.1.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (4.1.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (4.1.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የአሁን ጊዜ አጠቃቀም (Present Tense Habits)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 4-1)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (4.1.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (4.1.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (4.1.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («እበላለሁ_4_1»):",
                    "acceptedAnswers": [
                        "እበላለሁ_4_1"
                    ],
                    "explanation": "The target keyword was: 【እበላለሁ_4_1】"
                }
            ]
        }
    },
    "am-u4-l2": {
        "id": "am-u4-l2",
        "subject": "amharic",
        "unit": 4,
        "lessonNumber": 2,
        "title": "ቀላል የአሁን ጊዜ ግሶች (Present Tense & Habitual Actions) (Part 2)",
        "level": "A1",
        "objective": "Comprehensive mastery of የአሁን ጊዜ አጠቃቀም (Present Tense Habits).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የአሁን ጊዜ አጠቃቀም (Present Tense Habits) - ደረጃ 2) ተማሪዎች ስለ የአሁን ጊዜ አጠቃቀም (Present Tense Habits) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየአሁን ጊዜ አጠቃቀም (Present Tense Habits) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (4.2.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (4.2.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (4.2.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የአሁን ጊዜ አጠቃቀም (Present Tense Habits)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የአሁን ጊዜ አጠቃቀም (Present Tense Habits)» አጠቃቀም በደረጃ 2 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (4.2.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (4.2.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (4.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ቀላል የአሁን ጊዜ ግሶች (Present Tense & Habitual Actions)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 2)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (4.2.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (4.2.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (4.2.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የአሁን ጊዜ አጠቃቀም (Present Tense Habits)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 4-2)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (4.2.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (4.2.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (4.2.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («እበላለሁ_4_2»):",
                    "acceptedAnswers": [
                        "እበላለሁ_4_2"
                    ],
                    "explanation": "The target keyword was: 【እበላለሁ_4_2】"
                }
            ]
        }
    },
    "am-u4-l3": {
        "id": "am-u4-l3",
        "subject": "amharic",
        "unit": 4,
        "lessonNumber": 3,
        "title": "ቀላል የአሁን ጊዜ ግሶች (Present Tense & Habitual Actions) (Part 3)",
        "level": "A1",
        "objective": "Comprehensive mastery of የአሁን ጊዜ አጠቃቀም (Present Tense Habits).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የአሁን ጊዜ አጠቃቀም (Present Tense Habits) - ደረጃ 3) ተማሪዎች ስለ የአሁን ጊዜ አጠቃቀም (Present Tense Habits) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየአሁን ጊዜ አጠቃቀም (Present Tense Habits) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (4.3.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (4.3.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (4.3.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የአሁን ጊዜ አጠቃቀም (Present Tense Habits)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የአሁን ጊዜ አጠቃቀም (Present Tense Habits)» አጠቃቀም በደረጃ 3 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (4.3.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (4.3.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (4.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ቀላል የአሁን ጊዜ ግሶች (Present Tense & Habitual Actions)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 3)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (4.3.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (4.3.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (4.3.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የአሁን ጊዜ አጠቃቀም (Present Tense Habits)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 4-3)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (4.3.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (4.3.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (4.3.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («እበላለሁ_4_3»):",
                    "acceptedAnswers": [
                        "እበላለሁ_4_3"
                    ],
                    "explanation": "The target keyword was: 【እበላለሁ_4_3】"
                }
            ]
        }
    },
    "am-u4-l4": {
        "id": "am-u4-l4",
        "subject": "amharic",
        "unit": 4,
        "lessonNumber": 4,
        "title": "ቀላል የአሁን ጊዜ ግሶች (Present Tense & Habitual Actions) (Part 4)",
        "level": "A1",
        "objective": "Comprehensive mastery of የአሁን ጊዜ አጠቃቀም (Present Tense Habits).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የአሁን ጊዜ አጠቃቀም (Present Tense Habits) - ደረጃ 4) ተማሪዎች ስለ የአሁን ጊዜ አጠቃቀም (Present Tense Habits) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየአሁን ጊዜ አጠቃቀም (Present Tense Habits) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (4.4.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (4.4.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (4.4.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የአሁን ጊዜ አጠቃቀም (Present Tense Habits)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የአሁን ጊዜ አጠቃቀም (Present Tense Habits)» አጠቃቀም በደረጃ 4 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (4.4.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (4.4.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (4.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ቀላል የአሁን ጊዜ ግሶች (Present Tense & Habitual Actions)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 4)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (4.4.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (4.4.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (4.4.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የአሁን ጊዜ አጠቃቀም (Present Tense Habits)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 4-4)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (4.4.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (4.4.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (4.4.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («እበላለሁ_4_4»):",
                    "acceptedAnswers": [
                        "እበላለሁ_4_4"
                    ],
                    "explanation": "The target keyword was: 【እበላለሁ_4_4】"
                }
            ]
        }
    },
    "am-u4-l5": {
        "id": "am-u4-l5",
        "subject": "amharic",
        "unit": 4,
        "lessonNumber": 5,
        "title": "ቀላል የአሁን ጊዜ ግሶች (Present Tense & Habitual Actions) (Part 5)",
        "level": "A1",
        "objective": "Comprehensive mastery of የአሁን ጊዜ አጠቃቀም (Present Tense Habits).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የአሁን ጊዜ አጠቃቀም (Present Tense Habits) - ደረጃ 5) ተማሪዎች ስለ የአሁን ጊዜ አጠቃቀም (Present Tense Habits) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየአሁን ጊዜ አጠቃቀም (Present Tense Habits) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (4.5.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (4.5.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (4.5.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የአሁን ጊዜ አጠቃቀም (Present Tense Habits)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የአሁን ጊዜ አጠቃቀም (Present Tense Habits)» አጠቃቀም በደረጃ 5 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (4.5.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (4.5.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (4.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ቀላል የአሁን ጊዜ ግሶች (Present Tense & Habitual Actions)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 5)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (4.5.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (4.5.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (4.5.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የአሁን ጊዜ አጠቃቀም (Present Tense Habits)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 4-5)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (4.5.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (4.5.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (4.5.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («እበላለሁ_4_5»):",
                    "acceptedAnswers": [
                        "እበላለሁ_4_5"
                    ],
                    "explanation": "The target keyword was: 【እበላለሁ_4_5】"
                }
            ]
        }
    },
    "am-u5-l1": {
        "id": "am-u5-l1",
        "subject": "amharic",
        "unit": 5,
        "lessonNumber": 1,
        "title": "የቀድሞ ጊዜ ግስ እና ታሪክ (Simple Past Tense Narratives) (Part 1)",
        "level": "A1",
        "objective": "Comprehensive mastery of ያለፈ ጊዜ ድርጊቶች (Past Tense Narration).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ያለፈ ጊዜ ድርጊቶች (Past Tense Narration) - ደረጃ 1) ተማሪዎች ስለ ያለፈ ጊዜ ድርጊቶች (Past Tense Narration) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የያለፈ ጊዜ ድርጊቶች (Past Tense Narration) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (5.1.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (5.1.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (5.1.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ያለፈ ጊዜ ድርጊቶች (Past Tense Narration)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ያለፈ ጊዜ ድርጊቶች (Past Tense Narration)» አጠቃቀም በደረጃ 1 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (5.1.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (5.1.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (5.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የቀድሞ ጊዜ ግስ እና ታሪክ (Simple Past Tense Narratives)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 1)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (5.1.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (5.1.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (5.1.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ያለፈ ጊዜ ድርጊቶች (Past Tense Narration)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 5-1)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (5.1.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (5.1.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (5.1.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ሄደ_5_1»):",
                    "acceptedAnswers": [
                        "ሄደ_5_1"
                    ],
                    "explanation": "The target keyword was: 【ሄደ_5_1】"
                }
            ]
        }
    },
    "am-u5-l2": {
        "id": "am-u5-l2",
        "subject": "amharic",
        "unit": 5,
        "lessonNumber": 2,
        "title": "የቀድሞ ጊዜ ግስ እና ታሪክ (Simple Past Tense Narratives) (Part 2)",
        "level": "A1",
        "objective": "Comprehensive mastery of ያለፈ ጊዜ ድርጊቶች (Past Tense Narration).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ያለፈ ጊዜ ድርጊቶች (Past Tense Narration) - ደረጃ 2) ተማሪዎች ስለ ያለፈ ጊዜ ድርጊቶች (Past Tense Narration) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የያለፈ ጊዜ ድርጊቶች (Past Tense Narration) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (5.2.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (5.2.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (5.2.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ያለፈ ጊዜ ድርጊቶች (Past Tense Narration)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ያለፈ ጊዜ ድርጊቶች (Past Tense Narration)» አጠቃቀም በደረጃ 2 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (5.2.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (5.2.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (5.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የቀድሞ ጊዜ ግስ እና ታሪክ (Simple Past Tense Narratives)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 2)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (5.2.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (5.2.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (5.2.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ያለፈ ጊዜ ድርጊቶች (Past Tense Narration)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 5-2)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (5.2.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (5.2.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (5.2.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ሄደ_5_2»):",
                    "acceptedAnswers": [
                        "ሄደ_5_2"
                    ],
                    "explanation": "The target keyword was: 【ሄደ_5_2】"
                }
            ]
        }
    },
    "am-u5-l3": {
        "id": "am-u5-l3",
        "subject": "amharic",
        "unit": 5,
        "lessonNumber": 3,
        "title": "የቀድሞ ጊዜ ግስ እና ታሪክ (Simple Past Tense Narratives) (Part 3)",
        "level": "A1",
        "objective": "Comprehensive mastery of ያለፈ ጊዜ ድርጊቶች (Past Tense Narration).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ያለፈ ጊዜ ድርጊቶች (Past Tense Narration) - ደረጃ 3) ተማሪዎች ስለ ያለፈ ጊዜ ድርጊቶች (Past Tense Narration) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የያለፈ ጊዜ ድርጊቶች (Past Tense Narration) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (5.3.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (5.3.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (5.3.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ያለፈ ጊዜ ድርጊቶች (Past Tense Narration)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ያለፈ ጊዜ ድርጊቶች (Past Tense Narration)» አጠቃቀም በደረጃ 3 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (5.3.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (5.3.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (5.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የቀድሞ ጊዜ ግስ እና ታሪክ (Simple Past Tense Narratives)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 3)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (5.3.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (5.3.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (5.3.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ያለፈ ጊዜ ድርጊቶች (Past Tense Narration)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 5-3)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (5.3.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (5.3.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (5.3.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ሄደ_5_3»):",
                    "acceptedAnswers": [
                        "ሄደ_5_3"
                    ],
                    "explanation": "The target keyword was: 【ሄደ_5_3】"
                }
            ]
        }
    },
    "am-u5-l4": {
        "id": "am-u5-l4",
        "subject": "amharic",
        "unit": 5,
        "lessonNumber": 4,
        "title": "የቀድሞ ጊዜ ግስ እና ታሪክ (Simple Past Tense Narratives) (Part 4)",
        "level": "A1",
        "objective": "Comprehensive mastery of ያለፈ ጊዜ ድርጊቶች (Past Tense Narration).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ያለፈ ጊዜ ድርጊቶች (Past Tense Narration) - ደረጃ 4) ተማሪዎች ስለ ያለፈ ጊዜ ድርጊቶች (Past Tense Narration) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የያለፈ ጊዜ ድርጊቶች (Past Tense Narration) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (5.4.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (5.4.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (5.4.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ያለፈ ጊዜ ድርጊቶች (Past Tense Narration)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ያለፈ ጊዜ ድርጊቶች (Past Tense Narration)» አጠቃቀም በደረጃ 4 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (5.4.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (5.4.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (5.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የቀድሞ ጊዜ ግስ እና ታሪክ (Simple Past Tense Narratives)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 4)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (5.4.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (5.4.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (5.4.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ያለፈ ጊዜ ድርጊቶች (Past Tense Narration)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 5-4)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (5.4.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (5.4.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (5.4.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ሄደ_5_4»):",
                    "acceptedAnswers": [
                        "ሄደ_5_4"
                    ],
                    "explanation": "The target keyword was: 【ሄደ_5_4】"
                }
            ]
        }
    },
    "am-u5-l5": {
        "id": "am-u5-l5",
        "subject": "amharic",
        "unit": 5,
        "lessonNumber": 5,
        "title": "የቀድሞ ጊዜ ግስ እና ታሪክ (Simple Past Tense Narratives) (Part 5)",
        "level": "A1",
        "objective": "Comprehensive mastery of ያለፈ ጊዜ ድርጊቶች (Past Tense Narration).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ያለፈ ጊዜ ድርጊቶች (Past Tense Narration) - ደረጃ 5) ተማሪዎች ስለ ያለፈ ጊዜ ድርጊቶች (Past Tense Narration) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የያለፈ ጊዜ ድርጊቶች (Past Tense Narration) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (5.5.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (5.5.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (5.5.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ያለፈ ጊዜ ድርጊቶች (Past Tense Narration)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ያለፈ ጊዜ ድርጊቶች (Past Tense Narration)» አጠቃቀም በደረጃ 5 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (5.5.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (5.5.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (5.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የቀድሞ ጊዜ ግስ እና ታሪክ (Simple Past Tense Narratives)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 5)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (5.5.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (5.5.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (5.5.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ያለፈ ጊዜ ድርጊቶች (Past Tense Narration)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 5-5)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (5.5.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (5.5.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (5.5.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ሄደ_5_5»):",
                    "acceptedAnswers": [
                        "ሄደ_5_5"
                    ],
                    "explanation": "The target keyword was: 【ሄደ_5_5】"
                }
            ]
        }
    },
    "am-u6-l1": {
        "id": "am-u6-l1",
        "subject": "amharic",
        "unit": 6,
        "lessonNumber": 1,
        "title": "የወደፊት ጊዜ እና እቅድ (Future Tense & Intentions) (Part 1)",
        "level": "A2",
        "objective": "Comprehensive mastery of የወደፊት እቅዶች (Future Intentions).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የወደፊት እቅዶች (Future Intentions) - ደረጃ 1) ተማሪዎች ስለ የወደፊት እቅዶች (Future Intentions) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየወደፊት እቅዶች (Future Intentions) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (6.1.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (6.1.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (6.1.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የወደፊት እቅዶች (Future Intentions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የወደፊት እቅዶች (Future Intentions)» አጠቃቀም በደረጃ 1 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (6.1.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (6.1.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (6.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የወደፊት ጊዜ እና እቅድ (Future Tense & Intentions)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 1)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (6.1.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (6.1.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (6.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የወደፊት እቅዶች (Future Intentions)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 6-1)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (6.1.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (6.1.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (6.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («እጓዛለሁ_6_1»):",
                    "acceptedAnswers": [
                        "እጓዛለሁ_6_1"
                    ],
                    "explanation": "The target keyword was: 【እጓዛለሁ_6_1】"
                }
            ]
        }
    },
    "am-u6-l2": {
        "id": "am-u6-l2",
        "subject": "amharic",
        "unit": 6,
        "lessonNumber": 2,
        "title": "የወደፊት ጊዜ እና እቅድ (Future Tense & Intentions) (Part 2)",
        "level": "A2",
        "objective": "Comprehensive mastery of የወደፊት እቅዶች (Future Intentions).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የወደፊት እቅዶች (Future Intentions) - ደረጃ 2) ተማሪዎች ስለ የወደፊት እቅዶች (Future Intentions) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየወደፊት እቅዶች (Future Intentions) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (6.2.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (6.2.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (6.2.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የወደፊት እቅዶች (Future Intentions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የወደፊት እቅዶች (Future Intentions)» አጠቃቀም በደረጃ 2 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (6.2.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (6.2.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (6.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የወደፊት ጊዜ እና እቅድ (Future Tense & Intentions)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 2)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (6.2.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (6.2.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (6.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የወደፊት እቅዶች (Future Intentions)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 6-2)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (6.2.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (6.2.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (6.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («እጓዛለሁ_6_2»):",
                    "acceptedAnswers": [
                        "እጓዛለሁ_6_2"
                    ],
                    "explanation": "The target keyword was: 【እጓዛለሁ_6_2】"
                }
            ]
        }
    },
    "am-u6-l3": {
        "id": "am-u6-l3",
        "subject": "amharic",
        "unit": 6,
        "lessonNumber": 3,
        "title": "የወደፊት ጊዜ እና እቅድ (Future Tense & Intentions) (Part 3)",
        "level": "A2",
        "objective": "Comprehensive mastery of የወደፊት እቅዶች (Future Intentions).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የወደፊት እቅዶች (Future Intentions) - ደረጃ 3) ተማሪዎች ስለ የወደፊት እቅዶች (Future Intentions) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየወደፊት እቅዶች (Future Intentions) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (6.3.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (6.3.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (6.3.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የወደፊት እቅዶች (Future Intentions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የወደፊት እቅዶች (Future Intentions)» አጠቃቀም በደረጃ 3 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (6.3.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (6.3.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (6.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የወደፊት ጊዜ እና እቅድ (Future Tense & Intentions)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 3)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (6.3.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (6.3.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (6.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የወደፊት እቅዶች (Future Intentions)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 6-3)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (6.3.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (6.3.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (6.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («እጓዛለሁ_6_3»):",
                    "acceptedAnswers": [
                        "እጓዛለሁ_6_3"
                    ],
                    "explanation": "The target keyword was: 【እጓዛለሁ_6_3】"
                }
            ]
        }
    },
    "am-u6-l4": {
        "id": "am-u6-l4",
        "subject": "amharic",
        "unit": 6,
        "lessonNumber": 4,
        "title": "የወደፊት ጊዜ እና እቅድ (Future Tense & Intentions) (Part 4)",
        "level": "A2",
        "objective": "Comprehensive mastery of የወደፊት እቅዶች (Future Intentions).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የወደፊት እቅዶች (Future Intentions) - ደረጃ 4) ተማሪዎች ስለ የወደፊት እቅዶች (Future Intentions) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየወደፊት እቅዶች (Future Intentions) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (6.4.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (6.4.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (6.4.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የወደፊት እቅዶች (Future Intentions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የወደፊት እቅዶች (Future Intentions)» አጠቃቀም በደረጃ 4 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (6.4.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (6.4.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (6.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የወደፊት ጊዜ እና እቅድ (Future Tense & Intentions)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 4)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (6.4.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (6.4.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (6.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የወደፊት እቅዶች (Future Intentions)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 6-4)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (6.4.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (6.4.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (6.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («እጓዛለሁ_6_4»):",
                    "acceptedAnswers": [
                        "እጓዛለሁ_6_4"
                    ],
                    "explanation": "The target keyword was: 【እጓዛለሁ_6_4】"
                }
            ]
        }
    },
    "am-u6-l5": {
        "id": "am-u6-l5",
        "subject": "amharic",
        "unit": 6,
        "lessonNumber": 5,
        "title": "የወደፊት ጊዜ እና እቅድ (Future Tense & Intentions) (Part 5)",
        "level": "A2",
        "objective": "Comprehensive mastery of የወደፊት እቅዶች (Future Intentions).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የወደፊት እቅዶች (Future Intentions) - ደረጃ 5) ተማሪዎች ስለ የወደፊት እቅዶች (Future Intentions) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየወደፊት እቅዶች (Future Intentions) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (6.5.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (6.5.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (6.5.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የወደፊት እቅዶች (Future Intentions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የወደፊት እቅዶች (Future Intentions)» አጠቃቀም በደረጃ 5 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (6.5.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (6.5.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (6.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የወደፊት ጊዜ እና እቅድ (Future Tense & Intentions)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 5)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (6.5.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (6.5.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (6.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የወደፊት እቅዶች (Future Intentions)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 6-5)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (6.5.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (6.5.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (6.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («እጓዛለሁ_6_5»):",
                    "acceptedAnswers": [
                        "እጓዛለሁ_6_5"
                    ],
                    "explanation": "The target keyword was: 【እጓዛለሁ_6_5】"
                }
            ]
        }
    },
    "am-u7-l1": {
        "id": "am-u7-l1",
        "subject": "amharic",
        "unit": 7,
        "lessonNumber": 1,
        "title": "የግስ አሉታ እና ጥያቄዎች (Negation & Interrogatives) (Part 1)",
        "level": "A2",
        "objective": "Comprehensive mastery of አሉታዊ ዓረፍተ ነገሮች (Negation Forms).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (አሉታዊ ዓረፍተ ነገሮች (Negation Forms) - ደረጃ 1) ተማሪዎች ስለ አሉታዊ ዓረፍተ ነገሮች (Negation Forms) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የአሉታዊ ዓረፍተ ነገሮች (Negation Forms) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (7.1.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (7.1.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (7.1.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for አሉታዊ ዓረፍተ ነገሮች (Negation Forms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «አሉታዊ ዓረፍተ ነገሮች (Negation Forms)» አጠቃቀም በደረጃ 1 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (7.1.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (7.1.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (7.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የግስ አሉታ እና ጥያቄዎች (Negation & Interrogatives)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 1)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (7.1.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (7.1.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (7.1.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«አሉታዊ ዓረፍተ ነገሮች (Negation Forms)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 7-1)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (7.1.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (7.1.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (7.1.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («አልሄደም_7_1»):",
                    "acceptedAnswers": [
                        "አልሄደም_7_1"
                    ],
                    "explanation": "The target keyword was: 【አልሄደም_7_1】"
                }
            ]
        }
    },
    "am-u7-l2": {
        "id": "am-u7-l2",
        "subject": "amharic",
        "unit": 7,
        "lessonNumber": 2,
        "title": "የግስ አሉታ እና ጥያቄዎች (Negation & Interrogatives) (Part 2)",
        "level": "A2",
        "objective": "Comprehensive mastery of አሉታዊ ዓረፍተ ነገሮች (Negation Forms).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (አሉታዊ ዓረፍተ ነገሮች (Negation Forms) - ደረጃ 2) ተማሪዎች ስለ አሉታዊ ዓረፍተ ነገሮች (Negation Forms) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የአሉታዊ ዓረፍተ ነገሮች (Negation Forms) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (7.2.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (7.2.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (7.2.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for አሉታዊ ዓረፍተ ነገሮች (Negation Forms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «አሉታዊ ዓረፍተ ነገሮች (Negation Forms)» አጠቃቀም በደረጃ 2 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (7.2.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (7.2.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (7.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የግስ አሉታ እና ጥያቄዎች (Negation & Interrogatives)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 2)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (7.2.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (7.2.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (7.2.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«አሉታዊ ዓረፍተ ነገሮች (Negation Forms)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 7-2)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (7.2.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (7.2.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (7.2.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («አልሄደም_7_2»):",
                    "acceptedAnswers": [
                        "አልሄደም_7_2"
                    ],
                    "explanation": "The target keyword was: 【አልሄደም_7_2】"
                }
            ]
        }
    },
    "am-u7-l3": {
        "id": "am-u7-l3",
        "subject": "amharic",
        "unit": 7,
        "lessonNumber": 3,
        "title": "የግስ አሉታ እና ጥያቄዎች (Negation & Interrogatives) (Part 3)",
        "level": "A2",
        "objective": "Comprehensive mastery of አሉታዊ ዓረፍተ ነገሮች (Negation Forms).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (አሉታዊ ዓረፍተ ነገሮች (Negation Forms) - ደረጃ 3) ተማሪዎች ስለ አሉታዊ ዓረፍተ ነገሮች (Negation Forms) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የአሉታዊ ዓረፍተ ነገሮች (Negation Forms) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (7.3.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (7.3.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (7.3.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for አሉታዊ ዓረፍተ ነገሮች (Negation Forms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «አሉታዊ ዓረፍተ ነገሮች (Negation Forms)» አጠቃቀም በደረጃ 3 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (7.3.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (7.3.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (7.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የግስ አሉታ እና ጥያቄዎች (Negation & Interrogatives)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 3)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (7.3.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (7.3.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (7.3.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«አሉታዊ ዓረፍተ ነገሮች (Negation Forms)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 7-3)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (7.3.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (7.3.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (7.3.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («አልሄደም_7_3»):",
                    "acceptedAnswers": [
                        "አልሄደም_7_3"
                    ],
                    "explanation": "The target keyword was: 【አልሄደም_7_3】"
                }
            ]
        }
    },
    "am-u7-l4": {
        "id": "am-u7-l4",
        "subject": "amharic",
        "unit": 7,
        "lessonNumber": 4,
        "title": "የግስ አሉታ እና ጥያቄዎች (Negation & Interrogatives) (Part 4)",
        "level": "A2",
        "objective": "Comprehensive mastery of አሉታዊ ዓረፍተ ነገሮች (Negation Forms).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (አሉታዊ ዓረፍተ ነገሮች (Negation Forms) - ደረጃ 4) ተማሪዎች ስለ አሉታዊ ዓረፍተ ነገሮች (Negation Forms) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የአሉታዊ ዓረፍተ ነገሮች (Negation Forms) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (7.4.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (7.4.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (7.4.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for አሉታዊ ዓረፍተ ነገሮች (Negation Forms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «አሉታዊ ዓረፍተ ነገሮች (Negation Forms)» አጠቃቀም በደረጃ 4 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (7.4.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (7.4.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (7.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የግስ አሉታ እና ጥያቄዎች (Negation & Interrogatives)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 4)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (7.4.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (7.4.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (7.4.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«አሉታዊ ዓረፍተ ነገሮች (Negation Forms)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 7-4)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (7.4.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (7.4.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (7.4.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («አልሄደም_7_4»):",
                    "acceptedAnswers": [
                        "አልሄደም_7_4"
                    ],
                    "explanation": "The target keyword was: 【አልሄደም_7_4】"
                }
            ]
        }
    },
    "am-u7-l5": {
        "id": "am-u7-l5",
        "subject": "amharic",
        "unit": 7,
        "lessonNumber": 5,
        "title": "የግስ አሉታ እና ጥያቄዎች (Negation & Interrogatives) (Part 5)",
        "level": "A2",
        "objective": "Comprehensive mastery of አሉታዊ ዓረፍተ ነገሮች (Negation Forms).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (አሉታዊ ዓረፍተ ነገሮች (Negation Forms) - ደረጃ 5) ተማሪዎች ስለ አሉታዊ ዓረፍተ ነገሮች (Negation Forms) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የአሉታዊ ዓረፍተ ነገሮች (Negation Forms) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (7.5.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (7.5.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (7.5.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for አሉታዊ ዓረፍተ ነገሮች (Negation Forms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «አሉታዊ ዓረፍተ ነገሮች (Negation Forms)» አጠቃቀም በደረጃ 5 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (7.5.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (7.5.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (7.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የግስ አሉታ እና ጥያቄዎች (Negation & Interrogatives)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 5)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (7.5.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (7.5.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (7.5.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«አሉታዊ ዓረፍተ ነገሮች (Negation Forms)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 7-5)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (7.5.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (7.5.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (7.5.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («አልሄደም_7_5»):",
                    "acceptedAnswers": [
                        "አልሄደም_7_5"
                    ],
                    "explanation": "The target keyword was: 【አልሄደም_7_5】"
                }
            ]
        }
    },
    "am-u8-l1": {
        "id": "am-u8-l1",
        "subject": "amharic",
        "unit": 8,
        "lessonNumber": 1,
        "title": "ቤተሰብ እና ማህበራዊ ግንኙነት (Family & Kinship Structures) (Part 1)",
        "level": "A2",
        "objective": "Comprehensive mastery of የቤተሰብ ዝምድና (Family Kinship Terms).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የቤተሰብ ዝምድና (Family Kinship Terms) - ደረጃ 1) ተማሪዎች ስለ የቤተሰብ ዝምድና (Family Kinship Terms) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየቤተሰብ ዝምድና (Family Kinship Terms) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (8.1.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (8.1.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (8.1.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የቤተሰብ ዝምድና (Family Kinship Terms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የቤተሰብ ዝምድና (Family Kinship Terms)» አጠቃቀም በደረጃ 1 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (8.1.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (8.1.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (8.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ቤተሰብ እና ማህበራዊ ግንኙነት (Family & Kinship Structures)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 1)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (8.1.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (8.1.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (8.1.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የቤተሰብ ዝምድና (Family Kinship Terms)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 8-1)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (8.1.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (8.1.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (8.1.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («አባት_8_1»):",
                    "acceptedAnswers": [
                        "አባት_8_1"
                    ],
                    "explanation": "The target keyword was: 【አባት_8_1】"
                }
            ]
        }
    },
    "am-u8-l2": {
        "id": "am-u8-l2",
        "subject": "amharic",
        "unit": 8,
        "lessonNumber": 2,
        "title": "ቤተሰብ እና ማህበራዊ ግንኙነት (Family & Kinship Structures) (Part 2)",
        "level": "A2",
        "objective": "Comprehensive mastery of የቤተሰብ ዝምድና (Family Kinship Terms).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የቤተሰብ ዝምድና (Family Kinship Terms) - ደረጃ 2) ተማሪዎች ስለ የቤተሰብ ዝምድና (Family Kinship Terms) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየቤተሰብ ዝምድና (Family Kinship Terms) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (8.2.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (8.2.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (8.2.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የቤተሰብ ዝምድና (Family Kinship Terms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የቤተሰብ ዝምድና (Family Kinship Terms)» አጠቃቀም በደረጃ 2 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (8.2.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (8.2.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (8.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ቤተሰብ እና ማህበራዊ ግንኙነት (Family & Kinship Structures)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 2)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (8.2.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (8.2.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (8.2.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የቤተሰብ ዝምድና (Family Kinship Terms)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 8-2)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (8.2.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (8.2.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (8.2.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («አባት_8_2»):",
                    "acceptedAnswers": [
                        "አባት_8_2"
                    ],
                    "explanation": "The target keyword was: 【አባት_8_2】"
                }
            ]
        }
    },
    "am-u8-l3": {
        "id": "am-u8-l3",
        "subject": "amharic",
        "unit": 8,
        "lessonNumber": 3,
        "title": "ቤተሰብ እና ማህበራዊ ግንኙነት (Family & Kinship Structures) (Part 3)",
        "level": "A2",
        "objective": "Comprehensive mastery of የቤተሰብ ዝምድና (Family Kinship Terms).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የቤተሰብ ዝምድና (Family Kinship Terms) - ደረጃ 3) ተማሪዎች ስለ የቤተሰብ ዝምድና (Family Kinship Terms) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየቤተሰብ ዝምድና (Family Kinship Terms) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (8.3.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (8.3.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (8.3.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የቤተሰብ ዝምድና (Family Kinship Terms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የቤተሰብ ዝምድና (Family Kinship Terms)» አጠቃቀም በደረጃ 3 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (8.3.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (8.3.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (8.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ቤተሰብ እና ማህበራዊ ግንኙነት (Family & Kinship Structures)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 3)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (8.3.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (8.3.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (8.3.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የቤተሰብ ዝምድና (Family Kinship Terms)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 8-3)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (8.3.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (8.3.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (8.3.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («አባት_8_3»):",
                    "acceptedAnswers": [
                        "አባት_8_3"
                    ],
                    "explanation": "The target keyword was: 【አባት_8_3】"
                }
            ]
        }
    },
    "am-u8-l4": {
        "id": "am-u8-l4",
        "subject": "amharic",
        "unit": 8,
        "lessonNumber": 4,
        "title": "ቤተሰብ እና ማህበራዊ ግንኙነት (Family & Kinship Structures) (Part 4)",
        "level": "A2",
        "objective": "Comprehensive mastery of የቤተሰብ ዝምድና (Family Kinship Terms).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የቤተሰብ ዝምድና (Family Kinship Terms) - ደረጃ 4) ተማሪዎች ስለ የቤተሰብ ዝምድና (Family Kinship Terms) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየቤተሰብ ዝምድና (Family Kinship Terms) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (8.4.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (8.4.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (8.4.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የቤተሰብ ዝምድና (Family Kinship Terms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የቤተሰብ ዝምድና (Family Kinship Terms)» አጠቃቀም በደረጃ 4 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (8.4.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (8.4.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (8.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ቤተሰብ እና ማህበራዊ ግንኙነት (Family & Kinship Structures)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 4)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (8.4.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (8.4.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (8.4.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የቤተሰብ ዝምድና (Family Kinship Terms)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 8-4)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (8.4.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (8.4.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (8.4.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («አባት_8_4»):",
                    "acceptedAnswers": [
                        "አባት_8_4"
                    ],
                    "explanation": "The target keyword was: 【አባት_8_4】"
                }
            ]
        }
    },
    "am-u8-l5": {
        "id": "am-u8-l5",
        "subject": "amharic",
        "unit": 8,
        "lessonNumber": 5,
        "title": "ቤተሰብ እና ማህበራዊ ግንኙነት (Family & Kinship Structures) (Part 5)",
        "level": "A2",
        "objective": "Comprehensive mastery of የቤተሰብ ዝምድና (Family Kinship Terms).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የቤተሰብ ዝምድና (Family Kinship Terms) - ደረጃ 5) ተማሪዎች ስለ የቤተሰብ ዝምድና (Family Kinship Terms) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየቤተሰብ ዝምድና (Family Kinship Terms) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (8.5.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (8.5.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (8.5.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የቤተሰብ ዝምድና (Family Kinship Terms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የቤተሰብ ዝምድና (Family Kinship Terms)» አጠቃቀም በደረጃ 5 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (8.5.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (8.5.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (8.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ቤተሰብ እና ማህበራዊ ግንኙነት (Family & Kinship Structures)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 5)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (8.5.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (8.5.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (8.5.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የቤተሰብ ዝምድና (Family Kinship Terms)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 8-5)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (8.5.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (8.5.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (8.5.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («አባት_8_5»):",
                    "acceptedAnswers": [
                        "አባት_8_5"
                    ],
                    "explanation": "The target keyword was: 【አባት_8_5】"
                }
            ]
        }
    },
    "am-u9-l1": {
        "id": "am-u9-l1",
        "subject": "amharic",
        "unit": 9,
        "lessonNumber": 1,
        "title": "ምግብ፣ ገበያ እና ግብይት (Cuisine, Markets & Commerce) (Part 1)",
        "level": "A2",
        "objective": "Comprehensive mastery of የገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine) - ደረጃ 1) ተማሪዎች ስለ የገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (9.1.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (9.1.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (9.1.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine)» አጠቃቀም በደረጃ 1 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (9.1.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (9.1.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (9.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ምግብ፣ ገበያ እና ግብይት (Cuisine, Markets & Commerce)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 1)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (9.1.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (9.1.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (9.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 9-1)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (9.1.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (9.1.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (9.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («እንጀራ_9_1»):",
                    "acceptedAnswers": [
                        "እንጀራ_9_1"
                    ],
                    "explanation": "The target keyword was: 【እንጀራ_9_1】"
                }
            ]
        }
    },
    "am-u9-l2": {
        "id": "am-u9-l2",
        "subject": "amharic",
        "unit": 9,
        "lessonNumber": 2,
        "title": "ምግብ፣ ገበያ እና ግብይት (Cuisine, Markets & Commerce) (Part 2)",
        "level": "A2",
        "objective": "Comprehensive mastery of የገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine) - ደረጃ 2) ተማሪዎች ስለ የገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (9.2.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (9.2.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (9.2.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine)» አጠቃቀም በደረጃ 2 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (9.2.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (9.2.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (9.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ምግብ፣ ገበያ እና ግብይት (Cuisine, Markets & Commerce)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 2)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (9.2.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (9.2.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (9.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 9-2)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (9.2.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (9.2.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (9.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («እንጀራ_9_2»):",
                    "acceptedAnswers": [
                        "እንጀራ_9_2"
                    ],
                    "explanation": "The target keyword was: 【እንጀራ_9_2】"
                }
            ]
        }
    },
    "am-u9-l3": {
        "id": "am-u9-l3",
        "subject": "amharic",
        "unit": 9,
        "lessonNumber": 3,
        "title": "ምግብ፣ ገበያ እና ግብይት (Cuisine, Markets & Commerce) (Part 3)",
        "level": "A2",
        "objective": "Comprehensive mastery of የገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine) - ደረጃ 3) ተማሪዎች ስለ የገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (9.3.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (9.3.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (9.3.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine)» አጠቃቀም በደረጃ 3 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (9.3.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (9.3.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (9.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ምግብ፣ ገበያ እና ግብይት (Cuisine, Markets & Commerce)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 3)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (9.3.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (9.3.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (9.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 9-3)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (9.3.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (9.3.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (9.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («እንጀራ_9_3»):",
                    "acceptedAnswers": [
                        "እንጀራ_9_3"
                    ],
                    "explanation": "The target keyword was: 【እንጀራ_9_3】"
                }
            ]
        }
    },
    "am-u9-l4": {
        "id": "am-u9-l4",
        "subject": "amharic",
        "unit": 9,
        "lessonNumber": 4,
        "title": "ምግብ፣ ገበያ እና ግብይት (Cuisine, Markets & Commerce) (Part 4)",
        "level": "A2",
        "objective": "Comprehensive mastery of የገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine) - ደረጃ 4) ተማሪዎች ስለ የገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (9.4.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (9.4.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (9.4.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine)» አጠቃቀም በደረጃ 4 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (9.4.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (9.4.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (9.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ምግብ፣ ገበያ እና ግብይት (Cuisine, Markets & Commerce)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 4)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (9.4.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (9.4.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (9.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 9-4)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (9.4.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (9.4.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (9.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («እንጀራ_9_4»):",
                    "acceptedAnswers": [
                        "እንጀራ_9_4"
                    ],
                    "explanation": "The target keyword was: 【እንጀራ_9_4】"
                }
            ]
        }
    },
    "am-u9-l5": {
        "id": "am-u9-l5",
        "subject": "amharic",
        "unit": 9,
        "lessonNumber": 5,
        "title": "ምግብ፣ ገበያ እና ግብይት (Cuisine, Markets & Commerce) (Part 5)",
        "level": "A2",
        "objective": "Comprehensive mastery of የገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine) - ደረጃ 5) ተማሪዎች ስለ የገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (9.5.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (9.5.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (9.5.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine)» አጠቃቀም በደረጃ 5 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (9.5.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (9.5.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (9.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ምግብ፣ ገበያ እና ግብይት (Cuisine, Markets & Commerce)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 5)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (9.5.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (9.5.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (9.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 9-5)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (9.5.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (9.5.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (9.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («እንጀራ_9_5»):",
                    "acceptedAnswers": [
                        "እንጀራ_9_5"
                    ],
                    "explanation": "The target keyword was: 【እንጀራ_9_5】"
                }
            ]
        }
    },
    "am-u10-l1": {
        "id": "am-u10-l1",
        "subject": "amharic",
        "unit": 10,
        "lessonNumber": 1,
        "title": "ቦታዎች፣ ከተማ እና ጉዞ (City Navigation & Spatial Relations) (Part 1)",
        "level": "A2",
        "objective": "Comprehensive mastery of የከተማ ጉዞ እና አቅጣጫ (Urban Navigation).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የከተማ ጉዞ እና አቅጣጫ (Urban Navigation) - ደረጃ 1) ተማሪዎች ስለ የከተማ ጉዞ እና አቅጣጫ (Urban Navigation) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየከተማ ጉዞ እና አቅጣጫ (Urban Navigation) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (10.1.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (10.1.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (10.1.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የከተማ ጉዞ እና አቅጣጫ (Urban Navigation)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የከተማ ጉዞ እና አቅጣጫ (Urban Navigation)» አጠቃቀም በደረጃ 1 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (10.1.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (10.1.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (10.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ቦታዎች፣ ከተማ እና ጉዞ (City Navigation & Spatial Relations)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 1)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (10.1.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (10.1.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (10.1.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የከተማ ጉዞ እና አቅጣጫ (Urban Navigation)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 10-1)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (10.1.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (10.1.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (10.1.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («መንገድ_10_1»):",
                    "acceptedAnswers": [
                        "መንገድ_10_1"
                    ],
                    "explanation": "The target keyword was: 【መንገድ_10_1】"
                }
            ]
        }
    },
    "am-u10-l2": {
        "id": "am-u10-l2",
        "subject": "amharic",
        "unit": 10,
        "lessonNumber": 2,
        "title": "ቦታዎች፣ ከተማ እና ጉዞ (City Navigation & Spatial Relations) (Part 2)",
        "level": "A2",
        "objective": "Comprehensive mastery of የከተማ ጉዞ እና አቅጣጫ (Urban Navigation).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የከተማ ጉዞ እና አቅጣጫ (Urban Navigation) - ደረጃ 2) ተማሪዎች ስለ የከተማ ጉዞ እና አቅጣጫ (Urban Navigation) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየከተማ ጉዞ እና አቅጣጫ (Urban Navigation) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (10.2.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (10.2.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (10.2.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የከተማ ጉዞ እና አቅጣጫ (Urban Navigation)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የከተማ ጉዞ እና አቅጣጫ (Urban Navigation)» አጠቃቀም በደረጃ 2 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (10.2.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (10.2.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (10.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ቦታዎች፣ ከተማ እና ጉዞ (City Navigation & Spatial Relations)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 2)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (10.2.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (10.2.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (10.2.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የከተማ ጉዞ እና አቅጣጫ (Urban Navigation)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 10-2)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (10.2.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (10.2.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (10.2.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («መንገድ_10_2»):",
                    "acceptedAnswers": [
                        "መንገድ_10_2"
                    ],
                    "explanation": "The target keyword was: 【መንገድ_10_2】"
                }
            ]
        }
    },
    "am-u10-l3": {
        "id": "am-u10-l3",
        "subject": "amharic",
        "unit": 10,
        "lessonNumber": 3,
        "title": "ቦታዎች፣ ከተማ እና ጉዞ (City Navigation & Spatial Relations) (Part 3)",
        "level": "A2",
        "objective": "Comprehensive mastery of የከተማ ጉዞ እና አቅጣጫ (Urban Navigation).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የከተማ ጉዞ እና አቅጣጫ (Urban Navigation) - ደረጃ 3) ተማሪዎች ስለ የከተማ ጉዞ እና አቅጣጫ (Urban Navigation) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየከተማ ጉዞ እና አቅጣጫ (Urban Navigation) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (10.3.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (10.3.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (10.3.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የከተማ ጉዞ እና አቅጣጫ (Urban Navigation)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የከተማ ጉዞ እና አቅጣጫ (Urban Navigation)» አጠቃቀም በደረጃ 3 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (10.3.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (10.3.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (10.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ቦታዎች፣ ከተማ እና ጉዞ (City Navigation & Spatial Relations)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 3)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (10.3.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (10.3.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (10.3.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የከተማ ጉዞ እና አቅጣጫ (Urban Navigation)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 10-3)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (10.3.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (10.3.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (10.3.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («መንገድ_10_3»):",
                    "acceptedAnswers": [
                        "መንገድ_10_3"
                    ],
                    "explanation": "The target keyword was: 【መንገድ_10_3】"
                }
            ]
        }
    },
    "am-u10-l4": {
        "id": "am-u10-l4",
        "subject": "amharic",
        "unit": 10,
        "lessonNumber": 4,
        "title": "ቦታዎች፣ ከተማ እና ጉዞ (City Navigation & Spatial Relations) (Part 4)",
        "level": "A2",
        "objective": "Comprehensive mastery of የከተማ ጉዞ እና አቅጣጫ (Urban Navigation).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የከተማ ጉዞ እና አቅጣጫ (Urban Navigation) - ደረጃ 4) ተማሪዎች ስለ የከተማ ጉዞ እና አቅጣጫ (Urban Navigation) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየከተማ ጉዞ እና አቅጣጫ (Urban Navigation) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (10.4.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (10.4.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (10.4.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የከተማ ጉዞ እና አቅጣጫ (Urban Navigation)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የከተማ ጉዞ እና አቅጣጫ (Urban Navigation)» አጠቃቀም በደረጃ 4 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (10.4.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (10.4.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (10.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ቦታዎች፣ ከተማ እና ጉዞ (City Navigation & Spatial Relations)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 4)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (10.4.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (10.4.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (10.4.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የከተማ ጉዞ እና አቅጣጫ (Urban Navigation)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 10-4)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (10.4.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (10.4.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (10.4.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («መንገድ_10_4»):",
                    "acceptedAnswers": [
                        "መንገድ_10_4"
                    ],
                    "explanation": "The target keyword was: 【መንገድ_10_4】"
                }
            ]
        }
    },
    "am-u10-l5": {
        "id": "am-u10-l5",
        "subject": "amharic",
        "unit": 10,
        "lessonNumber": 5,
        "title": "ቦታዎች፣ ከተማ እና ጉዞ (City Navigation & Spatial Relations) (Part 5)",
        "level": "A2",
        "objective": "Comprehensive mastery of የከተማ ጉዞ እና አቅጣጫ (Urban Navigation).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የከተማ ጉዞ እና አቅጣጫ (Urban Navigation) - ደረጃ 5) ተማሪዎች ስለ የከተማ ጉዞ እና አቅጣጫ (Urban Navigation) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየከተማ ጉዞ እና አቅጣጫ (Urban Navigation) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (10.5.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (10.5.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (10.5.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የከተማ ጉዞ እና አቅጣጫ (Urban Navigation)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የከተማ ጉዞ እና አቅጣጫ (Urban Navigation)» አጠቃቀም በደረጃ 5 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (10.5.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (10.5.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (10.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ቦታዎች፣ ከተማ እና ጉዞ (City Navigation & Spatial Relations)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 5)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (10.5.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (10.5.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (10.5.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የከተማ ጉዞ እና አቅጣጫ (Urban Navigation)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 10-5)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (10.5.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (10.5.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (10.5.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («መንገድ_10_5»):",
                    "acceptedAnswers": [
                        "መንገድ_10_5"
                    ],
                    "explanation": "The target keyword was: 【መንገድ_10_5】"
                }
            ]
        }
    },
    "am-u11-l1": {
        "id": "am-u11-l1",
        "subject": "amharic",
        "unit": 11,
        "lessonNumber": 1,
        "title": "ጊዜ፣ ሰዓት እና የቀን መቁጠሪያ (Time Expressions & Calendar) (Part 1)",
        "level": "B1",
        "objective": "Comprehensive mastery of ሰዓት እና የቀን ስሞች (Time and Days).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ሰዓት እና የቀን ስሞች (Time and Days) - ደረጃ 1) ተማሪዎች ስለ ሰዓት እና የቀን ስሞች (Time and Days) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የሰዓት እና የቀን ስሞች (Time and Days) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (11.1.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (11.1.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (11.1.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ሰዓት እና የቀን ስሞች (Time and Days)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ሰዓት እና የቀን ስሞች (Time and Days)» አጠቃቀም በደረጃ 1 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (11.1.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (11.1.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (11.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ጊዜ፣ ሰዓት እና የቀን መቁጠሪያ (Time Expressions & Calendar)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 1)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (11.1.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (11.1.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (11.1.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ሰዓት እና የቀን ስሞች (Time and Days)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 11-1)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (11.1.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (11.1.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (11.1.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ሰዓት_11_1»):",
                    "acceptedAnswers": [
                        "ሰዓት_11_1"
                    ],
                    "explanation": "The target keyword was: 【ሰዓት_11_1】"
                }
            ]
        }
    },
    "am-u11-l2": {
        "id": "am-u11-l2",
        "subject": "amharic",
        "unit": 11,
        "lessonNumber": 2,
        "title": "ጊዜ፣ ሰዓት እና የቀን መቁጠሪያ (Time Expressions & Calendar) (Part 2)",
        "level": "B1",
        "objective": "Comprehensive mastery of ሰዓት እና የቀን ስሞች (Time and Days).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ሰዓት እና የቀን ስሞች (Time and Days) - ደረጃ 2) ተማሪዎች ስለ ሰዓት እና የቀን ስሞች (Time and Days) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የሰዓት እና የቀን ስሞች (Time and Days) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (11.2.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (11.2.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (11.2.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ሰዓት እና የቀን ስሞች (Time and Days)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ሰዓት እና የቀን ስሞች (Time and Days)» አጠቃቀም በደረጃ 2 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (11.2.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (11.2.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (11.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ጊዜ፣ ሰዓት እና የቀን መቁጠሪያ (Time Expressions & Calendar)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 2)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (11.2.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (11.2.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (11.2.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ሰዓት እና የቀን ስሞች (Time and Days)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 11-2)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (11.2.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (11.2.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (11.2.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ሰዓት_11_2»):",
                    "acceptedAnswers": [
                        "ሰዓት_11_2"
                    ],
                    "explanation": "The target keyword was: 【ሰዓት_11_2】"
                }
            ]
        }
    },
    "am-u11-l3": {
        "id": "am-u11-l3",
        "subject": "amharic",
        "unit": 11,
        "lessonNumber": 3,
        "title": "ጊዜ፣ ሰዓት እና የቀን መቁጠሪያ (Time Expressions & Calendar) (Part 3)",
        "level": "B1",
        "objective": "Comprehensive mastery of ሰዓት እና የቀን ስሞች (Time and Days).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ሰዓት እና የቀን ስሞች (Time and Days) - ደረጃ 3) ተማሪዎች ስለ ሰዓት እና የቀን ስሞች (Time and Days) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የሰዓት እና የቀን ስሞች (Time and Days) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (11.3.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (11.3.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (11.3.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ሰዓት እና የቀን ስሞች (Time and Days)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ሰዓት እና የቀን ስሞች (Time and Days)» አጠቃቀም በደረጃ 3 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (11.3.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (11.3.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (11.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ጊዜ፣ ሰዓት እና የቀን መቁጠሪያ (Time Expressions & Calendar)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 3)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (11.3.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (11.3.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (11.3.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ሰዓት እና የቀን ስሞች (Time and Days)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 11-3)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (11.3.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (11.3.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (11.3.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ሰዓት_11_3»):",
                    "acceptedAnswers": [
                        "ሰዓት_11_3"
                    ],
                    "explanation": "The target keyword was: 【ሰዓት_11_3】"
                }
            ]
        }
    },
    "am-u11-l4": {
        "id": "am-u11-l4",
        "subject": "amharic",
        "unit": 11,
        "lessonNumber": 4,
        "title": "ጊዜ፣ ሰዓት እና የቀን መቁጠሪያ (Time Expressions & Calendar) (Part 4)",
        "level": "B1",
        "objective": "Comprehensive mastery of ሰዓት እና የቀን ስሞች (Time and Days).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ሰዓት እና የቀን ስሞች (Time and Days) - ደረጃ 4) ተማሪዎች ስለ ሰዓት እና የቀን ስሞች (Time and Days) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የሰዓት እና የቀን ስሞች (Time and Days) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (11.4.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (11.4.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (11.4.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ሰዓት እና የቀን ስሞች (Time and Days)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ሰዓት እና የቀን ስሞች (Time and Days)» አጠቃቀም በደረጃ 4 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (11.4.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (11.4.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (11.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ጊዜ፣ ሰዓት እና የቀን መቁጠሪያ (Time Expressions & Calendar)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 4)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (11.4.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (11.4.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (11.4.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ሰዓት እና የቀን ስሞች (Time and Days)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 11-4)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (11.4.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (11.4.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (11.4.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ሰዓት_11_4»):",
                    "acceptedAnswers": [
                        "ሰዓት_11_4"
                    ],
                    "explanation": "The target keyword was: 【ሰዓት_11_4】"
                }
            ]
        }
    },
    "am-u11-l5": {
        "id": "am-u11-l5",
        "subject": "amharic",
        "unit": 11,
        "lessonNumber": 5,
        "title": "ጊዜ፣ ሰዓት እና የቀን መቁጠሪያ (Time Expressions & Calendar) (Part 5)",
        "level": "B1",
        "objective": "Comprehensive mastery of ሰዓት እና የቀን ስሞች (Time and Days).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ሰዓት እና የቀን ስሞች (Time and Days) - ደረጃ 5) ተማሪዎች ስለ ሰዓት እና የቀን ስሞች (Time and Days) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የሰዓት እና የቀን ስሞች (Time and Days) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (11.5.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (11.5.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (11.5.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ሰዓት እና የቀን ስሞች (Time and Days)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ሰዓት እና የቀን ስሞች (Time and Days)» አጠቃቀም በደረጃ 5 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (11.5.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (11.5.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (11.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ጊዜ፣ ሰዓት እና የቀን መቁጠሪያ (Time Expressions & Calendar)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 5)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (11.5.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (11.5.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (11.5.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ሰዓት እና የቀን ስሞች (Time and Days)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 11-5)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (11.5.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (11.5.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (11.5.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ሰዓት_11_5»):",
                    "acceptedAnswers": [
                        "ሰዓት_11_5"
                    ],
                    "explanation": "The target keyword was: 【ሰዓት_11_5】"
                }
            ]
        }
    },
    "am-u12-l1": {
        "id": "am-u12-l1",
        "subject": "amharic",
        "unit": 12,
        "lessonNumber": 1,
        "title": "የሰውነት ክፍሎች እና ጤና (Health & Medical Consultations) (Part 1)",
        "level": "B1",
        "objective": "Comprehensive mastery of የጤና እንክብካቤ እና ህክምና (Health and Anatomy).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የጤና እንክብካቤ እና ህክምና (Health and Anatomy) - ደረጃ 1) ተማሪዎች ስለ የጤና እንክብካቤ እና ህክምና (Health and Anatomy) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየጤና እንክብካቤ እና ህክምና (Health and Anatomy) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (12.1.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (12.1.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (12.1.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የጤና እንክብካቤ እና ህክምና (Health and Anatomy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የጤና እንክብካቤ እና ህክምና (Health and Anatomy)» አጠቃቀም በደረጃ 1 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (12.1.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (12.1.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (12.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የሰውነት ክፍሎች እና ጤና (Health & Medical Consultations)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 1)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (12.1.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (12.1.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (12.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የጤና እንክብካቤ እና ህክምና (Health and Anatomy)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 12-1)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (12.1.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (12.1.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (12.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ጤና_12_1»):",
                    "acceptedAnswers": [
                        "ጤና_12_1"
                    ],
                    "explanation": "The target keyword was: 【ጤና_12_1】"
                }
            ]
        }
    },
    "am-u12-l2": {
        "id": "am-u12-l2",
        "subject": "amharic",
        "unit": 12,
        "lessonNumber": 2,
        "title": "የሰውነት ክፍሎች እና ጤና (Health & Medical Consultations) (Part 2)",
        "level": "B1",
        "objective": "Comprehensive mastery of የጤና እንክብካቤ እና ህክምና (Health and Anatomy).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የጤና እንክብካቤ እና ህክምና (Health and Anatomy) - ደረጃ 2) ተማሪዎች ስለ የጤና እንክብካቤ እና ህክምና (Health and Anatomy) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየጤና እንክብካቤ እና ህክምና (Health and Anatomy) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (12.2.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (12.2.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (12.2.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የጤና እንክብካቤ እና ህክምና (Health and Anatomy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የጤና እንክብካቤ እና ህክምና (Health and Anatomy)» አጠቃቀም በደረጃ 2 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (12.2.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (12.2.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (12.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የሰውነት ክፍሎች እና ጤና (Health & Medical Consultations)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 2)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (12.2.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (12.2.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (12.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የጤና እንክብካቤ እና ህክምና (Health and Anatomy)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 12-2)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (12.2.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (12.2.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (12.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ጤና_12_2»):",
                    "acceptedAnswers": [
                        "ጤና_12_2"
                    ],
                    "explanation": "The target keyword was: 【ጤና_12_2】"
                }
            ]
        }
    },
    "am-u12-l3": {
        "id": "am-u12-l3",
        "subject": "amharic",
        "unit": 12,
        "lessonNumber": 3,
        "title": "የሰውነት ክፍሎች እና ጤና (Health & Medical Consultations) (Part 3)",
        "level": "B1",
        "objective": "Comprehensive mastery of የጤና እንክብካቤ እና ህክምና (Health and Anatomy).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የጤና እንክብካቤ እና ህክምና (Health and Anatomy) - ደረጃ 3) ተማሪዎች ስለ የጤና እንክብካቤ እና ህክምና (Health and Anatomy) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየጤና እንክብካቤ እና ህክምና (Health and Anatomy) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (12.3.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (12.3.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (12.3.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የጤና እንክብካቤ እና ህክምና (Health and Anatomy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የጤና እንክብካቤ እና ህክምና (Health and Anatomy)» አጠቃቀም በደረጃ 3 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (12.3.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (12.3.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (12.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የሰውነት ክፍሎች እና ጤና (Health & Medical Consultations)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 3)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (12.3.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (12.3.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (12.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የጤና እንክብካቤ እና ህክምና (Health and Anatomy)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 12-3)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (12.3.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (12.3.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (12.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ጤና_12_3»):",
                    "acceptedAnswers": [
                        "ጤና_12_3"
                    ],
                    "explanation": "The target keyword was: 【ጤና_12_3】"
                }
            ]
        }
    },
    "am-u12-l4": {
        "id": "am-u12-l4",
        "subject": "amharic",
        "unit": 12,
        "lessonNumber": 4,
        "title": "የሰውነት ክፍሎች እና ጤና (Health & Medical Consultations) (Part 4)",
        "level": "B1",
        "objective": "Comprehensive mastery of የጤና እንክብካቤ እና ህክምና (Health and Anatomy).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የጤና እንክብካቤ እና ህክምና (Health and Anatomy) - ደረጃ 4) ተማሪዎች ስለ የጤና እንክብካቤ እና ህክምና (Health and Anatomy) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየጤና እንክብካቤ እና ህክምና (Health and Anatomy) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (12.4.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (12.4.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (12.4.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የጤና እንክብካቤ እና ህክምና (Health and Anatomy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የጤና እንክብካቤ እና ህክምና (Health and Anatomy)» አጠቃቀም በደረጃ 4 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (12.4.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (12.4.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (12.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የሰውነት ክፍሎች እና ጤና (Health & Medical Consultations)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 4)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (12.4.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (12.4.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (12.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የጤና እንክብካቤ እና ህክምና (Health and Anatomy)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 12-4)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (12.4.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (12.4.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (12.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ጤና_12_4»):",
                    "acceptedAnswers": [
                        "ጤና_12_4"
                    ],
                    "explanation": "The target keyword was: 【ጤና_12_4】"
                }
            ]
        }
    },
    "am-u12-l5": {
        "id": "am-u12-l5",
        "subject": "amharic",
        "unit": 12,
        "lessonNumber": 5,
        "title": "የሰውነት ክፍሎች እና ጤና (Health & Medical Consultations) (Part 5)",
        "level": "B1",
        "objective": "Comprehensive mastery of የጤና እንክብካቤ እና ህክምና (Health and Anatomy).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የጤና እንክብካቤ እና ህክምና (Health and Anatomy) - ደረጃ 5) ተማሪዎች ስለ የጤና እንክብካቤ እና ህክምና (Health and Anatomy) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየጤና እንክብካቤ እና ህክምና (Health and Anatomy) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (12.5.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (12.5.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (12.5.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የጤና እንክብካቤ እና ህክምና (Health and Anatomy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የጤና እንክብካቤ እና ህክምና (Health and Anatomy)» አጠቃቀም በደረጃ 5 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (12.5.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (12.5.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (12.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የሰውነት ክፍሎች እና ጤና (Health & Medical Consultations)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 5)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (12.5.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (12.5.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (12.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የጤና እንክብካቤ እና ህክምና (Health and Anatomy)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 12-5)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (12.5.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (12.5.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (12.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ጤና_12_5»):",
                    "acceptedAnswers": [
                        "ጤና_12_5"
                    ],
                    "explanation": "The target keyword was: 【ጤና_12_5】"
                }
            ]
        }
    },
    "am-u13-l1": {
        "id": "am-u13-l1",
        "subject": "amharic",
        "unit": 13,
        "lessonNumber": 1,
        "title": "አየር ሁኔታ እና የተፈጥሮ አካባቢ (Weather & Geography) (Part 1)",
        "level": "B1",
        "objective": "Comprehensive mastery of አየር ጠባይ እና ተፈጥሮ (Weather and Nature).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (አየር ጠባይ እና ተፈጥሮ (Weather and Nature) - ደረጃ 1) ተማሪዎች ስለ አየር ጠባይ እና ተፈጥሮ (Weather and Nature) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የአየር ጠባይ እና ተፈጥሮ (Weather and Nature) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (13.1.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (13.1.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (13.1.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for አየር ጠባይ እና ተፈጥሮ (Weather and Nature)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «አየር ጠባይ እና ተፈጥሮ (Weather and Nature)» አጠቃቀም በደረጃ 1 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (13.1.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (13.1.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (13.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«አየር ሁኔታ እና የተፈጥሮ አካባቢ (Weather & Geography)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 1)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (13.1.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (13.1.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (13.1.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«አየር ጠባይ እና ተፈጥሮ (Weather and Nature)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 13-1)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (13.1.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (13.1.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (13.1.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ዝናብ_13_1»):",
                    "acceptedAnswers": [
                        "ዝናብ_13_1"
                    ],
                    "explanation": "The target keyword was: 【ዝናብ_13_1】"
                }
            ]
        }
    },
    "am-u13-l2": {
        "id": "am-u13-l2",
        "subject": "amharic",
        "unit": 13,
        "lessonNumber": 2,
        "title": "አየር ሁኔታ እና የተፈጥሮ አካባቢ (Weather & Geography) (Part 2)",
        "level": "B1",
        "objective": "Comprehensive mastery of አየር ጠባይ እና ተፈጥሮ (Weather and Nature).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (አየር ጠባይ እና ተፈጥሮ (Weather and Nature) - ደረጃ 2) ተማሪዎች ስለ አየር ጠባይ እና ተፈጥሮ (Weather and Nature) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የአየር ጠባይ እና ተፈጥሮ (Weather and Nature) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (13.2.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (13.2.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (13.2.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for አየር ጠባይ እና ተፈጥሮ (Weather and Nature)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «አየር ጠባይ እና ተፈጥሮ (Weather and Nature)» አጠቃቀም በደረጃ 2 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (13.2.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (13.2.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (13.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«አየር ሁኔታ እና የተፈጥሮ አካባቢ (Weather & Geography)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 2)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (13.2.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (13.2.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (13.2.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«አየር ጠባይ እና ተፈጥሮ (Weather and Nature)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 13-2)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (13.2.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (13.2.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (13.2.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ዝናብ_13_2»):",
                    "acceptedAnswers": [
                        "ዝናብ_13_2"
                    ],
                    "explanation": "The target keyword was: 【ዝናብ_13_2】"
                }
            ]
        }
    },
    "am-u13-l3": {
        "id": "am-u13-l3",
        "subject": "amharic",
        "unit": 13,
        "lessonNumber": 3,
        "title": "አየር ሁኔታ እና የተፈጥሮ አካባቢ (Weather & Geography) (Part 3)",
        "level": "B1",
        "objective": "Comprehensive mastery of አየር ጠባይ እና ተፈጥሮ (Weather and Nature).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (አየር ጠባይ እና ተፈጥሮ (Weather and Nature) - ደረጃ 3) ተማሪዎች ስለ አየር ጠባይ እና ተፈጥሮ (Weather and Nature) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የአየር ጠባይ እና ተፈጥሮ (Weather and Nature) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (13.3.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (13.3.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (13.3.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for አየር ጠባይ እና ተፈጥሮ (Weather and Nature)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «አየር ጠባይ እና ተፈጥሮ (Weather and Nature)» አጠቃቀም በደረጃ 3 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (13.3.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (13.3.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (13.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«አየር ሁኔታ እና የተፈጥሮ አካባቢ (Weather & Geography)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 3)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (13.3.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (13.3.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (13.3.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«አየር ጠባይ እና ተፈጥሮ (Weather and Nature)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 13-3)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (13.3.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (13.3.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (13.3.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ዝናብ_13_3»):",
                    "acceptedAnswers": [
                        "ዝናብ_13_3"
                    ],
                    "explanation": "The target keyword was: 【ዝናብ_13_3】"
                }
            ]
        }
    },
    "am-u13-l4": {
        "id": "am-u13-l4",
        "subject": "amharic",
        "unit": 13,
        "lessonNumber": 4,
        "title": "አየር ሁኔታ እና የተፈጥሮ አካባቢ (Weather & Geography) (Part 4)",
        "level": "B1",
        "objective": "Comprehensive mastery of አየር ጠባይ እና ተፈጥሮ (Weather and Nature).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (አየር ጠባይ እና ተፈጥሮ (Weather and Nature) - ደረጃ 4) ተማሪዎች ስለ አየር ጠባይ እና ተፈጥሮ (Weather and Nature) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የአየር ጠባይ እና ተፈጥሮ (Weather and Nature) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (13.4.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (13.4.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (13.4.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for አየር ጠባይ እና ተፈጥሮ (Weather and Nature)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «አየር ጠባይ እና ተፈጥሮ (Weather and Nature)» አጠቃቀም በደረጃ 4 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (13.4.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (13.4.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (13.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«አየር ሁኔታ እና የተፈጥሮ አካባቢ (Weather & Geography)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 4)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (13.4.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (13.4.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (13.4.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«አየር ጠባይ እና ተፈጥሮ (Weather and Nature)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 13-4)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (13.4.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (13.4.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (13.4.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ዝናብ_13_4»):",
                    "acceptedAnswers": [
                        "ዝናብ_13_4"
                    ],
                    "explanation": "The target keyword was: 【ዝናብ_13_4】"
                }
            ]
        }
    },
    "am-u13-l5": {
        "id": "am-u13-l5",
        "subject": "amharic",
        "unit": 13,
        "lessonNumber": 5,
        "title": "አየር ሁኔታ እና የተፈጥሮ አካባቢ (Weather & Geography) (Part 5)",
        "level": "B1",
        "objective": "Comprehensive mastery of አየር ጠባይ እና ተፈጥሮ (Weather and Nature).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (አየር ጠባይ እና ተፈጥሮ (Weather and Nature) - ደረጃ 5) ተማሪዎች ስለ አየር ጠባይ እና ተፈጥሮ (Weather and Nature) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የአየር ጠባይ እና ተፈጥሮ (Weather and Nature) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (13.5.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (13.5.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (13.5.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for አየር ጠባይ እና ተፈጥሮ (Weather and Nature)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «አየር ጠባይ እና ተፈጥሮ (Weather and Nature)» አጠቃቀም በደረጃ 5 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (13.5.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (13.5.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (13.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«አየር ሁኔታ እና የተፈጥሮ አካባቢ (Weather & Geography)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 5)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (13.5.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (13.5.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (13.5.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«አየር ጠባይ እና ተፈጥሮ (Weather and Nature)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 13-5)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (13.5.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (13.5.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (13.5.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ዝናብ_13_5»):",
                    "acceptedAnswers": [
                        "ዝናብ_13_5"
                    ],
                    "explanation": "The target keyword was: 【ዝናብ_13_5】"
                }
            ]
        }
    },
    "am-u14-l1": {
        "id": "am-u14-l1",
        "subject": "amharic",
        "unit": 14,
        "lessonNumber": 1,
        "title": "ስራ፣ ሙያ እና የስራ ቦታ (Occupations & Workplace Dialogue) (Part 1)",
        "level": "B1",
        "objective": "Comprehensive mastery of የስራ መስክ እና ሙያ (Professions and Workplace).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የስራ መስክ እና ሙያ (Professions and Workplace) - ደረጃ 1) ተማሪዎች ስለ የስራ መስክ እና ሙያ (Professions and Workplace) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየስራ መስክ እና ሙያ (Professions and Workplace) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (14.1.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (14.1.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (14.1.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የስራ መስክ እና ሙያ (Professions and Workplace)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የስራ መስክ እና ሙያ (Professions and Workplace)» አጠቃቀም በደረጃ 1 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (14.1.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (14.1.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (14.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ስራ፣ ሙያ እና የስራ ቦታ (Occupations & Workplace Dialogue)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 1)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (14.1.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (14.1.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (14.1.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የስራ መስክ እና ሙያ (Professions and Workplace)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 14-1)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (14.1.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (14.1.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (14.1.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ስራ_14_1»):",
                    "acceptedAnswers": [
                        "ስራ_14_1"
                    ],
                    "explanation": "The target keyword was: 【ስራ_14_1】"
                }
            ]
        }
    },
    "am-u14-l2": {
        "id": "am-u14-l2",
        "subject": "amharic",
        "unit": 14,
        "lessonNumber": 2,
        "title": "ስራ፣ ሙያ እና የስራ ቦታ (Occupations & Workplace Dialogue) (Part 2)",
        "level": "B1",
        "objective": "Comprehensive mastery of የስራ መስክ እና ሙያ (Professions and Workplace).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የስራ መስክ እና ሙያ (Professions and Workplace) - ደረጃ 2) ተማሪዎች ስለ የስራ መስክ እና ሙያ (Professions and Workplace) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየስራ መስክ እና ሙያ (Professions and Workplace) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (14.2.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (14.2.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (14.2.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የስራ መስክ እና ሙያ (Professions and Workplace)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የስራ መስክ እና ሙያ (Professions and Workplace)» አጠቃቀም በደረጃ 2 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (14.2.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (14.2.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (14.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ስራ፣ ሙያ እና የስራ ቦታ (Occupations & Workplace Dialogue)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 2)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (14.2.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (14.2.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (14.2.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የስራ መስክ እና ሙያ (Professions and Workplace)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 14-2)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (14.2.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (14.2.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (14.2.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ስራ_14_2»):",
                    "acceptedAnswers": [
                        "ስራ_14_2"
                    ],
                    "explanation": "The target keyword was: 【ስራ_14_2】"
                }
            ]
        }
    },
    "am-u14-l3": {
        "id": "am-u14-l3",
        "subject": "amharic",
        "unit": 14,
        "lessonNumber": 3,
        "title": "ስራ፣ ሙያ እና የስራ ቦታ (Occupations & Workplace Dialogue) (Part 3)",
        "level": "B1",
        "objective": "Comprehensive mastery of የስራ መስክ እና ሙያ (Professions and Workplace).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የስራ መስክ እና ሙያ (Professions and Workplace) - ደረጃ 3) ተማሪዎች ስለ የስራ መስክ እና ሙያ (Professions and Workplace) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየስራ መስክ እና ሙያ (Professions and Workplace) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (14.3.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (14.3.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (14.3.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የስራ መስክ እና ሙያ (Professions and Workplace)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የስራ መስክ እና ሙያ (Professions and Workplace)» አጠቃቀም በደረጃ 3 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (14.3.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (14.3.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (14.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ስራ፣ ሙያ እና የስራ ቦታ (Occupations & Workplace Dialogue)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 3)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (14.3.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (14.3.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (14.3.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የስራ መስክ እና ሙያ (Professions and Workplace)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 14-3)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (14.3.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (14.3.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (14.3.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ስራ_14_3»):",
                    "acceptedAnswers": [
                        "ስራ_14_3"
                    ],
                    "explanation": "The target keyword was: 【ስራ_14_3】"
                }
            ]
        }
    },
    "am-u14-l4": {
        "id": "am-u14-l4",
        "subject": "amharic",
        "unit": 14,
        "lessonNumber": 4,
        "title": "ስራ፣ ሙያ እና የስራ ቦታ (Occupations & Workplace Dialogue) (Part 4)",
        "level": "B1",
        "objective": "Comprehensive mastery of የስራ መስክ እና ሙያ (Professions and Workplace).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የስራ መስክ እና ሙያ (Professions and Workplace) - ደረጃ 4) ተማሪዎች ስለ የስራ መስክ እና ሙያ (Professions and Workplace) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየስራ መስክ እና ሙያ (Professions and Workplace) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (14.4.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (14.4.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (14.4.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የስራ መስክ እና ሙያ (Professions and Workplace)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የስራ መስክ እና ሙያ (Professions and Workplace)» አጠቃቀም በደረጃ 4 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (14.4.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (14.4.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (14.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ስራ፣ ሙያ እና የስራ ቦታ (Occupations & Workplace Dialogue)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 4)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (14.4.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (14.4.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (14.4.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የስራ መስክ እና ሙያ (Professions and Workplace)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 14-4)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (14.4.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (14.4.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (14.4.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ስራ_14_4»):",
                    "acceptedAnswers": [
                        "ስራ_14_4"
                    ],
                    "explanation": "The target keyword was: 【ስራ_14_4】"
                }
            ]
        }
    },
    "am-u14-l5": {
        "id": "am-u14-l5",
        "subject": "amharic",
        "unit": 14,
        "lessonNumber": 5,
        "title": "ስራ፣ ሙያ እና የስራ ቦታ (Occupations & Workplace Dialogue) (Part 5)",
        "level": "B1",
        "objective": "Comprehensive mastery of የስራ መስክ እና ሙያ (Professions and Workplace).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የስራ መስክ እና ሙያ (Professions and Workplace) - ደረጃ 5) ተማሪዎች ስለ የስራ መስክ እና ሙያ (Professions and Workplace) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየስራ መስክ እና ሙያ (Professions and Workplace) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (14.5.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (14.5.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (14.5.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የስራ መስክ እና ሙያ (Professions and Workplace)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የስራ መስክ እና ሙያ (Professions and Workplace)» አጠቃቀም በደረጃ 5 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (14.5.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (14.5.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (14.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ስራ፣ ሙያ እና የስራ ቦታ (Occupations & Workplace Dialogue)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 5)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (14.5.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (14.5.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (14.5.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የስራ መስክ እና ሙያ (Professions and Workplace)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 14-5)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (14.5.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (14.5.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (14.5.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ስራ_14_5»):",
                    "acceptedAnswers": [
                        "ስራ_14_5"
                    ],
                    "explanation": "The target keyword was: 【ስራ_14_5】"
                }
            ]
        }
    },
    "am-u15-l1": {
        "id": "am-u15-l1",
        "subject": "amharic",
        "unit": 15,
        "lessonNumber": 1,
        "title": "ትምህርት፣ ሳይንስ እና ቴክኖሎጂ (Education & Academia) (Part 1)",
        "level": "B1",
        "objective": "Comprehensive mastery of የትምህርት ጥናት (Education and Academia).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የትምህርት ጥናት (Education and Academia) - ደረጃ 1) ተማሪዎች ስለ የትምህርት ጥናት (Education and Academia) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየትምህርት ጥናት (Education and Academia) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (15.1.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (15.1.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (15.1.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የትምህርት ጥናት (Education and Academia)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የትምህርት ጥናት (Education and Academia)» አጠቃቀም በደረጃ 1 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (15.1.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (15.1.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (15.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ትምህርት፣ ሳይንስ እና ቴክኖሎጂ (Education & Academia)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 1)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (15.1.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (15.1.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (15.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የትምህርት ጥናት (Education and Academia)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 15-1)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (15.1.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (15.1.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (15.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ትምህርት_ቤት_15_1»):",
                    "acceptedAnswers": [
                        "ትምህርት_ቤት_15_1"
                    ],
                    "explanation": "The target keyword was: 【ትምህርት_ቤት_15_1】"
                }
            ]
        }
    },
    "am-u15-l2": {
        "id": "am-u15-l2",
        "subject": "amharic",
        "unit": 15,
        "lessonNumber": 2,
        "title": "ትምህርት፣ ሳይንስ እና ቴክኖሎጂ (Education & Academia) (Part 2)",
        "level": "B1",
        "objective": "Comprehensive mastery of የትምህርት ጥናት (Education and Academia).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የትምህርት ጥናት (Education and Academia) - ደረጃ 2) ተማሪዎች ስለ የትምህርት ጥናት (Education and Academia) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየትምህርት ጥናት (Education and Academia) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (15.2.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (15.2.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (15.2.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የትምህርት ጥናት (Education and Academia)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የትምህርት ጥናት (Education and Academia)» አጠቃቀም በደረጃ 2 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (15.2.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (15.2.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (15.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ትምህርት፣ ሳይንስ እና ቴክኖሎጂ (Education & Academia)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 2)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (15.2.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (15.2.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (15.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የትምህርት ጥናት (Education and Academia)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 15-2)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (15.2.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (15.2.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (15.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ትምህርት_ቤት_15_2»):",
                    "acceptedAnswers": [
                        "ትምህርት_ቤት_15_2"
                    ],
                    "explanation": "The target keyword was: 【ትምህርት_ቤት_15_2】"
                }
            ]
        }
    },
    "am-u15-l3": {
        "id": "am-u15-l3",
        "subject": "amharic",
        "unit": 15,
        "lessonNumber": 3,
        "title": "ትምህርት፣ ሳይንስ እና ቴክኖሎጂ (Education & Academia) (Part 3)",
        "level": "B1",
        "objective": "Comprehensive mastery of የትምህርት ጥናት (Education and Academia).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የትምህርት ጥናት (Education and Academia) - ደረጃ 3) ተማሪዎች ስለ የትምህርት ጥናት (Education and Academia) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየትምህርት ጥናት (Education and Academia) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (15.3.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (15.3.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (15.3.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የትምህርት ጥናት (Education and Academia)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የትምህርት ጥናት (Education and Academia)» አጠቃቀም በደረጃ 3 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (15.3.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (15.3.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (15.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ትምህርት፣ ሳይንስ እና ቴክኖሎጂ (Education & Academia)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 3)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (15.3.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (15.3.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (15.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የትምህርት ጥናት (Education and Academia)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 15-3)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (15.3.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (15.3.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (15.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ትምህርት_ቤት_15_3»):",
                    "acceptedAnswers": [
                        "ትምህርት_ቤት_15_3"
                    ],
                    "explanation": "The target keyword was: 【ትምህርት_ቤት_15_3】"
                }
            ]
        }
    },
    "am-u15-l4": {
        "id": "am-u15-l4",
        "subject": "amharic",
        "unit": 15,
        "lessonNumber": 4,
        "title": "ትምህርት፣ ሳይንስ እና ቴክኖሎጂ (Education & Academia) (Part 4)",
        "level": "B1",
        "objective": "Comprehensive mastery of የትምህርት ጥናት (Education and Academia).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የትምህርት ጥናት (Education and Academia) - ደረጃ 4) ተማሪዎች ስለ የትምህርት ጥናት (Education and Academia) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየትምህርት ጥናት (Education and Academia) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (15.4.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (15.4.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (15.4.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የትምህርት ጥናት (Education and Academia)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የትምህርት ጥናት (Education and Academia)» አጠቃቀም በደረጃ 4 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (15.4.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (15.4.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (15.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ትምህርት፣ ሳይንስ እና ቴክኖሎጂ (Education & Academia)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 4)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (15.4.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (15.4.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (15.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የትምህርት ጥናት (Education and Academia)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 15-4)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (15.4.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (15.4.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (15.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ትምህርት_ቤት_15_4»):",
                    "acceptedAnswers": [
                        "ትምህርት_ቤት_15_4"
                    ],
                    "explanation": "The target keyword was: 【ትምህርት_ቤት_15_4】"
                }
            ]
        }
    },
    "am-u15-l5": {
        "id": "am-u15-l5",
        "subject": "amharic",
        "unit": 15,
        "lessonNumber": 5,
        "title": "ትምህርት፣ ሳይንስ እና ቴክኖሎጂ (Education & Academia) (Part 5)",
        "level": "B1",
        "objective": "Comprehensive mastery of የትምህርት ጥናት (Education and Academia).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የትምህርት ጥናት (Education and Academia) - ደረጃ 5) ተማሪዎች ስለ የትምህርት ጥናት (Education and Academia) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየትምህርት ጥናት (Education and Academia) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (15.5.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (15.5.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (15.5.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የትምህርት ጥናት (Education and Academia)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የትምህርት ጥናት (Education and Academia)» አጠቃቀም በደረጃ 5 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (15.5.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (15.5.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (15.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ትምህርት፣ ሳይንስ እና ቴክኖሎጂ (Education & Academia)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 5)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (15.5.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (15.5.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (15.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የትምህርት ጥናት (Education and Academia)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 15-5)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (15.5.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (15.5.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (15.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ትምህርት_ቤት_15_5»):",
                    "acceptedAnswers": [
                        "ትምህርት_ቤት_15_5"
                    ],
                    "explanation": "The target keyword was: 【ትምህርት_ቤት_15_5】"
                }
            ]
        }
    },
    "am-u16-l1": {
        "id": "am-u16-l1",
        "subject": "amharic",
        "unit": 16,
        "lessonNumber": 1,
        "title": "ስሜት፣ ስነ-ልቦና እና ባህሪ (Emotions & Psychology) (Part 1)",
        "level": "B1",
        "objective": "Comprehensive mastery of ስሜታዊ መግለጫዎች (Emotions and Feelings).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ስሜታዊ መግለጫዎች (Emotions and Feelings) - ደረጃ 1) ተማሪዎች ስለ ስሜታዊ መግለጫዎች (Emotions and Feelings) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የስሜታዊ መግለጫዎች (Emotions and Feelings) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (16.1.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (16.1.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (16.1.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ስሜታዊ መግለጫዎች (Emotions and Feelings)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ስሜታዊ መግለጫዎች (Emotions and Feelings)» አጠቃቀም በደረጃ 1 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (16.1.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (16.1.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (16.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ስሜት፣ ስነ-ልቦና እና ባህሪ (Emotions & Psychology)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 1)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (16.1.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (16.1.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (16.1.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ስሜታዊ መግለጫዎች (Emotions and Feelings)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 16-1)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (16.1.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (16.1.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (16.1.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ደስታ_16_1»):",
                    "acceptedAnswers": [
                        "ደስታ_16_1"
                    ],
                    "explanation": "The target keyword was: 【ደስታ_16_1】"
                }
            ]
        }
    },
    "am-u16-l2": {
        "id": "am-u16-l2",
        "subject": "amharic",
        "unit": 16,
        "lessonNumber": 2,
        "title": "ስሜት፣ ስነ-ልቦና እና ባህሪ (Emotions & Psychology) (Part 2)",
        "level": "B1",
        "objective": "Comprehensive mastery of ስሜታዊ መግለጫዎች (Emotions and Feelings).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ስሜታዊ መግለጫዎች (Emotions and Feelings) - ደረጃ 2) ተማሪዎች ስለ ስሜታዊ መግለጫዎች (Emotions and Feelings) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የስሜታዊ መግለጫዎች (Emotions and Feelings) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (16.2.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (16.2.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (16.2.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ስሜታዊ መግለጫዎች (Emotions and Feelings)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ስሜታዊ መግለጫዎች (Emotions and Feelings)» አጠቃቀም በደረጃ 2 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (16.2.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (16.2.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (16.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ስሜት፣ ስነ-ልቦና እና ባህሪ (Emotions & Psychology)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 2)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (16.2.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (16.2.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (16.2.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ስሜታዊ መግለጫዎች (Emotions and Feelings)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 16-2)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (16.2.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (16.2.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (16.2.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ደስታ_16_2»):",
                    "acceptedAnswers": [
                        "ደስታ_16_2"
                    ],
                    "explanation": "The target keyword was: 【ደስታ_16_2】"
                }
            ]
        }
    },
    "am-u16-l3": {
        "id": "am-u16-l3",
        "subject": "amharic",
        "unit": 16,
        "lessonNumber": 3,
        "title": "ስሜት፣ ስነ-ልቦና እና ባህሪ (Emotions & Psychology) (Part 3)",
        "level": "B1",
        "objective": "Comprehensive mastery of ስሜታዊ መግለጫዎች (Emotions and Feelings).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ስሜታዊ መግለጫዎች (Emotions and Feelings) - ደረጃ 3) ተማሪዎች ስለ ስሜታዊ መግለጫዎች (Emotions and Feelings) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የስሜታዊ መግለጫዎች (Emotions and Feelings) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (16.3.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (16.3.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (16.3.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ስሜታዊ መግለጫዎች (Emotions and Feelings)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ስሜታዊ መግለጫዎች (Emotions and Feelings)» አጠቃቀም በደረጃ 3 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (16.3.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (16.3.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (16.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ስሜት፣ ስነ-ልቦና እና ባህሪ (Emotions & Psychology)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 3)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (16.3.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (16.3.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (16.3.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ስሜታዊ መግለጫዎች (Emotions and Feelings)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 16-3)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (16.3.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (16.3.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (16.3.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ደስታ_16_3»):",
                    "acceptedAnswers": [
                        "ደስታ_16_3"
                    ],
                    "explanation": "The target keyword was: 【ደስታ_16_3】"
                }
            ]
        }
    },
    "am-u16-l4": {
        "id": "am-u16-l4",
        "subject": "amharic",
        "unit": 16,
        "lessonNumber": 4,
        "title": "ስሜት፣ ስነ-ልቦና እና ባህሪ (Emotions & Psychology) (Part 4)",
        "level": "B1",
        "objective": "Comprehensive mastery of ስሜታዊ መግለጫዎች (Emotions and Feelings).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ስሜታዊ መግለጫዎች (Emotions and Feelings) - ደረጃ 4) ተማሪዎች ስለ ስሜታዊ መግለጫዎች (Emotions and Feelings) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የስሜታዊ መግለጫዎች (Emotions and Feelings) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (16.4.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (16.4.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (16.4.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ስሜታዊ መግለጫዎች (Emotions and Feelings)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ስሜታዊ መግለጫዎች (Emotions and Feelings)» አጠቃቀም በደረጃ 4 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (16.4.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (16.4.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (16.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ስሜት፣ ስነ-ልቦና እና ባህሪ (Emotions & Psychology)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 4)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (16.4.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (16.4.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (16.4.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ስሜታዊ መግለጫዎች (Emotions and Feelings)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 16-4)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (16.4.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (16.4.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (16.4.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ደስታ_16_4»):",
                    "acceptedAnswers": [
                        "ደስታ_16_4"
                    ],
                    "explanation": "The target keyword was: 【ደስታ_16_4】"
                }
            ]
        }
    },
    "am-u16-l5": {
        "id": "am-u16-l5",
        "subject": "amharic",
        "unit": 16,
        "lessonNumber": 5,
        "title": "ስሜት፣ ስነ-ልቦና እና ባህሪ (Emotions & Psychology) (Part 5)",
        "level": "B1",
        "objective": "Comprehensive mastery of ስሜታዊ መግለጫዎች (Emotions and Feelings).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ስሜታዊ መግለጫዎች (Emotions and Feelings) - ደረጃ 5) ተማሪዎች ስለ ስሜታዊ መግለጫዎች (Emotions and Feelings) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የስሜታዊ መግለጫዎች (Emotions and Feelings) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (16.5.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (16.5.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (16.5.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ስሜታዊ መግለጫዎች (Emotions and Feelings)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ስሜታዊ መግለጫዎች (Emotions and Feelings)» አጠቃቀም በደረጃ 5 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (16.5.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (16.5.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (16.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ስሜት፣ ስነ-ልቦና እና ባህሪ (Emotions & Psychology)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 5)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (16.5.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (16.5.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (16.5.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ስሜታዊ መግለጫዎች (Emotions and Feelings)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 16-5)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (16.5.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (16.5.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (16.5.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ደስታ_16_5»):",
                    "acceptedAnswers": [
                        "ደስታ_16_5"
                    ],
                    "explanation": "The target keyword was: 【ደስታ_16_5】"
                }
            ]
        }
    },
    "am-u17-l1": {
        "id": "am-u17-l1",
        "subject": "amharic",
        "unit": 17,
        "lessonNumber": 1,
        "title": "የግስ ዝርያዎች፡ ተገብሮ ግስ (Passive Verb Derivations - ተ-) (Part 1)",
        "level": "B2",
        "objective": "Comprehensive mastery of ተገብሮ ግስ አወቃቀር (Passive Stems).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ተገብሮ ግስ አወቃቀር (Passive Stems) - ደረጃ 1) ተማሪዎች ስለ ተገብሮ ግስ አወቃቀር (Passive Stems) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የተገብሮ ግስ አወቃቀር (Passive Stems) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (17.1.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (17.1.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (17.1.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ተገብሮ ግስ አወቃቀር (Passive Stems)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ተገብሮ ግስ አወቃቀር (Passive Stems)» አጠቃቀም በደረጃ 1 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (17.1.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (17.1.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (17.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የግስ ዝርያዎች፡ ተገብሮ ግስ (Passive Verb Derivations - ተ-)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 1)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (17.1.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (17.1.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (17.1.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ተገብሮ ግስ አወቃቀር (Passive Stems)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 17-1)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (17.1.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (17.1.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (17.1.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ተጻፈ_17_1»):",
                    "acceptedAnswers": [
                        "ተጻፈ_17_1"
                    ],
                    "explanation": "The target keyword was: 【ተጻፈ_17_1】"
                }
            ]
        }
    },
    "am-u17-l2": {
        "id": "am-u17-l2",
        "subject": "amharic",
        "unit": 17,
        "lessonNumber": 2,
        "title": "የግስ ዝርያዎች፡ ተገብሮ ግስ (Passive Verb Derivations - ተ-) (Part 2)",
        "level": "B2",
        "objective": "Comprehensive mastery of ተገብሮ ግስ አወቃቀር (Passive Stems).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ተገብሮ ግስ አወቃቀር (Passive Stems) - ደረጃ 2) ተማሪዎች ስለ ተገብሮ ግስ አወቃቀር (Passive Stems) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የተገብሮ ግስ አወቃቀር (Passive Stems) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (17.2.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (17.2.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (17.2.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ተገብሮ ግስ አወቃቀር (Passive Stems)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ተገብሮ ግስ አወቃቀር (Passive Stems)» አጠቃቀም በደረጃ 2 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (17.2.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (17.2.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (17.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የግስ ዝርያዎች፡ ተገብሮ ግስ (Passive Verb Derivations - ተ-)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 2)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (17.2.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (17.2.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (17.2.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ተገብሮ ግስ አወቃቀር (Passive Stems)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 17-2)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (17.2.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (17.2.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (17.2.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ተጻፈ_17_2»):",
                    "acceptedAnswers": [
                        "ተጻፈ_17_2"
                    ],
                    "explanation": "The target keyword was: 【ተጻፈ_17_2】"
                }
            ]
        }
    },
    "am-u17-l3": {
        "id": "am-u17-l3",
        "subject": "amharic",
        "unit": 17,
        "lessonNumber": 3,
        "title": "የግስ ዝርያዎች፡ ተገብሮ ግስ (Passive Verb Derivations - ተ-) (Part 3)",
        "level": "B2",
        "objective": "Comprehensive mastery of ተገብሮ ግስ አወቃቀር (Passive Stems).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ተገብሮ ግስ አወቃቀር (Passive Stems) - ደረጃ 3) ተማሪዎች ስለ ተገብሮ ግስ አወቃቀር (Passive Stems) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የተገብሮ ግስ አወቃቀር (Passive Stems) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (17.3.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (17.3.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (17.3.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ተገብሮ ግስ አወቃቀር (Passive Stems)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ተገብሮ ግስ አወቃቀር (Passive Stems)» አጠቃቀም በደረጃ 3 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (17.3.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (17.3.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (17.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የግስ ዝርያዎች፡ ተገብሮ ግስ (Passive Verb Derivations - ተ-)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 3)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (17.3.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (17.3.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (17.3.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ተገብሮ ግስ አወቃቀር (Passive Stems)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 17-3)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (17.3.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (17.3.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (17.3.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ተጻፈ_17_3»):",
                    "acceptedAnswers": [
                        "ተጻፈ_17_3"
                    ],
                    "explanation": "The target keyword was: 【ተጻፈ_17_3】"
                }
            ]
        }
    },
    "am-u17-l4": {
        "id": "am-u17-l4",
        "subject": "amharic",
        "unit": 17,
        "lessonNumber": 4,
        "title": "የግስ ዝርያዎች፡ ተገብሮ ግስ (Passive Verb Derivations - ተ-) (Part 4)",
        "level": "B2",
        "objective": "Comprehensive mastery of ተገብሮ ግስ አወቃቀር (Passive Stems).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ተገብሮ ግስ አወቃቀር (Passive Stems) - ደረጃ 4) ተማሪዎች ስለ ተገብሮ ግስ አወቃቀር (Passive Stems) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የተገብሮ ግስ አወቃቀር (Passive Stems) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (17.4.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (17.4.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (17.4.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ተገብሮ ግስ አወቃቀር (Passive Stems)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ተገብሮ ግስ አወቃቀር (Passive Stems)» አጠቃቀም በደረጃ 4 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (17.4.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (17.4.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (17.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የግስ ዝርያዎች፡ ተገብሮ ግስ (Passive Verb Derivations - ተ-)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 4)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (17.4.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (17.4.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (17.4.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ተገብሮ ግስ አወቃቀር (Passive Stems)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 17-4)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (17.4.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (17.4.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (17.4.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ተጻፈ_17_4»):",
                    "acceptedAnswers": [
                        "ተጻፈ_17_4"
                    ],
                    "explanation": "The target keyword was: 【ተጻፈ_17_4】"
                }
            ]
        }
    },
    "am-u17-l5": {
        "id": "am-u17-l5",
        "subject": "amharic",
        "unit": 17,
        "lessonNumber": 5,
        "title": "የግስ ዝርያዎች፡ ተገብሮ ግስ (Passive Verb Derivations - ተ-) (Part 5)",
        "level": "B2",
        "objective": "Comprehensive mastery of ተገብሮ ግስ አወቃቀር (Passive Stems).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ተገብሮ ግስ አወቃቀር (Passive Stems) - ደረጃ 5) ተማሪዎች ስለ ተገብሮ ግስ አወቃቀር (Passive Stems) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የተገብሮ ግስ አወቃቀር (Passive Stems) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (17.5.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (17.5.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (17.5.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ተገብሮ ግስ አወቃቀር (Passive Stems)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ተገብሮ ግስ አወቃቀር (Passive Stems)» አጠቃቀም በደረጃ 5 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (17.5.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (17.5.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (17.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የግስ ዝርያዎች፡ ተገብሮ ግስ (Passive Verb Derivations - ተ-)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 5)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (17.5.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (17.5.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (17.5.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ተገብሮ ግስ አወቃቀር (Passive Stems)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 17-5)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (17.5.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (17.5.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (17.5.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ተጻፈ_17_5»):",
                    "acceptedAnswers": [
                        "ተጻፈ_17_5"
                    ],
                    "explanation": "The target keyword was: 【ተጻፈ_17_5】"
                }
            ]
        }
    },
    "am-u18-l1": {
        "id": "am-u18-l1",
        "subject": "amharic",
        "unit": 18,
        "lessonNumber": 1,
        "title": "የግስ ዝርያዎች፡ አሰሪ ግስ (Causative Derivations - አስ-) (Part 1)",
        "level": "B2",
        "objective": "Comprehensive mastery of አሰሪ ግስ አወቃቀር (Causative Stems).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (አሰሪ ግስ አወቃቀር (Causative Stems) - ደረጃ 1) ተማሪዎች ስለ አሰሪ ግስ አወቃቀር (Causative Stems) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የአሰሪ ግስ አወቃቀር (Causative Stems) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (18.1.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (18.1.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (18.1.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for አሰሪ ግስ አወቃቀር (Causative Stems)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «አሰሪ ግስ አወቃቀር (Causative Stems)» አጠቃቀም በደረጃ 1 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (18.1.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (18.1.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (18.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የግስ ዝርያዎች፡ አሰሪ ግስ (Causative Derivations - አስ-)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 1)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (18.1.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (18.1.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (18.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«አሰሪ ግስ አወቃቀር (Causative Stems)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 18-1)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (18.1.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (18.1.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (18.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («አሰራ_18_1»):",
                    "acceptedAnswers": [
                        "አሰራ_18_1"
                    ],
                    "explanation": "The target keyword was: 【አሰራ_18_1】"
                }
            ]
        }
    },
    "am-u18-l2": {
        "id": "am-u18-l2",
        "subject": "amharic",
        "unit": 18,
        "lessonNumber": 2,
        "title": "የግስ ዝርያዎች፡ አሰሪ ግስ (Causative Derivations - አስ-) (Part 2)",
        "level": "B2",
        "objective": "Comprehensive mastery of አሰሪ ግስ አወቃቀር (Causative Stems).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (አሰሪ ግስ አወቃቀር (Causative Stems) - ደረጃ 2) ተማሪዎች ስለ አሰሪ ግስ አወቃቀር (Causative Stems) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የአሰሪ ግስ አወቃቀር (Causative Stems) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (18.2.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (18.2.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (18.2.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for አሰሪ ግስ አወቃቀር (Causative Stems)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «አሰሪ ግስ አወቃቀር (Causative Stems)» አጠቃቀም በደረጃ 2 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (18.2.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (18.2.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (18.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የግስ ዝርያዎች፡ አሰሪ ግስ (Causative Derivations - አስ-)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 2)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (18.2.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (18.2.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (18.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«አሰሪ ግስ አወቃቀር (Causative Stems)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 18-2)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (18.2.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (18.2.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (18.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («አሰራ_18_2»):",
                    "acceptedAnswers": [
                        "አሰራ_18_2"
                    ],
                    "explanation": "The target keyword was: 【አሰራ_18_2】"
                }
            ]
        }
    },
    "am-u18-l3": {
        "id": "am-u18-l3",
        "subject": "amharic",
        "unit": 18,
        "lessonNumber": 3,
        "title": "የግስ ዝርያዎች፡ አሰሪ ግስ (Causative Derivations - አስ-) (Part 3)",
        "level": "B2",
        "objective": "Comprehensive mastery of አሰሪ ግስ አወቃቀር (Causative Stems).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (አሰሪ ግስ አወቃቀር (Causative Stems) - ደረጃ 3) ተማሪዎች ስለ አሰሪ ግስ አወቃቀር (Causative Stems) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የአሰሪ ግስ አወቃቀር (Causative Stems) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (18.3.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (18.3.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (18.3.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for አሰሪ ግስ አወቃቀር (Causative Stems)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «አሰሪ ግስ አወቃቀር (Causative Stems)» አጠቃቀም በደረጃ 3 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (18.3.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (18.3.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (18.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የግስ ዝርያዎች፡ አሰሪ ግስ (Causative Derivations - አስ-)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 3)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (18.3.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (18.3.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (18.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«አሰሪ ግስ አወቃቀር (Causative Stems)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 18-3)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (18.3.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (18.3.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (18.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («አሰራ_18_3»):",
                    "acceptedAnswers": [
                        "አሰራ_18_3"
                    ],
                    "explanation": "The target keyword was: 【አሰራ_18_3】"
                }
            ]
        }
    },
    "am-u18-l4": {
        "id": "am-u18-l4",
        "subject": "amharic",
        "unit": 18,
        "lessonNumber": 4,
        "title": "የግስ ዝርያዎች፡ አሰሪ ግስ (Causative Derivations - አስ-) (Part 4)",
        "level": "B2",
        "objective": "Comprehensive mastery of አሰሪ ግስ አወቃቀር (Causative Stems).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (አሰሪ ግስ አወቃቀር (Causative Stems) - ደረጃ 4) ተማሪዎች ስለ አሰሪ ግስ አወቃቀር (Causative Stems) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የአሰሪ ግስ አወቃቀር (Causative Stems) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (18.4.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (18.4.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (18.4.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for አሰሪ ግስ አወቃቀር (Causative Stems)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «አሰሪ ግስ አወቃቀር (Causative Stems)» አጠቃቀም በደረጃ 4 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (18.4.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (18.4.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (18.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የግስ ዝርያዎች፡ አሰሪ ግስ (Causative Derivations - አስ-)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 4)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (18.4.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (18.4.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (18.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«አሰሪ ግስ አወቃቀር (Causative Stems)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 18-4)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (18.4.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (18.4.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (18.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («አሰራ_18_4»):",
                    "acceptedAnswers": [
                        "አሰራ_18_4"
                    ],
                    "explanation": "The target keyword was: 【አሰራ_18_4】"
                }
            ]
        }
    },
    "am-u18-l5": {
        "id": "am-u18-l5",
        "subject": "amharic",
        "unit": 18,
        "lessonNumber": 5,
        "title": "የግስ ዝርያዎች፡ አሰሪ ግስ (Causative Derivations - አስ-) (Part 5)",
        "level": "B2",
        "objective": "Comprehensive mastery of አሰሪ ግስ አወቃቀር (Causative Stems).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (አሰሪ ግስ አወቃቀር (Causative Stems) - ደረጃ 5) ተማሪዎች ስለ አሰሪ ግስ አወቃቀር (Causative Stems) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የአሰሪ ግስ አወቃቀር (Causative Stems) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (18.5.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (18.5.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (18.5.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for አሰሪ ግስ አወቃቀር (Causative Stems)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «አሰሪ ግስ አወቃቀር (Causative Stems)» አጠቃቀም በደረጃ 5 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (18.5.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (18.5.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (18.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የግስ ዝርያዎች፡ አሰሪ ግስ (Causative Derivations - አስ-)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 5)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (18.5.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (18.5.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (18.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«አሰሪ ግስ አወቃቀር (Causative Stems)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 18-5)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (18.5.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (18.5.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (18.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («አሰራ_18_5»):",
                    "acceptedAnswers": [
                        "አሰራ_18_5"
                    ],
                    "explanation": "The target keyword was: 【አሰራ_18_5】"
                }
            ]
        }
    },
    "am-u19-l1": {
        "id": "am-u19-l1",
        "subject": "amharic",
        "unit": 19,
        "lessonNumber": 1,
        "title": "ቅጽሎች እና ንፅፅር (Comparative & Superlative Forms) (Part 1)",
        "level": "B2",
        "objective": "Comprehensive mastery of ንፅፅር እና ቅጽሎች (Comparatives).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ንፅፅር እና ቅጽሎች (Comparatives) - ደረጃ 1) ተማሪዎች ስለ ንፅፅር እና ቅጽሎች (Comparatives) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የንፅፅር እና ቅጽሎች (Comparatives) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (19.1.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (19.1.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (19.1.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ንፅፅር እና ቅጽሎች (Comparatives)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ንፅፅር እና ቅጽሎች (Comparatives)» አጠቃቀም በደረጃ 1 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (19.1.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (19.1.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (19.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ቅጽሎች እና ንፅፅር (Comparative & Superlative Forms)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 1)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (19.1.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (19.1.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (19.1.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ንፅፅር እና ቅጽሎች (Comparatives)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 19-1)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (19.1.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (19.1.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (19.1.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («የበለጠ_19_1»):",
                    "acceptedAnswers": [
                        "የበለጠ_19_1"
                    ],
                    "explanation": "The target keyword was: 【የበለጠ_19_1】"
                }
            ]
        }
    },
    "am-u19-l2": {
        "id": "am-u19-l2",
        "subject": "amharic",
        "unit": 19,
        "lessonNumber": 2,
        "title": "ቅጽሎች እና ንፅፅር (Comparative & Superlative Forms) (Part 2)",
        "level": "B2",
        "objective": "Comprehensive mastery of ንፅፅር እና ቅጽሎች (Comparatives).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ንፅፅር እና ቅጽሎች (Comparatives) - ደረጃ 2) ተማሪዎች ስለ ንፅፅር እና ቅጽሎች (Comparatives) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የንፅፅር እና ቅጽሎች (Comparatives) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (19.2.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (19.2.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (19.2.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ንፅፅር እና ቅጽሎች (Comparatives)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ንፅፅር እና ቅጽሎች (Comparatives)» አጠቃቀም በደረጃ 2 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (19.2.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (19.2.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (19.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ቅጽሎች እና ንፅፅር (Comparative & Superlative Forms)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 2)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (19.2.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (19.2.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (19.2.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ንፅፅር እና ቅጽሎች (Comparatives)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 19-2)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (19.2.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (19.2.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (19.2.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («የበለጠ_19_2»):",
                    "acceptedAnswers": [
                        "የበለጠ_19_2"
                    ],
                    "explanation": "The target keyword was: 【የበለጠ_19_2】"
                }
            ]
        }
    },
    "am-u19-l3": {
        "id": "am-u19-l3",
        "subject": "amharic",
        "unit": 19,
        "lessonNumber": 3,
        "title": "ቅጽሎች እና ንፅፅር (Comparative & Superlative Forms) (Part 3)",
        "level": "B2",
        "objective": "Comprehensive mastery of ንፅፅር እና ቅጽሎች (Comparatives).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ንፅፅር እና ቅጽሎች (Comparatives) - ደረጃ 3) ተማሪዎች ስለ ንፅፅር እና ቅጽሎች (Comparatives) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የንፅፅር እና ቅጽሎች (Comparatives) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (19.3.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (19.3.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (19.3.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ንፅፅር እና ቅጽሎች (Comparatives)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ንፅፅር እና ቅጽሎች (Comparatives)» አጠቃቀም በደረጃ 3 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (19.3.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (19.3.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (19.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ቅጽሎች እና ንፅፅር (Comparative & Superlative Forms)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 3)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (19.3.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (19.3.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (19.3.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ንፅፅር እና ቅጽሎች (Comparatives)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 19-3)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (19.3.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (19.3.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (19.3.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («የበለጠ_19_3»):",
                    "acceptedAnswers": [
                        "የበለጠ_19_3"
                    ],
                    "explanation": "The target keyword was: 【የበለጠ_19_3】"
                }
            ]
        }
    },
    "am-u19-l4": {
        "id": "am-u19-l4",
        "subject": "amharic",
        "unit": 19,
        "lessonNumber": 4,
        "title": "ቅጽሎች እና ንፅፅር (Comparative & Superlative Forms) (Part 4)",
        "level": "B2",
        "objective": "Comprehensive mastery of ንፅፅር እና ቅጽሎች (Comparatives).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ንፅፅር እና ቅጽሎች (Comparatives) - ደረጃ 4) ተማሪዎች ስለ ንፅፅር እና ቅጽሎች (Comparatives) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የንፅፅር እና ቅጽሎች (Comparatives) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (19.4.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (19.4.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (19.4.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ንፅፅር እና ቅጽሎች (Comparatives)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ንፅፅር እና ቅጽሎች (Comparatives)» አጠቃቀም በደረጃ 4 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (19.4.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (19.4.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (19.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ቅጽሎች እና ንፅፅር (Comparative & Superlative Forms)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 4)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (19.4.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (19.4.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (19.4.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ንፅፅር እና ቅጽሎች (Comparatives)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 19-4)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (19.4.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (19.4.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (19.4.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («የበለጠ_19_4»):",
                    "acceptedAnswers": [
                        "የበለጠ_19_4"
                    ],
                    "explanation": "The target keyword was: 【የበለጠ_19_4】"
                }
            ]
        }
    },
    "am-u19-l5": {
        "id": "am-u19-l5",
        "subject": "amharic",
        "unit": 19,
        "lessonNumber": 5,
        "title": "ቅጽሎች እና ንፅፅር (Comparative & Superlative Forms) (Part 5)",
        "level": "B2",
        "objective": "Comprehensive mastery of ንፅፅር እና ቅጽሎች (Comparatives).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ንፅፅር እና ቅጽሎች (Comparatives) - ደረጃ 5) ተማሪዎች ስለ ንፅፅር እና ቅጽሎች (Comparatives) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የንፅፅር እና ቅጽሎች (Comparatives) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (19.5.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (19.5.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (19.5.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ንፅፅር እና ቅጽሎች (Comparatives)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ንፅፅር እና ቅጽሎች (Comparatives)» አጠቃቀም በደረጃ 5 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (19.5.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (19.5.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (19.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ቅጽሎች እና ንፅፅር (Comparative & Superlative Forms)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 5)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (19.5.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (19.5.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (19.5.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ንፅፅር እና ቅጽሎች (Comparatives)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 19-5)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (19.5.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (19.5.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (19.5.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («የበለጠ_19_5»):",
                    "acceptedAnswers": [
                        "የበለጠ_19_5"
                    ],
                    "explanation": "The target keyword was: 【የበለጠ_19_5】"
                }
            ]
        }
    },
    "am-u20-l1": {
        "id": "am-u20-l1",
        "subject": "amharic",
        "unit": 20,
        "lessonNumber": 1,
        "title": "ተቀጥላ ዓረፍተ ነገሮች (Subordinate Clauses & Relative የ-) (Part 1)",
        "level": "B2",
        "objective": "Comprehensive mastery of አገናኝ መስተፃምሮች (Relative Clauses).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (አገናኝ መስተፃምሮች (Relative Clauses) - ደረጃ 1) ተማሪዎች ስለ አገናኝ መስተፃምሮች (Relative Clauses) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የአገናኝ መስተፃምሮች (Relative Clauses) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (20.1.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (20.1.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (20.1.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for አገናኝ መስተፃምሮች (Relative Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «አገናኝ መስተፃምሮች (Relative Clauses)» አጠቃቀም በደረጃ 1 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (20.1.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (20.1.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (20.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ተቀጥላ ዓረፍተ ነገሮች (Subordinate Clauses & Relative የ-)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 1)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (20.1.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (20.1.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (20.1.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«አገናኝ መስተፃምሮች (Relative Clauses)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 20-1)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (20.1.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (20.1.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (20.1.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («የመጣው_20_1»):",
                    "acceptedAnswers": [
                        "የመጣው_20_1"
                    ],
                    "explanation": "The target keyword was: 【የመጣው_20_1】"
                }
            ]
        }
    },
    "am-u20-l2": {
        "id": "am-u20-l2",
        "subject": "amharic",
        "unit": 20,
        "lessonNumber": 2,
        "title": "ተቀጥላ ዓረፍተ ነገሮች (Subordinate Clauses & Relative የ-) (Part 2)",
        "level": "B2",
        "objective": "Comprehensive mastery of አገናኝ መስተፃምሮች (Relative Clauses).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (አገናኝ መስተፃምሮች (Relative Clauses) - ደረጃ 2) ተማሪዎች ስለ አገናኝ መስተፃምሮች (Relative Clauses) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የአገናኝ መስተፃምሮች (Relative Clauses) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (20.2.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (20.2.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (20.2.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for አገናኝ መስተፃምሮች (Relative Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «አገናኝ መስተፃምሮች (Relative Clauses)» አጠቃቀም በደረጃ 2 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (20.2.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (20.2.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (20.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ተቀጥላ ዓረፍተ ነገሮች (Subordinate Clauses & Relative የ-)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 2)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (20.2.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (20.2.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (20.2.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«አገናኝ መስተፃምሮች (Relative Clauses)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 20-2)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (20.2.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (20.2.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (20.2.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («የመጣው_20_2»):",
                    "acceptedAnswers": [
                        "የመጣው_20_2"
                    ],
                    "explanation": "The target keyword was: 【የመጣው_20_2】"
                }
            ]
        }
    },
    "am-u20-l3": {
        "id": "am-u20-l3",
        "subject": "amharic",
        "unit": 20,
        "lessonNumber": 3,
        "title": "ተቀጥላ ዓረፍተ ነገሮች (Subordinate Clauses & Relative የ-) (Part 3)",
        "level": "B2",
        "objective": "Comprehensive mastery of አገናኝ መስተፃምሮች (Relative Clauses).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (አገናኝ መስተፃምሮች (Relative Clauses) - ደረጃ 3) ተማሪዎች ስለ አገናኝ መስተፃምሮች (Relative Clauses) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የአገናኝ መስተፃምሮች (Relative Clauses) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (20.3.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (20.3.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (20.3.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for አገናኝ መስተፃምሮች (Relative Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «አገናኝ መስተፃምሮች (Relative Clauses)» አጠቃቀም በደረጃ 3 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (20.3.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (20.3.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (20.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ተቀጥላ ዓረፍተ ነገሮች (Subordinate Clauses & Relative የ-)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 3)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (20.3.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (20.3.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (20.3.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«አገናኝ መስተፃምሮች (Relative Clauses)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 20-3)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (20.3.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (20.3.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (20.3.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («የመጣው_20_3»):",
                    "acceptedAnswers": [
                        "የመጣው_20_3"
                    ],
                    "explanation": "The target keyword was: 【የመጣው_20_3】"
                }
            ]
        }
    },
    "am-u20-l4": {
        "id": "am-u20-l4",
        "subject": "amharic",
        "unit": 20,
        "lessonNumber": 4,
        "title": "ተቀጥላ ዓረፍተ ነገሮች (Subordinate Clauses & Relative የ-) (Part 4)",
        "level": "B2",
        "objective": "Comprehensive mastery of አገናኝ መስተፃምሮች (Relative Clauses).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (አገናኝ መስተፃምሮች (Relative Clauses) - ደረጃ 4) ተማሪዎች ስለ አገናኝ መስተፃምሮች (Relative Clauses) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የአገናኝ መስተፃምሮች (Relative Clauses) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (20.4.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (20.4.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (20.4.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for አገናኝ መስተፃምሮች (Relative Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «አገናኝ መስተፃምሮች (Relative Clauses)» አጠቃቀም በደረጃ 4 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (20.4.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (20.4.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (20.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ተቀጥላ ዓረፍተ ነገሮች (Subordinate Clauses & Relative የ-)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 4)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (20.4.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (20.4.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (20.4.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«አገናኝ መስተፃምሮች (Relative Clauses)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 20-4)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (20.4.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (20.4.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (20.4.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («የመጣው_20_4»):",
                    "acceptedAnswers": [
                        "የመጣው_20_4"
                    ],
                    "explanation": "The target keyword was: 【የመጣው_20_4】"
                }
            ]
        }
    },
    "am-u20-l5": {
        "id": "am-u20-l5",
        "subject": "amharic",
        "unit": 20,
        "lessonNumber": 5,
        "title": "ተቀጥላ ዓረፍተ ነገሮች (Subordinate Clauses & Relative የ-) (Part 5)",
        "level": "B2",
        "objective": "Comprehensive mastery of አገናኝ መስተፃምሮች (Relative Clauses).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (አገናኝ መስተፃምሮች (Relative Clauses) - ደረጃ 5) ተማሪዎች ስለ አገናኝ መስተፃምሮች (Relative Clauses) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የአገናኝ መስተፃምሮች (Relative Clauses) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (20.5.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (20.5.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (20.5.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for አገናኝ መስተፃምሮች (Relative Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «አገናኝ መስተፃምሮች (Relative Clauses)» አጠቃቀም በደረጃ 5 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (20.5.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (20.5.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (20.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ተቀጥላ ዓረፍተ ነገሮች (Subordinate Clauses & Relative የ-)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 5)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (20.5.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (20.5.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (20.5.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«አገናኝ መስተፃምሮች (Relative Clauses)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 20-5)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (20.5.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (20.5.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (20.5.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («የመጣው_20_5»):",
                    "acceptedAnswers": [
                        "የመጣው_20_5"
                    ],
                    "explanation": "The target keyword was: 【የመጣው_20_5】"
                }
            ]
        }
    },
    "am-u21-l1": {
        "id": "am-u21-l1",
        "subject": "amharic",
        "unit": 21,
        "lessonNumber": 1,
        "title": "ሁኔታዊ እና ግምታዊ ዓረፍተ ነገሮች (Conditionals & Subjunctive) (Part 1)",
        "level": "B2",
        "objective": "Comprehensive mastery of ሁኔታዊ አገባቦች (Conditionals).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ሁኔታዊ አገባቦች (Conditionals) - ደረጃ 1) ተማሪዎች ስለ ሁኔታዊ አገባቦች (Conditionals) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የሁኔታዊ አገባቦች (Conditionals) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (21.1.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (21.1.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (21.1.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ሁኔታዊ አገባቦች (Conditionals)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ሁኔታዊ አገባቦች (Conditionals)» አጠቃቀም በደረጃ 1 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (21.1.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (21.1.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (21.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ሁኔታዊ እና ግምታዊ ዓረፍተ ነገሮች (Conditionals & Subjunctive)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 1)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (21.1.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (21.1.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (21.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ሁኔታዊ አገባቦች (Conditionals)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 21-1)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (21.1.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (21.1.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (21.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ቢመጣ_21_1»):",
                    "acceptedAnswers": [
                        "ቢመጣ_21_1"
                    ],
                    "explanation": "The target keyword was: 【ቢመጣ_21_1】"
                }
            ]
        }
    },
    "am-u21-l2": {
        "id": "am-u21-l2",
        "subject": "amharic",
        "unit": 21,
        "lessonNumber": 2,
        "title": "ሁኔታዊ እና ግምታዊ ዓረፍተ ነገሮች (Conditionals & Subjunctive) (Part 2)",
        "level": "B2",
        "objective": "Comprehensive mastery of ሁኔታዊ አገባቦች (Conditionals).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ሁኔታዊ አገባቦች (Conditionals) - ደረጃ 2) ተማሪዎች ስለ ሁኔታዊ አገባቦች (Conditionals) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የሁኔታዊ አገባቦች (Conditionals) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (21.2.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (21.2.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (21.2.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ሁኔታዊ አገባቦች (Conditionals)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ሁኔታዊ አገባቦች (Conditionals)» አጠቃቀም በደረጃ 2 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (21.2.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (21.2.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (21.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ሁኔታዊ እና ግምታዊ ዓረፍተ ነገሮች (Conditionals & Subjunctive)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 2)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (21.2.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (21.2.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (21.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ሁኔታዊ አገባቦች (Conditionals)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 21-2)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (21.2.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (21.2.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (21.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ቢመጣ_21_2»):",
                    "acceptedAnswers": [
                        "ቢመጣ_21_2"
                    ],
                    "explanation": "The target keyword was: 【ቢመጣ_21_2】"
                }
            ]
        }
    },
    "am-u21-l3": {
        "id": "am-u21-l3",
        "subject": "amharic",
        "unit": 21,
        "lessonNumber": 3,
        "title": "ሁኔታዊ እና ግምታዊ ዓረፍተ ነገሮች (Conditionals & Subjunctive) (Part 3)",
        "level": "B2",
        "objective": "Comprehensive mastery of ሁኔታዊ አገባቦች (Conditionals).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ሁኔታዊ አገባቦች (Conditionals) - ደረጃ 3) ተማሪዎች ስለ ሁኔታዊ አገባቦች (Conditionals) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የሁኔታዊ አገባቦች (Conditionals) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (21.3.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (21.3.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (21.3.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ሁኔታዊ አገባቦች (Conditionals)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ሁኔታዊ አገባቦች (Conditionals)» አጠቃቀም በደረጃ 3 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (21.3.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (21.3.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (21.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ሁኔታዊ እና ግምታዊ ዓረፍተ ነገሮች (Conditionals & Subjunctive)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 3)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (21.3.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (21.3.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (21.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ሁኔታዊ አገባቦች (Conditionals)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 21-3)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (21.3.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (21.3.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (21.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ቢመጣ_21_3»):",
                    "acceptedAnswers": [
                        "ቢመጣ_21_3"
                    ],
                    "explanation": "The target keyword was: 【ቢመጣ_21_3】"
                }
            ]
        }
    },
    "am-u21-l4": {
        "id": "am-u21-l4",
        "subject": "amharic",
        "unit": 21,
        "lessonNumber": 4,
        "title": "ሁኔታዊ እና ግምታዊ ዓረፍተ ነገሮች (Conditionals & Subjunctive) (Part 4)",
        "level": "B2",
        "objective": "Comprehensive mastery of ሁኔታዊ አገባቦች (Conditionals).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ሁኔታዊ አገባቦች (Conditionals) - ደረጃ 4) ተማሪዎች ስለ ሁኔታዊ አገባቦች (Conditionals) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የሁኔታዊ አገባቦች (Conditionals) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (21.4.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (21.4.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (21.4.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ሁኔታዊ አገባቦች (Conditionals)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ሁኔታዊ አገባቦች (Conditionals)» አጠቃቀም በደረጃ 4 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (21.4.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (21.4.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (21.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ሁኔታዊ እና ግምታዊ ዓረፍተ ነገሮች (Conditionals & Subjunctive)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 4)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (21.4.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (21.4.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (21.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ሁኔታዊ አገባቦች (Conditionals)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 21-4)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (21.4.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (21.4.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (21.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ቢመጣ_21_4»):",
                    "acceptedAnswers": [
                        "ቢመጣ_21_4"
                    ],
                    "explanation": "The target keyword was: 【ቢመጣ_21_4】"
                }
            ]
        }
    },
    "am-u21-l5": {
        "id": "am-u21-l5",
        "subject": "amharic",
        "unit": 21,
        "lessonNumber": 5,
        "title": "ሁኔታዊ እና ግምታዊ ዓረፍተ ነገሮች (Conditionals & Subjunctive) (Part 5)",
        "level": "B2",
        "objective": "Comprehensive mastery of ሁኔታዊ አገባቦች (Conditionals).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ሁኔታዊ አገባቦች (Conditionals) - ደረጃ 5) ተማሪዎች ስለ ሁኔታዊ አገባቦች (Conditionals) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የሁኔታዊ አገባቦች (Conditionals) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (21.5.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (21.5.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (21.5.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ሁኔታዊ አገባቦች (Conditionals)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ሁኔታዊ አገባቦች (Conditionals)» አጠቃቀም በደረጃ 5 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (21.5.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (21.5.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (21.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ሁኔታዊ እና ግምታዊ ዓረፍተ ነገሮች (Conditionals & Subjunctive)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 5)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (21.5.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (21.5.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (21.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ሁኔታዊ አገባቦች (Conditionals)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 21-5)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (21.5.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (21.5.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (21.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ቢመጣ_21_5»):",
                    "acceptedAnswers": [
                        "ቢመጣ_21_5"
                    ],
                    "explanation": "The target keyword was: 【ቢመጣ_21_5】"
                }
            ]
        }
    },
    "am-u22-l1": {
        "id": "am-u22-l1",
        "subject": "amharic",
        "unit": 22,
        "lessonNumber": 1,
        "title": "ቀጥተኛ ያልሆነ ንግግር (Reported Speech & Conjunctions) (Part 1)",
        "level": "B2",
        "objective": "Comprehensive mastery of ቀጥተኛ ያልሆነ ንግግር (Indirect Speech).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ቀጥተኛ ያልሆነ ንግግር (Indirect Speech) - ደረጃ 1) ተማሪዎች ስለ ቀጥተኛ ያልሆነ ንግግር (Indirect Speech) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የቀጥተኛ ያልሆነ ንግግር (Indirect Speech) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (22.1.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (22.1.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (22.1.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ቀጥተኛ ያልሆነ ንግግር (Indirect Speech)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ቀጥተኛ ያልሆነ ንግግር (Indirect Speech)» አጠቃቀም በደረጃ 1 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (22.1.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (22.1.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (22.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ቀጥተኛ ያልሆነ ንግግር (Reported Speech & Conjunctions)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 1)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (22.1.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (22.1.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (22.1.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ቀጥተኛ ያልሆነ ንግግር (Indirect Speech)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 22-1)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (22.1.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (22.1.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (22.1.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («አለ_22_1»):",
                    "acceptedAnswers": [
                        "አለ_22_1"
                    ],
                    "explanation": "The target keyword was: 【አለ_22_1】"
                }
            ]
        }
    },
    "am-u22-l2": {
        "id": "am-u22-l2",
        "subject": "amharic",
        "unit": 22,
        "lessonNumber": 2,
        "title": "ቀጥተኛ ያልሆነ ንግግር (Reported Speech & Conjunctions) (Part 2)",
        "level": "B2",
        "objective": "Comprehensive mastery of ቀጥተኛ ያልሆነ ንግግር (Indirect Speech).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ቀጥተኛ ያልሆነ ንግግር (Indirect Speech) - ደረጃ 2) ተማሪዎች ስለ ቀጥተኛ ያልሆነ ንግግር (Indirect Speech) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የቀጥተኛ ያልሆነ ንግግር (Indirect Speech) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (22.2.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (22.2.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (22.2.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ቀጥተኛ ያልሆነ ንግግር (Indirect Speech)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ቀጥተኛ ያልሆነ ንግግር (Indirect Speech)» አጠቃቀም በደረጃ 2 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (22.2.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (22.2.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (22.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ቀጥተኛ ያልሆነ ንግግር (Reported Speech & Conjunctions)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 2)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (22.2.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (22.2.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (22.2.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ቀጥተኛ ያልሆነ ንግግር (Indirect Speech)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 22-2)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (22.2.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (22.2.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (22.2.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («አለ_22_2»):",
                    "acceptedAnswers": [
                        "አለ_22_2"
                    ],
                    "explanation": "The target keyword was: 【አለ_22_2】"
                }
            ]
        }
    },
    "am-u22-l3": {
        "id": "am-u22-l3",
        "subject": "amharic",
        "unit": 22,
        "lessonNumber": 3,
        "title": "ቀጥተኛ ያልሆነ ንግግር (Reported Speech & Conjunctions) (Part 3)",
        "level": "B2",
        "objective": "Comprehensive mastery of ቀጥተኛ ያልሆነ ንግግር (Indirect Speech).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ቀጥተኛ ያልሆነ ንግግር (Indirect Speech) - ደረጃ 3) ተማሪዎች ስለ ቀጥተኛ ያልሆነ ንግግር (Indirect Speech) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የቀጥተኛ ያልሆነ ንግግር (Indirect Speech) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (22.3.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (22.3.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (22.3.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ቀጥተኛ ያልሆነ ንግግር (Indirect Speech)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ቀጥተኛ ያልሆነ ንግግር (Indirect Speech)» አጠቃቀም በደረጃ 3 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (22.3.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (22.3.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (22.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ቀጥተኛ ያልሆነ ንግግር (Reported Speech & Conjunctions)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 3)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (22.3.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (22.3.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (22.3.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ቀጥተኛ ያልሆነ ንግግር (Indirect Speech)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 22-3)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (22.3.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (22.3.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (22.3.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («አለ_22_3»):",
                    "acceptedAnswers": [
                        "አለ_22_3"
                    ],
                    "explanation": "The target keyword was: 【አለ_22_3】"
                }
            ]
        }
    },
    "am-u22-l4": {
        "id": "am-u22-l4",
        "subject": "amharic",
        "unit": 22,
        "lessonNumber": 4,
        "title": "ቀጥተኛ ያልሆነ ንግግር (Reported Speech & Conjunctions) (Part 4)",
        "level": "B2",
        "objective": "Comprehensive mastery of ቀጥተኛ ያልሆነ ንግግር (Indirect Speech).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ቀጥተኛ ያልሆነ ንግግር (Indirect Speech) - ደረጃ 4) ተማሪዎች ስለ ቀጥተኛ ያልሆነ ንግግር (Indirect Speech) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የቀጥተኛ ያልሆነ ንግግር (Indirect Speech) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (22.4.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (22.4.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (22.4.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ቀጥተኛ ያልሆነ ንግግር (Indirect Speech)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ቀጥተኛ ያልሆነ ንግግር (Indirect Speech)» አጠቃቀም በደረጃ 4 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (22.4.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (22.4.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (22.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ቀጥተኛ ያልሆነ ንግግር (Reported Speech & Conjunctions)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 4)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (22.4.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (22.4.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (22.4.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ቀጥተኛ ያልሆነ ንግግር (Indirect Speech)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 22-4)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (22.4.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (22.4.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (22.4.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («አለ_22_4»):",
                    "acceptedAnswers": [
                        "አለ_22_4"
                    ],
                    "explanation": "The target keyword was: 【አለ_22_4】"
                }
            ]
        }
    },
    "am-u22-l5": {
        "id": "am-u22-l5",
        "subject": "amharic",
        "unit": 22,
        "lessonNumber": 5,
        "title": "ቀጥተኛ ያልሆነ ንግግር (Reported Speech & Conjunctions) (Part 5)",
        "level": "B2",
        "objective": "Comprehensive mastery of ቀጥተኛ ያልሆነ ንግግር (Indirect Speech).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ቀጥተኛ ያልሆነ ንግግር (Indirect Speech) - ደረጃ 5) ተማሪዎች ስለ ቀጥተኛ ያልሆነ ንግግር (Indirect Speech) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የቀጥተኛ ያልሆነ ንግግር (Indirect Speech) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (22.5.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (22.5.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (22.5.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ቀጥተኛ ያልሆነ ንግግር (Indirect Speech)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ቀጥተኛ ያልሆነ ንግግር (Indirect Speech)» አጠቃቀም በደረጃ 5 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (22.5.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (22.5.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (22.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ቀጥተኛ ያልሆነ ንግግር (Reported Speech & Conjunctions)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 5)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (22.5.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (22.5.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (22.5.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ቀጥተኛ ያልሆነ ንግግር (Indirect Speech)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 22-5)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (22.5.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (22.5.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (22.5.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («አለ_22_5»):",
                    "acceptedAnswers": [
                        "አለ_22_5"
                    ],
                    "explanation": "The target keyword was: 【አለ_22_5】"
                }
            ]
        }
    },
    "am-u23-l1": {
        "id": "am-u23-l1",
        "subject": "amharic",
        "unit": 23,
        "lessonNumber": 1,
        "title": "የኢትዮጵያ ባህል እና ወጎች (Cultural Heritage & Coffee Ceremony) (Part 1)",
        "level": "B2",
        "objective": "Comprehensive mastery of የቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs) - ደረጃ 1) ተማሪዎች ስለ የቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (23.1.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (23.1.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (23.1.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs)» አጠቃቀም በደረጃ 1 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (23.1.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (23.1.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (23.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የኢትዮጵያ ባህል እና ወጎች (Cultural Heritage & Coffee Ceremony)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 1)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (23.1.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (23.1.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (23.1.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 23-1)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (23.1.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (23.1.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (23.1.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ቡና_23_1»):",
                    "acceptedAnswers": [
                        "ቡና_23_1"
                    ],
                    "explanation": "The target keyword was: 【ቡና_23_1】"
                }
            ]
        }
    },
    "am-u23-l2": {
        "id": "am-u23-l2",
        "subject": "amharic",
        "unit": 23,
        "lessonNumber": 2,
        "title": "የኢትዮጵያ ባህል እና ወጎች (Cultural Heritage & Coffee Ceremony) (Part 2)",
        "level": "B2",
        "objective": "Comprehensive mastery of የቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs) - ደረጃ 2) ተማሪዎች ስለ የቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (23.2.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (23.2.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (23.2.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs)» አጠቃቀም በደረጃ 2 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (23.2.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (23.2.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (23.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የኢትዮጵያ ባህል እና ወጎች (Cultural Heritage & Coffee Ceremony)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 2)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (23.2.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (23.2.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (23.2.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 23-2)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (23.2.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (23.2.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (23.2.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ቡና_23_2»):",
                    "acceptedAnswers": [
                        "ቡና_23_2"
                    ],
                    "explanation": "The target keyword was: 【ቡና_23_2】"
                }
            ]
        }
    },
    "am-u23-l3": {
        "id": "am-u23-l3",
        "subject": "amharic",
        "unit": 23,
        "lessonNumber": 3,
        "title": "የኢትዮጵያ ባህል እና ወጎች (Cultural Heritage & Coffee Ceremony) (Part 3)",
        "level": "B2",
        "objective": "Comprehensive mastery of የቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs) - ደረጃ 3) ተማሪዎች ስለ የቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (23.3.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (23.3.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (23.3.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs)» አጠቃቀም በደረጃ 3 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (23.3.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (23.3.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (23.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የኢትዮጵያ ባህል እና ወጎች (Cultural Heritage & Coffee Ceremony)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 3)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (23.3.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (23.3.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (23.3.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 23-3)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (23.3.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (23.3.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (23.3.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ቡና_23_3»):",
                    "acceptedAnswers": [
                        "ቡና_23_3"
                    ],
                    "explanation": "The target keyword was: 【ቡና_23_3】"
                }
            ]
        }
    },
    "am-u23-l4": {
        "id": "am-u23-l4",
        "subject": "amharic",
        "unit": 23,
        "lessonNumber": 4,
        "title": "የኢትዮጵያ ባህል እና ወጎች (Cultural Heritage & Coffee Ceremony) (Part 4)",
        "level": "B2",
        "objective": "Comprehensive mastery of የቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs) - ደረጃ 4) ተማሪዎች ስለ የቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (23.4.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (23.4.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (23.4.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs)» አጠቃቀም በደረጃ 4 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (23.4.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (23.4.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (23.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የኢትዮጵያ ባህል እና ወጎች (Cultural Heritage & Coffee Ceremony)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 4)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (23.4.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (23.4.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (23.4.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 23-4)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (23.4.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (23.4.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (23.4.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ቡና_23_4»):",
                    "acceptedAnswers": [
                        "ቡና_23_4"
                    ],
                    "explanation": "The target keyword was: 【ቡና_23_4】"
                }
            ]
        }
    },
    "am-u23-l5": {
        "id": "am-u23-l5",
        "subject": "amharic",
        "unit": 23,
        "lessonNumber": 5,
        "title": "የኢትዮጵያ ባህል እና ወጎች (Cultural Heritage & Coffee Ceremony) (Part 5)",
        "level": "B2",
        "objective": "Comprehensive mastery of የቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs) - ደረጃ 5) ተማሪዎች ስለ የቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (23.5.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (23.5.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (23.5.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs)» አጠቃቀም በደረጃ 5 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (23.5.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (23.5.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (23.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የኢትዮጵያ ባህል እና ወጎች (Cultural Heritage & Coffee Ceremony)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 5)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (23.5.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (23.5.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (23.5.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 23-5)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (23.5.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (23.5.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (23.5.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ቡና_23_5»):",
                    "acceptedAnswers": [
                        "ቡና_23_5"
                    ],
                    "explanation": "The target keyword was: 【ቡና_23_5】"
                }
            ]
        }
    },
    "am-u24-l1": {
        "id": "am-u24-l1",
        "subject": "amharic",
        "unit": 24,
        "lessonNumber": 1,
        "title": "ኪነ-ጥበብ፣ ሙዚቃ እና ስነ-ጽሁፍ (Arts, Music & Literature) (Part 1)",
        "level": "B2",
        "objective": "Comprehensive mastery of ስነ-ጽሁፍ እና ጥበብ (Literature and Arts).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ስነ-ጽሁፍ እና ጥበብ (Literature and Arts) - ደረጃ 1) ተማሪዎች ስለ ስነ-ጽሁፍ እና ጥበብ (Literature and Arts) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የስነ-ጽሁፍ እና ጥበብ (Literature and Arts) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (24.1.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (24.1.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (24.1.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ስነ-ጽሁፍ እና ጥበብ (Literature and Arts)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ስነ-ጽሁፍ እና ጥበብ (Literature and Arts)» አጠቃቀም በደረጃ 1 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (24.1.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (24.1.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (24.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ኪነ-ጥበብ፣ ሙዚቃ እና ስነ-ጽሁፍ (Arts, Music & Literature)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 1)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (24.1.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (24.1.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (24.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ስነ-ጽሁፍ እና ጥበብ (Literature and Arts)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 24-1)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (24.1.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (24.1.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (24.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ሙዚቃ_24_1»):",
                    "acceptedAnswers": [
                        "ሙዚቃ_24_1"
                    ],
                    "explanation": "The target keyword was: 【ሙዚቃ_24_1】"
                }
            ]
        }
    },
    "am-u24-l2": {
        "id": "am-u24-l2",
        "subject": "amharic",
        "unit": 24,
        "lessonNumber": 2,
        "title": "ኪነ-ጥበብ፣ ሙዚቃ እና ስነ-ጽሁፍ (Arts, Music & Literature) (Part 2)",
        "level": "B2",
        "objective": "Comprehensive mastery of ስነ-ጽሁፍ እና ጥበብ (Literature and Arts).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ስነ-ጽሁፍ እና ጥበብ (Literature and Arts) - ደረጃ 2) ተማሪዎች ስለ ስነ-ጽሁፍ እና ጥበብ (Literature and Arts) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የስነ-ጽሁፍ እና ጥበብ (Literature and Arts) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (24.2.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (24.2.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (24.2.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ስነ-ጽሁፍ እና ጥበብ (Literature and Arts)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ስነ-ጽሁፍ እና ጥበብ (Literature and Arts)» አጠቃቀም በደረጃ 2 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (24.2.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (24.2.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (24.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ኪነ-ጥበብ፣ ሙዚቃ እና ስነ-ጽሁፍ (Arts, Music & Literature)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 2)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (24.2.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (24.2.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (24.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ስነ-ጽሁፍ እና ጥበብ (Literature and Arts)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 24-2)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (24.2.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (24.2.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (24.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ሙዚቃ_24_2»):",
                    "acceptedAnswers": [
                        "ሙዚቃ_24_2"
                    ],
                    "explanation": "The target keyword was: 【ሙዚቃ_24_2】"
                }
            ]
        }
    },
    "am-u24-l3": {
        "id": "am-u24-l3",
        "subject": "amharic",
        "unit": 24,
        "lessonNumber": 3,
        "title": "ኪነ-ጥበብ፣ ሙዚቃ እና ስነ-ጽሁፍ (Arts, Music & Literature) (Part 3)",
        "level": "B2",
        "objective": "Comprehensive mastery of ስነ-ጽሁፍ እና ጥበብ (Literature and Arts).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ስነ-ጽሁፍ እና ጥበብ (Literature and Arts) - ደረጃ 3) ተማሪዎች ስለ ስነ-ጽሁፍ እና ጥበብ (Literature and Arts) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የስነ-ጽሁፍ እና ጥበብ (Literature and Arts) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (24.3.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (24.3.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (24.3.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ስነ-ጽሁፍ እና ጥበብ (Literature and Arts)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ስነ-ጽሁፍ እና ጥበብ (Literature and Arts)» አጠቃቀም በደረጃ 3 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (24.3.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (24.3.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (24.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ኪነ-ጥበብ፣ ሙዚቃ እና ስነ-ጽሁፍ (Arts, Music & Literature)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 3)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (24.3.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (24.3.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (24.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ስነ-ጽሁፍ እና ጥበብ (Literature and Arts)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 24-3)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (24.3.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (24.3.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (24.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ሙዚቃ_24_3»):",
                    "acceptedAnswers": [
                        "ሙዚቃ_24_3"
                    ],
                    "explanation": "The target keyword was: 【ሙዚቃ_24_3】"
                }
            ]
        }
    },
    "am-u24-l4": {
        "id": "am-u24-l4",
        "subject": "amharic",
        "unit": 24,
        "lessonNumber": 4,
        "title": "ኪነ-ጥበብ፣ ሙዚቃ እና ስነ-ጽሁፍ (Arts, Music & Literature) (Part 4)",
        "level": "B2",
        "objective": "Comprehensive mastery of ስነ-ጽሁፍ እና ጥበብ (Literature and Arts).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ስነ-ጽሁፍ እና ጥበብ (Literature and Arts) - ደረጃ 4) ተማሪዎች ስለ ስነ-ጽሁፍ እና ጥበብ (Literature and Arts) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የስነ-ጽሁፍ እና ጥበብ (Literature and Arts) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (24.4.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (24.4.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (24.4.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ስነ-ጽሁፍ እና ጥበብ (Literature and Arts)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ስነ-ጽሁፍ እና ጥበብ (Literature and Arts)» አጠቃቀም በደረጃ 4 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (24.4.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (24.4.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (24.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ኪነ-ጥበብ፣ ሙዚቃ እና ስነ-ጽሁፍ (Arts, Music & Literature)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 4)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (24.4.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (24.4.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (24.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ስነ-ጽሁፍ እና ጥበብ (Literature and Arts)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 24-4)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (24.4.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (24.4.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (24.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ሙዚቃ_24_4»):",
                    "acceptedAnswers": [
                        "ሙዚቃ_24_4"
                    ],
                    "explanation": "The target keyword was: 【ሙዚቃ_24_4】"
                }
            ]
        }
    },
    "am-u24-l5": {
        "id": "am-u24-l5",
        "subject": "amharic",
        "unit": 24,
        "lessonNumber": 5,
        "title": "ኪነ-ጥበብ፣ ሙዚቃ እና ስነ-ጽሁፍ (Arts, Music & Literature) (Part 5)",
        "level": "B2",
        "objective": "Comprehensive mastery of ስነ-ጽሁፍ እና ጥበብ (Literature and Arts).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ስነ-ጽሁፍ እና ጥበብ (Literature and Arts) - ደረጃ 5) ተማሪዎች ስለ ስነ-ጽሁፍ እና ጥበብ (Literature and Arts) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የስነ-ጽሁፍ እና ጥበብ (Literature and Arts) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (24.5.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (24.5.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (24.5.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ስነ-ጽሁፍ እና ጥበብ (Literature and Arts)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ስነ-ጽሁፍ እና ጥበብ (Literature and Arts)» አጠቃቀም በደረጃ 5 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (24.5.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (24.5.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (24.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ኪነ-ጥበብ፣ ሙዚቃ እና ስነ-ጽሁፍ (Arts, Music & Literature)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 5)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (24.5.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (24.5.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (24.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ስነ-ጽሁፍ እና ጥበብ (Literature and Arts)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 24-5)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (24.5.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (24.5.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (24.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ሙዚቃ_24_5»):",
                    "acceptedAnswers": [
                        "ሙዚቃ_24_5"
                    ],
                    "explanation": "The target keyword was: 【ሙዚቃ_24_5】"
                }
            ]
        }
    },
    "am-u25-l1": {
        "id": "am-u25-l1",
        "subject": "amharic",
        "unit": 25,
        "lessonNumber": 1,
        "title": "ታሪክ እና ጥንታዊ ቅርሶች (Ethiopian History & Ge'ez Roots) (Part 1)",
        "level": "C1",
        "objective": "Comprehensive mastery of ታሪክ እና ቅርሶች (History and Heritage).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ታሪክ እና ቅርሶች (History and Heritage) - ደረጃ 1) ተማሪዎች ስለ ታሪክ እና ቅርሶች (History and Heritage) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የታሪክ እና ቅርሶች (History and Heritage) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (25.1.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (25.1.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (25.1.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ታሪክ እና ቅርሶች (History and Heritage)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ታሪክ እና ቅርሶች (History and Heritage)» አጠቃቀም በደረጃ 1 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (25.1.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (25.1.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (25.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ታሪክ እና ጥንታዊ ቅርሶች (Ethiopian History & Ge'ez Roots)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 1)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (25.1.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (25.1.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (25.1.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ታሪክ እና ቅርሶች (History and Heritage)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 25-1)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (25.1.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (25.1.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (25.1.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ታሪክ_25_1»):",
                    "acceptedAnswers": [
                        "ታሪክ_25_1"
                    ],
                    "explanation": "The target keyword was: 【ታሪክ_25_1】"
                }
            ]
        }
    },
    "am-u25-l2": {
        "id": "am-u25-l2",
        "subject": "amharic",
        "unit": 25,
        "lessonNumber": 2,
        "title": "ታሪክ እና ጥንታዊ ቅርሶች (Ethiopian History & Ge'ez Roots) (Part 2)",
        "level": "C1",
        "objective": "Comprehensive mastery of ታሪክ እና ቅርሶች (History and Heritage).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ታሪክ እና ቅርሶች (History and Heritage) - ደረጃ 2) ተማሪዎች ስለ ታሪክ እና ቅርሶች (History and Heritage) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የታሪክ እና ቅርሶች (History and Heritage) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (25.2.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (25.2.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (25.2.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ታሪክ እና ቅርሶች (History and Heritage)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ታሪክ እና ቅርሶች (History and Heritage)» አጠቃቀም በደረጃ 2 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (25.2.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (25.2.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (25.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ታሪክ እና ጥንታዊ ቅርሶች (Ethiopian History & Ge'ez Roots)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 2)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (25.2.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (25.2.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (25.2.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ታሪክ እና ቅርሶች (History and Heritage)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 25-2)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (25.2.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (25.2.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (25.2.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ታሪክ_25_2»):",
                    "acceptedAnswers": [
                        "ታሪክ_25_2"
                    ],
                    "explanation": "The target keyword was: 【ታሪክ_25_2】"
                }
            ]
        }
    },
    "am-u25-l3": {
        "id": "am-u25-l3",
        "subject": "amharic",
        "unit": 25,
        "lessonNumber": 3,
        "title": "ታሪክ እና ጥንታዊ ቅርሶች (Ethiopian History & Ge'ez Roots) (Part 3)",
        "level": "C1",
        "objective": "Comprehensive mastery of ታሪክ እና ቅርሶች (History and Heritage).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ታሪክ እና ቅርሶች (History and Heritage) - ደረጃ 3) ተማሪዎች ስለ ታሪክ እና ቅርሶች (History and Heritage) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የታሪክ እና ቅርሶች (History and Heritage) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (25.3.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (25.3.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (25.3.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ታሪክ እና ቅርሶች (History and Heritage)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ታሪክ እና ቅርሶች (History and Heritage)» አጠቃቀም በደረጃ 3 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (25.3.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (25.3.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (25.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ታሪክ እና ጥንታዊ ቅርሶች (Ethiopian History & Ge'ez Roots)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 3)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (25.3.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (25.3.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (25.3.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ታሪክ እና ቅርሶች (History and Heritage)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 25-3)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (25.3.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (25.3.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (25.3.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ታሪክ_25_3»):",
                    "acceptedAnswers": [
                        "ታሪክ_25_3"
                    ],
                    "explanation": "The target keyword was: 【ታሪክ_25_3】"
                }
            ]
        }
    },
    "am-u25-l4": {
        "id": "am-u25-l4",
        "subject": "amharic",
        "unit": 25,
        "lessonNumber": 4,
        "title": "ታሪክ እና ጥንታዊ ቅርሶች (Ethiopian History & Ge'ez Roots) (Part 4)",
        "level": "C1",
        "objective": "Comprehensive mastery of ታሪክ እና ቅርሶች (History and Heritage).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ታሪክ እና ቅርሶች (History and Heritage) - ደረጃ 4) ተማሪዎች ስለ ታሪክ እና ቅርሶች (History and Heritage) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የታሪክ እና ቅርሶች (History and Heritage) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (25.4.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (25.4.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (25.4.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ታሪክ እና ቅርሶች (History and Heritage)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ታሪክ እና ቅርሶች (History and Heritage)» አጠቃቀም በደረጃ 4 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (25.4.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (25.4.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (25.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ታሪክ እና ጥንታዊ ቅርሶች (Ethiopian History & Ge'ez Roots)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 4)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (25.4.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (25.4.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (25.4.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ታሪክ እና ቅርሶች (History and Heritage)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 25-4)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (25.4.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (25.4.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (25.4.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ታሪክ_25_4»):",
                    "acceptedAnswers": [
                        "ታሪክ_25_4"
                    ],
                    "explanation": "The target keyword was: 【ታሪክ_25_4】"
                }
            ]
        }
    },
    "am-u25-l5": {
        "id": "am-u25-l5",
        "subject": "amharic",
        "unit": 25,
        "lessonNumber": 5,
        "title": "ታሪክ እና ጥንታዊ ቅርሶች (Ethiopian History & Ge'ez Roots) (Part 5)",
        "level": "C1",
        "objective": "Comprehensive mastery of ታሪክ እና ቅርሶች (History and Heritage).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ታሪክ እና ቅርሶች (History and Heritage) - ደረጃ 5) ተማሪዎች ስለ ታሪክ እና ቅርሶች (History and Heritage) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የታሪክ እና ቅርሶች (History and Heritage) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (25.5.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (25.5.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (25.5.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ታሪክ እና ቅርሶች (History and Heritage)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ታሪክ እና ቅርሶች (History and Heritage)» አጠቃቀም በደረጃ 5 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (25.5.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (25.5.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (25.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ታሪክ እና ጥንታዊ ቅርሶች (Ethiopian History & Ge'ez Roots)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 5)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (25.5.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (25.5.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (25.5.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ታሪክ እና ቅርሶች (History and Heritage)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 25-5)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (25.5.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (25.5.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (25.5.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ታሪክ_25_5»):",
                    "acceptedAnswers": [
                        "ታሪክ_25_5"
                    ],
                    "explanation": "The target keyword was: 【ታሪክ_25_5】"
                }
            ]
        }
    },
    "am-u26-l1": {
        "id": "am-u26-l1",
        "subject": "amharic",
        "unit": 26,
        "lessonNumber": 1,
        "title": "ህግ፣ አስተዳደር እና ፖለቲካ (Legal Terminology & Governance) (Part 1)",
        "level": "C1",
        "objective": "Comprehensive mastery of ህጋዊ ቃላት እና አስተዳደር (Legal Discourse).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ህጋዊ ቃላት እና አስተዳደር (Legal Discourse) - ደረጃ 1) ተማሪዎች ስለ ህጋዊ ቃላት እና አስተዳደር (Legal Discourse) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የህጋዊ ቃላት እና አስተዳደር (Legal Discourse) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (26.1.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (26.1.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (26.1.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ህጋዊ ቃላት እና አስተዳደር (Legal Discourse)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ህጋዊ ቃላት እና አስተዳደር (Legal Discourse)» አጠቃቀም በደረጃ 1 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (26.1.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (26.1.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (26.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ህግ፣ አስተዳደር እና ፖለቲካ (Legal Terminology & Governance)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 1)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (26.1.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (26.1.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (26.1.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ህጋዊ ቃላት እና አስተዳደር (Legal Discourse)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 26-1)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (26.1.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (26.1.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (26.1.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ህግ_26_1»):",
                    "acceptedAnswers": [
                        "ህግ_26_1"
                    ],
                    "explanation": "The target keyword was: 【ህግ_26_1】"
                }
            ]
        }
    },
    "am-u26-l2": {
        "id": "am-u26-l2",
        "subject": "amharic",
        "unit": 26,
        "lessonNumber": 2,
        "title": "ህግ፣ አስተዳደር እና ፖለቲካ (Legal Terminology & Governance) (Part 2)",
        "level": "C1",
        "objective": "Comprehensive mastery of ህጋዊ ቃላት እና አስተዳደር (Legal Discourse).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ህጋዊ ቃላት እና አስተዳደር (Legal Discourse) - ደረጃ 2) ተማሪዎች ስለ ህጋዊ ቃላት እና አስተዳደር (Legal Discourse) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የህጋዊ ቃላት እና አስተዳደር (Legal Discourse) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (26.2.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (26.2.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (26.2.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ህጋዊ ቃላት እና አስተዳደር (Legal Discourse)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ህጋዊ ቃላት እና አስተዳደር (Legal Discourse)» አጠቃቀም በደረጃ 2 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (26.2.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (26.2.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (26.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ህግ፣ አስተዳደር እና ፖለቲካ (Legal Terminology & Governance)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 2)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (26.2.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (26.2.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (26.2.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ህጋዊ ቃላት እና አስተዳደር (Legal Discourse)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 26-2)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (26.2.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (26.2.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (26.2.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ህግ_26_2»):",
                    "acceptedAnswers": [
                        "ህግ_26_2"
                    ],
                    "explanation": "The target keyword was: 【ህግ_26_2】"
                }
            ]
        }
    },
    "am-u26-l3": {
        "id": "am-u26-l3",
        "subject": "amharic",
        "unit": 26,
        "lessonNumber": 3,
        "title": "ህግ፣ አስተዳደር እና ፖለቲካ (Legal Terminology & Governance) (Part 3)",
        "level": "C1",
        "objective": "Comprehensive mastery of ህጋዊ ቃላት እና አስተዳደር (Legal Discourse).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ህጋዊ ቃላት እና አስተዳደር (Legal Discourse) - ደረጃ 3) ተማሪዎች ስለ ህጋዊ ቃላት እና አስተዳደር (Legal Discourse) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የህጋዊ ቃላት እና አስተዳደር (Legal Discourse) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (26.3.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (26.3.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (26.3.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ህጋዊ ቃላት እና አስተዳደር (Legal Discourse)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ህጋዊ ቃላት እና አስተዳደር (Legal Discourse)» አጠቃቀም በደረጃ 3 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (26.3.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (26.3.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (26.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ህግ፣ አስተዳደር እና ፖለቲካ (Legal Terminology & Governance)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 3)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (26.3.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (26.3.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (26.3.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ህጋዊ ቃላት እና አስተዳደር (Legal Discourse)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 26-3)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (26.3.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (26.3.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (26.3.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ህግ_26_3»):",
                    "acceptedAnswers": [
                        "ህግ_26_3"
                    ],
                    "explanation": "The target keyword was: 【ህግ_26_3】"
                }
            ]
        }
    },
    "am-u26-l4": {
        "id": "am-u26-l4",
        "subject": "amharic",
        "unit": 26,
        "lessonNumber": 4,
        "title": "ህግ፣ አስተዳደር እና ፖለቲካ (Legal Terminology & Governance) (Part 4)",
        "level": "C1",
        "objective": "Comprehensive mastery of ህጋዊ ቃላት እና አስተዳደር (Legal Discourse).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ህጋዊ ቃላት እና አስተዳደር (Legal Discourse) - ደረጃ 4) ተማሪዎች ስለ ህጋዊ ቃላት እና አስተዳደር (Legal Discourse) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የህጋዊ ቃላት እና አስተዳደር (Legal Discourse) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (26.4.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (26.4.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (26.4.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ህጋዊ ቃላት እና አስተዳደር (Legal Discourse)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ህጋዊ ቃላት እና አስተዳደር (Legal Discourse)» አጠቃቀም በደረጃ 4 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (26.4.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (26.4.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (26.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ህግ፣ አስተዳደር እና ፖለቲካ (Legal Terminology & Governance)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 4)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (26.4.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (26.4.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (26.4.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ህጋዊ ቃላት እና አስተዳደር (Legal Discourse)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 26-4)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (26.4.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (26.4.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (26.4.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ህግ_26_4»):",
                    "acceptedAnswers": [
                        "ህግ_26_4"
                    ],
                    "explanation": "The target keyword was: 【ህግ_26_4】"
                }
            ]
        }
    },
    "am-u26-l5": {
        "id": "am-u26-l5",
        "subject": "amharic",
        "unit": 26,
        "lessonNumber": 5,
        "title": "ህግ፣ አስተዳደር እና ፖለቲካ (Legal Terminology & Governance) (Part 5)",
        "level": "C1",
        "objective": "Comprehensive mastery of ህጋዊ ቃላት እና አስተዳደር (Legal Discourse).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ህጋዊ ቃላት እና አስተዳደር (Legal Discourse) - ደረጃ 5) ተማሪዎች ስለ ህጋዊ ቃላት እና አስተዳደር (Legal Discourse) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የህጋዊ ቃላት እና አስተዳደር (Legal Discourse) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (26.5.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (26.5.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (26.5.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ህጋዊ ቃላት እና አስተዳደር (Legal Discourse)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ህጋዊ ቃላት እና አስተዳደር (Legal Discourse)» አጠቃቀም በደረጃ 5 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (26.5.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (26.5.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (26.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ህግ፣ አስተዳደር እና ፖለቲካ (Legal Terminology & Governance)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 5)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (26.5.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (26.5.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (26.5.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ህጋዊ ቃላት እና አስተዳደር (Legal Discourse)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 26-5)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (26.5.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (26.5.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (26.5.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ህግ_26_5»):",
                    "acceptedAnswers": [
                        "ህግ_26_5"
                    ],
                    "explanation": "The target keyword was: 【ህግ_26_5】"
                }
            ]
        }
    },
    "am-u27-l1": {
        "id": "am-u27-l1",
        "subject": "amharic",
        "unit": 27,
        "lessonNumber": 1,
        "title": "ኢኮኖሚ፣ ንግድ እና ፋይናንስ (Economics & Banking) (Part 1)",
        "level": "C1",
        "objective": "Comprehensive mastery of የኢኮኖሚ ትንተና (Economics and Banking).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የኢኮኖሚ ትንተና (Economics and Banking) - ደረጃ 1) ተማሪዎች ስለ የኢኮኖሚ ትንተና (Economics and Banking) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየኢኮኖሚ ትንተና (Economics and Banking) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (27.1.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (27.1.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (27.1.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የኢኮኖሚ ትንተና (Economics and Banking)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የኢኮኖሚ ትንተና (Economics and Banking)» አጠቃቀም በደረጃ 1 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (27.1.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (27.1.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (27.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ኢኮኖሚ፣ ንግድ እና ፋይናንስ (Economics & Banking)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 1)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (27.1.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (27.1.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (27.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የኢኮኖሚ ትንተና (Economics and Banking)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 27-1)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (27.1.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (27.1.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (27.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ባንክ_27_1»):",
                    "acceptedAnswers": [
                        "ባንክ_27_1"
                    ],
                    "explanation": "The target keyword was: 【ባንክ_27_1】"
                }
            ]
        }
    },
    "am-u27-l2": {
        "id": "am-u27-l2",
        "subject": "amharic",
        "unit": 27,
        "lessonNumber": 2,
        "title": "ኢኮኖሚ፣ ንግድ እና ፋይናንስ (Economics & Banking) (Part 2)",
        "level": "C1",
        "objective": "Comprehensive mastery of የኢኮኖሚ ትንተና (Economics and Banking).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የኢኮኖሚ ትንተና (Economics and Banking) - ደረጃ 2) ተማሪዎች ስለ የኢኮኖሚ ትንተና (Economics and Banking) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየኢኮኖሚ ትንተና (Economics and Banking) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (27.2.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (27.2.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (27.2.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የኢኮኖሚ ትንተና (Economics and Banking)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የኢኮኖሚ ትንተና (Economics and Banking)» አጠቃቀም በደረጃ 2 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (27.2.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (27.2.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (27.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ኢኮኖሚ፣ ንግድ እና ፋይናንስ (Economics & Banking)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 2)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (27.2.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (27.2.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (27.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የኢኮኖሚ ትንተና (Economics and Banking)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 27-2)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (27.2.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (27.2.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (27.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ባንክ_27_2»):",
                    "acceptedAnswers": [
                        "ባንክ_27_2"
                    ],
                    "explanation": "The target keyword was: 【ባንክ_27_2】"
                }
            ]
        }
    },
    "am-u27-l3": {
        "id": "am-u27-l3",
        "subject": "amharic",
        "unit": 27,
        "lessonNumber": 3,
        "title": "ኢኮኖሚ፣ ንግድ እና ፋይናንስ (Economics & Banking) (Part 3)",
        "level": "C1",
        "objective": "Comprehensive mastery of የኢኮኖሚ ትንተና (Economics and Banking).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የኢኮኖሚ ትንተና (Economics and Banking) - ደረጃ 3) ተማሪዎች ስለ የኢኮኖሚ ትንተና (Economics and Banking) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየኢኮኖሚ ትንተና (Economics and Banking) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (27.3.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (27.3.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (27.3.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የኢኮኖሚ ትንተና (Economics and Banking)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የኢኮኖሚ ትንተና (Economics and Banking)» አጠቃቀም በደረጃ 3 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (27.3.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (27.3.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (27.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ኢኮኖሚ፣ ንግድ እና ፋይናንስ (Economics & Banking)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 3)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (27.3.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (27.3.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (27.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የኢኮኖሚ ትንተና (Economics and Banking)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 27-3)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (27.3.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (27.3.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (27.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ባንክ_27_3»):",
                    "acceptedAnswers": [
                        "ባንክ_27_3"
                    ],
                    "explanation": "The target keyword was: 【ባንክ_27_3】"
                }
            ]
        }
    },
    "am-u27-l4": {
        "id": "am-u27-l4",
        "subject": "amharic",
        "unit": 27,
        "lessonNumber": 4,
        "title": "ኢኮኖሚ፣ ንግድ እና ፋይናንስ (Economics & Banking) (Part 4)",
        "level": "C1",
        "objective": "Comprehensive mastery of የኢኮኖሚ ትንተና (Economics and Banking).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የኢኮኖሚ ትንተና (Economics and Banking) - ደረጃ 4) ተማሪዎች ስለ የኢኮኖሚ ትንተና (Economics and Banking) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየኢኮኖሚ ትንተና (Economics and Banking) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (27.4.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (27.4.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (27.4.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የኢኮኖሚ ትንተና (Economics and Banking)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የኢኮኖሚ ትንተና (Economics and Banking)» አጠቃቀም በደረጃ 4 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (27.4.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (27.4.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (27.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ኢኮኖሚ፣ ንግድ እና ፋይናንስ (Economics & Banking)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 4)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (27.4.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (27.4.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (27.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የኢኮኖሚ ትንተና (Economics and Banking)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 27-4)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (27.4.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (27.4.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (27.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ባንክ_27_4»):",
                    "acceptedAnswers": [
                        "ባንክ_27_4"
                    ],
                    "explanation": "The target keyword was: 【ባንክ_27_4】"
                }
            ]
        }
    },
    "am-u27-l5": {
        "id": "am-u27-l5",
        "subject": "amharic",
        "unit": 27,
        "lessonNumber": 5,
        "title": "ኢኮኖሚ፣ ንግድ እና ፋይናንስ (Economics & Banking) (Part 5)",
        "level": "C1",
        "objective": "Comprehensive mastery of የኢኮኖሚ ትንተና (Economics and Banking).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የኢኮኖሚ ትንተና (Economics and Banking) - ደረጃ 5) ተማሪዎች ስለ የኢኮኖሚ ትንተና (Economics and Banking) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየኢኮኖሚ ትንተና (Economics and Banking) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (27.5.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (27.5.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (27.5.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የኢኮኖሚ ትንተና (Economics and Banking)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የኢኮኖሚ ትንተና (Economics and Banking)» አጠቃቀም በደረጃ 5 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (27.5.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (27.5.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (27.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ኢኮኖሚ፣ ንግድ እና ፋይናንስ (Economics & Banking)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 5)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (27.5.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (27.5.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (27.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የኢኮኖሚ ትንተና (Economics and Banking)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 27-5)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (27.5.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (27.5.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (27.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ባንክ_27_5»):",
                    "acceptedAnswers": [
                        "ባንክ_27_5"
                    ],
                    "explanation": "The target keyword was: 【ባንክ_27_5】"
                }
            ]
        }
    },
    "am-u28-l1": {
        "id": "am-u28-l1",
        "subject": "amharic",
        "unit": 28,
        "lessonNumber": 1,
        "title": "ሚዲያ፣ ጋዜጠኝነት እና ግንኙነት (Media & Journalism) (Part 1)",
        "level": "C1",
        "objective": "Comprehensive mastery of ጋዜጠኝነት እና ዜና (Journalism and Media).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ጋዜጠኝነት እና ዜና (Journalism and Media) - ደረጃ 1) ተማሪዎች ስለ ጋዜጠኝነት እና ዜና (Journalism and Media) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የጋዜጠኝነት እና ዜና (Journalism and Media) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (28.1.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (28.1.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (28.1.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ጋዜጠኝነት እና ዜና (Journalism and Media)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ጋዜጠኝነት እና ዜና (Journalism and Media)» አጠቃቀም በደረጃ 1 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (28.1.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (28.1.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (28.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ሚዲያ፣ ጋዜጠኝነት እና ግንኙነት (Media & Journalism)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 1)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (28.1.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (28.1.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (28.1.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ጋዜጠኝነት እና ዜና (Journalism and Media)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 28-1)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (28.1.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (28.1.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (28.1.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ጋዜጣ_28_1»):",
                    "acceptedAnswers": [
                        "ጋዜጣ_28_1"
                    ],
                    "explanation": "The target keyword was: 【ጋዜጣ_28_1】"
                }
            ]
        }
    },
    "am-u28-l2": {
        "id": "am-u28-l2",
        "subject": "amharic",
        "unit": 28,
        "lessonNumber": 2,
        "title": "ሚዲያ፣ ጋዜጠኝነት እና ግንኙነት (Media & Journalism) (Part 2)",
        "level": "C1",
        "objective": "Comprehensive mastery of ጋዜጠኝነት እና ዜና (Journalism and Media).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ጋዜጠኝነት እና ዜና (Journalism and Media) - ደረጃ 2) ተማሪዎች ስለ ጋዜጠኝነት እና ዜና (Journalism and Media) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የጋዜጠኝነት እና ዜና (Journalism and Media) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (28.2.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (28.2.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (28.2.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ጋዜጠኝነት እና ዜና (Journalism and Media)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ጋዜጠኝነት እና ዜና (Journalism and Media)» አጠቃቀም በደረጃ 2 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (28.2.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (28.2.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (28.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ሚዲያ፣ ጋዜጠኝነት እና ግንኙነት (Media & Journalism)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 2)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (28.2.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (28.2.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (28.2.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ጋዜጠኝነት እና ዜና (Journalism and Media)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 28-2)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (28.2.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (28.2.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (28.2.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ጋዜጣ_28_2»):",
                    "acceptedAnswers": [
                        "ጋዜጣ_28_2"
                    ],
                    "explanation": "The target keyword was: 【ጋዜጣ_28_2】"
                }
            ]
        }
    },
    "am-u28-l3": {
        "id": "am-u28-l3",
        "subject": "amharic",
        "unit": 28,
        "lessonNumber": 3,
        "title": "ሚዲያ፣ ጋዜጠኝነት እና ግንኙነት (Media & Journalism) (Part 3)",
        "level": "C1",
        "objective": "Comprehensive mastery of ጋዜጠኝነት እና ዜና (Journalism and Media).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ጋዜጠኝነት እና ዜና (Journalism and Media) - ደረጃ 3) ተማሪዎች ስለ ጋዜጠኝነት እና ዜና (Journalism and Media) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የጋዜጠኝነት እና ዜና (Journalism and Media) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (28.3.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (28.3.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (28.3.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ጋዜጠኝነት እና ዜና (Journalism and Media)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ጋዜጠኝነት እና ዜና (Journalism and Media)» አጠቃቀም በደረጃ 3 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (28.3.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (28.3.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (28.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ሚዲያ፣ ጋዜጠኝነት እና ግንኙነት (Media & Journalism)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 3)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (28.3.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (28.3.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (28.3.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ጋዜጠኝነት እና ዜና (Journalism and Media)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 28-3)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (28.3.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (28.3.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (28.3.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ጋዜጣ_28_3»):",
                    "acceptedAnswers": [
                        "ጋዜጣ_28_3"
                    ],
                    "explanation": "The target keyword was: 【ጋዜጣ_28_3】"
                }
            ]
        }
    },
    "am-u28-l4": {
        "id": "am-u28-l4",
        "subject": "amharic",
        "unit": 28,
        "lessonNumber": 4,
        "title": "ሚዲያ፣ ጋዜጠኝነት እና ግንኙነት (Media & Journalism) (Part 4)",
        "level": "C1",
        "objective": "Comprehensive mastery of ጋዜጠኝነት እና ዜና (Journalism and Media).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ጋዜጠኝነት እና ዜና (Journalism and Media) - ደረጃ 4) ተማሪዎች ስለ ጋዜጠኝነት እና ዜና (Journalism and Media) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የጋዜጠኝነት እና ዜና (Journalism and Media) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (28.4.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (28.4.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (28.4.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ጋዜጠኝነት እና ዜና (Journalism and Media)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ጋዜጠኝነት እና ዜና (Journalism and Media)» አጠቃቀም በደረጃ 4 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (28.4.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (28.4.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (28.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ሚዲያ፣ ጋዜጠኝነት እና ግንኙነት (Media & Journalism)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 4)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (28.4.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (28.4.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (28.4.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ጋዜጠኝነት እና ዜና (Journalism and Media)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 28-4)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (28.4.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (28.4.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (28.4.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ጋዜጣ_28_4»):",
                    "acceptedAnswers": [
                        "ጋዜጣ_28_4"
                    ],
                    "explanation": "The target keyword was: 【ጋዜጣ_28_4】"
                }
            ]
        }
    },
    "am-u28-l5": {
        "id": "am-u28-l5",
        "subject": "amharic",
        "unit": 28,
        "lessonNumber": 5,
        "title": "ሚዲያ፣ ጋዜጠኝነት እና ግንኙነት (Media & Journalism) (Part 5)",
        "level": "C1",
        "objective": "Comprehensive mastery of ጋዜጠኝነት እና ዜና (Journalism and Media).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ጋዜጠኝነት እና ዜና (Journalism and Media) - ደረጃ 5) ተማሪዎች ስለ ጋዜጠኝነት እና ዜና (Journalism and Media) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የጋዜጠኝነት እና ዜና (Journalism and Media) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (28.5.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (28.5.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (28.5.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ጋዜጠኝነት እና ዜና (Journalism and Media)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ጋዜጠኝነት እና ዜና (Journalism and Media)» አጠቃቀም በደረጃ 5 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (28.5.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (28.5.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (28.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ሚዲያ፣ ጋዜጠኝነት እና ግንኙነት (Media & Journalism)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 5)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (28.5.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (28.5.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (28.5.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ጋዜጠኝነት እና ዜና (Journalism and Media)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 28-5)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (28.5.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (28.5.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (28.5.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ጋዜጣ_28_5»):",
                    "acceptedAnswers": [
                        "ጋዜጣ_28_5"
                    ],
                    "explanation": "The target keyword was: 【ጋዜጣ_28_5】"
                }
            ]
        }
    },
    "am-u29-l1": {
        "id": "am-u29-l1",
        "subject": "amharic",
        "unit": 29,
        "lessonNumber": 1,
        "title": "አካባቢ ጥበቃ እና ዘላቂ ልማት (Ecology & Sustainable Development) (Part 1)",
        "level": "C1",
        "objective": "Comprehensive mastery of የአካባቢ ጥበቃ (Environmental Science).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የአካባቢ ጥበቃ (Environmental Science) - ደረጃ 1) ተማሪዎች ስለ የአካባቢ ጥበቃ (Environmental Science) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየአካባቢ ጥበቃ (Environmental Science) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (29.1.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (29.1.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (29.1.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የአካባቢ ጥበቃ (Environmental Science)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የአካባቢ ጥበቃ (Environmental Science)» አጠቃቀም በደረጃ 1 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (29.1.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (29.1.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (29.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«አካባቢ ጥበቃ እና ዘላቂ ልማት (Ecology & Sustainable Development)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 1)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (29.1.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (29.1.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (29.1.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የአካባቢ ጥበቃ (Environmental Science)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 29-1)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (29.1.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (29.1.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (29.1.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ደን_29_1»):",
                    "acceptedAnswers": [
                        "ደን_29_1"
                    ],
                    "explanation": "The target keyword was: 【ደን_29_1】"
                }
            ]
        }
    },
    "am-u29-l2": {
        "id": "am-u29-l2",
        "subject": "amharic",
        "unit": 29,
        "lessonNumber": 2,
        "title": "አካባቢ ጥበቃ እና ዘላቂ ልማት (Ecology & Sustainable Development) (Part 2)",
        "level": "C1",
        "objective": "Comprehensive mastery of የአካባቢ ጥበቃ (Environmental Science).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የአካባቢ ጥበቃ (Environmental Science) - ደረጃ 2) ተማሪዎች ስለ የአካባቢ ጥበቃ (Environmental Science) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየአካባቢ ጥበቃ (Environmental Science) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (29.2.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (29.2.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (29.2.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የአካባቢ ጥበቃ (Environmental Science)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የአካባቢ ጥበቃ (Environmental Science)» አጠቃቀም በደረጃ 2 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (29.2.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (29.2.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (29.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«አካባቢ ጥበቃ እና ዘላቂ ልማት (Ecology & Sustainable Development)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 2)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (29.2.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (29.2.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (29.2.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የአካባቢ ጥበቃ (Environmental Science)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 29-2)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (29.2.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (29.2.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (29.2.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ደን_29_2»):",
                    "acceptedAnswers": [
                        "ደን_29_2"
                    ],
                    "explanation": "The target keyword was: 【ደን_29_2】"
                }
            ]
        }
    },
    "am-u29-l3": {
        "id": "am-u29-l3",
        "subject": "amharic",
        "unit": 29,
        "lessonNumber": 3,
        "title": "አካባቢ ጥበቃ እና ዘላቂ ልማት (Ecology & Sustainable Development) (Part 3)",
        "level": "C1",
        "objective": "Comprehensive mastery of የአካባቢ ጥበቃ (Environmental Science).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የአካባቢ ጥበቃ (Environmental Science) - ደረጃ 3) ተማሪዎች ስለ የአካባቢ ጥበቃ (Environmental Science) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየአካባቢ ጥበቃ (Environmental Science) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (29.3.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (29.3.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (29.3.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የአካባቢ ጥበቃ (Environmental Science)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የአካባቢ ጥበቃ (Environmental Science)» አጠቃቀም በደረጃ 3 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (29.3.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (29.3.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (29.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«አካባቢ ጥበቃ እና ዘላቂ ልማት (Ecology & Sustainable Development)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 3)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (29.3.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (29.3.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (29.3.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የአካባቢ ጥበቃ (Environmental Science)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 29-3)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (29.3.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (29.3.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (29.3.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ደን_29_3»):",
                    "acceptedAnswers": [
                        "ደን_29_3"
                    ],
                    "explanation": "The target keyword was: 【ደን_29_3】"
                }
            ]
        }
    },
    "am-u29-l4": {
        "id": "am-u29-l4",
        "subject": "amharic",
        "unit": 29,
        "lessonNumber": 4,
        "title": "አካባቢ ጥበቃ እና ዘላቂ ልማት (Ecology & Sustainable Development) (Part 4)",
        "level": "C1",
        "objective": "Comprehensive mastery of የአካባቢ ጥበቃ (Environmental Science).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የአካባቢ ጥበቃ (Environmental Science) - ደረጃ 4) ተማሪዎች ስለ የአካባቢ ጥበቃ (Environmental Science) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየአካባቢ ጥበቃ (Environmental Science) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (29.4.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (29.4.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (29.4.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የአካባቢ ጥበቃ (Environmental Science)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የአካባቢ ጥበቃ (Environmental Science)» አጠቃቀም በደረጃ 4 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (29.4.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (29.4.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (29.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«አካባቢ ጥበቃ እና ዘላቂ ልማት (Ecology & Sustainable Development)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 4)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (29.4.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (29.4.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (29.4.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የአካባቢ ጥበቃ (Environmental Science)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 29-4)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (29.4.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (29.4.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (29.4.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ደን_29_4»):",
                    "acceptedAnswers": [
                        "ደን_29_4"
                    ],
                    "explanation": "The target keyword was: 【ደን_29_4】"
                }
            ]
        }
    },
    "am-u29-l5": {
        "id": "am-u29-l5",
        "subject": "amharic",
        "unit": 29,
        "lessonNumber": 5,
        "title": "አካባቢ ጥበቃ እና ዘላቂ ልማት (Ecology & Sustainable Development) (Part 5)",
        "level": "C1",
        "objective": "Comprehensive mastery of የአካባቢ ጥበቃ (Environmental Science).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የአካባቢ ጥበቃ (Environmental Science) - ደረጃ 5) ተማሪዎች ስለ የአካባቢ ጥበቃ (Environmental Science) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየአካባቢ ጥበቃ (Environmental Science) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (29.5.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (29.5.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (29.5.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የአካባቢ ጥበቃ (Environmental Science)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የአካባቢ ጥበቃ (Environmental Science)» አጠቃቀም በደረጃ 5 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (29.5.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (29.5.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (29.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«አካባቢ ጥበቃ እና ዘላቂ ልማት (Ecology & Sustainable Development)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 5)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (29.5.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (29.5.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (29.5.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የአካባቢ ጥበቃ (Environmental Science)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 29-5)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (29.5.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (29.5.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (29.5.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ደን_29_5»):",
                    "acceptedAnswers": [
                        "ደን_29_5"
                    ],
                    "explanation": "The target keyword was: 【ደን_29_5】"
                }
            ]
        }
    },
    "am-u30-l1": {
        "id": "am-u30-l1",
        "subject": "amharic",
        "unit": 30,
        "lessonNumber": 1,
        "title": "ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics) (Part 1)",
        "level": "C1",
        "objective": "Comprehensive mastery of ፍልስፍናዊ አስተሳሰብ (Philosophical Discourse).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ፍልስፍናዊ አስተሳሰብ (Philosophical Discourse) - ደረጃ 1) ተማሪዎች ስለ ፍልስፍናዊ አስተሳሰብ (Philosophical Discourse) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የፍልስፍናዊ አስተሳሰብ (Philosophical Discourse) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (30.1.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (30.1.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (30.1.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ፍልስፍናዊ አስተሳሰብ (Philosophical Discourse)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ፍልስፍናዊ አስተሳሰብ (Philosophical Discourse)» አጠቃቀም በደረጃ 1 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (30.1.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (30.1.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (30.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 1)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (30.1.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (30.1.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (30.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ፍልስፍናዊ አስተሳሰብ (Philosophical Discourse)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 30-1)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (30.1.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (30.1.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (30.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («እውነት_30_1»):",
                    "acceptedAnswers": [
                        "እውነት_30_1"
                    ],
                    "explanation": "The target keyword was: 【እውነት_30_1】"
                }
            ]
        }
    },
    "am-u30-l2": {
        "id": "am-u30-l2",
        "subject": "amharic",
        "unit": 30,
        "lessonNumber": 2,
        "title": "ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics) (Part 2)",
        "level": "C1",
        "objective": "Comprehensive mastery of ፍልስፍናዊ አስተሳሰብ (Philosophical Discourse).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ፍልስፍናዊ አስተሳሰብ (Philosophical Discourse) - ደረጃ 2) ተማሪዎች ስለ ፍልስፍናዊ አስተሳሰብ (Philosophical Discourse) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የፍልስፍናዊ አስተሳሰብ (Philosophical Discourse) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (30.2.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (30.2.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (30.2.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ፍልስፍናዊ አስተሳሰብ (Philosophical Discourse)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ፍልስፍናዊ አስተሳሰብ (Philosophical Discourse)» አጠቃቀም በደረጃ 2 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (30.2.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (30.2.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (30.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 2)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (30.2.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (30.2.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (30.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ፍልስፍናዊ አስተሳሰብ (Philosophical Discourse)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 30-2)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (30.2.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (30.2.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (30.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («እውነት_30_2»):",
                    "acceptedAnswers": [
                        "እውነት_30_2"
                    ],
                    "explanation": "The target keyword was: 【እውነት_30_2】"
                }
            ]
        }
    },
    "am-u30-l3": {
        "id": "am-u30-l3",
        "subject": "amharic",
        "unit": 30,
        "lessonNumber": 3,
        "title": "ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics) (Part 3)",
        "level": "C1",
        "objective": "Comprehensive mastery of ፍልስፍናዊ አስተሳሰብ (Philosophical Discourse).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ፍልስፍናዊ አስተሳሰብ (Philosophical Discourse) - ደረጃ 3) ተማሪዎች ስለ ፍልስፍናዊ አስተሳሰብ (Philosophical Discourse) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የፍልስፍናዊ አስተሳሰብ (Philosophical Discourse) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (30.3.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (30.3.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (30.3.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ፍልስፍናዊ አስተሳሰብ (Philosophical Discourse)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ፍልስፍናዊ አስተሳሰብ (Philosophical Discourse)» አጠቃቀም በደረጃ 3 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (30.3.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (30.3.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (30.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 3)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (30.3.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (30.3.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (30.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ፍልስፍናዊ አስተሳሰብ (Philosophical Discourse)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 30-3)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (30.3.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (30.3.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (30.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («እውነት_30_3»):",
                    "acceptedAnswers": [
                        "እውነት_30_3"
                    ],
                    "explanation": "The target keyword was: 【እውነት_30_3】"
                }
            ]
        }
    },
    "am-u30-l4": {
        "id": "am-u30-l4",
        "subject": "amharic",
        "unit": 30,
        "lessonNumber": 4,
        "title": "ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics) (Part 4)",
        "level": "C1",
        "objective": "Comprehensive mastery of ፍልስፍናዊ አስተሳሰብ (Philosophical Discourse).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ፍልስፍናዊ አስተሳሰብ (Philosophical Discourse) - ደረጃ 4) ተማሪዎች ስለ ፍልስፍናዊ አስተሳሰብ (Philosophical Discourse) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የፍልስፍናዊ አስተሳሰብ (Philosophical Discourse) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (30.4.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (30.4.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (30.4.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ፍልስፍናዊ አስተሳሰብ (Philosophical Discourse)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ፍልስፍናዊ አስተሳሰብ (Philosophical Discourse)» አጠቃቀም በደረጃ 4 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (30.4.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (30.4.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (30.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 4)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (30.4.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (30.4.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (30.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ፍልስፍናዊ አስተሳሰብ (Philosophical Discourse)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 30-4)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (30.4.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (30.4.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (30.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («እውነት_30_4»):",
                    "acceptedAnswers": [
                        "እውነት_30_4"
                    ],
                    "explanation": "The target keyword was: 【እውነት_30_4】"
                }
            ]
        }
    },
    "am-u30-l5": {
        "id": "am-u30-l5",
        "subject": "amharic",
        "unit": 30,
        "lessonNumber": 5,
        "title": "ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics) (Part 5)",
        "level": "C1",
        "objective": "Comprehensive mastery of ፍልስፍናዊ አስተሳሰብ (Philosophical Discourse).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ፍልስፍናዊ አስተሳሰብ (Philosophical Discourse) - ደረጃ 5) ተማሪዎች ስለ ፍልስፍናዊ አስተሳሰብ (Philosophical Discourse) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የፍልስፍናዊ አስተሳሰብ (Philosophical Discourse) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (30.5.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (30.5.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (30.5.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ፍልስፍናዊ አስተሳሰብ (Philosophical Discourse)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ፍልስፍናዊ አስተሳሰብ (Philosophical Discourse)» አጠቃቀም በደረጃ 5 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (30.5.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (30.5.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (30.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 5)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (30.5.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (30.5.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (30.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ፍልስፍናዊ አስተሳሰብ (Philosophical Discourse)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 30-5)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (30.5.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (30.5.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (30.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («እውነት_30_5»):",
                    "acceptedAnswers": [
                        "እውነት_30_5"
                    ],
                    "explanation": "The target keyword was: 【እውነት_30_5】"
                }
            ]
        }
    },
    "am-u31-l1": {
        "id": "am-u31-l1",
        "subject": "amharic",
        "unit": 31,
        "lessonNumber": 1,
        "title": "ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse) (Part 1)",
        "level": "C2",
        "objective": "Comprehensive mastery of ሳይንሳዊ ግኝት (Scientific Research).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ሳይንሳዊ ግኝት (Scientific Research) - ደረጃ 1) ተማሪዎች ስለ ሳይንሳዊ ግኝት (Scientific Research) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የሳይንሳዊ ግኝት (Scientific Research) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (31.1.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (31.1.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (31.1.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ሳይንሳዊ ግኝት (Scientific Research)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ሳይንሳዊ ግኝት (Scientific Research)» አጠቃቀም በደረጃ 1 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (31.1.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (31.1.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (31.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 1)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (31.1.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (31.1.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (31.1.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ሳይንሳዊ ግኝት (Scientific Research)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 31-1)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (31.1.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (31.1.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (31.1.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ምርምር_31_1»):",
                    "acceptedAnswers": [
                        "ምርምር_31_1"
                    ],
                    "explanation": "The target keyword was: 【ምርምር_31_1】"
                }
            ]
        }
    },
    "am-u31-l2": {
        "id": "am-u31-l2",
        "subject": "amharic",
        "unit": 31,
        "lessonNumber": 2,
        "title": "ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse) (Part 2)",
        "level": "C2",
        "objective": "Comprehensive mastery of ሳይንሳዊ ግኝት (Scientific Research).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ሳይንሳዊ ግኝት (Scientific Research) - ደረጃ 2) ተማሪዎች ስለ ሳይንሳዊ ግኝት (Scientific Research) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የሳይንሳዊ ግኝት (Scientific Research) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (31.2.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (31.2.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (31.2.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ሳይንሳዊ ግኝት (Scientific Research)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ሳይንሳዊ ግኝት (Scientific Research)» አጠቃቀም በደረጃ 2 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (31.2.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (31.2.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (31.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 2)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (31.2.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (31.2.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (31.2.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ሳይንሳዊ ግኝት (Scientific Research)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 31-2)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (31.2.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (31.2.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (31.2.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ምርምር_31_2»):",
                    "acceptedAnswers": [
                        "ምርምር_31_2"
                    ],
                    "explanation": "The target keyword was: 【ምርምር_31_2】"
                }
            ]
        }
    },
    "am-u31-l3": {
        "id": "am-u31-l3",
        "subject": "amharic",
        "unit": 31,
        "lessonNumber": 3,
        "title": "ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse) (Part 3)",
        "level": "C2",
        "objective": "Comprehensive mastery of ሳይንሳዊ ግኝት (Scientific Research).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ሳይንሳዊ ግኝት (Scientific Research) - ደረጃ 3) ተማሪዎች ስለ ሳይንሳዊ ግኝት (Scientific Research) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የሳይንሳዊ ግኝት (Scientific Research) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (31.3.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (31.3.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (31.3.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ሳይንሳዊ ግኝት (Scientific Research)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ሳይንሳዊ ግኝት (Scientific Research)» አጠቃቀም በደረጃ 3 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (31.3.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (31.3.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (31.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 3)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (31.3.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (31.3.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (31.3.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ሳይንሳዊ ግኝት (Scientific Research)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 31-3)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (31.3.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (31.3.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (31.3.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ምርምር_31_3»):",
                    "acceptedAnswers": [
                        "ምርምር_31_3"
                    ],
                    "explanation": "The target keyword was: 【ምርምር_31_3】"
                }
            ]
        }
    },
    "am-u31-l4": {
        "id": "am-u31-l4",
        "subject": "amharic",
        "unit": 31,
        "lessonNumber": 4,
        "title": "ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse) (Part 4)",
        "level": "C2",
        "objective": "Comprehensive mastery of ሳይንሳዊ ግኝት (Scientific Research).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ሳይንሳዊ ግኝት (Scientific Research) - ደረጃ 4) ተማሪዎች ስለ ሳይንሳዊ ግኝት (Scientific Research) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የሳይንሳዊ ግኝት (Scientific Research) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (31.4.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (31.4.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (31.4.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ሳይንሳዊ ግኝት (Scientific Research)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ሳይንሳዊ ግኝት (Scientific Research)» አጠቃቀም በደረጃ 4 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (31.4.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (31.4.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (31.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 4)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (31.4.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (31.4.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (31.4.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ሳይንሳዊ ግኝት (Scientific Research)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 31-4)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (31.4.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (31.4.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (31.4.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ምርምር_31_4»):",
                    "acceptedAnswers": [
                        "ምርምር_31_4"
                    ],
                    "explanation": "The target keyword was: 【ምርምር_31_4】"
                }
            ]
        }
    },
    "am-u31-l5": {
        "id": "am-u31-l5",
        "subject": "amharic",
        "unit": 31,
        "lessonNumber": 5,
        "title": "ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse) (Part 5)",
        "level": "C2",
        "objective": "Comprehensive mastery of ሳይንሳዊ ግኝት (Scientific Research).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ሳይንሳዊ ግኝት (Scientific Research) - ደረጃ 5) ተማሪዎች ስለ ሳይንሳዊ ግኝት (Scientific Research) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የሳይንሳዊ ግኝት (Scientific Research) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (31.5.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (31.5.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (31.5.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ሳይንሳዊ ግኝት (Scientific Research)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ሳይንሳዊ ግኝት (Scientific Research)» አጠቃቀም በደረጃ 5 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (31.5.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (31.5.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (31.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 5)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (31.5.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (31.5.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (31.5.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ሳይንሳዊ ግኝት (Scientific Research)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 31-5)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (31.5.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (31.5.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (31.5.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ምርምር_31_5»):",
                    "acceptedAnswers": [
                        "ምርምር_31_5"
                    ],
                    "explanation": "The target keyword was: 【ምርምር_31_5】"
                }
            ]
        }
    },
    "am-u32-l1": {
        "id": "am-u32-l1",
        "subject": "amharic",
        "unit": 32,
        "lessonNumber": 1,
        "title": "ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs) (Part 1)",
        "level": "C2",
        "objective": "Comprehensive mastery of ዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties) - ደረጃ 1) ተማሪዎች ስለ ዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (32.1.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (32.1.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (32.1.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties)» አጠቃቀም በደረጃ 1 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (32.1.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (32.1.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (32.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 1)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (32.1.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (32.1.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (32.1.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 32-1)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (32.1.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (32.1.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (32.1.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ስምምነት_32_1»):",
                    "acceptedAnswers": [
                        "ስምምነት_32_1"
                    ],
                    "explanation": "The target keyword was: 【ስምምነት_32_1】"
                }
            ]
        }
    },
    "am-u32-l2": {
        "id": "am-u32-l2",
        "subject": "amharic",
        "unit": 32,
        "lessonNumber": 2,
        "title": "ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs) (Part 2)",
        "level": "C2",
        "objective": "Comprehensive mastery of ዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties) - ደረጃ 2) ተማሪዎች ስለ ዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (32.2.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (32.2.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (32.2.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties)» አጠቃቀም በደረጃ 2 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (32.2.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (32.2.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (32.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 2)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (32.2.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (32.2.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (32.2.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 32-2)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (32.2.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (32.2.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (32.2.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ስምምነት_32_2»):",
                    "acceptedAnswers": [
                        "ስምምነት_32_2"
                    ],
                    "explanation": "The target keyword was: 【ስምምነት_32_2】"
                }
            ]
        }
    },
    "am-u32-l3": {
        "id": "am-u32-l3",
        "subject": "amharic",
        "unit": 32,
        "lessonNumber": 3,
        "title": "ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs) (Part 3)",
        "level": "C2",
        "objective": "Comprehensive mastery of ዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties) - ደረጃ 3) ተማሪዎች ስለ ዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (32.3.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (32.3.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (32.3.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties)» አጠቃቀም በደረጃ 3 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (32.3.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (32.3.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (32.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 3)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (32.3.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (32.3.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (32.3.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 32-3)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (32.3.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (32.3.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (32.3.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ስምምነት_32_3»):",
                    "acceptedAnswers": [
                        "ስምምነት_32_3"
                    ],
                    "explanation": "The target keyword was: 【ስምምነት_32_3】"
                }
            ]
        }
    },
    "am-u32-l4": {
        "id": "am-u32-l4",
        "subject": "amharic",
        "unit": 32,
        "lessonNumber": 4,
        "title": "ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs) (Part 4)",
        "level": "C2",
        "objective": "Comprehensive mastery of ዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties) - ደረጃ 4) ተማሪዎች ስለ ዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (32.4.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (32.4.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (32.4.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties)» አጠቃቀም በደረጃ 4 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (32.4.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (32.4.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (32.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 4)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (32.4.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (32.4.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (32.4.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 32-4)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (32.4.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (32.4.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (32.4.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ስምምነት_32_4»):",
                    "acceptedAnswers": [
                        "ስምምነት_32_4"
                    ],
                    "explanation": "The target keyword was: 【ስምምነት_32_4】"
                }
            ]
        }
    },
    "am-u32-l5": {
        "id": "am-u32-l5",
        "subject": "amharic",
        "unit": 32,
        "lessonNumber": 5,
        "title": "ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs) (Part 5)",
        "level": "C2",
        "objective": "Comprehensive mastery of ዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (ዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties) - ደረጃ 5) ተማሪዎች ስለ ዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (32.5.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (32.5.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (32.5.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for ዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «ዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties)» አጠቃቀም በደረጃ 5 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (32.5.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (32.5.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (32.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 5)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (32.5.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (32.5.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (32.5.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«ዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 32-5)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (32.5.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (32.5.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (32.5.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ስምምነት_32_5»):",
                    "acceptedAnswers": [
                        "ስምምነት_32_5"
                    ],
                    "explanation": "The target keyword was: 【ስምምነት_32_5】"
                }
            ]
        }
    },
    "am-u33-l1": {
        "id": "am-u33-l1",
        "subject": "amharic",
        "unit": 33,
        "lessonNumber": 1,
        "title": "የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric) (Part 1)",
        "level": "C2",
        "objective": "Comprehensive mastery of የአነጋገር ዘይቤ (Idiomatic Expressions).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የአነጋገር ዘይቤ (Idiomatic Expressions) - ደረጃ 1) ተማሪዎች ስለ የአነጋገር ዘይቤ (Idiomatic Expressions) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየአነጋገር ዘይቤ (Idiomatic Expressions) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (33.1.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (33.1.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (33.1.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የአነጋገር ዘይቤ (Idiomatic Expressions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የአነጋገር ዘይቤ (Idiomatic Expressions)» አጠቃቀም በደረጃ 1 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (33.1.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (33.1.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (33.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 1)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (33.1.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (33.1.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (33.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የአነጋገር ዘይቤ (Idiomatic Expressions)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 33-1)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (33.1.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (33.1.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (33.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ፈሊጥ_33_1»):",
                    "acceptedAnswers": [
                        "ፈሊጥ_33_1"
                    ],
                    "explanation": "The target keyword was: 【ፈሊጥ_33_1】"
                }
            ]
        }
    },
    "am-u33-l2": {
        "id": "am-u33-l2",
        "subject": "amharic",
        "unit": 33,
        "lessonNumber": 2,
        "title": "የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric) (Part 2)",
        "level": "C2",
        "objective": "Comprehensive mastery of የአነጋገር ዘይቤ (Idiomatic Expressions).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የአነጋገር ዘይቤ (Idiomatic Expressions) - ደረጃ 2) ተማሪዎች ስለ የአነጋገር ዘይቤ (Idiomatic Expressions) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየአነጋገር ዘይቤ (Idiomatic Expressions) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (33.2.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (33.2.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (33.2.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የአነጋገር ዘይቤ (Idiomatic Expressions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የአነጋገር ዘይቤ (Idiomatic Expressions)» አጠቃቀም በደረጃ 2 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (33.2.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (33.2.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (33.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 2)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (33.2.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (33.2.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (33.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የአነጋገር ዘይቤ (Idiomatic Expressions)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 33-2)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (33.2.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (33.2.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (33.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ፈሊጥ_33_2»):",
                    "acceptedAnswers": [
                        "ፈሊጥ_33_2"
                    ],
                    "explanation": "The target keyword was: 【ፈሊጥ_33_2】"
                }
            ]
        }
    },
    "am-u33-l3": {
        "id": "am-u33-l3",
        "subject": "amharic",
        "unit": 33,
        "lessonNumber": 3,
        "title": "የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric) (Part 3)",
        "level": "C2",
        "objective": "Comprehensive mastery of የአነጋገር ዘይቤ (Idiomatic Expressions).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የአነጋገር ዘይቤ (Idiomatic Expressions) - ደረጃ 3) ተማሪዎች ስለ የአነጋገር ዘይቤ (Idiomatic Expressions) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየአነጋገር ዘይቤ (Idiomatic Expressions) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (33.3.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (33.3.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (33.3.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የአነጋገር ዘይቤ (Idiomatic Expressions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የአነጋገር ዘይቤ (Idiomatic Expressions)» አጠቃቀም በደረጃ 3 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (33.3.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (33.3.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (33.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 3)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (33.3.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (33.3.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (33.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የአነጋገር ዘይቤ (Idiomatic Expressions)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 33-3)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (33.3.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (33.3.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (33.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ፈሊጥ_33_3»):",
                    "acceptedAnswers": [
                        "ፈሊጥ_33_3"
                    ],
                    "explanation": "The target keyword was: 【ፈሊጥ_33_3】"
                }
            ]
        }
    },
    "am-u33-l4": {
        "id": "am-u33-l4",
        "subject": "amharic",
        "unit": 33,
        "lessonNumber": 4,
        "title": "የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric) (Part 4)",
        "level": "C2",
        "objective": "Comprehensive mastery of የአነጋገር ዘይቤ (Idiomatic Expressions).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የአነጋገር ዘይቤ (Idiomatic Expressions) - ደረጃ 4) ተማሪዎች ስለ የአነጋገር ዘይቤ (Idiomatic Expressions) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየአነጋገር ዘይቤ (Idiomatic Expressions) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (33.4.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (33.4.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (33.4.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የአነጋገር ዘይቤ (Idiomatic Expressions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የአነጋገር ዘይቤ (Idiomatic Expressions)» አጠቃቀም በደረጃ 4 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (33.4.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (33.4.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (33.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 4)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (33.4.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (33.4.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (33.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የአነጋገር ዘይቤ (Idiomatic Expressions)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 33-4)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (33.4.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (33.4.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (33.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ፈሊጥ_33_4»):",
                    "acceptedAnswers": [
                        "ፈሊጥ_33_4"
                    ],
                    "explanation": "The target keyword was: 【ፈሊጥ_33_4】"
                }
            ]
        }
    },
    "am-u33-l5": {
        "id": "am-u33-l5",
        "subject": "amharic",
        "unit": 33,
        "lessonNumber": 5,
        "title": "የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric) (Part 5)",
        "level": "C2",
        "objective": "Comprehensive mastery of የአነጋገር ዘይቤ (Idiomatic Expressions).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የአነጋገር ዘይቤ (Idiomatic Expressions) - ደረጃ 5) ተማሪዎች ስለ የአነጋገር ዘይቤ (Idiomatic Expressions) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየአነጋገር ዘይቤ (Idiomatic Expressions) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (33.5.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (33.5.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (33.5.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የአነጋገር ዘይቤ (Idiomatic Expressions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የአነጋገር ዘይቤ (Idiomatic Expressions)» አጠቃቀም በደረጃ 5 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (33.5.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (33.5.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (33.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 5)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (33.5.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (33.5.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (33.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የአነጋገር ዘይቤ (Idiomatic Expressions)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 33-5)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (33.5.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (33.5.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (33.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ፈሊጥ_33_5»):",
                    "acceptedAnswers": [
                        "ፈሊጥ_33_5"
                    ],
                    "explanation": "The target keyword was: 【ፈሊጥ_33_5】"
                }
            ]
        }
    },
    "am-u34-l1": {
        "id": "am-u34-l1",
        "subject": "amharic",
        "unit": 34,
        "lessonNumber": 1,
        "title": "የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery) (Part 1)",
        "level": "C2",
        "objective": "Comprehensive mastery of የላቀ የአማርኛ ንግግር (C2 Capstone Statecraft).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የላቀ የአማርኛ ንግግር (C2 Capstone Statecraft) - ደረጃ 1) ተማሪዎች ስለ የላቀ የአማርኛ ንግግር (C2 Capstone Statecraft) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየላቀ የአማርኛ ንግግር (C2 Capstone Statecraft) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (34.1.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (34.1.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (34.1.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የላቀ የአማርኛ ንግግር (C2 Capstone Statecraft)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የላቀ የአማርኛ ንግግር (C2 Capstone Statecraft)» አጠቃቀም በደረጃ 1 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (34.1.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (34.1.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (34.1.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 1)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (34.1.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (34.1.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (34.1.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የላቀ የአማርኛ ንግግር (C2 Capstone Statecraft)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 34-1)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (34.1.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (34.1.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (34.1.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ብቃት_34_1»):",
                    "acceptedAnswers": [
                        "ብቃት_34_1"
                    ],
                    "explanation": "The target keyword was: 【ብቃት_34_1】"
                }
            ]
        }
    },
    "am-u34-l2": {
        "id": "am-u34-l2",
        "subject": "amharic",
        "unit": 34,
        "lessonNumber": 2,
        "title": "የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery) (Part 2)",
        "level": "C2",
        "objective": "Comprehensive mastery of የላቀ የአማርኛ ንግግር (C2 Capstone Statecraft).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የላቀ የአማርኛ ንግግር (C2 Capstone Statecraft) - ደረጃ 2) ተማሪዎች ስለ የላቀ የአማርኛ ንግግር (C2 Capstone Statecraft) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየላቀ የአማርኛ ንግግር (C2 Capstone Statecraft) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (34.2.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (34.2.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (34.2.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የላቀ የአማርኛ ንግግር (C2 Capstone Statecraft)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የላቀ የአማርኛ ንግግር (C2 Capstone Statecraft)» አጠቃቀም በደረጃ 2 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (34.2.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (34.2.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (34.2.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 2)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (34.2.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (34.2.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (34.2.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የላቀ የአማርኛ ንግግር (C2 Capstone Statecraft)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 34-2)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (34.2.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (34.2.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (34.2.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ብቃት_34_2»):",
                    "acceptedAnswers": [
                        "ብቃት_34_2"
                    ],
                    "explanation": "The target keyword was: 【ብቃት_34_2】"
                }
            ]
        }
    },
    "am-u34-l3": {
        "id": "am-u34-l3",
        "subject": "amharic",
        "unit": 34,
        "lessonNumber": 3,
        "title": "የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery) (Part 3)",
        "level": "C2",
        "objective": "Comprehensive mastery of የላቀ የአማርኛ ንግግር (C2 Capstone Statecraft).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የላቀ የአማርኛ ንግግር (C2 Capstone Statecraft) - ደረጃ 3) ተማሪዎች ስለ የላቀ የአማርኛ ንግግር (C2 Capstone Statecraft) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየላቀ የአማርኛ ንግግር (C2 Capstone Statecraft) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (34.3.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (34.3.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (34.3.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የላቀ የአማርኛ ንግግር (C2 Capstone Statecraft)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የላቀ የአማርኛ ንግግር (C2 Capstone Statecraft)» አጠቃቀም በደረጃ 3 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (34.3.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (34.3.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (34.3.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 3)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (34.3.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (34.3.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (34.3.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የላቀ የአማርኛ ንግግር (C2 Capstone Statecraft)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 34-3)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (34.3.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (34.3.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (34.3.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ብቃት_34_3»):",
                    "acceptedAnswers": [
                        "ብቃት_34_3"
                    ],
                    "explanation": "The target keyword was: 【ብቃት_34_3】"
                }
            ]
        }
    },
    "am-u34-l4": {
        "id": "am-u34-l4",
        "subject": "amharic",
        "unit": 34,
        "lessonNumber": 4,
        "title": "የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery) (Part 4)",
        "level": "C2",
        "objective": "Comprehensive mastery of የላቀ የአማርኛ ንግግር (C2 Capstone Statecraft).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የላቀ የአማርኛ ንግግር (C2 Capstone Statecraft) - ደረጃ 4) ተማሪዎች ስለ የላቀ የአማርኛ ንግግር (C2 Capstone Statecraft) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየላቀ የአማርኛ ንግግር (C2 Capstone Statecraft) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (34.4.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (34.4.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (34.4.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የላቀ የአማርኛ ንግግር (C2 Capstone Statecraft)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የላቀ የአማርኛ ንግግር (C2 Capstone Statecraft)» አጠቃቀም በደረጃ 4 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (34.4.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (34.4.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (34.4.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 4)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (34.4.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (34.4.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (34.4.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የላቀ የአማርኛ ንግግር (C2 Capstone Statecraft)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 34-4)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (34.4.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (34.4.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (34.4.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ብቃት_34_4»):",
                    "acceptedAnswers": [
                        "ብቃት_34_4"
                    ],
                    "explanation": "The target keyword was: 【ብቃት_34_4】"
                }
            ]
        }
    },
    "am-u34-l5": {
        "id": "am-u34-l5",
        "subject": "amharic",
        "unit": 34,
        "lessonNumber": 5,
        "title": "የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery) (Part 5)",
        "level": "C2",
        "objective": "Comprehensive mastery of የላቀ የአማርኛ ንግግር (C2 Capstone Statecraft).",
        "presentation": {
            "explanation": "በዚህ የትምህርት ክፍል (የላቀ የአማርኛ ንግግር (C2 Capstone Statecraft) - ደረጃ 5) ተማሪዎች ስለ የላቀ የአማርኛ ንግግር (C2 Capstone Statecraft) አገባብ እና ሰዋሰዋዊ ህግጋት በዝርዝር ይማራሉ። በአማርኛ ቋንቋ የዓረፍተ ነገር አወቃቀር ባለቤት-ተሳቢ-ግስ (SOV) ስርዓትን በጥብቅ የሚከተል ሲሆን፣ የቃላት ቅጥያዎችና መስተዋድዶች ትክክለኛውን መልእክት ለማስተላለፍ ቁልፍ ሚና ይጫወታሉ። በዕለት ተዕለት ንግግርም ሆነ በጽሁፍ ውስጥ ተገቢውን የክብር አነጋገር እና ትክክለኛ የሰዋሰው ህግጋትን መከተል እጅግ አስፈላጊ ነው።\n\nየሰዋሰው አጠቃቀም እና የትርጉም ማብራሪያ (Grammar Analysis & English Glosses):\nትክክለኛውን የሰዋሰው መዋቅር በመጠቀም የተሟላ እና ጥርት ያለ መልእክት መግለጽ ይቻላል።",
            "examples": [
                {
                    "target": "መምህሩ በክፍል ውስጥ ላሉ ተማሪዎች የየላቀ የአማርኛ ንግግር (C2 Capstone Statecraft) ዋና ዋና ነጥቦችን በዝርዝር አብራሩ (34.5.1)።",
                    "reading": "Memhiru bekiflu wust lalu temariwoch yetimihirtun wana wana netiboch bezirzir abraru.",
                    "translation": "The teacher explained the main points of this topic in detail to the students in the class."
                },
                {
                    "target": "እኛ በየቀኑ ጠዋት አዳዲስ እውቀቶችን እና የቋንቋ ክህሎቶችን ለመቅሰም በትጋት እንሰራለን (34.5.2)።",
                    "reading": "Igna beyeqenu tewat addis iwiqetochin ina yeqwanqwa kihilotochin lemeqsem betigat iniseralen.",
                    "translation": "We work diligently every morning to acquire new knowledge and language skills."
                },
                {
                    "target": "በከተማው ማእከል የሚገኙ ጥንታዊ ቅርሶች እና ታሪካዊ ቦታዎች በርካታ ጎብኚዎችን ይስባሉ (34.5.3)።",
                    "reading": "Beketemaw ma'ikel yemigegnu tintawi qirsoch ina tarikawi botawch birkata gobnyowochin yisbalu.",
                    "translation": "Ancient heritages and historic sites located in the city center attract numerous visitors."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for የላቀ የአማርኛ ንግግር (C2 Capstone Statecraft)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Amharic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ስለ «የላቀ የአማርኛ ንግግር (C2 Capstone Statecraft)» አጠቃቀም በደረጃ 5 ትክክለኛውን የአማርኛ ሰዋሰዋዊ ስርዓት የጠበቀው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "እህቴ በማለዳ ተነስታ ለቤተሰቡ የሚሆን ጣፋጭ ቁርስ እና ትኩስ ቡና አዘጋጀች (34.5.1)።",
                        "ትናንት ከሰዓት በኋላ ወደ ማዘጋጃ ቤቱ ቤተ መጻሕፍት ሄደን አዳዲስ መጻሕፍትን አነበብን (34.5.2)።",
                        "እነሱ ዛሬ ጠዋት በማለዳ ተነስተው በስታዲየሙ ውስጥ ስፖርታዊ እንቅስቃሴ ሲሰሩ ነበር (34.5.3)።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በ«የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery)» ርዕስ ስር የቃላት አገባብ ትስስርን የሚያሳየውን ምርጥ ዓረፍተ ነገር ይምረጡ (ክፍል 5)፡",
                    "options": [
                        "አባቴ ከስራ ሲመለስ ለልጆቹ አዳዲስ የትምህርት መጽሐፍትን እና ስዕሎችን ይዞ መጣ (34.5.1)።",
                        "እሱ በሚቀጥለው ሳምንት ወደ ባህር ዳር ከተማ ለስራ ጉዞ ለመሄድ ዝግጅቱን አጠናቋል (34.5.2)።",
                        "በገበያው ውስጥ አዳዲስ ትኩስ አትክልቶች እና ጣፋጭ ፍራፍሬዎች በብዛት ይገኛሉ (34.5.3)።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የ«የላቀ የአማርኛ ንግግር (C2 Capstone Statecraft)» ሰዋሰዋዊ ህግን በውል ያሟላል (የፈተና ጥያቄ 34-5)?",
                    "options": [
                        "መምህሩ ለተማሪዎቹ የፈተናውን ውጤት እና ጠቃሚ ማብራሪያዎችን በግልጽ አስረዱ (34.5.1)።",
                        "ተማሪዎቹ የፈተናውን ውጤት ለማየት በትምህርት ቤቱ ቅጥር ጊቢ በሰላም ተሰብስበዋል (34.5.2)።",
                        "አባይ ወንዝ በኢትዮጵያ ከፍተኛ ተራሮች መካከል ወደ ታች በዝግታ ይፈሳል (34.5.3)።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ብቃት_34_5»):",
                    "acceptedAnswers": [
                        "ብቃት_34_5"
                    ],
                    "explanation": "The target keyword was: 【ብቃት_34_5】"
                }
            ]
        }
    }
};
  var CURRICULUM = { id: 'amharic', name: 'Amharic', units: UNITS, lessons: LESSONS };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['amharic'] = CURRICULUM;
  if (typeof module !== 'undefined' && module.exports) module.exports = CURRICULUM;
})(typeof window !== 'undefined' ? window : global);
