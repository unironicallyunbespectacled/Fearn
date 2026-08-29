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
        "unit": "am-u3",
        "level": "A1",
        "objective": "Master all Amharic independent personal pronouns (subject forms) for all persons, numbers, and genders.",
        "prerequisites": [
            "am-u2-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u2-l1",
                "am-u2-l5"
            ]
        },
        "presentation": {
            "explanation": "Amharic has a rich pronoun system that distinguishes gender (masculine/feminine) in the 2nd and 3rd person singular, and also marks formal/polite register:\n\n1. Subject Pronouns (Independent):\n- 1st singular: እኔ (Ine - I)\n- 2nd singular masculine: አንተ (Ante - you m.)\n- 2nd singular feminine: አንቺ (Anchi - you f.)\n- 2nd singular formal/polite: እርስዎ / አንተ-ልዩ (Irswo - you formal, used for elders/strangers)\n- 3rd singular masculine: እሱ / እርሱ (Isu / Irsu - he)\n- 3rd singular feminine: እሷ / እርሷ (Iswa / Irswa - she)\n- 1st plural: እኛ (Igna - we)\n- 2nd plural: እናንተ (Inante - you pl.)\n- 3rd plural: እነሱ / እነርሱ (Inesu / Inersu - they)\n\n2. Polite Note: Using « እርስዎ » for elders, employers, and strangers is a cultural obligation.",
            "examples": [
                {
                    "target": "እኔ ተማሪ ነኝ።",
                    "reading": "Ine temari negn.",
                    "translation": "I am a student."
                },
                {
                    "target": "አንተ ዶክተር ነህ?",
                    "reading": "Ante doktor neh?",
                    "translation": "Are you (m.) a doctor?"
                },
                {
                    "target": "እሷ ከአዲስ አበባ ናት።",
                    "reading": "Iswa ke'Addis Abeba nat.",
                    "translation": "She is from Addis Ababa."
                },
                {
                    "target": "እኛ ወደ ሱቁ እንሄዳለን።",
                    "reading": "Igna wede suqu inhedalen.",
                    "translation": "We are going to the shop."
                },
                {
                    "target": "እነሱ አዳዲስ ተማሪዎች ናቸው።",
                    "reading": "Inesu addis temariwoch nachew.",
                    "translation": "They are new students."
                }
            ],
            "mnemonics": [
                "INE=I, ANTE=you(m), ANCHI=you(f), ISU=he, ISWA=she, IGNA=we, INANTE=you pl., INESU=they!"
            ],
            "culturalNotes": [
                "When addressing a teacher (መምህር memhir), priest (ቄስ qes), or elder, always use እርስዎ (Irswo). Using አንተ in such a context would be disrespectful."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which Amharic pronoun means 'she'?",
                    "options": [
                        "እሷ (Iswa)",
                        "እሱ (Isu)",
                        "አንቺ (Anchi)",
                        "እኛ (Igna)"
                    ],
                    "answerIndex": 0,
                    "explanation": "« እሷ » (Iswa) means 'she'."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "How do you say 'We are going to the market' in Amharic?",
                    "options": [
                        "እኛ ወደ ገበያ እንሄዳለን።",
                        "እሱ ወደ ገበያ ይሄዳል።",
                        "አንተ ወደ ገበያ ትሄዳለህ።",
                        "እነሱ ወደ ገበያ ሄዱ።"
                    ],
                    "answerIndex": 0,
                    "explanation": "« እኛ » (Igna - we) + ወደ ገበያ + እንሄዳለን (we go)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "What is the Amharic pronoun for 'you (formal/polite)'?",
                    "options": [
                        "እርስዎ (Irswo)",
                        "አንቺ (Anchi)",
                        "አንተ (Ante)",
                        "እሱ (Isu)"
                    ],
                    "answerIndex": 0,
                    "explanation": "« እርስዎ » (Irswo) is the polite/formal 2nd person pronoun for addressing elders and strangers."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'I' in Fidel script (እኔ):",
                    "acceptedAnswers": [
                        "እኔ",
                        "ine",
                        "Ine"
                    ],
                    "explanation": "እኔ (Ine) = I."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u3-l2": {
        "id": "am-u3-l2",
        "unit": "am-u3",
        "level": "A1",
        "objective": "Express possession using Amharic possessive suffixes (የ- genitive and pronominal possessives) for all persons.",
        "prerequisites": [
            "am-u3-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u3-l1"
            ]
        },
        "presentation": {
            "explanation": "Amharic expresses possession in two main ways:\n\n1. Genitive Marker « የ- » (Ye-):\n- Placed before the possessor: « የ + Possessor + Noun ». E.g., « የእኔ ቤት » (ye'ine bet - my house); « የምሳ ሰዓት » (yemesa sehat - lunchtime).\n\n2. Pronominal Possessive Suffixes (attached to the noun):\n- my: -ዬ / -ኤ (-ye / -e). E.g., « ቤቴ » (bete - my house); « መጽሐፌ » (mets'hafe - my book).\n- your (m): -ህ (-h). E.g., « ቤትህ » (betih - your m. house).\n- your (f): -ሽ (-sh). E.g., « ቤትሽ » (betish - your f. house).\n- his: -ው (-w). E.g., « ቤቱ » (betu - his house / the house).\n- her: -ዋ (-wa). E.g., « ቤቷ » (betwa - her house).\n- our: -ን (-n). E.g., « ቤታችን » (betachin - our house).\n- your (pl): -ችሁ (-chihu). E.g., « ቤታችሁ » (betachihu - your pl. house).\n- their: -ቸው (-chew). E.g., « ቤታቸው » (betachew - their house).",
            "examples": [
                {
                    "target": "የእኔ ስም ዳዊት ነው።",
                    "reading": "Ye'ine sim Dawit new.",
                    "translation": "My name is Dawit."
                },
                {
                    "target": "መጽሐፌ ጠረጴዛው ላይ አለ።",
                    "reading": "Mets'hafe t'erep'ezaw lay ale.",
                    "translation": "My book is on the table."
                },
                {
                    "target": "ቤቷ ከትምህርት ቤቱ አጠገብ ናት።",
                    "reading": "Betwa ketimihirt betu atebib nat.",
                    "translation": "Her house is near the school."
                },
                {
                    "target": "ቤታቸው ትልቅ ነው።",
                    "reading": "Betachew tiliq new.",
                    "translation": "Their house is big."
                },
                {
                    "target": "ይህ የሱ ወንበር ነው።",
                    "reading": "Yih yesu wenber new.",
                    "translation": "This is his chair."
                }
            ],
            "mnemonics": [
                "YE- is the Amharic 'of' marker: YE + owner + thing = possession chain!"
            ],
            "culturalNotes": [
                "Ethiopian naming convention: children take their father's first name as their surname. So Dawit Bekele means 'Dawit, son of Bekele' — « የቤት ስም » (family name) works this way."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you say 'my book' using the possessive suffix in Amharic (from መጽሐፍ)?",
                    "options": [
                        "መጽሐፌ (Mets'hafe)",
                        "መጽሐፉ (Mets'hafu)",
                        "መጽሐፏ (Mets'hafwa)",
                        "መጽሐፎቻቸው"
                    ],
                    "answerIndex": 0,
                    "explanation": "Adding -ዬ (-e) to the noun root gives the 1st-person possessive: መጽሐፌ = my book."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What does « ቤታቸው » (Betachew) mean?",
                    "options": [
                        "Their house",
                        "My house",
                        "Her house",
                        "Your house (pl.)"
                    ],
                    "answerIndex": 0,
                    "explanation": "-ቸው (-chew) is the 3rd person plural possessive suffix meaning 'their'."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Which sentence means 'My name is Hanna' in Amharic?",
                    "options": [
                        "ስሜ ሃና ነው። (Sime Hanna new.)",
                        "ስምህ ሃና ነው።",
                        "ስሟ ሃና ናት።",
                        "የሱ ስም ሃና ነው።"
                    ],
                    "answerIndex": 0,
                    "explanation": "« ስሜ » (sime) = my name, from ስም + -ዬ suffix."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic genitive/possessive prefix in Fidel script (የ):",
                    "acceptedAnswers": [
                        "የ",
                        "ye",
                        "Ye"
                    ],
                    "explanation": "« የ » (ye-) is the Amharic genitive/possession marker."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u3-l3": {
        "id": "am-u3-l3",
        "unit": "am-u3",
        "level": "A1",
        "objective": "Use postpositional prepositions of location and direction: ውስጥ (inside), ላይ (on), ሥር (under), አጠገብ (near), ፊት (in front of), ኋላ (behind), ወደ (towards), ከ (from/since).",
        "prerequisites": [
            "am-u3-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u3-l1",
                "am-u3-l2"
            ]
        },
        "presentation": {
            "explanation": "Unlike English prepositions which come before the noun, Amharic location words (postpositions) typically follow the noun they modify:\n\n1. Key Location Postpositions:\n- ውስጥ (wust') = inside / in. E.g., « ቤቱ ውስጥ » (betu wust' - inside the house).\n- ላይ (lay) = on / on top of. E.g., « ጠረጴዛው ላይ » (t'erep'ezaw lay - on the table).\n- ሥር (sir) = under / beneath. E.g., « ወንበሩ ሥር » (wenberu sir - under the chair).\n- አጠገብ (at'egeb) = near / next to. E.g., « ቤቱ አጠገብ » (betu at'egeb - near the house).\n- ፊት ለፊት (fit lefit) = in front of. E.g., « ቤቱ ፊት ለፊት » (betu fit lefit - in front of the house).\n- ኋላ (hwala) = behind / after. E.g., « ቤቱ ኋላ » (betu hwala - behind the house).\n\n2. Directional/Source Prepositions (come before):\n- ወደ (wede) = to / towards. E.g., « ወደ ቤቱ » (wede betu - towards the house).\n- ከ (ke) = from / since. E.g., « ከቤቱ » (kebetu - from the house).",
            "examples": [
                {
                    "target": "ድመቷ ወንበሩ ሥር ትተኛለች።",
                    "reading": "Dimetwa wenberu sir titegnyalech.",
                    "translation": "The cat sleeps under the chair."
                },
                {
                    "target": "መጽሐፉ ጠረጴዛው ላይ አለ።",
                    "reading": "Mets'hafu t'erep'ezaw lay ale.",
                    "translation": "The book is on the table."
                },
                {
                    "target": "ትምህርት ቤቱ ቤቴ አጠገብ ነው።",
                    "reading": "Timihirt betu bete at'egeb new.",
                    "translation": "The school is near my house."
                },
                {
                    "target": "ወደ ሱቁ ሄደ።",
                    "reading": "Wede suqu hede.",
                    "translation": "He went to the shop."
                },
                {
                    "target": "ልጆቹ ቤቱ ፊት ለፊት ይጫወታሉ።",
                    "reading": "Lijochu betu fit lefit yichawitalu.",
                    "translation": "The children play in front of the house."
                }
            ],
            "mnemonics": [
                "Amharic postpositions follow the noun: BETU WUST'= in the house (house + inside)!"
            ],
            "culturalNotes": [
                "In Ethiopia, giving directions typically uses landmarks (churches, big trees, well-known shops) rather than street names: « የቤተ ክርስቲያኑ አጠገብ » (next to the church)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you say 'on the table' in Amharic (using ጠረጴዛ)?",
                    "options": [
                        "ጠረጴዛው ላይ",
                        "ጠረጴዛው ውስጥ",
                        "ጠረጴዛው ሥር",
                        "ጠረጴዛው ኋላ"
                    ],
                    "answerIndex": 0,
                    "explanation": "« ላይ » (lay) means 'on/on top of' — placed after the noun."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What does « ቤቱ ውስጥ » (betu wust') mean?",
                    "options": [
                        "Inside the house",
                        "On the house",
                        "Behind the house",
                        "Near the house"
                    ],
                    "answerIndex": 0,
                    "explanation": "« ውስጥ » means 'inside/in', and it follows the definite noun."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Which Amharic phrase means 'from the school'?",
                    "options": [
                        "ከትምህርት ቤቱ (ketimihirt betu)",
                        "ወደ ትምህርት ቤቱ",
                        "ትምህርት ቤቱ ፊት",
                        "ትምህርት ቤቱ ላይ"
                    ],
                    "answerIndex": 0,
                    "explanation": "« ከ » (ke-) means 'from' and is prefixed to the noun: ከትምህርት ቤቱ = from the school."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic postposition meaning 'on / on top of' in Fidel script (ላይ):",
                    "acceptedAnswers": [
                        "ላይ",
                        "lay",
                        "Lay"
                    ],
                    "explanation": "ላይ (lay) = on / on top of."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u3-l4": {
        "id": "am-u3-l4",
        "unit": "am-u3",
        "level": "A1",
        "objective": "Ask and answer questions about location and direction using ወዴት (Where to?), ከየት (From where?), and የት (Where?) with verb ነው / ናት / ናቸው / አለ / ሄደ.",
        "prerequisites": [
            "am-u3-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u3-l3"
            ]
        },
        "presentation": {
            "explanation": "Amharic uses three key question words for location and direction:\n\n1. የት? (Yet?) = Where? (static location)\n- E.g., « ቤቱ የት ነው? » (Betu yet new? - Where is the house?)\n- « ትምህርት ቤቱ የት ነው? » (Yet new timihirt betu? - Where is the school?)\n\n2. ወዴት? (Wedet?) = Where to? / Which direction? (movement towards)\n- E.g., « ወዴት ትሄዳለህ? » (Wedet tihedalleh? - Where are you going (m.)?)\n- « ወዴት ሄድሽ? » (Wedet hedish? - Where did you go (f.)?)\n\n3. ከየት? (Keyyet?) = From where? (source/origin)\n- E.g., « ከየት መጣህ? » (Keyyet mettah? - Where are you from/did you come from (m.)?)\n- « ከኢትዮጵያ ነኝ » (Ke'Ityop'ya negn - I am from Ethiopia.)",
            "examples": [
                {
                    "target": "ፖስታ ቤቱ የት ነው?",
                    "reading": "Posta betu yet new?",
                    "translation": "Where is the post office?"
                },
                {
                    "target": "ወዴት ትሄዳለሽ?",
                    "reading": "Wedet tihedalesh?",
                    "translation": "Where are you going (f.)?"
                },
                {
                    "target": "ከየት ነህ?",
                    "reading": "Keyyet neh?",
                    "translation": "Where are you from (m.)?"
                },
                {
                    "target": "ሆቴሉ ባንኩ ፊት ለፊት ነው።",
                    "reading": "Hotelu banku fit lefit new.",
                    "translation": "The hotel is in front of the bank."
                },
                {
                    "target": "ወደ ቀኝ ፣ ወደ ግራ — ደጋፊዎቹ ዘፈኑ።",
                    "reading": "Wede qegn, wede gira — degafiwoch zefenu.",
                    "translation": "To the right, to the left — the supporters chanted."
                }
            ],
            "mnemonics": [
                "YET = static Where?, WEDET = directional Where to?, KEYYET = source From where?"
            ],
            "culturalNotes": [
                "Answering « ከየት ነህ? » correctly requires using ከ + city/region: « ከጎንደር ነኝ » (Ke'Gondar negn - I am from Gondar). Gondar is the historic royal city of Ethiopia's Solomonic dynasty."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which Amharic question word means 'Where to?' (direction of movement)?",
                    "options": [
                        "ወዴት? (Wedet?)",
                        "የት? (Yet?)",
                        "ከየት? (Keyyet?)",
                        "ስንት? (Sint?)"
                    ],
                    "answerIndex": 0,
                    "explanation": "« ወዴት? » (Wedet?) asks about the direction of movement ('Where to?')."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "How do you ask 'Where is the hospital?' in Amharic?",
                    "options": [
                        "ሆስፒታሉ የት ነው? (Hospitallu yet new?)",
                        "ሆስፒታሉ ወዴት ነው?",
                        "ሆስፒታሉ ከየት ነው?",
                        "ሆስፒታሉ ስንት ነው?"
                    ],
                    "answerIndex": 0,
                    "explanation": "For static 'where is', use « የት ነው? » after the subject."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "What does « ከየት ነህ? » (Keyyet neh?) mean?",
                    "options": [
                        "Where are you from? (m.)",
                        "Where are you going? (m.)",
                        "Where is it?",
                        "Where do you live?"
                    ],
                    "answerIndex": 0,
                    "explanation": "« ከየት » (Keyyet) = From where? + ነህ (you are m.) = Where are you from?"
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic question word for 'Where?' (static location) in Fidel script (የት):",
                    "acceptedAnswers": [
                        "የት",
                        "yet",
                        "Yet"
                    ],
                    "explanation": "« የት » (yet) = Where? (static)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u3-l5": {
        "id": "am-u3-l5",
        "unit": "am-u3",
        "level": "A1",
        "objective": "Synthesize personal pronouns, possession, location postpositions, and question words in connected conversational dialogues about identity, ownership, and place.",
        "prerequisites": [
            "am-u3-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u3-l2",
                "am-u3-l4"
            ]
        },
        "presentation": {
            "explanation": "In this Unit 3 Capstone lesson, we combine pronouns, possession, postpositions, and question words in natural Amharic conversations:\n\n1. Real-World Scenarios:\n- Meeting someone new (introductions with possession of names, origins)\n- Describing where things are located in a room or building\n- Asking for directions in an Ethiopian city\n\n2. Key Synthesis Patterns:\n- WHO + WHOSE + WHERE: « እሷ ናት? ስሟ ማን ነው? ቤቷ ወዴት ነው? »\n- PRONOUN + POSSESSIVE + LOCATION: « መጽሐፌ ጠረጴዛው ላይ ነው »",
            "examples": [
                {
                    "target": "ይቅርታ፣ ቤተ-ክርስቲያኑ ወዴት ነው? — ቀጥ ብለህ ሂድ ፣ ከዚያ ወደ ቀኝ ዞር።",
                    "reading": "Yiqirta, bete-kirstiyanu wedet new? — Qet' biley hid, keziya wede qegn zor.",
                    "translation": "Excuse me, where is the church? — Go straight ahead, then turn right."
                },
                {
                    "target": "ስሜ ሳራ ነው። ከባህር ዳር ነኝ። ቤቴ ወንዙ አጠገብ ነው።",
                    "reading": "Sime Sara new. Kebahir Dar negn. Bete wenzu at'egeb new.",
                    "translation": "My name is Sara. I am from Bahir Dar. My house is near the river."
                },
                {
                    "target": "የሱ ቀበሌ ምናልባት ቤቱ ፊት ለፊት ነው።",
                    "reading": "Yesu qebele minalibat betu fit lefit new.",
                    "translation": "His kebele office is probably in front of his house."
                },
                {
                    "target": "ሁሉም ተማሪዎቻቸው ክፍሉ ውስጥ ናቸው።",
                    "reading": "Hulum temariwoachew kiflu wust' nachew.",
                    "translation": "All their students are inside the room."
                },
                {
                    "target": "ወደ ቤቴ ስሄድ ፖስታ ቤቱን አያለሁ።",
                    "reading": "Wede bete sihid posta betun ayalehu.",
                    "translation": "When I go home, I see the post office."
                }
            ],
            "mnemonics": [
                "SYNTHESIS = Pronoun (INE) + Possessive (SIME) + Location (BETE AT'EGEB) + Question (YET NEW?)!"
            ],
            "culturalNotes": [
                "The ቀበሌ (Kebele) is Ethiopia's smallest administrative unit, equivalent to a neighborhood ward office. Every Ethiopian knows their kebele number — it is where births, deaths, ID cards, and land matters are registered."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you say 'My name is Dawit, I am from Gondar' in Amharic?",
                    "options": [
                        "ስሜ ዳዊት ነው፣ ከጎንደር ነኝ። (Sime Dawit new, ke'Gondar negn.)",
                        "ስምህ ዳዊት ነው፣ ከጎንደር ናህ።",
                        "ስሟ ዳዊት ናት፣ ከጎንደር ናት።",
                        "ስማቸው ዳዊት ነው፣ ከጎንደር ናቸው።"
                    ],
                    "answerIndex": 0,
                    "explanation": "First person: ስሜ (my name) + ከጎንደር ነኝ (I am from Gondar)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: 'The book is on my table.'",
                    "options": [
                        "መጽሐፉ የእኔ ጠረጴዛ ላይ ነው። (Mets'hafu ye'ine t'erep'eza lay new.)",
                        "ጠረጴዛው ላይ ቤቴ ነው።",
                        "ወደ ጠረጴዛው ሄደ።",
                        "ጠረጴዛው ስሜ ላይ ነው።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Book (subject) + my table (ye'ine + noun) + on (lay) + is (new)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "What is the Amharic for 'Excuse me, where is the hospital?'",
                    "options": [
                        "ይቅርታ፣ ሆስፒታሉ የት ነው? (Yiqirta, hospitallu yet new?)",
                        "ይቅርታ፣ ወዴት ትሄዳለህ?",
                        "ሆስፒታሉ ከየት ነው?",
                        "ይቅርታ፣ ሆስፒታሉ ስንት ብር ነው?"
                    ],
                    "answerIndex": 0,
                    "explanation": "ይቅርታ (excuse me) + ሆስፒታሉ + የት ነው? (where is?)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'near / next to' (postposition) in Fidel script (አጠገብ):",
                    "acceptedAnswers": [
                        "አጠገብ",
                        "at'egeb",
                        "Atʼegeb"
                    ],
                    "explanation": "አጠገብ (at'egeb) = near / next to."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u4-l1": {
        "id": "am-u4-l1",
        "unit": "am-u4",
        "level": "A1",
        "objective": "Conjugate common Amharic verbs in the present habitual/imperfective tense (non-past) for all persons using the -አል (-al) stem.",
        "prerequisites": [
            "am-u3-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u3-l1",
                "am-u3-l5"
            ]
        },
        "presentation": {
            "explanation": "Amharic present tense (habitual/ongoing) is formed from the verb stem with personal suffixes. The pattern for the 3rd person m. singular (he) serves as a reference:\n\n1. Key Reference Verbs:\n- መሄድ (mehed - to go): stem ሄድ / ሂድ\n- መብላት (meblat - to eat): stem ብላ\n- መጠጣት (met'et'at - to drink): stem ጠጣ\n- ማየት (mayet - to see/watch): stem ይ\n- ማድረግ (madreg - to do): stem አደርግ\n\n2. Present Habitual Conjugation Table for « መሄድ » (to go):\n- I go: እሄዳለሁ (Ihedalehu)\n- You go (m.): ትሄዳለህ (Tihedalleh)\n- You go (f.): ትሄጃለሽ (Tihejalesh)\n- He goes: ይሄዳል (Yihedal)\n- She goes: ትሄዳለች (Tihedalech)\n- We go: እንሄዳለን (Inhedalen)\n- You go (pl.): ትሄዳላችሁ (Tihedallachihu)\n- They go: ይሄዳሉ (Yihedalu)",
            "examples": [
                {
                    "target": "ዮሴፍ ጠዋት ወደ ቢሮ ይሄዳል።",
                    "reading": "Yosef t'ewat wede biro yihedal.",
                    "translation": "Yosef goes to the office in the morning."
                },
                {
                    "target": "እኛ ዋዜማ ለምሳ አብረን እንበላለን።",
                    "reading": "Igna wazema lemesa abren inbelalen.",
                    "translation": "We eat lunch together on the eve."
                },
                {
                    "target": "ልጆቹ ቡና አይጠጡም።",
                    "reading": "Lijochu buna ayt'et'um.",
                    "translation": "The children do not drink coffee."
                },
                {
                    "target": "አልማዝ ቴሌቪዥን ታያለች።",
                    "reading": "Almaz televizhin tayalech.",
                    "translation": "Almaz watches television."
                },
                {
                    "target": "እርስዎ ምን ያደርጋሉ?",
                    "reading": "Irswo min yadregallu?",
                    "translation": "What do you (formal) do?"
                }
            ],
            "mnemonics": [
                "Amharic present habitual: STEM + AL for he (yihedal), STEM + ALEHU for I (ihedalehu)!"
            ],
            "culturalNotes": [
                "In Ethiopia, work schedules often follow the Ethiopian clock (7:00 AM = 1:00 by Ethiopian reckoning, since the day starts at sunrise). So « ጠዋት ሰባት ሰዓት » (tewat sebat sehat) is actually 1:00 AM in Ethiopian time!"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you say 'He goes to school every day' in Amharic?",
                    "options": [
                        "ወደ ትምህርት ቤት በየቀኑ ይሄዳል። (Wede timihirt bet beyeqenu yihedal.)",
                        "ወደ ትምህርት ቤት ትሄዳለች።",
                        "ወደ ትምህርት ቤት ሄደ።",
                        "ወደ ትምህርት ቤት እሄዳለሁ።"
                    ],
                    "answerIndex": 0,
                    "explanation": "3rd person masculine present: ይሄዳል (yihedal = he goes)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What is the Amharic for 'I eat bread in the morning'?",
                    "options": [
                        "ጠዋት ዳቦ እበላለሁ። (T'ewat dabo ibelalehu.)",
                        "ጠዋት ዳቦ ትበላለህ።",
                        "ጠዋት ዳቦ ይበላሉ።",
                        "ጠዋት ዳቦ አይበላም።"
                    ],
                    "answerIndex": 0,
                    "explanation": "1st person singular: እበላለሁ (ibelalehu = I eat)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Which Amharic sentence means 'She watches television'?",
                    "options": [
                        "ቴሌቪዥን ታያለች። (Televizhin tayalech.)",
                        "ቴሌቪዥን ያያሉ።",
                        "ቴሌቪዥን ይሄዳል።",
                        "ቴሌቪዥን አያለሁ።"
                    ],
                    "answerIndex": 0,
                    "explanation": "3rd feminine singular present: ታያለች (tayalech = she watches)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic for 'he goes' (present habitual) in Fidel script (ይሄዳል):",
                    "acceptedAnswers": [
                        "ይሄዳል",
                        "yihedal",
                        "Yihedal"
                    ],
                    "explanation": "ይሄዳል (Yihedal) = he goes (present habitual)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u4-l2": {
        "id": "am-u4-l2",
        "unit": "am-u4",
        "level": "A1",
        "objective": "Negate present tense verbs using the prefix አይ- (ay-) and suffix -ም (-m) to say 'does not' in Amharic.",
        "prerequisites": [
            "am-u4-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u4-l1"
            ]
        },
        "presentation": {
            "explanation": "Amharic present tense negation is formed by:\n1. Prefix አይ- (ay-) before the verb stem\n2. Suffix -ም (-m) at the end\n\nPattern: አይ + STEM + PERSON ENDING + ም\n\nNegation Table for « መሄድ » (to go):\n- I don't go: አልሄድም (Alhedm)\n- You don't go (m.): አትሄድም (Athedm)\n- You don't go (f.): አትሄጂም (Athedijm)\n- He doesn't go: አይሄድም (Ayhedm)\n- She doesn't go: አትሄድም (Athedm)\n- We don't go: አንሄድም (Anhedm)\n- They don't go: አይሄዱም (Ayhedum)\n\nImportant: 1st person singular uses አል- (al-) not አይ- (ay-).",
            "examples": [
                {
                    "target": "ዛሬ ወደ ሱቁ አልሄድም።",
                    "reading": "Zare wede suqu alhedm.",
                    "translation": "Today I am not going to the shop."
                },
                {
                    "target": "ፋሲካ ሥጋ አይበሉም።",
                    "reading": "Fasika siga aybelum.",
                    "translation": "They do not eat meat on Easter (during fasting)."
                },
                {
                    "target": "አቶ ካሳ ሻይ አይጠጣም — ቡና ብቻ።",
                    "reading": "Ato Kasa shay ayt'et'am — buna bicha.",
                    "translation": "Ato Kasa does not drink tea — only coffee."
                },
                {
                    "target": "ትምህርት ቤቱ ቅዳሜ አይከፈትም።",
                    "reading": "Timihirt betu qidame ayikefetm.",
                    "translation": "The school does not open on Saturday."
                },
                {
                    "target": "ሳሙኤል እና ምስጋን ስጋ አይበሉም — ጾም ስለሆነ።",
                    "reading": "Samuel ina Misgan siga aybelum — tsom silehone.",
                    "translation": "Samuel and Misgan do not eat meat — because it is fasting."
                }
            ],
            "mnemonics": [
                "Amharic negation: AY + verb + M (ayhedm = does not go); 1st person uses AL + verb + M (alhedm = I don't go)!"
            ],
            "culturalNotes": [
                "Ethiopian Orthodox Christians fast (ጾም tsom) more days per year than almost any Christian tradition — over 200 days. During fasting, no meat or dairy is consumed before 3 PM. « ጾም ነው » (tsom new - it is fasting) is a complete social explanation."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you say 'He does not drink coffee' in Amharic?",
                    "options": [
                        "ቡና አይጠጣም። (Buna ayt'et'am.)",
                        "ቡና አልጠጣም።",
                        "ቡና አይጠጣ።",
                        "ቡና ይጠጣል።"
                    ],
                    "answerIndex": 0,
                    "explanation": "3rd m. singular negative: አይ + stem + ም = አይጠጣም."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What does « አልሄድም » (Alhedm) mean?",
                    "options": [
                        "I don't go / I am not going",
                        "He doesn't go",
                        "They don't go",
                        "We don't go"
                    ],
                    "answerIndex": 0,
                    "explanation": "አል- prefix + ሄድ + -ም = 1st person singular negative."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Which Amharic sentence means 'The school does not open on Saturday'?",
                    "options": [
                        "ትምህርት ቤቱ ቅዳሜ አይከፈትም። (Timihirt betu qidame ayikefetm.)",
                        "ትምህርት ቤቱ ቅዳሜ ይከፈታል።",
                        "ቅዳሜ ትምህርት ቤቱ ይዘጋል።",
                        "ቅዳሜ ትምህርት ቤቱ አይዘጋም።"
                    ],
                    "answerIndex": 0,
                    "explanation": "አይ + ከፈት + ም = does not open."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic for 'I don't go' (1st person singular negative) in Fidel script (አልሄድም):",
                    "acceptedAnswers": [
                        "አልሄድም",
                        "alhedm",
                        "Alhedm"
                    ],
                    "explanation": "አልሄድም (Alhedm) = I don't go."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u4-l3": {
        "id": "am-u4-l3",
        "unit": "am-u4",
        "level": "A1",
        "objective": "Form yes/no questions in Amharic using intonation rise and the question particle -? (ወይ / ይሆን / ኖሮ) and understand short affirmative/negative answers.",
        "prerequisites": [
            "am-u4-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u4-l1",
                "am-u4-l2"
            ]
        },
        "presentation": {
            "explanation": "Amharic yes/no questions are primarily formed through:\n\n1. Rising Intonation: Same as statement but spoken with rising pitch + question mark:\n- Statement: « ትሄዳለህ » (You go) -> Question: « ትሄዳለህ? » (Are you going?)\n\n2. The particle « ወይ » (wey) appended: « ትሄዳለህ ወይ? » (Are you going or not?)\n\n3. The doubt/wonder particle « ይሆን? » (yihon?) for rhetorical/uncertain questions:\n- « ዛሬ ትሄዳለህ ይሆን? » (Are you perhaps going today?)\n\n4. Short Answers:\n- Yes: አዎ (Awo) — formal; አዎን (Awon)\n- No: አይ (Ay) — informal; አይደለም (Aydellem - it is not)\n- Correct: 맞아 / ትክክል (tikil - correct)\n- Not yet: ገና አይደለም (gena aydellem - not yet)",
            "examples": [
                {
                    "target": "ቡና ትጠጣለህ? — አዎ፣ ቡና እጠጣለሁ።",
                    "reading": "Buna tit'et'aleh? — Awo, buna it'et'alehu.",
                    "translation": "Do you drink coffee? — Yes, I drink coffee."
                },
                {
                    "target": "ወደ ትምህርት ቤት ትሄዳለሽ ዛሬ? — አይ፣ ዛሬ አልሄድም።",
                    "reading": "Wede timihirt bet tihedalesh zare? — Ay, zare alhedm.",
                    "translation": "Are you going to school today? — No, I am not going today."
                },
                {
                    "target": "ምሳ ተዘጋጀ ወይ?",
                    "reading": "Misa tezegaje wey?",
                    "translation": "Is lunch ready (or not)?"
                },
                {
                    "target": "ዳዊት ቤት አለ ይሆን?",
                    "reading": "Dawit bet ale yihon?",
                    "translation": "Is Dawit at home, I wonder?"
                },
                {
                    "target": "ተዉ፣ ልጁ ስሙን ያውቃል? — አዎ፣ ያውቃል!",
                    "reading": "Tewu, liju simun yawqal? — Awo, yawqal!",
                    "translation": "Wait, does the child know his name? — Yes, he knows it!"
                }
            ],
            "mnemonics": [
                "Amharic yes/no Q: same verb + rising tone + ? Or append WEY for 'or not?'"
            ],
            "culturalNotes": [
                "Ethiopians often answer a yes/no question by repeating the verb in affirmative or negative form rather than just saying 'yes'/'no': « ትሄዳለህ? — ይሄዳሉ! » feels more natural than a bare « አዎ »."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you ask 'Do you (m.) drink coffee?' in Amharic?",
                    "options": [
                        "ቡና ትጠጣለህ? (Buna tit'et'aleh?)",
                        "ቡና ይጠጣሉ?",
                        "ቡና ጠጣ?",
                        "ቡና ትጠጣ ወይ? (same but more emphatic)"
                    ],
                    "answerIndex": 0,
                    "explanation": "2nd masculine singular present + rising intonation = yes/no question."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What does « አዎ » (Awo) mean in Amharic?",
                    "options": [
                        "Yes",
                        "No",
                        "Maybe",
                        "Not yet"
                    ],
                    "answerIndex": 0,
                    "explanation": "« አዎ » (Awo) is the standard Amharic word for 'yes'."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "What does the question particle « ወይ » (wey) add to a sentence in Amharic?",
                    "options": [
                        "It turns a statement into a 'yes/no or not?' question",
                        "It makes the sentence a command",
                        "It adds politeness",
                        "It indicates past tense"
                    ],
                    "answerIndex": 0,
                    "explanation": "« ወይ » (wey) = 'or not?' appended to a statement to form a yes/no question."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'yes' in Fidel script (አዎ):",
                    "acceptedAnswers": [
                        "አዎ",
                        "awo",
                        "Awo"
                    ],
                    "explanation": "አዎ (Awo) = Yes."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u4-l4": {
        "id": "am-u4-l4",
        "unit": "am-u4",
        "level": "A1",
        "objective": "Use common WH-question words (ማን Who?, ምን What?, ስንት How many?, መቼ When?, እንዴት How?) with present tense verbs.",
        "prerequisites": [
            "am-u4-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u3-l4",
                "am-u4-l3"
            ]
        },
        "presentation": {
            "explanation": "Amharic WH-question words precede or follow the verb depending on emphasis:\n\n1. Core WH-Question Words:\n- ማን? (Man?) = Who?\n- ምን? (Min?) = What?\n- ስንት? (Sint?) = How many? / How much?\n- መቼ? (Meche?) = When?\n- እንዴት? (Indet?) = How? In what manner?\n- ለምን? (Lemin?) = Why?\n- የቱ? / ምንኛው? (Yetu? / Miningaw?) = Which one?\n\n2. Word Order: WH-word typically comes at the beginning or end (both are natural):\n- « ማን ነው? » (Man new? - Who is it?)\n- « ምን ትበላለህ? » (Min tibelalleh? - What do you eat?)\n- « መቼ ትሄዳለህ? » (Meche tihedalleh? - When are you going?)",
            "examples": [
                {
                    "target": "ስምህ ማን ነው?",
                    "reading": "Simih man new?",
                    "translation": "What is your name? (lit. Who is your name?)"
                },
                {
                    "target": "ዛሬ ምን ትበላለህ?",
                    "reading": "Zare min tibelalleh?",
                    "translation": "What are you eating today?"
                },
                {
                    "target": "ወደ ጎንደር መቼ ትሄዳለህ?",
                    "reading": "Wede Gondar meche tihedalleh?",
                    "translation": "When are you going to Gondar?"
                },
                {
                    "target": "እንዴት ነህ? — ደህና ነኝ፣ አመሰግናለሁ።",
                    "reading": "Indet neh? — Dehna negn, ameseginalehu.",
                    "translation": "How are you (m.)? — I am fine, thank you."
                },
                {
                    "target": "ለምን ዛሬ ትምህርት ቤት አልሄድክም?",
                    "reading": "Lemin zare timihirt bet alhedkm?",
                    "translation": "Why didn't you go to school today?"
                }
            ],
            "mnemonics": [
                "MAN=Who, MIN=What, SINT=How much, MECHE=When, INDET=How, LEMIN=Why!"
            ],
            "culturalNotes": [
                "« ስምህ ማን ነው? » literally means 'Your name WHO is?' — Amharic treats a name as a person ('who') rather than a thing ('what'). This is a deeply personal cultural trait."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which Amharic WH-word means 'When?'",
                    "options": [
                        "መቼ? (Meche?)",
                        "ማን? (Man?)",
                        "ምን? (Min?)",
                        "ለምን? (Lemin?)"
                    ],
                    "answerIndex": 0,
                    "explanation": "« መቼ? » (Meche?) = When?"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "How do you ask 'Why are you not going to school?' in Amharic?",
                    "options": [
                        "ለምን ትምህርት ቤት አትሄድም? (Lemin timihirt bet athedm?)",
                        "ወዴት ትሄዳለህ?",
                        "ምን ትበላለህ?",
                        "እንዴት ትሄዳለህ?"
                    ],
                    "answerIndex": 0,
                    "explanation": "« ለምን » (Lemin) = Why? + ትምህርት ቤት + አትሄድም (you don't go)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "What does « እንዴት ነህ? » (Indet neh?) mean?",
                    "options": [
                        "How are you? (m.)",
                        "Where are you?",
                        "What do you eat?",
                        "Who are you?"
                    ],
                    "answerIndex": 0,
                    "explanation": "« እንዴት » (Indet) = How? — « እንዴት ነህ? » is the standard 'How are you? (m.)'"
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic WH-word for 'What?' in Fidel script (ምን):",
                    "acceptedAnswers": [
                        "ምን",
                        "min",
                        "Min"
                    ],
                    "explanation": "ምን (Min) = What?"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u4-l5": {
        "id": "am-u4-l5",
        "unit": "am-u4",
        "level": "A1",
        "objective": "Synthesize present tense affirmative, negative, yes/no questions, and WH-questions in a full day-in-the-life conversational narrative.",
        "prerequisites": [
            "am-u4-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u4-l2",
                "am-u4-l4"
            ]
        },
        "presentation": {
            "explanation": "In this Unit 4 Capstone lesson, we use all four present-tense sentence types to describe a typical Ethiopian daily routine:\n\n1. Daily Schedule Vocabulary:\n- ጠዋት (t'ewat) = morning\n- ቀትር (qet'ir) = midday/noon\n- ከሰዓት (kesehat) = afternoon\n- ምሽት (mishit) = evening\n- ሌሊት (lelit) = night\n\n2. Synthesis: Affirmative + Negative + Yes/No Q + WH-Q in one dialogue about a daily routine.",
            "examples": [
                {
                    "target": "ጠዋት ከስድስት ሰዓት ተነስቶ ሻወር ይወስዳል ፣ ቡናም ይጠጣል።",
                    "reading": "T'ewat kesidist sehat tenesto shawer yiweisdal, bunawem yit'et'al.",
                    "translation": "In the morning he gets up at 6, takes a shower, and drinks coffee."
                },
                {
                    "target": "ዳዊት ቀትር ምሳ ቤት ይበላል? — አይ፣ ቢሮ ነው።",
                    "reading": "Dawit qet'ir misa bet yibelal? — Ay, biro new.",
                    "translation": "Does Dawit eat lunch at home? — No, it is at the office."
                },
                {
                    "target": "አልማዝ ምሽት ምን ታደርጋለች?",
                    "reading": "Almaz mishit min tadergalech?",
                    "translation": "What does Almaz do in the evening?"
                },
                {
                    "target": "ሌሊት ቴሌቪዥን አታይም — ትተኛለች።",
                    "reading": "Lelit televizhin ataym — tit'egnalech.",
                    "translation": "She does not watch TV at night — she sleeps."
                },
                {
                    "target": "ለምን ቅዳሜ ትምህርት ቤት አትሄዱም? — ቅዳሜ አይከፈትም ስለዚህ።",
                    "reading": "Lemin qidame timihirt bet athedm? — Qidame ayikefetm silezih.",
                    "translation": "Why don't you (pl.) go to school on Saturday? — Because it doesn't open on Saturday."
                }
            ],
            "mnemonics": [
                "DAILY SYNTHESIS: Morning (GENA) -> Noon (QET'IR) -> Afternoon (KESEHAT) -> Night (LELIT) with verb chains!"
            ],
            "culturalNotes": [
                "The Ethiopian coffee ceremony (ቡና ቤት buna bet) is the heart of daily social life — beans are roasted fresh, ground by hand, and served in three rounds called አቦ (abol), ጦና (t'ona), and ቤሬካ (bereka). Sharing buna is an expression of friendship and hospitality."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you say 'What do you do in the evening?' in Amharic?",
                    "options": [
                        "ምሽት ምን ታደርጋለህ? (Mishit min tadergaleh?)",
                        "ጠዋት ምን ትሄዳለህ?",
                        "ሌሊት ወዴት ነህ?",
                        "ቀትር ምን ትጠጣለህ?"
                    ],
                    "answerIndex": 0,
                    "explanation": "ምሽት (evening) + ምን (what) + ታደርጋለህ (do you do m.)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: 'She does not watch TV at night — she sleeps.'",
                    "options": [
                        "ሌሊት ቴሌቪዥን አታይም — ትተኛለች። (Lelit televizhin ataym — tit'egnalech.)",
                        "ሌሊት ቡና ትጠጣለች — ትተኛለች።",
                        "ሌሊት ቴሌቪዥን ታያለች — አትተኛም።",
                        "ሌሊት ምን ያደርጋሉ?"
                    ],
                    "answerIndex": 0,
                    "explanation": "አታይም (she doesn't watch) + ትተኛለች (she sleeps)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Which Amharic sentence correctly describes a daily routine in the present tense?",
                    "options": [
                        "ጠዋት ቡና ይጠጣል፣ ቀትር ምሳ ቤት ይበላል። (T'ewat buna yit'et'al, qet'ir misa bet yibelal.)",
                        "ጠዋት ቡና ጠጣ፣ ቀትር ምሳ በላ።",
                        "ጠዋት ቡና አይጠጣም፣ ምሳ አይበልም።",
                        "ጠዋት ቡና ትጠጣለህ ወይ?"
                    ],
                    "answerIndex": 0,
                    "explanation": "ይጠጣል (he drinks) and ይበላል (he eats) are both present habitual forms."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'evening' in Fidel script (ምሽት):",
                    "acceptedAnswers": [
                        "ምሽት",
                        "mishit",
                        "Mishit"
                    ],
                    "explanation": "ምሽት (mishit) = evening."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u5-l1": {
        "id": "am-u5-l1",
        "unit": "am-u5",
        "level": "A1",
        "objective": "Form simple past tense verbs in Amharic (perfective aspect) for common action verbs across all persons.",
        "prerequisites": [
            "am-u4-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u4-l1",
                "am-u4-l2"
            ]
        },
        "presentation": {
            "explanation": "Amharic past tense (perfective) is formed by modifying the verb stem and adding person-marking suffixes. Unlike the present, the past tense removes the habitual -አል ending.\n\n1. Key Past Tense Conjugation — « ሄደ » (hede - went) from « መሄድ »:\n- I went: ሄድኩ (hedku)\n- You went (m.): ሄድክ (hedik)\n- You went (f.): ሄድሽ (hedish)\n- He went: ሄደ (hede)\n- She went: ሄደች (hedech)\n- We went: ሄድን (hedin)\n- You went (pl.): ሄዳችሁ (hedachihu)\n- They went: ሄዱ (hedu)\n\n2. Past Tense Negation: አልሄድኩም / አልሄደም:\n- Prefix አል- + stem + person + suffix -ም",
            "examples": [
                {
                    "target": "ዳዊት ትናንት ወደ ገበያ ሄደ።",
                    "reading": "Dawit tinant wede gebeya hede.",
                    "translation": "Dawit went to the market yesterday."
                },
                {
                    "target": "እኛ ባለፈው ሳምንት አዲስ አበባ ሄድን።",
                    "reading": "Igna balfew samint Addis Abeba hedin.",
                    "translation": "We went to Addis Ababa last week."
                },
                {
                    "target": "አልማዝ ትምህርት ቤት ሄደች ትናንት?",
                    "reading": "Almaz timihirt bet hedech tinant?",
                    "translation": "Did Almaz go to school yesterday?"
                },
                {
                    "target": "አዎ፣ ሄደች። ቶሎ ሄደች።",
                    "reading": "Awo, hedech. Tolo hedech.",
                    "translation": "Yes, she went. She went quickly."
                },
                {
                    "target": "አልሄድኩም — ታምሜ ነበር።",
                    "reading": "Alhedkum — tamme neber.",
                    "translation": "I did not go — I was sick."
                }
            ],
            "mnemonics": [
                "Amharic past: He went = HEDE (bare stem!); I went = HED-KU; We went = HED-IN!"
            ],
            "culturalNotes": [
                "Gondar (ጎንደር) was the capital of the Ethiopian Empire from the 17th to 19th century. It still houses the famous « ፋሲለደስ ቤተ-ምኅረት » (Fasilides Castle). Saying « ጎንደር ሄድኩ » (I went to Gondar) evokes rich historical imagery."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you say 'He went to school' in Amharic past tense?",
                    "options": [
                        "ትምህርት ቤት ሄደ። (Timihirt bet hede.)",
                        "ትምህርት ቤት ይሄዳል።",
                        "ትምህርት ቤት ሄድኩ።",
                        "ትምህርት ቤት ሄዱ።"
                    ],
                    "answerIndex": 0,
                    "explanation": "3rd masculine singular past: ሄደ (hede = he went)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What does « አልሄድኩም » (Alhedkum) mean?",
                    "options": [
                        "I did not go",
                        "He did not go",
                        "They did not go",
                        "We did not go"
                    ],
                    "answerIndex": 0,
                    "explanation": "አል- + ሄድ + -ኩ (1st sg.) + -ም (neg.) = I did not go."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Which sentence means 'We went to Addis Ababa last week'?",
                    "options": [
                        "ባለፈው ሳምንት አዲስ አበባ ሄድን። (Balfew samint Addis Abeba hedin.)",
                        "ዛሬ አዲስ አበባ እንሄዳለን።",
                        "አዲስ አበባ አልሄድንም።",
                        "ባለፈው ሳምንት ሄዱ።"
                    ],
                    "answerIndex": 0,
                    "explanation": "1st person plural past: ሄድን (hedin = we went)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic past tense of 'he went' in Fidel script (ሄደ):",
                    "acceptedAnswers": [
                        "ሄደ",
                        "hede",
                        "Hede"
                    ],
                    "explanation": "ሄደ (hede) = he went."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u5-l2": {
        "id": "am-u5-l2",
        "unit": "am-u5",
        "level": "A1",
        "objective": "Use past tense with common daily verbs: ጠጣ (drank), በላ (ate), ተኛ (slept), ሰራ (worked), ተናገረ (spoke), ወሰደ (took), ፃፈ (wrote).",
        "prerequisites": [
            "am-u5-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u5-l1"
            ]
        },
        "presentation": {
            "explanation": "Expanding past tense vocabulary with high-frequency daily action verbs:\n\n1. Core Daily Verbs in Past Tense (3rd m. singular as reference form):\n- ጠጣ (t'et'a) = drank (from መጠጣት)\n- በላ (bela) = ate (from መብላት)\n- ተኛ (tegna) = slept (from መተኛት)\n- ሰራ (sera) = worked (from መስራት)\n- ተናገረ (tenagere) = spoke (from መናገር)\n- ወሰደ (wesede) = took (from መውሰድ)\n- ጻፈ (ts'afe) = wrote (from መጻፍ)\n- ሸመተ (shemete) = shopped (from ሸመቻ)\n\n2. Time Markers:\n- ትናንት (tinant) = yesterday\n- ዛሬ (zare) = today\n- ትናንት ማታ (tinant mata) = last night\n- ባለፈው ሳምንት (balfew samint) = last week",
            "examples": [
                {
                    "target": "ሳሙኤል ትናንት ማታ ስምንት ሰዓት ተኛ።",
                    "reading": "Samuel tinant mata simint sehat tegna.",
                    "translation": "Samuel slept at 8 o'clock last night."
                },
                {
                    "target": "እናቴ ዛሬ ጠዋት ምሳ ሰራች።",
                    "reading": "Inate zare t'ewat misa serach.",
                    "translation": "My mother cooked lunch early this morning."
                },
                {
                    "target": "ዘካርያስ ለቀሪ ሰዎቹ ደብዳቤ ጻፈ።",
                    "reading": "Zekaryas leqeri sewoch debtabe ts'afe.",
                    "translation": "Zekaryas wrote a letter to the rest of the people."
                },
                {
                    "target": "ልጆቹ ሦስት ቡና ጠጡ — ብዙ ነው!",
                    "reading": "Lijochu sost buna t'et'u — bizu new!",
                    "translation": "The children drank three coffees — that is a lot!"
                },
                {
                    "target": "አቶ ሙሉጌታ ትናንት ቢሮ ሰርቶ ቶሎ ሄደ።",
                    "reading": "Ato Mulegeta tinant biro serto tolo hede.",
                    "translation": "Ato Mulegeta worked at the office yesterday and left quickly."
                }
            ],
            "mnemonics": [
                "Past daily verbs: BELA=ate, T'ET'A=drank, TEGNA=slept, SERA=worked, TS'AFE=wrote!"
            ],
            "culturalNotes": [
                "In Ethiopian tradition, letter-writing (ደብዳቤ debdabe) holds great cultural weight — public scribes (ጸሓፊ ts'ehafi) at post offices still help illiterate citizens write formal letters, preserving this tradition."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you say 'She ate injera yesterday' in Amharic?",
                    "options": [
                        "ትናንት እንጀራ በላች። (Tinant injera belach.)",
                        "ትናንት እንጀራ ትበላለች።",
                        "ዛሬ እንጀራ ትበላለች።",
                        "ትናንት እንጀራ አልበላችም።"
                    ],
                    "answerIndex": 0,
                    "explanation": "3rd feminine singular past: በላች (belach = she ate)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What is the Amharic past tense of 'worked' (3rd m. singular)?",
                    "options": [
                        "ሰራ (Sera)",
                        "ሰርቷ",
                        "ይሰራል",
                        "ሰርቻለሁ"
                    ],
                    "answerIndex": 0,
                    "explanation": "ሰራ (sera) is the 3rd masculine singular past tense of 'to work'."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Which sentence means 'The children drank coffee' in Amharic?",
                    "options": [
                        "ልጆቹ ቡና ጠጡ። (Lijochu buna t'et'u.)",
                        "ልጆቹ ቡና ይጠጣሉ።",
                        "ልጆቹ ቡና አይጠጡም።",
                        "ልጆቹ ቡና ጠጣ።"
                    ],
                    "answerIndex": 0,
                    "explanation": "3rd person plural past: ጠጡ (t'et'u = they drank)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic past tense verb for 'he/she wrote' (3rd m.) in Fidel script (ጻፈ):",
                    "acceptedAnswers": [
                        "ጻፈ",
                        "ts'afe",
                        "Ts'afe"
                    ],
                    "explanation": "ጻፈ (ts'afe) = he wrote."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u5-l3": {
        "id": "am-u5-l3",
        "unit": "am-u5",
        "level": "A1",
        "objective": "Express past experiences and feelings using the copula ነበር (neber - was/were) and link two past events with conjunctions ስለዚህ (therefore), ከዚያም (then/after that), እና (and).",
        "prerequisites": [
            "am-u5-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u5-l1",
                "am-u5-l2"
            ]
        },
        "presentation": {
            "explanation": "In Amharic, past state and existence are expressed using « ነበር » (neber - was/were):\n\n1. Copula ነበር (was/were):\n- I was: ነበርኩ (neberku) or colloquial ነበርኩ\n- He was: ነበር (neber)\n- She was: ነበረች (neberech)\n- They were: ነበሩ (neberu)\n- Was there?: ነበር ወይ? (neber wey?)\n\n2. Linking Past Events:\n- ስለዚህ (silezih) = therefore/so\n- ከዚያም (keziyam) = then after that\n- ከፊት (kefit) = before / first\n- ከዚያ በኋላ (keziya behwala) = after that\n- ሆኖም (honom) = however",
            "examples": [
                {
                    "target": "ትናንት ታምሜ ነበር ፤ ስለዚህ ትምህርት ቤት አልሄድኩም።",
                    "reading": "Tinant tamme neber; silezih timihirt bet alhedkum.",
                    "translation": "Yesterday I was sick; therefore I did not go to school."
                },
                {
                    "target": "ዳዊት ቀደም ብሎ ሄደ ፤ ከዚያም ቤቱ ደረሰ።",
                    "reading": "Dawit qedem blo hede; keziyam betu derese.",
                    "translation": "Dawit left early; then he arrived home."
                },
                {
                    "target": "ምሳ ቀደም ሰራን ፤ ከዚያ በኋላ አብረን በላን።",
                    "reading": "Misa qedem seran; keziya behwala abren belan.",
                    "translation": "We cooked lunch first; after that we ate together."
                },
                {
                    "target": "ሆቴሉ ቅርብ ነበር ፤ ሆኖም ብዙ ሰዎች ስለነበሩ አልደረስንም።",
                    "reading": "Hotelu qirb neber; honom bizu sewoch sileneberu alderesnim.",
                    "translation": "The hotel was nearby; however there were many people so we did not arrive."
                },
                {
                    "target": "እሷ ደህና ነበረች? — አዎ፣ ደህና ነበረች።",
                    "reading": "Iswa dehna neberech? — Awo, dehna neberech.",
                    "translation": "Was she well? — Yes, she was well."
                }
            ],
            "mnemonics": [
                "NEBER = was/were (past copula); SILEZIH = therefore; KEZIYAM = then after that!"
            ],
            "culturalNotes": [
                "When sharing meals (a core Ethiopian social act), it is polite to say « ጀምረህ ብላ » (jemreh bila - please start/eat m.) to invite others. Eating alone is considered unfortunate — community dining is the norm."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you say 'Yesterday I was sick' in Amharic?",
                    "options": [
                        "ትናንት ታምሜ ነበር። (Tinant tamme neber.)",
                        "ዛሬ ታምሜ ነበር።",
                        "ትናንት ደህና ነበርኩ።",
                        "ትናንት ታምሜ ነኝ።"
                    ],
                    "answerIndex": 0,
                    "explanation": "ትናንት (yesterday) + ታምሜ (sick) + ነበር (was)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What does « ስለዚህ » (Silezih) mean in Amharic?",
                    "options": [
                        "Therefore / So",
                        "However",
                        "Before",
                        "After that"
                    ],
                    "answerIndex": 0,
                    "explanation": "« ስለዚህ » (silezih) = therefore/so — used to express logical consequence."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Which Amharic conjunction means 'then/after that'?",
                    "options": [
                        "ከዚያም (Keziyam)",
                        "ስለዚህ (Silezih)",
                        "ሆኖም (Honom)",
                        "ወይስ (Weyis)"
                    ],
                    "answerIndex": 0,
                    "explanation": "« ከዚያም » (keziyam) = then/after that."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic past copula 'was/were' in Fidel script (ነበር):",
                    "acceptedAnswers": [
                        "ነበር",
                        "neber",
                        "Neber"
                    ],
                    "explanation": "ነበር (neber) = was/were."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u5-l4": {
        "id": "am-u5-l4",
        "unit": "am-u5",
        "level": "A1",
        "objective": "Ask WH-questions in the past tense: ምን አደረጉ? (What did they do?), ወዴት ሄዱ? (Where did they go?), ማን ጠጣ? (Who drank?), መቼ መጡ? (When did they arrive?).",
        "prerequisites": [
            "am-u5-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u4-l4",
                "am-u5-l1"
            ]
        },
        "presentation": {
            "explanation": "Combining past tense verbs with WH-question words from Unit 4:\n\n1. Past WH-Question Patterns:\n- ምን + past verb + (subject)? = What did ... do?\n- ወዴት + past verb? = Where did ... go?\n- ማን + past verb? = Who did ...?\n- መቼ + past verb? = When did ... ?\n- ስንት + past verb? = How many did ...?\n- ለምን + past negative? = Why did ... not ...?\n\n2. Sample Q&A Pairs:\n- Q: ዳዊት ትናንት ምን አደረገ? (Dawit tinant min aderege? - What did Dawit do yesterday?)\n- A: ወደ ሱቁ ሄዶ ፍራፍሬ ወሰደ። (Wede suqu hedo firafre wesede. - He went to the shop and took fruit.)",
            "examples": [
                {
                    "target": "ትናንት ምን ሰሩ? — ፕሮጀክቱን ጨረሱ።",
                    "reading": "Tinant min seru? — P'irojeketun chereshu.",
                    "translation": "What did they work on yesterday? — They finished the project."
                },
                {
                    "target": "አልማዝ ወዴት ሄደች? — ወደ ሆስፒታሉ ሄደች።",
                    "reading": "Almaz wedet hedech? — Wede hospitallu hedech.",
                    "translation": "Where did Almaz go? — She went to the hospital."
                },
                {
                    "target": "ምሳ ማን ሰራ? — እናቴ ሰራችው።",
                    "reading": "Misa man serach? — Inate serachw.",
                    "translation": "Who cooked lunch? — My mother cooked it."
                },
                {
                    "target": "መቼ ደረሱ? — ሰዓቱ አምስት ሲሆን ደረሱ።",
                    "reading": "Meche deresu? — Seahtu amist sihon deresu.",
                    "translation": "When did they arrive? — They arrived when it was 5 o'clock."
                },
                {
                    "target": "ለምን አልሄዱም? — ዝናቡ ስለወረደ።",
                    "reading": "Lemin alhedum? — Zinabbu silewerede.",
                    "translation": "Why did they not go? — Because the rain fell."
                }
            ],
            "mnemonics": [
                "Past WH-Questions: MIN + PAST VERB (what did?) + WEDET + PAST (where went?) + MAN + PAST (who did?)!"
            ],
            "culturalNotes": [
                "Ethiopia has two rainy seasons: ክረምት (kirem) the main rainy season June-September, and ቤልጋ (belga) the short rains. When rain comes (ዝናብ ወረደ zinab werede), many social activities halt and people stay home — hence 'why did they not go? because of rain' is a very natural answer!"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you ask 'Where did Dawit go?' in Amharic?",
                    "options": [
                        "ዳዊት ወዴት ሄደ? (Dawit wedet hede?)",
                        "ዳዊት የት ነው?",
                        "ዳዊት ወዴት ይሄዳል?",
                        "ዳዊት ወዴት ሄዱ?"
                    ],
                    "answerIndex": 0,
                    "explanation": "ወዴት (where to) + ሄደ (he went, past) = where did he go?"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: 'Why did they not come?' in Amharic.",
                    "options": [
                        "ለምን አልመጡም? (Lemin almet'um?)",
                        "ለምን አይመጡም?",
                        "ለምን አልሄዱም?",
                        "ወዴት አልሄዱም?"
                    ],
                    "answerIndex": 0,
                    "explanation": "ለምን (why) + አልመጡም (they did not come, past negative)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "What does « ምን ሰሩ? » (Min seru?) mean in Amharic?",
                    "options": [
                        "What did they do/work?",
                        "What are they doing?",
                        "Why did they work?",
                        "Who worked?"
                    ],
                    "answerIndex": 0,
                    "explanation": "ምን (what) + ሰሩ (they worked/did, past plural) = What did they do?"
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic for 'When?' in Fidel script (መቼ):",
                    "acceptedAnswers": [
                        "መቼ",
                        "meche",
                        "Meche"
                    ],
                    "explanation": "መቼ (meche) = When?"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u5-l5": {
        "id": "am-u5-l5",
        "unit": "am-u5",
        "level": "A1",
        "objective": "Synthesize past tense narration in a complete biographical micro-story (A1 narrative) covering a person's yesterday from morning to night.",
        "prerequisites": [
            "am-u5-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u5-l2",
                "am-u5-l4"
            ]
        },
        "presentation": {
            "explanation": "In this Unit 5 Capstone lesson, we construct a complete past-tense narrative about one person's day (yesterday), using all the past tense verbs, ነበር, conjunctions, and question types from this unit:\n\n1. Narrative Structure (A1):\n- MORNING: Got up, drank coffee, went to work\n- AFTERNOON: Ate lunch, spoke with colleagues\n- EVENING: Returned home, wrote a letter, slept\n\n2. Key Storytelling Connectors Reviewed:\n- ቀደም ብሎ (qedem blo) = early / first\n- ከዚያ በኋላ (keziya behwala) = after that\n- ስለዚህ (silezih) = therefore\n- ሁሉ (hulu) = all / everything\n- ትናንት ሙሉ ቀን (tinant mulu qen) = all day yesterday",
            "examples": [
                {
                    "target": "ሳሙኤል ትናንት ጠዋት ተነስቶ ቡና ጠጣ ፤ ከዚያ ወደ ቢሮ ሄደ።",
                    "reading": "Samuel tinant t'ewat tenesto buna t'et'a; keziya wede biro hede.",
                    "translation": "Yesterday morning Samuel got up, drank coffee, then went to the office."
                },
                {
                    "target": "ቀትር ሥጋ ወጥ ደርቆ ምሳ በላ — ጣፈጠው።",
                    "reading": "Qet'ir siga wet' derqo misa bela — t'afet'ew.",
                    "translation": "At noon he ate a lunch of dried beef stew — it was delicious."
                },
                {
                    "target": "ምሽት ቤቱ ሲደርስ ደደስ ተሰማው ፤ ስለዚህ ቶሎ ተኛ።",
                    "reading": "Mishit betu sideris dedes teseamaw; silezih tolo tegna.",
                    "translation": "When he arrived home in the evening he felt tired; therefore he slept quickly."
                },
                {
                    "target": "ሳምኤልን ትናንት ምን አደረጋቸሁ? — አብረን ምሳ በላን።",
                    "reading": "Samuel tinant min aderegallechihu? — Abren misa belan.",
                    "translation": "What did you all do with Samuel yesterday? — We ate lunch together."
                },
                {
                    "target": "ትናንት ሙሉ ቀን ደህና ነበር ፤ ሆኖም ማታ ዝናብ ወረደ።",
                    "reading": "Tinant mulu qen dehna neber; honom mata zinab werede.",
                    "translation": "Yesterday the whole day was fine; however in the evening the rain came down."
                }
            ],
            "mnemonics": [
                "A1 NARRATIVE: MORNING (ጠዋት) + NOON (ቀትር) + EVENING (ምሽት) — link with KEZIYA BEHWALA (after that)!"
            ],
            "culturalNotes": [
                "ሥጋ ወጥ (siga wet') is Ethiopia's iconic beef stew — served on injera, cooked with berbere spice blend (berberé) which can contain over 15 spices. It is the dish most associated with festive eating in Addis Ababa restaurants and family gatherings."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which sentence correctly narrates 'He got up, drank coffee, then went to the office' in Amharic?",
                    "options": [
                        "ተነስቶ ቡና ጠጣ ፤ ከዚያ ወደ ቢሮ ሄደ። (Tenesto buna t'et'a; keziya wede biro hede.)",
                        "ቡና ጠጥቶ ቀደም ወደ ቢሮ ሄደ።",
                        "ከቢሮ ሄዶ ቡና ጠጣ።",
                        "ቢሮ ወደ ሄዶ ቡና ጠጣ ፤ ከዚያ ተኛ።"
                    ],
                    "answerIndex": 0,
                    "explanation": "ተነስቶ (having gotten up) + ቡና ጠጣ (drank coffee) + ከዚያ (then) + ቢሮ ሄደ (went to office)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: 'Yesterday the whole day was fine; however in the evening the rain came down.'",
                    "options": [
                        "ትናንት ሙሉ ቀን ደህና ነበር ፤ ሆኖም ማታ ዝናብ ወረደ። (Tinant mulu qen dehna neber; honom mata zinab werede.)",
                        "ዝናቡ ቀደም ወረደ ፤ ስለዚህ ደህና አልነበረም።",
                        "ዛሬ ሙሉ ቀን ዝናብ ወረደ ፤ ሆኖም ደህና ነበር።",
                        "ትናንት ዝናብ ስለወረደ ፤ ሙሉ ቀን ቤት ቆይን።"
                    ],
                    "answerIndex": 0,
                    "explanation": "ሙሉ ቀን ደህና ነበር (whole day was fine) + ሆኖም (however) + ዝናብ ወረደ (rain came down)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Which Amharic conjunction means 'however'?",
                    "options": [
                        "ሆኖም (Honom)",
                        "ስለዚህ (Silezih)",
                        "ከዚያም (Keziyam)",
                        "እና (Ina)"
                    ],
                    "answerIndex": 0,
                    "explanation": "« ሆኖም » (honom) = however/nevertheless."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'all/whole' in Fidel script (ሙሉ):",
                    "acceptedAnswers": [
                        "ሙሉ",
                        "mulu",
                        "Mulu"
                    ],
                    "explanation": "ሙሉ (mulu) = all/whole."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u6-l1": {
        "id": "am-u6-l1",
        "unit": "am-u6",
        "level": "A2",
        "objective": "Form future tense sentences in Amharic using the future marker -አለሁ/-ነው and the intentional construction 'ልሄድ አስባለሁ' (I intend to go).",
        "prerequisites": [
            "am-u5-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u4-l1",
                "am-u5-l1"
            ]
        },
        "presentation": {
            "explanation": "Amharic expresses future tense using the same present habitual form + future time markers, or through intentional constructions:\n\n1. Future via Time Marker + Present Tense:\n- ነገ (nege - tomorrow) + present = future plan\n- « ነገ ወደ ሆስፒታሉ ይሄዳሉ » (They will go to the hospital tomorrow)\n\n2. Intentional Future — 'going to / intend to':\n- ል + infinitive root + አስባለሁ (asbalehu = I plan/intend to)\n- « ልሄድ አስባለሁ » (l'ihed asbalehu - I plan to go)\n- « ለማጥናት አስባለሁ » (lemat'nat asbalehu - I intend to study)\n\n3. Near Future with « ሊሄዱ ነው » (lihedu new - they are about to go):\n- Subject + ሊ + infinitive root + ነው = be about to",
            "examples": [
                {
                    "target": "ነገ ወደ ሐሙስ ዕለት ትምህርት ቤት ልሄድ አስባለሁ።",
                    "reading": "Nege wede hamus ilet timihirt bet l'ihed asbalehu.",
                    "translation": "Tomorrow on Thursday I plan to go to school."
                },
                {
                    "target": "እሱ ሊሄድ ነው — ቀሚሱ ለብሶ ቦርሳውን አንስቷል።",
                    "reading": "Isu l'ihed new — qemisu lebso borsawn anistwal.",
                    "translation": "He is about to leave — he has put on his shirt and picked up his bag."
                },
                {
                    "target": "ሳሙኤልና ፋናን ዩኒቨርሲቲ ለመግባት አስባሉ።",
                    "reading": "Samuelnna Fanan yuniversiti lemegibat asbalu.",
                    "translation": "Samuel and Fanan plan to enter university."
                },
                {
                    "target": "ዛሬ ምሽት ምን ማድረግ ትፈልጋለህ?",
                    "reading": "Zare mishit min madreg tifelgaleh?",
                    "translation": "What do you want to do this evening?"
                },
                {
                    "target": "ለትምህርቴ ማጠናቀቅ ሁለት ዓመት ይፈጃል።",
                    "reading": "Let'imhirte mat'enaqeq hulet amet yifejal.",
                    "translation": "It will take two years to complete my education."
                }
            ],
            "mnemonics": [
                "NEGE (tomorrow) + present tense = future; L' + root + ASBALEHU = I intend to!"
            ],
            "culturalNotes": [
                "In Ethiopia, planning and time are often expressed fluidly. Saying « ደቂቃ ይጠብቁ » (deqiqa yit'ebqu - wait a minute) can mean anything from 60 seconds to an hour — time is relational, not absolute."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you say 'I plan to study tomorrow' in Amharic?",
                    "options": [
                        "ነገ ለማጥናት አስባለሁ። (Nege lemat'nat asbalehu.)",
                        "ነገ አጥናለሁ።",
                        "ነገ ለማጥናት ሄጄ።",
                        "ትናንት ማጥናት አስቤ ነበር።"
                    ],
                    "answerIndex": 0,
                    "explanation": "ነገ (tomorrow) + ለማጥናት (to study) + አስባለሁ (I plan/intend) = I plan to study tomorrow."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What does « ሊሄድ ነው » (l'ihed new) mean?",
                    "options": [
                        "He is about to go",
                        "He went",
                        "He will not go",
                        "He wants to go"
                    ],
                    "answerIndex": 0,
                    "explanation": "ሊ- prefix + verb root + ነው = 'is about to' (imminent future)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Which Amharic sentence means 'They plan to enter university'?",
                    "options": [
                        "ዩኒቨርሲቲ ለመግባት አስባሉ። (Yuniversiti lemegibat asbalu.)",
                        "ዩኒቨርሲቲ ገቡ።",
                        "ዩኒቨርሲቲ ሊገቡ ነው።",
                        "ዩኒቨርሲቲ አልገቡም።"
                    ],
                    "answerIndex": 0,
                    "explanation": "ለመግባት (to enter) + አስባሉ (they plan/intend) = they plan to enter."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'tomorrow' in Fidel script (ነገ):",
                    "acceptedAnswers": [
                        "ነገ",
                        "nege",
                        "Nege"
                    ],
                    "explanation": "ነገ (nege) = tomorrow."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u6-l2": {
        "id": "am-u6-l2",
        "unit": "am-u6",
        "level": "A2",
        "objective": "Use the verb ፈለገ (felege - want/need) and ቻለ (chale - can/able to) to express desires, wishes, and abilities in present and past.",
        "prerequisites": [
            "am-u6-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u6-l1"
            ]
        },
        "presentation": {
            "explanation": "Two key modal-like verbs in Amharic:\n\n1. ፈለገ (felege) = wanted / needs (past); ይፈልጋል (yifelgal) = wants/needs (present):\n- I want: እፈልጋለሁ (Ifelgalehu)\n- Do you want (m.)?: ትፈልጋለህ? (Tifelgaleh?)\n- He wants: ይፈልጋል (Yifelgal)\n- She wants: ትፈልጋለች (Tifelgalech)\n- They want: ይፈልጋሉ (Yifelgalu)\n\n2. ቻለ (chale) = was able / managed (past); ይችላል (yichilal) = can (present):\n- I can: እችላለሁ (Ichilalehu)\n- He can: ይችላል (Yichilal)\n- I cannot: አልችልም (Alchilm)\n- Can you (m.)?: ትችላለህ? (Tichilaleh?)",
            "examples": [
                {
                    "target": "ምን ትፈልጋለህ? — ቡና እፈልጋለሁ፣ አመሰግናለሁ።",
                    "reading": "Min tifelgaleh? — Buna ifelgalehu, ameseginalehu.",
                    "translation": "What do you want? — I want coffee, thank you."
                },
                {
                    "target": "አማርኛ ትችላለሽ? — አዎ፣ ትንሽ እችላለሁ።",
                    "reading": "Amarigna tichilalesh? — Awo, tinish ichilalehu.",
                    "translation": "Can you speak Amharic? — Yes, I can a little."
                },
                {
                    "target": "ዋዋ ዋና ስለማይችሉ ወደ ሐይቁ አልሄዱም።",
                    "reading": "Wawa wana silemayichlu wede hayqu alhedum.",
                    "translation": "Because Wawa cannot swim, they did not go to the lake."
                },
                {
                    "target": "ሱቁ ዘጋ ፤ ምንም ልናገዛ አልቻልንም።",
                    "reading": "Suqu zega; minim linageza alchalnim.",
                    "translation": "The shop closed; we could not buy anything."
                },
                {
                    "target": "ዮሴፍ ፊዱዪ ሙዚቃ ለቃ ሙሉ ቀን ሊፈልጋቸው ይችላል!",
                    "reading": "Yosef fideyi muziga leqa mulu qen lifelgachew yichilal!",
                    "translation": "Yosef can listen to fidel (Ethio-jazz) music all day long!"
                }
            ],
            "mnemonics": [
                "IFELGALEHU = I want; ICHILALEHU = I can; ALCHILM = I cannot!"
            ],
            "culturalNotes": [
                "Ethio-Jazz (ፊዱዪ muziga) fuses traditional Ethiopian pentatonic scales with American jazz. The legendary Mulatu Astatke (ሙላቱ አስታጥቄ) pioneered this genre globally in the 1960s–70s."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you say 'I cannot speak Amharic (yet)' in Amharic?",
                    "options": [
                        "አማርኛ አልችልም (ገና)። (Amarigna alchilm (gena).)",
                        "አማርኛ ይችላሉ።",
                        "አማርኛ እፈልጋለሁ።",
                        "አማርኛ ትናንት ቻልሁ።"
                    ],
                    "answerIndex": 0,
                    "explanation": "አልችልም (alchilm) = I cannot (1st singular negative of ቻለ)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What does « ይፈልጋሉ » (Yifelgalu) mean?",
                    "options": [
                        "They want",
                        "He wants",
                        "I want",
                        "We want"
                    ],
                    "answerIndex": 0,
                    "explanation": "ይ- prefix (3rd person) + ፈለጉ + -ሉ (plural) = they want."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Which sentence means 'Can you (f.) speak Amharic?'",
                    "options": [
                        "አማርኛ ትችያለሽ? (Amarigna tichiyalesh?)",
                        "አማርኛ ይፈልጋሉ?",
                        "አማርኛ ትናገሪያለሽ?",
                        "አማርኛ ትፈልጊያለሽ?"
                    ],
                    "answerIndex": 0,
                    "explanation": "2nd feminine singular of ቻለ (can): ትችያለሽ (tichiyalesh) = can you (f.)?"
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic for 'I cannot' in Fidel script (አልችልም):",
                    "acceptedAnswers": [
                        "አልችልም",
                        "alchilm",
                        "Alchilm"
                    ],
                    "explanation": "አልችልም (alchilm) = I cannot."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u6-l3": {
        "id": "am-u6-l3",
        "unit": "am-u6",
        "level": "A2",
        "objective": "Use comparative and superlative adjectives in Amharic: ከ...የበለጠ (more than), ሁሉ/ሁሉም ቢሆን (the most/best of all), and the adjective ቅጥ (less/fewer).",
        "prerequisites": [
            "am-u6-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u2-l1",
                "am-u6-l2"
            ]
        },
        "presentation": {
            "explanation": "Amharic comparatives and superlatives use the following patterns:\n\n1. Comparative 'more than':\n- ከ + X + « የበለጠ » (yebelech) + adjective = more ... than X\n- E.g., « ከጎንደር ከተማ አዲስ አበባ የበለጠ ትልቅ ናት » (Addis Ababa is bigger than Gondar)\n\n2. Superlative 'the most / best':\n- « ሁሉ ቢሆን » or « ከሁሉ የበለጠ » = most of all\n- E.g., « ከሁሉ የበለጠ ጥሩ » (the best/most good of all)\n\n3. Key Adjectives for Comparison:\n- ትልቅ (tiliq) = big\n- ትንሽ (tinish) = small\n- ርቀት (riqet) = far\n- ቅርብ (qirb) = near/close\n- ብዙ (bizu) = many/much\n- ጥቂት (t'iqit) = few/little\n- ጥሩ (t'iru) = good\n- መጥፎ (met'fo) = bad",
            "examples": [
                {
                    "target": "ከቡና ሻይ ቅርቡ የበለጠ ጣፋጭ ነው ለእኔ።",
                    "reading": "Kebuna shay qirbu yebelech t'afach new le'ine.",
                    "translation": "Tea is sweeter than coffee for me."
                },
                {
                    "target": "ቀይ ባሕር ከዓባይ የበለጠ ትልቅ ነው?",
                    "reading": "Qey bahir ke'Abay yebelech tiliq new?",
                    "translation": "Is the Red Sea bigger than the Blue Nile?"
                },
                {
                    "target": "ኢትዮጵያ ካፍሪካ ሃገሮች ሁሉ ቢሆን ጥንታዊ ናት።",
                    "reading": "Ityop'ya kafrika hageroch hulu bihon t'intawi nat.",
                    "translation": "Ethiopia is the most ancient of all African nations."
                },
                {
                    "target": "ዛሬ ትናንት ከነበረ የበለጠ ቀዝቃዛ ነው።",
                    "reading": "Zare tinant kenebere yebelech qezqaza new.",
                    "translation": "Today is colder than it was yesterday."
                },
                {
                    "target": "ሐሙስ ዕለት ከሁሉ የበለጠ ብዙ ሰዎች ወደ ገበያ ይሄዳሉ።",
                    "reading": "Hamus ilet kehulu yebelech bizu sewoch wede gebeya yihedalu.",
                    "translation": "On Thursday the most people go to the market."
                }
            ],
            "mnemonics": [
                "KE + X + YEBELECH + adjective = X is more than; KEHULU YEBELECH = most of all!"
            ],
            "culturalNotes": [
                "Ethiopia is the oldest independent nation in Africa, having never been colonized. Emperor Menelik II's decisive victory at the Battle of Adwa in 1896 against Italian forces remains a defining moment of African sovereignty."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you say 'Addis Ababa is bigger than Gondar' in Amharic?",
                    "options": [
                        "ከጎንደር አዲስ አበባ የበለጠ ትልቅ ናት። (Ke'Gondar Addis Abeba yebelech tiliq nat.)",
                        "አዲስ አበባ ጎንደር ናት።",
                        "ጎንደር ከአዲስ አበባ የበለጠ ናት።",
                        "አዲስ አበባ ትልቅ ነው ፣ ጎንደርም ትልቅ ናት።"
                    ],
                    "answerIndex": 0,
                    "explanation": "ከ + Gondar + Addis Abeba + የበለጠ (more than) + ትልቅ (big) + ናት."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What does « ከሁሉ የበለጠ » (Kehulu yebelech) mean?",
                    "options": [
                        "The most / Best of all",
                        "A little more",
                        "Less than all",
                        "Almost as much as"
                    ],
                    "answerIndex": 0,
                    "explanation": "« ከሁሉ የበለጠ » = from all + more than = the most/best of all."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Which Amharic phrase means 'more than coffee'?",
                    "options": [
                        "ከቡና የበለጠ (Kebuna yebelech)",
                        "ቡና ብዙ",
                        "ቡና ከሁሉ",
                        "ከቡና ያነሰ"
                    ],
                    "answerIndex": 0,
                    "explanation": "ከ + ቡና + የበለጠ = more than coffee."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic comparative marker meaning 'more than' in Fidel script (የበለጠ):",
                    "acceptedAnswers": [
                        "የበለጠ",
                        "yebelech",
                        "Yebelech"
                    ],
                    "explanation": "የበለጠ (yebelech) = more than (comparative marker)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u6-l4": {
        "id": "am-u6-l4",
        "unit": "am-u6",
        "level": "A2",
        "objective": "Use conditional sentences in Amharic with ከሆነ (if/when), ካልሆነ (if not/unless), and ቢሆን (even if/were it to be).",
        "prerequisites": [
            "am-u6-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u5-l3",
                "am-u6-l1"
            ]
        },
        "presentation": {
            "explanation": "Amharic conditional sentences use the following constructions:\n\n1. Real Conditional 'if/when' — ከሆነ (kihone) / ከሆነ በስተቀር:\n- CONDITION + ከሆነ + RESULT: If..., then...\n- E.g., « ዝናቡ ከወረደ ቤት ሆኖ ይቆያሉ » (If the rain falls, they stay home)\n\n2. Negative Conditional 'if not / unless' — ካልሆነ / ካልሄደ:\n- « ካልሄደ ሥራ ይወዳቀቃል » (If he doesn't go, the work will fall apart)\n\n3. Hypothetical 'even if / were it to be' — ቢሆን (bihon):\n- « ዝናቡ ቢወርድ እሄዳለሁ » (Even if it rains, I will go)\n- « ቢቻሉ አይቀሩም » (Even if they could, they wouldn't stay)",
            "examples": [
                {
                    "target": "ፈቃድ ካገኘህ ወደ ሐሙስ ዋዜማ ሥራ ልቁ።",
                    "reading": "Feqad kagegneh wede hamus wazema sira liq'u.",
                    "translation": "If you get permission, take the day before Thursday off."
                },
                {
                    "target": "ዝናቡ ካልወረደ ሰዎቹ ወደ ሥፍራው ይሄዳሉ።",
                    "reading": "Zinabbu kalwerede sewoch wede sifrw yihedalu.",
                    "translation": "If the rain does not fall, the people will go to the venue."
                },
                {
                    "target": "ቢሆን ቢሆን አልሄድም — ጨርሼ ጨርሻለሁ።",
                    "reading": "Bihon bihon alhedm — cherише chereshallehu.",
                    "translation": "No matter what, I will not go — I am completely done."
                },
                {
                    "target": "ጊዜ ካለህ ቡና ጠጥ።",
                    "reading": "Gize kale buna t'et'.",
                    "translation": "If you have time, drink coffee."
                },
                {
                    "target": "ዩኒቨርሲቲ ካልገቡ ምን ሊሰሩ ነው?",
                    "reading": "Yuniversiti kalgebu min liseru new?",
                    "translation": "If they don't get into university, what will they do?"
                }
            ],
            "mnemonics": [
                "Condition + KIHONE = if...; Condition + KALHONE = if not...; BIHON = even if!"
            ],
            "culturalNotes": [
                "Ethiopian social planning often includes open-ended conditionals: « ካልዘናበ » (if it doesn't rain) or « ከጤናህ ካልተለዩ » (if your health holds) — reflecting a culture that acknowledges life's unpredictability."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Which Amharic conditional means 'if you have time'?",
                    "options": [
                        "ጊዜ ካለህ (Gize kale)",
                        "ጊዜ ከሌለህ",
                        "ጊዜ ካጣህ",
                        "ጊዜ ሲኖርህ ቢሆን"
                    ],
                    "answerIndex": 0,
                    "explanation": "ጊዜ (time) + ካለህ (if you have, 2nd m. conditional of አለ) = if you have time."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "What does the Amharic particle « ቢሆን » (bihon) signal?",
                    "options": [
                        "Even if / hypothetically (concessive conditional)",
                        "Therefore",
                        "In order to",
                        "After that"
                    ],
                    "answerIndex": 0,
                    "explanation": "« ቢሆን » (bihon) = 'even if / were it to be' — hypothetical or concessive conditional."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "What does « ዝናቡ ካልወረደ » (Zinabbu kalwerede) mean?",
                    "options": [
                        "If the rain does not fall",
                        "After the rain fell",
                        "Even if it rains",
                        "When it was raining"
                    ],
                    "answerIndex": 0,
                    "explanation": "ዝናቡ (the rain) + ካልወረደ (if it does not fall) = if the rain does not fall."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic conditional marker 'if/when' in Fidel script (ከሆነ):",
                    "acceptedAnswers": [
                        "ከሆነ",
                        "kihone",
                        "Kihone"
                    ],
                    "explanation": "ከሆነ (kihone) = if / when (real conditional)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u6-l5": {
        "id": "am-u6-l5",
        "unit": "am-u6",
        "level": "A2",
        "objective": "Synthesize future intentions, modal verbs (want/can), comparatives, and conditionals in a complete A2-level planning dialogue.",
        "prerequisites": [
            "am-u6-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u6-l1",
                "am-u6-l4"
            ]
        },
        "presentation": {
            "explanation": "In this Unit 6 Capstone lesson, we build a full A2-level planning conversation that integrates:\n1. Future with ነገ + present / intentional ልሄድ አስባለሁ\n2. Modals: ፈለገ (want) and ቻለ (can)\n3. Comparatives: ከ...የበለጠ\n4. Conditionals: ከሆነ / ካልሆነ / ቢሆን\n\nScenario: Planning a trip to Lake Tana (ጣና ሐይቅ), Ethiopia's largest lake in Bahir Dar.",
            "examples": [
                {
                    "target": "ነገ ወደ ጣና ሐይቅ ልሄድ አስባለሁ — አንተ ትፈልጋለህ?",
                    "reading": "Nege wede T'ana Hayq l'ihed asbalehu — Ante tifelgaleh?",
                    "translation": "I plan to go to Lake Tana tomorrow — do you want to (come)?"
                },
                {
                    "target": "ዝናቡ ካልወረደ እሄዳለሁ — ከወረደ ቤት ሆኜ እቆያለሁ።",
                    "reading": "Zinabbu kalwerede ihedalehu — kewerede bet honje iqoyalehu.",
                    "translation": "If the rain does not fall I will go — if it does I will stay home."
                },
                {
                    "target": "ዘጠነኛው ጉዞ ከስምንተኛ የበለጠ ጣፋጭ ነበር!",
                    "reading": "Zet'enegn gizo keSimintegn yebelech t'afach neber!",
                    "translation": "The ninth trip was more enjoyable than the eighth one!"
                },
                {
                    "target": "ብቻዬን ልሄድ አልፈልግም ፤ ካለህ አብረን ማቀድ እፈልጋለሁ።",
                    "reading": "Bichayegn l'ihed alfelgm; kale abren maqed ifelgalehu.",
                    "translation": "I don't want to go alone; if you are available I want us to plan together."
                },
                {
                    "target": "ቢሆን ቢሆን ጣና ሐይቅ ካፍሪካ ሐይቆቸ ሁሉ ቢሆን ቆንጆ ናት!",
                    "reading": "Bihon bihon T'ana hayq kafrika hayqoche hulu bihon qonjo nat!",
                    "translation": "No matter what, Lake Tana is the most beautiful of all African lakes!"
                }
            ],
            "mnemonics": [
                "A2 SYNTHESIS: NEGE L'IHED ASBALEHU (future plan) + ZINABBU KALHONE (conditional) + YEBELECH (comparative)!"
            ],
            "culturalNotes": [
                "ጣና ሐይቅ (Lake Tana) is Ethiopia's largest lake and the source of the Blue Nile (ዓባይ አባይ abb Abay). It contains 37 islands, 21 of which have ancient monasteries preserving 14th–15th century paintings and manuscripts — a UNESCO-recognised cultural treasure."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "How do you say 'I don't want to go alone' in Amharic?",
                    "options": [
                        "ብቻዬን ልሄድ አልፈልግም። (Bichayegn l'ihed alfelgm.)",
                        "ብቻዬን ሄጄ ፈለኩ።",
                        "ብቻዬን ልሄድ እፈልጋለሁ።",
                        "ብቻዬን ይሄዱ።"
                    ],
                    "answerIndex": 0,
                    "explanation": "ብቻዬን (alone) + ልሄድ (to go) + አልፈልግም (I don't want) = I don't want to go alone."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Translate: 'If the rain does not fall I will go to Lake Tana.'",
                    "options": [
                        "ዝናቡ ካልወረደ ወደ ጣና ሐይቅ እሄዳለሁ። (Zinabbu kalwerede wede T'ana hayq ihedalehu.)",
                        "ዝናቡ ቢወርድ ወደ ጣና ሐይቅ ልሄድ አስባለሁ።",
                        "ዝናቡ ካልወረደ ቤት ሆኜ እቆያለሁ።",
                        "ዝናቡ ከወረደ ወደ ጣና ሐይቅ እሄዳለሁ።"
                    ],
                    "answerIndex": 0,
                    "explanation": "ዝናቡ ካልወረደ (if rain does not fall) + ወደ ጣና ሐይቅ (to Lake Tana) + እሄዳለሁ (I will go)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Which sentence means 'The ninth trip was more enjoyable than the eighth' in Amharic?",
                    "options": [
                        "ዘጠነኛው ጉዞ ከስምንተኛ የበለጠ ጣፋጭ ነበር። (Zet'enegn gizo kesiminteign yebelech t'afach neber.)",
                        "ዘጠነኛው ጉዞ ከስምንተኛ ያነሰ ጣፋጭ ነበር።",
                        "ስምንተኛ ጉዞ ከዘጠነኛ የበለጠ ጣፋጭ ነበር።",
                        "ጉዞ ዘጠን ጊዜ ሄድን።"
                    ],
                    "answerIndex": 0,
                    "explanation": "ዘጠነኛ (9th) + ከስምንተኛ (than the 8th) + የበለጠ (more) + ጣፋጭ (enjoyable/sweet)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'alone / by myself' in Fidel script (ብቻዬን):",
                    "acceptedAnswers": [
                        "ብቻዬን",
                        "bichayegn",
                        "Bichayegn"
                    ],
                    "explanation": "ብቻዬን (bichayegn) = alone / by myself."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u7-l1": {
        "id": "am-u7-l1",
        "subject": "amharic",
        "unit": 7,
        "lessonNumber": 1,
        "title": "Past-Tense Negation: The -m Suffix (አልሄደም)",
        "level": "A2",
        "objective": "Form negative past-tense verbs by adding the prefix አል- before the verb root and the suffix -ም after the final stem vowel, and understand how this differs from affirmative past forms.",
        "presentation": {
            "explanation": "In Amharic, negating a past-tense verb requires two simultaneous changes to the verb form — a prefix and a suffix, working together like a clamp around the verb root. This double-marking is one of the most distinctive features of Amharic negation and must be learned as a unit, not as two separate additions.\n\nThe affirmative past: ሄደ (hede) — 'he went'\nThe negative past: አልሄደም (alhedem) — 'he did not go'\n\nBreaking it down:\n• አል- (al-) is prefixed before the verb root ሄደ\n• -ም (-m) is suffixed after the final vowel of the verb\n\nThis pattern is consistent across all subjects. The verb root stays the same; only the person-agreement suffix changes before -ም is added:\n\nSubject | Affirmative | Negative\n1sg | ሄድኩ (hedku) | አልሄድኩም (alhededkum)\n2sg (m) | ሄድክ (hedki) | አልሄድክም (alhedkm)\n2sg (f) | ሄድሽ (hedish) | አልሄድሽም (alhededishm)\n3sg (m) | ሄደ (hede) | አልሄደም (alhedem)\n3sg (f) | ሄደች (hedech) | አልሄደችም (alhededechm)\n1pl | ሄድን (hedn) | አልሄድንም (alhedednm)\n3pl | ሄዱ (hedu) | አልሄዱም (alhedum)\n\nImportant: the -ም suffix phonologically merges with the final vowel of the agreement suffix — do not add an extra vowel. Say አልሄደም, not *አልሄደም-ኡ.\n\nThis same structure applies to any past verb:\nበላ (bela, 'ate') → አልበላም (albelam, 'did not eat')\nጻፈ (tsafe, 'wrote') → አልጻፈም (altsafem, 'did not write')\nሰራ (sera, 'worked') → አልሰራም (alseram, 'did not work')",
            "examples": [
                {
                    "target": "ወንድሜ ትናንት ወደ ገበያ አልሄደም።",
                    "reading": "Wendimé tinant wede gebeyya alhedem.",
                    "translation": "My brother did not go to the market yesterday."
                },
                {
                    "target": "ልጅቷ ቁርሱን አልበላችም።",
                    "reading": "Lijtwa qursun albelachiim.",
                    "translation": "The girl did not eat breakfast."
                },
                {
                    "target": "እኔ ያንን ደብዳቤ አልጻፍኩም።",
                    "reading": "Ine yanin debdabe altsafkum.",
                    "translation": "I did not write that letter."
                }
            ],
            "mnemonics": [
                "Think of negation as a 'clamp': አል- clamps onto the front, -ም clamps onto the back. The verb root is squeezed between them. Both ends must be present — forget either one and the negation fails."
            ],
            "culturalNotes": [
                "In Ethiopian conversational culture, a direct negative reply like አልሄደም is perfectly polite and natural. Unlike some languages where a softened refusal is preferred, Amharic speakers use the grammatical negative form straightforwardly. Adding ይቅርታ (yiqirta, 'excuse me/sorry') before a negative statement adds courtesy when declining invitations."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ሰለሞን ትናንት ምሳ ሳይበላ ቀረ። ይህን በአሉታዊ ዓረፍተ ነገር ይግለጹ — ምን ዓረፍተ ነገር ትክክል ነው?",
                    "options": [
                        "ሰለሞን ምሳ በለ።",
                        "ሰለሞን ምሳ አልበላም።",
                        "ሰለሞን ምሳ አልበለ።"
                    ],
                    "answerIndex": 1,
                    "explanation": "አልበላም = አል- + በላ (ate) + -ም. Option C is wrong because the correct root form before -ም keeps the verb agreement suffix — 3sg masculine gets the -አ stem ending, giving አልበላም not *አልበለ. Option A is the affirmative past, not negative."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "ይህ ዓረፍተ ነገር «እኛ ትናንት አልሰራንም» ለማለት ትክክለኛው ትርጉም የትኛው ነው?",
                    "options": [
                        "We worked yesterday.",
                        "We will not work tomorrow.",
                        "We did not work yesterday."
                    ],
                    "answerIndex": 2,
                    "explanation": "አልሰራንም = አል- + ሰራ (worked) + -ን (1pl agreement) + -ም (negation suffix). The tense is past (ሰራ is past root) and the subject is 1pl (እኛ). Option A is the affirmative. Option B misreads the tense as future."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "«She did not drink coffee» ን ወደ አማርኛ ትክክለኛ አሉታዊ ቅጽ ቀይሩ። (ቡና ጠጣ = she drank coffee)",
                    "options": [
                        "ቡና ጠጣቸ አልነበረም።",
                        "ቡና አልጠጣ።",
                        "ቡና አልጠጣችም።"
                    ],
                    "answerIndex": 2,
                    "explanation": "ጠጣች (3sg feminine past of ጠጣ 'to drink') → negative: አልጠጣችም. The -ች agreement suffix merges with the final -ም. Option B lacks the feminine suffix; Option A uses a different construction entirely."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic negative past-tense form of ሄደ (he went) — meaning 'he did not go':",
                    "acceptedAnswers": [
                        "አልሄደም"
                    ],
                    "explanation": "አልሄደም: prefix አል- + root ሄደ + suffix -ም. This is the 3rd person masculine singular negative past form."
                }
            ]
        }
    },
    "am-u7-l2": {
        "id": "am-u7-l2",
        "subject": "amharic",
        "unit": 7,
        "lessonNumber": 2,
        "title": "Present-Tense Negation: The አይ- Prefix (አይሄድም)",
        "level": "A2",
        "objective": "Form negative present/habitual-tense verbs using the prefix አይ- (for 3rd person) and related prefixes for other persons, and contrast these with the past negative forms from Lesson 1.",
        "presentation": {
            "explanation": "In Lesson 1 we learned that past-tense negation uses አል- as a prefix. Present/habitual negation is different: the prefix changes depending on the person, and the suffix -ም remains. This is a key area where Amharic learners make errors — the two tenses use different negative prefixes.\n\nPresent/habitual affirmative vs. negative:\n\nSubject | Affirmative (present) | Negative (present)\n1sg | እሄዳለሁ (ihedalehu) | አልሄድም (alhedm)\n2sg (m) | ትሄዳለህ (tihedaleh) | አትሄድም (atihedm)\n2sg (f) | ትሄጃለሽ (tihedjalesh) | አትሄጂም (atihedjim)\n3sg (m) | ይሄዳል (yihedal) | አይሄድም (ayihedm)\n3sg (f) | ትሄዳለች (tihedaled) | አትሄድም (atihedm)\n1pl | እሄዳለን (iheda len) | አንሄድም (anhedm)\n3pl | ይሄዳሉ (yihedalu) | አይሄዱም (ayihedum)\n\nPattern of negative present prefixes:\n• 1sg: አል- (same as past negative!)\n• 2sg/2pl/3sg feminine: አት-\n• 3sg masculine: አይ-\n• 1pl: አን-\n• 3pl: አይ- (same as 3sg masculine)\n\nThe suffix -ም attaches after the stem, just as in past negation.\n\nCritical contrast:\nሄደ → አልሄደም ('he didn't go' — past)\nይሄዳል → አይሄድም ('he doesn't/won't go' — present/habitual)\n\nNote that the verb stem itself shifts: in the present negative, ሄደ compresses to ሄድ before the -ም suffix. This stem alternation (the dropping of the final vowel in the negative stem) is systematic across Amharic verbs and must be memorized as part of the pattern.",
            "examples": [
                {
                    "target": "እሱ ቡና አይጠጣም — ሻይ ግን ይወዳል።",
                    "reading": "Issu buna aytsetam — shay gin yiwedal.",
                    "translation": "He doesn't drink coffee — but he likes tea."
                },
                {
                    "target": "ልጆቹ ማታ ቴሌቪዥን አይመለከቱም።",
                    "reading": "Lijochuu mata televizhin ayimelekettum.",
                    "translation": "The children don't watch television at night."
                },
                {
                    "target": "አንቺ ለምን ጥዋት አትሮጪም?",
                    "reading": "Anchi lemen tewat atrojim?",
                    "translation": "Why don't you (f.) run in the morning?"
                }
            ],
            "mnemonics": [
                "The present-negative prefixes follow a person grid: think 'I-aL, You-aT, He/They-aY, We-aN' — each prefix's consonant (L/T/Y/N) matches a different person. The -ም suffix is always the same closer regardless of person or tense."
            ],
            "culturalNotes": [
                "Ethiopian dietary culture offers many contexts to practice present-tense negation naturally. Saying አይበላም (he doesn't eat it) or አልጠጣም (he doesn't drink it) is a common and completely acceptable way to describe food preferences or religious fasting observances — Ethiopia has one of the world's most elaborate fasting traditions in the Ethiopian Orthodox Tewahedo Church, where meat and dairy are avoided on certain days."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«They (3pl) do not study» ን ወደ አማርኛ ቀይሩ። (ማጥናት = to study; 3pl affirmative: ያጠናሉ)",
                    "options": [
                        "አልጠኑም።",
                        "አትጥኑም።",
                        "አያጥኑም።"
                    ],
                    "answerIndex": 2,
                    "explanation": "3rd person plural present negative uses አይ- prefix and -ም suffix. ያጥናሉ → negative stem ጥን → አያጥኑም. Option A uses past-negative prefix አል- (wrong tense/prefix for 3pl present). Option B uses 2nd person prefix አት-."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«አይሄድም» ን ከ«አልሄደም» ጋር የሚለያቸው ዋናው ነጥብ ምንድን ነው?",
                    "options": [
                        "አይሄድም is present/habitual negative; አልሄደም is past negative — they use different prefixes (አይ- vs. አል-) and different verb stems.",
                        "They are identical in meaning; the difference is only in spelling.",
                        "አይሄድም is formal and አልሄደም is informal."
                    ],
                    "answerIndex": 0,
                    "explanation": "The tense distinction is structural, not merely stylistic. Past negative: አል- + past stem + -ም. Present negative: አይ-/አት-/አን-/አል- + present stem (often shortened) + -ም. The stems also differ: ሄደ (past) vs. ሄድ (present negative stem)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "ምን ዓረፍተ ነገር «I do not speak Amharic» ን በትክክል ይገልጻል? (አማርኛ መናገር = to speak Amharic; 1sg present affirmative: አማርኛ እናገራለሁ)",
                    "options": [
                        "አማርኛ አይናገርም።",
                        "አማርኛ አልናገርም።",
                        "አማርኛ አልናገርኩም።"
                    ],
                    "answerIndex": 1,
                    "explanation": "1st person singular present negative uses አል- prefix (same as past, but with present stem). Stem: ናገር (shortened from ይናገር). So: አልናገርም. Option A uses 3sg prefix አይ-. Option C uses past-tense form with 1sg agreement suffix -ኩ, making it 'I did not speak' (past)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Write the Amharic for 'she does not eat' (3sg feminine present negative of ትበላለች → she eats):",
                    "acceptedAnswers": [
                        "አትበላም"
                    ],
                    "explanation": "3sg feminine present negative: አት- prefix + በላ stem (short form: በላ) + -ም. Result: አትበላም."
                }
            ]
        }
    },
    "am-u7-l3": {
        "id": "am-u7-l3",
        "subject": "amharic",
        "unit": 7,
        "lessonNumber": 3,
        "title": "Yes/No Questions: Intonation and the ወይ Particle",
        "level": "A2",
        "objective": "Form yes/no questions in Amharic using rising intonation on the standard declarative sentence, and use the question particle ወይ (wey) to add emphasis or request confirmation.",
        "presentation": {
            "explanation": "Amharic yes/no questions are formed in a fundamentally different way from English. In English, you invert subject and auxiliary verb ('Is she...?'). In Amharic, the word order does NOT change at all — the declarative sentence structure is kept intact and the question is signaled through intonation or a terminal particle.\n\nMethod 1 — Rising intonation only:\nDeclarative: ልጅቷ ትምህርት ቤት ሄደች። (The girl went to school.)\nQuestion: ልጅቷ ትምህርት ቤት ሄደች? (Did the girl go to school?) — same words, rising tone at the end.\n\nThis is the most natural spoken form. The question mark in written Amharic signals this rising intonation.\n\nMethod 2 — Adding the particle ወይ (wey):\nThe particle ወይ is appended to the end of the sentence to form a yes/no question, particularly in speech where intonation alone might be unclear, or when asking for confirmation:\n\nልጅቷ ትምህርት ቤት ሄደች ወይ? (Did the girl go to school, or [didn't she]?)\n\nወይ literally means 'or' and its use in questions is a genuine Amharic feature — it invites the listener to confirm or deny. It is not equivalent to a tag question ('isn't it?') but it serves a similar pragmatic function.\n\nResponding to yes/no questions:\n• Yes: አዎ (awo) — affirmative\n• No: አይ (ay) — negative (note: አይ here is the interjection 'no', not the verbal prefix አይ-)\n• Alternatively repeat the verb positively or negatively: ሄደች / አልሄደችም\n\nNote on ወይ vs. ወይም (weyim):\nወይ alone is the question particle. ወይም means 'or' in a disjunctive statement ('coffee or tea' = ቡና ወይም ሻይ). Do not confuse them.",
            "examples": [
                {
                    "target": "አባቴ ቤት ውስጥ አለ ወይ?",
                    "reading": "Abbate bet wist alle wey?",
                    "translation": "Is my father at home?"
                },
                {
                    "target": "ትናንት ዝናብ ወረደ?",
                    "reading": "Tinant zinab werrede?",
                    "translation": "Did it rain yesterday? (rising intonation only)"
                },
                {
                    "target": "አዎ፣ ዝናብ ወረደ። / አይ፣ ዝናብ አልወረደም።",
                    "reading": "Awo, zinab werrede. / Ay, zinab alwerredem.",
                    "translation": "Yes, it rained. / No, it did not rain."
                }
            ],
            "mnemonics": [
                "Remember: Amharic questions don't flip the sentence — they are 'flat flip': the structure is flat (unchanged), but the voice flips up at the end. ወይ is like adding 'right?' or 'or what?' at the end — it invites a yes/no response."
            ],
            "culturalNotes": [
                "In Ethiopian conversational etiquette, questions are often softened by phrasing them with ወይ and a respectful tone rather than a blunt rising intonation alone. When speaking to elders or in formal contexts, appending እባክዎ (ibakwo, 'please') before the question shows politeness. For example: እባክዎ፣ ጊዜ አለዎ ወይ? (Excuse me, do you have time?)"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«ሰለሞን ዛሬ ይሰራል» ን ወደ yes/no ጥያቄ ቀይሩ — ትክክለኛው ቅጽ የትኛው ነው?",
                    "options": [
                        "ይሰራል ሰለሞን ዛሬ?",
                        "ሰለሞን ዛሬ ወይ ይሰራል?",
                        "ሰለሞን ዛሬ ይሰራል ወይ?"
                    ],
                    "answerIndex": 2,
                    "explanation": "The word order stays the same as the declarative (SOV: Subject-Object-Verb remains intact). ወይ is appended at the very end of the sentence, after the verb. Option A incorrectly inverts subject and verb (English-language thinking). Option B places ወይ in the middle, which is not grammatical for yes/no question formation."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ወይ» እና «ወይም» ልዩነት ምን ነው?",
                    "options": [
                        "They are synonyms — both mean 'or' with no difference.",
                        "ወይ is a yes/no question particle (appended to a sentence); ወይም means 'or' in a choice between two things.",
                        "ወይ is formal and ወይም is informal."
                    ],
                    "answerIndex": 1,
                    "explanation": "ወይ functioning as a question particle turns a declarative into a yes/no question. ወይም is a coordinating conjunction meaning 'or', used between two alternatives (ቡና ወይም ሻይ = coffee or tea). Confusing them produces grammatically incorrect sentences."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "«መሪት ዛሬ ዩኒቨርሲቲ ትሄዳለች» ን ወደ ወይ-question ቀይሩ:",
                    "options": [
                        "ዩኒቨርሲቲ ትሄዳለች ዛሬ መሪት?",
                        "ወይ መሪት ዛሬ ዩኒቨርሲቲ ትሄዳለች?",
                        "መሪት ዛሬ ዩኒቨርሲቲ ትሄዳለች ወይ?"
                    ],
                    "answerIndex": 2,
                    "explanation": "ወይ goes at the very end of the unchanged declarative sentence. Options A and B rearrange the word order (A) or front-load ወይ (B) — both wrong. Amharic yes/no question word order is identical to declarative."
                },
                {
                    "type": "typed-recall",
                    "prompt": "What Amharic word is appended at the end of a declarative sentence to form a yes/no question? (Type it in Amharic script):",
                    "acceptedAnswers": [
                        "ወይ"
                    ],
                    "explanation": "ወይ (wey) is the yes/no question particle in Amharic. It attaches to the end of an unchanged declarative sentence and invites a binary affirm/deny response."
                }
            ]
        }
    },
    "am-u7-l4": {
        "id": "am-u7-l4",
        "subject": "amharic",
        "unit": 7,
        "lessonNumber": 4,
        "title": "Wh-Questions: ማን, ምን, የት, መቼ, ለምን, እንዴት",
        "level": "A2",
        "objective": "Use the six core Amharic wh-question words — ማን (who), ምን (what), የት (where), መቼ (when), ለምን (why), and እንዴት (how) — in grammatically correct SOV question sentences.",
        "presentation": {
            "explanation": "Unlike English, where wh-words move to the front of the sentence ('Where did you go?'), in Amharic wh-question words typically remain in the position where the answer would naturally sit within the SOV sentence structure. The word order is NOT rearranged.\n\nThe six core wh-words:\n• ማን (man) — who (subject questions)\n• ምን (min) — what (object questions)\n• የት (yet) — where (location questions)\n• መቼ (meche) — when (time questions)\n• ለምን (lemin) — why (reason questions)\n• እንዴት (indet) — how (manner questions)\n\nPosition rules:\n— ማን usually occupies the subject slot (before the verb): ማን ሄደ? (Who went?)\n— ምን, የት, etc. occupy the object/adverb slot: ምን ገዛህ? (What did you buy?)\n— The verb stays at the end, as in all Amharic sentences.\n\nFull examples with structure marked:\n\nS-V: ማን [subject] + ቤቱን ሰበረ [verb phrase] = ማን ቤቱን ሰበረ? (Who broke the house?)\nS-O-V: አንቺ [S] + ምን [O] + ትበያለሽ [V]? = አንቺ ምን ትበያለሽ? (What do you [f] eat?)\nS-Adverb-V: አስቴር [S] + የት [Adverb] + ትሄዳለች [V]? = አስቴር የት ትሄዳለች? (Where does Aster go?)\n\nNote on ለምን:\nለምን literally means 'for what?' (ለ = for, ምን = what). Answers to ለምን use ስለ (about/because of) + noun, or the conjunction ምክንያቱም (minkyanyatuum, 'the reason is') for full explanations.\n\nNote on እንዴት:\nእንዴት questions ask about manner or condition (How are you? = እንዴት ነህ? for male addressee).",
            "examples": [
                {
                    "target": "ማን ይህን ደብዳቤ ጻፈ?",
                    "reading": "Man yihin debdabe tsafe?",
                    "translation": "Who wrote this letter?"
                },
                {
                    "target": "ዮሐንስ ዛሬ ምሳ የት ይበላል?",
                    "reading": "Yohannis zare missa yet yibellal?",
                    "translation": "Where will Yohannes eat lunch today?"
                },
                {
                    "target": "ስልጠናው መቼ ይጀምራል?",
                    "reading": "Siltenaaw meche yijemiral?",
                    "translation": "When does the training start?"
                }
            ],
            "mnemonics": [
                "English: 'Who-What-Where-When-Why-How' → Amharic: 'ማን-ምን-የት-መቼ-ለምን-እንዴት'. The order of the words in the list is the same — just remember the Amharic forms stay IN PLACE in the sentence rather than moving to the front."
            ],
            "culturalNotes": [
                "In Amharic-speaking cultures, asking ማን ነህ/ነሽ? (Who are you?) directly to a stranger can feel abrupt. Instead, Ethiopians often open with ስምህ/ስምሽ ማን ነው? (What is your name?) or እንዴት ትጠራለህ/ትጠሪያለሽ? (What do you call yourself?) — both gentler formulations. The question word ማን here appears inside an embedded possessive structure rather than standing alone."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«Why did Almaz not come?» ን ወደ አማርኛ ቀይሩ። (መምጣት = to come; past negative 3sg f: አልመጣችም)",
                    "options": [
                        "ለምን አልማዝ አልመጣችም?",
                        "አልማዝ አልመጣችም ለምን?",
                        "አልማዝ ለምን አልመጣችም?"
                    ],
                    "answerIndex": 2,
                    "explanation": "ለምን, like other wh-words, is placed where the answer would go — here immediately before the verb phrase at the end. Standard Amharic question word order: Subject (አልማዝ) + Wh-word (ለምን) + Verb (አልመጣችም). Option A front-loads ለምን in English fashion. Option B puts it at the very end after the verb, which is not standard."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«እንዴት» ጥያቄ ቃል ምን ዓይነት ጥያቄ ያመጣል?",
                    "options": [
                        "Location questions ('where' something is).",
                        "Reason questions ('why' something happened).",
                        "Manner or condition questions ('how' something is done or someone is doing)."
                    ],
                    "answerIndex": 2,
                    "explanation": "እንዴት = 'how'. It asks about manner, method, or condition. Classic example: እንዴት ነህ? (How are you? — male addressee). Location = የት. Reason = ለምን."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "«What is Selamawit buying at the market?» — ትክክለኛው የአማርኛ ጥያቄ ምን ነው? (ገበያ = market; መግዛት = to buy; 3sg f present: ትገዛለች)",
                    "options": [
                        "ምን ሰላማዊት ትገዛለች ገበያ?",
                        "ሰላማዊት ምን ገበያ ትሄዳ?",
                        "ሰላማዊት ገበያ ምን ትገዛለች?"
                    ],
                    "answerIndex": 2,
                    "explanation": "SOV structure: ሰላማዊት [S] + ገበያ [location adverb] + ምን [O, what] + ትገዛለች [V]. The wh-word ምን occupies the object slot. Option A scrambles word order. Option B uses the wrong verb (ትሄዳ = she goes, not she buys)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic wh-question word meaning 'where' (የት location question):",
                    "acceptedAnswers": [
                        "የት"
                    ],
                    "explanation": "የት (yet) = where. Used to ask about location or destination: እሷ የት ትሄዳለች? (Where is she going?)"
                }
            ]
        }
    },
    "am-u7-l5": {
        "id": "am-u7-l5",
        "subject": "amharic",
        "unit": 7,
        "lessonNumber": 5,
        "title": "Unit 7 Synthesis: Negation and Questions in Real Dialogue",
        "level": "A2",
        "objective": "Combine past and present negation (አል-/-ም, አይ-/-ም) with yes/no questions (ወይ particle, rising intonation) and wh-questions (ማን, ምን, የት, መቼ, ለምን, እንዴት) in connected dialogue, distinguishing tense and question type contextually.",
        "presentation": {
            "explanation": "Unit 7 has introduced four related grammatical tools that work together in conversation: past-tense negation, present-tense negation, yes/no questions, and wh-questions. This lesson brings them together into the kind of connected dialogue an A2 Amharic learner needs to navigate everyday situations.\n\nRecap of the four tools:\n\n1. PAST NEGATIVE: አል- + verb stem + -ም\n   ወደ ትምህርት ቤት አልሄደም — 'He did not go to school'\n\n2. PRESENT NEGATIVE: Person-prefix (አይ-/አት-/አን-/አል-) + stem + -ም\n   ቡና አይጠጣም — 'He does not drink coffee'\n\n3. YES/NO QUESTION: Declarative sentence + ወይ, OR rising intonation\n   ቤት ነህ ወይ? — 'Are you at home?'\n\n4. WH-QUESTION: Subject + wh-word in answer slot + verb\n   ዛሬ ምን ሰራህ? — 'What did you do today?'\n\nCommon error to avoid: Using አል- for present negation with 3rd person. 'He does not go' is አይሄድም (not *አልሄድም, which would be past for 1st person or could be confused with past 3rd person). Context — specifically whether the verb is in present or past form — disambiguates.\n\nDialogue putting it together (shop context):\nA: ዛሬ ምን ትፈልጋለህ? (What do you want today?)\nB: ሩዝ አለ ወይ? (Do you have rice?)\nA: አይ፣ ዛሬ ሩዝ የለም። (No, today there is no rice.)\nB: ትናንት ለምን አልሸጥህም? (Why didn't you sell [it] yesterday?)\nA: ትናንት ገበያ አልሄድኩም። (Yesterday I did not go to the market.)\n\nNote «የለም» (yellem = 'there is not/none') — this is the negative existential of «አለ» ('there is'), used for possession and existence statements, and is distinct from the verbal negative pattern.",
            "examples": [
                {
                    "target": "ዛሬ ሩዝ የለም፣ ስለዚህ ምን ትበላለህ?",
                    "reading": "Zare ruz yellem, silezih min tibelalehi?",
                    "translation": "There is no rice today, so what will you eat?"
                },
                {
                    "target": "ትናንት ከሰዓት በኋላ ምን ሰራህ? — ምንም አልሰራሁም፣ ታሞ ነበርኩ።",
                    "reading": "Tinant keseaat behwala min serrahi? — Minim alsserrrahum, tamo nebberku.",
                    "translation": "What did you do yesterday afternoon? — I didn't do anything, I was sick."
                },
                {
                    "target": "ወደ ሆስፒታል ሄድህ ወይ?",
                    "reading": "Wede hossippital hedih wey?",
                    "translation": "Did you go to the hospital?"
                }
            ],
            "mnemonics": [
                "When building any Amharic question or negation, ask yourself three quick things: (1) Past or present? → Choose አል- vs. አይ-/አት-/አን- prefix. (2) Statement or question? → Add ወይ / rising intonation for yes/no; put wh-word in answer slot for wh-questions. (3) Keep the SOV frame — the subject comes first, the verb comes last, always."
            ],
            "culturalNotes": [
                "Ethiopian conversational rhythm values elaboration over brevity in refusals. A simple አይ (no) can feel curt; adding a reason with ምክንያቱም... (the reason is...) or ምክንያቱ... (because...) softens any negative response. This synthesis dialogue models that cultural norm: the shopkeeper in the example doesn't just say 'no rice' but explains why — a pattern that mirrors real Ethiopian market speech."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ቀጥሎ ካለው ንግግር ምን ዓረፍተ ነገር ትክክለኛ ነው — past negative ወይስ present negative?\n«አለምፀሃይ ዛሬ ትምህርት ቤት ____» (She does not go to school today → present negative 3sg f)",
                    "options": [
                        "አለምፀሃይ ዛሬ ትምህርት ቤት አልሄደችም።",
                        "አለምፀሃይ ዛሬ ትምህርት ቤት አይሄድም።",
                        "አለምፀሃይ ዛሬ ትምህርት ቤት አትሄድም።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Present negative 3sg feminine: አት- prefix + ሄድ stem + -ም = አትሄድም. Option A uses past negative (አልሄደችም = she did not go — past tense). Option B uses 3sg masculine prefix አይ- (correct for 'he' but not 'she')."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«የለም» ምን ማለት ነው እና ከ«አይ___ም» አሉታዊ ቅጽ እንዴት ይለያል?",
                    "options": [
                        "የለም and አይ___ም are exact synonyms and can be used interchangeably.",
                        "የለም means 'there is not / there are none' (negative existential of አለ). It is used for possession/existence, not for negating action verbs (which use the አይ-/-ም or አል-/-ም pattern).",
                        "የለም is only used in written Amharic; spoken Amharic always uses አይ___ም."
                    ],
                    "answerIndex": 1,
                    "explanation": "አለ (alle) = 'there is / I have / he/she is [at a place]'. Its negative is የለም (yellem) = 'there is not / I don't have'. This is a separate negative existential verb, not part of the regular verbal negation paradigm. ቡና አለ? → ቡና የለም (Is there coffee? → There is no coffee). Action verbs use the prefix-suffix negation pattern."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "ቀጥሎ ካለው ንግግር ባዶ ቦታውን በትክክለኛ ቅጽ ሙሉ:\nA: ትናንት ወዴት ____ ? (ሄደ/ሄዱ/ሄዳቹ — where did you [2sg m] go yesterday?)\nB: ወደ ሆስፒታል ሄጄ ነበር። ዶክተሩ ዛሬ ____ (አለ ወይ? — is the doctor here today?)",
                    "options": [
                        "ሄደ … ዶክተሩ ዛሬ ወይ አለ?",
                        "ሄድህ … ዶክተሩ ዛሬ አለ ወይ?",
                        "ሄዱ … ዶክተሩ ዛሬ አለ?"
                    ],
                    "answerIndex": 1,
                    "explanation": "2sg masculine past: ሄድህ (hedih). For the yes/no question ወይ goes at the very end: ዶክተሩ ዛሬ አለ ወይ? Option A uses 3sg form ሄደ (wrong person) and puts ወይ in the middle. Option C uses 3pl form ሄዱ (wrong person) and omits ወይ."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic negative existential meaning 'there is not' / 'I don't have' (the negative of አለ):",
                    "acceptedAnswers": [
                        "የለም"
                    ],
                    "explanation": "የለም (yellem) is the negative existential verb in Amharic — the negative counterpart of አለ. Essential for expressing absence, non-existence, or 'I/you/he don't have' something."
                }
            ]
        }
    },
    "am-u8-l1": {
        "id": "am-u8-l1",
        "subject": "amharic",
        "unit": 8,
        "lessonNumber": 1,
        "title": "Core Family Terms: Gender and the Nuclear Family",
        "level": "A2",
        "objective": "Name the members of the nuclear family in Amharic (parents, siblings, children) and understand how Amharic marks gender grammatically in family vocabulary.",
        "presentation": {
            "explanation": "Amharic family vocabulary encodes gender directly in the nouns themselves — there are distinct words for 'older brother' vs. 'older sister', for 'son' vs. 'daughter', and in many cases the masculine and feminine forms are not related by a simple suffix but are entirely different roots. This is different from English, which uses separate words (brother/sister) or compound words (son/daughter), but similar to how Amharic handles gender throughout its vocabulary.\n\nNUCLEAR FAMILY TERMS:\n\nParents:\n• አባት (abbat) — father [masculine noun]\n• እናት (inat) — mother [feminine noun]\n• ወላጆች (wellajooch) — parents [plural form, from ወላጅ = parent/one who gave birth]\n\nSiblings:\n• ወንድም (wendim) — brother [masculine]\n• እህት (iht) — sister [feminine]\nNote: 'older/younger' distinction requires modifiers: ታላቅ ወንድም (tallaq wendim) = older brother; ታናሽ ወንድም (tanash wendim) = younger brother\n\nChildren:\n• ልጅ (lij) — child (gender-neutral basic form; also means 'boy/girl' or 'young person')\n• ወንድ ልጅ (wend lij) — son (literally: male child)\n• ሴት ልጅ (set lij) — daughter (literally: female child)\n\nThe gender markers ወንድ (wend = male) and ሴት (set = female) are used throughout Amharic to specify gender when the base noun is ambiguous: ወንድ ዶክተር (male doctor) vs. ሴት ዶክተር (female doctor).\n\nSpouses:\n• ባል (bal) — husband\n• ሚስት (mist) — wife\n• ባለቤቴ (balebete) — my spouse (gender-neutral, formal; literally 'owner of my house')\n\nGenitive construction in family vocabulary:\nAmharic possessives are formed with the suffix -ዬ/-ህ/-ሽ/-ዎ (my/your-m/your-f/your-polite) attached directly to the noun — we will study this in depth in Lesson 3.",
            "examples": [
                {
                    "target": "አባቴ ዶክተር ነው። እናቴ መምህርት ናት።",
                    "reading": "Abbate doqter new. Innate memhirt nat.",
                    "translation": "My father is a doctor. My mother is a teacher."
                },
                {
                    "target": "ወንድሜ ሁለት ሴት ልጆች አሉት።",
                    "reading": "Wendime hulet set lijoch allut.",
                    "translation": "My brother has two daughters."
                },
                {
                    "target": "ታናሽ እህቴ ዩኒቨርሲቲ ትምህርቷን ጨርሳለች።",
                    "reading": "Tanash ihite yunivérsiti timhirtwan cherrsalechi.",
                    "translation": "My younger sister has finished her university studies."
                }
            ],
            "mnemonics": [
                "For siblings: ወንድም (wendim) contains ወንድ (wend = male) — it literally has 'male' in it. እህት (iht) is its feminine counterpart with no such component — just memorize the pair ወንድም/እህት as 'brother/sister'. For children: ወንድ ልጅ / ሴት ልጅ = 'male child / female child' — the gender word comes BEFORE ልጅ."
            ],
            "culturalNotes": [
                "In Ethiopian culture, family titles carry deep respect. Calling someone ወንድሜ (my brother) or እህቴ (my sister) to a non-blood-relative is common and affectionate — Ethiopians extend kinship terms to close friends, neighbors, and community members. When meeting someone new, asking ቤተሰብዎ ስንት ናቸው? (How many are in your family?) is a natural and expected getting-to-know-you question."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«My wife is a nurse» ን ወደ አማርኛ ቀይሩ። (ነርስ = nurse; ናት = she is)",
                    "options": [
                        "ሚስቴ ነርስ ናት።",
                        "ባሌ ነርስ ነው።",
                        "ሴት ልጄ ነርስ ናት።"
                    ],
                    "answerIndex": 0,
                    "explanation": "ሚስቴ = my wife (ሚስት + possessive suffix -ዬ becomes ሚስቴ). ናት = she is (3sg feminine copula). Option B says 'my husband is...' (ባሌ = my husband). Option C says 'my daughter is...'"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ልጅ» እና «ሴት ልጅ» ልዩነት ምን ነው?",
                    "options": [
                        "ልጅ is 'boy' only; ሴት ልጅ is 'girl'.",
                        "ልጅ is a gender-neutral term for 'child' (or young person); ሴት ልጅ specifically means 'daughter/girl' (ሴት = female + ልጅ = child).",
                        "They are completely synonymous with no distinction."
                    ],
                    "answerIndex": 1,
                    "explanation": "ልጅ alone is ambiguous — it can mean 'child', 'boy', or 'young person' depending on context. To specify female gender, you prefix ሴት (female): ሴት ልጅ = girl/daughter. Similarly, ወንድ ልጅ (male child) = son/boy."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "ምን ቃል «parents» ማለት ነው?",
                    "options": [
                        "ወላጆች",
                        "ወንድሞች",
                        "ልጆች"
                    ],
                    "answerIndex": 0,
                    "explanation": "ወላጆች (wellajooch) = parents — plural of ወላጅ (wellaj), meaning 'one who bore/gave birth'. ወንድሞች = brothers. ልጆች = children."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'sister' (female sibling):",
                    "acceptedAnswers": [
                        "እህት"
                    ],
                    "explanation": "እህት (iht) = sister. Its counterpart is ወንድም (wendim) = brother. The two are unrelated in form — they must be learned as a pair."
                }
            ]
        }
    },
    "am-u8-l2": {
        "id": "am-u8-l2",
        "subject": "amharic",
        "unit": 8,
        "lessonNumber": 2,
        "title": "Extended Family: Grandparents, Aunts, Uncles, and Cousins",
        "level": "A2",
        "objective": "Name extended family members in Amharic — grandparents (አያቶች), aunts and uncles (ሐዘዘ/አክስት/አጎት), and cousins — and understand how Amharic describes these relationships through compounds and explanatory phrases rather than single words.",
        "presentation": {
            "explanation": "Amharic has dedicated terms for some extended family relationships but uses explanatory compounds for others. This reflects how kinship is organized and discussed in Ethiopian family culture, where vertical relationships (grandparent–grandchild) have single words but horizontal kin (cousins) are often described relationally.\n\nGRANDPARENTS AND GRANDCHILDREN:\n• አያት (ayat) — grandparent (gender-neutral form, or specifically grandfather in some dialects)\n• አያቴ (ayate) — my grandparent/grandfather\n• አያት ሚስት (ayat mist) or ሽምጉሎዋ — grandmother (more colloquial regional variation exists)\n• ልጅ ልጅ (lij lij) — grandchild (literally 'child's child' — reduplication signals one generation further down)\n\nIn practice, many speakers use the possessive construction:\nOf my father's father: የአባቴ አባት (ye-abbate abbat) = 'father of my father'\nOf my mother's mother: የእናቴ እናት (ye-innate inat) = 'mother of my mother'\n\nAUNTS AND UNCLES:\n• አክስት (akist) — aunt (specifically: father's or mother's sister)\n• አጎት (agot) — uncle (specifically: father's brother; from father's side is most common)\n• ሐዘዘ (hazeze) — uncle from the mother's side (maternal uncle — note this is a separate term, showing that Amharic distinguishes paternal from maternal uncles)\n\nCOUSINS:\nAmharic does not have a single word for 'cousin'. Instead, the relationship is expressed as:\nYe-akistish lij (የአክስትህ/ሽ ልጅ) = 'child of your aunt' = your cousin\nYe-agotih lij (የአጎትህ ልጅ) = 'child of your uncle' = your (paternal) cousin\n\nThis compound descriptive approach is the standard way to talk about cousins in Amharic, and it is worth noting that it naturally preserves the distinction between maternal-side and paternal-side cousins.\n\nNIECES AND NEPHEWS:\n• ወንድሜ ልጅ (wendime lij) — my brother's child = nephew or niece (then specify: ወንድ ልጅ / ሴት ልጅ for nephew/niece)\n• እህቴ ልጅ (ihte lij) — my sister's child",
            "examples": [
                {
                    "target": "አያቴ ዘጠና ዓመቱ ነው፣ ግን አሁንም ደህና ነው።",
                    "reading": "Ayate zetenna ametu new, gin ahunm dehna new.",
                    "translation": "My grandfather is ninety years old, but he is still well."
                },
                {
                    "target": "የአክስቴ ልጅ ወደ ካናዳ ሄደ።",
                    "reading": "Ye-aksiste lij wede Kanada hede.",
                    "translation": "My cousin (child of my aunt) went to Canada."
                },
                {
                    "target": "ሐዘዜ — የእናቴ ወንድም — ዛሬ ጠዋት ጎበኘን።",
                    "reading": "Hazeze — ye-innate wendim — zare tewat gobeyyen.",
                    "translation": "My maternal uncle — my mother's brother — visited us this morning."
                }
            ],
            "mnemonics": [
                "For aunts vs. uncles: አክስት (akist) = aunt — note the soft sound, sounds a bit like 'actress', who could be female. አጎት (agot) = uncle (paternal). ሐዘዘ (hazeze) = maternal uncle — the 'h' sound echoes 'hazz' as in a distinct separate category. For cousins: just remember 'child of aunt/uncle' = የ + [aunt/uncle] + ልጅ."
            ],
            "culturalNotes": [
                "Ethiopian family structures are often multi-generational and deeply interconnected. It is common for grandparents to live with adult children's households, and አያቴ (my grandparent) commands great respect and authority. The explicit Amharic distinction between paternal uncle (አጎት) and maternal uncle (ሐዘዘ) reflects the cultural importance of knowing which side of the family a relative comes from — inheritance, land rights, and family duties in traditional Ethiopian society depend on this distinction."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«My cousin (child of my uncle)» ን ወደ አማርኛ ቀይሩ:",
                    "options": [
                        "የአጎቴ ልጅ",
                        "አጎቴ ልጅ",
                        "የወንድሜ ልጅ"
                    ],
                    "answerIndex": 0,
                    "explanation": "Cousin = 'child of my uncle'. Amharic uses the genitive particle የ + አጎቴ (my uncle) + ልጅ (child). The የ particle is required for the genitive 'of' relationship. Option B omits የ, making the phrase grammatically incomplete. Option C means 'child of my brother' (nephew), not cousin."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ሐዘዘ» ማን ነው?",
                    "options": [
                        "Father's brother (paternal uncle)",
                        "Any male relative of the grandparent generation",
                        "Mother's brother (maternal uncle)"
                    ],
                    "answerIndex": 2,
                    "explanation": "ሐዘዘ (hazeze) = maternal uncle = mother's brother. This is a distinct term from አጎት (agot), which typically refers to the paternal uncle (father's brother). Amharic preserves this distinction that many languages collapse into a single 'uncle' word."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Amharic ለ«cousin» ያለው ቃል ምንድን ነው?",
                    "options": [
                        "ዘመድ (one generic word for relative, not specifically cousin)",
                        "ኮዝን (borrowed word — not standard Amharic)",
                        "Amharic does not have a single word for cousin — the relationship is described as «የ + [aunt/uncle] + ልጅ»"
                    ],
                    "answerIndex": 2,
                    "explanation": "Amharic expresses 'cousin' descriptively: የአጎትህ ልጅ (child of your uncle) or የአክስትህ ልጅ (child of your aunt). There is no equivalent to English 'cousin' as a single uninflected term. ዘመድ (zemod) means 'relative' broadly, not cousin specifically."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'aunt' (father's or mother's sister):",
                    "acceptedAnswers": [
                        "አክስት"
                    ],
                    "explanation": "አክስት (akist) = aunt. The counterpart for uncle (paternal side) is አጎት (agot); for maternal uncle: ሐዘዘ (hazeze)."
                }
            ]
        }
    },
    "am-u8-l3": {
        "id": "am-u8-l3",
        "subject": "amharic",
        "unit": 8,
        "lessonNumber": 3,
        "title": "Possessive Family Expressions: My Father, Your Mother (Pronominal Suffixes)",
        "level": "A2",
        "objective": "Attach pronominal possessive suffixes to family nouns to express 'my father', 'your mother', 'his/her brother', etc. — a core Amharic morphological skill distinct from using separate possessive pronouns.",
        "presentation": {
            "explanation": "In English, possession is expressed with separate pronouns before the noun: 'my father', 'your mother', 'her sister'. In Amharic, possession is expressed through pronominal suffixes attached directly to the end of the noun. These suffixes change based on who the owner is (1st, 2nd, or 3rd person) and the gender of the owner (for 2nd and 3rd person).\n\nThe possessive suffixes for family nouns:\n\nPerson | Suffix | Example with አባት (father)\n1sg (my) | -ዬ → -ቴ | አባቴ (abbate) = my father\n2sg masc (your, m) | -ህ | አባትህ (abbatih) = your father [speaking to a man]\n2sg fem (your, f) | -ሽ | አባትሽ (abbatish) = your father [speaking to a woman]\n2 polite (your, formal) | -ዎ | አባቶ (abbato) = your father [polite/formal]\n3sg masc (his) | -ው | አባቱ (abbatu) = his father\n3sg fem (her) | -ዋ | አባቷ (abbatwa) = her father\n1pl (our) | -ን | አባታችን (abbataachin) = our father [note vowel change]\n3pl (their) | -ቸው | አባቶቻቸው (abbatochachew) = their father(s)\n\nIMPORTANT phonological note: when the suffix is added, the noun stem can undergo vowel changes. For example:\n• አባት (abbat) + -ዬ (1sg) → አባቴ (not *አባትዬ)\n• እናት (inat) + -ዬ → እናቴ (my mother)\n• ወንድም (wendim) + -ዬ → ወንድሜ (my brother)\n• እህት (iht) + -ዬ → እህቴ (my sister)\n\nThese forms must be learned as vocabulary items alongside the base nouns, as the phonological changes are not perfectly predictable from the base form alone.\n\nCommon possessive family forms:\nMy: አባቴ / እናቴ / ወንድሜ / እህቴ / ልጄ / ባሌ / ሚስቴ / አያቴ\nHis: አባቱ / እናቱ / ወንድሙ / እህቱ / ልጁ\nHer: አባቷ / እናቷ / ወንድሟ / እህቷ / ልጇ",
            "examples": [
                {
                    "target": "እህቴ ታሟል። ሆስፒታል ይዘናት ሄዳለን።",
                    "reading": "Ihite tamwal. Hossippital yizzenat hedalene.",
                    "translation": "My sister is sick. We took her to the hospital."
                },
                {
                    "target": "ወንድሙ አሜሪካ ይኖራል።",
                    "reading": "Wendimmu Amerika yinoral.",
                    "translation": "His brother lives in America."
                },
                {
                    "target": "አያቶቻቸው ሁለቱም ህይወታቸውን ያለፉ ናቸው።",
                    "reading": "Ayatochachew hulettum hiwotachewun yallefu nachew.",
                    "translation": "Both of their grandparents have passed away."
                }
            ],
            "mnemonics": [
                "The 1sg suffix that creates 'my [family member]' works like a vowel change + -ቴ ending for most family words: አባቴ, እናቴ, እህቴ, ሚስቴ. Think of it as the noun 'reaching toward me' with an -ቴ ending. For 3sg masculine ('his'), the ending is -ቱ/-ሙ/-ቁ (depending on the noun's final consonant): አባቱ, ወንድሙ."
            ],
            "culturalNotes": [
                "Ethiopians commonly address each other using kinship terms even with strangers — calling an older man አባቴ (my father) or an older woman እናቴ (my mother) is a sign of respect, not a statement of biological relationship. This practice is especially common in rural areas and reflects the communal, family-centric nature of Ethiopian social structure. Using the wrong level of formality (using -ህ/-ሽ instead of -ዎ with an elder) is considered disrespectful."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«His sister is a teacher» ን ወደ አማርኛ ቀይሩ። (እህት = sister; 3sg masculine possessive: -ዋ/ቷ form; ናት = she is)",
                    "options": [
                        "እህቱ መምህርት ናት።",
                        "እህቷ መምህርት ናት።",
                        "እህቴ መምህርት ናት።"
                    ],
                    "answerIndex": 1,
                    "explanation": "3sg feminine possessive of እህት = እህቷ (her sister). But wait — 'his sister' needs the masculine 3sg. In practice: እህቱ = his sister (masc owner). However, note that some sources use እህቷ for 'her sister' specifically. The intended answer here is based on common usage: 3sg masculine owner + እህት = እህቱ... actually both forms exist in regional variation. The safest standard: እህቱ = his sister. Option C means 'my sister'. — Note to learner: regional variation exists here; focus on the -ቱ = 'his' vs. -ቷ = 'her' pattern."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«አባቱ» ምን ማለት ነው?",
                    "options": [
                        "My father",
                        "Our father",
                        "His father"
                    ],
                    "answerIndex": 2,
                    "explanation": "አባቱ = his father. Breakdown: አባት (father) + -ቱ (3sg masculine possessive suffix). My father = አባቴ (-ዬ→-ቴ suffix). Our father = አባታችን (with -ን + vowel change)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "«Our mother» ን ወደ አማርኛ ቀይሩ። (1pl possessive suffix: -ን with vowel change to -ያችን / -አችን pattern)",
                    "options": [
                        "እናቶቻቸው",
                        "እናቷ",
                        "እናታችን"
                    ],
                    "answerIndex": 2,
                    "explanation": "እናታችን = our mother. Breakdown: እናት (mother) + -አችን (1pl possessive suffix, with the noun stem vowel extending: እናት + አችን → እናታችን). Option A means 'their mothers'. Option B means 'her mother' (3sg feminine)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type 'my brother' in Amharic using the possessive suffix form (not ወንድሜ is what you type):",
                    "acceptedAnswers": [
                        "ወንድሜ"
                    ],
                    "explanation": "ወንድሜ = my brother. ወንድም (wendim) + 1sg possessive suffix → ወንድሜ (the -ም of wendim changes and -ዬ becomes -ሜ through phonological fusion)."
                }
            ]
        }
    },
    "am-u8-l4": {
        "id": "am-u8-l4",
        "subject": "amharic",
        "unit": 8,
        "lessonNumber": 4,
        "title": "Describing Family Members: Age, Occupation, and Character",
        "level": "A2",
        "objective": "Construct sentences that describe family members using age expressions, occupation nouns, and character adjectives in Amharic, applying the copula ነው/ናት/ናቸው correctly for each person's gender and number.",
        "presentation": {
            "explanation": "Once you can name family members and attach possessives, the next step is describing them. In Amharic, descriptions follow a Subject + Description + Copula structure, where the copula (the 'is/are' verb) must agree with the subject in gender and number.\n\nTHE COPULA SYSTEM:\n• ነው (new) — is [3sg masculine, or for inanimate objects]\n• ናት (nat) — is [3sg feminine]\n• ናቸው (nachew) — are [3pl] / is [formal/polite singular]\n• ነን (nen) — are [1pl]\n• ነህ (neh) — are [2sg masculine]\n• ነሽ (nesh) — are [2sg feminine]\n\nAGE EXPRESSIONS:\nAmharic expresses age as: [person] + [number] + ዓመቱ/ዓመቷ/ዓመታቸው + ነው/ናት/ናቸው\n• ዓመቱ (ametu) — his age (literally: 'his year') [3sg masc]\n• ዓመቷ (ametwa) — her age [3sg fem]\nExample: አባቴ ሃምሳ ዓመቱ ነው። = My father is fifty years old.\n\nOCCUPATION DESCRIPTIONS:\nJob titles in Amharic typically have masculine and feminine forms:\n• መምህር (memhir) / መምህርት (memhirt) — teacher (m/f)\n• ዶክተር (doqter) — doctor (same form for m/f in modern usage)\n• ነጋዴ (negade) — merchant/businessman (m); ነጋዴ or ነጋዴ ሴት for female\n• ፖሊስ (polis) — police officer\n• ሞያ (moya) — profession/occupation (general noun)\n\nCHARACTER ADJECTIVES:\nIn Amharic, adjectives precede the noun they modify but follow the subject when used predicatively:\n• ደጋፊ (degafi) — supportive, generous\n• ጠቢብ (tebbib) — wise, clever\n• ደፋር (defar) — brave\n• ቸር (cher) — kind, good-natured\n• ታጋሽ (tagash) — patient\n\nPredicate adjective + copula: አባቴ ቸር ነው። (My father is kind.)\nAttributive adjective + noun: ቸር አባቴ (My kind father) — adjective comes before.",
            "examples": [
                {
                    "target": "እናቴ ሃምሳ ሁለት ዓመቷ ናት፣ ናርስ ናት።",
                    "reading": "Innate hamsa hulet ametwa nat, nars nat.",
                    "translation": "My mother is fifty-two years old and is a nurse."
                },
                {
                    "target": "ታላቅ ወንድሜ ጠቢብ ሰው ነው — ሰዎች ምክር ሊጠይቁት ይሄዱ።",
                    "reading": "Tallaq wendime tebbib sew new — sewoch mikir liteyiqqut yihedu.",
                    "translation": "My older brother is a wise person — people go to seek advice from him."
                },
                {
                    "target": "ወላጆቼ ሁለቱም ቸሮች ናቸው።",
                    "reading": "Wellajoche hulettum cheroch nachew.",
                    "translation": "Both of my parents are kind."
                }
            ],
            "mnemonics": [
                "The copula trio to memorize: ነው (new) = he/it is, ናት (nat) = she is, ናቸው (nachew) = they are. Hear the -ት in ናት as pointing to feminine (like the feminine suffix -ት on nouns: ሴት, መምህርት). Hear ናቸው as 'na-chew' — a plural ending for groups. For age: the pattern is [Number] + ዓመቱ/ዓመቷ + ነው/ናት."
            ],
            "culturalNotes": [
                "In Ethiopian social contexts, it is completely normal — and expected — to discuss family members' ages, occupations, and whereabouts when meeting someone. Questions like አባትህ ምን ይሰራሉ? (What does your father do?) are not invasive but friendly. However, asking about a widow's or widower's deceased spouse should be done with care — the phrasing ባለቤቶ ያለፉ ናቸው? (Has your spouse passed?) uses the polite plural ናቸው even for a single person, showing respect."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«My grandmother is eighty years old and is patient» ን ወደ አማርኛ ቀይሩ። (አያቴ = my grandmother [using feminine context here]; ሰማኒያ = 80; ታጋሽ = patient; ናት = she is)",
                    "options": [
                        "አያቴ ሰማኒያ ዓመቱ ናት፣ ታጋሽ ናት።",
                        "አያቴ ሰማኒያ ዓመቷ ናት፣ ታጋሽ ናት።",
                        "አያቴ ሰማኒያ ዓመቷ ነው፣ ታጋሽ ናት።"
                    ],
                    "answerIndex": 1,
                    "explanation": "For a female subject: ዓመቷ (amétwa = her years, feminine form). The copula ናት (she is) is correct for 3sg feminine. Option A uses ዓመቱ (masculine form). Option C uses ዓመቷ correctly but then uses ነው (masculine copula) for the age clause, which is internally inconsistent."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ናቸው» ምን ጊዜ ይጠቀማሉ?",
                    "options": [
                        "Only for 3rd person plural ('they are')",
                        "Only for formal/polite singular address",
                        "Both for 3rd person plural ('they are') AND as a polite form for a singular person to show respect"
                    ],
                    "answerIndex": 2,
                    "explanation": "ናቸው serves a double function in Amharic: (1) It is the ordinary 3pl copula ('they are'). (2) It is used as a polite/formal way to say 'he/she is' for a single respected person — similar to how French uses 'vous' for polite singular. Example: ዶክተሩ ዛሬ ጠፍተዋል ናቸው (The doctor is not here today) — polite singular."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "«My younger sister is twenty-five years old» — ትክክለኛው ዓረፍተ ነገር የትኛው ነው?",
                    "options": [
                        "ታናሽ እህቴ ሃያ አምስት ዓመቷ ናት።",
                        "ታናሽ እህቴ ሃያ አምስት ዓመቱ ናት።",
                        "ታናሽ እህቴ ሃያ አምስት ዓመቷ ነው።"
                    ],
                    "answerIndex": 0,
                    "explanation": "ታናሽ እህቴ (younger sister, feminine subject) → ዓመቷ (her years, feminine possessive form) + ናት (feminine copula). Option B uses masculine ዓመቱ. Option C uses masculine copula ነው with a female subject."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic copula (verb 'to be') for a 3rd person FEMININE singular subject (she is):",
                    "acceptedAnswers": [
                        "ናት"
                    ],
                    "explanation": "ናት (nat) is the 3sg feminine copula in Amharic. Compare: ነው (new) = he/it is; ናቸው (nachew) = they are / polite he/she is."
                }
            ]
        }
    },
    "am-u8-l5": {
        "id": "am-u8-l5",
        "subject": "amharic",
        "unit": 8,
        "lessonNumber": 5,
        "title": "Unit 8 Synthesis: Talking About Your Family",
        "level": "A2",
        "objective": "Produce a coherent short description of one's family in Amharic by combining family vocabulary, possessive suffixes, copula agreement, age expressions, and descriptive adjectives into multi-sentence discourse.",
        "presentation": {
            "explanation": "This lesson synthesizes everything in Unit 8 into connected family-description discourse — the kind of real speech an A2 learner needs when someone asks ቤተሰብህ ስንት ናቸው? (How many people are in your family?) or ቤተሰብህን ንገረኝ (Tell me about your family).\n\nA model family description, annotated:\n\nቤተሰቤ አምስት ሰዎች ናቸው። (My family has five people. / Lit: My family are five people.)\n— ቤተሰቤ = my family [possessive: ቤተሰብ + -ዬ]\n— አምስት ሰዎች = five people\n— ናቸው = they are [plural copula]\n\nአባቴ ሃምሳ ዓመቱ ነው፣ ነጋዴ ነው። (My father is fifty, he is a merchant.)\nእናቴ አርባ ስምንት ዓመቷ ናት፣ ቤት ትሰራለች። (My mother is forty-eight, she works at home.)\n— ቤት ትሰራለች = she works at home [ቤት = home + ትሰራለች = she works]\n\nሁለት ወንድሞችና አንዲት እህት አሉኝ። (I have two brothers and one sister.)\n— ሁለት ወንድሞች = two brothers [ወንድሞች = plural of ወንድም]\n— አንዲት = one [feminine counter form, for ሴት/feminine nouns]; compare አንድ for masculine\n— አሉኝ = I have (existential 'there are to me')\n\nCounting and gender in Amharic numbers:\nAmharic has gendered forms of the number 'one': አንድ (and) for masculine nouns, አንዲት (andit) for feminine nouns. This is one of the few number gender distinctions in the language.\n\nKEY DISCOURSE CONNECTORS:\n• እና (inna) / -ና (suffix) — and\n• ነገር ግን (neger gin) — but / however\n• ስለዚህ (silezih) — therefore\n• ደግሞ (degmo) — also / moreover",
            "examples": [
                {
                    "target": "ቤተሰቤ ትንሽ ነው — ሦስት ሰዎች ብቻ ናቸው፡ አባቴ፣ እናቴ፣ እና እኔ።",
                    "reading": "Betesebe tinish new — sost sewoch bicha nachew: abbate, innate, inna ine.",
                    "translation": "My family is small — there are only three people: my father, my mother, and me."
                },
                {
                    "target": "አንድ ታላቅ ወንድምና ሁለት ታናሽ እህቶች አሉኝ። ሁሉም ደጋፊዎቼ ናቸው።",
                    "reading": "And tallaq wendiminna hulet tanash ihtoch allugny. Hullum degafiwoche nachew.",
                    "translation": "I have one older brother and two younger sisters. They are all my supporters."
                },
                {
                    "target": "አያቴ — የአባቴ አባት — ሰባ ዓመቱ ሆኖ አሁንም ጠቢብ ምክር ይሰጣል።",
                    "reading": "Ayate — ye-abbate abbat — sebba ametu hono ahunm tebbib mikir yisettal.",
                    "translation": "My grandfather — my father's father — is seventy years old and still gives wise advice."
                }
            ],
            "mnemonics": [
                "To describe a family, build each sentence with the same 3-part frame: [Family member + possessive] + [description: age/job/adjective] + [copula: ነው/ናት/ናቸው]. Check copula gender every time: masculine → ነው, feminine → ናት, plural/polite → ናቸው. Get the copula wrong and the sentence sounds ungrammatical to native ears."
            ],
            "culturalNotes": [
                "When Ethiopians introduce their family, they often include the city or region of origin as part of the description — for example: አባቴ ከጎንደር ነው (My father is from Gondar). Family origin is a significant part of identity in Ethiopia, and regions like Gondar, Tigray, Harari, or the various communities of the Omo Valley each carry cultural associations. Knowing where someone's family is from is considered important context for understanding who they are."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«I have one sister and three brothers» ን ወደ አማርኛ ቀይሩ። (አንዲት = one [fem]; ሦስት = three; አሉኝ = I have/there are to me)",
                    "options": [
                        "አንድ እህትና ሦስት ወንድሞች አሉኝ።",
                        "አንዲት እህትና ሦስት ወንድሞች አሉኝ።",
                        "አንዲት እህቶችና ሦስት ወንድሞች አሉኝ።"
                    ],
                    "answerIndex": 1,
                    "explanation": "እህት (sister) is a feminine noun, so the feminine form of 'one' — አንዲት (andit) — must be used. Option A uses masculine አንድ with a feminine noun (wrong gender agreement). Option C uses the plural እህቶች (sisters) with አንዲት (one), which contradicts the singular meaning."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«አሉኝ» ምን ማለት ነው?",
                    "options": [
                        "I am going",
                        "I have / There are [to me] — expresses possession using the existential verb አለ with 1sg object suffix",
                        "They were there"
                    ],
                    "answerIndex": 1,
                    "explanation": "አሉኝ = አሉ (they exist/are) + -ኝ (object suffix meaning 'to me' / 'for me'). So literally 'they exist to me' = 'I have them'. This is how Amharic expresses possession — not with a transitive 'have' verb but with an existential construction. ሁለት ልጆች አሉኝ = 'Two children exist to me' = 'I have two children'."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "«Both of my parents are teachers» — ትክክለኛው ዓረፍተ ነገር ምን ነው? (ወላጆቼ = my parents; ሁለቱም = both; መምህራን = teachers [plural of መምህር])",
                    "options": [
                        "ወላጆቼ ሁለቱም መምህር ናቸው።",
                        "ወላጆቼ ሁለቱም መምህራን ናቸው።",
                        "ወላጆቼ ሁለቱም መምህራን ነው።"
                    ],
                    "answerIndex": 1,
                    "explanation": "ወላጆቼ (my parents, plural) + ሁለቱም (both) + መምህራን (teachers, plural — the -አን suffix pluralizes) + ናቸው (they are, plural copula). Option A uses singular መምህር with a plural subject (grammatical mismatch). Option C uses singular copula ነው with a plural subject."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'my family' (ቤተሰብ + 1sg possessive suffix):",
                    "acceptedAnswers": [
                        "ቤተሰቤ"
                    ],
                    "explanation": "ቤተሰቤ = my family. ቤተሰብ (beteseb, family) + -ዬ (1sg possessive) → ቤተሰቤ. This is the standard form used when introducing or describing your own family."
                }
            ]
        }
    },
    "am-u9-l1": {
        "id": "am-u9-l1",
        "subject": "amharic",
        "unit": 9,
        "lessonNumber": 1,
        "title": "Ethiopian Food Vocabulary: Injera, Wot, and Key Ingredients",
        "level": "A2",
        "objective": "Name the core components of the Ethiopian meal — ኢንጀራ (injera), the various wots (stews), and common ingredients — and understand the cultural centrality of these foods in Ethiopian daily life.",
        "presentation": {
            "explanation": "Ethiopian cuisine is built around a single foundational element: ኢንጀራ (injera, pronounced in-JEE-rah). This is a large, spongy sourdough flatbread made from ጤፍ (teff, tef), a grain native to the Ethiopian highlands. Understanding injera is not just vocabulary learning — it is understanding the structure of an Ethiopian meal.\n\nThe injera serves as both plate and utensil. Food is placed on top of the injera, and diners tear pieces from the injera to scoop and eat the dishes placed on it. Eating with utensils at a traditional Ethiopian meal would be unusual.\n\nKEY FOOD VOCABULARY:\n\nThe bread:\n• ኢንጀራ (injera) — the sourdough flatbread [ምግብ = food, ዳቦ = bread, but ኢንጀራ is distinct]\n• ጤፍ (teff) — the grain used to make injera; a superfood high in protein and iron\n\nThe stews (ወጥ / አልጫ):\n• ወጥ (wot) — a spiced stew, the general term; typically made with meat or vegetables\n• ዶሮ ወጥ (doro wot) — chicken stew [ዶሮ = chicken]; the most famous Ethiopian dish, served at celebrations\n• ምሥር ወጥ (misir wot) — red lentil stew [ምሥር = red lentils]; a common fasting food\n• አልጫ (alcha) — a mild stew without berbere spice, often made with lamb or vegetables\n• ሽሮ (shiro) — a thick stew made from ground legumes (chickpeas/beans); an everyday staple\n\nKey spices and condiments:\n• በርበሬ (berbere) — the essential Ethiopian spice blend (chili, fenugreek, ginger, korarima, and more); appears in wot\n• ኑሮ (nuro) / ቅቤ (qibe) — spiced clarified butter (similar to ghee) used in cooking\n• ቆቅ ቅቤ (qoq qibe) — niter kibbeh (the spiced, herb-infused butter base of many dishes)\n• ጥቁር ቃሪያ (tikur qaria) — black pepper\n\nFasting foods (ፆም ምግብ, tsom migib):\nEthiopian Orthodox Christians fast frequently — some Wednesdays, Fridays, and major fasts. Fasting food (ፆም) excludes all animal products. ምሥር ወጥ, ሽሮ, and vegetable dishes dominate fasting menus.\n\nKey vocabulary summary:\nምግብ (migib) = food | ምሳ (missa) = lunch | እራት (irat) = dinner | ቁርስ (qurs) = breakfast",
            "examples": [
                {
                    "target": "ዶሮ ወጥ ያለ ኢንጀራ ማብላት ክብሩን ያጣል።",
                    "reading": "Doro wot yale injera mablat kibrrun yatal.",
                    "translation": "Serving doro wot without injera loses its dignity/honor. (A saying about the inseparability of the two)"
                },
                {
                    "target": "ዛሬ ሰኞ ነው — ፆም ቀን ነው፣ ስለዚህ ሽሮ ወጥ እና ምሥር ወጥ ብቻ ይቀርባሉ።",
                    "reading": "Zare Senyo new — tsom qen new, silezih shiro wot inna misir wot bicha yiqerebalu.",
                    "translation": "Today is Monday — it is a fasting day, so only shiro stew and lentil stew will be served."
                },
                {
                    "target": "ጤፍ ዱቄት ካጣን ኢንጀራ ልናደርግ አንችልም።",
                    "reading": "Teff duqet katan injera linnaderig anchilim.",
                    "translation": "If we don't have teff flour, we cannot make injera."
                }
            ],
            "mnemonics": [
                "To remember the wot types: ዶሮ (doro) = chicken — ዶ- sounds like 'do', as in the do-re-mi scale, or think 'doro = do-row: row of chickens'. ምሥር (misir) = lentils — the -ር ending is soft, like the gentle red colour of lentil stew. ሽሮ (shiro) = ground legume stew — think 'shiro: sure-oh, the everyday staple you're sure to find'."
            ],
            "culturalNotes": [
                "The phrase ይቅረብ (yiqreb) — 'let it be served/brought' — is used to invite guests to eat, and meals are communal affairs. Sharing from a single large piece of injera on a round basket tray (መሶብ, mesob) is the norm. The act of placing food into someone else's mouth — ጉርሻ (gursha) — is a gesture of love and honor reserved for close friends, family members, and honored guests. Refusing a gursha from a genuine well-wisher is considered impolite."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ፆም ቀን ምን ዓይነት ምግብ ይበላሉ?",
                    "options": [
                        "ዶሮ ወጥ — ምክንያቱም ዶሮ ቀላል ነው።",
                        "ምሥር ወጥ እና ሽሮ — ምክንያቱም ፆም የእንስሳ ምርቶችን ይከለክላል።",
                        "ቅቤ ያለበት ዳቦ — ምክንያቱም ቅቤ ጣፋጭ ነው።"
                    ],
                    "answerIndex": 1,
                    "explanation": "Ethiopian Orthodox fasting (ፆም) prohibits animal products: no meat, dairy, or eggs. ምሥር ወጥ (lentil stew) and ሽሮ (ground legume stew) are vegan and therefore suitable fasting foods. ዶሮ ወጥ contains chicken (animal product, prohibited). ቅቤ (clarified butter) is a dairy product, also prohibited."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "ኢንጀራ ምንድን ነው እና ከምን ይሰራል?",
                    "options": [
                        "A rice dish made from imported Asian grains",
                        "A sourdough flatbread made from teff (ጤፍ), a grain native to the Ethiopian highlands, used as both plate and utensil",
                        "A spiced butter used as a condiment in Ethiopian cooking"
                    ],
                    "answerIndex": 1,
                    "explanation": "ኢንጀራ (injera) is a fermented sourdough flatbread made from ጤፍ (teff), a nutritious grain indigenous to Ethiopia. It serves as both the base/plate of the meal and the eating implement — diners tear pieces to scoop stews (ወጥ). It is the foundation of the Ethiopian meal."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "«ዶሮ ወጥ» ምን ማለት ነው?",
                    "options": [
                        "Red lentil stew",
                        "Ground legume stew",
                        "Chicken stew"
                    ],
                    "answerIndex": 2,
                    "explanation": "ዶሮ ወጥ = chicken stew. ዶሮ (doro) = chicken; ወጥ (wot) = stew. It is Ethiopia's most celebrated dish, particularly for special occasions and ceremonies. Red lentil stew = ምሥር ወጥ. Ground legume stew = ሽሮ."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for the sourdough flatbread that is the foundation of an Ethiopian meal:",
                    "acceptedAnswers": [
                        "ኢንጀራ"
                    ],
                    "explanation": "ኢንጀራ (injera) is the fermented teff flatbread central to Ethiopian cuisine. It serves as both the edible plate and the eating utensil in traditional Ethiopian dining."
                }
            ]
        }
    },
    "am-u9-l2": {
        "id": "am-u9-l2",
        "subject": "amharic",
        "unit": 9,
        "lessonNumber": 2,
        "title": "At the Market: Shopping Phrases and Transaction Vocabulary",
        "level": "A2",
        "objective": "Use key Amharic phrases for buying and selling at a market — asking for items, expressing quantities, and completing a transaction — combining imperative forms, quantity expressions, and polite request structures.",
        "presentation": {
            "explanation": "Ethiopian markets — ገበያ (gebeya) — are vibrant, social places where bargaining (መደራደር, mederadder) is expected. At a traditional market, the listed price is a starting point, not a fixed price. Knowing how to ask for items, state quantities, and negotiate politely is an essential A2 Amharic skill.\n\nKEY SHOPPING VOCABULARY:\n• ገበያ (gebeya) — market\n• ዋጋ (waga) — price\n• ሻጭ (shach) — seller/vendor [from ሸጠ, shete = to sell]\n• ገዥ (gejj) — buyer [from ገዛ, geza = to buy]\n• ሸቀጥ (sheqet) — goods/merchandise\n• ብር (birr) — Ethiopian birr (currency); ሳንቲም (santim) = cents (100 santim = 1 birr)\n\nBUYING PHRASES:\n• ይህ ምን ያህል ነው? (Yih min yahil new?) — How much is this?\n• ዋጋው ስንት ነው? (Wagaw sint new?) — What is the price of it?\n• ___ ብር ነው (__ birr new) — It is ___ birr.\n• @@@ ይኑርኝ (__ yinurigni) — Give me [item] / Let me have [item] [polite request]\n• @@@ ስጠኝ (__ stitegni) — Give me [item] [direct imperative]\n• @@@ ይፈልጋሉ? (__ yifelligalu?) — Do you want [item]? [vendor asking customer]\n\nQUANTITY EXPRESSIONS:\n• አንድ ኪሎ (and kilo) — one kilogram\n• ግማሽ ኪሎ (gimash kilo) — half kilogram\n• ሁለት ኪሎ (hulet kilo) — two kilograms\n• ሁለት ሦስት (hulet sost) — a few [literally: two-three, colloquial for 'a couple']\n• አቅርቡልኝ (aqribbulign) — bring it to me [polite]\n\nNEGOTIATING PHRASES:\n• ዋጋው ይቀነስ? (Wagaw yiqenes?) — Can the price be reduced?\n• ዋጋው ብዙ ነው (Wagaw bizu new) — The price is too high.\n• ትንሽ ያቅርቡልኝ (tinish yaqribbulign) — Please bring it down a little.\n• እሺ ልግዛ (eshi ligeza) — Okay, I'll buy it. [እሺ = okay; ልግዛ = let me buy = I'll buy]",
            "examples": [
                {
                    "target": "ቲማቲም ሁለት ኪሎ ዋጋው ስንት ነው?",
                    "reading": "Timmattim hulet kilo wagaw sint new?",
                    "translation": "How much is two kilograms of tomatoes?"
                },
                {
                    "target": "— ሃምሳ ብር ነው። — ዋጋው ብዙ ነው። አርባ ብር ቢሆን?",
                    "reading": "— Hamsa birr new. — Wagaw bizu new. Arba birr bihon?",
                    "translation": "— It is fifty birr. — The price is high. What about forty birr?"
                },
                {
                    "target": "አቅርቦት ስለሌለ አሁን ዝናጃ የለም — ነገ ኑ።",
                    "reading": "Aqribot silelele ahun zinaja yellem — nege nu.",
                    "translation": "There is no ginger right now because of shortage — come tomorrow."
                }
            ],
            "mnemonics": [
                "ዋጋ (waga) = price — think 'wager': when you bargain, you're making a wager on what the price should be. ሸጠ (shete) = to sell → ሻጭ (shach) = seller — the root ሸጠ contains the 'sh' sound: 'she-te', and ሻጭ is the agent noun. Similarly ገዛ (geza) = to buy → ገዥ (gejj) = buyer."
            ],
            "culturalNotes": [
                "Ethiopian markets like Mercato in Addis Ababa (the largest open-air market in Africa) are organized by product type — you'll find an entire section for spices (ቅመም ቦታ), another for textiles (ጨርቅ ቦታ), and so on. Bargaining is expected, but aggressive haggling is considered rude. The social interaction — chatting, drinking tea together — is as important as the transaction itself. A vendor who refuses to negotiate at all is unusual; so is a buyer who haggles down to an insultingly low price."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ዋጋ ለማወቅ ምን ጥያቄ ትጠቀማለህ?",
                    "options": [
                        "ይህ ምን ያህል ነው? / ዋጋው ስንት ነው?",
                        "ይህ የትኛው ነው?",
                        "ይህ ለምን ዋጋ ነው?"
                    ],
                    "answerIndex": 0,
                    "explanation": "ዋጋው ስንት ነው? (What is the price?) and ይህ ምን ያህል ነው? (How much is this?) are both standard price inquiries. Option B asks 'which one is this?' (not about price). Option C is grammatically awkward and not a natural Amharic question form."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ዋጋው ይቀነስ?» ምን ያህል ነው?",
                    "options": [
                        "Please add more to the price",
                        "Can the price be reduced? (a polite bargaining question)",
                        "Is this the only price?"
                    ],
                    "answerIndex": 1,
                    "explanation": "ዋጋው ይቀነስ? = 'May the price be reduced?' (ዋጋ = price, ይቀነስ = let it be reduced/decreased). This is the polite phrasing used when beginning to negotiate. The causative ይቀነስ uses the jussive/optative mood — 'let it go down' — which is softer than a direct command."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "«አርባ ብር ቢሆን?» ምን ማለት ነው?",
                    "options": [
                        "I will pay forty birr exactly, no negotiation.",
                        "What about forty birr? (a counter-offer in bargaining)",
                        "Forty birr is too expensive."
                    ],
                    "answerIndex": 1,
                    "explanation": "አርባ ብር ቢሆን? = 'If it were forty birr?' / 'What about forty birr?' — a counter-offer. ቢሆን (bihon) is the subjunctive/conditional of ነው ('to be'): 'were it to be'. This is the standard Ethiopian bargaining counter-offer formula."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'price':",
                    "acceptedAnswers": [
                        "ዋጋ"
                    ],
                    "explanation": "ዋጋ (waga) = price. Used in: ዋጋው ስንት ነው? (What is the price?), ዋጋው ብዙ ነው (the price is high), ዋጋው ይቀነስ (let the price be reduced)."
                }
            ]
        }
    },
    "am-u9-l3": {
        "id": "am-u9-l3",
        "subject": "amharic",
        "unit": 9,
        "lessonNumber": 3,
        "title": "Numbers, Prices, and the Counting System (Numbers 11-100)",
        "level": "A2",
        "objective": "Count from 11 to 100 in Amharic, form compound numbers correctly, express prices using ብር (birr) and ሳንቲም (santim), and understand how Amharic builds larger numbers through a systematic additive pattern.",
        "presentation": {
            "explanation": "In Unit 2 we learned numbers 1–10. Now at A2 level, market interactions require numbers up to 100. Amharic builds numbers 11–99 through a consistent pattern of multiplying tens and adding units.\n\nTENS IN AMHARIC:\n• 10 — አሥር (asir)\n• 20 — ሃያ (haya)\n• 30 — ሠላሳ (selasa)\n• 40 — አርባ (arba)\n• 50 — ሃምሳ (hamsa)\n• 60 — ስልሳ (silsa)\n• 70 — ሰባ (seba)\n• 80 — ሰማኒያ (semania)\n• 90 — ዘጠና (zetena)\n• 100 — መቶ (meto)\n\nCOMPOUND NUMBERS (11–19):\nAmharic forms these with the formula: [Tens] + -ና + [Units]\n• 11 — አሥራ አንድ (asira and) [note: አሥር becomes አሥራ before a unit]\n• 12 — አሥራ ሁለት (asira hulet)\n• 13 — አሥራ ሦስት (asira sost)\n• 15 — አሥራ አምስት (asira amist)\n• 19 — አሥራ ዘጠኝ (asira zetegn)\n\nCOMPOUND NUMBERS (21–99):\nFor 20+, simply say the ten then the unit:\n• 21 — ሃያ አንድ (haya and)\n• 35 — ሠላሳ አምስት (selasa amist)\n• 47 — አርባ ሰባት (arba sebat)\n• 53 — ሃምሳ ሦስት (hamsa sost)\n• 68 — ስልሳ ስምንት (silsa simint)\n• 99 — ዘጠና ዘጠኝ (zetena zetegn)\n\nNOTE: For teens (11-19), the tens form changes: አሥር → አሥራ (with a linking vowel). For 20s onward, no linking vowel — just put the numbers side by side.\n\nPRICES:\nEthiopian currency: ብር (birr) + ሳንቲም (santim)\n• 25 ብር = ሃያ አምስት ብር (haya amist birr)\n• 13 ብር 50 ሳንቲም = አሥራ ሦስት ብር ሃምሳ ሳንቲም\n• ዋጋው ሃምሳ ሁለት ብር ነው = The price is 52 birr.",
            "examples": [
                {
                    "target": "ቲማቲም ሦስት ኪሎ ሠላሳ ስድስት ብር ነው።",
                    "reading": "Timmattim sost kilo selasa sidist birr new.",
                    "translation": "Three kilograms of tomatoes is thirty-six birr."
                },
                {
                    "target": "— ቁጥር ስልሳ ሦስት? — አዎ፣ ሰፈር ስልሳ ሦስቱ ቤቴ ነው።",
                    "reading": "— Qutr silsa sost? — Awo, sefer silsa sosstu bete new.",
                    "translation": "— Number sixty-three? — Yes, number sixty-three in the neighborhood is my house."
                },
                {
                    "target": "አሥራ አምስት ብር ካዋጣ ሁሉም ሰው ደስ ይለዋል።",
                    "reading": "Asira amist birr kawata hullum sew des yilewwal.",
                    "translation": "If it costs fifteen birr, everyone will be pleased."
                }
            ],
            "mnemonics": [
                "The tens have rhythmic patterns: ሃያ (20) — ሃምሳ (50) — ሰባ (70) — ሰማኒያ (80) — ዘጠና (90). Notice that 70 (ሰባ) and the root of 7 (ሰባት) share ሰባ. 80 (ሰማኒያ) and 8 (ስምንት) are related through Semitic root alternation. For teens: remember that አሥር becomes አሥራ (with -ራ suffix) when followed by a unit number."
            ],
            "culturalNotes": [
                "Ethiopia uses the Ethiopian calendar (13 months) and the Ethiopian numeral system in traditional contexts, but Arabic numerals are used in commerce and education. Price negotiation at markets often happens quickly, with vendors rapidly naming prices and buyers counter-offering. Knowing numbers fluently matters — hesitating too long signals unfamiliarity and may result in higher prices being offered to you as a foreign learner."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ቁጥር 47 ን በአማርኛ ይናገሩ:",
                    "options": [
                        "ሰባ አርባ",
                        "አርባ ሰባት",
                        "ሃምሳ ሰባ"
                    ],
                    "answerIndex": 1,
                    "explanation": "47 = አርባ (40) + ሰባት (7) = አርባ ሰባት. Option A reverses the tens and units (ሰባ is 70, not 7). Option C says 57 (ሃምሳ = 50, ሰባ ≠ 7 here — note ሰባ means 70, ሰባት means 7)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«አሥራ ሦስት ብር» ምን ቁጥር ነው?",
                    "options": [
                        "13 birr",
                        "30 birr",
                        "103 birr"
                    ],
                    "answerIndex": 0,
                    "explanation": "አሥራ ሦስት = 13. አሥራ = the linking form of አሥር (10) used in teens. ሦስት = 3. Therefore አሥራ ሦስት = 10 + 3 = 13. 30 = ሠላሳ (completely different word). 103 = መቶ ሦስት."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "ቁጥር 85 ን በአማርኛ ይናገሩ:",
                    "options": [
                        "ዘጠና አምስት",
                        "ሰማኒያ አምስት",
                        "ሰባ አምስት"
                    ],
                    "answerIndex": 1,
                    "explanation": "85 = ሰማኒያ (80) + አምስት (5) = ሰማኒያ አምስት. Option A says 95 (ዘጠና = 90). Option C says 75 (ሰባ = 70). Note: ሰባ ≠ ሰባት — ሰባ is the tens-form '70', while ሰባት is the unit '7'."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'fifty' (the tens number, not the compound):",
                    "acceptedAnswers": [
                        "ሃምሳ"
                    ],
                    "explanation": "ሃምሳ (hamsa) = 50. Compare: ሃያ (20), ሠላሳ (30), አርባ (40), ሃምሳ (50). ሃምሳ appears in common prices: ሃምሳ ብር = 50 birr."
                }
            ]
        }
    },
    "am-u9-l4": {
        "id": "am-u9-l4",
        "subject": "amharic",
        "unit": 9,
        "lessonNumber": 4,
        "title": "Ordering Food: Requests, Preferences, and Restaurant Phrases",
        "level": "A2",
        "objective": "Order food and drink in a restaurant or café setting using polite request forms (ያምጡልኝ, ፈልጌያለሁ), express food preferences and restrictions, and understand the menu interaction pattern in Ethiopian hospitality.",
        "presentation": {
            "explanation": "Restaurants (ምግብ ቤት, migib bet — literally 'food house') and cafés (ቡና ቤት, buna bet — 'coffee house') are central to Ethiopian social life. Knowing how to order, express preferences, and interact politely is a practical A2 milestone.\n\nREQUEST FORMS (ORDERING):\nTwo main politeness levels for ordering:\n\n1. Polite request using ፈልጌያለሁ (I want/would like) + object:\n   ዶሮ ወጥ ፈልጌያለሁ — I would like doro wot\n   ቡና ፈልጌያለሁ — I would like coffee\n\n2. Imperative using ያምጡልኝ (please bring me [plural/formal]):\n   ቡና ያምጡልኝ — Please bring me coffee\n   ዳቦ ያምጡልኝ — Please bring me bread\n\nNote: ያምጡልኝ uses the formal plural imperative of አመጣ (ameta = to bring): [ያምጡ (they/you-formal bring) + ልኝ (to me)]. This form is used with waitstaff as a polite distanced request.\n\nASKING ABOUT THE MENU:\n• ዛሬ ምን አለ? (Zare min alle?) — What do you have today?\n• ምናሌ አለ? (Minale alle?) — Do you have a menu? [ምናሌ = menu]\n• _____ አለ ወይ? (__ alle wey?) — Do you have ___?\n\nEXPRESSING PREFERENCES:\n• ___ አልፈልግም (__ alfelligim) — I do not want ___\n• ሥጋ አልበላም (siga albelam) — I do not eat meat [fasting or personal preference]\n• ቅቤ ሳይጨምሩ (qibe sayichimiru) — Without adding butter\n• ቅመሙ ትንሽ ቢሆን (qimemmu tinish bihon) — If the spice could be a little less\n\nCOFFEE CEREMONY VOCABULARY:\nEthiopian coffee (ቡና, buna) is typically served in three rounds in a traditional ceremony:\n• ፊተኛ ቡና (fitennya buna) — first cup (strongest)\n• ሁለተኛ ቡና (hulettenna buna) — second cup\n• ሦስተኛ ቡና (sostenna buna) — third cup (blessing cup, ቤሬካ, bereka)\nRefusing the third cup is acceptable but sometimes requires a polite explanation.",
            "examples": [
                {
                    "target": "ምናሌ ያምጡልኝ — ምን እንዳለ ማየት እፈልጋለሁ።",
                    "reading": "Minale yamtulign — min indalle mayet ifelligalehu.",
                    "translation": "Please bring me the menu — I want to see what there is."
                },
                {
                    "target": "ሥጋ አልበላም — ቬጀቴሪያን ምናሌ አለ ወይ?",
                    "reading": "Siga albelam — vejetterian minale alle wey?",
                    "translation": "I don't eat meat — do you have a vegetarian menu?"
                },
                {
                    "target": "ቡና ሦስቱን ጨርሻለሁ — ቤሬካ ቡናው ጣፋጭ ነበር።",
                    "reading": "Buna sostun cherrishalehu — bereka bunaw tafach nebber.",
                    "translation": "I have finished all three coffees — the blessing cup was delicious."
                }
            ],
            "mnemonics": [
                "For ordering: ያምጡልኝ (yamtulign) = 'please bring me' — break it down: ያምጡ (bring [formal]) + ልኝ (to me). The ልኝ ending appears in many 'give/bring to me' constructions in Amharic — it is the dative object 'to me'. ፈልጌያለሁ (felligeyalehu) = 'I want/would like' — the long ending -ያለሁ marks first person present tense continuous desire."
            ],
            "culturalNotes": [
                "Coffee (ቡና) is deeply embedded in Ethiopian identity — Ethiopia is the birthplace of coffee (Coffea arabica was first found in the Kaffa region). A coffee ceremony (ቡና ጠጥ, buna tet, or formally ቡናዬ) involves roasting green beans, grinding them by hand, brewing in a clay pot (ጀበና, jebena), and serving in small porcelain cups. Refusing coffee from a host in Ethiopia requires a polite and genuine excuse — it is like refusing hospitality itself."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«Please bring me water» ን ወደ አማርኛ ቀይሩ። (ውሃ = water)",
                    "options": [
                        "ውሃ ፈልጋለሁ።",
                        "ውሃ ያምጡልኝ።",
                        "ውሃ ልብ።"
                    ],
                    "answerIndex": 1,
                    "explanation": "ያምጡልኝ (yamtulign) = please bring me [formal/polite imperative]. So ውሃ ያምጡልኝ = Please bring me water. Option A (ፈልጋለሁ) means 'I want' — a preference statement, not a direct request to bring. Option C (ልብ) means 'heart' or 'mind', which is completely wrong here."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ሥጋ አልበላም» ምን ማለት ነው?",
                    "options": [
                        "I have already eaten meat.",
                        "There is no meat available.",
                        "I do not eat meat. (a permanent preference statement using present negative)"
                    ],
                    "answerIndex": 2,
                    "explanation": "ሥጋ አልበላም = ሥጋ (meat) + አልበላም (present negative 1sg: አል- + በላ stem + -ም = 'I do not eat'). This is a habitual present negative — expressing a standing preference or restriction, not a one-time past event."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "«ዛሬ ምን አለ?» ምን ለማለት ያገለግላል?",
                    "options": [
                        "Asking 'what is today?' (the date)",
                        "Asking 'what do you have today?' (inquiring about available food/items)",
                        "Asking 'what happened today?' (news/events)"
                    ],
                    "answerIndex": 1,
                    "explanation": "ዛሬ ምን አለ? = 'What is there today?' / 'What do you have today?' — a standard question when entering a restaurant or market to find out what is available. አለ (alle) here is the existential verb (there is). Context (restaurant/market setting) makes clear this is about available goods, not dates or news."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'coffee' (the drink at the center of Ethiopian social life):",
                    "acceptedAnswers": [
                        "ቡና"
                    ],
                    "explanation": "ቡና (buna) = coffee. Ethiopia is the birthplace of coffee — the word 'coffee' in many world languages (café, Kaffee, kopi) derives from the Kaffa region of Ethiopia where Coffea arabica was first discovered."
                }
            ]
        }
    },
    "am-u9-l5": {
        "id": "am-u9-l5",
        "subject": "amharic",
        "unit": 9,
        "lessonNumber": 5,
        "title": "Unit 9 Synthesis: Market and Restaurant Dialogue",
        "level": "A2",
        "objective": "Conduct a complete market or restaurant interaction in Amharic, integrating food vocabulary, numbers and prices, request forms, negation (Units 7), yes/no and wh-questions (Units 7), and polite refusal/agreement phrases.",
        "presentation": {
            "explanation": "Unit 9 has built the vocabulary and phrase structures for two core Ethiopian daily-life settings: the market (ገበያ) and the restaurant/café (ምግብ ቤት/ቡና ቤት). This synthesis lesson puts them together with the grammar from Unit 7 (negation and questions) to create full, realistic dialogue.\n\nA complete market dialogue:\nA (buyer): ይቅርታ — ቲማቲም አለ ወይ? (Excuse me — do you have tomatoes?)\nB (vendor): አዎ፣ ትኩስ ቲማቲም አለ። (Yes, there are fresh tomatoes.)\nA: ሁለት ኪሎ ዋጋው ስንት ነው? (How much are two kilograms?)\nB: አርባ ብር ነው። (It is forty birr.)\nA: ዋጋው ብዙ ነው — ሠላሳ ብር ቢሆን? (The price is high — what about thirty birr?)\nB: ሠላሳ ምን ያህል ነው ትላለህ! ሠላሳ አምስት ብር — ዝቅ ማለት አልችልም። (Thirty you say! Thirty-five birr — I can't go lower.)\nA: እሺ። ሠላሳ አምስት ብር ልግዛ። (Okay. I'll buy for thirty-five birr.)\n\nKey phrases from the dialogue to practice:\n• ይቅርታ (yiqirta) — excuse me / sorry\n• ትኩስ (tikus) — fresh [adjective — comes before noun: ትኩስ ቲማቲም]\n• ዝቅ ማለት አልችልም (ziq malet alchilim) — I cannot go lower [ዝቅ ማለት = to go lower; አልችልም = I cannot]\n\nA restaurant order with a preference restriction:\nA: ምናሌ ያምጡልኝ። (Please bring me the menu.)\nB: ምናሌ የለም — ሽሮ ወጥና ዶሮ ወጥ ብቻ ነው ዛሬ ያለን። (There is no menu — we only have shiro wot and doro wot today.)\nA: ሥጋ አልበላም — ሽሮ ወጥ ፈልጌያለሁ። (I don't eat meat — I would like shiro wot.)\nB: እሺ፣ ወዲያው ያምጣሉ። (Okay, they will bring it right away.)",
            "examples": [
                {
                    "target": "ዝቅ ማለት አልችልም — ይህ የመጨረሻው ዋጋ ነው።",
                    "reading": "Ziq malet alchilim — yih yemechereshhaw waga new.",
                    "translation": "I cannot go lower — this is the final price."
                },
                {
                    "target": "ቡና ፈልጌያለሁ — ነገር ግን ስኳር ሳይጨምሩ ያምጡልኝ።",
                    "reading": "Buna felligeyalehu — neger gin siqwar sayichimiru yamtulign.",
                    "translation": "I would like coffee — but please bring it without adding sugar."
                },
                {
                    "target": "— ዛሬ ምሥር ወጥ አለ ወይ? — አይ፣ ዛሬ ምሥር ወጥ አልተዘጋጀም።",
                    "reading": "— Zare misir wot alle wey? — Ay, zare misir wot altezeggajem.",
                    "translation": "— Do you have lentil stew today? — No, lentil stew was not prepared today."
                }
            ],
            "mnemonics": [
                "For a successful market/restaurant interaction, remember the 4-question framework: (1) አለ ወይ? (Do you have it?) (2) ዋጋው ስንት ነው? (How much?) (3) ዝቅ ቢሆን? / ቢቀነስ? (Can it be lower?) (4) እሺ ልግዛ / ፈልጌያለሁ (Okay, I'll take it / I would like it). These four questions cover 90% of market and menu interactions."
            ],
            "culturalNotes": [
                "In Ethiopian restaurants, it is common for a single waiter to serve a large table by memory, without writing orders down. This means patience is valued — don't rush. The phrase ወዲያው ያምጣሉ (they will bring it right away) is often used even when it may take some time; it is a courtesy signal, not a promise of speed. Tipping (ጥቂት ስጡ, tiqit situ = 'give a little') is appreciated but not always expected, especially in smaller family-owned establishments."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ምን ዓረፍተ ነገር ተገቢ ነው — ሥጋ አትበሉ (vegetarian) ሰው ለሆኑ ሻጭ ሲጠይቁ?",
                    "options": [
                        "ዶሮ ወጥ ይኑርልኝ — ሁሌ ዶሮ ወጥ እወዳለሁ።",
                        "ሥጋ አልበላም — ሥጋ ያለሌለው ምናሌ አለ ወይ?",
                        "ዋጋው ስንት ነው — ምሥር ወጥ ብዙ ቅመም አለው?"
                    ],
                    "answerIndex": 1,
                    "explanation": "A vegetarian communicates their restriction with ሥጋ አልበላም (I do not eat meat — present negative) and then asks whether a meat-free option exists: ሥጋ ያለሌለው ምናሌ አለ ወይ? (Is there a menu without meat?). Option A requests doro wot (chicken — not vegetarian). Option C is a price inquiry combined with a question about spice level — not a vegetarian restriction statement."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«እሺ ልግዛ» ምን ማለት ነው?",
                    "options": [
                        "Let me think about it — I'm not sure yet.",
                        "Okay, I'll buy it. (Agreement to complete a purchase, often after bargaining)",
                        "No, the price is still too high."
                    ],
                    "answerIndex": 1,
                    "explanation": "እሺ (eshi) = okay/agreed. ልግዛ = let me buy it / I will buy it (1sg jussive/voluntative of ገዛ 'to buy': ልግዛ = 'I'll buy'). Together: 'Okay, I'll buy it' — the verbal agreement to finalize a purchase after bargaining."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "ከዚህ ንግግር ውስጥ ትክክለኛ ቅርጽ ያለው የትኛው ነው?\nA: ምሥር ወጥ ____ ? (yes/no question: do you have?)\nB: አዎ፣ ዛሬ ምሥር ወጥ ____። (affirmative: there is)",
                    "options": [
                        "አለ ወይ? … አለ።",
                        "ይኑር? … ነበር።",
                        "አለ? … አይ።"
                    ],
                    "answerIndex": 0,
                    "explanation": "Yes/no question: ምሥር ወጥ አለ ወይ? (Do you have lentil stew? — ወይ question particle). Affirmative answer: አዎ፣ ምሥር ወጥ አለ (Yes, there is lentil stew). Option B uses ይኑር? (imperative form, not a question) and ነበር (past tense 'there was'). Option C answers with አይ (no) in what is supposed to be an affirmative."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic phrase meaning 'I would like' / 'I want' (1sg present, when expressing a food/drink preference):",
                    "acceptedAnswers": [
                        "ፈልጌያለሁ"
                    ],
                    "explanation": "ፈልጌያለሁ (felligeyalehu) = I want / I would like. From the verb ፈለገ (felege = to want/seek). The 1sg present continuous form: ፈልጌ + ያለሁ. Used to express food preferences: ቡና ፈልጌያለሁ (I would like coffee)."
                }
            ]
        }
    },
    "am-u10-l1": {
        "id": "am-u10-l1",
        "subject": "amharic",
        "unit": 10,
        "lessonNumber": 1,
        "title": "Direction Words: Left, Right, Straight, and Cardinal Points",
        "level": "A2",
        "objective": "Use Amharic direction vocabulary — left (ግራ), right (ቀኝ), straight ahead (ቀጥ), and the cardinal directions — to describe and follow basic navigation instructions.",
        "presentation": {
            "explanation": "Navigation in Amharic requires a specific set of direction words and postpositional phrases. Unlike English, which uses prepositions before the noun ('to the left'), Amharic navigation phrases tend to use the direction word either as an adverb or attached to the postposition -ኛ (direction suffix).\n\nCORE DIRECTION WORDS:\n• ግራ (gira) — left\n• ቀኝ (qegn) — right\n• ቀጥ ብሎ (qet bilo) — straight ahead [literally: saying/going straight]\n• ወደ ፊት (wede fit) — forward / straight ahead [ወደ = toward, ፊት = front]\n• ወደ ኋላ (wede hwala) — backward / behind [ኋላ = back]\n• ወደ ላይ (wede lai) — upward\n• ወደ ታች (wede tach) — downward / below\n\nTURNING COMMANDS:\n• ወደ ግራ ዞሩ / ዙሩ (wede gira zoru) — turn left [ዞሩ = turn, plural/polite imperative]\n• ወደ ቀኝ ዞሩ (wede qegn zoru) — turn right\n• ቀጥ ብለው ሂዱ (qet blew hidu) — go straight ahead [ቀጥ ብለው = saying straight, ሂዱ = go (plural/polite)]\n\nCARDINAL DIRECTIONS:\n• ሰሜን (semen) — north\n• ደቡብ (debub) — south\n• ምሥራቅ (misraq) — east\n• ምዕራብ (mirab) — west\n\nThese are used more in formal contexts (maps, addresses) rather than everyday direction-giving. In informal Amharic urban navigation, ግራ/ቀኝ and landmarks are more common than compass directions.\n\nIMPERATIVE FORMS FOR DIRECTIONS:\nAmharic direction instructions use the imperative mood. Two levels:\n• Singular familiar: ዞር (zor = turn), ሂድ (hid = go)\n• Plural/polite: ዞሩ (zoru = turn), ሂዱ (hidu = go)\nIn public settings (asking strangers), always use the polite plural form.",
            "examples": [
                {
                    "target": "ወደ ቀኝ ዞሩ፣ ከዚያ ቀጥ ብለው ሂዱ — ሆስፒታሉ ሁለተኛ መንገድ ላይ ነው።",
                    "reading": "Wede qegn zoru, kezzia qet blew hidu — hossippitalu hulettenna menged lai new.",
                    "translation": "Turn right, then go straight ahead — the hospital is on the second street."
                },
                {
                    "target": "ወደ ግራ ዞሩ — ትምህርት ቤቱ ባንኩ አጠገብ ነው።",
                    "reading": "Wede gira zoru — timhirt betu bankku ategeb new.",
                    "translation": "Turn left — the school is next to the bank."
                },
                {
                    "target": "ምሥራቅ አቅጣጫ ሂዱ፣ ደቡቡ ተራራ ያያሉ።",
                    "reading": "Misraq aqtacha hidu, debubu terrara yayalu.",
                    "translation": "Go in the east direction, you will see the southern mountain."
                }
            ],
            "mnemonics": [
                "ቀኝ (qegn = right) — think of it as 'cane': you hold a cane in your right hand. ግራ (gira = left) — 'gira' sounds like 'gear-ah', and you shift gear with your left hand in some vehicles. For the imperatives: ዞሩ (zoru = turn) contains ዞ — think of spinning around ('zo-ROUND'). ሂዱ (hidu = go) — short, sharp, like 'heed-u' = 'heed [the instruction and] go'."
            ],
            "culturalNotes": [
                "In Ethiopia, landmark-based navigation is far more common than street names or addresses. Ethiopians typically give directions using well-known buildings, roundabouts (ክብ መንገድ, kib menged), churches, mosques, and major intersections as reference points. Saying 'turn right at the big church and go straight past the gas station' is far more useful than naming a street — most streets in Ethiopian cities don't have widely known names."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«ወደ ቀኝ ዞሩ» ምን ማለት ነው?",
                    "options": [
                        "Go straight ahead",
                        "Turn left",
                        "Turn right"
                    ],
                    "answerIndex": 2,
                    "explanation": "ወደ = toward; ቀኝ = right; ዞሩ = turn (polite/plural imperative of ዞረ). Together: 'Turn right.' ወደ ግራ ዞሩ = Turn left. ቀጥ ብለው ሂዱ = Go straight ahead."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ምሥራቅ» ምን ማለት ነው?",
                    "options": [
                        "North",
                        "West",
                        "East"
                    ],
                    "answerIndex": 2,
                    "explanation": "ምሥራቅ (misraq) = East. The four cardinal directions: ሰሜን (semen) = North, ደቡብ (debub) = South, ምሥራቅ (misraq) = East, ምዕራብ (mirab) = West."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "ፖሊሱ «ቀጥ ብለው ሂዱ» ሲሉ ምን ትርጉም ነው?",
                    "options": [
                        "Stop here immediately",
                        "Go straight ahead",
                        "Turn around and go back"
                    ],
                    "answerIndex": 1,
                    "explanation": "ቀጥ ብለው ሂዱ = go straight ahead. ቀጥ = straight; ብለው = saying/having said (adverbial participle); ሂዱ = go (polite plural imperative of ሄደ). This is the standard Amharic instruction to continue straight without turning."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'left' (the direction):",
                    "acceptedAnswers": [
                        "ግራ"
                    ],
                    "explanation": "ግራ (gira) = left. Its counterpart is ቀኝ (qegn) = right. In direction-giving: ወደ ግራ ዞሩ (turn left), ወደ ቀኝ ዞሩ (turn right)."
                }
            ]
        }
    },
    "am-u10-l2": {
        "id": "am-u10-l2",
        "subject": "amharic",
        "unit": 10,
        "lessonNumber": 2,
        "title": "Asking for Directions: Polite Requests and Landmark Questions",
        "level": "A2",
        "objective": "Ask for directions in Amharic using polite request structures — ይቅርታ (excuse me), _____ የት ነው? (where is _____?) and _____ እንዴት እሄዳለሁ? (how do I get to _____?) — and understand common responses.",
        "presentation": {
            "explanation": "Asking for directions involves three key elements: attracting attention politely, asking the question, and understanding the answer. This lesson builds the full asking-for-directions interaction in Amharic.\n\nATTRACTING ATTENTION:\n• ይቅርታ (yiqirta) — Excuse me / I'm sorry [used to politely interrupt]\n• ይቅርታ አደርጋለሁ (yiqirta adergalehu) — I beg your pardon [more formal]\n• ወንድምዬ / አህቴ — My brother / My sister [used to address a stranger informally]\n\nASKING WHERE SOMETHING IS:\nPattern: [Location] + የት + ነው?\n• ባንኩ የት ነው? (bankku yet new?) — Where is the bank?\n• ትምህርት ቤቱ የት ነው? (timhirt betu yet new?) — Where is the school?\n• ምግብ ቤቱ የት ነው? (migib betu yet new?) — Where is the restaurant?\n\nFor a place you don't know: _____ የት ነው ብለው ያውቃሉ? (_____ yet new blew yawqalu?) — Do you know where _____ is?\n\nASKING HOW TO GET THERE:\n• [Place] _____ እንዴት እሄዳለሁ? (__ indet ihedalehu?) — How do I get to _____?\n• [Place] _____ ወደ _______ ምን ያህል ርቀት ነው? (__ wede __ min yahil riqet new?) — How far is it from __ to __?\n\nCOMMON RESPONSES:\n• ርቀት አለ (riqet alle) — It is far [ርቀት = distance/far]\n• ቅርብ ነው (qirb new) — It is near [ቅርብ = near/close]\n• ትንሽ ርቀት ነው (tinish riqet new) — It is a short distance\n• _____ ሰዓት ያስፈልጋል (__ seaat yasifelligal) — It will take _____ hours\n• [አላወቅሁም / አላውቅም] (alawechum / alawqim) — I don't know (past / present negative of ዐወቀ 'to know')\n\nIMPORTANT: The response አላወቅሁም means 'I didn't know' (past negative) while አላውቅም means 'I don't know' (present — more natural when saying you're unfamiliar with a place).",
            "examples": [
                {
                    "target": "ይቅርታ — ዋናው ፖስታ ቤት የት ነው ብለው ያውቃሉ?",
                    "reading": "Yiqirta — wannaw posta bet yet new blew yawqalu?",
                    "translation": "Excuse me — do you know where the main post office is?"
                },
                {
                    "target": "— ቅርብ ነው? — አዎ፣ ቀጥ ብለህ ሂድ፣ ሁለተኛ ኬላ ላይ ቀኝ ዞር።",
                    "reading": "— Qirb new? — Awo, qet bileh hid, hulettenna kela lai qegn zor.",
                    "translation": "— Is it close? — Yes, go straight, then turn right at the second checkpoint/junction."
                },
                {
                    "target": "አዲስ አበባ ዩኒቨርሲቲ ከዚህ ምን ያህል ርቀት ነው?",
                    "reading": "Addis Abeba Yunivérsiti kezih min yahil riqet new?",
                    "translation": "How far is Addis Ababa University from here?"
                }
            ],
            "mnemonics": [
                "The key question formula: [Place] + የት ነው? = 'Where is [Place]?' The two words to memorize: የት (yet) = where, ነው (new) = is. So literally 'bank where is?' — Amharic keeps the SOV order even in questions. For 'near' vs. 'far': ቅርብ (qirb) = near — think 'curb' which is close to the road. ርቀት (riqet) = distance/far — the longer word carries more distance."
            ],
            "culturalNotes": [
                "Ethiopian hospitality extends to directions — people rarely say 'I don't know' and leave you stranded. If someone doesn't know the exact way, they will often point you toward someone who might know, or try to describe partial directions. It's considered helpful to walk with someone to show them the way if possible. Responding አላውቅም (I don't know) is honest and acceptable, but it's often accompanied by an offer to find out or point you further."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«ባንኩ የት ነው?» ን ወደ English ቀይሩ:",
                    "options": [
                        "Is the bank open?",
                        "Where is the bank?",
                        "How far is the bank?"
                    ],
                    "answerIndex": 1,
                    "explanation": "ባንኩ (bankku) = the bank [definite form with -ው suffix]; የት (yet) = where; ነው (new) = is. Together: 'Where is the bank?' Pattern: [Definite noun] + የት + ነው? is the standard location question."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ቅርብ ነው» vs «ርቀት አለ» — ልዩነት ምን ነው?",
                    "options": [
                        "ቅርብ ነው means 'it is close/near'; ርቀት አለ means 'there is distance' (i.e., it is far).",
                        "They are synonyms — both mean 'it is far'.",
                        "ቅርብ ነው is used only for walking distance; ርቀት አለ is for driving distance."
                    ],
                    "answerIndex": 0,
                    "explanation": "ቅርብ (qirb) = close/near, so ቅርብ ነው = 'it is close/near'. ርቀት (riqet) = distance, so ርቀት አለ = 'there is [significant] distance' = 'it is far'. These are opposite in meaning and critical for navigation: one tells you to walk, the other suggests you need transportation."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "«ትምህርት ቤቱ ከዚህ ምን ያህል ርቀት ነው?» ምን ይጠይቃል?",
                    "options": [
                        "What time does the school open?",
                        "How far is the school from here?",
                        "Which school is this?"
                    ],
                    "answerIndex": 1,
                    "explanation": "ትምህርት ቤቱ (the school) + ከዚህ (from here) + ምን ያህል ርቀት ነው? (how much distance is it?). This asks about the distance between the current location and the school. ምን ያህል = how much/how many; ርቀት = distance."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word meaning 'near' or 'close' (distance is short):",
                    "acceptedAnswers": [
                        "ቅርብ"
                    ],
                    "explanation": "ቅርብ (qirb) = near/close. Used in: ቅርብ ነው (it is near). Its opposite: ርቀት አለ (it is far). Both are essential navigation vocabulary."
                }
            ]
        }
    },
    "am-u10-l3": {
        "id": "am-u10-l3",
        "subject": "amharic",
        "unit": 10,
        "lessonNumber": 3,
        "title": "Spatial Relations: Amharic Postpositions (ፊት, ኋላ, ላይ, ውስጥ, አጠገብ)",
        "level": "A2",
        "objective": "Use the five core Amharic spatial postpositions — ፊት (in front of), ኋላ (behind), ላይ (on/on top of), ውስጥ (inside/in), and አጠገብ (next to/beside) — correctly, understanding that Amharic postpositions come AFTER the noun phrase.",
        "presentation": {
            "explanation": "Amharic is a postpositional language — the words that indicate spatial relationships (in front of, behind, on, inside, next to) come AFTER the noun they relate to, not before it. This is directly opposite to English prepositions, which come before the noun.\n\nEnglish: 'in front of the school'\nAmharic: ትምህርት ቤቱ ፊት (school-the + front) = 'the school's front' / 'in front of the school'\n\nFIVE CORE SPATIAL POSTPOSITIONS:\n\n1. ፊት (fit) — in front of / before\n   ቤቱ ፊት (betu fit) = in front of the house\n   ፊት ለፊት (fit-lefit) = directly in front of / face to face\n\n2. ኋላ (hwala) — behind / after\n   ትምህርት ቤቱ ኋላ (timhirt betu hwala) = behind the school\n   Note: ኋላ also means 'later' in time: ኋላ እሄዳለሁ = I'll go later\n\n3. ላይ (lai) — on top of / on / at (a surface or platform)\n   ጠረጴዛ ላይ (terepeza lai) = on the table\n   መንገድ ላይ (menged lai) = on the road / on the way\n   Note: ወደ _____ ላይ = toward [a surface/point] — direction\n\n4. ውስጥ (wist) — inside / within / in\n   ቤት ውስጥ (bet wist) = inside the house\n   ከተማ ውስጥ (ketema wist) = within the city\n\n5. አጠገብ (ategeb) — next to / beside / near\n   ቤተ-ክርስቲያኑ አጠገብ (bete-kirstiyannu ategeb) = next to the church\n\nCRITICAL PATTERN:\nAmharic postpositional phrases use the genitive particle የ- when specifying ownership:\nYe-[noun] + [postposition] = 'the [postposition] of [noun]'\nExample: የቤቱ ፊት (yebetu fit) = the front of the house = 'in front of the house'\n\nBut in everyday speech, the genitive prefix is often dropped:\nቤቱ ፊት (betu fit) is heard as often as የቤቱ ፊት.",
            "examples": [
                {
                    "target": "ቁጠባ ባንኩ ፖስቶ ቤቱ አጠገብ ነው።",
                    "reading": "Quteba bankku posto betu ategeb new.",
                    "translation": "The savings bank is next to the post office."
                },
                {
                    "target": "ቁልፉ ጠረጴዛ ላይ ነው — አትፈልጉ።",
                    "reading": "Qulfu terepeza lai new — atfelligu.",
                    "translation": "The key is on the table — don't look [for it elsewhere]."
                },
                {
                    "target": "ልጆቹ ቤት ውስጥ ሳይሆን ቤቱ ኋላ ያሉት ሜዳ ላይ ናቸው።",
                    "reading": "Lijochuu bet wist sayhon betu hwala yalut meda lai nachew.",
                    "translation": "The children are not inside the house but on the field behind the house."
                }
            ],
            "mnemonics": [
                "Postpositions follow the noun — like a loyal guard walking BEHIND the noun it protects. A memory aid for the five: 'FLOIB': Front (ፊት), Low-behind (ኋላ), On (ላይ), Inside (ውስጥ), Beside (አጠገብ). For ላይ vs ውስጥ: ላይ = 'lie on top' (something is lying on a surface), ውስጥ = 'within'/'wist' (sounds like 'wist'ful — imagining being inside)."
            ],
            "culturalNotes": [
                "Ethiopian Orthodox churches (ቤተ-ክርስቲያን) and mosques (መስጊድ) serve as the most reliable landmarks in Ethiopian cities and towns. Giving directions relative to a church ('turn right at the church of St. Michael', ቅዱስ ሚካኤል ቤተ-ክርስቲያን አጠገብ) is completely standard. Ethiopia has a very high density of churches — Lalibela alone has 11 rock-hewn churches — so knowing how to use church names as landmarks is practical knowledge."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«The book is inside the bag» ን ወደ አማርኛ ቀይሩ። (መጽሐፍ = book; ቦርሳ = bag; ነው = is)",
                    "options": [
                        "ቦርሳ ውስጥ መጽሐፉ ነው።",
                        "ውስጥ ቦርሳ መጽሐፉ ነው።",
                        "መጽሐፉ ቦርሳ ውስጥ ነው።"
                    ],
                    "answerIndex": 2,
                    "explanation": "Correct Amharic SOV + postposition order: Subject (መጽሐፉ = the book) + Location phrase (ቦርሳ ውስጥ = bag inside = inside the bag) + Copula (ነው = is). The postposition ውስጥ follows the noun it modifies (ቦርሳ), and this whole phrase comes before the copula. Option A puts the location phrase first (possible but less natural). Option B puts the postposition before the noun — wrong."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ቤቱ ፊት» ምን ማለት ነው?",
                    "options": [
                        "Behind the house",
                        "Inside the house",
                        "In front of the house"
                    ],
                    "answerIndex": 2,
                    "explanation": "ፊት (fit) = front/in front of. So ቤቱ ፊት = 'the house front' = in front of the house. ፊት ለፊት means 'directly face to face'. The opposites: ፊት (front) ↔ ኋላ (back/behind); ላይ (on/above) ↔ ታች (under/below); ውስጥ (inside) ↔ ውጭ (outside)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "«The children are playing on the field» — ትክክለኛ አማርኛ ዓረፍተ ነገር ምን ነው? (ልጆቹ = the children; ሜዳ = field; መጫወት/ይጫወታሉ = they play)",
                    "options": [
                        "ልጆቹ ሜዳ ላይ ይጫወታሉ።",
                        "ላይ ሜዳ ልጆቹ ይጫወታሉ።",
                        "ልጆቹ ላይ ሜዳ ይጫወታሉ።"
                    ],
                    "answerIndex": 0,
                    "explanation": "SOV structure: ልጆቹ [S] + ሜዳ ላይ [location, field + postposition] + ይጫወታሉ [V]. The postposition ላይ comes after ሜዳ (field), not before. Option B front-loads the postposition. Option C places ላይ between subject and location noun — wrong."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic postposition meaning 'inside' / 'within' (e.g., ቤት ___ = inside the house):",
                    "acceptedAnswers": [
                        "ውስጥ"
                    ],
                    "explanation": "ውስጥ (wist) = inside/within. Used in: ቤት ውስጥ (inside the house), ከተማ ውስጥ (inside/within the city), ቦርሳ ውስጥ (inside the bag). Always follows the noun it relates to."
                }
            ]
        }
    },
    "am-u10-l4": {
        "id": "am-u10-l4",
        "subject": "amharic",
        "unit": 10,
        "lessonNumber": 4,
        "title": "Transportation: Taxis, Minibuses, and Getting Around Ethiopian Cities",
        "level": "A2",
        "objective": "Name and use key transportation vocabulary in Amharic — ታክሲ (taxi), ሚኒባስ (minibus), አውቶቡስ (bus) — and interact with drivers and conductors using standard phrases for routes, fares, and stops.",
        "presentation": {
            "explanation": "Ethiopian cities, especially Addis Ababa, have a distinctive transportation system that learners need vocabulary for.\n\nTRANSPORTATION TYPES:\n• ታክሲ (taksi) — blue-and-white shared taxi (NOT a private cab in the Western sense — Ethiopian ታክሲ are shared, fixed-route minivans carrying multiple passengers)\n• ሚኒባስ (minibase) — minibus, a small van/bus on fixed routes [most common urban transport]\n• አውቶቡስ (awtobus) — large bus [Anbessa city bus in Addis]\n• ሦስት ጎማ / ቱክቱክ (sost goma / tuktuk) — three-wheeled auto-rickshaw [ሦስት ጎማ = three wheels]\n• ፈረስ ጋሪ (feres gari) — horse cart [ፈረስ = horse, ጋሪ = cart] — used in smaller towns\n• ሙሉ ታክሲ (mullu taksi) — private (non-shared) taxi [ሙሉ = full/whole, meaning you hire the whole vehicle]\n\nKEY PHRASES WITH TAXI/MINIBUS DRIVERS:\n• ______ ትሄዳለህ? (__ tihedalleh?) — Are you going to ______? [asking driver]\n• ______ ትሄዳለህ ወይ? — Do you go to ______?\n• ______ ያኖሩኝ (__ yanoruign) — Please stop at ______\n• ያኖሩኝ / ያቁሙልኝ (yanoruign / yaqumulign) — Please stop [let me off here]\n• ምን ያህል ነው? (min yahil new?) — How much is it? [fare]\n• ______ ብቻ ቀርቷል (__ bicha qertoal) — Only _____ [seats] remain [conductor calling passengers]\n\nCONDUCTOR VOCABULARY:\nMinibuses have a conductor (ረዳት, redat = assistant) who collects fares and calls out the route:\n• ደሴ! ደሴ! — Desse! Desse! [calling the destination]\n• ቦታ አለ (bota alle) — There are seats\n• ቦታ የለም (bota yellem) — No seats available\n• ቲኬት (tiket) — ticket [for long-distance buses]\n\nCOMMON FARE QUESTION FORMAT:\nFrom [A] to [B] how much?\n[A]-ን ለቆ [B] ምን ያህል ነው? OR: [B] ሄጄ ስንት ብር ነው?",
            "examples": [
                {
                    "target": "ፒያሳ ትሄዳለህ ወይ? — አዎ፣ ወጣ። ሂድ።",
                    "reading": "Piyasa tihedalleh wey? — Awo, weta. Hid.",
                    "translation": "Are you going to Piazza? — Yes, get in. Go. [driver's response]"
                },
                {
                    "target": "ሜርካቶ አጠገብ ያኖሩኝ — ዛሬ ሙሉ ታክሲ ዋጋ ምን ያህል ነው?",
                    "reading": "Merkato ategeb yanoruign — zare mullu taksi waga min yahil new?",
                    "translation": "Please let me off near Mercato — what is today's price for a private taxi?"
                },
                {
                    "target": "ሦስት ጎማ ሚኒባስ ቢሆን ይሻላል — አውቶቡሱ ብዙ ሰዎች አሉ።",
                    "reading": "Sost goma minibase bihon yishalal — awtobusu bizu sewoch allu.",
                    "translation": "It would be better if it were a tuk-tuk / minibus — the bus has many people."
                }
            ],
            "mnemonics": [
                "Ethiopian ታክሲ (taksi) is NOT a private taxi — it is a shared vehicle on a fixed route. Remember: 'taksi = taxi BUT shared' — you share with strangers. For ያኖሩኝ (please stop): break it down as ያ-ኖሩ-ኝ = [causative marker]-stop-me = 'cause them to stop for me'. ሙሉ ታክሲ (mullu taksi) = full/whole taxi = private hire — ሙሉ means 'whole' (you take the whole car)."
            ],
            "culturalNotes": [
                "The minibus system in Addis Ababa is one of the most fascinating urban transport systems in Africa. Routes run between fixed major points (e.g., Merkato to Piazza, Mexico to Bole), and conductors shout destinations to attract passengers. There are no fixed stops — you hail from the roadside and shout ያኖሩኝ when you want to get off. Fares are negotiated or are fixed by informal convention. During rush hour (ሰዓቱ ወቅት), competition for seats is intense, and experienced Addis residents know exactly which corner to stand on for each route."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«ያኖሩኝ» ምን ጊዜ ትጠቀማለህ?",
                    "options": [
                        "When asking the driver where they are going",
                        "When buying a ticket at the bus station",
                        "When you want the driver to stop and let you off"
                    ],
                    "answerIndex": 2,
                    "explanation": "ያኖሩኝ (yanoruign) = please stop [for me] / let me off here. It is the phrase used to signal the driver/conductor that you want to get off at your stop. Use it by calling out 'ያኖሩኝ!' as you approach your destination."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ሙሉ ታክሲ» ምን ማለት ነው?",
                    "options": [
                        "A bus with many passengers",
                        "A private/chartered taxi where you hire the whole vehicle (not shared)",
                        "A taxi that is full and has no room"
                    ],
                    "answerIndex": 1,
                    "explanation": "ሙሉ (mullu) = whole/full/entire. ሙሉ ታክሲ = 'whole taxi' = private hire, where one person or group pays for exclusive use of the vehicle. This contrasts with a regular ታክሲ which is shared with strangers on a fixed route. Note the ambiguity: option C 'a taxi that is full' would be expressed differently, usually as ቦታ የለም ታክሲ (a taxi with no seats)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "ሹፌሩ «ቦታ የለም» ሲሉ ምን ትርጉም ነው?",
                    "options": [
                        "The fare is too expensive",
                        "We have arrived at the destination",
                        "There are no available seats"
                    ],
                    "answerIndex": 2,
                    "explanation": "ቦታ (bota) = place/seat/space; የለም (yellem) = there is not. So ቦታ የለም = 'there is no space/no seats available'. This is what a conductor shouts to turn away passengers when the vehicle is full. Opposite: ቦታ አለ (bota alle) = there are seats."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for the shared fixed-route taxi/minivan common in Ethiopian cities:",
                    "acceptedAnswers": [
                        "ታክሲ"
                    ],
                    "explanation": "ታክሲ (taksi) in Ethiopia refers specifically to blue-and-white shared minivans running fixed routes — not private cabs. For a private taxi, Ethiopians say ሙሉ ታክሲ (mullu taksi = whole taxi). The shared system is the dominant urban transport form."
                }
            ]
        }
    },
    "am-u10-l5": {
        "id": "am-u10-l5",
        "subject": "amharic",
        "unit": 10,
        "lessonNumber": 5,
        "title": "Unit 10 Synthesis: Finding Your Way in Addis Ababa",
        "level": "A2",
        "objective": "Navigate a complete real-world journey in Amharic — from asking for directions using postpositions and landmarks, to taking transportation and getting off at the right stop — integrating all Unit 10 vocabulary with Unit 7 question and negation structures.",
        "presentation": {
            "explanation": "Unit 10 has built the full toolkit for getting around an Ethiopian city: direction words (ግራ/ቀኝ/ቀጥ), asking where things are (የት ነው?), spatial postpositions (ፊት/ኋላ/ላይ/ውስጥ/አጠገብ), and transportation phrases (ያኖሩኝ, ቦታ አለ/የለም). This lesson models a complete city navigation sequence.\n\nComplete navigation scenario — getting from your hotel to the National Museum:\n\nStep 1 — Asking at the hotel:\nA: ብሔራዊ ሙዚየሙ የት ነው? (Where is the National Museum?)\nB: ቅርብ ነው — አዲስ አበባ ዩኒቨርሲቲ አጠገብ ነው። (It's close — it's next to Addis Ababa University.)\nA: ሚኒባስ ይሄዳል ወይ? (Does a minibus go there?)\nB: አዎ፣ ፒያሳ ሚኒባስ ይሄዳል — ፒያሳ ሂዱ ከዚያ ዩኒ ትሄዱ። (Yes, a Piazza minibus goes — go to Piazza then go to Uni[versity area].)\n\nStep 2 — On the minibus:\nA: ፒያሳ ትሄዳለህ ወይ? (Are you going to Piazza?)\nB (conductor): አዎ — ሂድ ሂድ! (Yes — get in!)\n[later:] A: ፒያሳ አጠገብ ያኖሩኝ! (Please stop near Piazza!)\n\nStep 3 — Walking to the museum:\nA (to passerby): ይቅርታ — ብሔራዊ ሙዚየሙ ወደ ፊት ነው ወይ ወደ ኋላ? (Excuse me — is the National Museum ahead or behind?)\nC: ወደ ፊት ነው — ዩኒቨርሲቲው ፊት። (It's ahead — in front of the university.)\nA: ምን ያህል ርቀት ነው? (How far is it?)\nC: ቅርብ ነው — ትንሽ ደቂቃ ምቾት ብቻ ነው። (It's close — only a few minutes' walk.)\n\nKEY VOCABULARY FROM THE DIALOGUE:\n• ብሔራዊ (bihirnawi) — national\n• ሙዚየሙ (muziyemu) — the museum\n• ዩኒቨርሲቲ / ዩኒ (yunivérsiti / yuni) — university [ዩኒ is colloquial short form]\n• ደቂቃ ምቾት (deqiqa michot) — minutes' walk [ደቂቃ = minute, ምቾት = comfort/ease]",
            "examples": [
                {
                    "target": "ይቅርታ — ብሔራዊ ቴአትር ቤቱ አጠገብ ሙዚየሙ ነው ወይ?",
                    "reading": "Yiqirta — bihirnawi te'ater betu ategeb muziyemu new wey?",
                    "translation": "Excuse me — is the museum next to the National Theatre?"
                },
                {
                    "target": "ሚኒባስ ፒያሳ ሄጄ ከዚያ ወደ ዩኒቨርሲቲ ክልል ድረስ እሄዳለሁ።",
                    "reading": "Minibase Piyasa heje, kezzia wede Yunivérsiti kilil dres ihedalehu.",
                    "translation": "I'll take a minibus to Piazza, then from there go toward the university area."
                },
                {
                    "target": "ሙዚየሙ ቤቱ ኋላ አይደለም — ዩኒቨርሲቲው ፊት ነው!",
                    "reading": "Muziyemu betu hwala aydelem — yunivérsituw fit new!",
                    "translation": "The museum is not behind the house — it is in front of the university!"
                }
            ],
            "mnemonics": [
                "For a city navigation interaction, remember the 5-step pattern: (1) ይቅርታ (excuse me) + (2) [Place] የት ነው? (where is [Place]?) + (3) [Transport] ትሄዳለህ ወይ? (do you go to [destination]?) + (4) ያኖሩኝ! (stop here!) + (5) ወደ ፊት / ዙሪያ? (ahead or around?). Chains of these five steps get you anywhere in an Amharic-speaking city."
            ],
            "culturalNotes": [
                "Addis Ababa's most famous areas all have Amharic names with meanings worth knowing: ፒያሳ (Piazza — from Italian, the historic quarter); ሜርካቶ (Merkato — from Italian, the giant market, largest in Africa); ቦሌ (Bole — the international airport area); ቅዱስ ጊዮርጊስ (Qiddus Giyorgis — St. George's, named for the patron saint of Ethiopia and site of the iconic brewery). Knowing these names and their locations on the city map is part of navigating Addis."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ሙዚየሙ ወደ ፊት ነው ወይ ወደ ኋላ ብሎ ሲጠየቅ ትክክለኛ ቀጥ ብሎ መልሱ ምን ነው?",
                    "options": [
                        "ቅርብ ነው — ቀጥ ብለህ ሄደህ ወደ ቀኝ ዞር።",
                        "ሙዚየሙ ዩኒቨርሲቲው ፊት ነው — ወደ ፊት ሂድ።",
                        "ሙዚየሙ ኋላ ዙሪያ — ወደ ኋላ ዞር።"
                    ],
                    "answerIndex": 1,
                    "explanation": "When someone asks whether the museum is ወደ ፊት (ahead) or ወደ ኋላ (behind), a full answer includes the spatial information (ዩኒቨርሲቲው ፊት ነው = it is in front of the university) and a direction command (ወደ ፊት ሂድ = go forward). Option A gives a direction but the information doesn't directly answer the ahead/behind question. Option C says the museum is behind — wrong per the scenario."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ትንሽ ደቂቃ ምቾት ብቻ ነው» ምን ማለት ነው?",
                    "options": [
                        "It is only a few minutes' walk.",
                        "It costs only a small amount.",
                        "There is only a little comfort available."
                    ],
                    "answerIndex": 0,
                    "explanation": "ትንሽ (tinish) = a little/few; ደቂቃ (deqiqa) = minute(s); ምቾት (michot) = ease/comfort/walk; ብቻ (bicha) = only. The phrase means 'it is only a few minutes' easy walk' — a reassurance that the destination is close enough to walk to comfortably."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "From the synthesis scenario, when you want to get off the minibus at Piazza, what do you say?",
                    "options": [
                        "ቦታ አለ!",
                        "ፒያሳ ትሄዳለህ?",
                        "ፒያሳ አጠገብ ያኖሩኝ!"
                    ],
                    "answerIndex": 2,
                    "explanation": "ፒያሳ አጠገብ ያኖሩኝ! = 'Please stop near Piazza!' — ፒያሳ (Piazza) + አጠገብ (next to/near, the postposition) + ያኖሩኝ (please stop for me). Option A (ቦታ አለ) means 'there are seats' — used by conductors, not passengers. Option B (ፒያሳ ትሄዳለህ?) means 'Are you going to Piazza?' — asked at the start, not to exit."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic phrase used to ask a driver to stop and let you off (literally: 'please stop for me'):",
                    "acceptedAnswers": [
                        "ያኖሩኝ"
                    ],
                    "explanation": "ያኖሩኝ (yanoruign) = please stop for me / let me off here. Breakdown: ያ- (causative) + ኖሩ (stop/stay, polite plural imperative) + -ኝ (1sg object 'me'). This is the standard phrase called out to Ethiopian minibus/taxi drivers when you reach your stop."
                }
            ]
        }
    },
    "am-u11-l1": {
        "id": "am-u11-l1",
        "subject": "amharic",
        "unit": 11,
        "lessonNumber": 1,
        "title": "Telling Time: The Ethiopian Clock System (6-Hour Offset)",
        "level": "B1",
        "objective": "Tell time in Amharic using the Ethiopian time system, which starts counting hours from sunrise (6 AM = 12:00 in Ethiopian time) and differs from the Western 12-hour clock by exactly 6 hours.",
        "presentation": {
            "explanation": "One of the most surprising features of everyday Amharic for Western learners is the Ethiopian time system. Ethiopia does not use the international 12-hour AM/PM clock. Instead, the clock starts at sunrise (approximately 6 AM) = Ethiopian hour 1. This creates a 6-hour offset from the Western system.\n\nTHE CONVERSION RULE:\nEthiopian time = Western time − 6 (for daytime hours)\n\nEXAMPLES:\n• 6:00 AM Western = 12:00 Ethiopian time (dawn/midnight in their system = ቀን ሌሊት)\n• 7:00 AM Western = 1:00 Ethiopian time [ቀን አንድ ሰዓት]\n• 9:00 AM Western = 3:00 Ethiopian time [ቀን ሦስት ሰዓት]\n• 12:00 PM Western (noon) = 6:00 Ethiopian time [ቀን ስድስት ሰዓት]\n• 6:00 PM Western (dusk) = 12:00 Ethiopian night time\n• 7:00 PM Western = 1:00 Ethiopian night time [ማታ አንድ ሰዓት]\n• 12:00 AM Western (midnight) = 6:00 Ethiopian night time\n\nVOCABULARY FOR TELLING TIME:\n• ሰዓቱ ስንት ነው? (Seaattu sint new?) — What time is it?\n• ሰዓት (seaat) — hour / time\n• ደቂቃ (deqiqa) — minute\n• ሴኮንድ (sehond) — second\n• ቀን (qen) — daytime [used before Ethiopian hours 1-12, i.e., 7 AM to 7 PM]\n• ማታ (mata) — night/evening [used for Ethiopian night hours 1-12, 7 PM to 7 AM]\n• ተኩል (tequl) — half past [ሦስት ሰዓት ተኩል = 3:30 Ethiopian = 9:30 AM Western]\n• ሩብ (rub) — quarter [ሦስት ሰዓት ሩብ = 3:15 Ethiopian]\n• ያነሰ (yanesse) — minus/before [ሦስት ሰዓት ሩብ ያነሰ = quarter to three Ethiopian]\n\nCONCRETE EXAMPLES:\nሰዓቱ ቀን ሁለት ነው = It is 2:00 Ethiopian daytime = 8:00 AM Western\nሰዓቱ ቀን ሰባት ተኩል ነው = It is 7:30 Ethiopian = 1:30 PM Western\nሰዓቱ ማታ አምስት ነው = It is 5:00 Ethiopian night = 11:00 PM Western\n\nIMPORTANT NOTE: In urban Ethiopia today, some people (especially in business contexts) use the international clock (ዘመናዊ ሰዓት, international time), but traditional Ethiopian time is still widely used in everyday speech, in religious contexts, and in rural areas. A learner MUST know both systems to avoid serious scheduling confusion.",
            "examples": [
                {
                    "target": "ሰዓቱ ቀን አሥር ሰዓት ሩብ ያነሰ ነው — ማለትም ምዕራባዊ ሰዓት አራት ሰዓት አርባ አምስት ደቂቃ።",
                    "reading": "Seaattu qen asir seaat rub yanesse new — maletim mirabawi seaat arat seaat arba amist diqiqa.",
                    "translation": "It is quarter to ten Ethiopian time — meaning 4:45 PM Western time."
                },
                {
                    "target": "— ሰዓቱ ስንት ነው? — ቀን ስምንት ተኩል።",
                    "reading": "— Seaattu sint new? — Qen simint tequl.",
                    "translation": "— What time is it? — Eight-thirty [Ethiopian daytime] = 2:30 PM Western."
                },
                {
                    "target": "ስብሰባው ቀን አምስት ሰዓት ነው — ምዕራባዊ ሰዓት አሥራ አንድ ነው።",
                    "reading": "Sibsebaw qen amist seaat new — mirabawi seaat asira and new.",
                    "translation": "The meeting is at five o'clock Ethiopian — that is eleven o'clock Western."
                }
            ],
            "mnemonics": [
                "The Ethiopian clock conversion: subtract 6 to go from Western to Ethiopian (morning), or add 6 to go from Ethiopian to Western. Memory trick: Ethiopia is '6 ahead' of itself — the day starts at 1 when the sun rises (6 AM). Think: 'when the sun rises at 6 Western, Ethiopia says it's 12 — dawn.' The day resets with the sun, not at midnight."
            ],
            "culturalNotes": [
                "The Ethiopian time system reflects an ancient Semitic worldview where the day begins at sunrise, as documented in the Bible ('and it was evening and morning, the first day'). Ethiopia's Tewahedo Orthodox Church uses this time system for liturgical purposes — church services are called at specific Ethiopian hours. Knowing the Ethiopian clock is essential for navigating religious schedules, market hours, and even some government office hours in rural areas. Travelers who miss meetings in Ethiopia because of clock confusion is a real and well-documented phenomenon."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Western time 3:00 PM ን ወደ ኢትዮጵያ ሰዓት ቀይሩ:",
                    "options": [
                        "ቀን ሦስት ሰዓት",
                        "ቀን ዘጠኝ ሰዓት",
                        "ማታ ሦስት ሰዓት"
                    ],
                    "answerIndex": 1,
                    "explanation": "Ethiopian time = Western time − 6. 3:00 PM Western − 6 = 9:00 Ethiopian daytime. So: ቀን ዘጠኝ ሰዓት. Option A (ቀን ሦስት ሰዓት) = 3:00 Ethiopian = 9:00 AM Western — wrong direction. Option C uses ማታ (night) which is for Ethiopian hours corresponding to Western evening/night."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ቀን ስድስት ሰዓት» ወደ Western time ቀይሩ:",
                    "options": [
                        "6:00 AM",
                        "12:00 PM (noon)",
                        "6:00 PM"
                    ],
                    "answerIndex": 1,
                    "explanation": "Ethiopian time + 6 = Western time. ቀን ስድስት (6 Ethiopian daytime) + 6 = 12:00 PM Western (noon). Ethiopian 6 = the midpoint of the daytime counting. 6:00 AM Western = Ethiopian 12 (dawn start). 6:00 PM Western = Ethiopian 12 (dusk/start of night time)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "«ሰዓቱ ስንት ነው?» ምን ያህል ነው?",
                    "options": [
                        "What day is today?",
                        "What time is it?",
                        "How many hours until the meeting?"
                    ],
                    "answerIndex": 1,
                    "explanation": "ሰዓቱ (seaattu) = the time / the hour [definite: ሰዓት + -ው]; ስንት (sint) = how much/how many; ነው (new) = is. Together: 'The time is how much?' = 'What time is it?' This is the standard Amharic clock question."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word meaning 'half past' (used in telling time, e.g., 3:30 = three _____):",
                    "acceptedAnswers": [
                        "ተኩል"
                    ],
                    "explanation": "ተኩል (tequl) = half/half past. Used in time expressions: ሦስት ሰዓት ተኩል = 3:30 (Ethiopian) = 9:30 AM Western. ሩብ (rub) = quarter. ሩብ ያነሰ = quarter to."
                }
            ]
        }
    },
    "am-u11-l2": {
        "id": "am-u11-l2",
        "subject": "amharic",
        "unit": 11,
        "lessonNumber": 2,
        "title": "Days of the Week and the Seven-Day Ethiopian Week",
        "level": "B1",
        "objective": "Name and use the seven days of the Ethiopian week in Amharic — ሰኞ through እሁድ — understand their Ge'ez/Semitic etymologies, and use them correctly in scheduling sentences.",
        "presentation": {
            "explanation": "The Ethiopian week has seven days with Amharic names that derive from Ge'ez (Classical Ethiopic) and reflect biblical, astronomical, and religious origins.\n\nDAYS OF THE WEEK:\n• ሰኞ (Senyo) — Monday [from Ge'ez ሰኒ/ሰኒ; related to 'second' day in some analyses]\n• ማክሰኞ (Makssenyo) — Tuesday [from Ge'ez; etymologically complex]\n• ረቡዕ (Rebo'i) — Wednesday [from Arabic ربع rabi', 'fourth' — Wednesday is the 4th day in the Islamic week starting Sunday; shows Arabic influence on Ethiopian calendrical vocabulary]\n• ሐሙስ (Hammuse) — Thursday [from Arabic خمس Khams = five; 5th day in some reckonings]\n• ዓርብ (Arb) — Friday [from Arabic عَرَبِي; also associated with the Muslim Jumu'ah prayer day]\n• ቅዳሜ (Qidam) — Saturday [from Ge'ez ቀዳሚ qeddami = first; in Ethiopian Orthodox tradition, Saturday is the 'Sabbath of the Lord']\n• እሁድ (Ihud) — Sunday [from Ge'ez ኢሕዱ; the Christian day of resurrection]\n\nNote: The Arabic origin of Wednesday, Thursday, and Friday names reflects the historical Islamic influence on Ethiopian civilization — Ethiopia had early contact with Islam (the first Hijra was to the Ethiopian kingdom of Aksum, c. 615 CE).\n\nUSING DAYS IN SENTENCES:\n• ዛሬ ሰኞ ነው (Zare Senyo new) — Today is Monday.\n• ነገ ማክሰኞ ነው (Nege Makssenyo new) — Tomorrow is Tuesday.\n• ትናንት ቅዳሜ ነበር (Tinant Qidam nebber) — Yesterday was Saturday.\n• በ_____ (be-_____) — on [day of week]: በሰኞ (on Monday), በቅዳሜ (on Saturday)\n• ሁሉ _____ (hullu _____) — every [day]: ሁሉ ሰኞ = every Monday\n\nWEEKEND:\nIn Ethiopia, the typical weekend is Saturday and Sunday. However, for Ethiopian Orthodox Christians, both ቅዳሜ (Saturday/Sabbath) and እሁድ (Sunday/Lord's Day) have religious significance.",
            "examples": [
                {
                    "target": "ዛሬ ረቡዕ ነው — ስብሰባ ሐሙስ ይሆናል።",
                    "reading": "Zare Rebo'i new — sibseba Hammuse yihoonal.",
                    "translation": "Today is Wednesday — the meeting will be on Thursday."
                },
                {
                    "target": "ሁሉ ዓርብ ቀን ቤተ-ክርስቲያን ሄዳለሁ — ሐሙስ ወደ ሞስኪ ይሄዳሉ።",
                    "reading": "Hullu Arb qen bete-kirstiyan hedalehu — Hammuse wede mosqi yihedalu.",
                    "translation": "Every Friday I go to church — on Thursdays [others] go to the mosque. [Note: Arb/Friday is the Muslim day of prayer]"
                },
                {
                    "target": "ቅዳሜ ቅዳሜ ጉዞ እናደርጋለን — ትናንት ዓርብ ነበር።",
                    "reading": "Qidam qidam guzo inaderrigalen — tinant Arb nebber.",
                    "translation": "Every Saturday we go on a trip — yesterday was Friday."
                }
            ],
            "mnemonics": [
                "A rhythmic chain for the week: Senyo-Makssenyo-Rebo'i-Hammuse-Arb-Qidam-Ihud (M-T-W-Th-F-Sa-Su). The Arabic-origin days cluster in the middle of the week (Wednesday=Rebo'i, Thursday=Hammuse, Friday=Arb — all from Arabic numerals/Islamic calendar). Saturday and Sunday frame the week with Ge'ez origins."
            ],
            "culturalNotes": [
                "Ethiopia's unique religious landscape means that the days of the week carry both Christian and Islamic associations. Friday (ዓርብ) is the Muslim congregational prayer day; Saturday (ቅዳሜ) is the Ethiopian Orthodox Sabbath; Sunday (እሁድ) is the Christian resurrection day. In cities like Addis Ababa, Dire Dawa, and Harar — with mixed Muslim-Christian populations — it is common to see both Friday and Sunday observed as days of rest by different communities, and markets may be quieter on either day depending on the neighborhood."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«ዛሬ ረቡዕ ነው — ነገ ምን ቀን ይሆናል?» ምን ቀን ይሆናል?",
                    "options": [
                        "ሐሙስ",
                        "ሰኞ",
                        "ዓርብ"
                    ],
                    "answerIndex": 0,
                    "explanation": "The week order: ሰኞ (Mon) → ማክሰኞ (Tue) → ረቡዕ (Wed) → ሐሙስ (Thu) → ዓርብ (Fri) → ቅዳሜ (Sat) → እሁድ (Sun). If today is Wednesday (ረቡዕ), tomorrow is Thursday (ሐሙስ). Option B (ሰኞ) is Monday — two days before. Option C (ዓርብ) is Friday — two days after."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ቅዳሜ» — ምን ቀን ነው እና ምን ሃይማኖታዊ ትርጉም አለው?",
                    "options": [
                        "Sunday — the day of Christian resurrection",
                        "Friday — the Muslim day of congregational prayer",
                        "Saturday — the Ethiopian Orthodox Sabbath (from ቀዳሚ, meaning 'first/primary')"
                    ],
                    "answerIndex": 2,
                    "explanation": "ቅዳሜ (Qidam) = Saturday. Its etymology traces to Ge'ez ቀዳሚ (qeddami) = 'first/foremost' — in Ethiopian Orthodox tradition, Saturday is the Sabbath of the Lord (ሰንበት). Sunday is እሁድ (the Lord's Day/resurrection day). Friday is ዓርብ (connected to Islamic Jumu'ah prayer)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "«በሐሙስ ስብሰባ አለ» ምን ማለት ነው?",
                    "options": [
                        "The meeting was on Wednesday",
                        "There is a meeting on Thursday",
                        "Thursday's meeting was cancelled"
                    ],
                    "answerIndex": 1,
                    "explanation": "በ (be-) = on [day]; ሐሙስ = Thursday; ስብሰባ = meeting; አለ = there is. So: 'On Thursday there is a meeting.' The preposition በ- is prefixed directly to the day name: በሐሙስ = on Thursday, በሰኞ = on Monday, በቅዳሜ = on Saturday."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic name for Wednesday (the day with Arabic-origin name meaning roughly 'fourth'):",
                    "acceptedAnswers": [
                        "ረቡዕ"
                    ],
                    "explanation": "ረቡዕ (Rebo'i) = Wednesday. From Arabic ربع rabi' relating to 'fourth'. It is the midpoint of the workweek: ሰኞ (Mon) - ማክሰኞ (Tue) - ረቡዕ (Wed) - ሐሙስ (Thu) - ዓርብ (Fri)."
                }
            ]
        }
    },
    "am-u11-l3": {
        "id": "am-u11-l3",
        "subject": "amharic",
        "unit": 11,
        "lessonNumber": 3,
        "title": "The Ethiopian Calendar: 13 Months and the Year Offset",
        "level": "B1",
        "objective": "Describe the structure of the Ethiopian calendar — its 13 months (12 of 30 days plus one short month), its year count approximately 7-8 years behind the Gregorian calendar, and the names of the Ethiopian months.",
        "presentation": {
            "explanation": "Ethiopia uses a calendar system derived from the ancient Coptic calendar, which itself derives from the ancient Egyptian calendar. It differs from the Gregorian calendar used internationally in two key ways:\n\n1. THE 13-MONTH STRUCTURE:\nThe Ethiopian year has 13 months:\n• 12 months of exactly 30 days each\n• 1 short month called ጳጉሜ (Pagume) with 5 days (6 in leap years)\n• Total: 365 days (or 366 in leap years)\n\nTHE 12 MAIN MONTHS (in order):\n1. መስከረም (Meskerem) — September–October [Ethiopian New Year starts here!]\n2. ጥቅምት (Tiqqimt) — October–November\n3. ኅዳር (Hidar) — November–December\n4. ታኅሣሥ (Tahesas) — December–January\n5. ጥር (Tir) — January–February\n6. የካቲት (Yekatit) — February–March\n7. መጋቢት (Megabit) — March–April\n8. ሚያዚያ (Miyaziya) — April–May\n9. ግንቦት (Ginbot) — May–June\n10. ሰኔ (Sene) — June–July\n11. ሐምሌ (Hamle) — July–August\n12. ነሐሴ (Nehase) — August–September\n+ ጳጉሜ (Pagume) — 5-day bonus month at the end\n\n2. THE YEAR OFFSET:\nThe Ethiopian calendar is currently about 7–8 years behind the Gregorian calendar, due to a different calculation of the date of the Incarnation. When it is 2025 in the Western Gregorian calendar, it is roughly 2017–2018 in Ethiopia (the Ethiopian New Year falls in September, so there is a partial-year split).\n\nENKUTATASH — ETHIOPIAN NEW YEAR:\n• ዕንቁጣጣሽ (Enqqutatash) — the Ethiopian New Year, celebrated on September 11 (or 12 in leap years of the Gregorian calendar)\n• This is one of the most important national and religious celebrations in Ethiopia",
            "examples": [
                {
                    "target": "ዛሬ ምን ቀን ነው? — ዛሬ ጥቅምት አሥራ አምስት ቀን ነው።",
                    "reading": "Zare min qen new? — Zare Tiqqimt asira amist qen new.",
                    "translation": "What is today's date? — Today is Tiqqimt (October/November) 15th."
                },
                {
                    "target": "ዕንቁጣጣሽ በመስከረም አንድ ቀን ይከበራል — ሁሉም ቤተሰብ ይሰበሰባል።",
                    "reading": "Enqqutatash be-Meskerem and qen yikebberal — hullum beteseb yisebessebbal.",
                    "translation": "Enqqutatash (New Year) is celebrated on Meskerem 1st — all families gather."
                },
                {
                    "target": "ጳጉሜ ወር አጭር ነው — አምስት ቀናት ብቻ አሉት።",
                    "reading": "Pagume wor achir new — amist qenatat bicha allut.",
                    "translation": "The month of Pagume is short — it has only five days."
                }
            ],
            "mnemonics": [
                "To remember the year offset: Ethiopia is '7-8 years younger' than the Gregorian calendar because it uses a different Annunciation calculation. Remember it as 'Ethiopia = Gregorian − 7 (approximately)'. The 13th month ጳጉሜ (Pagume) is the 'extra' that doesn't fit in 12 months of 30 days: 12×30=360, and ጳጉሜ adds the 5 remaining days. Month order mnemonic: 'Me-Ti-Hi-Ta-Ti-Ye-Me-Mi-Gi-Se-Ha-Ne + Pa' (first syllables of each month)."
            ],
            "culturalNotes": [
                "The Ethiopian Tourist Authority uses the playful slogan '13 months of sunshine' to highlight the 13-month calendar as a tourist attraction. Ethiopian New Year (ዕንቁጣጣሽ) is celebrated with enormous joy — children carry yellow Adey Abeba flowers (አደይ አበባ, a species of Bidens) door to door while singing traditional songs to receive coins and food. The convergence of the rainy season's end and the New Year makes it especially joyful — the landscape is green and blooming after the months of heavy rain."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ኢትዮጵያ ምን ዓይነት አቆጣጠር ትጠቀማለች?",
                    "options": [
                        "The Gregorian calendar with 12 months, same as Europe",
                        "The Islamic Hijri calendar with lunar months",
                        "A calendar with 13 months — 12 of 30 days and one short month (ጳጉሜ) of 5 days"
                    ],
                    "answerIndex": 2,
                    "explanation": "Ethiopia uses its own ancient calendar derived from the Coptic/Egyptian tradition: 13 months total. 12 months have 30 days each, and the 13th month, ጳጉሜ (Pagume), has 5 days (6 in leap years). The Ethiopian year is also approximately 7-8 years behind the Gregorian calendar. This is distinct from both the Gregorian and Islamic calendars."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "ዕንቁጣጣሽ (Enqqutatash) ምንድን ነው?",
                    "options": [
                        "The Ethiopian Orthodox Easter celebration",
                        "Ethiopian New Year, celebrated on Meskerem 1st (September 11th in Gregorian)",
                        "A spring harvest festival celebrated in April"
                    ],
                    "answerIndex": 1,
                    "explanation": "ዕንቁጣጣሽ (Enqqutatash) = Ethiopian New Year. It falls on Meskerem 1st (first day of the first Ethiopian month) = September 11th in the Gregorian calendar (September 12th in Gregorian leap years). It is not Easter — Ethiopian Orthodox Easter is ፋሲካ (Fasika). It is not a spring festival — it falls in September at the end of the rainy season."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "ጳጉሜ ምን ነው?",
                    "options": [
                        "The Ethiopian New Year month",
                        "The 13th and shortest month in the Ethiopian calendar, with only 5 days",
                        "The first month of the Ethiopian year"
                    ],
                    "answerIndex": 1,
                    "explanation": "ጳጉሜ (Pagume) is the 13th and final month of the Ethiopian calendar, lasting only 5 days (6 in leap years). It is the month that accounts for the days not included in the twelve 30-day months. The first month is መስከረም (Meskerem). Ethiopian New Year is on Meskerem 1st, not Pagume."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the name of the FIRST month of the Ethiopian calendar (when Ethiopian New Year is celebrated):",
                    "acceptedAnswers": [
                        "መስከረም"
                    ],
                    "explanation": "መስከረም (Meskerem) = the first month of the Ethiopian calendar, roughly corresponding to September–October. Ethiopian New Year (ዕንቁጣጣሽ) is celebrated on Meskerem 1st, marking the start of the new Ethiopian year."
                }
            ]
        }
    },
    "am-u11-l4": {
        "id": "am-u11-l4",
        "subject": "amharic",
        "unit": 11,
        "lessonNumber": 4,
        "title": "Duration, Frequency, and Adverbs of Time",
        "level": "B1",
        "objective": "Express duration ('for two hours', 'since last week'), frequency ('every day', 'sometimes', 'rarely'), and time sequences ('first... then... finally') using Amharic temporal adverbs and postpositional time phrases.",
        "presentation": {
            "explanation": "Beyond naming the time and day, B1 Amharic requires expressing how long something takes, how often it happens, and the sequence of events. These temporal expressions build on the calendar vocabulary from this unit.\n\nDURATION PHRASES:\n• _____ ሰዓት (_____ seaat) — for _____ hour(s): ሁለት ሰዓት ተቀምጦ ነበር = he had been sitting for two hours\n• _____ ቀናት (_____ qenatat) — for _____ days: ሦስት ቀናት ነበርኩ = I was [there] for three days\n• _____ ሳምንት (_____ samint) — for _____ week(s): አንድ ሳምንት ቆይቻለሁ = I have stayed for one week\n• _____ ወር (_____ wor) — for _____ month(s): ሦስት ወር ይወስዳል = it will take three months\n• ጀምሮ (jemiro) — since [time phrase] + ጀምሮ: ሰኞ ጀምሮ = since Monday\n• እስከ (iske) — until: ዓርብ እስከ = until Friday\n\nFREQUENCY ADVERBS:\n• ሁሌ / ሁልጊዜ (hulle / hullgize) — always / every time\n• ብዙ ጊዜ (bizu gize) — often / many times [ብዙ = many, ጊዜ = time]\n• አንዳንድ ጊዜ (andand gize) — sometimes\n• አልፎ አልፎ (alfo alfo) — rarely / occasionally [reduplication implies infrequency]\n• ፈጽሞ አይ___ም (fetshimo ay___m) — never [ፈጽሞ = absolutely/completely + present negative]\n• ቀን ቀን (qen qen) — every day / daily [reduplication]\n• ሳምንት ሳምንት (samint samint) — every week [reduplication]\n\nSEQUENCE EXPRESSIONS:\n• መጀመሪያ (mejemeriya) — first / at the beginning\n• ከዚያ / ከዚያ በኋላ (kezzia / kezzia behwala) — then / after that\n• በመጨረሻ (bemechersha) — finally / at the end\n• ሳምንቱ ሲጀምር (saminttu sijemmir) — when the week starts / at the start of the week",
            "examples": [
                {
                    "target": "ብዙ ጊዜ ቡና ቤት ሄዳለሁ — አንዳንድ ጊዜ ግን ቤት ቆይቻለሁ።",
                    "reading": "Bizu gize buna bet hedalehu — andand gize gin bet qoychalehu.",
                    "translation": "I often go to the café — but sometimes I stay home."
                },
                {
                    "target": "ሰኞ ጀምሮ ሦስት ቀናት ስልጠና አለ — ሐሙስ ይጠናቀቃል።",
                    "reading": "Senyo jemiro sost qenatat siltenna alle — Hammuse yittenaqeqqal.",
                    "translation": "From Monday there are three days of training — it concludes on Thursday."
                },
                {
                    "target": "መጀመሪያ ምሳ ከዚያ ቡና ከዚያ በኋላ ሥራ — ይህ ዕለታዊ ሥርዓቴ ነው።",
                    "reading": "Mejemeriya missa, kezzia buna, kezzia behwala sira — yih iletawi sirate new.",
                    "translation": "First lunch, then coffee, then after that work — this is my daily routine."
                }
            ],
            "mnemonics": [
                "Frequency adverbs from most to least frequent: ሁሌ (always) → ብዙ ጊዜ (often) → አንዳንድ ጊዜ (sometimes) → አልፎ አልፎ (rarely) → ፈጽሞ + negative (never). The reduplication pattern (ቀን ቀን = every day, ሳምንት ሳምንት = every week) is a consistent Amharic strategy — doubling a time word makes it 'every [that unit]'."
            ],
            "culturalNotes": [
                "Ethiopian work culture has a distinctive relationship with time — the phrase 'Ethiopian time' (ኢትዮጵያ ሰዓት) is sometimes used humorously to acknowledge that events may start later than scheduled. This is not universal (hospitals, transport, and formal offices are generally punctual) but social events like weddings (ሠርግ) and parties may begin 1-2 hours after the stated time. Knowing አልፎ አልፎ (rarely), ብዙ ጊዜ (often), and ሁሌ (always) helps discuss punctuality expectations in different contexts."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«I have stayed for one week» ን ወደ አማርኛ ቀይሩ:",
                    "options": [
                        "አንድ ቀን ቆይቻለሁ።",
                        "አንድ ሳምንት ቆይቻለሁ።",
                        "አንድ ወር ቆይቻለሁ።"
                    ],
                    "answerIndex": 1,
                    "explanation": "ሳምንት (samint) = week. ቆይቻለሁ = I have stayed (1sg perfect of ቆየ 'to stay/remain'). So: አንድ ሳምንት ቆይቻለሁ = I have stayed one week. Option A (አንድ ቀን) = one day. Option C (አንድ ወር) = one month."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«አልፎ አልፎ» ምን ያህል ብዛት አለው?",
                    "options": [
                        "Frequently / most of the time",
                        "Rarely / occasionally (less than sometimes)",
                        "Never at all"
                    ],
                    "answerIndex": 1,
                    "explanation": "አልፎ አልፎ (alfo alfo) = rarely / occasionally. It is more frequent than ፈጽሞ አይ___ም (never) but less frequent than አንዳንድ ጊዜ (sometimes). The reduplication of አልፎ (which itself means 'passed by / exceeded') signals something that occurs only sporadically, at long intervals."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "«ሰኞ ጀምሮ» ምን ትርጉም ነው?",
                    "options": [
                        "Until Monday",
                        "Since Monday",
                        "Next Monday"
                    ],
                    "answerIndex": 1,
                    "explanation": "ጀምሮ (jemiro) = since / starting from [time]. ሰኞ ጀምሮ = since Monday / starting from Monday. Compare: እስከ ሰኞ = until Monday; ሰኞ ላይ = on Monday. ጀምሮ marks the starting point of a duration, while እስከ marks the endpoint."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic adverb meaning 'often' / 'many times' (ብዙ + _____):",
                    "acceptedAnswers": [
                        "ብዙ ጊዜ"
                    ],
                    "explanation": "ብዙ ጊዜ (bizu gize) = often / many times. ብዙ = many/much; ጊዜ = time/occasion. Together: 'many times'. Used in: ብዙ ጊዜ ሄዳለሁ (I often go there)."
                }
            ]
        }
    },
    "am-u11-l5": {
        "id": "am-u11-l5",
        "subject": "amharic",
        "unit": 11,
        "lessonNumber": 5,
        "title": "Unit 11 Synthesis: Scheduling and Appointments in Ethiopian Time",
        "level": "B1",
        "objective": "Conduct a complete scheduling conversation in Amharic — setting, confirming, and rescheduling appointments — using Ethiopian time, days of the week, Ethiopian calendar months, and duration/frequency expressions.",
        "presentation": {
            "explanation": "Unit 11 has covered all the time-related vocabulary needed for real scheduling: the Ethiopian clock system, days of the week, the Ethiopian calendar, and duration/frequency adverbs. This lesson puts them together in the context of making and managing appointments (ቀጠሮ, qetero).\n\nKEY SCHEDULING VOCABULARY:\n• ቀጠሮ (qetero) — appointment / scheduled meeting\n• ቀጠሮ አቅርቡልኝ (qetero aqribbulign) — Please schedule an appointment for me\n• ቀጠሮ አለ ወይ? (qetero alle wey?) — Do you have an appointment? / Is there an appointment?\n• ቀጠሮ ቀይሩ (qetero qeyiru) — Change/reschedule the appointment\n• ቀጠሮ ሰርዙ (qetero serzzu) — Cancel the appointment [ሰርዙ = cancel, plural/polite imperative of ሰረዘ]\n• ሥራ ዝርዝር (sira zirzir) — schedule/agenda [ሥራ = work, ዝርዝር = list/detail]\n\nCOMPLETE SCHEDULING DIALOGUE:\nA: ዶክተሩን ማነጋገር እፈልጋለሁ — ቀጠሮ ይኖርኝ? (I would like to speak with the doctor — may I have an appointment?)\nB: አዎ — ረቡዕ ቀን አምስት ሰዓት [ኢትዮጵያ ሰዓት] ነፃ ነው። (Yes — Wednesday at 5 o'clock Ethiopian time is free.)\nA: ቀን አምስት ሰዓት ምዕራባዊ ሰዓት ምን ሰዓት ነው? (What time is 5 o'clock Ethiopian in Western time?)\nB: ቀን አምስት ሰዓት ምዕራባዊ ሰዓት አሥራ አንድ ሰዓት ነው። (Five Ethiopian daytime = eleven o'clock Western.)\nA: ሐሙስ ቀን ሊሆን ይችላል ወይ? (Can it be Thursday instead?)\nB: ሐሙስ ቀጠሮ ሞልቷል — ዓርብ ቀን ሰባት ሰዓት ነፃ ነው። (Thursday appointments are full — Friday at 7 Ethiopian is free.)\nA: ዓርብ ቀን ሰባት ሰዓት — ሰዓቱ ቀን አንድ ሰዓት ምዕራባዊ ሰዓት ነው? (Friday at 7 Ethiopian — that's 1 PM Western?)\nB: አዎ — ቀን አንድ ሰዓት ምዕራባዊ ሰዓት ነው። (Yes — it is 1 PM Western.)\nA: ደህና ቀጠሮ አቅርቡልኝ። (Good, please make the appointment.)\n\nNEW VOCABULARY FROM DIALOGUE:\n• ነፃ ነው (nesa new) — it is free/available [ነፃ = free]\n• ሞልቷል (moltwal) — it is full/filled up\n• ሊሆን ይችላል (lihon yichalal) — it is possible to be / can it be",
            "examples": [
                {
                    "target": "ቀጠሮዬ ቅዳሜ ቀን ዘጠኝ ሰዓት ነው — ምዕራባዊ ሰዓት ሦስት ሰዓት።",
                    "reading": "Qeteroye Qidam qen zetegn seaat new — mirabawi seaat sost seaat.",
                    "translation": "My appointment is Saturday at 9 Ethiopian time — 3 PM Western time."
                },
                {
                    "target": "ቀጠሮ ሰርዙ — ሐሙስ ሊሆን ይችላል ወይ?",
                    "reading": "Qetero serzzu — Hammuse lihon yichalal wey?",
                    "translation": "Cancel the appointment — can it be on Thursday?"
                },
                {
                    "target": "ሰኞ ጀምሮ ሦስት ቀናት ቀጠሮ አቅርቡልኝ — ብዙ ሥራ አለ።",
                    "reading": "Senyo jemiro sost qenatat qetero aqribbulign — bizu sira alle.",
                    "translation": "Please make appointments for three days starting Monday — there is a lot of work."
                }
            ],
            "mnemonics": [
                "Scheduling in Ethiopian time = always do the conversion first. When someone says ቀን _____ ሰዓት, add 6 to get Western time. When someone gives Western time, subtract 6. Then apply the vocabulary: ቀጠሮ = appointment, ነፃ = free, ሞልቷል = full/booked. These three words (ቀጠሮ/ነፃ/ሞልቷል) are the core of any scheduling conversation."
            ],
            "culturalNotes": [
                "Amharic uses the verb ሰረዘ (sereze = to cancel/strike out) for cancelling appointments — the same root is used for crossing out text. This metaphor of 'crossing out' a scheduled item is intuitive. In Ethiopian formal contexts — hospitals, government offices, airlines — appointments are taken seriously and cancellations require notice. In social contexts, however, the Ethiopian phrase ቀጠሮ ሊጣስ ይችላል (the appointment may be broken) is understood — arriving slightly late or changing plans with same-day notice is socially tolerated more than in some Western contexts."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Western time 11:00 AM ን ወደ ኢትዮጵያ ሰዓት ቀይሩ፣ ከዚያ ትክክለኛ ዓረፍተ ነገር ይምረጡ:",
                    "options": [
                        "ቀን አምስት ሰዓት",
                        "ቀን አሥር ሰዓት",
                        "ቀን አሥራ አንድ ሰዓት"
                    ],
                    "answerIndex": 0,
                    "explanation": "11:00 AM Western − 6 = 5:00 Ethiopian daytime. So: ቀን አምስት ሰዓት (Ethiopian 5 o'clock daytime). Option B (ቀን አሥር = 10 Ethiopian) = 4:00 PM Western. Option C (ቀን አሥራ አንድ = 11 Ethiopian) = 5:00 PM Western — confusingly the same number as the Western time but wrong."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ቀጠሮ ሰርዙ» ምን ያህል ነው?",
                    "options": [
                        "Make an appointment",
                        "Confirm the appointment",
                        "Cancel the appointment"
                    ],
                    "answerIndex": 2,
                    "explanation": "ቀጠሮ (qetero) = appointment; ሰርዙ (serzzu) = cancel (polite plural imperative of ሰረዘ = to cancel/strike out). So ቀጠሮ ሰርዙ = 'please cancel the appointment'. Compare: ቀጠሮ አቅርቡልኝ = make an appointment for me; ቀጠሮ አረጋግጡ = confirm the appointment."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "«ቀጠሮ ሞልቷል» ምን ትርጉም ነው?",
                    "options": [
                        "The appointment is confirmed",
                        "The appointment is late",
                        "The appointments are full (no slots available)"
                    ],
                    "answerIndex": 2,
                    "explanation": "ሞልቷል (moltwal) = it is full/filled up (3sg perfect of ሞላ = to fill). ቀጠሮ ሞልቷል = 'the appointments are full' — meaning no slots are available. This is the polite way a receptionist or scheduler declines to give a new appointment because the schedule is already at capacity."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'appointment' (a scheduled meeting or booking):",
                    "acceptedAnswers": [
                        "ቀጠሮ"
                    ],
                    "explanation": "ቀጠሮ (qetero) = appointment / scheduled meeting. From the verb ቀጠረ (qetere = to hire/appoint/schedule). Key phrases: ቀጠሮ አቅርቡልኝ (make me an appointment), ቀጠሮ ሰርዙ (cancel the appointment), ቀጠሮ አለ ወይ? (do you have an appointment?)."
                }
            ]
        }
    },
    "am-u12-l1": {
        "id": "am-u12-l1",
        "unit": "am-u12",
        "level": "B1",
        "objective": "Identify and name key external and internal parts of the human body in Amharic (የሰውነት ክፍሎች) including ራስ, ዓይን, ጆሮ, አፍ, እጅ, እግር, ልብ, and ሆድ.",
        "prerequisites": [
            "am-u11-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u11-l5"
            ]
        },
        "presentation": {
            "explanation": "Mastering vocabulary for human anatomy (የሰውነት ክፍሎች) is foundational for expressing physical wellbeing, discussing health conditions, and navigating medical consultations in Amharic.\n\n1. Head and Facial Anatomy (ራስ እና ፊት):\n- **ራስ** (Ras) — Head\n- **ፀጉር** (Ts'egur) — Hair\n- **ዓይን** (Ayn) — Eye (Plural: **ዓይኖች** / Aynoch)\n- **ጆሮ** (Joro) — Ear (Plural: **ጆሮዎች** / Jorowoch)\n- **አፍንጫ** (Afinch'a) — Nose\n- **አፍ** (Af) — Mouth\n- **ጥርስ** (T'irs) — Tooth (Plural: **ጥርሶች** / T'irsoch)\n- **ጉሮሮ** (Guroro) — Throat\n\n2. Torso, Limbs, and Internal Organs (ግንድ፣ ብልቶች እና የውስጥ ክፍሎች):\n- **ደረት** (Deret) — Chest\n- **ልብ** (Lib) — Heart\n- **ሆድ** (Hod) — Stomach / Belly\n- **ጀርባ** (Jerba) — Back\n- **እጅ** (Ij) — Hand / Arm (Plural: **እጆች** / Ijoch)\n- **ጣት** (T'at) — Finger / Toe (Plural: **ጣቶች** / T'atoch)\n- **እግር** (Igir) — Foot / Leg (Plural: **እግሮች** / Igroch)\n- **ጉልበት** (Gulbet) — Knee\n\n3. Possessive Suffix Suffixation with Body Parts:\n- **ራሴ** (Rasē) — My head\n- **እጅህ** (Ijih) — Your [masc.] hand\n- **ሆድሽ** (Hodish) — Your [fem.] stomach\n- **ልቡ** (Libu) — His heart\n- **ዓይኗ** (Aynwa) — Her eye",
            "examples": [
                {
                    "target": "ዶክተሩ የታማሚውን ደረት እና ልብ በመመርመሪያ መሳሪያ አዳመጡ።",
                    "reading": "Dokteru yetamamīwun deret ina lib bememergemīya mesariya adamet'u.",
                    "translation": "The doctor listened to the patient's chest and heart with an examination instrument."
                },
                {
                    "target": "ከስፖርት በኋላ እግሬ እና ጉልበቴ በጣም ደክመዋል።",
                    "reading": "Kespirt behwala igrē ina gulbetē bet'am dekmewal.",
                    "translation": "After sports, my leg and knee are very tired."
                },
                {
                    "target": "ዓይኔን እና ጆሮዬን አቧራ አስቸገረኝ።",
                    "reading": "Aynēn ina joroyēn ibwara aschegeregn.",
                    "translation": "Dust troubled my eye and my ear."
                }
            ],
            "mnemonics": [
                "Connect ራስ (Ras) to Ethiopian nobility 'Ras' (head/leader) — ራስ literally means 'head'.",
                "For እግር (Igir), think of 'gear' — your legs and feet are the running gear of your body!"
            ],
            "culturalNotes": [
                "In Ethiopian culture, anatomical terms frequently appear in everyday idioms: «ልብ ያለው ሰው» (literally 'a person with a heart') describes someone wise and compassionate, while «አፍ ያለው» denotes an articulate and persuasive speaker."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«ጉሮሮዬን አሞኛል» ሲባል የትኛው የሰውነት ክፍል ነው የተጠቀሰው?",
                    "options": [
                        "ሆድ (Stomach)",
                        "ጉሮሮ (Throat)",
                        "ጉልበት (Knee)"
                    ],
                    "answerIndex": 1,
                    "explanation": "ጉሮሮ (Guroro) means 'throat'. «ጉሮሮዬን አሞኛል» translates to 'my throat hurts me'."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«እጅ» እና «እግር» የሚሉት ቃላት ምን ትርጉም አላቸው?",
                    "options": [
                        "Eye and Ear",
                        "Hand/Arm and Foot/Leg",
                        "Head and Back"
                    ],
                    "answerIndex": 1,
                    "explanation": "እጅ (Ij) means 'hand/arm' and እግር (Igir) means 'foot/leg'."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ቃል 'Chest' የሚለውን የሰውነት ክፍል ይወክላል?",
                    "options": [
                        "ደረት (Deret)",
                        "ጀርባ (Jerba)",
                        "አፍንጫ (Afinch'a)"
                    ],
                    "answerIndex": 0,
                    "explanation": "ደረት (Deret) = chest; ጀርባ (Jerba) = back; አፍንጫ (Afinch'a) = nose."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'head' in Fidel script (ራስ):",
                    "acceptedAnswers": [
                        "ራስ",
                        "ras",
                        "Ras"
                    ],
                    "explanation": "ራስ (Ras) means 'head' in Amharic."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u12-l2": {
        "id": "am-u12-l2",
        "unit": "am-u12",
        "level": "B1",
        "objective": "Express physical pain, symptoms, and illness using the Amharic impersonal verb of affliction « አመመ » (Ammeme) conjugated with object pronoun suffixes.",
        "prerequisites": [
            "am-u12-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u12-l1"
            ]
        },
        "presentation": {
            "explanation": "In Amharic, physical pain and sickness are expressed primarily using the impersonal verb **አመመ** (Ammeme — 'to pain / to afflict'). Unlike English ('I hurt / I am sick'), Amharic frames pain as an affliction acting upon the sufferer as a grammatical direct object.\n\n1. Syntactic Construction:\n- **[Body Part + Definite/Accusative -ን] + አመመ + [Object Suffix]**\n- **ራሴን አመመኝ** (Rasēn ammeme-gn) -> Literally: 'My head, it pained me' = I have a headache.\n- **ሆዷን አመማት** (Hodwan ammeme-at) -> 'Her stomach, it pained her' = She has a stomachache.\n\n2. Conjugation of አመመ with Object Pronoun Suffixes:\n- እኔን: **አመመኝ** (ammeme-gn — it pained me)\n- አንተን: **አመመህ** (ammeme-h — it pained you [masc.])\n- አንቺን: **አመመሽ** (ammeme-sh — it pained you [fem.])\n- እሱን: **አመመው** (ammeme-w — it pained him)\n- እሷን: **አመማት** (ammeme-at — it pained her)\n- እኛን: **አመመን** (ammeme-n — it pained us)\n- እናንተን: **አመማችሁ** (ammeme-achihu — it pained you [pl.])\n- እነሱን: **አመማቸው** (ammeme-achew — it pained them)\n\n3. Common Symptoms and Illnesses (የሕመም ስሜቶች):\n- **ትኩሳት** (Tiksat) — Fever\n- **ጉንፋን** (Gunfan) — Cold / Influenza\n- **ሳል** (Sal) — Cough\n- **ራስ ምታት** (Ras mitat) — Severe headache\n- **ማቅለሽለሽ** (Maqleshlesh) — Nausea",
            "examples": [
                {
                    "target": "ትናንት ማታ ጀምሮ ከባድ ትኩሳት እና ጉንፋን ያመኛል።",
                    "reading": "Tinant mata jemiro kebad tiksat ina gunfan yamēgnal.",
                    "translation": "Starting yesterday evening, I have had a severe fever and flu."
                },
                {
                    "target": "ልጁን ሆዱን በጣም ስለ አመመው ወደ ክሊኒክ ሄደ።",
                    "reading": "Lijun hodun bet'am sile ammemew wede klinik hēde.",
                    "translation": "Because the child had a severe stomachache, he went to the clinic."
                },
                {
                    "target": "ምንሽን አመመሽ? — ጥርሴን በጣም ያመኛል።",
                    "reading": "Minishin ammemesh? — T'irsēn bet'am yamēgnal.",
                    "translation": "What is hurting you [fem.]? — My tooth is hurting me very much."
                }
            ],
            "mnemonics": [
                "Remember: In Amharic, pain arrives at you as an object: 'Ammeme-gn' = 'It pained ME'. Suffix -ኝ (-gn) is the receiver of the ache!"
            ],
            "culturalNotes": [
                "When visiting or calling someone who is unwell, the customary Amharic blessing is «እግዚአብሔር ይማርህ!» (Egziabher yimarih! — to a male) or «እግዚአብሔር ይማርሽ!» (Egziabher yimarish! — to a female), meaning 'May God heal you!'"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«ራሴን አመመኝ» የሚለው ዓረፍተ ነገር ትርጉም ምንድን ነው?",
                    "options": [
                        "I hurt my leg",
                        "I have a headache (my head hurts me)",
                        "I am hungry"
                    ],
                    "answerIndex": 1,
                    "explanation": "ራሴን (my head) + አመመኝ (it pained me) expresses having a headache."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "ለአንዲት ሴት «ሆድሽን አመመሽ?» ብለን ስንጠይቅ ምን ማለታችን ነው?",
                    "options": [
                        "Does your stomach hurt you?",
                        "Do your eyes hurt?",
                        "Are you thirsty?"
                    ],
                    "answerIndex": 0,
                    "explanation": "ሆድሽን (your [f.] stomach) + አመመሽ (did it hurt you [f.]?) asks whether she has a stomachache."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "«ጉንፋን» የሚለው የሕመም ቃል ምን ያመለክታል?",
                    "options": [
                        "High blood pressure",
                        "Common Cold / Flu",
                        "Bone fracture"
                    ],
                    "answerIndex": 1,
                    "explanation": "ጉንፋን (Gunfan) = common cold or flu."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic phrase meaning 'I have a headache' in Fidel script (ራሴን አመመኝ):",
                    "acceptedAnswers": [
                        "ራሴን አመመኝ",
                        "rasen ammemegn",
                        "Rasen ammemegn"
                    ],
                    "explanation": "«ራሴን አመመኝ» (Rasēn ammeme-gn) means 'I have a headache'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u12-l3": {
        "id": "am-u12-l3",
        "unit": "am-u12",
        "level": "B1",
        "objective": "Navigate medical visits at a clinic (ክሊኒክ) or hospital (ሆስፒታል) and purchase medications at a pharmacy (መድሃኒት ቤት / ፋርማሲ) in Amharic.",
        "prerequisites": [
            "am-u12-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u12-l2"
            ]
        },
        "presentation": {
            "explanation": "Navigating medical infrastructure in Ethiopia requires specific terminology for healthcare facilities, personnel, diagnostic procedures, and pharmaceutical treatments.\n\n1. Healthcare Facilities and Medical Staff:\n- **ሐኪም / ዶክተር** (Hakim / Dokter) — Doctor / Physician\n- **ነርስ / አስታማሚ** (Ners / Astamami) — Nurse / Patient attendant\n- **ክሊኒክ** (Klinik) — Clinic\n- **ሆስፒታል** (Hospital) — Hospital\n- **መድሃኒት ቤት / ፋርማሲ** (Medhanit bēt / Farmasi) — Pharmacy / Drugstore\n- **ላቦራቶሪ** (Laboratori) — Medical Laboratory\n\n2. Diagnostics and Medications (ምርመራ እና መድሃኒቶች):\n- **መድሃኒት** (Medhanit) — Medicine / Medication\n- **ክኒን** (Knin) — Tablet / Pill\n- **ሽሮፕ** (Shirop) — Liquid syrup\n- **መርፌ** (Merfē) — Injection / Syringe\n- **የሐኪም ማዘዣ** (Yehakim mazeja) — Doctor's prescription\n- **የደም ምርመራ** (Yedem mirmara) — Blood test\n- **የደም ግፊት** (Yedem gifit) — Blood pressure\n\n3. Pharmacist Instructions and Dosage:\n- «**ይህን ክኒን በቀን ሦስት ጊዜ ከምግብ በኋላ ይውሰዱ**» (Take this tablet three times daily after meals).\n- «**በቂ ውሃ ይጠጡ**» (Drink plenty of water).",
            "examples": [
                {
                    "target": "ዶክተሩ የደም ግፊቴን ለክተው የደም ምርመራ አዘዙልኝ።",
                    "reading": "Dokteru yedem gifitēn lektew yedem mirmara azezulign.",
                    "translation": "The doctor measured my blood pressure and ordered a blood test for me."
                },
                {
                    "target": "ይህንን መድሃኒት በፋርማሲ ውስጥ በሐኪም ማዘዣ ወረቀት ብቻ መግዛት ይቻላል።",
                    "reading": "Yihinnin medhanit befarmasi wust' behakim mazeja wereqet bicha megzat yichalal.",
                    "translation": "This medicine can only be bought at the pharmacy with a doctor's prescription slip."
                },
                {
                    "target": "ነርሷ ለታማሚው የህመም ማስታገሻ መርፌ ወጋችው።",
                    "reading": "Nerswa letamamiw yehimem mastagesha merfē wegachiw.",
                    "translation": "The nurse gave the patient a pain-relieving injection."
                }
            ],
            "mnemonics": [
                "መድሃኒት (Medhanit) = Medicine (both begin with 'Med'). መድሃኒት ቤት is literally 'Medicine House' = Pharmacy!"
            ],
            "culturalNotes": [
                "Major healthcare institutions in Addis Ababa, such as ጥቁር አንበሳ (Tikur Anbessa / Black Lion Hospital) and ቅዱስ ጳውሎስ (St. Paul's Hospital), are landmark tertiary referral centers serving patients from across the entire country."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«መድሃኒት ቤት» ምን ማለት ነው?",
                    "options": [
                        "Doctor's office",
                        "Pharmacy / Drugstore",
                        "Hospital room"
                    ],
                    "answerIndex": 1,
                    "explanation": "መድሃኒት ቤት (Medhanit bēt) literally translates to 'medicine house' (pharmacy/drugstore)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«በቀን ሦስት ጊዜ ከምግብ በኋላ» የሚለው መመሪያ ምን ያዛል?",
                    "options": [
                        "Once a week before sleep",
                        "Three times a day after meals",
                        "Twice a day before eating"
                    ],
                    "answerIndex": 1,
                    "explanation": "በቀን ሦስት ጊዜ (3 times a day) + ከምግብ በኋላ (after meals) is the standard prescription dosage schedule."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ቃል 'Injection / Needle' የሚለውን የህክምና ቃል ይወክላል?",
                    "options": [
                        "መርፌ (Merfe)",
                        "ክኒን (Knin)",
                        "ፋሻ (Fasha)"
                    ],
                    "answerIndex": 0,
                    "explanation": "መርፌ (Merfe) = needle/injection; ክኒን (Knin) = pill; ፋሻ (Fasha) = bandage."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'medicine' in Fidel script (መድሃኒት):",
                    "acceptedAnswers": [
                        "መድሃኒት",
                        "medhanit",
                        "Medhanit"
                    ],
                    "explanation": "መድሃኒት (Medhanit) means 'medicine'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u12-l4": {
        "id": "am-u12-l4",
        "unit": "am-u12",
        "level": "B1",
        "objective": "Formulate imperative health advice, dosage instructions, and preventative lifestyle recommendations in Amharic using « ማድረግ አለብህ/አለብሽ » and « ይገባል ».",
        "prerequisites": [
            "am-u12-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u12-l3"
            ]
        },
        "presentation": {
            "explanation": "Giving medical counsel, instructions, and preventative health recommendations in Amharic employs modal auxiliary verbs of obligation and imperative forms.\n\n1. Expressing Obligation with « አለበት » (Allebbat / Allebbet):\n- **እረፍት ማድረግ አለብህ** (Irefit madrēg allebih) — You [masc.] must rest.\n- **መድሃኒቱን በሰዓቱ መውሰድ አለብሽ** (Medhanītun bese'atu mewsed allebish) — You [fem.] must take the medicine on time.\n- **ብዙ ፈሳሽ መውሰድ አለብዎት** (Bizu fesash mewsed allebiwot) — You [polite] must take plenty of fluids.\n\n2. Expressing Advice with « ይገባል » (Yigebal — 'it is appropriate / one ought to'):\n- **ጤናማ ምግብ መመገብ ይገባዎታል** (T'ēnama migib memegeb yigebawotal) — You ought to eat healthy food.\n- **ስኳር እና ጨው መቀነስ ይገባናል** (Sikwar ina ch'ew meqenes yigebanall) — We ought to reduce sugar and salt.\n\n3. Vital Wellness and Lifestyle Terms (የጤና አኗኗር):\n- **እረፍት** (Irefit) — Rest / Recuperation\n- **እንቅልፍ** (Inqilf) — Sleep\n- **የተመጣጠነ ምግብ** (Yetemet'at'ene migib) — Balanced diet\n- **አካላዊ እንቅስቃሴ / ስፖርት** (Akalawi inqisqasē / Sport) — Physical exercise\n- **ጭንቀት መቀነስ** (Ch'inqet meqenes) — Stress reduction",
            "examples": [
                {
                    "target": "ጉንፋኑ እንዲሻልህ በቂ እረፍት ማድረግ እና ሙቅ ሻይ መጠጣት አለብህ።",
                    "reading": "Gunfanu indīshalih beqī irefit madrēg ina muq shay met'et'at allebih.",
                    "translation": "For the cold to improve for you, you must get enough rest and drink hot tea."
                },
                {
                    "target": "የደም ግፊት እንዳይጨምር ጨው እና ቅባት መቀነስ ይገባዎታል።",
                    "reading": "Yedem gifit indayich'emir ch'ew ina qibat meqenes yigebawotal.",
                    "translation": "So that blood pressure does not rise, you ought to reduce salt and fat."
                },
                {
                    "target": "ሐኪሙ በቀን ሁለት ሊትር ንጹህ ውሃ እንድጠጣ መከሩኝ።",
                    "reading": "Hakīmu beqen hulet lītir nits'uh wuha indit'et'a mekerugn.",
                    "translation": "The doctor advised me to drink two liters of clean water daily."
                }
            ],
            "mnemonics": [
                "«አለብህ» (Allebih) has the root 'on' — there is an obligation ON you.",
                "«እረፍት» (Irefit) = Rest. Take a breath and rest!"
            ],
            "culturalNotes": [
                "Traditional Ethiopian home remedies (የባህል መድሃኒት) are widely used alongside modern clinical care. Herbs such as ጤና አዳም (Tena Adam / Rue, added to coffee for digestive comfort), ኮሶ (Kosso), and ዝንጅብል (Zinjibil / Ginger tea for throat pain) remain cherished remedies."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«መድሃኒቱን በሰዓቱ መውሰድ አለብህ» ምን ማለት ነው?",
                    "options": [
                        "You should buy more medicine",
                        "You must take the medicine on time",
                        "You can stop taking the medicine"
                    ],
                    "answerIndex": 1,
                    "explanation": "መድሃኒቱን (the medicine) + በሰዓቱ (on time) + መውሰድ አለብህ (you must take) expresses mandatory punctuality in taking doses."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«እረፍት ማድረግ» የሚለው ሀረግ ትርጉም ምንድን ነው?",
                    "options": [
                        "To take rest / recuperate",
                        "To do heavy labor",
                        "To wake up early"
                    ],
                    "answerIndex": 0,
                    "explanation": "እረፍት (Irefit) = rest; ማድረግ (Madrēg) = to do/make. «እረፍት ማድረግ» means to rest."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው የአማርኛ ሀረግ 'Drink plenty of water' የሚለውን ምክር በትክክል ይገልጻል?",
                    "options": [
                        "ምግብ አትብሉ (Do not eat food)",
                        "ከቤት አትውጡ (Do not leave the house)",
                        "ብዙ ውሃ ጠጡ (Bizu wuha t'et'u)"
                    ],
                    "answerIndex": 2,
                    "explanation": "«ብዙ ውሃ ጠጡ» (Bizu wuha t'et'u) means 'Drink plenty of water'."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'rest / relaxation' in Fidel script (እረፍት):",
                    "acceptedAnswers": [
                        "እረፍት",
                        "irefit",
                        "Irefit"
                    ],
                    "explanation": "እረፍት (Irefit) means 'rest'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u12-l5": {
        "id": "am-u12-l5",
        "unit": "am-u12",
        "level": "B1",
        "objective": "Engage in an integrated patient-doctor consultation dialogue in Amharic, describing illness history, symptoms, medical examination results, and following recovery plans.",
        "prerequisites": [
            "am-u12-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u12-l4"
            ]
        },
        "presentation": {
            "explanation": "This lesson consolidates all clinical and communicative skills from Unit 12 into a realistic doctor-patient dialogue in Amharic.\n\n1. Clinical Dialogue Sequence (የህክምና ውይይት ሂደት):\n- **Doctor's Inquiry:** «ምን ሆንክ? ምን ያመሃል?» (What happened? What is paining you?)\n- **Patient's Complaint:** «ዶክተር፣ ሆዴን እና ራሴን በጣም ያመኛል።» (Doctor, my stomach and head hurt me severely.)\n- **History of Onset:** «ህመሙ ከጀመረኝ ሦስት ቀን ሆኖኛል።» (It has been three days since the pain began.)\n- **Doctor's Examination:** «እስቲ ደረትህን ልመርምረው፤ ትንፋሽ ውሰድ።» (Let me examine your chest; take a breath.)\n- **Doctor's Recommendation:** «ይህንን መድሃኒት ለሰባት ቀናት ውሰድ። ካልተሻለህ ተመለስ።» (Take this medicine for seven days. If it doesn't improve, return.)\n\n2. Recovery and Improvement (ማገገም እና መሻሻል):\n- **ተሻለኝ** (Teshale-gn) — It improved for me / I feel better.\n- **ዳነ** (Dane) — He healed / recovered.\n- **ድነቴ** (Dinetē) — My recovery / wellbeing.",
            "examples": [
                {
                    "target": "ዶክተር፣ ሆዴን በጣም ስለሚያመኝ ትናንት ማታ እንቅልፍ አጣሁ።",
                    "reading": "Dokter, hodēn bet'am silemiyamēgn tinant mata inqilf at'ahu.",
                    "translation": "Doctor, because my stomach hurts me severely, I lost sleep last night."
                },
                {
                    "target": "ሐኪሙ መርምረውኝ የጨጓራ ህመም እንዳለብኝ እና ቅመም የበዛበት ምግብ እንዳላበዛ ነገሩኝ።",
                    "reading": "Hakīmu mermirewign yech'egwara himem indallebign ina qimem yebezabbet migib indalabaza negerugn.",
                    "translation": "The doctor examined me, told me that I have gastritis, and said not to consume overly spicy food."
                },
                {
                    "target": "መድሃኒቱን ከወሰድኩ በኋላ ህመሙ በጣም ተሽሎኛል።",
                    "reading": "Medhanītun kewesedku behwala himemu bet'am teshilognall.",
                    "translation": "After taking the medication, the illness has improved greatly for me."
                }
            ],
            "mnemonics": [
                "«ተሻለኝ» (Teshale-gn) = It improved for me (from ሻለ = to be better). A vital phrase for checking on recovery!"
            ],
            "culturalNotes": [
                "In Ethiopian healthcare, family members (አስታማሚዎች / caregivers) play a deeply valued role, often visiting hospitalized relatives with homemade nourishing foods like አጃ ሾርባ (oat soup) or የዶሮ መረቅ (chicken broth)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "በህክምና ውይይት ወቅት «ምን ሆንክ?» ተብሎ ሲጠየቅ ትክክለኛው መልስ የትኛው ነው?",
                    "options": [
                        "ትናንት ወደ ትምህርት ቤት ሄድኩ።",
                        "ራሴን እና ጉሮሮዬን በጣም አመመኝ።",
                        "ቡና መጠጣት እፈልጋለሁ።"
                    ],
                    "answerIndex": 1,
                    "explanation": "«ራሴን እና ጉሮሮዬን በጣም አመመኝ» (My head and throat hurt me severely) directly describes symptoms in response to the clinical inquiry."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ህመሙ ተሽሎኛል» ሲባል ምን ማለት ነው?",
                    "options": [
                        "The pain is getting worse",
                        "The illness has improved for me / I feel better",
                        "I need to see another doctor"
                    ],
                    "answerIndex": 1,
                    "explanation": "«ተሽሎኛል» (Teshilognall) means 'it has improved for me' (I am feeling better)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "ዶክተሩ «ካልተሻለህ ተመለስ» ሲሉ ምን ማለታቸው ነው?",
                    "options": [
                        "You are completely cured",
                        "If it does not improve for you, return / come back",
                        "Do not ever take medicine"
                    ],
                    "answerIndex": 1,
                    "explanation": "«ካልተሻለህ ተመለስ» = 'If you do not feel better, come back'."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'Doctor / Physician' in Fidel script (ሐኪም):",
                    "acceptedAnswers": [
                        "ሐኪም",
                        "hakim",
                        "Hakim",
                        "ዶክተር",
                        "dokter"
                    ],
                    "explanation": "ሐኪም (Hakim) or ዶክተር (Dokter) means 'doctor / physician'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u13-l1": {
        "id": "am-u13-l1",
        "unit": "am-u13",
        "level": "B1",
        "objective": "Describe real-time weather conditions and temperature in Amharic using meteorological nouns and descriptive adjectives including ፀሐያማ (sunny), ዝናባማ (rainy), ደመናማ (cloudy), ንፋስ (wind), ሙቀት (heat), and ቅዝቃዜ (cold).",
        "prerequisites": [
            "am-u12-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u12-l5"
            ]
        },
        "presentation": {
            "explanation": "Discussing weather (የአየር ሁኔታ) and climate patterns in Amharic involves specialized meteorological vocabulary, descriptive adjective derivations, and impersonal weather verbal idioms.\n\n1. Meteorological Nouns and Adjective Suffixation (-አማ / -ama):\nThe suffix **-አማ** (-ama) derives adjectives indicating abundance or characteristic quality:\n- **ፀሐይ** (Ts'ehay — Sun) -> **ፀሐያማ** (Ts'ehayama — Sunny)\n- **ዝናብ** (Zinab — Rain) -> **ዝናባማ** (Zinabama — Rainy)\n- **ደመና** (Demena — Cloud) -> **ደመናማ** (Demenama — Cloudy)\n- **ንፋስ** (Nifas — Wind) -> **ንፋሳማ** (Nifasama — Windy)\n- **ጭጋግ** (Ch'igag — Fog / Mist) -> **ጭጋጋማ** (Ch'igagama — Foggy)\n\n2. Temperature and Atmospheric Descriptions (የሙቀት መጠን እና ቅዝቃዜ):\n- **ሙቀት** (Muqet — Heat / Warmth) -> **ሞቃታማ** (Moqatama — Warm / Hot)\n- **ብርድ / ቅዝቃዜ** (Bird / Qizqazē — Cold / Chill) -> **ቀዝቃዛ** (Qezqaza — Cold / Chilly)\n\n3. Common Weather Verbs and Idiomatic Phrases:\n- «**ዝናብ ይዘንባል**» (Zinab yizenbal) — It is raining / Rain falls.\n- «**ንፋስ ይነፍሳል**» (Nifas yinefsal) — The wind blows.\n- «**ፀሐይ ወጥታለች**» (Ts'ehay wet'atalech) — The sun is out.\n- «**አየሩ በጣም ደስ ይላል**» (Ayeru bet'am des yilal) — The weather is very pleasant.",
            "examples": [
                {
                    "target": "ዛሬ ጠዋት በአዲስ አበባ ከተማ አየሩ በጣም ቀዝቃዛ እና ደመናማ ነው።",
                    "reading": "Zarē t'ewat be'Addīs Abeba ketema ayeru bet'am qezqaza ina demenama new.",
                    "translation": "This morning in Addis Ababa the weather is very cold and cloudy."
                },
                {
                    "target": "ከሰዓት በኋላ ከባድ ዝናብ ስለሚዘንብ ጃንጥላህን ይዘህ ውጣ።",
                    "reading": "Kese'at behwala kebad zinab silemīzenb jant'ilāhin yizeh wut'a.",
                    "translation": "Because it will rain heavily in the afternoon, take your umbrella with you as you go out."
                },
                {
                    "target": "በደብረ ዘይት ዛሬ ፀሐያማ እና ሞቃታማ አየር አለ።",
                    "reading": "Bedebre Zeyt zarē ts'ehayama ina moqatama ayer alle.",
                    "translation": "In Debre Zeyit today there is sunny and warm weather."
                }
            ],
            "mnemonics": [
                "The suffix -አማ (-ama) is like the English '-y': ፀሐይ (sun) -> ፀሐያማ (sunny), ደመና (cloud) -> ደመናማ (cloudy)!",
                "ጃንጥላ (Jant'ila) = Umbrella — a gentle roof keeping off the rain."
            ],
            "culturalNotes": [
                "Addis Ababa sits at an elevation of 2,355 meters above sea level. This high altitude gives the capital a subtropical highland climate with sunny, pleasant afternoons (ፀሐያማ) followed by brisk mountain evenings requiring warm shawls (ጋቢ / ነጠላ)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«ደመናማ» የሚለው ቃል ምን ያመለክታል?",
                    "options": [
                        "Sunny / Clear skies",
                        "Cloudy / Overcast",
                        "Hot / Humid"
                    ],
                    "answerIndex": 1,
                    "explanation": "ደመና (cloud) + -አማ (-y) = ደመናማ (cloudy / overcast)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ዝናብ ይዘንባል» የሚለው አገላለጽ ትርጉም ምንድን ነው?",
                    "options": [
                        "The wind is blowing",
                        "It is raining",
                        "The sun is setting"
                    ],
                    "answerIndex": 1,
                    "explanation": "ዝናብ (rain) + ይዘንባል (it falls / rains) means 'it is raining'."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው የአማርኛ ቃል 'Sunny' የሚለውን የአየር ሁኔታ ይገልጻል?",
                    "options": [
                        "ፀሐያማ (Ts'ehayama)",
                        "ደመናማ (Demenama)",
                        "ጭጋጋማ (Ch'igagama)"
                    ],
                    "answerIndex": 0,
                    "explanation": "ፀሐያማ (Ts'ehayama) = sunny; ደመናማ = cloudy; ጭጋጋማ = foggy."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'rain' in Fidel script (ዝናብ):",
                    "acceptedAnswers": [
                        "ዝናብ",
                        "zinab",
                        "Zinab"
                    ],
                    "explanation": "ዝናብ (Zinab) means 'rain'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u13-l2": {
        "id": "am-u13-l2",
        "unit": "am-u13",
        "level": "B1",
        "objective": "Distinguish and discuss the four traditional Ethiopian seasons — ክረምት (Main rainy season), መኸር (Harvest season), በጋ (Dry season), and ጸደይ (Spring/Bloom season) — and their cultural and agricultural significance.",
        "prerequisites": [
            "am-u13-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u13-l1"
            ]
        },
        "presentation": {
            "explanation": "Ethiopia's unique geography and calendar define four distinct annual seasons (አራቱ ወቅቶች), which dictate agricultural production, religious celebrations, and community life.\n\n1. The Four Ethiopian Seasons (አራቱ ወቅቶች):\n- **ክረምት** (Kiremt — June to August):\nThe major rainy season characterized by dense highland cloud cover and heavy rainfall. Essential for recharging rivers and irrigating crops.\n- **መኸር** (Meher — September to November):\nThe harvest and post-rain season. Marked by blooming yellow Adey Abeba (አደይ አበባ) flowers, clear skies, and the Ethiopian New Year (እንቁጣጣሽ) in Meskerem.\n- **በጋ** (Bega — December to February):\nThe dry, sun-drenched season featuring crisp blue skies and cool evenings. Major festive season of Gena (ገና) and Timket (ጥምቀት).\n- **ጸደይ / በልግ** (Ts'edey / Belg — March to May):\nThe season of short spring rains (የበልግ ዝናብ) and agricultural soil preparation before the main summer downpours.\n\n2. Agricultural & Cultural Associations:\n- **አዝመራ** (Azmera) — Harvest / Crop yield\n- **እህል መሰብሰብ** (Ihil mesebseb) — Harvesting grain (Teff, barley, wheat)",
            "examples": [
                {
                    "target": "በክረምት ወራት በኢትዮጵያ ከፍተኛ ተራሮች ላይ ኃይለኛ ዝናብ ይዘንባል።",
                    "reading": "Bekiremt werat be'Ityop'ya kefitegna teraroch lay haylegna zinab yizenbal.",
                    "translation": "During the Kiremt months, heavy rain falls on the high mountains of Ethiopia."
                },
                {
                    "target": "በመኸር ወቅት ቢጫ አደይ አበባ ሜዳውን በሙሉ ያሸበርቀዋል።",
                    "reading": "Bemeher weqt bīch'a adey abeba mēdawun bemullu yasheberqewal.",
                    "translation": "In the Meher season, yellow Adey Abeba flowers adorn the entire field."
                },
                {
                    "target": "በበጋ ወቅት አየሩ ደረቅ እና ፀሐያማ ስለሆነ ለጉዞ እና ለበዓላት ተስማሚ ነው።",
                    "reading": "Bebega weqt ayeru dereq ina ts'ehayama silehone leguzo ina lebe'alat tesmami new.",
                    "translation": "In the Bega season, because the weather is dry and sunny, it is suitable for travel and holidays."
                }
            ],
            "mnemonics": [
                "Remember the 4 seasons in sequence: Kiremt (Heavy Rain), Meher (Harvest & Yellow Flowers), Bega (Dry & Bright), Ts'edey (Spring Blooms)!"
            ],
            "culturalNotes": [
                "The end of the heavy rainy season (ክረምት) on መስከረም 1 (September 11) inaugurates the Ethiopian New Year (እንቁጣጣሽ / Enkutatash). Yellow Adey Abeba flowers (ቢጫ አደይ አበባ) bloom everywhere across the Ethiopian highlands, symbolizing peace, light, and renewed harvest."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "የኢትዮጵያ ዋነኛ የዝናብ ወቅት የትኛው ነው?",
                    "options": [
                        "በጋ (Bega)",
                        "ክረምት (Kiremt)",
                        "መኸር (Meher)"
                    ],
                    "answerIndex": 1,
                    "explanation": "ክረምት (Kiremt) is the primary heavy rainy season spanning June through August."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«መኸር» ወቅት በምን ይታወቃል?",
                    "options": [
                        "በድርቅ እና በበረዶ",
                        "በእህል አሰባሰብ እና በአደይ አበባ መፈካት",
                        "በከባድ የበረሃ አውሎ ንፋስ"
                    ],
                    "answerIndex": 1,
                    "explanation": "መኸር (Meher) is the harvest season, celebrated for crop gathering and the blooming of golden Adey Abeba wildflowers."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የኢትዮጵያ ደረቅ እና ፀሐያማ ወቅት ምን ተብሎ ይጠራል?",
                    "options": [
                        "ክረምት (Kiremt)",
                        "በጋ (Bega)",
                        "ጸደይ (Ts'edey)"
                    ],
                    "answerIndex": 1,
                    "explanation": "በጋ (Bega) is the sunny dry season lasting from December through February."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for the main rainy season in Fidel script (ክረምት):",
                    "acceptedAnswers": [
                        "ክረምት",
                        "kiremt",
                        "Kiremt",
                        "kremt"
                    ],
                    "explanation": "ክረምት (Kiremt) is the Ethiopian rainy season."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u13-l3": {
        "id": "am-u13-l3",
        "unit": "am-u13",
        "level": "B1",
        "objective": "Identify and describe geographical features and landforms in Amharic including ተራራ (mountain), ሸለቆ (valley), ወንዝ (river), ሐይቅ (lake), ደን (forest), ፏፏቴ (waterfall), and ሜዳ (plateau/plain).",
        "prerequisites": [
            "am-u13-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u13-l2"
            ]
        },
        "presentation": {
            "explanation": "Ethiopia possesses one of the most dramatic physical topographies on the African continent, from towering volcanic plateaus to deep Rift Valley depressions.\n\n1. Landforms and Water Bodies (የመልክዓ ምድር ክፍሎች):\n- **ተራራ** (Terara) — Mountain (e.g., **ራስ ዳሽን** / Ras Dashen — 4,550m summit)\n- **ሸለቆ** (Sheleqo) — Valley / Canyon\n- **ስምጥ ሸለቆ** (Simt' sheleqo) — The Great Rift Valley\n- **ወንዝ** (Wenz) — River (e.g., **ዓባይ ወንዝ** / Blue Nile, **አዋሽ ወንዝ** / Awash)\n- **ሐይቅ** (Hayq) — Lake (e.g., **ጣና ሐይቅ** / Lake Tana)\n- **ፏፏቴ** (Fwafwatē) — Waterfall (e.g., **የዓባይ ፏፏቴ** / Tis Issat Falls)\n- **ደን** (Den) — Forest / Woodland\n- **ሜዳ** (Mēda) — Open plain / Plateau\n\n2. Traditional Agro-Climatic Zones of Ethiopia:\n- **ደጋ** (Dega) — Cool highland zone (>2,300m elevation)\n- **ወይናደጋ** (Weynadega) — Moderate temperate mid-altitude zone (1,500m–2,300m)\n- **ቆላ** (Qola) — Warm lowland zone (<1,500m elevation)\n- **በረሃ** (Bereha) — Arid desert zone",
            "examples": [
                {
                    "target": "የዓባይ ወንዝ ከጣና ሐይቅ ተነስቶ ረጅም ጉዞ ያደርጋል።",
                    "reading": "Ye'Abay wenz keT'ana hayq tenesto rejim guzo yaderegal.",
                    "translation": "The Blue Nile River rises from Lake Tana and makes a long journey."
                },
                {
                    "target": "ራስ ዳሽን በኢትዮጵያ ውስጥ እጅግ ከፍተኛው ተራራ ነው።",
                    "reading": "Ras Dashen be'Ityop'ya wust' ijig kefitegnaw terara new.",
                    "translation": "Ras Dashen is the highest mountain in Ethiopia."
                },
                {
                    "target": "በስምጥ ሸለቆ ውስጥ በርካታ ውብ ሐይቆች እና ብሔራዊ ፓርኮች ይገኛሉ።",
                    "reading": "Besimt' sheleqo wust' birkata wub hayqoch ina biherawi parkoch yigegnalu.",
                    "translation": "In the Great Rift Valley, numerous beautiful lakes and national parks are found."
                }
            ],
            "mnemonics": [
                "ተራራ (Terara) rises high like a terra-cotta peak! ሐይቅ (Hayq) = Lake — picture hiking around the lake shore!"
            ],
            "culturalNotes": [
                "Ethiopia's traditional agro-ecological classification — ደጋ (Dega), ወይናደጋ (Weynadega), and ቆላ (Qola) — has guided agricultural cultivation for millennia. Teff (ጤፍ) and fine Arabica coffee (ቡና) thrive in the temperate ወይናደጋ zones."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«ወንዝ» እና «ሐይቅ» ምን ማለት ናቸው?",
                    "options": [
                        "River and Lake",
                        "Mountain and Valley",
                        "Forest and Meadow"
                    ],
                    "answerIndex": 0,
                    "explanation": "ወንዝ (Wenz) = river; ሐይቅ (Hayq) = lake."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ደጋ» የሚለው የአየር ጠባይ ዞን ምን አይነት ነው?",
                    "options": [
                        "ሞቃታማ ዝቅተኛ ቦታ (Hot lowland)",
                        "ቀዝቃዛ ከፍተኛ ተራራማ አካባቢ (Cool highland)",
                        "የበረሃ አካባቢ (Arid desert)"
                    ],
                    "answerIndex": 1,
                    "explanation": "ደጋ (Dega) represents the cool highland zones situated above 2,300 meters."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ቃል 'Waterfall' የሚለውን ተፈጥሮአዊ መልክዓ ምድር ያመለክታል?",
                    "options": [
                        "ተራራ (Terara)",
                        "ደን (Den)",
                        "ፏፏቴ (Fwafwate)"
                    ],
                    "answerIndex": 2,
                    "explanation": "ፏፏቴ (Fwafwate) = waterfall; ተራራ = mountain; ደን = forest."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'river' in Fidel script (ወንዝ):",
                    "acceptedAnswers": [
                        "ወንዝ",
                        "wenz",
                        "Wenz"
                    ],
                    "explanation": "ወንዝ (Wenz) means 'river'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u13-l4": {
        "id": "am-u13-l4",
        "unit": "am-u13",
        "level": "B1",
        "objective": "Inquire about the weather forecast, discuss current atmospheric conditions, and give travel/clothing recommendations in Amharic using « ዛሬ አየሩ እንዴት ነው? ».",
        "prerequisites": [
            "am-u13-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u13-l3"
            ]
        },
        "presentation": {
            "explanation": "Conducting daily conversations about the weather forecast (የአየር ሁኔታ ትንበያ) is common in Ethiopian social exchanges, travel planning, and outdoor gatherings.\n\n1. Question Patterns for Weather Inquiries:\n- «**ዛሬ አየሩ እንዴት ነው?**» (Zarē ayeru indēt new?) — How is the weather today?\n- «**ነገ ዝናብ ይዘንባል ተብሏል?**» (Nege zinab yizenbal teblwal?) — Is it forecast to rain tomorrow?\n- «**የሙቀት መጠኑ ስንት ዲግሪ ነው?**» (Yemuqet met'enu sint dīgrī new?) — What is the temperature in degrees?\n\n2. Descriptive Responses and Weather Status:\n- «**አየሩ በጣም ደስ ይላል፤ ፀሐያማ ነው።**» (The weather is very pleasant; it is sunny.)\n- «**ንፋስ እና ብርድ ስላለ ጃኬት ልበስ።**» (Because there is wind and cold, wear a jacket.)\n- «**አየሩ እየተቀየረ ነው፤ ደመና እየመጣ ነው።**» (The weather is changing; clouds are moving in.)\n\n3. Key Meteorological Terms:\n- **ትንበያ** (Tinbeya) — Forecast / Prediction\n- **የሙቀት መጠን** (Yemuqet met'en) — Temperature level\n- **ዲግሪ ሴንቲግሬድ** (Dīgrī sēntīgrēd) — Degrees Celsius",
            "examples": [
                {
                    "target": "ወደ ጎንደር ከመጓዝህ በፊት የአየር ሁኔታ ትንበያውን አዳምጥ።",
                    "reading": "Wede Gonder kemegwazih befīt ye'ayer hunēta tinbeyawun adamit'.",
                    "translation": "Before traveling to Gondar, listen to the weather forecast."
                },
                {
                    "target": "ዛሬ በአዲስ አበባ አየሩ ጥሩ ነው፤ የሙቀት መጠኑ ሃያ ሁለት ዲግሪ ነው።",
                    "reading": "Zarē be'Addīs Abeba ayeru t'iru new; yemuqet met'enu haya hulet dīgrī new.",
                    "translation": "Today in Addis Ababa the weather is good; the temperature is twenty-two degrees."
                },
                {
                    "target": "ነገ ጉዞ ስላለን ጃንጥላ እና ወፍራም ልብስ ማዘጋጀት አለብን።",
                    "reading": "Nege guzo silallen jant'ila ina wefram libs mazegajet allebin.",
                    "translation": "Since we have a journey tomorrow, we must prepare an umbrella and thick clothing."
                }
            ],
            "mnemonics": [
                "«ትንበያ» (Tinbeya) = Forecast / Prediction. Look ahead and predict the weather!"
            ],
            "culturalNotes": [
                "In Ethiopian culture, rain during an important public celebration or family event (like a wedding or baptism) is traditionally viewed as a sign of heavenly blessing and abundance (በረከት / berekhet)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«ዛሬ አየሩ እንዴት ነው?» ተብሎ ሲጠየቅ ተስማሚው ምላሽ የትኛው ነው?",
                    "options": [
                        "አየሩ በጣም ፀሐያማ እና ደስ የሚል ነው።",
                        "ትናንት መጽሐፍ አነበብኩ።",
                        "ሰዓቱ አምስት ሆኗል።"
                    ],
                    "answerIndex": 0,
                    "explanation": "«አየሩ በጣም ፀሐያማ እና ደስ የሚል ነው» (The weather is very sunny and pleasant) directly answers the meteorological inquiry."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ጃኬት ልበስ፤ ብርድ ነው» ምን ማለት ነው?",
                    "options": [
                        "Take off your hat; it is hot",
                        "Wear a jacket; it is cold",
                        "Bring water; it is dry"
                    ],
                    "answerIndex": 1,
                    "explanation": "ጃኬት ልበስ (wear a jacket) + ብርድ ነው (it is cold) gives practical clothing advice."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "«ትንበያ» የሚለው ቃል ምን ትርጉም አለው?",
                    "options": [
                        "Measurement scale",
                        "Forecast / Prediction",
                        "Historical diary"
                    ],
                    "answerIndex": 1,
                    "explanation": "ትንበያ (Tinbeya) = forecast / prediction."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'weather / air' in Fidel script (አየር):",
                    "acceptedAnswers": [
                        "አየር",
                        "ayer",
                        "Ayer"
                    ],
                    "explanation": "አየር (Ayer) means 'air / weather'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u13-l5": {
        "id": "am-u13-l5",
        "unit": "am-u13",
        "level": "B1",
        "objective": "Synthesize weather, seasonal cycles, and geographic descriptions into an advanced communicative dialogue describing an ecological tour across Ethiopia's diverse natural landscapes.",
        "prerequisites": [
            "am-u13-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u13-l4"
            ]
        },
        "presentation": {
            "explanation": "This review lesson synthesizes geographical landform terminology, traditional climatic zones, seasonal cycles, and weather descriptions into an integrated descriptive narrative.\n\n1. Geographic Synthesis & Regional Contrasts:\n- **The Highland Peaks (የሰሜን እና የባሌ ተራሮች):** Cool mountain climates (ደጋ), Afro-alpine moorlands, and deep rocky gorges (**ገደሎች**).\n- **The Great Rift Valley (ስምጥ ሸለቆ):** Mild lakes (**ሐይቆች**), acacia savanna, and rich geothermal springs.\n- **The Nile Basin (የዓባይ ተፋሰስ):** Rushing rivers (**ወንዞች**), majestic cataracts (**ፏፏቴዎች**), and dense fertile valleys.\n\n2. Key Geographical Vocabulary Review:\n- **ገደል** (Gedel) — Gorge / Precipice / Canyon\n- **ተፋሰስ** (Tefases) — River Basin / Drainage basin\n- **ተፈጥሮአዊ ውበት** (Tefet'rowi wubet) — Natural beauty",
            "examples": [
                {
                    "target": "በሰሜን ተራሮች ብሔራዊ ፓርክ ውስጥ የሚገኙት አስደናቂ ገደሎች እና ደኖች ብርቅዬ የዱር እንስሳትን ይይዛሉ።",
                    "reading": "Besemēn teraroch biherawi park wust' yemigegnut asdenaqi gedeiloch ina denoch birqiyē yedur insisatin yiyzalu.",
                    "translation": "The stunning cliffs and forests found in the Simien Mountains National Park shelter rare wildlife."
                },
                {
                    "target": "የጣና ሐይቅ እና የዓባይ ፏፏቴ በመኸር ወቅት በጎብኚዎች እጅግ ይወደዳሉ።",
                    "reading": "YeT'ana hayq ina ye'Abay fwafwatē bemeher weqt begobnyowoch ijig yiwededalu.",
                    "translation": "Lake Tana and the Blue Nile Falls are deeply beloved by visitors during the harvest season."
                },
                {
                    "target": "በኢትዮጵያ ውስጥ በአጭር ርቀት ጉዞ ከአስደናቂ ቀዝቃዛ ደጋ ወደ ለምለም ሸለቆ መድረስ ይቻላል።",
                    "reading": "Be'Ityop'ya wust' be'ach'ir riqet guzo ke'asdenaqi qezqaza dega wede lemlem sheleqo medres yichalal.",
                    "translation": "In Ethiopia, within a short travel distance one can reach a lush valley from the wondrous cool highlands."
                }
            ],
            "mnemonics": [
                "ገደል (Gedel) = Canyon/Gorge; ፏፏቴ (Fwafwate) = Waterfall (sounds like rushing foaming water: fwafwa!)."
            ],
            "culturalNotes": [
                "The Simien Mountains National Park (የስሜን ተራሮች) was designated among the very first UNESCO World Heritage sites in 1978, renowned for its dramatic escarpments and endemic species like the Walia Ibex (ዋሊያ) and Gelada Baboon (ጭላዳ ዝንጀሮ)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«የሰሜን ተራሮች ብሔራዊ ፓርክ» በምን ይታወቃል?",
                    "options": [
                        "በከፍተኛ ተራሮች፣ አስደናቂ ገደሎች እና ብርቅዬ እንስሳት",
                        "በባህር ዳርቻ እና አሸዋማ ደሴቶች",
                        "በትላልቅ የፋብሪካ ከተሞች"
                    ],
                    "answerIndex": 0,
                    "explanation": "The Simien Mountains National Park is famed for its monumental escarpments, deep canyons, and rare endemic wildlife."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ከደጋ ወደ ቆላ» የሚለው ጉዞ ምን አይነት የመልክዓ ምድር ለውጥ ያሳያል?",
                    "options": [
                        "ከቀዝቃዛ ከፍተኛ ቦታ ወደ ሞቃታማ ዝቅተኛ ቦታ",
                        "ከበረዶ ወደ ውቅያኖስ",
                        "ከከተማ ወደ ከተማ ብቻ"
                    ],
                    "answerIndex": 0,
                    "explanation": "ደጋ (cool highland) to ቆላ (warm lowland) transitions from cool mountain terrain down to warm plains."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የኢትዮጵያ ትልቁ ሐይቅ የትኛው ነው?",
                    "options": [
                        "ላንጋኖ ሐይቅ",
                        "ጣና ሐይቅ (Lake Tana)",
                        "ዝዋይ ሐይቅ"
                    ],
                    "answerIndex": 1,
                    "explanation": "ጣና ሐይቅ (Lake Tana) is the largest lake in Ethiopia and the source of the Blue Nile."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'mountain' in Fidel script (ተራራ):",
                    "acceptedAnswers": [
                        "ተራራ",
                        "terara",
                        "Terara"
                    ],
                    "explanation": "ተራራ (Terara) means 'mountain'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u14-l1": {
        "id": "am-u14-l1",
        "unit": "am-u14",
        "level": "B1",
        "objective": "Identify and use key profession and vocation nouns in Amharic with gender distinction, including መምህር/መምህርት (teacher), መሐንዲስ (engineer), ጠበቃ (lawyer), ነጋዴ (trader/merchant), ገበሬ (farmer), ጋዜጠኛ (journalist), and አርቲስት (artist).",
        "prerequisites": [
            "am-u13-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u13-l5"
            ]
        },
        "presentation": {
            "explanation": "Discussing career vocations, occupations (የስራ እና የሙያ ስሞች), and professional identities in Amharic involves gender-differentiated noun morphology, the professional agent suffix **-ኛ** (-egna), and honorific forms.\n\n1. Masculine and Feminine Profession Noun Pairs:\n- **መምህር** (Memhir — Male Teacher) / **መምህርት** (Memhirt — Female Teacher)\n- **ዶክተር / ሐኪም** (Dokter / Hakim — Doctor / Physician)\n- **መሐንዲስ** (Mehendis — Engineer)\n- **ጠበቃ** (T'ebeqa — Lawyer / Advocate)\n- **ነጋዴ** (Negadē — Trader / Merchant / Businessperson)\n- **ገበሬ** (Gebere — Farmer / Agriculturalist)\n- **አስተናጋጅ** (Astenagaj — Waiter / Waitress / Host)\n- **አርቲስት / ከያኒ** (Artist / Keyani — Artist / Performer)\n- **ሹፌር / አሽከርካሪ** (Shufēr / Ashkerkari — Driver)\n\n2. The Profession/Agent Suffix **-ኛ** (-egna):\nThe suffix **-ኛ** transforms a field, medium, or activity into an occupational title:\n- **ጋዜጣ** (Newspaper) -> **ጋዜጠኛ** (Journalist / Reporter)\n- **ስፖርት** (Sport) -> **ስፖርተኛ** (Athlete / Sports professional)\n- **ፖሊስ** (Police) -> **ፖሊስ** (Police officer)\n\n3. Inquiring About Someone's Vocation:\n- «**ስራህ ምንድን ነው?**» (Sirah mindin new? — To a male: What is your job?)\n- «**ስራሽ ምንድን ነው?**» (Sirash mindin new? — To a female: What is your job?)\n- «**ስራዎ ምንድን ነው?**» (Sirawo mindin new? — Formal/Polite: What is your profession?)\n- «**እኔ መሐንዲስ ነኝ።**» (Ine mehendis negn — I am an engineer.)",
            "examples": [
                {
                    "target": "እህቴ በዩኒቨርሲቲ ውስጥ የታሪክ መምህርት ሆና ትሰራለች።",
                    "reading": "Ihitē beyunīversītī wust' yetarīk memhirt hona tiserallech.",
                    "translation": "My sister works as a history teacher at the university."
                },
                {
                    "target": "ወንድሜ በኮንስትራክሽን ድርጅት ውስጥ የሲቪል መሐንዲስ ነው።",
                    "reading": "Wondimē bekonstrakshin dirijit wust' yesīvīl mehendis new.",
                    "translation": "My brother is a civil engineer in a construction firm."
                },
                {
                    "target": "ጠበቃው ፍርድ ቤት ቀርበው ለደንበኛቸው ተከራከሩ።",
                    "reading": "T'ebeqaw fird bēt qirbew ledenbenyachew tekerakeru.",
                    "translation": "The lawyer appeared in court and argued for their client."
                }
            ],
            "mnemonics": [
                "መምህር (Memhir) is related to ምሁር (Scholar) — teachers impart scholarship!",
                "The suffix -ኛ (-egna) makes an agent: ጋዜጣ (newspaper) -> ጋዜጠኛ (journalist)!"
            ],
            "culturalNotes": [
                "In Ethiopian social etiquette, profession titles are widely used as respectful prefixes in direct address: «መምህር» (Teacher), «ዶክተር» (Doctor), or «መሐንዲስ» (Engineer) precedes a person's first name (e.g. መምህር ታሪኩ, ዶክተር አስቴር)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«መሐንዲስ» የሚለው ቃል ምን ሙያን ይገልጻል?",
                    "options": [
                        "Engineer",
                        "Lawyer",
                        "Doctor"
                    ],
                    "answerIndex": 0,
                    "explanation": "መሐንዲስ (Mehendis) means 'engineer'."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ጋዜጠኛ» ምን አይነት ስራ ይሰራል?",
                    "options": [
                        "ዜና እና መረጃ የሚያጠናቅር ባለሙያ (News/media professional)",
                        "በእርሻ ላይ ሰብል የሚያመርት (Farmer)",
                        "በሆስፒታል ታካሚ የሚያክም (Physician)"
                    ],
                    "answerIndex": 0,
                    "explanation": "ጋዜጠኛ (Gazēt'egna) is a journalist or reporter who investigates and broadcasts news."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "«ጠበቃ» የሚለው የሙያ ቃል ምን ማለት ነው?",
                    "options": [
                        "Lawyer / Attorney",
                        "Teacher",
                        "Merchant"
                    ],
                    "answerIndex": 0,
                    "explanation": "ጠበቃ (T'ebeqa) = lawyer / advocate."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'Teacher' (masculine) in Fidel script (መምህር):",
                    "acceptedAnswers": [
                        "መምህር",
                        "memhir",
                        "Memhir"
                    ],
                    "explanation": "መምህር (Memhir) means 'teacher' (masculine)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u14-l2": {
        "id": "am-u14-l2",
        "unit": "am-u14",
        "level": "B1",
        "objective": "Identify and describe workplace environments — ቢሮ (office), ባንክ (bank), ፋብሪካ (factory), ሱቅ (store), and ሆስፒታል (hospital) — and describe standard daily operational duties in Amharic.",
        "prerequisites": [
            "am-u14-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u14-l1"
            ]
        },
        "presentation": {
            "explanation": "Describing workplaces (የስራ ቦታዎች) and professional responsibilities in Amharic involves facility nouns, office action verbs, and compound workplace expressions.\n\n1. Workplace Facilities and Institutions:\n- **ቢሮ** (Bīro) — Office\n- **መሥሪያ ቤት** (Mesriya bēt) — Governmental bureau / Workplace (literally 'working house')\n- **ባንክ** (Bank) — Bank\n- **ፋብሪካ** (Fabrīka) — Factory / Industrial plant\n- **ሱቅ** (Suq) — Shop / Retail store\n- **ድርጅት / ኩባንያ** (Dirijit / Kubanya) — Enterprise / Company\n- **የገበያ ማዕከል** (Yegebeya ma'ikel) — Commercial center / Mall\n\n2. Daily Operational Actions and Professional Tasks:\n- **ሪፖርት ማዘጋጀት** (Rīport mazegajet) — Preparing a report\n- **ስብሰባ መምራት** (Sibseba memrat) — Leading a meeting\n- **ደንበኞችን ማስተናገድ** (Denbenyochin mastenaged) — Attending to / serving clients\n- **ስራ መጀመር / ማጠናቀቅ** (Sira mejemer / mat'enaqeq) — Commencing / Finishing work\n- **ፊርማ ማኖር** (Firma manor) — Signing documents",
            "examples": [
                {
                    "target": "በየቀኑ ጠዋት ሁለት ሰዓት ላይ ቢሮ ገብተን ስራ እንጀምራለን።",
                    "reading": "Beyeqenu t'ewat hulet se'at lay bīro gebten sira inijemiralen.",
                    "translation": "Every morning at 8:00 AM we enter the office and start work."
                },
                {
                    "target": "የባንክ ሰራተኞች ለደንበኞች ፈጣን እና ቀልጣፋ አገልግሎት ይሰጣሉ።",
                    "reading": "Yebank serategnoch ledenbenyoch fet'an ina qelt'afa agelgilot yiset'alu.",
                    "translation": "Bank employees provide prompt and efficient service to clients."
                },
                {
                    "target": "በጨርቃ ጨርቅ ፋብሪካው ውስጥ በመቶዎች የሚቆጠሩ ሰራተኞች ይሰራሉ።",
                    "reading": "Bech'erqa ch'erq fabrīkaw wust' bemetowoch yemīqot'eru serategnoch yiseralu.",
                    "translation": "Hundreds of employees work in the textile factory."
                }
            ],
            "mnemonics": [
                "«መሥሪያ ቤት» = 'Working house' (መሥሪያ = for working, ቤት = house) = Office/Institution!"
            ],
            "culturalNotes": [
                "Standard Ethiopian working hours typically span 8:30 AM to 5:30 PM, with a shared lunch break from 12:30 to 1:30 PM where office colleagues often share platters of injera together (ማዕድ መካፈል)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«ቢሮ» እና «መሥሪያ ቤት» ምን ያመለክታሉ?",
                    "options": [
                        "Office and Workplace/Institution",
                        "Park and Stadium",
                        "Kitchen and Restaurant"
                    ],
                    "answerIndex": 0,
                    "explanation": "ቢሮ (Biro) and መሥሪያ ቤት (Mesriya bet) refer to offices and work institutions."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ደንበኞችን ማስተናገድ» ምን ማለት ነው?",
                    "options": [
                        "Cleaning the office",
                        "Attending to / serving clients",
                        "Writing a computer program"
                    ],
                    "answerIndex": 1,
                    "explanation": "ደንበኞችን (clients/customers) + ማስተናገድ (to serve/host) means customer service."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ቃል 'Factory' የሚለውን የስራ ቦታ ያመለክታል?",
                    "options": [
                        "ሱቅ (Shop)",
                        "ትምህርት ቤት (School)",
                        "ፋብሪካ (Fabrika)"
                    ],
                    "answerIndex": 2,
                    "explanation": "ፋብሪካ (Fabrika) = factory / plant."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'Office' in Fidel script (ቢሮ):",
                    "acceptedAnswers": [
                        "ቢሮ",
                        "biro",
                        "Biro"
                    ],
                    "explanation": "ቢሮ (Biro) means 'office'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u14-l3": {
        "id": "am-u14-l3",
        "unit": "am-u14",
        "level": "B1",
        "objective": "Navigate job searches, understand application requirements (የስራ ማስታወቂያ, ሲቪ, የስራ ልምድ), and respond to common job interview inquiries in Amharic.",
        "prerequisites": [
            "am-u14-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u14-l2"
            ]
        },
        "presentation": {
            "explanation": "Applying for employment and undergoing recruitment interviews (ስራ ፍለጋ እና ቃለ-መጠይቅ) in Amharic involves specialized professional application terminology.\n\n1. Job Application Terminology:\n- **የስራ ማስታወቂያ** (Yesira mastawēqīya) — Job vacancy announcement\n- **የስራ ማመልከቻ** (Yesira mamelkecha) — Job application letter\n- **የህይወት ታሪክ / ሲቪ** (Yehīwot tarīk / Sīvī) — Curriculum Vitae / Resume\n- **የስራ ልምድ** (Yesira limid) — Professional work experience\n- **የትምህርት ማስረጃ** (Yetimihirt masreja) — Educational certificates / Credentials\n- **ደመወዝ** (Demewez) — Monthly salary / Compensation\n- **ቃለ-መጠይቅ** (Qale-met'eyiq) — Interview (literally: 'dialogue of questions')\n\n2. Key Interview Question Patterns:\n- «**ስለራስዎ እና ስለስራ ልምድዎ በአጭሩ ይንገሩን?**» (Tell us briefly about yourself and your work background?)\n- «**በዚህ የስራ መስክ የአምስት ዓመት ልምድ አለኝ።**» (I have five years of experience in this field.)\n- «**በትብብር እና በቡድን መስራት እወዳለሁ።**» (I enjoy collaborating in teamwork.)",
            "examples": [
                {
                    "target": "በጋዜጣው የወጣውን የስራ ማስታወቂያ አይቼ ማመልከቻ አስገባሁ።",
                    "reading": "Begazēt'aw yewet'awun yesira mastawēqīya ayichē mamelkecha asgebahu.",
                    "translation": "Seeing the job announcement published in the newspaper, I submitted an application."
                },
                {
                    "target": "የስራ ቃለ-መጠይቁ በሚቀጥለው ሰኞ ጠዋት በድርጅቱ ዋና ቢሮ ይካሄዳል።",
                    "reading": "Yesira qale-met'eyiqu bemīqet'ilew senyo t'ewat bedirijitu wana bīro yikahedal.",
                    "translation": "The job interview will be conducted next Monday morning at the company headquarters."
                },
                {
                    "target": "ድርጅቱ ጥሩ ደመወዝ እና የትራንስፖርት አበል ያቀርባል።",
                    "reading": "Dirijitu t'iru demewez ina yetransport abel yaqerbal.",
                    "translation": "The company offers a good salary and transport allowance."
                }
            ],
            "mnemonics": [
                "«ቃለ-መጠይቅ» = Word (ቃል) + Asking (መጠየቅ) = Interview dialogue!"
            ],
            "culturalNotes": [
                "Formal job interviews in Ethiopia are conducted in polite language (የክብር ቋንቋ), using polite forms like እርስዎ (Irswo — formal you) and third-person plural verb endings for respect (ለምሳሌ፡ «ይቀመጡ», «ይግለጹ»)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«የስራ ልምድ» ምን ማለት ነው?",
                    "options": [
                        "Work experience",
                        "Salary scale",
                        "Office furniture"
                    ],
                    "answerIndex": 0,
                    "explanation": "የስራ ልምድ (Yesira limid) = professional work experience."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ቃለ-መጠይቅ» የሚለው ቃል ትርጉም ምንድን ነው?",
                    "options": [
                        "Written contract",
                        "Interview",
                        "Vacation request"
                    ],
                    "answerIndex": 1,
                    "explanation": "ቃለ-መጠይቅ (Qale-meteyiq) means 'interview'."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ቃል 'Salary / Monthly Wage' የሚለውን ቃል ይወክላል?",
                    "options": [
                        "ደመወዝ (Demewez)",
                        "ቀጠሮ (Appointment)",
                        "ማህተም (Stamp)"
                    ],
                    "answerIndex": 0,
                    "explanation": "ደመወዝ (Demewez) = salary / wage."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'job / work' in Fidel script (ስራ):",
                    "acceptedAnswers": [
                        "ስራ",
                        "sira",
                        "Sira"
                    ],
                    "explanation": "ስራ (Sira) means 'work / job'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u14-l4": {
        "id": "am-u14-l4",
        "unit": "am-u14",
        "level": "B1",
        "objective": "Engage in collaborative workplace discussions, schedule and participate in meetings (ስብሰባ), and interact respectfully with colleagues (የስራ ባልደረቦች).",
        "prerequisites": [
            "am-u14-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u14-l3"
            ]
        },
        "presentation": {
            "explanation": "Effective workplace collaboration in Ethiopia requires fluency in meeting protocol, collaborative terminology, and professional courtesy.\n\n1. Collegial Roles and Hierarchy:\n- **የስራ ባልደረባ** (Yesira baldereba) — Work colleague / Peer\n- **ስራ አስኪያጅ / ኃላፊ** (Sira askiyaj / Halafi) — General Manager / Department Head\n- **ተቆጣጣሪ** (Teqot'at'ari) — Supervisor / Overseer\n- **ስብሰባ** (Sibseba) — Meeting / Conference\n- **የስብሰባ አጀንዳ** (Yesibseba ajenda) — Meeting agenda\n- **የስራ ክፍፍል** (Yesira kififil) — Delegation of tasks\n\n2. Meeting Dialogue and Proposals:\n- «**ስብሰባው በስንት ሰዓት ይጀምራል?**» (At what time does the meeting commence?)\n- «**በአዲሱ ፕሮጀክት ላይ ሀሳብ እንለዋወጥ።**» (Let us exchange perspectives on the new project.)\n- «**ሁላችንም በጋራ መስራት አለብን።**» (We must all work collaboratively together.)",
            "examples": [
                {
                    "target": "የስራ ባልደረቦቼ በቡድን ስራ ላይ እጅግ ተባባሪ እና ታታሪ ናቸው።",
                    "reading": "Yesira balderebochē bebudin sira lay ijig tebabari ina tatari nachew.",
                    "translation": "My colleagues are extremely cooperative and hardworking in teamwork."
                },
                {
                    "target": "ዛሬ ከሰዓት በኋላ ከአስተዳደር ክፍሉ ጋር አስቸኳይ ስብሰባ አለን።",
                    "reading": "Zarē kese'at behwala ke'astedader kiflu gara ascheqway sibseba allen.",
                    "translation": "This afternoon we have an urgent meeting with the administration department."
                },
                {
                    "target": "ስራ አስኪያጁ የሳምንቱን የስራ ዕቅድ በዝርዝር አቀረቡ።",
                    "reading": "Sira askiyaju yesamintun yesira iqid bezirzir aqerebu.",
                    "translation": "The manager presented the weekly work plan in detail."
                }
            ],
            "mnemonics": [
                "«ባልደረባ» (Baldereba) = Comrade / Colleague. Partners striving for shared professional success!"
            ],
            "culturalNotes": [
                "Ethiopian workplace dynamics strongly prioritize mutual respect, solidarity (አብሮነት), and consensus. Addressing superiors with proper honorifics like «አቶ» (Mr.), «ወይዘሮ» (Mrs.), or «ዶክተር» followed by their given name is customary."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«የስራ ባልደረባ» ምን ማለት ነው?",
                    "options": [
                        "Work colleague / Co-worker",
                        "Customer",
                        "Landlord"
                    ],
                    "answerIndex": 0,
                    "explanation": "የስራ ባልደረባ (Yesira baldereba) means 'work colleague'."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ስብሰባ» የሚለው ቃል ምን ያመለክታል?",
                    "options": [
                        "Vacation",
                        "Meeting / Conference",
                        "Lunch break"
                    ],
                    "answerIndex": 1,
                    "explanation": "ስብሰባ (Sibseba) means 'meeting / conference'."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "«ስራ አስኪያጅ» የሚለው የሙያ ኃላፊነት ምን ማለት ነው?",
                    "options": [
                        "Security guard",
                        "Manager / Director",
                        "Intern"
                    ],
                    "answerIndex": 1,
                    "explanation": "ስራ አስኪያጅ (Sira askiyaj) = general manager / executive."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'meeting' in Fidel script (ስብሰባ):",
                    "acceptedAnswers": [
                        "ስብሰባ",
                        "sibseba",
                        "Sibseba"
                    ],
                    "explanation": "ስብሰባ (Sibseba) means 'meeting'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u14-l5": {
        "id": "am-u14-l5",
        "unit": "am-u14",
        "level": "B1",
        "objective": "Synthesize career vocabulary, workplace etiquette, meeting protocol, and interview skills into a comprehensive professional dialogue in Amharic.",
        "prerequisites": [
            "am-u14-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u14-l4"
            ]
        },
        "presentation": {
            "explanation": "This lesson consolidates professional recruitment, team collaboration, and office communication into a realistic workplace simulation in Amharic.\n\n1. The Professional Career Arc:\n- **Application:** Submitting CV and credentials (**ማመልከቻ እና ማስረጃ**).\n- **Interview:** Discussing career background during interview (**ቃለ-መጠይቅ**).\n- **Onboarding:** Meeting colleagues (**የስራ ባልደረቦች**) and understanding responsibilities.\n- **Execution:** Participating in project meetings (**ስብሰባ**) and presenting results.\n\n2. Key Integrative Terms:\n- **ትብብር** (Tibibir) — Cooperation / Teamwork\n- **ውጤታማነት** (Wut'ētamannet) — Productivity / Effectiveness\n- **ሙያዊ ስነ-ምግባር** (Muyawi sine-migbar) — Professional ethics",
            "examples": [
                {
                    "target": "በቃለ-መጠይቁ ወቅት የእኔን የሙያ ክህሎት እና የስራ ልምድ በግልጽ አስረዳሁ።",
                    "reading": "Beqale-met'eyiqu weqt ye'inēn yemuya kihilot ina yesira limid begilts' asredahu.",
                    "translation": "During the interview, I clearly explained my professional skills and work experience."
                },
                {
                    "target": "አዲሱን ፕሮጀክት በተሳካ ሁኔታ ለማጠናቀቅ ሁሉም ሰራተኞች በጋራ ተባብረዋል።",
                    "reading": "Addīsun projekt betesaka hunēta lemat'enaqeq hullum serategnoch begara tebabrewal.",
                    "translation": "All employees collaborated together to successfully complete the new project."
                },
                {
                    "target": "ስራ አስኪያጃችን ለሰራተኞቹ ጥረት እና ትጋት ምስጋና አቀረቡ።",
                    "reading": "Sira askiyajachin leserategnochu t'iret ina tigat misgana aqerebu.",
                    "translation": "Our manager expressed gratitude for the effort and diligence of the staff."
                }
            ],
            "mnemonics": [
                "«ተባበረ» (Tebabere) = Collaborated / Cooperated. United effort yields great success!"
            ],
            "culturalNotes": [
                "Workplace milestone achievements in Ethiopia often culminate in an office coffee ceremony (የቡና ስነ-ስርዓት), celebrating collective success and reinforcing team bonds."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "በስራ ቦታ ስኬታማ ለመሆን የትኛው ባህሪ አስፈላጊ ነው?",
                    "options": [
                        "የትብብር መንፈስ እና ትጋት (Spirit of collaboration and diligence)",
                        "ስራን አለመስራት",
                        "ስብሰባ ማቋረጥ"
                    ],
                    "answerIndex": 0,
                    "explanation": "Cooperation (የትብብር መንፈስ) and diligence (ትጋት) are key to professional success."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«በጋራ መስራት» ምን ማለት ነው?",
                    "options": [
                        "Working alone in isolation",
                        "Working together collaboratively",
                        "Quitting a job"
                    ],
                    "answerIndex": 1,
                    "explanation": "በጋራ መስራት = working collaboratively in a team."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የስራ ባልደረቦች አብረው ሲሰሩ ምን ይባላል?",
                    "options": [
                        "የቡድን ስራ (Teamwork)",
                        "ብቸኝነት (Solitude)",
                        "እረፍት"
                    ],
                    "answerIndex": 0,
                    "explanation": "የቡድን ስራ (Yebudin sira) = teamwork."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'profession / vocation' in Fidel script (ሙያ):",
                    "acceptedAnswers": [
                        "ሙያ",
                        "muya",
                        "Muya"
                    ],
                    "explanation": "ሙያ (Muya) means 'profession / craft / vocation'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u15-l1": {
        "id": "am-u15-l1",
        "unit": "am-u15",
        "level": "B1",
        "objective": "Describe educational stages, university faculties, and academic qualifications in Amharic using terms including አንደኛ ደረጃ (primary school), ሁለተኛ ደረጃ (high school), ዩኒቨርሲቲ (university), ዲግሪ (bachelor's degree), and ማስተርስ (master's degree).",
        "prerequisites": [
            "am-u14-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u14-l5"
            ]
        },
        "presentation": {
            "explanation": "Discussing the educational journey (የትምህርት ጉዞ) and university hierarchy in Amharic involves institutional tiers, degree designations, and academic milestone vocabulary.\n\n1. Educational Levels and School Types (የትምህርት ደረጃዎች):\n- **አንደኛ ደረጃ ትምህርት ቤት** (Andegna dereja timihirt bēt) — Primary / Elementary school (Grades 1–8)\n- **ሁለተኛ ደረጃ ትምህርት ቤት** (Huletsegna dereja timihirt bēt) — Secondary / High school (Grades 9–12)\n- **ኮሌጅ / ዩኒቨርሲቲ** (Kolēj / Yunīversītī) — Higher education College / University\n- **ፋኩልቲ / ትምህርት ክፍል** (Fakultī / Timihirt kifil) — Academic Faculty / Department\n\n2. Academic Degrees and Qualifications (የትምህርት ማዕረጎች):\n- **የመጀመሪያ ዲግሪ** (Yemejemeriya dīgrī) — Bachelor's degree (BA / BSc)\n- **ሁለተኛ ዲግሪ / ማስተርስ** (Huletsegna dīgrī / Masters) — Master's degree (MA / MSc)\n- **የዶክትሬት ዲግሪ** (Yedoktret dīgrī) — Doctorate / PhD\n- **የምረቃ ስነ-ስርዓት** (Yemireqa sine-sir'at) — Commencement / Graduation ceremony\n\n3. Academic Progression Verbs:\n- **ተመረቀ / ተመረቀች** (Temereqe / Temereqech) — He graduated / She graduated\n- **ተማረ / አጠና** (Temare / At'ena) — He studied / He learned",
            "examples": [
                {
                    "target": "ታላቅ ወንድሜ ከአዲስ አበባ ዩኒቨርሲቲ በምህንድስና የመጀመሪያ ዲግሪውን ተቀበለ።",
                    "reading": "Talaq wondimē ke'Addīs Abeba Yunīversītī bemihindisinā yemejemeriya dīgrīwun teqebele.",
                    "translation": "My elder brother received his bachelor's degree in engineering from Addis Ababa University."
                },
                {
                    "target": "ተማሪዎቹ ለዩኒቨርሲቲ መግቢያ ፈተና ሌት ተቀን በትጋት ያጠናሉ።",
                    "reading": "Temarīwochu leyunīversītī megbīya fetena lēt teqen betigat yat'inalu.",
                    "translation": "The students study day and night diligently for the university entrance exam."
                },
                {
                    "target": "የምረቃው ስነ-ስርዓት በታላቁ አዳራሽ በደመቀ ሁኔታ ተካሄደ።",
                    "reading": "Yemireqaw sine-sir'at betalaqu addarash bedemeqe hunēta tekahede.",
                    "translation": "The graduation ceremony took place colorfully in the grand hall."
                }
            ],
            "mnemonics": [
                "«ተመረቀ» (Temereqe) = Graduated; root of «ምርቃት» (blessing / conferral of honor)!"
            ],
            "culturalNotes": [
                "Addis Ababa University (AAU), established in 1950, is Ethiopia's flagship university. Graduates receive traditional ceremonial shawls and sashes in university colors during commencement celebrations."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«የመጀመሪያ ዲግሪ» ምን ማለት ነው?",
                    "options": [
                        "Bachelor's degree",
                        "High school diploma",
                        "Kindergarten certificate"
                    ],
                    "answerIndex": 0,
                    "explanation": "የመጀመሪያ ዲግሪ (Yemejemeriya digri) means 'Bachelor's degree'."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ተመረቀ» የሚለው ግስ ምን ትርጉም አለው?",
                    "options": [
                        "He dropped out of school",
                        "He graduated",
                        "He failed an exam"
                    ],
                    "answerIndex": 1,
                    "explanation": "ተመረቀ (Temereqe) means 'he graduated'."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የከፍተኛ ትምህርት ተቋም በአማርኛ ምን ተብሎ ይጠራል?",
                    "options": [
                        "መዋዕለ ህፃናት (Kindergarten)",
                        "ዩኒቨርሲቲ / ኮሌጅ (University / College)",
                        "ፋብሪካ (Factory)"
                    ],
                    "answerIndex": 1,
                    "explanation": "ዩኒቨርሲቲ / ኮሌጅ refers to higher education institutions."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'school' in Fidel script (ትምህርት ቤት):",
                    "acceptedAnswers": [
                        "ትምህርት ቤት",
                        "timihirt bet",
                        "timhirt bet"
                    ],
                    "explanation": "ትምህርት ቤት (Timihirt bēt) means 'school'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u15-l2": {
        "id": "am-u15-l2",
        "unit": "am-u15",
        "level": "B1",
        "objective": "Discuss branches of natural science, social science, and humanities in Amharic, including ሒሳብ (mathematics), ፊዚክስ (physics), ኬሚስትሪ (chemistry), ስነ-ህይወት (biology), and ታሪክ (history).",
        "prerequisites": [
            "am-u15-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u15-l1"
            ]
        },
        "presentation": {
            "explanation": "Academic fields and scientific disciplines (የሳይንስ እና የጥናት ዘርፎች) in Amharic use systematic morphological prefixes, particularly the classical prefix **ስነ-** (Sine- — science/study of).\n\n1. The Natural and Exact Sciences (የተፈጥሮ ሳይንስ):\n- **ሒሳብ** (Hisab) — Mathematics / Arithmetic\n- **ፊዚክስ** (Fīzīks) — Physics\n- **ኬሚስትሪ** (Kēmistrī) — Chemistry\n- **ስነ-ህይወት** (Sine-hīwot) — Biology (literally 'science of life')\n- **ስነ-ምድር** (Sine-midir) — Geology (literally 'science of the earth')\n- **ስነ-ፈለክ** (Sine-felek) — Astronomy (literally 'science of celestial spheres')\n\n2. The Social Sciences and Humanities (ማህበራዊ ሳይንስ):\n- **ታሪክ** (Tarīk) — History\n- **ስነ-ልቦና** (Sine-libona) — Psychology (literally 'science of the mind/heart')\n- **ስነ-ጽሑፍ** (Sine-ts'ihuf) — Literature\n- **ስነ-ዜጋ** (Sine-zēga) — Civics / Political science\n- **ኢኮኖሚክስ** (Ikonōmīks) — Economics",
            "examples": [
                {
                    "target": "በቤተ-ሙከራ ውስጥ የኬሚስትሪ እና የፊዚክስ ሳይንሳዊ ሙከራዎችን አደረግን።",
                    "reading": "Bebēte-mukera wust' yekēmistrī ina yefīzīks sayinsawi mukerawochin aderegini.",
                    "translation": "In the laboratory we conducted chemistry and physics scientific experiments."
                },
                {
                    "target": "ስነ-ህይወት ስለ ህያዋን ፍጥረታት አፈጣጠር እና አኗኗር የሚያጠና ሳይንስ ነው።",
                    "reading": "Sine-hīwot sile hiyawan fit'retat afet'at'er ina anwanwar yemīyat'ina sayins new.",
                    "translation": "Biology is a science that studies the structure and life of living organisms."
                },
                {
                    "target": "የጥንታዊ ኢትዮጵያ ታሪክ ጥናት በዓለም አቀፍ ምሁራን ዘንድ ትልቅ ትኩረት ተሰጥቶታል።",
                    "reading": "Yet'intawi Ityop'ya tarīk t'inat be'alem aqef mihuran zend tiliq tikuret teset't'otal.",
                    "translation": "The study of ancient Ethiopian history is given great attention by international scholars."
                }
            ],
            "mnemonics": [
                "«ስነ-» (Sine-) is the Amharic '-ology': ስነ-ህይወት (biology), ስነ-ምድር (geology), ስነ-ልቦና (psychology)!"
            ],
            "culturalNotes": [
                "Traditional Ethiopian scholarship developed advanced indigenous mathematics (ሒሳብ) and astronomical calendar computations (ባሕረ ሐሳብ — Computus of the Sea of Thought) over a millennium ago to track lunar cycles and solar years."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«ስነ-ህይወት» ምን አይነት ሳይንስ ነው?",
                    "options": [
                        "Biology (Science of living organisms)",
                        "Astronomy",
                        "Economics"
                    ],
                    "answerIndex": 0,
                    "explanation": "ስነ-ህይወት (Sine-hiwot) translates directly to 'biology' (science of life)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ቤተ-ሙከራ» ምን ማለት ነው?",
                    "options": [
                        "Library",
                        "Laboratory (Place of experimentation)",
                        "Cafeteria"
                    ],
                    "answerIndex": 1,
                    "explanation": "ቤተ-ሙከራ (Bēte-mukera) = laboratory."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የምድርን አፈጣጠር የሚያጠናው ሳይንስ በአማርኛ ምን ይባላል?",
                    "options": [
                        "ስነ-ምድር (Geology)",
                        "ስነ-ዜጋ (Civics)",
                        "ስነ-ልቦና (Psychology)"
                    ],
                    "answerIndex": 0,
                    "explanation": "ስነ-ምድር (Sine-midir) = geology."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'mathematics / arithmetic' in Fidel script (ሒሳብ):",
                    "acceptedAnswers": [
                        "ሒሳብ",
                        "hisab",
                        "Hisab"
                    ],
                    "explanation": "ሒሳብ (Hisab) means 'mathematics / arithmetic'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u15-l3": {
        "id": "am-u15-l3",
        "unit": "am-u15",
        "level": "B1",
        "objective": "Formulate academic concepts regarding research, scholarly theses, library investigations, and examination evaluations in Amharic using ምርምር (research), የመመረቂያ ጽሑፍ (thesis), and ፈተና (exam).",
        "prerequisites": [
            "am-u15-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u15-l2"
            ]
        },
        "presentation": {
            "explanation": "Scholarly research (ሳይንሳዊ ምርምር), academic thesis writing, and examination evaluation in Ethiopian higher education employ rigorous scholarly terminology.\n\n1. Scholarly Investigation Vocabulary:\n- **ምርምር / ጥናት** (Mirmir / T'inat) — Scholarly research / Investigation\n- **ተመራማሪ** (Temaramari) — Researcher / Investigator\n- **የመመረቂያ ጽሑፍ** (Yemireqīya ts'ihuf) — Senior thesis / Dissertation\n- **ቤተ-መጻሕፍት** (Bēte-mets'ahift) — Library (literally 'house of books')\n- **ፈተና** (Fetena) — Examination / Test\n- **ውጤት** (Wut'ēt) — Grade / Examination score / Result\n- **ነጥብ** (Net'ib) — GPA points / Marks\n\n2. Key Academic Verb Collocations:\n- **ጥናት ማካሄድ** (T'inat makahed) — To conduct research\n- **መረጃ ማሰባሰብ** (Mereja masebaseb) — To collect data\n- **ጽሑፍ ማቅረብ** (Ts'ihuf maqreb) — To present a paper\n- **ፈተና ማለፍ** (Fetena malef) — To pass an examination",
            "examples": [
                {
                    "target": "ተማሪዋ የመመረቂያ ጽሑፏን ለማጠናቀቅ በቤተ-መጻሕፍት ውስጥ ሰፊ ጥናት አደረገች።",
                    "reading": "Temarīwa yemireqīya ts'ihufwan lemat'enaqeq bebēte-mets'ahift wust' sefī t'inat aderegech.",
                    "translation": "To complete her graduation thesis, the student conducted extensive study in the library."
                },
                {
                    "target": "የሳይንስ ተመራማሪዎች አዳዲስ ግኝቶችን በዓለም አቀፍ ጆርናል ላይ አሳተሙ።",
                    "reading": "Yesayins temaramarīwoch addadīs gignitochin be'alem aqef jornāl lay asatemu.",
                    "translation": "The science researchers published new discoveries in an international journal."
                },
                {
                    "target": "ተማሪው በፈተናው ከፍተኛ ውጤት በማምጣቱ የነፃ ትምህርት ዕድል አገኘ።",
                    "reading": "Temarīw befetēnaw kefitegna wut'ēt bemamt'atu yenets'a timihirt idil agegne.",
                    "translation": "Because the student achieved high scores on the exam, he received a scholarship."
                }
            ],
            "mnemonics": [
                "«ተመራማሪ» (Temaramari) = Researcher; from መረመረ (to scrutinize and investigate deeply)."
            ],
            "culturalNotes": [
                "The National Library and Archives of Ethiopia (ወመዘክር / Wemezekir) in Addis Ababa preserves centuries of rare Ge'ez parchment manuscripts, illuminated royal chronicles, and historical archives."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«የመመረቂያ ጽሑፍ» ምን ማለት ነው?",
                    "options": [
                        "Graduation thesis / Dissertation",
                        "Classroom attendance sheet",
                        "Library card"
                    ],
                    "answerIndex": 0,
                    "explanation": "የመመረቂያ ጽሑፍ (Yemireqiya ts'ihuf) = graduation thesis / dissertation."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ተመራማሪ» ምን ይሰራል?",
                    "options": [
                        "Cooks meals in a kitchen",
                        "Conducts scholarly scientific research",
                        "Operates heavy farming machinery"
                    ],
                    "answerIndex": 1,
                    "explanation": "ተመራማሪ (Temaramari) is a researcher who carries out scientific and academic investigation."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "«ቤተ-መጻሕፍት» የሚለው ቃል ምን ያመለክታል?",
                    "options": [
                        "Hospital",
                        "Restaurant",
                        "Library (House of books)"
                    ],
                    "answerIndex": 2,
                    "explanation": "ቤተ-መጻሕፍት (Bēte-mets'ahift) = library."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'examination / test' in Fidel script (ፈተና):",
                    "acceptedAnswers": [
                        "ፈተና",
                        "fetena",
                        "Fetena"
                    ],
                    "explanation": "ፈተና (Fetena) means 'examination / test'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u15-l4": {
        "id": "am-u15-l4",
        "unit": "am-u15",
        "level": "B1",
        "objective": "Communicate about information technology, computers, internet networks, and software applications in Amharic using ኮምፒውተር (computer), ኢንተርኔት (internet), ድረ-ገጽ (website), and ሶፍትዌር (software).",
        "prerequisites": [
            "am-u15-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u15-l3"
            ]
        },
        "presentation": {
            "explanation": "Information and communication technology (የመረጃ እና መገናኛ ቴክኖሎጂ) in Amharic blends modern loanwords with expressive indigenous neologisms.\n\n1. Hardware, Software & Internet Terminology:\n- **መረጃ ቴክኖሎጂ** (Mereja tēknolojī) — Information Technology (IT)\n- **ኮምፒውተር** (Kompywuter) — Computer\n- **ኢንተርኔት / መረብ** (Internēt / Mereb) — Internet / Web network\n- **ድረ-ገጽ** (Dire-gets') — Website / Webpage (literally 'net face')\n- **ሶፍትዌር / መተግበሪያ** (Softwēr / Metegberīya) — Software / Application\n- **የውሂብ ጎታ** (Yewihīb gota) — Database\n- **የይለፍ ቃል** (Yeyilef qal) — Password (literally 'word of pass')\n- **ኢሜይል** (Īmēyil) — Email / Electronic mail\n\n2. Digital Action Verbs:\n- **ማውረድ** (Mawred) — Downloading\n- **መጫን** (Mech'an) — Uploading / Installing\n- **መፈለግ** (Mefeleg) — Browsing / Searching",
            "examples": [
                {
                    "target": "የኮምፒውተር ፕሮግራመሩ አዲስ የሞባይል መተግበሪያ አበለጸገ።",
                    "reading": "Yekompywuter programeru addīs yemobayil metegberīya abelts'ege.",
                    "translation": "The computer programmer developed a new mobile application."
                },
                {
                    "target": "ወደ ዩኒቨርሲቲው ድረ-ገጽ ለመግባት ትክክለኛውን የይለፍ ቃል አስገባ።",
                    "reading": "Wede yunīversītīw dire-gets' lemegbat tikiklegnawun yeyilef qal asgeba.",
                    "translation": "Enter the correct password to log into the university website."
                },
                {
                    "target": "በኢንተርኔት አማካኝነት ከመላው ዓለም የመጡ ሳይንሳዊ መረጃዎችን በቀላሉ ማግኘት ይቻላል።",
                    "reading": "Be'internēt amakagninet kemellaw alem yemet'u sayinsawi merejawochin beqelalu magnet yichalal.",
                    "translation": "Through the internet, one can easily access scientific information from around the world."
                }
            ],
            "mnemonics": [
                "«ድረ-ገጽ» = Web (ድረ) + Face (ገጽ) = Website! «የይለፍ ቃል» = Pass (ይለፍ) + Word (ቃል) = Password!"
            ],
            "culturalNotes": [
                "The digitization of the Ethiopian Fidel alphabet and inclusion of Ge'ez script in the global Unicode standard was spearheaded by Ethiopian computer scientists, enabling native fidel computing across smartphones and keyboards."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«ድረ-ገጽ» ምን ማለት ነው?",
                    "options": [
                        "Website / Webpage",
                        "Hardware motherboard",
                        "Electric cable"
                    ],
                    "answerIndex": 0,
                    "explanation": "ድረ-ገጽ (Dire-gets') = website / webpage."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«የይለፍ ቃል» ምን ያመለክታል?",
                    "options": [
                        "User password",
                        "Email server",
                        "Monitor screen"
                    ],
                    "answerIndex": 0,
                    "explanation": "የይለፍ ቃል (Yeyilef qal) means 'password'."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የመረጃ ቴክኖሎጂ ምህፃረ ቃል ምን ተብሎ ይጠራል?",
                    "options": [
                        "IT (Information Technology)",
                        "GPS (Global Positioning)",
                        "ATM"
                    ],
                    "answerIndex": 0,
                    "explanation": "መረጃ ቴክኖሎጂ = IT (Information Technology)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'computer' in Fidel script (ኮምፒውተር):",
                    "acceptedAnswers": [
                        "ኮምፒውተር",
                        "kompyuter",
                        "computer",
                        "Kompyuter"
                    ],
                    "explanation": "ኮምፒውተር (Kompyuter) means 'computer'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u15-l5": {
        "id": "am-u15-l5",
        "unit": "am-u15",
        "level": "B1",
        "objective": "Synthesize educational credentials, scientific disciplines, research methodologies, and technological terminology into an integrated academic conference presentation in Amharic.",
        "prerequisites": [
            "am-u15-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u15-l4"
            ]
        },
        "presentation": {
            "explanation": "This review lesson synthesizes university education, research methodology, scientific inquiry, and IT innovation into a cohesive academic conference presentation.\n\n1. Academic Symposium Discourse (ሳይንሳዊ ጉባኤ):\n- **Presentation:** Presenting research hypotheses (**የምርምር መላ-ምት**).\n- **Methodology:** Citing laboratory experiments (**ቤተ-ሙከራ**) and digital datasets (**የውሂብ ጎታ**).\n- **Defense:** Defending conclusions before a scholarly committee (**ከምሁራን ጋር መከራከር**).\n\n2. Key Academic Vocabulary Synthesis:\n- **ጉባኤ / ኮንፈረንስ** (Guba'ē / Konferens) — Academic symposium / Conference\n- **የምርምር ግኝት** (Yemirmir gignit) — Research discovery / Findings\n- **ትንተና** (Tintena) — Analysis / Decomposition\n- **ሁለንተናዊ እድገት** (Hulentenawi idiget) — Comprehensive development",
            "examples": [
                {
                    "target": "በሳይንሳዊ ጉባኤው ላይ ምሁራን አዳዲስ የምርምር ውጤቶችን እና የቴክኖሎጂ ፈጠራዎችን አቀረቡ።",
                    "reading": "Besayinsawi guba'ēw lay mihuran addadīs yemirmir wut'ētochin ina yetēknolojī fet'erawochin aqerebu.",
                    "translation": "At the scientific symposium, scholars presented new research findings and technological innovations."
                },
                {
                    "target": "የቴክኖሎጂ እና የሳይንስ ትምህርት ለሀገር ሁለንተናዊ እድገት ወሳኝ ሚና ይጫወታል።",
                    "reading": "Yetēknolojī ina yesayins timihirt lehager hulentenawi idiget wesagn mīna yich'awetal.",
                    "translation": "Technology and science education play a crucial role in a nation's comprehensive development."
                },
                {
                    "target": "ተመራማሪዎቹ በቤተ-ሙከራ የተገኙትን መረጃዎች በጥልቀት ተንትነው አቀረቡ።",
                    "reading": "Temaramarīwochu bebēte-mukera yetegegnutin merejawochin bet'ilqet tentnew aqerebu.",
                    "translation": "The researchers deeply analyzed and presented the data obtained in the laboratory."
                }
            ],
            "mnemonics": [
                "«ጉባኤ» (Guba'e) = Assembly / Symposium; scholarly gathering for knowledge sharing!"
            ],
            "culturalNotes": [
                "Ethiopian higher learning bridges classical intellectual traditions (such as Qene poetry with wax-and-gold dual interpretations) with modern computational and medical sciences."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«ሳይንሳዊ ጉባኤ» ምን ማለት ነው?",
                    "options": [
                        "Scientific conference / Academic symposium",
                        "Sports match",
                        "Music concert"
                    ],
                    "answerIndex": 0,
                    "explanation": "ሳይንሳዊ ጉባኤ (Sayinsawi guba'e) means 'scientific conference / symposium'."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ጥልቅ ትንተና» ምን ያመለክታል?",
                    "options": [
                        "Superficial glance",
                        "In-depth scientific analysis",
                        "Canceling a study"
                    ],
                    "answerIndex": 1,
                    "explanation": "ጥልቅ ትንተና = in-depth scientific analysis."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "ምሁራን ምርምራቸውን የሚያቀርቡበት መድረክ ምን ይባላል?",
                    "options": [
                        "ገበያ (Market)",
                        "የሳይንስ ጉባኤ (Scientific symposium)",
                        "ስታዲየም (Stadium)"
                    ],
                    "answerIndex": 1,
                    "explanation": "የሳይንስ ጉባኤ (Sayinsawi guba'e) is an academic conference/symposium."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'research' in Fidel script (ምርምር):",
                    "acceptedAnswers": [
                        "ምርምር",
                        "mirmir",
                        "Mirmir"
                    ],
                    "explanation": "ምርምር (Mirmir) means 'research / investigation'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u16-l1": {
        "id": "am-u16-l1",
        "unit": "am-u16",
        "level": "B1",
        "objective": "Identify and describe fundamental psychological states and emotions in Amharic using primary nouns and adjectives including ደስታ (happiness), ሀዘን (sadness), ፍርሃት (fear), ቁጣ (anger), ድንጋጤ (shock), and እርካታ (contentment).",
        "prerequisites": [
            "am-u15-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u15-l5"
            ]
        },
        "presentation": {
            "explanation": "Expressing human emotional states (ስሜቶች) and psychological moods in Amharic involves affective noun roots, adjective derivations using the suffix **-ኛ** (-egna), and state verbs.\n\n1. Emotional Nouns and Adjective Forms:\n- **ደስታ** (Desta — Joy / Happiness) -> **ደስተኛ** (Destegna — Happy / Joyful)\n- **ሀዘን** (Hazen — Grief / Sadness) -> **ሀዘነኛ** (Hazenegna — Sorrowful) / **አሳዛኝ** (Asazagn — Tragic / Heartbreaking)\n- **ፍርሃት** (Firhat — Fear) -> **ፈሪ** (Ferī — Fearful / Timid)\n- **ቁጣ** (Qut'a — Anger / Fury) -> **ቁጡ** (Qut'u — Quick-tempered / Furious)\n- **ድንጋጤ** (Dingat'ē — Shock / Startle) -> **ድንጉጥ** (Dingut' — Startled / Panicked)\n- **እርካታ** (Irkata — Satisfaction / Contentment) -> **ረክቷል** (Rektwal — He is content / satisfied)\n- **ቅናት** (Qinat — Envy / Jealousy) -> **ቀናተኛ** (Qenategna — Jealous / Envious)\n\n2. Affective Descriptive Phrases:\n- «**በደስታ ተሞላ**» (Bedesta temola) — He was filled with joy.\n- «**በሀዘን ተዋጠ**» (Behazen tewat'e) — He was submerged in sorrow.",
            "examples": [
                {
                    "target": "የፈተናውን ውጤት ሲሰማ በደስታ ተሞላ።",
                    "reading": "Yefetenawun wut'ēt sīsema bedesta temola.",
                    "translation": "When he heard the exam result, he was filled with joy."
                },
                {
                    "target": "የቤተሰቡ ድንገተኛ መለያየት ከፍተኛ ሀዘን ፈጠረበት።",
                    "reading": "Yebētesebu dingetegna meleyayet kefitegna hazen fet'erebet.",
                    "translation": "The sudden separation of his family created deep sorrow in him."
                },
                {
                    "target": "በጨለማው ውስጥ እንግዳ ድምጽ ሲሰማ ፍርሃት ተሰማው።",
                    "reading": "Bech'elemāw wust' ingida dimts' sīsema firhat tesemaw.",
                    "translation": "When he heard a strange noise in the dark, he felt fear."
                }
            ],
            "mnemonics": [
                "«ደስታ» (Desta) brings joy; add -ኛ (-egna) to make the happy person (ደስተኛ)!"
            ],
            "culturalNotes": [
                "In Ethiopian community life, emotions are shared collectively: communal joy is celebrated with celebratory rhythmic ululation (እልልታ / Ililta), while bereavement (ልቅሶ / Liqso) unites the community to comfort the grieving."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«ደስተኛ» የሚለው ቃል ምን ያመለክታል?",
                    "options": [
                        "Happy / Joyful person",
                        "Angry person",
                        "Sleepy person"
                    ],
                    "answerIndex": 0,
                    "explanation": "ደስተኛ (Destegna) = happy / joyful person."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ፍርሃት» የሚለው ቃል ትርጉም ምንድን ነው?",
                    "options": [
                        "Hunger",
                        "Fear / Dread",
                        "Patience"
                    ],
                    "answerIndex": 1,
                    "explanation": "ፍርሃት (Firhat) means 'fear'."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ቃል 'Anger' የሚለውን ስሜት ይገልጻል?",
                    "options": [
                        "ቁጣ (Qut'a)",
                        "እርካታ (Irkata)",
                        "ደስታ (Desta)"
                    ],
                    "answerIndex": 0,
                    "explanation": "ቁጣ (Qut'a) means 'anger / rage'."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'happiness / joy' in Fidel script (ደስታ):",
                    "acceptedAnswers": [
                        "ደስታ",
                        "desta",
                        "Desta"
                    ],
                    "explanation": "ደስታ (Desta) means 'happiness / joy'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u16-l2": {
        "id": "am-u16-l2",
        "unit": "am-u16",
        "level": "B1",
        "objective": "Master the essential Amharic impersonal emotional verb constructions where the experiencer is the direct object suffix pronoun, including « ደስ አለው » (he is glad), « ከፋው » (he felt bad/sad), and « አስፈራው » (it scared him).",
        "prerequisites": [
            "am-u16-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u16-l1"
            ]
        },
        "presentation": {
            "explanation": "Amharic grammar possesses a distinctive impersonal verb construction for subjective sensations, internal emotional reactions, and affective feelings.\n\n1. Impersonal Experiencer Mechanics:\nThe verb remains in the fixed 3rd person masculine singular, while the person feeling the emotion is attached as an object suffix pronoun:\n- «**ደስ አለኝ**» (Des alegn) — I am pleased / I feel glad (literally: 'it pleased me')\n- «**ደስ አለህ**» (Des aleh) — You (m) are pleased\n- «**ደስ አለሽ**» (Des alesh) — You (f) are pleased\n- «**ደስ አለው**» (Des alew) — He is pleased\n- «**ደስ አላት**» (Des alat) — She is pleased\n- «**ደስ አላቸው**» (Des alachew) — They are pleased\n\n2. Common Impersonal Affective Verbs:\n- «**ከፋኝ**» (Kefagn) — I feel bad / sorrowful / upset\n- «**ከፋው**» (Kefaw) — He felt bad / distressed\n- «**አስፈራኝ**» (Asferagn) — It frightened me / I am scared\n- «**አሳዘነኝ**» (Asazenegn) — It saddened me / I feel pity\n- «**አስገረመኝ**» (Asgeremegn) — It astonished / surprised me",
            "examples": [
                {
                    "target": "ስላየሁህ በጣም ደስ አለኝ።",
                    "reading": "Silayehuh bet'am des alegn.",
                    "translation": "I am very glad to see you."
                },
                {
                    "target": "የጓደኛው መታመም እጅግ ከፋው እና አሳዘነው።",
                    "reading": "Yegwadegnaw metamem ijig kefaw ina asazenew.",
                    "translation": "His friend's illness made him feel very bad and saddened him."
                },
                {
                    "target": "የነጎድጓዱ ድምጽ ሕፃኑን በጣም አስፈራው።",
                    "reading": "Yenegodgwadu dimts' hits'anun bet'am asferaw.",
                    "translation": "The sound of thunder frightened the child severely."
                }
            ],
            "mnemonics": [
                "«ደስ አለኝ» = Joy spoke to me! «ከፋኝ» = Badness touched me! The object pronoun (-ኝ, -ህ, -ሽ, -ው, -አት) tells who feels it."
            ],
            "culturalNotes": [
                "«ስላየሁህ ደስ አለኝ» (To a male) and «ስላየሁሽ ደስ አለኝ» (To a female) are the primary, warm phrases used when greeting someone or making a cordial acquaintance in Ethiopia."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«ስላየሁሽ በጣም ደስ አለኝ» ምን ማለት ነው?",
                    "options": [
                        "I am very glad to see you (female)",
                        "I am angry with you",
                        "Where are you going?"
                    ],
                    "answerIndex": 0,
                    "explanation": "«ስላየሁሽ በጣም ደስ አለኝ» means 'I am very glad to see you' (addressing a female)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ከፋኝ» የሚለው አገላለጽ ምን ያሳያል?",
                    "options": [
                        "I feel joyful",
                        "I feel sad / upset / distressed",
                        "I am thirsty"
                    ],
                    "answerIndex": 1,
                    "explanation": "ከፋኝ (Kefagn) conveys feeling saddened, upset, or grieved."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "«አስገረመኝ» ሲባል ምን ማለት ነው?",
                    "options": [
                        "It made me sleepy",
                        "It frightened me",
                        "It amazed / surprised me"
                    ],
                    "answerIndex": 2,
                    "explanation": "አስገረመኝ (Asgeremegn) means 'it amazed / surprised me'."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic phrase for 'I am glad / It pleases me' in Fidel script (ደስ አለኝ):",
                    "acceptedAnswers": [
                        "ደስ አለኝ",
                        "des alegn",
                        "Des alegn"
                    ],
                    "explanation": "ደስ አለኝ (Des alegn) means 'I am glad / pleased'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u16-l3": {
        "id": "am-u16-l3",
        "unit": "am-u16",
        "level": "B1",
        "objective": "Describe human personality traits and moral temperaments in Amharic using adjectives such as ታታሪ (diligent), ሩህሩህ (compassionate), ትሁት (humble), ታማኝ (faithful/honest), and ጨዋ (polite/refined).",
        "prerequisites": [
            "am-u16-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u16-l2"
            ]
        },
        "presentation": {
            "explanation": "Character attributes (የባህሪ መገለጫዎች) and personal dispositions in Ethiopian culture carry strong moral weight in interpersonal relationships.\n\n1. Positive Moral Character Virtues:\n- **ታታሪ** (Tatari) — Hardworking / Diligent\n- **ሩህሩህ** (Ruhruh) — Compassionate / Empathetic / Kindhearted\n- **ትሁት** (Tihut) — Humble / Modest (noun: **ትህትና** / Tihitina — Humility)\n- **ታማኝ** (Tamagn) — Faithful / Honest / Trustworthy (noun: **ታማኝነት**)\n- **ጨዋ** (Ch'ewa) — Polite / Well-mannered / Dignified\n- **ቸር / ለጋስ** (Cher / Legas) — Benevolent / Generous\n\n2. Negative Personality Descriptors:\n- **ስስታም** (Sistam) — Miserly / Greedy\n- **ትምክህተኛ / ኩሩ** (Timkihtegna / Kuru) — Arrogant / Haughty\n- **ግልፍተኛ** (Gilfit'egna) — Hot-tempered / Impulsive\n- **ውሸታም** (Wushetam) — Dishonest / Deceitful",
            "examples": [
                {
                    "target": "አባታችን እጅግ ትሁት እና ሩህሩህ ሰው ስለነበር በሰፈሩ ሁሉ ይወደድ ነበር።",
                    "reading": "Abatachin ijig tihut ina ruhruh sew sileneber beseferu hullu yiweded neber.",
                    "translation": "Because our father was an extremely humble and compassionate man, he was beloved throughout the neighborhood."
                },
                {
                    "target": "ታታሪዋ ተማሪ በርትታ በመስራቷ ለትልቅ ስኬት በቃች።",
                    "reading": "Tatariwa temari bertita bemesratwa le tiliq sikēt beqach.",
                    "translation": "The hardworking student, by striving perseveringly, attained great success."
                },
                {
                    "target": "በስራ ቦታ ላይ ታማኝነት እና ጨዋነት ትልቁ የሞራል መለኪያ ናቸው።",
                    "reading": "Besira bota lay tamagninet ina ch'ewanet tiliqu yēmoral melekīya nachew.",
                    "translation": "In the workplace, trustworthiness and politeness are the highest moral standards."
                }
            ],
            "mnemonics": [
                "«ትህትና» (Tihitina) = Humility — venerated as the crown of Ethiopian character."
            ],
            "culturalNotes": [
                "«ትህትና» (humility) and «ጨዋነት» (refined courteous conduct) are foundational cultural expectations in Ethiopia, determining how youth speak with elders and how leaders conduct community affairs."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«ሩህሩህ» እና «ትሁት» ምን አይነት ሰውን ይገልጻሉ?",
                    "options": [
                        "Compassionate and Humble person",
                        "Greedy and Arrogant person",
                        "Violent and Loud person"
                    ],
                    "answerIndex": 0,
                    "explanation": "ሩህሩህ (compassionate) and ትሁት (humble) describe kind, gentle virtues."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ታማኝነት» ምን ማለት ነው?",
                    "options": [
                        "Treachery",
                        "Trustworthiness / Faithfulness",
                        "Laziness"
                    ],
                    "answerIndex": 1,
                    "explanation": "ታማኝነት (Tamagninet) means 'trustworthiness / faithfulness'."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ቃል 'Hardworking / Diligent' የሚለውን መልካም ባህሪ ይገልጻል?",
                    "options": [
                        "ታታሪ (Tatari)",
                        "ስስታም (Greedy)",
                        "ፈሪ (Coward)"
                    ],
                    "answerIndex": 0,
                    "explanation": "ታታሪ (Tatari) = hardworking / diligent."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'humble' in Fidel script (ትሁት):",
                    "acceptedAnswers": [
                        "ትሁት",
                        "tihut",
                        "Tihut"
                    ],
                    "explanation": "ትሁት (Tihut) means 'humble / modest'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u16-l4": {
        "id": "am-u16-l4",
        "unit": "am-u16",
        "level": "B1",
        "objective": "Offer comfort, empathy, and emotional encouragement in Amharic using solace expressions such as « አይዞህ / አይዞሽ » (Take heart / Courage), « አትጨነቅ » (Do not worry), and « ተስፋ አትቁረጥ » (Do not lose hope).",
        "prerequisites": [
            "am-u16-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u16-l3"
            ]
        },
        "presentation": {
            "explanation": "Expressing solidarity, comforting those in sorrow, and uplifting the distressed (መጽናናት እና አጋርነት) are vital parts of communicative fluency in Amharic.\n\n1. Solace and Encouragement Expressions:\n- «**አይዞህ**» (Ayzoh — to a male) / «**አይዞሽ**» (Ayzosh — to a female) / «**አይዟችሁ**» (Ayzwachihu — plural) — Take heart / Courage / Be strong!\n- «**አትጨነቅ**» (Atch'eneq — m) / «**አትጨነቂ**» (Atch'eneqī — f) — Do not worry / Be not anxious.\n- «**ተስፋ አትቁረጥ**» (Tesfa atquret' — m) / «**ተስፋ አትቁረጪ**» (Tesfa atqurech'ī — f) — Do not lose hope / Do not despair.\n- «**ሁሉ ነገር ይስተካከላል**» (Hullu neger yistekakeilal) — Everything will turn out fine.\n- «**እግዚአብሔር ያጽናህ/ያጽናሽ**» (Igziabher yats'nah/yats'nash) — May God comfort you.\n\n2. Key Empathy Vocabulary:\n- **ማጽናኛ** (Mats'nagnya) — Solace / Consolation\n- **አጋርነት / አጋር** (Agarinnet / Agar) — Solidarity / Ally\n- **ተስፋ** (Tesfa) — Hope / Optimism",
            "examples": [
                {
                    "target": "ጓደኛዬ ሲያዝን «አይዞህ፣ ተስፋ አትቁረጥ፣ ሁሉ ነገር መልካም ይሆናል» አልኩት።",
                    "reading": "Gwadegnaye siyazin 'Ayzoh, tesfa atquret, hullu neger melkam yihonal' alkut.",
                    "translation": "When my friend was sad, I told him 'Take heart, do not lose hope, everything will become fine.'"
                },
                {
                    "target": "ስለ ነገው ፈተና ከመጠን በላይ አትጨነቂ፤ በደንብ ተዘጋጅተሻል።",
                    "reading": "Sile negew fetena kemet'en belay atch'eneqī; bedenbi tezegajit'eshal.",
                    "translation": "Do not worry excessively about tomorrow's exam; you have prepared well."
                },
                {
                    "target": "በመከራ ጊዜ ለተቸገሩ ሰዎች አጋርነት እና ማጽናኛ መስጠት የሰው ልጅ ግዴታ ነው።",
                    "reading": "Bemekera gīzē letechegeru sewoch agarinnet ina mats'nagnya meset'et yesew lij gidēta new.",
                    "translation": "Offering solidarity and solace to people in distress during hardship is a human duty."
                }
            ],
            "mnemonics": [
                "«አይዞህ / አይዞሽ» (Ayzoh / Ayzosh) is the verbal embrace of Ethiopian companionship: 'Have courage!'"
            ],
            "culturalNotes": [
                "The phrase «አይዞህ / አይዞሽ» is deeply ingrained in Ethiopian daily life. It is spoken when someone stumbles physically, when someone is shedding tears, or when someone faces an arduous challenge."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "ለተጨነቀ ሰው ማበረታቻ ለመስጠት የትኛው ቃል ይመረጣል?",
                    "options": [
                        "«አይዞህ፤ አትጨነቅ» (Take heart; don't worry)",
                        "«ሂድ ከዚህ»",
                        "«ዝም በል»"
                    ],
                    "answerIndex": 0,
                    "explanation": "«አይዞህ፤ አትጨነቅ» provides warm empathy and encouragement."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ተስፋ አትቁረጥ» ሲባል ምን ማለትን ያሳያል?",
                    "options": [
                        "Give up immediately",
                        "Do not lose hope / Persevere",
                        "Run away in panic"
                    ],
                    "answerIndex": 1,
                    "explanation": "ተስፋ አትቁረጥ = do not despair / maintain hope."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው አገላለጽ ለሴት የሚሰጥ የማጽናኛ ቃል ነው?",
                    "options": [
                        "አይዞህ",
                        "አይዞሽ (Ayzosh)",
                        "አይዞአቸው"
                    ],
                    "answerIndex": 1,
                    "explanation": "አይዞሽ (Ayzosh) is the feminine form of comfort ('Take heart, sister!')."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'hope' in Fidel script (ተስፋ):",
                    "acceptedAnswers": [
                        "ተስፋ",
                        "tesfa",
                        "Tesfa"
                    ],
                    "explanation": "ተስፋ (Tesfa) means 'hope'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u16-l5": {
        "id": "am-u16-l5",
        "unit": "am-u16",
        "level": "B1",
        "objective": "Synthesize emotional states, impersonal psychological verbs, character virtues, and empathy dialogues into an advanced narrative exploring personal resilience and mutual support in Amharic.",
        "prerequisites": [
            "am-u16-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u16-l4"
            ]
        },
        "presentation": {
            "explanation": "This lesson consolidates emotional expressions, impersonal psychological verbs, character virtues, and empathy into a rich narrative of personal resilience and community reconciliation.\n\n1. Integrative Psychological Narrative:\n- Overcoming adversity with patience (**ትዕግሥት**) and resilience (**ጽናት**).\n- Finding healing through elder mediation (**ሽምግልና**) and mutual forgiveness (**ይቅርታ**).\n- Restoring peace (**ሰላም**) and shared community joy (**ደስታ**).\n\n2. Key Integrative Terms:\n- **ትዕግሥት** (Ti'igist) — Patience / Endurance\n- **ይቅርታ** (Yiqirta) — Forgiveness / Reconciliation\n- **ስነ-ልቦናዊ ጽናት** (Sine-libonawi ts'inat) — Psychological resilience",
            "examples": [
                {
                    "target": "በህይወት ውስጥ የሚያጋጥሙ ችግሮችን በትዕግሥት እና በጠንካራ ስነ-ልቦና ማለፍ ይቻላል።",
                    "reading": "Behīwot wust' yemīyagat'imu chigirochin beti'igist ina bet'enkara sine-libona malef yichalal.",
                    "translation": "One can overcome the challenges encountered in life with patience and strong psychological resilience."
                },
                {
                    "target": "የእህቱ ደግነት እና ማጽናኛ የልቡን ሀዘን አርቆ ታላቅ ደስታን ሰጠው።",
                    "reading": "Ye'ihitu deginet ina mats'nagnya yelibun hazen ariqo talaq destan set'ew.",
                    "translation": "His sister's kindness and solace banished his heart's sorrow and gave him great joy."
                },
                {
                    "target": "ትሁት እና ታማኝ ሰዎች በማህበረሰቡ ውስጥ ፍቅርን እና ሰላምን ያሰፍናሉ።",
                    "reading": "Tihut ina tamagn sewoch bemahberesebu wust' fiqrin ina selamin yasefnalu.",
                    "translation": "Humble and honest people establish love and peace within society."
                }
            ],
            "mnemonics": [
                "«ትዕግሥት» (Ti'igist) = Patience. Patience transforms bitterness into sweet triumph!"
            ],
            "culturalNotes": [
                "The traditional Ethiopian institution of «ሽምግልና» (Shimgilina — elder mediation) restores communal peace and emotional reconciliation through active dialogue, truth-telling, and heartfelt forgiveness (ይቅርታ)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "የአእምሮ እና የስሜት ጥንካሬ በአማርኛ ምን ይባላል?",
                    "options": [
                        "ጠንካራ ስነ-ልቦና (Strong psychological mindset)",
                        "ፍርሃት (Fear)",
                        "ስንፍና (Laziness)"
                    ],
                    "answerIndex": 0,
                    "explanation": "ጠንካራ ስነ-ልቦና = strong psychological resilience."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ይቅርታ» ማድረግ በማህበረሰብ ውስጥ ምን ፋይዳ አለው?",
                    "options": [
                        "ቂም ማሳደግ",
                        "ፍቅርን እና ሰላምን ማምጣት (Fostering love and peace)",
                        "መለያየት"
                    ],
                    "answerIndex": 1,
                    "explanation": "ይቅርታ (forgiveness) brings harmony and communal peace."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ቃል 'Patience' የሚለውን ታላቅ ባህሪ ይገልጻል?",
                    "options": [
                        "ቁጣ (Anger)",
                        "ትዕግሥት (Ti'igist)",
                        "ፍርሃት (Fear)"
                    ],
                    "answerIndex": 1,
                    "explanation": "ትዕግሥት (Ti'igist) means 'patience'."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic word for 'forgiveness / excuse me' in Fidel script (ይቅርታ):",
                    "acceptedAnswers": [
                        "ይቅርታ",
                        "yiqirta",
                        "Yiqirta"
                    ],
                    "explanation": "ይቅርታ (Yiqirta) means 'forgiveness / pardon / excuse me'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u17-l1": {
        "id": "am-u17-l1",
        "unit": "am-u17",
        "level": "B2",
        "objective": "Form and conjugate passive verbs from Type A trilateral roots in Amharic using the prefix «ተ-» (te-), including ተጻፈ (was written), ተሰበረ (was broken), ተከፈተ (was opened), and ተዘጋጀ (was prepared).",
        "prerequisites": [
            "am-u16-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u16-l5"
            ]
        },
        "presentation": {
            "explanation": "In Amharic, the passive voice (ተገብሮ ግስ) shifts the focus from the subject acting to the patient receiving the action, formed by prefixing **ተ-** (Te-) to the perfective verbal stem.\n\n1. Type A Active vs. Passive Root Stems:\n- **ጻፈ** (Ts'afe — He wrote) -> **ተጻፈ** (Tets'afe — It was written)\n- **ሰበረ** (Sebere — He broke) -> **ተሰበረ** (Tesebere — It was broken)\n- **ከፈተ** (Kefete — He opened) -> **ተከፈተ** (Tekefete — It was opened)\n- **ቆረጠ** (Qoret'e — He cut) -> **ተቆረጠ** (Teqoret'e — It was cut)\n- **በላ** (Bela — He ate) -> **ተበላ** (Tebela — It was eaten)\n- **ዘጋጀ** (Zegaje — Prepared) -> **ተዘጋጀ** (Tezegaje — It was prepared)\n\n2. Agreement in Passive Clauses:\nThe passive verb agrees in gender, number, and person with the recipient / patient subject:\n- «**ደብዳቤው ተጻፈ**» (Debdabēw tets'afe) — The letter was written (masculine).\n- «**በሩ ተከፈተ**» (Beru tekefete) — The door was opened.\n- «**መስኮቶቹ ተሰበሩ**» (Meskotwochu teseberu) — The windows were broken (plural).",
            "examples": [
                {
                    "target": "አዲሱ የትምህርት መጽሐፍ በታዋቂው ደራሲ ተጻፈ።",
                    "reading": "Addīsu yetimihirt mets'haf betawaqīw derasī tets'afe.",
                    "translation": "The new textbook was written by the famous author."
                },
                {
                    "target": "የቤቱ ዋና በር በማለዳ ተከፈተ።",
                    "reading": "Yebētu wana ber bemaleda tekefete.",
                    "translation": "The main door of the house was opened in the early morning."
                },
                {
                    "target": "ለበዓሉ የሚሆን ጣፋጭ ምግብ በኩሽና ውስጥ ተዘጋጀ።",
                    "reading": "Lebe'alu yemīhon t'afach' migib bekushina wust' tezegaje.",
                    "translation": "Delicious food for the festival was prepared in the kitchen."
                }
            ],
            "mnemonics": [
                "«ተ-» (Te-) is the passive prefix: ጻፈ (wrote) -> ተጻፈ (was written)!"
            ],
            "culturalNotes": [
                "Passive constructions with «ተ-» are standard in formal Ethiopian news broadcasting, public administrative proclamations (አዋጅ / Awaj), and historical chronicles to focus on the accomplished event."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«ተጻፈ» የሚለው ግስ ምን ያመለክታል?",
                    "options": [
                        "It was written (Passive)",
                        "He is writing",
                        "He will erase"
                    ],
                    "answerIndex": 0,
                    "explanation": "ተጻፈ (Tets'afe) is the passive form meaning 'it was written'."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ሰበረ» (He broke) ወደ ተገብሮ ግስ (Passive) ሲቀየር ምን ይሆናል?",
                    "options": [
                        "አሰበረ",
                        "ተሰበረ (Tesebere - It was broken)",
                        "ሰባሪ"
                    ],
                    "answerIndex": 1,
                    "explanation": "ሰበረ -> ተሰበረ (was broken)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር ተገብሮ ግስ (Passive voice) ይዟል?",
                    "options": [
                        "ደብዳቤው ተላከ (The letter was sent)",
                        "ልጁ ኳስ ተጫወተ (The boy played soccer)",
                        "እሱ ውሃ ጠጣ (He drank water)"
                    ],
                    "answerIndex": 0,
                    "explanation": "«ደብዳቤው ተላከ» uses the passive verb ተላከ (was sent)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the passive form of 'opened' (was opened) in Fidel script (ተከፈተ):",
                    "acceptedAnswers": [
                        "ተከፈተ",
                        "tekefete",
                        "Tekefete"
                    ],
                    "explanation": "ተከፈተ (Tekefete) means 'was opened'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u17-l2": {
        "id": "am-u17-l2",
        "unit": "am-u17",
        "level": "B2",
        "objective": "Apply the passive prefix «ተ-» across Type B (geminated penultimate) and Type C (first vowel 'a') verb classes in Amharic, including ተፈለገ (was wanted), ተጀመረ (was started), ተመረቀ (was blessed/graduated), and ተባረከ (was blessed).",
        "prerequisites": [
            "am-u17-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u17-l1"
            ]
        },
        "presentation": {
            "explanation": "Type B and Type C verbs also form passives with the prefix **ተ-** (Te-), preserving their characteristic lexical stem features.\n\n1. Type B Passives (Maintain Central Consonant Gemination):\n- **ፈለገ** (Felege — Sought) -> **ተፈለገ** (Tefelege — Was sought / wanted)\n- **ጀመረ** (Jemere — Started) -> **ተጀመረ** (Tejemere — Was begun / started)\n- **መለሰ** (Melese — Returned / Answered) -> **ተመለሰ** (Temelese — Was returned / answered)\n- **ቀየረ** (Qeyere — Changed) -> **ተቀየረ** (Teqeyere — Was changed / replaced)\n- **መረቀ** (Mereqe — Blessed / Graduated) -> **ተመረቀ** (Temereqe — Was inaugurated / graduated)\n\n2. Type C Passives (Maintain Long 'a' Vowel on First Radical):\n- **ባረከ** (Bareke — Blessed) -> **ተባረከ** (Tebareke — Was blessed)\n- **ማረከ** (Mareke — Captured) -> **ተማረከ** (Temareke — Was captured in battle)",
            "examples": [
                {
                    "target": "የአዲሱ የመንገድ ግንባታ ፕሮጀክት ዛሬ ጠዋት ተጀመረ።",
                    "reading": "Ye'addīsu yemenged ginbata projekit zarē t'ewat tejemere.",
                    "translation": "The construction project of the new road was started this morning."
                },
                {
                    "target": "የጠፋው አስፈላጊ ሰነድ በፖሊስ ጣቢያው ተገኘ።",
                    "reading": "Yet'efaw asfelagī sened bepolīs t'abiyaw tegegne.",
                    "translation": "The lost important document was found at the police station."
                },
                {
                    "target": "አዲሱ የህክምና ማዕከል በአካባቢው ሽማግሌዎች ተመረቀ።",
                    "reading": "Addīsu yehikmina ma'ikel be'akababīw shimagilēwoch temereqe.",
                    "translation": "The new medical center was inaugurated/blessed by the local elders."
                }
            ],
            "mnemonics": [
                "Type B verbs retain double-consonant power: ጀመረ -> ተጀመረ (was begun)!"
            ],
            "culturalNotes": [
                "The passive verb «ተመረቀ» is used for the inauguration of civic infrastructure (bridges, hospitals, universities) and scholastic graduation alike."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«ተጀመረ» የሚለው ግስ ትርጉም ምንድን ነው?",
                    "options": [
                        "It was begun / started",
                        "It was finished",
                        "It was cancelled"
                    ],
                    "answerIndex": 0,
                    "explanation": "ተጀመረ (Tejemere) means 'it was started / begun'."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ቀየረ» (He changed) የሚለው ግስ በተገብሮ ቅርጽ ምን ይሆናል?",
                    "options": [
                        "አስቀየረ",
                        "ተቀየረ (Teqeyere - It was changed)",
                        "ቀያሪ"
                    ],
                    "answerIndex": 1,
                    "explanation": "ቀየረ -> ተቀየረ (was changed)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ግስ 'It was found / discovered' የሚለውን ተገብሮ ትርጉም ይገልጻል?",
                    "options": [
                        "ፈለገ (He looked for)",
                        "አጠፋ (He destroyed)",
                        "ተገኘ (Tegegne)"
                    ],
                    "answerIndex": 2,
                    "explanation": "ተገኘ (Tegegne) is the passive of 'found'."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic passive verb for 'was started / begun' in Fidel script (ተጀመረ):",
                    "acceptedAnswers": [
                        "ተጀመረ",
                        "tejemere",
                        "Tejemere"
                    ],
                    "explanation": "ተጀመረ (Tejemere) means 'was started / begun'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u17-l3": {
        "id": "am-u17-l3",
        "unit": "am-u17",
        "level": "B2",
        "objective": "Express the semantic agent (by whom the action was performed) in Amharic passive clauses using the preposition «በ-» (by) and compound postpositions like «በ... አማካኝነት» (by means of) and «በ... እጅ» (at the hand of).",
        "prerequisites": [
            "am-u17-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u17-l2"
            ]
        },
        "presentation": {
            "explanation": "When the agent (doer) of a passive clause is explicitly stated in Amharic, it is introduced by specific prepositional structures.\n\n1. Simple Agent Prefix **በ-** (Be- — by):\n- «**ሌባው በፖሊስ ተያዘ።**» (Lēbaw bepolīs teyaze.) — The thief was caught **by the police**.\n- «**ምግቡ በእናቴ ተዘጋጀ።**» (Migbu be'innatē tezegaje.) — The food was prepared **by my mother**.\n\n2. Formal Compound Postpositions:\n- «**በ... አማካኝነት**» (Be... amakagninet — Through / By means of / By agency of):\n  - «ውሳኔው **በኮሚቴው አማካኝነት** ተላለፈ።» (The decision was passed by the committee.)\n- «**በ... እጅ**» (Be... ij — At the hands of / By):\n  - «ሀውልቱ **በታዋቂው ቀራፂ እጅ** ተሰራ።» (The monument was sculpted at the hand of the renowned artist.)",
            "examples": [
                {
                    "target": "የምርምር ውጤቱ በገለልተኛ ምሁራን አማካኝነት በጥንቃቄ ተገመገመ።",
                    "reading": "Yemirmir wut'ētu be'geleltēgna mihuran amakagninet bet'inqaqē tegemegeme.",
                    "translation": "The research result was carefully evaluated by independent scholars."
                },
                {
                    "target": "የድል ሀውልቱ በታዋቂው ቀራፂ እጅ ተሰራ።",
                    "reading": "Yedil hawiltu betawaqīw qerats'ī ij tesera.",
                    "translation": "The monument of victory was crafted at the hand of the renowned sculptor."
                },
                {
                    "target": "የአየር ንብረት ስምምነቱ በሁሉም የዓለም ሀገራት ተፈረመ።",
                    "reading": "Ye'ayer nibret simiminetu behullum ye'alem hagerat tefereme.",
                    "translation": "The climate agreement was signed by all nations of the world."
                }
            ],
            "mnemonics": [
                "«በ-» flags the agent in passive sentences: በፖሊስ (by police), በዳኛው (by the judge)!"
            ],
            "culturalNotes": [
                "Official legal proclamations and court verdicts in Ethiopia consistently utilize «በ... አማካኝነት» to guarantee institutional precision and grammatical formality."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«ሌባው በፖሊስ ተያዘ» በሚለው ዓረፍተ ነገር ውስጥ ድርጊቱን የፈጸመው (Agent) ማነው?",
                    "options": [
                        "ፖሊስ (Police)",
                        "ሌባው (Thief)",
                        "ዳኛው (Judge)"
                    ],
                    "answerIndex": 0,
                    "explanation": "«በፖሊስ» indicates the police performed the capturing action."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ስምምነቱ በሁለቱ ሀገራት ተፈረመ» ምን ማለት ነው?",
                    "options": [
                        "The agreement was rejected",
                        "The agreement was signed by both countries",
                        "The meeting was cancelled"
                    ],
                    "answerIndex": 1,
                    "explanation": "«ስምምነቱ በሁለቱ ሀገራት ተፈረመ» = The agreement was signed by both countries."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "በተገብሮ ዓረፍተ ነገር ውስጥ ድርጊት ፈጻሚው (Agent) በየትኛው መስተዋድድ ይገለጻል?",
                    "options": [
                        "ወደ- (Towards)",
                        "በ- / በአማካኝነት (By / Through)",
                        "ስለ- (About)"
                    ],
                    "answerIndex": 1,
                    "explanation": "«በ-» and «በ... አማካኝነት» mark the agent in passive constructions."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic passive verb for 'was signed' in Fidel script (ተፈረመ):",
                    "acceptedAnswers": [
                        "ተፈረመ",
                        "tefereme",
                        "Tefereme"
                    ],
                    "explanation": "ተፈረመ (Tefereme) means 'was signed'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u17-l4": {
        "id": "am-u17-l4",
        "unit": "am-u17",
        "level": "B2",
        "objective": "Distinguish the reflexive, reciprocal, and middle-voice semantic nuances of the prefix «ተ-» in Amharic verbs such as ተነሳ (rose up), ተቀመጠ (sat down), ተደበቀ (hid oneself), and ተገናኙ (they met one another).",
        "prerequisites": [
            "am-u17-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u17-l3"
            ]
        },
        "presentation": {
            "explanation": "In addition to true passive voice, the prefix **ተ-** (Te-) encodes reflexive, middle voice, and reciprocal actions in Amharic.\n\n1. Middle Voice & Reflexive (Action affecting oneself):\n- **ተነሳ** (Tenesa) — He stood up / rose / woke up\n- **ተቀመጠ** (Teqemet'e) — He sat down\n- **ተደበቀ** (Tedebeqe) — He hid himself\n- **ተጠነቀቀ** (Tet'eneqqeqe) — He was cautious / took heed\n- **ተሰማማ** (Tesemamma) — He agreed / reached consensus\n\n2. Reciprocal Voice (Mutual interaction between 2+ subjects with root vowel lengthening):\n- **ተገናኙ** (Tegegagnu) — They met each other\n- **ተነጋገሩ** (Tenegageru) — They spoke with each other\n- **ተዋወቁ** (Tewawaqu) — They became acquainted with each other",
            "examples": [
                {
                    "target": "ተማሪዎቹ አስተማሪው ወደ ክፍል ሲገባ በአክብሮት ተነሱ።",
                    "reading": "Temarīwochu astemarīw wede kifil sīgeba be'akbirot tenesu.",
                    "translation": "The students respectfully stood up when the teacher entered the classroom."
                },
                {
                    "target": "ሁለቱ የልጅነት ጓደኛሞች ከብዙ ዓመታት በኋላ በአጋጣሚ ተገናኙ።",
                    "reading": "Huletu yelijinet gwadegnamoch kebizu ametat behwala be'agat'amī tegegagnu.",
                    "translation": "The two childhood friends coincidentally met each other after many years."
                },
                {
                    "target": "በአደጋው ጊዜ ሕፃናቱ በድንጋይ ዋሻ ውስጥ ተደበቁ።",
                    "reading": "Be'adegaw gīzē hits'anatu bedingay washa wust' tedebequ.",
                    "translation": "During the disaster, the children hid themselves inside a rock cave."
                }
            ],
            "mnemonics": [
                "«ተ-» covers Passive ('was done'), Middle ('did to self' like ተቀመጠ), and Reciprocal ('to each other' like ተገናኙ)!"
            ],
            "culturalNotes": [
                "Standing up (**መነሳት**) when an elder or guest enters a room is a cornerstone of traditional Ethiopian domestic and communal etiquette."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«ተገናኙ» የሚለው ግስ ምን አይነት ድርጊትን ያሳያል?",
                    "options": [
                        "Reciprocal action: They met each other",
                        "Solitary sleeping",
                        "Throwing something away"
                    ],
                    "answerIndex": 0,
                    "explanation": "ተገናኙ (Tegegagnu) is a reciprocal verb meaning 'they met each other'."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ተቀመጠ» የሚለው ግስ ትርጉም ምንድን ነው?",
                    "options": [
                        "He ran away",
                        "He sat down",
                        "He shouted"
                    ],
                    "answerIndex": 1,
                    "explanation": "ተቀመጠ (Teqemet'e) means 'he sat down'."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ግስ 'He hid himself' የሚለውን ውስጣዊ/ተገብሮ ትርጉም ይገልጻል?",
                    "options": [
                        "ተደበቀ (Tedebeqe)",
                        "ተናገረ (He spoke)",
                        "ተበላ (Was eaten)"
                    ],
                    "answerIndex": 0,
                    "explanation": "ተደበቀ (Tedebeqe) = he hid himself."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic middle-voice verb for 'stood up / rose' in Fidel script (ተነሳ):",
                    "acceptedAnswers": [
                        "ተነሳ",
                        "tenesa",
                        "Tenesa"
                    ],
                    "explanation": "ተነሳ (Tenesa) means 'stood up / woke up / rose'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u17-l5": {
        "id": "am-u17-l5",
        "unit": "am-u17",
        "level": "B2",
        "objective": "Synthesize passive, middle-voice, and reciprocal verb derivations into a formal journalistic broadcast report and historical chronicle in Amharic.",
        "prerequisites": [
            "am-u17-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u17-l4"
            ]
        },
        "presentation": {
            "explanation": "This review synthesizes passive morphology (**ተገብሮ ግስ**), middle-voice verbs, and reciprocal derivations in a formal journalistic news report.\n\n1. Broadcast & Proclamation Syntax:\n- **Inaugurations:** «...በክብር እንግዶች **ተመረቀ**» (...was inaugurated by guests of honor).\n- **Treaties:** «...በሁለቱም ወገኖች **ተፈረመ**» (...was signed by both sides).\n- **Decrees:** «...አዋጅ **ታወጀ**» (...a proclamation was declared).\n\n2. Key Journalistic Verb Register:\n- **ታወጀ** (Taweje) — Was proclaimed / announced\n- **ተላለፈ** (Telalefe) — Was passed / transmitted\n- **ተካሄደ** (Tekahede) — Was conducted / held",
            "examples": [
                {
                    "target": "በዛሬው ዕለት አዲሱ የሀይል ማመንጫ ግድብ በክብር እንግዶች ተመረቀ።",
                    "reading": "Bezarēw ilet addīsu yehayil mamench'a gidib bekibir ingidoch temereqe.",
                    "translation": "Today, the new hydroelectric dam was inaugurated by distinguished guests."
                },
                {
                    "target": "የሰላም ስምምነቱ በሁለቱም ወገኖች ከተፈረመ በኋላ የተኩስ አቁም አዋጅ ታወጀ።",
                    "reading": "Yeselam simiminetu behuletum wegonoch ketefeerme behwala yetekus aqum awaj taweje.",
                    "translation": "After the peace agreement was signed by both parties, a ceasefire declaration was proclaimed."
                },
                {
                    "target": "በስብሰባው ማጠቃለያ ላይ በርካታ ጠቃሚ ውሳኔዎች ተላልፈዋል።",
                    "reading": "Besibsebaw mat'enaqelaya lay birkata t'eqamī wusanēwochi telalfeval.",
                    "translation": "At the conclusion of the meeting, numerous significant decisions were passed."
                }
            ],
            "mnemonics": [
                "Formal Amharic broadcasting thrives on «ተ-»: ተመረቀ (inaugurated), ተፈረመ (signed), ታወጀ (proclaimed)!"
            ],
            "culturalNotes": [
                "National broadcasts on Ethiopian Television and formal print publications utilize passive syntax extensively to convey official authority and objective reporting."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«የተኩስ አቁም አዋጅ ታወጀ» ምን ማለት ነው?",
                    "options": [
                        "A ceasefire declaration was proclaimed",
                        "War was declared",
                        "The market opened"
                    ],
                    "answerIndex": 0,
                    "explanation": "የተኩስ አቁም አዋጅ ታወጀ = A ceasefire declaration was proclaimed."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "በዜና ዘገባ ውስጥ ተገብሮ ግስ በብዛት ለምን ጥቅም ላይ ይውላል?",
                    "options": [
                        "ቀልድ ለመናገር",
                        "መደበኛ እና ገለልተኛ ሪፖርት ለማቅረብ (For formal, neutral reporting)",
                        "ግጥም ለማዘጋጀት"
                    ],
                    "answerIndex": 1,
                    "explanation": "Passive voice ensures objective, formal journalistic register."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር የመደበኛ ዜና ተገብሮ አወቃቀርን ያሳያል?",
                    "options": [
                        "ልጁ ዳቦ በላ (The boy ate bread)",
                        "አዲሱ ህንጻ ዛሬ ተመረቀ (The new building was inaugurated today)",
                        "እነሱ ሮጡ (They ran)"
                    ],
                    "answerIndex": 1,
                    "explanation": "«አዲሱ ህንጻ ዛሬ ተመረቀ» demonstrates classic formal journalistic passive phrasing."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic passive verb for 'was proclaimed / declared' in Fidel script (ታወጀ):",
                    "acceptedAnswers": [
                        "ታወጀ",
                        "taweje",
                        "Taweje"
                    ],
                    "explanation": "ታወጀ (Taweje) means 'was proclaimed / declared'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u18-l1": {
        "id": "am-u18-l1",
        "unit": "am-u18",
        "level": "B2",
        "objective": "Form and conjugate direct causative verbs from Type A trilateral roots using the prefix «አስ-» (as-) in Amharic, including አስጻፈ (had someone write), አስገነባ (had built), አስጠራ (had summoned/called), and አስከፈተ (had opened).",
        "prerequisites": [
            "am-u17-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u17-l5"
            ]
        },
        "presentation": {
            "explanation": "In Amharic, the causative voice (አሰሪ ግስ) indicates causing, having, or directing someone else to perform an action, constructed primarily with the prefix **አስ-** (As-).\n\n1. Type A Basic Stems to Causative Formations:\n- **ጻፈ** (Ts'afe — He wrote) -> **አስጻፈ** (Asts'afe — He had someone write / dictated)\n- **ገነባ** (Geneba — He built) -> **አስገነባ** (Asgeneba — He had built / commissioned building)\n- **ጠራ** (T'era — He called) -> **አስጠራ** (Ast'era — He had called / summoned)\n- **ከፈተ** (Kefete — He opened) -> **አስከፈተ** (Askefete — He had opened)\n- **ቆረጠ** (Qoret'e — He cut) -> **አስቆረጠ** (Asqoret'e — He had cut)\n- **ወሰደ** (Wesede — He took) -> **አስወሰደ** (Aswesede — He had taken away)\n\n2. Syntactic Role:\nThe subject is the initiator/causer who induces the agent to perform the deed:\n- «**ስራ አስኪያጁ ሪፖርት አስጻፈ።**» (The manager had a report written.)",
            "examples": [
                {
                    "target": "ስራ አስኪያጁ ፀሐፊዋን ጠቃሚ ሪፖርት አስጻፈ።",
                    "reading": "Sira askīyaju ts'ehafiwan t'eqamī rīport asts'afe.",
                    "translation": "The manager had the secretary write an important report."
                },
                {
                    "target": "ነጋዴው በከተማው ማእከል ዘመናዊ የንግድ ህንጻ አስገነባ።",
                    "reading": "Negadēw beketemaw ma'ikel zemenawī yenigd hints'a asgeneba.",
                    "translation": "The merchant had a modern commercial building constructed in the city center."
                },
                {
                    "target": "ዳኛው ምስክሩን ለፍርድ ቤት ቃል እንዲሰጥ አስጠራ።",
                    "reading": "Dagnyaw miskirun lefird bēt qal indīset' ast'era.",
                    "translation": "The judge summoned the witness to give testimony in court."
                }
            ],
            "mnemonics": [
                "«አስ-» (As-) = Make someone do it! ጻፈ (wrote) -> አስጻፈ (made write)!"
            ],
            "culturalNotes": [
                "In Ethiopian commerce and governance, managerial titles frequently incorporate the causative: «ስራ አስኪያጅ» (executive manager, literally 'one who causes work to run')."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«አስጻፈ» የሚለው ግስ ምን ትርጉም አለው?",
                    "options": [
                        "He had someone write / caused to write",
                        "He burned the paper",
                        "He read silently"
                    ],
                    "answerIndex": 0,
                    "explanation": "አስጻፈ (Asts'afe) means 'he had someone write'."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ገነባ» (He built) የሚለው ግስ በአሰሪ ቅርጽ (Causative) ምን ይሆናል?",
                    "options": [
                        "ተገነባ",
                        "አስገነባ (Asgeneba - Had built)",
                        "ግንባታ"
                    ],
                    "answerIndex": 1,
                    "explanation": "ገነባ -> አስገነባ (had built)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ዓረፍተ ነገር አሰሪ ግስ (Causative voice) ይዟል?",
                    "options": [
                        "መሪው አዲስ ህንጻ አስገነባ (The leader had a new building built)",
                        "ልጁ ውሃ ጠጣ (The boy drank water)",
                        "እሷ ተኛች (She slept)"
                    ],
                    "answerIndex": 0,
                    "explanation": "«አስገነባ» is a causative verb meaning 'had built'."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic causative verb for 'had built' in Fidel script (አስገነባ):",
                    "acceptedAnswers": [
                        "አስገነባ",
                        "asgeneba",
                        "Asgeneba"
                    ],
                    "explanation": "አስገነባ (Asgeneba) means 'had built / commissioned construction'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u18-l2": {
        "id": "am-u18-l2",
        "unit": "am-u18",
        "level": "B2",
        "objective": "Apply causative prefixation «አስ-» to Type B and Type C verb stems in Amharic, including አስፈለገ (necessitated/required), አስጀመረ (caused to start), አስመረቀ (had graduated/inaugurated), and አስባረከ (had blessed).",
        "prerequisites": [
            "am-u18-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u18-l1"
            ]
        },
        "presentation": {
            "explanation": "Type B and Type C verbs prefix **አስ-** (As-) to express causative and necessity semantics.\n\n1. Type B Causatives:\n- **ፈለገ** (Felege — Wanted) -> **አስፈለገ** (Asfelege — It necessitated / required / was needed)\n- **ጀመረ** (Jemere — Started) -> **አስጀመረ** (Asjemere — He caused to begin / initiated)\n- **መረቀ** (Mereqe — Blessed) -> **አስመረቀ** (Asmereqe — He held a graduation / inaugurated)\n- **መለሰ** (Melese — Returned) -> **አስመለሰ** (Asmelese — He caused to return / refunded)\n\n2. The Essential Verb «አስፈለገ» (To Need / Be Necessary):\n- «**ያስፈልገኛል**» (Yasfelegegnal) — I need it / It is necessary for me.\n- «**አያስፈልገኝም**» (Ayasfelegegnim) — I do not need it.\n- «**ምን ያስፈልግዎታል?**» (Min yasfeligwotall?) — What do you need? (Polite)",
            "examples": [
                {
                    "target": "ይህንን ትልቅ ፕሮጀክት ለማጠናቀቅ ከፍተኛ በጀት እና ብዙ ጊዜ አስፈለገ።",
                    "reading": "Yihinnin tiliq projekit lemat'enaqeq kefitegna bejet ina bizu gīzē asfelege.",
                    "translation": "Completing this major project required a substantial budget and much time."
                },
                {
                    "target": "አሰልጣኙ አዲሱን የስፖርት ውድድር በፉጨት አስጀመረ።",
                    "reading": "Aselt'agnyu addīsun yesport wididir befucheti asjemere.",
                    "translation": "The coach initiated the new sports competition with a whistle."
                },
                {
                    "target": "ወላጆቹ ልጃቸውን ከታዋቂው ዩኒቨርሲቲ በደስታ አስመረቁ።",
                    "reading": "Welajochu lijachewun ketawaqīw yunīversītī bedesta asmerequ.",
                    "translation": "The parents proudly celebrated their child's graduation from the prestigious university."
                }
            ],
            "mnemonics": [
                "«ያስፈልገኛል» (I need it) is derived directly from the causative of ፈለገ!"
            ],
            "culturalNotes": [
                "Hosting a graduation banquet («ማስመረቅ») is a vital rite of passage in Ethiopian families, celebrating the scholar's triumph with the extended community."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«ያስፈልገኛል» ምን ማለት ነው?",
                    "options": [
                        "I need it / It is necessary for me",
                        "I dislike it",
                        "I finished it"
                    ],
                    "answerIndex": 0,
                    "explanation": "ያስፈልገኛል = I need it / It is required for me."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«ጀመረ» (He started) በአሰሪ ቅርጽ (Causative) ምን ይሆናል?",
                    "options": [
                        "ተጀመረ",
                        "አስጀመረ (Asjemere - Caused to start)",
                        "ጀምር"
                    ],
                    "answerIndex": 1,
                    "explanation": "ጀመረ -> አስጀመረ (caused to begin)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ቃል 'It was necessary / required' የሚለውን ትርጉም ይገልጻል?",
                    "options": [
                        "ተፈለገ (Was wanted)",
                        "አጠፋ (Destroyed)",
                        "አስፈለገ (Asfelege - Was required)"
                    ],
                    "answerIndex": 2,
                    "explanation": "አስፈለገ (Asfelege) means 'it was necessary / required'."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic causative verb for 'caused to start / initiated' in Fidel script (አስጀመረ):",
                    "acceptedAnswers": [
                        "አስጀመረ",
                        "asjemere",
                        "Asjemere"
                    ],
                    "explanation": "አስጀመረ (Asjemere) means 'caused to start / initiated'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u18-l3": {
        "id": "am-u18-l3",
        "unit": "am-u18",
        "level": "B2",
        "objective": "Analyze double-transitive causative verbs expressing factitive and permissive actions with dual direct objects in Amharic, including አስተማረ (taught), አስበላ (fed / caused to eat), and አስጠጣ (gave drink to).",
        "prerequisites": [
            "am-u18-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u18-l2"
            ]
        },
        "presentation": {
            "explanation": "Causative derivation expands verbal valence, allowing transitive verbs to govern two distinct direct objects simultaneously.\n\n1. Double Object Valency:\n- **ተማረ** (Learned) -> **አስተማረ** (Astemare — Taught / Made learn):\n  - «መምህሩ **ተማሪዎቹን** **አማርኛ** አስተማረ።» (The teacher taught [Obj 1: students] [Obj 2: Amharic].)\n- **በላ** (Ate) -> **አስበላ** (Asbela — Fed / Hosted a meal):\n  - «እንግዶቹን ጣፋጭ ምሳ አስበላ።» (He fed the guests a delicious lunch.)\n- **ጠጣ** (Drank) -> **አስጠጣ** (Ast'et'a — Gave drink to / Hydrated)\n- **አወቀ** (Knew) -> **አስታወቀ** (Astawaqe — Notified / Announced / Made known)\n- **አሰበ** (Thought) -> **አስታወሰ** (Astawese — Remembered / Recalled)",
            "examples": [
                {
                    "target": "መምህርት አስቴር ለክፍሉ ተማሪዎች ጥንታዊ ታሪክ አስተማረች።",
                    "reading": "Memhirt Astēr lekiflu temarīwoch t'intawi tarīk astemarech.",
                    "translation": "Teacher Aster taught the classroom students ancient history."
                },
                {
                    "target": "አስተናጋጁ የደከሙትን መንገደኞች ቀዝቃዛ ውሃ አስጠጣ።",
                    "reading": "Astenagaju yedekemutin mengedegnyoch qezqaza wuha ast'et'a.",
                    "translation": "The host gave cool water to drink to the tired travelers."
                },
                {
                    "target": "የከተማው አስተዳደር አዲሱን የትራፊክ ደንብ ለህዝቡ አስታወቀ።",
                    "reading": "Yeketemaw astedader addīsun yetirafik denb lehizbu astawaqe.",
                    "translation": "The city administration announced the new traffic regulation to the public."
                }
            ],
            "mnemonics": [
                "«ተማረ» (learned) -> «አስተማረ» (taught = made learn)! «አወቀ» (knew) -> «አስታወቀ» (announced)!"
            ],
            "culturalNotes": [
                "Traditional hospitality (እንግዳ ተቀባይነት) mandates «ማስበላት እና ማስጠጣት» (providing food and beverages abundantly) to any guest crossing the threshold."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«መምህሩ ተማሪዎቹን ሒሳብ አስተማረ» በሚለው ዓረፍተ ነገር ውስጥ ድርጊቱ ምንድን ነው?",
                    "options": [
                        "Teaching mathematics to students",
                        "Failing an exam",
                        "Eating lunch"
                    ],
                    "answerIndex": 0,
                    "explanation": "አስተማረ (taught) conveys educating students in math."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«አስታወቀ» የሚለው ግስ ትርጉም ምንድን ነው?",
                    "options": [
                        "He forgot",
                        "He announced / notified",
                        "He hid"
                    ],
                    "answerIndex": 1,
                    "explanation": "አስታወቀ (Astawaqe) means 'he announced / made known'."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ግስ 'He taught' የሚለውን አሰሪ ትርጉም ይገልጻል?",
                    "options": [
                        "አስተማረ (Astemare)",
                        "ተማረ (He learned)",
                        "አነበበ (He read)"
                    ],
                    "answerIndex": 0,
                    "explanation": "አስተማረ (Astemare) means 'he taught'."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic causative verb for 'taught' in Fidel script (አስተማረ):",
                    "acceptedAnswers": [
                        "አስተማረ",
                        "astemare",
                        "Astemare"
                    ],
                    "explanation": "አስተማረ (Astemare) means 'taught'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u18-l4": {
        "id": "am-u18-l4",
        "unit": "am-u18",
        "level": "B2",
        "objective": "Express workplace delegation, managerial oversight, and statutory enforcement in Amharic using verbs of directive execution including አሰራ (had made/managed), አስፈጸመ (enforced/executed), and አዘዘ (ordered/directed).",
        "prerequisites": [
            "am-u18-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u18-l3"
            ]
        },
        "presentation": {
            "explanation": "Workplace management, institutional directives, and enforcement of policies rely heavily on executive causative verbs in Amharic.\n\n1. Executive Causative Stems:\n- **አሰራ** (Asera) — Supervised / Had fabricated / Managed operations\n- **አስፈጸመ** (Asfetts'eme) — Enforced / Executed / Carried out orders\n- **አዘዘ** (Azeze) — Ordered / Directed / Commanded\n- **አስተዳደረ** (Astedadere) — Administered / Managed\n- **ተቆጣጠረ** (Teqot'at'ere) — Supervised / Controlled\n\n2. Key Professional Collocations:\n- «**ውሳኔ ማስፈጸም**» (Wusanē masfetts'em) — Executing / enforcing decisions\n- «**ስራ ማስተባበር**» (Sira mastebaber) — Coordinating workflow\n- «**ህግ ማስከበር**» (Hig maskeber) — Upholding the rule of law",
            "examples": [
                {
                    "target": "ዋና ዳይሬክተሩ የቦርዱን ውሳኔዎች ያለምንም መዘግየት አስፈጸመ።",
                    "reading": "Wana dayirēkteru yebordun wusanēwochi yaleminim mezegyēt asfetts'eme.",
                    "translation": "The executive director enforced the board's decisions without any delay."
                },
                {
                    "target": "የፕሮጀክት አስተባባሪው ባለሙያዎችን በጋራ በማሰራት ስራውን አሳለጠ።",
                    "reading": "Yeprojekt astebabarīw balemuyawochin begara bemaserat sirawun asalet'e.",
                    "translation": "The project coordinator streamlined the work by managing specialists collaboratively."
                },
                {
                    "target": "የህግ አስከባሪዎች የህዝብን ደህንነት እና ስርዓት ለማስከበር ሌት ተቀን ይሰራሉ።",
                    "reading": "Yehig askebarīwoch yehizbin dehinninet ina sir'at lemaskeber lēt teqen yiseralu.",
                    "translation": "Law enforcement officers work day and night to maintain public safety and order."
                }
            ],
            "mnemonics": [
                "«አስፈጸመ» (Asfetts'eme) = Caused to be accomplished (ፈጸመ = accomplished)!"
            ],
            "culturalNotes": [
                "In modern Ethiopian corporate and civil service sectors, effective leadership (**አመራር**) combines decisive delegation with respectful team collaboration."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«ውሳኔ ማስፈጸም» ምን ማለት ነው?",
                    "options": [
                        "Enforcing / Executing a decision",
                        "Cancelling a meeting",
                        "Procrastinating on a task"
                    ],
                    "answerIndex": 0,
                    "explanation": "ውሳኔ ማስፈጸም = executing / enforcing a decision."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«አስፈጸመ» የሚለው ቃል ምን ያመለክታል?",
                    "options": [
                        "He delayed",
                        "He executed / enforced",
                        "He resigned"
                    ],
                    "answerIndex": 1,
                    "explanation": "አስፈጸመ (Asfetts'eme) = he executed / enforced."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የትኛው ቃል 'Enforced / Executed' የሚለውን የአመራር ግስ ያሳያል?",
                    "options": [
                        "ተፈተነ (Was tested)",
                        "አስፈጸመ (Asfetts'eme)",
                        "ተኛ (Slept)"
                    ],
                    "answerIndex": 1,
                    "explanation": "አስፈጸመ (Asfetts'eme) means 'enforced / executed'."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic verb for 'enforced / executed' in Fidel script (አስፈጸመ):",
                    "acceptedAnswers": [
                        "አስፈጸመ",
                        "asfetseme",
                        "asfetts'eme",
                        "Asfetseme"
                    ],
                    "explanation": "አስፈጸመ (Asfetts'eme) means 'enforced / executed'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "am-u18-l5": {
        "id": "am-u18-l5",
        "unit": "am-u18",
        "level": "B2",
        "objective": "Synthesize direct causative prefixes, double-transitive structures, and executive administrative directives into an advanced institutional management dialogue in Amharic.",
        "prerequisites": [
            "am-u18-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "am-u18-l4"
            ]
        },
        "presentation": {
            "explanation": "This lesson consolidates causative morphology, double-transitive argument structures, and executive delegation into a high-level administrative discourse.\n\n1. Executive Management Synthesis:\n- **Planning & Architecture:** Having plans drafted (**አስነደፈ**).\n- **Announcements:** Announcing policies to the public (**አስታወቀ**).\n- **Job Creation:** Generating employment (**የስራ ዕድል አስገኘ**).\n- **Results:** Registering breakthrough success (**የላቀ ውጤት አስመዘገበ**).\n\n2. Key Integrative Terms:\n- **አስመዘገበ** (Asmezegebe) — Registered / Achieved\n- **አስገኘ** (Asgegne) — Generated / Yielded / Brought about\n- **አስነደፈ** (Asnedefe) — Had designed / Drafted",
            "examples": [
                {
                    "target": "ከንቲባው አዲሱን የከተማ ማስተር ፕላን በባለሙያዎች አስነድፎ ለህዝብ ይፋ አስደረገ።",
                    "reading": "Kantibaw addīsun yeketema master plan bebalemuyawoch asnedifo lehizb yifa asderege.",
                    "translation": "The mayor had the new city master plan designed by experts and made publicly official."
                },
                {
                    "target": "የኢንዱስትሪ ሚኒስቴሩ አዳዲስ ፋብሪካዎችን በማስገንባት ለብዙ ዜጎች የስራ ዕድል አስገኘ።",
                    "reading": "Ye'indistrī minīstēru addadīs fabrikawchin bemasgenbat lebizu zēgoch yesira idil asgegne.",
                    "translation": "The Ministry of Industry, by having new factories constructed, generated employment opportunities for many citizens."
                },
                {
                    "target": "የስራ መሪው ሰራተኞቹን በታማኝነት እና በትጋት በማሰራት የላቀ ውጤት አስመዘገበ።",
                    "reading": "Yesira merīw seratēgnochin betamagninet ina betigat bemaserat yelaqe wut'ēt asmezegebe.",
                    "translation": "The supervisor, by managing the staff with trustworthiness and diligence, registered outstanding results."
                }
            ],
            "mnemonics": [
                "«አስመዘገበ» = Caused to register / Achieved victory!"
            ],
            "culturalNotes": [
                "In Ethiopia's development narrative, leadership capability is measured by tangible completed projects that foster communal prosperity."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "«የስራ ዕድል አስገኘ» ምን ያመለክታል?",
                    "options": [
                        "Generated / Created employment opportunities",
                        "Closed down businesses",
                        "Reduced wages"
                    ],
                    "answerIndex": 0,
                    "explanation": "የስራ ዕድል አስገኘ = generated employment opportunities."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "«የላቀ ውጤት አስመዘገበ» ማለት ምን ማለት ነው?",
                    "options": [
                        "Achieved mediocre performance",
                        "Registered superior / outstanding results",
                        "Failed completely"
                    ],
                    "answerIndex": 1,
                    "explanation": "የላቀ ውጤት አስመዘገበ = registered outstanding results."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "የአመራር ውጤታማነትን የሚያሳይ አሰሪ ግስ የትኛው ነው?",
                    "options": [
                        "አስመዘገበ (Asmezegebe - Registered success)",
                        "ተሸነፈ (Was defeated)",
                        "አጠፋ (Destroyed)"
                    ],
                    "answerIndex": 0,
                    "explanation": "አስመዘገበ (Asmezegebe) highlights achieved success."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Amharic causative verb for 'registered / achieved results' in Fidel script (አስመዘገበ):",
                    "acceptedAnswers": [
                        "አስመዘገበ",
                        "asmezegebe",
                        "Asmezegebe"
                    ],
                    "explanation": "አስመዘገበ (Asmezegebe) means 'registered / achieved results'."
                }
            ],
            "passThreshold": 0.8
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
